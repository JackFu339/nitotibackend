(this.webpackJsonpbankpro=this.webpackJsonpbankpro||[]).push([[14],{1001:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return u}));var a=t(2),r=t.n(a),o=t(34),i=t(18),c=new i.c.auth.GoogleAuthProvider;c.setCustomParameters({prompt:"select_account"});new i.c.auth.FacebookAuthProvider,new i.c.auth.GithubAuthProvider,new i.c.auth.TwitterAuthProvider;var l=function(){var e=Object(o.a)(r.a.mark((function e(n,t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.signInWithEmailAndPassword(n,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),s=function(){var e=Object(o.a)(r.a.mark((function e(n,t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.createUserWithEmailAndPassword(n,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),u=function(e){return i.a.sendPasswordResetEmail(e)};i.a},1058:function(e,n,t){"use strict";var a=t(2),r=t.n(a),o=t(34),i=t(27),c=t(1),l=t(110),s=t(0),u=t.n(s),p=t(183),d=t(113),f=t(610),b=t(692),m=t(1001);n.a=function(e){var n=u.a.useState({visible:!1,email:"demo@gmail.com",password:"demodemo",confirmLoading:!1}),t=Object(l.a)(n,2),a=t[0],s=t[1],h=function(e){var n=e.target,t=n.name,r=n.value;s(Object(c.a)(Object(c.a)({},a),{},Object(i.a)({},t,r)))},g=function(){var n=Object(o.a)(r.a.mark((function n(){var t,o,i,l,u;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=a.email,o=a.password,t&&o){n.next=4;break}return Object(b.b)("error","Please fill in email. and password"),n.abrupt("return");case 4:if(s(Object(c.a)(Object(c.a)({},a),{},{confirmLoading:!0})),!e.signup){n.next=17;break}return n.prev=6,n.next=9,Object(m.c)(t,o).then((function(e){i=e.user,console.log(i,"User")}));case 9:n.next=15;break;case 11:n.prev=11,n.t0=n.catch(6),l=n.t0.message,console.log(n.t0.message,"Error");case 15:n.next=26;break;case 17:return n.prev=17,n.next=20,Object(m.b)(t,o).then((function(e){i=e.user}));case 20:n.next=26;break;case 22:n.prev=22,n.t1=n.catch(17),l=n.t1.message,console.log(n.t1.message,"Error");case 26:if(!i){n.next=34;break}return n.next=29,i.getIdToken();case 29:u=n.sent,e.login(u),e.history.push("/dashboard"),n.next=36;break;case 34:Object(b.b)("error",l),s(Object(c.a)(Object(c.a)({},a),{},{confirmLoading:!1}));case 36:case"end":return n.stop()}}),n,null,[[6,11],[17,22]])})));return function(){return n.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(p.b,{type:"primary",onClick:function(){s(Object(c.a)(Object(c.a)({},a),{},{visible:!0}))},className:"btnFirebase"},e.signup?"Sign up with Firebase":"Sign in with Firebase"),u.a.createElement(f.a,{title:e.signup?"Sign up with Firebase":"Sign in with Firebase",visible:a.visible,confirmLoading:a.confirmLoading,onCancel:function(e){s(Object(c.a)(Object(c.a)({},a),{},{visible:!1}))},onOk:g,className:"isoFirebaseLoginModal",cancelText:"Cancel",okText:e.signup?"Sign Up":"Login"},u.a.createElement("form",null,u.a.createElement("div",{className:"isoInputWrapper"},u.a.createElement("label",null,"Email"),u.a.createElement(d.d,{name:"email",size:"large",placeholder:"Email",value:a.email,onChange:h})),u.a.createElement("div",{className:"isoInputWrapper",style:{marginBottom:10}},u.a.createElement("label",null,"Password"),u.a.createElement(d.d,{name:"password",type:"password",size:"large",placeholder:"Password",value:a.password,onChange:h})),u.a.createElement("span",{className:"isoResetPass",onClick:function(){var e=a.email;e?Object(m.a)(e).then((function(){return Object(b.b)("success","Password reset email sent to ".concat(e,"."))})).catch((function(e){return Object(b.b)("error","Email address not found.")})):Object(b.b)("error","Please fill in email.")}},"Reset Password"))))}},1615:function(e,n,t){e.exports=t.p+"static/media/sign.adf5846b.jpg"},2086:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return E}));var a=t(110),r=t(0),o=t.n(r),i=t(28),c=t(191),l=t(85),s=t(113),u=t(773),p=t(183),d=t(535),f=(t(1058),t(47)),b=t(81),m=(t(993),t(1001),t(44)),h=t(36),g=t(6),v=t(1615),x=t.n(v),O=t(77);function y(){var e=Object(m.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background: url(",") no-repeat center center;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: ",";\n    right: ",";\n  }\n\n  .isoLoginContentWrapper {\n    width: 500px;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 10;\n    position: relative;\n  }\n\n  .isoLoginContent {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 70px 50px;\n    position: relative;\n    background-color: #ffffff;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      padding: 70px 20px;\n    }\n\n    .isoLogoWrapper {\n      width: 100%;\n      display: flex;\n      margin-bottom: 50px;\n      justify-content: center;\n      flex-shrink: 0;\n\n      a {\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 1;\n        text-transform: uppercase;\n        color: ",";\n      }\n    }\n\n    .isoSignInForm {\n      width: 100%;\n      display: flex;\n      flex-shrink: 0;\n      flex-direction: column;\n\n      .isoInputWrapper {\n        margin-bottom: 15px;\n\n        &:last-of-type {\n          margin-bottom: 0;\n        }\n\n        input {\n          &::-webkit-input-placeholder {\n            color: ",";\n          }\n\n          &:-moz-placeholder {\n            color: ",";\n          }\n\n          &::-moz-placeholder {\n            color: ",";\n          }\n          &:-ms-input-placeholder {\n            color: ",";\n          }\n        }\n      }\n\n      .isoHelperText {\n        font-size: 12px;\n        font-weight: 400;\n        line-height: 1.2;\n        color: ",";\n        padding-left: ",";\n        padding-right: ",";\n        margin: 15px 0;\n        position: relative;\n        display: flex;\n        align-items: center;\n\n        &:before {\n          content: '*';\n          color: ",";\n          padding-right: 3px;\n          font-size: 14px;\n          line-height: 1;\n          position: absolute;\n          top: 2px;\n          left: ",";\n          right: ",";\n        }\n      }\n\n      .isoHelperWrapper {\n        margin-top: 35px;\n        flex-direction: column;\n      }\n\n      .isoOtherLogin {\n        padding-top: 40px;\n        margin-top: 35px;\n        border-top: 1px dashed ",";\n\n        > a {\n          display: flex;\n          margin-bottom: 10px;\n\n          &:last-child {\n            margin-bottom: 0;\n          }\n        }\n\n        button {\n          width: 100%;\n          height: 42px;\n          border: 0;\n          font-weight: 500;\n\n          &.btnFacebook {\n            background-color: #3b5998;\n\n            &:hover {\n              background-color: darken(#3b5998, 5%);\n            }\n          }\n\n          &.btnGooglePlus {\n            background-color: #dd4b39;\n            margin-top: 15px;\n\n            &:hover {\n              background-color: darken(#dd4b39, 5%);\n            }\n          }\n\n          &.btnAuthZero {\n            background-color: #e14615;\n            margin-top: 15px;\n\n            &:hover {\n              background-color: darken(#e14615, 5%);\n            }\n          }\n\n          &.btnFirebase {\n            background-color: ",";\n            margin-top: 15px;\n\n            &:hover {\n              background-color: ",";\n            }\n          }\n\n          &.btnAccountKit {\n            ","\n            margin-top: 15px;\n\n            &:hover {\n              ","\n            }\n          }\n        }\n      }\n\n      .isoForgotPass {\n        font-size: 12px;\n        color: ",";\n        margin-bottom: 10px;\n        text-decoration: none;\n\n        &:hover {\n          color: ",";\n        }\n      }\n\n      button {\n        font-weight: 500;\n      }\n    }\n  }\n"]);return y=function(){return e},e}var k=h.c.div(y(),x.a,(function(e){return"rtl"===e["data-rtl"]?"inherit":"0"}),(function(e){return"rtl"===e["data-rtl"]?"0":"inherit"}),Object(g.palette)("secondary",2),Object(g.palette)("grayscale",0),Object(g.palette)("grayscale",0),Object(g.palette)("grayscale",0),Object(g.palette)("grayscale",0),Object(g.palette)("grayscale",1),(function(e){return"rtl"===e["data-rtl"]?"inherit":"13px"}),(function(e){return"rtl"===e["data-rtl"]?"13px":"inherit"}),Object(g.palette)("error",0),(function(e){return"rtl"===e["data-rtl"]?"inherit":"0"}),(function(e){return"rtl"===e["data-rtl"]?"0":"inherit"}),Object(g.palette)("grayscale",2),Object(g.palette)("color",5),Object(g.palette)("color",6),"","",Object(g.palette)("text",3),Object(g.palette)("primary",0)),j=Object(O.a)(k),w=f.a.login,C=b.a.clearMenu;function E(){var e=Object(i.g)(),n=Object(i.h)(),t=Object(l.c)(),r=Object(l.d)((function(e){return e.Auth.idToken})),f=o.a.useState(!1),b=Object(a.a)(f,2),m=b[0],h=b[1];o.a.useEffect((function(){r&&h(!0)}),[r]);var g=(n.state||{from:{pathname:"/dashboard"}}).from;return m?o.a.createElement(i.a,{to:g}):o.a.createElement(j,{className:"isoSignInPage"},o.a.createElement("div",{className:"isoLoginContentWrapper"},o.a.createElement("div",{className:"isoLoginContent"},o.a.createElement("div",{className:"isoLogoWrapper"},o.a.createElement(c.b,{to:"/signin"},o.a.createElement(d.a,{id:"page.signInTitle"}))),o.a.createElement("div",{className:"isoSignInForm"},o.a.createElement("form",null,o.a.createElement("div",{className:"isoInputWrapper"},o.a.createElement(s.d,{size:"large",placeholder:"Username",autoComplete:"true"})),o.a.createElement("div",{className:"isoInputWrapper"},o.a.createElement(s.d,{size:"large",type:"password",placeholder:"Password",autoComplete:"false"})),o.a.createElement("div",{className:"isoInputWrapper isoLeftRightComponent"},o.a.createElement(u.b,null,o.a.createElement(d.a,{id:"page.signInRememberMe"})),o.a.createElement(p.b,{type:"primary",onClick:function(a){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];console.log(n.state),a.preventDefault(),t(r?w(r):w()),t(C()),e.push("/dashboard")}},o.a.createElement(d.a,{id:"page.signInButton"}))))))))}},535:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(999),i=t(211);n.a=Object(i.c)((function(e){return r.a.createElement(o.a,e)}),{withRef:!1})},544:function(e,n,t){"use strict";var a=t(11),r=t(35),o=t(15),i=t(20),c=t(23),l=t(29),s=t(46),u=t(25),p=t(0),d=t.n(p),f=t(8),b=t.n(f);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=Object(u.a)(e);if(n){var r=Object(u.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(s.a)(this,t)}}var v=function(e){Object(l.a)(t,e);var n=g(t);function t(e){var a;Object(i.a)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,r=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:h(h({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return Object(c.a)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,i=n.className,c=n.style,l=n.name,s=n.id,u=n.type,p=n.disabled,f=n.readOnly,m=n.tabIndex,h=n.onClick,g=n.onFocus,v=n.onBlur,x=n.autoFocus,O=n.value,y=n.required,k=Object(r.a)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value","required"]),j=Object.keys(k).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=k[n]),e}),{}),w=this.state.checked,C=b()(t,i,(e={},Object(o.a)(e,"".concat(t,"-checked"),w),Object(o.a)(e,"".concat(t,"-disabled"),p),e));return d.a.createElement("span",{className:C,style:c},d.a.createElement("input",Object(a.a)({name:l,id:s,type:u,required:y,readOnly:f,disabled:p,tabIndex:m,className:"".concat(t,"-input"),checked:!!w,onClick:h,onFocus:g,onBlur:v,onChange:this.handleChange,autoFocus:x,ref:this.saveInput,value:O},j)),d.a.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?h(h({},n),{},{checked:e.checked}):null}}]),t}(p.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},n.a=v},547:function(e,n,t){"use strict";var a=t(7),r=t.n(a),o=t(5),i=t.n(o),c=t(42),l=t.n(c),s=t(49),u=t.n(s),p=t(112),d=t.n(p),f=t(54),b=t.n(f),m=t(55),h=t.n(m),g=t(0),v=t(8),x=t.n(v),O=t(544),y=t(540),k=t.n(y),j=t(72),w=t(94),C=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},E=g.createContext(null),P=function(e){b()(t,e);var n=h()(t);function t(e){var a;return l()(this,t),(a=n.call(this,e)).cancelValue=function(e){a.setState((function(n){return{registeredValues:n.registeredValues.filter((function(n){return n!==e}))}}))},a.registerValue=function(e){a.setState((function(n){var t=n.registeredValues;return{registeredValues:[].concat(k()(t),[e])}}))},a.toggleOption=function(e){var n=a.state.registeredValues,t=a.state.value.indexOf(e.value),r=k()(a.state.value);-1===t?r.push(e.value):r.splice(t,1),"value"in a.props||a.setState({value:r});var o=a.props.onChange;if(o){var i=a.getOptions();o(r.filter((function(e){return-1!==n.indexOf(e)})).sort((function(e,n){return i.findIndex((function(n){return n.value===e}))-i.findIndex((function(e){return e.value===n}))})))}},a.renderGroup=function(e){var n=e.getPrefixCls,t=e.direction,o=d()(a),c=o.props,l=o.state,s=c.prefixCls,u=c.className,p=c.style,f=c.options,b=C(c,["prefixCls","className","style","options"]),m=n("checkbox",s),h="".concat(m,"-group"),v=Object(j.a)(b,["children","defaultValue","value","onChange","disabled"]),O=c.children;f&&f.length>0&&(O=a.getOptions().map((function(e){return g.createElement(L,{prefixCls:m,key:e.value.toString(),disabled:"disabled"in e?e.disabled:c.disabled,value:e.value,checked:-1!==l.value.indexOf(e.value),onChange:e.onChange,className:"".concat(h,"-item"),style:e.style},e.label)})));var y={toggleOption:a.toggleOption,value:a.state.value,disabled:a.props.disabled,name:a.props.name,registerValue:a.registerValue,cancelValue:a.cancelValue},k=x()(h,u,r()({},"".concat(h,"-rtl"),"rtl"===t));return g.createElement("div",i()({className:k,style:p},v),g.createElement(E.Provider,{value:y},O))},a.state={value:e.value||e.defaultValue||[],registeredValues:[]},a}return u()(t,[{key:"getOptions",value:function(){return this.props.options.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))}},{key:"render",value:function(){return g.createElement(w.a,null,this.renderGroup)}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value||[]}:null}}]),t}(g.PureComponent);P.defaultProps={options:[]};var S=P,I=t(84),N=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},F=function(e){b()(t,e);var n=h()(t);function t(){var e;return l()(this,t),(e=n.apply(this,arguments)).saveCheckbox=function(n){e.rcCheckbox=n},e.renderCheckbox=function(n){var t,a=n.getPrefixCls,o=n.direction,c=d()(e),l=c.props,s=c.context,u=l.prefixCls,p=l.className,f=l.children,b=l.indeterminate,m=l.style,h=l.onMouseEnter,v=l.onMouseLeave,y=N(l,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave"]),k=s,j=a("checkbox",u),w=i()({},y);k&&(w.onChange=function(){y.onChange&&y.onChange.apply(y,arguments),k.toggleOption({label:f,value:l.value})},w.name=k.name,w.checked=-1!==k.value.indexOf(l.value),w.disabled=l.disabled||k.disabled);var C=x()(p,(t={},r()(t,"".concat(j,"-wrapper"),!0),r()(t,"".concat(j,"-rtl"),"rtl"===o),r()(t,"".concat(j,"-wrapper-checked"),w.checked),r()(t,"".concat(j,"-wrapper-disabled"),w.disabled),t)),E=x()(r()({},"".concat(j,"-indeterminate"),b));return g.createElement("label",{className:C,style:m,onMouseEnter:h,onMouseLeave:v},g.createElement(O.a,i()({},w,{prefixCls:j,className:E,ref:e.saveCheckbox})),void 0!==f&&g.createElement("span",null,f))},e}return u()(t,[{key:"componentDidMount",value:function(){var e,n=this.props.value;null===(e=this.context)||void 0===e||e.registerValue(n),Object(I.a)("checked"in this.props||this.context||!("value"in this.props),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}},{key:"componentDidUpdate",value:function(e){var n,t,a=e.value,r=this.props.value;r!==a&&(null===(n=this.context)||void 0===n||n.cancelValue(a),null===(t=this.context)||void 0===t||t.registerValue(r))}},{key:"componentWillUnmount",value:function(){var e,n=this.props.value;null===(e=this.context)||void 0===e||e.cancelValue(n)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){return g.createElement(w.a,null,this.renderCheckbox)}}]),t}(g.PureComponent);F.__ANT_CHECKBOX=!0,F.defaultProps={indeterminate:!1},F.contextType=E;var L=F;L.Group=S;n.a=L},563:function(e,n,t){"use strict";t(109),t(569)},569:function(e,n,t){},575:function(e,n,t){"use strict";t(620);var a=t(196);n.a=function(e,n,t){a.a[e]({message:n,description:t})}},610:function(e,n,t){"use strict";t(1e3);var a=t(1051);n.a=a.a},692:function(e,n,t){"use strict";t.d(n,"b",(function(){return a.a})),t.d(n,"a",(function(){return h}));var a=t(575),r=(t(142),t(74)),o=t(110),i=t(0),c=t.n(i),l=t(697),s=t(44),u=t(36),p=t(50),d=t(77);function f(){var e=Object(s.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  max-width: 160px;\n\n  .ant-btn {\n    width: 20px;\n    height: 20px;\n    border: 0;\n    outline: 0;\n    padding: 0;\n    margin: ",";\n    ",";\n\n    &:empty {\n      visibility: visible;\n    }\n\n    &:last-child {\n      margin: 0;\n    }\n\n    &:nth-child(n + 6) {\n      margin-top: 15px;\n    }\n\n    &:nth-child(5n) {\n      margin-right: 0;\n      margin-left: 0;\n    }\n  }\n"]);return f=function(){return e},e}var b=u.c.div(f(),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(p.a)("3px")),m=Object(d.a)(b),h=function(e){var n=e.colors,t=e.seectedColor,a=e.changeColor,i=c.a.useState(!1),s=Object(o.a)(i,2),u=s[0],p=s[1];return c.a.createElement(l.a,{content:c.a.createElement(m,{className:"isoColorOptions"},n.map((function(e,n){var t={background:e};return c.a.createElement(r.a,{key:n,onClick:function(){p(!1),a(n)},style:t})}))),trigger:"click",visible:u,onVisibleChange:function(){p((function(e){return!e}))}},c.a.createElement(r.a,{style:{backgroundColor:n[t]},className:"isoColorChooser"}))};t(1),t(524),t(525),t(113)},697:function(e,n,t){"use strict";t(308);var a=t(775);n.a=a.a},773:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));t(563);var a=t(547),r=t(44),o=t(36),i=t(6);function c(){var e=Object(r.a)(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n    vertical-align: middle;\n\n    .ant-checkbox {\n      top: inherit;\n    }\n  }\n"]);return c=function(){return e},e}var l=function(e){return Object(o.c)(e)(c(),Object(i.palette)("text",1))}(a.a),s=a.a.Group;n.b=l},993:function(e,n,t){"use strict";var a=t(65),r=t(180),o=t(179),i=t(934),c=t(1002),l=t.n(c),s=t(217),u=Object(s.a)({forceRefresh:!0}),p={clientID:"your_client_id",domain:"your_domain_name",allowedConnections:["Username-Password-Authentication"],rememberLastLogin:!0,language:"en",closable:!0,options:{auth:{autoParseHash:!0,responseType:"token id_token",redirect:!0,redirectUrl:"https://your_domain_name/auth0loginCallback"},languageDictionary:{title:"bankpro",emailInputPlaceholder:"demo@gmail.com",passwordInputPlaceholder:"demodemo"},theme:{labeledSubmitButton:!0,logo:"your_logo_url",primaryColor:"#E14615",authButtons:{connectionName:{displayName:"Log In",primaryColor:"#b7b7b7",foregroundColor:"#000000"}}}}},d=t(692),f=function(e){Object(r.a)(t,e);var n=Object(o.a)(t);function t(){var e;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).lock=new l.a(p.clientID,p.domain,p.options),e.login=function(){e.lock&&e.lock.show()},e.handleAuthentication=function(){e.lock.on("authenticated",e.setSession),e.lock.on("authorization_error",(function(e){return Object(d.b)("error","Wrong mail or password")}))},e.setSession=function(e){var n=JSON.stringify(1e3*e.expiresIn+(new Date).getTime());localStorage.setItem("access_token",e.accessToken),localStorage.setItem("id_token",e.idToken),localStorage.setItem("expires_at",n),u.replace("/dashboard")},e.logout=function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),u.replace("/")},e.isAuthenticated=function(){var e=JSON.parse(localStorage.getItem("expiresAt"));return(new Date).getTime()<e},e}return t}(i.EventEmitter);n.a=new f}}]);
//# sourceMappingURL=14.f93ea152.chunk.js.map