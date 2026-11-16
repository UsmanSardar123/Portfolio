const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,G=!!(window.gsap&&window.ScrollTrigger)&&!RM;
$('#yr').textContent=new Date().getFullYear();

/* ---- data ---- */
const P=[
 {k:'Featured full-stack project',b:'React Native + React + MERN',t:'Streaming App',l:['Built a full-stack video streaming platform with a React Native mobile app for viewers and a web-based React admin dashboard for managing the platform.','Developed the Node.js/Express.js backend with RESTful APIs and MongoDB, serving both the mobile app and the admin dashboard in one end-to-end MERN architecture.'],s:['React Native','React.js','Node.js','Express.js','MongoDB','REST APIs']},
 {k:'Personal project',b:'Flutter',t:'Time Explorer',g:'https://github.com/UsmanSardar123/time-explorer',l:['Developed a cross-platform history learning app with interactive lessons across multiple historical eras and gamified progress tracking to boost engagement and retention.','Integrated OpenAI and Gemini REST APIs for real-time Q&A with historical personas, using Clean Architecture and BLoC/Cubit.'],s:['Flutter','Firebase','OpenAI API','Gemini API','BLoC/Cubit','Clean Architecture']},
 {k:'Personal project',b:'Flutter',t:'Smart Task Manager',g:'https://github.com/UsmanSardar123/smart-task-manager',l:['Built a full CRUD task app with offline-first SQLite storage synced to Firebase.','Added secure Firebase Authentication and responsive layouts for varied screen sizes.'],s:['Flutter','SQLite','Firebase','REST API']},
 {k:'Personal project',b:'Flutter',t:'Weather Forecast Application',g:'https://github.com/UsmanSardar123/weather-forecast-app',l:['Built a real-time weather app consuming OpenWeatherMap REST APIs for live, location-based forecasts.','Applied Clean Architecture, the Repository Pattern and dynamic UI theming.'],s:['Flutter','REST API','OpenWeatherMap API','Repository Pattern']}
];
const S=[
 ['Mobile development','Flutter, React Native, Android SDK, BLoC / Cubit, Redux, Context API, Responsive & Adaptive UI, Offline-First Architecture'],
 ['Web & backend (MERN)','MongoDB, Express.js, React.js, Node.js, RESTful API Design, Authentication, Mongoose'],
 ['Languages','Dart, JavaScript (ES6+), TypeScript, Python, Java, SQL'],
 ['Architecture & patterns','Clean Architecture, Repository Pattern, State Management, Modular Design'],
 ['CMS & e-commerce','WordPress, Shopify, Website Customization, Responsive Web Design'],
 ['Databases & cloud','MongoDB, Firebase (Firestore, Auth), Supabase, MySQL, SQLite, Hive, Cloudinary'],
 ['APIs & integrations','REST APIs, OpenAI API, Gemini API, OpenWeatherMap API, Third-Party API Integration'],
 ['Tools','Git, GitHub, Postman, Android Studio, VS Code, Firebase Console, npm, Pub.dev']
];
const ch=a=>a.map(x=>`<span class="chip">${x}</span>`).join('');
$('#pl').innerHTML=P.map((p,i)=>`<article class="pr"><button class="ph" aria-expanded="false"><span class="mono">0${i+1}</span><h3 class="D">${p.t}</h3><span class="mono bd">${p.b}</span><i>+</i></button><div class="pd"><div class="pi"><span class="mono">${p.k}<br>${p.b}</span><ul>${p.l.map(x=>`<li>${x}</li>`).join('')}</ul><div>${ch(p.s)}${p.g?`<br><a class="chip gh mg" href="${p.g}" target="_blank" rel="noopener">View on GitHub ↗</a>`:''}</div></div></div></article>`).join('');
$('#orb').innerHTML=P.map((p,i)=>`<div class="oc" data-i="${i}"><span class="mono">0${i+1} · ${p.b}</span><h3 class="D">${p.t}</h3>${ch(p.s.slice(0,3))}</div>`).join('');
$('#sg').innerHTML=S.map((s,i)=>`<div class="sk"><h4 class="mono">0${i+1} — ${s[0]}</h4>${ch(s[1].split(', '))}</div>`).join('');
const mq=['Flutter','React Native','MERN Stack','Clean Architecture','Offline-First','Firebase'];
$('#mq').innerHTML=[...mq,...mq].map(x=>`<span>${x}</span>`).join('');


