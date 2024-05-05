"use strict";(self.webpackChunkcash_compass_docs=self.webpackChunkcash_compass_docs||[]).push([[431],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=s,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||n;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:s,o[1]=l;for(var u=2;u<n;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5323:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var a=r(7462),s=(r(7294),r(3905));const n={slug:"v0.1.0-and-releases",title:"v0.1.0 and our Release Strategy",authors:["eric.dudley"],tags:["welcome"]},o=void 0,l={permalink:"/blog/v0.1.0-and-releases",source:"@site/blog/v0.1.0-release.md",title:"v0.1.0 and our Release Strategy",description:"We've released our first beta version! Check out our v0.1.0 release notes.",date:"2024-05-05T20:25:35.000Z",formattedDate:"May 5, 2024",tags:[{label:"welcome",permalink:"/blog/tags/welcome"}],readingTime:1.565,hasTruncateMarker:!0,authors:[{name:"Eric Dudley",title:"Creator of Cash Compass",url:"https://github.com/ericdudley",imageURL:"https://github.com/ericdudley.png",key:"eric.dudley"}],frontMatter:{slug:"v0.1.0-and-releases",title:"v0.1.0 and our Release Strategy",authors:["eric.dudley"],tags:["welcome"]},prevItem:{title:"Welcome",permalink:"/blog/welcome"}},i={authorsImageUrls:[void 0]},u=[{value:"Roadmap &lt;-&gt; GitHub issues process",id:"roadmap---github-issues-process",level:2},{value:"Beta Releases",id:"beta-releases",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"We've released our first beta version! Check out our ",(0,s.kt)("a",{parentName:"p",href:"/docs/releases/v0.1.0"},"v0.1.0 release notes"),"."),(0,s.kt)("h1",{id:"release-strategy"},"Release Strategy"),(0,s.kt)("p",null,"Moving forward, we will be releasing Cash Compass on the first of every month. Each release will be composed of:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Enhancements - New features or improvements to existing features, the fun stuff!"),(0,s.kt)("li",{parentName:"ol"},"Bug fixes - Fixes for known issues, for high-impact issues we will release fixes between releases."),(0,s.kt)("li",{parentName:"ol"},"Chores - Internal refactors or other changes that have no direct impact on our users.")),(0,s.kt)("p",null,"In general, we will try to plan features at least 2 releases in the future on our new ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/users/ericdudley/projects/1/views/1?pane=info"},"Public Roadmap"),". If you have any comment on existing roadmap items or have an idea for a new item, feel free to contribute to our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ericdudley/cash-compass-docs/issues"},"GitHub Issues"),"."),(0,s.kt)("h2",{id:"roadmap---github-issues-process"},"Roadmap <-> GitHub issues process"),(0,s.kt)("p",null,"Our development process integrates user feedback directly into our roadmap. Here's how it works:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Idea Submission"),": Users submit ideas or feature requests as issues in our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ericdudley/cash-compass-docs/issues"},"GitHub repository"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Community and Team Review"),": These issues are open for community feedback. Our team regularly reviews these ideas and assesses their fit with our product goals.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Roadmap Planning"),": Selected ideas are tagged and added to our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/users/ericdudley/projects/1/views/1?pane=info"},"Public Roadmap"),", showing when they're planned for development.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Development and Release"),": Once scheduled, we work on developing the feature for an upcoming release."))),(0,s.kt)("p",null,"This streamlined process ensures that your ideas are heard and can become a part of Cash Compass's evolution."),(0,s.kt)("h2",{id:"beta-releases"},"Beta Releases"),(0,s.kt)("p",null,"For now, we'll be iterating on beta releases ",(0,s.kt)("inlineCode",{parentName:"p"},"v0.*.*"),". Once we feel like we're ready for a v1 release, we'll create the ",(0,s.kt)("inlineCode",{parentName:"p"},"v1.0.0")," release. Until then, expect potentially large changes to roll through as we build out new product features and stabilize our existing features. During this phase, feedback is not just welcomed, it's needed! Please leave your feedback in our public ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ericdudley/cash-compass-docs/issues"},"GitHub Issues")," or email us at ",(0,s.kt)("a",{parentName:"p",href:"mailto:feedback@cashcompass.co"},"feedback@cashcompass.co"),"."))}m.isMDXComponent=!0}}]);