(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(t,e,n){},101:function(t,e,n){},102:function(t,e,n){},103:function(t,e,n){},128:function(t,e,n){t.exports=n.p+"videos/9fdec26.mp4"},129:function(t,e,n){t.exports=n.p+"img/12e94e0.png"},130:function(t,e,n){t.exports=n.p+"img/675e0fa.png"},131:function(t,e,n){t.exports=n.p+"img/8dfb4ed.png"},132:function(t,e,n){t.exports=n.p+"img/6b27a76.png"},133:function(t,e,n){t.exports=n.p+"img/ff0506f.png"},134:function(t,e,n){t.exports=n.p+"img/ef75c5b.png"},135:function(t,e,n){t.exports=n.p+"img/c324909.png"},136:function(t,e,n){t.exports=n.p+"img/9325965.png"},137:function(t,e,n){t.exports=n.p+"img/8588c95.png"},138:function(t,e){(function(){var t,e,n,o,r,l=function(t,e){return function(){return t.apply(e,arguments)}},c=[].indexOf||function(t){for(var i=0,e=this.length;i<e;i++)if(i in this&&this[i]===t)return i;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,o;for(n in e)o=e[n],null==t[n]&&(t[n]=o);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,o){var r;return null==e&&(e=!1),null==n&&(n=!1),null==o&&(o=null),null!=document.createEvent?(r=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,o):null!=document.createEventObject?(r=document.createEventObject()).eventType=t:r.eventName=t,r},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var i,e,n,o;for(i=e=0,n=(o=this.keys).length;e<n;i=++e)if(o[i]===t)return this.values[i]},t.prototype.set=function(t,e){var i,n,o,r;for(i=n=0,o=(r=this.keys).length;n<o;i=++n)if(r[i]===t)return void(this.values[i]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),o=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),r.test(e)&&e.replace(r,(function(t,e){return e.toUpperCase()})),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},r=/(\-([a-z]){1})/g,this.WOW=function(){function r(t){null==t&&(t={}),this.scrollCallback=l(this.scrollCallback,this),this.scrollHandler=l(this.scrollHandler,this),this.resetAnimation=l(this.resetAnimation,this),this.start=l(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return r.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},r.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},r.prototype.start=function(){var e,n,o,r,l;if(this.stopped=!1,this.boxes=function(){var t,n,o,r;for(r=[],t=0,n=(o=this.element.querySelectorAll("."+this.config.boxClass)).length;t<n;t++)e=o[t],r.push(e);return r}.call(this),this.all=function(){var t,n,o,r;for(r=[],t=0,n=(o=this.boxes).length;t<n;t++)e=o[t],r.push(e);return r}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(n=0,o=(r=this.boxes).length;n<o;n++)e=r[n],this.applyStyle(e,!0);if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new t((l=this,function(t){var e,n,o,r,c;for(c=[],e=0,n=t.length;e<n;e++)r=t[e],c.push(function(){var t,e,n,l;for(l=[],t=0,e=(n=r.addedNodes||[]).length;t<e;t++)o=n[t],l.push(this.doSync(o));return l}.call(l));return c})).observe(document.body,{childList:!0,subtree:!0})},r.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},r.prototype.sync=function(element){if(t.notSupported)return this.doSync(this.element)},r.prototype.doSync=function(element){var t,e,n,o,r;if(null==element&&(element=this.element),1===element.nodeType){for(r=[],e=0,n=(o=(element=element.parentNode||element).querySelectorAll("."+this.config.boxClass)).length;e<n;e++)t=o[e],c.call(this.all,t)<0?(this.boxes.push(t),this.all.push(t),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(t,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},r.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},r.prototype.applyStyle=function(t,e){var n,o,r,l;return o=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),r=t.getAttribute("data-wow-iteration"),this.animate((l=this,function(){return l.customStyle(t,e,o,n,r)}))},r.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},r.prototype.resetStyle=function(){var t,e,n,o,r;for(r=[],e=0,n=(o=this.boxes).length;e<n;e++)t=o[e],r.push(t.style.visibility="visible");return r},r.prototype.resetAnimation=function(t){var e;if(t.type.toLowerCase().indexOf("animationend")>=0)return(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim()},r.prototype.customStyle=function(t,e,n,o,r){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),o&&this.vendorSet(t.style,{animationDelay:o}),r&&this.vendorSet(t.style,{animationIterationCount:r}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},r.prototype.vendors=["moz","webkit"],r.prototype.vendorSet=function(t,e){var n,o,r,l;for(n in o=[],e)r=e[n],t[""+n]=r,o.push(function(){var e,o,c,d;for(d=[],e=0,o=(c=this.vendors).length;e<o;e++)l=c[e],d.push(t[""+l+n.charAt(0).toUpperCase()+n.substr(1)]=r);return d}.call(this));return o},r.prototype.vendorCSS=function(t,e){var n,r,l,c,style,d;for(c=(style=o(t)).getPropertyCSSValue(e),n=0,r=(l=this.vendors).length;n<r;n++)d=l[n],c=c||style.getPropertyCSSValue("-"+d+"-"+e);return c},r.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=o(t).getPropertyValue("animation-name")}return"none"===e?"":e},r.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},r.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},r.prototype.scrollHandler=function(){return this.scrolled=!0},r.prototype.scrollCallback=function(){var t;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,n,o,r;for(r=[],e=0,n=(o=this.boxes).length;e<n;e++)(t=o[e])&&(this.isVisible(t)?this.show(t):r.push(t));return r}.call(this),!this.boxes.length&&!this.config.live))return this.stop()},r.prototype.offsetTop=function(element){for(var t;void 0===element.offsetTop;)element=element.parentNode;for(t=element.offsetTop;element=element.offsetParent;)t+=element.offsetTop;return t},r.prototype.isVisible=function(t){var e,n,o,r,l;return n=t.getAttribute("data-wow-offset")||this.config.offset,r=(l=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,e=(o=this.offsetTop(t))+t.clientHeight,o<=r&&e>=l},r.prototype.util=function(){return null!=this._util?this._util:this._util=new e},r.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},r}()}).call(this)},139:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA7CAYAAADB0CKOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAFESURBVGhD7dmxSkJhGMZxiUgixZCoOBgSWG0ugjUFugSKBm0SjuLSDbjq2B0E3oBrS1fhBTh5J1+c7eXjPx44Lw/f8Fv+0/sMyjmcSqU7D/IwqsGoBqMajGowqsGoBqMajGowqsFonPRnbtG9CKNR/3oNjdWzO+efb3gvwmjc/d2Gh+OpO81ND+9FGI00skRpZAyj0frNwv2+7k6hI5vrnku15QDvRRjVYFSDUQ1GNRjVYFSDUQ1GNRiNs+nEp9E73oswGjfbx5Dt2u6kB/QYRiONLFEaGcNo5H88+VBvLlcveC/CaFQ/xm7RvQijGoxqMKrBqAajGoxqMKrBqAajkX8iu1gM3Sn0fTJ/hOocqu6kB/QYRiONLFHhI+k3UbZCR159d8P1z5M76dNdDKMajGowqsGoBqMajGowqsGoBqOUefgHjB6D1gvUFqUAAAAASUVORK5CYII="},140:function(t,e,n){t.exports=n.p+"img/915b53c.png"},141:function(t,e,n){t.exports=n.p+"img/2c64877.png"},142:function(t,e,n){"use strict";n(99)},143:function(t,e,n){"use strict";n(100)},144:function(t,e,n){"use strict";n(101)},145:function(t,e,n){"use strict";n(102)},146:function(t,e,n){"use strict";n(103)},147:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top-bar-social"},[e("a",{attrs:{href:"https://www.facebook.com/ChiKuWainKeelung",target:"_blank"}},[e("img",{staticClass:"top-bar-social-icon",attrs:{src:n(141),alt:"menu"}})])])}],r={components:{},props:{},data:function(){return{isPopup:!1}},computed:{},methods:{scrollToRef:function(t){this.isPopup=!1,this.$emit("scrollToRefs",t)}},watch:{}},l=(n(142),n(10)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"top"},[t.isPopup?o("div",{staticClass:"top-popup"},[o("div",{staticClass:"top-popup-close-box"},[o("img",{staticClass:"top-popup-close",attrs:{src:n(140),alt:"menu"},on:{click:function(e){t.isPopup=!1}}})]),t._v(" "),o("div",{staticClass:"top-popup-text",on:{click:function(e){return t.scrollToRef("top")}}},[t._v("怪奇逃走中")]),t._v(" "),o("div",{staticClass:"top-popup-text",on:{click:function(e){return t.scrollToRef("about")}}},[t._v("關於怪奇")]),t._v(" "),o("div",{staticClass:"top-popup-text",on:{click:function(e){return t.scrollToRef("run")}}},[t._v("通緝中")]),t._v(" "),o("div",{staticClass:"top-popup-text",on:{click:function(e){return t.scrollToRef("time")}}},[t._v("平行時空")]),t._v(" "),o("div",{staticClass:"top-popup-text",on:{click:function(e){return t.scrollToRef("musium")}}},[t._v("怪奇博物館")]),t._v(" "),o("div",{staticClass:"top-popup-text",on:{click:function(e){return t.scrollToRef("qa")}}},[t._v("Q&A")])]):o("div",{staticClass:"top-bar"},[t._m(0),t._v(" "),o("img",{staticClass:"top-bar-menu",attrs:{src:n(139),alt:"menu"},on:{click:function(e){t.isPopup=!0}}})])])}),o,!1,null,null,null);e.default=component.exports},148:function(t,e,n){"use strict";n.r(e);var o={components:{},props:{},data:function(){return{circle:{one:!1,two:!1,three:!1,four:!1,five:!1,six:!1}}},computed:{},methods:{scrollToRef:function(t){this.$emit("scrollToRefs",t)}},watch:{}},r=(n(143),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side"},[n("div",{staticClass:"side-circle",on:{click:function(e){return t.scrollToRef("top")}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.circle.one,expression:"circle.one"}],staticClass:"side-circle-text"},[t._v("怪奇逃走中")]),t._v(" "),n("div",{class:["side-circle-circle",{"side-circle-circle-full":t.circle.one}],on:{mouseover:function(e){t.circle.one=!0},mouseleave:function(e){t.circle.one=!1}}})]),t._v(" "),n("div",{staticClass:"side-circle",on:{click:function(e){return t.scrollToRef("about")}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.circle.two,expression:"circle.two"}],staticClass:"side-circle-text"},[t._v("關於怪奇")]),t._v(" "),n("div",{class:["side-circle-circle",{"side-circle-circle-full":t.circle.two}],on:{mouseover:function(e){t.circle.two=!0},mouseleave:function(e){t.circle.two=!1}}})]),t._v(" "),n("div",{staticClass:"side-circle",on:{click:function(e){return t.scrollToRef("run")}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.circle.three,expression:"circle.three"}],staticClass:"side-circle-text"},[t._v("通緝中")]),t._v(" "),n("div",{class:["side-circle-circle",{"side-circle-circle-full":t.circle.three}],on:{mouseover:function(e){t.circle.three=!0},mouseleave:function(e){t.circle.three=!1}}})]),t._v(" "),n("div",{staticClass:"side-circle",on:{click:function(e){return t.scrollToRef("time")}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.circle.four,expression:"circle.four"}],staticClass:"side-circle-text"},[t._v("平行時空")]),t._v(" "),n("div",{class:["side-circle-circle",{"side-circle-circle-full":t.circle.four}],on:{mouseover:function(e){t.circle.four=!0},mouseleave:function(e){t.circle.four=!1}}})]),t._v(" "),n("div",{staticClass:"side-circle",on:{click:function(e){return t.scrollToRef("musium")}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.circle.five,expression:"circle.five"}],staticClass:"side-circle-text"},[t._v("怪奇博物館")]),t._v(" "),n("div",{class:["side-circle-circle",{"side-circle-circle-full":t.circle.five}],on:{mouseover:function(e){t.circle.five=!0},mouseleave:function(e){t.circle.five=!1}}})]),t._v(" "),n("div",{staticClass:"side-circle",on:{click:function(e){return t.scrollToRef("qa")}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.circle.six,expression:"circle.six"}],staticClass:"side-circle-text"},[t._v("Q&A")]),t._v(" "),n("div",{class:["side-circle-circle",{"side-circle-circle-full":t.circle.six}],on:{mouseover:function(e){t.circle.six=!0},mouseleave:function(e){t.circle.six=!1}}})])])}),[],!1,null,null,null);e.default=component.exports},149:function(t,e,n){"use strict";n.r(e);var o={components:{},props:{},data:function(){return{}},computed:{},methods:{},watch:{}},r=(n(144),n(10)),component=Object(r.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottom"},[e("div",{staticClass:"bottom-text"},[this._v("Copyright 2021 雞籠怪奇博物館")]),this._v(" "),e("div",{staticClass:"bottom-text"},[this._v("All Rights Reserved | Powered by 雞籠怪奇博物館")])])}],!1,null,null,null);e.default=component.exports},150:function(t,e,n){"use strict";n.r(e);var o={components:{},props:{},data:function(){return{}},computed:{},methods:{},watch:{}},r=(n(145),n(10)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},155:function(t,e,n){"use strict";n.r(e);var o=n(138).WOW,r={head:{title:"怪奇逃走中-混血探員"},layout:"default",components:{topBar:n(147).default,sideBar:n(148).default,bottomBar:n(149).default,contentBox:n(150).default},props:{},data:function(){return{isShowCardText:{river:!1,lulu:!1},isShowDesc:{community:!1,youwant:!1,frog:!1,use:!1,siddharam:!1,ding:!1,education:!1}}},mounted:function(){document.querySelector("video").load(),this.$nextTick((function(){new o({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!1,callback:null,scrollContainer:null}).init()}))},computed:{},methods:{scrollToRef:function(t){var e=this;this.$nextTick((function(){e.$refs[t].$el.scrollIntoView({behavior:"smooth"})}))}},watch:{}},l=(n(146),n(10)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"index"},[o("div",{staticClass:"index-video"},[o("div",{staticClass:"index-video-box"},[o("video",{attrs:{width:"100%",height:"100%",autoplay:"",loop:"",muted:"",playsinline:""},domProps:{muted:!0}},[o("source",{attrs:{src:n(128),type:"video/mp4"}})])])]),t._v(" "),o("contentBox",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n(129),expression:"require('@/assets/img/index/bg-blue.png')",arg:"background-image"}],ref:"top",staticClass:"index-intro"},[o("div",{staticClass:"index-intro-head-box"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(130),expression:"require('@/assets/img/index/text-main.png')"}],staticClass:"index-intro-run-img wow animate__fadeInRight",attrs:{alt:"run","data-wow-duration":"1s","data-wow-delay":"0s","data-wow-iteration":"1"}}),t._v(" "),o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n(96),expression:"require('@/assets/img/index/monster-hand.png')",arg:"background-image"}],staticClass:"index-intro-hand-img wow animate__zoomInRight",attrs:{"data-wow-duration":"2s","data-wow-delay":"s","data-wow-iteration":"1"}})]),t._v(" "),o("div",{staticClass:"index-intro-text-box"},[o("div",{staticClass:"index-intro-text-left wow animate__fadeIn",attrs:{"data-wow-duration":"1s","data-wow-delay":"0s","data-wow-iteration":"1"}},[o("div",{staticClass:"index-intro-text",on:{click:function(e){return t.scrollToRef()}}},[t._v("混血實驗是轉機？或是衝突開端？")]),t._v(" "),o("div",{staticClass:"index-intro-text"},[t._v("究竟追尋真相重要？ 還是選擇重要？")])]),t._v(" "),o("div",{staticClass:"index-intro-text-right"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(131),expression:"require('@/assets/img/index/text-game.png')"}],staticClass:"index-intro-text-img",attrs:{alt:"game"}}),t._v(" "),o("div",{staticClass:"index-intro-text-green"},[t._v("# 120分鐘的實境解謎遊戲")]),t._v(" "),o("div",{staticClass:"index-intro-text-green"},[t._v("# 探討3個議題")]),t._v(" "),o("div",{staticClass:"index-intro-text-green"},[t._v("# 體驗不一樣的思辨小旅行")]),t._v(" "),o("div",{staticClass:"index-intro-text-green"},[t._v("# 深度認識隱而不見的基隆")])])]),t._v(" "),o("router-link",{staticClass:"index-intro-about-box",attrs:{to:"/about"}},[o("div",{staticClass:"index-intro-about"},[t._v("了解實驗")])])],1),t._v(" "),o("contentBox",{ref:"about",staticClass:"index-about"},[o("div",{staticClass:"index-about-box"},[o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n(97),expression:"require('@/assets/img/index/bg-blue-river.png')",arg:"background-image"}],staticClass:"index-about-text"},[o("div",[t._v("是由無生命體演變而成，因累積過多人類情緒而產生意識，變成有生命體，如妖怪般的存在。每個怪奇之怪力皆不相同，怪力等級也因生成時累積的情緒而有所差異，目前基隆地區捕獲最強四大怪奇為旭川河、林開郡洋樓、委託行、通勤；一般人平時無法看見怪奇，唯有怪奇同類，或是觀察力異常細微之人才能看見。")])]),t._v(" "),o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n(96),expression:"require('@/assets/img/index/monster-hand.png')",arg:"background-image"}],staticClass:"index-about-img-hand wow animate__fadeInBottomLeft",attrs:{"data-wow-duration":"1s","data-wow-delay":"0s","data-wow-iteration":"1"}}),t._v(" "),o("div",{staticClass:"index-about-head"},[t._v("關於怪奇")])])]),t._v(" "),o("contentBox",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n(132),expression:"require('@/assets/img/index/bg-main.png')",arg:"background-image"}],ref:"run",staticClass:"index-role"},[o("div",{staticClass:"index-role-box"},[o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n(133),expression:"require('@/assets/img/index/monster-river.png')",arg:"background-image"}],staticClass:"index-role-img",on:{mouseover:function(e){t.isShowCardText.river=!0},mouseleave:function(e){t.isShowCardText.river=!1}}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(98),expression:"require('@/assets/img/index/text-hunt.png')"}],staticClass:"index-role-img-hunt wow animate__flipInX",attrs:{alt:"hunt","data-wow-duration":"1s","data-wow-delay":"0s","data-wow-iteration":"1"}}),t._v(" "),o("transition",{attrs:{name:"fade"}},[t.isShowCardText.river?o("div",{staticClass:"index-role-text-box"},[o("div",{staticClass:"index-role-head"},[t._v("旭川")]),t._v(" "),o("div",{staticClass:"index-role-text"},[t._v("危害等級：SSS")]),t._v(" "),o("div",{staticClass:"index-role-text"},[t._v("大約從1978年左右出沒在明德親民至善大樓，身上滿是漁網及腐臭魚屍，恐嚇人類會用沼氣炸掉大樓，造成當地居民恐慌，意圖不明。")])]):t._e()])],1),t._v(" "),o("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n(134),expression:"require('@/assets/img/index/monster-lulu.png')",arg:"background-image"}],staticClass:"index-role-img index-role-img-2",on:{mouseover:function(e){t.isShowCardText.lulu=!0},mouseleave:function(e){t.isShowCardText.lulu=!1}}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(98),expression:"require('@/assets/img/index/text-hunt.png')"}],staticClass:"index-role-img-hunt wow animate__flipInX",attrs:{alt:"hunt","data-wow-duration":"1s","data-wow-delay":"0s","data-wow-iteration":"1"}}),t._v(" "),o("transition",{attrs:{name:"fade"}},[t.isShowCardText.lulu?o("div",{staticClass:"index-role-text-box"},[o("div",{staticClass:"index-role-head"},[t._v("露露")]),t._v(" "),o("div",{staticClass:"index-role-text"},[t._v("危害等級：SSS")]),t._v(" "),o("div",{staticClass:"index-role-text"},[t._v("大約從基隆港口興盛的1960年前後出沒在委託行街區，擅長魅惑，跟其相關之失蹤人數已近百人。")])]):t._e()])],1)])]),t._v(" "),o("contentBox",{ref:"time",staticClass:"index-pall"},[o("div",{staticClass:"index-pall-text-box"},[o("div",{staticClass:"index-pall-text wow animate__fadeIn",attrs:{"data-wow-duration":"1s","data-wow-delay":"0s","data-wow-iteration":"1"}},[t._v("一場平行時空的旅程")]),t._v(" "),o("div",{staticClass:"index-pall-text wow animate__fadeIn",attrs:{"data-wow-duration":"3s","data-wow-delay":"0s","data-wow-iteration":"1"}},[t._v("這個路上你將會遇見誰")]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"index-pall-text wow animate__fadeIn",attrs:{"data-wow-duration":"5s","data-wow-delay":"0s","data-wow-iteration":"1"}},[t._v("又看見什麼")]),t._v(" "),o("div",{staticClass:"index-pall-text wow animate__fadeIn",attrs:{"data-wow-duration":"7s","data-wow-delay":"0s","data-wow-iteration":"1"}},[t._v("隱藏在這座城市的秘密")]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"index-pall-text wow animate__fadeIn",attrs:{"data-wow-duration":"9s","data-wow-delay":"0s","data-wow-iteration":"1"}},[t._v("就等你開始探索")]),t._v(" "),o("div",{staticClass:"index-pall-text wow animate__fadeIn",attrs:{"data-wow-duration":"11s","data-wow-delay":"0s","data-wow-iteration":"1"}},[t._v("你的真實身分")])]),t._v(" "),o("a",{attrs:{href:"https://frankyeah.github.io/klkuaiki/index.html",target:"_blank"}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(135),expression:"require('@/assets/img/index/monster-bird.png')"}],staticClass:"index-pall-img wow animate__rubberBand",attrs:{alt:"bird","data-wow-duration":"1s","data-wow-delay":"0s","data-wow-iteration":"infinite"}})])]),t._v(" "),o("contentBox",{ref:"musium",staticClass:"index-musium"},[o("div",{staticClass:"index-musium-box"},[o("div",{staticClass:"index-musium-text-box wow animate__fadeIn",attrs:{"data-wow-duration":"1s","data-wow-delay":"0s","data-wow-iteration":"1"}},[o("div",{staticClass:"index-musium-text"},[t._v("世界各地皆有怪奇組織,台灣的怪奇官方組織為「怪奇博物館」。據傳本館設於基隆港,因是地下秘密組織,原始核心成員又皆於任務中歿世,故確切成立時間已不可考。目前館長為第十五任Dr.張中元。")]),t._v(" "),o("div",{staticClass:"index-musium-text"},[t._v("「怪奇博物館」為研究、捕捉及管理怪奇之組織,為防止怪奇危害人類、破壞環境,因此招集具有察覺怪奇能力之人,共同研究並擬定捕捉策略,將怪奇統一管理避免傷害,若有必要則進行銷毀怪奇之工作,維持人類世界之和平運作。")])]),t._v(" "),o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(136),expression:"require('@/assets/img/index/logo-black.png')"}],staticClass:"index-musium-logo",attrs:{alt:"logo"}}),t._v(" "),o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(97),expression:"require('@/assets/img/index/bg-blue-river.png')"}],staticClass:"index-musium-bg",attrs:{alt:"river"}})])]),t._v(" "),o("contentBox",{ref:"qa",staticClass:"index-qa"},[o("div",{staticClass:"index-qa-box"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n(137),expression:"require('@/assets/img/index/qa-btn.png')"}],staticClass:"index-qa-logo",attrs:{alt:"qa"}}),t._v(" "),o("div",{staticClass:"index-qa-question"},[t._v("．請問怪奇逃走中_混血探員在做什麼？")]),t._v(" "),o("div",{staticClass:"index-qa-answer"},[t._v("。這是一個發生於基隆，手機結合街景的實境互動解謎遊戲。")]),t._v(" "),o("div",{staticClass:"index-qa-question"},[t._v("．如何得到探員身分？")]),t._v(" "),o("div",{staticClass:"index-qa-answer"},[t._v("。本次為極機密任務。於2021年12月底前，由教育處私下招募探員，每位探員將有專屬登入序號。")]),t._v(" "),o("div",{staticClass:"index-qa-answer"},[t._v("。想自告奮勇成為探員嗎？請洽招募窗口：（教育處窗口）")]),t._v(" "),o("div",{staticClass:"index-qa-question"},[t._v("．探索時間")]),t._v(" "),o("div",{staticClass:"index-qa-answer"},[t._v("。探索時間約2-3小時 / 建議探索時間10：00-17：00。")]),t._v(" "),o("div",{staticClass:"index-qa-question"},[t._v("．探索限制")]),t._v(" "),o("div",{staticClass:"index-qa-answer"},[t._v("。15歲以下探員，需成年探員陪同。")]),t._v(" "),o("div",{staticClass:"index-qa-answer"},[t._v("。搜捕怪奇穿梭於雞籠市區，包含上下樓等有障礙設備。")]),t._v(" "),o("div",{staticClass:"index-qa-answer"},[t._v("。手機全程需使用網路，遊戲內含影音，為求最佳體驗，請自備耳機。")]),t._v(" "),o("br"),o("br"),o("br"),o("br"),t._v(" "),o("div",{staticClass:"index-qa-hint"},[t._v("若有其他問題，歡迎來信，")]),t._v(" "),o("div",{staticClass:"index-qa-hint"},[t._v("館員會盡快在雞籠曆許可的時間點回覆您，")]),t._v(" "),o("div",{staticClass:"index-qa-hint"},[t._v("若超過48小時未收到回信，")]),t._v(" "),o("div",{staticClass:"index-qa-hint"},[t._v("信件有極大可能被怪奇劫走，請再次與我們聯繫")]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"index-qa-hint"},[t._v("機密信箱：klkuaiki@gmail.com")])])]),t._v(" "),o("contentBox",{staticClass:"index-team"},[o("div",{staticClass:"index-team-box"},[o("div",{staticClass:"index-team-head"},[t._v("怪奇團隊")]),t._v(" "),o("div",{staticClass:"index-team-line"}),t._v(" "),o("div",{staticClass:"index-team-text-box"},[o("div",{staticClass:"index-team-text",on:{mouseover:function(e){t.isShowDesc.community=!0},mouseleave:function(e){t.isShowDesc.community=!1}}},[t.isShowDesc.community?o("div",{staticClass:"index-team-popup"},[o("div",[t._v("文安社區")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("座落市區的古老社區，也是基隆社造的元老級社區。")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("以文史帶領居民認同在地、以多元串連地方資源整合、以社區跨出社區的社造想像。")])]):t._e(),t._v(" "),o("div",{staticClass:"index-team-text-inner"},[o("div",[t._v("文安社區")]),t._v(" "),o("a",{staticClass:"index-team-icon",attrs:{href:"https://www.facebook.com/%E6%88%80%E6%88%80%E6%96%87%E5%AE%89-%E5%9F%BA%E9%9A%86%E6%96%87%E5%AE%89%E7%A4%BE%E5%8D%80-408355896023365",target:"_blank"}},[t._v("f")])])]),t._v(" "),o("div",{staticClass:"index-team-text index-team-plus"},[t._v("+")]),t._v(" "),o("div",{staticClass:"index-team-text",on:{mouseover:function(e){t.isShowDesc.youwant=!0},mouseleave:function(e){t.isShowDesc.youwant=!1}}},[t.isShowDesc.youwant?o("div",{staticClass:"index-team-popup"},[o("div",[t._v("慾望劇團")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("基隆在地劇團")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("擅長挖掘在地故事並改編成戲劇演出")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("「透過戲劇拉近人與人之間的距離，並傳達愛與感動。」")])]):t._e(),t._v(" "),o("div",{staticClass:"index-team-text-inner"},[o("div",[t._v("慾望劇團")]),t._v(" "),o("a",{staticClass:"index-team-icon",attrs:{href:"https://www.facebook.com/desiretroupe",target:"_blank"}},[t._v("f")])])]),t._v(" "),o("div",{staticClass:"index-team-text index-team-none"},[t._v("+")]),t._v(" "),o("div",{staticClass:"index-team-text",on:{mouseover:function(e){t.isShowDesc.frog=!0},mouseleave:function(e){t.isShowDesc.frog=!1}}},[t.isShowDesc.frog?o("div",{staticClass:"index-team-popup"},[o("div",[t._v("阿普蛙")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("基隆在地社企")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("希望透過遊戲的方式讓人認識社會議題，")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("推廣公民教育，為社會帶來正面的影響力。")])]):t._e(),t._v(" "),o("div",{staticClass:"index-team-text-inner"},[o("div",[t._v("阿普蛙")]),t._v(" "),o("a",{staticClass:"index-team-icon",attrs:{href:"https://www.wasupstudio.com/",target:"_blank"}},[t._v("W")])])]),t._v(" "),o("div",{staticClass:"index-team-text index-team-plus"},[t._v("+")]),t._v(" "),o("div",{staticClass:"index-team-text",on:{mouseover:function(e){t.isShowDesc.use=!0},mouseleave:function(e){t.isShowDesc.use=!1}}},[t.isShowDesc.use?o("div",{staticClass:"index-team-popup"},[o("div",[t._v("無用學堂")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("地方活動設計")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("無用是一種精神，而學堂只是延伸")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("在這個以雨為名的城市，發起無數溫暖的地方生活實驗")])]):t._e(),t._v(" "),o("div",{staticClass:"index-team-text-inner"},[o("div",[t._v("無用學堂")]),t._v(" "),o("a",{staticClass:"index-team-icon",attrs:{href:"https://www.facebook.com/KeelungLifeLab",target:"_blank"}},[t._v("F")])])]),t._v(" "),o("div",{staticClass:"index-team-text index-team-none"},[t._v("+")]),t._v(" "),o("div",{staticClass:"index-team-text",on:{mouseover:function(e){t.isShowDesc.siddharam=!0},mouseleave:function(e){t.isShowDesc.siddharam=!1}}},[t.isShowDesc.siddharam?o("div",{staticClass:"index-team-popup"},[o("div",[t._v("西打藍")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("寫程式的文字人")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("記者、前端工程師、自由工作者")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("以基隆為根、愛好思考，實現各式生活的多棲人生")])]):t._e(),t._v(" "),o("div",{staticClass:"index-team-text-inner"},[o("div",[t._v("西打藍")]),t._v(" "),o("a",{staticClass:"index-team-icon",attrs:{href:"https://siddharam.com.tw/",target:"_blank"}},[t._v("W")])])]),t._v(" "),o("div",{staticClass:"index-team-text index-team-plus"},[t._v("+")]),t._v(" "),o("div",{staticClass:"index-team-text",on:{mouseover:function(e){t.isShowDesc.ding=!0},mouseleave:function(e){t.isShowDesc.ding=!1}}},[t.isShowDesc.ding?o("div",{staticClass:"index-team-popup"},[o("div",[t._v("叮叮咚咚")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("一個地球人類。正在練習自己內在跟外在的平衡")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("觀察自己觀察世界，在這世界玩～")])]):t._e(),t._v(" "),o("div",{staticClass:"index-team-text-inner"},[o("div",[t._v("叮叮咚咚")])])])])]),t._v(" "),o("div",{staticClass:"index-team-feat"},[t._v("FEAT.")]),t._v(" "),o("div",{staticClass:"index-team-box"},[o("div",{staticClass:"index-team-head"},[t._v("基隆市教育處")]),t._v(" "),o("div",{staticClass:"index-team-line"}),t._v(" "),o("div",{staticClass:"index-team-text-box"},[o("div",{staticClass:"index-team-text",on:{mouseover:function(e){t.isShowDesc.education=!0},mouseleave:function(e){t.isShowDesc.education=!1}}},[t.isShowDesc.education?o("div",{staticClass:"index-team-popup index-team-popup-city"},[o("div"),t._v(" "),o("br"),t._v(" "),o("div",[t._v("以「多元聯盟、跨域共榮」為主軸，")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("形塑文創意象、凝聚社區共識、推動觀光體驗，")]),t._v(" "),o("br"),t._v(" "),o("div",[t._v("並嘗試接軌國際，從地方創生回應全球挑戰。")])]):t._e(),t._v(" "),o("div",{staticClass:"index-team-text-inner"},[o("div",[t._v("學習型城市")]),t._v(" "),o("div",{staticClass:"index-team-icon-box"},[o("a",{staticClass:"index-team-icon",attrs:{href:"https://www.facebook.com/klcg.gov.tw/",target:"_blank"}},[t._v("f")])])])])])])]),t._v(" "),o("bottomBar"),t._v(" "),o("sideBar",{on:{scrollToRefs:t.scrollToRef}}),t._v(" "),o("topBar",{on:{scrollToRefs:t.scrollToRef}})],1)}),[],!1,null,"4ce13ecd",null);e.default=component.exports},96:function(t,e,n){t.exports=n.p+"img/ed4b57a.png"},97:function(t,e,n){t.exports=n.p+"img/87a216e.png"},98:function(t,e,n){t.exports=n.p+"img/cb2cd63.png"},99:function(t,e,n){}}]);