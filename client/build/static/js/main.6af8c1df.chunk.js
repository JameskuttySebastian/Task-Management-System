(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){e.exports=t(113)},105:function(e,a,t){},110:function(e,a,t){},113:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),l=t.n(i),o=(t(105),t(48)),c=t(29),s=t(72),m=t(152),d=t(170),u=t(145),p=t(148),g=t(150),h=t(151);Object(u.a)(function(e){return{root:{flexGrow:1},title:{flexGrow:2}}});var E=t(173),f=t(157),b=t(153),y=t(171),v=t(73),w=t.n(v),k=Object(u.a)(function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}});function N(){var e=k();return r.a.createElement(m.a,{component:"main",maxWidth:"xs"},r.a.createElement(b.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(E.a,{className:e.avatar},r.a.createElement(w.a,null)),r.a.createElement(h.a,{component:"h1",variant:"h5"},"Login Page"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"user",label:"User ID",name:"user",autoComplete:"user",autoFocus:!0}),r.a.createElement(y.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Login"))))}var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))},T=t(74),x=t(75),O=t(80),S=t(76),j=t(81),I=t(158),P=t(77),A=t.n(P),U=function(e){function a(){return Object(T.a)(this,a),Object(O.a)(this,Object(S.a)(a).apply(this,arguments))}return Object(j.a)(a,e),Object(x.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto",textAlign:"justify",paddingTop:100}},r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement("div",{className:"banner-text",style:{clear:"both"}},r.a.createElement("h1",{style:{textAlign:"center"}},"TASK MASTER PRO")),r.a.createElement("p",null,"Task Master Pro is an application which is allows groups of users to work together more cohesively to quickly and thoroughly complete assigned tasks. Features such as time tracking and project tracking ensure that all given tasks are covered and progress reports are up to date. Task Master Pro is mobile-first application and including other functions such google maps and address retrival, email syncing, collaborative interfaces for all users. Task Master Pro application is related to Project Management software, Time Management software, Professional Services Automation software."),r.a.createElement("img",{style:{width:"100%",margin:"auto"},className:"img-responsive",src:A.a,alt:"logo"})))}}]),a}(n.Component),W=t(167),R=t(172),M=t(156),B=Object(u.a)(function(e){return{root:{"& > *":{margin:e.spacing(1),marginTop:20,display:"flex",width:"100%"}}}});function F(){var e=B();return r.a.createElement("div",null,r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off",style:{margin:"auto",textAlign:"justify",paddingTop:100}},r.a.createElement("h2",{style:{clear:"both"}},"USER CREATION FORM"),r.a.createElement(y.a,{id:"outlined-basic",variant:"outlined",label:"Name"}),r.a.createElement(y.a,{id:"outlined-basic",variant:"outlined",label:"Email Address"}),r.a.createElement(y.a,{id:"outlined-basic",variant:"outlined",label:"Password"}),r.a.createElement(M.a,{variant:"outlined",className:e.formControl},r.a.createElement(R.a,{htmlFor:"outlined-age-native-simple"},"User Type"),r.a.createElement(W.a,{native:!0,label:"User Type"},r.a.createElement("option",{"aria-label":"None",value:""}),r.a.createElement("option",{value:10},"Administrator"),r.a.createElement("option",{value:20},"Client"))),r.a.createElement(f.a,{variant:"contained",color:"primary",style:{clear:"both",marginTop:50}},"SUMBIT")))}var G=Object(u.a)(function(e){return{root:{"& > *":{margin:e.spacing(1),marginTop:20,width:"100%",display:"flex"}}}});function L(){var e=G();return r.a.createElement("div",null,r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off",style:{margin:"auto",textAlign:"justify",paddingTop:100}},r.a.createElement("h2",{style:{clear:"both"}},"CLIENT CREATION FORM"),r.a.createElement(y.a,{id:"outlined-basic",variant:"outlined",label:"School Name"}),r.a.createElement(y.a,{id:"outlined-basic",variant:"outlined",label:"Address"}),r.a.createElement(y.a,{id:"outlined-basic",variant:"outlined",label:"Email Address"}),r.a.createElement(f.a,{variant:"contained",color:"primary",style:{clear:"both",marginTop:50}},"SUMBIT")))}var z=Object(u.a)(function(e){return{root:{"& > *":{margin:e.spacing(1),marginTop:20,width:"100%",display:"flex"}}}});function V(){var e=z();return r.a.createElement("div",null,r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off",style:{margin:"auto",textAlign:"justify",paddingTop:100}},r.a.createElement("h2",{style:{clear:"both"}},"TASK CREATION FORM"),r.a.createElement(y.a,{id:"outlined-basic",variant:"outlined",label:"Title"}),r.a.createElement(y.a,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:12,variant:"outlined"}),r.a.createElement(f.a,{variant:"contained",color:"primary",style:{clear:"both",marginTop:50}},"SUMBIT")))}var H=t(114),D=t(160),J=t(164),K=t(163),q=t(159),X=t(161),$=t(168),Q=t(162),Y=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:function(e){return e.toLocaleString()}},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:function(e){return e.toLocaleString()}},{id:"density",label:"Density",minWidth:170,align:"right",format:function(e){return e.toFixed(2)}}];function Z(e,a,t,n){return{name:e,code:a,population:t,size:n,density:t/n}}var _=[Z("India","IN",1324171354,3287263),Z("China","CN",1403500365,9596961),Z("Italy","IT",60483973,301340),Z("United States","US",327167434,9833520),Z("Canada","CA",37602103,9984670),Z("Australia","AU",25475400,7692024),Z("Germany","DE",83019200,357578),Z("Ireland","IE",4857e3,70273),Z("Mexico","MX",126577691,1972550),Z("Japan","JP",126317e3,377973),Z("France","FR",67022e3,640679),Z("United Kingdom","GB",67545757,242495),Z("Russia","RU",146793744,17098246),Z("Nigeria","NG",200962417,923768),Z("Brazil","BR",210147125,8515767)],ee=Object(u.a)({root:{width:"100%"},container:{maxHeight:440}});function ae(){var e=ee(),a=r.a.useState(0),t=Object(c.a)(a,2),n=t[0],i=t[1],l=r.a.useState(10),o=Object(c.a)(l,2),s=o[0],m=o[1];return r.a.createElement(H.a,{className:e.root,style:{clear:"both",marginTop:200}},r.a.createElement("h2",{style:{padding:30,backgroundColor:"#4052B5",color:"white"}},"View Users"),r.a.createElement(q.a,{className:e.container},r.a.createElement(D.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(X.a,null,r.a.createElement(Q.a,null,Y.map(function(e){return r.a.createElement(K.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)}))),r.a.createElement(J.a,null,_.slice(n*s,n*s+s).map(function(e){return r.a.createElement(Q.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},Y.map(function(a){var t=e[a.id];return r.a.createElement(K.a,{key:a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)}))})))),r.a.createElement($.a,{rowsPerPageOptions:[5,10,25],component:"div",count:_.length,rowsPerPage:s,page:n,onChangePage:function(e,a){i(a)},onChangeRowsPerPage:function(e){m(+e.target.value),i(0)}}))}var te=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:function(e){return e.toLocaleString()}},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:function(e){return e.toLocaleString()}},{id:"density",label:"Density",minWidth:170,align:"right",format:function(e){return e.toFixed(2)}}];function ne(e,a,t,n){return{name:e,code:a,population:t,size:n,density:t/n}}var re=[ne("India","IN",1324171354,3287263),ne("China","CN",1403500365,9596961),ne("Italy","IT",60483973,301340),ne("United States","US",327167434,9833520),ne("Canada","CA",37602103,9984670),ne("Australia","AU",25475400,7692024),ne("Germany","DE",83019200,357578),ne("Ireland","IE",4857e3,70273),ne("Mexico","MX",126577691,1972550),ne("Japan","JP",126317e3,377973),ne("France","FR",67022e3,640679),ne("United Kingdom","GB",67545757,242495),ne("Russia","RU",146793744,17098246),ne("Nigeria","NG",200962417,923768),ne("Brazil","BR",210147125,8515767)],ie=Object(u.a)({root:{width:"100%"},container:{maxHeight:440}});function le(){var e=ie(),a=r.a.useState(0),t=Object(c.a)(a,2),n=t[0],i=t[1],l=r.a.useState(10),o=Object(c.a)(l,2),s=o[0],m=o[1];return r.a.createElement(H.a,{className:e.root,style:{clear:"both",marginTop:200}},r.a.createElement("h2",{style:{padding:30,backgroundColor:"#4052B5",color:"white"}},"VIEW CLIENTS"),r.a.createElement(q.a,{className:e.container},r.a.createElement(D.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(X.a,null,r.a.createElement(Q.a,null,te.map(function(e){return r.a.createElement(K.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)}))),r.a.createElement(J.a,null,re.slice(n*s,n*s+s).map(function(e){return r.a.createElement(Q.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},te.map(function(a){var t=e[a.id];return r.a.createElement(K.a,{key:a.id,align:a.align},a.format&&"number"===typeof t?a.format(t):t)}))})))),r.a.createElement($.a,{rowsPerPageOptions:[5,10,25],component:"div",count:re.length,rowsPerPage:s,page:n,onChangePage:function(e,a){i(a)},onChangeRowsPerPage:function(e){m(+e.target.value),i(0)}}))}var oe=t(24),ce=t(30),se=t(3),me=t(165),de=t(78),ue=t.n(de),pe=t(166),ge=(t(110),Object(u.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:240},title:{flexGrow:1},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(s.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-start"})}}));function he(){var e=ge(),a=r.a.useState(!1),t=Object(c.a)(a,2),n=t[0],i=t[1],l=function(){i(!1)};return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,null),r.a.createElement(p.a,{style:{display:"block"},position:"fixed",className:Object(se.a)(e.appBar,Object(o.a)({},e.appBarShift,n))},r.a.createElement(g.a,{style:{float:"right"}},r.a.createElement(me.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){i(!0)},className:Object(se.a)(n&&e.hide)},r.a.createElement(ue.a,null)))),r.a.createElement(m.a,null,r.a.createElement(oe.a,null,r.a.createElement(d.a,{className:e.drawer,variant:"persistent",anchor:"right",open:n,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement("h3",null,"MENU ITEMS"),r.a.createElement(pe.a,null),r.a.createElement(oe.b,{to:"/landingpage",className:"link",style:{marginTop:20},onClick:l},"Home"),r.a.createElement(oe.b,{to:"/createuser",className:"link",style:{marginTop:20},onClick:l},"Create Users"),r.a.createElement(oe.b,{to:"/createclient",className:"link",style:{marginTop:20},onClick:l},"Create Client"),r.a.createElement(oe.b,{to:"/createtask",className:"link",style:{marginTop:20},onClick:l},"Create Task"),r.a.createElement(oe.b,{to:"/viewusers",className:"link",style:{marginTop:20},onClick:l},"View Users"),r.a.createElement(oe.b,{to:"/viewclients",className:"link",style:{marginTop:20},onClick:l},"View Clients"),r.a.createElement(oe.b,{to:"/",className:"link",style:{marginTop:200},onClick:l},"Logoff")),r.a.createElement(ce.c,null,r.a.createElement(ce.a,{exact:!0,path:"/",component:C}),r.a.createElement(ce.a,{exact:!0,path:"/landingpage",component:U}),r.a.createElement(ce.a,{path:"/createuser",component:F}),r.a.createElement(ce.a,{path:"/createclient",component:L}),r.a.createElement(ce.a,{path:"/createtask",component:V}),r.a.createElement(ce.a,{path:"/viewusers",component:ae}),r.a.createElement(ce.a,{path:"/viewclients",component:le})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},77:function(e,a,t){e.exports=t.p+"static/media/task-management.96aa4067.jpg"}},[[100,1,2]]]);
//# sourceMappingURL=main.6af8c1df.chunk.js.map