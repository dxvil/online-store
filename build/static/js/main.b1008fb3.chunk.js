(this["webpackJsonptest-ex"]=this["webpackJsonptest-ex"]||[]).push([[0],{32:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"ADD_ITEM",(function(){return h})),n.d(c,"REMOVE_ITEM",(function(){return m})),n.d(c,"UPDATE_TOTAL_PRICE",(function(){return f})),n.d(c,"UPDATE_AFTER_RELOAD",(function(){return O})),n.d(c,"addItem",(function(){return g})),n.d(c,"removeItem",(function(){return x})),n.d(c,"updateAfterReload",(function(){return y})),n.d(c,"updateTotalPrice",(function(){return v}));var r=n(1),a=n(0),s=n(15),i=n.n(s),o=n(12),l=n(3),u=(n(32),n.p+"static/media/logo.cd4ab684.png"),d=n(8),p=Object(d.b)((function(e){return{products:e.products}}),null)((function(e){var t={listStyle:"none",color:"#000",textDecoration:"none"};return Object(r.jsxs)("nav",{className:"navbar",children:[Object(r.jsx)("img",{alt:"...",className:"logo",src:u}),Object(r.jsxs)("ul",{className:"navbar__items",children:[Object(r.jsx)(o.b,{to:"/",style:t,children:Object(r.jsx)("li",{children:"Home"})}),Object(r.jsx)(o.b,{to:"/shop",style:t,children:Object(r.jsx)("li",{children:"Shop"})}),Object(r.jsx)(o.b,{to:"/basket",children:Object(r.jsx)("li",{className:"cart",children:Object(r.jsx)("i",{className:"material-icons",children:"shopping_cart"})})}),Object(r.jsx)("p",{className:"cart-counter",children:e.products.length})]})]})})),j=(n(42),n(43),function(){return Object(r.jsx)("div",{className:"home",children:Object(r.jsx)("h1",{className:"main-title unselectable",children:"Best shoes"})})}),b=n(9),h=(n(44),n(45),"ADD_ITEM"),m="REMOVE_ITEM",f="UPDATE_TOTAL_PRICE",O="UPDATE_AFTER_RELOAD";function g(e){return{type:h,payload:e}}function x(e){return{type:m,payload:e}}function y(e){return{type:O,payload:e}}function v(e){return{type:f,payload:e.price.reduce((function(e,t){return e+t}),0)}}var E=Object(d.b)((function(e){return e}),c)((function(e){var t=e.title,n=e.price,c=e.img,s=e.product,i=e.addItem,o=Object(a.useRef)(null),l=Object(a.useRef)(null),u=Object(a.useRef)(null),d=Object(a.useRef)(null),p=Object(a.useRef)(null),j=Object(a.useState)([]),h=Object(b.a)(j,2),m=(h[0],h[1]);return Object(a.useEffect)((function(){o.current.addEventListener("mousemove",(function(e){var t=(window.innerHeight/2-e.pageX)/25,n=(window.innerHeight/2-e.pageY)/25;l.current.style.transform="rotateY(".concat(t,"deg) rotateX(").concat(n,"deg)")})),o.current.addEventListener("mouseenter",(function(){l.current.style.transition="none",u.current.style.transform="translateZ(150px)",d.current.style.transform="translateZ(120px)",p.current.style.transform="translateZ(200px) rotateZ(5deg)"})),o.current.addEventListener("mouseleave",(function(){var e=l.current;e.style.transform="rotateY(0deg) rotateX(0deg)",e.style.transition="all 0.5s ease",u.current.style.transform="translateZ(0px)",d.current.style.transform="translateZ(0px)",p.current.style.transform="translateZ(0px)"}))}),[]),Object(r.jsx)("div",{ref:o,className:"container-product",children:Object(r.jsxs)("div",{ref:l,className:"product",children:[Object(r.jsx)("button",{className:"shoe-buy-btn",onClick:function(){var e;i(e=s),m(e),console.log(s)},children:Object(r.jsx)("i",{className:"material-icons",children:"add_shopping_cart"})}),Object(r.jsx)("div",{className:"shoe-back"}),Object(r.jsx)("img",{ref:p,className:"shoe-pic",alt:t,src:c}),Object(r.jsx)("p",{ref:u,className:"shoe-title",children:t}),Object(r.jsx)("p",{ref:d,className:"shoe-price",children:n})]},t)})})),N=function(){var e=Object(a.useState)(P),t=Object(b.a)(e,2),n=t[0],c=(t[1],Object(a.useState)([])),s=Object(b.a)(c,2),i=s[0],o=s[1];return Object(a.useEffect)((function(){var e=n.map((function(e){return Object(r.jsx)(E,{product:e,price:e.price,title:e.title,img:e.image},e.title)}));o(e)}),[]),Object(r.jsxs)("div",{className:"shop",children:[Object(r.jsxs)("header",{className:"shop-header",children:[Object(r.jsx)("h2",{className:"shop-header__title",children:"Shop"}),Object(r.jsx)("input",{className:"shop-header__search-shoes",placeholder:"Search..."})]}),Object(r.jsx)("section",{className:"shop-products",children:i})]})},_=n.p+"static/media/shoe.008dc96b.png",A=n.p+"static/media/2.0a6edeb8.png",k=n.p+"static/media/3.dd731384.png",R=n.p+"static/media/4.159b947e.png",S=n.p+"static/media/5.81454129.png",T=(n(46),n(11)),I=n(23),q=n(17),D=Object(T.b)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return e.includes(t.payload)?(e.filter((function(e){return e===t.payload?e.quantity+=1:null})),e):[].concat(Object(q.a)(e),[t.payload]);case m:return Object(I.a)(Object(I.a)({},e),{},{items:e.items.filter((function(e,n){return n!==t.payload}))});case O:return[].concat(Object(q.a)(e),Object(q.a)(t.payload));default:return e}}}),w=Object(T.c)(D);w.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(n){console.warn(n)}}(w.getState())}));var L=w,M=Object(d.b)((function(e){return{products:e.products}}),c)((function(e){e.addItem;var t=e.products,n=Object(a.useState)(t),c=Object(b.a)(n,2),s=c[0],i=(c[1],Object(a.useState)(function(){try{var e=localStorage.getItem("persistantState");if(null===e)return;var t=JSON.parse(e),n=Object.values(t[0]);return console.log(n),t}catch(c){return void console.warn(c)}}())),o=Object(a.useState)([]),l=Object(b.a)(o,2);l[0],l[1];Object(a.useEffect)((function(){0!==i.length&&i.forEach((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){s.length>=1&&s.forEach((function(e){console.log(e)}))}),[s]);return Object(r.jsx)("div",{className:"basket",children:Object(r.jsx)("div",{className:"basket__order",children:0===s.length?Object(r.jsx)("h3",{children:"Your basket is empty"}):s.length>=1?s.map((function(e){return Object(r.jsxs)("div",{className:"basket__product",children:[Object(r.jsx)("img",{src:e.image,alt:e.title}),Object(r.jsx)("p",{className:"basket__product-info",children:e.title}),Object(r.jsx)("p",{className:"basket__product-info",children:e.price}),Object(r.jsx)("p",{className:"basket__product-info",children:e.quantity})]},e.title)})):void 0})})})),P=[{title:"Jordan 11 Retro",price:"200 Eur",image:_,quantity:1,shipping:!0},{title:"Nike Air Max 97",price:"160 Eur",image:A,quantity:1,shipping:!0},{title:"Chuck Taylor OX Low",price:"50 Eur",image:k,quantity:1,shipping:!0},{title:"Vans Ward",price:"60 Eur",image:R,quantity:1,shipping:!0},{title:"Adidas Yeezy Boost 350 V2",price:"500 Eur",image:S,quantity:1,shipping:!0},{title:"Air Jordan 4 Retro",price:"205 Eur",image:_,quantity:1,shipping:!0},{title:"Adidas NMD R1",price:"130 Eur",image:A,quantity:1,shipping:!0},{title:"Nike Tanjun",price:"65 Eur",image:k,quantity:1,shipping:!0},{title:"Nike Air Force 1 Low",price:"90 Eur",image:R,quantity:1,shipping:!0},{title:"Nike Air Max 270",price:"160 Eur",image:S,quantity:1,shipping:!0}];var Z=function(){return Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(p,{}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/",component:j}),Object(r.jsx)(l.a,{path:"/shop",component:N}),Object(r.jsx)(l.a,{path:"/basket",component:M})]})]})})};i.a.render(Object(r.jsx)(d.a,{store:L,children:Object(r.jsx)(Z,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.b1008fb3.chunk.js.map