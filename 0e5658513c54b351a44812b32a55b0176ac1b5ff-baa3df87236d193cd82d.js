"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[96],{2696:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var a=r(5785),s=r(7294),n=(r(7266),r(559),r(4184)),l=r.n(n),o=r(6792),c=r(4680),d=r(5893),i=e=>s.forwardRef(((t,r)=>(0,d.jsx)("div",{...t,ref:r,className:l()(t.className,e)})));const m=s.forwardRef((({bsPrefix:e,className:t,variant:r,as:a="img",...s},n)=>{const c=(0,o.vE)(e,"card-img");return(0,d.jsx)(a,{ref:n,className:l()(r?`${c}-${r}`:c,t),...s})}));m.displayName="CardImg";var u=m,f=r(9059);const y=s.forwardRef((({bsPrefix:e,className:t,as:r="div",...a},n)=>{const c=(0,o.vE)(e,"card-header"),i=(0,s.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,d.jsx)(f.Z.Provider,{value:i,children:(0,d.jsx)(r,{ref:n,...a,className:l()(t,c)})})}));y.displayName="CardHeader";var x=y;const b=i("h5"),g=i("h6"),p=(0,c.Z)("card-body"),v=(0,c.Z)("card-title",{Component:b}),E=(0,c.Z)("card-subtitle",{Component:g}),h=(0,c.Z)("card-link",{Component:"a"}),C=(0,c.Z)("card-text",{Component:"p"}),N=(0,c.Z)("card-footer"),w=(0,c.Z)("card-img-overlay"),S=s.forwardRef((({bsPrefix:e,className:t,bg:r,text:a,border:s,body:n,children:c,as:i="div",...m},u)=>{const f=(0,o.vE)(e,"card");return(0,d.jsx)(i,{ref:u,...m,className:l()(t,f,r&&`bg-${r}`,a&&`text-${a}`,s&&`border-${s}`),children:n?(0,d.jsx)(p,{children:c}):c})}));S.displayName="Card",S.defaultProps={body:!1};var $=Object.assign(S,{Img:u,Title:v,Subtitle:E,Body:p,Link:h,Text:C,Header:x,Footer:N,ImgOverlay:w}),j=r(5005);const k=s.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:a,...s},n)=>{const c=(0,o.vE)(e,"container"),i="string"==typeof t?`-${t}`:"-fluid";return(0,d.jsx)(r,{ref:n,...s,className:l()(a,t?`${c}${i}`:c)})}));k.displayName="Container",k.defaultProps={fluid:!1};var O=k;var P=s.forwardRef((({bsPrefix:e,className:t,striped:r,bordered:a,borderless:s,hover:n,size:c,variant:i,responsive:m,...u},f)=>{const y=(0,o.vE)(e,"table"),x=l()(t,y,i&&`${y}-${i}`,c&&`${y}-${c}`,r&&`${y}-${"string"==typeof r?`striped-${r}`:"striped"}`,a&&`${y}-bordered`,s&&`${y}-borderless`,n&&`${y}-hover`),b=(0,d.jsx)("table",{...u,className:x,ref:f});if(m){let e=`${y}-responsive`;return"string"==typeof m&&(e=`${e}-${m}`),(0,d.jsx)("div",{className:e,children:b})}return b})),A=(r(7851),r(3750));const R={textCenter:{textAlign:"center"},textRight:{textAlign:"right"}};var Z=function(e){let{data:t,setDataItems:r}=e;const{0:n,1:l}=(0,s.useState)(),{0:o,1:c}=(0,s.useState)(0),{0:d,1:i}=(0,s.useState)(0),{0:m,1:u}=(0,s.useState)(0),{0:f,1:y}=(0,s.useState)(0),{0:x,1:b}=(0,s.useState)(0),{0:g,1:p}=(0,s.useState)(0),{0:v,1:E}=(0,s.useState)(0),{0:h,1:C}=(0,s.useState)(0),{0:N,1:w}=(0,s.useState)(0),{0:S,1:k}=(0,s.useState)(0),{0:Z,1:B}=(0,s.useState)(0),{0:F,1:z}=(0,s.useState)(0),{0:I,1:_}=(0,s.useState)(0);(0,s.useEffect)((()=>{let e=0,r=0,a=0,n=0,o=0,d=0,m=0,f=0,x=0,g=0,v=0,h=0,N=0,S=0,$=0,j=0,O=0,P=0,Z=0,F=0,I=0,W=0,D=0,G=0,L=0,M=0,q=0,J=0,K=0,Q=0,U=0,V=0,X=0,Y=0,ee=0,te=0,re=0,ae=0,se=0,ne=0,le=0;const oe=t.map(((t,l)=>("1"==t.sem&&"2019"==t.year?(d+=3*H(t.grade),a+=3*H(t.grade),r+=3,P+=3,n+=d/r,Q=d/P):"2"==t.sem&&"2019"==t.year?(m+=3*H(t.grade),r+=3,Z+=3,U=m/Z):"3"==t.sem&&"2019"==t.year?(f+=3*H(t.grade),r+=3,F+=3,V=f/F):"1"==t.sem&&"2020"==t.year?(x+=3*H(t.grade),r+=3,I+=3,X=x/I):"2"==t.sem&&"2020"==t.year?(g+=3*H(t.grade),r+=3,W+=3,Y=g/W):"3"==t.sem&&"2020"==t.year?(v+=3*H(t.grade),r+=3,D+=3,ee=v/D):"1"==t.sem&&"2021"==t.year?(h+=3*H(t.grade),r+=3,G+=3,te=h/G):"2"==t.sem&&"2021"==t.year?(N+=3*H(t.grade),r+=3,L+=3,re=a/r):"3"==t.sem&&"2021"==t.year?(S+=3*H(t.grade),r+=3,M+=3,ae=S/M):"1"==t.sem&&"2022"==t.year?($+=3*H(t.grade),r+=3,q+=3,se=$/q):"2"==t.sem&&"2022"==t.year?(j+=3*H(t.grade),r+=3,J+=3,ne=j/J):"3"==t.sem&&"2022"==t.year&&(O+=3*H(t.grade),r+=3,K+=3,le=O/K),e=(d+x+h+$+m+g+N+j+f+v+S+O)/r,o=e,s.createElement("tr",{key:l},s.createElement("td",{style:R.textCenter},t.sem,"/",t.year),s.createElement("td",{style:R.textCenter},t.course),s.createElement("td",{style:R.textCenter},t.grade),s.createElement("td",{style:{textAlign:"center"}},3),s.createElement("td",{style:{textAlign:"center"}},s.createElement(A.Ovj,{style:{color:"#bb0a1e"},onClick:()=>T(l)}))))));l(oe),i(Q),u(U),y(V),b(X),p(Y),E(ee),C(te),w(re),k(ae),B(se),z(ne),_(le),c(o.toFixed(2))}),[undefined]);const H=e=>("A"==e&&(e=4),"A-"===e&&(e=3.75),"B+"===e&&(e=3.25),"B"===e&&(e=3),"B-"===e&&(e=2.75),"C+"===e&&(e=2.25),"C"===e&&(e=2),"C-"===e&&(e=1.75),"D"===e&&(e=1),"F"===e&&(e=0),"W"===e&&(e=0),e),T=e=>{t.splice(e,1),r((0,a.Z)(t))},W=(e,t)=>{if(0!=e)return s.createElement($,{style:{width:"14rem",backgroundColor:"#f5f5f5",borderRadius:"10px",boxShadow:"1px 1px 5px #9E9E9E",marginBottom:"10px"}},s.createElement($.Body,null,s.createElement($.Title,{style:{color:"#bb0a1e",fontSize:"16px"}},t),s.createElement($.Text,{style:{fontSize:"12px",fontWeight:"600"}},"GPA ",s.createElement(j.Z,{style:{backgroundColor:"#bb0a1e",border:"none",borderRadius:"50px"},variant:"primary"},e.toFixed(2)))))};return s.createElement(O,null,s.createElement("div",{className:"gpac-dis",style:{width:"50px",color:"#FFFF",backgroundColor:"#bb0a1e",textAlign:"center",float:"right",marginBottom:"10px",borderRadius:"30px"}},o),s.createElement(P,{class:"table table-borderless",style:{backgroundColor:"#f5f5f5",borderRadius:"10px",boxShadow:"1px 1px 5px #9E9E9E"}},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{style:{textAlign:"center",border:"0"}},"Semester"),s.createElement("th",{style:{textAlign:"center",border:"0"}},"Course"),s.createElement("th",{style:{textAlign:"center"}},"Grade"),s.createElement("th",{style:{textAlign:"center"}},"Credit"),s.createElement("th",{style:{textAlign:"center"}}))),s.createElement("tbody",{style:{border:"none"}},n)),s.createElement("div",null,W(d,"semester 1/2019"),W(m,"semester 2/2019"),W(f,"semester 3/2019"),W(x,"semester 1/2020"),W(g,"semester 2/2020"),W(v,"semester 3/2020"),W(h,"semester 1/2021"),W(N,"semester 2/2021"),W(S,"semester 3/2021"),W(Z,"semester 1/2022"),W(F,"semester 2/2022"),W(I,"semester 3/2022")))}},9059:function(e,t,r){const a=r(7294).createContext(null);a.displayName="CardHeaderContext",t.Z=a},4405:function(e,t,r){r.d(t,{w_:function(){return d}});var a=r(7294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(s),l=function(){return l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},l.apply(this,arguments)},o=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]])}return r};function c(e){return e&&e.map((function(e,t){return a.createElement(e.tag,l({key:t},e.attr),c(e.child))}))}function d(e){return function(t){return a.createElement(i,l({attr:l({},e.attr)},t),c(e.child))}}function i(e){var t=function(t){var r,s=e.attr,n=e.size,c=e.title,d=o(e,["attr","size","title"]),i=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,d,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==n?a.createElement(n.Consumer,null,(function(e){return t(e)})):t(s)}}}]);
//# sourceMappingURL=0e5658513c54b351a44812b32a55b0176ac1b5ff-baa3df87236d193cd82d.js.map