(this["webpackJsonpreact-dashboard"]=this["webpackJsonpreact-dashboard"]||[]).push([[0],{16:function(e,t,i){},28:function(e,t,i){},36:function(e,t,i){"use strict";i.r(t);var a,n,r,c,s,o,d,l,u,m,b,j=i(0),h=i.n(j),x=i(20),p=i.n(x),g=(i(28),i(4)),O=i(9),f=i(5),v=i.p+"static/media/default_user_logo.26207c02.png",q=(i(16),i(1)),y=f.a.header(a||(a=Object(g.a)(["\n  grid-area: header;\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  box-shadow: 3px 3px 5px 6px #ccc;\n"]))),C=f.a.div(n||(n=Object(g.a)(["\n  grid-column: 1;\n  justify-self: center;\n  align-self: center;\n"]))),w=f.a.span(r||(r=Object(g.a)(["\n  grid-column: 2;\n  display: inline-flex;\n  flex-direction: row;\n  justify-self: flex-end;\n  padding: 0.5em;\n  align-self: center;\n  cursor: pointer;\n  transition: opacity 0.4s;\n  opacity: 0.6;\n  &:hover {\n    opacity: 1;\n  }\n"]))),S=Object(f.a)(w)(c||(c=Object(g.a)(["\n  margin-right: 10px;\n"]))),L=f.a.img(s||(s=Object(g.a)(["\n  max-height: 50px;\n  height: auto;\n  width: auto;\n  border-radius: 50%;\n"]))),N=function(){return Object(q.jsxs)(y,{children:[Object(q.jsx)(C,{children:Object(q.jsx)("h1",{children:"Director"})}),Object(q.jsxs)(w,{onClick:function(e){console.log("One day, i'll open a context menu")},children:[Object(q.jsx)(S,{children:"User"}),Object(q.jsx)(L,{src:v,alt:"user"})]})]})},z=function(){return Object(q.jsx)("nav",{className:"side-nav-bar",children:Object(q.jsxs)("div",{className:"nav-bar-container",children:[Object(q.jsx)(O.b,{to:"/react-dashboard/dashboard",className:"nav-item",activeStyle:{fontWeight:"bold"},children:"Dashboard"}),Object(q.jsx)(O.b,{to:"/react-dashboard/items",className:"nav-item",activeStyle:{fontWeight:"bold"},children:"Item List"}),Object(q.jsx)(O.b,{to:"/react-dashboard/tools",className:"nav-item",activeStyle:{fontWeight:"bold"},children:"Tools"}),Object(q.jsx)(O.b,{to:"/react-dashboard/administration",className:"nav-item",activeStyle:{fontWeight:"bold"},children:"Administration"})]})})},A=function(e){var t=f.a.div(o||(o=Object(g.a)(["\n    width: ",";\n    margin: 2em;\n    padding: 0.5em;\n    box-shadow: 3px 3px 5px 6px rgb(202, 202, 202);\n    @media (max-width: 768px) {\n        width: 100%;\n      }\n"])),function(e){switch(e){case"small":return"25%";case"medium":return"44%";case"large":return"100%"}}(e.size));return Object(q.jsxs)(t,{children:[Object(q.jsx)("h3",{children:e.title}),Object(q.jsx)("p",{children:e.text})]})},F=function(){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("div",{className:"dash-header",children:Object(q.jsx)("h1",{children:"Dashboard"})}),Object(q.jsxs)("div",{className:"dash-container",children:[Object(q.jsx)(A,{size:"small",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sunt quidem architecto laborum quod fugit nesciunt? Cum labore mollitia quasi temporibus odit earum unde tenetur, aliquid rem quo voluptatem nam?",title:"Small Card"}),Object(q.jsx)(A,{size:"small",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sunt quidem architecto laborum quod fugit nesciunt? Cum labore mollitia quasi temporibus odit earum unde tenetur, aliquid rem quo voluptatem nam?",title:"Small Card"}),Object(q.jsx)(A,{size:"small",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sunt quidem architecto laborum quod fugit nesciunt? Cum labore mollitia quasi temporibus odit earum unde tenetur, aliquid rem quo voluptatem nam?",title:"Small Card"}),Object(q.jsx)(A,{size:"medium",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sunt quidem architecto laborum quod fugit nesciunt? Cum labore mollitia quasi temporibus odit earum unde tenetur, aliquid rem quo voluptatem nam?",title:"Small Medium"}),Object(q.jsx)(A,{size:"medium",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sunt quidem architecto laborum quod fugit nesciunt? Cum labore mollitia quasi temporibus odit earum unde tenetur, aliquid rem quo voluptatem nam?",title:"Small Medium"}),Object(q.jsx)(A,{size:"large",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sunt quidem architecto laborum quod fugit nesciunt? Cum labore mollitia quasi temporibus odit earum unde tenetur, aliquid rem quo voluptatem nam?",title:"Small Large"})]})]})},D=f.a.div(d||(d=Object(g.a)(["\n    text-align: center;\n"]))),T=function(){return Object(q.jsx)(D,{children:Object(q.jsx)("h1",{children:"Tools"})})},W=i(2),k=f.a.main(l||(l=Object(g.a)(["\n"]))),I=function(){return Object(q.jsxs)(k,{children:[Object(q.jsx)(W.b,{exact:!0,path:"/",children:Object(q.jsx)(W.a,{to:"/react-dashboard/dashboard"})}),Object(q.jsx)(W.b,{exact:!0,path:"/react-dashboard",children:Object(q.jsx)(W.a,{to:"/react-dashboard/dashboard"})}),Object(q.jsx)(W.b,{exact:!0,path:"/react-dashboard/dashboard",component:F}),Object(q.jsx)(W.b,{exact:!0,path:"/react-dashboard/tools",component:T})]})},M=f.a.footer(u||(u=Object(g.a)(["\n  grid-area: footer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),B=(f.a.footer(m||(m=Object(g.a)(["\n  grid-area: footer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),function(){var e=new Date;return Object(q.jsxs)(M,{children:["Copyright ReverendHeat ",e.getFullYear()]})}),J=f.a.div(b||(b=Object(g.a)(['\n  font-family: "Roboto", serif;\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 70px 1fr 70px;\n  height: 100vh;\n  grid-template-areas:\n    "header  header"\n    "nav    main"\n    "empty footer";\n'])));var P=function(){return Object(q.jsx)(J,{children:Object(q.jsxs)(O.a,{children:[Object(q.jsx)(N,{}),Object(q.jsx)(z,{}),Object(q.jsx)(I,{}),Object(q.jsx)(B,{})]})})},R=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,37)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),r(e),c(e)}))};p.a.render(Object(q.jsx)(h.a.StrictMode,{children:Object(q.jsx)(P,{})}),document.getElementById("root")),R()}},[[36,1,2]]]);
//# sourceMappingURL=main.d9ec502a.chunk.js.map