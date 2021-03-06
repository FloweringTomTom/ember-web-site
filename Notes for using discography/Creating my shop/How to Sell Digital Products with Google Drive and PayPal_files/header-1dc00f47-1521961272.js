/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

;/**!
 * Flickity PACKAGED v2.0.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * //flickity.metafizzy.co
 * Copyright 2016 Metafizzy
 **/
!(function(t, e) {
  'use strict';
  'function' == typeof define && define.amd
    ? define('jquery-bridget/jquery-bridget', ['jquery'], function(i) {
        e(t, i);
      })
    : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('jquery')))
      : (t.jQueryBridget = e(t, t.jQuery));
})(window, function(t, e) {
  'use strict';
  function i(i, o, a) {
    function h(t, e, n) {
      var s,
        o = '$().' + i + '("' + e + '")';
      return (
        t.each(function(t, h) {
          var l = a.data(h, i);
          if (!l)
            return void r(
              i + ' not initialized. Cannot call methods, i.e. ' + o
            );
          var c = l[e];
          if (!c || '_' == e.charAt(0))
            return void r(o + ' is not a valid method');
          var d = c.apply(l, n);
          s = void 0 === s ? d : s;
        }),
        void 0 !== s ? s : t
      );
    }
    function l(t, e) {
      t.each(function(t, n) {
        var s = a.data(n, i);
        s ? (s.option(e), s._init()) : ((s = new o(n, e)), a.data(n, i, s));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (o.prototype.option ||
          (o.prototype.option = function(t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function(t) {
          if ('string' == typeof t) {
            var e = s.call(arguments, 1);
            return h(this, t, e);
          }
          return l(this, t), this;
        }),
        n(a));
  }
  function n(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var s = Array.prototype.slice,
    o = t.console,
    r =
      'undefined' == typeof o
        ? function() {}
        : function(t) {
            o.error(t);
          };
  return n(e || t.jQuery), i;
}),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('ev-emitter/ev-emitter', e)
      : 'object' == typeof module && module.exports
        ? (module.exports = e())
        : (t.EvEmitter = e());
  })('undefined' != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function(t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return n.indexOf(e) == -1 && n.push(e), this;
        }
      }),
      (e.once = function(t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            n = (i[t] = i[t] || {});
          return (n[e] = !0), this;
        }
      }),
      (e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return n != -1 && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = 0,
            s = i[n];
          e = e || [];
          for (var o = this._onceEvents && this._onceEvents[t]; s; ) {
            var r = o && o[s];
            r && (this.off(t, s), delete o[s]),
              s.apply(this, e),
              (n += r ? 0 : 1),
              (s = i[n]);
          }
          return this;
        }
      }),
      t
    );
  }),
  (function(t, e) {
    'use strict';
    'function' == typeof define && define.amd
      ? define('get-size/get-size', [], function() {
          return e();
        })
      : 'object' == typeof module && module.exports
        ? (module.exports = e())
        : (t.getSize = e());
  })(window, function() {
    'use strict';
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf('%') == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
          },
          e = 0;
        e < l;
        e++
      ) {
        var i = h[e];
        t[i] = 0;
      }
      return t;
    }
    function n(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            'Style returned ' +
              e +
              '. Are you running this code in a hidden iframe on Firefox? See //bit.ly/getsizebug1'
          ),
        e
      );
    }
    function s() {
      if (!c) {
        c = !0;
        var e = document.createElement('div');
        (e.style.width = '200px'),
          (e.style.padding = '1px 2px 3px 4px'),
          (e.style.borderStyle = 'solid'),
          (e.style.borderWidth = '1px 2px 3px 4px'),
          (e.style.boxSizing = 'border-box');
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var s = n(e);
        (o.isBoxSizeOuter = r = 200 == t(s.width)), i.removeChild(e);
      }
    }
    function o(e) {
      if (
        (s(),
        'string' == typeof e && (e = document.querySelector(e)),
        e && 'object' == typeof e && e.nodeType)
      ) {
        var o = n(e);
        if ('none' == o.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var c = (a.isBorderBox = 'border-box' == o.boxSizing), d = 0;
          d < l;
          d++
        ) {
          var u = h[d],
            f = o[u],
            p = parseFloat(f);
          a[u] = isNaN(p) ? 0 : p;
        }
        var v = a.paddingLeft + a.paddingRight,
          g = a.paddingTop + a.paddingBottom,
          m = a.marginLeft + a.marginRight,
          y = a.marginTop + a.marginBottom,
          S = a.borderLeftWidth + a.borderRightWidth,
          E = a.borderTopWidth + a.borderBottomWidth,
          b = c && r,
          x = t(o.width);
        x !== !1 && (a.width = x + (b ? 0 : v + S));
        var C = t(o.height);
        return (
          C !== !1 && (a.height = C + (b ? 0 : g + E)),
          (a.innerWidth = a.width - (v + S)),
          (a.innerHeight = a.height - (g + E)),
          (a.outerWidth = a.width + m),
          (a.outerHeight = a.height + y),
          a
        );
      }
    }
    var r,
      a =
        'undefined' == typeof console
          ? e
          : function(t) {
              console.error(t);
            },
      h = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
      ],
      l = h.length,
      c = !1;
    return o;
  }),
  (function(t, e) {
    'use strict';
    'function' == typeof define && define.amd
      ? define('desandro-matches-selector/matches-selector', e)
      : 'object' == typeof module && module.exports
        ? (module.exports = e())
        : (t.matchesSelector = e());
  })(window, function() {
    'use strict';
    var t = (function() {
      var t = Element.prototype;
      if (t.matches) return 'matches';
      if (t.matchesSelector) return 'matchesSelector';
      for (var e = ['webkit', 'moz', 'ms', 'o'], i = 0; i < e.length; i++) {
        var n = e[i],
          s = n + 'MatchesSelector';
        if (t[s]) return s;
      }
    })();
    return function(e, i) {
      return e[t](i);
    };
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define(
          'fizzy-ui-utils/utils',
          ['desandro-matches-selector/matches-selector'],
          function(i) {
            return e(t, i);
          }
        )
      : 'object' == typeof module && module.exports
        ? (module.exports = e(t, require('desandro-matches-selector')))
        : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function(t, e) {
    var i = {};
    (i.extend = function(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function(t, e) {
        return (t % e + e) % e;
      }),
      (i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && 'number' == typeof t.length)
          for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e;
      }),
      (i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function(t, i) {
        for (; t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function(t) {
        return 'string' == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function(t) {
        var e = 'on' + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var s = [];
        return (
          t.forEach(function(t) {
            if (t instanceof HTMLElement) {
              if (!n) return void s.push(t);
              e(t, n) && s.push(t);
              for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++)
                s.push(i[o]);
            }
          }),
          s
        );
      }),
      (i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e],
          s = e + 'Timeout';
        t.prototype[e] = function() {
          var t = this[s];
          t && clearTimeout(t);
          var e = arguments,
            o = this;
          this[s] = setTimeout(function() {
            n.apply(o, e), delete o[s];
          }, i || 100);
        };
      }),
      (i.docReady = function(t) {
        var e = document.readyState;
        'complete' == e || 'interactive' == e
          ? t()
          : document.addEventListener('DOMContentLoaded', t);
      }),
      (i.toDashed = function(t) {
        return t
          .replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + '-' + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function(e, s) {
        i.docReady(function() {
          var o = i.toDashed(s),
            r = 'data-' + o,
            a = document.querySelectorAll('[' + r + ']'),
            h = document.querySelectorAll('.js-' + o),
            l = i.makeArray(a).concat(i.makeArray(h)),
            c = r + '-options',
            d = t.jQuery;
          l.forEach(function(t) {
            var i,
              o = t.getAttribute(r) || t.getAttribute(c);
            try {
              i = o && JSON.parse(o);
            } catch (a) {
              return void (
                n &&
                n.error('Error parsing ' + r + ' on ' + t.className + ': ' + a)
              );
            }
            var h = new e(t, i);
            d && d.data(t, s, h);
          });
        });
      }),
      i
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('flickity/js/cell', ['get-size/get-size'], function(i) {
          return e(t, i);
        })
      : 'object' == typeof module && module.exports
        ? (module.exports = e(t, require('get-size')))
        : ((t.Flickity = t.Flickity || {}),
          (t.Flickity.Cell = e(t, t.getSize)));
  })(window, function(t, e) {
    function i(t, e) {
      (this.element = t), (this.parent = e), this.create();
    }
    var n = i.prototype;
    return (
      (n.create = function() {
        (this.element.style.position = 'absolute'),
          (this.x = 0),
          (this.shift = 0);
      }),
      (n.destroy = function() {
        this.element.style.position = '';
        var t = this.parent.originSide;
        this.element.style[t] = '';
      }),
      (n.getSize = function() {
        this.size = e(this.element);
      }),
      (n.setPosition = function(t) {
        (this.x = t), this.updateTarget(), this.renderPosition(t);
      }),
      (n.updateTarget = n.setDefaultTarget = function() {
        var t = 'left' == this.parent.originSide ? 'marginLeft' : 'marginRight';
        this.target =
          this.x + this.size[t] + this.size.width * this.parent.cellAlign;
      }),
      (n.renderPosition = function(t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t);
      }),
      (n.wrapShift = function(t) {
        (this.shift = t),
          this.renderPosition(this.x + this.parent.slideableWidth * t);
      }),
      (n.remove = function() {
        this.element.parentNode.removeChild(this.element);
      }),
      i
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('flickity/js/slide', e)
      : 'object' == typeof module && module.exports
        ? (module.exports = e())
        : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = e()));
  })(window, function() {
    'use strict';
    function t(t) {
      (this.parent = t),
        (this.isOriginLeft = 'left' == t.originSide),
        (this.cells = []),
        (this.outerWidth = 0),
        (this.height = 0);
    }
    var e = t.prototype;
    return (
      (e.addCell = function(t) {
        if (
          (this.cells.push(t),
          (this.outerWidth += t.size.outerWidth),
          (this.height = Math.max(t.size.outerHeight, this.height)),
          1 == this.cells.length)
        ) {
          this.x = t.x;
          var e = this.isOriginLeft ? 'marginLeft' : 'marginRight';
          this.firstMargin = t.size[e];
        }
      }),
      (e.updateTarget = function() {
        var t = this.isOriginLeft ? 'marginRight' : 'marginLeft',
          e = this.getLastCell(),
          i = e ? e.size[t] : 0,
          n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
      }),
      (e.getLastCell = function() {
        return this.cells[this.cells.length - 1];
      }),
      (e.select = function() {
        this.changeSelectedClass('add');
      }),
      (e.unselect = function() {
        this.changeSelectedClass('remove');
      }),
      (e.changeSelectedClass = function(t) {
        this.cells.forEach(function(e) {
          e.element.classList[t]('is-selected');
        });
      }),
      (e.getCellElements = function() {
        return this.cells.map(function(t) {
          return t.element;
        });
      }),
      t
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('flickity/js/animate', ['fizzy-ui-utils/utils'], function(i) {
          return e(t, i);
        })
      : 'object' == typeof module && module.exports
        ? (module.exports = e(t, require('fizzy-ui-utils')))
        : ((t.Flickity = t.Flickity || {}),
          (t.Flickity.animatePrototype = e(t, t.fizzyUIUtils)));
  })(window, function(t, e) {
    var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
      n = 0;
    i ||
      (i = function(t) {
        var e = new Date().getTime(),
          i = Math.max(0, 16 - (e - n)),
          s = setTimeout(t, i);
        return (n = e + i), s;
      });
    var s = {};
    (s.startAnimation = function() {
      this.isAnimating ||
        ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
    }),
      (s.animate = function() {
        this.applyDragForce(), this.applySelectedAttraction();
        var t = this.x;
        if (
          (this.integratePhysics(),
          this.positionSlider(),
          this.settle(t),
          this.isAnimating)
        ) {
          var e = this;
          i(function() {
            e.animate();
          });
        }
      });
    var o = (function() {
      var t = document.documentElement.style;
      return 'string' == typeof t.transform ? 'transform' : 'WebkitTransform';
    })();
    return (
      (s.positionSlider = function() {
        var t = this.x;
        this.options.wrapAround &&
          this.cells.length > 1 &&
          ((t = e.modulo(t, this.slideableWidth)),
          (t -= this.slideableWidth),
          this.shiftWrapCells(t)),
          (t += this.cursorPosition),
          (t = this.options.rightToLeft && o ? -t : t);
        var i = this.getPositionValue(t);
        this.slider.style[o] = this.isAnimating
          ? 'translate3d(' + i + ',0,0)'
          : 'translateX(' + i + ')';
        var n = this.slides[0];
        if (n) {
          var s = -this.x - n.target,
            r = s / this.slidesWidth;
          this.dispatchEvent('scroll', null, [r, s]);
        }
      }),
      (s.positionSliderAtSelected = function() {
        this.cells.length &&
          ((this.x = -this.selectedSlide.target), this.positionSlider());
      }),
      (s.getPositionValue = function(t) {
        return this.options.percentPosition
          ? 0.01 * Math.round(t / this.size.innerWidth * 1e4) + '%'
          : Math.round(t) + 'px';
      }),
      (s.settle = function(t) {
        this.isPointerDown ||
          Math.round(100 * this.x) != Math.round(100 * t) ||
          this.restingFrames++,
          this.restingFrames > 2 &&
            ((this.isAnimating = !1),
            delete this.isFreeScrolling,
            this.positionSlider(),
            this.dispatchEvent('settle'));
      }),
      (s.shiftWrapCells = function(t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i =
          this.size.innerWidth -
          (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1);
      }),
      (s._shiftCells = function(t, e, i) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            o = e > 0 ? i : 0;
          s.wrapShift(o), (e -= s.size.outerWidth);
        }
      }),
      (s._unshiftCells = function(t) {
        if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
      }),
      (s.integratePhysics = function() {
        (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
      }),
      (s.applyForce = function(t) {
        this.velocity += t;
      }),
      (s.getFrictionFactor = function() {
        return (
          1 -
          this.options[this.isFreeScrolling ? 'freeScrollFriction' : 'friction']
        );
      }),
      (s.getRestingPosition = function() {
        return this.x + this.velocity / (1 - this.getFrictionFactor());
      }),
      (s.applyDragForce = function() {
        if (this.isPointerDown) {
          var t = this.dragX - this.x,
            e = t - this.velocity;
          this.applyForce(e);
        }
      }),
      (s.applySelectedAttraction = function() {
        if (!this.isPointerDown && !this.isFreeScrolling && this.cells.length) {
          var t = this.selectedSlide.target * -1 - this.x,
            e = t * this.options.selectedAttraction;
          this.applyForce(e);
        }
      }),
      s
    );
  }),
  (function(t, e) {
    if ('function' == typeof define && define.amd)
      define(
        'flickity/js/flickity',
        [
          'ev-emitter/ev-emitter',
          'get-size/get-size',
          'fizzy-ui-utils/utils',
          './cell',
          './slide',
          './animate'
        ],
        function(i, n, s, o, r, a) {
          return e(t, i, n, s, o, r, a);
        }
      );
    else if ('object' == typeof module && module.exports)
      module.exports = e(
        t,
        require('ev-emitter'),
        require('get-size'),
        require('fizzy-ui-utils'),
        require('./cell'),
        require('./slide'),
        require('./animate')
      );
    else {
      var i = t.Flickity;
      t.Flickity = e(
        t,
        t.EvEmitter,
        t.getSize,
        t.fizzyUIUtils,
        i.Cell,
        i.Slide,
        i.animatePrototype
      );
    }
  })(window, function(t, e, i, n, s, o, r) {
    function a(t, e) {
      for (t = n.makeArray(t); t.length; ) e.appendChild(t.shift());
    }
    function h(t, e) {
      var i = n.getQueryElement(t);
      return i
        ? ((this.element = i),
          l && (this.$element = l(this.element)),
          (this.options = n.extend({}, this.constructor.defaults)),
          this.option(e),
          void this._create())
        : void (d && d.error('Bad element for Flickity: ' + (i || t)));
    }
    var l = t.jQuery,
      c = t.getComputedStyle,
      d = t.console,
      u = 0,
      f = {};
    (h.defaults = {
      accessibility: !0,
      cellAlign: 'center',
      freeScrollFriction: 0.075,
      friction: 0.28,
      namespaceJQueryEvents: !0,
      percentPosition: !0,
      resize: !0,
      selectedAttraction: 0.025,
      setGallerySize: !0
    }),
      (h.createMethods = []);
    var p = h.prototype;
    n.extend(p, e.prototype),
      (p._create = function() {
        var e = (this.guid = ++u);
        (this.element.flickityGUID = e),
          (f[e] = this),
          (this.selectedIndex = 0),
          (this.restingFrames = 0),
          (this.x = 0),
          (this.velocity = 0),
          (this.originSide = this.options.rightToLeft ? 'right' : 'left'),
          (this.viewport = document.createElement('div')),
          (this.viewport.className = 'flickity-viewport'),
          this._createSlider(),
          (this.options.resize || this.options.watchCSS) &&
            t.addEventListener('resize', this),
          h.createMethods.forEach(function(t) {
            this[t]();
          }, this),
          this.options.watchCSS ? this.watchCSS() : this.activate();
      }),
      (p.option = function(t) {
        n.extend(this.options, t);
      }),
      (p.activate = function() {
        if (!this.isActive) {
          (this.isActive = !0),
            this.element.classList.add('flickity-enabled'),
            this.options.rightToLeft &&
              this.element.classList.add('flickity-rtl'),
            this.getSize();
          var t = this._filterFindCellElements(this.element.children);
          a(t, this.slider),
            this.viewport.appendChild(this.slider),
            this.element.appendChild(this.viewport),
            this.reloadCells(),
            this.options.accessibility &&
              ((this.element.tabIndex = 0),
              this.element.addEventListener('keydown', this)),
            this.emitEvent('activate');
          var e,
            i = this.options.initialIndex;
          (e = this.isInitActivated
            ? this.selectedIndex
            : void 0 !== i && this.cells[i] ? i : 0),
            this.select(e, !1, !0),
            (this.isInitActivated = !0);
        }
      }),
      (p._createSlider = function() {
        var t = document.createElement('div');
        (t.className = 'flickity-slider'),
          (t.style[this.originSide] = 0),
          (this.slider = t);
      }),
      (p._filterFindCellElements = function(t) {
        return n.filterFindElements(t, this.options.cellSelector);
      }),
      (p.reloadCells = function() {
        (this.cells = this._makeCells(this.slider.children)),
          this.positionCells(),
          this._getWrapShiftCells(),
          this.setGallerySize();
      }),
      (p._makeCells = function(t) {
        var e = this._filterFindCellElements(t),
          i = e.map(function(t) {
            return new s(t, this);
          }, this);
        return i;
      }),
      (p.getLastCell = function() {
        return this.cells[this.cells.length - 1];
      }),
      (p.getLastSlide = function() {
        return this.slides[this.slides.length - 1];
      }),
      (p.positionCells = function() {
        this._sizeCells(this.cells), this._positionCells(0);
      }),
      (p._positionCells = function(t) {
        (t = t || 0), (this.maxCellHeight = t ? this.maxCellHeight || 0 : 0);
        var e = 0;
        if (t > 0) {
          var i = this.cells[t - 1];
          e = i.x + i.size.outerWidth;
        }
        for (var n = this.cells.length, s = t; s < n; s++) {
          var o = this.cells[s];
          o.setPosition(e),
            (e += o.size.outerWidth),
            (this.maxCellHeight = Math.max(
              o.size.outerHeight,
              this.maxCellHeight
            ));
        }
        (this.slideableWidth = e),
          this.updateSlides(),
          this._containSlides(),
          (this.slidesWidth = n
            ? this.getLastSlide().target - this.slides[0].target
            : 0);
      }),
      (p._sizeCells = function(t) {
        t.forEach(function(t) {
          t.getSize();
        });
      }),
      (p.updateSlides = function() {
        if (((this.slides = []), this.cells.length)) {
          var t = new o(this);
          this.slides.push(t);
          var e = 'left' == this.originSide,
            i = e ? 'marginRight' : 'marginLeft',
            n = this._getCanCellFit();
          this.cells.forEach(function(e, s) {
            if (!t.cells.length) return void t.addCell(e);
            var r =
              t.outerWidth - t.firstMargin + (e.size.outerWidth - e.size[i]);
            n.call(this, s, r)
              ? t.addCell(e)
              : (t.updateTarget(),
                (t = new o(this)),
                this.slides.push(t),
                t.addCell(e));
          }, this),
            t.updateTarget(),
            this.updateSelectedSlide();
        }
      }),
      (p._getCanCellFit = function() {
        var t = this.options.groupCells;
        if (!t)
          return function() {
            return !1;
          };
        if ('number' == typeof t) {
          var e = parseInt(t, 10);
          return function(t) {
            return t % e !== 0;
          };
        }
        var i = 'string' == typeof t && t.match(/^(\d+)%$/),
          n = i ? parseInt(i[1], 10) / 100 : 1;
        return function(t, e) {
          return e <= (this.size.innerWidth + 1) * n;
        };
      }),
      (p._init = p.reposition = function() {
        this.positionCells(), this.positionSliderAtSelected();
      }),
      (p.getSize = function() {
        (this.size = i(this.element)),
          this.setCellAlign(),
          (this.cursorPosition = this.size.innerWidth * this.cellAlign);
      });
    var v = {
      center: { left: 0.5, right: 0.5 },
      left: { left: 0, right: 1 },
      right: { right: 0, left: 1 }
    };
    return (
      (p.setCellAlign = function() {
        var t = v[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
      }),
      (p.setGallerySize = function() {
        if (this.options.setGallerySize) {
          var t =
            this.options.adaptiveHeight && this.selectedSlide
              ? this.selectedSlide.height
              : this.maxCellHeight;
          this.viewport.style.height = t + 'px';
        }
      }),
      (p._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
          this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
          var t = this.cursorPosition,
            e = this.cells.length - 1;
          (this.beforeShiftCells = this._getGapCells(t, e, -1)),
            (t = this.size.innerWidth - this.cursorPosition),
            (this.afterShiftCells = this._getGapCells(t, 0, 1));
        }
      }),
      (p._getGapCells = function(t, e, i) {
        for (var n = []; t > 0; ) {
          var s = this.cells[e];
          if (!s) break;
          n.push(s), (e += i), (t -= s.size.outerWidth);
        }
        return n;
      }),
      (p._containSlides = function() {
        if (
          this.options.contain &&
          !this.options.wrapAround &&
          this.cells.length
        ) {
          var t = this.options.rightToLeft,
            e = t ? 'marginRight' : 'marginLeft',
            i = t ? 'marginLeft' : 'marginRight',
            n = this.slideableWidth - this.getLastCell().size[i],
            s = n < this.size.innerWidth,
            o = this.cursorPosition + this.cells[0].size[e],
            r = n - this.size.innerWidth * (1 - this.cellAlign);
          this.slides.forEach(function(t) {
            s
              ? (t.target = n * this.cellAlign)
              : ((t.target = Math.max(t.target, o)),
                (t.target = Math.min(t.target, r)));
          }, this);
        }
      }),
      (p.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), l && this.$element)) {
          t += this.options.namespaceJQueryEvents ? '.flickity' : '';
          var s = t;
          if (e) {
            var o = l.Event(e);
            (o.type = t), (s = o);
          }
          this.$element.trigger(s, i);
        }
      }),
      (p.select = function(t, e, i) {
        this.isActive &&
          ((t = parseInt(t, 10)),
          this._wrapSelect(t),
          (this.options.wrapAround || e) &&
            (t = n.modulo(t, this.slides.length)),
          this.slides[t] &&
            ((this.selectedIndex = t),
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent('select'),
            this.dispatchEvent('cellSelect')));
      }),
      (p._wrapSelect = function(t) {
        var e = this.slides.length,
          i = this.options.wrapAround && e > 1;
        if (!i) return t;
        var s = n.modulo(t, e),
          o = Math.abs(s - this.selectedIndex),
          r = Math.abs(s + e - this.selectedIndex),
          a = Math.abs(s - e - this.selectedIndex);
        !this.isDragSelect && r < o
          ? (t += e)
          : !this.isDragSelect && a < o && (t -= e),
          t < 0
            ? (this.x -= this.slideableWidth)
            : t >= e && (this.x += this.slideableWidth);
      }),
      (p.previous = function(t) {
        this.select(this.selectedIndex - 1, t);
      }),
      (p.next = function(t) {
        this.select(this.selectedIndex + 1, t);
      }),
      (p.updateSelectedSlide = function() {
        var t = this.slides[this.selectedIndex];
        t &&
          (this.unselectSelectedSlide(),
          (this.selectedSlide = t),
          t.select(),
          (this.selectedCells = t.cells),
          (this.selectedElements = t.getCellElements()),
          (this.selectedCell = t.cells[0]),
          (this.selectedElement = this.selectedElements[0]));
      }),
      (p.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect();
      }),
      (p.selectCell = function(t, e, i) {
        var n;
        'number' == typeof t
          ? (n = this.cells[t])
          : ('string' == typeof t && (t = this.element.querySelector(t)),
            (n = this.getCell(t)));
        for (var s = 0; n && s < this.slides.length; s++) {
          var o = this.slides[s],
            r = o.cells.indexOf(n);
          if (r != -1) return void this.select(s, e, i);
        }
      }),
      (p.getCell = function(t) {
        for (var e = 0; e < this.cells.length; e++) {
          var i = this.cells[e];
          if (i.element == t) return i;
        }
      }),
      (p.getCells = function(t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function(t) {
            var i = this.getCell(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (p.getCellElements = function() {
        return this.cells.map(function(t) {
          return t.element;
        });
      }),
      (p.getParentCell = function(t) {
        var e = this.getCell(t);
        return e
          ? e
          : ((t = n.getParent(t, '.flickity-slider > *')), this.getCell(t));
      }),
      (p.getAdjacentCellElements = function(t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (1 + 2 * t >= i) return this.getCellElements();
        for (var s = [], o = e - t; o <= e + t; o++) {
          var r = this.options.wrapAround ? n.modulo(o, i) : o,
            a = this.slides[r];
          a && (s = s.concat(a.getCellElements()));
        }
        return s;
      }),
      (p.uiChange = function() {
        this.emitEvent('uiChange');
      }),
      (p.childUIPointerDown = function(t) {
        this.emitEvent('childUIPointerDown', [t]);
      }),
      (p.onresize = function() {
        this.watchCSS(), this.resize();
      }),
      n.debounceMethod(h, 'onresize', 150),
      (p.resize = function() {
        if (this.isActive) {
          this.getSize(),
            this.options.wrapAround &&
              (this.x = n.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent('resize');
          var t = this.selectedElements && this.selectedElements[0];
          this.selectCell(t, !1, !0);
        }
      }),
      (p.watchCSS = function() {
        var t = this.options.watchCSS;
        if (t) {
          var e = c(this.element, ':after').content;
          e.indexOf('flickity') != -1 ? this.activate() : this.deactivate();
        }
      }),
      (p.onkeydown = function(t) {
        if (
          this.options.accessibility &&
          (!document.activeElement || document.activeElement == this.element)
        )
          if (37 == t.keyCode) {
            var e = this.options.rightToLeft ? 'next' : 'previous';
            this.uiChange(), this[e]();
          } else if (39 == t.keyCode) {
            var i = this.options.rightToLeft ? 'previous' : 'next';
            this.uiChange(), this[i]();
          }
      }),
      (p.deactivate = function() {
        this.isActive &&
          (this.element.classList.remove('flickity-enabled'),
          this.element.classList.remove('flickity-rtl'),
          this.cells.forEach(function(t) {
            t.destroy();
          }),
          this.unselectSelectedSlide(),
          this.element.removeChild(this.viewport),
          a(this.slider.children, this.element),
          this.options.accessibility &&
            (this.element.removeAttribute('tabIndex'),
            this.element.removeEventListener('keydown', this)),
          (this.isActive = !1),
          this.emitEvent('deactivate'));
      }),
      (p.destroy = function() {
        this.deactivate(),
          t.removeEventListener('resize', this),
          this.emitEvent('destroy'),
          l && this.$element && l.removeData(this.element, 'flickity'),
          delete this.element.flickityGUID,
          delete f[this.guid];
      }),
      n.extend(p, r),
      (h.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.flickityGUID;
        return e && f[e];
      }),
      n.htmlInit(h, 'flickity'),
      l && l.bridget && l.bridget('flickity', h),
      (h.Cell = s),
      h
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('unipointer/unipointer', ['ev-emitter/ev-emitter'], function(i) {
          return e(t, i);
        })
      : 'object' == typeof module && module.exports
        ? (module.exports = e(t, require('ev-emitter')))
        : (t.Unipointer = e(t, t.EvEmitter));
  })(window, function(t, e) {
    function i() {}
    function n() {}
    var s = (n.prototype = Object.create(e.prototype));
    (s.bindStartEvent = function(t) {
      this._bindStartEvent(t, !0);
    }),
      (s.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1);
      }),
      (s._bindStartEvent = function(e, i) {
        i = void 0 === i || !!i;
        var n = i ? 'addEventListener' : 'removeEventListener';
        t.navigator.pointerEnabled
          ? e[n]('pointerdown', this)
          : t.navigator.msPointerEnabled
            ? e[n]('MSPointerDown', this)
            : (e[n]('mousedown', this), e[n]('touchstart', this));
      }),
      (s.handleEvent = function(t) {
        var e = 'on' + t.type;
        this[e] && this[e](t);
      }),
      (s.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e];
          if (i.identifier == this.pointerIdentifier) return i;
        }
      }),
      (s.onmousedown = function(t) {
        var e = t.button;
        (e && 0 !== e && 1 !== e) || this._pointerDown(t, t);
      }),
      (s.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0]);
      }),
      (s.onMSPointerDown = s.onpointerdown = function(t) {
        this._pointerDown(t, t);
      }),
      (s._pointerDown = function(t, e) {
        this.isPointerDown ||
          ((this.isPointerDown = !0),
          (this.pointerIdentifier =
            void 0 !== e.pointerId ? e.pointerId : e.identifier),
          this.pointerDown(t, e));
      }),
      (s.pointerDown = function(t, e) {
        this._bindPostStartEvents(t), this.emitEvent('pointerDown', [t, e]);
      });
    var o = {
      mousedown: ['mousemove', 'mouseup'],
      touchstart: ['touchmove', 'touchend', 'touchcancel'],
      pointerdown: ['pointermove', 'pointerup', 'pointercancel'],
      MSPointerDown: ['MSPointerMove', 'MSPointerUp', 'MSPointerCancel']
    };
    return (
      (s._bindPostStartEvents = function(e) {
        if (e) {
          var i = o[e.type];
          i.forEach(function(e) {
            t.addEventListener(e, this);
          }, this),
            (this._boundPointerEvents = i);
        }
      }),
      (s._unbindPostStartEvents = function() {
        this._boundPointerEvents &&
          (this._boundPointerEvents.forEach(function(e) {
            t.removeEventListener(e, this);
          }, this),
          delete this._boundPointerEvents);
      }),
      (s.onmousemove = function(t) {
        this._pointerMove(t, t);
      }),
      (s.onMSPointerMove = s.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
      }),
      (s.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e);
      }),
      (s._pointerMove = function(t, e) {
        this.pointerMove(t, e);
      }),
      (s.pointerMove = function(t, e) {
        this.emitEvent('pointerMove', [t, e]);
      }),
      (s.onmouseup = function(t) {
        this._pointerUp(t, t);
      }),
      (s.onMSPointerUp = s.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
      }),
      (s.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e);
      }),
      (s._pointerUp = function(t, e) {
        this._pointerDone(), this.pointerUp(t, e);
      }),
      (s.pointerUp = function(t, e) {
        this.emitEvent('pointerUp', [t, e]);
      }),
      (s._pointerDone = function() {
        (this.isPointerDown = !1),
          delete this.pointerIdentifier,
          this._unbindPostStartEvents(),
          this.pointerDone();
      }),
      (s.pointerDone = i),
      (s.onMSPointerCancel = s.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
      }),
      (s.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e);
      }),
      (s._pointerCancel = function(t, e) {
        this._pointerDone(), this.pointerCancel(t, e);
      }),
      (s.pointerCancel = function(t, e) {
        this.emitEvent('pointerCancel', [t, e]);
      }),
      (n.getPointerPoint = function(t) {
        return { x: t.pageX, y: t.pageY };
      }),
      n
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('unidragger/unidragger', ['unipointer/unipointer'], function(i) {
          return e(t, i);
        })
      : 'object' == typeof module && module.exports
        ? (module.exports = e(t, require('unipointer')))
        : (t.Unidragger = e(t, t.Unipointer));
  })(window, function(t, e) {
    function i() {}
    function n() {}
    var s = (n.prototype = Object.create(e.prototype));
    (s.bindHandles = function() {
      this._bindHandles(!0);
    }),
      (s.unbindHandles = function() {
        this._bindHandles(!1);
      });
    var o = t.navigator;
    return (
      (s._bindHandles = function(t) {
        t = void 0 === t || !!t;
        var e;
        e = o.pointerEnabled
          ? function(e) {
              e.style.touchAction = t ? 'none' : '';
            }
          : o.msPointerEnabled
            ? function(e) {
                e.style.msTouchAction = t ? 'none' : '';
              }
            : i;
        for (
          var n = t ? 'addEventListener' : 'removeEventListener', s = 0;
          s < this.handles.length;
          s++
        ) {
          var r = this.handles[s];
          this._bindStartEvent(r, t), e(r), r[n]('click', this);
        }
      }),
      (s.pointerDown = function(t, e) {
        if ('INPUT' == t.target.nodeName && 'range' == t.target.type)
          return (this.isPointerDown = !1), void delete this.pointerIdentifier;
        this._dragPointerDown(t, e);
        var i = document.activeElement;
        i && i.blur && i.blur(),
          this._bindPostStartEvents(t),
          this.emitEvent('pointerDown', [t, e]);
      }),
      (s._dragPointerDown = function(t, i) {
        this.pointerDownPoint = e.getPointerPoint(i);
        var n = this.canPreventDefaultOnPointerDown(t, i);
        n && t.preventDefault();
      }),
      (s.canPreventDefaultOnPointerDown = function(t) {
        return 'SELECT' != t.target.nodeName;
      }),
      (s.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent('pointerMove', [t, e, i]), this._dragMove(t, e, i);
      }),
      (s._dragPointerMove = function(t, i) {
        var n = e.getPointerPoint(i),
          s = {
            x: n.x - this.pointerDownPoint.x,
            y: n.y - this.pointerDownPoint.y
          };
        return (
          !this.isDragging && this.hasDragStarted(s) && this._dragStart(t, i), s
        );
      }),
      (s.hasDragStarted = function(t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
      }),
      (s.pointerUp = function(t, e) {
        this.emitEvent('pointerUp', [t, e]), this._dragPointerUp(t, e);
      }),
      (s._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
      }),
      (s._dragStart = function(t, i) {
        (this.isDragging = !0),
          (this.dragStartPoint = e.getPointerPoint(i)),
          (this.isPreventingClicks = !0),
          this.dragStart(t, i);
      }),
      (s.dragStart = function(t, e) {
        this.emitEvent('dragStart', [t, e]);
      }),
      (s._dragMove = function(t, e, i) {
        this.isDragging && this.dragMove(t, e, i);
      }),
      (s.dragMove = function(t, e, i) {
        t.preventDefault(), this.emitEvent('dragMove', [t, e, i]);
      }),
      (s._dragEnd = function(t, e) {
        (this.isDragging = !1),
          setTimeout(
            function() {
              delete this.isPreventingClicks;
            }.bind(this)
          ),
          this.dragEnd(t, e);
      }),
      (s.dragEnd = function(t, e) {
        this.emitEvent('dragEnd', [t, e]);
      }),
      (s.onclick = function(t) {
        this.isPreventingClicks && t.preventDefault();
      }),
      (s._staticClick = function(t, e) {
        if (!this.isIgnoringMouseUp || 'mouseup' != t.type) {
          var i = t.target.nodeName;
          ('INPUT' != i && 'TEXTAREA' != i) || t.target.focus(),
            this.staticClick(t, e),
            'mouseup' != t.type &&
              ((this.isIgnoringMouseUp = !0),
              setTimeout(
                function() {
                  delete this.isIgnoringMouseUp;
                }.bind(this),
                400
              ));
        }
      }),
      (s.staticClick = function(t, e) {
        this.emitEvent('staticClick', [t, e]);
      }),
      (n.getPointerPoint = e.getPointerPoint),
      n
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/drag',
          ['./flickity', 'unidragger/unidragger', 'fizzy-ui-utils/utils'],
          function(i, n, s) {
            return e(t, i, n, s);
          }
        )
      : 'object' == typeof module && module.exports
        ? (module.exports = e(
            t,
            require('./flickity'),
            require('unidragger'),
            require('fizzy-ui-utils')
          ))
        : (t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils));
  })(window, function(t, e, i, n) {
    function s() {
      return { x: t.pageXOffset, y: t.pageYOffset };
    }
    n.extend(e.defaults, { draggable: !0, dragThreshold: 3 }),
      e.createMethods.push('_createDrag');
    var o = e.prototype;
    n.extend(o, i.prototype),
      (o._createDrag = function() {
        this.on('activate', this.bindDrag),
          this.on('uiChange', this._uiChangeDrag),
          this.on('childUIPointerDown', this._childUIPointerDownDrag),
          this.on('deactivate', this.unbindDrag);
      }),
      (o.bindDrag = function() {
        this.options.draggable &&
          !this.isDragBound &&
          (this.element.classList.add('is-draggable'),
          (this.handles = [this.viewport]),
          this.bindHandles(),
          (this.isDragBound = !0));
      }),
      (o.unbindDrag = function() {
        this.isDragBound &&
          (this.element.classList.remove('is-draggable'),
          this.unbindHandles(),
          delete this.isDragBound);
      }),
      (o._uiChangeDrag = function() {
        delete this.isFreeScrolling;
      }),
      (o._childUIPointerDownDrag = function(t) {
        t.preventDefault(), this.pointerDownFocus(t);
      });
    var r = { TEXTAREA: !0, INPUT: !0 },
      a = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0
      };
    o.pointerDown = function(e, i) {
      var n = r[e.target.nodeName] && !a[e.target.type];
      if (n)
        return (this.isPointerDown = !1), void delete this.pointerIdentifier;
      this._dragPointerDown(e, i);
      var o = document.activeElement;
      o && o.blur && o != this.element && o != document.body && o.blur(),
        this.pointerDownFocus(e),
        (this.dragX = this.x),
        this.viewport.classList.add('is-pointer-down'),
        this._bindPostStartEvents(e),
        (this.pointerDownScroll = s()),
        t.addEventListener('scroll', this),
        this.dispatchEvent('pointerDown', e, [i]);
    };
    var h = { touchstart: !0, MSPointerDown: !0 },
      l = { INPUT: !0, SELECT: !0 };
    return (
      (o.pointerDownFocus = function(e) {
        if (this.options.accessibility && !h[e.type] && !l[e.target.nodeName]) {
          var i = t.pageYOffset;
          this.element.focus(),
            t.pageYOffset != i && t.scrollTo(t.pageXOffset, i);
        }
      }),
      (o.canPreventDefaultOnPointerDown = function(t) {
        var e = 'touchstart' == t.type,
          i = t.target.nodeName;
        return !e && 'SELECT' != i;
      }),
      (o.hasDragStarted = function(t) {
        return Math.abs(t.x) > this.options.dragThreshold;
      }),
      (o.pointerUp = function(t, e) {
        delete this.isTouchScrolling,
          this.viewport.classList.remove('is-pointer-down'),
          this.dispatchEvent('pointerUp', t, [e]),
          this._dragPointerUp(t, e);
      }),
      (o.pointerDone = function() {
        t.removeEventListener('scroll', this), delete this.pointerDownScroll;
      }),
      (o.dragStart = function(t, e) {
        (this.dragStartPosition = this.x),
          this.startAnimation(),
          this.dispatchEvent('dragStart', t, [e]);
      }),
      (o.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent('pointerMove', t, [e, i]), this._dragMove(t, e, i);
      }),
      (o.dragMove = function(t, e, i) {
        t.preventDefault(), (this.previousDragX = this.dragX);
        var n = this.options.rightToLeft ? -1 : 1,
          s = this.dragStartPosition + i.x * n;
        if (!this.options.wrapAround && this.slides.length) {
          var o = Math.max(-this.slides[0].target, this.dragStartPosition);
          s = s > o ? 0.5 * (s + o) : s;
          var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
          s = s < r ? 0.5 * (s + r) : s;
        }
        (this.dragX = s),
          (this.dragMoveTime = new Date()),
          this.dispatchEvent('dragMove', t, [e, i]);
      }),
      (o.dragEnd = function(t, e) {
        this.options.freeScroll && (this.isFreeScrolling = !0);
        var i = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
          var n = this.getRestingPosition();
          this.isFreeScrolling =
            -n > this.slides[0].target && -n < this.getLastSlide().target;
        } else
          this.options.freeScroll ||
            i != this.selectedIndex ||
            (i += this.dragEndBoostSelect());
        delete this.previousDragX,
          (this.isDragSelect = this.options.wrapAround),
          this.select(i),
          delete this.isDragSelect,
          this.dispatchEvent('dragEnd', t, [e]);
      }),
      (o.dragEndRestingSelect = function() {
        var t = this.getRestingPosition(),
          e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
          i = this._getClosestResting(t, e, 1),
          n = this._getClosestResting(t, e, -1),
          s = i.distance < n.distance ? i.index : n.index;
        return s;
      }),
      (o._getClosestResting = function(t, e, i) {
        for (
          var n = this.selectedIndex,
            s = 1 / 0,
            o =
              this.options.contain && !this.options.wrapAround
                ? function(t, e) {
                    return t <= e;
                  }
                : function(t, e) {
                    return t < e;
                  };
          o(e, s) &&
          ((n += i), (s = e), (e = this.getSlideDistance(-t, n)), null !== e);

        )
          e = Math.abs(e);
        return { distance: s, index: n - i };
      }),
      (o.getSlideDistance = function(t, e) {
        var i = this.slides.length,
          s = this.options.wrapAround && i > 1,
          o = s ? n.modulo(e, i) : e,
          r = this.slides[o];
        if (!r) return null;
        var a = s ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (r.target + a);
      }),
      (o.dragEndBoostSelect = function() {
        if (
          void 0 === this.previousDragX ||
          !this.dragMoveTime ||
          new Date() - this.dragMoveTime > 100
        )
          return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
          e = this.previousDragX - this.dragX;
        return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
      }),
      (o.staticClick = function(t, e) {
        var i = this.getParentCell(t.target),
          n = i && i.element,
          s = i && this.cells.indexOf(i);
        this.dispatchEvent('staticClick', t, [e, n, s]);
      }),
      (o.onscroll = function() {
        var t = s(),
          e = this.pointerDownScroll.x - t.x,
          i = this.pointerDownScroll.y - t.y;
        (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone();
      }),
      e
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define('tap-listener/tap-listener', ['unipointer/unipointer'], function(
          i
        ) {
          return e(t, i);
        })
      : 'object' == typeof module && module.exports
        ? (module.exports = e(t, require('unipointer')))
        : (t.TapListener = e(t, t.Unipointer));
  })(window, function(t, e) {
    function i(t) {
      this.bindTap(t);
    }
    var n = (i.prototype = Object.create(e.prototype));
    return (
      (n.bindTap = function(t) {
        t &&
          (this.unbindTap(),
          (this.tapElement = t),
          this._bindStartEvent(t, !0));
      }),
      (n.unbindTap = function() {
        this.tapElement &&
          (this._bindStartEvent(this.tapElement, !0), delete this.tapElement);
      }),
      (n.pointerUp = function(i, n) {
        if (!this.isIgnoringMouseUp || 'mouseup' != i.type) {
          var s = e.getPointerPoint(n),
            o = this.tapElement.getBoundingClientRect(),
            r = t.pageXOffset,
            a = t.pageYOffset,
            h =
              s.x >= o.left + r &&
              s.x <= o.right + r &&
              s.y >= o.top + a &&
              s.y <= o.bottom + a;
          if ((h && this.emitEvent('tap', [i, n]), 'mouseup' != i.type)) {
            this.isIgnoringMouseUp = !0;
            var l = this;
            setTimeout(function() {
              delete l.isIgnoringMouseUp;
            }, 400);
          }
        }
      }),
      (n.destroy = function() {
        this.pointerDone(), this.unbindTap();
      }),
      i
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/prev-next-button',
          ['./flickity', 'tap-listener/tap-listener', 'fizzy-ui-utils/utils'],
          function(i, n, s) {
            return e(t, i, n, s);
          }
        )
      : 'object' == typeof module && module.exports
        ? (module.exports = e(
            t,
            require('./flickity'),
            require('tap-listener'),
            require('fizzy-ui-utils')
          ))
        : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
  })(window, function(t, e, i, n) {
    'use strict';
    function s(t, e) {
      (this.direction = t), (this.parent = e), this._create();
    }
    function o(t) {
      return 'string' == typeof t
        ? t
        : 'M ' +
            t.x0 +
            ',50 L ' +
            t.x1 +
            ',' +
            (t.y1 + 50) +
            ' L ' +
            t.x2 +
            ',' +
            (t.y2 + 50) +
            ' L ' +
            t.x3 +
            ',50  L ' +
            t.x2 +
            ',' +
            (50 - t.y2) +
            ' L ' +
            t.x1 +
            ',' +
            (50 - t.y1) +
            ' Z';
    }
    var r = 'http://www.w3.org/2000/svg';
    (s.prototype = new i()),
      (s.prototype._create = function() {
        (this.isEnabled = !0), (this.isPrevious = this.direction == -1);
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = (this.element = document.createElement('button'));
        (e.className = 'flickity-prev-next-button'),
          (e.className += this.isPrevious ? ' previous' : ' next'),
          e.setAttribute('type', 'button'),
          this.disable(),
          e.setAttribute('aria-label', this.isPrevious ? 'previous' : 'next');
        var i = this.createSVG();
        e.appendChild(i),
          this.parent.on(
            'select',
            function() {
              this.update();
            }.bind(this)
          ),
          this.on('tap', this.onTap),
          this.on(
            'pointerDown',
            function(t, e) {
              this.parent.childUIPointerDown(e);
            }.bind(this)
          );
      }),
      (s.prototype.activate = function() {
        this.bindTap(this.element),
          this.element.addEventListener('click', this),
          this.parent.element.appendChild(this.element);
      }),
      (s.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element),
          i.prototype.destroy.call(this),
          this.element.removeEventListener('click', this);
      }),
      (s.prototype.createSVG = function() {
        var t = document.createElementNS(r, 'svg');
        t.setAttribute('viewBox', '0 0 100 100');
        var e = document.createElementNS(r, 'path'),
          i = o(this.parent.options.arrowShape);
        return (
          e.setAttribute('d', i),
          e.setAttribute('class', 'arrow'),
          this.isLeft ||
            e.setAttribute('transform', 'translate(100, 100) rotate(180) '),
          t.appendChild(e),
          t
        );
      }),
      (s.prototype.onTap = function() {
        if (this.isEnabled) {
          this.parent.uiChange();
          var t = this.isPrevious ? 'previous' : 'next';
          this.parent[t]();
        }
      }),
      (s.prototype.handleEvent = n.handleEvent),
      (s.prototype.onclick = function() {
        var t = document.activeElement;
        t && t == this.element && this.onTap();
      }),
      (s.prototype.enable = function() {
        this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
      }),
      (s.prototype.disable = function() {
        this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
      }),
      (s.prototype.update = function() {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && t.length > 1)
          return void this.enable();
        var e = t.length ? t.length - 1 : 0,
          i = this.isPrevious ? 0 : e,
          n = this.parent.selectedIndex == i ? 'disable' : 'enable';
        this[n]();
      }),
      (s.prototype.destroy = function() {
        this.deactivate();
      }),
      n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 }
      }),
      e.createMethods.push('_createPrevNextButtons');
    var a = e.prototype;
    return (
      (a._createPrevNextButtons = function() {
        this.options.prevNextButtons &&
          ((this.prevButton = new s(-1, this)),
          (this.nextButton = new s(1, this)),
          this.on('activate', this.activatePrevNextButtons));
      }),
      (a.activatePrevNextButtons = function() {
        this.prevButton.activate(),
          this.nextButton.activate(),
          this.on('deactivate', this.deactivatePrevNextButtons);
      }),
      (a.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(),
          this.nextButton.deactivate(),
          this.off('deactivate', this.deactivatePrevNextButtons);
      }),
      (e.PrevNextButton = s),
      e
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/page-dots',
          ['./flickity', 'tap-listener/tap-listener', 'fizzy-ui-utils/utils'],
          function(i, n, s) {
            return e(t, i, n, s);
          }
        )
      : 'object' == typeof module && module.exports
        ? (module.exports = e(
            t,
            require('./flickity'),
            require('tap-listener'),
            require('fizzy-ui-utils')
          ))
        : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
  })(window, function(t, e, i, n) {
    function s(t) {
      (this.parent = t), this._create();
    }
    (s.prototype = new i()),
      (s.prototype._create = function() {
        (this.holder = document.createElement('ol')),
          (this.holder.className = 'flickity-page-dots'),
          (this.dots = []),
          this.on('tap', this.onTap);
      }),
      (s.prototype.activate = function() {
        this.setDots(),
          this.bindTap(this.holder),
          this.parent.element.appendChild(this.holder);
      }),
      (s.prototype.deactivate = function() {
        this.parent.element.removeChild(this.holder),
          i.prototype.destroy.call(this);
      }),
      (s.prototype.setDots = function() {
        var t = this.parent.slides.length - this.dots.length;
        t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t);
      }),
      (s.prototype.addDots = function(t) {
        for (var e = document.createDocumentFragment(), i = []; t; ) {
          var n = document.createElement('li');
          (n.className = 'dot'), e.appendChild(n), i.push(n), t--;
        }
        this.holder.appendChild(e), (this.dots = this.dots.concat(i));
      }),
      (s.prototype.removeDots = function(t) {
        var e = this.dots.splice(this.dots.length - t, t);
        e.forEach(function(t) {
          this.holder.removeChild(t);
        }, this);
      }),
      (s.prototype.updateSelected = function() {
        this.selectedDot && (this.selectedDot.className = 'dot'),
          this.dots.length &&
            ((this.selectedDot = this.dots[this.parent.selectedIndex]),
            (this.selectedDot.className = 'dot is-selected'));
      }),
      (s.prototype.onTap = function(t) {
        var e = t.target;
        if ('LI' == e.nodeName) {
          this.parent.uiChange();
          var i = this.dots.indexOf(e);
          this.parent.select(i);
        }
      }),
      (s.prototype.destroy = function() {
        this.deactivate();
      }),
      (e.PageDots = s),
      n.extend(e.defaults, { pageDots: !0 }),
      e.createMethods.push('_createPageDots');
    var o = e.prototype;
    return (
      (o._createPageDots = function() {
        this.options.pageDots &&
          ((this.pageDots = new s(this)),
          this.on('activate', this.activatePageDots),
          this.on('select', this.updateSelectedPageDots),
          this.on('cellChange', this.updatePageDots),
          this.on('resize', this.updatePageDots),
          this.on('deactivate', this.deactivatePageDots),
          this.pageDots.on(
            'pointerDown',
            function(t, e) {
              this.childUIPointerDown(e);
            }.bind(this)
          ));
      }),
      (o.activatePageDots = function() {
        this.pageDots.activate();
      }),
      (o.updateSelectedPageDots = function() {
        this.pageDots.updateSelected();
      }),
      (o.updatePageDots = function() {
        this.pageDots.setDots();
      }),
      (o.deactivatePageDots = function() {
        this.pageDots.deactivate();
      }),
      (e.PageDots = s),
      e
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/player',
          ['ev-emitter/ev-emitter', 'fizzy-ui-utils/utils', './flickity'],
          function(t, i, n) {
            return e(t, i, n);
          }
        )
      : 'object' == typeof module && module.exports
        ? (module.exports = e(
            require('ev-emitter'),
            require('fizzy-ui-utils'),
            require('./flickity')
          ))
        : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
  })(window, function(t, e, i) {
    function n(t) {
      (this.parent = t),
        (this.state = 'stopped'),
        o &&
          ((this.onVisibilityChange = function() {
            this.visibilityChange();
          }.bind(this)),
          (this.onVisibilityPlay = function() {
            this.visibilityPlay();
          }.bind(this)));
    }
    var s, o;
    'hidden' in document
      ? ((s = 'hidden'), (o = 'visibilitychange'))
      : 'webkitHidden' in document &&
        ((s = 'webkitHidden'), (o = 'webkitvisibilitychange')),
      (n.prototype = Object.create(t.prototype)),
      (n.prototype.play = function() {
        if ('playing' != this.state) {
          var t = document[s];
          if (o && t)
            return void document.addEventListener(o, this.onVisibilityPlay);
          (this.state = 'playing'),
            o && document.addEventListener(o, this.onVisibilityChange),
            this.tick();
        }
      }),
      (n.prototype.tick = function() {
        if ('playing' == this.state) {
          var t = this.parent.options.autoPlay;
          t = 'number' == typeof t ? t : 3e3;
          var e = this;
          this.clear(),
            (this.timeout = setTimeout(function() {
              e.parent.next(!0), e.tick();
            }, t));
        }
      }),
      (n.prototype.stop = function() {
        (this.state = 'stopped'),
          this.clear(),
          o && document.removeEventListener(o, this.onVisibilityChange);
      }),
      (n.prototype.clear = function() {
        clearTimeout(this.timeout);
      }),
      (n.prototype.pause = function() {
        'playing' == this.state && ((this.state = 'paused'), this.clear());
      }),
      (n.prototype.unpause = function() {
        'paused' == this.state && this.play();
      }),
      (n.prototype.visibilityChange = function() {
        var t = document[s];
        this[t ? 'pause' : 'unpause']();
      }),
      (n.prototype.visibilityPlay = function() {
        this.play(), document.removeEventListener(o, this.onVisibilityPlay);
      }),
      e.extend(i.defaults, { pauseAutoPlayOnHover: !0 }),
      i.createMethods.push('_createPlayer');
    var r = i.prototype;
    return (
      (r._createPlayer = function() {
        (this.player = new n(this)),
          this.on('activate', this.activatePlayer),
          this.on('uiChange', this.stopPlayer),
          this.on('pointerDown', this.stopPlayer),
          this.on('deactivate', this.deactivatePlayer);
      }),
      (r.activatePlayer = function() {
        this.options.autoPlay &&
          (this.player.play(),
          this.element.addEventListener('mouseenter', this));
      }),
      (r.playPlayer = function() {
        this.player.play();
      }),
      (r.stopPlayer = function() {
        this.player.stop();
      }),
      (r.pausePlayer = function() {
        this.player.pause();
      }),
      (r.unpausePlayer = function() {
        this.player.unpause();
      }),
      (r.deactivatePlayer = function() {
        this.player.stop(),
          this.element.removeEventListener('mouseenter', this);
      }),
      (r.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover &&
          (this.player.pause(),
          this.element.addEventListener('mouseleave', this));
      }),
      (r.onmouseleave = function() {
        this.player.unpause(),
          this.element.removeEventListener('mouseleave', this);
      }),
      (i.Player = n),
      i
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/add-remove-cell',
          ['./flickity', 'fizzy-ui-utils/utils'],
          function(i, n) {
            return e(t, i, n);
          }
        )
      : 'object' == typeof module && module.exports
        ? (module.exports = e(
            t,
            require('./flickity'),
            require('fizzy-ui-utils')
          ))
        : e(t, t.Flickity, t.fizzyUIUtils);
  })(window, function(t, e, i) {
    function n(t) {
      var e = document.createDocumentFragment();
      return (
        t.forEach(function(t) {
          e.appendChild(t.element);
        }),
        e
      );
    }
    var s = e.prototype;
    return (
      (s.insert = function(t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
          var s = this.cells.length;
          e = void 0 === e ? s : e;
          var o = n(i),
            r = e == s;
          if (r) this.slider.appendChild(o);
          else {
            var a = this.cells[e].element;
            this.slider.insertBefore(o, a);
          }
          if (0 === e) this.cells = i.concat(this.cells);
          else if (r) this.cells = this.cells.concat(i);
          else {
            var h = this.cells.splice(e, s - e);
            this.cells = this.cells.concat(i).concat(h);
          }
          this._sizeCells(i);
          var l = e > this.selectedIndex ? 0 : i.length;
          this._cellAddedRemoved(e, l);
        }
      }),
      (s.append = function(t) {
        this.insert(t, this.cells.length);
      }),
      (s.prepend = function(t) {
        this.insert(t, 0);
      }),
      (s.remove = function(t) {
        var e,
          n,
          s = this.getCells(t),
          o = 0,
          r = s.length;
        for (e = 0; e < r; e++) {
          n = s[e];
          var a = this.cells.indexOf(n) < this.selectedIndex;
          o -= a ? 1 : 0;
        }
        for (e = 0; e < r; e++)
          (n = s[e]), n.remove(), i.removeFrom(this.cells, n);
        s.length && this._cellAddedRemoved(0, o);
      }),
      (s._cellAddedRemoved = function(t, e) {
        (e = e || 0),
          (this.selectedIndex += e),
          (this.selectedIndex = Math.max(
            0,
            Math.min(this.slides.length - 1, this.selectedIndex)
          )),
          this.cellChange(t, !0),
          this.emitEvent('cellAddedRemoved', [t, e]);
      }),
      (s.cellSizeChange = function(t) {
        var e = this.getCell(t);
        if (e) {
          e.getSize();
          var i = this.cells.indexOf(e);
          this.cellChange(i);
        }
      }),
      (s.cellChange = function(t, e) {
        var i = this.slideableWidth;
        if (
          (this._positionCells(t),
          this._getWrapShiftCells(),
          this.setGallerySize(),
          this.emitEvent('cellChange', [t]),
          this.options.freeScroll)
        ) {
          var n = i - this.slideableWidth;
          (this.x += n * this.cellAlign), this.positionSlider();
        } else
          e && this.positionSliderAtSelected(), this.select(this.selectedIndex);
      }),
      e
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/lazyload',
          ['./flickity', 'fizzy-ui-utils/utils'],
          function(i, n) {
            return e(t, i, n);
          }
        )
      : 'object' == typeof module && module.exports
        ? (module.exports = e(
            t,
            require('./flickity'),
            require('fizzy-ui-utils')
          ))
        : e(t, t.Flickity, t.fizzyUIUtils);
  })(window, function(t, e, i) {
    'use strict';
    function n(t) {
      if ('IMG' == t.nodeName && t.getAttribute('data-flickity-lazyload'))
        return [t];
      var e = t.querySelectorAll('img[data-flickity-lazyload]');
      return i.makeArray(e);
    }
    function s(t, e) {
      (this.img = t), (this.flickity = e), this.load();
    }
    e.createMethods.push('_createLazyload');
    var o = e.prototype;
    return (
      (o._createLazyload = function() {
        this.on('select', this.lazyLoad);
      }),
      (o.lazyLoad = function() {
        var t = this.options.lazyLoad;
        if (t) {
          var e = 'number' == typeof t ? t : 0,
            i = this.getAdjacentCellElements(e),
            o = [];
          i.forEach(function(t) {
            var e = n(t);
            o = o.concat(e);
          }),
            o.forEach(function(t) {
              new s(t, this);
            }, this);
        }
      }),
      (s.prototype.handleEvent = i.handleEvent),
      (s.prototype.load = function() {
        this.img.addEventListener('load', this),
          this.img.addEventListener('error', this),
          (this.img.src = this.img.getAttribute('data-flickity-lazyload')),
          this.img.removeAttribute('data-flickity-lazyload');
      }),
      (s.prototype.onload = function(t) {
        this.complete(t, 'flickity-lazyloaded');
      }),
      (s.prototype.onerror = function(t) {
        this.complete(t, 'flickity-lazyerror');
      }),
      (s.prototype.complete = function(t, e) {
        this.img.removeEventListener('load', this),
          this.img.removeEventListener('error', this);
        var i = this.flickity.getParentCell(this.img),
          n = i && i.element;
        this.flickity.cellSizeChange(n),
          this.img.classList.add(e),
          this.flickity.dispatchEvent('lazyLoad', t, n);
      }),
      (e.LazyLoader = s),
      e
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/index',
          [
            './flickity',
            './drag',
            './prev-next-button',
            './page-dots',
            './player',
            './add-remove-cell',
            './lazyload'
          ],
          e
        )
      : 'object' == typeof module &&
        module.exports &&
        (module.exports = e(
          require('./flickity'),
          require('./drag'),
          require('./prev-next-button'),
          require('./page-dots'),
          require('./player'),
          require('./add-remove-cell'),
          require('./lazyload')
        ));
  })(window, function(t) {
    return t;
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity-as-nav-for/as-nav-for',
          ['flickity/js/index', 'fizzy-ui-utils/utils'],
          function(i, n, s) {
            return e(t, i, n, s);
          }
        )
      : 'object' == typeof module && module.exports
        ? (module.exports = e(
            t,
            require('flickity'),
            require('fizzy-ui-utils')
          ))
        : (t.Flickity = e(t, t.Flickity, t.fizzyUIUtils));
  })(window, function(t, e, i) {
    e.createMethods.push('_createAsNavFor');
    var n = e.prototype;
    return (
      (n._createAsNavFor = function() {
        this.on('activate', this.activateAsNavFor),
          this.on('deactivate', this.deactivateAsNavFor),
          this.on('destroy', this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
          var e = this;
          setTimeout(function() {
            e.setNavCompanion(t);
          });
        }
      }),
      (n.setNavCompanion = function(t) {
        t = i.getQueryElement(t);
        var n = e.data(t);
        if (n && n != this) {
          this.navCompanion = n;
          var s = this;
          (this.onNavCompanionSelect = function() {
            s.navCompanionSelect();
          }),
            n.on('select', this.onNavCompanionSelect),
            this.on('staticClick', this.onNavStaticClick),
            this.navCompanionSelect();
        }
      }),
      (n.navCompanionSelect = function() {
        if (this.navCompanion) {
          var t = this.navCompanion.selectedCells[0],
            e = this.navCompanion.cells.indexOf(t);
          this.selectCell(e),
            this.removeNavSelectedElements(),
            e >= this.cells.length ||
              ((this.navSelectedElements = this.slides[
                this.selectedIndex
              ].getCellElements()),
              this.changeNavSelectedClass('add'));
        }
      }),
      (n.changeNavSelectedClass = function(t) {
        this.navSelectedElements.forEach(function(e) {
          e.classList[t]('is-nav-selected');
        });
      }),
      (n.activateAsNavFor = function() {
        this.navCompanionSelect();
      }),
      (n.removeNavSelectedElements = function() {
        this.navSelectedElements &&
          (this.changeNavSelectedClass('remove'),
          delete this.navSelectedElements);
      }),
      (n.onNavStaticClick = function(t, e, i, n) {
        'number' == typeof n && this.navCompanion.selectCell(n);
      }),
      (n.deactivateAsNavFor = function() {
        this.removeNavSelectedElements();
      }),
      (n.destroyAsNavFor = function() {
        this.navCompanion &&
          (this.navCompanion.off('select', this.onNavCompanionSelect),
          this.off('staticClick', this.onNavStaticClick),
          delete this.navCompanion);
      }),
      e
    );
  }),
  (function(t, e) {
    'use strict';
    'function' == typeof define && define.amd
      ? define('imagesloaded/imagesloaded', ['ev-emitter/ev-emitter'], function(
          i
        ) {
          return e(t, i);
        })
      : 'object' == typeof module && module.exports
        ? (module.exports = e(t, require('ev-emitter')))
        : (t.imagesLoaded = e(t, t.EvEmitter));
  })(window, function(t, e) {
    function i(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function n(t) {
      var e = [];
      if (Array.isArray(t)) e = t;
      else if ('number' == typeof t.length)
        for (var i = 0; i < t.length; i++) e.push(t[i]);
      else e.push(t);
      return e;
    }
    function s(t, e, o) {
      return this instanceof s
        ? ('string' == typeof t && (t = document.querySelectorAll(t)),
          (this.elements = n(t)),
          (this.options = i({}, this.options)),
          'function' == typeof e ? (o = e) : i(this.options, e),
          o && this.on('always', o),
          this.getImages(),
          a && (this.jqDeferred = new a.Deferred()),
          void setTimeout(
            function() {
              this.check();
            }.bind(this)
          ))
        : new s(t, e, o);
    }
    function o(t) {
      this.img = t;
    }
    function r(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    var a = t.jQuery,
      h = t.console;
    (s.prototype = Object.create(e.prototype)),
      (s.prototype.options = {}),
      (s.prototype.getImages = function() {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (s.prototype.addElementImages = function(t) {
        'IMG' == t.nodeName && this.addImage(t),
          this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && l[e]) {
          for (var i = t.querySelectorAll('img'), n = 0; n < i.length; n++) {
            var s = i[n];
            this.addImage(s);
          }
          if ('string' == typeof this.options.background) {
            var o = t.querySelectorAll(this.options.background);
            for (n = 0; n < o.length; n++) {
              var r = o[n];
              this.addElementBackgroundImages(r);
            }
          }
        }
      });
    var l = { 1: !0, 9: !0, 11: !0 };
    return (
      (s.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage);
            null !== n;

          ) {
            var s = n && n[2];
            s && this.addBackground(s, t), (n = i.exec(e.backgroundImage));
          }
      }),
      (s.prototype.addImage = function(t) {
        var e = new o(t);
        this.images.push(e);
      }),
      (s.prototype.addBackground = function(t, e) {
        var i = new r(t, e);
        this.images.push(i);
      }),
      (s.prototype.check = function() {
        function t(t, i, n) {
          setTimeout(function() {
            e.progress(t, i, n);
          });
        }
        var e = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function(e) {
                e.once('progress', t), e.check();
              })
            : void this.complete()
        );
      }),
      (s.prototype.progress = function(t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent('progress', [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && h && h.log('progress: ' + i, t, e);
      }),
      (s.prototype.complete = function() {
        var t = this.hasAnyBroken ? 'fail' : 'done';
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent('always', [this]),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? 'reject' : 'resolve';
          this.jqDeferred[e](this);
        }
      }),
      (o.prototype = Object.create(e.prototype)),
      (o.prototype.check = function() {
        var t = this.getIsImageComplete();
        return t
          ? void this.confirm(0 !== this.img.naturalWidth, 'naturalWidth')
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener('load', this),
            this.proxyImage.addEventListener('error', this),
            this.img.addEventListener('load', this),
            this.img.addEventListener('error', this),
            void (this.proxyImage.src = this.img.src));
      }),
      (o.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth;
      }),
      (o.prototype.confirm = function(t, e) {
        (this.isLoaded = t), this.emitEvent('progress', [this, this.img, e]);
      }),
      (o.prototype.handleEvent = function(t) {
        var e = 'on' + t.type;
        this[e] && this[e](t);
      }),
      (o.prototype.onload = function() {
        this.confirm(!0, 'onload'), this.unbindEvents();
      }),
      (o.prototype.onerror = function() {
        this.confirm(!1, 'onerror'), this.unbindEvents();
      }),
      (o.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener('load', this),
          this.proxyImage.removeEventListener('error', this),
          this.img.removeEventListener('load', this),
          this.img.removeEventListener('error', this);
      }),
      (r.prototype = Object.create(o.prototype)),
      (r.prototype.check = function() {
        this.img.addEventListener('load', this),
          this.img.addEventListener('error', this),
          (this.img.src = this.url);
        var t = this.getIsImageComplete();
        t &&
          (this.confirm(0 !== this.img.naturalWidth, 'naturalWidth'),
          this.unbindEvents());
      }),
      (r.prototype.unbindEvents = function() {
        this.img.removeEventListener('load', this),
          this.img.removeEventListener('error', this);
      }),
      (r.prototype.confirm = function(t, e) {
        (this.isLoaded = t),
          this.emitEvent('progress', [this, this.element, e]);
      }),
      (s.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery),
          e &&
            ((a = e),
            (a.fn.imagesLoaded = function(t, e) {
              var i = new s(this, t, e);
              return i.jqDeferred.promise(a(this));
            }));
      }),
      s.makeJQueryPlugin(),
      s
    );
  }),
  (function(t, e) {
    'function' == typeof define && define.amd
      ? define(['flickity/js/index', 'imagesloaded/imagesloaded'], function(
          i,
          n
        ) {
          return e(t, i, n);
        })
      : 'object' == typeof module && module.exports
        ? (module.exports = e(t, require('flickity'), require('imagesloaded')))
        : (t.Flickity = e(t, t.Flickity, t.imagesLoaded));
  })(window, function(t, e, i) {
    'use strict';
    e.createMethods.push('_createImagesLoaded');
    var n = e.prototype;
    return (
      (n._createImagesLoaded = function() {
        this.on('activate', this.imagesLoaded);
      }),
      (n.imagesLoaded = function() {
        function t(t, i) {
          var n = e.getParentCell(i.img);
          e.cellSizeChange(n && n.element),
            e.options.freeScroll || e.positionSliderAtSelected();
        }
        if (this.options.imagesLoaded) {
          var e = this;
          i(this.slider).on('progress', t);
        }
      }),
      e
    );
  });

