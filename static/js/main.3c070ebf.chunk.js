(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(11),s=n.n(c),r=n(3),o=n(10),a=n(4),l=n(5),i=n(7),u=n(6),d=n(1),h=n.n(d),j=n(2),p=n.n(j),b=(n(17),n(18),n(8)),m=n.n(b),f=(n(19),n(0)),O=function(e){var t=e.todos,n=e.selectUserId,c=e.changeStatusTodo,s=e.currentUserId,r=e.query,o=e.changeInput,a=e.selectedBy,l=e.selectHandler,i=function(e){return m()("button","TodoList__user-button",{"TodoList__user-button--selected":s===e&&0!==s},{"TodoList__user-button--not-selected":s!==e&&0!==s})};return Object(f.jsxs)("div",{className:"TodoList",children:[Object(f.jsx)("h2",{children:"Todos:"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("label",{htmlFor:"search-query",className:"TodoList__search-label",children:Object(f.jsx)("input",{type:"text",id:"search-query",className:m()("TodoList__search-input",{"TodoList__search-input--empty":0===t.length}),placeholder:"Search todo",value:r,onChange:function(e){return o(e.target.value)}})}),Object(f.jsxs)("select",{className:m()("TodoList__select"),name:"select",id:"select",value:a,onChange:function(e){return l(e.target.value)},children:[Object(f.jsx)("option",{value:"all",children:"all"}),Object(f.jsx)("option",{value:"active",children:"active"}),Object(f.jsx)("option",{value:"completed",children:"completed"})]}),Object(f.jsx)("button",{type:"button",className:"button",children:"ramdomise"})]}),Object(f.jsx)("div",{className:"TodoList__list-container",children:Object(f.jsx)("ul",{className:"TodoList__list",children:t.map((function(e){return e.completed?Object(f.jsxs)("li",{className:"TodoList__item TodoList__item--checked",children:[Object(f.jsxs)("label",{htmlFor:"".concat(e.id),children:[Object(f.jsx)("input",{id:e.id,type:"checkbox",checked:e.completed,onChange:function(){return c(e.id)}}),Object(f.jsx)("p",{children:e.title}),Object(f.jsx)("p",{children:e.createdAt}),Object(f.jsxs)("p",{children:["Done:\xa0",e.updatedAt]}),Object(f.jsx)("p",{children:"Status: ".concat(e.completed," completed")}),Object(f.jsx)("p",{children:s})]}),Object(f.jsxs)("button",{className:i(e.userId),type:"button",onClick:function(){return s!==e.userId&&n(e.userId)},children:["User\xa0",e.userId]})]},"".concat(e.id,"--checked")):Object(f.jsxs)("li",{className:"TodoList__item TodoList__item--unchecked",children:[Object(f.jsxs)("label",{htmlFor:"".concat(e.id),children:[Object(f.jsx)("input",{id:e.id,type:"checkbox",checked:e.completed,onChange:function(){return c(e.id)}}),Object(f.jsx)("p",{children:e.title}),Object(f.jsxs)("p",{children:["Create:\xa0",e.createdAt]}),Object(f.jsx)("p",{children:"Status: ".concat(e.completed," not")})]}),Object(f.jsxs)("button",{className:i(e.userId),type:"button",onClick:function(){return s!==e.userId&&n(e.userId)},children:["User\xa0",e.userId]})]},"".concat(e.id,"--unchecked"))}))})})]})},x="https://mate.academy/students-api";function v(e){return fetch("".concat(x).concat(e)).then((function(e){return e.json()}))}n(21);var y=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:{id:0,name:"",username:"",email:"",phone:""},showCurrentUser:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadCurrentUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadCurrentUser()}},{key:"loadCurrentUser",value:function(){var e=Object(r.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n=this.props.userId,console.log("".concat(x,"/users/").concat(n)),fetch("".concat(x,"/users/").concat(n)).then((function(e){if(!e.ok)throw new Error("404");return e.json()}));case 3:t=e.sent,console.log("componentDidMount currentUser",t,Object.keys(t)),this.setState({user:t,showCurrentUser:!0}),console.log(this.state.user),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.setState({showCurrentUser:!1});case 12:case"end":return e.stop()}var n}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.user,n=t.id,c=t.name,s=t.username,r=t.email,o=t.phone;return Object(f.jsx)("div",{className:"CurrentUser",children:this.state.showCurrentUser?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{className:"CurrentUser__title",children:Object(f.jsxs)("span",{children:["Selected user:\xa0",n]})}),Object(f.jsxs)("h3",{className:"CurrentUser__name",children:[c,s]}),Object(f.jsx)("p",{className:"CurrentUser__email",children:r}),Object(f.jsx)("p",{className:"CurrentUser__phone",children:o}),Object(f.jsx)("button",{type:"button",onClick:function(){return e.props.clearHandler()},className:"button",children:"Clear"})]}):Object(f.jsx)("p",{children:"No selected user"})})}}]),n}(p.a.Component),_=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={todos:[],selectedUserId:0,query:"",selectedBy:"all"},e.selectUserId=function(t){console.log("selectUserId",t),e.setState({selectedUserId:t})},e.changeStatusTodo=function(t){console.log(t);var n=e.state.todos.map((function(e){if(e.id===t){var n=Date();return console.log(e,n),Object(o.a)(Object(o.a)({},e),{},{completed:!e.completed,updatedAt:n})}return e}));e.setState((function(){return{todos:n}}))},e.clearHandler=function(){console.log("clear"),e.setState({selectedUserId:0})},e.changeInput=function(t){console.log(t),e.setState({query:t})},e.selectHandler=function(){var t=Object(r.a)(h.a.mark((function t(n){var c,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("select changed"),c="",t.t0=n,t.next="active"===t.t0?5:"completed"===t.t0?7:9;break;case 5:return c="/todos?completed=false",t.abrupt("break",10);case 7:return c="/todos?completed=true",t.abrupt("break",10);case 9:c="/todos";case 10:return console.log(c),t.next=13,v(c);case 13:s=t.sent,e.setState({todos:s,selectedBy:n});case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.filterTodos=function(){var t=e.state,n=t.query,c=t.todos,s=t.selectedBy;if(console.log("selectedBy=",s,typeof s),0===n.length)return c;var r=n.toLowerCase();return c.filter((function(e){return e.title.toLocaleLowerCase().includes(r)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/todos")).then((function(e){return e.json()}));case 2:t=e.sent,console.log(Object.keys(t[0])),this.setState({todos:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.query,c=e.selectedBy,s=this.filterTodos();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"App__sidebar",children:Object(f.jsx)(O,{todos:s,currentUserId:t,selectUserId:this.selectUserId,changeStatusTodo:this.changeStatusTodo,query:n,changeInput:this.changeInput,selectedBy:c,selectHandler:this.selectHandler})}),Object(f.jsx)("div",{className:"App__content",children:Object(f.jsx)("div",{className:"App__content-container",children:t?Object(f.jsx)(y,{userId:t,clearHandler:this.clearHandler}):"No user selected"})})]})}}]),n}(p.a.Component),g=_;s.a.render(Object(f.jsx)(g,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3c070ebf.chunk.js.map