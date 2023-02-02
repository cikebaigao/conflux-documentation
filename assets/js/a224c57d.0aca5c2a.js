"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2343],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(o),d=a,h=f["".concat(u,".").concat(d)]||f[d]||p[d]||r;return o?n.createElement(h,l(l({ref:t},c),{},{components:o})):n.createElement(h,l({ref:t},c))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},3003:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=o(7462),a=(o(7294),o(3905)),r=o(4996);const l={id:"conflux_tools",title:"Tools",keywords:["Tool"]},i=void 0,u={unversionedId:"build/conflux-core/tools/conflux_tools",id:"build/conflux-core/tools/conflux_tools",title:"Tools",description:"Conflux has tools that can help developers quickly build a dapp.",source:"@site/docs/build/conflux-core/tools/tools.md",sourceDirName:"build/conflux-core/tools",slug:"/build/conflux-core/tools/",permalink:"/docs/build/conflux-core/tools/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/build/conflux-core/tools/tools.md",tags:[],version:"current",frontMatter:{id:"conflux_tools",title:"Tools",keywords:["Tool"]},sidebar:"tutorialSidebar",previous:{title:"Tools",permalink:"/docs/category/tools"},next:{title:"SDKs",permalink:"/docs/build/conflux-core/sdks/"}},s={},c=[{value:"hardhat-conflux",id:"hardhat-conflux",level:2},{value:"Conflux-Truffle",id:"conflux-truffle",level:2},{value:"Conflux ChainIDE",id:"conflux-chainide",level:2},{value:"Conflux studio",id:"conflux-studio",level:2},{value:"Conflux Studio Web",id:"conflux-studio-web",level:2}],p={toc:c};function f(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Conflux has tools that can help developers quickly build a dapp."),(0,a.kt)("h2",{id:"hardhat-conflux"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/conflux-chain/hardhat-conflux"},"hardhat-conflux")),(0,a.kt)("p",null,"Hardhat is the morden Solidity developer toolkit, which can also used to develop contracts on ConfluxNetwork with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/conflux-chain/hardhat-conflux"},"hardhat-conflux")," plugin. This plugin brings to Hardhat the ",(0,a.kt)("inlineCode",{parentName:"p"},"js-conflux-sdk"),", which allows you to interact with the Conflux blockchain in a simple way."),(0,a.kt)("h2",{id:"conflux-truffle"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/Conflux-Chain/conflux-truffle"},"Conflux-Truffle")),(0,a.kt)("p",null,"Truffle is a world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier. We have ported it to Conflux-Truffle, which will work with the Conflux network and will have the same features and usage experience."),(0,a.kt)("p",null,"To find out how to use it, you can read ",(0,a.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/overview"},"Truffle's documentation"),".\nAnd ",(0,a.kt)("inlineCode",{parentName:"p"},"conflux-truffle"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-truffle/blob/conflux/ultimate-guide.md"},"setup guide")),(0,a.kt)("h2",{id:"conflux-chainide"},(0,a.kt)("a",{parentName:"h2",href:"https://chainide.com/s/createTempProject/conflux"},"Conflux ChainIDE")),(0,a.kt)("p",null,"ChainIDE is a Cloud-Based Multi-Chain IDE. Developers don\u2019t need to install extra tools while working on smart contracts. ChainIDE supports multi-chain development environments that include Conflux(core), Conflux(eSpace), Ethereum, BNB Chain, Polygon, Dfinity, Nervos, Flow, and it also supports consortium blockchains such as Chain33 and FiscoBcos.\nFor more information about how to use ChainIDE, please check ",(0,a.kt)("a",{parentName:"p",href:"https://chainide.gitbook.io/chainide-english-1/ethereum-ide-1/4.-conflux-ide"},"this page"),". "),(0,a.kt)("img",{alt:"PoS-Reference Architecture",src:(0,r.Z)("/img/chainide.png")}),(0,a.kt)("h2",{id:"conflux-studio"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/ObsidianLabs/ConfluxStudio/blob/master/README-EN.md"},"Conflux studio")),(0,a.kt)("p",null,"Conflux Studio is an integrated development environment (IDE), making developing Conflux smart contracts faster and easier, developed by ",(0,a.kt)("a",{parentName:"p",href:"https://www.obsidians.io/"},"ObsidianLabs"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/ObsidianLabs/ConfluxStudio/raw/master/screenshots/compile.png",alt:null})),(0,a.kt)("p",null,"You can download it from its ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ObsidianLabs/ConfluxStudio/releases"},"Github release page"),". Windows, Mac, and Linux systems are supported."),(0,a.kt)("p",null,"You can find its documentation in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ObsidianLabs/ConfluxStudio"},"readme"),", and there is also a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ObsidianLabs/conflux-dapp-tutorial"},"tutorial")," about how to use it to develop a Dapp."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/ObsidianLabs/ConfluxStudio/raw/master/screenshots/compile.png",alt:null})),(0,a.kt)("h2",{id:"conflux-studio-web"},(0,a.kt)("a",{parentName:"h2",href:"https://conflux.ide.black/"},"Conflux Studio Web")),(0,a.kt)("p",null,"The Web version of Conflux studio, that enable user develop smart contract in browser with FluentWallet."))}f.isMDXComponent=!0}}]);