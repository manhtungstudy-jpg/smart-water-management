(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function ng(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var uh={exports:{}},ro={},hh={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function U_(){if(Dm)return Rt;Dm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),M=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=M&&O[M]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function y(O,re,Ue){this.props=O,this.context=re,this.refs=b,this.updater=Ue||S}y.prototype.isReactComponent={},y.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=y.prototype;function D(O,re,Ue){this.props=O,this.context=re,this.refs=b,this.updater=Ue||S}var k=D.prototype=new x;k.constructor=D,E(k,y.prototype),k.isPureReactComponent=!0;var L=Array.isArray,F=Object.prototype.hasOwnProperty,U={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function R(O,re,Ue){var oe,Te={},Ne=null,ze=null;if(re!=null)for(oe in re.ref!==void 0&&(ze=re.ref),re.key!==void 0&&(Ne=""+re.key),re)F.call(re,oe)&&!T.hasOwnProperty(oe)&&(Te[oe]=re[oe]);var Ee=arguments.length-2;if(Ee===1)Te.children=Ue;else if(1<Ee){for(var Ke=Array(Ee),gt=0;gt<Ee;gt++)Ke[gt]=arguments[gt+2];Te.children=Ke}if(O&&O.defaultProps)for(oe in Ee=O.defaultProps,Ee)Te[oe]===void 0&&(Te[oe]=Ee[oe]);return{$$typeof:s,type:O,key:Ne,ref:ze,props:Te,_owner:U.current}}function X(O,re){return{$$typeof:s,type:O.type,key:re,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function G(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ue){return re[Ue]})}var Z=/\/+/g;function ne(O,re){return typeof O=="object"&&O!==null&&O.key!=null?G(""+O.key):re.toString(36)}function H(O,re,Ue,oe,Te){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var ze=!1;if(O===null)ze=!0;else switch(Ne){case"string":case"number":ze=!0;break;case"object":switch(O.$$typeof){case s:case e:ze=!0}}if(ze)return ze=O,Te=Te(ze),O=oe===""?"."+ne(ze,0):oe,L(Te)?(Ue="",O!=null&&(Ue=O.replace(Z,"$&/")+"/"),H(Te,re,Ue,"",function(gt){return gt})):Te!=null&&(P(Te)&&(Te=X(Te,Ue+(!Te.key||ze&&ze.key===Te.key?"":(""+Te.key).replace(Z,"$&/")+"/")+O)),re.push(Te)),1;if(ze=0,oe=oe===""?".":oe+":",L(O))for(var Ee=0;Ee<O.length;Ee++){Ne=O[Ee];var Ke=oe+ne(Ne,Ee);ze+=H(Ne,re,Ue,Ke,Te)}else if(Ke=v(O),typeof Ke=="function")for(O=Ke.call(O),Ee=0;!(Ne=O.next()).done;)Ne=Ne.value,Ke=oe+ne(Ne,Ee++),ze+=H(Ne,re,Ue,Ke,Te);else if(Ne==="object")throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ze}function ee(O,re,Ue){if(O==null)return O;var oe=[],Te=0;return H(O,oe,"","",function(Ne){return re.call(Ue,Ne,Te++)}),oe}function K(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(Ue){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ue)},function(Ue){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ue)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var Q={current:null},$={transition:null},Y={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:$,ReactCurrentOwner:U};function J(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:ee,forEach:function(O,re,Ue){ee(O,function(){re.apply(this,arguments)},Ue)},count:function(O){var re=0;return ee(O,function(){re++}),re},toArray:function(O){return ee(O,function(re){return re})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Rt.Component=y,Rt.Fragment=t,Rt.Profiler=o,Rt.PureComponent=D,Rt.StrictMode=r,Rt.Suspense=p,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,Rt.act=J,Rt.cloneElement=function(O,re,Ue){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var oe=E({},O.props),Te=O.key,Ne=O.ref,ze=O._owner;if(re!=null){if(re.ref!==void 0&&(Ne=re.ref,ze=U.current),re.key!==void 0&&(Te=""+re.key),O.type&&O.type.defaultProps)var Ee=O.type.defaultProps;for(Ke in re)F.call(re,Ke)&&!T.hasOwnProperty(Ke)&&(oe[Ke]=re[Ke]===void 0&&Ee!==void 0?Ee[Ke]:re[Ke])}var Ke=arguments.length-2;if(Ke===1)oe.children=Ue;else if(1<Ke){Ee=Array(Ke);for(var gt=0;gt<Ke;gt++)Ee[gt]=arguments[gt+2];oe.children=Ee}return{$$typeof:s,type:O.type,key:Te,ref:Ne,props:oe,_owner:ze}},Rt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Rt.createElement=R,Rt.createFactory=function(O){var re=R.bind(null,O);return re.type=O,re},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(O){return{$$typeof:d,render:O}},Rt.isValidElement=P,Rt.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:K}},Rt.memo=function(O,re){return{$$typeof:m,type:O,compare:re===void 0?null:re}},Rt.startTransition=function(O){var re=$.transition;$.transition={};try{O()}finally{$.transition=re}},Rt.unstable_act=J,Rt.useCallback=function(O,re){return Q.current.useCallback(O,re)},Rt.useContext=function(O){return Q.current.useContext(O)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(O){return Q.current.useDeferredValue(O)},Rt.useEffect=function(O,re){return Q.current.useEffect(O,re)},Rt.useId=function(){return Q.current.useId()},Rt.useImperativeHandle=function(O,re,Ue){return Q.current.useImperativeHandle(O,re,Ue)},Rt.useInsertionEffect=function(O,re){return Q.current.useInsertionEffect(O,re)},Rt.useLayoutEffect=function(O,re){return Q.current.useLayoutEffect(O,re)},Rt.useMemo=function(O,re){return Q.current.useMemo(O,re)},Rt.useReducer=function(O,re,Ue){return Q.current.useReducer(O,re,Ue)},Rt.useRef=function(O){return Q.current.useRef(O)},Rt.useState=function(O){return Q.current.useState(O)},Rt.useSyncExternalStore=function(O,re,Ue){return Q.current.useSyncExternalStore(O,re,Ue)},Rt.useTransition=function(){return Q.current.useTransition()},Rt.version="18.3.1",Rt}var Lm;function Xd(){return Lm||(Lm=1,hh.exports=U_()),hh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function O_(){if(Im)return ro;Im=1;var s=Xd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var _,M={},v=null,S=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!l.hasOwnProperty(_)&&(M[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)M[_]===void 0&&(M[_]=p[_]);return{$$typeof:e,type:d,key:v,ref:S,props:M,_owner:o.current}}return ro.Fragment=t,ro.jsx=u,ro.jsxs=u,ro}var Um;function F_(){return Um||(Um=1,uh.exports=O_()),uh.exports}var f=F_(),wt=Xd();const k_=ng(wt);var Nl={},dh={exports:{}},di={},fh={exports:{}},ph={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function z_(){return Om||(Om=1,(function(s){function e($,Y){var J=$.length;$.push(Y);e:for(;0<J;){var O=J-1>>>1,re=$[O];if(0<o(re,Y))$[O]=Y,$[J]=re,J=O;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],J=$.pop();if(J!==Y){$[0]=J;e:for(var O=0,re=$.length,Ue=re>>>1;O<Ue;){var oe=2*(O+1)-1,Te=$[oe],Ne=oe+1,ze=$[Ne];if(0>o(Te,J))Ne<re&&0>o(ze,Te)?($[O]=ze,$[Ne]=J,O=Ne):($[O]=Te,$[oe]=J,O=oe);else if(Ne<re&&0>o(ze,J))$[O]=ze,$[Ne]=J,O=Ne;else break e}}return Y}function o($,Y){var J=$.sortIndex-Y.sortIndex;return J!==0?J:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],_=1,M=null,v=3,S=!1,E=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k($){for(var Y=t(m);Y!==null;){if(Y.callback===null)r(m);else if(Y.startTime<=$)r(m),Y.sortIndex=Y.expirationTime,e(p,Y);else break;Y=t(m)}}function L($){if(b=!1,k($),!E)if(t(p)!==null)E=!0,K(F);else{var Y=t(m);Y!==null&&Q(L,Y.startTime-$)}}function F($,Y){E=!1,b&&(b=!1,x(R),R=-1),S=!0;var J=v;try{for(k(Y),M=t(p);M!==null&&(!(M.expirationTime>Y)||$&&!G());){var O=M.callback;if(typeof O=="function"){M.callback=null,v=M.priorityLevel;var re=O(M.expirationTime<=Y);Y=s.unstable_now(),typeof re=="function"?M.callback=re:M===t(p)&&r(p),k(Y)}else r(p);M=t(p)}if(M!==null)var Ue=!0;else{var oe=t(m);oe!==null&&Q(L,oe.startTime-Y),Ue=!1}return Ue}finally{M=null,v=J,S=!1}}var U=!1,T=null,R=-1,X=5,P=-1;function G(){return!(s.unstable_now()-P<X)}function Z(){if(T!==null){var $=s.unstable_now();P=$;var Y=!0;try{Y=T(!0,$)}finally{Y?ne():(U=!1,T=null)}}else U=!1}var ne;if(typeof D=="function")ne=function(){D(Z)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ee=H.port2;H.port1.onmessage=Z,ne=function(){ee.postMessage(null)}}else ne=function(){y(Z,0)};function K($){T=$,U||(U=!0,ne())}function Q($,Y){R=y(function(){$(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function($){$.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,K(F))},s.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<$?Math.floor(1e3/$):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function($){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var J=v;v=Y;try{return $()}finally{v=J}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=v;v=$;try{return Y()}finally{v=J}},s.unstable_scheduleCallback=function($,Y,J){var O=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?O+J:O):J=O,$){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=J+re,$={id:_++,callback:Y,priorityLevel:$,startTime:J,expirationTime:re,sortIndex:-1},J>O?($.sortIndex=J,e(m,$),t(p)===null&&$===t(m)&&(b?(x(R),R=-1):b=!0,Q(L,J-O))):($.sortIndex=re,e(p,$),E||S||(E=!0,K(F))),$},s.unstable_shouldYield=G,s.unstable_wrapCallback=function($){var Y=v;return function(){var J=v;v=Y;try{return $.apply(this,arguments)}finally{v=J}}}})(ph)),ph}var Fm;function B_(){return Fm||(Fm=1,fh.exports=z_()),fh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function H_(){if(km)return di;km=1;var s=Xd(),e=B_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},M={};function v(n){return p.call(M,n)?!0:p.call(_,n)?!1:m.test(n)?M[n]=!0:(_[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,a,c,h,g,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,D);y[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function k(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,c)&&(a=null),c||h===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),U=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),G=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),$=Symbol.iterator;function Y(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var J=Object.assign,O;function re(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Ue=!1;function oe(n,i){if(!n||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var c=fe}Reflect.construct(n,[],i)}else{try{i.call()}catch(fe){c=fe}n.call(i.prototype)}else{try{throw Error()}catch(fe){c=fe}n()}}catch(fe){if(fe&&c&&typeof fe.stack=="string"){for(var h=fe.stack.split(`
`),g=c.stack.split(`
`),C=h.length-1,z=g.length-1;1<=C&&0<=z&&h[C]!==g[z];)z--;for(;1<=C&&0<=z;C--,z--)if(h[C]!==g[z]){if(C!==1||z!==1)do if(C--,z--,0>z||h[C]!==g[z]){var j=`
`+h[C].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=C&&0<=z);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function Te(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=oe(n.type,!1),n;case 11:return n=oe(n.type.render,!1),n;case 1:return n=oe(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case T:return"Fragment";case U:return"Portal";case X:return"Profiler";case R:return"StrictMode";case ne:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case Z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ee:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case K:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function ze(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ee(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function gt(n){var i=Ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(C){c=""+C,g.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function qe(n){n._valueTracker||(n._valueTracker=gt(n))}function lt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ke(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function St(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function st(n,i){var a=i.checked;return J({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Yt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ee(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function tn(n,i){i=i.checked,i!=null&&k(n,"checked",i,!1)}function $t(n,i){tn(n,i);var a=Ee(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?En(n,i.type,a):i.hasOwnProperty("defaultValue")&&En(n,i.type,Ee(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ut(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function En(n,i,a){(i!=="number"||St(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ht=Array.isArray;function on(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ee(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function ve(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return J({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $e(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ht(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ee(a)}}function V(n,i){var a=Ee(i.value),c=Ee(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function xt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ut(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ut(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,yt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ve(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I=["Webkit","ms","Moz","O"];Object.keys(je).forEach(function(n){I.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),je[i]=je[n]})});function w(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||je.hasOwnProperty(n)&&je[n]?(""+i).trim():i+"px"}function se(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=w(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Re=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pe(n,i){if(i){if(Re[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ye(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ke=null;function me(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var _e=null,De=null,B=null;function xe(n){if(n=Ga(n)){if(typeof _e!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Wo(i),_e(n.stateNode,n.type,i))}}function ge(n){De?B?B.push(n):B=[n]:De=n}function Oe(){if(De){var n=De,i=B;if(B=De=null,xe(n),i)for(n=0;n<i.length;n++)xe(i[n])}}function le(n,i){return n(i)}function ie(){}var Le=!1;function we(n,i,a){if(Le)return n(i,a);Le=!0;try{return le(n,i,a)}finally{Le=!1,(De!==null||B!==null)&&(ie(),Oe())}}function ce(n,i){var a=n.stateNode;if(a===null)return null;var c=Wo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Pe=!1;if(d)try{var Se={};Object.defineProperty(Se,"passive",{get:function(){Pe=!0}}),window.addEventListener("test",Se,Se),window.removeEventListener("test",Se,Se)}catch{Pe=!1}function Me(n,i,a,c,h,g,C,z,j){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(a,fe)}catch(be){this.onError(be)}}var Ze=!1,ct=null,Pt=!1,jt=null,Zt={onError:function(n){Ze=!0,ct=n}};function nn(n,i,a,c,h,g,C,z,j){Ze=!1,ct=null,Me.apply(Zt,arguments)}function Et(n,i,a,c,h,g,C,z,j){if(nn.apply(this,arguments),Ze){if(Ze){var fe=ct;Ze=!1,ct=null}else throw Error(t(198));Pt||(Pt=!0,jt=fe)}}function hn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function bt(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function dn(n){if(hn(n)!==n)throw Error(t(188))}function rn(n){var i=n.alternate;if(!i){if(i=hn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return dn(h),n;if(g===c)return dn(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var C=!1,z=h.child;z;){if(z===a){C=!0,a=h,c=g;break}if(z===c){C=!0,c=h,a=g;break}z=z.sibling}if(!C){for(z=g.child;z;){if(z===a){C=!0,a=g,c=h;break}if(z===c){C=!0,c=g,a=h;break}z=z.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function kn(n){return n=rn(n),n!==null?Vn(n):null}function Vn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Vn(n);if(i!==null)return i;n=n.sibling}return null}var mi=e.unstable_scheduleCallback,Gn=e.unstable_cancelCallback,ln=e.unstable_shouldYield,fn=e.unstable_requestPaint,Vt=e.unstable_now,gi=e.unstable_getCurrentPriorityLevel,ai=e.unstable_ImmediatePriority,Li=e.unstable_UserBlockingPriority,Wn=e.unstable_NormalPriority,Rr=e.unstable_LowPriority,A=e.unstable_IdlePriority,W=null,he=null;function ae(n){if(he&&typeof he.onCommitFiberRoot=="function")try{he.onCommitFiberRoot(W,n,void 0,(n.current.flags&128)===128)}catch{}}var te=Math.clz32?Math.clz32:Be,He=Math.log,Qe=Math.LN2;function Be(n){return n>>>=0,n===0?32:31-(He(n)/Qe|0)|0}var Ge=64,et=4194304;function pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,C=a&268435455;if(C!==0){var z=C&~h;z!==0?c=pt(z):(g&=C,g!==0&&(c=pt(g)))}else C=a&~h,C!==0?c=pt(C):g!==0&&(c=pt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-te(i),h=1<<a,c|=n[a],i&=~h;return c}function tt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var C=31-te(g),z=1<<C,j=h[C];j===-1?((z&a)===0||(z&c)!==0)&&(h[C]=tt(z,i)):j<=i&&(n.expiredLanes|=z),g&=~z}}function cn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xt(){var n=Ge;return Ge<<=1,(Ge&4194240)===0&&(Ge=64),n}function Gt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function vn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-te(i),n[i]=a}function nt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-te(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function wn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-te(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var at=0;function qi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Cn,Pr,Ii,Yi,Dt,xn=!1,jn=[],zt=null,Qt=null,Ln=null,Dr=new Map,ba=new Map,Lr=[],iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mf(n,i){switch(n){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Dr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(i.pointerId)}}function Na(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Ga(i),i!==null&&Pr(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function rv(n,i,a,c,h){switch(i){case"focusin":return zt=Na(zt,n,i,a,c,h),!0;case"dragenter":return Qt=Na(Qt,n,i,a,c,h),!0;case"mouseover":return Ln=Na(Ln,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return Dr.set(g,Na(Dr.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,ba.set(g,Na(ba.get(g)||null,n,i,a,c,h)),!0}return!1}function gf(n){var i=ls(n.target);if(i!==null){var a=hn(i);if(a!==null){if(i=a.tag,i===13){if(i=bt(a),i!==null){n.blockedOn=i,Dt(n.priority,function(){Ii(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ro(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Fc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ke=c,a.target.dispatchEvent(c),ke=null}else return i=Ga(a),i!==null&&Pr(i),n.blockedOn=a,!1;i.shift()}return!0}function vf(n,i,a){Ro(n)&&a.delete(i)}function sv(){xn=!1,zt!==null&&Ro(zt)&&(zt=null),Qt!==null&&Ro(Qt)&&(Qt=null),Ln!==null&&Ro(Ln)&&(Ln=null),Dr.forEach(vf),ba.forEach(vf)}function Ra(n,i){n.blockedOn===i&&(n.blockedOn=null,xn||(xn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sv)))}function Pa(n){function i(h){return Ra(h,n)}if(0<jn.length){Ra(jn[0],n);for(var a=1;a<jn.length;a++){var c=jn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(zt!==null&&Ra(zt,n),Qt!==null&&Ra(Qt,n),Ln!==null&&Ra(Ln,n),Dr.forEach(i),ba.forEach(i),a=0;a<Lr.length;a++)c=Lr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Lr.length&&(a=Lr[0],a.blockedOn===null);)gf(a),a.blockedOn===null&&Lr.shift()}var Ps=L.ReactCurrentBatchConfig,Po=!0;function av(n,i,a,c){var h=at,g=Ps.transition;Ps.transition=null;try{at=1,Oc(n,i,a,c)}finally{at=h,Ps.transition=g}}function ov(n,i,a,c){var h=at,g=Ps.transition;Ps.transition=null;try{at=4,Oc(n,i,a,c)}finally{at=h,Ps.transition=g}}function Oc(n,i,a,c){if(Po){var h=Fc(n,i,a,c);if(h===null)eu(n,i,c,Do,a),mf(n,c);else if(rv(h,n,i,a,c))c.stopPropagation();else if(mf(n,c),i&4&&-1<iv.indexOf(n)){for(;h!==null;){var g=Ga(h);if(g!==null&&Cn(g),g=Fc(n,i,a,c),g===null&&eu(n,i,c,Do,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else eu(n,i,c,null,a)}}var Do=null;function Fc(n,i,a,c){if(Do=null,n=me(c),n=ls(n),n!==null)if(i=hn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=bt(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Do=n,null}function _f(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gi()){case ai:return 1;case Li:return 4;case Wn:case Rr:return 16;case A:return 536870912;default:return 16}default:return 16}}var Ir=null,kc=null,Lo=null;function xf(){if(Lo)return Lo;var n,i=kc,a=i.length,c,h="value"in Ir?Ir.value:Ir.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var C=a-n;for(c=1;c<=C&&i[a-c]===h[g-c];c++);return Lo=h.slice(n,1<c?1-c:void 0)}function Io(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Uo(){return!0}function yf(){return!1}function vi(n){function i(a,c,h,g,C){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=C,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(a=n[z],this[z]=a?a(g):g[z]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Uo:yf,this.isPropagationStopped=yf,this}return J(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),i}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zc=vi(Ds),Da=J({},Ds,{view:0,detail:0}),lv=vi(Da),Bc,Hc,La,Oo=J({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==La&&(La&&n.type==="mousemove"?(Bc=n.screenX-La.screenX,Hc=n.screenY-La.screenY):Hc=Bc=0,La=n),Bc)},movementY:function(n){return"movementY"in n?n.movementY:Hc}}),Sf=vi(Oo),cv=J({},Oo,{dataTransfer:0}),uv=vi(cv),hv=J({},Da,{relatedTarget:0}),Vc=vi(hv),dv=J({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=vi(dv),pv=J({},Ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),mv=vi(pv),gv=J({},Ds,{data:0}),Mf=vi(gv),vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=xv[n])?!!i[n]:!1}function Gc(){return yv}var Sv=J({},Da,{key:function(n){if(n.key){var i=vv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Io(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_v[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(n){return n.type==="keypress"?Io(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Io(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Mv=vi(Sv),Tv=J({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tf=vi(Tv),Ev=J({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),wv=vi(Ev),Cv=J({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Av=vi(Cv),bv=J({},Oo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=vi(bv),Rv=[9,13,27,32],Wc=d&&"CompositionEvent"in window,Ia=null;d&&"documentMode"in document&&(Ia=document.documentMode);var Pv=d&&"TextEvent"in window&&!Ia,Ef=d&&(!Wc||Ia&&8<Ia&&11>=Ia),wf=" ",Cf=!1;function Af(n,i){switch(n){case"keyup":return Rv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function Dv(n,i){switch(n){case"compositionend":return bf(i);case"keypress":return i.which!==32?null:(Cf=!0,wf);case"textInput":return n=i.data,n===wf&&Cf?null:n;default:return null}}function Lv(n,i){if(Ls)return n==="compositionend"||!Wc&&Af(n,i)?(n=xf(),Lo=kc=Ir=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ef&&i.locale!=="ko"?null:i.data;default:return null}}var Iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Iv[n.type]:i==="textarea"}function Rf(n,i,a,c){ge(c),i=Ho(i,"onChange"),0<i.length&&(a=new zc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ua=null,Oa=null;function Uv(n){qf(n,0)}function Fo(n){var i=ks(n);if(lt(i))return n}function Ov(n,i){if(n==="change")return i}var Pf=!1;if(d){var jc;if(d){var Xc="oninput"in document;if(!Xc){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),Xc=typeof Df.oninput=="function"}jc=Xc}else jc=!1;Pf=jc&&(!document.documentMode||9<document.documentMode)}function Lf(){Ua&&(Ua.detachEvent("onpropertychange",If),Oa=Ua=null)}function If(n){if(n.propertyName==="value"&&Fo(Oa)){var i=[];Rf(i,Oa,n,me(n)),we(Uv,i)}}function Fv(n,i,a){n==="focusin"?(Lf(),Ua=i,Oa=a,Ua.attachEvent("onpropertychange",If)):n==="focusout"&&Lf()}function kv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fo(Oa)}function zv(n,i){if(n==="click")return Fo(i)}function Bv(n,i){if(n==="input"||n==="change")return Fo(i)}function Hv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ui=typeof Object.is=="function"?Object.is:Hv;function Fa(n,i){if(Ui(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!Ui(n[h],i[h]))return!1}return!0}function Uf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Of(n,i){var a=Uf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Uf(a)}}function Ff(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ff(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function kf(){for(var n=window,i=St();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=St(n.document)}return i}function Kc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Vv(n){var i=kf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ff(a.ownerDocument.documentElement,a)){if(c!==null&&Kc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=Of(a,g);var C=Of(a,c);h&&C&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Gv=d&&"documentMode"in document&&11>=document.documentMode,Is=null,qc=null,ka=null,Yc=!1;function zf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yc||Is==null||Is!==St(c)||(c=Is,"selectionStart"in c&&Kc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ka&&Fa(ka,c)||(ka=c,c=Ho(qc,"onSelect"),0<c.length&&(i=new zc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Is)))}function ko(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Us={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},$c={},Bf={};d&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function zo(n){if($c[n])return $c[n];if(!Us[n])return n;var i=Us[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Bf)return $c[n]=i[a];return n}var Hf=zo("animationend"),Vf=zo("animationiteration"),Gf=zo("animationstart"),Wf=zo("transitionend"),jf=new Map,Xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,i){jf.set(n,i),l(i,[n])}for(var Zc=0;Zc<Xf.length;Zc++){var Qc=Xf[Zc],Wv=Qc.toLowerCase(),jv=Qc[0].toUpperCase()+Qc.slice(1);Ur(Wv,"on"+jv)}Ur(Hf,"onAnimationEnd"),Ur(Vf,"onAnimationIteration"),Ur(Gf,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(Wf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xv=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function Kf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Et(c,i,void 0,n),n.currentTarget=null}function qf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var C=c.length-1;0<=C;C--){var z=c[C],j=z.instance,fe=z.currentTarget;if(z=z.listener,j!==g&&h.isPropagationStopped())break e;Kf(h,z,fe),g=j}else for(C=0;C<c.length;C++){if(z=c[C],j=z.instance,fe=z.currentTarget,z=z.listener,j!==g&&h.isPropagationStopped())break e;Kf(h,z,fe),g=j}}}if(Pt)throw n=jt,Pt=!1,jt=null,n}function sn(n,i){var a=i[au];a===void 0&&(a=i[au]=new Set);var c=n+"__bubble";a.has(c)||(Yf(i,n,2,!1),a.add(c))}function Jc(n,i,a){var c=0;i&&(c|=4),Yf(a,n,c,i)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function Ba(n){if(!n[Bo]){n[Bo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Xv.has(a)||Jc(a,!1,n),Jc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Bo]||(i[Bo]=!0,Jc("selectionchange",!1,i))}}function Yf(n,i,a,c){switch(_f(i)){case 1:var h=av;break;case 4:h=ov;break;default:h=Oc}a=h.bind(null,i,a,n),h=void 0,!Pe||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function eu(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var z=c.stateNode.containerInfo;if(z===h||z.nodeType===8&&z.parentNode===h)break;if(C===4)for(C=c.return;C!==null;){var j=C.tag;if((j===3||j===4)&&(j=C.stateNode.containerInfo,j===h||j.nodeType===8&&j.parentNode===h))return;C=C.return}for(;z!==null;){if(C=ls(z),C===null)return;if(j=C.tag,j===5||j===6){c=g=C;continue e}z=z.parentNode}}c=c.return}we(function(){var fe=g,be=me(a),Ie=[];e:{var Ce=jf.get(n);if(Ce!==void 0){var Ye=zc,it=n;switch(n){case"keypress":if(Io(a)===0)break e;case"keydown":case"keyup":Ye=Mv;break;case"focusin":it="focus",Ye=Vc;break;case"focusout":it="blur",Ye=Vc;break;case"beforeblur":case"afterblur":Ye=Vc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ye=Sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ye=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ye=wv;break;case Hf:case Vf:case Gf:Ye=fv;break;case Wf:Ye=Av;break;case"scroll":Ye=lv;break;case"wheel":Ye=Nv;break;case"copy":case"cut":case"paste":Ye=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ye=Tf}var rt=(i&4)!==0,yn=!rt&&n==="scroll",ue=rt?Ce!==null?Ce+"Capture":null:Ce;rt=[];for(var q=fe,de;q!==null;){de=q;var Fe=de.stateNode;if(de.tag===5&&Fe!==null&&(de=Fe,ue!==null&&(Fe=ce(q,ue),Fe!=null&&rt.push(Ha(q,Fe,de)))),yn)break;q=q.return}0<rt.length&&(Ce=new Ye(Ce,it,null,a,be),Ie.push({event:Ce,listeners:rt}))}}if((i&7)===0){e:{if(Ce=n==="mouseover"||n==="pointerover",Ye=n==="mouseout"||n==="pointerout",Ce&&a!==ke&&(it=a.relatedTarget||a.fromElement)&&(ls(it)||it[cr]))break e;if((Ye||Ce)&&(Ce=be.window===be?be:(Ce=be.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,Ye?(it=a.relatedTarget||a.toElement,Ye=fe,it=it?ls(it):null,it!==null&&(yn=hn(it),it!==yn||it.tag!==5&&it.tag!==6)&&(it=null)):(Ye=null,it=fe),Ye!==it)){if(rt=Sf,Fe="onMouseLeave",ue="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(rt=Tf,Fe="onPointerLeave",ue="onPointerEnter",q="pointer"),yn=Ye==null?Ce:ks(Ye),de=it==null?Ce:ks(it),Ce=new rt(Fe,q+"leave",Ye,a,be),Ce.target=yn,Ce.relatedTarget=de,Fe=null,ls(be)===fe&&(rt=new rt(ue,q+"enter",it,a,be),rt.target=de,rt.relatedTarget=yn,Fe=rt),yn=Fe,Ye&&it)t:{for(rt=Ye,ue=it,q=0,de=rt;de;de=Os(de))q++;for(de=0,Fe=ue;Fe;Fe=Os(Fe))de++;for(;0<q-de;)rt=Os(rt),q--;for(;0<de-q;)ue=Os(ue),de--;for(;q--;){if(rt===ue||ue!==null&&rt===ue.alternate)break t;rt=Os(rt),ue=Os(ue)}rt=null}else rt=null;Ye!==null&&$f(Ie,Ce,Ye,rt,!1),it!==null&&yn!==null&&$f(Ie,yn,it,rt,!0)}}e:{if(Ce=fe?ks(fe):window,Ye=Ce.nodeName&&Ce.nodeName.toLowerCase(),Ye==="select"||Ye==="input"&&Ce.type==="file")var ot=Ov;else if(Nf(Ce))if(Pf)ot=Bv;else{ot=kv;var dt=Fv}else(Ye=Ce.nodeName)&&Ye.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(ot=zv);if(ot&&(ot=ot(n,fe))){Rf(Ie,ot,a,be);break e}dt&&dt(n,Ce,fe),n==="focusout"&&(dt=Ce._wrapperState)&&dt.controlled&&Ce.type==="number"&&En(Ce,"number",Ce.value)}switch(dt=fe?ks(fe):window,n){case"focusin":(Nf(dt)||dt.contentEditable==="true")&&(Is=dt,qc=fe,ka=null);break;case"focusout":ka=qc=Is=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,zf(Ie,a,be);break;case"selectionchange":if(Gv)break;case"keydown":case"keyup":zf(Ie,a,be)}var ft;if(Wc)e:{switch(n){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Ls?Af(n,a)&&(vt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(Ef&&a.locale!=="ko"&&(Ls||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Ls&&(ft=xf()):(Ir=be,kc="value"in Ir?Ir.value:Ir.textContent,Ls=!0)),dt=Ho(fe,vt),0<dt.length&&(vt=new Mf(vt,n,null,a,be),Ie.push({event:vt,listeners:dt}),ft?vt.data=ft:(ft=bf(a),ft!==null&&(vt.data=ft)))),(ft=Pv?Dv(n,a):Lv(n,a))&&(fe=Ho(fe,"onBeforeInput"),0<fe.length&&(be=new Mf("onBeforeInput","beforeinput",null,a,be),Ie.push({event:be,listeners:fe}),be.data=ft))}qf(Ie,i)})}function Ha(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ho(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=ce(n,a),g!=null&&c.unshift(Ha(n,g,h)),g=ce(n,i),g!=null&&c.push(Ha(n,g,h))),n=n.return}return c}function Os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $f(n,i,a,c,h){for(var g=i._reactName,C=[];a!==null&&a!==c;){var z=a,j=z.alternate,fe=z.stateNode;if(j!==null&&j===c)break;z.tag===5&&fe!==null&&(z=fe,h?(j=ce(a,g),j!=null&&C.unshift(Ha(a,j,z))):h||(j=ce(a,g),j!=null&&C.push(Ha(a,j,z)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var Kv=/\r\n?/g,qv=/\u0000|\uFFFD/g;function Zf(n){return(typeof n=="string"?n:""+n).replace(Kv,`
`).replace(qv,"")}function Vo(n,i,a){if(i=Zf(i),Zf(n)!==i&&a)throw Error(t(425))}function Go(){}var tu=null,nu=null;function iu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ru=typeof setTimeout=="function"?setTimeout:void 0,Yv=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,$v=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(n){return Qf.resolve(null).then(n).catch(Zv)}:ru;function Zv(n){setTimeout(function(){throw n})}function su(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),Pa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);Pa(i)}function Or(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Jf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),$i="__reactFiber$"+Fs,Va="__reactProps$"+Fs,cr="__reactContainer$"+Fs,au="__reactEvents$"+Fs,Qv="__reactListeners$"+Fs,Jv="__reactHandles$"+Fs;function ls(n){var i=n[$i];if(i)return i;for(var a=n.parentNode;a;){if(i=a[cr]||a[$i]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Jf(n);n!==null;){if(a=n[$i])return a;n=Jf(n)}return i}n=a,a=n.parentNode}return null}function Ga(n){return n=n[$i]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Wo(n){return n[Va]||null}var ou=[],zs=-1;function Fr(n){return{current:n}}function an(n){0>zs||(n.current=ou[zs],ou[zs]=null,zs--)}function en(n,i){zs++,ou[zs]=n.current,n.current=i}var kr={},Xn=Fr(kr),oi=Fr(!1),cs=kr;function Bs(n,i){var a=n.type.contextTypes;if(!a)return kr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function li(n){return n=n.childContextTypes,n!=null}function jo(){an(oi),an(Xn)}function ep(n,i,a){if(Xn.current!==kr)throw Error(t(168));en(Xn,i),en(oi,a)}function tp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,ze(n)||"Unknown",h));return J({},a,c)}function Xo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||kr,cs=Xn.current,en(Xn,n),en(oi,oi.current),!0}function np(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=tp(n,i,cs),c.__reactInternalMemoizedMergedChildContext=n,an(oi),an(Xn),en(Xn,n)):an(oi),en(oi,a)}var ur=null,Ko=!1,lu=!1;function ip(n){ur===null?ur=[n]:ur.push(n)}function e_(n){Ko=!0,ip(n)}function zr(){if(!lu&&ur!==null){lu=!0;var n=0,i=at;try{var a=ur;for(at=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ur=null,Ko=!1}catch(h){throw ur!==null&&(ur=ur.slice(n+1)),mi(ai,zr),h}finally{at=i,lu=!1}}return null}var Hs=[],Vs=0,qo=null,Yo=0,wi=[],Ci=0,us=null,hr=1,dr="";function hs(n,i){Hs[Vs++]=Yo,Hs[Vs++]=qo,qo=n,Yo=i}function rp(n,i,a){wi[Ci++]=hr,wi[Ci++]=dr,wi[Ci++]=us,us=n;var c=hr;n=dr;var h=32-te(c)-1;c&=~(1<<h),a+=1;var g=32-te(i)+h;if(30<g){var C=h-h%5;g=(c&(1<<C)-1).toString(32),c>>=C,h-=C,hr=1<<32-te(i)+h|a<<h|c,dr=g+n}else hr=1<<g|a<<h|c,dr=n}function cu(n){n.return!==null&&(hs(n,1),rp(n,1,0))}function uu(n){for(;n===qo;)qo=Hs[--Vs],Hs[Vs]=null,Yo=Hs[--Vs],Hs[Vs]=null;for(;n===us;)us=wi[--Ci],wi[Ci]=null,dr=wi[--Ci],wi[Ci]=null,hr=wi[--Ci],wi[Ci]=null}var _i=null,xi=null,un=!1,Oi=null;function sp(n,i){var a=Ri(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function ap(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,_i=n,xi=Or(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,_i=n,xi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=us!==null?{id:hr,overflow:dr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ri(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,_i=n,xi=null,!0):!1;default:return!1}}function hu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function du(n){if(un){var i=xi;if(i){var a=i;if(!ap(n,i)){if(hu(n))throw Error(t(418));i=Or(a.nextSibling);var c=_i;i&&ap(n,i)?sp(c,a):(n.flags=n.flags&-4097|2,un=!1,_i=n)}}else{if(hu(n))throw Error(t(418));n.flags=n.flags&-4097|2,un=!1,_i=n}}}function op(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;_i=n}function $o(n){if(n!==_i)return!1;if(!un)return op(n),un=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!iu(n.type,n.memoizedProps)),i&&(i=xi)){if(hu(n))throw lp(),Error(t(418));for(;i;)sp(n,i),i=Or(i.nextSibling)}if(op(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){xi=Or(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}xi=null}}else xi=_i?Or(n.stateNode.nextSibling):null;return!0}function lp(){for(var n=xi;n;)n=Or(n.nextSibling)}function Gs(){xi=_i=null,un=!1}function fu(n){Oi===null?Oi=[n]:Oi.push(n)}var t_=L.ReactCurrentBatchConfig;function Wa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(C){var z=h.refs;C===null?delete z[g]:z[g]=C},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Zo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function cp(n){var i=n._init;return i(n._payload)}function up(n){function i(ue,q){if(n){var de=ue.deletions;de===null?(ue.deletions=[q],ue.flags|=16):de.push(q)}}function a(ue,q){if(!n)return null;for(;q!==null;)i(ue,q),q=q.sibling;return null}function c(ue,q){for(ue=new Map;q!==null;)q.key!==null?ue.set(q.key,q):ue.set(q.index,q),q=q.sibling;return ue}function h(ue,q){return ue=Kr(ue,q),ue.index=0,ue.sibling=null,ue}function g(ue,q,de){return ue.index=de,n?(de=ue.alternate,de!==null?(de=de.index,de<q?(ue.flags|=2,q):de):(ue.flags|=2,q)):(ue.flags|=1048576,q)}function C(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function z(ue,q,de,Fe){return q===null||q.tag!==6?(q=rh(de,ue.mode,Fe),q.return=ue,q):(q=h(q,de),q.return=ue,q)}function j(ue,q,de,Fe){var ot=de.type;return ot===T?be(ue,q,de.props.children,Fe,de.key):q!==null&&(q.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===K&&cp(ot)===q.type)?(Fe=h(q,de.props),Fe.ref=Wa(ue,q,de),Fe.return=ue,Fe):(Fe=Sl(de.type,de.key,de.props,null,ue.mode,Fe),Fe.ref=Wa(ue,q,de),Fe.return=ue,Fe)}function fe(ue,q,de,Fe){return q===null||q.tag!==4||q.stateNode.containerInfo!==de.containerInfo||q.stateNode.implementation!==de.implementation?(q=sh(de,ue.mode,Fe),q.return=ue,q):(q=h(q,de.children||[]),q.return=ue,q)}function be(ue,q,de,Fe,ot){return q===null||q.tag!==7?(q=xs(de,ue.mode,Fe,ot),q.return=ue,q):(q=h(q,de),q.return=ue,q)}function Ie(ue,q,de){if(typeof q=="string"&&q!==""||typeof q=="number")return q=rh(""+q,ue.mode,de),q.return=ue,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case F:return de=Sl(q.type,q.key,q.props,null,ue.mode,de),de.ref=Wa(ue,null,q),de.return=ue,de;case U:return q=sh(q,ue.mode,de),q.return=ue,q;case K:var Fe=q._init;return Ie(ue,Fe(q._payload),de)}if(Ht(q)||Y(q))return q=xs(q,ue.mode,de,null),q.return=ue,q;Zo(ue,q)}return null}function Ce(ue,q,de,Fe){var ot=q!==null?q.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return ot!==null?null:z(ue,q,""+de,Fe);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case F:return de.key===ot?j(ue,q,de,Fe):null;case U:return de.key===ot?fe(ue,q,de,Fe):null;case K:return ot=de._init,Ce(ue,q,ot(de._payload),Fe)}if(Ht(de)||Y(de))return ot!==null?null:be(ue,q,de,Fe,null);Zo(ue,de)}return null}function Ye(ue,q,de,Fe,ot){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return ue=ue.get(de)||null,z(q,ue,""+Fe,ot);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case F:return ue=ue.get(Fe.key===null?de:Fe.key)||null,j(q,ue,Fe,ot);case U:return ue=ue.get(Fe.key===null?de:Fe.key)||null,fe(q,ue,Fe,ot);case K:var dt=Fe._init;return Ye(ue,q,de,dt(Fe._payload),ot)}if(Ht(Fe)||Y(Fe))return ue=ue.get(de)||null,be(q,ue,Fe,ot,null);Zo(q,Fe)}return null}function it(ue,q,de,Fe){for(var ot=null,dt=null,ft=q,vt=q=0,On=null;ft!==null&&vt<de.length;vt++){ft.index>vt?(On=ft,ft=null):On=ft.sibling;var Bt=Ce(ue,ft,de[vt],Fe);if(Bt===null){ft===null&&(ft=On);break}n&&ft&&Bt.alternate===null&&i(ue,ft),q=g(Bt,q,vt),dt===null?ot=Bt:dt.sibling=Bt,dt=Bt,ft=On}if(vt===de.length)return a(ue,ft),un&&hs(ue,vt),ot;if(ft===null){for(;vt<de.length;vt++)ft=Ie(ue,de[vt],Fe),ft!==null&&(q=g(ft,q,vt),dt===null?ot=ft:dt.sibling=ft,dt=ft);return un&&hs(ue,vt),ot}for(ft=c(ue,ft);vt<de.length;vt++)On=Ye(ft,ue,vt,de[vt],Fe),On!==null&&(n&&On.alternate!==null&&ft.delete(On.key===null?vt:On.key),q=g(On,q,vt),dt===null?ot=On:dt.sibling=On,dt=On);return n&&ft.forEach(function(qr){return i(ue,qr)}),un&&hs(ue,vt),ot}function rt(ue,q,de,Fe){var ot=Y(de);if(typeof ot!="function")throw Error(t(150));if(de=ot.call(de),de==null)throw Error(t(151));for(var dt=ot=null,ft=q,vt=q=0,On=null,Bt=de.next();ft!==null&&!Bt.done;vt++,Bt=de.next()){ft.index>vt?(On=ft,ft=null):On=ft.sibling;var qr=Ce(ue,ft,Bt.value,Fe);if(qr===null){ft===null&&(ft=On);break}n&&ft&&qr.alternate===null&&i(ue,ft),q=g(qr,q,vt),dt===null?ot=qr:dt.sibling=qr,dt=qr,ft=On}if(Bt.done)return a(ue,ft),un&&hs(ue,vt),ot;if(ft===null){for(;!Bt.done;vt++,Bt=de.next())Bt=Ie(ue,Bt.value,Fe),Bt!==null&&(q=g(Bt,q,vt),dt===null?ot=Bt:dt.sibling=Bt,dt=Bt);return un&&hs(ue,vt),ot}for(ft=c(ue,ft);!Bt.done;vt++,Bt=de.next())Bt=Ye(ft,ue,vt,Bt.value,Fe),Bt!==null&&(n&&Bt.alternate!==null&&ft.delete(Bt.key===null?vt:Bt.key),q=g(Bt,q,vt),dt===null?ot=Bt:dt.sibling=Bt,dt=Bt);return n&&ft.forEach(function(I_){return i(ue,I_)}),un&&hs(ue,vt),ot}function yn(ue,q,de,Fe){if(typeof de=="object"&&de!==null&&de.type===T&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case F:e:{for(var ot=de.key,dt=q;dt!==null;){if(dt.key===ot){if(ot=de.type,ot===T){if(dt.tag===7){a(ue,dt.sibling),q=h(dt,de.props.children),q.return=ue,ue=q;break e}}else if(dt.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===K&&cp(ot)===dt.type){a(ue,dt.sibling),q=h(dt,de.props),q.ref=Wa(ue,dt,de),q.return=ue,ue=q;break e}a(ue,dt);break}else i(ue,dt);dt=dt.sibling}de.type===T?(q=xs(de.props.children,ue.mode,Fe,de.key),q.return=ue,ue=q):(Fe=Sl(de.type,de.key,de.props,null,ue.mode,Fe),Fe.ref=Wa(ue,q,de),Fe.return=ue,ue=Fe)}return C(ue);case U:e:{for(dt=de.key;q!==null;){if(q.key===dt)if(q.tag===4&&q.stateNode.containerInfo===de.containerInfo&&q.stateNode.implementation===de.implementation){a(ue,q.sibling),q=h(q,de.children||[]),q.return=ue,ue=q;break e}else{a(ue,q);break}else i(ue,q);q=q.sibling}q=sh(de,ue.mode,Fe),q.return=ue,ue=q}return C(ue);case K:return dt=de._init,yn(ue,q,dt(de._payload),Fe)}if(Ht(de))return it(ue,q,de,Fe);if(Y(de))return rt(ue,q,de,Fe);Zo(ue,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,q!==null&&q.tag===6?(a(ue,q.sibling),q=h(q,de),q.return=ue,ue=q):(a(ue,q),q=rh(de,ue.mode,Fe),q.return=ue,ue=q),C(ue)):a(ue,q)}return yn}var Ws=up(!0),hp=up(!1),Qo=Fr(null),Jo=null,js=null,pu=null;function mu(){pu=js=Jo=null}function gu(n){var i=Qo.current;an(Qo),n._currentValue=i}function vu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Xs(n,i){Jo=n,pu=js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ci=!0),n.firstContext=null)}function Ai(n){var i=n._currentValue;if(pu!==n)if(n={context:n,memoizedValue:i,next:null},js===null){if(Jo===null)throw Error(t(308));js=n,Jo.dependencies={lanes:0,firstContext:n}}else js=js.next=n;return i}var ds=null;function _u(n){ds===null?ds=[n]:ds.push(n)}function dp(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,_u(i)):(a.next=h.next,h.next=a),i.interleaved=a,fr(n,c)}function fr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Br=!1;function xu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Hr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ot&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,fr(n,a)}return h=c.interleaved,h===null?(i.next=i,_u(c)):(i.next=h.next,h.next=i),c.interleaved=i,fr(n,a)}function el(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,wn(n,a)}}function pp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=C:g=g.next=C,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function tl(n,i,a,c){var h=n.updateQueue;Br=!1;var g=h.firstBaseUpdate,C=h.lastBaseUpdate,z=h.shared.pending;if(z!==null){h.shared.pending=null;var j=z,fe=j.next;j.next=null,C===null?g=fe:C.next=fe,C=j;var be=n.alternate;be!==null&&(be=be.updateQueue,z=be.lastBaseUpdate,z!==C&&(z===null?be.firstBaseUpdate=fe:z.next=fe,be.lastBaseUpdate=j))}if(g!==null){var Ie=h.baseState;C=0,be=fe=j=null,z=g;do{var Ce=z.lane,Ye=z.eventTime;if((c&Ce)===Ce){be!==null&&(be=be.next={eventTime:Ye,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var it=n,rt=z;switch(Ce=i,Ye=a,rt.tag){case 1:if(it=rt.payload,typeof it=="function"){Ie=it.call(Ye,Ie,Ce);break e}Ie=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=rt.payload,Ce=typeof it=="function"?it.call(Ye,Ie,Ce):it,Ce==null)break e;Ie=J({},Ie,Ce);break e;case 2:Br=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,Ce=h.effects,Ce===null?h.effects=[z]:Ce.push(z))}else Ye={eventTime:Ye,lane:Ce,tag:z.tag,payload:z.payload,callback:z.callback,next:null},be===null?(fe=be=Ye,j=Ie):be=be.next=Ye,C|=Ce;if(z=z.next,z===null){if(z=h.shared.pending,z===null)break;Ce=z,z=Ce.next,Ce.next=null,h.lastBaseUpdate=Ce,h.shared.pending=null}}while(!0);if(be===null&&(j=Ie),h.baseState=j,h.firstBaseUpdate=fe,h.lastBaseUpdate=be,i=h.shared.interleaved,i!==null){h=i;do C|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);ms|=C,n.lanes=C,n.memoizedState=Ie}}function mp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var ja={},Zi=Fr(ja),Xa=Fr(ja),Ka=Fr(ja);function fs(n){if(n===ja)throw Error(t(174));return n}function yu(n,i){switch(en(Ka,i),en(Xa,n),en(Zi,ja),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ht(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ht(i,n)}an(Zi),en(Zi,i)}function Ks(){an(Zi),an(Xa),an(Ka)}function gp(n){fs(Ka.current);var i=fs(Zi.current),a=ht(i,n.type);i!==a&&(en(Xa,n),en(Zi,a))}function Su(n){Xa.current===n&&(an(Zi),an(Xa))}var pn=Fr(0);function nl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Mu=[];function Tu(){for(var n=0;n<Mu.length;n++)Mu[n]._workInProgressVersionPrimary=null;Mu.length=0}var il=L.ReactCurrentDispatcher,Eu=L.ReactCurrentBatchConfig,ps=0,mn=null,An=null,In=null,rl=!1,qa=!1,Ya=0,n_=0;function Kn(){throw Error(t(321))}function wu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ui(n[a],i[a]))return!1;return!0}function Cu(n,i,a,c,h,g){if(ps=g,mn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,il.current=n===null||n.memoizedState===null?a_:o_,n=a(c,h),qa){g=0;do{if(qa=!1,Ya=0,25<=g)throw Error(t(301));g+=1,In=An=null,i.updateQueue=null,il.current=l_,n=a(c,h)}while(qa)}if(il.current=ol,i=An!==null&&An.next!==null,ps=0,In=An=mn=null,rl=!1,i)throw Error(t(300));return n}function Au(){var n=Ya!==0;return Ya=0,n}function Qi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return In===null?mn.memoizedState=In=n:In=In.next=n,In}function bi(){if(An===null){var n=mn.alternate;n=n!==null?n.memoizedState:null}else n=An.next;var i=In===null?mn.memoizedState:In.next;if(i!==null)In=i,An=n;else{if(n===null)throw Error(t(310));An=n,n={memoizedState:An.memoizedState,baseState:An.baseState,baseQueue:An.baseQueue,queue:An.queue,next:null},In===null?mn.memoizedState=In=n:In=In.next=n}return In}function $a(n,i){return typeof i=="function"?i(n):i}function bu(n){var i=bi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=An,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var C=h.next;h.next=g.next,g.next=C}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var z=C=null,j=null,fe=g;do{var be=fe.lane;if((ps&be)===be)j!==null&&(j=j.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),c=fe.hasEagerState?fe.eagerState:n(c,fe.action);else{var Ie={lane:be,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};j===null?(z=j=Ie,C=c):j=j.next=Ie,mn.lanes|=be,ms|=be}fe=fe.next}while(fe!==null&&fe!==g);j===null?C=c:j.next=z,Ui(c,i.memoizedState)||(ci=!0),i.memoizedState=c,i.baseState=C,i.baseQueue=j,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,mn.lanes|=g,ms|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Nu(n){var i=bi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var C=h=h.next;do g=n(g,C.action),C=C.next;while(C!==h);Ui(g,i.memoizedState)||(ci=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function vp(){}function _p(n,i){var a=mn,c=bi(),h=i(),g=!Ui(c.memoizedState,h);if(g&&(c.memoizedState=h,ci=!0),c=c.queue,Ru(Sp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||In!==null&&In.memoizedState.tag&1){if(a.flags|=2048,Za(9,yp.bind(null,a,c,h,i),void 0,null),Un===null)throw Error(t(349));(ps&30)!==0||xp(a,i,h)}return h}function xp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=mn.updateQueue,i===null?(i={lastEffect:null,stores:null},mn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function yp(n,i,a,c){i.value=a,i.getSnapshot=c,Mp(i)&&Tp(n)}function Sp(n,i,a){return a(function(){Mp(i)&&Tp(n)})}function Mp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ui(n,a)}catch{return!0}}function Tp(n){var i=fr(n,1);i!==null&&Bi(i,n,1,-1)}function Ep(n){var i=Qi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:n},i.queue=n,n=n.dispatch=s_.bind(null,mn,n),[i.memoizedState,n]}function Za(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=mn.updateQueue,i===null?(i={lastEffect:null,stores:null},mn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function wp(){return bi().memoizedState}function sl(n,i,a,c){var h=Qi();mn.flags|=n,h.memoizedState=Za(1|i,a,void 0,c===void 0?null:c)}function al(n,i,a,c){var h=bi();c=c===void 0?null:c;var g=void 0;if(An!==null){var C=An.memoizedState;if(g=C.destroy,c!==null&&wu(c,C.deps)){h.memoizedState=Za(i,a,g,c);return}}mn.flags|=n,h.memoizedState=Za(1|i,a,g,c)}function Cp(n,i){return sl(8390656,8,n,i)}function Ru(n,i){return al(2048,8,n,i)}function Ap(n,i){return al(4,2,n,i)}function bp(n,i){return al(4,4,n,i)}function Np(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Rp(n,i,a){return a=a!=null?a.concat([n]):null,al(4,4,Np.bind(null,i,n),a)}function Pu(){}function Pp(n,i){var a=bi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&wu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Dp(n,i){var a=bi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&wu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Lp(n,i,a){return(ps&21)===0?(n.baseState&&(n.baseState=!1,ci=!0),n.memoizedState=a):(Ui(a,i)||(a=Xt(),mn.lanes|=a,ms|=a,n.baseState=!0),i)}function i_(n,i){var a=at;at=a!==0&&4>a?a:4,n(!0);var c=Eu.transition;Eu.transition={};try{n(!1),i()}finally{at=a,Eu.transition=c}}function Ip(){return bi().memoizedState}function r_(n,i,a){var c=jr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Up(n))Op(i,a);else if(a=dp(n,i,a,c),a!==null){var h=ni();Bi(a,n,c,h),Fp(a,i,c)}}function s_(n,i,a){var c=jr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Up(n))Op(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var C=i.lastRenderedState,z=g(C,a);if(h.hasEagerState=!0,h.eagerState=z,Ui(z,C)){var j=i.interleaved;j===null?(h.next=h,_u(i)):(h.next=j.next,j.next=h),i.interleaved=h;return}}catch{}finally{}a=dp(n,i,h,c),a!==null&&(h=ni(),Bi(a,n,c,h),Fp(a,i,c))}}function Up(n){var i=n.alternate;return n===mn||i!==null&&i===mn}function Op(n,i){qa=rl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Fp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,wn(n,a)}}var ol={readContext:Ai,useCallback:Kn,useContext:Kn,useEffect:Kn,useImperativeHandle:Kn,useInsertionEffect:Kn,useLayoutEffect:Kn,useMemo:Kn,useReducer:Kn,useRef:Kn,useState:Kn,useDebugValue:Kn,useDeferredValue:Kn,useTransition:Kn,useMutableSource:Kn,useSyncExternalStore:Kn,useId:Kn,unstable_isNewReconciler:!1},a_={readContext:Ai,useCallback:function(n,i){return Qi().memoizedState=[n,i===void 0?null:i],n},useContext:Ai,useEffect:Cp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,sl(4194308,4,Np.bind(null,i,n),a)},useLayoutEffect:function(n,i){return sl(4194308,4,n,i)},useInsertionEffect:function(n,i){return sl(4,2,n,i)},useMemo:function(n,i){var a=Qi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Qi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=r_.bind(null,mn,n),[c.memoizedState,n]},useRef:function(n){var i=Qi();return n={current:n},i.memoizedState=n},useState:Ep,useDebugValue:Pu,useDeferredValue:function(n){return Qi().memoizedState=n},useTransition:function(){var n=Ep(!1),i=n[0];return n=i_.bind(null,n[1]),Qi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=mn,h=Qi();if(un){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Un===null)throw Error(t(349));(ps&30)!==0||xp(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,Cp(Sp.bind(null,c,g,n),[n]),c.flags|=2048,Za(9,yp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Qi(),i=Un.identifierPrefix;if(un){var a=dr,c=hr;a=(c&~(1<<32-te(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ya++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=n_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},o_={readContext:Ai,useCallback:Pp,useContext:Ai,useEffect:Ru,useImperativeHandle:Rp,useInsertionEffect:Ap,useLayoutEffect:bp,useMemo:Dp,useReducer:bu,useRef:wp,useState:function(){return bu($a)},useDebugValue:Pu,useDeferredValue:function(n){var i=bi();return Lp(i,An.memoizedState,n)},useTransition:function(){var n=bu($a)[0],i=bi().memoizedState;return[n,i]},useMutableSource:vp,useSyncExternalStore:_p,useId:Ip,unstable_isNewReconciler:!1},l_={readContext:Ai,useCallback:Pp,useContext:Ai,useEffect:Ru,useImperativeHandle:Rp,useInsertionEffect:Ap,useLayoutEffect:bp,useMemo:Dp,useReducer:Nu,useRef:wp,useState:function(){return Nu($a)},useDebugValue:Pu,useDeferredValue:function(n){var i=bi();return An===null?i.memoizedState=n:Lp(i,An.memoizedState,n)},useTransition:function(){var n=Nu($a)[0],i=bi().memoizedState;return[n,i]},useMutableSource:vp,useSyncExternalStore:_p,useId:Ip,unstable_isNewReconciler:!1};function Fi(n,i){if(n&&n.defaultProps){i=J({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Du(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:J({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ll={isMounted:function(n){return(n=n._reactInternals)?hn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=ni(),h=jr(n),g=pr(c,h);g.payload=i,a!=null&&(g.callback=a),i=Hr(n,g,h),i!==null&&(Bi(i,n,h,c),el(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=ni(),h=jr(n),g=pr(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Hr(n,g,h),i!==null&&(Bi(i,n,h,c),el(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=ni(),c=jr(n),h=pr(a,c);h.tag=2,i!=null&&(h.callback=i),i=Hr(n,h,c),i!==null&&(Bi(i,n,c,a),el(i,n,c))}};function kp(n,i,a,c,h,g,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,C):i.prototype&&i.prototype.isPureReactComponent?!Fa(a,c)||!Fa(h,g):!0}function zp(n,i,a){var c=!1,h=kr,g=i.contextType;return typeof g=="object"&&g!==null?g=Ai(g):(h=li(i)?cs:Xn.current,c=i.contextTypes,g=(c=c!=null)?Bs(n,h):kr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ll,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Bp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&ll.enqueueReplaceState(i,i.state,null)}function Lu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},xu(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=Ai(g):(g=li(i)?cs:Xn.current,h.context=Bs(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Du(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&ll.enqueueReplaceState(h,h.state,null),tl(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function qs(n,i){try{var a="",c=i;do a+=Te(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Iu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Uu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var c_=typeof WeakMap=="function"?WeakMap:Map;function Hp(n,i,a){a=pr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ml||(ml=!0,$u=c),Uu(n,i)},a}function Vp(n,i,a){a=pr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Uu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Uu(n,i),typeof c!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function Gp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new c_;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=T_.bind(null,n,i,a),i.then(n,n))}function Wp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function jp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=pr(-1,1),i.tag=2,Hr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var u_=L.ReactCurrentOwner,ci=!1;function ti(n,i,a,c){i.child=n===null?hp(i,null,a,c):Ws(i,n.child,a,c)}function Xp(n,i,a,c,h){a=a.render;var g=i.ref;return Xs(i,h),c=Cu(n,i,a,c,g,h),a=Au(),n!==null&&!ci?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,mr(n,i,h)):(un&&a&&cu(i),i.flags|=1,ti(n,i,c,h),i.child)}function Kp(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!ih(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,qp(n,i,g,c,h)):(n=Sl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var C=g.memoizedProps;if(a=a.compare,a=a!==null?a:Fa,a(C,c)&&n.ref===i.ref)return mr(n,i,h)}return i.flags|=1,n=Kr(g,c),n.ref=i.ref,n.return=i,i.child=n}function qp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(Fa(g,c)&&n.ref===i.ref)if(ci=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(ci=!0);else return i.lanes=n.lanes,mr(n,i,h)}return Ou(n,i,a,c,h)}function Yp(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},en($s,yi),yi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,en($s,yi),yi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,en($s,yi),yi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,en($s,yi),yi|=c;return ti(n,i,h,a),i.child}function $p(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Ou(n,i,a,c,h){var g=li(a)?cs:Xn.current;return g=Bs(i,g),Xs(i,h),a=Cu(n,i,a,c,g,h),c=Au(),n!==null&&!ci?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,mr(n,i,h)):(un&&c&&cu(i),i.flags|=1,ti(n,i,a,h),i.child)}function Zp(n,i,a,c,h){if(li(a)){var g=!0;Xo(i)}else g=!1;if(Xs(i,h),i.stateNode===null)ul(n,i),zp(i,a,c),Lu(i,a,c,h),c=!0;else if(n===null){var C=i.stateNode,z=i.memoizedProps;C.props=z;var j=C.context,fe=a.contextType;typeof fe=="object"&&fe!==null?fe=Ai(fe):(fe=li(a)?cs:Xn.current,fe=Bs(i,fe));var be=a.getDerivedStateFromProps,Ie=typeof be=="function"||typeof C.getSnapshotBeforeUpdate=="function";Ie||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(z!==c||j!==fe)&&Bp(i,C,c,fe),Br=!1;var Ce=i.memoizedState;C.state=Ce,tl(i,c,C,h),j=i.memoizedState,z!==c||Ce!==j||oi.current||Br?(typeof be=="function"&&(Du(i,a,be,c),j=i.memoizedState),(z=Br||kp(i,a,z,c,Ce,j,fe))?(Ie||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=j),C.props=c,C.state=j,C.context=fe,c=z):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{C=i.stateNode,fp(n,i),z=i.memoizedProps,fe=i.type===i.elementType?z:Fi(i.type,z),C.props=fe,Ie=i.pendingProps,Ce=C.context,j=a.contextType,typeof j=="object"&&j!==null?j=Ai(j):(j=li(a)?cs:Xn.current,j=Bs(i,j));var Ye=a.getDerivedStateFromProps;(be=typeof Ye=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(z!==Ie||Ce!==j)&&Bp(i,C,c,j),Br=!1,Ce=i.memoizedState,C.state=Ce,tl(i,c,C,h);var it=i.memoizedState;z!==Ie||Ce!==it||oi.current||Br?(typeof Ye=="function"&&(Du(i,a,Ye,c),it=i.memoizedState),(fe=Br||kp(i,a,fe,c,Ce,it,j)||!1)?(be||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(c,it,j),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(c,it,j)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||z===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=it),C.props=c,C.state=it,C.context=j,c=fe):(typeof C.componentDidUpdate!="function"||z===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),c=!1)}return Fu(n,i,a,c,g,h)}function Fu(n,i,a,c,h,g){$p(n,i);var C=(i.flags&128)!==0;if(!c&&!C)return h&&np(i,a,!1),mr(n,i,g);c=i.stateNode,u_.current=i;var z=C&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&C?(i.child=Ws(i,n.child,null,g),i.child=Ws(i,null,z,g)):ti(n,i,z,g),i.memoizedState=c.state,h&&np(i,a,!0),i.child}function Qp(n){var i=n.stateNode;i.pendingContext?ep(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ep(n,i.context,!1),yu(n,i.containerInfo)}function Jp(n,i,a,c,h){return Gs(),fu(h),i.flags|=256,ti(n,i,a,c),i.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function zu(n){return{baseLanes:n,cachePool:null,transitions:null}}function em(n,i,a){var c=i.pendingProps,h=pn.current,g=!1,C=(i.flags&128)!==0,z;if((z=C)||(z=n!==null&&n.memoizedState===null?!1:(h&2)!==0),z?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),en(pn,h&1),n===null)return du(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=c.children,n=c.fallback,g?(c=i.mode,g=i.child,C={mode:"hidden",children:C},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=C):g=Ml(C,c,0,null),n=xs(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=zu(a),i.memoizedState=ku,n):Bu(i,C));if(h=n.memoizedState,h!==null&&(z=h.dehydrated,z!==null))return h_(n,i,C,c,z,h,a);if(g){g=c.fallback,C=i.mode,h=n.child,z=h.sibling;var j={mode:"hidden",children:c.children};return(C&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=j,i.deletions=null):(c=Kr(h,j),c.subtreeFlags=h.subtreeFlags&14680064),z!==null?g=Kr(z,g):(g=xs(g,C,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,C=n.child.memoizedState,C=C===null?zu(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},g.memoizedState=C,g.childLanes=n.childLanes&~a,i.memoizedState=ku,c}return g=n.child,n=g.sibling,c=Kr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Bu(n,i){return i=Ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function cl(n,i,a,c){return c!==null&&fu(c),Ws(i,n.child,null,a),n=Bu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function h_(n,i,a,c,h,g,C){if(a)return i.flags&256?(i.flags&=-257,c=Iu(Error(t(422))),cl(n,i,C,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=Ml({mode:"visible",children:c.children},h,0,null),g=xs(g,h,C,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Ws(i,n.child,null,C),i.child.memoizedState=zu(C),i.memoizedState=ku,g);if((i.mode&1)===0)return cl(n,i,C,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var z=c.dgst;return c=z,g=Error(t(419)),c=Iu(g,c,void 0),cl(n,i,C,c)}if(z=(C&n.childLanes)!==0,ci||z){if(c=Un,c!==null){switch(C&-C){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|C))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,fr(n,h),Bi(c,n,h,-1))}return nh(),c=Iu(Error(t(421))),cl(n,i,C,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=E_.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,xi=Or(h.nextSibling),_i=i,un=!0,Oi=null,n!==null&&(wi[Ci++]=hr,wi[Ci++]=dr,wi[Ci++]=us,hr=n.id,dr=n.overflow,us=i),i=Bu(i,c.children),i.flags|=4096,i)}function tm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),vu(n.return,i,a)}function Hu(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function nm(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(ti(n,i,c.children,a),c=pn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tm(n,a,i);else if(n.tag===19)tm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(en(pn,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&nl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Hu(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&nl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Hu(i,!0,a,null,g);break;case"together":Hu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ul(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function mr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ms|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Kr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Kr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function d_(n,i,a){switch(i.tag){case 3:Qp(i),Gs();break;case 5:gp(i);break;case 1:li(i.type)&&Xo(i);break;case 4:yu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;en(Qo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(en(pn,pn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?em(n,i,a):(en(pn,pn.current&1),n=mr(n,i,a),n!==null?n.sibling:null);en(pn,pn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return nm(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),en(pn,pn.current),c)break;return null;case 22:case 23:return i.lanes=0,Yp(n,i,a)}return mr(n,i,a)}var im,Vu,rm,sm;im=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Vu=function(){},rm=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,fs(Zi.current);var g=null;switch(a){case"input":h=st(n,h),c=st(n,c),g=[];break;case"select":h=J({},h,{value:void 0}),c=J({},c,{value:void 0}),g=[];break;case"textarea":h=ve(n,h),c=ve(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Go)}pe(a,c);var C;a=null;for(fe in h)if(!c.hasOwnProperty(fe)&&h.hasOwnProperty(fe)&&h[fe]!=null)if(fe==="style"){var z=h[fe];for(C in z)z.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?g||(g=[]):(g=g||[]).push(fe,null));for(fe in c){var j=c[fe];if(z=h!=null?h[fe]:void 0,c.hasOwnProperty(fe)&&j!==z&&(j!=null||z!=null))if(fe==="style")if(z){for(C in z)!z.hasOwnProperty(C)||j&&j.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in j)j.hasOwnProperty(C)&&z[C]!==j[C]&&(a||(a={}),a[C]=j[C])}else a||(g||(g=[]),g.push(fe,a)),a=j;else fe==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,z=z?z.__html:void 0,j!=null&&z!==j&&(g=g||[]).push(fe,j)):fe==="children"?typeof j!="string"&&typeof j!="number"||(g=g||[]).push(fe,""+j):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(j!=null&&fe==="onScroll"&&sn("scroll",n),g||z===j||(g=[])):(g=g||[]).push(fe,j))}a&&(g=g||[]).push("style",a);var fe=g;(i.updateQueue=fe)&&(i.flags|=4)}},sm=function(n,i,a,c){a!==c&&(i.flags|=4)};function Qa(n,i){if(!un)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function qn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function f_(n,i,a){var c=i.pendingProps;switch(uu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qn(i),null;case 1:return li(i.type)&&jo(),qn(i),null;case 3:return c=i.stateNode,Ks(),an(oi),an(Xn),Tu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&($o(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Oi!==null&&(Ju(Oi),Oi=null))),Vu(n,i),qn(i),null;case 5:Su(i);var h=fs(Ka.current);if(a=i.type,n!==null&&i.stateNode!=null)rm(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return qn(i),null}if(n=fs(Zi.current),$o(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[$i]=i,c[Va]=g,n=(i.mode&1)!==0,a){case"dialog":sn("cancel",c),sn("close",c);break;case"iframe":case"object":case"embed":sn("load",c);break;case"video":case"audio":for(h=0;h<za.length;h++)sn(za[h],c);break;case"source":sn("error",c);break;case"img":case"image":case"link":sn("error",c),sn("load",c);break;case"details":sn("toggle",c);break;case"input":Yt(c,g),sn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},sn("invalid",c);break;case"textarea":$e(c,g),sn("invalid",c)}pe(a,g),h=null;for(var C in g)if(g.hasOwnProperty(C)){var z=g[C];C==="children"?typeof z=="string"?c.textContent!==z&&(g.suppressHydrationWarning!==!0&&Vo(c.textContent,z,n),h=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(g.suppressHydrationWarning!==!0&&Vo(c.textContent,z,n),h=["children",""+z]):o.hasOwnProperty(C)&&z!=null&&C==="onScroll"&&sn("scroll",c)}switch(a){case"input":qe(c),Ut(c,g,!0);break;case"textarea":qe(c),xt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Go)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{C=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ut(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=C.createElement(a,{is:c.is}):(n=C.createElement(a),a==="select"&&(C=n,c.multiple?C.multiple=!0:c.size&&(C.size=c.size))):n=C.createElementNS(n,a),n[$i]=i,n[Va]=c,im(n,i,!1,!1),i.stateNode=n;e:{switch(C=ye(a,c),a){case"dialog":sn("cancel",n),sn("close",n),h=c;break;case"iframe":case"object":case"embed":sn("load",n),h=c;break;case"video":case"audio":for(h=0;h<za.length;h++)sn(za[h],n);h=c;break;case"source":sn("error",n),h=c;break;case"img":case"image":case"link":sn("error",n),sn("load",n),h=c;break;case"details":sn("toggle",n),h=c;break;case"input":Yt(n,c),h=st(n,c),sn("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=J({},c,{value:void 0}),sn("invalid",n);break;case"textarea":$e(n,c),h=ve(n,c),sn("invalid",n);break;default:h=c}pe(a,h),z=h;for(g in z)if(z.hasOwnProperty(g)){var j=z[g];g==="style"?se(n,j):g==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&yt(n,j)):g==="children"?typeof j=="string"?(a!=="textarea"||j!=="")&&Ve(n,j):typeof j=="number"&&Ve(n,""+j):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?j!=null&&g==="onScroll"&&sn("scroll",n):j!=null&&k(n,g,j,C))}switch(a){case"input":qe(n),Ut(n,c,!1);break;case"textarea":qe(n),xt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ee(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?on(n,!!c.multiple,g,!1):c.defaultValue!=null&&on(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Go)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return qn(i),null;case 6:if(n&&i.stateNode!=null)sm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=fs(Ka.current),fs(Zi.current),$o(i)){if(c=i.stateNode,a=i.memoizedProps,c[$i]=i,(g=c.nodeValue!==a)&&(n=_i,n!==null))switch(n.tag){case 3:Vo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Vo(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[$i]=i,i.stateNode=c}return qn(i),null;case 13:if(an(pn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(un&&xi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)lp(),Gs(),i.flags|=98560,g=!1;else if(g=$o(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[$i]=i}else Gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qn(i),g=!1}else Oi!==null&&(Ju(Oi),Oi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(pn.current&1)!==0?bn===0&&(bn=3):nh())),i.updateQueue!==null&&(i.flags|=4),qn(i),null);case 4:return Ks(),Vu(n,i),n===null&&Ba(i.stateNode.containerInfo),qn(i),null;case 10:return gu(i.type._context),qn(i),null;case 17:return li(i.type)&&jo(),qn(i),null;case 19:if(an(pn),g=i.memoizedState,g===null)return qn(i),null;if(c=(i.flags&128)!==0,C=g.rendering,C===null)if(c)Qa(g,!1);else{if(bn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=nl(n),C!==null){for(i.flags|=128,Qa(g,!1),c=C.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,C=g.alternate,C===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=C.childLanes,g.lanes=C.lanes,g.child=C.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=C.memoizedProps,g.memoizedState=C.memoizedState,g.updateQueue=C.updateQueue,g.type=C.type,n=C.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return en(pn,pn.current&1|2),i.child}n=n.sibling}g.tail!==null&&Vt()>Zs&&(i.flags|=128,c=!0,Qa(g,!1),i.lanes=4194304)}else{if(!c)if(n=nl(C),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Qa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!C.alternate&&!un)return qn(i),null}else 2*Vt()-g.renderingStartTime>Zs&&a!==1073741824&&(i.flags|=128,c=!0,Qa(g,!1),i.lanes=4194304);g.isBackwards?(C.sibling=i.child,i.child=C):(a=g.last,a!==null?a.sibling=C:i.child=C,g.last=C)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Vt(),i.sibling=null,a=pn.current,en(pn,c?a&1|2:a&1),i):(qn(i),null);case 22:case 23:return th(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(yi&1073741824)!==0&&(qn(i),i.subtreeFlags&6&&(i.flags|=8192)):qn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function p_(n,i){switch(uu(i),i.tag){case 1:return li(i.type)&&jo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ks(),an(oi),an(Xn),Tu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Su(i),null;case 13:if(an(pn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return an(pn),null;case 4:return Ks(),null;case 10:return gu(i.type._context),null;case 22:case 23:return th(),null;case 24:return null;default:return null}}var hl=!1,Yn=!1,m_=typeof WeakSet=="function"?WeakSet:Set,Je=null;function Ys(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){_n(n,i,c)}else a.current=null}function Gu(n,i,a){try{a()}catch(c){_n(n,i,c)}}var am=!1;function g_(n,i){if(tu=Po,n=kf(),Kc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var C=0,z=-1,j=-1,fe=0,be=0,Ie=n,Ce=null;t:for(;;){for(var Ye;Ie!==a||h!==0&&Ie.nodeType!==3||(z=C+h),Ie!==g||c!==0&&Ie.nodeType!==3||(j=C+c),Ie.nodeType===3&&(C+=Ie.nodeValue.length),(Ye=Ie.firstChild)!==null;)Ce=Ie,Ie=Ye;for(;;){if(Ie===n)break t;if(Ce===a&&++fe===h&&(z=C),Ce===g&&++be===c&&(j=C),(Ye=Ie.nextSibling)!==null)break;Ie=Ce,Ce=Ie.parentNode}Ie=Ye}a=z===-1||j===-1?null:{start:z,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(nu={focusedElem:n,selectionRange:a},Po=!1,Je=i;Je!==null;)if(i=Je,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Je=n;else for(;Je!==null;){i=Je;try{var it=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var rt=it.memoizedProps,yn=it.memoizedState,ue=i.stateNode,q=ue.getSnapshotBeforeUpdate(i.elementType===i.type?rt:Fi(i.type,rt),yn);ue.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var de=i.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Fe){_n(i,i.return,Fe)}if(n=i.sibling,n!==null){n.return=i.return,Je=n;break}Je=i.return}return it=am,am=!1,it}function Ja(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Gu(i,a,g)}h=h.next}while(h!==c)}}function dl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Wu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function om(n){var i=n.alternate;i!==null&&(n.alternate=null,om(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[$i],delete i[Va],delete i[au],delete i[Qv],delete i[Jv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lm(n){return n.tag===5||n.tag===3||n.tag===4}function cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ju(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Go));else if(c!==4&&(n=n.child,n!==null))for(ju(n,i,a),n=n.sibling;n!==null;)ju(n,i,a),n=n.sibling}function Xu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Xu(n,i,a),n=n.sibling;n!==null;)Xu(n,i,a),n=n.sibling}var zn=null,ki=!1;function Vr(n,i,a){for(a=a.child;a!==null;)um(n,i,a),a=a.sibling}function um(n,i,a){if(he&&typeof he.onCommitFiberUnmount=="function")try{he.onCommitFiberUnmount(W,a)}catch{}switch(a.tag){case 5:Yn||Ys(a,i);case 6:var c=zn,h=ki;zn=null,Vr(n,i,a),zn=c,ki=h,zn!==null&&(ki?(n=zn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):zn.removeChild(a.stateNode));break;case 18:zn!==null&&(ki?(n=zn,a=a.stateNode,n.nodeType===8?su(n.parentNode,a):n.nodeType===1&&su(n,a),Pa(n)):su(zn,a.stateNode));break;case 4:c=zn,h=ki,zn=a.stateNode.containerInfo,ki=!0,Vr(n,i,a),zn=c,ki=h;break;case 0:case 11:case 14:case 15:if(!Yn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,C=g.destroy;g=g.tag,C!==void 0&&((g&2)!==0||(g&4)!==0)&&Gu(a,i,C),h=h.next}while(h!==c)}Vr(n,i,a);break;case 1:if(!Yn&&(Ys(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(z){_n(a,i,z)}Vr(n,i,a);break;case 21:Vr(n,i,a);break;case 22:a.mode&1?(Yn=(c=Yn)||a.memoizedState!==null,Vr(n,i,a),Yn=c):Vr(n,i,a);break;default:Vr(n,i,a)}}function hm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new m_),i.forEach(function(c){var h=w_.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function zi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,C=i,z=C;e:for(;z!==null;){switch(z.tag){case 5:zn=z.stateNode,ki=!1;break e;case 3:zn=z.stateNode.containerInfo,ki=!0;break e;case 4:zn=z.stateNode.containerInfo,ki=!0;break e}z=z.return}if(zn===null)throw Error(t(160));um(g,C,h),zn=null,ki=!1;var j=h.alternate;j!==null&&(j.return=null),h.return=null}catch(fe){_n(h,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)dm(i,n),i=i.sibling}function dm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(zi(i,n),Ji(n),c&4){try{Ja(3,n,n.return),dl(3,n)}catch(rt){_n(n,n.return,rt)}try{Ja(5,n,n.return)}catch(rt){_n(n,n.return,rt)}}break;case 1:zi(i,n),Ji(n),c&512&&a!==null&&Ys(a,a.return);break;case 5:if(zi(i,n),Ji(n),c&512&&a!==null&&Ys(a,a.return),n.flags&32){var h=n.stateNode;try{Ve(h,"")}catch(rt){_n(n,n.return,rt)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,C=a!==null?a.memoizedProps:g,z=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{z==="input"&&g.type==="radio"&&g.name!=null&&tn(h,g),ye(z,C);var fe=ye(z,g);for(C=0;C<j.length;C+=2){var be=j[C],Ie=j[C+1];be==="style"?se(h,Ie):be==="dangerouslySetInnerHTML"?yt(h,Ie):be==="children"?Ve(h,Ie):k(h,be,Ie,fe)}switch(z){case"input":$t(h,g);break;case"textarea":V(h,g);break;case"select":var Ce=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Ye=g.value;Ye!=null?on(h,!!g.multiple,Ye,!1):Ce!==!!g.multiple&&(g.defaultValue!=null?on(h,!!g.multiple,g.defaultValue,!0):on(h,!!g.multiple,g.multiple?[]:"",!1))}h[Va]=g}catch(rt){_n(n,n.return,rt)}}break;case 6:if(zi(i,n),Ji(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(rt){_n(n,n.return,rt)}}break;case 3:if(zi(i,n),Ji(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pa(i.containerInfo)}catch(rt){_n(n,n.return,rt)}break;case 4:zi(i,n),Ji(n);break;case 13:zi(i,n),Ji(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Yu=Vt())),c&4&&hm(n);break;case 22:if(be=a!==null&&a.memoizedState!==null,n.mode&1?(Yn=(fe=Yn)||be,zi(i,n),Yn=fe):zi(i,n),Ji(n),c&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!be&&(n.mode&1)!==0)for(Je=n,be=n.child;be!==null;){for(Ie=Je=be;Je!==null;){switch(Ce=Je,Ye=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:Ja(4,Ce,Ce.return);break;case 1:Ys(Ce,Ce.return);var it=Ce.stateNode;if(typeof it.componentWillUnmount=="function"){c=Ce,a=Ce.return;try{i=c,it.props=i.memoizedProps,it.state=i.memoizedState,it.componentWillUnmount()}catch(rt){_n(c,a,rt)}}break;case 5:Ys(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){mm(Ie);continue}}Ye!==null?(Ye.return=Ce,Je=Ye):mm(Ie)}be=be.sibling}e:for(be=null,Ie=n;;){if(Ie.tag===5){if(be===null){be=Ie;try{h=Ie.stateNode,fe?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(z=Ie.stateNode,j=Ie.memoizedProps.style,C=j!=null&&j.hasOwnProperty("display")?j.display:null,z.style.display=w("display",C))}catch(rt){_n(n,n.return,rt)}}}else if(Ie.tag===6){if(be===null)try{Ie.stateNode.nodeValue=fe?"":Ie.memoizedProps}catch(rt){_n(n,n.return,rt)}}else if((Ie.tag!==22&&Ie.tag!==23||Ie.memoizedState===null||Ie===n)&&Ie.child!==null){Ie.child.return=Ie,Ie=Ie.child;continue}if(Ie===n)break e;for(;Ie.sibling===null;){if(Ie.return===null||Ie.return===n)break e;be===Ie&&(be=null),Ie=Ie.return}be===Ie&&(be=null),Ie.sibling.return=Ie.return,Ie=Ie.sibling}}break;case 19:zi(i,n),Ji(n),c&4&&hm(n);break;case 21:break;default:zi(i,n),Ji(n)}}function Ji(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(lm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Ve(h,""),c.flags&=-33);var g=cm(n);Xu(n,g,h);break;case 3:case 4:var C=c.stateNode.containerInfo,z=cm(n);ju(n,z,C);break;default:throw Error(t(161))}}catch(j){_n(n,n.return,j)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function v_(n,i,a){Je=n,fm(n)}function fm(n,i,a){for(var c=(n.mode&1)!==0;Je!==null;){var h=Je,g=h.child;if(h.tag===22&&c){var C=h.memoizedState!==null||hl;if(!C){var z=h.alternate,j=z!==null&&z.memoizedState!==null||Yn;z=hl;var fe=Yn;if(hl=C,(Yn=j)&&!fe)for(Je=h;Je!==null;)C=Je,j=C.child,C.tag===22&&C.memoizedState!==null?gm(h):j!==null?(j.return=C,Je=j):gm(h);for(;g!==null;)Je=g,fm(g),g=g.sibling;Je=h,hl=z,Yn=fe}pm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Je=g):pm(n)}}function pm(n){for(;Je!==null;){var i=Je;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Yn||dl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Yn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Fi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&mp(i,g,c);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}mp(i,C,a)}break;case 5:var z=i.stateNode;if(a===null&&i.flags&4){a=z;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&a.focus();break;case"img":j.src&&(a.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var be=fe.memoizedState;if(be!==null){var Ie=be.dehydrated;Ie!==null&&Pa(Ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Yn||i.flags&512&&Wu(i)}catch(Ce){_n(i,i.return,Ce)}}if(i===n){Je=null;break}if(a=i.sibling,a!==null){a.return=i.return,Je=a;break}Je=i.return}}function mm(n){for(;Je!==null;){var i=Je;if(i===n){Je=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Je=a;break}Je=i.return}}function gm(n){for(;Je!==null;){var i=Je;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{dl(4,i)}catch(j){_n(i,a,j)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(j){_n(i,h,j)}}var g=i.return;try{Wu(i)}catch(j){_n(i,g,j)}break;case 5:var C=i.return;try{Wu(i)}catch(j){_n(i,C,j)}}}catch(j){_n(i,i.return,j)}if(i===n){Je=null;break}var z=i.sibling;if(z!==null){z.return=i.return,Je=z;break}Je=i.return}}var __=Math.ceil,fl=L.ReactCurrentDispatcher,Ku=L.ReactCurrentOwner,Ni=L.ReactCurrentBatchConfig,Ot=0,Un=null,Sn=null,Bn=0,yi=0,$s=Fr(0),bn=0,eo=null,ms=0,pl=0,qu=0,to=null,ui=null,Yu=0,Zs=1/0,gr=null,ml=!1,$u=null,Gr=null,gl=!1,Wr=null,vl=0,no=0,Zu=null,_l=-1,xl=0;function ni(){return(Ot&6)!==0?Vt():_l!==-1?_l:_l=Vt()}function jr(n){return(n.mode&1)===0?1:(Ot&2)!==0&&Bn!==0?Bn&-Bn:t_.transition!==null?(xl===0&&(xl=Xt()),xl):(n=at,n!==0||(n=window.event,n=n===void 0?16:_f(n.type)),n)}function Bi(n,i,a,c){if(50<no)throw no=0,Zu=null,Error(t(185));vn(n,a,c),((Ot&2)===0||n!==Un)&&(n===Un&&((Ot&2)===0&&(pl|=a),bn===4&&Xr(n,Bn)),hi(n,c),a===1&&Ot===0&&(i.mode&1)===0&&(Zs=Vt()+500,Ko&&zr()))}function hi(n,i){var a=n.callbackNode;Nt(n,i);var c=Mt(n,n===Un?Bn:0);if(c===0)a!==null&&Gn(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Gn(a),i===1)n.tag===0?e_(_m.bind(null,n)):ip(_m.bind(null,n)),$v(function(){(Ot&6)===0&&zr()}),a=null;else{switch(qi(c)){case 1:a=ai;break;case 4:a=Li;break;case 16:a=Wn;break;case 536870912:a=A;break;default:a=Wn}a=Cm(a,vm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function vm(n,i){if(_l=-1,xl=0,(Ot&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Qs()&&n.callbackNode!==a)return null;var c=Mt(n,n===Un?Bn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=yl(n,c);else{i=c;var h=Ot;Ot|=2;var g=ym();(Un!==n||Bn!==i)&&(gr=null,Zs=Vt()+500,vs(n,i));do try{S_();break}catch(z){xm(n,z)}while(!0);mu(),fl.current=g,Ot=h,Sn!==null?i=0:(Un=null,Bn=0,i=bn)}if(i!==0){if(i===2&&(h=cn(n),h!==0&&(c=h,i=Qu(n,h))),i===1)throw a=eo,vs(n,0),Xr(n,c),hi(n,Vt()),a;if(i===6)Xr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!x_(h)&&(i=yl(n,c),i===2&&(g=cn(n),g!==0&&(c=g,i=Qu(n,g))),i===1))throw a=eo,vs(n,0),Xr(n,c),hi(n,Vt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:_s(n,ui,gr);break;case 3:if(Xr(n,c),(c&130023424)===c&&(i=Yu+500-Vt(),10<i)){if(Mt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){ni(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=ru(_s.bind(null,n,ui,gr),i);break}_s(n,ui,gr);break;case 4:if(Xr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var C=31-te(c);g=1<<C,C=i[C],C>h&&(h=C),c&=~g}if(c=h,c=Vt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*__(c/1960))-c,10<c){n.timeoutHandle=ru(_s.bind(null,n,ui,gr),c);break}_s(n,ui,gr);break;case 5:_s(n,ui,gr);break;default:throw Error(t(329))}}}return hi(n,Vt()),n.callbackNode===a?vm.bind(null,n):null}function Qu(n,i){var a=to;return n.current.memoizedState.isDehydrated&&(vs(n,i).flags|=256),n=yl(n,i),n!==2&&(i=ui,ui=a,i!==null&&Ju(i)),n}function Ju(n){ui===null?ui=n:ui.push.apply(ui,n)}function x_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!Ui(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Xr(n,i){for(i&=~qu,i&=~pl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-te(i),c=1<<a;n[a]=-1,i&=~c}}function _m(n){if((Ot&6)!==0)throw Error(t(327));Qs();var i=Mt(n,0);if((i&1)===0)return hi(n,Vt()),null;var a=yl(n,i);if(n.tag!==0&&a===2){var c=cn(n);c!==0&&(i=c,a=Qu(n,c))}if(a===1)throw a=eo,vs(n,0),Xr(n,i),hi(n,Vt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,_s(n,ui,gr),hi(n,Vt()),null}function eh(n,i){var a=Ot;Ot|=1;try{return n(i)}finally{Ot=a,Ot===0&&(Zs=Vt()+500,Ko&&zr())}}function gs(n){Wr!==null&&Wr.tag===0&&(Ot&6)===0&&Qs();var i=Ot;Ot|=1;var a=Ni.transition,c=at;try{if(Ni.transition=null,at=1,n)return n()}finally{at=c,Ni.transition=a,Ot=i,(Ot&6)===0&&zr()}}function th(){yi=$s.current,an($s)}function vs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Yv(a)),Sn!==null)for(a=Sn.return;a!==null;){var c=a;switch(uu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&jo();break;case 3:Ks(),an(oi),an(Xn),Tu();break;case 5:Su(c);break;case 4:Ks();break;case 13:an(pn);break;case 19:an(pn);break;case 10:gu(c.type._context);break;case 22:case 23:th()}a=a.return}if(Un=n,Sn=n=Kr(n.current,null),Bn=yi=i,bn=0,eo=null,qu=pl=ms=0,ui=to=null,ds!==null){for(i=0;i<ds.length;i++)if(a=ds[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var C=g.next;g.next=h,c.next=C}a.pending=c}ds=null}return n}function xm(n,i){do{var a=Sn;try{if(mu(),il.current=ol,rl){for(var c=mn.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}rl=!1}if(ps=0,In=An=mn=null,qa=!1,Ya=0,Ku.current=null,a===null||a.return===null){bn=1,eo=i,Sn=null;break}e:{var g=n,C=a.return,z=a,j=i;if(i=Bn,z.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var fe=j,be=z,Ie=be.tag;if((be.mode&1)===0&&(Ie===0||Ie===11||Ie===15)){var Ce=be.alternate;Ce?(be.updateQueue=Ce.updateQueue,be.memoizedState=Ce.memoizedState,be.lanes=Ce.lanes):(be.updateQueue=null,be.memoizedState=null)}var Ye=Wp(C);if(Ye!==null){Ye.flags&=-257,jp(Ye,C,z,g,i),Ye.mode&1&&Gp(g,fe,i),i=Ye,j=fe;var it=i.updateQueue;if(it===null){var rt=new Set;rt.add(j),i.updateQueue=rt}else it.add(j);break e}else{if((i&1)===0){Gp(g,fe,i),nh();break e}j=Error(t(426))}}else if(un&&z.mode&1){var yn=Wp(C);if(yn!==null){(yn.flags&65536)===0&&(yn.flags|=256),jp(yn,C,z,g,i),fu(qs(j,z));break e}}g=j=qs(j,z),bn!==4&&(bn=2),to===null?to=[g]:to.push(g),g=C;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ue=Hp(g,j,i);pp(g,ue);break e;case 1:z=j;var q=g.type,de=g.stateNode;if((g.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(Gr===null||!Gr.has(de)))){g.flags|=65536,i&=-i,g.lanes|=i;var Fe=Vp(g,z,i);pp(g,Fe);break e}}g=g.return}while(g!==null)}Mm(a)}catch(ot){i=ot,Sn===a&&a!==null&&(Sn=a=a.return);continue}break}while(!0)}function ym(){var n=fl.current;return fl.current=ol,n===null?ol:n}function nh(){(bn===0||bn===3||bn===2)&&(bn=4),Un===null||(ms&268435455)===0&&(pl&268435455)===0||Xr(Un,Bn)}function yl(n,i){var a=Ot;Ot|=2;var c=ym();(Un!==n||Bn!==i)&&(gr=null,vs(n,i));do try{y_();break}catch(h){xm(n,h)}while(!0);if(mu(),Ot=a,fl.current=c,Sn!==null)throw Error(t(261));return Un=null,Bn=0,bn}function y_(){for(;Sn!==null;)Sm(Sn)}function S_(){for(;Sn!==null&&!ln();)Sm(Sn)}function Sm(n){var i=wm(n.alternate,n,yi);n.memoizedProps=n.pendingProps,i===null?Mm(n):Sn=i,Ku.current=null}function Mm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=f_(a,i,yi),a!==null){Sn=a;return}}else{if(a=p_(a,i),a!==null){a.flags&=32767,Sn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bn=6,Sn=null;return}}if(i=i.sibling,i!==null){Sn=i;return}Sn=i=n}while(i!==null);bn===0&&(bn=5)}function _s(n,i,a){var c=at,h=Ni.transition;try{Ni.transition=null,at=1,M_(n,i,a,c)}finally{Ni.transition=h,at=c}return null}function M_(n,i,a,c){do Qs();while(Wr!==null);if((Ot&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(nt(n,g),n===Un&&(Sn=Un=null,Bn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||gl||(gl=!0,Cm(Wn,function(){return Qs(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Ni.transition,Ni.transition=null;var C=at;at=1;var z=Ot;Ot|=4,Ku.current=null,g_(n,a),dm(a,n),Vv(nu),Po=!!tu,nu=tu=null,n.current=a,v_(a),fn(),Ot=z,at=C,Ni.transition=g}else n.current=a;if(gl&&(gl=!1,Wr=n,vl=h),g=n.pendingLanes,g===0&&(Gr=null),ae(a.stateNode),hi(n,Vt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(ml)throw ml=!1,n=$u,$u=null,n;return(vl&1)!==0&&n.tag!==0&&Qs(),g=n.pendingLanes,(g&1)!==0?n===Zu?no++:(no=0,Zu=n):no=0,zr(),null}function Qs(){if(Wr!==null){var n=qi(vl),i=Ni.transition,a=at;try{if(Ni.transition=null,at=16>n?16:n,Wr===null)var c=!1;else{if(n=Wr,Wr=null,vl=0,(Ot&6)!==0)throw Error(t(331));var h=Ot;for(Ot|=4,Je=n.current;Je!==null;){var g=Je,C=g.child;if((Je.flags&16)!==0){var z=g.deletions;if(z!==null){for(var j=0;j<z.length;j++){var fe=z[j];for(Je=fe;Je!==null;){var be=Je;switch(be.tag){case 0:case 11:case 15:Ja(8,be,g)}var Ie=be.child;if(Ie!==null)Ie.return=be,Je=Ie;else for(;Je!==null;){be=Je;var Ce=be.sibling,Ye=be.return;if(om(be),be===fe){Je=null;break}if(Ce!==null){Ce.return=Ye,Je=Ce;break}Je=Ye}}}var it=g.alternate;if(it!==null){var rt=it.child;if(rt!==null){it.child=null;do{var yn=rt.sibling;rt.sibling=null,rt=yn}while(rt!==null)}}Je=g}}if((g.subtreeFlags&2064)!==0&&C!==null)C.return=g,Je=C;else e:for(;Je!==null;){if(g=Je,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ja(9,g,g.return)}var ue=g.sibling;if(ue!==null){ue.return=g.return,Je=ue;break e}Je=g.return}}var q=n.current;for(Je=q;Je!==null;){C=Je;var de=C.child;if((C.subtreeFlags&2064)!==0&&de!==null)de.return=C,Je=de;else e:for(C=q;Je!==null;){if(z=Je,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:dl(9,z)}}catch(ot){_n(z,z.return,ot)}if(z===C){Je=null;break e}var Fe=z.sibling;if(Fe!==null){Fe.return=z.return,Je=Fe;break e}Je=z.return}}if(Ot=h,zr(),he&&typeof he.onPostCommitFiberRoot=="function")try{he.onPostCommitFiberRoot(W,n)}catch{}c=!0}return c}finally{at=a,Ni.transition=i}}return!1}function Tm(n,i,a){i=qs(a,i),i=Hp(n,i,1),n=Hr(n,i,1),i=ni(),n!==null&&(vn(n,1,i),hi(n,i))}function _n(n,i,a){if(n.tag===3)Tm(n,n,a);else for(;i!==null;){if(i.tag===3){Tm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Gr===null||!Gr.has(c))){n=qs(a,n),n=Vp(i,n,1),i=Hr(i,n,1),n=ni(),i!==null&&(vn(i,1,n),hi(i,n));break}}i=i.return}}function T_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=ni(),n.pingedLanes|=n.suspendedLanes&a,Un===n&&(Bn&a)===a&&(bn===4||bn===3&&(Bn&130023424)===Bn&&500>Vt()-Yu?vs(n,0):qu|=a),hi(n,i)}function Em(n,i){i===0&&((n.mode&1)===0?i=1:(i=et,et<<=1,(et&130023424)===0&&(et=4194304)));var a=ni();n=fr(n,i),n!==null&&(vn(n,i,a),hi(n,a))}function E_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Em(n,a)}function w_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Em(n,a)}var wm;wm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||oi.current)ci=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ci=!1,d_(n,i,a);ci=(n.flags&131072)!==0}else ci=!1,un&&(i.flags&1048576)!==0&&rp(i,Yo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;ul(n,i),n=i.pendingProps;var h=Bs(i,Xn.current);Xs(i,a),h=Cu(null,i,c,n,h,a);var g=Au();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,li(c)?(g=!0,Xo(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,xu(i),h.updater=ll,i.stateNode=h,h._reactInternals=i,Lu(i,c,n,a),i=Fu(null,i,c,!0,g,a)):(i.tag=0,un&&g&&cu(i),ti(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(ul(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=A_(c),n=Fi(c,n),h){case 0:i=Ou(null,i,c,n,a);break e;case 1:i=Zp(null,i,c,n,a);break e;case 11:i=Xp(null,i,c,n,a);break e;case 14:i=Kp(null,i,c,Fi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Fi(c,h),Ou(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Fi(c,h),Zp(n,i,c,h,a);case 3:e:{if(Qp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,fp(n,i),tl(i,c,null,a);var C=i.memoizedState;if(c=C.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=qs(Error(t(423)),i),i=Jp(n,i,c,a,h);break e}else if(c!==h){h=qs(Error(t(424)),i),i=Jp(n,i,c,a,h);break e}else for(xi=Or(i.stateNode.containerInfo.firstChild),_i=i,un=!0,Oi=null,a=hp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Gs(),c===h){i=mr(n,i,a);break e}ti(n,i,c,a)}i=i.child}return i;case 5:return gp(i),n===null&&du(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,C=h.children,iu(c,h)?C=null:g!==null&&iu(c,g)&&(i.flags|=32),$p(n,i),ti(n,i,C,a),i.child;case 6:return n===null&&du(i),null;case 13:return em(n,i,a);case 4:return yu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ws(i,null,c,a):ti(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Fi(c,h),Xp(n,i,c,h,a);case 7:return ti(n,i,i.pendingProps,a),i.child;case 8:return ti(n,i,i.pendingProps.children,a),i.child;case 12:return ti(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,C=h.value,en(Qo,c._currentValue),c._currentValue=C,g!==null)if(Ui(g.value,C)){if(g.children===h.children&&!oi.current){i=mr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var z=g.dependencies;if(z!==null){C=g.child;for(var j=z.firstContext;j!==null;){if(j.context===c){if(g.tag===1){j=pr(-1,a&-a),j.tag=2;var fe=g.updateQueue;if(fe!==null){fe=fe.shared;var be=fe.pending;be===null?j.next=j:(j.next=be.next,be.next=j),fe.pending=j}}g.lanes|=a,j=g.alternate,j!==null&&(j.lanes|=a),vu(g.return,a,i),z.lanes|=a;break}j=j.next}}else if(g.tag===10)C=g.type===i.type?null:g.child;else if(g.tag===18){if(C=g.return,C===null)throw Error(t(341));C.lanes|=a,z=C.alternate,z!==null&&(z.lanes|=a),vu(C,a,i),C=g.sibling}else C=g.child;if(C!==null)C.return=g;else for(C=g;C!==null;){if(C===i){C=null;break}if(g=C.sibling,g!==null){g.return=C.return,C=g;break}C=C.return}g=C}ti(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Xs(i,a),h=Ai(h),c=c(h),i.flags|=1,ti(n,i,c,a),i.child;case 14:return c=i.type,h=Fi(c,i.pendingProps),h=Fi(c.type,h),Kp(n,i,c,h,a);case 15:return qp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Fi(c,h),ul(n,i),i.tag=1,li(c)?(n=!0,Xo(i)):n=!1,Xs(i,a),zp(i,c,h),Lu(i,c,h,a),Fu(null,i,c,!0,n,a);case 19:return nm(n,i,a);case 22:return Yp(n,i,a)}throw Error(t(156,i.tag))};function Cm(n,i){return mi(n,i)}function C_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(n,i,a,c){return new C_(n,i,a,c)}function ih(n){return n=n.prototype,!(!n||!n.isReactComponent)}function A_(n){if(typeof n=="function")return ih(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===ee)return 14}return 2}function Kr(n,i){var a=n.alternate;return a===null?(a=Ri(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Sl(n,i,a,c,h,g){var C=2;if(c=n,typeof n=="function")ih(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case T:return xs(a.children,h,g,i);case R:C=8,h|=8;break;case X:return n=Ri(12,a,i,h|2),n.elementType=X,n.lanes=g,n;case ne:return n=Ri(13,a,i,h),n.elementType=ne,n.lanes=g,n;case H:return n=Ri(19,a,i,h),n.elementType=H,n.lanes=g,n;case Q:return Ml(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:C=10;break e;case G:C=9;break e;case Z:C=11;break e;case ee:C=14;break e;case K:C=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ri(C,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function xs(n,i,a,c){return n=Ri(7,n,c,i),n.lanes=a,n}function Ml(n,i,a,c){return n=Ri(22,n,c,i),n.elementType=Q,n.lanes=a,n.stateNode={isHidden:!1},n}function rh(n,i,a){return n=Ri(6,n,null,i),n.lanes=a,n}function sh(n,i,a){return i=Ri(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function b_(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gt(0),this.expirationTimes=Gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gt(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function ah(n,i,a,c,h,g,C,z,j){return n=new b_(n,i,a,z,j),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Ri(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(g),n}function N_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Am(n){if(!n)return kr;n=n._reactInternals;e:{if(hn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(li(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(li(a))return tp(n,a,i)}return i}function bm(n,i,a,c,h,g,C,z,j){return n=ah(a,c,!0,n,h,g,C,z,j),n.context=Am(null),a=n.current,c=ni(),h=jr(a),g=pr(c,h),g.callback=i??null,Hr(a,g,h),n.current.lanes=h,vn(n,h,c),hi(n,c),n}function Tl(n,i,a,c){var h=i.current,g=ni(),C=jr(h);return a=Am(a),i.context===null?i.context=a:i.pendingContext=a,i=pr(g,C),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Hr(h,i,C),n!==null&&(Bi(n,h,C,g),el(n,h,C)),C}function El(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Nm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function oh(n,i){Nm(n,i),(n=n.alternate)&&Nm(n,i)}function R_(){return null}var Rm=typeof reportError=="function"?reportError:function(n){console.error(n)};function lh(n){this._internalRoot=n}wl.prototype.render=lh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Tl(n,i,null,null)},wl.prototype.unmount=lh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;gs(function(){Tl(null,n,null,null)}),i[cr]=null}};function wl(n){this._internalRoot=n}wl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Yi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Lr.length&&i!==0&&i<Lr[a].priority;a++);Lr.splice(a,0,n),a===0&&gf(n)}};function ch(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function P_(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var fe=El(C);g.call(fe)}}var C=bm(i,c,n,0,null,!1,!1,"",Pm);return n._reactRootContainer=C,n[cr]=C.current,Ba(n.nodeType===8?n.parentNode:n),gs(),C}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var z=c;c=function(){var fe=El(j);z.call(fe)}}var j=ah(n,0,!1,null,null,!1,!1,"",Pm);return n._reactRootContainer=j,n[cr]=j.current,Ba(n.nodeType===8?n.parentNode:n),gs(function(){Tl(i,j,a,c)}),j}function Al(n,i,a,c,h){var g=a._reactRootContainer;if(g){var C=g;if(typeof h=="function"){var z=h;h=function(){var j=El(C);z.call(j)}}Tl(i,C,n,h)}else C=P_(a,i,n,h,c);return El(C)}Cn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=pt(i.pendingLanes);a!==0&&(wn(i,a|1),hi(i,Vt()),(Ot&6)===0&&(Zs=Vt()+500,zr()))}break;case 13:gs(function(){var c=fr(n,1);if(c!==null){var h=ni();Bi(c,n,1,h)}}),oh(n,1)}},Pr=function(n){if(n.tag===13){var i=fr(n,134217728);if(i!==null){var a=ni();Bi(i,n,134217728,a)}oh(n,134217728)}},Ii=function(n){if(n.tag===13){var i=jr(n),a=fr(n,i);if(a!==null){var c=ni();Bi(a,n,i,c)}oh(n,i)}},Yi=function(){return at},Dt=function(n,i){var a=at;try{return at=n,i()}finally{at=a}},_e=function(n,i,a){switch(i){case"input":if($t(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Wo(c);if(!h)throw Error(t(90));lt(c),$t(c,h)}}}break;case"textarea":V(n,a);break;case"select":i=a.value,i!=null&&on(n,!!a.multiple,i,!1)}},le=eh,ie=gs;var D_={usingClientEntryPoint:!1,Events:[Ga,ks,Wo,ge,Oe,eh]},io={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L_={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=kn(n),n===null?null:n.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||R_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{W=bl.inject(L_),he=bl}catch{}}return di.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D_,di.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ch(i))throw Error(t(200));return N_(n,i,null,a)},di.createRoot=function(n,i){if(!ch(n))throw Error(t(299));var a=!1,c="",h=Rm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=ah(n,1,!1,null,null,a,!1,c,h),n[cr]=i.current,Ba(n.nodeType===8?n.parentNode:n),new lh(i)},di.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=kn(i),n=n===null?null:n.stateNode,n},di.flushSync=function(n){return gs(n)},di.hydrate=function(n,i,a){if(!Cl(i))throw Error(t(200));return Al(null,n,i,!0,a)},di.hydrateRoot=function(n,i,a){if(!ch(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",C=Rm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=bm(i,null,n,1,a??null,h,!1,g,C),n[cr]=i.current,Ba(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new wl(i)},di.render=function(n,i,a){if(!Cl(i))throw Error(t(200));return Al(null,n,i,!1,a)},di.unmountComponentAtNode=function(n){if(!Cl(n))throw Error(t(40));return n._reactRootContainer?(gs(function(){Al(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},di.unstable_batchedUpdates=eh,di.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Cl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Al(n,i,a,!1,c)},di.version="18.3.1-next-f1338f8080-20240426",di}var zm;function V_(){if(zm)return dh.exports;zm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),dh.exports=H_(),dh.exports}var Bm;function G_(){if(Bm)return Nl;Bm=1;var s=V_();return Nl.createRoot=s.createRoot,Nl.hydrateRoot=s.hydrateRoot,Nl}var W_=G_();const j_=ng(W_);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ig=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var K_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=wt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},p)=>wt.createElement("svg",{ref:p,...K_,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:ig("lucide",o),...d},[...u.map(([m,_])=>wt.createElement(m,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=(s,e)=>{const t=wt.forwardRef(({className:r,...o},l)=>wt.createElement(q_,{ref:l,iconNode:e,className:ig(`lucide-${X_(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=kt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=kt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=kt("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=kt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=kt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=kt("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=kt("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=kt("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=kt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=kt("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=kt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=kt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=kt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=kt("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=kt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=kt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=kt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=kt("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=kt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=kt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=kt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=kt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=kt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=kt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=kt("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=kt("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=kt("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=kt("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=kt("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=kt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=kt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=kt("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=kt("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kd="187",ya={ROTATE:0,DOLLY:1,PAN:2},_a={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ux=0,Gm=1,hx=2,hc=1,ag=2,go=3,Cs=0,pi=1,Xi=2,Sa=0,xo=1,Wm=2,jm=3,Xm=4,dx=5,ga=100,fx=101,px=102,mx=103,gx=104,vx=200,_x=201,xx=202,yx=203,og=204,lg=205,Sx=206,Mx=207,Tx=208,Ex=209,wx=210,Cx=211,Ax=212,bx=213,Nx=214,ed=0,td=1,nd=2,To=3,id=4,rd=5,sd=6,ad=7,cg=0,Rx=1,Px=2,Ar=0,ug=1,hg=2,dg=3,qd=4,fg=5,pg=6,mg=7,gg=300,Ta=301,Eo=302,_h=303,xh=304,od=1e3,wr=1001,ld=1002,Hn=1003,Dx=1004,Il=1005,si=1006,yh=1007,ts=1008,Ti=1009,vg=1010,_g=1011,wo=1012,Yd=1013,or=1014,rr=1015,lr=1016,$d=1017,Zd=1018,Ea=1020,xg=35902,yg=35899,Sg=1021,Mg=1022,sr=1023,rs=1026,ns=1027,Tg=1028,Qd=1029,As=1030,Jd=1031,ef=1033,dc=33776,fc=33777,pc=33778,mc=33779,cd=35840,ud=35841,hd=35842,dd=35843,fd=36196,pd=37492,md=37496,gd=37488,vd=37489,_c=37490,_d=37491,xd=37808,yd=37809,Sd=37810,Md=37811,Td=37812,Ed=37813,wd=37814,Cd=37815,Ad=37816,bd=37817,Nd=37818,Rd=37819,Pd=37820,Dd=37821,Ld=36492,Id=36494,Ud=36495,Od=36283,Fd=36284,xc=36285,kd=36286,Lx=3200,zd=0,Ix=1,es="",Di="srgb",yc="srgb-linear",Sc="linear",Kt="srgb",Sh=7680,Ux=519,Ox=512,Fx=513,kx=514,Eg=515,zx=516,Bx=517,wg=518,Cg=519,Ag=35044,Km="300 es",Ki=2e3,Co=2001;function Hx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Mc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vx(){const s=Mc("canvas");return s.style.display="block",s}const qm={};function Tc(...s){const e="THREE."+s.shift();console.log(e,...s)}function bg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function mt(...s){s=bg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ft(...s){s=bg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function gc(...s){const e=s.join(" ");e in qm||(qm[e]=!0,mt(...s))}function Gx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Wx={[ed]:ed,[nd]:sd,[id]:id,[To]:rd,[td]:td,[sd]:nd,[ad]:ad,[rd]:To};class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const $n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yo=Math.PI/180,Bd=180/Math.PI;function Ns(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return($n[s&255]+$n[s>>8&255]+$n[s>>16&255]+$n[s>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[t&63|128]+$n[t>>8&255]+"-"+$n[t>>16&255]+$n[t>>24&255]+$n[r&255]+$n[r>>8&255]+$n[r>>16&255]+$n[r>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function jx(s,e){return(s%e+e)%e}function Mh(s,e,t){return(1-t)*s+t*e}function Xx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Pc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ng(s,e){if(e.constructor===Float32Array)return s;const t=Pc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Rg(s,e){if(e.constructor===Float32Array)return s;const t=Pc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Kx={DEG2RAD:yo},hf=class hf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hf.prototype.isVector2=!0;let Xe=hf;class ss{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let p=r[o+0],m=r[o+1],_=r[o+2],M=r[o+3],v=l[u+0],S=l[u+1],E=l[u+2],b=l[u+3];if(M!==b||p!==v||m!==S||_!==E){let y=p*v+m*S+_*E+M*b;y<0&&(v=-v,S=-S,E=-E,b=-b,y=-y);let x=1-d;if(y<.9995){const D=Math.acos(y),k=Math.sin(D);x=Math.sin(x*D)/k,d=Math.sin(d*D)/k,p=p*x+v*d,m=m*x+S*d,_=_*x+E*d,M=M*x+b*d}else{p=p*x+v*d,m=m*x+S*d,_=_*x+E*d,M=M*x+b*d;const D=1/Math.sqrt(p*p+m*m+_*_+M*M);p*=D,m*=D,_*=D,M*=D}}e[t]=p,e[t+1]=m,e[t+2]=_,e[t+3]=M}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],p=r[o+1],m=r[o+2],_=r[o+3],M=l[u],v=l[u+1],S=l[u+2],E=l[u+3];return e[t]=d*E+_*M+p*S-m*v,e[t+1]=p*E+_*v+m*M-d*S,e[t+2]=m*E+_*S+d*v-p*M,e[t+3]=_*E-d*M-p*v-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(o/2),M=d(l/2),v=p(r/2),S=p(o/2),E=p(l/2);switch(u){case"XYZ":this._x=v*_*M+m*S*E,this._y=m*S*M-v*_*E,this._z=m*_*E+v*S*M,this._w=m*_*M-v*S*E;break;case"YXZ":this._x=v*_*M+m*S*E,this._y=m*S*M-v*_*E,this._z=m*_*E-v*S*M,this._w=m*_*M+v*S*E;break;case"ZXY":this._x=v*_*M-m*S*E,this._y=m*S*M+v*_*E,this._z=m*_*E+v*S*M,this._w=m*_*M-v*S*E;break;case"ZYX":this._x=v*_*M-m*S*E,this._y=m*S*M+v*_*E,this._z=m*_*E-v*S*M,this._w=m*_*M+v*S*E;break;case"YZX":this._x=v*_*M+m*S*E,this._y=m*S*M+v*_*E,this._z=m*_*E-v*S*M,this._w=m*_*M-v*S*E;break;case"XZY":this._x=v*_*M-m*S*E,this._y=m*S*M-v*_*E,this._z=m*_*E+v*S*M,this._w=m*_*M+v*S*E;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],p=t[9],m=t[2],_=t[6],M=t[10],v=r+d+M;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(l-m)*S,this._z=(u-o)*S}else if(r>d&&r>M){const S=2*Math.sqrt(1+r-d-M);this._w=(_-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+m)/S}else if(d>M){const S=2*Math.sqrt(1+d-r-M);this._w=(l-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+M-r-d);this._w=(u-o)/S,this._x=(l+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,p=t._y,m=t._z,_=t._w;return this._x=r*_+u*d+o*m-l*p,this._y=o*_+u*p+l*d-r*m,this._z=l*_+u*m+r*p-o*d,this._w=u*_-r*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let p=1-t;if(d<.9995){const m=Math.acos(d),_=Math.sin(m);p=Math.sin(p*m)/_,t=Math.sin(t*m)/_,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const df=class df{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),_=2*(d*t-l*o),M=2*(l*r-u*t);return this.x=t+p*m+u*M-d*_,this.y=r+p*_+d*m-l*M,this.z=o+p*M+l*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Th.copy(this).projectOnVector(e),this.sub(Th)}reflect(e){return this.sub(Th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};df.prototype.isVector3=!0;let N=df;const Th=new N,Ym=new ss,ff=class ff{constructor(e,t,r,o,l,u,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m)}set(e,t,r,o,l,u,d,p,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=d,_[3]=t,_[4]=l,_[5]=p,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],_=r[4],M=r[7],v=r[2],S=r[5],E=r[8],b=o[0],y=o[3],x=o[6],D=o[1],k=o[4],L=o[7],F=o[2],U=o[5],T=o[8];return l[0]=u*b+d*D+p*F,l[3]=u*y+d*k+p*U,l[6]=u*x+d*L+p*T,l[1]=m*b+_*D+M*F,l[4]=m*y+_*k+M*U,l[7]=m*x+_*L+M*T,l[2]=v*b+S*D+E*F,l[5]=v*y+S*k+E*U,l[8]=v*x+S*L+E*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return t*u*_-t*d*m-r*l*_+r*d*p+o*l*m-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8],M=_*u-d*m,v=d*p-_*l,S=m*l-u*p,E=t*M+r*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=M*b,e[1]=(o*m-_*r)*b,e[2]=(d*r-o*u)*b,e[3]=v*b,e[4]=(_*t-o*p)*b,e[5]=(o*l-d*t)*b,e[6]=S*b,e[7]=(r*p-m*t)*b,e[8]=(u*t-r*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+t,0,0,1),this}scale(e,t){return gc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eh.makeScale(e,t)),this}rotate(e){return gc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eh.makeRotation(-e)),this}translate(e,t){return gc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ff.prototype.isMatrix3=!0;let _t=ff;const Eh=new _t,$m=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zm=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qx(){const s={enabled:!0,workingColorSpace:yc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Kt&&(o.r=br(o.r),o.g=br(o.g),o.b=br(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Kt&&(o.r=Ma(o.r),o.g=Ma(o.g),o.b=Ma(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===es?Sc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[yc]:{primaries:e,whitePoint:r,transfer:Sc,toXYZ:$m,fromXYZ:Zm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:e,whitePoint:r,transfer:Kt,toXYZ:$m,fromXYZ:Zm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),s}const It=qx();function br(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ma(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ea;class Yx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ea===void 0&&(ea=Mc("canvas")),ea.width=e.width,ea.height=e.height;const o=ea.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ea}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=br(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(br(t[r]/255)*255):t[r]=br(t[r]);return{data:t,width:e.width,height:e.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $x=0;class tf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(wh(o[u].image)):l.push(wh(o[u]))}else l=wh(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function wh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}let Zx=0;const Ch=new N;class Jn extends os{constructor(e=Jn.DEFAULT_IMAGE,t=Jn.DEFAULT_MAPPING,r=wr,o=wr,l=si,u=ts,d=sr,p=Ti,m=Jn.DEFAULT_ANISOTROPY,_=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Ns(),this.name="",this.source=new tf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){mt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case od:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case od:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=gg;Jn.DEFAULT_ANISOTROPY=1;const pf=class pf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],_=p[4],M=p[8],v=p[1],S=p[5],E=p[9],b=p[2],y=p[6],x=p[10];if(Math.abs(_-v)<.01&&Math.abs(M-b)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(M+b)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(m+1)/2,L=(S+1)/2,F=(x+1)/2,U=(_+v)/4,T=(M+b)/4,R=(E+y)/4;return k>L&&k>F?k<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(k),o=U/r,l=T/r):L>F?L<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),r=U/o,l=R/o):F<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),r=T/l,o=R/l),this.set(r,o,l,t),this}let D=Math.sqrt((y-E)*(y-E)+(M-b)*(M-b)+(v-_)*(v-_));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(M-b)/D,this.z=(v-_)/D,this.w=Math.acos((m+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pf.prototype.isVector4=!0;let gn=pf;class Qx extends os{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new gn(0,0,e,t),this.scissorTest=!1,this.viewport=new gn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new Jn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:si,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new tf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends Qx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Pg extends Jn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jx extends Jn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Rc=class Rc{constructor(e,t,r,o,l,u,d,p,m,_,M,v,S,E,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m,_,M,v,S,E,b,y)}set(e,t,r,o,l,u,d,p,m,_,M,v,S,E,b,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=d,x[13]=p,x[2]=m,x[6]=_,x[10]=M,x[14]=v,x[3]=S,x[7]=E,x[11]=b,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ta.setFromMatrixColumn(e,0).length(),l=1/ta.setFromMatrixColumn(e,1).length(),u=1/ta.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),_=Math.cos(l),M=Math.sin(l);if(e.order==="XYZ"){const v=u*_,S=u*M,E=d*_,b=d*M;t[0]=p*_,t[4]=-p*M,t[8]=m,t[1]=S+E*m,t[5]=v-b*m,t[9]=-d*p,t[2]=b-v*m,t[6]=E+S*m,t[10]=u*p}else if(e.order==="YXZ"){const v=p*_,S=p*M,E=m*_,b=m*M;t[0]=v+b*d,t[4]=E*d-S,t[8]=u*m,t[1]=u*M,t[5]=u*_,t[9]=-d,t[2]=S*d-E,t[6]=b+v*d,t[10]=u*p}else if(e.order==="ZXY"){const v=p*_,S=p*M,E=m*_,b=m*M;t[0]=v-b*d,t[4]=-u*M,t[8]=E+S*d,t[1]=S+E*d,t[5]=u*_,t[9]=b-v*d,t[2]=-u*m,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const v=u*_,S=u*M,E=d*_,b=d*M;t[0]=p*_,t[4]=E*m-S,t[8]=v*m+b,t[1]=p*M,t[5]=b*m+v,t[9]=S*m-E,t[2]=-m,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const v=u*p,S=u*m,E=d*p,b=d*m;t[0]=p*_,t[4]=b-v*M,t[8]=E*M+S,t[1]=M,t[5]=u*_,t[9]=-d*_,t[2]=-m*_,t[6]=S*M+E,t[10]=v-b*M}else if(e.order==="XZY"){const v=u*p,S=u*m,E=d*p,b=d*m;t[0]=p*_,t[4]=-M,t[8]=m*_,t[1]=v*M+b,t[5]=u*_,t[9]=S*M-E,t[2]=E*M-S,t[6]=d*_,t[10]=b*M+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ey,e,ty)}lookAt(e,t,r){const o=this.elements;return Si.subVectors(e,t),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Yr.crossVectors(r,Si),Yr.lengthSq()===0&&(Math.abs(r.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Yr.crossVectors(r,Si)),Yr.normalize(),Ul.crossVectors(Si,Yr),o[0]=Yr.x,o[4]=Ul.x,o[8]=Si.x,o[1]=Yr.y,o[5]=Ul.y,o[9]=Si.y,o[2]=Yr.z,o[6]=Ul.z,o[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],_=r[1],M=r[5],v=r[9],S=r[13],E=r[2],b=r[6],y=r[10],x=r[14],D=r[3],k=r[7],L=r[11],F=r[15],U=o[0],T=o[4],R=o[8],X=o[12],P=o[1],G=o[5],Z=o[9],ne=o[13],H=o[2],ee=o[6],K=o[10],Q=o[14],$=o[3],Y=o[7],J=o[11],O=o[15];return l[0]=u*U+d*P+p*H+m*$,l[4]=u*T+d*G+p*ee+m*Y,l[8]=u*R+d*Z+p*K+m*J,l[12]=u*X+d*ne+p*Q+m*O,l[1]=_*U+M*P+v*H+S*$,l[5]=_*T+M*G+v*ee+S*Y,l[9]=_*R+M*Z+v*K+S*J,l[13]=_*X+M*ne+v*Q+S*O,l[2]=E*U+b*P+y*H+x*$,l[6]=E*T+b*G+y*ee+x*Y,l[10]=E*R+b*Z+y*K+x*J,l[14]=E*X+b*ne+y*Q+x*O,l[3]=D*U+k*P+L*H+F*$,l[7]=D*T+k*G+L*ee+F*Y,l[11]=D*R+k*Z+L*K+F*J,l[15]=D*X+k*ne+L*Q+F*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],m=e[13],_=e[2],M=e[6],v=e[10],S=e[14],E=e[3],b=e[7],y=e[11],x=e[15],D=p*S-m*v,k=d*S-m*M,L=d*v-p*M,F=u*S-m*_,U=u*v-p*_,T=u*M-d*_;return t*(b*D-y*k+x*L)-r*(E*D-y*F+x*U)+o*(E*k-b*F+x*T)-l*(E*L-b*U+y*T)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],d=e[9],p=e[2],m=e[6],_=e[10];return t*(u*_-d*m)-r*(l*_-d*p)+o*(l*m-u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],_=e[8],M=e[9],v=e[10],S=e[11],E=e[12],b=e[13],y=e[14],x=e[15],D=t*d-r*u,k=t*p-o*u,L=t*m-l*u,F=r*p-o*d,U=r*m-l*d,T=o*m-l*p,R=_*b-M*E,X=_*y-v*E,P=_*x-S*E,G=M*y-v*b,Z=M*x-S*b,ne=v*x-S*y,H=D*ne-k*Z+L*G+F*P-U*X+T*R;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/H;return e[0]=(d*ne-p*Z+m*G)*ee,e[1]=(o*Z-r*ne-l*G)*ee,e[2]=(b*T-y*U+x*F)*ee,e[3]=(v*U-M*T-S*F)*ee,e[4]=(p*P-u*ne-m*X)*ee,e[5]=(t*ne-o*P+l*X)*ee,e[6]=(y*L-E*T-x*k)*ee,e[7]=(_*T-v*L+S*k)*ee,e[8]=(u*Z-d*P+m*R)*ee,e[9]=(r*P-t*Z-l*R)*ee,e[10]=(E*U-b*L+x*D)*ee,e[11]=(M*L-_*U-S*D)*ee,e[12]=(d*X-u*G-p*R)*ee,e[13]=(t*G-r*X+o*R)*ee,e[14]=(b*k-E*F-y*D)*ee,e[15]=(_*F-M*k+v*D)*ee,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,p=e.z,m=l*u,_=l*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,_*d+r,_*p-o*u,0,m*p-o*d,_*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,p=t._w,m=l+l,_=u+u,M=d+d,v=l*m,S=l*_,E=l*M,b=u*_,y=u*M,x=d*M,D=p*m,k=p*_,L=p*M,F=r.x,U=r.y,T=r.z;return o[0]=(1-(b+x))*F,o[1]=(S+L)*F,o[2]=(E-k)*F,o[3]=0,o[4]=(S-L)*U,o[5]=(1-(v+x))*U,o[6]=(y+D)*U,o[7]=0,o[8]=(E+k)*T,o[9]=(y-D)*T,o[10]=(1-(v+b))*T,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ta.set(o[0],o[1],o[2]).length();const d=ta.set(o[4],o[5],o[6]).length(),p=ta.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Hi.copy(this);const m=1/u,_=1/d,M=1/p;return Hi.elements[0]*=m,Hi.elements[1]*=m,Hi.elements[2]*=m,Hi.elements[4]*=_,Hi.elements[5]*=_,Hi.elements[6]*=_,Hi.elements[8]*=M,Hi.elements[9]*=M,Hi.elements[10]*=M,t.setFromRotationMatrix(Hi),r.x=u,r.y=d,r.z=p,this}makePerspective(e,t,r,o,l,u,d=Ki,p=!1){const m=this.elements,_=2*l/(t-e),M=2*l/(r-o),v=(t+e)/(t-e),S=(r+o)/(r-o);let E,b;if(p)E=l/(u-l),b=u*l/(u-l);else if(d===Ki)E=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(d===Co)E=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=M,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Ki,p=!1){const m=this.elements,_=2/(t-e),M=2/(r-o),v=-(t+e)/(t-e),S=-(r+o)/(r-o);let E,b;if(p)E=1/(u-l),b=u/(u-l);else if(d===Ki)E=-2/(u-l),b=-(u+l)/(u-l);else if(d===Co)E=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=M,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=E,m[14]=b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Rc.prototype.isMatrix4=!0;let Jt=Rc;const ta=new N,Hi=new Jt,ey=new N(0,0,0),ty=new N(1,1,1),Yr=new N,Ul=new N,Si=new N,Qm=new Jt,Jm=new ss;class as{constructor(e=0,t=0,r=0,o=as.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],m=o[5],_=o[9],M=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-M,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-M,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Ct(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Ct(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-M,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jm.setFromEuler(this),this.setFromQuaternion(Jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class nf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ny=0;const e0=new N,na=new ss,xr=new Jt,Ol=new N,ao=new N,iy=new N,ry=new ss,t0=new N(1,0,0),n0=new N(0,1,0),i0=new N(0,0,1),r0={type:"added"},sy={type:"removed"},ia={type:"childadded",child:null},Ah={type:"childremoved",child:null};class Rn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new N,t=new as,r=new ss,o=new N(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Jt},normalMatrix:{value:new _t}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(t0,e)}rotateY(e){return this.rotateOnAxis(n0,e)}rotateZ(e){return this.rotateOnAxis(i0,e)}translateOnAxis(e,t){return e0.copy(e).applyQuaternion(this.quaternion),this.position.add(e0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(t0,e)}translateY(e){return this.translateOnAxis(n0,e)}translateZ(e){return this.translateOnAxis(i0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ol.copy(e):Ol.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(ao,Ol,this.up):xr.lookAt(Ol,ao,this.up),this.quaternion.setFromRotationMatrix(xr),o&&(xr.extractRotation(o.matrixWorld),na.setFromRotationMatrix(xr),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(r0),ia.child=e,this.dispatchEvent(ia),ia.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sy),Ah.child=e,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(r0),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,iy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,ry,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const M=p[m];l(e.shapes,M)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),_=u(e.images),M=u(e.shapes),v=u(e.skeletons),S=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),M.length>0&&(r.shapes=M),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rn.DEFAULT_UP=new N(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qn extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ay={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,r),x=this._getHandJoint(m,b);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=m.joints["index-finger-tip"],M=m.joints["thumb-tip"],v=_.position.distanceTo(M.position),S=.02,E=.005;m.inputState.pinching&&v>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ay)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Qn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},Fl={h:0,s:0,l:0};function Nh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=It.workingColorSpace){return this.r=e,this.g=t,this.b=r,It.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=It.workingColorSpace){if(e=jx(e,1),t=Ct(t,0,1),r=Ct(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Nh(u,l,e+1/3),this.g=Nh(u,l,e),this.b=Nh(u,l,e-1/3)}return It.colorSpaceToWorking(this,o),this}setStyle(e,t=Di){function r(l){l!==void 0&&parseFloat(l)<1&&mt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:mt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Di){const r=Dg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return It.workingToColorSpace(Zn.copy(this),e),Math.round(Ct(Zn.r*255,0,255))*65536+Math.round(Ct(Zn.g*255,0,255))*256+Math.round(Ct(Zn.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Zn.copy(this),t);const r=Zn.r,o=Zn.g,l=Zn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,m;const _=(d+u)/2;if(d===u)p=0,m=0;else{const M=u-d;switch(m=_<=.5?M/(u+d):M/(2-u-d),u){case r:p=(o-l)/M+(o<l?6:0);break;case o:p=(l-r)/M+2;break;case l:p=(r-o)/M+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Zn.copy(this),t),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=Di){It.workingToColorSpace(Zn.copy(this),e);const t=Zn.r,r=Zn.g,o=Zn.b;return e!==Di?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL($r),this.setHSL($r.h+e,$r.s+t,$r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL($r),e.getHSL(Fl);const r=Mh($r.h,Fl.h,t),o=Mh($r.s,Fl.s,t),l=Mh($r.l,Fl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new At;At.NAMES=Dg;class oy extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vi=new N,yr=new N,Rh=new N,Sr=new N,ra=new N,sa=new N,s0=new N,Ph=new N,Dh=new N,Lh=new N,Ih=new gn,Uh=new gn,Oh=new gn;class Ei{constructor(e=new N,t=new N,r=new N){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Vi.subVectors(e,t),o.cross(Vi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Vi.subVectors(o,t),yr.subVectors(r,t),Rh.subVectors(e,t);const u=Vi.dot(Vi),d=Vi.dot(yr),p=Vi.dot(Rh),m=yr.dot(yr),_=yr.dot(Rh),M=u*m-d*d;if(M===0)return l.set(0,0,0),null;const v=1/M,S=(m*p-d*_)*v,E=(u*_-d*p)*v;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,r,o,l,u,d,p){return this.getBarycoord(e,t,r,o,Sr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Sr.x),p.addScaledVector(u,Sr.y),p.addScaledVector(d,Sr.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return Ih.setScalar(0),Uh.setScalar(0),Oh.setScalar(0),Ih.fromBufferAttribute(e,t),Uh.fromBufferAttribute(e,r),Oh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ih,l.x),u.addScaledVector(Uh,l.y),u.addScaledVector(Oh,l.z),u}static isFrontFacing(e,t,r,o){return Vi.subVectors(r,t),yr.subVectors(e,t),Vi.cross(yr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),Vi.cross(yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ei.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;ra.subVectors(o,r),sa.subVectors(l,r),Ph.subVectors(e,r);const p=ra.dot(Ph),m=sa.dot(Ph);if(p<=0&&m<=0)return t.copy(r);Dh.subVectors(e,o);const _=ra.dot(Dh),M=sa.dot(Dh);if(_>=0&&M<=_)return t.copy(o);const v=p*M-_*m;if(v<=0&&p>=0&&_<=0&&p-_>0)return u=p/(p-_),t.copy(r).addScaledVector(ra,u);Lh.subVectors(e,l);const S=ra.dot(Lh),E=sa.dot(Lh);if(E>=0&&S<=E)return t.copy(l);const b=S*m-p*E;if(b<=0&&m>=0&&E<=0)return d=m/(m-E),t.copy(r).addScaledVector(sa,d);const y=_*E-S*M;if(y<=0&&M-_>=0&&S-E>=0)return s0.subVectors(l,o),d=(M-_)/(M-_+(S-E)),t.copy(o).addScaledVector(s0,d);const x=1/(y+b+v);return u=b*x,d=v*x,t.copy(r).addScaledVector(ra,u).addScaledVector(sa,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class bo{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Gi):Gi.fromBufferAttribute(l,u),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),kl.copy(r.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),zl.subVectors(this.max,oo),aa.subVectors(e.a,oo),oa.subVectors(e.b,oo),la.subVectors(e.c,oo),Zr.subVectors(oa,aa),Qr.subVectors(la,oa),Ss.subVectors(aa,la);let t=[0,-Zr.z,Zr.y,0,-Qr.z,Qr.y,0,-Ss.z,Ss.y,Zr.z,0,-Zr.x,Qr.z,0,-Qr.x,Ss.z,0,-Ss.x,-Zr.y,Zr.x,0,-Qr.y,Qr.x,0,-Ss.y,Ss.x,0];return!Fh(t,aa,oa,la,zl)||(t=[1,0,0,0,1,0,0,0,1],!Fh(t,aa,oa,la,zl))?!1:(Bl.crossVectors(Zr,Qr),t=[Bl.x,Bl.y,Bl.z],Fh(t,aa,oa,la,zl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mr=[new N,new N,new N,new N,new N,new N,new N,new N],Gi=new N,kl=new bo,aa=new N,oa=new N,la=new N,Zr=new N,Qr=new N,Ss=new N,oo=new N,zl=new N,Bl=new N,Ms=new N;function Fh(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Ms.fromArray(s,l);const d=o.x*Math.abs(Ms.x)+o.y*Math.abs(Ms.y)+o.z*Math.abs(Ms.z),p=e.dot(Ms),m=t.dot(Ms),_=r.dot(Ms);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const Mn=new N,Hl=new Xe;let ly=0;class is extends os{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ly++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Ag,this.updateRanges=[],this.gpuType=rr,this.version=0,this._normalizationScale=e!==void 0?Pc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Hl.fromBufferAttribute(this,t),Hl.applyMatrix3(e),this.setXY(t,Hl.x,Hl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix3(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ng(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Rg(e,this.array)}}class Lg extends is{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ig extends is{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class qt extends is{constructor(e,t,r){super(new Float32Array(e),t,r)}}const cy=new bo,lo=new N,kh=new N;class Dc{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):cy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(lo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(kh)),this.expandByPoint(lo.copy(e.center).sub(kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let uy=0;const Pi=new Jt,zh=new Rn,ca=new N,Mi=new bo,co=new bo,Fn=new N;class ei extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hx(e)?Ig:Lg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new _t().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,r){return Pi.makeTranslation(e,t,r),this.applyMatrix4(Pi),this}scale(e,t,r){return Pi.makeScale(e,t,r),this.applyMatrix4(Pi),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new qt(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Mi.setFromBufferAttribute(l),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const r=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];co.setFromBufferAttribute(d),this.morphTargetsRelative?(Fn.addVectors(Mi.min,co.min),Mi.expandByPoint(Fn),Fn.addVectors(Mi.max,co.max),Mi.expandByPoint(Fn)):(Mi.expandByPoint(co.min),Mi.expandByPoint(co.max))}Mi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Fn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Fn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Fn.fromBufferAttribute(d,m),p&&(ca.fromBufferAttribute(e,m),Fn.add(ca)),o=Math.max(o,r.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new is(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],p=[],m=new Uint8Array(r.count);for(let X=0;X<r.count;X++)d[X]=new N,p[X]=new N;const _=new N,M=new N,v=new N,S=new Xe,E=new Xe,b=new Xe,y=new N,x=new N;function D(X,P,G){m[X]=m[P]=m[G]=1,_.fromBufferAttribute(r,X),M.fromBufferAttribute(r,P),v.fromBufferAttribute(r,G),S.fromBufferAttribute(l,X),E.fromBufferAttribute(l,P),b.fromBufferAttribute(l,G),M.sub(_),v.sub(_),E.sub(S),b.sub(S);const Z=1/(E.x*b.y-b.x*E.y);isFinite(Z)&&(y.copy(M).multiplyScalar(b.y).addScaledVector(v,-E.y).multiplyScalar(Z),x.copy(v).multiplyScalar(E.x).addScaledVector(M,-b.x).multiplyScalar(Z),d[X].add(y),d[P].add(y),d[G].add(y),p[X].add(x),p[P].add(x),p[G].add(x))}let k=this.groups;k.length===0&&(k=[{start:0,count:e.count}]);for(let X=0,P=k.length;X<P;++X){const G=k[X],Z=G.start,ne=G.count;for(let H=Z,ee=Z+ne;H<ee;H+=3)D(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const L=new N,F=new N,U=new N,T=new N;function R(X){U.fromBufferAttribute(o,X),T.copy(U);const P=d[X];L.copy(P),L.sub(U.multiplyScalar(U.dot(P))).normalize(),F.crossVectors(T,P);const Z=F.dot(p[X])<0?-1:1;u.setXYZW(X,L.x,L.y,L.z,Z)}for(let X=0,P=r.count;X<P;++X)m[X]&&R(X);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new is(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new N,l=new N,u=new N,d=new N,p=new N,m=new N,_=new N,M=new N;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),b=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,b),u.fromBufferAttribute(t,y),_.subVectors(u,l),M.subVectors(o,l),_.cross(M),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),_.subVectors(u,l),M.subVectors(o,l),_.cross(M),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,M=d.normalized,v=new m.constructor(p.length*_);let S=0,E=0;for(let b=0,y=p.length;b<y;b++){d.isInterleavedBufferAttribute?S=p[b]*d.data.stride+d.offset:S=p[b]*_;for(let x=0;x<_;x++)v[E++]=m[S++]}return new is(v,_,M)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let _=0,M=m.length;_<M;_++){const v=m[_],S=e(v,r);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let M=0,v=m.length;M<v;M++){const S=m[M];_.push(S.toJSON(e.data))}_.length>0&&(o[p]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(t))}const l=e.morphAttributes;for(const m in l){const _=[],M=l[m];for(let v=0,S=M.length;v<S;v++)_.push(M[v].clone(t));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const M=u[m];this.addGroup(M.start,M.count,M.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ag,this.updateRanges=[],this.version=0,this.uuid=Ns()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=a0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const r=new this.array.constructor(e.arrayBuffers[t]),o=new this.constructor(r,this.stride);return o.setUsage(this.usage),o}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=a0(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const r={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return r.usage=this.usage,r}}function a0(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ns()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const ii=new N;class Ec{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o,this._normalizationScale=e!==void 0?Pc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)ii.fromBufferAttribute(this,t),ii.applyMatrix4(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ii.fromBufferAttribute(this,t),ii.applyNormalMatrix(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ii.fromBufferAttribute(this,t),ii.transformDirection(e),this.setXYZ(t,ii.x,ii.y,ii.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){Tc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new is(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ec(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ng(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Rg(e,this.data.array)}}const Bh=new N,dy=new N,fy=new _t;class Er{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Bh.subVectors(r,t).cross(dy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Bh),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||fy.getNormalMatrix(e),o=this.coplanarPoint(Bh).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let py=0;class Rs extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=xo,this.side=Cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=og,this.blendDst=lg,this.blendEquation=ga,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ux,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sh,this.stencilZFail=Sh,this.stencilZPass=Sh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){mt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Er().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Xe().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hd extends Rs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ua;const uo=new N,ha=new N,da=new N,fa=new Xe,ho=new Xe,Ug=new Jt,Vl=new N,fo=new N,Gl=new N,o0=new Xe,Hh=new Xe,l0=new Xe;class c0 extends Rn{constructor(e=new Hd){if(super(),this.isSprite=!0,this.type="Sprite",ua===void 0){ua=new ei;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new hy(t,5);ua.setIndex([0,1,2,0,2,3]),ua.setAttribute("position",new Ec(r,3,0,!1)),ua.setAttribute("uv",new Ec(r,2,3,!1))}this.geometry=ua,this.material=e,this.center=new Xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ha.setFromMatrixScale(this.matrixWorld),Ug.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),da.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ha.multiplyScalar(-da.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;Wl(Vl.set(-.5,-.5,0),da,u,ha,o,l),Wl(fo.set(.5,-.5,0),da,u,ha,o,l),Wl(Gl.set(.5,.5,0),da,u,ha,o,l),o0.set(0,0),Hh.set(1,0),l0.set(1,1);let d=e.ray.intersectTriangle(Vl,fo,Gl,!1,uo);if(d===null&&(Wl(fo.set(-.5,.5,0),da,u,ha,o,l),Hh.set(0,1),d=e.ray.intersectTriangle(Vl,Gl,fo,!1,uo),d===null))return;const p=e.ray.origin.distanceTo(uo);p<e.near||p>e.far||t.push({distance:p,point:uo.clone(),uv:Ei.getInterpolation(uo,Vl,fo,Gl,o0,Hh,l0,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Wl(s,e,t,r,o,l){fa.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(ho.x=l*fa.x-o*fa.y,ho.y=o*fa.x+l*fa.y):ho.copy(fa),s.copy(e),s.x+=ho.x,s.y+=ho.y,s.applyMatrix4(Ug)}const Tr=new N,Vh=new N,jl=new N,Xl=new N;class Lc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,t),Tr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Vh.copy(e).add(t).multiplyScalar(.5),jl.copy(t).sub(e).normalize(),Xl.copy(this.origin).sub(Vh);const l=e.distanceTo(t)*.5,u=-this.direction.dot(jl),d=Xl.dot(this.direction),p=-Xl.dot(jl),m=Xl.lengthSq(),_=Math.abs(1-u*u);let M,v,S,E;if(_>0)if(M=u*p-d,v=u*d-p,E=l*_,M>=0)if(v>=-E)if(v<=E){const b=1/_;M*=b,v*=b,S=M*(M+u*v+2*d)+v*(u*M+v+2*p)+m}else v=l,M=Math.max(0,-(u*v+d)),S=-M*M+v*(v+2*p)+m;else v=-l,M=Math.max(0,-(u*v+d)),S=-M*M+v*(v+2*p)+m;else v<=-E?(M=Math.max(0,-(-u*l+d)),v=M>0?-l:Math.min(Math.max(-l,-p),l),S=-M*M+v*(v+2*p)+m):v<=E?(M=0,v=Math.min(Math.max(-l,-p),l),S=v*(v+2*p)+m):(M=Math.max(0,-(u*l+d)),v=M>0?l:Math.min(Math.max(-l,-p),l),S=-M*M+v*(v+2*p)+m);else v=u>0?-l:l,M=Math.max(0,-(u*v+d)),S=-M*M+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,M),o&&o.copy(Vh).addScaledVector(jl,v),S}intersectSphere(e,t){if(e.radius<0)return null;Tr.subVectors(e.center,this.origin);const r=Tr.dot(this.direction),o=Tr.dot(Tr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,p;const m=1/this.direction.x,_=1/this.direction.y,M=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,o=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,o=(e.min.x-v.x)*m),_>=0?(l=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(l=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),M>=0?(d=(e.min.z-v.z)*M,p=(e.max.z-v.z)*M):(d=(e.max.z-v.z)*M,p=(e.min.z-v.z)*M),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,d=this.direction,p=d.x,m=d.y,_=d.z,M=e.x-u.x,v=e.y-u.y,S=e.z-u.z,E=t.x-u.x,b=t.y-u.y,y=t.z-u.z,x=r.x-u.x,D=r.y-u.y,k=r.z-u.z,L=Math.abs(p),F=Math.abs(m),U=Math.abs(_);let T,R,X,P,G,Z,ne,H,ee,K,Q,$;if(L>=F&&L>=U?(X=p,Z=M,ee=E,$=x,p>=0?(T=m,R=_,P=v,G=S,ne=b,H=y,K=D,Q=k):(T=_,R=m,P=S,G=v,ne=y,H=b,K=k,Q=D)):F>=U?(X=m,Z=v,ee=b,$=D,m>=0?(T=_,R=p,P=S,G=M,ne=y,H=E,K=k,Q=x):(T=p,R=_,P=M,G=S,ne=E,H=y,K=x,Q=k)):(X=_,Z=S,ee=y,$=k,_>=0?(T=p,R=m,P=M,G=v,ne=E,H=b,K=x,Q=D):(T=m,R=p,P=v,G=M,ne=b,H=E,K=D,Q=x)),X===0)return null;const Y=T/X,J=R/X,O=1/X,re=P-Y*Z,Ue=G-J*Z,oe=ne-Y*ee,Te=H-J*ee,Ne=K-Y*$,ze=Q-J*$,Ee=Ne*Te-ze*oe,Ke=re*ze-Ue*Ne,gt=oe*Ue-Te*re;if(o){if(Ee<0||Ke<0||gt<0)return null}else if((Ee<0||Ke<0||gt<0)&&(Ee>0||Ke>0||gt>0))return null;const qe=Ee+Ke+gt;if(qe===0)return null;const lt=O*(Ee*Z+Ke*ee+gt*$);return(qe>0?lt<0:lt>0)?null:this.at(lt/qe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class va extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const u0=new Jt,Ts=new Lc,Kl=new Dc,h0=new N,ql=new N,Yl=new N,$l=new N,Gh=new N,Zl=new N,d0=new N,Ql=new N;class Lt extends Rn{constructor(e=new ei,t=new va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Zl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const _=d[p],M=l[p];_!==0&&(Gh.fromBufferAttribute(M,e),u?Zl.addScaledVector(Gh,_):Zl.addScaledVector(Gh.sub(t),_))}t.add(Zl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Kl.copy(r.boundingSphere),Kl.applyMatrix4(l),Ts.copy(e.ray).recast(e.near),!(Kl.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Kl,h0)===null||Ts.origin.distanceToSquared(h0)>(e.far-e.near)**2))&&(u0.copy(l).invert(),Ts.copy(e.ray).applyMatrix4(u0),!(r.boundingBox!==null&&Ts.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,M=l.attributes.normal,v=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,b=v.length;E<b;E++){const y=v[E],x=u[y.materialIndex],D=Math.max(y.start,S.start),k=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let L=D,F=k;L<F;L+=3){const U=d.getX(L),T=d.getX(L+1),R=d.getX(L+2);o=Jl(this,x,e,r,m,_,M,U,T,R),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let y=E,x=b;y<x;y+=3){const D=d.getX(y),k=d.getX(y+1),L=d.getX(y+2);o=Jl(this,u,e,r,m,_,M,D,k,L),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,b=v.length;E<b;E++){const y=v[E],x=u[y.materialIndex],D=Math.max(y.start,S.start),k=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let L=D,F=k;L<F;L+=3){const U=L,T=L+1,R=L+2;o=Jl(this,x,e,r,m,_,M,U,T,R),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let y=E,x=b;y<x;y+=3){const D=y,k=y+1,L=y+2;o=Jl(this,u,e,r,m,_,M,D,k,L),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function my(s,e,t,r,o,l,u,d){let p;if(e.side===pi?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===Cs,d),p===null)return null;Ql.copy(d),Ql.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Ql);return m<t.near||m>t.far?null:{distance:m,point:Ql.clone(),object:s}}function Jl(s,e,t,r,o,l,u,d,p,m){s.getVertexPosition(d,ql),s.getVertexPosition(p,Yl),s.getVertexPosition(m,$l);const _=my(s,e,t,r,ql,Yl,$l,d0);if(_){const M=new N;Ei.getBarycoord(d0,ql,Yl,$l,M),o&&(_.uv=Ei.getInterpolatedAttribute(o,d,p,m,M,new Xe)),l&&(_.uv1=Ei.getInterpolatedAttribute(l,d,p,m,M,new Xe)),u&&(_.normal=Ei.getInterpolatedAttribute(u,d,p,m,M,new N),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new N,materialIndex:0};Ei.getNormal(ql,Yl,$l,v.normal),_.face=v,_.barycoord=M}return _}class gy extends Jn{constructor(e=null,t=1,r=1,o,l,u,d,p,m=Hn,_=Hn,M,v){super(null,u,d,p,m,_,o,l,M,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Es=new Dc,vy=new Xe(.5,.5),ec=new N;class Ao{constructor(e=new Er,t=new Er,r=new Er,o=new Er,l=new Er,u=new Er){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ki,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],p=l[2],m=l[3],_=l[4],M=l[5],v=l[6],S=l[7],E=l[8],b=l[9],y=l[10],x=l[11],D=l[12],k=l[13],L=l[14],F=l[15];if(o[0].setComponents(m-u,S-_,x-E,F-D).normalize(),o[1].setComponents(m+u,S+_,x+E,F+D).normalize(),o[2].setComponents(m+d,S+M,x+b,F+k).normalize(),o[3].setComponents(m-d,S-M,x-b,F-k).normalize(),r)o[4].setComponents(p,v,y,L).normalize(),o[5].setComponents(m-p,S-v,x-y,F-L).normalize();else if(o[4].setComponents(m-p,S-v,x-y,F-L).normalize(),t===Ki)o[5].setComponents(m+p,S+v,x+y,F+L).normalize();else if(t===Co)o[5].setComponents(p,v,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const t=vy.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(ec.x=o.normal.x>0?e.max.x:e.min.x,ec.y=o.normal.y>0?e.max.y:e.min.y,ec.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const f0=new Jt;class rf{constructor(){this.coordinateSystem=Ki,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];f0.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new Ao),r[o].setFromProjectionMatrix(f0,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new Ao),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new rf().copy(this)}}class wc extends Rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cc=new N,Ac=new N,p0=new Jt,po=new Lc,tc=new Dc,Wh=new N,m0=new N;class _y extends Rn{constructor(e=new ei,t=new wc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Cc.fromBufferAttribute(t,o-1),Ac.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Cc.distanceTo(Ac);e.setAttribute("lineDistance",new qt(r,1))}else mt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),tc.copy(r.boundingSphere),tc.applyMatrix4(o),tc.radius+=l,e.ray.intersectsSphere(tc)===!1)return;p0.copy(o).invert(),po.copy(e.ray).applyMatrix4(p0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,v=r.attributes.position;if(_!==null){const S=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let b=S,y=E-1;b<y;b+=m){const x=_.getX(b),D=_.getX(b+1),k=nc(this,e,po,p,x,D,b);k&&t.push(k)}if(this.isLineLoop){const b=_.getX(E-1),y=_.getX(S),x=nc(this,e,po,p,b,y,E-1);x&&t.push(x)}}else{const S=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let b=S,y=E-1;b<y;b+=m){const x=nc(this,e,po,p,b,b+1,b);x&&t.push(x)}if(this.isLineLoop){const b=nc(this,e,po,p,E-1,S,E-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function nc(s,e,t,r,o,l,u){const d=s.geometry.attributes.position;if(Cc.fromBufferAttribute(d,o),Ac.fromBufferAttribute(d,l),t.distanceSqToSegment(Cc,Ac,Wh,m0)>r)return;Wh.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Wh);if(!(m<e.near||m>e.far))return{distance:m,point:m0.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const g0=new N,v0=new N;class Vd extends _y{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)g0.fromBufferAttribute(t,o),v0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+g0.distanceTo(v0);e.setAttribute("lineDistance",new qt(r,1))}else mt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Og extends Jn{constructor(e=[],t=Ta,r,o,l,u,d,p,m,_){super(e,t,r,o,l,u,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _0 extends Jn{constructor(e,t,r,o,l,u,d,p,m){super(e,t,r,o,l,u,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wa extends Jn{constructor(e,t,r=or,o,l,u,d=Hn,p=Hn,m,_=rs,M=1){if(_!==rs&&_!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:M};super(v,o,l,u,d,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Fg extends wa{constructor(e,t=or,r=Ta,o,l,u=Hn,d=Hn,p,m=rs){const _={width:e,height:e,depth:1},M=[_,_,_,_,_,_];super(e,e,t,r,o,l,u,d,p,m),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kg extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cr extends ei{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],_=[],M=[];let v=0,S=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(M,2));function E(b,y,x,D,k,L,F,U,T,R,X){const P=L/T,G=F/R,Z=L/2,ne=F/2,H=U/2,ee=T+1,K=R+1;let Q=0,$=0;const Y=new N;for(let J=0;J<K;J++){const O=J*G-ne;for(let re=0;re<ee;re++){const Ue=re*P-Z;Y[b]=Ue*D,Y[y]=O*k,Y[x]=H,m.push(Y.x,Y.y,Y.z),Y[b]=0,Y[y]=0,Y[x]=U>0?1:-1,_.push(Y.x,Y.y,Y.z),M.push(re/T),M.push(1-J/R),Q+=1}}for(let J=0;J<R;J++)for(let O=0;O<T;O++){const re=v+O+ee*J,Ue=v+O+ee*(J+1),oe=v+(O+1)+ee*(J+1),Te=v+(O+1)+ee*J;p.push(re,Ue,Te),p.push(Ue,oe,Te),$+=6}d.addGroup(S,$,X),S+=$,v+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nr extends ei{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const _=[],M=[],v=[],S=[];let E=0;const b=[],y=r/2;let x=0;D(),u===!1&&(e>0&&k(!0),t>0&&k(!1)),this.setIndex(_),this.setAttribute("position",new qt(M,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(S,2));function D(){const L=new N,F=new N;let U=0;const T=(t-e)/r;for(let R=0;R<=l;R++){const X=[],P=R/l,G=P*(t-e)+e;for(let Z=0;Z<=o;Z++){const ne=Z/o,H=ne*p+d,ee=Math.sin(H),K=Math.cos(H);F.x=G*ee,F.y=-P*r+y,F.z=G*K,M.push(F.x,F.y,F.z),L.set(ee,T,K).normalize(),v.push(L.x,L.y,L.z),S.push(ne,1-P),X.push(E++)}b.push(X)}for(let R=0;R<o;R++)for(let X=0;X<l;X++){const P=b[X][R],G=b[X+1][R],Z=b[X+1][R+1],ne=b[X][R+1];(e>0||X!==0)&&(_.push(P,G,ne),U+=3),(t>0||X!==l-1)&&(_.push(G,Z,ne),U+=3)}m.addGroup(x,U,0),x+=U}function k(L){const F=E,U=new Xe,T=new N;let R=0;const X=L===!0?e:t,P=L===!0?1:-1;for(let Z=1;Z<=o;Z++)M.push(0,y*P,0),v.push(0,P,0),S.push(.5,.5),E++;const G=E;for(let Z=0;Z<=o;Z++){const H=Z/o*p+d,ee=Math.cos(H),K=Math.sin(H);T.x=X*K,T.y=y*P,T.z=X*ee,M.push(T.x,T.y,T.z),v.push(0,P,0),U.x=ee*.5+.5,U.y=K*.5*P+.5,S.push(U.x,U.y),E++}for(let Z=0;Z<o;Z++){const ne=F+Z,H=G+Z;L===!0?_.push(H,H+1,ne):_.push(H+1,H,ne),R+=3}m.addGroup(x,R,L===!0?1:2),x+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ic=new N,rc=new N,jh=new N,sc=new Ei;class x0 extends ei{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(yo*t),u=e.getIndex(),d=e.getAttribute("position"),p=u?u.count:d.count,m=[0,0,0],_=["a","b","c"],M=new Array(3),v=new Map,S=[];for(let E=0;E<p;E+=3){u?(m[0]=u.getX(E),m[1]=u.getX(E+1),m[2]=u.getX(E+2)):(m[0]=E,m[1]=E+1,m[2]=E+2);const{a:b,b:y,c:x}=sc;if(b.fromBufferAttribute(d,m[0]),y.fromBufferAttribute(d,m[1]),x.fromBufferAttribute(d,m[2]),sc.getNormal(jh),M[0]=`${Math.round(b.x*o)},${Math.round(b.y*o)},${Math.round(b.z*o)}`,M[1]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,M[2]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,!(M[0]===M[1]||M[1]===M[2]||M[2]===M[0]))for(let D=0;D<3;D++){const k=(D+1)%3,L=M[D],F=M[k],U=sc[_[D]],T=sc[_[k]],R=`${L}_${F}`,X=`${F}_${L}`,P=v.get(X);P?(jh.dot(P.normal)<=l&&(S.push(U.x,U.y,U.z),S.push(T.x,T.y,T.z)),v.set(X,null)):v.has(R)||v.set(R,{index0:m[D],index1:m[k],normal:jh.clone()})}}for(const E of v.values())if(E){const{index0:b,index1:y}=E;ic.fromBufferAttribute(d,b),rc.fromBufferAttribute(d,y),S.push(ic.x,ic.y,ic.z),S.push(rc.x,rc.y,rc.z)}this.setAttribute("position",new qt(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Nr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){mt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,p=l-1,m;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),m=r[o]-u,m<0)d=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,r[o]===u)return o/(l-1);const _=r[o],v=r[o+1]-_,S=(u-_)/v;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),p=t||(u.isVector2?new Xe:new N);return p.copy(d).sub(u).normalize(),p}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new N,o=[],l=[],u=[],d=new N,p=new Jt;for(let S=0;S<=e;S++){const E=S/e;o[S]=this.getTangentAt(E,new N)}l[0]=new N,u[0]=new N;let m=Number.MAX_VALUE;const _=Math.abs(o[0].x),M=Math.abs(o[0].y),v=Math.abs(o[0].z);_<=m&&(m=_,r.set(1,0,0)),M<=m&&(m=M,r.set(0,1,0)),v<=m&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),d.crossVectors(o[S-1],o[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Ct(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(p.makeRotationAxis(d,E))}u[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(Ct(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(S=-S);for(let E=1;E<=e;E++)l[E].applyMatrix4(p.makeRotationAxis(o[E],S*E)),u[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class zg extends Nr{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=p}getPoint(e,t=new Xe){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),M=Math.sin(this.aRotation),v=p-this.aX,S=m-this.aY;p=v*_-S*M+this.aX,m=v*M+S*_+this.aY}return r.set(p,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class xy extends zg{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function sf(){let s=0,e=0,t=0,r=0;function o(l,u,d,p){s=l,e=d,t=-3*l+3*u-2*d-p,r=2*l-2*u+d+p}return{initCatmullRom:function(l,u,d,p,m){o(u,d,m*(d-l),m*(p-u))},initNonuniformCatmullRom:function(l,u,d,p,m,_,M){let v=(u-l)/m-(d-l)/(m+_)+(d-u)/_,S=(d-u)/_-(p-u)/(_+M)+(p-d)/M;v*=_,S*=_,o(u,d,v,S)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const y0=new N,S0=new N,Xh=new sf,Kh=new sf,qh=new sf;class Bg extends Nr{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new N){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),p=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:p===0&&d===l-1&&(d=l-2,p=1);let m,_;this.closed||d>0?m=o[(d-1)%l]:(S0.subVectors(o[0],o[1]).add(o[0]),m=S0);const M=o[d%l],v=o[(d+1)%l];if(this.closed||d+2<l?_=o[(d+2)%l]:(y0.subVectors(o[l-1],o[l-2]).add(o[l-1]),_=y0),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(M),S),b=Math.pow(M.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(_),S);b<1e-4&&(b=1),E<1e-4&&(E=b),y<1e-4&&(y=b),Xh.initNonuniformCatmullRom(m.x,M.x,v.x,_.x,E,b,y),Kh.initNonuniformCatmullRom(m.y,M.y,v.y,_.y,E,b,y),qh.initNonuniformCatmullRom(m.z,M.z,v.z,_.z,E,b,y)}else this.curveType==="catmullrom"&&(Xh.initCatmullRom(m.x,M.x,v.x,_.x,this.tension),Kh.initCatmullRom(m.y,M.y,v.y,_.y,this.tension),qh.initCatmullRom(m.z,M.z,v.z,_.z,this.tension));return r.set(Xh.calc(p),Kh.calc(p),qh.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new N().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function M0(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,p=s*d;return(2*t-2*r+l+u)*p+(-3*t+3*r-2*l-u)*d+l*s+t}function yy(s,e){const t=1-s;return t*t*e}function Sy(s,e){return 2*(1-s)*s*e}function My(s,e){return s*s*e}function So(s,e,t,r){return yy(s,e)+Sy(s,t)+My(s,r)}function Ty(s,e){const t=1-s;return t*t*t*e}function Ey(s,e){const t=1-s;return 3*t*t*s*e}function wy(s,e){return 3*(1-s)*s*s*e}function Cy(s,e){return s*s*s*e}function Mo(s,e,t,r,o){return Ty(s,e)+Ey(s,t)+wy(s,r)+Cy(s,o)}class Ay extends Nr{constructor(e=new Xe,t=new Xe,r=new Xe,o=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Xe){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Mo(e,o.x,l.x,u.x,d.x),Mo(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class by extends Nr{constructor(e=new N,t=new N,r=new N,o=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new N){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Mo(e,o.x,l.x,u.x,d.x),Mo(e,o.y,l.y,u.y,d.y),Mo(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ny extends Nr{constructor(e=new Xe,t=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Xe){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ry extends Nr{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Py extends Nr{constructor(e=new Xe,t=new Xe,r=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Xe){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(So(e,o.x,l.x,u.x),So(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hg extends Nr{constructor(e=new N,t=new N,r=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new N){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(So(e,o.x,l.x,u.x),So(e,o.y,l.y,u.y),So(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dy extends Nr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Xe){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,p=o[u===0?u:u-1],m=o[u],_=o[u>o.length-2?o.length-1:u+1],M=o[u>o.length-3?o.length-1:u+2];return r.set(M0(d,p.x,m.x,_.x,M.x),M0(d,p.y,m.y,_.y,M.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Xe().fromArray(o))}return this}}var Ly=Object.freeze({__proto__:null,ArcCurve:xy,CatmullRomCurve3:Bg,CubicBezierCurve:Ay,CubicBezierCurve3:by,EllipseCurve:zg,LineCurve:Ny,LineCurve3:Ry,QuadraticBezierCurve:Py,QuadraticBezierCurve3:Hg,SplineCurve:Dy});class Wi extends ei{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),p=Math.floor(o),m=d+1,_=p+1,M=e/d,v=t/p,S=[],E=[],b=[],y=[];for(let x=0;x<_;x++){const D=x*v-u;for(let k=0;k<m;k++){const L=k*M-l;E.push(L,-D,0),b.push(0,0,1),y.push(k/d),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let D=0;D<d;D++){const k=D+m*x,L=D+m*(x+1),F=D+1+m*(x+1),U=D+1+m*x;S.push(k,L,U),S.push(L,F,U)}this.setIndex(S),this.setAttribute("position",new qt(E,3)),this.setAttribute("normal",new qt(b,3)),this.setAttribute("uv",new qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.widthSegments,e.heightSegments)}}class bc extends ei{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const d=[],p=[],m=[],_=[];let M=e;const v=(t-e)/o,S=new N,E=new Xe;for(let b=0;b<=o;b++){for(let y=0;y<=r;y++){const x=l+y/r*u;S.x=M*Math.cos(x),S.y=M*Math.sin(x),p.push(S.x,S.y,S.z),m.push(0,0,1),E.x=(S.x/t+1)/2,E.y=(S.y/t+1)/2,_.push(E.x,E.y)}M+=v}for(let b=0;b<o;b++){const y=b*(r+1);for(let x=0;x<r;x++){const D=x+y,k=D,L=D+r+1,F=D+r+2,U=D+1;d.push(k,L,U),d.push(L,F,U)}}this.setIndex(d),this.setAttribute("position",new qt(p,3)),this.setAttribute("normal",new qt(m,3)),this.setAttribute("uv",new qt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xa extends ei{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const _=[],M=new N,v=new N,S=[],E=[],b=[],y=[];for(let x=0;x<=r;x++){const D=[],k=x/r,L=u+k*d,F=e*Math.cos(L),U=Math.sqrt(e*e-F*F);let T=0;x===0&&u===0?T=.5/t:x===r&&p===Math.PI&&(T=-.5/t);for(let R=0;R<=t;R++){const X=R/t,P=o+X*l;M.x=-U*Math.cos(P),M.y=F,M.z=U*Math.sin(P),E.push(M.x,M.y,M.z),v.copy(M).normalize(),b.push(v.x,v.y,v.z),y.push(X+T,1-k),D.push(m++)}_.push(D)}for(let x=0;x<r;x++)for(let D=0;D<t;D++){const k=_[x][D+1],L=_[x][D],F=_[x+1][D],U=_[x+1][D+1];(x!==0||u>0)&&S.push(k,L,U),(x!==r-1||p<Math.PI)&&S.push(L,F,U)}this.setIndex(S),this.setAttribute("position",new qt(E,3)),this.setAttribute("normal",new qt(b,3)),this.setAttribute("uv",new qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class af extends ei{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:d},r=Math.floor(r),o=Math.floor(o);const p=[],m=[],_=[],M=[],v=new N,S=new N,E=new N;for(let b=0;b<=r;b++){const y=u+b/r*d;for(let x=0;x<=o;x++){const D=x/o*l;S.x=(e+t*Math.cos(y))*Math.cos(D),S.y=(e+t*Math.cos(y))*Math.sin(D),S.z=t*Math.sin(y),m.push(S.x,S.y,S.z),v.x=e*Math.cos(D),v.y=e*Math.sin(D),E.subVectors(S,v).normalize(),_.push(E.x,E.y,E.z),M.push(x/o),M.push(b/r)}}for(let b=1;b<=r;b++)for(let y=1;y<=o;y++){const x=(o+1)*b+y-1,D=(o+1)*(b-1)+y-1,k=(o+1)*(b-1)+y,L=(o+1)*b+y;p.push(x,D,L),p.push(D,k,L)}this.setIndex(p),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class of extends ei{constructor(e=new Hg(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new N,p=new N,m=new Xe;let _=new N;const M=[],v=[],S=[],E=[];b(),this.setIndex(E),this.setAttribute("position",new qt(M,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(S,2));function b(){for(let k=0;k<t;k++)y(k);y(l===!1?t:0),D(),x()}function y(k){_=e.getPointAt(k/t,_);const L=u.normals[k],F=u.binormals[k];for(let U=0;U<=o;U++){const T=U/o*Math.PI*2,R=Math.sin(T),X=-Math.cos(T);p.x=X*L.x+R*F.x,p.y=X*L.y+R*F.y,p.z=X*L.z+R*F.z,p.normalize(),v.push(p.x,p.y,p.z),d.x=_.x+r*p.x,d.y=_.y+r*p.y,d.z=_.z+r*p.z,M.push(d.x,d.y,d.z)}}function x(){for(let k=1;k<=t;k++)for(let L=1;L<=o;L++){const F=(o+1)*(k-1)+(L-1),U=(o+1)*k+(L-1),T=(o+1)*k+L,R=(o+1)*(k-1)+L;E.push(F,U,R),E.push(U,T,R)}}function D(){for(let k=0;k<=t;k++)for(let L=0;L<=o;L++)m.x=k/t,m.y=L/o,S.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new of(new Ly[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ca(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(T0(o))o.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(T0(o[0])){const l=[];for(let u=0,d=o.length;u<d;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function ri(s){const e={};for(let t=0;t<s.length;t++){const r=Ca(s[t]);for(const o in r)e[o]=r[o]}return e}function T0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Iy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const Uy={clone:Ca,merge:ri};var Oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bs extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oy,this.fragmentShader=Fy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ca(e.uniforms),this.uniformsGroups=Iy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new At().setHex(o.value);break;case"v2":this.uniforms[r].value=new Xe().fromArray(o.value);break;case"v3":this.uniforms[r].value=new N().fromArray(o.value);break;case"v4":this.uniforms[r].value=new gn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new _t().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Jt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ky extends bs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tn extends Rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zd,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zy extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class By extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class lf extends Rn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Hy extends lf{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Yh=new Jt,E0=new N,w0=new N;class Vy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;E0.setFromMatrixPosition(e.matrixWorld),t.position.copy(E0),w0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(w0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){Yh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Yh,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,d=o?o.w/l.y:1,p=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===Co||e.reversedDepth?t.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),t.multiply(Yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ac=new N,oc=new ss,er=new N;class Gg extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ac,oc,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ac,oc,er.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(ac,oc,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ac,oc,er.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jr=new N,C0=new Xe,A0=new Xe;class ji extends Gg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bd*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,t){return this.getViewBounds(e,C0,A0),t.subVectors(A0,C0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yo*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wg extends Gg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gy extends Vy{constructor(){super(new Wg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wy extends lf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new Gy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class jy extends lf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const pa=-90,ma=1;class Gd extends Rn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ji(pa,ma,e,t);o.layers=this.layers,this.add(o);const l=new ji(pa,ma,e,t);l.layers=this.layers,this.add(l);const u=new ji(pa,ma,e,t);u.layers=this.layers,this.add(u);const d=new ji(pa,ma,e,t);d.layers=this.layers,this.add(d);const p=new ji(pa,ma,e,t);p.layers=this.layers,this.add(p);const m=new ji(pa,ma,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,p]=t;for(const m of t)this.remove(m);if(e===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Co)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,m,_]=this.children,M=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=b,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(M,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Xy extends ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const b0=new Jt;class Ky{constructor(e,t,r=0,o=1/0){this.ray=new Lc(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new nf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return b0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(b0),this}intersectObject(e,t=!0,r=[]){return Wd(e,this,r,t),r.sort(N0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Wd(e[o],this,r,t);return r.sort(N0),r}}function N0(s,e){return s.distance-e.distance}function Wd(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)Wd(l[u],e,t,!0)}}class R0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class qy extends Vd{constructor(e=10,t=10,r=4473924,o=8947848){r=new At(r),o=new At(o);const l=t/2,u=e/t,d=e/2,p=[],m=[];for(let v=0,S=0,E=-d;v<=t;v++,E+=u){p.push(-d,0,E,d,0,E),p.push(E,0,-d,E,0,d);const b=v===l?r:o;b.toArray(m,S),S+=3,b.toArray(m,S),S+=3,b.toArray(m,S),S+=3,b.toArray(m,S),S+=3}const _=new ei;_.setAttribute("position",new qt(p,3)),_.setAttribute("color",new qt(m,3));const M=new wc({vertexColors:!0,toneMapped:!1});super(_,M),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Yy extends os{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function P0(s,e,t,r){const o=$y(r);switch(t){case Sg:return s*e;case Tg:return s*e/o.components*o.byteLength;case Qd:return s*e/o.components*o.byteLength;case As:return s*e*2/o.components*o.byteLength;case Jd:return s*e*2/o.components*o.byteLength;case Mg:return s*e*3/o.components*o.byteLength;case sr:return s*e*4/o.components*o.byteLength;case ef:return s*e*4/o.components*o.byteLength;case dc:case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pc:case mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ud:case dd:return Math.max(s,16)*Math.max(e,8)/4;case cd:case hd:return Math.max(s,8)*Math.max(e,8)/2;case fd:case pd:case gd:case vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case md:case _c:case _d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Md:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Td:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case wd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ld:case Id:case Ud:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Od:case Fd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xc:case kd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $y(s){switch(s){case Ti:case vg:return{byteLength:1,components:1};case wo:case _g:case lr:return{byteLength:2,components:1};case $d:case Zd:return{byteLength:2,components:4};case or:case Yd:case rr:return{byteLength:4,components:1};case xg:case yg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Zy(s){const e=new WeakMap;function t(d,p){const m=d.array,_=d.usage,M=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:M}}function r(d,p,m){const _=p.array,M=p.updateRanges;if(s.bindBuffer(m,d),M.length===0)s.bufferSubData(m,0,_);else{M.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<M.length;S++){const E=M[v],b=M[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,M[v]=b)}M.length=v+1;for(let S=0,E=M.length;S<E;S++){const b=M[S];s.bufferSubData(m,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:u}}var Qy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jy=`#ifdef USE_ALPHAHASH
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
#endif`,e1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r1=`#ifdef USE_AOMAP
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
#endif`,s1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a1=`#ifdef USE_BATCHING
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
#endif`,o1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h1=`#ifdef USE_IRIDESCENCE
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
#endif`,d1=`#ifdef USE_BUMPMAP
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
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,S1=`#define PI 3.141592653589793
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
} // validated`,M1=`vec3 transformedNormal = objectNormal;
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
#endif`,T1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A1="gl_FragColor = linearToOutputTexel( gl_FragColor );",b1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N1=`#ifdef USE_ENVMAP
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
#endif`,R1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
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
#endif`,I1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k1=`#ifdef USE_GRADIENTMAP
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
}`,z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,G1=`#ifdef USE_ENVMAP
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
#endif`,W1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q1=`PhysicalMaterial material;
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
#endif`,Y1=`uniform sampler2D dfgLUT;
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
}`,$1=`
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
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,eS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oS=`#if defined( USE_POINTS_UV )
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
#endif`,lS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hS=`#if defined( USE_MORPHCOLORS )
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
#endif`,dS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fS=`#ifdef USE_MORPHTARGETS
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
#endif`,pS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yS=`#ifdef USE_NORMALMAP
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
#endif`,SS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ES=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,US=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OS=`float getShadowMask() {
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
}`,FS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kS=`#ifdef USE_SKINNING
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
#endif`,zS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BS=`#ifdef USE_SKINNING
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
#endif`,HS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jS=`#ifdef USE_TRANSMISSION
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
#endif`,XS=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$S=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QS=`uniform sampler2D t2D;
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
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eM=`uniform float backgroundBlurriness;
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
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`#include <common>
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
}`,rM=`#if DEPTH_PACKING == 3200
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
}`,sM=`#define DISTANCE
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
}`,aM=`#define DISTANCE
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`uniform float scale;
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
}`,uM=`uniform vec3 diffuse;
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
}`,hM=`#include <common>
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
}`,dM=`uniform vec3 diffuse;
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
}`,fM=`#define LAMBERT
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
}`,pM=`#define LAMBERT
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
}`,mM=`#define MATCAP
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
}`,gM=`#define MATCAP
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
}`,vM=`#define NORMAL
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
}`,_M=`#define NORMAL
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
}`,xM=`#define PHONG
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
}`,yM=`#define PHONG
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
}`,SM=`#define STANDARD
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
}`,MM=`#define STANDARD
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
}`,TM=`#define TOON
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
}`,EM=`#define TOON
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
}`,wM=`uniform float size;
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
}`,CM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,bM=`uniform vec3 color;
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
}`,NM=`uniform float rotation;
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
}`,RM=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:Qy,alphahash_pars_fragment:Jy,alphamap_fragment:e1,alphamap_pars_fragment:t1,alphatest_fragment:n1,alphatest_pars_fragment:i1,aomap_fragment:r1,aomap_pars_fragment:s1,batching_pars_vertex:a1,batching_vertex:o1,begin_vertex:l1,beginnormal_vertex:c1,bsdfs:u1,iridescence_fragment:h1,bumpmap_pars_fragment:d1,clipping_planes_fragment:f1,clipping_planes_pars_fragment:p1,clipping_planes_pars_vertex:m1,clipping_planes_vertex:g1,color_fragment:v1,color_pars_fragment:_1,color_pars_vertex:x1,color_vertex:y1,common:S1,defaultnormal_vertex:M1,displacementmap_pars_vertex:T1,displacementmap_vertex:E1,emissivemap_fragment:w1,emissivemap_pars_fragment:C1,colorspace_fragment:A1,colorspace_pars_fragment:b1,envmap_fragment:N1,envmap_common_pars_fragment:R1,envmap_pars_fragment:P1,envmap_pars_vertex:D1,envmap_physical_pars_fragment:G1,envmap_vertex:L1,fog_vertex:I1,fog_pars_vertex:U1,fog_fragment:O1,fog_pars_fragment:F1,gradientmap_pars_fragment:k1,lightmap_pars_fragment:z1,lights_lambert_fragment:B1,lights_lambert_pars_fragment:H1,lights_pars_begin:V1,lights_toon_fragment:W1,lights_toon_pars_fragment:j1,lights_phong_fragment:X1,lights_phong_pars_fragment:K1,lights_physical_fragment:q1,lights_physical_pars_fragment:Y1,lights_fragment_begin:$1,lights_fragment_maps:Z1,lights_fragment_end:Q1,lightprobes_pars_fragment:J1,logdepthbuf_fragment:eS,logdepthbuf_pars_fragment:tS,logdepthbuf_pars_vertex:nS,logdepthbuf_vertex:iS,map_fragment:rS,map_pars_fragment:sS,map_particle_fragment:aS,map_particle_pars_fragment:oS,metalnessmap_fragment:lS,metalnessmap_pars_fragment:cS,morphinstance_vertex:uS,morphcolor_vertex:hS,morphnormal_vertex:dS,morphtarget_pars_vertex:fS,morphtarget_vertex:pS,normal_fragment_begin:mS,normal_fragment_maps:gS,normal_pars_fragment:vS,normal_pars_vertex:_S,normal_vertex:xS,normalmap_pars_fragment:yS,clearcoat_normal_fragment_begin:SS,clearcoat_normal_fragment_maps:MS,clearcoat_pars_fragment:TS,iridescence_pars_fragment:ES,opaque_fragment:wS,packing:CS,premultiplied_alpha_fragment:AS,project_vertex:bS,dithering_fragment:NS,dithering_pars_fragment:RS,roughnessmap_fragment:PS,roughnessmap_pars_fragment:DS,shadowmap_pars_fragment:LS,shadowmap_pars_vertex:IS,shadowmap_vertex:US,shadowmask_pars_fragment:OS,skinbase_vertex:FS,skinning_pars_vertex:kS,skinning_vertex:zS,skinnormal_vertex:BS,specularmap_fragment:HS,specularmap_pars_fragment:VS,tonemapping_fragment:GS,tonemapping_pars_fragment:WS,transmission_fragment:jS,transmission_pars_fragment:XS,uv_pars_fragment:KS,uv_pars_vertex:qS,uv_vertex:YS,worldpos_vertex:$S,background_vert:ZS,background_frag:QS,backgroundCube_vert:JS,backgroundCube_frag:eM,cube_vert:tM,cube_frag:nM,depth_vert:iM,depth_frag:rM,distance_vert:sM,distance_frag:aM,equirect_vert:oM,equirect_frag:lM,linedashed_vert:cM,linedashed_frag:uM,meshbasic_vert:hM,meshbasic_frag:dM,meshlambert_vert:fM,meshlambert_frag:pM,meshmatcap_vert:mM,meshmatcap_frag:gM,meshnormal_vert:vM,meshnormal_frag:_M,meshphong_vert:xM,meshphong_frag:yM,meshphysical_vert:SM,meshphysical_frag:MM,meshtoon_vert:TM,meshtoon_frag:EM,points_vert:wM,points_frag:CM,shadow_vert:AM,shadow_frag:bM,sprite_vert:NM,sprite_frag:RM},We={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},ir={basic:{uniforms:ri([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:ri([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:ri([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:ri([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:ri([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new At(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:ri([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:ri([We.points,We.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:ri([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:ri([We.common,We.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:ri([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:ri([We.sprite,We.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:ri([We.common,We.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:ri([We.lights,We.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};ir.physical={uniforms:ri([ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new _t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const lc={r:0,b:0,g:0},PM=new Jt,Xg=new _t;Xg.set(-1,0,0,0,1,0,0,0,1);function DM(s,e,t,r,o,l){const u=new At(0);let d=o===!0?0:1,p,m,_=null,M=0,v=null;function S(D){let k=D.isScene===!0?D.background:null;if(k&&k.isTexture){const L=D.backgroundBlurriness>0;k=e.get(k,L)}return k}function E(D){let k=!1;const L=S(D);L===null?y(u,d):L&&L.isColor&&(y(L,1),k=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(D,k){const L=S(k);L&&L.isCubeTexture?(m===void 0&&(m=new Lt(new Cr(1,1,1),new bs({name:"BackgroundCubeMaterial",uniforms:Ca(ir.backgroundCube.uniforms),vertexShader:ir.backgroundCube.vertexShader,fragmentShader:ir.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,U,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=L,m.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(PM.makeRotationFromEuler(k.backgroundRotation)).transpose(),L.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Xg),m.material.toneMapped=It.getTransfer(L.colorSpace)!==Kt,(_!==L||M!==L.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,_=L,M=L.version,v=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Lt(new Wi(2,2),new bs({name:"BackgroundMaterial",uniforms:Ca(ir.background.uniforms),vertexShader:ir.background.vertexShader,fragmentShader:ir.background.fragmentShader,side:Cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.toneMapped=It.getTransfer(L.colorSpace)!==Kt,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||M!==L.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,_=L,M=L.version,v=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function y(D,k){D.getRGB(lc,Vg(s)),t.buffers.color.setClear(lc.r,lc.g,lc.b,k,l)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,k=1){u.set(D),d=k,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,y(u,d)},render:E,addToRenderList:b,dispose:x}}function LM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function d(G,Z,ne,H,ee){let K=!1;const Q=M(G,H,ne,Z);l!==Q&&(l=Q,m(l.object)),K=S(G,H,ne,ee),K&&E(G,H,ne,ee),ee!==null&&e.update(ee,s.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,L(G,Z,ne,H),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function p(){return s.createVertexArray()}function m(G){return s.bindVertexArray(G)}function _(G){return s.deleteVertexArray(G)}function M(G,Z,ne,H){const ee=H.wireframe===!0;let K=r[Z.id];K===void 0&&(K={},r[Z.id]=K);const Q=G.isInstancedMesh===!0?G.id:0;let $=K[Q];$===void 0&&($={},K[Q]=$);let Y=$[ne.id];Y===void 0&&(Y={},$[ne.id]=Y);let J=Y[ee];return J===void 0&&(J=v(p()),Y[ee]=J),J}function v(G){const Z=[],ne=[],H=[];for(let ee=0;ee<t;ee++)Z[ee]=0,ne[ee]=0,H[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ne,attributeDivisors:H,object:G,attributes:{},index:null}}function S(G,Z,ne,H){const ee=l.attributes,K=Z.attributes;let Q=0;const $=ne.getAttributes();for(const Y in $)if($[Y].location>=0){const O=ee[Y];let re=K[Y];if(re===void 0&&(Y==="instanceMatrix"&&G.instanceMatrix&&(re=G.instanceMatrix),Y==="instanceColor"&&G.instanceColor&&(re=G.instanceColor)),O===void 0||O.attribute!==re||re&&O.data!==re.data)return!0;Q++}return l.attributesNum!==Q||l.index!==H}function E(G,Z,ne,H){const ee={},K=Z.attributes;let Q=0;const $=ne.getAttributes();for(const Y in $)if($[Y].location>=0){let O=K[Y];O===void 0&&(Y==="instanceMatrix"&&G.instanceMatrix&&(O=G.instanceMatrix),Y==="instanceColor"&&G.instanceColor&&(O=G.instanceColor));const re={};re.attribute=O,O&&O.data&&(re.data=O.data),ee[Y]=re,Q++}l.attributes=ee,l.attributesNum=Q,l.index=H}function b(){const G=l.newAttributes;for(let Z=0,ne=G.length;Z<ne;Z++)G[Z]=0}function y(G){x(G,0)}function x(G,Z){const ne=l.newAttributes,H=l.enabledAttributes,ee=l.attributeDivisors;ne[G]=1,H[G]===0&&(s.enableVertexAttribArray(G),H[G]=1),ee[G]!==Z&&(s.vertexAttribDivisor(G,Z),ee[G]=Z)}function D(){const G=l.newAttributes,Z=l.enabledAttributes;for(let ne=0,H=Z.length;ne<H;ne++)Z[ne]!==G[ne]&&(s.disableVertexAttribArray(ne),Z[ne]=0)}function k(G,Z,ne,H,ee,K,Q){Q===!0?s.vertexAttribIPointer(G,Z,ne,ee,K):s.vertexAttribPointer(G,Z,ne,H,ee,K)}function L(G,Z,ne,H){b();const ee=H.attributes,K=ne.getAttributes(),Q=Z.defaultAttributeValues;for(const $ in K){const Y=K[$];if(Y.location>=0){let J=ee[$];if(J===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(J=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(J=G.instanceColor)),J!==void 0){const O=J.normalized,re=J.itemSize,Ue=e.get(J);if(Ue===void 0)continue;const oe=Ue.buffer,Te=Ue.type,Ne=Ue.bytesPerElement,ze=Te===s.INT||Te===s.UNSIGNED_INT||J.gpuType===Yd;if(J.isInterleavedBufferAttribute){const Ee=J.data,Ke=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,gt=J.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let qe=0;qe<Y.locationSize;qe++)x(Y.location+qe,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let qe=0;qe<Y.locationSize;qe++)y(Y.location+qe);s.bindBuffer(s.ARRAY_BUFFER,oe);for(let qe=0;qe<Y.locationSize;qe++)k(Y.location+qe,re/Y.locationSize,Te,O,Ke*Ne,(gt+re/Y.locationSize*qe)*Ne,ze)}else{if(J.isInstancedBufferAttribute){for(let Ee=0;Ee<Y.locationSize;Ee++)x(Y.location+Ee,J.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ee=0;Ee<Y.locationSize;Ee++)y(Y.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,oe);for(let Ee=0;Ee<Y.locationSize;Ee++)k(Y.location+Ee,re/Y.locationSize,Te,O,re*Ne,re/Y.locationSize*Ee*Ne,ze)}}else if(Q!==void 0){const O=Q[$];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(Y.location,O);break;case 3:s.vertexAttrib3fv(Y.location,O);break;case 4:s.vertexAttrib4fv(Y.location,O);break;default:s.vertexAttrib1fv(Y.location,O)}}}}D()}function F(){X();for(const G in r){const Z=r[G];for(const ne in Z){const H=Z[ne];for(const ee in H){const K=H[ee];for(const Q in K)_(K[Q].object),delete K[Q];delete H[ee]}}delete r[G]}}function U(G){if(r[G.id]===void 0)return;const Z=r[G.id];for(const ne in Z){const H=Z[ne];for(const ee in H){const K=H[ee];for(const Q in K)_(K[Q].object),delete K[Q];delete H[ee]}}delete r[G.id]}function T(G){for(const Z in r){const ne=r[Z];for(const H in ne){const ee=ne[H];if(ee[G.id]===void 0)continue;const K=ee[G.id];for(const Q in K)_(K[Q].object),delete K[Q];delete ee[G.id]}}}function R(G){for(const Z in r){const ne=r[Z],H=G.isInstancedMesh===!0?G.id:0,ee=ne[H];if(ee!==void 0){for(const K in ee){const Q=ee[K];for(const $ in Q)_(Q[$].object),delete Q[$];delete ee[K]}delete ne[H],Object.keys(ne).length===0&&delete r[Z]}}}function X(){P(),u=!0,l!==o&&(l=o,m(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:X,resetDefaultState:P,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfObject:R,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:y,disableUnusedAttributes:D}}function IM(s,e,t){let r;function o(p){r=p}function l(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function u(p,m,_){_!==0&&(s.drawArraysInstanced(r,p,m,_),t.update(m,r,_))}function d(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,_);let v=0;for(let S=0;S<_;S++)v+=m[S];t.update(v,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function UM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(T){return!(T!==sr&&r.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(T){const R=T===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ti&&T!==rr&&!R&&r.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const _=p(m);_!==m&&(mt("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const M=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.logarithmicDepthBuffer===!0&&M===!1;t.reversedDepthBuffer===!0&&M===!1&&mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&M===!0&&mt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),k=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:M,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:k,maxFragmentUniforms:L,maxSamples:F,samples:U}}function OM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Er,d=new _t,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(M,v){const S=M.length!==0||v||r!==0||o;return o=v,r=M.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(M,v){t=_(M,v,0)},this.setState=function(M,v,S){const E=M.clippingPlanes,b=M.clipIntersection,y=M.clipShadows,x=s.get(M);if(!o||E===null||E.length===0||l&&!y)l?_(null):m();else{const D=l?0:r,k=D*4;let L=x.clippingState||null;p.value=L,L=_(E,v,k,S);for(let F=0;F!==k;++F)L[F]=t[F];x.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(M,v,S,E){const b=M!==null?M.length:0;let y=null;if(b!==0){if(y=p.value,E!==!0||y===null){const x=S+b*4,D=v.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let k=0,L=S;k!==b;++k,L+=4)u.copy(M[k]).applyMatrix4(D,d),u.normal.toArray(y,L),y[L+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}class cf extends ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Og(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Cr(5,5,5),l=new bs({name:"CubemapFromEquirect",uniforms:Ca(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:pi,blending:Sa});l.uniforms.tEquirect.value=t;const u=new Lt(o,l),d=t.minFilter;return t.minFilter===ts&&(t.minFilter=si),new Gd(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const D0=256,FM=3,kM=20,Kg=256,qg=16,zM=3,BM=new N,HM=new At;class Nc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Gd(1,10,null),this._boxMesh=new Lt(new Cr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=BM}=l,p=this._renderer;this._setSize(u);const m=this._allocateTarget(),_=this._getSourceTarget(!0);t>0&&(_.texture.mipmapsAutoUpdate=!1);const M=p.autoClear,v=p.autoClearColor,S=p.autoClearDepth,E=p.autoClearStencil,b=e.background;p.autoClear=!0,p.autoClearColor=!0,p.autoClearDepth=!0,p.autoClearStencil=!0,b===null&&(e.background=p.getClearColor(HM));const y=new Gd(r,o,_);return y.position.copy(d),y.update(p,e),p.autoClear=M,p.autoClearColor=v,p.autoClearDepth=S,p.autoClearStencil=E,e.background=b,t>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(D0,Xx(e))}_fromTexture(e,t){e.mapping===Ta||e.mapping===Eo?this._setSize(e.image.length===0?D0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=L0(e,!1,!1),r=Math.log2(e)-FM;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=L0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ta||e.mapping===Eo?(this._cubemapMaterial===null&&(this._cubemapMaterial=U0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=I0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=VM(),this._integrationMaterial=GM());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/qg);for(let u=0;u<=r;u++){const d=Nc.lodToRoughness(u,r);if(u>r-zM)l.roughness.value=d,this._renderCube(e,u,this._integrationMaterial);else{const p=d>0?Math.log2(t)+.5*Math.log2(6/(Kg*Math.pow(d,4)))+.5:0;o.roughness.value=d,o.lodBias.value=p,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=WM());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function L0(s,e,t){return new cf(s,{minFilter:ts,generateMipmaps:e,type:lr,colorSpace:yc,depthBuffer:t})}function No(s,e,t){return new bs({name:s,uniforms:e,vertexShader:Tt.cube_vert,fragmentShader:t,side:pi,blending:Sa,depthTest:!1,depthWrite:!1})}function VM(){return No("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Kg}u

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
	`)}function GM(){return No("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qg}},`

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
	`)}function WM(){return No("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${kM}
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
	`)}function I0(){return No("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function U0(){return No("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(v,S=!1){return v==null?null:S?u(v):l(v)}function l(v){if(v&&v.isTexture){const S=v.mapping;if(S===_h||S===xh)if(e.has(v)){const E=e.get(v).texture;return d(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const b=new cf(E.height);return b.fromEquirectangularTexture(s,v),e.set(v,b),v.addEventListener("dispose",m),d(b.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const S=v.mapping,E=S===_h||S===xh,b=S===Ta||S===Eo;if(E||b){let y=t.get(v);const x=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return r===null&&(r=new Nc(s)),y=E?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const D=v.image;return E&&D&&D.height>0||b&&D&&p(D)?(r===null&&(r=new Nc(s)),y=E?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",_),y.texture):null}}}return v}function d(v,S){return S===_h?v.mapping=Ta:S===xh&&(v.mapping=Eo),v}function p(v){let S=0;const E=6;for(let b=0;b<E;b++)v[b]!==void 0&&S++;return S===E}function m(v){const S=v.target;S.removeEventListener("dispose",m);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function _(v){const S=v.target;S.removeEventListener("dispose",_);const E=t.get(S);E!==void 0&&(t.delete(S),E.dispose())}function M(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:M}}function XM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&gc("WebGLRenderer: "+r+" extension not supported."),o}}}function KM(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(E=>delete o[E]);function d(E){p(E.target)}function p(E){E.index!==null&&e.remove(E.index);for(const y in E.attributes)e.remove(E.attributes[y]);E.removeEventListener("dispose",d),delete o[E.id],u.unregister(E);const b=l.get(E);b&&(e.remove(b),l.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function m(E,b){return o[b.id]!==void 0||(b.addEventListener("dispose",d),o[b.id]=new WeakRef(b),u.register(b,b.id,b),t.memory.geometries++),b}function _(E){const b=E.attributes;for(const y in b)e.update(b[y],s.ARRAY_BUFFER)}function M(E){const b=E.index,y=E.attributes.position;let x=0;if(y===void 0)return;const D=b!==null?b.array.length:y.array.length/3-1,k=y.count>=65535?Ig:Lg,L=new k(Math.ceil(D/3)*6,1),F=L.array;if(b!==null){const T=b.array;x=b.version;for(let R=0,X=0;R<D;R+=3){const P=T[R+0],G=T[R+1],Z=T[R+2];F[X++]=P,F[X++]=G,F[X++]=G,F[X++]=Z,F[X++]=Z,F[X++]=P}}else{x=y.version;for(let T=0,R=0;T<D;T+=3){const X=T+0,P=T+1,G=T+2;F[R++]=X,F[R++]=P,F[R++]=P,F[R++]=G,F[R++]=G,F[R++]=X}}L.version=x;const U=l.get(E);U&&e.remove(U),l.set(E,L)}function v(E){const b=l.get(E);if(b){const y=E.index;y!==null&&b.version<y.version&&M(E)}else M(E);return l.get(E)}function S(){for(const E in o){const b=o[E].deref();b!==void 0&&p(b)}}return{get:m,update:_,getWireframeAttribute:v,dispose:S}}function qM(s,e,t){let r;function o(M){r=M}let l,u;function d(M){l=M.type,u=M.bytesPerElement}function p(M,v){s.drawElements(r,v,l,M*u),t.update(v,r,1)}function m(M,v,S){S!==0&&(s.drawElementsInstanced(r,v,l,M*u,S),t.update(v,r,S))}function _(M,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,l,M,0,S);let b=0;for(let y=0;y<S;y++)b+=v[y];t.update(b,r,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function YM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Ft("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function $M(s,e,t){const r=new WeakMap,o=new gn;function l(u,d,p){const m=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,M=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==M){let P=function(){R.dispose(),r.delete(d),d.removeEventListener("dispose",P)};var S=P;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let L=0;E===!0&&(L=1),b===!0&&(L=2),y===!0&&(L=3);let F=d.attributes.position.count*L,U=1;F>e.maxTextureSize&&(U=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const T=new Float32Array(F*U*4*M),R=new Pg(T,F,U,M);R.type=rr,R.needsUpdate=!0;const X=L*4;for(let G=0;G<M;G++){const Z=x[G],ne=D[G],H=k[G],ee=F*U*4*G;for(let K=0;K<Z.count;K++){const Q=K*X;E===!0&&(o.fromBufferAttribute(Z,K),T[ee+Q+0]=o.x,T[ee+Q+1]=o.y,T[ee+Q+2]=o.z,T[ee+Q+3]=0),b===!0&&(o.fromBufferAttribute(ne,K),T[ee+Q+4]=o.x,T[ee+Q+5]=o.y,T[ee+Q+6]=o.z,T[ee+Q+7]=0),y===!0&&(o.fromBufferAttribute(H,K),T[ee+Q+8]=o.x,T[ee+Q+9]=o.y,T[ee+Q+10]=o.z,T[ee+Q+11]=H.itemSize===4?o.w:1)}}v={count:M,texture:R,size:new Xe(F,U)},r.set(d,v),d.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const b=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function ZM(s,e,t,r,o){let l=new WeakMap;function u(m){const _=o.render.frame,M=m.geometry,v=e.get(m,M);if(l.get(v)!==_&&(e.update(v),l.set(v,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==_&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,_))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==_&&(S.update(),l.set(S,_))}return v}function d(){l=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:d}}const QM={[ug]:"LINEAR_TONE_MAPPING",[hg]:"REINHARD_TONE_MAPPING",[dg]:"CINEON_TONE_MAPPING",[qd]:"ACES_FILMIC_TONE_MAPPING",[pg]:"AGX_TONE_MAPPING",[mg]:"NEUTRAL_TONE_MAPPING",[fg]:"CUSTOM_TONE_MAPPING"};function JM(s,e,t,r,o,l){const u=new ar(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null,m=null;const _=new ei;_.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new qt([0,2,0,0,2,0],2));const M=new ky({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Lt(_,M),S=new Wg(-1,1,1,-1,0,1);let E=null,b=null,y=!1,x,D=null,k=[],L=!1;this.setSize=function(F,U){u.setSize(F,U),d!==null&&d.setSize(F,U),p!==null&&p.setSize(F,U);for(let T=0;T<k.length;T++){const R=k[T];R.setSize&&R.setSize(F,U)}},this.setEffects=function(F){k=F,L=k.length>0&&k[0].isRenderPass===!0;const U=u.width,T=u.height;k.length>0&&d===null&&(d=new ar(U,T,{type:lr,depthBuffer:!1,stencilBuffer:!1}),p=new ar(U,T,{type:lr,depthBuffer:!1,stencilBuffer:!1}));const R=o===!0&&k.some(X=>X.needsDepthTexture===!0);R!==(u.depthTexture!==null)&&(R===!0&&m===null&&(m=new wa(U,T),l===!0&&(m.format=ns,m.type=Ea)),u.dispose(),u.depthTexture=R?m:null,u.resolveDepthBuffer=R,u.storeMultisampledDepthBuffer=R);for(let X=0;X<k.length;X++){const P=k[X];P.setSize&&P.setSize(U,T),R&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(m)}},this.begin=function(F,U){if(y||F.toneMapping===Ar&&k.length===0)return!1;if(D=U,U!==null){const T=U.width,R=U.height;(u.width!==T||u.height!==R)&&this.setSize(T,R)}return L===!1&&F.setRenderTarget(u),x=F.toneMapping,F.toneMapping=Ar,!0},this.hasRenderPass=function(){return L},this.end=function(F,U){F.toneMapping=x,y=!0;let T=u,R=d;for(let X=0;X<k.length;X++){const P=k[X];P.enabled!==!1&&(P.render(F,R,T,U),P.needsSwap!==!1&&(T=R,R=R===d?p:d))}if(E!==F.outputColorSpace||b!==F.toneMapping){E=F.outputColorSpace,b=F.toneMapping,M.defines={},It.getTransfer(E)===Kt&&(M.defines.SRGB_TRANSFER="");const X=QM[b];X&&(M.defines[X]=""),M.needsUpdate=!0}M.uniforms.tDiffuse.value=T.texture,F.setRenderTarget(D),F.render(v,S),D=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),_.dispose(),M.dispose()}}const Yg=new Jn,$g=new wa(1,1),Zg=new Fg(1),Qg=new Pg,Jg=new Jx,ev=new Og,O0=[],F0=[],k0=new Float32Array(16),z0=new Float32Array(9),B0=new Float32Array(4);function Aa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=O0[o];if(l===void 0&&(l=new Float32Array(o),O0[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function Pn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Dn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Ic(s,e){let t=F0[e];t===void 0&&(t=new Int32Array(e),F0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function eT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;s.uniform2fv(this.addr,e),Dn(t,e)}}function nT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pn(t,e))return;s.uniform3fv(this.addr,e),Dn(t,e)}}function iT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;s.uniform4fv(this.addr,e),Dn(t,e)}}function rT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Pn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dn(t,e)}else{if(Pn(t,r))return;B0.set(r),s.uniformMatrix2fv(this.addr,!1,B0),Dn(t,r)}}function sT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Pn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dn(t,e)}else{if(Pn(t,r))return;z0.set(r),s.uniformMatrix3fv(this.addr,!1,z0),Dn(t,r)}}function aT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Pn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dn(t,e)}else{if(Pn(t,r))return;k0.set(r),s.uniformMatrix4fv(this.addr,!1,k0),Dn(t,r)}}function oT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function lT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;s.uniform2iv(this.addr,e),Dn(t,e)}}function cT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;s.uniform3iv(this.addr,e),Dn(t,e)}}function uT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;s.uniform4iv(this.addr,e),Dn(t,e)}}function hT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function dT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;s.uniform2uiv(this.addr,e),Dn(t,e)}}function fT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;s.uniform3uiv(this.addr,e),Dn(t,e)}}function pT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;s.uniform4uiv(this.addr,e),Dn(t,e)}}function Uc(s){return s.version===0&&(s.compareFunction=Cg,s.needsUpdate=!0),s}function mT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=Uc($g):l=Yg,t.setTexture2D(e||l,o)}function gT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Jg,o)}function vT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=Uc(Zg):l=ev,t.setTextureCube(e||l,o)}function _T(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Qg,o)}function xT(s){switch(s){case 5126:return eT;case 35664:return tT;case 35665:return nT;case 35666:return iT;case 35674:return rT;case 35675:return sT;case 35676:return aT;case 5124:case 35670:return oT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return uT;case 5125:return hT;case 36294:return dT;case 36295:return fT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return vT;case 36289:case 36303:case 36311:case 36292:return _T}}function yT(s,e){s.uniform1fv(this.addr,e)}function ST(s,e){const t=Aa(e,this.size,2);s.uniform2fv(this.addr,t)}function MT(s,e){const t=Aa(e,this.size,3);s.uniform3fv(this.addr,t)}function TT(s,e){const t=Aa(e,this.size,4);s.uniform4fv(this.addr,t)}function ET(s,e){const t=Aa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function wT(s,e){const t=Aa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function CT(s,e){const t=Aa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function AT(s,e){s.uniform1iv(this.addr,e)}function bT(s,e){s.uniform2iv(this.addr,e)}function NT(s,e){s.uniform3iv(this.addr,e)}function RT(s,e){s.uniform4iv(this.addr,e)}function PT(s,e){s.uniform1uiv(this.addr,e)}function DT(s,e){s.uniform2uiv(this.addr,e)}function LT(s,e){s.uniform3uiv(this.addr,e)}function IT(s,e){s.uniform4uiv(this.addr,e)}function UT(s,e,t){const r=this.cache,o=e.length,l=Ic(t,o);Pn(r,l)||(s.uniform1iv(this.addr,l),Dn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Uc($g):u=Yg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function OT(s,e,t){const r=this.cache,o=e.length,l=Ic(t,o);Pn(r,l)||(s.uniform1iv(this.addr,l),Dn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Jg,l[u])}function FT(s,e,t){const r=this.cache,o=e.length,l=Ic(t,o);Pn(r,l)||(s.uniform1iv(this.addr,l),Dn(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=Uc(Zg):u=ev;for(let d=0;d!==o;++d)t.setTextureCube(e[d]||u,l[d])}function kT(s,e,t){const r=this.cache,o=e.length,l=Ic(t,o);Pn(r,l)||(s.uniform1iv(this.addr,l),Dn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Qg,l[u])}function zT(s){switch(s){case 5126:return yT;case 35664:return ST;case 35665:return MT;case 35666:return TT;case 35674:return ET;case 35675:return wT;case 35676:return CT;case 5124:case 35670:return AT;case 35667:case 35671:return bT;case 35668:case 35672:return NT;case 35669:case 35673:return RT;case 5125:return PT;case 36294:return DT;case 36295:return LT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return kT}}class BT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=xT(t.type)}}class HT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zT(t.type)}}class VT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const $h=/(\w+)(\])?(\[|\.)?/g;function H0(s,e){s.seq.push(e),s.map[e.id]=e}function GT(s,e,t){const r=s.name,o=r.length;for($h.lastIndex=0;;){const l=$h.exec(r),u=$h.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){H0(t,m===void 0?new BT(d,s,e):new HT(d,s,e));break}else{let M=t.map[d];M===void 0&&(M=new VT(d),H0(t,M)),t=M}}}class vc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),p=e.getUniformLocation(t,d.name);GT(d,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function V0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const WT=37297;let jT=0;function XT(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const G0=new _t;function KT(s){It._getMatrix(G0,It.workingColorSpace,s);const e=`mat3( ${G0.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(s)){case Sc:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function W0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+XT(s.getShaderSource(e),d)}else return l}function qT(s,e){const t=KT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const YT={[ug]:"Linear",[hg]:"Reinhard",[dg]:"Cineon",[qd]:"ACESFilmic",[pg]:"AgX",[mg]:"Neutral",[fg]:"Custom"};function $T(s,e){const t=YT[e];return t===void 0?(mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cc=new N;function ZT(){It.getLuminanceCoefficients(cc);const s=cc.x.toFixed(4),e=cc.y.toFixed(4),t=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function JT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function eE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function vo(s){return s!==""}function j0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function X0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tE=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(s){return s.replace(tE,nE)}function nE(s,e){const t=Tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return jd(t)}const iE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K0(s){return s.replace(iE,rE)}function rE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function q0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const sE={[hc]:"SHADOWMAP_TYPE_PCF",[go]:"SHADOWMAP_TYPE_VSM"};function aE(s){return sE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const oE={[Eo]:"ENVMAP_MODE_REFRACTION"};function lE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":oE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cE={[cg]:"ENVMAP_BLENDING_MULTIPLY",[Rx]:"ENVMAP_BLENDING_MIX",[Px]:"ENVMAP_BLENDING_ADD"};function uE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":cE[s.combine]||"ENVMAP_BLENDING_NONE"}function hE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=aE(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=lE(t),M=uE(t),v=QT(t),S=JT(l),E=o.createProgram();let b,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(vo).join(`
`),b.length>0&&(b+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(vo).join(`
`),y.length>0&&(y+=`
`)):(b=[q0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),y=[q0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",t.envMap?"#define "+M:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ar?"#define TONE_MAPPING":"",t.toneMapping!==Ar?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Ar?$T("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,qT("linearToOutputTexel",t.outputColorSpace),ZT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vo).join(`
`)),u=jd(u),u=j0(u,t),u=X0(u,t),d=jd(d),d=j0(d,t),d=X0(d,t),u=K0(u),d=K0(d),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,b=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,y=["#define varying in",t.glslVersion===Km?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=x+b+u,k=x+y+d,L=V0(o,o.VERTEX_SHADER,D),F=V0(o,o.FRAGMENT_SHADER,k);o.attachShader(E,L),o.attachShader(E,F),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function U(P){if(s.debug.checkShaderErrors){const G=o.getProgramInfoLog(E)||"",Z=o.getShaderInfoLog(L)||"",ne=o.getShaderInfoLog(F)||"",H=G.trim(),ee=Z.trim(),K=ne.trim();let Q=!0,$=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,L,F);else{const Y=W0(o,L,"vertex"),J=W0(o,F,"fragment");Ft("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+Y+`
`+J)}else H!==""?mt("WebGLProgram: Program Info Log:",H):(ee===""||K==="")&&($=!1);$&&(P.diagnostics={runnable:Q,programLog:H,vertexShader:{log:ee,prefix:b},fragmentShader:{log:K,prefix:y}})}o.deleteShader(L),o.deleteShader(F),T=new vc(o,E),R=eE(o,E)}let T;this.getUniforms=function(){return T===void 0&&U(this),T};let R;this.getAttributes=function(){return R===void 0&&U(this),R};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(E,WT)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=F,this}let dE=0;class fE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new pE(e),t.set(e,r)),r}}class pE{constructor(e){this.id=dE++,this.code=e,this.usedTimes=0}}function mE(s){return s===As||s===_c||s===xc}function gE(s,e,t,r,o,l){const u=new nf,d=new fE,p=new Set,m=[],_=new Map,M=r.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return p.add(T),T===0?"uv":`uv${T}`}function E(T,R,X,P,G,Z){const ne=P.fog,H=G.geometry,ee=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?P.environment:null,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Q=e.get(T.envMap||ee,K),$=v[T.type];let Y=r.precision;T.precision!==null&&(Y=r.getMaxPrecision(T.precision),Y!==T.precision&&mt("WebGLProgram.getParameters:",T.precision,"not supported, using",Y,"instead."));const J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,O=J!==void 0?J.length:0;let re=0;H.morphAttributes.position!==void 0&&(re=1),H.morphAttributes.normal!==void 0&&(re=2),H.morphAttributes.color!==void 0&&(re=3);let Ue,oe,Te,Ne;if($){const Me=ir[$];Ue=Me.vertexShader,oe=Me.fragmentShader}else{Ue=T.vertexShader,oe=T.fragmentShader;const Me=d.getVertexShaderStage(T),Ze=d.getFragmentShaderStage(T);d.update(T,Me,Ze),Te=Me.id,Ne=Ze.id}const ze=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Ke=G.isInstancedMesh===!0,gt=G.isBatchedMesh===!0,qe=!!T.map,lt=!!T.matcap,St=!!Q,st=St&&Q.isPMREMTexture===!0,Yt=!!T.aoMap,tn=!!T.lightMap,$t=!!T.bumpMap&&T.wireframe===!1,Ut=!!T.normalMap,En=!!T.displacementMap,Ht=!!T.emissiveMap,on=!!T.metalnessMap,ve=!!T.roughnessMap,$e=T.anisotropy>0,V=T.clearcoat>0,xt=T.diffuseRoughness>0,ut=T.dispersion>0,ht=T.retroreflectivity>0,Ae=T.iridescence>0,yt=T.sheen>0,Ve=T.transmission>0,je=$e&&!!T.anisotropyMap,I=V&&!!T.clearcoatMap,w=V&&!!T.clearcoatNormalMap,se=V&&!!T.clearcoatRoughnessMap,Re=xt&&!!T.diffuseRoughnessMap,pe=Ae&&!!T.iridescenceMap,ye=Ae&&!!T.iridescenceThicknessMap,ke=yt&&!!T.sheenColorMap,me=yt&&!!T.sheenRoughnessMap,_e=!!T.specularMap,De=!!T.specularColorMap,B=!!T.specularIntensityMap,xe=Ve&&!!T.transmissionMap,ge=Ve&&!!T.thicknessMap,Oe=!!T.gradientMap,le=!!T.alphaMap,ie=T.alphaTest>0,Le=!!T.alphaHash,we=!!T.extensions;let ce=Ar;T.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(ce=s.toneMapping);const Pe=st?Q.isCompressedCubeTexture?Q.image[0].mipmaps:Q.mipmaps:null,Se={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:Ue,fragmentShader:oe,defines:T.defines,customVertexShaderID:Te,customFragmentShaderID:Ne,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:Y,batching:gt,batchingColor:gt&&G._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&G.instanceColor!==null,instancingMorph:Ke&&G.morphTexture!==null,outputColorSpace:ze===null?s.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:qe,matcap:lt,envMap:St,envMapMode:St&&Q.mapping,envMapPMREM:st,envMapMaxLod:st?Pe.length-1:null,envMapSize:st?Pe[0].width:null,aoMap:Yt,lightMap:tn,bumpMap:$t,normalMap:Ut,displacementMap:En,emissiveMap:Ht,normalMapObjectSpace:Ut&&T.normalMapType===Ix,normalMapTangentSpace:Ut&&T.normalMapType===zd,packedNormalMap:Ut&&T.normalMapType===zd&&mE(T.normalMap.format),metalnessMap:on,roughnessMap:ve,anisotropy:$e,anisotropyMap:je,clearcoat:V,clearcoatMap:I,clearcoatNormalMap:w,clearcoatRoughnessMap:se,diffuseRoughness:xt,diffuseRoughnessMap:Re,dispersion:ut,retroreflection:ht,iridescence:Ae,iridescenceMap:pe,iridescenceThicknessMap:ye,sheen:yt,sheenColorMap:ke,sheenRoughnessMap:me,specularMap:_e,specularColorMap:De,specularIntensityMap:B,transmission:Ve,transmissionMap:xe,thicknessMap:ge,gradientMap:Oe,opaque:T.transparent===!1&&T.blending===xo&&T.alphaToCoverage===!1,alphaMap:le,alphaTest:ie,alphaHash:Le,combine:T.combine,mapUv:qe&&S(T.map.channel),aoMapUv:Yt&&S(T.aoMap.channel),lightMapUv:tn&&S(T.lightMap.channel),bumpMapUv:$t&&S(T.bumpMap.channel),normalMapUv:Ut&&S(T.normalMap.channel),displacementMapUv:En&&S(T.displacementMap.channel),emissiveMapUv:Ht&&S(T.emissiveMap.channel),metalnessMapUv:on&&S(T.metalnessMap.channel),roughnessMapUv:ve&&S(T.roughnessMap.channel),anisotropyMapUv:je&&S(T.anisotropyMap.channel),clearcoatMapUv:I&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:w&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&S(T.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Re&&S(T.diffuseRoughnessMap.channel),iridescenceMapUv:pe&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:me&&S(T.sheenRoughnessMap.channel),specularMapUv:_e&&S(T.specularMap.channel),specularColorMapUv:De&&S(T.specularColorMap.channel),specularIntensityMapUv:B&&S(T.specularIntensityMap.channel),transmissionMapUv:xe&&S(T.transmissionMap.channel),thicknessMapUv:ge&&S(T.thicknessMap.channel),alphaMapUv:le&&S(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ut||$e),vertexNormals:!!H.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(qe||le),fog:!!ne,useFog:T.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||H.attributes.normal===void 0&&Ut===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Ee,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Z.filter(Me=>Me.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:qe&&T.map.isVideoTexture===!0&&It.getTransfer(T.map.colorSpace)===Kt,decodeVideoTextureEmissive:Ht&&T.emissiveMap.isVideoTexture===!0&&It.getTransfer(T.emissiveMap.colorSpace)===Kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Xi,flipSided:T.side===pi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:we&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&T.extensions.multiDraw===!0||gt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Se.vertexUv1s=p.has(1),Se.vertexUv2s=p.has(2),Se.vertexUv3s=p.has(3),p.clear(),Se}function b(T){const R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)R.push(X),R.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(y(R,T),x(R,T),R.push(s.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function y(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapPMREM),T.push(R.envMapMaxLod),T.push(R.envMapSize),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.diffuseRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.numSunLights),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numSunLightShadows),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.numLightProbeGrids),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function x(T,R){u.disableAll(),R.instancing&&u.enable(0),R.instancingColor&&u.enable(1),R.instancingMorph&&u.enable(2),R.matcap&&u.enable(3),R.envMap&&u.enable(4),R.normalMapObjectSpace&&u.enable(5),R.normalMapTangentSpace&&u.enable(6),R.clearcoat&&u.enable(7),R.iridescence&&u.enable(8),R.alphaTest&&u.enable(9),R.vertexColors&&u.enable(10),R.vertexAlphas&&u.enable(11),R.vertexUv1s&&u.enable(12),R.vertexUv2s&&u.enable(13),R.vertexUv3s&&u.enable(14),R.vertexTangents&&u.enable(15),R.anisotropy&&u.enable(16),R.alphaHash&&u.enable(17),R.batching&&u.enable(18),R.dispersion&&u.enable(19),R.retroreflection&&u.enable(24),R.diffuseRoughness&&u.enable(25),R.batchingColor&&u.enable(20),R.gradientMap&&u.enable(21),R.packedNormalMap&&u.enable(22),R.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reversedDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),R.numLightProbeGrids>0&&u.enable(22),R.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function D(T){const R=v[T.type];let X;if(R){const P=ir[R];X=Uy.clone(P.uniforms)}else X=T.uniforms;return X}function k(T,R){let X=_.get(R);return X!==void 0?++X.usedTimes:(X=new hE(s,R,T,o),m.push(X),_.set(R,X)),X}function L(T){if(--T.usedTimes===0){const R=m.indexOf(T);m[R]=m[m.length-1],m.pop(),_.delete(T.cacheKey),T.destroy()}}function F(T){d.remove(T)}function U(){d.dispose()}return{getParameters:E,getProgramCacheKey:b,getUniforms:D,acquireProgram:k,releaseProgram:L,releaseShaderCache:F,programs:m,dispose:U}}function vE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function _E(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Y0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function d(v,S,E,b,y,x){let D=s[e];return D===void 0?(D={id:v.id,object:v,geometry:S,material:E,materialVariant:u(v),groupOrder:b,renderOrder:v.renderOrder,z:y,group:x},s[e]=D):(D.id=v.id,D.object=v,D.geometry=S,D.material=E,D.materialVariant=u(v),D.groupOrder=b,D.renderOrder=v.renderOrder,D.z=y,D.group=x),e++,D}function p(v,S,E,b,y,x,D){D.reversedDepth===!0&&(y=-y);const k=d(v,S,E,b,y,x);E.transmission>0?r.push(k):E.transparent===!0?o.push(k):t.push(k)}function m(v,S,E,b,y,x){const D=d(v,S,E,b,y,x);E.transmission>0?r.unshift(D):E.transparent===!0?o.unshift(D):t.unshift(D)}function _(v,S){t.length>1&&t.sort(v||_E),r.length>1&&r.sort(S||Y0),o.length>1&&o.sort(S||Y0)}function M(){for(let v=e,S=s.length;v<S;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:p,unshift:m,finish:M,sort:_}}function xE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new $0,s.set(r,[u])):o>=l.length?(u=new $0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function yE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new At};break;case"SpotLight":t={position:new N,direction:new N,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new N,halfWidth:new N,halfHeight:new N};break}return s[e.id]=t,t}}}function SE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ME=0;function TE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function EE(s){const e=new yE,t=SE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new N);const o=new N,l=new Jt,u=new Jt;function d(m){let _=0,M=0,v=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let S=0,E=0,b=0,y=0,x=0,D=0,k=0,L=0,F=0,U=0,T=0,R=0,X=0,P=0;m.sort(TE);for(let Z=0,ne=m.length;Z<ne;Z++){const H=m[Z],ee=H.color,K=H.intensity,Q=H.distance;let $=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===As?$=H.shadow.map.texture:$=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=ee.r*K,M+=ee.g*K,v+=ee.b*K;else if(H.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(H.sh.coefficients[Y],K);P++}else if(H.isSunLight){const Y=e.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const J=H.shadow,O=t.get(H);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),r.sunShadow[E]=O,r.sunShadowMap[E]=$;const re=J.getViewportCount();for(let Ue=0;Ue<re;Ue++)r.sunShadowMatrix[b+Ue]=J.getMatrix(Ue),r.sunShadowCascade[b+Ue]=J._cascadeData[Ue];b+=re,E++}r.sun[S]=Y,S++}else if(H.isDirectionalLight){const Y=e.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const J=H.shadow,O=t.get(H);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,r.directionalShadow[y]=O,r.directionalShadowMap[y]=$,r.directionalShadowMatrix[y]=H.shadow.matrix,F++}r.directional[y]=Y,y++}else if(H.isSpotLight){const Y=e.get(H);Y.position.setFromMatrixPosition(H.matrixWorld),Y.color.copy(ee).multiplyScalar(K),Y.distance=Q,Y.coneCos=Math.cos(H.angle),Y.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Y.decay=H.decay,r.spot[D]=Y;const J=H.shadow;if(H.map&&(r.spotLightMap[R]=H.map,R++,J.updateMatrices(H),H.castShadow&&X++),r.spotLightMatrix[D]=J.matrix,H.castShadow){const O=t.get(H);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,r.spotShadow[D]=O,r.spotShadowMap[D]=$,T++}D++}else if(H.isRectAreaLight){const Y=e.get(H);Y.color.copy(ee).multiplyScalar(K),Y.halfWidth.set(H.width*.5,0,0),Y.halfHeight.set(0,H.height*.5,0),r.rectArea[k]=Y,k++}else if(H.isPointLight){const Y=e.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity),Y.distance=H.distance,Y.decay=H.decay,H.castShadow){const J=H.shadow,O=t.get(H);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,O.shadowCameraNear=J.camera.near,O.shadowCameraFar=J.camera.far,r.pointShadow[x]=O,r.pointShadowMap[x]=$,r.pointShadowMatrix[x]=H.shadow.matrix,U++}r.point[x]=Y,x++}else if(H.isHemisphereLight){const Y=e.get(H);Y.skyColor.copy(H.color).multiplyScalar(K),Y.groundColor.copy(H.groundColor).multiplyScalar(K),r.hemi[L]=Y,L++}}k>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=M,r.ambient[2]=v;const G=r.hash;(G.sunLength!==S||G.directionalLength!==y||G.pointLength!==x||G.spotLength!==D||G.rectAreaLength!==k||G.hemiLength!==L||G.numSunShadows!==E||G.numDirectionalShadows!==F||G.numPointShadows!==U||G.numSpotShadows!==T||G.numSpotMaps!==R||G.numLightProbes!==P)&&(r.sun.length=S,r.directional.length=y,r.spot.length=D,r.rectArea.length=k,r.point.length=x,r.hemi.length=L,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=b,r.sunShadowCascade.length=b,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.directionalShadowMatrix.length=F,r.pointShadow.length=U,r.pointShadowMap.length=U,r.pointShadowMatrix.length=U,r.spotShadow.length=T,r.spotShadowMap.length=T,r.spotLightMatrix.length=T+R-X,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=X,r.numLightProbes=P,G.sunLength=S,G.directionalLength=y,G.pointLength=x,G.spotLength=D,G.rectAreaLength=k,G.hemiLength=L,G.numSunShadows=E,G.numDirectionalShadows=F,G.numPointShadows=U,G.numSpotShadows=T,G.numSpotMaps=R,G.numLightProbes=P,r.version=ME++)}function p(m,_){let M=0,v=0,S=0,E=0,b=0,y=0;const x=_.matrixWorldInverse;for(let D=0,k=m.length;D<k;D++){const L=m[D];if(L.isSunLight){const F=r.sun[M];F.direction.setFromMatrixPosition(L.matrixWorld),F.direction.transformDirection(x),M++}else if(L.isDirectionalLight){const F=r.directional[v];F.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(x),v++}else if(L.isSpotLight){const F=r.spot[E];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(x),F.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(x),E++}else if(L.isRectAreaLight){const F=r.rectArea[b];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(x),u.identity(),l.copy(L.matrixWorld),l.premultiply(x),u.extractRotation(l),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),F.halfWidth.applyMatrix4(u),F.halfHeight.applyMatrix4(u),b++}else if(L.isPointLight){const F=r.point[S];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(x),S++}else if(L.isHemisphereLight){const F=r.hemi[y];F.direction.setFromMatrixPosition(L.matrixWorld),F.direction.transformDirection(x),y++}}}return{setup:d,setupView:p,state:r}}function Z0(s){const e=new EE(s),t=[],r=[],o=[];function l(M){_.camera=M,t.length=0,r.length=0,o.length=0}function u(M){M.isLightProbeGrid?o.push(M):t.push(M)}function d(M){r.push(M)}function p(){e.setup(t),o.sort((M,v)=>M.priority-v.priority||M.id-v.id)}function m(M){e.setupView(t,M)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:d}}function wE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Z0(s),e.set(o,[d])):l>=u.length?(d=new Z0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const CE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AE=`uniform sampler2D shadow_pass;
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
}`,bE=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],NE=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Q0=new Jt,mo=new N,Zh=new N;function RE(s,e,t){let r=new Ao;const o=new Xe,l=new Xe,u=new gn,d=new zy,p=new By,m={},_=t.maxTextureSize,M={[Cs]:pi,[pi]:Cs,[Xi]:Xi},v=new bs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:CE,fragmentShader:AE}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new ei;E.setAttribute("position",new is(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Lt(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let x=this.type;this.render=function(U,T,R){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===ag&&(mt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hc);const X=s.getRenderTarget(),P=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Sa),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ne=x!==this.type;ne&&T.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(ee=>ee.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,ee=U.length;H<ee;H++){const K=U[H],Q=K.shadow;if(Q===void 0){mt("WebGLShadowMap:",K,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const $=Q.getFrameExtents();o.multiply($),l.copy(Q.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/$.x),o.x=l.x*$.x,Q.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/$.y),o.y=l.y*$.y,Q.mapSize.y=l.y));const Y=s.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=Y,Q.map===null||ne===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===go){if(K.isPointLight){mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new ar(o.x,o.y,{format:As,type:lr,minFilter:si,magFilter:si,generateMipmaps:!1}),Q.map.texture.name=K.name+".shadowMap",Q.map.depthTexture=new wa(o.x,o.y,rr),Q.map.depthTexture.name=K.name+".shadowMapDepth",Q.map.depthTexture.format=rs,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Hn,Q.map.depthTexture.magFilter=Hn}else K.isPointLight?(Q.map=new cf(o.x),Q.map.depthTexture=new Fg(o.x,or)):(Q.map=new ar(o.x,o.y),Q.map.depthTexture=new wa(o.x,o.y,or)),Q.map.depthTexture.name=K.name+".shadowMap",Q.map.depthTexture.format=rs,this.type===hc?(Q.map.depthTexture.compareFunction=Y?wg:Eg,Q.map.depthTexture.minFilter=si,Q.map.depthTexture.magFilter=si):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Hn,Q.map.depthTexture.magFilter=Hn);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==o.x||Q.map.height!==o.y)&&Q.map.setSize(o.x,o.y);const J=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();K.isPointLight!==!0&&Q.updateMatrices(K,R);const O=(Q.camera.layers.mask&4294967294)!==0?Q.camera.layers:R.layers;for(let re=0;re<J;re++){const Ue=Q.getCamera(re);if(K.isPointLight){const oe=Q.camera,Te=Q.matrix,Ne=K.distance||oe.far;Ne!==oe.far&&(oe.far=Ne,oe.updateProjectionMatrix()),mo.setFromMatrixPosition(K.matrixWorld),oe.position.copy(mo),Zh.copy(oe.position),Zh.add(bE[re]),oe.up.copy(NE[re]),oe.lookAt(Zh),oe.updateMatrixWorld(),Te.makeTranslation(-mo.x,-mo.y,-mo.z),Q0.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(Q0,oe.coordinateSystem,oe.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)s.setRenderTarget(Q.map,re),s.clear();else{re===0&&(s.setRenderTarget(Q.map),s.clear());const oe=Q.getViewport(re);u.set(l.x*oe.x,l.y*oe.y,l.x*oe.z,l.y*oe.w),Z.viewport(u)}r=Q.getFrustum(re),L(T,R,Ue,K,O,this.type)}Q.isPointLightShadow!==!0&&this.type===go&&D(Q,R),Q.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(X,P,G)};function D(U,T){const R=e.update(b);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null?U.mapPass=new ar(o.x,o.y,{format:As,type:lr}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value.set(U.map.width,U.map.height),v.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(T,null,R,v,b,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value.set(U.map.width,U.map.height),S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(T,null,R,S,b,null)}function k(U,T,R,X){let P=null;const G=R.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(G!==void 0)P=G;else if(P=R.isPointLight===!0?p:d,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const Z=P.uuid,ne=T.uuid;let H=m[Z];H===void 0&&(H={},m[Z]=H);let ee=H[ne];ee===void 0&&(ee=P.clone(),H[ne]=ee,T.addEventListener("dispose",F)),P=ee}if(P.visible=T.visible,P.wireframe=T.wireframe,X===go?P.side=T.shadowSide!==null?T.shadowSide:T.side:P.side=T.shadowSide!==null?T.shadowSide:M[T.side],P.alphaMap=T.alphaMap,P.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,P.map=T.map,P.clipShadows=T.clipShadows,P.clippingPlanes=T.clippingPlanes,P.clipIntersection=T.clipIntersection,P.displacementMap=T.displacementMap,P.displacementScale=T.displacementScale,P.displacementBias=T.displacementBias,P.wireframeLinewidth=T.wireframeLinewidth,P.linewidth=T.linewidth,R.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const Z=s.properties.get(P);Z.light=R}return P}function L(U,T,R,X,P,G){if(U.visible===!1)return;if(U.layers.test(P)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&G===go)&&(!U.frustumCulled||U.intersectsFrustum(r))){U.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,U.matrixWorld);const H=e.update(U),ee=U.material;if(Array.isArray(ee)){const K=H.groups;for(let Q=0,$=K.length;Q<$;Q++){const Y=K[Q],J=ee[Y.materialIndex];if(J&&J.visible){const O=k(U,J,X,G);U.onBeforeShadow(s,U,T,R,H,O,Y),s.renderBufferDirect(R,null,H,O,U,Y),U.onAfterShadow(s,U,T,R,H,O,Y)}}}else if(ee.visible){const K=k(U,ee,X,G);U.onBeforeShadow(s,U,T,R,H,K,null),s.renderBufferDirect(R,null,H,K,U,null),U.onAfterShadow(s,U,T,R,H,K,null)}}const ne=U.children;for(let H=0,ee=ne.length;H<ee;H++)L(ne[H],T,R,X,P,G)}function F(U){U.target.removeEventListener("dispose",F);for(const R in m){const X=m[R],P=U.target.uuid;P in X&&(X[P].dispose(),delete X[P])}}}function PE(s,e){function t(){let B=!1;const xe=new gn;let ge=null;const Oe=new gn(0,0,0,0);return{setMask:function(le){ge!==le&&!B&&(s.colorMask(le,le,le,le),ge=le)},setLocked:function(le){B=le},setClear:function(le,ie,Le,we,ce){ce===!0&&(le*=we,ie*=we,Le*=we),xe.set(le,ie,Le,we),Oe.equals(xe)===!1&&(s.clearColor(le,ie,Le,we),Oe.copy(xe))},reset:function(){B=!1,ge=null,Oe.set(-1,0,0,0)}}}function r(){let B=!1,xe=!1,ge=null,Oe=null,le=null;return{setReversed:function(ie){if(xe!==ie){const Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),xe=ie;const we=le;le=null,this.setClear(we)}},getReversed:function(){return xe},setTest:function(ie){ie?Ee(s.DEPTH_TEST):Ke(s.DEPTH_TEST)},setMask:function(ie){ge!==ie&&!B&&(s.depthMask(ie),ge=ie)},setFunc:function(ie){if(xe&&(ie=Wx[ie]),Oe!==ie){switch(ie){case ed:s.depthFunc(s.NEVER);break;case td:s.depthFunc(s.ALWAYS);break;case nd:s.depthFunc(s.LESS);break;case To:s.depthFunc(s.LEQUAL);break;case id:s.depthFunc(s.EQUAL);break;case rd:s.depthFunc(s.GEQUAL);break;case sd:s.depthFunc(s.GREATER);break;case ad:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=ie}},setLocked:function(ie){B=ie},setClear:function(ie){le!==ie&&(le=ie,xe&&(ie=1-ie),s.clearDepth(ie))},reset:function(){B=!1,ge=null,Oe=null,le=null,xe=!1}}}function o(){let B=!1,xe=null,ge=null,Oe=null,le=null,ie=null,Le=null,we=null,ce=null;return{setTest:function(Pe){B||(Pe?Ee(s.STENCIL_TEST):Ke(s.STENCIL_TEST))},setMask:function(Pe){xe!==Pe&&!B&&(s.stencilMask(Pe),xe=Pe)},setFunc:function(Pe,Se,Me){(ge!==Pe||Oe!==Se||le!==Me)&&(s.stencilFunc(Pe,Se,Me),ge=Pe,Oe=Se,le=Me)},setOp:function(Pe,Se,Me){(ie!==Pe||Le!==Se||we!==Me)&&(s.stencilOp(Pe,Se,Me),ie=Pe,Le=Se,we=Me)},setLocked:function(Pe){B=Pe},setClear:function(Pe){ce!==Pe&&(s.clearStencil(Pe),ce=Pe)},reset:function(){B=!1,xe=null,ge=null,Oe=null,le=null,ie=null,Le=null,we=null,ce=null}}}const l=new t,u=new r,d=new o;let p={};const m=new WeakMap;let _={},M={},v={},S=new WeakMap,E=[],b=null,y=!1,x=null,D=null,k=null,L=null,F=null,U=null,T=null,R=new At(0,0,0),X=0,P=!1,G=null,Z=null,ne=null,H=null,ee=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,$=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Q=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Q=$>=2);let J=null,O={};const re=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),oe=new gn().fromArray(re),Te=new gn().fromArray(Ue);function Ne(B,xe,ge,Oe){const le=new Uint8Array(4),ie=s.createTexture();s.bindTexture(B,ie),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<ge;Le++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(xe,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(xe+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return ie}const ze={};ze[s.TEXTURE_2D]=Ne(s.TEXTURE_2D,s.TEXTURE_2D,1),ze[s.TEXTURE_CUBE_MAP]=Ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[s.TEXTURE_2D_ARRAY]=Ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ze[s.TEXTURE_3D]=Ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Ee(s.DEPTH_TEST),u.setFunc(To),$t(!1),Ut(Gm),Ee(s.CULL_FACE),Yt(Sa);function Ee(B){_[B]!==!0&&(s.enable(B),_[B]=!0)}function Ke(B){_[B]!==!1&&(s.disable(B),_[B]=!1)}function gt(B,xe){return v[B]!==xe?(s.bindFramebuffer(B,xe),v[B]=xe,B===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=xe),B===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=xe),!0):!1}function qe(B,xe){let ge=E,Oe=!1;if(B){ge=S.get(xe),ge===void 0&&(ge=[],S.set(xe,ge));const le=B.textures;if(ge.length!==le.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,Le=le.length;ie<Le;ie++)ge[ie]=s.COLOR_ATTACHMENT0+ie;ge.length=le.length,Oe=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(ge)}function lt(B){return b!==B?(s.useProgram(B),b=B,!0):!1}const St={[ga]:s.FUNC_ADD,[fx]:s.FUNC_SUBTRACT,[px]:s.FUNC_REVERSE_SUBTRACT};St[mx]=s.MIN,St[gx]=s.MAX;const st={[vx]:s.ZERO,[_x]:s.ONE,[xx]:s.SRC_COLOR,[og]:s.SRC_ALPHA,[wx]:s.SRC_ALPHA_SATURATE,[Tx]:s.DST_COLOR,[Sx]:s.DST_ALPHA,[yx]:s.ONE_MINUS_SRC_COLOR,[lg]:s.ONE_MINUS_SRC_ALPHA,[Ex]:s.ONE_MINUS_DST_COLOR,[Mx]:s.ONE_MINUS_DST_ALPHA,[Cx]:s.CONSTANT_COLOR,[Ax]:s.ONE_MINUS_CONSTANT_COLOR,[bx]:s.CONSTANT_ALPHA,[Nx]:s.ONE_MINUS_CONSTANT_ALPHA};function Yt(B,xe,ge,Oe,le,ie,Le,we,ce,Pe){if(B===Sa){y===!0&&(Ke(s.BLEND),y=!1);return}if(y===!1&&(Ee(s.BLEND),y=!0),B!==dx){if(B!==x||Pe!==P){if((D!==ga||F!==ga)&&(s.blendEquation(s.FUNC_ADD),D=ga,F=ga),Pe)switch(B){case xo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wm:s.blendFunc(s.ONE,s.ONE);break;case jm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ft("WebGLState: Invalid blending: ",B);break}else switch(B){case xo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case jm:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xm:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",B);break}k=null,L=null,U=null,T=null,R.set(0,0,0),X=0,x=B,P=Pe}return}le=le||xe,ie=ie||ge,Le=Le||Oe,(xe!==D||le!==F)&&(s.blendEquationSeparate(St[xe],St[le]),D=xe,F=le),(ge!==k||Oe!==L||ie!==U||Le!==T)&&(s.blendFuncSeparate(st[ge],st[Oe],st[ie],st[Le]),k=ge,L=Oe,U=ie,T=Le),(we.equals(R)===!1||ce!==X)&&(s.blendColor(we.r,we.g,we.b,ce),R.copy(we),X=ce),x=B,P=!1}function tn(B,xe){B.side===Xi?Ke(s.CULL_FACE):Ee(s.CULL_FACE);let ge=B.side===pi;xe&&(ge=!ge),$t(ge),B.blending===xo&&B.transparent===!1?Yt(Sa):Yt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),l.setMask(B.colorWrite);const Oe=B.stencilWrite;d.setTest(Oe),Oe&&(d.setMask(B.stencilWriteMask),d.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),d.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ht(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):Ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(B){G!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),G=B)}function Ut(B){B!==ux?(Ee(s.CULL_FACE),B!==Z&&(B===Gm?s.cullFace(s.BACK):B===hx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ke(s.CULL_FACE),Z=B}function En(B){B!==ne&&(Q&&s.lineWidth(B),ne=B)}function Ht(B,xe,ge){B?(Ee(s.POLYGON_OFFSET_FILL),(H!==xe||ee!==ge)&&(H=xe,ee=ge,u.getReversed()&&(xe=-xe,ge=-ge),s.polygonOffset(xe,ge))):Ke(s.POLYGON_OFFSET_FILL)}function on(B){B?Ee(s.SCISSOR_TEST):Ke(s.SCISSOR_TEST)}function ve(B){B===void 0&&(B=s.TEXTURE0+K-1),J!==B&&(s.activeTexture(B),J=B)}function $e(B,xe,ge){ge===void 0&&(J===null?ge=s.TEXTURE0+K-1:ge=J);let Oe=O[ge];Oe===void 0&&(Oe={type:void 0,texture:void 0},O[ge]=Oe),(Oe.type!==B||Oe.texture!==xe)&&(J!==ge&&(s.activeTexture(ge),J=ge),s.bindTexture(B,xe||ze[B]),Oe.type=B,Oe.texture=xe)}function V(){const B=O[J];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function xt(){try{s.compressedTexImage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function ut(){try{s.compressedTexImage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function ht(){try{s.texSubImage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function Ae(){try{s.texSubImage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function yt(){try{s.compressedTexSubImage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function Ve(){try{s.compressedTexSubImage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function je(){try{s.texStorage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function I(){try{s.texStorage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function w(){try{s.texImage2D(...arguments)}catch(B){Ft("WebGLState:",B)}}function se(){try{s.texImage3D(...arguments)}catch(B){Ft("WebGLState:",B)}}function Re(B){return M[B]!==void 0?M[B]:s.getParameter(B)}function pe(B,xe){M[B]!==xe&&(s.pixelStorei(B,xe),M[B]=xe)}function ye(B){oe.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),oe.copy(B))}function ke(B){Te.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Te.copy(B))}function me(B,xe){let ge=m.get(xe);ge===void 0&&(ge=new WeakMap,m.set(xe,ge));let Oe=ge.get(B);Oe===void 0&&(Oe=s.getUniformBlockIndex(xe,B.name),s.uniformBlockBinding(xe,Oe,Oe),ge.set(B,Oe))}function _e(B,xe,ge){const le=m.get(xe).get(B);p[le]!==ge&&(s.bindBufferBase(s.UNIFORM_BUFFER,le,ge),p[le]=ge)}function De(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},M={},J=null,O={},v={},p={},S=new WeakMap,E=[],b=null,y=!1,x=null,D=null,k=null,L=null,F=null,U=null,T=null,R=new At(0,0,0),X=0,P=!1,G=null,Z=null,ne=null,H=null,ee=null,oe.set(0,0,s.canvas.width,s.canvas.height),Te.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:Ee,disable:Ke,bindFramebuffer:gt,drawBuffers:qe,useProgram:lt,setBlending:Yt,setMaterial:tn,setFlipSided:$t,setCullFace:Ut,setLineWidth:En,setPolygonOffset:Ht,setScissorTest:on,activeTexture:ve,bindTexture:$e,unbindTexture:V,compressedTexImage2D:xt,compressedTexImage3D:ut,texImage2D:w,texImage3D:se,pixelStorei:pe,getParameter:Re,updateUBOMapping:me,uniformBlockBinding:_e,texStorage2D:je,texStorage3D:I,texSubImage2D:ht,texSubImage3D:Ae,compressedTexSubImage2D:yt,compressedTexSubImage3D:Ve,scissor:ye,viewport:ke,reset:De}}function DE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Xe,_=new WeakMap,M=new Set;let v;const S=new WeakMap,E=new Set,b=new FinalizationRegistry(I=>E.delete(I));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,w){return y?new OffscreenCanvas(I,w):Mc("canvas")}function D(I,w,se){let Re=1;const pe=je(I);if((pe.width>se||pe.height>se)&&(Re=se/Math.max(pe.width,pe.height)),Re<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ye=Math.floor(Re*pe.width),ke=Math.floor(Re*pe.height);v===void 0&&(v=x(ye,ke));const me=w?x(ye,ke):v;return me.width=ye,me.height=ke,me.getContext("2d").drawImage(I,0,0,ye,ke),mt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ye+"x"+ke+")."),me}else return"data"in I&&mt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),I;return I}function k(I){return I.generateMipmaps}function L(I){s.generateMipmap(I)}function F(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(I,w,se,Re,pe,ye=!1){if(I!==null){if(s[I]!==void 0)return s[I];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ke;Re&&(ke=e.get("EXT_texture_norm16"),ke||mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=w;if(w===s.RED&&(se===s.FLOAT&&(me=s.R32F),se===s.HALF_FLOAT&&(me=s.R16F),se===s.UNSIGNED_BYTE&&(me=s.R8),se===s.UNSIGNED_SHORT&&ke&&(me=ke.R16_EXT),se===s.SHORT&&ke&&(me=ke.R16_SNORM_EXT)),w===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(me=s.R8UI),se===s.UNSIGNED_SHORT&&(me=s.R16UI),se===s.UNSIGNED_INT&&(me=s.R32UI),se===s.BYTE&&(me=s.R8I),se===s.SHORT&&(me=s.R16I),se===s.INT&&(me=s.R32I)),w===s.RG&&(se===s.FLOAT&&(me=s.RG32F),se===s.HALF_FLOAT&&(me=s.RG16F),se===s.UNSIGNED_BYTE&&(me=s.RG8),se===s.UNSIGNED_SHORT&&ke&&(me=ke.RG16_EXT),se===s.SHORT&&ke&&(me=ke.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(me=s.RG8UI),se===s.UNSIGNED_SHORT&&(me=s.RG16UI),se===s.UNSIGNED_INT&&(me=s.RG32UI),se===s.BYTE&&(me=s.RG8I),se===s.SHORT&&(me=s.RG16I),se===s.INT&&(me=s.RG32I)),w===s.RGB_INTEGER&&(se===s.UNSIGNED_BYTE&&(me=s.RGB8UI),se===s.UNSIGNED_SHORT&&(me=s.RGB16UI),se===s.UNSIGNED_INT&&(me=s.RGB32UI),se===s.BYTE&&(me=s.RGB8I),se===s.SHORT&&(me=s.RGB16I),se===s.INT&&(me=s.RGB32I)),w===s.RGBA_INTEGER&&(se===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),se===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),se===s.UNSIGNED_INT&&(me=s.RGBA32UI),se===s.BYTE&&(me=s.RGBA8I),se===s.SHORT&&(me=s.RGBA16I),se===s.INT&&(me=s.RGBA32I)),w===s.RGB&&(se===s.UNSIGNED_SHORT&&ke&&(me=ke.RGB16_EXT),se===s.SHORT&&ke&&(me=ke.RGB16_SNORM_EXT),se===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),se===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),w===s.RGBA){const _e=ye?Sc:It.getTransfer(pe);se===s.FLOAT&&(me=s.RGBA32F),se===s.HALF_FLOAT&&(me=s.RGBA16F),se===s.UNSIGNED_BYTE&&(me=_e===Kt?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT&&ke&&(me=ke.RGBA16_EXT),se===s.SHORT&&ke&&(me=ke.RGBA16_SNORM_EXT),se===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function T(I,w){let se;return I?w===null||w===or||w===Ea?se=s.DEPTH24_STENCIL8:w===rr?se=s.DEPTH32F_STENCIL8:w===wo&&(se=s.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===or||w===Ea?se=s.DEPTH_COMPONENT24:w===rr?se=s.DEPTH_COMPONENT32F:w===wo&&(se=s.DEPTH_COMPONENT16),se}function R(I,w){return k(I)===!0||I.isFramebufferTexture&&I.minFilter!==Hn&&I.minFilter!==si?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function X(I){const w=new WeakRef(I);r.get(I).__ref=w,E.add(w),b.register(I,w,w)}function P(I){const w=r.get(I).__ref;w!==void 0&&(E.delete(w),b.unregister(w))}function G(I){ne(I.target)}function Z(I){H(I.target)}function ne(I){I.removeEventListener("dispose",G),P(I),K(I),I.isVideoTexture&&_.delete(I),I.isHTMLTexture&&M.delete(I)}function H(I){I.removeEventListener("dispose",Z),P(I),$(I)}function ee(){for(const I of E){const w=I.deref();w!==void 0&&(w.isRenderTarget===!0?H(w):ne(w))}E.clear(),M.clear()}function K(I){const w=r.get(I);if(w.__webglInit===void 0)return;const se=I.source,Re=S.get(se);if(Re){const pe=Re[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&Q(I),Object.keys(Re).length===0&&S.delete(se)}r.remove(I)}function Q(I){const w=r.get(I);s.deleteTexture(w.__webglTexture);const se=I.source,Re=S.get(se);delete Re[w.__cacheKey],u.memory.textures--}function $(I){const w=r.get(I);w.__depthDisposeCallback&&w.__depthDisposeCallback();const se=I.depthTexture;if(se&&se.renderTarget===I&&ne(se),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ye=0;ye<w.__webglFramebuffer[pe].length;ye++)s.deleteFramebuffer(w.__webglFramebuffer[pe][ye]);else s.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[pe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Re=I.textures;for(let pe=0,ye=Re.length;pe<ye;pe++){const ke=r.get(Re[pe]);ke.__webglTexture&&(s.deleteTexture(ke.__webglTexture),u.memory.textures--),r.remove(Re[pe])}r.remove(I)}let Y=0;function J(){Y=0}function O(){return Y}function re(I){Y=I}function Ue(){const I=Y;return I>=o.maxTextures&&mt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),Y+=1,I}function oe(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.mipmapsAutoUpdate),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function Te(I,w){const se=r.get(I);if(I.isVideoTexture&&yt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&se.__version!==I.version){const Re=I.image;if(Re===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(Re.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{tn(se,I,w);return}}else I.isExternalTexture&&(se.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+w)}function Ne(I,w){const se=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&se.__version!==I.version){tn(se,I,w);return}else I.isExternalTexture&&(se.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+w)}function ze(I,w){const se=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&se.__version!==I.version){tn(se,I,w);return}t.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+w)}function Ee(I,w){const se=r.get(I);if(I.version>0&&se.__version!==I.version){$t(se,I,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+w)}const Ke={[od]:s.REPEAT,[wr]:s.CLAMP_TO_EDGE,[ld]:s.MIRRORED_REPEAT},gt={[Hn]:s.NEAREST,[Dx]:s.NEAREST_MIPMAP_NEAREST,[Il]:s.NEAREST_MIPMAP_LINEAR,[si]:s.LINEAR,[yh]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},qe={[Ox]:s.NEVER,[Cg]:s.ALWAYS,[Fx]:s.LESS,[Eg]:s.LEQUAL,[kx]:s.EQUAL,[wg]:s.GEQUAL,[zx]:s.GREATER,[Bx]:s.NOTEQUAL};function lt(I,w){if(w.type===rr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===si||w.magFilter===yh||w.magFilter===Il||w.magFilter===ts||w.minFilter===si||w.minFilter===yh||w.minFilter===Il||w.minFilter===ts)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Ke[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Ke[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Ke[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,gt[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,gt[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,qe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Hn||w.minFilter!==Il&&w.minFilter!==ts||w.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function St(I,w){let se=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",G),X(w));const Re=w.source;let pe=S.get(Re);pe===void 0&&(pe={},S.set(Re,pe));const ye=oe(w);if(ye!==I.__cacheKey){pe[ye]===void 0&&(pe[ye]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,se=!0),pe[ye].usedTimes++;const ke=pe[I.__cacheKey];ke!==void 0&&(pe[I.__cacheKey].usedTimes--,ke.usedTimes===0&&Q(w)),I.__cacheKey=ye,I.__webglTexture=pe[ye].texture}return se}function st(I,w,se){return Math.floor(Math.floor(I/se)/w)}function Yt(I,w,se,Re){const ye=I.updateRanges;if(ye.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,se,Re,w.data);else{ye.sort((B,xe)=>B.start-xe.start);let ke=0;for(let B=1;B<ye.length;B++){const xe=ye[ke],ge=ye[B],Oe=xe.start+xe.count,le=st(ge.start,w.width,4),ie=st(xe.start,w.width,4);ge.start<=Oe+1&&le===ie&&st(ge.start+ge.count-1,w.width,4)===le?xe.count=Math.max(xe.count,ge.start+ge.count-xe.start):(++ke,ye[ke]=ge)}ye.length=ke+1;const me=t.getParameter(s.UNPACK_ROW_LENGTH),_e=t.getParameter(s.UNPACK_SKIP_PIXELS),De=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let B=0,xe=ye.length;B<xe;B++){const ge=ye[B],Oe=Math.floor(ge.start/4),le=Math.ceil(ge.count/4),ie=Oe%w.width,Le=Math.floor(Oe/w.width),we=le,ce=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(s.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(s.TEXTURE_2D,0,ie,Le,we,ce,se,Re,w.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,me),t.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function tn(I,w,se){let Re=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Re=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Re=s.TEXTURE_3D);const pe=St(I,w),ye=w.source;t.bindTexture(Re,I.__webglTexture,s.TEXTURE0+se);const ke=r.get(ye);if(ye.version!==ke.__version||pe===!0){if(t.activeTexture(s.TEXTURE0+se),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ce=It.getPrimaries(It.workingColorSpace),Pe=w.colorSpace===es?null:It.getPrimaries(w.colorSpace),Se=w.colorSpace===es||ce===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let _e=D(w.image,!1,o.maxTextureSize);_e=Ve(w,_e);const De=l.convert(w.format,w.colorSpace),B=l.convert(w.type);let xe=U(w.internalFormat,De,B,w.normalized,w.colorSpace,w.isVideoTexture);lt(Re,w);let ge;const Oe=w.mipmaps,le=w.isVideoTexture!==!0,ie=ke.__version===void 0||pe===!0,Le=ye.dataReady,we=R(w,_e);if(w.isDepthTexture)xe=T(w.format===ns,w.type),ie&&(le?t.texStorage2D(s.TEXTURE_2D,1,xe,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,xe,_e.width,_e.height,0,De,B,null));else if(w.isDataTexture)if(Oe.length>0){le&&ie&&t.texStorage2D(s.TEXTURE_2D,we,xe,Oe[0].width,Oe[0].height);for(let ce=0,Pe=Oe.length;ce<Pe;ce++)ge=Oe[ce],le?Le&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,ge.width,ge.height,De,B,ge.data):t.texImage2D(s.TEXTURE_2D,ce,xe,ge.width,ge.height,0,De,B,ge.data);w.generateMipmaps=!1}else le?(ie&&t.texStorage2D(s.TEXTURE_2D,we,xe,_e.width,_e.height),Le&&Yt(w,_e,De,B)):t.texImage2D(s.TEXTURE_2D,0,xe,_e.width,_e.height,0,De,B,_e.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){le&&ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,xe,Oe[0].width,Oe[0].height,_e.depth);for(let ce=0,Pe=Oe.length;ce<Pe;ce++)if(ge=Oe[ce],w.format!==sr)if(De!==null)if(le){if(Le)if(w.layerUpdates.size>0){const Se=P0(ge.width,ge.height,w.format,w.type);for(const Me of w.layerUpdates){const Ze=ge.data.subarray(Me*Se/ge.data.BYTES_PER_ELEMENT,(Me+1)*Se/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,Me,ge.width,ge.height,1,De,Ze)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,ge.width,ge.height,_e.depth,De,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,xe,ge.width,ge.height,_e.depth,0,ge.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Le&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,ge.width,ge.height,_e.depth,De,B,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,xe,ge.width,ge.height,_e.depth,0,De,B,ge.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{le&&ie&&t.texStorage2D(s.TEXTURE_2D,we,xe,Oe[0].width,Oe[0].height);for(let ce=0,Pe=Oe.length;ce<Pe;ce++)ge=Oe[ce],w.format!==sr?De!==null?le?Le&&t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,ge.width,ge.height,De,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,xe,ge.width,ge.height,0,ge.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Le&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,ge.width,ge.height,De,B,ge.data):t.texImage2D(s.TEXTURE_2D,ce,xe,ge.width,ge.height,0,De,B,ge.data)}else if(w.isDataArrayTexture)if(le){if(ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,xe,_e.width,_e.height,_e.depth),Le)if(w.layerUpdates.size>0){const ce=P0(_e.width,_e.height,w.format,w.type);for(const Pe of w.layerUpdates){const Se=_e.data.subarray(Pe*ce/_e.data.BYTES_PER_ELEMENT,(Pe+1)*ce/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,_e.width,_e.height,1,De,B,Se)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,De,B,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,_e.width,_e.height,_e.depth,0,De,B,_e.data);else if(w.isData3DTexture)le?(ie&&t.texStorage3D(s.TEXTURE_3D,we,xe,_e.width,_e.height,_e.depth),Le&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,De,B,_e.data)):t.texImage3D(s.TEXTURE_3D,0,xe,_e.width,_e.height,_e.depth,0,De,B,_e.data);else if(w.isFramebufferTexture){if(ie)if(le)t.texStorage2D(s.TEXTURE_2D,we,xe,_e.width,_e.height);else{let ce=_e.width,Pe=_e.height;for(let Se=0;Se<we;Se++)t.texImage2D(s.TEXTURE_2D,Se,xe,ce,Pe,0,De,B,null),ce>>=1,Pe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const ce=s.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),_e.parentNode!==ce){ce.appendChild(_e),M.add(w),ce.onpaint=Pe=>{const Se=Pe.changedElements;for(const Me of M)Se.includes(Me.image)&&(Me.needsUpdate=!0)},ce.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,_e);else{const Se=s.RGBA,Me=s.RGBA,Ze=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Se,Me,Ze,_e)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(le&&ie){const ce=je(Oe[0]);t.texStorage2D(s.TEXTURE_2D,we,xe,ce.width,ce.height)}for(let ce=0,Pe=Oe.length;ce<Pe;ce++)ge=Oe[ce],le?Le&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,De,B,ge):t.texImage2D(s.TEXTURE_2D,ce,xe,De,B,ge);w.generateMipmaps=!1}else if(le){if(ie){const ce=je(_e);t.texStorage2D(s.TEXTURE_2D,we,xe,ce.width,ce.height)}Le&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,B,_e)}else t.texImage2D(s.TEXTURE_2D,0,xe,De,B,_e);k(w)&&w.mipmapsAutoUpdate===!0&&L(Re),ke.__version=ye.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function $t(I,w,se){if(w.image.length!==6)return;const Re=St(I,w),pe=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+se);const ye=r.get(pe);if(pe.version!==ye.__version||Re===!0){t.activeTexture(s.TEXTURE0+se);const ke=It.getPrimaries(It.workingColorSpace),me=w.colorSpace===es?null:It.getPrimaries(w.colorSpace),_e=w.colorSpace===es||ke===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const De=w.isCompressedTexture||w.image[0].isCompressedTexture,B=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let Me=0;Me<6;Me++)!De&&!B?xe[Me]=D(w.image[Me],!0,o.maxCubemapSize):xe[Me]=B?w.image[Me].image:w.image[Me],xe[Me]=Ve(w,xe[Me]);const ge=xe[0],Oe=l.convert(w.format,w.colorSpace),le=l.convert(w.type);let ie=U(w.internalFormat,Oe,le,w.normalized,w.colorSpace);const Le=w.isVideoTexture!==!0,we=ye.__version===void 0||Re===!0,ce=pe.dataReady;let Pe=R(w,ge);lt(s.TEXTURE_CUBE_MAP,w);let Se;if(w.isDepthTexture){if(ie=T(w.format===ns,w.type),we)if(Le)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ie,ge.width,ge.height);else for(let Me=0;Me<6;Me++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ie,ge.width,ge.height,0,Oe,le,null)}else if(De){Le&&we&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ie,ge.width,ge.height);for(let Me=0;Me<6;Me++){Se=xe[Me].mipmaps;for(let Ze=0;Ze<Se.length;Ze++){const ct=Se[Ze];w.format!==sr?Oe!==null?Le?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,ct.width,ct.height,Oe,ct.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,ie,ct.width,ct.height,0,ct.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,0,0,ct.width,ct.height,Oe,le,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze,ie,ct.width,ct.height,0,Oe,le,ct.data)}}}else{if(Se=w.mipmaps,Le&&we){Se.length>0&&Pe++;const Me=je(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ie,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(B){Le?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,xe[Me].width,xe[Me].height,Oe,le,xe[Me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ie,xe[Me].width,xe[Me].height,0,Oe,le,xe[Me].data);for(let Ze=0;Ze<Se.length;Ze++){const Pt=Se[Ze].image[Me].image;Le?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,Pt.width,Pt.height,Oe,le,Pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,ie,Pt.width,Pt.height,0,Oe,le,Pt.data)}}else{Le?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Oe,le,xe[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ie,Oe,le,xe[Me]);for(let Ze=0;Ze<Se.length;Ze++){const ct=Se[Ze];Le?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,0,0,Oe,le,ct.image[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ze+1,ie,Oe,le,ct.image[Me])}}}k(w)&&w.mipmapsAutoUpdate===!0&&L(s.TEXTURE_CUBE_MAP),ye.__version=pe.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ut(I,w,se,Re,pe,ye){const ke=l.convert(se.format,se.colorSpace),me=l.convert(se.type),_e=U(se.internalFormat,ke,me,se.normalized,se.colorSpace),De=r.get(w),B=r.get(se);if(B.__renderTarget=w,!De.__hasExternalTextures){const xe=Math.max(1,w.width>>ye),ge=Math.max(1,w.height>>ye);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,ye,_e,xe,ge,w.depth,0,ke,me,null):t.texImage2D(pe,ye,_e,xe,ge,0,ke,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Ae(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,pe,B.__webglTexture,0,ht(w)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Re,pe,B.__webglTexture,ye),t.bindFramebuffer(s.FRAMEBUFFER,null)}function En(I,w,se){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){const Re=w.depthTexture,pe=Re&&Re.isDepthTexture?Re.type:null,ye=T(w.stencilBuffer,pe),ke=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ae(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht(w),ye,w.width,w.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht(w),ye,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ye,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,I)}else{const Re=w.textures;for(let pe=0;pe<Re.length;pe++){const ye=Re[pe],ke=l.convert(ye.format,ye.colorSpace),me=l.convert(ye.type),_e=U(ye.internalFormat,ke,me,ye.normalized,ye.colorSpace);Ae(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht(w),_e,w.width,w.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht(w),_e,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,_e,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ht(I,w,se){const Re=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(w.depthTexture);pe.__renderTarget=w;const ye=Re?w.depthTexture.image[0]:w.depthTexture.image;(!pe.__webglTexture||ye.width!==w.width||ye.height!==w.height)&&(ye.width=w.width,ye.height=w.height,w.depthTexture.needsUpdate=!0),Re?Ee(w.depthTexture,0):Te(w.depthTexture,0);const ke=pe.__webglTexture,me=ht(w),_e=Re?s.TEXTURE_CUBE_MAP_POSITIVE_X+se:s.TEXTURE_2D,De=w.depthTexture.format===ns?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===rs)Ae(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,De,_e,ke,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,De,_e,ke,0);else if(w.depthTexture.format===ns)Ae(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,De,_e,ke,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,De,_e,ke,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function on(I){const w=r.get(I),se=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const Re=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Re){const pe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Re.removeEventListener("dispose",pe)};Re.addEventListener("dispose",pe),w.__depthDisposeCallback=pe}w.__boundDepthTexture=Re}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(se)for(let Re=0;Re<6;Re++)Ht(w.__webglFramebuffer[Re],I,Re);else I.texture.mipmaps.length>0?Ht(w.__webglFramebuffer[0],I,0):Ht(w.__webglFramebuffer,I,0);else if(se){w.__webglDepthbuffer=[];for(let Re=0;Re<6;Re++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Re]),w.__webglDepthbuffer[Re]===void 0)w.__webglDepthbuffer[Re]=s.createRenderbuffer(),En(w.__webglDepthbuffer[Re],I,!1);else{const pe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=w.__webglDepthbuffer[Re];s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ye)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),En(w.__webglDepthbuffer,I,!1);else{const pe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ye)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(I,w,se){const Re=r.get(I);w!==void 0&&Ut(Re.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&on(I)}function $e(I){const w=I.texture,se=r.get(I),Re=r.get(w);I.addEventListener("dispose",Z),X(I);const pe=I.textures,ye=I.isWebGLCubeRenderTarget===!0,ke=pe.length>1;if(ke||(Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture()),Re.__version=w.version,u.memory.textures++),ye){se.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps.length>0){se.__webglFramebuffer[me]=[];for(let _e=0;_e<w.mipmaps.length;_e++)se.__webglFramebuffer[me][_e]=s.createFramebuffer()}else se.__webglFramebuffer[me]=s.createFramebuffer()}else{if(w.mipmaps.length>0){se.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)se.__webglFramebuffer[me]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(ke)for(let me=0,_e=pe.length;me<_e;me++){const De=r.get(pe[me]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&Ae(I)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let me=0;me<pe.length;me++){const _e=pe[me];se.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[me]);const De=l.convert(_e.format,_e.colorSpace),B=l.convert(_e.type),xe=U(_e.internalFormat,De,B,_e.normalized,_e.colorSpace,I.isXRRenderTarget===!0),ge=ht(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,xe,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,se.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),En(se.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){t.bindTexture(s.TEXTURE_CUBE_MAP,Re.__webglTexture),lt(s.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)Ut(se.__webglFramebuffer[me][_e],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,_e);else Ut(se.__webglFramebuffer[me],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);k(w)?L(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(ke){for(let me=0,_e=pe.length;me<_e;me++){const De=pe[me],B=r.get(De);let xe=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,B.__webglTexture),lt(xe,De),Ut(se.__webglFramebuffer,I,De,s.COLOR_ATTACHMENT0+me,xe,0),k(De)&&L(xe)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,Re.__webglTexture),lt(me,w),w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)Ut(se.__webglFramebuffer[_e],I,w,s.COLOR_ATTACHMENT0,me,_e);else Ut(se.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,me,0);k(w)?L(me):w.mipmaps.length>0&&s.texParameteri(me,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&on(I)}function V(I){const w=I.textures;for(let se=0,Re=w.length;se<Re;se++){const pe=w[se];if(k(pe)&&pe.mipmapsAutoUpdate===!0){const ye=F(I),ke=r.get(pe).__webglTexture;t.bindTexture(ye,ke),L(ye),t.unbindTexture()}}}const xt=[];function ut(I){if(I.samples>0){if(Ae(I)===!1){const w=I.textures,se=I.width,Re=I.height;let pe=s.COLOR_BUFFER_BIT;const ye=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=r.get(I),me=w.length>1;if(me)for(let De=0;De<w.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let De=0;De<w.length;De++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[De]);const B=r.get(w[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,B,0)}s.blitFramebuffer(0,0,se,Re,0,0,se,Re,pe,s.NEAREST),p===!0&&(xt.length=0,xt.push(s.COLOR_ATTACHMENT0+De),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&xt.push(ye),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let De=0;De<w.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,ke.__webglColorRenderbuffer[De]);const B=r.get(w[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,B,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&p){const w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ht(I){return Math.min(o.maxSamples,I.samples)}function Ae(I){const w=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function yt(I){const w=u.render.frame;_.get(I)!==w&&(_.set(I,w),I.update())}function Ve(I,w){const se=I.colorSpace,Re=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||se!==yc&&se!==es&&(It.getTransfer(se)===Kt?(Re!==sr||pe!==Ti)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",se)),w}function je(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=Ue,this.resetTextureUnits=J,this.getTextureUnits=O,this.setTextureUnits=re,this.setTexture2D=Te,this.setTexture2DArray=Ne,this.setTexture3D=ze,this.setTextureCube=Ee,this.rebindTextures=ve,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=on,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Ae,this.dispose=ee}function LE(s,e){function t(r,o=es){let l;const u=It.getTransfer(o);if(r===Ti)return s.UNSIGNED_BYTE;if(r===$d)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===xg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===yg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===vg)return s.BYTE;if(r===_g)return s.SHORT;if(r===wo)return s.UNSIGNED_SHORT;if(r===Yd)return s.INT;if(r===or)return s.UNSIGNED_INT;if(r===rr)return s.FLOAT;if(r===lr)return s.HALF_FLOAT;if(r===Sg)return s.ALPHA;if(r===Mg)return s.RGB;if(r===sr)return s.RGBA;if(r===rs)return s.DEPTH_COMPONENT;if(r===ns)return s.DEPTH_STENCIL;if(r===Tg)return s.RED;if(r===Qd)return s.RED_INTEGER;if(r===As)return s.RG;if(r===Jd)return s.RG_INTEGER;if(r===ef)return s.RGBA_INTEGER;if(r===dc||r===fc||r===pc||r===mc)if(u===Kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===dc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===dc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cd||r===ud||r===hd||r===dd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===cd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ud)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===dd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fd||r===pd||r===md||r===gd||r===vd||r===_c||r===_d)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===fd||r===pd)return u===Kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===md)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===gd)return l.COMPRESSED_R11_EAC;if(r===vd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===_c)return l.COMPRESSED_RG11_EAC;if(r===_d)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===xd||r===yd||r===Sd||r===Md||r===Td||r===Ed||r===wd||r===Cd||r===Ad||r===bd||r===Nd||r===Rd||r===Pd||r===Dd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===xd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Md)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Td)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ed)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ad)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dd)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ld||r===Id||r===Ud)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ld)return u===Kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Id)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ud)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Od||r===Fd||r===xc||r===kd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Od)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Fd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ea?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const IE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UE=`
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

}`;class OE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new kg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new bs({vertexShader:IE,fragmentShader:UE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Wi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FE extends os{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,m=null,_=null,M=null,v=null,S=null,E=null;const b=typeof XRWebGLBinding<"u",y=new OE,x={},D=t.getContextAttributes();let k=null,L=null;const F=[],U=[],T=new Xe;let R=null,X=null;const P=new ji;P.viewport=new gn;const G=new ji;G.viewport=new gn;const Z=[P,G],ne=new Xy;let H=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let Te=F[oe];return Te===void 0&&(Te=new bh,F[oe]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(oe){let Te=F[oe];return Te===void 0&&(Te=new bh,F[oe]=Te),Te.getGripSpace()},this.getHand=function(oe){let Te=F[oe];return Te===void 0&&(Te=new bh,F[oe]=Te),Te.getHandSpace()};function K(oe){const Te=U.indexOf(oe.inputSource);if(Te===-1)return;const Ne=F[Te];Ne!==void 0&&(Ne.update(oe.inputSource,oe.frame,m||u),Ne.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Q(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",$);for(let oe=0;oe<F.length;oe++){const Te=U[oe];Te!==null&&(U[oe]=null,F[oe].disconnect(Te))}H=null,ee=null,y.reset();for(const oe in x)delete x[oe];if(e.setRenderTarget(k),S=null,v=null,M=null,o=null,L=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),X!==null){const oe=X.camera;oe.fov=X.fov,oe.zoom=X.zoom,oe.updateProjectionMatrix(),X=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,r.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){d=oe,r.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(oe){m=oe},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return M===null&&b&&(M=new XRWebGLBinding(o,t)),M},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(k=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",$),D.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,ze=null,Ee=null;D.depth&&(Ee=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ne=D.stencil?ns:rs,ze=D.stencil?Ea:or);const Ke={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:l};M=this.getBinding(),v=M.createProjectionLayer(Ke),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new ar(v.textureWidth,v.textureHeight,{format:sr,type:Ti,depthTexture:new wa(v.textureWidth,v.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Ne={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,Ne),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new ar(S.framebufferWidth,S.framebufferHeight,{format:sr,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),Ue.setContext(o),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(oe){for(let Te=0;Te<oe.removed.length;Te++){const Ne=oe.removed[Te],ze=U.indexOf(Ne);ze>=0&&(U[ze]=null,F[ze].disconnect(Ne))}for(let Te=0;Te<oe.added.length;Te++){const Ne=oe.added[Te];let ze=U.indexOf(Ne);if(ze===-1){for(let Ke=0;Ke<F.length;Ke++)if(Ke>=U.length){U.push(Ne),ze=Ke;break}else if(U[Ke]===null){U[Ke]=Ne,ze=Ke;break}if(ze===-1)break}const Ee=F[ze];Ee&&Ee.connect(Ne)}}function Y(oe,Te){Te===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(Te.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let Te=oe.near,Ne=oe.far;y.texture!==null&&(y.depthNear>0&&(Te=y.depthNear),y.depthFar>0&&(Ne=y.depthFar)),ne.near=G.near=P.near=Te,ne.far=G.far=P.far=Ne,(H!==ne.near||ee!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),H=ne.near,ee=ne.far),ne.layers.mask=oe.layers.mask|6,P.layers.mask=ne.layers.mask&-5,G.layers.mask=ne.layers.mask&-3;const ze=oe.parent,Ee=ne.cameras;Y(ne,ze);for(let Ke=0;Ke<Ee.length;Ke++)Y(Ee[Ke],ze);ne.projectionMatrix.copy(P.projectionMatrix),ne.projectionMatrixInverse.copy(P.projectionMatrixInverse),X===null&&oe.isPerspectiveCamera&&(X={camera:oe,fov:oe.fov,zoom:oe.zoom}),J(oe,ne,ze)};function J(oe,Te,Ne){Ne===null?oe.matrix.copy(Te.matrixWorld):(oe.matrix.copy(Ne.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(Te.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(Te.projectionMatrix),oe.projectionMatrixInverse.copy(Te.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Bd*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(oe){p=oe,v!==null&&(v.fixedFoveation=oe),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ne)},this.getCameraTexture=function(oe){return x[oe]};let O=null;function re(oe,Te){if(_=Te.getViewerPose(m||u),E=Te,_!==null){const Ne=_.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let ze=!1;Ne.length!==ne.cameras.length&&(ne.cameras.length=0,ze=!0);for(let qe=0;qe<Ne.length;qe++){const lt=Ne[qe];let St=null;if(S!==null)St=S.getViewport(lt);else{const Yt=M.getViewSubImage(v,lt);St=Yt.viewport,qe===0&&(e.setRenderTargetTextures(L,Yt.colorTexture,Yt.depthStencilTexture),e.setRenderTarget(L))}let st=Z[qe];st===void 0&&(st=new ji,st.layers.enable(qe),st.viewport=new gn,Z[qe]=st),st.matrix.fromArray(lt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(lt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(St.x,St.y,St.width,St.height),qe===0&&(ne.matrix.copy(st.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),ze===!0&&ne.cameras.push(st)}const Ee=o.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){M=r.getBinding();const qe=M.getDepthInformation(Ne[0]);qe&&qe.isValid&&qe.texture&&y.init(qe,o.renderState)}if(Ee&&Ee.includes("camera-access")&&b){e.state.unbindTexture(),M=r.getBinding();for(let qe=0;qe<Ne.length;qe++){const lt=Ne[qe].camera;if(lt){let St=x[lt];St||(St=new kg,x[lt]=St);const st=M.getCameraImage(lt);St.sourceTexture=st}}}}for(let Ne=0;Ne<F.length;Ne++){const ze=U[Ne],Ee=F[Ne];ze!==null&&Ee!==void 0&&Ee.update(ze,Te,m||u)}O&&O(oe,Te),Te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Te}),E=null}const Ue=new jg;Ue.setAnimationLoop(re),this.setAnimationLoop=function(oe){O=oe},this.dispose=function(){}}}const kE=new Jt,tv=new _t;tv.set(-1,0,0,0,1,0,0,0,1);function zE(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Vg(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,D,k,L){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(y,x):x.isMeshLambertMaterial?(l(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(y,x),M(y,x)):x.isMeshPhongMaterial?(l(y,x),_(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,L)):x.isMeshMatcapMaterial?(l(y,x),E(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),b(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?p(y,x,D,k):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===pi&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===pi&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),k=D.envMap,L=D.envMapRotation;k&&(y.envMap.value=k,y.envMapRotation.value.setFromMatrix4(kE.makeRotationFromEuler(L)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(tv),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,D,k){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=k*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function M(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,D){y.ior.value=x.ior,x.diffuseRoughness>0&&(y.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===pi&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.retroreflectivity>0&&(y.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function b(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function BE(s,e,t,r){let o={},l={};function u(D,k){const L=k.program;r.uniformBlockBinding(D,L,o[D.id])}function d(D,k){let L=o[D.id];L===void 0&&(E(D),L=p(D),o[D.id]=L,D.addEventListener("dispose",y));const F=k.program;r.updateUBOMapping(D,F);const U=e.render.frame;l[D.id]!==U&&(m(D),l[D.id]=U)}function p(D){const k=s.createBuffer(),L=D.__size,F=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,k),s.bufferData(s.UNIFORM_BUFFER,L,F),s.bindBuffer(s.UNIFORM_BUFFER,null),k}function m(D){const k=o[D.id],L=D.uniforms,F=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,k);for(let U=0,T=L.length;U<T;U++){const R=L[U];if(Array.isArray(R))for(let X=0,P=R.length;X<P;X++)_(R[X],U,X,F);else _(R,U,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(D,k,L,F){if(v(D,k,L,F)===!0){const U=D.__offset,T=D.value;if(Array.isArray(T)){let R=0;for(let X=0;X<T.length;X++){const P=T[X],G=b(P,!0);M(P,D.__data,R),R+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else M(T,D.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,U,D.__data)}}function M(D,k,L){typeof D=="number"||typeof D=="boolean"?k[L]=D:D.isMatrix3?(k[L]=D.elements[0],k[L+1]=D.elements[1],k[L+2]=D.elements[2],k[L+3]=0,k[L+4]=D.elements[3],k[L+5]=D.elements[4],k[L+6]=D.elements[5],k[L+7]=0,k[L+8]=D.elements[6],k[L+9]=D.elements[7],k[L+10]=D.elements[8],k[L+11]=0):ArrayBuffer.isView(D)?k.set(D.subarray(0,k.length-L),L):D.toArray(k,L)}function v(D,k,L,F){const U=D.value,T=k+"_"+L;if(Array.isArray(U)){F[T]===void 0&&(F[T]=[]);const R=F[T];let X=!1;for(let P=0;P<U.length;P++)S(U[P],R,P)===!0&&(X=!0);return X}return S(U,F,T)}function S(D,k,L){if(k[L]===void 0)return typeof D=="number"||typeof D=="boolean"?k[L]=D:ArrayBuffer.isView(D)?k[L]=D.slice():k[L]=D.clone(),!0;{const F=k[L];if(typeof D=="number"||typeof D=="boolean"){if(F!==D)return k[L]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(F.equals(D)===!1)return F.copy(D),!0}}return!1}function E(D){const k=D.uniforms;let L=0;const F=16;for(let T=0,R=k.length;T<R;T++){const X=Array.isArray(k[T])?k[T]:[k[T]];for(let P=0,G=X.length;P<G;P++){const Z=X[P],ne=Array.isArray(Z.value)?Z.value:[Z.value],H=Array.isArray(k[T])||Array.isArray(Z.value);let ee=L;for(let Q=0,$=ne.length;Q<$;Q++){const Y=ne[Q],J=b(Y,H),O=L%F,re=O%J.boundary,Ue=O+re;L+=re,Ue!==0&&F-Ue<J.storage&&(L+=F-Ue),Q===0&&(ee=L),L+=J.storage}const K=Z.type==="int"?Int32Array:Z.type==="uint"?Uint32Array:Float32Array;Z.__data=new K((L-ee)/Float32Array.BYTES_PER_ELEMENT),Z.__offset=ee}}const U=L%F;return U>0&&(L+=F-U),D.__size=L,D.__cache={},this}function b(D,k){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=16,L.storage=48):D.isMatrix4?(L.boundary=16,L.storage=64):D.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(L.boundary=16,L.storage=D.byteLength):mt("WebGLRenderer: Unsupported uniform value type.",D),k===!0&&(L.boundary=16,L.storage=Math.ceil(L.storage/16)*16),L}function y(D){const k=D.target;k.removeEventListener("dispose",y),s.deleteBuffer(o[k.id]),delete o[k.id],delete l[k.id]}function x(){for(const D in o)s.deleteBuffer(o[D]);o={},l={}}return{bind:u,update:d,dispose:x}}const HE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let tr=null;function VE(){return tr===null&&(tr=new gy(HE,16,16,As,lr),tr.name="DFG_LUT",tr.minFilter=si,tr.magFilter=si,tr.wrapS=wr,tr.wrapT=wr,tr.generateMipmaps=!1,tr.needsUpdate=!0),tr}class GE{constructor(e={}){const{canvas:t=Vx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:v=!1,outputBufferType:S=Ti}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const b=S,y=new Set([ef,Jd,Qd]),x=new Set([Ti,or,wo,Ea,$d,Zd]),D=new Uint32Array(4),k=new Int32Array(4),L={textures:[],min:[],max:[],resolution:[]};let F=null,U=null;const T=[],R=[];let X=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let G=!1,Z=null,ne=null,H=null,ee=null;this._outputColorSpace=Di;let K=0,Q=0,$=null,Y=-1,J=null;const O=new gn,re=new gn;let Ue=null;const oe=new At(0);let Te=0,Ne=t.width,ze=t.height,Ee=1,Ke=null,gt=null;const qe=new gn(0,0,Ne,ze),lt=new gn(0,0,Ne,ze);let St=!1;const st=new Ao,Yt=new rf;let tn=!1,$t=!1;const Ut=new Jt,En=new N,Ht=new gn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function $e(){return $===null?Ee:1}let V=r;function xt(A,W){return t.getContext(A,W)}let ut,ht,Ae,yt,Ve,je,I,w,se,Re,pe,ye,ke,me,_e,De,B,xe,ge,Oe,le,ie,Le;try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kd}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Me,!1),V===null){const W="webgl2";if(V=xt(W,A),V===null)throw xt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}we()}catch(A){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ft("WebGLRenderer: "+A.message),A}function we(){ut=new XM(V),ut.init(),le=new LE(V,ut),ht=new UM(V,ut,e,le),Ae=new PE(V,ut),ht.reversedDepthBuffer&&v&&Ae.buffers.depth.setReversed(!0),ne=V.createFramebuffer(),H=V.createFramebuffer(),ee=V.createFramebuffer(),yt=new YM(V),Ve=new vE,je=new DE(V,ut,Ae,Ve,ht,le,yt),I=new jM(P),w=new Zy(V),ie=new LM(V,w),se=new KM(V,w,yt,ie),Re=new ZM(V,se,w,ie,yt),xe=new $M(V,ht,je),_e=new OM(Ve),pe=new gE(P,I,ut,ht,ie,_e),ye=new zE(P,Ve),ke=new xE,me=new wE(ut),B=new DM(P,I,Ae,Re,E,p),De=new RE(P,Re,ht),Le=new BE(V,yt,ht,Ae),ge=new IM(V,ut,yt),Oe=new qM(V,ut,yt),yt.programs=pe.programs,P.capabilities=ht,P.extensions=ut,P.properties=Ve,P.renderLists=ke,P.shadowMap=De,P.state=Ae,P.info=yt}b!==Ti&&(X=new JM(b,t.width,t.height,d,o,l));const ce=new FE(P,V);this.xr=ce,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(Ne,ze,!1))},this.getSize=function(A){return A.set(Ne,ze)},this.setSize=function(A,W,he=!0){if(ce.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=A,ze=W,t.width=Math.floor(A*Ee),t.height=Math.floor(W*Ee),he===!0&&(t.style.width=A+"px",t.style.height=W+"px"),X!==null&&X.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(Ne*Ee,ze*Ee).floor()},this.setDrawingBufferSize=function(A,W,he){Ne=A,ze=W,Ee=he,t.width=Math.floor(A*he),t.height=Math.floor(W*he),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(b===Ti){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){mt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(qe)},this.setViewport=function(A,W,he,ae){A.isVector4?qe.set(A.x,A.y,A.z,A.w):qe.set(A,W,he,ae),Ae.viewport(O.copy(qe).multiplyScalar($e()).round())},this.getScissor=function(A){return A.copy(lt)},this.setScissor=function(A,W,he,ae){A.isVector4?lt.set(A.x,A.y,A.z,A.w):lt.set(A,W,he,ae),Ae.scissor(re.copy(lt).multiplyScalar($e()).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Ae.setScissorTest(St=A)},this.setOpaqueSort=function(A){Ke=A},this.setTransparentSort=function(A){gt=A},this.getClearColor=function(A){return A.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,he=!0){let ae=0;if(A){let te=!1;if($!==null){const He=$.texture.format;te=y.has(He)}if(te){const He=$.texture.type,Qe=x.has(He),Be=B.getClearColor(),Ge=B.getClearAlpha(),et=Be.r,pt=Be.g,Mt=Be.b;Qe?(D[0]=et,D[1]=pt,D[2]=Mt,D[3]=Ge,V.clearBufferuiv(V.COLOR,0,D)):(k[0]=et,k[1]=pt,k[2]=Mt,k[3]=Ge,V.clearBufferiv(V.COLOR,0,k))}else ae|=V.COLOR_BUFFER_BIT}W&&(ae|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ae|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&V.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),B.dispose(),ke.dispose(),me.dispose(),je.dispose(),Ve.dispose(),I.dispose(),Re.dispose(),se.dispose(),ie.dispose(),Le.dispose(),pe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Et),ce.removeEventListener("sessionend",hn),bt.stop()};function Pe(A){A.preventDefault(),Tc("WebGLRenderer: Context Lost."),G=!0}function Se(){Tc("WebGLRenderer: Context Restored."),G=!1;const A=yt.autoReset,W=De.enabled,he=De.autoUpdate,ae=De.needsUpdate,te=De.type;we(),yt.autoReset=A,De.enabled=W,De.autoUpdate=he,De.needsUpdate=ae,De.type=te}function Me(A){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ze(A){const W=A.target;W.removeEventListener("dispose",Ze),ct(W)}function ct(A){Pt(A),Ve.remove(A)}function Pt(A){const W=Ve.get(A).programs;W!==void 0&&(W.forEach(function(he){pe.releaseProgram(he)}),A.isShaderMaterial&&pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,he,ae,te,He){W===null&&(W=on);const Qe=te.isMesh&&te.matrixWorld.determinantAffine()<0,Be=ai(A,W,he,ae,te);Ae.setMaterial(ae,Qe);let Ge=he.index,et=1;if(ae.wireframe===!0){if(Ge=se.getWireframeAttribute(he),Ge===void 0)return;et=2}const pt=he.drawRange,Mt=he.attributes.position;let tt=pt.start*et,Nt=(pt.start+pt.count)*et;He!==null&&(tt=Math.max(tt,He.start*et),Nt=Math.min(Nt,(He.start+He.count)*et)),Ge!==null?(tt=Math.max(tt,0),Nt=Math.min(Nt,Ge.count)):Mt!=null&&(tt=Math.max(tt,0),Nt=Math.min(Nt,Mt.count));const cn=Nt-tt;if(cn<0||cn===1/0)return;ie.setup(te,ae,Be,he,Ge);let Xt,Gt=ge;if(Ge!==null&&(Xt=w.get(Ge),Gt=Oe,Gt.setIndex(Xt)),te.isMesh)ae.wireframe===!0?(Ae.setLineWidth(ae.wireframeLinewidth*$e()),Gt.setMode(V.LINES)):Gt.setMode(V.TRIANGLES);else if(te.isLine){let vn=ae.linewidth;vn===void 0&&(vn=1),Ae.setLineWidth(vn*$e()),te.isLineSegments?Gt.setMode(V.LINES):te.isLineLoop?Gt.setMode(V.LINE_LOOP):Gt.setMode(V.LINE_STRIP)}else te.isPoints?Gt.setMode(V.POINTS):te.isSprite&&Gt.setMode(V.TRIANGLES);if(te.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Gt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const vn=te._multiDrawStarts,nt=te._multiDrawCounts,wn=te._multiDrawCount,at=Ge?w.get(Ge).bytesPerElement:1,qi=Ve.get(ae).currentProgram.getUniforms();for(let Cn=0;Cn<wn;Cn++)qi.setValue(V,"_gl_DrawID",Cn),Gt.render(vn[Cn]/at,nt[Cn])}else if(te.isInstancedMesh)Gt.renderInstances(tt,cn,te.count);else if(he.isInstancedBufferGeometry){const vn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,nt=Math.min(he.instanceCount,vn);Gt.renderInstances(tt,cn,nt)}else Gt.render(tt,cn)};function jt(A,W,he,ae){Z!==null&&A.isNodeMaterial&&Z.setObject(ae,A),tn===!0&&_e.setState(A,he,!1),A.transparent===!0&&A.side===Xi&&A.forceSinglePass===!1?(A.side=pi,A.needsUpdate=!0,ln(A,W,ae),A.side=Cs,A.needsUpdate=!0,ln(A,W,ae),A.side=Xi):ln(A,W,ae)}this.compile=function(A,W,he=null){he===null&&(he=A),Z!==null&&Z.renderStart(A,W,he),U=me.get(he),U.init(W),R.push(U),he.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(U.pushLight(te),te.castShadow&&U.pushShadow(te))}),A!==he&&A.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(U.pushLight(te),te.castShadow&&U.pushShadow(te))}),U.setupLights(),Z!==null&&Z.updateLights(U.state.lightsArray),$t=this.localClippingEnabled,tn=_e.init(this.clippingPlanes,$t),tn===!0&&_e.setGlobalState(this.clippingPlanes,W),Z!==null&&De.render(U.state.shadowsArray,he,W);const ae=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const He=te.material;if(He)if(Array.isArray(He))for(let Qe=0;Qe<He.length;Qe++){const Be=He[Qe];jt(Be,he,W,te),ae.add(Be)}else jt(He,he,W,te),ae.add(He)}),U=R.pop(),Z!==null&&Z.renderEnd(),ae},this.compileAsync=function(A,W,he=null){const ae=this.compile(A,W,he);return new Promise(te=>{function He(){if(ae.forEach(function(Qe){const Ge=Ve.get(Qe).currentProgram;(Ge===void 0||Ge.isReady())&&ae.delete(Qe)}),ae.size===0){te(A);return}setTimeout(He,10)}ut.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Zt=null;function nn(A){Zt&&Zt(A)}function Et(){bt.stop()}function hn(){bt.start()}const bt=new jg;bt.setAnimationLoop(nn),typeof self<"u"&&bt.setContext(self),this.setAnimationLoop=function(A){Zt=A,ce.setAnimationLoop(A),A===null?bt.stop():bt.start()},ce.addEventListener("sessionstart",Et),ce.addEventListener("sessionend",hn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Z!==null&&Z.renderStart(A,W);const he=ce.enabled===!0&&ce.isPresenting===!0,ae=X!==null&&($===null||he)&&X.begin(P,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(W),W=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,W,$),U=me.get(A,R.length),U.init(W),U.state.textureUnits=je.getTextureUnits(),R.push(U),Ut.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?Yt.setFromArrayCamera(W):st.setFromProjectionMatrix(Ut,Ki,W.reversedDepth),$t=this.localClippingEnabled,tn=_e.init(this.clippingPlanes,$t),F=ke.get(A,T.length),F.init(),T.push(F),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){const Qe=P.xr.getDepthSensingMesh();Qe!==null&&dn(Qe,W,-1/0,P.sortObjects)}dn(A,W,0,P.sortObjects),F.finish(),Z!==null&&Z.updateLights(U.state.lightsArray),P.sortObjects===!0&&F.sort(Ke,gt),ve=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ve&&B.addToRenderList(F,A),this.info.autoReset===!0&&this.info.reset(),tn===!0&&_e.beginShadows();const te=U.state.shadowsArray;if(De.render(te,A,W),tn===!0&&_e.endShadows(),(ae&&X.hasRenderPass())===!1){const Qe=F.opaque,Be=F.transmissive;if(U.setupLights(),W.isArrayCamera){const Ge=W.cameras;if(Be.length>0)for(let et=0,pt=Ge.length;et<pt;et++){const Mt=Ge[et];kn(Qe,Be,A,Mt)}ve&&B.render(A);for(let et=0,pt=Ge.length;et<pt;et++){const Mt=Ge[et];rn(F,A,Mt,Mt.viewport)}}else Be.length>0&&kn(Qe,Be,A,W),ve&&B.render(A),rn(F,A,W)}$!==null&&Q===0&&(je.updateMultisampleRenderTarget($),je.updateRenderTargetMipmap($)),ae&&X.end(P),A.isScene===!0&&A.onAfterRender(P,A,W),ie.resetDefaultState(),Y=-1,J=null,R.pop(),R.length>0?(U=R[R.length-1],je.setTextureUnits(U.state.textureUnits),tn===!0&&_e.setGlobalState(P.clippingPlanes,U.state.camera)):U=null,T.pop(),T.length>0?F=T[T.length-1]:F=null,Z!==null&&Z.renderEnd()};function dn(A,W,he,ae){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)he=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){const Qe=W.isArrayCamera?Yt:st;if(!A.frustumCulled||A.intersectsFrustum(Qe)){ae&&Ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ut);const Be=Re.update(A),Ge=A.material;Ge.visible&&F.push(A,Be,Ge,he,Ht.z,null,W)}}else if(A.isMesh||A.isLine||A.isPoints){const Qe=W.isArrayCamera?Yt:st;if(!A.frustumCulled||A.intersectsFrustum(Qe)){const Be=Re.update(A),Ge=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ht.copy(A.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ht.copy(Be.boundingSphere.center)),Ht.applyMatrix4(A.matrixWorld).applyMatrix4(Ut)),Array.isArray(Ge)){const et=Be.groups;for(let pt=0,Mt=et.length;pt<Mt;pt++){const tt=et[pt],Nt=Ge[tt.materialIndex];Nt&&Nt.visible&&F.push(A,Be,Nt,he,Ht.z,tt,W)}}else Ge.visible&&F.push(A,Be,Ge,he,Ht.z,null,W)}}}const He=A.children;for(let Qe=0,Be=He.length;Qe<Be;Qe++)dn(He[Qe],W,he,ae)}function rn(A,W,he,ae){const{opaque:te,transmissive:He,transparent:Qe}=A;U.setupLightsView(he),tn===!0&&_e.setGlobalState(P.clippingPlanes,he),ae&&Ae.viewport(O.copy(ae)),te.length>0&&Vn(te,W,he),He.length>0&&Vn(He,W,he),Qe.length>0&&Vn(Qe,W,he),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function kn(A,W,he,ae){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ae.id]===void 0){const tt=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ae.id]=new ar(1,1,{generateMipmaps:!0,type:tt?lr:Ti,minFilter:ts,samples:Math.max(4,ht.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}const He=U.state.transmissionRenderTarget[ae.id],Qe=ae.viewport||O;He.setSize(Qe.z*P.transmissionResolutionScale,Qe.w*P.transmissionResolutionScale);const Be=P.getRenderTarget(),Ge=P.getActiveCubeFace(),et=P.getActiveMipmapLevel();P.setRenderTarget(He),P.getClearColor(oe),Te=P.getClearAlpha(),Te<1&&P.setClearColor(16777215,.5),P.clear(),ve&&B.render(he);const pt=P.toneMapping;P.toneMapping=Ar;const Mt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),U.setupLightsView(ae),tn===!0&&_e.setGlobalState(P.clippingPlanes,ae),Vn(A,he,ae),je.updateMultisampleRenderTarget(He),je.updateRenderTargetMipmap(He),ut.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Nt=0,cn=W.length;Nt<cn;Nt++){const Xt=W[Nt],{object:Gt,geometry:vn,material:nt,group:wn}=Xt;if(nt.side===Xi&&Gt.layers.test(ae.layers)){const at=nt.side;nt.side=pi,nt.needsUpdate=!0,mi(Gt,he,ae,vn,nt,wn),nt.side=at,nt.needsUpdate=!0,tt=!0}}tt===!0&&(je.updateMultisampleRenderTarget(He),je.updateRenderTargetMipmap(He))}P.setRenderTarget(Be,Ge,et),P.setClearColor(oe,Te),Mt!==void 0&&(ae.viewport=Mt),P.toneMapping=pt}function Vn(A,W,he){const ae=W.isScene===!0?W.overrideMaterial:null;for(let te=0,He=A.length;te<He;te++){const Qe=A[te],{object:Be,geometry:Ge,group:et}=Qe;let pt=Qe.material;pt.allowOverride===!0&&ae!==null&&(pt=ae),Be.layers.test(he.layers)&&mi(Be,W,he,Ge,pt,et)}}function mi(A,W,he,ae,te,He){Z!==null&&te.isNodeMaterial&&Z.setObject(A,te),A.onBeforeRender(P,W,he,ae,te,He),A.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(P,W,he,ae,A,He),te.transparent===!0&&te.side===Xi&&te.forceSinglePass===!1?(te.side=pi,te.needsUpdate=!0,P.renderBufferDirect(he,W,ae,te,A,He),te.side=Cs,te.needsUpdate=!0,P.renderBufferDirect(he,W,ae,te,A,He),te.side=Xi):P.renderBufferDirect(he,W,ae,te,A,He),A.onAfterRender(P,W,he,ae,te,He)}function Gn(A){let W=0;for(const he of A)he.texture!==null&&W++;return W}function ln(A,W,he){W.isScene!==!0&&(W=on);const ae=Ve.get(A),te=U.state.lights,He=U.state.shadowsArray,Qe=te.state.version,Be=pe.getParameters(A,te.state,He,W,he,U.state.lightProbeGridArray),Ge=pe.getProgramCacheKey(Be);let et=ae.programs;ae.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,ae.fog=W.fog;const pt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ae.envMap=I.get(A.envMap||ae.environment,pt),ae.envMapRotation=ae.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",Ze),et=new Map,ae.programs=et,ae.programVariants=new Map);let Mt=et.get(Ge);if(Mt!==void 0){if(ae.currentProgram===Mt&&ae.lightsStateVersion===Qe)return gi(A,Be),Mt}else Be.uniforms=pe.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,he,Be),A.onBeforeCompile(Be,P),Mt=pe.acquireProgram(Be,Ge),et.set(Ge,Mt),ae.uniforms=Be.uniforms;const tt=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(tt.clippingPlanes=_e.uniform),gi(A,Be),ae.needsLights=Wn(A),ae.lightsStateVersion=Qe,ae.needsLights&&(tt.ambientLightColor.value=te.state.ambient,tt.lightProbe.value=te.state.probe,tt.sunLights.value=te.state.sun,tt.sunLightShadows.value=te.state.sunShadow,tt.directionalLights.value=te.state.directional,tt.directionalLightShadows.value=te.state.directionalShadow,tt.spotLights.value=te.state.spot,tt.spotLightShadows.value=te.state.spotShadow,tt.rectAreaLights.value=te.state.rectArea,tt.ltc_1.value=te.state.rectAreaLTC1,tt.ltc_2.value=te.state.rectAreaLTC2,tt.pointLights.value=te.state.point,tt.pointLightShadows.value=te.state.pointShadow,tt.hemisphereLights.value=te.state.hemi,tt.sunShadowMatrix.value=te.state.sunShadowMatrix,tt.sunShadowCascade.value=te.state.sunShadowCascade,tt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,tt.spotLightMatrix.value=te.state.spotLightMatrix,tt.spotLightMap.value=te.state.spotLightMap,tt.pointShadowMatrix.value=te.state.pointShadowMatrix),ae.numLightProbeGrids=Gn(U.state.lightProbeGridArray),ae.currentProgram=Mt,ae.uniformsList=null,Mt}function fn(A,W,he,ae,te){const He=Ve.get(A),Qe=He.currentProgram.id+","+ae+","+te;let Be=He.programVariants.get(Qe);return Be===void 0?(Be=ln(A,W,he),He.programVariants.set(Qe,Be)):(He.currentProgram=Be,He.uniformsList=null,He.outputColorSpace=ae,He.toneMapping=te),Be}function Vt(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=vc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function gi(A,W){const he=Ve.get(A);he.outputColorSpace=W.outputColorSpace,he.batching=W.batching,he.batchingColor=W.batchingColor,he.instancing=W.instancing,he.instancingColor=W.instancingColor,he.instancingMorph=W.instancingMorph,he.skinning=W.skinning,he.morphTargets=W.morphTargets,he.morphNormals=W.morphNormals,he.morphColors=W.morphColors,he.morphTargetsCount=W.morphTargetsCount,he.numClippingPlanes=W.numClippingPlanes,he.numIntersection=W.numClipIntersection,he.vertexAlphas=W.vertexAlphas,he.vertexTangents=W.vertexTangents,he.toneMapping=W.toneMapping}function ai(A,W,he,ae,te){W.isScene!==!0&&(W=on),je.resetTextureUnits();const He=W.fog,Qe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?W.environment:null,Be=$===null?P.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:It.workingColorSpace,Ge=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,et=I.get(ae.envMap||Qe,Ge),pt=ae.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Mt=!!he.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),tt=!!he.morphAttributes.position,Nt=!!he.morphAttributes.normal,cn=!!he.morphAttributes.color;let Xt=Ar;ae.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Xt=P.toneMapping);const Gt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,vn=Gt!==void 0?Gt.length:0,nt=Ve.get(ae),wn=U.state.lights;if(tn===!0&&($t===!0||A!==J)){const zt=A===J&&ae.id===Y;_e.setState(ae,A,zt)}let at=!1,qi=!1;ae.version===nt.__version?nt.needsLights&&nt.lightsStateVersion!==wn.state.version||te.isBatchedMesh&&nt.batching===!1||!te.isBatchedMesh&&nt.batching===!0||te.isBatchedMesh&&nt.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&nt.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&nt.instancing===!1||!te.isInstancedMesh&&nt.instancing===!0||te.isSkinnedMesh&&nt.skinning===!1||!te.isSkinnedMesh&&nt.skinning===!0||te.isInstancedMesh&&nt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&nt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&nt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&nt.instancingMorph===!1&&te.morphTexture!==null||nt.envMap!==et||ae.fog===!0&&nt.fog!==He||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==_e.numPlanes||nt.numIntersection!==_e.numIntersection)||nt.vertexAlphas!==pt||nt.vertexTangents!==Mt||nt.morphTargets!==tt||nt.morphNormals!==Nt||nt.morphColors!==cn||nt.morphTargetsCount!==vn||nt.numLightProbeGrids!==Gn(U.state.lightProbeGridArray)?at=!0:(nt.outputColorSpace!==Be||nt.toneMapping!==Xt)&&(qi=!0):(at=!0,nt.__version=ae.version);let Cn=nt.currentProgram;(at===!0||qi===!0)&&(Cn=qi===!0?fn(ae,W,te,Be,Xt):ln(ae,W,te),Z&&ae.isNodeMaterial&&Z.onUpdateProgram(ae,Cn,nt));let Pr=!1,Ii=!1,Yi=!1;const Dt=Cn.getUniforms(),xn=nt.uniforms;if(Ae.useProgram(Cn.program)&&(Pr=!0,Ii=!0,Yi=!0),ae.id!==Y&&(Y=ae.id,Ii=!0),Pr||J!==A){Ae.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Dt.setValue(V,"projectionMatrix",A.projectionMatrix),Dt.setValue(V,"viewMatrix",A.matrixWorldInverse);const Qt=Dt.map.cameraPosition;Qt!==void 0&&Qt.setValue(V,En.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&Dt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Dt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,Ii=!0,Yi=!0)}if(nt.needsLights&&(wn.state.sunShadowMap.length>0&&Dt.setValue(V,"sunShadowMap",wn.state.sunShadowMap,je),wn.state.directionalShadowMap.length>0&&Dt.setValue(V,"directionalShadowMap",wn.state.directionalShadowMap,je),wn.state.spotShadowMap.length>0&&Dt.setValue(V,"spotShadowMap",wn.state.spotShadowMap,je),wn.state.pointShadowMap.length>0&&Dt.setValue(V,"pointShadowMap",wn.state.pointShadowMap,je)),te.isSkinnedMesh){Dt.setOptional(V,te,"bindMatrix"),Dt.setOptional(V,te,"bindMatrixInverse");const zt=te.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Dt.setValue(V,"boneTexture",zt.boneTexture,je))}te.isBatchedMesh&&(Dt.setOptional(V,te,"batchingTexture"),Dt.setValue(V,"batchingTexture",te._matricesTexture,je),Dt.setOptional(V,te,"batchingIdTexture"),Dt.setValue(V,"batchingIdTexture",te._indirectTexture,je),Dt.setOptional(V,te,"batchingColorTexture"),te._colorsTexture!==null&&Dt.setValue(V,"batchingColorTexture",te._colorsTexture,je));const jn=he.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&xe.update(te,he,Cn),(Ii||nt.receiveShadow!==te.receiveShadow)&&(nt.receiveShadow=te.receiveShadow,Dt.setValue(V,"receiveShadow",te.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&W.environment!==null&&(xn.envMapIntensity.value=W.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=VE()),Ii){if(Dt.setValue(V,"toneMappingExposure",P.toneMappingExposure),nt.needsLights&&Li(xn,Yi),He&&ae.fog===!0&&ye.refreshFogUniforms(xn,He),ye.refreshMaterialUniforms(xn,ae,Ee,ze,U.state.transmissionRenderTarget[A.id]),nt.needsLights&&nt.numLightProbeGrids>0){const zt=L;let Qt=0;for(const Ln of U.state.lightProbeGridArray)Ln.texture!==null&&(zt.textures[Qt]=Ln.texture,zt.min[Qt]=Ln.boundingBox.min,zt.max[Qt]=Ln.boundingBox.max,zt.resolution[Qt]=Ln.resolution,Qt++);for(const Ln in zt)zt[Ln].length=Qt;xn.probesSH.value=zt.textures,xn.probesMin.value=zt.min,xn.probesMax.value=zt.max,xn.probesResolution.value=zt.resolution}vc.upload(V,Vt(nt),xn,je)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(vc.upload(V,Vt(nt),xn,je),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Dt.setValue(V,"center",te.center),Dt.setValue(V,"modelViewMatrix",te.modelViewMatrix),Dt.setValue(V,"normalMatrix",te.normalMatrix),Dt.setValue(V,"modelMatrix",te.matrixWorld),ae.uniformsGroups!==void 0){const zt=ae.uniformsGroups;for(let Qt=0,Ln=zt.length;Qt<Ln;Qt++){const Dr=zt[Qt];Le.update(Dr,Cn),Le.bind(Dr,Cn)}}return Cn}function Li(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.sunLights.needsUpdate=W,A.sunLightShadows.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Wn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,W,he){const ae=Ve.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Ve.get(A.texture).__webglTexture=W,Ve.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:he,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const he=Ve.get(A);he.__webglFramebuffer=W,he.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,he=0){$=A,K=W,Q=he;let ae=null,te=!1,He=!1;if(A){const Be=Ve.get(A);if(Be.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(V.FRAMEBUFFER,Be.__webglFramebuffer),O.copy(A.viewport),re.copy(A.scissor),Ue=A.scissorTest,Ae.viewport(O),Ae.scissor(re),Ae.setScissorTest(Ue),Y=-1;return}else if(Be.__webglFramebuffer===void 0)je.setupRenderTarget(A);else if(Be.__hasExternalTextures)je.rebindTextures(A,Ve.get(A.texture).__webglTexture,Ve.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const pt=A.depthTexture;if(Be.__boundDepthTexture!==pt){if(pt!==null&&Ve.has(pt)&&(A.width!==pt.image.width||A.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(A)}}const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(He=!0);const et=Ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[W])?ae=et[W][he]:ae=et[W],te=!0):A.samples>0&&je.useMultisampledRTT(A)===!1?ae=Ve.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?ae=et[he]:ae=et,O.copy(A.viewport),re.copy(A.scissor),Ue=A.scissorTest}else O.copy(qe).multiplyScalar(Ee).floor(),re.copy(lt).multiplyScalar(Ee).floor(),Ue=St;if(he!==0&&(ae=ne),Ae.bindFramebuffer(V.FRAMEBUFFER,ae)&&Ae.drawBuffers(A,ae),Ae.viewport(O),Ae.scissor(re),Ae.setScissorTest(Ue),te){const Be=Ve.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,he)}else if(He){const Be=W;for(let Ge=0;Ge<A.textures.length;Ge++){const et=Ve.get(A.textures[Ge]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ge,et.__webglTexture,he,Be)}}else if(A!==null&&he!==0){const Be=Ve.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Be.__webglTexture,he)}Y=-1};function Rr(A){const W=Ve.get(A);return(W.__readFormat!==A.format||W.__readType!==A.type)&&(W.__readFormat=A.format,W.__readType=A.type,W.__formatReadable=ht.textureFormatReadable(A.format),W.__typeReadable=ht.textureTypeReadable(A.type)),W}this.readRenderTargetPixels=function(A,W,he,ae,te,He,Qe,Be=0){if(!(A&&A.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Qe!==void 0&&(Ge=Ge[Qe],Array.isArray(Ge)&&(Ge=Ge[0])),Ge){Ae.bindFramebuffer(V.FRAMEBUFFER,Ge);try{const et=A.textures[Be],pt=et.format,Mt=et.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Be);const tt=Rr(et);if(tt.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(tt.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ae&&he>=0&&he<=A.height-te&&V.readPixels(W,he,ae,te,le.convert(pt),le.convert(Mt),He)}finally{const et=$!==null?Ve.get($).__webglFramebuffer:null;Ae.bindFramebuffer(V.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(A,W,he,ae,te,He,Qe,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Qe!==void 0&&(Ge=Ge[Qe],Array.isArray(Ge)&&(Ge=Ge[0])),Ge)if(W>=0&&W<=A.width-ae&&he>=0&&he<=A.height-te){Ae.bindFramebuffer(V.FRAMEBUFFER,Ge);const et=A.textures[Be],pt=et.format,Mt=et.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Be);const tt=Rr(et);if(tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Nt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Nt),V.bufferData(V.PIXEL_PACK_BUFFER,He.byteLength,V.STREAM_READ),V.readPixels(W,he,ae,te,le.convert(pt),le.convert(Mt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const cn=$!==null?Ve.get($).__webglFramebuffer:null;Ae.bindFramebuffer(V.FRAMEBUFFER,cn);const Xt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Gx(V,Xt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Nt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,He),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Nt),V.deleteSync(Xt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,he=0){const ae=Math.pow(2,-he),te=Math.floor(A.image.width*ae),He=Math.floor(A.image.height*ae),Qe=W!==null?W.x:0,Be=W!==null?W.y:0;je.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,he,0,0,Qe,Be,te,He),Ae.unbindTexture()},this.copyTextureToTexture=function(A,W,he=null,ae=null,te=0,He=0){let Qe,Be,Ge,et,pt,Mt,tt,Nt,cn;const Xt=A.isCompressedTexture?A.mipmaps[He]:A.image;if(he!==null)Qe=he.max.x-he.min.x,Be=he.max.y-he.min.y,Ge=he.isBox3?he.max.z-he.min.z:1,et=he.min.x,pt=he.min.y,Mt=he.isBox3?he.min.z:0;else{const Dt=Math.pow(2,-te);Qe=Math.floor(Xt.width*Dt),Be=Math.floor(Xt.height*Dt),A.isDataArrayTexture?Ge=Xt.depth:A.isData3DTexture?Ge=Math.floor(Xt.depth*Dt):Ge=1,et=0,pt=0,Mt=0}ae!==null?(tt=ae.x,Nt=ae.y,cn=ae.z):(tt=0,Nt=0,cn=0);const Gt=le.convert(W.format),vn=le.convert(W.type);let nt;W.isData3DTexture?(je.setTexture3D(W,0),nt=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(je.setTexture2DArray(W,0),nt=V.TEXTURE_2D_ARRAY):(je.setTexture2D(W,0),nt=V.TEXTURE_2D),Ae.activeTexture(V.TEXTURE0),Ae.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),Ae.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Ae.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const wn=Ae.getParameter(V.UNPACK_ROW_LENGTH),at=Ae.getParameter(V.UNPACK_IMAGE_HEIGHT),qi=Ae.getParameter(V.UNPACK_SKIP_PIXELS),Cn=Ae.getParameter(V.UNPACK_SKIP_ROWS),Pr=Ae.getParameter(V.UNPACK_SKIP_IMAGES);Ae.pixelStorei(V.UNPACK_ROW_LENGTH,Xt.width),Ae.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Xt.height),Ae.pixelStorei(V.UNPACK_SKIP_PIXELS,et),Ae.pixelStorei(V.UNPACK_SKIP_ROWS,pt),Ae.pixelStorei(V.UNPACK_SKIP_IMAGES,Mt);const Ii=A.isDataArrayTexture||A.isData3DTexture,Yi=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Dt=Ve.get(A),xn=Ve.get(W),jn=Ve.get(Dt.__renderTarget),zt=Ve.get(xn.__renderTarget);Ae.bindFramebuffer(V.READ_FRAMEBUFFER,jn.__webglFramebuffer),Ae.bindFramebuffer(V.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Qt=0;Qt<Ge;Qt++)Ii&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.get(A).__webglTexture,te,Mt+Qt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.get(W).__webglTexture,He,cn+Qt)),V.blitFramebuffer(et,pt,et+Qe,pt+Be,tt,Nt,tt+Qe,Nt+Be,V.DEPTH_BUFFER_BIT,V.NEAREST);Ae.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||Ve.has(A)){const Dt=Ve.get(A),xn=Ve.get(W);Ae.bindFramebuffer(V.READ_FRAMEBUFFER,H),Ae.bindFramebuffer(V.DRAW_FRAMEBUFFER,ee);for(let jn=0;jn<Ge;jn++)Ii?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Dt.__webglTexture,te,Mt+jn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Dt.__webglTexture,te),Yi?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,xn.__webglTexture,He,cn+jn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,xn.__webglTexture,He),te!==0?V.blitFramebuffer(et,pt,et+Qe,pt+Be,tt,Nt,tt+Qe,Nt+Be,V.COLOR_BUFFER_BIT,V.NEAREST):Yi?V.copyTexSubImage3D(nt,He,tt,Nt,cn+jn,et,pt,Qe,Be):V.copyTexSubImage2D(nt,He,tt,Nt,et,pt,Qe,Be);Ae.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Yi?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(nt,He,tt,Nt,cn,Qe,Be,Ge,Gt,vn,Xt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(nt,He,tt,Nt,cn,Qe,Be,Ge,Gt,Xt.data):V.texSubImage3D(nt,He,tt,Nt,cn,Qe,Be,Ge,Gt,vn,Xt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,He,tt,Nt,Qe,Be,Gt,vn,Xt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,He,tt,Nt,Xt.width,Xt.height,Gt,Xt.data):V.texSubImage2D(V.TEXTURE_2D,He,tt,Nt,Qe,Be,Gt,vn,Xt);Ae.pixelStorei(V.UNPACK_ROW_LENGTH,wn),Ae.pixelStorei(V.UNPACK_IMAGE_HEIGHT,at),Ae.pixelStorei(V.UNPACK_SKIP_PIXELS,qi),Ae.pixelStorei(V.UNPACK_SKIP_ROWS,Cn),Ae.pixelStorei(V.UNPACK_SKIP_IMAGES,Pr),He===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&V.generateMipmap(nt),Ae.unbindTexture()},this.initRenderTarget=function(A){Ve.get(A).__webglFramebuffer===void 0&&je.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?je.setTextureCube(A,0):A.isData3DTexture?je.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?je.setTexture2DArray(A,0):je.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){K=0,Q=0,$=null,Ae.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}const J0={type:"change"},uf={type:"start"},nv={type:"end"},uc=new Lc,eg=new Er,WE=Math.cos(70*Kx.DEG2RAD),Nn=new N,fi=2*Math.PI,Wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qh=1e-6;class jE extends Yy{constructor(e,t=null){super(e,t),this.state=Wt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ya.ROTATE,MIDDLE:ya.DOLLY,RIGHT:ya.PAN},this.touches={ONE:_a.ROTATE,TWO:_a.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new ss,this._lastTargetPosition=new N,this._quat=new ss().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new R0,this._sphericalDelta=new R0,this._scale=1,this._panOffset=new N,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new N,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=KE.bind(this),this._onPointerDown=XE.bind(this),this._onPointerUp=qE.bind(this),this._onContextMenu=t2.bind(this),this._onMouseWheel=ZE.bind(this),this._onKeyDown=QE.bind(this),this._onTouchStart=JE.bind(this),this._onTouchMove=e2.bind(this),this._onMouseDown=YE.bind(this),this._onMouseMove=$E.bind(this),this._interceptControlDown=n2.bind(this),this._interceptControlUp=i2.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Wt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(J0),this.update(),this.state=Wt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Nn.copy(t).sub(this.target),Nn.applyQuaternion(this._quat),this._spherical.setFromVector3(Nn),this.autoRotate&&this.state===Wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=fi:r>Math.PI&&(r-=fi),o<-Math.PI?o+=fi:o>Math.PI&&(o-=fi),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Nn.setFromSpherical(this._spherical),Nn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=Nn.length();u=this._clampDistance(d*this._scale);const p=d-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const d=new N(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const m=new N(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),u=Nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(uc.origin.copy(this.object.position),uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uc.direction))<WE?this.object.lookAt(this.target):(eg.setFromNormalAndCoplanarPoint(this.object.up,this.target),uc.intersectPlane(eg,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Qh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qh||this._lastTargetPosition.distanceToSquared(this.target)>Qh?(this.dispatchEvent(J0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fi/60*this.autoRotateSpeed*e:fi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nn.setFromMatrixColumn(t,0),Nn.multiplyScalar(-e),this._panOffset.add(Nn)}_panUp(e,t){this.screenSpacePanning===!0?Nn.setFromMatrixColumn(t,1):(Nn.setFromMatrixColumn(t,0),Nn.crossVectors(this.object.up,Nn)),Nn.multiplyScalar(e),this._panOffset.add(Nn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Nn.copy(o).sub(this.target);let l=Nn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/t.clientHeight),this._rotateUp(fi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/t.clientHeight),this._rotateUp(fi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function XE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function KE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function qE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nv),this.state=Wt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function YE(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ya.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Wt.DOLLY;break;case ya.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Wt.ROTATE}break;case ya.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Wt.PAN}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(uf)}function $E(s){switch(this.state){case Wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ZE(s){this.enabled===!1||this.enableZoom===!1||this.state!==Wt.NONE||(s.preventDefault(),this.dispatchEvent(uf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(nv))}function QE(s){this.enabled!==!1&&this._handleKeyDown(s)}function JE(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case _a.ROTATE:if(this.enableRotate===!1){this.state=Wt.NONE;break}this._handleTouchStartRotate(s),this.state=Wt.TOUCH_ROTATE;break;case _a.PAN:if(this.enablePan===!1){this.state=Wt.NONE;break}this._handleTouchStartPan(s),this.state=Wt.TOUCH_PAN;break;default:this.state=Wt.NONE}break;case 2:switch(this.touches.TWO){case _a.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Wt.TOUCH_DOLLY_PAN;break;case _a.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Wt.TOUCH_DOLLY_ROTATE;break;default:this.state=Wt.NONE}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(uf)}function e2(s){switch(this._trackPointer(s),this.state){case Wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Wt.NONE}}function t2(s){this.enabled!==!1&&s.preventDefault()}function n2(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function i2(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tg({theme:s="dark",heatmap:e="pressure",assetsLayer:t={pipes:!0,pipesPrimary:!0,pipesSecondary:!0,pipesTertiary:!0,pipesService:!0,buildings:!0,hydrants:!0,streetLabels:!0,valves:!0,tanks:!0,sensors:!0,contour:!0},closedValves:r={},onToggleValve:o,simTime:l=14,currentSim:u={label:"14:00 - Giờ bình thường",flow:12580,pressure:3.32},compact:d=!1,viewMode:p="3d",onSelectAsset:m}){const _=wt.useRef(null),M=wt.useRef(null),v=wt.useRef(null),S=wt.useRef(null),E=wt.useRef(null),b=wt.useRef(null),y=wt.useRef([]),x=wt.useRef([]),[D,k]=wt.useState(null),L=Object.entries(r).filter(([T,R])=>R);wt.useEffect(()=>{const T=_.current;if(!T)return;const R=T.clientWidth||900,X=T.clientHeight||560,P=s==="dark",G=p==="xray",Z=p==="2d",ne=new oy;M.current=ne,ne.background=new At(P?792880:16317180),ne.fog=null;const H=new ji(Z?36:42,R/X,2,8500);Z?H.position.set(0,2200,.1):H.position.set(780,720,880),v.current=H;const ee=new GE({antialias:!0,alpha:!1,powerPreference:"high-performance"});for(ee.setSize(R,X),ee.setPixelRatio(Math.min(window.devicePixelRatio,2)),ee.shadowMap.enabled=!0,ee.shadowMap.type=ag,ee.toneMapping=qd,ee.toneMappingExposure=P?1.35:1.05,E.current=ee;T.firstChild;)T.removeChild(T.firstChild);T.appendChild(ee.domElement);const K=new jE(H,ee.domElement);K.enableDamping=!0,K.dampingFactor=.06,K.maxPolarAngle=Z?.05:Math.PI/2-.03,K.minDistance=25,K.maxDistance=3400,K.target.set(0,Z?0:15,0),S.current=K;const Q=new jy(P?6333946:16777215,P?1.25:1.1);ne.add(Q);const $=new Wy(16776688,P?2.45:1.5);$.position.set(650,950,550),$.castShadow=!0,$.shadow.mapSize.width=2048,$.shadow.mapSize.height=2048,$.shadow.camera.near=100,$.shadow.camera.far=3200;const Y=1250;$.shadow.camera.left=-Y,$.shadow.camera.right=Y,$.shadow.camera.top=Y,$.shadow.camera.bottom=-Y,$.shadow.bias=-3e-4,ne.add($);const J=new Hy(P?3718648:14742270,P?988970:9741240,P?.85:.45);ne.add(J),x.current=[],y.current=[];const O=new Wi(2600,2600),re=new Tn({color:P?463136:14870768,roughness:.9,metalness:.08}),Ue=new Lt(O,re);Ue.rotation.x=-Math.PI/2,Ue.position.y=-.2,Ue.receiveShadow=!0,ne.add(Ue);const oe=new qy(2600,130,P?165063:13358561,P?992324:14870768);oe.position.y=.02,ne.add(oe);const Te=new bc(1240,1248,64),Ne=new va({color:P?165063:959977,side:Xi,transparent:!0,opacity:.35}),ze=new Lt(Te,Ne);ze.rotation.x=-Math.PI/2,ze.position.y=.04,ne.add(ze);const Ee=new Qn;ne.add(Ee);const Ke=new Tn({color:P?1318446:4674921,roughness:.65,metalness:.15}),gt=new Tn({color:P?1976635:9741240,roughness:.8});new va({color:16096779});const qe=new va({color:P?9741240:16777215}),lt=(le,ie,Le,we,ce=!0,Pe="Đường đô thị",Se=!0)=>{const Me=new Wi(Le,we),Ze=new Lt(Me,Ke);Ze.rotation.x=-Math.PI/2,Ze.position.set(le,.05,ie),ce||(Ze.rotation.z=Math.PI/2),Ze.receiveShadow=!0,Ee.add(Ze);const ct=Le>=24?4:2.5,Pt=new Wi(ct,we),jt=new Lt(Pt,gt);jt.rotation.x=-Math.PI/2,ce?jt.position.set(le-Le/2-ct/2,.1,ie):(jt.rotation.z=Math.PI/2,jt.position.set(le,.1,ie-Le/2-ct/2)),Ee.add(jt);const Zt=new Lt(Pt,gt);Zt.rotation.x=-Math.PI/2,ce?Zt.position.set(le+Le/2+ct/2,.1,ie):(Zt.rotation.z=Math.PI/2,Zt.position.set(le,.1,ie+Le/2+ct/2)),Ee.add(Zt);const nn=Math.floor(we/24);for(let Et=0;Et<nn;Et++){const hn=new Wi(.5,6),bt=new Lt(hn,qe);bt.rotation.x=-Math.PI/2,ce?bt.position.set(le,.08,ie-we/2+Et*24+12):(bt.rotation.z=Math.PI/2,bt.position.set(le-we/2+Et*24+12,.08,ie)),Ee.add(bt)}};lt(0,0,24,2400,!0,"Đường Hoàng Đạo Thúy",!0),lt(0,180,28,2500,!1,"Đường Lê Văn Lương",!0),lt(0,-180,30,2500,!1,"Đường Trần Duy Hưng",!0),lt(-440,0,40,2500,!0,"Đường Phạm Hùng - Khuất Duy Tiến (Vành Đai 3)",!0),lt(-160,0,22,2400,!0,"Đường Hoàng Minh Giám",!0),lt(-700,40,44,1400,!1,"Đại Lộ Thăng Long",!0),lt(340,0,22,2400,!0,"Phố Trung Kính",!0),lt(140,0,16,2200,!0,"Phố Nguyễn Thị Định",!1),lt(240,220,18,1400,!0,"Phố Vũ Trọng Phụng",!0),lt(290,240,18,1400,!0,"Phố Nguyễn Tuân",!0),lt(0,0,18,2400,!1,"Đường Nguyễn Thị Thập",!1),lt(0,90,16,2200,!1,"Phố Hoàng Ngân",!1),lt(0,-90,16,2e3,!1,"Phố Đỗ Quang",!1),lt(0,240,16,2200,!1,"Phố Quan Nhân",!1),lt(0,290,16,2e3,!1,"Phố Nhân Hòa & Chính Kinh",!1),lt(0,350,22,2400,!1,"Đường Ngụy Như Kon Tum",!0),lt(0,430,18,2200,!1,"Đường Nguyễn Huy Tưởng",!1),lt(0,-340,24,2400,!1,"Đường Nguyễn Chánh / Vũ Phạm Hàm",!0),lt(0,-260,18,1800,!1,"Đường Mạc Thái Tổ",!1),lt(0,-220,18,1800,!1,"Đường Mạc Thái Tông",!1),lt(-200,-460,24,2e3,!1,"Đường Mễ Trì",!0),lt(-200,-540,26,2e3,!1,"Đường Dương Đình Nghệ",!0);const St=new Qn;ne.add(St);const st=(le,ie,Le=50,we=12.5,ce=!0)=>{if(!t.streetLabels)return null;const Pe=document.createElement("canvas");Pe.width=512,Pe.height=128;const Se=Pe.getContext("2d"),Me=26,Ze=10,ct=12,Pt=492,jt=104;Se.beginPath(),Se.moveTo(Ze+Me,ct),Se.lineTo(Ze+Pt-Me,ct),Se.quadraticCurveTo(Ze+Pt,ct,Ze+Pt,ct+Me),Se.lineTo(Ze+Pt,ct+jt-Me),Se.quadraticCurveTo(Ze+Pt,ct+jt,Ze+Pt-Me,ct+jt),Se.lineTo(Ze+Me,ct+jt),Se.quadraticCurveTo(Ze,ct+jt,Ze,ct+jt-Me),Se.lineTo(Ze,ct+Me),Se.quadraticCurveTo(Ze,ct,Ze+Me,ct),Se.closePath(),Se.fillStyle=P?"rgba(10, 18, 34, 0.95)":"rgba(255, 255, 255, 0.96)",Se.fill(),Se.lineWidth=ce?5:3.5,Se.strokeStyle=ce?P?"#38bdf8":"#0284c7":P?"#64748b":"#94a3b8",Se.stroke(),Se.fillStyle=ce?"#0284c7":"#475569",Se.beginPath(),Se.arc(68,64,28,0,Math.PI*2),Se.fill(),Se.fillStyle="#ffffff",Se.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',Se.textAlign="center",Se.textBaseline="middle",Se.fillText(ce?"ĐT":"HN",68,64),Se.fillStyle=P?"#ffffff":"#0f172a",Se.font=`bold ${ce?"32px":"28px"} -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", Roboto, sans-serif`,Se.textAlign="left",Se.fillText(le,114,64);const Zt=new _0(Pe);Zt.minFilter=si;const nn=new Hd({map:Zt,transparent:!0,depthTest:!1}),Et=new c0(nn);return Et.position.set(ie[0],ie[1]+16,ie[2]),Et.scale.set(Le,we,1),St.add(Et),Et};st("ĐƯỜNG HOÀNG ĐẠO THÚY",[0,10,-50],55,13.5,!0),st("ĐƯỜNG LÊ VĂN LƯƠNG",[120,10,180],52,13,!0),st("ĐƯỜNG TRẦN DUY HƯNG",[120,10,-180],52,13,!0),st("ĐƯỜNG PHẠM HÙNG (VÀNH ĐAI 3)",[-440,10,-80],65,16,!0),st("ĐƯỜNG HOÀNG MINH GIÁM",[-160,10,80],55,13.5,!0),st("ĐẠI LỘ THĂNG LONG",[-720,10,40],56,14,!0),st("ĐƯỜNG NGUYỄN THỊ THẬP",[-80,10,0],48,12,!1),st("PHỐ NGUYỄN THỊ ĐỊNH",[140,10,-70],48,12,!1),st("PHỐ HOÀNG NGÂN",[60,10,90],44,11,!1),st("PHỐ ĐỖ QUANG",[60,10,-90],44,11,!1),st("PHỐ VŨ TRỌNG PHỤNG",[240,10,240],46,11.5,!1),st("PHỐ NGUYỄN TUÂN",[290,10,290],46,11.5,!1),st("ĐƯỜNG NGỤY NHƯ KON TUM",[140,10,350],52,13,!1),st("PHỐ TRUNG KÍNH",[340,10,50],46,11.5,!1),st("KEANGNAM LANDMARK 72 (350M)",[-540,16,-320],68,17,!0),st("TRUNG TÂM HỘI NGHỊ QUỐC GIA (NCC)",[-440,14,120],68,17,!0),st("VINHOMES D'CAPITALE & BIG C",[-220,12,-180],62,15.5,!0),st("HỒ ĐIỀU HÒA NHÂN CHÍNH (8.2 HA)",[-260,10,95],58,14.5,!0);const Yt=new Tn({color:P?536393:223649,roughness:.1,metalness:.8,transparent:!0,opacity:P?.88:.75}),tn=new Tn({color:P?413243:1467700,roughness:.9}),$t=new Wi(160,140),Ut=new Lt($t,Yt);Ut.rotation.x=-Math.PI/2,Ut.position.set(-260,.25,95),Ut.receiveShadow=!0,ne.add(Ut);const En=new Wi(168,148),Ht=new Lt(En,tn);Ht.rotation.x=-Math.PI/2,Ht.position.set(-260,.2,95),ne.add(Ht);const on=new Wi(220,150),ve=new Lt(on,Yt);ve.rotation.x=-Math.PI/2,ve.position.set(-540,.25,120),ve.receiveShadow=!0,ne.add(ve);const $e=new Qn;ne.add($e);const V=!!r["VALVE-01"],xt=!!r["VALVE-02"],ut=!!r["VALVE-03"],ht=!!r["VALVE-04"],Ae=!!r["VALVE-05"],yt=!!r["VALVE-06"],Ve=!!r["VALVE-07"],je=!!r["VALVE-08"],I=({pos:le=[0,0,0],size:ie=[16,40,16],color:Le=3718648,name:we,id:ce,floors:Pe,households:Se,demandFlow:Me,intakePressure:Ze,connectionPipe:ct,cisternCapacity:Pt,meterId:jt,dma:Zt,hasAntenna:nn=!1,isCutOff:Et=!1,cutOffValveName:hn=""})=>{if(!t.buildings)return null;const bt=new Qn;bt.position.set(le[0],0,le[2]);const[dn,rn,kn]=ie,Vn=Et?15680580:Le,mi=new Cr(dn,rn,kn),Gn=new Tn({color:G?165063:Vn,metalness:G?.05:Et?.2:.42,roughness:G?.1:.22,transparent:!0,opacity:G?.12:Et?.75:P?.92:.94,depthWrite:!G,emissive:Et?10033947:G?165063:P?Vn:0,emissiveIntensity:Et?.45:G?.04:.18}),ln=new Lt(mi,Gn);ln.position.y=rn/2,ln.castShadow=!G,ln.receiveShadow=!G,bt.add(ln);const fn=new x0(mi),Vt=new Vd(fn,new wc({color:Et?16557477:P?8246268:165063,linewidth:G?1:Et?2.5:1.5,transparent:G,opacity:G?.28:1}));ln.add(Vt);const gi=new nr(dn*.18,dn*.18,5,16),ai=new Tn({color:Et?6583435:165063,metalness:.65,roughness:.2}),Li=new Lt(gi,ai);if(Li.position.set(0,rn+2.5,0),bt.add(Li),nn){const Rr=new nr(.3,.5,20,8),A=new Tn({color:14870768,metalness:.85}),W=new Lt(Rr,A);W.position.set(0,rn+12,0),bt.add(W);const he=new xa(1.2,8,8),ae=new va({color:Et?16096779:15680580}),te=new Lt(he,ae);te.position.set(0,rn+22,0),bt.add(te)}const Wn={name:we,id:ce,type:"Công Trình & Tòa Nhà Đô Thị",status:Et?`⚠️ ĐÃ CẮT NƯỚC CỤC BỘ (Do đóng chốt khóa: ${hn})`:"Cấp nước liên tục 24/7 (Đạt chuẩn QCVN 01-1:2018/BXD)",floors:`${Pe} tầng`,households:Se||"500 căn hộ",flow:Et?"0.0 m³/h (Mất áp)":Me||"45.0 m³/h",pressure:Et?"0.00 bar (MẤT NƯỚC)":Ze||"3.25 bar",elevation:"+17.2m ASL",connectionPipe:ct||"DN65 HDPE",cisternCapacity:Pt||"800 m³",meterId:jt||`AMR-${ce}`,dma:Zt||"DMA THNC-02",isCutOff:Et,cutOffValveName:hn};return bt.userData={name:we,id:ce,type:"Building",data:Wn},ln.userData=bt.userData,x.current.push(ln),$e.add(bt),bt},w=({center:le,size:ie,rows:Le=2,cols:we=6,heightRange:ce=[15,22],zoneId:Pe,isCutOff:Se,cutOffValveName:Me,blockName:Ze="Khu Nhà Phố Liền Kề",dma:ct="DMA THNC-02"})=>{if(!t.buildings)return;const[Pt,jt]=le,[Zt,nn]=ie,Et=Zt/we,hn=nn/Le,bt=new Qn;for(let dn=0;dn<Le;dn++)for(let rn=0;rn<we;rn++){const kn=Pt-Zt/2+(rn+.5)*Et,Vn=jt-nn/2+(dn+.5)*hn,mi=(Math.sin(kn*12.9898+Vn*78.233)*43758.5453%1+1)%1,Gn=ce[0]+mi*(ce[1]-ce[0]),ln=Et*.88,fn=hn*.86,Vt=new Cr(ln,Gn,fn),gi=P?[3359061,1976635,4674921,988970,223649]:[15857145,14870768,13358561,9741240,12573694],ai=Math.floor(mi*gi.length)%gi.length,Li=new Tn({color:G?165063:Se?15680580:gi[ai],roughness:G?.1:.5,metalness:G?.05:.1,transparent:!0,opacity:G?.08:Se?.75:1,depthWrite:!G,emissive:Se?10033947:P?G?165063:gi[ai]:0,emissiveIntensity:Se?.3:P?G?.02:.12:0}),Wn=new Lt(Vt,Li);Wn.position.set(kn,Gn/2,Vn),Wn.castShadow=!0,Wn.receiveShadow=!0;const Rr=new nr(ln*.18,ln*.18,2.2,12),A=new Tn({color:9741240,metalness:.85,roughness:.2}),W=new Lt(Rr,A);W.position.set(kn,Gn+1.1,Vn),bt.add(W);const he=new x0(Vt),ae=new Vd(he,new wc({color:Se?16557477:P?3718648:6583435,linewidth:1}));Wn.add(ae);const te={name:`${Ze} (Lô ${dn+1}-${rn+1})`,id:`HOUSE-${Pe}-${dn+1}-${rn+1}`,type:"Nhà Phố / Shophouse Phân Lô",status:Se?`⚠️ MẤT NƯỚC (Do đóng van: ${Me})`:"Cấp nước ổn định",floors:`${Math.round(Gn/3.6)} tầng`,households:"1 hộ gia đình + mặt bằng kinh doanh",flow:Se?"0.0 m³/h":"0.45 m³/h",pressure:Se?"0.00 bar":"3.22 bar",elevation:"+16.5m ASL",connectionPipe:"DN32 HDPE",cisternCapacity:"2.5 m³ bồn Inox",meterId:`AMR-H-${Pe}-${dn+1}${rn+1}`,dma:ct,isCutOff:Se,cutOffValveName:Me};Wn.userData={name:`${Ze} (Lô ${dn+1}-${rn+1})`,id:`HOUSE-${Pe}-${dn+1}-${rn+1}`,type:"Building",data:te},x.current.push(Wn),bt.add(Wn)}$e.add(bt)};I({pos:[-540,0,-320],size:[48,165,48],color:P?165063:223649,name:"Keangnam Hanoi Landmark 72 (350m - 72 Tầng)",id:"BLDG-KEANGNAM-72",floors:72,households:"Khách sạn InterContinental + 200,000m² VP",demandFlow:"142.0 m³/h",intakePressure:"3.42 bar",connectionPipe:"DN150 Gang cầu K9 kép",cisternCapacity:"4,500 m³",meterId:"AMR-KEANGNAM-MAIN",dma:"DMA Phía Tây",hasAntenna:!0,isCutOff:yt,cutOffValveName:"Van V-KNG-06"}),I({pos:[-590,0,-320],size:[32,105,32],color:P?223649:165063,name:"Tháp Căn Hộ Keangnam A (48 Tầng)",id:"BLDG-KEANGNAM-A",floors:48,households:"460 căn hộ cao cấp",demandFlow:"48.0 m³/h",intakePressure:"3.38 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-KEANGNAM-TOWER-A",dma:"DMA Phía Tây",isCutOff:yt,cutOffValveName:"Van V-KNG-06"}),I({pos:[-490,0,-320],size:[32,105,32],color:P?223649:165063,name:"Tháp Căn Hộ Keangnam B (48 Tầng)",id:"BLDG-KEANGNAM-B",floors:48,households:"460 căn hộ cao cấp",demandFlow:"48.0 m³/h",intakePressure:"3.38 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-KEANGNAM-TOWER-B",dma:"DMA Phía Tây",isCutOff:yt,cutOffValveName:"Van V-KNG-06"}),I({pos:[-460,0,-220],size:[30,80,26],color:P?165063:223649,name:"Tòa Tháp Handico Tower (33 Tầng)",id:"BLDG-HANDICO",floors:33,households:"Trụ sở Tổng Công ty Handico",demandFlow:"32.0 m³/h",intakePressure:"3.35 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-HANDICO",dma:"DMA Phía Tây",isCutOff:yt,cutOffValveName:"Van V-KNG-06"}),I({pos:[-460,0,-170],size:[28,68,24],color:P?165063:223649,name:"Tòa Tháp CEO Tower (27 Tầng)",id:"BLDG-CEO",floors:27,households:"Tổ hợp Văn phòng CEO Group",demandFlow:"28.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"700 m³",meterId:"AMR-CEO",dma:"DMA Phía Tây",isCutOff:yt,cutOffValveName:"Van V-KNG-06"}),I({pos:[-440,0,-110],size:[56,42,56],color:P?1096065:366185,name:"Bảo Tàng Hà Nội (Kim Tự Tháp Ngược)",id:"BLDG-MUSEUM",floors:4,households:"Bảo tàng Quốc gia & Khu triển lãm 5 ha",demandFlow:"24.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"600 m³",meterId:"AMR-MUSEUM",dma:"DMA Phía Tây",isCutOff:yt,cutOffValveName:"Van V-KNG-06"}),I({pos:[-440,0,140],size:[85,36,75],color:P?14251782:11817737,name:"Trung Tâm Hội Nghị Quốc Gia (NCC - 64 ha)",id:"BLDG-NCC",floors:5,households:"Hội trường 3,800 chỗ + Khuôn viên cảnh quan",demandFlow:"85.0 m³/h",intakePressure:"3.35 bar",connectionPipe:"DN100 HDPE kép từ Đại lộ Thăng Long",cisternCapacity:"2,500 m³",meterId:"AMR-NCC-MAIN",dma:"DMA Hội Nghị Quốc Gia"}),I({pos:[-280,0,-180],size:[70,24,60],color:P?16096779:14251782,name:"Đại Siêu Thị Big C Thăng Long (GO!)",id:"BLDG-BIG-C",floors:3,households:"Trung tâm mua sắm bán lẻ 12,000m²",demandFlow:"65.0 m³/h",intakePressure:"3.28 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-BIGC-01",dma:"DMA THNC-01",isCutOff:Ae,cutOffValveName:"Van V-DCP-05"}),[-230,-190,-150].forEach((le,ie)=>{I({pos:[le,0,-220],size:[26,95+ie*4,26],color:P?165063:223649,name:`Tổ Hợp Vinhomes D'Capitale C${ie+1} (${40+ie} Tầng)`,id:`BLDG-DCAPITALE-${ie+1}`,floors:40+ie,households:"520 căn hộ cao cấp",demandFlow:"52.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,400 m³",meterId:`AMR-DCAPITALE-C${ie+1}`,dma:"DMA THNC-01",isCutOff:Ae,cutOffValveName:"Van V-DCP-05"}),I({pos:[le,0,-260],size:[26,92+ie*4,26],color:P?223649:165063,name:`Tổ Hợp Vinhomes D'Capitale C${ie+4} (${39+ie} Tầng)`,id:`BLDG-DCAPITALE-${ie+4}`,floors:39+ie,households:"500 căn hộ cao cấp",demandFlow:"50.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,350 m³",meterId:`AMR-DCAPITALE-C${ie+4}`,dma:"DMA THNC-01",isCutOff:Ae,cutOffValveName:"Van V-DCP-05"})}),I({pos:[-360,0,40],size:[32,98,30],color:P?165063:223649,name:"Tháp Thăng Long Number One A (40 Tầng)",id:"BLDG-TL-NO1-A",floors:40,households:"540 căn hộ xanh",demandFlow:"54.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-TL-NO1-A",dma:"DMA THNC-01",isCutOff:Ae,cutOffValveName:"Van V-DCP-05"}),I({pos:[-360,0,85],size:[32,98,30],color:P?165063:223649,name:"Tháp Thăng Long Number One B (40 Tầng)",id:"BLDG-TL-NO1-B",floors:40,households:"540 căn hộ xanh",demandFlow:"54.0 m³/h",intakePressure:"3.32 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,500 m³",meterId:"AMR-TL-NO1-B",dma:"DMA THNC-01",isCutOff:Ae,cutOffValveName:"Van V-DCP-05"}),I({pos:[-380,0,-30],size:[28,76,26],color:P?223649:165063,name:"Tòa Tháp Viglacera Tower (30 Tầng)",id:"BLDG-VIGLACERA",floors:30,households:"Trụ sở Tổng Công ty Viglacera",demandFlow:"30.0 m³/h",intakePressure:"3.30 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-VIGLACERA",dma:"DMA THNC-01",isCutOff:Ae,cutOffValveName:"Van V-DCP-05"}),I({pos:[65,0,-215],size:[38,72,32],color:P?14251782:11817737,name:"Tổ Hợp Charmvit Tower & Grand Plaza",id:"BLDG-CHARMVIT",floors:27,households:"540 phòng KS 5 sao & 45,000m² VP Đại sứ quán Hàn Quốc",demandFlow:"58.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,800 m³",meterId:"AMR-CHARMVIT-PLAZA",dma:"DMA THNC-01",isCutOff:ht,cutOffValveName:"Van V-TDN-04"}),[-20,20,60].forEach((le,ie)=>{I({pos:[le,0,-140],size:[24,72,22],color:P?165063:223649,name:`Tòa Căn Hộ Cao Cấp N04-${String.fromCharCode(65+ie)} (29 Tầng)`,id:`BLDG-N04-${String.fromCharCode(65+ie)}`,floors:29,households:"360 căn hộ cao cấp",demandFlow:"36.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"950 m³",meterId:`AMR-N04-${String.fromCharCode(65+ie)}`,dma:"DMA THNC-01",isCutOff:ht,cutOffValveName:"Van V-TDN-04"})}),I({pos:[40,0,-85],size:[28,85,26],color:P?223649:165063,name:"Tòa Tháp N05-29T1 Hoàng Đạo Thúy (34 Tầng)",id:"BLDG-N05-34T1",floors:34,households:"480 căn hộ",demandFlow:"48.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-N05-34T1",dma:"DMA THNC-01",isCutOff:ht,cutOffValveName:"Van V-TDN-04"}),I({pos:[80,0,-85],size:[28,85,26],color:P?223649:165063,name:"Tòa Tháp N05-29T2 Hoàng Đạo Thúy (34 Tầng)",id:"BLDG-N05-34T2",floors:34,households:"480 căn hộ",demandFlow:"48.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-N05-34T2",dma:"DMA THNC-01",isCutOff:ht,cutOffValveName:"Van V-TDN-04"}),I({pos:[25,0,20],size:[26,82,26],color:P?165063:223649,name:"Tòa Tháp Biểu Tượng 34T Hoàng Đạo Thúy",id:"BLDG-34T-HDT",floors:34,households:"650 căn hộ (~2,600 cư dân)",demandFlow:"58.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE nối từ trục D600",cisternCapacity:"1,500 m³",meterId:"AMR-34T-MAIN",dma:"DMA THNC-02",hasAntenna:!0,isCutOff:V,cutOffValveName:"Van V-HDT-01"}),I({pos:[-35,0,30],size:[20,58,18],color:P?223649:165063,name:"Tòa Chung Cư 24T1 Hoàng Đạo Thúy",id:"BLDG-24T1",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T1",dma:"DMA THNC-02",isCutOff:V,cutOffValveName:"Van V-HDT-01"}),I({pos:[-35,0,-30],size:[20,58,18],color:P?223649:165063,name:"Tòa Chung Cư 24T2 Hoàng Đạo Thúy",id:"BLDG-24T2",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T2",dma:"DMA THNC-02",isCutOff:V,cutOffValveName:"Van V-HDT-01"}),I({pos:[-75,0,0],size:[20,58,18],color:P?223649:165063,name:"Tòa Chung Cư 24T3 Hoàng Đạo Thúy",id:"BLDG-24T3",floors:24,households:"280 căn hộ",demandFlow:"28.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"800 m³",meterId:"AMR-24T3",dma:"DMA THNC-02",isCutOff:V,cutOffValveName:"Van V-HDT-01"}),[75,115,155].forEach((le,ie)=>{I({pos:[42,0,le],size:[18,44,16],color:P?959977:165063,name:`Tòa Chung Cư 17T${ie+1} Hoàng Đạo Thúy`,id:`BLDG-17T${ie+1}`,floors:17,households:"180 căn hộ",demandFlow:"18.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:`AMR-17T${ie+1}`,dma:"DMA THNC-02",isCutOff:V,cutOffValveName:"Van V-HDT-01"}),I({pos:[-35,0,le],size:[18,44,16],color:P?959977:165063,name:`Tòa Chung Cư 17T${ie+4} Hoàng Đạo Thúy`,id:`BLDG-17T${ie+4}`,floors:17,households:"180 căn hộ",demandFlow:"18.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:`AMR-17T${ie+4}`,dma:"DMA THNC-02",isCutOff:V,cutOffValveName:"Van V-HDT-01"})}),I({pos:[35,0,155],size:[30,95,30],color:P?165063:481669,name:"Tòa Tháp Diamond Flower Tower (36 Tầng - 176m)",id:"BLDG-DIAMOND-FLOWER",floors:36,households:"380 căn hộ + 35,000m² VP hạng A",demandFlow:"48.0 m³/h",intakePressure:"3.28 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,600 m³",meterId:"AMR-DIAMOND-01",dma:"DMA THNC-02",hasAntenna:!0,isCutOff:ut,cutOffValveName:"Van V-LVL-03"}),I({pos:[80,0,155],size:[26,72,24],color:P?223649:165063,name:"Tổ Hợp Chung Cư Star City Lê Văn Lương (27 Tầng)",id:"BLDG-STAR-CITY",floors:27,households:"420 căn hộ cao cấp",demandFlow:"42.0 m³/h",intakePressure:"3.25 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:"AMR-STAR-CITY",dma:"DMA THNC-02",isCutOff:ut,cutOffValveName:"Van V-LVL-03"}),I({pos:[130,0,155],size:[28,72,26],color:P?165063:223649,name:"Tòa Tháp The Golden Palm (27 Tầng)",id:"BLDG-GOLDEN-PALM",floors:27,households:"400 căn hộ",demandFlow:"40.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"1,000 m³",meterId:"AMR-GOLDEN-PALM",dma:"DMA THNC-02",isCutOff:ut,cutOffValveName:"Van V-LVL-03"}),I({pos:[-60,0,155],size:[28,86,26],color:P?165063:223649,name:"Tòa Tháp HUD Tower A (32 Tầng)",id:"BLDG-HUD-TOWER-A",floors:32,households:"Trụ sở Tổng Công ty Đầu tư Phát triển Nhà HUD",demandFlow:"36.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,200 m³",meterId:"AMR-HUD-A",dma:"DMA THNC-02",isCutOff:ut,cutOffValveName:"Van V-LVL-03"}),I({pos:[-100,0,155],size:[26,74,24],color:P?223649:165063,name:"Tòa Tháp HUD Tower B (27 Tầng)",id:"BLDG-HUD-TOWER-B",floors:27,households:"Văn phòng thương mại & tài chính",demandFlow:"30.0 m³/h",intakePressure:"3.26 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"900 m³",meterId:"AMR-HUD-B",dma:"DMA THNC-02",isCutOff:ut,cutOffValveName:"Van V-LVL-03"}),I({pos:[180,0,155],size:[28,70,24],color:P?223649:165063,name:"Hội Sở MB Grand Tower (25 Tầng)",id:"BLDG-MB-TOWER",floors:25,households:"Hội sở Ngân hàng TMCP Quân Đội",demandFlow:"26.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"750 m³",meterId:"AMR-MB-TOWER",dma:"DMA THNC-02",isCutOff:ut,cutOffValveName:"Van V-LVL-03"}),[-150,-110].forEach((le,ie)=>{I({pos:[le,0,45],size:[32,65,34],color:P?14251782:11817737,name:`Mandarin Garden Block ${String.fromCharCode(65+ie)} (29 Tầng)`,id:`BLDG-MANDARIN-${String.fromCharCode(65+ie)}`,floors:29,households:"260 căn hộ cao cấp",demandFlow:"26.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"850 m³",meterId:`AMR-MANDARIN-${String.fromCharCode(65+ie)}`,dma:"DMA THNC-03",isCutOff:xt,cutOffValveName:"Van V-HMG-02"}),I({pos:[le,0,-5],size:[32,65,34],color:P?14251782:11817737,name:`Mandarin Garden Block ${String.fromCharCode(67+ie)} (29 Tầng)`,id:`BLDG-MANDARIN-${String.fromCharCode(67+ie)}`,floors:29,households:"260 căn hộ cao cấp",demandFlow:"26.0 m³/h",intakePressure:"3.22 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"850 m³",meterId:`AMR-MANDARIN-${String.fromCharCode(67+ie)}`,dma:"DMA THNC-03",isCutOff:xt,cutOffValveName:"Van V-HMG-02"})}),I({pos:[-135,0,-95],size:[52,24,40],color:P?1096065:366185,name:"Trường THPT Chuyên Hà Nội - Amsterdam",id:"BLDG-AMS",floors:5,households:"3,200 học sinh & giáo viên",demandFlow:"32.0 m³/h",intakePressure:"3.24 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"500 m³",meterId:"AMR-AMS-SCHOOL",dma:"DMA THNC-03",isCutOff:xt,cutOffValveName:"Van V-HMG-02"}),[160,200].forEach((le,ie)=>{I({pos:[le,0,270],size:[32,74,28],color:P?165063:223649,name:`Tổ Hợp Hapulico Complex Block ${String.fromCharCode(65+ie)} (31 Tầng)`,id:`BLDG-HAPULICO-${String.fromCharCode(65+ie)}`,floors:31,households:"380 căn hộ",demandFlow:"38.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:`AMR-HAPULICO-${String.fromCharCode(65+ie)}`,dma:"DMA THNC-03",isCutOff:Ve,cutOffValveName:"Van V-HAP-07"}),I({pos:[le,0,310],size:[32,74,28],color:P?223649:165063,name:`Tổ Hợp Hapulico Complex Block ${String.fromCharCode(67+ie)} (31 Tầng)`,id:`BLDG-HAPULICO-${String.fromCharCode(67+ie)}`,floors:31,households:"380 căn hộ",demandFlow:"38.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,100 m³",meterId:`AMR-HAPULICO-${String.fromCharCode(67+ie)}`,dma:"DMA THNC-03",isCutOff:Ve,cutOffValveName:"Van V-HAP-07"})}),I({pos:[110,0,270],size:[30,68,28],color:P?165063:223649,name:"Tổ Hợp Chung Cư Golden West (27 Tầng)",id:"BLDG-GOLDEN-WEST",floors:27,households:"350 căn hộ",demandFlow:"35.0 m³/h",intakePressure:"3.18 bar",connectionPipe:"DN65 HDPE",cisternCapacity:"900 m³",meterId:"AMR-GOLDEN-WEST",dma:"DMA THNC-03",isCutOff:Ve,cutOffValveName:"Van V-HAP-07"}),I({pos:[250,0,340],size:[30,85,28],color:P?165063:223649,name:"Tổ Hợp Imperia Garden Tháp A (35 Tầng)",id:"BLDG-IMPERIA-A",floors:35,households:"450 căn hộ cao cấp",demandFlow:"45.0 m³/h",intakePressure:"3.16 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,300 m³",meterId:"AMR-IMPERIA-A",dma:"DMA THNC-03",isCutOff:Ve,cutOffValveName:"Van V-HAP-07"}),I({pos:[290,0,340],size:[30,85,28],color:P?223649:165063,name:"Tổ Hợp Imperia Garden Tháp B (35 Tầng)",id:"BLDG-IMPERIA-B",floors:35,households:"450 căn hộ cao cấp",demandFlow:"45.0 m³/h",intakePressure:"3.16 bar",connectionPipe:"DN80 HDPE",cisternCapacity:"1,300 m³",meterId:"AMR-IMPERIA-B",dma:"DMA THNC-03",isCutOff:Ve,cutOffValveName:"Van V-HAP-07"});const se=new Qn;for(let le=0;le<4;le++)for(let ie=0;ie<4;ie++){const Le=65+le*16,we=-30+ie*18,ce=new Cr(10,14,10),Pe=new Tn({color:je?15680580:P?6583435:9741240,roughness:.5}),Se=new Lt(ce,Pe);Se.position.set(Le,7,we),Se.castShadow=!0,se.add(Se)}se.userData={name:"Khu Biệt Thự & Liền Kề BT1 - BT6",id:"BLDG-VILLAS",type:"Khu Biệt Thự Thấp Tầng",data:{name:"Khu Biệt Thự & Liền Kề BT1 - BT6",id:"BLDG-VILLAS",type:"Khu Biệt Thự Thấp Tầng",status:je?"⚠️ MẤT NƯỚC DO KHÓA VAN V-NTT-08":"Cấp nước ổn định",floors:"3.5 tầng",households:"150 căn biệt thự",flow:je?"0.0 m³/h":"22.5 m³/h",pressure:je?"0.00 bar":"3.18 bar",elevation:"+16.5m ASL",connectionPipe:"DN40 - DN50 HDPE",cisternCapacity:"15 m³ / biệt thự",meterId:"Cụm đồng hồ cơ sở Class C",dma:"DMA THNC-02",isCutOff:je,cutOffValveName:"Van V-NTT-08"}},se.children.forEach(le=>{le.userData=se.userData,x.current.push(le)}),$e.add(se),I({pos:[110,0,35],size:[36,18,30],color:P?1096065:366185,name:"Trường Liên Cấp Tiểu Học & THCS Ngôi Sao Hà Nội",id:"BLDG-NGOI-SAO",floors:5,households:"2,200 học sinh & CBGV",demandFlow:"24.0 m³/h",intakePressure:"3.20 bar",connectionPipe:"DN50 HDPE",cisternCapacity:"400 m³",meterId:"AMR-NGOI-SAO",dma:"DMA THNC-02",isCutOff:je,cutOffValveName:"Van V-NTT-08"}),w({center:[75,45],size:[110,60],rows:2,cols:8,heightRange:[15,21],zoneId:"HN-NTT",isCutOff:je,cutOffValveName:"Van V-NTT-08",blockName:"Phố Hoàng Ngân - Nhà Phố Liền Kề"}),w({center:[75,135],size:[110,60],rows:2,cols:8,heightRange:[16,24],zoneId:"HN-LVL",isCutOff:ut,cutOffValveName:"Van V-LVL-03",blockName:"Phố Hoàng Ngân - Shophouse Lê Văn Lương"}),w({center:[75,-45],size:[110,60],rows:2,cols:8,heightRange:[16,22],zoneId:"DQ-NTT",isCutOff:ht,cutOffValveName:"Van V-TDN-04",blockName:"Phố Đỗ Quang - Dãy Nhà Phố Ẩm Thực"}),w({center:[75,-135],size:[110,60],rows:2,cols:8,heightRange:[16,24],zoneId:"DQ-TDH",isCutOff:ht,cutOffValveName:"Van V-TDN-04",blockName:"Phố Đỗ Quang - Shophouse Chuyên Gia"}),w({center:[200,45],size:[95,60],rows:2,cols:6,heightRange:[15,22],zoneId:"NTD-HN",isCutOff:je,cutOffValveName:"Van V-NTT-08",blockName:"Phố Nguyễn Thị Định - Dãy Nhà Phố Thương Mại"}),w({center:[200,135],size:[95,60],rows:2,cols:6,heightRange:[16,24],zoneId:"NTD-LVL",isCutOff:ut,cutOffValveName:"Van V-LVL-03",blockName:"Phố Nguyễn Thị Định - Shophouse Dịch Vụ"}),w({center:[120,215],size:[170,40],rows:2,cols:10,heightRange:[14,20],zoneId:"QN-01",isCutOff:je,cutOffValveName:"Van V-NTT-08",blockName:"Khu Dân Cư Phố Quan Nhân"}),w({center:[120,265],size:[170,40],rows:2,cols:10,heightRange:[14,20],zoneId:"NH-01",isCutOff:Ve,cutOffValveName:"Van V-HAP-07",blockName:"Khu Dân Cư Phố Nhân Hòa & Chính Kinh"}),w({center:[230,310],size:[110,50],rows:2,cols:8,heightRange:[15,22],zoneId:"VTP-NNKT",isCutOff:Ve,cutOffValveName:"Van V-HAP-07",blockName:"Phố Vũ Trọng Phụng - Shophouse Chợ Thuốc"}),w({center:[290,390],size:[110,55],rows:2,cols:8,heightRange:[16,24],zoneId:"NT-NHT",isCutOff:Ve,cutOffValveName:"Van V-HAP-07",blockName:"Phố Nguyễn Tuân - Dãy Nhà Liền Kề"}),w({center:[-80,50],size:[100,55],rows:2,cols:7,heightRange:[15,22],zoneId:"34T-IN",isCutOff:V,cutOffValveName:"Van V-HDT-01",blockName:"Khu Nhà Phố Nội Khu Hoàng Đạo Thúy"}),w({center:[-80,-45],size:[100,55],rows:2,cols:7,heightRange:[15,22],zoneId:"24T-IN",isCutOff:V,cutOffValveName:"Van V-HDT-01",blockName:"Khu Liền Kề Cụm 24T Hoàng Đạo Thúy"}),w({center:[-240,250],size:[130,80],rows:3,cols:8,heightRange:[15,22],zoneId:"HNC-KDT",isCutOff:Ae,cutOffValveName:"Van V-DCP-05",blockName:"Khu Đô Thị Ven Hồ Điều Hòa Nhân Chính"}),w({center:[-320,340],size:[130,70],rows:2,cols:8,heightRange:[14,20],zoneId:"KDT-S",isCutOff:Ae,cutOffValveName:"Van V-DCP-05",blockName:"Khu Dân Cư Nam Khuất Duy Tiến"}),w({center:[-300,-380],size:[160,65],rows:2,cols:10,heightRange:[15,22],zoneId:"MTH-01",isCutOff:yt,cutOffValveName:"Van V-KNG-06",blockName:"Khu Đô Thị Mễ Trì Hạ - Sudico"}),w({center:[-480,-450],size:[130,55],rows:2,cols:8,heightRange:[14,20],zoneId:"MT-W",isCutOff:yt,cutOffValveName:"Van V-KNG-06",blockName:"Khu Liền Kề Phía Tây Mễ Trì"}),w({center:[240,-260],size:[140,65],rows:2,cols:9,heightRange:[15,22],zoneId:"TH-TY1",isCutOff:ht,cutOffValveName:"Van V-TDN-04",blockName:"Khu Đô Thị Trung Yên - Mạc Thái Tổ"}),w({center:[240,-330],size:[140,55],rows:2,cols:9,heightRange:[15,22],zoneId:"TH-TY2",isCutOff:ht,cutOffValveName:"Van V-TDN-04",blockName:"Khu Phân Lô Phố Vũ Phạm Hàm"});const Re=new Qn;ne.add(Re);const pe=(le,ie,Le,we,ce,Pe,Se,Me)=>{var Et;if(Se===1&&!t.pipesPrimary||Se===2&&!t.pipesSecondary||Se===3&&!t.pipesTertiary||Se===4&&!t.pipesService||!t.pipes)return null;const Ze=Se===1?61695:Se===2?3718648:Se===3?3003583:(Et=Me==null?void 0:Me.status)!=null&&Et.includes("CẮT")?6583435:16498468,ct=Pe?Ze:4674921,Pt=new Bg(le),jt=new of(Pt,64,ie,14,!1),Zt=new Tn({color:ct,roughness:.2,metalness:.15,emissive:Pe?ct:0,emissiveIntensity:Pe?P?.72:.52:0}),nn=new Lt(jt,Zt);if(nn.castShadow=!1,nn.receiveShadow=!1,nn.userData={name:we,id:ce,type:"Pipe",data:Me},Re.add(nn),x.current.push(nn),Pe){const hn=Se===1?20:Se===2?12:Se===3?8:4,bt=new xa(ie*1.3,12,12),dn=new Tn({color:16777215,emissive:Se===1?61695:Se===2?3718648:3003583,emissiveIntensity:1.4,roughness:.1});for(let rn=0;rn<hn;rn++){const kn=new Lt(bt,dn);ne.add(kn),y.current.push({mesh:kn,curve:Pt,t:rn/hn,speed:Se===1?.0022:Se===2?.0017:.0012})}}return nn};pe([new N(-1200,1.4,40),new N(-700,1.4,40),new N(-440,1.4,40)],1.6,P?165063:223649,"Trục Truyền Dẫn Cấp 1 D800 Đại Lộ Thăng Long","PIPE-TRUNK-DLTL-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Đại Lộ Thăng Long",id:"PIPE-TRUNK-DLTL-D800",tier:"Cấp 1 (Transmission D800)",status:"Đang truyền dẫn công suất lớn (NMN Sông Đà)",diameter:"DN800 Gang Dẻo K9",flow:"4,850.0 m³/h",pressure:"3.85 bar",dma:"Trục Truyền Dẫn Liên Vùng"}),pe([new N(-440,1.4,-1100),new N(-440,1.4,-400),new N(-440,1.4,40),new N(-440,1.4,600),new N(-440,1.4,1100)],1.6,P?165063:223649,"Trục Truyền Dẫn Cấp 1 D800 Phạm Hùng - Vành Đai 3","PIPE-TRUNK-PH-D800",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D800 Phạm Hùng - Vành Đai 3",id:"PIPE-TRUNK-PH-D800",tier:"Cấp 1 (Transmission D800)",status:"Vận hành tối ưu",diameter:"DN800 Gang Dẻo K9",flow:"4,200.0 m³/h",pressure:"3.75 bar",dma:"Trục Truyền Dẫn Liên Vùng"}),pe([new N(-440,1.4,180),new N(-160,1.4,180),new N(0,1.4,180),new N(340,1.4,180),new N(650,1.4,180)],1.4,P?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Lê Văn Lương","PIPE-TRUNK-LVL-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Lê Văn Lương",id:"PIPE-TRUNK-LVL-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nguồn chính DMA THNC-02 & THNC-03",diameter:"DN600 Gang Dẻo K9",flow:"3,250.0 m³/h",pressure:"3.45 bar",dma:"DMA THNC-02"}),pe([new N(-440,1.4,-180),new N(-160,1.4,-180),new N(0,1.4,-180),new N(340,1.4,-180),new N(650,1.4,-180)],1.4,P?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Trần Duy Hưng","PIPE-TRUNK-TDH-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Trần Duy Hưng",id:"PIPE-TRUNK-TDH-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nguồn chính DMA THNC-01",diameter:"DN600 Gang Dẻo K9",flow:"3,400.0 m³/h",pressure:"3.50 bar",dma:"DMA THNC-01"}),pe([new N(0,1.4,-180),new N(0,1.4,0),new N(0,1.4,180),new N(0,1.4,350)],1.4,P?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Hoàng Đạo Thúy","PIPE-TRUNK-HDT-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Hoàng Đạo Thúy",id:"PIPE-TRUNK-HDT-D600",tier:"Cấp 1 (Transmission D600)",status:"Trục xương sống KĐT Trung Hòa - Nhân Chính",diameter:"DN600 Gang Dẻo K9",flow:"2,900.0 m³/h",pressure:"3.38 bar",dma:"DMA THNC-02"}),pe([new N(340,1.4,-450),new N(340,1.4,-180),new N(340,1.4,180),new N(340,1.4,450)],1.4,P?165063:223649,"Trục Truyền Dẫn Cấp 1 D600 Trung Kính","PIPE-TRUNK-TK-D600",!0,1,{name:"Trục Truyền Dẫn Cấp 1 D600 Trung Kính",id:"PIPE-TRUNK-TK-D600",tier:"Cấp 1 (Transmission D600)",status:"Cấp nước phía Đông quận",diameter:"DN600 Gang Dẻo",flow:"2,400.0 m³/h",pressure:"3.35 bar",dma:"DMA Phía Đông"}),pe([new N(-160,1.2,0),new N(-75,1.2,0),new N(0,1.2,0),new N(75,1.2,0),new N(140,1.2,0),new N(340,1.2,0)],1.1,P?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Nguyễn Thị Thập","PIPE-DIST-NTT-D300",!je,2,{name:"Tuyến Phân Phối Cấp 2 D300 Nguyễn Thị Thập",id:"PIPE-DIST-NTT-D300",tier:"Cấp 2 (Distribution D300)",status:je?"ĐÃ CẮT NƯỚC QUA VAN V-NTT-08":"Bình thường",diameter:"DN300 HDPE PE100",flow:je?"0.0 m³/h":"880 m³/h",pressure:je?"0.00 bar":"3.25 bar",dma:"DMA THNC-02"}),pe([new N(-160,1.2,350),new N(-160,1.2,180),new N(-160,1.2,0),new N(-160,1.2,-95),new N(-160,1.2,-180)],1,P?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Hoàng Minh Giám","PIPE-DIST-HMG-D250",!xt,2,{name:"Tuyến Phân Phối Cấp 2 D250 Hoàng Minh Giám",id:"PIPE-DIST-HMG-D250",tier:"Cấp 2 (Distribution D250)",status:xt?"ĐÃ CẮT NƯỚC QUA VAN V-HMG-02":"Bình thường",diameter:"DN250 HDPE PE100",flow:xt?"0.0 m³/h":"750 m³/h",pressure:xt?"0.00 bar":"3.24 bar",dma:"DMA THNC-03"}),pe([new N(140,1.2,-180),new N(140,1.2,-90),new N(140,1.2,0),new N(140,1.2,180)],1,P?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Nguyễn Thị Định","PIPE-DIST-NTD-D250",!ht,2,{name:"Tuyến Phân Phối Cấp 2 D250 Nguyễn Thị Định",id:"PIPE-DIST-NTD-D250",tier:"Cấp 2 (Distribution D250)",status:ht?"ĐÃ CẮT NƯỚC QUA VAN V-TDN-04":"Bình thường",diameter:"DN250 HDPE",flow:ht?"0.0 m³/h":"620 m³/h",pressure:ht?"0.00 bar":"3.22 bar",dma:"DMA THNC-01"}),pe([new N(-160,1.2,350),new N(0,1.2,350),new N(160,1.2,350),new N(240,1.2,350),new N(340,1.2,350)],1.1,P?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Ngụy Như Kon Tum","PIPE-DIST-NNKT-D300",!Ve,2,{name:"Tuyến Phân Phối Cấp 2 D300 Ngụy Như Kon Tum",id:"PIPE-DIST-NNKT-D300",tier:"Cấp 2 (Distribution D300)",status:Ve?"ĐÃ CẮT NƯỚC QUA VAN V-HAP-07":"Bình thường",diameter:"DN300 HDPE",flow:Ve?"0.0 m³/h":"820 m³/h",pressure:Ve?"0.00 bar":"3.18 bar",dma:"DMA THNC-03"}),pe([new N(240,1.2,180),new N(240,1.2,270),new N(240,1.2,350)],1,P?959977:165063,"Tuyến Phân Phối Cấp 2 D250 Vũ Trọng Phụng","PIPE-DIST-VTP-D250",!Ve,2,{name:"Tuyến Phân Phối Cấp 2 D250 Vũ Trọng Phụng",id:"PIPE-DIST-VTP-D250",tier:"Cấp 2 (Distribution D250)",status:Ve?"ĐÃ CẮT NƯỚC QUA VAN V-HAP-07":"Bình thường",diameter:"DN250 HDPE",flow:Ve?"0.0 m³/h":"540 m³/h",pressure:Ve?"0.00 bar":"3.16 bar",dma:"DMA THNC-03"}),pe([new N(-440,1.2,-180),new N(-280,1.2,-180),new N(-190,1.2,-180),new N(-160,1.2,-180)],1.1,P?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Ven Vinhomes D'Capitale","PIPE-DIST-DCP-D300",!Ae,2,{name:"Tuyến Phân Phối Cấp 2 D300 Ven Vinhomes D'Capitale",id:"PIPE-DIST-DCP-D300",tier:"Cấp 2 (Distribution D300)",status:Ae?"ĐÃ CẮT NƯỚC QUA VAN V-DCP-05":"Bình thường",diameter:"DN300 HDPE",flow:Ae?"0.0 m³/h":"960 m³/h",pressure:Ae?"0.00 bar":"3.30 bar",dma:"DMA THNC-01"}),pe([new N(-440,1.2,-320),new N(-540,1.2,-320),new N(-540,1.2,-460),new N(-440,1.2,-460)],1.1,P?959977:165063,"Tuyến Phân Phối Cấp 2 D300 Mạch Vòng Keangnam & Mễ Trì","PIPE-DIST-KNG-D300",!yt,2,{name:"Tuyến Phân Phối Cấp 2 D300 Keangnam & Mễ Trì",id:"PIPE-DIST-KNG-D300",tier:"Cấp 2 (Distribution D300)",status:yt?"ĐÃ CẮT NƯỚC QUA VAN V-KNG-06":"Bình thường",diameter:"DN300 HDPE",flow:yt?"0.0 m³/h":"1,120 m³/h",pressure:yt?"0.00 bar":"3.38 bar",dma:"DMA Phía Tây"}),pe([new N(0,1,90),new N(75,1,90),new N(140,1,90),new N(200,1,90)],.85,P?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Phố Hoàng Ngân","PIPE-STREET-HN-D150",!je,3,{name:"Tuyến Nhánh Cấp 3 D150 Phố Hoàng Ngân",id:"PIPE-STREET-HN-D150",tier:"Cấp 3 (Reticulation D150)",status:je?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:je?"0.0 m³/h":"180 m³/h",dma:"DMA THNC-02"}),pe([new N(0,1,-90),new N(75,1,-90),new N(140,1,-90),new N(200,1,-90)],.85,P?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Phố Đỗ Quang","PIPE-STREET-DQ-D150",!ht,3,{name:"Tuyến Nhánh Cấp 3 D150 Phố Đỗ Quang",id:"PIPE-STREET-DQ-D150",tier:"Cấp 3 (Reticulation D150)",status:ht?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:ht?"0.0 m³/h":"175 m³/h",dma:"DMA THNC-01"}),pe([new N(0,1,240),new N(120,1,240),new N(240,1,240)],.8,P?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Phố Quan Nhân","PIPE-STREET-QN-D125",!je,3,{name:"Tuyến Nhánh Cấp 3 D125 Phố Quan Nhân",id:"PIPE-STREET-QN-D125",tier:"Cấp 3 (Reticulation D125)",status:je?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:je?"0.0 m³/h":"140 m³/h",dma:"DMA THNC-02"}),pe([new N(0,1,290),new N(120,1,290),new N(240,1,290)],.8,P?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Phố Nhân Hòa","PIPE-STREET-NH-D125",!Ve,3,{name:"Tuyến Nhánh Cấp 3 D125 Phố Nhân Hòa",id:"PIPE-STREET-NH-D125",tier:"Cấp 3 (Reticulation D125)",status:Ve?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:Ve?"0.0 m³/h":"150 m³/h",dma:"DMA THNC-03"}),pe([new N(0,1,20),new N(25,1,20),new N(42,1,75),new N(42,1,155)],.8,P?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Ngõ Nội Khu 34T & 17T","PIPE-STREET-17T-D150",!V,3,{name:"Tuyến Nhánh Cấp 3 D150 Ngõ Nội Khu 34T & 17T",id:"PIPE-STREET-17T-D150",tier:"Cấp 3 (Reticulation D150)",status:V?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:V?"0.0 m³/h":"195 m³/h",dma:"DMA THNC-02"}),pe([new N(0,1,20),new N(-35,1,20),new N(-35,1,-30),new N(-75,1,0)],.8,P?1357990:889992,"Tuyến Nhánh Cấp 3 D125 Ngõ Nội Khu Cụm 24T","PIPE-STREET-24T-D125",!V,3,{name:"Tuyến Nhánh Cấp 3 D125 Ngõ Nội Khu Cụm 24T",id:"PIPE-STREET-24T-D125",tier:"Cấp 3 (Reticulation D125)",status:V?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN125",flow:V?"0.0 m³/h":"160 m³/h",dma:"DMA THNC-02"}),pe([new N(0,1,-85),new N(40,1,-85),new N(80,1,-85),new N(60,1,-140)],.8,P?1357990:889992,"Tuyến Nhánh Cấp 3 D150 Nội Khu Cụm N04/N05","PIPE-STREET-N04N05-D150",!ht,3,{name:"Tuyến Nhánh Cấp 3 D150 Nội Khu N04/N05",id:"PIPE-STREET-N04N05-D150",tier:"Cấp 3 (Reticulation D150)",status:ht?"ĐÃ CẮT NƯỚC":"Ổn định",diameter:"DN150",flow:ht?"0.0 m³/h":"210 m³/h",dma:"DMA THNC-01"});const ye=(le,ie,Le,we,ce,Pe)=>{const Se=new N((le.x+ie.x)/2,.8,(le.z+ie.z)/2);pe([le,Se,ie],.55,Pe?6583435:P?16498468:14251782,`Ống Đấu Nối Cấp 4 ${Le} -> ${we}`,`PIPE-SRV-${ce}`,!Pe,4,{name:`Ống Đấu Nối Cấp 4 ${Le} -> ${we}`,id:`PIPE-SRV-${ce}`,tier:"Cấp 4 (Service Connection)",status:Pe?"ĐÃ CẮT DÒNG (KHÓA VAN)":"Cấp nước trực tiếp bể ngầm",diameter:Le,pressure:Pe?"0.00 bar":"3.25 bar",flow:Pe?"0.0 m³/h":"Theo định mức AMR"})};ye(new N(0,1.1,20),new N(25,1.1,20),"DN80","Tháp 34T","34T",V),ye(new N(0,1.1,30),new N(-35,1.1,30),"DN65","Chung cư 24T1","24T1",V),ye(new N(0,1.1,-30),new N(-35,1.1,-30),"DN65","Chung cư 24T2","24T2",V),ye(new N(42,1.1,75),new N(42,1.1,75),"DN50","Chung cư 17T1","17T1",V),ye(new N(0,1.1,155),new N(35,1.1,155),"DN80","Diamond Flower","DIAMOND",ut),ye(new N(50,1.1,155),new N(80,1.1,155),"DN80","Star City","STAR-CITY",ut),ye(new N(100,1.1,155),new N(130,1.1,155),"DN65","The Golden Palm","GOLDEN-PALM",ut),ye(new N(0,1.1,155),new N(-60,1.1,155),"DN80","HUD Tower A","HUD-A",ut),ye(new N(-60,1.1,155),new N(-100,1.1,155),"DN65","HUD Tower B","HUD-B",ut),ye(new N(140,1.1,155),new N(180,1.1,155),"DN65","MB Grand Tower","MB-TOWER",ut),ye(new N(0,1.1,-180),new N(65,1.1,-215),"DN80","Charmvit Tower","CHARMVIT",ht),ye(new N(40,1.1,-85),new N(40,1.1,-85),"DN80","N05-34T1","N05-1",ht),ye(new N(80,1.1,-85),new N(80,1.1,-85),"DN80","N05-34T2","N05-2",ht),ye(new N(-160,1.1,45),new N(-150,1.1,45),"DN65","Mandarin Block A","MANDARIN-A",xt),ye(new N(-160,1.1,-5),new N(-150,1.1,-5),"DN65","Mandarin Block C","MANDARIN-C",xt),ye(new N(-160,1.1,-95),new N(-135,1.1,-95),"DN50","THPT Amsterdam","AMS",xt),ye(new N(-440,1.1,-320),new N(-540,1.1,-320),"DN150","Keangnam 72","KEANGNAM-72",yt),ye(new N(-540,1.1,-320),new N(-590,1.1,-320),"DN80","Keangnam Tháp A","KEANGNAM-A",yt),ye(new N(-540,1.1,-320),new N(-490,1.1,-320),"DN80","Keangnam Tháp B","KEANGNAM-B",yt),ye(new N(-440,1.1,-220),new N(-460,1.1,-220),"DN65","Handico Tower","HANDICO",yt),ye(new N(-440,1.1,-170),new N(-460,1.1,-170),"DN65","CEO Tower","CEO",yt),ye(new N(-440,1.1,-110),new N(-440,1.1,-110),"DN65","Bảo Tàng Hà Nội","MUSEUM",yt),ye(new N(-440,1.1,140),new N(-440,1.1,140),"DN100","Hội Nghị Quốc Gia NCC","NCC",!1),ye(new N(-280,1.1,-180),new N(-280,1.1,-180),"DN80","Big C Thăng Long","BIGC",Ae),ye(new N(-230,1.1,-220),new N(-230,1.1,-220),"DN80","D'Capitale C1","DCP-C1",Ae),ye(new N(-190,1.1,-220),new N(-190,1.1,-220),"DN80","D'Capitale C2","DCP-C2",Ae),ye(new N(-440,1.1,40),new N(-360,1.1,40),"DN80","Thăng Long Number One A","TL-NO1-A",Ae),ye(new N(-360,1.1,40),new N(-360,1.1,85),"DN80","Thăng Long Number One B","TL-NO1-B",Ae),ye(new N(240,1.1,270),new N(200,1.1,270),"DN80","Hapulico Complex A","HAP-A",Ve),ye(new N(240,1.1,270),new N(110,1.1,270),"DN65","Golden West","GOLDEN-WEST",Ve),ye(new N(240,1.1,340),new N(250,1.1,340),"DN80","Imperia Garden A","IMP-A",Ve),ye(new N(240,1.1,340),new N(290,1.1,340),"DN80","Imperia Garden B","IMP-B",Ve),ye(new N(75,1.1,0),new N(75,1.1,-10),"DN50","Biệt Thự BT1-BT6","VILLAS",je),ye(new N(75,1.1,35),new N(110,1.1,35),"DN50","Trường Ngôi Sao Hà Nội","NGOI-SAO",je);const ke=new Qn;ne.add(ke);const me=(le,ie,Le,we,ce,Pe,Se)=>{if(!t.valves)return null;const Me=new Qn;Me.position.set(le[0],0,le[2]);const Ze=new nr(2.4,2.7,.6,16),ct=new Tn({color:we?4524554:413243,roughness:.6}),Pt=new Lt(Ze,ct);Pt.position.y=.3,Me.add(Pt);const jt=new bc(2.6,3.6,24),Zt=new va({color:we?15680580:1096065,side:Xi}),nn=new Lt(jt,Zt);nn.rotation.x=-Math.PI/2,nn.position.y=.15,Me.add(nn);const Et=new Cr(3.6,3.6,3.6),hn=new Tn({color:we?14427686:1483594,metalness:.7,roughness:.25,emissive:we?10033947:417606,emissiveIntensity:.35}),bt=new Lt(Et,hn);bt.position.y=2.4,bt.castShadow=!0,Me.add(bt);const dn=new nr(.5,.5,2.5,12),rn=new Tn({color:9741240,metalness:.8}),kn=new Lt(dn,rn);kn.position.y=4.5,Me.add(kn);const Vn=new af(2,.45,12,24),mi=new Tn({color:we?16096779:3718648,metalness:.75,roughness:.2}),Gn=new Lt(Vn,mi);Gn.rotation.x=we?0:Math.PI/2,Gn.position.y=5.8,Me.add(Gn);const ln=document.createElement("canvas");ln.width=420,ln.height=100;const fn=ln.getContext("2d");fn.fillStyle=we?"#fee2e2":"#fef08a",fn.beginPath(),fn.roundRect(8,8,404,84,18),fn.fill(),fn.strokeStyle=we?"#dc2626":"#15803d",fn.lineWidth=6,fn.stroke(),fn.strokeStyle=we?"#b91c1c":"#166534",fn.lineWidth=1.5,fn.strokeRect(14,14,392,72),fn.fillStyle="#0f172a",fn.font='bold 30px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fn.textAlign="center",fn.textBaseline="middle",fn.fillText(we?`🔒 ${Le}: ĐÃ ĐÓNG (CẮT NƯỚC)`:`🔓 ${Le}: ĐANG MỞ (CLICK KHÓA)`,210,50);const Vt=new _0(ln),gi=new Hd({map:Vt,transparent:!0,depthTest:!1}),ai=new c0(gi);ai.position.set(0,12,0),ai.scale.set(30,7.5,1),Me.add(ai);const Li={name:ie,id:Le,type:"Chốt Khóa Nước Phân Đoạn (Smart Isolation Valve)",status:we?"🔒 ĐÃ ĐÓNG (CÔ LẬP & CẮT NƯỚC CỤC BỘ)":"🔓 ĐANG MỞ (Cấp nước bình thường)",isClosed:we,zoneDescription:ce,affectedBuildings:Pe,householdsAffected:Se,pressure:we?"0.00 bar (Cửa xả)":"3.30 bar (Ổn định)",diameter:"DN300 - DN500 Gang Cầu FCD",material:"Van Cổng Tín Hiệu Điện Tử (Flanged Resilient Gate Valve)"};return Me.userData={name:ie,id:Le,type:"SmartValve",data:Li},bt.userData=Me.userData,x.current.push(bt),ke.add(Me),Me};if(me([0,2.5,20],"Chốt Khóa V-HDT-01 (Hoàng Đạo Thúy - Tháp 34T)","VALVE-01",V,"Cụm Lõi Đô Thị Hoàng Đạo Thúy & 24T1-24T3","Tháp Biểu Tượng 34T, Cụm 24T1, 24T2, 24T3, Dãy 17T1-17T6 và dãy nhà phố nội khu","1,120 hộ dân (~4,500 cư dân)"),me([-160,2.5,25],"Chốt Khóa V-HMG-02 (Hoàng Minh Giám - Mandarin)","VALVE-02",xt,"Phân Khu Trường Học & Chung Cư Cao Cấp Hoàng Minh Giám","Tổ Hợp Mandarin Garden (4 Tháp A, B, C, D) & Trường THPT Chuyên Hà Nội - Amsterdam","1,008 căn hộ + 3,200 học sinh & GV"),me([0,2.5,155],"Chốt Khóa V-LVL-03 (Lê Văn Lương - Diamond Flower)","VALVE-03",ut,"Nút Giao Lê Văn Lương - Hoàng Đạo Thúy","Diamond Flower Tower (36T), Star City, The Golden Palm, Cụm HUD Tower A & B, MB Grand Tower","850 hộ dân & 35,000m² văn phòng tài chính"),me([0,2.5,-180],"Chốt Khóa V-TDN-04 (Trần Duy Hưng - Charmvit Tower)","VALVE-04",ht,"Phân Khu Khách Sạn & Ngoại Giao Trần Duy Hưng","Tổ hợp Charmvit Tower, Khách sạn Grand Plaza, Cụm Chung Cư N04 (3 tháp) & N05 (2 tháp 34T)","920 căn hộ & 540 phòng khách sạn 5 sao"),me([-280,2.5,-180],"Chốt Khóa V-DCP-05 (Vinhomes D'Capitale & Big C)","VALVE-05",Ae,"Cửa Ngõ Phía Nam Trần Duy Hưng - Khuất Duy Tiến","Tổ Hợp 6 Tòa Tháp Vinhomes D'Capitale, Siêu Thị Big C Thăng Long, 2 Tháp Thăng Long Number One","3,000 căn hộ cao cấp & TTTM Big C Thăng Long"),me([-440,2.5,-320],"Chốt Khóa V-KNG-06 (Keangnam Landmark 72 & Phạm Hùng)","VALVE-06",yt,"Trung Tâm Tài Chính Phía Tây Hà Nội","Keangnam Hanoi Landmark 72 (350m), 2 Tháp Căn Hộ Đôi Keangnam 48T, Handico Tower, CEO Tower, Bảo tàng HN","922 căn hộ Penthouse, TTTM Lotte & Trụ sở Tập đoàn"),me([180,2.5,270],"Chốt Khóa V-HAP-07 (Ngụy Như Kon Tum - Hapulico)","VALVE-07",Ve,"Phân Khu Dân Cư Ngụy Như Kon Tum - Vũ Trọng Phụng","Tổ hợp Hapulico Complex (4 Block), Chung Cư Golden West, Imperia Garden (2 Tháp 35T), Shophouse Chợ Thuốc","1,200 căn hộ & Chợ Dược Phẩm miền Bắc"),me([75,2.5,0],"Chốt Khóa V-NTT-08 (Nguyễn Thị Thập - Khu Biệt Thự)","VALVE-08",je,"Khu Đô Thị Thấp Tầng Nguyễn Thị Thập","150 Biệt thự Liền kề BT1 - BT6, Trường Liên cấp Ngôi Sao, 50 Shophouse mặt phố Nguyễn Thị Thập","150 căn biệt thự & 2,200 học sinh"),t.hydrants){const le=new Qn;ne.add(le);const ie=(we,ce,Pe,Se)=>{const Me=new Qn;Me.position.set(we[0],0,we[2]);const Ze=new nr(.7,.8,1.2,12),ct=new Tn({color:14427686,metalness:.6,roughness:.25,emissive:10033947,emissiveIntensity:.35}),Pt=new Lt(Ze,ct);Pt.position.y=.6,Me.add(Pt);const jt=new nr(.55,.55,2.2,12),Zt=new Lt(jt,ct);Zt.position.y=2,Me.add(Zt);const nn=new xa(.65,12,12),Et=new Lt(nn,ct);Et.position.y=3.1,Me.add(Et),Me.userData={name:ce,id:Pe,type:"Trụ Cứu Hỏa PCCC",data:{name:ce,id:Pe,type:"Trụ Cứu Hỏa Đô Thị (TCVN 6379:1998)",status:"Sẵn sàng cấp nước chữa cháy 24/7 (Đạt QCVN 06:2022/BXD)",flow:"35.0 L/s (Lưu lượng danh định)",pressure:"3.35 bar (Cột áp tĩnh)",elevation:"+16.8m ASL",diameter:"Họng cấp DN100 + 2 họng phụ DN65",households:"Bán kính bảo vệ PCCC: 150m",dma:Se}},Zt.userData=Me.userData,x.current.push(Zt),le.add(Me)};[...[-300,-220,-140,-60,20,100,180,260].map((we,ce)=>({pos:[14,0,we],id:`HYD-HDT-${ce+1}`,road:"Đường Hoàng Đạo Thúy"})),...[-380,-300,-220,-140,-60,20,100,180,260,340].map((we,ce)=>({pos:[we,0,194],id:`HYD-LVL-${ce+1}`,road:"Đường Lê Văn Lương"})),...[-380,-300,-220,-140,-60,20,100,180,260,340].map((we,ce)=>({pos:[we,0,-196],id:`HYD-TDH-${ce+1}`,road:"Đường Trần Duy Hưng"})),...[-500,-420,-340,-260,-180,-100,-20,60,140,220,300,380].map((we,ce)=>({pos:[-422,0,we],id:`HYD-VD3-${ce+1}`,road:"Đường Phạm Hùng - Khuất Duy Tiến"})),...[-200,-130,-60,10,80,150,220,290].map((we,ce)=>({pos:[-148,0,we],id:`HYD-HMG-${ce+1}`,road:"Đường Hoàng Minh Giám"})),...[-140,-80,-20,40,100,160,220,280].map((we,ce)=>({pos:[we,0,12],id:`HYD-NTT-${ce+1}`,road:"Đường Nguyễn Thị Thập"})),...[-120,-60,0,60,120,180,240,300].map((we,ce)=>({pos:[we,0,362],id:`HYD-NNKT-${ce+1}`,road:"Đường Ngụy Như Kon Tum"})),...[-280,-200,-120,-40,40,120,200,280].map((we,ce)=>({pos:[352,0,we],id:`HYD-TK-${ce+1}`,road:"Phố Trung Kính"})),...[190,230,270,310,350,390].map((we,ce)=>({pos:[248,0,we],id:`HYD-VTP-${ce+1}`,road:"Phố Vũ Trọng Phụng"}))].forEach(we=>ie(we.pos,`Trụ Cứu Hỏa ${we.id}`,we.id,we.road))}if(t.tanks){const le=new Qn;le.position.set(-350,0,220);const ie=new nr(8,12,38,16),Le=new Tn({color:P?1976635:6583435,roughness:.7}),we=new Lt(ie,Le);we.position.y=19,we.castShadow=!0,le.add(we);const ce=new xa(18,24,20),Pe=new Tn({color:P?165063:223649,metalness:.6,roughness:.2,emissive:P?223649:165063,emissiveIntensity:.25}),Se=new Lt(ce,Pe);Se.position.y=44,Se.castShadow=!0,le.add(Se),le.userData={name:"Đài Nước & Trạm Bơm Tăng Áp Sông Đà (KĐT Nhân Chính)",id:"PUMP-STATION-MAIN",type:"Trạm Bơm & Đài Nước Tăng Áp",data:{name:"Đài Nước Điều Áp & Trạm Bơm Tăng Áp Sông Đà",id:"PUMP-STATION-MAIN",type:"Đài Nước Cân Bằng Thủy Lực & Trạm Bơm Tăng Áp",status:"Hoạt động liên tục (3/3 tổ máy biến tần)",flow:`${u.flow.toFixed(1)} m³/h`,pressure:`${u.pressure.toFixed(2)} bar (Áp lực xuất trạm)`,level:"14.2m / 16.0m (Dung tích 8,000 m³)",elevation:"+35.0m ASL",power:"3 x 160 kW Biến tần ABB",dma:"Toàn KĐT Trung Hòa - Nhân Chính"}},Se.userData=le.userData,x.current.push(Se),ne.add(le)}const _e=new Ky,De=new Xe,B=le=>{var we;const ie=ee.domElement.getBoundingClientRect();De.x=(le.clientX-ie.left)/ie.width*2-1,De.y=-((le.clientY-ie.top)/ie.height)*2+1,_e.setFromCamera(De,H);const Le=_e.intersectObjects(x.current,!0);if(Le.length>0){let ce=Le[0].object;for(;ce&&!((we=ce.userData)!=null&&we.data)&&ce.parent;)ce=ce.parent;ce&&ce.userData&&(ce.userData.type==="SmartValve"&&o&&o(ce.userData.id),m&&ce.userData.data&&m(ce.userData.data))}},xe=le=>{var we,ce;const ie=ee.domElement.getBoundingClientRect();De.x=(le.clientX-ie.left)/ie.width*2-1,De.y=-((le.clientY-ie.top)/ie.height)*2+1,_e.setFromCamera(De,H);const Le=_e.intersectObjects(x.current,!0);if(Le.length>0){let Pe=Le[0].object;for(;Pe&&!((we=Pe.userData)!=null&&we.name)&&Pe.parent;)Pe=Pe.parent;if(Pe&&((ce=Pe.userData)!=null&&ce.name)){ee.domElement.style.cursor="pointer",k(Pe.userData.name);return}}ee.domElement.style.cursor="grab",k(null)};ee.domElement.addEventListener("pointerdown",B),ee.domElement.addEventListener("pointermove",xe);const ge=()=>{b.current=requestAnimationFrame(ge),y.current.forEach(le=>{le.t=(le.t+le.speed)%1;const ie=le.curve.getPointAt(le.t);ie&&le.mesh.position.copy(ie)}),K.update(),ee.render(ne,H)};ge();const Oe=()=>{if(!T)return;const le=T.clientWidth,ie=T.clientHeight;H.aspect=le/ie,H.updateProjectionMatrix(),ee.setSize(le,ie)};return window.addEventListener("resize",Oe),()=>{window.removeEventListener("resize",Oe),ee.domElement&&(ee.domElement.removeEventListener("pointerdown",B),ee.domElement.removeEventListener("pointermove",xe)),b.current&&cancelAnimationFrame(b.current),E.current&&E.current.dispose(),y.current.forEach(le=>ne.remove(le.mesh))}},[s,e,t,r,l,p]);const F=T=>{const R=v.current,X=S.current;!R||!X||(T==="iso"?(R.position.set(780,720,880),X.target.set(0,20,0)):T==="top"?(R.position.set(0,1750,.1),X.target.set(0,0,0)):T==="keangnam"?(R.position.set(-360,280,-160),X.target.set(-540,110,-320)):T==="ncc"?(R.position.set(-260,240,320),X.target.set(-440,30,140)):T==="diamond"?(R.position.set(180,160,280),X.target.set(35,60,155)):T==="34t"?(R.position.set(130,120,110),X.target.set(25,45,20)):T==="dcapitale"?(R.position.set(-70,180,-70),X.target.set(-230,60,-220)):T==="hapulico"&&(R.position.set(340,160,420),X.target.set(180,50,270)),X.update())},U=T=>{const R=v.current,X=S.current;if(!R||!X)return;const P=new N().subVectors(X.target,R.position).normalize();R.position.addScaledVector(P,T*90),X.update()};return f.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:d?"440px":"560px"},children:[f.jsx("div",{ref:_,style:{width:"100%",height:"100%",outline:"none"}}),L.length>0&&f.jsxs("div",{style:{position:"absolute",top:"14px",left:"50%",transform:"translateX(-50%)",background:"rgba(220, 38, 38, 0.95)",color:"#ffffff",padding:"8px 18px",borderRadius:"8px",display:"flex",alignItems:"center",gap:"10px",zIndex:50,fontSize:"13px",fontWeight:"600",backdropFilter:"blur(6px)",animation:"pulse 2s infinite"},children:[f.jsx(ws,{size:18,color:"#fef08a"}),f.jsxs("span",{children:["⚠️ ĐANG CÔ LẬP CẮT NƯỚC: ",L.length," chốt khóa đang ĐÓNG. Click vào chốt van màu đỏ để mở lại nước!"]})]}),f.jsxs("div",{style:{position:"absolute",top:"14px",right:"14px",display:"flex",flexDirection:"column",gap:"6px",zIndex:30},children:[f.jsxs("div",{className:"qatium-hud-pill-group",style:{flexDirection:d?"row":"column",padding:"4px",gap:"4px"},children:[f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>F("iso"),title:"Góc 3D Toàn cảnh quận quy mô 2.5km (Isometric 25X)",style:{padding:"5px 8px"},children:[f.jsx(_o,{size:13}),f.jsx("span",{children:d?"3D":"Toàn cảnh 25X"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>F("top"),title:"Bản đồ quy hoạch GIS 2D nhìn thẳng từ trên xuống",style:{padding:"5px 8px"},children:[f.jsx(rg,{size:13}),f.jsx("span",{children:d?"2D":"Bản đồ GIS 2D"})]}),!d&&f.jsxs(f.Fragment,{children:[f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>F("keangnam"),title:"Cận cảnh Keangnam Landmark 72 (350m)",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(so,{size:14}),f.jsx("span",{children:"Keangnam 72"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>F("ncc"),title:"Cận cảnh Trung tâm Hội nghị Quốc gia NCC",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(so,{size:14}),f.jsx("span",{children:"Hội Nghị QG (NCC)"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>F("diamond"),title:"Cận cảnh Diamond Flower Tower (36T)",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(so,{size:14}),f.jsx("span",{children:"Diamond Flower"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>F("34t"),title:"Cận cảnh Tháp 34T & Chốt van V-01",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(so,{size:14}),f.jsx("span",{children:"Tháp 34T & V-01"})]}),f.jsxs("button",{className:"qatium-hud-btn",onClick:()=>F("dcapitale"),title:"Cận cảnh Vinhomes D'Capitale & Big C",style:{padding:"6px 10px",width:"100%",justifyContent:"flex-start"},children:[f.jsx(so,{size:14}),f.jsx("span",{children:"D'Capitale & Big C"})]})]})]}),f.jsxs("div",{className:"qatium-hud-pill-group",style:{display:"flex",justifyContent:"space-between",padding:"4px"},children:[f.jsx("button",{className:"qatium-hud-btn",onClick:()=>U(1),title:"Phóng to",style:{padding:"5px 7px"},children:f.jsx(lx,{size:13})}),f.jsx("button",{className:"qatium-hud-btn",onClick:()=>U(-1),title:"Thu nhỏ",style:{padding:"5px 7px"},children:f.jsx(cx,{size:13})}),f.jsx("button",{className:"qatium-hud-btn",onClick:()=>F("iso"),title:"Đặt lại camera",style:{padding:"5px 7px"},children:f.jsx(sg,{size:13})})]})]}),f.jsx("div",{style:{position:"absolute",bottom:d?"14px":"80px",left:"16px",pointerEvents:"none",display:"flex",flexDirection:"column",gap:"4px",zIndex:30},children:D&&f.jsxs("div",{style:{background:"rgba(11, 18, 33, 0.95)",color:"#38bdf8",padding:"7px 14px",borderRadius:"6px",fontSize:"12.5px",fontWeight:"600",border:"1px solid rgba(56, 189, 248, 0.5)",boxShadow:"0 6px 16px rgba(0, 0, 0, 0.4)",display:"inline-flex",alignItems:"center",gap:"8px"},children:[f.jsx(_o,{size:14}),f.jsx("span",{children:D})]})})]})}function r2(){const[s,e]=wt.useState("overview"),[t,r]=wt.useState("DMA THNC-02"),[o,l]=wt.useState("24h"),[u,d]=wt.useState(null),[p,m]=wt.useState({pipes:!0,valves:!0,sensors:!0}),[_,M]=wt.useState(""),[v,S]=wt.useState([{id:1,type:"Áp lực cao đầu nguồn",location:"Trạm bơm Tăng áp Trung tâm (Lê Văn Lương)",time:"14:22",status:"High Pressure",severity:"danger",handled:!1},{id:2,type:"Nghi vấn rò rỉ đêm (MNF)",location:"Tuyến ống D200 Hoàng Minh Giám (DMA THNC-03)",time:"13:50",status:"Leak Suspected",severity:"warning",handled:!1},{id:3,type:"Cảnh báo sụt áp cục bộ",location:"Nhánh D150 cấp cụm 17T1 - 17T4 Hoàng Đạo Thúy",time:"12:15",status:"Low Pressure",severity:"warning",handled:!0},{id:4,type:"Độ đục vượt chuẩn nhẹ (NTU)",location:"Hố đồng hồ tổng Mandarin Garden",time:"10:04",status:"Water Quality",severity:"info",handled:!1}]),[E,b]=wt.useState(!1),[y,x]=wt.useState(null),[D,k]=wt.useState("3d"),[L,F]=wt.useState(null);wt.useEffect(()=>{const ve=$e=>{$e.target.closest(".qatium-dropdown-container")||F(null)};return document.addEventListener("pointerdown",ve),()=>document.removeEventListener("pointerdown",ve)},[]);const[U,T]=wt.useState("dark"),[R,X]=wt.useState("pressure"),[P,G]=wt.useState({pipes:!0,pipesPrimary:!0,pipesSecondary:!0,pipesService:!0,buildings:!0,hydrants:!0,streetLabels:!0,valves:!0,tanks:!0,sensors:!0,contour:!0}),[Z,ne]=wt.useState(14),[H,ee]=wt.useState(!1),[K,Q]=wt.useState(null),[$,Y]=wt.useState(!1),[J,O]=wt.useState(!1),[re,Ue]=wt.useState(null),oe=()=>{O(!0),Ue(null),qe("📡 Đang phát sóng âm phân tích tương quan tại các giếng van DMA THNC-02..."),setTimeout(()=>{O(!1),Ue({location:"Km 0+320 đường Hoàng Đạo Thúy (Đối diện sảnh 17T3)",depth:"1.25 m dưới mặt đường",pipe:"Ống gang dẻo D200 PN16 (Tuyến phân phối số 02)",lossRate:"11.8 m³/h (áp 3.2 bar)",confidence:"96.4%",frequency:"840 Hz (Sóng âm biến dạng rò ngầm)",recommendedAction:"Khóa cục bộ chốt van phụ và điều động đội cơ động đào thăm dò định vị vệt nứt."}),qe("🎯 Đã định vị chính xác vị trí rò rỉ ngầm tại Hoàng Đạo Thúy!")},1200)},[Te,Ne]=wt.useState({"VALVE-01":!1,"VALVE-02":!1,"VALVE-03":!1,"VALVE-04":!1,"VALVE-05":!1,"VALVE-06":!1,"VALVE-07":!1,"VALVE-08":!1}),ze={"VALVE-01":{name:"Chốt Khóa V-HDT-01 (Hoàng Đạo Thúy - Tháp 34T)",zone:"Cụm Lõi Đô Thị Hoàng Đạo Thúy & 24T1-24T2",affected:"Tháp Biểu Tượng 34T, Cụm 24T1, 24T2",households:"1.120 hộ dân (~4.500 cư dân)"},"VALVE-02":{name:"Chốt Khóa V-HMG-02 (Hoàng Minh Giám - Mandarin)",zone:"Phân Khu Trường Học & Chung Cư Hoàng Minh Giám",affected:"Mandarin Garden (4 Tháp) & THPT Chuyên Hà Nội - Amsterdam",households:"1.008 căn hộ + 3.200 học sinh"},"VALVE-03":{name:"Chốt Khóa V-LVL-03 (Lê Văn Lương - Diamond Flower)",zone:"Nút Giao Lê Văn Lương - Hoàng Đạo Thúy",affected:"Diamond Flower Tower (36T) & Chung cư Star City",households:"850 hộ dân & 35.000m² văn phòng"},"VALVE-04":{name:"Chốt Khóa V-TDN-04 (Trần Duy Hưng - Charmvit Tower)",zone:"Phân Khu Khách Sạn & Ngoại Giao Trần Duy Hưng",affected:"Tổ hợp Charmvit Tower, Grand Plaza & Cụm N04/N05",households:"920 căn hộ & 500 phòng khách sạn 5 sao"},"VALVE-05":{name:"Chốt Khóa V-DCP-05 (Vinhomes D'Capitale & Big C)",zone:"Cửa Ngõ Phía Nam Trần Duy Hưng - Khuất Duy Tiến",affected:"Tổ hợp 6 Tòa Tháp D'Capitale & Siêu Thị Big C Thăng Long",households:"3.000 căn hộ cao cấp & TTTM Big C"},"VALVE-06":{name:"Chốt Khóa V-KNG-06 (Keangnam Landmark 72 & Phạm Hùng)",zone:"Trung Tâm Tài Chính Phía Tây Hà Nội",affected:"Keangnam Hanoi Landmark 72 (350m, 72 tầng) & Bảo tàng Hà Nội",households:"922 căn hộ Penthouse, TTTM Lotte & Trụ sở Tập đoàn"},"VALVE-07":{name:"Chốt Khóa V-HAP-07 (Ngụy Như Kon Tum - Hapulico)",zone:"Phân Khu Dân Cư Ngụy Như Kon Tum - Vũ Trọng Phụng",affected:"Tổ hợp Hapulico Complex & Chung Cư Golden West",households:"1.200 căn hộ & Chợ Dược Phẩm miền Bắc"},"VALVE-08":{name:"Chốt Khóa V-NTT-08 (Nguyễn Thị Thập - Khu Biệt Thự)",zone:"Khu Đô Thị Thấp Tầng Nguyễn Thị Thập",affected:"150 Biệt thự Liền kề BT1 - BT6 & Trường Liên cấp Ngôi Sao",households:"150 căn biệt thự & 2.200 học sinh"}},Ee=ve=>{Ne($e=>{const V=!$e[ve],xt=ze[ve]||{name:ve,affected:ve};return qe(V?`🔒 ĐÃ KHÓA ${ve}: Cô lập cắt nước toàn bộ [${xt.affected}]!`:`🔓 ĐÃ MỞ ${ve}: Khôi phục cấp nước ổn định cho [${xt.affected}]!`),Q(ut=>ut&&(ut.id===ve||ut.id===xt.name)?{...ut,status:V?"🔒 ĐÃ ĐÓNG (CÔ LẬP & CẮT NƯỚC CỤC BỘ)":"🔓 ĐANG MỞ (Cấp nước bình thường)",isClosed:V,pressure:V?"0.00 bar (Cửa xả)":"3.30 bar (Ổn định)"}:ut),{...$e,[ve]:V}})};wt.useEffect(()=>{let ve;return H&&(ve=setInterval(()=>{ne($e=>($e+1)%24)},1400)),()=>clearInterval(ve)},[H]);const gt=(ve=>ve>=2&&ve<=4?{label:"03:00 - Đêm (MNF Rò rỉ)",flow:1420.5,pressure:3.78,status:"Cảnh báo rò rỉ đêm",nrw:"14.8%"}:ve>=6&&ve<=8?{label:"07:30 - Cao điểm sáng",flow:4280,pressure:3.12,status:"Phụ tải tăng cao",nrw:"10.2%"}:ve>=18&&ve<=20?{label:"19:00 - Cao điểm tối",flow:4650,pressure:2.98,status:"Phụ tải sinh hoạt cực đại",nrw:"10.6%"}:{label:`${ve<10?"0"+ve:ve}:00 - Giờ bình thường`,flow:3850.4,pressure:3.28,status:"Vận hành ổn định",nrw:"10.8%"})(Z),qe=ve=>{x(ve),setTimeout(()=>x(null),3e3)},lt=ve=>{S($e=>$e.map(V=>{if(V.id===ve){const xt=!V.handled;return qe(xt?`Đã điều động kỹ thuật viên xử lý: ${V.type}`:`Đã hoàn tác trạng thái sự cố: ${V.type}`),{...V,handled:xt}}return V}))},St=(ve="water_management_report.csv")=>{const V=encodeURI(`data:text/csv;charset=utf-8,\uFEFFDiem Do,Phan Khu,Luu Luong (m3/h),Ap Luc (bar),Trang Thai
PUMP-THNC-MAIN (Dau vao Le Van Luong),Tram Bom Tong,3850.4,3.88,Toi uu
PIPE-TRUNK-HDT-D500 (Truc Hoang Dao Thuy),Lien Vung,3850.4,3.28,Hoat dong tot
BLDG-34T-HDT (Thap 34T Hoang Dao Thuy),DMA THNC-02,48.5,3.25,On dinh
BLDG-DIAMOND-FLOWER (Diamond Flower Tower 36T),DMA THNC-03,72.0,3.38,On dinh
BLDG-CHARMVIT (Charmvit Tower Tran Duy Hung),DMA THNC-01,65.4,3.32,On dinh
BLDG-MANDARIN (Mandarin Garden),DMA THNC-03,68.5,3.20,On dinh
FH-HDT-01 (Tru Cuu Hoa 34T),Hoang Dao Thuy,108.0,3.25,San sang 100%
PRV-01 (Giam ap Tran Duy Hung),DMA THNC-01,680.0,3.32,Dieu tiet tot
PRV-02 (Giam ap Hoang Minh Giam),DMA THNC-03,410.0,3.22,Canh bao MNF dem
`),xt=document.createElement("a");xt.setAttribute("href",V),xt.setAttribute("download",ve),document.body.appendChild(xt),xt.click(),document.body.removeChild(xt),qe(`Đã xuất và tải về: ${ve}`)},st=()=>{window.print()},Yt={"DMA THNC-01":{name:"DMA THNC-01 - Khu Bắc Trần Duy Hưng (N01-N05 & Charmvit)",flow:"1,120.0 m³/h",pressure:"3.35 bar",households:"18,500 hộ & 45 VP",nrw:"10.5%",status:"Bình thường"},"DMA THNC-02":{name:"DMA THNC-02 - Khu Trung Tâm Hoàng Đạo Thúy (34T & Diamond Flower)",flow:"1,680.5 m³/h",pressure:"3.28 bar",households:"24,200 hộ + 2 Tháp",nrw:"11.2%",status:"Ổn định"},"DMA THNC-03":{name:"DMA THNC-03 - Khu Nam Lê Văn Lương & Mandarin Garden",flow:"1,050.0 m³/h",pressure:"3.22 bar",households:"22,000 hộ + THPT Ams",nrw:"11.8%",status:"Giám sát áp lực PCCC"}},$t={"24h":{title:"Lưu Lượng Thủy Lực 24 Giờ (m³/h)",subtitle:"So sánh Lưu lượng Thực tế vs Đường Trung bình Baseline",points:[{label:"00h",actual:68,baseline:65,alert:!1},{label:"02h",actual:74,baseline:60,alert:!0,note:"MNF vượt chuẩn (+14 m³/h)"},{label:"04h",actual:62,baseline:60,alert:!1},{label:"06h",actual:110,baseline:105,alert:!1},{label:"08h",actual:172,baseline:160,alert:!0,note:"Đỉnh cao điểm sáng"},{label:"10h",actual:130,baseline:132,alert:!1},{label:"12h",actual:142,baseline:140,alert:!1},{label:"14h",actual:145.8,baseline:138,alert:!1},{label:"16h",actual:138,baseline:135,alert:!1},{label:"18h",actual:165,baseline:162,alert:!1},{label:"20h",actual:152,baseline:150,alert:!1},{label:"22h",actual:98,baseline:95,alert:!1}]},"7d":{title:"Lưu Lượng Thủy Lực 7 Ngày Qua (m³/ngày)",subtitle:"Xu hướng cấp nước theo ngày trong tuần",points:[{label:"Thứ 2",actual:3250,baseline:3200,alert:!1},{label:"Thứ 3",actual:3310,baseline:3220,alert:!1},{label:"Thứ 4",actual:3480,baseline:3250,alert:!0,note:"Tăng vọt giữa tuần (+7%)"},{label:"Thứ 5",actual:3290,baseline:3240,alert:!1},{label:"Thứ 6",actual:3380,baseline:3300,alert:!1},{label:"Thứ 7",actual:3620,baseline:3550,alert:!1},{label:"CN",actual:3590,baseline:3500,alert:!1}]},"30d":{title:"Lưu Lượng Thủy Lực 30 Ngày (m³/ngày)",subtitle:"Đường biến thiên chu kỳ tháng",points:[{label:"Tuần 1",actual:23100,baseline:22800,alert:!1},{label:"Tuần 2",actual:24500,baseline:23e3,alert:!0,note:"Đợt nắng nóng tăng tiêu thụ"},{label:"Tuần 3",actual:23200,baseline:22900,alert:!1},{label:"Tuần 4",actual:22800,baseline:22700,alert:!1}]}}[o],Ut=Math.max(...$t.points.map(ve=>Math.max(ve.actual,ve.baseline)))*1.15,En=Math.min(...$t.points.map(ve=>Math.min(ve.actual,ve.baseline)))*.85,Ht=ve=>180-(ve-En)/(Ut-En)*160+10,on=ve=>{const V=620/($t.points.length-1);return $t.points.map((xt,ut)=>`${ut*V+40},${Ht(xt[ve])}`).join(" L ")};return f.jsxs("div",{className:"app-layout",children:[E&&f.jsx("div",{className:"sidebar-backdrop",onClick:()=>b(!1)}),f.jsxs("aside",{className:`app-sidebar ${E?"mobile-open":""}`,children:[f.jsxs("div",{className:"sidebar-header",children:[f.jsx("div",{className:"logo-badge",children:f.jsx(Js,{size:22})}),f.jsxs("div",{children:[f.jsx("div",{className:"logo-title",children:"Smart Water SCADA"}),f.jsx("div",{className:"logo-sub",children:"KĐT Trung Hòa – Nhân Chính"})]})]}),f.jsxs("nav",{className:"sidebar-nav",children:[f.jsx("div",{className:"nav-label",children:"Nghiệp Vụ"}),f.jsxs("button",{className:`nav-item ${s==="overview"?"active":""}`,onClick:()=>{e("overview"),b(!1)},children:[f.jsx(Rl,{size:18}),f.jsx("span",{children:"1. Tổng quan"})]}),f.jsxs("button",{className:`nav-item ${s==="gis"?"active":""}`,onClick:()=>{e("gis"),b(!1)},children:[f.jsx(rg,{size:18}),f.jsx("span",{children:"2. Mạng GIS"})]}),f.jsxs("button",{className:`nav-item ${s==="telemetry"?"active":""}`,onClick:()=>{e("telemetry"),b(!1)},children:[f.jsx(Dl,{size:18}),f.jsx("span",{children:"3. Áp & Lưu lượng"})]}),f.jsxs("button",{className:`nav-item ${s==="leaks"?"active":""}`,onClick:()=>{e("leaks"),b(!1)},children:[f.jsx(ws,{size:18}),f.jsx("span",{children:"4. Thất thoát (NRW)"})]}),f.jsxs("button",{className:`nav-item ${s==="quality"?"active":""}`,onClick:()=>{e("quality"),b(!1)},children:[f.jsx(Js,{size:18}),f.jsx("span",{children:"5. Chất lượng nước"})]}),f.jsx("div",{className:"nav-label",style:{marginTop:"16px"},children:"Báo Cáo"}),f.jsxs("button",{className:`nav-item ${s==="reports"?"active":""}`,onClick:()=>{e("reports"),b(!1)},children:[f.jsx(vh,{size:18}),f.jsx("span",{children:"6. Kiểm toán nước"})]})]}),f.jsxs("div",{className:"sidebar-footer",children:[f.jsxs("div",{className:"system-status",children:[f.jsx("span",{className:"status-dot"}),f.jsx("span",{children:"Trực tuyến: 512 node · 38 trụ PCCC"})]}),f.jsx(rx,{size:14,color:"#94a3b8",style:{cursor:"pointer"},onClick:()=>qe("Đã đồng bộ lại 512 node IoT & 38 trụ cứu hỏa PCCC KĐT Trung Hòa - Nhân Chính")})]})]}),f.jsxs("div",{className:"main-wrapper",children:[f.jsxs("header",{className:"top-header",children:[f.jsxs("div",{className:"header-left-group",children:[f.jsx("button",{className:"mobile-menu-btn",onClick:()=>b(!E),"aria-label":"Toggle navigation menu",children:E?f.jsx(Vm,{size:20}):f.jsx(ex,{size:20})}),f.jsxs("div",{className:"header-search",children:[f.jsx(sx,{size:16}),f.jsx("input",{type:"text",placeholder:"Tìm trạm, DMA, cảm biến...",value:_,onChange:ve=>M(ve.target.value)})]})]}),f.jsxs("div",{className:"header-actions",children:[f.jsxs("button",{className:"action-btn",onClick:()=>St("Bao_Cao_Van_Hanh_Ngay.csv"),title:"Xuất báo cáo CSV",children:[f.jsx(vh,{size:15}),f.jsx("span",{children:"Xuất báo cáo"})]}),f.jsxs("button",{className:"action-btn",style:{position:"relative"},onClick:()=>qe("Cảnh báo: 1 sự cố áp cao tại DMA 3"),"aria-label":"Thông báo sự cố",title:"Xem thông báo",children:[f.jsx(Y_,{size:16}),f.jsx("span",{style:{position:"absolute",top:"6px",right:"8px",width:"7px",height:"7px",background:"#ef4444",borderRadius:"50%"}})]}),f.jsxs("div",{className:"user-profile",title:"Tài khoản kỹ sư",children:[f.jsx("div",{className:"user-avatar",children:"AD"}),f.jsxs("div",{className:"user-info",children:[f.jsx("span",{className:"user-name",children:"Kỹ sư trực"}),f.jsx("span",{className:"user-role",children:"Vận hành"})]})]})]})]}),f.jsxs("main",{className:"content-container",children:[s==="overview"&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"page-title-row",children:[f.jsxs("div",{children:[f.jsx("h1",{className:"page-title",children:"Giám sát Cấp nước KĐT Trung Hòa – Nhân Chính"}),f.jsx("p",{className:"page-subtitle",children:"Mạng lưới 3 cấp: Truyền dẫn D500, Phân phối D200 và Tuyến dịch vụ đấu nối công trình"})]}),f.jsx("div",{style:{display:"flex",gap:"8px"},children:f.jsxs("span",{className:"metric-badge badge-success",children:[f.jsx(ys,{size:13}),f.jsx("span",{children:"Trạm bơm Lê Văn Lương: 100%"})]})})]}),f.jsxs("div",{className:"metrics-grid",children:[f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Lưu lượng cấp toàn KĐT"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#e0f2fe",color:"#0284c7"},children:f.jsx(Js,{size:18})})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:gt.flow.toFixed(1)}),f.jsx("span",{className:"metric-unit",children:"m³/h"})]}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-success",children:"↑ 3.2% định mức giờ"})})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Áp lực trung bình"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#ecfdf5",color:"#10b981"},children:f.jsx(Dl,{size:18})})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:gt.pressure.toFixed(2)}),f.jsx("span",{className:"metric-unit",children:"bar"})]}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-info",children:"Tối ưu: 2.8 - 3.5 bar"})})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Thất thoát (NRW)"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#fef3c7",color:"#d97706"},children:f.jsx(Hm,{size:18})})]}),f.jsx("div",{className:"metric-body",children:f.jsx("span",{className:"metric-value",children:gt.nrw})}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-success",children:"↓ 0.8% theo tuần"})})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Cảnh báo"}),f.jsx("div",{className:"metric-icon-wrap",style:{background:"#fee2e2",color:"#ef4444"},children:f.jsx(ws,{size:18})})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",style:{color:"#ef4444"},children:v.filter(ve=>!ve.handled).length}),f.jsx("span",{className:"metric-unit",children:"sự cố"})]}),f.jsx("div",{children:f.jsx("span",{className:"metric-badge badge-danger",children:"1 nghi vấn rò rỉ đêm"})})]})]}),f.jsxs("div",{className:"dashboard-main-grid",children:[f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(J_,{size:17,color:"#0284c7"}),f.jsx("span",{children:"Sơ đồ phân vùng DMA"})]}),f.jsxs("div",{className:"panel-card-actions",children:[f.jsxs("div",{className:"qatium-hud-pill-group",style:{padding:"2px"},children:[f.jsx("button",{className:`qatium-hud-btn ${U==="light"?"active":""}`,onClick:()=>T("light"),style:{padding:"4px 8px",fontSize:"11.5px"},title:"Chế độ Google Maps (Mây trời 3D)",children:"Google Maps 3D"}),f.jsx("button",{className:`qatium-hud-btn ${U==="dark"?"active":""}`,onClick:()=>T("dark"),style:{padding:"4px 8px",fontSize:"11.5px"},title:"Chế độ Bản Đồ Đêm",children:"Đêm"})]}),f.jsx("button",{className:"btn-sm btn-secondary",onClick:()=>e("gis"),children:"Mở GIS →"})]})]}),f.jsxs("div",{className:`map-canvas-container ${U==="dark"?"dark-theme":"light-theme"}`,style:{minHeight:"440px",height:"440px",position:"relative"},children:[f.jsx(tg,{theme:U,heatmap:R,assetsLayer:P,isolatedPipe:$,closedValves:Te,onToggleValve:Ee,simTime:Z,currentSim:gt,compact:!0,onSelectAsset:ve=>{Q(ve),ve.dma&&(ve.dma.includes("THNC-01")||ve.dma.includes("DMA 1"))?r("DMA THNC-01"):ve.dma&&(ve.dma.includes("THNC-02")||ve.dma.includes("DMA 2"))?r("DMA THNC-02"):ve.dma&&(ve.dma.includes("THNC-03")||ve.dma.includes("DMA 3"))&&r("DMA THNC-03")}}),f.jsxs("div",{className:"map-overlay-badge",style:{zIndex:25,pointerEvents:"auto"},children:[f.jsx("div",{className:"map-overlay-title",children:Yt[t].name}),f.jsxs("div",{className:"map-overlay-sub",children:["Lưu lượng: ",f.jsx("b",{children:Yt[t].flow})," · Áp: ",f.jsx("b",{children:Yt[t].pressure})," · NRW: ",f.jsx("b",{children:Yt[t].nrw})]})]})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(Rl,{size:17,color:"#0284c7"}),f.jsx("span",{children:"Thủy lực 24h & Cảnh báo"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:$t.subtitle})]}),f.jsxs("div",{className:"timeframe-group",children:[f.jsx("button",{className:`timeframe-btn ${o==="24h"?"active":""}`,onClick:()=>l("24h"),children:"24 Giờ"}),f.jsx("button",{className:`timeframe-btn ${o==="7d"?"active":""}`,onClick:()=>l("7d"),children:"7 Ngày"}),f.jsx("button",{className:`timeframe-btn ${o==="30d"?"active":""}`,onClick:()=>l("30d"),children:"30 Ngày"})]})]}),f.jsxs("div",{className:"line-chart-wrapper",children:[f.jsxs("div",{className:"line-chart-legend",children:[f.jsxs("div",{className:"legend-line-item",children:[f.jsx("div",{className:"line-sample-actual"}),f.jsx("span",{children:"Thực tế"})]}),f.jsxs("div",{className:"legend-line-item",children:[f.jsx("div",{className:"line-sample-baseline"}),f.jsx("span",{children:"Baseline"})]}),f.jsxs("div",{className:"legend-line-item",children:[f.jsx("div",{className:"line-sample-alert"}),f.jsx("span",{children:"Lệch chuẩn"})]})]}),f.jsxs("div",{style:{position:"relative",width:"100%",height:"220px",background:"#ffffff"},children:[f.jsxs("svg",{viewBox:"0 0 700 220",style:{width:"100%",height:"100%"},children:[f.jsx("line",{x1:"40",y1:"30",x2:"680",y2:"30",stroke:"#f1f5f9",strokeWidth:"1"}),f.jsx("line",{x1:"40",y1:"80",x2:"680",y2:"80",stroke:"#f1f5f9",strokeWidth:"1"}),f.jsx("line",{x1:"40",y1:"130",x2:"680",y2:"130",stroke:"#f1f5f9",strokeWidth:"1"}),f.jsx("line",{x1:"40",y1:"180",x2:"680",y2:"180",stroke:"#e2e8f0",strokeWidth:"1.5"}),f.jsx("path",{d:`M ${on("baseline")}`,fill:"none",stroke:"#94a3b8",strokeWidth:"2.5",strokeDasharray:"6,5"}),f.jsx("path",{d:`M ${on("actual")}`,fill:"none",stroke:"#0284c7",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"}),$t.points.map((ve,$e)=>{const xt=620/($t.points.length-1),ut=$e*xt+40,ht=Ht(ve.actual);return f.jsxs("g",{children:[ve.alert&&f.jsx("circle",{cx:ut,cy:ht,r:"9",fill:"rgba(239, 68, 68, 0.25)",stroke:"#ef4444",strokeWidth:"1.5"}),f.jsx("circle",{cx:ut,cy:ht,r:ve.alert?"5":"4",fill:ve.alert?"#ef4444":"#0284c7",stroke:"#ffffff",strokeWidth:"2",style:{cursor:"pointer"},onMouseEnter:()=>d(ve),onMouseLeave:()=>d(null)}),f.jsx("text",{x:ut,y:"202",textAnchor:"middle",fontSize:"11",fill:"#64748b",fontFamily:"var(--font-mono)",children:ve.label})]},$e)})]}),u&&f.jsxs("div",{style:{position:"absolute",top:"10px",right:"20px",background:"#0f172a",color:"#ffffff",padding:"8px 12px",borderRadius:"8px",fontSize:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)",zIndex:10},children:[f.jsxs("div",{style:{fontWeight:"700",marginBottom:"2px"},children:["Thời điểm: ",u.label]}),f.jsxs("div",{children:["Thực tế: ",f.jsxs("b",{style:{color:"#38bdf8"},children:[u.actual," m³/h"]})]}),f.jsxs("div",{children:["Trung bình: ",f.jsxs("b",{children:[u.baseline," m³/h"]})]}),u.note&&f.jsxs("div",{style:{color:"#f87171",marginTop:"4px",fontWeight:"600"},children:["⚠ ",u.note]})]})]}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",fontSize:"12px",color:"#64748b",borderTop:"1px solid #f1f5f9",paddingTop:"10px"},children:[f.jsxs("span",{children:["MNF đêm định mức: ",f.jsx("b",{children:"65 m³/h"})," (Ngưỡng cảnh báo: ",">"," 70 m³/h)"]}),f.jsxs("span",{children:["Hệ số an toàn mạng lưới: ",f.jsx("b",{style:{color:"#16a34a"},children:"1.15 (Đạt chuẩn)"})]})]})]})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(ax,{size:17,color:"#ef4444"}),f.jsx("span",{children:"Nhật ký sự cố SCADA"})]}),f.jsx("div",{className:"panel-card-actions",children:f.jsx("span",{className:"metric-badge badge-warning",children:"Chờ xử lý"})})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Mức độ"}),f.jsx("th",{children:"Sự cố"}),f.jsx("th",{children:"Vị trí"}),f.jsx("th",{children:"Giờ"}),f.jsx("th",{children:"Trạng thái"}),f.jsx("th",{children:"Thao tác"})]})}),f.jsx("tbody",{children:v.map(ve=>f.jsxs("tr",{children:[f.jsx("td",{children:f.jsx("span",{className:`metric-badge ${ve.severity==="danger"?"badge-danger":ve.severity==="warning"?"badge-warning":"badge-info"}`,children:ve.status})}),f.jsx("td",{style:{fontWeight:"600"},children:ve.type}),f.jsx("td",{children:ve.location}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:ve.time}),f.jsx("td",{children:ve.handled?f.jsxs("span",{style:{color:"#10b981",fontWeight:"600",display:"flex",alignItems:"center",gap:"4px"},children:[f.jsx(ys,{size:14})," Đã nhận"]}):f.jsx("span",{style:{color:"#ef4444",fontWeight:"600"},children:"Chưa xử lý"})}),f.jsx("td",{children:f.jsx("button",{className:`btn-sm ${ve.handled?"btn-secondary":"btn-primary"}`,onClick:()=>lt(ve.id),children:ve.handled?"Hoàn tác":"Điều động"})})]},ve.id))})]})})]})]}),s==="gis"&&f.jsxs("div",{className:"panel-card",style:{position:"relative"},children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(_o,{size:18,color:"#0284c7"}),f.jsx("span",{children:"Mạng 3D Digital Twin (GIS Thủy lực)"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"Không gian 3D địa hình, mô phỏng thủy lực thời gian thực và quản lý tài sản theo chuẩn Qatium"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[f.jsxs("button",{className:`btn-sm ${$?"btn-primary":"btn-secondary"}`,onClick:()=>{Y(!$),qe($?"Đã mở lại van PRV-02, mạng lưới trở lại bình thường.":"Mô phỏng: Đã đóng van PRV-02! Khu vực DMA 2 đang chạy nguồn dự phòng.")},title:"Mô phỏng đóng ngắt sự cố",children:[f.jsx(Ll,{size:13}),f.jsx("span",{children:$?"Mở van PRV-02":"Mô phỏng đóng van PRV-02"})]}),f.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>St("Mo_Hinh_Mang_3D_GIS.csv"),children:[f.jsx(vh,{size:13}),f.jsx("span",{children:"Xuất GIS"})]})]})]}),f.jsxs("div",{className:`map-canvas-container ${U==="dark"?"dark-theme":"light-theme"}`,style:{minHeight:"640px",position:"relative"},children:[f.jsxs("div",{style:{position:"absolute",top:"14px",left:"14px",zIndex:35,display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center",pointerEvents:"auto"},children:[f.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[f.jsx("div",{className:"qatium-hud-pill-group",children:f.jsxs("button",{className:`qatium-hud-btn ${L==="mode"||D!=="3d"?"active":""}`,onClick:()=>F(L==="mode"?null:"mode"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Chọn chế độ hiển thị không gian (2D, 3D, X-Ray)",children:[f.jsx($_,{size:13,color:"#38bdf8"}),f.jsxs("span",{children:["Chế độ: ",f.jsx("span",{style:{color:D==="xray"?"#38bdf8":"#ffffff"},children:D==="3d"?"3D":D==="2d"?"2D":"X-Ray"})]}),f.jsx(Pl,{size:12,style:{transform:L==="mode"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),L==="mode"&&f.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"240px",background:"rgba(11, 20, 38, 0.96)",backdropFilter:"blur(14px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.7), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[f.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Chế độ không gian"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",background:D==="3d"?"rgba(2, 132, 199, 0.25)":"transparent",color:D==="3d"?"#38bdf8":"#cbd5e1",transition:"all 0.15s ease"},onClick:()=>{k("3d"),F(null)},children:[D==="3d"?f.jsx(gh,{size:14,color:"#38bdf8"}):f.jsx(mh,{size:14,color:"#64748b"}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"12.5px",fontWeight:600},children:"3D (Digital Twin)"}),f.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Phối cảnh không gian 3D chuẩn Qatium"})]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",background:D==="2d"?"rgba(2, 132, 199, 0.25)":"transparent",color:D==="2d"?"#38bdf8":"#cbd5e1",transition:"all 0.15s ease"},onClick:()=>{k("2d"),F(null)},children:[D==="2d"?f.jsx(gh,{size:14,color:"#38bdf8"}):f.jsx(mh,{size:14,color:"#64748b"}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"12.5px",fontWeight:600},children:"2D (Mặt phẳng)"}),f.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Bản đồ quy hoạch nhìn từ trên xuống"})]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",background:D==="xray"?"rgba(2, 132, 199, 0.25)":"transparent",color:D==="xray"?"#38bdf8":"#cbd5e1",transition:"all 0.15s ease"},onClick:()=>{k("xray"),F(null)},children:[D==="xray"?f.jsx(gh,{size:14,color:"#38bdf8"}):f.jsx(mh,{size:14,color:"#64748b"}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"12.5px",fontWeight:600,color:"#38bdf8"},children:"X-Ray (Trong suốt công trình)"}),f.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Làm trong suốt khối nhà để soi mạng ống ngầm"})]})]})]})]}),f.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[f.jsx("div",{className:"qatium-hud-pill-group",children:f.jsxs("button",{className:`qatium-hud-btn ${L==="pipes"?"active":""}`,onClick:()=>F(L==="pipes"?null:"pipes"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Bật/tắt các cấp tuyến ống dẫn nước",children:[f.jsx(Js,{size:13,color:"#00f0ff"}),f.jsxs("span",{children:["Đường ống (",[P.pipesPrimary,P.pipesSecondary,P.pipesService].filter(Boolean).length,"/3)"]}),f.jsx(Pl,{size:12,style:{transform:L==="pipes"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),L==="pipes"&&f.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"240px",background:"rgba(11, 20, 38, 0.96)",backdropFilter:"blur(14px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.7), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[f.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#00f0ff",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Mạng lưới đường ống"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:P.pipesPrimary?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:ve=>{ve.stopPropagation(),G($e=>({...$e,pipesPrimary:!$e.pipesPrimary}))},children:[P.pipesPrimary?f.jsx(vr,{size:15,color:"#00f0ff"}):f.jsx(_r,{size:15,color:"#64748b"}),f.jsxs("div",{style:{flex:1},children:[f.jsx("div",{style:{fontSize:"12.5px",fontWeight:600},children:"Cấp 1 (D500 - D800)"}),f.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Tuyến truyền dẫn chính từ NMN Sông Đà"})]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:P.pipesSecondary?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:ve=>{ve.stopPropagation(),G($e=>({...$e,pipesSecondary:!$e.pipesSecondary}))},children:[P.pipesSecondary?f.jsx(vr,{size:15,color:"#f59e0b"}):f.jsx(_r,{size:15,color:"#64748b"}),f.jsxs("div",{style:{flex:1},children:[f.jsx("div",{style:{fontSize:"12.5px",fontWeight:600},children:"Cấp 2 (D200 - D300)"}),f.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Mạch vòng phân phối liên phường"})]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:P.pipesService?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:ve=>{ve.stopPropagation(),G($e=>({...$e,pipesService:!$e.pipesService}))},children:[P.pipesService?f.jsx(vr,{size:15,color:"#38bdf8"}):f.jsx(_r,{size:15,color:"#64748b"}),f.jsxs("div",{style:{flex:1},children:[f.jsx("div",{style:{fontSize:"12.5px",fontWeight:600},children:"Cấp 3 (Đấu Nối Tòa Nhà)"}),f.jsx("div",{style:{fontSize:"11px",color:"#94a3b8"},children:"Nhánh dịch vụ dẫn vào chân công trình"})]})]})]})]}),f.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[f.jsx("div",{className:"qatium-hud-pill-group",children:f.jsxs("button",{className:`qatium-hud-btn ${L==="devices"?"active":""}`,onClick:()=>F(L==="devices"?null:"devices"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Bật/tắt các loại thiết bị mạng lưới & quan trắc",children:[f.jsx(Ll,{size:13,color:"#38bdf8"}),f.jsxs("span",{children:["Thiết bị (",[P.valves,P.sensors,P.hydrants,P.tanks].filter(Boolean).length,"/4)"]}),f.jsx(Pl,{size:12,style:{transform:L==="devices"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),L==="devices"&&f.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"230px",background:"rgba(11, 20, 38, 0.96)",backdropFilter:"blur(14px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.7), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[f.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Thiết bị & Quan trắc SCADA"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:P.valves?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:ve=>{ve.stopPropagation(),G($e=>({...$e,valves:!$e.valves}))},children:[P.valves?f.jsx(vr,{size:15,color:"#38bdf8"}):f.jsx(_r,{size:15,color:"#64748b"}),f.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Van PRV & Chốt cách ly"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:P.sensors?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:ve=>{ve.stopPropagation(),G($e=>({...$e,sensors:!$e.sensors}))},children:[P.sensors?f.jsx(vr,{size:15,color:"#38bdf8"}):f.jsx(_r,{size:15,color:"#64748b"}),f.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Cảm biến áp & lưu lượng"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:P.hydrants?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:ve=>{ve.stopPropagation(),G($e=>({...$e,hydrants:!$e.hydrants}))},children:[P.hydrants?f.jsx(vr,{size:15,color:"#ef4444"}):f.jsx(_r,{size:15,color:"#64748b"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(Q_,{size:13,color:"#ef4444"}),f.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Trụ PCCC (38 trụ)"})]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:P.tanks?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:ve=>{ve.stopPropagation(),G($e=>({...$e,tanks:!$e.tanks}))},children:[P.tanks?f.jsx(vr,{size:15,color:"#38bdf8"}):f.jsx(_r,{size:15,color:"#64748b"}),f.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Đài nước & Trạm bơm"})]})]})]}),f.jsxs("div",{className:"qatium-dropdown-container",style:{position:"relative"},children:[f.jsx("div",{className:"qatium-hud-pill-group",children:f.jsxs("button",{className:`qatium-hud-btn ${L==="buildings"?"active":""}`,onClick:()=>F(L==="buildings"?null:"buildings"),style:{whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:"6px",fontWeight:600},title:"Bật/tắt khối nhà 3D và tên đường",children:[f.jsx(_o,{size:13,color:"#38bdf8"}),f.jsxs("span",{children:["Công trình (",[P.buildings,P.streetLabels].filter(Boolean).length,"/2)"]}),f.jsx(Pl,{size:12,style:{transform:L==="buildings"?"rotate(180deg)":"none",transition:"transform 0.2s"}})]})}),L==="buildings"&&f.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",left:0,minWidth:"220px",background:"rgba(11, 20, 38, 0.96)",backdropFilter:"blur(14px)",border:"1px solid rgba(56, 189, 248, 0.35)",borderRadius:"8px",boxShadow:"0 12px 30px -4px rgba(0, 0, 0, 0.7), 0 0 15px rgba(2, 132, 199, 0.25)",padding:"6px",zIndex:100},children:[f.jsx("div",{style:{padding:"6px 10px",fontSize:"11px",fontWeight:700,color:"#38bdf8",textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid rgba(255,255,255,0.08)",marginBottom:"4px"},children:"Địa hình & Kiến trúc"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:P.buildings?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:ve=>{ve.stopPropagation(),G($e=>({...$e,buildings:!$e.buildings}))},children:[P.buildings?f.jsx(vr,{size:15,color:"#38bdf8"}):f.jsx(_r,{size:15,color:"#64748b"}),f.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Khối Nhà 3D"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"8px 10px",borderRadius:"6px",cursor:"pointer",color:P.streetLabels?"#ffffff":"#94a3b8",transition:"all 0.15s ease"},onClick:ve=>{ve.stopPropagation(),G($e=>({...$e,streetLabels:!$e.streetLabels}))},children:[P.streetLabels?f.jsx(vr,{size:15,color:"#38bdf8"}):f.jsx(_r,{size:15,color:"#64748b"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(ox,{size:13,color:"#38bdf8"}),f.jsx("span",{style:{fontSize:"12.5px",fontWeight:600},children:"Tên đường (Maps)"})]})]})]})]}),f.jsxs("div",{className:"qatium-hud-pill-group",style:{padding:"5px 12px",fontSize:"11.5px",fontWeight:600,display:"inline-flex",alignItems:"center",gap:"6px",cursor:"pointer",color:"#cbd5e1"},onClick:()=>Ee("VALVE-08"),title:"Click để mô phỏng đóng/mở chốt van VALVE-08",children:[f.jsx("span",{style:{color:Te["VALVE-08"]?"#ef4444":"#10b981",fontSize:"14px",lineHeight:1},children:"●"}),f.jsxs("span",{style:{color:"#ffffff",letterSpacing:"0.02em"},children:["VALVE-08: ",Te["VALVE-08"]?"ĐÃ ĐÓNG":"MỞ"]}),f.jsx("span",{style:{fontSize:"11px"},children:Te["VALVE-08"]?"🔒":"🔓"})]})]}),f.jsx(tg,{theme:U,heatmap:R,viewMode:D,assetsLayer:P,isolatedPipe:$,closedValves:Te,onToggleValve:Ee,simTime:Z,currentSim:gt,onSelectAsset:ve=>Q(ve)}),K&&f.jsxs("div",{className:"qatium-inspector-drawer",children:[f.jsxs("div",{className:"inspector-header",children:[f.jsxs("div",{className:"inspector-title",children:[f.jsx(_o,{size:16,color:"#0284c7"}),f.jsx("span",{children:K.name})]}),f.jsx("button",{className:"inspector-close-btn",onClick:()=>Q(null),"aria-label":"Đóng thanh thông tin",children:f.jsx(Vm,{size:16})})]}),f.jsxs("div",{className:"inspector-body",children:[f.jsxs("div",{children:[f.jsxs("span",{className:"metric-badge badge-info",style:{marginBottom:"6px"},children:["Mã ID: ",K.id]}),f.jsx("div",{style:{fontSize:"12px",color:"#64748b"},children:K.type})]}),K.isCutOff&&f.jsxs("div",{style:{padding:"10px",borderRadius:"6px",background:"rgba(239, 68, 68, 0.15)",border:"1px solid #ef4444",color:"#dc2626",marginTop:"6px"},children:[f.jsxs("div",{style:{fontWeight:700,fontSize:"12.5px",display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(ws,{size:15,color:"#dc2626"}),f.jsx("span",{children:"CÔNG TRÌNH ĐANG BỊ CẮT NƯỚC!"})]}),f.jsxs("div",{style:{fontSize:"11.5px",marginTop:"4px",color:"#991b1b"},children:["Chốt van ",f.jsx("b",{children:K.cutOffValveName||"phân đoạn"})," đang bị đóng để cô lập sự cố. Áp lực cấp nước đo được: ",f.jsx("b",{children:"0.00 bar"}),"."]})]}),K.zoneDescription&&f.jsxs("div",{style:{marginTop:"6px",padding:"10px",borderRadius:"6px",background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.3)"},children:[f.jsxs("div",{style:{color:"#dc2626",fontWeight:700,fontSize:"12px",display:"flex",alignItems:"center",gap:"5px"},children:[f.jsx(ws,{size:14}),f.jsx("span",{children:"PHẠM VI ẢNH HƯỞNG KHI KHÓA VAN:"})]}),f.jsxs("div",{style:{fontSize:"12px",marginTop:"4px"},children:[f.jsx("b",{children:"Khu vực:"})," ",K.zoneDescription]}),f.jsxs("div",{style:{fontSize:"12px"},children:[f.jsx("b",{children:"Công trình:"})," ",K.affectedBuildings]}),f.jsxs("div",{style:{fontSize:"12px"},children:[f.jsx("b",{children:"Số hộ dân mất nước:"})," ",f.jsx("span",{style:{color:"#dc2626",fontWeight:700},children:K.householdsAffected})]})]}),f.jsxs("div",{className:"inspector-grid",children:[f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Áp Lực SCADA"}),f.jsx("span",{className:"inspector-metric-val",children:K.pressure||K.inletPressure||"N/A"})]}),f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Lưu Lượng Cấp"}),f.jsx("span",{className:"inspector-metric-val",children:K.flow||"N/A"})]}),f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Cao Độ Z"}),f.jsx("span",{className:"inspector-metric-val",children:K.elevation||"+0.0m"})]}),f.jsxs("div",{className:"inspector-metric-box",children:[f.jsx("span",{className:"inspector-metric-label",children:"Tổn Thất / Cột Áp"}),f.jsx("span",{className:"inspector-metric-val",children:K.headloss||K.head||K.level||"Tối ưu"})]})]}),f.jsxs("div",{style:{fontSize:"12.5px",display:"flex",flexDirection:"column",gap:"6px",borderTop:"1px solid var(--border-light)",paddingTop:"10px"},children:[f.jsxs("div",{children:[f.jsx("b",{children:"Trạng thái:"})," ",f.jsx("span",{style:{color:K.status.includes("Cảnh báo")||K.status.includes("ĐÓNG")?"#dc2626":"#16a34a"},children:K.status})]}),K.tier&&f.jsxs("div",{children:[f.jsx("b",{children:"Cấp kỹ thuật:"})," ",f.jsx("span",{style:{color:"#0284c7",fontWeight:600},children:K.tier})]}),K.floors&&f.jsxs("div",{children:[f.jsx("b",{children:"Quy mô tầng:"})," ",K.floors]}),K.connectionPipe&&f.jsxs("div",{children:[f.jsx("b",{children:"Ống dịch vụ đấu nối:"})," ",f.jsx("span",{style:{color:"#d97706",fontWeight:600},children:K.connectionPipe})]}),K.cisternCapacity&&f.jsxs("div",{children:[f.jsx("b",{children:"Bể chứa ngầm tòa nhà:"})," ",K.cisternCapacity]}),K.meterId&&f.jsxs("div",{children:[f.jsx("b",{children:"Đồng hồ điện từ AMR:"})," ",K.meterId]}),K.material&&f.jsxs("div",{children:[f.jsx("b",{children:"Vật liệu:"})," ",K.material]}),K.diameter&&f.jsxs("div",{children:[f.jsx("b",{children:"Đường kính danh định:"})," ",K.diameter]}),K.households&&f.jsxs("div",{children:[f.jsx("b",{children:"Quy mô phụ tải:"})," ",K.households]}),K.power&&f.jsxs("div",{children:[f.jsx("b",{children:"Công suất truyền động:"})," ",K.power]}),f.jsxs("div",{children:[f.jsx("b",{children:"Khu vực phụ trách:"})," ",K.dma]})]}),f.jsxs("div",{className:"inspector-actions",children:[K.id&&K.id.startsWith("VALVE-")&&f.jsxs("button",{className:"btn-sm",style:{background:Te[K.id]?"#16a34a":"#dc2626",color:"#ffffff",fontWeight:700,padding:"8px 12px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",borderRadius:"6px",border:"none",cursor:"pointer"},onClick:()=>Ee(K.id),children:[f.jsx(Ll,{size:14}),f.jsx("span",{children:Te[K.id]?`🔓 MỞ LẠI CHỐT ${K.id} (CẤP LẠI NƯỚC)`:`🔒 ĐÓNG CHỐT ${K.id} (CÔ LẬP CẮT NƯỚC)`})]}),K.id==="PRV-02"&&f.jsxs("button",{className:"btn-sm btn-primary",onClick:()=>{Y(!$),qe($?"Đã mở lại van PRV-02!":"Đã đóng van PRV-02!")},children:[f.jsx(Ll,{size:13}),f.jsx("span",{children:$?"Mở lại van PRV-02":"Mô phỏng đóng ngắt (Shutdown)"})]}),f.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>qe(`Đang trích xuất đồ thị áp lực 24h cho ${K.id}...`),children:[f.jsx(Rl,{size:13}),f.jsx("span",{children:"Đồ thị áp lực 24h"})]}),f.jsxs("button",{className:"btn-sm btn-secondary",onClick:()=>qe(`Đã tạo lệnh điều động kỹ sư kiểm tra ${K.id}`),children:[f.jsx(ys,{size:13}),f.jsx("span",{children:"Tạo phiếu bảo trì"})]})]})]})]}),f.jsxs("div",{className:"qatium-timeline-bar",children:[f.jsx("button",{className:"timeline-play-btn",onClick:()=>{ee(!H),qe(H?"Đã tạm dừng mô phỏng 24h":"Đang chạy mô phỏng biến thiên thủy lực 24h...")},title:H?"Tạm dừng mô phỏng":"Chạy mô phỏng 24h",children:H?f.jsx(tx,{size:16}):f.jsx(nx,{size:16,style:{marginLeft:"2px"}})}),f.jsxs("div",{className:"timeline-time-info",children:[f.jsx("span",{className:"timeline-clock",children:gt.label}),f.jsxs("span",{className:"timeline-desc",children:["Q = ",f.jsxs("b",{children:[gt.flow," m³/h"]})," · P = ",f.jsxs("b",{children:[gt.pressure," bar"]})]})]}),f.jsx("div",{className:"timeline-slider-wrap",children:f.jsx("input",{type:"range",min:"0",max:"23",value:Z,onChange:ve=>ne(parseInt(ve.target.value,10)),className:"timeline-slider",title:"Kéo để tua nhanh dòng thời gian mô phỏng"})}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexShrink:0},children:[f.jsx("span",{className:`metric-badge ${Z>=2&&Z<=4?"badge-danger":Z>=6&&Z<=8||Z>=18&&Z<=20?"badge-warning":"badge-success"}`,children:gt.status}),f.jsx("button",{className:"btn-sm btn-secondary",onClick:()=>ne(14),title:"Đặt lại giờ mặc định",children:f.jsx(sg,{size:12})})]})]})]})]}),s==="telemetry"&&f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(Dl,{size:18,color:"#0284c7"}),f.jsx("span",{children:"Dữ liệu Áp & Lưu lượng"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"6 điểm quan trắc tự động (SCADA)"})]}),f.jsx("button",{className:"btn-sm btn-primary",onClick:()=>St("Du_Lieu_Telemetry_6_Diem_Do.csv"),children:"Xuất Excel"})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Điểm đo"}),f.jsx("th",{children:"Khu vực"}),f.jsx("th",{children:"Lưu lượng"}),f.jsx("th",{children:"Áp lực (bar)"}),f.jsx("th",{children:"Dải chuẩn"}),f.jsx("th",{children:"Chênh lệch"}),f.jsx("th",{children:"Trạng thái"})]})}),f.jsx("tbody",{children:[{node:"FM-01 / Trạm bơm Tăng áp Trung tâm",zone:"Đầu nguồn cấp Lê Văn Lương",flow:"450.8 m³/h",press:"4.2 bar",range:"3.8 - 4.5 bar",delta:"+0.1 bar",status:"Tối ưu",tag:"badge-success"},{node:"PRV-02 / Cổng vào DMA THNC-01",zone:"Hoàng Minh Giám - Amsterdam",flow:"128.2 m³/h",press:"3.1 bar",range:"2.8 - 3.4 bar",delta:"-0.2 bar",status:"Ổn định",tag:"badge-info"},{node:"PRV-03 / Trục chính DMA THNC-02",zone:"Hoàng Đạo Thúy - Tháp 34T",flow:"185.4 m³/h",press:"3.2 bar",range:"2.8 - 3.5 bar",delta:"+0.0 bar",status:"Ổn định",tag:"badge-info"},{node:"FM-04 / Điểm cao DMA THNC-03",zone:"Charmvit & Grand Plaza",flow:"142.2 m³/h",press:"3.4 bar",range:"2.5 - 3.2 bar",delta:"+0.4 bar",status:"Cảnh báo Áp cao",tag:"badge-warning"},{node:"SN-05 / Cụm cư dân 17T1 - 17T4",zone:"DMA THNC-02 (Hoàng Đạo Thúy)",flow:"48.4 m³/h",press:"2.4 bar",range:"2.8 - 3.4 bar",delta:"-0.5 bar",status:"Sụt áp cục bộ",tag:"badge-danger"},{node:"FM-06 / Tuyến xả cặn Hố van Big C",zone:"Khuất Duy Tiến - D'Capitale",flow:"0.0 m³/h",press:"3.0 bar",range:"2.8 - 3.5 bar",delta:"0.0 bar",status:"Đang khóa",tag:"badge-info"}].map((ve,$e)=>f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:ve.node}),f.jsx("td",{children:ve.zone}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:ve.flow}),f.jsx("td",{style:{fontWeight:"700",color:"#0284c7"},children:ve.press}),f.jsx("td",{style:{color:"#64748b"},children:ve.range}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:ve.delta}),f.jsx("td",{children:f.jsx("span",{className:`metric-badge ${ve.tag}`,children:ve.status})})]},$e))})]})})]}),s==="leaks"&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[f.jsxs("div",{className:"metrics-grid",children:[f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Lưu lượng đêm (MNF)"}),f.jsx(Hm,{size:18,color:"#d97706"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"65.2"}),f.jsx("span",{className:"metric-unit",children:"m³/h"})]}),f.jsx("span",{className:"metric-badge badge-warning",children:"Khung 02:00 - 04:00"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Tỷ lệ thất thoát"}),f.jsx(ws,{size:18,color:"#ef4444"})]}),f.jsx("div",{className:"metric-body",children:f.jsx("span",{className:"metric-value",style:{color:"#ef4444"},children:"12.5%"})}),f.jsx("span",{className:"metric-badge badge-danger",children:"~18.2 m³/h rò rỉ"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Nghi vấn rò rỉ"}),f.jsx(ys,{size:18,color:"#10b981"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"2"}),f.jsx("span",{className:"metric-unit",children:"tuyến ống"})]}),f.jsx("span",{className:"metric-badge badge-info",children:"Cần dò sóng âm"})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(ws,{size:17,color:"#d97706"}),f.jsx("span",{children:"Xếp hạng thất thoát theo Phân vùng DMA (KĐT Trung Hòa – Nhân Chính)"})]}),f.jsxs("button",{className:"btn-sm btn-primary",disabled:J,onClick:oe,style:{display:"flex",alignItems:"center",gap:"6px"},children:[f.jsx(ix,{size:14,className:J?"animate-spin":""}),f.jsx("span",{children:J?"Đang phân tích tương quan âm...":"Chạy Dò Sóng Âm Tương Quan"})]})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Vùng DMA"}),f.jsx("th",{children:"Quy mô phụ tải"}),f.jsx("th",{children:"Lưu lượng cấp TB"}),f.jsx("th",{children:"Lưu lượng đêm (MNF)"}),f.jsx("th",{children:"Tỷ lệ NRW"}),f.jsx("th",{children:"Mức ưu tiên xử lý"})]})}),f.jsxs("tbody",{children:[f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"DMA THNC-02 (Lõi Hoàng Đạo Thúy & Tháp 34T)"}),f.jsx("td",{children:"4.200 Căn hộ (~18.000 dân)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"185.4 m³/h"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)",color:"#ef4444",fontWeight:700},children:"42.5 m³/h"}),f.jsx("td",{style:{fontWeight:"700",color:"#ef4444"},children:"13.2%"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-danger",children:"Rất Cao (Khẩn cấp)"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"DMA THNC-01 (Hoàng Minh Giám - Cụm Amsterdam)"}),f.jsx("td",{children:"3.100 Căn hộ + Trường học"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"128.2 m³/h"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"26.0 m³/h"}),f.jsx("td",{style:{fontWeight:"700",color:"#f59e0b"},children:"11.8%"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-warning",children:"Trung Bình"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"DMA THNC-03 (Trần Duy Hưng - Charmvit Tower)"}),f.jsx("td",{children:"2.800 Căn hộ & Khách sạn"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"142.2 m³/h"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"19.5 m³/h"}),f.jsx("td",{style:{fontWeight:"700",color:"#10b981"},children:"10.5%"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-success",children:"Thấp (Tốt)"})})]})]})]})}),re&&f.jsxs("div",{style:{marginTop:"16px",padding:"16px",background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"8px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#15803d",fontWeight:700,fontSize:"14px"},children:[f.jsx(ys,{size:18}),f.jsx("span",{children:"KẾT QUẢ ĐỊNH VỊ RÒ RỈ BẰNG THUẬT TOÁN TƯƠNG QUAN ÂM HỌC (ACOUSTIC CORRELATION)"})]}),f.jsxs("span",{className:"metric-badge badge-success",children:["Độ tin cậy: ",re.confidence]})]}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"10px",fontSize:"12.5px",marginTop:"10px"},children:[f.jsxs("div",{children:[f.jsx("b",{children:"Tọa độ định vị:"})," ",f.jsx("span",{style:{color:"#0f172a"},children:re.location})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Độ sâu chôn ống:"})," ",f.jsx("span",{style:{color:"#0f172a"},children:re.depth})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Cỡ & Vật liệu ống:"})," ",f.jsx("span",{style:{color:"#0284c7",fontWeight:600},children:re.pipe})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Lưu lượng thất thoát ước tính:"})," ",f.jsx("span",{style:{color:"#dc2626",fontWeight:700},children:re.lossRate})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Phổ tần số rung động:"})," ",f.jsx("span",{style:{fontFamily:"var(--font-mono)"},children:re.frequency})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Đề xuất xử lý:"})," ",f.jsx("span",{style:{color:"#d97706",fontWeight:600},children:re.recommendedAction})]})]})]})]})]}),s==="quality"&&f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[f.jsxs("div",{className:"metrics-grid",children:[f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Độ đục (Turbidity)"}),f.jsx(Js,{size:18,color:"#0284c7"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"0.85"}),f.jsx("span",{className:"metric-unit",children:"NTU"})]}),f.jsx("span",{className:"metric-badge badge-success",children:"Chuẩn QCVN (< 2.0 NTU)"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Clo dư (Chlorine)"}),f.jsx(ys,{size:18,color:"#10b981"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"0.42"}),f.jsx("span",{className:"metric-unit",children:"mg/L"})]}),f.jsx("span",{className:"metric-badge badge-success",children:"Ngưỡng chuẩn (0.2 - 1.0 mg/L)"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Độ pH"}),f.jsx(Rl,{size:18,color:"#0284c7"})]}),f.jsx("div",{className:"metric-body",children:f.jsx("span",{className:"metric-value",children:"7.35"})}),f.jsx("span",{className:"metric-badge badge-info",children:"Chuẩn (6.5 - 8.5)"})]}),f.jsxs("div",{className:"metric-card",children:[f.jsxs("div",{className:"metric-header",children:[f.jsx("span",{children:"Chất rắn tan (TDS)"}),f.jsx(Dl,{size:18,color:"#64748b"})]}),f.jsxs("div",{className:"metric-body",children:[f.jsx("span",{className:"metric-value",children:"128"}),f.jsx("span",{className:"metric-unit",children:"ppm"})]}),f.jsx("span",{className:"metric-badge badge-success",children:"An toàn (< 1000 ppm)"})]})]}),f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(Js,{size:17,color:"#0284c7"}),f.jsx("span",{children:"Trạm Quan Trắc Đa Chỉ Tiêu Thời Gian Thực (QCVN 01-1:2018/BYT)"})]}),f.jsx("button",{className:"btn-sm btn-primary",onClick:()=>St("Chat_Luong_Nuoc_QCVN_THNC.csv"),children:"Xuất Báo Cáo"})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Trạm quan trắc"}),f.jsx("th",{children:"Vị trí đấu nối"}),f.jsx("th",{children:"Độ đục (NTU)"}),f.jsx("th",{children:"Clo dư (mg/L)"}),f.jsx("th",{children:"pH"}),f.jsx("th",{children:"TDS (ppm)"}),f.jsx("th",{children:"Van xả cặn tự động"}),f.jsx("th",{children:"Đánh giá chuẩn"})]})}),f.jsx("tbody",{children:[{station:"WQ-01 / Trạm Bơm Tăng Áp",loc:"Đầu nguồn cấp Lê Văn Lương",ntu:"0.62 NTU",cl:"0.55 mg/L",ph:"7.40",tds:"115 ppm",flush:"Đóng (Bình thường)",status:"Đạt chuẩn A",badge:"badge-success"},{station:"WQ-02 / Hố Đồng Hồ Mandarin",loc:"Cụm THPT Amsterdam - Hoàng Minh Giám",ntu:"1.45 NTU",cl:"0.38 mg/L",ph:"7.30",tds:"132 ppm",flush:"Đang xả đáy chu kỳ",status:"Cảnh báo nhẹ",badge:"badge-warning"},{station:"WQ-03 / Trạm Thứ Cấp Tháp 34T",loc:"Lõi Đô Thị Hoàng Đạo Thúy",ntu:"0.80 NTU",cl:"0.42 mg/L",ph:"7.35",tds:"124 ppm",flush:"Đóng (Bình thường)",status:"Đạt chuẩn A",badge:"badge-success"},{station:"WQ-04 / Trạm Tổ Hợp Charmvit",loc:"Cửa ngõ Trần Duy Hưng",ntu:"0.74 NTU",cl:"0.40 mg/L",ph:"7.38",tds:"128 ppm",flush:"Đóng (Bình thường)",status:"Đạt chuẩn A",badge:"badge-success"}].map((ve,$e)=>f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:700},children:ve.station}),f.jsx("td",{children:ve.loc}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:ve.ntu}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:ve.cl}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:ve.ph}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:ve.tds}),f.jsx("td",{style:{fontSize:"12px"},children:ve.flush}),f.jsx("td",{children:f.jsx("span",{className:`metric-badge ${ve.badge}`,children:ve.status})})]},$e))})]})})]}),f.jsxs("div",{className:"panel-card",style:{padding:"20px"},children:[f.jsx("h3",{style:{fontSize:"15px",fontWeight:"700",marginBottom:"8px"},children:"Cơ chế Giám sát Chất lượng Nước Tự Động Toàn KĐT"}),f.jsx("p",{style:{fontSize:"13px",color:"#64748b",lineHeight:"1.6"},children:"Mạng lưới quan trắc online tích hợp hệ thống IoT đa thông số (Multi-parameter Probe) đo đạc liên tục 15 phút/lần truyền về trung tâm SCADA qua mạng 4G/NB-IoT. Khi chỉ số độ đục vượt 2.0 NTU hoặc Clo dư dưới 0.2 mg/L, van xả cặn tự động (Auto Flushing Valve) tại hố xả cuối tuyến sẽ kích hoạt xả nước tồn đọng trong 5 phút và gửi cảnh báo tức thì tới kỹ sư vận hành."})]})]}),s==="reports"&&f.jsxs("div",{className:"panel-card",children:[f.jsxs("div",{className:"panel-card-header",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"panel-card-title",children:[f.jsx(Z_,{size:18,color:"#0284c7"}),f.jsx("span",{children:"Cân bằng nước & Kiểm toán IWA"})]}),f.jsx("span",{style:{fontSize:"12px",color:"#64748b"},children:"Tiêu chuẩn Quốc tế IWA"})]}),f.jsxs("div",{style:{display:"flex",gap:"8px"},children:[f.jsx("button",{className:"btn-sm btn-secondary",onClick:st,title:"In hoặc lưu PDF",children:"In PDF"}),f.jsx("button",{className:"btn-sm btn-primary",onClick:()=>St("Bao_Cao_Can_Bang_Nuoc_IWA.csv"),title:"Tải file CSV",children:"Tải CSV"})]})]}),f.jsx("div",{className:"data-table-wrapper",children:f.jsxs("table",{className:"custom-table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Hạng mục"}),f.jsx("th",{children:"Khối lượng (m³)"}),f.jsx("th",{children:"Tỷ trọng (%)"}),f.jsx("th",{children:"Doanh thu / Thiệt hại"}),f.jsx("th",{children:"Đánh giá"})]})}),f.jsxs("tbody",{children:[f.jsxs("tr",{children:[f.jsx("td",{style:{fontWeight:"700"},children:"1. Tổng cấp mạng lưới SIV (Toàn KĐT Trung Hòa - Nhân Chính)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)",fontWeight:"700"},children:"380,000 m³"}),f.jsx("td",{children:"100.0%"}),f.jsx("td",{children:"Trạm bơm Tăng áp Lê Văn Lương"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-info",children:"Chuẩn đo đạc"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"32px",color:"#047857"},children:"1.1. Tiêu thụ có doanh thu (Billed Consumption)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"332,500 m³"}),f.jsx("td",{children:"87.5%"}),f.jsx("td",{children:"Thu tiền cư dân (~3.32 tỷ VNĐ)"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-success",children:"Đạt chỉ tiêu"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"32px",color:"#b91c1c"},children:"1.2. Thất thoát không doanh thu (NRW)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)",fontWeight:"700"},children:"47,500 m³"}),f.jsx("td",{children:"12.5%"}),f.jsx("td",{children:"Thiệt hại: ~475.0 tr VNĐ/tháng"}),f.jsx("td",{children:f.jsx("span",{className:"metric-badge badge-danger",children:"Cần giảm < 10%"})})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"48px",color:"#64748b"},children:"- Thất thoát vật lý (Rò rỉ ống ngầm phân phối)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"35,340 m³"}),f.jsx("td",{children:"9.3%"}),f.jsx("td",{children:"Chảy ngầm trong đất"}),f.jsx("td",{children:"Trọng tâm xử lý: Tuyến Hoàng Đạo Thúy (DMA THNC-02)"})]}),f.jsxs("tr",{children:[f.jsx("td",{style:{paddingLeft:"48px",color:"#64748b"},children:"- Thất thoát thương mại (Sai số đồng hồ, gian lận)"}),f.jsx("td",{style:{fontFamily:"var(--font-mono)"},children:"12,160 m³"}),f.jsx("td",{children:"3.2%"}),f.jsx("td",{children:"Sai số cơ khí sau 5 năm"}),f.jsx("td",{children:"Thay thế đồng hồ điện từ AMR định kỳ"})]})]})]})})]})]})]}),y&&f.jsxs("div",{className:"toast-notification",children:[f.jsx(ys,{size:18,color:"#10b981"}),f.jsx("span",{children:y})]})]})}console.log("[SWMS] Initializing Smart Water Management UI...");const Jh=document.getElementById("root");if(Jh)try{j_.createRoot(Jh).render(f.jsx(k_.StrictMode,{children:f.jsx(r2,{})})),console.log("[SWMS] App successfully mounted to DOM.")}catch(s){console.error("[SWMS] Fatal mount error:",s),Jh.innerHTML=`
      <div style="padding: 24px; background: #fee2e2; color: #991b1b; font-family: monospace; border-radius: 8px; margin: 20px;">
        <h2>Lỗi Render Giao Diện React:</h2>
        <pre>${s.stack||s.message}</pre>
      </div>
    `}
