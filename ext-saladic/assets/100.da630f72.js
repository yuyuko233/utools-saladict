(window.saladictEntry=window.saladictEntry||[]).push([[100],{1327:function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var n=t(0),r=t.n(n),s=t(182),c=t(119),l=t(1),u=t(9);const i=new Set(["ar","ara","az","fa","he","iw","ku","ug","ur"]),o=r.a.memo(({source:e,lang:a})=>r.a.createElement("div",{className:"MachineTrans-Lines"},r.a.createElement(c.c,{src:e.tts}),e.paragraphs.map((e,t)=>r.a.createElement("p",{key:t,className:"MachineTrans-lang-"+a},e)))),m=r.a.memo(({source:e,lang:a})=>{const[t,s]=Object(n.useState)(!1),l=Object(n.useCallback)(()=>s(!1),[s]),u=Object(n.useRef)(null);return Object(n.useLayoutEffect)(()=>{if(t||!u.current)return;if(u.current.querySelectorAll("p").length>1)return void s(!0);const e=u.current.querySelector("p span");e&&e.getClientRects().length>1&&s(!0)},[]),r.a.createElement("div",{ref:u,className:"MachineTrans-Lines"},r.a.createElement(c.c,{src:e.tts}),t?r.a.createElement("div",{className:"MachineTrans-Lines-collapse MachineTrans-lang-"+a},r.a.createElement("button",{onClick:l},e.paragraphs.join(" "))):e.paragraphs.map((e,t)=>r.a.createElement("p",{key:t,className:"MachineTrans-lang-"+a},r.a.createElement("span",null,e))))}),h=e=>{const{trans:a,searchText:t,tl:c,sl:h}=e.result,[p,d]=Object(n.useState)(e.result.slInitial);return Object(s.a)(e.catalogSelect$,({key:a,value:t})=>{switch(a){case"showSl":d("full");break;case"sl":case"tl":e.searchText({id:e.result.id,payload:{sl:h,tl:c,[a]:t}});break;case"copySrc":l.a.send({type:"SET_CLIPBOARD",payload:e.result.searchText.paragraphs.join("\n")});break;case"copyTrans":l.a.send({type:"SET_CLIPBOARD",payload:e.result.trans.paragraphs.join("\n")})}}),e.result.requireCredential?function(){const{t:e}=Object(u.e)("content");return r.a.createElement(u.c,{message:e("machineTrans.login")},r.a.createElement("a",{href:browser.runtime.getURL("options.html?menuselected=DictAuths"),target:"_blank",rel:"nofollow noopener noreferrer"},e("machineTrans.dictAccount")))}():r.a.createElement("div",{className:i.has(h)||i.has(c)?"MachineTrans-has-rtl":void 0},r.a.createElement("div",{className:"MachineTrans-Text"},"full"===p?r.a.createElement(o,{source:t,lang:h}):"collapse"===p?r.a.createElement(m,{source:t,lang:h}):null,r.a.createElement(o,{source:a,lang:c})))}},640:function(e,a,t){"use strict";t.r(a);var n=t(1327);t.d(a,"default",(function(){return n.a}))}}]);