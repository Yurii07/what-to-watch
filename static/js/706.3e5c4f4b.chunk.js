"use strict";(self.webpackChunkwhat_to_watch=self.webpackChunkwhat_to_watch||[]).push([[706],{7706:function(e,n,a){a.r(n);var t,i=a(168),r=a(365),s=a(9535),l=a(6871),c=a(4956),o=a(2215),d=a(6031),u=a(8496),h=a(6046),m=a(184),v=d.ZP.div(t||(t=(0,i.Z)(["\n    background: linear-gradient(\n                to right,\n                rgba(0, 0, 0, 0.75), \n                rgba(0, 0, 0, 0.09)\n                ),\n                url(",");\n                height: 100vh;\n    @media (max-width: 1000px) {\n      height: 90vh;\n    }\n"])),u);n.default=function(){var e=(0,c.T)(),n=(0,l.s0)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(v,{children:[(0,m.jsx)(h.Z,{}),(0,m.jsx)(o.l,{title:"sign in",handleClick:function(a,t){var i=(0,r.v0)();console.log(a,t),(0,r.e5)(i,a,t).then((function(a){var t=a.user;e((0,s.av)({email:t.email,id:t.uid,token:t.refreshToken})),n("/")})).catch((function(){return alert("invalid user")}))}})]})})}},2215:function(e,n,a){a.d(n,{l:function(){return l}});var t=a(885),i=a(2791),r=a(3504),s=a(184),l=function(e){var n=e.title,a=e.handleClick,l=(0,i.useState)(""),c=(0,t.Z)(l,2),o=c[0],d=c[1],u=(0,i.useState)(""),h=(0,t.Z)(u,2),m=h[0],v=h[1],f=(0,i.useState)(null),x=(0,t.Z)(f,2),g=x[0],j=x[1];return(0,s.jsx)("div",{style:{height:"100vh"},children:(0,s.jsxs)("div",{className:"container-form",children:[(0,s.jsx)("h1",{children:n}),(0,s.jsxs)("div",{className:"form-element",children:[(0,s.jsx)("input",{type:"email",name:"email",id:"email",value:o,onChange:function(e){!function(e){return/\S+@\S+\.\S+/.test(e)}(e.target.value)?j("Email is invalid"):j(null),d(e.target.value)},required:!0}),(0,s.jsx)("label",{className:"floating-label",htmlFor:"email",children:"Email"}),g&&(0,s.jsx)("h2",{style:{color:"red"},children:g})]}),(0,s.jsxs)("div",{className:"form-element",children:[(0,s.jsx)("input",{type:"password",name:"password",id:"password",value:m,onChange:function(e){return v(e.target.value)},required:!0}),(0,s.jsx)("label",{className:"floating-label",htmlFor:"password",children:"Password"})]}),(0,s.jsxs)("button",{className:"btn",onClick:function(){return a(o,m)},children:[" ",n]}),(0,s.jsx)(r.rU,{className:"link",to:"/",children:"back"})]})})}},6046:function(e,n,a){a.d(n,{Z:function(){return v}});var t=a(2791),i=a(6871),r=a(3504),s=a(8522),l=a(9535),c=a(365),o=a(5704),d=a(4956);var u=a.p+"static/media/logo.5787551b8de42aef368c379572555ada.svg",h=a(184),m=[{display:"Home",path:"/"},{display:"Movies",path:"/movie"},{display:"TV Series",path:"/tv"}],v=function(){var e=(0,i.TH)().pathname,n=(0,s.I)().user,a=(0,t.useRef)(null),v=(0,o.a)().isAuth,f=m.findIndex((function(n){return n.path===e})),x=(0,d.T)();(0,t.useEffect)((function(){var e=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?a.current.classList.add("shrink"):a.current.classList.remove("shrink")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);var g=(0,c.v0)();return(0,h.jsx)("div",{ref:a,className:"header",children:(0,h.jsxs)("div",{className:"header__wrap container",children:[(0,h.jsx)("div",{className:"logo",children:(0,h.jsxs)(r.rU,{to:"/",children:["  ",(0,h.jsx)("img",{src:u,alt:"",className:"logo"})]})}),v?(0,h.jsxs)("ul",{className:"header__nav",children:[m.map((function(e,n){return(0,h.jsx)("li",{className:"".concat(n===f?"active":""),children:(0,h.jsx)(r.rU,{to:e.path,children:e.display})},n)})),(0,h.jsxs)("button",{className:"log-out",onClick:function(){(0,c.w7)(g).then((function(){x((0,l.kX)())})).catch((function(e){console.log(e,"error")}))},children:["log out from ",(0,h.jsx)("br",{}),null===n||void 0===n?void 0:n.email," "]})]}):(0,h.jsxs)("div",{children:[(0,h.jsx)(r.rU,{className:"link",to:"/login",children:"login"})," ",(0,h.jsx)("br",{}),(0,h.jsx)(r.rU,{className:"link",to:"/register",children:"register"})]})]})})}},8496:function(e,n,a){e.exports=a.p+"static/media/bg.b25a426713c58f98bde3.jpg"}}]);
//# sourceMappingURL=706.3e5c4f4b.chunk.js.map