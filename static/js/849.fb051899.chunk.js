"use strict";(self.webpackChunkwhat_to_watch=self.webpackChunkwhat_to_watch||[]).push([[849],{3024:function(n,e,r){var i,t=r(168),l=r(3504),s=r(7939),o=r(184);e.Z=function(){return(0,o.jsxs)(a,{children:[(0,o.jsxs)("span",{style:{marginLeft:"15%",fontSize:"1.25rem"},children:["Questions? ",(0,o.jsx)(l.rU,{to:"#",children:" Call 063-153-02-12 Yurii "})]}),(0,o.jsxs)("div",{className:"footer-columns",children:[(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"FAQ"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Investor Relations"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Ways to Watch"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Corporate Information"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Netflix Originals"})})]}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Help Center"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Jobs"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Terms of Use"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Contact Us"})})]}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Account"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Redeem Gift Cards"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Privacy"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Speed Test"})})]}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Media Center"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Buy Gift Cards"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Cookie Preferences"})}),(0,o.jsx)("li",{children:(0,o.jsx)(l.rU,{to:"#",children:"Legal Notices"})})]})]})]})};var a=s.ZP.div(i||(i=(0,t.Z)(["\n  background: #000;\n  padding-top: 5rem;\n  padding-bottom: 3rem;\n  color: #999;\n\n  .footer-columns {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    width: 75%;\n    margin: 1rem auto 0;\n    font-size: 0.9rem;\n    overflow: auto;\n  }\n\n  ul li {\n    list-style: none;\n    line-height: 2.5;\n  }\n\n  a {\n    color: #999;\n    &:hover {\n      text-decoration: underline;\n      cursor: pointer;\n    }\n  }\n\n  /* Language Button */\n  .lang-btn {\n    background: transparent;\n    border: 0.9px solid #333;\n    padding: 1rem;\n    width: 8.125rem;\n    margin: 2rem 0 1rem 15%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n     margin: 2rem 0 0; \n  }\n\n  /* Toggle Language Content */\n  .lang-toggle {\n    margin-left: 15%;\n  }\n\n  .lang-toggle ul {\n    padding-inline-start: 0;\n    margin-block-start: -1rem;\n  }\n\n  .lang-toggle ul li {\n    background: var(--main-deep-dark);\n    width: 8.125rem;\n    border: 1px solid #333;\n    text-align: center;\n    &:hover {\n      background: #0085ff;\n      color: #fff;\n    }\n  }\n"])))},6046:function(n,e,r){r.d(e,{Z:function(){return m}});var i=r(2791),t=r(6871),l=r(3504),s=r(8522),o=r(9535),a=r(365),c=r(5704),d=r(4956);var h=r.p+"static/media/logo.5787551b8de42aef368c379572555ada.svg",x=r(184),u=[{display:"Home",path:"/"},{display:"Movies",path:"/movie"},{display:"TV Series",path:"/tv"}],m=function(){var n=(0,t.TH)().pathname,e=(0,s.I)().user,r=(0,i.useRef)(null),m=(0,c.a)().isAuth,g=u.findIndex((function(e){return e.path===n})),j=(0,d.T)();(0,i.useEffect)((function(){var n=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?r.current.classList.add("shrink"):r.current.classList.remove("shrink")};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]);var f=(0,a.v0)();return(0,x.jsx)("div",{ref:r,className:"header",children:(0,x.jsxs)("div",{className:"header__wrap container",children:[(0,x.jsx)("div",{className:"logo",children:(0,x.jsxs)(l.rU,{to:"/",children:["  ",(0,x.jsx)("img",{src:h,alt:"",className:"logo"})]})}),m?(0,x.jsxs)("ul",{className:"header__nav",children:[u.map((function(n,e){return(0,x.jsx)("li",{className:"".concat(e===g?"active":""),children:(0,x.jsx)(l.rU,{to:n.path,children:n.display})},e)})),(0,x.jsxs)("button",{className:"log-out",onClick:function(){(0,a.w7)(f).then((function(){j((0,o.kX)())})).catch((function(n){console.log(n,"error")}))},children:["log out from ",(0,x.jsx)("br",{}),null===e||void 0===e?void 0:e.email," "]})]}):(0,x.jsxs)("div",{children:[(0,x.jsx)(l.rU,{className:"link",to:"/login",children:"login"})," ",(0,x.jsx)("br",{}),(0,x.jsx)(l.rU,{className:"link",to:"/register",children:"register"})]})]})})}},849:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var i,t,l,s,o,a=r(168),c=r(6046),d=(r(2791),r(7939)),h=r(184),x=d.ZP.section(i||(i=(0,a.Z)(["\n    color: white;\n    margin: 0 3%;\n    position: absolute;\n    top: 35%;\n    font-size: 1.8vw;\n    @media (max-width: 1000px) {\n        top: 55%;\n        font-size: 1.9vw;\n    }\n    @media (max-width: 800px) {\n        top: 60%;\n        font-size: 3.2vw;\n        margin: 0 4em;\n        text-align: center;\n    }\n"]))),u=d.ZP.h1(t||(t=(0,a.Z)(["\n    font-size: 3em;\n    margin: 0 0 0.2em;\n    font-weight: 700;\n"]))),m=d.ZP.p(l||(l=(0,a.Z)(["\n    margin: 0 0 0.5em;\n    font-weight: 300;\n"]))),g=d.ZP.button(s||(s=(0,a.Z)(["\n    font-size: 14px;\n    letter-spacing: 1.9px;\n    font-weight: 100;\n    margin: 0.5em 0.5em 0.5em 0;\n    padding: 12px 2em;\n    color: white;\n    background-color: #e50914;\n    cursor: pointer;\n    text-decoration: none;\n    vertical-align: middle;\n    font-family: Arial, sans-serif;\n    border-radius: 2px;\n    user-select: none;\n    text-align: center;\n    border: 0;\n\n    &:hover {\n      background-color: #E53935;\n    }\n"]))),j=function(){return(0,h.jsxs)(x,{children:[(0,h.jsx)(u,{children:"See what's next."}),(0,h.jsx)(m,{children:"WATCH ANYWHERE. CANCEL ANYTIME."}),(0,h.jsx)(g,{children:"JOIN FREE FOR A MONTH"})]})},f=r(3024),p=r(8496),v=d.ZP.div(o||(o=(0,a.Z)(["\n    background: linear-gradient(\n                to right,\n                rgba(0, 0, 0, 0.75), \n                rgba(0, 0, 0, 0.09)\n                ),\n                url(",");\n                height: 100vh;\n    @media (max-width: 1000px) {\n      height: 90vh;\n    }\n"])),p),b=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(v,{className:"wrapper",children:[(0,h.jsx)(c.Z,{}),(0,h.jsx)(j,{})]}),(0,h.jsx)(f.Z,{})]})}},8496:function(n,e,r){n.exports=r.p+"static/media/bg.b25a426713c58f98bde3.jpg"}}]);
//# sourceMappingURL=849.fb051899.chunk.js.map