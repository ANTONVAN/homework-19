(this.webpackJsonpemployeeapp=this.webpackJsonpemployeeapp||[]).push([[0],{27:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),s=n(15),a=n.n(s),o=(n(27),n(6)),i=n(16),l=n(17),u=n(22),h=n(19),j=n(0);var d=function(e){return Object(j.jsx)("form",{children:Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for a user",id:"search"})})})},b=n(20),m=n(21);var p=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=c.a.useState(t),r=Object(m.a)(n,2),s=r[0],a=r[1];return{items:c.a.useMemo((function(){var t=Object(b.a)(e);return null!==s&&t.sort((function(e,t){return console.log(t),e[s.key]<t[s.key]?"ascending"===s.direction?-1:1:e[s.key]>t[s.key]?"ascending"===s.direction?1:-1:0})),t}),[e,s]),requestSort:function(e){var t="ascending";s&&s.key===e&&"ascending"===s.direction&&(t="descending"),a({key:e,direction:t})},sortConfig:s}}(e.results),n=t.items,r=t.requestSort;return t.sortConfig,Object(j.jsx)("div",{children:Object(j.jsxs)("table",{className:"table table-dark",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Image"}),Object(j.jsx)("th",{scope:"col",children:Object(j.jsx)("button",{type:"button",onClick:function(){return r("name")},className:"{getClassNamesFor('name')} btn btn-primary",children:"Name"})}),Object(j.jsx)("th",{scope:"col",children:Object(j.jsx)("button",{type:"button",onClick:function(){return r("phone")},className:"{getClassNamesFor('phone')} btn btn-primary",children:"Phone"})}),Object(j.jsx)("th",{scope:"col",children:Object(j.jsx)("button",{type:"button",onClick:function(){return r("email")},className:"{getClassNamesFor('email')} btn btn-primary",children:"Email"})}),Object(j.jsx)("th",{scope:"col",children:Object(j.jsx)("button",{type:"button",onClick:function(){return r("dob")},className:"{getClassNamesFor('dob')} btn btn-primary",children:"DOB"})})]})}),Object(j.jsx)("tbody",{children:n.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{src:e.picture.thumbnail})}),Object(j.jsx)("td",{children:e.name.first}),Object(j.jsx)("td",{children:e.cell}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.dob.date})]},e.name.first)}))})]})})},O=n(18),f=n.n(O),g=function(){return f.a.get("https://randomuser.me/api/?results=10")},x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={search:"",employees:[],results:[]},e.searchUsers=function(t){g().then((function(t){return e.setState({employees:t.data.results,results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n,r=t.target.name,c=t.target.value,s=e.state.employees.filter((function(e){for(var t in e)if(null!=(n=e[t])&&"Object"===n.constructor.name);else if(e[t].includes(c.toLowerCase()))return e;var n}));e.setState((n={},Object(o.a)(n,r,c),Object(o.a)(n,"results",s),n))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.searchUsers()}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:" User List Search"}),Object(j.jsx)(d,{search:this.state.search,handleInputChange:this.handleInputChange}),Object(j.jsx)(p,{results:this.state.results})]})}}]),n}(r.Component);var y=function(){return Object(j.jsx)(x,{})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(47);a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),v()}},[[48,1,2]]]);
//# sourceMappingURL=main.c8f4e448.chunk.js.map