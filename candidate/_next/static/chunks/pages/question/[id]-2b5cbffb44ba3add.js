(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[885],{4749:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/question/[id]",function(){return n(755)}])},7511:function(e,t){"use strict";t.Z={src:"/candidate/_next/static/media/play-gray.2243776b.svg",height:25,width:25}},5327:function(e,t,n){"use strict";n.d(t,{F:function(){return c}});var r=n(2322),s="/candidate/_next/static/media/arrow-long.9a04a14e.svg",i=n(5632),a=n(9097);function c(e){var t=e.hash,n=(0,i.useRouter)();return(0,r.jsx)("div",{className:"bg-black py-[46px] md:py-[76px]",children:(0,r.jsx)(a.default,{href:t?"/candidate#"+t:"/candidate",children:(0,r.jsx)("a",{children:(0,r.jsxs)("div",{className:"w-fit text-center flex justify-center space-x-[20px] m-auto hover:cursor-pointer",onClick:function(){n.push(t?"/#"+t:"/")},children:[(0,r.jsx)("img",{src:s,alt:"arrow-home"}),(0,r.jsx)("p",{className:"typo-h7 text-white",children:"\u0e01\u0e25\u0e31\u0e1a\u0e2b\u0e19\u0e49\u0e32\u0e23\u0e27\u0e21\u0e1c\u0e39\u0e49\u0e2a\u0e21\u0e31\u0e04\u0e23"})]})})})})}},3934:function(e,t,n){"use strict";n.d(t,{v:function(){return i}});var r=n(2784),s={exclusive:[],policy:[],opinion:[],lifestyle:[],special:[]},i=function(e){var t=(0,r.useState)(s),n=t[0],i=t[1];return(0,r.useEffect)((function(){var t=e.filter((function(e){return"exclusive"===e.type})),n=e.filter((function(e){return"policy"===e.type})),r=e.filter((function(e){return"attitude"===e.type})),s=e.filter((function(e){return"lifestyle"===e.type})),a=e.filter((function(e){return"special"===e.type}));i({exclusive:t,policy:n,opinion:r,lifestyle:s,special:a})}),[e]),n}},755:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return E}});var r=n(2322),s=n(5632),i=n(2784),a=n(1668),c=n(7094),o=n(9097),l=n(422);function d(e){var t=e.answer,n=e.ignoreGovernor,a=(0,i.useState)(!0),d=a[0],x=a[1],p=((0,s.useRouter)(),(0,l.q)(t.url)),u=p?"https://www.youtube.com/embed/".concat(p):"",m=(0,i.useState)(""),f=m[0],h=m[1];return(0,i.useEffect)((function(){x(!0),h(u)}),[u]),(0,r.jsxs)("div",{className:"max-w-[1500px] w-[90vw] pt-[40px] md:pt-[50px] pb-[28px] md:pb-[100px] mx-auto text-center",children:[u?(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("div",{className:"max-w-[1500px] max-h-[843.75px] w-[90vw] h-[50.625vw] mb-[40px]",style:{display:d?"flex":"none"},children:(0,r.jsx)(c.$,{className:"h-[40vw] w-[40vw] m-auto",thickness:"7px",speed:"0.65s",emptyColor:"white",color:"black"})}),(0,r.jsx)("iframe",{style:{display:d?"none":"unset"},onLoad:function(){x(!1)},className:"max-w-[1500px] max-h-[843.75px] w-[90vw] h-[50.625vw] mb-[40px]",id:"answer-".concat(t.id),src:f,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}):(0,r.jsx)("div",{className:"max-w-[1500px] max-h-[843.75px] w-[90vw] h-[50.625vw] mb-[40px] typo-h3 text-white flex items-center justify-center",children:"No Video"}),!n&&(0,r.jsx)(o.default,{href:"/".concat(t.nc_xeff__candidates_id),children:(0,r.jsx)("a",{children:(0,r.jsx)("p",{className:"typo-h6 text-white mb-[20px] hover:cursor-pointer hover:underline",children:t.governorsRead.name})})}),(0,r.jsx)("p",{className:"typo-b3 text-white max-w-[650px] m-auto",children:t.text})]})}var x=n(7511),p=n(3934);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){(0,s.useRouter)();var t,n,i=e.questionList,a=(0,p.v)(i),c=function(e,t){return(0,r.jsxs)("div",{className:"flex flex-col text-left",children:[(0,r.jsxs)("p",{className:"typo-h6",children:[e,":"]}),(0,r.jsx)("div",{className:"flex flex-col space-y-[25px] mt-5",children:t.map((function(e,t){return n=e,(0,r.jsx)(o.default,{href:"/question/".concat(n.id),children:(0,r.jsxs)("a",{className:"flex hover:cursor-pointer hover:underline hover:decoration-1",children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:x.Z.src,alt:"play-bt-gray",className:"w-[15px] h-[15px] md:w-[25px] md:h-[25px]"})}),(0,r.jsx)("div",{className:"typo-b4 flex-1 ml-[10px]",children:n.question})]})},"question-".concat(n.type,"-").concat(n.number));var n}))})]})};return(0,r.jsxs)("div",{className:"text-white max-w-[1065px] m-auto px-[18px] pt-[70px] md:pt-[110px] pb-[64px] md:pb-[88px]",children:[(0,r.jsx)("p",{className:"typo-h5 text-center",children:"\u0e14\u0e39\u0e04\u0e33\u0e16\u0e32\u0e21\u0e2d\u0e37\u0e48\u0e19\u0e46"}),a.exclusive.length>0&&(0,r.jsx)("div",{className:"border-b border-[#9d9d9d80] py-[20px] md:py-[40px] flex m-auto justify-center",children:(0,r.jsx)(o.default,{href:"/question/".concat(a.exclusive[0].id),children:(0,r.jsxs)("a",{className:"flex m-fit hover:cursor-pointer hover:underline hover:decoration-1",children:[(0,r.jsx)("img",{src:x.Z.src,alt:"play-bt-gray",className:"w-[15px] h-[15px] md:w-[25px] md:h-[25px]"}),(0,r.jsxs)("p",{className:"typo-b5 ml-[10px] flex flex-wrap text-left",children:[(0,r.jsx)("span",{className:"font-bold",children:"EXCLUSIVE SPEECH : "})," ",null===(n=a.exclusive[0])||void 0===n?void 0:n.question]})]})})}),(0,r.jsxs)("div",{className:"grid grid-cols md:grid-cols-3 gap-[30px] py-[20px] md:py-[40px] border-b border-[#9d9d9d80]",children:[c("POLICY",a.policy),c("OPINION",a.opinion),c("LIFESTYLE",a.lifestyle)]}),(0,r.jsxs)("div",{className:"py-[20px] md:py-[40px] border-b border-[#9d9d9d80]",children:[(0,r.jsxs)("p",{className:"typo-b4 text-center font-bold",children:["+ \u0e2d\u0e35\u0e01 ",(t=Math).max.apply(t,m(a.special.map((function(e){return e.number}))))," ","\u0e04\u0e33\u0e16\u0e32\u0e21\u0e40\u0e04\u0e25\u0e35\u0e22\u0e23\u0e4c\u0e43\u0e08\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e15\u0e31\u0e27\u0e1c\u0e39\u0e49\u0e2a\u0e21\u0e31\u0e04\u0e23"]}),(0,r.jsx)("div",{className:"flex md:flex-row flex-col flex-wrap justify-between md:mt-[15px]",children:i.filter((function(e){return"special"===e.type})).reduce((function(e,t){return e.find((function(e){var n,r;return(null===(n=e.governorsRead)||void 0===n?void 0:n.name)===(null===(r=t.governorsRead)||void 0===r?void 0:r.name)}))?e:t.governorsRead?m(e).concat([t]):e}),[]).sort((function(e,t){return e.nc_xeff__candidates_id>t.nc_xeff__candidates_id?1:-1})).map((function(e){var t;return(0,r.jsx)(o.default,{href:"/".concat(e.nc_xeff__candidates_id||1),children:(0,r.jsxs)("a",{className:"flex hover:cursor-pointer hover:underline hover:decoration-1 mt-[25px] mx-[5px]",children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)("img",{src:x.Z.src,alt:"play-bt-gray",className:"w-[15px] h-[15px] md:w-[25px] md:h-[25px]"})}),(0,r.jsx)("div",{className:"typo-b4 ml-[10px]",children:null===(t=e.governorsRead)||void 0===t?void 0:t.name})]})},"candidate-".concat(e.nc_xeff__candidates_id))}))})]})]})}var h=n(4106),v=n(5327);function w(e){var t=e.question,n=e.questionList,s=e.answerList,i=e.pageUrl,a=s.sort((function(e,t){return e.nc_xeff__candidates_id>t.nc_xeff__candidates_id?1:-1}));return(0,r.jsxs)("div",{className:"bg-black pt-[40px] md:pt-[110px]",children:[(0,r.jsxs)("div",{className:"w-[90vw] max-w-[1500px] m-auto text-center pb-[42px] md:pb-[20px]",children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("p",{className:"typo-h7 text-white",children:"EXCLUSIVE SPEECH"}),(0,r.jsx)("p",{className:"typo-h2 text-white mt-[15px] mb-[16px] md:mb-[68px]",children:t.question})]}),a.map((function(e,t){return(0,r.jsx)(d,{answer:e},t)}))]}),(0,r.jsx)(h.E,{white:!0,url:i}),(0,r.jsx)(f,{questionList:n}),(0,r.jsx)(v.F,{})]})}function y(e){(0,s.useRouter)();var t=e.answer,n=(0,i.useState)(!0),a=n[0],d=n[1],x=(0,l.q)(t.url),p=x?"https://www.youtube.com/embed/".concat(x):"",u=(0,i.useState)(""),m=u[0],f=u[1];return(0,i.useEffect)((function(){d(!0),f(p)}),[p]),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row max-w-[250px] md:max-w-[930px] items-center m-auto",children:[(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)(o.default,{href:"/".concat(t.nc_xeff__candidates_id),children:(0,r.jsx)("a",{children:(0,r.jsx)("p",{className:"typo-h6 hover:cursor-pointer hover:underline",children:t.governorsRead.name})})}),(0,r.jsx)("p",{className:"typo-b3 mt-[20px]",children:t.text})]}),p?(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("div",{className:"w-[250px] md:w-[450px] h-[250px] md:h-[450px] md:ml-[30px] mt-[20px] md:mt-0",style:{display:a?"flex":"none"},children:(0,r.jsx)(c.$,{className:"w-[50%] h-[50%] m-auto",thickness:"7px",speed:"0.65s",emptyColor:"white",color:"black"})}),(0,r.jsx)("iframe",{style:{display:a?"none":"unset"},onLoad:function(){d(!1)},className:"w-[250px] md:w-[450px] h-[250px] md:h-[450px] md:ml-[30px] mt-[20px] md:mt-0",id:"answer-".concat(t.id),src:m,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}):(0,r.jsx)("div",{className:"w-[250px] md:w-[450px] h-[250px] md:h-[450px] mb-[40px] typo-h3 text-white flex items-center justify-center",children:"No Video"})]})}function j(e){var t=e.answerList;return(0,r.jsx)("div",{className:"space-y-[68px]",children:t.map((function(e,t){return(0,r.jsx)(y,{answer:e},"standard-ans-".concat(t))}))})}var b={policy:"POLICY",attitude:"OPINION",lifestyle:"LIFESTYLE",special:"SPECIAL"};function N(e){var t=e.question,n=e.questionList,s=e.answerList,a=e.pageUrl,c=s.sort((function(e,t){return e.nc_xeff__candidates_id>t.nc_xeff__candidates_id?1:-1}));return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsxs)("div",{className:"pt-[40px] md:pt-[110px] px-[20px]",children:[(0,r.jsxs)("div",{className:" max-w-[930px] m-auto text-center",children:[(0,r.jsxs)("p",{className:"typo-h7 ",children:[b[t.type]," QUESTION"," ",t.number,":"]}),(0,r.jsx)("p",{className:"typo-h2 mt-[15px]",children:t.question}),t.description&&(0,r.jsx)("p",{className:"typo-b4 mt-[75px] md:mt-[60px]",children:t.description})]}),(0,r.jsx)("div",{className:"mt-[60px] md:mt-[80px] mb-[48px] md:mb-[94px]",children:(0,r.jsx)(j,{answerList:c})})]}),(0,r.jsx)(h.E,{url:a}),(0,r.jsxs)("div",{className:"bg-black mt-[20px]",children:[(0,r.jsx)(f,{questionList:n}),(0,r.jsx)(v.F,{})]})]})}var _=n(7652),g=!0;function E(e){var t=e.question,n=e.questionList,c=e.answerList,o=e.isComingSoon,l=(0,s.useRouter)(),d=(0,i.useState)(""),x=d[0],p=d[1],u="exclusive"===t.type;return(0,i.useEffect)((function(){p(window.location.href),o&&l.push("/comingSoon")}),[]),(0,r.jsxs)("div",{children:[(0,r.jsx)(a.Z,{title:t.question||"\u0e04\u0e33\u0e16\u0e32\u0e21",imageSrc:(0,_.tF)(t.type,t.number||1)}),o?(0,r.jsx)("div",{}):u?(0,r.jsx)(w,{question:t,answerList:c,questionList:n,pageUrl:x}):(0,r.jsx)(N,{question:t,answerList:c,questionList:n,pageUrl:x})]})}},422:function(e,t,n){"use strict";n.d(t,{q:function(){return r}});var r=function(e){if(!e)return"";var t=e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);return t?t[1]:""}}},function(e){e.O(0,[58,94,721,774,888,179],(function(){return t=4749,e(e.s=t);var t}));var t=e.O();_N_E=t}]);