(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,n,t){},52:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),i=t(21),o=t.n(i),a=(t(51),t(52),t(15)),s=t(33),u=t(5),l=function(){var e=Object(a.default)("profileData",(function(){return fetch("/api/v1/company").then((function(e){return e.json()}))})),n=e.data,t=e.error;return e.isLoading?Object(u.jsx)(c.Fragment,{children:"Loading..."}):t?Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("h1",{children:"Oops something went wrong"}),Object(u.jsx)("p",{children:t.message})]}):Object(u.jsx)("div",{children:Object(u.jsx)(s.a,{placeholder:"Placeholder"+n,value:"Doe",data:[n],callback:function(e){return console.log(e)}})})},j=new a.QueryCache,d=function(){return Object(u.jsx)(a.QueryClientProvider,{queryCache:j,children:Object(u.jsx)(l,{})})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,58)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),h()}},[[55,1,2]]]);
//# sourceMappingURL=main.620c0564.chunk.js.map