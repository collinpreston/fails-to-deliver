(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{232:function(e,t,n){},234:function(e,t,n){},236:function(e,t,n){},392:function(e,t,n){},393:function(e,t,n){},394:function(e,t,n){},395:function(e,t,n){},398:function(e,t,n){},399:function(e,t,n){},400:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(38),i=n.n(s),r=n(98),o=(n(232),n(233),n(234),n(3)),d=n(80),l=n(12),j=n(43),h=n.n(j),b=(n(236),n(25)),u=n(26),m=n(32),p=n(33),O=n(201),f=n(1),x=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).handleOnSelect=function(e){a.props.onSelectCompany(e)},a.handleOnClear=function(){a.props.onClearSearch()},a.state={data:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;fetch("/api/v1/company").then(function(){var t=Object(d.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.json();case 2:return a=t.sent,e.setState({data:a}),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(f.jsx)(O.ReactSearchAutocomplete,{items:this.state.data,fuseOptions:{keys:["symbol","name"]},autoFocus:!0,onSelect:this.handleOnSelect,onClear:this.handleOnClear,resultStringKeyName:"symbol",placeholder:"Search by symbol or name",styling:{zIndex:2}})}}]),n}(c.a.Component),y=x,v=n(404),g=n(405),_=n(409),C=n(124),w=n(125),S=n(107),k=n(219),T=n(410),I=n(216),D=n(135),E=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(b.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{style:{width:"100%"},children:[Object(f.jsxs)("h4",{children:[this.props.selectedCompanySymbol," - ",this.props.selectedCompanyName]}),Object(f.jsx)(v.a,{width:"100%",height:200,children:Object(f.jsxs)(g.a,{width:500,height:200,data:this.props.selectedCompanyData,syncId:"anyId",margin:{top:10,right:30,left:0,bottom:0},children:[Object(f.jsx)(_.a,{strokeDasharray:"3 3"}),Object(f.jsx)(C.a,{dataKey:"settlement_date"}),Object(f.jsx)(w.a,{}),Object(f.jsx)(S.a,{}),Object(f.jsx)(k.a,{type:"monotone",dataKey:"price",stroke:"#8884d8",fill:"#8884d8"})]})}),Object(f.jsx)(v.a,{width:"100%",height:200,children:Object(f.jsxs)(T.a,{width:500,height:200,data:this.props.selectedCompanyData,syncId:"anyId",margin:{top:10,right:30,left:0,bottom:0},children:[Object(f.jsx)(_.a,{strokeDasharray:"3 3"}),Object(f.jsx)(C.a,{dataKey:"settlement_date"}),Object(f.jsx)(w.a,{}),Object(f.jsx)(S.a,{}),Object(f.jsx)(I.a,{type:"monotone",dataKey:"quantity",stroke:"#82ca9d",fill:"#82ca9d"}),Object(f.jsx)(D.a,{})]})})]})}}]),n}(a.PureComponent),F=n(162),A=n(48),N=n.n(A);n(392);var q=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("/api/v1/company/top-ten").then(function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("Error Code   : "+e.status),console.log("Error Reason : "+e.statusText)}))}),[]),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(N.a,Object(o.a)(Object(o.a)({},{title:"Fails to deliver data - About",description:"About failsdata.com and stock FTD frequently asked questions",canonical:"http://failsdata.com/about",meta:{charset:"utf-8",name:{keywords:"about,fails,stocks,SEC,deliver"}}}),{},{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{id:"top-ten-title",children:Object(f.jsx)("h5",{children:"Top 10 FTD by volume"})}),Object(f.jsxs)("div",{id:"top-ten-list",children:[Object(f.jsx)("div",{children:"Symbol - Quantity"}),Object(f.jsx)(F.a,{as:"ol",numbered:!0,children:n.map((function(e){return Object(f.jsx)(F.a.Item,{action:!0,href:"/"+e.symbol,children:e.symbol+" - "+e.quantity},e.id)}))})]})]})}))})},H=n(160),M=n.n(H),Z=n(14),K=function(){var e=Object(Z.f)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),j=r[0],b=r[1],u=Object(a.useState)([]),m=Object(l.a)(u,2),p=m[0],O=m[1],x=Object(a.useState)(!1),v=Object(l.a)(x,2),g=v[0],_=v[1],C=Object(a.useState)(""),w=Object(l.a)(C,2),S=w[0],k=w[1],T="Fails to deliver data - Home",I="failsdata.com provides FTD data on thousands of stocks direct from the SEC.",D="stock,SEC,fails,FTD,GME";void 0!==c&&(T="".concat(c," fails-to-deliver data"),D="".concat(c,",stock,SEC,fails,FTD,GME")),void 0!==c&&void 0!==j&&(I="".concat(c," - ").concat(j," data from failsdata.com"));var F,A,H={title:T,description:I,canonical:"http://failsdata.com/",meta:{charset:"utf-8",name:{keywords:D}}},K=Object(Z.g)().slug;function L(t){var n="/api/v1/company/".concat(t);fetch(n).then(function(){var e=Object(d.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return n=e.sent,a=n.settlements.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{settlement_date:M()(e.settlement_date).format("MMM DD, YYYY")})})),k(n.data_last_updated),b(n.description),s(n.symbol),O(a),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){e("/404"),console.log("Error Code   : "+t.status),console.log("Error Reason : "+t.statusText)}))}function B(){_(!1),b(""),s(""),e("/")}return Object(a.useEffect)((function(){void 0!==K&&(L(K),_(!0))}),[]),g&&(F=Object(f.jsx)(E,{selectedCompanyName:j,selectedCompanySymbol:c,selectedCompanyData:p}),A=Object(f.jsx)("p",{children:"Data last updated on "+M()(S).format("MMM DD, YYYY")})),Object(f.jsx)(N.a,Object(o.a)(Object(o.a)({},H),{},{children:Object(f.jsxs)("div",{className:"Home",children:[Object(f.jsx)("h1",{className:"Title",onClick:B,children:"Fails-to-Deliver Data"}),Object(f.jsx)("div",{className:"SearchBar",children:Object(f.jsx)(y,{onSelectCompany:function(t){e("/".concat(t.symbol)),s(t.symbol),b(t.name),_(!0),L(t.id)},onClearSearch:B,style:{width:"50%"}})}),Object(f.jsx)("br",{}),g||Object(f.jsx)(q,{}),F,A]})}))},L=n.p+"static/media/logo.2414b4b8.svg",B=(n(393),function(e){return Object(f.jsx)("nav",{id:"navbar",onClick:e.customClickEvent,children:Object(f.jsx)("div",{className:"nav-wrapper",children:Object(f.jsx)("a",{to:"/",className:"left brand-logo",children:Object(f.jsx)("img",{src:L,alt:"logo",className:"photo"})})})})}),P=n(22);n(394);var R=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(N.a,Object(o.a)(Object(o.a)({},{title:"Fails to deliver data - About",description:"About failsdata.com and stock FTD frequently asked questions",canonical:"http://failsdata.com/about",meta:{charset:"utf-8",name:{keywords:"about,fails,stocks,SEC,deliver"}}}),{},{children:Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{id:"FAQ-title",children:[Object(f.jsx)("h1",{children:"Frequently Asked Questions"}),Object(f.jsx)("p",{children:"Feel free to contact us below for any questions not answered here."})]}),Object(f.jsx)("div",{id:"accordian-tag",children:Object(f.jsxs)(P.a,{id:"accordian",children:[Object(f.jsxs)(P.a.Item,{eventKey:"0",children:[Object(f.jsx)(P.a.Header,{children:"What does fails-to-deliver mean?"}),Object(f.jsxs)(P.a.Body,{children:["Failure to deliver (FTD) refers to a situation where one party in a trading contract (whether it's shares, futures, options, or forward contracts) doesn't deliver on their obligation. Such failures occur when a buyer (the party with a long position) doesn't have enough money to take delivery and pay for the transaction at settlement. A failure can also occur when the seller (the party with a short position) does not own all or any of the underlying assets required at settlement, and so cannot make the delivery.- ",Object(f.jsx)("a",{href:"https://www.investopedia.com/terms/f/failuretodeliver.asp",children:"investopedia.com"})]})]}),Object(f.jsxs)(P.a.Item,{eventKey:"1",children:[Object(f.jsx)(P.a.Header,{children:"Where is this data from?"}),Object(f.jsxs)(P.a.Body,{children:["This data is publically available directly from the Securities and Exchange Commission (SEC) ",Object(f.jsx)("a",{href:"https://www.sec.gov/data/foiadocsfailsdatahtm",children:"here"}),"."]})]}),Object(f.jsxs)(P.a.Item,{eventKey:"2",children:[Object(f.jsx)(P.a.Header,{children:"How often is the data updated?"}),Object(f.jsx)(P.a.Body,{children:"The SEC publishes new data bi-monthly.  The first half of a given month is available at the end of the month. The second half of a given month is available at about the 15th of the next month. Our servers check for new data nightly."})]}),Object(f.jsxs)(P.a.Item,{eventKey:"3",children:[Object(f.jsx)(P.a.Header,{children:"Why is there not more historical data?"}),Object(f.jsxs)(P.a.Body,{children:["Cost.  We only make money through donations (",Object(f.jsx)("a",{href:"https://www.paypal.com/paypalme/collinhpreston",children:"PayPal"}),").  Each report from the SEC can contain 40k entries, which must be consumed and stored into our database.  Hosting and managing our current infrastructure costs $12 a month.  Adding more historically data will double or tripple that cost."]})]}),Object(f.jsxs)(P.a.Item,{eventKey:"4",children:[Object(f.jsx)(P.a.Header,{children:"Why can't I find data for a symbol"}),Object(f.jsx)(P.a.Body,{children:"Not all publically traded companies, funds, stocks, will have shares that failed to be delivered prior to their settlement date.  If you don't see the stock symbol you're looking for, that may be that case."})]}),Object(f.jsxs)(P.a.Item,{eventKey:"5",children:[Object(f.jsx)(P.a.Header,{children:"Do you offer an API?"}),Object(f.jsxs)(P.a.Body,{children:["Yes we do!  You can check out our ",Object(f.jsx)("a",{href:"/api",children:"API page"}),"."]})]})]})})]})}))})},G=n(413),Y=n(411),W=n(415),J=(n(395),function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(G.a,{bg:"light",variant:"light",fixed:"bottom",children:Object(f.jsxs)(Y.a,{children:[Object(f.jsx)(G.a.Brand,{href:"/",children:"Failsdata.com"}),Object(f.jsxs)(W.a,{className:"me-auto",children:[Object(f.jsx)(W.a.Link,{href:"/",children:"Home"}),Object(f.jsx)(W.a.Link,{href:"/about",children:"About"}),Object(f.jsx)(W.a.Link,{href:"/contact",children:"Contact"}),Object(f.jsx)(W.a.Link,{href:"/api",children:"API"}),Object(f.jsx)(W.a.Link,{href:"https://www.paypal.com/paypalme/collinhpreston",children:"Support"})]})]})})})}),Q=(n(398),n(414)),U=n(412);var V=function(){var e,t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),d=r[0],j=r[1],h=Object(a.useState)(!1),b=Object(l.a)(h,2),u=b[0],m=b[1],p={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({inquiry:{message:d},email:{email:c}})};function O(e){switch(e.target.name){case"message":return void j(e.target.value);case"email":return void s(e.target.value)}}return e=u?Object(f.jsx)("div",{children:Object(f.jsx)("p",{children:Object(f.jsx)("b",{children:"Thanks for your inquiry, you will hear from us soon."})})}):Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:Object(f.jsx)("b",{children:"Feel free to reach out with any questions or suggestions."})}),Object(f.jsxs)(Q.a,{onSubmit:function(e){m(!0),fetch("/api/v1/inquiry",p).then((function(e){return e.json()}))},children:[Object(f.jsxs)(Q.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(f.jsx)(Q.a.Label,{children:"Email address"}),Object(f.jsx)(Q.a.Control,{name:"email",type:"email",placeholder:"name@example.com",onChange:O})]}),Object(f.jsxs)(Q.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(f.jsx)(Q.a.Label,{children:"Inquiry"}),Object(f.jsx)(Q.a.Control,{name:"message",as:"textarea",rows:3,onChange:O})]}),Object(f.jsx)(U.a,{variant:"primary",type:"submit",children:"Submit"})]})]}),Object(f.jsx)(N.a,Object(o.a)(Object(o.a)({},{title:"Contact",description:"Contact form failsdata.com",canonical:"http://failsdata.com/contact",meta:{charset:"utf-8",name:{keywords:"contact,stocks,fails,SEC,deliver"}}}),{},{children:Object(f.jsxs)("div",{id:"form",children:[Object(f.jsx)("h1",{children:"Contact"}),e]})}))},z=n(161),$=n.n(z);n(399);var X=function(){return Object(f.jsx)(N.a,Object(o.a)(Object(o.a)({},{title:"Fails to deliver data - API",description:"Stock Fails to deliver data API.",canonical:"http://failsdata.com/api",meta:{charset:"utf-8",name:{keywords:"API,fails,stocks,deliver,data"}}}),{},{children:Object(f.jsxs)("div",{id:"api-title",children:[Object(f.jsx)("h1",{children:"API"}),Object(f.jsx)("br",{}),Object(f.jsxs)(P.a,{id:"api-endpoints",children:[Object(f.jsxs)(P.a.Item,{eventKey:"0",children:[Object(f.jsx)(P.a.Header,{children:"/api/v1/company/:id"}),Object(f.jsxs)(P.a.Body,{children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Description:"})," Returns all of the failed delivery data for a single company."]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Parameters:"})," id - The Id of the company being searched."]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Returns:"})," "]}),Object(f.jsx)($.a,{id:"json-pretty",json:'{\n        "id": 1,\n        "data_last_updated": "2021-12-20 17:37:47 -0500",\n        "settlements": [\n            {\n                "id": 1,\n                "settlement_date": "20211101",\n                "quantity": 183855,\n                "price": "3.05",\n                "created_at": "2021-12-20T22:37:47.702Z",\n                "updated_at": "2021-12-20T22:37:47.702Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            },\n            {\n                "id": 5706,\n                "settlement_date": "20211102",\n                "quantity": 88351,\n                "price": "2.7",\n                "created_at": "2021-12-20T22:40:19.951Z",\n                "updated_at": "2021-12-20T22:40:19.951Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            },\n            {\n                "id": 17613,\n                "settlement_date": "20211104",\n                "quantity": 2444,\n                "price": "2.37",\n                "created_at": "2021-12-20T22:43:55.109Z",\n                "updated_at": "2021-12-20T22:43:55.109Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            },\n            {\n                "id": 23520,\n                "settlement_date": "20211105",\n                "quantity": 2932,\n                "price": "2.3",\n                "created_at": "2021-12-20T22:45:26.164Z",\n                "updated_at": "2021-12-20T22:45:26.164Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            },\n            {\n                "id": 29552,\n                "settlement_date": "20211108",\n                "quantity": 854,\n                "price": "2.41",\n                "created_at": "2021-12-20T22:46:56.273Z",\n                "updated_at": "2021-12-20T22:46:56.273Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            },\n            {\n                "id": 35475,\n                "settlement_date": "20211109",\n                "quantity": 758,\n                "price": "2.28",\n                "created_at": "2021-12-20T22:48:31.526Z",\n                "updated_at": "2021-12-20T22:48:31.526Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            },\n            {\n                "id": 41505,\n                "settlement_date": "20211110",\n                "quantity": 15092,\n                "price": "2.19",\n                "created_at": "2021-12-20T22:50:16.731Z",\n                "updated_at": "2021-12-20T22:50:16.731Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            },\n            {\n                "id": 47564,\n                "settlement_date": "20211112",\n                "quantity": 49856,\n                "price": "2.23",\n                "created_at": "2021-12-20T22:52:14.358Z",\n                "updated_at": "2021-12-20T22:52:14.358Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            }\n        ]\n    }'})]})]}),Object(f.jsxs)(P.a.Item,{eventKey:"1",children:[Object(f.jsx)(P.a.Header,{children:"/api/v1/company"}),Object(f.jsxs)(P.a.Body,{children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Description:"})," Returns all of the companies available"]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Returns:"})," "]}),Object(f.jsx)($.a,{id:"json-pretty",json:'[\n        {\n            "id": 1,\n            "symbol": "AGRI",\n            "name": "AGRIFORCE GROWING SYS LTD COM "\n        },\n        {\n            "id": 2,\n            "symbol": "VMAR",\n            "name": "VISION MARINE TECHNOLOGIES INC"\n        },\n        {\n            "id": 3,\n            "symbol": "DDAIF",\n            "name": "DAIMLER AG"\n        },\n        {\n            "id": 4,\n            "symbol": "DB",\n            "name": "DEUTSCHE BANK AG NAMEN AKT (DE"\n        },\n        {\n            "id": 5,\n            "symbol": "CSTM",\n            "name": "CONSTELLIUM SE CL A SHS USD (F"\n        }]'})]})]})]})]})}))};var ee=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("p",{children:"404: We couldn't find the page you're looking for!"})})},te=n(417),ne=function(){var e=Object(Z.f)();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("div",{id:"container",children:[Object(f.jsx)(B,{customClickEvent:function(){e("/")}}),Object(f.jsxs)(Z.c,{children:[Object(f.jsx)(Z.a,{path:"/",element:Object(f.jsx)(K,{})}),Object(f.jsx)(Z.a,{path:"about",element:Object(f.jsx)(R,{})}),Object(f.jsx)(Z.a,{path:"contact",element:Object(f.jsx)(V,{})}),Object(f.jsx)(Z.a,{path:"api",element:Object(f.jsx)(X,{})}),Object(f.jsx)(Z.a,{path:"/:slug",element:Object(f.jsx)(K,{})}),Object(f.jsx)(Z.a,{path:"404",element:Object(f.jsx)(ee,{})}),Object(f.jsx)(Z.a,{path:"*",element:Object(f.jsx)(ee,{})})]}),Object(f.jsx)("div",{id:"adsense",children:Object(f.jsx)(te.a,{client:"ca-pub-2143495609871756",slot:"7442874197",style:{height:100},format:""})})]}),Object(f.jsx)(J,{})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,418)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(f.jsx)(r.a,{children:Object(f.jsx)(ne,{})}),document.getElementById("root")),ae()}},[[400,1,2]]]);
//# sourceMappingURL=main.e3ab5509.chunk.js.map