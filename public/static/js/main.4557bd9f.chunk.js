(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{206:function(t,e,a){},208:function(t,e,a){},360:function(t,e,a){},392:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),s=a(69),r=a.n(s),o=(a(206),a(39)),i=a.n(o),j=a(35),l=a(90),u=a(18),b=(a(208),a(19)),d=a(20),h=a(25),p=a(26),O=a(176),m=a(9),f=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(b.a)(this,a),(n=e.call(this,t)).handleOnSelect=function(t){n.props.onSelectCompany(t)},n.state={data:[],selection:""},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var t=this;fetch("/api/v1/company").then(function(){var e=Object(l.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.json();case 2:return n=e.sent,t.setState({data:n}),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return Object(m.jsx)(O.ReactSearchAutocomplete,{items:this.state.data,fuseOptions:{keys:["symbol","name"]},autoFocus:!0,onSelect:this.handleOnSelect,resultStringKeyName:"symbol",placeholder:"Search by symbol or name",styling:{zIndex:2}})}}]),a}(c.a.Component),y=f,x=a(396),v=a(397),g=a(401),S=a(95),D=a(96),k=a(79),w=a(194),C=a(402),M=a(192),Y=a(100),I=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(t){return Object(b.a)(this,a),e.call(this,t)}return Object(d.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{style:{width:"100%"},children:[Object(m.jsx)("h4",{children:this.props.selectedCompanySymbol}),Object(m.jsx)(x.a,{width:"100%",height:200,children:Object(m.jsxs)(v.a,{width:500,height:200,data:this.props.selectedCompanyData,syncId:"anyId",margin:{top:10,right:30,left:0,bottom:0},children:[Object(m.jsx)(g.a,{strokeDasharray:"3 3"}),Object(m.jsx)(S.a,{dataKey:"settlement_date"}),Object(m.jsx)(D.a,{}),Object(m.jsx)(k.a,{}),Object(m.jsx)(w.a,{type:"monotone",dataKey:"price",stroke:"#8884d8",fill:"#8884d8"})]})}),Object(m.jsx)("p",{children:"Maybe some other content"}),Object(m.jsx)(x.a,{width:"100%",height:200,children:Object(m.jsxs)(C.a,{width:500,height:200,data:this.props.selectedCompanyData,syncId:"anyId",margin:{top:10,right:30,left:0,bottom:0},children:[Object(m.jsx)(g.a,{strokeDasharray:"3 3"}),Object(m.jsx)(S.a,{dataKey:"settlement_date"}),Object(m.jsx)(D.a,{}),Object(m.jsx)(k.a,{}),Object(m.jsx)(M.a,{type:"monotone",dataKey:"quantity",stroke:"#82ca9d",fill:"#82ca9d"}),Object(m.jsx)(Y.a,{})]})})]})}}]),a}(n.PureComponent),N=a(126),F=a.n(N),_=a.p+"static/media/logo.2414b4b8.svg",K=(a(360),function(){return Object(m.jsx)("nav",{id:"navbar",children:Object(m.jsx)("div",{className:"nav-wrapper",children:Object(m.jsx)("a",{to:"/",className:"left brand-logo",children:Object(m.jsx)("img",{src:_,alt:"logo",className:"photo"})})})})}),B=a(193),P=a.n(B),T=function(){var t,e,a=Object(n.useState)(""),c=Object(u.a)(a,2),s=c[0],r=c[1],o=Object(n.useState)([]),b=Object(u.a)(o,2),d=b[0],h=b[1],p=Object(n.useState)(!1),O=Object(u.a)(p,2),f=O[0],x=O[1],v=Object(n.useState)(""),g=Object(u.a)(v,2),S=g[0],D=g[1];return f&&(t=Object(m.jsx)(I,{selectedCompanySymbol:s,selectedCompanyData:d}),e=Object(m.jsx)("p",{children:"Data last updated on "+F()(S).format("MMM DD, YYYY")})),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(K,{}),Object(m.jsx)("div",{className:"Title",children:"Fails-to-Deliver Data"}),Object(m.jsx)("div",{className:"SearchBar",children:Object(m.jsx)(y,{onSelectCompany:function(t){r(t.symbol),x(!0),function(t){var e="/api/v1/company/".concat(t);fetch(e).then(function(){var t=Object(l.a)(i.a.mark((function t(e){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:return a=t.sent,n=a.settlements.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{settlement_date:F()(t.settlement_date).format("MMM DD, YYYY")})})),D(a.data_last_updated),h(n),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return console.log(t)}))}(t.id)},style:{width:"50%"}})}),Object(m.jsx)("br",{}),t,e,Object(m.jsx)("footer",{children:Object(m.jsx)(P.a,{by:"Coll",emoji:!0})})]})},A=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,405)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),n(t),c(t),s(t),r(t)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root")),A()}},[[392,1,2]]]);
//# sourceMappingURL=main.4557bd9f.chunk.js.map