/* ---- generated project artwork (SVG) ---- */
const art=(i,a,b,label,body)=>`<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient><pattern id="dp${i}" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.4" fill="#fff" opacity=".22"/></pattern></defs><rect width="400" height="500" fill="url(#g${i})"/><rect width="400" height="500" fill="url(#dp${i})"/>${body}<text x="24" y="474" font-family="Fira Code" font-size="12" fill="#fff" opacity=".85" letter-spacing="2">${label}</text></svg>`;
const IMG=[
 art(0,'#1e1b4b','#38bdf8','01 / STREAMING APP',`<rect x="196" y="150" width="170" height="130" rx="14" fill="#0b1220" opacity=".85"/><rect x="212" y="166" width="62" height="8" rx="4" fill="#fff" opacity=".5"/><path d="M212 256l30-40 28 22 34-52 40 30" stroke="#10e78c" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="70" y="100" width="150" height="300" rx="26" fill="#0b1220" stroke="#fff" stroke-opacity=".55" stroke-width="3"/><rect x="82" y="146" width="126" height="86" rx="10" fill="#818cf8"/><circle cx="145" cy="189" r="24" fill="#0b1220" opacity=".55"/><path d="M137 177l22 12-22 12z" fill="#fff"/><rect x="82" y="246" width="88" height="8" rx="4" fill="#fff" opacity=".7"/><rect x="82" y="264" width="56" height="8" rx="4" fill="#fff" opacity=".35"/><rect x="82" y="294" width="126" height="40" rx="8" fill="#fff" opacity=".12"/><rect x="82" y="344" width="126" height="40" rx="8" fill="#fff" opacity=".12"/>`),
 art(1,'#431407','#f59e0b','02 / TIME EXPLORER',`<g fill="none" stroke="#fff" stroke-opacity=".55"><circle cx="200" cy="230" r="150"/><circle cx="200" cy="230" r="105" stroke-dasharray="3 9" stroke-width="3"/><circle cx="200" cy="230" r="60"/></g><path d="M200 230V146M200 230l56 34" stroke="#fff" stroke-width="6" stroke-linecap="round"/><circle cx="200" cy="230" r="9" fill="#fff"/><circle cx="200" cy="80" r="12" fill="#fde68a"/><circle cx="330" cy="230" r="10" fill="#fff"/><circle cx="98" cy="318" r="14" fill="#fb923c"/><g font-family="Fira Code" font-size="11" fill="#fff" opacity=".85"><text x="218" y="84">ANCIENT</text><text x="300" y="262">1492</text><text x="60" y="354">1969</text></g>`),
 art(2,'#022c22','#10e78c','03 / SMART TASK MANAGER',`<rect x="60" y="90" width="280" height="310" rx="24" fill="#04140c" opacity=".78"/><g fill="#10e78c"><rect x="84" y="122" width="30" height="30" rx="9"/><rect x="84" y="188" width="30" height="30" rx="9"/></g><rect x="84" y="254" width="30" height="30" rx="9" fill="none" stroke="#10e78c" stroke-width="3"/><g stroke="#04140c" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M91 137l6 6 11-12M91 203l6 6 11-12"/></g><g fill="#fff"><rect x="130" y="130" width="150" height="9" rx="4" opacity=".8"/><rect x="130" y="146" width="90" height="7" rx="3" opacity=".35"/><rect x="130" y="196" width="170" height="9" rx="4" opacity=".8"/><rect x="130" y="212" width="70" height="7" rx="3" opacity=".35"/><rect x="130" y="262" width="120" height="9" rx="4" opacity=".8"/></g><circle cx="270" cy="344" r="28" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="7"/><path d="M270 316a28 28 0 1 1-26 38" fill="none" stroke="#10e78c" stroke-width="7" stroke-linecap="round"/><path d="M90 336h66a14 14 0 0 0 0-28 22 22 0 0 0-42-4 16 16 0 0 0-24 32z" fill="#fff" opacity=".85"/>`),
 art(3,'#0c4a6e','#6366f1','04 / WEATHER FORECAST',`<g stroke="#fde047" stroke-width="6" stroke-linecap="round"><path d="M120 92V66M120 228v26M32 160h26M182 160h26M58 98l18 18M182 222l-18-18M58 222l18-18M182 98l-18 18"/></g><circle cx="120" cy="160" r="46" fill="#fde047"/><g fill="#fff"><circle cx="232" cy="252" r="50"/><circle cx="292" cy="272" r="38"/><circle cx="182" cy="282" r="34"/><rect x="182" y="272" width="148" height="46" rx="23"/></g><g stroke="#bae6fd" stroke-width="5" stroke-linecap="round"><path d="M214 346l-8 24M254 346l-8 24M294 346l-8 24"/></g><text x="24" y="430" font-family="Space Grotesk" font-weight="700" font-size="64" fill="#fff">24°</text>`)
];

