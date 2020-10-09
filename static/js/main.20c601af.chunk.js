(this.webpackJsonpdepreciator=this.webpackJsonpdepreciator||[]).push([[0],{124:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(9),i=t.n(l),o=(t(76),t(12)),c=t(14),u=t(63),s=t(170),m=t(179),d=t(180),p=t(181),g=t(66),b=t(62),f=t.n(b),h=t(171),E=t(183),v=t(184),O=t(172),j=t(185),C=t(169),w=t(59),y=t.n(w),k=t(64),x=t(182);var M=function(e){var a=e.errorMessage,t=e.onChange,l=e.label,i=e.extraCheck,c=void 0===i?function(){return!0}:i,u=Object(k.a)(e,["errorMessage","onChange","label","extraCheck"]),s=Object(r.useState)(""),m=Object(o.a)(s,2),d=m[0],p=m[1],g=Object(r.useState)(!1),b=Object(o.a)(g,2),f=b[0],h=b[1];return n.a.createElement(x.a,Object.assign({},u,{onChange:function(e){var a=e.target.value,r=/^[+-]?(\d*\.)?\d*$/.test(a),n=parseFloat(a);r&&(""===a||c(n))?(h(!1),t(isNaN(n)?null:n)):h(!0),p(a)},value:d,error:f,label:f?a:l}))},N=t(61),A=t.n(N);var P=Object(s.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"1fr 1fr",gridRowGap:e.spacing(4),padding:"".concat(e.spacing(4),"px max(calc(50% - 190px), ").concat(e.spacing(4),"px)"),backgroundColor:e.palette.background.default,"& .MuiTextField-root":{marginTop:e.spacing(1)}},firstTwoInputs:{gridColumn:"1 / span 2","& .MuiTextField-root:first-child":{marginTop:0}},inputMode:{gridColumn:"1 / span 2"},formControlLabelPercent:{display:"grid",gridTemplateColumns:"auto 1fr",marginRight:0},formControlLabelYears:{display:"grid",gridTemplateColumns:"auto 1fr",marginRight:0}}}));var T=n.a.memo((function(e){var a=e.setOutputRows,t=P(),l=Object(r.useState)("residual"),i=Object(o.a)(l,2),c=i[0],u=i[1],s=Object(r.useState)("linear"),m=Object(o.a)(s,2),d=m[0],p=m[1],b=Object(r.useState)("direct"),f=Object(o.a)(b,2),w=f[0],k=f[1],x=Object(r.useState)(null),N=Object(o.a)(x,2),T=N[0],R=N[1],S=Object(r.useState)(null),F=Object(o.a)(S,2),V=F[0],B=F[1],I=Object(r.useState)(null),H=Object(o.a)(I,2),W=H[0],J=H[1],L=Object(r.useState)(null),Y=Object(o.a)(L,2),Z=Y[0],q=Y[1];return Object(r.useEffect)((function(){if("residual"!==c||null!==W){var e="percent"===c?Z:"linear"===d?(T-W)/V/T:1-Math.pow(W/T,1/V);a(function(e){var a=e.depreciationMode,t=e.depreciationPosting,r=e.acquisitionValue,n=e.years,l=e.percent,i=[];if(Object.values(e).some((function(e){return null===e})))return i;for(var o=1;o<=n;o++){var c="linear"===a?l*r:l*r*Math.pow(1-l,o-1),u="linear"===a?r-c*o:r*Math.pow(1-l,o),s=A()(i,"".concat(i.length-1,".residualValue"),r);if(0===s)break;u<0&&(c=s,u=0),i.push("direct"===t?{year:o,depreciationAmount:c,residualValue:u}:{year:o,depreciationAmount:c,residualValue:r,wbValue:r-u})}return i}({depreciationMode:d,depreciationPosting:w,acquisitionValue:T,years:V,percent:e}))}else a([])})),n.a.createElement(j.a,{className:t.root},n.a.createElement("div",{className:t.firstTwoInputs},n.a.createElement(M,{className:t.acquisitionValue,errorMessage:"Bitte eine Zahl gr\xf6sser als der Restwert eingeben",onChange:function(e){return R(e)},extraCheck:function(e){return null===W||e>W},label:"Anschaffungswert",variant:"filled",fullWidth:!0,InputProps:{endAdornment:n.a.createElement(h.a,{position:"end"},"CHF")}}),n.a.createElement(M,{className:t.inputYears,errorMessage:"Bitte eine ganze Zahl eingeben im Bereich 1-99",onChange:function(e){return B(e)},extraCheck:function(e){return y()(e,1,100)&&Number.isInteger(e)},label:"Nutzungsdauer",variant:"filled",fullWidth:!0,InputProps:{endAdornment:n.a.createElement(h.a,{position:"end"},"Jahre")}})),n.a.createElement(v.a,{className:t.inputMode,value:c,onChange:function(e){return u(e.target.value)}},n.a.createElement(C.a,{focused:!1},"Angabe in"),n.a.createElement(O.a,{className:t.formControlLabelYears,value:"residual",control:n.a.createElement(E.a,{color:"primary"}),label:n.a.createElement(M,{errorMessage:"Bitte eine Zahl kleiner als der Anschaffungswert eingeben",onChange:function(e){return J(e)},extraCheck:function(e){return null===T||e<T},label:"Restwert",variant:"filled",fullWidth:!0,disabled:"percent"===c,InputProps:{endAdornment:n.a.createElement(h.a,{position:"end"},"CHF")}})}),n.a.createElement(O.a,{className:t.formControlLabelPercent,value:"percent",control:n.a.createElement(E.a,{color:"primary"}),label:n.a.createElement(M,{errorMessage:"Bitte eine Zahl eingeben",onChange:function(e){return q(e/100)},label:"Abschreibungen in Prozent",variant:"filled",fullWidth:!0,disabled:"residual"===c,InputProps:{endAdornment:n.a.createElement(h.a,{position:"end"},"%")}})})),n.a.createElement(v.a,{value:d,onChange:function(e){return p(e.target.value)}},n.a.createElement(C.a,{focused:!1},"Abschreibungsart"),n.a.createElement(O.a,{value:"linear",control:n.a.createElement(E.a,{color:"primary"}),label:n.a.createElement(g.a,{color:"textPrimary"},"linear")}),n.a.createElement(O.a,{value:"degressive",control:n.a.createElement(E.a,{color:"primary"}),label:n.a.createElement(g.a,{color:"textPrimary"},"degressiv")})),n.a.createElement(v.a,{value:w,onChange:function(e){return k(e.target.value)}},n.a.createElement(C.a,{focused:!1},"Buchungsart"),n.a.createElement(O.a,{value:"direct",control:n.a.createElement(E.a,{color:"primary"}),label:n.a.createElement(g.a,{color:"textPrimary"},"direkt")}),n.a.createElement(O.a,{value:"indirect",control:n.a.createElement(E.a,{color:"primary"}),label:n.a.createElement(g.a,{color:"textPrimary"},"indirekt")})))})),R=t(174),S=t(178),F=t(177),V=t(173),B=t(175),I=t(176),H=t(126);function W(e,a){var t=parseInt(e.substring(1),16),r=Math.round(2.55*a),n=(t>>16)+r,l=(255&t)+r,i=(t>>8&255)+r;return"#"+(16777216+65536*(n<255?n<1?0:n:255)+256*(i<255?i<1?0:i:255)+(l<255?l<1?0:l:255)).toString(16).slice(1)}var J=Object(s.a)((function(e){var a;return{root:(a={backgroundColor:W(e.palette.background.default,-3)},Object(c.a)(a,e.breakpoints.up("md"),{overflowY:"auto"}),Object(c.a)(a,"padding",e.spacing(4)),Object(c.a)(a,e.breakpoints.down("xs"),{padding:e.spacing(1)}),a)}}));var L=function(e){var a=e.outputRows,t=J();return n.a.createElement("div",{className:t.root},n.a.createElement(V.a,{component:H.a},n.a.createElement(R.a,{className:t.table,"aria-label":"simple table"},n.a.createElement(B.a,null,n.a.createElement(I.a,null,n.a.createElement(F.a,null,"Jahr"),n.a.createElement(F.a,{align:"right"},"Abschreibungs\xadbetrag"),n.a.createElement(F.a,{align:"right"},"Restwert Anlagekonto"),a[0]&&a[0].wbValue&&n.a.createElement(F.a,{align:"right"},"Betrag WB-Konto"))),n.a.createElement(S.a,null,a.map((function(e){return n.a.createElement(I.a,{key:e.year},n.a.createElement(F.a,{component:"th",scope:"row"},e.year),n.a.createElement(F.a,{align:"right"},e.depreciationAmount.toFixed(2)," CHF"),n.a.createElement(F.a,{align:"right"},e.residualValue.toFixed(2)," CHF"),e.wbValue&&n.a.createElement(F.a,{align:"right"},e.wbValue.toFixed(2)," CHF"))}))))))},Y=Object(u.a)({palette:{primary:{main:f.a[800]},type:"dark"}}),Z=Object(s.a)((function(e){var a;return{root:(a={},Object(c.a)(a,e.breakpoints.up("md"),{height:"100vh"}),Object(c.a)(a,"display","grid"),Object(c.a)(a,"gridTemplateColumns","1fr 1fr"),Object(c.a)(a,"gridTemplateRows","auto 1fr"),Object(c.a)(a,e.breakpoints.down("sm"),{minHeight:"100vh",gridTemplateColumns:"1fr",gridTemplateRows:"auto auto 1fr"}),a),header:Object(c.a)({position:"static",gridColumn:"1 / span 2"},e.breakpoints.down("sm"),{gridColumn:"1"}),title:{margin:"".concat(e.spacing(2),"px auto")}}}));var q=function(){var e=Z(),a=Object(r.useState)([]),t=Object(o.a)(a,2),l=t[0],i=t[1];return n.a.createElement(m.a,{theme:Y},n.a.createElement("div",{className:e.root},n.a.createElement(d.a,{className:e.header},n.a.createElement(p.a,null,n.a.createElement(g.a,{variant:"h5",className:e.title},"Abschreibungsrechner"))),n.a.createElement(T,{setOutputRows:i}),n.a.createElement(L,{outputRows:l})))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root"))},71:function(e,a,t){e.exports=t(124)},76:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.20c601af.chunk.js.map