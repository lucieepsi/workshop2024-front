import{a as ve}from"./chunk-F7XBNY6P.js";import{a as te}from"./chunk-IZG6I4SG.js";import{g as z}from"./chunk-AJPISUXH.js";import{a as ne}from"./chunk-LF5XB4YN.js";import{e as be}from"./chunk-JHI3MBHO.js";var ie,dn=r=>{if(ie===void 0){let o=r.style.animationName!==void 0,s=r.style.webkitAnimationName!==void 0;ie=!o&&s?"-webkit-":""}return ie},re=(r,o,s)=>{let m=o.startsWith("animation")?dn(r):"";r.style.setProperty(m+o,s)},q=(r=[],o)=>{if(o!==void 0){let s=Array.isArray(o)?o:[o];return[...r,...s]}return r},pn=r=>{let o,s,m,g,w,b,c=[],v=[],N=[],A=!1,f,Y={},H=[],$=[],G={},F=0,D=!1,x=!1,L,_,k,P=!0,W=!1,I=!0,t,M=!1,oe=r,Z=[],T=[],O=[],p=[],u=[],se=[],ae=[],ce=[],fe=[],le=[],E=[],Ce=typeof AnimationEffect=="function"||ne!==void 0&&typeof ne.AnimationEffect=="function",h=typeof Element=="function"&&typeof Element.prototype.animate=="function"&&Ce,ue=()=>E,we=e=>(u.forEach(n=>{n.destroy(e)}),Fe(e),p.length=0,u.length=0,c.length=0,Se(),A=!1,I=!0,t),Fe=e=>{me(),e&&_e()},Le=()=>{D=!1,x=!1,I=!0,L=void 0,_=void 0,k=void 0,F=0,W=!1,P=!0,M=!1},ke=()=>F!==0&&!M,de=(e,n)=>{let i=n.findIndex(a=>a.c===e);i>-1&&n.splice(i,1)},Pe=(e,n)=>(O.push({c:e,o:n}),t),J=(e,n)=>((n?.oneTimeCallback?T:Z).push({c:e,o:n}),t),Se=()=>(Z.length=0,T.length=0,t),me=()=>{h&&(E.forEach(e=>{e.cancel()}),E.length=0)},_e=()=>{se.forEach(e=>{e?.parentNode&&e.parentNode.removeChild(e)}),se.length=0},We=e=>(ae.push(e),t),Ie=e=>(ce.push(e),t),Te=e=>(fe.push(e),t),Ve=e=>(le.push(e),t),Re=e=>(v=q(v,e),t),De=e=>(N=q(N,e),t),xe=(e={})=>(Y=e,t),Me=(e=[])=>{for(let n of e)Y[n]="";return t},Oe=e=>(H=q(H,e),t),Ue=e=>($=q($,e),t),Be=(e={})=>(G=e,t),ze=(e=[])=>{for(let n of e)G[n]="";return t},Q=()=>w!==void 0?w:f?f.getFill():"both",U=()=>L!==void 0?L:b!==void 0?b:f?f.getDirection():"normal",X=()=>D?"linear":m!==void 0?m:f?f.getEasing():"linear",S=()=>x?0:_!==void 0?_:s!==void 0?s:f?f.getDuration():0,j=()=>g!==void 0?g:f?f.getIterations():1,ee=()=>k!==void 0?k:o!==void 0?o:f?f.getDelay():0,qe=()=>c,Ke=e=>(b=e,d(!0),t),Ne=e=>(w=e,d(!0),t),Ye=e=>(o=e,d(!0),t),He=e=>(m=e,d(!0),t),$e=e=>(!h&&e===0&&(e=1),s=e,d(!0),t),Ge=e=>(g=e,d(!0),t),Ze=e=>(f=e,t),Je=e=>{if(e!=null)if(e.nodeType===1)p.push(e);else if(e.length>=0)for(let n=0;n<e.length;n++)p.push(e[n]);else console.error("Invalid addElement value");return t},Qe=e=>{if(e!=null)if(Array.isArray(e))for(let n of e)n.parent(t),u.push(n);else e.parent(t),u.push(e);return t},Xe=e=>{let n=c!==e;return c=e,n&&je(c),t},je=e=>{h&&ue().forEach(n=>{let i=n.effect;if(i.setKeyframes)i.setKeyframes(e);else{let a=new KeyframeEffect(i.target,e,i.getTiming());n.effect=a}})},en=()=>{ae.forEach(a=>a()),ce.forEach(a=>a());let e=v,n=N,i=Y;p.forEach(a=>{let l=a.classList;e.forEach(y=>l.add(y)),n.forEach(y=>l.remove(y));for(let y in i)i.hasOwnProperty(y)&&re(a,y,i[y])})},nn=()=>{fe.forEach(l=>l()),le.forEach(l=>l());let e=P?1:0,n=H,i=$,a=G;p.forEach(l=>{let y=l.classList;n.forEach(C=>y.add(C)),i.forEach(C=>y.remove(C));for(let C in a)a.hasOwnProperty(C)&&re(l,C,a[C])}),_=void 0,L=void 0,k=void 0,Z.forEach(l=>l.c(e,t)),T.forEach(l=>l.c(e,t)),T.length=0,I=!0,P&&(W=!0),P=!0},B=()=>{F!==0&&(F--,F===0&&(nn(),f&&f.animationFinish()))},tn=()=>{p.forEach(e=>{let n=e.animate(c,{id:oe,delay:ee(),duration:S(),easing:X(),iterations:j(),fill:Q(),direction:U()});n.pause(),E.push(n)}),E.length>0&&(E[0].onfinish=()=>{B()})},ge=()=>{en(),c.length>0&&h&&tn(),A=!0},V=e=>{e=Math.min(Math.max(e,0),.9999),h&&E.forEach(n=>{n.currentTime=n.effect.getComputedTiming().delay+S()*e,n.pause()})},he=e=>{E.forEach(n=>{n.effect.updateTiming({delay:ee(),duration:S(),easing:X(),iterations:j(),fill:Q(),direction:U()})}),e!==void 0&&V(e)},d=(e=!1,n=!0,i)=>(e&&u.forEach(a=>{a.update(e,n,i)}),h&&he(i),t),rn=(e=!1,n)=>(u.forEach(i=>{i.progressStart(e,n)}),Ee(),D=e,A||ge(),d(!1,!0,n),t),on=e=>(u.forEach(n=>{n.progressStep(e)}),V(e),t),sn=(e,n,i)=>(D=!1,u.forEach(a=>{a.progressEnd(e,n,i)}),i!==void 0&&(_=i),W=!1,P=!0,e===0?(L=U()==="reverse"?"normal":"reverse",L==="reverse"&&(P=!1),h?(d(),V(1-n)):(k=(1-n)*S()*-1,d(!1,!1))):e===1&&(h?(d(),V(n)):(k=n*S()*-1,d(!1,!1))),e!==void 0&&!f&&ye(),t),Ee=()=>{A&&(h?E.forEach(e=>{e.pause()}):p.forEach(e=>{re(e,"animation-play-state","paused")}),M=!0)},an=()=>(u.forEach(e=>{e.pause()}),Ee(),t),cn=()=>{B()},fn=()=>{E.forEach(e=>{e.play()}),(c.length===0||p.length===0)&&B()},ln=()=>{h&&(V(0),he())},ye=e=>new Promise(n=>{e?.sync&&(x=!0,J(()=>x=!1,{oneTimeCallback:!0})),A||ge(),W&&(ln(),W=!1),I&&(F=u.length+1,I=!1);let i=()=>{de(a,T),n()},a=()=>{de(i,O),n()};J(a,{oneTimeCallback:!0}),Pe(i,{oneTimeCallback:!0}),u.forEach(l=>{l.play()}),h?fn():cn(),M=!1}),un=()=>{u.forEach(e=>{e.stop()}),A&&(me(),A=!1),Le(),O.forEach(e=>e.c(0,t)),O.length=0},pe=(e,n)=>{let i=c[0];return i!==void 0&&(i.offset===void 0||i.offset===0)?i[e]=n:c=[{offset:0,[e]:n},...c],t};return t={parentAnimation:f,elements:p,childAnimations:u,id:oe,animationFinish:B,from:pe,to:(e,n)=>{let i=c[c.length-1];return i!==void 0&&(i.offset===void 0||i.offset===1)?i[e]=n:c=[...c,{offset:1,[e]:n}],t},fromTo:(e,n,i)=>pe(e,n).to(e,i),parent:Ze,play:ye,pause:an,stop:un,destroy:we,keyframes:Xe,addAnimation:Qe,addElement:Je,update:d,fill:Ne,direction:Ke,iterations:Ge,duration:$e,easing:He,delay:Ye,getWebAnimations:ue,getKeyframes:qe,getFill:Q,getDirection:U,getDelay:ee,getIterations:j,getEasing:X,getDuration:S,afterAddRead:Te,afterAddWrite:Ve,afterClearStyles:ze,afterStyles:Be,afterRemoveClass:Ue,afterAddClass:Oe,beforeAddRead:We,beforeAddWrite:Ie,beforeClearStyles:Me,beforeStyles:xe,beforeRemoveClass:De,beforeAddClass:Re,onFinish:J,isRunning:ke,progressStart:rn,progressStep:on,progressEnd:sn}};var wn="ionViewWillEnter",Fn="ionViewDidEnter",Ln="ionViewWillLeave",kn="ionViewDidLeave",Pn="ionViewWillUnload",R=r=>{r.tabIndex=-1,r.focus()},K=r=>r.offsetParent!==null,mn=()=>({saveViewFocus:s=>{if(te.get("focusManagerPriority",!1)){let g=document.activeElement;g!==null&&s?.contains(g)&&g.setAttribute(Ae,"true")}},setViewFocus:s=>{let m=te.get("focusManagerPriority",!1);if(Array.isArray(m)&&!s.contains(document.activeElement)){let g=s.querySelector(`[${Ae}]`);if(g&&K(g)){R(g);return}for(let w of m)switch(w){case"content":let b=s.querySelector('main, [role="main"]');if(b&&K(b)){R(b);return}break;case"heading":let c=s.querySelector('h1, [role="heading"][aria-level="1"]');if(c&&K(c)){R(c);return}break;case"banner":let v=s.querySelector('header, [role="banner"]');if(v&&K(v)){R(v);return}break;default:ve(`Unrecognized focus manager priority value ${w}`);break}R(s)}}}),Ae="ion-last-focus";var Sn=mn();var _n=()=>new Promise(r=>z(()=>z(()=>r()))),gn=r=>be(void 0,null,function*(){let o=r;if(o){if(o.componentOnReady!=null){if((yield o.componentOnReady())!=null)return}else if(o.__registerHost!=null){yield new Promise(m=>z(m));return}yield Promise.all(Array.from(o.children).map(gn))}});var Wn=r=>{if(r.classList.contains("ion-page"))return r;let o=r.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return o||r};export{pn as a,wn as b,Fn as c,Ln as d,kn as e,Pn as f,_n as g,gn as h,Wn as i};
