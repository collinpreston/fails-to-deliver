(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{233:function(e,t,n){},235:function(e,t,n){},237:function(e,t,n){},390:function(e,t,n){},394:function(e,t,n){},395:function(e,t,n){},396:function(e,t,n){},399:function(e,t,n){},400:function(e,t,n){},401:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(38),i=n.n(s),r=n(98),o=(n(233),n(234),n(235),n(3)),d=n(80),l=n(12),j=n(43),h=n.n(j),b=(n(237),n(25)),u=n(26),m=n(32),p=n(33),O=n(202),y=n(1),x=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).handleOnSelect=function(e){a.props.onSelectCompany(e)},a.handleOnClear=function(){a.props.onClearSearch()},a.state={data:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;fetch("/api/v1/company").then(function(){var t=Object(d.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.json();case 2:return a=t.sent,e.setState({data:a}),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(y.jsx)(O.ReactSearchAutocomplete,{items:this.state.data,fuseOptions:{keys:["symbol","name"]},autoFocus:!0,onSelect:this.handleOnSelect,onClear:this.handleOnClear,resultStringKeyName:"symbol",placeholder:"Search by symbol or name",styling:{zIndex:2}})}}]),n}(c.a.Component),f=x,v=n(404),g=n(405),S=n(409),C=n(124),w=n(125),_=n(107),k=n(220),T=n(410),I=n(217),E=n(136),D=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(b.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return Object(y.jsxs)("div",{style:{width:"100%"},children:[Object(y.jsxs)("h4",{children:[this.props.selectedCompanySymbol," - ",this.props.selectedCompanyName]}),Object(y.jsx)(v.a,{width:"100%",height:200,children:Object(y.jsxs)(g.a,{width:500,height:200,data:this.props.selectedCompanyData,syncId:"anyId",margin:{top:10,right:30,left:0,bottom:0},children:[Object(y.jsx)(S.a,{strokeDasharray:"3 3"}),Object(y.jsx)(C.a,{dataKey:"settlement_date"}),Object(y.jsx)(w.a,{}),Object(y.jsx)(_.a,{}),Object(y.jsx)(k.a,{type:"monotone",dataKey:"price",stroke:"#8884d8",fill:"#8884d8"})]})}),Object(y.jsx)(v.a,{width:"100%",height:200,children:Object(y.jsxs)(T.a,{width:500,height:200,data:this.props.selectedCompanyData,syncId:"anyId",margin:{top:10,right:30,left:0,bottom:0},children:[Object(y.jsx)(S.a,{strokeDasharray:"3 3"}),Object(y.jsx)(C.a,{dataKey:"settlement_date"}),Object(y.jsx)(w.a,{}),Object(y.jsx)(_.a,{}),Object(y.jsx)(I.a,{type:"monotone",dataKey:"quantity",stroke:"#82ca9d",fill:"#82ca9d"}),Object(y.jsx)(E.a,{})]})})]})}}]),n}(a.PureComponent),F=n(163);n(390);var q=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("/api/v1/company/top-ten").then(function(){var e=Object(d.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,console.log(n),c(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("Error Code   : "+e.status),console.log("Error Reason : "+e.statusText)}))}),[]),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{id:"top-ten-title",children:Object(y.jsx)("h5",{children:"Top 10 FTD by volume"})}),Object(y.jsxs)("div",{id:"top-ten-list",children:[Object(y.jsx)("div",{children:Object(y.jsx)("b",{children:"Symbol - Quantity"})}),Object(y.jsx)(F.a,{as:"ol",numbered:!0,children:n.map((function(e){return Object(y.jsx)(F.a.Item,{action:!0,href:"/"+e.symbol,children:e.symbol+" - "+e.quantity},e.id)}))})]})]})},A=n(161),N=n.n(A),H=n(64),K=n.n(H),B=n(14),R=function(){var e=Object(B.f)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),j=r[0],b=r[1],u=Object(a.useState)([]),m=Object(l.a)(u,2),p=m[0],O=m[1],x=Object(a.useState)(!1),v=Object(l.a)(x,2),g=v[0],S=v[1],C=Object(a.useState)(""),w=Object(l.a)(C,2),_=w[0],k=w[1],T="Fails to deliver data - Home",I="failsdata.com provides FTD data on thousands of stocks direct from the Securities and Exchange Commission (SEC).",E="stock,SEC,fails,FTD,deliver,short,interest,GME",F="https://failsdata.com";void 0!==c&&(T="".concat(c," fails to deliver stock price and volume data from the Securities and Exchange Commission (SEC)."),E="".concat(c,",stock,SEC,fails,FTD,deliver,short,interest,GME")),void 0!==c&&void 0!==j&&(I="".concat(c," - ").concat(j," fails to deliver stock price and volume data from the Securities and Exchange Commission (SEC).")),void 0!==c&&void 0!==j&&(F="https://failsdata.com/".concat(c));var A,H,R={title:T,description:I,canonical:F,meta:{charset:"utf-8",name:{keywords:E}}},L=Object(B.g)().slug;function M(t){var n="/api/v1/company/".concat(t);fetch(n).then(function(){var e=Object(d.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return n=e.sent,a=n.settlements.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{settlement_date:N()(e.settlement_date).format("MMM DD, YYYY")})})),k(n.data_last_updated),b(n.description),s(n.symbol),O(a),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){e("/404"),console.log("Error Code   : "+t.status),console.log("Error Reason : "+t.statusText)}))}function Z(){S(!1),b(""),s(""),e("/")}return Object(a.useEffect)((function(){void 0!==L&&(M(L),S(!0))}),[]),g&&(A=Object(y.jsx)(D,{selectedCompanyName:j,selectedCompanySymbol:c,selectedCompanyData:p}),H=Object(y.jsx)("p",{children:"Data last updated on "+N()(_).format("MMM DD, YYYY")})),Object(y.jsx)(K.a,Object(o.a)(Object(o.a)({},R),{},{children:Object(y.jsxs)("div",{className:"Home",children:[Object(y.jsx)("h1",{className:"Title",onClick:Z,children:"Fails-to-Deliver Data"}),Object(y.jsx)("div",{className:"SearchBar",children:Object(y.jsx)(f,{onSelectCompany:function(t){e("/".concat(t.symbol)),s(t.symbol),b(t.name),S(!0),M(t.id)},onClearSearch:Z,style:{width:"50%"}})}),Object(y.jsx)("br",{}),g||Object(y.jsx)(q,{}),A,H]})}))},L=n.p+"static/media/logo.2414b4b8.svg",M=(n(394),function(e){return Object(y.jsx)("nav",{id:"navbar",onClick:e.customClickEvent,children:Object(y.jsx)("div",{className:"nav-wrapper",children:Object(y.jsx)("a",{to:"/",className:"left brand-logo",children:Object(y.jsx)("img",{src:L,alt:"logo",className:"photo"})})})})}),Z=n(19);n(395);var P=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(K.a,Object(o.a)(Object(o.a)({},{title:"Fails to deliver data - About",description:"About failsdata.com and stock FTD frequently asked questions",canonical:"https://failsdata.com/about",meta:{charset:"utf-8",name:{keywords:"about,fails,stocks,SEC,deliver"}}}),{},{children:Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{id:"FAQ-title",children:[Object(y.jsx)("h1",{children:"Frequently Asked Questions"}),Object(y.jsx)("p",{children:"Feel free to contact us below for any questions not answered here."})]}),Object(y.jsx)("div",{id:"accordian-tag",children:Object(y.jsxs)(Z.a,{id:"accordian",children:[Object(y.jsxs)(Z.a.Item,{eventKey:"0",children:[Object(y.jsx)(Z.a.Header,{children:"What does fails-to-deliver mean?"}),Object(y.jsxs)(Z.a.Body,{children:["Failure to deliver (FTD) refers to a situation where one party in a trading contract (whether it's shares, futures, options, or forward contracts) doesn't deliver on their obligation. Such failures occur when a buyer (the party with a long position) doesn't have enough money to take delivery and pay for the transaction at settlement. A failure can also occur when the seller (the party with a short position) does not own all or any of the underlying assets required at settlement, and so cannot make the delivery.- ",Object(y.jsx)("a",{href:"https://www.investopedia.com/terms/f/failuretodeliver.asp",children:"investopedia.com"})]})]}),Object(y.jsxs)(Z.a.Item,{eventKey:"1",children:[Object(y.jsx)(Z.a.Header,{children:"Where is this data from?"}),Object(y.jsxs)(Z.a.Body,{children:["This data is publically available directly from the Securities and Exchange Commission (SEC) ",Object(y.jsx)("a",{href:"https://www.sec.gov/data/foiadocsfailsdatahtm",children:"here"}),"."]})]}),Object(y.jsxs)(Z.a.Item,{eventKey:"2",children:[Object(y.jsx)(Z.a.Header,{children:"How often is the data updated?"}),Object(y.jsx)(Z.a.Body,{children:"The SEC publishes new data bi-monthly.  The first half of a given month is available at the end of the month. The second half of a given month is available at about the 15th of the next month. Our servers check for new data nightly."})]}),Object(y.jsxs)(Z.a.Item,{eventKey:"3",children:[Object(y.jsx)(Z.a.Header,{children:"Why is there not more historical data?"}),Object(y.jsxs)(Z.a.Body,{children:["Cost.  We only make money through donations (",Object(y.jsx)("a",{href:"https://www.paypal.com/paypalme/collinhpreston",children:"PayPal"}),").  Each report from the SEC can contain 40k entries, which must be consumed and stored into our database.  Hosting and managing our current infrastructure costs $12 a month.  Adding more historically data will double or tripple that cost."]})]}),Object(y.jsxs)(Z.a.Item,{eventKey:"4",children:[Object(y.jsx)(Z.a.Header,{children:"Why can't I find data for a symbol"}),Object(y.jsx)(Z.a.Body,{children:"Not all publically traded companies, funds, stocks, will have shares that failed to be delivered prior to their settlement date.  If you don't see the stock symbol you're looking for, that may be that case."})]}),Object(y.jsxs)(Z.a.Item,{eventKey:"5",children:[Object(y.jsx)(Z.a.Header,{children:"Do you offer an API?"}),Object(y.jsxs)(Z.a.Body,{children:["Yes we do!  You can check out our ",Object(y.jsx)("a",{href:"/api",children:"API page"}),"."]})]})]})})]})}))})},G=n(413),Y=n(411),W=n(415),J=(n(396),function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(G.a,{bg:"light",variant:"light",fixed:"bottom",children:Object(y.jsxs)(Y.a,{children:[Object(y.jsx)(G.a.Brand,{href:"/",children:"Failsdata.com"}),Object(y.jsxs)(W.a,{className:"me-auto",children:[Object(y.jsx)(W.a.Link,{href:"/",children:"Home"}),Object(y.jsx)(W.a.Link,{href:"/about",children:"About"}),Object(y.jsx)(W.a.Link,{href:"/contact",children:"Contact"}),Object(y.jsx)(W.a.Link,{href:"/api",children:"API"}),Object(y.jsx)(W.a.Link,{href:"https://www.paypal.com/paypalme/collinhpreston",children:"Support"})]})]})})})}),Q=(n(399),n(414)),U=n(412);var z=function(){var e,t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),d=r[0],j=r[1],h=Object(a.useState)(!1),b=Object(l.a)(h,2),u=b[0],m=b[1],p={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({inquiry:{message:d},email:{email:c}})};function O(e){switch(e.target.name){case"message":return void j(e.target.value);case"email":return void s(e.target.value)}}return e=u?Object(y.jsx)("div",{children:Object(y.jsx)("p",{children:Object(y.jsx)("b",{children:"Thanks for your inquiry, you will hear from us soon."})})}):Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:Object(y.jsx)("b",{children:"Feel free to reach out with any questions or suggestions."})}),Object(y.jsxs)(Q.a,{onSubmit:function(e){m(!0),fetch("/api/v1/inquiry",p).then((function(e){return e.json()}))},children:[Object(y.jsxs)(Q.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(y.jsx)(Q.a.Label,{children:"Email address"}),Object(y.jsx)(Q.a.Control,{name:"email",type:"email",placeholder:"name@example.com",onChange:O})]}),Object(y.jsxs)(Q.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(y.jsx)(Q.a.Label,{children:"Inquiry"}),Object(y.jsx)(Q.a.Control,{name:"message",as:"textarea",rows:3,onChange:O})]}),Object(y.jsx)(U.a,{variant:"primary",type:"submit",children:"Submit"})]})]}),Object(y.jsx)(K.a,Object(o.a)(Object(o.a)({},{title:"Contact",description:"Contact form failsdata.com",canonical:"https://failsdata.com/contact",meta:{charset:"utf-8",name:{keywords:"contact,stocks,fails,SEC,deliver"}}}),{},{children:Object(y.jsxs)("div",{id:"form",children:[Object(y.jsx)("h1",{children:"Contact"}),e]})}))},V=n(134),$=n.n(V);n(400);var X=function(){return Object(y.jsx)(K.a,Object(o.a)(Object(o.a)({},{title:"Fails to deliver data - API",description:"Stock Fails to deliver data API.",canonical:"https://failsdata.com/api",meta:{charset:"utf-8",name:{keywords:"API,fails,stocks,deliver,data"}}}),{},{children:Object(y.jsxs)("div",{id:"api-title",children:[Object(y.jsx)("h1",{children:"API"}),Object(y.jsx)("br",{}),Object(y.jsxs)(Z.a,{id:"api-endpoints",children:[Object(y.jsxs)(Z.a.Item,{eventKey:"0",children:[Object(y.jsx)(Z.a.Header,{children:"/api/v1/company/:id"}),Object(y.jsxs)(Z.a.Body,{children:[Object(y.jsxs)("p",{children:[Object(y.jsx)("b",{children:"Description:"})," Returns all of the failed delivery data for a single company."]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("b",{children:"Parameters:"})," id - The Id or Symbol of the company being searched."]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("b",{children:"Returns:"})," "]}),Object(y.jsx)($.a,{id:"json-pretty",json:'{\n        "id": 1,\n        "data_last_updated": "2021-12-20 17:37:47 -0500",\n        "settlements": [\n            {\n                "id": 1,\n                "settlement_date": "20211101",\n                "quantity": 183855,\n                "price": "3.05",\n                "created_at": "2021-12-20T22:37:47.702Z",\n                "updated_at": "2021-12-20T22:37:47.702Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            },\n            {\n                "id": 5706,\n                "settlement_date": "20211102",\n                "quantity": 88351,\n                "price": "2.7",\n                "created_at": "2021-12-20T22:40:19.951Z",\n                "updated_at": "2021-12-20T22:40:19.951Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            },\n            {\n                "id": 17613,\n                "settlement_date": "20211104",\n                "quantity": 2444,\n                "price": "2.37",\n                "created_at": "2021-12-20T22:43:55.109Z",\n                "updated_at": "2021-12-20T22:43:55.109Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            },\n            {\n                "id": 23520,\n                "settlement_date": "20211105",\n                "quantity": 2932,\n                "price": "2.3",\n                "created_at": "2021-12-20T22:45:26.164Z",\n                "updated_at": "2021-12-20T22:45:26.164Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            },\n            {\n                "id": 29552,\n                "settlement_date": "20211108",\n                "quantity": 854,\n                "price": "2.41",\n                "created_at": "2021-12-20T22:46:56.273Z",\n                "updated_at": "2021-12-20T22:46:56.273Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            },\n            {\n                "id": 35475,\n                "settlement_date": "20211109",\n                "quantity": 758,\n                "price": "2.28",\n                "created_at": "2021-12-20T22:48:31.526Z",\n                "updated_at": "2021-12-20T22:48:31.526Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            },\n            {\n                "id": 41505,\n                "settlement_date": "20211110",\n                "quantity": 15092,\n                "price": "2.19",\n                "created_at": "2021-12-20T22:50:16.731Z",\n                "updated_at": "2021-12-20T22:50:16.731Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            },\n            {\n                "id": 47564,\n                "settlement_date": "20211112",\n                "quantity": 49856,\n                "price": "2.23",\n                "created_at": "2021-12-20T22:52:14.358Z",\n                "updated_at": "2021-12-20T22:52:14.358Z",\n                "settlement_period_id": 1,\n                "company_id": 1\n            }\n        ]\n    }'})]})]}),Object(y.jsxs)(Z.a.Item,{eventKey:"1",children:[Object(y.jsx)(Z.a.Header,{children:"/api/v1/company"}),Object(y.jsxs)(Z.a.Body,{children:[Object(y.jsxs)("p",{children:[Object(y.jsx)("b",{children:"Description:"})," Returns all of the companies available"]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("b",{children:"Returns:"})," "]}),Object(y.jsx)($.a,{id:"json-pretty",json:'[\n        {\n            "id": 1,\n            "symbol": "AGRI",\n            "name": "AGRIFORCE GROWING SYS LTD COM "\n        },\n        {\n            "id": 2,\n            "symbol": "VMAR",\n            "name": "VISION MARINE TECHNOLOGIES INC"\n        },\n        {\n            "id": 3,\n            "symbol": "DDAIF",\n            "name": "DAIMLER AG"\n        },\n        {\n            "id": 4,\n            "symbol": "DB",\n            "name": "DEUTSCHE BANK AG NAMEN AKT (DE"\n        },\n        {\n            "id": 5,\n            "symbol": "CSTM",\n            "name": "CONSTELLIUM SE CL A SHS USD (F"\n        }]'})]})]}),Object(y.jsxs)(Z.a.Item,{eventKey:"2",children:[Object(y.jsx)(Z.a.Header,{children:"/api/v1/company/top-ten"}),Object(y.jsxs)(Z.a.Body,{children:[Object(y.jsxs)("p",{children:[Object(y.jsx)("b",{children:"Description:"})," Returns the top 10 FTD companies by quantity"]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("b",{children:"Returns:"})," "]}),Object(y.jsx)($.a,{id:"json-pretty",json:'[\n                {\n                    "id": 5252,\n                    "symbol": "TWOH",\n                    "quantity": 52727790\n                },\n                {\n                    "id": 407,\n                    "symbol": "KNEOF",\n                    "quantity": 45163750\n                },\n                {\n                    "id": 5000,\n                    "symbol": "SNDL",\n                    "quantity": 24628135\n                },\n                {\n                    "id": 3515,\n                    "symbol": "LGBS",\n                    "quantity": 23180885\n                },\n                {\n                    "id": 946,\n                    "symbol": "BKKT",\n                    "quantity": 16575943\n                },\n                {\n                    "id": 4601,\n                    "symbol": "HOOD",\n                    "quantity": 16313967\n                },\n                {\n                    "id": 1795,\n                    "symbol": "GWH",\n                    "quantity": 12924879\n                },\n                {\n                    "id": 4352,\n                    "symbol": "PROG",\n                    "quantity": 11400931\n                },\n                {\n                    "id": 5167,\n                    "symbol": "TMBR",\n                    "quantity": 11213448\n                },\n                {\n                    "id": 2144,\n                    "symbol": "FTSSF",\n                    "quantity": 11197532\n                }\n            ]'})]})]})]})]})}))};var ee=function(){return Object(y.jsx)("div",{children:Object(y.jsx)("p",{children:"404: We couldn't find the page you're looking for!"})})},te=n(162),ne=function(){var e=Object(B.f)();return te.a.initialize("297511540"),te.a.pageview(window.location.pathname+window.location.search),Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)("div",{id:"container",children:[Object(y.jsx)(M,{customClickEvent:function(){e("/")}}),Object(y.jsxs)(B.c,{children:[Object(y.jsx)(B.a,{path:"/",element:Object(y.jsx)(R,{})}),Object(y.jsx)(B.a,{path:"about",element:Object(y.jsx)(P,{})}),Object(y.jsx)(B.a,{path:"contact",element:Object(y.jsx)(z,{})}),Object(y.jsx)(B.a,{path:"api",element:Object(y.jsx)(X,{})}),Object(y.jsx)(B.a,{path:"/:slug",element:Object(y.jsx)(R,{})}),Object(y.jsx)(B.a,{path:"404",element:Object(y.jsx)(ee,{})}),Object(y.jsx)(B.a,{path:"*",element:Object(y.jsx)(ee,{})})]}),Object(y.jsx)("div",{id:"adsense",children:Object(y.jsx)("a",{target:"_blank",href:"https://shareasale.com/r.cfm?b=1874396&u=3072230&m=115186&urllink=&afftrack=",children:Object(y.jsx)("img",{src:"https://static.shareasale.com/image/115186/cubetrackernl.jpeg",border:"0"})})})]}),Object(y.jsx)(J,{})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,417)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(y.jsx)(r.a,{children:Object(y.jsx)(ne,{})}),document.getElementById("root")),ae()}},[[401,1,2]]]);
//# sourceMappingURL=main.06510848.chunk.js.map