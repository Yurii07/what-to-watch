"use strict";(self.webpackChunkwhat_to_watch=self.webpackChunkwhat_to_watch||[]).push([[88],{6633:function(e,n){n.Z={baseUrl:"https://api.themoviedb.org/3/",apiKey:"6442682edab45e7b1177e201f01cc56d",originalImage:function(e){return"https://image.tmdb.org/t/p/original/".concat(e)},w500Image:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)}}},3733:function(e,n,r){r.d(n,{W3:function(){return h},ZP:function(){return p},q8:function(){return m},Oq:function(){return f}});var t=r(4165),i=r(5861),s=r(1413),a=r(4569),c=r.n(a),o=r(4245),l=r(6633),u=c().create({baseURL:l.Z.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:function(e){return o.stringify((0,s.Z)((0,s.Z)({},e),{},{api_key:l.Z.apiKey}))}});u.interceptors.request.use(function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),u.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var d=u,h={movie:"movie",tv:"tv"},m={upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},f={popular:"popular",top_rated:"top_rated",on_the_air:"on_the_air"},p={getMoviesList:function(e,n){var r="movie/"+m[e];return d.get(r,n)},getTvList:function(e,n){var r="tv/"+f[e];return d.get(r,n)},getVideos:function(e,n){var r=h[e]+"/"+n+"/videos";return d.get(r,{params:{}})},search:function(e,n){var r="search/"+h[e];return d.get(r,n)},detail:function(e,n,r){var t=h[e]+"/"+n;return d.get(t,r)},credits:function(e,n){var r=h[e]+"/"+n+"/credits";return d.get(r,{params:{}})},similar:function(e,n){var r=h[e]+"/"+n+"/similar";return d.get(r,{params:{}})}}},5678:function(e,n,r){r.d(n,{f:function(){return s},Z:function(){return a}});r(2791);var t=r(184),i=function(e){return(0,t.jsx)("button",{className:"btn ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})},s=function(e){return(0,t.jsx)(i,{className:"btn-outline ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})},a=i},3024:function(e,n,r){var t,i=r(168),s=r(3504),a=r(7939),c=r(184);n.Z=function(){return(0,c.jsxs)(o,{children:[(0,c.jsxs)("span",{style:{marginLeft:"15%",fontSize:"1.25rem"},children:["Questions? ",(0,c.jsx)(s.rU,{to:"#",children:" Call 063-153-02-12 Yurii "})]}),(0,c.jsxs)("div",{className:"footer-columns",children:[(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"FAQ"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Investor Relations"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Ways to Watch"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Corporate Information"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Netflix Originals"})})]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Help Center"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Jobs"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Terms of Use"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Contact Us"})})]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Account"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Redeem Gift Cards"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Privacy"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Speed Test"})})]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Media Center"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Buy Gift Cards"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Cookie Preferences"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"#",children:"Legal Notices"})})]})]})]})};var o=a.ZP.div(t||(t=(0,i.Z)(["\n  background: #000;\n  padding-top: 5rem;\n  padding-bottom: 3rem;\n  color: #999;\n\n  .footer-columns {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    width: 75%;\n    margin: 1rem auto 0;\n    font-size: 0.9rem;\n    overflow: auto;\n  }\n\n  ul li {\n    list-style: none;\n    line-height: 2.5;\n  }\n\n  a {\n    color: #999;\n    &:hover {\n      text-decoration: underline;\n      cursor: pointer;\n    }\n  }\n\n  /* Language Button */\n  .lang-btn {\n    background: transparent;\n    border: 0.9px solid #333;\n    padding: 1rem;\n    width: 8.125rem;\n    margin: 2rem 0 1rem 15%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n     margin: 2rem 0 0; \n  }\n\n  /* Toggle Language Content */\n  .lang-toggle {\n    margin-left: 15%;\n  }\n\n  .lang-toggle ul {\n    padding-inline-start: 0;\n    margin-block-start: -1rem;\n  }\n\n  .lang-toggle ul li {\n    background: var(--main-deep-dark);\n    width: 8.125rem;\n    border: 1px solid #333;\n    text-align: center;\n    &:hover {\n      background: #0085ff;\n      color: #fff;\n    }\n  }\n"])))},6046:function(e,n,r){r.d(n,{Z:function(){return f}});var t=r(2791),i=r(6871),s=r(3504),a=r(8522),c=r(9535),o=r(365),l=r(5704),u=r(4956);var d=r.p+"static/media/logo.5787551b8de42aef368c379572555ada.svg",h=r(184),m=[{display:"Home",path:"/"},{display:"Movies",path:"/movie"},{display:"TV Series",path:"/tv"}],f=function(){var e=(0,i.TH)().pathname,n=(0,a.I)().user,r=(0,t.useRef)(null),f=(0,l.a)().isAuth,p=m.findIndex((function(n){return n.path===e})),x=(0,u.T)();(0,t.useEffect)((function(){var e=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?r.current.classList.add("shrink"):r.current.classList.remove("shrink")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);var v=(0,o.v0)();return(0,h.jsx)("div",{ref:r,className:"header",children:(0,h.jsxs)("div",{className:"header__wrap container",children:[(0,h.jsx)("div",{className:"logo",children:(0,h.jsxs)(s.rU,{to:"/",children:["  ",(0,h.jsx)("img",{src:d,alt:"",className:"logo"})]})}),f?(0,h.jsxs)("ul",{className:"header__nav",children:[m.map((function(e,n){return(0,h.jsx)("li",{className:"".concat(n===p?"active":""),children:(0,h.jsx)(s.rU,{to:e.path,children:e.display})},n)})),(0,h.jsxs)("button",{className:"log-out",onClick:function(){(0,o.w7)(v).then((function(){x((0,c.kX)())})).catch((function(e){console.log(e,"error")}))},children:["log out from ",(0,h.jsx)("br",{}),null===n||void 0===n?void 0:n.email," "]})]}):(0,h.jsxs)("div",{children:[(0,h.jsx)(s.rU,{className:"link",to:"/login",children:"login"})," ",(0,h.jsx)("br",{}),(0,h.jsx)(s.rU,{className:"link",to:"/register",children:"register"})]})]})})}},9994:function(e,n,r){r.d(n,{Z:function(){return o}});r(2791);var t=r(3504),i=r(5678),s=r(3733),a=r(6633),c=r(184),o=function(e){var n=e.item,r="/"+s.W3[e.category]+"/"+n.id,o=a.Z.w500Image(n.poster_path||n.backdrop_path);return(0,c.jsxs)(t.rU,{to:r,children:[(0,c.jsx)("div",{className:"movie-card",style:{backgroundImage:"url(".concat(o,")")},children:(0,c.jsx)(i.Z,{children:(0,c.jsx)("i",{className:"bx bx-play",children:"Play"})})}),(0,c.jsx)("h3",{children:n.title||n.name})]})}},5703:function(e,n,r){r.d(n,{Z:function(){return h}});var t=r(4165),i=r(5861),s=r(885),a=r(2791),c=r(1808),o=r(4242),l=r(3733),u=r(9994),d=r(184),h=function(e){var n=(0,a.useState)([]),r=(0,s.Z)(n,2),h=r[0],m=r[1];return(0,a.useEffect)((function(){var n=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(){var r,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=null,i={},"similar"===e.type){n.next=15;break}n.t0=e.category,n.next=n.t0===l.W3.movie?6:10;break;case 6:return n.next=8,l.ZP.getMoviesList(e.type,{params:i});case 8:return r=n.sent,n.abrupt("break",13);case 10:return n.next=12,l.ZP.getTvList(e.type,{params:i});case 12:r=n.sent;case 13:n.next=18;break;case 15:return n.next=17,l.ZP.similar(e.category,e.id);case 17:r=n.sent;case 18:m(r.results);case 19:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,d.jsx)("div",{className:"movie-list",children:(0,d.jsx)(c.t,{grabCursor:!0,spaceBetween:10,slidesPerView:"auto",children:h.map((function(n,r){return(0,d.jsx)(o.o,{children:(0,d.jsx)(u.Z,{item:n,category:e.category})},r)}))})})}},6088:function(e,n,r){r.r(n),r.d(n,{default:function(){return v}});var t=r(4165),i=r(5861),s=r(885),a=r(2791),c=r(6871),o=r(3733),l=r(6633),u=r(184),d=function(e){var n=(0,c.UO)().category,r=(0,a.useState)([]),d=(0,s.Z)(r,2),h=d[0],m=d[1];return(0,a.useEffect)((function(){var r=function(){var r=(0,i.Z)((0,t.Z)().mark((function r(){var i;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.ZP.credits(n,e.id);case 2:i=r.sent,m(i.cast.slice(0,5));case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[n,e.id]),(0,u.jsx)("div",{className:"casts",children:h.map((function(e,n){return(0,u.jsxs)("div",{className:"casts__item",children:[(0,u.jsx)("div",{className:"casts__item__img",style:{backgroundImage:"url(".concat(l.Z.w500Image(e.profile_path),")")}}),(0,u.jsx)("p",{className:"casts__item__name",children:e.name})]},n)}))})},h=function(e){var n=e.item,r=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=9*r.current.offsetWidth/16+"px";r.current.setAttribute("height",e)}),[]),(0,u.jsxs)("div",{className:"video",children:[(0,u.jsx)("div",{className:"video__title",children:(0,u.jsx)("h2",{children:n.name})}),(0,u.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(n.key),ref:r,width:"100%",title:"video"})]})},m=function(e){var n=(0,c.UO)().category,r=(0,a.useState)([]),l=(0,s.Z)(r,2),d=l[0],m=l[1];return(0,a.useEffect)((function(){var r=function(){var r=(0,i.Z)((0,t.Z)().mark((function r(){var i;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.ZP.getVideos(n,e.id);case 2:i=r.sent,m(i.results.slice(0,5));case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[n,e.id]),(0,u.jsx)(u.Fragment,{children:d.map((function(e,n){return(0,u.jsx)(h,{item:e},n)}))})},f=r(5703),p=r(6046),x=r(3024),v=function(){var e=(0,c.UO)(),n=e.category,r=e.id,h=(0,a.useState)(null),v=(0,s.Z)(h,2),g=v[0],j=v[1];return(0,a.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){var i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.detail(n,r,{params:{}});case 2:i=e.sent,j(i),window.scrollTo(0,0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n,r]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p.Z,{}),g&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(l.Z.originalImage(g.backdrop_path||g.poster_path),")")}}),(0,u.jsxs)("div",{className:"mb-3 movie-content container",children:[(0,u.jsx)("div",{className:"movie-content__poster",children:(0,u.jsx)("div",{className:"movie-content__poster__img",style:{backgroundImage:"url(".concat(l.Z.originalImage(g.poster_path||g.backdrop_path),")")}})}),(0,u.jsxs)("div",{className:"movie-content__info",children:[(0,u.jsx)("h1",{className:"title",children:g.title||g.name}),(0,u.jsx)("div",{className:"genres",children:g.genres&&g.genres.slice(0,5).map((function(e,n){return(0,u.jsx)("span",{className:"genres__item",children:e.name},n)}))}),(0,u.jsx)("p",{className:"overview",children:g.overview}),(0,u.jsxs)("div",{className:"cast",children:[(0,u.jsx)("div",{className:"section__header",children:(0,u.jsx)("h2",{children:"Casts"})}),(0,u.jsx)(d,{id:g.id})]})]})]}),(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("div",{className:"section mb-3",children:(0,u.jsx)(m,{id:g.id})}),(0,u.jsxs)("div",{className:"section mb-3",children:[(0,u.jsx)("div",{className:"section__header mb-2",children:(0,u.jsx)("h2",{children:"Similar"})}),(0,u.jsx)(f.Z,{category:n,type:"similar",id:g.id})]})]})]}),(0,u.jsx)(x.Z,{})]})}}}]);
//# sourceMappingURL=88.32f1bc82.chunk.js.map