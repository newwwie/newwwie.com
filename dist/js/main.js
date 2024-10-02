(()=>{"use strict";var e,t={400:(e,t,n)=>{n.r(t),n.d(t,{Component:()=>y,Fragment:()=>g,cloneElement:()=>B,createContext:()=>O,createElement:()=>m,createRef:()=>v,h:()=>m,hydrate:()=>E,isValidElement:()=>i,options:()=>r,render:()=>A,toChildArray:()=>T});var o,r,s,i,l,a,c,u={},p=[],d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h(e,t){for(var n in t)e[n]=t[n];return e}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function m(e,t,n){var r,s,i,l={};for(i in t)"key"==i?r=t[i]:"ref"==i?s=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?o.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return f(e,l,r,s,null)}function f(e,t,n,o,i){var l={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++s:i};return null==i&&null!=r.vnode&&r.vnode(l),l}function v(){return{current:null}}function g(e){return e.children}function y(e,t){this.props=e,this.context=t}function w(e,t){if(null==t)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?w(e):null}function k(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return k(e)}}function b(e){(!e.__d&&(e.__d=!0)&&l.push(e)&&!x.__r++||a!==r.debounceRendering)&&((a=r.debounceRendering)||setTimeout)(x)}function x(){for(var e;x.__r=l.length;)e=l.sort((function(e,t){return e.__v.__b-t.__v.__b})),l=[],e.some((function(e){var t,n,o,r,s,i;e.__d&&(s=(r=(t=e).__v).__e,(i=t.__P)&&(n=[],(o=h({},r)).__v=r.__v+1,N(i,r,o,t.__n,void 0!==i.ownerSVGElement,null!=r.__h?[s]:null,n,null==s?w(r):s,r.__h),M(n,r),r.__e!=s&&k(r)))}))}function j(e,t,n,o,r,s,i,l,a,c){var d,h,_,m,v,y,k,b=o&&o.__k||p,x=b.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(m=n.__k[d]=null==(m=t[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?f(null,m,null,null,m):Array.isArray(m)?f(g,{children:m},null,null,null):m.__b>0?f(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(_=b[d])||_&&m.key==_.key&&m.type===_.type)b[d]=void 0;else for(h=0;h<x;h++){if((_=b[h])&&m.key==_.key&&m.type===_.type){b[h]=void 0;break}_=null}N(e,m,_=_||u,r,s,i,l,a,c),v=m.__e,(h=m.ref)&&_.ref!=h&&(k||(k=[]),_.ref&&k.push(_.ref,null,m),k.push(h,m.__c||v,m)),null!=v?(null==y&&(y=v),"function"==typeof m.type&&m.__k===_.__k?m.__d=a=S(m,a,e):a=C(e,m,_,b,v,a),"function"==typeof n.type&&(n.__d=a)):a&&_.__e==a&&a.parentNode!=e&&(a=w(_))}for(n.__e=y,d=x;d--;)null!=b[d]&&("function"==typeof n.type&&null!=b[d].__e&&b[d].__e==n.__d&&(n.__d=w(o,d+1)),L(b[d],b[d]));if(k)for(d=0;d<k.length;d++)W(k[d],k[++d],k[++d])}function S(e,t,n){for(var o,r=e.__k,s=0;r&&s<r.length;s++)(o=r[s])&&(o.__=e,t="function"==typeof o.type?S(o,t,n):C(n,o,o,r,o.__e,t));return t}function T(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){T(e,t)})):t.push(e)),t}function C(e,t,n,o,r,s){var i,l,a;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(null==n||r!=s||null==r.parentNode)e:if(null==s||s.parentNode!==e)e.appendChild(r),i=null;else{for(l=s,a=0;(l=l.nextSibling)&&a<o.length;a+=2)if(l==r)break e;e.insertBefore(r,s),i=s}return void 0!==i?i:r.nextSibling}function D(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||d.test(t)?n:n+"px"}function I(e,t,n,o,r){var s;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||D(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||D(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])s=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?o||e.addEventListener(t,s?P:U,s):e.removeEventListener(t,s?P:U,s);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function U(e){this.l[e.type+!1](r.event?r.event(e):e)}function P(e){this.l[e.type+!0](r.event?r.event(e):e)}function N(e,t,n,o,s,i,l,a,c){var u,p,d,_,m,f,v,w,k,b,x,S,T,C=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(c=n.__h,a=t.__e=n.__e,t.__h=null,i=[a]),(u=r.__b)&&u(t);try{e:if("function"==typeof C){if(w=t.props,k=(u=C.contextType)&&o[u.__c],b=u?k?k.props.value:u.__:o,n.__c?v=(p=t.__c=n.__c).__=p.__E:("prototype"in C&&C.prototype.render?t.__c=p=new C(w,b):(t.__c=p=new y(w,b),p.constructor=C,p.render=z),k&&k.sub(p),p.props=w,p.state||(p.state={}),p.context=b,p.__n=o,d=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=C.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=h({},p.__s)),h(p.__s,C.getDerivedStateFromProps(w,p.__s))),_=p.props,m=p.state,d)null==C.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==C.getDerivedStateFromProps&&w!==_&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(w,b),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(w,p.__s,b)||t.__v===n.__v){p.props=w,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&l.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(w,p.__s,b),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(_,m,f)}))}if(p.context=b,p.props=w,p.__v=t,p.__P=e,x=r.__r,S=0,"prototype"in C&&C.prototype.render)p.state=p.__s,p.__d=!1,x&&x(t),u=p.render(p.props,p.state,p.context);else do{p.__d=!1,x&&x(t),u=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++S<25);p.state=p.__s,null!=p.getChildContext&&(o=h(h({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(f=p.getSnapshotBeforeUpdate(_,m)),T=null!=u&&u.type===g&&null==u.key?u.props.children:u,j(e,Array.isArray(T)?T:[T],t,n,o,s,i,l,a,c),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),v&&(p.__E=p.__=null),p.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=H(n.__e,t,n,o,s,i,l,c);(u=r.diffed)&&u(t)}catch(e){t.__v=null,(c||null!=i)&&(t.__e=a,t.__h=!!c,i[i.indexOf(a)]=null),r.__e(e,t,n)}}function M(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function H(e,t,n,r,s,i,l,a){var c,p,d,h=n.props,m=t.props,f=t.type,v=0;if("svg"===f&&(s=!0),null!=i)for(;v<i.length;v++)if((c=i[v])&&"setAttribute"in c==!!f&&(f?c.localName===f:3===c.nodeType)){e=c,i[v]=null;break}if(null==e){if(null===f)return document.createTextNode(m);e=s?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,m.is&&m),i=null,a=!1}if(null===f)h===m||a&&e.data===m||(e.data=m);else{if(i=i&&o.call(e.childNodes),p=(h=n.props||u).dangerouslySetInnerHTML,d=m.dangerouslySetInnerHTML,!a){if(null!=i)for(h={},v=0;v<e.attributes.length;v++)h[e.attributes[v].name]=e.attributes[v].value;(d||p)&&(d&&(p&&d.__html==p.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if(function(e,t,n,o,r){var s;for(s in n)"children"===s||"key"===s||s in t||I(e,s,null,n[s],o);for(s in t)r&&"function"!=typeof t[s]||"children"===s||"key"===s||"value"===s||"checked"===s||n[s]===t[s]||I(e,s,t[s],n[s],o)}(e,m,h,s,a),d)t.__k=[];else if(v=t.props.children,j(e,Array.isArray(v)?v:[v],t,n,r,s&&"foreignObject"!==f,i,l,i?i[0]:n.__k&&w(n,0),a),null!=i)for(v=i.length;v--;)null!=i[v]&&_(i[v]);a||("value"in m&&void 0!==(v=m.value)&&(v!==e.value||"progress"===f&&!v||"option"===f&&v!==h.value)&&I(e,"value",v,h.value,!1),"checked"in m&&void 0!==(v=m.checked)&&v!==e.checked&&I(e,"checked",v,h.checked,!1))}return e}function W(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function L(e,t,n){var o,s;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||W(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(s=0;s<o.length;s++)o[s]&&L(o[s],t,"function"!=typeof e.type);n||null==e.__e||_(e.__e),e.__e=e.__d=void 0}function z(e,t,n){return this.constructor(e,n)}function A(e,t,n){var s,i,l;r.__&&r.__(e,t),i=(s="function"==typeof n)?null:n&&n.__k||t.__k,l=[],N(t,e=(!s&&n||t).__k=m(g,null,[e]),i||u,u,void 0!==t.ownerSVGElement,!s&&n?[n]:i?null:t.firstChild?o.call(t.childNodes):null,l,!s&&n?n:i?i.__e:t.firstChild,s),M(l,e)}function E(e,t){A(e,t,E)}function B(e,t,n){var r,s,i,l=h({},e.props);for(i in t)"key"==i?r=t[i]:"ref"==i?s=t[i]:l[i]=t[i];return arguments.length>2&&(l.children=arguments.length>3?o.call(arguments,2):n),f(e.type,l,r||e.key,s||e.ref,null)}function O(e,t){var n={__c:t="__cC"+c++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,o;return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(b)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}o=p.slice,r={__e:function(e,t,n,o){for(var r,s,i;t=t.__;)if((r=t.__c)&&!r.__)try{if((s=r.constructor)&&null!=s.getDerivedStateFromError&&(r.setState(s.getDerivedStateFromError(e)),i=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,o||{}),i=r.__d),i)return r.__E=r}catch(t){e=t}throw e}},s=0,i=function(e){return null!=e&&void 0===e.constructor},y.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof e&&(e=e(h({},n),this.props)),e&&h(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),b(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},y.prototype.render=g,l=[],x.__r=0,c=0},584:(e,t,n)=>{n.r(t),n.d(t,{Fragment:()=>o.Fragment,jsx:()=>s,jsxDEV:()=>s,jsxs:()=>s});var o=n(400),r=0;function s(e,t,n,s,i){var l,a,c={};for(a in t)"ref"==a?l=t[a]:c[a]=t[a];var u={type:e,props:c,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--r,__source:i,__self:s};if("function"==typeof e&&(l=e.defaultProps))for(a in l)void 0===c[a]&&(c[a]=l[a]);return o.options.vnode&&o.options.vnode(u),u}},198:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Communities=void 0;var o=n(584),r=n(400),s=n(839),i=n(403);t.Communities=function(){return i.CommunityData.map((function(e){return(0,o.jsx)(s.CommunityCard,{data:e})}))},(0,r.render)((0,o.jsx)(t.Communities,{}),document.getElementById("groups"))},839:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CommunityCard=void 0;var o=n(584);t.CommunityCard=function(e){var t=e.data,n=t.name,r=t.location,s=t.period,i=s.interval,l=s.day,a=s.weekDay,c=t.links,u=c.twitter,p=c.facebook,d=c.website,h=c.meetUp,_=c.linkedIn,m=t.demographic,f=t.format;return(0,o.jsxs)("div",{class:"card",children:[(0,o.jsx)("h4",{children:(0,o.jsx)("a",{href:d||h,children:n})}),(0,o.jsxs)("dl",{children:[(0,o.jsx)("dt",{children:"Links:"}),(0,o.jsx)("dd",{children:(0,o.jsxs)("ul",{children:[_?(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:_,rel:"external",children:"LinkedIn"})}):"",p?(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:p,rel:"external",children:"Facebook"})}):"",h?(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:h,rel:"external",children:"MeetUp"})}):"",u?(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:u,rel:"external",children:"Twitter"})}):""]})}),(0,o.jsx)("dt",{children:"When:"}),(0,o.jsxs)("dd",{children:[i,", ",a," ",l]}),(0,o.jsx)("dt",{children:"Where:"}),(0,o.jsx)("dd",{children:r}),(0,o.jsx)("dt",{children:"Who:"}),(0,o.jsx)("dd",{children:m}),(0,o.jsx)("dt",{children:"Format:"}),(0,o.jsx)("dd",{children:f})]})]})}},403:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CommunityData=void 0,t.CommunityData=[{name:"Newcastle Coders Group",location:"ICT Building, University of Newcastle",period:{interval:"Monthly",day:"2nd",weekDay:"Wed"},links:{twitter:"https://twitter.com/ncgau",facebook:"https://www.facebook.com/groups/ncgau/",website:"http://ncg.asn.au/",meetUp:"http://www.meetup.com/Newcastle-Coders-Group/"},demographic:"Anyone with an interest in learning about the latest technology as well as new approaches and techniques to designing and developing software.",format:"Group discussion of recent tech News. Organised presentations from local and/or visiting speakers. Socialising over pizza."},{name:"Newcastle Women and Gender Diverse People in Tech",location:"NewyTechPeople Office",period:{interval:"Monthly",day:"2nd",weekDay:"Thurs"},links:{meetUp:"https://www.meetup.com/newcastle-women-and-gender-diverse-people-in-tech/"},demographic:"Women and Gender Diverse people who are in the technology field, a field adjacent to it, or have an interest in tech and would like to meet some lovely people who feel the same.",format:"The format varies but will often include networking/socialising and a presentation."},{name:"Newcastle Cybersecurity Group",location:"University of Newcastle I2N Hub Honeysuckle",period:{interval:"Monthly",day:"4th",weekDay:"Thurs"},links:{linkedIn:"https://www.linkedin.com/company/newcastlecybersecuritygroup/",meetUp:"https://www.meetup.com/Newcastle-Cyber-Security-Group/"},demographic:"Anyone interested in or practicing cybersecurity! Our members include students, consultants, engineers, penetration testers, company directors, and more!",format:"You eat pizza from Bella Italia while a local expert presents. Our presenters cover broad topics ranging from GRC, Web Security, Fraud, Security Culture, Videogame Hacking, Linux Internals, and more! We then head over to Honeysuckle Hotel for networking and a few drinks post-event."},{name:"Newcatle IoT Pioneers",location:"Stag and Hunter, Mayfield",period:{interval:"Monthly",day:"1st",weekDay:"Thurs"},links:{meetUp:"https://www.meetup.com/Newcastle-IoT-Pioneers/"},demographic:"In or around Newcastle, Lake Macquarie or the Hunter? Keen to make a splash in the Internet of Things world? Then this Meetup is for you!",format:"Organised presentations"},{name:"Hunter Data Analytics",location:"Check meetup event details (but usually at University of Newcastle City Campus)",period:{interval:"Monthly",day:"3rd",weekDay:"Thurs"},links:{meetUp:"https://www.meetup.com/Hunter-Data-Analytics/",linkedIn:"https://www.linkedin.com/company/hunter-data-analytics/",twitter:"https://twitter.com/hunteranalytics"},demographic:"Data analysts, data scientists, data engineers, statisticians, computer scientists, machine learning engineers etc",format:"Networking/chats, followed by organised presentations, followed by pub."}]},105:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Meetup=void 0;var o=n(584),r=n(400),s=n(822),i=function(){function e(){this.render(s.events)}return e.prototype.render=function(e){e.length>0?(0,r.render)(this.renderList(e),document.getElementById("meetupEvents")):(0,r.render)((0,o.jsx)("li",{children:(0,o.jsx)("p",{children:"It appears there are no upcoming events. Check back soon."})}),document.getElementById("meetupEvents"))},e.prototype.renderList=function(e){var t=this;return e.map((function(e,n){var r=e.event,s=e.group,i=new Date(r.dateTime),l=t.niceDay(i.getDay()),a=t.niceMonth(i.getMonth()),c=t.niceTime(i);return(0,o.jsxs)("li",{class:"eventItem",children:[(0,o.jsxs)("div",{class:"eventItem-left",children:[t.renderImage(s,r.photoUrl),(0,o.jsxs)("div",{class:"eventItem-start",children:[(0,o.jsx)("span",{class:"eventItem-start_day",children:l}),(0,o.jsx)("span",{class:"eventItem-start_time",children:c}),(0,o.jsxs)("span",{class:"eventItem-start_month",children:[i.getDate()," ",a]}),(0,o.jsx)("span",{class:"eventItem-start_year",children:i.getFullYear()})]})]}),(0,o.jsxs)("div",{class:"eventItem-right",children:[(0,o.jsx)("p",{class:"eventItem-title",children:r.title}),(0,o.jsxs)("p",{class:"eventItem-group",children:["Hosted by: ",(0,o.jsx)("a",{href:"https://meetup.com/".concat(s.urlname),children:s.name})]}),(0,o.jsxs)("p",{class:"eventItem-description",children:[r.description.substring(0,240),"..."]}),(0,o.jsxs)("ul",{class:"eventItem-stats",children:[(0,o.jsxs)("li",{class:"eventItem-stats_rsvp",title:"Number of people who have RSVP'd vs. the total number of spots",children:[(0,o.jsx)("svg",{version:"1.1",class:"eventItem-stats_icon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 482.9 482.9",style:"enable-background:new 0 0 482.9 482.9;",children:(0,o.jsx)("g",{children:(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{d:"M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2zM164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z"}),(0,o.jsx)("path",{d:"M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3C447,415.5,446.9,388.8,446.8,383.6z"})]})})}),r.going," / ",r.maxTickets?r.maxTickets:"∞"]}),(0,o.jsxs)("li",{class:"eventItem-stats_duration",title:"Duration of the event",children:[(0,o.jsx)("svg",{version:"1.1",class:"eventItem-stats_icon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 60 60",style:"enable-background:new 0 0 60 60;",children:(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{d:"M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30\n                                            S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"}),(0,o.jsx)("path",{d:"M30,6c-0.552,0-1,0.447-1,1v23H14c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1V7C31,6.447,30.552,6,30,6z"})]})}),t.parseIsoDuration(r.duration)]}),(0,o.jsxs)("li",{class:"eventItem-stats_location",title:"Location of the event",children:[(0,o.jsx)("svg",{version:"1.1",class:"eventItem-stats_icon",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 54.757 54.757",style:"enable-background:new 0 0 54.757 54.757;",children:(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{d:"M27.557,12c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S31.416,12,27.557,12z M27.557,24c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S30.314,24,27.557,24z"}),(0,o.jsx)("path",{d:"M40.94,5.617C37.318,1.995,32.502,0,27.38,0c-5.123,0-9.938,1.995-13.56,5.617c-6.703,6.702-7.536,19.312-1.804,26.952L27.38,54.757L42.721,32.6C48.476,24.929,47.643,12.319,40.94,5.617z M41.099,31.431L27.38,51.243L13.639,31.4C8.44,24.468,9.185,13.08,15.235,7.031C18.479,3.787,22.792,2,27.38,2s8.901,1.787,12.146,5.031C45.576,13.08,46.321,24.468,41.099,31.431z"})]})}),t.renderLocationLink(r.venue)]})]})]}),(0,o.jsx)("a",{class:"button",href:r.eventUrl,children:"More info"})]})}))},e.prototype.renderImage=function(e,t){var n="",r="eventItem-image";return e.groupPhoto?n=(0,o.jsx)("img",{src:this.renderImageLink(e.groupPhoto),alt:e.name,class:"eventItem-groupPhoto"}):t?n=(0,o.jsx)("img",{src:t,alt:e.name,class:"eventItem-image_photo"}):r+=" eventItem-image_notSupplied",(0,o.jsx)("div",{class:r,children:n})},e.prototype.renderLocationLink=function(e){return e?e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")?(0,o.jsxs)("a",{href:"https://www.google.com/maps/search/".concat(encodeURIComponent(e.name),"/@").concat(e.lat,",").concat(e.lng,",16z"),target:"_blank",children:[(0,o.jsxs)("span",{children:[e.address,", ",e.city," -"," "]}),"View on Google"]}):(0,o.jsxs)("em",{children:[(0,o.jsxs)("span",{children:[e.address,","]})," ",e.city]}):(0,o.jsx)("em",{children:"Not specified"})},e.prototype.renderImageLink=function(e,t){return void 0===t&&(t="676x380"),"".concat(e.baseUrl).concat(e.id,"/").concat(t,".webp")},e.prototype.niceTime=function(e){try{return e.toLocaleString("en-US",{hour:"numeric",hour12:!0,minute:"2-digit"})}catch(n){var t=this.niceHours(e.getHours());return"".concat(t,":").concat(e.getMinutes())}},e.prototype.niceHours=function(e){return(e+24)%12||12},e.prototype.niceDay=function(e,t){void 0===t&&(t=!0);var n={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};return!0===t?n[e].slice(0,3):n[e]},e.prototype.niceMonth=function(e,t){void 0===t&&(t=!0);var n={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"};return!0===t?n[e].slice(0,3):n[e]},e.prototype.parseIsoDuration=function(e){var t=e.match(/P((?<years>\d+)Y)?((?<months>\d+)M)?((?<days>\d+)D)?T((?<hours>\d+)H)?((?<minutes>\d+)M)?((?<seconds>\d+)S)?/).groups;return Object.keys(t).reduce((function(e,n){return t[n]?e+"".concat(t[n]," ").concat(n):e}),"")},e}();t.Meetup=i},822:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.events=void 0,t.events=[{event:{title:"data.OCT <- TBD Save the date",description:"**EOI Call for Speakers** 🗣️🎙️\n[https://forms.gle/fnWkDmzmdPvs7z7WA](https://forms.gle/fnWkDmzmdPvs7z7WA)\nWe are yet to lock in a speaker for this month. You can always submit an expression of interest through the above Google Form or join [Newwwie Slack](https://newwwie.com/#invite) and call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U)\n\n🗣️**Talk Description**: TBD\n\n🎙️**Speaker Bio**: TBD\n\n🏢 **Venue**: University's Q building in Honeysuckle, Level 2\n\n[https://goo.gl/maps/35LwcLhKV1nvoFAh7](https://goo.gl/maps/35LwcLhKV1nvoFAh7)\n\n* We will meet in the Level 2 Seminar Space.\n* You'll need to enter through the main doors on Worth Place, and will be directed to the elevators to join the meetup.\n* If you can't get in, please signal to the security guard that should be at the front desk that your here for the meetup.\n\nPARKING: The closest parking is Wright Lane Carpark.\n\n[https://goo.gl/maps/rj6Yg8EkpjYzUmbi7](https://goo.gl/maps/rj6Yg8EkpjYzUmbi7)\n\nAfter 5pm it is free and is a 400m - 5 minute walk.\n\n##-------------------------------------------------------------------##\n\n🕠 TIME: 5.30pm - 7.30pm\n\nFOOD: 🍕 + 🥤\n\n* Wood fired pizza, sponsored by NewyTechPeople\n* Soft drinks\n\nSCHEDULE:\n\n* 5:30pm: Networking + Food + Drinks\n\n(Don't stress if you are held up in traffic)\n\n* 6:15pm: Presentation\n* 7:15pm: Packing up + Bonus questions\n* 7:30pm: Close\n* 7:30pm+: [Unofficially] anyone wanting to continue chatting, we usually head to [Honeysuckle Hotel](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6) which is a short walk from the venue.\n\n##-------------------------------------------------------------------##\n**CHARTS 📊 & CHATS 🍻 - Social Drinks**\n*Backup plan in case of no speaker lined up.*\n##-------------------------------------------------------------------##\n\nNo speaker this month, but look forward to more talks in coming months.\nThe Honeysuckle Hotel is where we usually go after our events at the university's Q Building. There is no booking but we will try and gather some tables, likely out the back.\nIf you can't find us, call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U) and we'll direct you.\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\n🕒 **When**: Third Thursday of the Month 5.30pm-7.30pm\n🏢 **Venue**: The Honeysuckle Hotel, Honeysuckle Drive, Newcastle\n[https://maps.app.goo.gl/z3e4JvSvYWb6quwn6](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6)",dateTime:"2024-10-17T17:30+11:00",eventUrl:"https://www.meetup.com/hunter-data-analytics/events/301848989",going:6,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/521972291/676x380.webp",venue:{name:"Q Building, The University of Newcastle",lat:-32.926277,lng:151.7683,address:"16B Honeysuckle Dr",city:"Newcastle"}},group:{name:"Hunter Data Analytics",urlname:"hunter-data-analytics",groupPhoto:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"November @ SSW",description:"In November we'll be at the SSW office with an SSW speaker. We're a bit light on details at the moment but we're making sure you know to set aside the date.",dateTime:"2024-11-06T18:00+11:00",eventUrl:"https://www.meetup.com/newcastle-coders-group/events/302897230",going:2,maxTickets:0,duration:"PT3H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/505406540/676x380.webp",venue:{name:"SSW Newcastle - Enterprise Software Development",lat:-32.926857,lng:151.77159,address:"432 Hunter St",city:"Newcastle"}},group:{name:"Newcastle Coders Group",urlname:"newcastle-coders-group",groupPhoto:{id:"505406540",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"505406540",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"data.NOV <- TBD Save the date",description:"**EOI Call for Speakers** 🗣️🎙️\n[https://forms.gle/fnWkDmzmdPvs7z7WA](https://forms.gle/fnWkDmzmdPvs7z7WA)\nWe are yet to lock in a speaker for this month. You can always submit an expression of interest through the above Google Form or join [Newwwie Slack](https://newwwie.com/#invite) and call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U)\n\n🗣️**Talk Description**: TBD\n\n🎙️**Speaker Bio**: TBD\n\n🏢 **Venue**: University's Q building in Honeysuckle\n\n[https://goo.gl/maps/35LwcLhKV1nvoFAh7](https://goo.gl/maps/35LwcLhKV1nvoFAh7)\n\n* We will meet in the Level 2 Seminar Space.\n* You'll need to enter through the main doors on Worth Place, and will be directed to the elevators to join the meetup.\n* If you can't get in, please signal to the security guard that should be at the front desk that your here for the meetup.\n\nPARKING: The closest parking is Wright Lane Carpark.\n\n[https://goo.gl/maps/rj6Yg8EkpjYzUmbi7](https://goo.gl/maps/rj6Yg8EkpjYzUmbi7)\n\nAfter 5pm it is free and is a 400m - 5 minute walk.\n\n##-------------------------------------------------------------------##\n\n🕠 TIME: 5.30pm - 7.30pm\n\nFOOD: 🍕 + 🥤\n\n* Wood fired pizza, sponsored by NewyTechPeople\n* Soft drinks\n\nSCHEDULE:\n\n* 5:30pm: Networking + Food + Drinks\n\n(Don't stress if you are held up in traffic)\n\n* 6:15pm: Presentation\n* 7:15pm: Packing up + Bonus questions\n* 7:30pm: Close\n* 7:30pm+: [Unofficially] anyone wanting to continue chatting, we usually head to [Honeysuckle Hotel](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6) which is a short walk from the venue.\n\n##-------------------------------------------------------------------##\n**CHARTS 📊 & CHATS 🍻 - Social Drinks**\n*Backup plan in case of no speaker lined up.*\n##-------------------------------------------------------------------##\n\nNo speaker this month, but look forward to more talks in coming months.\nThe Honeysuckle Hotel is where we usually go after our events at the university's Q Building. There is no booking but we will try and gather some tables, likely out the back.\nIf you can't find us, call out in the [Newwwie Slack #data-science channel](https://newwwie.slack.com/archives/CBD021X0U) and we'll direct you.\n\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\\-\n🕒 **When**: Third Thursday of the Month 5.30pm-7.30pm\n🏢 **Venue**: The Honeysuckle Hotel, Honeysuckle Drive, Newcastle\n[https://maps.app.goo.gl/z3e4JvSvYWb6quwn6](https://maps.app.goo.gl/z3e4JvSvYWb6quwn6)",dateTime:"2024-11-21T17:30+11:00",eventUrl:"https://www.meetup.com/hunter-data-analytics/events/301849003",going:2,maxTickets:0,duration:"PT2H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/521973471/676x380.webp",venue:{name:"Q Building, The University of Newcastle",lat:-32.926277,lng:151.7683,address:"16B Honeysuckle Dr",city:"Newcastle"}},group:{name:"Hunter Data Analytics",urlname:"hunter-data-analytics",groupPhoto:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"483576656",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}},{event:{title:"December: Newwwie tech trivia",description:"We're bringing back tech trivia in December.\nIt's the same deal as the last few years, a fun, social way to end out the year.\nThe format will be 3 rounds, with prizes per round.\nPlenty of pizza and drinks, thanks to our sponsors.\n\nMore details to come.",dateTime:"2024-12-03T18:00+11:00",eventUrl:"https://www.meetup.com/newcastle-coders-group/events/302897285",going:1,maxTickets:0,duration:"PT3H",imageUrl:"https://secure-content.meetupstatic.com/images/classic-events/505406540/676x380.webp",venue:null},group:{name:"Newcastle Coders Group",urlname:"newcastle-coders-group",groupPhoto:{id:"505406540",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null},logo:{id:"505406540",baseUrl:"https://secure-content.meetupstatic.com/images/classic-events/",preview:null}}}]}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=o(198),new(o(105).Meetup),new e.Communities})();