(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[4],{290:function(e,s,t){e.exports={nav:"Dialogs_nav__1UcZg",item:"Dialogs_item__29pPd",activeLink:"Dialogs_activeLink__34w6e",dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},295:function(e,s,t){"use strict";t.r(s);var a=t(1),i=t(0),n=t.n(i),c=t(290),o=t.n(c),r=t(13),d=function(e){var s="/dialogs/"+e.id;return Object(a.jsx)("div",{className:o.a.dialog+" "+o.a.active,children:Object(a.jsx)(r.b,{to:s,children:e.name})})},l=function(e){return Object(a.jsx)("div",{className:o.a.dialogs,children:e.text})},j=t(10),u=t(126),b=t(127),g=t(66),m=t(67),O=Object(m.a)(50),h=Object(b.a)({form:"dialogsAddMessageForm"})((function(e){var s=e.handleSubmit;return Object(a.jsxs)("form",{onSubmit:s,children:[Object(a.jsx)(u.a,{placeholder:"enter your message",name:"newMessageBody",component:g.b,validate:[m.b,O]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{children:"send"})})]})})),_=function(e){var s=e.dialogsPage,t=s.dialogs.map((function(e){return Object(a.jsx)(d,{name:e.name,id:e.id},e.id)})),i=s.messages.map((function(e){return Object(a.jsx)(l,{text:e.message},e.id)}));return!1===e.isAuth?Object(a.jsx)(j.a,{to:"/login"}):Object(a.jsxs)("div",{className:o.a.dialogs,children:[Object(a.jsx)("div",{className:o.a.dialogsItems,children:t}),Object(a.jsxs)("div",{className:o.a.messages,children:[Object(a.jsx)("div",{children:i}),Object(a.jsx)("div",{children:Object(a.jsx)(h,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})})]})]})},v=t(125),x=t(14),f=t(5),p=t(36),D=t(37),w=t(39),A=t(38),N=function(e){return{isAuth:e.auth.isAuth}},k=function(e){var s=function(s){Object(w.a)(i,s);var t=Object(A.a)(i);function i(){return Object(p.a)(this,i),t.apply(this,arguments)}return Object(D.a)(i,[{key:"render",value:function(){return!1===this.props.isAuth?Object(a.jsx)(j.a,{to:"/login"}):Object(a.jsx)(e,Object(f.a)({},this.props))}}]),i}(n.a.Component);return Object(x.b)(N)(s)},y=t(9);s.default=Object(y.d)(Object(x.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(v.b)(s))}}})),k)(_)}}]);
//# sourceMappingURL=4.006cecfe.chunk.js.map