/* ---- helpers ---- */
const chars=el=>{const t=el.textContent.trim();el.setAttribute('aria-label',t);el.innerHTML=[...t].map(c=>`<span class="cx" aria-hidden="true">${c===' '?'&nbsp;':c}</span>`).join('');return $$('.cx',el)};
const words=(el,m)=>{const t=el.textContent.trim();el.setAttribute('aria-label',t);el.innerHTML=t.split(' ').map(w=>m?`<span class="wm" aria-hidden="true"><span class="wi">${w}</span></span>`:`<span class="wi" aria-hidden="true">${w}</span>`).join(' ');return $$('.wi',el)};
const tick=()=>$('#clk').textContent=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Karachi',hour:'2-digit',minute:'2-digit'})+' PKT';
tick();setInterval(tick,15e3);

/* ---- smooth scroll ---- */
const L=G&&window.Lenis?new Lenis({lerp:.1}):null;
if(G){gsap.registerPlugin(ScrollTrigger);if(L){L.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>L.raf(t*1000));gsap.ticker.lagSmoothing(0)}}

/* ---- menu + page-wipe navigation ---- */
const mn=$('#mn'),menu=$('#menu');let mo=false;
const shut=()=>{mo=false;mn.textContent='Menu';menu.classList.remove('open');if(G)gsap.set(menu,{clearProps:'clipPath'});L&&L.start()};
mn.onclick=()=>{
 if(!mo){mo=true;mn.textContent='Close';menu.classList.add('open');L&&L.stop();
  if(G){gsap.fromTo(menu,{clipPath:'circle(0% at 100% 0%)'},{clipPath:'circle(150% at 100% 0%)',duration:.9,ease:'power3.inOut'});gsap.fromTo('#menu .mi',{yPercent:110},{yPercent:0,duration:.9,stagger:.06,delay:.25,ease:'power4.out'})}}
 else if(G){gsap.to(menu,{clipPath:'circle(0% at 100% 0%)',duration:.6,ease:'power3.inOut',onComplete:shut})}else shut();
};
const go=h=>{const t=$(h);if(!t)return;
 const jump=()=>{shut();L?L.scrollTo(t,{immediate:true}):t.scrollIntoView();G&&ScrollTrigger.refresh()};
 if(!G)return jump();
 gsap.timeline().to('#wipe',{yPercent:-100,duration:.6,ease:'power4.inOut'}).add(jump).to('#wipe',{yPercent:-200,duration:.7,ease:'power4.inOut'}).set('#wipe',{yPercent:0});
};
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();go(a.getAttribute('href'))}));

/* ---- projects: accordion + list/orbit toggle ---- */
const setP=(r,o)=>{r.classList.toggle('open',o);$('.ph',r).setAttribute('aria-expanded',o);const d=$('.pd',r);
 if(G){gsap.to(d,{height:o?'auto':0,duration:.8,ease:'power4.inOut',onComplete:()=>ScrollTrigger.refresh()});if(o)gsap.from($$('.pi>*',d),{y:30,opacity:0,stagger:.1,delay:.25,duration:.7,ease:'power3.out'})}
 else d.style.height=o?'auto':0};
$$('.pr').forEach(r=>$('.ph',r).onclick=()=>{const o=!r.classList.contains('open');$$('.pr.open').forEach(x=>x!==r&&setP(x,false));setP(r,o)});
const sv=v=>{$$('.vt button').forEach(b=>b.classList.toggle('on',b.dataset.v===v));$('#pl').style.display=v==='l'?'':'none';$('#orb').style.display=v==='o'?'block':'none';
 if(G){gsap.from(v==='l'?'#pl':'#orb',{opacity:0,y:40,duration:.8,ease:'power3.out'});ScrollTrigger.refresh()}};
$$('.vt button').forEach(b=>b.onclick=()=>sv(b.dataset.v));
if(!G)$('.vt').style.display='none';
$$('.oc').forEach(c=>c.addEventListener('click',()=>{if(c.dataset.moved)return;sv('l');setP($$('.pr')[c.dataset.i],true)}));

