!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],s=n[l]||0,d="".concat(l," ").concat(s);n[l]=s+1;var u=c(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:b(f,t),references:1}),r.push(d)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function b(e,t){var n,r,o;if(t.singleton){var a=h++;n=p||(p=s(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=s(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=l(e,t),s=0;s<n.length;s++){var d=c(n[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=a}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"/* Reset */\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 16px;\r\n}\r\n  \r\n*, *:before, *:after {\r\n  box-sizing: inherit;\r\n}\r\n  \r\nbody, h1, h2, h3, h4, h5, h6, p, ol, ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: normal;\r\n}\r\n  \r\nol, ul {\r\n  list-style: none;\r\n}\r\n  \r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/******************/\r\n\r\n* {\r\n\tfont-family: sans-serif;\r\n}\r\n\r\nbody {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: #872f29;\r\n}\r\n\r\nheader {\r\n\twidth: 80%;\r\n\theight: 20%;\r\n\tmargin: auto;\r\n\ttext-align: center;\r\n\toverflow: hidden;\r\n\tbackground: rgb(135,47,41);\r\n\tbackground: linear-gradient(180deg, rgba(135,47,41,1) 50%, rgba(209,74,65,1) 100%);\r\n\tcolor: #f7f4df;\r\n\tfont-size: 4rem;\r\n\tline-height: 350%;\r\n}\r\n\r\n#restaurantImage {\r\n\theight: 250px;\r\n\twidth: auto;\r\n\tfloat: left;\r\n}\r\n\r\n.mainInfo {\r\n\twidth: 80%;\r\n\tmargin: auto;\r\n\tborder-style: solid;\r\n\tborder-color: black;\r\n}\r\n\r\n.tabs {\r\n\tdisplay: flex;\r\n\tborder-style: solid;\r\n\tborder-color: black;\r\n}\r\n\r\n.aboutusTab {\r\n\tflex-grow: 1;\r\n\tborder-right: solid;\r\n\tborder-color: black;\r\n\tbackground-color: #d14a41;\r\n\ttext-align: center;\r\n\tcolor: #f7f4df;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.aboutusTab:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\n.menuTab {\r\n\tflex-grow: 1;\r\n\tborder-right: solid;\r\n\tborder-color: black;\r\n\tbackground-color: #d14a41;\r\n\ttext-align: center;\r\n\tcolor: #f7f4df;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.menuTab:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\n.contactTab {\r\n\tflex-grow: 1;\r\n\tborder-right: solid;\r\n\tborder-right: none;\r\n\tbackground-color: #d14a41;\r\n\ttext-align: center;\r\n\tcolor: #f7f4df;\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.contactTab:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\n.tabDisplay {\r\n\theight: 60vh;\r\n\tborder-style: solid;\r\n\tbackground-color: #f7f4df;\r\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);const r=()=>{const e=document.querySelector(".tabDisplay");e.innerHTML="",e.style.textAlign="center";const t=document.createElement("div");e.appendChild(t),t.innerHTML="About Us",t.style.fontWeight="bold",t.style.textDecoration="underline",t.style.fontSize="2rem",t.style.paddingTop="30px",t.style.paddingBottom="70px";const n=document.createElement("p");e.appendChild(n),n.style.width="50%",n.style.margin="auto",n.style.lineHeight="1.6",n.style.fontSize="1.5rem",n.style.wordWrap="break-word",n.innerHTML="Odin Cafe was established in 2020 as an exercise in practicing \t\t\t\t\t\t\t\tDocument Object Model manipulation using only Javascript. The \t\t\t\t\t\t\t\ttask was to create a simple webpage for a restaurant that \t\t\t\t\t\t\t\tfeatured event listeners. In addition to all of this, npm and \t\t\t\t\t\t\t\twebpack was utilized in order to introduce the creator to the \t\t\t\t\t\t\t\tmore prevalent technologies in crafting modern webpages. Here \t\t\t\t\t\t\t\tis a link to the exercise, if interested. <br><br>\t\t\t\t\t\t\t\thttps://www.theodinproject.com/courses/javascript/lessons/restaurant-page?ref=lnav"};n(0);(()=>{const e=document.createElement("header");e.innerHTML="Odin Cafe";const t=document.createElement("img");t.id="restaurantImage",t.src="../src/assets/images/restaurant.jpg",e.appendChild(t),document.getElementById("content").appendChild(e);const n=document.createElement("div");n.className="mainInfo",document.getElementById("content").appendChild(n);const r=document.createElement("div");r.className="tabs",document.querySelector(".mainInfo").appendChild(r);const o=document.createElement("div");o.className="aboutusTab",o.innerHTML="About Us",document.querySelector(".tabs").appendChild(o);const a=document.createElement("div");a.className="menuTab",a.innerHTML="Menu",document.querySelector(".tabs").appendChild(a);const i=document.createElement("div");i.className="contactTab",i.innerHTML="Contact",document.querySelector(".tabs").appendChild(i);const c=document.createElement("div");c.className="tabDisplay",document.querySelector(".mainInfo").appendChild(c)})(),document.querySelector(".aboutusTab").addEventListener("click",r),document.querySelector(".menuTab").addEventListener("click",()=>{const e=document.querySelector(".tabDisplay");e.innerHTML="";const t=document.createElement("div");e.appendChild(t),t.innerHTML="Menu",t.style.fontWeight="bold",t.style.textDecoration="underline",t.style.fontSize="2rem",t.style.paddingTop="30px",t.style.paddingBottom="70px",t.style.textAlign="center";const n=document.createElement("div");n.id="menu",e.appendChild(n),n.style.lineHeight="2",n.style.fontSize="1.5rem";let r={Coffee:"../src/assets/images/coffee.jpg",Salad:"../src/assets/images/salad.jpg",Sandwich:"../src/assets/images/sandwich.jpg"};const o=document.createElement("ul");document.getElementById("menu").appendChild(o),Object.keys(r).forEach(e=>{let t=document.createElement("li");o.appendChild(t),t.style.textAlign="center",t.innerHTML+=e;let n=document.createElement("img");n.src=r[e],n.style.display="block",n.style.margin="auto",n.style.width="150px",n.style.height="150px",n.style.borderRadius="50%",t.appendChild(n)})}),document.querySelector(".contactTab").addEventListener("click",()=>{const e=document.querySelector(".tabDisplay");e.innerHTML="";const t=document.createElement("div");e.appendChild(t),t.innerHTML="Contact",t.style.fontWeight="bold",t.style.textDecoration="underline",t.style.fontSize="2rem",t.style.paddingTop="30px",t.style.paddingBottom="70px",t.style.textAlign="center";const n=document.createElement("div");n.id="contactInfo",e.appendChild(n),n.style.lineHeight="2",n.style.fontSize="1.5rem";const r=document.createElement("ul");document.getElementById("contactInfo").appendChild(r),["Telephone: 1-234-568-7899","Email: odincafe@notarealemail.com","Fax: 555-555-5555"].forEach((function(e){let t=document.createElement("li");r.appendChild(t),t.innerHTML=e}))}),r()}]);