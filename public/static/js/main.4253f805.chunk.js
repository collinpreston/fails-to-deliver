(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,n,t){},52:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),i=t(23),a=t.n(i),o=(t(51),t(52),t(20)),s=t(35),u=t(4),j=function(e){var n=Object(o.useQuery)("symbolData",(function(){return fetch("/api/v1/company").then((function(e){return e.json()}))})),t=n.data,r=n.error;return n.isLoading?Object(u.jsx)(c.Fragment,{children:"Loading..."}):r?Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("h1",{children:"Oops something went wrong"}),Object(u.jsx)("p",{children:r.message})]}):Object(u.jsx)("div",{children:Object(u.jsx)(s.a,{placeholder:"Placeholder"+t,value:"Doe",data:[t],callback:function(e){return console.log(e)}})})},l=new o.QueryCache;var d=function(){return Object(u.jsx)(o.ReactQueryCacheProvider,{queryCache:l,children:Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(j,{})})})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,58)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),h()}},[[55,1,2]]]);
//# sourceMappingURL=main.4253f805.chunk.js.map