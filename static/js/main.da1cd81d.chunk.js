(this.webpackJsonpamazon_clone=this.webpackJsonpamazon_clone||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c(3),a=c.n(i),s=c(24),r=c.n(s),o=(c(46),c(12)),l=(c(47),c(18)),j=c(9),d=(c(48),c(37)),h=c.n(d),b=c(38),u=c.n(b),m=Object(i.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(n.jsx)(m.Provider,{value:Object(i.useReducer)(t,c),children:a})},p=function(){return Object(i.useContext)(m)},x=c(30),_=(x.a.initializeApp({apiKey:"AIzaSyCwke-LoV5fK5BUdSQKUoYAkhR58E_AkIQ",authDomain:"clone-697b0.firebaseapp.com",projectId:"clone-697b0",storageBucket:"clone-697b0.appspot.com",messagingSenderId:"993036369613",appId:"1:993036369613:web:6d6d73a88a131277307384",measurementId:"G-1WSGZYJP69"}),x.a.auth());var g=function(){var e=p(),t=Object(o.a)(e,1)[0],c=t.basket,i=t.user;return console.log(c),Object(n.jsxs)("nav",{className:"header",children:[Object(n.jsx)(l.b,{to:"/",children:Object(n.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(n.jsxs)("div",{className:"header__search",children:[Object(n.jsx)("input",{type:"text",className:"header__searchInput"}),Object(n.jsx)(h.a,{className:"header__searchIcon"})]}),Object(n.jsxs)("div",{className:"header__nav",children:[Object(n.jsx)(l.b,{className:"header__link",to:!i&&"/login",children:Object(n.jsxs)("div",{onClick:function(){i&&_.signOut()},className:"header__option",children:[Object(n.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",null===i||void 0===i?void 0:i.email]}),Object(n.jsx)("span",{className:"header__optionLineTwo",children:i?"Sign Out":"Sign In"})]})}),Object(n.jsx)(l.b,{className:"header__link",to:"/",children:Object(n.jsxs)("div",{className:"header__option",children:[Object(n.jsx)("span",{className:"header__optionLineOne",children:"return"}),Object(n.jsx)("span",{className:"header__optionLineTwo",children:"& Order"})]})}),Object(n.jsx)(l.b,{className:"header__link",to:"/",children:Object(n.jsxs)("div",{className:"header__option",children:[Object(n.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(n.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]})}),Object(n.jsx)(l.b,{className:"header__link",to:"/checkout",children:Object(n.jsxs)("div",{className:"header__optionBasket",children:[Object(n.jsx)(u.a,{}),Object(n.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===c||void 0===c?void 0:c.length})]})})]})]})};c(57),c(58);var v=function(e){var t=e.id,c=e.title,i=e.image,a=e.price,s=e.rating,r=p(),l=Object(o.a)(r,2),j=(l[0].basket,l[1]);return Object(n.jsxs)("div",{className:"product",children:[Object(n.jsxs)("div",{className:"product__info",children:[Object(n.jsx)("p",{children:c}),Object(n.jsxs)("p",{className:"product__price",children:[Object(n.jsx)("small",{children:"Rs"}),Object(n.jsx)("strong",{children:a})]}),Object(n.jsx)("div",{className:"product__rating",children:Array(s).fill().map((function(e){return Object(n.jsx)("p",{children:"\u2b50"})}))})]}),Object(n.jsx)("img",{src:i,alt:""}),Object(n.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,price:a,image:i,rating:s}})},children:"Add to basket"})]})},f=c.p+"static/media/blender.0f7419f1.webp",k=c.p+"static/media/TV.db4cdbec.jpg",N=c.p+"static/media/ps4.119ad7a9.jpg",S=c.p+"static/media/s6.92903282.jpg",A=c.p+"static/media/iPhone.df7085b1.jpg",C=c.p+"static/media/alexa.c70616ef.png";function y(){return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG",alt:""}),Object(n.jsxs)("div",{className:"home__row",children:[Object(n.jsx)(v,{id:"598746",title:"How constant innovation statrts ",price:7900,rating:5,image:f}),Object(n.jsx)(v,{id:"145876",title:"i-Phone 11 pro max ",price:2900,rating:5,image:A})]}),Object(n.jsxs)("div",{className:"home__row",children:[Object(n.jsx)(v,{id:"254368",title:"SAMSUNG: S6  ",price:22e3,rating:5,image:S}),Object(n.jsx)(v,{id:"1589647",title:"amazon: Alexa for 4th generation ",price:59e3,rating:5,image:C}),Object(n.jsx)(v,{id:"59814546",title:"its time to ready save the world",price:3e4,rating:5,image:N})]}),Object(n.jsx)("div",{className:"home__row",children:Object(n.jsx)(v,{id:"5987987",title:"SAMSUNG:Make your vision perfect ",price:75e3,rating:5,image:k})})]})}c(59),c(60);function P(e){var t=e.id,c=e.title,i=e.price,a=e.rating,s=e.image,r=p(),l=Object(o.a)(r,2),j=(l[0].basket,l[1]);return Object(n.jsxs)("div",{className:"checkoutProduct",children:[Object(n.jsx)("img",{src:s,alt:""}),Object(n.jsxs)("div",{className:"checkoutProduct__info",children:[Object(n.jsx)("p",{className:"checkoutProduct__title",children:c}),Object(n.jsxs)("p",{className:"checkoutProduct__price",children:[Object(n.jsx)("small",{children:"Rs"}),Object(n.jsx)("strong",{children:i})]}),Object(n.jsx)("div",{className:"checkoutProduct__rating",children:Array(a).fill().map((function(e){return Object(n.jsx)("p",{children:"\u2b50"})}))}),Object(n.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from basket"})]})]})}c(61);var T=c(39),E=c.n(T),w=c(31),B=c(21),I=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)};var z=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(B.a)(Object(B.a)({},e),{},{user:t.user});case"ADD_TO_BASKET":return Object(B.a)(Object(B.a)({},e),{},{basket:[].concat(Object(w.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=Object(w.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===t.id}));return n>=0?c.splice(n,1):console.warn("item is not in the basket"),Object(B.a)(Object(B.a)({},e),{},{basket:c});default:return e}};function G(){var e=p(),t=Object(o.a)(e,2),c=t[0].basket;t[1];return Object(n.jsxs)("div",{className:"subtotal",children:[Object(n.jsx)(E.a,{renderText:function(e){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:["subtotal = (",c.length," items): ",Object(n.jsx)("strong",{children:e})]}),Object(n.jsxs)("small",{className:"subtotal__gift",children:[Object(n.jsx)("input",{type:"checkbox"})," This order contains gift"]})]})},decimalScale:2,value:I(c),displayType:"text",thousandSeparator:!0,prefix:"Rs"}),Object(n.jsx)("button",{children:"Proceed to Checkout"})]})}function R(){var e=p(),t=Object(o.a)(e,2),c=t[0].basket;t[1];return Object(n.jsxs)("div",{className:"checkout",children:[Object(n.jsxs)("div",{className:"checkout__left",children:[Object(n.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG",alt:""}),0==(null===c||void 0===c?void 0:c.length)?Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Your Shoping Basket is empty"}),Object(n.jsx)("p",{children:'This time you have nothing in the basket.To buy items click "add to basket" next to the item'})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"checkout__title",children:"Your shoping basket"}),null===c||void 0===c?void 0:c.map((function(e){return Object(n.jsx)(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),c.length>0&&Object(n.jsx)("div",{className:"checkout__right",children:Object(n.jsx)(G,{})})]})}c(63);function U(){var e=Object(j.f)(),t=Object(i.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(i.useState)(""),d=Object(o.a)(r,2),h=d[0],b=d[1];return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)(l.b,{to:"/",children:Object(n.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(n.jsxs)("div",{className:"login__container",children:[Object(n.jsx)("h1",{children:"sign In"}),Object(n.jsxs)("form",{action:"",children:[Object(n.jsx)("h5",{children:"E-mail"}),Object(n.jsx)("input",{value:a,onChange:function(e){return s(e.target.value)},type:"text"}),Object(n.jsx)("h5",{children:"Password"}),Object(n.jsx)("input",{onChange:function(e){return b(e.target.value)},value:h,type:"text"}),Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(a,h).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signinButton",children:"Sign In"})]}),Object(n.jsx)("p",{children:"By signing in you agree to Amazon condition of Use and Sale.Please see our privacy"}),Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(a,h).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create Your Amazon Account"})]})]})}var D=function(){var e=p(),t=Object(o.a)(e,2),c=(t[0].user,t[1]);return Object(i.useEffect)((function(){var e=_.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),Object(n.jsx)(l.a,{children:Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(j.c,{children:[Object(n.jsxs)(j.a,{path:"/checkout",children:[Object(n.jsx)(g,{}),Object(n.jsx)(R,{})]}),Object(n.jsx)(j.a,{path:"/login",children:Object(n.jsx)(U,{})}),Object(n.jsxs)(j.a,{path:"/",children:[Object(n.jsx)(g,{}),Object(n.jsx)(y,{})]})]})})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(O,{initialState:{basket:[],user:null},reducer:z,children:Object(n.jsx)(D,{})})}),document.getElementById("root")),L()}},[[65,1,2]]]);
//# sourceMappingURL=main.da1cd81d.chunk.js.map