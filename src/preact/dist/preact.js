var n,l,u,t,i,r,o,e,f={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function p(n){var l=n.parentNode;l&&l.removeChild(n)}function v(n,l,u){var t,i=arguments,r={};for(t in l)"key"!==t&&"ref"!==t&&(r[t]=l[t]);if(arguments.length>3)for(u=[u],t=3;t<arguments.length;t++)u.push(i[t]);if(null!=u&&(r.children=u),"function"==typeof n&&null!=n.defaultProps)for(t in n.defaultProps)void 0===r[t]&&(r[t]=n.defaultProps[t]);return h(n,r,l&&l.key,l&&l.ref,null)}function h(l,u,t,i,r){var o={type:l,props:u,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(o.__v=o),n.vnode&&n.vnode(o),o}function y(n){return n.children}function d(n,l){this.props=n,this.context=l}function x(n,l){if(null==l)return n.__?x(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?x(n):null}function m(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return m(n)}}function w(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!t++||r!==n.debounceRendering)&&((r=n.debounceRendering)||i)(k)}function k(){for(var n;t=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,t,i,r,o,e;n.__d&&(o=(r=(l=n).__v).__e,(e=l.__P)&&(u=[],(t=a({},r)).__v=t,i=C(e,r,t,l.__n,void 0!==e.ownerSVGElement,null,u,null==o?x(r):o),N(u,r),i!=o&&m(r)))})}function g(n,l,u,t,i,r,o,e,s,a){var v,d,m,w,k,g,_,b,A,P=t&&t.__k||c,N=P.length;for(s==f&&(s=null!=o?o[0]:N?x(t,0):null),u.__k=[],v=0;v<l.length;v++)if(null!=(w=u.__k[v]=null==(w=l[v])||"boolean"==typeof w?null:"string"==typeof w||"number"==typeof w?h(null,w,null,null,w):Array.isArray(w)?h(y,{children:w},null,null,null):null!=w.__e||null!=w.__c?h(w.type,w.props,w.key,null,w.__v):w)){if(w.__=u,w.__b=u.__b+1,null===(m=P[v])||m&&w.key==m.key&&w.type===m.type)P[v]=void 0;else for(d=0;d<N;d++){if((m=P[d])&&w.key==m.key&&w.type===m.type){P[d]=void 0;break}m=null}if(k=C(n,w,m=m||f,i,r,o,e,s,a),(d=w.ref)&&m.ref!=d&&(b||(b=[]),m.ref&&b.push(m.ref,null,w),b.push(d,w.__c||k,w)),null!=k){if(null==_&&(_=k),A=void 0,void 0!==w.__d)A=w.__d,w.__d=void 0;else if(o==m||k!=s||null==k.parentNode){n:if(null==s||s.parentNode!==n)n.appendChild(k),A=null;else{for(g=s,d=0;(g=g.nextSibling)&&d<N;d+=2)if(g==k)break n;n.insertBefore(k,s),A=s}"option"==u.type&&(n.value="")}s=void 0!==A?A:k.nextSibling,"function"==typeof u.type&&(u.__d=s)}else s&&m.__e==s&&s.parentNode!=n&&(s=x(m))}if(u.__e=_,null!=o&&"function"!=typeof u.type)for(v=o.length;v--;)null!=o[v]&&p(o[v]);for(v=N;v--;)null!=P[v]&&$(P[v],P[v]);if(b)for(v=0;v<b.length;v++)T(b[v],b[++v],b[++v])}function _(n,l,u,t,i){var r;for(r in u)"children"===r||"key"===r||r in l||A(n,r,null,u[r],t);for(r in l)i&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||A(n,r,l[r],u[r],t)}function b(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===s.test(l)?u+"px":null==u?"":u}function A(n,l,u,t,i){var r,o,e,f,c;if(i?"className"===l&&(l="class"):"class"===l&&(l="className"),"style"===l)if(r=n.style,"string"==typeof u)r.cssText=u;else{if("string"==typeof t&&(r.cssText="",t=null),t)for(f in t)u&&f in u||b(r,f,"");if(u)for(c in u)t&&u[c]===t[c]||b(r,c,u[c])}else"o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),e=l.toLowerCase(),l=(e in n?e:l).slice(2),u?(t||n.addEventListener(l,P,o),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,P,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!i&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u))}function P(l){this.l[l.type](n.event?n.event(l):l)}function C(l,u,t,i,r,o,e,f,c){var s,p,v,h,x,m,w,k,_,b,A,P=u.type;if(void 0!==u.constructor)return null;(s=n.__b)&&s(u);try{n:if("function"==typeof P){if(k=u.props,_=(s=P.contextType)&&i[s.__c],b=s?_?_.props.value:s.__:i,t.__c?w=(p=u.__c=t.__c).__=p.__E:("prototype"in P&&P.prototype.render?u.__c=p=new P(k,b):(u.__c=p=new d(k,b),p.constructor=P,p.render=j),_&&_.sub(p),p.props=k,p.state||(p.state={}),p.context=b,p.__n=i,v=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=a({},p.__s)),a(p.__s,P.getDerivedStateFromProps(k,p.__s))),h=p.props,x=p.state,v)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==h&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,b),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,b)||u.__v===t.__v){for(p.props=k,p.state=p.__s,u.__v!==t.__v&&(p.__d=!1),p.__v=u,u.__e=t.__e,u.__k=t.__k,p.__h.length&&e.push(p),s=0;s<u.__k.length;s++)u.__k[s]&&(u.__k[s].__=u);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,b),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(h,x,m)})}p.context=b,p.props=k,p.state=p.__s,(s=n.__r)&&s(u),p.__d=!1,p.__v=u,p.__P=l,s=p.render(p.props,p.state,p.context),null!=p.getChildContext&&(i=a(a({},i),p.getChildContext())),v||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(h,x)),A=null!=s&&s.type==y&&null==s.key?s.props.children:s,g(l,Array.isArray(A)?A:[A],u,t,i,r,o,e,f,c),p.base=u.__e,p.__h.length&&e.push(p),w&&(p.__E=p.__=null),p.__e=!1}else null==o&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z(t.__e,u,t,i,r,o,e,c);(s=n.diffed)&&s(u)}catch(l){u.__v=null,n.__e(l,u,t)}return u.__e}function N(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function z(n,l,u,t,i,r,o,e){var s,a,p,v,h,y=u.props,d=l.props;if(i="svg"===l.type||i,null!=r)for(s=0;s<r.length;s++)if(null!=(a=r[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,r[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=i?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),r=null,e=!1}if(null===l.type)y!==d&&n.data!=d&&(n.data=d);else{if(null!=r&&(r=c.slice.call(n.childNodes)),p=(y=u.props||f).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,!e){if(null!=r)for(y={},h=0;h<n.attributes.length;h++)y[n.attributes[h].name]=n.attributes[h].value;(v||p)&&(v&&p&&v.__html==p.__html||(n.innerHTML=v&&v.__html||""))}_(n,d,y,i,e),v?l.__k=[]:(s=l.props.children,g(n,Array.isArray(s)?s:[s],l,u,t,"foreignObject"!==l.type&&i,r,o,f,e)),e||("value"in d&&void 0!==(s=d.value)&&s!==n.value&&A(n,"value",s,y.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&A(n,"checked",s,y.checked,!1))}return n}function T(l,u,t){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,t)}}function $(l,u,t){var i,r,o;if(n.unmount&&n.unmount(l),(i=l.ref)&&(i.current&&i.current!==l.__e||T(i,null,u)),t||"function"==typeof l.type||(t=null!=(r=l.__e)),l.__e=l.__d=void 0,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){n.__e(l,u)}i.base=i.__P=null}if(i=l.__k)for(o=0;o<i.length;o++)i[o]&&$(i[o],u,t);null!=r&&p(r)}function j(n,l,u){return this.constructor(n,u)}function D(l,u,t){var i,r,e;n.__&&n.__(l,u),r=(i=t===o)?null:t&&t.__k||u.__k,l=v(y,null,[l]),e=[],C(u,(i?u:t||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,t&&!i?[t]:r?null:u.childNodes.length?c.slice.call(u.childNodes):null,e,t||f,i),N(e,l)}n={__e:function(n,l){for(var u,t;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(t=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(t=!0,u.componentDidCatch(n)),t)return w(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),w(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w(this))},d.prototype.render=y,u=[],t=0,i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=f,e=0,exports.render=D,exports.hydrate=function(n,l){D(n,l,o)},exports.createElement=v,exports.h=v,exports.Fragment=y,exports.createRef=function(){return{}},exports.isValidElement=l,exports.Component=d,exports.cloneElement=function(n,l){var u,t;for(t in l=a(a({},n.props),l),arguments.length>2&&(l.children=c.slice.call(arguments,2)),u={},l)"key"!==t&&"ref"!==t&&(u[t]=l[t]);return h(n.type,u,l.key||n.key,l.ref||n.ref,null)},exports.createContext=function(n){var l={},u={__c:"__cC"+e++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,i=this;return this.getChildContext||(t=[],this.getChildContext=function(){return l[u.__c]=i,l},this.shouldComponentUpdate=function(n){i.props.value!==n.value&&t.some(function(l){l.context=n.value,w(l)})},this.sub=function(n){t.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u.Provider.__=u,u},exports.toChildArray=function n(l){return null==l||"boolean"==typeof l?[]:Array.isArray(l)?c.concat.apply([],l.map(n)):[l]},exports._e=$,exports.options=n;
//# sourceMappingURL=preact.js.map