(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9qPz":function(e,o,t){"use strict";t.d(o,"a",(function(){return N})),t.d(o,"b",(function(){return D})),t.d(o,"c",(function(){return g})),t.d(o,"d",(function(){return P})),t.d(o,"e",(function(){return i}));var r=t("imtE"),n=t("kBU6");const i=e=>new Promise((o,t)=>{Object(r.l)(()=>{a(e),m(e).then(t=>{t.animation&&t.animation.destroy(),s(e),o(t)},o=>{s(e),t(o)})})}),a=e=>{const o=e.enteringEl,t=e.leavingEl;v(o,t,e.direction),e.showGoBack?o.classList.add("can-go-back"):o.classList.remove("can-go-back"),P(o,!1),t&&P(t,!1)},m=async e=>{const o=await c(e);return o?p(o,e):u(e)},s=e=>{const o=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==o&&o.classList.remove("ion-page-invisible")},c=async e=>{if(e.leavingEl&&e.animated&&0!==e.duration)return e.animationBuilder?e.animationBuilder:"ios"===e.mode?(await t.e(97).then(t.bind(null,"/b1p"))).iosTransitionAnimation:(await t.e(98).then(t.bind(null,"HdOP"))).mdTransitionAnimation},p=async(e,o)=>{await l(o,!0);const t=e(o.baseEl,o);b(o.enteringEl,o.leavingEl);const r=await d(t,o);return o.progressCallback&&o.progressCallback(void 0),r&&y(o.enteringEl,o.leavingEl),{hasCompleted:r,animation:t}},u=async e=>{const o=e.enteringEl,t=e.leavingEl;return await l(e,!1),b(o,t),y(o,t),{hasCompleted:!0}},l=async(e,o)=>{const t=(void 0!==e.deepWait?e.deepWait:o)?[N(e.enteringEl),N(e.leavingEl)]:[f(e.enteringEl),f(e.leavingEl)];await Promise.all(t),await T(e.viewIsReady,e.enteringEl)},T=async(e,o)=>{e&&await e(o)},d=(e,o)=>{const t=o.progressCallback,r=new Promise(o=>{e.onFinish(e=>o(1===e))});return t?(e.progressStart(!0),t(e)):e.play(),r},b=(e,o)=>{g(o,n.c),g(e,n.a)},y=(e,o)=>{g(e,n.b),g(o,n.d)},g=(e,o)=>{if(e){const t=new CustomEvent(o,{bubbles:!1,cancelable:!1});e.dispatchEvent(t)}},f=e=>e&&e.componentOnReady?e.componentOnReady():Promise.resolve(),N=async e=>{const o=e;if(o){if(null!=o.componentOnReady&&null!=await o.componentOnReady())return;await Promise.all(Array.from(o.children).map(N))}},P=(e,o)=>{o?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},v=(e,o,t)=>{void 0!==e&&(e.style.zIndex="back"===t?"99":"101"),void 0!==o&&(o.style.zIndex="100")},D=e=>e.classList.contains("ion-page")?e:e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e},Dl6n:function(e,o,t){"use strict";t.d(o,"a",(function(){return n})),t.d(o,"b",(function(){return i})),t.d(o,"c",(function(){return r})),t.d(o,"d",(function(){return m}));const r=(e,o)=>null!==o.closest(e),n=e=>"string"==typeof e&&e.length>0?{"ion-color":!0,[`ion-color-${e}`]:!0}:void 0,i=e=>{const o={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>o[e]=!0),o},a=/^[a-z][a-z0-9+\-.]*:/,m=async(e,o,t)=>{if(null!=e&&"#"!==e[0]&&!a.test(e)){const r=document.querySelector("ion-router");if(r)return null!=o&&o.preventDefault(),r.push(e,t)}return!1}},I6FA:function(e,o,t){"use strict";t.d(o,"a",(function(){return n}));var r=t("8Y7J");let n=(()=>{class e{constructor(){this.playerOne="",this.playerTwo="",this.trialTourneyGameResults=[]}savePlayerOne(e){this.playerOne=e}getPlayerOne(){return this.playerOne}savePlayerTwo(e){this.playerTwo=e}getPlayerTwo(){return this.playerTwo}saveNewGameResult(e,o){"-1"==e&&(this.trialTourneyGameResults=[...this.trialTourneyGameResults,o])}getTournamentGameResults(e){return"-1"==e?this.trialTourneyGameResults:[{tourneyId:"1073ed04-45ef-444e-8263-8cc77b5251e4",tourneyName:"mita",gameNumber:1,winner:"Valeria",loser:"Tom",points:[{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:1,scorerPointNumber:1,pointType:"score",opponent:"Valeria"},{pointDateTime:"some datetime",scorer:"Valeria",gamePointNumber:2,scorerPointNumber:1,pointType:"klask",opponent:"Tom"},{pointDateTime:"some datetime",scorer:"Valeria",gamePointNumber:3,scorerPointNumber:2,pointType:"score",opponent:"Tom"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:4,scorerPointNumber:2,pointType:"biscuit",opponent:"Valeria"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:5,scorerPointNumber:3,pointType:"score",opponent:"Valeria"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:6,scorerPointNumber:4,pointType:"score",opponent:"Valeria"},{pointDateTime:"some datetime",scorer:"Valeria",gamePointNumber:7,scorerPointNumber:3,pointType:"biscuit",opponent:"Tom"},{pointDateTime:"some datetime",scorer:"Valeria",gamePointNumber:8,scorerPointNumber:4,pointType:"score",opponent:"Tom"},{pointDateTime:"some datetime",scorer:"Valeria",gamePointNumber:9,scorerPointNumber:5,pointType:"loss-control",opponent:"Tom"},{pointDateTime:"some datetime",scorer:"Valeria",gamePointNumber:10,scorerPointNumber:6,pointType:"score",opponent:"Tom"}]},{tourneyId:"1073ed04-45ef-444e-8263-8cc77b5251e4",tourneyName:"mita",gameNumber:2,winner:"Trevor",loser:"Valeria",points:[{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:1,scorerPointNumber:1,pointType:"forfeit",opponent:"Valeria"},{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:2,scorerPointNumber:2,pointType:"forfeit",opponent:"Valeria"},{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:3,scorerPointNumber:3,pointType:"forfeit",opponent:"Valeria"},{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:4,scorerPointNumber:4,pointType:"forfeit",opponent:"Valeria"},{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:5,scorerPointNumber:5,pointType:"forfeit",opponent:"Valeria"},{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:6,scorerPointNumber:6,pointType:"forfeit",opponent:"Valeria"}]},{tourneyId:"1073ed04-45ef-444e-8263-8cc77b5251e4",tourneyName:"mita",gameNumber:3,winner:"Tom",loser:"Valeria",points:[{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:1,scorerPointNumber:1,pointType:"forfeit",opponent:"Valeria"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:2,scorerPointNumber:2,pointType:"forfeit",opponent:"Valeria"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:3,scorerPointNumber:3,pointType:"forfeit",opponent:"Valeria"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:4,scorerPointNumber:4,pointType:"forfeit",opponent:"Valeria"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:5,scorerPointNumber:5,pointType:"forfeit",opponent:"Valeria"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:6,scorerPointNumber:6,pointType:"forfeit",opponent:"Valeria"}]},{tourneyId:"1073ed04-45ef-444e-8263-8cc77b5251e4",tourneyName:"mita",gameNumber:4,winner:"Tom",loser:"Trevor",points:[{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:1,scorerPointNumber:1,pointType:"klask",opponent:"Tom"},{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:2,scorerPointNumber:2,pointType:"loss-control",opponent:"Tom"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:3,scorerPointNumber:1,pointType:"score",opponent:"Trevor"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:4,scorerPointNumber:2,pointType:"score",opponent:"Trevor"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:5,scorerPointNumber:3,pointType:"klask",opponent:"Trevor"},{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:6,scorerPointNumber:3,pointType:"score",opponent:"Tom"},{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:7,scorerPointNumber:4,pointType:"biscuit",opponent:"Tom"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:8,scorerPointNumber:4,pointType:"score",opponent:"Trevor"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:9,scorerPointNumber:5,pointType:"score",opponent:"Trevor"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:10,scorerPointNumber:6,pointType:"biscuit",opponent:"Trevor"}]},{tourneyId:"1073ed04-45ef-444e-8263-8cc77b5251e4",tourneyName:"mita",gameNumber:5,winner:"Trevor",loser:"Tom",points:[{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:1,scorerPointNumber:1,pointType:"score",opponent:"Tom"},{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:2,scorerPointNumber:2,pointType:"biscuit",opponent:"Tom"},{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:3,scorerPointNumber:3,pointType:"score",opponent:"Tom"},{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:4,scorerPointNumber:4,pointType:"klask",opponent:"Tom"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:5,scorerPointNumber:1,pointType:"biscuit",opponent:"Trevor"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:6,scorerPointNumber:2,pointType:"loss-control",opponent:"Trevor"},{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:7,scorerPointNumber:5,pointType:"klask",opponent:"Tom"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:8,scorerPointNumber:3,pointType:"score",opponent:"Trevor"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:9,scorerPointNumber:4,pointType:"biscuit",opponent:"Trevor"},{pointDateTime:"some datetime",scorer:"Tom",gamePointNumber:10,scorerPointNumber:5,pointType:"klask",opponent:"Trevor"},{pointDateTime:"some datetime",scorer:"Trevor",gamePointNumber:11,scorerPointNumber:6,pointType:"score",opponent:"Tom"}]}]}getTournaments(){return[{tourneyId:"1073ed04-45ef-444e-8263-8cc77b5251e4",tourneyName:"mita",status:"open",openedDateTime:"2020-12-25T16:00Z",closedDateTime:""},{tourneyId:"sample-past-tourney-guid",tourneyName:"testing",status:"closed",openedDateTime:"2020-01-25T16:00Z",closedDateTime:"2020-01-25T16:50Z"},{tourneyId:"sample-past-tourney-guid",tourneyName:"mita 2",status:"open",openedDateTime:"2020-04-25T16:00Z",closedDateTime:""}]}}return e.ngInjectableDef=r.Nb({factory:function(){return new e},token:e,providedIn:"root"}),e})()},TMBv:function(e,o,t){"use strict";t.d(o,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(e,o,t)=>{const r=`${e*o/t-e}ms`,n=2*Math.PI*o/t;return{r:5,style:{top:`${9*Math.sin(n)}px`,left:`${9*Math.cos(n)}px`,"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(e,o,t)=>{const r=o/t,n=`${e*r-e}ms`,i=2*Math.PI*r;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,o)=>({r:6,style:{left:`${9-9*o}px`,"animation-delay":-110*o+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,o,t)=>({y1:17,y2:29,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":`${e*o/t-e}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(e,o,t)=>({y1:12,y2:20,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":`${e*o/t-e}ms`}})}}},YtD4:function(e,o,t){"use strict";t.d(o,"a",(function(){return r}));const r=e=>{try{if("string"!=typeof e||""===e)return e;const o=document.createDocumentFragment(),t=document.createElement("div");o.appendChild(t),t.innerHTML=e,m.forEach(e=>{const t=o.querySelectorAll(e);for(let r=t.length-1;r>=0;r--){const e=t[r];e.parentNode?e.parentNode.removeChild(e):o.removeChild(e);const a=i(e);for(let o=0;o<a.length;o++)n(a[o])}});const r=i(o);for(let e=0;e<r.length;e++)n(r[e]);const a=document.createElement("div");a.appendChild(o);const s=a.querySelector("div");return null!==s?s.innerHTML:a.innerHTML}catch(o){return console.error(o),""}},n=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let t=e.attributes.length-1;t>=0;t--){const o=e.attributes.item(t),r=o.name;if(!a.includes(r.toLowerCase())){e.removeAttribute(r);continue}const n=o.value;null!=n&&n.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}const o=i(e);for(let t=0;t<o.length;t++)n(o[t])},i=e=>null!=e.children?e.children:e.childNodes,a=["class","id","href","src","name","slot"],m=["script","style","iframe","meta","link","object","embed"]},m9yc:function(e,o,t){"use strict";t.d(o,"a",(function(){return r})),t.d(o,"b",(function(){return n}));const r=async(e,o,t,r,n)=>{if(e)return e.attachViewToDom(o,t,n,r);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof t?o.ownerDocument&&o.ownerDocument.createElement(t):t;return r&&r.forEach(e=>i.classList.add(e)),n&&Object.assign(i,n),o.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},n=(e,o)=>{if(o){if(e)return e.removeViewFromDom(o.parentElement,o);o.remove()}return Promise.resolve()}},opz7:function(e,o,t){"use strict";t.d(o,"a",(function(){return n})),t.d(o,"b",(function(){return i})),t.d(o,"c",(function(){return a})),t.d(o,"d",(function(){return r}));const r=()=>{const e=window.TapticEngine;e&&e.selection()},n=()=>{const e=window.TapticEngine;e&&e.gestureSelectionStart()},i=()=>{const e=window.TapticEngine;e&&e.gestureSelectionChanged()},a=()=>{const e=window.TapticEngine;e&&e.gestureSelectionEnd()}}}]);