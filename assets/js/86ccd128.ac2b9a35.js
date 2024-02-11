"use strict";(self.webpackChunkcash_compass_docs=self.webpackChunkcash_compass_docs||[]).push([[602],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>f});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||l;return a?o.createElement(f,r(r({ref:t},h),{},{components:a})):o.createElement(f,r({ref:t},h))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4023:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const l={},r="Re-balance Calculator",i={unversionedId:"app/tools/rebalance-calculator",id:"app/tools/rebalance-calculator",title:"Re-balance Calculator",description:"This doc will teach you how to use the Re-balance Calculator in Cash Compass.",source:"@site/docs/app/tools/00-rebalance-calculator.md",sourceDirName:"app/tools",slug:"/app/tools/rebalance-calculator",permalink:"/docs/app/tools/rebalance-calculator",draft:!1,tags:[],version:"current",lastUpdatedAt:1707641259,formattedLastUpdatedAt:"Feb 11, 2024",sidebarPosition:0,frontMatter:{},sidebar:"appDocsSidebar",previous:{title:"Insights",permalink:"/docs/app/expenses/insights"}},s={},c=[{value:"Accessing the Re-balance Calculator",id:"accessing-the-re-balance-calculator",level:2},{value:"Example Portfolios",id:"example-portfolios",level:2},{value:"Simple Rebalance",id:"simple-rebalance",level:3},{value:"Three Fund Portfolio",id:"three-fund-portfolio",level:3},{value:"Current Portfolio",id:"current-portfolio",level:2},{value:"Target Portfolio",id:"target-portfolio",level:2},{value:"Re-balance Transactions",id:"re-balance-transactions",level:2}],h={toc:c},u="wrapper";function p(e){let{components:t,...l}=e;return(0,n.kt)(u,(0,o.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"re-balance-calculator"},"Re-balance Calculator"),(0,n.kt)("p",null,"This doc will teach you how to use the Re-balance Calculator in Cash Compass."),(0,n.kt)("h2",{id:"accessing-the-re-balance-calculator"},"Accessing the Re-balance Calculator"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the ",(0,n.kt)("inlineCode",{parentName:"li"},"Tools")," menu in the top navigation bar and click on the ",(0,n.kt)("inlineCode",{parentName:"li"},"Portfolio Re-balance Calculator")," link."),(0,n.kt)("li",{parentName:"ol"},"The page is split into four sections:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Example Portfolios"),": This section provides shortcuts to example portfolios, a great way to get started."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Current Portfolio"),": This section allows you to input your current portfolio."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Target Portfolio"),": This section allows you to input your target allocation and visualizes the target portfolio."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Re-balance Transactions"),": This section shows the transactions you need to make to re-balance your portfolio.")))),(0,n.kt)("h2",{id:"example-portfolios"},"Example Portfolios"),(0,n.kt)("p",null,"The example portfolios are a great way to get started with the Re-balance Calculator. They are pre-populated with data and you can use them as a starting point to create your own portfolio."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example Portfolios",src:a(6970).Z,width:"1242",height:"334"})),(0,n.kt)("h3",{id:"simple-rebalance"},"Simple Rebalance"),(0,n.kt)("p",null,"This portfolio shows a portfolio that is 50% AAPL and 50% TSLA (by value). The target portfolio allocation slider is set to 25% AAPL and 75% TSLA. This means that the target portfolio is 25% AAPL and 75% TSLA. The re-balance transactions show that you need to sell 50% of your AAPL and buy TSLA to get to the target portfolio. Note that the calculator assumes that you can not buy fractional shares, so it rounds down the number of shares to the nearest whole number."),(0,n.kt)("h3",{id:"three-fund-portfolio"},"Three Fund Portfolio"),(0,n.kt)("p",null,"This portfolio just sets the target portfolio to a sensible three fund portfolio. If you're looking into getting into boglehead investing, this is a great place to start."),(0,n.kt)("h2",{id:"current-portfolio"},"Current Portfolio"),(0,n.kt)("p",null,"This section allows you to input your current portfolio. You can add as many stocks as you want by clicking on ",(0,n.kt)("inlineCode",{parentName:"p"},"Add Holding"),". You can also enter into the ",(0,n.kt)("inlineCode",{parentName:"p"},"Uninvested Funds")," field any funds that you have that are not currently invested in the market and want to include in the re-balance."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Current Portfolio",src:a(907).Z,width:"1265",height:"553"})),(0,n.kt)("p",null," The fields are:\n| Field Name | Usage |\n| ---------- | ----- |\n| Symbol | The stock symbol. |\n| Price per Share | The price per share to use in the calculation (note, you can click on the refresh icon in the table to fetch the latest price). |\n| Held Shares | The number of shares you own. |"),(0,n.kt)("p",null,"With these fields, the table will show the current value of each holding as well as the total value next to the heading of the section."),(0,n.kt)("h2",{id:"target-portfolio"},"Target Portfolio"),(0,n.kt)("p",null,"The target portfolio is composed of a list of holdings and the target allocation for each holding. You can add as many holdings as you want by clicking on ",(0,n.kt)("inlineCode",{parentName:"p"},"Add Holding"),". "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Target Portfolio",src:a(3164).Z,width:"1255",height:"561"})),(0,n.kt)("p",null,"The fields are:\n| Field Name | Usage |\n| ---------- | ----- |\n| Symbol | The stock symbol. |\n| Price per Share | The price per share to use in the calculation (note, you can click on the refresh icon in the table to fetch the latest price). |\n| Target Allocation | The target allocation for this holding, this is controlled by dragging the slider above the holdings table. |"),(0,n.kt)("p",null,"With these fields, the table will show the target value of each holding as well as the total value next to the heading of the section (this will be the same as the total value in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Current Portfolio")," section)."),(0,n.kt)("h2",{id:"re-balance-transactions"},"Re-balance Transactions"),(0,n.kt)("p",null,"This section shows the transactions you need to make to re-balance your portfolio. It will show the number of shares you need to buy or sell to get to the target portfolio. Note that the calculator assumes that you can not buy fractional shares, so it rounds down the number of shares to the nearest whole number."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Re-balance Transactions",src:a(52).Z,width:"1255",height:"486"})),(0,n.kt)("p",null,"You can select the following strategies for buying and selling:\n| Strategy | Usage |\n| -------- | ----- |\n| None | This will prevent buying or selling while still trying to get as close to the target portfolio as possible. |\n| Highest allocation difference | This will prioritize buying/selling the holding that has the largest percentage difference between the current allocation and the target allocation. |\n| Highest monetary value difference | This will prioritize buying/selling the holding that has the largest monetary difference between the current value and the target value. |"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This tool is intended to be used as a guide. It is not meant to be a replacement for a financial advisor. Before making any trades, ensure that you understand the trades you are making and the potential tax implications.")))}p.isMDXComponent=!0},907:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/current_portfolio-69df7449588489e517664d2b0f9cca46.png"},6970:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/example_portfolios-56aaebcd094ef60ffedd488edcafaef3.png"},52:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/rebalance_transactions-342a71b77c5095ac4e607ab1fe0e0e1f.png"},3164:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/target_portfolio-85f6632af47164901bb7acd361252032.png"}}]);