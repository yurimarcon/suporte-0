(function(t){function e(e){for(var o,i,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(o=!1)}o&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var o={},r={app:0},n=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d2086b7":"5e8100e0","chunk-2d21eadd":"eb7b000a"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,o){a=r[t]=[e,o]}));e.push(a[2]=o);var n,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var l=new Error;n=function(e){s.onerror=s.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",l.name="ChunkLoadError",l.type=o,l.request=n,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:s})}),12e4);s.onerror=s.onload=n,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(a,o,function(e){return t[e]}.bind(null,o));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},4547:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},["login"!=this.$route.name?a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Application")])],1):t._e(),a("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("div",{staticClass:"text-center text--secondary py-5"},[a("v-avatar",{attrs:{size:"150"}},[a("v-img",{attrs:{src:t.profile.photo}})],1),a("p",{staticClass:"mt-3 font-weight-bold"},[t._v(t._s(t.profile.name))]),a("p",[t._v(t._s(t.profile.email))])],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,o){return a("v-list-item",{key:o,on:{click:function(e){return t.$store.dispatch("logOut")}}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1),a("v-main",{staticClass:"grey lighten-2"},[a("router-view")],1)],1)},n=[],i=(a("b0c0"),{name:"App",data:function(){return{drawer:null,selectedItem:0,items:[{text:"Sair",icon:"mdi-logout"}],profile:{photo:"https://cdn-icons-png.flaticon.com/512/3237/3237472.png",name:null,email:null}}},updated:function(){this.$store.state.auth.user&&(this.profile.email=this.$store.state.auth.user.email,this.profile.name=this.$store.state.auth.user.displayName,this.profile.photo=this.$store.state.auth.user.photoURL)}}),c=i,s=(a("034f"),a("2877")),l=a("6544"),u=a.n(l),d=a("7496"),f=a("40dc"),v=a("5bc1"),p=a("8212"),m=a("ce7e"),h=a("132d"),b=a("adda"),g=a("8860"),k=a("da13"),w=a("5d23"),y=a("1baa"),x=a("34c3"),_=a("f6c4"),V=a("f774"),C=a("2a7f"),j=Object(s["a"])(c,r,n,!1,null,null,null),O=j.exports;u()(j,{VApp:d["a"],VAppBar:f["a"],VAppBarNavIcon:v["a"],VAvatar:p["a"],VDivider:m["a"],VIcon:h["a"],VImg:b["a"],VList:g["a"],VListItem:k["a"],VListItemContent:w["a"],VListItemGroup:y["a"],VListItemIcon:x["a"],VListItemTitle:w["b"],VMain:_["a"],VNavigationDrawer:V["a"],VToolbarTitle:C["a"]});var T=a("9483");Object(T["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7"),a("3ca3"),a("ddb0");var I=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-sm-5 mt-4"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"9"}},[a("HeaderSaldo"),a("Table")],1),a("v-col",{attrs:{cols:"3"}},[a("v-card",{staticClass:"pa-3 text--secondary",attrs:{color:"warning lighten-3",height:"600"}},[a("h1",[t._v("Anotações")]),a("v-divider"),a("v-textarea",{attrs:{rows:"18"}})],1)],1)],1),a("CreateView")],1)},D=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{attrs:{loading:t.loading,headers:t.headers,items:t.desserts,search:t.search},scopedSlots:t._u([{key:"item.id",fn:function(e){var a=e.item;return[t._v(" "+t._s(t._f("date")(a.creationDate,a.creationDate))+" ")]}},{key:"item.view",fn:function(e){var o=e.item;return[a("v-btn",{attrs:{to:{name:"DetalhesTicket",params:o},color:"primary",rounded:""}},[a("v-icon",[t._v("mdi-arrow-right-bold-circle-outline")])],1)]}}])})],1)],1)},S=[],P=(a("07ac"),a("260b")),E={apiKey:"AIzaSyBrjoXfHhKom4r4rhcOr8N_JJysAb89J34",authDomain:"suporte-0.firebaseapp.com",projectId:"suporte-0",storageBucket:"suporte-0.appspot.com",messagingSenderId:"817737800347",appId:"1:817737800347:web:5b0a4db10852825beac43e"},L=(Object(P["a"])(E),a("66ce")),R=Object(L["a"])(),B={data:function(){return{loading:!0,retorno:null,search:"",headers:[{text:"Título",filterable:!0,value:"title"},{text:"Prioridade",value:"priority"},{text:"Data da Criação",value:"id"},{text:"Visualizar",value:"view"}],desserts:[]}},methods:{buscaRegistros:function(){var t=this;Object(L["b"])(Object(L["c"])(R,"Tickets/"),(function(e){t.desserts=Object.values(e.val()),console.log(t.desserts),t.loading=!1}))},removerDocumento:function(){Object(L["d"])(Object(L["c"])(R,"Usuarios/1633609728356"))}},created:function(){this.$store.dispatch("verifyAuth"),this.buscaRegistros()},filters:{date:function(t){return new Date(t).toLocaleDateString()}}},F=B,N=a("8336"),M=a("b0af"),J=a("99d9"),U=a("8fea"),z=a("8654"),H=Object(s["a"])(F,$,S,!1,null,null,null),q=H.exports;u()(H,{VBtn:N["a"],VCard:M["a"],VCardTitle:J["c"],VDataTable:U["a"],VIcon:h["a"],VTextField:z["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-alert",{staticClass:"text--secondary",attrs:{border:"left","colored-border":"",color:"error darken-1",elevation:"5"}},[a("h1",[t._v("Pendente")]),a("span",{staticClass:"saldo"},[t._v("4")])])],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-alert",{staticClass:"text--secondary",attrs:{border:"left","colored-border":"",color:"warning lighten-1",elevation:"5"}},[a("h1",[t._v("Em atendimento")]),a("span",{staticClass:"saldo"},[t._v("4")])])],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-alert",{staticClass:"text--secondary",attrs:{border:"left","colored-border":"",color:"success",elevation:"5"}},[a("h1",[t._v("Resolvidos")]),a("span",{staticClass:"saldo"},[t._v("4")])])],1)],1)],1)},G=[],W={},X=W,Q=(a("603c"),a("0798")),Y=a("62ad"),Z=a("0fd9"),tt=Object(s["a"])(X,K,G,!1,null,null,null),et=tt.exports;u()(tt,{VAlert:Q["a"],VCol:Y["a"],VRow:Z["a"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mt-16 mr-5",attrs:{color:"primary",fab:"",dark:"",top:"",right:"",fixed:""}},"v-btn",r,!1),o),[a("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-spacer"),a("v-toolbar-title",[t._v("Abrindo chamado")]),a("v-spacer"),a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-container",[a("v-form",{staticClass:"d-flex justify-center",on:{submit:function(e){e.preventDefault(),t.showConfirmacao=!t.showConfirmacao}}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Título",placeholder:"Informe um título para a ocorrência"},model:{value:t.ticket.title,callback:function(e){t.$set(t.ticket,"title",e)},expression:"ticket.title"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12"}},[a("v-select",{attrs:{items:t.items,label:"Prioridade"},model:{value:t.ticket.priority,callback:function(e){t.$set(t.ticket,"priority",e)},expression:"ticket.priority"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"Descrição"},model:{value:t.ticket.description,callback:function(e){t.$set(t.ticket,"description",e)},expression:"ticket.description"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-file-input",{attrs:{color:"primary",counter:"",label:"Arquivos",multiple:"","prepend-icon":"mdi-paperclip",outlined:"","show-size":1e3},scopedSlots:t._u([{key:"selection",fn:function(e){var o=e.index,r=e.text;return[o<4?a("v-chip",{attrs:{color:"primary",dark:"",label:"",small:""}},[t._v(" "+t._s(r)+" ")]):2===o?a("span",{staticClass:"text-overline grey--text text--darken-3 mx-2"},[t._v(" +"+t._s(t.ticket.files.length-2)+" File(s) ")]):t._e()]}}]),model:{value:t.ticket.files,callback:function(e){t.$set(t.ticket,"files",e)},expression:"ticket.files"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-row",[a("v-spacer"),a("v-btn",{staticClass:"ma-3",attrs:{color:"success",fab:"",large:"",bottom:"",right:"",type:"submit"}},[a("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)],1),t.showConfirmacao?a("DialogConfirm",{attrs:{showConfirmacao:t.showConfirmacao},on:{closeDialog:function(e){t.showConfirmacao=!t.showConfirmacao},createTicket:t.handleAbrirTicket}}):t._e()],1)],1)],1)],1)},ot=[],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogConfirma,callback:function(e){t.dialogConfirma=e},expression:"dialogConfirma"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v(" Deseja enviar? ")]),a("v-card-text",[t._v("Para abrir esse chamado basta clicar em "),a("strong",{staticStyle:{color:"rgb(79, 114, 190)"}},[t._v("ENVIAR")]),t._v(".")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"error darken-1",text:""},on:{click:function(e){return t.$emit("closeDialog")}}},[t._v(" Disagree ")]),a("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:function(e){return t.$emit("createTicket")}}},[t._v(" Agree ")])],1)],1)],1)],1)},nt=[],it={props:["showConfirmacao"],data:function(){return{dialogConfirma:!0}}},ct=it,st=a("169a"),lt=a("2fa4"),ut=Object(s["a"])(ct,rt,nt,!1,null,null,null),dt=ut.exports;u()(ut,{VBtn:N["a"],VCard:M["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VDialog:st["a"],VRow:Z["a"],VSpacer:lt["a"]});var ft={components:{DialogConfirm:dt},data:function(){return{dialog:null,showConfirmacao:!1,items:["Baixa","Média","Alta","Crítica"],ticket:{title:null,priority:null,description:null,files:[]}}},methods:{handleAbrirTicket:function(){console.log(this.ticket),this.$store.dispatch("createTicket",this.ticket),this.ticket={title:null,priority:null,description:null,files:[]},this.showConfirmacao=!1,this.dialog=!1}}},vt=ft,pt=a("cc20"),mt=a("a523"),ht=a("23a7"),bt=a("4bd4"),gt=a("b974"),kt=a("a844"),wt=a("71d9"),yt=Object(s["a"])(vt,at,ot,!1,null,null,null),xt=yt.exports;u()(yt,{VBtn:N["a"],VCard:M["a"],VChip:pt["a"],VCol:Y["a"],VContainer:mt["a"],VDialog:st["a"],VFileInput:ht["a"],VForm:bt["a"],VIcon:h["a"],VRow:Z["a"],VSelect:gt["a"],VSpacer:lt["a"],VTextField:z["a"],VTextarea:kt["a"],VToolbar:wt["a"],VToolbarTitle:C["a"]});var _t={components:{Table:q,HeaderSaldo:et,CreateView:xt},created:function(){this.$store.dispatch("verifyAuth")}},Vt=_t,Ct=Object(s["a"])(Vt,A,D,!1,null,null,null),jt=Ct.exports;u()(Ct,{VCard:M["a"],VCol:Y["a"],VDivider:m["a"],VRow:Z["a"],VTextarea:kt["a"]}),o["a"].use(I["a"]);var Ot=[{path:"/",name:"login",component:function(){return a.e("chunk-2d2086b7").then(a.bind(null,"a55b"))}},{path:"/home",name:"Home",component:jt},{path:"/detalhesticket",name:"DetalhesTicket",component:function(){return a.e("chunk-2d21eadd").then(a.bind(null,"d71e"))}}],Tt=new I["a"]({mode:"history",base:"/",routes:Ot}),It=Tt,At=a("2f62"),Dt={user:null,loginInvalido:!1},$t=Dt,St=a("ea7b"),Pt={sigIn:function(){var t=Object(St["c"])();Object(St["b"])(t,"yuri.oliveira@brasoftware.com.br","123456").then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},loginWithEmailAndPasw:function(t,e){var a=t.commit;console.log(e);var o=Object(St["c"])();Object(St["e"])(o,e.login,e.password).then((function(t){It.push("/home")})).catch((function(t){a("loginInvalido"),console.log(t)}))},verifyAuth:function(t){var e=t.commit,a=Object(St["c"])();Object(St["d"])(a,(function(t){t?e("setUser",t):It.push("/")}))},login:function(){var t=new St["a"],e=Object(St["c"])();Object(St["f"])(e,t).then((function(t){St["a"].credentialFromResult(t);console.log(t.user),It.push("/home")})).catch((function(t){St["a"].credentialFromError(t)}))},logOut:function(){var t=Object(St["c"])();Object(St["g"])(t).then((function(){It.push("/")})).catch((function(t){console.log(t)}))}},Et=Pt,Lt={loginInvalido:function(t){t.loginInvalido=!0},setUser:function(t,e){t.user=e}},Rt=Lt,Bt={state:$t,mutations:Rt,actions:Et},Ft=Bt,Nt={},Mt=Nt,Jt=Object(L["a"])(),Ut={createTicket:function(t,e){var a=(new Date).getTime(),o=(new Date).getTime();e.creationDate=a,e.lastUpdate=o;var r=Object(L["c"])(Jt,"Tickets/"+a);Object(L["e"])(r,e)}},zt=Ut,Ht={},qt=Ht,Kt={state:Mt,mutations:qt,actions:zt},Gt=Kt;o["a"].use(At["a"]);var Wt=new At["a"].Store({state:{},mutations:{},actions:{},modules:{auth:Ft,ticket:Gt}}),Xt=a("f309");o["a"].use(Xt["a"]);var Qt=new Xt["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:It,store:Wt,vuetify:Qt,render:function(t){return t(O)}}).$mount("#app")},"603c":function(t,e,a){"use strict";a("4547")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.5df8be96.js.map