/* ---- everything below needs GSAP ---- */
if(!G){$('#ld').remove();$('#wipe').remove()}
else{
const R=gsap.utils.random;

/* loader -> intro */
const rotate=gsap.to('#ring',{rotation:360,duration:18,ease:'none',repeat:-1});
document.body.style.overflow='hidden';
const c={v:0};
const intro=()=>{
 gsap.from('.hero h1 .cx',{yPercent:115,rotation:7,duration:1.2,stagger:.05,ease:'power4.out'});
 gsap.from('header>*,.hero>.mono,.hrow>*',{y:30,opacity:0,duration:1,stagger:.1,delay:.5,ease:'power3.out'});
 gsap.from('#rw',{scale:0,duration:1.4,delay:.7,ease:'back.out(1.5)'});
};
chars($('.hero h1 .ln:nth-child(1)'));chars($('.hero h1 .ln:nth-child(2)'));
gsap.timeline()
 .to(c,{v:100,duration:1.8,ease:'power2.inOut',onUpdate:()=>$('#lc').textContent=Math.round(c.v)})
 .to('#ld',{yPercent:-100,duration:1,ease:'power4.inOut'},'+=.15')
 .add(()=>{document.body.style.overflow='';intro()},'-=.6')
 .set('#ld',{display:'none'});

/* rotating role */
const roles=['Flutter apps','React Native apps','MERN platforms','offline-first UX'];let ri=0;
setInterval(()=>{const el=$('#role');gsap.to(el,{yPercent:-110,duration:.4,ease:'power3.in',onComplete:()=>{ri=(ri+1)%roles.length;el.textContent=roles[ri];gsap.fromTo(el,{yPercent:110},{yPercent:0,duration:.5,ease:'power3.out'})}})},2400);

/* hero scroll parallax */
const hs={trigger:'.hero',start:'top top',end:'bottom top',scrub:true};
gsap.to('.hero h1 .ln:nth-child(1)',{xPercent:-9,ease:'none',scrollTrigger:hs});
gsap.to('.hero h1 .ln:nth-child(2)',{xPercent:9,ease:'none',scrollTrigger:hs});
gsap.to('#rw',{y:180,ease:'none',scrollTrigger:hs});

/* marquee reacts to scroll velocity */
const mqt=gsap.to('#mq',{xPercent:-50,duration:25,ease:'none',repeat:-1});
const sk=gsap.quickTo('#mq','skewX',{duration:.4,ease:'power3'});let w;
ScrollTrigger.create({onUpdate:s=>{const v=s.getVelocity();sk(gsap.utils.clamp(-10,10,-v/200));gsap.to(mqt,{timeScale:s.direction*(1+Math.abs(v)/300),duration:.2,overwrite:true});clearTimeout(w);w=setTimeout(()=>{sk(0);gsap.to(mqt,{timeScale:1,duration:1})},140)}});

/* section headings */
const st=(t,s='top 85%')=>({trigger:t,start:s,once:true});
$$('.sh h2,#cth').forEach(h=>gsap.from(words(h,true),{yPercent:115,rotation:4,duration:1.1,stagger:.1,ease:'power4.out',scrollTrigger:st(h,'top 90%')}));
$$('.sh>*:last-child').forEach(e=>gsap.from(e,{opacity:0,y:20,duration:.8,scrollTrigger:st(e,'top 92%')}));

/* about: words light up with scroll */
gsap.fromTo(words($('#ab')),{opacity:.16},{opacity:1,stagger:.1,ease:'none',scrollTrigger:{trigger:'#ab',start:'top 80%',end:'bottom 50%',scrub:true}});
gsap.from('.facts div',{y:40,opacity:0,duration:.9,stagger:.1,ease:'power3.out',scrollTrigger:st('.facts','top 90%')});

/* projects, experience, skills, education */
gsap.from('.pr',{y:80,opacity:0,duration:1,stagger:.12,ease:'power3.out',scrollTrigger:st('#pl','top 85%')});
/* experience: stacked cards, ghost numbers, word reveals, spotlight */
const exs=$$('.ex');
exs.forEach((e,i)=>{
 e.style.top=(12+i*4)+'vh';
 e.insertAdjacentHTML('beforeend',`<b class="gn D" aria-hidden="true">0${i+1}</b>`);
 const [n,box,ul]=e.children,h3=$('h3',box),sub=$('.mono',box),lis=$$('li',ul);
 gsap.timeline({scrollTrigger:st(e,'top 85%'),defaults:{ease:'power3.out'}})
  .from(e,{y:110,opacity:0,duration:1.1,ease:'power4.out'})
  .from(n,{x:-24,opacity:0,duration:.7},.3)
  .from(words(h3,true),{yPercent:115,rotation:4,duration:1,stagger:.1,ease:'power4.out'},.35)
  .from(sub,{y:16,opacity:0,duration:.7},.7)
  .from(lis,{x:50,opacity:0,duration:.8,stagger:.18},.55)
  .from(lis,{'--ds':0,duration:.6,stagger:.18,ease:'back.out(3)'},.7);
 gsap.fromTo($('.gn',e),{yPercent:25},{yPercent:-25,ease:'none',scrollTrigger:{trigger:e,start:'top bottom',end:'bottom top',scrub:true}});
 e.addEventListener('mousemove',ev=>{const r=e.getBoundingClientRect();e.style.setProperty('--mx',ev.clientX-r.left+'px');e.style.setProperty('--my',ev.clientY-r.top+'px')});
 if(innerWidth>800&&exs[i+1])gsap.to(e,{scale:.92,filter:'brightness(.45)',transformOrigin:'50% 0%',ease:'none',scrollTrigger:{trigger:exs[i+1],start:'top 82%',end:'top 24%',scrub:true}});
});
gsap.timeline({scrollTrigger:st('#sg','top 88%')})
 .from('.sk',{y:55,rotationX:-8,opacity:0,duration:.9,stagger:.12,ease:'power4.out'})
 .from('.sk h4',{x:-18,opacity:0,duration:.55,stagger:.1,ease:'power3.out'},.2)
 .from('.sk .chip',{scale:.65,opacity:0,y:12,rotation:-4,duration:.45,stagger:.025,ease:'back.out(1.7)'},.35);
$$('.ed').forEach((e,i)=>gsap.from(e,{x:i%2?80:-80,opacity:0,duration:1.1,ease:'power4.out',scrollTrigger:st(e,'top 90%')}));
gsap.from('.ct .soc>*,.mail,.ct footer',{y:40,opacity:0,duration:.9,stagger:.1,ease:'power3.out',scrollTrigger:st('.mail','top 92%')});

/* orbit view */
const orb=$('#orb'),oc=$$('.oc');let a=0,ta=0,dr=false,lx=0;
gsap.ticker.add(()=>{if(orb.style.display!=='block')return;if(!dr)ta+=.0016;a+=(ta-a)*.08;const Rd=Math.min(innerWidth*.34,480);
 oc.forEach((e,i)=>{const t=a+i*Math.PI*2/oc.length,z=(Math.cos(t)+1)/2;gsap.set(e,{xPercent:-50,yPercent:-50,x:Math.sin(t)*Rd,y:(.5-z)*90,scale:.6+.4*z,opacity:.3+.7*z,zIndex:Math.round(z*10)})})});
orb.addEventListener('wheel',e=>{ta+=e.deltaY*.002;e.preventDefault()},{passive:false});
orb.addEventListener('pointerdown',e=>{dr=true;lx=e.clientX;oc.forEach(c=>delete c.dataset.moved)});
addEventListener('pointermove',e=>{if(!dr)return;const d=e.clientX-lx;lx=e.clientX;ta-=d*.006;if(Math.abs(d)>2)oc.forEach(c=>c.dataset.moved=1)});
addEventListener('pointerup',()=>dr=false);

/* skills: drag inertia only (grab, throw, glide, spring back) */
const cl=gsap.utils.clamp,act=new Set();
const cs=$$('.sk,.sk .chip').map(el=>({el,k:el.classList.contains('sk')?.5:2,x:0,y:0,vx:0,vy:0,d:false}));
const put=c=>{c.el.style.translate=`${c.x}px ${c.y}px`;c.el.style.rotate=`${cl(-25,25,c.vx*c.k)}deg`};
gsap.ticker.add(()=>act.forEach(c=>{if(c.d)return;c.vx+=-c.x*.04;c.vy+=-c.y*.04;c.vx*=.93;c.vy*=.93;c.x+=c.vx;c.y+=c.vy;put(c);
 if(Math.abs(c.x)+Math.abs(c.y)+Math.abs(c.vx)+Math.abs(c.vy)<.06){c.x=c.y=c.vx=c.vy=0;c.el.style.translate=c.el.style.rotate='';c.el.classList.remove('moving');act.delete(c)}}));
cs.forEach(c=>{let sx,sy,ox,oy;
 c.el.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')return;e.stopPropagation();c.d=true;act.add(c);sx=e.clientX;sy=e.clientY;ox=c.x;oy=c.y;c.vx=c.vy=0;c.el.classList.add('dr','moving');c.el.setPointerCapture(e.pointerId)});
 c.el.addEventListener('pointermove',e=>{if(!c.d)return;const nx=ox+e.clientX-sx,ny=oy+e.clientY-sy;c.vx=.6*c.vx+.4*(nx-c.x);c.vy=.6*c.vy+.4*(ny-c.y);c.x=nx;c.y=ny;put(c)});
 const up=()=>{if(!c.d)return;c.d=false;c.el.classList.remove('dr')};
 c.el.addEventListener('pointerup',up);c.el.addEventListener('pointercancel',up)});

/* magnetic elements */
$$('.mg').forEach(b=>{const qx=gsap.quickTo(b,'x',{duration:.5,ease:'elastic.out(1,.5)'}),qy=gsap.quickTo(b,'y',{duration:.5,ease:'elastic.out(1,.5)'});
 b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();qx((e.clientX-r.left-r.width/2)*.35);qy((e.clientY-r.top-r.height/2)*.45)});
 b.addEventListener('mouseleave',()=>{qx(0);qy(0)})});

