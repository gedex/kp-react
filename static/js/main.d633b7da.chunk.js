(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(e,a,t){},221:function(e,a,t){"use strict";t.r(a);var n=t(14),r=t(0),c=t.n(r),l=t(18),o=t.n(l),i=t(27),s=t(28),p=t(30),u=t(29),m=t(42),d=t(31),g=t(3),h=t(19),E=t(93),f=(t(101),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(p.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={menuActive:!1,parentsActive:!1},t.toggleMenu=function(){t.setState(function(e){return{menuActive:!e.menuActive}})},t.toggleParents=function(){t.setState(function(e){return{parentsActive:!e.parentsActive}})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"skeleton",value:function(){return c.a.createElement(g.r,null,c.a.createElement(g.r.Item,{fill:!0},c.a.createElement(g.q,{size:"small"})),c.a.createElement(g.r.Item,{fill:!0},c.a.createElement(g.q,{size:"small"})),c.a.createElement(g.r.Item,{fill:!0},c.a.createElement(g.q,{size:"small"})))}},{key:"getParents",value:function(){var e=this;return[{title:"Kembali ke",items:this.props.parents.map(function(a){return a.onAction=e.toggleParents,a})}]}},{key:"getParentsPopover",value:function(){var e=this.state.parentsActive,a=this.getParents(),t=c.a.createElement(g.d,{disabled:!a[0].items.length,icon:e?"chevronDown":"chevronLeft",onClick:this.toggleParents});return c.a.createElement(g.n,{active:e,activator:t,onClose:this.toggleParents,preferredAlignment:"left"},c.a.createElement(g.a,{sections:a}))}},{key:"getSearchPopover",value:function(){var e=this.state.menuActive,a=c.a.createElement(g.d,{icon:e?"chevronDown":"search",onClick:this.toggleMenu,disabled:!0});return c.a.createElement(g.n,{active:e,activator:a,onClose:this.toggleMenu,preferredAlignment:"right",fullHeight:!0},c.a.createElement(g.i,null))}},{key:"render",value:function(){var e=this.props,a=e.loading,t=e.name,n=this.getParentsPopover();return a?this.skeleton():c.a.createElement("div",{className:"table-control"},c.a.createElement(g.r,null,c.a.createElement(g.r.Item,null,n),c.a.createElement(g.r.Item,{fill:!0},c.a.createElement("div",{className:"location-name"},c.a.createElement(g.d,{fullWidth:!0,disabled:!0,outline:!0,monochrome:!0},t)))))}}]),a}(r.Component)),v=t(5),P=t.n(v),b=t(48),k=["ber","cakupan","dem","error","gar","ger","gol","han","janggal","nas","pJum","pSah","pTSah","pa","pan","pas1","pas2","pbb","pda","pdi","pending","per","pkb","pkp","pna","ppp","ps","psi","sah","sej","tSah"],y=[["pas1","01"],["pas2","02"]],j=[["pkb","PKB"],["ger","Gerindra"],["pdi","PDI"],["gol","Golkar"],["nas","Nasdem"],["gar","Garuda"],["ber","Berkarya"],["sej","PKS"],["per","Perindo"],["ppp","PPP"],["psi","PSI"],["pan","PAN"],["han","Hanura"],["dem","Demokrat"],["pa","PA"],["ps","PS"],["pda","PDA"],["pna","PNA"],["pbb","PBB"],["pkp","PKP"]];function T(e){if(!e)return!1;var a=e.children;return!(!a||!a[0])&&3===a[0].length}function S(e,a){var t=T(a),r=[];if(!a)return r;var c=a.children,l=a.parentIds,o=a.parentNames,i=a.data;return i=i||[],c.forEach(function(c){var s=0,p="",u=0,m="",d=0,g=0,h=0,E=0;if(t){var f=Object(n.a)(c,3);m=f[0],h=f[1],E=f[2],s=a.id,p=a.name,u=m,g=h+E}else{var v=Object(n.a)(c,3);u=v[0],m=v[1],d=v[2],s=u,p=m}var P=i[u]||{},y=P.photos||{},j=P.sum||{},T="#".concat(e,":").concat(u),S=Object(b.a)({id:u,name:m,locationId:s,locationName:p,url:T,totalKpu:d,dpt:g,photos:y,dataType:e,parentIds:l,parentNames:o},j);r.push(function(e){k.forEach(function(a){Number.isInteger(e[a])||(e[a]=0)});var a=e,t=a.pas1,n=a.pas2,r=a.cakupan,c=a.pending,l=a.totalKpu,o=a.error,i=r-c,s=t+n,p=t>n,u=n>t,m=0,d=0,g=0,h=0,E=0,f=0;t>0&&(m=t/s*100);n>0&&(d=n/s*100);l>0&&(g=i/l*100,h=r/l*100);r&&(E=c/r*100);r&&(f=o/r*100);var v={pilpres:[],pileg:[]};return Object.keys(e.photos).forEach(function(a){var t=e.photos[a],n=t.c1,r=t.sum;r=r||{};var c=1===(n=n||{}).type?"pilpres":"pileg";v[c].push(Object(b.a)({url:a},n,r))}),e=Object(b.a)({},e,{pasAdded:s,pas1Win:p,pas2Win:u,pas1Percentage:m,pas2Percentage:d,tpsTerproses:i,tpsTerprosesPercentage:g,cakupanPercentage:h,pendingPercentage:E,errorPercentage:f,photos:v})}(S))}),r}function N(e,a){if(!a)return[];var t=a.parentIds,n=a.parentNames;return!t||t.length<=0?[]:t.map(function(a,t){return{id:a,url:"#".concat(e,":").concat(a),content:n[t]}}).reverse()}function w(e){return e.toLocaleString("id-ID")}function O(e){var a=e.number,t=e.badge;return c.a.createElement("div",{className:"numeric"},c.a.createElement(g.h,{size:"small"},w(a)),t&&a>0?c.a.createElement(g.v,{content:"Urutan #".concat(t," dalam perolehan suara")},c.a.createElement(g.c,{status:1===t?"success":"info"},t)):null)}function K(e){var a=P()({winner:e.winner,numeric:!0}),t=e.winner,n=e.percentage,r=e.caption,l=e.progress;return c.a.createElement("div",{className:a},c.a.createElement(g.t,null,c.a.createElement(g.h,{size:"small"},t?"\u2713 ":"",n.toLocaleString("id-ID",{maximumFractionDigits:2})+"%"),c.a.createElement(g.f,null,r),l?c.a.createElement(g.o,{progress:l,size:"small"}):null))}function C(e){var a=P()({"th-col":!0}),t=P()({"th-col":!0,numeric:!0}),r=function(e){var a={};return j.slice(0).sort(function(a,t){return e[t[0]]-e[a[0]]}).forEach(function(e,t){a[e[0]]=t+1}),a}(e),l=j.map(function(a){var t=Object(n.a)(a,2),l=t[0],o=t[1];return{Header:function(){return c.a.createElement("div",{className:"th-col numeric"},c.a.createElement(g.j,null,o),c.a.createElement(O,{number:e[l],badge:r[l]}))},Footer:function(){return c.a.createElement("div",{className:"th-col numeric"},c.a.createElement(g.j,null,o),c.a.createElement(O,{number:e[l],badge:r[l]}))},accessor:l,Cell:function(e){return c.a.createElement(O,{number:e.value,size:"small"})},minWidth:116}});return[{Header:function(){return c.a.createElement("div",{className:a},c.a.createElement(g.j,null,"Wilayah"))},Footer:function(){return c.a.createElement("div",{className:a},c.a.createElement(g.j,null,"Wilayah"))},accessor:"name",Cell:function(e){return c.a.createElement("div",{className:"location-link"},c.a.createElement(g.l,{url:e.original.url},e.value))},minWidth:220}].concat(Object(h.a)(l),[{Header:function(){return c.a.createElement(g.v,{content:"Jumlah TPS total dari data KPU"},c.a.createElement("div",{className:t},c.a.createElement(g.j,null,"Total KPU"),c.a.createElement(O,{number:e.totalKpu})))},Footer:function(){return c.a.createElement(g.v,{content:"Jumlah TPS total dari data KPU"},c.a.createElement("div",{className:t},c.a.createElement(g.j,null,"Total KPU"),c.a.createElement(O,{number:e.totalKpu})))},accessor:"totalKpu",Cell:function(e){return c.a.createElement(O,{number:w(e.value)})},minWidth:160},{Header:function(){return c.a.createElement(g.v,{content:"Estimasi jumlah TPS yang sudah memiliki foto dan sudah diproses datanya"},c.a.createElement("div",{className:t},c.a.createElement(g.j,null,"Terproses"),c.a.createElement(K,{percentage:e.tpsTerprosesPercentage,caption:"".concat(w(e.tpsTerproses)," / ").concat(w(e.totalKpu)),progress:e.tpsTerprosesPercentage})))},Footer:function(){return c.a.createElement(g.v,{content:"Estimasi jumlah TPS yang sudah memiliki foto dan sudah diproses datanya"},c.a.createElement("div",{className:t},c.a.createElement(g.j,null,"Terproses"),c.a.createElement(K,{percentage:e.tpsTerprosesPercentage,caption:"".concat(w(e.tpsTerproses)," / ").concat(w(e.totalKpu)),progress:e.tpsTerprosesPercentage})))},accessor:"tpsTerprosesPercentage",Cell:function(e){return c.a.createElement(K,{percentage:e.value,caption:"".concat(w(e.original.tpsTerproses)," / ").concat(w(e.original.totalKpu)),progress:e.value})},minWidth:150},{Header:function(){return c.a.createElement(g.v,{content:"Jumlah TPS dengan foto yang diterima KawalPemilu (termasuk lembar PHP, pileg, dpd, dll)"},c.a.createElement("div",{className:t},c.a.createElement(g.j,null,"Dgn Foto"),c.a.createElement(K,{percentage:e.cakupanPercentage,caption:"".concat(w(e.cakupan)," / ").concat(w(e.totalKpu))})))},Footer:function(){return c.a.createElement(g.v,{content:"Jumlah TPS dengan foto yang diterima KawalPemilu (termasuk lembar PHP, pileg, dpd, dll)"},c.a.createElement("div",{className:t},c.a.createElement(g.j,null,"Dgn Foto"),c.a.createElement(K,{percentage:e.cakupanPercentage,caption:"".concat(w(e.cakupan)," / ").concat(w(e.totalKpu))})))},accessor:"cakupanPercentage",Cell:function(e){return c.a.createElement(K,{percentage:e.value,caption:"".concat(w(e.original.cakupan)," / ").concat(w(e.original.totalKpu)),progress:e.value})},minWidth:150},{Header:function(){return c.a.createElement(g.v,{content:"Jumlah TPS yang memiliki foto yang belum diproses"},c.a.createElement("div",{className:t},c.a.createElement(g.j,null,"Belum Terproses"),c.a.createElement(K,{percentage:e.pendingPercentage,caption:"".concat(w(e.pending)," / ").concat(w(e.cakupan))})))},Footer:function(){return c.a.createElement(g.v,{content:"Jumlah TPS yang memiliki foto yang belum diproses"},c.a.createElement("div",{className:t},c.a.createElement(g.j,null,"Belum Terproses"),c.a.createElement(K,{percentage:e.pendingPercentage,caption:"".concat(w(e.pending)," / ").concat(w(e.cakupan))})))},accessor:"pending",Cell:function(e){return c.a.createElement(K,{percentage:e.original.pendingPercentage,caption:"".concat(w(e.value)," / ").concat(w(e.original.cakupan))})},minWidth:190},{Header:function(){return c.a.createElement(g.v,{content:"Jumlah TPS yang memiliki laporan yang belum ditindaklanjuti."},c.a.createElement("div",{className:t},c.a.createElement(g.j,null,"Bermasalah"),c.a.createElement(K,{percentage:e.errorPercentage,caption:"".concat(w(e.error)," / ").concat(w(e.cakupan))})))},Footer:function(){return c.a.createElement(g.v,{content:"Jumlah TPS yang memiliki laporan yang belum ditindaklanjuti."},c.a.createElement("div",{className:t},c.a.createElement(g.j,null,"Bermasalah"),c.a.createElement(K,{percentage:e.errorPercentage,caption:"".concat(w(e.error)," / ").concat(w(e.cakupan))})))},accessor:"error",Cell:function(e){return c.a.createElement(K,{percentage:e.original.errorPercentage,caption:"".concat(w(e.value)," / ").concat(w(e.original.cakupan))})},minWidth:160}])}var H=function(e,a,t){return t?function(e,a){return[{expander:!0,Expander:function(e){var a=e.isExpanded;return c.a.createElement(g.d,{icon:a?"chevronDown":"chevronRight"})},width:60},{Header:function(){return c.a.createElement("div",{className:"th-col"},c.a.createElement(g.j,null,"TPS"))},accessor:"name",Cell:function(e){return c.a.createElement("div",{className:"tps-name"},c.a.createElement(g.h,{size:"small"},"TPS ".concat(e.value)),c.a.createElement(g.f,null,"DPT ".concat(e.original.dpt)))}}].concat("pilpres"===e?[{Header:function(){return c.a.createElement("div",{className:"th-col numeric"},c.a.createElement(g.j,null,"01"),c.a.createElement(K,{percentage:a.pas1Percentage,caption:!!a.pas1&&w(a.pas1),winner:a.pas1>a.pas2}))},accessor:"pas1Percentage",Cell:function(e){return c.a.createElement(K,{percentage:e.value,caption:!!e.original.pas1&&w(e.original.pas1),winner:e.original.pas1>e.original.pas2})}},{Header:function(){return c.a.createElement("div",{className:"th-col numeric"},c.a.createElement(g.j,null,"02"),c.a.createElement(K,{percentage:a.pas2Percentage,caption:!!a.pas2&&w(a.pas2),winner:a.pas2>a.pas1}))},accessor:"pas2Percentage",Cell:function(e){return c.a.createElement(K,{percentage:e.value,caption:!!e.original.pas2&&w(e.original.pas2),winner:e.original.pas2>e.original.pas1})}}]:[])}(e,a):"pilpres"===e?function(e){var a=P()({"th-col":!0}),t=P()({"th-col":!0,numeric:!0}),r=y.map(function(a){var r=Object(n.a)(a,2),l=r[0],o=r[1];return{Header:function(){return c.a.createElement(g.v,{content:"Total suara pasangan ".concat(o)},c.a.createElement("div",{className:t},c.a.createElement(g.j,null,o),c.a.createElement(K,{percentage:e["".concat(l,"Percentage")],caption:!!e[l]&&w(e[l]),winner:e["".concat(l,"Win")]})))},Footer:function(){return c.a.createElement(g.v,{content:"Total suara pasangan ".concat(o)},c.a.createElement("div",{className:t},c.a.createElement(g.j,null,o),c.a.createElement(K,{percentage:e["".concat(l,"Percentage")],caption:!!e[l]&&w(e[l]),winner:e["".concat(l,"Win")]})))},accessor:"pas1Percentage",Cell:function(e){return c.a.createElement(K,{percentage:e.value,caption:!!e.original[l]&&w(e.original[l]),winner:e.original["".concat(l,"Win")]})}}});return[{Header:function(){return c.a.createElement("div",{className:a},c.a.createElement(g.j,null,"Wilayah"))},Footer:function(){return c.a.createElement("div",{className:a},c.a.createElement(g.j,null,"Wilayah"))},accessor:"name",Cell:function(e){return c.a.createElement("div",null,c.a.createElement(g.l,{url:e.original.url},e.value))}}].concat(Object(h.a)(r),[{Header:function(){return c.a.createElement(g.v,{content:"Estimasi jumlah TPS yang sudah memiliki foto dan sudah diproses datanya"},c.a.createElement("div",{className:t},c.a.createElement(g.j,null,"Terproses"),c.a.createElement(K,{percentage:e.tpsTerprosesPercentage,caption:"".concat(w(e.tpsTerproses)," / ").concat(w(e.totalKpu)),progress:e.tpsTerprosesPercentage})))},Footer:function(){return c.a.createElement(g.v,{content:"Estimasi jumlah TPS yang sudah memiliki foto dan sudah diproses datanya"},c.a.createElement("div",{className:t},c.a.createElement(g.j,null,"Terproses"),c.a.createElement(K,{percentage:e.tpsTerprosesPercentage,caption:"".concat(w(e.tpsTerproses)," / ").concat(w(e.totalKpu)),progress:e.tpsTerprosesPercentage})))},accessor:"tpsTerprosesPercentage",Cell:function(e){return c.a.createElement(K,{percentage:e.value,caption:"".concat(w(e.original.tpsTerproses)," / ").concat(w(e.original.totalKpu)),progress:e.value})}}])}(a):C(a)},W=t(44),A=Object.assign.apply(Object,[{pas1:"Jokowi-Amin",pas2:"Prabowo-Sandi",sah:"Sah",pSah:"Sah",tSah:"Tidak Sah",pTSah:"Tidak Sah",jum:"Pengguna Hak Pilih"}].concat(Object(h.a)(j.map(function(e){var a=Object(n.a)(e,2),t=a[0],r=a[1];return Object(W.a)({},t,r)}))));function D(e){var a=e.keys,t=e.data,n=a.filter(function(e){return"undefined"!==typeof t[e]});return c.a.createElement("table",{className:"tps-detail-table"},c.a.createElement("tbody",null,n.map(function(e){return c.a.createElement("tr",{key:e},c.a.createElement("td",null,c.a.createElement("strong",null,A[e])),c.a.createElement("td",{className:"numeric"},t[e]))})))}function I(e){var a=e.dataType,t=e.data,n="pilpres"===a?[["pas1","pas2"],["sah","tSah","jum"]]:[["pkb","ger","pdi","gol"],["nas","gar","ber","sej"],["per","ppp","psi","pan"],["han","dem","pa","ps"],["pda","pna","pbb","pkp"]];return c.a.createElement("ul",{className:"tps-cards"},n.map(function(e,a){return c.a.createElement("li",{key:"tps-count-summary-".concat(a),className:"tps-card"},c.a.createElement(D,{keys:e,data:t}))}))}var F=function(e){var a=1===e.type?"undefined"!==typeof e.jum?["jum"]:["pas1","pas2","sah","tSah"]:"undefined"!==typeof e.pSah&&"undefined"!==e.pTSah?["pSah","pTSah"]:j.map(function(e){return Object(n.a)(e,1)[0]});return c.a.createElement(D,{keys:a,data:e})};function z(e){var a=e.photos;return c.a.createElement("ul",{className:"tps-cards"},a.length?a.map(function(e){return c.a.createElement("li",{key:e.url,className:"tps-card"},c.a.createElement(g.l,{url:"".concat(e.url,"=s1280"),external:!0},c.a.createElement(g.u,{source:"".concat(e.url,"=s120"),size:"large"})),F(e))}):c.a.createElement(g.f,null,"Belum tersedia"))}function J(e){var a=e.row,t=a.original,n=t.id,r=t.locationId,l=t.locationName,o=t.parentNames,i=t.photos,s=t.dataType,p=function(e,a,t,n,r){var c="".concat(t,":").concat(e);return"https://docs.google.com/forms/d/e/1FAIpQLSdeoAqXjE-gd_YpsvpzeD1Cr21hWgwKM8MHS8CYXNajD6iKGA/viewform?usp=pp_url"+"&entry.1587204645=".concat(c)+"&entry.446975413=".concat(a)+"&entry.828908754=".concat(t)+"&entry.1325772197=".concat(n)+"&entry.789113286=".concat(r)}(r,n,s,o[o.length-1]||"",l),u=function(e,a){return"https://upload.kawalpemilu.org/t/".concat(e,"/").concat(a,"?utm_source=wwwkp")}(r,n);return c.a.createElement(g.g,null,c.a.createElement(g.g.Section,null,c.a.createElement(g.e,{segmented:!0},c.a.createElement(g.d,{icon:"alert",url:p,external:!0},"Lapor kesalahan"),c.a.createElement(g.d,{icon:"profile",url:u,external:!0},"Moderasi"))),c.a.createElement(g.g.Section,null,c.a.createElement(g.s,null,"Hasil Perhitungan TPS ".concat(a.original.name)),c.a.createElement(I,{dataType:s,data:a.original})),c.a.createElement(g.g.Section,null,c.a.createElement(g.s,null,"Foto TPS ".concat(a.original.name)),c.a.createElement(z,{photos:i[s]})))}t(219);var x=function(e){function a(){return Object(i.a)(this,a),Object(p.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e,a=this.props,t=a.dataType,r=a.apiResponse,l=a.loading,o=r?r.name:"",i=l?Object(h.a)(Array(20).keys()).map(function(){return{}}):S(t,r),s=function(e){var a={pas1:0,pas1Win:!1,pas1Percentage:0,pas2:0,pas2Win:!1,pas2Percentage:0,tpsTerproses:0,tpsTerprosesPercentage:0,totalKpu:0,sah:0,tSah:0,cakupan:0,cakupanPercentage:0,pending:0,pendingPercentage:0,error:0,errorPercentage:0};return j.forEach(function(e){var t=Object(n.a)(e,1)[0];a[t]=0}),e?(e.forEach(function(e){a.pas1+=e.pas1,a.pas2+=e.pas2,a.totalKpu+=e.totalKpu,a.tpsTerproses+=e.tpsTerproses,a.sah+=e.sah,a.tSah+=e.tSah,a.cakupan+=e.cakupan,a.pending+=e.pending,a.error+=e.error,j.forEach(function(t){var r=Object(n.a)(t,1)[0];a[r]+=e[r]})}),a.pas1Win=a.pas1>a.pas2,a.pas2Win=a.pas2>a.pas1,a.pas1>0&&(a.pas1Percentage=a.pas1/(a.pas1+a.pas2)*100),a.pas2>0&&(a.pas2Percentage=a.pas2/(a.pas1+a.pas2)*100),a.totalKpu>0&&(a.tpsTerprosesPercentage=a.tpsTerproses/a.totalKpu*100,a.cakupanPercentage=a.cakupan/a.totalKpu*100),a.cakupan>0&&(a.pendingPercentage=a.pending/a.cakupan*100,a.errorPercentage=a.error/a.cakupan*100),a):a}(i),p=T(r),u=l?(e=4,Object(h.a)(Array(e).keys()).map(function(){return{Header:function(){return c.a.createElement(g.p,{lines:1})},Cell:function(){return c.a.createElement(g.p,{lines:1})}}})):H(t,s,p);return c.a.createElement(g.g,null,c.a.createElement(g.g.Section,null,c.a.createElement(f,{dataType:t,parents:N(t,r),loading:l,name:o})),c.a.createElement(E.a,{data:i,columns:u,className:"-striped -highlight",showPagination:!1,pageSize:i.length,style:{maxHeight:"1600px"},SubComponent:p&&!l?function(e){return c.a.createElement(J,{row:e})}:null}))}}]),a}(r.Component),B=function(e){return c.a.createElement(g.b,null,c.a.createElement(g.m,null,c.a.createElement(g.k,null,c.a.createElement(g.k.Section,null,c.a.createElement(g.g,null,e.children)))))},L=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(p.a)(this,Object(u.a)(a).call(this,e))).state={dataType:t.props.dataType||"pilpres",id:t.props.id||0,apiResponse:null,loading:!0,error:!1},t.onHashChange=t.onHashChange.bind(Object(m.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"onHashChange",value:function(){var e=this.props.hashToState(),a=e.dataType,t=e.id;this.setState({dataType:a,id:t}),this.fetchData()}},{key:"componentDidMount",value:function(){window.addEventListener("hashchange",this.onHashChange,!1),this.fetchData()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("hashchange",this.onHashChange,!1)}},{key:"fetchData",value:function(){var e=this;this.setState({loading:!0}),fetch("https://kawal-c1.appspot.com/api/c/"+this.state.id+"?=".concat((new Date).getTime())).then(function(e){return e.json()}).then(function(a){return e.setState({apiResponse:a,loading:!1})}).catch(function(a){return e.setState({error:a,loading:!1})})}},{key:"render",value:function(){var e=this.state,a=e.dataType,t=e.id,n=e.loading,r=e.apiResponse;return c.a.createElement(B,null,c.a.createElement(g.e,{fullWidth:!0,segmented:!0},c.a.createElement(g.d,{fullWidth:!0,size:"large",disabled:"pilpres"===a,url:"#pilpres:".concat(t)},"Presiden"),c.a.createElement(g.d,{fullWidth:!0,size:"large",disabled:"pileg"===a,url:"#pileg:".concat(t)},"DPR")),c.a.createElement(x,{loading:n,apiResponse:r,dataType:a}))}}]),a}(r.Component);t(220);function M(){var e=(window.location.hash.length>0?window.location.hash.substring(1):"").split(":"),a=Object(n.a)(e,2),t=a[0],r=a[1];return"pilpres"!==t&&"pileg"!==t&&(t="pilpres"),r=parseInt(r,10),isNaN(r)&&(r=0),{dataType:t,id:r}}var R=M(),U=R.dataType,q=R.id;window.history.replaceState({},document.title,"".concat(window.location.pathname,"#").concat(U,":").concat(q)),o.a.render(c.a.createElement(L,{hashToState:M,dataType:U,id:q}),document.getElementById("root"))},94:function(e,a,t){e.exports=t(221)}},[[94,1,2]]]);
//# sourceMappingURL=main.d633b7da.chunk.js.map