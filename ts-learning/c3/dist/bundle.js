!function(){var t={3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6077:function(t,n,r){var e=r(111);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},5787:function(t){t.exports=function(t,n,r){if(!(t instanceof n))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t}},9670:function(t,n,r){var e=r(111);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},1318:function(t,n,r){var e=r(5656),o=r(7466),i=r(1400),c=function(t){return function(n,r,c){var u,f=e(n),a=o(f.length),s=i(c,a);if(t&&r!=r){for(;a>s;)if((u=f[s++])!=u)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},7072:function(t,n,r){var e=r(5112)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[e]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},4326:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},648:function(t,n,r){var e=r(1694),o=r(4326),i=r(5112)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:c?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},9920:function(t,n,r){var e=r(6656),o=r(3887),i=r(1236),c=r(3070);t.exports=function(t,n){for(var r=o(n),u=c.f,f=i.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||u(t,s,f(n,s))}}},8880:function(t,n,r){var e=r(9781),o=r(3070),i=r(9114);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9781:function(t,n,r){var e=r(7293);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,r){var e=r(7854),o=r(111),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},7871:function(t){t.exports="object"==typeof window},6833:function(t,n,r){var e=r(8113);t.exports=/(?:iphone|ipod|ipad).*applewebkit/i.test(e)},5268:function(t,n,r){var e=r(4326),o=r(7854);t.exports="process"==e(o.process)},1036:function(t,n,r){var e=r(8113);t.exports=/web0s(?!.*chrome)/i.test(e)},8113:function(t,n,r){var e=r(5005);t.exports=e("navigator","userAgent")||""},7392:function(t,n,r){var e,o,i=r(7854),c=r(8113),u=i.process,f=u&&u.versions,a=f&&f.v8;a?o=(e=a.split("."))[0]<4?1:e[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,r){var e=r(7854),o=r(1236).f,i=r(8880),c=r(1320),u=r(3505),f=r(9920),a=r(4705);t.exports=function(t,n){var r,s,p,l,v,h=t.target,y=t.global,d=t.stat;if(r=y?e:d?e[h]||u(h,{}):(e[h]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(y?s:h+(d?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),c(r,s,l,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,n,r){var e=r(3099);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},5005:function(t,n,r){var e=r(857),o=r(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},1246:function(t,n,r){var e=r(648),o=r(7497),i=r(5112)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},7854:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:function(t,n,r){var e=r(7908),o={}.hasOwnProperty;t.exports=function(t,n){return o.call(e(t),n)}},3501:function(t){t.exports={}},842:function(t,n,r){var e=r(7854);t.exports=function(t,n){var r=e.console;r&&r.error&&(1===arguments.length?r.error(t):r.error(t,n))}},490:function(t,n,r){var e=r(5005);t.exports=e("document","documentElement")},4664:function(t,n,r){var e=r(9781),o=r(7293),i=r(317);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,r){var e=r(7293),o=r(4326),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,n,r){var e=r(5465),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},9909:function(t,n,r){var e,o,i,c=r(8536),u=r(7854),f=r(111),a=r(8880),s=r(6656),p=r(5465),l=r(6200),v=r(3501),h="Object already initialized",y=u.WeakMap;if(c||p.state){var d=p.state||(p.state=new y),g=d.get,x=d.has,m=d.set;e=function(t,n){if(x.call(d,t))throw new TypeError(h);return n.facade=t,m.call(d,t,n),n},o=function(t){return g.call(d,t)||{}},i=function(t){return x.call(d,t)}}else{var b=l("state");v[b]=!0,e=function(t,n){if(s(t,b))throw new TypeError(h);return n.facade=t,a(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},7659:function(t,n,r){var e=r(5112),o=r(7497),i=e("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},4705:function(t,n,r){var e=r(7293),o=/#|\.prototype\./,i=function(t,n){var r=u[c(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},408:function(t,n,r){var e=r(9670),o=r(7659),i=r(7466),c=r(9974),u=r(1246),f=r(9212),a=function(t,n){this.stopped=t,this.result=n};t.exports=function(t,n,r){var s,p,l,v,h,y,d,g=r&&r.that,x=!(!r||!r.AS_ENTRIES),m=!(!r||!r.IS_ITERATOR),b=!(!r||!r.INTERRUPTED),w=c(n,g,1+x+b),j=function(t){return s&&f(s),new a(!0,t)},O=function(t){return x?(e(t),b?w(t[0],t[1],j):w(t[0],t[1])):b?w(t,j):w(t)};if(m)s=t;else{if("function"!=typeof(p=u(t)))throw TypeError("Target is not iterable");if(o(p)){for(l=0,v=i(t.length);v>l;l++)if((h=O(t[l]))&&h instanceof a)return h;return new a(!1)}s=p.call(t)}for(y=s.next;!(d=y.call(s)).done;){try{h=O(d.value)}catch(t){throw f(s),t}if("object"==typeof h&&h&&h instanceof a)return h}return new a(!1)}},9212:function(t,n,r){var e=r(9670);t.exports=function(t){var n=t.return;if(void 0!==n)return e(n.call(t)).value}},7497:function(t){t.exports={}},5948:function(t,n,r){var e,o,i,c,u,f,a,s,p=r(7854),l=r(1236).f,v=r(261).set,h=r(6833),y=r(1036),d=r(5268),g=p.MutationObserver||p.WebKitMutationObserver,x=p.document,m=p.process,b=p.Promise,w=l(p,"queueMicrotask"),j=w&&w.value;j||(e=function(){var t,n;for(d&&(t=m.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},h||d||y||!g||!x?b&&b.resolve?((a=b.resolve(void 0)).constructor=b,s=a.then,c=function(){s.call(a,e)}):c=d?function(){m.nextTick(e)}:function(){v.call(p,e)}:(u=!0,f=x.createTextNode(""),new g(e).observe(f,{characterData:!0}),c=function(){f.data=u=!u})),t.exports=j||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},3366:function(t,n,r){var e=r(7854);t.exports=e.Promise},133:function(t,n,r){var e=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())||!Symbol.sham&&e&&e<41}))},8536:function(t,n,r){var e=r(7854),o=r(2788),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},8523:function(t,n,r){"use strict";var e=r(3099),o=function(t){var n,r;this.promise=new t((function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e})),this.resolve=e(n),this.reject=e(r)};t.exports.f=function(t){return new o(t)}},3070:function(t,n,r){var e=r(9781),o=r(4664),i=r(9670),c=r(7593),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},1236:function(t,n,r){var e=r(9781),o=r(5296),i=r(9114),c=r(5656),u=r(7593),f=r(6656),a=r(4664),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},8006:function(t,n,r){var e=r(6324),o=r(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},6324:function(t,n,r){var e=r(6656),o=r(5656),i=r(1318).indexOf,c=r(3501);t.exports=function(t,n){var r,u=o(t),f=0,a=[];for(r in u)!e(c,r)&&e(u,r)&&a.push(r);for(;n.length>f;)e(u,r=n[f++])&&(~i(a,r)||a.push(r));return a}},5296:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},7674:function(t,n,r){var e=r(9670),o=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},288:function(t,n,r){"use strict";var e=r(1694),o=r(648);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},3887:function(t,n,r){var e=r(5005),o=r(8006),i=r(5181),c=r(9670);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},857:function(t,n,r){var e=r(7854);t.exports=e},2534:function(t){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},9478:function(t,n,r){var e=r(9670),o=r(111),i=r(8523);t.exports=function(t,n){if(e(t),o(n)&&n.constructor===t)return n;var r=i.f(t);return(0,r.resolve)(n),r.promise}},2248:function(t,n,r){var e=r(1320);t.exports=function(t,n,r){for(var o in n)e(t,o,n[o],r);return t}},1320:function(t,n,r){var e=r(7854),o=r(8880),i=r(6656),c=r(3505),u=r(2788),f=r(9909),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,r,u){var f,a=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),(f=s(r)).source||(f.source=p.join("string"==typeof n?n:""))),t!==e?(a?!v&&t[n]&&(l=!0):delete t[n],l?t[n]=r:o(t,n,r)):l?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||u(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,n,r){var e=r(7854),o=r(8880);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},6340:function(t,n,r){"use strict";var e=r(5005),o=r(3070),i=r(5112),c=r(9781),u=i("species");t.exports=function(t){var n=e(t),r=o.f;c&&n&&!n[u]&&r(n,u,{configurable:!0,get:function(){return this}})}},8003:function(t,n,r){var e=r(3070).f,o=r(6656),i=r(5112)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},6200:function(t,n,r){var e=r(2309),o=r(9711),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,r){var e=r(7854),o=r(3505),i="__core-js_shared__",c=e[i]||o(i,{});t.exports=c},2309:function(t,n,r){var e=r(1913),o=r(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.13.0",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6707:function(t,n,r){var e=r(9670),o=r(3099),i=r(5112)("species");t.exports=function(t,n){var r,c=e(t).constructor;return void 0===c||null==(r=e(c)[i])?n:o(r)}},261:function(t,n,r){var e,o,i,c=r(7854),u=r(7293),f=r(9974),a=r(490),s=r(317),p=r(6833),l=r(5268),v=c.location,h=c.setImmediate,y=c.clearImmediate,d=c.process,g=c.MessageChannel,x=c.Dispatch,m=0,b={},w=function(t){if(b.hasOwnProperty(t)){var n=b[t];delete b[t],n()}},j=function(t){return function(){w(t)}},O=function(t){w(t.data)},S=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};h&&y||(h=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return b[++m]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},e(m),m},y=function(t){delete b[t]},l?e=function(t){d.nextTick(j(t))}:x&&x.now?e=function(t){x.now(j(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=O,e=f(i.postMessage,i,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts&&v&&"file:"!==v.protocol&&!u(S)?(e=S,c.addEventListener("message",O,!1)):e="onreadystatechange"in s("script")?function(t){a.appendChild(s("script")).onreadystatechange=function(){a.removeChild(this),w(t)}}:function(t){setTimeout(j(t),0)}),t.exports={set:h,clear:y}},1400:function(t,n,r){var e=r(9958),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},5656:function(t,n,r){var e=r(8361),o=r(4488);t.exports=function(t){return e(o(t))}},9958:function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},7466:function(t,n,r){var e=r(9958),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},7908:function(t,n,r){var e=r(4488);t.exports=function(t){return Object(e(t))}},7593:function(t,n,r){var e=r(111);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},1694:function(t,n,r){var e={};e[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(e)},9711:function(t){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},3307:function(t,n,r){var e=r(133);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,n,r){var e=r(7854),o=r(2309),i=r(6656),c=r(9711),u=r(133),f=r(3307),a=o("wks"),s=e.Symbol,p=f?s:s&&s.withoutSetter||c;t.exports=function(t){return i(a,t)&&(u||"string"==typeof a[t])||(u&&i(s,t)?a[t]=s[t]:a[t]=p("Symbol."+t)),a[t]}},1539:function(t,n,r){var e=r(1694),o=r(1320),i=r(288);e||o(Object.prototype,"toString",i,{unsafe:!0})},8674:function(t,n,r){"use strict";var e,o,i,c,u=r(2109),f=r(1913),a=r(7854),s=r(5005),p=r(3366),l=r(1320),v=r(2248),h=r(7674),y=r(8003),d=r(6340),g=r(111),x=r(3099),m=r(5787),b=r(2788),w=r(408),j=r(7072),O=r(6707),S=r(261).set,E=r(5948),T=r(9478),P=r(842),_=r(8523),M=r(2534),I=r(9909),k=r(4705),A=r(5112),N=r(7871),C=r(5268),F=r(7392),R=A("species"),D="Promise",L=I.get,z=I.set,U=I.getterFor(D),W=p&&p.prototype,q=p,G=W,K=a.TypeError,B=a.document,H=a.process,V=_.f,Y=V,J=!!(B&&B.createEvent&&a.dispatchEvent),Q="function"==typeof PromiseRejectionEvent,X="unhandledrejection",Z=!1,$=k(D,(function(){var t=b(q)!==String(q);if(!t&&66===F)return!0;if(f&&!G.finally)return!0;if(F>=51&&/native code/.test(q))return!1;var n=new q((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))};return(n.constructor={})[R]=r,!(Z=n.then((function(){}))instanceof r)||!t&&N&&!Q})),tt=$||!j((function(t){q.all(t).catch((function(){}))})),nt=function(t){var n;return!(!g(t)||"function"!=typeof(n=t.then))&&n},rt=function(t,n){if(!t.notified){t.notified=!0;var r=t.reactions;E((function(){for(var e=t.value,o=1==t.state,i=0;r.length>i;){var c,u,f,a=r[i++],s=o?a.ok:a.fail,p=a.resolve,l=a.reject,v=a.domain;try{s?(o||(2===t.rejection&&ct(t),t.rejection=1),!0===s?c=e:(v&&v.enter(),c=s(e),v&&(v.exit(),f=!0)),c===a.promise?l(K("Promise-chain cycle")):(u=nt(c))?u.call(c,p,l):p(c)):l(e)}catch(t){v&&!f&&v.exit(),l(t)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&ot(t)}))}},et=function(t,n,r){var e,o;J?((e=B.createEvent("Event")).promise=n,e.reason=r,e.initEvent(t,!1,!0),a.dispatchEvent(e)):e={promise:n,reason:r},!Q&&(o=a["on"+t])?o(e):t===X&&P("Unhandled promise rejection",r)},ot=function(t){S.call(a,(function(){var n,r=t.facade,e=t.value;if(it(t)&&(n=M((function(){C?H.emit("unhandledRejection",e,r):et(X,r,e)})),t.rejection=C||it(t)?2:1,n.error))throw n.value}))},it=function(t){return 1!==t.rejection&&!t.parent},ct=function(t){S.call(a,(function(){var n=t.facade;C?H.emit("rejectionHandled",n):et("rejectionhandled",n,t.value)}))},ut=function(t,n,r){return function(e){t(n,e,r)}},ft=function(t,n,r){t.done||(t.done=!0,r&&(t=r),t.value=n,t.state=2,rt(t,!0))},at=function(t,n,r){if(!t.done){t.done=!0,r&&(t=r);try{if(t.facade===n)throw K("Promise can't be resolved itself");var e=nt(n);e?E((function(){var r={done:!1};try{e.call(n,ut(at,r,t),ut(ft,r,t))}catch(n){ft(r,n,t)}})):(t.value=n,t.state=1,rt(t,!1))}catch(n){ft({done:!1},n,t)}}};if($&&(G=(q=function(t){m(this,q,D),x(t),e.call(this);var n=L(this);try{t(ut(at,n),ut(ft,n))}catch(t){ft(n,t)}}).prototype,(e=function(t){z(this,{type:D,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(G,{then:function(t,n){var r=U(this),e=V(O(this,q));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=C?H.domain:void 0,r.parent=!0,r.reactions.push(e),0!=r.state&&rt(r,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e,n=L(t);this.promise=t,this.resolve=ut(at,n),this.reject=ut(ft,n)},_.f=V=function(t){return t===q||t===i?new o(t):Y(t)},!f&&"function"==typeof p&&W!==Object.prototype)){c=W.then,Z||(l(W,"then",(function(t,n){var r=this;return new q((function(t,n){c.call(r,t,n)})).then(t,n)}),{unsafe:!0}),l(W,"catch",G.catch,{unsafe:!0}));try{delete W.constructor}catch(t){}h&&h(W,G)}u({global:!0,wrap:!0,forced:$},{Promise:q}),y(q,D,!1,!0),d(D),i=s(D),u({target:D,stat:!0,forced:$},{reject:function(t){var n=V(this);return n.reject.call(void 0,t),n.promise}}),u({target:D,stat:!0,forced:f||$},{resolve:function(t){return T(f&&this===i?q:this,t)}}),u({target:D,stat:!0,forced:tt},{all:function(t){var n=this,r=V(n),e=r.resolve,o=r.reject,i=M((function(){var r=x(n.resolve),i=[],c=0,u=1;w(t,(function(t){var f=c++,a=!1;i.push(void 0),u++,r.call(n,t).then((function(t){a||(a=!0,i[f]=t,--u||e(i))}),o)})),--u||e(i)}));return i.error&&o(i.value),r.promise},race:function(t){var n=this,r=V(n),e=r.reject,o=M((function(){var o=x(n.resolve);w(t,(function(t){o.call(n,t).then(r.resolve,e)}))}));return o.error&&e(o.value),r.promise}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";var t;r(1539),r(8674),t=1+2,console.log(t),console.log(Promise)}()}();