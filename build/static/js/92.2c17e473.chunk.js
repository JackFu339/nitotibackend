(this.webpackJsonpbankpro=this.webpackJsonpbankpro||[]).push([[92,131,133,134],{2074:function(e,t,n){"use strict";n.r(t);n(530);var a=n(532),r=(n(531),n(533)),l=n(110),c=n(0),i=n.n(c),s=n(183),o=(n(784),n(788)),m=n(44),u=n(36);function p(){var e=Object(m.a)(["\n  &.ant-progress-line {\n    .ant-progress-outer {\n      padding-right: calc(2em + 16px);\n      margin-right: calc(-2em - 16px);\n    }\n\n    .ant-progress-text {\n      text-align: ",";\n      margin: ",";\n    }\n  }\n"]);return p=function(){return e},e}var d=function(e){return Object(u.c)(e)(p(),(function(e){return"rtl"===e["data-rtl"]?"right":"left"}),(function(e){return"rtl"===e["data-rtl"]?"0 0.75em 0 0":"0 0 0 0.75em"}))},f=n(77),E=d(o.a),g=Object(f.a)(E),x=n(529),b=n(526),y=n(527),h=n(535),w=n(538),v=n(2100),j=n(1403);t.default=function(){var e=i.a.useState(0),t=Object(l.a)(e,2),n=t[0],c=t[1],o=w.b.rowStyle,m=w.b.colStyle,u=w.b.gutter,p={margin:"rtl"===f.b?"0 0 10px 10px":"0 10px 10px 0"};return i.a.createElement(b.default,null,i.a.createElement(x.default,null,i.a.createElement(h.a,{id:"forms.progressBar.header"})),i.a.createElement(a.a,{style:o,gutter:u,justify:"start"},i.a.createElement(r.a,{md:12,xs:24,style:m},i.a.createElement(y.default,{title:i.a.createElement(h.a,{id:"forms.progressBar.standardTitle"}),subtitle:i.a.createElement(h.a,{id:"forms.progressBar.standardSubTitle"})},i.a.createElement(g,{percent:30,style:p}),i.a.createElement(g,{percent:50,status:"active",style:p}),i.a.createElement(g,{percent:70,status:"exception",style:p}),i.a.createElement(g,{percent:100,style:p}),i.a.createElement(g,{percent:50,showInfo:!1,style:p}))),i.a.createElement(r.a,{md:12,xs:24,style:m},i.a.createElement(y.default,{title:i.a.createElement(h.a,{id:"forms.progressBar.circularTitle"}),subtitle:i.a.createElement(h.a,{id:"forms.progressBar.circularSubTitle"})},i.a.createElement(g,{type:"circle",percent:75,style:p}),i.a.createElement(g,{type:"circle",percent:70,status:"exception",style:p}),i.a.createElement(g,{type:"circle",percent:100,style:p})))),i.a.createElement(a.a,{style:o,gutter:u,justify:"start"},i.a.createElement(r.a,{md:8,xs:24,style:m},i.a.createElement(y.default,{title:i.a.createElement(h.a,{id:"forms.progressBar.miniTitle"}),subtitle:i.a.createElement(h.a,{id:"forms.progressBar.miniSubTitle"})},i.a.createElement(g,{percent:30,strokeWidth:5,style:p}),i.a.createElement(g,{percent:50,strokeWidth:5,status:"active",style:p}),i.a.createElement(g,{percent:70,strokeWidth:5,status:"exception",style:p}),i.a.createElement(g,{percent:100,strokeWidth:5,style:p}))),i.a.createElement(r.a,{md:8,xs:24,style:m},i.a.createElement(y.default,{title:i.a.createElement(h.a,{id:"forms.progressBar.miniCircularTitle"}),subtitle:i.a.createElement(h.a,{id:"forms.progressBar.miniCircularTitle"})},i.a.createElement(g,{type:"circle",percent:30,width:80,style:p}),i.a.createElement(g,{type:"circle",percent:70,width:80,status:"exception",style:p}),i.a.createElement(g,{type:"circle",percent:100,width:80,style:p}))),i.a.createElement(r.a,{md:8,xs:24,style:m},i.a.createElement(y.default,{title:i.a.createElement(h.a,{id:"forms.progressBar.dynamicCircularTitle"}),subtitle:i.a.createElement(h.a,{id:"forms.progressBar.dynamicCircularSubTitle"})},i.a.createElement(g,{type:"circle",percent:n,style:p}),i.a.createElement(s.a,null,i.a.createElement(s.b,{onClick:function(){var e=n-10;e<0&&(e=0),c(e)},icon:i.a.createElement(v.a,null)}),i.a.createElement(s.b,{onClick:function(){var e=n+10;e>100&&(e=100),c(e)},icon:i.a.createElement(j.a,null)}))))),i.a.createElement(a.a,{style:o,gutter:u,justify:"start"},i.a.createElement(r.a,{md:12,sm:12,xs:24,style:m},i.a.createElement(y.default,{title:i.a.createElement(h.a,{id:"forms.progressBar.customTextTitle"}),subtitle:i.a.createElement(h.a,{id:"forms.progressBar.customTextSubTitle"})},i.a.createElement(g,{type:"circle",percent:75,format:function(e){return"".concat(e," Days")},style:p}),i.a.createElement(g,{type:"circle",percent:100,format:function(){return"Done"},style:p}))),i.a.createElement(r.a,{md:12,sm:12,xs:24,style:m},i.a.createElement(y.default,{title:i.a.createElement(h.a,{id:"forms.progressBar.dashboardTitle"}),subtitle:i.a.createElement(h.a,{id:"forms.progressBar.dashboardSubTitle"})},i.a.createElement(g,{type:"dashboard",percent:75})))))}},526:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(44);function c(){var e=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return c=function(){return e},e}var i=n(36).c.div(c());t.default=function(e){return r.a.createElement(i,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},527:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(44),c=n(36),i=n(6);function s(){var e=Object(l.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return s=function(){return e},e}function o(){var e=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return o=function(){return e},e}var m=c.c.h3(o(),Object(i.palette)("text",0)),u=c.c.p(s(),Object(i.palette)("text",3)),p=function(e){return r.a.createElement("div",null,e.title?r.a.createElement(m,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?r.a.createElement(u,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")};function d(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return d=function(){return e},e}var f=c.c.div(d(),Object(i.palette)("border",0),"");t.default=function(e){return r.a.createElement(f,{className:"".concat(e.className?e.className:""," isoBoxWrapper"),style:e.style},r.a.createElement(p,{title:e.title,subtitle:e.subtitle}),e.children)}},529:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(44),c=n(36),i=n(6),s=n(77);function o(){var e=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return o=function(){return e},e}var m=c.c.h1(o(),Object(i.palette)("secondary",2),Object(i.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(i.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),u=Object(s.a)(m);t.default=function(e){return r.a.createElement(u,{className:"isoComponentTitle"},e.children)}},538:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r}));var a={blue:{deep:"rgb(0, 121, 191)",light:"lightblue",lighter:"#d9fcff",soft:"#E6FCFF"},black:"#4d4d4d",shadow:"rgba(0,0,0,0.2)",grey:{darker:"#C1C7D0",dark:"#E2E4E6",medium:"#DFE1E5",N30:"#EBECF0",light:"#F4F5F7"},green:"rgb(185, 244, 188)",white:"white",purple:"rebeccapurple",orange:"#FF991F"},r=8,l={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};t.b=l}}]);
//# sourceMappingURL=92.2c17e473.chunk.js.map