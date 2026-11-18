(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Q0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ah={exports:{}},io={},oh={exports:{}},Nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function P_(){if(bm)return Nt;bm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),M=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=M&&F[M]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function _(F,ie,De){this.props=F,this.context=ie,this.refs=A,this.updater=De||y}_.prototype.isReactComponent={},_.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=_.prototype;function L(F,ie,De){this.props=F,this.context=ie,this.refs=A,this.updater=De||y}var B=L.prototype=new S;B.constructor=L,E(B,_.prototype),B.isPureReactComponent=!0;var P=Array.isArray,z=Object.prototype.hasOwnProperty,U={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function R(F,ie,De){var re,Me={},Ee=null,Be=null;if(ie!=null)for(re in ie.ref!==void 0&&(Be=ie.ref),ie.key!==void 0&&(Ee=""+ie.key),ie)z.call(ie,re)&&!T.hasOwnProperty(re)&&(Me[re]=ie[re]);var Te=arguments.length-2;if(Te===1)Me.children=De;else if(1<Te){for(var Oe=Array(Te),ot=0;ot<Te;ot++)Oe[ot]=arguments[ot+2];Me.children=Oe}if(F&&F.defaultProps)for(re in Te=F.defaultProps,Te)Me[re]===void 0&&(Me[re]=Te[re]);return{$$typeof:s,type:F,key:Ee,ref:Be,props:Me,_owner:U.current}}function O(F,ie){return{$$typeof:s,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function V(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function K(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(De){return ie[De]})}var q=/\/+/g;function ue(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?K(""+F.key):ie.toString(36)}function k(F,ie,De,re,Me){var Ee=typeof F;(Ee==="undefined"||Ee==="boolean")&&(F=null);var Be=!1;if(F===null)Be=!0;else switch(Ee){case"string":case"number":Be=!0;break;case"object":switch(F.$$typeof){case s:case e:Be=!0}}if(Be)return Be=F,Me=Me(Be),F=re===""?"."+ue(Be,0):re,P(Me)?(De="",F!=null&&(De=F.replace(q,"$&/")+"/"),k(Me,ie,De,"",function(ot){return ot})):Me!=null&&(V(Me)&&(Me=O(Me,De+(!Me.key||Be&&Be.key===Me.key?"":(""+Me.key).replace(q,"$&/")+"/")+F)),ie.push(Me)),1;if(Be=0,re=re===""?".":re+":",P(F))for(var Te=0;Te<F.length;Te++){Ee=F[Te];var Oe=re+ue(Ee,Te);Be+=k(Ee,ie,De,Oe,Me)}else if(Oe=v(F),typeof Oe=="function")for(F=Oe.call(F),Te=0;!(Ee=F.next()).done;)Ee=Ee.value,Oe=re+ue(Ee,Te++),Be+=k(Ee,ie,De,Oe,Me);else if(Ee==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return Be}function ee(F,ie,De){if(F==null)return F;var re=[],Me=0;return k(F,re,"","",function(Ee){return ie.call(De,Ee,Me++)}),re}function me(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(De){(F._status===0||F._status===-1)&&(F._status=1,F._result=De)},function(De){(F._status===0||F._status===-1)&&(F._status=2,F._result=De)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var Q={current:null},te={transition:null},Z={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:te,ReactCurrentOwner:U};function $(){throw Error("act(...) is not supported in production builds of React.")}return Nt.Children={map:ee,forEach:function(F,ie,De){ee(F,function(){ie.apply(this,arguments)},De)},count:function(F){var ie=0;return ee(F,function(){ie++}),ie},toArray:function(F){return ee(F,function(ie){return ie})||[]},only:function(F){if(!V(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Nt.Component=_,Nt.Fragment=t,Nt.Profiler=o,Nt.PureComponent=L,Nt.StrictMode=r,Nt.Suspense=p,Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,Nt.act=$,Nt.cloneElement=function(F,ie,De){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var re=E({},F.props),Me=F.key,Ee=F.ref,Be=F._owner;if(ie!=null){if(ie.ref!==void 0&&(Ee=ie.ref,Be=U.current),ie.key!==void 0&&(Me=""+ie.key),F.type&&F.type.defaultProps)var Te=F.type.defaultProps;for(Oe in ie)z.call(ie,Oe)&&!T.hasOwnProperty(Oe)&&(re[Oe]=ie[Oe]===void 0&&Te!==void 0?Te[Oe]:ie[Oe])}var Oe=arguments.length-2;if(Oe===1)re.children=De;else if(1<Oe){Te=Array(Oe);for(var ot=0;ot<Oe;ot++)Te[ot]=arguments[ot+2];re.children=Te}return{$$typeof:s,type:F.type,key:Me,ref:Ee,props:re,_owner:Be}},Nt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},Nt.createElement=R,Nt.createFactory=function(F){var ie=R.bind(null,F);return ie.type=F,ie},Nt.createRef=function(){return{current:null}},Nt.forwardRef=function(F){return{$$typeof:d,render:F}},Nt.isValidElement=V,Nt.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:me}},Nt.memo=function(F,ie){return{$$typeof:m,type:F,compare:ie===void 0?null:ie}},Nt.startTransition=function(F){var ie=te.transition;te.transition={};try{F()}finally{te.transition=ie}},Nt.unstable_act=$,Nt.useCallback=function(F,ie){return Q.current.useCallback(F,ie)},Nt.useContext=function(F){return Q.current.useContext(F)},Nt.useDebugValue=function(){},Nt.useDeferredValue=function(F){return Q.current.useDeferredValue(F)},Nt.useEffect=function(F,ie){return Q.current.useEffect(F,ie)},Nt.useId=function(){return Q.current.useId()},Nt.useImperativeHandle=function(F,ie,De){return Q.current.useImperativeHandle(F,ie,De)},Nt.useInsertionEffect=function(F,ie){return Q.current.useInsertionEffect(F,ie)},Nt.useLayoutEffect=function(F,ie){return Q.current.useLayoutEffect(F,ie)},Nt.useMemo=function(F,ie){return Q.current.useMemo(F,ie)},Nt.useReducer=function(F,ie,De){return Q.current.useReducer(F,ie,De)},Nt.useRef=function(F){return Q.current.useRef(F)},Nt.useState=function(F){return Q.current.useState(F)},Nt.useSyncExternalStore=function(F,ie,De){return Q.current.useSyncExternalStore(F,ie,De)},Nt.useTransition=function(){return Q.current.useTransition()},Nt.version="18.3.1",Nt}var Nm;function Hd(){return Nm||(Nm=1,oh.exports=P_()),oh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function D_(){if(Rm)return io;Rm=1;var s=Hd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var x,M={},v=null,y=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(y=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(M[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)M[x]===void 0&&(M[x]=p[x]);return{$$typeof:e,type:d,key:v,ref:y,props:M,_owner:o.current}}return io.Fragment=t,io.jsx=u,io.jsxs=u,io}var Pm;function L_(){return Pm||(Pm=1,ah.exports=D_()),ah.exports}var f=L_(),Pt=Hd();const I_=Q0(Pt);var Al={},lh={exports:{}},li={},ch={exports:{}},uh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function U_(){return Dm||(Dm=1,(function(s){function e(te,Z){var $=te.length;te.push(Z);e:for(;0<$;){var F=$-1>>>1,ie=te[F];if(0<o(ie,Z))te[F]=Z,te[$]=ie,$=F;else break e}}function t(te){return te.length===0?null:te[0]}function r(te){if(te.length===0)return null;var Z=te[0],$=te.pop();if($!==Z){te[0]=$;e:for(var F=0,ie=te.length,De=ie>>>1;F<De;){var re=2*(F+1)-1,Me=te[re],Ee=re+1,Be=te[Ee];if(0>o(Me,$))Ee<ie&&0>o(Be,Me)?(te[F]=Be,te[Ee]=$,F=Ee):(te[F]=Me,te[re]=$,F=re);else if(Ee<ie&&0>o(Be,$))te[F]=Be,te[Ee]=$,F=Ee;else break e}}return Z}function o(te,Z){var $=te.sortIndex-Z.sortIndex;return $!==0?$:te.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],x=1,M=null,v=3,y=!1,E=!1,A=!1,_=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(te){for(var Z=t(m);Z!==null;){if(Z.callback===null)r(m);else if(Z.startTime<=te)r(m),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=t(m)}}function P(te){if(A=!1,B(te),!E)if(t(p)!==null)E=!0,me(z);else{var Z=t(m);Z!==null&&Q(P,Z.startTime-te)}}function z(te,Z){E=!1,A&&(A=!1,S(R),R=-1),y=!0;var $=v;try{for(B(Z),M=t(p);M!==null&&(!(M.expirationTime>Z)||te&&!K());){var F=M.callback;if(typeof F=="function"){M.callback=null,v=M.priorityLevel;var ie=F(M.expirationTime<=Z);Z=s.unstable_now(),typeof ie=="function"?M.callback=ie:M===t(p)&&r(p),B(Z)}else r(p);M=t(p)}if(M!==null)var De=!0;else{var re=t(m);re!==null&&Q(P,re.startTime-Z),De=!1}return De}finally{M=null,v=$,y=!1}}var U=!1,T=null,R=-1,O=5,V=-1;function K(){return!(s.unstable_now()-V<O)}function q(){if(T!==null){var te=s.unstable_now();V=te;var Z=!0;try{Z=T(!0,te)}finally{Z?ue():(U=!1,T=null)}}else U=!1}var ue;if(typeof L=="function")ue=function(){L(q)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,ee=k.port2;k.port1.onmessage=q,ue=function(){ee.postMessage(null)}}else ue=function(){_(q,0)};function me(te){T=te,U||(U=!0,ue())}function Q(te,Z){R=_(function(){te(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(te){te.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,me(z))},s.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<te?Math.floor(1e3/te):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(te){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var $=v;v=Z;try{return te()}finally{v=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(te,Z){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var $=v;v=te;try{return Z()}finally{v=$}},s.unstable_scheduleCallback=function(te,Z,$){var F=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?F+$:F):$=F,te){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=$+ie,te={id:x++,callback:Z,priorityLevel:te,startTime:$,expirationTime:ie,sortIndex:-1},$>F?(te.sortIndex=$,e(m,te),t(p)===null&&te===t(m)&&(A?(S(R),R=-1):A=!0,Q(P,$-F))):(te.sortIndex=ie,e(p,te),E||y||(E=!0,me(z))),te},s.unstable_shouldYield=K,s.unstable_wrapCallback=function(te){var Z=v;return function(){var $=v;v=Z;try{return te.apply(this,arguments)}finally{v=$}}}})(uh)),uh}var Lm;function O_(){return Lm||(Lm=1,ch.exports=U_()),ch.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function F_(){if(Im)return li;Im=1;var s=Hd(),e=O_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},M={};function v(n){return p.call(M,n)?!0:p.call(x,n)?!1:m.test(n)?M[n]=!0:(x[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,h,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,L);_[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,L);_[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,L);_[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function B(n,i,a,c){var h=_.hasOwnProperty(i)?_[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,c)&&(a=null),c||h===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),U=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),K=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),te=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var $=Object.assign,F;function ie(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var De=!1;function re(n,i){if(!n||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ge){var c=ge}Reflect.construct(n,[],i)}else{try{i.call()}catch(ge){c=ge}n.call(i.prototype)}else{try{throw Error()}catch(ge){c=ge}n()}}catch(ge){if(ge&&c&&typeof ge.stack=="string"){for(var h=ge.stack.split(`
`),g=c.stack.split(`
`),w=h.length-1,H=g.length-1;1<=w&&0<=H&&h[w]!==g[H];)H--;for(;1<=w&&0<=H;w--,H--)if(h[w]!==g[H]){if(w!==1||H!==1)do if(w--,H--,0>H||h[w]!==g[H]){var j=`
`+h[w].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=w&&0<=H);break}}}finally{De=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ie(n):""}function Me(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=re(n.type,!1),n;case 11:return n=re(n.type.render,!1),n;case 1:return n=re(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case T:return"Fragment";case U:return"Portal";case O:return"Profiler";case R:return"StrictMode";case ue:return"Suspense";case k:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case K:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ee:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case me:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function Be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Oe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ot(n){var i=Oe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function nt(n){n._valueTracker||(n._valueTracker=ot(n))}function ut(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Oe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Tt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yt(n,i){var a=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ot(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Te(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Qt(n,i){i=i.checked,i!=null&&B(n,"checked",i,!1)}function Jt(n,i){Qt(n,i);var a=Te(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Rt(n,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ut(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Rt(n,i,a){(i!=="number"||Tt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var he=Array.isArray;function ht(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Te(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function lt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function pt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(he(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Te(a)}}function G(n,i){var a=Te(i.value),c=Te(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function St(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function mt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?mt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Xt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function st(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var We={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I=["Webkit","ms","Moz","O"];Object.keys(We).forEach(function(n){I.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),We[i]=We[n]})});function C(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||We.hasOwnProperty(n)&&We[n]?(""+i).trim():i+"px"}function J(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=C(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Ae=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Se(n,i){if(i){if(Ae[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Le(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=null;function ve(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xe=null,se=null,D=null;function ce(n){if(n=Va(n)){if(typeof xe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Vo(i),xe(n.stateNode,n.type,i))}}function X(n){se?D?D.push(n):D=[n]:se=n}function pe(){if(se){var n=se,i=D;if(D=se=null,ce(n),i)for(n=0;n<i.length;n++)ce(i[n])}}function _e(n,i){return n(i)}function ae(){}var be=!1;function Ve(n,i,a){if(be)return n(i,a);be=!0;try{return _e(n,i,a)}finally{be=!1,(se!==null||D!==null)&&(ae(),pe())}}function ye(n,i){var a=n.stateNode;if(a===null)return null;var c=Vo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ze=!1;if(d)try{var Xe={};Object.defineProperty(Xe,"passive",{get:function(){ze=!0}}),window.addEventListener("test",Xe,Xe),window.removeEventListener("test",Xe,Xe)}catch{ze=!1}function Re(n,i,a,c,h,g,w,H,j){var ge=Array.prototype.slice.call(arguments,3);try{i.apply(a,ge)}catch(Ne){this.onError(Ne)}}var ct=!1,Ze=null,tn=!1,Ct=null,qt={onError:function(n){ct=!0,Ze=n}};function un(n,i,a,c,h,g,w,H,j){ct=!1,Ze=null,Re.apply(qt,arguments)}function Yn(n,i,a,c,h,g,w,H,j){if(un.apply(this,arguments),ct){if(ct){var ge=Ze;ct=!1,Ze=null}else throw Error(t(198));tn||(tn=!0,Ct=ge)}}function mn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function hn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function xn(n){if(mn(n)!==n)throw Error(t(188))}function gn(n){var i=n.alternate;if(!i){if(i=mn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return xn(h),n;if(g===c)return xn(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var w=!1,H=h.child;H;){if(H===a){w=!0,a=h,c=g;break}if(H===c){w=!0,c=h,a=g;break}H=H.sibling}if(!w){for(H=g.child;H;){if(H===a){w=!0,a=g,c=h;break}if(H===c){w=!0,c=g,a=h;break}H=H.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function dn(n){return n=gn(n),n!==null?ti(n):null}function ti(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ti(n);if(i!==null)return i;n=n.sibling}return null}var hi=e.unstable_scheduleCallback,di=e.unstable_cancelCallback,ni=e.unstable_shouldYield,fi=e.unstable_requestPaint,Kt=e.unstable_now,Ar=e.unstable_getCurrentPriorityLevel,Ri=e.unstable_ImmediatePriority,br=e.unstable_UserBlockingPriority,ji=e.unstable_NormalPriority,or=e.unstable_LowPriority,b=e.unstable_IdlePriority,W=null,de=null;function oe(n){if(de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(W,n,void 0,(n.current.flags&128)===128)}catch{}}var ne=Math.clz32?Math.clz32:Fe,ke=Math.log,Ye=Math.LN2;function Fe(n){return n>>>=0,n===0?32:31-(ke(n)/Ye|0)|0}var He=64,Qe=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var H=w&~h;H!==0?c=gt(H):(g&=w,g!==0&&(c=gt(g)))}else w=a&~h,w!==0?c=gt(w):g!==0&&(c=gt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ne(i),h=1<<a,c|=n[a],i&=~h;return c}function Je(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-ne(g),H=1<<w,j=h[w];j===-1?((H&a)===0||(H&c)!==0)&&(h[w]=Je(H,i)):j<=i&&(n.expiredLanes|=H),g&=~H}}function sn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Gt(){var n=He;return He<<=1,(He&4194240)===0&&(He=64),n}function Ht(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function fn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ne(i),n[i]=a}function et(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-ne(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function Mn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ne(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var rt=0;function Xi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Tn,Nr,Pi,Ki,Dt,vn=!1,Bn=[],Bt=null,Yt=null,Pn=null,Rr=new Map,Aa=new Map,Pr=[],Jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hf(n,i){switch(n){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Rr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(i.pointerId)}}function ba(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Va(i),i!==null&&Nr(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function ev(n,i,a,c,h){switch(i){case"focusin":return Bt=ba(Bt,n,i,a,c,h),!0;case"dragenter":return Yt=ba(Yt,n,i,a,c,h),!0;case"mouseover":return Pn=ba(Pn,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return Rr.set(g,ba(Rr.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,Aa.set(g,ba(Aa.get(g)||null,n,i,a,c,h)),!0}return!1}function df(n){var i=as(n.target);if(i!==null){var a=mn(i);if(a!==null){if(i=a.tag,i===13){if(i=hn(a),i!==null){n.blockedOn=i,Dt(n.priority,function(){Pi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Lc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ue=c,a.target.dispatchEvent(c),Ue=null}else return i=Va(a),i!==null&&Nr(i),n.blockedOn=a,!1;i.shift()}return!0}function ff(n,i,a){bo(n)&&a.delete(i)}function tv(){vn=!1,Bt!==null&&bo(Bt)&&(Bt=null),Yt!==null&&bo(Yt)&&(Yt=null),Pn!==null&&bo(Pn)&&(Pn=null),Rr.forEach(ff),Aa.forEach(ff)}function Na(n,i){n.blockedOn===i&&(n.blockedOn=null,vn||(vn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,tv)))}function Ra(n){function i(h){return Na(h,n)}if(0<Bn.length){Na(Bn[0],n);for(var a=1;a<Bn.length;a++){var c=Bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Bt!==null&&Na(Bt,n),Yt!==null&&Na(Yt,n),Pn!==null&&Na(Pn,n),Rr.forEach(i),Aa.forEach(i),a=0;a<Pr.length;a++)c=Pr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Pr.length&&(a=Pr[0],a.blockedOn===null);)df(a),a.blockedOn===null&&Pr.shift()}var Ns=P.ReactCurrentBatchConfig,No=!0;function nv(n,i,a,c){var h=rt,g=Ns.transition;Ns.transition=null;try{rt=1,Dc(n,i,a,c)}finally{rt=h,Ns.transition=g}}function iv(n,i,a,c){var h=rt,g=Ns.transition;Ns.transition=null;try{rt=4,Dc(n,i,a,c)}finally{rt=h,Ns.transition=g}}function Dc(n,i,a,c){if(No){var h=Lc(n,i,a,c);if(h===null)$c(n,i,c,Ro,a),hf(n,c);else if(ev(h,n,i,a,c))c.stopPropagation();else if(hf(n,c),i&4&&-1<Jg.indexOf(n)){for(;h!==null;){var g=Va(h);if(g!==null&&Tn(g),g=Lc(n,i,a,c),g===null&&$c(n,i,c,Ro,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else $c(n,i,c,null,a)}}var Ro=null;function Lc(n,i,a,c){if(Ro=null,n=ve(c),n=as(n),n!==null)if(i=mn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=hn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ro=n,null}function pf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ar()){case Ri:return 1;case br:return 4;case ji:case or:return 16;case b:return 536870912;default:return 16}default:return 16}}var Dr=null,Ic=null,Po=null;function mf(){if(Po)return Po;var n,i=Ic,a=i.length,c,h="value"in Dr?Dr.value:Dr.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===h[g-c];c++);return Po=h.slice(n,1<c?1-c:void 0)}function Do(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Lo(){return!0}function gf(){return!1}function pi(n){function i(a,c,h,g,w){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(a=n[H],this[H]=a?a(g):g[H]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Lo:gf,this.isPropagationStopped=gf,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),i}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uc=pi(Rs),Pa=$({},Rs,{view:0,detail:0}),rv=pi(Pa),Oc,Fc,Da,Io=$({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Da&&(Da&&n.type==="mousemove"?(Oc=n.screenX-Da.screenX,Fc=n.screenY-Da.screenY):Fc=Oc=0,Da=n),Oc)},movementY:function(n){return"movementY"in n?n.movementY:Fc}}),vf=pi(Io),sv=$({},Io,{dataTransfer:0}),av=pi(sv),ov=$({},Pa,{relatedTarget:0}),kc=pi(ov),lv=$({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),cv=pi(lv),uv=$({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),hv=pi(uv),dv=$({},Rs,{data:0}),_f=pi(dv),fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=mv[n])?!!i[n]:!1}function Bc(){return gv}var vv=$({},Pa,{key:function(n){if(n.key){var i=fv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Do(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?pv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(n){return n.type==="keypress"?Do(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Do(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),_v=pi(vv),xv=$({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=pi(xv),yv=$({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),Sv=pi(yv),Mv=$({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tv=pi(Mv),Ev=$({},Io,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=pi(Ev),Cv=[9,13,27,32],zc=d&&"CompositionEvent"in window,La=null;d&&"documentMode"in document&&(La=document.documentMode);var Av=d&&"TextEvent"in window&&!La,yf=d&&(!zc||La&&8<La&&11>=La),Sf=" ",Mf=!1;function Tf(n,i){switch(n){case"keyup":return Cv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ps=!1;function bv(n,i){switch(n){case"compositionend":return Ef(i);case"keypress":return i.which!==32?null:(Mf=!0,Sf);case"textInput":return n=i.data,n===Sf&&Mf?null:n;default:return null}}function Nv(n,i){if(Ps)return n==="compositionend"||!zc&&Tf(n,i)?(n=mf(),Po=Ic=Dr=null,Ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return yf&&i.locale!=="ko"?null:i.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Rv[n.type]:i==="textarea"}function Cf(n,i,a,c){X(c),i=Bo(i,"onChange"),0<i.length&&(a=new Uc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ia=null,Ua=null;function Pv(n){Wf(n,0)}function Uo(n){var i=Os(n);if(ut(i))return n}function Dv(n,i){if(n==="change")return i}var Af=!1;if(d){var Hc;if(d){var Vc="oninput"in document;if(!Vc){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),Vc=typeof bf.oninput=="function"}Hc=Vc}else Hc=!1;Af=Hc&&(!document.documentMode||9<document.documentMode)}function Nf(){Ia&&(Ia.detachEvent("onpropertychange",Rf),Ua=Ia=null)}function Rf(n){if(n.propertyName==="value"&&Uo(Ua)){var i=[];Cf(i,Ua,n,ve(n)),Ve(Pv,i)}}function Lv(n,i,a){n==="focusin"?(Nf(),Ia=i,Ua=a,Ia.attachEvent("onpropertychange",Rf)):n==="focusout"&&Nf()}function Iv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Uo(Ua)}function Uv(n,i){if(n==="click")return Uo(i)}function Ov(n,i){if(n==="input"||n==="change")return Uo(i)}function Fv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Di=typeof Object.is=="function"?Object.is:Fv;function Oa(n,i){if(Di(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!Di(n[h],i[h]))return!1}return!0}function Pf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Df(n,i){var a=Pf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pf(a)}}function Lf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Lf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function If(){for(var n=window,i=Tt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Tt(n.document)}return i}function Gc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function kv(n){var i=If(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Lf(a.ownerDocument.documentElement,a)){if(c!==null&&Gc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=Df(a,g);var w=Df(a,c);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Bv=d&&"documentMode"in document&&11>=document.documentMode,Ds=null,Wc=null,Fa=null,jc=!1;function Uf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jc||Ds==null||Ds!==Tt(c)||(c=Ds,"selectionStart"in c&&Gc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Fa&&Oa(Fa,c)||(Fa=c,c=Bo(Wc,"onSelect"),0<c.length&&(i=new Uc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ds)))}function Oo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ls={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},Xc={},Of={};d&&(Of=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Fo(n){if(Xc[n])return Xc[n];if(!Ls[n])return n;var i=Ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Of)return Xc[n]=i[a];return n}var Ff=Fo("animationend"),kf=Fo("animationiteration"),Bf=Fo("animationstart"),zf=Fo("transitionend"),Hf=new Map,Vf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(n,i){Hf.set(n,i),l(i,[n])}for(var Kc=0;Kc<Vf.length;Kc++){var qc=Vf[Kc],zv=qc.toLowerCase(),Hv=qc[0].toUpperCase()+qc.slice(1);Lr(zv,"on"+Hv)}Lr(Ff,"onAnimationEnd"),Lr(kf,"onAnimationIteration"),Lr(Bf,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(zf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ka));function Gf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Yn(c,i,void 0,n),n.currentTarget=null}function Wf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var w=c.length-1;0<=w;w--){var H=c[w],j=H.instance,ge=H.currentTarget;if(H=H.listener,j!==g&&h.isPropagationStopped())break e;Gf(h,H,ge),g=j}else for(w=0;w<c.length;w++){if(H=c[w],j=H.instance,ge=H.currentTarget,H=H.listener,j!==g&&h.isPropagationStopped())break e;Gf(h,H,ge),g=j}}}if(tn)throw n=Ct,tn=!1,Ct=null,n}function nn(n,i){var a=i[nu];a===void 0&&(a=i[nu]=new Set);var c=n+"__bubble";a.has(c)||(jf(i,n,2,!1),a.add(c))}function Yc(n,i,a){var c=0;i&&(c|=4),jf(a,n,c,i)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Ba(n){if(!n[ko]){n[ko]=!0,r.forEach(function(a){a!=="selectionchange"&&(Vv.has(a)||Yc(a,!1,n),Yc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ko]||(i[ko]=!0,Yc("selectionchange",!1,i))}}function jf(n,i,a,c){switch(pf(i)){case 1:var h=nv;break;case 4:h=iv;break;default:h=Dc}a=h.bind(null,i,a,n),h=void 0,!ze||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function $c(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var H=c.stateNode.containerInfo;if(H===h||H.nodeType===8&&H.parentNode===h)break;if(w===4)for(w=c.return;w!==null;){var j=w.tag;if((j===3||j===4)&&(j=w.stateNode.containerInfo,j===h||j.nodeType===8&&j.parentNode===h))return;w=w.return}for(;H!==null;){if(w=as(H),w===null)return;if(j=w.tag,j===5||j===6){c=g=w;continue e}H=H.parentNode}}c=c.return}Ve(function(){var ge=g,Ne=ve(a),Pe=[];e:{var we=Hf.get(n);if(we!==void 0){var Ke=Uc,tt=n;switch(n){case"keypress":if(Do(a)===0)break e;case"keydown":case"keyup":Ke=_v;break;case"focusin":tt="focus",Ke=kc;break;case"focusout":tt="blur",Ke=kc;break;case"beforeblur":case"afterblur":Ke=kc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ke=vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ke=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ke=Sv;break;case Ff:case kf:case Bf:Ke=cv;break;case zf:Ke=Tv;break;case"scroll":Ke=rv;break;case"wheel":Ke=wv;break;case"copy":case"cut":case"paste":Ke=hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ke=xf}var it=(i&4)!==0,_n=!it&&n==="scroll",le=it?we!==null?we+"Capture":null:we;it=[];for(var Y=ge,fe;Y!==null;){fe=Y;var Ie=fe.stateNode;if(fe.tag===5&&Ie!==null&&(fe=Ie,le!==null&&(Ie=ye(Y,le),Ie!=null&&it.push(za(Y,Ie,fe)))),_n)break;Y=Y.return}0<it.length&&(we=new Ke(we,tt,null,a,Ne),Pe.push({event:we,listeners:it}))}}if((i&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",Ke=n==="mouseout"||n==="pointerout",we&&a!==Ue&&(tt=a.relatedTarget||a.fromElement)&&(as(tt)||tt[lr]))break e;if((Ke||we)&&(we=Ne.window===Ne?Ne:(we=Ne.ownerDocument)?we.defaultView||we.parentWindow:window,Ke?(tt=a.relatedTarget||a.toElement,Ke=ge,tt=tt?as(tt):null,tt!==null&&(_n=mn(tt),tt!==_n||tt.tag!==5&&tt.tag!==6)&&(tt=null)):(Ke=null,tt=ge),Ke!==tt)){if(it=vf,Ie="onMouseLeave",le="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(it=xf,Ie="onPointerLeave",le="onPointerEnter",Y="pointer"),_n=Ke==null?we:Os(Ke),fe=tt==null?we:Os(tt),we=new it(Ie,Y+"leave",Ke,a,Ne),we.target=_n,we.relatedTarget=fe,Ie=null,as(Ne)===ge&&(it=new it(le,Y+"enter",tt,a,Ne),it.target=fe,it.relatedTarget=_n,Ie=it),_n=Ie,Ke&&tt)t:{for(it=Ke,le=tt,Y=0,fe=it;fe;fe=Is(fe))Y++;for(fe=0,Ie=le;Ie;Ie=Is(Ie))fe++;for(;0<Y-fe;)it=Is(it),Y--;for(;0<fe-Y;)le=Is(le),fe--;for(;Y--;){if(it===le||le!==null&&it===le.alternate)break t;it=Is(it),le=Is(le)}it=null}else it=null;Ke!==null&&Xf(Pe,we,Ke,it,!1),tt!==null&&_n!==null&&Xf(Pe,_n,tt,it,!0)}}e:{if(we=ge?Os(ge):window,Ke=we.nodeName&&we.nodeName.toLowerCase(),Ke==="select"||Ke==="input"&&we.type==="file")var at=Dv;else if(wf(we))if(Af)at=Ov;else{at=Iv;var dt=Lv}else(Ke=we.nodeName)&&Ke.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(at=Uv);if(at&&(at=at(n,ge))){Cf(Pe,at,a,Ne);break e}dt&&dt(n,we,ge),n==="focusout"&&(dt=we._wrapperState)&&dt.controlled&&we.type==="number"&&Rt(we,"number",we.value)}switch(dt=ge?Os(ge):window,n){case"focusin":(wf(dt)||dt.contentEditable==="true")&&(Ds=dt,Wc=ge,Fa=null);break;case"focusout":Fa=Wc=Ds=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Uf(Pe,a,Ne);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":Uf(Pe,a,Ne)}var ft;if(zc)e:{switch(n){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Ps?Tf(n,a)&&(_t="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(yf&&a.locale!=="ko"&&(Ps||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Ps&&(ft=mf()):(Dr=Ne,Ic="value"in Dr?Dr.value:Dr.textContent,Ps=!0)),dt=Bo(ge,_t),0<dt.length&&(_t=new _f(_t,n,null,a,Ne),Pe.push({event:_t,listeners:dt}),ft?_t.data=ft:(ft=Ef(a),ft!==null&&(_t.data=ft)))),(ft=Av?bv(n,a):Nv(n,a))&&(ge=Bo(ge,"onBeforeInput"),0<ge.length&&(Ne=new _f("onBeforeInput","beforeinput",null,a,Ne),Pe.push({event:Ne,listeners:ge}),Ne.data=ft))}Wf(Pe,i)})}function za(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Bo(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=ye(n,a),g!=null&&c.unshift(za(n,g,h)),g=ye(n,i),g!=null&&c.push(za(n,g,h))),n=n.return}return c}function Is(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xf(n,i,a,c,h){for(var g=i._reactName,w=[];a!==null&&a!==c;){var H=a,j=H.alternate,ge=H.stateNode;if(j!==null&&j===c)break;H.tag===5&&ge!==null&&(H=ge,h?(j=ye(a,g),j!=null&&w.unshift(za(a,j,H))):h||(j=ye(a,g),j!=null&&w.push(za(a,j,H)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var Gv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function Kf(n){return(typeof n=="string"?n:""+n).replace(Gv,`
`).replace(Wv,"")}function zo(n,i,a){if(i=Kf(i),Kf(n)!==i&&a)throw Error(t(425))}function Ho(){}var Zc=null,Qc=null;function Jc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var eu=typeof setTimeout=="function"?setTimeout:void 0,jv=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(n){return qf.resolve(null).then(n).catch(Kv)}:eu;function Kv(n){setTimeout(function(){throw n})}function tu(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),Ra(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);Ra(i)}function Ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Yf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Us=Math.random().toString(36).slice(2),qi="__reactFiber$"+Us,Ha="__reactProps$"+Us,lr="__reactContainer$"+Us,nu="__reactEvents$"+Us,qv="__reactListeners$"+Us,Yv="__reactHandles$"+Us;function as(n){var i=n[qi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[lr]||a[qi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Yf(n);n!==null;){if(a=n[qi])return a;n=Yf(n)}return i}n=a,a=n.parentNode}return null}function Va(n){return n=n[qi]||n[lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Os(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Vo(n){return n[Ha]||null}var iu=[],Fs=-1;function Ur(n){return{current:n}}function rn(n){0>Fs||(n.current=iu[Fs],iu[Fs]=null,Fs--)}function en(n,i){Fs++,iu[Fs]=n.current,n.current=i}var Or={},zn=Ur(Or),ii=Ur(!1),os=Or;function ks(n,i){var a=n.type.contextTypes;if(!a)return Or;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function ri(n){return n=n.childContextTypes,n!=null}function Go(){rn(ii),rn(zn)}function $f(n,i,a){if(zn.current!==Or)throw Error(t(168));en(zn,i),en(ii,a)}function Zf(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,Be(n)||"Unknown",h));return $({},a,c)}function Wo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Or,os=zn.current,en(zn,n),en(ii,ii.current),!0}function Qf(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Zf(n,i,os),c.__reactInternalMemoizedMergedChildContext=n,rn(ii),rn(zn),en(zn,n)):rn(ii),en(ii,a)}var cr=null,jo=!1,ru=!1;function Jf(n){cr===null?cr=[n]:cr.push(n)}function $v(n){jo=!0,Jf(n)}function Fr(){if(!ru&&cr!==null){ru=!0;var n=0,i=rt;try{var a=cr;for(rt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}cr=null,jo=!1}catch(h){throw cr!==null&&(cr=cr.slice(n+1)),hi(Ri,Fr),h}finally{rt=i,ru=!1}}return null}var Bs=[],zs=0,Xo=null,Ko=0,Mi=[],Ti=0,ls=null,ur=1,hr="";function cs(n,i){Bs[zs++]=Ko,Bs[zs++]=Xo,Xo=n,Ko=i}function ep(n,i,a){Mi[Ti++]=ur,Mi[Ti++]=hr,Mi[Ti++]=ls,ls=n;var c=ur;n=hr;var h=32-ne(c)-1;c&=~(1<<h),a+=1;var g=32-ne(i)+h;if(30<g){var w=h-h%5;g=(c&(1<<w)-1).toString(32),c>>=w,h-=w,ur=1<<32-ne(i)+h|a<<h|c,hr=g+n}else ur=1<<g|a<<h|c,hr=n}function su(n){n.return!==null&&(cs(n,1),ep(n,1,0))}function au(n){for(;n===Xo;)Xo=Bs[--zs],Bs[zs]=null,Ko=Bs[--zs],Bs[zs]=null;for(;n===ls;)ls=Mi[--Ti],Mi[Ti]=null,hr=Mi[--Ti],Mi[Ti]=null,ur=Mi[--Ti],Mi[Ti]=null}var mi=null,gi=null,an=!1,Li=null;function tp(n,i){var a=Ai(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function np(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,mi=n,gi=Ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,mi=n,gi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ls!==null?{id:ur,overflow:hr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ai(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,mi=n,gi=null,!0):!1;default:return!1}}function ou(n){return(n.mode&1)!==0&&(n.flags&128)===0}function lu(n){if(an){var i=gi;if(i){var a=i;if(!np(n,i)){if(ou(n))throw Error(t(418));i=Ir(a.nextSibling);var c=mi;i&&np(n,i)?tp(c,a):(n.flags=n.flags&-4097|2,an=!1,mi=n)}}else{if(ou(n))throw Error(t(418));n.flags=n.flags&-4097|2,an=!1,mi=n}}}function ip(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;mi=n}function qo(n){if(n!==mi)return!1;if(!an)return ip(n),an=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Jc(n.type,n.memoizedProps)),i&&(i=gi)){if(ou(n))throw rp(),Error(t(418));for(;i;)tp(n,i),i=Ir(i.nextSibling)}if(ip(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){gi=Ir(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}gi=null}}else gi=mi?Ir(n.stateNode.nextSibling):null;return!0}function rp(){for(var n=gi;n;)n=Ir(n.nextSibling)}function Hs(){gi=mi=null,an=!1}function cu(n){Li===null?Li=[n]:Li.push(n)}var Zv=P.ReactCurrentBatchConfig;function Ga(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var H=h.refs;w===null?delete H[g]:H[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Yo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function sp(n){var i=n._init;return i(n._payload)}function ap(n){function i(le,Y){if(n){var fe=le.deletions;fe===null?(le.deletions=[Y],le.flags|=16):fe.push(Y)}}function a(le,Y){if(!n)return null;for(;Y!==null;)i(le,Y),Y=Y.sibling;return null}function c(le,Y){for(le=new Map;Y!==null;)Y.key!==null?le.set(Y.key,Y):le.set(Y.index,Y),Y=Y.sibling;return le}function h(le,Y){return le=jr(le,Y),le.index=0,le.sibling=null,le}function g(le,Y,fe){return le.index=fe,n?(fe=le.alternate,fe!==null?(fe=fe.index,fe<Y?(le.flags|=2,Y):fe):(le.flags|=2,Y)):(le.flags|=1048576,Y)}function w(le){return n&&le.alternate===null&&(le.flags|=2),le}function H(le,Y,fe,Ie){return Y===null||Y.tag!==6?(Y=eh(fe,le.mode,Ie),Y.return=le,Y):(Y=h(Y,fe),Y.return=le,Y)}function j(le,Y,fe,Ie){var at=fe.type;return at===T?Ne(le,Y,fe.props.children,Ie,fe.key):Y!==null&&(Y.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===me&&sp(at)===Y.type)?(Ie=h(Y,fe.props),Ie.ref=Ga(le,Y,fe),Ie.return=le,Ie):(Ie=xl(fe.type,fe.key,fe.props,null,le.mode,Ie),Ie.ref=Ga(le,Y,fe),Ie.return=le,Ie)}function ge(le,Y,fe,Ie){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==fe.containerInfo||Y.stateNode.implementation!==fe.implementation?(Y=th(fe,le.mode,Ie),Y.return=le,Y):(Y=h(Y,fe.children||[]),Y.return=le,Y)}function Ne(le,Y,fe,Ie,at){return Y===null||Y.tag!==7?(Y=vs(fe,le.mode,Ie,at),Y.return=le,Y):(Y=h(Y,fe),Y.return=le,Y)}function Pe(le,Y,fe){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=eh(""+Y,le.mode,fe),Y.return=le,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case z:return fe=xl(Y.type,Y.key,Y.props,null,le.mode,fe),fe.ref=Ga(le,null,Y),fe.return=le,fe;case U:return Y=th(Y,le.mode,fe),Y.return=le,Y;case me:var Ie=Y._init;return Pe(le,Ie(Y._payload),fe)}if(he(Y)||Z(Y))return Y=vs(Y,le.mode,fe,null),Y.return=le,Y;Yo(le,Y)}return null}function we(le,Y,fe,Ie){var at=Y!==null?Y.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return at!==null?null:H(le,Y,""+fe,Ie);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case z:return fe.key===at?j(le,Y,fe,Ie):null;case U:return fe.key===at?ge(le,Y,fe,Ie):null;case me:return at=fe._init,we(le,Y,at(fe._payload),Ie)}if(he(fe)||Z(fe))return at!==null?null:Ne(le,Y,fe,Ie,null);Yo(le,fe)}return null}function Ke(le,Y,fe,Ie,at){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number")return le=le.get(fe)||null,H(Y,le,""+Ie,at);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case z:return le=le.get(Ie.key===null?fe:Ie.key)||null,j(Y,le,Ie,at);case U:return le=le.get(Ie.key===null?fe:Ie.key)||null,ge(Y,le,Ie,at);case me:var dt=Ie._init;return Ke(le,Y,fe,dt(Ie._payload),at)}if(he(Ie)||Z(Ie))return le=le.get(fe)||null,Ne(Y,le,Ie,at,null);Yo(Y,Ie)}return null}function tt(le,Y,fe,Ie){for(var at=null,dt=null,ft=Y,_t=Y=0,In=null;ft!==null&&_t<fe.length;_t++){ft.index>_t?(In=ft,ft=null):In=ft.sibling;var zt=we(le,ft,fe[_t],Ie);if(zt===null){ft===null&&(ft=In);break}n&&ft&&zt.alternate===null&&i(le,ft),Y=g(zt,Y,_t),dt===null?at=zt:dt.sibling=zt,dt=zt,ft=In}if(_t===fe.length)return a(le,ft),an&&cs(le,_t),at;if(ft===null){for(;_t<fe.length;_t++)ft=Pe(le,fe[_t],Ie),ft!==null&&(Y=g(ft,Y,_t),dt===null?at=ft:dt.sibling=ft,dt=ft);return an&&cs(le,_t),at}for(ft=c(le,ft);_t<fe.length;_t++)In=Ke(ft,le,_t,fe[_t],Ie),In!==null&&(n&&In.alternate!==null&&ft.delete(In.key===null?_t:In.key),Y=g(In,Y,_t),dt===null?at=In:dt.sibling=In,dt=In);return n&&ft.forEach(function(Xr){return i(le,Xr)}),an&&cs(le,_t),at}function it(le,Y,fe,Ie){var at=Z(fe);if(typeof at!="function")throw Error(t(150));if(fe=at.call(fe),fe==null)throw Error(t(151));for(var dt=at=null,ft=Y,_t=Y=0,In=null,zt=fe.next();ft!==null&&!zt.done;_t++,zt=fe.next()){ft.index>_t?(In=ft,ft=null):In=ft.sibling;var Xr=we(le,ft,zt.value,Ie);if(Xr===null){ft===null&&(ft=In);break}n&&ft&&Xr.alternate===null&&i(le,ft),Y=g(Xr,Y,_t),dt===null?at=Xr:dt.sibling=Xr,dt=Xr,ft=In}if(zt.done)return a(le,ft),an&&cs(le,_t),at;if(ft===null){for(;!zt.done;_t++,zt=fe.next())zt=Pe(le,zt.value,Ie),zt!==null&&(Y=g(zt,Y,_t),dt===null?at=zt:dt.sibling=zt,dt=zt);return an&&cs(le,_t),at}for(ft=c(le,ft);!zt.done;_t++,zt=fe.next())zt=Ke(ft,le,_t,zt.value,Ie),zt!==null&&(n&&zt.alternate!==null&&ft.delete(zt.key===null?_t:zt.key),Y=g(zt,Y,_t),dt===null?at=zt:dt.sibling=zt,dt=zt);return n&&ft.forEach(function(R_){return i(le,R_)}),an&&cs(le,_t),at}function _n(le,Y,fe,Ie){if(typeof fe=="object"&&fe!==null&&fe.type===T&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case z:e:{for(var at=fe.key,dt=Y;dt!==null;){if(dt.key===at){if(at=fe.type,at===T){if(dt.tag===7){a(le,dt.sibling),Y=h(dt,fe.props.children),Y.return=le,le=Y;break e}}else if(dt.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===me&&sp(at)===dt.type){a(le,dt.sibling),Y=h(dt,fe.props),Y.ref=Ga(le,dt,fe),Y.return=le,le=Y;break e}a(le,dt);break}else i(le,dt);dt=dt.sibling}fe.type===T?(Y=vs(fe.props.children,le.mode,Ie,fe.key),Y.return=le,le=Y):(Ie=xl(fe.type,fe.key,fe.props,null,le.mode,Ie),Ie.ref=Ga(le,Y,fe),Ie.return=le,le=Ie)}return w(le);case U:e:{for(dt=fe.key;Y!==null;){if(Y.key===dt)if(Y.tag===4&&Y.stateNode.containerInfo===fe.containerInfo&&Y.stateNode.implementation===fe.implementation){a(le,Y.sibling),Y=h(Y,fe.children||[]),Y.return=le,le=Y;break e}else{a(le,Y);break}else i(le,Y);Y=Y.sibling}Y=th(fe,le.mode,Ie),Y.return=le,le=Y}return w(le);case me:return dt=fe._init,_n(le,Y,dt(fe._payload),Ie)}if(he(fe))return tt(le,Y,fe,Ie);if(Z(fe))return it(le,Y,fe,Ie);Yo(le,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,Y!==null&&Y.tag===6?(a(le,Y.sibling),Y=h(Y,fe),Y.return=le,le=Y):(a(le,Y),Y=eh(fe,le.mode,Ie),Y.return=le,le=Y),w(le)):a(le,Y)}return _n}var Vs=ap(!0),op=ap(!1),$o=Ur(null),Zo=null,Gs=null,uu=null;function hu(){uu=Gs=Zo=null}function du(n){var i=$o.current;rn($o),n._currentValue=i}function fu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ws(n,i){Zo=n,uu=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(si=!0),n.firstContext=null)}function Ei(n){var i=n._currentValue;if(uu!==n)if(n={context:n,memoizedValue:i,next:null},Gs===null){if(Zo===null)throw Error(t(308));Gs=n,Zo.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return i}var us=null;function pu(n){us===null?us=[n]:us.push(n)}function lp(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,pu(i)):(a.next=h.next,h.next=a),i.interleaved=a,dr(n,c)}function dr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var kr=!1;function mu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Br(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ft&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,dr(n,a)}return h=c.interleaved,h===null?(i.next=i,pu(c)):(i.next=h.next,h.next=i),c.interleaved=i,dr(n,a)}function Qo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Mn(n,a)}}function up(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Jo(n,i,a,c){var h=n.updateQueue;kr=!1;var g=h.firstBaseUpdate,w=h.lastBaseUpdate,H=h.shared.pending;if(H!==null){h.shared.pending=null;var j=H,ge=j.next;j.next=null,w===null?g=ge:w.next=ge,w=j;var Ne=n.alternate;Ne!==null&&(Ne=Ne.updateQueue,H=Ne.lastBaseUpdate,H!==w&&(H===null?Ne.firstBaseUpdate=ge:H.next=ge,Ne.lastBaseUpdate=j))}if(g!==null){var Pe=h.baseState;w=0,Ne=ge=j=null,H=g;do{var we=H.lane,Ke=H.eventTime;if((c&we)===we){Ne!==null&&(Ne=Ne.next={eventTime:Ke,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var tt=n,it=H;switch(we=i,Ke=a,it.tag){case 1:if(tt=it.payload,typeof tt=="function"){Pe=tt.call(Ke,Pe,we);break e}Pe=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=it.payload,we=typeof tt=="function"?tt.call(Ke,Pe,we):tt,we==null)break e;Pe=$({},Pe,we);break e;case 2:kr=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,we=h.effects,we===null?h.effects=[H]:we.push(H))}else Ke={eventTime:Ke,lane:we,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Ne===null?(ge=Ne=Ke,j=Pe):Ne=Ne.next=Ke,w|=we;if(H=H.next,H===null){if(H=h.shared.pending,H===null)break;we=H,H=we.next,we.next=null,h.lastBaseUpdate=we,h.shared.pending=null}}while(!0);if(Ne===null&&(j=Pe),h.baseState=j,h.firstBaseUpdate=ge,h.lastBaseUpdate=Ne,i=h.shared.interleaved,i!==null){h=i;do w|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);fs|=w,n.lanes=w,n.memoizedState=Pe}}function hp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Wa={},Yi=Ur(Wa),ja=Ur(Wa),Xa=Ur(Wa);function hs(n){if(n===Wa)throw Error(t(174));return n}function gu(n,i){switch(en(Xa,i),en(ja,n),en(Yi,Wa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:qe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=qe(i,n)}rn(Yi),en(Yi,i)}function js(){rn(Yi),rn(ja),rn(Xa)}function dp(n){hs(Xa.current);var i=hs(Yi.current),a=qe(i,n.type);i!==a&&(en(ja,n),en(Yi,a))}function vu(n){ja.current===n&&(rn(Yi),rn(ja))}var on=Ur(0);function el(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var _u=[];function xu(){for(var n=0;n<_u.length;n++)_u[n]._workInProgressVersionPrimary=null;_u.length=0}var tl=P.ReactCurrentDispatcher,yu=P.ReactCurrentBatchConfig,ds=0,ln=null,En=null,Dn=null,nl=!1,Ka=!1,qa=0,Qv=0;function Hn(){throw Error(t(321))}function Su(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Di(n[a],i[a]))return!1;return!0}function Mu(n,i,a,c,h,g){if(ds=g,ln=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,tl.current=n===null||n.memoizedState===null?n_:i_,n=a(c,h),Ka){g=0;do{if(Ka=!1,qa=0,25<=g)throw Error(t(301));g+=1,Dn=En=null,i.updateQueue=null,tl.current=r_,n=a(c,h)}while(Ka)}if(tl.current=sl,i=En!==null&&En.next!==null,ds=0,Dn=En=ln=null,nl=!1,i)throw Error(t(300));return n}function Tu(){var n=qa!==0;return qa=0,n}function $i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?ln.memoizedState=Dn=n:Dn=Dn.next=n,Dn}function wi(){if(En===null){var n=ln.alternate;n=n!==null?n.memoizedState:null}else n=En.next;var i=Dn===null?ln.memoizedState:Dn.next;if(i!==null)Dn=i,En=n;else{if(n===null)throw Error(t(310));En=n,n={memoizedState:En.memoizedState,baseState:En.baseState,baseQueue:En.baseQueue,queue:En.queue,next:null},Dn===null?ln.memoizedState=Dn=n:Dn=Dn.next=n}return Dn}function Ya(n,i){return typeof i=="function"?i(n):i}function Eu(n){var i=wi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=En,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var w=h.next;h.next=g.next,g.next=w}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var H=w=null,j=null,ge=g;do{var Ne=ge.lane;if((ds&Ne)===Ne)j!==null&&(j=j.next={lane:0,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),c=ge.hasEagerState?ge.eagerState:n(c,ge.action);else{var Pe={lane:Ne,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null};j===null?(H=j=Pe,w=c):j=j.next=Pe,ln.lanes|=Ne,fs|=Ne}ge=ge.next}while(ge!==null&&ge!==g);j===null?w=c:j.next=H,Di(c,i.memoizedState)||(si=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=j,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,ln.lanes|=g,fs|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function wu(n){var i=wi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do g=n(g,w.action),w=w.next;while(w!==h);Di(g,i.memoizedState)||(si=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function fp(){}function pp(n,i){var a=ln,c=wi(),h=i(),g=!Di(c.memoizedState,h);if(g&&(c.memoizedState=h,si=!0),c=c.queue,Cu(vp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Dn!==null&&Dn.memoizedState.tag&1){if(a.flags|=2048,$a(9,gp.bind(null,a,c,h,i),void 0,null),Ln===null)throw Error(t(349));(ds&30)!==0||mp(a,i,h)}return h}function mp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=ln.updateQueue,i===null?(i={lastEffect:null,stores:null},ln.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function gp(n,i,a,c){i.value=a,i.getSnapshot=c,_p(i)&&xp(n)}function vp(n,i,a){return a(function(){_p(i)&&xp(n)})}function _p(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Di(n,a)}catch{return!0}}function xp(n){var i=dr(n,1);i!==null&&Fi(i,n,1,-1)}function yp(n){var i=$i();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:n},i.queue=n,n=n.dispatch=t_.bind(null,ln,n),[i.memoizedState,n]}function $a(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=ln.updateQueue,i===null?(i={lastEffect:null,stores:null},ln.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Sp(){return wi().memoizedState}function il(n,i,a,c){var h=$i();ln.flags|=n,h.memoizedState=$a(1|i,a,void 0,c===void 0?null:c)}function rl(n,i,a,c){var h=wi();c=c===void 0?null:c;var g=void 0;if(En!==null){var w=En.memoizedState;if(g=w.destroy,c!==null&&Su(c,w.deps)){h.memoizedState=$a(i,a,g,c);return}}ln.flags|=n,h.memoizedState=$a(1|i,a,g,c)}function Mp(n,i){return il(8390656,8,n,i)}function Cu(n,i){return rl(2048,8,n,i)}function Tp(n,i){return rl(4,2,n,i)}function Ep(n,i){return rl(4,4,n,i)}function wp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Cp(n,i,a){return a=a!=null?a.concat([n]):null,rl(4,4,wp.bind(null,i,n),a)}function Au(){}function Ap(n,i){var a=wi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Su(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function bp(n,i){var a=wi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Su(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Np(n,i,a){return(ds&21)===0?(n.baseState&&(n.baseState=!1,si=!0),n.memoizedState=a):(Di(a,i)||(a=Gt(),ln.lanes|=a,fs|=a,n.baseState=!0),i)}function Jv(n,i){var a=rt;rt=a!==0&&4>a?a:4,n(!0);var c=yu.transition;yu.transition={};try{n(!1),i()}finally{rt=a,yu.transition=c}}function Rp(){return wi().memoizedState}function e_(n,i,a){var c=Gr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Pp(n))Dp(i,a);else if(a=lp(n,i,a,c),a!==null){var h=Zn();Fi(a,n,c,h),Lp(a,i,c)}}function t_(n,i,a){var c=Gr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pp(n))Dp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,H=g(w,a);if(h.hasEagerState=!0,h.eagerState=H,Di(H,w)){var j=i.interleaved;j===null?(h.next=h,pu(i)):(h.next=j.next,j.next=h),i.interleaved=h;return}}catch{}finally{}a=lp(n,i,h,c),a!==null&&(h=Zn(),Fi(a,n,c,h),Lp(a,i,c))}}function Pp(n){var i=n.alternate;return n===ln||i!==null&&i===ln}function Dp(n,i){Ka=nl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Lp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Mn(n,a)}}var sl={readContext:Ei,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},n_={readContext:Ei,useCallback:function(n,i){return $i().memoizedState=[n,i===void 0?null:i],n},useContext:Ei,useEffect:Mp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,il(4194308,4,wp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return il(4194308,4,n,i)},useInsertionEffect:function(n,i){return il(4,2,n,i)},useMemo:function(n,i){var a=$i();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=$i();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=e_.bind(null,ln,n),[c.memoizedState,n]},useRef:function(n){var i=$i();return n={current:n},i.memoizedState=n},useState:yp,useDebugValue:Au,useDeferredValue:function(n){return $i().memoizedState=n},useTransition:function(){var n=yp(!1),i=n[0];return n=Jv.bind(null,n[1]),$i().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=ln,h=$i();if(an){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Ln===null)throw Error(t(349));(ds&30)!==0||mp(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,Mp(vp.bind(null,c,g,n),[n]),c.flags|=2048,$a(9,gp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=$i(),i=Ln.identifierPrefix;if(an){var a=hr,c=ur;a=(c&~(1<<32-ne(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=qa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Qv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},i_={readContext:Ei,useCallback:Ap,useContext:Ei,useEffect:Cu,useImperativeHandle:Cp,useInsertionEffect:Tp,useLayoutEffect:Ep,useMemo:bp,useReducer:Eu,useRef:Sp,useState:function(){return Eu(Ya)},useDebugValue:Au,useDeferredValue:function(n){var i=wi();return Np(i,En.memoizedState,n)},useTransition:function(){var n=Eu(Ya)[0],i=wi().memoizedState;return[n,i]},useMutableSource:fp,useSyncExternalStore:pp,useId:Rp,unstable_isNewReconciler:!1},r_={readContext:Ei,useCallback:Ap,useContext:Ei,useEffect:Cu,useImperativeHandle:Cp,useInsertionEffect:Tp,useLayoutEffect:Ep,useMemo:bp,useReducer:wu,useRef:Sp,useState:function(){return wu(Ya)},useDebugValue:Au,useDeferredValue:function(n){var i=wi();return En===null?i.memoizedState=n:Np(i,En.memoizedState,n)},useTransition:function(){var n=wu(Ya)[0],i=wi().memoizedState;return[n,i]},useMutableSource:fp,useSyncExternalStore:pp,useId:Rp,unstable_isNewReconciler:!1};function Ii(n,i){if(n&&n.defaultProps){i=$({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function bu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:$({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var al={isMounted:function(n){return(n=n._reactInternals)?mn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Zn(),h=Gr(n),g=fr(c,h);g.payload=i,a!=null&&(g.callback=a),i=Br(n,g,h),i!==null&&(Fi(i,n,h,c),Qo(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Zn(),h=Gr(n),g=fr(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Br(n,g,h),i!==null&&(Fi(i,n,h,c),Qo(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Zn(),c=Gr(n),h=fr(a,c);h.tag=2,i!=null&&(h.callback=i),i=Br(n,h,c),i!==null&&(Fi(i,n,c,a),Qo(i,n,c))}};function Ip(n,i,a,c,h,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):i.prototype&&i.prototype.isPureReactComponent?!Oa(a,c)||!Oa(h,g):!0}function Up(n,i,a){var c=!1,h=Or,g=i.contextType;return typeof g=="object"&&g!==null?g=Ei(g):(h=ri(i)?os:zn.current,c=i.contextTypes,g=(c=c!=null)?ks(n,h):Or),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=al,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Op(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&al.enqueueReplaceState(i,i.state,null)}function Nu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},mu(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=Ei(g):(g=ri(i)?os:zn.current,h.context=ks(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(bu(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&al.enqueueReplaceState(h,h.state,null),Jo(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,i){try{var a="",c=i;do a+=Me(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Ru(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Pu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var s_=typeof WeakMap=="function"?WeakMap:Map;function Fp(n,i,a){a=fr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){fl||(fl=!0,Xu=c),Pu(n,i)},a}function kp(n,i,a){a=fr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Pu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Pu(n,i),typeof c!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Bp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new s_;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=x_.bind(null,n,i,a),i.then(n,n))}function zp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Hp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=fr(-1,1),i.tag=2,Br(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var a_=P.ReactCurrentOwner,si=!1;function $n(n,i,a,c){i.child=n===null?op(i,null,a,c):Vs(i,n.child,a,c)}function Vp(n,i,a,c,h){a=a.render;var g=i.ref;return Ws(i,h),c=Mu(n,i,a,c,g,h),a=Tu(),n!==null&&!si?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,pr(n,i,h)):(an&&a&&su(i),i.flags|=1,$n(n,i,c,h),i.child)}function Gp(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!Ju(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Wp(n,i,g,c,h)):(n=xl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Oa,a(w,c)&&n.ref===i.ref)return pr(n,i,h)}return i.flags|=1,n=jr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Wp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(Oa(g,c)&&n.ref===i.ref)if(si=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(si=!0);else return i.lanes=n.lanes,pr(n,i,h)}return Du(n,i,a,c,h)}function jp(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},en(qs,vi),vi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,en(qs,vi),vi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,en(qs,vi),vi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,en(qs,vi),vi|=c;return $n(n,i,h,a),i.child}function Xp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Du(n,i,a,c,h){var g=ri(a)?os:zn.current;return g=ks(i,g),Ws(i,h),a=Mu(n,i,a,c,g,h),c=Tu(),n!==null&&!si?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,pr(n,i,h)):(an&&c&&su(i),i.flags|=1,$n(n,i,a,h),i.child)}function Kp(n,i,a,c,h){if(ri(a)){var g=!0;Wo(i)}else g=!1;if(Ws(i,h),i.stateNode===null)ll(n,i),Up(i,a,c),Nu(i,a,c,h),c=!0;else if(n===null){var w=i.stateNode,H=i.memoizedProps;w.props=H;var j=w.context,ge=a.contextType;typeof ge=="object"&&ge!==null?ge=Ei(ge):(ge=ri(a)?os:zn.current,ge=ks(i,ge));var Ne=a.getDerivedStateFromProps,Pe=typeof Ne=="function"||typeof w.getSnapshotBeforeUpdate=="function";Pe||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(H!==c||j!==ge)&&Op(i,w,c,ge),kr=!1;var we=i.memoizedState;w.state=we,Jo(i,c,w,h),j=i.memoizedState,H!==c||we!==j||ii.current||kr?(typeof Ne=="function"&&(bu(i,a,Ne,c),j=i.memoizedState),(H=kr||Ip(i,a,H,c,we,j,ge))?(Pe||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=j),w.props=c,w.state=j,w.context=ge,c=H):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,cp(n,i),H=i.memoizedProps,ge=i.type===i.elementType?H:Ii(i.type,H),w.props=ge,Pe=i.pendingProps,we=w.context,j=a.contextType,typeof j=="object"&&j!==null?j=Ei(j):(j=ri(a)?os:zn.current,j=ks(i,j));var Ke=a.getDerivedStateFromProps;(Ne=typeof Ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(H!==Pe||we!==j)&&Op(i,w,c,j),kr=!1,we=i.memoizedState,w.state=we,Jo(i,c,w,h);var tt=i.memoizedState;H!==Pe||we!==tt||ii.current||kr?(typeof Ke=="function"&&(bu(i,a,Ke,c),tt=i.memoizedState),(ge=kr||Ip(i,a,ge,c,we,tt,j)||!1)?(Ne||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,tt,j),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,tt,j)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||H===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=tt),w.props=c,w.state=tt,w.context=j,c=ge):(typeof w.componentDidUpdate!="function"||H===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),c=!1)}return Lu(n,i,a,c,g,h)}function Lu(n,i,a,c,h,g){Xp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return h&&Qf(i,a,!1),pr(n,i,g);c=i.stateNode,a_.current=i;var H=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=Vs(i,n.child,null,g),i.child=Vs(i,null,H,g)):$n(n,i,H,g),i.memoizedState=c.state,h&&Qf(i,a,!0),i.child}function qp(n){var i=n.stateNode;i.pendingContext?$f(n,i.pendingContext,i.pendingContext!==i.context):i.context&&$f(n,i.context,!1),gu(n,i.containerInfo)}function Yp(n,i,a,c,h){return Hs(),cu(h),i.flags|=256,$n(n,i,a,c),i.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function Uu(n){return{baseLanes:n,cachePool:null,transitions:null}}function $p(n,i,a){var c=i.pendingProps,h=on.current,g=!1,w=(i.flags&128)!==0,H;if((H=w)||(H=n!==null&&n.memoizedState===null?!1:(h&2)!==0),H?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),en(on,h&1),n===null)return lu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,g?(c=i.mode,g=i.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=yl(w,c,0,null),n=vs(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Uu(a),i.memoizedState=Iu,n):Ou(i,w));if(h=n.memoizedState,h!==null&&(H=h.dehydrated,H!==null))return o_(n,i,w,c,H,h,a);if(g){g=c.fallback,w=i.mode,h=n.child,H=h.sibling;var j={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=j,i.deletions=null):(c=jr(h,j),c.subtreeFlags=h.subtreeFlags&14680064),H!==null?g=jr(H,g):(g=vs(g,w,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,w=n.child.memoizedState,w=w===null?Uu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=Iu,c}return g=n.child,n=g.sibling,c=jr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Ou(n,i){return i=yl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ol(n,i,a,c){return c!==null&&cu(c),Vs(i,n.child,null,a),n=Ou(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function o_(n,i,a,c,h,g,w){if(a)return i.flags&256?(i.flags&=-257,c=Ru(Error(t(422))),ol(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=yl({mode:"visible",children:c.children},h,0,null),g=vs(g,h,w,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Vs(i,n.child,null,w),i.child.memoizedState=Uu(w),i.memoizedState=Iu,g);if((i.mode&1)===0)return ol(n,i,w,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var H=c.dgst;return c=H,g=Error(t(419)),c=Ru(g,c,void 0),ol(n,i,w,c)}if(H=(w&n.childLanes)!==0,si||H){if(c=Ln,c!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|w))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,dr(n,h),Fi(c,n,h,-1))}return Qu(),c=Ru(Error(t(421))),ol(n,i,w,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=y_.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,gi=Ir(h.nextSibling),mi=i,an=!0,Li=null,n!==null&&(Mi[Ti++]=ur,Mi[Ti++]=hr,Mi[Ti++]=ls,ur=n.id,hr=n.overflow,ls=i),i=Ou(i,c.children),i.flags|=4096,i)}function Zp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),fu(n.return,i,a)}function Fu(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function Qp(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if($n(n,i,c.children,a),c=on.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Zp(n,a,i);else if(n.tag===19)Zp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(en(on,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&el(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Fu(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&el(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Fu(i,!0,a,null,g);break;case"together":Fu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ll(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function pr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),fs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=jr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=jr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function l_(n,i,a){switch(i.tag){case 3:qp(i),Hs();break;case 5:dp(i);break;case 1:ri(i.type)&&Wo(i);break;case 4:gu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;en($o,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(en(on,on.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?$p(n,i,a):(en(on,on.current&1),n=pr(n,i,a),n!==null?n.sibling:null);en(on,on.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Qp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),en(on,on.current),c)break;return null;case 22:case 23:return i.lanes=0,jp(n,i,a)}return pr(n,i,a)}var Jp,ku,em,tm;Jp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ku=function(){},em=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,hs(Yi.current);var g=null;switch(a){case"input":h=yt(n,h),c=yt(n,c),g=[];break;case"select":h=$({},h,{value:void 0}),c=$({},c,{value:void 0}),g=[];break;case"textarea":h=lt(n,h),c=lt(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ho)}Se(a,c);var w;a=null;for(ge in h)if(!c.hasOwnProperty(ge)&&h.hasOwnProperty(ge)&&h[ge]!=null)if(ge==="style"){var H=h[ge];for(w in H)H.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ge!=="dangerouslySetInnerHTML"&&ge!=="children"&&ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&ge!=="autoFocus"&&(o.hasOwnProperty(ge)?g||(g=[]):(g=g||[]).push(ge,null));for(ge in c){var j=c[ge];if(H=h!=null?h[ge]:void 0,c.hasOwnProperty(ge)&&j!==H&&(j!=null||H!=null))if(ge==="style")if(H){for(w in H)!H.hasOwnProperty(w)||j&&j.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in j)j.hasOwnProperty(w)&&H[w]!==j[w]&&(a||(a={}),a[w]=j[w])}else a||(g||(g=[]),g.push(ge,a)),a=j;else ge==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,H=H?H.__html:void 0,j!=null&&H!==j&&(g=g||[]).push(ge,j)):ge==="children"?typeof j!="string"&&typeof j!="number"||(g=g||[]).push(ge,""+j):ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&(o.hasOwnProperty(ge)?(j!=null&&ge==="onScroll"&&nn("scroll",n),g||H===j||(g=[])):(g=g||[]).push(ge,j))}a&&(g=g||[]).push("style",a);var ge=g;(i.updateQueue=ge)&&(i.flags|=4)}},tm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Za(n,i){if(!an)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function c_(n,i,a){var c=i.pendingProps;switch(au(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(i),null;case 1:return ri(i.type)&&Go(),Vn(i),null;case 3:return c=i.stateNode,js(),rn(ii),rn(zn),xu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(qo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Li!==null&&(Yu(Li),Li=null))),ku(n,i),Vn(i),null;case 5:vu(i);var h=hs(Xa.current);if(a=i.type,n!==null&&i.stateNode!=null)em(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Vn(i),null}if(n=hs(Yi.current),qo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[qi]=i,c[Ha]=g,n=(i.mode&1)!==0,a){case"dialog":nn("cancel",c),nn("close",c);break;case"iframe":case"object":case"embed":nn("load",c);break;case"video":case"audio":for(h=0;h<ka.length;h++)nn(ka[h],c);break;case"source":nn("error",c);break;case"img":case"image":case"link":nn("error",c),nn("load",c);break;case"details":nn("toggle",c);break;case"input":Ot(c,g),nn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},nn("invalid",c);break;case"textarea":pt(c,g),nn("invalid",c)}Se(a,g),h=null;for(var w in g)if(g.hasOwnProperty(w)){var H=g[w];w==="children"?typeof H=="string"?c.textContent!==H&&(g.suppressHydrationWarning!==!0&&zo(c.textContent,H,n),h=["children",H]):typeof H=="number"&&c.textContent!==""+H&&(g.suppressHydrationWarning!==!0&&zo(c.textContent,H,n),h=["children",""+H]):o.hasOwnProperty(w)&&H!=null&&w==="onScroll"&&nn("scroll",c)}switch(a){case"input":nt(c),Ut(c,g,!0);break;case"textarea":nt(c),St(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Ho)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=mt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[qi]=i,n[Ha]=c,Jp(n,i,!1,!1),i.stateNode=n;e:{switch(w=Le(a,c),a){case"dialog":nn("cancel",n),nn("close",n),h=c;break;case"iframe":case"object":case"embed":nn("load",n),h=c;break;case"video":case"audio":for(h=0;h<ka.length;h++)nn(ka[h],n);h=c;break;case"source":nn("error",n),h=c;break;case"img":case"image":case"link":nn("error",n),nn("load",n),h=c;break;case"details":nn("toggle",n),h=c;break;case"input":Ot(n,c),h=yt(n,c),nn("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=$({},c,{value:void 0}),nn("invalid",n);break;case"textarea":pt(n,c),h=lt(n,c),nn("invalid",n);break;default:h=c}Se(a,h),H=h;for(g in H)if(H.hasOwnProperty(g)){var j=H[g];g==="style"?J(n,j):g==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Xt(n,j)):g==="children"?typeof j=="string"?(a!=="textarea"||j!=="")&&st(n,j):typeof j=="number"&&st(n,""+j):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?j!=null&&g==="onScroll"&&nn("scroll",n):j!=null&&B(n,g,j,w))}switch(a){case"input":nt(n),Ut(n,c,!1);break;case"textarea":nt(n),St(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Te(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?ht(n,!!c.multiple,g,!1):c.defaultValue!=null&&ht(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Ho)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Vn(i),null;case 6:if(n&&i.stateNode!=null)tm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=hs(Xa.current),hs(Yi.current),qo(i)){if(c=i.stateNode,a=i.memoizedProps,c[qi]=i,(g=c.nodeValue!==a)&&(n=mi,n!==null))switch(n.tag){case 3:zo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zo(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qi]=i,i.stateNode=c}return Vn(i),null;case 13:if(rn(on),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(an&&gi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)rp(),Hs(),i.flags|=98560,g=!1;else if(g=qo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[qi]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Vn(i),g=!1}else Li!==null&&(Yu(Li),Li=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(on.current&1)!==0?wn===0&&(wn=3):Qu())),i.updateQueue!==null&&(i.flags|=4),Vn(i),null);case 4:return js(),ku(n,i),n===null&&Ba(i.stateNode.containerInfo),Vn(i),null;case 10:return du(i.type._context),Vn(i),null;case 17:return ri(i.type)&&Go(),Vn(i),null;case 19:if(rn(on),g=i.memoizedState,g===null)return Vn(i),null;if(c=(i.flags&128)!==0,w=g.rendering,w===null)if(c)Za(g,!1);else{if(wn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=el(n),w!==null){for(i.flags|=128,Za(g,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return en(on,on.current&1|2),i.child}n=n.sibling}g.tail!==null&&Kt()>Ys&&(i.flags|=128,c=!0,Za(g,!1),i.lanes=4194304)}else{if(!c)if(n=el(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Za(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!an)return Vn(i),null}else 2*Kt()-g.renderingStartTime>Ys&&a!==1073741824&&(i.flags|=128,c=!0,Za(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Kt(),i.sibling=null,a=on.current,en(on,c?a&1|2:a&1),i):(Vn(i),null);case 22:case 23:return Zu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(vi&1073741824)!==0&&(Vn(i),i.subtreeFlags&6&&(i.flags|=8192)):Vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function u_(n,i){switch(au(i),i.tag){case 1:return ri(i.type)&&Go(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return js(),rn(ii),rn(zn),xu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return vu(i),null;case 13:if(rn(on),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return rn(on),null;case 4:return js(),null;case 10:return du(i.type._context),null;case 22:case 23:return Zu(),null;case 24:return null;default:return null}}var cl=!1,Gn=!1,h_=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Ks(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){pn(n,i,c)}else a.current=null}function Bu(n,i,a){try{a()}catch(c){pn(n,i,c)}}var nm=!1;function d_(n,i){if(Zc=No,n=If(),Gc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,H=-1,j=-1,ge=0,Ne=0,Pe=n,we=null;t:for(;;){for(var Ke;Pe!==a||h!==0&&Pe.nodeType!==3||(H=w+h),Pe!==g||c!==0&&Pe.nodeType!==3||(j=w+c),Pe.nodeType===3&&(w+=Pe.nodeValue.length),(Ke=Pe.firstChild)!==null;)we=Pe,Pe=Ke;for(;;){if(Pe===n)break t;if(we===a&&++ge===h&&(H=w),we===g&&++Ne===c&&(j=w),(Ke=Pe.nextSibling)!==null)break;Pe=we,we=Pe.parentNode}Pe=Ke}a=H===-1||j===-1?null:{start:H,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qc={focusedElem:n,selectionRange:a},No=!1,$e=i;$e!==null;)if(i=$e,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,$e=n;else for(;$e!==null;){i=$e;try{var tt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(tt!==null){var it=tt.memoizedProps,_n=tt.memoizedState,le=i.stateNode,Y=le.getSnapshotBeforeUpdate(i.elementType===i.type?it:Ii(i.type,it),_n);le.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ie){pn(i,i.return,Ie)}if(n=i.sibling,n!==null){n.return=i.return,$e=n;break}$e=i.return}return tt=nm,nm=!1,tt}function Qa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Bu(i,a,g)}h=h.next}while(h!==c)}}function ul(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function zu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function im(n){var i=n.alternate;i!==null&&(n.alternate=null,im(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[qi],delete i[Ha],delete i[nu],delete i[qv],delete i[Yv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rm(n){return n.tag===5||n.tag===3||n.tag===4}function sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Hu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ho));else if(c!==4&&(n=n.child,n!==null))for(Hu(n,i,a),n=n.sibling;n!==null;)Hu(n,i,a),n=n.sibling}function Vu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Vu(n,i,a),n=n.sibling;n!==null;)Vu(n,i,a),n=n.sibling}var On=null,Ui=!1;function zr(n,i,a){for(a=a.child;a!==null;)am(n,i,a),a=a.sibling}function am(n,i,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(W,a)}catch{}switch(a.tag){case 5:Gn||Ks(a,i);case 6:var c=On,h=Ui;On=null,zr(n,i,a),On=c,Ui=h,On!==null&&(Ui?(n=On,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):On.removeChild(a.stateNode));break;case 18:On!==null&&(Ui?(n=On,a=a.stateNode,n.nodeType===8?tu(n.parentNode,a):n.nodeType===1&&tu(n,a),Ra(n)):tu(On,a.stateNode));break;case 4:c=On,h=Ui,On=a.stateNode.containerInfo,Ui=!0,zr(n,i,a),On=c,Ui=h;break;case 0:case 11:case 14:case 15:if(!Gn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&Bu(a,i,w),h=h.next}while(h!==c)}zr(n,i,a);break;case 1:if(!Gn&&(Ks(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(H){pn(a,i,H)}zr(n,i,a);break;case 21:zr(n,i,a);break;case 22:a.mode&1?(Gn=(c=Gn)||a.memoizedState!==null,zr(n,i,a),Gn=c):zr(n,i,a);break;default:zr(n,i,a)}}function om(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new h_),i.forEach(function(c){var h=S_.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Oi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,w=i,H=w;e:for(;H!==null;){switch(H.tag){case 5:On=H.stateNode,Ui=!1;break e;case 3:On=H.stateNode.containerInfo,Ui=!0;break e;case 4:On=H.stateNode.containerInfo,Ui=!0;break e}H=H.return}if(On===null)throw Error(t(160));am(g,w,h),On=null,Ui=!1;var j=h.alternate;j!==null&&(j.return=null),h.return=null}catch(ge){pn(h,i,ge)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)lm(i,n),i=i.sibling}function lm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Oi(i,n),Zi(n),c&4){try{Qa(3,n,n.return),ul(3,n)}catch(it){pn(n,n.return,it)}try{Qa(5,n,n.return)}catch(it){pn(n,n.return,it)}}break;case 1:Oi(i,n),Zi(n),c&512&&a!==null&&Ks(a,a.return);break;case 5:if(Oi(i,n),Zi(n),c&512&&a!==null&&Ks(a,a.return),n.flags&32){var h=n.stateNode;try{st(h,"")}catch(it){pn(n,n.return,it)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,H=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{H==="input"&&g.type==="radio"&&g.name!=null&&Qt(h,g),Le(H,w);var ge=Le(H,g);for(w=0;w<j.length;w+=2){var Ne=j[w],Pe=j[w+1];Ne==="style"?J(h,Pe):Ne==="dangerouslySetInnerHTML"?Xt(h,Pe):Ne==="children"?st(h,Pe):B(h,Ne,Pe,ge)}switch(H){case"input":Jt(h,g);break;case"textarea":G(h,g);break;case"select":var we=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Ke=g.value;Ke!=null?ht(h,!!g.multiple,Ke,!1):we!==!!g.multiple&&(g.defaultValue!=null?ht(h,!!g.multiple,g.defaultValue,!0):ht(h,!!g.multiple,g.multiple?[]:"",!1))}h[Ha]=g}catch(it){pn(n,n.return,it)}}break;case 6:if(Oi(i,n),Zi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(it){pn(n,n.return,it)}}break;case 3:if(Oi(i,n),Zi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ra(i.containerInfo)}catch(it){pn(n,n.return,it)}break;case 4:Oi(i,n),Zi(n);break;case 13:Oi(i,n),Zi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(ju=Kt())),c&4&&om(n);break;case 22:if(Ne=a!==null&&a.memoizedState!==null,n.mode&1?(Gn=(ge=Gn)||Ne,Oi(i,n),Gn=ge):Oi(i,n),Zi(n),c&8192){if(ge=n.memoizedState!==null,(n.stateNode.isHidden=ge)&&!Ne&&(n.mode&1)!==0)for($e=n,Ne=n.child;Ne!==null;){for(Pe=$e=Ne;$e!==null;){switch(we=$e,Ke=we.child,we.tag){case 0:case 11:case 14:case 15:Qa(4,we,we.return);break;case 1:Ks(we,we.return);var tt=we.stateNode;if(typeof tt.componentWillUnmount=="function"){c=we,a=we.return;try{i=c,tt.props=i.memoizedProps,tt.state=i.memoizedState,tt.componentWillUnmount()}catch(it){pn(c,a,it)}}break;case 5:Ks(we,we.return);break;case 22:if(we.memoizedState!==null){hm(Pe);continue}}Ke!==null?(Ke.return=we,$e=Ke):hm(Pe)}Ne=Ne.sibling}e:for(Ne=null,Pe=n;;){if(Pe.tag===5){if(Ne===null){Ne=Pe;try{h=Pe.stateNode,ge?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(H=Pe.stateNode,j=Pe.memoizedProps.style,w=j!=null&&j.hasOwnProperty("display")?j.display:null,H.style.display=C("display",w))}catch(it){pn(n,n.return,it)}}}else if(Pe.tag===6){if(Ne===null)try{Pe.stateNode.nodeValue=ge?"":Pe.memoizedProps}catch(it){pn(n,n.return,it)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===n)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===n)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===n)break e;Ne===Pe&&(Ne=null),Pe=Pe.return}Ne===Pe&&(Ne=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:Oi(i,n),Zi(n),c&4&&om(n);break;case 21:break;default:Oi(i,n),Zi(n)}}function Zi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(rm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(st(h,""),c.flags&=-33);var g=sm(n);Vu(n,g,h);break;case 3:case 4:var w=c.stateNode.containerInfo,H=sm(n);Hu(n,H,w);break;default:throw Error(t(161))}}catch(j){pn(n,n.return,j)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function f_(n,i,a){$e=n,cm(n)}function cm(n,i,a){for(var c=(n.mode&1)!==0;$e!==null;){var h=$e,g=h.child;if(h.tag===22&&c){var w=h.memoizedState!==null||cl;if(!w){var H=h.alternate,j=H!==null&&H.memoizedState!==null||Gn;H=cl;var ge=Gn;if(cl=w,(Gn=j)&&!ge)for($e=h;$e!==null;)w=$e,j=w.child,w.tag===22&&w.memoizedState!==null?dm(h):j!==null?(j.return=w,$e=j):dm(h);for(;g!==null;)$e=g,cm(g),g=g.sibling;$e=h,cl=H,Gn=ge}um(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,$e=g):um(n)}}function um(n){for(;$e!==null;){var i=$e;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Gn||ul(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Gn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Ii(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&hp(i,g,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}hp(i,w,a)}break;case 5:var H=i.stateNode;if(a===null&&i.flags&4){a=H;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&a.focus();break;case"img":j.src&&(a.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ge=i.alternate;if(ge!==null){var Ne=ge.memoizedState;if(Ne!==null){var Pe=Ne.dehydrated;Pe!==null&&Ra(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Gn||i.flags&512&&zu(i)}catch(we){pn(i,i.return,we)}}if(i===n){$e=null;break}if(a=i.sibling,a!==null){a.return=i.return,$e=a;break}$e=i.return}}function hm(n){for(;$e!==null;){var i=$e;if(i===n){$e=null;break}var a=i.sibling;if(a!==null){a.return=i.return,$e=a;break}$e=i.return}}function dm(n){for(;$e!==null;){var i=$e;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ul(4,i)}catch(j){pn(i,a,j)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(j){pn(i,h,j)}}var g=i.return;try{zu(i)}catch(j){pn(i,g,j)}break;case 5:var w=i.return;try{zu(i)}catch(j){pn(i,w,j)}}}catch(j){pn(i,i.return,j)}if(i===n){$e=null;break}var H=i.sibling;if(H!==null){H.return=i.return,$e=H;break}$e=i.return}}var p_=Math.ceil,hl=P.ReactCurrentDispatcher,Gu=P.ReactCurrentOwner,Ci=P.ReactCurrentBatchConfig,Ft=0,Ln=null,yn=null,Fn=0,vi=0,qs=Ur(0),wn=0,Ja=null,fs=0,dl=0,Wu=0,eo=null,ai=null,ju=0,Ys=1/0,mr=null,fl=!1,Xu=null,Hr=null,pl=!1,Vr=null,ml=0,to=0,Ku=null,gl=-1,vl=0;function Zn(){return(Ft&6)!==0?Kt():gl!==-1?gl:gl=Kt()}function Gr(n){return(n.mode&1)===0?1:(Ft&2)!==0&&Fn!==0?Fn&-Fn:Zv.transition!==null?(vl===0&&(vl=Gt()),vl):(n=rt,n!==0||(n=window.event,n=n===void 0?16:pf(n.type)),n)}function Fi(n,i,a,c){if(50<to)throw to=0,Ku=null,Error(t(185));fn(n,a,c),((Ft&2)===0||n!==Ln)&&(n===Ln&&((Ft&2)===0&&(dl|=a),wn===4&&Wr(n,Fn)),oi(n,c),a===1&&Ft===0&&(i.mode&1)===0&&(Ys=Kt()+500,jo&&Fr()))}function oi(n,i){var a=n.callbackNode;bt(n,i);var c=Mt(n,n===Ln?Fn:0);if(c===0)a!==null&&di(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&di(a),i===1)n.tag===0?$v(pm.bind(null,n)):Jf(pm.bind(null,n)),Xv(function(){(Ft&6)===0&&Fr()}),a=null;else{switch(Xi(c)){case 1:a=Ri;break;case 4:a=br;break;case 16:a=ji;break;case 536870912:a=b;break;default:a=ji}a=Mm(a,fm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function fm(n,i){if(gl=-1,vl=0,(Ft&6)!==0)throw Error(t(327));var a=n.callbackNode;if($s()&&n.callbackNode!==a)return null;var c=Mt(n,n===Ln?Fn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=_l(n,c);else{i=c;var h=Ft;Ft|=2;var g=gm();(Ln!==n||Fn!==i)&&(mr=null,Ys=Kt()+500,ms(n,i));do try{v_();break}catch(H){mm(n,H)}while(!0);hu(),hl.current=g,Ft=h,yn!==null?i=0:(Ln=null,Fn=0,i=wn)}if(i!==0){if(i===2&&(h=sn(n),h!==0&&(c=h,i=qu(n,h))),i===1)throw a=Ja,ms(n,0),Wr(n,c),oi(n,Kt()),a;if(i===6)Wr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!m_(h)&&(i=_l(n,c),i===2&&(g=sn(n),g!==0&&(c=g,i=qu(n,g))),i===1))throw a=Ja,ms(n,0),Wr(n,c),oi(n,Kt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:gs(n,ai,mr);break;case 3:if(Wr(n,c),(c&130023424)===c&&(i=ju+500-Kt(),10<i)){if(Mt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Zn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=eu(gs.bind(null,n,ai,mr),i);break}gs(n,ai,mr);break;case 4:if(Wr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var w=31-ne(c);g=1<<w,w=i[w],w>h&&(h=w),c&=~g}if(c=h,c=Kt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*p_(c/1960))-c,10<c){n.timeoutHandle=eu(gs.bind(null,n,ai,mr),c);break}gs(n,ai,mr);break;case 5:gs(n,ai,mr);break;default:throw Error(t(329))}}}return oi(n,Kt()),n.callbackNode===a?fm.bind(null,n):null}function qu(n,i){var a=eo;return n.current.memoizedState.isDehydrated&&(ms(n,i).flags|=256),n=_l(n,i),n!==2&&(i=ai,ai=a,i!==null&&Yu(i)),n}function Yu(n){ai===null?ai=n:ai.push.apply(ai,n)}function m_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!Di(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Wr(n,i){for(i&=~Wu,i&=~dl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ne(i),c=1<<a;n[a]=-1,i&=~c}}function pm(n){if((Ft&6)!==0)throw Error(t(327));$s();var i=Mt(n,0);if((i&1)===0)return oi(n,Kt()),null;var a=_l(n,i);if(n.tag!==0&&a===2){var c=sn(n);c!==0&&(i=c,a=qu(n,c))}if(a===1)throw a=Ja,ms(n,0),Wr(n,i),oi(n,Kt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,gs(n,ai,mr),oi(n,Kt()),null}function $u(n,i){var a=Ft;Ft|=1;try{return n(i)}finally{Ft=a,Ft===0&&(Ys=Kt()+500,jo&&Fr())}}function ps(n){Vr!==null&&Vr.tag===0&&(Ft&6)===0&&$s();var i=Ft;Ft|=1;var a=Ci.transition,c=rt;try{if(Ci.transition=null,rt=1,n)return n()}finally{rt=c,Ci.transition=a,Ft=i,(Ft&6)===0&&Fr()}}function Zu(){vi=qs.current,rn(qs)}function ms(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,jv(a)),yn!==null)for(a=yn.return;a!==null;){var c=a;switch(au(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Go();break;case 3:js(),rn(ii),rn(zn),xu();break;case 5:vu(c);break;case 4:js();break;case 13:rn(on);break;case 19:rn(on);break;case 10:du(c.type._context);break;case 22:case 23:Zu()}a=a.return}if(Ln=n,yn=n=jr(n.current,null),Fn=vi=i,wn=0,Ja=null,Wu=dl=fs=0,ai=eo=null,us!==null){for(i=0;i<us.length;i++)if(a=us[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=h,c.next=w}a.pending=c}us=null}return n}function mm(n,i){do{var a=yn;try{if(hu(),tl.current=sl,nl){for(var c=ln.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}nl=!1}if(ds=0,Dn=En=ln=null,Ka=!1,qa=0,Gu.current=null,a===null||a.return===null){wn=1,Ja=i,yn=null;break}e:{var g=n,w=a.return,H=a,j=i;if(i=Fn,H.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var ge=j,Ne=H,Pe=Ne.tag;if((Ne.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var we=Ne.alternate;we?(Ne.updateQueue=we.updateQueue,Ne.memoizedState=we.memoizedState,Ne.lanes=we.lanes):(Ne.updateQueue=null,Ne.memoizedState=null)}var Ke=zp(w);if(Ke!==null){Ke.flags&=-257,Hp(Ke,w,H,g,i),Ke.mode&1&&Bp(g,ge,i),i=Ke,j=ge;var tt=i.updateQueue;if(tt===null){var it=new Set;it.add(j),i.updateQueue=it}else tt.add(j);break e}else{if((i&1)===0){Bp(g,ge,i),Qu();break e}j=Error(t(426))}}else if(an&&H.mode&1){var _n=zp(w);if(_n!==null){(_n.flags&65536)===0&&(_n.flags|=256),Hp(_n,w,H,g,i),cu(Xs(j,H));break e}}g=j=Xs(j,H),wn!==4&&(wn=2),eo===null?eo=[g]:eo.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var le=Fp(g,j,i);up(g,le);break e;case 1:H=j;var Y=g.type,fe=g.stateNode;if((g.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Hr===null||!Hr.has(fe)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ie=kp(g,H,i);up(g,Ie);break e}}g=g.return}while(g!==null)}_m(a)}catch(at){i=at,yn===a&&a!==null&&(yn=a=a.return);continue}break}while(!0)}function gm(){var n=hl.current;return hl.current=sl,n===null?sl:n}function Qu(){(wn===0||wn===3||wn===2)&&(wn=4),Ln===null||(fs&268435455)===0&&(dl&268435455)===0||Wr(Ln,Fn)}function _l(n,i){var a=Ft;Ft|=2;var c=gm();(Ln!==n||Fn!==i)&&(mr=null,ms(n,i));do try{g_();break}catch(h){mm(n,h)}while(!0);if(hu(),Ft=a,hl.current=c,yn!==null)throw Error(t(261));return Ln=null,Fn=0,wn}function g_(){for(;yn!==null;)vm(yn)}function v_(){for(;yn!==null&&!ni();)vm(yn)}function vm(n){var i=Sm(n.alternate,n,vi);n.memoizedProps=n.pendingProps,i===null?_m(n):yn=i,Gu.current=null}function _m(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=c_(a,i,vi),a!==null){yn=a;return}}else{if(a=u_(a,i),a!==null){a.flags&=32767,yn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{wn=6,yn=null;return}}if(i=i.sibling,i!==null){yn=i;return}yn=i=n}while(i!==null);wn===0&&(wn=5)}function gs(n,i,a){var c=rt,h=Ci.transition;try{Ci.transition=null,rt=1,__(n,i,a,c)}finally{Ci.transition=h,rt=c}return null}function __(n,i,a,c){do $s();while(Vr!==null);if((Ft&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(et(n,g),n===Ln&&(yn=Ln=null,Fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||pl||(pl=!0,Mm(ji,function(){return $s(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Ci.transition,Ci.transition=null;var w=rt;rt=1;var H=Ft;Ft|=4,Gu.current=null,d_(n,a),lm(a,n),kv(Qc),No=!!Zc,Qc=Zc=null,n.current=a,f_(a),fi(),Ft=H,rt=w,Ci.transition=g}else n.current=a;if(pl&&(pl=!1,Vr=n,ml=h),g=n.pendingLanes,g===0&&(Hr=null),oe(a.stateNode),oi(n,Kt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(fl)throw fl=!1,n=Xu,Xu=null,n;return(ml&1)!==0&&n.tag!==0&&$s(),g=n.pendingLanes,(g&1)!==0?n===Ku?to++:(to=0,Ku=n):to=0,Fr(),null}function $s(){if(Vr!==null){var n=Xi(ml),i=Ci.transition,a=rt;try{if(Ci.transition=null,rt=16>n?16:n,Vr===null)var c=!1;else{if(n=Vr,Vr=null,ml=0,(Ft&6)!==0)throw Error(t(331));var h=Ft;for(Ft|=4,$e=n.current;$e!==null;){var g=$e,w=g.child;if(($e.flags&16)!==0){var H=g.deletions;if(H!==null){for(var j=0;j<H.length;j++){var ge=H[j];for($e=ge;$e!==null;){var Ne=$e;switch(Ne.tag){case 0:case 11:case 15:Qa(8,Ne,g)}var Pe=Ne.child;if(Pe!==null)Pe.return=Ne,$e=Pe;else for(;$e!==null;){Ne=$e;var we=Ne.sibling,Ke=Ne.return;if(im(Ne),Ne===ge){$e=null;break}if(we!==null){we.return=Ke,$e=we;break}$e=Ke}}}var tt=g.alternate;if(tt!==null){var it=tt.child;if(it!==null){tt.child=null;do{var _n=it.sibling;it.sibling=null,it=_n}while(it!==null)}}$e=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,$e=w;else e:for(;$e!==null;){if(g=$e,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Qa(9,g,g.return)}var le=g.sibling;if(le!==null){le.return=g.return,$e=le;break e}$e=g.return}}var Y=n.current;for($e=Y;$e!==null;){w=$e;var fe=w.child;if((w.subtreeFlags&2064)!==0&&fe!==null)fe.return=w,$e=fe;else e:for(w=Y;$e!==null;){if(H=$e,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:ul(9,H)}}catch(at){pn(H,H.return,at)}if(H===w){$e=null;break e}var Ie=H.sibling;if(Ie!==null){Ie.return=H.return,$e=Ie;break e}$e=H.return}}if(Ft=h,Fr(),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(W,n)}catch{}c=!0}return c}finally{rt=a,Ci.transition=i}}return!1}function xm(n,i,a){i=Xs(a,i),i=Fp(n,i,1),n=Br(n,i,1),i=Zn(),n!==null&&(fn(n,1,i),oi(n,i))}function pn(n,i,a){if(n.tag===3)xm(n,n,a);else for(;i!==null;){if(i.tag===3){xm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hr===null||!Hr.has(c))){n=Xs(a,n),n=kp(i,n,1),i=Br(i,n,1),n=Zn(),i!==null&&(fn(i,1,n),oi(i,n));break}}i=i.return}}function x_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Zn(),n.pingedLanes|=n.suspendedLanes&a,Ln===n&&(Fn&a)===a&&(wn===4||wn===3&&(Fn&130023424)===Fn&&500>Kt()-ju?ms(n,0):Wu|=a),oi(n,i)}function ym(n,i){i===0&&((n.mode&1)===0?i=1:(i=Qe,Qe<<=1,(Qe&130023424)===0&&(Qe=4194304)));var a=Zn();n=dr(n,i),n!==null&&(fn(n,i,a),oi(n,a))}function y_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),ym(n,a)}function S_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),ym(n,a)}var Sm;Sm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ii.current)si=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return si=!1,l_(n,i,a);si=(n.flags&131072)!==0}else si=!1,an&&(i.flags&1048576)!==0&&ep(i,Ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ll(n,i),n=i.pendingProps;var h=ks(i,zn.current);Ws(i,a),h=Mu(null,i,c,n,h,a);var g=Tu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ri(c)?(g=!0,Wo(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,mu(i),h.updater=al,i.stateNode=h,h._reactInternals=i,Nu(i,c,n,a),i=Lu(null,i,c,!0,g,a)):(i.tag=0,an&&g&&su(i),$n(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(ll(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=T_(c),n=Ii(c,n),h){case 0:i=Du(null,i,c,n,a);break e;case 1:i=Kp(null,i,c,n,a);break e;case 11:i=Vp(null,i,c,n,a);break e;case 14:i=Gp(null,i,c,Ii(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),Du(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),Kp(n,i,c,h,a);case 3:e:{if(qp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,cp(n,i),Jo(i,c,null,a);var w=i.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Xs(Error(t(423)),i),i=Yp(n,i,c,a,h);break e}else if(c!==h){h=Xs(Error(t(424)),i),i=Yp(n,i,c,a,h);break e}else for(gi=Ir(i.stateNode.containerInfo.firstChild),mi=i,an=!0,Li=null,a=op(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),c===h){i=pr(n,i,a);break e}$n(n,i,c,a)}i=i.child}return i;case 5:return dp(i),n===null&&lu(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,w=h.children,Jc(c,h)?w=null:g!==null&&Jc(c,g)&&(i.flags|=32),Xp(n,i),$n(n,i,w,a),i.child;case 6:return n===null&&lu(i),null;case 13:return $p(n,i,a);case 4:return gu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Vs(i,null,c,a):$n(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),Vp(n,i,c,h,a);case 7:return $n(n,i,i.pendingProps,a),i.child;case 8:return $n(n,i,i.pendingProps.children,a),i.child;case 12:return $n(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,w=h.value,en($o,c._currentValue),c._currentValue=w,g!==null)if(Di(g.value,w)){if(g.children===h.children&&!ii.current){i=pr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var H=g.dependencies;if(H!==null){w=g.child;for(var j=H.firstContext;j!==null;){if(j.context===c){if(g.tag===1){j=fr(-1,a&-a),j.tag=2;var ge=g.updateQueue;if(ge!==null){ge=ge.shared;var Ne=ge.pending;Ne===null?j.next=j:(j.next=Ne.next,Ne.next=j),ge.pending=j}}g.lanes|=a,j=g.alternate,j!==null&&(j.lanes|=a),fu(g.return,a,i),H.lanes|=a;break}j=j.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,H=w.alternate,H!==null&&(H.lanes|=a),fu(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}$n(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Ws(i,a),h=Ei(h),c=c(h),i.flags|=1,$n(n,i,c,a),i.child;case 14:return c=i.type,h=Ii(c,i.pendingProps),h=Ii(c.type,h),Gp(n,i,c,h,a);case 15:return Wp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),ll(n,i),i.tag=1,ri(c)?(n=!0,Wo(i)):n=!1,Ws(i,a),Up(i,c,h),Nu(i,c,h,a),Lu(null,i,c,!0,n,a);case 19:return Qp(n,i,a);case 22:return jp(n,i,a)}throw Error(t(156,i.tag))};function Mm(n,i){return hi(n,i)}function M_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,i,a,c){return new M_(n,i,a,c)}function Ju(n){return n=n.prototype,!(!n||!n.isReactComponent)}function T_(n){if(typeof n=="function")return Ju(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===ee)return 14}return 2}function jr(n,i){var a=n.alternate;return a===null?(a=Ai(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function xl(n,i,a,c,h,g){var w=2;if(c=n,typeof n=="function")Ju(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case T:return vs(a.children,h,g,i);case R:w=8,h|=8;break;case O:return n=Ai(12,a,i,h|2),n.elementType=O,n.lanes=g,n;case ue:return n=Ai(13,a,i,h),n.elementType=ue,n.lanes=g,n;case k:return n=Ai(19,a,i,h),n.elementType=k,n.lanes=g,n;case Q:return yl(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:w=10;break e;case K:w=9;break e;case q:w=11;break e;case ee:w=14;break e;case me:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ai(w,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function vs(n,i,a,c){return n=Ai(7,n,c,i),n.lanes=a,n}function yl(n,i,a,c){return n=Ai(22,n,c,i),n.elementType=Q,n.lanes=a,n.stateNode={isHidden:!1},n}function eh(n,i,a){return n=Ai(6,n,null,i),n.lanes=a,n}function th(n,i,a){return i=Ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function E_(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ht(0),this.expirationTimes=Ht(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ht(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function nh(n,i,a,c,h,g,w,H,j){return n=new E_(n,i,a,H,j),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Ai(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},mu(g),n}function w_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Tm(n){if(!n)return Or;n=n._reactInternals;e:{if(mn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ri(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ri(a))return Zf(n,a,i)}return i}function Em(n,i,a,c,h,g,w,H,j){return n=nh(a,c,!0,n,h,g,w,H,j),n.context=Tm(null),a=n.current,c=Zn(),h=Gr(a),g=fr(c,h),g.callback=i??null,Br(a,g,h),n.current.lanes=h,fn(n,h,c),oi(n,c),n}function Sl(n,i,a,c){var h=i.current,g=Zn(),w=Gr(h);return a=Tm(a),i.context===null?i.context=a:i.pendingContext=a,i=fr(g,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Br(h,i,w),n!==null&&(Fi(n,h,w,g),Qo(n,h,w)),w}function Ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function wm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ih(n,i){wm(n,i),(n=n.alternate)&&wm(n,i)}function C_(){return null}var Cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function rh(n){this._internalRoot=n}Tl.prototype.render=rh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Sl(n,i,null,null)},Tl.prototype.unmount=rh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ps(function(){Sl(null,n,null,null)}),i[lr]=null}};function Tl(n){this._internalRoot=n}Tl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ki();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Pr.length&&i!==0&&i<Pr[a].priority;a++);Pr.splice(a,0,n),a===0&&df(n)}};function sh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function El(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Am(){}function A_(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var ge=Ml(w);g.call(ge)}}var w=Em(i,c,n,0,null,!1,!1,"",Am);return n._reactRootContainer=w,n[lr]=w.current,Ba(n.nodeType===8?n.parentNode:n),ps(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var H=c;c=function(){var ge=Ml(j);H.call(ge)}}var j=nh(n,0,!1,null,null,!1,!1,"",Am);return n._reactRootContainer=j,n[lr]=j.current,Ba(n.nodeType===8?n.parentNode:n),ps(function(){Sl(i,j,a,c)}),j}function wl(n,i,a,c,h){var g=a._reactRootContainer;if(g){var w=g;if(typeof h=="function"){var H=h;h=function(){var j=Ml(w);H.call(j)}}Sl(i,w,n,h)}else w=A_(a,i,n,h,c);return Ml(w)}Tn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=gt(i.pendingLanes);a!==0&&(Mn(i,a|1),oi(i,Kt()),(Ft&6)===0&&(Ys=Kt()+500,Fr()))}break;case 13:ps(function(){var c=dr(n,1);if(c!==null){var h=Zn();Fi(c,n,1,h)}}),ih(n,1)}},Nr=function(n){if(n.tag===13){var i=dr(n,134217728);if(i!==null){var a=Zn();Fi(i,n,134217728,a)}ih(n,134217728)}},Pi=function(n){if(n.tag===13){var i=Gr(n),a=dr(n,i);if(a!==null){var c=Zn();Fi(a,n,i,c)}ih(n,i)}},Ki=function(){return rt},Dt=function(n,i){var a=rt;try{return rt=n,i()}finally{rt=a}},xe=function(n,i,a){switch(i){case"input":if(Jt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Vo(c);if(!h)throw Error(t(90));ut(c),Jt(c,h)}}}break;case"textarea":G(n,a);break;case"select":i=a.value,i!=null&&ht(n,!!a.multiple,i,!1)}},_e=$u,ae=ps;var b_={usingClientEntryPoint:!1,Events:[Va,Os,Vo,X,pe,$u]},no={findFiberByHostInstance:as,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N_={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dn(n),n===null?null:n.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||C_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{W=Cl.inject(N_),de=Cl}catch{}}return li.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b_,li.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sh(i))throw Error(t(200));return w_(n,i,null,a)},li.createRoot=function(n,i){if(!sh(n))throw Error(t(299));var a=!1,c="",h=Cm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=nh(n,1,!1,null,null,a,!1,c,h),n[lr]=i.current,Ba(n.nodeType===8?n.parentNode:n),new rh(i)},li.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=dn(i),n=n===null?null:n.stateNode,n},li.flushSync=function(n){return ps(n)},li.hydrate=function(n,i,a){if(!El(i))throw Error(t(200));return wl(null,n,i,!0,a)},li.hydrateRoot=function(n,i,a){if(!sh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",w=Cm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Em(i,null,n,1,a??null,h,!1,g,w),n[lr]=i.current,Ba(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Tl(i)},li.render=function(n,i,a){if(!El(i))throw Error(t(200));return wl(null,n,i,!1,a)},li.unmountComponentAtNode=function(n){if(!El(n))throw Error(t(40));return n._reactRootContainer?(ps(function(){wl(null,null,n,!1,function(){n._reactRootContainer=null,n[lr]=null})}),!0):!1},li.unstable_batchedUpdates=$u,li.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!El(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return wl(n,i,a,!1,c)},li.version="18.3.1-next-f1338f8080-20240426",li}var Um;function k_(){if(Um)return lh.exports;Um=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),lh.exports=F_(),lh.exports}var Om;function B_(){if(Om)return Al;Om=1;var s=k_();return Al.createRoot=s.createRoot,Al.hydrateRoot=s.hydrateRoot,Al}var z_=B_();const H_=Q0(z_);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),J0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var G_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=Pt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},p)=>Pt.createElement("svg",{ref:p,...G_,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:J0("lucide",o),...d},[...u.map(([m,x])=>Pt.createElement(m,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=(s,e)=>{const t=Pt.forwardRef(({className:r,...o},l)=>Pt.createElement(W_,{ref:l,iconNode:e,className:J0(`lucide-${V_(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=Zt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=Zt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=Zt("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=Zt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=Zt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=Zt("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=Zt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Zt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=Zt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=Zt("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=Zt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Zt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Zt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=Zt("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=Zt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=Zt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Zt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=Zt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=Zt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=Zt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=Zt("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=Zt("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=Zt("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=Zt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=Zt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=Zt("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=Zt("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vd="187",xa={ROTATE:0,DOLLY:1,PAN:2},va={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sx=0,Bm=1,ax=2,ac=1,ng=2,mo=3,Es=0,ui=1,Gi=2,ya=0,vo=1,zm=2,Hm=3,Vm=4,ox=5,ma=100,lx=101,cx=102,ux=103,hx=104,dx=200,fx=201,px=202,mx=203,ig=204,rg=205,gx=206,vx=207,_x=208,xx=209,yx=210,Sx=211,Mx=212,Tx=213,Ex=214,Yh=0,$h=1,Zh=2,So=3,Qh=4,Jh=5,ed=6,td=7,sg=0,wx=1,Cx=2,Er=0,ag=1,og=2,lg=3,Gd=4,cg=5,ug=6,hg=7,dg=300,Ma=301,Mo=302,fh=303,ph=304,nd=1e3,Mr=1001,id=1002,kn=1003,Ax=1004,Nl=1005,ei=1006,mh=1007,Jr=1008,yi=1009,fg=1010,pg=1011,To=1012,Wd=1013,sr=1014,nr=1015,ar=1016,jd=1017,Xd=1018,Ta=1020,mg=35902,gg=35899,vg=1021,_g=1022,ir=1023,ns=1026,es=1027,xg=1028,Kd=1029,ws=1030,qd=1031,Yd=1033,oc=33776,lc=33777,cc=33778,uc=33779,rd=35840,sd=35841,ad=35842,od=35843,ld=36196,cd=37492,ud=37496,hd=37488,dd=37489,pc=37490,fd=37491,pd=37808,md=37809,gd=37810,vd=37811,_d=37812,xd=37813,yd=37814,Sd=37815,Md=37816,Td=37817,Ed=37818,wd=37819,Cd=37820,Ad=37821,bd=36492,Nd=36494,Rd=36495,Pd=36283,Dd=36284,mc=36285,Ld=36286,bx=3200,Id=0,Nx=1,Qr="",Ni="srgb",gc="srgb-linear",vc="linear",Wt="srgb",gh=7680,Rx=519,Px=512,Dx=513,Lx=514,yg=515,Ix=516,Ux=517,Sg=518,Mg=519,Tg=35044,Gm="300 es",Wi=2e3,Eo=2001;function Ox(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function _c(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fx(){const s=_c("canvas");return s.style.display="block",s}const Wm={};function xc(...s){const e="THREE."+s.shift();console.log(e,...s)}function Eg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function vt(...s){s=Eg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function kt(...s){s=Eg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function hc(...s){const e=s.join(" ");e in Wm||(Wm[e]=!0,vt(...s))}function kx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Bx={[Yh]:Yh,[Zh]:ed,[Qh]:Qh,[So]:Jh,[$h]:$h,[ed]:Zh,[td]:td,[Jh]:So};class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_o=Math.PI/180,Ud=180/Math.PI;function As(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function zx(s,e){return(s%e+e)%e}function vh(s,e,t){return(1-t)*s+t*e}function Hx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ac(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wg(s,e){if(e.constructor===Float32Array)return s;const t=Ac(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Cg(s,e){if(e.constructor===Float32Array)return s;const t=Ac(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Vx={DEG2RAD:_o},of=class of{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};of.prototype.isVector2=!0;let je=of;class is{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let p=r[o+0],m=r[o+1],x=r[o+2],M=r[o+3],v=l[u+0],y=l[u+1],E=l[u+2],A=l[u+3];if(M!==A||p!==v||m!==y||x!==E){let _=p*v+m*y+x*E+M*A;_<0&&(v=-v,y=-y,E=-E,A=-A,_=-_);let S=1-d;if(_<.9995){const L=Math.acos(_),B=Math.sin(L);S=Math.sin(S*L)/B,d=Math.sin(d*L)/B,p=p*S+v*d,m=m*S+y*d,x=x*S+E*d,M=M*S+A*d}else{p=p*S+v*d,m=m*S+y*d,x=x*S+E*d,M=M*S+A*d;const L=1/Math.sqrt(p*p+m*m+x*x+M*M);p*=L,m*=L,x*=L,M*=L}}e[t]=p,e[t+1]=m,e[t+2]=x,e[t+3]=M}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],p=r[o+1],m=r[o+2],x=r[o+3],M=l[u],v=l[u+1],y=l[u+2],E=l[u+3];return e[t]=d*E+x*M+p*y-m*v,e[t+1]=p*E+x*v+m*M-d*y,e[t+2]=m*E+x*y+d*v-p*M,e[t+3]=x*E-d*M-p*v-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),x=d(o/2),M=d(l/2),v=p(r/2),y=p(o/2),E=p(l/2);switch(u){case"XYZ":this._x=v*x*M+m*y*E,this._y=m*y*M-v*x*E,this._z=m*x*E+v*y*M,this._w=m*x*M-v*y*E;break;case"YXZ":this._x=v*x*M+m*y*E,this._y=m*y*M-v*x*E,this._z=m*x*E-v*y*M,this._w=m*x*M+v*y*E;break;case"ZXY":this._x=v*x*M-m*y*E,this._y=m*y*M+v*x*E,this._z=m*x*E+v*y*M,this._w=m*x*M-v*y*E;break;case"ZYX":this._x=v*x*M-m*y*E,this._y=m*y*M+v*x*E,this._z=m*x*E-v*y*M,this._w=m*x*M+v*y*E;break;case"YZX":this._x=v*x*M+m*y*E,this._y=m*y*M+v*x*E,this._z=m*x*E-v*y*M,this._w=m*x*M-v*y*E;break;case"XZY":this._x=v*x*M-m*y*E,this._y=m*y*M-v*x*E,this._z=m*x*E+v*y*M,this._w=m*x*M+v*y*E;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],p=t[9],m=t[2],x=t[6],M=t[10],v=r+d+M;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(x-p)*y,this._y=(l-m)*y,this._z=(u-o)*y}else if(r>d&&r>M){const y=2*Math.sqrt(1+r-d-M);this._w=(x-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+m)/y}else if(d>M){const y=2*Math.sqrt(1+d-r-M);this._w=(l-m)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+x)/y}else{const y=2*Math.sqrt(1+M-r-d);this._w=(u-o)/y,this._x=(l+m)/y,this._y=(p+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,p=t._y,m=t._z,x=t._w;return this._x=r*x+u*d+o*m-l*p,this._y=o*x+u*p+l*d-r*m,this._z=l*x+u*m+r*p-o*d,this._w=u*x-r*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let p=1-t;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);p=Math.sin(p*m)/x,t=Math.sin(t*m)/x,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const lf=class lf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),x=2*(d*t-l*o),M=2*(l*r-u*t);return this.x=t+p*m+u*M-d*x,this.y=r+p*x+d*m-l*M,this.z=o+p*M+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lf.prototype.isVector3=!0;let N=lf;const _h=new N,jm=new is,cf=class cf{constructor(e,t,r,o,l,u,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m)}set(e,t,r,o,l,u,d,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=l,x[5]=p,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],x=r[4],M=r[7],v=r[2],y=r[5],E=r[8],A=o[0],_=o[3],S=o[6],L=o[1],B=o[4],P=o[7],z=o[2],U=o[5],T=o[8];return l[0]=u*A+d*L+p*z,l[3]=u*_+d*B+p*U,l[6]=u*S+d*P+p*T,l[1]=m*A+x*L+M*z,l[4]=m*_+x*B+M*U,l[7]=m*S+x*P+M*T,l[2]=v*A+y*L+E*z,l[5]=v*_+y*B+E*U,l[8]=v*S+y*P+E*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return t*u*x-t*d*m-r*l*x+r*d*p+o*l*m-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],M=x*u-d*m,v=d*p-x*l,y=m*l-u*p,E=t*M+r*v+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=M*A,e[1]=(o*m-x*r)*A,e[2]=(d*r-o*u)*A,e[3]=v*A,e[4]=(x*t-o*p)*A,e[5]=(o*l-d*t)*A,e[6]=y*A,e[7]=(r*p-m*t)*A,e[8]=(u*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+t,0,0,1),this}scale(e,t){return hc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xh.makeScale(e,t)),this}rotate(e){return hc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xh.makeRotation(-e)),this}translate(e,t){return hc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cf.prototype.isMatrix3=!0;let xt=cf;const xh=new xt,Xm=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Km=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gx(){const s={enabled:!0,workingColorSpace:gc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Wt&&(o.r=wr(o.r),o.g=wr(o.g),o.b=wr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Wt&&(o.r=Sa(o.r),o.g=Sa(o.g),o.b=Sa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qr?vc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[gc]:{primaries:e,whitePoint:r,transfer:vc,toXYZ:Xm,fromXYZ:Km,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:Xm,fromXYZ:Km,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),s}const It=Gx();function wr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Sa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Js;class Wx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Js===void 0&&(Js=_c("canvas")),Js.width=e.width,Js.height=e.height;const o=Js.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Js}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_c("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=wr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(wr(t[r]/255)*255):t[r]=wr(t[r]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jx=0;class $d{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=As(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(yh(o[u].image)):l.push(yh(o[u]))}else l=yh(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function yh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let Xx=0;const Sh=new N;class Kn extends ss{constructor(e=Kn.DEFAULT_IMAGE,t=Kn.DEFAULT_MAPPING,r=Mr,o=Mr,l=ei,u=Jr,d=ir,p=yi,m=Kn.DEFAULT_ANISOTROPY,x=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=As(),this.name="",this.source=new $d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=dg;Kn.DEFAULT_ANISOTROPY=1;const uf=class uf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],x=p[4],M=p[8],v=p[1],y=p[5],E=p[9],A=p[2],_=p[6],S=p[10];if(Math.abs(x-v)<.01&&Math.abs(M-A)<.01&&Math.abs(E-_)<.01){if(Math.abs(x+v)<.1&&Math.abs(M+A)<.1&&Math.abs(E+_)<.1&&Math.abs(m+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const B=(m+1)/2,P=(y+1)/2,z=(S+1)/2,U=(x+v)/4,T=(M+A)/4,R=(E+_)/4;return B>P&&B>z?B<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(B),o=U/r,l=T/r):P>z?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=U/o,l=R/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=T/l,o=R/l),this.set(r,o,l,t),this}let L=Math.sqrt((_-E)*(_-E)+(M-A)*(M-A)+(v-x)*(v-x));return Math.abs(L)<.001&&(L=1),this.x=(_-E)/L,this.y=(M-A)/L,this.z=(v-x)/L,this.w=Math.acos((m+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uf.prototype.isVector4=!0;let cn=uf;class Kx extends ss{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new Kn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new $d(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends Kx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ag extends Kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=kn,this.minFilter=kn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qx extends Kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=kn,this.minFilter=kn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Cc=class Cc{constructor(e,t,r,o,l,u,d,p,m,x,M,v,y,E,A,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m,x,M,v,y,E,A,_)}set(e,t,r,o,l,u,d,p,m,x,M,v,y,E,A,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=l,S[5]=u,S[9]=d,S[13]=p,S[2]=m,S[6]=x,S[10]=M,S[14]=v,S[3]=y,S[7]=E,S[11]=A,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ea.setFromMatrixColumn(e,0).length(),l=1/ea.setFromMatrixColumn(e,1).length(),u=1/ea.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(l),M=Math.sin(l);if(e.order==="XYZ"){const v=u*x,y=u*M,E=d*x,A=d*M;t[0]=p*x,t[4]=-p*M,t[8]=m,t[1]=y+E*m,t[5]=v-A*m,t[9]=-d*p,t[2]=A-v*m,t[6]=E+y*m,t[10]=u*p}else if(e.order==="YXZ"){const v=p*x,y=p*M,E=m*x,A=m*M;t[0]=v+A*d,t[4]=E*d-y,t[8]=u*m,t[1]=u*M,t[5]=u*x,t[9]=-d,t[2]=y*d-E,t[6]=A+v*d,t[10]=u*p}else if(e.order==="ZXY"){const v=p*x,y=p*M,E=m*x,A=m*M;t[0]=v-A*d,t[4]=-u*M,t[8]=E+y*d,t[1]=y+E*d,t[5]=u*x,t[9]=A-v*d,t[2]=-u*m,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const v=u*x,y=u*M,E=d*x,A=d*M;t[0]=p*x,t[4]=E*m-y,t[8]=v*m+A,t[1]=p*M,t[5]=A*m+v,t[9]=y*m-E,t[2]=-m,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const v=u*p,y=u*m,E=d*p,A=d*m;t[0]=p*x,t[4]=A-v*M,t[8]=E*M+y,t[1]=M,t[5]=u*x,t[9]=-d*x,t[2]=-m*x,t[6]=y*M+E,t[10]=v-A*M}else if(e.order==="XZY"){const v=u*p,y=u*m,E=d*p,A=d*m;t[0]=p*x,t[4]=-M,t[8]=m*x,t[1]=v*M+A,t[5]=u*x,t[9]=y*M-E,t[2]=E*M-y,t[6]=d*x,t[10]=A*M+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yx,e,$x)}lookAt(e,t,r){const o=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Kr.crossVectors(r,_i),Kr.lengthSq()===0&&(Math.abs(r.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Kr.crossVectors(r,_i)),Kr.normalize(),Rl.crossVectors(_i,Kr),o[0]=Kr.x,o[4]=Rl.x,o[8]=_i.x,o[1]=Kr.y,o[5]=Rl.y,o[9]=_i.y,o[2]=Kr.z,o[6]=Rl.z,o[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],x=r[1],M=r[5],v=r[9],y=r[13],E=r[2],A=r[6],_=r[10],S=r[14],L=r[3],B=r[7],P=r[11],z=r[15],U=o[0],T=o[4],R=o[8],O=o[12],V=o[1],K=o[5],q=o[9],ue=o[13],k=o[2],ee=o[6],me=o[10],Q=o[14],te=o[3],Z=o[7],$=o[11],F=o[15];return l[0]=u*U+d*V+p*k+m*te,l[4]=u*T+d*K+p*ee+m*Z,l[8]=u*R+d*q+p*me+m*$,l[12]=u*O+d*ue+p*Q+m*F,l[1]=x*U+M*V+v*k+y*te,l[5]=x*T+M*K+v*ee+y*Z,l[9]=x*R+M*q+v*me+y*$,l[13]=x*O+M*ue+v*Q+y*F,l[2]=E*U+A*V+_*k+S*te,l[6]=E*T+A*K+_*ee+S*Z,l[10]=E*R+A*q+_*me+S*$,l[14]=E*O+A*ue+_*Q+S*F,l[3]=L*U+B*V+P*k+z*te,l[7]=L*T+B*K+P*ee+z*Z,l[11]=L*R+B*q+P*me+z*$,l[15]=L*O+B*ue+P*Q+z*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],m=e[13],x=e[2],M=e[6],v=e[10],y=e[14],E=e[3],A=e[7],_=e[11],S=e[15],L=p*y-m*v,B=d*y-m*M,P=d*v-p*M,z=u*y-m*x,U=u*v-p*x,T=u*M-d*x;return t*(A*L-_*B+S*P)-r*(E*L-_*z+S*U)+o*(E*B-A*z+S*T)-l*(E*P-A*U+_*T)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],d=e[9],p=e[2],m=e[6],x=e[10];return t*(u*x-d*m)-r*(l*x-d*p)+o*(l*m-u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],M=e[9],v=e[10],y=e[11],E=e[12],A=e[13],_=e[14],S=e[15],L=t*d-r*u,B=t*p-o*u,P=t*m-l*u,z=r*p-o*d,U=r*m-l*d,T=o*m-l*p,R=x*A-M*E,O=x*_-v*E,V=x*S-y*E,K=M*_-v*A,q=M*S-y*A,ue=v*S-y*_,k=L*ue-B*q+P*K+z*V-U*O+T*R;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/k;return e[0]=(d*ue-p*q+m*K)*ee,e[1]=(o*q-r*ue-l*K)*ee,e[2]=(A*T-_*U+S*z)*ee,e[3]=(v*U-M*T-y*z)*ee,e[4]=(p*V-u*ue-m*O)*ee,e[5]=(t*ue-o*V+l*O)*ee,e[6]=(_*P-E*T-S*B)*ee,e[7]=(x*T-v*P+y*B)*ee,e[8]=(u*q-d*V+m*R)*ee,e[9]=(r*V-t*q-l*R)*ee,e[10]=(E*U-A*P+S*L)*ee,e[11]=(M*P-x*U-y*L)*ee,e[12]=(d*O-u*K-p*R)*ee,e[13]=(t*K-r*O+o*R)*ee,e[14]=(A*B-E*z-_*L)*ee,e[15]=(x*z-M*B+v*L)*ee,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,p=e.z,m=l*u,x=l*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,x*d+r,x*p-o*u,0,m*p-o*d,x*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,p=t._w,m=l+l,x=u+u,M=d+d,v=l*m,y=l*x,E=l*M,A=u*x,_=u*M,S=d*M,L=p*m,B=p*x,P=p*M,z=r.x,U=r.y,T=r.z;return o[0]=(1-(A+S))*z,o[1]=(y+P)*z,o[2]=(E-B)*z,o[3]=0,o[4]=(y-P)*U,o[5]=(1-(v+S))*U,o[6]=(_+L)*U,o[7]=0,o[8]=(E+B)*T,o[9]=(_-L)*T,o[10]=(1-(v+A))*T,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ea.set(o[0],o[1],o[2]).length();const d=ea.set(o[4],o[5],o[6]).length(),p=ea.set(o[8],o[9],o[10]).length();l<0&&(u=-u),ki.copy(this);const m=1/u,x=1/d,M=1/p;return ki.elements[0]*=m,ki.elements[1]*=m,ki.elements[2]*=m,ki.elements[4]*=x,ki.elements[5]*=x,ki.elements[6]*=x,ki.elements[8]*=M,ki.elements[9]*=M,ki.elements[10]*=M,t.setFromRotationMatrix(ki),r.x=u,r.y=d,r.z=p,this}makePerspective(e,t,r,o,l,u,d=Wi,p=!1){const m=this.elements,x=2*l/(t-e),M=2*l/(r-o),v=(t+e)/(t-e),y=(r+o)/(r-o);let E,A;if(p)E=l/(u-l),A=u*l/(u-l);else if(d===Wi)E=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(d===Eo)E=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=M,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Wi,p=!1){const m=this.elements,x=2/(t-e),M=2/(r-o),v=-(t+e)/(t-e),y=-(r+o)/(r-o);let E,A;if(p)E=1/(u-l),A=u/(u-l);else if(d===Wi)E=-2/(u-l),A=-(u+l)/(u-l);else if(d===Eo)E=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=M,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=E,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Cc.prototype.isMatrix4=!0;let $t=Cc;const ea=new N,ki=new $t,Yx=new N(0,0,0),$x=new N(1,1,1),Kr=new N,Rl=new N,_i=new N,qm=new $t,Ym=new is;class rs{constructor(e=0,t=0,r=0,o=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],m=o[5],x=o[9],M=o[2],v=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-At(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-M,l),this._z=0);break;case"ZXY":this._x=Math.asin(At(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-M,y),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-At(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(At(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-M,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,y),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ym.setFromEuler(this),this.setFromQuaternion(Ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class Zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zx=0;const $m=new N,ta=new is,gr=new $t,Pl=new N,so=new N,Qx=new N,Jx=new is,Zm=new N(1,0,0),Qm=new N(0,1,0),Jm=new N(0,0,1),e0={type:"added"},ey={type:"removed"},na={type:"childadded",child:null},Mh={type:"childremoved",child:null};class bn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new N,t=new rs,r=new is,o=new N(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new xt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(Zm,e)}rotateY(e){return this.rotateOnAxis(Qm,e)}rotateZ(e){return this.rotateOnAxis(Jm,e)}translateOnAxis(e,t){return $m.copy(e).applyQuaternion(this.quaternion),this.position.add($m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zm,e)}translateY(e){return this.translateOnAxis(Qm,e)}translateZ(e){return this.translateOnAxis(Jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Pl.copy(e):Pl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(so,Pl,this.up):gr.lookAt(Pl,so,this.up),this.quaternion.setFromRotationMatrix(gr),o&&(gr.extractRotation(o.matrixWorld),ta.setFromRotationMatrix(gr),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(e0),na.child=e,this.dispatchEvent(na),na.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ey),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(e0),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,Qx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,Jx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const M=p[m];l(e.shapes,M)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),M=u(e.shapes),v=u(e.skeletons),y=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),M.length>0&&(r.shapes=M),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bn.DEFAULT_UP=new N(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xn extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ty={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const A of e.hand.values()){const _=t.getJointPose(A,r),S=this._getHandJoint(m,A);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const x=m.joints["index-finger-tip"],M=m.joints["thumb-tip"],v=x.position.distanceTo(M.position),y=.02,E=.005;m.inputState.pinching&&v>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ty)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Xn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function Eh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class wt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=It.workingColorSpace){return this.r=e,this.g=t,this.b=r,It.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=It.workingColorSpace){if(e=zx(e,1),t=At(t,0,1),r=At(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Eh(u,l,e+1/3),this.g=Eh(u,l,e),this.b=Eh(u,l,e-1/3)}return It.colorSpaceToWorking(this,o),this}setStyle(e,t=Ni){function r(l){l!==void 0&&parseFloat(l)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ni){const r=bg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ni){return It.workingToColorSpace(jn.copy(this),e),Math.round(At(jn.r*255,0,255))*65536+Math.round(At(jn.g*255,0,255))*256+Math.round(At(jn.b*255,0,255))}getHexString(e=Ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(jn.copy(this),t);const r=jn.r,o=jn.g,l=jn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,m;const x=(d+u)/2;if(d===u)p=0,m=0;else{const M=u-d;switch(m=x<=.5?M/(u+d):M/(2-u-d),u){case r:p=(o-l)/M+(o<l?6:0);break;case o:p=(l-r)/M+2;break;case l:p=(r-o)/M+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Ni){It.workingToColorSpace(jn.copy(this),e);const t=jn.r,r=jn.g,o=jn.b;return e!==Ni?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(Dl);const r=vh(qr.h,Dl.h,t),o=vh(qr.s,Dl.s,t),l=vh(qr.l,Dl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new wt;wt.NAMES=bg;class Qd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(e),this.density=t}clone(){return new Qd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ny extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bi=new N,vr=new N,wh=new N,_r=new N,ia=new N,ra=new N,t0=new N,Ch=new N,Ah=new N,bh=new N,Nh=new cn,Rh=new cn,Ph=new cn;class Si{constructor(e=new N,t=new N,r=new N){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Bi.subVectors(e,t),o.cross(Bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Bi.subVectors(o,t),vr.subVectors(r,t),wh.subVectors(e,t);const u=Bi.dot(Bi),d=Bi.dot(vr),p=Bi.dot(wh),m=vr.dot(vr),x=vr.dot(wh),M=u*m-d*d;if(M===0)return l.set(0,0,0),null;const v=1/M,y=(m*p-d*x)*v,E=(u*x-d*p)*v;return l.set(1-y-E,E,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,r,o,l,u,d,p){return this.getBarycoord(e,t,r,o,_r)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,_r.x),p.addScaledVector(u,_r.y),p.addScaledVector(d,_r.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return Nh.setScalar(0),Rh.setScalar(0),Ph.setScalar(0),Nh.fromBufferAttribute(e,t),Rh.fromBufferAttribute(e,r),Ph.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Nh,l.x),u.addScaledVector(Rh,l.y),u.addScaledVector(Ph,l.z),u}static isFrontFacing(e,t,r,o){return Bi.subVectors(r,t),vr.subVectors(e,t),Bi.cross(vr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Bi.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Si.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;ia.subVectors(o,r),ra.subVectors(l,r),Ch.subVectors(e,r);const p=ia.dot(Ch),m=ra.dot(Ch);if(p<=0&&m<=0)return t.copy(r);Ah.subVectors(e,o);const x=ia.dot(Ah),M=ra.dot(Ah);if(x>=0&&M<=x)return t.copy(o);const v=p*M-x*m;if(v<=0&&p>=0&&x<=0&&p-x>0)return u=p/(p-x),t.copy(r).addScaledVector(ia,u);bh.subVectors(e,l);const y=ia.dot(bh),E=ra.dot(bh);if(E>=0&&y<=E)return t.copy(l);const A=y*m-p*E;if(A<=0&&m>=0&&E<=0)return d=m/(m-E),t.copy(r).addScaledVector(ra,d);const _=x*E-y*M;if(_<=0&&M-x>=0&&y-E>=0)return t0.subVectors(l,o),d=(M-x)/(M-x+(y-E)),t.copy(o).addScaledVector(t0,d);const S=1/(_+A+v);return u=A*S,d=v*S,t.copy(r).addScaledVector(ia,u).addScaledVector(ra,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Co{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,zi):zi.fromBufferAttribute(l,u),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ll.copy(r.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Il.subVectors(this.max,ao),sa.subVectors(e.a,ao),aa.subVectors(e.b,ao),oa.subVectors(e.c,ao),Yr.subVectors(aa,sa),$r.subVectors(oa,aa),xs.subVectors(sa,oa);let t=[0,-Yr.z,Yr.y,0,-$r.z,$r.y,0,-xs.z,xs.y,Yr.z,0,-Yr.x,$r.z,0,-$r.x,xs.z,0,-xs.x,-Yr.y,Yr.x,0,-$r.y,$r.x,0,-xs.y,xs.x,0];return!Dh(t,sa,aa,oa,Il)||(t=[1,0,0,0,1,0,0,0,1],!Dh(t,sa,aa,oa,Il))?!1:(Ul.crossVectors(Yr,$r),t=[Ul.x,Ul.y,Ul.z],Dh(t,sa,aa,oa,Il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xr=[new N,new N,new N,new N,new N,new N,new N,new N],zi=new N,Ll=new Co,sa=new N,aa=new N,oa=new N,Yr=new N,$r=new N,xs=new N,ao=new N,Il=new N,Ul=new N,ys=new N;function Dh(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ys.fromArray(s,l);const d=o.x*Math.abs(ys.x)+o.y*Math.abs(ys.y)+o.z*Math.abs(ys.z),p=e.dot(ys),m=t.dot(ys),x=r.dot(ys);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const Sn=new N,Ol=new je;let iy=0;class ts extends ss{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Tg,this.updateRanges=[],this.gpuType=nr,this.version=0,this._normalizationScale=e!==void 0?Ac(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):wg(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Cg(e,this.array)}}class Ng extends ts{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Rg extends ts{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class jt extends ts{constructor(e,t,r){super(new Float32Array(e),t,r)}}const ry=new Co,oo=new N,Lh=new N;class bc{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ry.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const t=oo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(oo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(Lh)),this.expandByPoint(oo.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sy=0;const bi=new $t,Ih=new bn,la=new N,xi=new Co,lo=new Co,Un=new N;class qn extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ox(e)?Rg:Ng)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new xt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,r){return bi.makeTranslation(e,t,r),this.applyMatrix4(bi),this}scale(e,t,r){return bi.makeScale(e,t,r),this.applyMatrix4(bi),this}lookAt(e){return Ih.lookAt(e),Ih.updateMatrix(),this.applyMatrix4(Ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new jt(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];xi.setFromBufferAttribute(l),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const r=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];lo.setFromBufferAttribute(d),this.morphTargetsRelative?(Un.addVectors(xi.min,lo.min),xi.expandByPoint(Un),Un.addVectors(xi.max,lo.max),xi.expandByPoint(Un)):(xi.expandByPoint(lo.min),xi.expandByPoint(lo.max))}xi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Un.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Un));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)Un.fromBufferAttribute(d,m),p&&(la.fromBufferAttribute(e,m),Un.add(la)),o=Math.max(o,r.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ts(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],p=[],m=new Uint8Array(r.count);for(let O=0;O<r.count;O++)d[O]=new N,p[O]=new N;const x=new N,M=new N,v=new N,y=new je,E=new je,A=new je,_=new N,S=new N;function L(O,V,K){m[O]=m[V]=m[K]=1,x.fromBufferAttribute(r,O),M.fromBufferAttribute(r,V),v.fromBufferAttribute(r,K),y.fromBufferAttribute(l,O),E.fromBufferAttribute(l,V),A.fromBufferAttribute(l,K),M.sub(x),v.sub(x),E.sub(y),A.sub(y);const q=1/(E.x*A.y-A.x*E.y);isFinite(q)&&(_.copy(M).multiplyScalar(A.y).addScaledVector(v,-E.y).multiplyScalar(q),S.copy(v).multiplyScalar(E.x).addScaledVector(M,-A.x).multiplyScalar(q),d[O].add(_),d[V].add(_),d[K].add(_),p[O].add(S),p[V].add(S),p[K].add(S))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let O=0,V=B.length;O<V;++O){const K=B[O],q=K.start,ue=K.count;for(let k=q,ee=q+ue;k<ee;k+=3)L(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const P=new N,z=new N,U=new N,T=new N;function R(O){U.fromBufferAttribute(o,O),T.copy(U);const V=d[O];P.copy(V),P.sub(U.multiplyScalar(U.dot(V))).normalize(),z.crossVectors(T,V);const q=z.dot(p[O])<0?-1:1;u.setXYZW(O,P.x,P.y,P.z,q)}for(let O=0,V=r.count;O<V;++O)m[O]&&R(O);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new ts(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const o=new N,l=new N,u=new N,d=new N,p=new N,m=new N,x=new N,M=new N;if(e)for(let v=0,y=e.count;v<y;v+=3){const E=e.getX(v+0),A=e.getX(v+1),_=e.getX(v+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,_),x.subVectors(u,l),M.subVectors(o,l),x.cross(M),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,_),d.add(x),p.add(x),m.add(x),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let v=0,y=t.count;v<y;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),x.subVectors(u,l),M.subVectors(o,l),x.cross(M),r.setXYZ(v+0,x.x,x.y,x.z),r.setXYZ(v+1,x.x,x.y,x.z),r.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Un.fromBufferAttribute(e,t),Un.normalize(),e.setXYZ(t,Un.x,Un.y,Un.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,M=d.normalized,v=new m.constructor(p.length*x);let y=0,E=0;for(let A=0,_=p.length;A<_;A++){d.isInterleavedBufferAttribute?y=p[A]*d.data.stride+d.offset:y=p[A]*x;for(let S=0;S<x;S++)v[E++]=m[y++]}return new ts(v,x,M)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let x=0,M=m.length;x<M;x++){const v=m[x],y=e(v,r);p.push(y)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let M=0,v=m.length;M<v;M++){const y=m[M];x.push(y.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],M=l[m];for(let v=0,y=M.length;v<y;v++)x.push(M[v].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const M=u[m];this.addGroup(M.start,M.count,M.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ay{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tg,this.updateRanges=[],this.version=0,this.uuid=As()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=n0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const r=new this.array.constructor(e.arrayBuffers[t]),o=new this.constructor(r,this.stride);return o.setUsage(this.usage),o}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=n0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const r={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return r.usage=this.usage,r}}function n0(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=As()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Qn=new N;class yc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o,this._normalizationScale=e!==void 0?Ac(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix4(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Qn.fromBufferAttribute(this,t),Qn.applyNormalMatrix(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Qn.fromBufferAttribute(this,t),Qn.transformDirection(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){xc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new ts(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):wg(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Cg(e,this.data.array)}}const Uh=new N,oy=new N,ly=new xt;class Sr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Uh.subVectors(r,t).cross(oy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Uh),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ly.getNormalMatrix(e),o=this.coplanarPoint(Uh).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let cy=0;class bs extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=As(),this.name="",this.type="Material",this.blending=vo,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ig,this.blendDst=rg,this.blendEquation=ma,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gh,this.stencilZFail=gh,this.stencilZPass=gh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new wt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Sr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new je().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Od extends bs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ca;const co=new N,ua=new N,ha=new N,da=new je,uo=new je,Pg=new $t,Fl=new N,ho=new N,kl=new N,i0=new je,Oh=new je,r0=new je;class s0 extends bn{constructor(e=new Od){if(super(),this.isSprite=!0,this.type="Sprite",ca===void 0){ca=new qn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new ay(t,5);ca.setIndex([0,1,2,0,2,3]),ca.setAttribute("position",new yc(r,3,0,!1)),ca.setAttribute("uv",new yc(r,2,3,!1))}this.geometry=ca,this.material=e,this.center=new je(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ua.setFromMatrixScale(this.matrixWorld),Pg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ha.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ua.multiplyScalar(-ha.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;Bl(Fl.set(-.5,-.5,0),ha,u,ua,o,l),Bl(ho.set(.5,-.5,0),ha,u,ua,o,l),Bl(kl.set(.5,.5,0),ha,u,ua,o,l),i0.set(0,0),Oh.set(1,0),r0.set(1,1);let d=e.ray.intersectTriangle(Fl,ho,kl,!1,co);if(d===null&&(Bl(ho.set(-.5,.5,0),ha,u,ua,o,l),Oh.set(0,1),d=e.ray.intersectTriangle(Fl,kl,ho,!1,co),d===null))return;const p=e.ray.origin.distanceTo(co);p<e.near||p>e.far||t.push({distance:p,point:co.clone(),uv:Si.getInterpolation(co,Fl,ho,kl,i0,Oh,r0,new je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Bl(s,e,t,r,o,l){da.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(uo.x=l*da.x-o*da.y,uo.y=o*da.x+l*da.y):uo.copy(da),s.copy(e),s.x+=uo.x,s.y+=uo.y,s.applyMatrix4(Pg)}const yr=new N,Fh=new N,zl=new N,Hl=new N;class Nc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Fh.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),Hl.copy(this.origin).sub(Fh);const l=e.distanceTo(t)*.5,u=-this.direction.dot(zl),d=Hl.dot(this.direction),p=-Hl.dot(zl),m=Hl.lengthSq(),x=Math.abs(1-u*u);let M,v,y,E;if(x>0)if(M=u*p-d,v=u*d-p,E=l*x,M>=0)if(v>=-E)if(v<=E){const A=1/x;M*=A,v*=A,y=M*(M+u*v+2*d)+v*(u*M+v+2*p)+m}else v=l,M=Math.max(0,-(u*v+d)),y=-M*M+v*(v+2*p)+m;else v=-l,M=Math.max(0,-(u*v+d)),y=-M*M+v*(v+2*p)+m;else v<=-E?(M=Math.max(0,-(-u*l+d)),v=M>0?-l:Math.min(Math.max(-l,-p),l),y=-M*M+v*(v+2*p)+m):v<=E?(M=0,v=Math.min(Math.max(-l,-p),l),y=v*(v+2*p)+m):(M=Math.max(0,-(u*l+d)),v=M>0?l:Math.min(Math.max(-l,-p),l),y=-M*M+v*(v+2*p)+m);else v=u>0?-l:l,M=Math.max(0,-(u*v+d)),y=-M*M+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,M),o&&o.copy(Fh).addScaledVector(zl,v),y}intersectSphere(e,t){if(e.radius<0)return null;yr.subVectors(e.center,this.origin);const r=yr.dot(this.direction),o=yr.dot(yr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,p;const m=1/this.direction.x,x=1/this.direction.y,M=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,o=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,o=(e.min.x-v.x)*m),x>=0?(l=(e.min.y-v.y)*x,u=(e.max.y-v.y)*x):(l=(e.max.y-v.y)*x,u=(e.min.y-v.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),M>=0?(d=(e.min.z-v.z)*M,p=(e.max.z-v.z)*M):(d=(e.max.z-v.z)*M,p=(e.min.z-v.z)*M),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,d=this.direction,p=d.x,m=d.y,x=d.z,M=e.x-u.x,v=e.y-u.y,y=e.z-u.z,E=t.x-u.x,A=t.y-u.y,_=t.z-u.z,S=r.x-u.x,L=r.y-u.y,B=r.z-u.z,P=Math.abs(p),z=Math.abs(m),U=Math.abs(x);let T,R,O,V,K,q,ue,k,ee,me,Q,te;if(P>=z&&P>=U?(O=p,q=M,ee=E,te=S,p>=0?(T=m,R=x,V=v,K=y,ue=A,k=_,me=L,Q=B):(T=x,R=m,V=y,K=v,ue=_,k=A,me=B,Q=L)):z>=U?(O=m,q=v,ee=A,te=L,m>=0?(T=x,R=p,V=y,K=M,ue=_,k=E,me=B,Q=S):(T=p,R=x,V=M,K=y,ue=E,k=_,me=S,Q=B)):(O=x,q=y,ee=_,te=B,x>=0?(T=p,R=m,V=M,K=v,ue=E,k=A,me=S,Q=L):(T=m,R=p,V=v,K=M,ue=A,k=E,me=L,Q=S)),O===0)return null;const Z=T/O,$=R/O,F=1/O,ie=V-Z*q,De=K-$*q,re=ue-Z*ee,Me=k-$*ee,Ee=me-Z*te,Be=Q-$*te,Te=Ee*Me-Be*re,Oe=ie*Be-De*Ee,ot=re*De-Me*ie;if(o){if(Te<0||Oe<0||ot<0)return null}else if((Te<0||Oe<0||ot<0)&&(Te>0||Oe>0||ot>0))return null;const nt=Te+Oe+ot;if(nt===0)return null;const ut=F*(Te*q+Oe*ee+ot*te);return(nt>0?ut<0:ut>0)?null:this.at(ut/nt,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ga extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const a0=new $t,Ss=new Nc,Vl=new bc,o0=new N,Gl=new N,Wl=new N,jl=new N,kh=new N,Xl=new N,l0=new N,Kl=new N;class Lt extends bn{constructor(e=new qn,t=new ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Xl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=d[p],M=l[p];x!==0&&(kh.fromBufferAttribute(M,e),u?Xl.addScaledVector(kh,x):Xl.addScaledVector(kh.sub(t),x))}t.add(Xl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Vl.copy(r.boundingSphere),Vl.applyMatrix4(l),Ss.copy(e.ray).recast(e.near),!(Vl.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Vl,o0)===null||Ss.origin.distanceToSquared(o0)>(e.far-e.near)**2))&&(a0.copy(l).invert(),Ss.copy(e.ray).applyMatrix4(a0),!(r.boundingBox!==null&&Ss.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,M=l.attributes.normal,v=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const _=v[E],S=u[_.materialIndex],L=Math.max(_.start,y.start),B=Math.min(d.count,Math.min(_.start+_.count,y.start+y.count));for(let P=L,z=B;P<z;P+=3){const U=d.getX(P),T=d.getX(P+1),R=d.getX(P+2);o=ql(this,S,e,r,m,x,M,U,T,R),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let _=E,S=A;_<S;_+=3){const L=d.getX(_),B=d.getX(_+1),P=d.getX(_+2);o=ql(this,u,e,r,m,x,M,L,B,P),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const _=v[E],S=u[_.materialIndex],L=Math.max(_.start,y.start),B=Math.min(p.count,Math.min(_.start+_.count,y.start+y.count));for(let P=L,z=B;P<z;P+=3){const U=P,T=P+1,R=P+2;o=ql(this,S,e,r,m,x,M,U,T,R),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let _=E,S=A;_<S;_+=3){const L=_,B=_+1,P=_+2;o=ql(this,u,e,r,m,x,M,L,B,P),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function uy(s,e,t,r,o,l,u,d){let p;if(e.side===ui?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===Es,d),p===null)return null;Kl.copy(d),Kl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Kl);return m<t.near||m>t.far?null:{distance:m,point:Kl.clone(),object:s}}function ql(s,e,t,r,o,l,u,d,p,m){s.getVertexPosition(d,Gl),s.getVertexPosition(p,Wl),s.getVertexPosition(m,jl);const x=uy(s,e,t,r,Gl,Wl,jl,l0);if(x){const M=new N;Si.getBarycoord(l0,Gl,Wl,jl,M),o&&(x.uv=Si.getInterpolatedAttribute(o,d,p,m,M,new je)),l&&(x.uv1=Si.getInterpolatedAttribute(l,d,p,m,M,new je)),u&&(x.normal=Si.getInterpolatedAttribute(u,d,p,m,M,new N),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new N,materialIndex:0};Si.getNormal(Gl,Wl,jl,v.normal),x.face=v,x.barycoord=M}return x}class hy extends Kn{constructor(e=null,t=1,r=1,o,l,u,d,p,m=kn,x=kn,M,v){super(null,u,d,p,m,x,o,l,M,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ms=new bc,dy=new je(.5,.5),Yl=new N;class wo{constructor(e=new Sr,t=new Sr,r=new Sr,o=new Sr,l=new Sr,u=new Sr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],p=l[2],m=l[3],x=l[4],M=l[5],v=l[6],y=l[7],E=l[8],A=l[9],_=l[10],S=l[11],L=l[12],B=l[13],P=l[14],z=l[15];if(o[0].setComponents(m-u,y-x,S-E,z-L).normalize(),o[1].setComponents(m+u,y+x,S+E,z+L).normalize(),o[2].setComponents(m+d,y+M,S+A,z+B).normalize(),o[3].setComponents(m-d,y-M,S-A,z-B).normalize(),r)o[4].setComponents(p,v,_,P).normalize(),o[5].setComponents(m-p,y-v,S-_,z-P).normalize();else if(o[4].setComponents(m-p,y-v,S-_,z-P).normalize(),t===Wi)o[5].setComponents(m+p,y+v,S+_,z+P).normalize();else if(t===Eo)o[5].setComponents(p,v,_,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const t=dy.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Yl.x=o.normal.x>0?e.max.x:e.min.x,Yl.y=o.normal.y>0?e.max.y:e.min.y,Yl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const c0=new $t;class Jd{constructor(){this.coordinateSystem=Wi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];c0.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new wo),r[o].setFromProjectionMatrix(c0,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new wo),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new Jd().copy(this)}}class Sc extends bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mc=new N,Tc=new N,u0=new $t,fo=new Nc,$l=new bc,Bh=new N,h0=new N;class fy extends bn{constructor(e=new qn,t=new Sc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Mc.fromBufferAttribute(t,o-1),Tc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Mc.distanceTo(Tc);e.setAttribute("lineDistance",new jt(r,1))}else vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),$l.copy(r.boundingSphere),$l.applyMatrix4(o),$l.radius+=l,e.ray.intersectsSphere($l)===!1)return;u0.copy(o).invert(),fo.copy(e.ray).applyMatrix4(u0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,x=r.index,v=r.attributes.position;if(x!==null){const y=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let A=y,_=E-1;A<_;A+=m){const S=x.getX(A),L=x.getX(A+1),B=Zl(this,e,fo,p,S,L,A);B&&t.push(B)}if(this.isLineLoop){const A=x.getX(E-1),_=x.getX(y),S=Zl(this,e,fo,p,A,_,E-1);S&&t.push(S)}}else{const y=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let A=y,_=E-1;A<_;A+=m){const S=Zl(this,e,fo,p,A,A+1,A);S&&t.push(S)}if(this.isLineLoop){const A=Zl(this,e,fo,p,E-1,y,E-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Zl(s,e,t,r,o,l,u){const d=s.geometry.attributes.position;if(Mc.fromBufferAttribute(d,o),Tc.fromBufferAttribute(d,l),t.distanceSqToSegment(Mc,Tc,Bh,h0)>r)return;Bh.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Bh);if(!(m<e.near||m>e.far))return{distance:m,point:h0.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const d0=new N,f0=new N;class Fd extends fy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)d0.fromBufferAttribute(t,o),f0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+d0.distanceTo(f0);e.setAttribute("lineDistance",new jt(r,1))}else vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dg extends Kn{constructor(e=[],t=Ma,r,o,l,u,d,p,m,x){super(e,t,r,o,l,u,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p0 extends Kn{constructor(e,t,r,o,l,u,d,p,m){super(e,t,r,o,l,u,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ea extends Kn{constructor(e,t,r=sr,o,l,u,d=kn,p=kn,m,x=ns,M=1){if(x!==ns&&x!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:M};super(v,o,l,u,d,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $d(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Lg extends Ea{constructor(e,t=sr,r=Ma,o,l,u=kn,d=kn,p,m=ns){const x={width:e,height:e,depth:1},M=[x,x,x,x,x,x];super(e,e,t,r,o,l,u,d,p,m),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ig extends Kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tr extends qn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],x=[],M=[];let v=0,y=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(M,2));function E(A,_,S,L,B,P,z,U,T,R,O){const V=P/T,K=z/R,q=P/2,ue=z/2,k=U/2,ee=T+1,me=R+1;let Q=0,te=0;const Z=new N;for(let $=0;$<me;$++){const F=$*K-ue;for(let ie=0;ie<ee;ie++){const De=ie*V-q;Z[A]=De*L,Z[_]=F*B,Z[S]=k,m.push(Z.x,Z.y,Z.z),Z[A]=0,Z[_]=0,Z[S]=U>0?1:-1,x.push(Z.x,Z.y,Z.z),M.push(ie/T),M.push(1-$/R),Q+=1}}for(let $=0;$<R;$++)for(let F=0;F<T;F++){const ie=v+F+ee*$,De=v+F+ee*($+1),re=v+(F+1)+ee*($+1),Me=v+(F+1)+ee*$;p.push(ie,De,Me),p.push(De,re,Me),te+=6}d.addGroup(y,te,O),y+=te,v+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class er extends qn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const x=[],M=[],v=[],y=[];let E=0;const A=[],_=r/2;let S=0;L(),u===!1&&(e>0&&B(!0),t>0&&B(!1)),this.setIndex(x),this.setAttribute("position",new jt(M,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(y,2));function L(){const P=new N,z=new N;let U=0;const T=(t-e)/r;for(let R=0;R<=l;R++){const O=[],V=R/l,K=V*(t-e)+e;for(let q=0;q<=o;q++){const ue=q/o,k=ue*p+d,ee=Math.sin(k),me=Math.cos(k);z.x=K*ee,z.y=-V*r+_,z.z=K*me,M.push(z.x,z.y,z.z),P.set(ee,T,me).normalize(),v.push(P.x,P.y,P.z),y.push(ue,1-V),O.push(E++)}A.push(O)}for(let R=0;R<o;R++)for(let O=0;O<l;O++){const V=A[O][R],K=A[O+1][R],q=A[O+1][R+1],ue=A[O][R+1];(e>0||O!==0)&&(x.push(V,K,ue),U+=3),(t>0||O!==l-1)&&(x.push(K,q,ue),U+=3)}m.addGroup(S,U,0),S+=U}function B(P){const z=E,U=new je,T=new N;let R=0;const O=P===!0?e:t,V=P===!0?1:-1;for(let q=1;q<=o;q++)M.push(0,_*V,0),v.push(0,V,0),y.push(.5,.5),E++;const K=E;for(let q=0;q<=o;q++){const k=q/o*p+d,ee=Math.cos(k),me=Math.sin(k);T.x=O*me,T.y=_*V,T.z=O*ee,M.push(T.x,T.y,T.z),v.push(0,V,0),U.x=ee*.5+.5,U.y=me*.5*V+.5,y.push(U.x,U.y),E++}for(let q=0;q<o;q++){const ue=z+q,k=K+q;P===!0?x.push(k,k+1,ue):x.push(k+1,k,ue),R+=3}m.addGroup(S,R,P===!0?1:2),S+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ql=new N,Jl=new N,zh=new N,ec=new Si;class m0 extends qn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(_o*t),u=e.getIndex(),d=e.getAttribute("position"),p=u?u.count:d.count,m=[0,0,0],x=["a","b","c"],M=new Array(3),v=new Map,y=[];for(let E=0;E<p;E+=3){u?(m[0]=u.getX(E),m[1]=u.getX(E+1),m[2]=u.getX(E+2)):(m[0]=E,m[1]=E+1,m[2]=E+2);const{a:A,b:_,c:S}=ec;if(A.fromBufferAttribute(d,m[0]),_.fromBufferAttribute(d,m[1]),S.fromBufferAttribute(d,m[2]),ec.getNormal(zh),M[0]=`${Math.round(A.x*o)},${Math.round(A.y*o)},${Math.round(A.z*o)}`,M[1]=`${Math.round(_.x*o)},${Math.round(_.y*o)},${Math.round(_.z*o)}`,M[2]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,!(M[0]===M[1]||M[1]===M[2]||M[2]===M[0]))for(let L=0;L<3;L++){const B=(L+1)%3,P=M[L],z=M[B],U=ec[x[L]],T=ec[x[B]],R=`${P}_${z}`,O=`${z}_${P}`,V=v.get(O);V?(zh.dot(V.normal)<=l&&(y.push(U.x,U.y,U.z),y.push(T.x,T.y,T.z)),v.set(O,null)):v.has(R)||v.set(R,{index0:m[L],index1:m[B],normal:zh.clone()})}}for(const E of v.values())if(E){const{index0:A,index1:_}=E;Ql.fromBufferAttribute(d,A),Jl.fromBufferAttribute(d,_),y.push(Ql.x,Ql.y,Ql.z),y.push(Jl.x,Jl.y,Jl.z)}this.setAttribute("position",new jt(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Cr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){vt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,p=l-1,m;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),m=r[o]-u,m<0)d=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,r[o]===u)return o/(l-1);const x=r[o],v=r[o+1]-x,y=(u-x)/v;return(o+y)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),p=t||(u.isVector2?new je:new N);return p.copy(d).sub(u).normalize(),p}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new N,o=[],l=[],u=[],d=new N,p=new $t;for(let y=0;y<=e;y++){const E=y/e;o[y]=this.getTangentAt(E,new N)}l[0]=new N,u[0]=new N;let m=Number.MAX_VALUE;const x=Math.abs(o[0].x),M=Math.abs(o[0].y),v=Math.abs(o[0].z);x<=m&&(m=x,r.set(1,0,0)),M<=m&&(m=M,r.set(0,1,0)),v<=m&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),u[y]=u[y-1].clone(),d.crossVectors(o[y-1],o[y]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(At(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(p.makeRotationAxis(d,E))}u[y].crossVectors(o[y],l[y])}if(t===!0){let y=Math.acos(At(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(y=-y);for(let E=1;E<=e;E++)l[E].applyMatrix4(p.makeRotationAxis(o[E],y*E)),u[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Ug extends Cr{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=p}getPoint(e,t=new je){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const x=Math.cos(this.aRotation),M=Math.sin(this.aRotation),v=p-this.aX,y=m-this.aY;p=v*x-y*M+this.aX,m=v*M+y*x+this.aY}return r.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class py extends Ug{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function ef(){let s=0,e=0,t=0,r=0;function o(l,u,d,p){s=l,e=d,t=-3*l+3*u-2*d-p,r=2*l-2*u+d+p}return{initCatmullRom:function(l,u,d,p,m){o(u,d,m*(d-l),m*(p-u))},initNonuniformCatmullRom:function(l,u,d,p,m,x,M){let v=(u-l)/m-(d-l)/(m+x)+(d-u)/x,y=(d-u)/x-(p-u)/(x+M)+(p-d)/M;v*=x,y*=x,o(u,d,v,y)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const g0=new N,v0=new N,Hh=new ef,Vh=new ef,Gh=new ef;class Og extends Cr{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new N){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),p=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:p===0&&d===l-1&&(d=l-2,p=1);let m,x;this.closed||d>0?m=o[(d-1)%l]:(v0.subVectors(o[0],o[1]).add(o[0]),m=v0);const M=o[d%l],v=o[(d+1)%l];if(this.closed||d+2<l?x=o[(d+2)%l]:(g0.subVectors(o[l-1],o[l-2]).add(o[l-1]),x=g0),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(M),y),A=Math.pow(M.distanceToSquared(v),y),_=Math.pow(v.distanceToSquared(x),y);A<1e-4&&(A=1),E<1e-4&&(E=A),_<1e-4&&(_=A),Hh.initNonuniformCatmullRom(m.x,M.x,v.x,x.x,E,A,_),Vh.initNonuniformCatmullRom(m.y,M.y,v.y,x.y,E,A,_),Gh.initNonuniformCatmullRom(m.z,M.z,v.z,x.z,E,A,_)}else this.curveType==="catmullrom"&&(Hh.initCatmullRom(m.x,M.x,v.x,x.x,this.tension),Vh.initCatmullRom(m.y,M.y,v.y,x.y,this.tension),Gh.initCatmullRom(m.z,M.z,v.z,x.z,this.tension));return r.set(Hh.calc(p),Vh.calc(p),Gh.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new N().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _0(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,p=s*d;return(2*t-2*r+l+u)*p+(-3*t+3*r-2*l-u)*d+l*s+t}function my(s,e){const t=1-s;return t*t*e}function gy(s,e){return 2*(1-s)*s*e}function vy(s,e){return s*s*e}function xo(s,e,t,r){return my(s,e)+gy(s,t)+vy(s,r)}function _y(s,e){const t=1-s;return t*t*t*e}function xy(s,e){const t=1-s;return 3*t*t*s*e}function yy(s,e){return 3*(1-s)*s*s*e}function Sy(s,e){return s*s*s*e}function yo(s,e,t,r,o){return _y(s,e)+xy(s,t)+yy(s,r)+Sy(s,o)}class My extends Cr{constructor(e=new je,t=new je,r=new je,o=new je){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new je){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(yo(e,o.x,l.x,u.x,d.x),yo(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ty extends Cr{constructor(e=new N,t=new N,r=new N,o=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new N){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(yo(e,o.x,l.x,u.x,d.x),yo(e,o.y,l.y,u.y,d.y),yo(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ey extends Cr{constructor(e=new je,t=new je){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new je){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new je){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wy extends Cr{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cy extends Cr{constructor(e=new je,t=new je,r=new je){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new je){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(xo(e,o.x,l.x,u.x),xo(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fg extends Cr{constructor(e=new N,t=new N,r=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new N){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(xo(e,o.x,l.x,u.x),xo(e,o.y,l.y,u.y),xo(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ay extends Cr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new je){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,p=o[u===0?u:u-1],m=o[u],x=o[u>o.length-2?o.length-1:u+1],M=o[u>o.length-3?o.length-1:u+2];return r.set(_0(d,p.x,m.x,x.x,M.x),_0(d,p.y,m.y,x.y,M.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new je().fromArray(o))}return this}}var by=Object.freeze({__proto__:null,ArcCurve:py,CatmullRomCurve3:Og,CubicBezierCurve:My,CubicBezierCurve3:Ty,EllipseCurve:Ug,LineCurve:Ey,LineCurve3:wy,QuadraticBezierCurve:Cy,QuadraticBezierCurve3:Fg,SplineCurve:Ay});class Hi extends qn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),p=Math.floor(o),m=d+1,x=p+1,M=e/d,v=t/p,y=[],E=[],A=[],_=[];for(let S=0;S<x;S++){const L=S*v-u;for(let B=0;B<m;B++){const P=B*M-l;E.push(P,-L,0),A.push(0,0,1),_.push(B/d),_.push(1-S/p)}}for(let S=0;S<p;S++)for(let L=0;L<d;L++){const B=L+m*S,P=L+m*(S+1),z=L+1+m*(S+1),U=L+1+m*S;y.push(B,P,U),y.push(P,z,U)}this.setIndex(y),this.setAttribute("position",new jt(E,3)),this.setAttribute("normal",new jt(A,3)),this.setAttribute("uv",new jt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ec extends qn{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const d=[],p=[],m=[],x=[];let M=e;const v=(t-e)/o,y=new N,E=new je;for(let A=0;A<=o;A++){for(let _=0;_<=r;_++){const S=l+_/r*u;y.x=M*Math.cos(S),y.y=M*Math.sin(S),p.push(y.x,y.y,y.z),m.push(0,0,1),E.x=(y.x/t+1)/2,E.y=(y.y/t+1)/2,x.push(E.x,E.y)}M+=v}for(let A=0;A<o;A++){const _=A*(r+1);for(let S=0;S<r;S++){const L=S+_,B=L,P=L+r+1,z=L+r+2,U=L+1;d.push(B,P,U),d.push(P,z,U)}}this.setIndex(d),this.setAttribute("position",new jt(p,3)),this.setAttribute("normal",new jt(m,3)),this.setAttribute("uv",new jt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _a extends qn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const x=[],M=new N,v=new N,y=[],E=[],A=[],_=[];for(let S=0;S<=r;S++){const L=[],B=S/r,P=u+B*d,z=e*Math.cos(P),U=Math.sqrt(e*e-z*z);let T=0;S===0&&u===0?T=.5/t:S===r&&p===Math.PI&&(T=-.5/t);for(let R=0;R<=t;R++){const O=R/t,V=o+O*l;M.x=-U*Math.cos(V),M.y=z,M.z=U*Math.sin(V),E.push(M.x,M.y,M.z),v.copy(M).normalize(),A.push(v.x,v.y,v.z),_.push(O+T,1-B),L.push(m++)}x.push(L)}for(let S=0;S<r;S++)for(let L=0;L<t;L++){const B=x[S][L+1],P=x[S][L],z=x[S+1][L],U=x[S+1][L+1];(S!==0||u>0)&&y.push(B,P,U),(S!==r-1||p<Math.PI)&&y.push(P,z,U)}this.setIndex(y),this.setAttribute("position",new jt(E,3)),this.setAttribute("normal",new jt(A,3)),this.setAttribute("uv",new jt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tf extends qn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:d},r=Math.floor(r),o=Math.floor(o);const p=[],m=[],x=[],M=[],v=new N,y=new N,E=new N;for(let A=0;A<=r;A++){const _=u+A/r*d;for(let S=0;S<=o;S++){const L=S/o*l;y.x=(e+t*Math.cos(_))*Math.cos(L),y.y=(e+t*Math.cos(_))*Math.sin(L),y.z=t*Math.sin(_),m.push(y.x,y.y,y.z),v.x=e*Math.cos(L),v.y=e*Math.sin(L),E.subVectors(y,v).normalize(),x.push(E.x,E.y,E.z),M.push(S/o),M.push(A/r)}}for(let A=1;A<=r;A++)for(let _=1;_<=o;_++){const S=(o+1)*A+_-1,L=(o+1)*(A-1)+_-1,B=(o+1)*(A-1)+_,P=(o+1)*A+_;p.push(S,L,P),p.push(L,B,P)}this.setIndex(p),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(x,3)),this.setAttribute("uv",new jt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class nf extends qn{constructor(e=new Fg(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new N,p=new N,m=new je;let x=new N;const M=[],v=[],y=[],E=[];A(),this.setIndex(E),this.setAttribute("position",new jt(M,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(y,2));function A(){for(let B=0;B<t;B++)_(B);_(l===!1?t:0),L(),S()}function _(B){x=e.getPointAt(B/t,x);const P=u.normals[B],z=u.binormals[B];for(let U=0;U<=o;U++){const T=U/o*Math.PI*2,R=Math.sin(T),O=-Math.cos(T);p.x=O*P.x+R*z.x,p.y=O*P.y+R*z.y,p.z=O*P.z+R*z.z,p.normalize(),v.push(p.x,p.y,p.z),d.x=x.x+r*p.x,d.y=x.y+r*p.y,d.z=x.z+r*p.z,M.push(d.x,d.y,d.z)}}function S(){for(let B=1;B<=t;B++)for(let P=1;P<=o;P++){const z=(o+1)*(B-1)+(P-1),U=(o+1)*B+(P-1),T=(o+1)*B+P,R=(o+1)*(B-1)+P;E.push(z,U,R),E.push(U,T,R)}}function L(){for(let B=0;B<=t;B++)for(let P=0;P<=o;P++)m.x=B/t,m.y=P/o,y.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new nf(new by[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function wa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(x0(o))o.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(x0(o[0])){const l=[];for(let u=0,d=o.length;u<d;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Jn(s){const e={};for(let t=0;t<s.length;t++){const r=wa(s[t]);for(const o in r)e[o]=r[o]}return e}function x0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ny(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function kg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const Ry={clone:wa,merge:Jn};var Py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cs extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Py,this.fragmentShader=Dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wa(e.uniforms),this.uniformsGroups=Ny(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new wt().setHex(o.value);break;case"v2":this.uniforms[r].value=new je().fromArray(o.value);break;case"v3":this.uniforms[r].value=new N().fromArray(o.value);break;case"v4":this.uniforms[r].value=new cn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new xt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new $t().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ly extends Cs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cn extends bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Id,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Iy extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uy extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rf extends bn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Oy extends rf{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Wh=new $t,y0=new N,S0=new N;class Fy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wo,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;y0.setFromMatrixPosition(e.matrixWorld),t.position.copy(y0),S0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(S0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){Wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Wh,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,d=o?o.w/l.y:1,p=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===Eo||e.reversedDepth?t.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),t.multiply(Wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const tc=new N,nc=new is,Qi=new N;class Bg extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tc,nc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(tc,nc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,nc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new N,M0=new je,T0=new je;class Vi extends Bg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,M0,T0),t.subVectors(T0,M0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class zg extends Bg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ky extends Fy{constructor(){super(new zg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class By extends rf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new ky}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class zy extends rf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const fa=-90,pa=1;class kd extends bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Vi(fa,pa,e,t);o.layers=this.layers,this.add(o);const l=new Vi(fa,pa,e,t);l.layers=this.layers,this.add(l);const u=new Vi(fa,pa,e,t);u.layers=this.layers,this.add(u);const d=new Vi(fa,pa,e,t);d.layers=this.layers,this.add(d);const p=new Vi(fa,pa,e,t);p.layers=this.layers,this.add(p);const m=new Vi(fa,pa,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,p]=t;for(const m of t)this.remove(m);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Eo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,m,x]=this.children,M=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=A,e.setRenderTarget(r,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(M,v,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Hy extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const E0=new $t;class Vy{constructor(e,t,r=0,o=1/0){this.ray=new Nc(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Zd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):kt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return E0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(E0),this}intersectObject(e,t=!0,r=[]){return Bd(e,this,r,t),r.sort(w0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Bd(e[o],this,r,t);return r.sort(w0),r}}function w0(s,e){return s.distance-e.distance}function Bd(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)Bd(l[u],e,t,!0)}}class C0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=At(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Gy extends Fd{constructor(e=10,t=10,r=4473924,o=8947848){r=new wt(r),o=new wt(o);const l=t/2,u=e/t,d=e/2,p=[],m=[];for(let v=0,y=0,E=-d;v<=t;v++,E+=u){p.push(-d,0,E,d,0,E),p.push(E,0,-d,E,0,d);const A=v===l?r:o;A.toArray(m,y),y+=3,A.toArray(m,y),y+=3,A.toArray(m,y),y+=3,A.toArray(m,y),y+=3}const x=new qn;x.setAttribute("position",new jt(p,3)),x.setAttribute("color",new jt(m,3));const M=new Sc({vertexColors:!0,toneMapped:!1});super(x,M),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Wy extends ss{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function A0(s,e,t,r){const o=jy(r);switch(t){case vg:return s*e;case xg:return s*e/o.components*o.byteLength;case Kd:return s*e/o.components*o.byteLength;case ws:return s*e*2/o.components*o.byteLength;case qd:return s*e*2/o.components*o.byteLength;case _g:return s*e*3/o.components*o.byteLength;case ir:return s*e*4/o.components*o.byteLength;case Yd:return s*e*4/o.components*o.byteLength;case oc:case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cc:case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sd:case od:return Math.max(s,16)*Math.max(e,8)/4;case rd:case ad:return Math.max(s,8)*Math.max(e,8)/2;case ld:case cd:case hd:case dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ud:case pc:case fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bd:case Nd:case Rd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pd:case Dd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case mc:case Ld:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jy(s){switch(s){case yi:case fg:return{byteLength:1,components:1};case To:case pg:case ar:return{byteLength:2,components:1};case jd:case Xd:return{byteLength:2,components:4};case sr:case Wd:case nr:return{byteLength:4,components:1};case mg:case gg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Xy(s){const e=new WeakMap;function t(d,p){const m=d.array,x=d.usage,M=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,x),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:M}}function r(d,p,m){const x=p.array,M=p.updateRanges;if(s.bindBuffer(m,d),M.length===0)s.bufferSubData(m,0,x);else{M.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<M.length;y++){const E=M[v],A=M[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,M[v]=A)}M.length=v+1;for(let y=0,E=M.length;y<E;y++){const A=M[y];s.bufferSubData(m,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:u}}var Ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qy=`#ifdef USE_ALPHAHASH
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
#endif`,Yy=`#ifdef USE_ALPHAMAP
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
#endif`,q1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
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
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`uniform float backgroundBlurriness;
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
}`,Et={alphahash_fragment:Ky,alphahash_pars_fragment:qy,alphamap_fragment:Yy,alphamap_pars_fragment:$y,alphatest_fragment:Zy,alphatest_pars_fragment:Qy,aomap_fragment:Jy,aomap_pars_fragment:e1,batching_pars_vertex:t1,batching_vertex:n1,begin_vertex:i1,beginnormal_vertex:r1,bsdfs:s1,iridescence_fragment:a1,bumpmap_pars_fragment:o1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:u1,clipping_planes_vertex:h1,color_fragment:d1,color_pars_fragment:f1,color_pars_vertex:p1,color_vertex:m1,common:g1,defaultnormal_vertex:v1,displacementmap_pars_vertex:_1,displacementmap_vertex:x1,emissivemap_fragment:y1,emissivemap_pars_fragment:S1,colorspace_fragment:M1,colorspace_pars_fragment:T1,envmap_fragment:E1,envmap_common_pars_fragment:w1,envmap_pars_fragment:C1,envmap_pars_vertex:A1,envmap_physical_pars_fragment:k1,envmap_vertex:b1,fog_vertex:N1,fog_pars_vertex:R1,fog_fragment:P1,fog_pars_fragment:D1,gradientmap_pars_fragment:L1,lightmap_pars_fragment:I1,lights_lambert_fragment:U1,lights_lambert_pars_fragment:O1,lights_pars_begin:F1,lights_toon_fragment:B1,lights_toon_pars_fragment:z1,lights_phong_fragment:H1,lights_phong_pars_fragment:V1,lights_physical_fragment:G1,lights_physical_pars_fragment:W1,lights_fragment_begin:j1,lights_fragment_maps:X1,lights_fragment_end:K1,lightprobes_pars_fragment:q1,logdepthbuf_fragment:Y1,logdepthbuf_pars_fragment:$1,logdepthbuf_pars_vertex:Z1,logdepthbuf_vertex:Q1,map_fragment:J1,map_pars_fragment:eS,map_particle_fragment:tS,map_particle_pars_fragment:nS,metalnessmap_fragment:iS,metalnessmap_pars_fragment:rS,morphinstance_vertex:sS,morphcolor_vertex:aS,morphnormal_vertex:oS,morphtarget_pars_vertex:lS,morphtarget_vertex:cS,normal_fragment_begin:uS,normal_fragment_maps:hS,normal_pars_fragment:dS,normal_pars_vertex:fS,normal_vertex:pS,normalmap_pars_fragment:mS,clearcoat_normal_fragment_begin:gS,clearcoat_normal_fragment_maps:vS,clearcoat_pars_fragment:_S,iridescence_pars_fragment:xS,opaque_fragment:yS,packing:SS,premultiplied_alpha_fragment:MS,project_vertex:TS,dithering_fragment:ES,dithering_pars_fragment:wS,roughnessmap_fragment:CS,roughnessmap_pars_fragment:AS,shadowmap_pars_fragment:bS,shadowmap_pars_vertex:NS,shadowmap_vertex:RS,shadowmask_pars_fragment:PS,skinbase_vertex:DS,skinning_pars_vertex:LS,skinning_vertex:IS,skinnormal_vertex:US,specularmap_fragment:OS,specularmap_pars_fragment:FS,tonemapping_fragment:kS,tonemapping_pars_fragment:BS,transmission_fragment:zS,transmission_pars_fragment:HS,uv_pars_fragment:VS,uv_pars_vertex:GS,uv_vertex:WS,worldpos_vertex:jS,background_vert:XS,background_frag:KS,backgroundCube_vert:qS,backgroundCube_frag:YS,cube_vert:$S,cube_frag:ZS,depth_vert:QS,depth_frag:JS,distance_vert:eM,distance_frag:tM,equirect_vert:nM,equirect_frag:iM,linedashed_vert:rM,linedashed_frag:sM,meshbasic_vert:aM,meshbasic_frag:oM,meshlambert_vert:lM,meshlambert_frag:cM,meshmatcap_vert:uM,meshmatcap_frag:hM,meshnormal_vert:dM,meshnormal_frag:fM,meshphong_vert:pM,meshphong_frag:mM,meshphysical_vert:gM,meshphysical_frag:vM,meshtoon_vert:_M,meshtoon_frag:xM,points_vert:yM,points_frag:SM,shadow_vert:MM,shadow_frag:TM,sprite_vert:EM,sprite_frag:wM},Ge={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},tr={basic:{uniforms:Jn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Jn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Jn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Jn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Jn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new wt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Jn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Jn([Ge.points,Ge.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Jn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Jn([Ge.common,Ge.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Jn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Jn([Ge.sprite,Ge.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:Jn([Ge.common,Ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:Jn([Ge.lights,Ge.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};tr.physical={uniforms:Jn([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const ic={r:0,b:0,g:0},CM=new $t,Vg=new xt;Vg.set(-1,0,0,0,1,0,0,0,1);function AM(s,e,t,r,o,l){const u=new wt(0);let d=o===!0?0:1,p,m,x=null,M=0,v=null;function y(L){let B=L.isScene===!0?L.background:null;if(B&&B.isTexture){const P=L.backgroundBlurriness>0;B=e.get(B,P)}return B}function E(L){let B=!1;const P=y(L);P===null?_(u,d):P&&P.isColor&&(_(P,1),B=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||B)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(L,B){const P=y(B);P&&P.isCubeTexture?(m===void 0&&(m=new Lt(new Tr(1,1,1),new Cs({name:"BackgroundCubeMaterial",uniforms:wa(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,U,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(CM.makeRotationFromEuler(B.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Vg),m.material.toneMapped=It.getTransfer(P.colorSpace)!==Wt,(x!==P||M!==P.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,x=P,M=P.version,v=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Lt(new Hi(2,2),new Cs({name:"BackgroundMaterial",uniforms:wa(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=It.getTransfer(P.colorSpace)!==Wt,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||M!==P.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,x=P,M=P.version,v=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,B){L.getRGB(ic,kg(s)),t.buffers.color.setClear(ic.r,ic.g,ic.b,B,l)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,B=1){u.set(L),d=B,_(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,_(u,d)},render:E,addToRenderList:A,dispose:S}}function bM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function d(K,q,ue,k,ee){let me=!1;const Q=M(K,k,ue,q);l!==Q&&(l=Q,m(l.object)),me=y(K,k,ue,ee),me&&E(K,k,ue,ee),ee!==null&&e.update(ee,s.ELEMENT_ARRAY_BUFFER),(me||u)&&(u=!1,P(K,q,ue,k),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function p(){return s.createVertexArray()}function m(K){return s.bindVertexArray(K)}function x(K){return s.deleteVertexArray(K)}function M(K,q,ue,k){const ee=k.wireframe===!0;let me=r[q.id];me===void 0&&(me={},r[q.id]=me);const Q=K.isInstancedMesh===!0?K.id:0;let te=me[Q];te===void 0&&(te={},me[Q]=te);let Z=te[ue.id];Z===void 0&&(Z={},te[ue.id]=Z);let $=Z[ee];return $===void 0&&($=v(p()),Z[ee]=$),$}function v(K){const q=[],ue=[],k=[];for(let ee=0;ee<t;ee++)q[ee]=0,ue[ee]=0,k[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ue,attributeDivisors:k,object:K,attributes:{},index:null}}function y(K,q,ue,k){const ee=l.attributes,me=q.attributes;let Q=0;const te=ue.getAttributes();for(const Z in te)if(te[Z].location>=0){const F=ee[Z];let ie=me[Z];if(ie===void 0&&(Z==="instanceMatrix"&&K.instanceMatrix&&(ie=K.instanceMatrix),Z==="instanceColor"&&K.instanceColor&&(ie=K.instanceColor)),F===void 0||F.attribute!==ie||ie&&F.data!==ie.data)return!0;Q++}return l.attributesNum!==Q||l.index!==k}function E(K,q,ue,k){const ee={},me=q.attributes;let Q=0;const te=ue.getAttributes();for(const Z in te)if(te[Z].location>=0){let F=me[Z];F===void 0&&(Z==="instanceMatrix"&&K.instanceMatrix&&(F=K.instanceMatrix),Z==="instanceColor"&&K.instanceColor&&(F=K.instanceColor));const ie={};ie.attribute=F,F&&F.data&&(ie.data=F.data),ee[Z]=ie,Q++}l.attributes=ee,l.attributesNum=Q,l.index=k}function A(){const K=l.newAttributes;for(let q=0,ue=K.length;q<ue;q++)K[q]=0}function _(K){S(K,0)}function S(K,q){const ue=l.newAttributes,k=l.enabledAttributes,ee=l.attributeDivisors;ue[K]=1,k[K]===0&&(s.enableVertexAttribArray(K),k[K]=1),ee[K]!==q&&(s.vertexAttribDivisor(K,q),ee[K]=q)}function L(){const K=l.newAttributes,q=l.enabledAttributes;for(let ue=0,k=q.length;ue<k;ue++)q[ue]!==K[ue]&&(s.disableVertexAttribArray(ue),q[ue]=0)}function B(K,q,ue,k,ee,me,Q){Q===!0?s.vertexAttribIPointer(K,q,ue,ee,me):s.vertexAttribPointer(K,q,ue,k,ee,me)}function P(K,q,ue,k){A();const ee=k.attributes,me=ue.getAttributes(),Q=q.defaultAttributeValues;for(const te in me){const Z=me[te];if(Z.location>=0){let $=ee[te];if($===void 0&&(te==="instanceMatrix"&&K.instanceMatrix&&($=K.instanceMatrix),te==="instanceColor"&&K.instanceColor&&($=K.instanceColor)),$!==void 0){const F=$.normalized,ie=$.itemSize,De=e.get($);if(De===void 0)continue;const re=De.buffer,Me=De.type,Ee=De.bytesPerElement,Be=Me===s.INT||Me===s.UNSIGNED_INT||$.gpuType===Wd;if($.isInterleavedBufferAttribute){const Te=$.data,Oe=Te.isInterleavedBuffer===!0?Te.stride:Te.itemSize,ot=$.offset;if(Te.isInstancedInterleavedBuffer||Te.isInstancedBufferAttribute){for(let nt=0;nt<Z.locationSize;nt++)S(Z.location+nt,Te.meshPerAttribute);K.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let nt=0;nt<Z.locationSize;nt++)_(Z.location+nt);s.bindBuffer(s.ARRAY_BUFFER,re);for(let nt=0;nt<Z.locationSize;nt++)B(Z.location+nt,ie/Z.locationSize,Me,F,Oe*Ee,(ot+ie/Z.locationSize*nt)*Ee,Be)}else{if($.isInstancedBufferAttribute){for(let Te=0;Te<Z.locationSize;Te++)S(Z.location+Te,$.meshPerAttribute);K.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Te=0;Te<Z.locationSize;Te++)_(Z.location+Te);s.bindBuffer(s.ARRAY_BUFFER,re);for(let Te=0;Te<Z.locationSize;Te++)B(Z.location+Te,ie/Z.locationSize,Me,F,ie*Ee,ie/Z.locationSize*Te*Ee,Be)}}else if(Q!==void 0){const F=Q[te];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(Z.location,F);break;case 3:s.vertexAttrib3fv(Z.location,F);break;case 4:s.vertexAttrib4fv(Z.location,F);break;default:s.vertexAttrib1fv(Z.location,F)}}}}L()}function z(){O();for(const K in r){const q=r[K];for(const ue in q){const k=q[ue];for(const ee in k){const me=k[ee];for(const Q in me)x(me[Q].object),delete me[Q];delete k[ee]}}delete r[K]}}function U(K){if(r[K.id]===void 0)return;const q=r[K.id];for(const ue in q){const k=q[ue];for(const ee in k){const me=k[ee];for(const Q in me)x(me[Q].object),delete me[Q];delete k[ee]}}delete r[K.id]}function T(K){for(const q in r){const ue=r[q];for(const k in ue){const ee=ue[k];if(ee[K.id]===void 0)continue;const me=ee[K.id];for(const Q in me)x(me[Q].object),delete me[Q];delete ee[K.id]}}}function R(K){for(const q in r){const ue=r[q],k=K.isInstancedMesh===!0?K.id:0,ee=ue[k];if(ee!==void 0){for(const me in ee){const Q=ee[me];for(const te in Q)x(Q[te].object),delete Q[te];delete ee[me]}delete ue[k],Object.keys(ue).length===0&&delete r[q]}}}function O(){V(),u=!0,l!==o&&(l=o,m(l.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:O,resetDefaultState:V,dispose:z,releaseStatesOfGeometry:U,releaseStatesOfObject:R,releaseStatesOfProgram:T,initAttributes:A,enableAttribute:_,disableUnusedAttributes:L}}function NM(s,e,t){let r;function o(p){r=p}function l(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function u(p,m,x){x!==0&&(s.drawArraysInstanced(r,p,m,x),t.update(m,r,x))}function d(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,x);let v=0;for(let y=0;y<x;y++)v+=m[y];t.update(v,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function RM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(T){return!(T!==ir&&r.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(T){const R=T===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yi&&T!==nr&&!R&&r.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=p(m);x!==m&&(vt("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const M=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.logarithmicDepthBuffer===!0&&M===!1;t.reversedDepthBuffer===!0&&M===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&M===!0&&vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),B=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:M,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:L,maxVaryings:B,maxFragmentUniforms:P,maxSamples:z,samples:U}}function PM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Sr,d=new xt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(M,v){const y=M.length!==0||v||r!==0||o;return o=v,r=M.length,y},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(M,v){t=x(M,v,0)},this.setState=function(M,v,y){const E=M.clippingPlanes,A=M.clipIntersection,_=M.clipShadows,S=s.get(M);if(!o||E===null||E.length===0||l&&!_)l?x(null):m();else{const L=l?0:r,B=L*4;let P=S.clippingState||null;p.value=P,P=x(E,v,B,y);for(let z=0;z!==B;++z)P[z]=t[z];S.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(M,v,y,E){const A=M!==null?M.length:0;let _=null;if(A!==0){if(_=p.value,E!==!0||_===null){const S=y+A*4,L=v.matrixWorldInverse;d.getNormalMatrix(L),(_===null||_.length<S)&&(_=new Float32Array(S));for(let B=0,P=y;B!==A;++B,P+=4)u.copy(M[B]).applyMatrix4(L,d),u.normal.toArray(_,P),_[P+3]=u.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,_}}class sf extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Dg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Tr(5,5,5),l=new Cs({name:"CubemapFromEquirect",uniforms:wa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ui,blending:ya});l.uniforms.tEquirect.value=t;const u=new Lt(o,l),d=t.minFilter;return t.minFilter===Jr&&(t.minFilter=ei),new kd(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const b0=256,DM=3,LM=20,Gg=256,Wg=16,IM=3,UM=new N,OM=new wt;class wc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new kd(1,10,null),this._boxMesh=new Lt(new Tr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=UM}=l,p=this._renderer;this._setSize(u);const m=this._allocateTarget(),x=this._getSourceTarget(!0);t>0&&(x.texture.mipmapsAutoUpdate=!1);const M=p.autoClear,v=p.autoClearColor,y=p.autoClearDepth,E=p.autoClearStencil,A=e.background;p.autoClear=!0,p.autoClearColor=!0,p.autoClearDepth=!0,p.autoClearStencil=!0,A===null&&(e.background=p.getClearColor(OM));const _=new kd(r,o,x);return _.position.copy(d),_.update(p,e),p.autoClear=M,p.autoClearColor=v,p.autoClearDepth=y,p.autoClearStencil=E,e.background=A,t>0&&(x.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(b0,Hx(e))}_fromTexture(e,t){e.mapping===Ma||e.mapping===Mo?this._setSize(e.image.length===0?b0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=N0(e,!1,!1),r=Math.log2(e)-DM;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=N0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ma||e.mapping===Mo?(this._cubemapMaterial===null&&(this._cubemapMaterial=P0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=R0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=FM(),this._integrationMaterial=kM());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/Wg);for(let u=0;u<=r;u++){const d=wc.lodToRoughness(u,r);if(u>r-IM)l.roughness.value=d,this._renderCube(e,u,this._integrationMaterial);else{const p=d>0?Math.log2(t)+.5*Math.log2(6/(Gg*Math.pow(d,4)))+.5:0;o.roughness.value=d,o.lodBias.value=p,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=BM());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function N0(s,e,t){return new sf(s,{minFilter:Jr,generateMipmaps:e,type:ar,colorSpace:gc,depthBuffer:t})}function Ao(s,e,t){return new Cs({name:s,uniforms:e,vertexShader:Et.cube_vert,fragmentShader:t,side:ui,blending:ya,depthTest:!1,depthWrite:!1})}function FM(){return Ao("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Gg}u

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
	`)}function kM(){return Ao("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Wg}},`

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
	`)}function R0(){return Ao("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function P0(){return Ao("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function zM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(v,y=!1){return v==null?null:y?u(v):l(v)}function l(v){if(v&&v.isTexture){const y=v.mapping;if(y===fh||y===ph)if(e.has(v)){const E=e.get(v).texture;return d(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const A=new sf(E.height);return A.fromEquirectangularTexture(s,v),e.set(v,A),v.addEventListener("dispose",m),d(A.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const y=v.mapping,E=y===fh||y===ph,A=y===Ma||y===Mo;if(E||A){let _=t.get(v);const S=_!==void 0?_.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new wc(s)),_=E?r.fromEquirectangular(v,_):r.fromCubemap(v,_),_.texture.pmremVersion=v.pmremVersion,t.set(v,_),_.texture;if(_!==void 0)return _.texture;{const L=v.image;return E&&L&&L.height>0||A&&L&&p(L)?(r===null&&(r=new wc(s)),_=E?r.fromEquirectangular(v):r.fromCubemap(v),_.texture.pmremVersion=v.pmremVersion,t.set(v,_),v.addEventListener("dispose",x),_.texture):null}}}return v}function d(v,y){return y===fh?v.mapping=Ma:y===ph&&(v.mapping=Mo),v}function p(v){let y=0;const E=6;for(let A=0;A<E;A++)v[A]!==void 0&&y++;return y===E}function m(v){const y=v.target;y.removeEventListener("dispose",m);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function x(v){const y=v.target;y.removeEventListener("dispose",x);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function M(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:M}}function HM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&hc("WebGLRenderer: "+r+" extension not supported."),o}}}function VM(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(E=>delete o[E]);function d(E){p(E.target)}function p(E){E.index!==null&&e.remove(E.index);for(const _ in E.attributes)e.remove(E.attributes[_]);E.removeEventListener("dispose",d),delete o[E.id],u.unregister(E);const A=l.get(E);A&&(e.remove(A),l.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function m(E,A){return o[A.id]!==void 0||(A.addEventListener("dispose",d),o[A.id]=new WeakRef(A),u.register(A,A.id,A),t.memory.geometries++),A}function x(E){const A=E.attributes;for(const _ in A)e.update(A[_],s.ARRAY_BUFFER)}function M(E){const A=E.index,_=E.attributes.position;let S=0;if(_===void 0)return;const L=A!==null?A.array.length:_.array.length/3-1,B=_.count>=65535?Rg:Ng,P=new B(Math.ceil(L/3)*6,1),z=P.array;if(A!==null){const T=A.array;S=A.version;for(let R=0,O=0;R<L;R+=3){const V=T[R+0],K=T[R+1],q=T[R+2];z[O++]=V,z[O++]=K,z[O++]=K,z[O++]=q,z[O++]=q,z[O++]=V}}else{S=_.version;for(let T=0,R=0;T<L;T+=3){const O=T+0,V=T+1,K=T+2;z[R++]=O,z[R++]=V,z[R++]=V,z[R++]=K,z[R++]=K,z[R++]=O}}P.version=S;const U=l.get(E);U&&e.remove(U),l.set(E,P)}function v(E){const A=l.get(E);if(A){const _=E.index;_!==null&&A.version<_.version&&M(E)}else M(E);return l.get(E)}function y(){for(const E in o){const A=o[E].deref();A!==void 0&&p(A)}}return{get:m,update:x,getWireframeAttribute:v,dispose:y}}function GM(s,e,t){let r;function o(M){r=M}let l,u;function d(M){l=M.type,u=M.bytesPerElement}function p(M,v){s.drawElements(r,v,l,M*u),t.update(v,r,1)}function m(M,v,y){y!==0&&(s.drawElementsInstanced(r,v,l,M*u,y),t.update(v,r,y))}function x(M,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,l,M,0,y);let A=0;for(let _=0;_<y;_++)A+=v[_];t.update(A,r,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function WM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:kt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function jM(s,e,t){const r=new WeakMap,o=new cn;function l(u,d,p){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,M=x!==void 0?x.length:0;let v=r.get(d);if(v===void 0||v.count!==M){let V=function(){R.dispose(),r.delete(d),d.removeEventListener("dispose",V)};var y=V;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let P=0;E===!0&&(P=1),A===!0&&(P=2),_===!0&&(P=3);let z=d.attributes.position.count*P,U=1;z>e.maxTextureSize&&(U=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const T=new Float32Array(z*U*4*M),R=new Ag(T,z,U,M);R.type=nr,R.needsUpdate=!0;const O=P*4;for(let K=0;K<M;K++){const q=S[K],ue=L[K],k=B[K],ee=z*U*4*K;for(let me=0;me<q.count;me++){const Q=me*O;E===!0&&(o.fromBufferAttribute(q,me),T[ee+Q+0]=o.x,T[ee+Q+1]=o.y,T[ee+Q+2]=o.z,T[ee+Q+3]=0),A===!0&&(o.fromBufferAttribute(ue,me),T[ee+Q+4]=o.x,T[ee+Q+5]=o.y,T[ee+Q+6]=o.z,T[ee+Q+7]=0),_===!0&&(o.fromBufferAttribute(k,me),T[ee+Q+8]=o.x,T[ee+Q+9]=o.y,T[ee+Q+10]=o.z,T[ee+Q+11]=k.itemSize===4?o.w:1)}}v={count:M,texture:R,size:new je(z,U)},r.set(d,v),d.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let _=0;_<m.length;_++)E+=m[_];const A=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function XM(s,e,t,r,o){let l=new WeakMap;function u(m){const x=o.render.frame,M=m.geometry,v=e.get(m,M);if(l.get(v)!==x&&(e.update(v),l.set(v,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==x&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,x))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==x&&(y.update(),l.set(y,x))}return v}function d(){l=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:u,dispose:d}}const KM={[ag]:"LINEAR_TONE_MAPPING",[og]:"REINHARD_TONE_MAPPING",[lg]:"CINEON_TONE_MAPPING",[Gd]:"ACES_FILMIC_TONE_MAPPING",[ug]:"AGX_TONE_MAPPING",[hg]:"NEUTRAL_TONE_MAPPING",[cg]:"CUSTOM_TONE_MAPPING"};function qM(s,e,t,r,o,l){const u=new rr(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null,m=null;const x=new qn;x.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),x.setAttribute("uv",new jt([0,2,0,0,2,0],2));const M=new Ly({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Lt(x,M),y=new zg(-1,1,1,-1,0,1);let E=null,A=null,_=!1,S,L=null,B=[],P=!1;this.setSize=function(z,U){u.setSize(z,U),d!==null&&d.setSize(z,U),p!==null&&p.setSize(z,U);for(let T=0;T<B.length;T++){const R=B[T];R.setSize&&R.setSize(z,U)}},this.setEffects=function(z){B=z,P=B.length>0&&B[0].isRenderPass===!0;const U=u.width,T=u.height;B.length>0&&d===null&&(d=new rr(U,T,{type:ar,depthBuffer:!1,stencilBuffer:!1}),p=new rr(U,T,{type:ar,depthBuffer:!1,stencilBuffer:!1}));const R=o===!0&&B.some(O=>O.needsDepthTexture===!0);R!==(u.depthTexture!==null)&&(R===!0&&m===null&&(m=new Ea(U,T),l===!0&&(m.format=es,m.type=Ta)),u.dispose(),u.depthTexture=R?m:null,u.resolveDepthBuffer=R,u.storeMultisampledDepthBuffer=R);for(let O=0;O<B.length;O++){const V=B[O];V.setSize&&V.setSize(U,T),R&&V.needsDepthTexture===!0&&V.setDepthTexture&&V.setDepthTexture(m)}},this.begin=function(z,U){if(_||z.toneMapping===Er&&B.length===0)return!1;if(L=U,U!==null){const T=U.width,R=U.height;(u.width!==T||u.height!==R)&&this.setSize(T,R)}return P===!1&&z.setRenderTarget(u),S=z.toneMapping,z.toneMapping=Er,!0},this.hasRenderPass=function(){return P},this.end=function(z,U){z.toneMapping=S,_=!0;let T=u,R=d;for(let O=0;O<B.length;O++){const V=B[O];V.enabled!==!1&&(V.render(z,R,T,U),V.needsSwap!==!1&&(T=R,R=R===d?p:d))}if(E!==z.outputColorSpace||A!==z.toneMapping){E=z.outputColorSpace,A=z.toneMapping,M.defines={},It.getTransfer(E)===Wt&&(M.defines.SRGB_TRANSFER="");const O=KM[A];O&&(M.defines[O]=""),M.needsUpdate=!0}M.uniforms.tDiffuse.value=T.texture,z.setRenderTarget(L),z.render(v,y),L=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),x.dispose(),M.dispose()}}const jg=new Kn,Xg=new Ea(1,1),Kg=new Lg(1),qg=new Ag,Yg=new qx,$g=new Dg,D0=[],L0=[],I0=new Float32Array(16),U0=new Float32Array(9),O0=new Float32Array(4);function Ca(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=D0[o];if(l===void 0&&(l=new Float32Array(o),D0[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function Nn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Rn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Rc(s,e){let t=L0[e];t===void 0&&(t=new Int32Array(e),L0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function YM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2fv(this.addr,e),Rn(t,e)}}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nn(t,e))return;s.uniform3fv(this.addr,e),Rn(t,e)}}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4fv(this.addr,e),Rn(t,e)}}function JM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rn(t,e)}else{if(Nn(t,r))return;O0.set(r),s.uniformMatrix2fv(this.addr,!1,O0),Rn(t,r)}}function eT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rn(t,e)}else{if(Nn(t,r))return;U0.set(r),s.uniformMatrix3fv(this.addr,!1,U0),Rn(t,r)}}function tT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rn(t,e)}else{if(Nn(t,r))return;I0.set(r),s.uniformMatrix4fv(this.addr,!1,I0),Rn(t,r)}}function nT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function iT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2iv(this.addr,e),Rn(t,e)}}function rT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;s.uniform3iv(this.addr,e),Rn(t,e)}}function sT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4iv(this.addr,e),Rn(t,e)}}function aT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function oT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2uiv(this.addr,e),Rn(t,e)}}function lT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;s.uniform3uiv(this.addr,e),Rn(t,e)}}function cT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4uiv(this.addr,e),Rn(t,e)}}function Pc(s){return s.version===0&&(s.compareFunction=Mg,s.needsUpdate=!0),s}function uT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=Pc(Xg):l=jg,t.setTexture2D(e||l,o)}function hT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Yg,o)}function dT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=Pc(Kg):l=$g,t.setTextureCube(e||l,o)}function fT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||qg,o)}function pT(s){switch(s){case 5126:return YM;case 35664:return $M;case 35665:return ZM;case 35666:return QM;case 35674:return JM;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return aT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return fT}}function mT(s,e){s.uniform1fv(this.addr,e)}function gT(s,e){const t=Ca(e,this.size,2);s.uniform2fv(this.addr,t)}function vT(s,e){const t=Ca(e,this.size,3);s.uniform3fv(this.addr,t)}function _T(s,e){const t=Ca(e,this.size,4);s.uniform4fv(this.addr,t)}function xT(s,e){const t=Ca(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yT(s,e){const t=Ca(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ST(s,e){const t=Ca(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function MT(s,e){s.uniform1iv(this.addr,e)}function TT(s,e){s.uniform2iv(this.addr,e)}function ET(s,e){s.uniform3iv(this.addr,e)}function wT(s,e){s.uniform4iv(this.addr,e)}function CT(s,e){s.uniform1uiv(this.addr,e)}function AT(s,e){s.uniform2uiv(this.addr,e)}function bT(s,e){s.uniform3uiv(this.addr,e)}function NT(s,e){s.uniform4uiv(this.addr,e)}function RT(s,e,t){const r=this.cache,o=e.length,l=Rc(t,o);Nn(r,l)||(s.uniform1iv(this.addr,l),Rn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Pc(Xg):u=jg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function PT(s,e,t){const r=this.cache,o=e.length,l=Rc(t,o);Nn(r,l)||(s.uniform1iv(this.addr,l),Rn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Yg,l[u])}function DT(s,e,t){const r=this.cache,o=e.length,l=Rc(t,o);Nn(r,l)||(s.uniform1iv(this.addr,l),Rn(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=Pc(Kg):u=$g;for(let d=0;d!==o;++d)t.setTextureCube(e[d]||u,l[d])}function LT(s,e,t){const r=this.cache,o=e.length,l=Rc(t,o);Nn(r,l)||(s.uniform1iv(this.addr,l),Rn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||qg,l[u])}function IT(s){switch(s){case 5126:return mT;case 35664:return gT;case 35665:return vT;case 35666:return _T;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return MT;case 35667:case 35671:return TT;case 35668:case 35672:return ET;case 35669:case 35673:return wT;case 5125:return CT;case 36294:return AT;case 36295:return bT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return LT}}class UT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=pT(t.type)}}class OT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IT(t.type)}}class FT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function F0(s,e){s.seq.push(e),s.map[e.id]=e}function kT(s,e,t){const r=s.name,o=r.length;for(jh.lastIndex=0;;){const l=jh.exec(r),u=jh.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){F0(t,m===void 0?new UT(d,s,e):new OT(d,s,e));break}else{let M=t.map[d];M===void 0&&(M=new FT(d),F0(t,M)),t=M}}}class dc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),p=e.getUniformLocation(t,d.name);kT(d,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function k0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const BT=37297;let zT=0;function HT(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const B0=new xt;function VT(s){It._getMatrix(B0,It.workingColorSpace,s);const e=`mat3( ${B0.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(s)){case vc:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function z0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+HT(s.getShaderSource(e),d)}else return l}function GT(s,e){const t=VT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const WT={[ag]:"Linear",[og]:"Reinhard",[lg]:"Cineon",[Gd]:"ACESFilmic",[ug]:"AgX",[hg]:"Neutral",[cg]:"Custom"};function jT(s,e){const t=WT[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rc=new N;function XT(){It.getLuminanceCoefficients(rc);const s=rc.x.toFixed(4),e=rc.y.toFixed(4),t=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function qT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function YT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function go(s){return s!==""}function H0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function V0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $T=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(s){return s.replace($T,ZT)}function ZT(s,e){const t=Et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return zd(t)}const QT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G0(s){return s.replace(QT,JT)}function JT(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function W0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const eE={[ac]:"SHADOWMAP_TYPE_PCF",[mo]:"SHADOWMAP_TYPE_VSM"};function tE(s){return eE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nE={[Mo]:"ENVMAP_MODE_REFRACTION"};function iE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":nE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rE={[sg]:"ENVMAP_BLENDING_MULTIPLY",[wx]:"ENVMAP_BLENDING_MIX",[Cx]:"ENVMAP_BLENDING_ADD"};function sE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":rE[s.combine]||"ENVMAP_BLENDING_NONE"}function aE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=tE(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",x=iE(t),M=sE(t),v=KT(t),y=qT(l),E=o.createProgram();let A,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(go).join(`
`),A.length>0&&(A+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(go).join(`
`),_.length>0&&(_+=`
`)):(A=[W0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),_=[W0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+M:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?Et.tonemapping_pars_fragment:"",t.toneMapping!==Er?jT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,GT("linearToOutputTexel",t.outputColorSpace),XT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(go).join(`
`)),u=zd(u),u=H0(u,t),u=V0(u,t),d=zd(d),d=H0(d,t),d=V0(d,t),u=G0(u),d=G0(d),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,A=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,_=["#define varying in",t.glslVersion===Gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=S+A+u,B=S+_+d,P=k0(o,o.VERTEX_SHADER,L),z=k0(o,o.FRAGMENT_SHADER,B);o.attachShader(E,P),o.attachShader(E,z),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function U(V){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(E)||"",q=o.getShaderInfoLog(P)||"",ue=o.getShaderInfoLog(z)||"",k=K.trim(),ee=q.trim(),me=ue.trim();let Q=!0,te=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,P,z);else{const Z=z0(o,P,"vertex"),$=z0(o,z,"fragment");kt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+k+`
`+Z+`
`+$)}else k!==""?vt("WebGLProgram: Program Info Log:",k):(ee===""||me==="")&&(te=!1);te&&(V.diagnostics={runnable:Q,programLog:k,vertexShader:{log:ee,prefix:A},fragmentShader:{log:me,prefix:_}})}o.deleteShader(P),o.deleteShader(z),T=new dc(o,E),R=YT(o,E)}let T;this.getUniforms=function(){return T===void 0&&U(this),T};let R;this.getAttributes=function(){return R===void 0&&U(this),R};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=o.getProgramParameter(E,BT)),O},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=z,this}let oE=0;class lE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new cE(e),t.set(e,r)),r}}class cE{constructor(e){this.id=oE++,this.code=e,this.usedTimes=0}}function uE(s){return s===ws||s===pc||s===mc}function hE(s,e,t,r,o,l){const u=new Zd,d=new lE,p=new Set,m=[],x=new Map,M=r.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return p.add(T),T===0?"uv":`uv${T}`}function E(T,R,O,V,K,q){const ue=V.fog,k=K.geometry,ee=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,me=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Q=e.get(T.envMap||ee,me),te=v[T.type];let Z=r.precision;T.precision!==null&&(Z=r.getMaxPrecision(T.precision),Z!==T.precision&&vt("WebGLProgram.getParameters:",T.precision,"not supported, using",Z,"instead."));const $=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,F=$!==void 0?$.length:0;let ie=0;k.morphAttributes.position!==void 0&&(ie=1),k.morphAttributes.normal!==void 0&&(ie=2),k.morphAttributes.color!==void 0&&(ie=3);let De,re,Me,Ee;if(te){const Re=tr[te];De=Re.vertexShader,re=Re.fragmentShader}else{De=T.vertexShader,re=T.fragmentShader;const Re=d.getVertexShaderStage(T),ct=d.getFragmentShaderStage(T);d.update(T,Re,ct),Me=Re.id,Ee=ct.id}const Be=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Oe=K.isInstancedMesh===!0,ot=K.isBatchedMesh===!0,nt=!!T.map,ut=!!T.matcap,Tt=!!Q,yt=Tt&&Q.isPMREMTexture===!0,Ot=!!T.aoMap,Qt=!!T.lightMap,Jt=!!T.bumpMap&&T.wireframe===!1,Ut=!!T.normalMap,Rt=!!T.displacementMap,he=!!T.emissiveMap,ht=!!T.metalnessMap,lt=!!T.roughnessMap,pt=T.anisotropy>0,G=T.clearcoat>0,St=T.diffuseRoughness>0,mt=T.dispersion>0,qe=T.retroreflectivity>0,Ce=T.iridescence>0,Xt=T.sheen>0,st=T.transmission>0,We=pt&&!!T.anisotropyMap,I=G&&!!T.clearcoatMap,C=G&&!!T.clearcoatNormalMap,J=G&&!!T.clearcoatRoughnessMap,Ae=St&&!!T.diffuseRoughnessMap,Se=Ce&&!!T.iridescenceMap,Le=Ce&&!!T.iridescenceThicknessMap,Ue=Xt&&!!T.sheenColorMap,ve=Xt&&!!T.sheenRoughnessMap,xe=!!T.specularMap,se=!!T.specularColorMap,D=!!T.specularIntensityMap,ce=st&&!!T.transmissionMap,X=st&&!!T.thicknessMap,pe=!!T.gradientMap,_e=!!T.alphaMap,ae=T.alphaTest>0,be=!!T.alphaHash,Ve=!!T.extensions;let ye=Er;T.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(ye=s.toneMapping);const ze=yt?Q.isCompressedCubeTexture?Q.image[0].mipmaps:Q.mipmaps:null,Xe={shaderID:te,shaderType:T.type,shaderName:T.name,vertexShader:De,fragmentShader:re,defines:T.defines,customVertexShaderID:Me,customFragmentShaderID:Ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:Z,batching:ot,batchingColor:ot&&K._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&K.instanceColor!==null,instancingMorph:Oe&&K.morphTexture!==null,outputColorSpace:Be===null?s.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:nt,matcap:ut,envMap:Tt,envMapMode:Tt&&Q.mapping,envMapPMREM:yt,envMapMaxLod:yt?ze.length-1:null,envMapSize:yt?ze[0].width:null,aoMap:Ot,lightMap:Qt,bumpMap:Jt,normalMap:Ut,displacementMap:Rt,emissiveMap:he,normalMapObjectSpace:Ut&&T.normalMapType===Nx,normalMapTangentSpace:Ut&&T.normalMapType===Id,packedNormalMap:Ut&&T.normalMapType===Id&&uE(T.normalMap.format),metalnessMap:ht,roughnessMap:lt,anisotropy:pt,anisotropyMap:We,clearcoat:G,clearcoatMap:I,clearcoatNormalMap:C,clearcoatRoughnessMap:J,diffuseRoughness:St,diffuseRoughnessMap:Ae,dispersion:mt,retroreflection:qe,iridescence:Ce,iridescenceMap:Se,iridescenceThicknessMap:Le,sheen:Xt,sheenColorMap:Ue,sheenRoughnessMap:ve,specularMap:xe,specularColorMap:se,specularIntensityMap:D,transmission:st,transmissionMap:ce,thicknessMap:X,gradientMap:pe,opaque:T.transparent===!1&&T.blending===vo&&T.alphaToCoverage===!1,alphaMap:_e,alphaTest:ae,alphaHash:be,combine:T.combine,mapUv:nt&&y(T.map.channel),aoMapUv:Ot&&y(T.aoMap.channel),lightMapUv:Qt&&y(T.lightMap.channel),bumpMapUv:Jt&&y(T.bumpMap.channel),normalMapUv:Ut&&y(T.normalMap.channel),displacementMapUv:Rt&&y(T.displacementMap.channel),emissiveMapUv:he&&y(T.emissiveMap.channel),metalnessMapUv:ht&&y(T.metalnessMap.channel),roughnessMapUv:lt&&y(T.roughnessMap.channel),anisotropyMapUv:We&&y(T.anisotropyMap.channel),clearcoatMapUv:I&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:C&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&y(T.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ae&&y(T.diffuseRoughnessMap.channel),iridescenceMapUv:Se&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:ve&&y(T.sheenRoughnessMap.channel),specularMapUv:xe&&y(T.specularMap.channel),specularColorMapUv:se&&y(T.specularColorMap.channel),specularIntensityMapUv:D&&y(T.specularIntensityMap.channel),transmissionMapUv:ce&&y(T.transmissionMap.channel),thicknessMapUv:X&&y(T.thicknessMap.channel),alphaMapUv:_e&&y(T.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ut||pt),vertexNormals:!!k.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!k.attributes.uv&&(nt||_e),fog:!!ue,useFog:T.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||k.attributes.normal===void 0&&Ut===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Te,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:q.filter(Re=>Re.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:nt&&T.map.isVideoTexture===!0&&It.getTransfer(T.map.colorSpace)===Wt,decodeVideoTextureEmissive:he&&T.emissiveMap.isVideoTexture===!0&&It.getTransfer(T.emissiveMap.colorSpace)===Wt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Gi,flipSided:T.side===ui,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ve&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&T.extensions.multiDraw===!0||ot)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xe.vertexUv1s=p.has(1),Xe.vertexUv2s=p.has(2),Xe.vertexUv3s=p.has(3),p.clear(),Xe}function A(T){const R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(const O in T.defines)R.push(O),R.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(_(R,T),S(R,T),R.push(s.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function _(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapPMREM),T.push(R.envMapMaxLod),T.push(R.envMapSize),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.diffuseRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.numSunLights),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numSunLightShadows),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.numLightProbeGrids),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function S(T,R){u.disableAll(),R.instancing&&u.enable(0),R.instancingColor&&u.enable(1),R.instancingMorph&&u.enable(2),R.matcap&&u.enable(3),R.envMap&&u.enable(4),R.normalMapObjectSpace&&u.enable(5),R.normalMapTangentSpace&&u.enable(6),R.clearcoat&&u.enable(7),R.iridescence&&u.enable(8),R.alphaTest&&u.enable(9),R.vertexColors&&u.enable(10),R.vertexAlphas&&u.enable(11),R.vertexUv1s&&u.enable(12),R.vertexUv2s&&u.enable(13),R.vertexUv3s&&u.enable(14),R.vertexTangents&&u.enable(15),R.anisotropy&&u.enable(16),R.alphaHash&&u.enable(17),R.batching&&u.enable(18),R.dispersion&&u.enable(19),R.retroreflection&&u.enable(24),R.diffuseRoughness&&u.enable(25),R.batchingColor&&u.enable(20),R.gradientMap&&u.enable(21),R.packedNormalMap&&u.enable(22),R.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reversedDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),R.numLightProbeGrids>0&&u.enable(22),R.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function L(T){const R=v[T.type];let O;if(R){const V=tr[R];O=Ry.clone(V.uniforms)}else O=T.uniforms;return O}function B(T,R){let O=x.get(R);return O!==void 0?++O.usedTimes:(O=new aE(s,R,T,o),m.push(O),x.set(R,O)),O}function P(T){if(--T.usedTimes===0){const R=m.indexOf(T);m[R]=m[m.length-1],m.pop(),x.delete(T.cacheKey),T.destroy()}}function z(T){d.remove(T)}function U(){d.dispose()}return{getParameters:E,getProgramCacheKey:A,getUniforms:L,acquireProgram:B,releaseProgram:P,releaseShaderCache:z,programs:m,dispose:U}}function dE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function fE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function j0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function X0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function d(v,y,E,A,_,S){let L=s[e];return L===void 0?(L={id:v.id,object:v,geometry:y,material:E,materialVariant:u(v),groupOrder:A,renderOrder:v.renderOrder,z:_,group:S},s[e]=L):(L.id=v.id,L.object=v,L.geometry=y,L.material=E,L.materialVariant=u(v),L.groupOrder=A,L.renderOrder=v.renderOrder,L.z=_,L.group=S),e++,L}function p(v,y,E,A,_,S,L){L.reversedDepth===!0&&(_=-_);const B=d(v,y,E,A,_,S);E.transmission>0?r.push(B):E.transparent===!0?o.push(B):t.push(B)}function m(v,y,E,A,_,S){const L=d(v,y,E,A,_,S);E.transmission>0?r.unshift(L):E.transparent===!0?o.unshift(L):t.unshift(L)}function x(v,y){t.length>1&&t.sort(v||fE),r.length>1&&r.sort(y||j0),o.length>1&&o.sort(y||j0)}function M(){for(let v=e,y=s.length;v<y;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:p,unshift:m,finish:M,sort:x}}function pE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new X0,s.set(r,[u])):o>=l.length?(u=new X0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function mE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new wt};break;case"SpotLight":t={position:new N,direction:new N,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function gE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let vE=0;function _E(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xE(s){const e=new mE,t=gE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new N);const o=new N,l=new $t,u=new $t;function d(m){let x=0,M=0,v=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let y=0,E=0,A=0,_=0,S=0,L=0,B=0,P=0,z=0,U=0,T=0,R=0,O=0,V=0;m.sort(_E);for(let q=0,ue=m.length;q<ue;q++){const k=m[q],ee=k.color,me=k.intensity,Q=k.distance;let te=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ws?te=k.shadow.map.texture:te=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)x+=ee.r*me,M+=ee.g*me,v+=ee.b*me;else if(k.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(k.sh.coefficients[Z],me);V++}else if(k.isSunLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const $=k.shadow,F=t.get(k);F.shadowIntensity=$.intensity,F.shadowBias=$.bias,F.shadowNormalBias=$.normalBias,F.shadowRadius=$.radius,F.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),r.sunShadow[E]=F,r.sunShadowMap[E]=te;const ie=$.getViewportCount();for(let De=0;De<ie;De++)r.sunShadowMatrix[A+De]=$.getMatrix(De),r.sunShadowCascade[A+De]=$._cascadeData[De];A+=ie,E++}r.sun[y]=Z,y++}else if(k.isDirectionalLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const $=k.shadow,F=t.get(k);F.shadowIntensity=$.intensity,F.shadowBias=$.bias,F.shadowNormalBias=$.normalBias,F.shadowRadius=$.radius,F.shadowMapSize=$.mapSize,r.directionalShadow[_]=F,r.directionalShadowMap[_]=te,r.directionalShadowMatrix[_]=k.shadow.matrix,z++}r.directional[_]=Z,_++}else if(k.isSpotLight){const Z=e.get(k);Z.position.setFromMatrixPosition(k.matrixWorld),Z.color.copy(ee).multiplyScalar(me),Z.distance=Q,Z.coneCos=Math.cos(k.angle),Z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Z.decay=k.decay,r.spot[L]=Z;const $=k.shadow;if(k.map&&(r.spotLightMap[R]=k.map,R++,$.updateMatrices(k),k.castShadow&&O++),r.spotLightMatrix[L]=$.matrix,k.castShadow){const F=t.get(k);F.shadowIntensity=$.intensity,F.shadowBias=$.bias,F.shadowNormalBias=$.normalBias,F.shadowRadius=$.radius,F.shadowMapSize=$.mapSize,r.spotShadow[L]=F,r.spotShadowMap[L]=te,T++}L++}else if(k.isRectAreaLight){const Z=e.get(k);Z.color.copy(ee).multiplyScalar(me),Z.halfWidth.set(k.width*.5,0,0),Z.halfHeight.set(0,k.height*.5,0),r.rectArea[B]=Z,B++}else if(k.isPointLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),Z.distance=k.distance,Z.decay=k.decay,k.castShadow){const $=k.shadow,F=t.get(k);F.shadowIntensity=$.intensity,F.shadowBias=$.bias,F.shadowNormalBias=$.normalBias,F.shadowRadius=$.radius,F.shadowMapSize=$.mapSize,F.shadowCameraNear=$.camera.near,F.shadowCameraFar=$.camera.far,r.pointShadow[S]=F,r.pointShadowMap[S]=te,r.pointShadowMatrix[S]=k.shadow.matrix,U++}r.point[S]=Z,S++}else if(k.isHemisphereLight){const Z=e.get(k);Z.skyColor.copy(k.color).multiplyScalar(me),Z.groundColor.copy(k.groundColor).multiplyScalar(me),r.hemi[P]=Z,P++}}B>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=M,r.ambient[2]=v;const K=r.hash;(K.sunLength!==y||K.directionalLength!==_||K.pointLength!==S||K.spotLength!==L||K.rectAreaLength!==B||K.hemiLength!==P||K.numSunShadows!==E||K.numDirectionalShadows!==z||K.numPointShadows!==U||K.numSpotShadows!==T||K.numSpotMaps!==R||K.numLightProbes!==V)&&(r.sun.length=y,r.directional.length=_,r.spot.length=L,r.rectArea.length=B,r.point.length=S,r.hemi.length=P,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.directionalShadowMatrix.length=z,r.pointShadow.length=U,r.pointShadowMap.length=U,r.pointShadowMatrix.length=U,r.spotShadow.length=T,r.spotShadowMap.length=T,r.spotLightMatrix.length=T+R-O,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=V,K.sunLength=y,K.directionalLength=_,K.pointLength=S,K.spotLength=L,K.rectAreaLength=B,K.hemiLength=P,K.numSunShadows=E,K.numDirectionalShadows=z,K.numPointShadows=U,K.numSpotShadows=T,K.numSpotMaps=R,K.numLightProbes=V,r.version=vE++)}function p(m,x){let M=0,v=0,y=0,E=0,A=0,_=0;const S=x.matrixWorldInverse;for(let L=0,B=m.length;L<B;L++){const P=m[L];if(P.isSunLight){const z=r.sun[M];z.direction.setFromMatrixPosition(P.matrixWorld),z.direction.transformDirection(S),M++}else if(P.isDirectionalLight){const z=r.directional[v];z.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(S),v++}else if(P.isSpotLight){const z=r.spot[E];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(S),z.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(S),E++}else if(P.isRectAreaLight){const z=r.rectArea[A];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(S),u.identity(),l.copy(P.matrixWorld),l.premultiply(S),u.extractRotation(l),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),z.halfWidth.applyMatrix4(u),z.halfHeight.applyMatrix4(u),A++}else if(P.isPointLight){const z=r.point[y];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(S),y++}else if(P.isHemisphereLight){const z=r.hemi[_];z.direction.setFromMatrixPosition(P.matrixWorld),z.direction.transformDirection(S),_++}}}return{setup:d,setupView:p,state:r}}function K0(s){const e=new xE(s),t=[],r=[],o=[];function l(M){x.camera=M,t.length=0,r.length=0,o.length=0}function u(M){M.isLightProbeGrid?o.push(M):t.push(M)}function d(M){r.push(M)}function p(){e.setup(t),o.sort((M,v)=>M.priority-v.priority||M.id-v.id)}function m(M){e.setupView(t,M)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:d}}function yE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new K0(s),e.set(o,[d])):l>=u.length?(d=new K0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const SE=`void main() {
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
}`,TE=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],EE=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],q0=new $t,po=new N,Xh=new N;function wE(s,e,t){let r=new wo;const o=new je,l=new je,u=new cn,d=new Iy,p=new Uy,m={},x=t.maxTextureSize,M={[Es]:ui,[ui]:Es,[Gi]:Gi},v=new Cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:SE,fragmentShader:ME}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new qn;E.setAttribute("position",new ts(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Lt(E,v),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let S=this.type;this.render=function(U,T,R){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||U.length===0)return;this.type===ng&&(vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ac);const O=s.getRenderTarget(),V=s.getActiveCubeFace(),K=s.getActiveMipmapLevel(),q=s.state;q.setBlending(ya),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ue=S!==this.type;ue&&T.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(ee=>ee.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,ee=U.length;k<ee;k++){const me=U[k],Q=me.shadow;if(Q===void 0){vt("WebGLShadowMap:",me,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const te=Q.getFrameExtents();o.multiply(te),l.copy(Q.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/te.x),o.x=l.x*te.x,Q.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/te.y),o.y=l.y*te.y,Q.mapSize.y=l.y));const Z=s.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=Z,Q.map===null||ue===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===mo){if(me.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new rr(o.x,o.y,{format:ws,type:ar,minFilter:ei,magFilter:ei,generateMipmaps:!1}),Q.map.texture.name=me.name+".shadowMap",Q.map.depthTexture=new Ea(o.x,o.y,nr),Q.map.depthTexture.name=me.name+".shadowMapDepth",Q.map.depthTexture.format=ns,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=kn,Q.map.depthTexture.magFilter=kn}else me.isPointLight?(Q.map=new sf(o.x),Q.map.depthTexture=new Lg(o.x,sr)):(Q.map=new rr(o.x,o.y),Q.map.depthTexture=new Ea(o.x,o.y,sr)),Q.map.depthTexture.name=me.name+".shadowMap",Q.map.depthTexture.format=ns,this.type===ac?(Q.map.depthTexture.compareFunction=Z?Sg:yg,Q.map.depthTexture.minFilter=ei,Q.map.depthTexture.magFilter=ei):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=kn,Q.map.depthTexture.magFilter=kn);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==o.x||Q.map.height!==o.y)&&Q.map.setSize(o.x,o.y);const $=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();me.isPointLight!==!0&&Q.updateMatrices(me,R);const F=(Q.camera.layers.mask&4294967294)!==0?Q.camera.layers:R.layers;for(let ie=0;ie<$;ie++){const De=Q.getCamera(ie);if(me.isPointLight){const re=Q.camera,Me=Q.matrix,Ee=me.distance||re.far;Ee!==re.far&&(re.far=Ee,re.updateProjectionMatrix()),po.setFromMatrixPosition(me.matrixWorld),re.position.copy(po),Xh.copy(re.position),Xh.add(TE[ie]),re.up.copy(EE[ie]),re.lookAt(Xh),re.updateMatrixWorld(),Me.makeTranslation(-po.x,-po.y,-po.z),q0.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(q0,re.coordinateSystem,re.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)s.setRenderTarget(Q.map,ie),s.clear();else{ie===0&&(s.setRenderTarget(Q.map),s.clear());const re=Q.getViewport(ie);u.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),q.viewport(u)}r=Q.getFrustum(ie),P(T,R,De,me,F,this.type)}Q.isPointLightShadow!==!0&&this.type===mo&&L(Q,R),Q.needsUpdate=!1}S=this.type,_.needsUpdate=!1,s.setRenderTarget(O,V,K)};function L(U,T){const R=e.update(A);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null?U.mapPass=new rr(o.x,o.y,{format:ws,type:ar}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value.set(U.map.width,U.map.height),v.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(T,null,R,v,A,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value.set(U.map.width,U.map.height),y.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(T,null,R,y,A,null)}function B(U,T,R,O){let V=null;const K=R.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(K!==void 0)V=K;else if(V=R.isPointLight===!0?p:d,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const q=V.uuid,ue=T.uuid;let k=m[q];k===void 0&&(k={},m[q]=k);let ee=k[ue];ee===void 0&&(ee=V.clone(),k[ue]=ee,T.addEventListener("dispose",z)),V=ee}if(V.visible=T.visible,V.wireframe=T.wireframe,O===mo?V.side=T.shadowSide!==null?T.shadowSide:T.side:V.side=T.shadowSide!==null?T.shadowSide:M[T.side],V.alphaMap=T.alphaMap,V.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,V.map=T.map,V.clipShadows=T.clipShadows,V.clippingPlanes=T.clippingPlanes,V.clipIntersection=T.clipIntersection,V.displacementMap=T.displacementMap,V.displacementScale=T.displacementScale,V.displacementBias=T.displacementBias,V.wireframeLinewidth=T.wireframeLinewidth,V.linewidth=T.linewidth,R.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const q=s.properties.get(V);q.light=R}return V}function P(U,T,R,O,V,K){if(U.visible===!1)return;if(U.layers.test(V)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&K===mo)&&(!U.frustumCulled||U.intersectsFrustum(r))){U.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,U.matrixWorld);const k=e.update(U),ee=U.material;if(Array.isArray(ee)){const me=k.groups;for(let Q=0,te=me.length;Q<te;Q++){const Z=me[Q],$=ee[Z.materialIndex];if($&&$.visible){const F=B(U,$,O,K);U.onBeforeShadow(s,U,T,R,k,F,Z),s.renderBufferDirect(R,null,k,F,U,Z),U.onAfterShadow(s,U,T,R,k,F,Z)}}}else if(ee.visible){const me=B(U,ee,O,K);U.onBeforeShadow(s,U,T,R,k,me,null),s.renderBufferDirect(R,null,k,me,U,null),U.onAfterShadow(s,U,T,R,k,me,null)}}const ue=U.children;for(let k=0,ee=ue.length;k<ee;k++)P(ue[k],T,R,O,V,K)}function z(U){U.target.removeEventListener("dispose",z);for(const R in m){const O=m[R],V=U.target.uuid;V in O&&(O[V].dispose(),delete O[V])}}}function CE(s,e){function t(){let D=!1;const ce=new cn;let X=null;const pe=new cn(0,0,0,0);return{setMask:function(_e){X!==_e&&!D&&(s.colorMask(_e,_e,_e,_e),X=_e)},setLocked:function(_e){D=_e},setClear:function(_e,ae,be,Ve,ye){ye===!0&&(_e*=Ve,ae*=Ve,be*=Ve),ce.set(_e,ae,be,Ve),pe.equals(ce)===!1&&(s.clearColor(_e,ae,be,Ve),pe.copy(ce))},reset:function(){D=!1,X=null,pe.set(-1,0,0,0)}}}function r(){let D=!1,ce=!1,X=null,pe=null,_e=null;return{setReversed:function(ae){if(ce!==ae){const be=e.get("EXT_clip_control");ae?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ce=ae;const Ve=_e;_e=null,this.setClear(Ve)}},getReversed:function(){return ce},setTest:function(ae){ae?Te(s.DEPTH_TEST):Oe(s.DEPTH_TEST)},setMask:function(ae){X!==ae&&!D&&(s.depthMask(ae),X=ae)},setFunc:function(ae){if(ce&&(ae=Bx[ae]),pe!==ae){switch(ae){case Yh:s.depthFunc(s.NEVER);break;case $h:s.depthFunc(s.ALWAYS);break;case Zh:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case Qh:s.depthFunc(s.EQUAL);break;case Jh:s.depthFunc(s.GEQUAL);break;case ed:s.depthFunc(s.GREATER);break;case td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=ae}},setLocked:function(ae){D=ae},setClear:function(ae){_e!==ae&&(_e=ae,ce&&(ae=1-ae),s.clearDepth(ae))},reset:function(){D=!1,X=null,pe=null,_e=null,ce=!1}}}function o(){let D=!1,ce=null,X=null,pe=null,_e=null,ae=null,be=null,Ve=null,ye=null;return{setTest:function(ze){D||(ze?Te(s.STENCIL_TEST):Oe(s.STENCIL_TEST))},setMask:function(ze){ce!==ze&&!D&&(s.stencilMask(ze),ce=ze)},setFunc:function(ze,Xe,Re){(X!==ze||pe!==Xe||_e!==Re)&&(s.stencilFunc(ze,Xe,Re),X=ze,pe=Xe,_e=Re)},setOp:function(ze,Xe,Re){(ae!==ze||be!==Xe||Ve!==Re)&&(s.stencilOp(ze,Xe,Re),ae=ze,be=Xe,Ve=Re)},setLocked:function(ze){D=ze},setClear:function(ze){ye!==ze&&(s.clearStencil(ze),ye=ze)},reset:function(){D=!1,ce=null,X=null,pe=null,_e=null,ae=null,be=null,Ve=null,ye=null}}}const l=new t,u=new r,d=new o;let p={};const m=new WeakMap;let x={},M={},v={},y=new WeakMap,E=[],A=null,_=!1,S=null,L=null,B=null,P=null,z=null,U=null,T=null,R=new wt(0,0,0),O=0,V=!1,K=null,q=null,ue=null,k=null,ee=null;const me=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,te=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Q=te>=1):Z.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Q=te>=2);let $=null,F={};const ie=s.getParameter(s.SCISSOR_BOX),De=s.getParameter(s.VIEWPORT),re=new cn().fromArray(ie),Me=new cn().fromArray(De);function Ee(D,ce,X,pe){const _e=new Uint8Array(4),ae=s.createTexture();s.bindTexture(D,ae),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let be=0;be<X;be++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(ce+be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return ae}const Be={};Be[s.TEXTURE_2D]=Ee(s.TEXTURE_2D,s.TEXTURE_2D,1),Be[s.TEXTURE_CUBE_MAP]=Ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[s.TEXTURE_2D_ARRAY]=Ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Be[s.TEXTURE_3D]=Ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Te(s.DEPTH_TEST),u.setFunc(So),Jt(!1),Ut(Bm),Te(s.CULL_FACE),Ot(ya);function Te(D){x[D]!==!0&&(s.enable(D),x[D]=!0)}function Oe(D){x[D]!==!1&&(s.disable(D),x[D]=!1)}function ot(D,ce){return v[D]!==ce?(s.bindFramebuffer(D,ce),v[D]=ce,D===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=ce),D===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function nt(D,ce){let X=E,pe=!1;if(D){X=y.get(ce),X===void 0&&(X=[],y.set(ce,X));const _e=D.textures;if(X.length!==_e.length||X[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,be=_e.length;ae<be;ae++)X[ae]=s.COLOR_ATTACHMENT0+ae;X.length=_e.length,pe=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,pe=!0);pe&&s.drawBuffers(X)}function ut(D){return A!==D?(s.useProgram(D),A=D,!0):!1}const Tt={[ma]:s.FUNC_ADD,[lx]:s.FUNC_SUBTRACT,[cx]:s.FUNC_REVERSE_SUBTRACT};Tt[ux]=s.MIN,Tt[hx]=s.MAX;const yt={[dx]:s.ZERO,[fx]:s.ONE,[px]:s.SRC_COLOR,[ig]:s.SRC_ALPHA,[yx]:s.SRC_ALPHA_SATURATE,[_x]:s.DST_COLOR,[gx]:s.DST_ALPHA,[mx]:s.ONE_MINUS_SRC_COLOR,[rg]:s.ONE_MINUS_SRC_ALPHA,[xx]:s.ONE_MINUS_DST_COLOR,[vx]:s.ONE_MINUS_DST_ALPHA,[Sx]:s.CONSTANT_COLOR,[Mx]:s.ONE_MINUS_CONSTANT_COLOR,[Tx]:s.CONSTANT_ALPHA,[Ex]:s.ONE_MINUS_CONSTANT_ALPHA};function Ot(D,ce,X,pe,_e,ae,be,Ve,ye,ze){if(D===ya){_===!0&&(Oe(s.BLEND),_=!1);return}if(_===!1&&(Te(s.BLEND),_=!0),D!==ox){if(D!==S||ze!==V){if((L!==ma||z!==ma)&&(s.blendEquation(s.FUNC_ADD),L=ma,z=ma),ze)switch(D){case vo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zm:s.blendFunc(s.ONE,s.ONE);break;case Hm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:kt("WebGLState: Invalid blending: ",D);break}else switch(D){case vo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hm:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vm:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",D);break}B=null,P=null,U=null,T=null,R.set(0,0,0),O=0,S=D,V=ze}return}_e=_e||ce,ae=ae||X,be=be||pe,(ce!==L||_e!==z)&&(s.blendEquationSeparate(Tt[ce],Tt[_e]),L=ce,z=_e),(X!==B||pe!==P||ae!==U||be!==T)&&(s.blendFuncSeparate(yt[X],yt[pe],yt[ae],yt[be]),B=X,P=pe,U=ae,T=be),(Ve.equals(R)===!1||ye!==O)&&(s.blendColor(Ve.r,Ve.g,Ve.b,ye),R.copy(Ve),O=ye),S=D,V=!1}function Qt(D,ce){D.side===Gi?Oe(s.CULL_FACE):Te(s.CULL_FACE);let X=D.side===ui;ce&&(X=!X),Jt(X),D.blending===vo&&D.transparent===!1?Ot(ya):Ot(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),u.setFunc(D.depthFunc),u.setTest(D.depthTest),u.setMask(D.depthWrite),l.setMask(D.colorWrite);const pe=D.stencilWrite;d.setTest(pe),pe&&(d.setMask(D.stencilWriteMask),d.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),d.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),he(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Te(s.SAMPLE_ALPHA_TO_COVERAGE):Oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(D){K!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),K=D)}function Ut(D){D!==sx?(Te(s.CULL_FACE),D!==q&&(D===Bm?s.cullFace(s.BACK):D===ax?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Oe(s.CULL_FACE),q=D}function Rt(D){D!==ue&&(Q&&s.lineWidth(D),ue=D)}function he(D,ce,X){D?(Te(s.POLYGON_OFFSET_FILL),(k!==ce||ee!==X)&&(k=ce,ee=X,u.getReversed()&&(ce=-ce,X=-X),s.polygonOffset(ce,X))):Oe(s.POLYGON_OFFSET_FILL)}function ht(D){D?Te(s.SCISSOR_TEST):Oe(s.SCISSOR_TEST)}function lt(D){D===void 0&&(D=s.TEXTURE0+me-1),$!==D&&(s.activeTexture(D),$=D)}function pt(D,ce,X){X===void 0&&($===null?X=s.TEXTURE0+me-1:X=$);let pe=F[X];pe===void 0&&(pe={type:void 0,texture:void 0},F[X]=pe),(pe.type!==D||pe.texture!==ce)&&($!==X&&(s.activeTexture(X),$=X),s.bindTexture(D,ce||Be[D]),pe.type=D,pe.texture=ce)}function G(){const D=F[$];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function St(){try{s.compressedTexImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function mt(){try{s.compressedTexImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function qe(){try{s.texSubImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function Ce(){try{s.texSubImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function Xt(){try{s.compressedTexSubImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function st(){try{s.compressedTexSubImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function We(){try{s.texStorage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function I(){try{s.texStorage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function C(){try{s.texImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function J(){try{s.texImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function Ae(D){return M[D]!==void 0?M[D]:s.getParameter(D)}function Se(D,ce){M[D]!==ce&&(s.pixelStorei(D,ce),M[D]=ce)}function Le(D){re.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function Ue(D){Me.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Me.copy(D))}function ve(D,ce){let X=m.get(ce);X===void 0&&(X=new WeakMap,m.set(ce,X));let pe=X.get(D);pe===void 0&&(pe=s.getUniformBlockIndex(ce,D.name),s.uniformBlockBinding(ce,pe,pe),X.set(D,pe))}function xe(D,ce,X){const _e=m.get(ce).get(D);p[_e]!==X&&(s.bindBufferBase(s.UNIFORM_BUFFER,_e,X),p[_e]=X)}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},M={},$=null,F={},v={},p={},y=new WeakMap,E=[],A=null,_=!1,S=null,L=null,B=null,P=null,z=null,U=null,T=null,R=new wt(0,0,0),O=0,V=!1,K=null,q=null,ue=null,k=null,ee=null,re.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:Te,disable:Oe,bindFramebuffer:ot,drawBuffers:nt,useProgram:ut,setBlending:Ot,setMaterial:Qt,setFlipSided:Jt,setCullFace:Ut,setLineWidth:Rt,setPolygonOffset:he,setScissorTest:ht,activeTexture:lt,bindTexture:pt,unbindTexture:G,compressedTexImage2D:St,compressedTexImage3D:mt,texImage2D:C,texImage3D:J,pixelStorei:Se,getParameter:Ae,updateUBOMapping:ve,uniformBlockBinding:xe,texStorage2D:We,texStorage3D:I,texSubImage2D:qe,texSubImage3D:Ce,compressedTexSubImage2D:Xt,compressedTexSubImage3D:st,scissor:Le,viewport:Ue,reset:se}}function AE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new je,x=new WeakMap,M=new Set;let v;const y=new WeakMap,E=new Set,A=new FinalizationRegistry(I=>E.delete(I));let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,C){return _?new OffscreenCanvas(I,C):_c("canvas")}function L(I,C,J){let Ae=1;const Se=We(I);if((Se.width>J||Se.height>J)&&(Ae=J/Math.max(Se.width,Se.height)),Ae<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Le=Math.floor(Ae*Se.width),Ue=Math.floor(Ae*Se.height);v===void 0&&(v=S(Le,Ue));const ve=C?S(Le,Ue):v;return ve.width=Le,ve.height=Ue,ve.getContext("2d").drawImage(I,0,0,Le,Ue),vt("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+Le+"x"+Ue+")."),ve}else return"data"in I&&vt("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),I;return I}function B(I){return I.generateMipmaps}function P(I){s.generateMipmap(I)}function z(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(I,C,J,Ae,Se,Le=!1){if(I!==null){if(s[I]!==void 0)return s[I];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ue;Ae&&(Ue=e.get("EXT_texture_norm16"),Ue||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=C;if(C===s.RED&&(J===s.FLOAT&&(ve=s.R32F),J===s.HALF_FLOAT&&(ve=s.R16F),J===s.UNSIGNED_BYTE&&(ve=s.R8),J===s.UNSIGNED_SHORT&&Ue&&(ve=Ue.R16_EXT),J===s.SHORT&&Ue&&(ve=Ue.R16_SNORM_EXT)),C===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ve=s.R8UI),J===s.UNSIGNED_SHORT&&(ve=s.R16UI),J===s.UNSIGNED_INT&&(ve=s.R32UI),J===s.BYTE&&(ve=s.R8I),J===s.SHORT&&(ve=s.R16I),J===s.INT&&(ve=s.R32I)),C===s.RG&&(J===s.FLOAT&&(ve=s.RG32F),J===s.HALF_FLOAT&&(ve=s.RG16F),J===s.UNSIGNED_BYTE&&(ve=s.RG8),J===s.UNSIGNED_SHORT&&Ue&&(ve=Ue.RG16_EXT),J===s.SHORT&&Ue&&(ve=Ue.RG16_SNORM_EXT)),C===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ve=s.RG8UI),J===s.UNSIGNED_SHORT&&(ve=s.RG16UI),J===s.UNSIGNED_INT&&(ve=s.RG32UI),J===s.BYTE&&(ve=s.RG8I),J===s.SHORT&&(ve=s.RG16I),J===s.INT&&(ve=s.RG32I)),C===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),J===s.UNSIGNED_INT&&(ve=s.RGB32UI),J===s.BYTE&&(ve=s.RGB8I),J===s.SHORT&&(ve=s.RGB16I),J===s.INT&&(ve=s.RGB32I)),C===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),J===s.UNSIGNED_INT&&(ve=s.RGBA32UI),J===s.BYTE&&(ve=s.RGBA8I),J===s.SHORT&&(ve=s.RGBA16I),J===s.INT&&(ve=s.RGBA32I)),C===s.RGB&&(J===s.UNSIGNED_SHORT&&Ue&&(ve=Ue.RGB16_EXT),J===s.SHORT&&Ue&&(ve=Ue.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(ve=s.R11F_G11F_B10F)),C===s.RGBA){const xe=Le?vc:It.getTransfer(Se);J===s.FLOAT&&(ve=s.RGBA32F),J===s.HALF_FLOAT&&(ve=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ve=xe===Wt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&Ue&&(ve=Ue.RGBA16_EXT),J===s.SHORT&&Ue&&(ve=Ue.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function T(I,C){let J;return I?C===null||C===sr||C===Ta?J=s.DEPTH24_STENCIL8:C===nr?J=s.DEPTH32F_STENCIL8:C===To&&(J=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===sr||C===Ta?J=s.DEPTH_COMPONENT24:C===nr?J=s.DEPTH_COMPONENT32F:C===To&&(J=s.DEPTH_COMPONENT16),J}function R(I,C){return B(I)===!0||I.isFramebufferTexture&&I.minFilter!==kn&&I.minFilter!==ei?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function O(I){const C=new WeakRef(I);r.get(I).__ref=C,E.add(C),A.register(I,C,C)}function V(I){const C=r.get(I).__ref;C!==void 0&&(E.delete(C),A.unregister(C))}function K(I){ue(I.target)}function q(I){k(I.target)}function ue(I){I.removeEventListener("dispose",K),V(I),me(I),I.isVideoTexture&&x.delete(I),I.isHTMLTexture&&M.delete(I)}function k(I){I.removeEventListener("dispose",q),V(I),te(I)}function ee(){for(const I of E){const C=I.deref();C!==void 0&&(C.isRenderTarget===!0?k(C):ue(C))}E.clear(),M.clear()}function me(I){const C=r.get(I);if(C.__webglInit===void 0)return;const J=I.source,Ae=y.get(J);if(Ae){const Se=Ae[C.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&Q(I),Object.keys(Ae).length===0&&y.delete(J)}r.remove(I)}function Q(I){const C=r.get(I);s.deleteTexture(C.__webglTexture);const J=I.source,Ae=y.get(J);delete Ae[C.__cacheKey],u.memory.textures--}function te(I){const C=r.get(I);C.__depthDisposeCallback&&C.__depthDisposeCallback();const J=I.depthTexture;if(J&&J.renderTarget===I&&ue(J),I.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(C.__webglFramebuffer[Se]))for(let Le=0;Le<C.__webglFramebuffer[Se].length;Le++)s.deleteFramebuffer(C.__webglFramebuffer[Se][Le]);else s.deleteFramebuffer(C.__webglFramebuffer[Se]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[Se])}else{if(Array.isArray(C.__webglFramebuffer))for(let Se=0;Se<C.__webglFramebuffer.length;Se++)s.deleteFramebuffer(C.__webglFramebuffer[Se]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Se=0;Se<C.__webglColorRenderbuffer.length;Se++)C.__webglColorRenderbuffer[Se]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[Se]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Ae=I.textures;for(let Se=0,Le=Ae.length;Se<Le;Se++){const Ue=r.get(Ae[Se]);Ue.__webglTexture&&(s.deleteTexture(Ue.__webglTexture),u.memory.textures--),r.remove(Ae[Se])}r.remove(I)}let Z=0;function $(){Z=0}function F(){return Z}function ie(I){Z=I}function De(){const I=Z;return I>=o.maxTextures&&vt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),Z+=1,I}function re(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.mipmapsAutoUpdate),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function Me(I,C){const J=r.get(I);if(I.isVideoTexture&&Xt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&J.__version!==I.version){const Ae=I.image;if(Ae===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(Ae.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(J,I,C);return}}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+C)}function Ee(I,C){const J=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){Qt(J,I,C);return}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+C)}function Be(I,C){const J=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){Qt(J,I,C);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+C)}function Te(I,C){const J=r.get(I);if(I.version>0&&J.__version!==I.version){Jt(J,I,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+C)}const Oe={[nd]:s.REPEAT,[Mr]:s.CLAMP_TO_EDGE,[id]:s.MIRRORED_REPEAT},ot={[kn]:s.NEAREST,[Ax]:s.NEAREST_MIPMAP_NEAREST,[Nl]:s.NEAREST_MIPMAP_LINEAR,[ei]:s.LINEAR,[mh]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},nt={[Px]:s.NEVER,[Mg]:s.ALWAYS,[Dx]:s.LESS,[yg]:s.LEQUAL,[Lx]:s.EQUAL,[Sg]:s.GEQUAL,[Ix]:s.GREATER,[Ux]:s.NOTEQUAL};function ut(I,C){if(C.type===nr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===ei||C.magFilter===mh||C.magFilter===Nl||C.magFilter===Jr||C.minFilter===ei||C.minFilter===mh||C.minFilter===Nl||C.minFilter===Jr)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Oe[C.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Oe[C.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Oe[C.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ot[C.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ot[C.minFilter]),C.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,nt[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===kn||C.minFilter!==Nl&&C.minFilter!==Jr||C.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function Tt(I,C){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",K),O(C));const Ae=C.source;let Se=y.get(Ae);Se===void 0&&(Se={},y.set(Ae,Se));const Le=re(C);if(Le!==I.__cacheKey){Se[Le]===void 0&&(Se[Le]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),Se[Le].usedTimes++;const Ue=Se[I.__cacheKey];Ue!==void 0&&(Se[I.__cacheKey].usedTimes--,Ue.usedTimes===0&&Q(C)),I.__cacheKey=Le,I.__webglTexture=Se[Le].texture}return J}function yt(I,C,J){return Math.floor(Math.floor(I/J)/C)}function Ot(I,C,J,Ae){const Le=I.updateRanges;if(Le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,C.width,C.height,J,Ae,C.data);else{Le.sort((D,ce)=>D.start-ce.start);let Ue=0;for(let D=1;D<Le.length;D++){const ce=Le[Ue],X=Le[D],pe=ce.start+ce.count,_e=yt(X.start,C.width,4),ae=yt(ce.start,C.width,4);X.start<=pe+1&&_e===ae&&yt(X.start+X.count-1,C.width,4)===_e?ce.count=Math.max(ce.count,X.start+X.count-ce.start):(++Ue,Le[Ue]=X)}Le.length=Ue+1;const ve=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),se=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,C.width);for(let D=0,ce=Le.length;D<ce;D++){const X=Le[D],pe=Math.floor(X.start/4),_e=Math.ceil(X.count/4),ae=pe%C.width,be=Math.floor(pe/C.width),Ve=_e,ye=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(s.UNPACK_SKIP_ROWS,be),t.texSubImage2D(s.TEXTURE_2D,0,ae,be,Ve,ye,J,Ae,C.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ve),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,se)}}function Qt(I,C,J){let Ae=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Ae=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Ae=s.TEXTURE_3D);const Se=Tt(I,C),Le=C.source;t.bindTexture(Ae,I.__webglTexture,s.TEXTURE0+J);const Ue=r.get(Le);if(Le.version!==Ue.__version||Se===!0){if(t.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){const ye=It.getPrimaries(It.workingColorSpace),ze=C.colorSpace===Qr?null:It.getPrimaries(C.colorSpace),Xe=C.colorSpace===Qr||ye===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}t.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment);let xe=L(C.image,!1,o.maxTextureSize);xe=st(C,xe);const se=l.convert(C.format,C.colorSpace),D=l.convert(C.type);let ce=U(C.internalFormat,se,D,C.normalized,C.colorSpace,C.isVideoTexture);ut(Ae,C);let X;const pe=C.mipmaps,_e=C.isVideoTexture!==!0,ae=Ue.__version===void 0||Se===!0,be=Le.dataReady,Ve=R(C,xe);if(C.isDepthTexture)ce=T(C.format===es,C.type),ae&&(_e?t.texStorage2D(s.TEXTURE_2D,1,ce,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,ce,xe.width,xe.height,0,se,D,null));else if(C.isDataTexture)if(pe.length>0){_e&&ae&&t.texStorage2D(s.TEXTURE_2D,Ve,ce,pe[0].width,pe[0].height);for(let ye=0,ze=pe.length;ye<ze;ye++)X=pe[ye],_e?be&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,X.width,X.height,se,D,X.data):t.texImage2D(s.TEXTURE_2D,ye,ce,X.width,X.height,0,se,D,X.data);C.generateMipmaps=!1}else _e?(ae&&t.texStorage2D(s.TEXTURE_2D,Ve,ce,xe.width,xe.height),be&&Ot(C,xe,se,D)):t.texImage2D(s.TEXTURE_2D,0,ce,xe.width,xe.height,0,se,D,xe.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){_e&&ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,ce,pe[0].width,pe[0].height,xe.depth);for(let ye=0,ze=pe.length;ye<ze;ye++)if(X=pe[ye],C.format!==ir)if(se!==null)if(_e){if(be)if(C.layerUpdates.size>0){const Xe=A0(X.width,X.height,C.format,C.type);for(const Re of C.layerUpdates){const ct=X.data.subarray(Re*Xe/X.data.BYTES_PER_ELEMENT,(Re+1)*Xe/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,Re,X.width,X.height,1,se,ct)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,X.width,X.height,xe.depth,se,X.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,ce,X.width,X.height,xe.depth,0,X.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?be&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,X.width,X.height,xe.depth,se,D,X.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ye,ce,X.width,X.height,xe.depth,0,se,D,X.data);C.layerUpdates.size>0&&C.clearLayerUpdates()}else{_e&&ae&&t.texStorage2D(s.TEXTURE_2D,Ve,ce,pe[0].width,pe[0].height);for(let ye=0,ze=pe.length;ye<ze;ye++)X=pe[ye],C.format!==ir?se!==null?_e?be&&t.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,X.width,X.height,se,X.data):t.compressedTexImage2D(s.TEXTURE_2D,ye,ce,X.width,X.height,0,X.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?be&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,X.width,X.height,se,D,X.data):t.texImage2D(s.TEXTURE_2D,ye,ce,X.width,X.height,0,se,D,X.data)}else if(C.isDataArrayTexture)if(_e){if(ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,ce,xe.width,xe.height,xe.depth),be)if(C.layerUpdates.size>0){const ye=A0(xe.width,xe.height,C.format,C.type);for(const ze of C.layerUpdates){const Xe=xe.data.subarray(ze*ye/xe.data.BYTES_PER_ELEMENT,(ze+1)*ye/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ze,xe.width,xe.height,1,se,D,Xe)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,se,D,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ce,xe.width,xe.height,xe.depth,0,se,D,xe.data);else if(C.isData3DTexture)_e?(ae&&t.texStorage3D(s.TEXTURE_3D,Ve,ce,xe.width,xe.height,xe.depth),be&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,se,D,xe.data)):t.texImage3D(s.TEXTURE_3D,0,ce,xe.width,xe.height,xe.depth,0,se,D,xe.data);else if(C.isFramebufferTexture){if(ae)if(_e)t.texStorage2D(s.TEXTURE_2D,Ve,ce,xe.width,xe.height);else{let ye=xe.width,ze=xe.height;for(let Xe=0;Xe<Ve;Xe++)t.texImage2D(s.TEXTURE_2D,Xe,ce,ye,ze,0,se,D,null),ye>>=1,ze>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in s){const ye=s.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),xe.parentNode!==ye){ye.appendChild(xe),M.add(C),ye.onpaint=ze=>{const Xe=ze.changedElements;for(const Re of M)Xe.includes(Re.image)&&(Re.needsUpdate=!0)},ye.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const Xe=s.RGBA,Re=s.RGBA,ct=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Xe,Re,ct,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(pe.length>0){if(_e&&ae){const ye=We(pe[0]);t.texStorage2D(s.TEXTURE_2D,Ve,ce,ye.width,ye.height)}for(let ye=0,ze=pe.length;ye<ze;ye++)X=pe[ye],_e?be&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,se,D,X):t.texImage2D(s.TEXTURE_2D,ye,ce,se,D,X);C.generateMipmaps=!1}else if(_e){if(ae){const ye=We(xe);t.texStorage2D(s.TEXTURE_2D,Ve,ce,ye.width,ye.height)}be&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se,D,xe)}else t.texImage2D(s.TEXTURE_2D,0,ce,se,D,xe);B(C)&&C.mipmapsAutoUpdate===!0&&P(Ae),Ue.__version=Le.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Jt(I,C,J){if(C.image.length!==6)return;const Ae=Tt(I,C),Se=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+J);const Le=r.get(Se);if(Se.version!==Le.__version||Ae===!0){t.activeTexture(s.TEXTURE0+J);const Ue=It.getPrimaries(It.workingColorSpace),ve=C.colorSpace===Qr?null:It.getPrimaries(C.colorSpace),xe=C.colorSpace===Qr||Ue===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const se=C.isCompressedTexture||C.image[0].isCompressedTexture,D=C.image[0]&&C.image[0].isDataTexture,ce=[];for(let Re=0;Re<6;Re++)!se&&!D?ce[Re]=L(C.image[Re],!0,o.maxCubemapSize):ce[Re]=D?C.image[Re].image:C.image[Re],ce[Re]=st(C,ce[Re]);const X=ce[0],pe=l.convert(C.format,C.colorSpace),_e=l.convert(C.type);let ae=U(C.internalFormat,pe,_e,C.normalized,C.colorSpace);const be=C.isVideoTexture!==!0,Ve=Le.__version===void 0||Ae===!0,ye=Se.dataReady;let ze=R(C,X);ut(s.TEXTURE_CUBE_MAP,C);let Xe;if(C.isDepthTexture){if(ae=T(C.format===es,C.type),Ve)if(be)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ae,X.width,X.height);else for(let Re=0;Re<6;Re++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ae,X.width,X.height,0,pe,_e,null)}else if(se){be&&Ve&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,ae,X.width,X.height);for(let Re=0;Re<6;Re++){Xe=ce[Re].mipmaps;for(let ct=0;ct<Xe.length;ct++){const Ze=Xe[ct];C.format!==ir?pe!==null?be?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ct,0,0,Ze.width,Ze.height,pe,Ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ct,ae,Ze.width,Ze.height,0,Ze.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ct,0,0,Ze.width,Ze.height,pe,_e,Ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ct,ae,Ze.width,Ze.height,0,pe,_e,Ze.data)}}}else{if(Xe=C.mipmaps,be&&Ve){Xe.length>0&&ze++;const Re=We(ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,ae,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(D){be?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ce[Re].width,ce[Re].height,pe,_e,ce[Re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ae,ce[Re].width,ce[Re].height,0,pe,_e,ce[Re].data);for(let ct=0;ct<Xe.length;ct++){const tn=Xe[ct].image[Re].image;be?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ct+1,0,0,tn.width,tn.height,pe,_e,tn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ct+1,ae,tn.width,tn.height,0,pe,_e,tn.data)}}else{be?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,pe,_e,ce[Re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ae,pe,_e,ce[Re]);for(let ct=0;ct<Xe.length;ct++){const Ze=Xe[ct];be?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ct+1,0,0,pe,_e,Ze.image[Re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ct+1,ae,pe,_e,Ze.image[Re])}}}B(C)&&C.mipmapsAutoUpdate===!0&&P(s.TEXTURE_CUBE_MAP),Le.__version=Se.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Ut(I,C,J,Ae,Se,Le){const Ue=l.convert(J.format,J.colorSpace),ve=l.convert(J.type),xe=U(J.internalFormat,Ue,ve,J.normalized,J.colorSpace),se=r.get(C),D=r.get(J);if(D.__renderTarget=C,!se.__hasExternalTextures){const ce=Math.max(1,C.width>>Le),X=Math.max(1,C.height>>Le);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?t.texImage3D(Se,Le,xe,ce,X,C.depth,0,Ue,ve,null):t.texImage2D(Se,Le,xe,ce,X,0,Ue,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Ce(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ae,Se,D.__webglTexture,0,qe(C)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ae,Se,D.__webglTexture,Le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(I,C,J){if(s.bindRenderbuffer(s.RENDERBUFFER,I),C.depthBuffer){const Ae=C.depthTexture,Se=Ae&&Ae.isDepthTexture?Ae.type:null,Le=T(C.stencilBuffer,Se),Ue=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ce(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(C),Le,C.width,C.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(C),Le,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Le,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,I)}else{const Ae=C.textures;for(let Se=0;Se<Ae.length;Se++){const Le=Ae[Se],Ue=l.convert(Le.format,Le.colorSpace),ve=l.convert(Le.type),xe=U(Le.internalFormat,Ue,ve,Le.normalized,Le.colorSpace);Ce(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(C),xe,C.width,C.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(C),xe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,xe,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function he(I,C,J){const Ae=C.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Se=r.get(C.depthTexture);Se.__renderTarget=C;const Le=Ae?C.depthTexture.image[0]:C.depthTexture.image;(!Se.__webglTexture||Le.width!==C.width||Le.height!==C.height)&&(Le.width=C.width,Le.height=C.height,C.depthTexture.needsUpdate=!0),Ae?Te(C.depthTexture,0):Me(C.depthTexture,0);const Ue=Se.__webglTexture,ve=qe(C),xe=Ae?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,se=C.depthTexture.format===es?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(C.depthTexture.format===ns)Ce(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,xe,Ue,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,se,xe,Ue,0);else if(C.depthTexture.format===es)Ce(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,xe,Ue,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,se,xe,Ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(I){const C=r.get(I),J=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const Ae=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Ae){const Se=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Ae.removeEventListener("dispose",Se)};Ae.addEventListener("dispose",Se),C.__depthDisposeCallback=Se}C.__boundDepthTexture=Ae}if(I.depthTexture&&!C.__autoAllocateDepthBuffer)if(J)for(let Ae=0;Ae<6;Ae++)he(C.__webglFramebuffer[Ae],I,Ae);else I.texture.mipmaps.length>0?he(C.__webglFramebuffer[0],I,0):he(C.__webglFramebuffer,I,0);else if(J){C.__webglDepthbuffer=[];for(let Ae=0;Ae<6;Ae++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[Ae]),C.__webglDepthbuffer[Ae]===void 0)C.__webglDepthbuffer[Ae]=s.createRenderbuffer(),Rt(C.__webglDepthbuffer[Ae],I,!1);else{const Se=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=C.__webglDepthbuffer[Ae];s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,Le)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),Rt(C.__webglDepthbuffer,I,!1);else{const Se=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,Le)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(I,C,J){const Ae=r.get(I);C!==void 0&&Ut(Ae.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&ht(I)}function pt(I){const C=I.texture,J=r.get(I),Ae=r.get(C);I.addEventListener("dispose",q),O(I);const Se=I.textures,Le=I.isWebGLCubeRenderTarget===!0,Ue=Se.length>1;if(Ue||(Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture()),Ae.__version=C.version,u.memory.textures++),Le){J.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(C.mipmaps.length>0){J.__webglFramebuffer[ve]=[];for(let xe=0;xe<C.mipmaps.length;xe++)J.__webglFramebuffer[ve][xe]=s.createFramebuffer()}else J.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(C.mipmaps.length>0){J.__webglFramebuffer=[];for(let ve=0;ve<C.mipmaps.length;ve++)J.__webglFramebuffer[ve]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let ve=0,xe=Se.length;ve<xe;ve++){const se=r.get(Se[ve]);se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&Ce(I)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ve=0;ve<Se.length;ve++){const xe=Se[ve];J.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[ve]);const se=l.convert(xe.format,xe.colorSpace),D=l.convert(xe.type),ce=U(xe.internalFormat,se,D,xe.normalized,xe.colorSpace,I.isXRRenderTarget===!0),X=qe(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,X,ce,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,J.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Rt(J.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Le){t.bindTexture(s.TEXTURE_CUBE_MAP,Ae.__webglTexture),ut(s.TEXTURE_CUBE_MAP,C);for(let ve=0;ve<6;ve++)if(C.mipmaps.length>0)for(let xe=0;xe<C.mipmaps.length;xe++)Ut(J.__webglFramebuffer[ve][xe],I,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,xe);else Ut(J.__webglFramebuffer[ve],I,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);B(C)?P(s.TEXTURE_CUBE_MAP):C.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,C.mipmaps.length-1),t.unbindTexture()}else if(Ue){for(let ve=0,xe=Se.length;ve<xe;ve++){const se=Se[ve],D=r.get(se);let ce=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,D.__webglTexture),ut(ce,se),Ut(J.__webglFramebuffer,I,se,s.COLOR_ATTACHMENT0+ve,ce,0),B(se)&&P(ce)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ve=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ae.__webglTexture),ut(ve,C),C.mipmaps.length>0)for(let xe=0;xe<C.mipmaps.length;xe++)Ut(J.__webglFramebuffer[xe],I,C,s.COLOR_ATTACHMENT0,ve,xe);else Ut(J.__webglFramebuffer,I,C,s.COLOR_ATTACHMENT0,ve,0);B(C)?P(ve):C.mipmaps.length>0&&s.texParameteri(ve,s.TEXTURE_MAX_LEVEL,C.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&ht(I)}function G(I){const C=I.textures;for(let J=0,Ae=C.length;J<Ae;J++){const Se=C[J];if(B(Se)&&Se.mipmapsAutoUpdate===!0){const Le=z(I),Ue=r.get(Se).__webglTexture;t.bindTexture(Le,Ue),P(Le),t.unbindTexture()}}}const St=[];function mt(I){if(I.samples>0){if(Ce(I)===!1){const C=I.textures,J=I.width,Ae=I.height;let Se=s.COLOR_BUFFER_BIT;const Le=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(I),ve=C.length>1;if(ve)for(let se=0;se<C.length;se++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let se=0;se<C.length;se++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[se]);const D=r.get(C[se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,D,0)}s.blitFramebuffer(0,0,J,Ae,0,0,J,Ae,Se,s.NEAREST),p===!0&&(St.length=0,St.push(s.COLOR_ATTACHMENT0+se),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&St.push(Le),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let se=0;se<C.length;se++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[se]);const D=r.get(C[se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.TEXTURE_2D,D,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&p){const C=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function qe(I){return Math.min(o.maxSamples,I.samples)}function Ce(I){const C=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Xt(I){const C=u.render.frame;x.get(I)!==C&&(x.set(I,C),I.update())}function st(I,C){const J=I.colorSpace,Ae=I.format,Se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==gc&&J!==Qr&&(It.getTransfer(J)===Wt?(Ae!==ir||Se!==yi)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",J)),C}function We(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=De,this.resetTextureUnits=$,this.getTextureUnits=F,this.setTextureUnits=ie,this.setTexture2D=Me,this.setTexture2DArray=Ee,this.setTexture3D=Be,this.setTextureCube=Te,this.rebindTextures=lt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Ce,this.dispose=ee}function bE(s,e){function t(r,o=Qr){let l;const u=It.getTransfer(o);if(r===yi)return s.UNSIGNED_BYTE;if(r===jd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===mg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===gg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===fg)return s.BYTE;if(r===pg)return s.SHORT;if(r===To)return s.UNSIGNED_SHORT;if(r===Wd)return s.INT;if(r===sr)return s.UNSIGNED_INT;if(r===nr)return s.FLOAT;if(r===ar)return s.HALF_FLOAT;if(r===vg)return s.ALPHA;if(r===_g)return s.RGB;if(r===ir)return s.RGBA;if(r===ns)return s.DEPTH_COMPONENT;if(r===es)return s.DEPTH_STENCIL;if(r===xg)return s.RED;if(r===Kd)return s.RED_INTEGER;if(r===ws)return s.RG;if(r===qd)return s.RG_INTEGER;if(r===Yd)return s.RGBA_INTEGER;if(r===oc||r===lc||r===cc||r===uc)if(u===Wt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===oc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===oc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rd||r===sd||r===ad||r===od)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===rd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ad)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===od)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ld||r===cd||r===ud||r===hd||r===dd||r===pc||r===fd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ld||r===cd)return u===Wt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===ud)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===hd)return l.COMPRESSED_R11_EAC;if(r===dd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===pc)return l.COMPRESSED_RG11_EAC;if(r===fd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===pd||r===md||r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md||r===Td||r===Ed||r===wd||r===Cd||r===Ad)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===pd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===md)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_d)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Md)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Td)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ed)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ad)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bd||r===Nd||r===Rd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===bd)return u===Wt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pd||r===Dd||r===mc||r===Ld)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Pd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Dd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ld)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ta?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const NE=`
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

}`;class PE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Ig(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Cs({vertexShader:NE,fragmentShader:RE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Hi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DE extends ss{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,m=null,x=null,M=null,v=null,y=null,E=null;const A=typeof XRWebGLBinding<"u",_=new PE,S={},L=t.getContextAttributes();let B=null,P=null;const z=[],U=[],T=new je;let R=null,O=null;const V=new Vi;V.viewport=new cn;const K=new Vi;K.viewport=new cn;const q=[V,K],ue=new Hy;let k=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let Me=z[re];return Me===void 0&&(Me=new Th,z[re]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(re){let Me=z[re];return Me===void 0&&(Me=new Th,z[re]=Me),Me.getGripSpace()},this.getHand=function(re){let Me=z[re];return Me===void 0&&(Me=new Th,z[re]=Me),Me.getHandSpace()};function me(re){const Me=U.indexOf(re.inputSource);if(Me===-1)return;const Ee=z[Me];Ee!==void 0&&(Ee.update(re.inputSource,re.frame,m||u),Ee.dispatchEvent({type:re.type,data:re.inputSource}))}function Q(){o.removeEventListener("select",me),o.removeEventListener("selectstart",me),o.removeEventListener("selectend",me),o.removeEventListener("squeeze",me),o.removeEventListener("squeezestart",me),o.removeEventListener("squeezeend",me),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",te);for(let re=0;re<z.length;re++){const Me=U[re];Me!==null&&(U[re]=null,z[re].disconnect(Me))}k=null,ee=null,_.reset();for(const re in S)delete S[re];if(e.setRenderTarget(B),y=null,v=null,M=null,o=null,P=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),O!==null){const re=O.camera;re.fov=O.fov,re.zoom=O.zoom,re.updateProjectionMatrix(),O=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return M===null&&A&&(M=new XRWebGLBinding(o,t)),M},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(B=e.getRenderTarget(),o.addEventListener("select",me),o.addEventListener("selectstart",me),o.addEventListener("selectend",me),o.addEventListener("squeeze",me),o.addEventListener("squeezestart",me),o.addEventListener("squeezeend",me),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",te),L.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Be=null,Te=null;L.depth&&(Te=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=L.stencil?es:ns,Be=L.stencil?Ta:sr);const Oe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:l};M=this.getBinding(),v=M.createProjectionLayer(Oe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new rr(v.textureWidth,v.textureHeight,{format:ir,type:yi,depthTexture:new Ea(v.textureWidth,v.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,Ee),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new rr(y.framebufferWidth,y.framebufferHeight,{format:ir,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function te(re){for(let Me=0;Me<re.removed.length;Me++){const Ee=re.removed[Me],Be=U.indexOf(Ee);Be>=0&&(U[Be]=null,z[Be].disconnect(Ee))}for(let Me=0;Me<re.added.length;Me++){const Ee=re.added[Me];let Be=U.indexOf(Ee);if(Be===-1){for(let Oe=0;Oe<z.length;Oe++)if(Oe>=U.length){U.push(Ee),Be=Oe;break}else if(U[Oe]===null){U[Oe]=Ee,Be=Oe;break}if(Be===-1)break}const Te=z[Be];Te&&Te.connect(Ee)}}function Z(re,Me){Me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(Me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let Me=re.near,Ee=re.far;_.texture!==null&&(_.depthNear>0&&(Me=_.depthNear),_.depthFar>0&&(Ee=_.depthFar)),ue.near=K.near=V.near=Me,ue.far=K.far=V.far=Ee,(k!==ue.near||ee!==ue.far)&&(o.updateRenderState({depthNear:ue.near,depthFar:ue.far}),k=ue.near,ee=ue.far),ue.layers.mask=re.layers.mask|6,V.layers.mask=ue.layers.mask&-5,K.layers.mask=ue.layers.mask&-3;const Be=re.parent,Te=ue.cameras;Z(ue,Be);for(let Oe=0;Oe<Te.length;Oe++)Z(Te[Oe],Be);ue.projectionMatrix.copy(V.projectionMatrix),ue.projectionMatrixInverse.copy(V.projectionMatrixInverse),O===null&&re.isPerspectiveCamera&&(O={camera:re,fov:re.fov,zoom:re.zoom}),$(re,ue,Be)};function $(re,Me,Ee){Ee===null?re.matrix.copy(Me.matrixWorld):(re.matrix.copy(Ee.matrixWorld),re.matrix.invert(),re.matrix.multiply(Me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(Me.projectionMatrix),re.projectionMatrixInverse.copy(Me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ud*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return ue},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(re){p=re,v!==null&&(v.fixedFoveation=re),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(ue)},this.getCameraTexture=function(re){return S[re]};let F=null;function ie(re,Me){if(x=Me.getViewerPose(m||u),E=Me,x!==null){const Ee=x.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Be=!1;Ee.length!==ue.cameras.length&&(ue.cameras.length=0,Be=!0);for(let nt=0;nt<Ee.length;nt++){const ut=Ee[nt];let Tt=null;if(y!==null)Tt=y.getViewport(ut);else{const Ot=M.getViewSubImage(v,ut);Tt=Ot.viewport,nt===0&&(e.setRenderTargetTextures(P,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(P))}let yt=q[nt];yt===void 0&&(yt=new Vi,yt.layers.enable(nt),yt.viewport=new cn,q[nt]=yt),yt.matrix.fromArray(ut.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(ut.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),nt===0&&(ue.matrix.copy(yt.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale)),Be===!0&&ue.cameras.push(yt)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){M=r.getBinding();const nt=M.getDepthInformation(Ee[0]);nt&&nt.isValid&&nt.texture&&_.init(nt,o.renderState)}if(Te&&Te.includes("camera-access")&&A){e.state.unbindTexture(),M=r.getBinding();for(let nt=0;nt<Ee.length;nt++){const ut=Ee[nt].camera;if(ut){let Tt=S[ut];Tt||(Tt=new Ig,S[ut]=Tt);const yt=M.getCameraImage(ut);Tt.sourceTexture=yt}}}}for(let Ee=0;Ee<z.length;Ee++){const Be=U[Ee],Te=z[Ee];Be!==null&&Te!==void 0&&Te.update(Be,Me,m||u)}F&&F(re,Me),Me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Me}),E=null}const De=new Hg;De.setAnimationLoop(ie),this.setAnimationLoop=function(re){F=re},this.dispose=function(){}}}const LE=new $t,Zg=new xt;Zg.set(-1,0,0,0,1,0,0,0,1);function IE(s,e){function t(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function r(_,S){S.color.getRGB(_.fogColor.value,kg(s)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function o(_,S,L,B,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(_,S):S.isMeshLambertMaterial?(l(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(_,S),M(_,S)):S.isMeshPhongMaterial?(l(_,S),x(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(_,S),v(_,S),S.isMeshPhysicalMaterial&&y(_,S,P)):S.isMeshMatcapMaterial?(l(_,S),E(_,S)):S.isMeshDepthMaterial?l(_,S):S.isMeshDistanceMaterial?(l(_,S),A(_,S)):S.isMeshNormalMaterial?l(_,S):S.isLineBasicMaterial?(u(_,S),S.isLineDashedMaterial&&d(_,S)):S.isPointsMaterial?p(_,S,L,B):S.isSpriteMaterial?m(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,t(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===ui&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,t(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===ui&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,t(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,t(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const L=e.get(S),B=L.envMap,P=L.envMapRotation;B&&(_.envMap.value=B,_.envMapRotation.value.setFromMatrix4(LE.makeRotationFromEuler(P)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Zg),_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,_.aoMapTransform))}function u(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform))}function d(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function p(_,S,L,B){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*L,_.scale.value=B*.5,S.map&&(_.map.value=S.map,t(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function m(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function x(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function M(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function v(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function y(_,S,L){_.ior.value=S.ior,S.diffuseRoughness>0&&(_.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ui&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.retroreflectivity>0&&(_.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=L.texture,_.transmissionSamplerSize.value.set(L.width,L.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,S){S.matcap&&(_.matcap.value=S.matcap)}function A(_,S){const L=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(L.matrixWorld),_.nearDistance.value=L.shadow.camera.near,_.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function UE(s,e,t,r){let o={},l={};function u(L,B){const P=B.program;r.uniformBlockBinding(L,P,o[L.id])}function d(L,B){let P=o[L.id];P===void 0&&(E(L),P=p(L),o[L.id]=P,L.addEventListener("dispose",_));const z=B.program;r.updateUBOMapping(L,z);const U=e.render.frame;l[L.id]!==U&&(m(L),l[L.id]=U)}function p(L){const B=s.createBuffer(),P=L.__size,z=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,B),s.bufferData(s.UNIFORM_BUFFER,P,z),s.bindBuffer(s.UNIFORM_BUFFER,null),B}function m(L){const B=o[L.id],P=L.uniforms,z=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,B);for(let U=0,T=P.length;U<T;U++){const R=P[U];if(Array.isArray(R))for(let O=0,V=R.length;O<V;O++)x(R[O],U,O,z);else x(R,U,0,z)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(L,B,P,z){if(v(L,B,P,z)===!0){const U=L.__offset,T=L.value;if(Array.isArray(T)){let R=0;for(let O=0;O<T.length;O++){const V=T[O],K=A(V,!0);M(V,L.__data,R),R+=K.storage/Float32Array.BYTES_PER_ELEMENT}}else M(T,L.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,U,L.__data)}}function M(L,B,P){typeof L=="number"||typeof L=="boolean"?B[P]=L:L.isMatrix3?(B[P]=L.elements[0],B[P+1]=L.elements[1],B[P+2]=L.elements[2],B[P+3]=0,B[P+4]=L.elements[3],B[P+5]=L.elements[4],B[P+6]=L.elements[5],B[P+7]=0,B[P+8]=L.elements[6],B[P+9]=L.elements[7],B[P+10]=L.elements[8],B[P+11]=0):ArrayBuffer.isView(L)?B.set(L.subarray(0,B.length-P),P):L.toArray(B,P)}function v(L,B,P,z){const U=L.value,T=B+"_"+P;if(Array.isArray(U)){z[T]===void 0&&(z[T]=[]);const R=z[T];let O=!1;for(let V=0;V<U.length;V++)y(U[V],R,V)===!0&&(O=!0);return O}return y(U,z,T)}function y(L,B,P){if(B[P]===void 0)return typeof L=="number"||typeof L=="boolean"?B[P]=L:ArrayBuffer.isView(L)?B[P]=L.slice():B[P]=L.clone(),!0;{const z=B[P];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return B[P]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(z.equals(L)===!1)return z.copy(L),!0}}return!1}function E(L){const B=L.uniforms;let P=0;const z=16;for(let T=0,R=B.length;T<R;T++){const O=Array.isArray(B[T])?B[T]:[B[T]];for(let V=0,K=O.length;V<K;V++){const q=O[V],ue=Array.isArray(q.value)?q.value:[q.value],k=Array.isArray(B[T])||Array.isArray(q.value);let ee=P;for(let Q=0,te=ue.length;Q<te;Q++){const Z=ue[Q],$=A(Z,k),F=P%z,ie=F%$.boundary,De=F+ie;P+=ie,De!==0&&z-De<$.storage&&(P+=z-De),Q===0&&(ee=P),P+=$.storage}const me=q.type==="int"?Int32Array:q.type==="uint"?Uint32Array:Float32Array;q.__data=new me((P-ee)/Float32Array.BYTES_PER_ELEMENT),q.__offset=ee}}const U=P%z;return U>0&&(P+=z-U),L.__size=P,L.__cache={},this}function A(L,B){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=16,P.storage=48):L.isMatrix4?(P.boundary=16,P.storage=64):L.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(P.boundary=16,P.storage=L.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",L),B===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function _(L){const B=L.target;B.removeEventListener("dispose",_),s.deleteBuffer(o[B.id]),delete o[B.id],delete l[B.id]}function S(){for(const L in o)s.deleteBuffer(o[L]);o={},l={}}return{bind:u,update:d,dispose:S}}const OE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function FE(){return Ji===null&&(Ji=new hy(OE,16,16,ws,ar),Ji.name="DFG_LUT",Ji.minFilter=ei,Ji.magFilter=ei,Ji.wrapS=Mr,Ji.wrapT=Mr,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class kE{constructor(e={}){const{canvas:t=Fx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:v=!1,outputBufferType:y=yi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const A=y,_=new Set([Yd,qd,Kd]),S=new Set([yi,sr,To,Ta,jd,Xd]),L=new Uint32Array(4),B=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let z=null,U=null;const T=[],R=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let K=!1,q=null,ue=null,k=null,ee=null;this._outputColorSpace=Ni;let me=0,Q=0,te=null,Z=-1,$=null;const F=new cn,ie=new cn;let De=null;const re=new wt(0);let Me=0,Ee=t.width,Be=t.height,Te=1,Oe=null,ot=null;const nt=new cn(0,0,Ee,Be),ut=new cn(0,0,Ee,Be);let Tt=!1;const yt=new wo,Ot=new Jd;let Qt=!1,Jt=!1;const Ut=new $t,Rt=new N,he=new cn,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function pt(){return te===null?Te:1}let G=r;function St(b,W){return t.getContext(b,W)}let mt,qe,Ce,Xt,st,We,I,C,J,Ae,Se,Le,Ue,ve,xe,se,D,ce,X,pe,_e,ae,be;try{const b={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vd}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",Re,!1),G===null){const W="webgl2";if(G=St(W,b),G===null)throw St(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(b){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),kt("WebGLRenderer: "+b.message),b}function Ve(){mt=new HM(G),mt.init(),_e=new bE(G,mt),qe=new RM(G,mt,e,_e),Ce=new CE(G,mt),qe.reversedDepthBuffer&&v&&Ce.buffers.depth.setReversed(!0),ue=G.createFramebuffer(),k=G.createFramebuffer(),ee=G.createFramebuffer(),Xt=new WM(G),st=new dE,We=new AE(G,mt,Ce,st,qe,_e,Xt),I=new zM(V),C=new Xy(G),ae=new bM(G,C),J=new VM(G,C,Xt,ae),Ae=new XM(G,J,C,ae,Xt),ce=new jM(G,qe,We),xe=new PM(st),Se=new hE(V,I,mt,qe,ae,xe),Le=new IE(V,st),Ue=new pE,ve=new yE(mt),D=new AM(V,I,Ce,Ae,E,p),se=new wE(V,Ae,qe),be=new UE(G,Xt,qe,Ce),X=new NM(G,mt,Xt),pe=new GM(G,mt,Xt),Xt.programs=Se.programs,V.capabilities=qe,V.extensions=mt,V.properties=st,V.renderLists=Ue,V.shadowMap=se,V.state=Ce,V.info=Xt}A!==yi&&(O=new qM(A,t.width,t.height,d,o,l));const ye=new DE(V,G);this.xr=ye,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(b){b!==void 0&&(Te=b,this.setSize(Ee,Be,!1))},this.getSize=function(b){return b.set(Ee,Be)},this.setSize=function(b,W,de=!0){if(ye.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=b,Be=W,t.width=Math.floor(b*Te),t.height=Math.floor(W*Te),de===!0&&(t.style.width=b+"px",t.style.height=W+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(Ee*Te,Be*Te).floor()},this.setDrawingBufferSize=function(b,W,de){Ee=b,Be=W,Te=de,t.width=Math.floor(b*de),t.height=Math.floor(W*de),this.setViewport(0,0,b,W)},this.setEffects=function(b){if(A===yi){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let W=0;W<b.length;W++)if(b[W].isOutputPass===!0){vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(nt)},this.setViewport=function(b,W,de,oe){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,W,de,oe),Ce.viewport(F.copy(nt).multiplyScalar(pt()).round())},this.getScissor=function(b){return b.copy(ut)},this.setScissor=function(b,W,de,oe){b.isVector4?ut.set(b.x,b.y,b.z,b.w):ut.set(b,W,de,oe),Ce.scissor(ie.copy(ut).multiplyScalar(pt()).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(b){Ce.setScissorTest(Tt=b)},this.setOpaqueSort=function(b){Oe=b},this.setTransparentSort=function(b){ot=b},this.getClearColor=function(b){return b.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(b=!0,W=!0,de=!0){let oe=0;if(b){let ne=!1;if(te!==null){const ke=te.texture.format;ne=_.has(ke)}if(ne){const ke=te.texture.type,Ye=S.has(ke),Fe=D.getClearColor(),He=D.getClearAlpha(),Qe=Fe.r,gt=Fe.g,Mt=Fe.b;Ye?(L[0]=Qe,L[1]=gt,L[2]=Mt,L[3]=He,G.clearBufferuiv(G.COLOR,0,L)):(B[0]=Qe,B[1]=gt,B[2]=Mt,B[3]=He,G.clearBufferiv(G.COLOR,0,B))}else oe|=G.COLOR_BUFFER_BIT}W&&(oe|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(oe|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&G.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),q=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),D.dispose(),Ue.dispose(),ve.dispose(),We.dispose(),st.dispose(),I.dispose(),Ae.dispose(),J.dispose(),ae.dispose(),be.dispose(),Se.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Yn),ye.removeEventListener("sessionend",mn),hn.stop()};function ze(b){b.preventDefault(),xc("WebGLRenderer: Context Lost."),K=!0}function Xe(){xc("WebGLRenderer: Context Restored."),K=!1;const b=Xt.autoReset,W=se.enabled,de=se.autoUpdate,oe=se.needsUpdate,ne=se.type;Ve(),Xt.autoReset=b,se.enabled=W,se.autoUpdate=de,se.needsUpdate=oe,se.type=ne}function Re(b){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ct(b){const W=b.target;W.removeEventListener("dispose",ct),Ze(W)}function Ze(b){tn(b),st.remove(b)}function tn(b){const W=st.get(b).programs;W!==void 0&&(W.forEach(function(de){Se.releaseProgram(de)}),b.isShaderMaterial&&Se.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,de,oe,ne,ke){W===null&&(W=ht);const Ye=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Fe=Ri(b,W,de,oe,ne);Ce.setMaterial(oe,Ye);let He=de.index,Qe=1;if(oe.wireframe===!0){if(He=J.getWireframeAttribute(de),He===void 0)return;Qe=2}const gt=de.drawRange,Mt=de.attributes.position;let Je=gt.start*Qe,bt=(gt.start+gt.count)*Qe;ke!==null&&(Je=Math.max(Je,ke.start*Qe),bt=Math.min(bt,(ke.start+ke.count)*Qe)),He!==null?(Je=Math.max(Je,0),bt=Math.min(bt,He.count)):Mt!=null&&(Je=Math.max(Je,0),bt=Math.min(bt,Mt.count));const sn=bt-Je;if(sn<0||sn===1/0)return;ae.setup(ne,oe,Fe,de,He);let Gt,Ht=X;if(He!==null&&(Gt=C.get(He),Ht=pe,Ht.setIndex(Gt)),ne.isMesh)oe.wireframe===!0?(Ce.setLineWidth(oe.wireframeLinewidth*pt()),Ht.setMode(G.LINES)):Ht.setMode(G.TRIANGLES);else if(ne.isLine){let fn=oe.linewidth;fn===void 0&&(fn=1),Ce.setLineWidth(fn*pt()),ne.isLineSegments?Ht.setMode(G.LINES):ne.isLineLoop?Ht.setMode(G.LINE_LOOP):Ht.setMode(G.LINE_STRIP)}else ne.isPoints?Ht.setMode(G.POINTS):ne.isSprite&&Ht.setMode(G.TRIANGLES);if(ne.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const fn=ne._multiDrawStarts,et=ne._multiDrawCounts,Mn=ne._multiDrawCount,rt=He?C.get(He).bytesPerElement:1,Xi=st.get(oe).currentProgram.getUniforms();for(let Tn=0;Tn<Mn;Tn++)Xi.setValue(G,"_gl_DrawID",Tn),Ht.render(fn[Tn]/rt,et[Tn])}else if(ne.isInstancedMesh)Ht.renderInstances(Je,sn,ne.count);else if(de.isInstancedBufferGeometry){const fn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,et=Math.min(de.instanceCount,fn);Ht.renderInstances(Je,sn,et)}else Ht.render(Je,sn)};function Ct(b,W,de,oe){q!==null&&b.isNodeMaterial&&q.setObject(oe,b),Qt===!0&&xe.setState(b,de,!1),b.transparent===!0&&b.side===Gi&&b.forceSinglePass===!1?(b.side=ui,b.needsUpdate=!0,ni(b,W,oe),b.side=Es,b.needsUpdate=!0,ni(b,W,oe),b.side=Gi):ni(b,W,oe)}this.compile=function(b,W,de=null){de===null&&(de=b),q!==null&&q.renderStart(b,W,de),U=ve.get(de),U.init(W),R.push(U),de.traverseVisible(function(ne){ne.isLight&&ne.layers.test(W.layers)&&(U.pushLight(ne),ne.castShadow&&U.pushShadow(ne))}),b!==de&&b.traverseVisible(function(ne){ne.isLight&&ne.layers.test(W.layers)&&(U.pushLight(ne),ne.castShadow&&U.pushShadow(ne))}),U.setupLights(),q!==null&&q.updateLights(U.state.lightsArray),Jt=this.localClippingEnabled,Qt=xe.init(this.clippingPlanes,Jt),Qt===!0&&xe.setGlobalState(this.clippingPlanes,W),q!==null&&se.render(U.state.shadowsArray,de,W);const oe=new Set;return b.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const ke=ne.material;if(ke)if(Array.isArray(ke))for(let Ye=0;Ye<ke.length;Ye++){const Fe=ke[Ye];Ct(Fe,de,W,ne),oe.add(Fe)}else Ct(ke,de,W,ne),oe.add(ke)}),U=R.pop(),q!==null&&q.renderEnd(),oe},this.compileAsync=function(b,W,de=null){const oe=this.compile(b,W,de);return new Promise(ne=>{function ke(){if(oe.forEach(function(Ye){const He=st.get(Ye).currentProgram;(He===void 0||He.isReady())&&oe.delete(Ye)}),oe.size===0){ne(b);return}setTimeout(ke,10)}mt.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let qt=null;function un(b){qt&&qt(b)}function Yn(){hn.stop()}function mn(){hn.start()}const hn=new Hg;hn.setAnimationLoop(un),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(b){qt=b,ye.setAnimationLoop(b),b===null?hn.stop():hn.start()},ye.addEventListener("sessionstart",Yn),ye.addEventListener("sessionend",mn),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;q!==null&&q.renderStart(b,W);const de=ye.enabled===!0&&ye.isPresenting===!0,oe=O!==null&&(te===null||de)&&O.begin(V,te);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(W),W=ye.getCamera()),b.isScene===!0&&b.onBeforeRender(V,b,W,te),U=ve.get(b,R.length),U.init(W),U.state.textureUnits=We.getTextureUnits(),R.push(U),Ut.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?Ot.setFromArrayCamera(W):yt.setFromProjectionMatrix(Ut,Wi,W.reversedDepth),Jt=this.localClippingEnabled,Qt=xe.init(this.clippingPlanes,Jt),z=Ue.get(b,T.length),z.init(),T.push(z),this.info.render.frame++,ye.enabled===!0&&ye.isPresenting===!0){const Ye=V.xr.getDepthSensingMesh();Ye!==null&&xn(Ye,W,-1/0,V.sortObjects)}xn(b,W,0,V.sortObjects),z.finish(),q!==null&&q.updateLights(U.state.lightsArray),V.sortObjects===!0&&z.sort(Oe,ot),lt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,lt&&D.addToRenderList(z,b),this.info.autoReset===!0&&this.info.reset(),Qt===!0&&xe.beginShadows();const ne=U.state.shadowsArray;if(se.render(ne,b,W),Qt===!0&&xe.endShadows(),(oe&&O.hasRenderPass())===!1){const Ye=z.opaque,Fe=z.transmissive;if(U.setupLights(),W.isArrayCamera){const He=W.cameras;if(Fe.length>0)for(let Qe=0,gt=He.length;Qe<gt;Qe++){const Mt=He[Qe];dn(Ye,Fe,b,Mt)}lt&&D.render(b);for(let Qe=0,gt=He.length;Qe<gt;Qe++){const Mt=He[Qe];gn(z,b,Mt,Mt.viewport)}}else Fe.length>0&&dn(Ye,Fe,b,W),lt&&D.render(b),gn(z,b,W)}te!==null&&Q===0&&(We.updateMultisampleRenderTarget(te),We.updateRenderTargetMipmap(te)),oe&&O.end(V),b.isScene===!0&&b.onAfterRender(V,b,W),ae.resetDefaultState(),Z=-1,$=null,R.pop(),R.length>0?(U=R[R.length-1],We.setTextureUnits(U.state.textureUnits),Qt===!0&&xe.setGlobalState(V.clippingPlanes,U.state.camera)):U=null,T.pop(),T.length>0?z=T[T.length-1]:z=null,q!==null&&q.renderEnd()};function xn(b,W,de,oe){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)de=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)U.pushLight(b),b.castShadow&&U.pushShadow(b);else if(b.isSprite){const Ye=W.isArrayCamera?Ot:yt;if(!b.frustumCulled||b.intersectsFrustum(Ye)){oe&&he.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ut);const Fe=Ae.update(b),He=b.material;He.visible&&z.push(b,Fe,He,de,he.z,null,W)}}else if(b.isMesh||b.isLine||b.isPoints){const Ye=W.isArrayCamera?Ot:yt;if(!b.frustumCulled||b.intersectsFrustum(Ye)){const Fe=Ae.update(b),He=b.material;if(oe&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),he.copy(b.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),he.copy(Fe.boundingSphere.center)),he.applyMatrix4(b.matrixWorld).applyMatrix4(Ut)),Array.isArray(He)){const Qe=Fe.groups;for(let gt=0,Mt=Qe.length;gt<Mt;gt++){const Je=Qe[gt],bt=He[Je.materialIndex];bt&&bt.visible&&z.push(b,Fe,bt,de,he.z,Je,W)}}else He.visible&&z.push(b,Fe,He,de,he.z,null,W)}}}const ke=b.children;for(let Ye=0,Fe=ke.length;Ye<Fe;Ye++)xn(ke[Ye],W,de,oe)}function gn(b,W,de,oe){const{opaque:ne,transmissive:ke,transparent:Ye}=b;U.setupLightsView(de),Qt===!0&&xe.setGlobalState(V.clippingPlanes,de),oe&&Ce.viewport(F.copy(oe)),ne.length>0&&ti(ne,W,de),ke.length>0&&ti(ke,W,de),Ye.length>0&&ti(Ye,W,de),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function dn(b,W,de,oe){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[oe.id]===void 0){const Je=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[oe.id]=new rr(1,1,{generateMipmaps:!0,type:Je?ar:yi,minFilter:Jr,samples:Math.max(4,qe.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}const ke=U.state.transmissionRenderTarget[oe.id],Ye=oe.viewport||F;ke.setSize(Ye.z*V.transmissionResolutionScale,Ye.w*V.transmissionResolutionScale);const Fe=V.getRenderTarget(),He=V.getActiveCubeFace(),Qe=V.getActiveMipmapLevel();V.setRenderTarget(ke),V.getClearColor(re),Me=V.getClearAlpha(),Me<1&&V.setClearColor(16777215,.5),V.clear(),lt&&D.render(de);const gt=V.toneMapping;V.toneMapping=Er;const Mt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),U.setupLightsView(oe),Qt===!0&&xe.setGlobalState(V.clippingPlanes,oe),ti(b,de,oe),We.updateMultisampleRenderTarget(ke),We.updateRenderTargetMipmap(ke),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let bt=0,sn=W.length;bt<sn;bt++){const Gt=W[bt],{object:Ht,geometry:fn,material:et,group:Mn}=Gt;if(et.side===Gi&&Ht.layers.test(oe.layers)){const rt=et.side;et.side=ui,et.needsUpdate=!0,hi(Ht,de,oe,fn,et,Mn),et.side=rt,et.needsUpdate=!0,Je=!0}}Je===!0&&(We.updateMultisampleRenderTarget(ke),We.updateRenderTargetMipmap(ke))}V.setRenderTarget(Fe,He,Qe),V.setClearColor(re,Me),Mt!==void 0&&(oe.viewport=Mt),V.toneMapping=gt}function ti(b,W,de){const oe=W.isScene===!0?W.overrideMaterial:null;for(let ne=0,ke=b.length;ne<ke;ne++){const Ye=b[ne],{object:Fe,geometry:He,group:Qe}=Ye;let gt=Ye.material;gt.allowOverride===!0&&oe!==null&&(gt=oe),Fe.layers.test(de.layers)&&hi(Fe,W,de,He,gt,Qe)}}function hi(b,W,de,oe,ne,ke){q!==null&&ne.isNodeMaterial&&q.setObject(b,ne),b.onBeforeRender(V,W,de,oe,ne,ke),b.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ne.onBeforeRender(V,W,de,oe,b,ke),ne.transparent===!0&&ne.side===Gi&&ne.forceSinglePass===!1?(ne.side=ui,ne.needsUpdate=!0,V.renderBufferDirect(de,W,oe,ne,b,ke),ne.side=Es,ne.needsUpdate=!0,V.renderBufferDirect(de,W,oe,ne,b,ke),ne.side=Gi):V.renderBufferDirect(de,W,oe,ne,b,ke),b.onAfterRender(V,W,de,oe,ne,ke)}function di(b){let W=0;for(const de of b)de.texture!==null&&W++;return W}function ni(b,W,de){W.isScene!==!0&&(W=ht);const oe=st.get(b),ne=U.state.lights,ke=U.state.shadowsArray,Ye=ne.state.version,Fe=Se.getParameters(b,ne.state,ke,W,de,U.state.lightProbeGridArray),He=Se.getProgramCacheKey(Fe);let Qe=oe.programs;oe.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?W.environment:null,oe.fog=W.fog;const gt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;oe.envMap=I.get(b.envMap||oe.environment,gt),oe.envMapRotation=oe.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,Qe===void 0&&(b.addEventListener("dispose",ct),Qe=new Map,oe.programs=Qe,oe.programVariants=new Map);let Mt=Qe.get(He);if(Mt!==void 0){if(oe.currentProgram===Mt&&oe.lightsStateVersion===Ye)return Ar(b,Fe),Mt}else Fe.uniforms=Se.getUniforms(b),q!==null&&b.isNodeMaterial&&q.build(b,de,Fe),b.onBeforeCompile(Fe,V),Mt=Se.acquireProgram(Fe,He),Qe.set(He,Mt),oe.uniforms=Fe.uniforms;const Je=oe.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Je.clippingPlanes=xe.uniform),Ar(b,Fe),oe.needsLights=ji(b),oe.lightsStateVersion=Ye,oe.needsLights&&(Je.ambientLightColor.value=ne.state.ambient,Je.lightProbe.value=ne.state.probe,Je.sunLights.value=ne.state.sun,Je.sunLightShadows.value=ne.state.sunShadow,Je.directionalLights.value=ne.state.directional,Je.directionalLightShadows.value=ne.state.directionalShadow,Je.spotLights.value=ne.state.spot,Je.spotLightShadows.value=ne.state.spotShadow,Je.rectAreaLights.value=ne.state.rectArea,Je.ltc_1.value=ne.state.rectAreaLTC1,Je.ltc_2.value=ne.state.rectAreaLTC2,Je.pointLights.value=ne.state.point,Je.pointLightShadows.value=ne.state.pointShadow,Je.hemisphereLights.value=ne.state.hemi,Je.sunShadowMatrix.value=ne.state.sunShadowMatrix,Je.sunShadowCascade.value=ne.state.sunShadowCascade,Je.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Je.spotLightMatrix.value=ne.state.spotLightMatrix,Je.spotLightMap.value=ne.state.spotLightMap,Je.pointShadowMatrix.value=ne.state.pointShadowMatrix),oe.numLightProbeGrids=di(U.state.lightProbeGridArray),oe.currentProgram=Mt,oe.uniformsList=null,Mt}function fi(b,W,de,oe,ne){const ke=st.get(b),Ye=ke.currentProgram.id+","+oe+","+ne;let Fe=ke.programVariants.get(Ye);return Fe===void 0?(Fe=ni(b,W,de),ke.programVariants.set(Ye,Fe)):(ke.currentProgram=Fe,ke.uniformsList=null,ke.outputColorSpace=oe,ke.toneMapping=ne),Fe}function Kt(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=dc.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function Ar(b,W){const de=st.get(b);de.outputColorSpace=W.outputColorSpace,de.batching=W.batching,de.batchingColor=W.batchingColor,de.instancing=W.instancing,de.instancingColor=W.instancingColor,de.instancingMorph=W.instancingMorph,de.skinning=W.skinning,de.morphTargets=W.morphTargets,de.morphNormals=W.morphNormals,de.morphColors=W.morphColors,de.morphTargetsCount=W.morphTargetsCount,de.numClippingPlanes=W.numClippingPlanes,de.numIntersection=W.numClipIntersection,de.vertexAlphas=W.vertexAlphas,de.vertexTangents=W.vertexTangents,de.toneMapping=W.toneMapping}function Ri(b,W,de,oe,ne){W.isScene!==!0&&(W=ht),We.resetTextureUnits();const ke=W.fog,Ye=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?W.environment:null,Fe=te===null?V.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:It.workingColorSpace,He=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,Qe=I.get(oe.envMap||Ye,He),gt=oe.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,Mt=!!de.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Je=!!de.morphAttributes.position,bt=!!de.morphAttributes.normal,sn=!!de.morphAttributes.color;let Gt=Er;oe.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Gt=V.toneMapping);const Ht=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,fn=Ht!==void 0?Ht.length:0,et=st.get(oe),Mn=U.state.lights;if(Qt===!0&&(Jt===!0||b!==$)){const Bt=b===$&&oe.id===Z;xe.setState(oe,b,Bt)}let rt=!1,Xi=!1;oe.version===et.__version?et.needsLights&&et.lightsStateVersion!==Mn.state.version||ne.isBatchedMesh&&et.batching===!1||!ne.isBatchedMesh&&et.batching===!0||ne.isBatchedMesh&&et.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&et.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&et.instancing===!1||!ne.isInstancedMesh&&et.instancing===!0||ne.isSkinnedMesh&&et.skinning===!1||!ne.isSkinnedMesh&&et.skinning===!0||ne.isInstancedMesh&&et.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&et.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&et.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&et.instancingMorph===!1&&ne.morphTexture!==null||et.envMap!==Qe||oe.fog===!0&&et.fog!==ke||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==xe.numPlanes||et.numIntersection!==xe.numIntersection)||et.vertexAlphas!==gt||et.vertexTangents!==Mt||et.morphTargets!==Je||et.morphNormals!==bt||et.morphColors!==sn||et.morphTargetsCount!==fn||et.numLightProbeGrids!==di(U.state.lightProbeGridArray)?rt=!0:(et.outputColorSpace!==Fe||et.toneMapping!==Gt)&&(Xi=!0):(rt=!0,et.__version=oe.version);let Tn=et.currentProgram;(rt===!0||Xi===!0)&&(Tn=Xi===!0?fi(oe,W,ne,Fe,Gt):ni(oe,W,ne),q&&oe.isNodeMaterial&&q.onUpdateProgram(oe,Tn,et));let Nr=!1,Pi=!1,Ki=!1;const Dt=Tn.getUniforms(),vn=et.uniforms;if(Ce.useProgram(Tn.program)&&(Nr=!0,Pi=!0,Ki=!0),oe.id!==Z&&(Z=oe.id,Pi=!0),Nr||$!==b){Ce.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Dt.setValue(G,"projectionMatrix",b.projectionMatrix),Dt.setValue(G,"viewMatrix",b.matrixWorldInverse);const Yt=Dt.map.cameraPosition;Yt!==void 0&&Yt.setValue(G,Rt.setFromMatrixPosition(b.matrixWorld)),qe.logarithmicDepthBuffer&&Dt.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Dt.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),$!==b&&($=b,Pi=!0,Ki=!0)}if(et.needsLights&&(Mn.state.sunShadowMap.length>0&&Dt.setValue(G,"sunShadowMap",Mn.state.sunShadowMap,We),Mn.state.directionalShadowMap.length>0&&Dt.setValue(G,"directionalShadowMap",Mn.state.directionalShadowMap,We),Mn.state.spotShadowMap.length>0&&Dt.setValue(G,"spotShadowMap",Mn.state.spotShadowMap,We),Mn.state.pointShadowMap.length>0&&Dt.setValue(G,"pointShadowMap",Mn.state.pointShadowMap,We)),ne.isSkinnedMesh){Dt.setOptional(G,ne,"bindMatrix"),Dt.setOptional(G,ne,"bindMatrixInverse");const Bt=ne.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Dt.setValue(G,"boneTexture",Bt.boneTexture,We))}ne.isBatchedMesh&&(Dt.setOptional(G,ne,"batchingTexture"),Dt.setValue(G,"batchingTexture",ne._matricesTexture,We),Dt.setOptional(G,ne,"batchingIdTexture"),Dt.setValue(G,"batchingIdTexture",ne._indirectTexture,We),Dt.setOptional(G,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Dt.setValue(G,"batchingColorTexture",ne._colorsTexture,We));const Bn=de.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&ce.update(ne,de,Tn),(Pi||et.receiveShadow!==ne.receiveShadow)&&(et.receiveShadow=ne.receiveShadow,Dt.setValue(G,"receiveShadow",ne.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&W.environment!==null&&(vn.envMapIntensity.value=W.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=FE()),Pi){if(Dt.setValue(G,"toneMappingExposure",V.toneMappingExposure),et.needsLights&&br(vn,Ki),ke&&oe.fog===!0&&Le.refreshFogUniforms(vn,ke),Le.refreshMaterialUniforms(vn,oe,Te,Be,U.state.transmissionRenderTarget[b.id]),et.needsLights&&et.numLightProbeGrids>0){const Bt=P;let Yt=0;for(const Pn of U.state.lightProbeGridArray)Pn.texture!==null&&(Bt.textures[Yt]=Pn.texture,Bt.min[Yt]=Pn.boundingBox.min,Bt.max[Yt]=Pn.boundingBox.max,Bt.resolution[Yt]=Pn.resolution,Yt++);for(const Pn in Bt)Bt[Pn].length=Yt;vn.probesSH.value=Bt.textures,vn.probesMin.value=Bt.min,vn.probesMax.value=Bt.max,vn.probesResolution.value=Bt.resolution}dc.upload(G,Kt(et),vn,We)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(dc.upload(G,Kt(et),vn,We),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Dt.setValue(G,"center",ne.center),Dt.setValue(G,"modelViewMatrix",ne.modelViewMatrix),Dt.setValue(G,"normalMatrix",ne.normalMatrix),Dt.setValue(G,"modelMatrix",ne.matrixWorld),oe.uniformsGroups!==void 0){const Bt=oe.uniformsGroups;for(let Yt=0,Pn=Bt.length;Yt<Pn;Yt++){const Rr=Bt[Yt];be.update(Rr,Tn),be.bind(Rr,Tn)}}return Tn}function br(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.sunLights.needsUpdate=W,b.sunLightShadows.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function ji(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return me},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(b,W,de){const oe=st.get(b);oe.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),st.get(b.texture).__webglTexture=W,st.get(b.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:de,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,W){const de=st.get(b);de.__webglFramebuffer=W,de.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,de=0){te=b,me=W,Q=de;let oe=null,ne=!1,ke=!1;if(b){const Fe=st.get(b);if(Fe.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(G.FRAMEBUFFER,Fe.__webglFramebuffer),F.copy(b.viewport),ie.copy(b.scissor),De=b.scissorTest,Ce.viewport(F),Ce.scissor(ie),Ce.setScissorTest(De),Z=-1;return}else if(Fe.__webglFramebuffer===void 0)We.setupRenderTarget(b);else if(Fe.__hasExternalTextures)We.rebindTextures(b,st.get(b.texture).__webglTexture,st.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const gt=b.depthTexture;if(Fe.__boundDepthTexture!==gt){if(gt!==null&&st.has(gt)&&(b.width!==gt.image.width||b.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(b)}}const He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ke=!0);const Qe=st.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?oe=Qe[W][de]:oe=Qe[W],ne=!0):b.samples>0&&We.useMultisampledRTT(b)===!1?oe=st.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?oe=Qe[de]:oe=Qe,F.copy(b.viewport),ie.copy(b.scissor),De=b.scissorTest}else F.copy(nt).multiplyScalar(Te).floor(),ie.copy(ut).multiplyScalar(Te).floor(),De=Tt;if(de!==0&&(oe=ue),Ce.bindFramebuffer(G.FRAMEBUFFER,oe)&&Ce.drawBuffers(b,oe),Ce.viewport(F),Ce.scissor(ie),Ce.setScissorTest(De),ne){const Fe=st.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,de)}else if(ke){const Fe=W;for(let He=0;He<b.textures.length;He++){const Qe=st.get(b.textures[He]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+He,Qe.__webglTexture,de,Fe)}}else if(b!==null&&de!==0){const Fe=st.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Fe.__webglTexture,de)}Z=-1};function or(b){const W=st.get(b);return(W.__readFormat!==b.format||W.__readType!==b.type)&&(W.__readFormat=b.format,W.__readType=b.type,W.__formatReadable=qe.textureFormatReadable(b.format),W.__typeReadable=qe.textureTypeReadable(b.type)),W}this.readRenderTargetPixels=function(b,W,de,oe,ne,ke,Ye,Fe=0){if(!(b&&b.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=st.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ye!==void 0&&(He=He[Ye],Array.isArray(He)&&(He=He[0])),He){Ce.bindFramebuffer(G.FRAMEBUFFER,He);try{const Qe=b.textures[Fe],gt=Qe.format,Mt=Qe.type;b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Fe);const Je=or(Qe);if(Je.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-oe&&de>=0&&de<=b.height-ne&&G.readPixels(W,de,oe,ne,_e.convert(gt),_e.convert(Mt),ke)}finally{const Qe=te!==null?st.get(te).__webglFramebuffer:null;Ce.bindFramebuffer(G.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(b,W,de,oe,ne,ke,Ye,Fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=st.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ye!==void 0&&(He=He[Ye],Array.isArray(He)&&(He=He[0])),He)if(W>=0&&W<=b.width-oe&&de>=0&&de<=b.height-ne){Ce.bindFramebuffer(G.FRAMEBUFFER,He);const Qe=b.textures[Fe],gt=Qe.format,Mt=Qe.type;b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Fe);const Je=or(Qe);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,bt),G.bufferData(G.PIXEL_PACK_BUFFER,ke.byteLength,G.STREAM_READ),G.readPixels(W,de,oe,ne,_e.convert(gt),_e.convert(Mt),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const sn=te!==null?st.get(te).__webglFramebuffer:null;Ce.bindFramebuffer(G.FRAMEBUFFER,sn);const Gt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await kx(G,Gt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,bt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ke),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(bt),G.deleteSync(Gt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,W=null,de=0){const oe=Math.pow(2,-de),ne=Math.floor(b.image.width*oe),ke=Math.floor(b.image.height*oe),Ye=W!==null?W.x:0,Fe=W!==null?W.y:0;We.setTexture2D(b,0),G.copyTexSubImage2D(G.TEXTURE_2D,de,0,0,Ye,Fe,ne,ke),Ce.unbindTexture()},this.copyTextureToTexture=function(b,W,de=null,oe=null,ne=0,ke=0){let Ye,Fe,He,Qe,gt,Mt,Je,bt,sn;const Gt=b.isCompressedTexture?b.mipmaps[ke]:b.image;if(de!==null)Ye=de.max.x-de.min.x,Fe=de.max.y-de.min.y,He=de.isBox3?de.max.z-de.min.z:1,Qe=de.min.x,gt=de.min.y,Mt=de.isBox3?de.min.z:0;else{const Dt=Math.pow(2,-ne);Ye=Math.floor(Gt.width*Dt),Fe=Math.floor(Gt.height*Dt),b.isDataArrayTexture?He=Gt.depth:b.isData3DTexture?He=Math.floor(Gt.depth*Dt):He=1,Qe=0,gt=0,Mt=0}oe!==null?(Je=oe.x,bt=oe.y,sn=oe.z):(Je=0,bt=0,sn=0);const Ht=_e.convert(W.format),fn=_e.convert(W.type);let et;W.isData3DTexture?(We.setTexture3D(W,0),et=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(We.setTexture2DArray(W,0),et=G.TEXTURE_2D_ARRAY):(We.setTexture2D(W,0),et=G.TEXTURE_2D),Ce.activeTexture(G.TEXTURE0),Ce.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),Ce.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Ce.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const Mn=Ce.getParameter(G.UNPACK_ROW_LENGTH),rt=Ce.getParameter(G.UNPACK_IMAGE_HEIGHT),Xi=Ce.getParameter(G.UNPACK_SKIP_PIXELS),Tn=Ce.getParameter(G.UNPACK_SKIP_ROWS),Nr=Ce.getParameter(G.UNPACK_SKIP_IMAGES);Ce.pixelStorei(G.UNPACK_ROW_LENGTH,Gt.width),Ce.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Gt.height),Ce.pixelStorei(G.UNPACK_SKIP_PIXELS,Qe),Ce.pixelStorei(G.UNPACK_SKIP_ROWS,gt),Ce.pixelStorei(G.UNPACK_SKIP_IMAGES,Mt);const Pi=b.isDataArrayTexture||b.isData3DTexture,Ki=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const Dt=st.get(b),vn=st.get(W),Bn=st.get(Dt.__renderTarget),Bt=st.get(vn.__renderTarget);Ce.bindFramebuffer(G.READ_FRAMEBUFFER,Bn.__webglFramebuffer),Ce.bindFramebuffer(G.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Yt=0;Yt<He;Yt++)Pi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,st.get(b).__webglTexture,ne,Mt+Yt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,st.get(W).__webglTexture,ke,sn+Yt)),G.blitFramebuffer(Qe,gt,Qe+Ye,gt+Fe,Je,bt,Je+Ye,bt+Fe,G.DEPTH_BUFFER_BIT,G.NEAREST);Ce.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ne!==0||b.isRenderTargetTexture||st.has(b)){const Dt=st.get(b),vn=st.get(W);Ce.bindFramebuffer(G.READ_FRAMEBUFFER,k),Ce.bindFramebuffer(G.DRAW_FRAMEBUFFER,ee);for(let Bn=0;Bn<He;Bn++)Pi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Dt.__webglTexture,ne,Mt+Bn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Dt.__webglTexture,ne),Ki?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,vn.__webglTexture,ke,sn+Bn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,vn.__webglTexture,ke),ne!==0?G.blitFramebuffer(Qe,gt,Qe+Ye,gt+Fe,Je,bt,Je+Ye,bt+Fe,G.COLOR_BUFFER_BIT,G.NEAREST):Ki?G.copyTexSubImage3D(et,ke,Je,bt,sn+Bn,Qe,gt,Ye,Fe):G.copyTexSubImage2D(et,ke,Je,bt,Qe,gt,Ye,Fe);Ce.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ki?b.isDataTexture||b.isData3DTexture?G.texSubImage3D(et,ke,Je,bt,sn,Ye,Fe,He,Ht,fn,Gt.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(et,ke,Je,bt,sn,Ye,Fe,He,Ht,Gt.data):G.texSubImage3D(et,ke,Je,bt,sn,Ye,Fe,He,Ht,fn,Gt):b.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ke,Je,bt,Ye,Fe,Ht,fn,Gt.data):b.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ke,Je,bt,Gt.width,Gt.height,Ht,Gt.data):G.texSubImage2D(G.TEXTURE_2D,ke,Je,bt,Ye,Fe,Ht,fn,Gt);Ce.pixelStorei(G.UNPACK_ROW_LENGTH,Mn),Ce.pixelStorei(G.UNPACK_IMAGE_HEIGHT,rt),Ce.pixelStorei(G.UNPACK_SKIP_PIXELS,Xi),Ce.pixelStorei(G.UNPACK_SKIP_ROWS,Tn),Ce.pixelStorei(G.UNPACK_SKIP_IMAGES,Nr),ke===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&G.generateMipmap(et),Ce.unbindTexture()},this.initRenderTarget=function(b){st.get(b).__webglFramebuffer===void 0&&We.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?We.setTextureCube(b,0):b.isData3DTexture?We.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?We.setTexture2DArray(b,0):We.setTexture2D(b,0),Ce.unbindTexture()},this.resetState=function(){me=0,Q=0,te=null,Ce.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}const Y0={type:"change"},af={type:"start"},Qg={type:"end"},sc=new Nc,$0=new Sr,BE=Math.cos(70*Vx.DEG2RAD),An=new N,ci=2*Math.PI,Vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kh=1e-6;class zE extends Wy{constructor(e,t=null){super(e,t),this.state=Vt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xa.ROTATE,MIDDLE:xa.DOLLY,RIGHT:xa.PAN},this.touches={ONE:va.ROTATE,TWO:va.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new is,this._lastTargetPosition=new N,this._quat=new is().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new C0,this._sphericalDelta=new C0,this._scale=1,this._panOffset=new N,this._rotateStart=new je,this._rotateEnd=new je,this._rotateDelta=new je,this._panStart=new je,this._panEnd=new je,this._panDelta=new je,this._dollyStart=new je,this._dollyEnd=new je,this._dollyDelta=new je,this._dollyDirection=new N,this._mouse=new je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=VE.bind(this),this._onPointerDown=HE.bind(this),this._onPointerUp=GE.bind(this),this._onContextMenu=$E.bind(this),this._onMouseWheel=XE.bind(this),this._onKeyDown=KE.bind(this),this._onTouchStart=qE.bind(this),this._onTouchMove=YE.bind(this),this._onMouseDown=WE.bind(this),this._onMouseMove=jE.bind(this),this._interceptControlDown=ZE.bind(this),this._interceptControlUp=QE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Vt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Y0),this.update(),this.state=Vt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;An.copy(t).sub(this.target),An.applyQuaternion(this._quat),this._spherical.setFromVector3(An),this.autoRotate&&this.state===Vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=ci:r>Math.PI&&(r-=ci),o<-Math.PI?o+=ci:o>Math.PI&&(o-=ci),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(An.setFromSpherical(this._spherical),An.applyQuaternion(this._quatInverse),t.copy(this.target).add(An),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=An.length();u=this._clampDistance(d*this._scale);const p=d-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const d=new N(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const m=new N(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),u=An.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(sc.origin.copy(this.object.position),sc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sc.direction))<BE?this.object.lookAt(this.target):($0.setFromNormalAndCoplanarPoint(this.object.up,this.target),sc.intersectPlane($0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Kh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kh||this._lastTargetPosition.distanceToSquared(this.target)>Kh?(this.dispatchEvent(Y0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ci/60*this.autoRotateSpeed*e:ci/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){An.setFromMatrixColumn(t,0),An.multiplyScalar(-e),this._panOffset.add(An)}_panUp(e,t){this.screenSpacePanning===!0?An.setFromMatrixColumn(t,1):(An.setFromMatrixColumn(t,0),An.crossVectors(this.object.up,An)),An.multiplyScalar(e),this._panOffset.add(An)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;An.copy(o).sub(this.target);let l=An.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/t.clientHeight),this._rotateUp(ci*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/t.clientHeight),this._rotateUp(ci*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function HE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function VE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function GE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qg),this.state=Vt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function WE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Vt.DOLLY;break;case xa.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Vt.ROTATE}break;case xa.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Vt.PAN}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(af)}function jE(s){switch(this.state){case Vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function XE(s){this.enabled===!1||this.enableZoom===!1||this.state!==Vt.NONE||(s.preventDefault(),this.dispatchEvent(af),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Qg))}function KE(s){this.enabled!==!1&&this._handleKeyDown(s)}function qE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case va.ROTATE:if(this.enableRotate===!1){this.state=Vt.NONE;break}this._handleTouchStartRotate(s),this.state=Vt.TOUCH_ROTATE;break;case va.PAN:if(this.enablePan===!1){this.state=Vt.NONE;break}this._handleTouchStartPan(s),this.state=Vt.TOUCH_PAN;break;default:this.state=Vt.NONE}break;case 2:switch(this.touches.TWO){case va.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Vt.TOUCH_DOLLY_PAN;break;case va.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Vt.TOUCH_DOLLY_ROTATE;break;default:this.state=Vt.NONE}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(af)}function YE(s){switch(this._trackPointer(s),this.state){case Vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Vt.NONE}}function $E(s){this.enabled!==!1&&s.preventDefault()}function ZE(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function QE(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z0({theme:s="dark",heatmap:e="pressure",assetsLayer:t={pipes:!0,pipesPrimary:!0,pipesSecondary:!0,pipesTertiary:!0,pipesService:!0,buildings:!0,hydrants:!0,streetLabels:!0,valves:!0,tanks:!0,sensors:!0,contour:!0},closedValves:r={},onToggleValve:o,simTime:l=14,currentSim:u={label:"14:00 - Giờ bình thường",flow:12580,pressure:3.32},compact:d=!1,onSelectAsset:p}){const m=Pt.useRef(null),x=Pt.useRef(null),M=Pt.useRef(null),v=Pt.useRef(null),y=Pt.useRef(null),E=Pt.useRef(null),A=Pt.useRef([]),_=Pt.useRef([]),[S,L]=Pt.useState(null),B=Object.entries(r).filter(([U,T])=>T);Pt.useEffect(()=>{const U=m.current;if(!U)return;const T=U.clientWidth||900,R=U.clientHeight||560,O=s==="dark",V=new ny;x.current=V,V.background=new wt(O?792880:16317180),V.fog=new Qd(O?463134:15857145,22e-5);const K=new Vi(42,T/R,2,8500);K.position.set(780,720,880),M.current=K;const q=new kE({antialias:!0,alpha:!1,powerPreference:"high-performance"});for(q.setSize(T,R),q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.shadowMap.enabled=!0,q.shadowMap.type=ng,q.toneMapping=Gd,q.toneMappingExposure=O?1.45:1,y.current=q;U.firstChild;)U.removeChild(U.firstChild);U.appendChild(q.domElement);const ue=new zE(K,q.domElement);ue.enableDamping=!0,ue.dampingFactor=.06,ue.maxPolarAngle=Math.PI/2-.03,ue.minDistance=25,ue.maxDistance=3400,ue.target.set(0,15,0),v.current=ue;const k=new zy(O?6333946:16777215,O?1.35:1.1);V.add(k);const ee=new By(16777215,O?2.65:1.5);ee.position.set(650,950,550),ee.castShadow=!0,ee.shadow.mapSize.width=2048,ee.shadow.mapSize.height=2048,ee.shadow.camera.near=100,ee.shadow.camera.far=3200;const me=1250;ee.shadow.camera.left=-me,ee.shadow.camera.right=me,ee.shadow.camera.top=me,ee.shadow.camera.bottom=-me,ee.shadow.bias=-3e-4,V.add(ee);const Q=new Oy(O?3718648:14742270,O?528413:9741240,O?.95:.45);V.add(Q),_.current=[],A.current=[];const te=new Hi(2600,2600),Z=new Cn({color:O?330776:14870768,roughness:.85,metalness:.12}),$=new Lt(te,Z);$.rotation.x=-Math.PI/2,$.position.y=-.2,$.receiveShadow=!0,V.add($);const F=new Gy(2600,130,O?1981066:165063,O?529186:13358561);F.position.y=.02,V.add(F);const ie=new Ec(1240,1248,64),De=new ga({color:O?165063:959977,side:Gi,transparent:!0,opacity:.35}),re=new Lt(ie,De);re.rotation.x=-Math.PI/2,re.position.y=.04,V.add(re);const Me=new Xn;V.add(Me);const Ee=new Cn({color:O?462362:4674921,roughness:.8,metalness:.1}),Be=new Cn({color:O?791844:9741240,roughness:.85}),Te=new ga({color:O?1451062:16096779}),Oe=new ga({color:O?1648701:16777215}),ot=(se,D,ce,X,pe=!0,_e="Đường đô thị",ae=!0)=>{const be=new Hi(ce,X),Ve=new Lt(be,Ee);Ve.rotation.x=-Math.PI/2,Ve.position.set(se,.05,D),pe||(Ve.rotation.z=Math.PI/2),Ve.receiveShadow=!0,Me.add(Ve);const ye=ce>=24?4:2.5,ze=new Hi(ye,X),Xe=new Lt(ze,Be);Xe.rotation.x=-Math.PI/2,pe?Xe.position.set(se-ce/2-ye/2,.1,D):(Xe.rotation.z=Math.PI/2,Xe.position.set(se,.1,D-ce/2-ye/2)),Me.add(Xe);const Re=new Lt(ze,Be);if(Re.rotation.x=-Math.PI/2,pe?Re.position.set(se+ce/2+ye/2,.1,D):(Re.rotation.z=Math.PI/2,Re.position.set(se,.1,D+ce/2+ye/2)),Me.add(Re),ae&&ce>=20){const ct=new Hi(2.2,X),Ze=new Lt(ct,Te);Ze.rotation.x=-Math.PI/2,pe||(Ze.rotation.z=Math.PI/2),Ze.position.set(se,.08,D),Me.add(Ze)}else{const ct=Math.floor(X/18);for(let Ze=0;Ze<ct;Ze++){const tn=new Hi(.6,6),Ct=new Lt(tn,Oe);Ct.rotation.x=-Math.PI/2,pe?Ct.position.set(se,.08,D-X/2+Ze*18+9):(Ct.rotation.z=Math.PI/2,Ct.position.set(se-X/2+Ze*18+9,.08,D)),Me.add(Ct)}}};ot(0,0,24,2400,!0,"Đường Hoàng Đạo Thúy",!0),ot(0,180,28,2500,!1,"Đường Lê Văn Lương",!0),ot(0,-180,30,2500,!1,"Đường Trần Duy Hưng",!0),ot(-440,0,40,2500,!0,"Đường Phạm Hùng - Khuất Duy Tiến (Vành Đai 3)",!0),ot(-160,0,22,2400,!0,"Đường Hoàng Minh Giám",!0),ot(-700,40,44,1400,!1,"Đại Lộ Thăng Long",!0),ot(340,0,22,2400,!0,"Phố Trung Kính",!0),ot(140,0,16,2200,!0,"Phố Nguyễn Thị Định",!1),ot(240,220,18,1400,!0,"Phố Vũ Trọng Phụng",!0),ot(290,240,18,1400,!0,"Phố Nguyễn Tuân",!0),ot(0,0,18,2400,!1,"Đường Nguyễn Thị Thập",!1),ot(0,90,16,2200,!1,"Phố Hoàng Ngân",!1),ot(0,-90,16,2e3,!1,"Phố Đỗ Quang",!1),ot(0,240,16,2200,!1,"Phố Quan Nhân",!1),ot(0,290,16,2e3,!1,"Phố Nhân Hòa & Chính Kinh",!1),ot(0,350,22,2400,!1,"Đường Ngụy Như Kon Tum",!0),ot(0,430,18,2200,!1,"Đường Nguyễn Huy Tưởng",!1),ot(0,-340,24,2400,!1,"Đường Nguyễn Chánh / Vũ Phạm Hàm",!0),ot(0,-260,18,1800,!1,"Đường Mạc Thái Tổ",!1),ot(0,-220,18,1800,!1,"Đường Mạc Thái Tông",!1),ot(-200,-460,24,2e3,!1,"Đường Mễ Trì",!0),ot(-200,-540,26,2e3,!1,"Đường Dương Đình Nghệ",!0);const nt=new Xn;V.add(nt);const ut=(se,D,ce=50,X=12.5,pe=!0)=>{if(!t.streetLabels)return null;const _e=document.createElement("canvas");_e.width=512,_e.height=128;const ae=_e.getContext("2d"),be=26,Ve=10,ye=12,ze=492,Xe=104;ae.beginPath(),ae.moveTo(Ve+be,ye),ae.lineTo(Ve+ze-be,ye),ae.quadraticCurveTo(Ve+ze,ye,Ve+ze,ye+be),ae.lineTo(Ve+ze,ye+Xe-be),ae.quadraticCurveTo(Ve+ze,ye+Xe,Ve+ze-be,ye+Xe),ae.lineTo(Ve+be,ye+Xe),ae.quadraticCurveTo(Ve,ye+Xe,Ve,ye+Xe-be),ae.lineTo(Ve,ye+be),ae.quadraticCurveTo(Ve,ye,Ve+be,ye),ae.closePath(),ae.fillStyle=O?"rgba(10, 18, 34, 0.95)":"rgba(255, 255, 255, 0.96)",ae.fill(),ae.lineWidth=pe?5:3.5,ae.strokeStyle=pe?O?"#38bdf8":"#0284c7":O?"#64748b":"#94a3b8",ae.stroke(),ae.fillStyle=pe?"#0284c7":"#475569",ae.beginPath(),ae.arc(68,64,28,0,Math.PI*2),ae.fill(),ae.fillStyle="#ffffff",ae.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',ae.textAlign="center",ae.textBaseline="middle",ae.fillText(pe?"ĐT":"HN",68,64),ae.fillStyle=O?"#ffffff":"#0f172a",ae.font=`bold ${pe?"32px":"28px"} -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", Roboto, sans-serif`,ae.textAlign="left",ae.fillText(se,114,64);const Re=new p0(_e);Re.minFilter=ei;const ct=new Od({map:Re,transparent:!0,depthTest:!1}),Ze=new s0(ct);return Ze.position.set(D[0],D[1]+16,D[2]),Ze.scale.set(ce,X,1),nt.add(Ze),Ze};ut("ĐƯỜNG HOÀNG ĐẠO THÚY",[0,10,-50],55,13.5,!0),ut("ĐƯỜNG LÊ VĂN LƯƠNG",[120,10,180],52,13,!0),ut("ĐƯỜNG TRẦN DUY HƯNG",[120,10,-180],52,13,!0),ut("ĐƯỜNG PHẠM HÙNG (VÀNH ĐAI 3)",[-440,10,-80],65,16,!0),ut("ĐƯỜNG HOÀNG MINH GIÁM",[-160,10,80],55,13.5,!0),ut("ĐẠI LỘ THĂNG LONG",[-720,10,40],56,14,!0),ut("ĐƯỜNG NGUYỄN THỊ THẬP",[-80,10,0],48,12,!1),ut("PHỐ NGUYỄN THỊ ĐỊNH",[140,10,-70],48,12,!1),ut("PHỐ HOÀNG NGÂN",[60,10,90],44,11,!1),ut("PHỐ ĐỖ QUANG",[60,10,-90],44,11,!1),ut("PHỐ VŨ TRỌNG PHỤNG",[240,10,240],46,11.5,!1),ut("PHỐ NGUYỄN TUÂN",[290,10,290],46,11.5,!1),ut("ĐƯỜNG NGỤY NHƯ KON TUM",[140,10,350],52,13,!1),ut("PHỐ TRUNG KÍNH",[340,10,50],46,11.5,!1),ut("KEANGNAM LANDMARK 72 (350M)",[-540,16,-320],68,17,!0),ut("TRUNG TÂM HỘI NGHỊ QUỐC GIA (NCC)",[-440,14,120],68,17,!0),ut("VINHOMES D'CAPITALE & BIG C",[-220,12,-180],62,15.5,!0),ut("HỒ ĐIỀU HÒA NHÂN CHÍNH (8.2 HA)",[-260,10,95],58,14.5,!0);const Tt=new Cn({color:O?165063:959977,roughness:.05,metalness:.85,transparent:!0,opacity:O?.92:.82}),yt=new Hi(160,140),Ot=new Lt(yt,Tt);Ot.rotation.x=-Math.PI/2,Ot.position.set(-260,.25,95),Ot.receiveShadow=!0,V.add(Ot);const Qt=new Hi(220,150),Jt=new Lt(Qt,Tt);Jt.rotation.x=-Math.PI/2,Jt.position.set(-540,.25,120),Jt.receiveShadow=!0,V.add(Jt);const Ut=new Xn;V.add(Ut);const Rt=!!r["VALVE-01"],he=!!r["VALVE-02"],ht=!!r["VALVE-03"],lt=!!r["VALVE-04"],pt=!!r["VALVE-05"],G=!!r["VALVE-06"],St=!!r["VALVE-07"],mt=!!r["VALVE-08"],qe=({pos:se=[0,0,0],size:D=[16,40,16],color:ce=3718648,name:X,id:pe,floors:_e,households:ae,demandFlow:be,intakePressure:Ve,connectionPipe:ye,cisternCapacity:ze,meterId:Xe,dma:Re,hasAntenna:ct=!1,isCutOff:Ze=!1,cutOffValveName:tn=""})=>{if(!t.buildings)return null;const Ct=new Xn;Ct.position.set(se[0],0,se[2]);const[qt,un,Yn]=D,mn=Ze?15680580:ce,hn=new Tr(qt,un,Yn),xn=new Cn({color:mn,metalness:Ze?.2:.32,roughness:.16,transparent:!0,opacity:Ze?.75:O?.94:.96,emissive:Ze?14427686:O?mn:0,emissiveIntensity:Ze?.5:.22}),gn=new Lt(hn,xn);gn.position.y=un/2,gn.castShadow=!0,gn.receiveShadow=!0,Ct.add(gn);const dn=new m0(hn),ti=new Fd(dn,new Sc({color:Ze?16557477:O?3718648:165063,linewidth:2}));gn.add(ti);const hi=new er(qt*.18,qt*.18,5,16),di=new Cn({color:Ze?6583435:165063,metalness:.65,roughness:.2}),ni=new Lt(hi,di);if(ni.position.set(0,un+2.5,0),Ct.add(ni),ct){const Kt=new er(.3,.5,20,8),Ar=new Cn({color:14870768,metalness:.85}),Ri=new Lt(Kt,Ar);Ri.position.set(0,un+12,0),Ct.add(Ri);const br=new _a(1.2,8,8),ji=new ga({color:Ze?16096779:15680580}),or=new Lt(br,ji);or.position.set(0,un+22,0),Ct.add(or)}const fi={name:X,id:pe,type:"Công Trình & Tòa Nhà Đô Thị",status:Ze?`⚠️ ĐÃ CẮT NƯỚC CỤC BỘ (Do đóng chốt khóa: ${tn})`:"Cấp nước liên tục 24/7 (Đạt chuẩn QCVN 01-1:2018/BXD)",floors:`${_e} tầng`,households:ae||"500 căn hộ",flow:Ze?"0.0 m³/h (Mất áp)":be||"45.0 m³/h",pressure:Ze?"0.00 bar (MẤT NƯỚC)":Ve||"3.25 bar",elevation:"+17.2m ASL",connectionPipe:ye||"DN65 HDPE",cisternCapacity:ze||"800 m³",meterId:Xe||`AMR-${pe}`,dma:Re||"DMA THNC-02",isCutOff:Ze,cutOffValveName:tn};return Ct.userData={name:X,id:pe,type:"Building",data:fi},gn.userData=Ct.userData,_.current.push(gn),Ut.add(Ct),Ct},Ce=({center:se,size:D,rows:ce=2,cols:X=6,heightRange:pe=[15,22],zoneId:_e,isCutOff:ae,cutOffValveName:be,blockName:Ve="Khu Nhà Phố Liền Kề",dma:ye="DMA THNC-02"})=>{if(!t.buildings)return;const[ze,Xe]=se,[Re,ct]=D,Ze=Re/X,tn=ct/ce,Ct=new Xn;for(let qt=0;qt<ce;qt++)for(let un=0;un<X;un++){const Yn=ze-Re/2+(un+.5)*Ze,mn=Xe-ct/2+(qt+.5)*tn,hn=(Math.sin(Yn*12.9898+mn*78.233)*43758.5453%1+1)%1,xn=pe[0]+hn*(pe[1]-pe[0]),gn=Ze*.88,dn=tn*.86,ti=new Tr(gn,xn,dn),hi=O?[3359061,1976635,4674921,988970,223649]:[15857145,14870768,13358561,9741240,12573694],di=Math.floor(hn*hi.length)%hi.length,ni=new Cn({color:ae?15680580:hi[di],roughness:.5,metalness:.1,transparent:ae,opacity:ae?.75:1,emissive:ae?10033947:0,emissiveIntensity:ae?.3:0}),fi=new Lt(ti,ni);fi.position.set(Yn,xn/2,mn),fi.castShadow=!0,fi.receiveShadow=!0;const Kt=new er(gn*.18,gn*.18,2.2,12),Ar=new Cn({color:9741240,metalness:.85,roughness:.2}),Ri=new Lt(Kt,Ar);Ri.position.set(Yn,xn+1.1,mn),Ct.add(Ri);const br=new m0(ti),ji=new Fd(br,new Sc({color:ae?16557477:O?3718648:6583435,linewidth:1}));fi.add(ji);const or={name:`${Ve} (Lô ${qt+1}-${un+1})`,id:`HOUSE-${_e}-${qt+1}-${un+1}`,type:"Nhà Phố / Shophouse Phân Lô",status:ae?`⚠️ MẤT NƯỚC (Do đóng van: ${be})`:"Cấp nước ổn định",floors:`${Math.round(xn/3.6)} tầng`,households:"1 hộ gia đình + mặt bằng kinh doanh",flow:ae?"0.0 m³/h":"0.45 m³/h",pressure:ae?"0.00 bar":"3.22 bar",elevation:"+16.5m ASL",connectionPipe:"DN32 HDPE",cisternCapacity:"2.5 m³ bồn Inox",meterId:`AMR-H-${_e}-${qt+1}${un+1}`,dma:ye,isCutOff:ae,cutOffValveName:be};fi.userData={name:`${Ve} (Lô ${qt+1}-${un+1})`,id:`HOUSE-${_e}-${qt+1}-${un+1}`,type:"Building",data:or},_.current.push(fi),Ct.add(fi)}Ut.add(Ct)};qe({pos:[-540,0,-320],size:[48,165,48],color:O?165063:223649,name:"Keangnam Hanoi Landmark 72 (350m - 72 Tầng)",id:"BLDG-KEANGNAM-72",floors:72,households:"Khách sạn InterContinental + 200,000m² VP",demandFlow:"142.0 m³/h",intakePressure:"3.42 bar",connectionPipe:"DN150 Gang cầu K9 kép",cisternCapacity:"4,500 m³",meterId:"AMR-KEANGNAM-MAIN",dma:"DMA Phía Tây",hasAntenna:!0,isCutOff:G,cutOffValveName:"Van V-KNG-06"}),qe({pos:[-590,0,-320],size:[32,105,32],color:O?223649:165063,name:"Tháp Căn Hộ Keangnam A (48 Tầng)",id:"BLDG-KEANGNAM-A",floors:48,households:"460 căn hộ cao cấp",demandFlow:"48.0 m³/h",intakePressure:"3.38 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-KEANGNAM-TOWER-A",dma:"DMA Phía Tây",isCutOff:G,cutOffValveName:"Van V-KNG-06"}),qe({pos:[-490,0,-320],size:[32,105,32],color:O?223649:165063,name:"Tháp Căn Hộ Keangnam B (48 Tầng)",id:"BLDG-KEANGNAM-B",floors:48,households:"460 căn hộ cao cấp",demandFlow:"48.0 m³/h",intakePressure:"3.38 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-KEANGNAM-TOWER-B",dma:"DMA Phía Tây",isCutOff:G,cutOffValveName:"Van V-KNG-06"}),qe({pos:[-460,0,-220],size:[30,80,26],color:O?165063:223649,name:"Tòa Tháp Handico Tower (33 Tầng)",id:"BLDG-HANDICO",floors:33,households:"Trụ sở Tổng Công ty Handico",demandFlow:"32.0 m³/h",intakePressure:"3.35 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-HANDICO",dma:"DMA Phía Tây",isCutOff:G,cutOffValveName:"Van V-KNG-06"}),qe({pos:[-460,0,-170],size:[28,68,24],color:O?165063:223649,name:"Tòa Tháp CEO Tower (27 Tầng)",id:"BLDG-CEO",floors:27,households:"Tổ hợp Văn phòng CEO Group",demandFlow:"28.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"700 m³",meterId:"AMR-CEO",dma:"DMA Phía Tây",isCutOff:G,cutOffValveName:"Van V-KNG-06"}),qe({pos:[-440,0,-110],size:[56,42,56],color:O?1096065:366185,name:"Bảo Tàng Hà Nội (Kim Tự Tháp Ngược)",id:"BLDG-MUSEUM",floors:4,households:"Bảo tàng Quốc gia & Khu triển lãm 5 ha",demandFlow:"24.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"600 m³",meterId:"AMR-MUSEUM",dma:"DMA Phía Tây",isCutOff:G,cutOffValveName:"Van V-KNG-06"}),qe({pos:[-440,0,140],size:[85,36,75],color:O?14251782:11817737,name:"Trung Tâm Hội Nghị Quốc Gia (NCC - 64 ha)",id:"BLDG-NCC",floors:5,households:"Hội trường 3,800 chỗ + Khuôn viên cảnh quan",demandFlow:"85.0 m³/h",intakePressure:"3.35 bar",connectionPipe:"DN100 HDPE kép từ Đại lộ Thăng Long",cisternCapacity:"2,500 m³",meterId:"AMR-NCC-MAIN",dma:"DMA Hội Nghị Quốc Gia"}),qe({pos:[-280,0,-180],size:[70,24,60],color:O?14427686:12131356,name:"Đại Siêu Thị Big C Thăng Long (GO!)",id:"BLDG-BIG-C",floors:3,households:"Trung tâm mua sắm bán lẻ 12,000m²",demandFlow:"65.0 m³/h",intakePressure:"3.28 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-BIGC-01",dma:"DMA THNC-01",isCutOff:pt,cutOffValveName:"Van V-DCP-05"}),[-230,-190,-150].forEach((se,D)=>{qe({pos:[se,0,-220],size:[26,95+D*4,26],color:O?165063:223649,name:`Tổ Hợp Vinhomes D'Capitale C${D+1} (${40+D} Tầng)`,id:`BLDG-DCAPITALE-${D+1}`,floors:40+D,households:"520 căn hộ cao cấp",demandFlow:"52.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,400 m³",meterId:`AMR-DCAPITALE-C${D+1}`,dma:"DMA THNC-01",isCutOff:pt,cutOffValveName:"Van V-DCP-05"}),qe({pos:[se,0,-260],size:[26,92+D*4,26],color:O?223649:165063,name:`Tổ Hợp Vinhomes D'Capitale C${D+4} (${39+D} Tầng)`,id:`BLDG-DCAPITALE-${D+4}`,floors:39+D,households:"500 căn hộ cao cấp",demandFlow:"50.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,350 m³",meterId:`AMR-DCAPITALE-C${D+4}`,dma:"DMA THNC-01",isCutOff:pt,cutOffValveName:"Van V-DCP-05"})}),qe({pos:[-360,0,40],size:[32,98,30],color:O?165063:223649,name:"Tháp Thăng Long Number One A (40 Tầng)",id:"BLDG-TL-NO1-A",floors:40,households:"540 căn hộ xanh",demandFlow:"54.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-TL-NO1-A",dma:"DMA THNC-01",isCutOff:pt,cutOffValveName:"Van V-DCP-05"}),qe({pos:[-360,0,85],size:[32,98,30],color:O?165063:223649,name:"Tháp Thăng Long Number One B (40 Tầng)",id:"BLDG-TL-NO1-B",floors:40,households:"540 căn hộ xanh",demandFlow:"54.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-TL-NO1-B",dma:"DMA THNC-01",isCutOff:pt,cutOffValveName:"Van V-DCP-05"}),qe({pos:[-380,0,-30],size:[28,76,26],color:O?223649:165063,name:"Tòa Tháp Viglacera Tower (30 Tầng)",id:"BLDG-VIGLACERA",floors:30,households:"Trụ sở Tổng Công ty Viglacera",demandFlow:"30.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-VIGLACERA",dma:"DMA THNC-01",isCutOff:pt,cutOffValveName:"Van V-DCP-05"}),qe({pos:[65,0,-215],size:[38,72,32],color:O?14251782:11817737,name:"Tổ Hợp Charmvit Tower & Grand Plaza",id:"BLDG-CHARMVIT",floors:27,households:"540 phòng KS 5 sao & 45,000m² VP Đại sứ quán Hàn Quốc",demandFlow:"58.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,800 m³",meterId:"AMR-CHARMVIT-PLAZA",dma:"DMA THNC-01",isCutOff:lt,cutOffValveName:"Van V-TDN-04"}),[-20,20,60].forEach((se,D)=>{qe({pos:[se,0,-140],size:[24,72,22],color:O?165063:223649,name:`Tòa Căn Hộ Cao Cấp N04-${String.fromCharCode(65+D)} (29 Tầng)`,id:`BLDG-N04-${String.fromCharCode(65+D)}`,floors:29,households:"360 căn hộ cao cấp",demandFlow:"36.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"950 m³",meterId:`AMR-N04-${String.fromCharCode(65+D)}`,dma:"DMA THNC-01",isCutOff:lt,cutOffValveName:"Van V-TDN-04"})}),qe({pos:[40,0,-85],size:[28,85,26],color:O?223649:165063,name:"Tòa Tháp N05-29T1 Hoàng Đạo Thúy (34 Tầng)",id:"BLDG-N05-34T1",floors:34,households:"480 căn hộ",demandFlow:"48.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-N05-34T1",dma:"DMA THNC-01",isCutOff:lt,cutOffValveName:"Van V-TDN-04"}),qe({pos:[80,0,-85],size:[28,85,26],color:O?223649:165063,name:"Tòa Tháp N05-29T2 Hoàng Đạo Thúy (34 Tầng)",id:"BLDG-N05-34T2",floors:34,households:"480 căn hộ",demandFlow:"48.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-N05-34T2",dma:"DMA THNC-01",isCutOff:lt,cutOffValveName:"Van V-TDN-04"}),qe({pos:[25,0,20],size:[26,82,26],color:O?165063:223649,name:"Tòa Tháp Biểu Tượng 34T Hoàng Đạo Thúy",id:"BLDG-34T-HDT",floors:34,households:"650 căn hộ (~2,600 cư dân)",demandFlow:"58.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE nối từ trục D600",cisternCapacity:"1,500 m³",meterId:"AMR-34T-MAIN",dma:"DMA THNC-02",hasAntenna:!0,isCutOff:Rt,cutOffValveName:"Van V-HDT-01"}),qe({pos:[-35,0,30],size:[20,58,18],color:O?223649:165063,name:"Tòa Chung Cư 24T1 Hoàng Đạo Thúy",id:"BLDG-24T1",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T1",dma:"DMA THNC-02",isCutOff:Rt,cutOffValveName:"Van V-HDT-01"}),qe({pos:[-35,0,-30],size:[20,58,18],color:O?223649:165063,name:"Tòa Chung Cư 24T2 Hoàng Đạo Thúy",id:"BLDG-24T2",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T2",dma:"DMA THNC-02",isCutOff:Rt,cutOffValveName:"Van V-HDT-01"}),qe({pos:[-75,0,0],size:[20,58,18],color:O?223649:165063,name:"Tòa Chung Cư 24T3 Hoàng Đạo Thúy",id:"BLDG-24T3",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T3",dma:"DMA THNC-02",isCutOff:Rt,cutOffValveName:"Van V-HDT-01"}),[75,115,155].forEach((se,D)=>{qe({pos:[42,0,se],size:[18,44,16],color:O?959977:165063,name:`Tòa Chung Cư 17T${D+1} Hoàng Đạo Thúy`,id:`BLDG-17T${D+1}`,floors:17,households:"180 căn hộ",demandFlow:"18.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:`AMR-17T${D+1}`,dma:"DMA THNC-02",isCutOff:Rt,cutOffValveName:"Van V-HDT-01"}),qe({pos:[-35,0,se],size:[18,44,16],color:O?959977:165063,name:`Tòa Chung Cư 17T${D+4} Hoàng Đạo Thúy`,id:`BLDG-17T${D+4}`,floors:17,households:"180 căn hộ",demandFlow:"18.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:`AMR-17T${D+4}`,dma:"DMA THNC-02",isCutOff:Rt,cutOffValveName:"Van V-HDT-01"})}),qe({pos:[35,0,155],size:[30,95,30],color:O?165063:481669,name:"Tòa Tháp Diamond Flower Tower (36 Tầng - 176m)",id:"BLDG-DIAMOND-FLOWER",floors:36,households:"380 căn hộ + 35,000m² VP hạng A",demandFlow:"48.0 m³/h",intakePressure:"3.28 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,600 m³",meterId:"AMR-DIAMOND-01",dma:"DMA THNC-02",hasAntenna:!0,isCutOff:ht,cutOffValveName:"Van V-LVL-03"}),qe({pos:[80,0,155],size:[26,72,24],color:O?223649:165063,name:"Tổ Hợp Chung Cư Star City Lê Văn Lương (27 Tầng)",id:"BLDG-STAR-CITY",floors:27,households:"420 căn hộ cao cấp",demandFlow:"42.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:"AMR-STAR-CITY",dma:"DMA THNC-02",isCutOff:ht,cutOffValveName:"Van V-LVL-03"}),qe({pos:[130,0,155],size:[28,72,26],color:O?165063:223649,name:"Tòa Tháp The Golden Palm (27 Tầng)",id:"BLDG-GOLDEN-PALM",floors:27,households:"400 căn hộ",demandFlow:"40.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"1,000 m³",meterId:"AMR-GOLDEN-PALM",dma:"DMA THNC-02",isCutOff:ht,cutOffValveName:"Van V-LVL-03"}),qe({pos:[-60,0,155],size:[28,86,26],color:O?165063:223649,name:"Tòa Tháp HUD Tower A (32 Tầng)",id:"BLDG-HUD-TOWER-A",floors:32,households:"Trụ sở Tổng Công ty Đầu tư Phát triển Nhà HUD",demandFlow:"36.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-HUD-A",dma:"DMA THNC-02",isCutOff:ht,cutOffValveName:"Van V-LVL-03"}),qe({pos:[-100,0,155],size:[26,74,24],color:O?223649:165063,name:"Tòa Tháp HUD Tower B (27 Tầng)",id:"BLDG-HUD-TOWER-B",floors:27,households:"Văn phòng thương mại & tài chính",demandFlow:"30.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"900 m³",meterId:"AMR-HUD-B",dma:"DMA THNC-02",isCutOff:ht,cutOffValveName:"Van V-LVL-03"}),qe({pos:[180,0,155],size:[28,70,24],color:O?223649:165063,name:"Hội Sở MB Grand Tower (25 Tầng)",id:"BLDG-MB-TOWER",floors:25,households:"Hội sở Ngân hàng TMCP Quân Đội",demandFlow:"26.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"750 m³",meterId:"AMR-MB-TOWER",dma:"DMA THNC-02",isCutOff:ht,cutOffValveName:"Van V-LVL-03"}),[-150,-110].forEach((se,D)=>{qe({pos:[se,0,45],size:[32,65,34],color:O?14251782:11817737,name:`Mandarin Garden Block ${String.fromCharCode(65+D)} (29 Tầng)`,id:`BLDG-MANDARIN-${String.fromCharCode(65+D)}`,floors:29,households:"260 căn hộ cao cấp",demandFlow:"26.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"850 m³",meterId:`AMR-MANDARIN-${String.fromCharCode(65+D)}`,dma:"DMA THNC-03",isCutOff:he,cutOffValveName:"Van V-HMG-02"}),qe({pos:[se,0,-5],size:[32,65,34],color:O?14251782:11817737,name:`Mandarin Garden Block ${String.fromCharCode(67+D)} (29 Tầng)`,id:`BLDG-MANDARIN-${String.fromCharCode(67+D)}`,floors:29,households:"260 căn hộ cao cấp",demandFlow:"26.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"850 m³",meterId:`AMR-MANDARIN-${String.fromCharCode(67+D)}`,dma:"DMA THNC-03",isCutOff:he,cutOffValveName:"Van V-HMG-02"})}),qe({pos:[-135,0,-95],size:[52,24,40],color:O?1096065:366185,name:"Trường THPT Chuyên Hà Nội - Amsterdam",id:"BLDG-AMS",floors:5,households:"3,200 học sinh & giáo viên",demandFlow:"32.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:"AMR-AMS-SCHOOL",dma:"DMA THNC-03",isCutOff:he,cutOffValveName:"Van V-HMG-02"}),[160,200].forEach((se,D)=>{qe({pos:[se,0,270],size:[32,74,28],color:O?165063:223649,name:`Tổ Hợp Hapulico Complex Block ${String.fromCharCode(65+D)} (31 Tầng)`,id:`BLDG-HAPULICO-${String.fromCharCode(65+D)}`,floors:31,households:"380 căn hộ",demandFlow:"38.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:`AMR-HAPULICO-${String.fromCharCode(65+D)}`,dma:"DMA THNC-03",isCutOff:St,cutOffValveName:"Van V-HAP-07"}),qe({pos:[se,0,310],size:[32,74,28],color:O?223649:165063,name:`Tổ Hợp Hapulico Complex Block ${String.fromCharCode(67+D)} (31 Tầng)`,id:`BLDG-HAPULICO-${String.fromCharCode(67+D)}`,floors:31,households:"380 căn hộ",demandFlow:"38.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:`AMR-HAPULICO-${String.fromCharCode(67+D)}`,dma:"DMA THNC-03",isCutOff:St,cutOffValveName:"Van V-HAP-07"})}),qe({pos:[110,0,270],size:[30,68,28],color:O?165063:223649,name:"Tổ Hợp Chung Cư Golden West (27 Tầng)",id:"BLDG-GOLDEN-WEST",floors:27,households:"350 căn hộ",demandFlow:"35.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"900 m³",meterId:"AMR-GOLDEN-WEST",dma:"DMA THNC-03",isCutOff:St,cutOffValveName:"Van V-HAP-07"}),qe({pos:[250,0,340],size:[30,85,28],color:O?165063:223649,name:"Tổ Hợp Imperia Garden Tháp A (35 Tầng)",id:"BLDG-IMPERIA-A",floors:35,households:"450 căn hộ cao cấp",demandFlow:"45.0 m³/h",intakePressure:"3.16 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,300 m³",meterId:"AMR-IMPERIA-A",dma:"DMA THNC-03",isCutOff:St,cutOffValveName:"Van V-HAP-07"}),qe({pos:[290,0,340],size:[30,85,28],color:O?223649:165063,name:"Tổ Hợp Imperia Garden Tháp B (35 Tầng)",id:"BLDG-IMPERIA-B",floors:35,households:"450 căn hộ cao cấp",demandFlow:"45.0 m³/h",intakePressure:"3.16 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,300 m³",meterId:"AMR-IMPERIA-B",dma:"DMA THNC-03",isCutOff:St,cutOffValveName:"Van V-HAP-07"});const Xt=new Xn;for(let se=0;se<4;se++)for(let D=0;D<4;D++){const ce=65+se*16,X=-30+D*18,pe=new Tr(10,14,10),_e=new Cn({color:mt?15680580:O?6583435:9741240,roughness:.5}),ae=new Lt(pe,_e);ae.position.set(ce,7,X),ae.castShadow=!0,Xt.add(ae)}Xt.userData={name:"Khu Biệt Thự & Liền Kề BT1 - BT6",id:"BLDG-VILLAS",type:"Khu Biệt Thự Thấp Tầng",data:{name:"Khu Biệt Thự & Liền Kề BT1 - BT6",id:"BLDG-VILLAS",type:"Khu Biệt Thự Thấp Tầng",status:mt?"⚠️ MẤT NƯỚC DO KHÓA VAN V-NTT-08":"Cấp nước ổn định",floors:"3.5 tầng",households:"150 căn biệt thự",flow:mt?"0.0 m³/h":"22.5 m³/h",pressure:mt?"0.00 bar":"3.18 bar",elevation:"+16.5m ASL",connectionPipe:"DN40 - DN50 HDPE",cisternCapacity:"15 m³ / biệt thự",meterId:"Cụm đồng hồ cơ sở Class C",dma:"DMA THNC-02",isCutOff:mt,cutOffValveName:"Van V-NTT-08"}},Xt.children.forEach(se=>{se.userData=Xt.userData,_.current.push(se)}),Ut.add(Xt),qe({pos:[110,0,35],size:[36,18,30],color:O?1096065:366185,name:"Trường Liên Cấp Tiểu Học & THCS Ngôi Sao Hà Nội",id:"BLDG-NGOI-SAO",floors:5,households:"2,200 học sinh & CBGV",demandFlow:"24.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"400 m³",meterId:"AMR-NGOI-SAO",dma:"DMA THNC-02",isCutOff:mt,cutOffValveName:"Van V-NTT-08"}),Ce({center:[75,45],size:[110,60],rows:2,cols:8,heightRange:[15,21],zoneId:"HN-NTT",isCutOff:mt,cutOffValveName:"Van V-NTT-08",blockName:"Phố Hoàng Ngân - Nhà Phố Liền Kề"}),Ce({center:[75,135],size:[110,60],rows:2,cols:8,heightRange:[16,24],zoneId:"HN-LVL",isCutOff:ht,cutOffValveName:"Van V-LVL-03",blockName:"Phố Hoàng Ngân - Shophouse Lê Văn Lương"}),Ce({center:[75,-45],size:[110,60],rows:2,cols:8,heightRange:[16,22],zoneId:"DQ-NTT",isCutOff:lt,cutOffValveName:"Van V-TDN-04",blockName:"Phố Đỗ Quang - Dãy Nhà Phố Ẩm Thực"}),Ce({center:[75,-135],size:[110,60],rows:2,cols:8,heightRange:[16,24],zoneId:"DQ-TDH",isCutOff:lt,cutOffValveName:"Van V-TDN-04",blockName:"Phố Đỗ Quang - Shophouse Chuyên Gia"}),Ce({center:[200,45],size:[95,60],rows:2,cols:6,heightRange:[15,22],zoneId:"NTD-HN",isCutOff:mt,cutOffValveName:"Van V-NTT-08",blockName:"Phố Nguyễn Thị Định - Dãy Nhà Phố Thương Mại"}),Ce({center:[200,135],size:[95,60],rows:2,cols:6,heightRange:[16,24],zoneId:"NTD-LVL",isCutOff:ht,cutOffValveName:"Van V-LVL-03",blockName:"Phố Nguyễn Thị Định - Shophouse Dịch Vụ"}),Ce({center:[120,215],size:[170,40],rows:2,cols:10,heightRange:[14,20],zoneId:"QN-01",isCutOff:mt,cutOffValveName:"Van V-NTT-08",blockName:"Khu Dân Cư Phố Quan Nhân"}),Ce({center:[120,265],size:[170,40],rows:2,cols:10,heightRange:[14,20],zoneId:"NH-01",isCutOff:St,cutOffValveName:"Van V-HAP-07",blockName:"Khu Dân Cư Phố Nhân Hòa & Chính Kinh"}),Ce({center:[230,310],size:[110,50],rows:2,cols:8,heightRange:[15,22],zoneId:"VTP-NNKT",isCutOff:St,cutOffValveName:"Van V-HAP-07",blockName:"Phố Vũ Trọng Phụng - Shophouse Chợ Thuốc"}),Ce({center:[290,390],size:[110,55],rows:2,cols:8,heightRange:[16,24],zoneId:"NT-NHT",isCutOff:St,cutOffValveName:"Van V-HAP-07",blockName:"Phố Nguyễn Tuân - Dãy Nhà Liền Kề"}),Ce({center:[-80,50],size:[100,55],rows:2,cols:7,heightRange:[15,22],zoneId:"34T-IN",isCutOff:Rt,cutOffValveName:"Van V-HDT-01",blockName:"Khu Nhà Phố Nội Khu Hoàng Đạo Thúy"}),Ce({center:[-80,-45],size:[100,55],rows:2,cols:7,heightRange:[15,22],zoneId:"24T-IN",isCutOff:Rt,cutOffValveName:"Van V-HDT-01",blockName:"Khu Liền Kề Cụm 24T Hoàng Đạo Thúy"}),Ce({center:[-240,250],size:[130,80],rows:3,cols:8,heightRange:[15,22],zoneId:"HNC-KDT",isCutOff:pt,cutOffValveName:"Van V-DCP-05",blockName:"Khu Đô Thị Ven Hồ Điều Hòa Nhân Chính"}),Ce({center:[-320,340],size:[130,70],rows:2,cols:8,heightRange:[14,20],zoneId:"KDT-S",isCutOff:pt,cutOffValveName:"Van V-DCP-05",blockName:"Khu Dân Cư Nam Khuất Duy Tiến"}),Ce({center:[-300,-380],size:[160,65],rows:2,cols:10,heightRange:[15,22],zoneId:"MTH-01",isCutOff:G,cutOffValveName:"Van V-KNG-06",blockName:"Khu Đô Thị Mễ Trì Hạ - Sudico"}),Ce({center:[-480,-450],size:[130,55],rows:2,cols:8,heightRange:[14,20],zoneId:"MT-W",isCutOff:G,cutOffValveName:"Van V-KNG-06",blockName:"Khu Liền Kề Phía Tây Mễ Trì"}),Ce({center:[240,-260],size:[140,65],rows:2,cols:9,heightRange:[15,22],zoneId:"TH-TY1",isCutOff:lt,cutOffValveName:"Van V-TDN-04",blockName:"Khu Đô Thị Trung Yên - Mạc Thái Tổ"}),Ce({center:[240,-330],size:[140,55],rows:2,cols:9,heightRange:[15,22],zoneId:"TH-TY2",isCutOff:lt,cutOffValveName:"Van V-TDN-04",blockName:"Khu Phân Lô Phố Vũ Phạm Hàm"});const st=new Xn;V.add(st);const We=(se,D,ce,X,pe,_e,ae,be)=>{if(ae===1&&!t.pipesPrimary||ae===2&&!t.pipesSecondary||ae===3&&!t.pipesTertiary||ae===4&&!t.pipesService||!t.pipes)return null;const Ve=ae===1?Math.max(D*3.4,5.4):ae===2?Math.max(D*3,3.6):Math.max(D*2.8,2.2),ye=ae===1?7.2:ae===2?5.8:4.5,ze=se.map(qt=>new N(qt.x,Math.max(qt.y,0)+ye,qt.z)),Xe=new Og(ze),Re=new nf(Xe,64,Ve,14,!1);let ct,Ze;ae===1?(ct=O?61695:165063,Ze=1.35):ae===2?(ct=O?16755200:14251782,Ze=1.25):(ct=O?12616956:8141549,Ze=1.05);const tn=new Cn({color:_e?ct:4674921,roughness:.15,metalness:.45,emissive:_e&&O?ct:0,emissiveIntensity:_e?Ze:0,transparent:!0,opacity:_e?.96:.6}),Ct=new Lt(Re,tn);if(Ct.castShadow=!0,Ct.receiveShadow=!0,Ct.userData={name:X,id:pe,type:"Pipe",data:be},st.add(Ct),_.current.push(Ct),_e){const qt=ae===1?30:ae===2?20:12,un=Ve*1.55,Yn=new _a(un,14,14),mn=new Cn({color:16777215,emissive:ae===1?61695:ae===2?16755200:15324671,emissiveIntensity:4.2,roughness:.05,metalness:.1});for(let hn=0;hn<qt;hn++){const xn=new Lt(Yn,mn);V.add(xn),A.current.push({mesh:xn,curve:Xe,t:hn/qt,speed:ae===1?.0042:ae===2?.0034:.0025})}}return Ct};We([new N(-1200,1.4,40),new N(-700,1.4,40),new N(-440,1.4,40)],1.6,O?165063:223649,"Trục Truyền Dẫn Cấp 1 D800 Đại Lộ Thăng Long","PIPE-TRUNK-DLTL-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Đại Lộ Thăng Long",id:"PIPE-TRUNK-DLTL-D800",tier:"Cấp 1 (Transmission D800)",status:"Đang truyền dẫn công suất lớn (NMN Sông Đà)",diameter:"DN800 Gang Dẻo K9",flow:"4,850.0 m³/h",pressure:"3.85 bar",dma:"Trục Truyền Dẫn Liên Vùng"}),We([new N(-440,1.4,-1100),new N(-440,1.4,-400),new N(-440,1.4,40),new N(-440,1.4,600),new N(-440,1.4,1100)],1.6,O?165063:223649,"Trục Truyền Dẫn Cấp 1 D800 Phạm Hùng - Vành Đai 3","PIPE-TRUNK-PH-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Phạm Hùng - Vành Đai 3",id:"PIPE-TRUNK-PH-D800",tier:"Cấp 1 (Transmission D800)",status:"Vận hành tối ưu",diameter:"DN800 Gang Dẻo K9",flow:"4,200.0 m³/h",pressure:"3.75 bar",dma:"Trục Truyền Dẫn Liên Vùng"}),We([new N(-440,1.4,180),new N(-160,1.4,180),new N(0,1.4,180),new N(340,1.4,180),new N(650,1.4,180)],1.4,O?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Lê Văn Lương","PIPE-TRUNK-LVL-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Lê Văn Lương",id:"PIPE-TRUNK-LVL-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nguồn chính DMA THNC-02 & THNC-03",diameter:"DN600 Gang Dẻo K9",flow:"3,250.0 m³/h",pressure:"3.45 bar",dma:"DMA THNC-02"}),We([new N(-440,1.4,-180),new N(-160,1.4,-180),new N(0,1.4,-180),new N(340,1.4,-180),new N(650,1.4,-180)],1.4,O?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Trần Duy Hưng","PIPE-TRUNK-TDH-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Trần Duy Hưng",id:"PIPE-TRUNK-TDH-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nguồn chính DMA THNC-01",diameter:"DN600 Gang Dẻo K9",flow:"3,400.0 m³/h",pressure:"3.50 bar",dma:"DMA THNC-01"}),We([new N(0,1.4,-180),new N(0,1.4,0),new N(0,1.4,180),new N(0,1.4,350)],1.4,O?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Hoàng Đạo Thúy","PIPE-TRUNK-HDT-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Hoàng Đạo Thúy",id:"PIPE-TRUNK-HDT-D600",tier:"Cấp 1 (Transmission D600)",status:"Trục xương sống KĐT Trung Hòa - Nhân Chính",diameter:"DN600 Gang Dẻo K9",flow:"2,900.0 m³/h",pressure:"3.38 bar",dma:"DMA THNC-02"}),We([new N(340,1.4,-450),new N(340,1.4,-180),new N(340,1.4,180),new N(340,1.4,450)],1.4,O?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Trung Kính","PIPE-TRUNK-TK-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Trung Kính",id:"PIPE-TRUNK-TK-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nước phía Đông quận",diameter:"DN600 Gang Dẻo",flow:"2,400.0 m³/h",pressure:"3.35 bar",dma:"DMA Phía Đông"}),We([new N(-160,1.2,0),new N(-75,1.2,0),new N(0,1.2,0),new N(75,1.2,0),new N(140,1.2,0),new N(340,1.2,0)],1.1,O?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Nguyễn Thị Thập","PIPE-DIST-NTT-D300",!mt,2,{name:"Tuyến Phân Phối Cấp 2 D300 Nguyễn Thị Thập",id:"PIPE-DIST-NTT-D300",tier:"Cấp 2 (Distribution D300)",status:mt?"ĐÃ CẮT NƯỚC QUA VAN V-NTT-08":"Bình thường",diameter:"DN300 HDPE PE100",flow:mt?"0.0 m³/h":"880 m³/h",pressure:mt?"0.00 bar":"3.25 bar",dma:"DMA THNC-02"}),We([new N(-160,1.2,350),new N(-160,1.2,180),new N(-160,1.2,0),new N(-160,1.2,-95),new N(-160,1.2,-180)],1,O?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Hoàng Minh Giám","PIPE-DIST-HMG-D250",!he,2,{name:"Tuyến Phân Phối Cấp 2 D250 Hoàng Minh Giám",id:"PIPE-DIST-HMG-D250",tier:"Cấp 2 (Distribution D250)",status:he?"ĐÃ CẮT NƯỚC QUA VAN V-HMG-02":"Bình thường",diameter:"DN250 HDPE PE100",flow:he?"0.0 m³/h":"750 m³/h",pressure:he?"0.00 bar":"3.24 bar",dma:"DMA THNC-03"}),We([new N(140,1.2,-180),new N(140,1.2,-90),new N(140,1.2,0),new N(140,1.2,180)],1,O?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Nguyễn Thị Định","PIPE-DIST-NTD-D250",!lt,2,{name:"Tuyến Phân Phối Cấp 2 D250 Nguyễn Thị Định",id:"PIPE-DIST-NTD-D250",tier:"Cấp 2 (Distribution D250)",status:lt?"ĐÃ CẮT NƯỚC QUA VAN V-TDN-04":"Bình thường",diameter:"DN250 HDPE",flow:lt?"0.0 m³/h":"620 m³/h",pressure:lt?"0.00 bar":"3.22 bar",dma:"DMA THNC-01"}),We([new N(-160,1.2,350),new N(0,1.2,350),new N(160,1.2,350),new N(240,1.2,350),new N(340,1.2,350)],1.1,O?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Ngụy Như Kon Tum","PIPE-DIST-NNKT-D300",!St,2,{name:"Tuyến Phân Phối Cấp 2 D300 Ngụy Như Kon Tum",id:"PIPE-DIST-NNKT-D300",tier:"Cấp 2 (Distribution D300)",status:St?"ĐÃ CẮT NƯỚC QUA VAN V-HAP-07":"Bình thường",diameter:"DN300 HDPE",flow:St?"0.0 m³/h":"820 m³/h",pressure:St?"0.00 bar":"3.18 bar",dma:"DMA THNC-03"}),We([new N(240,1.2,180),new N(240,1.2,270),new N(240,1.2,350)],1,O?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Vũ Trọng Phụng","PIPE-DIST-VTP-D250",!St,2,{name:"Tuyến Phân Phối Cấp 2 D250 Vũ Trọng Phụng",id:"PIPE-DIST-VTP-D250",tier:"Cấp 2 (Distribution D250)",status:St?"ĐÃ CẮT NƯỚC QUA VAN V-HAP-07":"Bình thường",diameter:"DN250 HDPE",flow:St?"0.0 m³/h":"540 m³/h",pressure:St?"0.00 bar":"3.16 bar",dma:"DMA THNC-03"}),We([new N(-440,1.2,-180),new N(-280,1.2,-180),new N(-190,1.2,-180),new N(-160,1.2,-180)],1.1,O?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Ven Vinhomes D'Capitale","PIPE-DIST-DCP-D300",!pt,2,{name:"Tuyến Phân Phối Cấp 2 D300 Ven Vinhomes D'Capitale",id:"PIPE-DIST-DCP-D300",tier:"Cấp 2 (Distribution D300)",status:pt?"ĐÃ CẮT NƯỚC QUA VAN V-DCP-05":"Bình thường",diameter:"DN300 HDPE",flow:pt?"0.0 m³/h":"960 m³/h",pressure:pt?"0.00 bar":"3.30 bar",dma:"DMA THNC-01"}),We([new N(-440,1.2,-320),new N(-540,1.2,-320),new N(-540,1.2,-460),new N(-440,1.2,-460)],1.1,O?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng Keangnam & Mễ Trì","PIPE-DIST-KNG-D300",!G,2,{name:"Tuyến Phân Phối Cấp 2 D300 Keangnam & Mễ Trì",id:"PIPE-DIST-KNG-D300",tier:"Cấp 2 (Distribution D300)",status:G?"ĐÃ CẮT NƯỚC QUA VAN V-KNG-06":"Bình thường",diameter:"DN300 HDPE",flow:G?"0.0 m³/h":"1,120 m³/h",pressure:G?"0.00 bar":"3.38 bar",dma:"DMA Phía Tây"}),We([new N(0,1,90),new N(75,1,90),new N(140,1,90),new N(200,1,90)],.85,O?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Phố Hoàng Ngân","PIPE-STREET-HN-D150",!mt,3,{name:"Tuyến Nhánh Cấp 3 D150 Phố Hoàng Ngân",id:"PIPE-STREET-HN-D150",tier:"Cấp 3 (Reticulation D150)",status:mt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:mt?"0.0 m³/h":"180 m³/h",dma:"DMA THNC-02"}),We([new N(0,1,-90),new N(75,1,-90),new N(140,1,-90),new N(200,1,-90)],.85,O?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Phố Đỗ Quang","PIPE-STREET-DQ-D150",!lt,3,{name:"Tuyến Nhánh Cấp 3 D150 Phố Đỗ Quang",id:"PIPE-STREET-DQ-D150",tier:"Cấp 3 (Reticulation D150)",status:lt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:lt?"0.0 m³/h":"175 m³/h",dma:"DMA THNC-01"}),We([new N(0,1,240),new N(120,1,240),new N(240,1,240)],.8,O?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Phố Quan Nhân","PIPE-STREET-QN-D125",!mt,3,{name:"Tuyến Nhánh Cấp 3 D125 Phố Quan Nhân",id:"PIPE-STREET-QN-D125",tier:"Cấp 3 (Reticulation D125)",status:mt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:mt?"0.0 m³/h":"140 m³/h",dma:"DMA THNC-02"}),We([new N(0,1,290),new N(120,1,290),new N(240,1,290)],.8,O?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Phố Nhân Hòa","PIPE-STREET-NH-D125",!St,3,{name:"Tuyến Nhánh Cấp 3 D125 Phố Nhân Hòa",id:"PIPE-STREET-NH-D125",tier:"Cấp 3 (Reticulation D125)",status:St?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:St?"0.0 m³/h":"150 m³/h",dma:"DMA THNC-03"}),We([new N(0,1,20),new N(25,1,20),new N(42,1,75),new N(42,1,155)],.8,O?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Ngõ Nội Khu 34T & 17T","PIPE-STREET-17T-D150",!Rt,3,{name:"Tuyến Nhánh Cấp 3 D150 Ngõ Nội Khu 34T & 17T",id:"PIPE-STREET-17T-D150",tier:"Cấp 3 (Reticulation D150)",status:Rt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:Rt?"0.0 m³/h":"195 m³/h",dma:"DMA THNC-02"}),We([new N(0,1,20),new N(-35,1,20),new N(-35,1,-30),new N(-75,1,0)],.8,O?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Ngõ Nội Khu Cụm 24T","PIPE-STREET-24T-D125",!Rt,3,{name:"Tuyến Nhánh Cấp 3 D125 Ngõ Nội Khu Cụm 24T",id:"PIPE-STREET-24T-D125",tier:"Cấp 3 (Reticulation D125)",status:Rt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:Rt?"0.0 m³/h":"160 m³/h",dma:"DMA THNC-02"}),We([new N(0,1,-85),new N(40,1,-85),new N(80,1,-85),new N(60,1,-140)],.8,O?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Nội Khu Cụm N04/N05","PIPE-STREET-N04N05-D150",!lt,3,{name:"Tuyến Nhánh Cấp 3 D150 Nội Khu N04/N05",id:"PIPE-STREET-N04N05-D150",tier:"Cấp 3 (Reticulation D150)",status:lt?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:lt?"0.0 m³/h":"210 m³/h",dma:"DMA THNC-01"});const I=(se,D,ce,X,pe,_e)=>{const ae=new N((se.x+D.x)/2,.8,(se.z+D.z)/2);We([se,ae,D],.55,_e?6583435:O?16498468:14251782,`Ống Đấu Nối Cấp 4 ${ce} -> ${X}`,`PIPE-SRV-${pe}`,!_e,4,{name:`Ống Đấu Nối Cấp 4 ${ce} -> ${X}`,id:`PIPE-SRV-${pe}`,tier:"Cấp 4 (Service Connection)",status:_e?"ĐÃ CẮT DÒNG (KHÓA VAN)":"Cấp nước trực tiếp bể ngầm",diameter:ce,pressure:_e?"0.00 bar":"3.25 bar",flow:_e?"0.0 m³/h":"Theo định mức AMR"})};I(new N(0,1.1,20),new N(25,1.1,20),"DN80","Tháp 34T","34T",Rt),I(new N(0,1.1,30),new N(-35,1.1,30),"DN65","Chung cư 24T1","24T1",Rt),I(new N(0,1.1,-30),new N(-35,1.1,-30),"DN65","Chung cư 24T2","24T2",Rt),I(new N(42,1.1,75),new N(42,1.1,75),"DN50","Chung cư 17T1","17T1",Rt),I(new N(0,1.1,155),new N(35,1.1,155),"DN80","Diamond Flower","DIAMOND",ht),I(new N(50,1.1,155),new N(80,1.1,155),"DN80","Star City","STAR-CITY",ht),I(new N(100,1.1,155),new N(130,1.1,155),"DN65","The Golden Palm","GOLDEN-PALM",ht),I(new N(0,1.1,155),new N(-60,1.1,155),"DN80","HUD Tower A","HUD-A",ht),I(new N(-60,1.1,155),new N(-100,1.1,155),"DN65","HUD Tower B","HUD-B",ht),I(new N(140,1.1,155),new N(180,1.1,155),"DN65","MB Grand Tower","MB-TOWER",ht),I(new N(0,1.1,-180),new N(65,1.1,-215),"DN80","Charmvit Tower","CHARMVIT",lt),I(new N(40,1.1,-85),new N(40,1.1,-85),"DN80","N05-34T1","N05-1",lt),I(new N(80,1.1,-85),new N(80,1.1,-85),"DN80","N05-34T2","N05-2",lt),I(new N(-160,1.1,45),new N(-150,1.1,45),"DN65","Mandarin Block A","MANDARIN-A",he),I(new N(-160,1.1,-5),new N(-150,1.1,-5),"DN65","Mandarin Block C","MANDARIN-C",he),I(new N(-160,1.1,-95),new N(-135,1.1,-95),"DN50","THPT Amsterdam","AMS",he),I(new N(-440,1.1,-320),new N(-540,1.1,-320),"DN150","Keangnam 72","KEANGNAM-72",G),I(new N(-540,1.1,-320),new N(-590,1.1,-320),"DN80","Keangnam Tháp A","KEANGNAM-A",G),I(new N(-540,1.1,-320),new N(-490,1.1,-320),"DN80","Keangnam Tháp B","KEANGNAM-B",G),I(new N(-440,1.1,-220),new N(-460,1.1,-220),"DN65","Handico Tower","HANDICO",G),I(new N(-440,1.1,-170),new N(-460,1.1,-170),"DN65","CEO Tower","CEO",G),I(new N(-440,1.1,-110),new N(-440,1.1,-110),"DN65","Bảo Tàng Hà Nội","MUSEUM",G),I(new N(-440,1.1,140),new N(-440,1.1,140),"DN100","Hội Nghị Quốc Gia NCC","NCC",!1),I(new N(-280,1.1,-180),new N(-280,1.1,-180),"DN80","Big C Thăng Long","BIGC",pt),I(new N(-230,1.1,-220),new N(-230,1.1,-220),"DN80","D'Capitale C1","DCP-C1",pt),I(new N(-190,1.1,-220),new N(-190,1.1,-220),"DN80","D'Capitale C2","DCP-C2",pt),I(new N(-440,1.1,40),new N(-360,1.1,40),"DN80","Thăng Long Number One A","TL-NO1-A",pt),I(new N(-360,1.1,40),new N(-360,1.1,85),"DN80","Thăng Long Number One B","TL-NO1-B",pt),I(new N(240,1.1,270),new N(200,1.1,270),"DN80","Hapulico Complex A","HAP-A",St),I(new N(240,1.1,270),new N(110,1.1,270),"DN65","Golden West","GOLDEN-WEST",St),I(new N(240,1.1,340),new N(250,1.1,340),"DN80","Imperia Garden A","IMP-A",St),I(new N(240,1.1,340),new N(290,1.1,340),"DN80","Imperia Garden B","IMP-B",St),I(new N(75,1.1,0),new N(75,1.1,-10),"DN50","Biệt Thự BT1-BT6","VILLAS",mt),I(new N(75,1.1,35),new N(110,1.1,35),"DN50","Trường Ngôi Sao Hà Nội","NGOI-SAO",mt);const C=new Xn;V.add(C);const J=(se,D,ce,X,pe,_e,ae)=>{if(!t.valves)return null;const be=new Xn;be.position.set(se[0],5.8,se[2]),be.scale.set(1.4,1.4,1.4);const Ve=new er(2.4,2.7,.6,16),ye=new Cn({color:X?4524554:413243,roughness:.6}),ze=new Lt(Ve,ye);ze.position.y=.3,be.add(ze);const Xe=new Ec(2.6,3.6,24),Re=new ga({color:X?15680580:1096065,side:Gi}),ct=new Lt(Xe,Re);ct.rotation.x=-Math.PI/2,ct.position.y=.15,be.add(ct);const Ze=new Tr(3.6,3.6,3.6),tn=new Cn({color:X?14427686:1483594,metalness:.7,roughness:.25,emissive:X?10033947:417606,emissiveIntensity:.35}),Ct=new Lt(Ze,tn);Ct.position.y=2.4,Ct.castShadow=!0,be.add(Ct);const qt=new er(.5,.5,2.5,12),un=new Cn({color:9741240,metalness:.8}),Yn=new Lt(qt,un);Yn.position.y=4.5,be.add(Yn);const mn=new tf(2,.45,12,24),hn=new Cn({color:X?16096779:3718648,metalness:.75,roughness:.2}),xn=new Lt(mn,hn);xn.rotation.x=X?0:Math.PI/2,xn.position.y=5.8,be.add(xn);const gn=document.createElement("canvas");gn.width=384,gn.height=96;const dn=gn.getContext("2d");dn.fillStyle=X?"#dc2626":"#16a34a",dn.beginPath(),dn.roundRect(8,8,368,80,20),dn.fill(),dn.strokeStyle="#ffffff",dn.lineWidth=4,dn.stroke(),dn.fillStyle="#ffffff",dn.font="bold 28px -apple-system, sans-serif",dn.textAlign="center",dn.textBaseline="middle",dn.fillText(X?`🔒 ${ce}: ĐÃ ĐÓNG (CẮT NƯỚC)`:`🔓 ${ce}: ĐANG MỞ (CLICK KHÓA)`,192,48);const ti=new p0(gn),hi=new Od({map:ti,transparent:!0,depthTest:!1}),di=new s0(hi);di.position.set(0,11,0),di.scale.set(28,7,1),be.add(di);const ni={name:D,id:ce,type:"Chốt Khóa Nước Phân Đoạn (Smart Isolation Valve)",status:X?"🔒 ĐÃ ĐÓNG (CÔ LẬP & CẮT NƯỚC CỤC BỘ)":"🔓 ĐANG MỞ (Cấp nước bình thường)",isClosed:X,zoneDescription:pe,affectedBuildings:_e,householdsAffected:ae,pressure:X?"0.00 bar (Cửa xả)":"3.30 bar (Ổn định)",diameter:"DN300 - DN500 Gang Cầu FCD",material:"Van Cổng Tín Hiệu Điện Tử (Flanged Resilient Gate Valve)"};return be.userData={name:D,id:ce,type:"SmartValve",data:ni},Ct.userData=be.userData,_.current.push(Ct),C.add(be),be};if(J([0,2.5,20],"Chốt Khóa V-HDT-01 (Hoàng Đạo Thúy - Tháp 34T)","VALVE-01",Rt,"Cụm Lõi Đô Thị Hoàng Đạo Thúy & 24T1-24T3","Tháp Biểu Tượng 34T, Cụm 24T1, 24T2, 24T3, Dãy 17T1-17T6 và dãy nhà phố nội khu","1,120 hộ dân (~4,500 cư dân)"),J([-160,2.5,25],"Chốt Khóa V-HMG-02 (Hoàng Minh Giám - Mandarin)","VALVE-02",he,"Phân Khu Trường Học & Chung Cư Cao Cấp Hoàng Minh Giám","Tổ Hợp Mandarin Garden (4 Tháp A, B, C, D) & Trường THPT Chuyên Hà Nội - Amsterdam","1,008 căn hộ + 3,200 học sinh & GV"),J([0,2.5,155],"Chốt Khóa V-LVL-03 (Lê Văn Lương - Diamond Flower)","VALVE-03",ht,"Nút Giao Lê Văn Lương - Hoàng Đạo Thúy","Diamond Flower Tower (36T), Star City, The Golden Palm, Cụm HUD Tower A & B, MB Grand Tower","850 hộ dân & 35,000m² văn phòng tài chính"),J([0,2.5,-180],"Chốt Khóa V-TDN-04 (Trần Duy Hưng - Charmvit Tower)","VALVE-04",lt,"Phân Khu Khách Sạn & Ngoại Giao Trần Duy Hưng","Tổ hợp Charmvit Tower, Khách sạn Grand Plaza, Cụm Chung Cư N04 (3 tháp) & N05 (2 tháp 34T)","920 căn hộ & 540 phòng khách sạn 5 sao"),J([-280,2.5,-180],"Chốt Khóa V-DCP-05 (Vinhomes D'Capitale & Big C)","VALVE-05",pt,"Cửa Ngõ Phía Nam Trần Duy Hưng - Khuất Duy Tiến","Tổ Hợp 6 Tòa Tháp Vinhomes D'Capitale, Siêu Thị Big C Thăng Long, 2 Tháp Thăng Long Number One","3,000 căn hộ cao cấp & TTTM Big C Thăng Long"),J([-440,2.5,-320],"Chốt Khóa V-KNG-06 (Keangnam Landmark 72 & Phạm Hùng)","VALVE-06",G,"Trung Tâm Tài Chính Phía Tây Hà Nội","Keangnam Hanoi Landmark 72 (350m), 2 Tháp Căn Hộ Đôi Keangnam 48T, Handico Tower, CEO Tower, Bảo tàng HN","922 căn hộ Penthouse, TTTM Lotte & Trụ sở Tập đoàn"),J([180,2.5,270],"Chốt Khóa V-HAP-07 (Ngụy Như Kon Tum - Hapulico)","VALVE-07",St,"Phân Khu Dân Cư Ngụy Như Kon Tum - Vũ Trọng Phụng","Tổ hợp Hapulico Complex (4 Block), Chung Cư Golden West, Imperia Garden (2 Tháp 35T), Shophouse Chợ Thuốc","1,200 căn hộ & Chợ Dược Phẩm miền Bắc"),J([75,2.5,0],"Chốt Khóa V-NTT-08 (Nguyễn Thị Thập - Khu Biệt Thự)","VALVE-08",mt,"Khu Đô Thị Thấp Tầng Nguyễn Thị Thập","150 Biệt thự Liền kề BT1 - BT6, Trường Liên cấp Ngôi Sao, 50 Shophouse mặt phố Nguyễn Thị Thập","150 căn biệt thự & 2,200 học sinh"),t.hydrants){const se=new Xn;V.add(se);const D=(X,pe,_e,ae)=>{const be=new Xn;be.position.set(X[0],0,X[2]);const Ve=new er(.7,.8,1.2,12),ye=new Cn({color:14427686,metalness:.6,roughness:.25,emissive:10033947,emissiveIntensity:.35}),ze=new Lt(Ve,ye);ze.position.y=.6,be.add(ze);const Xe=new er(.55,.55,2.2,12),Re=new Lt(Xe,ye);Re.position.y=2,be.add(Re);const ct=new _a(.65,12,12),Ze=new Lt(ct,ye);Ze.position.y=3.1,be.add(Ze),be.userData={name:pe,id:_e,type:"Trụ Cứu Hỏa PCCC",data:{name:pe,id:_e,type:"Trụ Cứu Hỏa Đô Thị (TCVN 6379:1998)",status:"Sẵn sàng cấp nước chữa cháy 24/7 (Đạt QCVN 06:2022/BXD)",flow:"35.0 L/s (Lưu lượng danh định)",pressure:"3.35 bar (Cột áp tĩnh)",elevation:"+16.8m ASL",diameter:"Họng cấp DN100 + 2 họng phụ DN65",households:"Bán kính bảo vệ PCCC: 150m",dma:ae}},Re.userData=be.userData,_.current.push(Re),se.add(be)};[...[-300,-220,-140,-60,20,100,180,260].map((X,pe)=>({pos:[14,0,X],id:`HYD-HDT-${pe+1}`,road:"Đường Hoàng Đạo Thúy"})),...[-380,-300,-220,-140,-60,20,100,180,260,340].map((X,pe)=>({pos:[X,0,194],id:`HYD-LVL-${pe+1}`,road:"Đường Lê Văn Lương"})),...[-380,-300,-220,-140,-60,20,100,180,260,340].map((X,pe)=>({pos:[X,0,-196],id:`HYD-TDH-${pe+1}`,road:"Đường Trần Duy Hưng"})),...[-500,-420,-340,-260,-180,-100,-20,60,140,220,300,380].map((X,pe)=>({pos:[-422,0,X],id:`HYD-VD3-${pe+1}`,road:"Đường Phạm Hùng - Khuất Duy Tiến"})),...[-200,-130,-60,10,80,150,220,290].map((X,pe)=>({pos:[-148,0,X],id:`HYD-HMG-${pe+1}`,road:"Đường Hoàng Minh Giám"})),...[-140,-80,-20,40,100,160,220,280].map((X,pe)=>({pos:[X,0,12],id:`HYD-NTT-${pe+1}`,road:"Đường Nguyễn Thị Thập"})),...[-120,-60,0,60,120,180,240,300].map((X,pe)=>({pos:[X,0,362],id:`HYD-NNKT-${pe+1}`,road:"Đường Ngụy Như Kon Tum"})),...[-280,-200,-120,-40,40,120,200,280].map((X,pe)=>({pos:[352,0,X],id:`HYD-TK-${pe+1}`,road:"Phố Trung Kính"})),...[190,230,270,310,350,390].map((X,pe)=>({pos:[248,0,X],id:`HYD-VTP-${pe+1}`,road:"Phố Vũ Trọng Phụng"}))].forEach(X=>D(X.pos,`Trụ Cứu Hỏa ${X.id}`,X.id,X.road))}if(t.tanks){const se=new Xn;se.position.set(-350,0,220);const D=new er(8,12,38,16),ce=new Cn({color:O?1976635:6583435,roughness:.7}),X=new Lt(D,ce);X.position.y=19,X.castShadow=!0,se.add(X);const pe=new _a(18,24,20),_e=new Cn({color:O?165063:223649,metalness:.6,roughness:.2,emissive:O?223649:165063,emissiveIntensity:.25}),ae=new Lt(pe,_e);ae.position.y=44,ae.castShadow=!0,se.add(ae),se.userData={name:"Đài Nước & Trạm Bơm Tăng Áp Sông Đà (KĐT Nhân Chính)",id:"PUMP-STATION-MAIN",type:"Trạm Bơm & Đài Nước Tăng Áp",data:{name:"Đài Nước Điều Áp & Trạm Bơm Tăng Áp Sông Đà",id:"PUMP-STATION-MAIN",type:"Đài Nước Cân Bằng Thủy Lực & Trạm Bơm Tăng Áp",status:"Hoạt động liên tục (3/3 tổ máy biến tần)",flow:`${u.flow.toFixed(1)} m³/h`,pressure:`${u.pressure.toFixed(2)} bar (Áp lực xuất trạm)`,level:"14.2m / 16.0m (Dung tích 8,000 m³)",elevation:"+35.0m ASL",power:"3 x 160 kW Biến tần ABB",dma:"Toàn KĐT Trung Hòa - Nhân Chính"}},ae.userData=se.userData,_.current.push(ae),V.add(se)}const Ae=new Vy,Se=new je,Le=se=>{var X;const D=q.domElement.getBoundingClientRect();Se.x=(se.clientX-D.left)/D.width*2-1,Se.y=-((se.clientY-D.top)/D.height)*2+1,Ae.setFromCamera(Se,K);const ce=Ae.intersectObjects(_.current,!0);if(ce.length>0){let pe=ce[0].object;for(;pe&&!((X=pe.userData)!=null&&X.data)&&pe.parent;)pe=pe.parent;pe&&pe.userData&&(pe.userData.type==="SmartValve"&&o&&o(pe.userData.id),p&&pe.userData.data&&p(pe.userData.data))}},Ue=se=>{var X,pe;const D=q.domElement.getBoundingClientRect();Se.x=(se.clientX-D.left)/D.width*2-1,Se.y=-((se.clientY-D.top)/D.height)*2+1,Ae.setFromCamera(Se,K);const ce=Ae.intersectObjects(_.current,!0);if(ce.length>0){let _e=ce[0].object;for(;_e&&!((X=_e.userData)!=null&&X.name)&&_e.parent;)_e=_e.parent;if(_e&&((pe=_e.userData)!=null&&pe.name)){q.domElement.style.cursor="pointer",L(_e.userData.name);return}}q.domElement.style.cursor="grab",L(null)};q.domElement.addEventListener("pointerdown",Le),q.domElement.addEventListener("pointermove",Ue);const ve=()=>{E.current=requestAnimationFrame(ve),A.current.forEach(se=>{se.t=(se.t+se.speed)%1;const D=se.curve.getPointAt(se.t);D&&se.mesh.position.copy(D)}),ue.update(),q.render(V,K)};ve();const xe=()=>{if(!U)return;const se=U.clientWidth,D=U.clientHeight;K.aspect=se/D,K.updateProjectionMatrix(),q.setSize(se,D)};return window.addEventListener("resize",xe),()=>{window.removeEventListener("resize",xe),q.domElement&&(q.domElement.removeEventListener("pointerdown",Le),q.domElement.removeEventListener("pointermove",Ue)),E.current&&cancelAnimationFrame(E.current),y.current&&y.current.dispose(),A.current.forEach(se=>V.remove(se.mesh))}},[s,e,t,r,l]);const P=U=>{const T=M.current,R=v.current;!T||!R||(U==="iso"?(T.position.set(780,720,880),R.target.set(0,20,0)):U==="top"?(T.position.set(0,1750,.1),R.target.set(0,0,0)):U==="keangnam"?(T.position.set(-360,280,-160),R.target.set(-540,110,-320)):U==="ncc"?(T.position.set(-260,240,320),R.target.set(-440,30,140)):U==="diamond"?(T.position.set(180,160,280),R.target.set(35,60,155)):U==="34t"?(T.position.set(130,120,110),R.target.set(25,45,20)):U==="dcapitale"?(T.position.set(-70,180,-70),R.target.set(-230,60,-220)):U==="hapulico"&&(T.position.set(340,160,420),R.target.set(180,50,270)),R.update())},z=U=>{const T=M.current,R=v.current;if(!T||!R)return;const O=new N().subVectors(R.target,T.position).normalize();T.position.addScaledVector(O,U*90),R.update()};return f.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:d?"440px":"560px"},children:[f.jsx("div",{ref:m,style:{width:"100%",height:"100%",outline:"none"}}),B.length>0&&f.jsxs("div",{style:{position:"absolute",top:"14px",left:"50%",transform:"translateX(-50%)",background:"rgba(220, 38, 38, 0.95)",color:"#ffffff",padding:"8px 18px",borderRadius:"8px",display:"flex",alignItems:"center",gap:"10px",zIndex:50,fontSize:"13px",fontWeight:"600",backdropFilter:"blur(6px)",animation:"pulse 2s infinite"},children:[f.jsx(Ts,{size:18,color:"#fef08a"}),f.jsxs("span",{children:["⚠️ ĐANG CÔ LẬP CẮT NƯỚC: ",B.length," chốt khóa đang ĐÓNG. Click vào chốt van màu đỏ để mở lại nước!"]})]}),f.jsxs("div",{style:{position:"absolute",top:"14px",right:"14px",display:"flex",flexDirection:"column",gap:"6px",zIndex:30},children:[f.jsxs("div",{className:"qatium-hud-pill-group",style:{flexDirection:d?"row":"column",padding:"4px",gap:"4px"},children:[f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("iso"),title:"Góc 3D Toàn cảnh quận quy mô 2.5km (Isometric 25X)",style:{padding:"5px 8px"},children:[f.jsx(fc,{size:13}),f.jsx("span",{children:d?"3D":"Toàn cảnh 25X"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("top"),title:"Bản đồ quy hoạch GIS 2D nhìn thẳng từ trên xuống",style:{padding:"5px 8px"},children:[f.jsx(eg,{size:13}),f.jsx("span",{children:d?"2D":"Bản đồ GIS 2D"})]}),!d&&f.jsxs(f.Fragment,{children:[f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("keangnam"),title:"Cận cảnh Keangnam Landmark 72 (350m)",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(Qs,{size:14}),f.jsx("span",{children:"Keangnam 72"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("ncc"),title:"Cận cảnh Trung tâm Hội nghị Quốc gia NCC",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(Qs,{size:14}),f.jsx("span",{children:"Hội Nghị QG (NCC)"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("diamond"),title:"Cận cảnh Diamond Flower Tower (36T)",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(Qs,{size:14}),f.jsx("span",{children:"Diamond Flower"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("34t"),title:"Cận cảnh Tháp 34T & Chốt van V-01",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(Qs,{size:14}),f.jsx("span",{children:"Tháp 34T & V-01"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("dcapitale"),title:"Cận cảnh Vinhomes D'Capitale & Big C",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(Qs,{size:14}),f.jsx("span",{children:"D'Capitale & Big C"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>P("hapulico"),title:"Cận cảnh Hapulico Complex & Vũ Trọng Phụng",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(Qs,{size:14}),f.jsx("span",{children:"Hapulico Complex"})]})]})]}),f.jsxs("div",{className:"qatium-hud-pill-group",style:{display:"flex",justifyContent:"space-between",padding:"4px"},children:[f.jsx("button",{className:"qatium-hud-btn",onClick:()=>z(1),title:"Phóng to",style:{padding:"5px 7px"},children:f.jsx(ix,{size:13})}),f.jsx("button",{className:"qatium-hud-btn",onClick:()=>z(-1),title:"Thu nhỏ",style:{padding:"5px 7px"},children:f.jsx(rx,{size:13})}),f.jsx("button",{className:"qatium-hud-btn",onClick:()=>P("iso"),title:"Đặt lại camera",style:{padding:"5px 7px"},children:f.jsx(tg,{size:13})})]})]}),f.jsxs("div",{style:{position:"absolute",bottom:d?"14px":"80px",left:"16px",pointerEvents:"none",display:"flex",flexDirection:"column",gap:"4px",zIndex:30},children:[S&&f.jsxs("div",{style:{background:"rgba(11, 18, 33, 0.95)",color:"#38bdf8",padding:"7px 14px",borderRadius:"6px",fontSize:"12.5px",fontWeight:"600",border:"1px solid rgba(56, 189, 248, 0.5)",boxShadow:"0 6px 16px rgba(0, 0, 0, 0.4)",display:"inline-flex",alignItems:"center",gap:"8px"},children:[f.jsx(fc,{size:14}),f.jsx("span",{children:S})]}),!d&&f.jsxs("div",{style:{background:"rgba(15, 23, 42, 0.85)",color:"#94a3b8",padding:"5px 12px",borderRadius:"6px",fontSize:"11px",maxWidth:"460px",backdropFilter:"blur(5px)",border:"1px solid rgba(255, 255, 255, 0.12)"},children:["🖱️ ",f.jsx("b",{children:"Click Chốt Van:"})," Đóng / Mở cắt nước mô phỏng · ",f.jsx("b",{children:"Click Tòa Nhà / Nhà Phố / Trụ PCCC:"})," Tra cứu thông số · ",f.jsx("b",{children:"Kéo chuột:"})," Xoay 360°"]})]})]})}function JE(){const[s,e]=Pt.useState("overview"),[t,r]=Pt.useState("DMA THNC-02"),[o,l]=Pt.useState("24h"),[u,d]=Pt.useState(null),[p,m]=Pt.useState({pipes:!0,valves:!0,sensors:!0}),[x,M]=Pt.useState(""),[v,y]=Pt.useState([{id:1,type:"Áp lực cao đầu nguồn",location:"Trạm bơm Tăng áp Trung tâm (Lê Văn Lương)",time:"14:22",status:"High Pressure",severity:"danger",handled:!1},{id:2,type:"Nghi vấn rò rỉ đêm (MNF)",location:"Tuyến ống D200 Hoàng Minh Giám (DMA THNC-03)",time:"13:50",status:"Leak Suspected",severity:"warning",handled:!1},{id:3,type:"Cảnh báo sụt áp cục bộ",location:"Nhánh D150 cấp cụm 17T1 - 17T4 Hoàng Đạo Thúy",time:"12:15",status:"Low Pressure",severity:"warning",handled:!0},{id:4,type:"Độ đục vượt chuẩn nhẹ (NTU)",location:"Hố đồng hồ tổng Mandarin Garden",time:"10:04",status:"Water Quality",severity:"info",handled:!1}]),[E,A]=Pt.useState(!1),[_,S]=Pt.useState(null),[L,B]=Pt.useState("3d"),[P,z]=Pt.useState("dark"),[U,T]=Pt.useState("pressure"),[R,O]=Pt.useState({pipes:!0,pipesPrimary:!0,pipesSecondary:!0,pipesService:!0,buildings:!0,hydrants:!0,streetLabels:!0,valves:!0,tanks:!0,sensors:!0,contour:!0}),[V,K]=Pt.useState(14),[q,ue]=Pt.useState(!1),[k,ee]=Pt.useState(null),[me,Q]=Pt.useState(!1),[te,Z]=Pt.useState(!1),[$,F]=Pt.useState(null),ie=()=>{Z(!0),F(null),Oe("📡 Đang phát sóng âm phân tích tương quan tại các giếng van DMA THNC-02..."),setTimeout(()=>{Z(!1),F({location:"Km 0+320 đường Hoàng Đạo Thúy (Đối diện sảnh 17T3)",depth:"1.25 m dưới mặt đường",pipe:"Ống gang dẻo D200 PN16 (Tuyến phân phối số 02)",lossRate:"11.8 m³/h (áp 3.2 bar)",confidence:"96.4%",frequency:"840 Hz (Sóng âm biến dạng rò ngầm)",recommendedAction:"Khóa cục bộ chốt van phụ và điều động đội cơ động đào thăm dò định vị vệt nứt."}),Oe("🎯 Đã định vị chính xác vị trí rò rỉ ngầm tại Hoàng Đạo Thúy!")},1200)},[De,re]=Pt.useState({"VALVE-01":!1,"VALVE-02":!1,"VALVE-03":!1,"VALVE-04":!1,"VALVE-05":!1,"VALVE-06":!1,"VALVE-07":!1,"VALVE-08":!1}),Me={"VALVE-01":{name:"Chốt Khóa V-HDT-01 (Hoàng Đạo Thúy - Tháp 34T)",zone:"Cụm Lõi Đô Thị Hoàng Đạo Thúy & 24T1-24T2",affected:"Tháp Biểu Tượng 34T, Cụm 24T1, 24T2",households:"1.120 hộ dân (~4.500 cư dân)"},"VALVE-02":{name:"Chốt Khóa V-HMG-02 (Hoàng Minh Giám - Mandarin)",zone:"Phân Khu Trường Học & Chung Cư Hoàng Minh Giám",affected:"Mandarin Garden (4 Tháp) & THPT Chuyên Hà Nội - Amsterdam",households:"1.008 căn hộ + 3.200 học sinh"},"VALVE-03":{name:"Chốt Khóa V-LVL-03 (Lê Văn Lương - Diamond Flower)",zone:"Nút Giao Lê Văn Lương - Hoàng Đạo Thúy",affected:"Diamond Flower Tower (36T) & Chung cư Star City",households:"850 hộ dân & 35.000m² văn phòng"},"VALVE-04":{name:"Chốt Khóa V-TDN-04 (Trần Duy Hưng - Charmvit Tower)",zone:"Phân Khu Khách Sạn & Ngoại Giao Trần Duy Hưng",affected:"Tổ hợp Charmvit Tower, Grand Plaza & Cụm N04/N05",households:"920 căn hộ & 500 phòng khách sạn 5 sao"},"VALVE-05":{name:"Chốt Khóa V-DCP-05 (Vinhomes D'Capitale & Big C)",zone:"Cửa Ngõ Phía Nam Trần Duy Hưng - Khuất Duy Tiến",affected:"Tổ hợp 6 Tòa Tháp D'Capitale & Siêu Thị Big C Thăng Long",households:"3.000 căn hộ cao cấp & TTTM Big C"},"VALVE-06":{name:"Chốt Khóa V-KNG-06 (Keangnam Landmark 72 & Phạm Hùng)",zone:"Trung Tâm Tài Chính Phía Tây Hà Nội",affected:"Keangnam Hanoi Landmark 72 (350m, 72 tầng) & Bảo tàng Hà Nội",households:"922 căn hộ Penthouse, TTTM Lotte & Trụ sở Tập đoàn"},"VALVE-07":{name:"Chốt Khóa V-HAP-07 (Ngụy Như Kon Tum - Hapulico)",zone:"Phân Khu Dân Cư Ngụy Như Kon Tum - Vũ Trọng Phụng",affected:"Tổ hợp Hapulico Complex & Chung Cư Golden West",households:"1.200 căn hộ & Chợ Dược Phẩm miền Bắc"},"VALVE-08":{name:"Chốt Khóa V-NTT-08 (Nguyễn Thị Thập - Khu Biệt Thự)",zone:"Khu Đô Thị Thấp Tầng Nguyễn Thị Thập",affected:"150 Biệt thự Liền kề BT1 - BT6 & Trường Liên cấp Ngôi Sao",households:"150 căn biệt thự & 2.200 học sinh"}},Ee=he=>{re(ht=>{const lt=!ht[he],pt=Me[he]||{name:he,affected:he};return Oe(lt?`🔒 ĐÃ KHÓA ${he}: Cô lập cắt nước toàn bộ [${pt.affected}]!`:`🔓 ĐÃ MỞ ${he}: Khôi phục cấp nước ổn định cho [${pt.affected}]!`),ee(G=>G&&(G.id===he||G.id===pt.name)?{...G,status:lt?"🔒 ĐÃ ĐÓNG (CÔ LẬP & CẮT NƯỚC CỤC BỘ)":"🔓 ĐANG MỞ (Cấp nước bình thường)",isClosed:lt,pressure:lt?"0.00 bar (Cửa xả)":"3.30 bar (Ổn định)"}:G),{...ht,[he]:lt}})};Pt.useEffect(()=>{let he;return q&&(he=setInterval(()=>{K(ht=>(ht+1)%24)},1400)),()=>clearInterval(he)},[q]);const Te=(he=>he>=2&&he<=4?{label:"03:00 - Đêm (MNF Rò rỉ)",flow:1420.5,pressure:3.78,status:"Cảnh báo rò rỉ đêm",nrw:"14.8%"}:he>=6&&he<=8?{label:"07:30 - Cao điểm sáng",flow:4280,pressure:3.12,status:"Phụ tải tăng cao",nrw:"10.2%"}:he>=18&&he<=20?{label:"19:00 - Cao điểm tối",flow:4650,pressure:2.98,status:"Phụ tải sinh hoạt cực đại",nrw:"10.6%"}:{label:`${he<10?"0"+he:he}:00 - Giờ bình thường`,flow:3850.4,pressure:3.28,status:"Vận hành ổn định",nrw:"10.8%"})(V),Oe=he=>{S(he),setTimeout(()=>S(null),3e3)},ot=he=>{y(ht=>ht.map(lt=>{if(lt.id===he){const pt=!lt.handled;return Oe(pt?`Đã điều động kỹ thuật viên xử lý: ${lt.type}`:`Đã hoàn tác trạng thái sự cố: ${lt.type}`),{...lt,handled:pt}}return lt}))},nt=(he="water_management_report.csv")=>{const lt=encodeURI(`data:text/csv;charset=utf-8,\uFEFFDiem Do,Phan Khu,Luu Luong (m3/h),Ap Luc (bar),Trang Thai
PUMP-THNC-MAIN (Dau vao Le Van Luong),Tram Bom Tong,3850.4,3.88,Toi uu
PIPE-TRUNK-HDT-D500 (Truc Hoang Dao Thuy),Lien Vung,3850.4,3.28,Hoat dong tot
BLDG-34T-HDT (Thap 34T Hoang Dao Thuy),DMA THNC-02,48.5,3.25,On dinh
BLDG-DIAMOND-FLOWER (Diamond Flower Tower 36T),DMA THNC-03,72.0,3.38,On dinh
BLDG-CHARMVIT (Charmvit Tower Tran Duy Hung),DMA THNC-01,65.4,3.32,On dinh
BLDG-MANDARIN (Mandarin Garden),DMA THNC-03,68.5,3.20,On dinh
FH-HDT-01 (Tru Cuu Hoa 34T),Hoang Dao Thuy,108.0,3.25,San sang 100%
PRV-01 (Giam ap Tran Duy Hung),DMA THNC-01,680.0,3.32,Dieu tiet tot
PRV-02 (Giam ap Hoang Minh Giam),DMA THNC-03,410.0,3.22,Canh bao MNF dem
`),pt=document.createElement("a");pt.setAttribute("href",lt),pt.setAttribute("download",he),document.body.appendChild(pt),pt.click(),document.body.removeChild(pt),Oe(`Đã xuất và tải về: ${he}`)},ut=()=>{window.print()},Tt={"DMA THNC-01":{name:"DMA THNC-01 - Khu Bắc Trần Duy Hưng (N01-N05 & Charmvit)",flow:"1,120.0 m³/h",pressure:"3.35 bar",households:"18,500 hộ & 45 VP",nrw:"10.5%",status:"Bình thường"},"DMA THNC-02":{name:"DMA THNC-02 - Khu Trung Tâm Hoàng Đạo Thúy (34T & Diamond Flower)",flow:"1,680.5 m³/h",pressure:"3.28 bar",households:"24,200 hộ + 2 Tháp",nrw:"11.2%",status:"Ổn định"},"DMA THNC-03":{name:"DMA THNC-03 - Khu Nam Lê Văn Lương & Mandarin Garden",flow:"1,050.0 m³/h",pressure:"3.22 bar",households:"22,000 hộ + THPT Ams",nrw:"11.8%",status:"Giám sát áp lực PCCC"}},Ot={"24h":{title:"Lưu Lượng Thủy Lực 24 Giờ (m³/h)",subtitle:"So sánh Lưu lượng Thực tế vs Đường Trung bình Baseline",points:[{label:"00h",actual:68,baseline:65,alert:!1},{label:"02h",actual:74,baseline:60,alert:!0,note:"MNF vượt chuẩn (+14 m³/h)"},{label:"04h",actual:62,baseline:60,alert:!1},{label:"06h",actual:110,baseline:105,alert:!1},{label:"08h",actual:172,baseline:160,alert:!0,note:"Đỉnh cao điểm sáng"},{label:"10h",actual:130,baseline:132,alert:!1},{label:"12h",actual:142,baseline:140,alert:!1},{label:"14h",actual:145.8,baseline:138,alert:!1},{label:"16h",actual:138,baseline:135,alert:!1},{label:"18h",actual:165,baseline:162,alert:!1},{label:"20h",actual:152,baseline:150,alert:!1},{label:"22h",actual:98,baseline:95,alert:!1}]},"7d":{title:"Lưu Lượng Thủy Lực 7 Ngày Qua (m³/ngày)",subtitle:"Xu hướng cấp nước theo ngày trong tuần",points:[{label:"Thứ 2",actual:3250,baseline:3200,alert:!1},{label:"Thứ 3",actual:3310,baseline:3220,alert:!1},{label:"Thứ 4",actual:3480,baseline:3250,alert:!0,note:"Tăng vọt giữa tuần (+7%)"},{label:"Thứ 5",actual:3290,baseline:3240,alert:!1},{label:"Thứ 6",actual:3380,baseline:3300,alert:!1},{label:"Thứ 7",actual:3620,baseline:3550,alert:!1},{label:"CN",actual:3590,baseline:3500,alert:!1}]},"30d":{title:"Lưu Lượng Thủy Lực 30 Ngày (m³/ngày)",subtitle:"Đường biến thiên chu kỳ tháng",points:[{label:"Tuần 1",actual:23100,baseline:22800,alert:!1},{label:"Tuần 2",actual:24500,baseline:23e3,alert:!0,note:"Đợt nắng nóng tăng tiêu thụ"},{label:"Tuần 3",actual:23200,baseline:22900,alert:!1},{label:"Tuần 4",actual:22800,baseline:22700,alert:!1}]}}[o],Qt=Math.max(...Ot.points.map(he=>Math.max(he.actual,he.baseline)))*1.15,Jt=Math.min(...Ot.points.map(he=>Math.min(he.actual,he.baseline)))*.85,Ut=he=>180-(he-Jt)/(Qt-Jt)*160+10,Rt=he=>{const lt=620/(Ot.points.length-1);return Ot.points.map((pt,G)=>`${G*lt+40},${Ut(pt[he])}`).join(" L ")};return f.jsxs("div",{className:"app-layout",children:[E&&f.jsx("div",{className:"sidebar-backdrop",onClick:()=>A(!1)}),f.jsxs("aside",{className:`app-sidebar ${E?"mobile-open":""}`,children:[f.jsxs("div",{className:"sidebar-header",children:[f.jsx("div",{className:"logo-badge",children:f.jsx(Zs,{size:22})}),f.jsxs("div",{children:[f.jsx("div",{className:"logo-title",children:"Smart Water SCADA"}),f.jsx("div",{className:"logo-sub",children:"KĐT Trung Hòa – Nhân Chính"})]})]}),f.jsxs("nav",{className:"sidebar-nav",children:[f.jsx("div",{className:"nav-label",children:"Nghiệp Vụ"}),f.jsxs("button",{className:`nav-item ${s==="overview"?"active":""}`,onClick:()=>{e("overview"),A(!1)},children:[f.jsx(bl,{size:18}),f.jsx("span",{children:"1. Tổng quan"})]}),f.jsxs("button",{className:`nav-item ${s==="gis"?"active":""}`,onClick:()=>{e("gis"),A(!1)},children:[f.jsx(eg,{size:18}),f.jsx("span",{children:"2. Mạng GIS"})]}),f.jsxs("button",{className:`nav-item ${s==="telemetry"?"active":""}`,onClick:()=>{e("telemetry"),A(!1)},children:[f.jsx(ro,{size:18}),f.jsx("span",{children:"3. Áp & Lưu lượng"})]}),f.jsxs("button",{className:`nav-item ${s==="leaks"?"active":""}`,onClick:()=>{e("leaks"),A(!1)},children:[f.jsx(Ts,{size:18}),f.jsx("span",{children:"4. Thất thoát (NRW)"})]}),f.jsxs("button",{className:`nav-item ${s==="quality"?"active":""}`,onClick:()=>{e("quality"),A(!1)},children:[f.jsx(Zs,{size:18}),f.jsx("span",{children:"5. Chất lượng nước"})]}),f.jsx("div",{className:"nav-label",style:{marginTop:"16px"},children:"Báo Cáo"}),f.jsxs("button",{className:`nav-item ${s==="reports"?"active":""}`,onClick:()=>{e("reports"),A(!1)},children:[f.jsx(hh,{size:18}),f.jsx("span",{children:"6. Kiểm toán nước"})]})]}),f.jsxs("div",{className:"sidebar-footer",children:[f.jsxs("div",{className:"system-status",children:[f.jsx("span",{className:"status-dot"}),f.jsx("span",{children:"Trực tuyến: 512 node · 38 trụ PCCC"})]}),f.jsx(J_,{size:14,color:"#94a3b8",style:{cursor:"pointer"},onClick:()=>Oe("Đã đồng bộ lại 512 node IoT & 38 trụ cứu hỏa PCCC KĐT Trung Hòa - Nhân Chính")})]})]}),f.jsxs("div",{className:"main-wrapper",children:[f.jsxs("header",{className:"top-header",children:[f.jsxs("div",{className:"header-left-group",children:[f.jsx("button",{className:"mobile-menu-btn",onClick:()=>A(!E),"aria-label":"Toggle navigation menu",children:E?f.jsx(km,{size:20}):f.jsx(Y_,{size:20})}),f.jsxs("div",{className:"header-search",children:[f.jsx(ex,{size:16}),f.jsx("input",{type:"text",placeholder:"Tìm trạm, DMA, cảm biến...",value:x,onChange:he=>M(he.target.value)})]})]}),f.jsxs("div",{className:"header-actions",children:[f.jsxs("button",{className:"action-btn",onClick:()=>nt("Bao_Cao_Van_Hanh_Ngay.csv"),title:"Xuất báo cáo CSV",children:[f.jsx(hh,{size:15}),f.jsx("span",{children:"Xuất báo cáo"})]}),f.jsxs("button",{className:"action-btn",style:{position:"relative"},onClick:()=>Oe("Cảnh báo: 1 sự cố áp cao tại DMA 3"),"aria-label":"Thông báo sự cố",title:"Xem thông báo",children:[f.jsx(j_,{size:16}),f.jsx("span",{style:{position:"absolute",top:"6px",right:"8px",width:"7px",height:"7px",background:"#ef4444",borderRadius:"50%"}})]}),f.jsxs("div",{className:"user-profile",title:"Tài khoản kỹ sư",children:[f.jsx("div",{className:"user-avatar",children:"AD"}),f.jsxs("div",{className:"user-info",children:[f.jsx("span",{className:"user-name",children:"Kỹ sư trực"}),f.jsx("span",{className:"user-role",children:"Vận hành"})]})]})]})]}),f.jsxs("main",{className:"content-container",children:[s==="overview"&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"page-title-row",children:[f.jsxs("div",{children:[f.jsx("h1",{className:"page-title",children:"Giám sát Cấp nước KĐT Trung Hòa – Nhân Chính"}),f.jsx("p",{className:"page-subtitle",children:"Mạng lưới 3 cấp: Truyền dẫn D500, Phân phối D200 và Tuyến dịch vụ đấu nối công trình"})]}),f.jsx("div",{style:{display:"flex",gap:"8px"},children:f.jsxs("span",{className:"metric-badge badge-success",children:[f.jsx(_s,{size:13}),f.jsx("span",{children:"Trạm bơm Lê Văn Lương: 100%"})]})})]}),f.jsxs("div",{className:"metrics-grid",children:[f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Lưu lượng cấp toàn KĐT"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#e0f2fe",color:"#0284c7"},children:f.jsx(Zs,{size:18})})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:Te.flow.toFixed(1)}),f.jsx("span",{className:"metric-unit",children:"m³/h"})]}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-success",children:"↑ 3.2% định mức giờ"})})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Áp lực trung bình"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#ecfdf5",color:"#10b981"},children:f.jsx(ro,{size:18})})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:Te.pressure.toFixed(2)}),f.jsx("span",{className:"metric-unit",children:"bar"})]}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-info",children:"Tối ưu: 2.8 - 3.5 bar"})})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Thất thoát (NRW)"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#fef3c7",color:"#d97706"},children:f.jsx(Fm,{size:18})})]}),f.jsx("div",{className:"metric-body",children:f.jsx("span",{className:"metric-value",children:Te.nrw})}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-success",children:"↓ 0.8% theo tuần"})})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Cảnh báo"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#fee2e2",color:"#ef4444"},children:f.jsx(Ts,{size:18})})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",style:{color:"#ef4444"},children:v.filter(he=>!he.handled).length}),f.jsx("span",{className:"metric-unit",children:"sự cố"})]}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-danger",children:"1 nghi vấn rò rỉ đêm"})})]})]}),f.jsxs("div",{className:"dashboard-main-grid",children:[f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(q_,{size:17,color:"#0284c7"}),f.jsx("span",{children:"Sơ đồ phân vùng DMA"})]}),f.jsxs("div",{className:"panel-card-actions",children:[f.jsxs("div",{className:"qatium-hud-pill-group",style:{padding:"2px"},children:[f.jsx("button",{className:`qatium-hud-btn ${P==="light"?"active":""}`,onClick:()=>z("light"),style:{padding:"4px 8px",fontSize:"11.5px"},title:"Chế độ Google Maps (Mây trời 3D)",children:"Google Maps 3D"}),f.jsx("button",{className:`qatium-hud-btn ${P==="dark"?"active":""}`,onClick:()=>z("dark"),style:{padding:"4px 8px",fontSize:"11.5px"},title:"Chế độ Bản Đồ Đêm",children:"Đêm"})]}),f.jsx("button",{className:"btn-sm btn-secondary",onClick:()=>e("gis"),children:"Mở GIS →"})]})]}),f.jsxs("div",{className:`map-canvas-container ${P==="dark"?"dark-theme":"light-theme"}`,style:{minHeight:"440px",height:"440px",position:"relative"},children:[f.jsx(Z0,{theme:P,heatmap:U,assetsLayer:R,isolatedPipe:me,closedValves:De,onToggleValve:Ee,simTime:V,currentSim:Te,compact:!0,onSelectAsset:he=>{ee(he),he.dma&&(he.dma.includes("THNC-01")||he.dma.includes("DMA 1"))?r("DMA THNC-01"):he.dma&&(he.dma.includes("THNC-02")||he.dma.includes("DMA 2"))?r("DMA THNC-02"):he.dma&&(he.dma.includes("THNC-03")||he.dma.includes("DMA 3"))&&r("DMA THNC-03")}}),f.jsxs("div",{className:"map-overlay-badge",style:{zIndex:25,pointerEvents:"auto"},children:[f.jsx("div",{className:"map-overlay-title",children:Tt[t].name}),f.jsxs("div",{className:"map-overlay-sub",children:["Lưu lượng: ",f.jsx("b",{children:Tt[t].flow})," · Áp: ",f.jsx("b",{children:Tt[t].pressure})," · NRW: ",f.jsx("b",{children:Tt[t].nrw})]})]})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(bl,{size:17,color:"#0284c7"}),f.jsx("span",{children:"Thủy lực 24h & Cảnh báo"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:Ot.subtitle})]}),f.jsxs("div",{className:"timeframe-group",children:[f.jsx("button",{className:`timeframe-btn ${o==="24h"?"active":""}`,onClick:()=>l("24h"),children:"24 Giờ"}),f.jsx("button",{className:`timeframe-btn ${o==="7d"?"active":""}`,onClick:()=>l("7d"),children:"7 Ngày"}),f.jsx("button",{className:`timeframe-btn ${o==="30d"?"active":""}`,onClick:()=>l("30d"),children:"30 Ngày"})]})]}),f.jsxs("div",{className:"line-chart-wrapper",children:[f.jsxs("div",{className:"line-chart-legend",children:[f.jsxs("div",{className:"legend-line-item",children:[f.jsx("div",{className:"line-sample-actual"}),f.jsx("span",{children:"Thực tế"})]}),f.jsxs("div",{className:"legend-line-item",children:[f.jsx("div",{className:"line-sample-baseline"}),f.jsx("span",{children:"Baseline"})]}),f.jsxs("div",{className:"legend-line-item",children:[f.jsx("div",{className:"line-sample-alert"}),f.jsx("span",{children:"Lệch chuẩn"})]})]}),f.jsxs("div",{style:{position:"relative",width:"100%",height:"220px",background:"#ffffff"},children:[f.jsxs("svg",{viewBox:"0 0 700 220",style:{width:"100%",height:"100%"},children:[f.jsx("line",{x1:"40",y1:"30",x2:"680",y2:"30",stroke:"#f1f5f9",strokeWidth:"1"}),f.jsx("line",{x1:"40",y1:"80",x2:"680",y2:"80",stroke:"#f1f5f9",strokeWidth:"1"}),f.jsx("line",{x1:"40",y1:"130",x2:"680",y2:"130",stroke:"#f1f5f9",strokeWidth:"1"}),f.jsx("line",{x1:"40",y1:"180",x2:"680",y2:"180",stroke:"#e2e8f0",strokeWidth:"1.5"}),f.jsx("path",{d:`M ${Rt("baseline")}`,fill:"none",stroke:"#94a3b8",strokeWidth:"2.5",strokeDasharray:"6,5"}),f.jsx("path",{d:`M ${Rt("actual")}`,fill:"none",stroke:"#0284c7",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"}),Ot.points.map((he,ht)=>{const pt=620/(Ot.points.length-1),G=ht*pt+40,St=Ut(he.actual);return f.jsxs("g",{children:[he.alert&&f.jsx("circle",{cx:G,cy:St,r:"9",fill:"rgba(239, 68, 68, 0.25)",stroke:"#ef4444",strokeWidth:"1.5"}),f.jsx("circle",{cx:G,cy:St,r:he.alert?"5":"4",fill:he.alert?"#ef4444":"#0284c7",stroke:"#ffffff",strokeWidth:"2",style:{cursor:"pointer"},onMouseEnter:()=>d(he),onMouseLeave:()=>d(null)}),f.jsx("text",{x:G,y:"202",textAnchor:"middle",fontSize:"11",fill:"#64748b",fontFamily:"var(--font-mono)",children:he.label})]},ht)})]}),u&&f.jsxs("div",{style:{position:"absolute",top:"10px",right:"20px",background:"#0f172a",color:"#ffffff",padding:"8px 12px",borderRadius:"8px",fontSize:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",zIndex:10},children:[f.jsxs("div",{style:{fontWeight:"700",marginBottom:"2px"},children:["Thời điểm: ",u.label]}),f.jsxs("div",{children:["Thực tế: ",f.jsxs("b",{style:{color:"#38bdf8"},children:[u.actual," m³/h"]})]}),f.jsxs("div",{children:["Trung bình: ",f.jsxs("b",{children:[u.baseline," m³/h"]})]}),u.note&&f.jsxs("div",{style:{color:"#f87171",marginTop:"4px",fontWeight:"600"},children:["⚠ ",u.note]})]})]}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",fontSize:"12px",color:"#64748b",borderTop:"1px solid #f1f5f9",paddingTop:"10px"},children:[f.jsxs("span",{children:["MNF đêm định mức: ",f.jsx("b",{children:"65 m³/h"})," (Ngưỡng cảnh báo: ",">"," 70 m³/h)"]}),f.jsxs("span",{children:["Hệ số an toàn mạng lưới: ",f.jsx("b",{style:{color:"#16a34a"},children:"1.15 (Đạt chuẩn)"})]})]})]})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(tx,{size:17,color:"#ef4444"}),f.jsx("span",{children:"Nhật ký sự cố SCADA"})]}),f.jsx("div",{className:"panel-card-actions",children:f.jsx("span",{className:"metric-badge badge-warning",children:"Chờ xử lý"})})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Mức độ"}),f.jsx("th",{children:"Sự cố"}),f.jsx("th",{children:"Vị trí"}),f.jsx("th",{children:"Giờ"}),f.jsx("th",{children:"Trạng thái"}),f.jsx("th",{children:"Thao tác"})]})}),f.jsx("tbody",{children:v.map(he=>f.jsxs("tr",{children:[f.jsx("td",{children:f.jsx("span",{className:`metric-badge ${he.severity==="danger"?"badge-danger":he.severity==="warning"?"badge-warning":"badge-info"}`,children:he.status})}),f.jsx("td",{style:{fontWeight:"600"},children:he.type}),f.jsx("td",{children:he.location}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:he.time}),f.jsx("td",{children:he.handled?f.jsxs("span",{style:{color:"#10b981",fontWeight:"600",display:"flex",alignItems:"center",gap:"4px"},children:[f.jsx(_s,{size:14})," Đã nhận"]}):f.jsx("span",{style:{color:"#ef4444",fontWeight:"600"},children:"Chưa xử lý"})}),f.jsx("td",{children:f.jsx("button",{className:`btn-sm ${he.handled?"btn-secondary":"btn-primary"}`,onClick:()=>ot(he.id),children:he.handled?"Hoàn tác":"Điều động"})})]},he.id))})]})})]})]}),s==="gis"&&f.jsxs("div",{className:"panel-card",style:{position:"relative"},children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(fc,{size:18,color:"#0284c7"}),f.jsx("span",{children:"Mạng 3D Digital Twin (GIS Thủy lực)"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"Không gian 3D địa hình, mô phỏng thủy lực thời gian thực và quản lý tài sản theo chuẩn Qatium"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[f.jsxs("button",{className:`btn-sm ${me?"btn-primary":"btn-secondary"}`,onClick:()=>{Q(!me),Oe(me?"Đã mở lại van PRV-02, mạng lưới trở lại bình thường.":"Mô phỏng: Đã đóng van PRV-02! Khu vực DMA 2 đang chạy nguồn dự phòng.")},title:"Mô phỏng đóng ngắt sự cố",children:[f.jsx(dh,{size:13}),f.jsx("span",{children:me?"Mở van PRV-02":"Mô phỏng đóng van PRV-02"})]}),f.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>nt("Mo_Hinh_Mang_3D_GIS.csv"),children:[f.jsx(hh,{size:13}),f.jsx("span",{children:"Xuất GIS"})]})]})]}),f.jsxs("div",{className:`map-canvas-container ${P==="dark"?"dark-theme":"light-theme"}`,style:{minHeight:"640px",position:"relative"},children:[f.jsxs("div",{style:{position:"absolute",top:"14px",left:"14px",zIndex:25,display:"flex",flexDirection:"column",gap:"8px",maxWidth:"calc(100% - 220px)",pointerEvents:"auto"},children:[f.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"},children:[f.jsxs("div",{className:"qatium-hud-pill-group",children:[f.jsx("button",{className:`qatium-hud-btn ${P==="dark"?"active":""}`,onClick:()=>z("dark"),children:f.jsx("span",{children:"Digital Twin (Tối)"})}),f.jsx("button",{className:`qatium-hud-btn ${P==="light"?"active":""}`,onClick:()=>z("light"),children:f.jsx("span",{children:"SCADA (Sáng)"})})]}),f.jsxs("div",{className:"qatium-hud-pill-group",children:[f.jsxs("button",{className:`qatium-hud-btn ${U==="pressure"?"active":""}`,onClick:()=>T("pressure"),children:[f.jsx(ro,{size:13}),f.jsx("span",{children:"Áp lực (bar)"})]}),f.jsxs("button",{className:`qatium-hud-btn ${U==="flow"?"active":""}`,onClick:()=>T("flow"),children:[f.jsx(Zs,{size:13}),f.jsx("span",{children:"Lưu lượng (m³/h)"})]})]})]}),f.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"},children:f.jsxs("div",{className:"qatium-hud-pill-group",children:[f.jsx("button",{className:`qatium-hud-btn ${R.pipesPrimary?"active":""}`,style:{whiteSpace:"nowrap"},onClick:()=>O(he=>({...he,pipesPrimary:!he.pipesPrimary})),children:f.jsx("span",{children:"Cấp 1 (D500)"})}),f.jsx("button",{className:`qatium-hud-btn ${R.pipesSecondary?"active":""}`,style:{whiteSpace:"nowrap"},onClick:()=>O(he=>({...he,pipesSecondary:!he.pipesSecondary})),children:f.jsx("span",{children:"Cấp 2 (D200)"})}),f.jsx("button",{className:`qatium-hud-btn ${R.pipesService?"active":""}`,style:{whiteSpace:"nowrap"},onClick:()=>O(he=>({...he,pipesService:!he.pipesService})),children:f.jsx("span",{children:"Cấp 3 (Đấu Nối)"})}),f.jsx("button",{className:`qatium-hud-btn ${R.buildings?"active":""}`,style:{whiteSpace:"nowrap"},onClick:()=>O(he=>({...he,buildings:!he.buildings})),children:f.jsx("span",{children:"Khối Nhà 3D"})}),f.jsxs("button",{className:`qatium-hud-btn ${R.hydrants?"active":""}`,onClick:()=>O(he=>({...he,hydrants:!he.hydrants})),style:{whiteSpace:"nowrap",color:"#f87171"},children:[f.jsx(K_,{size:12,color:"#ef4444",style:{marginRight:"3px"}}),f.jsx("span",{children:"Trụ PCCC (38)"})]}),f.jsxs("button",{className:`qatium-hud-btn ${R.streetLabels?"active":""}`,style:{whiteSpace:"nowrap"},onClick:()=>O(he=>({...he,streetLabels:!he.streetLabels})),children:[f.jsx(nx,{size:12,style:{marginRight:"3px"}}),f.jsx("span",{children:"Tên Đường (Maps)"})]}),f.jsx("button",{className:`qatium-hud-btn ${R.valves?"active":""}`,style:{whiteSpace:"nowrap"},onClick:()=>O(he=>({...he,valves:!he.valves})),children:f.jsx("span",{children:"Van PRV"})}),f.jsx("button",{className:`qatium-hud-btn ${R.tanks?"active":""}`,style:{whiteSpace:"nowrap"},onClick:()=>O(he=>({...he,tanks:!he.tanks})),children:f.jsx("span",{children:"Đài nước & Bơm"})}),f.jsx("button",{className:`qatium-hud-btn ${R.sensors?"active":""}`,style:{whiteSpace:"nowrap"},onClick:()=>O(he=>({...he,sensors:!he.sensors})),children:f.jsx("span",{children:"Cảm biến"})})]})}),f.jsx("div",{style:{display:"flex",alignItems:"center"},children:f.jsxs("div",{className:"qatium-hud-pill-group",style:{padding:"4px 10px",fontSize:"11.5px",fontWeight:600,display:"inline-flex",alignItems:"center",gap:"6px",cursor:"pointer",color:"#cbd5e1"},onClick:()=>Ee("VALVE-08"),title:"Click để mô phỏng đóng/mở chốt van VALVE-08",children:[f.jsx("span",{style:{color:De["VALVE-08"]?"#ef4444":"#10b981",fontSize:"14px",lineHeight:1},children:"●"}),f.jsxs("span",{style:{color:"#ffffff",letterSpacing:"0.02em"},children:["VALVE-08: ",De["VALVE-08"]?"ĐÃ ĐÓNG":"MỞ"]}),f.jsx("span",{style:{fontSize:"11px"},children:De["VALVE-08"]?"🔒":"🔓"})]})})]}),f.jsx(Z0,{theme:P,heatmap:U,assetsLayer:R,isolatedPipe:me,closedValves:De,onToggleValve:Ee,simTime:V,currentSim:Te,onSelectAsset:he=>ee(he)}),k&&f.jsxs("div",{className:"qatium-inspector-drawer",children:[f.jsxs("div",{className:"inspector-header",children:[f.jsxs("div",{className:"inspector-title",children:[f.jsx(fc,{size:16,color:"#0284c7"}),f.jsx("span",{children:k.name})]}),f.jsx("button",{className:"inspector-close-btn",onClick:()=>ee(null),"aria-label":"Đóng thanh thông tin",children:f.jsx(km,{size:16})})]}),f.jsxs("div",{className:"inspector-body",children:[f.jsxs("div",{children:[f.jsxs("span",{className:"metric-badge badge-info",style:{marginBottom:"6px"},children:["Mã ID: ",k.id]}),f.jsx("div",{style:{fontSize:"12px",color:"#64748b"},children:k.type})]}),k.isCutOff&&f.jsxs("div",{style:{padding:"10px",borderRadius:"6px",background:"rgba(239, 68, 68, 0.15)",border:"1px solid #ef4444",color:"#dc2626",marginTop:"6px"},children:[f.jsxs("div",{style:{fontWeight:700,fontSize:"12.5px",display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(Ts,{size:15,color:"#dc2626"}),f.jsx("span",{children:"CÔNG TRÌNH ĐANG BỊ CẮT NƯỚC!"})]}),f.jsxs("div",{style:{fontSize:"11.5px",marginTop:"4px",color:"#991b1b"},children:["Chốt van ",f.jsx("b",{children:k.cutOffValveName||"phân đoạn"})," đang bị đóng để cô lập sự cố. Áp lực cấp nước đo được: ",f.jsx("b",{children:"0.00 bar"}),"."]})]}),k.zoneDescription&&f.jsxs("div",{style:{marginTop:"6px",padding:"10px",borderRadius:"6px",background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.3)"},children:[f.jsxs("div",{style:{color:"#dc2626",fontWeight:700,fontSize:"12px",display:"flex",alignItems:"center",gap:"5px"},children:[f.jsx(Ts,{size:14}),f.jsx("span",{children:"PHẠM VI ẢNH HƯỞNG KHI KHÓA VAN:"})]}),f.jsxs("div",{style:{fontSize:"12px",marginTop:"4px"},children:[f.jsx("b",{children:"Khu vực:"})," ",k.zoneDescription]}),f.jsxs("div",{style:{fontSize:"12px"},children:[f.jsx("b",{children:"Công trình:"})," ",k.affectedBuildings]}),f.jsxs("div",{style:{fontSize:"12px"},children:[f.jsx("b",{children:"Số hộ dân mất nước:"})," ",f.jsx("span",{style:{color:"#dc2626",fontWeight:700},children:k.householdsAffected})]})]}),f.jsxs("div",{className:"inspector-grid",children:[f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Áp Lực SCADA"}),f.jsx("span",{className:"inspector-metric-val",children:k.pressure||k.inletPressure||"N/A"})]}),f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Lưu Lượng Cấp"}),f.jsx("span",{className:"inspector-metric-val",children:k.flow||"N/A"})]}),f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Cao Độ Z"}),f.jsx("span",{className:"inspector-metric-val",children:k.elevation||"+0.0m"})]}),f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Tổn Thất / Cột Áp"}),f.jsx("span",{className:"inspector-metric-val",children:k.headloss||k.head||k.level||"Tối ưu"})]})]}),f.jsxs("div",{style:{fontSize:"12.5px",display:"flex",flexDirection:"column",gap:"6px",borderTop:"1px solid var(--border-light)",paddingTop:"10px"},children:[f.jsxs("div",{children:[f.jsx("b",{children:"Trạng thái:"})," ",f.jsx("span",{style:{color:k.status.includes("Cảnh báo")||k.status.includes("ĐÓNG")?"#dc2626":"#16a34a"},children:k.status})]}),k.tier&&f.jsxs("div",{children:[f.jsx("b",{children:"Cấp kỹ thuật:"})," ",f.jsx("span",{style:{color:"#0284c7",fontWeight:600},children:k.tier})]}),k.floors&&f.jsxs("div",{children:[f.jsx("b",{children:"Quy mô tầng:"})," ",k.floors]}),k.connectionPipe&&f.jsxs("div",{children:[f.jsx("b",{children:"Ống dịch vụ đấu nối:"})," ",f.jsx("span",{style:{color:"#d97706",fontWeight:600},children:k.connectionPipe})]}),k.cisternCapacity&&f.jsxs("div",{children:[f.jsx("b",{children:"Bể chứa ngầm tòa nhà:"})," ",k.cisternCapacity]}),k.meterId&&f.jsxs("div",{children:[f.jsx("b",{children:"Đồng hồ điện từ AMR:"})," ",k.meterId]}),k.material&&f.jsxs("div",{children:[f.jsx("b",{children:"Vật liệu:"})," ",k.material]}),k.diameter&&f.jsxs("div",{children:[f.jsx("b",{children:"Đường kính danh định:"})," ",k.diameter]}),k.households&&f.jsxs("div",{children:[f.jsx("b",{children:"Quy mô phụ tải:"})," ",k.households]}),k.power&&f.jsxs("div",{children:[f.jsx("b",{children:"Công suất truyền động:"})," ",k.power]}),f.jsxs("div",{children:[f.jsx("b",{children:"Khu vực phụ trách:"})," ",k.dma]})]}),f.jsxs("div",{className:"inspector-actions",children:[k.id&&k.id.startsWith("VALVE-")&&f.jsxs("button",{className:"btn-sm",style:{background:De[k.id]?"#16a34a":"#dc2626",color:"#ffffff",fontWeight:700,padding:"8px 12px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",borderRadius:"6px",border:"none",cursor:"pointer"},onClick:()=>Ee(k.id),children:[f.jsx(dh,{size:14}),f.jsx("span",{children:De[k.id]?`🔓 MỞ LẠI CHỐT ${k.id} (CẤP LẠI NƯỚC)`:`🔒 ĐÓNG CHỐT ${k.id} (CÔ LẬP CẮT NƯỚC)`})]}),k.id==="PRV-02"&&f.jsxs("button",{className:"btn-sm btn-primary",onClick:()=>{Q(!me),Oe(me?"Đã mở lại van PRV-02!":"Đã đóng van PRV-02!")},children:[f.jsx(dh,{size:13}),f.jsx("span",{children:me?"Mở lại van PRV-02":"Mô phỏng đóng ngắt (Shutdown)"})]}),f.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>Oe(`Đang trích xuất đồ thị áp lực 24h cho ${k.id}...`),children:[f.jsx(bl,{size:13}),f.jsx("span",{children:"Đồ thị áp lực 24h"})]}),f.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>Oe(`Đã tạo lệnh điều động kỹ sư kiểm tra ${k.id}`),children:[f.jsx(_s,{size:13}),f.jsx("span",{children:"Tạo phiếu bảo trì"})]})]})]})]}),f.jsxs("div",{className:"qatium-timeline-bar",children:[f.jsx("button",{className:"timeline-play-btn",onClick:()=>{ue(!q),Oe(q?"Đã tạm dừng mô phỏng 24h":"Đang chạy mô phỏng biến thiên thủy lực 24h...")},title:q?"Tạm dừng mô phỏng":"Chạy mô phỏng 24h",children:q?f.jsx($_,{size:16}):f.jsx(Z_,{size:16,style:{marginLeft:"2px"}})}),f.jsxs("div",{className:"timeline-time-info",children:[f.jsx("span",{className:"timeline-clock",children:Te.label}),f.jsxs("span",{className:"timeline-desc",children:["Q = ",f.jsxs("b",{children:[Te.flow," m³/h"]})," · P = ",f.jsxs("b",{children:[Te.pressure," bar"]})]})]}),f.jsx("div",{className:"timeline-slider-wrap",children:f.jsx("input",{type:"range",min:"0",max:"23",value:V,onChange:he=>K(parseInt(he.target.value,10)),className:"timeline-slider",title:"Kéo để tua nhanh dòng thời gian mô phỏng"})}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexShrink:0},children:[f.jsx("span",{className:`metric-badge ${V>=2&&V<=4?"badge-danger":V>=6&&V<=8||V>=18&&V<=20?"badge-warning":"badge-success"}`,children:Te.status}),f.jsx("button",{className:"btn-sm btn-secondary",onClick:()=>K(14),title:"Đặt lại giờ mặc định",children:f.jsx(tg,{size:12})})]})]})]})]}),s==="telemetry"&&f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(ro,{size:18,color:"#0284c7"}),f.jsx("span",{children:"Dữ liệu Áp & Lưu lượng"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"6 điểm quan trắc tự động (SCADA)"})]}),f.jsx("button",{className:"btn-sm btn-primary",onClick:()=>nt("Du_Lieu_Telemetry_6_Diem_Do.csv"),children:"Xuất Excel"})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Điểm đo"}),f.jsx("th",{children:"Khu vực"}),f.jsx("th",{children:"Lưu lượng"}),f.jsx("th",{children:"Áp lực (bar)"}),f.jsx("th",{children:"Dải chuẩn"}),f.jsx("th",{children:"Chênh lệch"}),f.jsx("th",{children:"Trạng thái"})]})}),f.jsx("tbody",{children:[{node:"FM-01 / Trạm bơm Tăng áp Trung tâm",zone:"Đầu nguồn cấp Lê Văn Lương",flow:"450.8 m³/h",press:"4.2 bar",range:"3.8 - 4.5 bar",delta:"+0.1 bar",status:"Tối ưu",tag:"badge-success"},{node:"PRV-02 / Cổng vào DMA THNC-01",zone:"Hoàng Minh Giám - Amsterdam",flow:"128.2 m³/h",press:"3.1 bar",range:"2.8 - 3.4 bar",delta:"-0.2 bar",status:"Ổn định",tag:"badge-info"},{node:"PRV-03 / Trục chính DMA THNC-02",zone:"Hoàng Đạo Thúy - Tháp 34T",flow:"185.4 m³/h",press:"3.2 bar",range:"2.8 - 3.5 bar",delta:"+0.0 bar",status:"Ổn định",tag:"badge-info"},{node:"FM-04 / Điểm cao DMA THNC-03",zone:"Charmvit & Grand Plaza",flow:"142.2 m³/h",press:"3.4 bar",range:"2.5 - 3.2 bar",delta:"+0.4 bar",status:"Cảnh báo Áp cao",tag:"badge-warning"},{node:"SN-05 / Cụm cư dân 17T1 - 17T4",zone:"DMA THNC-02 (Hoàng Đạo Thúy)",flow:"48.4 m³/h",press:"2.4 bar",range:"2.8 - 3.4 bar",delta:"-0.5 bar",status:"Sụt áp cục bộ",tag:"badge-danger"},{node:"FM-06 / Tuyến xả cặn Hố van Big C",zone:"Khuất Duy Tiến - D'Capitale",flow:"0.0 m³/h",press:"3.0 bar",range:"2.8 - 3.5 bar",delta:"0.0 bar",status:"Đang khóa",tag:"badge-info"}].map((he,ht)=>f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:he.node}),f.jsx("td",{children:he.zone}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:he.flow}),f.jsx("td",{style:{fontWeight:"700",color:"#0284c7"},children:he.press}),f.jsx("td",{style:{color:"#64748b"},children:he.range}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:he.delta}),f.jsx("td",{children:f.jsx("span",{className:`metric-badge ${he.tag}`,children:he.status})})]},ht))})]})})]}),s==="leaks"&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[f.jsxs("div",{className:"metrics-grid",children:[f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Lưu lượng đêm (MNF)"}),f.jsx(Fm,{size:18,color:"#d97706"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"65.2"}),f.jsx("span",{className:"metric-unit",children:"m³/h"})]}),f.jsx("span",{className:"metric-badge badge-warning",children:"Khung 02:00 - 04:00"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Tỷ lệ thất thoát"}),f.jsx(Ts,{size:18,color:"#ef4444"})]}),f.jsx("div",{className:"metric-body",children:f.jsx("span",{className:"metric-value",style:{color:"#ef4444"},children:"12.5%"})}),f.jsx("span",{className:"metric-badge badge-danger",children:"~18.2 m³/h rò rỉ"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Nghi vấn rò rỉ"}),f.jsx(_s,{size:18,color:"#10b981"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"2"}),f.jsx("span",{className:"metric-unit",children:"tuyến ống"})]}),f.jsx("span",{className:"metric-badge badge-info",children:"Cần dò sóng âm"})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(Ts,{size:17,color:"#d97706"}),f.jsx("span",{children:"Xếp hạng thất thoát theo Phân vùng DMA (KĐT Trung Hòa – Nhân Chính)"})]}),f.jsxs("button",{className:"btn-sm btn-primary",disabled:te,onClick:ie,style:{display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(Q_,{size:14,className:te?"animate-spin":""}),f.jsx("span",{children:te?"Đang phân tích tương quan âm...":"Chạy Dò Sóng Âm Tương Quan"})]})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Vùng DMA"}),f.jsx("th",{children:"Quy mô phụ tải"}),f.jsx("th",{children:"Lưu lượng cấp TB"}),f.jsx("th",{children:"Lưu lượng đêm (MNF)"}),f.jsx("th",{children:"Tỷ lệ NRW"}),f.jsx("th",{children:"Mức ưu tiên xử lý"})]})}),f.jsxs("tbody",{children:[f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"DMA THNC-02 (Lõi Hoàng Đạo Thúy & Tháp 34T)"}),f.jsx("td",{children:"4.200 Căn hộ (~18.000 dân)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"185.4 m³/h"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)",color:"#ef4444",fontWeight:700},children:"42.5 m³/h"}),f.jsx("td",{style:{fontWeight:"700",color:"#ef4444"},children:"13.2%"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-danger",children:"Rất Cao (Khẩn cấp)"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"DMA THNC-01 (Hoàng Minh Giám - Cụm Amsterdam)"}),f.jsx("td",{children:"3.100 Căn hộ + Trường học"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"128.2 m³/h"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"26.0 m³/h"}),f.jsx("td",{style:{fontWeight:"700",color:"#f59e0b"},children:"11.8%"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-warning",children:"Trung Bình"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"DMA THNC-03 (Trần Duy Hưng - Charmvit Tower)"}),f.jsx("td",{children:"2.800 Căn hộ & Khách sạn"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"142.2 m³/h"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"19.5 m³/h"}),f.jsx("td",{style:{fontWeight:"700",color:"#10b981"},children:"10.5%"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-success",children:"Thấp (Tốt)"})})]})]})]})}),$&&f.jsxs("div",{style:{marginTop:"16px",padding:"16px",background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"8px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#15803d",fontWeight:700,fontSize:"14px"},children:[f.jsx(_s,{size:18}),f.jsx("span",{children:"KẾT QUẢ ĐỊNH VỊ RÒ RỈ BẰNG THUẬT TOÁN TƯƠNG QUAN ÂM HỌC (ACOUSTIC CORRELATION)"})]}),f.jsxs("span",{className:"metric-badge badge-success",children:["Độ tin cậy: ",$.confidence]})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"10px",fontSize:"12.5px",marginTop:"10px"},children:[f.jsxs("div",{children:[f.jsx("b",{children:"Tọa độ định vị:"})," ",f.jsx("span",{style:{color:"#0f172a"},children:$.location})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Độ sâu chôn ống:"})," ",f.jsx("span",{style:{color:"#0f172a"},children:$.depth})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Cỡ & Vật liệu ống:"})," ",f.jsx("span",{style:{color:"#0284c7",fontWeight:600},children:$.pipe})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Lưu lượng thất thoát ước tính:"})," ",f.jsx("span",{style:{color:"#dc2626",fontWeight:700},children:$.lossRate})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Phổ tần số rung động:"})," ",f.jsx("span",{style:{fontFamily:"var(--font-mono)"},children:$.frequency})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Đề xuất xử lý:"})," ",f.jsx("span",{style:{color:"#d97706",fontWeight:600},children:$.recommendedAction})]})]})]})]})]}),s==="quality"&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[f.jsxs("div",{className:"metrics-grid",children:[f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Độ đục (Turbidity)"}),f.jsx(Zs,{size:18,color:"#0284c7"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"0.85"}),f.jsx("span",{className:"metric-unit",children:"NTU"})]}),f.jsx("span",{className:"metric-badge badge-success",children:"Chuẩn QCVN (< 2.0 NTU)"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Clo dư (Chlorine)"}),f.jsx(_s,{size:18,color:"#10b981"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"0.42"}),f.jsx("span",{className:"metric-unit",children:"mg/L"})]}),f.jsx("span",{className:"metric-badge badge-success",children:"Ngưỡng chuẩn (0.2 - 1.0 mg/L)"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Độ pH"}),f.jsx(bl,{size:18,color:"#0284c7"})]}),f.jsx("div",{className:"metric-body",children:f.jsx("span",{className:"metric-value",children:"7.35"})}),f.jsx("span",{className:"metric-badge badge-info",children:"Chuẩn (6.5 - 8.5)"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Chất rắn tan (TDS)"}),f.jsx(ro,{size:18,color:"#64748b"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"128"}),f.jsx("span",{className:"metric-unit",children:"ppm"})]}),f.jsx("span",{className:"metric-badge badge-success",children:"An toàn (< 1000 ppm)"})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(Zs,{size:17,color:"#0284c7"}),f.jsx("span",{children:"Trạm Quan Trắc Đa Chỉ Tiêu Thời Gian Thực (QCVN 01-1:2018/BYT)"})]}),f.jsx("button",{className:"btn-sm btn-primary",onClick:()=>nt("Chat_Luong_Nuoc_QCVN_THNC.csv"),children:"Xuất Báo Cáo"})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Trạm quan trắc"}),f.jsx("th",{children:"Vị trí đấu nối"}),f.jsx("th",{children:"Độ đục (NTU)"}),f.jsx("th",{children:"Clo dư (mg/L)"}),f.jsx("th",{children:"pH"}),f.jsx("th",{children:"TDS (ppm)"}),f.jsx("th",{children:"Van xả cặn tự động"}),f.jsx("th",{children:"Đánh giá chuẩn"})]})}),f.jsx("tbody",{children:[{station:"WQ-01 / Trạm Bơm Tăng Áp",loc:"Đầu nguồn cấp Lê Văn Lương",ntu:"0.62 NTU",cl:"0.55 mg/L",ph:"7.40",tds:"115 ppm",flush:"Đóng (Bình thường)",status:"Đạt chuẩn A",badge:"badge-success"},{station:"WQ-02 / Hố Đồng Hồ Mandarin",loc:"Cụm THPT Amsterdam - Hoàng Minh Giám",ntu:"1.45 NTU",cl:"0.38 mg/L",ph:"7.30",tds:"132 ppm",flush:"Đang xả đáy chu kỳ",status:"Cảnh báo nhẹ",badge:"badge-warning"},{station:"WQ-03 / Trạm Thứ Cấp Tháp 34T",loc:"Lõi Đô Thị Hoàng Đạo Thúy",ntu:"0.80 NTU",cl:"0.42 mg/L",ph:"7.35",tds:"124 ppm",flush:"Đóng (Bình thường)",status:"Đạt chuẩn A",badge:"badge-success"},{station:"WQ-04 / Trạm Tổ Hợp Charmvit",loc:"Cửa ngõ Trần Duy Hưng",ntu:"0.74 NTU",cl:"0.40 mg/L",ph:"7.38",tds:"128 ppm",flush:"Đóng (Bình thường)",status:"Đạt chuẩn A",badge:"badge-success"}].map((he,ht)=>f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:700},children:he.station}),f.jsx("td",{children:he.loc}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:he.ntu}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:he.cl}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:he.ph}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:he.tds}),f.jsx("td",{style:{fontSize:"12px"},children:he.flush}),f.jsx("td",{children:f.jsx("span",{className:`metric-badge ${he.badge}`,children:he.status})})]},ht))})]})})]}),f.jsxs("div",{className:"panel-card",style:{padding:"20px"},children:[f.jsx("h3",{style:{fontSize:"15px",fontWeight:"700",marginBottom:"8px"},children:"Cơ chế Giám sát Chất lượng Nước Tự Động Toàn KĐT"}),f.jsx("p",{style:{fontSize:"13px",color:"#64748b",lineHeight:"1.6"},children:"Mạng lưới quan trắc online tích hợp hệ thống IoT đa thông số (Multi-parameter Probe) đo đạc liên tục 15 phút/lần truyền về trung tâm SCADA qua mạng 4G/NB-IoT. Khi chỉ số độ đục vượt 2.0 NTU hoặc Clo dư dưới 0.2 mg/L, van xả cặn tự động (Auto Flushing Valve) tại hố xả cuối tuyến sẽ kích hoạt xả nước tồn đọng trong 5 phút và gửi cảnh báo tức thì tới kỹ sư vận hành."})]})]}),s==="reports"&&f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(X_,{size:18,color:"#0284c7"}),f.jsx("span",{children:"Cân bằng nước & Kiểm toán IWA"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"Tiêu chuẩn Quốc tế IWA"})]}),f.jsxs("div",{style:{display:"flex",gap:"8px"},children:[f.jsx("button",{className:"btn-sm btn-secondary",onClick:ut,title:"In hoặc lưu PDF",children:"In PDF"}),f.jsx("button",{className:"btn-sm btn-primary",onClick:()=>nt("Bao_Cao_Can_Bang_Nuoc_IWA.csv"),title:"Tải file CSV",children:"Tải CSV"})]})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Hạng mục"}),f.jsx("th",{children:"Khối lượng (m³)"}),f.jsx("th",{children:"Tỷ trọng (%)"}),f.jsx("th",{children:"Doanh thu / Thiệt hại"}),f.jsx("th",{children:"Đánh giá"})]})}),f.jsxs("tbody",{children:[f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"1. Tổng cấp mạng lưới SIV (Toàn KĐT Trung Hòa - Nhân Chính)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)",fontWeight:"700"},children:"380,000 m³"}),f.jsx("td",{children:"100.0%"}),f.jsx("td",{children:"Trạm bơm Tăng áp Lê Văn Lương"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-info",children:"Chuẩn đo đạc"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"32px",color:"#047857"},children:"1.1. Tiêu thụ có doanh thu (Billed Consumption)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"332,500 m³"}),f.jsx("td",{children:"87.5%"}),f.jsx("td",{children:"Thu tiền cư dân (~3.32 tỷ VNĐ)"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-success",children:"Đạt chỉ tiêu"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"32px",color:"#b91c1c"},children:"1.2. Thất thoát không doanh thu (NRW)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)",fontWeight:"700"},children:"47,500 m³"}),f.jsx("td",{children:"12.5%"}),f.jsx("td",{children:"Thiệt hại: ~475.0 tr VNĐ/tháng"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-danger",children:"Cần giảm < 10%"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"48px",color:"#64748b"},children:"- Thất thoát vật lý (Rò rỉ ống ngầm phân phối)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"35,340 m³"}),f.jsx("td",{children:"9.3%"}),f.jsx("td",{children:"Chảy ngầm trong đất"}),f.jsx("td",{children:"Trọng tâm xử lý: Tuyến Hoàng Đạo Thúy (DMA THNC-02)"})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"48px",color:"#64748b"},children:"- Thất thoát thương mại (Sai số đồng hồ, gian lận)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"12,160 m³"}),f.jsx("td",{children:"3.2%"}),f.jsx("td",{children:"Sai số cơ khí sau 5 năm"}),f.jsx("td",{children:"Thay thế đồng hồ điện từ AMR định kỳ"})]})]})]})})]})]})]}),_&&f.jsxs("div",{className:"toast-notification",children:[f.jsx(_s,{size:18,color:"#10b981"}),f.jsx("span",{children:_})]})]})}console.log("[SWMS] Initializing Smart Water Management UI...");const qh=document.getElementById("root");if(qh)try{H_.createRoot(qh).render(f.jsx(I_.StrictMode,{children:f.jsx(JE,{})})),console.log("[SWMS] App successfully mounted to DOM.")}catch(s){console.error("[SWMS] Fatal mount error:",s),qh.innerHTML=`
      <div style="padding: 24px; background: #fee2e2; color: #991b1b; font-family: monospace; border-radius: 8px; margin: 20px;">
        <h2>Lỗi Render Giao Diện React:</h2>
        <pre>${s.stack||s.message}</pre>
      </div>
    `}
