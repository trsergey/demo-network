(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[3],{293:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",dialog:"Dialogs_dialog__lk_cw",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},295:function(e,s,a){"use strict";a.r(s);a(1);var i=a(103),n=a(293),t=a.n(n),c=a(13),d=a(0),o=function(e){var s="/dialogs/"+e.id;return Object(d.jsx)("div",{className:t.a.dialog,children:Object(d.jsx)(c.b,{to:s,children:e.name})})},l=function(e){return Object(d.jsx)("div",{className:t.a.message,children:e.message})},g=a(86),r=a(125),j=a(29),m=a(41),b=Object(m.a)(50),u=Object(r.a)({form:"dialogMessageForm"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(g.a,{component:j.b,name:"newMessageBody",placeholder:"Enter your message",validate:[m.b,b]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Send"})})]})})),O=function(e){var s=e.dialogsPage.dialogs.map((function(e){return Object(d.jsx)(o,{name:e.name,id:e.id},e.id)})),a=e.dialogsPage.messages.map((function(e){return Object(d.jsx)(l,{message:e.message},e.id)}));return Object(d.jsxs)("div",{className:t.a.dialogs,children:[Object(d.jsx)("div",{className:t.a.dialogsItems,children:s}),Object(d.jsxs)("div",{className:t.a.messages,children:[Object(d.jsx)("div",{children:a}),Object(d.jsx)(u,{onSubmit:function(s){var a=s.newMessageBody;e.sendMessage(a)}})]})]})},_=a(12),h=a(94),x=a(9);s.default=Object(x.d)(Object(_.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})),h.a)(O)}}]);
//# sourceMappingURL=3.6c47daae.chunk.js.map