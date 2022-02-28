"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9643],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7851:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"Wachtindicatie",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Wachtindicatie",sidebar_position:6,pagination_label:"Wachtindicatie",description:"Richtlijnen voor formulieren - Wachtindicatie.",keywords:["formulieren","wachtindicatie"]},c="Richtlijnen voor formulieren: Wachtindicatie",d={unversionedId:"patronen/formulieren/wachtindicatie",id:"patronen/formulieren/wachtindicatie",title:"Wachtindicatie",description:"Richtlijnen voor formulieren - Wachtindicatie.",source:"@site/docs/patronen/03-formulieren/06-wachtindicatie.md",sourceDirName:"patronen/03-formulieren",slug:"/patronen/formulieren/wachtindicatie",permalink:"/documentatie/docs/patronen/formulieren/wachtindicatie",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/patronen/03-formulieren/06-wachtindicatie.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Wachtindicatie",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Wachtindicatie",sidebar_position:6,pagination_label:"Wachtindicatie",description:"Richtlijnen voor formulieren - Wachtindicatie.",keywords:["formulieren","wachtindicatie"]},sidebar:"patronen",previous:{title:"Hulp en ondersteuning",permalink:"/documentatie/docs/patronen/formulieren/help"},next:{title:"Validatie en foutpreventie",permalink:"/documentatie/docs/patronen/formulieren/validatie"}},s=[{value:"\u2018Skeleton loading\u2019",id:"skeleton-loading",children:[],level:2},{value:"Gebruik een laad component wanneer invoer wordt opgeslagen",id:"gebruik-een-laad-component-wanneer-invoer-wordt-opgeslagen",children:[],level:2},{value:"\u2018Progressive loading\u2019: volgorde van het laden van elementen",id:"progressive-loading-volgorde-van-het-laden-van-elementen",children:[],level:2},{value:"Referenties",id:"referenties",children:[],level:2}],p={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"richtlijnen-voor-formulieren-wachtindicatie"},"Richtlijnen voor formulieren: Wachtindicatie"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Status: ",(0,o.kt)("strong",{parentName:"em"},"In ontwikkeling"))),(0,o.kt)("p",null,"Het kan helpen gebruikers te laten weten wanneer ze moeten wachten. Het maakt aan hen duidelijk wat er gaande is, geeft feedback op een actie van de gebruiker, of kan de perceptie van de wachttijd verkorten."),(0,o.kt)("h2",{id:"skeleton-loading"},"\u2018Skeleton loading\u2019"),(0,o.kt)("p",null,"Gebruik skeleton loading alleen voor containers, niet voor individuele formulier componenten."),(0,o.kt)("p",null,"IBM\u2019s Carbon design system zegt hierover het volgende:"),(0,o.kt)("p",null,"\u201cOnly use skeleton states on container-based components like tiles and structured lists or data-based components like data tables and cards. In most cases, action components (e.g. buttons, input fields, checkboxes, toggles) do not need to have a skeleton state.\u201d ",(0,o.kt)("sup",{parentName:"p",id:"fnref-carbon-loading"},(0,o.kt)("a",{parentName:"sup",href:"#fn-carbon-loading",className:"footnote-ref"},"carbon-loading"))),(0,o.kt)("h2",{id:"gebruik-een-laad-component-wanneer-invoer-wordt-opgeslagen"},"Gebruik een laad component wanneer invoer wordt opgeslagen"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/248921/142436065-130ccbb7-e98e-405d-bc9f-156ae80c5b8a.png",alt:"Laad component over de gehele pagina uit het Carbon Design System"})),(0,o.kt)("p",null,"Een voorbeeld uit het Carbon Design System van een laad component die over de gehele pagina getoond wordt. ",(0,o.kt)("sup",{parentName:"p",id:"fnref-carbon-loading"},(0,o.kt)("a",{parentName:"sup",href:"#fn-carbon-loading",className:"footnote-ref"},"carbon-loading"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.carbondesignsystem.com/a12da714d1543a1ebf216983682adb8d/inline-loading-animated.gif",alt:"Laad component op een enkel knop component (animatie)"})),(0,o.kt)("p",null,"Een voorbeeld uit het Carbon Design System van een laad component op een enkel knop component. ",(0,o.kt)("sup",{parentName:"p",id:"fnref-carbon-loading"},(0,o.kt)("a",{parentName:"sup",href:"#fn-carbon-loading",className:"footnote-ref"},"carbon-loading"))),(0,o.kt)("p",null,"Het laatste voorbeeld geeft direct feedback aan de gebruiker dat zowel de invoer opgeslagen wordt, en opgeslagen is. Een gebruiker weet hier door dat een actie uitgevoert wordt/is en zo verkom je dat een actie nogmaals door een gebruiker uitgevoerd wordt."),(0,o.kt)("h2",{id:"progressive-loading-volgorde-van-het-laden-van-elementen"},"\u2018Progressive loading\u2019: volgorde van het laden van elementen"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Basisstructuur van de pagina (\u2018",(0,o.kt)("em",{parentName:"li"},"skeleton")," versie\u2019)"),(0,o.kt)("li",{parentName:"ol"},"Tekst"),(0,o.kt)("li",{parentName:"ol"},"Afbeeldingen, content buiten de viewport, en interactieve componenten")),(0,o.kt)("h2",{id:"referenties"},"Referenties"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-carbon-loading"},(0,o.kt)("a",{parentName:"li",href:"https://www.carbondesignsystem.com/patterns/loading-pattern/"},"Carbon Design System: Patterns - Loading"),(0,o.kt)("a",{parentName:"li",href:"#fnref-carbon-loading",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);