/* cursor + mouse trail */
if(matchMedia('(pointer:fine)').matches){
 document.documentElement.classList.add('fine');
 const cur=$('#cur'),qx=gsap.quickTo(cur,'x',{duration:.3,ease:'power3'}),qy=gsap.quickTo(cur,'y',{duration:.3,ease:'power3'});
 const cv=$('#trail'),x=cv.getContext('2d');let pts=[];
 const rs=()=>{cv.width=innerWidth;cv.height=innerHeight};rs();addEventListener('resize',rs);
 addEventListener('mousemove',e=>{qx(e.clientX);qy(e.clientY);pts.push({x:e.clientX,y:e.clientY,l:1})},{passive:true});
 gsap.ticker.add(()=>{x.clearRect(0,0,cv.width,cv.height);pts=pts.filter(p=>(p.l-=.04)>0);pts.forEach(p=>{x.fillStyle=`rgba(16,231,140,${p.l*.45})`;x.beginPath();x.arc(p.x,p.y,p.l*16,0,7);x.fill()})});

 /* project hover image that follows the cursor */
 document.body.insertAdjacentHTML('beforeend','<div id="pv">'+IMG.map(x=>`<div class="pvi">${x}</div>`).join('')+'</div>');
 const pv=$('#pv'),pvi=$$('.pvi',pv);let ci=-1,cz=1,rt;
 gsap.set(pv,{xPercent:-50,yPercent:-50,scale:.6,autoAlpha:0});gsap.set(pvi,{autoAlpha:0});
 const px=gsap.quickTo(pv,'x',{duration:.55,ease:'power3'}),py=gsap.quickTo(pv,'y',{duration:.55,ease:'power3'}),pr=gsap.quickTo(pv,'rotation',{duration:.5,ease:'power3'});
 const showP=i=>{if(i===ci)return;ci=i;const e=pvi[i];gsap.killTweensOf(e);gsap.set(e,{zIndex:++cz,autoAlpha:1});gsap.fromTo(e,{clipPath:'inset(100% 0% 0% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:.6,ease:'power4.out'});gsap.to(pv,{scale:1,autoAlpha:1,duration:.5,ease:'power3.out'})};
 const hideP=()=>{if(ci<0)return;ci=-1;gsap.to(pv,{scale:.6,autoAlpha:0,duration:.35,ease:'power3.in'})};
 addEventListener('mousemove',e=>{px(e.clientX);py(e.clientY);pr(gsap.utils.clamp(-14,14,e.movementX*.5));clearTimeout(rt);rt=setTimeout(()=>pr(0),90);
  const t=e.target.closest('.ph,.oc');t?showP(t.classList.contains('oc')?+t.dataset.i:$$('.pr').indexOf(t.parentNode)):hideP()},{passive:true});
 addEventListener('scroll',hideP,{passive:true});
 document.addEventListener('mouseover',e=>{const big=e.target.closest('.ph,.oc'),sm=e.target.closest('a,button');gsap.to(cur,{scale:big?1.6:sm?2.4:1,duration:.3})});
}
addEventListener('load',()=>ScrollTrigger.refresh());
if(document.fonts)document.fonts.ready.then(()=>ScrollTrigger.refresh());
}
