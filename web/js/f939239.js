/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
//** jQuery Scroll to Top Control script- (c) Dynamic Drive DHTML code library: http://www.dynamicdrive.com.
//** Available/ usage terms at http://www.dynamicdrive.com (March 30th, 09')
//** v1.1 (April 7th, 09'):
//** 1) Adds ability to scroll to an absolute position (from top of page) or specific element on the page instead.
//** 2) Fixes scroll animation not working in Opera. 


var scrolltotop={
	//startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control
	//scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top).
	setting: {startline:100, scrollto: 0, scrollduration:1000, fadeduration:[500, 100]},
	controlHTML: '', //<img src="assets/img/up.png" style="width:51px; height:42px" /> //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol"
	controlattrs: {offsetx:5, offsety:5}, //offset of control relative to right/ bottom of window corner
	anchorkeyword: '#top', //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links

	state: {isvisible:false, shouldvisible:false},

	scrollup:function(){
		if (!this.cssfixedsupport) //if control is positioned using JavaScript
			this.$control.css({opacity:0}) //hide control immediately after clicking it
		var dest=isNaN(this.setting.scrollto)? this.setting.scrollto : parseInt(this.setting.scrollto)
		if (typeof dest=="string" && jQuery('#'+dest).length==1) //check element set by string exists
			dest=jQuery('#'+dest).offset().top
		else
			dest=0
		this.$body.animate({scrollTop: dest}, this.setting.scrollduration);
	},

	keepfixed:function(){
		var $window=jQuery(window)
		var controlx=$window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx
		var controly=$window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety
		this.$control.css({left:controlx+'px', top:controly+'px'})
	},

	togglecontrol:function(){
		var scrolltop=jQuery(window).scrollTop()
		if (!this.cssfixedsupport)
			this.keepfixed()
		this.state.shouldvisible=(scrolltop>=this.setting.startline)? true : false
		if (this.state.shouldvisible && !this.state.isvisible){
			this.$control.stop().animate({opacity:1}, this.setting.fadeduration[0])
			this.state.isvisible=true
		}
		else if (this.state.shouldvisible==false && this.state.isvisible){
			this.$control.stop().animate({opacity:0}, this.setting.fadeduration[1])
			this.state.isvisible=false
		}
	},
	
	init:function(){
		jQuery(document).ready(function($){
			var mainobj=scrolltotop
			var iebrws=document.all
			mainobj.cssfixedsupport=!iebrws || iebrws && document.compatMode=="CSS1Compat" && window.XMLHttpRequest //not IE or IE7+ browsers in standards mode
			mainobj.$body=(window.opera)? (document.compatMode=="CSS1Compat"? $('html') : $('body')) : $('html,body')
			mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+'</div>')
				.css({position:mainobj.cssfixedsupport? 'fixed' : 'absolute', bottom:mainobj.controlattrs.offsety, right:mainobj.controlattrs.offsetx, opacity:0, cursor:'pointer'})
				.attr({title:'Scroll Back to Top'})
				.click(function(){mainobj.scrollup(); return false})
				.appendTo('body')
			if (document.all && !window.XMLHttpRequest && mainobj.$control.text()!='') //loose check for IE6 and below, plus whether control contains any text
				mainobj.$control.css({width:mainobj.$control.width()}) //IE6- seems to require an explicit width on a DIV containing text
			mainobj.togglecontrol()
			$('a[href="' + mainobj.anchorkeyword +'"]').click(function(){
				mainobj.scrollup()
				return false
			})
			$(window).bind('scroll resize', function(e){
				mainobj.togglecontrol()
			})
		})
	}
}

scrolltotop.init()
/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
 ;(function(d){d.flexslider=function(i,k){var a=d(i),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,p="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,t=p?"touchend":"click",l="vertical"===c.direction,m=c.reverse,h=0<c.itemWidth,r="fade"===c.animation,s=""!==c.asNavFor,f={};d.data(i,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
 c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!r)if(g=c.useCSS)a:{g=document.createElement("div");var n=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in n)if(void 0!==g.style[n[e]]){a.pfx=n[e].replace("Perspective","").toLowerCase();
 a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();s&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
 (1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
 function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());p&&c.touch&&f.touch();(!r||r&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),g=b.index();
 !d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var n=0;n<a.pagingCount;n++)g="thumbnails"===c.controlNav?
 '<img src="'+a.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNavScaffold.delegate("a",
 "click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
 a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
 e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(t,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
 p&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
 (a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(t,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});p&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
 "play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:d-b.touches[0].pageX;p=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!p||500<Number(new Date)-k)b.preventDefault(),!r&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/q+2:1),a.setProps(f+j,"setTouch"))}function g(){i.removeEventListener("touchmove",
 b,!1);if(a.animatingTo===a.currentSlide&&!p&&null!==j){var h=m?-j:j,l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&50<Math.abs(h)||Math.abs(h)>q/2)?a.flexAnimate(l,c.pauseOnAction):r||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}i.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,q,j,k,p=!1;i.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),q=l?a.h:a.w,k=Number(new Date),f=h&&m&&a.animatingTo===
 a.last?0:h&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+a.cloneOffset)*q:(a.currentSlide+a.cloneOffset)*q,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,i.addEventListener("touchmove",b,!1),i.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),r?f.smoothHeight():h?(a.slides.width(a.computedW),
 a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!l||r){var c=r?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
 !g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,n,i,k){s&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,k)||n)&&a.is(":visible")){if(s&&i)if(n=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,n.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",n.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
 "active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(r)p?(a.slides.eq(a.currentSlide).css({opacity:0,
 zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){c.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var q=l?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,
 b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*q:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*q:m?(a.count-1-b+a.cloneOffset)*q:(b+a.cloneOffset)*q;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",
 function(){a.wrapup(q)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(q)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!r&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=
 function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=s?a.pagingCount-1:a.last;return g?!0:s&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:s&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&
 !s?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===
 a.last?a.limit:f;switch(g){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=l?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(r)a.slides.css({width:"100%",
 "float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(p?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,n;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=
 0,m&&(n=d.makeArray(a.slides).reverse(),a.slides=d(n),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),
 setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),
 d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-
 d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),
 f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():l&&m?a.slides.eq(a.last).remove():
 a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",
 keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(i){void 0===i&&(i={});if("object"===typeof i)return this.each(function(){var a=d(this),c=a.find(i.selector?i.selector:".slides > li");1===c.length?(c.fadeIn(400),
 i.start&&i.start(a)):void 0==a.data("flexslider")&&new d.flexslider(this,i)});var k=d(this).data("flexslider");switch(i){case "play":k.play();break;case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;default:"number"===typeof i&&k.flexAnimate(i,!0)}}})(jQuery);
/*
 *	jQuery OwlCarousel v1.31
 *
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel/
 *
 *	Licensed under MIT
 *
 */

if ( typeof Object.create !== "function" ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}
(function( $, window, document, undefined ) {

	var Carousel = {
		init :function(options, el){
			var base = this;

			base.$elem = $(el);

			// options passed via js override options passed via data attributes
			base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

			base.userOptions = options;
			base.loadContent();
		},

		loadContent : function(){
			var base = this;

			if (typeof base.options.beforeInit === "function") {
				base.options.beforeInit.apply(this,[base.$elem]);
			}

			if (typeof base.options.jsonPath === "string") {
				var url = base.options.jsonPath;

				function getData(data) {
					if (typeof base.options.jsonSuccess === "function") {
						base.options.jsonSuccess.apply(this,[data]);
					} else {
						var content = "";
						for(var i in data["owl"]){
							content += data["owl"][i]["item"];
						}
						base.$elem.html(content);
					}
					base.logIn();
				}
				$.getJSON(url,getData);
			} else {
				base.logIn();
			}
		},

		logIn : function(action){
			var base = this;

			base.$elem.data("owl-originalStyles", base.$elem.attr("style"))
					  .data("owl-originalClasses", base.$elem.attr("class"));

			base.$elem.css({opacity: 0});
			base.orignalItems = base.options.items;
			base.checkBrowser();
			base.wrapperWidth = 0;
			base.checkVisible;
			base.setVars();
		},

		setVars : function(){
			var base = this;
			if(base.$elem.children().length === 0){return false}
			base.baseClass();
			base.eventTypes();
			base.$userItems = base.$elem.children();
			base.itemsAmount = base.$userItems.length;
			base.wrapItems();
			base.$owlItems = base.$elem.find(".owl-item");
			base.$owlWrapper = base.$elem.find(".owl-wrapper");
			base.playDirection = "next";
			base.prevItem = 0;
			base.prevArr = [0];
			base.currentItem = 0;
			base.customEvents();
			base.onStartup();
		},

		onStartup : function(){
			var base = this;
			base.updateItems();
			base.calculateAll();
			base.buildControls();
			base.updateControls();
			base.response();
			base.moveEvents();
			base.stopOnHover();
			base.owlStatus();

			if(base.options.transitionStyle !== false){
				base.transitionTypes(base.options.transitionStyle);
			}
			if(base.options.autoPlay === true){
				base.options.autoPlay = 5000;
			}
			base.play();

			base.$elem.find(".owl-wrapper").css("display","block")

			if(!base.$elem.is(":visible")){
				base.watchVisibility();
			} else {
				base.$elem.css("opacity",1);
			}
			base.onstartup = false;
			base.eachMoveUpdate();
			if (typeof base.options.afterInit === "function") {
				base.options.afterInit.apply(this,[base.$elem]);
			}
		},

		eachMoveUpdate : function(){
			var base = this;

			if(base.options.lazyLoad === true){
				base.lazyLoad();
			}
			if(base.options.autoHeight === true){
				base.autoHeight();
			}
			base.onVisibleItems();

			if (typeof base.options.afterAction === "function") {
				base.options.afterAction.apply(this,[base.$elem]);
			}
		},

		updateVars : function(){
			var base = this;
			if(typeof base.options.beforeUpdate === "function") {
				base.options.beforeUpdate.apply(this,[base.$elem]);
			}
			base.watchVisibility();
			base.updateItems();
			base.calculateAll();
			base.updatePosition();
			base.updateControls();
			base.eachMoveUpdate();
			if(typeof base.options.afterUpdate === "function") {
				base.options.afterUpdate.apply(this,[base.$elem]);
			}
		},

		reload : function(elements){
			var base = this;
			setTimeout(function(){
				base.updateVars();
			},0)
		},

		watchVisibility : function(){
			var base = this;

			if(base.$elem.is(":visible") === false){
				base.$elem.css({opacity: 0});
				clearInterval(base.autoPlayInterval);
				clearInterval(base.checkVisible);
			} else {
				return false;
			}
			base.checkVisible = setInterval(function(){
				if (base.$elem.is(":visible")) {
					base.reload();
					base.$elem.animate({opacity: 1},200);
					clearInterval(base.checkVisible);
				}
			}, 500);
		},

		wrapItems : function(){
			var base = this;
			base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
			base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
			base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
			base.$elem.css("display","block");
		},

		baseClass : function(){
			var base = this;
			var hasBaseClass = base.$elem.hasClass(base.options.baseClass);
			var hasThemeClass = base.$elem.hasClass(base.options.theme);

			if(!hasBaseClass){
				base.$elem.addClass(base.options.baseClass);
			}

			if(!hasThemeClass){
				base.$elem.addClass(base.options.theme);
			}
		},

		updateItems : function(){
			var base = this;

			if(base.options.responsive === false){
				return false;
			}
			if(base.options.singleItem === true){
				base.options.items = base.orignalItems = 1;
				base.options.itemsCustom = false;
				base.options.itemsDesktop = false;
				base.options.itemsDesktopSmall = false;
				base.options.itemsTablet = false;
				base.options.itemsTabletSmall = false;
				base.options.itemsMobile = false;
				return false;
			}

			var width = $(base.options.responsiveBaseWidth).width();

			if(width > (base.options.itemsDesktop[0] || base.orignalItems) ){
				base.options.items = base.orignalItems;
			}

			if(typeof(base.options.itemsCustom) !== 'undefined' && base.options.itemsCustom !== false){
				//Reorder array by screen size
				base.options.itemsCustom.sort(function(a,b){return a[0]-b[0];});
				for(var i in base.options.itemsCustom){
					if(typeof(base.options.itemsCustom[i]) !== 'undefined' && base.options.itemsCustom[i][0] <= width){
						base.options.items = base.options.itemsCustom[i][1];
					}
				}
			} else {

				if(width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false){
					base.options.items = base.options.itemsDesktop[1];
				}

				if(width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false){
					base.options.items = base.options.itemsDesktopSmall[1];
				}

				if(width <= base.options.itemsTablet[0]  && base.options.itemsTablet !== false){
					base.options.items = base.options.itemsTablet[1];
				}

				if(width <= base.options.itemsTabletSmall[0]  && base.options.itemsTabletSmall !== false){
					base.options.items = base.options.itemsTabletSmall[1];
				}

				if(width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false){
					base.options.items = base.options.itemsMobile[1];
				}
			}

			//if number of items is less than declared
			if(base.options.items > base.itemsAmount && base.options.itemsScaleUp === true){
				base.options.items = base.itemsAmount;
			}
		},

		response : function(){
			var base = this,
				smallDelay;
			if(base.options.responsive !== true){
				return false
			}
			var lastWindowWidth = $(window).width();

			base.resizer = function(){
				if($(window).width() !== lastWindowWidth){
					if(base.options.autoPlay !== false){
						clearInterval(base.autoPlayInterval);
					}
					clearTimeout(smallDelay);
					smallDelay = setTimeout(function(){
						lastWindowWidth = $(window).width();
						base.updateVars();
					},base.options.responsiveRefreshRate);
				}
			}
			$(window).resize(base.resizer)
		},

		updatePosition : function(){
			var base = this;
			base.jumpTo(base.currentItem);
			if(base.options.autoPlay !== false){
				base.checkAp();
			}
		},

		appendItemsSizes : function(){
			var base = this;

			var roundPages = 0;
			var lastItem = base.itemsAmount - base.options.items;

			base.$owlItems.each(function(index){
				var $this = $(this);
				$this
					.css({"width": base.itemWidth})
					.data("owl-item",Number(index));

				if(index % base.options.items === 0 || index === lastItem){
					if(!(index > lastItem)){
						roundPages +=1;
					}
				}
				$this.data("owl-roundPages",roundPages)
			});
		},

		appendWrapperSizes : function(){
			var base = this;
			var width = 0;

			var width = base.$owlItems.length * base.itemWidth;

			base.$owlWrapper.css({
				"width": width*2,
				"left": 0
			});
			base.appendItemsSizes();
		},

		calculateAll : function(){
			var base = this;
			base.calculateWidth();
			base.appendWrapperSizes();
			base.loops();
			base.max();
		},

		calculateWidth : function(){
			var base = this;
			base.itemWidth = Math.round(base.$elem.width()/base.options.items)
		},

		max : function(){
			var base = this;
			var maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
			if(base.options.items > base.itemsAmount){
				base.maximumItem = 0;
				maximum = 0
				base.maximumPixels = 0;
			} else {
				base.maximumItem = base.itemsAmount - base.options.items;
				base.maximumPixels = maximum;
			}
			return maximum;
		},

		min : function(){
			return 0;
		},

		loops : function(){
			var base = this;

			base.positionsInArray = [0];
			base.pagesInArray = [];
			var prev = 0;
			var elWidth = 0;

			for(var i = 0; i<base.itemsAmount; i++){
				elWidth += base.itemWidth;
				base.positionsInArray.push(-elWidth);

				if(base.options.scrollPerPage === true){
					var item = $(base.$owlItems[i]);
					var roundPageNum = item.data("owl-roundPages");
					if(roundPageNum !== prev){
						base.pagesInArray[prev] = base.positionsInArray[i];
						prev = roundPageNum;
					}
				}
			}
		},

		buildControls : function(){
			var base = this;
			if(base.options.navigation === true || base.options.pagination === true){
				base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
			}
			if(base.options.pagination === true){
				base.buildPagination();
			}
			if(base.options.navigation === true){
				base.buildButtons();
			}
		},

		buildButtons : function(){
			var base = this;
			var buttonsWrapper = $("<div class=\"owl-buttons\"/>")
			base.owlControls.append(buttonsWrapper);

			base.buttonPrev = $("<div/>",{
				"class" : "owl-prev",
				"html" : base.options.navigationText[0] || ""
				});

			base.buttonNext = $("<div/>",{
				"class" : "owl-next",
				"html" : base.options.navigationText[1] || ""
				});

			buttonsWrapper
			.append(base.buttonPrev)
			.append(base.buttonNext);

			buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function(event){
				event.preventDefault();
			})

			buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function(event){
				event.preventDefault();
				if($(this).hasClass("owl-next")){
					base.next();
				} else{
					base.prev();
				}
			})
		},

		buildPagination : function(){
			var base = this;

			base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
			base.owlControls.append(base.paginationWrapper);

			base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(event){
				event.preventDefault();
				if(Number($(this).data("owl-page")) !== base.currentItem){
					base.goTo( Number($(this).data("owl-page")), true);
				}
			});
		},

		updatePagination : function(){
			var base = this;
			if(base.options.pagination === false){
				return false;
			}

			base.paginationWrapper.html("");

			var counter = 0;
			var lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

			for(var i = 0; i<base.itemsAmount; i++){
				if(i % base.options.items === 0){
					counter +=1;
					if(lastPage === i){
						var lastItem = base.itemsAmount - base.options.items;
					}
					var paginationButton = $("<div/>",{
						"class" : "owl-page"
						});
					var paginationButtonInner = $("<span></span>",{
						"text": base.options.paginationNumbers === true ? counter : "",
						"class": base.options.paginationNumbers === true ? "owl-numbers" : ""
					});
					paginationButton.append(paginationButtonInner);

					paginationButton.data("owl-page",lastPage === i ? lastItem : i);
					paginationButton.data("owl-roundPages",counter);

					base.paginationWrapper.append(paginationButton);
				}
			}
			base.checkPagination();
		},
		checkPagination : function(){
			var base = this;
			if(base.options.pagination === false){
				return false;
			}
			base.paginationWrapper.find(".owl-page").each(function(i,v){
				if($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages") ){
					base.paginationWrapper
						.find(".owl-page")
						.removeClass("active");
					$(this).addClass("active");
				}
			});
		},

		checkNavigation : function(){
			var base = this;

			if(base.options.navigation === false){
				return false;
			}
			if(base.options.rewindNav === false){
				if(base.currentItem === 0 && base.maximumItem === 0){
					base.buttonPrev.addClass("disabled");
					base.buttonNext.addClass("disabled");
				} else if(base.currentItem === 0 && base.maximumItem !== 0){
					base.buttonPrev.addClass("disabled");
					base.buttonNext.removeClass("disabled");
				} else if (base.currentItem === base.maximumItem){
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.addClass("disabled");
				} else if(base.currentItem !== 0 && base.currentItem !== base.maximumItem){
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.removeClass("disabled");
				}
			}
		},

		updateControls : function(){
			var base = this;
			base.updatePagination();
			base.checkNavigation();
			if(base.owlControls){
				if(base.options.items >= base.itemsAmount){
					base.owlControls.hide();
				} else {
					base.owlControls.show();
				}
			}
		},

		destroyControls : function(){
			var base = this;
			if(base.owlControls){
				base.owlControls.remove();
			}
		},

		next : function(speed){
			var base = this;

			if(base.isTransition){
				return false;
			}

			base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
			if(base.currentItem > base.maximumItem + (base.options.scrollPerPage == true ? (base.options.items - 1) : 0)){
				if(base.options.rewindNav === true){
					base.currentItem = 0;
					speed = "rewind";
				} else {
					base.currentItem = base.maximumItem;
					return false;
				}
			}
			base.goTo(base.currentItem,speed);
		},

		prev : function(speed){
			var base = this;

			if(base.isTransition){
				return false;
			}

			if(base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items){
				base.currentItem = 0
			} else {
				base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
			}
			if(base.currentItem < 0){
				if(base.options.rewindNav === true){
					base.currentItem = base.maximumItem;
					speed = "rewind"
				} else {
					base.currentItem =0;
					return false;
				}
			}
			base.goTo(base.currentItem,speed);
		},

		goTo : function(position,speed,drag){
			var base = this;

			if(base.isTransition){
				return false;
			}
			if(typeof base.options.beforeMove === "function") {
				base.options.beforeMove.apply(this,[base.$elem]);
			}
			if(position >= base.maximumItem){
				position = base.maximumItem;
			}
			else if( position <= 0 ){
				position = 0;
			}

			base.currentItem = base.owl.currentItem = position;
			if( base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true){
				base.swapSpeed(0)
				if(base.browser.support3d === true){
					base.transition3d(base.positionsInArray[position]);
				} else {
					base.css2slide(base.positionsInArray[position],1);
				}
				base.afterGo();
				base.singleItemTransition();
				
				return false;
			}
			var goToPixel = base.positionsInArray[position];

			if(base.browser.support3d === true){
				base.isCss3Finish = false;

				if(speed === true){
					base.swapSpeed("paginationSpeed");
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.paginationSpeed);

				} else if(speed === "rewind" ){
					base.swapSpeed(base.options.rewindSpeed);
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.rewindSpeed);

				} else {
					base.swapSpeed("slideSpeed");
					setTimeout(function() {
						base.isCss3Finish = true;
					}, base.options.slideSpeed);
				}
				base.transition3d(goToPixel);
			} else {
				if(speed === true){
					base.css2slide(goToPixel, base.options.paginationSpeed);
				} else if(speed === "rewind" ){
					base.css2slide(goToPixel, base.options.rewindSpeed);
				} else {
					base.css2slide(goToPixel, base.options.slideSpeed);
				}
			}
			base.afterGo();
		},

		jumpTo : function(position){
			var base = this;
			if(typeof base.options.beforeMove === "function") {
				base.options.beforeMove.apply(this,[base.$elem]);
			}
			if(position >= base.maximumItem || position === -1){
				position = base.maximumItem;
			}
			else if( position <= 0 ){
				position = 0;
			}
			base.swapSpeed(0)
			if(base.browser.support3d === true){
				base.transition3d(base.positionsInArray[position]);
			} else {
				base.css2slide(base.positionsInArray[position],1);
			}
			base.currentItem = base.owl.currentItem = position;
			base.afterGo();
		},

		afterGo : function(){
			var base = this;

			base.prevArr.push(base.currentItem);
			base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length -2];
			base.prevArr.shift(0)

			if(base.prevItem !== base.currentItem){
				base.checkPagination();
				base.checkNavigation();
				base.eachMoveUpdate();

				if(base.options.autoPlay !== false){
					base.checkAp();
				}
			}
			if(typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
				base.options.afterMove.apply(this,[base.$elem]);
			}
		},

		stop : function(){
			var base = this;
			base.apStatus = "stop";
			clearInterval(base.autoPlayInterval);
		},

		checkAp : function(){
			var base = this;
			if(base.apStatus !== "stop"){
				base.play();
			}
		},

		play : function(){
			var base = this;
			base.apStatus = "play";
			if(base.options.autoPlay === false){
				return false;
			}
			clearInterval(base.autoPlayInterval);
			base.autoPlayInterval = setInterval(function(){
				base.next(true);
			},base.options.autoPlay);
		},

		swapSpeed : function(action){
			var base = this;
			if(action === "slideSpeed"){
				base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
			} else if(action === "paginationSpeed" ){
				base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
			} else if(typeof action !== "string"){
				base.$owlWrapper.css(base.addCssSpeed(action));
			}
		},

		addCssSpeed : function(speed){
			var base = this;
			return {
				"-webkit-transition": "all "+ speed +"ms ease",
				"-moz-transition": "all "+ speed +"ms ease",
				"-o-transition": "all "+ speed +"ms ease",
				"transition": "all "+ speed +"ms ease"
			};
		},

		removeTransition : function(){
			return {
				"-webkit-transition": "",
				"-moz-transition": "",
				"-o-transition": "",
				"transition": ""
			};
		},

		doTranslate : function(pixels){
			return {
				"-webkit-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-moz-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-o-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"-ms-transform": "translate3d("+pixels+"px, 0px, 0px)",
				"transform": "translate3d("+pixels+"px, 0px,0px)"
			};
		},

		transition3d : function(value){
			var base = this;
			base.$owlWrapper.css(base.doTranslate(value));
		},

		css2move : function(value){
			var base = this;
			base.$owlWrapper.css({"left" : value})
		},

		css2slide : function(value,speed){
			var base = this;

			base.isCssFinish = false;
			base.$owlWrapper.stop(true,true).animate({
				"left" : value
			}, {
				duration : speed || base.options.slideSpeed ,
				complete : function(){
					base.isCssFinish = true;
				}
			});
		},

		checkBrowser : function(){
			var base = this;

			//Check 3d support
			var	translate3D = "translate3d(0px, 0px, 0px)",
				tempElem = document.createElement("div");

			tempElem.style.cssText= "  -moz-transform:"    + translate3D +
								  "; -ms-transform:"     + translate3D +
								  "; -o-transform:"      + translate3D +
								  "; -webkit-transform:" + translate3D +
								  "; transform:"         + translate3D;
			var	regex = /translate3d\(0px, 0px, 0px\)/g,
				asSupport = tempElem.style.cssText.match(regex),
				support3d = (asSupport !== null && asSupport.length === 1);

			var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;

			base.browser = {
				"support3d" : support3d,
				"isTouch" : isTouch
			}
		},

		moveEvents : function(){
			var base = this;
			if(base.options.mouseDrag !== false || base.options.touchDrag !== false){
				base.gestures();
				base.disabledEvents();
			}
		},

		eventTypes : function(){
			var base = this;
			var types = ["s","e","x"];

			base.ev_types = {};

			if(base.options.mouseDrag === true && base.options.touchDrag === true){
				types = [
					"touchstart.owl mousedown.owl",
					"touchmove.owl mousemove.owl",
					"touchend.owl touchcancel.owl mouseup.owl"
				];
			} else if(base.options.mouseDrag === false && base.options.touchDrag === true){
				types = [
					"touchstart.owl",
					"touchmove.owl",
					"touchend.owl touchcancel.owl"
				];
			} else if(base.options.mouseDrag === true && base.options.touchDrag === false){
				types = [
					"mousedown.owl",
					"mousemove.owl",
					"mouseup.owl"
				];
			}

			base.ev_types["start"] = types[0];
			base.ev_types["move"] = types[1];
			base.ev_types["end"] = types[2];
		},

		disabledEvents :  function(){
			var base = this;
			base.$elem.on("dragstart.owl", function(event) { event.preventDefault();});
			base.$elem.on("mousedown.disableTextSelect", function(e) {
				return $(e.target).is('input, textarea, select, option');
			});
		},

		gestures : function(){
			var base = this;

			var locals = {
				offsetX : 0,
				offsetY : 0,
				baseElWidth : 0,
				relativePos : 0,
				position: null,
				minSwipe : null,
				maxSwipe: null,
				sliding : null,
				dargging: null,
				targetElement : null
			}

			base.isCssFinish = true;

			function getTouches(event){
				if(event.touches){
					return {
						x : event.touches[0].pageX,
						y : event.touches[0].pageY
					}
				} else {
					if(event.pageX !== undefined){
						return {
							x : event.pageX,
							y : event.pageY
						}
					} else {
						return {
							x : event.clientX,
							y : event.clientY
						}
					}
				}
			}

			function swapEvents(type){
				if(type === "on"){
					$(document).on(base.ev_types["move"], dragMove);
					$(document).on(base.ev_types["end"], dragEnd);
				} else if(type === "off"){
					$(document).off(base.ev_types["move"]);
					$(document).off(base.ev_types["end"]);
				}
			}

			function dragStart(event) {
				var event = event.originalEvent || event || window.event;

				if (event.which === 3) {
					return false;
				}
				if(base.itemsAmount <= base.options.items){
					return;
				}
				if(base.isCssFinish === false && !base.options.dragBeforeAnimFinish ){
					return false;
				}
				if(base.isCss3Finish === false && !base.options.dragBeforeAnimFinish ){
					return false;
				}

				if(base.options.autoPlay !== false){
					clearInterval(base.autoPlayInterval);
				}

				if(base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")){
					base.$owlWrapper.addClass("grabbing")
				}

				base.newPosX = 0;
				base.newRelativeX = 0;

				$(this).css(base.removeTransition());

				var position = $(this).position();
				locals.relativePos = position.left;
				
				locals.offsetX = getTouches(event).x - position.left;
				locals.offsetY = getTouches(event).y - position.top;

				swapEvents("on");

				locals.sliding = false;
				locals.targetElement = event.target || event.srcElement;
			}

			function dragMove(event){
				var event = event.originalEvent || event || window.event;

				base.newPosX = getTouches(event).x- locals.offsetX;
				base.newPosY = getTouches(event).y - locals.offsetY;
				base.newRelativeX = base.newPosX - locals.relativePos;	

				if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
					locals.dragging = true;
					base.options.startDragging.apply(base,[base.$elem]);
				}

				if(base.newRelativeX > 8 || base.newRelativeX < -8 && base.browser.isTouch === true){
					event.preventDefault ? event.preventDefault() : event.returnValue = false;
					locals.sliding = true;
				}

				if((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false){
					$(document).off("touchmove.owl");
				}

				var minSwipe = function(){
					return  base.newRelativeX / 5;
				}
				var maxSwipe = function(){
					return  base.maximumPixels + base.newRelativeX / 5;
				}

				base.newPosX = Math.max(Math.min( base.newPosX, minSwipe() ), maxSwipe() );
				if(base.browser.support3d === true){
					base.transition3d(base.newPosX);
				} else {
					base.css2move(base.newPosX);
				}
			}

			function dragEnd(event){
				var event = event.originalEvent || event || window.event;
				event.target = event.target || event.srcElement;

				locals.dragging = false;

				if(base.browser.isTouch !== true){
					base.$owlWrapper.removeClass("grabbing");
				}

				if(base.newRelativeX<0){
					base.dragDirection = base.owl.dragDirection = "left"
				} else {
					base.dragDirection = base.owl.dragDirection = "right"
				}

				if(base.newRelativeX !== 0){
					var newPosition = base.getNewPosition();
					base.goTo(newPosition,false,"drag");
					if(locals.targetElement === event.target && base.browser.isTouch !== true){
						$(event.target).on("click.disable", function(ev){
							ev.stopImmediatePropagation();
							ev.stopPropagation();
							ev.preventDefault();
							$(event.target).off("click.disable");
						});
						var handlers = $._data(event.target, "events")["click"];
						var owlStopEvent = handlers.pop();
						handlers.splice(0, 0, owlStopEvent);
					}
				}
				swapEvents("off");
			}
			base.$elem.on(base.ev_types["start"], ".owl-wrapper", dragStart); 
		},

		getNewPosition : function(){
			var base = this,
				newPosition;
			
			newPosition = base.closestItem();

			if(newPosition>base.maximumItem){
				base.currentItem = base.maximumItem;
				newPosition  = base.maximumItem;
			} else if( base.newPosX >=0 ){
				newPosition = 0;
				base.currentItem = 0;
			}
			return newPosition;
		},
		closestItem : function(){
			var base = this,
				array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
				goal = base.newPosX,
				closest = null;

			$.each(array, function(i,v){
				if( goal - (base.itemWidth/20) > array[i+1] && goal - (base.itemWidth/20)< v && base.moveDirection() === "left") {
					closest = v;
					if(base.options.scrollPerPage === true){
						base.currentItem = $.inArray(closest, base.positionsInArray);
					} else {
						base.currentItem = i;
					}
				} 
				else if (goal + (base.itemWidth/20) < v && goal + (base.itemWidth/20) > (array[i+1] || array[i]-base.itemWidth) && base.moveDirection() === "right"){
					if(base.options.scrollPerPage === true){
						closest = array[i+1] || array[array.length-1];
						base.currentItem = $.inArray(closest, base.positionsInArray);
					} else {
						closest = array[i+1];
						base.currentItem = i+1;
					}
				}
			});
			return base.currentItem;
		},

		moveDirection : function(){
			var base = this,
				direction;
			if(base.newRelativeX < 0 ){
				direction = "right"
				base.playDirection = "next"
			} else {
				direction = "left"
				base.playDirection = "prev"
			}
			return direction
		},

		customEvents : function(){
			var base = this;
			base.$elem.on("owl.next",function(){
				base.next();
			});
			base.$elem.on("owl.prev",function(){
				base.prev();
			});
			base.$elem.on("owl.play",function(event,speed){
				base.options.autoPlay = speed;
				base.play();
				base.hoverStatus = "play";
			});
			base.$elem.on("owl.stop",function(){
				base.stop();
				base.hoverStatus = "stop";
			});
			base.$elem.on("owl.goTo",function(event,item){
				base.goTo(item)
			});
			base.$elem.on("owl.jumpTo",function(event,item){
				base.jumpTo(item)
			});
		},
		
		stopOnHover : function(){
			var base = this;
			if(base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false){
				base.$elem.on("mouseover", function(){
					base.stop();
				});
				base.$elem.on("mouseout", function(){
					if(base.hoverStatus !== "stop"){
						base.play();
					}
				});
			}
		},

		lazyLoad : function(){
			var base = this;

			if(base.options.lazyLoad === false){
				return false;
			}
			for(var i=0; i<base.itemsAmount; i++){
				var $item = $(base.$owlItems[i]);

				if($item.data("owl-loaded") === "loaded"){
					continue;
				}

				var	itemNumber = $item.data("owl-item"),
					$lazyImg = $item.find(".lazyOwl"),
					follow;

				if( typeof $lazyImg.data("src") !== "string"){
					$item.data("owl-loaded","loaded");
					continue;
				}				
				if($item.data("owl-loaded") === undefined){
					$lazyImg.hide();
					$item.addClass("loading").data("owl-loaded","checked");
				}
				if(base.options.lazyFollow === true){
					follow = itemNumber >= base.currentItem;
				} else {
					follow = true;
				}
				if(follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length){
					base.lazyPreload($item,$lazyImg);
				}
			}
		},

		lazyPreload : function($item,$lazyImg){
			var base = this,
				iterations = 0;
				if ($lazyImg.prop("tagName") === "DIV") {
					$lazyImg.css("background-image", "url(" + $lazyImg.data("src")+ ")" );
					var isBackgroundImg=true;
				} else {
					$lazyImg[0].src = $lazyImg.data("src");
				}
				checkLazyImage();

			function checkLazyImage(){
				iterations += 1;
				if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
					showImage();
				} else if(iterations <= 100){//if image loads in less than 10 seconds 
					setTimeout(checkLazyImage,100);
				} else {
					showImage();
				}
			}
			function showImage(){
				$item.data("owl-loaded", "loaded").removeClass("loading");
				$lazyImg.removeAttr("data-src");
				base.options.lazyEffect === "fade" ? $lazyImg.fadeIn(400) : $lazyImg.show();
				if(typeof base.options.afterLazyLoad === "function") {
					base.options.afterLazyLoad.apply(this,[base.$elem]);
				}
			}
		},

		autoHeight : function(){
			var base = this;
			var $currentimg = $(base.$owlItems[base.currentItem]).find("img");

			if($currentimg.get(0) !== undefined ){
				var iterations = 0;
				checkImage();
			} else {
				addHeight();
			}
			function checkImage(){
				iterations += 1;
				if ( base.completeImg($currentimg.get(0)) ) {
					addHeight();
				} else if(iterations <= 100){ //if image loads in less than 10 seconds 
					setTimeout(checkImage,100);
				} else {
					base.wrapperOuter.css("height", ""); //Else remove height attribute
				}
			}

			function addHeight(){
				var $currentItem = $(base.$owlItems[base.currentItem]).height();
				base.wrapperOuter.css("height",$currentItem+"px");
				if(!base.wrapperOuter.hasClass("autoHeight")){
					setTimeout(function(){
						base.wrapperOuter.addClass("autoHeight");
					},0);
				}
			}
		},

		completeImg : function(img) {
		    if (!img.complete) {
		        return false;
		    }
		    if (typeof img.naturalWidth !== "undefined" && img.naturalWidth == 0) {
		        return false;
		    }
		    return true;
		},

		onVisibleItems : function(){
			var base = this;

			if(base.options.addClassActive === true){
				base.$owlItems.removeClass("active");
			}
			base.visibleItems = [];
			for(var i=base.currentItem; i<base.currentItem + base.options.items; i++){
				base.visibleItems.push(i);

				if(base.options.addClassActive === true){
					$(base.$owlItems[i]).addClass("active");
				}
			}
			base.owl.visibleItems = base.visibleItems;
		},

		transitionTypes : function(className){
			var base = this;
			//Currently available: "fade","backSlide","goDown","fadeUp"
			base.outClass = "owl-"+className+"-out";
			base.inClass = "owl-"+className+"-in";
		},

		singleItemTransition : function(){
			var base = this;
			base.isTransition = true;

			var outClass = base.outClass,
				inClass = base.inClass,
				$currentItem = base.$owlItems.eq(base.currentItem),
				$prevItem = base.$owlItems.eq(base.prevItem),
				prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
				origin = Math.abs(base.positionsInArray[base.currentItem])+base.itemWidth/2;

            base.$owlWrapper
	            .addClass('owl-origin')
	            .css({
	            	"-webkit-transform-origin" : origin+"px",
	            	"-moz-perspective-origin" : origin+"px",
	            	"perspective-origin" : origin+"px"
	            });
	        function transStyles(prevPos,zindex){
				return {
					"position" : "relative",
					"left" : prevPos+"px"
				};
			}

	        var animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

			$prevItem
			.css(transStyles(prevPos,10))
			.addClass(outClass)
			.on(animEnd, function() {
				base.endPrev = true;
				$prevItem.off(animEnd);
		    	base.clearTransStyle($prevItem,outClass);
			});

			$currentItem
			.addClass(inClass)
			.on(animEnd, function() {
				base.endCurrent = true;
				$currentItem.off(animEnd);
		    	base.clearTransStyle($currentItem,inClass);
		    });
		},

		clearTransStyle : function(item,classToRemove){
			var base = this;
			item.css({
					"position" : "",
					"left" : ""
				})
				.removeClass(classToRemove);
			if(base.endPrev && base.endCurrent){
				base.$owlWrapper.removeClass('owl-origin');
				base.endPrev = false;
				base.endCurrent = false;
				base.isTransition = false;
			}
		},

		owlStatus : function(){
			var base = this;
			base.owl = {
				"userOptions"	: base.userOptions,
				"baseElement" 	: base.$elem,
				"userItems"		: base.$userItems,
				"owlItems"		: base.$owlItems,
				"currentItem"	: base.currentItem,
				"prevItem"		: base.prevItem,
				"visibleItems"	: base.visibleItems,
				"isTouch" 		: base.browser.isTouch,
				"browser"		: base.browser,
				"dragDirection" : base.dragDirection
			}
		},

		clearEvents : function(){
			var base = this;
			base.$elem.off(".owl owl mousedown.disableTextSelect");
			$(document).off(".owl owl");
			$(window).off("resize", base.resizer);
		},

		unWrap : function(){
			var base = this;
			if(base.$elem.children().length !== 0){
				base.$owlWrapper.unwrap();
				base.$userItems.unwrap().unwrap();
				if(base.owlControls){
					base.owlControls.remove();
				}
			}
			base.clearEvents();
			base.$elem
				.attr("style", base.$elem.data("owl-originalStyles") || "")
				.attr("class", base.$elem.data("owl-originalClasses"));
		},

		destroy : function(){
			var base = this;
			base.stop();
			clearInterval(base.checkVisible);
			base.unWrap();
			base.$elem.removeData();
		},

		reinit : function(newOptions){
			var base = this;
			var options = $.extend({}, base.userOptions, newOptions);
		 	base.unWrap();
		 	base.init(options,base.$elem);
		},

		addItem : function(htmlString,targetPosition){
			var base = this,
				position;

			if(!htmlString){return false}

			if(base.$elem.children().length === 0){
				base.$elem.append(htmlString);
				base.setVars();
				return false;
			}
			base.unWrap();
			if(targetPosition === undefined || targetPosition === -1){
				position = -1;
			} else {
				position = targetPosition;
			}
			if(position >= base.$userItems.length || position === -1){
				base.$userItems.eq(-1).after(htmlString)
			} else {
				base.$userItems.eq(position).before(htmlString)
			}

			base.setVars();
		},

		removeItem : function(targetPosition){
			var base = this,
				position;

			if(base.$elem.children().length === 0){return false}
			
			if(targetPosition === undefined || targetPosition === -1){
				position = -1;
			} else {
				position = targetPosition;
			}

			base.unWrap();
			base.$userItems.eq(position).remove();
			base.setVars();
		}

	};

	$.fn.owlCarousel = function( options ){
		return this.each(function() {
			if($(this).data("owl-init") === true){
				return false;
			}
			$(this).data("owl-init", true);
			var carousel = Object.create( Carousel );
			carousel.init( options, this );
			$.data( this, "owlCarousel", carousel );
		});
	};

	$.fn.owlCarousel.options = {

		items : 5,
		itemsCustom : false,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3],
		itemsTablet : [768,2],
		itemsTabletSmall : false,
		itemsMobile : [479,1],
		singleItem : false,
		itemsScaleUp : false,

		slideSpeed : 200,
		paginationSpeed : 800,
		rewindSpeed : 1000,

		autoPlay : false,
		stopOnHover : false,

		navigation : false,
		navigationText : ["prev","next"],
		rewindNav : true,
		scrollPerPage : false,

		pagination : true,
		paginationNumbers : false,

		responsive : true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth	: window,
		

		baseClass : "owl-carousel",
		theme : "owl-theme",

		lazyLoad : false,
		lazyFollow : true,
		lazyEffect : "fade",

		autoHeight : false,

		jsonPath : false,
		jsonSuccess : false,

		dragBeforeAnimFinish : true,
		mouseDrag : true,
		touchDrag : true,

		addClassActive : false,
		transitionStyle : false,

		beforeUpdate : false,
		afterUpdate : false,
		beforeInit : false,
		afterInit : false,
		beforeMove : false,
		afterMove : false,
		afterAction : false,
		startDragging : false,
		afterLazyLoad: false
		
	};
})( jQuery, window, document );

/*!
* VERSION: 1.11.8
* DATE: 2014-05-13
* UPDATES AND DOCS AT: http://www.greensock.com
*
* @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
* This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
* Club GreenSock members, the software agreement that was issued with your membership.
*
* @author: Jack Doyle, jack@greensock.com
*/

/*!
* LayerSlider is using TweenLite, TimeLineLite, EasePack & CSSPlugin
*/

;eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(17(e){"4V 4U";19 t=e.5Z||e;1a(!t.5f){19 n,r,i,s,o,u=17(e){19 n,r=e.1t("."),i=t;1b(n=0;r.1c>n;n++)i[r[n]]=i=i[r[n]]||{};18 i},a=u("4Q.4R"),f=1e-10,l=[].6K,c=17(){},h=17(){19 e=9V.1y.9W,t=e.1W([]);18 17(n){18 1d!=n&&(n 2b 3N||"3U"==1j n&&!!n.2d&&e.1W(n)===t)}}(),p={},d=17(n,r,i,s){15.4C=p[n]?p[n].4C:[],p[n]=15,15.54=1d,15.7A=i;19 o=[];15.64=17(a){1b(19 f,l,c,h,v=r.1c,m=v;--v>-1;)(f=p[r[v]]||1h d(r[v],[])).54?(o[v]=f.54,m--):a&&f.4C.2d(15);1a(0===m&&i)1b(l=("4Q.4R."+n).1t("."),c=l.4q(),h=u(l.1J("."))[c]=15.54=i.35(i,o),s&&(t[c]=h,"17"==1j 63&&63.9X?63((e.8j?e.8j+"/":"")+n.1t(".").1J("/"),[],17(){18 h}):"9U"!=1j 62&&62.8f&&(62.8f=h)),v=0;15.4C.1c>v;v++)15.4C[v].64()},15.64(!0)},v=e.3u=17(e,t,n,r){18 1h d(e,t,n,r)},m=a.8k=17(e,t,n){18 t=t||17(){},v(e,[],17(){18 t},n),t};v.77=t;19 g=[0,0,1,1],y=[],b=m("2o.8h",17(e,t,n,r){15.5L=e,15.6v=n||0,15.6t=r||0,15.5H=t?g.43(t):g},!0),w=b.7C={},E=b.8l=17(e,t,n,r){1b(19 i,s,o,u,f=t.1t(","),l=f.1c,c=(n||"5k,6c,5m").1t(",");--l>-1;)1b(s=f[l],i=r?m("2o."+s,1d,!0):a.2o[s]||{},o=c.1c;--o>-1;)u=c[o],w[s+"."+u]=w[u+s]=i[u]=e.2w?e:e[u]||1h e};1b(i=b.1y,i.3s=!1,i.2w=17(e){1a(15.5L)18 15.5H[0]=e,15.5L.35(1d,15.5H);19 t=15.6v,n=15.6t,r=1===t?1-e:2===t?e:.5>e?2*e:2*(1-e);18 1===n?r*=r:2===n?r*=r*r:3===n?r*=r*r*r:4===n&&(r*=r*r*r*r),1===t?1-r:2===t?r:.5>e?r/2:1-r/2},n=["7X","7Z","9T","9Q","9R,9S"],r=n.1c;--r>-1;)i=n[r]+",9Y"+r,E(1h b(1d,1d,1,r),i,"6c",!0),E(1h b(1d,1d,2,r),i,"5k"+(0===r?",9Z":"")),E(1h b(1d,1d,3,r),i,"5m");w.a5=a.2o.7X.5k,w.a6=a.2o.7Z.5m;19 S=m("8V.8W",17(e){15.4d={},15.85=e||15});i=S.1y,i.79=17(e,t,n,r,i){i=i||0;19 u,a,f=15.4d[e],l=0;1b(1d==f&&(15.4d[e]=f=[]),a=f.1c;--a>-1;)u=f[a],u.c===t&&u.s===n?f.2Q(a,1):0===l&&i>u.2s&&(l=a+1);f.2Q(l,0,{c:t,s:n,8a:r,2s:i}),15!==s||o||s.31()},i.a7=17(e,t){19 n,r=15.4d[e];1a(r)1b(n=r.1c;--n>-1;)1a(r[n].c===t)18 r.2Q(n,1),2h 0},i.8Q=17(e){19 t,n,r,i=15.4d[e];1a(i)1b(t=i.1c,n=15.85;--t>-1;)r=i[t],r.8a?r.c.1W(r.s||n,{2p:e,2x:n}):r.c.1W(r.s||n)};19 x=e.a4,T=e.a3,N=88.a0||17(){18(1h 88).a1()},C=N();1b(n=["5t","a2","9P","o"],r=n.1c;--r>-1&&!x;)x=e[n[r]+"9O"],T=e[n[r]+"9B"]||e[n[r]+"9C"];m("4Y",17(e,t){19 n,r,i,u,a,f=15,l=N(),h=t!==!1&&x,p=17(e){C=N(),f.34=(C-l)/8L;19 t,s=f.34-a;(!n||s>0||e===!0)&&(f.3F++,a+=s+(s>=u?.9D:u-s),t=!0),e!==!0&&(i=r(p)),t&&f.8Q("4W")};S.1W(f),f.34=f.3F=0,f.4W=17(){p(!0)},f.5c=17(){1d!=i&&(h&&T?T(i):9A(i),r=c,i=1d,f===s&&(o=!1))},f.31=17(){1d!==i&&f.5c(),r=0===n?c:h&&x?x:17(e){18 5M(e,0|8L*(a-f.34)+1)},f===s&&(o=!0),p(2)},f.5G=17(e){18 2m.1c?(n=e,u=1/(n||60),a=15.34+u,f.31(),2h 0):n},f.8S=17(e){18 2m.1c?(f.5c(),h=e,f.5G(n),2h 0):h},f.5G(e),5M(17(){h&&(!i||5>f.3F)&&f.8S(!1)},9z)}),i=a.4Y.1y=1h a.8V.8W,i.2K=a.4Y;19 k=m("5C.8H",17(e,t){1a(15.1p=t=t||{},15.1C=15.2i=e||0,15.2L=1D(t.4x)||0,15.1x=1,15.2a=t.1Y===!0,15.1A=t.1A,15.2M=t.48===!0,q){o||s.31();19 n=15.1p.5K?I:q;n.1U(15,n.1n),15.1p.3e&&15.3e(!0)}});s=k.6f=1h a.4Y,i=k.1y,i.2r=i.1O=i.2z=i.1B=!1,i.1H=i.1n=0,i.1z=-1,i.1f=i.3l=i.33=i.1o=i.21=1d,i.1B=!1;19 L=17(){o&&N()-C>8J&&s.31(),5M(L,8J)};L(),i.73=17(e,t){18 1d!=e&&15.4b(e,t),15.48(!1).3e(!1)},i.5N=17(e,t){18 1d!=e&&15.4b(e,t),15.3e(!0)},i.9v=17(e,t){18 1d!=e&&15.4b(e,t),15.3e(!1)},i.4b=17(e,t){18 15.2Z(1D(e),t!==!1)},i.9w=17(e,t){18 15.48(!1).3e(!1).2Z(e?-15.2L:0,t!==!1,!0)},i.9x=17(e,t){18 1d!=e&&15.4b(e||15.23(),t),15.48(!0).3e(!1)},i.1E=17(){},i.5u=17(){18 15},i.4n=17(){19 e,t=15.1o,n=15.1i;18!t||!15.1O&&!15.1B&&t.4n()&&(e=t.3H())>=n&&n+15.23()/15.1x>e},i.1N=17(e,t){18 o||s.31(),15.1O=!e,15.2a=15.4n(),t!==!0&&(e&&!15.21?15.1o.1U(15,15.1i-15.2L):!e&&15.21&&15.1o.3K(15,!0)),!1},i.2n=17(){18 15.1N(!1,!1)},i.4f=17(e,t){18 15.2n(e,t),15},i.3c=17(e){1b(19 t=e?15:15.21;t;)t.2r=!0,t=t.21;18 15},i.5l=17(e){1b(19 t=e.1c,n=e.43();--t>-1;)"{4B}"===e[t]&&(n[t]=15);18 n},i.9y=17(e,t,n,r){1a("9E"===(e||"").1q(0,2)){19 i=15.1p;1a(1===2m.1c)18 i[e];1d==t?3E i[e]:(i[e]=t,i[e+"5Y"]=h(n)&&-1!==n.1J("").1k("{4B}")?15.5l(n):n,i[e+"5J"]=r),"5A"===e&&(15.33=t)}18 15},i.4x=17(e){18 2m.1c?(15.1o.2j&&15.8C(15.1i+e-15.2L),15.2L=e,15):15.2L},i.2C=17(e){18 2m.1c?(15.1C=15.2i=e,15.3c(!0),15.1o.2j&&15.1n>0&&15.1n<15.1C&&0!==e&&15.2Z(15.1H*(e/15.1C),!0),15):(15.2r=!1,15.1C)},i.23=17(e){18 15.2r=!1,2m.1c?15.2C(e):15.2i},i.34=17(e,t){18 2m.1c?(15.2r&&15.23(),15.2Z(e>15.1C?15.1C:e,t)):15.1n},i.2Z=17(e,t,n){1a(o||s.31(),!2m.1c)18 15.1H;1a(15.1o){1a(0>e&&!n&&(e+=15.23()),15.1o.2j){15.2r&&15.23();19 r=15.2i,i=15.1o;1a(e>r&&!n&&(e=r),15.1i=(15.1B?15.4O:i.1n)-(15.2M?r-e:e)/15.1x,i.2r||15.3c(!1),i.1o)1b(;i.1o;)i.1o.1n!==(i.1i+i.1H)/i.1x&&i.2Z(i.1H,!0),i=i.1o}15.1O&&15.1N(!0,!1),(15.1H!==e||0===15.1C)&&15.1E(e,t,!1)}18 15},i.9F=i.9L=17(e,t){18 2m.1c?15.2Z(15.2C()*e,t):15.1n/15.2C()},i.8C=17(e){18 2m.1c?(e!==15.1i&&(15.1i=e,15.21&&15.21.4K&&15.21.1U(15,e-15.2L)),15):15.1i},i.6q=17(e){1a(!2m.1c)18 15.1x;1a(e=e||f,15.1o&&15.1o.2j){19 t=15.4O,n=t||0===t?t:15.1o.2Z();15.1i=n-(n-15.1i)*15.1x/e}18 15.1x=e,15.3c(!1)},i.48=17(e){18 2m.1c?(e!=15.2M&&(15.2M=e,15.2Z(15.1o&&!15.1o.2j?15.23()-15.1H:15.1H,!0)),15):15.2M},i.3e=17(e){1a(!2m.1c)18 15.1B;1a(e!=15.1B&&15.1o){o||e||s.31();19 t=15.1o,n=t.3H(),r=n-15.4O;!e&&t.2j&&(15.1i+=r,15.3c(!1)),15.4O=e?n:1d,15.1B=e,15.2a=15.4n(),!e&&0!==r&&15.2z&&15.2C()&&15.1E(t.2j?15.1H:(n-15.1i)/15.1x,!0,!0)}18 15.1O&&!e&&15.1N(!0,!1),15};19 A=m("5C.7y",17(e){k.1W(15,0,e),15.4H=15.2j=!0});i=A.1y=1h k,i.2K=A,i.4f().1O=!1,i.26=i.3l=1d,i.4K=!1,i.1U=i.7w=17(e,t){19 n,r;1a(e.1i=1D(t||0)+e.2L,e.1B&&15!==e.1o&&(e.4O=e.1i+(15.3H()-e.1i)/e.1x),e.21&&e.21.3K(e,!0),e.21=e.1o=15,e.1O&&e.1N(!0,!0),n=15.3l,15.4K)1b(r=e.1i;n&&n.1i>r;)n=n.1l;18 n?(e.1f=n.1f,n.1f=e):(e.1f=15.26,15.26=e),e.1f?e.1f.1l=e:15.3l=e,e.1l=n,15.1o&&15.3c(!0),15},i.3K=17(e,t){18 e.21===15&&(t||e.1N(!1,!0),e.21=1d,e.1l?e.1l.1f=e.1f:15.26===e&&(15.26=e.1f),e.1f?e.1f.1l=e.1l:15.3l===e&&(15.3l=e.1l),15.1o&&15.3c(!0)),15},i.1E=17(e,t,n){19 r,i=15.26;1b(15.1H=15.1n=15.1z=e;i;)r=i.1f,(i.2a||e>=i.1i&&!i.1B)&&(i.2M?i.1E((i.2r?i.23():i.2i)-(e-i.1i)*i.1x,t,n):i.1E((e-i.1i)*i.1x,t,n)),i=r},i.3H=17(){18 o||s.31(),15.1H};19 O=m("5f",17(t,n,r){1a(k.1W(15,n,r),15.1E=O.1y.1E,1d==t)6l"7e 6R a 1d 2x.";15.2x=t="1L"!=1j t?t:O.3I(t)||t;19 i,s,o,u=t.9M||t.1c&&t!==e&&t[0]&&(t[0]===e||t[0].3n&&t[0].1w&&!t.3n),a=15.1p.4I;1a(15.6j=a=1d==a?F[O.8G]:"2y"==1j a?a>>0:F[a],(u||t 2b 3N||t.2d&&h(t))&&"2y"!=1j t[0])1b(15.2F=o=l.1W(t,0),15.3A=[],15.2T=[],i=0;o.1c>i;i++)s=o[i],s?"1L"!=1j s?s.1c&&s!==e&&s[0]&&(s[0]===e||s[0].3n&&s[0].1w&&!s.3n)?(o.2Q(i--,1),15.2F=o=o.43(l.1W(s,0))):(15.2T[i]=R(s,15,!1),1===a&&15.2T[i].1c>1&&U(s,15,1d,1,15.2T[i])):(s=o[i--]=O.3I(s),"1L"==1j s&&o.2Q(i+1,1)):o.2Q(i--,1);1m 15.3A={},15.2T=R(t,15,!1),1===a&&15.2T.1c>1&&U(t,15,1d,1,15.2T);(15.1p.1Y||0===n&&0===15.2L&&15.1p.1Y!==!1)&&15.1E(-15.2L,!1,!0)},!0),M=17(t){18 t.1c&&t!==e&&t[0]&&(t[0]===e||t[0].3n&&t[0].1w&&!t.3n)},2f=17(e,t){19 n,r={};1b(n 1u e)j[n]||n 1u t&&"x"!==n&&"y"!==n&&"3k"!==n&&"3y"!==n&&"3a"!==n&&"3X"!==n||!(!P[n]||P[n]&&P[n].9N)||(r[n]=e[n],3E e[n]);e.4P=r};i=O.1y=1h k,i.2K=O,i.4f().1O=!1,i.3j=0,i.1s=i.2F=i.3m=i.29=1d,i.4u=!1,O.3V="1.11.8",O.6r=i.2H=1h b(1d,1d,1,1),O.8G="2t",O.6f=s,O.7j=!0,O.3I=e.$||e.9K||17(t){18 e.$?(O.3I=e.$,e.$(t)):e.6h?e.6h.9J("#"===t.1v(0)?t.1q(1):t):t};19 D=O.4s={7E:h,7p:M},P=O.9G={},H=O.9H={},B=0,j=D.7k={3z:1,4x:1,4I:1,49:1,6a:1,6s:1,5K:1,4w:1,30:1,5A:1,5U:1,5T:1,4E:1,61:1,5P:1,4i:1,7J:1,7M:1,9I:1,a8:1,a9:1,5d:1,aA:1,1Y:1,5j:1,aB:1,1A:1,3e:1,48:1,6k:1},F={3t:0,41:1,2t:2,aC:3,az:4,ay:5,"av":1,"5X":0},I=k.7P=1h A,q=k.aw=1h A;q.1i=s.34,I.1i=s.3F,q.2a=I.2a=!0,k.7h=17(){1a(q.1E((s.34-q.1i)*q.1x,!1,!1),I.1E((s.3F-I.1i)*I.1x,!1,!1),!(s.3F%ax)){19 e,t,n;1b(n 1u H){1b(t=H[n].3J,e=t.1c;--e>-1;)t[e].1O&&t.2Q(e,1);0===t.1c&&3E H[n]}1a(n=q.26,(!n||n.1B)&&O.7j&&!I.26&&1===s.4d.4W.1c){1b(;n&&n.1B;)n=n.1f;n||s.5c()}}},s.79("4W",k.7h);19 R=17(e,t,n){19 r,i,s=e.7g;1a(H[s||(e.7g=s="t"+B++)]||(H[s]={2x:e,3J:[]}),t&&(r=H[s].3J,r[i=r.1c]=t,n))1b(;--i>-1;)r[i]===t&&r.2Q(i,1);18 H[s].3J},U=17(e,t,n,r,i){19 s,o,u,a;1a(1===r||r>=4){1b(a=i.1c,s=0;a>s;s++)1a((u=i[s])!==t)u.1O||u.1N(!1,!1)&&(o=!0);1m 1a(5===r)76;18 o}19 l,c=t.1i+f,h=[],p=0,d=0===t.1C;1b(s=i.1c;--s>-1;)(u=i[s])===t||u.1O||u.1B||(u.1o!==t.1o?(l=l||z(t,0,d),0===z(u,l,d)&&(h[p++]=u)):c>=u.1i&&u.1i+u.23()/u.1x>c&&((d||!u.2z)&&2e-10>=c-u.1i||(h[p++]=u)));1b(s=p;--s>-1;)u=h[s],2===r&&u.2n(n,e)&&(o=!0),(2!==r||!u.1s&&u.2z)&&u.1N(!1,!1)&&(o=!0);18 o},z=17(e,t,n){1b(19 r=e.1o,i=r.1x,s=e.1i;r.1o;){1a(s+=r.1i,i*=r.1x,r.1B)18-22;r=r.1o}18 s/=i,s>t?s-t:n&&s===t||!e.2z&&2*f>s-t?f:(s+=e.23()/e.1x/i)>t+f?0:s-t-f};i.78=17(){19 e,t,n,r,i=15.1p,s=15.3m,o=15.1C,u=i.1Y,a=i.3z;1a(i.30){1a(15.29&&15.29.1E(-1,!0),i.30.4I=0,i.30.1Y=!0,15.29=O.3Q(15.2x,0,i.30),u)1a(15.1n>0)15.29=1d;1m 1a(0!==o)18}1m 1a(i.4w&&0!==o)1a(15.29)15.29.1E(-1,!0),15.29=1d;1m{n={};1b(r 1u i)j[r]&&"6k"!==r||(n[r]=i[r]);1a(n.4I=0,n.1A="8D",15.29=O.3Q(15.2x,0,n),i.1Y){1a(0===15.1n)18}1m 15.29.1E(-1,!0)}1a(15.2H=a?a 2b b?i.5d 2b 3N?a.3o.35(a,i.5d):a:"17"==1j a?1h b(a,i.5d):w[a]||O.6r:O.6r,15.67=15.2H.6v,15.72=15.2H.6t,15.1s=1d,15.2F)1b(e=15.2F.1c;--e>-1;)15.4p(15.2F[e],15.3A[e]={},15.2T[e],s?s[e]:1d)&&(t=!0);1m t=15.4p(15.2x,15.3A,15.2T,s);1a(t&&O.5z("5D",15),s&&(15.1s||"17"!=1j 15.2x&&15.1N(!1,!1)),i.4w)1b(n=15.1s;n;)n.s+=n.c,n.c=-n.c,n=n.1f;15.33=i.5A,15.2z=!0},i.4p=17(t,n,r,i){19 s,o,u,a,f,l;1a(1d==t)18!1;15.1p.4P||t.1w&&t!==e&&t.3n&&P.4P&&15.1p.6k!==!1&&2f(15.1p,t);1b(s 1u 15.1p){1a(l=15.1p[s],j[s])l&&(l 2b 3N||l.2d&&h(l))&&-1!==l.1J("").1k("{4B}")&&(15.1p[s]=l=15.5l(l,15));1m 1a(P[s]&&(a=1h P[s]).6V(t,15.1p[s],15)){1b(15.1s=f={1f:15.1s,t:a,p:"1S",s:0,c:1,f:!0,n:s,4J:!0,2s:a.5W},o=a.2B.1c;--o>-1;)n[a.2B[o]]=15.1s;(a.5W||a.5D)&&(u=!0),(a.65||a.7L)&&(15.4u=!0)}1m 15.1s=n[s]=f={1f:15.1s,t:t,p:s,f:"17"==1j t[s],n:s,4J:!1,2s:0},f.s=f.f?t[s.1k("4h")||"17"!=1j t["71"+s.1q(3)]?s:"71"+s.1q(3)]():1r(t[s]),f.c="1L"==1j l&&"="===l.1v(1)?3v(l.1v(0)+"1",10)*1D(l.1q(2)):1D(l)-f.s||0;f&&f.1f&&(f.1f.1l=f)}18 i&&15.2n(i,t)?15.4p(t,n,r,i):15.6j>1&&15.1s&&r.1c>1&&U(t,15,n,15.6j,r)?(15.2n(n,t),15.4p(t,n,r,i)):u},i.1E=17(e,t,n){19 r,i,s,o,u=15.1n,a=15.1C;1a(e>=a)15.1H=15.1n=a,15.3j=15.2H.3s?15.2H.2w(1):1,15.2M||(r=!0,i="49"),0===a&&(o=15.1z,15.1i===15.1o.1C&&(e=0),(0===e||0>o||o===f)&&o!==e&&(n=!0,o>f&&(i="4i")),15.1z=o=!t||e||15.1z===e?e:f);1m 1a(1e-7>e)15.1H=15.1n=0,15.3j=15.2H.3s?15.2H.2w(0):0,(0!==u||0===a&&15.1z>0&&15.1z!==f)&&(i="4i",r=15.2M),0>e?(15.2a=!1,0===a&&(15.1z>=0&&(n=!0),15.1z=o=!t||e||15.1z===e?e:f)):15.2z||(n=!0);1m 1a(15.1H=15.1n=e,15.67){19 l=e/a,c=15.67,h=15.72;(1===c||3===c&&l>=.5)&&(l=1-l),3===c&&(l*=2),1===h?l*=l:2===h?l*=l*l:3===h?l*=l*l*l:4===h&&(l*=l*l*l*l),15.3j=1===c?1-l:2===c?l:.5>e/a?l/2:1-l/2}1m 15.3j=15.2H.2w(e/a);1a(15.1n!==u||n){1a(!15.2z){1a(15.78(),!15.2z||15.1O)18;15.1n&&!r?15.3j=15.2H.2w(15.1n/a):r&&15.2H.3s&&(15.3j=15.2H.2w(0===15.1n?0:1))}1b(15.2a||!15.1B&&15.1n!==u&&e>=0&&(15.2a=!0),0===u&&(15.29&&(e>=0?15.29.1E(e,t,n):i||(i="aE")),15.1p.4E&&(0!==15.1n||0===a)&&(t||15.1p.4E.35(15.1p.5P||15,15.1p.61||y))),s=15.1s;s;)s.f?s.t[s.p](s.c*15.3j+s.s):s.t[s.p]=s.c*15.3j+s.s,s=s.1f;15.33&&(0>e&&15.29&&15.1i&&15.29.1E(e,t,n),t||(15.1n!==u||r)&&15.33.35(15.1p.5T||15,15.1p.5U||y)),i&&(15.1O||(0>e&&15.29&&!15.33&&15.1i&&15.29.1E(e,t,n),r&&(15.1o.4H&&15.1N(!1,!1),15.2a=!1),!t&&15.1p[i]&&15.1p[i].35(15.1p[i+"5J"]||15,15.1p[i+"5Y"]||y),0===a&&15.1z===f&&o!==f&&(15.1z=0)))}},i.2n=17(e,t){1a("41"===e&&(e=1d),1d==e&&(1d==t||t===15.2x))18 15.1N(!1,!1);t="1L"!=1j t?t||15.2F||15.2x:O.3I(t)||t;19 n,r,i,s,o,u,a,f;1a((h(t)||M(t))&&"2y"!=1j t[0])1b(n=t.1c;--n>-1;)15.2n(e,t[n])&&(u=!0);1m{1a(15.2F){1b(n=15.2F.1c;--n>-1;)1a(t===15.2F[n]){o=15.3A[n]||{},15.3m=15.3m||[],r=15.3m[n]=e?15.3m[n]||{}:"41";76}}1m{1a(t!==15.2x)18!1;o=15.3A,r=15.3m=e?15.3m||{}:"41"}1a(o){a=e||o,f=e!==r&&"41"!==r&&e!==o&&("3U"!=1j e||!e.aK);1b(i 1u a)(s=o[i])&&(s.4J&&s.t.2n(a)&&(u=!0),s.4J&&0!==s.t.2B.1c||(s.1l?s.1l.1f=s.1f:s===15.1s&&(15.1s=s.1f),s.1f&&(s.1f.1l=s.1l),s.1f=s.1l=1d),3E o[i]),f&&(r[i]=1);!15.1s&&15.2z&&15.1N(!1,!1)}}18 u},i.5u=17(){18 15.4u&&O.5z("65",15),15.1s=1d,15.3m=1d,15.33=1d,15.29=1d,15.2z=15.2a=15.4u=!1,15.3A=15.2F?{}:[],15},i.1N=17(e,t){1a(o||s.31(),e&&15.1O){19 n,r=15.2F;1a(r)1b(n=r.1c;--n>-1;)15.2T[n]=R(r[n],15,!0);1m 15.2T=R(15.2x,15,!0)}18 k.1y.1N.1W(15,e,t),15.4u&&15.1s?O.5z(e?"7L":"65",15):!1},O.3Q=17(e,t,n){18 1h O(e,t,n)},O.66=17(e,t,n){18 n.4w=!0,n.1Y=0!=n.1Y,1h O(e,t,n)},O.6b=17(e,t,n,r){18 r.30=n,r.1Y=0!=r.1Y&&0!=n.1Y,1h O(e,t,r)},O.6o=17(e,t,n,r,i){18 1h O(t,0,{4x:e,49:t,6a:n,6s:r,4i:t,7J:n,7M:r,1Y:!1,5K:i,4I:0})},O.4h=17(e,t){18 1h O(e,0,t)},O.40=17(e,t){1a(1d==e)18[];e="1L"!=1j e?e:O.3I(e)||e;19 n,r,i,s;1a((h(e)||M(e))&&"2y"!=1j e[0]){1b(n=e.1c,r=[];--n>-1;)r=r.43(O.40(e[n],t));1b(n=r.1c;--n>-1;)1b(s=r[n],i=n;--i>-1;)s===r[i]&&r.2Q(n,1)}1m 1b(r=R(e).43(),n=r.1c;--n>-1;)(r[n].1O||t&&!r[n].4n())&&r.2Q(n,1);18 r},O.9u=O.aI=17(e,t,n){"3U"==1j t&&(n=t,t=!1);1b(19 r=O.40(e,t),i=r.1c;--i>-1;)r[i].2n(n,e)};19 W=m("4S.80",17(e,t){15.2B=(e||"").1t(","),15.4D=15.2B[0],15.5W=t||0,15.aF=W.1y},!0);1a(i=W.1y,W.3V="1.10.1",W.3w=2,i.1s=1d,i.aG=17(e,t,n,r,i,s){19 o,u;18 1d!=r&&(o="2y"==1j r||"="!==r.1v(1)?1D(r)-n:3v(r.1v(0)+"1",10)*1D(r.1q(2)))?(15.1s=u={1f:15.1s,t:e,p:t,s:n,c:o,f:"17"==1j e[t],n:i||t,r:s},u.1f&&(u.1f.1l=u),u):2h 0},i.1S=17(e){1b(19 t,n=15.1s,r=1e-6;n;)t=n.c*e+n.s,n.r?t=1g.3G(t):r>t&&t>-r&&(t=0),n.f?n.t[n.p](t):n.t[n.p]=t,n=n.1f},i.2n=17(e){19 t,n=15.2B,r=15.1s;1a(1d!=e[15.4D])15.2B=[];1m 1b(t=n.1c;--t>-1;)1d!=e[n[t]]&&n.2Q(t,1);1b(;r;)1d!=e[r.n]&&(r.1f&&(r.1f.1l=r.1l),r.1l?(r.1l.1f=r.1f,r.1l=1d):15.1s===r&&(15.1s=r.1f)),r=r.1f;18!1},i.7u=17(e,t){1b(19 n=15.1s;n;)(e[15.4D]||1d!=n.n&&e[n.n.1t(15.4D+"2f").1J("")])&&(n.r=t),n=n.1f},O.5z=17(e,t){19 n,r,i,s,o,u=t.1s;1a("5D"===e){1b(;u;){1b(o=u.1f,r=i;r&&r.2s>u.2s;)r=r.1f;(u.1l=r?r.1l:s)?u.1l.1f=u:i=u,(u.1f=r)?r.1l=u:s=u,u=o}u=t.1s=i}1b(;u;)u.4J&&"17"==1j u.t[e]&&u.t[e]()&&(n=!0),u=u.1f;18 n},W.6Q=17(e){1b(19 t=e.1c;--t>-1;)e[t].3w===W.3w&&(P[(1h e[t]).4D]=e[t]);18!0},v.2D=17(e){1a(!(e&&e.7m&&e.7o&&e.3w))6l"aH 2D au.";19 t,n=e.7m,r=e.5E||0,i=e.as,s={7o:"6V",4h:"1S",4f:"2n",3G:"7u",af:"5D"},o=m("4S."+n.1v(0).4Z()+n.1q(1)+"8u",17(){W.1W(15,n,r),15.2B=i||[]},e.ag===!0),u=o.1y=1h W(n);u.2K=o,o.3w=e.3w;1b(t 1u s)"17"==1j e[t]&&(u[s[t]]=e[t]);18 o.3V=e.3V,W.6Q([o]),o},n=e.37){1b(r=0;n.1c>r;r++)n[r]();1b(i 1u p)p[i].7A||e.6x.7z("ah ae ad aa: 4Q.4R."+i)}o=!1}})(1Q);(1Q.37||(1Q.37=[])).2d(17(){"4V 4U";1Q.3u("ab",["5C.8H","5C.7y","5f"],17(e,t,n){19 r=17(e){t.1W(15,e),15.2J={},15.4H=15.1p.4H===!0,15.2j=15.1p.2j===!0,15.4K=!0,15.33=15.1p.5A;19 n,r,i=15.1p;1b(r 1u i)n=i[r],o(n)&&-1!==n.1J("").1k("{4B}")&&(i[r]=15.5l(n));o(i.3J)&&15.1U(i.3J,0,i.ac,i.ai)},i=1e-10,s=n.4s.7p,o=n.4s.7E,u=[],a=1Q.3u.77,f=17(e){19 t,n={};1b(t 1u e)n[t]=e[t];18 n},l=17(e,t,n,r){e.1o.5N(e.1i),t&&t.35(r||e.1o,n||u)},c=u.6K,h=r.1y=1h t;18 r.3V="1.11.8",h.2K=r,h.4f().1O=!1,h.3Q=17(e,t,r,i){19 s=r.5j&&a.69||n;18 t?15.1U(1h s(e,t,r),i):15.4h(e,r,i)},h.66=17(e,t,r,i){18 15.1U((r.5j&&a.69||n).66(e,t,r),i)},h.6b=17(e,t,r,i,s){19 o=i.5j&&a.69||n;18 t?15.1U(o.6b(e,t,r,i),s):15.4h(e,i,s)},h.6u=17(e,t,i,o,u,a,l,h){19 p,d=1h r({49:a,6a:l,6s:h,2j:15.2j});1b("1L"==1j e&&(e=n.3I(e)||e),s(e)&&(e=c.1W(e,0)),o=o||0,p=0;e.1c>p;p++)i.30&&(i.30=f(i.30)),d.3Q(e[p],t,f(i),p*o);18 15.1U(d,u)},h.ao=17(e,t,n,r,i,s,o,u){18 n.1Y=0!=n.1Y,n.4w=!0,15.6u(e,t,n,r,i,s,o,u)},h.an=17(e,t,n,r,i,s,o,u,a){18 r.30=n,r.1Y=0!=r.1Y&&0!=n.1Y,15.6u(e,t,r,i,s,o,u,a)},h.1W=17(e,t,r,i){18 15.1U(n.6o(0,e,t,r),i)},h.4h=17(e,t,r){18 r=15.3h(r,0,!0),1d==t.1Y&&(t.1Y=r===15.1n&&!15.1B),15.1U(1h n(e,0,t),r)},r.ak=17(e,t){e=e||{},1d==e.2j&&(e.2j=!0);19 i,s,o=1h r(e),u=o.1o;1b(1d==t&&(t=!0),u.3K(o,!0),o.1i=0,o.1z=o.1n=o.1H=u.1n,i=u.26;i;)s=i.1f,t&&i 2b n&&i.2x===i.1p.49||o.1U(i,i.1i-i.2L),i=s;18 u.1U(o,0),o},h.1U=17(i,s,u,a){19 f,l,c,h,p,d;1a("2y"!=1j s&&(s=15.3h(s,0,!0,i)),!(i 2b e)){1a(i 2b 3N||i&&i.2d&&o(i)){1b(u=u||"al",a=a||0,f=s,l=i.1c,c=0;l>c;c++)o(h=i[c])&&(h=1h r({3J:h})),15.1U(h,f),"1L"!=1j h&&"17"!=1j h&&("am"===u?f=h.1i+h.23()/h.1x:"aN"===u&&(h.1i-=h.4x())),f+=a;18 15.3c(!0)}1a("1L"==1j i)18 15.7x(i,s);1a("17"!=1j i)6l"7e 1U "+i+" 93 8Y 21; 3D 94 8K a 6R, 21, 17, 8X 1L.";i=n.6o(0,i)}1a(t.1y.1U.1W(15,i,s),(15.1O||15.1n===15.1C)&&!15.1B&&15.1C<15.2C())1b(p=15,d=p.3H()>i.1i;p.1o;)d&&p.1o.2j?p.2Z(p.1H,!0):p.1O&&p.1N(!0,!1),p=p.1o;18 15},h.5n=17(t){1a(t 2b e)18 15.3K(t,!1);1a(t 2b 3N||t&&t.2d&&o(t)){1b(19 n=t.1c;--n>-1;)15.5n(t[n]);18 15}18"1L"==1j t?15.7n(t):15.4f(1d,t)},h.3K=17(e,n){t.1y.3K.1W(15,e,n);19 r=15.3l;18 r?15.1n>r.1i+r.2i/r.1x&&(15.1n=15.2C(),15.1H=15.2i):15.1n=15.1H=15.1C=15.2i=0,15},h.92=17(e,t){18 15.1U(e,15.3h(1d,t,!0,e))},h.7w=h.9t=17(e,t,n,r){18 15.1U(e,t||0,n,r)},h.9m=17(e,t,n,r){18 15.1U(e,15.3h(1d,t,!0,e),n,r)},h.7x=17(e,t){18 15.2J[e]=15.3h(t),15},h.9l=17(e,t,n,r){18 15.1W(l,["{4B}",t,n,r],15,e)},h.7n=17(e){18 3E 15.2J[e],15},h.9j=17(e){18 1d!=15.2J[e]?15.2J[e]:-1},h.3h=17(t,n,r,i){19 s;1a(i 2b e&&i.21===15)15.5n(i);1m 1a(i&&(i 2b 3N||i.2d&&o(i)))1b(s=i.1c;--s>-1;)i[s]2b e&&i[s].21===15&&15.5n(i[s]);1a("1L"==1j n)18 15.3h(n,r&&"2y"==1j t&&1d==15.2J[n]?t-15.2C():0,r);1a(n=n||0,"1L"!=1j t||!6d(t)&&1d==15.2J[t])1d==t&&(t=15.2C());1m{1a(s=t.1k("="),-1===s)18 1d==15.2J[t]?r?15.2J[t]=15.2C()+n:n:15.2J[t]+n;n=3v(t.1v(s-1)+"1",10)*1D(t.1q(s+1)),t=s>1?15.3h(t.1q(0,s-1),0,r):15.2C()}18 1D(t)+n},h.4b=17(e,t){18 15.2Z("2y"==1j e?e:15.3h(e),t!==!1)},h.9n=17(){18 15.3e(!0)},h.9o=17(e,t){18 15.73(e,t)},h.9s=17(e,t){18 15.5N(e,t)},h.1E=17(e,t,n){15.1O&&15.1N(!0,!1);19 r,s,o,a,f,l=15.2r?15.23():15.2i,c=15.1n,h=15.1i,p=15.1x,d=15.1B;1a(e>=l?(15.1H=15.1n=l,15.2M||15.5I()||(s=!0,a="49",0===15.1C&&(0===e||0>15.1z||15.1z===i)&&15.1z!==e&&15.26&&(f=!0,15.1z>i&&(a="4i"))),15.1z=15.1C||!t||e||15.1z===e?e:i,e=l+1e-4):1e-7>e?(15.1H=15.1n=0,(0!==c||0===15.1C&&15.1z!==i&&(15.1z>0||0>e&&15.1z>=0))&&(a="4i",s=15.2M),0>e?(15.2a=!1,0===15.1C&&15.1z>=0&&15.26&&(f=!0),15.1z=e):(15.1z=15.1C||!t||e||15.1z===e?e:i,e=0,15.2z||(f=!0))):15.1H=15.1n=15.1z=e,15.1n!==c&&15.26||n||f){1a(15.2z||(15.2z=!0),15.2a||!15.1B&&15.1n!==c&&e>0&&(15.2a=!0),0===c&&15.1p.4E&&0!==15.1n&&(t||15.1p.4E.35(15.1p.5P||15,15.1p.61||u)),15.1n>=c)1b(r=15.26;r&&(o=r.1f,!15.1B||d);)(r.2a||r.1i<=15.1n&&!r.1B&&!r.1O)&&(r.2M?r.1E((r.2r?r.23():r.2i)-(e-r.1i)*r.1x,t,n):r.1E((e-r.1i)*r.1x,t,n)),r=o;1m 1b(r=15.3l;r&&(o=r.1l,!15.1B||d);)(r.2a||c>=r.1i&&!r.1B&&!r.1O)&&(r.2M?r.1E((r.2r?r.23():r.2i)-(e-r.1i)*r.1x,t,n):r.1E((e-r.1i)*r.1x,t,n)),r=o;15.33&&(t||15.33.35(15.1p.5T||15,15.1p.5U||u)),a&&(15.1O||(h===15.1i||p!==15.1x)&&(0===15.1n||l>=15.23())&&(s&&(15.1o.4H&&15.1N(!1,!1),15.2a=!1),!t&&15.1p[a]&&15.1p[a].35(15.1p[a+"5J"]||15,15.1p[a+"5Y"]||u)))}},h.5I=17(){1b(19 e=15.26;e;){1a(e.1B||e 2b r&&e.5I())18!0;e=e.1f}18!1},h.5s=17(e,t,r,i){i=i||-59;1b(19 s=[],o=15.26,u=0;o;)i>o.1i||(o 2b n?t!==!1&&(s[u++]=o):(r!==!1&&(s[u++]=o),e!==!1&&(s=s.43(o.5s(!0,t,r)),u=s.1c))),o=o.1f;18 s},h.40=17(e,t){1b(19 r=n.40(e),i=r.1c,s=[],o=0;--i>-1;)(r[i].21===15||t&&15.8B(r[i]))&&(s[o++]=r[i]);18 s},h.8B=17(e){1b(19 t=e.21;t;){1a(t===15)18!0;t=t.21}18!1},h.8p=17(e,t,n){n=n||0;1b(19 r,i=15.26,s=15.2J;i;)i.1i>=n&&(i.1i+=e),i=i.1f;1a(t)1b(r 1u s)s[r]>=n&&(s[r]+=e);18 15.3c(!0)},h.2n=17(e,t){1a(!e&&!t)18 15.1N(!1,!1);1b(19 n=t?15.40(t):15.5s(!0,!0,!1),r=n.1c,i=!1;--r>-1;)n[r].2n(e,t)&&(i=!0);18 i},h.9a=17(e){19 t=15.5s(!1,!0,!0),n=t.1c;1b(15.1n=15.1H=0;--n>-1;)t[n].1N(!1,!1);18 e!==!1&&(15.2J={}),15.3c(!0)},h.5u=17(){1b(19 e=15.26;e;)e.5u(),e=e.1f;18 15},h.1N=17(e,n){1a(e===15.1O)1b(19 r=15.26;r;)r.1N(e,!0),r=r.1f;18 t.1y.1N.1W(15,e,n)},h.2C=17(e){18 2m.1c?(0!==15.2C()&&0!==e&&15.6q(15.1C/e),15):(15.2r&&15.23(),15.1C)},h.23=17(e){1a(!2m.1c){1a(15.2r){1b(19 t,n,r=0,i=15.3l,s=9b;i;)t=i.1l,i.2r&&i.23(),i.1i>s&&15.4K&&!i.1B?15.1U(i,i.1i-i.2L):s=i.1i,0>i.1i&&!i.1B&&(r-=i.1i,15.1o.2j&&(15.1i+=i.1i/15.1x),15.8p(-i.1i,!1,-59),s=0),n=i.1i+i.2i/i.1x,n>r&&(r=n),i=t;15.1C=15.2i=r,15.2r=!1}18 15.2i}18 0!==15.23()&&0!==e&&15.6q(15.2i/e),15},h.9d=17(){1b(19 t=15.1o;t.1o;)t=t.1o;18 t===e.7P},h.3H=17(){18 15.1B?15.1H:(15.1o.3H()-15.1i)*15.1x},r},!0)}),1Q.3u&&1Q.37.4q()();(1Q.37||(1Q.37=[])).2d(17(){"4V 4U";1Q.3u("2o.7Y",["2o.8h"],17(e){19 t,n,r,i=1Q.5Z||1Q,s=i.4Q.4R,o=2*1g.4o,u=1g.4o/2,a=s.8k,f=17(t,n){19 r=a("2o."+t,17(){},!0),i=r.1y=1h e;18 i.2K=r,i.2w=n,r},l=e.8l||17(){},c=17(e,t,n,r){19 i=a("2o."+e,{6c:1h t,5k:1h n,5m:1h r},!0);18 l(i,e),i},h=17(e,t,n){15.t=e,15.v=t,n&&(15.5w=n,n.5y=15,15.c=n.v-t,15.8v=n.t-e)},p=17(t,n){19 r=a("2o."+t,17(e){15.1T=e||0===e?e:1.aO,15.2q=1.cW*15.1T},!0),i=r.1y=1h e;18 i.2K=r,i.2w=n,i.3o=17(e){18 1h r(e)},r},d=c("7Y",p("cv",17(e){18(e-=1)*e*((15.1T+1)*e+15.1T)+1}),p("cr",17(e){18 e*e*((15.1T+1)*e-15.1T)}),p("co",17(e){18 1>(e*=2)?.5*e*e*((15.2q+1)*e-15.2q):.5*((e-=2)*e*((15.2q+1)*e+15.2q)+2)})),v=a("2o.6w",17(e,t,n){t=t||0===t?t:.7,1d==e?e=.7:e>1&&(e=1),15.89=1!==e?t:0,15.1T=(1-e)/2,15.2q=e,15.3f=15.1T+15.2q,15.3s=n===!0},!0),m=v.1y=1h e;18 m.2K=v,m.2w=17(e){19 t=e+(.5-e)*15.89;18 15.1T>e?15.3s?1-(e=1-e/15.1T)*e:t-(e=1-e/15.1T)*e*e*e*t:e>15.3f?15.3s?1-(e=(e-15.3f)/15.1T)*e:t+(e-t)*(e=(e-15.3f)/15.1T)*e*e*e:15.3s?1:t},v.3z=1h v(.7,.7),m.3o=v.3o=17(e,t,n){18 1h v(e,t,n)},t=a("2o.87",17(e){e=e||1,15.1T=1/e,15.2q=e+1},!0),m=t.1y=1h e,m.2K=t,m.2w=17(e){18 0>e?e=0:e>=1&&(e=.cG),(15.2q*e>>0)*15.1T},m.3o=t.3o=17(e){18 1h t(e)},n=a("2o.7f",17(t){t=t||{};1b(19 n,r,i,s,o,u,a=t.cE||"3t",f=[],l=0,c=0|(t.cI||20),p=c,d=t.cA!==!1,v=t.cJ===!0,m=t.8N 2b e?t.8N:1d,g="2y"==1j t.8R?.4*t.8R:.4;--p>-1;)n=d?1g.8A():1/c*p,r=m?m.2w(n):n,"3t"===a?i=g:"cK"===a?(s=1-n,i=s*s*g):"1u"===a?i=n*n*g:.5>n?(s=2*n,i=.5*s*s*g):(s=2*(1-n),i=.5*s*s*g),d?r+=1g.8A()*i-.5*i:p%2?r+=.5*i:r-=.5*i,v&&(r>1?r=1:0>r&&(r=0)),f[l++]={x:n,y:r};1b(f.cL(17(e,t){18 e.x-t.x}),u=1h h(1,1,1d),p=c;--p>-1;)o=f[p],u=1h h(o.x,o.y,u);15.1l=1h h(0,0,0!==u.t?u:u.5w)},!0),m=n.1y=1h e,m.2K=n,m.2w=17(e){19 t=15.1l;1a(e>t.t){1b(;t.5w&&e>=t.t;)t=t.5w;t=t.5y}1m 1b(;t.5y&&t.t>=e;)t=t.5y;18 15.1l=t,t.v+(e-t.t)/t.8v*t.c},m.3o=17(e){18 1h n(e)},n.3z=1h n,c("cH",f("cF",17(e){18 1/2.75>e?7.2I*e*e:2/2.75>e?7.2I*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.2I*(e-=2.25/2.75)*e+.6m:7.2I*(e-=2.6n/2.75)*e+.6p}),f("cM",17(e){18 1/2.75>(e=1-e)?1-7.2I*e*e:2/2.75>e?1-(7.2I*(e-=1.5/2.75)*e+.75):2.5/2.75>e?1-(7.2I*(e-=2.25/2.75)*e+.6m):1-(7.2I*(e-=2.6n/2.75)*e+.6p)}),f("cN",17(e){19 t=.5>e;18 e=t?1-2*e:2*e-1,e=1/2.75>e?7.2I*e*e:2/2.75>e?7.2I*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.2I*(e-=2.25/2.75)*e+.6m:7.2I*(e-=2.6n/2.75)*e+.6p,t?.5*(1-e):.5*e+.5})),c("cO",f("cP",17(e){18 1g.38(1-(e-=1)*e)}),f("cQ",17(e){18-(1g.38(1-e*e)-1)}),f("cD",17(e){18 1>(e*=2)?-.5*(1g.38(1-e*e)-1):.5*(1g.38(1-(e-=2)*e)+1)})),r=17(t,n,r){19 i=a("2o."+t,17(e,t){15.1T=e||1,15.2q=t||r,15.3f=15.2q/o*(1g.cp(1/15.1T)||0)},!0),s=i.1y=1h e;18 s.2K=i,s.2w=n,s.3o=17(e,t){18 1h i(e,t)},i},c("cn",r("cm",17(e){18 15.1T*1g.3p(2,-10*e)*1g.2k((e-15.3f)*o/15.2q)+1},.3),r("cj",17(e){18-(15.1T*1g.3p(2,10*(e-=1))*1g.2k((e-15.3f)*o/15.2q))},.3),r("ck",17(e){18 1>(e*=2)?-.5*15.1T*1g.3p(2,10*(e-=1))*1g.2k((e-15.3f)*o/15.2q):.5*15.1T*1g.3p(2,-10*(e-=1))*1g.2k((e-15.3f)*o/15.2q)+1},.45)),c("cl",f("cs",17(e){18 1-1g.3p(2,-10*e)}),f("cz",17(e){18 1g.3p(2,10*(e-1))-.cX}),f("cB",17(e){18 1>(e*=2)?.5*1g.3p(2,10*(e-1)):.5*(2-1g.3p(2,-10*(e-1)))})),c("cy",f("cx",17(e){18 1g.2k(e*u)}),f("cu",17(e){18-1g.2E(e*u)+1}),f("cw",17(e){18-.5*(1g.2E(1g.4o*e)-1)})),a("2o.dg",{df:17(t){18 e.7C[t]}},!0),l(i.6w,"6w","3z,"),l(n,"7f","3z,"),l(t,"87","3z,"),d},!0)}),1Q.3u&&1Q.37.4q()();(1Q.37||(1Q.37=[])).2d(17(){"4V 4U";1Q.3u("4S.dl",["4S.80","5f"],17(e,t){19 n,r,i,s,o=17(){e.1W(15,"4P"),15.2B.1c=0,15.1S=o.1y.1S},u={},a=o.1y=1h e("4P");a.2K=o,o.3V="1.11.8",o.3w=2,o.81=0,o.8w="cY",a="2c",o.6E={4z:a,7G:a,7F:a,4A:a,3k:a,3y:a,dk:a,6B:a,6U:a,3b:a,dd:""};19 f,l,c,h,p,d,v=/(?:\\d|\\-\\d|\\.\\d|\\-\\.\\d)+/g,m=/(?:\\d|\\-\\d|\\.\\d|\\-\\.\\d|\\+=\\d|\\-=\\d|\\+=.\\d|\\-=\\.\\d)+/g,g=/(?:\\+=|\\-=|\\-|\\b)[\\d\\-\\.]+[a-d7-dn-9]*(?:%|\\b)/3M,y=/[^\\d\\-\\.]/g,b=/(?:\\d|\\-|\\+|=|#|\\.)*/g,w=/1Z *= *([^)]*)/,E=/1Z:([^;]*)/,S=/3B\\(1Z *=.+?\\)/i,x=/^(5h|6y)/,T=/([A-Z])/g,N=/-([a-z])/3M,C=/(^(?:8t\\(\\"|8t\\())|(?:(\\"\\))$|\\)$)/3M,k=17(e,t){18 t.4Z()},L=/(?:6i|7T|7H)/i,A=/(8c|8d|8n|8m)=[\\d\\-\\.e]+/3M,O=/82\\:5Q\\.5S\\.5V\\(.+?\\)/i,M=/,(?=[^\\)]*(?:\\(|$))/3M,2f=1g.4o/36,D=36/1g.4o,P={},H=6h,B=H.6e("74"),j=H.6e("d2"),F=o.4s={dm:u},I=dc.cC,q=17(){19 e,t=I.1k("ch"),n=H.6e("74");18 c=-1!==I.1k("bj")&&-1===I.1k("bk")&&(-1===t||1D(I.1q(t+8,1))>3),p=c&&6>1D(I.1q(I.1k("bl/")+8,1)),h=-1!==I.1k("bh"),/bg ([0-9]{1,}[\\.0-9]{0,})/.bc(I)&&(d=1r(46.$1)),n.bd="<a 1w=\'4z:be;1Z:.55;\'>a</a>",e=n.bf("a")[0],e?/^0.55/.2P(e.1w.1Z):!1}(),R=17(e){18 w.2P("1L"==1j e?e:(e.2X?e.2X.2l:e.1w.2l)||"")?1r(46.$1)/22:1},U=17(e){1Q.6x&&6x.7z(e)},z="",W="",X=17(e,t){t=t||B;19 n,r,i=t.1w;1a(2h 0!==i[e])18 e;1b(e=e.1v(0).4Z()+e.1q(1),n=["O","bn","5t","bv","bw"],r=5;--r>-1&&2h 0===i[n[r]+e];);18 r>=0?(W=3===r?"5t":n[r],z="-"+W.6P()+"-",W+e):1d},V=H.7v?H.7v.bx:17(){},$=o.bu=17(e,t,n,r,i){19 s;18 q||"1Z"!==t?(!r&&e.1w[t]?s=e.1w[t]:(n=n||V(e,1d))?s=n[t]||n.42(t)||n.42(t.1I(T,"-$1").6P()):e.2X&&(s=e.2X[t]),1d==i||s&&"3t"!==s&&"2t"!==s&&"2t 2t"!==s?s:i):R(e)},J=F.bs=17(e,n,r,i,s){1a("2c"===i||!i)18 r;1a("2t"===i||!r)18 0;19 u,a,f,l=L.2P(n),c=e,h=B.1w,p=0>r;1a(p&&(r=-r),"%"===i&&-1!==n.1k("3X"))u=r/22*(l?e.bo:e.bp);1m{1a(h.3d="3X:0 5x 7i;4m:"+$(e,"4m")+";bq-3y:0;","%"!==i&&c.7r)h[l?"84":"6X"]=r+i;1m{1a(c=e.ci||H.br,a=c.6g,f=t.6f.3F,a&&l&&a.34===f)18 a.3k*r/22;h[l?"3k":"3y"]=r+i}c.7r(B),u=1r(B[l?"4N":"4M"]),c.aV(B),l&&"%"===i&&o.aW!==!1&&(a=c.6g=c.6g||{},a.34=f,a.3k=22*(u/r)),0!==u||s||(u=J(e,n,r,i,!0))}18 p?-u:u},K=F.aX=17(e,t,n){1a("83"!==$(e,"4m",n))18 0;19 r="4A"===t?"6i":"7N",i=$(e,"6U"+r,n);18 e["aY"+r]-(J(e,t,1r(i),i.1I(b,""))||0)},Q=17(e,t){19 n,r,i={};1a(t=t||V(e,1d))1a(n=t.1c)1b(;--n>-1;)i[t[n].1I(N,k)]=t.42(t[n]);1m 1b(n 1u t)i[n]=t[n];1m 1a(t=e.2X||e.1w)1b(n 1u t)"1L"==1j n&&2h 0===i[n]&&(i[n.1I(N,k)]=t[n]);18 q||(i.1Z=R(e)),r=4l(e,t,!1),i.1K=r.1K,i.1R=r.1R,i.28=r.28,i.2g=r.2g,i.x=r.x,i.y=r.y,39&&(i.z=r.z,i.1P=r.1P,i.1V=r.1V,i.2W=r.2W),i.7R&&3E i.7R,i},G=17(e,t,n,r,i){19 s,o,u,a={},f=e.1w;1b(o 1u n)"3d"!==o&&"1c"!==o&&6d(o)&&(t[o]!==(s=n[o])||i&&i[o])&&-1===o.1k("aU")&&("2y"==1j s||"1L"==1j s)&&(a[o]="2t"!==s||"4A"!==o&&"4z"!==o?""!==s&&"2t"!==s&&"3t"!==s||"1L"!=1j t[o]||""===t[o].1I(y,"")?s:0:K(e,o),2h 0!==f[o]&&(u=1h ct(f,o,f[o],u)));1a(r)1b(o 1u r)"3a"!==o&&(a[o]=r[o]);18{57:a,4e:u}},Y={3k:["6i","7T"],3y:["7N","aP"]},Z=["7K","7S","7B","7U"],3L=17(e,t,n){19 r=1r("3k"===t?e.4N:e.4M),i=Y[t],s=i.1c;1b(n=n||V(e,1d);--s>-1;)r-=1r($(e,"6B"+i[s],n,!0))||0,r-=1r($(e,"3X"+i[s]+"7H",n,!0))||0;18 r},3g=17(e,t){(1d==e||""===e||"2t"===e||"2t 2t"===e)&&(e="0 0");19 n=e.1t(" "),r=-1!==e.1k("4A")?"0%":-1!==e.1k("7G")?"22%":n[0],i=-1!==e.1k("4z")?"0%":-1!==e.1k("7F")?"22%":n[1];18 1d==i?i="0":"7l"===i&&(i="50%"),("7l"===r||6d(1r(r))&&-1===(r+"").1k("="))&&(r="50%"),t&&(t.8o=-1!==r.1k("%"),t.8r=-1!==i.1k("%"),t.aQ="="===r.1v(1),t.aR="="===i.1v(1),t.52=1r(r.1I(y,"")),t.5R=1r(i.1I(y,""))),r+" "+i+(n.1c>2?" "+n[2]:"")},3q=17(e,t){18"1L"==1j e&&"="===e.1v(1)?3v(e.1v(0)+"1",10)*1r(e.1q(2)):1r(e)-1r(t)},2A=17(e,t){18 1d==e?t:"1L"==1j e&&"="===e.1v(1)?3v(e.1v(0)+"1",10)*1D(e.1q(2))+t:1r(e)},3D=17(e,t,n,r){19 i,s,o,u,a=1e-6;18 1d==e?u=t:"2y"==1j e?u=e:(i=68,s=e.1t("2f"),o=1D(s[0].1I(y,""))*(-1===e.1k("aS")?1:D)-("="===e.1v(1)?0:t),s.1c&&(r&&(r[n]=t+o),-1!==e.1k("aZ")&&(o%=i,o!==o%(i/2)&&(o=0>o?o+i:o-i)),-1!==e.1k("b0")&&0>o?o=(o+59*i)%i-(0|o/i)*i:-1!==e.1k("b7")&&o>0&&(o=(o-59*i)%i-(0|o/i)*i)),u=t+o),a>u&&u>-a&&(u=0),u},3x={b9:[0,1F,1F],b6:[0,1F,0],b5:[58,58,58],7I:[0,0,0],b1:[2N,0,0],b2:[0,2N,2N],b3:[0,0,1F],b4:[0,0,2N],by:[1F,1F,1F],bz:[1F,0,1F],c3:[2N,2N,0],c4:[1F,1F,0],c5:[1F,c2,0],c1:[2N,2N,2N],bX:[2N,0,2N],bY:[0,2N,0],7i:[1F,0,0],c0:[1F,58,c7],ce:[0,1F,1F],4g:[1F,1F,1F,0]},5a=17(e,t,n){18 e=0>e?e+1:e>1?e-1:e,0|1F*(1>6*e?t+6*(n-t)*e:.5>e?n:2>3*e?t+6*(n-t)*(2/3-e):t)+.5},5i=17(e){19 t,n,r,i,s,o;18 e&&""!==e?"2y"==1j e?[e>>16,1F&e>>8,1F&e]:(","===e.1v(e.1c-1)&&(e=e.1q(0,e.1c-1)),3x[e]?3x[e]:"#"===e.1v(0)?(4===e.1c&&(t=e.1v(1),n=e.1v(2),r=e.1v(3),e="#"+t+t+n+n+r+r),e=3v(e.1q(1),16),[e>>16,1F&e>>8,1F&e]):"6y"===e.1q(0,3)?(e=e.2G(v),i=1D(e[0])%68/68,s=1D(e[1])/22,o=1D(e[2])/22,n=.5>=o?o*(s+1):o+s-o*s,t=2*o-n,e.1c>3&&(e[3]=1D(e[3])),e[0]=5a(i+1/3,t,n),e[1]=5a(i,t,n),e[2]=5a(i-1/3,t,n),e):(e=e.2G(v)||3x.4g,e[0]=1D(e[0]),e[1]=1D(e[1]),e[2]=1D(e[2]),e.1c>3&&(e[3]=1D(e[3])),e)):3x.7I},at="(?:\\\\b(?:(?:5h|6Z|6y|cc)\\\\(.+?\\\\))|\\\\B#.+?\\\\b";1b(a 1u 3x)at+="|"+a+"\\\\b";at=46(at+")","3M");19 6H=17(e,t,n,r){1a(1d==e)18 17(e){18 e};19 i,s=t?(e.2G(at)||[""])[0]:"",o=e.1t(s).1J("").2G(g)||[],u=e.1q(0,e.1k(o[0])),a=")"===e.1v(e.1c-1)?")":"",f=-1!==e.1k(" ")?" ":",",l=o.1c,c=l>0?o[0].1I(v,""):"";18 l?i=t?17(e){19 t,h,p,d;1a("2y"==1j e)e+=c;1m 1a(r&&M.2P(e)){1b(d=e.1I(M,"|").1t("|"),p=0;d.1c>p;p++)d[p]=i(d[p]);18 d.1J(",")}1a(t=(e.2G(at)||[s])[0],h=e.1t(t).1J("").2G(g)||[],p=h.1c,l>p--)1b(;l>++p;)h[p]=n?h[0|(p-1)/2]:o[p];18 u+h.1J(f)+f+t+a+(-1!==e.1k("6Y")?" 6Y":"")}:17(e){19 t,s,h;1a("2y"==1j e)e+=c;1m 1a(r&&M.2P(e)){1b(s=e.1I(M,"|").1t("|"),h=0;s.1c>h;h++)s[h]=i(s[h]);18 s.1J(",")}1a(t=e.2G(g)||[],h=t.1c,l>h--)1b(;l>++h;)t[h]=n?t[0|(h-1)/2]:o[h];18 u+t.1J(f)+a}:17(e){18 e}},5g=17(e){18 e=e.1t(","),17(t,n,r,i,s,o,u){19 a,f=(n+"").1t(" ");1b(u={},a=0;4>a;a++)u[e[a]]=f[a]=f[a]||f[(a-1)/2>>0];18 i.2O(t,u,s,o)}},ct=(F.c8=17(e){15.2D.1S(e);1b(19 t,n,r,i,s=15.1A,o=s.7W,u=s.4e,a=1e-6;u;)t=o[u.v],u.r?t=1g.3G(t):a>t&&t>-a&&(t=0),u.t[u.p]=t,u=u.1f;1a(s.8F&&(s.8F.1K=o.1K),1===e)1b(u=s.4e;u;){1a(n=u.t,n.2p){1a(1===n.2p){1b(i=n.1X+n.s+n.4a,r=1;n.l>r;r++)i+=n["3i"+r]+n["2R"+(r+1)];n.e=i}}1m n.e=n.s+n.1X;u=u.1f}},17(e,t,n,r,i){15.t=e,15.p=t,15.v=n,15.r=i,r&&(r.1l=15,15.1f=r)}),27=(F.c9=17(e,t,n,r,i,s){19 o,u,a,f,l,c=r,h={},p={},d=n.3r,v=P;1b(n.3r=1d,P=t,r=l=n.2O(e,t,r,i),P=v,s&&(n.3r=d,c&&(c.1l=1d,c.1l&&(c.1l.1f=1d)));r&&r!==c;){1a(1>=r.2p&&(u=r.p,p[u]=r.s+r.c,h[u]=r.s,s||(f=1h ct(r,"s",u,f,r.r),r.c=0),1===r.2p))1b(o=r.l;--o>0;)a="3i"+o,u=r.p+"2f"+a,p[u]=r.1A[a],h[u]=r[a],s||(f=1h ct(r,a,u,f,r.56[a]));r=r.1f}18{7W:h,ca:p,4e:f,4j:l}},F.cb=17(e,t,r,i,o,u,a,f,l,c,h){15.t=e,15.p=t,15.s=r,15.c=i,15.n=a||t,e 2b 27||s.2d(15.n),15.r=f,15.2p=u||0,l&&(15.2s=l,n=!0),15.b=2h 0===c?r:c,15.e=2h 0===h?r+i:h,o&&(15.1f=o,o.1l=15)}),4j=o.3Y=17(e,t,n,r,i,s,o,u,a,l){n=n||s||"",o=1h 27(e,t,0,0,o,l?2:1,1d,!1,u,n,r),r+="";19 c,h,p,d,g,y,b,w,E,S,T,N,C=n.1t(", ").1J(",").1t(" "),k=r.1t(", ").1J(",").1t(" "),L=C.1c,A=f!==!1;1b((-1!==r.1k(",")||-1!==n.1k(","))&&(C=C.1J(" ").1I(M,", ").1t(" "),k=k.1J(" ").1I(M,", ").1t(" "),L=C.1c),L!==k.1c&&(C=(s||"").1t(" "),L=C.1c),o.2D=a,o.1S=l,c=0;L>c;c++)1a(d=C[c],g=k[c],w=1r(d),w||0===w)o.3S("",w,3q(g,w),g.1I(m,""),A&&-1!==g.1k("2c"),!0);1m 1a(i&&("#"===d.1v(0)||3x[d]||x.2P(d)))N=","===g.1v(g.1c-1)?"),":")",d=5i(d),g=5i(g),E=d.1c+g.1c>6,E&&!q&&0===g[3]?(o["2R"+o.l]+=o.l?" 4g":"4g",o.e=o.e.1t(k[c]).1J("4g")):(q||(E=!1),o.3S(E?"6Z(":"5h(",d[0],g[0]-d[0],",",!0,!0).3S("",d[1],g[1]-d[1],",",!0).3S("",d[2],g[2]-d[2],E?",":N,!0),E&&(d=4>d.1c?1:d[3],o.3S("",d,(4>g.1c?1:g[3])-d,N,!1)));1m 1a(y=d.2G(v)){1a(b=g.2G(m),!b||b.1c!==y.1c)18 o;1b(p=0,h=0;y.1c>h;h++)T=y[h],S=d.1k(T,p),o.3S(d.1q(p,S-p),1D(T),3q(b[h],T),"",A&&"2c"===d.1q(S+T.1c,2),0===h),p=S+T.1c;o["2R"+o.l]+=d.1q(p)}1m o["2R"+o.l]+=o.l?" "+d:d;1a(-1!==r.1k("=")&&o.1A){1b(N=o.1X+o.1A.s,c=1;o.l>c;c++)N+=o["2R"+c]+o.1A["3i"+c];o.e=N+o["2R"+c]}18 o.l||(o.2p=-1,o.1X=o.e),o.3C||o},2u=9;1b(a=27.1y,a.l=a.2s=0;--2u>0;)a["3i"+2u]=0,a["2R"+2u]="";a.1X="",a.1f=a.1l=a.3C=a.1A=a.2D=a.1S=a.56=1d,a.3S=17(e,t,n,r,i,s){19 o=15,u=o.l;18 o["2R"+u]+=s&&u?" "+e:e||"",n||0===u||o.2D?(o.l++,o.2p=o.1S?2:1,o["2R"+o.l]=r||"",u>0?(o.1A["3i"+u]=t+n,o.56["3i"+u]=i,o["3i"+u]=t,o.2D||(o.3C=1h 27(o,"3i"+u,t,n,o.3C||o,0,o.n,i,o.2s),o.3C.1X=0),o):(o.1A={s:t+n},o.56={},o.s=t,o.c=n,o.r=i,o)):(o["2R"+u]+=t+(r||""),o)};19 5O=17(e,t){t=t||{},15.p=t.2V?X(e)||e:e,u[e]=u[15.p]=15,15.2U=t.4v||6H(t.2v,t.4c,t.bW,t.3W),t.24&&(15.2O=t.24),15.8T=t.4c,15.3W=t.3W,15.5b=t.5b,15.3Z=t.2v,15.2s=t.5E||0},1G=F.bV=17(e,t,n){"3U"!=1j t&&(t={24:n});19 r,i,s=e.1t(","),o=t.2v;1b(n=n||[o],r=0;s.1c>r;r++)t.2V=0===r&&t.2V,t.2v=n[r]||o,i=1h 5O(s[r],t)},7a=17(e){1a(!u[e]){19 t=e.1v(0).4Z()+e.1q(1)+"8u";1G(e,{24:17(e,n,r,i,s,o,a){19 f=(1Q.5Z||1Q).4Q.4R.4S[t];18 f?(f.bG(),u[r].2O(e,n,r,i,s,o,a)):(U("bH: "+t+" bI bJ 8K bF."),s)}})}};a=5O.1y,a.3Y=17(e,t,n,r,i,s){19 o,u,a,f,l,c,h=15.5b;1a(15.3W&&(M.2P(n)||M.2P(t)?(u=t.1I(M,"|").1t("|"),a=n.1I(M,"|").1t("|")):h&&(u=[t],a=[n])),a){1b(f=a.1c>u.1c?a.1c:u.1c,o=0;f>o;o++)t=u[o]=u[o]||15.3Z,n=a[o]=a[o]||15.3Z,h&&(l=t.1k(h),c=n.1k(h),l!==c&&(n=-1===c?a:u,n[o]+=" "+h));t=u.1J(", "),n=a.1J(", ")}18 4j(e,15.p,t,n,15.8T,15.3Z,r,15.2s,i,s)},a.2O=17(e,t,n,r,s,o){18 15.3Y(e.1w,15.2U($(e,15.p,i,!1,15.3Z)),15.2U(t),s,o)},o.bE=17(e,t,n){1G(e,{24:17(e,r,i,s,o,u){19 a=1h 27(e,i,0,0,o,2,i,!1,n);18 a.2D=u,a.1S=t(e,r,s.2Y,i),a},5E:n})};19 6O="28,2g,2W,x,y,z,1R,32,1K,1P,1V,3b".1t(","),bt=X("3R"),8O=z+"3R",5q=X("4G"),39=1d!==X("3b"),5F=F.bB=17(){15.32=0},4l=F.bC=17(e,t,n,r){1a(e.3T&&n&&!r)18 e.3T;19 i,s,u,a,f,l,c,h,p,d,v,m,g,y=n?e.3T||1h 5F:1h 5F,b=0>y.28,w=2e-5,E=4X,S=bD.99,x=S*2f,T=39?1r($(e,5q,t,!1,"0 0 0").1t(" ")[2])||y.2S||0:0;1b(bt?i=$(e,8O,t,!0):e.2X&&(i=e.2X.2l.2G(A),i=i&&4===i.1c?[i[0].1q(4),1D(i[2].1q(4)),1D(i[1].1q(4)),i[3].1q(4),y.x||0,y.y||0].1J(","):""),s=(i||"").2G(/(?:\\-|\\b)[\\d\\-\\.e]+\\b/3M)||[],u=s.1c;--u>-1;)a=1D(s[u]),s[u]=(f=a-(a|=0))?(0|f*E+(0>f?-.5:.5))/E+a:a;1a(16===s.1c){19 N=s[8],C=s[9],k=s[10],L=s[12],O=s[13],M=s[14];1a(y.2S&&(M=-y.2S,L=N*M-s[12],O=C*M-s[13],M=k*M+y.2S-s[14]),!n||r||1d==y.1P){19 P,H,B,j,F,I,q,R=s[0],U=s[1],z=s[2],W=s[3],X=s[4],V=s[5],J=s[6],K=s[7],Q=s[11],G=1g.4F(J,k),Y=-x>G||G>x;y.1P=G*D,G&&(j=1g.2E(-G),F=1g.2k(-G),P=X*j+N*F,H=V*j+C*F,B=J*j+k*F,N=X*-F+N*j,C=V*-F+C*j,k=J*-F+k*j,Q=K*-F+Q*j,X=P,V=H,J=B),G=1g.4F(N,R),y.1V=G*D,G&&(I=-x>G||G>x,j=1g.2E(-G),F=1g.2k(-G),P=R*j-N*F,H=U*j-C*F,B=z*j-k*F,C=U*F+C*j,k=z*F+k*j,Q=W*F+Q*j,R=P,U=H,z=B),G=1g.4F(U,V),y.1K=G*D,G&&(q=-x>G||G>x,j=1g.2E(-G),F=1g.2k(-G),R=R*j+X*F,H=U*j+V*F,V=U*-F+V*j,J=z*-F+J*j,U=H),q&&Y?y.1K=y.1P=0:q&&I?y.1K=y.1V=0:I&&Y&&(y.1V=y.1P=0),y.28=(0|1g.38(R*R+U*U)*E+.5)/E,y.2g=(0|1g.38(V*V+C*C)*E+.5)/E,y.2W=(0|1g.38(J*J+k*k)*E+.5)/E,y.1R=0,y.3b=Q?1/(0>Q?-Q:Q):0,y.x=L,y.y=O,y.z=M}}1m 1a(!(39&&!r&&s.1c&&y.x===s[4]&&y.y===s[5]&&(y.1P||y.1V)||2h 0!==y.x&&"3t"===$(e,"6S",t))){19 Z=s.1c>=6,3L=Z?s[0]:1,3g=s[1]||0,3q=s[2]||0,2A=Z?s[3]:1;y.x=s[4]||0,y.y=s[5]||0,l=1g.38(3L*3L+3g*3g),c=1g.38(2A*2A+3q*3q),h=3L||3g?1g.4F(3g,3L)*D:y.1K||0,p=3q||2A?1g.4F(3q,2A)*D+h:y.1R||0,d=l-1g.51(y.28||0),v=c-1g.51(y.2g||0),1g.51(p)>90&&bS>1g.51(p)&&(b?(l*=-1,p+=0>=h?36:-36,h+=0>=h?36:-36):(c*=-1,p+=0>=p?36:-36)),m=(h-y.1K)%36,g=(p-y.1R)%36,(2h 0===y.1R||d>w||-w>d||v>w||-w>v||m>-S&&S>m&&5X|m*E||g>-S&&S>g&&5X|g*E)&&(y.28=l,y.2g=c,y.1K=h,y.1R=p),39&&(y.1P=y.1V=y.z=0,y.3b=1r(o.81)||0,y.2W=1)}y.2S=T;1b(u 1u y)w>y[u]&&y[u]>-w&&(y[u]=0);18 n&&(e.3T=y),y},7q=17(e){19 t,n,r=15.1A,i=-r.1K*2f,s=i+r.1R*2f,o=4X,u=(0|1g.2E(i)*r.28*o)/o,a=(0|1g.2k(i)*r.28*o)/o,f=(0|1g.2k(s)*-r.2g*o)/o,l=(0|1g.2E(s)*r.2g*o)/o,c=15.t.1w,h=15.t.2X;1a(h){n=a,a=-f,f=-n,t=h.2l,c.2l="";19 p,v,m=15.t.4N,g=15.t.4M,y="83"!==h.4m,E="82:5Q.5S.5V(8c="+u+", 8d="+a+", 8n="+f+", 8m="+l,S=r.x,x=r.y;1a(1d!=r.52&&(p=(r.8o?.8q*m*r.52:r.52)-m/2,v=(r.8r?.8q*g*r.5R:r.5R)-g/2,S+=p-(p*u+v*a),x+=v-(p*f+v*l)),y?(p=m/2,v=g/2,E+=", 8e="+(p-(p*u+v*a)+S)+", 8g="+(v-(p*f+v*l)+x)+")"):E+=", bU=\'2t bR\')",c.2l=-1!==t.1k("5Q.5S.5V(")?t.1I(O,E):E+" "+t,(0===e||1===e)&&1===u&&0===a&&0===f&&1===l&&(y&&-1===E.1k("8e=0, 8g=0")||w.2P(t)&&22!==1r(46.$1)||-1===t.1k("bN("&&t.1k("bO"))&&c.6W("2l")),!y){19 T,N,C,k=8>d?1:-1;1b(p=r.53||0,v=r.5p||0,r.53=1g.3G((m-((0>u?-u:u)*m+(0>a?-a:a)*g))/2+S),r.5p=1g.3G((g-((0>l?-l:l)*g+(0>f?-f:f)*m))/2+x),2u=0;4>2u;2u++)N=Z[2u],T=h[N],n=-1!==T.1k("2c")?1r(T):J(15.t,N,1r(T),T.1I(b,""))||0,C=n!==r[N]?2>2u?-r.53:-r.5p:2>2u?p-r.53:v-r.5p,c[N]=(r[N]=1g.3G(n-C*(0===2u||2===2u?1:k)))+"2c"}}},5o=F.d3=17(){19 e,t,n,r,i,s,o,u,a,f,l,c,p,d,v,m,g,y,b,w,E,S,x,T=15.1A,N=15.t.1w,C=T.1K*2f,k=T.28,L=T.2g,A=T.2W,O=T.3b;1a(h){19 M=1e-4;M>k&&k>-M&&(k=A=2e-5),M>L&&L>-M&&(L=A=2e-5),!O||T.z||T.1P||T.1V||(O=0)}1a(C||T.1R)y=1g.2E(C),b=1g.2k(C),e=y,i=b,T.1R&&(C-=T.1R*2f,y=1g.2E(C),b=1g.2k(C),"bP"===T.4r&&(w=1g.bM(T.1R*2f),w=1g.38(1+w*w),y*=w,b*=w)),t=-b,s=y;1m{1a(!(T.1V||T.1P||1!==A||O))18 N[bt]="bQ("+T.x+"2c,"+T.y+"2c,"+T.z+"2c)"+(1!==k||1!==L?" 4y("+k+","+L+")":""),2h 0;e=s=1,t=i=0}l=1,n=r=o=u=a=f=c=p=d=0,v=O?-1/O:0,m=T.2S,g=4X,C=T.1V*2f,C&&(y=1g.2E(C),b=1g.2k(C),a=l*-b,p=v*-b,n=e*b,o=i*b,l*=y,v*=y,e*=y,i*=y),C=T.1P*2f,C&&(y=1g.2E(C),b=1g.2k(C),w=t*y+n*b,E=s*y+o*b,S=f*y+l*b,x=d*y+v*b,n=t*-b+n*y,o=s*-b+o*y,l=f*-b+l*y,v=d*-b+v*y,t=w,s=E,f=S,d=x),1!==A&&(n*=A,o*=A,l*=A,v*=A),1!==L&&(t*=L,s*=L,f*=L,d*=L),1!==k&&(e*=k,i*=k,a*=k,p*=k),m&&(c-=m,r=n*c,u=o*c,c=l*c+m),r=(w=(r+=T.x)-(r|=0))?(0|w*g+(0>w?-.5:.5))/g+r:r,u=(w=(u+=T.y)-(u|=0))?(0|w*g+(0>w?-.5:.5))/g+u:u,c=(w=(c+=T.z)-(c|=0))?(0|w*g+(0>w?-.5:.5))/g+c:c,N[bt]="bT("+[(0|e*g)/g,(0|i*g)/g,(0|a*g)/g,(0|p*g)/g,(0|t*g)/g,(0|s*g)/g,(0|f*g)/g,(0|d*g)/g,(0|n*g)/g,(0|o*g)/g,(0|l*g)/g,(0|v*g)/g,r,u,c,O?1+ -c/O:1].1J(",")+")"},7t=F.bL=17(e){19 t,n,r,i,s,o=15.1A,u=15.t,a=u.1w;18 o.1P||o.1V||o.z||o.44?(15.1S=5o,5o.1W(15,e),2h 0):(o.1K||o.1R?(t=o.1K*2f,n=t-o.1R*2f,r=4X,i=o.28*r,s=o.2g*r,a[bt]="8P("+(0|1g.2E(t)*i)/r+","+(0|1g.2k(t)*i)/r+","+(0|1g.2k(n)*-s)/r+","+(0|1g.2E(n)*s)/r+","+o.x+","+o.y+")"):a[bt]="8P("+o.28+",0,0,"+o.2g+","+o.x+","+o.y+")",2h 0)};1G("3R,4y,28,2g,2W,x,y,z,1K,1P,1V,6M,1R,32,6N,6G,6A,bK,4G,8U,8x,8M,44,4r",{24:17(e,t,n,r,s,u,a){1a(r.3r)18 s;19 f,l,c,h,p,d,v,m=r.3r=4l(e,i,!0,a.8M),g=e.1w,y=1e-6,b=6O.1c,w=a,E={};1a("1L"==1j w.3R&&bt)c=g.3d,g[bt]=w.3R,g.6S="bA",f=4l(e,1d,!1),g.3d=c;1m 1a("3U"==1j w){1a(f={28:2A(1d!=w.28?w.28:w.4y,m.28),2g:2A(1d!=w.2g?w.2g:w.4y,m.2g),2W:2A(w.2W,m.2W),x:2A(w.x,m.x),y:2A(w.y,m.y),z:2A(w.z,m.z),3b:2A(w.8U,m.3b)},v=w.8x,1d!=v)1a("3U"==1j v)1b(c 1u v)w[c]=v[c];1m w.1K=v;f.1K=3D("1K"1u w?w.1K:"6N"1u w?w.6N+"6F":"6M"1u w?w.6M:m.1K,m.1K,"1K",E),39&&(f.1P=3D("1P"1u w?w.1P:"6G"1u w?w.6G+"6F":m.1P||0,m.1P,"1P",E),f.1V=3D("1V"1u w?w.1V:"6A"1u w?w.6A+"6F":m.1V||0,m.1V,"1V",E)),f.1R=1d==w.1R?m.1R:3D(w.1R,m.1R),f.32=1d==w.32?m.32:3D(w.32,m.32),(l=f.32-m.32)&&(f.1R+=l,f.1K+=l)}1b(39&&1d!=w.44&&(m.44=w.44,d=!0),m.4r=w.4r||m.4r||o.8w,p=m.44||m.z||m.1P||m.1V||f.z||f.1P||f.1V||f.3b,p||1d==w.4y||(f.2W=1);--b>-1;)n=6O[b],h=f[n]-m[n],(h>y||-y>h||1d!=P[n])&&(d=!0,s=1h 27(m,n,m[n],h,s),n 1u E&&(s.e=E[n]),s.1X=0,s.2D=u,r.2B.2d(s.n));18 h=w.4G,(h||39&&p&&m.2S)&&(bt?(d=!0,n=5q,h=(h||$(e,n,i,!1,"50% 50%"))+"",s=1h 27(g,n,0,0,s,-1,"4G"),s.b=g[n],s.2D=u,39?(c=m.2S,h=h.1t(" "),m.2S=(h.1c>2&&(0===c||"1M"!==h[2])?1r(h[2]):c)||0,s.1X=s.e=g[n]=h[0]+" "+(h[1]||"50%")+" 1M",s=1h 27(m,"2S",0,0,s,-1,s.n),s.b=c,s.1X=s.e=m.2S):s.1X=s.e=g[n]=h):3g(h+"",m)),d&&(r.47=p||3===15.47?3:2),s},2V:!0}),1G("cd",{2v:"1M 1M 1M 1M #8i",2V:!0,4c:!0,3W:!0,5b:"6Y"}),1G("cg",{2v:"1M",24:17(e,t,n,s,o){t=15.2U(t);19 u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x=["cf","c6","bZ","b8"],T=e.1w;1b(v=1r(e.4N),m=1r(e.4M),u=t.1t(" "),a=0;x.1c>a;a++)15.p.1k("3X")&&(x[a]=X(x[a])),c=l=$(e,x[a],i,!1,"1M"),-1!==c.1k(" ")&&(l=c.1t(" "),c=l[0],l=l[1]),h=f=u[a],p=1r(c),y=c.1q((p+"").1c),b="="===h.1v(1),b?(d=3v(h.1v(0)+"1",10),h=h.1q(2),d*=1r(h),g=h.1q((d+"").1c-(0>d?1:0))||""):(d=1r(h),g=h.1q((d+"").1c)),""===g&&(g=r[n]||y),g!==y&&(w=J(e,"7Q",p,y),E=J(e,"aT",p,y),"%"===g?(c=22*(w/v)+"%",l=22*(E/m)+"%"):"4k"===g?(S=J(e,"7Q",1,"4k"),c=w/S+"4k",l=E/S+"4k"):(c=w+"2c",l=E+"2c"),b&&(h=1r(c)+d+g,f=1r(l)+d+g)),o=4j(T,x[a],c+" "+l,h+" "+f,!1,"1M",o);18 o},2V:!0,4v:6H("1M 1M 1M 1M",!1,!0)}),1G("ba",{2v:"0 0",24:17(e,t,n,r,s,o){19 u,a,f,l,c,h,p="bb-4m",v=i||V(e,1d),m=15.2U((v?d?v.42(p+"-x")+" "+v.42(p+"-y"):v.42(p):e.2X.bm+" "+e.2X.bi)||"0 0"),g=15.2U(t);1a(-1!==m.1k("%")!=(-1!==g.1k("%"))&&(h=$(e,"d1").1I(C,""),h&&"3t"!==h)){1b(u=m.1t(" "),a=g.1t(" "),j.d9("d5",h),f=2;--f>-1;)m=u[f],l=-1!==m.1k("%"),l!==(-1!==a[f].1k("%"))&&(c=0===f?e.4N-j.3k:e.4M-j.3y,u[f]=l?1r(m)/22*c+"2c":22*(1r(m)/c)+"%");m=u.1J(" ")}18 15.3Y(e.1w,m,g,s,o)},4v:3g}),1G("db",{2v:"0 0",4v:3g}),1G("3b",{2v:"1M",2V:!0}),1G("dj",{2v:"50% 50%",2V:!0}),1G("di",{2V:!0}),1G("dh",{2V:!0}),1G("de",{2V:!0}),1G("6U",{24:5g("7B,7S,7U,7K")}),1G("6B",{24:5g("cq,cR,cV,cU")}),1G("cT",{2v:"8y(1M,1M,1M,1M)",24:17(e,t,n,r,s,o){19 u,a,f;18 9>d?(a=e.2X,f=8>d?" ":",",u="8y("+a.cS+f+a.d4+f+a.da+f+a.cZ+")",t=15.2U(t).1t(",").1J(f)):(u=15.2U($(e,15.p,i,!1,15.3Z)),t=15.2U(t)),15.3Y(e.1w,u,t,s,o)}}),1G("d6",{2v:"1M 1M 1M #8i",4c:!0,3W:!0}),1G("7c,8b",{24:17(e,t,n,r,i){18 i}}),1G("3X",{2v:"1M 5x #6T",24:17(e,t,n,r,s,o){18 15.3Y(e.1w,15.2U($(e,"6X",i,!1,"1M")+" "+$(e,"d8",i,!1,"5x")+" "+$(e,"d0",i,!1,"#6T")),15.2U(t),s,o)},4c:!0,4v:17(e){19 t=e.1t(" ");18 t[0]+" "+(t[1]||"5x")+" "+(e.2G(at)||["#6T"])[0]}}),1G("9e",{24:5g("6X,9f,9g,84")}),1G("9c,6L,86",{24:17(e,t,n,r,i){19 s=e.1w,o="6L"1u s?"6L":"86";18 1h 27(s,o,0,0,i,-1,n,!1,0,s[o],t)}});19 8s=17(e){19 t,n=15.t,r=n.2l||$(15.1A,"2l"),i=0|15.s+15.c*e;22===i&&(-1===r.1k("96(")&&-1===r.1k("97(")&&-1===r.1k("98(")?(n.6W("2l"),t=!$(15.1A,"2l")):(n.2l=r.1I(S,""),t=!0)),t||(15.3P&&(n.2l=r=r||"3B(1Z="+i+")"),-1===r.1k("1Z")?0===i&&15.3P||(n.2l=r+" 3B(1Z="+i+")"):n.2l=r.1I(w,"1Z="+i))};1G("1Z,3B,4T",{2v:"1",24:17(e,t,n,r,s,o){19 u=1r($(e,"1Z",i,!1,"1")),a=e.1w,f="4T"===n;18"1L"==1j t&&"="===t.1v(1)&&(t=("-"===t.1v(0)?-1:1)*1r(t.1q(2))+u),f&&1===u&&"5v"===$(e,"6z",i)&&0!==t&&(u=0),q?s=1h 27(a,"1Z",u,t-u,s):(s=1h 27(a,"1Z",22*u,22*(t-u),s),s.3P=f?1:0,a.7s=1,s.2p=2,s.b="3B(1Z="+s.s+")",s.e="3B(1Z="+(s.s+s.c)+")",s.1A=e,s.2D=o,s.1S=8s),f&&(s=1h 27(a,"6z",0,0,s,-1,1d,!1,0,0!==u?"6I":"5v",0===t?"5v":"6I"),s.1X="6I",r.2B.2d(s.n),r.2B.2d(n)),s}});19 5r=17(e,t){t&&(e.8z?("5t"===t.1q(0,2)&&(t="M"+t.1q(1)),e.8z(t.1I(T,"-$1").6P())):e.6W(t))},8I=17(e){1a(15.t.4L=15,1===e||0===e){15.t.3a=0===e?15.b:15.e;1b(19 t=15.1A,n=15.t.1w;t;)t.v?n[t.p]=t.v:5r(n,t.p),t=t.1f;1===e&&15.t.4L===15&&(15.t.4L=1d)}1m 15.t.3a!==15.e&&(15.t.3a=15.e)};1G("3a",{24:17(e,t,r,s,o,u,a){19 f,l,c,h,p,d=e.3a,v=e.1w.3d;1a(o=s.6J=1h 27(e,r,0,0,o,2),o.1S=8I,o.2s=-11,n=!0,o.b=d,l=Q(e,i),c=e.4L){1b(h={},p=c.1A;p;)h[p.p]=1,p=p.1f;c.1S(1)}18 e.4L=o,o.e="="!==t.1v(1)?t:d.1I(46("\\\\s*\\\\b"+t.1q(2)+"\\\\b"),"")+("+"===t.1v(0)?" "+t.1q(2):""),s.2Y.1C&&(e.3a=o.e,f=G(e,l,Q(e),a,h),e.3a=d,o.1A=f.4e,e.1w.3d=v,o=o.3C=s.2O(e,f.57,o,u)),o}});19 8E=17(e){1a((1===e||0===e)&&15.1A.1H===15.1A.2i&&"8D"!==15.1A.1A){19 t,n,r,i,s=15.t.1w,o=u.3R.2O;1a("41"===15.e)s.3d="",i=!0;1m 1b(t=15.e.1t(","),r=t.1c;--r>-1;)n=t[r],u[n]&&(u[n].2O===o?i=!0:n="4G"===n?5q:u[n].p),5r(s,n);i&&(5r(s,bt),15.t.3T&&3E 15.t.3T)}};1b(1G("9h",{24:17(e,t,r,i,s){18 s=1h 27(e,r,0,0,s,2),s.1S=8E,s.e=t,s.2s=-10,s.1A=i.2Y,n=!0,s}}),a="9i,9p,9q,95".1t(","),2u=a.1c;2u--;)7a(a[2u]);a=o.1y,a.1s=1d,a.6V=17(e,t,u){1a(!e.3n)18!1;15.7V=e,15.2Y=u,15.7d=t,f=t.7c,n=!1,r=t.6E||o.6E,i=V(e,""),s=15.2B;19 a,h,d,v,m,g,y,b,w,S=e.1w;1a(l&&""===S.3O&&(a=$(e,"3O",i),("2t"===a||""===a)&&(S.3O=0)),"1L"==1j t&&(v=S.3d,a=Q(e,i),S.3d=v+";"+t,a=G(e,a,Q(e)).57,!q&&E.2P(t)&&(a.1Z=1r(46.$1)),t=a,S.3d=v),15.1s=h=15.2O(e,t,1d),15.47){1b(w=3===15.47,bt?c&&(l=!0,""===S.3O&&(y=$(e,"3O",i),("2t"===y||""===y)&&(S.3O=0)),p&&(S.7b=15.7d.7b||(w?"9r":"5v"))):S.7s=1,d=h;d&&d.1f;)d=d.1f;b=1h 27(e,"3R",0,0,1d,2),15.5e(b,1d,d),b.1S=w&&39?5o:bt?7t:7q,b.1A=15.3r||4l(e,i,!0),s.4q()}1a(n){1b(;h;){1b(g=h.1f,d=v;d&&d.2s>h.2s;)d=d.1f;(h.1l=d?d.1l:m)?h.1l.1f=h:v=h,(h.1f=d)?d.1l=h:m=h,h=g}15.1s=v}18!0},a.2O=17(e,t,n,s){19 o,a,l,c,h,p,d,v,m,g,y=e.1w;1b(o 1u t)p=t[o],a=u[o],a?n=a.2O(e,p,o,15,n,s,t):(h=$(e,o,i)+"",m="1L"==1j p,"4c"===o||"9k"===o||"91"===o||-1!==o.1k("8Z")||m&&x.2P(p)?(m||(p=5i(p),p=(p.1c>3?"6Z(":"5h(")+p.1J(",")+")"),n=4j(y,o,h,p,!0,"4g",n,0,s)):!m||-1===p.1k(" ")&&-1===p.1k(",")?(l=1r(h),d=l||0===l?h.1q((l+"").1c):"",(""===h||"2t"===h)&&("3k"===o||"3y"===o?(l=3L(e,o,i),d="2c"):"4A"===o||"4z"===o?(l=K(e,o,i),d="2c"):(l="1Z"!==o?0:1,d="")),g=m&&"="===p.1v(1),g?(c=3v(p.1v(0)+"1",10),p=p.1q(2),c*=1r(p),v=p.1I(b,"")):(c=1r(p),v=m?p.1q((c+"").1c)||"":""),""===v&&(v=o 1u r?r[o]:d),p=c||0===c?(g?c+l:c)+v:t[o],d!==v&&""!==v&&(c||0===c)&&l&&(l=J(e,o,l,d),"%"===v?(l/=J(e,o,22,"%")/22,t.8b!==!0&&(h=l+"%")):"4k"===v?l/=J(e,o,1,"4k"):"2c"!==v&&(c=J(e,o,c,v),v="2c"),g&&(c||0===c)&&(p=c+l+v)),g&&(c+=l),!l&&0!==l||!c&&0!==c?2h 0!==y[o]&&(p||"ar"!=p+""&&1d!=p)?(n=1h 27(y,o,c||l||0,0,n,-1,o,!1,0,h,p),n.1X="3t"!==p||"6S"!==o&&-1===o.1k("aq")?p:h):U("ap "+o+" 6R aj: "+t[o]):(n=1h 27(y,o,l,c-l,n,0,o,f!==!1&&("2c"===v||"3O"===o),0,h,p),n.1X=v)):n=4j(y,o,h,p,!0,1d,n,0,s)),s&&n&&!n.2D&&(n.2D=s);18 n},a.1S=17(e){19 t,n,r,i=15.1s,s=1e-6;1a(1!==e||15.2Y.1n!==15.2Y.1C&&0!==15.2Y.1n)1a(e||15.2Y.1n!==15.2Y.1C&&0!==15.2Y.1n||15.2Y.1z===-1e-6)1b(;i;){1a(t=i.c*e+i.s,i.r?t=1g.3G(t):s>t&&t>-s&&(t=0),i.2p)1a(1===i.2p)1a(r=i.l,2===r)i.t[i.p]=i.1X+t+i.4a+i.3P+i.5B;1m 1a(3===r)i.t[i.p]=i.1X+t+i.4a+i.3P+i.5B+i.6D+i.6C;1m 1a(4===r)i.t[i.p]=i.1X+t+i.4a+i.3P+i.5B+i.6D+i.6C+i.7D+i.7O;1m 1a(5===r)i.t[i.p]=i.1X+t+i.4a+i.3P+i.5B+i.6D+i.6C+i.7D+i.7O+i.aJ+i.aM;1m{1b(n=i.1X+t+i.4a,r=1;i.l>r;r++)n+=i["3i"+r]+i["2R"+(r+1)];i.t[i.p]=n}1m-1===i.2p?i.t[i.p]=i.1X:i.1S&&i.1S(e);1m i.t[i.p]=t+i.1X;i=i.1f}1m 1b(;i;)2!==i.2p?i.t[i.p]=i.b:i.1S(e),i=i.1f;1m 1b(;i;)2!==i.2p?i.t[i.p]=i.e:i.1S(e),i=i.1f},a.aL=17(e){15.47=e||3===15.47?3:2,15.3r=15.3r||4l(15.7V,i,!0)},a.5e=17(e,t,n,r){18 e&&(t&&(t.1l=e),e.1f&&(e.1f.1l=e.1l),e.1l?e.1l.1f=e.1f:15.1s===e&&(15.1s=e.1f,r=!0),n?n.1f=e:r||1d!==15.1s||(15.1s=e),e.1f=t,e.1l=n),e},a.2n=17(t){19 n,r,i,s=t;1a(t.4T||t.3B){s={};1b(r 1u t)s[r]=t[r];s.1Z=1,s.4T&&(s.6z=1)}18 t.3a&&(n=15.6J)&&(i=n.3C,i&&i.1l?15.5e(i.1l,n.1f,i.1l.1l):i===15.1s&&(15.1s=n.1f),n.1f&&15.5e(n.1f,n.1f.1f,i.1l),15.6J=1d),e.1y.2n.1W(15,s)};19 4t=17(e,t,n){19 r,i,s,o;1a(e.6K)1b(i=e.1c;--i>-1;)4t(e[i],t,n);1m 1b(r=e.70,i=r.1c;--i>-1;)s=r[i],o=s.2p,s.1w&&(t.2d(Q(s)),n&&n.2d(s)),1!==o&&9!==o&&11!==o||!s.70.1c||4t(s,t,n)};18 o.aD=17(e,n,r){19 i,s,o,u=t.3Q(e,n,r),a=[u],f=[],l=[],c=[],h=t.4s.7k;1b(e=u.2F||u.2x,4t(e,f,c),u.1E(n,!0),4t(e,l),u.1E(0,!0),u.1N(!0),i=c.1c;--i>-1;)1a(s=G(c[i],f[i],l[i]),s.4e){s=s.57;1b(o 1u r)h[o]&&(s[o]=r[o]);a.2d(t.3Q(c[i],n,s))}18 a},e.6Q([o]),o},!0)}),1Q.3u&&1Q.37.4q()()',62,830,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this||function|return|var|if|for|length|null||_next|Math|new|_startTime|typeof|indexOf|_prev|else|_time|_timeline|vars|substr|parseFloat|_firstPT|split|in|charAt|style|_timeScale|prototype|_rawPrevTime|data|_paused|_duration|Number|render|255|mt|_totalTime|replace|join|rotation|string|0px|_enabled|_gc|rotationX|window|skewX|setRatio|_p1|add|rotationY|call|xs0|immediateRender|opacity||timeline|100|totalDuration|parser||_first|ht|scaleX|_startAt|_active|instanceof|px|push||_|scaleY|void|_totalDuration|smoothChildTiming|sin|filter|arguments|_kill|easing|type|_p2|_dirty|pr|auto|dt|defaultValue|getRatio|target|number|_initted|rt|_overwriteProps|duration|plugin|cos|_targets|match|_ease|5625|_labels|constructor|_delay|_reversed|128|parse|test|splice|xs|zOrigin|_siblings|format|prefix|scaleZ|currentStyle|_tween|totalTime|startAt|wake|skewY|_onUpdate|time|apply|180|_gsQueue|sqrt|St|className|perspective|_uncache|cssText|paused|_p3|tt|_parseTimeOrLabel|xn|ratio|width|_last|_overwrittenProps|nodeType|config|pow|nt|_transform|_calcEnd|none|_gsDefine|parseInt|API|st|height|ease|_propLookup|alpha|xfirst|it|delete|frame|round|rawTime|selector|tweens|_remove|et|gi|Array|zIndex|xn1|to|transform|appendXtra|_gsTransform|object|version|multi|border|parseComplex|dflt|getTweensOf|all|getPropertyValue|concat|force3D||RegExp|_transformType|reversed|onComplete|xs1|seek|color|_listeners|firstMPT|kill|transparent|set|onReverseComplete|pt|em|Tt|position|isActive|PI|_initProps|pop|skewType|_internals|_t|_notifyPluginsOfEnabled|formatter|runBackwards|delay|scale|top|left|self|sc|_propName|onStart|atan2|transformOrigin|autoRemoveChildren|overwrite|pg|_sortChildren|_gsClassPT|offsetHeight|offsetWidth|_pauseTime|css|com|greensock|plugins|autoAlpha|strict|use|tick|1e5|Ticker|toUpperCase||abs|ox|ieOffsetX|gsClass||rxp|difs|192|9999999999|ot|keyword|sleep|easeParams|_linkCSSP|TweenLite|lt|rgb|ut|repeat|easeIn|_swapSelfInParams|easeInOut|remove|Ct|ieOffsetY|Et|At|getChildren|ms|invalidate|hidden|next|solid|prev|_onPluginEvent|onUpdate|xs2|core|_onInitAllProps|priority|xt|fps|_params|_hasPausedChild|Scope|useFrames|_func|setTimeout|pause|vt|onStartScope|DXImageTransform|oy|Microsoft|onUpdateScope|onUpdateParams|Matrix|_priority|false|Params|GreenSockGlobals||onStartParams|module|define|check|_onDisable|from|_easeType|360|TweenMax|onCompleteParams|fromTo|easeOut|isNaN|createElement|ticker|_gsCache|document|Left|_overwrite|autoCSS|throw|9375|625|delayedCall|984375|timeScale|defaultEase|onCompleteScope|_power|staggerTo|_type|SlowMo|console|hsl|visibility|shortRotationY|padding|xs3|xn2|suffixMap|_short|shortRotationX|ft|inherit|_classNamePT|slice|cssFloat|rotationZ|shortRotation|yt|toLowerCase|activate|tween|display|000|margin|_onInitTween|removeAttribute|borderTopWidth|inset|rgba|childNodes|get|_easePower|play|div||break|globals|_init|addEventListener|gt|WebkitBackfaceVisibility|autoRound|_vars|Cannot|RoughEase|_gsTweenID|_updateRoot|red|autoSleep|reservedProps|center|propName|removeLabel|init|isSelector|Nt|appendChild|zoom|kt|_roundProps|defaultView|insert|addLabel|SimpleTimeline|log|func|marginTop|map|xn3|isArray|bottom|right|Width|black|onReverseCompleteParams|marginLeft|_onEnable|onReverseCompleteScope|Top|xs4|_rootFramesTimeline|borderLeft|filters|marginRight|Right|marginBottom|_target|proxy|Linear|Back|Quad|TweenPlugin|defaultTransformPerspective|progid|absolute|borderLeftWidth|_eventTarget|styleFloat|SteppedEase|Date|_p|up|strictUnits|M11|M12|Dx|exports|Dy|Ease|999|GreenSockAMDPath|_class|register|M22|M21|oxp|shiftChildren|01|oyp|Lt|url|Plugin|gap|defaultSkewType|directionalRotation|rect|removeProperty|random|_contains|startTime|isFromStart|Mt|autoRotate|defaultOverwrite|Animation|Ot|2e3|not|1e3|parseTransform|template|wt|matrix|dispatchEvent|strength|useRAF|clrs|transformPerspective|events|EventDispatcher|or|the|Color||stroke|append|into|is|physics2D|atrix|radient|oader||clear|999999999999|float|usesFrames|borderWidth|borderRightWidth|borderBottomWidth|clearProps|bezier|getLabelTime|fill|addPause|appendMultiple|stop|gotoAndPlay|throwProps|physicsProps|visible|gotoAndStop|insertMultiple|killTweensOf|resume|restart|reverse|eventCallback|1500|clearTimeout|CancelAnimationFrame|CancelRequestAnimationFrame|004|on|progress|_plugins|_tweenLookup|onRepeat|getElementById|jQuery|totalProgress|jquery|_autoCSS|RequestAnimationFrame|webkit|Quart|Quint|Strong|Cubic|undefined|Object|toString|amd|Power|easeNone|now|getTime|moz|cancelAnimationFrame|requestAnimationFrame|linear|swing|removeEventListener|onRepeatParams|onRepeatScope|dependency|TimelineLite|align|missing|encountered|initAll|global|GSAP|stagger|value|exportRoot|normal|sequence|staggerFromTo|staggerFrom|invalid|Style|NaN|overwriteProps||definition|true|_rootTimeline|120|preexisting|allOnStart|yoyo|repeatDelay|concurrent|cascadeTo|_dummyGS|_super|_addTween|illegal|killDelayedCallsTo|xn4|_tempKill|_enableTransforms|xs5|start|70158|Bottom|oxr|oyr|rad|borderTop|Origin|removeChild|cacheWidths|calculateOffset|offset|short|_cw|maroon|teal|blue|navy|silver|lime|ccw|borderBottomLeftRadius|aqua|backgroundPosition|background|exec|innerHTML|1px|getElementsByTagName|MSIE|Firefox|backgroundPositionY|Safari|Chrome|Version|backgroundPositionX|Moz|clientWidth|clientHeight|line|body|convertToPixels||getStyle|Ms|Webkit|getComputedStyle|white|fuchsia|block|Transform|getTransform|179|registerSpecialProp|loaded|_cssRegister|Error|js|file|shortRotationZ|set2DTransformRatio|tan|gradient|Alpha|simple|translate3d|expand|270|matrix3d|sizingMethod|_registerComplexSpecialProp|collapsible|purple|green|borderBottomRightRadius|pink|gray|165|olive|yellow|orange|borderTopRightRadius|203|_setPluginRatio|_parseToProxy|end|CSSPropTween|hsla|boxShadow|cyan|borderTopLeftRadius|borderRadius|Android|parentNode|ElasticIn|ElasticInOut|Expo|ElasticOut|Elastic|BackInOut|asin|paddingTop|BackIn|ExpoOut||SineIn|BackOut|SineInOut|SineOut|Sine|ExpoIn|randomize|ExpoInOut|userAgent|CircInOut|taper|BounceOut|999999999|Bounce|points|clamp|out|sort|BounceIn|BounceInOut|Circ|CircOut|CircIn|paddingRight|clipTop|clip|paddingLeft|paddingBottom|525|001|compensated|clipLeft|borderTopColor|backgroundImage|img|set3DTransformRatio|clipRight|src|textShadow|zA|borderTopStyle|setAttribute|clipBottom|backgroundSize|navigator|lineHeight|userSelect|find|EaseLookup|backfaceVisibility|transformStyle|perspectiveOrigin|fontSize|CSSPlugin|_specialProps|Z0'.split('|'),0,{}));


/*
	* 2D & 3D Transitions for LayerSlider
	*
	* (c) 2011-2014 George Krupa, John Gera & Kreatura Media
	*
	* Plugin web:			http://kreaturamedia.com/
	* Licenses: 			http://codecanyon.net/licenses/
*/



;eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('20 1Z={27:[{j:"13 N E",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"r"}},{j:"13 N r",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"E"}},{j:"13 N L",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"J"}},{j:"13 N J",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"L"}},{j:"26",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"1e",a:G,h:"r"}},{j:"Z R o",d:[2,4],g:[4,7],f:{e:1k,i:"o"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R D",d:[2,4],g:[4,7],f:{e:1k,i:"D"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R 1j-o",d:[2,4],g:[4,7],f:{e:1k,i:"1j-o"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R 1j-D",d:[2,4],g:[4,7],f:{e:1k,i:"1j-D"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R (k)",d:[2,4],g:[4,7],f:{e:1k,i:"k"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"1y 1H N E",d:1,g:1s,f:{e:25,i:"D"},c:{n:"14",b:"1X",a:V,h:"r"}},{j:"1y 1H N r",d:1,g:1s,f:{e:25,i:"o"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y 1H N L",d:1s,g:1,f:{e:25,i:"1j-D"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y 1H N J",d:1s,g:1,f:{e:25,i:"1j-o"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y Y N E",d:1,g:25,f:{e:1k,i:"D"},c:{n:"W",b:"w",a:1g,h:"r"}},{j:"1y Y N r",d:1,g:25,f:{e:1k,i:"o"},c:{n:"W",b:"w",a:1g,h:"E"}},{j:"1y 1W N L",d:25,g:1,f:{e:1k,i:"1j-D"},c:{n:"W",b:"w",a:1g,h:"J"}},{j:"1y Y N J",d:25,g:1,f:{e:1k,i:"1j-o"},c:{n:"W",b:"w",a:1g,h:"L"}},{j:"13 R m E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"E"}},{j:"13 R m r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"r"}},{j:"13 R m L (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"L"}},{j:"13 R m J (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"J"}},{j:"13 k R m k 1S",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"k"}},{j:"13 d m E (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m E (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m E (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m r (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d m r (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d m r (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d N J m L (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 d N J m L (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 d N L m J (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 d N L m J (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m L (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m L (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m L (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m J (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m J (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m J (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P N r m E (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 P N r m E (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 P N E m r (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 P N E m r (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"Z v Y R m E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"E"}},{j:"Z v Y R m r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"r"}},{j:"Z v Y R m L (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"L"}},{j:"Z v Y R m J (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"J"}},{j:"Z v Y k R m k 1S",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"k"}},{j:"Z v Y R N J-r (o)",d:[2,4],g:[4,7],f:{e:1f,i:"o"},c:{n:"Q",b:"z",a:1m,h:"1V"}},{j:"Z v Y R N L-E (D)",d:[2,4],g:[4,7],f:{e:1f,i:"D"},c:{n:"Q",b:"z",a:1m,h:"21"}},{j:"Z v Y R N J-E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"1T"}},{j:"Z v Y R N L-r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"1U"}},{j:"Z v Y d m E (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m E (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m E (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m r (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d m r (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d m r (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d N J m L (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y d N J m L (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y d N L m J (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y d N L m J (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m L (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m L (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m L (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m J (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m J (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m J (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P N r m E (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y P N r m E (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y P N E m r (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y P N E m r (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"1u",d:1,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u d",d:4,g:1,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u g",d:1,g:4,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u R A",d:3,g:4,f:{e:1s,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5,y:x}},{j:"1u R F",d:3,g:4,f:{e:1s,i:"o"},c:{n:"Q",b:"1e",a:V,h:"J",1h:.5,u:-x}},{j:"1u-1I R A",d:3,g:4,f:{e:15,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5,y:x}},{j:"1u-1I R F",d:3,g:4,f:{e:15,i:"o"},c:{n:"Q",b:"1e",a:V,h:"J",1h:.5,u:-x}},{j:"1u 1I d",d:4,g:1,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"E",1h:.5}},{j:"1u 1I g",d:1,g:4,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1c f N r",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"E",y:x}},{j:"1c f N E",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"r",y:-x}},{j:"1c f N J",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"L",u:-x}},{j:"1c f N L",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"J",u:x}},{j:"1c R N r",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1c R N E",d:[3,4],g:[3,4],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1c R N J",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1c R N L",d:[3,4],g:[3,4],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1c d N J",d:[6,12],g:1,f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1c d N L",d:[6,12],g:1,f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1c g N r",d:1,g:[6,12],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1c g N E",d:1,g:[6,12],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1v d N r",d:[3,10],g:1,f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1v d N E",d:[3,10],g:1,f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1v g N J",d:1,g:[3,10],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1v g N L",d:1,g:[3,10],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1v v 1z f N r",d:1,g:1,f:{e:q,i:"o"},c:{n:"Q",b:"z",a:V,h:"E",1h:.1,1r:-x,y:x}},{j:"1v v 1z f N E",d:1,g:1,f:{e:q,i:"o"},c:{n:"Q",b:"z",a:V,h:"r",1h:.1,1r:x,y:-x}},{j:"1v v 1z R N r",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"Q",b:"z",a:V,h:"E",1r:-1w}},{j:"1v v 1z R N E",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"Q",b:"z",a:V,h:"r",1r:-1w}},{j:"1v v 1z R N k",d:[3,4],g:[3,4],f:{e:19,i:"k"},c:{n:"Q",b:"z",a:V,h:"k",1r:-1w}},{j:"B f 1O",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"z",a:1a,h:"r",1h:.8}},{j:"B f N 1L",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"w",a:1a,h:"r",1h:1.2}},{j:"B R k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:.1}},{j:"B R N 1L k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:2}},{j:"B 1O v 1z R k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:.1,1r:x}},{j:"B v 1z R N 1L k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:2,1r:-x}},{j:"1D-Y R 24",d:3,g:4,f:{e:15,i:"o"},c:{n:"W",b:"w",a:1Y,h:"1T"}},{j:"1D-Y d A",d:6,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"r"}},{j:"1D-Y d F",d:6,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"J"}},{j:"1D-Y g A",d:1,g:8,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"r"}},{j:"1D-Y g F",d:1,g:8,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"J"}}],23:[{j:"1b f m E (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:1E},b:"1F",a:G,h:"A"},C:{c:{y:l},b:"z",a:G,h:"A"}},{j:"1b f m r (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:-1E},b:"1F",a:G,h:"A"},C:{c:{y:-l},b:"z",a:G,h:"A"}},{j:"1b f m L (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:-1E},b:"1F",a:1x,h:"F"},C:{c:{u:-l},b:"z",a:1x,h:"F"}},{j:"1b f m J (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:1E},b:"1F",a:1x,h:"F"},C:{c:{u:l},b:"z",a:1x,h:"F"}},{j:"1b R m E (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:G,h:"A"}},{j:"1b R m r (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},s:{c:{y:-l},b:"w",a:G,h:"A"}},{j:"1b R m L (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b R m J (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1G,h:"A"}},{j:"1C S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},s:{c:{u:l},b:"w",a:1G,h:"F"}},{j:"B v S R m E (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S R m r (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S R m L (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v S R m J (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1A,u:1k},a:1l,b:"18"},s:{c:{y:l,u:-1k},b:"H",a:1G,h:"A"},C:{c:{u:0},a:1g,b:"H"}},{j:"B v F S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1A,y:-15},a:1l,b:"18"},s:{c:{u:l,y:15},b:"H",a:1G,h:"F"},C:{c:{y:0},a:1g,b:"H"}},{j:"1b d m E (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b d m r (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b d m L (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b d m J (l&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S d k (l&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1C S d k (l&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1C S d k (1J&#t;)",d:[3,7],g:1,f:{e:1Q,i:"k"},s:{c:{u:-1J},b:"w",a:1R,h:"F"}},{j:"B v S d m E (l&#t;)",d:[5,9],g:1,f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m r (l&#t;)",d:[5,9],g:1,f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m L (l&#t;)",d:[5,9],g:1,f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m J (l&#t;)",d:[5,9],g:1,f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"w",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A S d k (l&#t;)",d:[5,9],g:1,f:{e:19,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F S d k (l&#t;)",d:[5,9],g:1,f:{e:19,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"1b P m E (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b P m r (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b P m L (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b P m J (l&#t;)",d:1,g:[5,9],f:{e:q,i:"D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S P k (l&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1C S P k (l&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1B S P k (1J&#t;)",d:1,g:[4,9],f:{e:1Q,i:"k"},s:{c:{y:1J},b:"w",a:1R,h:"A"}},{j:"B v S P m E (l&#t;)",d:1,g:[7,11],f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"w",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m r (l&#t;)",d:1,g:[7,11],f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"w",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m L (l&#t;)",d:1,g:[7,11],f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m J (l&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A S P k (l&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F S P k (l&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"1N 1P 1M v S m E (l&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O,u:-1k},a:p,b:"z"},s:{c:{u:-1k,y:l},b:"w",a:G,h:"A"},C:{c:{u:0,e:X},b:"z",a:p}},{j:"1N 1P 1M v S m r (l&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O,u:-1k},a:p,b:"z"},s:{c:{u:1k,y:-l},b:"w",a:G,h:"A"},C:{c:{u:0,e:X},b:"z",a:p}},{j:"1c 1t m E (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"1c 1t m r (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:-x},b:"w",a:1a,h:"A"}},{j:"1c 1t m L (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:-x},b:"w",a:1a,h:"F"}},{j:"1c 1t m J (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:x},b:"w",a:1a,h:"F"}},{j:"B v 17 1t m E (x&#t;)",d:1,g:1,f:{e:q,i:"k"},s:{c:{I:.8,1r:7,u:10,y:1w},b:"1e",a:1x,h:"A"},C:{c:{1r:0,u:0,y:x},a:1x,b:"1e"}},{j:"B v 17 1t m r (x&#t;)",d:1,g:1,f:{e:q,i:"k"},s:{c:{I:.8,1r:-7,u:10,y:-1w},b:"1e",a:1x,h:"A"},C:{c:{1r:0,u:0,y:-x},a:1x,b:"1e"}},{j:"B v 17 1n m E (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v 17 1n m r (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:-x},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v 17 1n m L (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v 17 1n m J (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A 17 1n k (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1i,u:-15},a:1o,b:"18"},s:{c:{y:q,u:15},b:"H",a:1o,h:"A"},C:{c:{y:x,u:0},a:1o,b:"H"}},{j:"B v F 17 1n k (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1i,y:15},a:1o,b:"18"},s:{c:{u:q,y:-15},b:"H",a:1o,h:"F"},C:{c:{u:x,y:0},a:1o,b:"H"}},{j:"1c d m E (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"1c d m r (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:-x},b:"w",a:1a,h:"A"}},{j:"1B 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"B v 17 d m E (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:22,u:0},b:"H",a:G,h:"A"},C:{c:{e:X,y:x},b:"K",a:p}},{j:"B v 17 d m r (x&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:-x,u:0},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 d m L (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 d m J (x&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:x,u:0},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 1K d m E (x&#t;)",d:[7,11],g:1,f:{e:q,i:"o"},s:{c:{I:.O,u:5,y:1w},b:"18",a:G,h:"A"},C:{c:{u:0,y:x},b:"18",a:G}},{j:"B v A 17 1K d m r (x&#t;)",d:[7,11],g:1,f:{e:q,i:"D"},s:{c:{I:.O,u:5,y:-1w},b:"18",a:G,h:"A"},C:{c:{u:0,y:-x},b:"18",a:G}},{j:"1c P m L (x&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{u:-x},b:"w",a:G,h:"F"}},{j:"1c P m J (x&#t;)",d:1,g:[5,9],f:{e:q,i:"D"},s:{c:{u:x},b:"w",a:G,h:"F"}},{j:"1C 17 P k (x&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{u:-x},b:"w",a:G,h:"F"}},{j:"B v 17 P m L (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m J (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m E (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m r (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 P k (x&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 P k (x&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 1K P m E (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},s:{c:{I:.O,u:1w,y:-5},b:"18",a:G,h:"F"},C:{c:{u:x,y:0},b:"18",a:G}},{j:"B v F 17 1K P m r (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},s:{c:{I:.O,u:-1w,y:-5},b:"18",a:G,h:"F"},C:{c:{u:-x,y:0},b:"18",a:G}},{j:"1b 1t m E (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b 1t m r (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b 1t m L (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1b 1t m J (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{u:l},b:"w",a:1a,h:"F"}},{j:"B v S 1n m E (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"o",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S 1n m r (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"D",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S 1n m L (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v S 1n m J (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A S 1n k (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"k",U:"T"},M:{c:{I:.1i},a:1o,b:"18"},s:{c:{y:l},b:"H",a:1o,h:"A"},C:{a:1o,b:"H"}},{j:"B v F S 1n k (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"k",U:"T"},M:{c:{I:.1i},a:1o,b:"18"},s:{c:{u:l},b:"H",a:1o,h:"F"},C:{a:1o,b:"H"}},{j:"B v S d m E (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"o",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v S d m r (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"D",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:-l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v S d m L (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S d m J (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v A S d k (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"k",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v F S d k (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m L (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m J (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m E (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m r (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v A S P k (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v F S P k (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}}]}',62,132,'||||||||||duration|easing|transition|rows|delay|tile|cols|direction|sequence|name|random|180|to|type|forward|600|75|left|animation|176|rotateX|and|easeInOutQuart|90|rotateY|easeOutQuart|horizontal|Scaling|after|reverse|right|vertical|1e3|easeInOutBack|scale3d|top|easeOutBack|bottom|before|from|85|columns|mixed|tiles|spinning|large|depth|750|slide|200|sliding|Fading||||Sliding|fade|||turning|easeInOutQuint|55|1500|Spinning|Turning|100|easeInOutQuad|50|350|scale|65|col|30|450|500|cuboids|700|1200|400|rotate|35|cuboid|Carousel|Flying|45|800|Smooth|rotating|95|Horizontal|Vertical|Mirror|91|easeInQuart|1300|fading|mirror|540|drunk|out|scaling|Drunk|in|colums|150|2e3|directions|topright|bottomleft|topleft|sliging|linear|850|layerSliderTransitions|var|bottomright|87|t3d|diagonal||Crossfading|t2d'.split('|')));


/*
	* LayerSlider
	*
	* (c) 2011-2014 George Krupa, John Gera & Kreatura Media
	*
	* Plugin web:			http://kreaturamedia.com/
	* licenses:				http://codecanyon.net/licenses/
*/



;eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('18 av(e,t,n){16 r;6(1Q e=="5J"){r=3I("#"+e)}19 6(1Q e=="ap"){r=e}16 i,s;2v(t){1l"ay":i="e6 3I bw";s=\'bi aa 4y dY e4 aB 4M 4J cZ cX an dL dm 3k 24 3I b0 ds dp 2a 2Q 2q aM 4J dn. <bA>4K dr 3Y 4J 63 du dt 2q 24 df dH 3k 2Q 5o dG 24 "dJ dK dM 2q 5m" dF dx 24 dA & cN cQ 3H.</bA>\';1j;1l"au":i="5H 3I bw";s="bi aa 4y cV d7 d6 an 5H 3X ("+n+\') 3k 24 3I b0. 2Q d5 at d8 3X 1.7.0 4M d9. 4K aK 3I 2q 1.10.x 4M db. da: 4K do 2F d4 24 3I d3 aB 3Y 63 5o do 2F aK 2q 2.x 3X 3k 3I cW 4o 3v 2F a6 d0 d2 d1 4y eC 7 & 8. <a 2R="7m://eF.eG.3U/eB/4/5P-2a-eA/#9R-13&9O-60">ev ew ex ey eT eS 3I by eR eQ.</a>\';1j}r.1o("12-43");r.4e(\'<p 1u="12-eL">!</p>\');r.4e(\'<p 1u="12-43-eM">2Q: \'+i+"</p>");r.4e(\'<p 1u="12-43-9K">\'+s+"</p>")}(18(e){e.ax.3h=18(n){16 r="1.7.0";16 i=e.ax.ay;16 s=e(14);16 o=18(e,t){16 n=e.1J(".");16 r=t.1J(".");2a(16 i=0;i<n.1k;++i){6(r.1k==i){1S 1f}6(1d(n[i])==1d(r[i])){eP}19 6(1d(n[i])>1d(r[i])){1S 1f}19{1S 1b}}6(n.1k!=r.1k){1S 1b}1S 1b};6(!o("1.8.0",i)){s.1o("12-9A")}6(!o(r,i)){av(s,"au",i)}19{6((1Q n).3F("ap|2L")){1S 14.1O(18(e){1H t(14,n)})}19{6(n==="11"){16 u=e(14).11("2Q").g;6(u){1S u}}19 6(n==="eO"){16 a=e(14).11("2Q").o;6(a){1S a}}19 6(n==="cD"){16 a=e(14).11("2Q").8l;6(a){1S a}}19{1S 14.1O(18(t){16 r=e(14).11("2Q");6(r){6(!r.g.2S&&!r.g.4f){6(1Q n=="3W"){6(n>0&&n<r.g.2E+1&&n!=r.g.22){r.4V(n)}}19{2v(n){1l"1U":r.o.6J(r.g);r.1U("6K");1j;1l"1X":r.o.6F(r.g);r.1X("6K");1j;1l"28":6(!r.g.2z){r.o.ab(r.g);r.g.2A=1b;r.28()}1j}}}6(n==="eN"){r.2g()}6((r.g.2z||!r.g.2z&&r.g.2A)&&n=="1x"){r.o.ae(r.g);r.g.2A=1f;r.g.1K.17(\'1Y[1h*="4U.3U"], 1Y[1h*="5x.be"], 1Y[1h*="5v.5j"]\').1O(18(){2o(e(14).11("6w"))});r.1x()}6(n=="e1"){r.9G()}}})}}}};16 t=18(u,a){16 f=14;f.$el=e(u).1o("12-2b");f.$el.11("2Q",f);f.3P=18(){f.8l=t.9c;f.o=e.4F({},f.8l,a);f.g=e.4F({},t.78);f.1w=e.4F({},t.ar);f.53=e.4F({},t.9b);f.g.dV=e(u).2n("12-9A")?1f:1b;f.g.cg=e(u).4n();6(f.g.2t){f.o.4C=1f}6(f.o.2C==="cd"){f.o.2C=1b}6(f.o.2C==="9z"){f.o.2C=1f}6(1Q aQ!=="2L"){f.t=e.4F({},aQ)}6(1Q 9o!=="2L"){f.ct=e.4F({},9o)}6(!f.g.9Y){f.g.9Y=1b;6(e("4n").17(\'aX[8N*="63"]\').1k){f.g.cu=e("4n").17(\'aX[8N*="63"]\').1g("8N").1J("63")[1]}6(e("4n").17(\'8J[1h*="5P"]\').1k){6(e("4n").17(\'8J[1h*="5P"]\').1g("1h").1i("?")!=-1){f.g.cC=e("4n").17(\'8J[1h*="5P"]\').1g("1h").1J("?")[1].1J("=")[1]}}6(!f.o.3p||f.o.3p==""||!f.o.3K||f.o.3K==""){f.5d()}19{e(u).1o("12-"+f.o.3p);16 n=f.o.3K+f.o.3p+"/3p.1a";8z=e("9a");6(!e("9a").1k){8z=e("5m")}6(e(\'7n[2R="\'+n+\'"]\').1k){r=e(\'7n[2R="\'+n+\'"]\');6(!f.g.3f){f.g.3f=1b;f.g.9F=2f(18(){f.5d()},8E)}}19{6(61.aj){61.aj(n);16 r=e(\'7n[2R="\'+n+\'"]\')}19{16 r=e(\'<7n 4Y="bJ" 2R="\'+n+\'" 4W="9K/1a" />\').1C(8z)}}r.3P(18(){6(!f.g.3f){f.g.3f=1b;f.g.9B=2f(18(){f.5d()},8E)}});e(1Z).3P(18(){6(!f.g.3f){f.g.3f=1b;f.g.9C=2f(18(){f.5d()},8E)}});f.g.9D=2f(18(){6(!f.g.3f){f.g.3f=1b;f.5d()}},1P)}}};f.5d=18(){e(u).5w(e(f.o.1C));6(!e("4n").1g("69")){e("4n").1g("69","12-78")}19 6(!e("5m").1g("69")){e("5m").1g("69","12-78")}6(f.g.73()===1b&&f.o.8W===1b){e(u).1o("12-4p");e(u).3t(".12-3g-3i-2b").1o("12-4p")}16 t=18(){6(f.o.8W===1b&&f.g.73()===1b){e(u).1o("12-4p");e(u).3t(".12-3g-3i-2b").1o("12-4p");f.o.4r=1f}19{6(e(1Z).1c()<f.o.aT||e(1Z).1c()>f.o.aP){e(u).1o("12-4p");e(u).3t(".12-3g-3i-2b").1o("12-4p")}19{e(u).2m("12-4p");e(u).3t(".12-3g-3i-2b").2m("12-4p")}}};e(1Z).2g(18(){t()});t();f.g.1y=18(){1S e(u).1c()};f.g.1F=18(){1S e(u).1e()};e(u).17(".12-3B").2m("12-3B").1o("12-1s");e(u).17(\'.12-1s > *[1u*="12-s"]\').1O(18(){16 t=e(14).1g("1u").1J("12-s")[1].1J(" ")[0];e(14).2m("12-s"+t).1o("12-l"+t)});6(f.o.9H){f.o.2U=f.o.9H}6(f.o.bU===1f){f.o.4X=1f}6(e(u).17(".12-1s").1k==1){f.o.4r=1f;f.o.8b=1f;f.o.72=1f;f.o.79=1f;f.o.4b=0;f.o.75=1f;f.o.2C=1b;f.o.2U=1;f.o.38="9z"}6(e(u).23().2n("12-3g-3i-6A")&&f.o.3N!==0){e(u)[0].1M.1c="1E%"}6(f.o.1c){f.g.7E=f.g.2j=""+f.o.1c}19{f.g.7E=f.g.2j=e(u)[0].1M.1c}6(f.o.1e){f.g.3o=""+f.o.1e}19{f.g.3o=e(u)[0].1M.1e}6(f.g.2j.1i("%")==-1&&f.g.2j.1i("1D")==-1){f.g.2j+="1D"}6(f.g.3o.1i("%")==-1&&f.g.3o.1i("1D")==-1){f.g.3o+="1D"}6(f.o.9n&&f.g.2j.1i("1D")!=-1&&f.g.3o.1i("1D")!=-1){f.g.3V=1b}19{f.g.3V=1f}6(f.o.8w===1b){f.o.3N=0;f.g.3V=1b;6(f.g.2j.1i("%")!=-1){f.g.2j=1d(f.g.2j)+"1D"}6(f.g.3o.1i("%")!=-1){f.g.3o=1d(f.g.3o)+"1D"}}e(u).17(\'*[1u*="12-l"], *[1u*="12-bg"]\').1O(18(){6(!e(14).23().2n("12-1s")){e(14).bH(e(14).23())}});e(u).17(".12-1s").1O(18(){e(14).2Z(\':2F([1u*="12-"])\').1O(18(){e(14).9Q()});16 t=e("<1n>").1o("12-bG");6(e(14).17(".12-bg").1k){t.bF(e(14).17(".12-bg").eq("0"))}19{t.5w(e(14))}});e(u).17(\'.12-1s, *[1u*="12-l"]\').1O(18(){6(e(14).11("12")||e(14).1g("4Y")||e(14).1g("1M")){6(e(14).11("12")){16 t=e(14).11("12").21().1J(";")}19 6(e(14).1g("4Y")&&e(14).1g("4Y").1i(":")!=-1&&e(14).1g("4Y").1i(";")!=-1){16 t=e(14).1g("4Y").21().1J(";")}19{16 t=e(14).1g("1M").21().1J(";")}2a(x=0;x<t.1k;x++){3C=t[x].1J(":");6(3C[0].1i("4I")!=-1){3C[1]=f.9E(3C[1])}16 n="";6(3C[2]){n=":"+e.5F(3C[2])}6(3C[0]!=" "&&3C[0]!=""){e(14).11(e.5F(3C[0]),e.5F(3C[1])+n)}}}6(f.o.8n===1b&&f.o.4r===1b){f.o.4r=1f;f.g.7P=1b}16 r=e(14);r.11("4g",r[0].1M.1m);r.11("4a",r[0].1M.1q);6(e(14).3v("a")&&e(14).2Z().1k>0){r=e(14).2Z()}16 i=r.1c();16 s=r.1e();6(r[0].1M.1c&&r[0].1M.1c.1i("%")!=-1){i=r[0].1M.1c}6(r[0].1M.1e&&r[0].1M.1e.1i("%")!=-1){s=r[0].1M.1e}r.11("2Y",i);r.11("2W",s);r.11("8X",r.1a("2e-1m"));r.11("8Y",r.1a("2e-1G"));r.11("93",r.1a("2e-1q"));r.11("92",r.1a("2e-1p"));16 o=1Q 3c(r.1a("3e"))=="3W"?1B.co(3c(r.1a("3e"))*1E)/1E:1;e(14).11("7o",o);6(r.1a("4i-1m-1c").1i("1D")==-1){r.11("6y",r[0].1M.9Z)}19{r.11("6y",r.1a("4i-1m-1c"))}6(r.1a("4i-1G-1c").1i("1D")==-1){r.11("6z",r[0].1M.a3)}19{r.11("6z",r.1a("4i-1G-1c"))}6(r.1a("4i-1q-1c").1i("1D")==-1){r.11("6C",r[0].1M.a4)}19{r.11("6C",r.1a("4i-1q-1c"))}6(r.1a("4i-1p-1c").1i("1D")==-1){r.11("6B",r[0].1M.a8)}19{r.11("6B",r.1a("4i-1p-1c"))}r.11("9v",r.1a("9M-a2"));r.11("9L",r.1a("a1-1e"))});6(61.4O.a0){2a(16 n=0;n<e(u).17(".12-1s").1k;n++){6(e(u).17(".12-1s").eq(n).11("c0")==61.4O.a0.1J("#")[1]){f.o.2U=n+1}}}e(u).17(\'*[1u*="12-8O-"]\').1O(18(){16 t=e(14).1g("1u").1J(" ");2a(16 n=0;n<t.1k;n++){6(t[n].1i("12-8O-")!=-1){16 r=1d(t[n].1J("12-8O-")[1]);e(14).1a({cw:"cx"}).2u(18(t){t.3w();e(u).3h(r)})}}});f.g.2E=e(u).17(".12-1s").1k;6(f.o.7p&&f.g.2E>2){f.o.2U=="2i";f.o.7W=1f}19{f.o.7p=1f}6(f.o.2U=="2i"){f.o.2U=1B.27(1B.2i()*f.g.2E+1)}f.o.5f=f.o.5f<f.g.2E+1?f.o.5f:1;f.o.5f=f.o.5f<1?1:f.o.5f;f.g.4q=1;6(f.o.4X){f.g.4q=0}16 r=61.4O.2R.1i("c2:")===-1?"":"7m:";e(u).17(\'1Y[1h*="4U.3U"], 1Y[1h*="5x.be"]\').1O(18(){e(14).23().1o("12-2s-3B");6(e(14).23(\'[1u*="12-l"]\')){16 t=e(14);16 n=r;e.9T(n+"//c3.4U.3U/c9/a9/ca/"+e(14).1g("1h").1J("9V/")[1].1J("?")[0]+"?v=2&7s=99&9k=?",18(e){t.11("7q",1d(e["9O"]["cb$9R"]["cl$2r"]["cc"])*1P)});16 i=e("<1n>").1o("12-5A").1C(e(14).23());e("<29>").1C(i).1o("12-3m").1g("7s","bf 2s").1g("1h",n+"//29.4U.3U/ch/"+e(14).1g("1h").1J("9V/")[1].1J("?")[0]+"/"+f.o.aH);e("<1n>").1C(i).1o("12-b1");e(14).23().1a({1c:e(14).1c(),1e:e(14).1e()}).2u(18(){6(e(14).11("4z")>0&&e(14).11("4s")){2o(e(14).11("4s"))}f.g.2S=1b;6(f.g.2T){6(f.o.2C!=1f){f.g.2T=1f}f.g.2A=1b}19{f.g.2A=f.g.2z}6(f.o.2C!=1f){f.1x()}f.g.4E=1b;n=e(14).17("1Y").11("3S").1i("7m")===-1?r:"";e(14).17("1Y").1g("1h",n+e(14).17("1Y").11("3S"));e(14).17(".12-5A").1N(f.g.v.d).3M(f.g.v.7u,18(){6(f.o.2C=="1W"&&f.g.2A==1b){16 e=2f(18(){f.28()},t.11("7q")-f.g.v.d);t.11("6w",e)}f.g.2S=1f;6(f.g.2g==1b){f.3z(f.g.1K,18(){f.g.2g=1f})}})});16 s="&";6(e(14).1g("1h").1i("?")==-1){s="?"}16 o="&bz=aq&c4=1";6(e(14).1g("1h").1i("4j")==-1){e(14).11("3S",e(14).1g("1h")+s+"4j=1"+o)}19{e(14).11("3S",e(14).1g("1h").2l("4j=0","4j=1")+o)}e(14).11("2Y",e(14).1g("1c"));e(14).11("2W",e(14).1g("1e"));e(14).1g("1h","")}});e(u).17(\'1Y[1h*="5v.5j"]\').1O(18(){e(14).23().1o("12-2s-3B");6(e(14).23(\'[1u*="12-l"]\')){16 t=e(14);16 n=r;16 i=e("<1n>").1o("12-5A").1C(e(14).23());e.9T(n+"//5j.3U/a9/ci/2s/"+e(14).1g("1h").1J("2s/")[1].1J("?")[0]+".99?9k=?",18(n){e("<29>").1C(i).1o("12-3m").1g("7s","bf 2s").1g("1h",n[0]["cv"]);t.11("7q",1d(n[0]["2r"])*1P);e("<1n>").1C(i).1o("12-b1")});e(14).23().1a({1c:e(14).1c(),1e:e(14).1e()}).2u(18(){6(e(14).11("4z")>0&&e(14).11("4s")){2o(e(14).11("4s"))}f.g.2S=1b;6(f.g.2T){6(f.o.2C!=1f){f.g.2T=1f}f.g.2A=1b}19{f.g.2A=f.g.2z}6(f.o.2C!=1f){f.1x()}f.g.4E=1b;n=e(14).17("1Y").11("3S").1i("7m")===-1?r:"";e(14).17("1Y").1g("1h",n+e(14).17("1Y").11("3S"));e(14).17(".12-5A").1N(f.g.v.d).3M(f.g.v.7u,18(){6(f.o.2C=="1W"&&f.g.2A==1b){16 e=2f(18(){f.28()},t.11("7q")-f.g.v.d);t.11("6w",e)}f.g.2S=1f;6(f.g.2g==1b){f.3z(f.g.1K,18(){f.g.2g=1f})}})});16 s="&";6(e(14).1g("1h").1i("?")==-1){s="?"}16 o="&bz=aq";6(e(14).1g("1h").1i("4j")==-1){e(14).11("3S",e(14).1g("1h")+s+"4j=1"+o)}19{e(14).11("3S",e(14).1g("1h").2l("4j=0","4j=1")+o)}e(14).11("2Y",e(14).1g("1c"));e(14).11("2W",e(14).1g("1e"));e(14).1g("1h","")}});e(u).17("2s, 6I").1O(18(){16 t=1Q e(14).1g("1c")!=="2L"?e(14).1g("1c"):"c7";16 n=1Q e(14).1g("1e")!=="2L"?e(14).1g("1e"):""+e(14).1e();6(t.1i("%")===-1){t=1d(t)}6(n.1i("%")===-1){n=1d(n)}6(t==="1E%"&&(n===0||n==="0"||n==="1E%")){e(14).1g("1e","1E%");n="1W"}e(14).23().1o("12-2s-3B").1a({1c:t,1e:n}).11({2Y:t,2W:n});16 r=e(14);e(14).3Y("cz",18(){6(f.o.2C==="1W"&&f.g.2A===1b){f.28()}});e(14).5X("1c").5X("1e").1a({1c:"1E%",1e:"1E%"}).2u(18(e){6(!f.g.4E){6(14.2T){e.3w()}14.cs();f.g.2S=1b;6(f.g.2T){6(f.o.2C!==1f){f.g.2T=1f}f.g.2A=1b}19{f.g.2A=f.g.2z}6(f.o.2C!==1f){f.1x()}f.g.4E=1b;f.g.2S=1f;6(f.g.2g===1b){f.3z(f.g.1K,18(){f.g.2g=1f})}}})});6(f.o.4X){f.o.2U=f.o.2U-1===0?f.g.2E:f.o.2U-1}f.g.22=f.o.2U;f.g.1K=e(u).17(".12-1s:eq("+(f.g.22-1)+")");e(u).17(".12-1s").ck(\'<1n 1u="12-2h"></1n>\');6(f.o.aV){f.g.3q=e("<1n>").1o("12-bL-5V").1C(e(u).17(".12-2h"))}6(f.o.aN&&!f.g.2t){f.g.30=e("<1n>").1o("12-cn-5V").1C(e(u).17(".12-2h"));f.g.30.4e(e(\'<1n 1u="12-ct-1m"><1n 1u="12-ct-3s"><1n 1u="12-ct-aI"><1n 1u="12-ct-aJ"></1n></1n></1n></1n><1n 1u="12-ct-1G"><1n 1u="12-ct-3s"><1n 1u="12-ct-aI"><1n 1u="12-ct-aJ"></1n></1n></1n></1n><1n 1u="12-ct-bN"></1n>\'))}f.g.6d=e("<1n>").1a({bM:-1,1L:"1R"}).1o("12-aC-2b").1C(e(u));e("<1n>").1o("12-aC-bX").1C(f.g.6d);6(e(u).1a("3L")=="bY"){e(u).1a("3L","ak")}6(f.o.7i){e(u).17(".12-2h").1a({bW:"67("+f.o.7i+")"})}19{e(u).17(".12-2h").1a({bV:f.o.7r})}6(f.o.7r=="87"&&f.o.7i==1f){e(u).17(".12-2h").1a({3u:"1R 87 !bI"})}e(u).17(".12-1s 29").1O(18(){e(14).5X("1c").5X("1e");6(f.o.3O===1b&&f.o.4C===1b){6(1Q e(14).11("1h")!=="5J"){e(14).11("1h",e(14).1g("1h"));16 t=f.o.3K+"../1a/bZ.bE";e(14).1g("1h",t)}}19{6(1Q e(14).11("1h")==="5J"){e(14).1g("1h",e(14).11("1h"));e(14).5X("11-1h")}}});e(u).17(".12-1s").3Y("bS",18(t){f.g.aS=t.7t-e(14).23().4d().1m;f.g.aO=t.aR-e(14).23().4d().1q});e(u).17(".12-1s").3Y("ag",18(t){16 n=e(14).23().4d().1m+f.g.aS;16 r=e(14).23().4d().1q+f.g.aO;16 i=t.7t-n;16 s=t.aR-r;e(14).17("> *:2F(.12-bg)").1O(18(){6(1Q e(14).11("5b")!=="2L"&&1d(e(14).11("5b"))!==0){e(14).1a({3G:-i/1E*1d(e(14).11("5b")),47:-s/1E*1d(e(14).11("5b"))})}})});e(u).17(".12-1s").3Y("cm",18(){e(14).17("> *:2F(.12-bg)").1O(18(){6(1Q e(14).11("5b")!=="2L"&&1d(e(14).11("5b"))!==0){3b.2q(14,.4,{1a:{3G:0,47:0}})}})});6(f.o.8b){e(\'<a 1u="12-1r-1U" 2R="#" />\').2u(18(t){t.3w();e(u).3h("1U")}).1C(e(u));e(\'<a 1u="12-1r-1X" 2R="#" />\').2u(18(t){t.3w();e(u).3h("1X")}).1C(e(u));6(f.o.ai){e(u).17(".12-1r-1U, .12-1r-1X").1a({1L:"1R"});e(u).1V(18(){6(!f.g.8a){6(f.g.2t){e(u).17(".12-1r-1U, .12-1r-1X").1a("1L","2p")}19{e(u).17(".12-1r-1U, .12-1r-1X").1x(1b,1b).2I(2D)}}},18(){6(f.g.2t){e(u).17(".12-1r-1U, .12-1r-1X").1a("1L","1R")}19{e(u).17(".12-1r-1U, .12-1r-1X").1x(1b,1b).3M(2D)}})}}6(f.o.72||f.o.79){16 i=e(\'<1n 1u="12-1p-1r-2J" />\').1C(e(u));f.g.32=i;6(f.o.38=="4N"){i.1o("12-az-5e")}6(f.o.79&&f.o.38!="4N"){e(\'<5C 1u="12-1p-4G" />\').1C(e(u).17(".12-1p-1r-2J"));6(f.o.38=="1V"){16 s=e(\'<1n 1u="12-1I-1V"><1n 1u="12-1I-1V-2h"><1n 1u="12-1I-1V-bg"></1n><1n 1u="12-1I-1V-29"><29></1n><5C></5C></1n></1n>\').1C(e(u).17(".12-1p-4G"))}2a(x=1;x<f.g.2E+1;x++){16 o=e(\'<a 2R="#" />\').1C(e(u).17(".12-1p-4G")).2u(18(t){t.3w();e(u).3h(e(14).7L()+1)});6(f.o.38=="1V"){e(u).17(".12-1I-1V, .12-1I-1V-29").1a({1c:f.o.8y,1e:f.o.6c});16 a=e(u).17(".12-1I-1V");16 l=a.17("29").1a({1e:f.o.6c});16 c=e(u).17(".12-1I-1V-2h").1a({26:"2x",1L:"2p"});o.1V(18(){16 t=e(u).17(".12-1s").eq(e(14).7L());16 n;6(f.o.3O===1b&&f.o.4C===1b){6(t.17(".12-4l").1k){n=t.17(".12-4l").11("1h")}19 6(t.17(".12-3m").1k){n=t.17(".12-3m").1g("1h")}19 6(t.17(".12-bg").1k){n=t.17(".12-bg").11("1h")}19{n=f.o.3K+f.o.3p+"/6M.4P"}}19{6(t.17(".12-4l").1k){n=t.17(".12-4l").1g("1h")}19 6(t.17(".12-3m").1k){n=t.17(".12-3m").1g("1h")}19 6(t.17(".12-bg").1k){n=t.17(".12-bg").1g("1h")}19{n=f.o.3K+f.o.3p+"/6M.4P"}}e(u).17(".12-1I-1V-29").1a({1m:1d(a.1a("2e-1m")),1q:1d(a.1a("2e-1q"))});l.3P(18(){6(e(14).1c()==0){l.1a({3L:"ak",4h:"0 1W",1m:"1W"})}19{l.1a({3L:"cA",3G:-e(14).1c()/2,1m:"50%"})}}).1g("1h",n);a.1a({1L:"2p"}).1x().49({1m:e(14).3L().1m+(e(14).1c()-a.3x())/2},83);c.1a({1L:"1R",26:"2P"}).1x().2I(83)},18(){c.1x().3M(83,18(){a.1a({26:"2x",1L:"2p"})})})}}6(f.o.38=="1V"){s.1C(e(u).17(".12-1p-4G"))}e(u).17(".12-1p-4G a:eq("+(f.o.2U-1)+")").1o("12-1r-1T")}6(f.o.72){16 h=e(\'<a 1u="12-1r-28" 2R="#" />\').2u(18(t){t.3w();e(u).3h("28")}).5w(e(u).17(".12-1p-1r-2J"));16 p=e(\'<a 1u="12-1r-1x" 2R="#" />\').2u(18(t){t.3w();e(u).3h("1x")}).1C(e(u).17(".12-1p-1r-2J"))}19 6(f.o.38!="4N"){e(\'<5C 1u="12-1r-al 12-1r-cB" />\').5w(e(u).17(".12-1p-1r-2J"));e(\'<5C 1u="12-1r-al 12-1r-cy" />\').1C(e(u).17(".12-1p-1r-2J"))}6(f.o.76&&f.o.38!="4N"){i.1a({1L:"1R"});e(u).1V(18(){6(!f.g.8a){6(f.g.2t){i.1a("1L","2p")}19{i.1x(1b,1b).2I(2D)}}},18(){6(f.g.2t){i.1a("1L","1R")}19{i.1x(1b,1b).3M(2D)}})}}6(f.o.38=="4N"){f.g.40=e(\'<1n 1u="12-1I-2J"></1n>\').1C(e(u));16 s=e(\'<1n 1u="12-1I"><1n 1u="12-1I-2h"><1n 1u="12-1I-1s-2b"><1n 1u="12-1I-1s"></1n></1n></1n></1n>\').1C(f.g.40);f.g.5e=e(u).17(".12-1I-1s-2b");6(!("6k"3R 1Z)){f.g.5e.1V(18(){e(14).1o("12-1I-1s-1V")},18(){e(14).2m("12-1I-1s-1V");f.7Q()}).ag(18(t){16 n=1d(t.7t-e(14).4d().1m)/e(14).1c()*(e(14).1c()-e(14).17(".12-1I-1s").1c());e(14).17(".12-1I-1s").1x().1a({3G:n})})}19{f.g.5e.1o("12-cj")}e(u).17(".12-1s").1O(18(){16 t=e(14).7L()+1;16 n;6(f.o.3O===1b&&f.o.4C===1b){6(e(14).17(".12-4l").1k){n=e(14).17(".12-4l").11("1h")}19 6(e(14).17(".12-3m").1k){n=e(14).17(".12-3m").1g("1h")}19 6(e(14).17(".12-bg").1k){n=e(14).17(".12-bg").11("1h")}19{n=f.o.3K+f.o.3p+"/6M.4P"}}19{6(e(14).17(".12-4l").1k){n=e(14).17(".12-4l").1g("1h")}19 6(e(14).17(".12-3m").1k){n=e(14).17(".12-3m").1g("1h")}19 6(e(14).17(".12-bg").1k){n=e(14).17(".12-bg").1g("1h")}19{n=f.o.3K+f.o.3p+"/6M.4P"}}16 r=e(\'<a 2R="#" 1u="12-4c-\'+t+\'"><29 1h="\'+n+\'"></a>\');r.1C(e(u).17(".12-1I-1s"));6(!("6k"3R 1Z)){r.1V(18(){e(14).2Z().1x().6l(2D,f.o.8P/1E)},18(){6(!e(14).2Z().2n("12-4c-1T")){e(14).2Z().1x().6l(2D,f.o.8I/1E)}})}r.2u(18(n){n.3w();e(u).3h(t)})});6(h&&p){16 d=f.g.32=e(\'<1n 1u="12-1p-1r-2J 12-c5-5e"></1n>\').1C(e(u));h.7v().2u(18(t){t.3w();e(u).3h("28")}).1C(d);p.7v().2u(18(t){t.3w();e(u).3h("1x")}).1C(d)}6(f.o.76){f.g.40.1a("1L","1R");6(d){f.g.32=d.1a("1L")=="2p"?d:e(u).17(".12-az-5e");f.g.32.1a("1L","1R")}e(u).1V(18(){e(u).1o("12-1V");6(!f.g.8a){6(f.g.2t){f.g.40.1a("1L","2p");6(f.g.32){f.g.32.1a("1L","2p")}}19{f.g.40.1x(1b,1b).2I(2D);6(f.g.32){f.g.32.1x(1b,1b).2I(2D)}}}},18(){e(u).2m("12-1V");6(f.g.2t){f.g.40.1a("1L","1R");6(f.g.32){f.g.32.1a("1L","1R")}}19{f.g.40.1x(1b,1b).3M(2D);6(f.g.32){f.g.32.1x(1b,1b).3M(2D)}}})}}f.g.3T=e(\'<1n 1u="12-3T"></1n>\').1C(e(u));6(f.g.3T.1a("1L")=="2p"&&!f.g.3T.17("29").1k){f.g.6u=18(){f.g.3T.1a({1L:"1R",26:"2P"}).2I(4w,18(){f.g.6u=1f})};f.g.56=e("<29>").1g("1h",f.o.3K+f.o.3p+"/3T.4P").1C(f.g.3T);f.g.a7=1Q 1d(e(u).1a("2e-1p"))=="3W"?1d(e(u).1a("2e-1p")):0}f.7w();6(f.o.ad&&e(u).17(".12-1s").1k>1){e("5m").6G("ce",18(e){6(!f.g.2S&&!f.g.4f){6(e.bq==37){f.o.6J(f.g);f.1U("6K")}19 6(e.bq==39){f.o.6F(f.g);f.1X("6K")}}})}6("6k"3R 1Z&&e(u).17(".12-1s").1k>1&&f.o.ah){e(u).17(".12-2h").6G("c8",18(e){16 t=e.54?e.54:e.bd.54;6(t.1k==1){f.g.6p=f.g.5K=t[0].bb}});e(u).17(".12-2h").6G("c6",18(e){16 t=e.54?e.54:e.bd.54;6(t.1k==1){f.g.5K=t[0].bb}6(1B.4m(f.g.6p-f.g.5K)>45){e.3w()}});e(u).17(".12-2h").6G("bC",18(t){6(1B.4m(f.g.6p-f.g.5K)>45){6(f.g.6p-f.g.5K>0){f.o.6F(f.g);e(u).3h("1X")}19{f.o.6J(f.g);e(u).3h("1U")}}})}6(f.o.9r==1b&&e(u).17(".12-1s").1k>1){e(u).17(".12-2h").1V(18(){f.o.am(f.g);6(f.g.2z){f.g.2T=1b;f.1x();6(f.g.3q){f.g.3q.1x()}6(f.g.30){6(f.g.2M){f.g.2M.5N()}}f.g.3Q=(1H 5a).5c()}},18(){6(f.g.2T==1b){f.28();f.g.2T=1f}})}f.7A();6(f.o.1v){f.g.1v=e("<29>").1o("12-c1").1C(e(u)).1g("1M",f.o.aD).1a({26:"2x",1L:"cf"}).3P(18(){16 t=0;6(!f.g.1v){t=1P}2f(18(){f.g.1v.11("2Y",f.g.1v.1c());f.g.1v.11("2W",f.g.1v.1e());6(f.g.1v.1a("1m")!="1W"){f.g.1v.11("4g",f.g.1v[0].1M.1m)}6(f.g.1v.1a("1G")!="1W"){f.g.1v.11("5S",f.g.1v[0].1M.1G)}6(f.g.1v.1a("1q")!="1W"){f.g.1v.11("4a",f.g.1v[0].1M.1q)}6(f.g.1v.1a("1p")!="1W"){f.g.1v.11("68",f.g.1v[0].1M.1p)}6(f.o.8k!=1f){e("<a>").1C(e(u)).1g("2R",f.o.8k).1g("cr",f.o.aF).1a({cq:"1R",cp:"1R"}).4e(f.g.1v)}f.g.1v.1a({1L:"1R",26:"2P"});f.86()},t)}).1g("1h",f.o.1v)}e(1Z).2g(18(){f.2g()});e(1Z).3Y("bT",18(){e(1Z).2g()});f.g.9q=1b;6(f.o.4X==1b){6(f.o.4r){f.g.2z=1b;e(u).17(".12-1r-28").1o("12-1r-28-1T")}19{e(u).17(".12-1r-1x").1o("12-1r-1x-1T")}f.1X()}19 6(1Q f.g.1K[0]!=="2L"){f.3O(f.g.1K,18(){f.g.1K.2I(f.o.7B,18(){f.g.4f=1f;e(14).1o("12-1T");6(f.o.5Q){e(14).1N(e(14).11("5l")+25).bR(18(){e(14).17(".12-3m").2u();e(14).17("2s, 6I").1O(18(){6(1Q e(14)[0].6H!==0){e(14)[0].6H=0}e(14).2u()});e(14).7x()})}f.g.1K.17(\' > *[1u*="12-l"]\').1O(18(){16 t=e(14);6((!t.2n("12-2s-3B")||t.2n("12-2s-3B")&&f.o.5Q===1f)&&t.11("4z")>0){t.11("4s",2f(18(){f.8F(t)},t.11("4z")))}})});f.7S(f.g.22);6(f.o.4r){f.g.4f=1f;f.28()}19{e(u).17(".12-1r-1x").1o("12-1r-1x-1T")}})}f.o.ac(e(u))};f.2g=18(){f.g.2g=1b;6(!f.g.2S){f.3z(f.g.1K,18(){6(f.g.2w){f.g.2w.6a()}f.g.2g=1f});6(f.g.1v){f.86()}}};f.28=18(){6(f.g.2z){6(f.g.2k=="1U"&&f.o.7W){f.1U()}19{f.1X()}}19{f.g.2z=1b;6(!f.g.2S&&!f.g.4f){f.5V()}}e(u).17(".12-1r-28").1o("12-1r-28-1T");e(u).17(".12-1r-1x").2m("12-1r-1x-1T")};f.5V=18(){6(e(u).17(".12-1T").11("12")){16 t=f.53.6P}19{16 t=f.o.6P}16 n=e(u).17(".12-1T").11("6b")?1d(e(u).17(".12-1T").11("6b")):t;6(!f.o.4X&&!e(u).17(".12-1T").11("6b")){16 r=e(u).17(".12-1s:eq("+(f.o.2U-1)+")").11("6b");n=r?r:t}2o(f.g.4u);6(f.g.3Q){6(!f.g.4k){f.g.4k=(1H 5a).5c()}6(f.g.4k>f.g.3Q){f.g.3Q=(1H 5a).5c()}6(!f.g.3D){f.g.3D=n}f.g.3D-=f.g.3Q-f.g.4k;f.g.3Q=1f;f.g.4k=(1H 5a).5c()}19{f.g.3D=n;f.g.4k=(1H 5a).5c()}f.g.3D=1d(f.g.3D);f.g.4u=2f(18(){f.g.4k=f.g.3Q=f.g.3D=1f;f.28()},f.g.3D);6(f.g.3q){f.g.3q.49({1c:f.g.1y()},f.g.3D,"8T",18(){e(14).1a({1c:0})})}6(f.g.30){16 i=f.g.30.17(".12-ct-1G .12-ct-3s");16 s=f.g.30.17(".12-ct-1m .12-ct-3s");6(f.g.30.1a("1L")=="1R"){i.1a({3s:0});s.1a({3s:0});f.g.30.2I(89)}6(!f.g.2M){f.g.2M=1H aZ;f.g.2M.9I(3b.6L(i[0],n/9J,{3l:0},{41:8K.8Q,3l:6N,bQ:18(){f.g.2M=1f}}));f.g.2M.9I(3b.6L(s[0],n/9J,{3l:0},{41:8K.8Q,3l:6N}))}19{f.g.2M.bK()}}};f.1x=18(){f.g.3Q=(1H 5a).5c();6(f.g.3q){f.g.3q.1x()}6(f.g.30){6(f.g.2M){f.g.2M.5N()}}6(!f.g.2T&&!f.g.2A){e(u).17(".12-1r-1x").1o("12-1r-1x-1T");e(u).17(".12-1r-28").2m("12-1r-28-1T")}2o(f.g.4u);f.g.2z=1f};f.9G=18(){2o(f.g.4u);f.g.2z=1f;2o(f.g.9F);2o(f.g.9B);2o(f.g.9C);2o(f.g.9D);2o(f.g.aG);6(f.g.3q){f.g.3q.1x()}6(f.g.30){6(f.g.2M){f.g.2M.5N()}}e(u).17("*").1x(1b,1f).7x();e(u).17(".12-1s >").1O(18(){6(e(14).11("3E")){e(14).11("3E").5N()}});6(!f.g.2T&&!f.g.2A){e(u).17(".12-1r-1x").1o("12-1r-1x-1T");e(u).17(".12-1r-28").2m("12-1r-28-1T")}};f.bP=18(){e(u).17("*").1x();2o(f.g.4u);f.4V(f.g.22,f.g.2k)};f.9E=18(t){6(e.5F(t.21())=="bl"||e.5F(t.21())=="8T"){1S t.21()}19{1S t.2l("7J","94").2l("8o","9f").2l("8s","97").2l("bO","bD").2l("dN","ed").2l("ee","ec").2l("eb","e8").2l("e9","ea").2l("ef","eg").2l("en","eo").2l("em","ek").2l("5L","eh").2l("ei","ej")}};f.1U=18(e){6(f.g.22<2){f.g.4q+=1}6(f.g.4q>f.o.4b&&f.o.4b>0&&!e){f.g.4q=0;f.1x();6(f.o.75==1f){f.o.4b=0}}19{16 t=f.g.22<2?f.g.2E:f.g.22-1;f.g.2k="1U";f.4V(t,f.g.2k)}};f.1X=18(e){6(!f.o.7p){6(!(f.g.22<f.g.2E)){f.g.4q+=1}6(f.g.4q>f.o.4b&&f.o.4b>0&&!e){f.g.4q=0;f.1x();6(f.o.75==1f){f.o.4b=0}}19{16 t=f.g.22<f.g.2E?f.g.22+1:1;f.g.2k="1X";f.4V(t,f.g.2k)}}19 6(!e){16 t=f.g.22;16 n=18(){t=1B.27(1B.2i()*f.g.2E)+1;6(t==f.g.22){n()}19{f.g.2k="1X";f.4V(t,f.g.2k)}};n()}19 6(e){16 t=f.g.22<f.g.2E?f.g.22+1:1;f.g.2k="1X";f.4V(t,f.g.2k)}};f.4V=18(t,n){f.g.4k=f.g.3Q=f.g.3D=1f;6(f.g.3q){f.g.3q.1x().1N(2D).49({1c:0},e7)}6(f.g.30){f.g.30.3M(4w);6(f.g.2M){f.g.2M.5z().2r(.35)}}6(f.g.4E==1b){f.g.4E=1f;f.g.2z=f.g.2A;f.g.1K.17(\'1Y[1h*="4U.3U"], 1Y[1h*="5x.be"], 1Y[1h*="5v.5j"]\').1O(18(){e(14).23().17(".12-5A").2I(f.g.v.8e,18(){e(14).23().17("1Y").1g("1h","")})});f.g.1K.17("2s, 6I").1O(18(){14.5N()})}e(u).17(\'1Y[1h*="4U.3U"], 1Y[1h*="5x.be"], 1Y[1h*="5v.5j"]\').1O(18(){2o(e(14).11("6w"))});2o(f.g.4u);f.g.5r=t;f.g.1t=e(u).17(".12-1s:eq("+(f.g.5r-1)+")");6(!n){6(f.g.22<f.g.5r){f.g.2k="1X"}19{f.g.2k="1U"}}16 r=0;6(e(u).17(\'1Y[1h*="4U.3U"], 1Y[1h*="5x.be"], 1Y[1h*="5v.5j"]\').1k>0){r=f.g.v.8e}6(1Q f.g.1t[0]!=="2L"){f.3O(f.g.1t,18(){f.49()})}};f.3O=18(t,n){f.g.4f=1b;6(f.g.9q){e(u).1a({26:"2P"})}6(f.o.3O){16 r=[];16 i=0;6(t.1a("3u-2G")!="1R"&&t.1a("3u-2G").1i("67")!=-1&&!t.2n("12-3A")&&!t.2n("12-2F-3A")){16 s=t.1a("3u-2G");s=s.3F(/67\\((.*)\\)/)[1].2l(/"/9t,"");r[r.1k]=[s,t]}t.17("29:2F(.12-3A, .12-2F-3A)").1O(18(){6(f.o.4C===1b){e(14).1g("1h",e(14).11("1h"))}r[r.1k]=[e(14).1g("1h"),e(14)]});t.17("*").1O(18(){6(e(14).1a("3u-2G")!="1R"&&e(14).1a("3u-2G").1i("67")!=-1&&!e(14).2n("12-3A")&&!e(14).2n("12-2F-3A")){16 t=e(14).1a("3u-2G");t=t.3F(/67\\((.*)\\)/)[1].2l(/"/9t,"");r[r.1k]=[t,e(14)]}});6(r.1k==0){e(".12-1I-2J, .12-1r-1X, .12-1r-1U, .12-1p-1r-2J").1a({26:"2P"});f.3z(t,n)}19{6(f.g.2t){f.g.6d.1a("1L","2p")}19{f.g.6d.1N(a5).2I(2D)}16 o=18(){f.g.6d.1x(1b,1b).1a({1L:"1R"});e(".12-1I-2J, .12-1r-1X, .12-1r-1U, .12-1p-1r-2J").1a({26:"2P"});6(46.42.1i("dU/7")!==-1||f.g.2t){2f(18(){f.3z(t,n)},50)}19{f.3z(t,n)}};2a(x=0;x<r.1k;x++){e("<29>").11("el",r[x]).3P(18(){e(14).11("el")[1].1o("12-3A");6(++i==r.1k){o()}}).43(18(){16 t=e(14).11("el")[0].9h(e(14).11("el")[0].9m("/")+1,e(14).11("el")[0].1k);6(1Z.6D){6D.dW(\'2Q 43:\\r\\n\\r\\6E 6T 4y 24 6S 3k 24 2G 4M 3u 2G "\'+t+\'" 3v 6R 2q a 6Q 4O 5o 4o 6U be 3f. 4K 6V 24 6Y 3k 4H 4J 6i 6X 3R 24 6W.\')}19{9d(\'2Q 43:\\r\\n\\r\\6E 6T 4y 24 6S 3k 24 2G 4M 3u 2G "\'+t+\'" 3v 6R 2q a 6Q 4O 5o 4o 6U be 3f. 4K 6V 24 6Y 3k 4H 4J 6i 6X 3R 24 6W.\')}e(14).1o("12-2F-3A");6(++i==r.1k){o()}}).1g("1h",r[x][0])}}}19{e(".12-1I-2J, .12-1r-1X, .12-1r-1U, .12-1p-1r-2J").1a({26:"2P"});f.3z(t,n)}};f.3z=18(t,n){t.1a({26:"2x",1L:"2p"});6(f.g.6u){f.g.6u()}f.7A();6(f.o.38=="4N"){f.9P()}t.2Z().1O(18(){16 t=e(14);16 n=t.11("4g")?t.11("4g"):"0";16 r=t.11("4a")?t.11("4a"):"0";6(t.3v("a")&&t.2Z().1k>0){t.1a({1L:"2p"});t=t.2Z()}16 i="1W";16 s="1W";6(t.11("2Y")){6(1Q t.11("2Y")=="3W"){i=1d(t.11("2Y"))*f.g.1z}19 6(t.11("2Y").1i("%")!=-1){i=t.11("2Y")}}6(t.11("2W")){6(1Q t.11("2W")=="3W"){s=1d(t.11("2W"))*f.g.1z}19 6(t.11("2W").1i("%")!=-1){s=t.11("2W")}}16 o=t.11("8X")?1d(t.11("8X"))*f.g.1z:0;16 a=t.11("8Y")?1d(t.11("8Y"))*f.g.1z:0;16 l=t.11("93")?1d(t.11("93"))*f.g.1z:0;16 c=t.11("92")?1d(t.11("92"))*f.g.1z:0;16 h=t.11("6y")?1d(t.11("6y"))*f.g.1z:0;16 p=t.11("6z")?1d(t.11("6z"))*f.g.1z:0;16 d=t.11("6C")?1d(t.11("6C"))*f.g.1z:0;16 v=t.11("6B")?1d(t.11("6B"))*f.g.1z:0;16 m=t.11("9v");16 g=t.11("9L");6(f.g.3V||f.o.3N>0){6(t.3v("29")&&!t.2n("12-bg")&&t.1g("1h")){t.1a({1c:"1W",1e:"1W"});6((i==0||i=="1W")&&1Q s=="3W"&&s!=0){i=s/t.1e()*t.1c()}6((s==0||s=="1W")&&1Q i=="3W"&&i!=0){s=i/t.1c()*t.1e()}6(i=="1W"){i=t.1c()*f.g.1z}6(s=="1W"){s=t.1e()*f.g.1z}t.1a({1c:i,1e:s})}6(!t.3v("29")){t.1a({1c:i,1e:s,"9M-a2":1d(m)*f.g.1z+"1D","a1-1e":1d(g)*f.g.1z+"1D"})}6(t.3v("1n")&&t.17("1Y").11("3S")){16 y=t.17("1Y");y.1g("1c",1d(y.11("2Y"))*f.g.1z).1g("1e",1d(y.11("2W"))*f.g.1z);t.1a({1c:1d(y.11("2Y"))*f.g.1z,1e:1d(y.11("2W"))*f.g.1z})}t.1a({2e:l+"1D "+a+"1D "+c+"1D "+o+"1D ",9Z:h+"1D",a3:p+"1D",a4:d+"1D",a8:v+"1D"})}6(!t.2n("12-bg")){16 b=t;6(t.23().3v("a")){t=t.23()}16 w=0;6(f.o.7d){w=f.o.7d>0?(f.g.1y()-f.o.7d)/2:0}19 6(f.o.7H){w=f.o.7H>0?(f.g.1y()-f.o.7H)/2:0}w=w<0?0:w;6(n.1i("%")!=-1){t.1a({1m:f.g.1y()/1E*1d(n)-b.1c()/2-o-h})}19 6(w>0||f.g.3V||f.o.3N>0){t.1a({1m:w+1d(n)*f.g.1z})}6(r.1i("%")!=-1){t.1a({1q:f.g.1F()/1E*1d(r)-b.1e()/2-l-d})}19 6(f.g.3V||f.o.3N>0){t.1a({1q:1d(r)*f.g.1z})}}19{16 E=e(u).17(".12-2h");t.1a({1c:"1W",1e:"1W"});i=t.1c();s=t.1e();16 S=f.g.1z;6(f.g.2j.1i("%")!=-1){6(f.g.1y()>i){S=f.g.1y()/i;6(f.g.1F()>s*S){S=f.g.1F()/s}}19 6(f.g.1F()>s){S=f.g.1F()/s;6(f.g.1y()>i*S){S=f.g.1y()/i}}}t.1a({1c:i*S,1e:s*S,3G:E.1c()/2-i*S/2,47:E.1e()/2-s*S/2})}});t.1a({1L:"1R",26:"2P"});f.7w();n();e(14).7x()};f.7w=18(){6(f.g.56){16 e=18(){6(f.g.56.1e()>0){6(f.g.a7>0){f.g.3T.1a({1e:f.g.56.1e()/2})}19{f.g.3T.1a({1e:f.g.56.1e(),47:-f.g.56.1e()/2})}}19{2f(18(){e()},50)}};e()}};f.7A=18(){6(f.o.3N>0){6(e(1Z).1c()<f.o.3N){f.g.3V=1b;f.g.2j=f.o.3N+"1D"}19{f.g.3V=1f;f.g.2j=f.g.7E;f.g.1z=1}}6(e(u).3t(".12-3g-3i-2b").1k){e(u).3t(".12-3g-3i-6A").1a({1c:e(1Z).1c()})}6(f.g.3V){16 t=e(u).23();6(f.o.8w===1b){e(u).1a({1c:"1E%",1e:e(1Z).1e()})}19{e(u).1a({1c:t.1c()-1d(e(u).1a("2e-1m"))-1d(e(u).1a("2e-1G"))});f.g.1z=e(u).1c()/1d(f.g.2j);e(u).1a({1e:f.g.1z*1d(f.g.3o)})}}19{f.g.1z=1;e(u).1a({1c:f.g.2j,1e:f.g.3o})}6(e(u).3t(".12-3g-3i-2b").1k){e(u).3t(".12-3g-3i-6A").1a({1e:e(u).3r(1b)});e(u).3t(".12-3g-3i-2b").1a({1e:e(u).3r(1b)});e(u).3t(".12-3g-3i-6A").1a({1c:e(1Z).1c(),1m:-e(u).3t(".12-3g-3i-2b").4d().1m});6(f.g.2j.1i("%")!=-1){16 n=1d(f.g.2j);16 r=e("5m").1c()/1E*n-(e(u).3x()-e(u).1c());e(u).1c(r)}}e(u).17(".12-2h, .12-1w-2b").1a({1c:f.g.1y(),1e:f.g.1F()});6(f.g.1K&&f.g.1t){f.g.1K.1a({1c:f.g.1y(),1e:f.g.1F()});f.g.1t.1a({1c:f.g.1y(),1e:f.g.1F()})}19{e(u).17(".12-1s").1a({1c:f.g.1y(),1e:f.g.1F()})}};f.86=18(){f.g.1v.1a({1c:f.g.1v.11("2Y")*f.g.1z,1e:f.g.1v.11("2W")*f.g.1z});6(f.g.2t){f.g.1v.1a("1L","2p")}19{f.g.1v.2I(2D)}16 t=6t=6s=6m="1W";6(f.g.1v.11("4g")&&f.g.1v.11("4g").1i("%")!=-1){t=f.g.1y()/1E*1d(f.g.1v.11("4g"))-f.g.1v.1c()/2+1d(e(u).1a("2e-1m"))}19{t=1d(f.g.1v.11("4g"))*f.g.1z}6(f.g.1v.11("5S")&&f.g.1v.11("5S").1i("%")!=-1){6t=f.g.1y()/1E*1d(f.g.1v.11("5S"))-f.g.1v.1c()/2+1d(e(u).1a("2e-1G"))}19{6t=1d(f.g.1v.11("5S"))*f.g.1z}6(f.g.1v.11("4a")&&f.g.1v.11("4a").1i("%")!=-1){6s=f.g.1F()/1E*1d(f.g.1v.11("4a"))-f.g.1v.1e()/2+1d(e(u).1a("2e-1q"))}19{6s=1d(f.g.1v.11("4a"))*f.g.1z}6(f.g.1v.11("68")&&f.g.1v.11("68").1i("%")!=-1){6m=f.g.1F()/1E*1d(f.g.1v.11("68"))-f.g.1v.1e()/2+1d(e(u).1a("2e-1p"))}19{6m=1d(f.g.1v.11("68"))*f.g.1z}f.g.1v.1a({1m:t,1G:6t,1q:6s,1p:6m})};f.9P=18(){f.7R("3Y");16 t=f.g.2j.1i("%")==-1?1d(f.g.2j):f.g.1y();e(u).17(".12-1I-1s a").1a({1c:1d(f.o.8y*f.g.1z),1e:1d(f.o.6c*f.g.1z)});e(u).17(".12-1I-1s a:7T").1a({4h:0});e(u).17(".12-1I-1s").1a({1e:1d(f.o.6c*f.g.1z)});16 n=e(u).17(".12-1I");16 r=f.o.77.1i("%")==-1?1d(f.o.77):1d(t/1E*1d(f.o.77));n.1a({1c:r*1B.27(f.g.1z*1E)/1E});6(n.1c()>e(u).17(".12-1I-1s").1c()){n.1a({1c:e(u).17(".12-1I-1s").1c()})}f.7R("9W")};f.7S=18(t){16 n=t?t:f.g.5r;e(u).17(".12-1I-1s a:2F(.12-4c-"+n+")").2Z().1O(18(){e(14).2m("12-4c-1T").1x().6l(8g,f.o.8I/1E)});e(u).17(".12-1I-1s a.12-4c-"+n).2Z().1o("12-4c-1T").1x().6l(8g,f.o.8P/1E)};f.7Q=18(){6(!e(u).17(".12-1I-1s-2b").2n("12-1I-1s-1V")){16 t=e(u).17(".12-4c-1T").1k?e(u).17(".12-4c-1T").23():1f;6(t){16 n=t.3L().1m+t.1c()/2;16 r=e(u).17(".12-1I-1s-2b").1c()/2-n;r=r<e(u).17(".12-1I-1s-2b").1c()-e(u).17(".12-1I-1s").1c()?e(u).17(".12-1I-1s-2b").1c()-e(u).17(".12-1I-1s").1c():r;r=r>0?0:r;e(u).17(".12-1I-1s").49({3G:r},dT)}}};f.7R=18(t){6(f.o.76&&!e(u).2n("12-1V")){2v(t){1l"3Y":f.g.40.1a({26:"2x",1L:"2p"});1j;1l"9W":f.g.40.1a({26:"2P",1L:"1R"});1j}}};f.49=18(){6(e(u).17(".12-1s").1k>1){f.g.2S=1b}f.g.4f=1f;2o(f.g.4u);2o(f.g.dS);f.g.95=f.g.1K;f.o.b5(f.g);6(f.o.38=="4N"){f.7S();6(!("6k"3R 1Z)){f.7Q()}}f.g.1t.1o("12-bn");16 t=7O=6o=7U=6r=7X=6q=8R=6j=dP=6n=dQ="1W";16 a=7Z=f.g.1y();16 l=7Y=f.g.1F();16 c=f.g.2k=="1U"?f.g.1K:f.g.1t;16 h=c.11("3y")?c.11("3y"):f.o.8D;16 p=f.g.8m[f.g.2k][h];6(p=="1m"||p=="1G"){a=6o=7Z=6q=0;6n=0}6(p=="1q"||p=="1p"){l=t=7Y=6r=0;6j=0}2v(p){1l"1m":7O=6r=0;6j=-f.g.1y();1j;1l"1G":t=7X=0;6j=f.g.1y();1j;1l"1q":7U=6q=0;6n=-f.g.1F();1j;1l"1p":6o=8R=0;6n=f.g.1F();1j}f.g.1K.1a({1m:t,1G:7O,1q:6o,1p:7U});f.g.1t.1a({1c:7Z,1e:7Y,1m:6r,1G:7X,1q:6q,1p:8R});16 d=f.g.1K.11("64")?1d(f.g.1K.11("64")):f.o.6x;16 v=f.g.1K.11("4Q")?1d(f.g.1K.11("4Q")):f.o.4T;16 m=f.g.1K.11("4L")?f.g.1K.11("4L"):f.o.4S;16 g=f.g.1t.11("5l")?1d(f.g.1t.11("5l")):f.o.65;16 y=f.g.1t.11("5O")?1d(f.g.1t.11("5O")):f.o.5T;6(y===0){y=1}16 b=f.g.1t.11("5E")?f.g.1t.11("5E"):f.o.66;16 w=18(){f.g.1K.1N(d+v/15).49({1c:a,1e:l},v,m,18(){E()})};16 E=18(){f.g.95.17(\' > *[1u*="12-l"]\').1O(18(){6(e(14).11("3E")){e(14).11("3E").81()}e(14).1a({dR:"1R"})});f.g.1K=f.g.1t;f.g.dX=f.g.22;f.g.22=f.g.5r;f.o.7N(f.g);6(f.o.3O&&f.o.4C){16 t=f.g.22==f.g.2E?1:f.g.22+1;e(u).17(".12-1s").eq(t-1).17("29:2F(.12-3A)").1O(18(){e(14).3P(18(){e(14).1o("12-3A")}).43(18(){16 t=e(14).11("1h").9h(e(14).11("1h").9m("/")+1,e(14).11("1h").1k);6(1Z.6D){6D(\'2Q 43:\\r\\n\\r\\6E 6T 4y 24 6S 3k 24 2G 4M 3u 2G "\'+t+\'" 3v 6R 2q a 6Q 4O 5o 4o 6U be 3f. 4K 6V 24 6Y 3k 4H 4J 6i 6X 3R 24 6W.\')}19{9d(\'2Q 43:\\r\\n\\r\\6E 6T 4y 24 6S 3k 24 2G 4M 3u 2G "\'+t+\'" 3v 6R 2q a 6Q 4O 5o 4o 6U be 3f. 4K 6V 24 6Y 3k 4H 4J 6i 6X 3R 24 6W.\')}e(14).1o("12-2F-3A")}).1g("1h",e(14).11("1h"))})}e(u).17(".12-1s").2m("12-1T");e(u).17(".12-1s:eq("+(f.g.22-1)+")").1o("12-1T").2m("12-bn");e(u).17(".12-1p-4G a").2m("12-1r-1T");e(u).17(".12-1p-4G a:eq("+(f.g.22-1)+")").1o("12-1r-1T");6(f.g.2z){f.5V()}f.g.2S=1f;6(f.g.2g==1b){f.3z(f.g.1K,18(){f.g.2g=1f})}};16 S=18(t){f.g.1K.17(\' > *[1u*="12-l"]\').1O(18(){6(!e(14).11("2y")){f.5I(e(14))}e(14).2m("12-8C");16 r=e(14).11("3y")?e(14).11("3y"):p;16 i,s;2v(r){1l"1m":i=-f.g.1y();s=0;1j;1l"1G":i=f.g.1y();s=0;1j;1l"1q":s=-f.g.1F();i=0;1j;1l"1p":s=f.g.1F();i=0;1j;1l"3n":s=0;i=0;1j}6(e(14).11("2y")==="1H"){16 o="1H"}19{16 o=e(14).11("5Z")?e(14).11("5Z"):1f}2v(o){1l"1m":i=f.g.1y();s=0;1j;1l"1G":i=-f.g.1y();s=0;1j;1l"1q":s=f.g.1F();i=0;1j;1l"1p":s=-f.g.1F();i=0;1j;1l"3n":s=0;i=0;1j;1l"1H":6(e(14).11("36")){6(e(14).11("36")==="1m"){i=f.g.1y()}19 6(e(14).11("36")==="1G"){i=-f.g.1y()}19{i=-1d(e(14).11("36"))}}19{i=-f.1w.85}6(e(14).11("34")){6(e(14).11("34")==="1q"){s=f.g.1F()}19 6(e(14).11("34")==="1p"){s=-f.g.1F()}19{s=-1d(e(14).11("34"))}}19{s=-f.1w.7D}1j}16 u=5i=5h=4t=5g=58=33=31="1R";u=e(14).11("5W")?e(14).11("5W"):f.1w.8t;5i=e(14).11("7e")?e(14).11("7e"):f.1w.8B;5h=e(14).11("7b")?e(14).11("7b"):f.1w.8d;4t=e(14).11("5U")?e(14).11("5U"):f.1w.7C;5g=e(14).11("7c")?e(14).11("7c"):f.1w.8r;58=e(14).11("7a")?e(14).11("7a"):f.1w.8u;6(4t===1){33=e(14).11("7g")?e(14).11("7g"):f.1w.8U;31=e(14).11("71")?e(14).11("71"):f.1w.8G}19{33=31=4t}16 a=e(14).11("74")?e(14).11("74").1J(" "):f.1w.8i;2a(16 l=0;l<a.1k;l++){6(a[l].1i("%")===-1&&a[l].1i("1m")!==-1&&a[l].1i("1G")!==-1&&a[l].1i("1q")!==-1&&a[l].1i("1p")!==-1){a[l]=""+1d(a[l])*f.g.1z+"1D"}}16 c=a.8H(" ");16 h=e(14).11("7j")?e(14).11("7j"):f.1w.8h;16 d=1d(e(14).1a("1m"));16 v=1d(e(14).1a("1q"));16 m=1d(e(14).1g("1u").1J("12-l")[1]);16 g=e(14).3x()>e(14).3r()?e(14).3x():e(14).3r();16 y=1d(u)===0?e(14).3x():g;16 b=1d(u)===0?e(14).3r():g;6(m===-1&&o!=="1H"||e(14).11("36")==="1m"||e(14).11("36")==="1G"){6(i<0){i=-(f.g.1y()-d+(33/2-.5)*y+1E)}19 6(i>0){i=d+(33/2+.5)*y+1E}}19{i=i*f.g.1z}6(m===-1&&o!=="1H"||e(14).11("34")==="1q"||e(14).11("34")==="1p"){6(s<0){s=-(f.g.1F()-v+(31/2-.5)*b+1E)}19 6(s>0){s=v+(31/2+.5)*b+1E}}19{s=s*f.g.1z}6(m===-1||o==="1H"){16 w=1}19{16 E=f.g.1K.11("7f")?1d(f.g.1K.11("7f")):f.o.8L;16 w=m*E}6(e(14).11("2y")==="1H"){16 S=f.1w.6x;16 x=f.1w.4T;16 T=f.1w.4S}19{16 S=f.o.6x;16 x=f.o.4T;16 T=f.o.4S}16 N=e(14).11("64")?1d(e(14).11("64")):S;16 C=e(14).11("4Q")?1d(e(14).11("4Q")):x;6(C===0){C=1}16 k=e(14).11("4L")?e(14).11("4L"):T;6(t){N=0;C=t}6(e(14).11("4s")){2o(e(14).11("4s"))}16 L={26:"2x"};16 A=e(14);16 O={3l:u,4A:5i,4B:5h,7h:5g,7k:58,5p:33,5n:31,x:-i*w,y:-s*w,1N:N/1P,41:n(k),7V:18(){A.1a(L)}};6(o=="3n"||!o&&r==="3n"||e(14).11("bh")!=="1f"&&e(14).11("2y")==="1H"){O["3e"]=0;L["3e"]=e(14).11("7o")}6(e(14).11("3E")){e(14).11("3E").81()}3b.7z(e(14)[0],{8M:c,8j:h});e(14).11("3E",3b.2q(e(14)[0],C/1P,O))})};16 x=18(){f.g.1t.1N(d+g).49({1c:f.g.1y(),1e:f.g.1F()},y,b)};16 T=18(){6(f.g.3a){d=0}6(1Q f.o.b9==="18"){f.o.b9(f.g,d+g)}f.g.1t.17(\' > *[1u*="12-l"]\').1O(18(){6(!e(14).11("2y")){f.5I(e(14))}6(e(14).11("2y")==="1H"){16 t="1H"}19{16 t=e(14).11("3y")?e(14).11("3y"):p}16 r,i;2v(t){1l"1m":r=-f.g.1y();i=0;1j;1l"1G":r=f.g.1y();i=0;1j;1l"1q":i=-f.g.1F();r=0;1j;1l"1p":i=f.g.1F();r=0;1j;1l"3n":i=0;r=0;1j;1l"1H":6(e(14).11("55")){6(e(14).11("55")==="1m"){r=-f.g.1y()}19 6(e(14).11("55")==="1G"){r=f.g.1y()}19{r=1d(e(14).11("55"))}}19{r=f.1w.bu}6(e(14).11("5k")){6(e(14).11("5k")==="1q"){i=-f.g.1F()}19 6(e(14).11("5k")==="1p"){i=f.g.1F()}19{i=1d(e(14).11("5k"))}}19{i=f.1w.b7}1j}16 s=8c=82=6O=84=8f=4Z=51="1R";s=e(14).11("8x")?e(14).11("8x"):f.1w.b8;8c=e(14).11("ba")?e(14).11("ba"):f.1w.bo;82=e(14).11("bB")?e(14).11("bB"):f.1w.96;6O=e(14).11("8v")?e(14).11("8v"):f.1w.9j;84=e(14).11("bk")?e(14).11("bk"):f.1w.9e;8f=e(14).11("br")?e(14).11("br"):f.1w.9U;6(6O===1){4Z=e(14).11("bm")?e(14).11("bm"):f.1w.9l;51=e(14).11("bp")?e(14).11("bp"):f.1w.9g}19{4Z=51=6O}16 o=e(14).11("bx")?e(14).11("bx").1J(" "):f.1w.9S;2a(16 u=0;u<o.1k;u++){6(o[u].1i("%")===-1&&o[u].1i("1m")!==-1&&o[u].1i("1G")!==-1&&o[u].1i("1q")!==-1&&o[u].1i("1p")!==-1){o[u]=""+1d(o[u])*f.g.1z+"1D"}}16 a=o.8H(" ");16 l=e(14).11("bj")?e(14).11("bj"):f.1w.9X;16 c=1d(e(14).1a("1m"));16 h=1d(e(14).1a("1q"));16 d=1d(e(14).1g("1u").1J("12-l")[1]);6(e(14)[0].1M.1c.1i("%")!==-1){e(14).1a({1c:f.g.1y()/1E*1d(e(14)[0].1M.1c)})}16 v=e(14).3x()>e(14).3r()?e(14).3x():e(14).3r();16 m=1d(s)===0?e(14).3x():v;16 g=1d(s)===0?e(14).3r():v;6(d===-1&&t!=="1H"||e(14).11("55")==="1m"||e(14).11("55")==="1G"){6(r<0){r=-(c+(4Z/2+.5)*m+1E)}19 6(r>0){r=f.g.1y()-c+(4Z/2-.5)*m+1E}}19{r=r*f.g.1z}6(d===-1&&t!=="1H"||e(14).11("5k")==="1q"||e(14).11("5k")==="1p"){6(i<0){i=-(h+(51/2+.5)*g+1E)}19 6(i>0){i=f.g.1F()-h+(51/2-.5)*g+1E}}19{i=i*f.g.1z}6(d===-1||t==="1H"){16 y=1}19{16 b=f.g.1t.11("b2")?1d(f.g.1t.11("b2")):f.o.af;16 y=d*b}6(e(14).11("2y")==="1H"){16 w=f.1w.65;16 E=f.1w.5T;16 S=f.1w.66}19{16 w=f.o.65;16 E=f.o.5T;16 S=f.o.66}16 x=e(14).11("5l")?1d(e(14).11("5l")):w;16 T=e(14).11("5O")?1d(e(14).11("5O")):E;16 N=e(14).11("5E")?e(14).11("5E"):S;16 C=e(14);16 k=18(){6(C.2n("12-2s-3B")){C.1o("12-8C")}6(f.o.5Q==1b){C.17(".12-3m").2u();C.17("2s, 6I").1O(18(){6(1Q e(14)[0].6H!==0){e(14)[0].6H=0}e(14).2u()})}6((!C.2n("12-2s-3B")||C.2n("12-2s-3B")&&f.o.5Q===1f)&&C.11("4z")>0){C.11("4s",2f(18(){f.8F(C)},C.11("4z")))}};e(14).1a({3G:0,47:0});16 L={5p:4Z,5n:51,7h:84,7k:8f,3l:s,4A:8c,4B:82,26:"2P",x:r*y,y:i*y};16 A={3l:0,4A:0,4B:0,7h:0,7k:0,5p:1,5n:1,41:n(N),1N:x/1P,x:0,y:0,7V:18(){k()}};6(t.1i("3n")!=-1||e(14).11("e5")!=="1f"&&e(14).11("2y")==="1H"){L["3e"]=0;A["3e"]=e(14).11("7o")}6(e(14).11("3E")){e(14).11("3E").81()}3b.7z(e(14)[0],{8j:l,8M:a});e(14).11("3E",3b.6L(e(14)[0],T/1P,L,A))})};16 N=18(){6(i(e(u))&&(f.g.1t.11("5q")||f.g.1t.11("5B"))){6(f.g.1t.11("5q")&&f.g.1t.11("5B")){16 t=1B.27(1B.2i()*2);16 n=[["3d",f.g.1t.11("5q")],["b6",f.g.1t.11("5B")]];k(n[t][0],n[t][1])}19 6(f.g.1t.11("5q")){k("3d",f.g.1t.11("5q"))}19{k("b6",f.g.1t.11("5B"))}}19{6(f.g.1t.11("5M")&&f.g.1t.11("5D")){16 t=1B.27(1B.2i()*2);16 n=[["2d",f.g.1t.11("5M")],["b4",f.g.1t.11("5D")]];k(n[t][0],n[t][1])}19 6(f.g.1t.11("5M")){k("2d",f.g.1t.11("5M"))}19 6(f.g.1t.11("5D")){k("b4",f.g.1t.11("5D"))}19{k("2d","1")}}};16 C=18(){6(i(e(u))&&5R.1i("3d")!=-1){k("3d",5R.1J(":")[1])}19{6(5R.1i("3d")!=-1){k("2d","4H")}19{k("2d",5R.1J(":")[1])}}};16 k=18(e,t){16 n=e.1i("e3")==-1?f.t:f.ct;16 r="3d",i,s;6(e.1i("2d")!=-1){r="2d"}6(t.1i("7T")!=-1){s=n["t"+r].1k-1;i="7T"}19 6(t.1i("4H")!=-1){s=1B.27(1B.2i()*o(n["t"+r]));i="2i bc 4H"}19{16 u=t.1J(",");16 a=u.1k;s=1d(u[1B.27(1B.2i()*a)])-1;i="2i bc e2"}L(r,n["t"+r][s])};16 L=18(t,i){16 o=e(u).17(".12-2h");16 a=f.g.1K.17(\'*[1u*="12-l"]\').1k>0?1P:0;16 l=i.6e.21().1i("dZ")==-1?1f:1b;16 c=i.6e.21().1i("e0")==-1?1f:1b;16 h=1Q i.4v;16 p=1Q i.4x;2v(h){1l"3W":h=i.4v;1j;1l"5J":h=1B.27(1B.2i()*(1d(i.4v.1J(",")[1])-1d(i.4v.1J(",")[0])+1))+1d(i.4v.1J(",")[0]);1j;b3:h=1B.27(1B.2i()*(i.4v[1]-i.4v[0]+1))+i.4v[0];1j}2v(p){1l"3W":p=i.4x;1j;1l"5J":p=1B.27(1B.2i()*(1d(i.4x.1J(",")[1])-1d(i.4x.1J(",")[0])+1))+1d(i.4x.1J(",")[0]);1j;b3:p=1B.27(1B.2i()*(i.4x[1]-i.4x[0]+1))+i.4x[0];1j}6(f.g.73()==1b&&f.o.aU==1b||f.g.2t&&f.o.aW==1b){6(h>=15){h=7}19 6(h>=5){h=4}19 6(h>=4){h=3}19 6(h>2){h=2}6(p>=15){p=7}19 6(p>=5){p=4}19 6(p>=4){p=3}19 6(p>2){p=2}6(p>2&&h>2){p=2;6(h>4){h=4}}}16 d=e(u).17(".12-2h").1c()/h;16 v=e(u).17(".12-2h").1e()/p;6(!f.g.2w){f.g.2w=e("<1n>").1o("12-1w-2b").1o("12-4D-2x").1a({1c:o.1c(),1e:o.1e()}).5w(o)}19{f.g.2w.1x(1b,1b).6a().1a({1L:"2p",1c:o.1c(),1e:o.1e()})}16 m=o.1c()-1B.27(d)*h;16 g=o.1e()-1B.27(v)*p;16 y=[];y.bt=18(){16 e=14.1k,t,n,r;6(e==0)1S 1f;9p(--e){t=1B.27(1B.2i()*(e+1));n=14[e];r=14[t];14[e]=r;14[t]=n}1S 14};2a(16 b=0;b<h*p;b++){y.88(b)}2v(i.3Z.ep){1l"5z":y.5z();1j;1l"bv-7M":y=s(p,h,"7M");1j;1l"bv-5z":y=s(p,h,"5z");1j;1l"2i":y.bt();1j}16 w=f.g.1K.17(".12-bg");16 x=f.g.1t.17(".12-bg");6(w.1k==0&&x.1k==0){t="2d";i=e.4F(1b,{},f.t["er"][0]);i.1A.2r=1;i.3Z.1N=0}6(t=="3d"){f.g.3a=(h*p-1)*i.3Z.1N;16 N=0;6(i.2N&&i.2N.2r){N+=i.2N.2r}6(i.2c&&i.2c.2r){N+=i.2c.2r}6(i.2B&&i.2B.2r){N+=i.2B.2r}f.g.3a+=N;16 C=0;6(i.2N&&i.2N.1N){C+=i.2N.1N}6(i.2c&&i.2c.1N){C+=i.2c.1N}6(i.2B&&i.2B.1N){C+=i.2B.1N}f.g.3a+=C}19{f.g.3a=(h*p-1)*i.3Z.1N+i.1A.2r;f.g.57=e("<1n>").1o("12-eU").1C(f.g.2w);f.g.7y=e("<1n>").1o("12-eW").1C(f.g.2w)}16 k=f.g.2k;2a(16 L=0;L<h*p;L++){16 A=L%h==0?m:0;16 O=L>(p-1)*h-1?g:0;16 M=e("<1n>").1o("12-1w-3Z").1a({1c:1B.27(d)+A,1e:1B.27(v)+O}).1C(f.g.2w);16 48,D;6(t=="3d"){M.1o("12-3d-2b");16 P=1B.27(d)+A;16 H=1B.27(v)+O;16 B;6(i.2c.5G=="ao"){6(1B.4m(i.2c.1A.3j)>90&&i.3Z.aY!="as"){B=1B.27(P/7)+A}19{B=P}}19{6(1B.4m(i.2c.1A.2V)>90&&i.3Z.aY!="as"){B=1B.27(H/7)+O}19{B=H}}16 j=P/2;16 F=H/2;16 I=B/2;16 q=18(t,n,r,i,s,o,u,a,f){e("<1n>").1o(t).1a({1c:r,1e:i,"-o-44":"5t("+s+"1D, "+o+"1D, "+u+"1D) 2V("+a+"3J) 3j("+f+"3J) 5s(5y) 4R(1, 1, 1)","-9u-44":"5t("+s+"1D, "+o+"1D, "+u+"1D) 2V("+a+"3J) 3j("+f+"3J) 5s(5y) 4R(1, 1, 1)","-9y-44":"5t("+s+"1D, "+o+"1D, "+u+"1D) 2V("+a+"3J) 3j("+f+"3J) 5s(5y) 4R(1, 1, 1)","-62-44":"5t("+s+"1D, "+o+"1D, "+u+"1D) 2V("+a+"3J) 3j("+f+"3J) 5s(5y) 4R(1, 1, 1)",44:"5t("+s+"1D, "+o+"1D, "+u+"1D) 2V("+a+"3J) 3j("+f+"3J) 5s(5y) 4R(1, 1, 1)"}).1C(n)};q("12-3d-3H",M,0,0,0,0,-I,0,0);16 R=0;16 U=0;16 z=0;6(i.2c.5G=="eX"&&1B.4m(i.2c.1A.2V)>90){q("12-3d-5L",M.17(".12-3d-3H"),P,H,-j,-F,-I,6N,0)}19{q("12-3d-5L",M.17(".12-3d-3H"),P,H,-j,-F,-I,0,6N)}q("12-3d-1p",M.17(".12-3d-3H"),P,B,-j,F-I,0,-90,0);q("12-3d-1q",M.17(".12-3d-3H"),P,B,-j,-F-I,0,90,0);q("12-3d-aw",M.17(".12-3d-3H"),P,H,-j,-F,I,0,0);q("12-3d-1m",M.17(".12-3d-3H"),B,H,-j-I,-F,0,0,-90);q("12-3d-1G",M.17(".12-3d-3H"),B,H,j-I,-F,0,0,90);48=M.17(".12-3d-aw");6(i.2c.5G=="ao"){6(1B.4m(i.2c.1A.3j)>90){D=M.17(".12-3d-5L")}19{D=M.17(".12-3d-1m, .12-3d-1G")}}19{6(1B.4m(i.2c.1A.2V)>90){D=M.17(".12-3d-5L")}19{D=M.17(".12-3d-1q, .12-3d-1p")}}16 W=y[L]*i.3Z.1N;16 X=f.g.2w.17(".12-3d-2b:eq("+L+") .12-3d-3H");16 V=1H aZ;6(i.2N&&i.2N.1A){i.2N.1A.1N=i.2N.1A.1N?(i.2N.1A.1N+W)/1P:W/1P;V.2q(X[0],i.2N.2r/1P,r(i.2N.1A,i.2N.4I))}19{i.2c.1A.1N=i.2c.1A.1N?(i.2c.1A.1N+W)/1P:W/1P}V.2q(X[0],i.2c.2r/1P,r(i.2c.1A,i.2c.4I));6(i.2B){6(!i.2B.1A){i.2B.1A={}}V.2q(X[0],i.2B.2r/1P,r(i.2B.1A,i.2B.4I,"2B"))}}19{16 J=2X=2O=2H="1W";16 K=6h=1;6(i.1A.5G=="2i"){16 Q=["1q","1p","1G","1m"];16 G=Q[1B.27(1B.2i()*Q.1k)]}19{16 G=i.1A.5G}6(i.6e.21().1i("aA")!=-1&&L%2==0){6(k=="1U"){k="1X"}19{k="1U"}}6(k=="1U"){2v(G){1l"1q":G="1p";1j;1l"1p":G="1q";1j;1l"1m":G="1G";1j;1l"1G":G="1m";1j;1l"7F":G="7I";1j;1l"7G":G="7K";1j;1l"7K":G="7G";1j;1l"7I":G="7F";1j}}2v(G){1l"1q":J=2O=-M.1e();2X=2H=0;1j;1l"1p":J=2O=M.1e();2X=2H=0;1j;1l"1m":J=2O=0;2X=2H=-M.1c();1j;1l"1G":J=2O=0;2X=2H=M.1c();1j;1l"7F":J=M.1e();2O=0;2X=M.1c();2H=0;1j;1l"7G":J=M.1e();2O=0;2X=-M.1c();2H=0;1j;1l"7K":J=-M.1e();2O=0;2X=M.1c();2H=0;1j;1l"7I":J=-M.1e();2O=0;2X=-M.1c();2H=0;1j}f.g.52=i.1A.5u?i.1A.5u:1;6(l==1b&&f.g.52!=1){J=J/2;2O=2O/2;2X=2X/2;2H=2H/2}2v(i.1A.4W){1l"3n":J=2O=2X=2H=0;K=0;6h=1;1j;1l"eK":K=0;6h=1;6(f.g.52==1){2O=2H=0}1j}6((i.1A.3s||i.1A.2V||i.1A.3j||f.g.52!=1)&&!f.g.2t&&i.1A.4W!="1s"){M.1a({4D:"2P"})}19{M.1a({4D:"2x"})}6(l==1b){f.g.57.1a({4D:"2P"})}19{f.g.57.1a({4D:"2x"})}6(c==1b||i.1A.4W=="1s"||l==1b){16 Y=M.1C(f.g.57);16 Z=M.7v().1C(f.g.7y);48=e("<1n>").1o("12-eJ").1C(Y)}19{16 Z=M.1C(f.g.7y)}D=e("<1n>").1o("12-ez").1C(Z).1a({1q:-J,1m:-2X,es:"2p",3e:K});16 et=y[L]*i.3Z.1N;16 59=i.1A.3s?i.1A.3s:0;16 70=i.1A.2V?i.1A.2V:0;16 6Z=i.1A.3j?i.1A.3j:0;6(k=="1U"){59=-59;70=-70;6Z=-6Z}3b.6L(D[0],i.1A.2r/1P,{3l:59,4A:70,4B:6Z,5u:f.g.52},{1N:et/1P,1q:0,1m:0,3e:6h,3l:0,4A:0,4B:0,5u:1,41:n(i.1A.4I)});6(c==1b&&(x.1k<1||x.1k>0&&(x.1g("1h").21().1i("4P")!=-1||x.1c()<f.g.1y()||x.1e()<f.g.1F()))){3b.2q(48[0],i.1A.2r/1P,{1N:et/1P,3e:0,41:n(i.1A.4I)})}6((i.1A.4W=="1s"||l==1b)&&i.6e.21().1i("aA")==-1){16 4o=0;6(59!=0){4o=-59}3b.2q(48[0],i.1A.2r/1P,{1N:et/1P,1q:2O,1m:2H,3l:4o,5u:f.g.52,3e:K,41:n(i.1A.4I)})}}6(w.1k){6(t=="3d"||t=="2d"&&(c==1b||i.1A.4W=="1s"||l==1b)){48.4e(e("<29>").1g("1h",w.1g("1h")).1a({1c:w[0].1M.1c,1e:w[0].1M.1e,3G:3c(w.1a("4h-1m"))-3c(M.3L().1m),47:3c(w.1a("4h-1q"))-3c(M.3L().1q)}))}19 6(f.g.57.2Z().1k==0){f.g.57.4e(e("<29>").1g("1h",w.1g("1h")).1a({1c:w[0].1M.1c,1e:w[0].1M.1e,3G:3c(w.1a("4h-1m")),47:3c(w.1a("4h-1q"))}))}}6(x.1k){D.4e(e("<29>").1g("1h",x.1g("1h")).1a({1c:x[0].1M.1c,1e:x[0].1M.1e,3G:3c(x.1a("4h-1m"))-3c(M.3L().1m),47:3c(x.1a("4h-1q"))-3c(M.3L().1q)}))}}16 53=f.g.1K;16 2K=f.g.1t;2f(18(){53.17(".12-bg").1a({26:"2x"})},50);2K.17(".12-bg").1a({26:"2x"});f.g.2w.2m("12-4D-2x");S(a);6(a===0){a=10}2f(18(){53.1a({1c:0})},a);16 8p=1d(2K.11("6f"))?1d(2K.11("6f")):0;16 at=f.g.3a+8p>0?f.g.3a+8p:0;2f(18(){6(f.g.2g==1b){f.g.2w.6a();53.2m("12-1T");f.3z(2K,18(){f.g.2g=1f})}T();6(2K.17(".12-bg").1k<1||2K.17(".12-bg").1k>0&&2K.17(".12-bg").1g("1h").21().1i("4P")!=-1){f.g.2w.1N(89).3M(2D,18(){e(14).6a().aM()})}2K.1a({1c:f.g.1y(),1e:f.g.1F()})},at);6(f.g.3a<2D){f.g.3a=1P}2f(18(){f.g.2w.1o("12-4D-2x");2K.1o("12-1T");6(2K.17(".12-bg").1k){2K.17(".12-bg").1a({1L:"1R",26:"2P"});6(f.g.2t){2K.17(".12-bg").1a("1L","2p");2f(18(){E()},4w)}19{2K.17(".12-bg").2I(4w,18(){E()})}}19{E()}},f.g.3a)};16 A=18(){f.g.1t.17(\' > *[1u*="12-l"]\').1O(18(){e(14).1a({26:"2x"})});f.g.8A=e(u).4d().1q;e(1Z).3P(18(){2f(18(){f.g.8A=e(u).4d().1q},20)});16 t=18(){6(e(1Z).eD()+e(1Z).1e()-f.g.1F()/2>f.g.8A){f.g.6g=1b;6(f.g.7P===1b){f.o.4r=1b;f.28()}T()}};e(1Z).dO(18(){6(!f.g.6g){t()}});t()};16 O=(f.g.1t.11("5q")||f.g.1t.11("5M"))&&f.t||(f.g.1t.11("5B")||f.g.1t.11("5D"))&&f.ct?"1H":"5H";6(!f.g.1t.11("2y")){f.5I(f.g.1t)}6(f.g.1t.11("2y")==="1H"){O="1H"}6(f.o.91){O="aL"}6(f.o.4X&&!f.g.6g){6(f.g.2E==1){16 d=0;f.o.7N(f.g)}19{16 M=1d(f.g.1t.11("6f"))?1d(f.g.1t.11("6f")):0;16 48=O=="1H"?0:v;f.g.aG=2f(18(){E()},48+1B.4m(M))}f.g.3a=1b;6(f.o.8n===1b){A()}19{f.g.6g=1b;T()}f.g.1t.1a({1c:f.g.1y(),1e:f.g.1F()});6(!f.g.2t){f.g.1t.17(".12-bg").1a({1L:"1R"}).2I(f.o.7B)}f.g.4f=1f}19{2v(O){1l"5H":f.g.3a=1f;6(f.g.2w){f.g.2w.6a()}w();S();x();T();1j;1l"1H":6(1Q 5R!="2L"){C()}19{N()}1j;1l"aL":L(f.o.91.4W,f.o.91.cY);1j}}};f.5I=18(e){16 t=e.11("12")||!e.11("12")&&!e.11("6b")&&!e.11("3y")&&!e.11("5Z")&&!e.11("5l")&&!e.11("64")&&!e.11("5O")&&!e.11("4Q")&&!e.11("4z")&&!e.11("5E")&&!e.11("4L")&&!e.11("8v")&&!e.11("5U")&&!e.11("8x")&&!e.11("5W")?"1H":"5H";e.11("2y",t)};f.8F=18(e){6(!e.11("2y")){f.5I(e)}e.2m("12-8C");16 t=f.g.1K;6(f.g.2k!="1U"&&f.g.1t){t=f.g.1t}16 r=t.11("3y")?t.11("3y"):f.o.8D;16 i=f.g.8m[f.g.2k][r];16 s=e.11("3y")?e.11("3y"):i;16 o,u;2v(s){1l"1m":o=-f.g.1y();u=0;1j;1l"1G":o=f.g.1y();u=0;1j;1l"1q":u=-f.g.1F();o=0;1j;1l"1p":u=f.g.1F();o=0;1j;1l"3n":u=0;o=0;1j}6(e.11("2y")==="1H"){16 a="1H"}19{16 a=e.11("5Z")?e.11("5Z"):1f}2v(a){1l"1m":o=f.g.1y();u=0;1j;1l"1G":o=-f.g.1y();u=0;1j;1l"1q":u=f.g.1F();o=0;1j;1l"1p":u=-f.g.1F();o=0;1j;1l"3n":u=0;o=0;1j;1l"1H":6(e.11("36")){6(e.11("36")==="1m"){o=f.g.1y()}19 6(e.11("36")==="1G"){o=-f.g.1y()}19{o=-1d(e.11("36"))}}19{o=-f.1w.85}6(e.11("34")){6(e.11("34")==="1q"){u=f.g.1F()}19 6(e.11("34")==="1p"){u=-f.g.1F()}19{u=-1d(e.11("34"))}}19{u=-f.1w.7D}1j}16 l=5i=5h=4t=5g=58=33=31="1R";l=e.11("5W")?e.11("5W"):f.1w.8t;5i=e.11("7e")?e.11("7e"):f.1w.8B;5h=e.11("7b")?e.11("7b"):f.1w.8d;4t=e.11("5U")?e.11("5U"):f.1w.7C;5g=e.11("7c")?e.11("7c"):f.1w.8r;58=e.11("7a")?e.11("7a"):f.1w.8u;6(4t===1){33=e.11("7g")?e.11("7g"):f.1w.8U;31=e.11("71")?e.11("71"):f.1w.8G}19{33=31=4t}16 c=e.11("74")?e.11("74").1J(" "):f.1w.8i;2a(16 h=0;h<c.1k;h++){6(c[h].1i("%")===-1&&c[h].1i("1m")!==-1&&c[h].1i("1G")!==-1&&c[h].1i("1q")!==-1&&c[h].1i("1p")!==-1){c[h]=""+1d(c[h])*f.g.1z+"1D"}}16 p=c.8H(" ");16 d=e.11("7j")?e.11("7j"):f.1w.8h;16 v=1d(e.1a("1m"));16 m=1d(e.1a("1q"));16 g=1d(e.1g("1u").1J("12-l")[1]);16 y=e.3x()>e.3r()?e.3x():e.3r();16 b=1d(l)===0?e.3x():y;16 w=1d(l)===0?e.3r():y;6(g===-1&&a!=="1H"||e.11("36")==="1m"||e.11("36")==="1G"){6(o<0){o=-(f.g.1y()-v+(33/2-.5)*b+1E)}19 6(o>0){o=v+(33/2+.5)*b+1E}}19{o=o*f.g.1z}6(g===-1&&a!=="1H"||e.11("34")==="1q"||e.11("34")==="1p"){6(u<0){u=-(f.g.1F()-m+(31/2-.5)*w+1E)}19 6(u>0){u=m+(31/2+.5)*w+1E}}19{u=u*f.g.1z}6(g===-1||a==="1H"){16 E=1}19{16 S=f.g.1K.11("7f")?1d(f.g.1K.11("7f")):f.o.8L;16 E=g*S}6(e.11("2y")==="1H"){16 x=f.1w.4T;16 T=f.1w.4S}19{16 x=f.o.4T;16 T=f.o.4S}16 N=e.11("4Q")?1d(e.11("4Q")):x;6(N===0){N=1}16 C=e.11("4L")?e.11("4L"):T;16 k={26:"2x"};16 L={3l:l,4A:5i,4B:5h,7h:5g,7k:58,5p:33,5n:31,x:-o*E,y:-u*E,41:n(C),7V:18(){e.1a(k)}};6(a=="3n"||!a&&s=="3n"||e.11("bh")!=="1f"&&e.11("2y")==="1H"){L["3e"]=0;k["3e"]=e.11("7o")}3b.7z(e[0],{8j:d,8M:p});3b.2q(e[0],N/1P,L)};f.3P()};16 n=18(e){16 t;6(e.21().1i("bl")!==-1||e.21().1i("8T")!==-1){t=8K.8Q}19 6(e.21().1i("7J")!==-1){16 n=e.21().1J("7J")[1];t=1Z[n.8q(0).8Z()+n.8V(1)].94}19 6(e.21().1i("8s")!==-1){16 n=e.21().1J("8s")[1];t=1Z[n.8q(0).8Z()+n.8V(1)].97}19 6(e.21().1i("8o")!==-1){16 n=e.21().1J("8o")[1];t=1Z[n.8q(0).8Z()+n.8V(1)].9f}1S t};16 r=18(e,t,r,i){6(1Q t==="2L"){16 t="cK"}16 s={};6(e.3s!==i){s.3l=e.3s}6(e.3j!==i){s.4B=e.3j}6(e.2V!==i){s.4A=e.2V}6(r==="2B"){s.5p=s.5n=s.9i=1}19 6(e.4R!==i){s.5p=s.5n=s.9i=e.4R}6(e.1N){s.1N=r==="2B"?e.1N/1P:e.1N}s.41=n(t);1S s};16 i=18(t){16 n=e("<1n>"),r=1f,i=1f,s=["cI","cH","cE","cF","cG"];44=["cL","cM","cS","cT","cR"];2a(16 o=s.1k-1;o>=0;o--){r=r?r:n[0].1M[s[o]]!=2L}2a(16 o=44.1k-1;o>=0;o--){n.1a("44-1M","9N-3d");i=i?i:n[0].1M[44[o]]=="9N-3d"}6(r&&n[0].1M[s[4]]!=2L){n.1g("69","12-cO").1C(t);r=n[0].cP===3&&n[0].dc===9;n.9Q()}1S r&&i};16 s=18(e,t,n){16 r=[];6(n=="7M"){2a(16 i=0;i<e;i++){2a(16 s=0;s<t;s++){r.88(i+s*e)}}}19{2a(16 i=e-1;i>-1;i--){2a(16 s=t-1;s>-1;s--){r.88(i+s*e)}}}1S r};16 o=18(e){16 t=0;2a(16 n 3R e){6(e.dd(n)){++t}}1S t};16 u=18(){9w=18(e){e=e.21();16 t=/(9x)[ \\/]([\\w.]+)/.5Y(e)||/(62)[ \\/]([\\w.]+)/.5Y(e)||/(dC)(?:.*3X|)[ \\/]([\\w.]+)/.5Y(e)||/(98) ([\\w.]+)/.5Y(e)||e.1i("a6")<0&&/(dD)(?:.*? dB:([\\w.]+)|)/.5Y(e)||[];1S{8S:t[1]||"",3X:t[2]||"0"}};16 e=9w(46.42),t={};6(e.8S){t[e.8S]=1b;t.3X=e.3X}6(t.9x){t.62=1b}19 6(t.62){t.dy=1b}1S t};dz=18(e,t){16 n=["62","dE","9y","9u","o",""];16 r=0,i,s;9p(r<n.1k&&!e[i]){i=t;6(n[r]==""){i=i.9s(0,1).21()+i.9s(1)}i=n[r]+i;s=1Q e[i];6(s!="2L"){n=[n[r]];1S s=="18"?e[i]():e[i]}r++}};t.78={3X:"5.3.0",73:18(){6(46.42.3F(/dI/i)||46.42.3F(/dw/i)||46.42.3F(/dv/i)||46.42.3F(/dj/i)||46.42.3F(/dk/i)||46.42.3F(/di/i)||46.42.3F(/dh de/i)){1S 1b}19{1S 1f}},dg:18(e){6(e.1a("2e-1p")=="1W"||e.1a("2e-1p")=="1R"||e.1a("2e-1p")==0||e.1a("2e-1p")=="dl"){1S 1b}19{1S 1f}},2t:u().98&&u().3X<9?1b:1f,7P:1f,2T:1f,4E:1f,2z:1f,2S:1f,2E:7l,2k:"1X",4u:7l,1y:7l,1F:7l,8m:{1U:{1m:"1G",1G:"1m",1q:"1p",1p:"1q"},1X:{1m:"1m",1G:"1G",1q:"1q",1p:"1p"}},v:{d:4w,7u:8g,8e:4w}};t.ar={bu:80,b7:0,5T:1P,65:0,66:"6v",2I:1b,b8:0,bo:0,96:0,9j:1,9l:1,9g:1,9e:0,9U:0,9S:["50%","50%","0"],9X:4w,85:-80,7D:0,4T:a5,dq:0,4S:"6v",3M:1b,8t:0,8B:0,8d:0,7C:1,8U:1,8G:1,8r:0,8u:0,8i:["50%","50%","0"],8h:4w};t.9b={6P:bs};t.9c={9n:1b,3N:0,7d:0,8w:1f,1C:"",4r:1b,8n:1b,9r:1b,2U:1,4X:1b,7B:89,4b:0,75:1b,7W:1f,7p:1f,3p:"cJ",3K:"/5P/cU/",7r:"87",7i:1f,8b:1b,72:1b,79:1b,ad:1b,ah:1b,ai:1b,76:1f,aV:1f,aN:1b,38:"1V",77:"60%",8y:1E,6c:60,8P:35,8I:1E,5Q:1b,2C:"1W",aH:"eI.eE",3O:1b,4C:1b,1v:1f,aD:"1m: -aE; 1q: -aE;",8k:1f,aF:"eH",aU:1b,aW:1b,8W:1f,aT:0,aP:eu,eV:"",ac:18(e){},ab:18(e){},ae:18(e){},am:18(e){},b5:18(e){},7N:18(e){},6J:18(e){},6F:18(e){},6P:bs,8D:"1G",af:.45,8L:.45,5T:1P,4T:1P,66:"6v",4S:"6v",65:0,6x:0}})(3I)',62,928,'||||||if|||||||||||||||||||||||||||||||||||||||||||||||||||||||||data|ls||this||var|find|function|else|css|true|width|parseInt|height|false|attr|src|indexOf|break|length|case|left|div|addClass|bottom|top|nav|slide|nextLayer|class|yourLogo|lt|stop|sliderWidth|ratio|transition|Math|appendTo|px|100|sliderHeight|right|new|thumbnail|split|curLayer|display|style|delay|each|1e3|typeof|none|return|active|prev|hover|auto|next|iframe|window||toLowerCase|curLayerIndex|parent|the||visibility|floor|start|img|for|container|animation||padding|setTimeout|resize|inner|random|sliderOriginalWidth|prevNext|replace|removeClass|hasClass|clearTimeout|block|to|duration|video|ie78|click|switch|ltContainer|hidden|transitiontype|autoSlideshow|originalAutoSlideshow|after|autoPauseSlideshow|300|layersNum|not|image|L2|fadeIn|wrapper|ot|undefined|cttl|before|T2|visible|LayerSlider|href|isAnimating|paused|firstSlide|rotateX|originalHeight|L1|originalWidth|children|circleTimer|curSubScaleY|bottomWrapper|curSubScaleX|offsetyout||offsetxout||thumbnailNavigation||totalDuration|TweenLite|parseFloat||opacity|loaded|wp|layerSlider|fullwidth|rotateY|of|rotation|videopreview|fade|sliderOriginalHeight|skin|barTimer|outerHeight|rotate|closest|background|is|preventDefault|outerWidth|slidedirection|makeResponsive|preloaded|layer|param|curSlideTime|tr|match|marginLeft|box|jQuery|deg|skinsPath|position|fadeOut|responsiveUnder|imgPreload|load|pausedSlideTime|in|videoSrc|shadow|com|responsiveMode|number|version|on|tile|thumbsWrapper|ease|userAgent|error|transform||navigator|marginTop|_|animate|originalTop|loops|thumb|offset|append|isLoading|originalLeft|margin|border|autoplay|startSlideTime|tn|abs|html|it|forcehide|nextLoop|autoStart|showUntilTimer|curSubScale|slideTimer|cols|500|rows|like|showuntil|rotationX|rotationY|lazyLoad|overflow|pausedByVideo|extend|slidebuttons|all|easing|your|Please|easingout|or|always|location|png|durationout|scale3d|easingOut|durationOut|youtube|change|type|animateFirstSlide|rel|nextSubScaleX||nextSubScaleY|scale2D|st|touches|offsetxin|shadowImg|curTiles|curSubSkewY|tt|Date|parallaxlevel|getTime|init|thumbnails|fisrtSlide|curSubSkewX|curSubRotateY|curSubRotateX|vimeo|offsetyin|delayin|body|scaleY|and|scaleX|transition3d|nextLayerIndex|rotateZ|translate3d|scale|player|prependTo|youtu|0deg|reverse|vpcontainer|customtransition3d|span|customtransition2d|easingin|trim|direction|old|transitionType|string|touchEndX|back|transition2d|pause|durationin|layerslider|autoPlayVideos|LSCustomTransition|originalRight|durationIn|scaleout|timer|rotateout|removeAttr|exec|slideoutdirection||document|webkit|WordPress|delayout|delayIn|easingIn|url|originalBottom|id|empty|slidedelay|tnHeight|li|name|timeshift|firstSlideAnimated|O2|images|layerMarginLeft|ontouchstart|fadeTo|oB|layerMarginTop|curLayerTop|touchStartX|nextLayerTop|nextLayerLeft|oT|oR|showShadow|easeInOutQuint|videoTimer|delayOut|originalBorderLeft|originalBorderRight|helper|originalBorderBottom|originalBorderTop|console|nIt|cbNext|bind|currentTime|audio|cbPrev|clicked|fromTo|nothumb|180|nextSubScale|slideDelay|wrong|pointing|URL|seems|cannot|check|slider|used|URLs|rt|nt|scaleyout|navStartStop|isMobile|transformoriginout|forceLoopNum|hoverBottomNav|tnContainerWidth|global|navButtons|skewyout|rotateyout|skewxout|layersContainer|rotatexout|parallaxout|scalexout|skewX|globalBGImage|perspectiveout|skewY|null|http|link|originalOpacity|randomSlideshow|videoDuration|globalBGColor|alt|pageX|fo|clone|resizeShadow|dequeue|nextTiles|set|resizeSlider|sliderFadeInDuration|scaleOut|offsetYOut|sliderOriginalWidthRU|topleft|topright|sublayerContainer|bottomright|easeinout|bottomleft|index|forward|cbAnimStop|curLayerRight|originalAutoStart|scrollThumb|bottomNavSizeHelper|changeThumb|last|curLayerBottom|onComplete|twoWaySlideshow|nextLayerRight|nextLayerHeight|nextLayerWidth||kill|nextSubRotateY|250|nextSubSkewX|offsetXOut|resizeYourLogo|transparent|push|350|forceHideControls|navPrevNext|nextSubRotateX|rotateYOut|fi|nextSubSkewY|750|perspectiveOut|transformOriginOut|transformPerspective|yourLogoLink|defaults|slideDirections|startInViewport|easein|ut|charAt|skewXOut|easeout|rotateOut|skewYOut|scalein|fullScreen|rotatein|tnWidth|cssContainer|sliderTop|rotateXOut|videohack|slideDirection|150|sublayerShowUntil|scaleYOut|join|tnInactiveOpacity|script|Linear|parallaxOut|transformOrigin|content|linkto|tnActiveOpacity|easeNone|nextLayerBottom|browser|linear|scaleXOut|slice|hideOnMobile|originalPaddingLeft|originalPaddingRight|toUpperCase||slideTransition|originalPaddingBottom|originalPaddingTop|easeInOut|stopLayer|rotateYIn|easeOut|msie|json|head|slideTransitions|options|alert|skewXIn|easeIn|scaleYIn|substring|scaleZ|scaleIn|callback|scaleXIn|lastIndexOf|responsive|layerSliderCustomTransitions|while|showSlider|pauseOnHover|substr|gi|ms|originalFontSize|uaMatch|chrome|moz|disabled|norotate|t2|t3|t4|ieEasing|t1|forcestop|firstLayer|add|2e3|text|originalLineHeight|font|preserve|entry|resizeThumb|remove|group|transformOriginIn|getJSON|skewYIn|embed|off|perspectiveIn|initialized|borderLeftWidth|hash|line|size|borderRightWidth|borderTopWidth|400|compatible|shadowBtmMod|borderBottomWidth|api|looks|cbStart|cbInit|keybNav|cbStop|parallaxIn|mousemove|touchNav|hoverPrevNext|createStyleSheet|relative|sides|cbPause||horizontal|object|opaque|layerTransitions|large||oldjquery|lsShowNotice|front|fn|jquery|above|mirror|plugin|loading|yourLogoStyle|10px|yourLogoTarget|t5|youtubePreview|hider|half|update|forced|show|showCircleTimer|parallaxStartY|hideOver|layerSliderTransitions|pageY|parallaxStartX|hideUnder|optimizeForMobile|showBarTimer|optimizeForIE78|meta|depth|TimelineLite|library|playvideo|parallaxin|default|custom2d|cbAnimStart|custom3d|offsetYIn|rotateIn|cbTimeLineStart|rotatexin|clientX|from|originalEvent||Play||fadeout|It|perspectivein|skewxin|swing|scalexin|animating|rotateXIn|scaleyin|which|skewyin|4e3|randomize|offsetXIn|col|issue|transformoriginin||wmode|strong|rotateyin|touchend|Quad|gif|insertAfter|gpuhack|insertBefore|important|stylesheet|resume|bar|zIndex|center|quad|restart|onReverseComplete|queue|mouseenter|orientationchange|animateFirstLayer|backgroundColor|backgroundImage|indicator|static|blank|deeplink|yourlogo|file|gdata|html5|below|touchmove|640|touchstart|feeds|videos|media|seconds|enabled|keydown|bock|originalMarkup|vi|v2|touchscroll|wrapAll|yt|mouseleave|circle|round|outline|textDecoration|target|play||wpVersion|thumbnail_large|cursor|pointer|sideright|ended|absolute|sideleft|lswpVersion|defaultInitData|msPerspective|MozPerspective|WebkitPerspective|OPerspective|perspective|v5|easeInOutQuart|transformStyle|OTransformStyle|Advanced|test3d|offsetHeight|Settings|WebkitTransformStyle|msTransformStyle|MozTransformStyle|skins|you|because|loads|obj|theme|with|browsers|older|Updater|use|requires|using|are|least|newer|Important|higher|offsetLeft|hasOwnProperty|Phone|main|isHideOn3D|Windows|BlackBerry|iPad|iPod|0px|copy|sliders||problems|showUntil|navigate|causing|area|admin|iPhone|webOS|within|safari|lsPrefixes|Troubleshooting|rv|opera|mozilla|khtml|option|enable|page|Android|Put|JS|extra|includes|quart|scroll|layerMarginRight|layerMarginBottom|filter|changeTimer|600|Trident|enableCSS3|log|prevLayerIndex|that|carousel|crossfad|forceStop|specified|custom|another|fadein|multiple|450|Quint|sine|Sine|quint|Cubic|Quart|cubic|expo|Expo|Back|bounce|Bounce|Elastic||elastic|circ|Circ|sequence||t2d|dispay||1e6|You|can|read|more|nexttile|wordpress|faq|IE|scrollTop|jpg|support|kreaturamedia|_self|maxresdefault|curtile|mixed|exclam|title|redraw|userInitData|continue|here|clicking|updating|about|curtiles|staticImage|nexttiles|vertical'.split('|'),0,{}));

/* Write here your custom javascript codes */

/*
 * Template Name: Unify - Responsive Bootstrap Template
 * Description: Business, Corporate, Portfolio, E-commerce and Blog Theme.
 * Version: 1.6
 * Author: @htmlstream
 * Website: http://htmlstream.com
*/

var App = function () {
    //Bootstrap Tooltips and Popovers
    function handleBootstrap() {
        /*Bootstrap Carousel*/
        jQuery('.carousel').carousel({
            interval: 15000,
            pause: 'hover'
        });

        /*Tooltips*/
        jQuery('.tooltips').tooltip();
        jQuery('.tooltips-show').tooltip('show');      
        jQuery('.tooltips-hide').tooltip('hide');       
        jQuery('.tooltips-toggle').tooltip('toggle');       
        jQuery('.tooltips-destroy').tooltip('destroy');       

        /*Popovers*/
        jQuery('.popovers').popover();
        jQuery('.popovers-show').popover('show');
        jQuery('.popovers-hide').popover('hide');
        jQuery('.popovers-toggle').popover('toggle');
        jQuery('.popovers-destroy').popover('destroy');
    }

    //Search Box (Header)
    function handleSearch() {    
        jQuery('.search').click(function () {
            if(jQuery('.search-btn').hasClass('fa-search')){
                jQuery('.search-open').fadeIn(500);
                jQuery('.search-btn').removeClass('fa-search');
                jQuery('.search-btn').addClass('fa-times');
            } else {
                jQuery('.search-open').fadeOut(500);
                jQuery('.search-btn').addClass('fa-search');
                jQuery('.search-btn').removeClass('fa-times');
            }   
        }); 
    }

    //Sidebar Navigation Toggle
    function handleToggle() {
        jQuery('.list-toggle').on('click', function() {
            jQuery(this).toggleClass('active');
        });

        /*
        jQuery('#serviceList').on('shown.bs.collapse'), function() {
            jQuery(".servicedrop").addClass('glyphicon-chevron-up').removeClass('glyphicon-chevron-down');
        }

        jQuery('#serviceList').on('hidden.bs.collapse'), function() {
            jQuery(".servicedrop").addClass('glyphicon-chevron-down').removeClass('glyphicon-chevron-up');
        }
        */
    }

    //Fixed Header
    function handleHeader() {
         jQuery(window).scroll(function() {
            if (jQuery(window).scrollTop()>100){
                jQuery(".header-fixed .header-sticky").addClass("header-fixed-shrink");
            }
            else {
                jQuery(".header-fixed .header-sticky").removeClass("header-fixed-shrink");
            }
        });
    }

    //Header Mega Menu
    function handleMegaMenu() {
        jQuery(document).on('click', '.mega-menu .dropdown-menu', function(e) {
            e.stopPropagation()
        })
    }

    return {
        init: function () {
            handleBootstrap();
            handleSearch();
            handleToggle();
            handleHeader();
            handleMegaMenu();
        },

        //Clients Logo
        initSliders: function () {
            jQuery('#clients-flexslider').flexslider({
                animation: "slide",
                easing: "swing",
                animationLoop: true,
                itemWidth: 1,
                itemMargin: 1,
                minItems: 2,
                maxItems: 9,
                controlNav: false,
                directionNav: false,
                move: 2
            });
            
            jQuery('#clients-flexslider1').flexslider({
                animation: "slide",
                easing: "swing",
                animationLoop: true,
                itemWidth: 1,
                itemMargin: 1,
                minItems: 2,
                maxItems: 5,
                controlNav: false,
                directionNav: false,
                move: 2
            });
            
            jQuery('#photo-flexslider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                itemWidth: 80,
                itemMargin: 0
            }); 
            
            jQuery('#testimonal_carousel').collapse({
                toggle: false
            });
        },

        //Counters 
        initCounter: function () {
            jQuery('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        },

        //Parallax Backgrounds
        initParallaxBg: function () {
             jQuery(window).load(function() {
                jQuery('.parallaxBg').parallax("50%", 0.2);
                jQuery('.parallaxBg1').parallax("50%", 0.4);
            });
        },

    };

}();
var LayerSlider = function () {

    return {

        //Layer Slider
        initLayerSlider: function () {
		    $(document).ready(function(){
		        jQuery("#layerslider").layerSlider({
			        skin: 'fullwidth',
			        responsive : true,
			        responsiveUnder : 960,
			        layersContainer : 960,
			        skinsPath: 'plugins/layer-slider/layerslider/skins/'
			    });
		    });     
        }

    };
}();        
var OwlRecentWorks = function () {

    return {

        ////Owl Recent Works v1
        initOwlRecentWorksV1: function () {
            jQuery(document).ready(function() {
            var owl = jQuery(".owl-recent-works-v1");
                owl.owlCarousel({
                    items: [4],
                    itemsDesktop : [1000,4],
                    itemsDesktopSmall : [900,3],
                    itemsTablet: [600,2],
                    itemsMobile : [479,1],
                    slideSpeed: 1000
                });

                // Custom Navigation Events
                jQuery(".next-v2").click(function(){
                    owl.trigger('owl.next');
                })
                jQuery(".prev-v2").click(function(){
                    owl.trigger('owl.prev');
                })
            });            
        },  

        ////Owl Recent Works v2
        initOwlRecentWorksV2: function () {
            jQuery(document).ready(function() {
            var owl = jQuery(".owl-recent-works-v1");
                owl.owlCarousel({
                    items: [3],
                    itemsDesktop : [1000,3],
                    itemsDesktopSmall : [900,2],
                    itemsTablet: [600,2],
                    itemsMobile : [479,1],
                    slideSpeed: 1000
                });

                // Custom Navigation Events
                jQuery(".next-v2").click(function(){
                    owl.trigger('owl.next');
                })
                jQuery(".prev-v2").click(function(){
                    owl.trigger('owl.prev');
                })
            });            
        },        

        ////Owl Recent Works v3
        initOwlRecentWorksV3: function () {
            jQuery(document).ready(function() {
            var owl = jQuery(".owl-recent-works-v1");
                owl.owlCarousel({
                    items: [1],
                    itemsDesktop : [1000,1],
                    itemsDesktopSmall : [900,2],
                    itemsTablet: [600,2],
                    itemsMobile : [479,1],
                    slideSpeed: 1000
                });

                // Custom Navigation Events
                jQuery(".next-v2").click(function(){
                    owl.trigger('owl.next');
                })
                jQuery(".prev-v2").click(function(){
                    owl.trigger('owl.prev');
                })
            });            
        }

    };
    
}();
/*!
 * jQVMap Version 1.0
 *
 * http://jqvmap.com
 *
 * Copyright 2012, Peter Schmalfeldt <manifestinteractive@gmail.com>
 * Copyright 2011-2012, Kirill Lebedev
 * Licensed under the MIT license.
 *
 * Fork Me @ https://github.com/manifestinteractive/jqvmap
 */
(function ($) {

  var apiParams = {
    colors: 1,
    values: 1,
    backgroundColor: 1,
    scaleColors: 1,
    normalizeFunction: 1,
    enableZoom: 1,
    showTooltip: 1,
    borderColor: 1,
    borderWidth: 1,
    borderOpacity: 1,
    selectedRegions: 1,
    multiSelectRegion: 1
  };

  var apiEvents = {
    onLabelShow: 'labelShow',
    onRegionOver: 'regionMouseOver',
    onRegionOut: 'regionMouseOut',
    onRegionClick: 'regionClick',
    onRegionSelect: 'regionSelect',
    onRegionDeselect: 'regionDeselect'
  };

  $.fn.vectorMap = function (options) {

    var defaultParams = {
      map: 'world_en',
      backgroundColor: '#a5bfdd',
      color: '#f4f3f0',
      hoverColor: '#c9dfaf',
      selectedColor: '#c9dfaf',
      scaleColors: ['#b6d6ff', '#005ace'],
      normalizeFunction: 'linear',
      enableZoom: true,
      showTooltip: true,
      borderColor: '#818181',
      borderWidth: 1,
      borderOpacity: 0.25,
      selectedRegions: null,
      multiSelectRegion: false
    }, map = this.data('mapObject');

    if (options === 'addMap') {
      WorldMap.maps[arguments[1]] = arguments[2];
    } else if (options === 'set' && apiParams[arguments[1]]) {
      map['set' + arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1)].apply(map, Array.prototype.slice.call(arguments, 2));
    } else if (typeof options === 'string' &&
               typeof map[options] === 'function') {
      return map[options].apply(map, Array.prototype.slice.call(arguments, 1));
    } else {
      $.extend(defaultParams, options);
      defaultParams.container = this;
      this.css({ position: 'relative', overflow: 'hidden' });

      map = new WorldMap(defaultParams);

      this.data('mapObject', map);

      for (var e in apiEvents) {
        if (defaultParams[e]) {
          this.bind(apiEvents[e] + '.jqvmap', defaultParams[e]);
        }
      }
    }
  };

  var VectorCanvas = function (width, height, params) {
    this.mode = window.SVGAngle ? 'svg' : 'vml';
    this.params = params;

    if (this.mode == 'svg') {
      this.createSvgNode = function (nodeName) {
        return document.createElementNS(this.svgns, nodeName);
      };
    } else {
      try {
        if (!document.namespaces.rvml) {
          document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
        }
        this.createVmlNode = function (tagName) {
          return document.createElement('<rvml:' + tagName + ' class="rvml">');
        };
      } catch (e) {
        this.createVmlNode = function (tagName) {
          return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
        };
      }

      document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
    }

    if (this.mode == 'svg') {
      this.canvas = this.createSvgNode('svg');
    } else {
      this.canvas = this.createVmlNode('group');
      this.canvas.style.position = 'absolute';
    }

    this.setSize(width, height);
  };

  VectorCanvas.prototype = {
    svgns: "http://www.w3.org/2000/svg",
    mode: 'svg',
    width: 0,
    height: 0,
    canvas: null,

    setSize: function (width, height) {
      if (this.mode == 'svg') {
        this.canvas.setAttribute('width', width);
        this.canvas.setAttribute('height', height);
      } else {
        this.canvas.style.width = width + "px";
        this.canvas.style.height = height + "px";
        this.canvas.coordsize = width + ' ' + height;
        this.canvas.coordorigin = "0 0";
        if (this.rootGroup) {
          var pathes = this.rootGroup.getElementsByTagName('shape');
          for (var i = 0, l = pathes.length; i < l; i++) {
            pathes[i].coordsize = width + ' ' + height;
            pathes[i].style.width = width + 'px';
            pathes[i].style.height = height + 'px';
          }
          this.rootGroup.coordsize = width + ' ' + height;
          this.rootGroup.style.width = width + 'px';
          this.rootGroup.style.height = height + 'px';
        }
      }
      this.width = width;
      this.height = height;
    },

    createPath: function (config) {
      var node;
      if (this.mode == 'svg') {
        node = this.createSvgNode('path');
        node.setAttribute('d', config.path);

        if (this.params.borderColor !== null) {
          node.setAttribute('stroke', this.params.borderColor);
        }
        if (this.params.borderWidth > 0) {
          node.setAttribute('stroke-width', this.params.borderWidth);
          node.setAttribute('stroke-linecap', 'round');
          node.setAttribute('stroke-linejoin', 'round');
        }
        if (this.params.borderOpacity > 0) {
          node.setAttribute('stroke-opacity', this.params.borderOpacity);
        }

        node.setFill = function (color) {
          this.setAttribute("fill", color);
          if (this.getAttribute("original") === null) {
            this.setAttribute("original", color);
          }
        };

        node.getFill = function (color) {
          return this.getAttribute("fill");
        };

        node.getOriginalFill = function () {
          return this.getAttribute("original");
        };

        node.setOpacity = function (opacity) {
          this.setAttribute('fill-opacity', opacity);
        };
      } else {
        node = this.createVmlNode('shape');
        node.coordorigin = "0 0";
        node.coordsize = this.width + ' ' + this.height;
        node.style.width = this.width + 'px';
        node.style.height = this.height + 'px';
        node.fillcolor = WorldMap.defaultFillColor;
        node.stroked = false;
        node.path = VectorCanvas.pathSvgToVml(config.path);

        var scale = this.createVmlNode('skew');
        scale.on = true;
        scale.matrix = '0.01,0,0,0.01,0,0';
        scale.offset = '0,0';

        node.appendChild(scale);

        var fill = this.createVmlNode('fill');
        node.appendChild(fill);

        node.setFill = function (color) {
          this.getElementsByTagName('fill')[0].color = color;
          if (this.getAttribute("original") === null) {
            this.setAttribute("original", color);
          }
        };

        node.getFill = function (color) {
          return this.getElementsByTagName('fill')[0].color;
        };
        node.getOriginalFill = function () {
          return this.getAttribute("original");
        };
        node.setOpacity = function (opacity) {
          this.getElementsByTagName('fill')[0].opacity = parseInt(opacity * 100, 10) + '%';
        };
      }
      return node;
    },

    createGroup: function (isRoot) {
      var node;
      if (this.mode == 'svg') {
        node = this.createSvgNode('g');
      } else {
        node = this.createVmlNode('group');
        node.style.width = this.width + 'px';
        node.style.height = this.height + 'px';
        node.style.left = '0px';
        node.style.top = '0px';
        node.coordorigin = "0 0";
        node.coordsize = this.width + ' ' + this.height;
      }

      if (isRoot) {
        this.rootGroup = node;
      }
      return node;
    },

    applyTransformParams: function (scale, transX, transY) {
      if (this.mode == 'svg') {
        this.rootGroup.setAttribute('transform', 'scale(' + scale + ') translate(' + transX + ', ' + transY + ')');
      } else {
        this.rootGroup.coordorigin = (this.width - transX) + ',' + (this.height - transY);
        this.rootGroup.coordsize = this.width / scale + ',' + this.height / scale;
      }
    }
  };

  VectorCanvas.pathSvgToVml = function (path) {
    var result = '';
    var cx = 0, cy = 0, ctrlx, ctrly;

    return path.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g, function (segment, letter, coords, index) {
      coords = coords.replace(/(\d)-/g, '$1,-').replace(/\s+/g, ',').split(',');
      if (!coords[0]) {
        coords.shift();
      }

      for (var i = 0, l = coords.length; i < l; i++) {
        coords[i] = Math.round(100 * coords[i]);
      }

      switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        return 't' + coords.join(',');
        break;

      case 'M':
        cx = coords[0];
        cy = coords[1];
        return 'm' + coords.join(',');
        break;

      case 'l':
        cx += coords[0];
        cy += coords[1];
        return 'r' + coords.join(',');
        break;

      case 'L':
        cx = coords[0];
        cy = coords[1];
        return 'l' + coords.join(',');
        break;

      case 'h':
        cx += coords[0];
        return 'r' + coords[0] + ',0';
        break;

      case 'H':
        cx = coords[0];
        return 'l' + cx + ',' + cy;
        break;

      case 'v':
        cy += coords[0];
        return 'r0,' + coords[0];
        break;

      case 'V':
        cy = coords[0];
        return 'l' + cx + ',' + cy;
        break;

      case 'c':
        ctrlx = cx + coords[coords.length - 4];
        ctrly = cy + coords[coords.length - 3];
        cx += coords[coords.length - 2];
        cy += coords[coords.length - 1];
        return 'v' + coords.join(',');
        break;

      case 'C':
        ctrlx = coords[coords.length - 4];
        ctrly = coords[coords.length - 3];
        cx = coords[coords.length - 2];
        cy = coords[coords.length - 1];
        return 'c' + coords.join(',');
        break;

      case 's':
        coords.unshift(cy - ctrly);
        coords.unshift(cx - ctrlx);
        ctrlx = cx + coords[coords.length - 4];
        ctrly = cy + coords[coords.length - 3];
        cx += coords[coords.length - 2];
        cy += coords[coords.length - 1];
        return 'v' + coords.join(',');
        break;

      case 'S':
        coords.unshift(cy + cy - ctrly);
        coords.unshift(cx + cx - ctrlx);
        ctrlx = coords[coords.length - 4];
        ctrly = coords[coords.length - 3];
        cx = coords[coords.length - 2];
        cy = coords[coords.length - 1];
        return 'c' + coords.join(',');
        break;

      default:
        return false;
        break;
      }

      return '';

    }).replace(/z/g, '');
  };

  var WorldMap = function (params) {
    params = params || {};
    var map = this;
    var mapData = WorldMap.maps[params.map];

    this.selectedRegions = [];
    this.multiSelectRegion = params.multiSelectRegion;

    this.container = params.container;

    this.defaultWidth = mapData.width;
    this.defaultHeight = mapData.height;

    this.color = params.color;
    this.selectedColor = params.selectedColor;
    this.hoverColor = params.hoverColor;
    this.hoverOpacity = params.hoverOpacity;
    this.setBackgroundColor(params.backgroundColor);

    this.width = params.container.width();
    this.height = params.container.height();

    this.resize();

    jQuery(window).resize(function () {
      map.width = params.container.width();
      map.height = params.container.height();
      map.resize();
      map.canvas.setSize(map.width, map.height);
      map.applyTransform();
    });

    this.canvas = new VectorCanvas(this.width, this.height, params);
    params.container.append(this.canvas.canvas);

    this.makeDraggable();

    this.rootGroup = this.canvas.createGroup(true);

    this.index = WorldMap.mapIndex;
    this.label = jQuery('<div/>').addClass('jqvmap-label').appendTo(jQuery('body')).hide();

    if (params.enableZoom) {
      jQuery('<div/>').addClass('jqvmap-zoomin').text('+').appendTo(params.container);
      jQuery('<div/>').addClass('jqvmap-zoomout').html('&#x2212;').appendTo(params.container);
    }

    map.countries = [];

    for (var key in mapData.pathes) {
      var path = this.canvas.createPath({
        path: mapData.pathes[key].path
      });

      path.setFill(this.color);
      path.id = map.getCountryId(key);
      map.countries[key] = path;

      if (this.canvas.mode == 'svg') {
        path.setAttribute('class', 'jvectormap-region');
      } else {
        jQuery(path).addClass('jvectormap-region');
      }

      jQuery(this.rootGroup).append(path);
    }

    jQuery(params.container).delegate(this.canvas.mode == 'svg' ? 'path' : 'shape', 'mouseover mouseout', function (e) {
      var path = e.target,
      code = e.target.id.split('_').pop(),
      labelShowEvent = $.Event('labelShow.jqvmap'),
      regionMouseOverEvent = $.Event('regionMouseOver.jqvmap');

      if (e.type == 'mouseover') {
        jQuery(params.container).trigger(regionMouseOverEvent, [code, mapData.pathes[code].name]);
        if (!regionMouseOverEvent.isDefaultPrevented()) {
          map.highlight(code, path);
        }
        if (params.showTooltip) {
          map.label.text(mapData.pathes[code].name);
          jQuery(params.container).trigger(labelShowEvent, [map.label, code]);

          if (!labelShowEvent.isDefaultPrevented()) {
            map.label.show();
            map.labelWidth = map.label.width();
            map.labelHeight = map.label.height();
          }
        }
      } else {
        map.unhighlight(code, path);

        map.label.hide();
        jQuery(params.container).trigger('regionMouseOut.jqvmap', [code, mapData.pathes[code].name]);
      }
    });

    jQuery(params.container).delegate(this.canvas.mode == 'svg' ? 'path' : 'shape', 'click', function (e) {
      if (!params.multiSelectRegion) {
        for (var key in mapData.pathes) {
          map.countries[key].currentFillColor = map.countries[key].getOriginalFill();
          map.countries[key].setFill(map.countries[key].getOriginalFill());
        }
      }

      var path = e.target;
      var code = e.target.id.split('_').pop();

      jQuery(params.container).trigger('regionClick.jqvmap', [code, mapData.pathes[code].name]);
      if (!regionClickEvent.isDefaultPrevented()) {
        if (map.selectedRegions.indexOf(code) !== -1) {
          map.deselect(code, path);
        } else {
          map.select(code, path);
        }
      }

      //console.log(selectedRegions);

    });

    if (params.showTooltip) {
      params.container.mousemove(function (e) {
        if (map.label.is(':visible')) {
            var left = e.pageX - 15 - map.labelWidth;
            var top = e.pageY - 15 - map.labelHeight;
            
            if(left < 0)
               left = e.pageX + 15;
            if(top < 0)
                top = e.pageY + 15;
            
            map.label.css({
                left: left,
                top: top
          });
        }
      });
    }

    this.setColors(params.colors);

    this.canvas.canvas.appendChild(this.rootGroup);

    this.applyTransform();

    this.colorScale = new ColorScale(params.scaleColors, params.normalizeFunction, params.valueMin, params.valueMax);

    if (params.values) {
      this.values = params.values;
      this.setValues(params.values);
    }

    if (params.selectedRegions) {
      if (params.selectedRegions instanceof Array) {
        for(var k in params.selectedRegions) {
          this.select(params.selectedRegions[k].toLowerCase());
        }
      } else {
        this.select(params.selectedRegions.toLowerCase());
      }
    }

    this.bindZoomButtons();
    
    if(params.pins) {
      /*if(params.pinMode) {
          if(params.pinMode != "id" && params.pinMode != "content") {
              params.pinMode = "content";
          }
      } else {
          params.pinMode = "content";
      }*/
      this.pinHandlers = false;
      this.placePins(params.pins, params.pinMode);
    }

    WorldMap.mapIndex++;
  };

  WorldMap.prototype = {
    transX: 0,
    transY: 0,
    scale: 1,
    baseTransX: 0,
    baseTransY: 0,
    baseScale: 1,
    width: 0,
    height: 0,
    countries: {},
    countriesColors: {},
    countriesData: {},
    zoomStep: 1.4,
    zoomMaxStep: 4,
    zoomCurStep: 1,

    setColors: function (key, color) {
      if (typeof key == 'string') {
        this.countries[key].setFill(color);
        this.countries[key].setAttribute("original", color);
      } else {
        var colors = key;

        for (var code in colors) {
          if (this.countries[code]) {
            this.countries[code].setFill(colors[code]);
            this.countries[code].setAttribute("original", colors[code]);
          }
        }
      }
    },

    setValues: function (values) {
      var max = 0,
      min = Number.MAX_VALUE,
      val;

      for (var cc in values) {
        val = parseFloat(values[cc]);
        if (val > max) {
          max = values[cc];
        }
        if (val && val < min) {
          min = val;
        }
      }

      this.colorScale.setMin(min);
      this.colorScale.setMax(max);

      var colors = {};
      for (cc in values) {
        val = parseFloat(values[cc]);
        if (val) {
          colors[cc] = this.colorScale.getColor(val);
        } else {
          colors[cc] = this.color;
        }
      }
      this.setColors(colors);
      this.values = values;
    },

    setBackgroundColor: function (backgroundColor) {
      this.container.css('background-color', backgroundColor);
    },

    setScaleColors: function (colors) {
      this.colorScale.setColors(colors);

      if (this.values) {
        this.setValues(this.values);
      }
    },

    setNormalizeFunction: function (f) {
      this.colorScale.setNormalizeFunction(f);

      if (this.values) {
        this.setValues(this.values);
      }
    },

    highlight: function (cc, path) {
      path = path || $('#' + this.getCountryId(cc))[0];
      if (this.hoverOpacity) {
        path.setOpacity(this.hoverOpacity);
      } else if (this.hoverColor) {
        path.currentFillColor = path.getFill() + '';
        path.setFill(this.hoverColor);
      }
    },

    unhighlight: function (cc, path) {
      path = path || $('#' + this.getCountryId(cc))[0];
      path.setOpacity(1);
      if (path.currentFillColor) {
        path.setFill(path.currentFillColor);
      }
    },

    select: function (cc, path) {
      path = path || $('#' + this.getCountryId(cc))[0];
      if(this.selectedRegions.indexOf(cc) < 0) {
        if (this.multiSelectRegion) {
          this.selectedRegions.push(cc);
        } else {
          this.selectedRegions = [cc];
        }
        // MUST BE after the change of selectedRegions
        // Otherwise, we might loop
        $(this.container).trigger('regionSelect.jqvmap', [cc]);
        if (this.selectedColor) {
          path.currentFillColor = this.selectedColor;
          path.setFill(this.selectedColor);
        }
      }
    },

    deselect: function (cc, path) {
      path = path || $('#' + this.getCountryId(cc))[0];
      if(this.selectedRegions.indexOf(cc) >= 0) {
        this.selectedRegions.splice(this.selectedRegions.indexOf(cc), 1);
        // MUST BE after the change of selectedRegions
        // Otherwise, we might loop
        $(this.container).trigger('regionDeselect.jqvmap', [cc]);
        path.currentFillColor = path.getOriginalFill();
        path.setFill(path.getOriginalFill());
      }
    },

    isSelected: function(cc) {
      return this.selectedRegions.indexOf(cc) >= 0;
    },

    resize: function () {
      var curBaseScale = this.baseScale;
      if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
        this.baseScale = this.height / this.defaultHeight;
        this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale);
      } else {
        this.baseScale = this.width / this.defaultWidth;
        this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale);
      }
      this.scale *= this.baseScale / curBaseScale;
      this.transX *= this.baseScale / curBaseScale;
      this.transY *= this.baseScale / curBaseScale;
    },

    reset: function () {
      this.countryTitle.reset();
      for (var key in this.countries) {
        this.countries[key].setFill(WorldMap.defaultColor);
      }
      this.scale = this.baseScale;
      this.transX = this.baseTransX;
      this.transY = this.baseTransY;
      this.applyTransform();
    },

    applyTransform: function () {
      var maxTransX, maxTransY, minTransX, minTransY;
      if (this.defaultWidth * this.scale <= this.width) {
        maxTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
        minTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
      } else {
        maxTransX = 0;
        minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
      }

      if (this.defaultHeight * this.scale <= this.height) {
        maxTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
        minTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
      } else {
        maxTransY = 0;
        minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
      }

      if (this.transY > maxTransY) {
        this.transY = maxTransY;
      }
      else if (this.transY < minTransY) {
        this.transY = minTransY;
      }
      if (this.transX > maxTransX) {
        this.transX = maxTransX;
      }
      else if (this.transX < minTransX) {
        this.transX = minTransX;
      }

      this.canvas.applyTransformParams(this.scale, this.transX, this.transY);
    },

    makeDraggable: function () {
      var mouseDown = false;
      var oldPageX, oldPageY;
      var self = this;

      self.isMoving = false;
      self.isMovingTimeout = false;

      this.container.mousemove(function (e) {

        if (mouseDown) {
          var curTransX = self.transX;
          var curTransY = self.transY;

          self.transX -= (oldPageX - e.pageX) / self.scale;
          self.transY -= (oldPageY - e.pageY) / self.scale;

          self.applyTransform();

          oldPageX = e.pageX;
          oldPageY = e.pageY;

          self.isMoving = true;
          if (self.isMovingTimeout) {
            clearTimeout(self.isMovingTimeout);
          }

          self.container.trigger('drag');
        }

        return false;

      }).mousedown(function (e) {

        mouseDown = true;
        oldPageX = e.pageX;
        oldPageY = e.pageY;

        return false;

      }).mouseup(function () {

        mouseDown = false;

        self.isMovingTimeout = setTimeout(function () {
          self.isMoving = false;
        }, 100);

        return false;

      });
    },

    bindZoomButtons: function () {
      var map = this;
      this.container.find('.jqvmap-zoomin').click(function(){
        map.zoomIn();
      });
      this.container.find('.jqvmap-zoomout').click(function(){
        map.zoomOut();
      });
    },
    
    zoomIn: function () {
      var map = this;
      var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);

      if (map.zoomCurStep < map.zoomMaxStep) {
        var curTransX = map.transX;
        var curTransY = map.transY;
        var curScale = map.scale;

        map.transX -= (map.width / map.scale - map.width / (map.scale * map.zoomStep)) / 2;
        map.transY -= (map.height / map.scale - map.height / (map.scale * map.zoomStep)) / 2;
        map.setScale(map.scale * map.zoomStep);
        map.zoomCurStep++;

        jQuery('#zoomSlider').css('top', parseInt(jQuery('#zoomSlider').css('top'), 10) - sliderDelta);
        
        map.container.trigger("zoomIn");
      }
    },
    
    zoomOut: function () {
      var map = this;
      var sliderDelta = (jQuery('#zoom').innerHeight() - 6 * 2 - 15 * 2 - 3 * 2 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);

      if (map.zoomCurStep > 1) {
        var curTransX = map.transX;
        var curTransY = map.transY;
        var curScale = map.scale;

        map.transX += (map.width / (map.scale / map.zoomStep) - map.width / map.scale) / 2;
        map.transY += (map.height / (map.scale / map.zoomStep) - map.height / map.scale) / 2;
        map.setScale(map.scale / map.zoomStep);
        map.zoomCurStep--;

        jQuery('#zoomSlider').css('top', parseInt(jQuery('#zoomSlider').css('top'), 10) + sliderDelta);
        
        map.container.trigger("zoomOut");
      }
    },

    setScale: function (scale) {
      this.scale = scale;
      this.applyTransform();
    },

    getCountryId: function (cc) {
      return 'jqvmap' + this.index + '_' + cc;
    },

    getPinId: function (cc) {
      return this.getCountryId(cc)+'_pin';
    },
    
    placePins: function(pins, pinMode){
      var map = this;

      if(!pinMode || (pinMode != "content" && pinMode != "id")) {
        pinMode = "content";
      }

      if(pinMode == "content") {//treat pin as content
        jQuery.each(pins, function(index, pin){
          if(jQuery('#'+map.getCountryId(index)).length == 0){
              return;
          }
          //mapData.pathes[code].name
          var pinIndex = map.getPinId(index);
          if(jQuery('#'+pinIndex).length > 0){
            jQuery('#'+pinIndex).remove();
          }
          map.container.append('<div id="' + pinIndex + '" for="'+index+'" class="jqvmap_pin" style="position:absolute">' + pin + '</div>');
        });
      } else { //treat pin as id of an html content
        jQuery.each(pins, function(index, pin){
          if(jQuery('#'+map.getCountryId(index)).length == 0){
              return;
          }
          var pinIndex = map.getPinId(index);
          if(jQuery('#'+pinIndex).length > 0){
            jQuery('#'+pinIndex).remove();
          }
          map.container.append('<div id="' + pinIndex + '" for="'+index+'" class="jqvmap_pin" style="position:absolute"></div>');
          jQuery('#'+pinIndex).append(jQuery('#'+pin));
        });
      }

      this.positionPins();
      if(!this.pinHandlers){
        this.pinHandlers = true;//do only once
        var positionFix = function(){
          map.positionPins();
        };
        this.container.bind('zoomIn', positionFix)
        .bind('zoomOut', positionFix)
        .bind('drag', positionFix);
      }
    },

    positionPins: function(){
      var map = this;
      var pins = this.container.find('.jqvmap_pin');
      jQuery.each(pins, function(index, pinObj){
        pinObj = jQuery(pinObj);
        var countryId = map.getCountryId(pinObj.attr('for'));
        var countryObj = jQuery('#' + countryId);

        var bbox = document.getElementById(countryId).getBBox();
        var position = countryObj.position();

        var scale = map.scale;

        var left = position.left + (bbox.width / 2) * scale - pinObj.width() / 2,
        top = position.top + (bbox.height / 2) * scale - pinObj.height() / 2;

        pinObj.css('left',left).css('top',top);
      });
     },

     getPin: function(cc){
       var pinObj = jQuery('#'+this.getPinId(cc));
       return pinObj.html();
     },

     getPins: function(){
       var pins = this.container.find('.jqvmap_pin');
       var ret = new Object();
       jQuery.each(pins, function(index, pinObj){
         pinObj = jQuery(pinObj);
         var cc = pinObj.attr('for');
         var pinContent = pinObj.html();
         eval("ret." + cc + "=pinContent");
       });
       return JSON.stringify(ret);
     },

     removePin: function(cc) {
       jQuery('#'+this.getPinId(cc)).remove();
     },

     removePins: function(){
       this.container.find('.jqvmap_pin').remove();
     }
  };

  WorldMap.xlink = "http://www.w3.org/1999/xlink";
  WorldMap.mapIndex = 1;
  WorldMap.maps = {};

  var ColorScale = function (colors, normalizeFunction, minValue, maxValue) {
    if (colors) {
      this.setColors(colors);
    }
    if (normalizeFunction) {
      this.setNormalizeFunction(normalizeFunction);
    }
    if (minValue) {
      this.setMin(minValue);
    }
    if (minValue) {
      this.setMax(maxValue);
    }
  };

  ColorScale.prototype = {
    colors: [],

    setMin: function (min) {
      this.clearMinValue = min;

      if (typeof this.normalize === 'function') {
        this.minValue = this.normalize(min);
      } else {
        this.minValue = min;
      }
    },

    setMax: function (max) {
      this.clearMaxValue = max;
      if (typeof this.normalize === 'function') {
        this.maxValue = this.normalize(max);
      } else {
        this.maxValue = max;
      }
    },

    setColors: function (colors) {
      for (var i = 0; i < colors.length; i++) {
        colors[i] = ColorScale.rgbToArray(colors[i]);
      }
      this.colors = colors;
    },

    setNormalizeFunction: function (f) {
      if (f === 'polynomial') {
        this.normalize = function (value) {
          return Math.pow(value, 0.2);
        };
      }
      else if (f === 'linear') {
        delete this.normalize;
      } else {
        this.normalize = f;
      }
      this.setMin(this.clearMinValue);
      this.setMax(this.clearMaxValue);
    },

    getColor: function (value) {
      if (typeof this.normalize === 'function') {
        value = this.normalize(value);
      }

      var lengthes = [];
      var fullLength = 0;
      var l;

      for (var i = 0; i < this.colors.length - 1; i++) {
        l = this.vectorLength(this.vectorSubtract(this.colors[i + 1], this.colors[i]));
        lengthes.push(l);
        fullLength += l;
      }

      var c = (this.maxValue - this.minValue) / fullLength;

      for (i = 0; i < lengthes.length; i++) {
        lengthes[i] *= c;
      }

      i = 0;
      value -= this.minValue;

      while (value - lengthes[i] >= 0) {
        value -= lengthes[i];
        i++;
      }

      var color;
      if (i == this.colors.length - 1) {
        color = this.vectorToNum(this.colors[i]).toString(16);
      } else {
        color = (this.vectorToNum(this.vectorAdd(this.colors[i], this.vectorMult(this.vectorSubtract(this.colors[i + 1], this.colors[i]), (value) / (lengthes[i]))))).toString(16);
      }

      while (color.length < 6) {
        color = '0' + color;
      }
      return '#' + color;
    },

    vectorToNum: function (vector) {
      var num = 0;
      for (var i = 0; i < vector.length; i++) {
        num += Math.round(vector[i]) * Math.pow(256, vector.length - i - 1);
      }
      return num;
    },

    vectorSubtract: function (vector1, vector2) {
      var vector = [];
      for (var i = 0; i < vector1.length; i++) {
        vector[i] = vector1[i] - vector2[i];
      }
      return vector;
    },

    vectorAdd: function (vector1, vector2) {
      var vector = [];
      for (var i = 0; i < vector1.length; i++) {
        vector[i] = vector1[i] + vector2[i];
      }
      return vector;
    },

    vectorMult: function (vector, num) {
      var result = [];
      for (var i = 0; i < vector.length; i++) {
        result[i] = vector[i] * num;
      }
      return result;
    },

    vectorLength: function (vector) {
      var result = 0;
      for (var i = 0; i < vector.length; i++) {
        result += vector[i] * vector[i];
      }
      return Math.sqrt(result);
    }
  };

  ColorScale.arrayToRgb = function (ar) {
    var rgb = '#';
    var d;
    for (var i = 0; i < ar.length; i++) {
      d = ar[i].toString(16);
      rgb += d.length == 1 ? '0' + d : d;
    }
    return rgb;
  };

  ColorScale.rgbToArray = function (rgb) {
    rgb = rgb.substr(1);
    return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
  };

})(jQuery);

jQuery.fn.vectorMap('addMap', 'france_fr', {"width": 520, "height": 550, "pathes":{
  "FR-01" : {"path": "M 383.28125,262.59375 L 381.125,262.8125 L 379.75,265.34375 L 376.0625,279.78125 L 375.53125,280.96875 L 375.15625,285.53125 L 374.09375,287 L 374.09375,293.59375 L 373.46875,295.09375 L 377.28125,297.40625 L 378.78125,297.625 L 381.125,299.75 L 381.53125,303.15625 L 384.09375,302.3125 L 388.0625,303.46875 L 388.125,302.71875 L 390.03125,302.71875 L 392.78125,305.28125 L 395.34375,304 L 396.625,300.1875 L 397.90625,298.6875 L 399.59375,298.90625 L 401.28125,300.40625 L 402.15625,303.15625 L 410,312.71875 L 412.34375,311.03125 L 412.75,307.40625 L 415.3125,306.96875 L 415.3125,300.59375 L 416.59375,299.53125 L 417,293.8125 L 417.5,294.21875 L 417.4375,292.125 L 416.375,290.1875 L 416.8125,284.6875 L 418.71875,285.75 L 419.78125,283.8125 L 421.6875,283.1875 L 423.65625,281.625 L 421.53125,281.625 L 421.53125,277.90625 L 423.875,276.53125 L 427.375,276.15625 L 427.59375,274.1875 L 426.40625,273.40625 L 429.34375,269.6875 L 428.9375,268.53125 L 425.59375,266.75 L 417.46875,275.6875 L 411.8125,275.6875 L 411.8125,273.34375 L 408.6875,271.78125 L 404.96875,275.875 L 402.03125,276.28125 L 402.03125,273.53125 L 399.5,272.375 L 395.59375,266.90625 L 392.0625,265.53125 L 390.90625,263 L 388.9375,262.59375 L 387,263.96875 L 385.4375,264.375 L 383.28125,262.59375 z ", "name" : "Ain"},
	"FR-02" : {"path": "M 328.40625,62.21875 L 325.28125,64.375 L 323.71875,63 L 322.34375,63 L 319.21875,65.15625 L 316.875,63.78125 L 314.53125,65.15625 L 313.75,65.34375 L 313.15625,64.15625 L 311,64.15625 L 309.4375,65.15625 L 309.375,65.15625 L 309.84375,67.90625 L 307.28125,70.6875 L 307.28125,73.25 L 305.5,75.25 L 305.90625,77.625 L 306.875,81.59375 L 308.0625,88.34375 L 307.6875,94.28125 L 306.875,96.0625 L 309.25,97.84375 L 307.46875,98.65625 L 306.28125,103.40625 L 302.90625,104.1875 L 301.71875,106.1875 L 304.09375,106.59375 L 304.5,109.34375 L 302.71875,109.75 L 302.90625,112.71875 L 303.5,112.53125 L 304.5,110.9375 L 306.875,112.53125 L 308.28125,114.125 L 307.875,116.78125 L 309.65625,118.0625 L 310.25,122.375 L 315.5,127.4375 L 317.25,128.03125 L 318.25,130.375 L 321.53125,131.0625 L 321.9375,130.5625 L 322.9375,128.4375 L 325.875,127.0625 L 327.4375,122.96875 L 329.1875,121.78125 L 328.1875,120.40625 L 325.65625,120.40625 L 325.28125,119.0625 L 327.03125,118.28125 L 327.8125,117.09375 L 326.0625,115.9375 L 326.625,114.15625 L 331.125,113.78125 L 330.34375,112.03125 L 327.625,110.25 L 327.625,105 L 331.3125,102.25 L 335.4375,102.25 L 335.03125,100.3125 L 337.375,99.3125 L 340.6875,101.46875 L 342.0625,101.09375 L 341.875,94.4375 L 342.46875,92.09375 L 343.25,89.375 L 340.6875,88 L 341.28125,86.4375 L 345,85.65625 L 345,83.125 L 347.9375,81.5625 L 348.71875,79.21875 L 347.75,77.65625 L 347.9375,74.71875 L 349.6875,73.15625 L 347.9375,69.84375 L 348.46875,66.375 L 344.5,66.375 L 343.4375,67.09375 L 339.71875,66.125 L 338.9375,63.59375 L 337.78125,63.59375 L 335.625,65.53125 L 335.25,63.78125 L 330.9375,63.375 L 329.75,62.40625 L 328.40625,62.21875 z ", "name" : "Aisne"},
	"FR-03" : {"path": "M 301.625,247.96875 L 298.90625,251.46875 L 297.34375,251.65625 L 295.59375,253.4375 L 293.625,251.28125 L 288.375,256.5625 L 288.375,259.6875 L 289.34375,260.46875 L 289.53125,262.03125 L 286.8125,264.15625 L 284.25,263.375 L 279.375,264.375 L 276.84375,267.28125 L 275.90625,269.28125 L 276.0625,269.25 L 278.40625,272.5625 L 278.40625,274.90625 L 279.75,276.65625 L 281.125,274.90625 L 282.6875,277.65625 L 284.84375,278.4375 L 287,283.5 L 287.09375,284.96875 L 290.0625,287.28125 L 291.65625,286.5625 L 292.90625,283.5625 L 294.125,283.21875 L 294.125,281.625 L 296.25,281.4375 L 296.4375,282.5 L 299.09375,279.5 L 302.09375,279.5 L 302.625,280.5625 L 301.21875,282.5 L 303.3125,284.8125 L 303.6875,286.21875 L 308.625,289.0625 L 314.625,289.9375 L 316.40625,289.75 L 319.0625,290.28125 L 321.34375,288.875 L 323.125,289.75 L 323.46875,292.21875 L 325.78125,292.75 L 328.78125,292.59375 L 329.65625,294.71875 L 332.40625,295.8125 L 332.5,294.84375 L 337.1875,294.625 L 336.8125,283.5 L 335.4375,280.78125 L 336,278.625 L 339.25,278.0625 L 339.34375,277.84375 L 343.4375,274.71875 L 343.625,267.09375 L 342.25,265.15625 L 339.125,265.15625 L 337.96875,263.59375 L 334.65625,263.59375 L 333.6875,262.40625 L 333.6875,259.46875 L 329.75,252.0625 L 327.8125,250.6875 L 324.09375,255.78125 L 322.53125,256.15625 L 321.9375,253.625 L 320.1875,252.84375 L 319.40625,254.40625 L 316.5,254.40625 L 316.09375,252.65625 L 314.125,253.8125 L 312,255 L 309.65625,252.4375 L 306.3125,250.875 L 306.125,248.34375 L 301.625,247.96875 z ", "name" : "Allier"},
	"FR-04" : {"path": "M 463.84375,364.34375 L 461.71875,367.53125 L 458.71875,369.3125 L 457.65625,371.4375 L 455,371.59375 L 455,373.53125 L 454.28125,374.59375 L 453.21875,377.25 L 446.875,377.09375 L 443.875,375.5 L 441.90625,376.90625 L 438.21875,376.71875 L 437.3125,377.96875 L 438.21875,377.96875 L 438.75,381.3125 L 437.84375,381.6875 L 434.5,379.5625 L 434.5,378.3125 L 432.5625,376.71875 L 431.5,376.71875 L 431.5,378.5 L 429.90625,378.84375 L 426.53125,380.78125 L 424.40625,384.34375 L 423.875,386.09375 L 425.125,386.4375 L 425.3125,389.28125 L 424.0625,389.28125 L 422.125,387.5 L 421.0625,387.6875 L 421.59375,389.28125 L 424.59375,392.625 L 422.65625,393.34375 L 421.25,392.46875 L 417.6875,392.46875 L 414.6875,395.28125 L 414.65625,395.25 L 414.53125,396.40625 L 413.375,395.03125 L 411.8125,393.65625 L 410.8125,396.59375 L 409.0625,398.15625 L 408.3125,398.09375 L 408.34375,398.28125 L 408.5,400.9375 L 410.625,401.3125 L 410.625,403.78125 L 408.6875,404.65625 L 409.03125,407.5 L 412.5625,409.25 L 412.5625,411.1875 L 410.96875,412.96875 L 410.96875,414.5625 L 415.40625,414.5625 L 419.46875,419.15625 L 419.4375,419.25 L 424.59375,417.5625 L 430.96875,421.8125 L 434.5,419.15625 L 435.375,417.375 L 440.34375,415.78125 L 443.5,417.90625 L 448.09375,414.5625 L 453.40625,414.75 L 454.8125,413.3125 L 457.78125,413.1875 L 457.84375,413.15625 L 457.125,411.375 L 458,410.3125 L 457.65625,408.90625 L 460.46875,408.90625 L 461.1875,408.03125 L 463.84375,406.59375 L 465.96875,408.03125 L 467.375,407.125 L 464.03125,404.125 L 460.46875,400.78125 L 459.25,400.40625 L 459.0625,397.75 L 456.9375,394.59375 L 457.65625,390 L 458.71875,387.5 L 460.65625,385.90625 L 460.84375,383.4375 L 463.5,382.03125 L 463.90625,381.875 L 463.90625,378.09375 L 466.65625,377.71875 L 465.09375,376.34375 L 463.125,375.75 L 462.15625,373.21875 L 462.9375,371.46875 L 466.4375,367.75 L 465.875,365 L 466.375,364.46875 L 463.84375,364.34375 z ", "name" : "Alpes de Haute Provence"},
	"FR-05" : {"path": "M 447.34375,339.15625 L 445.59375,339.9375 L 445.1875,342.875 L 441.6875,343.28125 L 441.09375,340.53125 L 439.9375,339.375 L 436.40625,339.75 L 435.03125,340.9375 L 434.25,345.03125 L 434.84375,346 L 438.9375,346.40625 L 439.71875,348.9375 L 441.28125,349.71875 L 441.28125,354 L 437.5625,353.8125 L 436,355.5625 L 431.53125,354.78125 L 429,356.9375 L 427.21875,356.15625 L 424.6875,358.125 L 425.65625,359.875 L 424.09375,361.4375 L 419.21875,361.4375 L 419.21875,363.78125 L 420.78125,364.5625 L 420.1875,365.9375 L 416.875,367.28125 L 412.78125,367.6875 L 411.59375,371.40625 L 411.40625,373.75 L 413.5625,375.5 L 411.40625,378.03125 L 408.6875,376.65625 L 405.5625,376.46875 L 405.15625,378.21875 L 407.125,379.59375 L 404.75,381.15625 L 405.5625,384.46875 L 412.1875,386.25 L 413.375,388.78125 L 415.3125,389.15625 L 414.65625,395.25 L 414.6875,395.28125 L 417.6875,392.46875 L 421.25,392.46875 L 422.65625,393.34375 L 424.59375,392.625 L 421.59375,389.28125 L 421.0625,387.6875 L 422.125,387.5 L 424.0625,389.28125 L 425.3125,389.28125 L 425.125,386.4375 L 423.875,386.09375 L 424.40625,384.34375 L 426.53125,380.78125 L 429.90625,378.84375 L 431.5,378.5 L 431.5,376.71875 L 432.5625,376.71875 L 434.5,378.3125 L 434.5,379.5625 L 437.84375,381.6875 L 438.75,381.3125 L 438.21875,377.96875 L 437.3125,377.96875 L 438.21875,376.71875 L 441.90625,376.90625 L 443.875,375.5 L 446.875,377.09375 L 453.21875,377.25 L 454.28125,374.59375 L 455,373.53125 L 455,371.59375 L 457.65625,371.4375 L 458.71875,369.3125 L 461.71875,367.53125 L 463.84375,364.34375 L 466.375,364.46875 L 468.21875,362.46875 L 470.34375,362.65625 L 470.34375,360.90625 L 467.625,359.53125 L 467.03125,353.875 L 464.875,353.09375 L 462.15625,353.5 L 457.0625,350.9375 L 456.28125,345.09375 L 453.375,344.125 L 452.375,342.15625 L 451.09375,339.34375 L 447.34375,339.15625 z ", "name" : "Hautes Alpes"},
	"FR-06" : {"path": "M 463.90625,381.875 L 463.5,382.03125 L 460.84375,383.4375 L 460.65625,385.90625 L 458.71875,387.5 L 457.65625,390 L 456.9375,394.59375 L 459.0625,397.75 L 459.25,400.40625 L 460.46875,400.78125 L 464.03125,404.125 L 467.375,407.125 L 465.96875,408.03125 L 463.84375,406.59375 L 461.1875,408.03125 L 460.46875,408.90625 L 457.65625,408.90625 L 458,410.3125 L 457.125,411.375 L 457.84375,413.15625 L 455.53125,414.5625 L 456.40625,416.6875 L 458.71875,416.84375 L 461,417.90625 L 461.375,421.625 L 463.5,423.75 L 464.71875,423.75 L 467.03125,424.625 L 467.375,426.59375 L 465.96875,427.8125 L 467.03125,428.875 L 467.03125,430.125 L 469.21875,432.375 L 469.375,432.1875 L 469.5625,427.71875 L 473.46875,428.5 L 474.84375,426.71875 L 476.8125,427.125 L 477,421.0625 L 481.5,420.6875 L 485.40625,417.15625 L 488.90625,417.15625 L 489.09375,415 L 492.625,412.875 L 490.65625,408.375 L 493.59375,405.84375 L 493,402.90625 L 497.3125,401.53125 L 498.46875,397.25 L 497.90625,394.3125 L 496.90625,392.5625 L 496.125,390 L 493.21875,390.21875 L 484.03125,393.53125 L 481.09375,393.53125 L 476.03125,389.4375 L 470.9375,388.0625 L 468,388.0625 L 468,384.53125 L 463.90625,382 L 463.90625,381.875 z ", "name" : "Alpes Maritimes"},
	"FR-07" : {"path": "M 375.25,328.5 L 370.71875,331.1875 L 369.84375,335.03125 L 366.46875,335.65625 L 364.65625,336.15625 L 364.71875,336.25 L 363.5625,340.9375 L 360.8125,342.09375 L 359.65625,344.0625 L 360.4375,346.59375 L 361,347.96875 L 358.09375,347.96875 L 357.875,351.65625 L 354.75,351.875 L 353.1875,356.75 L 348.5,356.75 L 343.4375,360.46875 L 340.625,364.9375 L 341.09375,365.53125 L 342.46875,372.71875 L 345.78125,376.3125 L 345.21875,380.4375 L 349.375,382.9375 L 349.375,388.46875 L 351.59375,387.34375 L 356.28125,390.40625 L 358.5,391.21875 L 359.03125,387.34375 L 361.8125,386.8125 L 362.625,389.84375 L 365.40625,389.5625 L 365.9375,386.53125 L 372.28125,390.09375 L 373.3125,388 L 376,387.59375 L 376.21875,383.46875 L 375.59375,382.59375 L 374.75,382.40625 L 374.75,380.90625 L 375.375,379.40625 L 374.3125,377.71875 L 374.9375,373.90625 L 377.5,370.90625 L 377.5,366.6875 L 376.4375,361.78125 L 378.34375,361.375 L 378.78125,359.25 L 380.6875,355.625 L 381.75,352.875 L 380.0625,348.625 L 379,345.21875 L 377.5,339.28125 L 377.5,331.3125 L 376.4375,330.96875 L 375.25,328.5 z ", "name" : "Ardèche"},
	"FR-08" : {"path": "M 367.625,55.84375 L 365.65625,58.75 L 363.90625,60.53125 L 363.90625,62.28125 L 363.90625,64.625 L 361.5625,66.1875 L 357.28125,67.5625 L 354.9375,68.53125 L 352.1875,66.375 L 348.46875,66.375 L 347.9375,69.84375 L 349.6875,73.15625 L 347.9375,74.71875 L 347.75,77.65625 L 348.71875,79.21875 L 347.9375,81.5625 L 345,83.125 L 345,85.65625 L 341.28125,86.4375 L 340.6875,88 L 343.25,89.375 L 342.46875,92.09375 L 341.875,94.4375 L 342,99.3125 L 346.75,99.4375 L 350.90625,102.03125 L 351.6875,103.21875 L 353.875,103.8125 L 357.0625,106.1875 L 359.625,106.375 L 360.21875,105.78125 L 362.8125,105.78125 L 364,108.375 L 365.375,108.375 L 366.1875,107.1875 L 370.9375,107.375 L 371.71875,108.375 L 372.3125,108.375 L 374.3125,106.375 L 376.09375,107.96875 C 376.09375,107.96875 376.33461,107.94351 376.375,107.9375 L 376.25,107.125 L 378.59375,105.96875 L 379.75,104.78125 L 379,102.84375 L 378.78125,101.46875 L 380.9375,99.71875 L 381.71875,95.8125 L 379.375,92.875 L 380.15625,91.5 L 382.125,87.8125 L 382.6875,88.59375 L 385.625,88.59375 L 387,89.9375 L 388.75,88.78125 L 390.125,86.53125 L 388.71875,86.3125 L 387.9375,82.40625 L 386.375,81.21875 L 380.90625,80.625 L 379.9375,78.09375 L 378.15625,76.9375 L 371.90625,76.15625 L 371.53125,71.65625 L 372.3125,70.875 L 372.3125,69.125 L 369.1875,67.15625 L 369.78125,65 L 370.5625,63.0625 L 369.1875,61.875 L 371.34375,59.9375 L 371.34375,56.40625 L 370.5625,55.84375 L 367.625,55.84375 z ", "name" : "Ardennes"},
	"FR-09" : {"path": "M 237.21875,446.375 L 235.96875,447.25 L 235.4375,448.3125 L 237.90625,450.09375 L 238.625,451.34375 L 238.09375,452.375 L 233.84375,452.75 L 232.625,454.5 L 232.78125,455.03125 L 234.375,455.5625 L 235.28125,456.8125 L 234.21875,458.5625 L 232.96875,458.40625 L 231.03125,456.625 L 228.71875,455.9375 L 226.4375,456.09375 L 222.375,458.5625 L 222.53125,461.9375 L 223.59375,462.65625 L 222.90625,465.28125 L 218.28125,466.53125 L 216.53125,468.65625 L 216.53125,472.1875 L 217.25,473.25 L 215.59375,474.78125 L 216.65625,475.375 L 222.6875,476.53125 L 225.25,476.53125 L 228.5625,480.84375 L 236.96875,480.4375 L 240.28125,485.71875 L 243.21875,484.53125 L 251.8125,485.71875 L 252.4375,489.3125 L 258.5,487.90625 L 260.71875,485.96875 L 264.03125,485.125 L 264.84375,483.46875 L 272.03125,482.9375 L 267.625,477.6875 L 264.03125,479.625 L 257.6875,474.375 L 259.0625,472.4375 L 264.03125,472.4375 L 263.46875,467.75 L 263.46875,464.15625 L 262.65625,457.5 L 252.96875,452.8125 L 253.53125,451.15625 L 251.6875,449.09375 L 250.125,449.75 L 248,450.09375 L 244.09375,448.3125 L 243.03125,447.96875 L 244.625,449.90625 L 243.9375,451.5 L 240.5625,451.15625 L 240.40625,449.375 L 238.4375,446.71875 L 237.21875,446.375 z ", "name" : "Ariège"},
	"FR-10" : {"path": "M 349.3125,138.6875 L 345.34375,140.875 L 341.96875,143.25 L 338.625,143.25 L 333.0625,147.03125 L 328.3125,147.8125 L 324.9375,144.25 L 324.09375,144.4375 L 324.09375,145.03125 L 321.375,146.1875 L 321.1875,148.53125 L 319.8125,150.3125 L 319.03125,154.21875 L 318.59375,157.5 L 319.8125,158.5 L 322.15625,158.5 L 327.21875,163.78125 L 326.625,169.0625 L 330.15625,171.78125 L 332.125,170.40625 L 335.25,174.125 L 335.625,177.65625 L 337.78125,180.5625 L 338.75,182.71875 L 346.5625,183.125 L 350.46875,181.15625 L 351.625,183.3125 L 353,183.5 L 354,181.34375 L 360.4375,181.15625 L 362.96875,179.78125 L 363.375,177.25 L 369.03125,177.25 L 369.8125,177.6875 L 369.15625,175.1875 L 367.5625,174.1875 L 369.75,172.21875 L 373.125,172 L 374.3125,170.21875 L 374.09375,163.09375 L 373.3125,158.9375 L 369.9375,157.75 L 366.375,152.78125 L 366.5625,149.8125 L 367.59375,147.65625 L 365.78125,147.03125 L 360.21875,148.21875 L 356.25,148.21875 L 352.6875,142.875 L 352.28125,138.90625 L 349.3125,138.6875 z ", "name" : "Aube"},
	"FR-11" : {"path": "M 274.25,438.46875 L 273.96875,442.0625 L 270.375,440.9375 L 266.5,440.9375 L 266.78125,439.5625 L 264.84375,439.84375 L 260.71875,441.21875 L 259.34375,438.71875 L 256.5625,441.21875 L 257.40625,443.15625 L 254.34375,444.53125 L 253.8125,447.5625 L 251.3125,448.6875 L 253.53125,451.15625 L 252.96875,452.8125 L 262.65625,457.5 L 263.46875,464.15625 L 263.46875,467.75 L 264.03125,472.4375 L 259.0625,472.4375 L 257.6875,474.375 L 264.03125,479.625 L 267.625,477.6875 L 272.03125,482.9375 L 271.375,483 L 272.21875,483.5 L 280.15625,479.625 L 278.21875,476.78125 L 278.0625,473.4375 L 296.59375,473.4375 L 296.25,470.9375 L 300.5,468.65625 L 305.4375,472.53125 L 308,473.71875 L 307.84375,468.125 L 308.0625,461.6875 L 305.71875,461.875 L 303.75,458.96875 L 305.3125,456.40625 L 308.625,459.53125 L 311.5625,457.1875 L 313.53125,455.25 L 313.78125,453.1875 L 311.28125,453.09375 L 310.40625,450.28125 L 307.9375,450.09375 L 305.625,446.71875 L 303.84375,446.90625 L 301.75,445.65625 L 301.375,442.65625 L 300.3125,443.1875 L 300.84375,445.3125 L 298.375,445.3125 L 298.1875,448.84375 L 294.5,450.09375 L 292.71875,446.375 L 290.25,447.96875 L 288.125,446.375 L 287.0625,443.90625 L 288.84375,441.78125 L 288,439.5 L 287.78125,439.5625 L 281.96875,439.5625 L 275.90625,438.46875 L 274.25,438.46875 z ", "name" : "Aude"},
	"FR-12" : {"path": "M 294.6875,353.375 L 289.15625,358.09375 L 289.15625,362.78125 L 287.78125,362.78125 L 287.21875,367.1875 L 285.84375,367.75 L 284.75,370.21875 L 278.65625,370.21875 L 278.125,369.40625 L 275.34375,369.40625 L 273.6875,372.15625 L 273.09375,372.09375 L 272.75,373.1875 L 271.5,374.59375 L 267.96875,374.59375 L 267.25,375.5 L 265.5,375.3125 L 262.3125,378.84375 L 261.25,378.5 L 258.96875,380.4375 L 259.65625,383.96875 L 261.4375,386.625 L 260.0625,388.0625 L 260.375,392.09375 L 263.1875,392.28125 L 261.59375,395.46875 L 262.84375,398.65625 L 264.4375,397.75 L 265.15625,399.34375 L 267.4375,397.0625 L 270.8125,396.875 L 274.15625,399.34375 L 280,400.40625 L 282.125,404.125 L 285.125,405.53125 L 286.71875,409.59375 L 286.53125,411.1875 L 288.46875,414.75 L 288.46875,416.6875 L 292,421.28125 L 295.375,423.03125 L 297.5,422.5 L 298.5625,421.09375 L 300.15625,421.46875 L 303.8125,423.8125 L 303.84375,423.8125 L 305.46875,423.8125 L 308.78125,423.8125 L 308.5,418.03125 L 308.5,416.09375 L 310.15625,416.09375 L 313.1875,417.75 L 316.21875,417.75 L 315.6875,414.4375 L 317.34375,413.03125 L 320.65625,412.5 L 320.65625,409.71875 L 324.25,408.0625 L 323.40625,404.21875 L 320.375,404.21875 L 317.625,403.65625 L 317.0625,401.4375 L 319.28125,400.90625 L 319.28125,398.125 L 321.46875,396.1875 L 319.8125,395.375 L 315.125,396.1875 L 315.40625,394 L 312.09375,392.59375 L 311.25,385.96875 L 311.25,381.28125 L 308.5,379.34375 L 308.78125,375.46875 L 302.96875,368.3125 L 302.40625,362.78125 L 300.5,362.78125 L 299.65625,357.25 L 295.78125,357.8125 L 295.25,354.21875 L 294.6875,353.375 z ", "name" : "Aveyron"},
	"FR-13" : {"path": "M 379.71875,409.90625 L 374.25,413.03125 L 372.84375,423.53125 L 367.0625,422.71875 L 365.40625,427.125 L 366.78125,429.0625 L 360.4375,432.9375 L 358.6875,437 L 364.875,437.28125 L 373.09375,437.875 L 374.65625,439.4375 L 371.71875,439.4375 L 369.78125,442.75 L 378.15625,444.5 L 384.8125,443.34375 L 381.28125,440 L 383.625,438.0625 L 387.34375,439.625 L 389.09375,443.34375 L 400.25,443.53125 L 403.15625,442.34375 L 403.75,444.125 L 400.625,446.84375 L 404.9375,447.03125 L 404.15625,449 L 402.96875,450.375 L 412.53125,450.375 L 417.21875,451.9375 L 417.6875,452.5625 L 417.875,448.6875 L 419.28125,447.09375 L 421.0625,446.03125 L 420.875,444.96875 L 419.46875,443.5625 L 418.0625,443.5625 L 417.15625,442.5 L 418.75,441.0625 L 418.75,440.53125 L 417,439.65625 L 417,438.25 L 420.875,438.4375 L 421.78125,437.71875 L 418.40625,434.53125 L 418.59375,430.8125 L 416.46875,429.0625 L 418.21875,425.53125 L 422.46875,422.6875 L 419.28125,420.5625 L 417,422.34375 L 411.6875,423.5625 L 407.4375,423.03125 L 399.84375,419.875 L 395.25,420.03125 L 391.375,418.28125 L 389.9375,416.3125 L 386.9375,412.96875 L 379.875,409.96875 L 379.71875,409.90625 z ", "name" : "Bouches du Rhône"},
	"FR-14" : {"path": "M 202.65625,97.78125 L 198.09375,98.59375 L 190.65625,102.90625 L 182.28125,106.21875 L 175.625,102.5 L 159.625,100.15625 L 155.90625,98.21875 L 150.125,99.6875 L 150.46875,101.84375 L 149.34375,102.96875 L 149.5,104.5625 L 153.21875,108.28125 L 155.46875,109.5625 L 157.09375,107.46875 L 158.375,109.09375 L 156.75,111.1875 L 158.21875,113.59375 L 157.5625,114.40625 L 158.6875,116.6875 L 158.0625,119.25 L 156.4375,121.84375 L 153.84375,123.4375 L 152.40625,122.3125 L 150.96875,123.59375 L 152.5625,125.0625 L 151.28125,127.46875 L 148.21875,128.59375 L 151.9375,133.28125 L 155.625,133.59375 L 158.46875,135.4375 L 162.40625,134.25 L 165.3125,130.875 L 169.34375,132 L 172.875,129.5625 L 175,128.78125 L 177.25,131.03125 L 180.96875,130.375 L 184.1875,132.15625 L 188.21875,130.875 L 191.90625,128.125 L 194.34375,125.375 L 195.96875,125.0625 L 196.4375,127.15625 L 197.71875,126.84375 L 197.875,125.375 L 201.59375,124.75 L 202.875,125.53125 L 206.84375,124.65625 L 207.5,122.75 L 207.3125,121 L 205.34375,120.21875 L 205.15625,118.84375 L 206.90625,117.6875 L 207.125,115.71875 L 205.9375,111.03125 L 203.59375,107.71875 L 205.5625,106.5625 L 205.5625,105.78125 L 203.59375,105.1875 L 202.65625,97.78125 z ", "name" : "Calvados"},
	"FR-15" : {"path": "M 285.84375,323.71875 L 285.25,325.875 L 286.21875,328.21875 L 285.03125,329.59375 L 283.09375,329.59375 L 281.125,327.4375 L 279.375,326.46875 L 279.1875,331.9375 L 275.65625,334.09375 L 273.125,337.59375 L 273.71875,341.125 L 272.9375,342.6875 L 271.9375,345.8125 L 270.375,345.8125 L 268.8125,347.75 L 270,348.9375 L 270.78125,350.875 L 268.25,352.65625 L 269.28125,359.1875 L 272.59375,361.65625 L 270.09375,367.46875 L 272.59375,368.5625 L 271.5,371.875 L 273.6875,372.15625 L 275.34375,369.40625 L 278.125,369.40625 L 278.65625,370.21875 L 284.75,370.21875 L 285.84375,367.75 L 287.21875,367.1875 L 287.78125,362.78125 L 289.15625,362.78125 L 289.15625,358.09375 L 294.6875,353.375 L 295.25,354.21875 L 295.78125,357.8125 L 299.65625,357.25 L 300.5,362.78125 L 302.40625,362.78125 L 302.96875,368.3125 L 304.6875,370.4375 L 307.5,363.96875 L 310.25,355.375 L 313.75,357.71875 L 315.3125,354.21875 L 320.3125,352.40625 L 320.3125,350.75 L 319.25,349.15625 L 317.125,347.90625 L 318.1875,346.3125 L 317.28125,345.4375 L 318.34375,345.09375 L 319.59375,344.03125 L 317.46875,343.84375 L 316.40625,342.4375 L 316.0625,338.71875 L 314.8125,337.46875 L 313.9375,334.3125 L 309.5,334.3125 L 308.625,331.8125 L 307.21875,331.65625 L 306.5,333.0625 L 303.6875,332.875 L 301.03125,328.8125 L 299.96875,328.65625 L 297.84375,327.59375 L 296.59375,328.8125 L 293.4375,328.8125 L 291.84375,325.46875 L 285.84375,323.71875 z ", "name" : "Cantal"},
	"FR-16" : {"path": "M 206.28125,284.875 L 204.59375,286.15625 L 204.8125,288.9375 L 203.75,289.78125 L 200.75,288.0625 L 197.78125,289.125 L 194.375,289.34375 L 191.8125,286.21875 L 191,286.375 L 187.59375,288.0625 L 185.03125,288.71875 L 185.03125,290.1875 L 183.5625,291.90625 L 183.96875,292.96875 L 182.0625,294.03125 L 180.375,300.1875 L 179.9375,304.21875 L 178.46875,304.84375 L 176.34375,304.65625 L 175.90625,303.59375 L 173.5625,303.59375 L 172.3125,304.65625 L 169.53125,304.65625 L 167.1875,305.90625 L 168.90625,306.5625 L 169.125,311.03125 L 169.96875,311.21875 L 168.46875,312.9375 L 170.1875,314 L 172.5,316.125 L 173.78125,318.25 L 175.28125,319.71875 L 174.84375,321.84375 L 174,322.6875 L 175.28125,323.96875 L 175.28125,325.46875 L 172.71875,327.59375 L 173.78125,328.4375 L 175.28125,328.875 L 175.28125,329.28125 L 173.15625,330.125 L 173.34375,331.1875 L 174.625,331.84375 L 178.65625,331.1875 L 180.375,333.09375 L 181.65625,334.8125 L 185.8125,337.625 L 186.40625,336.625 L 190.3125,337.03125 L 192.25,335.25 L 195.78125,331.75 L 195.96875,324.90625 L 205.15625,318.65625 L 205.34375,313.96875 L 208.09375,313.59375 L 209.84375,310.46875 L 210.9375,310.5 L 211.59375,307.53125 L 213.15625,307.34375 L 214.125,304.59375 L 216.09375,304 L 218.4375,302.4375 L 218.0625,297.5625 L 219.8125,296.96875 L 223.3125,296.1875 L 223.125,294.4375 L 222.53125,291.71875 L 219.8125,291.5 L 218.25,289.75 L 219.21875,288 L 219.28125,286.40625 L 217.53125,285.53125 L 214.15625,285.53125 L 212.65625,287.21875 L 209.03125,288.71875 L 207.78125,287.4375 L 206.28125,284.875 z ", "name" : "Charente"},
	"FR-17" : {"path": "M 149.3125,270.625 L 146.5625,270.8125 L 140.59375,274.4375 L 142.03125,275.75 L 138.90625,278.28125 L 138.53125,280.25 L 135.59375,280.625 L 134.03125,278.875 L 130.125,278.5 L 129.71875,276.53125 L 127.375,274.96875 L 124.0625,276.15625 L 126.21875,279.28125 L 128.9375,279.28125 L 131.6875,281.03125 L 133.84375,282.78125 L 137.9375,282.59375 L 138.71875,284.34375 L 141.4375,284.9375 L 142.4375,287.65625 L 144.1875,288.4375 L 144,290.59375 L 141.65625,290.21875 L 140.875,291.375 L 142.625,293.90625 L 141.65625,298.21875 L 139.3125,298.03125 L 139.5,300.75 L 140.09375,301.71875 L 137.34375,301.71875 L 136.96875,300.15625 L 138.71875,297.8125 L 138.125,296.46875 L 137.15625,295.6875 L 136.75,291 L 133.4375,290.59375 L 130.71875,287.28125 L 130.3125,294.125 L 134.8125,297.4375 L 135.1875,301.15625 L 135.96875,305.4375 L 136.375,309.75 L 138.71875,309.53125 L 142.8125,312.875 L 145.5625,314.4375 L 145.75,316.375 L 147.90625,316.78125 L 154.15625,323.03125 L 155.625,329.78125 L 161.40625,329.78125 L 162.375,328.8125 L 162.5625,331.75 L 167.65625,332.34375 L 168.4375,338.59375 L 171.1875,338.78125 L 175.65625,343.28125 L 178,343.65625 L 180.75,342.28125 L 182.6875,343.65625 L 184.25,340.34375 L 185.8125,337.625 L 181.65625,334.8125 L 180.375,333.09375 L 178.65625,331.1875 L 174.625,331.84375 L 173.34375,331.1875 L 173.15625,330.125 L 175.28125,329.28125 L 175.28125,328.875 L 173.78125,328.4375 L 172.71875,327.59375 L 175.28125,325.46875 L 175.28125,323.96875 L 174,322.6875 L 174.84375,321.84375 L 175.28125,319.71875 L 173.78125,318.25 L 172.5,316.125 L 170.1875,314 L 168.46875,312.9375 L 169.96875,311.21875 L 169.125,311.03125 L 168.90625,306.5625 L 167.1875,305.90625 L 169.53125,304.65625 L 172.3125,304.65625 L 173.5625,303.59375 L 175.90625,303.59375 L 176.34375,304.65625 L 178.46875,304.84375 L 179.9375,304.21875 L 180.375,300.1875 L 182.0625,294.03125 L 182.125,294 L 180.59375,292.53125 L 180.15625,290.40625 L 177.40625,289.125 L 173.78125,286.59375 L 169.3125,287 L 166.5625,283.40625 L 162.53125,283.1875 L 159.34375,280.84375 L 159.34375,279.5625 L 157.21875,277.25 L 157.125,274.375 L 154.1875,272.1875 L 150.46875,273.75 L 149.3125,270.625 z ", "name" : "Charente Maritime"},
	"FR-18" : {"path": "M 275.53125,200.84375 L 272.6875,202.25 L 270.15625,204.34375 L 270.28125,205.1875 L 272.8125,205.875 L 273.8125,208 L 275.34375,208.5625 L 274.78125,209.8125 L 274.78125,211.90625 L 272.40625,212.90625 L 270.5625,216.25 L 270.4375,218.09375 L 271.125,218.9375 L 271.40625,219.90625 L 268.90625,221.3125 L 264.96875,221.71875 L 264,220.625 L 262.875,220.75 L 261.75,222 L 261.875,224.53125 L 259.375,224.6875 L 259.21875,226.90625 L 256.96875,228.75 L 257.25,229.59375 L 258.65625,230.71875 L 261.46875,231.125 L 263.5625,230.28125 L 266.21875,230.15625 L 267.5,231.125 L 267.0625,233.78125 L 269.3125,236.75 L 269.3125,238 L 268.34375,239.6875 L 268.34375,240.375 L 269.46875,241.65625 L 271.28125,241.65625 L 271.40625,242.46875 L 269.1875,244.3125 L 269.3125,245.5625 L 267.90625,246.28125 L 268.46875,247.25 L 270.28125,248.78125 L 270.28125,249.90625 L 268.34375,251.03125 L 268.34375,252.71875 L 271,254.125 L 271.5625,256.09375 L 273.25,257.625 L 273.09375,258.1875 L 272.40625,259.03125 L 272.25,261.5625 L 271.84375,262.40625 L 272.96875,264.625 L 273.375,266.3125 L 271.40625,268.28125 L 271.3125,269.84375 L 275.90625,269.28125 L 276.84375,267.28125 L 279.375,264.375 L 284.25,263.375 L 286.8125,264.15625 L 289.53125,262.03125 L 289.34375,260.46875 L 288.375,259.6875 L 288.375,256.5625 L 293.625,251.28125 L 295.59375,253.4375 L 297.34375,251.65625 L 298.90625,251.46875 L 301.625,247.96875 L 306.125,248.34375 L 306.1875,249.40625 L 307.6875,244.625 L 306.71875,242.875 L 306.90625,240.34375 L 307.5,235.25 L 305.34375,233.125 L 305.75,228.4375 L 303.78125,224.3125 L 303.59375,221.59375 L 300.0625,218.84375 L 299.5,216.5 L 301.25,213.96875 L 301.25,210.25 L 299.21875,207.875 L 297.21875,208.6875 L 296.25,208.28125 L 294.84375,206.4375 L 294,206.3125 L 293.4375,206.59375 L 293.28125,209.40625 L 292.03125,209.53125 L 291.0625,208.6875 L 288.8125,205.59375 L 287.96875,204.5 L 284.75,204.34375 L 283.1875,202.375 L 281.9375,202.375 L 281.375,203.09375 L 279.28125,203.375 L 277.59375,201.8125 L 275.625,200.96875 L 275.53125,200.84375 z ", "name" : "Cher"},
	"FR-19" : {"path": "M 265.75,307.625 L 264.90625,309.75 L 261.71875,310.375 L 260.46875,312.5 L 258.96875,312.5 L 256.84375,311.875 L 255.34375,314.40625 L 253.03125,314.625 L 251.53125,317.375 L 249.625,317.375 L 248.125,318.875 L 244.3125,318.4375 L 243.03125,320.5625 L 241.5625,320.375 L 239,323.5625 L 236.65625,322.6875 L 235.5625,324.90625 L 236.40625,327.0625 L 238.5625,328.8125 L 234.65625,332.34375 L 234.65625,335.0625 L 236.21875,335.84375 L 234.65625,337.8125 L 236.8125,339.5625 L 235.25,341.5 L 237,342.6875 L 241.28125,342.5 L 241.09375,346.78125 L 242.71875,349.34375 L 243.3125,349.25 L 247.46875,347.3125 L 252.4375,349.53125 L 256.28125,355.03125 L 258.5,354.75 L 261.8125,351.4375 L 262.90625,353.375 L 265.125,351.1875 L 268.15625,352 L 268.25,352.65625 L 270.78125,350.875 L 270,348.9375 L 268.8125,347.75 L 270.375,345.8125 L 271.9375,345.8125 L 272.9375,342.6875 L 273.71875,341.125 L 273.125,337.59375 L 275.65625,334.09375 L 279.1875,331.9375 L 279.375,326.46875 L 281.125,327.4375 L 283.09375,329.59375 L 285.03125,329.59375 L 286.21875,328.21875 L 285.25,325.875 L 286.21875,322.375 L 285.625,319.0625 L 284.4375,317.6875 L 284.4375,314.9375 L 286.21875,312.03125 L 285.8125,309.28125 L 285.375,308.84375 L 283.40625,310.375 L 279.5625,310.375 L 278.3125,312.28125 L 275.96875,312.28125 L 274.0625,310.375 L 273.1875,309.09375 L 268.3125,309.09375 L 267.25,307.625 L 265.75,307.625 z ", "name" : "Corrèze"},
	"FR-2A" : {"path": "M 445.33847,488.9562 L 445.33847,491.11245 L 447.30722,492.48745 L 450.61972,494.42495 L 450.83847,495.98745 L 448.86972,496.5812 L 445.74472,497.17495 L 445.74472,498.5187 L 446.90097,499.7062 L 447.11972,503.61245 L 451.40097,504.98745 L 452.96347,505.36245 L 454.33847,507.5187 L 453.36972,508.8937 L 451.80722,509.4562 L 450.61972,511.61245 L 449.46347,512.98745 L 450.02597,516.48745 L 452.96347,516.29995 L 453.74472,516.8937 L 456.49472,515.5187 L 457.27597,516.29995 L 455.90097,519.23745 L 457.27597,520.61245 L 454.93222,522.36245 L 453.36972,525.86245 L 457.65097,526.86245 L 463.71347,527.42495 L 461.18222,530.36245 C 461.18222,530.36245 459.99289,529.90364 459.46347,530.1437 C 459.44782,530.15141 459.41536,530.16589 459.40097,530.17495 C 459.39647,530.17828 459.37406,530.20271 459.36972,530.2062 C 459.36553,530.20986 459.34249,530.23363 459.33847,530.23745 C 459.33478,530.24161 459.31073,530.26437 459.30722,530.2687 C 459.30054,530.27771 459.28192,530.29022 459.27597,530.29995 C 459.27319,530.30499 459.27856,530.32597 459.27597,530.3312 C 459.27118,530.34203 459.24871,530.38211 459.24472,530.3937 C 459.24293,530.39969 459.2463,530.41876 459.24472,530.42495 C 459.24199,530.43772 459.21532,530.47387 459.21347,530.48745 C 459.21207,530.50144 459.21394,530.53512 459.21347,530.54995 C 459.21348,531.52651 457.86972,533.8937 457.86972,533.8937 L 459.80722,536.0187 L 463.33847,538.17495 L 469.96347,539.92495 L 471.90097,540.7062 L 473.68222,541.48745 L 472.49472,543.6437 L 475.61972,543.4562 L 476.21347,544.8312 L 479.33847,544.8312 L 480.11972,541.11245 L 478.15097,540.7062 L 480.90097,537.79995 L 479.93222,536.79995 L 480.11972,535.04995 L 483.65097,533.11245 L 483.83847,530.9562 L 481.49472,530.7687 L 479.93222,532.11245 L 479.93222,530.17495 L 483.05722,529.98745 L 484.02597,527.6437 L 484.80722,520.79995 L 484.21347,517.86245 L 484.15097,515.04995 L 480.74472,517.29995 L 476.68222,517.4562 L 476.33847,514.6437 L 476.86972,513.92495 L 475.61972,513.04995 L 475.27597,508.2687 L 474.74472,507.3937 L 472.61972,507.3937 L 471.55722,506.5187 L 471.55722,503.1437 L 470.15097,502.2687 L 469.08847,501.73745 L 466.96347,499.0812 L 467.11972,497.48745 L 464.49472,497.48745 L 463.58847,494.8312 L 459.86972,494.8312 L 457.93222,492.17495 L 458.46347,491.29995 L 457.24472,490.5812 L 454.40097,491.11245 L 453.33847,490.42495 L 449.46347,490.42495 L 449.08847,489.36245 L 446.90097,488.9562 L 445.33847,488.9562 z ", "name" : "Corse du Sud"},
	"FR-2B" : {"path": "M 477.96347,449.8937 L 475.02597,451.86245 L 475.43222,453.79995 L 476.99472,455.7687 L 475.24472,457.11245 L 476.02597,458.67495 L 474.83847,460.04995 L 474.83847,461.79995 L 476.80722,463.5812 L 476.80722,466.29995 L 475.61972,468.8312 L 474.27597,469.42495 L 472.71347,467.2687 L 469.96347,467.48745 L 469.36972,467.0812 L 467.02597,467.0812 L 464.90097,469.04995 L 464.08847,472.36245 L 459.02597,473.3312 L 455.11972,476.6437 L 454.33847,478.79995 L 452.40097,478.61245 L 451.40097,477.42495 L 450.83847,480.7687 L 449.46347,481.3312 L 449.05722,484.4562 L 449.65097,485.8312 L 447.49472,487.3937 L 446.90097,488.9562 L 449.08847,489.36245 L 449.46347,490.42495 L 453.33847,490.42495 L 454.40097,491.11245 L 457.24472,490.5812 L 458.46347,491.29995 L 457.93222,492.17495 L 459.86972,494.8312 L 463.58847,494.8312 L 464.49472,497.48745 L 467.11972,497.48745 L 466.96347,499.0812 L 469.08847,501.73745 L 470.15097,502.2687 L 471.55722,503.1437 L 471.55722,506.5187 L 472.61972,507.3937 L 474.74472,507.3937 L 475.27597,508.2687 L 475.61972,513.04995 L 476.86972,513.92495 L 476.33847,514.6437 L 476.68222,517.4562 L 480.74472,517.29995 L 484.15097,515.04995 L 484.02597,509.2687 L 488.71347,502.6437 L 488.71347,491.7062 L 486.77597,487.98745 L 486.18222,476.2687 L 484.80722,474.11245 L 482.27597,472.17495 L 481.86972,464.92495 L 483.05722,461.61245 L 481.49472,456.3312 L 480.52597,452.04995 L 479.71347,450.86245 L 477.96347,449.8937 z ", "name" : "Haute-Corse"},
	"FR-21" : {"path": "M 363.375,177.25 L 362.96875,179.78125 L 360.4375,181.15625 L 354,181.34375 L 354.28125,182.75 L 354.4375,184.15625 L 352.46875,185.5625 L 352.46875,187.9375 L 352.875,188.375 L 354.4375,188.375 L 355.40625,190.03125 L 354.84375,192.84375 L 352.59375,194.53125 L 352.59375,196.21875 L 353.3125,196.78125 L 353.15625,197.1875 L 351.75,197.75 L 351.34375,199.84375 L 349.09375,204.625 L 347.5625,206.875 L 347.5625,209.125 L 348.125,210.09375 L 347.28125,211.21875 L 345.3125,212.1875 L 345.4375,214.15625 L 347.28125,215.28125 L 347.96875,216.8125 L 347.6875,218.9375 L 347.28125,220.46875 L 348.25,222.15625 L 351.0625,222.71875 L 352.3125,224.6875 L 352.3125,225.53125 L 351.46875,225.8125 L 351.46875,227.84375 L 351.625,227.90625 L 355.40625,231.8125 L 359.34375,231.6875 L 362.84375,234.34375 L 365.375,236.1875 L 365.5,238.5625 L 368.15625,239.125 L 370.40625,240.9375 L 376.3125,238.84375 L 380.375,237.5625 L 382.1875,237.28125 L 382.75,236.46875 L 384.71875,236.59375 L 386.25,237.5625 L 388.5,237 L 390.75,235.46875 L 392.4375,235.65625 L 392.46875,235.46875 L 393.8125,234.6875 L 393.625,233.6875 L 393.25,232.53125 L 394.21875,230.96875 L 397.53125,229.40625 L 397.53125,227.84375 L 398.71875,226.28125 L 399.875,224.71875 L 399.5,223.34375 L 400.0625,221.1875 L 400.46875,218.0625 L 401.25,218.0625 L 401.0625,216.90625 L 400.28125,216.125 L 400.0625,212.21875 L 398.3125,212.03125 L 397.9375,208.90625 L 395.78125,207.90625 L 396.5625,206.9375 L 397.75,206.5625 L 400.28125,203.625 L 400.0625,202.0625 L 398.5,198.9375 L 396.1875,198.53125 L 395.375,200.5 L 391.09375,201.46875 L 390.6875,200.5 L 387.5625,196.59375 L 385.8125,197.5625 L 383.46875,197.375 L 382.6875,195.8125 L 379.5625,196 L 379.375,192.6875 L 377.625,191.5 L 380.15625,188.78125 L 375.65625,182.71875 L 372.15625,179 L 369.03125,177.25 L 363.375,177.25 z ", "name" : "Côte d'Or"},
	"FR-22" : {"path": "M 69.78125,123.21875 L 68,124.59375 L 63.53125,125.15625 L 62.53125,126.53125 L 59.40625,124.1875 L 55.3125,126.9375 L 56.875,129.0625 L 54.15625,132.78125 L 54.03125,132.71875 L 52.90625,137.96875 L 55.3125,138.125 L 55.15625,140.21875 L 56.9375,141.34375 L 55.3125,142.96875 L 54.1875,143.78125 L 54.34375,145.6875 L 56.78125,146.5 L 54.5,147.15625 L 54.5,149.5625 L 55.96875,151.5 L 56.28125,157.15625 L 55.3125,158.125 L 56.125,161.03125 L 59.1875,161.84375 L 59.5,163.4375 L 61.4375,163.59375 L 63.0625,162.46875 L 64.03125,163.4375 L 67.75,165.0625 L 70.8125,163.4375 L 71.59375,161.84375 L 74.1875,161.65625 L 77.09375,164.25 L 79.84375,163.59375 L 82.25,166.03125 L 83.375,166.03125 L 84.5,167.46875 L 86.78125,167.46875 L 87.5625,166.34375 L 88.53125,168.4375 L 90.96875,169.40625 L 94.03125,167.46875 L 94.03125,165.375 L 96.28125,164.5625 L 97.71875,164.5625 L 99.5,167.8125 L 103.375,168.125 L 105.3125,165.6875 L 107.40625,161.1875 L 110.15625,160.21875 L 111.59375,158.125 L 113.0625,159.5625 L 116.125,158.9375 L 117.09375,150.0625 L 118.0625,146.5 L 117.09375,144.5625 L 115.46875,143.9375 L 114.375,138.03125 L 113.125,139.4375 L 109.40625,139.03125 L 109.03125,141.1875 L 106.6875,141.375 L 106.5,138.65625 L 104.53125,138.0625 L 103.15625,139.625 L 103.15625,135.71875 L 100.8125,137.46875 L 97.3125,136.875 L 96.125,139.21875 L 88.90625,143.125 L 88.90625,145.09375 L 87.34375,145.09375 L 87.34375,141.5625 L 83.25,139.625 L 83.625,136.09375 L 79.9375,133.375 L 79.9375,130.0625 L 77.1875,129.46875 L 77.375,126.34375 L 75.25,126.15625 L 75.4375,124 L 71.53125,124 L 70.9375,125.9375 L 69.78125,123.21875 z ", "name" : "Côtes d'Armor"},
	"FR-23" : {"path": "M 256.125,267.875 L 254.96875,271 L 251.4375,270.8125 L 250.65625,270.40625 L 248.3125,270.625 L 246.5625,269.4375 L 243.1875,273.3125 L 243.25,276.1875 L 240.90625,280.84375 L 241.34375,283.1875 L 243.875,283.8125 L 245.59375,288.0625 L 247.28125,289.78125 L 246.65625,297.84375 L 250.25,296.78125 L 251.75,298.6875 L 249.40625,300.59375 L 249.40625,302.53125 L 251.3125,302.71875 L 254.71875,302.53125 L 255.78125,301.03125 L 256.625,301.03125 L 256.21875,303.59375 L 258.96875,304.84375 L 261.53125,306.5625 L 261.53125,307.625 L 260.03125,307.625 L 260.46875,310.15625 L 261.46875,310.78125 L 261.71875,310.375 L 264.90625,309.75 L 265.75,307.625 L 267.25,307.625 L 268.3125,309.09375 L 273.1875,309.09375 L 274.0625,310.375 L 275.96875,312.28125 L 278.3125,312.28125 L 279.5625,310.375 L 283.40625,310.375 L 285.375,308.84375 L 281.3125,304.78125 L 280.9375,303.03125 L 284.65625,300.875 L 286.8125,299.71875 L 287.375,296.96875 L 289.71875,295.21875 L 288.9375,291.5 L 287.375,289.5625 L 287,283.5 L 284.84375,278.4375 L 282.6875,277.65625 L 281.125,274.90625 L 279.75,276.65625 L 278.40625,274.90625 L 278.40625,272.5625 L 276.0625,269.25 L 269.625,270.03125 L 265.90625,269.0625 L 256.125,267.875 z ", "name" : "Creuse"},
	"FR-24" : {"path": "M 209.84375,310.46875 L 208.09375,313.59375 L 205.34375,313.96875 L 205.15625,318.65625 L 195.96875,324.90625 L 195.78125,331.75 L 192.25,335.25 L 190.3125,337.03125 L 186.40625,336.625 L 184.25,340.34375 L 183.6875,341.5625 L 184.71875,342.78125 L 186.65625,342.78125 L 187.71875,344.375 L 186.65625,347.21875 L 186.125,350.375 L 184.34375,351.4375 L 184.34375,352.5 L 185.0625,353.5625 L 185.0625,355.5 L 183.65625,357.28125 L 185.40625,358.15625 L 185.9375,359.59375 L 191.96875,359.40625 L 194.4375,356.40625 L 196.90625,358 L 194.96875,359.40625 L 195.125,363.28125 L 197.96875,365.25 L 198.3125,368.9375 L 201.3125,370 L 203.09375,368.40625 L 206.96875,368.40625 L 209.09375,366.65625 L 210.34375,366.84375 L 210.6875,368.25 L 214.59375,368.25 L 215.46875,367.1875 L 216.875,367.375 L 218.46875,369.125 L 218.46875,370.375 L 217.0625,371.25 L 217.59375,372.5 L 219.53125,372.65625 L 222,370.375 L 224.125,370.375 L 225.53125,371.96875 L 228.59375,373.25 L 228.78125,372.75 L 230.5625,371 L 230.75,368.0625 L 235.03125,367.6875 L 237.78125,363.78125 L 236.59375,363.375 L 236.40625,361.25 L 239.71875,360.84375 L 239.9375,358.90625 L 241.5,357.90625 L 243.25,354.78125 L 241.5,352.84375 L 241.5,350.6875 L 242.84375,349.53125 L 241.09375,346.78125 L 241.28125,342.5 L 237,342.6875 L 235.25,341.5 L 236.8125,339.5625 L 234.65625,337.8125 L 236.21875,335.84375 L 234.65625,335.0625 L 234.65625,332.34375 L 238.5625,328.8125 L 236.40625,327.0625 L 235.25,324.125 L 231.125,323.53125 L 229.75,322.5625 L 232.6875,321.1875 L 231.71875,319.84375 L 227.4375,319.25 L 226.4375,315.34375 L 220.1875,314.75 L 218.8125,316.71875 L 217.46875,317.09375 L 215.6875,314.75 L 216.5,312.59375 L 215.5,310.65625 L 209.84375,310.46875 z ", "name" : "Dordogne"},
	"FR-25" : {"path": "M 447.40625,199.71875 L 447.21875,199.9375 L 444.96875,199.9375 L 443.8125,201.53125 L 442.34375,202.375 L 442.34375,204.34375 L 438.6875,204.78125 L 436.71875,203.375 L 434.0625,203.78125 L 431.53125,205.75 L 429.71875,208.84375 L 427.90625,209.40625 L 427.0625,211.5 L 424.8125,211.90625 L 421.71875,214.4375 L 417.65625,214.3125 L 416.40625,215.28125 L 415.28125,215.28125 L 411.34375,218.5 L 409.5625,218.4375 L 409.53125,219.625 L 409.8125,221.71875 L 412.34375,223.40625 L 413.75,225.25 L 413.3125,227.1875 L 412.0625,230.15625 L 411.21875,232.09375 L 416.6875,233.9375 L 420.1875,233.65625 L 420.46875,236.59375 L 420.46875,240.53125 L 424.8125,241.9375 L 426.78125,242.46875 L 429.59375,245.15625 L 429.3125,247.40625 L 428.03125,249.21875 L 424.53125,250.34375 L 425.375,252.3125 L 425.78125,253.84375 L 424.25,255.375 L 424.40625,256.78125 L 426.78125,257 L 426.8125,256.8125 L 438.90625,245.46875 L 438.53125,236.09375 L 442.8125,233.96875 L 445.75,232.59375 L 448.46875,230.0625 L 448.6875,226.34375 L 451.40625,224.96875 L 457.65625,217.75 L 456.6875,215.40625 L 458.84375,214.4375 L 461.375,211.3125 L 460,209.9375 L 455.3125,210.90625 L 455.125,210.125 L 459.4375,205.15625 L 447.40625,199.71875 z ", "name" : "Doubs"},
	"FR-26" : {"path": "M 384.9375,329.28125 L 382.1875,331.1875 L 379.84375,332.03125 L 377.5,331.3125 L 377.5,339.28125 L 379,345.21875 L 380.0625,348.625 L 381.75,352.875 L 380.6875,355.625 L 378.78125,359.25 L 378.34375,361.375 L 376.4375,361.78125 L 377.5,366.6875 L 377.5,370.90625 L 374.9375,373.90625 L 374.3125,377.71875 L 375.375,379.40625 L 374.75,380.90625 L 374.75,382.40625 L 375.59375,382.59375 L 376.21875,383.46875 L 376,387.59375 L 378.59375,387.21875 L 379.75,388.59375 L 379.1875,392.5 L 379.96875,393.46875 L 382.875,390.53125 L 385.4375,390.34375 L 386,388.78125 L 382.6875,388.375 L 382.125,384.875 L 384.25,381.5625 L 387,381.34375 L 389.71875,383.90625 L 387,387.59375 L 387.78125,388.96875 L 391.6875,389.375 L 394.21875,387.21875 L 392.84375,390.15625 L 393.25,392.5 L 397.34375,392.875 L 402.8125,393.28125 L 403.59375,395.8125 L 406.53125,397.96875 L 409.0625,398.15625 L 410.8125,396.59375 L 411.8125,393.65625 L 413.375,395.03125 L 414.53125,396.40625 L 415.3125,389.15625 L 413.375,388.78125 L 412.1875,386.25 L 405.5625,384.46875 L 404.75,381.15625 L 407.125,379.59375 L 405.15625,378.21875 L 405.5625,376.46875 L 408.6875,376.65625 L 411.40625,378.03125 L 413.5625,375.5 L 411.40625,373.75 L 411.59375,371.40625 L 412.78125,367.6875 L 416.875,367.28125 L 420.1875,365.9375 L 420.53125,365.15625 L 417,364.75 L 415.75,363.6875 L 413.8125,363.5 L 411.90625,362 L 409.375,360.5 L 406.59375,360.5 L 405.53125,359.4375 L 405.34375,343.53125 L 404.6875,343.53125 L 403.84375,345 L 401.9375,346.28125 L 397.46875,345 L 394.0625,343.9375 L 392.59375,344.375 L 392.15625,343.3125 L 393.21875,340.34375 L 392.78125,337.34375 L 393.65625,335.21875 L 391.53125,332.25 L 388.5625,332.25 L 384.9375,329.28125 z ", "name" : "Drôme"},
	"FR-27" : {"path": "M 211,94.5625 L 209.3125,94.96875 L 207.0625,97.375 L 202.6875,97.9375 L 203.59375,105.1875 L 205.5625,105.78125 L 205.5625,106.5625 L 203.59375,107.71875 L 205.9375,111.03125 L 207.125,115.71875 L 206.90625,117.6875 L 205.15625,118.84375 L 205.34375,120.21875 L 207.3125,121 L 207.5,122.75 L 205.9375,127.25 L 207.5,129.21875 L 212.96875,129.40625 L 214.125,132.125 L 216.09375,134.09375 L 218.8125,135.0625 L 219.625,138 L 218.25,139.9375 L 221.09375,141.84375 L 223.90625,139.15625 L 226.625,139.15625 L 233.6875,135.46875 L 236,136.4375 L 240.90625,136.4375 L 242.0625,135.0625 L 242.0625,132.125 L 245.96875,130.1875 L 245.96875,127.0625 L 247.03125,126.1875 L 246.9375,125.3125 L 247.9375,124.3125 L 246.1875,123.9375 L 246.1875,122.375 L 245.1875,120.8125 L 245.96875,119.84375 L 251.4375,118.28125 L 252.8125,115.9375 L 254,111.625 L 255.4375,109.84375 L 255.75,107.53125 L 257.5,108.5 L 258.875,108.125 L 257.875,106.5625 L 257.3125,102.0625 L 255.5625,100.5 L 255.59375,100.375 L 252.5,100.03125 L 247.3125,97.375 L 242.8125,97.5 L 240.4375,99.59375 L 239.15625,103.25 L 234.125,103.8125 L 229.34375,105.21875 L 231.03125,106.34375 L 230.34375,108.03125 L 228.09375,108.03125 L 226.84375,105.34375 L 225.4375,105.34375 L 223.1875,103.65625 L 226.28125,102.6875 L 221.5,99.3125 L 216.75,99.59375 L 215.625,97.65625 L 212.9375,97.9375 L 211,94.5625 z ", "name" : "Eure"},
	"FR-28" : {"path": "M 247.15625,126.09375 L 245.96875,127.0625 L 245.96875,130.1875 L 242.0625,132.125 L 242.0625,135.0625 L 240.90625,136.4375 L 236,136.4375 L 233.6875,135.46875 L 226.625,139.15625 L 223.90625,139.15625 L 221.09375,141.84375 L 221.75,142.28125 L 221.9375,145.625 L 226.0625,149.125 L 226.4375,156.34375 L 224.5,158.6875 L 221.5625,159.28125 L 218.625,161.03125 L 219.03125,162.59375 L 220.375,164.375 L 220.375,169 L 220.78125,169.0625 L 223.5,171 L 222.5,172.25 L 224.4375,173.21875 L 227.53125,172.65625 L 229.34375,172.65625 L 229.21875,173.5 L 227.53125,174.46875 L 228.65625,175.3125 L 231.46875,175.3125 L 232.4375,177.5625 L 234.125,178.53125 L 235.375,181.34375 L 239.71875,182.46875 L 242.40625,182.1875 L 244.78125,179.9375 L 246.90625,180.53125 L 247.4375,179.375 L 247.3125,178.125 L 248.4375,177.28125 L 250.25,178.40625 L 251.375,177.5625 L 251.375,176.03125 L 252.90625,175.03125 L 254.3125,175.59375 L 255.5625,177 L 257.8125,175.75 L 260.1875,175.75 L 261.875,173.90625 L 262.875,170.28125 L 264.40625,170 L 264,166.34375 L 265.8125,164.8125 L 265.25,163.6875 L 265.46875,163.3125 L 264.9375,163.375 L 264.53125,158.125 L 264.125,157.53125 L 263.75,155 L 259.65625,154.21875 L 257.875,152.0625 L 257.3125,147.75 L 254.96875,147.375 L 254.5625,145.21875 L 251.84375,143.28125 L 250.46875,139.9375 L 251.84375,137.59375 L 250.46875,136.03125 L 250.46875,134.09375 L 251.25,131.9375 L 249.6875,130.375 L 249.09375,128.03125 L 247.15625,126.09375 z ", "name" : "Eure et Loir"},
	"FR-29" : {"path": "M 40.65625,129.0625 L 38.53125,131.40625 L 36.1875,130.4375 L 31.875,130.84375 L 31.09375,132.78125 L 28.5625,133.375 L 28.15625,131.21875 L 23.6875,131.8125 L 23.6875,133.1875 L 20.5625,133.375 L 19.1875,132.40625 L 17.625,133.1875 L 17.21875,135.53125 L 11.96875,135.71875 L 9.21875,139.03125 L 11.5625,140.78125 L 8.4375,143.34375 L 9.40625,145.09375 L 8.625,149.375 L 11.75,149.78125 L 12.9375,148.59375 L 13.53125,149.375 L 20.9375,148.40625 L 25.8125,144.90625 L 21.53125,149 L 21.90625,150.9375 L 25.8125,149.1875 L 25.03125,151.9375 L 29.34375,152.125 L 29.15625,153.28125 L 24.46875,153.09375 L 20.75,152.125 L 16.25,149.96875 L 13.53125,153.09375 L 17.03125,154.28125 L 16.84375,159.53125 L 17.8125,158.75 L 19.96875,155.4375 L 24.0625,157.78125 L 26.03125,158.1875 L 26.8125,161.3125 L 25.625,163.4375 L 23.09375,163.25 L 20.75,163.25 L 16.84375,163.84375 L 10.1875,164.21875 L 8.84375,166 L 10.78125,167.15625 L 12.9375,166.96875 L 14.6875,168.53125 L 17.21875,168.34375 L 21.34375,173.03125 L 22.3125,178.09375 L 20.9375,180.84375 L 25.03125,181.625 L 29.53125,181.40625 L 30.5,179.65625 L 28.75,177.3125 L 30.5,178.09375 L 32.28125,177.90625 L 35.40625,179.65625 L 37.34375,179.28125 L 37.34375,175.9375 L 38.125,179.28125 L 40.65625,183.375 L 46.125,183.75 L 46.34375,182.59375 L 47.6875,184.53125 L 51.03125,185.125 L 53.5625,185.125 L 53.71875,185.34375 L 54.65625,181.5 L 56.9375,181.5 L 58.0625,179.71875 L 59.5,179.71875 L 59.65625,176.84375 L 60.46875,175.875 L 58.875,173.75 L 57.90625,174.90625 L 55.46875,172.96875 L 50.46875,172.15625 L 49.65625,169.25 L 48.21875,165.53125 L 48.0625,164.09375 L 50.46875,162.15625 L 52.75,162.15625 L 56,160.59375 L 55.3125,158.125 L 56.28125,157.15625 L 55.96875,151.5 L 54.5,149.5625 L 54.5,147.15625 L 56.78125,146.5 L 54.34375,145.6875 L 54.1875,143.78125 L 55.3125,142.96875 L 56.9375,141.34375 L 55.15625,140.21875 L 55.3125,138.125 L 52.90625,137.96875 L 54.03125,132.71875 L 50.8125,130.84375 L 45.34375,131.03125 L 45.34375,134.9375 L 43.78125,134.9375 L 43.40625,133.1875 L 41.0625,133.5625 L 40.65625,129.0625 z ", "name" : "Finistère"},
	"FR-30" : {"path": "M 346.1875,381.03125 L 345.21875,382.90625 L 344,383.96875 L 341.6875,384.34375 L 344.5,387.34375 L 344.5,391.40625 L 345.75,391.75 L 344.34375,393.34375 L 344.34375,396.34375 L 342.03125,399.875 L 336.90625,399.34375 L 333.90625,396.53125 L 331.78125,397.0625 L 332.5,398.8125 L 331.625,400.0625 L 326.46875,401.125 L 320.4375,397.09375 L 319.28125,398.125 L 319.28125,400.90625 L 317.0625,401.4375 L 317.625,403.65625 L 320.375,404.21875 L 323.40625,404.21875 L 324.25,408.0625 L 320.65625,409.71875 L 320.65625,411.46875 L 323.46875,412.4375 L 323.46875,414.03125 L 324.71875,414.75 L 325.78125,413.84375 L 327.1875,413.84375 L 327.90625,415.4375 L 330.03125,415.4375 L 331.09375,411.71875 L 332.84375,411.71875 L 335.5,408.375 L 338.6875,408.71875 L 339.21875,413.3125 L 340.4375,414.75 L 342.40625,413.6875 L 345.75,415.4375 L 347,417.5625 L 352.8125,421.09375 L 354.9375,426.0625 L 354.9375,428.6875 L 351.21875,430.8125 L 348.8125,432.96875 L 351.8125,433.1875 L 351.8125,437.09375 L 356.28125,436.875 L 358.6875,437 L 360.4375,432.9375 L 366.78125,429.0625 L 365.40625,427.125 L 367.0625,422.71875 L 372.84375,423.53125 L 374.25,413.03125 L 381.96875,408.625 L 381.96875,406.125 L 376.15625,400.34375 L 376.15625,395.90625 L 372.84375,390.40625 L 365.9375,386.53125 L 365.40625,389.5625 L 362.625,389.84375 L 361.8125,386.8125 L 359.03125,387.34375 L 358.5,391.21875 L 356.28125,390.40625 L 351.59375,387.34375 L 349.375,388.46875 L 349.375,382.9375 L 346.1875,381.03125 z ", "name" : "Gard"},
	"FR-31" : {"path": "M 245,412.4375 L 242.15625,413.5 L 241.28125,414.90625 L 240.21875,413.6875 L 238.28125,413.5 L 237.90625,415.28125 L 236.6875,415.78125 L 238.4375,416.6875 L 237.21875,418.625 L 232.78125,419.875 L 230.84375,417.5625 L 229.09375,417.5625 L 227.65625,418.4375 L 222.53125,418.4375 L 222,418.65625 L 222.53125,420.5625 L 225.53125,423.5625 L 225.375,425.15625 L 227.65625,427.46875 L 229.09375,427.46875 L 229.78125,429.21875 L 231.5625,429.40625 L 232.09375,431 L 230.3125,431.71875 L 226.59375,433.3125 L 224.84375,437.375 L 223.4375,441.59375 L 222.53125,442.84375 L 219.71875,440.90625 L 213.15625,440.375 L 209.625,444.96875 L 207.6875,446.03125 L 206.4375,447.78125 L 205.03125,449.90625 L 205.03125,451.15625 L 202.75,452.03125 L 200.96875,455.03125 L 200.78125,456.625 L 203.96875,458.9375 L 204.5,461.21875 L 203.4375,463 L 205.5625,462.28125 L 206.625,463.1875 L 207.5,466.875 L 205.03125,468.3125 L 205.21875,470.25 L 203.96875,471.46875 L 202.21875,470.59375 L 200.25,470.59375 L 200.5,481.09375 L 208.4375,481.625 L 208.84375,472.03125 L 211.5625,472.4375 L 215.59375,474.78125 L 217.25,473.25 L 216.53125,472.1875 L 216.53125,468.65625 L 218.28125,466.53125 L 222.90625,465.28125 L 223.59375,462.65625 L 222.53125,461.9375 L 222.375,458.5625 L 226.4375,456.09375 L 228.71875,455.9375 L 231.03125,456.625 L 232.96875,458.40625 L 234.21875,458.5625 L 235.28125,456.8125 L 234.375,455.5625 L 232.78125,455.03125 L 232.625,454.5 L 233.84375,452.75 L 238.09375,452.375 L 238.625,451.34375 L 237.90625,450.09375 L 235.4375,448.3125 L 235.96875,447.25 L 237.21875,446.375 L 238.4375,446.71875 L 240.40625,449.375 L 240.5625,451.15625 L 243.9375,451.5 L 244.625,449.90625 L 243.03125,447.96875 L 244.09375,448.3125 L 248,450.09375 L 250.125,449.75 L 251.6875,449.09375 L 251.3125,448.6875 L 253.8125,447.5625 L 254.34375,444.53125 L 257.40625,443.15625 L 256.5625,441.21875 L 259.34375,438.71875 L 260.71875,441.21875 L 264.84375,439.84375 L 265.625,439.71875 L 265.6875,438.4375 L 265.6875,435.9375 L 263.5625,436.3125 L 260.90625,435.59375 L 258.59375,432.78125 L 257.71875,431.53125 L 253.125,429.59375 L 252.0625,428 L 253.46875,427.46875 L 253.46875,425.53125 L 252.0625,423.9375 L 250.28125,421.09375 L 250.125,418.625 L 249.59375,418.28125 L 247.46875,415.78125 L 246.59375,413.15625 L 245,412.4375 z ", "name" : "Haute Garonne"},
	"FR-32" : {"path": "M 207.875,401.875 L 202.03125,402.4375 L 200.46875,405.1875 L 196.9375,405.5625 L 193.625,406.15625 L 192.25,404.21875 L 189.125,407.34375 L 186.8125,405.375 L 185.4375,408.3125 L 185.625,410.84375 L 183.46875,411.4375 L 182.5,410.0625 L 181.53125,407.125 L 178.78125,409.46875 L 176.84375,408.6875 L 174.6875,409.09375 L 172.75,411.4375 L 175.0625,415.34375 L 173.5,416.90625 L 174.09375,420.21875 L 172.15625,422.75 L 170.78125,426.46875 L 172.34375,429.21875 L 177.28125,429.5625 L 179.21875,428.53125 L 182.21875,428.53125 L 182.0625,431.875 L 184.34375,433.125 L 186.65625,433.46875 L 187.71875,436.3125 L 188.25,436.84375 L 187.90625,438.59375 L 187.1875,439.3125 L 189.3125,440.71875 L 189.46875,442.3125 L 192.125,442.3125 L 192.84375,441.59375 L 195.125,441.59375 L 195.84375,443.1875 L 198.3125,443.1875 L 199.03125,444.625 L 203.8125,444.625 L 207.375,446.46875 L 207.6875,446.03125 L 209.625,444.96875 L 213.15625,440.375 L 219.71875,440.90625 L 222.53125,442.84375 L 223.4375,441.59375 L 224.84375,437.375 L 226.59375,433.3125 L 230.3125,431.71875 L 232.09375,431 L 231.5625,429.40625 L 229.78125,429.21875 L 229.09375,427.46875 L 227.65625,427.46875 L 225.375,425.15625 L 225.53125,423.5625 L 222.53125,420.5625 L 222,418.65625 L 220.0625,419.5 L 219.53125,418.4375 L 220.78125,416.5 L 219.34375,415.09375 L 219.34375,412.625 L 218.125,411.375 L 214.21875,411.1875 L 214.21875,408.90625 L 216.34375,407.3125 L 216.34375,405.53125 L 218.65625,404.46875 L 217.40625,403.78125 L 216,404.46875 L 213.15625,404.46875 L 212.28125,403.65625 L 211.8125,403.8125 L 210.8125,404.78125 L 207.875,401.875 z ", "name" : "Gers"},
	"FR-33" : {"path": "M 141.25,315.21875 L 138.125,319.90625 L 137.15625,336.3125 L 134.625,352.90625 L 132.84375,365.78125 L 132.65625,369.125 L 134.03125,364.625 L 136.75,361.09375 L 140.65625,364.625 L 141.0625,365.78125 L 142.21875,367.34375 L 137.34375,367.5625 L 136.5625,366.375 L 134.625,367.15625 L 134.21875,370.09375 L 132.0625,373.03125 L 132.0625,377.5 L 132.03125,377.6875 L 133.625,377.625 L 139.8125,374.4375 L 143.15625,375.65625 L 143,377.96875 L 141.5625,379.71875 L 143.15625,380.78125 L 146.53125,379.375 L 148.8125,380.96875 L 150.25,380.78125 L 152.34375,379.03125 L 155.90625,378.5 L 157.125,379.5625 L 158.1875,380.4375 L 158.1875,381.5 L 157.3125,382.5625 L 160.5,383.4375 L 162.4375,384.6875 L 162.625,386.28125 L 164.375,386.4375 L 166.84375,389.09375 L 167.5625,393.53125 L 171.09375,394.75 L 174.46875,394.59375 L 174.46875,393.53125 L 174.09375,390 L 175.15625,390.34375 L 177.15625,392.78125 L 180.28125,392.28125 L 181.71875,390.875 L 181.53125,388.9375 L 180.28125,387.875 L 180.65625,385.90625 L 182.59375,385.90625 L 184.53125,384.6875 L 183.65625,382.90625 L 183.125,380.25 L 184.53125,377.78125 L 187.53125,373.1875 L 189.3125,371.0625 L 190.90625,370.53125 L 191.25,368.78125 L 189.125,368.59375 L 188.25,366.65625 L 188.9375,364.71875 L 191.4375,364.1875 L 193.1875,363.65625 L 195.25,363.375 L 195.125,363.28125 L 194.96875,359.40625 L 196.90625,358 L 194.4375,356.40625 L 191.96875,359.40625 L 185.9375,359.59375 L 185.40625,358.15625 L 183.65625,357.28125 L 185.0625,355.5 L 185.0625,353.5625 L 184.34375,352.5 L 184.34375,351.4375 L 186.125,350.375 L 186.65625,347.21875 L 187.71875,344.375 L 186.65625,342.78125 L 184.71875,342.78125 L 183.6875,341.5625 L 182.6875,343.65625 L 180.75,342.28125 L 178,343.65625 L 175.65625,343.28125 L 171.1875,338.78125 L 168.4375,338.59375 L 167.65625,332.34375 L 162.5625,331.75 L 162.375,328.8125 L 161.40625,329.78125 L 155.625,329.78125 L 155.90625,331.03125 L 157.28125,336.6875 L 157.65625,342.34375 L 156.6875,343.90625 L 155.71875,339.21875 L 152.96875,328.5 L 143,319.5 L 143.21875,315.40625 L 141.25,315.21875 z ", "name" : "Gironde"},
	"FR-34" : {"path": "M 335.5,408.375 L 332.84375,411.71875 L 331.09375,411.71875 L 330.03125,415.4375 L 327.90625,415.4375 L 327.1875,413.84375 L 325.78125,413.84375 L 324.71875,414.75 L 323.46875,414.03125 L 323.46875,412.4375 L 320.65625,411.46875 L 320.65625,412.5 L 317.34375,413.03125 L 315.6875,414.4375 L 316.21875,417.75 L 313.1875,417.75 L 310.15625,416.09375 L 308.5,416.09375 L 308.5,418.03125 L 308.78125,423.8125 L 305.46875,423.8125 L 303.8125,423.8125 L 302.6875,426.03125 L 295.5,428.5 L 292.75,426.59375 L 291.09375,429.0625 L 290.28125,431.8125 L 293.3125,434.59375 L 292.1875,438.1875 L 288,439.5 L 288.84375,441.78125 L 287.0625,443.90625 L 288.125,446.375 L 290.25,447.96875 L 292.71875,446.375 L 294.5,450.09375 L 298.1875,448.84375 L 298.375,445.3125 L 300.84375,445.3125 L 300.3125,443.1875 L 301.375,442.65625 L 301.75,445.65625 L 303.84375,446.90625 L 305.625,446.71875 L 307.9375,450.09375 L 310.40625,450.28125 L 311.28125,453.09375 L 313.78125,453.1875 L 313.90625,452.125 L 320.9375,449.96875 L 321.71875,448.21875 L 327.1875,448.03125 L 328.9375,445.875 L 339.5,437.46875 L 346.125,432.78125 L 348.8125,432.96875 L 351.21875,430.8125 L 354.9375,428.6875 L 354.9375,426.0625 L 352.8125,421.09375 L 347,417.5625 L 345.75,415.4375 L 342.40625,413.6875 L 340.4375,414.75 L 339.21875,413.3125 L 338.6875,408.71875 L 335.5,408.375 z ", "name" : "Hérault"},
	"FR-35" : {"path": "M 116.25,135.90625 L 114.375,138.03125 L 115.46875,143.9375 L 117.09375,144.5625 L 118.0625,146.5 L 117.09375,150.0625 L 116.125,158.9375 L 113.0625,159.5625 L 111.59375,158.125 L 110.15625,160.21875 L 107.40625,161.1875 L 105.3125,165.6875 L 104.03125,167.3125 L 104.5,169.40625 L 103.6875,172.625 L 102.25,173.9375 L 102.25,175.21875 L 103.21875,175.53125 L 105.96875,175.53125 L 108.375,177 L 110,179.90625 L 108.53125,181.84375 L 109.03125,183.75 L 111.125,183.75 L 111.28125,185.6875 L 109.65625,187.625 L 107.90625,188.4375 L 109.03125,189.09375 L 109.34375,190.0625 L 107.5625,191.5 L 109.625,195.375 L 113.5625,193.28125 L 125.65625,192.6875 L 126.4375,190.53125 L 128.40625,188.59375 L 132.6875,188 L 132.875,185.84375 L 135.8125,186.25 L 137.5625,188.59375 L 141.5,189.5625 L 142.25,188 L 143.25,184.46875 L 145.78125,178.21875 L 147.15625,177.4375 L 150.46875,177.84375 L 150.46875,172.5625 L 149.09375,171.1875 L 149.09375,165.53125 L 148.5,163.59375 L 148.5,160.46875 L 150.46875,158.5 L 150.46875,154.59375 L 149.5,153.8125 L 149.6875,148.34375 L 148.125,147.5625 L 145.78125,147.5625 L 143.8125,146 L 141.6875,148.53125 L 139.9375,148.75 L 138.375,150.875 L 136.8125,150.5 L 133.46875,147.5625 L 132.3125,143.84375 L 131.71875,141.375 L 122.125,141.375 L 118.59375,139.21875 L 120.9375,136.09375 L 116.25,135.90625 z ", "name" : "Ille et Vilaine"},
	"FR-36" : {"path": "M 254.71875,221.4375 L 253.46875,221.875 L 250.9375,221.71875 L 248,222.71875 L 247.3125,224.25 L 247.03125,223.6875 L 243.65625,223.84375 L 241.96875,225.25 L 240,225.53125 L 239.71875,226.5 L 241.28125,228.59375 L 240.84375,230.4375 L 239.03125,230.5625 L 239.03125,232.09375 L 237.625,233.375 L 236.09375,235.90625 L 234.6875,234.625 L 232.59375,234.21875 L 229.5,235.34375 L 228.78125,238.84375 L 227.8125,241.65625 L 226.28125,249.625 L 224.15625,251.59375 L 222.4375,251.75 L 222.9375,252.25 L 222.9375,255.96875 L 222.15625,258.3125 L 225.875,261.25 L 227.8125,263.1875 L 230.9375,263.59375 L 232.125,267.6875 L 234.25,268.84375 L 233.875,271.78125 L 232.3125,272.0625 L 232.875,272.1875 L 237.78125,272.5625 L 239.53125,270.8125 L 242.65625,273.9375 L 246.5625,269.4375 L 248.3125,270.625 L 250.65625,270.40625 L 251.4375,270.8125 L 254.96875,271 L 256.125,267.875 L 265.90625,269.0625 L 269.625,270.03125 L 271.3125,269.84375 L 271.40625,268.28125 L 273.375,266.3125 L 272.96875,264.625 L 271.84375,262.40625 L 272.25,261.5625 L 272.40625,259.03125 L 273.09375,258.1875 L 273.25,257.625 L 271.5625,256.09375 L 271,254.125 L 268.34375,252.71875 L 268.34375,251.03125 L 270.28125,249.90625 L 270.28125,248.78125 L 268.46875,247.25 L 267.90625,246.28125 L 269.3125,245.5625 L 269.1875,244.3125 L 271.40625,242.46875 L 271.28125,241.65625 L 269.46875,241.65625 L 268.34375,240.375 L 268.34375,239.6875 L 269.3125,238 L 269.3125,236.75 L 267.0625,233.78125 L 267.5,231.125 L 266.21875,230.15625 L 263.5625,230.28125 L 261.46875,231.125 L 258.65625,230.71875 L 257.25,229.59375 L 256.96875,228.75 L 259.21875,226.90625 L 259.375,224.6875 L 256.40625,223 L 254.71875,221.4375 z ", "name" : "Indre"},
	"FR-37" : {"path": "M 212.1875,196.875 L 212.5625,197.75 L 206.90625,199.3125 L 205.5625,201.28125 L 203.1875,199.71875 L 204.375,203.625 L 202.21875,203.625 L 198.3125,200.875 L 196.375,204.78125 L 197.34375,205.96875 L 197.34375,207.125 L 195.375,209.6875 L 195.59375,213.96875 L 192.46875,217.6875 L 190.25,225.6875 L 190.5,225.6875 L 191.28125,228.8125 L 195,229.59375 L 195,231.9375 L 199.6875,233.3125 L 199.6875,237.03125 L 199.5,239.375 L 205.34375,239.375 L 210.4375,238.1875 L 210.03125,236.03125 L 211.59375,235.0625 L 213.15625,237.21875 L 214.53125,237.8125 L 215.6875,242.5 L 219.03125,246 L 219.40625,248.75 L 222.4375,251.75 L 224.15625,251.59375 L 226.28125,249.625 L 227.8125,241.65625 L 228.78125,238.84375 L 229.5,235.34375 L 232.59375,234.21875 L 234.6875,234.625 L 236.09375,235.90625 L 237.625,233.375 L 239.03125,232.09375 L 239.03125,230.5625 L 240.84375,230.4375 L 241.28125,228.59375 L 239.71875,226.5 L 239.96875,225.625 L 238.875,224.6875 L 235.9375,220.34375 L 232.15625,220.34375 L 231.03125,218.65625 L 231.03125,211.625 L 229.5,207.5625 L 229.21875,202.53125 L 227.25,202.375 L 225,200.6875 L 224.4375,200.6875 L 222.46875,202.09375 L 221.21875,201.25 L 220.9375,199.3125 L 222.34375,198.59375 L 222.46875,197.90625 L 221.65625,197.1875 L 212.1875,196.875 z ", "name" : "Indre et Loire"},
	"FR-38" : {"path": "M 397.90625,298.6875 L 396.625,300.1875 L 395.34375,304 L 392.78125,305.28125 L 390.03125,302.71875 L 388.125,302.71875 L 387.90625,305.5 L 390.6875,307.84375 L 386.4375,313.34375 L 380.90625,314.625 L 376.65625,316.125 L 379.40625,318.875 L 380.0625,320.15625 L 375.8125,322.28125 L 375.375,328.4375 L 375.25,328.5 L 376.4375,330.96875 L 379.84375,332.03125 L 382.1875,331.1875 L 384.9375,329.28125 L 388.5625,332.25 L 391.53125,332.25 L 393.65625,335.21875 L 392.78125,337.34375 L 393.21875,340.34375 L 392.15625,343.3125 L 392.59375,344.375 L 394.0625,343.9375 L 397.46875,345 L 401.9375,346.28125 L 403.84375,345 L 404.6875,343.53125 L 405.34375,343.53125 L 405.53125,359.4375 L 406.59375,360.5 L 409.375,360.5 L 411.90625,362 L 413.8125,363.5 L 415.75,363.6875 L 417,364.75 L 420.53125,365.15625 L 420.78125,364.5625 L 419.21875,363.78125 L 419.21875,361.4375 L 424.09375,361.4375 L 425.65625,359.875 L 424.6875,358.125 L 427.21875,356.15625 L 429,356.9375 L 431.53125,354.78125 L 436,355.5625 L 437.5625,353.8125 L 441.28125,354 L 441.28125,349.71875 L 439.71875,348.9375 L 438.9375,346.40625 L 434.84375,346 L 434.25,345.03125 L 435.03125,340.9375 L 436.40625,339.75 L 435.28125,338.21875 L 433.15625,336.9375 L 431.875,338.21875 L 432.3125,336.5 L 432.3125,334.8125 L 430.59375,333.09375 L 431.46875,329.0625 L 433.375,328 L 433.15625,325.25 L 429.125,321.21875 L 427.625,321.21875 L 426.5625,322.6875 L 424.03125,319.3125 L 422.53125,319.5 L 421.25,322.28125 L 422.125,323.96875 L 421.46875,324.625 L 419.78125,323.34375 L 414.875,322.28125 L 412.5625,318.03125 L 412.5625,316.3125 L 410.21875,313.78125 L 409.96875,312.6875 L 402.15625,303.15625 L 401.28125,300.40625 L 399.59375,298.90625 L 397.90625,298.6875 z ", "name" : "Isère"},
	"FR-39" : {"path": "M 401.15625,217.53125 L 401.25,218.0625 L 400.46875,218.0625 L 400.0625,221.1875 L 399.5,223.34375 L 399.875,224.71875 L 398.71875,226.28125 L 397.53125,227.84375 L 397.53125,229.40625 L 394.21875,230.96875 L 393.25,232.53125 L 393.625,233.6875 L 393.8125,234.6875 L 392.46875,235.46875 L 392.25,238 L 393.8125,238.1875 L 395.59375,241.125 L 397.75,241.125 L 398.90625,242.5 L 400.28125,242.5 L 399.875,244.0625 L 395.375,244.625 L 395.78125,246.1875 L 397.34375,247.1875 L 397.34375,249.125 L 396.75,249.71875 L 397.9375,251.28125 L 399.6875,254.40625 L 398.90625,257.71875 L 396.9375,259.09375 L 397.15625,261.8125 L 399.5,262.59375 L 400.28125,263.78125 L 398.3125,265.34375 L 393.1875,265.96875 L 395.59375,266.90625 L 399.5,272.375 L 402.03125,273.53125 L 402.03125,276.28125 L 404.96875,275.875 L 408.6875,271.78125 L 411.8125,273.34375 L 411.8125,275.6875 L 417.46875,275.6875 L 425.59375,266.75 L 425.25,266.5625 L 425.625,262.46875 L 428.5625,258.96875 L 426.59375,258.1875 L 426.78125,257 L 424.40625,256.78125 L 424.25,255.375 L 425.78125,253.84375 L 425.375,252.3125 L 424.53125,250.34375 L 428.03125,249.21875 L 429.3125,247.40625 L 429.59375,245.15625 L 426.78125,242.46875 L 424.8125,241.9375 L 420.46875,240.53125 L 420.46875,236.59375 L 420.1875,233.65625 L 416.6875,233.9375 L 411.21875,232.09375 L 412.0625,230.15625 L 413.3125,227.1875 L 413.75,225.25 L 412.34375,223.40625 L 409.8125,221.71875 L 409.53125,219.625 L 409.5625,218.4375 L 407.84375,218.375 L 406.875,219.34375 L 404.34375,219.34375 L 402.65625,217.9375 L 401.15625,217.53125 z ", "name" : "Jura"},
	"FR-40" : {"path": "M 139.8125,374.4375 L 133.625,377.625 L 132.03125,377.6875 L 128.5625,396.25 L 124.0625,413.4375 L 122.6875,420.09375 L 121.53125,424.78125 L 118.625,429.78125 L 124.25,432.59375 L 129.375,432.25 L 132.375,429.59375 L 134.84375,431.53125 L 133.4375,432.9375 L 134.5,433.3125 L 135.375,432.0625 L 139.8125,432.40625 L 142.28125,430.46875 L 146.875,430.65625 L 148.65625,429.75 L 151.46875,429.75 L 152.1875,430.65625 L 154.46875,429.9375 L 156.59375,431.53125 L 159.4375,430.65625 L 163.15625,429.40625 L 163.6875,430.28125 L 169.34375,430.46875 L 172.15625,428.875 L 170.78125,426.46875 L 172.15625,422.75 L 174.09375,420.21875 L 173.5,416.90625 L 175.0625,415.34375 L 172.75,411.4375 L 174.6875,409.09375 L 176.84375,408.6875 L 178.78125,409.46875 L 181.53125,407.125 L 182.5,410.0625 L 183.46875,411.4375 L 185.625,410.84375 L 185.4375,408.3125 L 186.0625,406.9375 L 185.59375,405.71875 L 186.125,401.84375 L 188.25,399.71875 L 187.1875,398.46875 L 184.875,398.28125 L 182.21875,397.25 L 178.34375,397.59375 L 177.625,393.34375 L 175.15625,390.34375 L 174.09375,390 L 174.46875,393.53125 L 174.46875,394.59375 L 171.09375,394.75 L 167.5625,393.53125 L 166.84375,389.09375 L 164.375,386.4375 L 162.625,386.28125 L 162.4375,384.6875 L 160.5,383.4375 L 157.3125,382.5625 L 158.1875,381.5 L 158.1875,380.4375 L 157.125,379.5625 L 155.90625,378.5 L 152.34375,379.03125 L 150.25,380.78125 L 148.8125,380.96875 L 146.53125,379.375 L 143.15625,380.78125 L 141.5625,379.71875 L 143,377.96875 L 143.15625,375.65625 L 139.8125,374.4375 z ", "name" : "Landes"},
	"FR-41" : {"path": "M 222.5,172.25 L 221.1875,173.9375 L 219.625,176.65625 L 221.5625,178.4375 L 221.375,182.53125 L 220.59375,185.25 L 218.625,185.25 L 218.625,188.96875 L 215.90625,192.5 L 212.96875,193.65625 L 211.59375,195.40625 L 212.1875,196.875 L 221.65625,197.1875 L 222.46875,197.90625 L 222.34375,198.59375 L 220.9375,199.3125 L 221.21875,201.25 L 222.46875,202.09375 L 224.4375,200.6875 L 225,200.6875 L 227.25,202.375 L 229.21875,202.53125 L 229.5,207.5625 L 231.03125,211.625 L 231.03125,218.65625 L 232.15625,220.34375 L 235.9375,220.34375 L 238.875,224.6875 L 239.96875,225.625 L 240,225.53125 L 241.96875,225.25 L 243.65625,223.84375 L 247.03125,223.6875 L 247.3125,224.25 L 248,222.71875 L 250.9375,221.71875 L 253.46875,221.875 L 254.71875,221.4375 L 256.40625,223 L 259.375,224.6875 L 261.875,224.53125 L 261.75,222 L 262.875,220.75 L 264,220.625 L 264.96875,221.71875 L 268.90625,221.3125 L 271.40625,219.90625 L 271.125,218.9375 L 270.4375,218.09375 L 270.5625,216.25 L 272.40625,212.90625 L 274.78125,211.90625 L 274.78125,209.8125 L 275.34375,208.5625 L 273.8125,208 L 272.8125,205.875 L 270.28125,205.1875 L 270.15625,204.34375 L 272.6875,202.25 L 275.53125,200.84375 L 273.9375,198.46875 L 266.78125,198.1875 L 265.8125,199.3125 L 263.84375,199.3125 L 263.15625,198.59375 L 260.0625,198.1875 L 259.21875,200 L 257.25,200.5625 L 255.4375,198.46875 L 255,196.0625 L 253.34375,194.65625 L 250.8125,194.375 L 248.96875,193.125 L 248.96875,191.875 L 247.875,189.1875 L 250.09375,186.96875 L 249.8125,185.84375 L 248.84375,184.71875 L 247.71875,184.71875 L 247.71875,183.71875 L 248.84375,181.78125 L 248.96875,180.65625 L 247.3125,180.65625 L 244.78125,179.9375 L 242.40625,182.1875 L 239.71875,182.46875 L 235.375,181.34375 L 234.125,178.53125 L 232.4375,177.5625 L 231.46875,175.3125 L 228.65625,175.3125 L 227.53125,174.46875 L 229.21875,173.5 L 229.34375,172.65625 L 227.53125,172.65625 L 224.4375,173.21875 L 222.5,172.25 z ", "name" : "Loir et Cher"},
	"FR-42" : {"path": "M 339.53125,278.03125 L 336,278.625 L 335.4375,280.78125 L 336.8125,283.5 L 337.1875,294.625 L 332.5,294.84375 L 332.3125,296.59375 L 335.4375,299.125 L 333.6875,300.875 L 333.09375,305.1875 L 335.4375,308.3125 L 337.5625,313.375 L 342.65625,316.71875 L 344.40625,323.15625 L 340.6875,326.65625 L 341.28125,329 L 346.75,330.78125 L 351.0625,327.25 L 353.1875,327.0625 L 359.4375,329.78125 L 359.0625,333.5 L 362.1875,333.3125 L 364.65625,336.15625 L 366.46875,335.65625 L 369.84375,335.03125 L 370.71875,331.1875 L 375.375,328.4375 L 375.8125,322.28125 L 375.96875,322.1875 L 373.6875,321.84375 L 371.5625,322.6875 L 369.84375,321.625 L 371.96875,319.09375 L 371.34375,317.1875 L 364.75,316.125 L 359.21875,311.03125 L 359.21875,309.3125 L 360.5,308.25 L 360.5,306.78125 L 359.03125,305.90625 L 360.28125,304 L 360.28125,301.25 L 357.75,298.90625 L 357.75,296.5625 L 356.03125,294.875 L 356.03125,292.96875 L 355.1875,289.78125 L 356.46875,288.5 L 356.6875,284.6875 L 360.71875,284.6875 L 361.78125,283.40625 L 360.5,281.28125 L 360.5,279.375 L 359.4375,278.53125 L 358.6875,282.53125 L 356.53125,282.53125 L 354.96875,284.09375 L 353.78125,282.90625 L 347.53125,281.9375 L 345.1875,283.3125 L 343.625,283.3125 L 343.25,281.9375 L 340.3125,281.34375 L 340.125,278.21875 L 339.53125,278.03125 z ", "name" : "Loire"},
	"FR-43" : {"path": "M 317.8125,326.34375 L 316.40625,327.0625 L 316.40625,328.28125 L 314.28125,328.46875 L 312.34375,330.0625 L 308.8125,330.59375 L 308,331.75 L 308.625,331.8125 L 309.5,334.3125 L 313.9375,334.3125 L 314.8125,337.46875 L 316.0625,338.71875 L 316.40625,342.4375 L 317.46875,343.84375 L 319.59375,344.03125 L 318.34375,345.09375 L 317.28125,345.4375 L 318.1875,346.3125 L 317.125,347.90625 L 319.25,349.15625 L 320.3125,350.75 L 320.3125,352.40625 L 320.78125,352.25 L 324.3125,361.25 L 329.375,359.6875 L 329.75,357.34375 L 331.71875,357.34375 L 332.5,360.0625 L 336.125,359.1875 L 340.625,364.9375 L 343.4375,360.46875 L 348.5,356.75 L 353.1875,356.75 L 354.75,351.875 L 357.875,351.65625 L 358.09375,347.96875 L 361,347.96875 L 360.4375,346.59375 L 359.65625,344.0625 L 360.8125,342.09375 L 363.5625,340.9375 L 364.71875,336.25 L 362.1875,333.3125 L 359.0625,333.5 L 359.4375,329.78125 L 353.1875,327.0625 L 351.0625,327.25 L 346.75,330.78125 L 342.8125,329.5 L 342.03125,330.25 L 339.5625,329.53125 L 337.8125,327.75 L 336.75,329.875 L 333.71875,329.71875 L 332.3125,328.46875 L 331.25,330.9375 L 329.3125,330.0625 L 328.0625,327.75 L 326.46875,327.75 L 325.0625,326.53125 L 322.9375,327.40625 L 320.46875,327.59375 L 319.0625,326.6875 L 318.1875,327.21875 L 317.8125,326.34375 z ", "name" : "Haute Loire"},
	"FR-44" : {"path": "M 132.875,185.84375 L 132.6875,188 L 128.40625,188.59375 L 126.4375,190.53125 L 125.65625,192.6875 L 113.5625,193.28125 L 108.46875,196 L 108.28125,201.46875 L 102.8125,203.625 L 99.09375,205.5625 L 95.96875,205.5625 L 94.8125,204.21875 L 93.0625,205.96875 L 92.21875,206.125 L 93.21875,206.8125 L 89.5,210.125 L 90.28125,210.90625 L 91.0625,212.46875 L 89.09375,215.21875 L 91.25,216.375 L 94.96875,217.15625 L 95.34375,215.59375 L 97.5,218.34375 L 101.03125,218.34375 L 103.5625,215.59375 L 106.875,215.59375 L 103.375,217.34375 L 103.5625,219.3125 L 104.34375,221.0625 L 102.1875,223.21875 L 99.84375,223.21875 L 100.25,226.15625 L 104.53125,225.375 L 109.625,230.0625 L 109.375,230.375 L 113.0625,232.78125 L 113.875,234.71875 L 117.25,236.1875 L 119.84375,236.5 L 120.96875,239.5625 L 125,240.53125 L 127.71875,241.03125 L 129.1875,239.40625 L 127.71875,237.3125 L 127.09375,232.78125 L 128.375,231.34375 L 130.15625,231.34375 L 130.96875,233.125 L 130.46875,236.34375 L 131.59375,237.15625 L 134.5,236.1875 L 135.46875,232.96875 L 134.1875,231.65625 L 137.40625,231.65625 L 138.53125,229.5625 L 139.65625,229.71875 L 142.25,232.15625 L 144.125,232.40625 L 144.1875,230.375 L 142.5625,228.28125 L 141.125,228.28125 L 140.625,228.4375 L 139.65625,227.96875 L 140.46875,227.15625 L 140.46875,225.6875 L 142.09375,225.21875 L 143.0625,222.96875 L 142.25,222.15625 L 142.09375,219.40625 L 140,219.40625 L 137.90625,216.8125 L 137.90625,214.90625 L 140.15625,213.75 L 144.1875,212.96875 L 150.46875,213.125 L 152.40625,211.8125 L 151.75,207.78125 L 148.84375,205.0625 L 145.3125,205.53125 L 144.34375,204.71875 L 144.1875,201.84375 L 146.75,199.5625 L 144.8125,197.15625 L 143.53125,193.75 L 141.4375,192.46875 L 141.4375,190.21875 L 141.21875,189.5 L 137.5625,188.59375 L 135.8125,186.25 L 132.875,185.84375 z ", "name" : "Loire Atlantique"},
	"FR-45" : {"path": "M 273.71875,160.46875 L 271.1875,162.8125 L 265.46875,163.3125 L 265.25,163.6875 L 265.8125,164.8125 L 264,166.34375 L 264.40625,170 L 262.875,170.28125 L 261.875,173.90625 L 260.1875,175.75 L 257.8125,175.75 L 255.5625,177 L 254.3125,175.59375 L 252.90625,175.03125 L 251.375,176.03125 L 251.375,177.5625 L 250.25,178.40625 L 248.4375,177.28125 L 247.3125,178.125 L 247.4375,179.375 L 246.90625,180.53125 L 247.3125,180.65625 L 248.96875,180.65625 L 248.84375,181.78125 L 247.71875,183.71875 L 247.71875,184.71875 L 248.84375,184.71875 L 249.8125,185.84375 L 250.09375,186.96875 L 247.875,189.1875 L 248.96875,191.875 L 248.96875,193.125 L 250.8125,194.375 L 253.34375,194.65625 L 255,196.0625 L 255.4375,198.46875 L 257.25,200.5625 L 259.21875,200 L 260.0625,198.1875 L 263.15625,198.59375 L 263.84375,199.3125 L 265.8125,199.3125 L 266.78125,198.1875 L 273.9375,198.46875 L 275.625,200.96875 L 277.59375,201.8125 L 279.28125,203.375 L 281.375,203.09375 L 281.9375,202.375 L 283.1875,202.375 L 284.75,204.34375 L 287.96875,204.5 L 288.8125,205.59375 L 291.0625,208.6875 L 292.03125,209.53125 L 293.28125,209.40625 L 293.4375,206.59375 L 294,206.3125 L 294.84375,206.4375 L 296.25,208.28125 L 297.21875,208.6875 L 299.21875,207.875 L 298.90625,207.53125 L 298.71875,205.5625 L 302.625,204.40625 L 302.03125,202.25 L 301.4375,199.125 L 298.90625,195.625 L 298.3125,193.46875 L 302.21875,193.46875 L 304.96875,191.5 L 305.34375,188.59375 L 303.59375,186.625 L 308.6875,182.34375 L 308.6875,178.8125 L 306.125,176.09375 L 305.15625,172.96875 L 301.625,169.625 L 296.75,172.375 L 296.375,170.8125 L 294.21875,170.625 L 293.625,172.1875 L 291.6875,172.5625 L 286.40625,172.375 L 284.25,173.75 L 282.5,172.1875 L 285.625,170.03125 L 285.4375,166.71875 L 283.09375,165.53125 L 281.125,162.59375 L 275.875,162.21875 L 273.71875,160.46875 z ", "name" : "Loiret"},
	"FR-46" : {"path": "M 247.46875,347.3125 L 243.3125,349.25 L 242.71875,349.34375 L 242.84375,349.53125 L 241.5,350.6875 L 241.5,352.84375 L 243.25,354.78125 L 241.5,357.90625 L 239.9375,358.90625 L 239.71875,360.84375 L 236.40625,361.25 L 236.59375,363.375 L 237.78125,363.78125 L 235.03125,367.6875 L 230.75,368.0625 L 230.5625,371 L 228.78125,372.75 L 227.8125,375.3125 L 223.90625,375.5 L 225.46875,381.34375 L 227.125,384.96875 L 229.625,384.875 L 229.78125,385.90625 L 228.375,387.5 L 229.4375,389.625 L 231.03125,389.625 L 232.78125,391.5625 L 234.375,391.5625 L 235.625,390.15625 L 235.96875,390.53125 L 235.96875,392.28125 L 236.5,394.59375 L 240.21875,394.75 L 243.21875,391.5625 L 244.8125,391.40625 L 245.34375,392.28125 L 246.21875,394.21875 L 247.65625,394.21875 L 248.1875,390.6875 L 251.1875,391.0625 L 252.9375,388.9375 L 255.78125,389.625 L 260.03125,387.6875 L 260.0625,388.0625 L 261.4375,386.625 L 259.65625,383.96875 L 258.96875,380.4375 L 261.25,378.5 L 262.3125,378.84375 L 265.5,375.3125 L 267.25,375.5 L 267.96875,374.59375 L 271.5,374.59375 L 272.75,373.1875 L 273.09375,372.09375 L 271.5,371.875 L 272.59375,368.5625 L 270.09375,367.46875 L 272.59375,361.65625 L 269.28125,359.1875 L 268.15625,352 L 265.125,351.1875 L 262.90625,353.375 L 261.8125,351.4375 L 258.5,354.75 L 256.28125,355.03125 L 252.4375,349.53125 L 247.46875,347.3125 z ", "name" : "Lot"},
	"FR-47" : {"path": "M 195.25,363.375 L 193.1875,363.65625 L 191.4375,364.1875 L 188.9375,364.71875 L 188.25,366.65625 L 189.125,368.59375 L 191.25,368.78125 L 190.90625,370.53125 L 189.3125,371.0625 L 187.53125,373.1875 L 184.53125,377.78125 L 183.125,380.25 L 183.65625,382.90625 L 184.53125,384.6875 L 182.59375,385.90625 L 180.65625,385.90625 L 180.28125,387.875 L 181.53125,388.9375 L 181.71875,390.875 L 180.28125,392.28125 L 177.15625,392.78125 L 177.625,393.34375 L 178.34375,397.59375 L 182.21875,397.25 L 184.875,398.28125 L 187.1875,398.46875 L 188.25,399.71875 L 186.125,401.84375 L 185.59375,405.71875 L 186.0625,406.9375 L 186.8125,405.375 L 189.125,407.34375 L 192.25,404.21875 L 193.625,406.15625 L 196.9375,405.5625 L 200.46875,405.1875 L 202.03125,402.4375 L 207.875,401.875 L 210.8125,404.78125 L 211.8125,403.8125 L 213.75,403.21875 L 212.96875,400.5 L 215.90625,399.71875 L 219.625,398.9375 L 218.8125,396.59375 L 220,395.21875 L 220.96875,391.5 L 218.8125,389.15625 L 220.1875,384.6875 L 223.125,386.4375 L 227.4375,385.65625 L 225.46875,381.34375 L 223.90625,375.5 L 227.8125,375.3125 L 228.59375,373.25 L 225.53125,371.96875 L 224.125,370.375 L 222,370.375 L 219.53125,372.65625 L 217.59375,372.5 L 217.0625,371.25 L 218.46875,370.375 L 218.46875,369.125 L 216.875,367.375 L 215.46875,367.1875 L 214.59375,368.25 L 210.6875,368.25 L 210.34375,366.84375 L 209.09375,366.65625 L 206.96875,368.40625 L 203.09375,368.40625 L 201.3125,370 L 198.3125,368.9375 L 197.96875,365.25 L 195.25,363.375 z ", "name" : "Lot et Garonne"},
	"FR-48" : {"path": "M 320.78125,352.25 L 315.3125,354.21875 L 313.75,357.71875 L 310.25,355.375 L 307.5,363.96875 L 304.6875,370.4375 L 308.78125,375.46875 L 308.5,379.34375 L 311.25,381.28125 L 311.25,385.96875 L 312.09375,392.59375 L 315.40625,394 L 315.125,396.1875 L 319.8125,395.375 L 321.46875,396.1875 L 320.4375,397.09375 L 326.46875,401.125 L 331.625,400.0625 L 332.5,398.8125 L 331.78125,397.0625 L 333.90625,396.53125 L 336.90625,399.34375 L 342.03125,399.875 L 344.34375,396.34375 L 344.34375,393.34375 L 345.75,391.75 L 344.5,391.40625 L 344.5,387.34375 L 341.6875,384.34375 L 344,383.96875 L 345.21875,382.90625 L 346.1875,381.03125 L 345.21875,380.4375 L 345.78125,376.3125 L 342.46875,372.71875 L 341.09375,365.53125 L 336.125,359.1875 L 332.5,360.0625 L 331.71875,357.34375 L 329.75,357.34375 L 329.375,359.6875 L 324.3125,361.25 L 320.78125,352.25 z ", "name" : "Lozère"},
	"FR-49" : {"path": "M 141.9375,188.6875 L 141.5,189.5625 L 141.21875,189.5 L 141.4375,190.21875 L 141.4375,192.46875 L 143.53125,193.75 L 144.8125,197.15625 L 146.75,199.5625 L 144.1875,201.84375 L 144.34375,204.71875 L 145.3125,205.53125 L 148.84375,205.0625 L 151.75,207.78125 L 152.40625,211.8125 L 150.46875,213.125 L 144.1875,212.96875 L 140.15625,213.75 L 137.90625,214.90625 L 137.90625,216.8125 L 140,219.40625 L 142.09375,219.40625 L 142.25,222.15625 L 143.0625,222.96875 L 142.09375,225.21875 L 140.46875,225.6875 L 140.46875,227.15625 L 139.65625,227.96875 L 140.625,228.4375 L 141.125,228.28125 L 142.5625,228.28125 L 144.1875,230.375 L 144.125,232.40625 L 144.5,232.46875 L 146.125,233.4375 L 151.125,233.4375 L 153.78125,235.6875 L 157.5,234.09375 L 163.5625,235.46875 L 166.28125,233.6875 L 166.28125,230.96875 L 171.5625,230.5625 L 176.4375,229.59375 L 181.71875,229.40625 L 182.3125,230.78125 L 183.6875,231.9375 L 185.03125,229.59375 L 188.75,225.6875 L 190.25,225.6875 L 192.46875,217.6875 L 195.59375,213.96875 L 195.375,209.6875 L 197.34375,207.125 L 197.34375,205.96875 L 196.375,204.78125 L 197,203.5 L 194.34375,202.46875 L 186.125,197.46875 L 178.53125,195.21875 L 175.625,195.0625 L 175.625,193.125 L 173.84375,191.65625 L 171.9375,191.65625 L 168.375,190.53125 L 166.125,192.78125 L 160.96875,192.96875 L 158.6875,191.65625 L 152.90625,189.90625 L 151.59375,191.5 L 148.375,189.40625 L 145.46875,189.40625 L 141.9375,188.6875 z ", "name" : "Maine et Loire"},
	"FR-50" : {"path": "M 119.5625,77.5 L 118.78125,79.46875 L 122.90625,82.78125 L 122.90625,87.09375 L 121.34375,89.03125 L 122.3125,90 L 122.90625,90.40625 L 122.5,94.125 L 123.875,97.25 L 128.375,102.3125 L 129.34375,106.8125 L 130.3125,108.1875 L 130.3125,115.21875 L 132.65625,119.90625 L 132.65625,125.375 L 130.125,130.4375 L 132.84375,137.46875 L 137.15625,138.4375 L 137.53125,140.40625 L 135.40625,141.375 L 131.71875,141.375 L 132.3125,143.84375 L 133.46875,147.5625 L 136.8125,150.5 L 138.375,150.875 L 139.9375,148.75 L 141.6875,148.53125 L 143.8125,146 L 145.78125,147.5625 L 148.125,147.5625 L 149.6875,148.34375 L 149.6875,148.71875 L 153,149.125 L 154.96875,147.5625 L 157.875,148.75 L 157.9375,148.875 L 161.28125,146.03125 L 162.40625,142.3125 L 162.09375,140.6875 L 162.5625,138.78125 L 160.625,136.84375 L 155.625,133.59375 L 151.9375,133.28125 L 148.21875,128.59375 L 151.28125,127.46875 L 152.5625,125.0625 L 150.96875,123.59375 L 152.40625,122.3125 L 153.84375,123.4375 L 156.4375,121.84375 L 158.0625,119.25 L 158.6875,116.6875 L 157.5625,114.40625 L 158.21875,113.59375 L 156.75,111.1875 L 158.375,109.09375 L 157.09375,107.46875 L 155.46875,109.5625 L 153.21875,108.28125 L 149.5,104.5625 L 149.34375,102.96875 L 150.46875,101.84375 L 150.125,99.6875 L 148.28125,100.15625 L 148.09375,95.46875 L 143,89.4375 L 144.5625,85.53125 L 146.71875,85.53125 L 144.78125,80.25 L 136.375,79.84375 L 131.875,82.96875 L 126.8125,79.65625 L 119.5625,77.5 z ", "name" : "Manche"},
	"FR-51" : {"path": "M 337.375,99.3125 L 335.03125,100.3125 L 335.4375,102.25 L 331.3125,102.25 L 327.625,105 L 327.625,110.25 L 330.34375,112.03125 L 331.125,113.78125 L 326.625,114.15625 L 326.0625,115.9375 L 327.8125,117.09375 L 327.03125,118.28125 L 325.28125,119.0625 L 325.65625,120.40625 L 328.1875,120.40625 L 329.1875,121.78125 L 327.4375,122.96875 L 325.875,127.0625 L 322.9375,128.4375 L 321.9375,130.5625 L 320.96875,131.75 L 321.1875,132.90625 L 319.625,133.90625 L 319.21875,136.625 L 320.78125,137.59375 L 321.5625,140.53125 L 320.59375,142.28125 L 321.1875,143.65625 L 324.09375,143.46875 L 324.09375,144.4375 L 324.9375,144.25 L 328.3125,147.8125 L 333.0625,147.03125 L 338.625,143.25 L 341.96875,143.25 L 345.34375,140.875 L 349.3125,138.6875 L 352.28125,138.90625 L 352.6875,142.875 L 356.25,148.21875 L 360.21875,148.21875 L 365.78125,147.03125 L 369.75,148.40625 L 373.90625,145.4375 L 374.5,140.5 L 379.09375,139.71875 L 379,136.625 L 375.28125,133.6875 L 374.875,132.125 L 376.25,129.78125 L 375.0625,128.8125 L 376.25,125.875 L 378.40625,124.90625 L 379.96875,120.03125 L 376.84375,120.21875 L 378.59375,118.28125 L 377.21875,113.96875 L 375.875,111.03125 L 377.625,109.46875 L 376.625,109.28125 L 376.375,107.9375 C 376.33461,107.94351 376.09375,107.96875 376.09375,107.96875 L 374.3125,106.375 L 372.3125,108.375 L 371.71875,108.375 L 370.9375,107.375 L 366.1875,107.1875 L 365.375,108.375 L 364,108.375 L 362.8125,105.78125 L 360.21875,105.78125 L 359.625,106.375 L 357.0625,106.1875 L 353.875,103.8125 L 351.6875,103.21875 L 350.90625,102.03125 L 346.75,99.4375 L 342,99.3125 L 342.0625,101.09375 L 340.6875,101.46875 L 337.375,99.3125 z ", "name" : "Marne"},
	"FR-52" : {"path": "M 379.09375,139.71875 L 374.5,140.5 L 373.90625,145.4375 L 369.75,148.40625 L 367.59375,147.65625 L 366.5625,149.8125 L 366.375,152.78125 L 369.9375,157.75 L 373.3125,158.9375 L 374.09375,163.09375 L 374.3125,170.21875 L 373.125,172 L 369.75,172.21875 L 367.5625,174.1875 L 369.15625,175.1875 L 369.8125,177.6875 L 372.15625,179 L 375.65625,182.71875 L 380.15625,188.78125 L 377.625,191.5 L 379.375,192.6875 L 379.5625,196 L 382.6875,195.8125 L 383.46875,197.375 L 385.8125,197.5625 L 387.5625,196.59375 L 390.6875,200.5 L 391.09375,201.46875 L 395.375,200.5 L 396.1875,198.53125 L 396.375,198.5625 L 396.375,196.59375 L 399.09375,195.40625 L 402.21875,196.59375 L 405.15625,195.40625 L 406.90625,195.40625 L 407.5,191.5 L 408.46875,190.34375 L 406.71875,190.15625 L 406.53125,187.8125 L 409.25,187.21875 L 409.4375,185.65625 L 412.1875,185.65625 L 412.1875,183.125 L 414.34375,182.34375 L 413.75,180.78125 L 414.34375,180.40625 L 412.5625,179 L 410.4375,179.78125 L 410.4375,175.6875 L 404.96875,172.96875 L 406.125,167.6875 L 407.875,166.5 L 407.3125,164.75 L 404.75,164.375 L 404.1875,161.8125 L 401.84375,161.8125 L 399.09375,158.125 L 395.96875,157.90625 L 394.625,155.96875 L 396.375,154.21875 L 392.25,149.71875 L 390.5,149.125 L 385.8125,146.78125 L 383.28125,144.0625 L 379.1875,143.46875 L 379.09375,139.71875 z ", "name" : "Haute Marne"},
	"FR-53" : {"path": "M 182.5,146.40625 L 180.5625,146.59375 L 179.75,148.53125 L 176.84375,149.71875 L 171.5625,148.9375 L 166.28125,152.0625 L 164.34375,150.6875 L 161.40625,152.65625 L 159.25,151.09375 L 157.875,148.75 L 154.96875,147.5625 L 153,149.125 L 149.6875,148.71875 L 149.5,153.8125 L 150.46875,154.59375 L 150.46875,158.5 L 148.5,160.46875 L 148.5,163.59375 L 149.09375,165.53125 L 149.09375,171.1875 L 150.46875,172.5625 L 150.46875,177.84375 L 147.15625,177.4375 L 145.78125,178.21875 L 143.25,184.46875 L 142.25,188 L 141.9375,188.6875 L 145.46875,189.40625 L 148.375,189.40625 L 151.59375,191.5 L 152.90625,189.90625 L 158.6875,191.65625 L 160.96875,192.96875 L 166.125,192.78125 L 168.375,190.53125 L 171.9375,191.65625 L 173.84375,191.65625 L 173.875,191.6875 L 174.5,190.21875 L 174.5,184.40625 L 173.84375,183.4375 L 174.1875,182.46875 L 176.9375,182.3125 L 178.21875,181.1875 L 178.375,180.21875 L 176.9375,176.65625 L 177.40625,175.21875 L 180.625,174.90625 L 180.3125,174.09375 L 181.125,172.15625 L 180.46875,170.6875 L 181.28125,169.09375 L 184.1875,166.65625 L 183.84375,164.09375 L 184.34375,159.90625 L 185.46875,157.96875 L 189.125,156.78125 L 188.5625,156.75 L 187.5625,153.21875 L 185.03125,152.25 L 184.25,147.96875 L 182.5,146.40625 z ", "name" : "Mayenne"},
	"FR-54" : {"path": "M 401.59375,88.4375 L 399.25,90.59375 L 395.9375,90.78125 L 394.78125,91.96875 L 394.53125,91.96875 L 394.40625,94.3125 L 395.5625,96.21875 L 395.15625,97.375 L 394.78125,98.71875 L 394.96875,99.46875 L 395.9375,98.71875 L 396.875,97 L 398.8125,96.8125 L 402.0625,95.84375 L 403.78125,97.1875 L 404.53125,98.71875 L 405.125,100.4375 L 405.125,102.15625 L 406.0625,102.9375 L 406.0625,104.25 L 405.125,105.40625 L 404.9375,107.90625 L 405.6875,109.0625 L 405.875,110.59375 L 406.0625,113.0625 L 407.21875,114.03125 L 408.9375,114.78125 L 408.1875,116.3125 L 410.28125,118.25 L 408.375,120.34375 L 408.75,121.6875 L 410.65625,122.625 L 410.65625,123.59375 L 408.375,123.59375 L 407.40625,124.9375 L 407.59375,125.90625 L 409.125,127.4375 L 407.8125,131.0625 L 406.28125,134.5 L 407.03125,136.625 L 407.03125,140.0625 L 407.8125,141.78125 L 408.9375,141.78125 L 409.53125,142.75 L 407.8125,142.75 L 406.28125,143.5 L 406.28125,144.65625 L 408.1875,146.375 L 408.1875,149.0625 L 410.09375,148.46875 L 412.96875,148.65625 L 413.15625,151.71875 L 414.3125,152.125 L 412.96875,153.0625 L 412.78125,154.03125 L 414.875,154.40625 L 416.21875,156.125 L 422.53125,155.75 L 423.875,153.25 L 426.75,153.25 L 427.90625,152.3125 L 429.8125,153.46875 L 431.53125,152.875 L 434.03125,153.0625 L 436.125,152.3125 L 438.21875,150.78125 L 439.375,151.9375 L 439.5625,149.25 L 441.09375,148.65625 L 441.875,151.15625 L 444.15625,151.34375 L 446.46875,151.9375 L 447.40625,152.125 L 450.6875,150.59375 L 452.40625,149.4375 L 453.9375,147.53125 L 457,146.375 L 459,145.9375 L 457.875,144.84375 L 460.03125,145.03125 L 460.4375,144.625 L 458.125,143.875 L 454.875,141.59375 L 452,139.46875 L 448.5625,139.46875 L 444.9375,137.375 L 442.0625,137.1875 L 442.0625,136.40625 L 437.65625,133.75 L 432.6875,131.625 L 430.1875,131.625 L 429.25,128.96875 L 425.40625,124.15625 L 421.59375,124.15625 L 420.0625,122.0625 L 417,122.0625 L 417.1875,119 L 413.15625,116.5 L 413.34375,114.03125 L 415.46875,114.03125 L 415.46875,111.90625 L 416.21875,110.375 L 414.5,108.65625 L 416.03125,106 L 414.875,102.9375 L 413.9375,102.15625 L 411.4375,96.8125 L 412.40625,95.28125 C 412.40625,95.28125 412.32712,94.02401 412.25,92.34375 L 409.625,92.34375 L 406.09375,88.4375 L 401.59375,88.4375 z ", "name" : "Meurthe et Moselle"},
	"FR-55" : {"path": "M 390.125,86.53125 L 388.75,88.78125 L 387,89.9375 L 385.625,88.59375 L 382.6875,88.59375 L 382.125,87.8125 L 380.15625,91.5 L 379.375,92.875 L 381.71875,95.8125 L 380.9375,99.71875 L 378.78125,101.46875 L 379,102.84375 L 379.75,104.78125 L 378.59375,105.96875 L 376.25,107.125 L 376.625,109.28125 L 377.625,109.46875 L 375.875,111.03125 L 377.21875,113.96875 L 378.59375,118.28125 L 376.84375,120.21875 L 379.96875,120.03125 L 378.40625,124.90625 L 376.25,125.875 L 375.0625,128.8125 L 376.25,129.78125 L 374.875,132.125 L 375.28125,133.6875 L 379,136.625 L 379.1875,143.46875 L 383.28125,144.0625 L 385.8125,146.78125 L 390.5,149.125 L 392.25,149.71875 L 396.375,154.21875 L 395.9375,154.65625 L 399.375,154.21875 L 399.375,152.5 L 403.21875,151.71875 L 403.21875,150.40625 L 404.15625,150.40625 L 404.15625,151.53125 L 407.21875,150.59375 L 408.40625,149 L 408.1875,149.0625 L 408.1875,146.375 L 406.28125,144.65625 L 406.28125,143.5 L 407.8125,142.75 L 409.53125,142.75 L 408.9375,141.78125 L 407.8125,141.78125 L 407.03125,140.0625 L 407.03125,136.625 L 406.28125,134.5 L 407.8125,131.0625 L 409.125,127.4375 L 407.59375,125.90625 L 407.40625,124.9375 L 408.375,123.59375 L 410.65625,123.59375 L 410.65625,122.625 L 408.75,121.6875 L 408.375,120.34375 L 410.28125,118.25 L 408.1875,116.3125 L 408.9375,114.78125 L 407.21875,114.03125 L 406.0625,113.0625 L 405.875,110.59375 L 405.6875,109.0625 L 404.9375,107.90625 L 405.125,105.40625 L 406.0625,104.25 L 406.0625,102.9375 L 405.125,102.15625 L 405.125,100.4375 L 404.53125,98.71875 L 403.78125,97.1875 L 402.0625,95.84375 L 398.8125,96.8125 L 396.875,97 L 395.9375,98.71875 L 394.96875,99.46875 L 394.78125,98.71875 L 395.15625,97.375 L 395.5625,96.21875 L 394.40625,94.3125 L 394.53125,91.96875 L 393.59375,91.96875 L 392.8125,88.25 L 391.25,86.6875 L 390.125,86.53125 z ", "name" : "Meuse"},
	"FR-56" : {"path": "M 56,160.59375 L 52.75,162.15625 L 50.46875,162.15625 L 48.0625,164.09375 L 48.21875,165.53125 L 49.65625,169.25 L 50.46875,172.15625 L 55.46875,172.96875 L 57.90625,174.90625 L 58.875,173.75 L 60.46875,175.875 L 59.65625,176.84375 L 59.5,179.71875 L 58.0625,179.71875 L 56.9375,181.5 L 54.65625,181.5 L 53.71875,185.34375 L 55.90625,188.84375 L 59.03125,189.625 L 60.1875,187.875 L 59.625,190 L 62.34375,191.1875 L 65.875,194.6875 L 67.03125,196.84375 L 66.65625,199.375 L 66.25,201.9375 L 68.59375,203.6875 L 69.78125,202.3125 L 68.59375,200.75 L 68.59375,197.25 L 70.9375,197.8125 L 71.71875,195.46875 L 72.3125,196.84375 L 74.84375,199 L 76.03125,197.03125 L 74.84375,194.3125 L 77,197.25 L 79.71875,196.84375 L 79.15625,195.46875 L 81.6875,196.0625 L 83.625,198.40625 L 82.65625,199.96875 L 80.125,199.1875 L 77.1875,197.8125 L 75.625,199.78125 L 77.96875,200.5625 L 79.71875,203.28125 L 90.28125,202.3125 L 93,202.90625 L 91.65625,204.0625 L 91.84375,205.84375 L 92.21875,206.125 L 93.0625,205.96875 L 94.8125,204.21875 L 95.96875,205.5625 L 99.09375,205.5625 L 102.8125,203.625 L 108.28125,201.46875 L 108.46875,196 L 109.625,195.375 L 107.5625,191.5 L 109.34375,190.0625 L 109.03125,189.09375 L 107.90625,188.4375 L 109.65625,187.625 L 111.28125,185.6875 L 111.125,183.75 L 109.03125,183.75 L 108.53125,181.84375 L 110,179.90625 L 108.375,177 L 105.96875,175.53125 L 103.21875,175.53125 L 102.25,175.21875 L 102.25,173.9375 L 103.6875,172.625 L 104.5,169.40625 L 104.03125,167.3125 L 103.375,168.125 L 99.5,167.8125 L 97.71875,164.5625 L 96.28125,164.5625 L 94.03125,165.375 L 94.03125,167.46875 L 90.96875,169.40625 L 88.53125,168.4375 L 87.5625,166.34375 L 86.78125,167.46875 L 84.5,167.46875 L 83.375,166.03125 L 82.25,166.03125 L 79.84375,163.59375 L 77.09375,164.25 L 74.1875,161.65625 L 71.59375,161.84375 L 70.8125,163.4375 L 67.75,165.0625 L 64.03125,163.4375 L 63.0625,162.46875 L 61.4375,163.59375 L 59.5,163.4375 L 59.1875,161.84375 L 56.125,161.03125 L 56,160.59375 z ", "name" : "Morbihan"},
	"FR-57" : {"path": "M 423.09375,90.40625 L 420.15625,90.59375 L 417.8125,92.5625 L 417.21875,93.53125 L 413.90625,93.53125 L 412.75,92.34375 L 412.25,92.34375 C 412.32712,94.02401 412.40625,95.28125 412.40625,95.28125 L 411.4375,96.8125 L 413.9375,102.15625 L 414.875,102.9375 L 416.03125,106 L 414.5,108.65625 L 416.21875,110.375 L 415.46875,111.90625 L 415.46875,114.03125 L 413.34375,114.03125 L 413.15625,116.5 L 417.1875,119 L 417,122.0625 L 420.0625,122.0625 L 421.59375,124.15625 L 425.40625,124.15625 L 429.25,128.96875 L 430.1875,131.625 L 432.6875,131.625 L 437.65625,133.75 L 442.0625,136.40625 L 442.0625,137.1875 L 444.9375,137.375 L 448.5625,139.46875 L 452,139.46875 L 454.875,141.59375 L 458.125,143.875 L 460.4375,144.625 L 463.9375,141.125 L 465.125,137.03125 L 463.5625,135.46875 L 463.375,134.09375 L 465.6875,129.78125 L 460.25,126.65625 L 457.125,129 L 455.34375,127.84375 L 456.125,126.09375 L 454.1875,124.71875 L 451.625,123.53125 L 451.625,121 L 454.1875,120.21875 L 455.15625,115.71875 L 456.90625,113.78125 L 457.6875,116.71875 L 459.84375,117.6875 L 463.5625,118.28125 L 465.5,120.21875 L 467.84375,120.21875 L 469.8125,118.84375 L 472.34375,120.625 L 473.71875,120.625 L 475.28125,119.25 L 475.28125,116.3125 L 477,113.3125 L 476.59375,113.4375 L 475.25,111.5 L 471.34375,109.15625 L 469.96875,107 L 465.28125,107.40625 L 462.53125,109.9375 L 455.90625,110.125 L 453.9375,108.75 C 453.80551,108.51057 452.84437,106.81438 452,106.34375 C 451.96729,106.32639 451.91355,106.29802 451.875,106.28125 C 451.84646,106.26959 451.80512,106.25698 451.78125,106.25 C 451.77058,106.24458 451.73002,106.22452 451.71875,106.21875 C 451.71591,106.21876 451.69093,106.21861 451.6875,106.21875 C 451.66248,106.21745 451.61378,106.21875 451.59375,106.21875 C 450.67823,106.21876 448.90565,105.19125 448.6875,105.0625 L 445.9375,106.21875 L 445.75,108.5625 L 442.4375,108.96875 L 440.46875,105.25 L 439.3125,104.84375 L 439.3125,102.125 L 436.5625,100.9375 L 436.375,96.25 L 434.40625,94.3125 L 430.3125,92.34375 L 428.375,92.34375 L 427.78125,92.75 L 425.8125,92.75 L 423.09375,90.40625 z ", "name" : "Moselle"},
	"FR-58" : {"path": "M 306.75,203.78125 L 305.78125,205.3125 L 303.9375,205.3125 L 301.46875,204.75 L 298.71875,205.5625 L 298.90625,207.53125 L 301.25,210.25 L 301.25,213.96875 L 299.5,216.5 L 300.0625,218.84375 L 303.59375,221.59375 L 303.78125,224.3125 L 305.75,228.4375 L 305.34375,233.125 L 307.5,235.25 L 306.90625,240.34375 L 306.71875,242.875 L 307.6875,244.625 L 306.1875,249.40625 L 306.3125,250.875 L 309.65625,252.4375 L 312,255 L 314.125,253.8125 L 316.09375,252.65625 L 316.5,254.40625 L 319.40625,254.40625 L 320.1875,252.84375 L 321.9375,253.625 L 322.53125,256.15625 L 324.09375,255.78125 L 327.8125,250.6875 L 329.75,252.0625 L 330.0625,252.65625 L 333.125,250.75 L 334.375,250.90625 L 335.34375,253.28125 L 337.1875,253 L 338.59375,251.59375 L 340.40625,251.59375 L 341.8125,249.78125 L 343.21875,249.5 L 343.5,248.5 L 346.5625,248.65625 L 346.71875,247.9375 L 345.3125,246.6875 L 345.3125,245.4375 L 347.28125,244.3125 L 347.28125,243.46875 L 345.4375,242.34375 L 345.15625,240.25 L 345.3125,238.28125 L 344.0625,237.4375 L 345.15625,235.90625 L 346.15625,235.34375 L 346.84375,233.65625 L 345.875,233.09375 L 344.75,231.40625 L 346.15625,229.4375 L 348.53125,228.03125 L 351.46875,228.03125 L 351.46875,225.8125 L 352.3125,225.53125 L 352.3125,224.6875 L 351.0625,222.71875 L 348.25,222.15625 L 347.28125,220.46875 L 347.6875,218.9375 L 347.96875,216.8125 L 347.46875,215.6875 L 344.34375,217.8125 L 343.0625,218.375 L 341.375,217.25 L 341.53125,214.4375 L 339.6875,214.4375 L 338.15625,215.4375 L 337.75,214.15625 L 338.59375,212.75 L 337.59375,211.5 L 336.46875,213.1875 L 336.625,214.4375 L 333.96875,214.3125 L 329.75,210.375 L 326.53125,210.25 L 326.53125,208.125 L 324.28125,206.71875 L 323.84375,204.90625 L 323.15625,204.78125 L 323.15625,208.28125 L 321.90625,208.5625 L 320.0625,208 L 318.125,209.25 L 317,209.53125 L 315.875,208.5625 L 314.75,209.125 L 312.21875,207.4375 L 310.40625,207.4375 L 309.125,206.59375 L 309.40625,205.03125 L 308,203.78125 L 306.75,203.78125 z ", "name" : "Nièvre"},
	"FR-59" : {"path": "M 285.78125,4.0625 L 279.53125,7 L 269.78125,8.5625 L 269.25,8.65625 L 272.96875,14.5625 L 275.5625,21.125 L 279.90625,21.3125 L 281.6875,22.6875 L 279.53125,23.6875 L 279.53125,26.0625 L 282.28125,29.03125 L 287.25,30.25 L 293.40625,30.625 L 294.78125,28.4375 L 296.78125,28.4375 L 297.75,30.4375 L 295.1875,32.03125 L 295.59375,36 L 299.15625,36.96875 L 302.71875,37.375 L 303.71875,39.9375 L 305.5,40.75 L 305.09375,42.125 L 302.53125,43.3125 L 302.3125,44.5 L 304.3125,46.90625 L 305.6875,47.875 L 305.3125,49.0625 L 303.71875,50.25 L 304.3125,50.65625 L 306.875,50.84375 L 309.0625,52.25 L 308.875,54.03125 L 307.6875,54.8125 L 307.46875,58 L 305.6875,58.1875 L 303.90625,58 L 301.9375,59.1875 L 303.125,59.59375 L 305.09375,59.59375 L 306.875,59.96875 L 307.46875,60.96875 L 306.3125,63.1875 L 307.875,64.75 L 309.4375,65.15625 L 311,64.15625 L 313.15625,64.15625 L 313.75,65.34375 L 314.53125,65.15625 L 316.875,63.78125 L 319.21875,65.15625 L 322.34375,63 L 323.71875,63 L 325.28125,64.375 L 328.40625,62.21875 L 329.75,62.40625 L 330.9375,63.375 L 335.25,63.78125 L 335.625,65.53125 L 337.78125,63.59375 L 338.9375,63.59375 L 339.71875,66.125 L 343.4375,67.09375 L 344.5,66.375 L 344.1875,66.375 L 344,64.4375 L 347.90625,62.09375 L 347.3125,58.375 L 343.59375,57.40625 L 344.5625,56.40625 L 344.5625,53.6875 L 347.5,51.53125 L 346.71875,49.96875 L 340.46875,45.09375 L 329.53125,45.6875 L 328.375,47.625 L 327,47.625 L 327.1875,40.78125 L 324.0625,37.09375 L 321.71875,37.46875 L 320.34375,35.90625 L 316.4375,37.65625 L 315.09375,36.3125 L 312.34375,35.90625 L 311.5625,33.375 L 311.375,25.5625 L 309.625,24.78125 L 309.40625,23.59375 L 308.25,23.59375 L 307.84375,21.25 L 305.3125,21.46875 L 300.4375,23.03125 L 298.09375,25.9375 L 295.75,25.9375 L 294.1875,24 L 293.59375,21.84375 L 291.65625,19.6875 L 288.90625,19.6875 L 287.75,17.5625 L 287.75,14.21875 L 289.09375,12.09375 L 288.3125,9.15625 L 285.78125,4.0625 z ", "name" : "Nord"},
	"FR-60" : {"path": "M 257.21875,80.21875 L 255.9375,81.75 L 255.15625,83.6875 L 256.71875,83.6875 L 255.9375,85.65625 L 255.15625,89.5625 L 256.3125,91.5 L 256.3125,94.84375 L 258.28125,94.84375 L 257.5,96.1875 L 256.125,98.75 L 255.5625,100.5 L 257.3125,102.0625 L 257.875,106.5625 L 258.875,108.125 L 257.5,108.5 L 255.75,107.53125 L 255.4375,109.84375 L 255.5625,109.6875 L 256.3125,111.4375 L 257.5,113.375 L 262.78125,113.78125 L 266.5,113.375 L 269.03125,111.4375 L 272.15625,113.375 L 273.71875,114.5625 L 276.0625,113.96875 L 278.1875,113 L 282.3125,115.15625 L 286.59375,117.6875 L 287.96875,119.0625 L 290.3125,117.5 L 292.25,118.65625 L 293.4375,119.625 L 295.1875,119.4375 L 296.375,117.875 L 299.09375,119.4375 L 302.4375,118.0625 L 304.375,118.65625 L 306.3125,117.09375 L 307.5,116.5 L 307.875,116.78125 L 308.28125,114.125 L 306.875,112.53125 L 304.5,110.9375 L 303.5,112.53125 L 302.90625,112.71875 L 302.71875,109.75 L 304.5,109.34375 L 304.09375,106.59375 L 301.71875,106.1875 L 302.90625,104.1875 L 306.28125,103.40625 L 307.46875,98.65625 L 309.25,97.84375 L 306.875,96.0625 L 307.6875,94.28125 L 308.0625,88.34375 L 307.25,83.75 L 303.125,84.15625 L 300.34375,83.78125 L 295.1875,85.15625 L 290.8125,89.3125 L 287.25,88.125 L 283.6875,87.75 L 280.90625,84.96875 L 275.9375,83.5625 L 269.21875,84.15625 L 267.4375,82.78125 L 263.84375,82.78125 L 261.28125,83.78125 L 260.09375,82.96875 L 260.09375,80.8125 L 259.6875,80.21875 L 257.21875,80.21875 z ", "name" : "Oise"},
	"FR-61" : {"path": "M 206.84375,124.65625 L 202.875,125.53125 L 201.59375,124.75 L 197.875,125.375 L 197.71875,126.84375 L 196.4375,127.15625 L 195.96875,125.0625 L 194.34375,125.375 L 191.90625,128.125 L 188.21875,130.875 L 184.1875,132.15625 L 180.96875,130.375 L 177.25,131.03125 L 175,128.78125 L 172.875,129.5625 L 169.34375,132 L 165.3125,130.875 L 162.40625,134.25 L 158.46875,135.4375 L 160.625,136.84375 L 162.5625,138.78125 L 162.09375,140.6875 L 162.40625,142.3125 L 161.28125,146.03125 L 157.9375,148.875 L 159.25,151.09375 L 161.40625,152.65625 L 164.34375,150.6875 L 166.28125,152.0625 L 171.5625,148.9375 L 176.84375,149.71875 L 179.75,148.53125 L 180.5625,146.59375 L 182.5,146.40625 L 184.25,147.96875 L 185.03125,152.25 L 187.5625,153.21875 L 188.5625,156.75 L 191.875,156.9375 L 197.15625,152.0625 L 202.4375,151.875 L 204,154 L 204.96875,161.03125 L 208.28125,162.21875 L 210.25,165.15625 L 214.34375,165.15625 L 214.53125,166.5 L 214.71875,164.5625 L 215.5,164.5625 L 218.25,168.65625 L 220.375,169 L 220.375,164.375 L 219.03125,162.59375 L 218.625,161.03125 L 221.5625,159.28125 L 224.5,158.6875 L 226.4375,156.34375 L 226.0625,149.125 L 221.9375,145.625 L 221.75,142.28125 L 218.25,139.9375 L 219.625,138 L 218.8125,135.0625 L 216.09375,134.09375 L 214.125,132.125 L 212.96875,129.40625 L 207.5,129.21875 L 205.9375,127.25 L 206.84375,124.65625 z ", "name" : "Orne"},
	"FR-62" : {"path": "M 269.25,8.65625 L 258.4375,10.71875 L 249.84375,17.34375 L 249.84375,43.71875 L 249.78125,44.5 L 252.8125,45.21875 L 253.78125,47.375 L 256.125,46.78125 L 257.5,45.03125 L 259.25,45.625 L 262.96875,48.53125 L 264.34375,47.96875 L 265.3125,50.3125 L 268.8125,51.875 L 268.8125,53.8125 L 271.375,54.78125 L 273.90625,53.8125 L 278.78125,53.21875 L 279.96875,54.21875 L 282.3125,53.21875 L 283.46875,55.1875 L 280.5625,57.125 L 280.5625,59.875 L 281.53125,60.84375 L 282.3125,60.65625 L 282.875,59.09375 L 284.65625,57.90625 L 286.40625,59.28125 L 290.5,60.65625 L 292.25,60.65625 L 292.25,58.6875 L 294.8125,60.46875 L 295,62.03125 L 293.8125,63.78125 L 295.96875,62.59375 L 297.75,61.8125 L 298.5,63.1875 L 298.5,64.5625 L 301.4375,63 L 306.125,63 L 306.3125,63.1875 L 307.46875,60.96875 L 306.875,59.96875 L 305.09375,59.59375 L 303.125,59.59375 L 301.9375,59.1875 L 303.90625,58 L 305.6875,58.1875 L 307.46875,58 L 307.6875,54.8125 L 308.875,54.03125 L 309.0625,52.25 L 306.875,50.84375 L 304.3125,50.65625 L 303.71875,50.25 L 305.3125,49.0625 L 305.6875,47.875 L 304.3125,46.90625 L 302.3125,44.5 L 302.53125,43.3125 L 305.09375,42.125 L 305.5,40.75 L 303.71875,39.9375 L 302.71875,37.375 L 299.15625,36.96875 L 295.59375,36 L 295.1875,32.03125 L 297.75,30.4375 L 296.78125,28.4375 L 294.78125,28.4375 L 293.40625,30.625 L 287.25,30.25 L 282.28125,29.03125 L 279.53125,26.0625 L 279.53125,23.6875 L 281.6875,22.6875 L 279.90625,21.3125 L 275.5625,21.125 L 272.96875,14.5625 L 269.25,8.65625 z ", "name" : "Pas de Calais"},
	"FR-63" : {"path": "M 299.09375,279.5 L 296.4375,282.5 L 296.25,281.4375 L 294.125,281.625 L 294.125,283.21875 L 292.90625,283.5625 L 291.65625,286.5625 L 290.0625,287.28125 L 287.09375,284.96875 L 287.375,289.5625 L 288.9375,291.5 L 289.71875,295.21875 L 287.375,296.96875 L 286.8125,299.71875 L 284.65625,300.875 L 280.9375,303.03125 L 281.3125,304.78125 L 285.8125,309.28125 L 286.21875,312.03125 L 284.4375,314.9375 L 284.4375,317.6875 L 285.625,319.0625 L 286.21875,322.375 L 285.84375,323.71875 L 291.84375,325.46875 L 293.4375,328.8125 L 296.59375,328.8125 L 297.84375,327.59375 L 299.96875,328.65625 L 301.03125,328.8125 L 303.6875,332.875 L 306.5,333.0625 L 307.21875,331.65625 L 308,331.75 L 308.8125,330.59375 L 312.34375,330.0625 L 314.28125,328.46875 L 316.40625,328.28125 L 316.40625,327.0625 L 317.8125,326.34375 L 318.1875,327.21875 L 319.0625,326.6875 L 320.46875,327.59375 L 322.9375,327.40625 L 325.0625,326.53125 L 326.46875,327.75 L 328.0625,327.75 L 329.3125,330.0625 L 331.25,330.9375 L 332.3125,328.46875 L 333.71875,329.71875 L 336.75,329.875 L 337.8125,327.75 L 339.5625,329.53125 L 342.03125,330.25 L 342.8125,329.5 L 341.28125,329 L 340.6875,326.65625 L 344.40625,323.15625 L 342.65625,316.71875 L 337.5625,313.375 L 335.4375,308.3125 L 333.09375,305.1875 L 333.6875,300.875 L 335.4375,299.125 L 332.3125,296.59375 L 332.40625,295.8125 L 329.65625,294.71875 L 328.78125,292.59375 L 325.78125,292.75 L 323.46875,292.21875 L 323.125,289.75 L 321.34375,288.875 L 319.0625,290.28125 L 316.40625,289.75 L 314.625,289.9375 L 308.625,289.0625 L 303.6875,286.21875 L 303.3125,284.8125 L 301.21875,282.5 L 302.625,280.5625 L 302.09375,279.5 L 299.09375,279.5 z ", "name" : "Puy de Dôme"},
	"FR-64" : {"path": "M 172.15625,428.875 L 169.34375,430.46875 L 163.6875,430.28125 L 163.15625,429.40625 L 159.4375,430.65625 L 156.59375,431.53125 L 154.46875,429.9375 L 152.1875,430.65625 L 151.46875,429.75 L 148.65625,429.75 L 146.875,430.65625 L 142.28125,430.46875 L 139.8125,432.40625 L 135.375,432.0625 L 134.5,433.3125 L 133.4375,432.9375 L 134.84375,431.53125 L 132.375,429.59375 L 129.375,432.25 L 124.25,432.59375 L 118.625,429.78125 L 117.8125,431.21875 L 113.3125,436.6875 L 109.8125,438.0625 L 107.28125,438.4375 L 107.28125,440.59375 L 109.625,442.75 L 113.125,442.9375 L 113.3125,445.46875 L 116.0625,445.6875 L 116.84375,443.90625 L 120.5625,445.46875 L 122.90625,446.0625 L 123.46875,448.40625 L 122.125,449.59375 L 122.125,453.28125 L 119.375,454.65625 L 119.1875,456.40625 L 120.9375,458.375 L 124.0625,459.34375 L 124.65625,456.40625 L 126.40625,454.46875 L 126.21875,457 L 127.59375,458.96875 L 131.09375,458.96875 L 132.65625,461.09375 L 137.34375,461.875 L 141.84375,464.625 L 149.25,464.625 L 149.65625,468.71875 L 154.71875,472.625 L 156.6875,474.96875 L 158.84375,473.8125 L 160.78125,473.40625 L 161.75,474.375 L 163.53125,473.40625 L 166.9375,471.53125 L 167.25,467.5 L 168.8125,466.3125 L 169.625,459.875 L 172.53125,460.46875 L 173.71875,459.6875 L 172.34375,456.9375 L 177.625,452.4375 L 180.75,445.40625 L 182.6875,442.875 L 180.34375,439.375 L 178.78125,437.03125 L 180.9375,435.0625 L 177.625,429.59375 L 172.34375,429.21875 L 172.15625,428.875 z ", "name" : "Pyrénées Atlantiques"},
	"FR-65" : {"path": "M 179.21875,428.53125 L 177.28125,429.5625 L 177.625,429.59375 L 180.9375,435.0625 L 178.78125,437.03125 L 180.34375,439.375 L 182.6875,442.875 L 180.75,445.40625 L 177.625,452.4375 L 172.34375,456.9375 L 173.71875,459.6875 L 172.53125,460.46875 L 169.625,459.875 L 168.8125,466.3125 L 167.25,467.5 L 166.9375,471.53125 L 167.4375,471.25 L 170.75,473.21875 L 174.65625,476.15625 L 175.03125,478.5 L 178.15625,481.03125 L 180.71875,481.03125 L 187.15625,478.28125 L 189.875,481.40625 L 193.59375,482.40625 L 194.96875,480.0625 L 196.71875,480.84375 L 200.5,481.09375 L 200.25,470.59375 L 202.21875,470.59375 L 203.96875,471.46875 L 205.21875,470.25 L 205.03125,468.3125 L 207.5,466.875 L 206.625,463.1875 L 205.5625,462.28125 L 203.4375,463 L 204.5,461.21875 L 203.96875,458.9375 L 200.78125,456.625 L 200.96875,455.03125 L 202.75,452.03125 L 205.03125,451.15625 L 205.03125,449.90625 L 206.4375,447.78125 L 207.375,446.46875 L 203.8125,444.625 L 199.03125,444.625 L 198.3125,443.1875 L 195.84375,443.1875 L 195.125,441.59375 L 192.84375,441.59375 L 192.125,442.3125 L 189.46875,442.3125 L 189.3125,440.71875 L 187.1875,439.3125 L 187.90625,438.59375 L 188.25,436.84375 L 187.71875,436.3125 L 186.65625,433.46875 L 184.34375,433.125 L 182.0625,431.875 L 182.21875,428.53125 L 179.21875,428.53125 z ", "name" : "Hautes Pyrénées"},
	"FR-66" : {"path": "M 300.5,468.65625 L 296.25,470.9375 L 296.59375,473.4375 L 278.0625,473.4375 L 278.21875,476.78125 L 280.15625,479.625 L 272.21875,483.5 L 271.375,483 L 264.84375,483.46875 L 264.03125,485.125 L 260.71875,485.96875 L 258.5,487.90625 L 252.4375,489.3125 L 252.78125,491.375 L 255.71875,494.125 L 261.5625,495.6875 L 261.75,499.1875 L 264.875,501.9375 L 267.21875,501.53125 L 270.5625,497.4375 L 274.65625,496.65625 L 281.09375,498.8125 L 286.5625,503.5 L 288.125,501.53125 L 289.5,501.53125 L 290.875,502.5 L 292.03125,501.9375 L 292.21875,499.1875 L 298.09375,497.8125 L 300.03125,495.28125 L 302.96875,494.3125 L 307.0625,494.3125 L 309.625,497.03125 L 312.75,497.25 L 312.75,494.125 L 311.1875,491.96875 L 308.4375,490.78125 L 308,473.71875 L 305.4375,472.53125 L 300.5,468.65625 z ", "name" : "Pyrénées Orientales"},
	"FR-67" : {"path": "M 480.71875,112.28125 L 477,113.3125 L 475.28125,116.3125 L 475.28125,119.25 L 473.71875,120.625 L 472.34375,120.625 L 469.8125,118.84375 L 467.84375,120.21875 L 465.5,120.21875 L 463.5625,118.28125 L 459.84375,117.6875 L 457.6875,116.71875 L 456.90625,113.78125 L 455.15625,115.71875 L 454.1875,120.21875 L 451.625,121 L 451.625,123.53125 L 454.1875,124.71875 L 456.125,126.09375 L 455.34375,127.84375 L 457.125,129 L 460.25,126.65625 L 465.6875,129.78125 L 463.375,134.09375 L 463.5625,135.46875 L 465.125,137.03125 L 463.9375,141.125 L 460.03125,145.03125 L 457.875,144.84375 L 459.25,146.1875 L 458.46875,149.71875 L 459.25,155 L 462.96875,155.96875 L 462.65625,156.6875 L 465.59375,156.53125 L 467.3125,158.625 L 468.84375,160.53125 L 472.6875,160.34375 L 474.40625,165.3125 L 477.40625,166.625 L 477.375,166 L 482.46875,156.03125 L 481.875,150.375 L 484.21875,142.75 L 484.8125,136.09375 L 489.875,132.40625 L 489.875,130.0625 L 491.84375,127.5 L 493.40625,127.5 L 495.15625,125.75 L 494.78125,122.4375 L 496.53125,117.75 L 499.25,117.15625 L 496.53125,115 L 491.65625,114.4375 L 487.34375,112.28125 L 484.40625,114.03125 L 482.84375,112.28125 L 480.71875,112.28125 z ", "name" : "Bas-Rhin"},
	"FR-68" : {"path": "M 465.59375,156.53125 L 462.65625,156.6875 L 460.8125,160.84375 L 458.46875,165.53125 L 459.0625,168.46875 L 457.125,172.96875 L 453.78125,175.875 L 453.59375,183.5 L 451.15625,185.59375 L 451.25,185.65625 L 452.03125,187.21875 L 455.15625,187.40625 L 458.6875,190.15625 L 459.25,191.5 L 459.0625,193.84375 L 458.09375,195.625 L 458.46875,197.96875 L 461.21875,197.5625 L 461.8125,199.71875 L 462.78125,203.875 L 465.09375,203.5 L 464.6875,205.625 L 466.0625,206.8125 L 473.28125,206.625 L 477,203.6875 L 477.1875,199.375 L 479.15625,196.84375 L 476.59375,193.90625 L 475.25,190.78125 L 476.8125,188.65625 L 476.8125,183.75 L 477.78125,181.40625 L 477.78125,177.5 L 479.53125,174.96875 L 477.59375,172.25 L 477.40625,166.625 L 474.40625,165.3125 L 472.6875,160.34375 L 468.84375,160.53125 L 467.3125,158.625 L 465.59375,156.53125 z ", "name" : "Haut Rhin"},
	"FR-69" : {"path": "M 371.75,275.3125 L 369.625,275.5 L 367.84375,277.25 L 366.6875,275.6875 L 364.9375,277.25 L 362.5625,275.6875 L 360.625,275.6875 L 359.84375,276.28125 L 359.4375,278.53125 L 360.5,279.375 L 360.5,281.28125 L 361.78125,283.40625 L 360.71875,284.6875 L 356.6875,284.6875 L 356.46875,288.5 L 355.1875,289.78125 L 356.03125,292.96875 L 356.03125,294.875 L 357.75,296.5625 L 357.75,298.90625 L 360.28125,301.25 L 360.28125,304 L 359.03125,305.90625 L 360.5,306.78125 L 360.5,308.25 L 359.21875,309.3125 L 359.21875,311.03125 L 364.75,316.125 L 371.34375,317.1875 L 371.96875,319.09375 L 369.84375,321.625 L 371.5625,322.6875 L 373.6875,321.84375 L 375.96875,322.1875 L 380.0625,320.15625 L 379.40625,318.875 L 376.65625,316.125 L 380.90625,314.625 L 386.4375,313.34375 L 390.6875,307.84375 L 387.90625,305.5 L 388.0625,303.46875 L 384.09375,302.3125 L 381.53125,303.15625 L 381.125,299.75 L 378.78125,297.625 L 377.28125,297.40625 L 373.46875,295.09375 L 374.09375,293.59375 L 374.09375,287 L 375.15625,285.53125 L 375.53125,280.96875 L 374.875,282.53125 L 373.5,282.34375 L 372.75,278.4375 L 371.75,275.3125 z ", "name" : "Rhône"},
	"FR-70" : {"path": "M 423.5,175.5 L 419.8125,176.09375 L 419.21875,178.03125 L 417.25,179.40625 L 415.90625,177.84375 L 414.9375,178.4375 L 415.6875,179.59375 L 413.75,180.78125 L 414.34375,182.34375 L 412.1875,183.125 L 412.1875,185.65625 L 409.4375,185.65625 L 409.25,187.21875 L 406.53125,187.8125 L 406.71875,190.15625 L 408.46875,190.34375 L 407.5,191.5 L 406.90625,195.40625 L 405.15625,195.40625 L 402.21875,196.59375 L 399.09375,195.40625 L 396.375,196.59375 L 396.375,198.5625 L 398.5,198.9375 L 400.0625,202.0625 L 400.28125,203.625 L 397.75,206.5625 L 396.5625,206.9375 L 395.78125,207.90625 L 397.9375,208.90625 L 398.3125,212.03125 L 400.0625,212.21875 L 400.28125,216.125 L 401.0625,216.90625 L 401.15625,217.53125 L 402.65625,217.9375 L 404.34375,219.34375 L 406.875,219.34375 L 407.84375,218.375 L 409.5625,218.4375 L 411.34375,218.5 L 415.28125,215.28125 L 416.40625,215.28125 L 417.65625,214.3125 L 421.71875,214.4375 L 424.8125,211.90625 L 427.0625,211.5 L 427.90625,209.40625 L 429.71875,208.84375 L 431.53125,205.75 L 434.0625,203.78125 L 436.71875,203.375 L 438.6875,204.78125 L 442.34375,204.34375 L 442.34375,202.375 L 443.8125,201.53125 L 444.96875,199.9375 L 447.21875,199.9375 L 448.46875,198.625 L 448.9375,195.5 L 448.9375,193.5625 L 448.09375,190.59375 L 448.09375,188.09375 L 449.625,186.96875 L 451.4375,186.03125 L 451.25,185.65625 L 445,182.34375 L 443.25,180.375 L 441.5,179.21875 L 439.9375,180 L 439.71875,181.15625 L 438.15625,182.125 L 437.1875,182.125 L 434.25,178.8125 L 430.15625,178.8125 L 428.40625,180.1875 L 426.84375,180.375 L 424.3125,178.4375 L 424.5,176.28125 L 423.5,175.5 z ", "name" : "Haute Saône"},
	"FR-71" : {"path": "M 351.46875,227.84375 L 351.46875,228.03125 L 348.53125,228.03125 L 346.15625,229.4375 L 344.75,231.40625 L 345.875,233.09375 L 346.84375,233.65625 L 346.15625,235.34375 L 345.15625,235.90625 L 344.0625,237.4375 L 345.3125,238.28125 L 345.15625,240.25 L 345.4375,242.34375 L 347.28125,243.46875 L 347.28125,244.3125 L 345.3125,245.4375 L 345.3125,246.6875 L 346.71875,247.9375 L 346.5625,248.65625 L 343.5,248.5 L 343.21875,249.5 L 341.8125,249.78125 L 340.40625,251.59375 L 338.59375,251.59375 L 337.1875,253 L 335.34375,253.28125 L 334.375,250.90625 L 333.125,250.75 L 330.0625,252.65625 L 333.6875,259.46875 L 333.6875,262.40625 L 334.65625,263.59375 L 337.96875,263.59375 L 339.125,265.15625 L 342.25,265.15625 L 343.625,267.09375 L 343.4375,274.71875 L 339.34375,277.84375 L 339.25,278.0625 L 339.53125,278.03125 L 340.125,278.21875 L 340.3125,281.34375 L 343.25,281.9375 L 343.625,283.3125 L 345.1875,283.3125 L 347.53125,281.9375 L 353.78125,282.90625 L 354.96875,284.09375 L 356.53125,282.53125 L 358.6875,282.53125 L 359.84375,276.28125 L 360.625,275.6875 L 362.5625,275.6875 L 364.9375,277.25 L 366.6875,275.6875 L 367.84375,277.25 L 369.625,275.5 L 371.75,275.3125 L 372.75,278.4375 L 373.5,282.34375 L 374.875,282.53125 L 376.0625,279.78125 L 379.75,265.34375 L 381.125,262.8125 L 383.28125,262.59375 L 385.4375,264.375 L 387,263.96875 L 388.9375,262.59375 L 390.90625,263 L 392.0625,265.53125 L 393.1875,265.96875 L 398.3125,265.34375 L 400.28125,263.78125 L 399.5,262.59375 L 397.15625,261.8125 L 396.9375,259.09375 L 398.90625,257.71875 L 399.6875,254.40625 L 397.9375,251.28125 L 396.75,249.71875 L 397.34375,249.125 L 397.34375,247.1875 L 395.78125,246.1875 L 395.375,244.625 L 399.875,244.0625 L 400.28125,242.5 L 398.90625,242.5 L 397.75,241.125 L 395.59375,241.125 L 393.8125,238.1875 L 392.25,238 L 392.4375,235.65625 L 390.75,235.46875 L 388.5,237 L 386.25,237.5625 L 384.71875,236.59375 L 382.75,236.46875 L 382.1875,237.28125 L 380.375,237.5625 L 376.3125,238.84375 L 370.40625,240.9375 L 368.15625,239.125 L 365.5,238.5625 L 365.375,236.1875 L 362.84375,234.34375 L 359.34375,231.6875 L 355.40625,231.8125 L 351.625,227.90625 L 351.46875,227.84375 z ", "name" : "Saône et Loire"},
	"FR-72" : {"path": "M 202.4375,151.875 L 197.15625,152.0625 L 191.875,156.9375 L 189.125,156.78125 L 185.46875,157.96875 L 184.34375,159.90625 L 183.84375,164.09375 L 184.1875,166.65625 L 181.28125,169.09375 L 180.46875,170.6875 L 181.125,172.15625 L 180.3125,174.09375 L 180.625,174.90625 L 177.40625,175.21875 L 176.9375,176.65625 L 178.375,180.21875 L 178.21875,181.1875 L 176.9375,182.3125 L 174.1875,182.46875 L 173.84375,183.4375 L 174.5,184.40625 L 174.5,190.21875 L 173.875,191.6875 L 175.625,193.125 L 175.625,195.0625 L 178.53125,195.21875 L 186.125,197.46875 L 194.34375,202.46875 L 197,203.5 L 198.3125,200.875 L 202.21875,203.625 L 204.375,203.625 L 203.1875,199.71875 L 205.5625,201.28125 L 206.90625,199.3125 L 212.5625,197.75 L 211.59375,195.40625 L 212.96875,193.65625 L 215.90625,192.5 L 218.625,188.96875 L 218.625,185.25 L 220.59375,185.25 L 221.375,182.53125 L 221.5625,178.4375 L 219.625,176.65625 L 221.1875,173.9375 L 223.5,171 L 220.78125,169.0625 L 218.25,168.65625 L 215.5,164.5625 L 214.71875,164.5625 L 214.53125,166.5 L 214.34375,165.15625 L 210.25,165.15625 L 208.28125,162.21875 L 204.96875,161.03125 L 204,154 L 202.4375,151.875 z ", "name" : "Sarthe"},
	"FR-73" : {"path": "M 417,293.8125 L 416.59375,299.53125 L 415.3125,300.59375 L 415.3125,306.96875 L 412.75,307.40625 L 412.34375,311.03125 L 410,312.71875 L 409.96875,312.6875 L 410.21875,313.78125 L 412.5625,316.3125 L 412.5625,318.03125 L 414.875,322.28125 L 419.78125,323.34375 L 421.46875,324.625 L 422.125,323.96875 L 421.25,322.28125 L 422.53125,319.5 L 424.03125,319.3125 L 426.5625,322.6875 L 427.625,321.21875 L 429.125,321.21875 L 433.15625,325.25 L 433.375,328 L 431.46875,329.0625 L 430.59375,333.09375 L 432.3125,334.8125 L 432.3125,336.5 L 431.875,338.21875 L 433.15625,336.9375 L 435.28125,338.21875 L 436.40625,339.75 L 439.9375,339.375 L 441.09375,340.53125 L 441.6875,343.28125 L 445.1875,342.875 L 445.59375,339.9375 L 447.34375,339.15625 L 451.09375,339.34375 L 451.03125,339.21875 L 456.875,336.875 L 459.03125,338.25 L 461.1875,338.25 L 461.375,335.90625 L 463.90625,334.53125 L 464.875,333.375 L 469.96875,331.40625 L 470.5625,328.09375 L 469.5625,326.53125 L 472.3125,321.84375 L 469.78125,320.875 L 469,318.125 L 463.71875,315 C 463.71875,315 464.03377,309.01275 463.53125,307.9375 C 463.51544,307.91055 463.48155,307.86019 463.46875,307.84375 C 463.46374,307.8383 463.44264,307.81713 463.4375,307.8125 C 463.43393,307.81272 463.4091,307.81243 463.40625,307.8125 C 463.4062,307.80552 463.40608,307.78312 463.40625,307.78125 C 463.40269,307.78137 463.37784,307.78121 463.375,307.78125 C 463.37209,307.7811 463.3467,307.78118 463.34375,307.78125 C 463.34022,307.78117 463.31534,307.78126 463.3125,307.78125 C 462.53125,307.97657 459.625,308.1875 459.625,308.1875 L 456.6875,304.84375 L 456.78125,301.625 L 455.46875,301.46875 L 453.96875,303.15625 L 452.0625,304.4375 L 452.5,303.375 L 450.5625,300.1875 L 447.375,300.1875 L 445.46875,297.84375 L 446.53125,296.5625 L 446.125,295.28125 L 444.625,294.875 L 442.71875,296.15625 L 441.21875,300.59375 L 439.3125,302.09375 L 438.46875,305.5 L 437.625,307.1875 L 434.21875,307.84375 L 433.15625,306.78125 L 430.1875,303.59375 L 428.46875,303.59375 L 427.84375,304.84375 L 424.4375,304.4375 L 422.96875,301.65625 L 419.125,301.03125 L 419.125,295.5 L 417,293.8125 z ", "name" : "Savoie"},
	"FR-74" : {"path": "M 446.125,266.1875 L 441.65625,266.96875 L 437.34375,270.46875 L 436.1875,268.71875 L 434.03125,268.90625 L 432.0625,273.21875 L 432.28125,274.96875 L 434.40625,276.71875 L 430.5,279.28125 L 427.96875,281.625 L 423.65625,281.625 L 421.6875,283.1875 L 419.78125,283.8125 L 418.71875,285.75 L 416.8125,284.6875 L 416.375,290.1875 L 417.4375,292.125 L 417.5,294.21875 L 419.125,295.5 L 419.125,301.03125 L 422.96875,301.65625 L 424.4375,304.4375 L 427.84375,304.84375 L 428.46875,303.59375 L 430.1875,303.59375 L 433.15625,306.78125 L 434.21875,307.84375 L 437.625,307.1875 L 438.46875,305.5 L 439.3125,302.09375 L 441.21875,300.59375 L 442.71875,296.15625 L 444.625,294.875 L 446.125,295.28125 L 446.53125,296.5625 L 445.46875,297.84375 L 447.375,300.1875 L 450.5625,300.1875 L 452.5,303.375 L 452.0625,304.4375 L 453.96875,303.15625 L 455.46875,301.46875 L 456.78125,301.625 L 456.875,298.21875 L 463.53125,295.46875 L 464.3125,293.53125 L 463.90625,289.21875 L 459.625,284.75 L 458.25,285.53125 L 458.25,283.75 L 458.25,280.84375 L 454.53125,279.0625 L 454.34375,277.5 L 456.5,275.15625 L 456.5,272.4375 L 452.96875,268.71875 L 452.78125,266.1875 L 446.125,266.1875 z ", "name" : "Haute Savoie"},
	"FR-75" : {"path": "M 280.28125,129.0625 L 277.75,129.09375 L 276.625,129.59375 L 276.15625,130.21875 L 275.125,130.28125 L 274.1875,131.34375 L 274.21875,131.9375 L 274.4375,132.625 L 276,133.0625 L 277.90625,134.03125 L 279.125,134.09375 L 279.9375,133.875 L 280.78125,133.28125 L 281.0625,133.53125 L 282.875,133.78125 L 283.1875,133.125 L 283.1875,132.46875 L 282.875,132.34375 L 281.625,132.40625 L 281.71875,132.71875 L 281.5,132.90625 L 281.09375,132.90625 L 281.25,132.5 L 281.3125,132.0625 L 281.25,132.0625 L 281.09375,130.3125 L 280.28125,129.0625 z ", "name" : "Paris"},
	"FR-76" : {"path": "M 241.9375,61.5 L 240.65625,63.0625 L 232.28125,69.5 L 217.4375,73.21875 L 207.65625,76.71875 L 199.65625,81.03125 L 194.96875,88.0625 L 194,93.53125 L 197.90625,96.46875 L 203.5625,97.625 L 202.65625,97.78125 L 202.6875,97.9375 L 207.0625,97.375 L 209.3125,94.96875 L 211,94.5625 L 212.9375,97.9375 L 215.625,97.65625 L 216.75,99.59375 L 221.5,99.3125 L 226.28125,102.6875 L 223.1875,103.65625 L 225.4375,105.34375 L 226.84375,105.34375 L 228.09375,108.03125 L 230.34375,108.03125 L 231.03125,106.34375 L 229.34375,105.21875 L 234.125,103.8125 L 239.15625,103.25 L 240.4375,99.59375 L 242.8125,97.5 L 247.3125,97.375 L 252.5,100.03125 L 255.59375,100.375 L 256.125,98.75 L 257.5,96.1875 L 258.28125,94.84375 L 256.3125,94.84375 L 256.3125,91.5 L 255.15625,89.5625 L 255.9375,85.65625 L 256.71875,83.6875 L 255.15625,83.6875 L 255.9375,81.75 L 257.875,79.40625 L 255.9375,75.875 L 255.34375,72.375 L 246.75,63.96875 L 245.78125,62.03125 L 243.625,62.21875 L 241.9375,61.5 z ", "name" : "Seine Maritime"},
	"FR-77" : {"path": "M 307.5,116.5 L 306.3125,117.09375 L 304.375,118.65625 L 302.4375,118.0625 L 299.09375,119.4375 L 296.375,117.875 L 295.1875,119.4375 L 293.4375,119.625 L 292.25,118.65625 L 290.3125,117.5 L 287.96875,119.0625 L 287.875,118.96875 L 287.03125,124.375 L 288.1875,131.25 L 288.1875,135.84375 L 286.65625,139.6875 L 287.03125,142.34375 L 285.3125,143.6875 L 286.25,148.875 L 285.5,150 L 284.9375,155.1875 L 286.25,156.90625 L 281.875,159.78125 L 281.875,163.71875 L 283.09375,165.53125 L 285.4375,166.71875 L 285.625,170.03125 L 282.5,172.1875 L 284.25,173.75 L 286.40625,172.375 L 291.6875,172.5625 L 293.625,172.1875 L 294.21875,170.625 L 296.375,170.8125 L 296.75,172.375 L 301.625,169.625 L 303.40625,167.5 L 305.75,164.75 L 304.1875,163 L 305.5625,160.0625 L 309.0625,158.3125 L 316.6875,158.6875 L 318.4375,157.34375 L 318.59375,157.5 L 319.03125,154.21875 L 319.8125,150.3125 L 321.1875,148.53125 L 321.375,146.1875 L 324.09375,145.03125 L 324.09375,143.46875 L 321.1875,143.65625 L 320.59375,142.28125 L 321.5625,140.53125 L 320.78125,137.59375 L 319.21875,136.625 L 319.625,133.90625 L 321.1875,132.90625 L 320.96875,131.75 L 321.53125,131.0625 L 318.25,130.375 L 317.25,128.03125 L 315.5,127.4375 L 310.25,122.375 L 309.65625,118.0625 L 307.5,116.5 z ", "name" : "Seine et Marne"},
	"FR-78" : {"path": "M 251.5,118.15625 L 251.4375,118.28125 L 245.96875,119.84375 L 245.1875,120.8125 L 246.1875,122.375 L 246.1875,123.9375 L 247.9375,124.3125 L 246.9375,125.3125 L 247.03125,126.1875 L 247.15625,126.09375 L 249.09375,128.03125 L 249.6875,130.375 L 251.25,131.9375 L 250.46875,134.09375 L 250.46875,136.03125 L 251.84375,137.59375 L 250.46875,139.9375 L 251.84375,143.28125 L 254.5625,145.21875 L 254.96875,147.375 L 257.3125,147.75 L 257.875,152.0625 L 259.65625,154.21875 L 262.8125,154.8125 L 263.28125,151.71875 L 264.625,150.1875 L 263.5,148.46875 L 266.34375,148.46875 L 268.28125,145.8125 L 266.9375,143.5 L 267.3125,141.40625 L 270.1875,140.0625 L 270.5625,137.9375 L 272.46875,137.1875 L 274.21875,136.40625 L 274.5625,136.625 L 274.5625,136.40625 L 272.8125,134.4375 L 271.71875,131.46875 L 273.46875,127.65625 L 272.59375,124.78125 L 269.1875,122.71875 L 264.375,122.5 L 259.875,119.625 L 256.25,120.28125 L 251.5,118.15625 z ", "name" : "Yvelines"},
	"FR-79" : {"path": "M 181.71875,229.40625 L 176.4375,229.59375 L 171.5625,230.5625 L 166.28125,230.96875 L 166.28125,233.6875 L 163.5625,235.46875 L 157.5,234.09375 L 153.40625,235.84375 L 155.34375,238.59375 L 155.34375,240.9375 L 160.03125,244.84375 L 158.875,247.375 L 162,250.875 L 160.625,252.65625 L 162.5625,255.5625 L 163.15625,261.03125 L 162,262.59375 L 163.375,264.9375 L 162,267.5 L 162.1875,269.0625 L 163.75,267.875 L 165.6875,269.84375 L 162.96875,271.59375 L 162,272.75 L 159.84375,273.34375 L 157.3125,274.53125 L 157.125,274.375 L 157.21875,277.25 L 159.34375,279.5625 L 159.34375,280.84375 L 162.53125,283.1875 L 166.5625,283.40625 L 169.3125,287 L 173.78125,286.59375 L 177.40625,289.125 L 180.15625,290.40625 L 180.59375,292.53125 L 182.125,294 L 183.96875,292.96875 L 183.5625,291.90625 L 185.03125,290.1875 L 185.03125,288.71875 L 187.59375,288.0625 L 191,286.375 L 194.59375,285.75 L 195.25,283.8125 L 192.25,282.96875 L 190.78125,280.625 L 191.84375,278.09375 L 193.125,276.59375 L 193.125,273.40625 L 191.84375,272.5625 L 190.15625,273.40625 L 190.15625,274.46875 L 189.28125,275.75 L 187.59375,273.84375 L 187.375,272.5625 L 188.03125,271.09375 L 186.53125,270.03125 L 186.53125,265.5625 L 185.6875,265.34375 L 185.6875,263.84375 L 186.96875,261.71875 L 187.15625,260.65625 L 188.03125,258.34375 L 187.375,256.84375 L 185.25,256 L 187.375,252.8125 L 188.03125,251.125 L 188.03125,250.0625 L 186.53125,248.34375 L 186.53125,247.71875 L 187.375,246.21875 L 186.75,245.15625 L 188.03125,243.6875 L 186.96875,241.34375 L 186.3125,237.9375 L 186.09375,235.8125 L 184.40625,236.03125 L 184.09375,231.21875 L 183.6875,231.9375 L 182.3125,230.78125 L 181.71875,229.40625 z ", "name" : "Deux Sèvres"},
	"FR-80" : {"path": "M 249.78125,44.5 L 249.25,50.9375 L 253.5625,54.84375 L 253.5625,56.8125 L 248.28125,53.6875 L 241.9375,61.5 L 243.625,62.21875 L 245.78125,62.03125 L 246.75,63.96875 L 255.34375,72.375 L 255.9375,75.875 L 257.875,79.40625 L 257.21875,80.21875 L 259.6875,80.21875 L 260.09375,80.8125 L 260.09375,82.96875 L 261.28125,83.78125 L 263.84375,82.78125 L 267.4375,82.78125 L 269.21875,84.15625 L 275.9375,83.5625 L 280.90625,84.96875 L 283.6875,87.75 L 287.25,88.125 L 290.8125,89.3125 L 295.1875,85.15625 L 300.34375,83.78125 L 303.125,84.15625 L 307.25,83.75 L 306.875,81.59375 L 305.90625,77.625 L 305.5,75.25 L 307.28125,73.25 L 307.28125,70.6875 L 309.84375,67.90625 L 309.375,65.15625 L 307.875,64.75 L 306.125,63 L 301.4375,63 L 298.5,64.5625 L 298.5,63.1875 L 297.75,61.8125 L 295.96875,62.59375 L 293.8125,63.78125 L 295,62.03125 L 294.8125,60.46875 L 292.25,58.6875 L 292.25,60.65625 L 290.5,60.65625 L 286.40625,59.28125 L 284.65625,57.90625 L 282.875,59.09375 L 282.3125,60.65625 L 281.53125,60.84375 L 280.5625,59.875 L 280.5625,57.125 L 283.46875,55.1875 L 282.3125,53.21875 L 279.96875,54.21875 L 278.78125,53.21875 L 273.90625,53.8125 L 271.375,54.78125 L 268.8125,53.8125 L 268.8125,51.875 L 265.3125,50.3125 L 264.34375,47.96875 L 262.96875,48.53125 L 259.25,45.625 L 257.5,45.03125 L 256.125,46.78125 L 253.78125,47.375 L 252.8125,45.21875 L 249.78125,44.5 z ", "name" : "Somme"},
	"FR-81" : {"path": "M 270.8125,396.875 L 267.4375,397.0625 L 265.15625,399.34375 L 264.4375,397.75 L 262.84375,398.65625 L 262.6875,398.28125 L 261.78125,399.1875 L 258.96875,400.25 L 256.65625,401.65625 L 250.65625,402.375 L 249.9375,405.375 L 252.25,405.375 L 249.9375,407.5 L 248.875,409.4375 L 245.53125,409.4375 L 247.28125,411.375 L 246.28125,413.03125 L 246.59375,413.15625 L 247.46875,415.78125 L 249.59375,418.28125 L 250.125,418.625 L 250.28125,421.09375 L 252.0625,423.9375 L 253.46875,425.53125 L 253.46875,427.46875 L 252.0625,428 L 253.125,429.59375 L 257.71875,431.53125 L 258.59375,432.78125 L 260.90625,435.59375 L 263.5625,436.3125 L 265.6875,435.9375 L 265.6875,438.4375 L 265.625,439.71875 L 266.78125,439.5625 L 266.5,440.9375 L 270.375,440.9375 L 273.96875,442.0625 L 274.25,438.46875 L 275.90625,438.46875 L 281.96875,439.5625 L 287.78125,439.5625 L 292.1875,438.1875 L 293.3125,434.59375 L 290.28125,431.8125 L 291.09375,429.0625 L 292.75,426.59375 L 295.5,428.5 L 302.6875,426.03125 L 303.8125,423.8125 L 300.15625,421.46875 L 298.5625,421.09375 L 297.5,422.5 L 295.375,423.03125 L 292,421.28125 L 288.46875,416.6875 L 288.46875,414.75 L 286.53125,411.1875 L 286.71875,409.59375 L 285.125,405.53125 L 282.125,404.125 L 280,400.40625 L 274.15625,399.34375 L 270.8125,396.875 z ", "name" : "Tarn"},
	"FR-82" : {"path": "M 220.1875,384.6875 L 218.8125,389.15625 L 220.96875,391.5 L 220,395.21875 L 218.8125,396.59375 L 219.625,398.9375 L 215.90625,399.71875 L 212.96875,400.5 L 213.75,403.21875 L 212.28125,403.65625 L 213.15625,404.46875 L 216,404.46875 L 217.40625,403.78125 L 218.65625,404.46875 L 216.34375,405.53125 L 216.34375,407.3125 L 214.21875,408.90625 L 214.21875,411.1875 L 218.125,411.375 L 219.34375,412.625 L 219.34375,415.09375 L 220.78125,416.5 L 219.53125,418.4375 L 220.0625,419.5 L 222.53125,418.4375 L 227.65625,418.4375 L 229.09375,417.5625 L 230.84375,417.5625 L 232.78125,419.875 L 237.21875,418.625 L 238.4375,416.6875 L 236.6875,415.78125 L 237.90625,415.28125 L 238.28125,413.5 L 240.21875,413.6875 L 241.28125,414.90625 L 242.15625,413.5 L 245,412.4375 L 246.28125,413.03125 L 247.28125,411.375 L 245.53125,409.4375 L 248.875,409.4375 L 249.9375,407.5 L 252.25,405.375 L 249.9375,405.375 L 250.65625,402.375 L 256.65625,401.65625 L 258.96875,400.25 L 261.78125,399.1875 L 262.6875,398.28125 L 261.59375,395.46875 L 263.1875,392.28125 L 260.375,392.09375 L 260.03125,387.6875 L 255.78125,389.625 L 252.9375,388.9375 L 251.1875,391.0625 L 248.1875,390.6875 L 247.65625,394.21875 L 246.21875,394.21875 L 245.34375,392.28125 L 244.8125,391.40625 L 243.21875,391.5625 L 240.21875,394.75 L 236.5,394.59375 L 235.96875,392.28125 L 235.96875,390.53125 L 235.625,390.15625 L 234.375,391.5625 L 232.78125,391.5625 L 231.03125,389.625 L 229.4375,389.625 L 228.375,387.5 L 229.78125,385.90625 L 229.625,384.875 L 227.125,384.96875 L 227.4375,385.65625 L 223.125,386.4375 L 220.1875,384.6875 z ", "name" : "Tarn et Garonne"},
	"FR-83" : {"path": "M 457.78125,413.1875 L 454.8125,413.3125 L 453.40625,414.75 L 448.09375,414.5625 L 443.5,417.90625 L 440.34375,415.78125 L 435.375,417.375 L 434.5,419.15625 L 430.96875,421.8125 L 424.59375,417.5625 L 419.4375,419.25 L 419.1875,420.625 L 419.28125,420.5625 L 422.46875,422.6875 L 418.21875,425.53125 L 416.46875,429.0625 L 418.59375,430.8125 L 418.40625,434.53125 L 421.78125,437.71875 L 420.875,438.4375 L 417,438.25 L 417,439.65625 L 418.75,440.53125 L 418.75,441.0625 L 417.15625,442.5 L 418.0625,443.5625 L 419.46875,443.5625 L 420.875,444.96875 L 421.0625,446.03125 L 419.28125,447.09375 L 417.875,448.6875 L 417.6875,452.5625 L 418.21875,453.28125 L 421.71875,454.84375 L 422.6875,458.75 L 424.84375,459.15625 L 426.8125,457.78125 L 430.3125,455.625 L 436.375,456.21875 L 436.1875,457.78125 L 434.21875,458.75 L 438.90625,458.96875 L 437.75,457.78125 L 437.34375,455.25 L 439.875,453.5 L 442.8125,454.46875 L 444,454.84375 L 444.96875,456.03125 L 446.34375,455.0625 L 446.71875,452.5 L 448.28125,451.15625 L 452.375,451.15625 L 453.5625,449.375 L 456.28125,450.15625 L 459.40625,448.8125 L 459.40625,443.71875 L 455.3125,443.90625 L 458.4375,441.96875 L 460,439.8125 L 460.40625,436.6875 L 466.0625,435.90625 L 469.21875,432.375 L 467.03125,430.125 L 467.03125,428.875 L 465.96875,427.8125 L 467.375,426.59375 L 467.03125,424.625 L 464.71875,423.75 L 463.5,423.75 L 461.375,421.625 L 461,417.90625 L 458.71875,416.84375 L 456.40625,416.6875 L 455.53125,414.5625 L 457.78125,413.1875 z ", "name" : "Var"},
	"FR-84" : {"path": "M 387,381.34375 L 384.25,381.5625 L 382.125,384.875 L 382.6875,388.375 L 386,388.78125 L 385.4375,390.34375 L 382.875,390.53125 L 379.96875,393.46875 L 379.1875,392.5 L 379.75,388.59375 L 378.59375,387.21875 L 373.3125,388 L 372.28125,390.09375 L 372.84375,390.40625 L 376.15625,395.90625 L 376.15625,400.34375 L 381.96875,406.125 L 381.96875,408.625 L 379.71875,409.90625 L 379.875,409.96875 L 386.9375,412.96875 L 389.9375,416.3125 L 391.375,418.28125 L 395.25,420.03125 L 399.84375,419.875 L 407.4375,423.03125 L 411.6875,423.5625 L 417,422.34375 L 419.1875,420.625 L 419.46875,419.15625 L 415.40625,414.5625 L 410.96875,414.5625 L 410.96875,412.96875 L 412.5625,411.1875 L 412.5625,409.25 L 409.03125,407.5 L 408.6875,404.65625 L 410.625,403.78125 L 410.625,401.3125 L 408.5,400.9375 L 408.34375,398.28125 L 408.3125,398.09375 L 406.53125,397.96875 L 403.59375,395.8125 L 402.8125,393.28125 L 397.34375,392.875 L 393.25,392.5 L 392.84375,390.15625 L 394.21875,387.21875 L 391.6875,389.375 L 387.78125,388.96875 L 387,387.59375 L 389.71875,383.90625 L 387,381.34375 z ", "name" : "Vaucluse"},
	"FR-85" : {"path": "M 138.53125,229.5625 L 137.40625,231.65625 L 134.1875,231.65625 L 135.46875,232.96875 L 134.5,236.1875 L 131.59375,237.15625 L 130.46875,236.34375 L 130.96875,233.125 L 130.15625,231.34375 L 128.375,231.34375 L 127.09375,232.78125 L 127.71875,237.3125 L 129.1875,239.40625 L 127.71875,241.03125 L 125,240.53125 L 120.96875,239.5625 L 119.84375,236.5 L 117.25,236.1875 L 113.875,234.71875 L 113.0625,232.78125 L 109.375,230.375 L 103.5625,237.875 L 103.375,242.5625 L 109.40625,248.40625 L 109.21875,250.15625 L 110.96875,250.15625 L 114.6875,261.3125 L 118.59375,263.25 L 122.5,267.15625 L 127,267.15625 L 128.75,271.0625 L 133.0625,271.0625 L 135,274 L 139.3125,276.15625 L 139.5,273.40625 L 140.59375,274.4375 L 146.5625,270.8125 L 149.3125,270.625 L 150.46875,273.75 L 154.1875,272.1875 L 157.3125,274.53125 L 159.84375,273.34375 L 162,272.75 L 162.96875,271.59375 L 165.6875,269.84375 L 163.75,267.875 L 162.1875,269.0625 L 162,267.5 L 163.375,264.9375 L 162,262.59375 L 163.15625,261.03125 L 162.5625,255.5625 L 160.625,252.65625 L 162,250.875 L 158.875,247.375 L 160.03125,244.84375 L 155.34375,240.9375 L 155.34375,238.59375 L 153.40625,235.84375 L 153.78125,235.6875 L 151.125,233.4375 L 146.125,233.4375 L 144.5,232.46875 L 142.25,232.15625 L 139.65625,229.71875 L 138.53125,229.5625 z ", "name" : "Vendée"},
	"FR-86" : {"path": "M 188.75,225.6875 L 185.03125,229.59375 L 184.09375,231.21875 L 184.40625,236.03125 L 186.09375,235.8125 L 186.3125,237.9375 L 186.96875,241.34375 L 188.03125,243.6875 L 186.75,245.15625 L 187.375,246.21875 L 186.53125,247.71875 L 186.53125,248.34375 L 188.03125,250.0625 L 188.03125,251.125 L 187.375,252.8125 L 185.25,256 L 187.375,256.84375 L 188.03125,258.34375 L 187.15625,260.65625 L 186.96875,261.71875 L 185.6875,263.84375 L 185.6875,265.34375 L 186.53125,265.5625 L 186.53125,270.03125 L 188.03125,271.09375 L 187.375,272.5625 L 187.59375,273.84375 L 189.28125,275.75 L 190.15625,274.46875 L 190.15625,273.40625 L 191.84375,272.5625 L 193.125,273.40625 L 193.125,276.59375 L 191.84375,278.09375 L 190.78125,280.625 L 192.25,282.96875 L 195.25,283.8125 L 194.59375,285.75 L 191.8125,286.21875 L 194.375,289.34375 L 197.78125,289.125 L 200.75,288.0625 L 203.75,289.78125 L 204.8125,288.9375 L 204.59375,286.15625 L 206.28125,284.875 L 207.78125,287.4375 L 209.03125,288.71875 L 212.65625,287.21875 L 214.15625,285.53125 L 217.53125,285.53125 L 219.28125,286.40625 L 219.40625,282.71875 L 218.0625,281.15625 L 219.625,280 L 222.15625,277.0625 L 226.4375,276.875 L 226.4375,274.53125 L 228.59375,272.75 L 233.875,271.78125 L 234.25,268.84375 L 232.125,267.6875 L 230.9375,263.59375 L 227.8125,263.1875 L 225.875,261.25 L 222.15625,258.3125 L 222.9375,255.96875 L 222.9375,252.25 L 219.40625,248.75 L 219.03125,246 L 215.6875,242.5 L 214.53125,237.8125 L 213.15625,237.21875 L 211.59375,235.0625 L 210.03125,236.03125 L 210.4375,238.1875 L 205.34375,239.375 L 199.5,239.375 L 199.6875,237.03125 L 199.6875,233.3125 L 195,231.9375 L 195,229.59375 L 191.28125,228.8125 L 190.5,225.6875 L 188.75,225.6875 z ", "name" : "Vienne"},
	"FR-87" : {"path": "M 239.53125,270.8125 L 237.78125,272.5625 L 232.875,272.1875 L 232.3125,272.0625 L 228.59375,272.75 L 226.4375,274.53125 L 226.4375,276.875 L 222.15625,277.0625 L 219.625,280 L 218.0625,281.15625 L 219.40625,282.71875 L 219.21875,288 L 218.25,289.75 L 219.8125,291.5 L 222.53125,291.71875 L 223.125,294.4375 L 223.3125,296.1875 L 219.8125,296.96875 L 218.0625,297.5625 L 218.4375,302.4375 L 216.09375,304 L 214.125,304.59375 L 213.15625,307.34375 L 211.59375,307.53125 L 210.9375,310.5 L 215.5,310.65625 L 216.5,312.59375 L 215.6875,314.75 L 217.46875,317.09375 L 218.8125,316.71875 L 220.1875,314.75 L 226.4375,315.34375 L 227.4375,319.25 L 231.71875,319.84375 L 232.6875,321.1875 L 229.75,322.5625 L 231.125,323.53125 L 235.25,324.125 L 235.5625,324.90625 L 236.65625,322.6875 L 239,323.5625 L 241.5625,320.375 L 243.03125,320.5625 L 244.3125,318.4375 L 248.125,318.875 L 249.625,317.375 L 251.53125,317.375 L 253.03125,314.625 L 255.34375,314.40625 L 256.84375,311.875 L 258.96875,312.5 L 260.46875,312.5 L 261.46875,310.78125 L 260.46875,310.15625 L 260.03125,307.625 L 261.53125,307.625 L 261.53125,306.5625 L 258.96875,304.84375 L 256.21875,303.59375 L 256.625,301.03125 L 255.78125,301.03125 L 254.71875,302.53125 L 251.3125,302.71875 L 249.40625,302.53125 L 249.40625,300.59375 L 251.75,298.6875 L 250.25,296.78125 L 246.65625,297.84375 L 247.28125,289.78125 L 245.59375,288.0625 L 243.875,283.8125 L 241.34375,283.1875 L 240.90625,280.84375 L 243.25,276.1875 L 243.1875,273.3125 L 242.65625,273.9375 L 239.53125,270.8125 z ", "name" : "Haute Vienne"},
	"FR-88" : {"path": "M 459,145.9375 L 457,146.375 L 453.9375,147.53125 L 452.40625,149.4375 L 450.6875,150.59375 L 447.40625,152.125 L 446.46875,151.9375 L 444.15625,151.34375 L 441.875,151.15625 L 441.09375,148.65625 L 439.5625,149.25 L 439.375,151.9375 L 438.21875,150.78125 L 436.125,152.3125 L 434.03125,153.0625 L 431.53125,152.875 L 429.8125,153.46875 L 427.90625,152.3125 L 426.75,153.25 L 423.875,153.25 L 422.53125,155.75 L 416.21875,156.125 L 414.875,154.40625 L 412.78125,154.03125 L 412.96875,153.0625 L 414.3125,152.125 L 413.15625,151.71875 L 412.96875,148.65625 L 410.09375,148.46875 L 408.40625,149 L 407.21875,150.59375 L 404.15625,151.53125 L 404.15625,150.40625 L 403.21875,150.40625 L 403.21875,151.71875 L 399.375,152.5 L 399.375,154.21875 L 395.9375,154.65625 L 394.625,155.96875 L 395.96875,157.90625 L 399.09375,158.125 L 401.84375,161.8125 L 404.1875,161.8125 L 404.75,164.375 L 407.3125,164.75 L 407.875,166.5 L 406.125,167.6875 L 404.96875,172.96875 L 410.4375,175.6875 L 410.4375,179.78125 L 412.5625,179 L 414.34375,180.40625 L 415.6875,179.59375 L 414.9375,178.4375 L 415.90625,177.84375 L 417.25,179.40625 L 419.21875,178.03125 L 419.8125,176.09375 L 423.5,175.5 L 424.5,176.28125 L 424.3125,178.4375 L 426.84375,180.375 L 428.40625,180.1875 L 430.15625,178.8125 L 434.25,178.8125 L 437.1875,182.125 L 438.15625,182.125 L 439.71875,181.15625 L 439.9375,180 L 441.5,179.21875 L 443.25,180.375 L 445,182.34375 L 451.15625,185.59375 L 453.59375,183.5 L 453.78125,175.875 L 457.125,172.96875 L 459.0625,168.46875 L 458.46875,165.53125 L 460.8125,160.84375 L 462.96875,155.96875 L 459.25,155 L 458.46875,149.71875 L 459.25,146.1875 L 459,145.9375 z ", "name" : "Vosges"},
	"FR-89" : {"path": "M 318.4375,157.34375 L 316.6875,158.6875 L 309.0625,158.3125 L 305.5625,160.0625 L 304.1875,163 L 305.75,164.75 L 303.40625,167.5 L 301.625,169.625 L 305.15625,172.96875 L 306.125,176.09375 L 308.6875,178.8125 L 308.6875,182.34375 L 303.59375,186.625 L 305.34375,188.59375 L 304.96875,191.5 L 302.21875,193.46875 L 298.3125,193.46875 L 298.90625,195.625 L 301.4375,199.125 L 302.03125,202.25 L 302.625,204.40625 L 301.46875,204.75 L 303.9375,205.3125 L 305.78125,205.3125 L 306.75,203.78125 L 308,203.78125 L 309.40625,205.03125 L 309.125,206.59375 L 310.40625,207.4375 L 312.21875,207.4375 L 314.75,209.125 L 315.875,208.5625 L 317,209.53125 L 318.125,209.25 L 320.0625,208 L 321.90625,208.5625 L 323.15625,208.28125 L 323.15625,204.78125 L 323.84375,204.90625 L 324.28125,206.71875 L 326.53125,208.125 L 326.53125,210.25 L 329.75,210.375 L 333.96875,214.3125 L 336.625,214.4375 L 336.46875,213.1875 L 337.59375,211.5 L 338.59375,212.75 L 337.75,214.15625 L 338.15625,215.4375 L 339.6875,214.4375 L 341.53125,214.4375 L 341.375,217.25 L 343.0625,218.375 L 344.34375,217.8125 L 347.46875,215.6875 L 347.28125,215.28125 L 345.4375,214.15625 L 345.3125,212.1875 L 347.28125,211.21875 L 348.125,210.09375 L 347.5625,209.125 L 347.5625,206.875 L 349.09375,204.625 L 351.34375,199.84375 L 351.75,197.75 L 353.15625,197.1875 L 353.3125,196.78125 L 352.59375,196.21875 L 352.59375,194.53125 L 354.84375,192.84375 L 355.40625,190.03125 L 354.4375,188.375 L 352.875,188.375 L 352.46875,187.9375 L 352.46875,185.5625 L 354.4375,184.15625 L 354.28125,182.75 L 354,181.34375 L 353,183.5 L 351.625,183.3125 L 350.46875,181.15625 L 346.5625,183.125 L 338.75,182.71875 L 337.78125,180.5625 L 335.625,177.65625 L 335.25,174.125 L 332.125,170.40625 L 330.15625,171.78125 L 326.625,169.0625 L 327.21875,163.78125 L 322.15625,158.5 L 319.8125,158.5 L 318.4375,157.34375 z ", "name" : "Yonne"},
	"FR-90" : {"path": "M 451.4375,186.03125 L 449.625,186.96875 L 448.09375,188.09375 L 448.09375,190.59375 L 448.9375,193.5625 L 448.9375,195.5 L 448.46875,198.625 L 447.40625,199.71875 L 459.4375,205.15625 L 460.1875,204.28125 L 462.78125,203.875 L 461.8125,199.71875 L 461.21875,197.5625 L 458.46875,197.96875 L 458.09375,195.625 L 459.0625,193.84375 L 459.25,191.5 L 458.6875,190.15625 L 455.15625,187.40625 L 452.03125,187.21875 L 451.4375,186.03125 z ", "name" : "Territoire de Belfort"},
	"FR-91" : {"path": "M 274.21875,136.40625 L 272.46875,137.1875 L 270.5625,137.9375 L 270.1875,140.0625 L 267.3125,141.40625 L 266.9375,143.5 L 268.28125,145.8125 L 266.34375,148.46875 L 263.5,148.46875 L 264.625,150.1875 L 263.28125,151.71875 L 262.8125,154.8125 L 263.75,155 L 264.125,157.53125 L 264.53125,158.125 L 264.9375,163.375 L 271.1875,162.8125 L 273.71875,160.46875 L 275.875,162.21875 L 281.125,162.59375 L 281.875,163.71875 L 281.875,159.78125 L 286.25,156.90625 L 284.9375,155.1875 L 285.5,150 L 286.25,148.875 L 285.3125,143.6875 L 287.03125,142.34375 L 286.6875,139.90625 L 284.53125,138.90625 L 280.90625,138.90625 L 278.8125,137.75 L 277.28125,138.53125 L 274.21875,136.40625 z ", "name" : "Essonne"},
	"FR-92" : {"path": "M 277.3125,125.78125 L 273.8125,127.65625 L 273.4375,127.71875 L 271.71875,131.46875 L 272.8125,134.4375 L 274.5625,136.40625 L 274.5625,136.625 L 277.28125,138.53125 L 277.9375,138.1875 L 277.4375,137.25 L 277.9375,135.78125 L 277.625,135.25 L 277.96875,134.03125 L 277.90625,134.03125 L 276,133.0625 L 274.4375,132.625 L 274.21875,131.9375 L 274.1875,131.34375 L 275.125,130.28125 L 276.15625,130.21875 L 276.625,129.59375 L 277.75,129.09375 L 277.375,128.1875 L 277.90625,128.09375 L 278.3125,127.21875 L 277.90625,126.59375 L 277.46875,126.5 L 277.3125,125.78125 z ", "name" : "Hauts de Seine"},
	"FR-93" : {"path": "M 287.28125,122.8125 L 285.4375,124.125 L 282.5625,125.4375 L 277.3125,125.78125 L 277.46875,126.5 L 277.90625,126.59375 L 278.3125,127.21875 L 277.90625,128.09375 L 277.375,128.1875 L 277.75,129.09375 L 280.28125,129.0625 L 281.09375,130.3125 L 281.25,132.0625 L 282.125,131.9375 L 282.9375,131.28125 L 284.15625,131.34375 L 285.6875,132.21875 L 286.5625,133.1875 L 286.96875,133.375 L 287.21875,133.84375 L 288.1875,134.09375 L 288.1875,131.25 L 287.03125,124.375 L 287.28125,122.8125 z ", "name" : "Seine Saint-Denis"},
	"FR-94" : {"path": "M 282.9375,131.28125 L 282.125,131.9375 L 281.3125,132.0625 L 281.25,132.5 L 281.09375,132.90625 L 281.5,132.90625 L 281.71875,132.71875 L 281.625,132.40625 L 282.875,132.34375 L 283.1875,132.46875 L 283.1875,133.125 L 282.875,133.78125 L 281.0625,133.53125 L 280.78125,133.28125 L 279.9375,133.875 L 279.125,134.09375 L 277.96875,134.03125 L 277.625,135.25 L 277.9375,135.78125 L 277.4375,137.25 L 277.9375,138.1875 L 278.8125,137.75 L 280.90625,138.90625 L 284.53125,138.90625 L 286.6875,139.90625 L 286.65625,139.6875 L 288.1875,135.84375 L 288.1875,134.09375 L 287.21875,133.84375 L 286.96875,133.375 L 286.5625,133.1875 L 285.6875,132.21875 L 284.15625,131.34375 L 282.9375,131.28125 z ", "name" : "Val de Marne"},
	"FR-95" : {"path": "M 255.5625,109.6875 L 254,111.625 L 252.8125,115.9375 L 251.5,118.15625 L 256.25,120.28125 L 259.875,119.625 L 264.375,122.5 L 269.1875,122.71875 L 272.59375,124.78125 L 273.46875,127.65625 L 273.4375,127.71875 L 273.8125,127.65625 L 277.3125,125.78125 L 282.5625,125.4375 L 285.4375,124.125 L 287.28125,122.8125 L 287.875,118.96875 L 286.59375,117.6875 L 282.3125,115.15625 L 278.1875,113 L 276.0625,113.96875 L 273.71875,114.5625 L 272.15625,113.375 L 269.03125,111.4375 L 266.5,113.375 L 262.78125,113.78125 L 257.5,113.375 L 256.3125,111.4375 L 255.5625,109.6875 z ", "name" : "Val d'Oise"}
}});
