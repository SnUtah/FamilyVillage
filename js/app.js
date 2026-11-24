(()=>{var uy=Object.defineProperty;var dy=(n,e)=>{for(var t in e)uy(n,t,{get:e[t],enumerable:!0})};var vh="family-lang";function py(){let n=null,e=null;try{n=(location.search.match(/[?&]lang=(ko|en)\b/)||[])[1]||null}catch{}if(n)return n;try{e=localStorage.getItem(vh)}catch{}return e==="ko"||e==="en"?e:(navigator.languages&&navigator.languages[0]||navigator.language||"").toLowerCase().indexOf("ko")===0?"ko":"en"}var my=window.VILLAGE_LANG==="ko"||window.VILLAGE_LANG==="en"?window.VILLAGE_LANG:py(),Zt=my==="ko",_=(n,e)=>Zt?n:e;function _h(n){let e=!1;try{localStorage.setItem(vh,n),e=localStorage.getItem(vh)===n}catch{}let t=new URL(location.href);e?t.searchParams.delete("lang"):t.searchParams.set("lang",n),t.href===location.href?location.reload():location.replace(t.href)}var Lr=n=>n!==null&&typeof n=="object"&&!Array.isArray(n),fy=new Set(["banner"]);function xh(n,e){if(!(!Lr(n)||!Lr(e)))for(let t of Object.keys(e)){let i=e[t],r=n[t];if(i!=null&&!(r===void 0&&!fy.has(t)))if(Array.isArray(i)){if(!Array.isArray(r))continue;i.some(Lr)?i.forEach((s,a)=>{Lr(s)&&Lr(r[a])&&xh(r[a],s)}):r.length&&(n[t]=i.slice())}else Lr(i)?Lr(r)&&xh(r,i):r!==""&&(n[t]=i)}}var Pr=window.FAMILY,Ms=window.FAMILY_EN,jo={name:"\uAE40\uC528\uB124",members:"\uAE40\uD560\uBA38\uB2C8|\uAE40\uC544\uBE60|\uAE40\uC5C4\uB9C8|\uAE40\uCCAB\uC9F8|\uAE40\uB9C9\uB0B4",address:"\uACBD\uAE30\uB3C4 \uD589\uBCF5\uC2DC \uC0AC\uB791\uB85C 45",q0:"\uC5B4\uB9B4 \uB54C \uC81C\uC77C \uC88B\uC544\uD588\uB358 \uBC18\uCC2C\uC740?"},gy=n=>(typeof n=="string"?n:n==null?void 0:n.q)||"",tm,nm,yy=!!Pr&&(Pr.name!==jo.name||(Pr.members||[]).map(n=>n==null?void 0:n.name).join("|")!==jo.members||((tm=Pr.place)==null?void 0:tm.address)!==jo.address||gy((nm=Pr.questions)==null?void 0:nm[0])!==jo.q0),vy=!(Ms!=null&&Ms.name)||Ms.name==="The Kims";!Zt&&Pr&&Ms&&!(yy&&vy)&&xh(Pr,Ms);var $s={};dy($s,{albumView:()=>ul,avatarHTML:()=>Um,closeModal:()=>rn,confetti:()=>or,copy:()=>qh,directionsView:()=>ll,esc:()=>Le,initUI:()=>Jh,installApp:()=>Yh,isBigFont:()=>Ka,isInstalled:()=>hl,isOverlayOpen:()=>Cn,letterView:()=>Om,mailboxView:()=>ol,menuView:()=>km,onData:()=>Xh,openLightbox:()=>dl,openModal:()=>ja,openView:()=>Hr,paintStatus:()=>jh,popBack:()=>zr,pushBack:()=>ar,quizView:()=>cl,replyView:()=>Bm,setBigFont:()=>$h,share:()=>Ja,showAlbum:()=>Gr,showDirections:()=>Ya,showLetter:()=>Xa,showMailbox:()=>qn,showMenu:()=>Zh,showQuiz:()=>Za,toast:()=>nt});function xy(n){let e=1779033703^n.length;for(let i=0;i<n.length;i++)e=Math.imul(e^n.charCodeAt(i),3432918353),e=e<<13|e>>>19;let t=e>>>0;return()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var _y='"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "Android Emoji", sans-serif',im=[["#9CD3F2","#E6F5FF"],["#FFB88C","#FFE7C9"],["#F7C4D0","#FFF3F6"],["#2B2D5C","#6D5C9E"],["#C7E8F7","#FFECD8"]],bh=["#8FB8DE","#F4B8C0","#F7D58B","#A8D08D","#C9B3E6","#F9C59E","#E88A98","#7FC8C2"],Eh=["#5A3A2A","#3A2A24","#7A5238","#1E1A22","#C98A5B"],by={trips:[{kind:"hills",sky:0,who:"family",n:4,props:["\u{1F3EF}","\u{1F4F8}"]},{kind:"sea",sky:0,who:"kidparent",props:["\u{1F30A}","\u{1F41A}"]},{kind:"city",sky:4,who:"family",n:4,props:["\u{1F697}","\u{1F36A}"]},{kind:"park",sky:0,who:"family",n:5,props:["\u{1F34A}","\u{1F34A}"]},{kind:"hills",sky:3,who:"family",n:4,props:["\u26FA","\u2B50"]},{kind:"snow",sky:4,who:"kid",props:["\u{1F6F7}","\u2744\uFE0F"]},{kind:"hills",sky:1,who:"family",n:3,props:["\u{1F682}","\u{1F359}"]},{kind:"hills",sky:4,who:"family",n:5,props:["\u2708\uFE0F","\u{1F5FA}\uFE0F"]}],holidays:[{kind:"room",sky:4,who:"family",n:5,props:["\u{1F9E7}","\u{1F647}"]},{kind:"room",sky:1,who:"family",n:4,props:["\u{1F315}","\u{1F361}"]},{kind:"room",sky:2,who:"family",n:7,props:["\u{1F382}","\u{1F389}"]},{kind:"room",sky:4,who:"baby",props:["\u{1F382}","\u{1F388}"]},{kind:"room",sky:3,who:"family",n:4,props:["\u{1F382}","\u{1F56F}\uFE0F"]},{kind:"room",sky:3,who:"family",n:5,props:["\u{1F384}","\u{1F381}"]},{kind:"room",sky:2,who:"family",n:4,props:["\u{1F389}","\u{1F490}"]},{kind:"room",sky:4,who:"family",n:6,props:["\u{1F3B2}","\u{1F962}"]}],growing:[{kind:"room",sky:4,who:"baby",props:["\u{1F463}","\u{1F9F8}"]},{kind:"city",sky:0,who:"kid",props:["\u{1F392}","\u{1F3EB}"]},{kind:"park",sky:0,who:"kidparent",props:["\u{1F6B2}","\u{1F333}"]},{kind:"park",sky:0,who:"kid",props:["\u{1F3C3}","\u{1F947}"]},{kind:"city",sky:4,who:"kidparent",props:["\u{1F393}","\u{1F490}"]},{kind:"city",sky:0,who:"kid",props:["\u{1F454}","\u{1F3EB}"]},{kind:"city",sky:3,who:"kid",props:["\u{1F389}","\u{1F4DD}"]},{kind:"city",sky:4,who:"kid",props:["\u{1F4BC}","\u2615"]}],everyday:[{kind:"room",sky:4,who:"family",n:4,props:["\u{1F373}","\u{1F95B}"]},{kind:"room",sky:1,who:"kid",props:["\u{1F634}","\u{1F4FA}"]},{kind:"park",sky:1,who:"family",n:3,props:["\u{1F415}","\u{1F307}"]},{kind:"room",sky:4,who:"family",n:5,props:["\u{1F96C}","\u{1F336}\uFE0F"]},{kind:"park",sky:2,who:"kidparent",props:["\u{1F4A0}","\u{1F4A0}"]},{kind:"room",sky:3,who:"family",n:4,props:["\u{1F349}","\u{1F4AC}"]}],old:[{kind:"room",sky:2,who:"wedding",props:["\u{1F490}","\u2728"]},{kind:"cafe",sky:4,who:"couple",props:["\u2615","\u{1F39E}\uFE0F"]},{kind:"city",sky:0,who:"couple",props:["\u{1F3E0}","\u{1F331}"]},{kind:"room",sky:4,who:"kidparent",props:["\u{1F476}","\u{1F37C}"]},{kind:"hills",sky:0,who:"family",n:3,props:["\u{1F3E1}","\u{1F413}"]},{kind:"park",sky:4,who:"family",n:6,props:["\u{1F4F7}"]}]},rm=["park","hills","room","sea","city"],sm=["couple","wedding","kid","family"];function Ai(n,e,t,i,r,s){s=Math.min(s,i/2,r/2),n.beginPath(),n.moveTo(e+s,t),n.arcTo(e+i,t,e+i,t+r,s),n.arcTo(e+i,t+r,e,t+r,s),n.arcTo(e,t+r,e,t,s),n.arcTo(e,t,e+i,t,s),n.closePath()}function vt(n,e,t,i,r){n.fillStyle=r,n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fill()}function Ri(n,e,t,i,r,s=1){n.save(),n.globalAlpha=s,n.font=`${r}px ${_y}`,n.textAlign="center",n.textBaseline="middle",n.fillText(e,t,i),n.restore()}function Ey(n,e,t,i,r,s){let[a,o]=im[r]||im[0],l=r===3,c=i==="room"||i==="cafe",h=t*(i==="sea"?.56:.62);if(c){let f=n.createLinearGradient(0,0,0,t);f.addColorStop(0,i==="cafe"?"#E7C6A4":l?"#4B3F57":"#FFF4E8"),f.addColorStop(1,i==="cafe"?"#C99B74":l?"#3A3046":"#FBE3D2"),n.fillStyle=f,n.fillRect(0,0,e,t);let g=e*.56,p=t*.12,x=e*.32,y=t*.32;n.fillStyle="#FFFFFF",Ai(n,g-8,p-8,x+16,y+16,10),n.fill();let v=n.createLinearGradient(0,p,0,p+y);if(v.addColorStop(0,a),v.addColorStop(1,o),n.fillStyle=v,n.fillRect(g,p,x,y),n.fillStyle="#FFFFFF",n.fillRect(g+x/2-3,p,6,y),n.fillRect(g,p+y/2-3,x,6),l)for(let C=0;C<12;C++)vt(n,g+s()*x,p+s()*y*.7,1.5+s()*1.5,"#FFF8C9");else vt(n,g+x*.72,p+y*.3,x*.1,"#FFE28A");n.fillStyle=i==="cafe"?"rgba(255,255,255,.35)":"rgba(244,184,192,.8)",Ai(n,g-22,p-14,26,y+28,12),n.fill(),Ai(n,g+x-4,p-14,26,y+28,12),n.fill();let M=t*.72;n.fillStyle=i==="cafe"?"#8F6B4E":"#E6C39A",n.fillRect(0,M,e,t-M),n.fillStyle="rgba(120,80,50,.15)";for(let C=0;C<7;C++)n.fillRect(0,M+C*((t-M)/7),e,2);if(i==="cafe"){for(let C=0;C<9;C++)vt(n,e*.08+C*e*.105,t*.07+Math.sin(C*1.3)*10,5,"#FFF1B8");n.fillStyle="rgba(255,255,255,.5)",Ai(n,e*.06,t*.22,e*.36,8,4),n.fill(),Ri(n,"\u{1FAB4}",e*.12,t*.2,e*.08),Ri(n,"\u{1F4DA}",e*.32,t*.2,e*.07),n.fillStyle="#B98A66",n.beginPath(),n.ellipse(e*.5,t*.86,e*.3,t*.06,0,0,Math.PI*2),n.fill()}else n.fillStyle="rgba(255,255,255,.7)",Ai(n,e*.1,t*.16,e*.2,t*.17,8),n.fill(),Ri(n,l?"\u{1F319}":"\u{1F5BC}\uFE0F",e*.2,t*.25,e*.08),Ri(n,"\u{1FAB4}",e*.1,t*.7,e*.11);return{horizon:t*.74,indoor:!0}}let u=n.createLinearGradient(0,0,0,h);if(u.addColorStop(0,a),u.addColorStop(1,o),n.fillStyle=u,n.fillRect(0,0,e,h+2),l){for(let f=0;f<40;f++)vt(n,s()*e,s()*h*.85,.8+s()*1.6,"rgba(255,248,210,.9)");vt(n,e*.78,t*.14,e*.07,"#FFF3C4")}else{let f=e*(.15+s()*.7),g=t*(.1+s()*.12),p=n.createRadialGradient(f,g,0,f,g,e*.28);p.addColorStop(0,"rgba(255,245,200,.9)"),p.addColorStop(1,"rgba(255,245,200,0)"),n.fillStyle=p,n.fillRect(0,0,e,h),vt(n,f,g,e*.06,r===1?"#FFD27A":"#FFF0A8");for(let x=0;x<3;x++){let y=s()*e,v=t*(.08+s()*.25),M=e*(.05+s()*.04);n.fillStyle="rgba(255,255,255,.85)";for(let C=0;C<4;C++)n.beginPath(),n.arc(y+C*M*.9-M*1.3,v+C%2*M*.3,M*(.7+C%3*.2),0,7),n.fill()}}if(i==="sea"){let f=n.createLinearGradient(0,h,0,t*.8);f.addColorStop(0,l?"#2F4F7A":"#5FB8E6"),f.addColorStop(1,l?"#243F63":"#8AD3F2"),n.fillStyle=f,n.fillRect(0,h,e,t*.8-h),n.strokeStyle="rgba(255,255,255,.55)",n.lineWidth=3,n.lineCap="round";for(let g=0;g<7;g++){let p=h+14+g*22+s()*8,x=s()*e;n.beginPath(),n.moveTo(x,p),n.lineTo(x+30+s()*50,p),n.stroke()}return n.fillStyle="#F6E3B8",n.beginPath(),n.moveTo(0,t*.8),n.quadraticCurveTo(e*.5,t*.74,e,t*.82),n.lineTo(e,t),n.lineTo(0,t),n.fill(),{horizon:t*.86}}if(i==="mountain")for(let f=0;f<4;f++){let g=e*(f*.33-.1)+s()*30,p=e*.45,x=t*(.28+s()*.1);n.fillStyle=f%2?"#8FA7C7":"#A9BFDC",n.beginPath(),n.moveTo(g-p/2,h),n.lineTo(g,h-x),n.lineTo(g+p/2,h),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(g-p*.14,h-x*.68),n.lineTo(g,h-x),n.lineTo(g+p*.14,h-x*.68),n.lineTo(g+p*.05,h-x*.62),n.lineTo(g-p*.06,h-x*.64),n.fill()}if(i==="city"){for(let f=-10;f<e;f+=0){let g=40+s()*70,p=t*(.12+s()*.3);n.fillStyle=l?["#3B3550","#2E2A42","#46405D"][Math.floor(s()*3)]:["#D9D0E6","#CFC6DD","#E4DCEF"][Math.floor(s()*3)],n.fillRect(f,h-p,g,p+4),n.fillStyle=l?"#FFE9A8":"rgba(255,255,255,.7)";for(let x=h-p+10;x<h-12;x+=16)for(let y=f+7;y<f+g-10;y+=14)s()>.35&&n.fillRect(y,x,7,9);f+=g+6}n.fillStyle=l?"#4A4458":"#CFC3B6",n.fillRect(0,h,e,t-h),n.fillStyle="rgba(255,255,255,.5)";for(let f=10;f<e;f+=60)n.fillRect(f,h+(t-h)*.5,30,4);return{horizon:t*.86}}let d=i==="snow",m=d?["#F4F7FB","#EAF0F7","#FFFFFF"]:l?["#3F6B4A","#355C40","#4A7A55"]:["#9ED08A","#86C174","#B2DB9C"];n.fillStyle=m[0],n.fillRect(0,h,e,t-h);for(let f=0;f<3;f++)n.fillStyle=m[(f+1)%3],n.beginPath(),n.ellipse(e*(.2+f*.35)+s()*40,h+10+f*6,e*(.45+s()*.2),t*(.08+s()*.05),0,Math.PI,Math.PI*2),n.fill();for(let f=0;f<4;f++){let g=s()<.5?e*(.04+s()*.2):e*(.76+s()*.2),p=h+4+s()*10,x=e*(.05+s()*.03);n.fillStyle="#A47A5C",n.fillRect(g-x*.12,p-x*1.4,x*.24,x*1.4);let y=d?["#FFFFFF","#EEF3F8"]:i==="park"&&r===2?["#F9C9D2","#FCDCE3"]:["#7DB86C","#9ED08A"];vt(n,g,p-x*1.6,x*.75,y[0]),vt(n,g-x*.5,p-x*1.25,x*.55,y[1]),vt(n,g+x*.5,p-x*1.25,x*.55,y[1])}if(d)for(let f=0;f<60;f++)vt(n,s()*e,s()*t,1.5+s()*2.5,"rgba(255,255,255,.9)");else if(!l)for(let f=0;f<18;f++)vt(n,s()*e,h+16+s()*(t-h-30),3+s()*3,["#FFFFFF","#F4B8C0","#F7D58B","#FFB7A5"][f%4]);return{horizon:t*.88}}function fn(n,e,t,i,r={}){let s="#FFE0C7",a=r.hair||Eh[0],o=r.suit?"#2F2B33":r.dress?"#FFFFFF":r.outfit||bh[0],l=t-2.95*i;if(n.lineCap="round",n.fillStyle="rgba(0,0,0,.12)",n.beginPath(),n.ellipse(e,t+i*.1,i*1.1,i*.22,0,0,Math.PI*2),n.fill(),r.veil&&(n.fillStyle="rgba(255,255,255,.7)",n.beginPath(),n.ellipse(e,l+i*.9,i*1.25,i*1.9,0,0,Math.PI*2),n.fill()),(r.long||r.dress)&&(n.fillStyle=a,Ai(n,e-i*1.02,l-i*.4,i*2.04,i*1.9,i*.5),n.fill()),!r.dress){n.strokeStyle=r.suit?"#2F2B33":"#6B5B53",n.lineWidth=i*.36;for(let h of[-1,1])n.beginPath(),n.moveTo(e+h*i*.28,t-i*1),n.lineTo(e+h*i*.28,t-i*.15),n.stroke();n.fillStyle="#4A3B38";for(let h of[-1,1])n.beginPath(),n.ellipse(e+h*i*.3,t-i*.05,i*.26,i*.14,0,0,Math.PI*2),n.fill()}r.dress&&(n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(e-i*.5,t-i*1.5),n.lineTo(e+i*.5,t-i*1.5),n.quadraticCurveTo(e+i*1.3,t-i*.4,e+i*1.25,t),n.lineTo(e-i*1.25,t),n.quadraticCurveTo(e-i*1.3,t-i*.4,e-i*.5,t-i*1.5),n.fill(),n.fillStyle="#F4B8C0",Ai(n,e-i*.55,t-i*1.55,i*1.1,i*.14,i*.07),n.fill()),n.fillStyle=o,Ai(n,e-i*.65,t-i*2.05,i*1.3,i*1.25,i*.5),n.fill(),r.suit&&(n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(e-i*.2,t-i*2),n.lineTo(e+i*.2,t-i*2),n.lineTo(e,t-i*1.45),n.fill(),n.fillStyle="#1E1A22",n.beginPath(),n.moveTo(e,t-i*1.92),n.lineTo(e-i*.18,t-i*2.02),n.lineTo(e-i*.18,t-i*1.82),n.fill(),n.beginPath(),n.moveTo(e,t-i*1.92),n.lineTo(e+i*.18,t-i*2.02),n.lineTo(e+i*.18,t-i*1.82),n.fill(),vt(n,e-i*.42,t-i*1.85,i*.1,"#F4B8C0")),n.strokeStyle=r.dress?s:o,n.lineWidth=i*.3;let c=(h,u)=>{n.beginPath(),n.moveTo(e+h*i*.6,t-i*1.85),u?n.lineTo(e+h*i*1,t-i*2.7):n.lineTo(e+h*i*.82,t-i*1.1),n.stroke(),vt(n,u?e+h*i*1:e+h*i*.82,u?t-i*2.72:t-i*1.08,i*.17,s)};if(c(-1,r.waveL),c(1,r.wave),r.bouquet&&(n.fillStyle="#9CC08A",Ai(n,e-i*.08,t-i*1.25,i*.16,i*.4,i*.05),n.fill(),["#F4B8C0","#FFFFFF","#F7D58B","#E88A98","#FFE3EA","#F4B8C0"].forEach((h,u)=>vt(n,e+Math.cos(u*1.05)*i*.22,t-i*1.35+Math.sin(u*1.05)*i*.18,i*.16,h)),vt(n,e,t-i*1.33,i*.16,"#E88A98")),vt(n,e,l,i,s),n.fillStyle=a,n.beginPath(),n.arc(e,l-i*.05,i*1.04,Math.PI*1.02,Math.PI*1.98),n.quadraticCurveTo(e+i*.5,l-i*.05,e+i*.25,l+i*.25),n.quadraticCurveTo(e-i*.2,l-i*.2,e-i*.6,l+i*.1),n.quadraticCurveTo(e-i*1,l-i*.05,e-i*1.04,l-i*.05),n.fill(),r.crown)for(let h=0;h<5;h++)vt(n,e-i*.6+h*i*.3,l-i*.98+Math.abs(h-2)*i*.1,i*.09,h%2?"#F4B8C0":"#FFFFFF");r.hat&&Ri(n,r.hat,e,l-i*1,i*1.3);for(let h of[-1,1])vt(n,e+h*i*.33,l+i*.05,i*.12,"#2B2220"),vt(n,e+h*i*.33+i*.04,l,i*.04,"#FFFFFF"),vt(n,e+h*i*.6,l+i*.32,i*.15,"rgba(255,150,150,.55)");if(r.glasses){n.strokeStyle="#4A3B38",n.lineWidth=i*.06;for(let h of[-1,1])n.beginPath(),n.arc(e+h*i*.33,l+i*.05,i*.22,0,Math.PI*2),n.stroke()}n.strokeStyle="#2B2220",n.lineWidth=i*.07,n.beginPath(),n.arc(e,l+i*.4,i*.16,.15,Math.PI-.15),n.stroke(),r.balloon&&(n.strokeStyle="#B8A59B",n.lineWidth=1.5,n.beginPath(),n.moveTo(e+i*.82,t-i*1.08),n.lineTo(e+i*1.3,t-i*3.9),n.stroke(),vt(n,e+i*1.3,t-i*4.4,i*.55,r.balloon),vt(n,e+i*1.15,t-i*4.55,i*.14,"rgba(255,255,255,.6)"))}function My(n,e,t,i,r,s=2){let a=e/2,o=e*.085,l=()=>bh[Math.floor(r()*bh.length)],c=()=>Eh[Math.floor(r()*Eh.length)];if(i==="wedding")fn(n,a-o*1.35,t,o,{suit:!0,hair:"#3A2A24",wave:r()<.4}),fn(n,a+o*1.35,t,o,{dress:!0,veil:!0,crown:!0,bouquet:!0,hair:"#5A3A2A"});else if(i==="bride")fn(n,a,t,o*1.15,{dress:!0,veil:!0,crown:!0,bouquet:!0,hair:"#5A3A2A",wave:r()<.5});else if(i==="groom")fn(n,a,t,o*1.15,{suit:!0,hair:"#3A2A24",wave:!0});else if(i==="propose")fn(n,a-o*1.3,t,o,{suit:!1,outfit:"#8FB8DE",hair:"#3A2A24",wave:!0}),fn(n,a+o*1.3,t,o,{outfit:"#F4B8C0",hair:"#5A3A2A",long:!0,waveL:!0}),Ri(n,"\u{1F48D}",a-o*.3,t-o*2.9,o*1.1);else if(i==="couple")fn(n,a-o*1.3,t,o,{outfit:l(),hair:c(),wave:r()<.5}),fn(n,a+o*1.3,t,o,{outfit:l(),hair:c(),long:!0,waveL:r()<.5});else if(i==="kid"||i==="kid-balloon")fn(n,a,t,o*.75,{outfit:l(),hair:c(),long:r()<.5,wave:!0,balloon:i==="kid-balloon"?"#E88A98":null});else if(i==="baby")fn(n,a,t,o*.6,{outfit:"#FFF3EA",hair:"#5A3A2A",hat:"\u{1F380}"});else if(i==="kidparent")fn(n,a-o*.9,t,o,{outfit:l(),hair:c(),long:!0}),fn(n,a+o*1,t,o*.7,{outfit:l(),hair:c(),wave:!0});else if(i==="family"){let h=Math.min(7,Math.max(3,s)),u=Math.min(o*2.1,e*.9/h);for(let d=0;d<h;d++){let m=a+(d-(h-1)/2)*u,f=d===0||h>4&&d===h-1,g=!f&&d>h-3&&h>3&&d%2===1;fn(n,m,t,o*(g?.7:f?.95:1),{outfit:l(),hair:f?"#C8C2C0":c(),long:d%2===1,glasses:f,wave:d===h-1})}}}function am(n,e,t=840){let i=n.id||"everyday",r=by[i],s=xy(`${i}:${e}`),a=r&&r[e]||{kind:rm[Math.floor(s()*rm.length)],sky:Math.floor(s()*5),who:sm[Math.floor(s()*sm.length)],props:["\u2728"]},o=[1,4/3,3/4][e%3],l=Math.round(o>=1?t:t*o),c=Math.round(o>=1?t/o:t),h=document.createElement("canvas");h.width=l,h.height=c;let u=h.getContext("2d"),m=Ey(u,l,c,a.kind,a.sky,s).horizon,f=a.props[0];f&&Ri(u,f,l*(s()<.5?.15:.85),m-l*.36,l*.21,.95),My(u,l,m-6,a.who,s,a.n),a.props.slice(1).forEach((p,x)=>Ri(u,p,l*(.12+x*.7+s()*.1),m-l*.06+s()*10,l*.12));for(let p=0;p<10;p++)vt(u,s()*l,s()*c*.6,1.2+s()*2,"rgba(255,255,255,.75)");if(i==="holidays")for(let p=0;p<5;p++)Ri(u,["\u{1F389}","\u2728","\u{1F388}"][p%3],s()*l,s()*c*.5,l*.035,.8);let g=u.createRadialGradient(l/2,c/2,l*.35,l/2,c/2,l*.85);return g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(60,30,20,.22)"),u.fillStyle=g,u.fillRect(0,0,l,c),i==="old"&&(u.fillStyle="rgba(150,105,40,.2)",u.fillRect(0,0,l,c),u.strokeStyle="#FFFDF8",u.lineWidth=l*.035,u.strokeRect(0,0,l,c)),h}var ws=_(["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]),Ts=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ua=()=>window.FAMILY||{},Ki=n=>{try{return new Date(n.toLocaleString("en-US",{timeZone:"Asia/Seoul"}))}catch{return new Date(n.getTime()+(n.getTimezoneOffset()+540)*6e4)}},ui=n=>String(n).padStart(2,"0"),Ss=null,wh=0;function wy(){let n=Ki(new Date),e=null;for(let t of Ua().members||[]){if(!/^\d{2}-\d{2}$/.test(t.birthday||""))continue;let[i,r]=t.birthday.split("-").map(Number),s=n.getFullYear(),a=new Date(`${s}-${ui(i)}-${ui(r)}T10:00:00+09:00`);Ki(a)<new Date(n.getFullYear(),n.getMonth(),n.getDate())&&(a=new Date(`${s+1}-${ui(i)}-${ui(r)}T10:00:00+09:00`)),(!e||a<e)&&(e=a)}return e}function om(){Ss=null;let n=location.hash.slice(1),e=n.match(/(?:^|&)now=([^&]+)/);if(e){let t=decodeURIComponent(e[1]),i=new Date(/[+Z]/.test(t.slice(10))?t:t+(t.length<=10?"T10:00:00":t.length<=16?":00":"")+"+09:00");if(!isNaN(i)){Ss=i.getTime(),wh=Date.now();return}}if(/(?:^|&)demo(?:&|$)/.test(n)){let t=wy();t&&(Ss=t.getTime(),wh=Date.now())}}om();addEventListener("hashchange",om);function Gn(){return Ss?new Date(Ss+(Date.now()-wh)):new Date}var lm=()=>!!Ss;function Be(n=Gn()){let e=Ki(n);return`${e.getFullYear()}-${ui(e.getMonth()+1)}-${ui(e.getDate())}`}function gn(n,e){let[t,i,r]=n.split("-").map(Number),s=new Date(Date.UTC(t,i-1,r+e));return`${s.getUTCFullYear()}-${ui(s.getUTCMonth()+1)}-${ui(s.getUTCDate())}`}function Vn(n,e){let t=i=>{let[r,s,a]=i.split("-").map(Number);return Date.UTC(r,s-1,a)};return Math.round((t(e)-t(n))/864e5)}function Qi(n=Gn()){let e=Ki(n),t=e.getHours(),i=e.getMinutes(),r=t%12===0?12:t%12;return{date:_(`${e.getFullYear()}\uB144 ${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C ${ws[e.getDay()]}\uC694\uC77C`,`${ws[e.getDay()]}, ${Ts[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`),short:_(`${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C (${ws[e.getDay()]})`,`${ws[e.getDay()]}, ${Ts[e.getMonth()]} ${e.getDate()}`),time:_(`${t<12?"\uC624\uC804":"\uC624\uD6C4"} ${r}\uC2DC${i?" "+i+"\uBD84":""}`,`${ui(t)}:${ui(i)}`),k:e}}function It(n,e=!0){let[t,i,r]=n.split("-").map(Number),s=new Date(Date.UTC(t,i-1,r)).getUTCDay();return _(`${i}\uC6D4 ${r}\uC77C${e?` (${ws[s]})`:""}`,`${e?`${ws[s]}, `:""}${Ts[i-1]} ${r}`)}function $n(n){let e=new Date(n);if(isNaN(e))return"";let t=Vn(Be(e),Be());if(t===0)return _("\uC624\uB298","Today");if(t===1)return _("\uC5B4\uC81C","Yesterday");let i=Ki(e);return _(`${i.getMonth()+1}\uC6D4 ${i.getDate()}\uC77C`,`${Ts[i.getMonth()]} ${i.getDate()}`)}function er(n,e){let t=String(n!=null?n:""),i=t.charCodeAt(t.length-1),[r,s]=e.split("/");if(!(i>=44032&&i<=55203))return`${t}(${r.slice(0,r.length-s.length)||r})${s}`;let a=(i-44032)%28;return r==="\uC73C\uB85C"&&a===8?t+s:t+(a?r:s)}function Ze(n=10){var e;try{(e=navigator.vibrate)==null||e.call(navigator,n)}catch{}}function As(){var t;let n=Ua();return(((t=n.museum)==null?void 0:t.themes)||[]).map(i=>{var s;let r;return Array.isArray(i.photos)&&i.photos.length?r=i.photos.map((a,o)=>{var l;return typeof a=="string"?{src:a,caption:((l=i.captions)==null?void 0:l[o])||""}:a}):n.demoPhotos||i.demo?r=Array.from({length:i.count||((s=i.captions)==null?void 0:s.length)||0},(a,o)=>{var l;return{src:`demo:${i.id}:${o}`,caption:((l=i.captions)==null?void 0:l[o])||""}}):r=Array.from({length:i.count||0},(a,o)=>{var l;return{src:`${i.folder}/${o+1}.${i.ext||"jpg"}`,caption:((l=i.captions)==null?void 0:l[o])||""}}),r.forEach((a,o)=>{a.idx=o,a.theme=i}),{...i,photos:r}})}var Mh=new Map,Sy=n=>typeof(n==null?void 0:n.src)=="string"&&n.src.startsWith("demo:");function Ir(n,e="full"){if(!Sy(n))return n.src;let t=`${n.src}:${e}`;if(!Mh.has(t)){let i=am(n.theme,n.idx,e==="thumb"?360:840);Mh.set(t,i.toDataURL("image/jpeg",e==="thumb"?.8:.86))}return Mh.get(t)}function Fr(n,e,t,i=600,r=600,s=_("\uC0AC\uC9C4\uC744 \uB123\uC5B4\uC8FC\uC138\uC694","Add a photo here")){let a=document.createElement("canvas");a.width=i,a.height=r;let o=a.getContext("2d"),l=o.createLinearGradient(0,0,i,r);return l.addColorStop(0,"#FFFDF8"),l.addColorStop(1,n.color||"#F4B8C0"),o.fillStyle=l,o.fillRect(0,0,i,r),o.textAlign="center",o.textBaseline="middle",o.font=`${i*.2}px serif`,o.fillText(n.emoji||"\u{1F4F7}",i/2,r*.38),o.fillStyle="#7C6A66",o.font=`${i*.08}px "Jua"`,o.fillText(`${n.title} #${e+1}`,i/2,r*.62),o.font=`${i*.04}px "Gowun Dodum"`,o.globalAlpha=.7,o.fillText(s,i/2,r*.73),o.fillText(t,i/2,r*.8),a}function Na(){return(Ua().questions||[]).map(n=>typeof n=="string"?{q:n}:n).filter(n=>n&&n.q)}function Xo(n=Be()){let e=Na().length;if(!e)return-1;let t=/^\d{4}-\d{2}-\d{2}$/.test(Ua().questionStart||"")?Ua().questionStart:n;return(Vn(t,n)%e+e)%e}var Ba=()=>window.FAMILY||{},Th=["letters","answers","replies","hearts","visits","water","votes","polls","scores","looks"],cm=new Set(["votes","looks","answers"]),un=()=>!!Ba().sheet,Ty=()=>String(Ba().site||"main"),Ci="family-mine-v1",Ch="family-remote-v1",Ah="family-code",Cs=n=>{try{let e=JSON.parse(localStorage.getItem(n)||"{}");return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}},Rs=(n,e)=>{try{localStorage.setItem(n,JSON.stringify(e))}catch{}},Ay=()=>crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{let e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)}),hm=n=>{try{dispatchEvent(new CustomEvent("family:data",{detail:n}))}catch{}},Rh="family-local-lock",Jo=()=>{try{return JSON.parse(localStorage.getItem(Rh)||"null")||{}}catch{return{}}},Dr=()=>{try{return localStorage.getItem(Ah)||""}catch{return""}},Zo=n=>{try{n?localStorage.setItem(Ah,n):localStorage.removeItem(Ah)}catch{}},hn={locked:!1,hint:"",known:!1},Ls=()=>({...hn,remote:un()});async function um(){if(!un()){let n=Jo();return hn.locked=!!n.code,hn.hint=n.hint||"",hn.known=!0,Ls()}try{let n=await Ps("GET",{action:"status",quiet:1});hn.locked=!!n.locked,hn.hint=String(n.hint||""),hn.known=!0}catch{hn.locked=!!Dr(),hn.known=!1}return Ls()}function tr(){if(!hn.locked)return!0;let n=Dr();return n?un()?!0:n===Jo().code:!1}async function dm(n){if(n=String(n||"").trim(),!n)return{ok:!1,error:"empty"};if(!un()){let e=n===String(Jo().code||"");return e&&Zo(n),{ok:e,error:e?null:"code"}}try{return await Ps("GET",{action:"check",code:n}),Zo(n),{ok:!0}}catch(e){return{ok:!1,error:(e==null?void 0:e.message)==="code"?"code":"network"}}}async function pm({current:n="",next:e="",hint:t=""}={}){if(e=String(e||"").trim().slice(0,30),t=String(t||"").trim().slice(0,40),n=String(n||Dr()).trim(),un())try{await Ps("POST",{quiet:1},{kind:"setcode",code:n,newCode:e,hint:t})}catch(i){return{ok:!1,error:(i==null?void 0:i.message)==="code"?"code":"network"}}else{let i=Jo();if(i.code&&n!==i.code)return{ok:!1,error:"code"};try{e?localStorage.setItem(Rh,JSON.stringify({code:e,hint:t})):localStorage.removeItem(Rh)}catch{}}return Zo(e),hn.locked=!!e,hn.hint=e?t:"",hn.known=!0,{ok:!0}}var Sh=null,Yo=n=>{var e;return((e=(Ba().members||[]).find(t=>t.id===n))==null?void 0:e.name)||n};function Ry(){var l;if(Sh)return Sh;let n=Ba().samples||{},e=Be(),t=Gn().getTime(),i=(c=0,h=0)=>new Date(t-c*864e5-(40+h*37%300)*6e4).toISOString(),r=c=>gn(e,-(c||0)),s={};s.letters=(n.letters||[]).map((c,h)=>({id:`seed-letters-${h}`,who:c.from,name:Yo(c.from),to:c.to||"all",message:c.message,time:i(c.daysAgo,h),openAt:c.openInDays?gn(e,c.openInDays):"",seed:!0}));let a=c=>{let h=String(c||"").match(/^letters:(\d+)$/);return h?`seed-letters-${h[1]}`:String(c||"")};s.replies=(n.replies||[]).map((c,h)=>({id:`seed-replies-${h}`,who:c.who,name:Yo(c.who),target:a(c.target),text:c.text||"",emoji:c.emoji||"",time:i(0,h+3),seed:!0})),s.hearts=(n.hearts||[]).map((c,h)=>({id:`${c.from}-${c.to}-${r(c.daysAgo)}`,who:c.from,to:c.to,day:r(c.daysAgo),time:i(c.daysAgo,h),seed:!0})),s.visits=(n.visits||[]).map((c,h)=>({id:`${c.who}-${r(c.daysAgo)}`,who:c.who,day:r(c.daysAgo),time:i(c.daysAgo,h),seed:!0})),s.water=(n.water||[]).map((c,h)=>({id:`${c.who}-${r(c.daysAgo)}`,who:c.who,day:r(c.daysAgo),time:i(c.daysAgo,h),seed:!0})),s.votes=(n.votes||[]).map((c,h)=>({id:`${c.who}-${c.poll}`,who:c.who,poll:c.poll,choice:+c.choice||0,time:i(1,h),seed:!0})),s.scores=(n.scores||[]).map((c,h)=>({id:`seed-scores-${h}`,who:c.who,name:Yo(c.who),score:+c.score||0,total:+c.total||0,time:i(2,h),seed:!0})),s.answers=[];let o=Na();for(let c=0;c<14&&o.length;c++){let h=gn(e,-c),u=Xo(h);Object.entries(((l=o[u])==null?void 0:l.samples)||{}).forEach(([d,m],f)=>{s.answers.push({id:`${d}-${h}`,who:d,name:Yo(d),day:h,q:u,text:m,time:i(c,f*5+1),seed:!0})})}return s.polls=[],s.looks=[],Sh=s,s}var Tt={data:un()?Cs(Ch):{},at:0,loading:null,error:null,ok:!1},mm=()=>({remote:un(),loading:!!Tt.loading,error:Tt.error,loaded:Tt.ok,at:Tt.at});async function Ps(n,e,t){let i=new URL(Ba().sheet);i.searchParams.set("site",Ty()),n==="GET"&&!(e!=null&&e.code)&&i.searchParams.set("code",Dr()),Object.entries(e||{}).forEach(([a,o])=>i.searchParams.set(a,o));let r=typeof AbortController=="function"?new AbortController:null,s=setTimeout(()=>r==null?void 0:r.abort(),15e3);try{let o=await(await fetch(i.toString(),{method:n,redirect:"follow",signal:r==null?void 0:r.signal,...t?{body:JSON.stringify({code:Dr(),...t}),headers:{"Content-Type":"text/plain;charset=utf-8"}}:{}})).json();if(o&&o.error==="code"){if(!(e!=null&&e.code)&&!(e!=null&&e.quiet)){Zo(""),hn.locked=!0;try{dispatchEvent(new CustomEvent("family:locked"))}catch{}}throw new Error("code")}if(!o||o.ok!==!0)throw new Error((o==null?void 0:o.error)||"bad response");return o}finally{clearTimeout(s)}}var Cy=["q","choice","score","total"];function Ly(n,e){let t={};if(Object.entries(e||{}).forEach(([i,r])=>{t[i]=r==null?"":r}),t.id=String(t.id||""),t.who=String(t.who||""),t.time&&typeof t.time!="string"&&(t.time=String(t.time)),Cy.forEach(i=>{i in t&&t[i]!==""&&(t[i]=Number(t[i]))}),n==="looks"&&typeof t.look=="string")try{t.look=JSON.parse(t.look)}catch{t.look={}}return n==="polls"&&typeof t.options=="string"&&(t.options=t.options.split("|").filter(Boolean)),t.openAt&&typeof t.openAt!="string"&&(t.openAt=String(t.openAt)),t.openAt&&(t.openAt=String(t.openAt).slice(0,10)),(t.locked==="true"||t.locked===!0)&&(t.locked=!0),t}async function Py(){let n=Cs(Ci),e=!1;e:for(let t of Th)for(let i of n[t]||[]){if(!i.pending)continue;let{pending:r,...s}=i;try{await Ps("POST",{},{kind:t,...s}),delete i.pending,e=!0}catch{break e}}e&&Rs(Ci,n)}function An({force:n=!1}={}){return un()?Tt.loading?Tt.loading:!n&&Tt.ok&&Date.now()-Tt.at<1e4?Promise.resolve():(Tt.loading=(async()=>{try{await Py();let e=await Ps("GET",{action:"all",t:Date.now()}),t={};Th.forEach(s=>{var a;t[s]=(Array.isArray((a=e.data)==null?void 0:a[s])?e.data[s]:[]).map(o=>Ly(s,o)).filter(o=>o.id)}),Tt.data=t,Tt.at=Date.now(),Tt.ok=!0,Tt.error=null,Rs(Ch,t);let i=Cs(Ci),r=!1;Th.forEach(s=>{let a=new Set(t[s].map(o=>o.id));(i[s]||[]).forEach(o=>{o.pending&&a.has(o.id)&&!cm.has(s)&&(delete o.pending,r=!0)})}),r&&Rs(Ci,i)}catch(e){Tt.error=(e==null?void 0:e.message)||String(e)}finally{Tt.loading=null,hm({refresh:!0})}})(),Tt.loading):Promise.resolve()}function lt(n){let e=(Cs(Ci)[n]||[]).map(o=>({...o,mine:!0})),t=un()?Tt.data[n]||[]:[],i=Ry()[n]||[],r=new Set(e.map(o=>o.id)),s=[...e,...t.map(o=>r.has(o.id)?{...o,mine:!0}:o),...i],a=new Map;for(let o of s){let l=a.get(o.id);if(!l){a.set(o.id,o);continue}(cm.has(n)?(o.time||"")>(l.time||""):l.pending&&!o.pending)&&a.set(o.id,{...o,mine:l.mine||o.mine})}return[...a.values()].sort((o,l)=>String(l.time||"").localeCompare(String(o.time||"")))}async function nn(n,e){let t={id:e.id||Ay(),time:new Date().toISOString(),...e},i=Cs(Ci);i[n]=[un()?{...t,pending:!0}:t,...(i[n]||[]).filter(s=>s.id!==t.id)].slice(0,300),Rs(Ci,i);let r=()=>setTimeout(()=>hm({kind:n,item:t}),0);if(!un())return r(),{ok:!0,item:t,sent:!1};try{await Ps("POST",{},{kind:n,...t});let s=Cs(Ci),a=(s[n]||[]).find(o=>o.id===t.id);return a&&(delete a.pending,Rs(Ci,s)),Tt.data[n]=[t,...(Tt.data[n]||[]).filter(o=>o.id!==t.id)],Rs(Ch,Tt.data),{ok:!0,item:t,sent:!0}}catch(s){return{ok:!1,item:t,sent:!1,error:(s==null?void 0:s.message)||String(s)}}finally{r()}}var Li=()=>window.FAMILY||{},Iy=n=>String(n).padStart(2,"0"),nr=["#8FB8DE","#F4B8C0","#F7D58B","#A8D08D","#C9B3E6","#F9C59E","#E88A98","#7FC8C2"],Oa=["#5A3A2A","#3A2A24","#7A5238","#1E1A22","#C98A5B","#A8A39E","#E8E4DE"],Qo=["#FFE8D6","#FFE0C7","#F6D2B2","#E8B98F","#C98E64","#9A6544"],el=10,Fy=n=>n?/[\uAC00-\uD7A3]/.test(n)?`${n} \uB9C8\uC744`:`${n}${/s$/i.test(n)?"'":"'s"} Village`:"Our Village",Bt=()=>_(`${Li().name||"\uC6B0\uB9AC"} \uB9C8\uC744`,Fy(Li().name)),Ko=null,fm=-1;function Dy(){let n=lt("looks"),e=n.map(t=>t.id+t.time).join();return e!==fm&&(fm=e,Ko=new Map,n.forEach(t=>{Ko.has(t.who)||Ko.set(t.who,t.look||{})})),Ko}function Ot(){let n=Dy(),e=(Li().members||[]).filter(r=>r&&r.id).slice(0,8),t=new Set(e.map(r=>r.id)),i=[...n.entries()].filter(([r,s])=>!t.has(r)&&s&&s.nick).map(([r,s])=>({id:r,name:s.nick,role:"",joined:s.joined||""})).sort((r,s)=>(r.joined||"").localeCompare(s.joined||""));return[...e,...i].slice(0,40).map((r,s)=>{let a=n.get(r.id)||{},o={outfit:nr[s%nr.length],hair:Oa[s%5],longHair:!1,glasses:!1,hat:"",kid:!1,...r.look||{}},{nick:l,bday:c,joined:h,...u}=a;return{...r,name:l||r.name,nick:l||"",birthday:c||r.birthday,index:s,look:{...o,...u}}})}var kt=n=>Ot().find(e=>e.id===n)||null,Rn=(n,e="")=>{var t;return((t=kt(n))==null?void 0:t.name)||e||n||""},ka=n=>{var e;return((e=kt(n))==null?void 0:e.look.outfit)||"#F4B8C0"},Pi=(n,e="")=>(Li().members||[]).some(t=>t&&t.id===n)?Rn(n,e):e||Rn(n),xt=n=>{let e=kt(n);return e?e.nick||e.role||e.name:n||""},gm="family-me";function be(){let n="";try{n=localStorage.getItem(gm)||""}catch{}return n==="guest"||kt(n)?n:""}function za(n){try{localStorage.setItem(gm,n)}catch{}try{dispatchEvent(new CustomEvent("family:me",{detail:n}))}catch{}}var _t=()=>kt(be()),Ur=()=>be()==="guest";function ir(){let n=Li().since;return/^\d{4}-\d{2}-\d{2}$/.test(n||"")?Vn(n,Be())+1:0}function Is(n=Be()){let e=n.slice(5);return Ot().filter(t=>t.birthday===e)}function Uy(n,e,t){if(/^\d{4}-\d{2}-\d{2}$/.test(n)&&!e)return n>=t?n:null;let i=n.length===10?n.slice(5):n;if(!/^\d{2}-\d{2}$/.test(i))return null;let r=+t.slice(0,4),s=`${r}-${i}`;return s>=t?s:`${r+1}-${i}`}function ym(){let n=Ot().filter(t=>/^\d{2}-\d{2}$/.test(t.birthday||"")).map(t=>({title:_(`${t.name} \uC0DD\uC77C`,`${t.name}'s birthday`),date:t.birthday,yearly:!0,emoji:"\u{1F382}",kind:"birthday",member:t.id,note:t.lunar?_("\uC74C\uB825 \uC0DD\uC77C (\uC62C\uD574 \uC591\uB825 \uB0A0\uC9DC)","Lunar birthday (this year's solar date)"):""})),e=(Li().events||[]).filter(t=>t&&t.date).map(t=>({...t,kind:"event",yearly:!!t.yearly||/^\d{2}-\d{2}$/.test(t.date)}));return[...n,...e]}function Fs(n=6,e=Be()){return ym().map(t=>{let i=Uy(t.date,t.yearly,e);return i?{...t,key:i,dday:Vn(e,i)}:null}).filter(Boolean).sort((t,i)=>t.dday-i.dday).slice(0,n)}function vm(n,e){let t={},i=`${n}-${Iy(e)}`;return ym().forEach(r=>{let s=r.yearly?`${n}-${r.date.length===10?r.date.slice(5):r.date}`:r.date;s.startsWith(i)&&(t[s]=t[s]||[]).push(r)}),t}var Ds=n=>n===0?"Today":n===1?"Tomorrow":n>1?`in ${n} days`:`${-n} days ago`,tl=n=>n===0?_("\uC624\uB298","Today"):_(n>0?`D-${n}`:`D+${-n}`,Ds(n)),xm=n=>_(tl(n),n===0?"Today":n===1?"1 day":n>1?`${n} days`:Ds(n)),nl=n=>n.length>1?`${n.slice(0,-1).join(", ")} and ${n[n.length-1]}`:n.join("");function Us(n=Be()){let e=Xo(n);return e<0?null:{idx:e,q:Na()[e].q,day:n}}function Ii(n){let e=new Set;return lt("answers").filter(t=>t.day===n&&!e.has(t.who)&&e.add(t.who)).reverse()}var Lh=n=>Ii(n).find(e=>e.who===be())||null;function _m(n=14){let e=Be();return Array.from({length:n},(t,i)=>{let r=gn(e,-i),s=Us(r);return s&&{...s,answers:Ii(r)}}).filter(Boolean)}var Ns=n=>lt("hearts").filter(e=>e.to===n),Ph=n=>Ns(n).filter(e=>e.day===Be()),il=n=>lt("hearts").some(e=>e.to===n&&e.who===be()&&e.day===Be());function rl(n=Be()){return[...new Set(lt("visits").filter(t=>t.day===n).map(t=>t.who))].map(kt).filter(Boolean)}var Ih=()=>new Set(lt("visits").filter(n=>n.who===be()).map(n=>n.day)).size,bm=(n,e)=>lt("visits").some(t=>t.who===n&&t.day===e),Bs=_(["\uC528\uC557","\uC0C8\uC2F9","\uBB18\uBAA9","\uB098\uBB34","\uAF43\uB098\uBB34","\uC5F4\uB9E4 \uB098\uBB34"],["seed","sprout","sapling","tree","blossoming tree","fruit tree"]);function Fi(){var c,h,u,d;let n=lt("water"),e=n.length,t=(((c=Li().tree)==null?void 0:c.stages)||[3,10,25,45,80]).slice(0,5),i=0;t.forEach((m,f)=>{e>=m&&(i=f+1)});let r=(h=t[i])!=null?h:null,s=i?t[i-1]:0,a=Be(),o=[...new Set(n.filter(m=>m.day===a).map(m=>m.who))],l=((u=n[0])==null?void 0:u.day)||"";return{total:e,stage:i,stageName:Bs[i],next:r,toNext:r==null?0:r-e,progress:r==null?1:(e-s)/Math.max(1,r-s),todayWho:o,wateredToday:o.includes(be()),thirsty:!l||Vn(l,a)>=3,name:((d=Li().tree)==null?void 0:d.name)||_("\uC6B0\uB9AC \uAC00\uC871 \uB098\uBB34","Our family tree")}}var Di=n=>!!n.locked||!!n.openAt&&n.openAt>Be(),Ha=n=>n.who!==be()&&(n.to==="all"||n.to===be()),Em="family-read",Fh=()=>{try{return new Set(JSON.parse(localStorage.getItem(Em)||"[]"))}catch{return new Set}};function Mm(n){let e=Fh();if(!e.has(n)){e.add(n);try{localStorage.setItem(Em,JSON.stringify([...e].slice(-500)))}catch{}try{dispatchEvent(new CustomEvent("family:read"))}catch{}}}function di(){if(!_t())return[];let n=Fh();return lt("letters").filter(e=>Ha(e)&&!Di(e)&&!n.has(e.id))}var wm=n=>Fh().has(n);function Sm(){let n=i=>(Array.isArray(i)?i:String(i||"").split("|")).map(r=>String(r).trim()).filter(Boolean),e=(Li().polls||[]).filter(i=>i&&i.id).map(i=>({...i,options:n(i.options),cfg:!0}));return[...lt("polls").map(i=>({...i,options:n(i.options)})).filter(i=>i.q&&i.options.length>=2),...e].filter(i=>i.options.length>=2)}function Dh(n){let e=new Map;return lt("votes").forEach(t=>{t.poll===n&&!e.has(t.who)&&e.set(t.who,t.choice)}),e}function Tm(){let n=new Map;return lt("scores").forEach(e=>{let t=n.get(e.who);(!t||e.score>t.score)&&n.set(e.who,e)}),[...n.values()].sort((e,t)=>t.score-e.score||String(e.time).localeCompare(String(t.time)))}function Am(n){let e=lt("replies").filter(r=>r.target===n).reverse(),t=e.filter(r=>r.text),i={};return e.filter(r=>r.emoji&&!r.text).forEach(r=>{(i[r.emoji]=i[r.emoji]||new Set).add(r.who)}),{texts:t,reacts:i}}function Rm(){return Fs(10).filter(n=>n.dday===0)}var Cm="family-sound",it=null,zs=null,sr=null,Bh=null,Hs=!1,Ga=null,Br=0,sl=0,Uh=349.23,Os=392,rr=440,Nr=523.25,Nh=587.33,Ny=698.46;var Lm=[Nr,0,rr,Os,Uh,0,Os,rr,Nr,0,Nh,0,Nr,0,rr,0,Os,0,Uh,Os,rr,0,0,0,Nh,0,Nr,rr,Nr,0,Ny,0,Nh,Nr,rr,0,Os,rr,Nr,0,rr,Os,Uh,0,0,0,0,0],Pm=[87.31,116.54,87.31,130.81],By=.34;function Oy(){if(it)return it;let n=window.AudioContext||window.webkitAudioContext;if(!n)return null;it=new n,zs=it.createGain(),zs.gain.value=.9,zs.connect(it.destination),sr=it.createGain(),sr.gain.value=.12,sr.connect(zs),Bh=it.createBuffer(1,it.sampleRate,it.sampleRate);let e=Bh.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;return it}function wt(n,e,t,{type:i="sine",gain:r=.2,dest:s=zs,slide:a=0}={}){let o=it.createOscillator(),l=it.createGain();o.type=i,o.frequency.setValueAtTime(n,e),a&&o.frequency.exponentialRampToValueAtTime(a,e+t),l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(r,e+.012),l.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(l),l.connect(s),o.start(e),o.stop(e+t+.05)}function ks(n,e,{gain:t=.2,type:i="lowpass",freq:r=2e3}={}){let s=it.createBufferSource(),a=it.createBiquadFilter(),o=it.createGain();s.buffer=Bh,a.type=i,a.frequency.value=r,o.gain.setValueAtTime(t,n),o.gain.exponentialRampToValueAtTime(1e-4,n+e),s.connect(a),a.connect(o),o.connect(zs),s.start(n),s.stop(n+e+.02)}function ky(){if(!(!it||!Hs))for(;Br<it.currentTime+.4;){let n=Lm[sl%Lm.length];n&&(wt(n,Br,.7,{type:"sine",gain:.5,dest:sr}),wt(n*4,Br,.12,{type:"sine",gain:.06,dest:sr})),sl%6===0&&wt(Pm[Math.floor(sl/12)%Pm.length],Br,1.6,{type:"triangle",gain:.16,dest:sr}),Br+=By,sl++}}var et={get enabled(){return Hs},saved(){try{return localStorage.getItem(Cm)==="1"}catch{return!1}},setEnabled(n){if(n&&!Oy())return!1;Hs=n;try{localStorage.setItem(Cm,n?"1":"0")}catch{}return n?(it.resume().catch(()=>{}),Ga||(Br=it.currentTime+.1,Ga=setInterval(ky,120))):(Ga&&(clearInterval(Ga),Ga=null),it==null||it.suspend().catch(()=>{})),Hs},sfx(n){if(!Hs||!it)return;let e=it.currentTime;switch(n){case"chime":wt(880,e,.25,{gain:.14}),wt(1318.5,e+.09,.32,{gain:.12});break;case"crackle":for(let t=0;t<6;t++)ks(e+t*.06+Math.random()*.04,.05,{gain:.12,type:"highpass",freq:1800+Math.random()*1500});wt(220,e,.3,{type:"triangle",gain:.06,slide:160});break;case"coin":wt(1760,e,.1,{type:"square",gain:.05}),wt(2217,e+.07,.28,{type:"square",gain:.05}),ks(e+.3,.3,{gain:.07,freq:1400});break;case"shutter":ks(e,.05,{gain:.3,type:"highpass",freq:3e3}),ks(e+.07,.04,{gain:.18,type:"highpass",freq:2500});break;case"paper":ks(e,.16,{gain:.12,type:"bandpass",freq:900}),wt(1047,e+.1,.3,{gain:.08});break;case"jump":wt(320,e,.18,{type:"triangle",gain:.12,slide:760});break;case"heart":wt(1047,e,.18,{gain:.07}),wt(1318.5,e+.05,.22,{gain:.06});break;case"ok":wt(659,e,.14,{gain:.12}),wt(830.6,e+.11,.3,{gain:.12});break;case"no":wt(330,e,.2,{type:"triangle",gain:.1}),wt(262,e+.16,.34,{type:"triangle",gain:.1});break;case"pop":wt(600,e,.08,{type:"triangle",gain:.1,slide:900});break;case"tada":[523.25,659.25,783.99,1046.5].forEach((t,i)=>wt(t,e+i*.09,.4,{gain:.12}));break;case"water":[1318.5,1568,1760].forEach((t,i)=>wt(t,e+i*.07,.18,{gain:.06,slide:t*.8})),ks(e,.35,{gain:.05,type:"bandpass",freq:2600});break;case"birthday":{[[523.25,0,.18],[659.25,.16,.18],[783.99,.32,.18],[1046.5,.5,.45],[880,.95,.18],[987.77,1.12,.18],[1046.5,1.3,.6]].forEach(([i,r,s])=>{wt(i,e+r,s+.2,{gain:.11}),wt(i/2,e+r,s+.2,{type:"triangle",gain:.05})});break}}},duck(n){sr&&it&&sr.gain.setTargetAtTime(n?.04:.12,it.currentTime,.12)}};document.addEventListener("visibilitychange",()=>{!it||!Hs||(document.hidden?it.suspend().catch(()=>{}):(it.resume().catch(()=>{}),Br=it.currentTime+.1))});var Fm=window.FAMILY,dn=n=>document.querySelector(n),Le=n=>String(n!=null?n:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Wa=[],kh=0;function ar(n){Wa.push(n);try{history.pushState({wv:Wa.length},"")}catch{}}function zr(n){let e=Wa.lastIndexOf(n);e<0||(Wa.splice(e,1),kh++,history.back())}addEventListener("popstate",()=>{var n;if(kh>0){kh--;return}(n=Wa.pop())==null||n()});var kr=null,Dm=null,Wh=()=>dn("#modal");function zh(){let n=Wh();!n.classList.contains("open")||n.classList.contains("closing")||(n.classList.add("closing"),et.duck(!1),kr&&(kr(),kr=null),Dm=setTimeout(()=>{n.classList.remove("open","closing"),n.querySelector(".sheet").style.transform=""},220))}function ja(n,e,t){let i=Wh();kr&&(kr(),kr=null);let r=i.classList.contains("open")&&!i.classList.contains("closing");clearTimeout(Dm),i.classList.remove("closing"),i.querySelector(".sheet").style.transform="",dn("#modal-title").textContent=n;let s=dn("#modal-body");s.innerHTML=e,s.scrollTop=0,i.classList.add("open"),et.duck(!0),r||ar(zh),t&&(kr=t(s)||null)}function rn(){let n=Wh();!n.classList.contains("open")||n.classList.contains("closing")||(zh(),zr(zh))}var Cn=()=>dn("#modal").classList.contains("open")||dn("#lightbox").classList.contains("open"),Hr=(n,e)=>ja(n,e.html,e.mount),Im;function nt(n,e=2400){let t=dn("#toast");t.textContent=n,t.classList.add("show"),clearTimeout(Im),Im=setTimeout(()=>t.classList.remove("show"),e)}var Hh=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function or(n=["\u{1F338}","\u{1F497}","\u2728","\u{1F389}","\u{1F490}"]){if(!Hh())for(let e=0;e<28;e++){let t=document.createElement("div");t.className="confetti",t.textContent=n[e%n.length],t.style.left=Math.random()*100+"%",t.style.animationDuration=2+Math.random()*2+"s",t.style.animationDelay=Math.random()*.6+"s",(dn("#phone")||document.body).appendChild(t),setTimeout(()=>t.remove(),5e3)}}async function qh(n,e=_("\uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694","Copied")){let t=!1;try{await navigator.clipboard.writeText(n),t=!0}catch{let i=document.createElement("textarea");i.value=n,i.readOnly=!0,i.style.cssText="position:fixed;top:0;left:0;opacity:0;-webkit-user-select:text;user-select:text",document.body.appendChild(i),i.focus(),i.select();try{i.setSelectionRange(0,n.length),t=document.execCommand("copy")}catch{t=!1}i.remove()}return Ze(10),nt(t?`\u{1F4CB} ${e}`:_("\uBCF5\uC0AC\uAC00 \uC548 \uB3FC\uC694. \uAE00\uC790\uB97C \uAE38\uAC8C \uB20C\uB7EC \uBCF5\uC0AC\uD574 \uC8FC\uC138\uC694","Couldn't copy. Press and hold the text to copy it")),t}function zy(n){n.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",t=>{e.tagName!=="BUTTON"&&t.target.closest("button")||qh(e.dataset.copy,e.dataset.msg)}))}function Um(n={},e=""){return`<span class="${["avatar",n.longHair?"long":"",n.kid?"kid":"",e].filter(Boolean).join(" ")}" style="--outfit:${Le(n.outfit||"#8FB8DE")};--hair:${Le(n.hair||"#5A3A2A")}" aria-hidden="true"><i class="hd"></i><i class="bd"></i><i class="lg"></i>${n.glasses?'<i class="gls"></i>':""}${n.hat?`<i class="ht ht-${Le(n.hat)}"></i>`:""}</span>`}var Hy=(n,e)=>{let t=kt(n);return`<span class="who-chip" style="--c:${Le(t?t.look.outfit:"#E6D5C6")}">${Le(t?t.nick||t.role||t.name:e||_("\uC190\uB2D8","Guest"))}</span>`};function jh(n){if(!n)return;if(!un()){n.hidden=!0;return}let e=mm();n.hidden=!1,e.loading&&!e.loaded?n.textContent=_("\uAC00\uC871 \uC18C\uC2DD\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\u2026","Loading family news\u2026"):e.error&&!e.loaded?(n.innerHTML=_('\uC9C0\uAE08\uC740 \uC18C\uC2DD\uC744 \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC5B4\uC694. <button type="button" class="linklike st-retry">\uB2E4\uC2DC \uC2DC\uB3C4</button>',`Can't load the news right now. <button type="button" class="linklike st-retry">Try again</button>`),n.querySelector(".st-retry").onclick=()=>{An({force:!0}),jh(n)}):e.error?n.textContent=_("\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBC1B\uC544 \uC628 \uC18C\uC2DD\uC774\uC5D0\uC694 (\uC9C0\uAE08\uC740 \uC5F0\uACB0\uC774 \uC5B4\uB824\uC6CC\uC694)","This is the last news we got (can't connect right now)"):n.hidden=!0}function Xh(n){let e=()=>n();return addEventListener("family:data",e),()=>removeEventListener("family:data",e)}var Nm=(n,e)=>nt(n.ok?e:_("\uD734\uB300\uD3F0\uC5D0 \uBCF4\uAD00\uD588\uC5B4\uC694. \uC5F0\uACB0\uB418\uBA74 \uC790\uB3D9\uC73C\uB85C \uBCF4\uB0BC\uAC8C\uC694","Saved on your phone. It will be sent automatically once you're connected"),n.ok?2400:3600),Gy=["\u{1F44D}","\u{1F602}","\u{1F979}","\u{1F497}"],Vy=n=>[...n].map(e=>e.codePointAt(0).toString(16)).join("");function Bm(n,{compact:e=!1}={}){let t=i=>{let r=i.querySelector(`[data-rx="${CSS.escape(n)}"]`)||i,s=!1,a=()=>{if(!r.isConnected)return;let{texts:o,reacts:l}=Am(n),c=be(),h=!!_t();r.innerHTML=`
        <div class="rx-emojis">${Gy.map(m=>{let f=l[m],g=(f==null?void 0:f.size)||0;return`<button type="button" class="rx-e${f!=null&&f.has(c)?" on":""}" data-e="${m}" ${h?"":"disabled"} aria-label="${_(`${m} \uBC18\uC751 ${g}\uAC1C`,`${m} reactions: ${g}`)}">${m}${g?`<b>${g}</b>`:""}</button>`}).join("")}</div>
        ${o.length?`<ul class="rx-list">${o.map(m=>`<li>${Hy(m.who,m.name)} <span>${Le(m.text)}</span> <small>${$n(m.time)}</small></li>`).join("")}</ul>`:""}
        ${h?`${e?`<button type="button" class="linklike rx-open">${_("\u{1F4AC} \uB2F5\uC7A5 \uC4F0\uAE30","\u{1F4AC} Reply")}</button>`:""}<form class="rx-form" autocomplete="off" ${e&&!s?"hidden":""}><input class="field rx-in" maxlength="80" placeholder="${_("\uB2F5\uC7A5 \uD55C \uC904 \uB0A8\uAE30\uAE30","Write a one-line reply")}" aria-label="${_("\uB2F5\uC7A5","Reply")}"><button class="btn small pink" type="submit">${_("\uBCF4\uB0B4\uAE30","Send")}</button></form>`:""}`;let u=r.querySelector(".rx-open");u&&(u.onclick=()=>{s=!0,u.hidden=!0;let m=r.querySelector(".rx-form");m.hidden=!1,m.querySelector(".rx-in").focus()}),u&&s&&(u.hidden=!0),r.querySelectorAll(".rx-e").forEach(m=>m.onclick=async()=>{if(m.classList.contains("on")){nt(_("\uC774\uBBF8 \uB9C8\uC74C\uC744 \uB0A8\uACBC\uC5B4\uC694 \u{1F60A}","You already reacted \u{1F60A}"));return}Ze(8),et.sfx("heart"),m.classList.add("on"),await nn("replies",{id:`${c}-${n}-${Vy(m.dataset.e)}`,who:c,name:Rn(c),target:n,emoji:m.dataset.e,text:""}),a()});let d=r.querySelector(".rx-form");d&&(d.onsubmit=async m=>{m.preventDefault();let f=d.querySelector(".rx-in"),g=f.value.trim();if(!g)return;f.value="";let p=await nn("replies",{who:c,name:Rn(c),target:n,text:g,emoji:""});Nm(p,_("\u{1F4AC} \uB2F5\uC7A5\uC744 \uB0A8\uACBC\uC5B4\uC694","\u{1F4AC} Reply sent")),et.sfx("paper"),a()})};return a(),Xh(a)};return{html:`<div class="rx" data-rx="${Le(n)}"></div>`,mount:t}}var $y=(n,e)=>{let t=Di(n),i=!t&&Ha(n)&&!wm(n.id),r=n.pending?"\u23F3":t?"\u{1F512}":n.openAt?"\u{1F381}":n.mine?"\u270D\uFE0F":"\u{1F48C}",s=n.pending?_("\uBCF4\uB0B4\uB294 \uC911","Sending"):t?_(`${It(n.openAt,!1)}\uC5D0 \uC5F4\uB824\uC694`,`Opens ${It(n.openAt,!1)}`):`${n.to==="all"?_("\uBAA8\uB450\uC5D0\uAC8C","To everyone"):_(`To. ${xt(n.to)}`,`To ${xt(n.to)}`)} \xB7 ${$n(n.time)}`;return`
  <button type="button" class="env${n.mine?" mine":""}${n.pending?" pending":""}${t?" locked":""}${i?" unread":""}" style="--c:${Le(ka(n.who))}" data-i="${e}" aria-label="${_(`${Le(Pi(n.who,n.name))}\uC758 \uD3B8\uC9C0 \uC5F4\uAE30`,`Open the letter from ${Le(Pi(n.who,n.name))}`)}">
    <span class="flap" aria-hidden="true"></span>
    <span class="seal" aria-hidden="true">${r}</span>
    <b class="env-name">${t?_("\u23F3 \uD0C0\uC784\uCEA1\uC290","\u23F3 Time capsule"):Le(Pi(n.who,n.name))}</b>
    <small class="env-meta">${Le(s)}</small>
  </button>`};function ol(n,{onBack:e,to:t="",filter:i=""}={}){let r=_t(),s=!r,a=Ot().filter(c=>c.id!==be());return{html:`
    <p class="muted" style="line-height:1.7">${s?_("\uAC00\uC871\uC5D0\uAC8C \uC548\uBD80 \uD55C\uB9C8\uB514 \uB0A8\uACA8 \uC8FC\uC138\uC694 \u{1F48C}","Leave the family a quick hello \u{1F48C}"):_(`<b>${Le(r.role||r.name)}</b>${Le(er(r.role||r.name,"\uC774/\uAC00").slice(String(r.role||r.name).length))} \uAC00\uC871\uC5D0\uAC8C \uBCF4\uB0B4\uB294 \uD3B8\uC9C0\uC608\uC694 \u{1F48C}`,`A letter from <b>${Le(r.role||r.name)}</b> to the family \u{1F48C}`)}</p>
    <form class="letter-form" autocomplete="off">
      ${s?`<input class="field l-name" maxlength="20" placeholder="${_("\uC774\uB984","Name")}" aria-label="${_("\uC774\uB984","Name")}" />`:""}
      <div class="to-row" role="group" aria-label="${_("\uBC1B\uB294 \uC0AC\uB78C","Recipient")}">
        <button type="button" class="to-chip on" data-to="all">${_("\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466} \uBAA8\uB450\uC5D0\uAC8C","\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466} Everyone")}</button>
        ${a.map(c=>`<button type="button" class="to-chip" data-to="${Le(c.id)}" style="--c:${Le(c.look.outfit)}">${Le(c.nick||c.role||c.name)}</button>`).join("")}
      </div>
      <textarea class="field l-msg" maxlength="500" placeholder="${_("\uD558\uACE0 \uC2F6\uC740 \uB9D0\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694 (500\uC790 \uC774\uB0B4)","Write what you want to say (up to 500 characters)")}" aria-label="${_("\uD3B8\uC9C0 \uB0B4\uC6A9","Letter")}"></textarea>
      <label class="tc-row"><input type="checkbox" class="l-tc"> ${_('\u23F3 \uD0C0\uC784\uCEA1\uC290\uB85C \uBCF4\uB0B4\uAE30 <small class="muted">\uC815\uD55C \uB0A0\uC774 \uB418\uC5B4\uC57C \uC5F4\uB824\uC694</small>','\u23F3 Send as a time capsule <small class="muted">It opens on the day you choose</small>')}</label>
      <div class="tc-date" hidden><input type="date" class="field l-open" aria-label="${_("\uC5F4\uB9AC\uB294 \uB0A0","Opening day")}"></div>
      <button class="btn pink l-send" type="submit" style="width:100%;margin-top:10px;padding:14px">${_("\u2709\uFE0F \uD3B8\uC9C0 \uBCF4\uB0B4\uAE30","\u2709\uFE0F Send letter")}</button>
    </form>
    <div class="divider"></div>
    <div class="env-head"><b>${_("\u{1F48C} \uAC00\uC871 \uD3B8\uC9C0","\u{1F48C} Family letters")}</b><span class="muted l-count"></span></div>
    ${s?"":`<div class="seg l-filter"><button type="button" data-f="all">${_("\uC804\uCCB4","All")}</button><button type="button" data-f="me">${_("\uB098\uC5D0\uAC8C \uC628 \uD3B8\uC9C0","To me")} <b class="l-unread"></b></button><button type="button" data-f="mine">${_("\uB0B4\uAC00 \uC4F4 \uD3B8\uC9C0","From me")}</button></div>`}
    <p class="muted l-status" role="status" hidden></p>
    <div class="env-grid l-list" style="margin-top:10px"></div>`,mount:c=>{let h="all",u=i||"all",d=L=>{h=L,c.querySelectorAll(".to-chip").forEach(F=>F.classList.toggle("on",F.dataset.to===L))};c.querySelectorAll(".to-chip").forEach(L=>L.onclick=()=>{Ze(6),d(L.dataset.to)}),t&&a.some(L=>L.id===t)&&d(t);let m=c.querySelector(".l-tc"),f=c.querySelector(".tc-date"),g=c.querySelector(".l-open"),p=gn(Be(),1);g.min=p,g.value=gn(Be(),100),m.onchange=()=>{f.hidden=!m.checked};let x=c.querySelector(".l-list"),y=c.querySelector(".l-count"),v=c.querySelector(".l-status"),M=e||(()=>qn(n,{filter:u})),C=()=>{if(!c.isConnected)return;let L=lt("letters"),F=u==="me"?L.filter(Ha):u==="mine"?L.filter(b=>b.who===be()):L;y.textContent=L.length?_(`${L.length}\uD1B5`,`${L.length} ${L.length===1?"letter":"letters"}`):"";let $=c.querySelector(".l-unread");if($){let b=di().length;$.textContent=b||""}c.querySelectorAll(".l-filter button").forEach(b=>b.classList.toggle("on",b.dataset.f===u)),x.innerHTML=F.length?F.slice(0,60).map($y).join(""):`<p class="muted">${u==="me"?_("\uC544\uC9C1 \uB098\uC5D0\uAC8C \uC628 \uD3B8\uC9C0\uAC00 \uC5C6\uC5B4\uC694","No letters for you yet"):u==="mine"?_("\uC544\uC9C1 \uC4F4 \uD3B8\uC9C0\uAC00 \uC5C6\uC5B4\uC694","You haven't written any letters yet"):_("\uC544\uC9C1 \uD3B8\uC9C0\uAC00 \uC5C6\uC5B4\uC694. \uCCAB \uD3B8\uC9C0\uB97C \uB0A8\uACA8 \uC8FC\uC138\uC694!","No letters yet. Be the first to write one")}</p>`,x.querySelectorAll(".env").forEach(b=>b.onclick=()=>{Ze(8);let P=F[+b.dataset.i];if(Di(P)){nt(_(`\u23F3 \uC544\uC9C1 \uC5F4 \uC218 \uC5C6\uC5B4\uC694 \xB7 ${It(P.openAt)} (D-${Vn(Be(),P.openAt)})`,`\u23F3 Not yet \xB7 It opens ${It(P.openAt)} (${Ds(Vn(Be(),P.openAt))})`),3e3);return}b.classList.add("open"),setTimeout(()=>Xa(F,+b.dataset.i,M),Hh()?0:260)}),jh(v)};c.querySelectorAll(".l-filter button").forEach(L=>L.onclick=()=>{u=L.dataset.f,Ze(6),C()}),C(),An();let S=Xh(C),A=c.querySelector(".letter-form"),z=c.querySelector(".l-send");return A.onsubmit=async L=>{var J;L.preventDefault();let F=s?c.querySelector(".l-name").value.trim():r.name,$=c.querySelector(".l-msg").value.trim();if(!F||!$){nt(s?_("\uC774\uB984\uACFC \uD3B8\uC9C0 \uB0B4\uC6A9\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694","Please write your name and a letter"):_("\uD3B8\uC9C0 \uB0B4\uC6A9\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694","Please write your letter"));return}let b=m.checked?g.value||gn(Be(),100):"";if(b&&b<=Be()){nt(_("\uC5F4\uB9AC\uB294 \uB0A0\uC740 \uB0B4\uC77C \uC774\uD6C4\uB85C \uACE8\uB77C \uC8FC\uC138\uC694","Pick an opening day from tomorrow on"));return}let P=z.textContent;z.disabled=!0,un()&&(z.textContent=_("\uBCF4\uB0B4\uB294 \uC911\u2026","Sending\u2026"));let N=await nn("letters",{who:s?"guest":be(),name:F,to:h,message:$,openAt:b});if(z.textContent=P,z.disabled=!1,!c.isConnected)return;c.querySelector(".l-msg").value="",m.checked=!1,f.hidden=!0;let k=h==="all"?_("\uAC00\uC871 \uBAA8\uB450\uC5D0\uAC8C","the whole family"):_(`${xt(h)}\uC5D0\uAC8C`,xt(h));Nm(N,b?_(`\u23F3 \uD0C0\uC784\uCEA1\uC290\uC744 \uBB3B\uC5C8\uC5B4\uC694. ${It(b)}\uC5D0 \uC5F4\uB824\uC694`,`\u23F3 Time capsule buried. It opens ${It(b)}`):_(`\u{1F48C} ${k} \uD3B8\uC9C0\uB97C \uBCF4\uB0C8\uC5B4\uC694`,`\u{1F48C} Letter sent to ${k}`)),or(["\u{1F48C}","\u{1F497}","\u2728"]),Ze(20),et.sfx("paper"),n==null||n(N.item),u="all",C(),(J=x.querySelector(".env"))==null||J.scrollIntoView({behavior:Hh()?"auto":"smooth",block:"center"})},S}}}function qn(n,e){Hr(_("\uC548\uBD80 \uC6B0\uCCB4\uD1B5","Mailbox"),ol(n,e))}function Om(n,e,t){let i=n[e];Ha(i)&&Mm(i.id);let r=Bm(i.id);return{html:`
    <article class="paper" style="--c:${Le(ka(i.who))}" aria-label="${_(`${Le(Pi(i.who,i.name))}\uC758 \uD3B8\uC9C0`,`Letter from ${Le(Pi(i.who,i.name))}`)}">
      <div class="paper-top"><span class="paper-stamp">${i.openAt?"\u{1F381}":i.mine?"\u270D\uFE0F":"\u{1F48C}"}</span><span>${_(`To. ${i.to==="all"?"\uC6B0\uB9AC \uAC00\uC871":Le(Rn(i.to))}`,`To ${i.to==="all"?"our family":Le(Rn(i.to))}`)}</span></div>
      ${i.openAt?`<p class="muted" style="margin:0 0 6px">${_(`\u23F3 ${$n(i.time)}\uC5D0 \uBB3B\uC5B4 \uB454 \uD0C0\uC784\uCEA1\uC290\uC774\uC5D0\uC694`,`\u23F3 A time capsule buried ${/\d/.test($n(i.time))?`on ${$n(i.time)}`:$n(i.time).toLowerCase()}`)}</p>`:""}
      <p class="paper-msg">${Le(i.message)}</p>
      <div class="paper-from">${_("From.","From")} <b>${Le(Pi(i.who,i.name))}</b><small>${$n(i.time)}</small></div>
    </article>
    ${r.html}
    <div class="paper-nav">
      <button class="btn small p-prev" ${e<=0?"disabled":""}>${_("\u2039 \uC774\uC804","\u2039 Previous")}</button>
      <span class="muted">${e+1} / ${n.length}</span>
      <button class="btn small p-next" ${e>=n.length-1?"disabled":""}>${_("\uB2E4\uC74C \u203A","Next \u203A")}</button>
    </div>
    <button class="btn p-back" style="width:100%;margin-top:10px">${_("\u2709\uFE0F \uC6B0\uCCB4\uD1B5\uC73C\uB85C","\u2709\uFE0F Back to the mailbox")}</button>`,mount:o=>{let l=d=>{let m=e+d;for(;n[m]&&Di(n[m]);)m+=d;n[m]&&(Ze(6),Xa(n,m,t))};o.querySelector(".p-prev").onclick=()=>l(-1),o.querySelector(".p-next").onclick=()=>l(1),o.querySelector(".p-back").onclick=t;let c=o.querySelector(".paper"),h=0,u=0;return c.addEventListener("pointerdown",d=>{h=d.clientX,u=d.clientY}),c.addEventListener("pointerup",d=>{let m=d.clientX-h,f=d.clientY-u;Math.abs(m)>70&&Math.abs(m)>Math.abs(f)*1.5&&l(m<0?1:-1)}),r.mount(o)}}}function Xa(n,e,t=rn){Hr(_("\u{1F48C} \uD3B8\uC9C0","\u{1F48C} Letter"),Om(n,e,t))}function ll(){let n=Fm.place||{},e=(i,r)=>r&&r.length?`<div class="card"><b>${i}</b><div class="muted" style="margin-top:6px;line-height:1.7">${r.map(Le).join("<br>")}</div></div>`:"";return{html:`
    <div class="card center">
      <div class="serif" style="font-size:20px;font-weight:700">${Le(n.name||_("\uBAA8\uC774\uB294 \uACF3","Meeting place"))}</div>
      <div style="margin-top:8px">${Le(n.address||"")}</div>
      <div class="btns" style="justify-content:center">
        ${n.address?`<button class="btn small" data-copy="${Le(n.address)}" data-msg="${_("\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694","Address copied")}">${_("\u{1F4CB} \uC8FC\uC18C \uBCF5\uC0AC","\u{1F4CB} Copy address")}</button>`:""}
        ${n.tel?`<a class="btn small" href="tel:${Le(n.tel)}">${_("\u{1F4DE} \uC804\uD654","\u{1F4DE} Call")}</a>`:""}
      </div>
    </div>
    <div class="btns">
      ${n.naverMap?`<a class="btn" target="_blank" rel="noopener" href="${Le(n.naverMap)}">${_("\u{1F7E2} \uB124\uC774\uBC84 \uC9C0\uB3C4","\u{1F7E2} Naver Map")}</a>`:""}
      ${n.kakaoMap?`<a class="btn" target="_blank" rel="noopener" href="${Le(n.kakaoMap)}">${_("\u{1F7E1} \uCE74\uCE74\uC624\uB9F5","\u{1F7E1} Kakao Map")}</a>`:""}
      ${n.tmap?`<a class="btn" target="_blank" rel="noopener" href="${Le(n.tmap)}">${_("\u{1F535} \uD2F0\uB9F5","\u{1F535} TMAP")}</a>`:""}
    </div>
    ${e(_("\u{1F687} \uC9C0\uD558\uCCA0","\u{1F687} Subway"),n.subway)}
    ${e(_("\u{1F68C} \uBC84\uC2A4","\u{1F68C} Bus"),n.bus)}
    ${e(_("\u{1F697} \uC790\uAC00\uC6A9","\u{1F697} By car"),n.car?[n.car]:[])}
    ${e(_("\u{1F17F}\uFE0F \uC8FC\uCC28","\u{1F17F}\uFE0F Parking"),n.parking?[n.parking]:[])}`,mount:zy}}function Ya(){Hr(_("\uBAA8\uC774\uB294 \uACF3","Meeting place"),ll())}function Oh(){let n=Tm();return n.length?`<ol class="board">${n.map((e,t)=>{var i,r;return`<li><span class="rank">${["\u{1F947}","\u{1F948}","\u{1F949}"][t]||t+1}</span>${Um(((i=kt(e.who))==null?void 0:i.look)||{},"mini")}<b>${Le(((r=kt(e.who))==null?void 0:r.role)||e.name||Rn(e.who))}</b><span class="sc">${e.score} / ${e.total}</span></li>`}).join("")}</ol>`:`<p class="muted center">${_("\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694. \uCCAB \uAE30\uB85D\uC758 \uC8FC\uC778\uACF5\uC774 \uB418\uC5B4 \uBCF4\uC138\uC694!","No scores yet. Be the first on the board")}</p>`}function cl(){let n=Fm.quiz||[];return{html:'<div class="quiz-box"></div>',mount:t=>{let i=t.querySelector(".quiz-box")||t,r=-1,s=0,a=null,o=!0,l=()=>{if(!o)return;if(r<0){i.innerHTML=`
          <p class="muted center" style="line-height:1.7">${_(`\uB204\uAC00 \uC6B0\uB9AC \uAC00\uC871\uC744 \uC81C\uC77C \uC798 \uC54C\uAE4C\uC694? \u{1F914}<br>${n.length}\uBB38\uC81C\uB97C \uD480\uBA74 \uC810\uC218\uD310\uC5D0 \uC774\uB984\uC774 \uC62C\uB77C\uAC00\uC694`,`Who knows our family best? \u{1F914}<br>Answer all ${n.length} questions to get on the scoreboard`)}</p>
          <div class="card"><b>${_("\u{1F3C6} \uC810\uC218\uD310","\u{1F3C6} Scoreboard")}</b>${Oh()}</div>
          <button class="btn pink q-start" style="width:100%">${_("\u2753 \uD034\uC988 \uC2DC\uC791","\u2753 Start the quiz")}</button>`,i.querySelector(".q-start").onclick=()=>{r=0,s=0,l()};return}if(r>=n.length){let h=s===n.length;i.innerHTML=`
          <div class="center" style="padding:14px 0 6px">
            <div style="font-size:60px">${h?"\u{1F3C6}":s>=n.length/2?"\u{1F970}":"\u{1F331}"}</div>
            <div class="quiz-q">${_(`${n.length}\uBB38\uC81C \uC911 <b style="color:var(--rose-deep)">${s}\uAC1C</b> \uB9DE\uD614\uC5B4\uC694!`,`You got <b style="color:var(--rose-deep)">${s}</b> out of ${n.length} right`)}</div>
            <p class="muted">${h?_("\uC6B0\uB9AC \uAC00\uC871 \uBC15\uC0AC\uB2D8\uC774\uC2DC\uB124\uC694! \u{1F495}","You're our family expert \u{1F495}"):_("\uC774\uC81C \uC6B0\uB9AC \uAC00\uC871\uC744 \uC870\uAE08 \uB354 \uC54C\uAC8C \uB410\uC8E0? \u{1F60A}","Now you know our family a little better, right? \u{1F60A}")}</p>
          </div>
          <div class="card"><b>${_("\u{1F3C6} \uC810\uC218\uD310","\u{1F3C6} Scoreboard")}</b><div class="q-board">${Oh()}</div></div>
          <button class="btn pink q-again" style="width:100%">${_("\uB2E4\uC2DC \uD480\uAE30","Try again")}</button>`,i.querySelector(".q-again").onclick=()=>{r=0,s=0,l()},h&&or(),_t()&&nn("scores",{who:be(),name:Rn(be()),score:s,total:n.length}).then(()=>{let u=i.querySelector(".q-board");u&&(u.innerHTML=Oh())});return}let c=n[r];i.innerHTML=`
        <div class="progress-dots">${n.map((h,u)=>`<i class="${u<=r?"on":""}"></i>`).join("")}</div>
        <div class="quiz-q">Q${r+1}. ${Le(c.q)}</div>
        ${c.options.map((h,u)=>`<button class="quiz-opt" data-k="${u}">${Le(h)}</button>`).join("")}
        <p class="muted center q-cmt" style="min-height:24px"></p>`,i.querySelectorAll(".quiz-opt").forEach(h=>h.onclick=()=>{let u=+h.dataset.k;i.querySelectorAll(".quiz-opt").forEach(d=>d.disabled=!0),i.querySelectorAll(".quiz-opt")[c.answer].classList.add("right"),u===c.answer?(s++,et.sfx("ok")):(h.classList.add("wrong"),et.sfx("no")),i.querySelector(".q-cmt").textContent=(u===c.answer?_("\u2B55 \uC815\uB2F5! ","\u2705 That's right. "):_("\u274C \uC544\uC26C\uC6CC\uC694! ","\u274C Not quite. "))+(c.comment||""),a=setTimeout(()=>{r++,l()},1700)})};return l(),()=>{o=!1,clearTimeout(a)}}}}function Za(){Hr(_("\uAC00\uC871 \uD034\uC988","Family quiz"),cl())}async function Ja(){let n={title:Bt(),text:_("\uC6B0\uB9AC \uAC00\uC871 \uB9C8\uC744\uC5D0 \uB180\uB7EC \uC640\uC694 \u{1F3E1}","Come and visit our family village \u{1F3E1}"),url:location.href.split("#")[0]};if(navigator.share)try{await navigator.share(n);return}catch(e){if((e==null?void 0:e.name)==="AbortError")return}qh(n.url,_("\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694","Link copied"))}var $a=null;addEventListener("beforeinstallprompt",n=>{n.preventDefault(),$a=n});addEventListener("appinstalled",()=>{$a=null,nt(_("\u{1F4F1} \uD648 \uD654\uBA74\uC5D0 \uAC00\uC871 \uB9C8\uC744\uC774 \uC0DD\uACBC\uC5B4\uC694!","\u{1F4F1} The family village is now on your home screen"),3200)});var hl=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;async function Yh(){if($a){let s=$a;$a=null;try{s.prompt(),await s.userChoice}catch{}return}let n=navigator.userAgent,e=/KAKAOTALK|NAVER|Instagram|FBAN|FBAV|Line\//i.test(n),t=/iPhone|iPad|iPod/i.test(n)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,i=e?_(["\uC624\uB978\uCABD \uC544\uB798(\uB610\uB294 \uC704) <b>\u22EE \xB7 \uACF5\uC720</b> \uBC84\uD2BC",`<b>${t?"Safari\uB85C \uC5F4\uAE30":"\uB2E4\uB978 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC5F4\uAE30"}</b>`,t?"\uC5F4\uB9B0 Safari\uC5D0\uC11C \uC544\uB798 \uC21C\uC11C\uB300\uB85C":"\uC5F4\uB9B0 \uD06C\uB86C\uC5D0\uC11C \uC544\uB798 \uC21C\uC11C\uB300\uB85C"],["The <b>\u22EE \xB7 Share</b> button at the bottom (or top) right",`<b>${t?"Open in Safari":"Open in another browser"}</b>`,t?"Then follow the steps below in Safari":"Then follow the steps below in Chrome"]):[],r=t?_(['\uD654\uBA74 \uC544\uB798 <b>\uACF5\uC720 \uBC84\uD2BC</b> <span class="kbd">\u2B06\uFE0E</span> \uB204\uB974\uAE30',"<b>\uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00</b> \uACE0\uB974\uAE30","\uC624\uB978\uCABD \uC704 <b>\uCD94\uAC00</b>"],['Tap the <b>Share button</b> <span class="kbd">\u2B06\uFE0E</span> at the bottom of the screen',"Choose <b>Add to Home Screen</b>","Tap <b>Add</b> at the top right"]):_(["\uC624\uB978\uCABD \uC704 <b>\u22EE</b> \uBA54\uB274 \uB204\uB974\uAE30","<b>\uC571 \uC124\uCE58</b> \uB610\uB294 <b>\uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00</b>","<b>\uC124\uCE58</b> \uB204\uB974\uAE30"],["Tap the <b>\u22EE</b> menu at the top right","<b>Install app</b> or <b>Add to Home screen</b>","Tap <b>Install</b>"]);ja(_("\u{1F4F1} \uC571\uC73C\uB85C \uC124\uCE58","\u{1F4F1} Install as an app"),`
    <div class="card center"><div style="font-size:44px">\u{1F3E1}</div><b>${_("\uD648 \uD654\uBA74\uC5D0 \uAC00\uC871 \uB9C8\uC744 \uC544\uC774\uCF58\uC744 \uB9CC\uB4E4\uC5B4\uC694","Put a family village icon on your home screen")}</b>
      <p class="muted" style="margin:6px 0 0">${_("\uB2E4\uC74C\uBD80\uD130\uB294 \uC544\uC774\uCF58\uB9CC \uB204\uB974\uBA74 \uBC14\uB85C \uC5F4\uB824\uC694. \uC778\uD130\uB137\uC774 \uC7A0\uAE50 \uB04A\uACA8\uB3C4 \uC5F4\uB9AC\uACE0, \uC4F4 \uAE00\uC740 \uC5F0\uACB0\uB418\uBA74 \uBCF4\uB0B4\uC838\uC694","Next time, just tap the icon. It opens even if the internet drops for a moment, and what you write is sent once you're connected")}</p></div>
    ${i.length?`<div class="card"><b>${_("\uBA3C\uC800, \uC9C0\uAE08 \uC571 \uC548\uC758 \uBE0C\uB77C\uC6B0\uC800\uB77C\uBA74","First, if you're in an app's built-in browser")}</b><ol class="howto">${i.map(s=>`<li>${s}</li>`).join("")}</ol></div>`:""}
    <div class="card"><b>${t?_("\uC544\uC774\uD3F0 (Safari)","iPhone (Safari)"):_("\uC548\uB4DC\uB85C\uC774\uB4DC (\uD06C\uB86C\xB7\uC0BC\uC131 \uC778\uD130\uB137)","Android (Chrome \xB7 Samsung Internet)")}</b><ol class="howto">${r.map(s=>`<li>${s}</li>`).join("")}</ol></div>`)}var Wy=_([["","\u{1F333} \uB9C8\uC744 \uACF3\uACF3"],["me","\u{1F64B} \uB098"],["set","\u2699\uFE0F \uBCF4\uAE30 \xB7 \uC124\uC815"]],[["","\u{1F333} Around the village"],["me","\u{1F64B} Me"],["set","\u2699\uFE0F View \xB7 settings"]]);function km(n){let e=(r,s)=>`<button class="menu-item${s?" small":""}" data-i="${n.indexOf(r)}"${r.lang?` lang="${r.lang}"`:""}><span class="e">${r.emoji}</span>${Le(r.label)}</button>`;return{html:`
    <p class="muted">${_("\uC6D0\uD558\uB294 \uACF3\uC744 \uB204\uB974\uBA74 \uBC14\uB85C \uBCFC \uC218 \uC788\uC5B4\uC694","Tap a place to go straight there")}</p>
    ${Wy.map(([r,s])=>{let a=n.filter(o=>(o.g||"")===r);return a.length?`<h4 class="menu-sec">${s}</h4><div class="menu-grid${r==="set"?" small":""}">${a.map(o=>e(o,r==="set")).join("")}</div>`:""}).join("")}`,mount:r=>{r.querySelectorAll(".menu-item").forEach(s=>s.onclick=()=>{Ze(8),n[+s.dataset.i].go()})}}}function Zh(n){Hr(_("\uBC14\uB85C\uAC00\uAE30","Shortcuts"),km(n))}function ul(n,e=-1){return{html:(e>=0?[n[e]]:n).map(s=>`
    <div class="album-theme">
      <h3>${s.emoji} ${Le(s.title)} <span class="muted" style="font-size:13px">${_(`${s.photos.length}\uC7A5`,`${s.photos.length} ${s.photos.length===1?"photo":"photos"}`)}</span></h3>
      <div class="muted" style="font-size:13px">${Le(s.subtitle||"")}</div>
      <div class="album-grid">
        ${s.photos.map((a,o)=>`<button type="button" data-t="${n.indexOf(s)}" data-i="${o}" aria-label="${Le(a.caption||s.title+" "+(o+1))}"><img loading="lazy" src="${Le(Ir(a,"thumb"))}" alt="" /></button>`).join("")}
      </div>
    </div>`).join(""),mount:s=>{s.querySelectorAll(".album-grid img").forEach(a=>{a.onerror=()=>{let o=a.parentElement,l=n[+o.dataset.t];a.onerror=null,a.src=Fr(l,+o.dataset.i,l.photos[+o.dataset.i].src,300,300).toDataURL()}}),s.querySelectorAll(".album-grid button").forEach(a=>a.onclick=()=>dl(n,+a.dataset.t,+a.dataset.i))}}}function Gr(n,e=-1){Hr(e>=0?_(`${n[e].title} \uC568\uBC94`,`${n[e].title} album`):_("\uC804\uCCB4 \uC568\uBC94","Full album"),ul(n,e))}var Wn={themes:null,ti:0,i:0},Ve={s:1,x:0,y:0},Vs=()=>dn("#lightbox"),qa=()=>dn("#lightbox img");function Or(n){let e=qa();e.style.transition=n?"transform .25s ease":"none",e.style.transform=`translate(${Ve.x}px, ${Ve.y}px) scale(${Ve.s})`}function Gs(n=!1){Ve.s=1,Ve.x=Ve.y=0,Or(n)}function al(){let n=qa(),e=Vs(),t=Math.max(0,(n.offsetWidth*Ve.s-e.clientWidth)/2),i=Math.max(0,(n.offsetHeight*Ve.s-e.clientHeight)/2);Ve.x=Math.max(-t,Math.min(t,Ve.x)),Ve.y=Math.max(-i,Math.min(i,Ve.y))}function dl(n,e,t){Wn={themes:n,ti:e,i:t};let i=Vs();i.classList.contains("open")||(i.classList.add("open"),ar(Gh)),zm()}function Gh(){Vs().classList.remove("open"),Gs()}function Vh(){Vs().classList.contains("open")&&(Gh(),zr(Gh))}function zm(){let n=Wn.themes[Wn.ti],e=n.photos[Wn.i],t=qa();Gs(),t.onerror=()=>{t.onerror=null,t.src=Fr(n,Wn.i,e.src,800,800).toDataURL()},t.src=Ir(e),t.alt=e.caption||`${n.title} ${Wn.i+1}`,dn("#lightbox .cap").innerHTML=`${Le(e.caption||`${n.emoji} ${n.title}`)}<small>${Wn.i+1} / ${n.photos.length}</small>`}function Va(n){let e=Wn.themes[Wn.ti].photos.length;Wn.i=(Wn.i+n+e)%e,Ze(6),zm()}function qy(){let n=Vs(),e=new Map,t=null,i=0,r=()=>{let a=qa().getBoundingClientRect();return{x:a.left+a.width/2-Ve.x,y:a.top+a.height/2-Ve.y}};n.addEventListener("pointerdown",a=>{if(!a.target.closest("button")){try{n.setPointerCapture(a.pointerId)}catch{}if(e.set(a.pointerId,{x:a.clientX,y:a.clientY}),e.size===1)t={type:"one",sx:a.clientX,sy:a.clientY,ox:Ve.x,oy:Ve.y,moved:!1};else if(e.size===2){let[o,l]=[...e.values()],c=r(),h=(o.x+l.x)/2,u=(o.y+l.y)/2;t={type:"pinch",d:Math.hypot(o.x-l.x,o.y-l.y)||1,s:Ve.s,c,px:(h-c.x-Ve.x)/Ve.s,py:(u-c.y-Ve.y)/Ve.s}}}}),n.addEventListener("pointermove",a=>{if(!(!e.has(a.pointerId)||!t)){if(e.set(a.pointerId,{x:a.clientX,y:a.clientY}),t.type==="pinch"&&e.size>=2){let[o,l]=[...e.values()];Ve.s=Math.max(1,Math.min(4,t.s*Math.hypot(o.x-l.x,o.y-l.y)/t.d)),Ve.x=(o.x+l.x)/2-t.c.x-Ve.s*t.px,Ve.y=(o.y+l.y)/2-t.c.y-Ve.s*t.py,Or(!1)}else if(t.type==="one"){let o=a.clientX-t.sx,l=a.clientY-t.sy;if(Math.hypot(o,l)>8&&(t.moved=!0),Ve.s>1){Ve.x=t.ox+o,Ve.y=t.oy+l,Or(!1);return}let c=qa();c.style.transition="none",c.style.transform=Math.abs(o)>Math.abs(l)?`translateX(${o}px)`:`translateY(${Math.max(0,l)}px) scale(${1-Math.min(.15,Math.max(0,l)/1500)})`}}});let s=a=>{if(!e.has(a.pointerId)||(e.delete(a.pointerId),!t))return;if(t.type==="pinch"){if(e.size===1){let[h]=[...e.values()];t={type:"one",sx:h.x,sy:h.y,ox:Ve.x,oy:Ve.y,moved:!0}}else e.size===0&&(t=null,Ve.s<1.05?Gs(!0):(al(),Or(!0)));return}if(e.size>0)return;let o=a.clientX-t.sx,l=a.clientY-t.sy,c=t.moved;if(t=null,a.type==="pointercancel"){Ve.s>1?(al(),Or(!0)):Gs(!0);return}if(!c){let h=performance.now();if(h-i<320)if(i=0,Ve.s>1)Gs(!0);else{let u=r();Ve.s=2.5,Ve.x=-(a.clientX-u.x)*1.5,Ve.y=-(a.clientY-u.y)*1.5,al(),Or(!0)}else i=h;return}if(Ve.s>1){al(),Or(!0);return}Math.abs(o)>60&&Math.abs(o)>Math.abs(l)?Va(o<0?1:-1):l>110&&l>Math.abs(o)?Vh():Gs(!0)};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s)}function jy(){let n=dn("#modal .sheet"),e=dn("#modal .sheet-top"),t=null;e.addEventListener("pointerdown",r=>{if(!r.target.closest("button")){t={id:r.pointerId,y:r.clientY,t:performance.now()};try{e.setPointerCapture(r.pointerId)}catch{}n.style.transition="none"}}),e.addEventListener("pointermove",r=>{!t||r.pointerId!==t.id||(n.style.transform=`translateY(${Math.max(0,r.clientY-t.y)}px)`)});let i=r=>{if(!t||r.pointerId!==t.id)return;let s=r.clientY-t.y,a=s>40&&performance.now()-t.t<250;t=null,n.style.transition="",r.type==="pointerup"&&(s>100||a)?rn():n.style.transform=""};e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i)}var Hm="family-bigfont",Ka=()=>document.documentElement.classList.contains("big");function $h(n){document.documentElement.classList.toggle("big",n);try{localStorage.setItem(Hm,n?"1":"0")}catch{}document.querySelectorAll(".fs-toggle").forEach(e=>{e.textContent=n?_("\uAC00-","A-"):_("\uAC00+","A+"),e.setAttribute("aria-label",n?_("\uAE00\uC790 \uC791\uAC8C","Smaller text"):_("\uAE00\uC790 \uD06C\uAC8C","Larger text"))})}function Jh(){try{localStorage.getItem(Hm)==="1"&&$h(!0)}catch{}document.addEventListener("click",e=>{e.target.closest(".fs-toggle")&&(Ze(6),$h(!Ka()))}),dn("#modal-close").onclick=rn,dn("#modal .backdrop").onclick=rn;let n=Vs();n.querySelector(".lb-close").onclick=Vh,n.querySelector(".prev").onclick=()=>Va(-1),n.querySelector(".next").onclick=()=>Va(1),qy(),jy(),addEventListener("keydown",e=>{n.classList.contains("open")?(e.key==="ArrowRight"&&Va(1),e.key==="ArrowLeft"&&Va(-1),e.key==="Escape"&&Vh()):e.key==="Escape"&&rn()})}var Nu="160";var Cc=1,Xy=2,zi=3,vr=0,en=1,Nd=2;var Lc=2;var Xr=100;var Bu=204,Ou=205;var E0=0,Yy=1,Zy=2,gr=0,Jy=1,Ky=2,Qy=3,ev=4,tv=5,nv=6;var M0=300,fa=301,ga=302,ku=303,zu=304,Pc=306,fi=1e3,Hi=1001,Hu=1002,Gt=1003,Gm=1004;var Kh=1005;var Zn=1006,iv=1007;var Zl=1008;var Jr=1009;var Bd=1012,w0=1013,pr=1014,mr=1015,fo=1016,S0=1017,T0=1018,Kr=1020;var Pn=1023;var Qr=1026,ya=1027;var A0=1029;var R0=1031,C0=1033,Qh=33776,eu=33777,tu=33778,nu=33779,Vm=35840,$m=35841,Wm=35842,qm=35843,L0=36196,jm=37492,Xm=37496,Ym=37808,Zm=37809,Jm=37810,Km=37811,Qm=37812,ef=37813,tf=37814,nf=37815,rf=37816,sf=37817,af=37818,of=37819,lf=37820,cf=37821,iu=36492,hf=36494,uf=36495;var df=36284,pf=36285,mf=36286;var Jl=2300,Kl=2301,ru=2302,ff=2400,gf=2401,yf=2402;var P0=3e3,es=3001;var mi="",St="srgb",$i="srgb-linear",Od="display-p3",Ic="display-p3-linear",Ql="linear",ct="srgb",ec="rec709",tc="p3";var Ws=7680;var Gu=35044;var vf="300 es",Vu=1035,va=2e3,nc=2001,xr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yl=Math.PI/180,$u=180/Math.PI;function Vi(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Jt[255&n]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[255&e]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[63&t|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[255&i]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Vt(n,e,t){return Math.max(e,Math.min(t,n))}function rv(n,e){return(n%e+e)%e}function su(n,e,t){return(1-t)*n+t*e}function xf(n){return(n&n-1)==0&&n!==0}function Wu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("Invalid component type.")}}var ue=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],f=i[8],g=r[0],p=r[3],x=r[6],y=r[1],v=r[4],M=r[7],C=r[2],S=r[5],A=r[8];return s[0]=a*g+o*y+l*C,s[3]=a*p+o*v+l*S,s[6]=a*x+o*M+l*A,s[1]=c*g+h*y+u*C,s[4]=c*p+h*v+u*S,s[7]=c*x+h*M+u*A,s[2]=d*g+m*y+f*C,s[5]=d*p+m*v+f*S,s[8]=d*x+m*M+f*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,m=c*s-a*l,f=t*u+i*d+r*m;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=u*g,e[1]=(r*c-h*i)*g,e[2]=(o*i-r*a)*g,e[3]=d*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(au.makeScale(e,t)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,t){return this.premultiply(au.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},au=new ke;function I0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ic(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sv(){let n=ic("canvas");return n.style.display="block",n}var _f={};function co(n){n in _f||(_f[n]=!0,console.warn(n))}var bf=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ef=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),pl={[$i]:{transfer:Ql,primaries:ec,toReference:n=>n,fromReference:n=>n},[St]:{transfer:ct,primaries:ec,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ic]:{transfer:Ql,primaries:tc,toReference:n=>n.applyMatrix3(Ef),fromReference:n=>n.applyMatrix3(bf)},[Od]:{transfer:ct,primaries:tc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ef),fromReference:n=>n.applyMatrix3(bf).convertLinearToSRGB()}},av=new Set([$i,Ic]),st={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!av.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=pl[e].toReference;return(0,pl[t].fromReference)(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return pl[n].primaries},getTransfer:function(n){return n===mi?Ql:pl[n].transfer}};function pa(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function ou(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var qs,rc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=ic("canvas")),qs.width=e.width,qs.height=e.height;let i=qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ic("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*pa(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*pa(t[i]/255)):t[i]=pa(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ov=0,sc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=Vi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(lu(r[a].image)):s.push(lu(r[a]))}else s=lu(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function lu(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?rc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lv=0,xn=class n extends xr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Vi(),this.name="",this.source=new sc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===es?St:mi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==M0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fi:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Hu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case fi:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Hu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===St?es:P0}set encoding(e){co("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===es?St:mi}};xn.DEFAULT_IMAGE=null,xn.DEFAULT_MAPPING=M0,xn.DEFAULT_ANISOTROPY=1;var Rt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],f=l[9],g=l[2],p=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(f-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(f+p)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(m+1)/2,C=(x+1)/2,S=(h+d)/4,A=(u+g)/4,z=(f+p)/4;return v>M&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=S/i,s=A/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=S/r,s=z/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=z/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-f)*(p-f)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-f)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qu=class extends xr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(co("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===es?St:mi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new sc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends qu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ac=class extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ju=class extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var In=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],m=s[a+1],f=s[a+2],g=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=m,e[t+2]=f,void(e[t+3]=g);if(u!==g||l!==d||c!==m||h!==f){let p=1-o,x=l*d+c*m+h*f+u*g,y=x>=0?1:-1,v=1-x*x;if(v>Number.EPSILON){let C=Math.sqrt(v),S=Math.atan2(C,x*y);p=Math.sin(p*S)/C,o=Math.sin(o*S)/C}let M=o*y;if(l=l*p+d*M,c=c*p+m*M,h=h*p+f*M,u=u*p+g*M,p===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],m=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*m-c*d,e[t+1]=l*f+h*d+c*u-o*m,e[t+2]=c*f+h*m+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),m=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*m*f,this._y=c*m*u-d*h*f,this._z=c*h*f+d*m*u,this._w=c*h*u-d*m*f;break;case"YXZ":this._x=d*h*u+c*m*f,this._y=c*m*u-d*h*f,this._z=c*h*f-d*m*u,this._w=c*h*u+d*m*f;break;case"ZXY":this._x=d*h*u-c*m*f,this._y=c*m*u+d*h*f,this._z=c*h*f+d*m*u,this._w=c*h*u-d*m*f;break;case"ZYX":this._x=d*h*u-c*m*f,this._y=c*m*u+d*h*f,this._z=c*h*f-d*m*u,this._w=c*h*u+d*m*f;break;case"YZX":this._x=d*h*u+c*m*f,this._y=c*m*u+d*h*f,this._z=c*h*f-d*m*u,this._w=c*h*u-d*m*f;break;case"XZY":this._x=d*h*u-c*m*f,this._y=c*m*u-d*h*f,this._z=c*h*f+d*m*u,this._w=c*h*u+d*m*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cu.copy(this).projectOnVector(e),this.sub(cu)}reflect(e){return this.sub(cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},cu=new R,Mf=new In,ei=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(s,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ml.copy(i.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qa),fl.subVectors(this.max,Qa),js.subVectors(e.a,Qa),Xs.subVectors(e.b,Qa),Ys.subVectors(e.c,Qa),lr.subVectors(Xs,js),cr.subVectors(Ys,Xs),Vr.subVectors(js,Ys);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Vr.z,Vr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Vr.z,0,-Vr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Vr.y,Vr.x,0];return!!hu(t,js,Xs,Ys,fl)&&(t=[1,0,0,0,1,0,0,0,1],!!hu(t,js,Xs,Ys,fl)&&(gl.crossVectors(lr,cr),t=[gl.x,gl.y,gl.z],hu(t,js,Xs,Ys,fl)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(jn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ui=[new R,new R,new R,new R,new R,new R,new R,new R],jn=new R,ml=new ei,js=new R,Xs=new R,Ys=new R,lr=new R,cr=new R,Vr=new R,Qa=new R,fl=new R,gl=new R,$r=new R;function hu(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){$r.fromArray(n,s);let o=r.x*Math.abs($r.x)+r.y*Math.abs($r.y)+r.z*Math.abs($r.z),l=e.dot($r),c=t.dot($r),h=i.dot($r);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var cv=new ei,eo=new R,uu=new R,ti=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):cv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);let t=eo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(eo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(uu)),this.expandByPoint(eo.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ni=new R,du=new R,yl=new R,hr=new R,pu=new R,vl=new R,mu=new R,ts=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){du.copy(e).add(t).multiplyScalar(.5),yl.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(du);let s=.5*e.distanceTo(t),a=-this.direction.dot(yl),o=hr.dot(this.direction),l=-hr.dot(yl),c=hr.lengthSq(),h=Math.abs(1-a*a),u,d,m,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let g=1/h;u*=g,d*=g,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(du).addScaledVector(yl,d),m}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);let i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){pu.subVectors(t,e),vl.subVectors(i,e),mu.crossVectors(pu,vl);let a,o=this.direction.dot(mu);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}hr.subVectors(this.origin,e);let l=a*this.direction.dot(vl.crossVectors(hr,vl));if(l<0)return null;let c=a*this.direction.dot(pu.cross(hr));if(c<0||l+c>o)return null;let h=-a*hr.dot(mu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,m,f,g,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,m,f,g,p)}set(e,t,i,r,s,a,o,l,c,h,u,d,m,f,g,p){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=m,x[7]=f,x[11]=g,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Zs.setFromMatrixColumn(e,0).length(),s=1/Zs.setFromMatrixColumn(e,1).length(),a=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,m=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+f*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=f+m*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,m=l*u,f=c*h,g=c*u;t[0]=d+g*o,t[4]=f*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-f,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,m=l*u,f=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=f+m*o,t[1]=m+f*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,m=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=f*c-m,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=m*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,m=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=f*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+f,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*l,m=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=m*u-f,t[2]=f*u-m,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hv,e,uv)}lookAt(e,t,i){let r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),ur.crossVectors(i,yn),ur.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),ur.crossVectors(i,yn)),ur.normalize(),xl.crossVectors(yn,ur),r[0]=ur.x,r[4]=xl.x,r[8]=yn.x,r[1]=ur.y,r[5]=xl.y,r[9]=yn.y,r[2]=ur.z,r[6]=xl.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],f=i[2],g=i[6],p=i[10],x=i[14],y=i[3],v=i[7],M=i[11],C=i[15],S=r[0],A=r[4],z=r[8],L=r[12],F=r[1],$=r[5],b=r[9],P=r[13],N=r[2],k=r[6],J=r[10],X=r[14],j=r[3],Y=r[7],G=r[11],Z=r[15];return s[0]=a*S+o*F+l*N+c*j,s[4]=a*A+o*$+l*k+c*Y,s[8]=a*z+o*b+l*J+c*G,s[12]=a*L+o*P+l*X+c*Z,s[1]=h*S+u*F+d*N+m*j,s[5]=h*A+u*$+d*k+m*Y,s[9]=h*z+u*b+d*J+m*G,s[13]=h*L+u*P+d*X+m*Z,s[2]=f*S+g*F+p*N+x*j,s[6]=f*A+g*$+p*k+x*Y,s[10]=f*z+g*b+p*J+x*G,s[14]=f*L+g*P+p*X+x*Z,s[3]=y*S+v*F+M*N+C*j,s[7]=y*A+v*$+M*k+C*Y,s[11]=y*z+v*b+M*J+C*G,s[15]=y*L+v*P+M*X+C*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14];return e[3]*(+s*l*u-r*c*u-s*o*d+i*c*d+r*o*m-i*l*m)+e[7]*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*h-s*l*h)+e[11]*(+t*c*u-t*o*m-s*a*u+i*a*m+s*o*h-i*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],f=e[12],g=e[13],p=e[14],x=e[15],y=u*p*c-g*d*c+g*l*m-o*p*m-u*l*x+o*d*x,v=f*d*c-h*p*c-f*l*m+a*p*m+h*l*x-a*d*x,M=h*g*c-f*u*c+f*o*m-a*g*m-h*o*x+a*u*x,C=f*u*l-h*g*l-f*o*d+a*g*d+h*o*p-a*u*p,S=t*y+i*v+r*M+s*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/S;return e[0]=y*A,e[1]=(g*d*s-u*p*s-g*r*m+i*p*m+u*r*x-i*d*x)*A,e[2]=(o*p*s-g*l*s+g*r*c-i*p*c-o*r*x+i*l*x)*A,e[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*m-i*l*m)*A,e[4]=v*A,e[5]=(h*p*s-f*d*s+f*r*m-t*p*m-h*r*x+t*d*x)*A,e[6]=(f*l*s-a*p*s-f*r*c+t*p*c+a*r*x-t*l*x)*A,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*m+t*l*m)*A,e[8]=M*A,e[9]=(f*u*s-h*g*s-f*i*m+t*g*m+h*i*x-t*u*x)*A,e[10]=(a*g*s-f*o*s+f*i*c-t*g*c-a*i*x+t*o*x)*A,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*m-t*o*m)*A,e[12]=C*A,e[13]=(h*g*r-f*u*r+f*i*d-t*g*d-h*i*p+t*u*p)*A,e[14]=(f*o*r-a*g*r-f*i*l+t*g*l+a*i*p-t*o*p)*A,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*d+t*o*d)*A,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,m=s*h,f=s*u,g=a*h,p=a*u,x=o*u,y=l*c,v=l*h,M=l*u,C=i.x,S=i.y,A=i.z;return r[0]=(1-(g+x))*C,r[1]=(m+M)*C,r[2]=(f-v)*C,r[3]=0,r[4]=(m-M)*S,r[5]=(1-(d+x))*S,r[6]=(p+y)*S,r[7]=0,r[8]=(f+v)*A,r[9]=(p-y)*A,r[10]=(1-(d+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Zs.set(r[0],r[1],r[2]).length(),a=Zs.set(r[4],r[5],r[6]).length(),o=Zs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xn.copy(this);let l=1/s,c=1/a,h=1/o;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=c,Xn.elements[5]*=c,Xn.elements[6]*=c,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,t.setFromRotationMatrix(Xn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),m,f;if(o===va)m=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==nc)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);m=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(a-s),d=(t+e)*c,m=(i+r)*h,f,g;if(o===va)f=(a+s)*u,g=-2*u;else{if(o!==nc)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,g=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Zs=new R,Xn=new Fe,hv=new R(0,0,0),uv=new R(1,1,1),ur=new R,xl=new R,yn=new R,wf=new Fe,Sf=new In,xa=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xa.DEFAULT_ORDER="XYZ";var go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},dv=0,Tf=new R,Js=new In,Bi=new Fe,_l=new R,to=new R,pv=new R,mv=new In,Af=new R(1,0,0),Rf=new R(0,1,0),Cf=new R(0,0,1),fv={type:"added"},gv={type:"removed"},Ht=class n extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new R,t=new xa,i=new In,r=new R(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new ke}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(Af,e)}rotateY(e){return this.rotateOnAxis(Rf,e)}rotateZ(e){return this.rotateOnAxis(Cf,e)}translateOnAxis(e,t){return Tf.copy(e).applyQuaternion(this.quaternion),this.position.add(Tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Af,e)}translateY(e){return this.translateOnAxis(Rf,e)}translateZ(e){return this.translateOnAxis(Cf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_l.copy(e):_l.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(to,_l,this.up):Bi.lookAt(_l,to,this.up),this.quaternion.setFromRotationMatrix(Bi),r&&(Bi.extractRotation(r.matrixWorld),Js.setFromRotationMatrix(Bi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gv)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,pv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let s=t[i];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++){let o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Ht.DEFAULT_UP=new R(0,1,0),Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yn=new R,Oi=new R,fu=new R,ki=new R,Ks=new R,Qs=new R,Lf=new R,gu=new R,yu=new R,vu=new R,bl=!1,fr=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yn.subVectors(e,t),r.cross(Yn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yn.subVectors(r,t),Oi.subVectors(i,t),fu.subVectors(e,t);let a=Yn.dot(Yn),o=Yn.dot(Oi),l=Yn.dot(fu),c=Oi.dot(Oi),h=Oi.dot(fu),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-m-f,f,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ki)!==null&&ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getUV(e,t,i,r,s,a,o,l){return bl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bl=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static isFrontFacing(e,t,i,r){return Yn.subVectors(i,t),Oi.subVectors(e,t),Yn.cross(Oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),.5*Yn.cross(Oi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return bl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bl=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Ks.subVectors(r,i),Qs.subVectors(s,i),gu.subVectors(e,i);let l=Ks.dot(gu),c=Qs.dot(gu);if(l<=0&&c<=0)return t.copy(i);yu.subVectors(e,r);let h=Ks.dot(yu),u=Qs.dot(yu);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ks,a);vu.subVectors(e,s);let m=Ks.dot(vu),f=Qs.dot(vu);if(f>=0&&m<=f)return t.copy(s);let g=m*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Qs,o);let p=h*f-m*u;if(p<=0&&u-h>=0&&m-f>=0)return Lf.subVectors(s,r),o=(u-h)/(u-h+(m-f)),t.copy(r).addScaledVector(Lf,o);let x=1/(p+g+d);return a=g*x,o=d*x,t.copy(i).addScaledVector(Ks,a).addScaledVector(Qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},El={h:0,s:0,l:0};function xu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var we=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=rv(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=xu(a,s,e+1/3),this.g=xu(a,s,e),this.b=xu(a,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=St){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let i=F0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}copyLinearToSRGB(e){return this.r=ou(e.r),this.g=ou(e.g),this.b=ou(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return st.fromWorkingColorSpace(Kt.copy(this),e),65536*Math.round(Vt(255*Kt.r,0,255))+256*Math.round(Vt(255*Kt.g,0,255))+Math.round(Vt(255*Kt.b,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Kt.copy(this),t);let i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=St){st.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,r=Kt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(El);let i=su(dr.h,El.h,t),r=su(dr.s,El.s,t),s=su(dr.l,El.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new we;we.NAMES=F0;var yv=0,gi=class extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=1,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bu,this.blendDst=Ou,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ou&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ze=class extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=E0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lb=vv();function vv(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var At=new R,Ml=new ue,mt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gu&&(e.usage=this.usage),e}};var oc=class extends mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var lc=class extends mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ue=class extends mt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var xv=0,Ln=new Fe,_u=new Ht,ea=new R,vn=new ei,no=new ei,zt=new R,rt=class n extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I0(e)?lc:oc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return _u.lookAt(e),_u.updateMatrix(),this.applyMatrix4(_u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ue(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new R,1/0);if(e){let i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];no.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(vn.min,no.min),vn.expandByPoint(zt),zt.addVectors(vn.max,no.max),vn.expandByPoint(zt)):(vn.expandByPoint(no.min),vn.expandByPoint(no.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)zt.fromBufferAttribute(o,c),l&&(ea.fromBufferAttribute(e,c),zt.add(ea)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let F=0;F<o;F++)c[F]=new R,h[F]=new R;let u=new R,d=new R,m=new R,f=new ue,g=new ue,p=new ue,x=new R,y=new R;function v(F,$,b){u.fromArray(r,3*F),d.fromArray(r,3*$),m.fromArray(r,3*b),f.fromArray(a,2*F),g.fromArray(a,2*$),p.fromArray(a,2*b),d.sub(u),m.sub(u),g.sub(f),p.sub(f);let P=1/(g.x*p.y-p.x*g.y);isFinite(P)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(P),y.copy(m).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(P),c[F].add(x),c[$].add(x),c[b].add(x),h[F].add(y),h[$].add(y),h[b].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let F=0,$=M.length;F<$;++F){let b=M[F],P=b.start;for(let N=P,k=P+b.count;N<k;N+=3)v(i[N+0],i[N+1],i[N+2])}let C=new R,S=new R,A=new R,z=new R;function L(F){A.fromArray(s,3*F),z.copy(A);let $=c[F];C.copy($),C.sub(A.multiplyScalar(A.dot($))).normalize(),S.crossVectors(z,$);let b=S.dot(h[F])<0?-1:1;l[4*F]=C.x,l[4*F+1]=C.y,l[4*F+2]=C.z,l[4*F+3]=b}for(let F=0,$=M.length;F<$;++F){let b=M[F],P=b.start;for(let N=P,k=P+b.count;N<k;N+=3)L(i[N+0]),L(i[N+1]),L(i[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new R,s=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,m=e.count;d<m;d+=3){let f=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),m=0,f=0;for(let g=0,p=l.length;g<p;g++){m=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let x=0;x<h;x++)d[f++]=c[m++]}return new mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pf=new Fe,Wr=new ts,wl=new ti,If=new R,ta=new R,na=new R,ia=new R,bu=new R,Sl=new R,Tl=new ue,Al=new ue,Rl=new ue,Ff=new R,Df=new R,Uf=new R,Cl=new R,Ll=new R,de=class extends Ht{constructor(e=new rt,t=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Sl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(bu.fromBufferAttribute(u,e),a?Sl.addScaledVector(bu,h):Sl.addScaledVector(bu.sub(t),h))}t.add(Sl)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(s),Wr.copy(e.ray).recast(e.near),wl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(wl,If)===null||Wr.origin.distanceToSquared(If)>(e.far-e.near)**2))return;Pf.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(Pf),i.boundingBox!==null&&Wr.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Wr)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let p=d[f],x=a[p.materialIndex];for(let y=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));y<v;y+=3)r=Pl(this,x,e,i,c,h,u,o.getX(y),o.getX(y+1),o.getX(y+2)),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}else for(let f=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);f<g;f+=3)r=Pl(this,a,e,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let p=d[f],x=a[p.materialIndex];for(let y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));y<v;y+=3)r=Pl(this,x,e,i,c,h,u,y,y+1,y+2),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}else for(let f=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);f<g;f+=3)r=Pl(this,a,e,i,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function Pl(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ta),n.getVertexPosition(l,na),n.getVertexPosition(c,ia);let h=function(u,d,m,f,g,p,x,y){let v;if(v=d.side===en?f.intersectTriangle(x,p,g,!0,y):f.intersectTriangle(g,p,x,d.side===vr,y),v===null)return null;Ll.copy(y),Ll.applyMatrix4(u.matrixWorld);let M=m.ray.origin.distanceTo(Ll);return M<m.near||M>m.far?null:{distance:M,point:Ll.clone(),object:u}}(n,e,t,i,ta,na,ia,Cl);if(h){r&&(Tl.fromBufferAttribute(r,o),Al.fromBufferAttribute(r,l),Rl.fromBufferAttribute(r,c),h.uv=fr.getInterpolation(Cl,ta,na,ia,Tl,Al,Rl,new ue)),s&&(Tl.fromBufferAttribute(s,o),Al.fromBufferAttribute(s,l),Rl.fromBufferAttribute(s,c),h.uv1=fr.getInterpolation(Cl,ta,na,ia,Tl,Al,Rl,new ue),h.uv2=h.uv1),a&&(Ff.fromBufferAttribute(a,o),Df.fromBufferAttribute(a,l),Uf.fromBufferAttribute(a,c),h.normal=fr.getInterpolation(Cl,ta,na,ia,Ff,Df,Uf,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};fr.getNormal(ta,na,ia,u.normal),h.face=u}return h}var fe=class n extends rt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,m=0;function f(g,p,x,y,v,M,C,S,A,z,L){let F=M/A,$=C/z,b=M/2,P=C/2,N=S/2,k=A+1,J=z+1,X=0,j=0,Y=new R;for(let G=0;G<J;G++){let Z=G*$-P;for(let ce=0;ce<k;ce++){let w=ce*F-b;Y[g]=w*y,Y[p]=Z*v,Y[x]=N,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[p]=0,Y[x]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ce/A),u.push(1-G/z),X+=1}}for(let G=0;G<z;G++)for(let Z=0;Z<A;Z++){let ce=d+Z+k*G,w=d+Z+k*(G+1),E=d+(Z+1)+k*(G+1),B=d+(Z+1)+k*G;l.push(ce,w,B),l.push(w,E,B),j+=6}o.addGroup(m,j,L),m+=j,d+=X}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function _a(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function an(n){let e={};for(let t=0;t<n.length;t++){let i=_a(n[t]);for(let r in i)e[r]=i[r]}return e}function D0(n){return n.getRenderTarget()===null?n.outputColorSpace:st.workingColorSpace}var _v={clone:_a,merge:an},ni=class extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},yo=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=va}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qt=class extends yo{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*$u*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Yl*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*$u*Math.atan(Math.tan(.5*Yl*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Yl*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ra=-90,Xu=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qt(ra,1,e,t);r.layers=this.layers,this.add(r);let s=new Qt(ra,1,e,t);s.layers=this.layers,this.add(s);let a=new Qt(ra,1,e,t);a.layers=this.layers,this.add(a);let o=new Qt(ra,1,e,t);o.layers=this.layers,this.add(o);let l=new Qt(ra,1,e,t);l.layers=this.layers,this.add(l);let c=new Qt(ra,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===va)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==nc)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},cc=class extends xn{constructor(e,t,i,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:fa,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yu=class extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(co("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===es?St:mi),this.texture=new cc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fe(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:_a(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:0});s.uniforms.tEquirect.value=t;let a=new de(r,s),o=t.minFilter;return t.minFilter===Zl&&(t.minFilter=Zn),new Xu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},Eu=new R,bv=new R,Ev=new ke,Jn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Eu.subVectors(i,t).cross(bv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Eu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ev.getNormalMatrix(e),r=this.coplanarPoint(Eu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qr=new ti,Il=new R,ba=class{constructor(e=new Jn,t=new Jn,i=new Jn,r=new Jn,s=new Jn,a=new Jn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],m=r[8],f=r[9],g=r[10],p=r[11],x=r[12],y=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,p-m,M-x).normalize(),i[1].setComponents(l+s,d+c,p+m,M+x).normalize(),i[2].setComponents(l+a,d+h,p+f,M+y).normalize(),i[3].setComponents(l-a,d-h,p-f,M-y).normalize(),i[4].setComponents(l-o,d-u,p-g,M-v).normalize(),t===va)i[5].setComponents(l+o,d+u,p+g,M+v).normalize();else{if(t!==nc)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,g,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Il.x=r.normal.x>0?e.max.x:e.min.x,Il.y=r.normal.y>0?e.max.y:e.min.y,Il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function U0(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Mv(n,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(r){return r.isInterleavedBufferAttribute&&(r=r.data),i.get(r)},remove:function(r){r.isInterleavedBufferAttribute&&(r=r.data);let s=i.get(r);s&&(n.deleteBuffer(s.buffer),i.delete(r))},update:function(r,s){if(r.isGLBufferAttribute){let o=i.get(r);return void((!o||o.version<r.version)&&i.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version}))}r.isInterleavedBufferAttribute&&(r=r.data);let a=i.get(r);if(a===void 0)i.set(r,function(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer(),m;if(n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");m=n.HALF_FLOAT}else m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);m=n.UNSIGNED_BYTE}return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}(r,s));else if(a.version<r.version){if(a.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,o),u.count===-1&&d.length===0&&n.bufferSubData(c,0,h),d.length!==0){for(let m=0,f=d.length;m<f;m++){let g=d[m];t?n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count):n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h.subarray(g.start,g.start+g.count))}l.clearUpdateRanges()}u.count!==-1&&(t?n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,r,s),a.version=r.version}}}}var at=class n extends rt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,m=[],f=[],g=[],p=[];for(let x=0;x<h;x++){let y=x*d-a;for(let v=0;v<c;v++){let M=v*u-s;f.push(M,-y,0),g.push(0,0,1),p.push(v/o),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let y=0;y<o;y++){let v=y+c*x,M=y+c*(x+1),C=y+1+c*(x+1),S=y+1+c*x;m.push(v,M,S),m.push(M,C,S)}this.setIndex(m),this.setAttribute("position",new Ue(f,3)),this.setAttribute("normal",new Ue(g,3)),this.setAttribute("uv",new Ue(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Oe={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},pe={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},pi={basic:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new we(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:an([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:an([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new we(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:an([pe.points,pe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:an([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:an([pe.common,pe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:an([pe.sprite,pe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:an([pe.common,pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:an([pe.lights,pe.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};pi.physical={uniforms:an([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var Fl={r:0,b:0,g:0};function wv(n,e,t,i,r,s,a){let o=new we(0),l,c,h=s===!0?0:1,u=null,d=0,m=null;function f(g,p){g.getRGB(Fl,D0(n)),i.buffers.color.setClear(Fl.r,Fl.g,Fl.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),h=p,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,f(o,h)},render:function(g,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?f(o,h):y&&y.isColor&&(f(y,1),x=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Pc)?(c===void 0&&(c=new de(new fe(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:_a(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,C,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=st.getTransfer(y.colorSpace)!==ct,u===y&&d===y.version&&m===n.toneMapping||(c.material.needsUpdate=!0,u=y,d=y.version,m=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new de(new at(2,2),new ni({name:"BackgroundMaterial",uniforms:_a(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=st.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),u===y&&d===y.version&&m===n.toneMapping||(l.material.needsUpdate=!0,u=y,d=y.version,m=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}}}function Sv(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null),c=l,h=!1;function u(C){return i.isWebGL2?n.bindVertexArray(C):s.bindVertexArrayOES(C)}function d(C){return i.isWebGL2?n.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function m(C){let S=[],A=[],z=[];for(let L=0;L<r;L++)S[L]=0,A[L]=0,z[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:A,attributeDivisors:z,object:C,attributes:{},index:null}}function f(){let C=c.newAttributes;for(let S=0,A=C.length;S<A;S++)C[S]=0}function g(C){p(C,0)}function p(C,S){let A=c.newAttributes,z=c.enabledAttributes,L=c.attributeDivisors;A[C]=1,z[C]===0&&(n.enableVertexAttribArray(C),z[C]=1),L[C]!==S&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,S),L[C]=S)}function x(){let C=c.newAttributes,S=c.enabledAttributes;for(let A=0,z=S.length;A<z;A++)S[A]!==C[A]&&(n.disableVertexAttribArray(A),S[A]=0)}function y(C,S,A,z,L,F,$){$===!0?n.vertexAttribIPointer(C,S,A,L,F):n.vertexAttribPointer(C,S,A,z,L,F)}function v(){M(),h=!0,c!==l&&(c=l,u(c.object))}function M(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(C,S,A,z,L){let F=!1;if(a){let $=function(b,P,N){let k=N.wireframe===!0,J=o[b.id];J===void 0&&(J={},o[b.id]=J);let X=J[P.id];X===void 0&&(X={},J[P.id]=X);let j=X[k];return j===void 0&&(j=m(i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()),X[k]=j),j}(z,A,S);c!==$&&(c=$,u(c.object)),F=function(b,P,N,k){let J=c.attributes,X=P.attributes,j=0,Y=N.getAttributes();for(let G in Y)if(Y[G].location>=0){let Z=J[G],ce=X[G];if(ce===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;j++}return c.attributesNum!==j||c.index!==k}(C,z,A,L),F&&function(b,P,N,k){let J={},X=P.attributes,j=0,Y=N.getAttributes();for(let G in Y)if(Y[G].location>=0){let Z=X[G];Z===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor));let ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),J[G]=ce,j++}c.attributes=J,c.attributesNum=j,c.index=k}(C,z,A,L)}else{let $=S.wireframe===!0;c.geometry===z.id&&c.program===A.id&&c.wireframe===$||(c.geometry=z.id,c.program=A.id,c.wireframe=$,F=!0)}L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(F||h)&&(h=!1,function($,b,P,N){if(i.isWebGL2===!1&&($.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let k=N.attributes,J=P.getAttributes(),X=b.defaultAttributeValues;for(let j in J){let Y=J[j];if(Y.location>=0){let G=k[j];if(G===void 0&&(j==="instanceMatrix"&&$.instanceMatrix&&(G=$.instanceMatrix),j==="instanceColor"&&$.instanceColor&&(G=$.instanceColor)),G!==void 0){let Z=G.normalized,ce=G.itemSize,w=t.get(G);if(w===void 0)continue;let E=w.buffer,B=w.type,O=w.bytesPerElement,I=i.isWebGL2===!0&&(B===n.INT||B===n.UNSIGNED_INT||G.gpuType===w0);if(G.isInterleavedBufferAttribute){let V=G.data,D=V.stride,H=G.offset;if(V.isInstancedInterleavedBuffer){for(let q=0;q<Y.locationSize;q++)p(Y.location+q,V.meshPerAttribute);$.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let q=0;q<Y.locationSize;q++)g(Y.location+q);n.bindBuffer(n.ARRAY_BUFFER,E);for(let q=0;q<Y.locationSize;q++)y(Y.location+q,ce/Y.locationSize,B,Z,D*O,(H+ce/Y.locationSize*q)*O,I)}else{if(G.isInstancedBufferAttribute){for(let V=0;V<Y.locationSize;V++)p(Y.location+V,G.meshPerAttribute);$.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let V=0;V<Y.locationSize;V++)g(Y.location+V);n.bindBuffer(n.ARRAY_BUFFER,E);for(let V=0;V<Y.locationSize;V++)y(Y.location+V,ce/Y.locationSize,B,Z,ce*O,ce/Y.locationSize*V*O,I)}}else if(X!==void 0){let Z=X[j];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(Y.location,Z);break;case 3:n.vertexAttrib3fv(Y.location,Z);break;case 4:n.vertexAttrib4fv(Y.location,Z);break;default:n.vertexAttrib1fv(Y.location,Z)}}}}x()}(C,S,A,z),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))},reset:v,resetDefaultState:M,dispose:function(){v();for(let C in o){let S=o[C];for(let A in S){let z=S[A];for(let L in z)d(z[L].object),delete z[L];delete S[A]}delete o[C]}},releaseStatesOfGeometry:function(C){if(o[C.id]===void 0)return;let S=o[C.id];for(let A in S){let z=S[A];for(let L in z)d(z[L].object),delete z[L];delete S[A]}delete o[C.id]},releaseStatesOfProgram:function(C){for(let S in o){let A=o[S];if(A[C.id]===void 0)continue;let z=A[C.id];for(let L in z)d(z[L].object),delete z[L];delete A[C.id]}},initAttributes:f,enableAttribute:g,disableUnusedAttributes:x}}function Tv(n,e,t,i){let r=i.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){n.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(r)c=n,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let u=0;u<l;u++)h+=o[u];t.update(h,s,1)}}}function Av(n,e,t){let i;function r(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,v=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:y&&v,maxSamples:s?n.getParameter(n.MAX_SAMPLES):0}}function Rv(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Jn,o=new ke,l={value:null,needsUpdate:!1};function c(h,u,d,m){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=l.value,m!==!0||g===null){let p=d+4*f,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=d;y!==f;++y,v+=4)a.copy(h[y]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let m=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||s&&!g)s?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let x=s?0:i,y=4*x,v=p.clippingState||null;l.value=v,v=c(m,u,y,d);for(let M=0;M!==y;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=x}}}function Cv(n){let e=new WeakMap;function t(r,s){return s===ku?r.mapping=fa:s===zu&&(r.mapping=ga),r}function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===ku||s===zu){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Yu(a.height/2);return o.fromEquirectangularTexture(n,r),e.set(r,o),r.addEventListener("dispose",i),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var hc=class extends yo{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nf=[.125,.215,.35,.446,.526,.582],io=20,Mu=new hc,Bf=new we,wu=null,Su=0,Tu=0,jr=(1+Math.sqrt(5))/2,sa=1/jr,Of=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,jr,sa),new R(0,jr,-sa),new R(sa,0,jr),new R(-sa,0,jr),new R(jr,sa,0),new R(-jr,sa,0)],uc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){wu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wu,Su,Tu),e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fa||e.mapping===ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:fo,format:Pn,colorSpace:$i,depthBuffer:!1},r=kf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kf(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Nf.length;for(let d=0;d<u;d++){let m=Math.pow(2,h);l.push(m);let f=1/m;d>a-4?f=Nf[d-a+4-1]:d===0&&(f=0),c.push(f);let g=1/(m-2),p=-g,x=1+g,y=[p,p,x,p,x,x,p,p,x,x,p,x],v=6,M=6,C=3,S=2,A=1,z=new Float32Array(C*M*v),L=new Float32Array(S*M*v),F=new Float32Array(A*M*v);for(let b=0;b<v;b++){let P=b%3*2/3-1,N=b>2?0:-1,k=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];z.set(k,C*M*b),L.set(y,S*M*b);let J=[b,b,b,b,b,b];F.set(J,A*M*b)}let $=new rt;$.setAttribute("position",new mt(z,C)),$.setAttribute("uv",new mt(L,S)),$.setAttribute("faceIndex",new mt(F,A)),o.push($),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(io),h=new R(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:io,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return r}_compileMaterial(e){let t=new de(this._lodPlanes[0],e);this._renderer.compile(t,Mu)}_sceneToCubeUV(e,t,i,r){let s=new Qt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Bf),l.toneMapping=gr,l.autoClear=!1;let u=new ze({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),d=new de(new fe,u),m=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,m=!0):(u.color.copy(Bf),m=!0);for(let g=0;g<6;g++){let p=g%3;p===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):p===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));let x=this._cubeSize;Dl(r,p*x,g>2?x:0,x,x),l.setRenderTarget(r),m&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===fa||e.mapping===ga;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zf());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Dl(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Mu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Of[(r-1)%Of.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new de(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/m,g=isFinite(s)?1+Math.floor(3*f):io;g>io&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let p=[],x=0;for(let M=0;M<io;++M){let C=M/f,S=Math.exp(-C*C/2);p.push(S),M===0?x+=S:M<g&&(x+=2*S)}for(let M=0;M<p.length;M++)p[M]=p[M]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-i;let v=this._sizeLods[r];Dl(t,3*v*(r>y-4?r-y+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,Mu)}};function kf(n,e,t){let i=new Qn(n,e,t);return i.texture.mapping=Pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function zf(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Hf(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function kd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lv(n){let e=new WeakMap,t=null;function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===ku||s===zu,o=s===fa||s===ga;if(a||o){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let l=e.get(r);return t===null&&(t=new uc(n)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),e.set(r,l),l.texture}if(e.has(r))return e.get(r).texture;{let l=r.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0,u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u}(l)){t===null&&(t=new uc(n));let c=a?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,c),r.addEventListener("dispose",i),c.texture}return null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Pv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Iv(n,e,t,i){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let m=0,f=d.length;m<f;m++)e.remove(d[m])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let g=h.array;d=h.version;for(let p=0,x=g.length;p<x;p+=3){let y=g[p+0],v=g[p+1],M=g[p+2];c.push(y,v,v,M,M,y)}}else{if(u===void 0)return;{let g=u.array;d=u.version;for(let p=0,x=g.length/3-1;p<x;p+=3){let y=p+0,v=p+1,M=p+2;c.push(y,v,v,M,M,y)}}}let m=new(I0(c)?lc:oc)(c,1);m.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,m)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],n.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let m=0,f=d.length;m<f;m++)e.update(d[m],n.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Fv(n,e,t,i){let r=i.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){n.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(r)u=n,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d]/o,c[d]);else{u.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];t.update(d,s,1)}}}function Dv(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Uv(n,e){return n[0]-e[0]}function Nv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Bv(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,a=new Rt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=d!==void 0?d.length:0,f=s.get(c);if(f===void 0||f.count!==m){let P=function(){$.dispose(),s.delete(c),c.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],S=c.morphAttributes.color||[],A=0;x===!0&&(A=1),y===!0&&(A=2),v===!0&&(A=3);let z=c.attributes.position.count*A,L=1;z>e.maxTextureSize&&(L=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);let F=new Float32Array(z*L*4*m),$=new ac(F,z,L,m);$.type=mr,$.needsUpdate=!0;let b=4*A;for(let N=0;N<m;N++){let k=M[N],J=C[N],X=S[N],j=z*L*4*N;for(let Y=0;Y<k.count;Y++){let G=Y*b;x===!0&&(a.fromBufferAttribute(k,Y),F[j+G+0]=a.x,F[j+G+1]=a.y,F[j+G+2]=a.z,F[j+G+3]=0),y===!0&&(a.fromBufferAttribute(J,Y),F[j+G+4]=a.x,F[j+G+5]=a.y,F[j+G+6]=a.z,F[j+G+7]=0),v===!0&&(a.fromBufferAttribute(X,Y),F[j+G+8]=a.x,F[j+G+9]=a.y,F[j+G+10]=a.z,F[j+G+11]=X.itemSize===4?a.w:1)}}f={count:m,texture:$,size:new ue(z,L)},s.set(c,f),c.addEventListener("dispose",P)}let g=0;for(let x=0;x<u.length;x++)g+=u[x];let p=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",u),h.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}else{let d=u===void 0?0:u.length,m=i[c.id];if(m===void 0||m.length!==d){m=[];for(let y=0;y<d;y++)m[y]=[y,0];i[c.id]=m}for(let y=0;y<d;y++){let v=m[y];v[0]=y,v[1]=u[y]}m.sort(Nv);for(let y=0;y<8;y++)y<d&&m[y][1]?(o[y][0]=m[y][0],o[y][1]=m[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Uv);let f=c.morphAttributes.position,g=c.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let v=o[y],M=v[0],C=v[1];M!==Number.MAX_SAFE_INTEGER&&C?(f&&c.getAttribute("morphTarget"+y)!==f[M]&&c.setAttribute("morphTarget"+y,f[M]),g&&c.getAttribute("morphNormal"+y)!==g[M]&&c.setAttribute("morphNormal"+y,g[M]),r[y]=C,p+=C):(f&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),g&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}let x=c.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}}}function Ov(n,e,t,i){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,n.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var dc=class extends xn{constructor(e,t,i,r,s,a,o,l,c,h){if((h=h!==void 0?h:Qr)!==Qr&&h!==ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Qr&&(i=pr),i===void 0&&h===ya&&(i=Kr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},N0=new xn,B0=new dc(1,1);B0.compareFunction=515;var O0=new ac,k0=new ju,z0=new cc,Gf=[],Vf=[],$f=new Float32Array(16),Wf=new Float32Array(9),qf=new Float32Array(4);function Ma(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Gf[r];if(s===void 0&&(s=new Float32Array(r),Gf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fc(n,e){let t=Vf[e];t===void 0&&(t=new Int32Array(e),Vf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function Hv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function Gv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function Vv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Ft(t,i))return;qf.set(i),n.uniformMatrix2fv(this.addr,!1,qf),Dt(t,i)}}function $v(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Ft(t,i))return;Wf.set(i),n.uniformMatrix3fv(this.addr,!1,Wf),Dt(t,i)}}function Wv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Ft(t,i))return;$f.set(i),n.uniformMatrix4fv(this.addr,!1,$f),Dt(t,i)}}function qv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function Xv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function Yv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function Zv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function Kv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function Qv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function ex(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?B0:N0;t.setTexture2D(e||s,r)}function tx(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||k0,r)}function nx(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||z0,r)}function ix(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||O0,r)}function rx(n,e){n.uniform1fv(this.addr,e)}function sx(n,e){let t=Ma(e,this.size,2);n.uniform2fv(this.addr,t)}function ax(n,e){let t=Ma(e,this.size,3);n.uniform3fv(this.addr,t)}function ox(n,e){let t=Ma(e,this.size,4);n.uniform4fv(this.addr,t)}function lx(n,e){let t=Ma(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cx(n,e){let t=Ma(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hx(n,e){let t=Ma(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ux(n,e){n.uniform1iv(this.addr,e)}function dx(n,e){n.uniform2iv(this.addr,e)}function px(n,e){n.uniform3iv(this.addr,e)}function mx(n,e){n.uniform4iv(this.addr,e)}function fx(n,e){n.uniform1uiv(this.addr,e)}function gx(n,e){n.uniform2uiv(this.addr,e)}function yx(n,e){n.uniform3uiv(this.addr,e)}function vx(n,e){n.uniform4uiv(this.addr,e)}function xx(n,e,t){let i=this.cache,r=e.length,s=Fc(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||N0,s[a])}function _x(n,e,t){let i=this.cache,r=e.length,s=Fc(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||k0,s[a])}function bx(n,e,t){let i=this.cache,r=e.length,s=Fc(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||z0,s[a])}function Ex(n,e,t){let i=this.cache,r=e.length,s=Fc(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||O0,s[a])}var Zu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(r){switch(r){case 5126:return kv;case 35664:return zv;case 35665:return Hv;case 35666:return Gv;case 35674:return Vv;case 35675:return $v;case 35676:return Wv;case 5124:case 35670:return qv;case 35667:case 35671:return jv;case 35668:case 35672:return Xv;case 35669:case 35673:return Yv;case 5125:return Zv;case 36294:return Jv;case 36295:return Kv;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}(t.type)}},Ju=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(r){switch(r){case 5126:return rx;case 35664:return sx;case 35665:return ax;case 35666:return ox;case 35674:return lx;case 35675:return cx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return dx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return fx;case 36294:return gx;case 36295:return yx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return _x;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Ex}}(t.type)}},Ku=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},Au=/(\w+)(\])?(\[|\.)?/g;function jf(n,e){n.seq.push(e),n.map[e.id]=e}function Mx(n,e,t){let i=n.name,r=i.length;for(Au.lastIndex=0;;){let s=Au.exec(i),a=Au.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){jf(t,c===void 0?new Zu(o,n,e):new Ju(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new Ku(o),jf(t,h)),t=h}}}var ma=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r);Mx(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Xf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var wx=37297,Sx=0;function Yf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let m=u;m<d;m++){let f=m+1;h.push(`${f===l?">":" "} ${f}: ${c[m]}`)}return h.join(`
`)}(n.getShaderSource(e),a)}return r}function Tx(n,e){let t=function(i){let r=st.getPrimaries(st.workingColorSpace),s=st.getPrimaries(i),a;switch(r===s?a="":r===tc&&s===ec?a="LinearDisplayP3ToLinearSRGB":r===ec&&s===tc&&(a="LinearSRGBToLinearDisplayP3"),i){case $i:case Ic:return[a,"LinearTransferOETF"];case St:case Od:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}}(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ax(n,e){let t;switch(e){case Jy:t="Linear";break;case Ky:t="Reinhard";break;case Qy:t="OptimizedCineon";break;case ev:t="ACESFilmic";break;case nv:t="AgX";break;case tv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function aa(n){return n!==""}function Zf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qu(n){return n.replace(Rx,Lx)}var Cx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lx(n,e){let t=Oe[e];if(t===void 0){let i=Cx.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Qu(t)}var Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(n){return n.replace(Px,Ix)}function Ix(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fx(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(b){let P="SHADOWMAP_TYPE_BASIC";return b.shadowMapType===Cc?P="SHADOWMAP_TYPE_PCF":b.shadowMapType===Xy?P="SHADOWMAP_TYPE_PCF_SOFT":b.shadowMapType===zi&&(P="SHADOWMAP_TYPE_VSM"),P}(t),c=function(b){let P="ENVMAP_TYPE_CUBE";if(b.envMap)switch(b.envMapMode){case fa:case ga:P="ENVMAP_TYPE_CUBE";break;case Pc:P="ENVMAP_TYPE_CUBE_UV"}return P}(t),h=function(b){let P="ENVMAP_MODE_REFLECTION";return b.envMap&&b.envMapMode===ga&&(P="ENVMAP_MODE_REFRACTION"),P}(t),u=function(b){let P="ENVMAP_BLENDING_NONE";if(b.envMap)switch(b.combine){case E0:P="ENVMAP_BLENDING_MULTIPLY";break;case Yy:P="ENVMAP_BLENDING_MIX";break;case Zy:P="ENVMAP_BLENDING_ADD"}return P}(t),d=function(b){let P=b.envMapCubeUVHeight;if(P===null)return null;let N=Math.log2(P)-2,k=1/P;return{texelWidth:1/(3*Math.max(Math.pow(2,N),112)),texelHeight:k,maxMip:N}}(t),m=t.isWebGL2?"":function(b){return[b.extensionDerivatives||b.envMapCubeUVHeight||b.bumpMap||b.normalMapTangentSpace||b.clearcoatNormalMap||b.flatShading||b.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(b.extensionFragDepth||b.logarithmicDepthBuffer)&&b.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",b.extensionDrawBuffers&&b.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(b.extensionShaderTextureLOD||b.envMap||b.transmission)&&b.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(aa).join(`
`)}(t),f=function(b){return[b.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(aa).join(`
`)}(t),g=function(b){let P=[];for(let N in b){let k=b[N];k!==!1&&P.push("#define "+N+" "+k)}return P.join(`
`)}(s),p=r.createProgram(),x,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),x.length>0&&(x+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),y.length>0&&(y+=`
`)):(x=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),y=[m,Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gr?"#define TONE_MAPPING":"",t.toneMapping!==gr?Oe.tonemapping_pars_fragment:"",t.toneMapping!==gr?Ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Tx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),a=Qu(a),a=Zf(a,t),a=Jf(a,t),o=Qu(o),o=Zf(o,t),o=Jf(o,t),a=Kf(a),o=Kf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=v+x+a,C=v+y+o,S=Xf(r,r.VERTEX_SHADER,M),A=Xf(r,r.FRAGMENT_SHADER,C);function z(b){if(n.debug.checkShaderErrors){let P=r.getProgramInfoLog(p).trim(),N=r.getShaderInfoLog(S).trim(),k=r.getShaderInfoLog(A).trim(),J=!0,X=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,S,A);else{let j=Yf(r,S,"vertex"),Y=Yf(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+P+`
`+j+`
`+Y)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):N!==""&&k!==""||(X=!1);X&&(b.diagnostics={runnable:J,programLog:P,vertexShader:{log:N,prefix:x},fragmentShader:{log:k,prefix:y}})}r.deleteShader(S),r.deleteShader(A),L=new ma(r,p),F=function(P,N){let k={},J=P.getProgramParameter(N,P.ACTIVE_ATTRIBUTES);for(let X=0;X<J;X++){let j=P.getActiveAttrib(N,X),Y=j.name,G=1;j.type===P.FLOAT_MAT2&&(G=2),j.type===P.FLOAT_MAT3&&(G=3),j.type===P.FLOAT_MAT4&&(G=4),k[Y]={type:j.type,location:P.getAttribLocation(N,Y),locationSize:G}}return k}(r,p)}let L,F;r.attachShader(p,S),r.attachShader(p,A),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),this.getUniforms=function(){return L===void 0&&z(this),L},this.getAttributes=function(){return F===void 0&&z(this),F};let $=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=r.getProgramParameter(p,wx)),$},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=A,this}var Dx=0,ed=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new td(e),t.set(e,i)),i}},td=class{constructor(e){this.id=Dx++,this.code=e,this.usedTimes=0}};function Ux(n,e,t,i,r,s,a){let o=new go,l=new ed,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures,m=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(p){return p===0?"uv":`uv${p}`}return{getParameters:function(p,x,y,v,M){let C=v.fog,S=M.geometry,A=p.isMeshStandardMaterial?v.environment:null,z=(p.isMeshStandardMaterial?t:e).get(p.envMap||A),L=z&&z.mapping===Pc?z.image.height:null,F=f[p.type];p.precision!==null&&(m=r.getMaxPrecision(p.precision),m!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",m,"instead."));let $=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,b=$!==void 0?$.length:0,P,N,k,J,X=0;if(S.morphAttributes.position!==void 0&&(X=1),S.morphAttributes.normal!==void 0&&(X=2),S.morphAttributes.color!==void 0&&(X=3),F){let Xt=pi[F];P=Xt.vertexShader,N=Xt.fragmentShader}else P=p.vertexShader,N=p.fragmentShader,l.update(p),k=l.getVertexShaderID(p),J=l.getFragmentShaderID(p);let j=n.getRenderTarget(),Y=M.isInstancedMesh===!0,G=M.isBatchedMesh===!0,Z=!!p.map,ce=!!p.matcap,w=!!z,E=!!p.aoMap,B=!!p.lightMap,O=!!p.bumpMap,I=!!p.normalMap,V=!!p.displacementMap,D=!!p.emissiveMap,H=!!p.metalnessMap,q=!!p.roughnessMap,K=p.anisotropy>0,ie=p.clearcoat>0,T=p.iridescence>0,ae=p.sheen>0,Q=p.transmission>0,te=K&&!!p.anisotropyMap,le=ie&&!!p.clearcoatMap,me=ie&&!!p.clearcoatNormalMap,ve=ie&&!!p.clearcoatRoughnessMap,xe=T&&!!p.iridescenceMap,De=T&&!!p.iridescenceThicknessMap,_e=ae&&!!p.sheenColorMap,Me=ae&&!!p.sheenRoughnessMap,He=!!p.specularMap,Nt=!!p.specularColorMap,Te=!!p.specularIntensityMap,Ke=Q&&!!p.transmissionMap,qe=Q&&!!p.thicknessMap,Ho=!!p.gradientMap,bs=!!p.alphaMap,Go=p.alphaTest>0,wn=!!p.alphaHash,mn=!!p.extensions,Es=!!S.attributes.uv1,re=!!S.attributes.uv2,Vo=!!S.attributes.uv3,Ia=gr;return p.toneMapped&&(j!==null&&j.isXRRenderTarget!==!0||(Ia=n.toneMapping)),{isWebGL2:h,shaderID:F,shaderType:p.type,shaderName:p.name,vertexShader:P,fragmentShader:N,defines:p.defines,customVertexShaderID:k,customFragmentShaderID:J,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:m,batching:G,instancing:Y,instancingColor:Y&&M.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:$i,map:Z,matcap:ce,envMap:w,envMapMode:w&&z.mapping,envMapCubeUVHeight:L,aoMap:E,lightMap:B,bumpMap:O,normalMap:I,displacementMap:d&&V,emissiveMap:D,normalMapObjectSpace:I&&p.normalMapType===1,normalMapTangentSpace:I&&p.normalMapType===0,metalnessMap:H,roughnessMap:q,anisotropy:K,anisotropyMap:te,clearcoat:ie,clearcoatMap:le,clearcoatNormalMap:me,clearcoatRoughnessMap:ve,iridescence:T,iridescenceMap:xe,iridescenceThicknessMap:De,sheen:ae,sheenColorMap:_e,sheenRoughnessMap:Me,specularMap:He,specularColorMap:Nt,specularIntensityMap:Te,transmission:Q,transmissionMap:Ke,thicknessMap:qe,gradientMap:Ho,opaque:p.transparent===!1&&p.blending===1,alphaMap:bs,alphaTest:Go,alphaHash:wn,combine:p.combine,mapUv:Z&&g(p.map.channel),aoMapUv:E&&g(p.aoMap.channel),lightMapUv:B&&g(p.lightMap.channel),bumpMapUv:O&&g(p.bumpMap.channel),normalMapUv:I&&g(p.normalMap.channel),displacementMapUv:V&&g(p.displacementMap.channel),emissiveMapUv:D&&g(p.emissiveMap.channel),metalnessMapUv:H&&g(p.metalnessMap.channel),roughnessMapUv:q&&g(p.roughnessMap.channel),anisotropyMapUv:te&&g(p.anisotropyMap.channel),clearcoatMapUv:le&&g(p.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(p.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(p.iridescenceMap.channel),iridescenceThicknessMapUv:De&&g(p.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&g(p.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(p.sheenRoughnessMap.channel),specularMapUv:He&&g(p.specularMap.channel),specularColorMapUv:Nt&&g(p.specularColorMap.channel),specularIntensityMapUv:Te&&g(p.specularIntensityMap.channel),transmissionMapUv:Ke&&g(p.transmissionMap.channel),thicknessMapUv:qe&&g(p.thicknessMap.channel),alphaMapUv:bs&&g(p.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(I||K),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,vertexUv1s:Es,vertexUv2s:re,vertexUv3s:Vo,pointsUvs:M.isPoints===!0&&!!S.attributes.uv&&(Z||bs),fog:!!C,useFog:p.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:p.flatShading===!0,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:M.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:X,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:p.dithering,shadowMapEnabled:n.shadowMap.enabled&&y.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ia,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Z&&p.map.isVideoTexture===!0&&st.getTransfer(p.map.colorSpace)===ct,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===2,flipSided:p.side===en,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionDerivatives:mn&&p.extensions.derivatives===!0,extensionFragDepth:mn&&p.extensions.fragDepth===!0,extensionDrawBuffers:mn&&p.extensions.drawBuffers===!0,extensionShaderTextureLOD:mn&&p.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mn&&p.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()}},getProgramCacheKey:function(p){let x=[];if(p.shaderID?x.push(p.shaderID):(x.push(p.customVertexShaderID),x.push(p.customFragmentShaderID)),p.defines!==void 0)for(let y in p.defines)x.push(y),x.push(p.defines[y]);return p.isRawShaderMaterial===!1&&(function(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}(x,p),function(y,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),y.push(o.mask)}(x,p),x.push(n.outputColorSpace)),x.push(p.customProgramCacheKey),x.join()},getUniforms:function(p){let x=f[p.type],y;if(x){let v=pi[x];y=_v.clone(v.uniforms)}else y=p.uniforms;return y},acquireProgram:function(p,x){let y;for(let v=0,M=c.length;v<M;v++){let C=c[v];if(C.cacheKey===x){y=C,++y.usedTimes;break}}return y===void 0&&(y=new Fx(n,x,p,s),c.push(y)),y},releaseProgram:function(p){if(--p.usedTimes==0){let x=c.indexOf(p);c[x]=c[c.length-1],c.pop(),p.destroy()}},releaseShaderCache:function(p){l.remove(p)},programs:c,dispose:function(){l.dispose()}}}function Nx(){let n=new WeakMap;return{get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function Bx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function e0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function t0(){let n=[],e=0,t=[],i=[],r=[];function s(a,o,l,c,h,u){let d=n[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},n[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=n.length;a<o;a++){let l=n[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Bx),i.length>1&&i.sort(o||e0),r.length>1&&r.sort(o||e0)}}}function Ox(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new t0,n.set(e,[r])):t>=i.length?(r=new t0,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function kx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new we};break;case"SpotLight":t={position:new R,direction:new R,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new R,halfWidth:new R,halfHeight:new R}}return n[e.id]=t,t}}}var zx=0;function Hx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Gx(n,e){let t=new kx,i=function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new R);let s=new R,a=new Fe,o=new Fe;return{setup:function(l,c){let h=0,u=0,d=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let m=0,f=0,g=0,p=0,x=0,y=0,v=0,M=0,C=0,S=0,A=0;l.sort(Hx);let z=c===!0?Math.PI:1;for(let F=0,$=l.length;F<$;F++){let b=l[F],P=b.color,N=b.intensity,k=b.distance,J=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=P.r*N*z,u+=P.g*N*z,d+=P.b*N*z;else if(b.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(b.sh.coefficients[X],N);A++}else if(b.isDirectionalLight){let X=t.get(b);if(X.color.copy(b.color).multiplyScalar(b.intensity*z),b.castShadow){let j=b.shadow,Y=i.get(b);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.directionalShadow[m]=Y,r.directionalShadowMap[m]=J,r.directionalShadowMatrix[m]=b.shadow.matrix,y++}r.directional[m]=X,m++}else if(b.isSpotLight){let X=t.get(b);X.position.setFromMatrixPosition(b.matrixWorld),X.color.copy(P).multiplyScalar(N*z),X.distance=k,X.coneCos=Math.cos(b.angle),X.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),X.decay=b.decay,r.spot[g]=X;let j=b.shadow;if(b.map&&(r.spotLightMap[C]=b.map,C++,j.updateMatrices(b),b.castShadow&&S++),r.spotLightMatrix[g]=j.matrix,b.castShadow){let Y=i.get(b);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.spotShadow[g]=Y,r.spotShadowMap[g]=J,M++}g++}else if(b.isRectAreaLight){let X=t.get(b);X.color.copy(P).multiplyScalar(N),X.halfWidth.set(.5*b.width,0,0),X.halfHeight.set(0,.5*b.height,0),r.rectArea[p]=X,p++}else if(b.isPointLight){let X=t.get(b);if(X.color.copy(b.color).multiplyScalar(b.intensity*z),X.distance=b.distance,X.decay=b.decay,b.castShadow){let j=b.shadow,Y=i.get(b);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,r.pointShadow[f]=Y,r.pointShadowMap[f]=J,r.pointShadowMatrix[f]=b.shadow.matrix,v++}r.point[f]=X,f++}else if(b.isHemisphereLight){let X=t.get(b);X.skyColor.copy(b.color).multiplyScalar(N*z),X.groundColor.copy(b.groundColor).multiplyScalar(N*z),r.hemi[x]=X,x++}}p>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=u,r.ambient[2]=d;let L=r.hash;L.directionalLength===m&&L.pointLength===f&&L.spotLength===g&&L.rectAreaLength===p&&L.hemiLength===x&&L.numDirectionalShadows===y&&L.numPointShadows===v&&L.numSpotShadows===M&&L.numSpotMaps===C&&L.numLightProbes===A||(r.directional.length=m,r.spot.length=g,r.rectArea.length=p,r.point.length=f,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=M+C-S,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=S,r.numLightProbes=A,L.directionalLength=m,L.pointLength=f,L.spotLength=g,L.rectAreaLength=p,L.hemiLength=x,L.numDirectionalShadows=y,L.numPointShadows=v,L.numSpotShadows=M,L.numSpotMaps=C,L.numLightProbes=A,r.version=zx++)},setupView:function(l,c){let h=0,u=0,d=0,m=0,f=0,g=c.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let y=l[p];if(y.isDirectionalLight){let v=r.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(y.isSpotLight){let v=r.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(y.isRectAreaLight){let v=r.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),a.copy(y.matrixWorld),a.premultiply(g),o.extractRotation(a),v.halfWidth.set(.5*y.width,0,0),v.halfHeight.set(0,.5*y.height,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let v=r.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let v=r.hemi[f];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),f++}}},state:r}}function n0(n,e){let t=new Gx(n,e),i=[],r=[];return{init:function(){i.length=0,r.length=0},state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:function(s){t.setup(i,s)},setupLightsView:function(s){t.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){r.push(s)}}}function Vx(n,e){let t=new WeakMap;return{get:function(i,r=0){let s=t.get(i),a;return s===void 0?(a=new n0(n,e),t.set(i,[a])):r>=s.length?(a=new n0(n,e),s.push(a)):a=s[r],a},dispose:function(){t=new WeakMap}}}var nd=class extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},id=class extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $x(n,e,t){let i=new ba,r=new ue,s=new ue,a=new Rt,o=new nd({depthPacking:3201}),l=new id,c={},h=t.maxTextureSize,u={[vr]:en,[en]:vr,2:2},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let f=new rt;f.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new de(f,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let x=this.type;function y(S,A){let z=e.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Qn(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,z,d,g,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,z,m,g,null)}function v(S,A,z,L){let F=null,$=z.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if($!==void 0)F=$;else if(F=z.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let b=F.uuid,P=A.uuid,N=c[b];N===void 0&&(N={},c[b]=N);let k=N[P];k===void 0&&(k=F.clone(),N[P]=k,A.addEventListener("dispose",C)),F=k}return F.visible=A.visible,F.wireframe=A.wireframe,F.side=L===zi?A.shadowSide!==null?A.shadowSide:A.side:A.shadowSide!==null?A.shadowSide:u[A.side],F.alphaMap=A.alphaMap,F.alphaTest=A.alphaTest,F.map=A.map,F.clipShadows=A.clipShadows,F.clippingPlanes=A.clippingPlanes,F.clipIntersection=A.clipIntersection,F.displacementMap=A.displacementMap,F.displacementScale=A.displacementScale,F.displacementBias=A.displacementBias,F.wireframeLinewidth=A.wireframeLinewidth,F.linewidth=A.linewidth,z.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(n.properties.get(F).light=z),F}function M(S,A,z,L,F){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&F===zi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld);let b=e.update(S),P=S.material;if(Array.isArray(P)){let N=b.groups;for(let k=0,J=N.length;k<J;k++){let X=N[k],j=P[X.materialIndex];if(j&&j.visible){let Y=v(S,j,L,F);S.onBeforeShadow(n,S,A,z,b,Y,X),n.renderBufferDirect(z,null,b,Y,S,X),S.onAfterShadow(n,S,A,z,b,Y,X)}}}else if(P.visible){let N=v(S,P,L,F);S.onBeforeShadow(n,S,A,z,b,N,null),n.renderBufferDirect(z,null,b,N,S,null),S.onAfterShadow(n,S,A,z,b,N,null)}}let $=S.children;for(let b=0,P=$.length;b<P;b++)M($[b],A,z,L,F)}function C(S){S.target.removeEventListener("dispose",C);for(let A in c){let z=c[A],L=S.target.uuid;L in z&&(z[L].dispose(),delete z[L])}}this.render=function(S,A,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let L=n.getRenderTarget(),F=n.getActiveCubeFace(),$=n.getActiveMipmapLevel(),b=n.state;b.setBlending(0),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);let P=x!==zi&&this.type===zi,N=x===zi&&this.type!==zi;for(let k=0,J=S.length;k<J;k++){let X=S[k],j=X.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);let Y=j.getFrameExtents();if(r.multiply(Y),s.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,j.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,j.mapSize.y=s.y)),j.map===null||P===!0||N===!0){let Z=this.type!==zi?{minFilter:Gt,magFilter:Gt}:{};j.map!==null&&j.map.dispose(),j.map=new Qn(r.x,r.y,Z),j.map.texture.name=X.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();let G=j.getViewportCount();for(let Z=0;Z<G;Z++){let ce=j.getViewport(Z);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),b.viewport(a),j.updateMatrices(X,Z),i=j.getFrustum(),M(A,z,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===zi&&y(j,z),j.needsUpdate=!1}x=this.type,p.needsUpdate=!1,n.setRenderTarget(L,F,$)}}function Wx(n,e,t){let i=t.isWebGL2,r=new function(){let T=!1,ae=new Rt,Q=null,te=new Rt(0,0,0,0);return{setMask:function(le){Q===le||T||(n.colorMask(le,le,le,le),Q=le)},setLocked:function(le){T=le},setClear:function(le,me,ve,xe,De){De===!0&&(le*=xe,me*=xe,ve*=xe),ae.set(le,me,ve,xe),te.equals(ae)===!1&&(n.clearColor(le,me,ve,xe),te.copy(ae))},reset:function(){T=!1,Q=null,te.set(-1,0,0,0)}}},s=new function(){let T=!1,ae=null,Q=null,te=null;return{setTest:function(le){le?O(n.DEPTH_TEST):I(n.DEPTH_TEST)},setMask:function(le){ae===le||T||(n.depthMask(le),ae=le)},setFunc:function(le){if(Q!==le){switch(le){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:default:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL)}Q=le}},setLocked:function(le){T=le},setClear:function(le){te!==le&&(n.clearDepth(le),te=le)},reset:function(){T=!1,ae=null,Q=null,te=null}}},a=new function(){let T=!1,ae=null,Q=null,te=null,le=null,me=null,ve=null,xe=null,De=null;return{setTest:function(_e){T||(_e?O(n.STENCIL_TEST):I(n.STENCIL_TEST))},setMask:function(_e){ae===_e||T||(n.stencilMask(_e),ae=_e)},setFunc:function(_e,Me,He){Q===_e&&te===Me&&le===He||(n.stencilFunc(_e,Me,He),Q=_e,te=Me,le=He)},setOp:function(_e,Me,He){me===_e&&ve===Me&&xe===He||(n.stencilOp(_e,Me,He),me=_e,ve=Me,xe=He)},setLocked:function(_e){T=_e},setClear:function(_e){De!==_e&&(n.clearStencil(_e),De=_e)},reset:function(){T=!1,ae=null,Q=null,te=null,le=null,me=null,ve=null,xe=null,De=null}}},o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],m=null,f=!1,g=null,p=null,x=null,y=null,v=null,M=null,C=null,S=new we(0,0,0),A=0,z=!1,L=null,F=null,$=null,b=null,P=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,J=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=J>=2);let j=null,Y={},G=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),ce=new Rt().fromArray(G),w=new Rt().fromArray(Z);function E(T,ae,Q,te){let le=new Uint8Array(4),me=n.createTexture();n.bindTexture(T,me),n.texParameteri(T,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(T,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<Q;ve++)!i||T!==n.TEXTURE_3D&&T!==n.TEXTURE_2D_ARRAY?n.texImage2D(ae+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage3D(ae,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,le);return me}let B={};function O(T){c[T]!==!0&&(n.enable(T),c[T]=!0)}function I(T){c[T]!==!1&&(n.disable(T),c[T]=!1)}B[n.TEXTURE_2D]=E(n.TEXTURE_2D,n.TEXTURE_2D,1),B[n.TEXTURE_CUBE_MAP]=E(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(B[n.TEXTURE_2D_ARRAY]=E(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),B[n.TEXTURE_3D]=E(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),O(n.DEPTH_TEST),s.setFunc(3),q(!1),K(1),O(n.CULL_FACE),H(0);let V={[Xr]:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};if(i)V[103]=n.MIN,V[104]=n.MAX;else{let T=e.get("EXT_blend_minmax");T!==null&&(V[103]=T.MIN_EXT,V[104]=T.MAX_EXT)}let D={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,[Bu]:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,[Ou]:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function H(T,ae,Q,te,le,me,ve,xe,De,_e){if(T!==0){if(f===!1&&(O(n.BLEND),f=!0),T===5)le=le||ae,me=me||Q,ve=ve||te,ae===p&&le===v||(n.blendEquationSeparate(V[ae],V[le]),p=ae,v=le),Q===x&&te===y&&me===M&&ve===C||(n.blendFuncSeparate(D[Q],D[te],D[me],D[ve]),x=Q,y=te,M=me,C=ve),xe.equals(S)!==!1&&De===A||(n.blendColor(xe.r,xe.g,xe.b,De),S.copy(xe),A=De),g=T,z=!1;else if(T!==g||_e!==z){if(p===Xr&&v===Xr||(n.blendEquation(n.FUNC_ADD),p=Xr,v=Xr),_e)switch(T){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T)}else switch(T){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T)}x=null,y=null,M=null,C=null,S.set(0,0,0),A=0,g=T,z=_e}}else f===!0&&(I(n.BLEND),f=!1)}function q(T){L!==T&&(T?n.frontFace(n.CW):n.frontFace(n.CCW),L=T)}function K(T){T!==0?(O(n.CULL_FACE),T!==F&&(T===1?n.cullFace(n.BACK):T===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):I(n.CULL_FACE),F=T}function ie(T,ae,Q){T?(O(n.POLYGON_OFFSET_FILL),b===ae&&P===Q||(n.polygonOffset(ae,Q),b=ae,P=Q)):I(n.POLYGON_OFFSET_FILL)}return{buffers:{color:r,depth:s,stencil:a},enable:O,disable:I,bindFramebuffer:function(T,ae){return h[T]!==ae&&(n.bindFramebuffer(T,ae),h[T]=ae,i&&(T===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ae),T===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ae)),!0)},drawBuffers:function(T,ae){let Q=d,te=!1;if(T)if(Q=u.get(ae),Q===void 0&&(Q=[],u.set(ae,Q)),T.isWebGLMultipleRenderTargets){let le=T.texture;if(Q.length!==le.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let me=0,ve=le.length;me<ve;me++)Q[me]=n.COLOR_ATTACHMENT0+me;Q.length=le.length,te=!0}}else Q[0]!==n.COLOR_ATTACHMENT0&&(Q[0]=n.COLOR_ATTACHMENT0,te=!0);else Q[0]!==n.BACK&&(Q[0]=n.BACK,te=!0);te&&(t.isWebGL2?n.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))},useProgram:function(T){return m!==T&&(n.useProgram(T),m=T,!0)},setBlending:H,setMaterial:function(T,ae){T.side===2?I(n.CULL_FACE):O(n.CULL_FACE);let Q=T.side===en;ae&&(Q=!Q),q(Q),T.blending===1&&T.transparent===!1?H(0):H(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),r.setMask(T.colorWrite);let te=T.stencilWrite;a.setTest(te),te&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ie(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?O(n.SAMPLE_ALPHA_TO_COVERAGE):I(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:q,setCullFace:K,setLineWidth:function(T){T!==$&&(k&&n.lineWidth(T),$=T)},setPolygonOffset:ie,setScissorTest:function(T){T?O(n.SCISSOR_TEST):I(n.SCISSOR_TEST)},activeTexture:function(T){T===void 0&&(T=n.TEXTURE0+N-1),j!==T&&(n.activeTexture(T),j=T)},bindTexture:function(T,ae,Q){Q===void 0&&(Q=j===null?n.TEXTURE0+N-1:j);let te=Y[Q];te===void 0&&(te={type:void 0,texture:void 0},Y[Q]=te),te.type===T&&te.texture===ae||(j!==Q&&(n.activeTexture(Q),j=Q),n.bindTexture(T,ae||B[T]),te.type=T,te.texture=ae)},unbindTexture:function(){let T=Y[j];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},compressedTexImage3D:function(){try{n.compressedTexImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texImage2D:function(){try{n.texImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texImage3D:function(){try{n.texImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},updateUBOMapping:function(T,ae){let Q=l.get(ae);Q===void 0&&(Q=new WeakMap,l.set(ae,Q));let te=Q.get(T);te===void 0&&(te=n.getUniformBlockIndex(ae,T.name),Q.set(T,te))},uniformBlockBinding:function(T,ae){let Q=l.get(ae).get(T);o.get(ae)!==Q&&(n.uniformBlockBinding(ae,Q,T.__bindingPointIndex),o.set(ae,Q))},texStorage2D:function(){try{n.texStorage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texStorage3D:function(){try{n.texStorage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texSubImage2D:function(){try{n.texSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texSubImage3D:function(){try{n.texSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},scissor:function(T){ce.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),ce.copy(T))},viewport:function(T){w.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),w.copy(T))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},j=null,Y={},h={},u=new WeakMap,d=[],m=null,f=!1,g=null,p=null,x=null,y=null,v=null,M=null,C=null,S=new we(0,0,0),A=0,z=!1,L=null,F=null,$=null,b=null,P=null,ce.set(0,0,n.canvas.width,n.canvas.height),w.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}}}function qx(n,e,t,i,r,s,a){let o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,E){return m?new OffscreenCanvas(w,E):ic("canvas")}function g(w,E,B,O){let I=1;if((w.width>O||w.height>O)&&(I=O/Math.max(w.width,w.height)),I<1||E===!0){if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){let V=E?Wu:Math.floor,D=V(I*w.width),H=V(I*w.height);u===void 0&&(u=f(D,H));let q=B?f(D,H):u;return q.width=D,q.height=H,q.getContext("2d").drawImage(w,0,0,D,H),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+D+"x"+H+")."),q}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w}return w}function p(w){return xf(w.width)&&xf(w.height)}function x(w,E){return w.generateMipmaps&&E&&w.minFilter!==Gt&&w.minFilter!==Zn}function y(w){n.generateMipmap(w)}function v(w,E,B,O,I=!1){if(o===!1)return E;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let V=E;if(E===n.RED&&(B===n.FLOAT&&(V=n.R32F),B===n.HALF_FLOAT&&(V=n.R16F),B===n.UNSIGNED_BYTE&&(V=n.R8)),E===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(V=n.R8UI),B===n.UNSIGNED_SHORT&&(V=n.R16UI),B===n.UNSIGNED_INT&&(V=n.R32UI),B===n.BYTE&&(V=n.R8I),B===n.SHORT&&(V=n.R16I),B===n.INT&&(V=n.R32I)),E===n.RG&&(B===n.FLOAT&&(V=n.RG32F),B===n.HALF_FLOAT&&(V=n.RG16F),B===n.UNSIGNED_BYTE&&(V=n.RG8)),E===n.RGBA){let D=I?Ql:st.getTransfer(O);B===n.FLOAT&&(V=n.RGBA32F),B===n.HALF_FLOAT&&(V=n.RGBA16F),B===n.UNSIGNED_BYTE&&(V=D===ct?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return V!==n.R16F&&V!==n.R32F&&V!==n.RG16F&&V!==n.RG32F&&V!==n.RGBA16F&&V!==n.RGBA32F||e.get("EXT_color_buffer_float"),V}function M(w,E,B){return x(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==Gt&&w.minFilter!==Zn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function C(w){return w===Gt||w===Gm||w===Kh?n.NEAREST:n.LINEAR}function S(w){let E=w.target;E.removeEventListener("dispose",S),function(B){let O=i.get(B);if(O.__webglInit===void 0)return;let I=B.source,V=d.get(I);if(V){let D=V[O.__cacheKey];D.usedTimes--,D.usedTimes===0&&z(B),Object.keys(V).length===0&&d.delete(I)}i.remove(B)}(E),E.isVideoTexture&&h.delete(E)}function A(w){let E=w.target;E.removeEventListener("dispose",A),function(B){let O=B.texture,I=i.get(B),V=i.get(O);if(V.__webglTexture!==void 0&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(I.__webglFramebuffer[D]))for(let H=0;H<I.__webglFramebuffer[D].length;H++)n.deleteFramebuffer(I.__webglFramebuffer[D][H]);else n.deleteFramebuffer(I.__webglFramebuffer[D]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[D])}else{if(Array.isArray(I.__webglFramebuffer))for(let D=0;D<I.__webglFramebuffer.length;D++)n.deleteFramebuffer(I.__webglFramebuffer[D]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let D=0;D<I.__webglColorRenderbuffer.length;D++)I.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[D]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(B.isWebGLMultipleRenderTargets)for(let D=0,H=O.length;D<H;D++){let q=i.get(O[D]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(O[D])}i.remove(O),i.remove(B)}(E)}function z(w){let E=i.get(w);n.deleteTexture(E.__webglTexture);let B=w.source;delete d.get(B)[E.__cacheKey],a.memory.textures--}let L=0;function F(w,E){let B=i.get(w);if(w.isVideoTexture&&function(O){let I=a.render.frame;h.get(O)!==I&&(h.set(O,I),O.update())}(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){let O=w.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(O.complete!==!1)return void J(B,w,E);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+E)}let $={[fi]:n.REPEAT,[Hi]:n.CLAMP_TO_EDGE,[Hu]:n.MIRRORED_REPEAT},b={[Gt]:n.NEAREST,[Gm]:n.NEAREST_MIPMAP_NEAREST,[Kh]:n.NEAREST_MIPMAP_LINEAR,[Zn]:n.LINEAR,[iv]:n.LINEAR_MIPMAP_NEAREST,[Zl]:n.LINEAR_MIPMAP_LINEAR},P={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function N(w,E,B){if(B?(n.texParameteri(w,n.TEXTURE_WRAP_S,$[E.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,$[E.wrapT]),w!==n.TEXTURE_3D&&w!==n.TEXTURE_2D_ARRAY||n.texParameteri(w,n.TEXTURE_WRAP_R,$[E.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,b[E.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,b[E.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),w!==n.TEXTURE_3D&&w!==n.TEXTURE_2D_ARRAY||n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),E.wrapS===Hi&&E.wrapT===Hi||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,C(E.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,C(E.minFilter)),E.minFilter!==Gt&&E.minFilter!==Zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Gt||E.minFilter!==Kh&&E.minFilter!==Zl||E.type===mr&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===fo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function k(w,E){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",S));let O=E.source,I=d.get(O);I===void 0&&(I={},d.set(O,I));let V=function(D){let H=[];return H.push(D.wrapS),H.push(D.wrapT),H.push(D.wrapR||0),H.push(D.magFilter),H.push(D.minFilter),H.push(D.anisotropy),H.push(D.internalFormat),H.push(D.format),H.push(D.type),H.push(D.generateMipmaps),H.push(D.premultiplyAlpha),H.push(D.flipY),H.push(D.unpackAlignment),H.push(D.colorSpace),H.join()}(E);if(V!==w.__cacheKey){I[V]===void 0&&(I[V]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),I[V].usedTimes++;let D=I[w.__cacheKey];D!==void 0&&(I[w.__cacheKey].usedTimes--,D.usedTimes===0&&z(E)),w.__cacheKey=V,w.__webglTexture=I[V].texture}return B}function J(w,E,B){let O=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(O=n.TEXTURE_3D);let I=k(w,E),V=E.source;t.bindTexture(O,w.__webglTexture,n.TEXTURE0+B);let D=i.get(V);if(V.version!==D.__version||I===!0){t.activeTexture(n.TEXTURE0+B);let H=st.getPrimaries(st.workingColorSpace),q=E.colorSpace===mi?null:st.getPrimaries(E.colorSpace),K=E.colorSpace===mi||H===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ie=function(Me){return!o&&(Me.wrapS!==Hi||Me.wrapT!==Hi||Me.minFilter!==Gt&&Me.minFilter!==Zn)}(E)&&p(E.image)===!1,T=g(E.image,ie,!1,r.maxTextureSize);T=ce(E,T);let ae=p(T)||o,Q=s.convert(E.format,E.colorSpace),te,le=s.convert(E.type),me=v(E.internalFormat,Q,le,E.colorSpace,E.isVideoTexture);N(O,E,ae);let ve=E.mipmaps,xe=o&&E.isVideoTexture!==!0&&me!==L0,De=D.__version===void 0||I===!0,_e=M(E,T,ae);if(E.isDepthTexture)me=n.DEPTH_COMPONENT,o?me=E.type===mr?n.DEPTH_COMPONENT32F:E.type===pr?n.DEPTH_COMPONENT24:E.type===Kr?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT16:E.type===mr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Qr&&me===n.DEPTH_COMPONENT&&E.type!==Bd&&E.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=pr,le=s.convert(E.type)),E.format===ya&&me===n.DEPTH_COMPONENT&&(me=n.DEPTH_STENCIL,E.type!==Kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Kr,le=s.convert(E.type))),De&&(xe?t.texStorage2D(n.TEXTURE_2D,1,me,T.width,T.height):t.texImage2D(n.TEXTURE_2D,0,me,T.width,T.height,0,Q,le,null));else if(E.isDataTexture)if(ve.length>0&&ae){xe&&De&&t.texStorage2D(n.TEXTURE_2D,_e,me,ve[0].width,ve[0].height);for(let Me=0,He=ve.length;Me<He;Me++)te=ve[Me],xe?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,te.width,te.height,Q,le,te.data):t.texImage2D(n.TEXTURE_2D,Me,me,te.width,te.height,0,Q,le,te.data);E.generateMipmaps=!1}else xe?(De&&t.texStorage2D(n.TEXTURE_2D,_e,me,T.width,T.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Q,le,T.data)):t.texImage2D(n.TEXTURE_2D,0,me,T.width,T.height,0,Q,le,T.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){xe&&De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,me,ve[0].width,ve[0].height,T.depth);for(let Me=0,He=ve.length;Me<He;Me++)te=ve[Me],E.format!==Pn?Q!==null?xe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,te.width,te.height,T.depth,Q,te.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,me,te.width,te.height,T.depth,0,te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,te.width,te.height,T.depth,Q,le,te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,me,te.width,te.height,T.depth,0,Q,le,te.data)}else{xe&&De&&t.texStorage2D(n.TEXTURE_2D,_e,me,ve[0].width,ve[0].height);for(let Me=0,He=ve.length;Me<He;Me++)te=ve[Me],E.format!==Pn?Q!==null?xe?t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,te.width,te.height,Q,te.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,me,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,te.width,te.height,Q,le,te.data):t.texImage2D(n.TEXTURE_2D,Me,me,te.width,te.height,0,Q,le,te.data)}else if(E.isDataArrayTexture)xe?(De&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,me,T.width,T.height,T.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,T.width,T.height,T.depth,Q,le,T.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,T.width,T.height,T.depth,0,Q,le,T.data);else if(E.isData3DTexture)xe?(De&&t.texStorage3D(n.TEXTURE_3D,_e,me,T.width,T.height,T.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,T.width,T.height,T.depth,Q,le,T.data)):t.texImage3D(n.TEXTURE_3D,0,me,T.width,T.height,T.depth,0,Q,le,T.data);else if(E.isFramebufferTexture){if(De)if(xe)t.texStorage2D(n.TEXTURE_2D,_e,me,T.width,T.height);else{let Me=T.width,He=T.height;for(let Nt=0;Nt<_e;Nt++)t.texImage2D(n.TEXTURE_2D,Nt,me,Me,He,0,Q,le,null),Me>>=1,He>>=1}}else if(ve.length>0&&ae){xe&&De&&t.texStorage2D(n.TEXTURE_2D,_e,me,ve[0].width,ve[0].height);for(let Me=0,He=ve.length;Me<He;Me++)te=ve[Me],xe?t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Q,le,te):t.texImage2D(n.TEXTURE_2D,Me,me,Q,le,te);E.generateMipmaps=!1}else xe?(De&&t.texStorage2D(n.TEXTURE_2D,_e,me,T.width,T.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q,le,T)):t.texImage2D(n.TEXTURE_2D,0,me,Q,le,T);x(E,ae)&&y(O),D.__version=V.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function X(w,E,B,O,I,V){let D=s.convert(B.format,B.colorSpace),H=s.convert(B.type),q=v(B.internalFormat,D,H,B.colorSpace);if(!i.get(E).__hasExternalTextures){let K=Math.max(1,E.width>>V),ie=Math.max(1,E.height>>V);I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?t.texImage3D(I,V,q,K,ie,E.depth,0,D,H,null):t.texImage2D(I,V,q,K,ie,0,D,H,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Z(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,I,i.get(B).__webglTexture,0,G(E)):(I===n.TEXTURE_2D||I>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,I,i.get(B).__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(w,E,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),E.depthBuffer&&!E.stencilBuffer){let O=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||Z(E)){let I=E.depthTexture;I&&I.isDepthTexture&&(I.type===mr?O=n.DEPTH_COMPONENT32F:I.type===pr&&(O=n.DEPTH_COMPONENT24));let V=G(E);Z(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,O,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,V,O,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,O,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(E.depthBuffer&&E.stencilBuffer){let O=G(E);B&&Z(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,O,n.DEPTH24_STENCIL8,E.width,E.height):Z(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,O,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{let O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let I=0;I<O.length;I++){let V=O[I],D=s.convert(V.format,V.colorSpace),H=s.convert(V.type),q=v(V.internalFormat,D,H,V.colorSpace),K=G(E);B&&Z(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,q,E.width,E.height):Z(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,q,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Y(w){let E=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");(function(O,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,O),!I.depthTexture||!I.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(I.depthTexture).__webglTexture&&I.depthTexture.image.width===I.width&&I.depthTexture.image.height===I.height||(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),F(I.depthTexture,0);let V=i.get(I.depthTexture).__webglTexture,D=G(I);if(I.depthTexture.format===Qr)Z(I)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,D):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else{if(I.depthTexture.format!==ya)throw new Error("Unknown depthTexture format");Z(I)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,D):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0)}})(E.__webglFramebuffer,w)}else if(B){E.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[O]),E.__webglDepthbuffer[O]=n.createRenderbuffer(),j(E.__webglDepthbuffer[O],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),j(E.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function G(w){return Math.min(r.maxSamples,w.samples)}function Z(w){let E=i.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ce(w,E){let B=w.colorSpace,O=w.format,I=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Vu||B!==$i&&B!==mi&&(st.getTransfer(B)===ct?o===!1?e.has("EXT_sRGB")===!0&&O===Pn?(w.format=Vu,w.minFilter=Zn,w.generateMipmaps=!1):E=rc.sRGBToLinear(E):O===Pn&&I===Jr||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}this.allocateTextureUnit=function(){let w=L;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),L+=1,w},this.resetTextureUnits=function(){L=0},this.setTexture2D=F,this.setTexture2DArray=function(w,E){let B=i.get(w);w.version>0&&B.__version!==w.version?J(B,w,E):t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+E)},this.setTexture3D=function(w,E){let B=i.get(w);w.version>0&&B.__version!==w.version?J(B,w,E):t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+E)},this.setTextureCube=function(w,E){let B=i.get(w);w.version>0&&B.__version!==w.version?function(O,I,V){if(I.image.length!==6)return;let D=k(O,I),H=I.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+V);let q=i.get(H);if(H.version!==q.__version||D===!0){t.activeTexture(n.TEXTURE0+V);let K=st.getPrimaries(st.workingColorSpace),ie=I.colorSpace===mi?null:st.getPrimaries(I.colorSpace),T=I.colorSpace===mi||K===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,T);let ae=I.isCompressedTexture||I.image[0].isCompressedTexture,Q=I.image[0]&&I.image[0].isDataTexture,te=[];for(let Te=0;Te<6;Te++)te[Te]=ae||Q?Q?I.image[Te].image:I.image[Te]:g(I.image[Te],!1,!0,r.maxCubemapSize),te[Te]=ce(I,te[Te]);let le=te[0],me=p(le)||o,ve=s.convert(I.format,I.colorSpace),xe=s.convert(I.type),De=v(I.internalFormat,ve,xe,I.colorSpace),_e=o&&I.isVideoTexture!==!0,Me=q.__version===void 0||D===!0,He,Nt=M(I,le,me);if(N(n.TEXTURE_CUBE_MAP,I,me),ae){_e&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,De,le.width,le.height);for(let Te=0;Te<6;Te++){He=te[Te].mipmaps;for(let Ke=0;Ke<He.length;Ke++){let qe=He[Ke];I.format!==Pn?ve!==null?_e?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ke,0,0,qe.width,qe.height,ve,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ke,De,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ke,0,0,qe.width,qe.height,ve,xe,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ke,De,qe.width,qe.height,0,ve,xe,qe.data)}}}else{He=I.mipmaps,_e&&Me&&(He.length>0&&Nt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Nt,De,te[0].width,te[0].height));for(let Te=0;Te<6;Te++)if(Q){_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,te[Te].width,te[Te].height,ve,xe,te[Te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,De,te[Te].width,te[Te].height,0,ve,xe,te[Te].data);for(let Ke=0;Ke<He.length;Ke++){let qe=He[Ke].image[Te].image;_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ke+1,0,0,qe.width,qe.height,ve,xe,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ke+1,De,qe.width,qe.height,0,ve,xe,qe.data)}}else{_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ve,xe,te[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,De,ve,xe,te[Te]);for(let Ke=0;Ke<He.length;Ke++){let qe=He[Ke];_e?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ke+1,0,0,ve,xe,qe.image[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ke+1,De,ve,xe,qe.image[Te])}}}x(I,me)&&y(n.TEXTURE_CUBE_MAP),q.__version=H.version,I.onUpdate&&I.onUpdate(I)}O.__version=I.version}(B,w,E):t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+E)},this.rebindTextures=function(w,E,B){let O=i.get(w);E!==void 0&&X(O.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Y(w)},this.setupRenderTarget=function(w){let E=w.texture,B=i.get(w),O=i.get(E);w.addEventListener("dispose",A),w.isWebGLMultipleRenderTargets!==!0&&(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=E.version,a.memory.textures++);let I=w.isWebGLCubeRenderTarget===!0,V=w.isWebGLMultipleRenderTargets===!0,D=p(w)||o;if(I){B.__webglFramebuffer=[];for(let H=0;H<6;H++)if(o&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[H]=[];for(let q=0;q<E.mipmaps.length;q++)B.__webglFramebuffer[H][q]=n.createFramebuffer()}else B.__webglFramebuffer[H]=n.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let H=0;H<E.mipmaps.length;H++)B.__webglFramebuffer[H]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(V)if(r.drawBuffers){let H=w.texture;for(let q=0,K=H.length;q<K;q++){let ie=i.get(H[q]);ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Z(w)===!1){let H=V?E:[E];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<H.length;q++){let K=H[q];B.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[q]);let ie=s.convert(K.format,K.colorSpace),T=s.convert(K.type),ae=v(K.internalFormat,ie,T,K.colorSpace,w.isXRRenderTarget===!0),Q=G(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,ae,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,B.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),j(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(I){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),N(n.TEXTURE_CUBE_MAP,E,D);for(let H=0;H<6;H++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let q=0;q<E.mipmaps.length;q++)X(B.__webglFramebuffer[H][q],w,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+H,q);else X(B.__webglFramebuffer[H],w,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);x(E,D)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(V){let H=w.texture;for(let q=0,K=H.length;q<K;q++){let ie=H[q],T=i.get(ie);t.bindTexture(n.TEXTURE_2D,T.__webglTexture),N(n.TEXTURE_2D,ie,D),X(B.__webglFramebuffer,w,ie,n.COLOR_ATTACHMENT0+q,n.TEXTURE_2D,0),x(ie,D)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let H=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?H=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(H,O.__webglTexture),N(H,E,D),o&&E.mipmaps&&E.mipmaps.length>0)for(let q=0;q<E.mipmaps.length;q++)X(B.__webglFramebuffer[q],w,E,n.COLOR_ATTACHMENT0,H,q);else X(B.__webglFramebuffer,w,E,n.COLOR_ATTACHMENT0,H,0);x(E,D)&&y(H),t.unbindTexture()}w.depthBuffer&&Y(w)},this.updateRenderTargetMipmap=function(w){let E=p(w)||o,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let O=0,I=B.length;O<I;O++){let V=B[O];if(x(V,E)){let D=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,H=i.get(V).__webglTexture;t.bindTexture(D,H),y(D),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(o&&w.samples>0&&Z(w)===!1){let E=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,O=w.height,I=n.COLOR_BUFFER_BIT,V=[],D=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=i.get(w),q=w.isWebGLMultipleRenderTargets===!0;if(q)for(let K=0;K<E.length;K++)t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,H.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,H.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,H.__webglFramebuffer);for(let K=0;K<E.length;K++){V.push(n.COLOR_ATTACHMENT0+K),w.depthBuffer&&V.push(D);let ie=H.__ignoreDepthValues!==void 0&&H.__ignoreDepthValues;if(ie===!1&&(w.depthBuffer&&(I|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(I|=n.STENCIL_BUFFER_BIT)),q&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,H.__webglColorRenderbuffer[K]),ie===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[D]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[D])),q){let T=i.get(E[K]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,T,0)}n.blitFramebuffer(0,0,B,O,0,0,B,O,I,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let K=0;K<E.length;K++){t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,H.__webglColorRenderbuffer[K]);let ie=i.get(E[K]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,H.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,H.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Z}function jx(n,e,t){let i=t.isWebGL2;return{convert:function(r,s=""){let a,o=st.getTransfer(s);if(r===Jr)return n.UNSIGNED_BYTE;if(r===S0)return n.UNSIGNED_SHORT_4_4_4_4;if(r===T0)return n.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return n.BYTE;if(r===1011)return n.SHORT;if(r===Bd)return n.UNSIGNED_SHORT;if(r===w0)return n.INT;if(r===pr)return n.UNSIGNED_INT;if(r===mr)return n.FLOAT;if(r===fo)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return n.ALPHA;if(r===Pn)return n.RGBA;if(r===1024)return n.LUMINANCE;if(r===1025)return n.LUMINANCE_ALPHA;if(r===Qr)return n.DEPTH_COMPONENT;if(r===ya)return n.DEPTH_STENCIL;if(r===Vu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return n.RED;if(r===A0)return n.RED_INTEGER;if(r===1030)return n.RG;if(r===R0)return n.RG_INTEGER;if(r===C0)return n.RGBA_INTEGER;if(r===Qh||r===eu||r===tu||r===nu)if(o===ct){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(r===Qh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(r===Qh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===eu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(r===Vm||r===$m||r===Wm||r===qm){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(r===Vm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$m)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(r===L0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===jm||r===Xm){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(r===jm)return o===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Xm)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(r===Ym||r===Zm||r===Jm||r===Km||r===Qm||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(r===Ym)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zm)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jm)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Km)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qm)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ef)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tf)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nf)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rf)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sf)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===af)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===of)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lf)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cf)return o===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(r===iu||r===hf||r===uf){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(r===iu)return o===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(r===36283||r===df||r===pf||r===mf){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(r===iu)return a.COMPRESSED_RED_RGTC1_EXT;if(r===df)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return r===Kr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}}}var rd=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ye=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xx={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let p=t.getJointPose(g,i),x=this._getHandJoint(c,g);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=p.radius),x.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,f=.005;c.inputState.pinching&&d>m+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ye;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},sd=class extends xr{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,f=null,g=t.getContextAttributes(),p=null,x=null,y=[],v=[],M=new ue,C=null,S=new Qt;S.layers.enable(1),S.viewport=new Rt;let A=new Qt;A.layers.enable(2),A.viewport=new Rt;let z=[S,A],L=new rd;L.layers.enable(1),L.layers.enable(2);let F=null,$=null;function b(G){let Z=v.indexOf(G.inputSource);if(Z===-1)return;let ce=y[Z];ce!==void 0&&(ce.update(G.inputSource,G.frame,c||a),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function P(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",N);for(let G=0;G<y.length;G++){let Z=v[G];Z!==null&&(v[G]=null,y[G].disconnect(Z))}F=null,$=null,e.setRenderTarget(p),m=null,d=null,u=null,r=null,x=null,Y.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}function N(G){for(let Z=0;Z<G.removed.length;Z++){let ce=G.removed[Z],w=v.indexOf(ce);w>=0&&(v[w]=null,y[w].disconnect(ce))}for(let Z=0;Z<G.added.length;Z++){let ce=G.added[Z],w=v.indexOf(ce);if(w===-1){for(let B=0;B<y.length;B++){if(B>=v.length){v.push(ce),w=B;break}if(v[B]===null){v[B]=ce,w=B;break}}if(w===-1)break}let E=y[w];E&&E.connect(ce)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=y[G];return Z===void 0&&(Z=new ho,y[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=y[G];return Z===void 0&&(Z=new ho,y[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=y[G];return Z===void 0&&(Z=new ho,y[G]=Z),Z.getHandSpace()},this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",P),r.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:r.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Qn(m.framebufferWidth,m.framebufferHeight,{format:Pn,type:Jr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,ce=null,w=null;g.depth&&(w=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?ya:Qr,ce=g.stencil?Kr:pr);let E={colorFormat:t.RGBA8,depthFormat:w,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(E),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Qn(d.textureWidth,d.textureHeight,{format:Pn,type:Jr,depthTexture:new dc(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0}),e.properties.get(x).__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Y.setContext(r),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};let k=new R,J=new R;function X(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;L.near=A.near=S.near=G.near,L.far=A.far=S.far=G.far,F===L.near&&$===L.far||(r.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,$=L.far);let Z=G.parent,ce=L.cameras;X(L,Z);for(let w=0;w<ce.length;w++)X(ce[w],Z);ce.length===2?function(w,E,B){k.setFromMatrixPosition(E.matrixWorld),J.setFromMatrixPosition(B.matrixWorld);let O=k.distanceTo(J),I=E.projectionMatrix.elements,V=B.projectionMatrix.elements,D=I[14]/(I[10]-1),H=I[14]/(I[10]+1),q=(I[9]+1)/I[5],K=(I[9]-1)/I[5],ie=(I[8]-1)/I[0],T=(V[8]+1)/V[0],ae=D*ie,Q=D*T,te=O/(-ie+T),le=te*-ie;E.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(le),w.translateZ(te),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert();let me=D+te,ve=H+te,xe=ae-le,De=Q+(O-le),_e=q*H/ve*me,Me=K*H/ve*me;w.projectionMatrix.makePerspective(xe,De,_e,Me,me,ve),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}(L,S,A):L.projectionMatrix.copy(S.projectionMatrix),function(w,E,B){B===null?w.matrix.copy(E.matrixWorld):(w.matrix.copy(B.matrixWorld),w.matrix.invert(),w.matrix.multiply(E.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(E.projectionMatrix),w.projectionMatrixInverse.copy(E.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*$u*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}(G,L,Z)},this.getCamera=function(){return L},this.getFoveation=function(){if(d!==null||m!==null)return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let j=null,Y=new U0;Y.setAnimationLoop(function(G,Z){if(h=Z.getViewerPose(c||a),f=Z,h!==null){let ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let w=!1;ce.length!==L.cameras.length&&(L.cameras.length=0,w=!0);for(let E=0;E<ce.length;E++){let B=ce[E],O=null;if(m!==null)O=m.getViewport(B);else{let V=u.getViewSubImage(d,B);O=V.viewport,E===0&&(e.setRenderTargetTextures(x,V.colorTexture,d.ignoreDepthValues?void 0:V.depthStencilTexture),e.setRenderTarget(x))}let I=z[E];I===void 0&&(I=new Qt,I.layers.enable(E),I.viewport=new Rt,z[E]=I),I.matrix.fromArray(B.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(B.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(O.x,O.y,O.width,O.height),E===0&&(L.matrix.copy(I.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),w===!0&&L.cameras.push(I)}}for(let ce=0;ce<y.length;ce++){let w=v[ce],E=y[ce];w!==null&&E!==void 0&&E.update(w,Z,c||a)}j&&j(G,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),f=null}),this.setAnimationLoop=function(G){j=G},this.dispose=function(){}}};function Yx(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===en&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===en&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap){r.lightMap.value=s.lightMap;let o=n._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,r.lightMapTransform)}s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,D0(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(r,s):s.isMeshToonMaterial?(i(r,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(r,s)):s.isMeshPhongMaterial?(i(r,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(r,s)):s.isMeshStandardMaterial?(i(r,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(r,s),s.isMeshPhysicalMaterial&&function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===en&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far}(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(r,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(r,s)):s.isPointsMaterial?function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Zx(n,e,t,i){let r={},s={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,d,m,f){let g=u.value,p=d+"_"+m;if(f[p]===void 0)return f[p]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let x=f[p];if(typeof g=="number"||typeof g=="boolean"){if(x!==g)return f[p]=g,!0}else if(x.equals(g)===!1)return x.copy(g),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=a.indexOf(d.__bindingPointIndex);a.splice(m,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let m=d.program;i.uniformBlockBinding(u,m)},update:function(u,d){let m=r[u.id];m===void 0&&(function(p){let x=p.uniforms,y=0,v=16;for(let C=0,S=x.length;C<S;C++){let A=Array.isArray(x[C])?x[C]:[x[C]];for(let z=0,L=A.length;z<L;z++){let F=A[z],$=Array.isArray(F.value)?F.value:[F.value];for(let b=0,P=$.length;b<P;b++){let N=c($[b]),k=y%v;k!==0&&v-k<N.boundary&&(y+=v-k),F.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=N.storage}}}let M=y%v;M>0&&(y+=v-M),p.__size=y,p.__cache={}}(u),m=function(p){let x=function(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();p.__bindingPointIndex=x;let y=n.createBuffer(),v=p.__size,M=p.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,v,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}(u),r[u.id]=m,u.addEventListener("dispose",h));let f=d.program;i.updateUBOMapping(u,f);let g=e.render.frame;s[u.id]!==g&&(function(p){let x=r[p.id],y=p.uniforms,v=p.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let M=0,C=y.length;M<C;M++){let S=Array.isArray(y[M])?y[M]:[y[M]];for(let A=0,z=S.length;A<z;A++){let L=S[A];if(l(L,M,A,v)===!0){let F=L.__offset,$=Array.isArray(L.value)?L.value:[L.value],b=0;for(let P=0;P<$.length;P++){let N=$[P],k=c(N);typeof N=="number"||typeof N=="boolean"?(L.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,F+b,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=0,L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=0,L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=0):(N.toArray(L.__data,b),b+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}(u),s[u.id]=g)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);a=[],r={},s={}}}}var vo=class{constructor(e={}){let{canvas:t=sv(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=i!==null?i.getContextAttributes().alpha:a;let m=new Uint32Array(4),f=new Int32Array(4),g=null,p=null,x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=gr,this.toneMappingExposure=1;let v=this,M=!1,C=0,S=0,A=null,z=-1,L=null,F=new Rt,$=new Rt,b=null,P=new we(0),N=0,k=t.width,J=t.height,X=1,j=null,Y=null,G=new Rt(0,0,k,J),Z=new Rt(0,0,k,J),ce=!1,w=new ba,E=!1,B=!1,O=null,I=new Fe,V=new ue,D=new R,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function q(){return A===null?X:1}let K,ie,T,ae,Q,te,le,me,ve,xe,De,_e,Me,He,Nt,Te,Ke,qe,Ho,bs,Go,wn,mn,Es,re=i;function Vo(U,ne){for(let se=0;se<U.length;se++){let he=U[se],oe=t.getContext(he,ne);if(oe!==null)return oe}return null}try{let U={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nu}`),t.addEventListener("webglcontextlost",kp,!1),t.addEventListener("webglcontextrestored",zp,!1),t.addEventListener("webglcontextcreationerror",Hp,!1),re===null){let ne=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&ne.shift(),re=Vo(ne,U),re===null)throw Vo(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&re instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),re.getShaderPrecisionFormat===void 0&&(re.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}function Ia(){K=new Pv(re),ie=new Av(re,K,e),K.init(ie),wn=new jx(re,K,ie),T=new Wx(re,K,ie),ae=new Dv(re),Q=new Nx,te=new qx(re,K,T,Q,ie,wn,ae),le=new Cv(v),me=new Lv(v),ve=new Mv(re,ie),mn=new Sv(re,K,ve,ie),xe=new Iv(re,ve,ae,mn),De=new Ov(re,xe,ve,ae),Ho=new Bv(re,ie,te),Te=new Rv(Q),_e=new Ux(v,le,me,K,ie,mn,Te),Me=new Yx(v,Q),He=new Ox,Nt=new Vx(K,ie),qe=new wv(v,le,me,T,De,d,l),Ke=new $x(v,De,ie),Es=new Zx(re,ae,ie,T),bs=new Tv(re,K,ae,ie),Go=new Fv(re,K,ae,ie),ae.programs=_e.programs,v.capabilities=ie,v.extensions=K,v.properties=Q,v.renderLists=He,v.shadowMap=Ke,v.state=T,v.info=ae}Ia();let Xt=new sd(v,re);function kp(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function zp(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let U=ae.autoReset,ne=Ke.enabled,se=Ke.autoUpdate,he=Ke.needsUpdate,oe=Ke.type;Ia(),ae.autoReset=U,Ke.enabled=ne,Ke.autoUpdate=se,Ke.needsUpdate=he,Ke.type=oe}function Hp(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Gp(U){let ne=U.target;ne.removeEventListener("dispose",Gp),function(se){(function(he){let oe=Q.get(he).programs;oe!==void 0&&(oe.forEach(function(ge){_e.releaseProgram(ge)}),he.isShaderMaterial&&_e.releaseShaderCache(he))})(se),Q.remove(se)}(ne)}function Vp(U,ne,se){U.transparent===!0&&U.side===2&&U.forceSinglePass===!1?(U.side=en,U.needsUpdate=!0,Wo(U,ne,se),U.side=vr,U.needsUpdate=!0,Wo(U,ne,se),U.side=2):Wo(U,ne,se)}this.xr=Xt,this.getContext=function(){return re},this.getContextAttributes=function(){return re.getContextAttributes()},this.forceContextLoss=function(){let U=K.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=K.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(U){U!==void 0&&(X=U,this.setSize(k,J,!1))},this.getSize=function(U){return U.set(k,J)},this.setSize=function(U,ne,se=!0){Xt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(k=U,J=ne,t.width=Math.floor(U*X),t.height=Math.floor(ne*X),se===!0&&(t.style.width=U+"px",t.style.height=ne+"px"),this.setViewport(0,0,U,ne))},this.getDrawingBufferSize=function(U){return U.set(k*X,J*X).floor()},this.setDrawingBufferSize=function(U,ne,se){k=U,J=ne,X=se,t.width=Math.floor(U*se),t.height=Math.floor(ne*se),this.setViewport(0,0,U,ne)},this.getCurrentViewport=function(U){return U.copy(F)},this.getViewport=function(U){return U.copy(G)},this.setViewport=function(U,ne,se,he){U.isVector4?G.set(U.x,U.y,U.z,U.w):G.set(U,ne,se,he),T.viewport(F.copy(G).multiplyScalar(X).floor())},this.getScissor=function(U){return U.copy(Z)},this.setScissor=function(U,ne,se,he){U.isVector4?Z.set(U.x,U.y,U.z,U.w):Z.set(U,ne,se,he),T.scissor($.copy(Z).multiplyScalar(X).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(U){T.setScissorTest(ce=U)},this.setOpaqueSort=function(U){j=U},this.setTransparentSort=function(U){Y=U},this.getClearColor=function(U){return U.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(U=!0,ne=!0,se=!0){let he=0;if(U){let oe=!1;if(A!==null){let ge=A.texture.format;oe=ge===C0||ge===R0||ge===A0}if(oe){let ge=A.texture.type,Ce=ge===Jr||ge===pr||ge===Bd||ge===Kr||ge===S0||ge===T0,Ie=qe.getClearColor(),Ge=qe.getClearAlpha(),$e=Ie.r,je=Ie.g,Xe=Ie.b;Ce?(m[0]=$e,m[1]=je,m[2]=Xe,m[3]=Ge,re.clearBufferuiv(re.COLOR,0,m)):(f[0]=$e,f[1]=je,f[2]=Xe,f[3]=Ge,re.clearBufferiv(re.COLOR,0,f))}else he|=re.COLOR_BUFFER_BIT}ne&&(he|=re.DEPTH_BUFFER_BIT),se&&(he|=re.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",kp,!1),t.removeEventListener("webglcontextrestored",zp,!1),t.removeEventListener("webglcontextcreationerror",Hp,!1),He.dispose(),Nt.dispose(),Q.dispose(),le.dispose(),me.dispose(),De.dispose(),mn.dispose(),Es.dispose(),_e.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",$p),Xt.removeEventListener("sessionend",Wp),O&&(O.dispose(),O=null),Tr.stop()},this.renderBufferDirect=function(U,ne,se,he,oe,ge){ne===null&&(ne=H);let Ce=oe.isMesh&&oe.matrixWorld.determinant()<0,Ie=function(Pt,Sn,cn,Ye,Qe){Sn.isScene!==!0&&(Sn=H),te.resetTextureUnits();let Fa=Sn.fog,mh=Ye.isMeshStandardMaterial?Sn.environment:null,ny=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:$i,qo=(Ye.isMeshStandardMaterial?me:le).get(Ye.envMap||mh),iy=Ye.vertexColors===!0&&!!cn.attributes.color&&cn.attributes.color.itemSize===4,ry=!!cn.attributes.tangent&&(!!Ye.normalMap||Ye.anisotropy>0),sy=!!cn.morphAttributes.position,ay=!!cn.morphAttributes.normal,oy=!!cn.morphAttributes.color,Jp=gr;Ye.toneMapped&&(A!==null&&A.isXRRenderTarget!==!0||(Jp=v.toneMapping));let Kp=cn.morphAttributes.position||cn.morphAttributes.normal||cn.morphAttributes.color,ly=Kp!==void 0?Kp.length:0,tt=Q.get(Ye),cy=p.state.lights;if(E===!0&&(B===!0||Pt!==L)){let Tn=Pt===L&&Ye.id===z;Te.setState(Ye,Pt,Tn)}let zn=!1;Ye.version===tt.__version?tt.needsLights&&tt.lightsStateVersion!==cy.state.version||tt.outputColorSpace!==ny||Qe.isBatchedMesh&&tt.batching===!1?zn=!0:Qe.isBatchedMesh||tt.batching!==!0?Qe.isInstancedMesh&&tt.instancing===!1?zn=!0:Qe.isInstancedMesh||tt.instancing!==!0?Qe.isSkinnedMesh&&tt.skinning===!1?zn=!0:Qe.isSkinnedMesh||tt.skinning!==!0?Qe.isInstancedMesh&&tt.instancingColor===!0&&Qe.instanceColor===null||Qe.isInstancedMesh&&tt.instancingColor===!1&&Qe.instanceColor!==null||tt.envMap!==qo||Ye.fog===!0&&tt.fog!==Fa?zn=!0:tt.numClippingPlanes===void 0||tt.numClippingPlanes===Te.numPlanes&&tt.numIntersection===Te.numIntersection?(tt.vertexAlphas!==iy||tt.vertexTangents!==ry||tt.morphTargets!==sy||tt.morphNormals!==ay||tt.morphColors!==oy||tt.toneMapping!==Jp||ie.isWebGL2===!0&&tt.morphTargetsCount!==ly)&&(zn=!0):zn=!0:zn=!0:zn=!0:zn=!0:(zn=!0,tt.__version=Ye.version);let Rr=tt.currentProgram;zn===!0&&(Rr=Wo(Ye,Sn,Qe));let Qp=!1,Da=!1,fh=!1,Yt=Rr.getUniforms(),Cr=tt.uniforms;if(T.useProgram(Rr.program)&&(Qp=!0,Da=!0,fh=!0),Ye.id!==z&&(z=Ye.id,Da=!0),Qp||L!==Pt){Yt.setValue(re,"projectionMatrix",Pt.projectionMatrix),Yt.setValue(re,"viewMatrix",Pt.matrixWorldInverse);let Tn=Yt.map.cameraPosition;Tn!==void 0&&Tn.setValue(re,D.setFromMatrixPosition(Pt.matrixWorld)),ie.logarithmicDepthBuffer&&Yt.setValue(re,"logDepthBufFC",2/(Math.log(Pt.far+1)/Math.LN2)),(Ye.isMeshPhongMaterial||Ye.isMeshToonMaterial||Ye.isMeshLambertMaterial||Ye.isMeshBasicMaterial||Ye.isMeshStandardMaterial||Ye.isShaderMaterial)&&Yt.setValue(re,"isOrthographic",Pt.isOrthographicCamera===!0),L!==Pt&&(L=Pt,Da=!0,fh=!0)}if(Qe.isSkinnedMesh){Yt.setOptional(re,Qe,"bindMatrix"),Yt.setOptional(re,Qe,"bindMatrixInverse");let Tn=Qe.skeleton;Tn&&(ie.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),Yt.setValue(re,"boneTexture",Tn.boneTexture,te)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Qe.isBatchedMesh&&(Yt.setOptional(re,Qe,"batchingTexture"),Yt.setValue(re,"batchingTexture",Qe._matricesTexture,te));let gh=cn.morphAttributes;(gh.position!==void 0||gh.normal!==void 0||gh.color!==void 0&&ie.isWebGL2===!0)&&Ho.update(Qe,cn,Rr),(Da||tt.receiveShadow!==Qe.receiveShadow)&&(tt.receiveShadow=Qe.receiveShadow,Yt.setValue(re,"receiveShadow",Qe.receiveShadow)),Ye.isMeshGouraudMaterial&&Ye.envMap!==null&&(Cr.envMap.value=qo,Cr.flipEnvMap.value=qo.isCubeTexture&&qo.isRenderTargetTexture===!1?-1:1),Da&&(Yt.setValue(re,"toneMappingExposure",v.toneMappingExposure),tt.needsLights&&(Hn=fh,(hi=Cr).ambientLightColor.needsUpdate=Hn,hi.lightProbe.needsUpdate=Hn,hi.directionalLights.needsUpdate=Hn,hi.directionalLightShadows.needsUpdate=Hn,hi.pointLights.needsUpdate=Hn,hi.pointLightShadows.needsUpdate=Hn,hi.spotLights.needsUpdate=Hn,hi.spotLightShadows.needsUpdate=Hn,hi.rectAreaLights.needsUpdate=Hn,hi.hemisphereLights.needsUpdate=Hn),Fa&&Ye.fog===!0&&Me.refreshFogUniforms(Cr,Fa),Me.refreshMaterialUniforms(Cr,Ye,X,J,O),ma.upload(re,Yp(tt),Cr,te));var hi,Hn;if(Ye.isShaderMaterial&&Ye.uniformsNeedUpdate===!0&&(ma.upload(re,Yp(tt),Cr,te),Ye.uniformsNeedUpdate=!1),Ye.isSpriteMaterial&&Yt.setValue(re,"center",Qe.center),Yt.setValue(re,"modelViewMatrix",Qe.modelViewMatrix),Yt.setValue(re,"normalMatrix",Qe.normalMatrix),Yt.setValue(re,"modelMatrix",Qe.matrixWorld),Ye.isShaderMaterial||Ye.isRawShaderMaterial){let Tn=Ye.uniformsGroups;for(let yh=0,hy=Tn.length;yh<hy;yh++)if(ie.isWebGL2){let em=Tn[yh];Es.update(em,Rr),Es.bind(em,Rr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rr}(U,ne,se,he,oe);T.setMaterial(he,Ce);let Ge=se.index,$e=1;if(he.wireframe===!0){if(Ge=xe.getWireframeAttribute(se),Ge===void 0)return;$e=2}let je=se.drawRange,Xe=se.attributes.position,gt=je.start*$e,kn=(je.start+je.count)*$e;ge!==null&&(gt=Math.max(gt,ge.start*$e),kn=Math.min(kn,(ge.start+ge.count)*$e)),Ge!==null?(gt=Math.max(gt,0),kn=Math.min(kn,Ge.count)):Xe!=null&&(gt=Math.max(gt,0),kn=Math.min(kn,Xe.count));let Ti=kn-gt;if(Ti<0||Ti===1/0)return;let Ar;mn.setup(oe,he,Ie,se,Ge);let yt=bs;if(Ge!==null&&(Ar=ve.get(Ge),yt=Go,yt.setIndex(Ar)),oe.isMesh)he.wireframe===!0?(T.setLineWidth(he.wireframeLinewidth*q()),yt.setMode(re.LINES)):yt.setMode(re.TRIANGLES);else if(oe.isLine){let Pt=he.linewidth;Pt===void 0&&(Pt=1),T.setLineWidth(Pt*q()),oe.isLineSegments?yt.setMode(re.LINES):oe.isLineLoop?yt.setMode(re.LINE_LOOP):yt.setMode(re.LINE_STRIP)}else oe.isPoints?yt.setMode(re.POINTS):oe.isSprite&&yt.setMode(re.TRIANGLES);if(oe.isBatchedMesh)yt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else if(oe.isInstancedMesh)yt.renderInstances(gt,Ti,oe.count);else if(se.isInstancedBufferGeometry){let Pt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Sn=Math.min(se.instanceCount,Pt);yt.renderInstances(gt,Ti,Sn)}else yt.render(gt,Ti)},this.compile=function(U,ne,se=null){se===null&&(se=U),p=Nt.get(se),p.init(),y.push(p),se.traverseVisible(function(oe){oe.isLight&&oe.layers.test(ne.layers)&&(p.pushLight(oe),oe.castShadow&&p.pushShadow(oe))}),U!==se&&U.traverseVisible(function(oe){oe.isLight&&oe.layers.test(ne.layers)&&(p.pushLight(oe),oe.castShadow&&p.pushShadow(oe))}),p.setupLights(v._useLegacyLights);let he=new Set;return U.traverse(function(oe){let ge=oe.material;if(ge)if(Array.isArray(ge))for(let Ce=0;Ce<ge.length;Ce++){let Ie=ge[Ce];Vp(Ie,se,oe),he.add(Ie)}else Vp(ge,se,oe),he.add(ge)}),y.pop(),p=null,he},this.compileAsync=function(U,ne,se=null){let he=this.compile(U,ne,se);return new Promise(oe=>{function ge(){he.forEach(function(Ce){Q.get(Ce).currentProgram.isReady()&&he.delete(Ce)}),he.size!==0?setTimeout(ge,10):oe(U)}K.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let ph=null;function $p(){Tr.stop()}function Wp(){Tr.start()}let Tr=new U0;function qp(U,ne,se,he){if(U.visible===!1)return;if(U.layers.test(ne.layers)){if(U.isGroup)se=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ne);else if(U.isLight)p.pushLight(U),U.castShadow&&p.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||w.intersectsSprite(U)){he&&D.setFromMatrixPosition(U.matrixWorld).applyMatrix4(I);let ge=De.update(U),Ce=U.material;Ce.visible&&g.push(U,ge,Ce,se,D.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||w.intersectsObject(U))){let ge=De.update(U),Ce=U.material;if(he&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),D.copy(U.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),D.copy(ge.boundingSphere.center)),D.applyMatrix4(U.matrixWorld).applyMatrix4(I)),Array.isArray(Ce)){let Ie=ge.groups;for(let Ge=0,$e=Ie.length;Ge<$e;Ge++){let je=Ie[Ge],Xe=Ce[je.materialIndex];Xe&&Xe.visible&&g.push(U,ge,Xe,se,D.z,je)}}else Ce.visible&&g.push(U,ge,Ce,se,D.z,null)}}let oe=U.children;for(let ge=0,Ce=oe.length;ge<Ce;ge++)qp(oe[ge],ne,se,he)}function jp(U,ne,se,he){let oe=U.opaque,ge=U.transmissive,Ce=U.transparent;p.setupLightsView(se),E===!0&&Te.setGlobalState(v.clippingPlanes,se),ge.length>0&&function(Ie,Ge,$e,je){if(($e.isScene===!0?$e.overrideMaterial:null)!==null)return;let gt=ie.isWebGL2;O===null&&(O=new Qn(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?fo:Jr,minFilter:Zl,samples:gt?4:0})),v.getDrawingBufferSize(V),gt?O.setSize(V.x,V.y):O.setSize(Wu(V.x),Wu(V.y));let kn=v.getRenderTarget();v.setRenderTarget(O),v.getClearColor(P),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();let Ti=v.toneMapping;v.toneMapping=gr,$o(Ie,$e,je),te.updateMultisampleRenderTarget(O),te.updateRenderTargetMipmap(O);let Ar=!1;for(let yt=0,Pt=Ge.length;yt<Pt;yt++){let Sn=Ge[yt],cn=Sn.object,Ye=Sn.geometry,Qe=Sn.material,Fa=Sn.group;if(Qe.side===2&&cn.layers.test(je.layers)){let mh=Qe.side;Qe.side=en,Qe.needsUpdate=!0,Xp(cn,$e,je,Ye,Qe,Fa),Qe.side=mh,Qe.needsUpdate=!0,Ar=!0}}Ar===!0&&(te.updateMultisampleRenderTarget(O),te.updateRenderTargetMipmap(O)),v.setRenderTarget(kn),v.setClearColor(P,N),v.toneMapping=Ti}(oe,ge,ne,se),he&&T.viewport(F.copy(he)),oe.length>0&&$o(oe,ne,se),ge.length>0&&$o(ge,ne,se),Ce.length>0&&$o(Ce,ne,se),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function $o(U,ne,se){let he=ne.isScene===!0?ne.overrideMaterial:null;for(let oe=0,ge=U.length;oe<ge;oe++){let Ce=U[oe],Ie=Ce.object,Ge=Ce.geometry,$e=he===null?Ce.material:he,je=Ce.group;Ie.layers.test(se.layers)&&Xp(Ie,ne,se,Ge,$e,je)}}function Xp(U,ne,se,he,oe,ge){U.onBeforeRender(v,ne,se,he,oe,ge),U.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),oe.onBeforeRender(v,ne,se,he,U,ge),oe.transparent===!0&&oe.side===2&&oe.forceSinglePass===!1?(oe.side=en,oe.needsUpdate=!0,v.renderBufferDirect(se,ne,he,oe,U,ge),oe.side=vr,oe.needsUpdate=!0,v.renderBufferDirect(se,ne,he,oe,U,ge),oe.side=2):v.renderBufferDirect(se,ne,he,oe,U,ge),U.onAfterRender(v,ne,se,he,oe,ge)}function Wo(U,ne,se){ne.isScene!==!0&&(ne=H);let he=Q.get(U),oe=p.state.lights,ge=p.state.shadowsArray,Ce=oe.state.version,Ie=_e.getParameters(U,oe.state,ge,ne,se),Ge=_e.getProgramCacheKey(Ie),$e=he.programs;he.environment=U.isMeshStandardMaterial?ne.environment:null,he.fog=ne.fog,he.envMap=(U.isMeshStandardMaterial?me:le).get(U.envMap||he.environment),$e===void 0&&(U.addEventListener("dispose",Gp),$e=new Map,he.programs=$e);let je=$e.get(Ge);if(je!==void 0){if(he.currentProgram===je&&he.lightsStateVersion===Ce)return Zp(U,Ie),je}else Ie.uniforms=_e.getUniforms(U),U.onBuild(se,Ie,v),U.onBeforeCompile(Ie,v),je=_e.acquireProgram(Ie,Ge),$e.set(Ge,je),he.uniforms=Ie.uniforms;let Xe=he.uniforms;return(U.isShaderMaterial||U.isRawShaderMaterial)&&U.clipping!==!0||(Xe.clippingPlanes=Te.uniform),Zp(U,Ie),he.needsLights=function(gt){return gt.isMeshLambertMaterial||gt.isMeshToonMaterial||gt.isMeshPhongMaterial||gt.isMeshStandardMaterial||gt.isShadowMaterial||gt.isShaderMaterial&&gt.lights===!0}(U),he.lightsStateVersion=Ce,he.needsLights&&(Xe.ambientLightColor.value=oe.state.ambient,Xe.lightProbe.value=oe.state.probe,Xe.directionalLights.value=oe.state.directional,Xe.directionalLightShadows.value=oe.state.directionalShadow,Xe.spotLights.value=oe.state.spot,Xe.spotLightShadows.value=oe.state.spotShadow,Xe.rectAreaLights.value=oe.state.rectArea,Xe.ltc_1.value=oe.state.rectAreaLTC1,Xe.ltc_2.value=oe.state.rectAreaLTC2,Xe.pointLights.value=oe.state.point,Xe.pointLightShadows.value=oe.state.pointShadow,Xe.hemisphereLights.value=oe.state.hemi,Xe.directionalShadowMap.value=oe.state.directionalShadowMap,Xe.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Xe.spotShadowMap.value=oe.state.spotShadowMap,Xe.spotLightMatrix.value=oe.state.spotLightMatrix,Xe.spotLightMap.value=oe.state.spotLightMap,Xe.pointShadowMap.value=oe.state.pointShadowMap,Xe.pointShadowMatrix.value=oe.state.pointShadowMatrix),he.currentProgram=je,he.uniformsList=null,je}function Yp(U){if(U.uniformsList===null){let ne=U.currentProgram.getUniforms();U.uniformsList=ma.seqWithValue(ne.seq,U.uniforms)}return U.uniformsList}function Zp(U,ne){let se=Q.get(U);se.outputColorSpace=ne.outputColorSpace,se.batching=ne.batching,se.instancing=ne.instancing,se.instancingColor=ne.instancingColor,se.skinning=ne.skinning,se.morphTargets=ne.morphTargets,se.morphNormals=ne.morphNormals,se.morphColors=ne.morphColors,se.morphTargetsCount=ne.morphTargetsCount,se.numClippingPlanes=ne.numClippingPlanes,se.numIntersection=ne.numClipIntersection,se.vertexAlphas=ne.vertexAlphas,se.vertexTangents=ne.vertexTangents,se.toneMapping=ne.toneMapping}Tr.setAnimationLoop(function(U){ph&&ph(U)}),typeof self!="undefined"&&Tr.setContext(self),this.setAnimationLoop=function(U){ph=U,Xt.setAnimationLoop(U),U===null?Tr.stop():Tr.start()},Xt.addEventListener("sessionstart",$p),Xt.addEventListener("sessionend",Wp),this.render=function(U,ne){if(ne!==void 0&&ne.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(ne),ne=Xt.getCamera()),U.isScene===!0&&U.onBeforeRender(v,U,ne,A),p=Nt.get(U,y.length),p.init(),y.push(p),I.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),w.setFromProjectionMatrix(I),B=this.localClippingEnabled,E=Te.init(this.clippingPlanes,B),g=He.get(U,x.length),g.init(),x.push(g),qp(U,ne,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(j,Y),this.info.render.frame++,E===!0&&Te.beginShadows();let se=p.state.shadowsArray;if(Ke.render(se,U,ne),E===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(g,U),p.setupLights(v._useLegacyLights),ne.isArrayCamera){let he=ne.cameras;for(let oe=0,ge=he.length;oe<ge;oe++){let Ce=he[oe];jp(g,U,Ce,Ce.viewport)}}else jp(g,U,ne);A!==null&&(te.updateMultisampleRenderTarget(A),te.updateRenderTargetMipmap(A)),U.isScene===!0&&U.onAfterRender(v,U,ne),mn.resetDefaultState(),z=-1,L=null,y.pop(),p=y.length>0?y[y.length-1]:null,x.pop(),g=x.length>0?x[x.length-1]:null},this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(U,ne,se){Q.get(U.texture).__webglTexture=ne,Q.get(U.depthTexture).__webglTexture=se;let he=Q.get(U);he.__hasExternalTextures=!0,he.__hasExternalTextures&&(he.__autoAllocateDepthBuffer=se===void 0,he.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,ne){let se=Q.get(U);se.__webglFramebuffer=ne,se.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(U,ne=0,se=0){A=U,C=ne,S=se;let he=!0,oe=null,ge=!1,Ce=!1;if(U){let Ie=Q.get(U);Ie.__useDefaultFramebuffer!==void 0?(T.bindFramebuffer(re.FRAMEBUFFER,null),he=!1):Ie.__webglFramebuffer===void 0?te.setupRenderTarget(U):Ie.__hasExternalTextures&&te.rebindTextures(U,Q.get(U.texture).__webglTexture,Q.get(U.depthTexture).__webglTexture);let Ge=U.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ce=!0);let $e=Q.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(oe=Array.isArray($e[ne])?$e[ne][se]:$e[ne],ge=!0):oe=ie.isWebGL2&&U.samples>0&&te.useMultisampledRTT(U)===!1?Q.get(U).__webglMultisampledFramebuffer:Array.isArray($e)?$e[se]:$e,F.copy(U.viewport),$.copy(U.scissor),b=U.scissorTest}else F.copy(G).multiplyScalar(X).floor(),$.copy(Z).multiplyScalar(X).floor(),b=ce;if(T.bindFramebuffer(re.FRAMEBUFFER,oe)&&ie.drawBuffers&&he&&T.drawBuffers(U,oe),T.viewport(F),T.scissor($),T.setScissorTest(b),ge){let Ie=Q.get(U.texture);re.framebufferTexture2D(re.FRAMEBUFFER,re.COLOR_ATTACHMENT0,re.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie.__webglTexture,se)}else if(Ce){let Ie=Q.get(U.texture),Ge=ne||0;re.framebufferTextureLayer(re.FRAMEBUFFER,re.COLOR_ATTACHMENT0,Ie.__webglTexture,se||0,Ge)}z=-1},this.readRenderTargetPixels=function(U,ne,se,he,oe,ge,Ce){if(!U||!U.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Q.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){T.bindFramebuffer(re.FRAMEBUFFER,Ie);try{let Ge=U.texture,$e=Ge.format,je=Ge.type;if($e!==Pn&&wn.convert($e)!==re.getParameter(re.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Xe=je===fo&&(K.has("EXT_color_buffer_half_float")||ie.isWebGL2&&K.has("EXT_color_buffer_float"));if(!(je===Jr||wn.convert(je)===re.getParameter(re.IMPLEMENTATION_COLOR_READ_TYPE)||je===mr&&(ie.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float"))||Xe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");ne>=0&&ne<=U.width-he&&se>=0&&se<=U.height-oe&&re.readPixels(ne,se,he,oe,wn.convert($e),wn.convert(je),ge)}finally{let Ge=A!==null?Q.get(A).__webglFramebuffer:null;T.bindFramebuffer(re.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(U,ne,se=0){let he=Math.pow(2,-se),oe=Math.floor(ne.image.width*he),ge=Math.floor(ne.image.height*he);te.setTexture2D(ne,0),re.copyTexSubImage2D(re.TEXTURE_2D,se,0,0,U.x,U.y,oe,ge),T.unbindTexture()},this.copyTextureToTexture=function(U,ne,se,he=0){let oe=ne.image.width,ge=ne.image.height,Ce=wn.convert(se.format),Ie=wn.convert(se.type);te.setTexture2D(se,0),re.pixelStorei(re.UNPACK_FLIP_Y_WEBGL,se.flipY),re.pixelStorei(re.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),re.pixelStorei(re.UNPACK_ALIGNMENT,se.unpackAlignment),ne.isDataTexture?re.texSubImage2D(re.TEXTURE_2D,he,U.x,U.y,oe,ge,Ce,Ie,ne.image.data):ne.isCompressedTexture?re.compressedTexSubImage2D(re.TEXTURE_2D,he,U.x,U.y,ne.mipmaps[0].width,ne.mipmaps[0].height,Ce,ne.mipmaps[0].data):re.texSubImage2D(re.TEXTURE_2D,he,U.x,U.y,Ce,Ie,ne.image),he===0&&se.generateMipmaps&&re.generateMipmap(re.TEXTURE_2D),T.unbindTexture()},this.copyTextureToTexture3D=function(U,ne,se,he,oe=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let ge=U.max.x-U.min.x+1,Ce=U.max.y-U.min.y+1,Ie=U.max.z-U.min.z+1,Ge=wn.convert(he.format),$e=wn.convert(he.type),je;if(he.isData3DTexture)te.setTexture3D(he,0),je=re.TEXTURE_3D;else{if(!he.isDataArrayTexture&&!he.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");te.setTexture2DArray(he,0),je=re.TEXTURE_2D_ARRAY}re.pixelStorei(re.UNPACK_FLIP_Y_WEBGL,he.flipY),re.pixelStorei(re.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),re.pixelStorei(re.UNPACK_ALIGNMENT,he.unpackAlignment);let Xe=re.getParameter(re.UNPACK_ROW_LENGTH),gt=re.getParameter(re.UNPACK_IMAGE_HEIGHT),kn=re.getParameter(re.UNPACK_SKIP_PIXELS),Ti=re.getParameter(re.UNPACK_SKIP_ROWS),Ar=re.getParameter(re.UNPACK_SKIP_IMAGES),yt=se.isCompressedTexture?se.mipmaps[oe]:se.image;re.pixelStorei(re.UNPACK_ROW_LENGTH,yt.width),re.pixelStorei(re.UNPACK_IMAGE_HEIGHT,yt.height),re.pixelStorei(re.UNPACK_SKIP_PIXELS,U.min.x),re.pixelStorei(re.UNPACK_SKIP_ROWS,U.min.y),re.pixelStorei(re.UNPACK_SKIP_IMAGES,U.min.z),se.isDataTexture||se.isData3DTexture?re.texSubImage3D(je,oe,ne.x,ne.y,ne.z,ge,Ce,Ie,Ge,$e,yt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),re.compressedTexSubImage3D(je,oe,ne.x,ne.y,ne.z,ge,Ce,Ie,Ge,yt.data)):re.texSubImage3D(je,oe,ne.x,ne.y,ne.z,ge,Ce,Ie,Ge,$e,yt),re.pixelStorei(re.UNPACK_ROW_LENGTH,Xe),re.pixelStorei(re.UNPACK_IMAGE_HEIGHT,gt),re.pixelStorei(re.UNPACK_SKIP_PIXELS,kn),re.pixelStorei(re.UNPACK_SKIP_ROWS,Ti),re.pixelStorei(re.UNPACK_SKIP_IMAGES,Ar),oe===0&&he.generateMipmaps&&re.generateMipmap(je),T.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?te.setTextureCube(U,0):U.isData3DTexture?te.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?te.setTexture2DArray(U,0):te.setTexture2D(U,0),T.unbindTexture()},this.resetState=function(){C=0,S=0,A=null,T.reset(),mn.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return va}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Od?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===Ic?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===St?es:P0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===es?St:$i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ad=class extends vo{};ad.prototype.isWebGL1Renderer=!0;var pc=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xo=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},od=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new R,mc=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_n=class extends gi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},oa,ro=new R,la=new R,ca=new R,ha=new ue,so=new ue,H0=new Fe,Ul=new R,ao=new R,Nl=new R,i0=new ue,Ru=new ue,r0=new ue,Fn=class extends Ht{constructor(e=new _n){if(super(),this.isSprite=!0,this.type="Sprite",oa===void 0){oa=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new od(t,5);oa.setIndex([0,1,2,0,2,3]),oa.setAttribute("position",new mc(i,3,0,!1)),oa.setAttribute("uv",new mc(i,2,3,!1))}this.geometry=oa,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),la.setFromMatrixScale(this.matrixWorld),H0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ca.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&la.multiplyScalar(-ca.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let a=this.center;Bl(Ul.set(-.5,-.5,0),ca,a,la,r,s),Bl(ao.set(.5,-.5,0),ca,a,la,r,s),Bl(Nl.set(.5,.5,0),ca,a,la,r,s),i0.set(0,0),Ru.set(1,0),r0.set(1,1);let o=e.ray.intersectTriangle(Ul,ao,Nl,!1,ro);if(o===null&&(Bl(ao.set(-.5,.5,0),ca,a,la,r,s),Ru.set(0,1),o=e.ray.intersectTriangle(Ul,Nl,ao,!1,ro),o===null))return;let l=e.ray.origin.distanceTo(ro);l<e.near||l>e.far||t.push({distance:l,point:ro.clone(),uv:fr.getInterpolation(ro,Ul,ao,Nl,i0,Ru,r0,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Bl(n,e,t,i,r,s){ha.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(so.x=s*ha.x-r*ha.y,so.y=r*ha.x+s*ha.y):so.copy(ha),n.copy(e),n.x+=so.x,n.y+=so.y,n.applyMatrix4(H0)}var cb=new R,hb=new R;var ub=new R,db=new Rt,pb=new Rt,mb=new R,fb=new Fe,gb=new R,yb=new ti,vb=new Fe,xb=new ts;var fc=class extends xn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_b=new Fe,bb=new Fe;var gc=class extends mt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ua=new Fe,s0=new Fe,Ol=[],a0=new ei,Jx=new Fe,oo=new de,lo=new ti,yi=class extends de{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gc(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Jx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ua),a0.copy(e.boundingBox).applyMatrix4(ua),this.boundingBox.union(a0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ua),lo.copy(e.boundingSphere).applyMatrix4(ua),this.boundingSphere.union(lo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(i),e.ray.intersectsSphere(lo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ua),s0.multiplyMatrices(i,ua),oo.matrixWorld=s0,oo.raycast(e,Ol);for(let a=0,o=Ol.length;a<o;a++){let l=Ol[a];l.instanceId=s,l.object=this,t.push(l)}Ol.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gc(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ld=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let s=i[this.index];r.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var Eb=new Fe,Mb=new Fe,wb=new Fe,Sb=new Fe,Tb=new ba,Ab=new ei,Rb=new ti,Cb=new R,Lb=new ld,Pb=new de;var _o=class extends gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},o0=new R,l0=new R,c0=new Fe,Cu=new ts,kl=new ti,yc=class extends Ht{constructor(e=new rt,t=new _o){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)o0.fromBufferAttribute(t,r-1),l0.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=o0.distanceTo(l0);e.setAttribute("lineDistance",new Ue(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(r),kl.radius+=s,e.ray.intersectsSphere(kl)===!1)return;c0.copy(r).invert(),Cu.copy(e.ray).applyMatrix4(c0);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,h=new R,u=new R,d=new R,m=this.isLineSegments?2:1,f=i.index,g=i.attributes.position;if(f!==null)for(let p=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count)-1;p<x;p+=m){let y=f.getX(p),v=f.getX(p+1);if(c.fromBufferAttribute(g,y),h.fromBufferAttribute(g,v),Cu.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}else for(let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count)-1;p<x;p+=m){if(c.fromBufferAttribute(g,p),h.fromBufferAttribute(g,p+1),Cu.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Ib=new R,Fb=new R;var _r=class extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},h0=new Fe,cd=new ts,zl=new ti,Hl=new R,ns=class extends Ht{constructor(e=new rt,t=new _r){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(r),zl.radius+=s,e.ray.intersectsSphere(zl)===!1)return;h0.copy(r).invert(),cd.copy(e.ray).applyMatrix4(h0);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let m=c.getX(u);Hl.fromBufferAttribute(h,m),u0(Hl,m,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Hl.fromBufferAttribute(h,u),u0(Hl,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function u0(n,e,t,i,r,s,a){let o=cd.distanceSqToPoint(n);if(o<t){let l=new R;cd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var vc=class extends xn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ue:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new R,r=[],s=[],a=[],o=new R,l=new Fe;for(let m=0;m<=e;m++){let f=m/e;r[m]=this.getTangentAt(f,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Vt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,f))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Vt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],m*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},bo=class extends Dn{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new ue,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hd=class extends bo{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zd(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,m*=h,r(a,o,d,m)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var Gl=new R,Lu=new zd,Pu=new zd,Iu=new zd,ud=class extends Dn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(Gl.subVectors(r[0],r[1]).add(r[0]),o=Gl);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(Gl.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Gl),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),m),g=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(l),m);g<1e-4&&(g=1),f<1e-4&&(f=g),p<1e-4&&(p=g),Lu.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,g,p),Pu.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,g,p),Iu.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,g,p)}else this.curveType==="catmullrom"&&(Lu.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Pu.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Iu.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Lu.calc(h),Pu.calc(h),Iu.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function d0(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function uo(n,e,t,i){return function(r,s){let a=1-r;return a*a*s}(n,e)+function(r,s){return 2*(1-r)*r*s}(n,t)+function(r,s){return r*r*s}(n,i)}function po(n,e,t,i,r){return function(s,a){let o=1-s;return o*o*o*a}(n,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(n,t)+function(s,a){return 3*(1-s)*s*s*a}(n,i)+function(s,a){return s*s*s*a}(n,r)}var xc=class extends Dn{constructor(e=new ue,t=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ue){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(po(e,r.x,s.x,a.x,o.x),po(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dd=class extends Dn{constructor(e=new R,t=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(po(e,r.x,s.x,a.x,o.x),po(e,r.y,s.y,a.y,o.y),po(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_c=class extends Dn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pd=class extends Dn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bc=class extends Dn{constructor(e=new ue,t=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ue){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(uo(e,r.x,s.x,a.x),uo(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ec=class extends Dn{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(uo(e,r.x,s.x,a.x),uo(e,r.y,s.y,a.y),uo(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mc=class extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(d0(o,l.x,c.x,h.x,u.x),d0(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ue().fromArray(r))}return this}},wc=Object.freeze({__proto__:null,ArcCurve:hd,CatmullRomCurve3:ud,CubicBezierCurve:xc,CubicBezierCurve3:dd,EllipseCurve:bo,LineCurve:_c,LineCurve3:pd,QuadraticBezierCurve:bc,QuadraticBezierCurve3:Ec,SplineCurve:Mc}),md=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new wc[r.type]().fromJSON(r))}return this}},Eo=class extends md{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new _c(this.currentPoint.clone(),new ue(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new bc(this.currentPoint.clone(),new ue(e,t),new ue(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new xc(this.currentPoint.clone(),new ue(e,t),new ue(i,r),new ue(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Mc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new bo(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Sc=class n extends rt{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Vt(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new R,d=new ue,m=new R,f=new R,g=new R,p=0,x=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,x=e[y+1].y-e[y].y,m.x=1*x,m.y=-p,m.z=0*x,g.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:p=e[y+1].x-e[y].x,x=e[y+1].y-e[y].y,m.x=1*x,m.y=-p,m.z=0*x,f.copy(m),m.x+=g.x,m.y+=g.y,m.z+=g.z,m.normalize(),l.push(m.x,m.y,m.z),g.copy(f)}for(let y=0;y<=t;y++){let v=i+y*h*r,M=Math.sin(v),C=Math.cos(v);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*M,u.y=e[S].y,u.z=e[S].x*C,a.push(u.x,u.y,u.z),d.x=y/t,d.y=S/(e.length-1),o.push(d.x,d.y);let A=l[3*S+0]*M,z=l[3*S+1],L=l[3*S+0]*C;c.push(A,z,L)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let M=v+y*e.length,C=M,S=M+e.length,A=M+e.length+1,z=M+1;s.push(C,S,z),s.push(A,z,S)}this.setIndex(s),this.setAttribute("position",new Ue(a,3)),this.setAttribute("uv",new Ue(o,2)),this.setAttribute("normal",new Ue(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},br=class n extends Sc{constructor(e=1,t=1,i=4,r=8){let s=new Eo;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Un=class n extends rt{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new R,h=new ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let m=i+u/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(o,3)),this.setAttribute("uv",new Ue(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ae=class n extends rt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],m=[],f=0,g=[],p=i/2,x=0;function y(v){let M=f,C=new ue,S=new R,A=0,z=v===!0?e:t,L=v===!0?1:-1;for(let $=1;$<=r;$++)u.push(0,p*L,0),d.push(0,L,0),m.push(.5,.5),f++;let F=f;for(let $=0;$<=r;$++){let b=$/r*l+o,P=Math.cos(b),N=Math.sin(b);S.x=z*N,S.y=p*L,S.z=z*P,u.push(S.x,S.y,S.z),d.push(0,L,0),C.x=.5*P+.5,C.y=.5*N*L+.5,m.push(C.x,C.y),f++}for(let $=0;$<r;$++){let b=M+$,P=F+$;v===!0?h.push(P,P+1,b):h.push(P+1,P,b),A+=3}c.addGroup(x,A,v===!0?1:2),x+=A}(function(){let v=new R,M=new R,C=0,S=(t-e)/i;for(let A=0;A<=s;A++){let z=[],L=A/s,F=L*(t-e)+e;for(let $=0;$<=r;$++){let b=$/r,P=b*l+o,N=Math.sin(P),k=Math.cos(P);M.x=F*N,M.y=-L*i+p,M.z=F*k,u.push(M.x,M.y,M.z),v.set(N,S,k).normalize(),d.push(v.x,v.y,v.z),m.push(b,1-L),z.push(f++)}g.push(z)}for(let A=0;A<r;A++)for(let z=0;z<s;z++){let L=g[z][A],F=g[z+1][A],$=g[z+1][A+1],b=g[z][A+1];h.push(L,F,b),h.push(F,$,b),C+=6}c.addGroup(x,C,0),x+=C})(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bn=class n extends Ae{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},is=class n extends rt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(d,m,f,g){let p=g+1,x=[];for(let y=0;y<=p;y++){x[y]=[];let v=d.clone().lerp(f,y/p),M=m.clone().lerp(f,y/p),C=p-y;for(let S=0;S<=C;S++)x[y][S]=S===0&&y===p?v:v.clone().lerp(M,S/C)}for(let y=0;y<p;y++)for(let v=0;v<2*(p-y)-1;v++){let M=Math.floor(v/2);v%2==0?(l(x[y][M+1]),l(x[y+1][M]),l(x[y][M])):(l(x[y][M+1]),l(x[y+1][M+1]),l(x[y+1][M]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,m){let f=3*d;m.x=e[f+0],m.y=e[f+1],m.z=e[f+2]}function h(d,m,f,g){g<0&&d.x===1&&(a[m]=d.x-1),f.x===0&&f.z===0&&(a[m]=g/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let m=new R,f=new R,g=new R;for(let p=0;p<t.length;p+=3)c(t[p+0],m),c(t[p+1],f),c(t[p+2],g),o(m,f,g,d)})(r),function(d){let m=new R;for(let f=0;f<s.length;f+=3)m.x=s[f+0],m.y=s[f+1],m.z=s[f+2],m.normalize().multiplyScalar(d),s[f+0]=m.x,s[f+1]=m.y,s[f+2]=m.z}(i),function(){let d=new R;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let g=u(d)/2/Math.PI+.5,p=(m=d,Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))/Math.PI+.5);a.push(g,1-p)}var m;(function(){let f=new R,g=new R,p=new R,x=new R,y=new ue,v=new ue,M=new ue;for(let C=0,S=0;C<s.length;C+=9,S+=6){f.set(s[C+0],s[C+1],s[C+2]),g.set(s[C+3],s[C+4],s[C+5]),p.set(s[C+6],s[C+7],s[C+8]),y.set(a[S+0],a[S+1]),v.set(a[S+2],a[S+3]),M.set(a[S+4],a[S+5]),x.copy(f).add(g).add(p).divideScalar(3);let A=u(x);h(y,S+0,f,A),h(v,S+2,g,A),h(M,S+4,p,A)}})(),function(){for(let f=0;f<a.length;f+=6){let g=a[f+0],p=a[f+2],x=a[f+4],y=Math.max(g,p,x),v=Math.min(g,p,x);y>.9&&v<.1&&(g<.2&&(a[f+0]+=1),p<.2&&(a[f+2]+=1),x<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new Ue(s,3)),this.setAttribute("normal",new Ue(s.slice(),3)),this.setAttribute("uv",new Ue(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},fd=class n extends is{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Vl=new R,$l=new R,Fu=new R,Wl=new fr,gd=class extends rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Yl*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:g,b:p,c:x}=Wl;if(g.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),x.fromBufferAttribute(o,c[2]),Wl.getNormal(Fu),u[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,u[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let y=0;y<3;y++){let v=(y+1)%3,M=u[y],C=u[v],S=Wl[h[y]],A=Wl[h[v]],z=`${M}_${C}`,L=`${C}_${M}`;L in d&&d[L]?(Fu.dot(d[L].normal)<=s&&(m.push(S.x,S.y,S.z),m.push(A.x,A.y,A.z)),d[L]=null):z in d||(d[z]={index0:c[y],index1:c[v],normal:Fu.clone()})}}for(let f in d)if(d[f]){let{index0:g,index1:p}=d[f];Vl.fromBufferAttribute(o,g),$l.fromBufferAttribute(o,p),m.push(Vl.x,Vl.y,Vl.z),m.push($l.x,$l.y,$l.z)}this.setAttribute("position",new Ue(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},vi=class extends Eo{constructor(e){super(e),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Eo().fromJSON(r))}return this}},Kx=function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=p0(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,m;if(i&&(s=function(f,g,p,x){let y=[],v,M,C,S,A;for(v=0,M=g.length;v<M;v++)C=g[v]*x,S=v<M-1?g[v+1]*x:f.length,A=p0(f,C,S,x,!1),A===A.next&&(A.steiner=!0),y.push(a_(A));for(y.sort(i_),v=0;v<y.length;v++)p=r_(y[v],p);return p}(n,e,s,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let f=t;f<r;f+=t)u=n[f],d=n[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return Mo(s,a,t,o,l,m,0),a};function p0(n,e,t,i,r){let s,a;if(r===function(o,l,c,h){let u=0;for(let d=l,m=c-h;d<c;d+=h)u+=(o[m]-o[d])*(o[d+1]+o[m+1]),m=d;return u}(n,e,t,i)>0)for(s=e;s<t;s+=i)a=m0(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=m0(s,n[s],n[s+1],a);return a&&Dc(a,a.next)&&(So(a),a=a.next),a}function rs(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!Dc(i,i.next)&&bt(i.prev,i,i.next)!==0)i=i.next;else{if(So(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Mo(n,e,t,i,r,s,a){if(!n)return;!a&&s&&function(h,u,d,m){let f=h;do f.z===0&&(f.z=yd(f.x,f.y,u,d,m)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(g){let p,x,y,v,M,C,S,A,z=1;do{for(x=g,g=null,M=null,C=0;x;){for(C++,y=x,S=0,p=0;p<z&&(S++,y=y.nextZ,y);p++);for(A=z;S>0||A>0&&y;)S!==0&&(A===0||!y||x.z<=y.z)?(v=x,x=x.nextZ,S--):(v=y,y=y.nextZ,A--),M?M.nextZ=v:g=v,v.prevZ=M,M=v;x=y}M.nextZ=null,z*=2}while(C>1)}(f)}(n,i,r,s);let o,l,c=n;for(;n.prev!==n.next;)if(o=n.prev,l=n.next,s?e_(n,i,r,s):Qx(n))e.push(o.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),So(n),n=l.next,c=l.next;else if((n=l)===c){a?a===1?Mo(n=t_(rs(n),e,t),e,t,i,r,s,2):a===2&&n_(n,e,t,i,r,s):Mo(rs(n),e,t,i,r,s,1);break}}function Qx(n){let e=n.prev,t=n,i=n.next;if(bt(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c,f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=m&&da(r,o,s,l,a,c,f.x,f.y)&&bt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function e_(n,e,t,i){let r=n.prev,s=n,a=n.next;if(bt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,g=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,x=yd(m,f,e,t,i),y=yd(g,p,e,t,i),v=n.prevZ,M=n.nextZ;for(;v&&v.z>=x&&M&&M.z<=y;){if(v.x>=m&&v.x<=g&&v.y>=f&&v.y<=p&&v!==r&&v!==a&&da(o,h,l,u,c,d,v.x,v.y)&&bt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=m&&M.x<=g&&M.y>=f&&M.y<=p&&M!==r&&M!==a&&da(o,h,l,u,c,d,M.x,M.y)&&bt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=x;){if(v.x>=m&&v.x<=g&&v.y>=f&&v.y<=p&&v!==r&&v!==a&&da(o,h,l,u,c,d,v.x,v.y)&&bt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=y;){if(M.x>=m&&M.x<=g&&M.y>=f&&M.y<=p&&M!==r&&M!==a&&da(o,h,l,u,c,d,M.x,M.y)&&bt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function t_(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!Dc(r,s)&&G0(r,i,i.next,s)&&wo(r,s)&&wo(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),So(i),So(i.next),i=n=s),i=i.next}while(i!==n);return rs(i)}function n_(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&o_(a,o)){let l=V0(a,o);return a=rs(a,a.next),l=rs(l,l.next),Mo(a,e,t,i,r,s,0),void Mo(l,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function i_(n,e){return n.x-e.x}function r_(n,e){let t=function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let p=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(p<=c&&p>l&&(l=p,a=o.x<o.next.x?o:o.next,p===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,m=a.y,f,g=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&da(h<m?c:l,h,d,m,h<m?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),wo(o,r)&&(f<g||f===g&&(o.x>a.x||o.x===a.x&&s_(a,o)))&&(a=o,g=f)),o=o.next;while(o!==u);return a}(n,e);if(!t)return e;let i=V0(t,n);return rs(i,i.next),rs(t,t.next)}function s_(n,e){return bt(n.prev,n,e.prev)<0&&bt(e.next,n,n.next)<0}function yd(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function a_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function da(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function o_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&G0(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1}(n,e)&&(wo(n,e)&&wo(e,n)&&function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s}(n,e)&&(bt(n.prev,n,e.prev)||bt(n,e.prev,e))||Dc(n,e)&&bt(n.prev,n,n.next)>0&&bt(e.prev,e,e.next)>0)}function bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Dc(n,e){return n.x===e.x&&n.y===e.y}function G0(n,e,t,i){let r=jl(bt(n,e,t)),s=jl(bt(n,e,i)),a=jl(bt(t,i,n)),o=jl(bt(t,i,e));return r!==s&&a!==o||!(r!==0||!ql(n,t,e))||!(s!==0||!ql(n,i,e))||!(a!==0||!ql(t,n,i))||!(o!==0||!ql(t,e,i))}function ql(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function jl(n){return n>0?1:n<0?-1:0}function wo(n,e){return bt(n.prev,n,n.next)<0?bt(n,e,n.next)>=0&&bt(n,n.prev,e)>=0:bt(n,e,n.prev)<0||bt(n,n.next,e)<0}function V0(n,e){let t=new vd(n.i,n.x,n.y),i=new vd(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function m0(n,e,t,i){let r=new vd(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function So(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vd(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var yr=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];f0(e),g0(i,e);let a=e.length;t.forEach(f0);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,g0(i,t[l]);let o=Kx(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function f0(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function g0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Wi=class n extends rt{constructor(e=new vi([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,m=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:m-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:l_,v,M,C,S,A,z=!1;x&&(v=x.getSpacedPoints(h),z=!0,d=!1,M=x.computeFrenetFrames(h,!1),C=new R,S=new R,A=new R),d||(p=0,m=0,f=0,g=0);let L=o.extractPoints(c),F=L.shape,$=L.holes;if(!yr.isClockWise(F)){F=F.reverse();for(let D=0,H=$.length;D<H;D++){let q=$[D];yr.isClockWise(q)&&($[D]=q.reverse())}}let b=yr.triangulateShape(F,$),P=F;for(let D=0,H=$.length;D<H;D++){let q=$[D];F=F.concat(q)}function N(D,H,q){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(H,q)}let k=F.length,J=b.length;function X(D,H,q){let K,ie,T,ae=D.x-H.x,Q=D.y-H.y,te=q.x-D.x,le=q.y-D.y,me=ae*ae+Q*Q,ve=ae*le-Q*te;if(Math.abs(ve)>Number.EPSILON){let xe=Math.sqrt(me),De=Math.sqrt(te*te+le*le),_e=H.x-Q/xe,Me=H.y+ae/xe,He=((q.x-le/De-_e)*le-(q.y+te/De-Me)*te)/(ae*le-Q*te);K=_e+ae*He-D.x,ie=Me+Q*He-D.y;let Nt=K*K+ie*ie;if(Nt<=2)return new ue(K,ie);T=Math.sqrt(Nt/2)}else{let xe=!1;ae>Number.EPSILON?te>Number.EPSILON&&(xe=!0):ae<-Number.EPSILON?te<-Number.EPSILON&&(xe=!0):Math.sign(Q)===Math.sign(le)&&(xe=!0),xe?(K=-Q,ie=ae,T=Math.sqrt(me)):(K=ae,ie=Q,T=Math.sqrt(me/2))}return new ue(K/T,ie/T)}let j=[];for(let D=0,H=P.length,q=H-1,K=D+1;D<H;D++,q++,K++)q===H&&(q=0),K===H&&(K=0),j[D]=X(P[D],P[q],P[K]);let Y=[],G,Z=j.concat();for(let D=0,H=$.length;D<H;D++){let q=$[D];G=[];for(let K=0,ie=q.length,T=ie-1,ae=K+1;K<ie;K++,T++,ae++)T===ie&&(T=0),ae===ie&&(ae=0),G[K]=X(q[K],q[T],q[ae]);Y.push(G),Z=Z.concat(G)}for(let D=0;D<p;D++){let H=D/p,q=m*Math.cos(H*Math.PI/2),K=f*Math.sin(H*Math.PI/2)+g;for(let ie=0,T=P.length;ie<T;ie++){let ae=N(P[ie],j[ie],K);E(ae.x,ae.y,-q)}for(let ie=0,T=$.length;ie<T;ie++){let ae=$[ie];G=Y[ie];for(let Q=0,te=ae.length;Q<te;Q++){let le=N(ae[Q],G[Q],K);E(le.x,le.y,-q)}}}let ce=f+g;for(let D=0;D<k;D++){let H=d?N(F[D],Z[D],ce):F[D];z?(S.copy(M.normals[0]).multiplyScalar(H.x),C.copy(M.binormals[0]).multiplyScalar(H.y),A.copy(v[0]).add(S).add(C),E(A.x,A.y,A.z)):E(H.x,H.y,0)}for(let D=1;D<=h;D++)for(let H=0;H<k;H++){let q=d?N(F[H],Z[H],ce):F[H];z?(S.copy(M.normals[D]).multiplyScalar(q.x),C.copy(M.binormals[D]).multiplyScalar(q.y),A.copy(v[D]).add(S).add(C),E(A.x,A.y,A.z)):E(q.x,q.y,u/h*D)}for(let D=p-1;D>=0;D--){let H=D/p,q=m*Math.cos(H*Math.PI/2),K=f*Math.sin(H*Math.PI/2)+g;for(let ie=0,T=P.length;ie<T;ie++){let ae=N(P[ie],j[ie],K);E(ae.x,ae.y,u+q)}for(let ie=0,T=$.length;ie<T;ie++){let ae=$[ie];G=Y[ie];for(let Q=0,te=ae.length;Q<te;Q++){let le=N(ae[Q],G[Q],K);z?E(le.x,le.y+v[h-1].y,v[h-1].x+q):E(le.x,le.y,u+q)}}}function w(D,H){let q=D.length;for(;--q>=0;){let K=q,ie=q-1;ie<0&&(ie=D.length-1);for(let T=0,ae=h+2*p;T<ae;T++){let Q=k*T,te=k*(T+1);O(H+K+Q,H+ie+Q,H+ie+te,H+K+te)}}}function E(D,H,q){l.push(D),l.push(H),l.push(q)}function B(D,H,q){I(D),I(H),I(q);let K=r.length/3,ie=y.generateTopUV(i,r,K-3,K-2,K-1);V(ie[0]),V(ie[1]),V(ie[2])}function O(D,H,q,K){I(D),I(H),I(K),I(H),I(q),I(K);let ie=r.length/3,T=y.generateSideWallUV(i,r,ie-6,ie-3,ie-2,ie-1);V(T[0]),V(T[1]),V(T[3]),V(T[1]),V(T[2]),V(T[3])}function I(D){r.push(l[3*D+0]),r.push(l[3*D+1]),r.push(l[3*D+2])}function V(D){s.push(D.x),s.push(D.y)}(function(){let D=r.length/3;if(d){let H=0,q=k*H;for(let K=0;K<J;K++){let ie=b[K];B(ie[2]+q,ie[1]+q,ie[0]+q)}H=h+2*p,q=k*H;for(let K=0;K<J;K++){let ie=b[K];B(ie[0]+q,ie[1]+q,ie[2]+q)}}else{for(let H=0;H<J;H++){let q=b[H];B(q[2],q[1],q[0])}for(let H=0;H<J;H++){let q=b[H];B(q[0]+k*h,q[1]+k*h,q[2]+k*h)}}i.addGroup(D,r.length/3-D,0)})(),function(){let D=r.length/3,H=0;w(P,H),H+=P.length;for(let q=0,K=$.length;q<K;q++){let ie=$[q];w(ie,H),H+=ie.length}i.addGroup(D,r.length/3-D,1)}()}this.setAttribute("position",new Ue(r,3)),this.setAttribute("uv",new Ue(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new wc[r.type]().fromJSON(r)),new n(i,e.options)}},l_={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new ue(s,a),new ue(o,l),new ue(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],m=e[3*r+1],f=e[3*r+2],g=e[3*s],p=e[3*s+1],x=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ue(a,1-l),new ue(c,1-u),new ue(d,1-f),new ue(g,1-x)]:[new ue(o,1-l),new ue(h,1-u),new ue(m,1-f),new ue(p,1-x)]}},Et=class n extends is{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},To=class n extends is{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ss=class n extends rt{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),m=new R,f=new ue;for(let g=0;g<=r;g++){for(let p=0;p<=i;p++){let x=s+p/i*a;m.x=u*Math.cos(x),m.y=u*Math.sin(x),l.push(m.x,m.y,m.z),c.push(0,0,1),f.x=(m.x/t+1)/2,f.y=(m.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let g=0;g<r;g++){let p=g*(i+1);for(let x=0;x<i;x++){let y=x+p,v=y,M=y+i+1,C=y+i+2,S=y+1;o.push(v,M,S),o.push(M,C,S)}}this.setIndex(o),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},xd=class n extends rt{constructor(e=new vi([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),m=d.shape,f=d.holes;yr.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,x=f.length;p<x;p++){let y=f[p];yr.isClockWise(y)===!0&&(f[p]=y.reverse())}let g=yr.triangulateShape(m,f);for(let p=0,x=f.length;p<x;p++){let y=f[p];m=m.concat(y)}for(let p=0,x=m.length;p<x;p++){let y=m[p];r.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let p=0,x=g.length;p<x;p++){let y=g[p],v=y[0]+u,M=y[1]+u,C=y[2]+u;i.push(v,M,C),l+=3}}this.setIndex(i),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(s,3)),this.setAttribute("uv",new Ue(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},Ne=class n extends rt{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,m=[],f=[],g=[],p=[];for(let x=0;x<=i;x++){let y=[],v=x/i,M=0;x===0&&a===0?M=.5/t:x===i&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){let S=C/t;u.x=-e*Math.cos(r+S*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(r+S*s)*Math.sin(a+v*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),p.push(S+M,1-v),y.push(c++)}h.push(y)}for(let x=0;x<i;x++)for(let y=0;y<t;y++){let v=h[x][y+1],M=h[x][y],C=h[x+1][y],S=h[x+1][y+1];(x!==0||a>0)&&m.push(v,M,S),(x!==i-1||l<Math.PI)&&m.push(M,C,S)}this.setIndex(m),this.setAttribute("position",new Ue(f,3)),this.setAttribute("normal",new Ue(g,3)),this.setAttribute("uv",new Ue(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},_d=class n extends is{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ii=class n extends rt{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new R,u=new R,d=new R;for(let m=0;m<=i;m++)for(let f=0;f<=r;f++){let g=f/r*s,p=m/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(g),u.y=(e+t*Math.cos(p))*Math.sin(g),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let f=1;f<=r;f++){let g=(r+1)*m+f-1,p=(r+1)*(m-1)+f-1,x=(r+1)*(m-1)+f,y=(r+1)*m+f;a.push(g,p,y),a.push(p,x,y)}this.setIndex(a),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},bd=class n extends rt{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new R,d=new R,m=new R,f=new R,g=new R,p=new R,x=new R;for(let v=0;v<=i;++v){let M=v/i*s*Math.PI*2;y(M,s,a,e,m),y(M+.01,s,a,e,f),p.subVectors(f,m),x.addVectors(f,m),g.crossVectors(p,x),x.crossVectors(g,p),g.normalize(),x.normalize();for(let C=0;C<=r;++C){let S=C/r*Math.PI*2,A=-t*Math.cos(S),z=t*Math.sin(S);u.x=m.x+(A*x.x+z*g.x),u.y=m.y+(A*x.y+z*g.y),u.z=m.z+(A*x.z+z*g.z),l.push(u.x,u.y,u.z),d.subVectors(u,m).normalize(),c.push(d.x,d.y,d.z),h.push(v/i),h.push(C/r)}}for(let v=1;v<=i;v++)for(let M=1;M<=r;M++){let C=(r+1)*(v-1)+(M-1),S=(r+1)*v+(M-1),A=(r+1)*v+M,z=(r+1)*(v-1)+M;o.push(C,S,z),o.push(S,A,z)}function y(v,M,C,S,A){let z=Math.cos(v),L=Math.sin(v),F=C/M*v,$=Math.cos(F);A.x=S*(2+$)*.5*z,A.y=S*(2+$)*L*.5,A.z=S*Math.sin(F)*.5}this.setIndex(o),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ed=class n extends rt{constructor(e=new Ec(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new ue,h=new R,u=[],d=[],m=[],f=[];function g(p){h=e.getPointAt(p/t,h);let x=a.normals[p],y=a.binormals[p];for(let v=0;v<=r;v++){let M=v/r*Math.PI*2,C=Math.sin(M),S=-Math.cos(M);l.x=S*x.x+C*y.x,l.y=S*x.y+C*y.y,l.z=S*x.z+C*y.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let p=0;p<t;p++)g(p);g(s===!1?t:0),function(){for(let p=0;p<=t;p++)for(let x=0;x<=r;x++)c.x=p/t,c.y=x/r,m.push(c.x,c.y)}(),function(){for(let p=1;p<=t;p++)for(let x=1;x<=r;x++){let y=(r+1)*(p-1)+(x-1),v=(r+1)*p+(x-1),M=(r+1)*p+x,C=(r+1)*(p-1)+x;f.push(y,v,C),f.push(v,M,C)}}()})(),this.setIndex(f),this.setAttribute("position",new Ue(u,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new wc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Md=class extends rt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new R,s=new R;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let m=d,f=d+u.count;m<f;m+=3)for(let g=0;g<3;g++){let p=o.getX(m+g),x=o.getX(m+(g+1)%3);r.fromBufferAttribute(a,p),s.fromBufferAttribute(a,x),y0(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),y0(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ue(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function y0(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var Db=Object.freeze({__proto__:null,BoxGeometry:fe,CapsuleGeometry:br,CircleGeometry:Un,ConeGeometry:bn,CylinderGeometry:Ae,DodecahedronGeometry:fd,EdgesGeometry:gd,ExtrudeGeometry:Wi,IcosahedronGeometry:Et,LatheGeometry:Sc,OctahedronGeometry:To,PlaneGeometry:at,PolyhedronGeometry:is,RingGeometry:ss,ShapeGeometry:xd,SphereGeometry:Ne,TetrahedronGeometry:_d,TorusGeometry:ii,TorusKnotGeometry:bd,TubeGeometry:Ed,WireframeGeometry:Md});var $t=class extends gi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new we(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function Xl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function c_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ea=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(e>=s)break e;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wd=class extends Ea{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ff,endingEnd:ff}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case gf:s=e,o=2*t-i;break;case yf:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gf:a=e,l=2*i-t;break;case yf:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,f=(i-t)/(r-t),g=f*f,p=g*f,x=-d*p+2*d*g-d*f,y=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*f+1,v=(-1-m)*p+(1.5+m)*g+.5*f,M=m*p-m*g;for(let C=0;C!==o;++C)s[C]=x*a[h+C]+y*a[c+C]+v*a[l+C]+M*a[u+C];return s}},Sd=class extends Ea{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Td=class extends Ea{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Kn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xl(t,this.TimeBufferType),this.values=Xl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xl(e.times,Array),values:Xl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Td(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jl:t=this.InterpolantFactoryMethodDiscrete;break;case Kl:t=this.InterpolantFactoryMethodLinear;break;case ru:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jl;case this.InterpolantFactoryMethodLinear:return Kl;case this.InterpolantFactoryMethodSmooth:return ru}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&c_(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ru,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let m=0;m!==i;++m){let f=t[h+m];if(f!==t[u+m]||f!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Kn.prototype.TimeBufferType=Float32Array,Kn.prototype.ValueBufferType=Float32Array,Kn.prototype.DefaultInterpolation=Kl;var Yr=class extends Kn{};Yr.prototype.ValueTypeName="bool",Yr.prototype.ValueBufferType=Array,Yr.prototype.DefaultInterpolation=Jl,Yr.prototype.InterpolantFactoryMethodLinear=void 0,Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ad=class extends Kn{};Ad.prototype.ValueTypeName="color";var Rd=class extends Kn{};Rd.prototype.ValueTypeName="number";var Cd=class extends Ea{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)In.slerpFlat(s,0,a,c-o,a,c,l);return s}},mo=class extends Kn{InterpolantFactoryMethodLinear(e){return new Cd(this.times,this.values,this.getValueSize(),e)}};mo.prototype.ValueTypeName="quaternion",mo.prototype.DefaultInterpolation=Kl,mo.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends Kn{};Zr.prototype.ValueTypeName="string",Zr.prototype.ValueBufferType=Array,Zr.prototype.DefaultInterpolation=Jl,Zr.prototype.InterpolantFactoryMethodLinear=void 0,Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ld=class extends Kn{};Ld.prototype.ValueTypeName="vector";var Pd=class{constructor(e,t,i){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],f=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return f}return null}}},h_=new Pd,Id=class{constructor(e){this.manager=e!==void 0?e:h_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Id.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tc=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ao=class extends Tc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Du=new Fe,v0=new R,x0=new R,Fd=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;v0.setFromMatrixPosition(e.matrixWorld),t.position.copy(v0),x0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(x0),t.updateMatrixWorld(),Du.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ub=new Fe,Nb=new R,Bb=new R;var Dd=class extends Fd{constructor(){super(new hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ro=class extends Tc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Dd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ob=new Fe,kb=new Fe,zb=new Fe;var Ac=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=_0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function _0(){return(typeof performance=="undefined"?Date:performance).now()}var Hb=new R,Gb=new In,Vb=new R,$b=new R;var Wb=new R,qb=new In,jb=new R,Xb=new R;var Hd="\\[\\]\\.:\\/",u_=new RegExp("["+Hd+"]","g"),Uu="[^"+Hd+"]",d_="[^"+Hd.replace("\\.","")+"]",p_=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Uu)+/(WCOD+)?/.source.replace("WCOD",d_)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uu)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uu)+"$"),m_=["material","materials","bones","map"],pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u_,"")}static parseTrackName(e){let t=p_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);m_.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=class{constructor(n,e,t){let i=t||pt.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray],pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yb=new Float32Array(1);var Rc=class{constructor(e,t,i=0,r=1/0){this.ray=new ts(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Ud(e,this,i,t),i.sort(b0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ud(e[r],this,i,t);return i.sort(b0),i}};function b0(n,e){return n.distance-e.distance}function Ud(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let r=n.children;for(let s=0,a=r.length;s<a;s++)Ud(r[s],e,t,!0)}}var Zb=new ue;var Jb=new R,Kb=new R;var Qb=new R;var eE=new R,tE=new Fe,nE=new Fe;var iE=new R,rE=new we,sE=new we;var aE=new R,oE=new R,lE=new R;var cE=new R,hE=new yo;var uE=new ei;var dE=new R;typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nu}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nu);var xi=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),Vd=(()=>{try{return matchMedia("(prefers-reduced-motion: reduce)").matches||localStorage.getItem("family-lite")==="1"}catch{return!1}})(),Nn=(()=>{let n=new Uint8Array([150,150,150,255,215,215,215,255,255,255,255,255]),e=new fc(n,3,1,Pn);return e.minFilter=e.magFilter=Gt,e.needsUpdate=!0,e})(),Gd=new Map;function ft(n,e={}){let t=n+JSON.stringify(e);if(!e.unique&&Gd.has(t))return Gd.get(t);let i=new $t({color:n,gradientMap:Nn,...e});return delete i.unique,e.unique||Gd.set(t,i),i}function ee(n,e,t=0,i=0,r=0,s){let a=new de(n,typeof e=="string"||typeof e=="number"?ft(e,s):e);return a.position.set(t,i,r),a.castShadow=!0,a.receiveShadow=!0,a}function Wt(n,{w:e=512,h:t=256,bg:i="#FFF6E6",color:r="#4A3528",font:s="Jua",size:a=56,radius:o=40,border:l=null,sub:c=null,subSize:h=30,fit:u=0}={}){let d=document.createElement("canvas");d.width=e,d.height=t;let m=d.getContext("2d");i&&(m.fillStyle=i,ri(m,0,0,e,t,o),m.fill(),l&&(m.lineWidth=10,m.strokeStyle=l,ri(m,5,5,e-10,t-10,o-4),m.stroke())),m.fillStyle=r,m.textAlign="center",m.textBaseline="middle";let f=Array.isArray(n)?n:[n],g=()=>{m.font=`${s==="Jua"?"":"700 "}${a}px "${s}", sans-serif`};if(g(),u&&!Zt){let y=Math.max(...f.map(v=>m.measureText(v).width));y>u&&(a=Math.floor(a*u/y),g())}let p=f.length*a*1.25+(c?h*1.5:0),x=t/2-p/2+a*.62;for(let y of f)m.fillText(y,e/2,x),x+=a*1.25;return c&&(m.font=`${h}px "Gowun Dodum", sans-serif`,m.globalAlpha=.7,m.fillText(c,e/2,x+h*.2)),d}function ri(n,e,t,i,r,s){n.beginPath(),n.moveTo(e+s,t),n.arcTo(e+i,t,e+i,t+r,s),n.arcTo(e+i,t+r,e,t+r,s),n.arcTo(e,t+r,e,t,s),n.arcTo(e,t,e+i,t,s),n.closePath()}function ht(n){let e=new vc(n);return e.colorSpace=St,e.anisotropy=4,e}function Er(n,{scale:e=4.2,bg:t="rgba(255,248,236,.95)",color:i="#4A3528"}={}){let r=document.createElement("canvas");r.width=512,r.height=128;let s=r.getContext("2d"),a=56;for(s.font=`${a}px "Jua", sans-serif`;s.measureText(n).width>430&&a>(Zt?32:26);)a-=2,s.font=`${a}px "Jua", sans-serif`;let o=Math.min(490,s.measureText(n).width+70);s.fillStyle=t,s.shadowColor="rgba(110,70,40,.28)",s.shadowBlur=12,s.shadowOffsetY=4,ri(s,(512-o)/2,18,o,86,43),s.fill(),s.shadowColor="transparent",s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.fillText(n,256,63);let l=new Fn(new _n({map:ht(r),depthWrite:!1,transparent:!0}));return l.scale.set(e,e/4,1),l.renderOrder=10,l}var Ee=(n,e)=>n+Math.random()*(e-n),f_=(n,e,t)=>n+(e-n)*t,qi=(n,e,t,i)=>f_(n,e,1-Math.exp(-t*i)),os=(n,e,t)=>Math.max(e,Math.min(t,n));var $0=_([["short","\uC9E7\uC740 \uBA38\uB9AC"],["buzz","\uC544\uC8FC \uC9E7\uAC8C"],["bob","\uB2E8\uBC1C"],["long","\uAE34 \uBA38\uB9AC"],["ponytail","\uBB36\uC740 \uBA38\uB9AC"],["bun","\uC62C\uB9BC \uBA38\uB9AC"],["pigtails","\uC591\uAC08\uB798"],["curly","\uBF40\uAE00 \uD30C\uB9C8"]],[["short","Short"],["buzz","Buzz cut"],["bob","Bob"],["long","Long"],["ponytail","Ponytail"],["bun","Bun"],["pigtails","Pigtails"],["curly","Curly"]]);function wa({type:n="player",outfit:e="#8FB8DE",hair:t="#5A3A2A",skin:i="#FFE0C7",longHair:r=!1,hairStyle:s="",gender:a="",age:o="",glasses:l=!1,hat:c="",kid:h=!1,shadows:u=!0}={}){let d=s||(r?"long":"short");o==="kid"&&(h=!0);let m=new ye,f=new ye;m.add(f),h?f.scale.setScalar(.8):o==="teen"?f.scale.setScalar(.9):o==="senior"&&(f.rotation.x=.07);let g=e,p="#6B5B53",x=new br(.1,.28,4,8),y=new Ne(.13,12,8),v=[];for(let O of[-1,1]){let I=new ye;I.position.set(.14*O,.56,0);let V=ee(x,p,0,-.26,0),D=ee(y,"#4A3B38",0,-.47,.04);D.scale.set(1,.6,1.35),I.add(V,D),f.add(I),v.push(I)}let M=ee(new br(.3,.3,6,14),g,0,.86,0);M.scale.set(1,1,.85),f.add(M);let C=new br(.075,.3,4,8),S=new Ne(.085,10,8),A=[];for(let O of[-1,1]){let I=new ye;I.position.set(.36*O,1.08,0);let V=ee(C,g,.02*O,-.2,0),D=ee(S,i,.03*O,-.42,0);I.add(V,D),I.rotation.z=.12*O,f.add(I),A.push(I)}let z=new ye;z.position.y=1.5,f.add(z);let L=ee(new Ne(.42,24,18),i,0,0,0);z.add(L);let F=ft(t),$=(O,I,V,D,H=1,q=1,K=1)=>{let ie=new de(O,F);return ie.position.set(I,V,D),ie.scale.set(H,q,K),ie.castShadow=!0,z.add(ie),ie},b=new de(new Ne(d==="buzz"?.43:.45,24,16,0,Math.PI*2,0,Math.PI*(d==="buzz"?.46:.52)),F);if(b.rotation.x=-.35,b.position.set(0,.03,-.03),b.castShadow=!0,z.add(b),d!=="buzz"){let O=$(new Ne(.2,12,8),.1,.26,.27,1.5,.55,.8);O.rotation.z=-.3}let P=O=>new Ne(O,12,10);if(d==="long")$(new Ne(.42,16,12),0,-.22,-.18,1.05,1.25,.7);else if(d==="bob")$(new Ne(.44,16,12),0,-.06,-.1,1.08,.82,.86);else if(d==="ponytail"){$(P(.17),0,.12,-.46,1,1,1),$(new br(.11,.26,4,8),0,-.14,-.5,1,1,.9).rotation.x=.25;let O=ee(new ii(.1,.03,6,12),e,0,.04,-.47);O.rotation.x=.4,z.add(O)}else if(d==="bun"){let O=c==="cap"||c==="beanie";$(P(.2),0,O?.02:.42,O?-.46:-.2);let I=ee(new ii(.15,.03,6,14),e,0,O?.02:.32,O?-.36:-.17);I.rotation.x=O?0:Math.PI/2-.5,z.add(I)}else if(d==="pigtails")for(let O of[-1,1])$(P(.15),.42*O,-.08,-.12,.9,1.15,.9),z.add(ee(new Ne(.05,8,6),e,.38*O,.06,-.1));else if(d==="curly"){let O=P(.13);for(let I=0;I<9;I++){let V=I/9*Math.PI*2;$(O,Math.cos(V)*.38,.18+Math.sin(V*2)*.03,Math.sin(V)*.38-.06)}c!=="cap"&&c!=="beanie"&&$(P(.2),0,.4,-.04,1.4,.8,1.3)}let N=new Ne(.05,10,8),k=new ze({color:"#2B2220"}),J=[];for(let O of[-1,1]){let I=new de(N,k);I.position.set(.14*O,.02,.38),I.scale.set(1,1.3,.6),z.add(I),J.push(I);let V=new de(new Ne(.016,6,4),new ze({color:"#fff"}));V.position.set(.14*O+.018,.05,.415),z.add(V);let D=new de(new Un(.07,14),new ze({color:"#FFB3B3",transparent:!0,opacity:.7}));D.position.set(.24*O,-.09,.345),D.rotation.y=.55*O,z.add(D)}if(a==="f")for(let O of[-1,1]){let I=new de(new fe(.05,.014,.01),k);I.position.set(.2*O,.085,.37),I.rotation.z=.5*O,z.add(I)}let X=new de(new ii(.045,.012,6,12,Math.PI),k);if(X.position.set(0,-.1,.39),X.rotation.z=Math.PI,z.add(X),l){let O=ft("#4A3B38"),I=new ii(.085,.014,6,18);for(let D of[-1,1]){let H=new de(I,O);H.position.set(.14*D,.03,.4),z.add(H)}let V=new de(new fe(.1,.018,.018),O);V.position.set(0,.05,.42),z.add(V)}let j=new ye;z.add(j);function Y(O){if(j.clear(),O==="cap"){let I=new de(new Ne(.46,20,12,0,Math.PI*2,0,Math.PI*.42),ft(e==="#FFFFFF"?"#8FB8DE":e));I.position.y=.06,I.rotation.x=-.12;let V=ee(new Ae(.26,.26,.03,16,1,!1,-Math.PI/2,Math.PI),e,0,.2,.3);V.rotation.x=.12,j.add(I,V)}else if(O==="beanie"){let I=new de(new Ne(.47,20,12,0,Math.PI*2,0,Math.PI*.45),ft("#E88A98"));I.position.y=.06;let V=ee(new ii(.43,.06,8,24),"#FFFDF8",0,.18,0);V.rotation.x=Math.PI/2;let D=ee(new Ne(.1,10,8),"#FFFDF8",0,.55,0);j.add(I,V,D)}else if(O==="flower")["#F4B8C0","#FFFFFF","#F7D58B"].forEach((I,V)=>j.add(ee(new Et(.075,0),I,.3+V*.05,.3-V*.08,.12-V*.06))),j.add(ee(new Ne(.03,6,4),"#E2B865",.31,.3,.16));else if(O==="party"){let I=ee(new bn(.2,.46,14),"#F7D58B",.08,.6,0);I.rotation.z=-.25;let V=ee(new Ne(.07,8,6),"#E88A98",.2,.84,0);j.add(I,V)}}Y(c),m.traverse(O=>{O.isMesh&&O.material!==k&&(O.castShadow=u)});let G=0,Z=2+Math.random()*3,ce=0,w=0,E=A[1].rotation.clone(),B={root:m,body:f,head:z,arms:A,legs:v,type:n};return B.animate=(O,I=0,V=0)=>{let D=Math.min(1,I);G+=O*(4+7*D);let H=Math.sin(G)*.75*D;if(v[0].rotation.x=H,v[1].rotation.x=-H,A[0].rotation.x=-H*.8,A[1].rotation.x=H*.8,f.position.y=Math.abs(Math.sin(G))*.07*D+Math.sin(V*2)*.012,f.rotation.z=Math.sin(G)*.04*D,z.rotation.z=Math.sin(V*1.3)*.04,n==="player"){w=D<.05?w+O:0;let K=w>4?Math.sin(V*.8)*.45:0;z.rotation.y+=(K-z.rotation.y)*Math.min(1,O*4)}Z-=O;let q=Z<.12?.15:1;if(J.forEach(K=>K.scale.y=1.3*q),Z<0&&(Z=2+Math.random()*3),ce>0){ce-=O;let K=A[1];K.rotation.z=-2.5+Math.sin(V*14)*.35,K.rotation.x=0,ce<=0&&K.rotation.copy(E)}},B.wave=(O=1.6)=>{ce=O},B.setParty=O=>Y(O?"party":c),B}var{esc:Se,avatarHTML:ls,toast:Mt,confetti:j0,onData:Co,openView:si,closeModal:Uc,replyView:g_,paintStatus:y_}=$s,W0=window.FAMILY,Wd=(n,e)=>{try{dispatchEvent(new CustomEvent(n,{detail:e}))}catch{}},X0=n=>{let[e,t]=String(n).split("-").map(Number);return _(`${e}\uC6D4 ${t}\uC77C`,`${Ts[e-1]} ${t}`)},v_=["January","February","March","April","May","June","July","August","September","October","November","December"],Sa=(n,e,t)=>`${n} ${n===1?e:t}`,x_=n=>{let e=Be(),t=`${e.slice(0,4)}-${n}`;return t<e&&(t=`${+e.slice(0,4)+1}-${n}`),Vn(e,t)},pn={onSent:null,takePhoto:null};function qd({hero:n=!0}={}){return{html:'<div class="fam-box"></div>',mount:t=>{let i=t.querySelector(".fam-box"),r=()=>{var c,h;if(!i.isConnected)return;let s=rl(),a=ir(),o=Fs(3),l=Is();i.innerHTML=`
        ${n?`<div class="inv-hero">
          <div class="en">FAMILY VILLAGE</div>
          <div class="names">${Se(Bt())}</div>
          ${a>0?`<div class="muted">${_(`\uD568\uAED8\uD55C \uC9C0 <b style="color:var(--rose-deep)">${a.toLocaleString(_("ko-KR","en-US"))}\uC77C\uC9F8</b>`,`Together for <b style="color:var(--rose-deep)">${a.toLocaleString(_("ko-KR","en-US"))} days</b>`)}</div>`:""}
        </div>`:""}
        ${l.length?`<div class="bday-banner">${_(`\u{1F382} \uC624\uB298\uC740 <b>${l.map(u=>Se(u.nick||u.role||u.name)).join(", ")}</b> \uC0DD\uC77C\uC774\uC5D0\uC694!`,`\u{1F382} Happy birthday, <b>${nl(l.map(u=>Se(u.nick||u.role||u.name)))}</b>!`)} <button class="btn small pink f-bday" type="button">${_("\uCD95\uD558 \uD3B8\uC9C0 \uC4F0\uAE30","Write a birthday letter")}</button></div>`:""}
        ${W0.greeting?`<p class="inv-greet">${Se(W0.greeting)}</p>`:""}
        <div class="card">
          <b>${_("\u{1F463} \uC624\uB298 \uB2E4\uB140\uAC04 \uAC00\uC871","\u{1F463} Family who stopped by today")}</b>
          <div class="chips-row">${s.length?s.map(u=>`<span class="who-chip" style="--c:${Se(u.look.outfit)}">${Se(u.nick||u.role||u.name)}</span>`).join(""):`<span class="muted">${_("\uC544\uC9C1 \uC544\uBB34\uB3C4 \uC548 \uC654\uC5B4\uC694","No one yet")}</span>`}</div>
          ${_t()?`<p class="muted" style="margin:8px 0 0">${_(`\uB0B4 \uCD9C\uC11D \uB3C4\uC7A5 <b>${Ih()}\uAC1C</b> \u{1F43E}`,`My visit stamps: <b>${Ih()}</b> \u{1F43E}`)}</p>`:""}
        </div>
        <div class="mem-grid">
          ${Ot().map(u=>`
            <button type="button" class="mem-card" data-id="${Se(u.id)}">
              ${ls(u.look)}
              <b>${Se(u.nick||u.role||u.name)}${u.id===be()?_(" <small>(\uB098)</small>"," <small>(me)</small>"):""}</b>
              <small>${Se(u.name)}${u.birthday?` \xB7 \u{1F382} ${X0(u.birthday)}`:""}</small>
              <span class="mem-heart">\u{1F497} ${Ns(u.id).length}</span>
            </button>`).join("")}
        </div>
        ${o.length?`<div class="card"><b>${_("\u{1F4C5} \uB2E4\uAC00\uC624\uB294 \uB0A0","\u{1F4C5} Coming up")}</b>${o.map(u=>`<div class="up-row"><span>${u.emoji||"\u{1F4CC}"} ${Se(u.title)}</span><span class="dd">${tl(u.dday)}</span></div>`).join("")}
          <button class="btn small f-cal" type="button" style="margin-top:8px">${_("\uB2EC\uB825 \uBCF4\uAE30","Open the calendar")}</button></div>`:""}
        <div class="btns">
          <button class="btn pink f-q" type="button">${_("\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38","\u{1F4AC} Question of the day")}</button>
          <button class="btn f-mail" type="button">${_("\u2709\uFE0F \uD3B8\uC9C0 \uC4F0\uAE30","\u2709\uFE0F Write a letter")}</button>
          <button class="btn f-share" type="button">${_("\u{1F517} \uB9C8\uC744 \uC8FC\uC18C \uBCF4\uB0B4\uAE30","\u{1F517} Share the village link")}</button>
        </div>
        <p class="muted l-status" role="status" hidden></p>`,i.querySelectorAll(".mem-card").forEach(u=>u.onclick=()=>{Ze(8),Ta(u.dataset.id)}),i.querySelector(".f-q").onclick=()=>cs(),i.querySelector(".f-mail").onclick=()=>qn(pn.onSent),i.querySelector(".f-share").onclick=Ja,(c=i.querySelector(".f-cal"))==null||c.addEventListener("click",()=>Lo()),(h=i.querySelector(".f-bday"))==null||h.addEventListener("click",()=>{var u;return qn(pn.onSent,{to:((u=l.find(d=>d.id!==be()))==null?void 0:u.id)||l[0].id})}),y_(i.querySelector(".l-status"))};return r(),An(),Co(r)}}}function Nc(){si(Bt(),qd())}function jd(n){if(!_t())return Mt(_("\uD558\uD2B8\uB294 \uAC00\uC871\uB9CC \uBCF4\uB0BC \uC218 \uC788\uC5B4\uC694","Only family members can send hearts")),!1;if(n===be())return Mt(_("\uB098\uC5D0\uAC8C\uB294 \uD558\uD2B8\uB97C \uBCF4\uB0BC \uC218 \uC5C6\uC5B4\uC694 \u{1F606}","You can't send a heart to yourself \u{1F606}")),!1;if(il(n))return Mt(_(`\uC624\uB298\uC740 \uC774\uBBF8 ${xt(n)}\uC5D0\uAC8C \uD558\uD2B8\uB97C \uBCF4\uB0C8\uC5B4\uC694 \u{1F497}`,`You already sent ${xt(n)} a heart today \u{1F497}`)),!1;let e=Be();return nn("hearts",{id:`${be()}-${n}-${e}`,who:be(),to:n,day:e}),Wd("family:heart",{to:n}),Ze(15),et.sfx("heart"),Mt(_(`\u{1F497} ${xt(n)}\uC5D0\uAC8C \uD558\uD2B8\uB97C \uBCF4\uB0C8\uC5B4\uC694`,`\u{1F497} Heart sent to ${xt(n)}`)),!0}function __(n){return{html:'<div class="mem-box"></div>',mount:t=>{let i=t.querySelector(".mem-box"),r=()=>{var f,g,p,x,y;let s=kt(n);if(!s||!i.isConnected)return;let a=s.id===be(),o=Be(),l=s.birthday?x_(s.birthday):null,c=Ii(o).find(v=>v.who===s.id),h=Us(),u=!!Lh(o)||a,d=lt("letters").filter(v=>v.who===s.id&&!Di(v)).slice(0,2),m=a?di().length:0;i.innerHTML=`
        <div class="mem-hero" style="--c:${Se(s.look.outfit)}">
          ${ls(s.look,"big")}
          <div class="names">${Se(s.name)}</div>
          <div class="muted">${Se(s.role||"")}${s.birthday?` \xB7 \u{1F382} ${X0(s.birthday)}${l===0?` <b style="color:var(--rose-deep)">${_("\uC624\uB298!","Today")}</b>`:_(` (D-${l})`,` (${Ds(l).toLowerCase()})`)}`:""}</div>
          ${s.line?`<p class="mem-line">\u201C${Se(s.line)}\u201D</p>`:""}
        </div>
        ${l===0?`<div class="bday-banner">${_(`\u{1F382} \uC624\uB298\uC740 ${Se(s.nick||s.role||s.name)} \uC0DD\uC77C\uC774\uC5D0\uC694!`,`\u{1F382} Happy birthday, ${Se(s.nick||s.role||s.name)}!`)}</div>`:""}
        <div class="stat-row">
          <div><b>\u{1F497} ${Ns(s.id).length}</b><small>${_(`\uBC1B\uC740 \uD558\uD2B8 (\uC624\uB298 ${Ph(s.id).length})`,`Hearts received (${Ph(s.id).length} today)`)}</small></div>
          <div><b>\u{1F463} ${new Set(lt("visits").filter(v=>v.who===s.id).map(v=>v.day)).size}</b><small>${_("\uCD9C\uC11D \uB3C4\uC7A5","Visit stamps")}</small></div>
          <div><b>\u{1F4A7} ${lt("water").filter(v=>v.who===s.id).length}</b><small>${_("\uB098\uBB34\uC5D0 \uC900 \uBB3C","Tree waterings")}</small></div>
        </div>
        <div class="btns">
          ${a?`
            <button class="btn pink m-look" type="button">${_("\u{1F3A8} \uB0B4 \uCE90\uB9AD\uD130 \uAFB8\uBBF8\uAE30","\u{1F3A8} Customize my character")}</button>
            <button class="btn m-inbox" type="button">${_("\u{1F48C} \uB098\uC5D0\uAC8C \uC628 \uD3B8\uC9C0","\u{1F48C} Letters for me")}${m?` <b class="badge">${m}</b>`:""}</button>`:`
            <button class="btn pink m-heart" type="button" ${il(s.id)?"disabled":""}>${il(s.id)?_("\u{1F497} \uC624\uB298 \uD558\uD2B8 \uBCF4\uB0C4","\u{1F497} Heart sent today"):_("\u{1F497} \uD558\uD2B8 \uBCF4\uB0B4\uAE30","\u{1F497} Send a heart")}</button>
            <button class="btn m-mail" type="button">${_("\u2709\uFE0F \uD3B8\uC9C0 \uC4F0\uAE30","\u2709\uFE0F Write a letter")}</button>
            ${s.phone?`<a class="btn small" href="tel:${Se(s.phone)}">\u{1F4DE}</a><a class="btn small" href="sms:${Se(s.phone)}">\u{1F4AC}</a>`:""}`}
        </div>
        ${h?`<div class="card"><b>${_("\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38","\u{1F4AC} Question of the day")}</b><p class="muted" style="margin:6px 0">${Se(h.q)}</p>
          ${c?u?`<p class="ans-text">${Se(c.text)}</p>`:`<p class="muted">${_("\u{1F512} \uB098\uB3C4 \uB2F5\uD558\uBA74 \uBCFC \uC218 \uC788\uC5B4\uC694","\u{1F512} Answer it too to see this")}</p>`:`<p class="muted">${_("\uC544\uC9C1 \uB2F5\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694","No answer yet")}</p>`}
          <button class="btn small m-q" type="button">${_("\uB2F5\uD558\uB7EC \uAC00\uAE30","Go answer it")}</button></div>`:""}
        ${d.length?`<div class="card"><b>${_(`\u2709\uFE0F ${Se(s.nick||s.role||s.name)}\uC758 \uCD5C\uADFC \uD3B8\uC9C0`,`\u2709\uFE0F Recent letters from ${Se(s.nick||s.role||s.name)}`)}</b>${d.map((v,M)=>`<button type="button" class="up-row linkrow" data-i="${M}"><span>${Se(String(v.message).split(`
`)[0].slice(0,26))}</span><span class="muted">${$n(v.time)}</span></button>`).join("")}</div>`:""}`,(f=i.querySelector(".m-heart"))==null||f.addEventListener("click",()=>{jd(s.id)&&r()}),(g=i.querySelector(".m-mail"))==null||g.addEventListener("click",()=>qn(pn.onSent,{to:s.id})),(p=i.querySelector(".m-look"))==null||p.addEventListener("click",()=>kc()),(x=i.querySelector(".m-inbox"))==null||x.addEventListener("click",()=>qn(pn.onSent,{filter:"me"})),(y=i.querySelector(".m-q"))==null||y.addEventListener("click",()=>cs()),i.querySelectorAll(".linkrow").forEach(v=>v.onclick=()=>Xa(d,+v.dataset.i,()=>Ta(n)))};return r(),Co(r)}}}function Ta(n){let e=kt(n);si(e?e.id===be()?_("\u{1F3E0} \uB0B4 \uC9D1","\u{1F3E0} My house"):_(`${e.emoji||"\u{1F3E0}"} ${e.nick||e.role||e.name}\uB124 \uC9D1`,`${e.emoji||"\u{1F3E0}"} ${e.nick||e.role||e.name}'s house`):_("\uC6B0\uB9AC \uAC00\uC871","Our family"),__(n))}function Xd(n=Be(),{embedded:e=!1}={}){return{html:'<div class="q-box"></div>',mount:i=>{let r=i.querySelector(".q-box"),s=[],a=()=>{var f;if(!r.isConnected)return;s.splice(0).forEach(g=>g());let l=Us(n);if(!l){r.innerHTML=`<p class="muted">${_("config.js\uC5D0 \uC9C8\uBB38\uC774 \uC5C6\uC5B4\uC694","There are no questions in config.js")}</p>`;return}let c=Ii(n),h=Lh(n),u=n===Be(),d=c.filter(g=>g.who!==be());r.innerHTML=`
        <div class="q-hero">
          <div class="muted">${u?_(`\uC624\uB298\uC758 \uC9C8\uBB38 \xB7 ${It(n)}`,`Question of the day \xB7 ${It(n)}`):_(`${It(n)}\uC758 \uC9C8\uBB38`,`Question for ${It(n)}`)}</div>
          <div class="q-text">${Se(l.q)}</div>
          <div class="muted">${c.length?_(`${c.length}\uBA85\uC774 \uB2F5\uD588\uC5B4\uC694`,`${Sa(c.length,"answer","answers")} so far`):_("\uC544\uC9C1 \uC544\uBB34\uB3C4 \uB2F5\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694","No one has answered yet")}</div>
        </div>
        ${_t()?`
          <form class="q-form" autocomplete="off" ${h?"hidden":""}>
            <textarea class="field q-in" maxlength="300" placeholder="${_("\uB098\uC758 \uB2F5\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694 (300\uC790)","Write your answer (up to 300 characters)")}" aria-label="${_("\uB098\uC758 \uB2F5","My answer")}">${h?Se(h.text):""}</textarea>
            <button class="btn pink" type="submit" style="width:100%;margin-top:8px">${h?_("\u270F\uFE0F \uACE0\uCE5C \uB2F5 \uC62C\uB9AC\uAE30","\u270F\uFE0F Post my edited answer"):_("\u{1F4AC} \uB2F5\uD558\uACE0 \uAC00\uC871 \uB2F5 \uBCF4\uAE30","\u{1F4AC} Answer and see the family's answers")}</button>
          </form>`:`<p class="muted center">${_("\u{1F64B} \uB2F5\uC740 \uAC00\uC871\uB9CC \uB0A8\uAE38 \uC218 \uC788\uC5B4\uC694. \uBA54\uB274\uC758 '\uB098\uB294 \uB204\uAD6C?'\uC5D0\uC11C \uB098\uB97C \uACE8\uB77C \uC8FC\uC138\uC694","\u{1F64B} Only family members can answer. Pick yourself under 'Who am I?' in the menu")}</p>`}
        <div class="ans-list">
          ${h?q0(h,!0):""}
          ${h?d.map(g=>q0(g)).join(""):d.map(g=>{var p,x;return`<div class="ans-card locked" style="--c:${Se(((p=kt(g.who))==null?void 0:p.look.outfit)||"#E6D5C6")}">${ls(((x=kt(g.who))==null?void 0:x.look)||{},"mini")}<b>${Se(xt(g.who)||g.name)}</b><span class="muted">${_("\u{1F512} \uB2F5\uD558\uBA74 \uC5F4\uB824\uC694","\u{1F512} Opens when you answer")}</span></div>`}).join("")}
        </div>
        ${e?"":`<div class="divider"></div><b>${_("\u{1F5D3}\uFE0F \uC9C0\uB09C \uC9C8\uBB38","\u{1F5D3}\uFE0F Past questions")}</b><div class="past-q">${_m(14).filter(g=>g.day!==n).map(g=>`<button type="button" class="up-row linkrow" data-day="${g.day}"><span>${Se(g.q)}</span><span class="muted">${It(g.day,!1)} \xB7 ${_(`${g.answers.length}\uBA85`,Sa(g.answers.length,"answer","answers"))}</span></button>`).join("")}</div>`}`;let m=r.querySelector(".q-form");m&&(m.onsubmit=async g=>{g.preventDefault();let p=m.querySelector(".q-in").value.trim();if(!p){Mt(_("\uB2F5\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694","Please write your answer"));return}let x=await nn("answers",{id:`${be()}-${n}`,who:be(),name:Rn(be()),day:n,q:l.idx,text:p});Mt(x.ok?h?_("\u270F\uFE0F \uB2F5\uC744 \uACE0\uCCE4\uC5B4\uC694","\u270F\uFE0F Answer updated"):_("\u{1F4AC} \uB2F5\uD588\uC5B4\uC694! \uAC00\uC871\uC758 \uB2F5\uC774 \uC5F4\uB838\uC5B4\uC694","\u{1F4AC} Answered. Your family's answers are open now"):_("\uD734\uB300\uD3F0\uC5D0 \uBCF4\uAD00\uD588\uC5B4\uC694. \uC5F0\uACB0\uB418\uBA74 \uC790\uB3D9\uC73C\uB85C \uC62C\uB9B4\uAC8C\uC694","Saved on your phone. It will be posted automatically once you're connected"),2600),h||(j0(["\u{1F4AC}","\u{1F497}","\u2728"]),et.sfx("tada")),a()}),(f=r.querySelector(".a-edit"))==null||f.addEventListener("click",()=>{var g;m.hidden=!1,(g=r.querySelector(".ans-card.me"))==null||g.remove(),m.querySelector(".q-in").focus()}),r.querySelectorAll(".past-q .linkrow").forEach(g=>g.onclick=()=>cs(g.dataset.day)),h&&r.querySelectorAll(".ans-card[data-id]").forEach(g=>{let p=g_(g.dataset.id,{compact:!0});g.insertAdjacentHTML("beforeend",p.html),s.push(p.mount(g))})};a(),An();let o=Co(a);return()=>{o(),s.forEach(l=>l())}}}}function q0(n,e=!1){let t=kt(n.who);return`<div class="ans-card${e?" me":""}" data-id="${Se(n.id)}" style="--c:${Se((t==null?void 0:t.look.outfit)||"#E6D5C6")}">
    <div class="ans-top">${ls((t==null?void 0:t.look)||{},"mini")}<b>${Se(t?t.nick||t.role||t.name:n.name)}${e?_(" (\uB098)"," (me)"):""}</b><small class="muted">${$n(n.time)}</small>${e?`<button type="button" class="linklike a-edit">${_("\uACE0\uCE58\uAE30","Edit")}</button>`:""}</div>
    <p class="ans-text">${Se(n.text)}</p>
  </div>`}function cs(n=Be()){si(_("\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38","\u{1F4AC} Question of the day"),Xd(n))}function b_(n){let e=n.key.replace(/-/g,""),t=gn(n.key,1).replace(/-/g,""),i=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//family-village//KO","BEGIN:VEVENT",`UID:${e}-${encodeURIComponent(n.title).slice(0,30)}@family-village`,`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"")}`,`DTSTART;VALUE=DATE:${e}`,`DTEND;VALUE=DATE:${t}`,...n.yearly?["RRULE:FREQ=YEARLY"]:[],`SUMMARY:${n.title}`,...n.note?[`DESCRIPTION:${n.note}`]:[],"END:VEVENT","END:VCALENDAR"].join(`\r
`),r=document.createElement("a");r.href=URL.createObjectURL(new Blob([i],{type:"text/calendar"})),r.download="family-day.ics",r.click(),Mt(_("\u{1F4C5} \uCE98\uB9B0\uB354 \uD30C\uC77C\uC744 \uC5F4\uC5B4 \uC800\uC7A5\uD574 \uC8FC\uC138\uC694","\u{1F4C5} Open the calendar file to save the date"))}function Yd(){return{html:'<div class="cal-box"></div>',mount:e=>{let t=e.querySelector(".cal-box"),i=Be(),r=+i.slice(0,4),s=+i.slice(5,7),a=i,o=()=>{let l=vm(r,s),c=new Date(Date.UTC(r,s-1,1)).getUTCDay(),h=new Date(Date.UTC(r,s,0)).getUTCDate(),u="<tr>"+"<td></td>".repeat(c);for(let f=1;f<=h;f++){let g=`${r}-${String(s).padStart(2,"0")}-${String(f).padStart(2,"0")}`,p=(c+f-1)%7,x=l[g];u+=`<td class="${p===0?"sun":""}${g===i?" today":""}${g===a?" pick":""}"><button type="button" data-k="${g}">${f}${x?`<i>${x[0].emoji||"\u2022"}</i>`:""}</button></td>`,p===6&&f!==h&&(u+="</tr><tr>")}u+="</tr>";let d=l[a]||[],m=Fs(8);t.innerHTML=`
        <div class="cal-nav"><button class="btn small c-prev" type="button" aria-label="${_("\uC774\uC804 \uB2EC","Previous month")}">\u2039</button><b>${_(`${r}\uB144 ${s}\uC6D4`,`${v_[s-1]} ${r}`)}</b><button class="btn small c-next" type="button" aria-label="${_("\uB2E4\uC74C \uB2EC","Next month")}">\u203A</button></div>
        <table class="cal fam-cal"><tr>${_(["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]).map((f,g)=>`<th class="${g===0?"sun":""}">${f}</th>`).join("")}</tr>${u}</table>
        <div class="card">${d.length?d.map(f=>`<div class="up-row"><span>${f.emoji||"\u{1F4CC}"} ${Se(f.title)}</span>${f.note?`<small class="muted">${Se(f.note)}</small>`:""}</div>`).join(""):`<span class="muted">${_(`${It(a)} \xB7 \uD2B9\uBCC4\uD55C \uB0A0\uC774 \uC5C6\uC5B4\uC694`,`${It(a)} \xB7 Nothing planned`)}</span>`}</div>
        <b>${_("\u23F0 \uB2E4\uAC00\uC624\uB294 \uB0A0","\u23F0 Coming up")}</b>
        <div class="ups">${m.map((f,g)=>`<div class="up-row"><span>${f.emoji||"\u{1F4CC}"} ${Se(f.title)}<small class="muted"> \xB7 ${It(f.key)}${f.note?` \xB7 ${Se(f.note)}`:""}</small></span><span class="dd">${tl(f.dday)}</span><button type="button" class="linklike c-ics" data-i="${g}">${_("\uCE98\uB9B0\uB354\uC5D0","\uFF0B Calendar")}</button></div>`).join("")||`<p class="muted">${_("config.js\uC758 events\uC5D0 \uB0A0\uC9DC\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694","Add dates to events in config.js")}</p>`}</div>`,t.querySelector(".c-prev").onclick=()=>{s--,s<1&&(s=12,r--),o()},t.querySelector(".c-next").onclick=()=>{s++,s>12&&(s=1,r++),o()},t.querySelectorAll(".fam-cal button").forEach(f=>f.onclick=()=>{a=f.dataset.k,Ze(6),o()}),t.querySelectorAll(".c-ics").forEach(f=>f.onclick=()=>b_(m[+f.dataset.i]))};o()}}}function Lo(){si(_("\u{1F4C5} \uAC00\uC871 \uB2EC\uB825","\u{1F4C5} Family calendar"),Yd())}function Zd(){return{html:'<div class="poll-box"></div>',mount:e=>{let t=e.querySelector(".poll-box"),i=!1,r=()=>{var o,l;if(!t.isConnected)return;let s=Sm();t.innerHTML=`
        <p class="muted">${_("\uAC00\uC871 \uC77C\uC740 \uB2E4 \uAC19\uC774 \uC815\uD574\uC694. \uB9C8\uC74C\uC774 \uBC14\uB00C\uBA74 \uB2E4\uC2DC \uB20C\uB7EC\uB3C4 \uB3FC\uC694 \u{1F5F3}\uFE0F","We decide family things together. Changed your mind? Just tap again \u{1F5F3}\uFE0F")}</p>
        ${s.map((c,h)=>{let u=Dh(c.id),d=u.size,m=u.get(be()),f=c.cfg?"":`<small class="muted"> \xB7 ${_(`${Se(xt(c.who)||c.name)}\uAC00 \uB9CC\uB4E0 \uD22C\uD45C`,`poll by ${Se(xt(c.who)||c.name)}`)}</small>`;return`<div class="card poll" data-p="${h}"><b>${Se(c.q)}</b>${f}
            ${c.options.map((g,p)=>{let x=[...u.entries()].filter(([,v])=>v===p).map(([v])=>v),y=d?Math.round(x.length/d*100):0;return`<button type="button" class="poll-opt${m===p?" on":""}" data-k="${p}" ${_t()?"":"disabled"}>
                <span class="bar" style="width:${y}%"></span><span class="txt">${Se(g)}</span><span class="cnt">${x.length?_(`${x.length}\uD45C`,Sa(x.length,"vote","votes")):""}</span>
                ${x.length?`<span class="voters">${x.map(v=>{var M;return`<i style="--c:${Se(((M=kt(v))==null?void 0:M.look.outfit)||"#ccc")}">${Se(xt(v))}</i>`}).join("")}</span>`:""}
              </button>`}).join("")}
            <small class="muted">${d?_(`${d}\uBA85 \uCC38\uC5EC`,`${d} voted`):_("\uC544\uC9C1 \uC544\uBB34\uB3C4 \uC548 \uD588\uC5B4\uC694","No votes yet")}</small></div>`}).join("")}
        ${_t()?i?`
          <form class="card poll-new" autocomplete="off">
            <b>${_("\uFF0B \uC0C8 \uD22C\uD45C","\uFF0B New poll")}</b>
            <input class="field pn-q" maxlength="40" placeholder="${_("\uBB34\uC5C7\uC744 \uC815\uD560\uAE4C\uC694? (\uC608: \uC77C\uC694\uC77C \uC810\uC2EC \uBA54\uB274)","What should we decide? (e.g. Sunday lunch)")}" aria-label="${_("\uC9C8\uBB38","Question")}">
            ${[0,1,2,3].map(c=>`<input class="field pn-o" maxlength="20" placeholder="${_(`\uBCF4\uAE30 ${c+1}${c>1?" (\uC120\uD0DD)":""}`,`Option ${c+1}${c>1?" (optional)":""}`)}" aria-label="${_(`\uBCF4\uAE30 ${c+1}`,`Option ${c+1}`)}">`).join("")}
            <div class="btns"><button class="btn pink" type="submit">${_("\uD22C\uD45C \uB9CC\uB4E4\uAE30","Create poll")}</button><button class="btn pn-cancel" type="button">${_("\uCDE8\uC18C","Cancel")}</button></div>
          </form>`:`<button class="btn p-make" type="button" style="width:100%">${_("\uFF0B \uC0C8 \uD22C\uD45C \uB9CC\uB4E4\uAE30","\uFF0B Create a new poll")}</button>`:`<p class="muted center">${_("\u{1F64B} \uD22C\uD45C\uB294 \uAC00\uC871\uB9CC \uD560 \uC218 \uC788\uC5B4\uC694","\u{1F64B} Only family members can vote")}</p>`}`,t.querySelectorAll(".poll").forEach(c=>{let h=s[+c.dataset.p];c.querySelectorAll(".poll-opt").forEach(u=>u.onclick=async()=>{let d=+u.dataset.k;if(Dh(h.id).get(be())===d){Mt(_("\uC774\uBBF8 \uACE0\uB978 \uBCF4\uAE30\uC608\uC694","That's already your pick"));return}Ze(10),et.sfx("pop"),await nn("votes",{id:`${be()}-${h.id}`,who:be(),poll:h.id,choice:d}),Mt(_(`\u{1F5F3}\uFE0F '${h.options[d]}'\uC5D0 \uD55C \uD45C!`,`\u{1F5F3}\uFE0F You voted for '${h.options[d]}'`)),r()})}),(o=t.querySelector(".p-make"))==null||o.addEventListener("click",()=>{var c;i=!0,r(),(c=t.querySelector(".pn-q"))==null||c.focus()}),(l=t.querySelector(".pn-cancel"))==null||l.addEventListener("click",()=>{i=!1,r()});let a=t.querySelector(".poll-new");a&&(a.onsubmit=async c=>{c.preventDefault();let h=a.querySelector(".pn-q").value.trim(),u=[...a.querySelectorAll(".pn-o")].map(d=>d.value.trim().replace(/\|/g,"/")).filter(Boolean);if(!h||u.length<2){Mt(_("\uC9C8\uBB38\uACFC \uBCF4\uAE30 \uB450 \uAC1C \uC774\uC0C1\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694","Write a question and at least two options"));return}i=!1,await nn("polls",{who:be(),name:Rn(be()),q:h,options:u.join("|")}),Mt(_("\u{1F5F3}\uFE0F \uC0C8 \uD22C\uD45C\uB97C \uB9CC\uB4E4\uC5C8\uC5B4\uC694. \uAC00\uC871\uC5D0\uAC8C \uC54C\uB824 \uC8FC\uC138\uC694!","\u{1F5F3}\uFE0F New poll created. Let the family know")),r()})};return r(),An(),Co(r)}}}function Bc(){si(_("\u{1F5F3}\uFE0F \uAC00\uC871 \uD22C\uD45C\uD568","\u{1F5F3}\uFE0F Family polls"),Zd())}var E_=["\u{1F330}","\u{1F331}","\u{1F33F}","\u{1F333}","\u{1F338}","\u{1F34E}"];function M_(){if(!_t())return Mt(_("\uBB3C\uC740 \uAC00\uC871\uB9CC \uC904 \uC218 \uC788\uC5B4\uC694","Only family members can water the tree")),!1;let n=Fi();if(n.wateredToday)return Mt(_("\u{1F4A7} \uC624\uB298\uC740 \uC774\uBBF8 \uBB3C\uC744 \uC92C\uC5B4\uC694. \uB0B4\uC77C \uB610 \uC640 \uC8FC\uC138\uC694","\u{1F4A7} You already watered it today. Come back tomorrow")),!1;let e=Be();return nn("water",{id:`${be()}-${e}`,who:be(),day:e}),Ze(20),et.sfx("water"),setTimeout(()=>{let t=Fi();Wd("family:water",{grew:t.stage>n.stage,stage:t.stage}),t.stage>n.stage?(j0(["\u{1F331}","\u{1F338}","\u2728","\u{1F34E}"]),et.sfx("tada"),Mt(_(`\u{1F389} ${er(t.name,"\uC774/\uAC00")} '${t.stageName}'${er(t.stageName,"\uC73C\uB85C/\uB85C").slice(t.stageName.length)} \uC790\uB790\uC5B4\uC694!`,`\u{1F389} ${t.name} has grown into a ${t.stageName}`),3600)):Mt(t.next==null?_("\u{1F4A7} \uBB3C\uC744 \uC92C\uC5B4\uC694. \uC5F4\uB9E4\uAC00 \uC8FC\uB801\uC8FC\uB801\uD574\uC694 \u{1F34E}","\u{1F4A7} Watered. The tree is full of fruit \u{1F34E}"):_(`\u{1F4A7} \uBB3C\uC744 \uC92C\uC5B4\uC694! ${t.toNext}\uBC88 \uB354 \uC8FC\uBA74 '${Bs[t.stage+1]}'\uC774 \uB3FC\uC694`,`\u{1F4A7} Watered. ${Sa(t.toNext,"more time","more times")} and it becomes a ${Bs[t.stage+1]}`),3e3)},30),!0}function Jd(){return{html:'<div class="tree-box"></div>',mount:e=>{let t=e.querySelector(".tree-box"),i=()=>{if(!t.isConnected)return;let r=Fi(),s=Be(),a=Array.from({length:7},(o,l)=>gn(s,l-6)).map(o=>({k:o,n:new Set(lt("water").filter(l=>l.day===o).map(l=>l.who)).size}));t.innerHTML=`
        <div class="tree-hero">
          <div class="tree-emoji">${E_[r.stage]}</div>
          <div class="names">${Se(r.name)}</div>
          <div class="muted">${_(`\uC9C0\uAE08\uC740 <b>${r.stageName}</b> \xB7 \uBAA8\uC778 \uBB3C ${r.total}\uBC88${r.thirsty?" \xB7 \u{1F4A7} \uBAA9\uB9D0\uB77C\uC694":""}`,`Now a <b>${r.stageName}</b> \xB7 Watered ${Sa(r.total,"time","times")}${r.thirsty?" \xB7 \u{1F4A7} Thirsty":""}`)}</div>
          <div class="prog"><i style="width:${Math.round(r.progress*100)}%"></i></div>
          <small class="muted">${r.next==null?_("\uB2E4 \uC790\uB790\uC5B4\uC694! \uC5F4\uB9E4\uAC00 \uC5F4\uB838\uC5B4\uC694 \u{1F34E}","Fully grown, with fruit \u{1F34E}"):_(`${r.toNext}\uBC88 \uB354 \uC8FC\uBA74 '${Bs[r.stage+1]}'`,`${Sa(r.toNext,"more time","more times")} to become a ${Bs[r.stage+1]}`)}</small>
        </div>
        <p class="muted center">${_("\uAC00\uC871\uC774 \uD558\uB8E8\uC5D0 \uD55C \uBC88\uC529 \uBB3C\uC744 \uC904 \uC218 \uC788\uC5B4\uC694. \uB2E4 \uAC19\uC774 \uC624\uB798 \uB4E4\uB97C\uC218\uB85D \uB098\uBB34\uAC00 \uC790\uB77C\uC694","Everyone can water it once a day. The more often we all stop by, the more it grows")}</p>
        <button class="btn pink t-water" type="button" style="width:100%;padding:14px" ${!_t()||r.wateredToday?"disabled":""}>${_t()?r.wateredToday?_("\u{1F4A7} \uC624\uB298\uC740 \uBB3C\uC744 \uC92C\uC5B4\uC694","\u{1F4A7} Watered today"):_("\u{1F4A7} \uBB3C \uC8FC\uAE30","\u{1F4A7} Water the tree"):_("\u{1F64B} \uAC00\uC871\uB9CC \uBB3C\uC744 \uC904 \uC218 \uC788\uC5B4\uC694","\u{1F64B} Only family members can water it")}</button>
        <div class="card"><b>${_("\uC624\uB298 \uBB3C \uC900 \uAC00\uC871","Watered today by")}</b><div class="chips-row">${r.todayWho.length?r.todayWho.map(o=>{var l;return`<span class="who-chip" style="--c:${Se(((l=kt(o))==null?void 0:l.look.outfit)||"#ccc")}">${Se(xt(o))}</span>`}).join(""):`<span class="muted">${_("\uC544\uC9C1 \uC5C6\uC5B4\uC694","No one yet")}</span>`}</div></div>
        <div class="week">${a.map(o=>`<div><i style="height:${8+o.n*12}px"></i><small>${_(It(o.k,!1).replace("\uC6D4 ","/").replace("\uC77C",""),`${+o.k.slice(5,7)}/${+o.k.slice(8)}`)}</small></div>`).join("")}</div>`,t.querySelector(".t-water").onclick=()=>{M_()&&setTimeout(i,60)}};return i(),An(),Co(i)}}}function Oc(){si("\u{1F331} "+Fi().name,Jd())}var w_="family-guest-look";function _i(){let n=_t();if(n)return{...n.look};try{let e=JSON.parse(localStorage.getItem(w_)||"null");if(e)return e}catch{}return{outfit:nr[Math.floor(Math.random()*nr.length)],hair:Oa[Math.floor(Math.random()*5)],longHair:Math.random()<.5}}var S_=_([["kid","\uC5B4\uB9B0\uC774"],["teen","\uCCAD\uC18C\uB144"],["adult","\uC5B4\uB978"],["senior","\uC5B4\uB974\uC2E0"]],[["kid","Child"],["teen","Teen"],["adult","Adult"],["senior","Senior"]]),T_=_([["f","\uC5EC\uC790"],["m","\uB0A8\uC790"],["","\uB9D0 \uC548 \uD560\uB798\uC694"]],[["f","Female"],["m","Male"],["","Rather not say"]]),A_=_([["","\uC5C6\uC74C"],["cap","\uC57C\uAD6C \uBAA8\uC790"],["beanie","\uD138\uBAA8\uC790"],["flower","\uAF43\uD540"]],[["","None"],["cap","Baseball cap"],["beanie","Beanie"],["flower","Flower pin"]]),R_=()=>"u"+Date.now().toString(36).slice(-5)+Math.random().toString(36).slice(2,6);function Y0({create:n=!1,onDone:e}={}){let t=n?null:_t(),i=n?{outfit:nr[Math.floor(Math.random()*nr.length)],hair:Oa[Math.floor(Math.random()*4)],skin:Qo[1],hairStyle:"short",gender:"",age:"adult",glasses:!1,hat:""}:{hairStyle:_i().longHair?"long":"short",age:_i().kid?"kid":"adult",skin:Qo[1],..._i()},r=n?"":(t==null?void 0:t.nick)||(t?t.name:"")||"",s=n?"":(t==null?void 0:t.birthday)||"",a=(h,u)=>`<div class="seg wrap">${u.map(([d,m])=>{var f;return`<button type="button" data-k="${h}" data-v="${d}" class="${((f=i[h])!=null?f:"")===d?"on":""}">${m}</button>`}).join("")}</div>`,o=(h,u)=>`<div class="sw">${u.map(d=>`<button type="button" class="sw-c${i[h]===d?" on":""}" data-k="${h}" data-v="${d}" style="--c:${d}" aria-label="${d}"></button>`).join("")}</div>`,l=h=>{let u=h.querySelector(".look-preview"),d=h.querySelector(".look-opts"),m=()=>{var v;let y=(v=pn.portrait)==null?void 0:v.call(pn,{...i,kid:i.age==="kid",longHair:["long","bob"].includes(i.hairStyle)});u.innerHTML=y?`<img class="look-img" src="${y}" alt="">`:ls({...i,kid:i.age==="kid",longHair:i.hairStyle==="long"},"big")},f=()=>{d.innerHTML=`
        <b>${_("\uC131\uBCC4","Gender")}</b>${a("gender",T_)}
        <b>${_("\uB098\uC774","Age")}</b>${a("age",S_)}
        <b>${_("\uD53C\uBD80\uC0C9","Skin color")}</b>${o("skin",Qo)}
        <b>${_("\uBA38\uB9AC \uBAA8\uC591","Hairstyle")}</b>${a("hairStyle",$0)}
        <b>${_("\uBA38\uB9AC \uC0C9","Hair color")}</b>${o("hair",Oa)}
        <b>${_("\uC637 \uC0C9","Outfit color")}</b>${o("outfit",nr)}
        <b>${_("\uC548\uACBD","Glasses")}</b>${a("glasses",_([["0","\uC548 \uC368\uC694"],["1","\u{1F453} \uC368\uC694"]],[["0","No"],["1","\u{1F453} Yes"]]))}
        <b>${_("\uBAA8\uC790","Hat")}</b>${a("hat",A_)}`,d.querySelectorAll('[data-k="glasses"]').forEach(y=>y.classList.toggle("on",y.dataset.v==="1"==!!i.glasses)),d.querySelectorAll("[data-k]").forEach(y=>y.onclick=()=>{let v=y.dataset.k,M=y.dataset.v;i[v]=v==="glasses"?M==="1":M,Ze(6),et.sfx("pop"),f(),m()})},g=h.querySelector(".lk-nick"),p=h.querySelector(".lk-bm"),x=h.querySelector(".lk-bd");g.value=r,/^\d{2}-\d{2}$/.test(s)&&(p.value=String(+s.slice(0,2)),x.value=String(+s.slice(3))),f(),m(),h.querySelector(".lk-save").onclick=async()=>{var v;if(r=g.value.trim().replace(/\s+/g," ").slice(0,10),!r){g.focus(),Mt(_("\uB2C9\uB124\uC784\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694 \u270F\uFE0F","Please enter a nickname \u270F\uFE0F"));return}s=p.value&&x.value?`${String(p.value).padStart(2,"0")}-${String(x.value).padStart(2,"0")}`:"";let y={...i,kid:i.age==="kid",longHair:["long","bob"].includes(i.hairStyle),nick:r,bday:s};if(n||Ur()||!be()){let M=R_();await nn("looks",{id:M,who:M,look:{...y,joined:new Date().toISOString()}}),za(M)}else await nn("looks",{id:be(),who:be(),look:{...y,joined:((v=_t())==null?void 0:v.joined)||i.joined||""}});Wd("family:look",y),Mt(n?_(`\u2728 \uBC18\uAC00\uC6CC\uC694, ${r}! \uB9C8\uC744\uC5D0 ${r}\uB124 \uC9D1\uC774 \uC0DD\uACBC\uC5B4\uC694`,`\u2728 Welcome, ${r}. Your house is now in the village`):_("\u2728 \uC0C8 \uBAA8\uC2B5\uC73C\uB85C \uBC14\uB00C\uC5C8\uC5B4\uC694","\u2728 Your new look is ready"),3200),Uc(),e==null||e()}},c=h=>Array.from({length:h},(u,d)=>`<option value="${d+1}">${d+1}</option>`).join("");return{html:`<div class="look-box">
      <div class="look-preview"></div>
      <label class="lk-row"><b>${_("\uB2C9\uB124\uC784","Nickname")}</b><input class="field lk-nick" maxlength="10" placeholder="${_("\uB9C8\uC744\uC5D0\uC11C \uBD80\uB97C \uC774\uB984 (10\uC790\uAE4C\uC9C0)","Your name in the village (up to 10 characters)")}" autocomplete="off" /></label>
      <div class="look-opts"></div>
      <b>${_('\uC0DD\uC77C <small class="muted">(\uC120\uD0DD \xB7 \uADF8\uB0A0 \uC9D1 \uC55E\uC5D0 \uCF00\uC774\uD06C\uAC00 \uC0DD\uACA8\uC694)</small>','Birthday <small class="muted">(optional \xB7 a cake appears in front of your house that day)</small>')}</b>
      <div class="lk-bday"><select class="field lk-bm"><option value="">${_("\uC6D4","Month")}</option>${c(12)}</select><select class="field lk-bd"><option value="">${_("\uC77C","Day")}</option>${c(31)}</select></div>
      <button class="btn pink lk-save" type="button" style="width:100%;margin-top:14px;padding:14px">${n?_("\u2728 \uC774 \uCE90\uB9AD\uD130\uB85C \uC2DC\uC791\uD560\uB798\uC694","\u2728 Start with this character"):_("\u2728 \uC774 \uBAA8\uC2B5\uC73C\uB85C \uD560\uB798\uC694","\u2728 Keep this look")}</button>
      <p class="muted center">${_("\uBC14\uAFBC \uBAA8\uC2B5\uC740 \uB9C8\uC744 \uC0AC\uB78C\uB4E4\uC5D0\uAC8C\uB3C4 \uBCF4\uC5EC\uC694 (\uB0B4 \uC9D1 \uC55E\uC758 \uB098)","Everyone sees your new look too, standing by your house")}</p>
    </div>`,mount:l}}function kc(){si(_("\u{1F3A8} \uB0B4 \uCE90\uB9AD\uD130 \uAFB8\uBBF8\uAE30","\u{1F3A8} Customize my character"),Y0())}function zc(n){si(_("\u2728 \uB0B4 \uCE90\uB9AD\uD130 \uB9CC\uB4E4\uAE30","\u2728 Create my character"),Y0({create:!0,onDone:n}))}var $d=new Map;function Z0(n,e){e&&$d.set(n,e)}var Hc=(n,e)=>$d.has(n)?`<img class="char-img" src="${$d.get(n)}" alt="" draggable="false">`:ls(e,"big");function C_(n=be(),{carousel:e=!1}={}){return`<div class="who-grid${e?" carousel":""}">
    ${Ot().map(t=>`<button type="button" class="who-btn${n===t.id?" on":""}" data-id="${Se(t.id)}" style="--c:${Se(t.look.outfit||"#8FB8DE")}" aria-label="${Se(t.nick||t.nick||t.role||t.name)}"><span class="char-pic">${Hc(t.id,t.look)}</span><b>${Se(t.nick||t.nick||t.role||t.name)}</b><small>${Se(t.nick?"":t.role?t.name:"")}</small></button>`).join("")}
    <button type="button" class="who-btn guest${n==="guest"?" on":""}" data-id="guest" style="--c:#C9BBA9" aria-label="${_("\uC190\uB2D8\uC73C\uB85C \uAD6C\uACBD\uB9CC","Just looking, as a guest")}"><span class="char-pic"><span class="guest-ic">\u{1F440}</span></span><b>${_("\uAD6C\uACBD\uB9CC","Just looking")}</b><small>${_("\uC190\uB2D8","Guest")}</small></button>
  </div>`}function L_(n){let e=r=>{r.querySelectorAll(".who-btn").forEach(s=>s.onclick=()=>{Ze(10),et.sfx("pop"),za(s.dataset.id),n==null||n(s.dataset.id),Uc(),Mt(s.dataset.id==="guest"?_("\u{1F440} \uC190\uB2D8\uC73C\uB85C \uAD6C\uACBD\uD574\uC694","\u{1F440} Just looking, as a guest"):_(`\u{1F64B} ${er(xt(s.dataset.id),"\uC73C\uB85C/\uB85C")} \uB4E4\uC5B4\uC654\uC5B4\uC694`,`\u{1F64B} You're in as ${xt(s.dataset.id)}`))})};return{html:`<p class="muted">${_("\uB2E4\uB978 \uD734\uB300\uD3F0\uC5D0\uC11C \uC774\uBBF8 \uB9CC\uB4E0 \uCE90\uB9AD\uD130\uAC00 \uC788\uC73C\uBA74 \uACE8\uB77C \uC8FC\uC138\uC694. \uC5C6\uC73C\uBA74 \uC0C8\uB85C \uB9CC\uB4E4\uC5B4\uC694","If you already made a character on another phone, pick it here. If not, make a new one")}</p>${C_()}
    <button class="btn pink lk-new" type="button" style="width:100%;margin-top:6px;padding:12px">${_("\u2728 \uC0C8 \uCE90\uB9AD\uD130 \uB9CC\uB4E4\uAE30","\u2728 Create a new character")}</button>`,mount:r=>{e(r),r.querySelector(".lk-new").onclick=()=>zc(()=>n==null?void 0:n(be()))}}}function Kd(n){si(_("\u{1F64B} \uB0B4 \uCE90\uB9AD\uD130 \uACE0\uB974\uAE30","\u{1F64B} Pick my character"),L_(n))}function P_(n){return{html:'<div class="lockset"></div>',mount:t=>{let i=t.querySelector(".lockset");(()=>{var c;let s=Ls(),a=s.locked&&!!Dr();i.innerHTML=`
        <div class="card center">
          <div style="font-size:40px">${s.locked?"\u{1F512}":"\u{1F513}"}</div>
          <b>${s.locked?_("\uAC00\uC871 \uC554\uD638\uAC00 \uAC78\uB824 \uC788\uC5B4\uC694","A family password is set"):_("\uC9C0\uAE08\uC740 \uC554\uD638 \uC5C6\uC774 \uB204\uAD6C\uB098 \uB4E4\uC5B4\uC640\uC694","Right now anyone can come in without a password")}</b>
          <p class="muted" style="margin:6px 0 0">${s.remote?_("\uC554\uD638\uB294 \uAD6C\uAE00 \uC2DC\uD2B8\uC5D0 \uC800\uC7A5\uB3FC\uC11C \uAC00\uC871 \uBAA8\uB450\uC5D0\uAC8C \uB611\uAC19\uC774 \uC801\uC6A9\uB3FC\uC694.","The password is saved in the Google Sheet, so it applies to the whole family."):_("\u26A0\uFE0F \uAD6C\uAE00 \uC2DC\uD2B8\uB97C \uC5F0\uACB0\uD558\uC9C0 \uC54A\uC544\uC11C <b>\uC774 \uD734\uB300\uD3F0\uC5D0\uC11C\uB9CC</b> \uC7A0\uACA8\uC694. \uAC00\uC871 \uBAA8\uB450\uC5D0\uAC8C \uAC78\uB824\uBA74 \uC2DC\uD2B8\uB97C \uC5F0\uACB0\uD558\uC138\uC694 (tools/\uAC00\uC871_\uC2DC\uD2B8_\uC5F0\uACB0.md).","\u26A0\uFE0F No Google Sheet is connected, so it locks <b>only this phone</b>. To lock it for the whole family, connect a sheet (tools/\uAC00\uC871_\uC2DC\uD2B8_\uC5F0\uACB0.md).")}</p>
        </div>
        <form class="ls-form" autocomplete="off">
          ${s.locked&&!a?`<input class="field ls-cur" type="password" maxlength="30" placeholder="${_("\uC9C0\uAE08 \uC554\uD638","Current password")}" aria-label="${_("\uC9C0\uAE08 \uC554\uD638","Current password")}">`:""}
          <input class="field ls-new" type="password" maxlength="30" placeholder="${s.locked?_("\uC0C8 \uC554\uD638","New password"):_("\uC815\uD560 \uC554\uD638 (\uC22B\uC790\xB7\uAE00\uC790)","New password (numbers \xB7 letters)")}" aria-label="${_("\uC0C8 \uC554\uD638","New password")}">
          <input class="field ls-new2" type="password" maxlength="30" placeholder="${_("\uD55C \uBC88 \uB354","Type it again")}" aria-label="${_("\uC0C8 \uC554\uD638 \uD655\uC778","Confirm the new password")}">
          <input class="field ls-hint" maxlength="40" placeholder="${_("\uD78C\uD2B8 (\uC120\uD0DD, \uC608: \uC6B0\uB9AC \uC9D1 \uD604\uAD00 \uBE44\uBC00\uBC88\uD638 \uC55E \uB124 \uC790\uB9AC)","Hint (optional, e.g. our door code)")}" aria-label="${_("\uD78C\uD2B8","Hint")}" value="${Se(s.hint||"")}">
          <button class="btn pink" type="submit" style="width:100%;margin-top:10px">${s.locked?_("\u{1F512} \uC554\uD638 \uBC14\uAFB8\uAE30","\u{1F512} Change password"):_("\u{1F512} \uC554\uD638 \uAC78\uAE30","\u{1F512} Set password")}</button>
        </form>
        ${s.locked?`<button class="btn ls-off" type="button" style="width:100%;margin-top:8px">${_("\u{1F513} \uC554\uD638 \uC5C6\uC560\uAE30 (\uB204\uAD6C\uB098 \uB4E4\uC5B4\uC624\uAC8C)","\u{1F513} Remove password (let anyone in)")}</button>`:""}
        <p class="muted center" style="font-size:12.5px">${_("\uC554\uD638\uB294 \uB2E8\uD1A1\uBC29 \uB9C1\uD06C\uC640 \uAC19\uC740 \uBA54\uC2DC\uC9C0\uC5D0 \uC4F0\uC9C0 \uB9D0\uACE0 \uB530\uB85C \uC54C\uB824 \uC8FC\uC138\uC694","Don't put the password in the same message as the group chat link. Share it separately")}</p>`;let o=()=>{var h;return((h=i.querySelector(".ls-cur"))==null?void 0:h.value.trim())||""},l=async(h,u)=>{let d=await pm({current:o(),next:h,hint:u});if(!d.ok){Mt(d.error==="code"?_("\uC9C0\uAE08 \uC554\uD638\uAC00 \uB2EC\uB77C\uC694 \u{1F512}","The current password is wrong \u{1F512}"):_("\uC5F0\uACB0\uC774 \uC548 \uB3FC\uC694. \uC7A0\uC2DC \uB4A4 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694","Can't connect. Please try again in a moment"));return}Mt(h?_("\u{1F512} \uAC00\uC871 \uC554\uD638\uB97C \uAC78\uC5C8\uC5B4\uC694","\u{1F512} Family password set"):_("\u{1F513} \uC774\uC81C \uC554\uD638 \uC5C6\uC774 \uB204\uAD6C\uB098 \uB4E4\uC5B4\uC640\uC694","\u{1F513} Now anyone can come in without a password"),2800),Ze(15),et.sfx("chime"),n==null||n(),Uc()};i.querySelector(".ls-form").onsubmit=h=>{h.preventDefault();let u=i.querySelector(".ls-new").value.trim(),d=i.querySelector(".ls-new2").value.trim();if(!u){Mt(_("\uC815\uD560 \uC554\uD638\uB97C \uC801\uC5B4 \uC8FC\uC138\uC694","Enter the new password"));return}if(u!==d){Mt(_("\uB450 \uBC88 \uC801\uC740 \uC554\uD638\uAC00 \uB2EC\uB77C\uC694","The two passwords don't match"));return}l(u,i.querySelector(".ls-hint").value)},(c=i.querySelector(".ls-off"))==null||c.addEventListener("click",()=>l("",""))})()}}}function J0(n){si(_("\u{1F512} \uAC00\uC871 \uC554\uD638","\u{1F512} Family password"),P_(n))}function I_(){let n=Ot().filter(i=>i.id!==be()),e=new Set(n.slice(0,5).map(i=>i.id)),t=i=>{let r=()=>i.querySelectorAll(".who-btn").forEach(s=>s.classList.toggle("on",e.has(s.dataset.id)));i.querySelectorAll(".who-btn").forEach(s=>s.onclick=()=>{let a=s.dataset.id;e.has(a)?e.delete(a):e.size<5?e.add(a):Mt(_("\uD55C \uBC88\uC5D0 \uB2E4\uC12F \uBA85\uAE4C\uC9C0 \uAC19\uC774 \uCC0D\uC744 \uC218 \uC788\uC5B4\uC694","Up to five people can be in one photo")),Ze(6),r()}),i.querySelector(".pp-go").onclick=()=>{Uc(),setTimeout(()=>{var s;return(s=pn.takePhoto)==null?void 0:s.call(pn,[...e])},260)},r()};return{html:`<p class="muted">${_("\uB204\uAD6C\uB791 \uAC19\uC774 \uCC0D\uC744\uAE4C\uC694? (\uCD5C\uB300 5\uBA85)","Who should be in the photo? (up to 5)")}</p>
      <div class="who-grid">${n.map(i=>`<button type="button" class="who-btn" data-id="${Se(i.id)}">${ls(i.look)}<b>${Se(i.nick||i.role||i.name)}</b></button>`).join("")}</div>
      <button class="btn pink pp-go" type="button" style="width:100%;margin-top:12px;padding:14px">${_("\u{1F4F8} 3 \xB7 2 \xB7 1 \uCC0D\uAE30","\u{1F4F8} 3 \xB7 2 \xB7 1 Snap")}</button>`,mount:t}}function K0(){si(_("\u{1F4F8} \uAC00\uC871\uC0AC\uC9C4","\u{1F4F8} Family photo"),I_())}var hs=["green","autumn","winter"],us={green:{label:_("\uBD04\xB7\uC5EC\uB984","Spring\u2011summer"),emoji:"\u{1F33F}",theme:"#DDEFD0",toast:_("\u{1F33F} \uC2F1\uADF8\uB7EC\uC6B4 \uBD04\xB7\uC5EC\uB984 \uC232\uC774\uC5D0\uC694","\u{1F33F} A fresh spring\u2011summer forest")},autumn:{label:_("\uAC00\uC744","Autumn"),emoji:"\u{1F342}",theme:"#F3DEC0",toast:_("\u{1F342} \uB2E8\uD48D\uC774 \uB4E0 \uAC00\uC744 \uB9C8\uC744\uC774\uC5D0\uC694","\u{1F342} The village in autumn colors")},winter:{label:_("\uACA8\uC6B8","Winter"),emoji:"\u2744\uFE0F",theme:"#E4ECF4",toast:_("\u2744\uFE0F \uB208 \uB0B4\uB9B0 \uACA8\uC6B8 \uB9C8\uC744\uC774\uC5D0\uC694","\u2744\uFE0F A snowy winter village")}},Q0="family-season",F_=()=>{let n=Ki(Gn()).getMonth()+1;return n>=9&&n<=11?"autumn":n===12||n<=2?"winter":"green"};function D_(){var t;let n=location.hash;if(/(?:^|[#&])(autumn|fall)(?:&|$)/.test(n))return"autumn";if(/(?:^|[#&])winter(?:&|$)/.test(n))return"winter";if(/(?:^|[#&])(green|spring|summer)(?:&|$)/.test(n))return"green";try{let i=localStorage.getItem(Q0);if(hs.includes(i))return i}catch{}let e=String(((t=window.FAMILY)==null?void 0:t.season)||"green");return e==="auto"?F_():hs.includes(e)?e:"green"}var Aa=D_(),ai=()=>Aa;function ep(){var e;let n=document.body;n&&hs.forEach(t=>n.classList.toggle(`season-${t}`,t===Aa)),(e=document.querySelector('meta[name="theme-color"]'))==null||e.setAttribute("content",us[Aa].theme)}ep();document.body||addEventListener("DOMContentLoaded",ep);function tp(n,{save:e=!0}={}){if(!hs.includes(n))return Aa;if(Aa=n,e)try{localStorage.setItem(Q0,n)}catch{}ep();try{dispatchEvent(new CustomEvent("family:season",{detail:n}))}catch{}return n}var eg=()=>tp(hs[(hs.indexOf(Aa)+1)%hs.length]);var ag=[[0,34,0,10,3.2],[0,-3,0,-12.6,2.6],[-34,-10,34,-10,2.6],[1.5,20.6,24,25.4,2.4],[-6,3,-12,2,2.4],[-6,0,-18,-1.5,2.4],[6,7,10,9,2.2],[-2,20,-10,19,2.2]],bi={x:0,z:4,r:7.5},Io={green:{day:{top:"#6FB7E8",mid:"#BFE3F7",horizon:"#EAF6E4",fog:"#E3F1DC",sun:"#FFF4DE",sunI:2.4,hemi:"#F4FBEF",ground:"#B9D8A0",hemiI:1.9,lamps:!1,stars:!1},dusk:{top:"#6A7FC4",mid:"#F6A77A",horizon:"#FFD39B",fog:"#F9D2A0",sun:"#FFB07A",sunI:2,hemi:"#FFD8B6",ground:"#A9B890",hemiI:1.6,lamps:!0,stars:!1},night:{top:"#0F1B3D",mid:"#24386A",horizon:"#3F5A78",fog:"#3D5674",sun:"#B8C8FF",sunI:1.1,hemi:"#8FA8D8",ground:"#3E5048",hemiI:1.25,lamps:!0,stars:!0}},autumn:{day:{top:"#78B4DC",mid:"#F3D9AE",horizon:"#FFCB8E",fog:"#F6D2A2",sun:"#FFD9A8",sunI:2.35,hemi:"#FFEBD2",ground:"#C7B27E",hemiI:1.85,lamps:!1,stars:!1},dusk:{top:"#5E6FB0",mid:"#F29A64",horizon:"#FFC27A",fog:"#F7B97E",sun:"#FFA066",sunI:2,hemi:"#FFCFA6",ground:"#A88E6E",hemiI:1.6,lamps:!0,stars:!1},night:{top:"#121B38",mid:"#2C3762",horizon:"#5B4766",fog:"#4E4462",sun:"#B8C4F0",sunI:1.05,hemi:"#8E9BCB",ground:"#3E4552",hemiI:1.2,lamps:!0,stars:!0}},winter:{day:{top:"#8FB4D8",mid:"#D8E6F2",horizon:"#F4F1EC",fog:"#E6EDF3",sun:"#FFF6EA",sunI:2.15,hemi:"#F2F6FA",ground:"#D9E2EA",hemiI:2,lamps:!1,stars:!1},dusk:{top:"#5A6AA8",mid:"#D99AA0",horizon:"#F2C7A8",fog:"#E5C8C2",sun:"#FFC6A0",sunI:1.9,hemi:"#EAD8E0",ground:"#B8B8C8",hemiI:1.65,lamps:!0,stars:!1},night:{top:"#0E1A36",mid:"#26365E",horizon:"#4A5A80",fog:"#46557A",sun:"#C8D6FF",sunI:1.15,hemi:"#9AAAD8",ground:"#5A6680",hemiI:1.4,lamps:!0,stars:!0}}},Ut=Io.green;function U_(n,e,t,i,r,s){let a=r-t,o=s-i,l=Math.max(0,Math.min(1,((n-t)*a+(e-i)*o)/(a*a+o*o)));return Math.hypot(n-(t+a*l),e-(i+o*l))}function tg(n,e,t=.6){return Math.hypot(n-bi.x,e-bi.z)<bi.r+t?!0:ag.some(i=>U_(n,e,i[0],i[1],i[2],i[3])<i[4]/2+t)}function N_(){let n=new Ne(400,32,16),e=new ni({side:en,depthWrite:!1,fog:!1,uniforms:{top:{value:new we(Ut.day.top)},mid:{value:new we(Ut.day.mid)},horizon:{value:new we(Ut.day.horizon)},sunDir:{value:new R(.5,.45,-.75).normalize()},sunK:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 top; uniform vec3 mid; uniform vec3 horizon; uniform vec3 sunDir; uniform float sunK; varying vec3 vDir;
      void main(){
        float h = clamp(vDir.y, -0.2, 1.0);
        vec3 c = mix(horizon, mid, smoothstep(-0.02, 0.18, h));
        c = mix(c, top, smoothstep(0.18, 0.75, h));
        float s = max(dot(normalize(vDir), sunDir), 0.0);
        c += (vec3(1.0, 0.86, 0.6) * pow(s, 40.0) * 0.55 + vec3(1.0, 0.95, 0.8) * pow(s, 400.0) * 1.2) * sunK;
        gl_FragColor = vec4(c, 1.0);
      }`}),t=new de(n,e);t.renderOrder=-1;let i=320,r=new Float32Array(i*3);for(let o=0;o<i;o++){let l=Ee(0,Math.PI*2),c=Ee(.06,1),h=380,u=h*Math.sqrt(1-c*c);r.set([Math.cos(l)*u,h*c,Math.sin(l)*u],o*3)}let s=new rt;s.setAttribute("position",new mt(r,3));let a=new ns(s,new _r({color:"#FFF8D6",size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.9,depthWrite:!1}));return a.visible=!1,a.renderOrder=-1,t.add(a),t.userData.setPalette=o=>{e.uniforms.top.value.set(o.top),e.uniforms.mid.value.set(o.mid),e.uniforms.horizon.value.set(o.horizon),e.uniforms.sunK.value=o.stars?.15:1,a.visible=!!o.stars},t}var cp=[];function og(n){let e=new $t({color:n[ai()]||n.green,gradientMap:Nn});return cp.push({mat:e,cols:n}),e}function oi(n,...e){return cp.push({obj:n,seasons:e}),n.userData.seasons=e,n.visible=e.includes(ai()),n}function B_(n){cp.forEach(e=>{e.mat?e.mat.color.set(e.cols[n]||e.cols.green):e.obj.visible=e.seasons.includes(n)})}var ds=n=>n.map(e=>og(e)),np=["#F4F7FB","#E3EAF2","#FFFFFF"],ip={maple:ds([0,1,2].map(n=>({green:["#7DBB5E","#8FC970","#6EAD52"][n],autumn:["#D9553B","#E8763E","#C9452F"][n],winter:np[n]}))),ginkgo:ds([0,1,2].map(n=>({green:["#F7D3DC","#FBE4EA","#F2BFCD"][n],autumn:["#F2C14E","#F7D46A","#E3AE36"][n],winter:np[(n+1)%3]}))),persimmon:ds([0,1,2].map(n=>({green:["#6FA858","#82B868","#5F9A4C"][n],autumn:["#A9B55A","#C2BD5E","#97A64C"][n],winter:np[(n+2)%3]}))),pine:ds([0,1,2].map(n=>({green:["#3F6E45","#4C7D50","#386340"][n],autumn:["#4F7A4A","#5C8A52","#476F43"][n],winter:["#567F64","#EEF3F1","#6B8F78"][n]})))},O_=ds([0,1,2].map(n=>({green:["#8CC47A","#9ED08A","#7DB86C"][n],autumn:["#B98A3E","#C76B3C","#93A35A"][n],winter:["#E9EFF4","#DDE6EE","#F4F7FA"][n]}))),k_=ds([0,1,2,3].map(n=>({green:["#9CCB84","#AED596","#8FBF78","#A7CF8C"][n],autumn:["#B7AE66","#C79A55","#A9A55E","#C4884A"][n],winter:["#E8EEF3","#DCE4EC","#F2F5F8","#D5DEE8"][n]}))),z_=ds([0,1,2,3].map(n=>({green:["#F4B8C0","#FFFFFF","#F7D58B","#B9A4E8"][n],autumn:["#D9553B","#F2C14E","#E8763E","#B9773E"][n],winter:["#FFFFFF","#C94F4F","#E3EAF2","#9DB7D5"][n]}))),hp=n=>O_[n%3],qc=n=>z_[n%4];function Gc(n,e,{shadows:t=!0}={}){let i=new Map;return e.forEach(r=>{r.updateMatrixWorld(!0),r.traverse(s=>{if(!s.isMesh)return;let a=null;for(let c=s;c;c=c.parent)if(c.userData.seasons){a=c.userData.seasons;break}let o=`${s.geometry.uuid}|${s.material.uuid}|${a||""}`,l=i.get(o);l||i.set(o,l={geo:s.geometry,mat:s.material,seasons:a,list:[]}),l.list.push(s.matrixWorld.clone())})}),i.forEach(r=>{let s=new yi(r.geo,r.mat,r.list.length);r.list.forEach((a,o)=>s.setMatrixAt(o,a)),s.castShadow=t&&!r.mat.isMeshBasicMaterial,s.receiveShadow=!r.mat.isMeshBasicMaterial,s.computeBoundingSphere(),n.add(r.seasons?oi(s,...r.seasons):s)}),i.size}var H_=new R,G_=new R,ng=new ke;function up(n){n.updateMatrixWorld(!0);let e=new Fe().copy(n.matrixWorld).invert(),t=new Map;n.traverse(r=>{var h;if(!r.isMesh||r.isInstancedMesh||Array.isArray(r.material))return;for(let u=r;u&&u!==n;u=u.parent)if(u.userData.dynamic)return;let s=r.geometry,a=s.attributes;if(!a.position||!a.normal||!a.uv||(h=s.morphAttributes)!=null&&h.position)return;let o=null;for(let u=r;u&&u!==n;u=u.parent)if(u.userData.seasons){o=u.userData.seasons;break}let l=`${r.material.uuid}|${o||""}`,c=t.get(l);c||t.set(l,c={mat:r.material,seasons:o,items:[],cast:!1,verts:0,idx:0}),c.items.push({o:r,g:s,m:new Fe().multiplyMatrices(e,r.matrixWorld)}),c.cast=c.cast||r.castShadow,c.verts+=a.position.count,c.idx+=s.index?s.index.count:a.position.count});let i=0;return t.forEach(r=>{if(r.items.length<2)return;let s=new Float32Array(r.verts*3),a=new Float32Array(r.verts*3),o=new Float32Array(r.verts*2),l=new(r.verts>65535?Uint32Array:Uint16Array)(r.idx),c=0,h=0;r.items.forEach(({o:m,g:f,m:g})=>{let p=f.attributes.position,x=f.attributes.normal,y=f.attributes.uv;ng.getNormalMatrix(g);for(let v=0;v<p.count;v++)H_.fromBufferAttribute(p,v).applyMatrix4(g).toArray(s,(c+v)*3),G_.fromBufferAttribute(x,v).applyMatrix3(ng).normalize().toArray(a,(c+v)*3),o[(c+v)*2]=y.getX(v),o[(c+v)*2+1]=y.getY(v);if(f.index)for(let v=0;v<f.index.count;v++)l[h++]=f.index.getX(v)+c;else for(let v=0;v<p.count;v++)l[h++]=v+c;c+=p.count,m.parent.remove(m)});let u=new rt;u.setAttribute("position",new mt(s,3)),u.setAttribute("normal",new mt(a,3)),u.setAttribute("uv",new mt(o,2)),u.setIndex(new mt(l,1)),u.computeBoundingSphere();let d=new de(u,r.mat);d.castShadow=r.cast,d.receiveShadow=!0,n.add(r.seasons?oi(d,...r.seasons):d),i+=r.items.length-1}),i}var rp={};function ig(n){if(rp[n])return rp[n];let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),i={green:{base:"#A9D18E",dots:["#9DC883","#B4D899","#A2CC87","#BEDDA3"],bits:["#FFFFFF","#F7D84E","#F4B8C0"],nb:40},autumn:{base:"#B7C27C",dots:["#ABB86F","#C3CB88","#A6B266","#CBC88E"],bits:["#E0863E","#D35F3A","#E8B547","#B9773E"],nb:90},winter:{base:"#EEF3F8",dots:["#E3EAF1","#FFFFFF","#DAE3EC","#F6F9FB"],bits:["#B9C9B3","#C8D2DA"],nb:30}}[n]||{};t.fillStyle=i.base,t.fillRect(0,0,256,256);for(let s=0;s<1400;s++)t.fillStyle=i.dots[s%i.dots.length],t.globalAlpha=.5,t.beginPath(),t.arc(Math.random()*256,Math.random()*256,Math.random()*3+1,0,7),t.fill();for(let s=0;s<i.nb;s++)t.fillStyle=i.bits[s%i.bits.length],t.globalAlpha=.6,t.beginPath(),t.ellipse(Math.random()*256,Math.random()*256,2.6,1.5,Math.random()*3,0,7),t.fill();let r=ht(e);return r.wrapS=r.wrapT=fi,r.repeat.set(60,60),rp[n]=r,r}function V_(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.fillStyle="#E8D3AE",e.fillRect(0,0,128,128);for(let i=0;i<18;i++)e.fillStyle=["#DEC59C","#F0E0C0","#D9BF95"][i%3],e.beginPath(),e.ellipse(Math.random()*128,Math.random()*128,10+Math.random()*12,8+Math.random()*8,Math.random()*3,0,7),e.fill();let t=ht(n);return t.wrapS=t.wrapT=fi,t}var rg=new Ae(.22,.32,2,8),dp=new Et(1.3,1),$_=new bn(1.35,1.9,8),W_=new Ne(.15,8,6);function sp(n,e,{kind:t="maple",s:i=1}={}){let r=new ye;if(t==="pine")r.add(ee(rg,"#7E553A",0,.8,0)),[[1.9,1],[2.85,.8],[3.65,.58]].forEach(([s,a],o)=>{let l=ee($_,ip.pine[o],0,s,0);l.scale.setScalar(a),r.add(l)});else{r.add(ee(rg,"#8F6243",0,1,0));let s=ip[t]||ip.maple;if([[0,2.6,0,1.2],[.8,2.2,.2,.85],[-.75,2.3,-.2,.9],[.1,3.3,-.1,.8]].forEach(([o,l,c,h],u)=>{let d=ee(dp,s[u%3],o,l,c);d.scale.setScalar(h),r.add(d)}),t==="persimmon"){let o=new ye;[[.9,2.5,.9],[-.5,2,1],[.3,3,1.15],[-1.2,2.6,.4],[1.3,2,-.2],[.1,1.9,1.25],[-.6,3.4,.7]].forEach(([l,c,h])=>o.add(ee(W_,"#F28C28",l,c,h))),o.userData.seasons=["autumn"],r.add(o)}}return r.position.set(n,0,e),r.scale.setScalar(i),r.rotation.y=Math.random()*6,r}function q_(n,e,t=1,i=0){let r=new ye;return[[0,.45,0,.6],[.5,.35,.1,.45],[-.45,.35,-.05,.45]].forEach(([s,a,o,l])=>{let c=ee(dp,hp(i),s,a,o);c.scale.setScalar(l),r.add(c)}),r.position.set(n,0,e),r.scale.setScalar(t),r}var Po={post:new Ae(.09,.13,2.8,8),base:new Ae(.24,.24,.12,8),glass:new Ae(.2,.2,.42,6),cap:new bn(.34,.28,6),glassMat:new ze({color:"#FFD27A"})};function j_(n,e){let t=new ye;t.add(ee(Po.post,"#5E4433",0,1.4,0)),t.add(ee(Po.base,"#5E4433",0,.06,0));let i=new de(Po.glass,Po.glassMat);return i.position.y=3,t.add(i),t.add(ee(Po.cap,"#5E4433",0,3.34,0)),t.position.set(n,0,e),t}var ap,Vc;function X_(n,e){if(!ap){let s=document.createElement("canvas");s.width=s.height=128;let a=s.getContext("2d"),o=a.createRadialGradient(64,64,4,64,64,64);o.addColorStop(0,"rgba(255,236,170,.95)"),o.addColorStop(.35,"rgba(255,220,140,.45)"),o.addColorStop(1,"rgba(255,200,120,0)"),a.fillStyle=o,a.fillRect(0,0,128,128),ap=ht(s)}let t=new ye,i=new Fn(new _n({map:ap,blending:Lc,depthWrite:!1,transparent:!0,opacity:.9}));i.position.set(0,3,0),i.scale.set(3.6,3.6,1),Vc=Vc||{geo:new Un(2.6,24),mat:new ze({color:"#FFE4A8",transparent:!0,opacity:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})};let r=new de(Vc.geo,Vc.mat);return r.rotation.x=-Math.PI/2,r.position.y=.04,t.add(i,r),t.position.set(n,0,e),t}var $c={seat:new fe(1.8,.08,.16),back:new fe(1.8,.14,.06),leg:new fe(.08,.5,.5),arm:new fe(.08,.6,.06)};function Y_(n,e,t=0){let i=new ye,r="#B07A4F";for(let s=0;s<3;s++)i.add(ee($c.seat,r,0,.5,-.2+s*.2));for(let s=0;s<2;s++)i.add(ee($c.back,r,0,.75+s*.2,-.32));for(let s of[-.75,.75])i.add(ee($c.leg,"#6E4B33",s,.25,0)),i.add(ee($c.arm,"#6E4B33",s,.8,-.32));return i.position.set(n,0,e),i.rotation.y=t,i}function lg(n,e,t=3.2){let i=new ye,r=["#F4B8C0","#FFFFFF","#F7D58B","#F9C59E","#E88A98"],s=[];for(let a=0;a<5;a++){let o=a/5*Math.PI*2,l=Math.cos(o)*.35,c=Math.sin(o)*.35,h=t+a%2*.35,u=ee(new Ne(.34,14,12),r[a],l,h,c);u.scale.y=1.18;let d=new yc(new rt().setFromPoints([new R(0,.4,0),new R(l,h-.4,c)]),new _o({color:"#B8A59B"}));i.add(u,d),s.push({b:u,base:h,off:Math.random()*6})}return i.add(ee(new Ne(.12,8,6),"#C9637A",0,.4,0)),i.add(ee(new Ae(.2,.25,.4,10),"#FFF3EA",0,.2,0)),i.position.set(n,0,e),i.userData.update=a=>s.forEach(o=>{o.b.position.y=o.base+Math.sin(a*1.4+o.off)*.12,o.b.rotation.z=Math.sin(a+o.off)*.08}),i}function Z_(n,e,t=0){let i=new ye;i.add(ee(new Ae(.06,.07,2.6,6),"#8F6243",0,1.3,0));let r=ee(new Ae(.05,.05,1.9,6),"#8F6243",0,1.75,0);r.rotation.z=Math.PI/2,i.add(r);let s=ee(new fe(.75,.75,.3),"#C9452F",0,1.6,0);i.add(s);for(let o of[-1,1])i.add(ee(new fe(.45,.22,.24),"#C9452F",o*.55,1.78,0));i.add(ee(new Ne(.32,12,10),"#F1D9A8",0,2.3,0));let a=ee(new bn(.5,.35,12),"#E3B55A",0,2.6,0);i.add(a,ee(new Ae(.55,.55,.04,14),"#E3B55A",0,2.48,0));for(let o of[-1,1])i.add(new de(new Ne(.04,6,4),new ze({color:"#3A2A24"})).translateX(o*.11).translateY(2.33).translateZ(.29));return i.position.set(n,0,e),i.rotation.y=t,i}var Wc=[];function pp(){return Wc.length||["#FF5A5A","#FFD34D","#6FD3FF","#9BE87A","#FFFFFF"].forEach((n,e)=>Wc.push({mat:new ze({color:n}),base:new we(n),off:e*1.3})),Wc.map(n=>n.mat)}function J_(n,e,t=1){let i=new ye;i.add(ee(new Ae(.22,.3,1,8),"#7E553A",0,.5,0)),i.add(ee(new Ae(.7,.8,.5,12),"#C94F4F",0,.25,0));let r=["#2F6B3E","#377747","#2A603A","#3E8250"];[[1.6,1.45,1.7],[2.55,1.15,1.4],[3.35,.85,1.1],[4,.55,.85]].forEach(([c,h,u],d)=>i.add(ee(new bn(h,u,12),r[d],0,c,0)));let s=pp(),a=new Ne(.09,8,6),o=new Ne(.14,10,8);for(let c=0;c<46;c++){let h=c/46,u=1+h*3.2,d=1.35*(1-h*.82)+.05,m=h*Math.PI*9,f=new de(a,s[c%s.length]);f.position.set(Math.cos(m)*d,u,Math.sin(m)*d),i.add(f)}["#C94F4F","#E2B865","#4A7FB5","#FFFFFF"].forEach((c,h)=>{for(let u=0;u<4;u++){let d=1.3+(u*4+h)%13*.21,m=1.4*(1-(d-1)/3.6)+.08,f=u*1.7+h*.6;i.add(ee(o,c,Math.cos(f)*m,d,Math.sin(f)*m))}});let l=new de(new To(.32,0),new ze({color:"#FFD34D"}));return l.position.y=4.5,l.scale.set(1,1.25,.45),l.userData.dynamic=!0,i.add(l),i.position.set(n,0,e),i.scale.setScalar(t),i.userData.star=l,i}function sg(n,e,t=1,i=!1){let r=new ye,s=i?["#FBFCFE","#EEF3F8","#F6F9FB","#E6EDF4"]:["#D9553B","#E8763E","#F2C14E","#B9773E"];return[[0,.22,0,.75],[.45,.16,.2,.5],[-.4,.15,-.15,.55],[.1,.14,-.45,.45]].forEach(([a,o,l,c],h)=>{let u=ee(dp,s[h%s.length],a,o,l);u.scale.set(c,c*.4,c),r.add(u)}),r.position.set(n,0,e),r.scale.setScalar(t),r}var K_={green:["#FFFFFF","#F7D84E","#B9A4E8","#F4A6C6","#FFE07A","#9FD3F0"],autumn:["#FFFFFF","#F4A6C6","#E07BB5","#F2C14E","#F6CBE0","#E9894A"]};function Q_(n,e){let t=xi?500:900,i=new bn(.07,.4,3),r=new yi(i,og({green:"#8DC175",autumn:"#A9B46C",winter:"#D8E2E8"}),t),s=new Et(.11,0),a=xi?260:480,o=new yi(s,new $t({color:"#fff"}),a),l=new Fe,c=new In,h=new R,u=new R,d=new xa,m=()=>{for(let x=0;x<20;x++){let y=Math.random()*Math.PI*2,v=Math.sqrt(Math.random())*38,M=Math.cos(y)*v,C=Math.sin(y)*v;if(!tg(M,C)&&!e(M,C))return[M,C]}return[60,60]};for(let x=0;x<t;x++){let[y,v]=m();d.set(Ee(-.2,.2),Ee(0,6),Ee(-.2,.2)),c.setFromEuler(d);let M=Ee(.7,1.4);l.compose(u.set(y,.18*M,v),c,h.set(M,M,M)),r.setMatrixAt(x,l)}for(let x=0;x<a;x++){let[y,v]=m();l.compose(u.set(y,.14,v),c.identity(),h.setScalar(Ee(.8,1.3))),o.setMatrixAt(x,l)}r.receiveShadow=!0,n.add(oi(r,"green","autumn"),o);let f=22,g=new yi(new Ae(.06,.08,.26,6),ft("#F6EBD8"),f),p=new yi(new Ne(.17,10,6,0,Math.PI*2,0,Math.PI/2),ft("#D9553B"),f);for(let x=0;x<f;x++){let y=60,v=60;for(let C=0;C<20;C++){let S=Math.random()*Math.PI*2,A=Ee(24,38),z=Math.cos(S)*A,L=Math.sin(S)*A;if(!tg(z,L)&&!e(z,L)){y=z,v=L;break}}let M=Ee(.8,1.5);l.compose(u.set(y,.13*M,v),c.identity(),h.setScalar(M)),g.setMatrixAt(x,l),l.compose(u.set(y,.25*M,v),c.identity(),h.setScalar(M)),p.setMatrixAt(x,l)}return n.add(oi(g,"green","autumn"),oi(p,"green","autumn")),{setSeason(x){let y=K_[x];if(o.visible=!!y,!y)return;let v=y.map(M=>new we(M));for(let M=0;M<a;M++)o.setColorAt(M,v[M%v.length]);o.instanceColor.needsUpdate=!0}}}function e1(n){let e=[],t=new ye;n.add(t);let i=new Ne(1,12,10),r=new $t({color:"#FFFFFF",emissive:"#FFF4EA",emissiveIntensity:.35});for(let a=0;a<14;a++){let o=new ye,l=4+Math.floor(Math.random()*3);for(let u=0;u<l;u++){let d=new de(i,r);d.position.set(u*2.2-l,Math.random()*1.2,Math.random()*1.5),d.scale.setScalar(Ee(1.6,2.8)),o.add(d)}let c=Math.random()*Math.PI*2,h=Ee(70,150);o.position.set(Math.cos(c)*h,Ee(28,50),Math.sin(c)*h-30),o.scale.set(1.3,.8,1),t.add(o),e.push({g:o,speed:Ee(.4,1)})}return t.userData.dynamic=!0,{group:t,update:a=>{t.visible&&e.forEach(o=>{o.g.position.x+=o.speed*a,o.g.position.x>170&&(o.g.position.x=-170)})}}}function t1(n){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");if(n==="leaf"){t.fillStyle="#FFFFFF",t.beginPath();for(let i=0;i<10;i++){let r=-Math.PI/2+i/10*Math.PI*2,s=i%2?11:27;t.lineTo(32+Math.cos(r)*s,30+Math.sin(r)*s)}t.closePath(),t.fill(),t.fillRect(31,36,2,22)}else{let i=t.createRadialGradient(32,32,2,32,32,28);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(n==="snow"?.55:.35,"rgba(255,255,255,.85)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,64,64)}return ht(e)}var op={green:{tex:"fluff",size:.24,fall:.3,drift:1.4,cols:["#FFFFFF","#FFF6D8","#FCE4EC","#FFFFFF"]},autumn:{tex:"leaf",size:.36,fall:1,drift:1,cols:["#D9553B","#E8763E","#F2C14E","#B9773E","#C9452F"]},winter:{tex:"snow",size:.24,fall:.75,drift:.5,cols:["#FFFFFF","#F4F8FF","#FFFFFF"]}};function n1(n){let e=Vd?0:xi?160:300;if(!e)return{group:new ye,update(){},setCount(){},setSeason(){}};let t=new Float32Array(e*3),i=[],r=new Float32Array(e*3);for(let u=0;u<e;u++)t[u*3]=Ee(-30,30),t[u*3+1]=Ee(0,9),t[u*3+2]=Ee(-30,30),i.push([Ee(.3,.9),Ee(.3,.8),Ee(0,6)]);let s=new rt;s.setAttribute("position",new mt(t,3)),s.setAttribute("color",new mt(r,3));let a=new _r({size:.3,transparent:!0,depthWrite:!1,vertexColors:!0,alphaTest:.1}),o=new ns(s,a);o.frustumCulled=!1,n.add(o);let l={},c=e,h=op.green;return{group:o,setCount(u){c=Math.max(0,Math.min(e,u)),s.setDrawRange(0,c)},setSeason(u){h=op[u]||op.green,a.map=l[h.tex]||(l[h.tex]=t1(h.tex)),a.size=h.size,a.needsUpdate=!0;let d=h.cols.map(m=>new we(m));for(let m=0;m<e;m++){let f=d[m%d.length];r.set([f.r,f.g,f.b],m*3)}s.attributes.color.needsUpdate=!0},update(u,d,m){if(o.visible){for(let f=0;f<c;f++){let g=i[f];t[f*3]+=(Math.sin(d*g[0]+g[2])*.6*h.drift+.35)*u,t[f*3+1]-=g[1]*h.fall*u,t[f*3+2]+=Math.cos(d*g[0]*.7+g[2])*.4*h.drift*u,t[f*3+1]<0&&(t[f*3]=m.x+Ee(-28,28),t[f*3+1]=Ee(6,9),t[f*3+2]=m.z+Ee(-28,20))}s.attributes.position.needsUpdate=!0}}}}function i1(n){let e=new ye,t=new ye;e.userData.dynamic=t.userData.dynamic=!0,n.add(e,t);let i=[],r=Vd?0:8,s=new Un(.16,10),a=["#F7D58B","#F4B8C0","#FFFFFF","#BFE3F5"];for(let m=0;m<r;m++){let f=new ye,g=new ze({color:a[m%4],side:Nd}),p=new de(s,g),x=new de(s,g);p.position.x=-.14,x.position.x=.14;let y=new ye,v=new ye;y.add(p),v.add(x),f.add(y,v),e.add(f),i.push({g:f,lw:y,rw:v,axis:"y",amp:1.1,freq:18,cx:Ee(-25,25),cz:Ee(-25,25),r:Ee(2,5),sp:Ee(.3,.7),off:Ee(0,6)})}let o=new Un(.16,10),l=new ze({color:"#FFFFFF",transparent:!0,opacity:.55,side:Nd,depthWrite:!1}),c=new Ae(.025,.018,.42,6);for(let m=0;m<r;m++){let f=new ye,g=new de(c,new ze({color:m%3?"#D9452F":"#E8763E"}));g.rotation.x=Math.PI/2,f.add(g);let p=new ye,x=new ye;for(let[y,v]of[[p,-1],[x,1]])for(let M of[-.05,.06]){let C=new de(o,l);C.scale.set(1.4,.32,1),C.position.set(v*.2,0,M),C.rotation.x=-Math.PI/2,y.add(C)}f.add(p,x),t.add(f),i.push({g:f,lw:p,rw:x,axis:"z",amp:.35,freq:30,cx:Ee(-25,25),cz:Ee(-25,25),r:Ee(2,5),sp:Ee(.3,.7),off:Ee(0,6)})}let h=!1,u="green",d=()=>{e.visible=!h&&u==="green",t.visible=!h&&u==="autumn"};return{setLite(m){h=m,d()},setSeason(m){u=m,d()},get visible(){return e.visible||t.visible},update(m,f){!e.visible&&!t.visible||i.forEach(g=>{if(!g.g.parent.visible)return;let p=f*g.sp+g.off;g.g.position.set(g.cx+Math.cos(p)*g.r,1.2+Math.sin(f*2+g.off)*.5,g.cz+Math.sin(p*1.3)*g.r),g.g.rotation.y=-p;let x=Math.sin(f*g.freq+g.off)*g.amp;g.lw.rotation[g.axis]=x,g.rw.rotation[g.axis]=-x})}}}var lp=new Map;function cg(n="\u{1F497}"){if(lp.has(n))return lp.get(n);let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");t.font="52px serif",t.textAlign="center",t.textBaseline="middle",t.fillText(n,32,36);let i=ht(e);return lp.set(n,i),i}var Ra=[];function Mr(n,e,t=10,i="\u{1F497}"){let r=cg(i);for(let s=0;s<t&&!(Ra.length>90);s++){let a=new Fn(new _n({map:r,transparent:!0,depthWrite:!1}));a.position.copy(e).add(new R(Ee(-.4,.4),Ee(0,.5),Ee(-.4,.4))),a.scale.setScalar(Ee(.35,.6)),n.add(a),Ra.push({sp:a,v:new R(Ee(-1,1),Ee(2,3.5),Ee(-1,1)),life:1.4+Math.random()*.4,scene:n})}}function jc(n,e,t,i="\u{1FA99}",r=.7,s){let a=new Fn(new _n({map:cg(i),transparent:!0,depthWrite:!1}));a.position.copy(e),a.scale.setScalar(.5),n.add(a);let o=9,l=new R((t.x-e.x)/r,(t.y-e.y+.5*o*r*r)/r,(t.z-e.z)/r);Ra.push({sp:a,v:l,life:r,scene:n,g:o,onLand:s})}function hg(n){var e;for(let t=Ra.length-1;t>=0;t--){let i=Ra[t];i.life-=n,i.v.y-=(i.g||1.2)*n,i.sp.position.addScaledVector(i.v,n),i.g||(i.sp.material.opacity=Math.min(1,i.life)),i.life<=0&&(i.scene.remove(i.sp),i.sp.material.dispose(),Ra.splice(t,1),(e=i.onLand)==null||e.call(i,i.sp.position))}}function ug(n,e){let t=new ye;n.add(t);let i=N_();n.add(i);let r=new de(new Un(160,64),new $t({map:ig(ai()),gradientMap:Nn}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,t.add(r);let s=V_(),a=new $t({map:s,gradientMap:Nn,polygonOffset:!0,polygonOffsetFactor:-1});for(let[L,F,$,b,P]of ag){let N=Math.hypot($-L,b-F),k=new at(P,N),J=k.attributes.uv;for(let j=0;j<J.count;j++)J.setXY(j,J.getX(j)*P/3,J.getY(j)*N/3);let X=new de(k,a);X.rotation.x=-Math.PI/2,X.rotation.z=Math.atan2($-L,b-F)+Math.PI,X.position.set((L+$)/2,.02,(F+b)/2),X.receiveShadow=!0,t.add(X);for(let[j,Y]of[[L,F],[$,b]]){let G=new de(new Un(P/2,20),a);G.rotation.x=-Math.PI/2,G.position.set(j,.021,Y),G.receiveShadow=!0,t.add(G)}}let o=new de(new Un(bi.r,48),a);o.rotation.x=-Math.PI/2,o.position.set(bi.x,.025,bi.z),o.receiveShadow=!0,t.add(o);let l=new de(new ss(bi.r-.35,bi.r,48),ft("#E6D2B5"));l.rotation.x=-Math.PI/2,l.position.set(bi.x,.03,bi.z),t.add(l);let c=[],h=[],u=[],d=[];for(let L=0;L<46;L++){let F=L/46*Math.PI*2+Ee(-.04,.04),$=Ee(41,46),b=Math.cos(F)*$,P=Math.sin(F)*$;Math.abs(b)<4&&P>30||h.push(sp(b,P,{kind:["pine","maple","pine","ginkgo","pine","persimmon"][L%6],s:Ee(1.1,1.6)}))}for(let L=0;L<30;L++){let F=Math.random()*Math.PI*2,$=Ee(50,75);h.push(sp(Math.cos(F)*$,Math.sin(F)*$,{kind:["pine","pine","maple","ginkgo"][L%4],s:Ee(1.4,2.2)}))}for(let L=0;L<8;L++){let F=ee(new Ne(1,20,12),k_[L%4],Ee(-120,120),-Ee(8,14),-Ee(90,130));F.scale.set(Ee(25,45),Ee(18,26),Ee(20,30)),t.add(F)}[[-9,27,"persimmon"],[14.5,31,"maple"],[-24,22,"pine"],[34,14,"ginkgo"],[-30,6,"pine"],[30,4,"maple"],[-28,-20,"ginkgo"],[33,-20,"pine"],[-8,-28,"pine"],[8,-29,"maple"],[-15,12,"maple"],[36,-8,"persimmon"],[-25,-8,"ginkgo"],[11,-22,"persimmon"],[-12,-24,"maple"]].forEach(([L,F,$])=>{u.push(sp(L,F,{kind:$,s:Ee(1,1.3)})),c.push({x:L,z:F,r:.7})}),[[-5,28],[12.5,27.5],[-14,8],[13,3],[-4,-23],[4,-23],[-26,12],[31,12],[-24,-24],[30,-4]].forEach(([L,F],$)=>{u.push(q_(L,F,Ee(.9,1.3),$)),c.push({x:L,z:F,r:.9})});let f=new ye;f.visible=!1,f.userData.dynamic=!0,t.add(f),[[-2.3,30],[2.3,24],[-2.3,18],[2.3,12],[7.5,-1],[-29.25,-11.8],[-22.75,-11.8],[-16.25,-11.8],[-9.75,-11.8],[9.75,-11.8],[16.25,-11.8],[22.75,-11.8],[29.25,-11.8],[12,19.3],[-8.6,5.5],[-12,-5],[-8,9],[8,12]].forEach(([L,F])=>{d.push(j_(L,F)),f.add(X_(L,F)),c.push({x:L,z:F,r:.3})}),[[-6.3,8.8,2.4],[6.3,8.8,-2.4],[-6.8,-.5,1.2],[6.8,-1,-1.2]].forEach(([L,F,$])=>{d.push(Y_(L,F,$)),c.push({x:L,z:F,r:.9})}),Gc(t,h,{shadows:!1}),Gc(t,u,{shadows:!0}),Gc(t,d,{shadows:!0});let g=[];f.children.forEach(L=>{let F=L.children.find($=>$.isMesh);if(F){L.remove(F);let $=new ye;$.position.copy(L.position),$.add(F),g.push($)}}),Gc(f,g,{shadows:!1});let p=[];t.add(oi(Z_(-6.2,30.5,.5),"green","autumn")),c.push({x:-6.2,z:30.5,r:.6});let x=oi(J_(6.4,14.6,1),"winter");t.add(x),c.push({x:6.4,z:14.6,r:1.2}),p.push(L=>{x.visible&&(Wc.forEach(F=>{let $=.55+.45*Math.max(0,Math.sin(L*2.6+F.off));F.mat.color.copy(F.base).multiplyScalar($)}),x.userData.star.rotation.y=L*.8)}),[[3.9,32.4,1],[15.5,-7,.9],[24.5,-7,.9],[-7.5,15.5,.8],[8.5,-5.2,.7]].forEach(([L,F,$])=>{t.add(oi(sg(L,F,$),"autumn")),t.add(oi(sg(L,F,$*1.1,!0),"winter")),c.push({x:L,z:F,r:.6*$})});let y=Q_(t,e),v=e1(t),M=n1(t),C=i1(t),S="day",A=ai(),z={group:t,sky:i,colliders:c,get time(){return S},get season(){return A},palette:()=>Io[A][S],setTime(L){S=Io[A][L]?L:"day";let F=Io[A][S];return i.userData.setPalette(F),f.visible=F.lamps,F},setSeason(L){return A=Io[L]?L:"green",r.material.map=ig(A),r.material.needsUpdate=!0,B_(A),y.setSeason(A),M.setSeason(A),C.setSeason(A),z.setTime(S)},setLite(L){M.setCount(L>=2?0:L===1?80:300),M.group.visible=L<2,v.group.visible=L<2,C.setLite(L>=2)},update(L,F,$){v.update(L),M.update(L,F,$),C.update(L,F),p.forEach(b=>b(F))}};return up(t),z.setSeason(A),z}var mp={z:-14,gap:6.5},En={x:0,z:-15.5,r:1.4},fp=(n,e=.25)=>"#"+new we(n).lerp(new we("#5A4038"),e).getHexString(),dg=(n,e)=>(n=String(n||"").replace(/\s+/g," ").trim(),n.length>e?n.slice(0,e-1)+"\u2026":n);function r1(n){if(n>=el)return null;let e=(n%2===0?-1:1)*mp.gap*(Math.floor(n/2)+1);return{x:e,z:mp.z,npcX:e,npcZ:mp.z+2.6}}var Xc=null;function pg(){if(Xc)return Xc;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=["#B07A4F","#A56F45","#BC8657","#A9744B"];for(let r=0;r<6;r++){let s=r*21.33,a=e.createLinearGradient(0,s,0,s+21.33);a.addColorStop(0,"#7E5536"),a.addColorStop(.18,t[r%4]),a.addColorStop(.75,t[(r+1)%4]),a.addColorStop(1,"#6E4B33"),e.fillStyle=a,e.fillRect(0,s,128,21.33),e.strokeStyle="rgba(80,50,30,.25)",e.lineWidth=1;for(let o=0;o<3;o++){e.beginPath();let l=(r*37+o*45)%128;e.moveTo(l,s+8),e.lineTo(l+18,s+9),e.stroke()}}let i=ht(n);return i.wrapS=i.wrapT=fi,i.repeat.set(1.4,1),Xc=new $t({map:i,gradientMap:Nn}),Xc}var Yc=null;function s1(){if(Yc)return Yc;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,.85)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Yc=ht(n),Yc}function mg({group:n,colliders:e,boxes:t,addInteract:i,updaters:r}){let s=Ot(),a=[],o=Be(),l=new Set(Is(o).map(f=>f.id));function c(f,g){let p=r1(g);if(!p)return;let x=f.look.outfit,y=new ye,v=new de(new fe(2.8,1.9,2.4),pg());v.position.y=.95,v.castShadow=v.receiveShadow=!0,y.add(v);let M=new vi;M.moveTo(-1.4,0),M.lineTo(1.4,0),M.lineTo(0,1.08),M.closePath();let C=new de(new Wi(M,{depth:2.4,bevelEnabled:!1}),pg());C.position.set(0,1.9,-1.2),y.add(C);let S=fp(x,.28);for(let w of[-1,1]){let E=ee(new fe(1.98,.14,2.9),S,w*.78,2.5,0);E.rotation.z=-w*.66,y.add(E)}y.add(ee(new fe(.16,.16,2.95),fp(x,.4),0,3.08,0));let A=new ye;for(let w of[-1,1]){let E=ee(new fe(2,.12,2.94),"#FBFCFE",w*.78+w*.07,2.58,0);E.rotation.z=-w*.66,A.add(E)}let z=pp(),L=new Ne(.075,8,6);for(let w=0;w<=12;w++){let E=w/12,B=-1.55+E*3.1,O=1.93+(1-Math.abs(E-.5)*2)*1.12,I=new de(L,z[(w+g)%z.length]);I.position.set(B,O-.06,1.5),A.add(I)}y.add(oi(A,"winter")),y.add(ee(new fe(.34,.85,.34),"#A39A8F",.8,2.85,-.55)),y.add(ee(new fe(.72,1.12,.06),fp(x,.1),0,.56,1.22)),y.add(ee(new Ne(.05,8,6),"#F2C14E",.22,.55,1.27)),y.add(ee(new fe(1.3,.14,.55),"#8F6243",0,.07,1.45));let F=new ze({color:"#FFE2A0"});for(let w of[-1,1]){y.add(ee(new fe(.64,.64,.05),"#6E4B33",w*.92,1.18,1.21));let E=new de(new at(.52,.52),F);E.position.set(w*.92,1.18,1.24),y.add(E);for(let B of[-1,1])y.add(ee(new fe(.2,.62,.04),x,w*.92+B*.43,1.18,1.235));y.add(ee(new fe(.66,.16,.18),"#B9773E",w*.92,.82,1.3)),y.add(ee(new Et(.1,0),w<0?"#E07BB5":"#F2C14E",w*.92-.15,.95,1.3),ee(new Et(.1,0),"#D9553B",w*.92+.15,.95,1.3))}let $=new de(new at(1.3,.34),new ze({map:ht(Wt(f.name,{w:384,h:100,size:54,bg:"#FFF6E6",border:"#8F6243",radius:22,color:"#4A3528",font:"Jua",fit:350})),transparent:!0}));$.position.set(0,1.64,1.25),y.add($);let b=[0,1,2].map(w=>{let E=new Fn(new _n({map:s1(),transparent:!0,depthWrite:!1,opacity:.6}));return E.position.set(.8,3.4,-.55),y.add(E),{sp:E,off:w/3+g*.13}});r.push(w=>b.forEach(({sp:E,off:B})=>{let O=(w*.22+B)%1;E.position.set(.8+Math.sin(O*4+B*9)*.2,3.35+O*1.6,-.55-O*.3),E.scale.setScalar(.35+O*.7),E.material.opacity=.55*(1-O)}));let P=new ye;P.add(ee(new Ae(.04,.05,.85,6),"#6E4B33",0,.42,0)),P.add(ee(new fe(.3,.24,.42),"#E4605A",0,.95,0));let N=new ye;N.userData.dynamic=!0,N.position.set(.17,.92,-.1);let k=ee(new fe(.03,.24,.12),"#F7D58B",0,.12,0);N.add(k),P.add(N),P.position.set(1.15,0,1.85),y.add(P);let J=null;if(l.has(f.id)){let w=lg(-1.15,1.9,2.4);w.userData.dynamic=!0,y.add(w),r.push(E=>w.userData.update(E)),J=new ye,J.add(ee(new Ae(.06,.06,.7,6),"#B98A66",0,.35,0)),J.add(ee(new Ae(.42,.42,.06,18),"#FFFDF8",0,.72,0)),J.add(ee(new Ae(.3,.3,.22,18),"#F4B8C0",0,.86,0)),J.add(ee(new Ae(.31,.31,.05,18),"#FFFFFF",0,.98,0));for(let E=0;E<3;E++){let B=E*2.1;J.add(ee(new Ae(.02,.02,.14,6),"#F7D58B",Math.cos(B)*.15,1.07,Math.sin(B)*.15));let O=new de(new Ne(.035,6,4),new ze({color:"#FFB347"}));O.position.set(Math.cos(B)*.15,1.17,Math.sin(B)*.15),J.add(O)}J.position.set(-1.35,0,2.75),y.add(J)}y.position.set(p.x,0,p.z),n.add(y),t.push({minX:p.x-1.45,maxX:p.x+1.45,minZ:p.z-1.3,maxZ:p.z+1.3});let X=(w,E)=>{let B=new R(w,0,E).applyAxisAngle(new R(0,1,0),y.rotation.y);return{x:p.x+B.x,z:p.z+B.z}},j=X(1.15,1.85);if(e.push({x:j.x,z:j.z,r:.3}),J){let w=X(-1.35,2.75);e.push({x:w.x,z:w.z,r:.45})}let Y=wa({type:"family",...f.look,shadows:!1});Y.root.userData.dynamic=!0,Y.root.position.set(p.npcX,0,p.npcZ),l.has(f.id)&&Y.setParty(!0),n.add(Y.root);let G={x:Y.root.position.x,z:Y.root.position.z,r:.45};e.push(G);let Z=f.id===be(),ce=i(`house:${f.id}`,_(`${f.nick||f.role||f.name}\uB124 \uC9D1`,`${f.nick||f.role||f.name}'s house`),f.emoji||"\u{1F3E0}",_(`${f.nick||f.role||f.name}\uB124 \uC9D1 \uAD6C\uACBD`,`Visit ${f.nick||f.role||f.name}'s house`),p.npcX,p.npcZ,2.5,3.9);ce.label.position.z=p.z+1.1,ce.member=f.id,a.push({m:f,sp:p,g:y,npc:Y,npcCol:G,it:ce,flagPivot:N,badge:null,badgeText:"",bubbles:new Map,bub:null,bubT:0,sayT:1+g,sayIdx:0,near:!1,isMe:Z})}s.slice(0,el).forEach((f,g)=>c(f,g));function h(f){let g=[];if(l.has(f.m.id)&&g.push(_("\u{1F382} \uC0DD\uC77C!","\u{1F382} Birthday")),f.m.id===be()){let x=di().length;x&&g.push(`\u{1F48C} ${x}`)}let p=Ns(f.m.id).length;return p&&g.push(`\u{1F497} ${p}`),g.join("  ")}function u(f){let g=f.m.id,p=[];l.has(g)&&p.push(_("\uC624\uB298 \uB0B4 \uC0DD\uC77C\uC774\uC57C! \u{1F382}","It's my birthday today! \u{1F382}"));let x=Ii(Be()).find(v=>v.who===g);x&&p.push(`\u{1F4AC} ${dg(x.text,_(20,32))}`);let y=lt("letters").find(v=>v.who===g&&!Di(v));return y&&p.push(`\u2709\uFE0F ${dg(y.message.split(`
`)[0],_(18,30))}`),f.m.line&&p.push(f.m.line),p.length?p:[_("\uC5B4\uC11C \uC640! \u{1F64C}","Welcome! \u{1F64C}")]}function d(){let f=be(),g=Ot();g.forEach(p=>{a.length<el&&!a.some(x=>x.m.id===p.id)&&c(p,a.length)}),a.forEach(p=>{let x=g.find(C=>C.id===p.m.id);if(x){let C=JSON.stringify(x.look);if(p.lookKey&&C!==p.lookKey){let S=p.npc,A=wa({type:"family",...x.look,shadows:!1});A.root.position.copy(S.root.position),A.root.rotation.y=S.root.rotation.y,l.has(p.m.id)&&A.setParty(!0),n.remove(S.root),S.root.traverse(z=>{var L;return(L=z.geometry)==null?void 0:L.dispose()}),n.add(A.root),p.npc=A}p.lookKey=C,p.m=x}p.isMe=p.m.id===f,p.npc.root.visible=!p.isMe,p.npcCol.r=p.isMe?0:.45;let y=p.isMe?_("\u{1F3E0} \uB0B4 \uC9D1","\u{1F3E0} My house"):_(`${p.m.emoji||"\u{1F3E0}"} ${p.m.nick||p.m.role||p.m.name}\uB124 \uC9D1`,`${p.m.emoji||"\u{1F3E0}"} ${p.m.nick||p.m.role||p.m.name}'s house`);if(p.it.labelText!==y){p.it.labelText=y;let C=Er(y),S=p.it.label.material.map;p.it.label.material.map=C.material.map,p.it.label.material.needsUpdate=!0,S.dispose(),C.material.dispose()}p.it.text=p.isMe?_("\uB0B4 \uC9D1","My house"):_(`${p.m.nick||p.m.role||p.m.name}\uB124 \uC9D1`,`${p.m.nick||p.m.role||p.m.name}'s house`),p.it.action=p.isMe?_("\uB0B4 \uC9D1 \uB4E4\uC5B4\uAC00\uAE30","Go into my house"):_(`${p.m.nick||p.m.role||p.m.name}\uB124 \uC9D1 \uAD6C\uACBD`,`Visit ${p.m.nick||p.m.role||p.m.name}'s house`);let v=p.isMe&&di().length>0;p.flagPivot.rotation.z=v?-1.4:0;let M=h(p);M!==p.badgeText&&(p.badgeText=M,p.badge&&(n.remove(p.badge),p.badge.material.map.dispose(),p.badge.material.dispose(),p.badge=null),M&&(p.badge=Er(M,{scale:2.4,bg:"rgba(255,244,228,.96)",color:"#B5552B"}),p.badge.position.set(p.sp.x,4.45,p.sp.z),n.add(p.badge))),p.lines=u(p)})}d();function m(f,g,p,x=!1){a.forEach(y=>{if(y.badge){let L=Math.hypot(p.x-y.sp.x,p.z-y.sp.z);y.badge.visible=!x&&L<30,y.badge.material.opacity=os((30-L)/8,0,1)}if(y.isMe)return;let v=y.npc,M=p.x-v.root.position.x,C=p.z-v.root.position.z,S=Math.hypot(M,C);if(x){v.animate(f,0,g),y.bub&&(y.bub.visible=!1,y.bub=null);return}if(v.root.visible=S<48,!v.root.visible)return;v.animate(f,0,g);let A=S<7?os(Math.atan2(M,C)-v.root.rotation.y,-.9,.9):0;v.head.rotation.y+=(A-v.head.rotation.y)*Math.min(1,f*4);let z=S<4.2;if(z&&!y.near&&(v.wave(1.4),y.sayT=Math.min(y.sayT,.4)),y.near=z,y.sayT-=f,z&&y.sayT<=0&&!y.bub){let L=y.lines[y.sayIdx++%y.lines.length];if(!y.bubbles.has(L)){y.bubbles.size>6&&(y.bubbles.forEach($=>{n.remove($),$.material.map.dispose(),$.material.dispose()}),y.bubbles.clear());let F=Er(L,{scale:3.6});F.visible=!1,n.add(F),y.bubbles.set(L,F)}y.bub=y.bubbles.get(L),y.bub.position.set(v.root.position.x,2.75,v.root.position.z),y.bub.visible=!0,y.bubT=3,y.it.muted=!0,y.sayT=6+Math.random()*4}y.bub&&(y.bubT-=f,(y.bubT<=0||!z)&&(y.bub.visible=!1,y.bub=null,y.it.muted=!1))})}return{houses:a,refresh:d,update:m,npc:f=>{var g;return((g=a.find(p=>p.m.id===f))==null?void 0:g.npc)||null},spot:f=>{var g;return((g=a.find(p=>p.m.id===f))==null?void 0:g.sp)||null}}}function fg({group:n,colliders:e,addInteract:t,updaters:i}){let r=new ye;r.userData.dynamic=!0,r.position.set(En.x,0,En.z),n.add(r),r.add(ee(new Ae(1.5,1.7,.22,24),"#9C7A5E",0,.11,0)),r.add(ee(new Ae(1.35,1.35,.06,24),"#6B4A33",0,.23,0));for(let F=0;F<12;F++){let $=F/12*Math.PI*2;Math.abs(Math.sin($))>.9&&Math.cos($)>-.2&&Math.sin($)>0||r.add(ee(new fe(.12,.5,.12),"#A0703F",Math.cos($)*1.9,.25,Math.sin($)*1.9))}let s=ee(new ii(1.9,.035,6,40),"#A0703F",0,.42,0);s.rotation.x=Math.PI/2,r.add(s);let a=ee(new Ne(.16,10,8),"#8C6B55",0,.3,0);a.scale.set(1,.7,1.2);let o=new ye;o.add(ee(new Ae(.03,.04,.5,6),"#8DC175",0,.48,0));for(let F of[-1,1]){let $=ee(new Ne(.16,10,8),"#9ED08A",F*.15,.74,0);$.scale.set(1.3,.5,.8),$.rotation.z=F*.5,o.add($)}let l=new $t({color:"#86C174",gradientMap:Nn}),c=new ye;c.add(ee(new Ae(.08,.12,1.3,8),"#A47A5C",0,.85,0)),[[0,1.75,0,.55],[.35,1.45,.1,.38],[-.32,1.5,-.1,.4]].forEach(([F,$,b,P])=>{let N=ee(new Et(1,1),l,F,$,b);N.scale.setScalar(P),c.add(N)});let h=new ye;h.add(ee(new Ae(.22,.34,2.2,10),"#A47A5C",0,1.3,0));let u=[[0,3.1,0,1.25],[.9,2.65,.25,.9],[-.85,2.75,-.2,.95],[.15,3.85,-.1,.85],[-.3,2.6,.75,.75]];u.forEach(([F,$,b,P])=>{let N=ee(new Et(1,1),l,F,$,b);N.scale.setScalar(P),h.add(N)});let d=new ye,m=new ye,f=new Et(.13,0),g=new Ne(.15,10,8);for(let F=0;F<26;F++){let[$,b,P,N]=u[F%u.length],k=new R().setFromSphericalCoords(N*1.02,Math.acos(Math.random()*1.6-.6),Math.random()*Math.PI*2);d.add(ee(f,F%3?"#FFF6D8":"#F7E7A6",$+k.x,b+k.y,P+k.z)),F%2===0&&m.add(ee(g,F%4?"#F28C28":"#E9741F",$+k.x*.95,b+k.y*.95-.1,P+k.z*.95))}h.add(d,m),r.add(a,o,c,h),e.push({x:En.x,z:En.z,r:En.r});let p=Wt(Fi().name,{w:420,h:110,size:50,bg:"#FFF6E6",radius:26,color:"#5E7D4A",border:"#93A35A",fit:380}),x=new de(new at(1.5,.4),new ze({map:ht(p),transparent:!0})),y=ee(new Ae(.04,.05,.9,6),"#A47A5C",1.35,.45,2.2);x.position.set(1.35,.95,2.23),r.add(y,x),e.push({x:En.x+1.35,z:En.z+2.2,r:.2});let v=t("tree",Fi().name,"\u{1F331}",_("\uBB3C \uC8FC\uAE30","Water the tree"),En.x,En.z+.4,3.2,5.4),M=null,C="",S=-1,A=0;function z(F){a.visible=F===0,o.visible=F===1,c.visible=F===2,h.visible=F>=3,d.visible=F>=4,m.visible=F>=5,h.scale.setScalar(F>=5?1.2:F===4?1.1:1)}function L(){let F=Fi();if(F.stage!==S){let k=S>=0&&F.stage>S;S=F.stage,z(S),k&&(A=1)}let $={green:["#86C174","#A9B97A"],autumn:["#E39B3B","#C2A46A"],winter:["#EEF3F8","#D7DDE3"]}[ai()]||["#86C174","#A9B97A"];l.color.set(F.thirsty?$[1]:$[0]);let b=F.todayWho.length,P=k=>k.charAt(0).toUpperCase()+k.slice(1),N=F.thirsty?_("\u{1F4A7} \uBAA9\uB9D0\uB77C\uC694\u2026 \uBB3C\uC744 \uC8FC\uC138\uC694","\u{1F4A7} I'm thirsty\u2026 please water me"):b?_(`\u{1F4A7} \uC624\uB298 ${b}\uBA85\uC774 \uBB3C\uC744 \uC92C\uC5B4\uC694`,`\u{1F4A7} Watered by ${b} ${b===1?"person":"people"} today`):_(`\u{1F331} ${F.stageName} \xB7 \uBB3C ${F.total}\uBC88`,`\u{1F331} ${P(F.stageName)} \xB7 watered ${F.total}\xD7`);return N!==C&&(C=N,M&&(n.remove(M),M.material.map.dispose(),M.material.dispose()),M=Er(N,{scale:3.4,bg:"rgba(240,250,235,.95)",color:"#4F7A3E"}),M.position.set(En.x,4.7,En.z),n.add(M)),F}return L(),i.push((F,$)=>{if(A>0){A=Math.max(0,A-$/.9);let P=1+Math.sin((1-A)*Math.PI)*.25;r.scale.set(P,P,P)}else r.scale.x!==1&&r.scale.set(1,1,1);let b=Math.sin(F*1.1)*.03;h.rotation.z=b,c.rotation.z=b*1.5,o.rotation.z=b*2}),{it:v,refresh:L,top:new R(En.x,2.6,En.z)}}var gg=36,wr={s:.8,x:24-.8*20,z:18-.8*-15.5},Zc=(n,e)=>({x:wr.s*n+wr.x,z:wr.s*e+wr.z}),ps={...Zc(20,-8.4),r:1.7},ut={x:8.2,z:25.5,r:1.8},yg=(n,e)=>(n=String(n||""),n.length>e?n.slice(0,e-1)+"\u2026":n);function Fo(n,e,t,i,r){if(!Zt){let s=n.measureText(e).width;s>r&&(n.font=n.font.replace(/(\d+(?:\.\d+)?)px/,(a,o)=>`${Math.floor(o*r/s)}px`))}n.fillText(e,t,i)}function vg(n,e,t){let i=String(e).split(/(\s+)/),r=[],s="";for(let a of i){let o=s+a;for(n.measureText(o).width>t&&s.trim()?(r.push(s.trim()),s=a.trimStart()):s=o;n.measureText(s).width>t&&s.length>1;){let l=s.length;for(;l>1&&n.measureText(s.slice(0,l)).width>t;)l--;r.push(s.slice(0,l)),s=s.slice(l)}}return s.trim()&&r.push(s.trim()),r}function xg(n){var $;let e=window.FAMILY,t=new ye;n.add(t);let i=[],r=[],s=[],a=[];function o(b,P,N,k,J,X,j,Y=3.4){let G=Er(`${N} ${P}`);G.position.set(J,Y,X),t.add(G);let Z={id:b,text:P,emoji:N,action:k,pos:new R(J,0,X),r:j,label:G,baseY:Y,off:Math.random()*6};return s.push(Z),Z}let l=(b,P,N)=>new de(new at(P,N),new ze({map:ht(b),transparent:!0})),c=document.createElement("canvas");c.width=512,c.height=680;let h=null;function u(){let b=c.getContext("2d");b.clearRect(0,0,512,680),b.fillStyle="#FFFDF8",ri(b,0,0,512,680,24),b.fill(),b.lineWidth=10,b.strokeStyle="#B07A4F",ri(b,5,5,502,670,20),b.stroke(),b.textAlign="center",b.fillStyle="#B5552B",b.font="64px serif",b.fillText("\u{1F3E1}",256,105),b.font='56px "Jua"',Fo(b,Bt(),256,185,470);let P=ir();b.fillStyle="#7C6A66",b.font='28px "Gowun Dodum"',P>0&&b.fillText(_(`\uD568\uAED8\uD55C \uC9C0 ${P.toLocaleString("ko-KR")}\uC77C\uC9F8`,`Together for ${P.toLocaleString("en-US")} days`),256,232),b.fillStyle="#4A3B38",b.font='700 32px "Gowun Dodum"',b.fillText(_("\uC624\uB298 \uB2E4\uB140\uAC04 \uAC00\uC871","Visited today"),256,315);let N=rl();b.font='30px "Gowun Dodum"',N.length||(b.fillStyle="#9A8C88",b.fillText(_("\uC544\uC9C1 \uC544\uBB34\uB3C4 \uC548 \uC654\uC5B4\uC694","No one yet"),256,375)),N.slice(0,6).forEach((k,J)=>{let X=J%2,j=Math.floor(J/2);b.fillStyle=k.look.outfit,b.beginPath(),b.arc(X?300:70,368+j*62,12,0,7),b.fill(),b.fillStyle="#4A3B38",b.textAlign="left",b.fillText(yg(k.nick||k.role||k.name,_(6,10)),X?322:92,379+j*62),b.textAlign="center"}),b.fillStyle="#B5552B",b.font='26px "Gowun Dodum"',b.fillText(_("\uB204\uB974\uBA74 \uC6B0\uB9AC \uAC00\uC871 \uC18C\uAC1C","Tap to meet our family"),256,640),h&&(h.needsUpdate=!0)}{let b=new ye,P="#B98A66",N=ee(new fe(.1,3,.1),P,-.8,1.45,.1);N.rotation.z=.12;let k=ee(new fe(.1,3,.1),P,.8,1.45,.1);k.rotation.z=-.12;let J=ee(new fe(.1,3,.1),P,0,1.4,-.45);J.rotation.x=-.3;let X=ee(new fe(1.9,.08,.25),P,0,.75,.2),j=ee(new fe(1.9,2.5,.06),"#FFFDF8",0,2.05,.2);j.rotation.x=-.08,u();let Y=l(c,1.75,2.33);h=Y.material.map,Y.position.set(0,2.05,.235),Y.rotation.x=-.08,b.add(N,k,J,X,j,Y),b.position.set(-4.8,0,24),b.rotation.y=.35,t.add(b),i.push({x:-4.8,z:24,r:1}),o("family",_("\uC6B0\uB9AC \uAC00\uC871","Our family"),"\u{1F3E1}",_("\uAC00\uC871 \uC18C\uAC1C \uBCF4\uAE30","Meet the family"),-4.8,24,3,3.8)}let d=document.createElement("canvas");d.width=512,d.height=400;let m=null;function f(){let b=d.getContext("2d");b.fillStyle="#D9B38C",b.fillRect(0,0,512,400);for(let X=0;X<160;X++)b.fillStyle=X%2?"rgba(120,80,40,.12)":"rgba(255,255,255,.1)",b.fillRect(X*97%512,X*61%400,3,3);b.save(),b.translate(256,205),b.rotate(-.02),b.fillStyle="#FFFDF6",b.shadowColor="rgba(0,0,0,.25)",b.shadowBlur=12,b.fillRect(-215,-170,430,340),b.shadowColor="transparent",b.fillStyle="#E4605A",b.beginPath(),b.arc(0,-160,13,0,7),b.fill(),b.textAlign="center",b.fillStyle="#B5552B",b.font='36px "Jua"',Fo(b,_("\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38","\u{1F4AC} Question of the day"),0,-108,400);let P=Us();b.fillStyle="#4A3528",b.font='36px "Jua"';let N=P?P.q:_("\uC9C8\uBB38\uC744 \uC900\uBE44 \uC911\uC774\uC5D0\uC694","The question is on its way"),k=vg(b,N,380);if(!Zt&&k.length>3&&(b.font='32px "Jua"',k=vg(b,N,380),k.length>3)){let X=k[2];for(;X.length>1&&b.measureText(X+"\u2026").width>380;)X=X.slice(0,-1);k[2]=X.trimEnd()+"\u2026"}k.slice(0,3).forEach((X,j)=>b.fillText(X,0,-40+j*48));let J=P?Ii(P.day).length:0;b.fillStyle="#7C6A66",b.font='26px "Gowun Dodum"',Fo(b,J?_(`${J}\uBA85\uC774 \uB2F5\uD588\uC5B4\uC694 \xB7 \uB20C\uB7EC\uC11C \uB2F5\uD558\uAE30`,`${J} answered \xB7 Tap to answer`):_("\uCCAB \uBC88\uC9F8\uB85C \uB2F5\uD574 \uBCF4\uC138\uC694!","Be the first to answer"),0,140,400),b.restore(),m&&(m.needsUpdate=!0)}{let b=new ye,P="#A47A5C";for(let J of[-.95,.95])b.add(ee(new fe(.12,2.9,.12),P,J,1.45,0));b.add(ee(new fe(2.15,1.75,.1),P,0,2.05,-.03));let N=ee(new fe(2.5,.12,.55),"#B5452F",0,3.05,.05);N.rotation.x=.25,b.add(N),f();let k=l(d,1.95,1.52);m=k.material.map,k.position.set(0,2.05,.03),b.add(k),b.position.set(4.4,0,-1.8),b.rotation.y=-.55,t.add(b),i.push({x:4.4,z:-1.8,r:.9}),o("question",_("\uC624\uB298\uC758 \uC9C8\uBB38","Question of the day"),"\u{1F4AC}",_("\uC9C8\uBB38\uC5D0 \uB2F5\uD558\uAE30","Answer the question"),4.4,-1.8,3,3.75)}{let b=new ye,P="#E4605A";b.add(ee(new Ae(.2,.25,.5,10),"#8C6B55",0,.25,0));let N=ee(new fe(1,1.3,.8),P,0,1.15,0),k=ee(new Ae(.4,.4,1,20,1,!1,0,Math.PI),P,0,1.8,0);k.rotation.z=Math.PI/2;let J=ee(new fe(.6,.06,.05),"#4A2B28",0,1.55,.41),X=l(Wt(_("\uC6B0\uCCB4\uD1B5","Mailbox"),{w:256,h:128,size:58,bg:"#FFF6E6",radius:24,color:"#B5452F",fit:224}),.7,.35);X.position.set(0,1.1,.41);let j=[];for(let Y=0;Y<3;Y++){let G=ee(new fe(.4,.28,.02),Y===1?"#FFF3EA":"#FFFFFF",0,2.4,0);G.userData.dynamic=!0,b.add(G),j.push({l:G,off:Y*2.1})}b.add(N,k,J,X),b.position.set(4.8,0,23),b.rotation.y=-.4,t.add(b),a.push(Y=>j.forEach(({l:G,off:Z})=>{let ce=(Y*.35+Z/6.3)%1;G.position.set(Math.sin(ce*6+Z)*.5,2+ce*1.6,Math.cos(ce*5)*.3),G.rotation.set(ce*3,ce*5+Z,.3),G.visible=ce<.95})),i.push({x:4.8,z:23,r:.8}),o("mailbox",_("\uC548\uBD80 \uC6B0\uCCB4\uD1B5","Mailbox"),"\u2709\uFE0F",_("\uD3B8\uC9C0 \uC4F0\uAE30","Write a letter"),4.8,23,2.8,4.1)}let g=new ye;g.userData.dynamic=!0,t.add(g);let p=[];{g.add(ee(new Ae(ut.r+.3,ut.r+.4,.18,28),"#B98A66",ut.x,.09,ut.z)),g.add(ee(new Ae(ut.r+.05,ut.r+.05,.22,28),"#7A5A44",ut.x,.1,ut.z));let b=ee(new Ae(.05,.06,1.1,6),"#A47A5C",ut.x,.55,ut.z+ut.r+.5),P=l(Wt(_("\uAC00\uC871 \uC815\uC6D0","Family garden"),{w:360,h:110,size:50,bg:"#FFF6E6",radius:26,color:"#B5552B",fit:320}),1.3,.4);P.position.set(ut.x,1.15,ut.z+ut.r+.55);let N=P.clone();N.rotation.y=Math.PI,N.position.z-=.02,g.add(b,P,N),i.push({x:ut.x,z:ut.z,r:ut.r+.5})}let x=new Ae(.03,.03,.5,6),y=new Et(.16,0),v=new Ne(.06,8,6),M=b=>{let P=7;for(let N of String(b))P=P*31+N.charCodeAt(0)>>>0;return P};function C(b,P){if(p.length>=60)return null;let N=M(`${b.name}|${b.time||""}|${p.length}`),k=N%360/360*Math.PI*2,J=.25+(N>>9)%100/100*(ut.r-.55),X=ut.x+Math.cos(k)*J,j=ut.z+Math.sin(k)*J,Y=new ye;if(Y.add(ee(x,"#8DC175",0,.45,0)),Y.add(ee(y,b.color||ka(b.who),0,.75,0)),Y.add(ee(v,"#F7D58B",0,.75,.13)),p.length<24){let G=String(Pi(b.who,b.name)||"").slice(0,_(8,12)),Z=Er(G,{scale:1.5,bg:"rgba(255,253,248,.85)"});Z.position.y=1.12,Y.add(Z)}if(Y.position.set(X,0,j),Y.rotation.y=k,g.add(Y),p.push(Y),P){let G=0;Y.scale.setScalar(.01),a.push((Z,ce)=>{if(G>=1)return;G=Math.min(1,G+ce/.7);let w=1-Math.pow(1-G,3);Y.scale.setScalar(w)})}return new R(X,0,j)}{let b=new ye;b.add(ee(new Ae(.1,.12,3.2,8),"#A47A5C",0,1.6,0)),[[_("\uBAA8\uC774\uB294 \uACF3","Meeting place"),"#FFF6E6",.4],[_("\uBCF8\uAC00 \u2192","Family home \u2192"),"#F2B27A",-.5],[_("\uC8FC\uCC28 \uC548\uB0B4","Parking"),"#F2C14E",.9]].forEach(([N,k,J],X)=>{let j=new ye,Y=ee(new fe(1.5,.42,.08),k,.55,0,0),G=ee(new Ae(.21,.21,.08,3),k,1.35,0,0);G.rotation.x=Math.PI/2,G.rotation.y=Math.PI/2;let Z=l(Wt(N,{w:384,h:110,size:56,bg:null,fit:360}),1.4,.4);Z.position.set(.55,0,.05);let ce=Z.clone();ce.rotation.y=Math.PI,ce.position.z=-.05,j.add(Y,G,Z,ce),j.position.y=2.8-X*.55,j.rotation.y=J,b.add(j)}),b.position.set(-3.6,0,13.5),t.add(b),i.push({x:-3.6,z:13.5,r:.4}),o("directions",_("\uBAA8\uC774\uB294 \uACF3","Meeting place"),"\u{1F5FA}\uFE0F",_("\uAE38 \uC548\uB0B4 \uBCF4\uAE30","See directions"),-3.6,13.5,2.6,3.9)}{let b=new ye;b.add(ee(new fe(1,.75,1),"#B98A66",0,.38,0)),b.add(ee(new fe(1.25,1,1),"#F6E7CC",0,1.25,0)),b.add(ee(new fe(1.3,.08,1.05),"#E07B39",0,1.78,0)),b.add(ee(new fe(.6,.04,.12),"#4A3B38",0,1.83,0));let P=ee(new fe(.42,.3,.02),"#F7D58B",0,2,0);P.userData.dynamic=!0,b.add(P);let N=l(Wt(_("\uD22C\uD45C\uD568","Polls"),{w:256,h:110,size:54,bg:"#E07B39",radius:20,color:"#FFFFFF",fit:224}),.8,.34);N.position.set(0,1.3,.51),b.add(N),b.position.set(-13.5,0,2),b.rotation.y=.5,t.add(b),a.push(k=>{P.position.y=2+Math.sin(k*2.2)*.08,P.rotation.y=Math.sin(k)*.4}),i.push({x:-13.5,z:2,r:.9}),o("poll",_("\uAC00\uC871 \uD22C\uD45C\uD568","Family polls"),"\u{1F5F3}\uFE0F",_("\uD22C\uD45C\uD558\uAE30","Vote"),-13.5,2,3,3.2)}{let b=new ye,P="#B98A66";for(let j of[-.75,.75])b.add(ee(new fe(.1,2.8,.1),P,j,1.4,0));b.add(ee(new fe(1.8,2.1,.1),P,0,1.9,0));let N=document.createElement("canvas");N.width=480,N.height=560;let k=N.getContext("2d");k.fillStyle="#4E5F46",k.fillRect(0,0,480,560),k.fillStyle="#FFF8E7",k.textAlign="center",k.font='52px "Jua"',Fo(k,_("\uAC00\uC871 \uB2EC\uB825","Family calendar"),240,70,440);let J=Fs(5);k.font='28px "Gowun Dodum"',J.length||k.fillText(_("\uB2E4\uAC00\uC624\uB294 \uB0A0\uC774 \uC5C6\uC5B4\uC694","Nothing coming up"),240,260),J.forEach((j,Y)=>{let G=150+Y*80;k.font='28px "Gowun Dodum"',k.textAlign="left",k.fillStyle="#FFF8E7",Fo(k,`${j.emoji||"\u{1F4CC}"} ${yg(j.title,_(9,40))}`,28,G,300),k.textAlign="right",k.fillStyle=j.dday===0?"#F4B8C0":"#F7D58B",k.font='28px "Gowun Dodum"',k.fillText(xm(j.dday),454,G),k.textAlign="left",k.fillStyle="rgba(255,248,231,.6)",k.font='22px "Gowun Dodum"',k.fillText(It(j.key),70,G+30)});let X=l(N,1.62,1.9);X.position.set(0,1.9,.06),b.add(X),b.position.set(11,0,9.8),b.rotation.y=-.5,t.add(b),i.push({x:11,z:9.8,r:1}),o("calendar",_("\uAC00\uC871 \uB2EC\uB825","Family calendar"),"\u{1F4C5}",_("\uB2EC\uB825 \uBCF4\uAE30","Open the calendar"),11,9.8,2.8,3.6)}{let b=new ye;b.add(ee(new fe(2.4,1.1,1),"#F6E7CC",0,.55,0)),b.add(ee(new fe(2.5,.1,1.1),"#B07A4F",0,1.12,0));for(let k of[-1.1,1.1])b.add(ee(new Ae(.06,.06,2.4,8),"#FFFFFF",k,2.2,-.4));let P=8;for(let k=0;k<P;k++){let J=ee(new Ae(1.7,1.7,.5,3,1,!1,Math.PI/2+k/P*Math.PI,Math.PI/P),k%2?"#FFF6E6":"#E07B39",0,3.3,-.4);J.rotation.x=Math.PI/2,J.scale.set(1,1,.5),b.add(J)}let N=l(Wt("?",{w:256,h:256,size:190,bg:"#F2C14E",radius:128,color:"#FFFFFF"}),.9,.9);N.position.set(0,.6,.51),b.add(N),b.position.set(-20,0,-1.5),b.rotation.y=1.25,t.add(b),i.push({x:-20,z:-1.5,r:1.5}),o("quiz",_("\uAC00\uC871 \uD034\uC988","Family quiz"),"\u2753",_("\uD034\uC988 \uD480\uAE30","Take the quiz"),-20,-1.5,3.2,4.4)}let S;{let b=new ye,P=new Et(.34,0);for(let D=0;D<12;D++){let H=D/12*Math.PI*2,q=ee(P,D%2?"#9C948A":"#B5ADA2",Math.cos(H)*1.25,.18,Math.sin(H)*1.25);q.scale.set(1.15,.7,1),q.rotation.y=H,b.add(q)}b.add(ee(new Ae(1.1,1.1,.05,20),"#4A3A2E",0,.04,0));let N=new Ae(.11,.13,1.6,8);for(let D=0;D<4;D++){let H=ee(N,D%2?"#7A4E32":"#8A5A3B",0,.16+(D>1?.2:0),0);H.rotation.set(0,D*Math.PI/4+.3,Math.PI/2),b.add(H)}let k=[["#FF7A1A",.42,1.05],["#FFB23A",.3,.85],["#FFE58A",.17,.6]].map(([D,H,q],K)=>{let ie=new de(new bn(H,q,8),new ze({color:D,transparent:!0,opacity:.92}));return ie.position.y=.4+q/2,ie.userData={h:q,k:K,dynamic:!0},b.add(ie),ie}),J=document.createElement("canvas");J.width=J.height=128;let X=J.getContext("2d"),j=X.createRadialGradient(64,64,4,64,64,64);j.addColorStop(0,"rgba(255,190,90,.9)"),j.addColorStop(.4,"rgba(255,150,60,.35)"),j.addColorStop(1,"rgba(255,120,40,0)"),X.fillStyle=j,X.fillRect(0,0,128,128);let Y=new Fn(new _n({map:ht(J),blending:Lc,depthWrite:!1,transparent:!0,opacity:.7}));Y.position.y=.9,Y.scale.set(4.2,4.2,1),b.add(Y);let G=28,Z=new Float32Array(G*3),ce=[];for(let D=0;D<G;D++)ce.push([Math.random()*Math.PI*2,Math.random(),Math.random()*.35]);let w=new rt;w.setAttribute("position",new mt(Z,3));let E=new ns(w,new _r({color:"#FFC46B",size:.09,transparent:!0,opacity:.9,depthWrite:!1}));b.add(E);let B=new Ae(.32,.32,1.7,10);for(let D=0;D<4;D++){let H=D*Math.PI/2+Math.PI/4,q=ee(B,"#8F6243",Math.cos(H)*2.9,.3,Math.sin(H)*2.9);q.rotation.set(0,-H,Math.PI/2),b.add(q),i.push({x:Math.cos(H)*2.9,z:4+Math.sin(H)*2.9,r:.5})}let O=ee(new Ae(.45,.5,.12,12),"#A39A8F",1.75,.06,.25);b.add(O);let I=new yi(new Ne(.11,8,6),ft("#8A4B3A"),6);I.count=0,b.add(I),b.position.set(0,0,4),t.add(b);let V=0;a.push((D,H)=>{k.forEach(q=>{let{h:K,k:ie}=q.userData,T=1+Math.sin(D*(9+ie*3)+ie)*.12+V*.4;q.scale.set(1-(T-1)*.5,T,1-(T-1)*.5),q.position.y=.4+K*T/2,q.rotation.y=D*(1+ie)}),Y.material.opacity=.6+Math.sin(D*7)*.08+V*.3;for(let q=0;q<G;q++){let[K,ie,T]=ce[q],ae=(D*.45+ie)%1;Z[q*3]=Math.cos(K+ae*2)*(T+ae*.3),Z[q*3+2]=Math.sin(K+ae*2)*(T+ae*.3),Z[q*3+1]=.7+ae*2.4}w.attributes.position.needsUpdate=!0,V>0&&(V=Math.max(0,V-H*1.5))}),i.push({x:0,z:4,r:1.6}),o("campfire",_("\uBAA8\uB2E5\uBD88","Campfire"),"\u{1F525}",_("\uACE0\uAD6C\uB9C8 \uAD7D\uAE30","Roast a sweet potato"),0,4,3.4,3.4),S={toss(D,H,q){jc(D,H,new R(0,.8,4),"\u{1F360}",.75,()=>{V=1,q==null||q()})},setCount(D){D=Math.max(0,Math.min(6,D|0));let H=new Fe;for(let q=0;q<D;q++)H.makeRotationY(q*1.3),H.scale(new R(1.5,.8,.9)),H.setPosition(1.75+Math.cos(q*1.05)*.24,.18,.25+Math.sin(q*1.05)*.24),I.setMatrixAt(q,H);I.count=D,I.instanceMatrix.needsUpdate=!0}}}{let b=new ye,P=new Et(.9,1),N=new Et(.18,0);for(let k=0;k<47;k++){let J=-34.5+k*1.5,X=ee(P,hp(k),J,.8,-18.6);X.scale.set(1,1.1,.8),b.add(X),k%2===0&&b.add(ee(N,qc(k),J+.3,1.4,-17.9))}t.add(b),r.push({minX:-35.5,maxX:35.5,minZ:-19.6,maxZ:-17.6})}let A=mg({group:t,colliders:i,boxes:r,addInteract:o,updaters:a}),z=fg({group:t,colliders:i,addInteract:o,updaters:a});{let b=new ye,P="#9C6B44",N=3.2,k=2.4,J=.18,X=.9;b.add(ee(new fe(N+J,J,J),P,0,X+k,0)),b.add(ee(new fe(N+J,J,J),P,0,X,0));for(let G of[-1,1])b.add(ee(new fe(J,k,J),P,G*N/2,X+k/2,0)),b.add(ee(new fe(J,X,J),P,G*N/2,X/2,0));let j=l(Wt("FAMILY PHOTO",{w:512,h:110,size:60,bg:"#FFF6E6",radius:55,color:"#B5552B"}),2,.43);j.position.set(0,X+k+.4,.05),b.add(j);for(let G=0;G<18;G++){let Z=ee(new Et(.16,1),qc(G),-N/2+Ee(-.15,.3),X+Ee(0,1.1),Ee(-.1,.15));b.add(Z)}b.position.set(-11,0,19),b.rotation.y=.5,t.add(b);let Y=.5;for(let G of[-1,1])i.push({x:-11+Math.cos(Y)*G*N/2,z:19-Math.sin(Y)*G*N/2,r:.3});o("photozone",_("\uAC00\uC871 \uD3EC\uD1A0\uC874","Family photo zone"),"\u{1F4F8}",_("\uAC00\uC871\uC0AC\uC9C4 \uCC0D\uAE30","Take a family photo"),-11,19,3,4.6)}{let b=new ye;for(let k of[-1,1]){b.add(ee(new Ae(.16,.2,3.6,10),"#8F6243",k*2.7,1.8,0));for(let J=0;J<7;J++)b.add(ee(new Et(.17,1),qc(J+(k>0?1:0)),k*2.7+Ee(-.2,.2),.4+J*.45,Ee(-.2,.2)))}let P=l(Wt(Bt(),{w:768,h:150,size:74,bg:"#FFF6E6",border:"#B07A4F",radius:60,color:"#B5452F",fit:690}),5.2,1);P.position.set(0,3.7,.13);let N=P.clone();N.rotation.y=Math.PI,N.position.z=-.13,b.add(ee(new fe(5.8,1.15,.2),"#8F6243",0,3.7,0),P,N),b.position.set(0,0,34.5),t.add(b),i.push({x:-2.7,z:34.5,r:.3},{x:2.7,z:34.5,r:.3})}a1(t,i,r,a),o("museum",(($=e.museum)==null?void 0:$.title)||_("\uAC00\uC871 \uC0AC\uC9C4\uAD00","Family photo gallery"),"\u{1F5BC}\uFE0F",_("\uC0AC\uC9C4\uAD00 \uC785\uC7A5","Enter the gallery"),ps.x,ps.z,2.6,6.9);function L(){u(),f(),A.refresh(),z.refresh()}function F(b,P,N,k=!1){a.forEach(J=>J(P,b)),s.forEach(J=>{let X=N?Math.hypot(N.x-J.pos.x,N.z-J.pos.z):0,j=N&&J.pos.z>N.z+7;J.label.visible=!k&&X<gg&&!j&&!J.muted,J.label.material.opacity=os((gg-X)/9,0,1),J.label.position.y=J.baseY+Math.sin(P*2+J.off)*.12}),N&&A.update(b,P,N,k)}return up(t),{group:t,colliders:i,boxes:r,interactables:s,update:F,refresh:L,plantFlower:C,flowerCount:()=>p.length,campfire:S,bed:ut,houses:A,familyTree:z}}function a1(n,e,t,i){var $,b;let r=window.FAMILY,s=new ye,a=e.length,o=20,l=-10.2,c="#F1E0C2",h="#FFF8EC",u="#B5452F";s.add(ee(new fe(15,.4,13),"#D8C3A0",o,.2,-15.5));for(let P=0;P<3;P++)s.add(ee(new fe(6-P*.6,.13,.45),"#D8C3A0",o,.065+P*.13,-8.3-P*.45));s.add(ee(new fe(13,5.8,10),c,o,3.3,-15.3));let d=new Ae(.34,.38,5.4,16),m=new fe(.9,.25,.9);[14,16.2,18.3,21.7,23.8,26].forEach(P=>{s.add(ee(d,h,P,3.1,-9.4)),s.add(ee(m,h,P,5.9,-9.4)),s.add(ee(m,h,P,.52,-9.4))}),s.add(ee(new fe(14.2,.6,11.8),h,o,6.3,-14.9));let f=new vi;f.moveTo(-7.4,0),f.lineTo(7.4,0),f.lineTo(0,2.4),f.closePath();let g=ee(new Wi(f,{depth:11.8,bevelEnabled:!1}),u,o,6.6,-20.8);s.add(g);let p=ee(new Wi((()=>{let P=new vi;return P.moveTo(-6.6,.25),P.lineTo(6.6,.25),P.lineTo(0,2.05),P.closePath(),P})(),{depth:.05,bevelEnabled:!1}),h,o,6.6,-8.98);s.add(p);let x=new vi;x.moveTo(0,-.35),x.bezierCurveTo(-.6,.05,-.35,.5,0,.25),x.bezierCurveTo(.35,.5,.6,.05,0,-.35);let y=ee(new Wi(x,{depth:.1,bevelEnabled:!1}),"#F2C14E",o,7.5,-8.9);y.scale.setScalar(.9),s.add(y);let v=new de(new at(6,.9),new ze({map:ht(Wt((($=r.museum)==null?void 0:$.title)||_("\uAC00\uC871 \uC0AC\uC9C4\uAD00","Family photo gallery"),{w:1024,h:150,size:84,bg:"#FFF6E6",border:"#B07A4F",radius:75,color:"#B5452F",fit:930})),transparent:!0}));v.position.set(o,5.3,l+.02),s.add(v),s.add(ee(new fe(2.9,3.7,.2),"#8F6243",o,2.25,l));let M=ee(new fe(2.5,3.4,.22),"#9C6B4E",o,2.1,l+.02);s.add(M);let C=new de(new at(2.1,1.1),new ze({color:"#FFF1C9",transparent:!0,opacity:.9}));C.position.set(o,3,l+.15),s.add(C);let S=ee(new Ne(.08,8,6),"#E2B865",o+.9,1.9,l+.15);s.add(S);let A=((b=r.museum)==null?void 0:b.themes)||[];[15.2,17.2,22.8,24.8].forEach((P,N)=>{var Y,G;let k=A[N%Math.max(1,A.length)],J=Zt?(Y=k==null?void 0:k.title)==null?void 0:Y.slice(0,4):(k==null?void 0:k.banner)||((G=k==null?void 0:k.title)==null?void 0:G.split(" ").reduce((Z,ce)=>ce.length>Z.length?ce:Z,"")),X=Wt(k?[k.emoji]:["\u2665"],{w:128,h:320,size:70,bg:(k==null?void 0:k.color)||"#F4B8C0",radius:16,color:"#fff",sub:J,subSize:22}),j=new de(new at(.8,2),new ze({map:ht(X),transparent:!0}));j.position.set(P,3.2,l+.03),s.add(j)});let z=(P,N)=>{s.add(ee(new Ae(.35,.28,.6,12),"#B9773E",P,.3,N));let k=ee(new Et(.5,1),"#93A35A",P,.95,N);s.add(k);for(let J=0;J<4;J++)s.add(ee(new Et(.12,0),["#F4A6C6","#FFFFFF","#E07BB5"][J%3],P+Ee(-.35,.35),1.1+Ee(0,.3),N+.3));e.push({x:P,z:N,r:.5})};z(16.5,-7.8),z(23.5,-7.8);for(let P of[13.45,26.55])for(let N of[-12.5,-15.5,-18.5]){let k=new de(new at(1.6,2.2),new ze({color:"#CDE9F5"}));k.position.set(P+(P<o?-.02:.02),3.4,N),k.rotation.y=P<o?-Math.PI/2:Math.PI/2,s.add(k)}s.position.set(wr.x,0,wr.z),s.scale.setScalar(wr.s),n.add(s);for(let P=a;P<e.length;P++){let N=e[P],k=Zc(N.x,N.z);N.x=k.x,N.z=k.z,N.r*=wr.s}y.userData.dynamic=C.userData.dynamic=!0,i.push(P=>{y.position.y=7.5+Math.sin(P*2)*.06,C.material.opacity=.75+Math.sin(P*3)*.2});let L=Zc(12.3,-22.2),F=Zc(27.7,-9);t.push({minX:L.x,maxX:F.x,minZ:L.z,maxZ:F.z})}var _g=new R(1e3,0,0),tn=-3.2,gp=3,bg=3.5,Eg=2.7,yp=2.7,o1=xi?768:1024,l1=16,c1=34;function h1(){let n=document.createElement("canvas");n.width=256,n.height=256;let e=n.getContext("2d"),t=["#E7C9A3","#E1C09A","#EBD0AD","#DDBB94"];for(let r=0;r<8;r++)e.fillStyle=t[r%4],e.fillRect(0,r*32,256,32),e.fillStyle="rgba(150,110,80,.18)",e.fillRect(0,r*32,256,2),e.fillRect(r*97%256,r*32,2,32);let i=ht(n);return i.wrapS=i.wrapT=fi,i}function vp(n,e,t){if(Zt)return;let i=n.measureText(e).width;i>t&&(n.font=n.font.replace(/(\d+(?:\.\d+)?)px/,(r,s)=>`${Math.floor(s*t/i)}px`))}function Mg(n,e=.6){return new we(n).lerp(new we("#FFFFFF"),e)}function wg(n){var w;let e=window.FAMILY,t=new ye;t.position.copy(_g),t.visible=!1,n.add(t);let i=As(),r=[],s=[],a=[],o=2;i.forEach((E,B)=>{let O=o,I=O+1.6,V=E.photos.map((H,q)=>({...H,x:O+4.4+q*bg})),D=O+4.4+Math.max(0,E.photos.length-1)*bg+2.2;a.push({theme:E,ti:B,x0:O,x1:D,headerX:I}),s.push({theme:E,ti:B,x:I}),V.forEach(H=>r.push({...H,ti:B})),o=D+1.2});let l=o+3.5,c=-9,h=l-c,u=(c+l)/2,d=h1();d.repeat.set(h/4,14/4);let m=new de(new at(h,16),new $t({map:d,gradientMap:Nn}));m.rotation.x=-Math.PI/2,m.position.set(u,0,4.6),t.add(m);let f=ft("#FFF6EA"),g=new de(new fe(h,9,.4),f);g.position.set(u,4.5,tn-.2),t.add(g);for(let E of[c,l]){let B=new de(new fe(.4,9,16),f);B.position.set(E,4.5,4.6),t.add(B)}let p=new de(new at(h,16),ft("#FFFDF8"));p.rotation.x=Math.PI/2,p.position.set(u,8.6,4.6),t.add(p);let x=new de(new fe(h,.18,.12),ft("#B07A4F"));x.position.set(u,5.5,tn+.06),t.add(x);let y=new de(new fe(h,.3,.1),ft("#C9A27E"));y.position.set(u,.15,tn+.05),t.add(y);let v=-6.2,M=new de(new fe(2.9,3.9,.12),ft("#B07A4F"));M.position.set(v,1.95,tn+.06);let C=new de(new fe(2.5,3.6,.1),ft("#9C6B4E"));C.position.set(v,1.8,tn+.14);let S=new de(new at(1.8,.5),new ze({map:ht(Wt(_("\u{1F6AA} \uB098\uAC00\uB294 \uBB38","\u{1F6AA} Exit"),{w:360,h:100,size:46,bg:"#FFFDF8",radius:50,color:"#4A3B38"})),transparent:!0}));S.position.set(v,4.3,tn+.08),t.add(M,C,S);let A=document.createElement("canvas");A.width=900,A.height=700;{let E=A.getContext("2d");E.fillStyle="#FFFDF8",ri(E,0,0,900,700,40),E.fill(),E.strokeStyle="#B07A4F",E.lineWidth=8,ri(E,20,20,860,660,30),E.stroke(),E.textAlign="center",E.fillStyle="#E07B39",E.font='28px "Gowun Dodum"',E.fillText("P H O T O   M U S E U M",450,110),E.fillStyle="#4A3B38",E.font='74px "Jua"';let B=((w=e.museum)==null?void 0:w.title)||_("\uC6B0\uB9AC \uAC00\uC871 \uC0AC\uC9C4\uAD00","Our family photo gallery");vp(E,B,820),E.fillText(B,450,210),E.font='36px "Jua"',E.fillStyle="#7C6A66",E.fillText(_(`${e.name||"\uC6B0\uB9AC"} \uB9C8\uC744`,Bt()),450,280),i.forEach((O,I)=>{let V=_(`${O.emoji}  ${O.title} \xB7 ${O.photos.length}\uC7A5`,`${O.emoji}  ${O.title} \xB7 ${O.photos.length} ${O.photos.length===1?"photo":"photos"}`);E.font='30px "Gowun Dodum"',vp(E,V,820),E.fillText(V,450,370+I*52)}),E.fillStyle="#B5552B",E.font='28px "Gowun Dodum"',E.fillText(_("\u2192 \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC5B4\uAC00\uBA70 \uAD00\uB78C\uD574 \uC8FC\uC138\uC694","\u2192 Walk to the right to see the photos"),450,650)}let z=new de(new at(4.2,3.27),new ze({map:ht(A)}));z.position.set(-1.6,3,tn+.05),t.add(z);let L=new fe(.9,.12,.35),F=new ze({color:"#FFF1C9"});a.forEach(E=>{let B=E.theme,O=E.x1-E.x0,I=Mg(B.color,.55),V=new de(new at(O,1.4),new $t({color:I,gradientMap:Nn}));V.position.set((E.x0+E.x1)/2,.7,tn+.02),t.add(V);let D=new de(new at(O,.5),V.material);D.position.set((E.x0+E.x1)/2,6,tn+.02),t.add(D);let H=new de(new at(O-.6,3.2),new $t({color:Mg(B.color,.3),gradientMap:Nn}));H.rotation.x=-Math.PI/2,H.position.set((E.x0+E.x1)/2,.01,.4),t.add(H);let q=document.createElement("canvas");q.width=560,q.height=800;let K=q.getContext("2d");K.fillStyle=B.color,ri(K,0,0,560,800,36),K.fill(),K.fillStyle="rgba(255,255,255,.9)",ri(K,24,24,512,752,26),K.fill(),K.textAlign="center",K.textBaseline="middle",K.font="150px serif",K.fillText(B.emoji||"\u{1F4F7}",280,190),K.fillStyle="#4A3B38",K.font='66px "Jua"',vp(K,B.title,480),K.fillText(B.title,280,360),K.fillStyle="#7C6A66",K.font='30px "Gowun Dodum"',u1(K,B.subtitle||"",280,450,440,44),K.fillStyle="#B5552B",K.font='28px "Gowun Dodum"',K.fillText(_(`\uC0AC\uC9C4 ${B.photos.length}\uC7A5`,`${B.photos.length} ${B.photos.length===1?"photo":"photos"}`),280,700);let ie=new de(new at(2.3,3.29),new ze({map:ht(q)}));ie.position.set(E.headerX,3,tn+.05),t.add(ie);let T=Wt([`${B.emoji} ${!Zt&&B.banner?B.banner:B.title}`],{w:640,h:140,size:64,bg:B.color,radius:30,color:"#FFFFFF",fit:590}),ae=new de(new at(3.2,.7),new ze({map:ht(T),transparent:!0}));if(ae.position.set(E.headerX+.4,6.9,tn+.1),t.add(ae),E.x1-E.x0>9){let Q=(E.x0+E.x1)/2,te=new de(new fe(2.4,.2,.7),ft("#B98A66"));te.position.set(Q,.55,4.3);let le=new de(new fe(.15,.5,.6),ft("#8C6B55"));le.position.set(Q-1,.25,4.3);let me=le.clone();me.position.x=Q+1,t.add(te,le,me)}});let $=new at(1,1),b=new fe(1,1,.12),P=[ft("#B07A4F"),ft("#FFFFFF"),ft("#B98A66")],N=new ze({color:"#F3E9DA"});r.forEach((E,B)=>{let O=new de(b,P[E.ti%P.length]),I=new de($,N);O.position.set(E.x,gp,tn+.07),I.position.set(E.x,gp,tn+.135),t.add(O,I);let V=new de(L,F);V.position.set(E.x,4.9,tn+.25),t.add(V),E.frame=O,E.photo=I,E.state="idle",k(E,2.2,2.2)});function k(E,B,O){E.photo.scale.set(B,O,1),E.frame.scale.set(B+.26,O+.26,1)}function J(E){if(E.placard){E.placard.visible=!0;return}let B=`${String(E.idx+1).padStart(2,"0")}${E.caption?" \xB7 "+E.caption:""}`,O=_(22,40),I=Wt(B.length>O?B.slice(0,O-1)+"\u2026":B,{w:512,h:90,size:34,bg:"#FFFDF8",radius:12,color:"#4A3B38",font:"Gowun Dodum",fit:470}),V=new de(new at(1.8,.32),new ze({map:ht(I),transparent:!0})),D=gp-E.photo.scale.y/2-.45;V.position.set(E.x,D,tn+.06),t.add(V),E.placard=V}function X(E){var B;E.photo.material!==N&&((B=E.photo.material.map)==null||B.dispose(),E.photo.material.dispose()),E.photo.material=N,E.state="idle",E.placard&&(E.placard.visible=!1),k(E,2.2,2.2)}let j=0;function Y(E){E.state="loading",j++;let B=new Image;B.decoding="async";let O=setTimeout(()=>{E.state==="loading"&&(B.onload=B.onerror=null,G(E,Fr(E.theme,E.idx,E.src),1,!1))},8e3);B.onload=()=>{clearTimeout(O);let I=Math.min(1,o1/Math.max(B.width,B.height)),V=document.createElement("canvas");V.width=Math.round(B.width*I),V.height=Math.round(B.height*I);let D=V.getContext("2d");D.drawImage(B,0,0,V.width,V.height);try{D.getImageData(0,0,1,1),G(E,V,B.width/B.height,!0)}catch{let q=Math.round(600/(B.width/B.height));G(E,Fr(E.theme,E.idx,_("(\uD30C\uC77C\uB85C \uC5F4\uC5C8\uC744 \uB54C\uB9CC \uBCF4\uC774\uB294 \uC548\uB0B4)","(shown only when opened as a file)"),600,q,_("\u{1F50D} \uD06C\uAC8C \uBCF4\uAE30\uB97C \uB20C\uB7EC \uD655\uC778\uD558\uC138\uC694","\u{1F50D} Tap 'View larger' to see it")),B.width/B.height,!0)}},B.onerror=()=>{clearTimeout(O),G(E,Fr(E.theme,E.idx,E.src),1,!1)},B.src=Ir(E)}function G(E,B,O,I){j--,E.state="done",E.ok=I,E.photo.material!==N&&E.photo.material.dispose(),E.photo.material=new ze({map:ht(B)});let V=Eg,D=Eg/O;D>yp&&(D=yp,V=yp*O),k(E,V,D),J(E)}let Z=_g,ce=new R(Z.x+v,0,1.2);return{group:t,themes:i,sections:a,entries:r,spawn:ce,themeStart(E){let B=a[E];return new R(Z.x+B.headerX+1.2,0,1.2)},clamp(E){E.x=Math.min(Z.x+l-.8,Math.max(Z.x+c+.8,E.x)),E.z=Math.min(Z.z+3.2,Math.max(Z.z+tn+1,E.z))},currentTheme(E){let B=E.x-Z.x,O=a.find(I=>B>=I.x0-.6&&B<=I.x1+.6);return O?O.ti:-1},nearest(E){let B=E.x-Z.x;if(Math.abs(B-v)<1.8)return{type:"exit",emoji:"\u{1F6AA}",action:_("\uBC16\uC73C\uB85C \uB098\uAC00\uAE30","Go outside")};if(Math.abs(B- -1.6)<2)return{type:"welcome",emoji:"\u{1F4DA}",action:_("\uC804\uCCB4 \uC568\uBC94 \uBCF4\uAE30","See full album")};let O=s.find(D=>Math.abs(B-D.x)<1.3);if(O)return{type:"header",ti:O.ti,emoji:O.theme.emoji||"\u{1F4DA}",action:_(`${O.theme.title} \uC568\uBC94`,`${O.theme.title} album`)};let I=null,V=1.75;for(let D of r){let H=Math.abs(B-D.x);H<V&&(V=H,I=D)}return I?{type:"photo",entry:I,ti:I.ti,idx:I.idx,emoji:"\u{1F50D}",action:_("\uD06C\uAC8C \uBCF4\uAE30","View larger")}:null},update(E,B,O){let I=O.x-Z.x;for(let V of r){let D=Math.abs(I-V.x);V.state==="idle"&&D<l1&&j<3?Y(V):V.state==="done"&&D>c1&&X(V)}}}}function u1(n,e,t,i,r,s){let a=e.split(" "),o="",l=i;for(let c of a){let h=o?o+" "+c:c;n.measureText(h).width>r&&o?(n.fillText(o,t,l),o=c,l+=s):o=h}o&&n.fillText(o,t,l)}var Qc=window.FAMILY,qt=n=>document.querySelector(n),d1=qt("#phone"),Lt={w:1,h:1,left:0,top:0},Pg=()=>Lt.w/Lt.h<.8,p1=n=>new Promise(e=>setTimeout(e,n)),Je,dt,ln,on,Oo,Bn,We,jt,Mn,ms,Rp=[],Ig=[],Si=!1,Ct=null,Sg=-2,fs=1,ih=!1,gs=0,No=0,Tg=0;function Cp(){let n=Math.min(devicePixelRatio||1,xi?1.75:1.5);return gs>=1&&(n=Math.min(n,1.25)),gs>=2&&(n=1),document.body.classList.contains("wide")&&(n=Math.min(n,1)),n}function m1(){try{let n=Je.getContext(),e=n.getExtension("WEBGL_debug_renderer_info"),t=e?String(n.getParameter(e.UNMASKED_RENDERER_WEBGL)):"";return/Intel|Iris|UHD|HD Graphics|SwiftShader|llvmpipe|Mali-|Adreno \(TM\) [1-5]|PowerVR/i.test(t)}catch{return!1}}var wi={outfit:"#8FB8DE",hair:"#5A3A2A",longHair:!1},ys="day",On=null,rh=new Ac,f1=new R(16,34,14),W={pos:new R(0,0,31),vel:new R,yaw:Math.PI,y:0,vy:0,mode:"out",busy:!1,doorCooldown:0,target:null,via:[],pending:null,targetT:0,moveT:0,stuckT:0,swoopT:0,posing:null},li=new Set,Ca={x:0,y:0},Sr={x:-11,z:19,ang:.5},g1=["family","mailbox","directions","campfire","question","calendar","poll","quiz","house","tree","photozone","museum"],Fg=n=>{try{dispatchEvent(new CustomEvent("wv:visit",{detail:n}))}catch{}};async function Dg({character:n,onProgress:e=()=>{}}={}){var a;n&&(wi={...wi,...n}),await Promise.race([Promise.all(['40px "Jua"','40px "Gowun Dodum"','40px "Gaegu"'].map(o=>document.fonts.load(o))),new Promise(o=>setTimeout(o,3e3))]),e(35),Bg();let t=xi&&(navigator.deviceMemory&&navigator.deviceMemory<=2||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4);Je=new vo({antialias:!t,powerPreference:"high-performance"}),fs=Cp(),Je.setPixelRatio(fs),Je.shadowMap.enabled=!0,Je.shadowMap.type=Cc,Je.outputColorSpace=St,qt("#app").appendChild(Je.domElement),Je.domElement.addEventListener("webglcontextlost",o=>{o.preventDefault(),ih=!0,nt(_("\uD654\uBA74\uC744 \uB2E4\uC2DC \uADF8\uB9AC\uB294 \uC911\u2026","Redrawing the screen\u2026"))}),Je.domElement.addEventListener("webglcontextrestored",()=>{ih=!1,Je.setPixelRatio(fs),Je.setSize(Lt.w,Lt.h),La()}),dt=new xo,dt.fog=new pc(Ut.day.fog,50,150),ln=new Qt(60,1,.1,900),Oo=new Ao(Ut.day.hemi,Ut.day.ground,Ut.day.hemiI),dt.add(Oo),on=new Ro(Ut.day.sun,Ut.day.sunI),on.castShadow=!0;let i=xi?1024:1536;on.shadow.mapSize.set(i,i),Object.assign(on.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:90}),on.shadow.bias=-5e-4,on.shadow.normalBias=.03,dt.add(on,on.target),We=xg(dt),Bn=ug(dt,(o,l)=>We.colliders.some(c=>Math.hypot(o-c.x,l-c.z)<c.r+.8)||We.boxes.some(c=>o>c.minX-.8&&o<c.maxX+.8&&l>c.minZ-.8&&l<c.maxZ+.8)),e(65),jt=wg(dt),e(85),Rp=[...Bn.colliders,...We.colliders],Ig=We.boxes,Ag(!1),We.campfire.setCount(kg());let s=null;if(addEventListener("family:data",()=>{clearTimeout(s),s=setTimeout(()=>{Ag(!1),We.refresh()},80)}),addEventListener("family:read",()=>We.houses.refresh()),addEventListener("family:heart",o=>{var l;return x1((l=o.detail)==null?void 0:l.to)}),addEventListener("family:water",o=>_1(o.detail)),addEventListener("family:look",o=>{_p(o.detail||{}),We.houses.refresh()}),addEventListener("family:me",()=>{_p(_i()),We.refresh()}),addEventListener("family:season",o=>{let l=Bn.setSeason(o.detail);W.mode==="out"&&ch(l),We.refresh()}),ms=new de(new ss(.32,.48,24),new ze({color:"#E07B39",transparent:!0,opacity:0,depthWrite:!1})),ms.rotation.x=-Math.PI/2,ms.position.y=.05,dt.add(ms),Ng(),E1(),L1(),qt("#btn-shot").onclick=()=>th(!1),(a=qt("#btn-tour"))==null||a.addEventListener("click",()=>Zi(_("\uD22C\uC5B4\uB97C \uBA48\uCDC4\uC5B4\uC694. \uB9C8\uC74C\uB300\uB85C \uB458\uB7EC\uBCF4\uC138\uC694","Tour stopped. Look around as you like"))),addEventListener("resize",ko),document.addEventListener("visibilitychange",()=>{document.hidden||rh.getDelta()}),ko(),eh(b1()),(t||m1())&&Hg(1),La(),Gg(),Qc.demoPhotos){let o=jt.themes.flatMap(h=>h.photos),l=window.requestIdleCallback||(h=>setTimeout(h,120)),c=()=>{let h=o.shift();if(h){try{Ir(h)}catch{}l(c)}};l(c)}return/debug/.test(location.hash)&&(window.__wv={scene:dt,camera:ln,goTo:o=>Pp(We.interactables.find(l=>l.id===o)),takePhoto:th,enterMuseum:lh,exitMuseum:hh,cycleTime:Sp,startTour:Lg,stopTour:Zi,applyTime:eh,state:W,props:We,flowerCount:()=>We.flowerCount(),interact:o=>ah(We.interactables.find(l=>l.id===o)),npcVisible:o=>{var l;return!!((l=We.houses.npc(o))!=null&&l.root.visible)},treeStage:()=>We.familyTree.refresh().stage,current:()=>(Ct==null?void 0:Ct.id)||"",pos:()=>[W.pos.x,W.pos.z],setSeason:o=>tp(o),season:()=>Bn.season,stats:()=>{var h;let o=0,l=0;dt.traverse(u=>{if(u.isMesh||u.isSprite||u.isPoints||u.isLine){o++;let d=!0,m=u;for(;m;){if(!m.visible){d=!1;break}m=m.parent}d&&l++}});let c=Je.info;return{calls:c.render.calls,tris:c.render.triangles,geos:c.memory.geometries,tex:c.memory.textures,programs:(h=c.programs)==null?void 0:h.length,objects:o,visible:l,dpr:Je.getPixelRatio(),level:gs}}}),{themes:jt.themes,start:v1,setCharacter:_p,enterMuseum:()=>lh(),letterSent:Ug,takePhoto:o=>th(!0,o),portrait:y1,resize:()=>{ko(),La()},startTour:Lg,stopTour:Zi,isTouring:()=>!!On,setTime:eh,getTime:()=>ys,cycleTime:Sp}}var Ei=480,ji=600,Do=null,xp=new Uint8ClampedArray(256).map((n,e)=>{let t=e/255;return Math.round(255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055))});function y1(n={}){if(!Je||ih)return null;if(!Do){let m=new xo;m.add(new Ao(Ut.day.hemi,Ut.day.ground,Ut.day.hemiI));let f=new Ro(Ut.day.sun,Ut.day.sunI);f.position.set(2.5,5,6),m.add(f);let g=new Qt(26,Ei/ji,.1,30);g.position.set(0,1,4.6),g.lookAt(0,.8,0),Do={s:m,cam:g,rt:new Qn(Ei,ji),buf:new Uint8Array(Ei*ji*4),big:document.createElement("canvas")},Do.big.width=Ei,Do.big.height=ji}let{s:e,cam:t,rt:i,buf:r,big:s}=Do,a=wa({type:"family",...n,shadows:!1});a.root.rotation.y=.32,a.animate(0,0,0),e.add(a.root);let o=Je.getRenderTarget(),l=Je.getClearColor(new we),c=Je.getClearAlpha();Je.setRenderTarget(i),Je.setClearColor(0,0),Je.clear(),Je.render(e,t),Je.readRenderTargetPixels(i,0,0,Ei,ji,r),Je.setRenderTarget(o),Je.setClearColor(l,c),e.remove(a.root),a.root.traverse(m=>{var f;return(f=m.geometry)==null?void 0:f.dispose()});let h=new ImageData(Ei,ji);for(let m=0;m<ji;m++){let f=(ji-1-m)*Ei*4,g=m*Ei*4;for(let p=0;p<Ei*4;p+=4)h.data[g+p]=xp[r[f+p]],h.data[g+p+1]=xp[r[f+p+1]],h.data[g+p+2]=xp[r[f+p+2]],h.data[g+p+3]=r[f+p+3]}s.getContext("2d").putImageData(h,0,0);let u=document.createElement("canvas");u.width=Ei/2,u.height=ji/2;let d=u.getContext("2d");return d.imageSmoothingQuality="high",d.drawImage(s,0,0,u.width,u.height),u.toDataURL("image/png")}function v1({hint:n=!0}={}){Si=!0,W.swoopT=1.8,Bo=nh=0,et.saved()&&et.setEnabled(!0);let e=0;try{e=+localStorage.getItem("family-hints")||0,localStorage.setItem("family-hints",String(e+1))}catch{}n&&e<2&&setTimeout(()=>nt(_("\u{1F446} \uD654\uBA74\uC744 \uB04C\uBA74 \uAC77\uACE0, \uC774\uB984\uD45C\uB97C \uB204\uB974\uBA74 \uCC3E\uC544\uAC00\uC694","\u{1F446} Drag to walk, tap a name tag to go there"),4200),900);let t=ys==="night"?_("\u{1F319} \uBC24\uC5D0 \uC654\uB124\uC694. \uAC00\uB85C\uB4F1\uC744 \uCF1C \uB450\uC5C8\uC5B4\uC694","\u{1F319} You came at night. We left the streetlights on"):ys==="dusk"?_("\u{1F307} \uB178\uC744 \uC9C0\uB294 \uB9C8\uC744\uC774\uC5D0\uC694. \uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694","\u{1F307} The sun is setting over the village. Take your time"):null;t&&setTimeout(()=>nt(t,3600),5600);let i=Is();i.length&&setTimeout(()=>{or(["\u{1F382}","\u{1F389}","\u{1F388}","\u{1F497}","\u2728"]),et.sfx("birthday"),nt(_(`\u{1F382} \uC624\uB298\uC740 ${i.map(r=>r.nick||r.role||r.name).join(", ")} \uC0DD\uC77C\uC774\uC5D0\uC694! \uC9D1 \uC55E\uC5D0 \uCF00\uC774\uD06C\uAC00 \uC788\uC5B4\uC694`,`\u{1F382} Happy birthday, ${nl(i.map(r=>r.nick||r.role||r.name))}! There's a cake in front of the house`),4600)},2400)}function _p(n){wi={...wi,...n},Mn&&Ng()}var sh=new Set,wp=n=>n.id||`${n.name}|${n.time||""}`;function Ag(n){lt("letters").slice().reverse().forEach(e=>{let t=wp(e);sh.has(t)||(sh.add(t),We.plantFlower(e,n))})}function Ug(n){if(n&&sh.has(wp(n)))return;n&&sh.add(wp(n));let e=We.plantFlower(n||{name:_("\uC190\uB2D8","Guest"),who:"guest"},!0);Mr(dt,new R(W.pos.x,2.2+W.y,W.pos.z),10,"\u{1F48C}"),e&&W.mode==="out"&&!On&&(W.target=new R(ut.x-ut.r-1,0,ut.z+.6),W.via=Lp(W.pos,W.target),W.pending=null,W.targetT=12,W.moveT=0,setTimeout(()=>nt(_("\u{1F337} \uBCF4\uB0B8 \uD3B8\uC9C0\uAC00 \uAC00\uC871 \uC815\uC6D0\uC5D0 \uAF43\uC73C\uB85C \uD53C\uC5C8\uC5B4\uC694","\u{1F337} Your letter bloomed as a flower in the family garden"),3200),500))}function x1(n){var t;let e=We.houses.spot(n);!e||W.mode!=="out"||(Mr(dt,new R(e.npcX,2.4,e.npcZ),12),(t=We.houses.npc(n))==null||t.wave(1.6))}function _1({grew:n}={}){if(We.familyTree.refresh(),W.mode!=="out")return;let e=We.familyTree.top,t=Math.hypot(W.pos.x-e.x,W.pos.z-e.z)<8,i=()=>{Mr(dt,e.clone().setY(2.2),n?18:8,n?"\u2728":"\u{1F4A7}"),We.familyTree.refresh()};if(t){Mn.wave(1);for(let r=0;r<3;r++)setTimeout(()=>jc(dt,new R(W.pos.x,1.6,W.pos.z),e,"\u{1F4A7}",.6,r===2?i:null),r*140)}else i()}function Ng(){Mn&&dt.remove(Mn.root),Mn=wa({type:"player",outfit:wi.outfit,hair:wi.hair,longHair:!!wi.longHair,glasses:!!wi.glasses,hat:wi.hat||"",kid:!!wi.kid}),dt.add(Mn.root)}function b1(){let n=location.hash;if(/night/.test(n))return"night";if(/sunset|dusk/.test(n))return"dusk";if(/day|morning/.test(n))return"day";try{let t=localStorage.getItem("family-time");if(Ut[t])return t}catch{}if(Qc.skyMode&&Ut[Qc.skyMode])return Qc.skyMode;let e=new Date(Gn().toLocaleString("en-US",{timeZone:"Asia/Seoul"})).getHours();return e>=6&&e<16?"day":e<19?"dusk":"night"}function ch(n){dt.fog.color.set(n.fog),on.color.set(n.sun),on.intensity=n.sunI,Oo.color.set(n.hemi),Oo.groundColor.set(n.ground),Oo.intensity=n.hemiI}function eh(n){ys=Ut[n]?n:"day";let e=Bn.setTime(ys);return W.mode==="out"&&ch(e),ys}function Sp(){let n=["day","dusk","night"],e=n[(n.indexOf(ys)+1)%n.length];eh(e);try{localStorage.setItem("family-time",e)}catch{}return nt(e==="night"?_("\u{1F319} \uBC24 \uB9C8\uC744\uC774\uC5D0\uC694. \uAC00\uB85C\uB4F1\uC774 \uCF1C\uC84C\uC5B4\uC694","\u{1F319} Night in the village. The streetlights are on"):e==="dusk"?_("\u{1F307} \uB178\uC744\uC774 \uC9C0\uACE0 \uC788\uC5B4\uC694","\u{1F307} The sun is setting"):_("\u2600\uFE0F \uB2E4\uC2DC \uD658\uD55C \uB0AE\uC774\uC5D0\uC694","\u2600\uFE0F Back to bright daylight")),e}function Bg(){let n=d1.getBoundingClientRect();Lt.w=Math.max(1,n.width),Lt.h=Math.max(1,n.height),Lt.left=n.left,Lt.top=n.top}function ko(){Bg(),ln.aspect=Lt.w/Lt.h,ln.fov=Pg()?W.mode==="museum"?55:64:50,ln.updateProjectionMatrix(),fs=Cp(),Je.setPixelRatio(fs),Je.setSize(Lt.w,Lt.h)}function E1(){addEventListener("keydown",a=>{Cn()||/INPUT|TEXTAREA/.test(a.target.tagName)||document.body.classList.contains("reading")||(li.add(a.code),/Key[WASD]|Arrow/.test(a.code)&&(document.body.classList.add("moved"),Zi()),a.code==="Space"&&(Rg(),a.preventDefault()),(a.code==="KeyE"||a.code==="Enter")&&ah(),a.code==="KeyH"&&Cg(),a.code==="KeyN"&&Sp())}),addEventListener("keyup",a=>li.delete(a.code)),addEventListener("blur",()=>li.clear());let n=Je.domElement,e=qt("#joy"),t=e.querySelector(".knob"),i=48,r=null;n.addEventListener("pointerdown",a=>{if(!(r||!Si)){r={id:a.pointerId,sx:a.clientX,sy:a.clientY,ax:a.clientX,ay:a.clientY,drag:!1,t:performance.now()};try{n.setPointerCapture(a.pointerId)}catch{}}}),n.addEventListener("pointermove",a=>{if(!r||a.pointerId!==r.id)return;if(!r.drag){if(Math.hypot(a.clientX-r.sx,a.clientY-r.sy)<10)return;r.drag=!0,W.target=null,W.pending=null,Zi(),e.classList.add("active"),document.body.classList.add("moved")}let o=a.clientX-r.ax,l=a.clientY-r.ay,c=Math.hypot(o,l);c>i&&(r.ax=a.clientX-o/c*i,r.ay=a.clientY-l/c*i,o=a.clientX-r.ax,l=a.clientY-r.ay),Ca.x=o/i,Ca.y=l/i,e.style.left=`${r.ax-Lt.left}px`,e.style.top=`${r.ay-Lt.top}px`,t.style.transform=`translate(${o}px, ${l}px)`});let s=a=>{if(!r||a.pointerId!==r.id)return;let o=!r.drag&&performance.now()-r.t<450&&a.type==="pointerup";r=null,Ca.x=Ca.y=0,e.classList.remove("active"),e.style.left=e.style.top="",t.style.transform="",o&&S1(a.clientX,a.clientY)};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),bp(qt("#btn-action"),()=>ah()),bp(qt("#btn-jump"),()=>Rg()),bp(qt("#btn-heart"),()=>Cg())}function bp(n,e){let t=0;n.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0||(t=performance.now(),i.preventDefault(),e())}),n.addEventListener("click",()=>{performance.now()-t>500&&e()})}function Lp(n,e){let t=[],i=n;for(let r=0;r<3;r++){let s=M1(i,e);if(!s)break;t.push(s),i=s}return t}function M1(n,e){let t=e.x-n.x,i=e.z-n.z,r=t*t+i*i;if(r<1)return null;let s=null;for(let d of Rp){if(d.r<.8)continue;let m=((d.x-n.x)*t+(d.z-n.z)*i)/r;if(m<=.02||m>=.98)continue;let f=n.x+t*m,g=n.z+i*m;Math.hypot(d.x-f,d.z-g)<d.r+Mi+.3&&(!s||m<s.t)&&(s={c:d,t:m,px:f,pz:g})}if(!s)return null;let{c:a}=s,o=Math.sqrt(r),l=s.px-a.x,c=s.pz-a.z,h=Math.hypot(l,c);h<.001&&(l=-i/o,c=t/o,h=1);let u=a.r+Mi+1.1;return new R(a.x+l/h*u,0,a.z+c/h*u)}function Pp(n){let e=W.pos.x-n.pos.x,t=W.pos.z-n.pos.z,i=Math.hypot(e,t)||1,r=Math.max(.5,n.r-.6);W.target=new R(n.pos.x+e/i*r,0,n.pos.z+t/i*r);let s=[];if(W.mode==="out"&&n.pos.z<-6!=W.pos.z<-6){let a=new R(0,0,-3),o=new R(0,0,-10);s.push(...W.pos.z<-6?[o,a]:[a,o])}W.via=W.mode==="out"?[...s,...Lp(s[s.length-1]||W.pos,W.target)]:[],W.pending=n,W.targetT=20,W.moveT=0,W.stuckT=0}function Tp(n){ms.position.set(n.x,.05,n.z),No=1}var Ep=new Rc,w1=new Jn(new R(0,1,0),0);function S1(n,e){if(Cn()||W.busy)return;Zi();let t=new ue((n-Lt.left)/Lt.w*2-1,-((e-Lt.top)/Lt.h)*2+1);if(Ep.setFromCamera(t,ln),W.mode==="out"){let r=Ep.intersectObjects(We.interactables.map(s=>s.label))[0];if(r){let s=We.interactables.find(a=>a.label===r.object);Pp(s),Tp(s.pos),Ze(8);return}}let i=new R;Ep.ray.intersectPlane(w1,i)&&(W.target=i,W.via=W.mode==="out"?Lp(W.pos,i):[],W.pending=null,W.targetT=10,W.moveT=0,W.stuckT=0,Tp(i))}var Og="family-potatoes",kg=()=>{try{return+localStorage.getItem(Og)||0}catch{return 0}};function T1(n){if(n===1)return _("\u{1F360} \uCCAB \uACE0\uAD6C\uB9C8\uB97C \uB123\uC5C8\uC5B4\uC694. \uB178\uB987\uB178\uB987 \uC775\uB294 \uC911\u2026","\u{1F360} The first sweet potato is in. Roasting nice and golden\u2026");if(n%5===0)return _(`\u{1F360} \uBC8C\uC368 ${n}\uAC1C\uC9F8! \uC624\uB298 \uC800\uB141\uC740 \uAD70\uACE0\uAD6C\uB9C8 \uD30C\uD2F0 \u{1F389}`,`\u{1F360} That's ${n} already! Roasted sweet potato party tonight \u{1F389}`);let e=_(["\uD638\uD638 \uBD88\uC5B4 \uBA39\uC73C\uBA74 \uAFC0\uB9DB\uC774\uC5D0\uC694","\uAECD\uC9C8\uAE4C\uC9C0 \uB2EC\uCF64\uD558\uAC8C \uC775\uC5C8\uC5B4\uC694","\uBAA8\uB2E5\uBD88\uC774 \uB530\uB73B\uD574\uC694. \uC7A0\uAE50 \uC26C\uC5C8\uB2E4 \uAC00\uC694","\uD558\uB098\uB294 \uD560\uBA38\uB2C8 \uBAAB\uC73C\uB85C \uB0A8\uACA8 \uB458\uAC8C\uC694","\uD0C0\uB2E5\uD0C0\uB2E5, \uBD88\uAF43\uC774 \uCDA4\uC744 \uCDB0\uC694"],["Blow on it first. It tastes like honey","Roasted sweet, right down to the skin","The campfire is so warm. Stay a while","I'll save one for Grandma","Crackle, crackle, the flames are dancing"]);return`\u{1F360} ${e[Math.floor(Math.random()*e.length)]}`}var Mp={family:()=>Nc(),directions:Ya,question:()=>cs(),calendar:()=>Lo(),poll:()=>Bc(),quiz:Za,mailbox:()=>qn(Ug),tree:()=>Oc(),house:n=>{let e=We.houses.npc(n.member);e&&n.member!==be()&&(e.wave(2),Mr(dt,new R(e.root.position.x,2.4,e.root.position.z),6)),setTimeout(()=>{!Cn()&&W.mode==="out"&&Ta(n.member)},n.member===be()?0:450)},campfire:()=>{Mn.wave(.8),Ze(30),We.campfire.toss(dt,new R(W.pos.x,1.4+W.y,W.pos.z),()=>{let n=kg()+1;try{localStorage.setItem(Og,String(n))}catch{}We.campfire.setCount(n),Mr(dt,new R(0,2.2,4),6,"\u2728"),et.sfx("crackle"),nt(T1(n))})},photozone:()=>Ot().some(n=>n.id!==be())?K0():th(!0,[]),museum:()=>lh()};function A1(){let n=W.pos;if(W.mode==="museum")return jt.nearest(n);let e=null,t=1/0;for(let i of We.interactables){let r=Math.hypot(n.x-i.pos.x,n.z-i.pos.z);r<i.r&&r<t&&(t=r,e=i)}return e}function ah(n=Ct){var t;if(W.busy||Cn())return;if(!n){Mn.wave(1.4);return}if(Ze(15),et.sfx("pop"),W.mode==="museum"){n.type==="exit"?hh():n.type==="welcome"?Gr(jt.themes):n.type==="header"?Gr(jt.themes,n.ti):n.type==="photo"&&dl(jt.themes,n.ti,n.idx);return}W.yaw=Math.atan2(n.pos.x-W.pos.x,n.pos.z-W.pos.z);let e=n.id.startsWith("house:")?"house":n.id;Fg(e),(t=Mp[e])==null||t.call(Mp,n)}function R1(){var t,i,r;let n=qt("#btn-action"),e=Ct?(Ct.id||Ct.type)+((r=(i=(t=Ct.entry)==null?void 0:t.src)!=null?i:Ct.ti)!=null?r:""):"";n.dataset.key!==e&&(e&&!n.dataset.key&&(Ze(8),et.sfx("chime")),n.dataset.key=e,n.classList.toggle("ready",!!Ct),n.querySelector(".em").textContent=Ct?Ct.emoji:"\u{1F44B}",n.querySelector(".lb").textContent=Ct?Ct.action:_("\uC778\uC0AC\uD558\uAE30","Say hi"))}function Rg(){W.y<=.001&&!Cn()&&!W.busy&&(W.vy=6.5,et.sfx("jump"))}function Cg(){Mr(dt,new R(W.pos.x,2.2+W.y,W.pos.z),8),Mn.wave(1),et.sfx("heart"),W.mode==="out"&&(Ct!=null&&Ct.member)&&Ct.member!==be()&&jd(Ct.member)}function Lg(){!Si||W.mode!=="out"||W.busy||(On={i:0,waitT:.4},document.body.classList.add("touring"),nt(_("\u{1F6B6} \uC790\uB3D9 \uD22C\uC5B4 \uC2DC\uC791! \uD654\uBA74\uC744 \uB04C\uBA74 \uC5B8\uC81C\uB4E0 \uBA48\uCDB0\uC694","\u{1F6B6} Auto tour started. Drag the screen to stop anytime"),3200))}function Zi(n){On&&(On=null,document.body.classList.remove("touring"),W.pending&&(W.target=null,W.pending=null),n&&nt(n))}function C1(){let n=g1[On.i++];if(!n){Zi(),nt(_("\u{1F389} \uD22C\uC5B4 \uB05D! \uC774\uC81C \uB9C8\uC74C\uB300\uB85C \uB458\uB7EC\uBCF4\uC138\uC694","\u{1F389} Tour finished. Now look around as you like"),3600),or(),et.sfx("tada");return}let e=n==="house"?We.interactables.find(t=>t.member&&t.member!==be()):We.interactables.find(t=>t.id===n);e&&(Pp(e),Tp(e.pos),On.waitT=n==="campfire"?2.4:n==="house"?1.2:.9)}var oh=n=>new Promise(e=>{qt("#fade").classList.toggle("on",n),setTimeout(e,460)});function L1(){let n=qt("#museum-bar");n.innerHTML="",jt.themes.forEach((t,i)=>{let r=document.createElement("button");r.className="chip",r.dataset.ti=i,r.textContent=`${t.emoji} ${t.title}`,r.onclick=()=>{W.pos.copy(jt.themeStart(i)),W.target=null,Ze(8),La()},n.appendChild(r)});let e=document.createElement("button");e.className="chip",e.textContent=_("\u{1F4DA} \uC804\uCCB4 \uC568\uBC94","\u{1F4DA} Full album"),e.onclick=()=>Gr(jt.themes),n.append(e),qt("#btn-exit").onclick=()=>hh()}var Ap=()=>hh(!0);async function lh(n=-1){if(W.mode==="museum"||W.busy)return;let e=!!On;Zi(),Fg("museum"),W.busy=!0,await oh(!0),W.mode="museum",Bn.group.visible=We.group.visible=!1,jt.group.visible=!0,on.castShadow=!1,ch(Ut.day),W.pos.copy(n>=0?jt.themeStart(n):jt.spawn),W.vel.set(0,0,0),W.target=null,W.yaw=Math.PI/2,document.body.classList.add("in-museum"),ko(),La(),ar(Ap),await oh(!1),W.busy=!1,nt(e?_("\u{1F3C1} \uD22C\uC5B4\uC758 \uB9C8\uC9C0\uB9C9, \uC0AC\uC9C4\uAD00\uC774\uC5D0\uC694. \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC73C\uBA70 \uAD6C\uACBD\uD558\uC138\uC694","\u{1F3C1} Last stop of the tour: the photo gallery. Walk to the right to look around"):_("\u{1F449} \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC73C\uBA70 \uC0AC\uC9C4\uC744 \uAD6C\uACBD\uD558\uC138\uC694","\u{1F449} Walk to the right to see the photos"),e?4200:2400)}async function hh(n=!1){if(W.mode==="museum"){if(W.busy){n&&ar(Ap);return}n||zr(Ap),W.busy=!0,await oh(!0),W.mode="out",Bn.group.visible=We.group.visible=!0,jt.group.visible=!1,on.castShadow=Je.shadowMap.enabled,ch(Bn.palette()),W.pos.set(ps.x,0,ps.z+2.4),W.vel.set(0,0,0),W.target=null,W.yaw=0,W.doorCooldown=1.5,document.body.classList.remove("in-museum"),ko(),La(),await oh(!1),W.busy=!1}}function P1(n){let e=n.width,t=n.height,i=Math.round(e*.05),r=Math.round(e*.22),s=document.createElement("canvas");s.width=e+i*2,s.height=t+i+r;let a=s.getContext("2d");a.fillStyle="#FFF8EC",a.fillRect(0,0,s.width,s.height),a.drawImage(n,i,i),a.fillStyle="#B5552B",a.textAlign="center",a.font=`${Math.round(r*.32)}px "Jua", sans-serif`,a.fillText(Bt(),s.width/2,t+i+r*.45),a.fillStyle="#7C6A66",a.font=`${Math.round(r*.15)}px "Gowun Dodum", sans-serif`,a.fillText(_(`${Qi(Gn()).date} \xB7 \uC6B0\uB9AC \uAC00\uC871 \uB9C8\uC744\uC5D0\uC11C`,`${Qi(Gn()).date} \xB7 in our family village`),s.width/2,t+i+r*.74);let o=document.createElement("canvas");o.width=Math.round(s.width*1.12),o.height=Math.round(s.height*1.1);let l=o.getContext("2d");l.fillStyle="#EAD7BB",l.fillRect(0,0,o.width,o.height),l.save(),l.translate(o.width/2,o.height/2),l.rotate(-.03),l.shadowColor="rgba(80,40,30,.3)",l.shadowBlur=e*.05,l.shadowOffsetY=e*.02,l.drawImage(s,-s.width/2,-s.height/2),l.restore(),l.fillStyle="rgba(255,236,170,.8)";for(let[c,h,u]of[[o.width*.09,o.height*.055,-.5],[o.width*.91,o.height*.055,.5]])l.save(),l.translate(c,h),l.rotate(u),l.fillRect(-e*.11,-e*.03,e*.22,e*.06),l.restore();return o}async function th(n=!1,e=[]){if(W.busy||Cn())return;let t=null;W.busy=!0;try{if(n){Zi(),W.target=null,W.pending=null;let o=Math.sin(Sr.ang),l=Math.cos(Sr.ang),c=Math.cos(Sr.ang),h=-Math.sin(Sr.ang),u=Sr.x+o*.9,d=Sr.z+l*.9;W.pos.set(u,0,d),W.vel.set(0,0,0),W.yaw=Sr.ang,W.y=0,W.vy=0;let m=e.map(p=>We.houses.npc(p)).filter(Boolean).slice(0,5),f=m.map(p=>({c:p,p:p.root.position.clone(),r:p.root.rotation.y,v:p.root.visible}));m.forEach((p,x)=>{let y=x%2===0?1:-1,v=Math.floor(x/2)+1,M=y*[0,.95,1.8,2.55][v],C=[0,0,-.45,-.9][v];p.root.position.set(u+c*M+o*C,0,d+h*M+l*C),p.root.rotation.y=Sr.ang,p.head.rotation.y=0,p.root.visible=!0}),t=()=>f.forEach(p=>{p.c.root.position.copy(p.p),p.c.root.rotation.y=p.r,p.c.root.visible=p.v}),W.posing={x:u,z:d,nx:o,nz:l,back:m.length<=1?4.4:m.length<=3?6.2:7.6},Mn.wave(3),m.forEach(p=>p.wave(3));let g=qt("#count");for(let p of["3","2","1"])g.textContent=p,g.classList.remove("show"),g.offsetWidth,g.classList.add("show"),et.sfx("pop"),Ze(8),await p1(680);g.classList.remove("show"),g.textContent="",Mr(dt,new R(u,2.4,d),10)}Je.render(dt,ln);let i=Je.domElement;if(n&&i.height>i.width*1.3){let o=i.width,l=Math.round(o*1.25),c=Math.max(0,Math.min(i.height-l,Math.round(i.height*.5-l/2))),h=document.createElement("canvas");h.width=o,h.height=l,h.getContext("2d").drawImage(i,0,c,o,l,0,0,o,l),i=h}let r=P1(i),s=r.toDataURL("image/jpeg",.9);et.sfx("shutter"),Ze(25),qt("#fade").style.background="#fff",qt("#fade").classList.add("on"),setTimeout(()=>{qt("#fade").classList.remove("on"),setTimeout(()=>qt("#fade").style.background="",450)},120),t==null||t(),t=null,W.posing=null;let a=/KAKAOTALK|Instagram|FBAN|FBAV|Line\//i.test(navigator.userAgent);ja(_("\uAC00\uC871\uC0AC\uC9C4","Family photo"),`
      <img src="${s}" style="width:100%;border-radius:14px;box-shadow:var(--shadow);-webkit-touch-callout:default" alt="${_("\uAC00\uC871\uC0AC\uC9C4","Family photo")}" />
      <p class="muted center">${a?_("\uC0AC\uC9C4\uC744 <b>\uAE38\uAC8C \uB20C\uB7EC</b> \uC800\uC7A5\uD574 \uC8FC\uC138\uC694","<b>Press and hold</b> the photo to save it"):_("\uC0AC\uC9C4\uC744 <b>\uAE38\uAC8C \uB20C\uB7EC</b> \uC800\uC7A5\uD558\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694","<b>Press and hold</b> the photo to save it, or use the buttons below")}</p>
      <div class="btns">
        <button class="btn pink ph-share">${_("\u{1F4E4} \uACF5\uC720\uD558\uAE30","\u{1F4E4} Share")}</button>
        <button class="btn ph-save">${_("\u{1F4BE} \uC800\uC7A5\uD558\uAE30","\u{1F4BE} Save")}</button>
      </div>`,o=>{let l=null,c=null;r.toBlob(u=>{u&&(l=new File([u],"family-village-photo.jpg",{type:"image/jpeg"}),c=URL.createObjectURL(u))},"image/jpeg",.9);let h=()=>{if(a){nt(_("\uC0AC\uC9C4\uC744 \uAE38\uAC8C \uB20C\uB7EC \uC800\uC7A5\uD574 \uC8FC\uC138\uC694","Press and hold the photo to save it"));return}let u=document.createElement("a");u.href=c||s,u.download="family-village-photo.jpg",document.body.appendChild(u),u.click(),u.remove(),nt(_("\u{1F4BE} \uC0AC\uC9C4\uC744 \uC800\uC7A5\uD588\uC5B4\uC694","\u{1F4BE} Photo saved"))};return o.querySelector(".ph-save").onclick=h,o.querySelector(".ph-share").onclick=async()=>{var u;if(l&&((u=navigator.canShare)!=null&&u.call(navigator,{files:[l]})))try{await navigator.share({files:[l],title:Bt()});return}catch(d){if((d==null?void 0:d.name)==="AbortError")return}h()},()=>{c&&URL.revokeObjectURL(c)}})}finally{t==null||t(),W.posing=null,W.busy=!1}}var Mi=.45;function I1(n){if(W.mode==="museum"){jt.clamp(n);return}for(let t of Rp){let i=n.x-t.x,r=n.z-t.z,s=Math.hypot(i,r),a=t.r+Mi;s<a&&s>1e-4&&(n.x=t.x+i/s*a,n.z=t.z+r/s*a)}for(let t of Ig){let i=Math.max(t.minX,Math.min(n.x,t.maxX)),r=Math.max(t.minZ,Math.min(n.z,t.maxZ)),s=n.x-i,a=n.z-r,o=Math.hypot(s,a);if(o>=Mi)continue;if(o>1e-4){n.x=i+s/o*Mi,n.z=r+a/o*Mi;continue}let l=[[n.x-t.minX,"x",t.minX-Mi],[t.maxX-n.x,"x",t.maxX+Mi],[n.z-t.minZ,"z",t.minZ-Mi],[t.maxZ-n.z,"z",t.maxZ+Mi]].sort((c,h)=>c[0]-h[0])[0];n[l[1]]=l[2]}let e=Math.hypot(n.x,n.z);e>39&&(n.x*=39/e,n.z*=39/e)}var Uo=new R;function F1(n){let e=0,t=0;if(!Cn()&&!W.busy&&((li.has("KeyW")||li.has("ArrowUp"))&&(t-=1),(li.has("KeyS")||li.has("ArrowDown"))&&(t+=1),(li.has("KeyA")||li.has("ArrowLeft"))&&(e-=1),(li.has("KeyD")||li.has("ArrowRight"))&&(e+=1),e+=Ca.x,t+=Ca.y,(e||t)&&(W.target=null,W.pending=null),W.target)){Uo.subVectors(W.target,W.pos),Uo.y=0;let a=Uo.length();W.targetT-=n,W.moveT+=n;let o=Math.hypot(W.vel.x,W.vel.z),l=W.pending,c;if(l){let h=Math.hypot(W.pos.x-l.pos.x,W.pos.z-l.pos.z);c=h<l.r-.2||h<l.r&&o<.6&&W.moveT>.5}else c=a<.35;if(W.stuckT=W.moveT>.5&&o<.5?W.stuckT+n:0,c||W.targetT<0||W.stuckT>.7){let h=l&&Math.hypot(W.pos.x-l.pos.x,W.pos.z-l.pos.z)<l.r;W.target=null,W.via=[],W.pending=null,W.stuckT=0,l&&(c||h)?ah(l):!c&&!On&&nt(_("\uADF8\uCABD\uC740 \uB9C9\uD600 \uC788\uC5B4\uC694","That way is blocked"))}else{let h=W.via[0];if(h){let u=h.x-W.pos.x,d=h.z-W.pos.z,m=Math.hypot(u,d);m<.9?W.via.shift():(e=u/m,t=d/m)}W.via.length||(e=Uo.x/a,t=Uo.z/a)}}let i=Math.hypot(e,t);i>1&&(e/=i,t/=i);let r=W.mode==="museum"?5.2:6.4;W.vel.x=qi(W.vel.x,e*r,10,n),W.vel.z=qi(W.vel.z,t*r,10,n),W.pos.x+=W.vel.x*n,W.pos.z+=W.vel.z*n,I1(W.pos);let s=Math.hypot(W.vel.x,W.vel.z);if(s>.3){let a=Math.atan2(W.vel.x,W.vel.z)-W.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),W.yaw+=a*Math.min(1,n*12)}return W.vy-=20*n,W.y=Math.max(0,W.y+W.vy*n),W.y===0&&(W.vy=0),Mn.root.position.set(W.pos.x,W.y,W.pos.z),Mn.root.rotation.y=W.yaw,s/r}var Xi=new R,Yi=new R,Jc=new R,Kc=new R;function zg(n,e,t=0){let i=W.pos,r=Pg();if(W.posing){let s=W.posing;n.set(s.x+s.nx*s.back,1.6+s.back*.06,s.z+s.nz*s.back),e.set(s.x,1.25,s.z)}else if(Si)if(W.mode==="museum")n.set(i.x,r?4.1:3.6,r?9.6:8.4),e.set(i.x,r?2.45:2.7,-3.2);else if(r){let s=os((-i.z-4)/4,0,1);n.set(i.x,14.5-s*4,i.z+14.5-s*3.5),e.set(i.x,.6+s*.7,i.z-3.5+s*.3)}else n.set(i.x,10.5,i.z+13.5),e.set(i.x,1.2,i.z-1.5);else{let s=t*.08;n.set(Math.sin(s)*26,12+Math.sin(t*.3)*1.2,4+Math.cos(s)*26),e.set(0,2,-2)}}function La(){zg(Xi,Yi,rh.elapsedTime),ln.position.copy(Xi),ln.lookAt(Yi)}function D1(n,e){zg(Jc,Kc,e);let t=W.swoopT>0?2.4:5,i=W.swoopT>0?2.8:6;W.swoopT>0&&(W.swoopT-=n),Xi.x=qi(Xi.x,Jc.x,t,n),Xi.y=qi(Xi.y,Jc.y,t,n),Xi.z=qi(Xi.z,Jc.z,t,n),Yi.x=qi(Yi.x,Kc.x,i,n),Yi.y=qi(Yi.y,Kc.y,i,n),Yi.z=qi(Yi.z,Kc.z,i,n),ln.position.copy(Xi),ln.lookAt(Yi),W.camOverride&&(ln.position.copy(W.camOverride.pos),ln.lookAt(W.camOverride.look)),Bn.sky.position.copy(ln.position)}var Bo=0,nh=0,U1=0;function Hg(n){gs=n,fs=Cp(),Je.setPixelRatio(fs),Je.setSize(Lt.w,Lt.h),n>=1&&Bn.setLite(1),n>=2&&Je.shadowMap.enabled&&(Je.shadowMap.enabled=!1,on.castShadow=!1,dt.traverse(e=>{e.material&&(e.material.needsUpdate=!0)})),n>=3&&Bn.setLite(2)}function N1(n){if(!Si||(Bo+=n,nh++,Bo<2.5))return;let e=Bo/nh;Bo=nh=0,e>1/32&&gs<3?Hg(gs+1):gs>=3&&e>1/18&&++U1===2&&nt(_('\u{1F4D6} \uD734\uB300\uD3F0\uC774 \uD798\uB4E4\uC5B4\uD558\uBA74 \u2630 \uBA54\uB274\uC758 "\uAE00\uB85C \uBCF4\uAE30"\uB85C \uD3B8\uD558\uAC8C \uBCF4\uC138\uC694',"\u{1F4D6} If your phone is struggling, try 'Text view' in the \u2630 menu"),4800)}function Gg(){var i;if(requestAnimationFrame(Gg),Tg++,!Si&&Tg%2)return;let n=Math.min(rh.getDelta(),.05),e=rh.elapsedTime;if(ih||document.hidden||Cn()||document.body.classList.contains("reading"))return;N1(n);let t=Si?F1(n):0;if(Mn.animate(n,t,e),W.mode==="out"){Bn.update(n,e,W.pos),We.update(n,e,W.pos,!!W.posing),on.position.copy(W.pos).add(f1),on.target.position.copy(W.pos);for(let r of We.interactables){let s=Math.hypot(W.pos.x-r.pos.x,W.pos.z-r.pos.z);r.label.material.opacity=Math.max(.3,Math.min(1,1.6-s/22))}W.doorCooldown-=n,Si&&W.doorCooldown<0&&!W.busy&&W.vel.z<-1&&Math.hypot(W.pos.x-ps.x,W.pos.z-ps.z)<1.1&&lh(),On&&Si&&!W.busy&&!W.target&&(On.waitT-=n,On.waitT<=0&&C1())}else{jt.update(n,e,W.pos);let r=jt.currentTheme(W.pos);r!==Sg&&(Sg=r,document.querySelectorAll("#museum-bar .chip[data-ti]").forEach(s=>s.classList.toggle("on",+s.dataset.ti===r)),(i=document.querySelector("#museum-bar .chip.on"))==null||i.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}))}if(hg(n),No>0){No-=n*1.3;let r=1-Math.max(0,No);ms.scale.setScalar(1+r*.9),ms.material.opacity=Math.max(0,No)}Ct=Si&&!W.posing?A1():null,R1(),D1(n,e),Je.render(dt,ln)}var O1=window.FAMILY,Vg=n=>document.querySelector(n),zo=[],Fp=null,$g=()=>document.body.classList.contains("reading"),k1=[["family",_("\u{1F3E1} \uAC00\uC871","\u{1F3E1} Family")],["question",_("\u{1F4AC} \uC9C8\uBB38","\u{1F4AC} Question")],["mailbox",_("\u2709\uFE0F \uD3B8\uC9C0","\u2709\uFE0F Letters")],["calendar",_("\u{1F4C5} \uB2EC\uB825","\u{1F4C5} Calendar")],["poll",_("\u{1F5F3}\uFE0F \uD22C\uD45C","\u{1F5F3}\uFE0F Polls")],["tree",_("\u{1F331} \uB098\uBB34","\u{1F331} Tree")],["album",_("\u{1F5BC}\uFE0F \uC0AC\uC9C4","\u{1F5BC}\uFE0F Photos")],["quiz",_("\u2753 \uD034\uC988","\u2753 Quiz")],["directions",_("\u{1F5FA}\uFE0F \uBAA8\uC774\uB294 \uACF3","\u{1F5FA}\uFE0F Meeting place")]];function Ji(n,e,t,i,r=""){return`
    <section class="tv-sec" data-sec="${n}" aria-labelledby="tv-h-${n}">
      <h2 class="tv-h" id="tv-h-${n}"><span aria-hidden="true">${e}</span>${t}</h2>
      ${r?`<p class="muted tv-sub">${r}</p>`:""}
      <div class="tv-body" data-mount="${n}">${i.html}</div>
    </section>`}function Wg({canPlay:n=!1,onPlay:e,onClose:t,onSent:i,section:r}={}){var h;if($g()){r&&Ip(r);return}let s=Vg("#textview"),a=As(),o=ir(),l={family:qd({hero:!1}),question:Xd(Be(),{embedded:!0}),mailbox:ol(i,{onBack:rn}),calendar:Yd(),poll:Zd(),tree:Jd(),album:ul(a),quiz:cl(),directions:ll()},c=n?`<button class="btn-primary tv-play">${_("\u{1F3E1} 3D \uB9C8\uC744\uC5D0\uC11C \uAD6C\uACBD\uD558\uAE30","\u{1F3E1} Explore the 3D village")}</button>`:"";if(s.innerHTML=`
    <div class="tv-top">
      <button class="tv-back" ${n?"":"hidden"} aria-label="${_("3D \uB9C8\uC744\uB85C \uB3CC\uC544\uAC00\uAE30","Back to the 3D village")}">${_("\u{1F3E1} \uB9C8\uC744\uB85C","\u{1F3E1} Village")}</button>
      <div class="tv-chips" role="navigation" aria-label="${_("\uAE00\uB85C \uBCF4\uAE30 \uCC28\uB840","Text view sections")}">
        ${k1.map(([u,d])=>`<button class="chip" data-go="${u}">${d}</button>`).join("")}
      </div>
      <button class="fs-toggle tv-fs" aria-label="${Ka()?_("\uAE00\uC790 \uC791\uAC8C","Smaller text"):_("\uAE00\uC790 \uD06C\uAC8C","Larger text")}">${Ka()?_("\uAC00-","A-"):_("\uAC00+","A+")}</button>
    </div>
    <div class="tv-inner">
      <header class="tv-hero">
        <div class="en">FAMILY VILLAGE</div>
        <div class="tv-names">${Le(Bt())}</div>
        ${o>0?`<div class="intro-dday">${_(`\uD568\uAED8\uD55C \uC9C0 ${o.toLocaleString("ko-KR")}\uC77C\uC9F8`,`Together for ${o.toLocaleString("en-US")} days`)}</div>`:""}
        ${c}
        <p class="muted tv-hint">${n?_("\uAC8C\uC784\uC774 \uC5B4\uB824\uC6B0\uBA74 \uADF8\uB300\uB85C \uC544\uB798\uB85C \uB0B4\uB824\uC11C \uBCF4\uC138\uC694","If the game is hard to use, just scroll down"):_("\uC544\uB798\uB85C \uB0B4\uB9AC\uBA74\uC11C \uCC9C\uCC9C\uD788 \uBCF4\uC138\uC694","Scroll down and take your time")}</p>
      </header>
      ${Ji("family","\u{1F3E1}",_("\uC6B0\uB9AC \uAC00\uC871","Our family"),l.family)}
      ${Ji("question","\u{1F4AC}",_("\uC624\uB298\uC758 \uC9C8\uBB38","Question of the day"),l.question,_("\uB0B4\uAC00 \uB2F5\uD558\uBA74 \uAC00\uC871\uC758 \uB2F5\uC774 \uC5F4\uB824\uC694","Answer it and your family's answers open"))}
      ${Ji("mailbox","\u2709\uFE0F",_("\uC548\uBD80 \uC6B0\uCCB4\uD1B5","Mailbox"),l.mailbox)}
      ${Ji("calendar","\u{1F4C5}",_("\uAC00\uC871 \uB2EC\uB825","Family calendar"),l.calendar)}
      ${Ji("poll","\u{1F5F3}\uFE0F",_("\uAC00\uC871 \uD22C\uD45C\uD568","Family polls"),l.poll)}
      ${Ji("tree","\u{1F331}",_("\uD568\uAED8 \uD0A4\uC6B0\uB294 \uB098\uBB34","The tree we grow together"),l.tree)}
      ${Ji("album","\u{1F5BC}\uFE0F",((h=O1.museum)==null?void 0:h.title)||_("\uAC00\uC871 \uC0AC\uC9C4\uAD00","Family photo gallery"),l.album,_("\uC0AC\uC9C4\uC744 \uB204\uB974\uBA74 \uD06C\uAC8C \uBCFC \uC218 \uC788\uC5B4\uC694","Tap a photo to see it larger"))}
      ${Ji("quiz","\u2753",_("\uAC00\uC871 \uD034\uC988","Family quiz"),l.quiz)}
      ${Ji("directions","\u{1F5FA}\uFE0F",_("\uBAA8\uC774\uB294 \uACF3","Meeting place"),l.directions)}
      <footer class="tv-foot">
        <div class="btns" style="justify-content:center">
          <button class="btn tv-share">${_("\u{1F517} \uB9C8\uC744 \uC8FC\uC18C \uBCF4\uB0B4\uAE30","\u{1F517} Share the village link")}</button>
          ${n?`<button class="btn pink tv-play">${_("\u{1F3E1} \uB9C8\uC744\uB85C \uB4E4\uC5B4\uAC00\uAE30","\u{1F3E1} Enter the village")}</button>`:""}
        </div>
        <p style="margin-top:18px">${Le(Bt())} \xB7 ${_("\uC6B0\uB9AC \uAC00\uC871 \uB9C8\uC744","Our family village")}</p>
      </footer>
    </div>`,zo=[],Object.entries(l).forEach(([u,d])=>{var g;let m=s.querySelector(`[data-mount="${u}"]`),f=(g=d.mount)==null?void 0:g.call(d,m);typeof f=="function"&&zo.push(f)}),s.querySelectorAll("[data-go]").forEach(u=>u.onclick=()=>Ip(u.dataset.go)),s.querySelectorAll(".tv-back, .tv-play").forEach(u=>u.onclick=()=>{e==null||e(),z1()}),s.querySelectorAll(".tv-share").forEach(u=>u.onclick=Ja),"IntersectionObserver"in window){let u=[...s.querySelectorAll("[data-go]")],d=new IntersectionObserver(m=>m.forEach(f=>{var g;f.isIntersecting&&(u.forEach(p=>p.classList.toggle("on",p.dataset.go===f.target.dataset.sec)),(g=u.find(p=>p.classList.contains("on")))==null||g.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"}))}),{root:s,rootMargin:"-35% 0px -55% 0px"});s.querySelectorAll(".tv-sec").forEach(m=>d.observe(m)),zo.push(()=>d.disconnect())}Fp={onClose:t},document.body.classList.add("reading"),s.scrollTop=0,ar(Dp),r&&setTimeout(()=>Ip(r,!1),60)}function Ip(n,e=!0){var t;(t=Vg("#textview").querySelector(`[data-sec="${n}"]`))==null||t.scrollIntoView({behavior:e?"smooth":"auto",block:"start"})}function Dp(){var e;document.body.classList.remove("reading"),zo.forEach(t=>t()),zo=[];let n=Fp;Fp=null,(e=n==null?void 0:n.onClose)==null||e.call(n)}function z1(){$g()&&(Dp(),zr(Dp))}var uh=window.FAMILY,Re=n=>document.querySelector(n),H1=_([[10,"\uB9C8\uC744\uC744 \uC9D3\uB294 \uC911\u2026 \u{1F3E1}"],[35,"\uAF43\uC744 \uC2EC\uB294 \uC911\u2026 \u{1F337}"],[65,"\uC9D1\uC5D0 \uBD88\uC744 \uCF1C\uB294 \uC911\u2026 \u{1F4A1}"],[85,"\uC0AC\uC9C4\uC744 \uAC70\uB294 \uC911\u2026 \u{1F5BC}\uFE0F"]],[[10,"Building the village\u2026 \u{1F3E1}"],[35,"Planting flowers\u2026 \u{1F337}"],[65,"Turning on the lights\u2026 \u{1F4A1}"],[85,"Hanging photos\u2026 \u{1F5BC}\uFE0F"]]),Pa=!1,Np=n=>{Re("#loadbar").style.width=n+"%";let e=Re("#btn-enter");if(!Pa){let t=H1.filter(([i])=>n>=i).pop();t&&(e.textContent=t[1])}};["gesturestart","gesturechange"].forEach(n=>document.addEventListener(n,e=>e.preventDefault()));if(window.visualViewport){let n=window.visualViewport,e=()=>document.documentElement.style.setProperty("--kb",`${Math.max(0,Math.round(innerHeight-n.height-n.offsetTop))}px`);n.addEventListener("resize",e),n.addEventListener("scroll",e)}"serviceWorker"in navigator&&location.protocol==="https:"&&document.querySelector('link[rel="manifest"]')&&addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));hl()&&document.documentElement.classList.add("installed");var Bp=Bt();document.title=Bp;Re("#i-title").textContent=Bp;Re("#h-names").textContent=Bp;var vs=ir();Re("#i-sub").innerHTML=_(`${Qi().date}${vs>0?`<br>\uD568\uAED8\uD55C \uC9C0 <b>${vs.toLocaleString("ko-KR")}\uC77C\uC9F8</b>`:""}`,`${Qi().date}${vs>0?`<br>Together for <b>${vs.toLocaleString("en-US")} days</b>`:""}`);Re("#h-dday").textContent=vs>0?_(`${vs.toLocaleString("ko-KR")}\uC77C\uC9F8`,`Day ${vs.toLocaleString("en-US")}`):"";var qg=Rm();if(qg.length){let n=Re("#today");n.hidden=!1,n.querySelector(".t-now").textContent=qg.map(e=>_(`${e.emoji||"\u{1F4CC}"} \uC624\uB298\uC740 ${e.kind==="birthday"?`${xt(e.member)} \uC0DD\uC77C`:e.title}\uC774\uC5D0\uC694!`,`${e.emoji||"\u{1F4CC}"} Today is ${e.kind==="birthday"?`${xt(e.member)}'s birthday`:e.title}`)).join("  ")}lm()&&(Re("#demo-badge").hidden=!1);Jh();var Zg;(Zg=Re("#btn-lang"))==null||Zg.addEventListener("click",()=>_h(Zt?"en":"ko"));var Pe=null,xs=!1,Op=!1;function ci(){if(!Op){Re("#lock").hidden=Re("#who").hidden=!0,Pa&&(Re("#btn-enter").disabled=!0,Re("#btn-enter").textContent=_("\uAC00\uC871 \uB9C8\uC744 \uD655\uC778 \uC911\u2026","Checking the family village\u2026"));return}let n=tr(),e=be(),t=Ls().hint;Re("#lock-hint").textContent=t?_(`\uD78C\uD2B8: ${t}`,`Hint: ${t}`):"",Re("#lock").hidden=n,Re("#who").hidden=!n,Re(".btn-row").hidden=!n||!e,Re("#intro-help").hidden=!!e,n&&Kg(e),Re("#btn-look").hidden=!e||Ur()||!Pe,Re("#btn-guest").hidden=!!e,Re("#btn-who-other").textContent=e?_("\u{1F64B} \uB2E4\uB978 \uCE90\uB9AD\uD130","\u{1F64B} Switch character"):_("\u{1F64B} \uC774\uBBF8 \uB9CC\uB4E0 \uCE90\uB9AD\uD130\uAC00 \uC788\uC5B4\uC694","\u{1F64B} I already have a character");let i=Re("#btn-enter");Pa&&(i.disabled=!n,i.textContent=n?e?Pe?Ur()?_("\uC190\uB2D8\uC73C\uB85C \uB4E4\uC5B4\uAC00\uAE30 \u{1F3E1}","Enter as a guest \u{1F3E1}"):_(`${er(xt(e),"\uC73C\uB85C/\uB85C")} \uB4E4\uC5B4\uAC00\uAE30 \u{1F3E1}`,`Enter as ${xt(e)} \u{1F3E1}`):_("\u{1F4D6} \uAE00\uB85C \uBCF4\uAE30","\u{1F4D6} Text view"):_("\u2728 \uB0B4 \uCE90\uB9AD\uD130 \uB9CC\uB4E4\uAE30","\u2728 Create my character"):_("\u{1F512} \uC554\uD638\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694","\u{1F512} Enter the password"))}function Kg(n){let e=_t(),t=Re("#me-card");if(e)t.className="me-card",t.innerHTML=`<span class="me-pic">${Hc(e.id,e.look)}</span><div class="me-text"><b>${Le(xt(e.id))}</b><span>${_("\uD3B8\uC9C0\xB7\uB2F5\xB7\uD558\uD2B8\uAC00 \uC774 \uC774\uB984\uC73C\uB85C \uB0A8\uC544\uC694","Your letters, answers and hearts go out under this name")}</span></div>`;else if(n)t.className="me-card guest",t.innerHTML=`<span class="me-pic"><span class="guest-ic">\u{1F440}</span></span><div class="me-text"><b>${_("\uC190\uB2D8\uC73C\uB85C \uAD6C\uACBD\uD574\uC694","Just looking, as a guest")}</b><span>${_("\uCE90\uB9AD\uD130\uB97C \uB9CC\uB4E4\uBA74 \uB9C8\uC744\uC5D0 \uB0B4 \uC9D1\uC774 \uC0DD\uACA8\uC694","Create a character to get your own house in the village")}</span></div>`;else{let i=Ot().slice(0,6);t.className="me-card new",t.innerHTML=`${i.length?`<div class="neighbors">${i.map(r=>`<span class="nb">${Hc(r.id,r.look)}</span>`).join("")}</div>`:""}<div class="me-text"><b>${_("\uCC98\uC74C \uC624\uC168\uB124\uC694! \u{1F44B}","First time here? \u{1F44B}")}</b><span>${_("\uB2C9\uB124\uC784\uACFC \uBAA8\uC2B5\uC744 \uC815\uD558\uBA74 \uB9C8\uC744\uC5D0 \uB0B4 \uC9D1\uC774 \uC0DD\uACA8\uC694","Pick a nickname and a look, and you get your own house in the village")}</span></div>`}}var jg=new Map;function dh(n){if(!(Pe!=null&&Pe.portrait))return;(n?Ot().filter(t=>n.includes(t.id)):Ot()).forEach(t=>{let i=JSON.stringify(t.look);if(jg.get(t.id)===i)return;jg.set(t.id,i);let r=Pe.portrait(t.look);Z0(t.id,r)}),!xs&&Op&&tr()&&Kg(be())}addEventListener("family:look",()=>{let n=be();n&&!Ur()&&setTimeout(()=>dh([n]),0)});addEventListener("family:data",()=>{xs||dh()});addEventListener("family:me",()=>{if(dh(),Ur())try{localStorage.getItem("family-guest-look")||localStorage.setItem("family-guest-look",JSON.stringify(_i()))}catch{}Pe==null||Pe.setCharacter(_i()),ci()});Re("#btn-look").onclick=()=>{Ze(8),kc()};Re("#btn-who-other").onclick=()=>{Ze(8),Kd(()=>ci())};Re("#btn-guest").onclick=()=>{Ze(8),za("guest")};Re("#lock").onsubmit=async n=>{n.preventDefault();let e=Re("#lock-in"),t=Re("#lock-btn");t.disabled=!0,t.textContent=_("\uD655\uC778 \uC911\u2026","Checking\u2026");let i=await dm(e.value);if(t.disabled=!1,t.textContent=_("\uC5F4\uAE30","Unlock"),i.ok){Ze(20),et.sfx("chime"),An({force:!0}),ci();return}e.select(),Ze(60),Re("#lock").classList.remove("shake"),Re("#lock").offsetWidth,Re("#lock").classList.add("shake"),nt(i.error==="network"?_("\uC5F0\uACB0\uC774 \uC548 \uB3FC\uC694. \uC7A0\uC2DC \uB4A4 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694","Can't connect. Please try again in a moment"):_("\uC554\uD638\uAC00 \uB2EC\uB77C\uC694 \u{1F512}","Wrong password \u{1F512}"))};addEventListener("family:locked",()=>{nt(_("\uAC00\uC871 \uC554\uD638\uAC00 \uBC14\uB00C\uC5C8\uC5B4\uC694. \uB2E4\uC2DC \uB4E4\uC5B4\uC640 \uC8FC\uC138\uC694","The family password has changed. Please enter the new one"),4e3),xs||ci()});var Qg=()=>J0(()=>{ci(),tr()&&An({force:!0})});Re("#btn-lock-set").onclick=Qg;ci();um().then(()=>{Op=!0,ci(),tr()&&An()});Np(10);var ey="family-visited",_s=new Set;try{_s=new Set(JSON.parse(localStorage.getItem(ey)||"[]"))}catch{}function ty(){document.querySelectorAll("#visits li").forEach(i=>i.classList.toggle("done",_s.has(i.dataset.id)));let n=_s.size,e=document.querySelectorAll("#visits li").length,t=Re("#visit-count");t&&(t.textContent=n?`${n}/${e}`:"")}addEventListener("wv:visit",n=>{if(!_s.has(n.detail)){_s.add(n.detail);try{localStorage.setItem(ey,JSON.stringify([..._s]))}catch{}ty(),_s.size===document.querySelectorAll("#visits li").length&&setTimeout(()=>{nt(_("\u{1F3C5} \uB9C8\uC744\uC758 \uBAA8\uB4E0 \uACF3\uC744 \uB458\uB7EC\uBD24\uC5B4\uC694!","\u{1F3C5} You've visited every spot in the village"),3600),or()},800)}});ty();var Jg;(Jg=Re("#btn-wide"))==null||Jg.addEventListener("click",()=>{let n=document.body.classList.toggle("wide");Re("#btn-wide").textContent=n?_("\u{1F4F1} \uD734\uB300\uD3F0 \uBCF4\uAE30","\u{1F4F1} Phone view"):_("\u{1F5A5} \uB113\uAC8C \uBCF4\uAE30","\u{1F5A5} Wide view"),Pe==null||Pe.resize()});function Up(){let n=be(),e=Be();!_t()||bm(n,e)||nn("visits",{id:`${n}-${e}`,who:n,day:e})}var Xg=!1;function Yg(n=4800){if(Xg||!_t())return;let e=di().length;if(!e)return;Xg=!0;let t=0,i=()=>{if(Cn()&&t++<20){setTimeout(i,1500);return}let r=di().length||e;nt(_(`\u{1F48C} \uB098\uC5D0\uAC8C \uC628 \uD3B8\uC9C0\uAC00 ${r}\uD1B5 \uC788\uC5B4\uC694 \xB7 \uB0B4 \uC9D1 \uC6B0\uCCB4\uD1B5\uC5D0 \uAE43\uBC1C\uC774 \uC62C\uB77C\uAC14\uC5B4\uC694`,`\u{1F48C} You have ${r===1?"a new letter":`${r} new letters`} \xB7 The flag is up on your mailbox`),4200)};setTimeout(i,n)}function G1(){var n;try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return t?((n=t.getExtension("WEBGL_lose_context"))==null||n.loseContext(),!0):!1}catch{return!1}}async function V1(){var u;let n=setTimeout(()=>{Pa||(Pa=!0,Re("#intro-help").textContent=_("\uB9C8\uC744\uC774 \uB2A6\uAC8C \uC5F4\uB9AC\uACE0 \uC788\uC5B4\uC694. \uBA3C\uC800 \uAE00\uB85C \uBCF4\uAE30\uB85C \uB458\uB7EC\uBD10 \uC8FC\uC138\uC694","The village is slow to load. Read the text view for now"),ci(),Re("#btn-enter").onclick=()=>s())},9e3);if(G1())try{Pe=await Dg({character:_i(),onProgress:Np})}catch(d){console.error("Could not load the 3D village; switching to the text view",d),Pe=null,Re("#app").innerHTML=""}clearTimeout(n),Pe?dh():document.body.classList.add("no3d"),Np(100),Pa=!0,pn.onSent=(Pe==null?void 0:Pe.letterSent)||null,pn.takePhoto=(Pe==null?void 0:Pe.takePhoto)||null,pn.portrait=(Pe==null?void 0:Pe.portrait)||null;let e=Re("#bgm"),t=Re("#btn-sound"),i=()=>{t.textContent=(uh.bgm?!e.paused:et.enabled)?"\u{1F50A}":"\u{1F507}"};function r(){xs||!Pe||!tr()||!be()||(xs=!0,document.body.classList.add("playing"),Re("#intro").classList.add("hide"),uh.bgm&&e.play().then(i).catch(()=>{}),Pe.start({hint:!0}),i(),Up(),Yg())}addEventListener("family:data",()=>{xs&&(Up(),Yg(1200))});function s(d){if(!tr()){nt(_("\u{1F512} \uAC00\uC871 \uC554\uD638\uB97C \uBA3C\uC800 \uB123\uC5B4 \uC8FC\uC138\uC694","\u{1F512} Enter the family password first"));return}Re("#intro").classList.add("hide"),Up(),Wg({canPlay:!!Pe&&!!be(),onPlay:r,onSent:Pe==null?void 0:Pe.letterSent,onClose:()=>{xs||Re("#intro").classList.remove("hide")},section:d})}let a=Pe?Pe.themes:As(),o=()=>Pe==null?void 0:Pe.setCharacter(_i()),l=()=>[{emoji:"\u{1F3E1}",label:_("\uC6B0\uB9AC \uAC00\uC871","Our family"),go:Nc},{emoji:"\u{1F4AC}",label:_("\uC624\uB298\uC758 \uC9C8\uBB38","Question of the day"),go:()=>cs()},{emoji:"\u2709\uFE0F",label:_("\uC548\uBD80 \uC6B0\uCCB4\uD1B5","Mailbox"),go:()=>qn(Pe==null?void 0:Pe.letterSent)},{emoji:"\u{1F4C5}",label:_("\uAC00\uC871 \uB2EC\uB825","Family calendar"),go:Lo},{emoji:"\u{1F5F3}\uFE0F",label:_("\uD22C\uD45C\uD568","Polls"),go:Bc},{emoji:"\u{1F331}",label:_("\uC6B0\uB9AC \uAC00\uC871 \uB098\uBB34","Our family tree"),go:Oc},Pe?{emoji:"\u{1F5BC}\uFE0F",label:_("\uAC00\uC871 \uC0AC\uC9C4\uAD00","Photo gallery"),go:()=>{rn(),Pe.enterMuseum()}}:{emoji:"\u{1F4DA}",label:_("\uC804\uCCB4 \uC568\uBC94","Full album"),go:()=>Gr(a)},{emoji:"\u2753",label:_("\uAC00\uC871 \uD034\uC988","Family quiz"),go:Za},{emoji:"\u{1F5FA}\uFE0F",label:_("\uBAA8\uC774\uB294 \uACF3","Meeting place"),go:Ya},..._t()?[{g:"me",emoji:"\u{1F3E0}",label:_("\uB0B4 \uC9D1","My house"),go:()=>Ta(be())}]:[],..._t()?[{g:"me",emoji:"\u{1F3A8}",label:_("\uCE90\uB9AD\uD130 \uAFB8\uBBF8\uAE30","Customize my character"),go:kc}]:[{g:"me",emoji:"\u2728",label:_("\uB0B4 \uCE90\uB9AD\uD130 \uB9CC\uB4E4\uAE30","Create my character"),go:()=>zc(o)}],{g:"me",emoji:"\u{1F64B}",label:_("\uB2E4\uB978 \uCE90\uB9AD\uD130\uB85C","Switch character"),go:()=>Kd(o)},{g:"set",emoji:"\u{1F4D6}",label:_("\uAE00\uB85C \uBCF4\uAE30","Text view"),go:()=>{rn(),s()}},{g:"set",emoji:us[ai()].emoji,label:_(`\uACC4\uC808: ${us[ai()].label}`,`Season: ${us[ai()].label}`),go:()=>{rn();let d=eg();nt(_(`${us[d].toast} \xB7 \uBA54\uB274\uC5D0\uC11C \uB610 \uBC14\uAFC0 \uC218 \uC788\uC5B4\uC694`,`${us[d].toast} \xB7 You can change it again in the menu`),3e3)}},...Pe?[{g:"set",emoji:"\u{1F319}",label:_("\uB0AE \xB7 \uBC24 \uBC14\uAFB8\uAE30","Day \xB7 night"),go:()=>{rn(),Pe.cycleTime()}},{g:"set",emoji:"\u{1F6B6}",label:_("\uC790\uB3D9 \uD22C\uC5B4","Auto tour"),go:()=>{rn(),Pe.startTour()}}]:[],{g:"set",emoji:"\u{1F512}",label:_("\uAC00\uC871 \uC554\uD638","Family password"),go:Qg},...hl()?[]:[{g:"set",emoji:"\u{1F4F1}",label:_("\uC571\uC73C\uB85C \uC124\uCE58","Install as an app"),go:Yh}],{g:"set",emoji:"\u{1F310}",label:_("English","\uD55C\uAD6D\uC5B4"),lang:Zt?"en":"ko",go:c}];function c(){let d=!1,m=()=>{d||(d=!0,_h(Zt?"en":"ko"))};addEventListener("popstate",m,{once:!0}),rn(),setTimeout(m,500)}Re("#btn-menu").onclick=()=>Zh(l()),Re("#btn-text-hud").onclick=()=>s(),(u=Re("#btn-desk-text"))==null||u.addEventListener("click",()=>s()),uh.bgm?(e.src=uh.bgm,t.hidden=!1,t.onclick=()=>{e.paused?e.play().then(i).catch(()=>{}):(e.pause(),i())}):Pe&&(t.hidden=!1,i(),t.onclick=()=>{let d=et.setEnabled(!et.enabled);i(),nt(d?_("\u{1F50A} \uC624\uB974\uACE8 \uBC30\uACBD\uC74C\uC744 \uCF30\uC5B4\uC694","\u{1F50A} Music box on"):_("\u{1F507} \uC18C\uB9AC\uB97C \uAED0\uC5B4\uC694","\u{1F507} Sound off"))});let h=Re("#btn-enter");h.onclick=()=>{if(!be()){zc(()=>ci());return}Pe?r():s()},Re("#btn-text").onclick=()=>s(),Re("#btn-tour-start").onclick=()=>{if(!Pe){s();return}if(!tr()||!be()){ci();return}r(),setTimeout(()=>Pe.startTour(),1400)},ci()}V1();})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
