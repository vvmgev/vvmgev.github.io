(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(7),i=n.n(a),s=n(5),u=n(6),o=n(11),l=n(2),j="SAVE_WEATHER",d="ERROR_WEATHER",h=Object(u.b)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var n=t.payload.weather;return Object(l.a)({},n);case d:var r=t.payload.weather;return Object(l.a)(Object(l.a)({},r),{},{error:!0});default:return e}}}),f=Object(u.c)(h,Object(u.a)(o.a)),b=(n(26),n(14)),p=n(15),O=(n(27),n(1)),m=["items","render","itemClick"],v=function(e){var t=e.items,n=e.render,r=e.itemClick,c=Object(p.a)(e,m);return Object(O.jsx)("ul",Object(l.a)(Object(l.a)({},c),{},{children:t.map((function(e,t){return Object(O.jsx)("li",{onClick:function(){return r&&r(e,t)},children:n(e,t)},e.id||t)}))}))},y=Object(r.memo)(v),x=function(e){return Math.round(e)},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{weekday:"short"};return new Date(1e3*e).toLocaleString("en-us",t)},g=void 0;n(29);var k=function(){var e,t=Object(s.c)((function(e){return e.weather})),n=Object(r.useState)(0),c=Object(b.a)(n,2),a=c[0],i=c[1],u=null===t||void 0===t||null===(e=t.city)||void 0===e?void 0:e.name,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(r.useRef)(t);return Object(r.useEffect)((function(){n.current=e})),n.current}(u);return Object(r.useEffect)((function(){return o!==u&&i(0)}),[u]),t?t.error?Object(O.jsx)("h2",{children:t.message}):Object(O.jsxs)("div",{className:"weather-info",children:[Object(O.jsxs)("h2",{children:[t.city.name," ",t.city.country]}),Object(O.jsxs)("div",{className:"today-info",children:[Object(O.jsxs)("div",{className:"today-info-row",children:[Object(O.jsx)("span",{children:"Day"}),Object(O.jsx)("span",{children:x(t.list[a].temp.day)})]}),Object(O.jsxs)("div",{className:"today-info-row",children:[Object(O.jsx)("span",{children:"Night"}),Object(O.jsx)("span",{children:x(t.list[a].temp.night)})]}),Object(O.jsxs)("div",{className:"today-info-row",children:[Object(O.jsx)("span",{children:"Humidity"}),Object(O.jsxs)("span",{children:[x(t.list[a].humidity),"%"]})]})]}),Object(O.jsx)(y,{className:"week-list",items:t.list,itemClick:function(e,t){return i(t)},render:function(e,t){var n=e.temp,r=n.day,c=n.night,i=e.dt;return Object(O.jsxs)("div",{className:"day-info ".concat(t===a?"active":""),children:[Object(O.jsx)("span",{className:"day-name",children:w(i)}),Object(O.jsx)("h3",{className:"day-temp",children:x(r)}),Object(O.jsx)("h4",{className:"day-temp",children:x(c)})]})}})]}):Object(O.jsx)("h2",{children:" Please enter the city name"})},N=n(3),E=n.n(N),R=n(4),C=n(12),S=n(13),L=function(){function e(){Object(C.a)(this,e),this.URL="https://api.openweathermap.org/data/2.5/forecast/daily",this.urlParams=new URLSearchParams({units:"metric",appid:"58b6f7c78582bffab3936dac99c31b25"})}return Object(S.a)(e,[{key:"request",value:function(e){return fetch("".concat(this.URL,"?q=").concat(e,"&").concat(this.urlParams.toString()))}},{key:"getWeather",value:function(){var e=Object(R.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request(t);case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),P=new L,T=function(e){return{type:j,payload:{weather:e}}},A=function(e){return function(){var t=Object(R.a)(E.a.mark((function t(n){var r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.getWeather(e);case 2:if("200"===(r=t.sent).cod){t.next=6;break}return n({type:d,payload:{weather:r}}),t.abrupt("return");case 6:n(T(r));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};n(31);var F=function(){var e=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(){for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];clearTimeout(t),t=setTimeout((function(){e.apply(g,c)}),n)}}(Object(s.b)(),500),t=function(){var t=Object(R.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e(A(n.target.value)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{children:Object(O.jsx)("input",{onChange:t,className:"searchbar",id:"search",type:"text",placeholder:"enter city, country"})})};n(32);var W=function(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(F,{}),Object(O.jsx)(k,{})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(s.a,{store:f,children:Object(O.jsx)(W,{})})}),document.getElementById("root")),q()}},[[33,1,2]]]);
//# sourceMappingURL=main.64f1682d.chunk.js.map