;/*! Copyright (c) Go Make Things, LLC

//github.com/cferdinandi/smooth-scroll

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS 
OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

!function(a,b){"function"==typeof define&&define.amd?define([],b(a)):"object"==typeof exports?module.exports=b(a):a.smoothScroll=b(a)}("undefined"!=typeof global?global:this.window||this.global,function(a){"use strict";var d,e,f,g,h,i,j,b={},c="querySelector"in document&&"addEventListener"in a,k={selector:"[data-scroll]",selectorHeader:null,speed:500,easing:"easeInOutCubic",offset:0,callback:function(){}},l=function(){var a={},b=!1,c=0,d=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(b=arguments[0],c++);for(var e=function(c){for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(b&&"[object Object]"===Object.prototype.toString.call(c[d])?a[d]=l(!0,a[d],c[d]):a[d]=c[d])};c<d;c++){var f=arguments[c];e(f)}return a},m=function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},n=function(a,b){var e,f,c=b.charAt(0),d="classList"in document.documentElement;for("["===c&&(b=b.substr(1,b.length-2),e=b.split("="),e.length>1&&(f=!0,e[1]=e[1].replace(/"/g,"").replace(/'/g,"")));a&&a!==document&&1===a.nodeType;a=a.parentNode){if("."===c)if(d){if(a.classList.contains(b.substr(1)))return a}else if(new RegExp("(^|\\s)"+b.substr(1)+"(\\s|$)").test(a.className))return a;if("#"===c&&a.id===b.substr(1))return a;if("["===c&&a.hasAttribute(e[0])){if(!f)return a;if(a.getAttribute(e[0])===e[1])return a}if(a.tagName.toLowerCase()===b)return a}return null},o=function(a){"#"===a.charAt(0)&&(a=a.substr(1));for(var e,b=String(a),c=b.length,d=-1,f="",g=b.charCodeAt(0);++d<c;){if(e=b.charCodeAt(d),0===e)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");f+=e>=1&&e<=31||127==e||0===d&&e>=48&&e<=57||1===d&&e>=48&&e<=57&&45===g?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?b.charAt(d):"\\"+b.charAt(d)}return"#"+f},p=function(a,b){var c;return"easeInQuad"===a&&(c=b*b),"easeOutQuad"===a&&(c=b*(2-b)),"easeInOutQuad"===a&&(c=b<.5?2*b*b:-1+(4-2*b)*b),"easeInCubic"===a&&(c=b*b*b),"easeOutCubic"===a&&(c=--b*b*b+1),"easeInOutCubic"===a&&(c=b<.5?4*b*b*b:(b-1)*(2*b-2)*(2*b-2)+1),"easeInQuart"===a&&(c=b*b*b*b),"easeOutQuart"===a&&(c=1- --b*b*b*b),"easeInOutQuart"===a&&(c=b<.5?8*b*b*b*b:1-8*--b*b*b*b),"easeInQuint"===a&&(c=b*b*b*b*b),"easeOutQuint"===a&&(c=1+--b*b*b*b*b),"easeInOutQuint"===a&&(c=b<.5?16*b*b*b*b*b:1+16*--b*b*b*b*b),c||b},q=function(a,b,c){var d=0;if(a.offsetParent)do d+=a.offsetTop,a=a.offsetParent;while(a);return d=Math.max(d-b-c,0),Math.min(d,s()-r())},r=function(){return Math.max(document.documentElement.clientHeight,a.innerHeight||0)},s=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},t=function(a){return a&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(a):{}},u=function(a){return a?m(a)+a.offsetTop:0},v=function(b,c,d){d||(b.focus(),document.activeElement.id!==b.id&&(b.setAttribute("tabindex","-1"),b.focus(),b.style.outline="none"),a.scrollTo(0,c))};b.animateScroll=function(b,c,e){var f=t(c?c.getAttribute("data-options"):null),i=l(d||k,e||{},f),m="[object Number]"===Object.prototype.toString.call(b),n=m||!b.tagName?null:b;if(m||n){var o=a.pageYOffset;i.selectorHeader&&!g&&(g=document.querySelector(i.selectorHeader)),h||(h=u(g));var z,A,r=m?b:q(n,h,parseInt(i.offset,10)),w=r-o,x=s(),y=0,B=function(d,e,f){var g=a.pageYOffset;(d==e||g==e||a.innerHeight+g>=x)&&(clearInterval(f),v(b,e,m),i.callback(b,c))},C=function(){y+=16,z=y/parseInt(i.speed,10),z=z>1?1:z,A=o+w*p(i.easing,z),a.scrollTo(0,Math.floor(A)),B(A,r,j)},D=function(){clearInterval(j),j=setInterval(C,16)};0===a.pageYOffset&&a.scrollTo(0,0),D()}};var w=function(c){a.location.hash;e&&(e.id=e.getAttribute("data-scroll-id"),b.animateScroll(e,f),e=null,f=null)},x=function(b){if(0===b.button&&!b.metaKey&&!b.ctrlKey&&(f=n(b.target,d.selector),f&&"a"===f.tagName.toLowerCase()&&f.hostname===a.location.hostname&&f.pathname===a.location.pathname&&/#/.test(f.href))){var c=o(f.hash);if("#"===c){b.preventDefault(),e=document.body;var g=e.id?e.id:"smooth-scroll-top";return e.setAttribute("data-scroll-id",g),e.id="",void(a.location.hash.substring(1)===g?w():a.location.hash=g)}e=document.querySelector(c),e&&(e.setAttribute("data-scroll-id",e.id),e.id="",f.hash===a.location.hash&&(b.preventDefault(),w()))}},y=function(a){i||(i=setTimeout(function(){i=null,h=u(g)},66))};return b.destroy=function(){d&&(document.removeEventListener("click",x,!1),a.removeEventListener("resize",y,!1),d=null,e=null,f=null,g=null,h=null,i=null,j=null)},b.init=function(e){c&&(b.destroy(),d=l(k,e||{}),g=d.selectorHeader?document.querySelector(d.selectorHeader):null,h=u(g),document.addEventListener("click",x,!1),a.addEventListener("hashchange",w,!1),g&&a.addEventListener("resize",y,!1))},b});
;window.mr=window.mr||{};mr=(function(mr,$,window,document){'use strict';mr=mr||{};var components={documentReady:[],documentReadyDeferred:[],windowLoad:[],windowLoadDeferred:[]};mr.status={documentReadyRan:!1,windowLoadPending:!1};$(document).ready(documentReady);$(window).on('load',windowLoad);function documentReady(context){context=typeof context===typeof undefined?$:context;components.documentReady.concat(components.documentReadyDeferred).forEach(function(component){component(context)});mr.status.documentReadyRan=!0;if(mr.status.windowLoadPending){windowLoad(mr.setContext())}}
function windowLoad(context){if(mr.status.documentReadyRan){mr.status.windowLoadPending=!1;context=typeof context==='object'?$:context;components.windowLoad.concat(components.windowLoadDeferred).forEach(function(component){component(context)})}else{mr.status.windowLoadPending=!0}}
mr.setContext=function(contextSelector){var context=$;if(typeof contextSelector!==typeof undefined){return function(selector){return $(contextSelector).find(selector)}}
return context};mr.components=components;mr.documentReady=documentReady;mr.windowLoad=windowLoad;return mr})(window.mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.util={};mr.util.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;mr.util.documentReady=function($){var today=new Date();var year=today.getFullYear();$('.update-year').text(year)};mr.util.windowLoad=function($){$('[data-delay-src]').each(function(){var $el=$(this);$el.attr('src',$el.attr('data-delay-src'));$el.removeAttr('data-delay-src')})};mr.util.getURLParameter=function(name){return(decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.search)||[undefined,''])[1].replace(/\+/g,'%20'))||null)};mr.util.capitaliseFirstLetter=function(string){return string.charAt(0).toUpperCase()+string.slice(1)};mr.util.slugify=function(text,spacesOnly){if(typeof spacesOnly!==typeof undefined){return text.replace(/ +/g,'')}else{return text.toLowerCase().replace(/[\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\]\[\}\{\'\"\;\\\:\?\/\>\<\.\,]+/g,'').replace(/ +/g,'-')}};mr.util.sortChildrenByText=function(parentElement,reverse){var $parentElement=$(parentElement);var items=$parentElement.children().get();var order=-1;var order2=1;if(typeof reverse!==typeof undefined){order=1;order2=-1}
items.sort(function(a,b){var keyA=$(a).text();var keyB=$(b).text();if(keyA<keyB)return order;if(keyA>keyB)return order2;return 0});$parentElement.empty();$(items).each(function(i,itm){$parentElement.append(itm)})};mr.util.idleSrc=function(context,selector){selector=typeof selector!==typeof undefined?selector:'';var elems=context.is(selector+'[src]')?context:context.find(selector+'[src]');elems.each(function(index,elem){elem=$(elem);var currentSrc=elem.attr('src'),dataSrc=elem.attr('data-src');if(typeof dataSrc===typeof undefined){elem.attr('data-src',currentSrc)}
elem.attr('src','')})};mr.util.activateIdleSrc=function(context,selector){selector=typeof selector!==typeof undefined?selector:'';var elems=context.is(selector+'[data-src]')?context:context.find(selector+'[data-src]');elems.each(function(index,elem){elem=$(elem);var dataSrc=elem.attr('data-src');elem.attr('src',dataSrc)})};mr.util.pauseVideo=function(context){var elems=context.is('video')?context:context.find('video');elems.each(function(index,video){var playingVideo=$(video).get(0);playingVideo.pause()})};mr.util.parsePixels=function(text){var windowHeight=$(window).height(),value;if(/^[1-9]{1}[0-9]*[p][x]$/.test(text)){return parseInt(text.replace('px',''),10)}else if(/^[1-9]{1}[0-9]*[v][h]$/.test(text)){value=parseInt(text.replace('vh',''),10);return windowHeight*(value/100)}else{return-1}};mr.util.removeHash=function(){history.pushState('',document.title,window.location.pathname+window.location.search)};mr.components.documentReady.push(mr.util.documentReady);mr.components.windowLoad.push(mr.util.windowLoad);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.window={};mr.window.height=$(window).height();mr.window.width=$(window).width();$(window).on('resize',function(){mr.window.height=$(window).height();mr.window.width=$(window).width()});return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.scroll={};var raf=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;mr.scroll.listeners=[];mr.scroll.busy=!1;mr.scroll.y=0;mr.scroll.x=0;var documentReady=function($){jQuery(window).off('scroll.mr');jQuery(window).on('scroll.mr',function(evt){if(mr.scroll.busy===!1){mr.scroll.busy=!0;raf(function(evt){mr.scroll.update(evt)})}
if(evt.stopPropagation){evt.stopPropagation()}})};mr.scroll.update=function(event){var parallax=typeof window.mr_parallax!==typeof undefined?!0:!1;mr.scroll.y=parallax?mr_parallax.mr_getScrollPosition():window.pageYOffset;mr.scroll.busy=!1;if(parallax){mr_parallax.mr_parallaxBackground()}
if(mr.scroll.listeners.length>0){for(var i=0,l=mr.scroll.listeners.length;i<l;i++){mr.scroll.listeners[i](event)}}};mr.scroll.documentReady=documentReady;mr.components.documentReady.push(documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.scroll.classModifiers={};mr.scroll.classModifiers.rules=[];mr.scroll.classModifiers.parseScrollRules=function(element){var text=element.attr('data-scroll-class'),rules=text.split(';');rules.forEach(function(rule){var ruleComponents,scrollPoint,ruleObject={};ruleComponents=rule.replace(/\s/g,'').split(':');if(ruleComponents.length===2){scrollPoint=mr.util.parsePixels(ruleComponents[0]);if(scrollPoint>-1){ruleObject.scrollPoint=scrollPoint;if(ruleComponents[1].length){var toggleClass=ruleComponents[1];ruleObject.toggleClass=toggleClass;ruleObject.hasClass=element.hasClass(toggleClass);ruleObject.element=element.get(0);mr.scroll.classModifiers.rules.push(ruleObject)}else{return!1}}else{return!1}}});if(mr.scroll.classModifiers.rules.length){return!0}else{return!1}};mr.scroll.classModifiers.update=function(event){var currentScroll=mr.scroll.y,scrollRules=mr.scroll.classModifiers.rules,l=scrollRules.length,currentRule;while(l--){currentRule=scrollRules[l];if(currentScroll>currentRule.scrollPoint&&!currentRule.hasClass){currentRule.element.classList.add(currentRule.toggleClass);currentRule.hasClass=mr.scroll.classModifiers.rules[l].hasClass=!0}
if(currentScroll<currentRule.scrollPoint&&currentRule.hasClass){currentRule.element.classList.remove(currentRule.toggleClass);currentRule.hasClass=mr.scroll.classModifiers.rules[l].hasClass=!1}}};var fixedElementSizes=function(){$('.main-container [data-scroll-class*="pos-fixed"]').each(function(){var element=$(this);element.css('max-width',element.parent().outerWidth());element.parent().css('min-height',element.outerHeight())})};var documentReady=function($){$('[data-scroll-class]').each(function(){var element=$(this);if(!mr.scroll.classModifiers.parseScrollRules(element)){console.log('Error parsing scroll rules on: '+element)}});fixedElementSizes();$(window).on('resize',fixedElementSizes);if(mr.scroll.classModifiers.rules.length){mr.scroll.listeners.push(mr.scroll.classModifiers.update)}};mr.components.documentReady.push(documentReady);mr.scroll.classModifiers.documentReady=documentReady;return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.accordions=mr.accordions||{};mr.accordions.documentReady=function($){$('.accordion__title').on('click',function(){mr.accordions.activatePanel($(this))});$('.accordion').each(function(){var accordion=$(this);var minHeight=accordion.outerHeight(!0);accordion.css('min-height',minHeight)});if(window.location.hash!==''&&window.location.hash!=='#'){if($('.accordion li'+$(this).attr('href')).length){mr.accordions.activatePanelById(window.location.hash,!0)}}
jQuery(document).on('click','a[href^="#"]:not(a[href="#"])',function(){if($('.accordion > li > .accordion__title'+$(this).attr('href')).length){mr.accordions.activatePanelById($(this).attr('href'),!0)}})};mr.accordions.activatePanel=function(panel,forceOpen){var $panel=$(panel),accordion=$panel.closest('.accordion'),li=$panel.closest('li'),openEvent=document.createEvent('Event'),closeEvent=document.createEvent('Event');openEvent.initEvent('panelOpened.accordions.mr',!0,!0);closeEvent.initEvent('panelClosed.accordions.mr',!0,!0);if(li.hasClass('active')){if(forceOpen!==!0){li.removeClass('active');$panel.trigger('panelClosed.accordions.mr').get(0).dispatchEvent(closeEvent)}}else{if(accordion.hasClass('accordion--oneopen')){var wasActive=accordion.find('li.active');if(wasActive.length){wasActive.removeClass('active');wasActive.trigger('panelClosed.accordions.mr').get(0).dispatchEvent(closeEvent)}
li.addClass('active');li.trigger('panelOpened.accordions.mr').get(0).dispatchEvent(openEvent)}else{if(!li.is('.active')){li.trigger('panelOpened.accordions.mr').get(0).dispatchEvent(openEvent)}
li.addClass('active')}}};mr.accordions.activatePanelById=function(id,forceOpen){var panel;if(id!==''&&id!=='#'){panel=$('.accordion > li > .accordion__title#'+id.replace('#',''));if(panel.length){$('html, body').stop(!0).animate({scrollTop:panel.offset().top-50},1200);mr.accordions.activatePanel(panel,forceOpen)}}};mr.components.documentReady.push(mr.accordions.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.alerts=mr.alerts||{};mr.alerts.documentReady=function($){$('.alert__close').on('click touchstart',function(){jQuery(this).closest('.alert').addClass('alert--dismissed')})};mr.components.documentReady.push(mr.alerts.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.backgrounds=mr.backgrounds||{};mr.backgrounds.documentReady=function($){$('.background-image-holder').each(function(){var imgSrc=$(this).children('img').attr('src');$(this).css('background','url("'+imgSrc+'")').css('background-position','initial').css('opacity','1')})};mr.components.documentReady.push(mr.backgrounds.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.bars=mr.bars||{};mr.bars.documentReady=function($){$('.nav-container .bar[data-scroll-class*="fixed"]:not(.bar--absolute)').each(function(){var bar=$(this),barHeight=bar.outerHeight(!0);bar.closest('.nav-container').css('min-height',barHeight)})};mr.components.documentReady.push(mr.bars.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.cookies={getItem:function(sKey){if(!sKey){return null}
return(decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*'+encodeURIComponent(sKey).replace(/[\-\.\+\*]/g,'\\$&')+'\\s*\\=\\s*([^;]*).*$)|^.*$'),'$1'))||null)},setItem:function(sKey,sValue,vEnd,sPath,sDomain,bSecure){if(!sKey||/^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)){return!1}
var sExpires='';if(vEnd){switch(vEnd.constructor){case Number:sExpires=vEnd===Infinity?'; expires=Fri, 31 Dec 9999 23:59:59 GMT':'; max-age='+vEnd;break;case String:sExpires='; expires='+vEnd;break;case Date:sExpires='; expires='+vEnd.toUTCString();break}}
document.cookie=encodeURIComponent(sKey)+'='+encodeURIComponent(sValue)+sExpires+(sDomain?'; domain='+sDomain:'')+(sPath?'; path='+sPath:'')+(bSecure?'; secure':'');return!0},removeItem:function(sKey,sPath,sDomain){if(!this.hasItem(sKey)){return!1}
document.cookie=encodeURIComponent(sKey)+'=; expires=Thu, 01 Jan 1970 00:00:00 GMT'+(sDomain?'; domain='+sDomain:'')+(sPath?'; path='+sPath:'');return!0},hasItem:function(sKey){if(!sKey){return!1}
return new RegExp('(?:^|;\\s*)'+encodeURIComponent(sKey).replace(/[\-\.\+\*]/g,'\\$&')+'\\s*\\=').test(document.cookie)},keys:function(){var aKeys=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,'').split(/\s*(?:\=[^;]*)?;\s*/);for(var nLen=aKeys.length,nIdx=0;nIdx<nLen;nIdx++){aKeys[nIdx]=decodeURIComponent(aKeys[nIdx])}
return aKeys}};return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.countdown=mr.countdown||{};mr.countdown.options=mr.countdown.options||{};mr.countdown.documentReady=function($){$('.countdown[data-date]').each(function(){var element=$(this),date=element.attr('data-date'),daysText=typeof element.attr('data-days-text')!==typeof undefined?'%D '+element.attr('data-days-text')+' %H:%M:%S':'%D days %H:%M:%S',daysText=typeof mr.countdown.options.format!==typeof undefined?mr.countdown.options.format:daysText,dateFormat=typeof element.attr('data-date-format')!==typeof undefined?element.attr('data-date-format'):daysText,fallback;if(typeof element.attr('data-date-fallback')!==typeof undefined){fallback=element.attr('data-date-fallback')||'Timer Done'}
element.countdown(date,function(event){if(event.elapsed){element.text(fallback)}else{element.text(event.strftime(dateFormat))}})})};mr.components.documentReadyDeferred.push(mr.countdown.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.datepicker=mr.datepicker||{};var options=mr.datepicker.options||{};mr.datepicker.documentReady=function($){if($('.datepicker').length){$('.datepicker').pickadate(options)}};mr.components.documentReadyDeferred.push(mr.datepicker.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.dropdowns=mr.dropdowns||{};mr.dropdowns.done=!1;mr.dropdowns.documentReady=function($){var rtl=!1;if($('html[dir="rtl"]').length){rtl=!0}
if(!mr.dropdowns.done){jQuery(document).on('click','body:not(.dropdowns--hover) .dropdown:not(.dropdown--hover), body.dropdowns--hover .dropdown.dropdown--click',function(event){var dropdown=jQuery(this);if(jQuery(event.target).is('.dropdown--active > .dropdown__trigger')){dropdown.siblings().removeClass('dropdown--active').find('.dropdown').removeClass('dropdown--active');dropdown.toggleClass('dropdown--active')}else{$('.dropdown--active').removeClass('dropdown--active');dropdown.addClass('dropdown--active')}});jQuery(document).on('click touchstart','body:not(.dropdowns--hover)',function(event){if(!jQuery(event.target).is('[class*="dropdown"], [class*="dropdown"] *')){$('.dropdown--active').removeClass('dropdown--active')}});jQuery('body.dropdowns--hover .dropdown').on('click',function(event){event.stopPropagation();var hoverDropdown=jQuery(this);hoverDropdown.toggleClass('dropdown--active')});jQuery('body').append('<div class="container containerMeasure" style="opacity:0;pointer-events:none;"></div>');if(rtl===!1){mr.dropdowns.repositionDropdowns($);jQuery(window).on('resize',function(){mr.dropdowns.repositionDropdowns($)})}else{mr.dropdowns.repositionDropdownsRtl($);jQuery(window).on('resize',function(){mr.dropdowns.repositionDropdownsRtl($)})}
mr.dropdowns.done=!0}};mr.dropdowns.repositionDropdowns=function($){$('.dropdown__container').each(function(){var container,containerOffset,masterOffset,menuItem,content;jQuery(this).css('left','');container=jQuery(this);containerOffset=container.offset().left;masterOffset=jQuery('.containerMeasure').offset().left;menuItem=container.closest('.dropdown').offset().left;content=null;container.css('left',-containerOffset+masterOffset);if(container.find('.dropdown__content:not([class*="md-12"])').length){content=container.find('.dropdown__content');content.css('left',menuItem-masterOffset)}});$('.dropdown__content').each(function(){var dropdown,offset,width,offsetRight,winWidth,leftCorrect;dropdown=jQuery(this);offset=dropdown.offset().left;width=dropdown.outerWidth(!0);offsetRight=offset+width;winWidth=jQuery(window).outerWidth(!0);leftCorrect=jQuery('.containerMeasure').outerWidth()-width;if(offsetRight>winWidth){dropdown.css('left',leftCorrect)}})};mr.dropdowns.repositionDropdownsRtl=function($){var windowWidth=jQuery(window).width();$('.dropdown__container').each(function(){var container,containerOffset,masterOffset,menuItem,content;jQuery(this).css('left','');container=jQuery(this);containerOffset=windowWidth-(container.offset().left+container.outerWidth(!0));masterOffset=jQuery('.containerMeasure').offset().left;menuItem=windowWidth-(container.closest('.dropdown').offset().left+container.closest('.dropdown').outerWidth(!0));content=null;container.css('right',-containerOffset+masterOffset);if(container.find('.dropdown__content:not([class*="md-12"])').length){content=container.find('.dropdown__content');content.css('right',menuItem-masterOffset)}});$('.dropdown__content').each(function(){var dropdown,offset,width,offsetRight,winWidth,rightCorrect;dropdown=jQuery(this);offset=windowWidth-(dropdown.offset().left+dropdown.outerWidth(!0));width=dropdown.outerWidth(!0);offsetRight=offset+width;winWidth=jQuery(window).outerWidth(!0);rightCorrect=jQuery('.containerMeasure').outerWidth()-width;if(offsetRight>winWidth){dropdown.css('right',rightCorrect)}})};mr.components.documentReady.push(mr.dropdowns.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.forms=mr.forms||{};mr.forms.captcha={};mr.forms.captcha.widgets=[];mr.forms.captcha.done=!1;mr.forms.documentReady=function($){mr.forms.captcha.widgets=[];$('.input-checkbox input[type="checkbox"], .input-radio input[type="radio"]').each(function(index){var input=$(this),label=input.siblings('label'),id='input-assigned-'+index;if(typeof input.attr('id')===typeof undefined||input.attr('id')===''){input.attr('id',id);label.attr('for',id)}else{id=input.attr('id');label.attr('for',id)}});$('.input-number__controls > span').off('click.mr').on('click.mr',function(){var control=jQuery(this),parent=control.closest('.input-number'),input=parent.find('input[type="number"]'),max=input.attr('max'),min=input.attr('min'),step=1,current=parseInt(input.val(),10);if(parent.is('[data-step]')){step=parseInt(parent.attr('data-step'),10)}
if(control.hasClass('input-number__increase')){if(current+step<=max){input.val(current+step)}}else{if(current-step>=min){input.val(current-step)}}});$('.input-file .btn').off('click.mr').on('click.mr',function(){$(this).siblings('input').trigger('click');return!1});$('form.form-email, form[action*="list-manage.com"], form[action*="createsend.com"]').attr('novalidate',!0).off('submit').on('submit',mr.forms.submit);$(document).on('change, input, paste, keyup','.attempted-submit .field-error',function(){$(this).removeClass('field-error')});$('form[data-recaptcha-sitekey]:not([data-recaptcha-sitekey=""])').each(function(){var $thisForm=jQuery(this),$captchaDiv=$thisForm.find('div.recaptcha'),$insertBefore,$column,widgetObject,$script,scriptSrc,widgetColourTheme,widgetSize;widgetColourTheme=$thisForm.attr('data-recaptcha-theme');widgetColourTheme=typeof widgetColourTheme!==typeof undefined?widgetColourTheme:'';widgetSize=$thisForm.attr('data-recaptcha-size');widgetSize=typeof widgetSize!==typeof undefined?widgetSize:'';mr.forms.captcha.sitekey=$thisForm.attr('data-recaptcha-sitekey');if($captchaDiv.length){}else{$insertBefore=$thisForm.find('button[type=submit]').closest('[class*="col-"]');$captchaDiv=jQuery('<div>').addClass('recaptcha');$column=jQuery('<div>').addClass('col-xs-12').append($captchaDiv);$column.insertBefore($insertBefore)}
widgetObject={element:$captchaDiv.get(0),parentForm:$thisForm,theme:widgetColourTheme,size:widgetSize};mr.forms.captcha.widgets.push(widgetObject);if(mr.forms.captcha.done===!1){if(!jQuery('script[src*="recaptcha/api.js"]').length){$script=jQuery('<script async defer>');scriptSrc='//www.google.com/recaptcha/api.js?onload=mrFormsCaptchaInit&render=explicit';$script.attr('src',scriptSrc);jQuery('body').append($script);mr.forms.captcha.done=!0}}else{if(typeof grecaptcha!==typeof undefined){mr.forms.captcha.renderWidgets()}}})};mr.forms.submit=function(e){if(e.preventDefault)e.preventDefault();else e.returnValue=!1;var body=$('body'),thisForm=$(e.target).closest('form'),formAction=typeof thisForm.attr('action')!==typeof undefined?thisForm.attr('action'):'',submitButton=thisForm.find('button[type="submit"], input[type="submit"]'),error=0,originalError=thisForm.attr('original-error'),captchaUsed=thisForm.find('div.recaptcha').length?!0:!1,successRedirect,formError,formSuccess,errorText,successText;body.find('.form-error, .form-success').remove();submitButton.attr('data-text',submitButton.text());errorText=thisForm.attr('data-error')?thisForm.attr('data-error'):'Please fill all fields correctly';successText=thisForm.attr('data-success')?thisForm.attr('data-success'):"Thanks, we'll be in touch shortly";body.append('<div class="form-error" style="display: none;">'+errorText+'</div>');body.append('<div class="form-success" style="display: none;">'+successText+'</div>');formError=body.find('.form-error');formSuccess=body.find('.form-success');thisForm.addClass('attempted-submit');if(formAction.indexOf('createsend.com')!==-1||formAction.indexOf('list-manage.com')!==-1){console.log('Mail list form signup detected.');if(typeof originalError!==typeof undefined&&originalError!==!1){formError.html(originalError)}
if(mr.forms.validateFields(thisForm)!==1){thisForm.removeClass('attempted-submit');formError.fadeOut(200);submitButton.addClass('btn--loading');try{$.ajax({url:thisForm.attr('action'),crossDomain:!0,data:thisForm.serialize(),method:'GET',cache:!1,dataType:'json',contentType:'application/json; charset=utf-8',success:function(data){if(data.result!=='success'&&data.Status!==200){formError.attr('original-error',formError.text());formError.html(data.msg).stop(!0).fadeIn(1000);formSuccess.stop(!0).fadeOut(1000);submitButton.removeClass('btn--loading')}else{submitButton.removeClass('btn--loading');successRedirect=thisForm.attr('data-success-redirect');if(typeof successRedirect!==typeof undefined&&successRedirect!==!1&&successRedirect!==''){window.location=successRedirect}else{mr.forms.resetForm(thisForm);mr.forms.showFormSuccess(formSuccess,formError,1000,5000,500)}}}})}catch(err){formError.attr('original-error',formError.text());formError.html(err.message);mr.forms.showFormError(formSuccess,formError,1000,5000,500);submitButton.removeClass('btn--loading')}}else{mr.forms.showFormError(formSuccess,formError,1000,5000,500)}}else{if(typeof originalError!==typeof undefined&&originalError!==!1){formError.text(originalError)}
error=mr.forms.validateFields(thisForm);if(error===1){mr.forms.showFormError(formSuccess,formError,1000,5000,500)}else{thisForm.removeClass('attempted-submit');formError.fadeOut(200);submitButton.addClass('btn--loading');jQuery.ajax({type:'POST',url:formAction!==''?formAction:'mail/mail.php',data:thisForm.serialize()+'&url='+window.location.href+'&captcha='+captchaUsed,success:function(response){submitButton.removeClass('btn--loading');if($.isNumeric(response)){if(parseInt(response,10)>0){successRedirect=thisForm.attr('data-success-redirect');if(typeof successRedirect!==typeof undefined&&successRedirect!==!1&&successRedirect!==''){window.location=successRedirect}
mr.forms.resetForm(thisForm);mr.forms.showFormSuccess(formSuccess,formError,1000,5000,500);mr.forms.captcha.resetWidgets()}}else{formError.attr('original-error',formError.text());formError.text(response).stop(!0).fadeIn(1000);formSuccess.stop(!0).fadeOut(1000)}},error:function(errorObject,errorText,errorHTTP){formError.attr('original-error',formError.text());formError.text(errorHTTP).stop(!0).fadeIn(1000);formSuccess.stop(!0).fadeOut(1000);submitButton.removeClass('btn--loading')}})}}
return!1};mr.forms.validateFields=function(form){var body=$(body),error=!1,originalErrorMessage,name,thisElement;form=$(form);form.find('.validate-required[type="checkbox"]').each(function(){var checkbox=$(this);if(!$('[name="'+$(this).attr('name')+'"]:checked').length){error=1;name=$(this).attr('data-name')||'check';checkbox.parent().addClass('field-error')}});form.find('.validate-required, .required, [required]').not('input[type="checkbox"]').each(function(){if($(this).val()===''){$(this).addClass('field-error');error=1}else{$(this).removeClass('field-error')}});form.find('.validate-email, .email, [name*="cm-"][type="email"]').each(function(){if(!/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())){$(this).addClass('field-error');error=1}else{$(this).removeClass('field-error')}});form.find('.validate-number-dash').each(function(){if(!/^[0-9][0-9-]+[0-9]$/.test($(this).val())){$(this).addClass('field-error');error=1}else{$(this).removeClass('field-error')}});if(form.find('div.recaptcha').length&&typeof form.attr('data-recaptcha-sitekey')!==typeof undefined){thisElement=$(form.find('div.recaptcha'));if(grecaptcha.getResponse(form.data('recaptchaWidgetID'))!==''){thisElement.removeClass('field-error')}else{thisElement.addClass('field-error');error=1}}
if(!form.find('.field-error').length){body.find('.form-error').fadeOut(1000)}else{var firstError=$(form).find('.field-error:first');if(firstError.length){$('html, body').stop(!0).animate({scrollTop:firstError.offset().top-100},1200,function(){firstError.focus()})}}
return error};mr.forms.showFormSuccess=function(formSuccess,formError,fadeOutError,wait,fadeOutSuccess){formSuccess.stop(!0).fadeIn(fadeOutError);formError.stop(!0).fadeOut(fadeOutError);setTimeout(function(){formSuccess.stop(!0).fadeOut(fadeOutSuccess)},wait)};mr.forms.showFormError=function(formSuccess,formError,fadeOutSuccess,wait,fadeOutError){formError.stop(!0).fadeIn(fadeOutSuccess);formSuccess.stop(!0).fadeOut(fadeOutSuccess);setTimeout(function(){formError.stop(!0).fadeOut(fadeOutError)},wait)};mr.forms.resetForm=function(form){form=$(form);form.get(0).reset();form.find('.input-radio, .input-checkbox').removeClass('checked');form.find('[data-default-value]').filter('[type="text"],[type="number"],[type="email"],[type="url"],[type="search"],[type="tel"]').each(function(){var elem=jQuery(this);elem.val(elem.attr('data-default-value'))})};window.mrFormsCaptchaInit=function(){mr.forms.captcha.renderWidgets()};mr.forms.captcha.renderWidgets=function(){mr.forms.captcha.widgets.forEach(function(widget){if(widget.element.innerHTML.replace(/[\s\xA0]+/g,'')===''){widget.id=grecaptcha.render(widget.element,{sitekey:mr.forms.captcha.sitekey,theme:widget.theme,size:widget.size,callback:mr.forms.captcha.setHuman});widget.parentForm.data('recaptchaWidgetID',widget.id)}})};mr.forms.captcha.resetWidgets=function(){mr.forms.captcha.widgets.forEach(function(widget){grecaptcha.reset(widget.id)})};mr.forms.captcha.setHuman=function(){jQuery('div.recaptcha.field-error').removeClass('field-error')};mr.components.documentReadyDeferred.push(mr.forms.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.granim=mr.granim||{};mr.granim.documentReady=function($){$('[data-gradient-bg]').each(function(index,element){var granimParent=$(this),granimID='granim-'+index+'',colours=granimParent.attr('data-gradient-bg'),pairs=[],tempPair=[],ao={},count,passes,i,themeDefaults,options;granimParent.prepend('<canvas id="'+granimID+'"></canvas>');passes=/^(#[0-9|a-f|A-F]{6}){1}([ ]*,[ ]*#[0-9|a-f|A-F]{6})*$/.test(colours);if(passes===!0){colours=colours.replace(' ','');colours=colours.split(',');count=colours.length;if(count%2!==0){colours.push(colours[count-1])}
for(i=0;i<count/2;i++){tempPair=[];tempPair.push(colours.shift());tempPair.push(colours.shift());pairs.push(tempPair)}
ao.states={'default-state':{gradients:pairs}}}
themeDefaults={element:'#'+granimID,name:'basic-gradient',direction:'left-right',opacity:[1,1],isPausedWhenNotInView:!0,states:{'default-state':{gradients:pairs}}};options=jQuery.extend({},themeDefaults,mr.granim.options,ao);$(this).data('gradientOptions',options);var granimElement=$(this);var granimInstance=new Granim(options)})};mr.components.documentReadyDeferred.push(mr.granim.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.instagram=mr.instagram||{};mr.instagram.documentReady=function($){var themeDefaults,options,ao={};if($('.instafeed').length){var token='4079540202.b9b1d8a.1d13c245c68d4a17bfbff87919aaeb14',client='b9b1d8ae049d4153b24a6332f0088686',elementToken,elementClient;if($('.instafeed[data-access-token][data-client-id]').length){elementToken=$('.instafeed[data-access-token][data-client-id]').first().attr('data-access-token');elementClient=$('.instafeed[data-access-token][data-client-id]').first().attr('data-client-id');if(elementToken!==''){token=elementToken}
if(elementClient!==''){client=elementClient}}
jQuery.fn.spectragram.accessData={accessToken:token,clientID:client}}
$('.instafeed').each(function(){var feed=$(this),feedID=feed.attr('data-user-name'),fetchNumber=12;themeDefaults={query:'mediumrarethemes',max:12};ao.max=feed.attr('data-amount');ao.query=feed.attr('data-user-name');options=jQuery.extend({},themeDefaults,mr.instagram.options,ao);feed.append('<ul></ul>');feed.children('ul').spectragram('getUserFeed',options)})};mr.components.documentReadyDeferred.push(mr.instagram.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.maps=mr.maps||{};mr.maps.options=mr.maps.options||{};mr.maps.documentReady=function($){$('.map-holder').on('click',function(){$(this).addClass('interact')}).removeClass('interact');var mapsOnPage=$('.map-container[data-maps-api-key]');if(mapsOnPage.length){mapsOnPage.addClass('gmaps-active');mr.maps.initAPI($);mr.maps.init()}};mr.maps.initAPI=function($){if(document.querySelector('[data-maps-api-key]')&&!document.querySelector('.gMapsAPI')){if($('[data-maps-api-key]').length){var script=document.createElement('script');var apiKey=$('[data-maps-api-key]:first').attr('data-maps-api-key');apiKey=typeof apiKey!==typeof undefined?apiKey:'';if(apiKey!==''){script.type='text/javascript';script.src='//maps.googleapis.com/maps/api/js?key='+apiKey+'&callback=mr.maps.init';script.className='gMapsAPI';document.body.appendChild(script)}}}};mr.maps.init=function(){if(typeof window.google!=='undefined'){if(typeof window.google.maps!=='undefined'){mr.maps.instances=[];jQuery('.gmaps-active').each(function(){var mapElement=this,mapInstance=jQuery(this),isDraggable=jQuery(document).width()>766?!0:!1,showZoomControl=typeof mapInstance.attr('data-zoom-controls')!==typeof undefined?!0:!1,zoomControlPos=typeof mapInstance.attr('data-zoom-controls')!==typeof undefined?mapInstance.attr('data-zoom-controls'):!1,latlong=typeof mapInstance.attr('data-latlong')!==typeof undefined?mapInstance.attr('data-latlong'):!1,latitude=latlong?1*latlong.substr(0,latlong.indexOf(',')):!1,longitude=latlong?1*latlong.substr(latlong.indexOf(',')+1):!1,geocoder=new google.maps.Geocoder(),address=typeof mapInstance.attr('data-address')!==typeof undefined?mapInstance.attr('data-address').split(';'):[''],map,marker,markerDefaults,mapDefaults,mapOptions,markerOptions,mapAo={},markerAo={},mapCreatedEvent;mapCreatedEvent=document.createEvent('Event');mapCreatedEvent.initEvent('mapCreated.maps.mr',!0,!0);mapDefaults={disableDefaultUI:!0,draggable:isDraggable,scrollwheel:!1,styles:[{featureType:'landscape',stylers:[{saturation:-100},{lightness:65},{visibility:'on'}]},{featureType:'poi',stylers:[{saturation:-100},{lightness:51},{visibility:'simplified'}]},{featureType:'road.highway',stylers:[{saturation:-100},{visibility:'simplified'}]},{featureType:'road.arterial',stylers:[{saturation:-100},{lightness:30},{visibility:'on'}]},{featureType:'road.local',stylers:[{saturation:-100},{lightness:40},{visibility:'on'}]},{featureType:'transit',stylers:[{saturation:-100},{visibility:'simplified'}]},{featureType:'administrative.province',stylers:[{visibility:'off'}]},{featureType:'water',elementType:'labels',stylers:[{visibility:'on'},{lightness:-25},{saturation:-100}]},{featureType:'water',elementType:'geometry',stylers:[{hue:'#ffff00'},{lightness:-25},{saturation:-97}]}],zoom:17,zoomControl:!1};mapAo.styles=typeof mapInstance.attr('data-map-style')!==typeof undefined?JSON.parse(mapInstance.attr('data-map-style')):undefined;mapAo.zoom=mapInstance.attr('data-map-zoom')?parseInt(mapInstance.attr('data-map-zoom'),10):undefined;mapAo.zoomControlOptions=zoomControlPos!==!1?{position:google.maps.ControlPosition[zoomControlPos]}:undefined;markerDefaults={icon:{url:(typeof mr_variant!==typeof undefined?'../':'')+'img/mapmarker.png',scaledSize:new google.maps.Size(50,50)},title:'We Are Here',optimised:!1};markerAo.icon=typeof mapInstance.attr('data-marker-image')!==typeof undefined?mapInstance.attr('data-marker-image'):undefined;markerAo.title=mapInstance.attr('data-marker-title');mapOptions=jQuery.extend({},mapDefaults,mr.maps.options.map,mapAo);markerOptions=jQuery.extend({},markerDefaults,mr.maps.options.marker,markerAo);if(address!==undefined&&address[0]!==''){geocoder.geocode({address:address[0].replace('[nomarker]','')},function(results,status){if(status===google.maps.GeocoderStatus.OK){map=new google.maps.Map(mapElement,mapOptions);mr.maps.instances.push(map);jQuery(mapElement).trigger('mapCreated.maps.mr').get(0).dispatchEvent(mapCreatedEvent);map.setCenter(results[0].geometry.location);address.forEach(function(address){var markerGeoCoder;if(/(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)/.test(address)){var latlong=address.split(','),marker=new google.maps.Marker(jQuery.extend({},markerOptions,{position:{lat:1*latlong[0],lng:1*latlong[1]},map:map}))}else if(address.indexOf('[nomarker]')<0){markerGeoCoder=new google.maps.Geocoder();markerGeoCoder.geocode({address:address.replace('[nomarker]','')},function(results,status){if(status===google.maps.GeocoderStatus.OK){marker=new google.maps.Marker(jQuery.extend({},markerOptions,{map:map,position:results[0].geometry.location}))}else{console.log('Map marker error: '+status)}})}})}else{console.log('There was a problem geocoding the address.')}})}else if(typeof latitude!==typeof undefined&&latitude!==''&&latitude!==!1&&typeof longitude!==typeof undefined&&longitude!==''&&longitude!==!1){mapOptions.center={lat:latitude,lng:longitude};map=new google.maps.Map(mapElement,mapOptions);marker=new google.maps.Marker(jQuery.extend({},markerOptions,{position:{lat:latitude,lng:longitude},map:map}));mr.maps.instances.push(map);jQuery(mapElement).trigger('mapCreated.maps.mr').get(0).dispatchEvent(mapCreatedEvent)}})}}};mr.components.documentReady.push(mr.maps.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.masonry=mr.masonry||{};mr.masonry.documentReady=function($){mr.masonry.updateFilters();$(document).on('click touchstart','.masonry__filters li:not(.js-no-action)',function(){var masonryFilter=$(this);var masonryContainer=masonryFilter.closest('.masonry').find('.masonry__container');var filterValue='*';if(masonryFilter.attr('data-masonry-filter')!=='*'){filterValue='.filter-'+masonryFilter.attr('data-masonry-filter')}
masonryFilter.siblings('li').removeClass('active');masonryFilter.addClass('active');masonryContainer.removeClass('masonry--animate');masonryContainer.on('layoutComplete',function(){$(this).addClass('masonry--active');if(typeof mr_parallax!==typeof undefined){setTimeout(function(){mr_parallax.profileParallaxElements()},100)}});masonryContainer.isotope({filter:filterValue})})};mr.masonry.windowLoad=function(){$('.masonry').each(function(){var masonry=$(this).find('.masonry__container'),masonryParent=$(this),defaultFilter='*',themeDefaults,ao={};themeDefaults={itemSelector:'.masonry__item',filter:'*',masonry:{columnWidth:'.masonry__item'}};if(masonryParent.is('[data-default-filter]')){defaultFilter=masonryParent.attr('data-default-filter').toLowerCase();defaultFilter='.filter-'+defaultFilter;masonryParent.find('li[data-masonry-filter]').removeClass('active');masonryParent.find('li[data-masonry-filter="'+masonryParent.attr('data-default-filter').toLowerCase()+'"]').addClass('active')}
ao.filter=defaultFilter!=='*'?defaultFilter:undefined;masonry.on('layoutComplete',function(){masonry.addClass('masonry--active');if(typeof mr_parallax!==typeof undefined){setTimeout(function(){mr_parallax.profileParallaxElements()},100)}});masonry.isotope(jQuery.extend({},themeDefaults,mr.masonry.options,ao))})};mr.masonry.updateFilters=function(masonry){masonry=typeof masonry!==typeof undefined?masonry:'.masonry';var $masonry=$(masonry);$masonry.each(function(){var $masonry=$(this),masonryContainer=$masonry.find('.masonry__container'),filters=$masonry.find('.masonry__filters'),filterAllText=typeof filters.attr('data-filter-all-text')!==typeof undefined?filters.attr('data-filter-all-text'):'All',filtersList;if($masonry.is('.masonry')){if(masonryContainer.find('.masonry__item[data-masonry-filter]').length){filtersList=filters.find('> ul');if(!filtersList.length){filtersList=filters.append('<ul></ul>').find('> ul')}
masonryContainer.find('.masonry__item[data-masonry-filter]').each(function(){var masonryItem=$(this),filterString=masonryItem.attr('data-masonry-filter'),filtersArray=[];if(typeof filterString!==typeof undefined&&filterString!==''){filtersArray=filterString.split(',')}
$(filtersArray).each(function(index,tag){var slug=mr.util.slugify(tag);masonryItem.addClass('filter-'+slug);if(!filtersList.find('[data-masonry-filter="'+slug+'"]').length){filtersList.append('<li data-masonry-filter="'+slug+'">'+tag+'</li>')}})});filtersList.find('[data-masonry-filter]').each(function(){var $this=$(this),filter=$this.text();if($(this).attr('data-masonry-filter')!=='*'){if(!$masonry.find('.masonry__item[data-masonry-filter*="'+filter+'"]').length){$this.remove()}}});mr.util.sortChildrenByText($(this).find('.masonry__filters ul'));if(!filtersList.find('[data-masonry-filter="*"]').length){filtersList.prepend('<li class="active" data-masonry-filter="*">'+filterAllText+'</li>')}}}})};mr.masonry.updateLayout=function(masonry){masonry=typeof masonry!==typeof undefined?masonry:'.masonry';var $masonry=$(masonry);$masonry.each(function(){var collection=$(this),newItems=collection.find('.masonry__item:not([style])'),masonryContainer=collection.find('.masonry__container');if(collection.is('.masonry')){if(newItems.length){masonryContainer.isotope('appended',newItems).isotope('layout')}
masonryContainer.isotope('layout')}})};mr.components.documentReady.push(mr.masonry.documentReady);mr.components.windowLoad.push(mr.masonry.windowLoad);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.modals=mr.modals||{};mr.modals.documentReady=function($){var allPageModals='<div class="all-page-modals"></div>',mainContainer=$('div.main-container');if(mainContainer.length){jQuery(allPageModals).insertAfter(mainContainer);mr.modals.allModalsContainer=$('div.all-page-modals')}else{jQuery('body').append(allPageModals);mr.modals.allModalsContainer=jQuery('body div.all-page-modals')}
$('.modal-container').each(function(){var modal=$(this),$window=$(window),modalContent=modal.find('.modal-content');if(!modal.find('.modal-close').length){modal.find('.modal-content').append('<div class="modal-close modal-close-cross"></div>')}
if(modalContent.attr('data-width')!==undefined){var modalWidth=modalContent.attr('data-width').substr(0,modalContent.attr('data-width').indexOf('%'))*1;modalContent.css('width',modalWidth+'%')}
if(modalContent.attr('data-height')!==undefined){var modalHeight=modalContent.attr('data-height').substr(0,modalContent.attr('data-height').indexOf('%'))*1;modalContent.css('height',modalHeight+'%')}
mr.util.idleSrc(modal,'iframe')});$('.modal-instance').each(function(index){var modalInstance=$(this);var modal=modalInstance.find('.modal-container');var modalContent=modalInstance.find('.modal-content');var trigger=modalInstance.find('.modal-trigger');trigger.attr('data-modal-index',index);modal.attr('data-modal-index',index);if(typeof modal.attr('data-modal-id')!==typeof undefined){trigger.attr('data-modal-id',modal.attr('data-modal-id'))}
modal=modal.detach();mr.modals.allModalsContainer.append(modal)});$('.modal-trigger').on('click',function(){var modalTrigger=$(this);var uniqueID,targetModal;if(typeof modalTrigger.attr('data-modal-id')!==typeof undefined){uniqueID=modalTrigger.attr('data-modal-id');targetModal=mr.modals.allModalsContainer.find('.modal-container[data-modal-id="'+uniqueID+'"]')}else{uniqueID=$(this).attr('data-modal-index');targetModal=mr.modals.allModalsContainer.find('.modal-container[data-modal-index="'+uniqueID+'"]')}
mr.util.activateIdleSrc(targetModal,'iframe');mr.modals.autoplayVideo(targetModal);mr.modals.showModal(targetModal);return!1});jQuery(document).on('click','.modal-close',mr.modals.closeActiveModal);jQuery(document).keyup(function(e){if(e.keyCode===27){mr.modals.closeActiveModal()}});$('.modal-container:not(.modal--prevent-close)').on('click',function(e){if(e.target!==this)return;mr.modals.closeActiveModal()});$('.modal-container[data-autoshow]').each(function(){var modal=$(this);var millisecondsDelay=modal.attr('data-autoshow')*1;mr.util.activateIdleSrc(modal);mr.modals.autoplayVideo(modal);if(typeof modal.attr('data-cookie')!==typeof undefined){if(!mr.cookies.hasItem(modal.attr('data-cookie'))){mr.modals.showModal(modal,millisecondsDelay)}}else{mr.modals.showModal(modal,millisecondsDelay)}});$('.modal-container[data-show-on-exit]').each(function(){var modal=jQuery(this),exitSelector=modal.attr('data-show-on-exit'),delay=0;if(modal.attr('data-delay')){delay=parseInt(modal.attr('data-delay'),10)||0}
if($(exitSelector).length){modal.prepend($('<i class="ti-close close-modal">'));jQuery(document).on('mouseleave',exitSelector,function(){if(!$('.modal-active').length){if(typeof modal.attr('data-cookie')!==typeof undefined){if(!mr.cookies.hasItem(modal.attr('data-cookie'))){mr.modals.showModal(modal,delay)}}else{mr.modals.showModal(modal,delay)}}})}});if(window.location.href.split('#').length===2){var modalID=window.location.href.split('#').pop();if($('[data-modal-id="'+modalID+'"]').length){mr.modals.closeActiveModal();mr.modals.showModal($('[data-modal-id="'+modalID+'"]'))}}
jQuery(document).on('click','a[href^="#"]',function(){var modalID=$(this).attr('href').replace('#','');if($('[data-modal-id="'+modalID+'"]').length){mr.modals.closeActiveModal();setTimeout(mr.modals.showModal,500,'[data-modal-id="'+modalID+'"]',0)}});jQuery(document).on('wheel mousewheel scroll','.modal-content, .modal-content .scrollable',function(evt){if(evt.preventDefault){evt.preventDefault()}
if(evt.stopPropagation){evt.stopPropagation()}
this.scrollTop+=evt.originalEvent.deltaY})};mr.modals.showModal=function(modal,millisecondsDelay){var delay=typeof millisecondsDelay!==typeof undefined?1*millisecondsDelay:0,$modal=$(modal);if($modal.length){setTimeout(function(){var openEvent=document.createEvent('Event');openEvent.initEvent('modalOpened.modals.mr',!0,!0);$(modal).addClass('modal-active').trigger('modalOpened.modals.mr').get(0).dispatchEvent(openEvent)},delay)}};mr.modals.closeActiveModal=function(){var modal=jQuery('body div.modal-active'),closeEvent=document.createEvent('Event');mr.util.idleSrc(modal,'iframe');mr.util.pauseVideo(modal);if(typeof modal.attr('data-cookie')!==typeof undefined){mr.cookies.setItem(modal.attr('data-cookie'),'true',Infinity,'/')}
if(modal.length){if(modal.is('[data-modal-id]')&&window.location.hash==='#'+modal.attr('data-modal-id')){mr.util.removeHash()}
closeEvent.initEvent('modalClosed.modals.mr',!0,!0);modal.removeClass('modal-active').trigger('modalClosed.modals.mr').get(0).dispatchEvent(closeEvent)}};mr.modals.autoplayVideo=function(modal){if(modal.find('video[autoplay]').length){var video=modal.find('video').get(0);video.play()}};mr.components.documentReady.push(mr.modals.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.newsletters=mr.newsletters||{};mr.newsletters.documentReady=function($){var form,checkbox,label,id,parent,radio;$('form[action*="createsend.com"]').each(function(){form=$(this);form.attr('novalidate','novalidate');if(!form.is('.form--no-placeholders')){form.find('input:not([checkbox]):not([radio])').each(function(){var $input=$(this);if(typeof $input.attr('placeholder')!==typeof undefined){if($input.attr('placeholder')===''){if($input.siblings('label').length){$input.attr('placeholder',$input.siblings('label').first().text());if(form.is('.form--no-labels')){$input.siblings('label').first().remove()}}}}else if($input.siblings('label').length){$input.attr('placeholder',$input.siblings('label').first().text());if(form.is('.form--no-labels')){$input.siblings('label').first().remove()}}
if($input.parent().is('p')){$input.unwrap()}})}else{form.find('input[placeholder]').removeAttr('placeholder')}
form.find('select').wrap('<div class="input-select"></div>');form.find('input[type="radio"]').wrap('<div class="input-radio"></div>');form.find('input[type="checkbox"]').each(function(){checkbox=$(this);id=checkbox.attr('id');label=form.find('label[for='+id+']');if(!label.length){label=$('<label for="'+id+'"></label>')}
checkbox.before('<div class="input-checkbox" data-id="'+id+'"></div>');$('.input-checkbox[data-id="'+id+'"]').prepend(checkbox);$('.input-checkbox[data-id="'+id+'"]').prepend(label)});form.find('button[type="submit"]').each(function(){var button=$(this);button.addClass('btn');if(button.parent().is('p')){button.unwrap()}});form.find('[required]').attr('required','required').addClass('validate-required');form.addClass('form--active');mr.newsletters.prepareAjaxAction(form)});$('form[action*="list-manage.com"]').each(function(){form=$(this);form.attr('novalidate','novalidate');if(!form.is('.form--no-placeholders')){form.find('input:not([checkbox]):not([radio])').each(function(){var $input=$(this);if(typeof $input.attr('placeholder')!==typeof undefined){if($input.attr('placeholder')===''){if($input.siblings('label').length){$input.attr('placeholder',$input.siblings('label').first().text());if(form.is('.form--no-labels')){$input.siblings('label').first().remove()}}}}else if($input.siblings('label').length){$input.attr('placeholder',$input.siblings('label').first().text());if(form.is('.form--no-labels')){$input.siblings('label').first().remove()}}})}else{form.find('input[placeholder]').removeAttr('placeholder')}
if(form.is('.form--no-labels')){form.find('input:not([checkbox]):not([radio])').each(function(){var $input=$(this);if($input.siblings('label').length){$input.siblings('label').first().remove()}})}
form.find('select').wrap('<div class="input-select"></div>');form.find('input[type="checkbox"]').each(function(){checkbox=jQuery(this);parent=checkbox.parent();label=parent.find('label');if(!label.length){label=jQuery('<label>')}
checkbox.before('<div class="input-checkbox"></div>');parent.find('.input-checkbox').append(checkbox);parent.find('.input-checkbox').append(label)});form.find('input[type="radio"]').each(function(){radio=jQuery(this);parent=radio.closest('li');label=parent.find('label');if(!label.length){label=jQuery('<label>')}
radio.before('<div class="input-radio"></div>');parent.find('.input-radio').prepend(radio);parent.find('.input-radio').prepend(label)});form.find('input[type="submit"]').each(function(){var submit=$(this);var newButton=jQuery('<button/>').attr('type','submit').attr('class',submit.attr('class')).addClass('btn').text(submit.attr('value'));if(submit.parent().is('div.clear')){submit.unwrap()}
newButton.insertBefore(submit);submit.remove()});form.find('input').each(function(){var input=$(this);if(input.hasClass('required')){input.removeClass('required').addClass('validate-required')}});form.find('input[type="email"]').removeClass('email').addClass('validate-email');form.find('#mce-responses').remove();form.find('.mc-field-group').each(function(){$(this).children().first().unwrap()});form.find('[required]').attr('required','required').addClass('validate-required');form.addClass('form--active');mr.newsletters.prepareAjaxAction(form)});mr.forms.documentReady(mr.setContext('form.form--active'))};mr.newsletters.prepareAjaxAction=function(form){var action=$(form).attr('action');if(/list-manage\.com/.test(action)){action=action.replace('/post?','/post-json?')+'&c=?';if(action.substr(0,2)==='//'){action='http:'+action}}
if(/createsend\.com/.test(action)){action=action+'?callback=?'}
$(form).attr('action',action)};mr.components.documentReady.push(mr.newsletters.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.notifications=mr.notifications||{};mr.notifications.documentReady=function($){$('.notification').each(function(){var notification=$(this);if(!notification.find('.notification-close').length){notification.append('<div class="notification-close-cross notification-close"></div>')}});$('.notification[data-autoshow]').each(function(){var notification=$(this);var millisecondsDelay=parseInt(notification.attr('data-autoshow'),10);if(typeof notification.attr('data-cookie')!==typeof undefined){if(!mr.cookies.hasItem(notification.attr('data-cookie'))){mr.notifications.showNotification(notification,millisecondsDelay)}}else{mr.notifications.showNotification(notification,millisecondsDelay)}});$('[data-notification-link]:not(.notification)').on('click',function(){var notificationID=jQuery(this).attr('data-notification-link');var notification=$('.notification[data-notification-link="'+notificationID+'"]');jQuery('.notification--reveal').addClass('notification--dismissed');notification.removeClass('notification--dismissed');mr.notifications.showNotification(notification,0);return!1});$('.notification-close').on('click',function(){var closeButton=jQuery(this);mr.notifications.closeNotification(closeButton);if(closeButton.attr('href')==='#'){return!1}});$('.notification .inner-link').on('click',function(){var notificationLink=jQuery(this).closest('.notification').attr('data-notification-link');mr.notifications.closeNotification(notificationLink)})};mr.notifications.showNotification=function(notification,millisecondsDelay){var $notification=jQuery(notification),delay=typeof millisecondsDelay!==typeof undefined?1*millisecondsDelay:0,openEvent=document.createEvent('Event');setTimeout(function(){openEvent.initEvent('notificationOpened.notifications.mr',!0,!0);$notification.addClass('notification--reveal').trigger('notificationOpened.notifications.mr').get(0).dispatchEvent(openEvent);$notification.closest('nav').addClass('notification--reveal');if($notification.find('input').length){$notification.find('input').first().focus()}},delay);if(notification.is('[data-autohide]')){var hideDelay=parseInt(notification.attr('data-autohide'),10);setTimeout(function(){mr.notifications.closeNotification(notification)},hideDelay+delay)}};mr.notifications.closeNotification=function(notification){var $notification=jQuery(notification),closeEvent=document.createEvent('Event');notification=$notification.is('.notification')?$notification:$notification.is('.notification-close')?$notification.closest('.notification'):$('.notification[data-notification-link="'+notification+'"]');closeEvent.initEvent('notificationClosed.notifications.mr',!0,!0);notification.addClass('notification--dismissed').trigger('notificationClosed.notifications.mr').get(0).dispatchEvent(closeEvent);notification.closest('nav').removeClass('notification--reveal');if(typeof notification.attr('data-cookie')!==typeof undefined){mr.cookies.setItem(notification.attr('data-cookie'),'true',Infinity,'/')}};mr.components.documentReady.push(mr.notifications.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.parallax=mr.parallax||{};mr.parallax.documentReady=function($){var $window=$(window);var windowWidth=$window.width();var windowHeight=$window.height();var navHeight=$('nav').outerHeight(!0);if(windowWidth>768){var parallaxHero=$('.parallax:nth-of-type(1)'),parallaxHeroImage=$('.parallax:nth-of-type(1) .background-image-holder');parallaxHeroImage.css('top',-navHeight);if(parallaxHero.outerHeight(!0)===windowHeight){parallaxHeroImage.css('height',windowHeight+navHeight)}}};mr.parallax.update=function(){if(typeof mr_parallax!==typeof undefined){mr_parallax.profileParallaxElements();mr_parallax.mr_parallaxBackground()}};mr.components.documentReady.push(mr.parallax.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.progressHorizontal=mr.progressHorizontal||{};mr.progressHorizontal.documentReady=function($){var progressBars=[];$('.progress-horizontal').each(function(){var bar=jQuery(this).find('.progress-horizontal__bar'),barObject={},progress=jQuery('<div class="progress-horizontal__progress"></div>');bar.prepend(progress);barObject.element=bar;barObject.progress=progress;barObject.value=parseInt(bar.attr('data-value'),10)+'%';barObject.offsetTop=bar.offset().top;barObject.animate=!1;if(jQuery(this).hasClass('progress-horizontal--animate')){barObject.animate=!0}else{progress.css('width',barObject.value)}
progressBars.push(barObject)})};mr.components.documentReady.push(mr.progressHorizontal.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.easypiecharts=mr.easypiecharts||{};mr.easypiecharts.pies=[];mr.easypiecharts.options=mr.easypiecharts.options||{};mr.easypiecharts.documentReady=function($){$('.radial').each(function(){var chart=jQuery(this),value=0,color='#000000',time=2000,pieSize=110,barWidth=3,defaults={},attributeOverrides={},options;defaults={animate:{duration:time,enabled:!0},barColor:color,scaleColor:!1,size:pieSize,lineWidth:barWidth};if(typeof mr.easypiecharts.options.size!==typeof undefined){pieSize=mr.easypiecharts.options.size}
if(typeof chart.attr('data-timing')!==typeof undefined){attributeOverrides.animate={duration:parseInt(chart.attr('data-timing'),10),enabled:!0}}
if(typeof chart.attr('data-color')!==typeof undefined){attributeOverrides.barColor=chart.attr('data-color')}
if(typeof chart.attr('data-size')!==typeof undefined){pieSize=attributeOverrides.size=parseInt(chart.attr('data-size'),10)}
if(typeof chart.attr('data-bar-width')!==typeof undefined){attributeOverrides.lineWidth=parseInt(chart.attr('data-bar-width'),10)}
chart.css('height',pieSize).css('width',pieSize);if(typeof mr.easypiecharts.options==='object'){options=jQuery.extend({},defaults,mr.easypiecharts.options,attributeOverrides)}
chart.easyPieChart(options);chart.data('easyPieChart').update(0)});if($('.radial').length){mr.easypiecharts.init();mr.easypiecharts.activate();mr.scroll.listeners.push(mr.easypiecharts.activate)}};mr.easypiecharts.init=function(){mr.easypiecharts.pies=[];$('.radial').each(function(){var pieObject={},currentPie=jQuery(this);pieObject.element=currentPie;pieObject.value=parseInt(currentPie.attr('data-value'),10);pieObject.top=currentPie.offset().top;pieObject.height=currentPie.height()/2;pieObject.active=!1;mr.easypiecharts.pies.push(pieObject)})};mr.easypiecharts.activate=function(){mr.easypiecharts.pies.forEach(function(pie){if(Math.round(mr.scroll.y+mr.window.height)>=Math.round(pie.top+pie.height)){if(pie.active===!1){pie.element.data('easyPieChart').enableAnimation();pie.element.data('easyPieChart').update(pie.value);pie.element.addClass('radial--active');pie.active=!0}}})};mr.components.documentReadyDeferred.push(mr.easypiecharts.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.sliders=mr.sliders||{};mr.sliders.documentReady=function($){$('.slider').each(function(index){var slider=$(this);var sliderInitializer=slider.find('ul.slides');sliderInitializer.find('>li').addClass('slide');var childnum=sliderInitializer.find('li').length;var themeDefaults={cellSelector:'.slide',cellAlign:'left',wrapAround:!0,pageDots:!1,prevNextButtons:!1,autoPlay:!0,draggable:childnum<2?!1:!0,imagesLoaded:!0,accessibility:!0,rightToLeft:!1,initialIndex:0,freeScroll:!1};var ao={};ao.pageDots=slider.attr('data-paging')==='true'&&sliderInitializer.find('li').length>1?!0:undefined;ao.prevNextButtons=slider.attr('data-arrows')==='true'?!0:undefined;ao.draggable=slider.attr('data-draggable')==='false'?!1:undefined;ao.autoPlay=slider.attr('data-autoplay')==='false'?!1:slider.attr('data-timing')?parseInt(slider.attr('data-timing'),10):undefined;ao.accessibility=slider.attr('data-accessibility')==='false'?!1:undefined;ao.rightToLeft=slider.attr('data-rtl')==='true'?!0:undefined;ao.initialIndex=slider.attr('data-initial')?parseInt(slider.attr('data-initial'),10):undefined;ao.freeScroll=slider.attr('data-freescroll')==='true'?!0:undefined;slider.attr('data-children',childnum);$(this).data('sliderOptions',jQuery.extend({},themeDefaults,mr.sliders.options,ao));$(sliderInitializer).flickity($(this).data('sliderOptions'));$(sliderInitializer).on('scroll.flickity',function(event,progress){if(slider.find('.is-selected').hasClass('controls--dark')){slider.addClass('controls--dark')}else{slider.removeClass('controls--dark')}})});if(mr.parallax.update){mr.parallax.update()}};mr.components.documentReadyDeferred.push(mr.sliders.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.smoothscroll=mr.smoothscroll||{};mr.smoothscroll.sections=[];mr.smoothscroll.init=function(){mr.smoothscroll.sections=[];$('a.inner-link').each(function(){var sectionObject={},link=$(this),href=link.attr('href'),validLink=new RegExp('^#[^\r\n\t\f\v#.]+$','gm');if(validLink.test(href)){if($('section'+href).length){sectionObject.id=href;sectionObject.top=Math.round($(href).offset().top);sectionObject.height=Math.round($(href).outerHeight());sectionObject.link=link.get(0);sectionObject.active=!1;mr.smoothscroll.sections.push(sectionObject)}}});mr.smoothscroll.highlight()};mr.smoothscroll.highlight=function(){mr.smoothscroll.sections.forEach(function(section){if(mr.scroll.y>=section.top&&mr.scroll.y<section.top+section.height){if(section.active===!1){section.link.classList.add('inner-link--active');section.active=!0}}else{section.link.classList.remove('inner-link--active');section.active=!1}})};mr.scroll.listeners.push(mr.smoothscroll.highlight);mr.smoothscroll.documentReady=function($){var innerLinks=$('a.inner-link'),offset,themeDefaults,ao={};themeDefaults={selector:'.inner-link',selectorHeader:null,speed:750,easing:'easeInOutCubic',offset:0};if(innerLinks.length){innerLinks.each(function(index){var link=$(this),href=link.attr('href');if(href.charAt(0)!=='#'){link.removeClass('inner-link')}});mr.smoothscroll.init();$(window).on('resize',mr.smoothscroll.init);offset=0;if($('body[data-smooth-scroll-offset]').length){offset=$('body').attr('data-smooth-scroll-offset');offset=offset*1}
ao.offset=offset!==0?offset:undefined;smoothScroll.init(jQuery.extend({},themeDefaults,mr.smoothscroll.options,ao))}};mr.components.documentReady.push(mr.smoothscroll.documentReady);mr.components.windowLoad.push(mr.smoothscroll.init);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.tabs=mr.tabs||{};mr.tabs.documentReady=function($){$('.tabs').each(function(){var tabs=$(this);tabs.after('<ul class="tabs-content">');tabs.find('li').each(function(){var currentTab=$(this),tabContent=currentTab.find('.tab__content').wrap('<li></li>').parent(),tabContentClone=tabContent.clone(!0,!0);tabContent.remove();currentTab.closest('.tabs-container').find('.tabs-content').append(tabContentClone)})});$('.tabs > li').on('click',function(){var clickedTab=$(this),hash;mr.tabs.activateTab(clickedTab);if(clickedTab.is('[id]')){hash='#'+clickedTab.attr('id');if(history.pushState){history.pushState(null,null,hash)}else{location.hash=hash}}});$('.tabs li.active').each(function(){mr.tabs.activateTab(this)});if(window.location.hash!==''){mr.tabs.activateTabById(window.location.hash)}
$('a[href^="#"]').on('click',function(){mr.tabs.activateTabById($(this).attr('href'))})};mr.tabs.activateTab=function(tab){var clickedTab=$(tab),tabContainer=clickedTab.closest('.tabs-container'),activeIndex=clickedTab.index()*1+1,activeContent=tabContainer.find('> .tabs-content > li:nth-of-type('+activeIndex+')'),openEvent=document.createEvent('Event'),iframe,radial;openEvent.initEvent('tabOpened.tabs.mr',!0,!0);tabContainer.find('> .tabs > li').removeClass('active');tabContainer.find('> .tabs-content > li').removeClass('active');clickedTab.addClass('active').trigger('tabOpened.tabs.mr').get(0).dispatchEvent(openEvent);activeContent.addClass('active');iframe=activeContent.find('iframe');if(iframe.length){iframe.attr('src',iframe.attr('src'))}};mr.tabs.activateTabById=function(id){if(id!==''&&id!=='#'){if($('.tabs > li#'+id.replace('#','')).length){$('.tabs > li#'+id.replace('#','')).click()}}};mr.components.documentReady.push(mr.tabs.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.toggleClass=mr.toggleClass||{};mr.toggleClass.documentReady=function($){$('[data-toggle-class]').each(function(){var element=$(this),data=element.attr('data-toggle-class').split('|');$(data).each(function(){var candidate=element,dataArray=[],toggleClass='',toggleElement='',dataArray=this.split(';');if(dataArray.length===2){toggleElement=dataArray[0];toggleClass=dataArray[1];$(candidate).on('click',function(){if(!candidate.hasClass('toggled-class')){candidate.toggleClass('toggled-class')}else{candidate.removeClass('toggled-class')}
$(toggleElement).toggleClass(toggleClass);return!1})}else{console.log('Error in [data-toggle-class] attribute. This attribute accepts an element, or comma separated elements terminated witha ";" followed by a class name to toggle')}})})};mr.components.documentReady.push(mr.toggleClass.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.typed=mr.typed||{};mr.typed.documentReady=function($){$('.typed-text').each(function(){var text=$(this);var strings=text.attr('data-typed-strings')?text.attr('data-typed-strings').split(','):[],themeDefaults={strings:[],typeSpeed:100,loop:!0,showCursor:!1},ao={};ao.strings=text.attr('data-typed-strings')?text.attr('data-typed-strings').split(','):undefined;$(text).typed(jQuery.extend({},themeDefaults,mr.typed.options,ao))})};mr.components.documentReady.push(mr.typed.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.twitter=mr.twitter||{};mr.twitter.options=mr.twitter.options||{};mr.twitter.documentReady=function($){$('.tweets-feed').each(function(index){$(this).attr('id','tweets-'+index)}).each(function(index){var element=$('#tweets-'+index);var TweetConfig={domId:'',maxTweets:6,enableLinks:!0,showUser:!0,showTime:!0,dateFunction:'',showRetweet:!1,customCallback:handleTweets};TweetConfig=jQuery.extend(TweetConfig,mr.twitter.options);if(typeof element.attr('data-widget-id')!==typeof undefined){TweetConfig.id=element.attr('data-widget-id')}else if(typeof element.attr('data-feed-name')!==typeof undefined&&element.attr('data-feed-name')!==''){TweetConfig.profile={screenName:element.attr('data-feed-name').replace('@','')}}else if(typeof mr.twitter.options.profile!==typeof undefined){TweetConfig.profile={screenName:mr.twitter.options.profile.replace('@','')}}else{TweetConfig.profile={screenName:'twitter'}}
TweetConfig.maxTweets=element.attr('data-amount')?element.attr('data-amount'):TweetConfig.maxTweets;if(element.closest('.twitter-feed--slider').length){element.addClass('slider')}
function handleTweets(tweets){var x=tweets.length;var n=0;var html='<ul class="slides">';while(n<x){html+='<li>'+tweets[n]+'</li>';n++}
html+='</ul>';element.html(html);if(element.closest('.slider').length){mr.sliders.documentReady(mr.setContext());return html}}
twitterFetcher.fetch(TweetConfig)})};mr.components.documentReady.push(mr.twitter.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.video=mr.video||{};mr.video.options=mr.video.options||{};mr.video.options.ytplayer=mr.video.options.ytplayer||{};mr.video.documentReady=function($){if($('.youtube-background').length){$('.youtube-background').each(function(){var player=$(this),themeDefaults={containment:'self',autoPlay:!0,mute:!0,opacity:1},ao={};ao.videoURL=$(this).attr('data-video-url');ao.startAt=$(this).attr('data-start-at')?parseInt($(this).attr('data-start-at'),10):undefined;player.closest('.videobg').append('<div class="loading-indicator"></div>');player.YTPlayer(jQuery.extend({},themeDefaults,mr.video.options.ytplayer,ao));player.on('YTPStart',function(){player.closest('.videobg').addClass('video-active')})})}
if($('.videobg').find('video').length){$('.videobg').find('video').closest('.videobg').addClass('video-active')}
$('.video-cover').each(function(){var videoCover=$(this);if(videoCover.find('iframe[src]').length){videoCover.find('iframe').attr('data-src',videoCover.find('iframe').attr('src'));videoCover.find('iframe').attr('src','')}});$('.video-cover .video-play-icon').on('click',function(){var playIcon=$(this);var videoCover=playIcon.closest('.video-cover');if(videoCover.find('video').length){var video=videoCover.find('video').get(0);videoCover.addClass('reveal-video');video.play();return!1}else if(videoCover.find('iframe').length){var iframe=videoCover.find('iframe');iframe.attr('src',iframe.attr('data-src'));videoCover.addClass('reveal-video');return!1}})};mr.components.documentReady.push(mr.video.documentReady);return mr})(mr,jQuery,window,document);mr=(function(mr,$,window,document){'use strict';mr.wizard=mr.wizard||{};mr.wizard.documentReady=function($){$('.wizard').each(function(){var wizard=jQuery(this),themeDefaults={};themeDefaults={headerTag:'h5',bodyTag:'section',transitionEffect:'slideLeft',autoFocus:!0};if(!wizard.is('[role="application"][id^="steps-uid"]')){wizard.steps(jQuery.extend({},themeDefaults,mr.wizard.options));wizard.addClass('active')}})};mr.components.documentReady.push(mr.wizard.documentReady);return mr})(mr,jQuery,window,document)
;(function(){var cx='007537208410189724561:6nw3z_srheu';var gcse=document.createElement('script');gcse.type='text/javascript';gcse.async=!0;gcse.src=(document.location.protocol=='https:'?'https:':'http:')+'//www.google.com/cse/cse.js?cx='+cx;var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(gcse,s)})();function cse(){var input=document.getElementById('search');var element=google.search.cse.element.getElement('searchresults-only0');if(input.value===''){$('section.search').addClass('hidden');element.clearAllResults()}else{$('section.search').removeClass('hidden');element.execute(input.value)}
return!1}(function(){var bsa=document.createElement('script');bsa.type='text/javascript';bsa.async=!0;bsa.src='//s3.buysellads.com/ac/bsa.js';(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(bsa)})();(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src='//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=1839871239373637&autoLogAppEvents=1';fjs.parentNode.insertBefore(js,fjs)}(document,'script','facebook-jssdk'));(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src='//platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs)})(document,'script','twiter-wjs');(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;(i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)}),(i[r].l=1*new Date());(a=s.createElement(o)),(m=s.getElementsByTagName(o)[0]);a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-50062-36','auto',{allowLinker:!0});ga('require','linker');ga('require','linkid');ga('linker:autoLink',['labnol.org','ctrlq.org','digitalinspiration.com','htmlmail.io','dictation.io','emailextract.pro','forms.studio','googleusercontent.com']);ga('send','pageview');var $=jQuery.noConflict()
;