(this["webpackJsonptodolist-app"]=this["webpackJsonptodolist-app"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(6),s=n.n(a),i=n(7),r=n(8),o=n(11),l=n(9),j=n(10),b=n(5),d=n(0),u=function(t){return Object(d.jsxs)("li",{className:"border justify-content-between align-items-center bg-white d-flex p-1 m-3",children:[Object(d.jsx)("div",{className:"text-dark font-weight-bold px-auto",children:t.text}),Object(d.jsx)("button",{onClick:function(){return t.handleDelete(t.id)},className:"btn btn-danger h-25 p-2",children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})},h=n(21);var f=function(){var t=Object(c.useState)([{text:"Coding with react",id:Object(h.a)()},{text:"Do the sports session",id:Object(h.a)()},{text:"Send package for father",id:Object(h.a)()}]),e=Object(b.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(),i=Object(b.a)(s,2),r=i[0],o=i[1],l=function(t){var e=n.filter((function(e){return e.id!==t}));a(e)};return Object(d.jsx)(c.Fragment,{children:Object(d.jsxs)("div",{className:"m-auto col-12 col-sm-10 col-lg-10 px-4",children:[Object(d.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault();var e=Object(j.a)(n),c={};c.text=r,c.id=Object(h.a)(),e.push(c),a(e),o("")}(t)},className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"todo",className:"form-label mt-3",children:Object(d.jsx)("h4",{children:"What's the plan for today ?"})}),Object(d.jsx)("input",{value:r,onChange:function(t){return function(t){o(t)}(t.target.value)},type:"text",className:"form-control",id:"todo"}),Object(d.jsx)("button",{className:"btn btn-primary mt-3",children:"Send"})]}),Object(d.jsx)("h4",{children:"To - do list : "}),Object(d.jsx)("ul",{className:"list-group",children:n.map((function(t){return Object(d.jsx)(u,{text:t.text,id:t.id,handleDelete:l},t.id)}))})]})})},m=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"text-center font-weight-bold mt-3",children:"To Do List"}),Object(d.jsx)(f,{})]})}}]),n}(c.Component),x=(n(17),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),s(t),i(t)}))});n(18);s.a.render(Object(d.jsx)(m,{}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.4f0a8e59.chunk.js.map