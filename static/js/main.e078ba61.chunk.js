(this.webpackJsonpweather2=this.webpackJsonpweather2||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),s=n.n(r),i=(n(11),n.p,n(12),n(3)),o=n.n(i),u=n(6),d=n(4),j=(n(14),n(0)),l=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(d.a)(r,2),i=s[0],l=s[1];Object(c.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&units=metric&appid=10efb77a72330a0e72b72041cbfed994"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,l(a.main),console.log(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{class:"app-wrap",children:[Object(j.jsx)("header",{children:Object(j.jsx)("input",{onChange:function(e){a(e.target.value)},type:"text",autocomplete:"off",class:"search-box",placeholder:"Search for a city..."})}),i?Object(j.jsxs)("main",{children:[Object(j.jsxs)("section",{class:"location",children:[Object(j.jsx)("div",{class:"city",children:n}),Object(j.jsx)("div",{class:"date",children:function(){var e=(new Date).getDay();return 1===e?"Monday":2===e?"Tuesday":3===e?"Wednesday":4===e?"Thursday":5===e?"Friday":6===e?"Saturday":"Sunday"}()})]}),Object(j.jsxs)("div",{class:"current",children:[Object(j.jsxs)("div",{class:"temp",children:[i.temp,Object(j.jsx)("span",{children:"\xb0Cel"})]}),Object(j.jsxs)("div",{class:"hi-low",children:["Min : ",i.temp_min,"\xb0cel | Max : ",i.temp_max,"\xb0cel"]})]})]}):Object(j.jsx)("p",{children:"No Data Found"})]})})};var h=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(l,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.e078ba61.chunk.js.map