(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678,963],{9712:function(e,t){},3919:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return at}});var r=n(7294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n(1143);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function s(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function l(e,t,n){var a=(0,r.useRef)(void 0!==e),o=(0,r.useState)(t),i=o[0],s=o[1],l=void 0!==e,u=a.current;return a.current=l,!l&&u&&i!==t&&s(t),[l?e:i,(0,r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}function u(e,t){return Object.keys(t).reduce((function(n,r){var u,c=n,d=c[i(r)],f=c[r],m=o(c,[i(r),r].map(s)),v=t[r],p=l(f,d,e[v]),E=p[0],x=p[1];return a({},m,((u={})[r]=E,u[v]=x,u))}),e)}n(9712);const c={prefix:String(Math.round(1e10*Math.random())),current:0},d=r.createContext(c);let f=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement);var m=r.createContext(null);const v=(e,t=null)=>null!=e?String(e):t||null;var p=r.createContext(null);var E=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function x(e){var t=E(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var b=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var y=function(e,t){return(0,r.useMemo)((function(){return function(e,t){var n=b(e),r=b(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};var h=function({children:e,in:t,onExited:n,mountOnEnter:a,unmountOnExit:o}){const i=(0,r.useRef)(null),s=(0,r.useRef)(t),l=x(n);(0,r.useEffect)((()=>{t?s.current=!0:l(i.current)}),[t,l]);const u=y(i,e.ref),c=(0,r.cloneElement)(e,{ref:u});return t?c:o||!s.current&&a?null:c},g=n(5893);const C=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O=["activeKey","getControlledId","getControllerId"],w=["as"];function N(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function S(e){let{active:t,eventKey:n,mountOnEnter:a,transition:o,unmountOnExit:i,role:s="tabpanel",onEnter:l,onEntering:u,onEntered:c,onExit:d,onExiting:f,onExited:p}=e,E=N(e,C);const x=(0,r.useContext)(m);if(!x)return[Object.assign({},E,{role:s}),{eventKey:n,isActive:t,mountOnEnter:a,transition:o,unmountOnExit:i,onEnter:l,onEntering:u,onEntered:c,onExit:d,onExiting:f,onExited:p}];const{activeKey:b,getControlledId:y,getControllerId:h}=x,g=N(x,O),w=v(n);return[Object.assign({},E,{role:s,id:y(n),"aria-labelledby":h(n)}),{eventKey:n,isActive:null==t&&null!=w?v(b)===w:t,transition:o||g.transition,mountOnEnter:null!=a?a:g.mountOnEnter,unmountOnExit:null!=i?i:g.unmountOnExit,onEnter:l,onEntering:u,onEntered:c,onExit:d,onExiting:f,onExited:p}]}const j=r.forwardRef(((e,t)=>{let{as:n="div"}=e,r=N(e,w);const[a,{isActive:o,onEnter:i,onEntering:s,onEntered:l,onExit:u,onExiting:c,onExited:d,mountOnEnter:f,unmountOnExit:v,transition:E=h}]=S(r);return(0,g.jsx)(m.Provider,{value:null,children:(0,g.jsx)(p.Provider,{value:null,children:(0,g.jsx)(E,{in:o,onEnter:i,onEntering:s,onEntered:l,onExit:u,onExiting:c,onExited:d,mountOnEnter:f,unmountOnExit:v,children:(0,g.jsx)(n,Object.assign({},a,{ref:t,hidden:!o,"aria-hidden":!o}))})})})}));j.displayName="TabPanel";const k=e=>{const{id:t,generateChildId:n,onSelect:a,activeKey:o,defaultActiveKey:i,transition:s,mountOnEnter:u,unmountOnExit:v,children:E}=e,[x,b]=l(o,i,a),y=function(e){let t=(0,r.useContext)(d);return t!==c||f||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)((()=>e||`react-aria${t.prefix}-${++t.current}`),[e])}(t),h=(0,r.useMemo)((()=>n||((e,t)=>y?`${y}-${t}-${e}`:null)),[y,n]),C=(0,r.useMemo)((()=>({onSelect:b,activeKey:x,transition:s,mountOnEnter:u||!1,unmountOnExit:v||!1,getControlledId:e=>h(e,"tabpane"),getControllerId:e=>h(e,"tab")})),[b,x,s,u,v,h]);return(0,g.jsx)(m.Provider,{value:C,children:(0,g.jsx)(p.Provider,{value:b||null,children:E})})};k.Panel=j;var R=k,P=n(4184),A=n.n(P),$=(n(4391),Function.prototype.bind.call(Function.prototype.call,[].slice));const K=r.createContext(null);K.displayName="NavContext";var T=K;function I(e){return`data-rr-ui-${e}`}var D=n(861);const L=["as","active","eventKey"];function F({key:e,onClick:t,active:n,id:a,role:o,disabled:i}){const s=(0,r.useContext)(p),l=(0,r.useContext)(T),u=(0,r.useContext)(m);let c=n;const d={role:o};if(l){o||"tablist"!==l.role||(d.role="tab");const t=l.getControllerId(null!=e?e:null),r=l.getControlledId(null!=e?e:null);d[I("event-key")]=e,d.id=t||a,c=null==n&&null!=e?l.activeKey===e:n,!c&&(null!=u&&u.unmountOnExit||null!=u&&u.mountOnEnter)||(d["aria-controls"]=r)}return"tab"===d.role&&(d["aria-selected"]=c,c||(d.tabIndex=-1),i&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=x((n=>{i||(null==t||t(n),null!=e&&s&&!n.isPropagationStopped()&&s(e,n))})),[d,{isActive:c}]}const M=r.forwardRef(((e,t)=>{let{as:n=D.ZP,active:r,eventKey:a}=e,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,L);const[i,s]=F(Object.assign({key:v(a,o.href),active:r},o));return i[I("active")]=s.isActive,(0,g.jsx)(n,Object.assign({},o,i,{ref:t}))}));M.displayName="NavItem";var Z=M;const _=["as","onSelect","activeKey","role","onKeyDown"];const B=()=>{},U=I("event-key"),G=r.forwardRef(((e,t)=>{let{as:n="div",onSelect:a,activeKey:o,role:i,onKeyDown:s}=e,l=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,_);const u=(0,r.useReducer)((function(e){return!e}),!1)[1],c=(0,r.useRef)(!1),d=(0,r.useContext)(p),f=(0,r.useContext)(m);let E,x;f&&(i=i||"tablist",o=f.activeKey,E=f.getControlledId,x=f.getControllerId);const b=(0,r.useRef)(null),h=e=>{const t=b.current;if(!t)return null;const n=(r=`[${U}]:not([aria-disabled=true])`,$(t.querySelectorAll(r)));var r;const a=t.querySelector("[aria-selected=true]");if(!a||a!==document.activeElement)return null;const o=n.indexOf(a);if(-1===o)return null;let i=o+e;return i>=n.length&&(i=0),i<0&&(i=n.length-1),n[i]},C=(e,t)=>{null!=e&&(null==a||a(e,t),null==d||d(e,t))};(0,r.useEffect)((()=>{if(b.current&&c.current){const e=b.current.querySelector(`[${U}][aria-selected=true]`);null==e||e.focus()}c.current=!1}));const O=y(t,b);return(0,g.jsx)(p.Provider,{value:C,children:(0,g.jsx)(T.Provider,{value:{role:i,activeKey:v(o),getControlledId:E||B,getControllerId:x||B},children:(0,g.jsx)(n,Object.assign({},l,{onKeyDown:e=>{if(null==s||s(e),!f)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=h(-1);break;case"ArrowRight":case"ArrowDown":t=h(1);break;default:return}var n;t&&(e.preventDefault(),C(t.dataset[(n="EventKey",`rrUi${n}`)]||null,e),c.current=!0,u())},ref:O,role:i}))})})}));G.displayName="Nav";var H=Object.assign(G,{Item:Z}),q=n(6792);const W=r.createContext(null);W.displayName="NavbarContext";var z=W,X=n(9059),V=n(4680),Y=(0,V.Z)("nav-item");var J=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product;"undefined"!=typeof document||J?r.useLayoutEffect:r.useEffect,new WeakMap;const Q=["onKeyDown"];const ee=r.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,Q);const[a]=(0,D.FT)(Object.assign({tagName:"a"},r)),o=x((e=>{a.onKeyDown(e),null==n||n(e)}));return(i=r.href)&&"#"!==i.trim()&&"button"!==r.role?(0,g.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,g.jsx)("a",Object.assign({ref:t},r,a,{onKeyDown:o}));var i}));ee.displayName="Anchor";var te=ee;const ne=r.forwardRef((({bsPrefix:e,className:t,as:n=te,active:r,eventKey:a,...o},i)=>{e=(0,q.vE)(e,"nav-link");const[s,l]=F({key:v(a,o.href),active:r,...o});return(0,g.jsx)(n,{...o,...s,ref:i,className:A()(t,e,o.disabled&&"disabled",l.isActive&&"active")})}));ne.displayName="NavLink",ne.defaultProps={disabled:!1};var re=ne;const ae=r.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:a,variant:o,fill:i,justify:s,navbar:l,navbarScroll:c,className:d,activeKey:f,...m}=u(e,{activeKey:"onSelect"}),v=(0,q.vE)(a,"nav");let p,E,x=!1;const b=(0,r.useContext)(z),y=(0,r.useContext)(X.Z);return b?(p=b.bsPrefix,x=null==l||l):y&&({cardHeaderBsPrefix:E}=y),(0,g.jsx)(H,{as:n,ref:t,activeKey:f,className:A()(d,{[v]:!x,[`${p}-nav`]:x,[`${p}-nav-scroll`]:x&&c,[`${E}-${o}`]:!!E,[`${v}-${o}`]:!!o,[`${v}-fill`]:i,[`${v}-justified`]:s}),...m})}));ae.displayName="Nav",ae.defaultProps={justify:!1,fill:!1};var oe=Object.assign(ae,{Item:Y,Link:re}),ie=(0,V.Z)("tab-content"),se=n(4578),le=n(3935),ue=!1,ce=r.createContext(null),de="unmounted",fe="exited",me="entering",ve="entered",pe="exiting",Ee=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=fe,r.appearStatus=me):a=ve:a=t.unmountOnExit||t.mountOnEnter?de:fe,r.state={status:a},r.nextCallback=null,r}(0,se.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===de?{status:fe}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==me&&n!==ve&&(t=me):n!==me&&n!==ve||(t=pe)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===me){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:le.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===fe&&this.setState({status:de})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[le.findDOMNode(this),r],o=a[0],i=a[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!e&&!n||ue?this.safeSetState({status:ve},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:me},(function(){t.props.onEntering(o,i),t.onTransitionEnd(l,(function(){t.safeSetState({status:ve},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:le.findDOMNode(this);t&&!ue?(this.props.onExit(r),this.safeSetState({status:pe},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:fe},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:fe},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:le.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===de)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,o(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(ce.Provider,{value:null},"function"==typeof n?n(e,a):r.cloneElement(r.Children.only(n),a))},t}(r.Component);function xe(){}Ee.contextType=ce,Ee.propTypes={},Ee.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:xe,onEntering:xe,onEntered:xe,onExit:xe,onExiting:xe,onExited:xe},Ee.UNMOUNTED=de,Ee.EXITED=fe,Ee.ENTERING=me,Ee.ENTERED=ve,Ee.EXITING=pe;var be=Ee;function ye(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var he=/([A-Z])/g;var ge=/^ms-/;function Ce(e){return function(e){return e.replace(he,"-$1").toLowerCase()}(e).replace(ge,"-ms-")}var Oe=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var we=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(Ce(t))||function(e,t){return ye(e).getComputedStyle(e,t)}(e).getPropertyValue(Ce(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!Oe.test(e))}(a)?n+=Ce(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(Ce(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},Ne=!("undefined"==typeof window||!window.document||!window.document.createElement),Se=!1,je=!1;try{var ke={get passive(){return Se=!0},get once(){return je=Se=!0}};Ne&&(window.addEventListener("test",ke,ke),window.removeEventListener("test",ke,!0))}catch(ot){}var Re=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!je){var a=r.once,o=r.capture,i=n;!je&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,Se?r:o)}e.addEventListener(t,n,r)};var Pe=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var Ae=function(e,t,n,r){return Re(e,t,n,r),function(){Pe(e,t,n,r)}};function $e(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}(e,"transitionend",!0)}),t+n),o=Ae(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function Ke(e,t,n,r){var a,o;null==n&&(a=we(e,"transitionDuration")||"",o=-1===a.indexOf("ms")?1e3:1,n=parseFloat(a)*o||0);var i=$e(e,n,r),s=Ae(e,"transitionend",t);return function(){i(),s()}}function Te(e,t){const n=we(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function Ie(e,t){const n=Te(e,"transitionDuration"),r=Te(e,"transitionDelay"),a=Ke(e,(n=>{n.target===e&&(a(),t(n))}),n+r)}var De=r.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:a,onExiting:o,onExited:i,addEndListener:s,children:l,childRef:u,...c},d)=>{const f=(0,r.useRef)(null),m=y(f,u),v=e=>{var t;m((t=e)&&"setState"in t?le.findDOMNode(t):null!=t?t:null)},p=e=>t=>{e&&f.current&&e(f.current,t)},E=(0,r.useCallback)(p(e),[e]),x=(0,r.useCallback)(p(t),[t]),b=(0,r.useCallback)(p(n),[n]),h=(0,r.useCallback)(p(a),[a]),C=(0,r.useCallback)(p(o),[o]),O=(0,r.useCallback)(p(i),[i]),w=(0,r.useCallback)(p(s),[s]);return(0,g.jsx)(be,{ref:d,...c,onEnter:E,onEntered:b,onEntering:x,onExit:h,onExited:O,onExiting:C,addEndListener:w,nodeRef:f,children:"function"==typeof l?(e,t)=>l(e,{...t,ref:v}):r.cloneElement(l,{ref:v})})}));const Le={[me]:"show",[ve]:"show"},Fe=r.forwardRef((({className:e,children:t,transitionClasses:n={},...a},o)=>{const i=(0,r.useCallback)(((e,t)=>{!function(e){e.offsetHeight}(e),null==a.onEnter||a.onEnter(e,t)}),[a]);return(0,g.jsx)(De,{ref:o,addEndListener:Ie,...a,onEnter:i,childRef:t.ref,children:(a,o)=>r.cloneElement(t,{...o,className:A()("fade",e,t.props.className,Le[a],n[a])})})}));Fe.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Fe.displayName="Fade";var Me=Fe;function Ze(e){return"boolean"==typeof e?e?Me:h:e}const _e=r.forwardRef((({bsPrefix:e,transition:t,...n},r)=>{const[{className:a,as:o="div",...i},{isActive:s,onEnter:l,onEntering:u,onEntered:c,onExit:d,onExiting:f,onExited:v,mountOnEnter:E,unmountOnExit:x,transition:b=Me}]=S({...n,transition:Ze(t)}),y=(0,q.vE)(e,"tab-pane");return(0,g.jsx)(m.Provider,{value:null,children:(0,g.jsx)(p.Provider,{value:null,children:(0,g.jsx)(b,{in:s,onEnter:l,onEntering:u,onEntered:c,onExit:d,onExiting:f,onExited:v,mountOnEnter:E,unmountOnExit:x,children:(0,g.jsx)(o,{...i,ref:r,className:A()(a,y,s&&"active")})})})})}));_e.displayName="TabPane";var Be=_e,Ue=n(3439);function Ge(e){let t;return(0,Ue.Ed)(e,(e=>{null==t&&(t=e.props.eventKey)})),t}function He(e){const{title:t,eventKey:n,disabled:r,tabClassName:a,tabAttrs:o,id:i}=e.props;return null==t?null:(0,g.jsx)(Y,{as:"li",role:"presentation",children:(0,g.jsx)(re,{as:"button",type:"button",eventKey:n,disabled:r,id:i,className:a,...o,children:t})})}const qe=e=>{const{id:t,onSelect:n,transition:r,mountOnEnter:a,unmountOnExit:o,children:i,activeKey:s=Ge(i),...l}=u(e,{activeKey:"onSelect"});return(0,g.jsxs)(R,{id:t,activeKey:s,onSelect:n,transition:Ze(r),mountOnEnter:a,unmountOnExit:o,children:[(0,g.jsx)(oe,{...l,role:"tablist",as:"ul",children:(0,Ue.UI)(i,He)}),(0,g.jsx)(ie,{children:(0,Ue.UI)(i,(e=>{const t={...e.props};return delete t.title,delete t.disabled,delete t.tabClassName,delete t.tabAttrs,(0,g.jsx)(Be,{...t})}))})]})};qe.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},qe.displayName="Tabs";var We=qe,ze=n(5697),Xe=n.n(ze);const Ve=({transition:e,...t})=>(0,g.jsx)(R,{...t,transition:Ze(e)});Ve.displayName="TabContainer";var Ye=Ve;const Je={eventKey:Xe().oneOfType([Xe().string,Xe().number]),title:Xe().node.isRequired,disabled:Xe().bool,tabClassName:Xe().string,tabAttrs:Xe().object},Qe=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};Qe.propTypes=Je;var et=Object.assign(Qe,{Container:Ye,Content:ie,Pane:Be}),tt=n(7266),nt=n(559),rt=n(2696);var at=function(){const[e,t]=(0,nt.Z)("dataItems",[]);return r.createElement("div",{className:"wrapper",style:{width:"60%",margin:"50px auto"}},r.createElement("h1",{style:{textAlign:"center",fontWeight:"400",fontFamily:"Ubuntu",color:"#6E00FF"}},"Semester Grading Tracker"),r.createElement("div",{className:"tab-wrapper"},r.createElement("div",{className:"container-fluid "},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-12",style:{boxShadow:"1px 1px 15px  #FF00C2",borderRadius:"10px"}},r.createElement(We,{defaultActiveKey:"grade"},r.createElement(et,{justify:!0,variant:"tabs",eventKey:"grade",title:"Grading Section"},r.createElement("div",{className:"tab-item-wrapper"},r.createElement("h5",{style:{textAlign:"center",fontSize:"25px"}},"Grade Point Average"),r.createElement(tt.default,null))),r.createElement(et,{eventKey:"courselist",title:"Course Listing"},r.createElement("div",{className:"tab-item-wrapper"},r.createElement("h5",{style:{textAlign:"center",fontSize:"25px"}},"Computer Science"),r.createElement(rt.default,{data:e,setDataItems:t})))))))))}},2696:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(7294),a=(n(7266),n(559),n(4184)),o=n.n(a),i=n(6792),s=n(4680),l=n(5893),u=e=>r.forwardRef(((t,n)=>(0,l.jsx)("div",{...t,ref:n,className:o()(t.className,e)})));const c=r.forwardRef((({bsPrefix:e,className:t,variant:n,as:r="img",...a},s)=>{const u=(0,i.vE)(e,"card-img");return(0,l.jsx)(r,{ref:s,className:o()(n?`${u}-${n}`:u,t),...a})}));c.displayName="CardImg";var d=c,f=n(9059);const m=r.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},s)=>{const u=(0,i.vE)(e,"card-header"),c=(0,r.useMemo)((()=>({cardHeaderBsPrefix:u})),[u]);return(0,l.jsx)(f.Z.Provider,{value:c,children:(0,l.jsx)(n,{ref:s,...a,className:o()(t,u)})})}));m.displayName="CardHeader";var v=m;const p=u("h5"),E=u("h6"),x=(0,s.Z)("card-body"),b=(0,s.Z)("card-title",{Component:p}),y=(0,s.Z)("card-subtitle",{Component:E}),h=(0,s.Z)("card-link",{Component:"a"}),g=(0,s.Z)("card-text",{Component:"p"}),C=(0,s.Z)("card-footer"),O=(0,s.Z)("card-img-overlay"),w=r.forwardRef((({bsPrefix:e,className:t,bg:n,text:r,border:a,body:s,children:u,as:c="div",...d},f)=>{const m=(0,i.vE)(e,"card");return(0,l.jsx)(c,{ref:f,...d,className:o()(t,m,n&&`bg-${n}`,r&&`text-${r}`,a&&`border-${a}`),children:s?(0,l.jsx)(x,{children:u}):u})}));w.displayName="Card",w.defaultProps={body:!1};var N=Object.assign(w,{Img:d,Title:b,Subtitle:y,Body:x,Link:h,Text:g,Header:v,Footer:C,ImgOverlay:O}),S=n(5005);const j=r.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...a},s)=>{const u=(0,i.vE)(e,"container"),c="string"==typeof t?`-${t}`:"-fluid";return(0,l.jsx)(n,{ref:s,...a,className:o()(r,t?`${u}${c}`:u)})}));j.displayName="Container",j.defaultProps={fluid:!1};var k=j;var R=r.forwardRef((({bsPrefix:e,className:t,striped:n,bordered:r,borderless:a,hover:s,size:u,variant:c,responsive:d,...f},m)=>{const v=(0,i.vE)(e,"table"),p=o()(t,v,c&&`${v}-${c}`,u&&`${v}-${u}`,n&&`${v}-${"string"==typeof n?`striped-${n}`:"striped"}`,r&&`${v}-bordered`,a&&`${v}-borderless`,s&&`${v}-hover`),E=(0,l.jsx)("table",{...f,className:p,ref:m});if(d){let e=`${v}-responsive`;return"string"==typeof d&&(e=`${e}-${d}`),(0,l.jsx)("div",{className:e,children:E})}return E}));n(7851);const P={textCenter:{textAlign:"center"},textRight:{textAlign:"right"}};var A=function(e){let{data:t,setDataItems:n}=e;const{0:a,1:o}=(0,r.useState)(),{0:i,1:s}=(0,r.useState)(0),{0:l,1:u}=(0,r.useState)(0),{0:c,1:d}=(0,r.useState)(0),{0:f,1:m}=(0,r.useState)(0),{0:v,1:p}=(0,r.useState)(0),{0:E,1:x}=(0,r.useState)(0),{0:b,1:y}=(0,r.useState)(0),{0:h,1:g}=(0,r.useState)(0),{0:C,1:O}=(0,r.useState)(0),{0:w,1:j}=(0,r.useState)(0),{0:A,1:$}=(0,r.useState)(0),{0:K,1:T}=(0,r.useState)(0),{0:I,1:D}=(0,r.useState)(0);(0,r.useEffect)((()=>{let e=0,n=0,a=0,i=0,l=0,c=0,f=0,v=0,E=0,b=0,h=0,C=0,w=0,N=0,S=0,k=0,R=0,A=0,K=0,I=0,F=0,M=0,Z=0,_=0,B=0,U=0,G=0,H=0,q=0,W=0,z=0,X=0,V=0,Y=0,J=0,Q=0,ee=0,te=0,ne=0,re=0,ae=0;const oe=t.map(((t,o)=>("1"==t.sem&&"2019"==t.year?(c+=3*L(t.grade),a+=3*L(t.grade),n+=3,A+=3,i+=c/n,W=c/A):"2"==t.sem&&"2019"==t.year?(f+=3*L(t.grade),n+=3,K+=3,z=f/K):"3"==t.sem&&"2019"==t.year?(v+=3*L(t.grade),n+=3,I+=3,X=v/I):"1"==t.sem&&"2020"==t.year?(E+=3*L(t.grade),n+=3,F+=3,V=E/F):"2"==t.sem&&"2020"==t.year?(b+=3*L(t.grade),n+=3,M+=3,Y=b/M):"3"==t.sem&&"2020"==t.year?(h+=3*L(t.grade),n+=3,Z+=3,J=h/Z):"1"==t.sem&&"2021"==t.year?(C+=3*L(t.grade),n+=3,_+=3,Q=C/_):"2"==t.sem&&"2021"==t.year?(w+=3*L(t.grade),n+=3,B+=3,ee=a/n):"3"==t.sem&&"2021"==t.year?(N+=3*L(t.grade),n+=3,U+=3,te=N/U):"1"==t.sem&&"2022"==t.year?(S+=3*L(t.grade),n+=3,G+=3,ne=S/G):"2"==t.sem&&"2022"==t.year?(k+=3*L(t.grade),n+=3,H+=3,re=k/H):"3"==t.sem&&"2022"==t.year&&(R+=3*L(t.grade),n+=3,q+=3,ae=R/q),e=(c+E+C+S+f+b+w+k+v+h+N+R)/n,l=e,r.createElement("tr",{key:o},r.createElement("td",{style:P.textCenter},t.sem,"/",t.year),r.createElement("td",{style:P.textCenter},t.course),r.createElement("td",{style:P.textCenter},t.grade),r.createElement("td",{style:{textAlign:"center"}},3)))));o(oe),u(W),d(z),m(X),p(V),x(Y),y(J),g(Q),O(ee),j(te),$(ne),T(re),D(ae),s(l.toFixed(2))}),[undefined]);const L=e=>("A"==e&&(e=4),"A-"===e&&(e=3.75),"B+"===e&&(e=3.25),"B"===e&&(e=3),"B-"===e&&(e=2.75),"C+"===e&&(e=2.25),"C"===e&&(e=2),"C-"===e&&(e=1.75),"D"===e&&(e=1),"F"===e&&(e=0),"W"===e&&(e=0),e),F=(e,t)=>{if(0!=e)return r.createElement(N,{style:{width:"14rem",backgroundColor:"#f5f5f5",borderRadius:"10px",boxShadow:"1px 1px 5px #9E9E9E",marginBottom:"10px"}},r.createElement(N.Body,null,r.createElement(N.Title,{style:{color:"#bb0a1e",fontSize:"16px"}},t),r.createElement(N.Text,{style:{fontSize:"12px",fontWeight:"600"}},"GPA ",r.createElement(S.Z,{style:{backgroundColor:"#bb0a1e",border:"none",borderRadius:"50px"},variant:"primary"},e.toFixed(2)))))};return r.createElement(k,null,r.createElement("div",{className:"gpac-dis",style:{width:"50px",color:"#FFFF",backgroundColor:"#bb0a1e",textAlign:"center",float:"right",marginBottom:"10px",borderRadius:"30px"}},i),r.createElement(R,{class:"table table-borderless",style:{backgroundColor:"#f5f5f5",borderRadius:"10px",boxShadow:"1px 1px 5px #9E9E9E"}},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{style:{textAlign:"center",border:"0"}},"Semester"),r.createElement("th",{style:{textAlign:"center",border:"0"}},"Course"),r.createElement("th",{style:{textAlign:"center"}},"Grade"),r.createElement("th",{style:{textAlign:"center"}},"Credit"),r.createElement("th",{style:{textAlign:"center"}}))),r.createElement("tbody",{style:{border:"none"}},a)),r.createElement("div",null,F(l,"semester 1/2019"),F(c,"semester 2/2019"),F(f,"semester 3/2019"),F(v,"semester 1/2020"),F(E,"semester 2/2020"),F(b,"semester 3/2020"),F(h,"semester 1/2021"),F(C,"semester 2/2021"),F(w,"semester 3/2021"),F(A,"semester 1/2022"),F(K,"semester 2/2022"),F(I,"semester 3/2022")))}},4391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,o.default)(r)};var r,a=n(2613),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},2613:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var s=a||"<<anonymous>>",l=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+l+"` was not specified in `"+s+"`."):null;for(var u=arguments.length,c=Array(u>6?u-6:0),d=6;d<u;d++)c[d-6]=arguments[d];return e.apply(void 0,[n,r,s,o,l].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},9059:function(e,t,n){"use strict";const r=n(7294).createContext(null);r.displayName="CardHeaderContext",t.Z=r}}]);
//# sourceMappingURL=component---src-pages-index-js-07c7bd09f1a058009cdb.js.map