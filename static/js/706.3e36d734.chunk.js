"use strict";(self.webpackChunkwhat_to_watch=self.webpackChunkwhat_to_watch||[]).push([[706],{7706:function(e,n,a){a.r(n);var r,s=a(168),i=a(365),t=a(9535),l=a(6871),c=a(4956),o=a(2215),d=a(7939),u=a(8496),h=a(6046),m=a(184),v=d.ZP.div(r||(r=(0,s.Z)(["\n    background: linear-gradient(\n                to right,\n                rgba(0, 0, 0, 0.75), \n                rgba(0, 0, 0, 0.09)\n                ),\n                url(",");\n                height: 100vh;\n    @media (max-width: 1000px) {\n      height: 90vh;\n    }\n"])),u);n.default=function(){var e=(0,c.T)(),n=(0,l.s0)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(v,{children:[(0,m.jsx)(h.Z,{}),(0,m.jsx)(o.l,{title:"sign in",handleClick:function(a,r){var s=(0,i.v0)();console.log(a,r),(0,i.e5)(s,a,r).then((function(a){var r=a.user;e((0,t.av)({email:r.email,id:r.uid,token:r.refreshToken})),n("/")})).catch((function(){return alert("invalid user")}))}})]})})}},2215:function(e,n,a){a.d(n,{l:function(){return c}});var r=a(885),s=a(2791),i=a(5650),t=a(3504),l=a(184),c=function(e){var n=e.title,a=e.handleClick,c=(0,s.useState)(""),o=(0,r.Z)(c,2),d=o[0],u=o[1],h=(0,s.useState)(""),m=(0,r.Z)(h,2),v=m[0],f=m[1];return(0,l.jsx)(i.M5,{h:"100vh",children:(0,l.jsxs)("div",{className:"container-form",children:[(0,l.jsx)("h1",{children:n}),(0,l.jsxs)("div",{className:"form-element",children:[(0,l.jsx)("input",{type:"email",name:"email",id:"email",value:d,onChange:function(e){return u(e.target.value)},required:!0}),(0,l.jsx)("label",{className:"floating-label",htmlFor:"email",children:"Email"})]}),(0,l.jsxs)("div",{className:"form-element",children:[(0,l.jsx)("input",{type:"password",name:"password",id:"password",value:v,onChange:function(e){return f(e.target.value)},placeholder:"password",required:!0}),(0,l.jsx)("label",{className:"floating-label",htmlFor:"password",children:"Password"})]}),(0,l.jsxs)("button",{className:"btn",onClick:function(){return a(d,v)},children:[" ",n]}),(0,l.jsx)(t.rU,{className:"link",to:"/",children:"back"})]})})}},6046:function(e,n,a){a.d(n,{Z:function(){return v}});var r=a(2791),s=a(6871),i=a(3504),t=a(8522),l=a(9535),c=a(365),o=a(5704),d=a(4956);var u=a.p+"static/media/logo.5787551b8de42aef368c379572555ada.svg",h=a(184),m=[{display:"Home",path:"/"},{display:"Movies",path:"/movie"},{display:"TV Series",path:"/tv"}],v=function(){var e=(0,s.TH)().pathname,n=(0,t.I)().user,a=(0,r.useRef)(null),v=(0,o.a)().isAuth,f=m.findIndex((function(n){return n.path===e})),x=(0,d.T)();(0,r.useEffect)((function(){var e=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?a.current.classList.add("shrink"):a.current.classList.remove("shrink")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]);var p=(0,c.v0)();return(0,h.jsx)("div",{ref:a,className:"header",children:(0,h.jsxs)("div",{className:"header__wrap container",children:[(0,h.jsx)("div",{className:"logo",children:(0,h.jsxs)(i.rU,{to:"/",children:["  ",(0,h.jsx)("img",{src:u,alt:"",className:"logo"})]})}),v?(0,h.jsxs)("ul",{className:"header__nav",children:[m.map((function(e,n){return(0,h.jsx)("li",{className:"".concat(n===f?"active":""),children:(0,h.jsx)(i.rU,{to:e.path,children:e.display})},n)})),(0,h.jsxs)("button",{className:"log-out",onClick:function(){(0,c.w7)(p).then((function(){x((0,l.kX)())})).catch((function(e){console.log(e,"error")}))},children:["log out from ",(0,h.jsx)("br",{}),null===n||void 0===n?void 0:n.email," "]})]}):(0,h.jsxs)("div",{children:[(0,h.jsx)(i.rU,{className:"link",to:"/login",children:"login"})," ",(0,h.jsx)("br",{}),(0,h.jsx)(i.rU,{className:"link",to:"/register",children:"register"})]})]})})}},8496:function(e,n,a){e.exports=a.p+"static/media/bg.b25a426713c58f98bde3.jpg"}}]);
//# sourceMappingURL=706.3e36d734.chunk.js.map