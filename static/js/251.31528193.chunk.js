(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[251],{2609:function(n,e,t){"use strict";t.d(e,{z:function(){return r}});var o=t(3329);function r(n){var e=n.type,t=void 0===e?"button":e,r=n.content,i=void 0===r?"":r,u=n.className,c=void 0===u?"":u,a=n.onClick,f=n.disabled,l=void 0!==f&&f;return(0,o.jsx)("button",{type:t,className:c,onClick:a,disabled:l,children:i})}},4359:function(n,e,t){"use strict";t.d(e,{II:function(){return s},SI:function(){return p},__:function(){return l},l0:function(){return f}});var o,r,i,u,c=t(168),a=t(6031),f=a.ZP.form(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid #bfb7f9;\n  background: #302e42;\n  padding: 20px 10px 10px 10px;\n  margin: 20px auto;\n  width: 90%;\n  max-width: 600px;\n"]))),l=a.ZP.label(r||(r=(0,c.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  margin-bottom: 20px;\n  background: inherit;\n\n  & span {\n    position: absolute;\n    display: inline-block;\n    font-size: 14px;\n    line-height: 14px;\n    text-transform: uppercase;\n    top: calc(50% - 14px / 2);\n    left: 10px;\n    color: #bfb7f9a6;\n    transition: 250ms ease-in-out;\n  }\n"]))),s=a.ZP.input(i||(i=(0,c.Z)(["\n  border: 1px solid #bfb7f9a6;\n  border-radius: 5px;\n  height: 36px;\n  padding: 14px 10px 6px 10px;\n  font-size: 16px;\n  width: 100%;\n  background: inherit;\n  color: #bfb7f9;\n  font-weight: 600;\n\n  &:hover {\n    outline: 1px solid #bfb7f9a6;\n  }\n\n  &:focus {\n    outline: 1px solid #bfb7f9;\n  }\n\n  &:focus ~ span,\n  &:valid ~ span {\n    top: -8px;\n    left: 14px;\n    font-size: 9px;\n    font-weight: 600;\n    padding: 0 4px;\n    color: #bfb7f9;\n    background: inherit;\n  }\n"]))),p=a.ZP.form(u||(u=(0,c.Z)(["\n  background: inherit;\n  margin: 10px 0 0 0;\n  width: 90%;\n\n  & input {\n    padding: 10px;\n  }\n\n  & input::placeholder {\n    font-size: 14px;\n    line-height: 14px;\n    color: #bfb7f9a6;\n    font-weight: 400;\n    text-transform: uppercase;\n  }\n"])))},2161:function(n,e,t){"use strict";t.d(e,{W:function(){return u}});var o=t(4359),r=t(2609),i=t(3329);function u(n){n.initValues;var e=n.btnContent,t=void 0===e?"":e,u=n.onSubmit,c=n.children;return(0,i.jsxs)(o.l0,{onSubmit:u,children:[c,(0,i.jsx)(r.z,{type:"submit",content:t,className:"btn"})]})}},3281:function(n,e,t){"use strict";t.d(e,{i:function(){return r},x:function(){return i}});var o=t(8174),r=function(n){o.Am.success(n)},i=function(n){o.Am.warn(n)}},2251:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return B}});var o=t(2791),r=t(9434),i=t(5036),u=t(2161),c=t(4359),a=t(9504),f=t.n(a),l=t(3281),s=t(3329);function p(n){var e=n.initValues,t=void 0===e?{name:"",number:""}:e,o=function(n){var e=(0,r.I0)(),t=(0,r.v9)((function(n){return n.contacts.items}));return{formSubmitHandler:function(n){var o=t.map((function(n){return n.name}));if(o.includes(n.name))(0,l.x)("".concat(n.name," is already exists"));else try{e(i.Z.addContact(n)),(0,l.i)("Contact successfully added")}catch(r){}},reset:function(t){t.target.name.value=n.name,t.target.number.value=n.number,e(i.Z.getContacts())}}}(t),a=o.formSubmitHandler,p=o.reset;return(0,s.jsx)(u.W,{btnContent:"Add contact",onSubmit:function(n){n.preventDefault(),a({name:n.target.name.value,number:n.target.number.value}),p(n)},children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c.__,{children:[(0,s.jsx)(c.II,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -\\.\\][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dot, dash and spaces. For example Anne-Mary Mercer, Mr. Charles, Castelmore d'Artagnan",required:!0,defaultValue:t.name,autoComplete:"off"}),(0,s.jsx)("span",{children:"Name"})]}),(0,s.jsxs)(c.__,{children:[(0,s.jsx)(f(),{mask:"999-999-9999",maskChar:"*",children:(0,s.jsx)(c.II,{type:"tel",name:"number",title:"Phone number must be digits",required:!0,defaultValue:t.number,autoComplete:"off"})}),(0,s.jsx)("span",{children:"Number"})]})]})})}var d=t(4808),b=t(3628);function y(){var n=(0,r.I0)();return(0,s.jsx)(c.SI,{children:(0,s.jsx)(c.__,{children:(0,s.jsx)(b.DebounceInput,{element:c.II,debounceTimeout:300,placeholder:"Find contacts by name",onChange:function(e){n((0,d.x)(e.target.value))}})})})}var v,m,h,x,g,j=t(885),w=t(6871),O=t(7425),P=t(2609),C=t(6382),k=t(168),D=t(6031),N=D.ZP.ul(v||(v=(0,k.Z)(["\n  width: 90%;\n  list-style: none;\n  border: 1px solid #bfb7f9;\n  color: #bfb7f9;\n"]))),Z=D.ZP.li(m||(m=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 4px;\n  font-size: 18px;\n  border: 1px solid transparent;\n  transition: 250ms ease-in-out;\n\n  &:nth-of-type(odd) {\n    background-color: #302e42;\n  }\n\n  &:nth-of-type(even) {\n    background-color: #3e3c55;\n  }\n\n  :hover {\n    border: 1px solid #bfb7f9;\n  }\n\n  :hover > div > div {\n    transform: scale(1.1);\n  }\n"]))),S=D.ZP.div(h||(h=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90px;\n"]))),_=D.ZP.div(x||(x=(0,k.Z)(["\n  display: grid;\n  grid-template-columns: 40px 1fr;\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 10px;\n"]))),I=D.ZP.div(g||(g=(0,k.Z)(["\n  &:nth-of-type(even) {\n    grid-area: 1 / 2 / 2 / 3;\n    font-weight: 500;\n  }\n\n  &:nth-of-type(odd) {\n    grid-area: 2 / 2 / 3 / 3;\n  }\n"])));function T(n){var e=n.contacts,t=(0,r.I0)(),u=(0,w.s0)(),c=(0,o.useState)(null),a=(0,j.Z)(c,2),f=a[0],l=a[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(N,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,s.jsxs)(Z,{children:[(0,s.jsxs)(_,{children:[(0,s.jsx)(C.JO,{style:{gridArea:"1 / 1 / 3 / 2",background:"#".concat((parseInt(n.id,16)*parseInt(n.id,10)).toString(16).slice(2,8))},children:n.name[0].toUpperCase()}),(0,s.jsx)(I,{children:n.name}),(0,s.jsx)(I,{children:n.number})]}),(0,s.jsxs)(S,{children:[(0,s.jsx)(P.z,{type:"button",onClick:function(){u("/contacts/edit/".concat(n.id)),l(n)},content:(0,s.jsx)(O.cWi,{style:{top:"6px",left:"6px"}})}),(0,s.jsx)(P.z,{type:"button",onClick:function(){t(i.Z.deleteContact(n.id))},content:(0,s.jsx)(O.eSQ,{style:{top:"4px",left:"4px",height:"1.25em",width:"1.25em"}})})]})]},n.id)}))}),(0,s.jsx)(w.j3,{context:[f]})]})}function B(){var n=(0,r.I0)();(0,o.useEffect)((function(){n(i.Z.getContacts())}),[n]);var e=(0,r.v9)((function(n){return n.contacts.items})),t=(0,r.v9)((function(n){return n.filter.filter.toLowerCase()})),u=null===e||void 0===e?void 0:e.filter((function(n){return n.name.toLowerCase().includes(t)}));return(0,s.jsxs)(C.W2,{children:[(0,s.jsx)(C.xj,{children:"Phonebook"}),(0,s.jsx)(p,{}),(0,s.jsx)(C.ae,{children:"Contacts"}),(0,s.jsx)(y,{}),""===t?(0,s.jsx)(T,{contacts:e}):(0,s.jsx)(T,{contacts:u})]})}},5095:function(n,e,t){var o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g,f="object"==typeof self&&self&&self.Object===Object&&self,l=a||f||Function("return this")(),s=Object.prototype.toString,p=Math.max,d=Math.min,b=function(){return l.Date.now()};function y(n){var e=typeof n;return!!n&&("object"==e||"function"==e)}function v(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==s.call(n)}(n))return NaN;if(y(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=y(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(o,"");var t=i.test(n);return t||u.test(n)?c(n.slice(2),t?2:8):r.test(n)?NaN:+n}n.exports=function(n,e,t){var o,r,i,u,c,a,f=0,l=!1,s=!1,m=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function h(e){var t=o,i=r;return o=r=void 0,f=e,u=n.apply(i,t)}function x(n){return f=n,c=setTimeout(j,e),l?h(n):u}function g(n){var t=n-a;return void 0===a||t>=e||t<0||s&&n-f>=i}function j(){var n=b();if(g(n))return w(n);c=setTimeout(j,function(n){var t=e-(n-a);return s?d(t,i-(n-f)):t}(n))}function w(n){return c=void 0,m&&o?h(n):(o=r=void 0,u)}function O(){var n=b(),t=g(n);if(o=arguments,r=this,a=n,t){if(void 0===c)return x(a);if(s)return c=setTimeout(j,e),h(a)}return void 0===c&&(c=setTimeout(j,e)),u}return e=v(e)||0,y(t)&&(l=!!t.leading,i=(s="maxWait"in t)?p(v(t.maxWait)||0,e):i,m="trailing"in t?!!t.trailing:m),O.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=a=r=c=void 0},O.flush=function(){return void 0===c?u:w(b())},O}},6674:function(n,e,t){"use strict";function o(n){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.DebounceInput=void 0;var r=c(t(2791)),i=c(t(5095)),u=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function c(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?f(Object(t),!0).forEach((function(e){m(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function p(n,e){return p=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},p(n,e)}function d(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,o=v(n);if(e){var r=v(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return b(this,t)}}function b(n,e){if(e&&("object"===o(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return y(n)}function y(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function v(n){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},v(n)}function m(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var h=function(n){!function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&p(n,e)}(f,n);var e,t,o,c=d(f);function f(n){var e;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),m(y(e=c.call(this,n)),"onChange",(function(n){n.persist();var t=e.state.value,o=e.props.minLength;e.setState({value:n.target.value},(function(){var r=e.state.value;r.length>=o?e.notify(n):t.length>r.length&&e.notify(l(l({},n),{},{target:l(l({},n.target),{},{value:""})}))}))})),m(y(e),"onKeyDown",(function(n){"Enter"===n.key&&e.forceNotify(n);var t=e.props.onKeyDown;t&&(n.persist(),t(n))})),m(y(e),"onBlur",(function(n){e.forceNotify(n);var t=e.props.onBlur;t&&(n.persist(),t(n))})),m(y(e),"createNotifier",(function(n){if(n<0)e.notify=function(){return null};else if(0===n)e.notify=e.doNotify;else{var t=(0,i.default)((function(n){e.isDebouncing=!1,e.doNotify(n)}),n);e.notify=function(n){e.isDebouncing=!0,t(n)},e.flush=function(){return t.flush()},e.cancel=function(){e.isDebouncing=!1,t.cancel()}}})),m(y(e),"doNotify",(function(){var n=e.props.onChange;n.apply(void 0,arguments)})),m(y(e),"forceNotify",(function(n){var t=e.props.debounceTimeout;if(e.isDebouncing||!(t>0)){e.cancel&&e.cancel();var o=e.state.value,r=e.props.minLength;o.length>=r?e.doNotify(n):e.doNotify(l(l({},n),{},{target:l(l({},n.target),{},{value:o})}))}})),e.isDebouncing=!1,e.state={value:"undefined"===typeof n.value||null===n.value?"":n.value};var t=e.props.debounceTimeout;return e.createNotifier(t),e}return e=f,(t=[{key:"componentDidUpdate",value:function(n){if(!this.isDebouncing){var e=this.props,t=e.value,o=e.debounceTimeout,r=n.debounceTimeout,i=n.value,u=this.state.value;"undefined"!==typeof t&&i!==t&&u!==t&&this.setState({value:t}),o!==r&&this.createNotifier(o)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var n,e,t=this.props,o=t.element,i=(t.onChange,t.value,t.minLength,t.debounceTimeout,t.forceNotifyByEnter),c=t.forceNotifyOnBlur,f=t.onKeyDown,s=t.onBlur,p=t.inputRef,d=a(t,u),b=this.state.value;n=i?{onKeyDown:this.onKeyDown}:f?{onKeyDown:f}:{},e=c?{onBlur:this.onBlur}:s?{onBlur:s}:{};var y=p?{ref:p}:{};return r.default.createElement(o,l(l(l(l({},d),{},{onChange:this.onChange,value:b},n),e),y))}}])&&s(e.prototype,t),o&&s(e,o),Object.defineProperty(e,"prototype",{writable:!1}),f}(r.default.PureComponent);e.DebounceInput=h,m(h,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},3628:function(n,e,t){"use strict";var o=t(6674).DebounceInput;o.DebounceInput=o,n.exports=o}}]);
//# sourceMappingURL=251.31528193.chunk.js.map