(this.webpackJsonpnumberlist=this.webpackJsonpnumberlist||[]).push([[0],{76:function(e,t,n){e.exports=n(86)},81:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),l=n.n(r),o=(n(81),n(133)),u=n(132),i=n(16),s=n(116),m=n(138),d=n(139),f=n(134),b=n(127),E=n(130),h=n(126),O=n(131),j=n(122),v=n(137),g=n(66),k=n.n(g),p=n(67),C=n.n(p),y=n(65),S=n.n(y),N=n(128),w=n(129),x=n(119),I=n(121),T=n(123),W=n(136),A=n(64),B=n.n(A),J=Object(s.a)({listItem:{"&:hover + $closeIcon":{display:"block"}},closeIcon:{display:"none","&:hover":{display:"block"}}}),M=function(e){var t=e.item,n=e.checkEvent,a=e.closeEvent,r=e.isChecked,l=J();return c.a.createElement(x.a,{key:t,divider:!0,className:l.listItem},c.a.createElement(I.a,null,c.a.createElement(W.a,{checked:r,onChange:function(e){n(e.target.checked,t)}})),"Number ",t,c.a.createElement(T.a,{className:l.closeIcon},c.a.createElement(j.a,{onClick:function(){a(t)}},c.a.createElement(B.a,null))))},V=Object(s.a)({list:{width:"100%",maxWidth:350,marginTop:100,maxHeight:400,margin:"auto",overflow:"auto",background:"inherit"},subheader:{background:"primary"},listItem:{background:"inherit"}}),$=function(e){var t=e.onClose,n=e.errorState,r=e.errorText,l=e.addEvent,o=e.dialogOpen,u=Object(a.useState)(""),s=Object(i.a)(u,2),E=s[0],h=s[1],O=function(){t()};return c.a.createElement(m.a,{open:o,onClose:O},c.a.createElement(d.a,null,"Add a number"),c.a.createElement(f.a,{label:"0-9999",value:E,error:n,helperText:r,onChange:function(e){return h(""===e.target.value||isNaN(e.target.value)?""===e.target.value?"":E:parseInt(e.target.value))}}),c.a.createElement("div",null,c.a.createElement(b.a,{onClick:function(){h(""),O()}},"Cancel"),c.a.createElement(b.a,{onClick:function(){l(E)}},"Confirm")))},H=function(){var e=V,t=Object(a.useState)((function(){return Object(N.a)((function(e){return!(e>100)&&[e,e+1]}),0)})),n=Object(i.a)(t,2),r=n[0],l=n[1],o=Object(a.useState)(!0),u=Object(i.a)(o,2),s=u[0],m=u[1],d=Object(a.useState)([]),f=Object(i.a)(d,2),b=f[0],g=f[1],p=Object(a.useState)(!1),y=Object(i.a)(p,2),x=y[0],I=y[1],T=Object(a.useState)(""),W=Object(i.a)(T,2),A=W[0],B=W[1],J=Object(a.useState)(!1),H=Object(i.a)(J,2),q=H[0],z=H[1],D=Object(a.useState)(!1),F=Object(i.a)(D,2),G=F[0],K=F[1],L=Object(a.useState)([]),P=Object(i.a)(L,2),Q=P[0],R=P[1],U=Object(a.useState)(r.length),X=Object(i.a)(U,2),Y=X[0],Z=X[1],_=function(e,t){g(e?b.concat([t]):b.filter((function(e){return e!==t})))},ee=function(e){l(r.filter((function(t){return t!==e}))),g(b.filter((function(t){return t!==e}))),Z(Y-1)};return c.a.createElement("div",null,c.a.createElement(E.a,{maxWidth:"xs",fixed:!0,className:e.list},c.a.createElement(h.a,null,c.a.createElement(O.a,{className:e.subheader},"My Numbers (",Y,")",c.a.createElement(j.a,{onClick:function(){l(Object(w.a)(s?function(e,t){return-1*(e-t)}:function(e,t){return e-t},r)),m(!s)}},c.a.createElement(S.a,null)),c.a.createElement(j.a,{onClick:function(){l(r.filter((function(e){return!b.includes(e)}))),Z(Y-b.length),g([])}},c.a.createElement(k.a,null)),c.a.createElement(j.a,{onClick:function(){return z(!0)}},c.a.createElement(C.a,null))),r.map((function(t){return c.a.createElement(M,{className:e.listItem,key:t,item:t,checkEvent:_,closeEvent:ee,isChecked:b.includes(t)})})))),c.a.createElement($,{onClose:function(){z(!1),B(""),I(!1)},errorState:x,errorText:A,addEvent:function(e){""===e||isNaN(e)||e>9999||e<0?(B("Value must be 0-9999"),I(!0)):r.includes(e)?(B("Value already in list"),I(!0)):(B(""),I(!1),function(e){l(Object(w.a)(s?function(e,t){return e-t}:function(e,t){return-1*(e-t)},r.concat([e]))),Z(Y+1),R("Number ".concat(e).concat(" successfully added")),K(!0)}(e),z(!1))},dialogOpen:q}),c.a.createElement(v.a,{open:G,message:Q,onClose:function(){return K(!1)}}))},q=n(48),z=n(68),D=Object(z.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:q.a.A400},background:{default:"#fff"}}}),F=function(){return c.a.createElement(u.a,{theme:D},c.a.createElement(o.a,null),c.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.345d2108.chunk.js.map