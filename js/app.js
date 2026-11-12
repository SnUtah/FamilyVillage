(()=>{var $0=Object.defineProperty;var X0=(n,e)=>{for(var t in e)$0(n,t,{get:e[t],enumerable:!0})};var vs={};X0(vs,{albumView:()=>Ao,avatarHTML:()=>Eo,closeModal:()=>Mn,confetti:()=>ji,copy:()=>Jc,directionsView:()=>wo,esc:()=>De,initUI:()=>th,isBigFont:()=>_a,isOverlayOpen:()=>bn,letterView:()=>Tp,mailboxView:()=>So,menuView:()=>Ap,onData:()=>Qc,openLightbox:()=>Ro,openModal:()=>bo,openView:()=>Sr,paintStatus:()=>Kc,popBack:()=>Er,pushBack:()=>Xi,quizView:()=>To,replyView:()=>wp,setBigFont:()=>Yc,share:()=>xa,showAlbum:()=>wr,showDirections:()=>ya,showLetter:()=>ga,showMailbox:()=>Nn,showMenu:()=>eh,showQuiz:()=>va,toast:()=>et});function j0(n){let e=1779033703^n.length;for(let i=0;i<n.length;i++)e=Math.imul(e^n.charCodeAt(i),3432918353),e=e<<13|e>>>19;let t=e>>>0;return()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var Y0='"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "Android Emoji", sans-serif',Xd=[["#9CD3F2","#E6F5FF"],["#FFB88C","#FFE7C9"],["#F7C4D0","#FFF3F6"],["#2B2D5C","#6D5C9E"],["#C7E8F7","#FFECD8"]],wc=["#8FB8DE","#F4B8C0","#F7D58B","#A8D08D","#C9B3E6","#F9C59E","#E88A98","#7FC8C2"],Tc=["#5A3A2A","#3A2A24","#7A5238","#1E1A22","#C98A5B"],Z0={trips:[{kind:"hills",sky:0,who:"family",n:4,props:["\u{1F3EF}","\u{1F4F8}"]},{kind:"sea",sky:0,who:"kidparent",props:["\u{1F30A}","\u{1F41A}"]},{kind:"city",sky:4,who:"family",n:4,props:["\u{1F697}","\u{1F36A}"]},{kind:"park",sky:0,who:"family",n:5,props:["\u{1F34A}","\u{1F34A}"]},{kind:"hills",sky:3,who:"family",n:4,props:["\u26FA","\u2B50"]},{kind:"snow",sky:4,who:"kid",props:["\u{1F6F7}","\u2744\uFE0F"]},{kind:"hills",sky:1,who:"family",n:3,props:["\u{1F682}","\u{1F359}"]},{kind:"hills",sky:4,who:"family",n:5,props:["\u2708\uFE0F","\u{1F5FA}\uFE0F"]}],holidays:[{kind:"room",sky:4,who:"family",n:5,props:["\u{1F9E7}","\u{1F647}"]},{kind:"room",sky:1,who:"family",n:4,props:["\u{1F315}","\u{1F361}"]},{kind:"room",sky:2,who:"family",n:7,props:["\u{1F382}","\u{1F389}"]},{kind:"room",sky:4,who:"baby",props:["\u{1F382}","\u{1F388}"]},{kind:"room",sky:3,who:"family",n:4,props:["\u{1F382}","\u{1F56F}\uFE0F"]},{kind:"room",sky:3,who:"family",n:5,props:["\u{1F384}","\u{1F381}"]},{kind:"room",sky:2,who:"family",n:4,props:["\u{1F389}","\u{1F490}"]},{kind:"room",sky:4,who:"family",n:6,props:["\u{1F3B2}","\u{1F962}"]}],growing:[{kind:"room",sky:4,who:"baby",props:["\u{1F463}","\u{1F9F8}"]},{kind:"city",sky:0,who:"kid",props:["\u{1F392}","\u{1F3EB}"]},{kind:"park",sky:0,who:"kidparent",props:["\u{1F6B2}","\u{1F333}"]},{kind:"park",sky:0,who:"kid",props:["\u{1F3C3}","\u{1F947}"]},{kind:"city",sky:4,who:"kidparent",props:["\u{1F393}","\u{1F490}"]},{kind:"city",sky:0,who:"kid",props:["\u{1F454}","\u{1F3EB}"]},{kind:"city",sky:3,who:"kid",props:["\u{1F389}","\u{1F4DD}"]},{kind:"city",sky:4,who:"kid",props:["\u{1F4BC}","\u2615"]}],everyday:[{kind:"room",sky:4,who:"family",n:4,props:["\u{1F373}","\u{1F95B}"]},{kind:"room",sky:1,who:"kid",props:["\u{1F634}","\u{1F4FA}"]},{kind:"park",sky:1,who:"family",n:3,props:["\u{1F415}","\u{1F307}"]},{kind:"room",sky:4,who:"family",n:5,props:["\u{1F96C}","\u{1F336}\uFE0F"]},{kind:"park",sky:2,who:"kidparent",props:["\u{1F4A0}","\u{1F4A0}"]},{kind:"room",sky:3,who:"family",n:4,props:["\u{1F349}","\u{1F4AC}"]}],old:[{kind:"room",sky:2,who:"wedding",props:["\u{1F490}","\u2728"]},{kind:"cafe",sky:4,who:"couple",props:["\u2615","\u{1F39E}\uFE0F"]},{kind:"city",sky:0,who:"couple",props:["\u{1F3E0}","\u{1F331}"]},{kind:"room",sky:4,who:"kidparent",props:["\u{1F476}","\u{1F37C}"]},{kind:"hills",sky:0,who:"family",n:3,props:["\u{1F3E1}","\u{1F413}"]},{kind:"park",sky:4,who:"family",n:6,props:["\u{1F4F7}"]}]},jd=["park","hills","room","sea","city"],Yd=["couple","wedding","kid","family"];function ui(n,e,t,i,r,s){s=Math.min(s,i/2,r/2),n.beginPath(),n.moveTo(e+s,t),n.arcTo(e+i,t,e+i,t+r,s),n.arcTo(e+i,t+r,e,t+r,s),n.arcTo(e,t+r,e,t,s),n.arcTo(e,t,e+i,t,s),n.closePath()}function mt(n,e,t,i,r){n.fillStyle=r,n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fill()}function di(n,e,t,i,r,s=1){n.save(),n.globalAlpha=s,n.font=`${r}px ${Y0}`,n.textAlign="center",n.textBaseline="middle",n.fillText(e,t,i),n.restore()}function J0(n,e,t,i,r,s){let[a,o]=Xd[r]||Xd[0],l=r===3,c=i==="room"||i==="cafe",h=t*(i==="sea"?.56:.62);if(c){let f=n.createLinearGradient(0,0,0,t);f.addColorStop(0,i==="cafe"?"#E7C6A4":l?"#4B3F57":"#FFF4E8"),f.addColorStop(1,i==="cafe"?"#C99B74":l?"#3A3046":"#FBE3D2"),n.fillStyle=f,n.fillRect(0,0,e,t);let y=e*.56,p=t*.12,x=e*.32,g=t*.32;n.fillStyle="#FFFFFF",ui(n,y-8,p-8,x+16,g+16,10),n.fill();let v=n.createLinearGradient(0,p,0,p+g);if(v.addColorStop(0,a),v.addColorStop(1,o),n.fillStyle=v,n.fillRect(y,p,x,g),n.fillStyle="#FFFFFF",n.fillRect(y+x/2-3,p,6,g),n.fillRect(y,p+g/2-3,x,6),l)for(let T=0;T<12;T++)mt(n,y+s()*x,p+s()*g*.7,1.5+s()*1.5,"#FFF8C9");else mt(n,y+x*.72,p+g*.3,x*.1,"#FFE28A");n.fillStyle=i==="cafe"?"rgba(255,255,255,.35)":"rgba(244,184,192,.8)",ui(n,y-22,p-14,26,g+28,12),n.fill(),ui(n,y+x-4,p-14,26,g+28,12),n.fill();let b=t*.72;n.fillStyle=i==="cafe"?"#8F6B4E":"#E6C39A",n.fillRect(0,b,e,t-b),n.fillStyle="rgba(120,80,50,.15)";for(let T=0;T<7;T++)n.fillRect(0,b+T*((t-b)/7),e,2);if(i==="cafe"){for(let T=0;T<9;T++)mt(n,e*.08+T*e*.105,t*.07+Math.sin(T*1.3)*10,5,"#FFF1B8");n.fillStyle="rgba(255,255,255,.5)",ui(n,e*.06,t*.22,e*.36,8,4),n.fill(),di(n,"\u{1FAB4}",e*.12,t*.2,e*.08),di(n,"\u{1F4DA}",e*.32,t*.2,e*.07),n.fillStyle="#B98A66",n.beginPath(),n.ellipse(e*.5,t*.86,e*.3,t*.06,0,0,Math.PI*2),n.fill()}else n.fillStyle="rgba(255,255,255,.7)",ui(n,e*.1,t*.16,e*.2,t*.17,8),n.fill(),di(n,l?"\u{1F319}":"\u{1F5BC}\uFE0F",e*.2,t*.25,e*.08),di(n,"\u{1FAB4}",e*.1,t*.7,e*.11);return{horizon:t*.74,indoor:!0}}let u=n.createLinearGradient(0,0,0,h);if(u.addColorStop(0,a),u.addColorStop(1,o),n.fillStyle=u,n.fillRect(0,0,e,h+2),l){for(let f=0;f<40;f++)mt(n,s()*e,s()*h*.85,.8+s()*1.6,"rgba(255,248,210,.9)");mt(n,e*.78,t*.14,e*.07,"#FFF3C4")}else{let f=e*(.15+s()*.7),y=t*(.1+s()*.12),p=n.createRadialGradient(f,y,0,f,y,e*.28);p.addColorStop(0,"rgba(255,245,200,.9)"),p.addColorStop(1,"rgba(255,245,200,0)"),n.fillStyle=p,n.fillRect(0,0,e,h),mt(n,f,y,e*.06,r===1?"#FFD27A":"#FFF0A8");for(let x=0;x<3;x++){let g=s()*e,v=t*(.08+s()*.25),b=e*(.05+s()*.04);n.fillStyle="rgba(255,255,255,.85)";for(let T=0;T<4;T++)n.beginPath(),n.arc(g+T*b*.9-b*1.3,v+T%2*b*.3,b*(.7+T%3*.2),0,7),n.fill()}}if(i==="sea"){let f=n.createLinearGradient(0,h,0,t*.8);f.addColorStop(0,l?"#2F4F7A":"#5FB8E6"),f.addColorStop(1,l?"#243F63":"#8AD3F2"),n.fillStyle=f,n.fillRect(0,h,e,t*.8-h),n.strokeStyle="rgba(255,255,255,.55)",n.lineWidth=3,n.lineCap="round";for(let y=0;y<7;y++){let p=h+14+y*22+s()*8,x=s()*e;n.beginPath(),n.moveTo(x,p),n.lineTo(x+30+s()*50,p),n.stroke()}return n.fillStyle="#F6E3B8",n.beginPath(),n.moveTo(0,t*.8),n.quadraticCurveTo(e*.5,t*.74,e,t*.82),n.lineTo(e,t),n.lineTo(0,t),n.fill(),{horizon:t*.86}}if(i==="mountain")for(let f=0;f<4;f++){let y=e*(f*.33-.1)+s()*30,p=e*.45,x=t*(.28+s()*.1);n.fillStyle=f%2?"#8FA7C7":"#A9BFDC",n.beginPath(),n.moveTo(y-p/2,h),n.lineTo(y,h-x),n.lineTo(y+p/2,h),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(y-p*.14,h-x*.68),n.lineTo(y,h-x),n.lineTo(y+p*.14,h-x*.68),n.lineTo(y+p*.05,h-x*.62),n.lineTo(y-p*.06,h-x*.64),n.fill()}if(i==="city"){for(let f=-10;f<e;f+=0){let y=40+s()*70,p=t*(.12+s()*.3);n.fillStyle=l?["#3B3550","#2E2A42","#46405D"][Math.floor(s()*3)]:["#D9D0E6","#CFC6DD","#E4DCEF"][Math.floor(s()*3)],n.fillRect(f,h-p,y,p+4),n.fillStyle=l?"#FFE9A8":"rgba(255,255,255,.7)";for(let x=h-p+10;x<h-12;x+=16)for(let g=f+7;g<f+y-10;g+=14)s()>.35&&n.fillRect(g,x,7,9);f+=y+6}n.fillStyle=l?"#4A4458":"#CFC3B6",n.fillRect(0,h,e,t-h),n.fillStyle="rgba(255,255,255,.5)";for(let f=10;f<e;f+=60)n.fillRect(f,h+(t-h)*.5,30,4);return{horizon:t*.86}}let d=i==="snow",m=d?["#F4F7FB","#EAF0F7","#FFFFFF"]:l?["#3F6B4A","#355C40","#4A7A55"]:["#9ED08A","#86C174","#B2DB9C"];n.fillStyle=m[0],n.fillRect(0,h,e,t-h);for(let f=0;f<3;f++)n.fillStyle=m[(f+1)%3],n.beginPath(),n.ellipse(e*(.2+f*.35)+s()*40,h+10+f*6,e*(.45+s()*.2),t*(.08+s()*.05),0,Math.PI,Math.PI*2),n.fill();for(let f=0;f<4;f++){let y=s()<.5?e*(.04+s()*.2):e*(.76+s()*.2),p=h+4+s()*10,x=e*(.05+s()*.03);n.fillStyle="#A47A5C",n.fillRect(y-x*.12,p-x*1.4,x*.24,x*1.4);let g=d?["#FFFFFF","#EEF3F8"]:i==="park"&&r===2?["#F9C9D2","#FCDCE3"]:["#7DB86C","#9ED08A"];mt(n,y,p-x*1.6,x*.75,g[0]),mt(n,y-x*.5,p-x*1.25,x*.55,g[1]),mt(n,y+x*.5,p-x*1.25,x*.55,g[1])}if(d)for(let f=0;f<60;f++)mt(n,s()*e,s()*t,1.5+s()*2.5,"rgba(255,255,255,.9)");else if(!l)for(let f=0;f<18;f++)mt(n,s()*e,h+16+s()*(t-h-30),3+s()*3,["#FFFFFF","#F4B8C0","#F7D58B","#FFB7A5"][f%4]);return{horizon:t*.88}}function ln(n,e,t,i,r={}){let s="#FFE0C7",a=r.hair||Tc[0],o=r.suit?"#2F2B33":r.dress?"#FFFFFF":r.outfit||wc[0],l=t-2.95*i;if(n.lineCap="round",n.fillStyle="rgba(0,0,0,.12)",n.beginPath(),n.ellipse(e,t+i*.1,i*1.1,i*.22,0,0,Math.PI*2),n.fill(),r.veil&&(n.fillStyle="rgba(255,255,255,.7)",n.beginPath(),n.ellipse(e,l+i*.9,i*1.25,i*1.9,0,0,Math.PI*2),n.fill()),(r.long||r.dress)&&(n.fillStyle=a,ui(n,e-i*1.02,l-i*.4,i*2.04,i*1.9,i*.5),n.fill()),!r.dress){n.strokeStyle=r.suit?"#2F2B33":"#6B5B53",n.lineWidth=i*.36;for(let h of[-1,1])n.beginPath(),n.moveTo(e+h*i*.28,t-i*1),n.lineTo(e+h*i*.28,t-i*.15),n.stroke();n.fillStyle="#4A3B38";for(let h of[-1,1])n.beginPath(),n.ellipse(e+h*i*.3,t-i*.05,i*.26,i*.14,0,0,Math.PI*2),n.fill()}r.dress&&(n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(e-i*.5,t-i*1.5),n.lineTo(e+i*.5,t-i*1.5),n.quadraticCurveTo(e+i*1.3,t-i*.4,e+i*1.25,t),n.lineTo(e-i*1.25,t),n.quadraticCurveTo(e-i*1.3,t-i*.4,e-i*.5,t-i*1.5),n.fill(),n.fillStyle="#F4B8C0",ui(n,e-i*.55,t-i*1.55,i*1.1,i*.14,i*.07),n.fill()),n.fillStyle=o,ui(n,e-i*.65,t-i*2.05,i*1.3,i*1.25,i*.5),n.fill(),r.suit&&(n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(e-i*.2,t-i*2),n.lineTo(e+i*.2,t-i*2),n.lineTo(e,t-i*1.45),n.fill(),n.fillStyle="#1E1A22",n.beginPath(),n.moveTo(e,t-i*1.92),n.lineTo(e-i*.18,t-i*2.02),n.lineTo(e-i*.18,t-i*1.82),n.fill(),n.beginPath(),n.moveTo(e,t-i*1.92),n.lineTo(e+i*.18,t-i*2.02),n.lineTo(e+i*.18,t-i*1.82),n.fill(),mt(n,e-i*.42,t-i*1.85,i*.1,"#F4B8C0")),n.strokeStyle=r.dress?s:o,n.lineWidth=i*.3;let c=(h,u)=>{n.beginPath(),n.moveTo(e+h*i*.6,t-i*1.85),u?n.lineTo(e+h*i*1,t-i*2.7):n.lineTo(e+h*i*.82,t-i*1.1),n.stroke(),mt(n,u?e+h*i*1:e+h*i*.82,u?t-i*2.72:t-i*1.08,i*.17,s)};if(c(-1,r.waveL),c(1,r.wave),r.bouquet&&(n.fillStyle="#9CC08A",ui(n,e-i*.08,t-i*1.25,i*.16,i*.4,i*.05),n.fill(),["#F4B8C0","#FFFFFF","#F7D58B","#E88A98","#FFE3EA","#F4B8C0"].forEach((h,u)=>mt(n,e+Math.cos(u*1.05)*i*.22,t-i*1.35+Math.sin(u*1.05)*i*.18,i*.16,h)),mt(n,e,t-i*1.33,i*.16,"#E88A98")),mt(n,e,l,i,s),n.fillStyle=a,n.beginPath(),n.arc(e,l-i*.05,i*1.04,Math.PI*1.02,Math.PI*1.98),n.quadraticCurveTo(e+i*.5,l-i*.05,e+i*.25,l+i*.25),n.quadraticCurveTo(e-i*.2,l-i*.2,e-i*.6,l+i*.1),n.quadraticCurveTo(e-i*1,l-i*.05,e-i*1.04,l-i*.05),n.fill(),r.crown)for(let h=0;h<5;h++)mt(n,e-i*.6+h*i*.3,l-i*.98+Math.abs(h-2)*i*.1,i*.09,h%2?"#F4B8C0":"#FFFFFF");r.hat&&di(n,r.hat,e,l-i*1,i*1.3);for(let h of[-1,1])mt(n,e+h*i*.33,l+i*.05,i*.12,"#2B2220"),mt(n,e+h*i*.33+i*.04,l,i*.04,"#FFFFFF"),mt(n,e+h*i*.6,l+i*.32,i*.15,"rgba(255,150,150,.55)");if(r.glasses){n.strokeStyle="#4A3B38",n.lineWidth=i*.06;for(let h of[-1,1])n.beginPath(),n.arc(e+h*i*.33,l+i*.05,i*.22,0,Math.PI*2),n.stroke()}n.strokeStyle="#2B2220",n.lineWidth=i*.07,n.beginPath(),n.arc(e,l+i*.4,i*.16,.15,Math.PI-.15),n.stroke(),r.balloon&&(n.strokeStyle="#B8A59B",n.lineWidth=1.5,n.beginPath(),n.moveTo(e+i*.82,t-i*1.08),n.lineTo(e+i*1.3,t-i*3.9),n.stroke(),mt(n,e+i*1.3,t-i*4.4,i*.55,r.balloon),mt(n,e+i*1.15,t-i*4.55,i*.14,"rgba(255,255,255,.6)"))}function K0(n,e,t,i,r,s=2){let a=e/2,o=e*.085,l=()=>wc[Math.floor(r()*wc.length)],c=()=>Tc[Math.floor(r()*Tc.length)];if(i==="wedding")ln(n,a-o*1.35,t,o,{suit:!0,hair:"#3A2A24",wave:r()<.4}),ln(n,a+o*1.35,t,o,{dress:!0,veil:!0,crown:!0,bouquet:!0,hair:"#5A3A2A"});else if(i==="bride")ln(n,a,t,o*1.15,{dress:!0,veil:!0,crown:!0,bouquet:!0,hair:"#5A3A2A",wave:r()<.5});else if(i==="groom")ln(n,a,t,o*1.15,{suit:!0,hair:"#3A2A24",wave:!0});else if(i==="propose")ln(n,a-o*1.3,t,o,{suit:!1,outfit:"#8FB8DE",hair:"#3A2A24",wave:!0}),ln(n,a+o*1.3,t,o,{outfit:"#F4B8C0",hair:"#5A3A2A",long:!0,waveL:!0}),di(n,"\u{1F48D}",a-o*.3,t-o*2.9,o*1.1);else if(i==="couple")ln(n,a-o*1.3,t,o,{outfit:l(),hair:c(),wave:r()<.5}),ln(n,a+o*1.3,t,o,{outfit:l(),hair:c(),long:!0,waveL:r()<.5});else if(i==="kid"||i==="kid-balloon")ln(n,a,t,o*.75,{outfit:l(),hair:c(),long:r()<.5,wave:!0,balloon:i==="kid-balloon"?"#E88A98":null});else if(i==="baby")ln(n,a,t,o*.6,{outfit:"#FFF3EA",hair:"#5A3A2A",hat:"\u{1F380}"});else if(i==="kidparent")ln(n,a-o*.9,t,o,{outfit:l(),hair:c(),long:!0}),ln(n,a+o*1,t,o*.7,{outfit:l(),hair:c(),wave:!0});else if(i==="family"){let h=Math.min(7,Math.max(3,s)),u=Math.min(o*2.1,e*.9/h);for(let d=0;d<h;d++){let m=a+(d-(h-1)/2)*u,f=d===0||h>4&&d===h-1,y=!f&&d>h-3&&h>3&&d%2===1;ln(n,m,t,o*(y?.7:f?.95:1),{outfit:l(),hair:f?"#C8C2C0":c(),long:d%2===1,glasses:f,wave:d===h-1})}}}function Zd(n,e,t=840){let i=n.id||"everyday",r=Z0[i],s=j0(`${i}:${e}`),a=r&&r[e]||{kind:jd[Math.floor(s()*jd.length)],sky:Math.floor(s()*5),who:Yd[Math.floor(s()*Yd.length)],props:["\u2728"]},o=[1,4/3,3/4][e%3],l=Math.round(o>=1?t:t*o),c=Math.round(o>=1?t/o:t),h=document.createElement("canvas");h.width=l,h.height=c;let u=h.getContext("2d"),m=J0(u,l,c,a.kind,a.sky,s).horizon,f=a.props[0];f&&di(u,f,l*(s()<.5?.15:.85),m-l*.36,l*.21,.95),K0(u,l,m-6,a.who,s,a.n),a.props.slice(1).forEach((p,x)=>di(u,p,l*(.12+x*.7+s()*.1),m-l*.06+s()*10,l*.12));for(let p=0;p<10;p++)mt(u,s()*l,s()*c*.6,1.2+s()*2,"rgba(255,255,255,.75)");if(i==="holidays")for(let p=0;p<5;p++)di(u,["\u{1F389}","\u2728","\u{1F388}"][p%3],s()*l,s()*c*.5,l*.035,.8);let y=u.createRadialGradient(l/2,c/2,l*.35,l/2,c/2,l*.85);return y.addColorStop(0,"rgba(0,0,0,0)"),y.addColorStop(1,"rgba(60,30,20,.22)"),u.fillStyle=y,u.fillRect(0,0,l,c),i==="old"&&(u.fillStyle="rgba(150,105,40,.2)",u.fillRect(0,0,l,c),u.strokeStyle="#FFFDF8",u.lineWidth=l*.035,u.strokeRect(0,0,l,c)),h}var Rc=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"],aa=()=>window.FAMILY||{},ts=n=>{try{return new Date(n.toLocaleString("en-US",{timeZone:"Asia/Seoul"}))}catch{return new Date(n.getTime()+(n.getTimezoneOffset()+540)*6e4)}},ki=n=>String(n).padStart(2,"0"),es=null,Cc=0;function Q0(){let n=ts(new Date),e=null;for(let t of aa().members||[]){if(!/^\d{2}-\d{2}$/.test(t.birthday||""))continue;let[i,r]=t.birthday.split("-").map(Number),s=n.getFullYear(),a=new Date(`${s}-${ki(i)}-${ki(r)}T10:00:00+09:00`);ts(a)<new Date(n.getFullYear(),n.getMonth(),n.getDate())&&(a=new Date(`${s+1}-${ki(i)}-${ki(r)}T10:00:00+09:00`)),(!e||a<e)&&(e=a)}return e}function Jd(){es=null;let n=location.hash.slice(1),e=n.match(/(?:^|&)now=([^&]+)/);if(e){let t=decodeURIComponent(e[1]),i=new Date(/[+Z]/.test(t.slice(10))?t:t+(t.length<=10?"T10:00:00":t.length<=16?":00":"")+"+09:00");if(!isNaN(i)){es=i.getTime(),Cc=Date.now();return}}if(/(?:^|&)demo(?:&|$)/.test(n)){let t=Q0();t&&(es=t.getTime(),Cc=Date.now())}}Jd();addEventListener("hashchange",Jd);function Hi(){return es?new Date(es+(Date.now()-Cc)):new Date}var Kd=()=>!!es;function Ne(n=Hi()){let e=ts(n);return`${e.getFullYear()}-${ki(e.getMonth()+1)}-${ki(e.getDate())}`}function cn(n,e){let[t,i,r]=n.split("-").map(Number),s=new Date(Date.UTC(t,i-1,r+e));return`${s.getUTCFullYear()}-${ki(s.getUTCMonth()+1)}-${ki(s.getUTCDate())}`}function Jn(n,e){let t=i=>{let[r,s,a]=i.split("-").map(Number);return Date.UTC(r,s-1,a)};return Math.round((t(e)-t(n))/864e5)}function ns(n=Hi()){let e=ts(n),t=e.getHours(),i=e.getMinutes(),r=t<12?"\uC624\uC804":"\uC624\uD6C4",s=t%12===0?12:t%12;return{date:`${e.getFullYear()}\uB144 ${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C ${Rc[e.getDay()]}\uC694\uC77C`,short:`${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C (${Rc[e.getDay()]})`,time:`${r} ${s}\uC2DC${i?" "+i+"\uBD84":""}`,k:e}}function hn(n,e=!0){let[t,i,r]=n.split("-").map(Number),s=new Date(Date.UTC(t,i-1,r)).getUTCDay();return`${i}\uC6D4 ${r}\uC77C${e?` (${Rc[s]})`:""}`}function Gi(n){let e=new Date(n);if(isNaN(e))return"";let t=Jn(Ne(e),Ne());if(t===0)return"\uC624\uB298";if(t===1)return"\uC5B4\uC81C";let i=ts(e);return`${i.getMonth()+1}\uC6D4 ${i.getDate()}\uC77C`}function Qe(n=10){var e;try{(e=navigator.vibrate)==null||e.call(navigator,n)}catch{}}function is(){var t;let n=aa();return(((t=n.museum)==null?void 0:t.themes)||[]).map(i=>{var s;let r;return Array.isArray(i.photos)&&i.photos.length?r=i.photos.map((a,o)=>{var l;return typeof a=="string"?{src:a,caption:((l=i.captions)==null?void 0:l[o])||""}:a}):n.demoPhotos||i.demo?r=Array.from({length:i.count||((s=i.captions)==null?void 0:s.length)||0},(a,o)=>{var l;return{src:`demo:${i.id}:${o}`,caption:((l=i.captions)==null?void 0:l[o])||""}}):r=Array.from({length:i.count||0},(a,o)=>{var l;return{src:`${i.folder}/${o+1}.${i.ext||"jpg"}`,caption:((l=i.captions)==null?void 0:l[o])||""}}),r.forEach((a,o)=>{a.idx=o,a.theme=i}),{...i,photos:r}})}var Ac=new Map,eg=n=>typeof(n==null?void 0:n.src)=="string"&&n.src.startsWith("demo:");function gr(n,e="full"){if(!eg(n))return n.src;let t=`${n.src}:${e}`;if(!Ac.has(t)){let i=Zd(n.theme,n.idx,e==="thumb"?360:840);Ac.set(t,i.toDataURL("image/jpeg",e==="thumb"?.8:.86))}return Ac.get(t)}function yr(n,e,t,i=600,r=600,s="\uC0AC\uC9C4\uC744 \uB123\uC5B4\uC8FC\uC138\uC694"){let a=document.createElement("canvas");a.width=i,a.height=r;let o=a.getContext("2d"),l=o.createLinearGradient(0,0,i,r);return l.addColorStop(0,"#FFFDF8"),l.addColorStop(1,n.color||"#F4B8C0"),o.fillStyle=l,o.fillRect(0,0,i,r),o.textAlign="center",o.textBaseline="middle",o.font=`${i*.2}px serif`,o.fillText(n.emoji||"\u{1F4F7}",i/2,r*.38),o.fillStyle="#7C6A66",o.font=`${i*.08}px "Jua"`,o.fillText(`${n.title} #${e+1}`,i/2,r*.62),o.font=`${i*.04}px "Gowun Dodum"`,o.globalAlpha=.7,o.fillText(s,i/2,r*.73),o.fillText(t,i/2,r*.8),a}function oa(){return(aa().questions||[]).map(n=>typeof n=="string"?{q:n}:n).filter(n=>n&&n.q)}function ho(n=Ne()){let e=oa().length;if(!e)return-1;let t=/^\d{4}-\d{2}-\d{2}$/.test(aa().questionStart||"")?aa().questionStart:n;return(Jn(t,n)%e+e)%e}var Vi=()=>window.FAMILY||{},Pc=["letters","answers","replies","hearts","visits","water","votes","polls","scores","looks"],Qd=new Set(["votes","looks","answers"]),tn=()=>!!Vi().sheet,tg=()=>String(Vi().site||"main"),pi="family-mine-v1",Uc="family-remote-v1",Ic="family-code",ss=n=>{try{let e=JSON.parse(localStorage.getItem(n)||"{}");return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}},rs=(n,e)=>{try{localStorage.setItem(n,JSON.stringify(e))}catch{}},ng=()=>crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{let e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)}),ep=n=>{try{dispatchEvent(new CustomEvent("family:data",{detail:n}))}catch{}},Nc=()=>{var n;return tn()||!!((n=Vi().lock)!=null&&n.demoCode)},Dc=()=>{try{return localStorage.getItem(Ic)||""}catch{return""}},Fc=n=>{try{n?localStorage.setItem(Ic,n):localStorage.removeItem(Ic)}catch{}};function as(){if(!Nc())return!0;let n=Dc();return n?tn()?!0:n===String(Vi().lock.demoCode):!1}async function tp(n){var e;if(n=String(n||"").trim(),!n)return{ok:!1,error:"empty"};if(!tn()){let t=n===String(((e=Vi().lock)==null?void 0:e.demoCode)||"");return t&&Fc(n),{ok:t,error:t?null:"code"}}try{return await po("GET",{action:"check",code:n}),Fc(n),{ok:!0}}catch(t){return{ok:!1,error:(t==null?void 0:t.message)==="code"?"code":"network"}}}var Lc=null,uo=n=>{var e;return((e=(Vi().members||[]).find(t=>t.id===n))==null?void 0:e.name)||n};function ig(){var l;if(Lc)return Lc;let n=Vi().samples||{},e=Ne(),t=Hi().getTime(),i=(c=0,h=0)=>new Date(t-c*864e5-(40+h*37%300)*6e4).toISOString(),r=c=>cn(e,-(c||0)),s={};s.letters=(n.letters||[]).map((c,h)=>({id:`seed-letters-${h}`,who:c.from,name:uo(c.from),to:c.to||"all",message:c.message,time:i(c.daysAgo,h),openAt:c.openInDays?cn(e,c.openInDays):"",seed:!0}));let a=c=>{let h=String(c||"").match(/^letters:(\d+)$/);return h?`seed-letters-${h[1]}`:String(c||"")};s.replies=(n.replies||[]).map((c,h)=>({id:`seed-replies-${h}`,who:c.who,name:uo(c.who),target:a(c.target),text:c.text||"",emoji:c.emoji||"",time:i(0,h+3),seed:!0})),s.hearts=(n.hearts||[]).map((c,h)=>({id:`${c.from}-${c.to}-${r(c.daysAgo)}`,who:c.from,to:c.to,day:r(c.daysAgo),time:i(c.daysAgo,h),seed:!0})),s.visits=(n.visits||[]).map((c,h)=>({id:`${c.who}-${r(c.daysAgo)}`,who:c.who,day:r(c.daysAgo),time:i(c.daysAgo,h),seed:!0})),s.water=(n.water||[]).map((c,h)=>({id:`${c.who}-${r(c.daysAgo)}`,who:c.who,day:r(c.daysAgo),time:i(c.daysAgo,h),seed:!0})),s.votes=(n.votes||[]).map((c,h)=>({id:`${c.who}-${c.poll}`,who:c.who,poll:c.poll,choice:+c.choice||0,time:i(1,h),seed:!0})),s.scores=(n.scores||[]).map((c,h)=>({id:`seed-scores-${h}`,who:c.who,name:uo(c.who),score:+c.score||0,total:+c.total||0,time:i(2,h),seed:!0})),s.answers=[];let o=oa();for(let c=0;c<14&&o.length;c++){let h=cn(e,-c),u=ho(h);Object.entries(((l=o[u])==null?void 0:l.samples)||{}).forEach(([d,m],f)=>{s.answers.push({id:`${d}-${h}`,who:d,name:uo(d),day:h,q:u,text:m,time:i(c,f*5+1),seed:!0})})}return s.polls=[],s.looks=[],Lc=s,s}var bt={data:tn()?ss(Uc):{},at:0,loading:null,error:null,ok:!1},np=()=>({remote:tn(),loading:!!bt.loading,error:bt.error,loaded:bt.ok,at:bt.at});async function po(n,e,t){let i=new URL(Vi().sheet);i.searchParams.set("site",tg()),n==="GET"&&!(e!=null&&e.code)&&i.searchParams.set("code",Dc()),Object.entries(e||{}).forEach(([a,o])=>i.searchParams.set(a,o));let r=typeof AbortController=="function"?new AbortController:null,s=setTimeout(()=>r==null?void 0:r.abort(),15e3);try{let o=await(await fetch(i.toString(),{method:n,redirect:"follow",signal:r==null?void 0:r.signal,...t?{body:JSON.stringify({...t,code:Dc()}),headers:{"Content-Type":"text/plain;charset=utf-8"}}:{}})).json();if(o&&o.error==="code"){if(!(e!=null&&e.code)){Fc("");try{dispatchEvent(new CustomEvent("family:locked"))}catch{}}throw new Error("code")}if(!o||o.ok!==!0)throw new Error((o==null?void 0:o.error)||"bad response");return o}finally{clearTimeout(s)}}var rg=["q","choice","score","total"];function sg(n,e){let t={};if(Object.entries(e||{}).forEach(([i,r])=>{t[i]=r==null?"":r}),t.id=String(t.id||""),t.who=String(t.who||""),t.time&&typeof t.time!="string"&&(t.time=String(t.time)),rg.forEach(i=>{i in t&&t[i]!==""&&(t[i]=Number(t[i]))}),n==="looks"&&typeof t.look=="string")try{t.look=JSON.parse(t.look)}catch{t.look={}}return n==="polls"&&typeof t.options=="string"&&(t.options=t.options.split("|").filter(Boolean)),t.openAt&&typeof t.openAt!="string"&&(t.openAt=String(t.openAt)),t.openAt&&(t.openAt=String(t.openAt).slice(0,10)),(t.locked==="true"||t.locked===!0)&&(t.locked=!0),t}async function ag(){let n=ss(pi),e=!1;e:for(let t of Pc)for(let i of n[t]||[]){if(!i.pending)continue;let{pending:r,...s}=i;try{await po("POST",{},{kind:t,...s}),delete i.pending,e=!0}catch{break e}}e&&rs(pi,n)}function Fn({force:n=!1}={}){return tn()?bt.loading?bt.loading:!n&&bt.ok&&Date.now()-bt.at<1e4?Promise.resolve():(bt.loading=(async()=>{try{await ag();let e=await po("GET",{action:"all",t:Date.now()}),t={};Pc.forEach(s=>{var a;t[s]=(Array.isArray((a=e.data)==null?void 0:a[s])?e.data[s]:[]).map(o=>sg(s,o)).filter(o=>o.id)}),bt.data=t,bt.at=Date.now(),bt.ok=!0,bt.error=null,rs(Uc,t);let i=ss(pi),r=!1;Pc.forEach(s=>{let a=new Set(t[s].map(o=>o.id));(i[s]||[]).forEach(o=>{o.pending&&a.has(o.id)&&!Qd.has(s)&&(delete o.pending,r=!0)})}),r&&rs(pi,i)}catch(e){bt.error=(e==null?void 0:e.message)||String(e)}finally{bt.loading=null,ep({refresh:!0})}})(),bt.loading):Promise.resolve()}function at(n){let e=(ss(pi)[n]||[]).map(o=>({...o,mine:!0})),t=tn()?bt.data[n]||[]:[],i=ig()[n]||[],r=new Set(e.map(o=>o.id)),s=[...e,...t.map(o=>r.has(o.id)?{...o,mine:!0}:o),...i],a=new Map;for(let o of s){let l=a.get(o.id);if(!l){a.set(o.id,o);continue}(Qd.has(n)?(o.time||"")>(l.time||""):l.pending&&!o.pending)&&a.set(o.id,{...o,mine:l.mine||o.mine})}return[...a.values()].sort((o,l)=>String(l.time||"").localeCompare(String(o.time||"")))}async function nn(n,e){let t={id:e.id||ng(),time:new Date().toISOString(),...e},i=ss(pi);i[n]=[tn()?{...t,pending:!0}:t,...(i[n]||[]).filter(s=>s.id!==t.id)].slice(0,300),rs(pi,i);let r=()=>setTimeout(()=>ep({kind:n,item:t}),0);if(!tn())return r(),{ok:!0,item:t,sent:!1};try{await po("POST",{},{kind:n,...t});let s=ss(pi),a=(s[n]||[]).find(o=>o.id===t.id);return a&&(delete a.pending,rs(pi,s)),bt.data[n]=[t,...(bt.data[n]||[]).filter(o=>o.id!==t.id)],rs(Uc,bt.data),{ok:!0,item:t,sent:!0}}catch(s){return{ok:!1,item:t,sent:!1,error:(s==null?void 0:s.message)||String(s)}}finally{r()}}var vr=()=>window.FAMILY||{},og=n=>String(n).padStart(2,"0"),os=["#8FB8DE","#F4B8C0","#F7D58B","#A8D08D","#C9B3E6","#F9C59E","#E88A98","#7FC8C2"],fo=["#5A3A2A","#3A2A24","#7A5238","#1E1A22","#C98A5B","#E8E4DE"],Wt=()=>`${vr().name||"\uC6B0\uB9AC"} \uB9C8\uC744`,mo=null,ip=-1;function lg(){let n=at("looks"),e=n.map(t=>t.id+t.time).join();return e!==ip&&(ip=e,mo=new Map,n.forEach(t=>{mo.has(t.who)||mo.set(t.who,t.look||{})})),mo}function rn(){let n=lg();return(vr().members||[]).filter(e=>e&&e.id).slice(0,8).map((e,t)=>{let i={outfit:os[t%os.length],hair:fo[t%5],longHair:!1,glasses:!1,hat:"",kid:!1,...e.look||{}};return{...e,index:t,look:{...i,...n.get(e.id)||{}}}})}var It=n=>rn().find(e=>e.id===n)||null,_n=(n,e="")=>{var t;return((t=It(n))==null?void 0:t.name)||e||n||""},la=n=>{var e;return((e=It(n))==null?void 0:e.look.outfit)||"#F4B8C0"},sn=n=>{let e=It(n);return e?e.role||e.name:n||""},rp="family-me";function Me(){let n="";try{n=localStorage.getItem(rp)||""}catch{}return n==="guest"||It(n)?n:""}function go(n){try{localStorage.setItem(rp,n)}catch{}try{dispatchEvent(new CustomEvent("family:me",{detail:n}))}catch{}}var xt=()=>It(Me()),ca=()=>Me()==="guest";function Wi(){let n=vr().since;return/^\d{4}-\d{2}-\d{2}$/.test(n||"")?Jn(n,Ne())+1:0}function ls(n=Ne()){let e=n.slice(5);return rn().filter(t=>t.birthday===e)}function cg(n,e,t){if(/^\d{4}-\d{2}-\d{2}$/.test(n)&&!e)return n>=t?n:null;let i=n.length===10?n.slice(5):n;if(!/^\d{2}-\d{2}$/.test(i))return null;let r=+t.slice(0,4),s=`${r}-${i}`;return s>=t?s:`${r+1}-${i}`}function sp(){let n=rn().filter(t=>/^\d{2}-\d{2}$/.test(t.birthday||"")).map(t=>({title:`${t.name} \uC0DD\uC77C`,date:t.birthday,yearly:!0,emoji:"\u{1F382}",kind:"birthday",member:t.id,note:t.lunar?"\uC74C\uB825 \uC0DD\uC77C (\uC62C\uD574 \uC591\uB825 \uB0A0\uC9DC)":""})),e=(vr().events||[]).filter(t=>t&&t.date).map(t=>({...t,kind:"event",yearly:!!t.yearly||/^\d{2}-\d{2}$/.test(t.date)}));return[...n,...e]}function cs(n=6,e=Ne()){return sp().map(t=>{let i=cg(t.date,t.yearly,e);return i?{...t,key:i,dday:Jn(e,i)}:null}).filter(Boolean).sort((t,i)=>t.dday-i.dday).slice(0,n)}function ap(n,e){let t={},i=`${n}-${og(e)}`;return sp().forEach(r=>{let s=r.yearly?`${n}-${r.date.length===10?r.date.slice(5):r.date}`:r.date;s.startsWith(i)&&(t[s]=t[s]||[]).push(r)}),t}var ha=n=>n===0?"\uC624\uB298":n>0?`D-${n}`:`D+${-n}`;function hs(n=Ne()){let e=ho(n);return e<0?null:{idx:e,q:oa()[e].q,day:n}}function mi(n){let e=new Set;return at("answers").filter(t=>t.day===n&&!e.has(t.who)&&e.add(t.who)).reverse()}var Bc=n=>mi(n).find(e=>e.who===Me())||null;function op(n=14){let e=Ne();return Array.from({length:n},(t,i)=>{let r=cn(e,-i),s=hs(r);return s&&{...s,answers:mi(r)}}).filter(Boolean)}var us=n=>at("hearts").filter(e=>e.to===n),lp=n=>us(n).filter(e=>e.day===Ne()),yo=n=>at("hearts").some(e=>e.to===n&&e.who===Me()&&e.day===Ne());function vo(n=Ne()){return[...new Set(at("visits").filter(t=>t.day===n).map(t=>t.who))].map(It).filter(Boolean)}var cp=()=>new Set(at("visits").filter(n=>n.who===Me()).map(n=>n.day)).size,hp=(n,e)=>at("visits").some(t=>t.who===n&&t.day===e),xo=["\uC528\uC557","\uC0C8\uC2F9","\uBB18\uBAA9","\uB098\uBB34","\uAF43\uB098\uBB34","\uC5F4\uB9E4 \uB098\uBB34"];function fi(){var c,h,u,d;let n=at("water"),e=n.length,t=(((c=vr().tree)==null?void 0:c.stages)||[3,10,25,45,80]).slice(0,5),i=0;t.forEach((m,f)=>{e>=m&&(i=f+1)});let r=(h=t[i])!=null?h:null,s=i?t[i-1]:0,a=Ne(),o=[...new Set(n.filter(m=>m.day===a).map(m=>m.who))],l=((u=n[0])==null?void 0:u.day)||"";return{total:e,stage:i,stageName:xo[i],next:r,toNext:r==null?0:r-e,progress:r==null?1:(e-s)/Math.max(1,r-s),todayWho:o,wateredToday:o.includes(Me()),thirsty:!l||Jn(l,a)>=3,name:((d=vr().tree)==null?void 0:d.name)||"\uC6B0\uB9AC \uAC00\uC871 \uB098\uBB34"}}var gi=n=>!!n.locked||!!n.openAt&&n.openAt>Ne(),ua=n=>n.who!==Me()&&(n.to==="all"||n.to===Me()),up="family-read",Oc=()=>{try{return new Set(JSON.parse(localStorage.getItem(up)||"[]"))}catch{return new Set}};function dp(n){let e=Oc();if(!e.has(n)){e.add(n);try{localStorage.setItem(up,JSON.stringify([...e].slice(-500)))}catch{}try{dispatchEvent(new CustomEvent("family:read"))}catch{}}}function Kn(){if(!xt())return[];let n=Oc();return at("letters").filter(e=>ua(e)&&!gi(e)&&!n.has(e.id))}var pp=n=>Oc().has(n);function mp(){let n=i=>(Array.isArray(i)?i:String(i||"").split("|")).map(r=>String(r).trim()).filter(Boolean),e=(vr().polls||[]).filter(i=>i&&i.id).map(i=>({...i,options:n(i.options),cfg:!0}));return[...at("polls").map(i=>({...i,options:n(i.options)})).filter(i=>i.q&&i.options.length>=2),...e].filter(i=>i.options.length>=2)}function zc(n){let e=new Map;return at("votes").forEach(t=>{t.poll===n&&!e.has(t.who)&&e.set(t.who,t.choice)}),e}function fp(){let n=new Map;return at("scores").forEach(e=>{let t=n.get(e.who);(!t||e.score>t.score)&&n.set(e.who,e)}),[...n.values()].sort((e,t)=>t.score-e.score||String(e.time).localeCompare(String(t.time)))}function gp(n){let e=at("replies").filter(r=>r.target===n).reverse(),t=e.filter(r=>r.text),i={};return e.filter(r=>r.emoji&&!r.text).forEach(r=>{(i[r.emoji]=i[r.emoji]||new Set).add(r.who)}),{texts:t,reacts:i}}function yp(){return cs(10).filter(n=>n.dday===0)}var vp="family-sound",tt=null,ms=null,$i=null,Gc=null,fs=!1,da=null,_r=0,_o=0,kc=349.23,ds=392,qi=440,xr=523.25,Hc=587.33,hg=698.46;var xp=[xr,0,qi,ds,kc,0,ds,qi,xr,0,Hc,0,xr,0,qi,0,ds,0,kc,ds,qi,0,0,0,Hc,0,xr,qi,xr,0,hg,0,Hc,xr,qi,0,ds,qi,xr,0,qi,ds,kc,0,0,0,0,0],_p=[87.31,116.54,87.31,130.81],ug=.34;function dg(){if(tt)return tt;let n=window.AudioContext||window.webkitAudioContext;if(!n)return null;tt=new n,ms=tt.createGain(),ms.gain.value=.9,ms.connect(tt.destination),$i=tt.createGain(),$i.gain.value=.12,$i.connect(ms),Gc=tt.createBuffer(1,tt.sampleRate,tt.sampleRate);let e=Gc.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;return tt}function _t(n,e,t,{type:i="sine",gain:r=.2,dest:s=ms,slide:a=0}={}){let o=tt.createOscillator(),l=tt.createGain();o.type=i,o.frequency.setValueAtTime(n,e),a&&o.frequency.exponentialRampToValueAtTime(a,e+t),l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(r,e+.012),l.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(l),l.connect(s),o.start(e),o.stop(e+t+.05)}function ps(n,e,{gain:t=.2,type:i="lowpass",freq:r=2e3}={}){let s=tt.createBufferSource(),a=tt.createBiquadFilter(),o=tt.createGain();s.buffer=Gc,a.type=i,a.frequency.value=r,o.gain.setValueAtTime(t,n),o.gain.exponentialRampToValueAtTime(1e-4,n+e),s.connect(a),a.connect(o),o.connect(ms),s.start(n),s.stop(n+e+.02)}function pg(){if(!(!tt||!fs))for(;_r<tt.currentTime+.4;){let n=xp[_o%xp.length];n&&(_t(n,_r,.7,{type:"sine",gain:.5,dest:$i}),_t(n*4,_r,.12,{type:"sine",gain:.06,dest:$i})),_o%6===0&&_t(_p[Math.floor(_o/12)%_p.length],_r,1.6,{type:"triangle",gain:.16,dest:$i}),_r+=ug,_o++}}var Ye={get enabled(){return fs},saved(){try{return localStorage.getItem(vp)==="1"}catch{return!1}},setEnabled(n){if(n&&!dg())return!1;fs=n;try{localStorage.setItem(vp,n?"1":"0")}catch{}return n?(tt.resume().catch(()=>{}),da||(_r=tt.currentTime+.1,da=setInterval(pg,120))):(da&&(clearInterval(da),da=null),tt==null||tt.suspend().catch(()=>{})),fs},sfx(n){if(!fs||!tt)return;let e=tt.currentTime;switch(n){case"chime":_t(880,e,.25,{gain:.14}),_t(1318.5,e+.09,.32,{gain:.12});break;case"crackle":for(let t=0;t<6;t++)ps(e+t*.06+Math.random()*.04,.05,{gain:.12,type:"highpass",freq:1800+Math.random()*1500});_t(220,e,.3,{type:"triangle",gain:.06,slide:160});break;case"coin":_t(1760,e,.1,{type:"square",gain:.05}),_t(2217,e+.07,.28,{type:"square",gain:.05}),ps(e+.3,.3,{gain:.07,freq:1400});break;case"shutter":ps(e,.05,{gain:.3,type:"highpass",freq:3e3}),ps(e+.07,.04,{gain:.18,type:"highpass",freq:2500});break;case"paper":ps(e,.16,{gain:.12,type:"bandpass",freq:900}),_t(1047,e+.1,.3,{gain:.08});break;case"jump":_t(320,e,.18,{type:"triangle",gain:.12,slide:760});break;case"heart":_t(1047,e,.18,{gain:.07}),_t(1318.5,e+.05,.22,{gain:.06});break;case"ok":_t(659,e,.14,{gain:.12}),_t(830.6,e+.11,.3,{gain:.12});break;case"no":_t(330,e,.2,{type:"triangle",gain:.1}),_t(262,e+.16,.34,{type:"triangle",gain:.1});break;case"pop":_t(600,e,.08,{type:"triangle",gain:.1,slide:900});break;case"tada":[523.25,659.25,783.99,1046.5].forEach((t,i)=>_t(t,e+i*.09,.4,{gain:.12}));break;case"water":[1318.5,1568,1760].forEach((t,i)=>_t(t,e+i*.07,.18,{gain:.06,slide:t*.8})),ps(e,.35,{gain:.05,type:"bandpass",freq:2600});break;case"birthday":{[[523.25,0,.18],[659.25,.16,.18],[783.99,.32,.18],[1046.5,.5,.45],[880,.95,.18],[987.77,1.12,.18],[1046.5,1.3,.6]].forEach(([i,r,s])=>{_t(i,e+r,s+.2,{gain:.11}),_t(i/2,e+r,s+.2,{type:"triangle",gain:.05})});break}}},duck(n){$i&&tt&&$i.gain.setTargetAtTime(n?.04:.12,tt.currentTime,.12)}};document.addEventListener("visibilitychange",()=>{!tt||!fs||(document.hidden?tt.suspend().catch(()=>{}):(tt.resume().catch(()=>{}),_r=tt.currentTime+.1))});var bp=window.FAMILY,an=n=>document.querySelector(n),De=n=>String(n!=null?n:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ma=[],Wc=0;function Xi(n){ma.push(n);try{history.pushState({wv:ma.length},"")}catch{}}function Er(n){let e=ma.lastIndexOf(n);e<0||(ma.splice(e,1),Wc++,history.back())}addEventListener("popstate",()=>{var n;if(Wc>0){Wc--;return}(n=ma.pop())==null||n()});var br=null,Ep=null,Zc=()=>an("#modal");function qc(){let n=Zc();!n.classList.contains("open")||n.classList.contains("closing")||(n.classList.add("closing"),Ye.duck(!1),br&&(br(),br=null),Ep=setTimeout(()=>{n.classList.remove("open","closing"),n.querySelector(".sheet").style.transform=""},220))}function bo(n,e,t){let i=Zc();br&&(br(),br=null);let r=i.classList.contains("open")&&!i.classList.contains("closing");clearTimeout(Ep),i.classList.remove("closing"),i.querySelector(".sheet").style.transform="",an("#modal-title").textContent=n;let s=an("#modal-body");s.innerHTML=e,s.scrollTop=0,i.classList.add("open"),Ye.duck(!0),r||Xi(qc),t&&(br=t(s)||null)}function Mn(){let n=Zc();!n.classList.contains("open")||n.classList.contains("closing")||(qc(),Er(qc))}var bn=()=>an("#modal").classList.contains("open")||an("#lightbox").classList.contains("open"),Sr=(n,e)=>bo(n,e.html,e.mount),Mp;function et(n,e=2400){let t=an("#toast");t.textContent=n,t.classList.add("show"),clearTimeout(Mp),Mp=setTimeout(()=>t.classList.remove("show"),e)}var $c=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function ji(n=["\u{1F338}","\u{1F497}","\u2728","\u{1F389}","\u{1F490}"]){if(!$c())for(let e=0;e<28;e++){let t=document.createElement("div");t.className="confetti",t.textContent=n[e%n.length],t.style.left=Math.random()*100+"%",t.style.animationDuration=2+Math.random()*2+"s",t.style.animationDelay=Math.random()*.6+"s",(an("#phone")||document.body).appendChild(t),setTimeout(()=>t.remove(),5e3)}}async function Jc(n,e="\uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694"){let t=!1;try{await navigator.clipboard.writeText(n),t=!0}catch{let i=document.createElement("textarea");i.value=n,i.readOnly=!0,i.style.cssText="position:fixed;top:0;left:0;opacity:0;-webkit-user-select:text;user-select:text",document.body.appendChild(i),i.focus(),i.select();try{i.setSelectionRange(0,n.length),t=document.execCommand("copy")}catch{t=!1}i.remove()}return Qe(10),et(t?`\u{1F4CB} ${e}`:"\uBCF5\uC0AC\uAC00 \uC548 \uB3FC\uC694. \uAE00\uC790\uB97C \uAE38\uAC8C \uB20C\uB7EC \uBCF5\uC0AC\uD574 \uC8FC\uC138\uC694"),t}function mg(n){n.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",t=>{e.tagName!=="BUTTON"&&t.target.closest("button")||Jc(e.dataset.copy,e.dataset.msg)}))}function Eo(n={},e=""){return`<span class="${["avatar",n.longHair?"long":"",n.kid?"kid":"",e].filter(Boolean).join(" ")}" style="--outfit:${De(n.outfit||"#8FB8DE")};--hair:${De(n.hair||"#5A3A2A")}" aria-hidden="true"><i class="hd"></i><i class="bd"></i><i class="lg"></i>${n.glasses?'<i class="gls"></i>':""}${n.hat?`<i class="ht ht-${De(n.hat)}"></i>`:""}</span>`}var fg=(n,e)=>{let t=It(n);return`<span class="who-chip" style="--c:${De(t?t.look.outfit:"#E6D5C6")}">${De(t?t.role||t.name:e||"\uC190\uB2D8")}</span>`};function Kc(n){if(!n)return;if(!tn()){n.hidden=!0;return}let e=np();n.hidden=!1,e.loading&&!e.loaded?n.textContent="\uAC00\uC871 \uC18C\uC2DD\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\u2026":e.error&&!e.loaded?(n.innerHTML='\uC9C0\uAE08\uC740 \uC18C\uC2DD\uC744 \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC5B4\uC694. <button type="button" class="linklike st-retry">\uB2E4\uC2DC \uC2DC\uB3C4</button>',n.querySelector(".st-retry").onclick=()=>{Fn({force:!0}),Kc(n)}):e.error?n.textContent="\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBC1B\uC544 \uC628 \uC18C\uC2DD\uC774\uC5D0\uC694 (\uC9C0\uAE08\uC740 \uC5F0\uACB0\uC774 \uC5B4\uB824\uC6CC\uC694)":n.hidden=!0}function Qc(n){let e=()=>n();return addEventListener("family:data",e),()=>removeEventListener("family:data",e)}var Sp=(n,e)=>et(n.ok?e:"\uD734\uB300\uD3F0\uC5D0 \uBCF4\uAD00\uD588\uC5B4\uC694. \uC5F0\uACB0\uB418\uBA74 \uC790\uB3D9\uC73C\uB85C \uBCF4\uB0BC\uAC8C\uC694",n.ok?2400:3600),gg=["\u{1F44D}","\u{1F602}","\u{1F979}","\u{1F497}"],yg=n=>[...n].map(e=>e.codePointAt(0).toString(16)).join("");function wp(n,{compact:e=!1}={}){let t=i=>{let r=i.querySelector(`[data-rx="${CSS.escape(n)}"]`)||i,s=!1,a=()=>{if(!r.isConnected)return;let{texts:o,reacts:l}=gp(n),c=Me(),h=!!xt();r.innerHTML=`
        <div class="rx-emojis">${gg.map(m=>{let f=l[m],y=(f==null?void 0:f.size)||0;return`<button type="button" class="rx-e${f!=null&&f.has(c)?" on":""}" data-e="${m}" ${h?"":"disabled"} aria-label="${m} \uBC18\uC751 ${y}\uAC1C">${m}${y?`<b>${y}</b>`:""}</button>`}).join("")}</div>
        ${o.length?`<ul class="rx-list">${o.map(m=>`<li>${fg(m.who,m.name)} <span>${De(m.text)}</span> <small>${Gi(m.time)}</small></li>`).join("")}</ul>`:""}
        ${h?`${e?'<button type="button" class="linklike rx-open">\u{1F4AC} \uB2F5\uC7A5 \uC4F0\uAE30</button>':""}<form class="rx-form" autocomplete="off" ${e&&!s?"hidden":""}><input class="field rx-in" maxlength="80" placeholder="\uB2F5\uC7A5 \uD55C \uC904 \uB0A8\uAE30\uAE30" aria-label="\uB2F5\uC7A5"><button class="btn small pink" type="submit">\uBCF4\uB0B4\uAE30</button></form>`:""}`;let u=r.querySelector(".rx-open");u&&(u.onclick=()=>{s=!0,u.hidden=!0;let m=r.querySelector(".rx-form");m.hidden=!1,m.querySelector(".rx-in").focus()}),u&&s&&(u.hidden=!0),r.querySelectorAll(".rx-e").forEach(m=>m.onclick=async()=>{if(m.classList.contains("on")){et("\uC774\uBBF8 \uB9C8\uC74C\uC744 \uB0A8\uACBC\uC5B4\uC694 \u{1F60A}");return}Qe(8),Ye.sfx("heart"),m.classList.add("on"),await nn("replies",{id:`${c}-${n}-${yg(m.dataset.e)}`,who:c,name:_n(c),target:n,emoji:m.dataset.e,text:""}),a()});let d=r.querySelector(".rx-form");d&&(d.onsubmit=async m=>{m.preventDefault();let f=d.querySelector(".rx-in"),y=f.value.trim();if(!y)return;f.value="";let p=await nn("replies",{who:c,name:_n(c),target:n,text:y,emoji:""});Sp(p,"\u{1F4AC} \uB2F5\uC7A5\uC744 \uB0A8\uACBC\uC5B4\uC694"),Ye.sfx("paper"),a()})};return a(),Qc(a)};return{html:`<div class="rx" data-rx="${De(n)}"></div>`,mount:t}}var vg=(n,e)=>{let t=gi(n),i=!t&&ua(n)&&!pp(n.id),r=n.pending?"\u23F3":t?"\u{1F512}":n.openAt?"\u{1F381}":n.mine?"\u270D\uFE0F":"\u{1F48C}",s=n.pending?"\uBCF4\uB0B4\uB294 \uC911":t?`${hn(n.openAt,!1)}\uC5D0 \uC5F4\uB824\uC694`:`${n.to==="all"?"\uBAA8\uB450\uC5D0\uAC8C":`To. ${sn(n.to)}`} \xB7 ${Gi(n.time)}`;return`
  <button type="button" class="env${n.mine?" mine":""}${n.pending?" pending":""}${t?" locked":""}${i?" unread":""}" style="--c:${De(la(n.who))}" data-i="${e}" aria-label="${De(n.name||_n(n.who))}\uC758 \uD3B8\uC9C0 \uC5F4\uAE30">
    <span class="flap" aria-hidden="true"></span>
    <span class="seal" aria-hidden="true">${r}</span>
    <b class="env-name">${t?"\u23F3 \uD0C0\uC784\uCEA1\uC290":De(n.name||_n(n.who))}</b>
    <small class="env-meta">${De(s)}</small>
  </button>`};function So(n,{onBack:e,to:t="",filter:i=""}={}){let r=xt(),s=!r,a=rn().filter(c=>c.id!==Me());return{html:`
    <p class="muted" style="line-height:1.7">${s?"\uAC00\uC871\uC5D0\uAC8C \uC548\uBD80 \uD55C\uB9C8\uB514 \uB0A8\uACA8 \uC8FC\uC138\uC694 \u{1F48C}":`<b>${De(r.role||r.name)}</b>(\uC774)\uAC00 \uAC00\uC871\uC5D0\uAC8C \uBCF4\uB0B4\uB294 \uD3B8\uC9C0\uC608\uC694 \u{1F48C}`}</p>
    <form class="letter-form" autocomplete="off">
      ${s?'<input class="field l-name" maxlength="20" placeholder="\uC774\uB984" aria-label="\uC774\uB984" />':""}
      <div class="to-row" role="group" aria-label="\uBC1B\uB294 \uC0AC\uB78C">
        <button type="button" class="to-chip on" data-to="all">\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466} \uBAA8\uB450\uC5D0\uAC8C</button>
        ${a.map(c=>`<button type="button" class="to-chip" data-to="${De(c.id)}" style="--c:${De(c.look.outfit)}">${De(c.role||c.name)}</button>`).join("")}
      </div>
      <textarea class="field l-msg" maxlength="500" placeholder="\uD558\uACE0 \uC2F6\uC740 \uB9D0\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694 (500\uC790 \uC774\uB0B4)" aria-label="\uD3B8\uC9C0 \uB0B4\uC6A9"></textarea>
      <label class="tc-row"><input type="checkbox" class="l-tc"> \u23F3 \uD0C0\uC784\uCEA1\uC290\uB85C \uBCF4\uB0B4\uAE30 <small class="muted">\uC815\uD55C \uB0A0\uC774 \uB418\uC5B4\uC57C \uC5F4\uB824\uC694</small></label>
      <div class="tc-date" hidden><input type="date" class="field l-open" aria-label="\uC5F4\uB9AC\uB294 \uB0A0"></div>
      <button class="btn pink l-send" type="submit" style="width:100%;margin-top:10px;padding:14px">\u2709\uFE0F \uD3B8\uC9C0 \uBCF4\uB0B4\uAE30</button>
    </form>
    <div class="divider"></div>
    <div class="env-head"><b>\u{1F48C} \uAC00\uC871 \uD3B8\uC9C0</b><span class="muted l-count"></span></div>
    ${s?"":'<div class="seg l-filter"><button type="button" data-f="all">\uC804\uCCB4</button><button type="button" data-f="me">\uB098\uC5D0\uAC8C \uC628 \uD3B8\uC9C0 <b class="l-unread"></b></button><button type="button" data-f="mine">\uB0B4\uAC00 \uC4F4 \uD3B8\uC9C0</button></div>'}
    <p class="muted l-status" role="status" hidden></p>
    <div class="env-grid l-list" style="margin-top:10px"></div>`,mount:c=>{let h="all",u=i||"all",d=U=>{h=U,c.querySelectorAll(".to-chip").forEach(C=>C.classList.toggle("on",C.dataset.to===U))};c.querySelectorAll(".to-chip").forEach(U=>U.onclick=()=>{Qe(6),d(U.dataset.to)}),t&&a.some(U=>U.id===t)&&d(t);let m=c.querySelector(".l-tc"),f=c.querySelector(".tc-date"),y=c.querySelector(".l-open"),p=cn(Ne(),1);y.min=p,y.value=cn(Ne(),100),m.onchange=()=>{f.hidden=!m.checked};let x=c.querySelector(".l-list"),g=c.querySelector(".l-count"),v=c.querySelector(".l-status"),b=e||(()=>Nn(n,{filter:u})),T=()=>{if(!c.isConnected)return;let U=at("letters"),C=u==="me"?U.filter(ua):u==="mine"?U.filter(_=>_.who===Me()):U;g.textContent=U.length?`${U.length}\uD1B5`:"";let W=c.querySelector(".l-unread");if(W){let _=Kn().length;W.textContent=_||""}c.querySelectorAll(".l-filter button").forEach(_=>_.classList.toggle("on",_.dataset.f===u)),x.innerHTML=C.length?C.slice(0,60).map(vg).join(""):`<p class="muted">${u==="me"?"\uC544\uC9C1 \uB098\uC5D0\uAC8C \uC628 \uD3B8\uC9C0\uAC00 \uC5C6\uC5B4\uC694":u==="mine"?"\uC544\uC9C1 \uC4F4 \uD3B8\uC9C0\uAC00 \uC5C6\uC5B4\uC694":"\uC544\uC9C1 \uD3B8\uC9C0\uAC00 \uC5C6\uC5B4\uC694. \uCCAB \uD3B8\uC9C0\uB97C \uB0A8\uACA8 \uC8FC\uC138\uC694!"}</p>`,x.querySelectorAll(".env").forEach(_=>_.onclick=()=>{Qe(8);let P=C[+_.dataset.i];if(gi(P)){et(`\u23F3 \uC544\uC9C1 \uC5F4 \uC218 \uC5C6\uC5B4\uC694 \xB7 ${hn(P.openAt)} (D-${Jn(Ne(),P.openAt)})`,3e3);return}_.classList.add("open"),setTimeout(()=>ga(C,+_.dataset.i,b),$c()?0:260)}),Kc(v)};c.querySelectorAll(".l-filter button").forEach(U=>U.onclick=()=>{u=U.dataset.f,Qe(6),T()}),T(),Fn();let S=Qc(T),R=c.querySelector(".letter-form"),k=c.querySelector(".l-send");return R.onsubmit=async U=>{var K;U.preventDefault();let C=s?c.querySelector(".l-name").value.trim():r.name,W=c.querySelector(".l-msg").value.trim();if(!C||!W){et(s?"\uC774\uB984\uACFC \uD3B8\uC9C0 \uB0B4\uC6A9\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694":"\uD3B8\uC9C0 \uB0B4\uC6A9\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694");return}let _=m.checked?y.value||cn(Ne(),100):"";if(_&&_<=Ne()){et("\uC5F4\uB9AC\uB294 \uB0A0\uC740 \uB0B4\uC77C \uC774\uD6C4\uB85C \uACE8\uB77C \uC8FC\uC138\uC694");return}let P=k.textContent;k.disabled=!0,tn()&&(k.textContent="\uBCF4\uB0B4\uB294 \uC911\u2026");let N=await nn("letters",{who:s?"guest":Me(),name:C,to:h,message:W,openAt:_});if(k.textContent=P,k.disabled=!1,!c.isConnected)return;c.querySelector(".l-msg").value="",m.checked=!1,f.hidden=!0;let H=h==="all"?"\uAC00\uC871 \uBAA8\uB450\uC5D0\uAC8C":`${sn(h)}\uC5D0\uAC8C`;Sp(N,_?`\u23F3 \uD0C0\uC784\uCEA1\uC290\uC744 \uBB3B\uC5C8\uC5B4\uC694. ${hn(_)}\uC5D0 \uC5F4\uB824\uC694`:`\u{1F48C} ${H} \uD3B8\uC9C0\uB97C \uBCF4\uB0C8\uC5B4\uC694`),ji(["\u{1F48C}","\u{1F497}","\u2728"]),Qe(20),Ye.sfx("paper"),n==null||n(N.item),u="all",T(),(K=x.querySelector(".env"))==null||K.scrollIntoView({behavior:$c()?"auto":"smooth",block:"center"})},S}}}function Nn(n,e){Sr("\uC548\uBD80 \uC6B0\uCCB4\uD1B5",So(n,e))}function Tp(n,e,t){let i=n[e];ua(i)&&dp(i.id);let r=wp(i.id);return{html:`
    <article class="paper" style="--c:${De(la(i.who))}" aria-label="${De(i.name)}\uC758 \uD3B8\uC9C0">
      <div class="paper-top"><span class="paper-stamp">${i.openAt?"\u{1F381}":i.mine?"\u270D\uFE0F":"\u{1F48C}"}</span><span>To. ${i.to==="all"?"\uC6B0\uB9AC \uAC00\uC871":De(_n(i.to))}</span></div>
      ${i.openAt?`<p class="muted" style="margin:0 0 6px">\u23F3 ${Gi(i.time)}\uC5D0 \uBB3B\uC5B4 \uB454 \uD0C0\uC784\uCEA1\uC290\uC774\uC5D0\uC694</p>`:""}
      <p class="paper-msg">${De(i.message)}</p>
      <div class="paper-from">From. <b>${De(i.name||_n(i.who))}</b><small>${Gi(i.time)}</small></div>
    </article>
    ${r.html}
    <div class="paper-nav">
      <button class="btn small p-prev" ${e<=0?"disabled":""}>\u2039 \uC774\uC804</button>
      <span class="muted">${e+1} / ${n.length}</span>
      <button class="btn small p-next" ${e>=n.length-1?"disabled":""}>\uB2E4\uC74C \u203A</button>
    </div>
    <button class="btn p-back" style="width:100%;margin-top:10px">\u2709\uFE0F \uC6B0\uCCB4\uD1B5\uC73C\uB85C</button>`,mount:o=>{let l=d=>{let m=e+d;for(;n[m]&&gi(n[m]);)m+=d;n[m]&&(Qe(6),ga(n,m,t))};o.querySelector(".p-prev").onclick=()=>l(-1),o.querySelector(".p-next").onclick=()=>l(1),o.querySelector(".p-back").onclick=t;let c=o.querySelector(".paper"),h=0,u=0;return c.addEventListener("pointerdown",d=>{h=d.clientX,u=d.clientY}),c.addEventListener("pointerup",d=>{let m=d.clientX-h,f=d.clientY-u;Math.abs(m)>70&&Math.abs(m)>Math.abs(f)*1.5&&l(m<0?1:-1)}),r.mount(o)}}}function ga(n,e,t=Mn){Sr("\u{1F48C} \uD3B8\uC9C0",Tp(n,e,t))}function wo(){let n=bp.place||{},e=(i,r)=>r&&r.length?`<div class="card"><b>${i}</b><div class="muted" style="margin-top:6px;line-height:1.7">${r.map(De).join("<br>")}</div></div>`:"";return{html:`
    <div class="card center">
      <div class="serif" style="font-size:20px;font-weight:700">${De(n.name||"\uBAA8\uC774\uB294 \uACF3")}</div>
      <div style="margin-top:8px">${De(n.address||"")}</div>
      <div class="btns" style="justify-content:center">
        ${n.address?`<button class="btn small" data-copy="${De(n.address)}" data-msg="\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694">\u{1F4CB} \uC8FC\uC18C \uBCF5\uC0AC</button>`:""}
        ${n.tel?`<a class="btn small" href="tel:${De(n.tel)}">\u{1F4DE} \uC804\uD654</a>`:""}
      </div>
    </div>
    <div class="btns">
      ${n.naverMap?`<a class="btn" target="_blank" rel="noopener" href="${De(n.naverMap)}">\u{1F7E2} \uB124\uC774\uBC84 \uC9C0\uB3C4</a>`:""}
      ${n.kakaoMap?`<a class="btn" target="_blank" rel="noopener" href="${De(n.kakaoMap)}">\u{1F7E1} \uCE74\uCE74\uC624\uB9F5</a>`:""}
      ${n.tmap?`<a class="btn" target="_blank" rel="noopener" href="${De(n.tmap)}">\u{1F535} \uD2F0\uB9F5</a>`:""}
    </div>
    ${e("\u{1F687} \uC9C0\uD558\uCCA0",n.subway)}
    ${e("\u{1F68C} \uBC84\uC2A4",n.bus)}
    ${e("\u{1F697} \uC790\uAC00\uC6A9",n.car?[n.car]:[])}
    ${e("\u{1F17F}\uFE0F \uC8FC\uCC28",n.parking?[n.parking]:[])}`,mount:mg}}function ya(){Sr("\uBAA8\uC774\uB294 \uACF3",wo())}function Vc(){let n=fp();return n.length?`<ol class="board">${n.map((e,t)=>{var i,r;return`<li><span class="rank">${["\u{1F947}","\u{1F948}","\u{1F949}"][t]||t+1}</span>${Eo(((i=It(e.who))==null?void 0:i.look)||{},"mini")}<b>${De(((r=It(e.who))==null?void 0:r.role)||e.name||_n(e.who))}</b><span class="sc">${e.score} / ${e.total}</span></li>`}).join("")}</ol>`:'<p class="muted center">\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694. \uCCAB \uAE30\uB85D\uC758 \uC8FC\uC778\uACF5\uC774 \uB418\uC5B4 \uBCF4\uC138\uC694!</p>'}function To(){let n=bp.quiz||[];return{html:'<div class="quiz-box"></div>',mount:t=>{let i=t.querySelector(".quiz-box")||t,r=-1,s=0,a=null,o=!0,l=()=>{if(!o)return;if(r<0){i.innerHTML=`
          <p class="muted center" style="line-height:1.7">\uB204\uAC00 \uC6B0\uB9AC \uAC00\uC871\uC744 \uC81C\uC77C \uC798 \uC54C\uAE4C\uC694? \u{1F914}<br>${n.length}\uBB38\uC81C\uB97C \uD480\uBA74 \uC810\uC218\uD310\uC5D0 \uC774\uB984\uC774 \uC62C\uB77C\uAC00\uC694</p>
          <div class="card"><b>\u{1F3C6} \uC810\uC218\uD310</b>${Vc()}</div>
          <button class="btn pink q-start" style="width:100%">\u2753 \uD034\uC988 \uC2DC\uC791</button>`,i.querySelector(".q-start").onclick=()=>{r=0,s=0,l()};return}if(r>=n.length){let h=s===n.length;i.innerHTML=`
          <div class="center" style="padding:14px 0 6px">
            <div style="font-size:60px">${h?"\u{1F3C6}":s>=n.length/2?"\u{1F970}":"\u{1F331}"}</div>
            <div class="quiz-q">${n.length}\uBB38\uC81C \uC911 <b style="color:var(--rose-deep)">${s}\uAC1C</b> \uB9DE\uD614\uC5B4\uC694!</div>
            <p class="muted">${h?"\uC6B0\uB9AC \uAC00\uC871 \uBC15\uC0AC\uB2D8\uC774\uC2DC\uB124\uC694! \u{1F495}":"\uC774\uC81C \uC6B0\uB9AC \uAC00\uC871\uC744 \uC870\uAE08 \uB354 \uC54C\uAC8C \uB410\uC8E0? \u{1F60A}"}</p>
          </div>
          <div class="card"><b>\u{1F3C6} \uC810\uC218\uD310</b><div class="q-board">${Vc()}</div></div>
          <button class="btn pink q-again" style="width:100%">\uB2E4\uC2DC \uD480\uAE30</button>`,i.querySelector(".q-again").onclick=()=>{r=0,s=0,l()},h&&ji(),xt()&&nn("scores",{who:Me(),name:_n(Me()),score:s,total:n.length}).then(()=>{let u=i.querySelector(".q-board");u&&(u.innerHTML=Vc())});return}let c=n[r];i.innerHTML=`
        <div class="progress-dots">${n.map((h,u)=>`<i class="${u<=r?"on":""}"></i>`).join("")}</div>
        <div class="quiz-q">Q${r+1}. ${De(c.q)}</div>
        ${c.options.map((h,u)=>`<button class="quiz-opt" data-k="${u}">${De(h)}</button>`).join("")}
        <p class="muted center q-cmt" style="min-height:24px"></p>`,i.querySelectorAll(".quiz-opt").forEach(h=>h.onclick=()=>{let u=+h.dataset.k;i.querySelectorAll(".quiz-opt").forEach(d=>d.disabled=!0),i.querySelectorAll(".quiz-opt")[c.answer].classList.add("right"),u===c.answer?(s++,Ye.sfx("ok")):(h.classList.add("wrong"),Ye.sfx("no")),i.querySelector(".q-cmt").textContent=(u===c.answer?"\u2B55 \uC815\uB2F5! ":"\u274C \uC544\uC26C\uC6CC\uC694! ")+(c.comment||""),a=setTimeout(()=>{r++,l()},1700)})};return l(),()=>{o=!1,clearTimeout(a)}}}}function va(){Sr("\uAC00\uC871 \uD034\uC988",To())}async function xa(){let n={title:Wt(),text:"\uC6B0\uB9AC \uAC00\uC871 \uB9C8\uC744\uC5D0 \uB180\uB7EC \uC640\uC694 \u{1F3E1}",url:location.href.split("#")[0]};if(navigator.share)try{await navigator.share(n);return}catch(e){if((e==null?void 0:e.name)==="AbortError")return}Jc(n.url,"\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694")}function Ap(n){return{html:`
    <p class="muted">\uC6D0\uD558\uB294 \uACF3\uC744 \uB204\uB974\uBA74 \uBC14\uB85C \uBCFC \uC218 \uC788\uC5B4\uC694</p>
    <div class="menu-grid">
      ${n.map((i,r)=>`<button class="menu-item" data-i="${r}"><span class="e">${i.emoji}</span>${De(i.label)}</button>`).join("")}
    </div>`,mount:i=>{i.querySelectorAll(".menu-item").forEach(r=>r.onclick=()=>{Qe(8),n[+r.dataset.i].go()})}}}function eh(n){Sr("\uBC14\uB85C\uAC00\uAE30",Ap(n))}function Ao(n,e=-1){return{html:(e>=0?[n[e]]:n).map(s=>`
    <div class="album-theme">
      <h3>${s.emoji} ${De(s.title)} <span class="muted" style="font-size:13px">${s.photos.length}\uC7A5</span></h3>
      <div class="muted" style="font-size:13px">${De(s.subtitle||"")}</div>
      <div class="album-grid">
        ${s.photos.map((a,o)=>`<button type="button" data-t="${n.indexOf(s)}" data-i="${o}" aria-label="${De(a.caption||s.title+" "+(o+1))}"><img loading="lazy" src="${De(gr(a,"thumb"))}" alt="" /></button>`).join("")}
      </div>
    </div>`).join(""),mount:s=>{s.querySelectorAll(".album-grid img").forEach(a=>{a.onerror=()=>{let o=a.parentElement,l=n[+o.dataset.t];a.onerror=null,a.src=yr(l,+o.dataset.i,l.photos[+o.dataset.i].src,300,300).toDataURL()}}),s.querySelectorAll(".album-grid button").forEach(a=>a.onclick=()=>Ro(n,+a.dataset.t,+a.dataset.i))}}}function wr(n,e=-1){Sr(e>=0?`${n[e].title} \uC568\uBC94`:"\uC804\uCCB4 \uC568\uBC94",Ao(n,e))}var Un={themes:null,ti:0,i:0},ze={s:1,x:0,y:0},ys=()=>an("#lightbox"),fa=()=>an("#lightbox img");function Mr(n){let e=fa();e.style.transition=n?"transform .25s ease":"none",e.style.transform=`translate(${ze.x}px, ${ze.y}px) scale(${ze.s})`}function gs(n=!1){ze.s=1,ze.x=ze.y=0,Mr(n)}function Mo(){let n=fa(),e=ys(),t=Math.max(0,(n.offsetWidth*ze.s-e.clientWidth)/2),i=Math.max(0,(n.offsetHeight*ze.s-e.clientHeight)/2);ze.x=Math.max(-t,Math.min(t,ze.x)),ze.y=Math.max(-i,Math.min(i,ze.y))}function Ro(n,e,t){Un={themes:n,ti:e,i:t};let i=ys();i.classList.contains("open")||(i.classList.add("open"),Xi(Xc)),Rp()}function Xc(){ys().classList.remove("open"),gs()}function jc(){ys().classList.contains("open")&&(Xc(),Er(Xc))}function Rp(){let n=Un.themes[Un.ti],e=n.photos[Un.i],t=fa();gs(),t.onerror=()=>{t.onerror=null,t.src=yr(n,Un.i,e.src,800,800).toDataURL()},t.src=gr(e),t.alt=e.caption||`${n.title} ${Un.i+1}`,an("#lightbox .cap").innerHTML=`${De(e.caption||`${n.emoji} ${n.title}`)}<small>${Un.i+1} / ${n.photos.length}</small>`}function pa(n){let e=Un.themes[Un.ti].photos.length;Un.i=(Un.i+n+e)%e,Qe(6),Rp()}function xg(){let n=ys(),e=new Map,t=null,i=0,r=()=>{let a=fa().getBoundingClientRect();return{x:a.left+a.width/2-ze.x,y:a.top+a.height/2-ze.y}};n.addEventListener("pointerdown",a=>{if(!a.target.closest("button")){try{n.setPointerCapture(a.pointerId)}catch{}if(e.set(a.pointerId,{x:a.clientX,y:a.clientY}),e.size===1)t={type:"one",sx:a.clientX,sy:a.clientY,ox:ze.x,oy:ze.y,moved:!1};else if(e.size===2){let[o,l]=[...e.values()],c=r(),h=(o.x+l.x)/2,u=(o.y+l.y)/2;t={type:"pinch",d:Math.hypot(o.x-l.x,o.y-l.y)||1,s:ze.s,c,px:(h-c.x-ze.x)/ze.s,py:(u-c.y-ze.y)/ze.s}}}}),n.addEventListener("pointermove",a=>{if(!(!e.has(a.pointerId)||!t)){if(e.set(a.pointerId,{x:a.clientX,y:a.clientY}),t.type==="pinch"&&e.size>=2){let[o,l]=[...e.values()];ze.s=Math.max(1,Math.min(4,t.s*Math.hypot(o.x-l.x,o.y-l.y)/t.d)),ze.x=(o.x+l.x)/2-t.c.x-ze.s*t.px,ze.y=(o.y+l.y)/2-t.c.y-ze.s*t.py,Mr(!1)}else if(t.type==="one"){let o=a.clientX-t.sx,l=a.clientY-t.sy;if(Math.hypot(o,l)>8&&(t.moved=!0),ze.s>1){ze.x=t.ox+o,ze.y=t.oy+l,Mr(!1);return}let c=fa();c.style.transition="none",c.style.transform=Math.abs(o)>Math.abs(l)?`translateX(${o}px)`:`translateY(${Math.max(0,l)}px) scale(${1-Math.min(.15,Math.max(0,l)/1500)})`}}});let s=a=>{if(!e.has(a.pointerId)||(e.delete(a.pointerId),!t))return;if(t.type==="pinch"){if(e.size===1){let[h]=[...e.values()];t={type:"one",sx:h.x,sy:h.y,ox:ze.x,oy:ze.y,moved:!0}}else e.size===0&&(t=null,ze.s<1.05?gs(!0):(Mo(),Mr(!0)));return}if(e.size>0)return;let o=a.clientX-t.sx,l=a.clientY-t.sy,c=t.moved;if(t=null,a.type==="pointercancel"){ze.s>1?(Mo(),Mr(!0)):gs(!0);return}if(!c){let h=performance.now();if(h-i<320)if(i=0,ze.s>1)gs(!0);else{let u=r();ze.s=2.5,ze.x=-(a.clientX-u.x)*1.5,ze.y=-(a.clientY-u.y)*1.5,Mo(),Mr(!0)}else i=h;return}if(ze.s>1){Mo(),Mr(!0);return}Math.abs(o)>60&&Math.abs(o)>Math.abs(l)?pa(o<0?1:-1):l>110&&l>Math.abs(o)?jc():gs(!0)};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s)}function _g(){let n=an("#modal .sheet"),e=an("#modal .sheet-top"),t=null;e.addEventListener("pointerdown",r=>{if(!r.target.closest("button")){t={id:r.pointerId,y:r.clientY,t:performance.now()};try{e.setPointerCapture(r.pointerId)}catch{}n.style.transition="none"}}),e.addEventListener("pointermove",r=>{!t||r.pointerId!==t.id||(n.style.transform=`translateY(${Math.max(0,r.clientY-t.y)}px)`)});let i=r=>{if(!t||r.pointerId!==t.id)return;let s=r.clientY-t.y,a=s>40&&performance.now()-t.t<250;t=null,n.style.transition="",r.type==="pointerup"&&(s>100||a)?Mn():n.style.transform=""};e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i)}var Cp="family-bigfont",_a=()=>document.documentElement.classList.contains("big");function Yc(n){document.documentElement.classList.toggle("big",n);try{localStorage.setItem(Cp,n?"1":"0")}catch{}document.querySelectorAll(".fs-toggle").forEach(e=>{e.textContent=n?"\uAC00-":"\uAC00+",e.setAttribute("aria-label",n?"\uAE00\uC790 \uC791\uAC8C":"\uAE00\uC790 \uD06C\uAC8C")})}function th(){try{localStorage.getItem(Cp)==="1"&&Yc(!0)}catch{}document.addEventListener("click",e=>{e.target.closest(".fs-toggle")&&(Qe(6),Yc(!_a()))}),an("#modal-close").onclick=Mn,an("#modal .backdrop").onclick=Mn;let n=ys();n.querySelector(".lb-close").onclick=jc,n.querySelector(".prev").onclick=()=>pa(-1),n.querySelector(".next").onclick=()=>pa(1),xg(),_g(),addEventListener("keydown",e=>{n.classList.contains("open")?(e.key==="ArrowRight"&&pa(1),e.key==="ArrowLeft"&&pa(-1),e.key==="Escape"&&jc()):e.key==="Escape"&&Mn()})}var{esc:Ae,avatarHTML:Tr,toast:Dt,confetti:Ip,onData:Ma,openView:yi,closeModal:nh,replyView:Mg,paintStatus:bg}=vs,Lp=window.FAMILY,ih=(n,e)=>{try{dispatchEvent(new CustomEvent(n,{detail:e}))}catch{}},Dp=n=>{let[e,t]=String(n).split("-").map(Number);return`${e}\uC6D4 ${t}\uC77C`},Eg=n=>{let e=Ne(),t=`${e.slice(0,4)}-${n}`;return t<e&&(t=`${+e.slice(0,4)+1}-${n}`),Jn(e,t)},Qn={onSent:null,takePhoto:null};function rh({hero:n=!0}={}){return{html:'<div class="fam-box"></div>',mount:t=>{let i=t.querySelector(".fam-box"),r=()=>{var c,h;if(!i.isConnected)return;let s=vo(),a=Wi(),o=cs(3),l=ls();i.innerHTML=`
        ${n?`<div class="inv-hero">
          <div class="en">FAMILY VILLAGE</div>
          <div class="names">${Ae(Wt())}</div>
          ${a>0?`<div class="muted">\uD568\uAED8\uD55C \uC9C0 <b style="color:var(--rose-deep)">${a.toLocaleString()}\uC77C\uC9F8</b></div>`:""}
        </div>`:""}
        ${l.length?`<div class="bday-banner">\u{1F382} \uC624\uB298\uC740 <b>${l.map(u=>Ae(u.role||u.name)).join(", ")}</b> \uC0DD\uC77C\uC774\uC5D0\uC694! <button class="btn small pink f-bday" type="button">\uCD95\uD558 \uD3B8\uC9C0 \uC4F0\uAE30</button></div>`:""}
        ${Lp.greeting?`<p class="inv-greet">${Ae(Lp.greeting)}</p>`:""}
        <div class="card">
          <b>\u{1F463} \uC624\uB298 \uB2E4\uB140\uAC04 \uAC00\uC871</b>
          <div class="chips-row">${s.length?s.map(u=>`<span class="who-chip" style="--c:${Ae(u.look.outfit)}">${Ae(u.role||u.name)}</span>`).join(""):'<span class="muted">\uC544\uC9C1 \uC544\uBB34\uB3C4 \uC548 \uC654\uC5B4\uC694</span>'}</div>
          ${xt()?`<p class="muted" style="margin:8px 0 0">\uB0B4 \uCD9C\uC11D \uB3C4\uC7A5 <b>${cp()}\uAC1C</b> \u{1F43E}</p>`:""}
        </div>
        <div class="mem-grid">
          ${rn().map(u=>`
            <button type="button" class="mem-card" data-id="${Ae(u.id)}">
              ${Tr(u.look)}
              <b>${Ae(u.role||u.name)}${u.id===Me()?" <small>(\uB098)</small>":""}</b>
              <small>${Ae(u.name)}${u.birthday?` \xB7 \u{1F382} ${Dp(u.birthday)}`:""}</small>
              <span class="mem-heart">\u{1F497} ${us(u.id).length}</span>
            </button>`).join("")}
        </div>
        ${o.length?`<div class="card"><b>\u{1F4C5} \uB2E4\uAC00\uC624\uB294 \uB0A0</b>${o.map(u=>`<div class="up-row"><span>${u.emoji||"\u{1F4CC}"} ${Ae(u.title)}</span><span class="dd">${ha(u.dday)}</span></div>`).join("")}
          <button class="btn small f-cal" type="button" style="margin-top:8px">\uB2EC\uB825 \uBCF4\uAE30</button></div>`:""}
        <div class="btns">
          <button class="btn pink f-q" type="button">\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38</button>
          <button class="btn f-mail" type="button">\u2709\uFE0F \uD3B8\uC9C0 \uC4F0\uAE30</button>
          <button class="btn f-share" type="button">\u{1F517} \uB9C8\uC744 \uC8FC\uC18C \uBCF4\uB0B4\uAE30</button>
        </div>
        <p class="muted l-status" role="status" hidden></p>`,i.querySelectorAll(".mem-card").forEach(u=>u.onclick=()=>{Qe(8),xs(u.dataset.id)}),i.querySelector(".f-q").onclick=()=>Ar(),i.querySelector(".f-mail").onclick=()=>Nn(Qn.onSent),i.querySelector(".f-share").onclick=xa,(c=i.querySelector(".f-cal"))==null||c.addEventListener("click",()=>ba()),(h=i.querySelector(".f-bday"))==null||h.addEventListener("click",()=>{var u;return Nn(Qn.onSent,{to:((u=l.find(d=>d.id!==Me()))==null?void 0:u.id)||l[0].id})}),bg(i.querySelector(".l-status"))};return r(),Fn(),Ma(r)}}}function Co(){yi(Wt(),rh())}function sh(n){if(!xt())return Dt("\uD558\uD2B8\uB294 \uAC00\uC871\uB9CC \uBCF4\uB0BC \uC218 \uC788\uC5B4\uC694"),!1;if(n===Me())return Dt("\uB098\uC5D0\uAC8C\uB294 \uD558\uD2B8\uB97C \uBCF4\uB0BC \uC218 \uC5C6\uC5B4\uC694 \u{1F606}"),!1;if(yo(n))return Dt(`\uC624\uB298\uC740 \uC774\uBBF8 ${sn(n)}\uC5D0\uAC8C \uD558\uD2B8\uB97C \uBCF4\uB0C8\uC5B4\uC694 \u{1F497}`),!1;let e=Ne();return nn("hearts",{id:`${Me()}-${n}-${e}`,who:Me(),to:n,day:e}),ih("family:heart",{to:n}),Qe(15),Ye.sfx("heart"),Dt(`\u{1F497} ${sn(n)}\uC5D0\uAC8C \uD558\uD2B8\uB97C \uBCF4\uB0C8\uC5B4\uC694`),!0}function Sg(n){return{html:'<div class="mem-box"></div>',mount:t=>{let i=t.querySelector(".mem-box"),r=()=>{var f,y,p,x,g;let s=It(n);if(!s||!i.isConnected)return;let a=s.id===Me(),o=Ne(),l=s.birthday?Eg(s.birthday):null,c=mi(o).find(v=>v.who===s.id),h=hs(),u=!!Bc(o)||a,d=at("letters").filter(v=>v.who===s.id&&!gi(v)).slice(0,2),m=a?Kn().length:0;i.innerHTML=`
        <div class="mem-hero" style="--c:${Ae(s.look.outfit)}">
          ${Tr(s.look,"big")}
          <div class="names">${Ae(s.name)}</div>
          <div class="muted">${Ae(s.role||"")}${s.birthday?` \xB7 \u{1F382} ${Dp(s.birthday)}${l===0?' <b style="color:var(--rose-deep)">\uC624\uB298!</b>':` (D-${l})`}`:""}</div>
          ${s.line?`<p class="mem-line">\u201C${Ae(s.line)}\u201D</p>`:""}
        </div>
        ${l===0?`<div class="bday-banner">\u{1F382} \uC624\uB298\uC740 ${Ae(s.role||s.name)} \uC0DD\uC77C\uC774\uC5D0\uC694!</div>`:""}
        <div class="stat-row">
          <div><b>\u{1F497} ${us(s.id).length}</b><small>\uBC1B\uC740 \uD558\uD2B8 (\uC624\uB298 ${lp(s.id).length})</small></div>
          <div><b>\u{1F463} ${new Set(at("visits").filter(v=>v.who===s.id).map(v=>v.day)).size}</b><small>\uCD9C\uC11D \uB3C4\uC7A5</small></div>
          <div><b>\u{1F4A7} ${at("water").filter(v=>v.who===s.id).length}</b><small>\uB098\uBB34\uC5D0 \uC900 \uBB3C</small></div>
        </div>
        <div class="btns">
          ${a?`
            <button class="btn pink m-look" type="button">\u{1F3A8} \uB0B4 \uCE90\uB9AD\uD130 \uAFB8\uBBF8\uAE30</button>
            <button class="btn m-inbox" type="button">\u{1F48C} \uB098\uC5D0\uAC8C \uC628 \uD3B8\uC9C0${m?` <b class="badge">${m}</b>`:""}</button>`:`
            <button class="btn pink m-heart" type="button" ${yo(s.id)?"disabled":""}>${yo(s.id)?"\u{1F497} \uC624\uB298 \uD558\uD2B8 \uBCF4\uB0C4":"\u{1F497} \uD558\uD2B8 \uBCF4\uB0B4\uAE30"}</button>
            <button class="btn m-mail" type="button">\u2709\uFE0F \uD3B8\uC9C0 \uC4F0\uAE30</button>
            ${s.phone?`<a class="btn small" href="tel:${Ae(s.phone)}">\u{1F4DE}</a><a class="btn small" href="sms:${Ae(s.phone)}">\u{1F4AC}</a>`:""}`}
        </div>
        ${h?`<div class="card"><b>\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38</b><p class="muted" style="margin:6px 0">${Ae(h.q)}</p>
          ${c?u?`<p class="ans-text">${Ae(c.text)}</p>`:'<p class="muted">\u{1F512} \uB098\uB3C4 \uB2F5\uD558\uBA74 \uBCFC \uC218 \uC788\uC5B4\uC694</p>':'<p class="muted">\uC544\uC9C1 \uB2F5\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694</p>'}
          <button class="btn small m-q" type="button">\uB2F5\uD558\uB7EC \uAC00\uAE30</button></div>`:""}
        ${d.length?`<div class="card"><b>\u2709\uFE0F ${Ae(s.role||s.name)}\uC758 \uCD5C\uADFC \uD3B8\uC9C0</b>${d.map((v,b)=>`<button type="button" class="up-row linkrow" data-i="${b}"><span>${Ae(String(v.message).split(`
`)[0].slice(0,26))}</span><span class="muted">${Gi(v.time)}</span></button>`).join("")}</div>`:""}`,(f=i.querySelector(".m-heart"))==null||f.addEventListener("click",()=>{sh(s.id)&&r()}),(y=i.querySelector(".m-mail"))==null||y.addEventListener("click",()=>Nn(Qn.onSent,{to:s.id})),(p=i.querySelector(".m-look"))==null||p.addEventListener("click",()=>hh()),(x=i.querySelector(".m-inbox"))==null||x.addEventListener("click",()=>Nn(Qn.onSent,{filter:"me"})),(g=i.querySelector(".m-q"))==null||g.addEventListener("click",()=>Ar()),i.querySelectorAll(".linkrow").forEach(v=>v.onclick=()=>ga(d,+v.dataset.i,()=>xs(n)))};return r(),Ma(r)}}}function xs(n){let e=It(n);yi(e?e.id===Me()?"\u{1F3E0} \uB0B4 \uC9D1":`${e.emoji||"\u{1F3E0}"} ${e.role||e.name}\uB124 \uC9D1`:"\uC6B0\uB9AC \uAC00\uC871",Sg(n))}function ah(n=Ne(),{embedded:e=!1}={}){return{html:'<div class="q-box"></div>',mount:i=>{let r=i.querySelector(".q-box"),s=[],a=()=>{var f;if(!r.isConnected)return;s.splice(0).forEach(y=>y());let l=hs(n);if(!l){r.innerHTML='<p class="muted">config.js\uC5D0 \uC9C8\uBB38\uC774 \uC5C6\uC5B4\uC694</p>';return}let c=mi(n),h=Bc(n),u=n===Ne(),d=c.filter(y=>y.who!==Me());r.innerHTML=`
        <div class="q-hero">
          <div class="muted">${u?`\uC624\uB298\uC758 \uC9C8\uBB38 \xB7 ${hn(n)}`:`${hn(n)}\uC758 \uC9C8\uBB38`}</div>
          <div class="q-text">${Ae(l.q)}</div>
          <div class="muted">${c.length?`${c.length}\uBA85\uC774 \uB2F5\uD588\uC5B4\uC694`:"\uC544\uC9C1 \uC544\uBB34\uB3C4 \uB2F5\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694"}</div>
        </div>
        ${xt()?`
          <form class="q-form" autocomplete="off" ${h?"hidden":""}>
            <textarea class="field q-in" maxlength="300" placeholder="\uB098\uC758 \uB2F5\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694 (300\uC790)" aria-label="\uB098\uC758 \uB2F5">${h?Ae(h.text):""}</textarea>
            <button class="btn pink" type="submit" style="width:100%;margin-top:8px">${h?"\u270F\uFE0F \uACE0\uCE5C \uB2F5 \uC62C\uB9AC\uAE30":"\u{1F4AC} \uB2F5\uD558\uACE0 \uAC00\uC871 \uB2F5 \uBCF4\uAE30"}</button>
          </form>`:`<p class="muted center">\u{1F64B} \uB2F5\uC740 \uAC00\uC871\uB9CC \uB0A8\uAE38 \uC218 \uC788\uC5B4\uC694. \uBA54\uB274\uC758 '\uB098\uB294 \uB204\uAD6C?'\uC5D0\uC11C \uB098\uB97C \uACE8\uB77C \uC8FC\uC138\uC694</p>`}
        <div class="ans-list">
          ${h?Pp(h,!0):""}
          ${h?d.map(y=>Pp(y)).join(""):d.map(y=>{var p,x;return`<div class="ans-card locked" style="--c:${Ae(((p=It(y.who))==null?void 0:p.look.outfit)||"#E6D5C6")}">${Tr(((x=It(y.who))==null?void 0:x.look)||{},"mini")}<b>${Ae(sn(y.who)||y.name)}</b><span class="muted">\u{1F512} \uB2F5\uD558\uBA74 \uC5F4\uB824\uC694</span></div>`}).join("")}
        </div>
        ${e?"":`<div class="divider"></div><b>\u{1F5D3}\uFE0F \uC9C0\uB09C \uC9C8\uBB38</b><div class="past-q">${op(14).filter(y=>y.day!==n).map(y=>`<button type="button" class="up-row linkrow" data-day="${y.day}"><span>${Ae(y.q)}</span><span class="muted">${hn(y.day,!1)} \xB7 ${y.answers.length}\uBA85</span></button>`).join("")}</div>`}`;let m=r.querySelector(".q-form");m&&(m.onsubmit=async y=>{y.preventDefault();let p=m.querySelector(".q-in").value.trim();if(!p){Dt("\uB2F5\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694");return}let x=await nn("answers",{id:`${Me()}-${n}`,who:Me(),name:_n(Me()),day:n,q:l.idx,text:p});Dt(x.ok?h?"\u270F\uFE0F \uB2F5\uC744 \uACE0\uCCE4\uC5B4\uC694":"\u{1F4AC} \uB2F5\uD588\uC5B4\uC694! \uAC00\uC871\uC758 \uB2F5\uC774 \uC5F4\uB838\uC5B4\uC694":"\uD734\uB300\uD3F0\uC5D0 \uBCF4\uAD00\uD588\uC5B4\uC694. \uC5F0\uACB0\uB418\uBA74 \uC790\uB3D9\uC73C\uB85C \uC62C\uB9B4\uAC8C\uC694",2600),h||(Ip(["\u{1F4AC}","\u{1F497}","\u2728"]),Ye.sfx("tada")),a()}),(f=r.querySelector(".a-edit"))==null||f.addEventListener("click",()=>{var y;m.hidden=!1,(y=r.querySelector(".ans-card.me"))==null||y.remove(),m.querySelector(".q-in").focus()}),r.querySelectorAll(".past-q .linkrow").forEach(y=>y.onclick=()=>Ar(y.dataset.day)),h&&r.querySelectorAll(".ans-card[data-id]").forEach(y=>{let p=Mg(y.dataset.id,{compact:!0});y.insertAdjacentHTML("beforeend",p.html),s.push(p.mount(y))})};a(),Fn();let o=Ma(a);return()=>{o(),s.forEach(l=>l())}}}}function Pp(n,e=!1){let t=It(n.who);return`<div class="ans-card${e?" me":""}" data-id="${Ae(n.id)}" style="--c:${Ae((t==null?void 0:t.look.outfit)||"#E6D5C6")}">
    <div class="ans-top">${Tr((t==null?void 0:t.look)||{},"mini")}<b>${Ae(t?t.role||t.name:n.name)}${e?" (\uB098)":""}</b><small class="muted">${Gi(n.time)}</small>${e?'<button type="button" class="linklike a-edit">\uACE0\uCE58\uAE30</button>':""}</div>
    <p class="ans-text">${Ae(n.text)}</p>
  </div>`}function Ar(n=Ne()){yi("\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38",ah(n))}function wg(n){let e=n.key.replace(/-/g,""),t=cn(n.key,1).replace(/-/g,""),i=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//family-village//KO","BEGIN:VEVENT",`UID:${e}-${encodeURIComponent(n.title).slice(0,30)}@family-village`,`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"")}`,`DTSTART;VALUE=DATE:${e}`,`DTEND;VALUE=DATE:${t}`,...n.yearly?["RRULE:FREQ=YEARLY"]:[],`SUMMARY:${n.title}`,...n.note?[`DESCRIPTION:${n.note}`]:[],"END:VEVENT","END:VCALENDAR"].join(`\r
`),r=document.createElement("a");r.href=URL.createObjectURL(new Blob([i],{type:"text/calendar"})),r.download="family-day.ics",r.click(),Dt("\u{1F4C5} \uCE98\uB9B0\uB354 \uD30C\uC77C\uC744 \uC5F4\uC5B4 \uC800\uC7A5\uD574 \uC8FC\uC138\uC694")}function oh(){return{html:'<div class="cal-box"></div>',mount:e=>{let t=e.querySelector(".cal-box"),i=Ne(),r=+i.slice(0,4),s=+i.slice(5,7),a=i,o=()=>{let l=ap(r,s),c=new Date(Date.UTC(r,s-1,1)).getUTCDay(),h=new Date(Date.UTC(r,s,0)).getUTCDate(),u="<tr>"+"<td></td>".repeat(c);for(let f=1;f<=h;f++){let y=`${r}-${String(s).padStart(2,"0")}-${String(f).padStart(2,"0")}`,p=(c+f-1)%7,x=l[y];u+=`<td class="${p===0?"sun":""}${y===i?" today":""}${y===a?" pick":""}"><button type="button" data-k="${y}">${f}${x?`<i>${x[0].emoji||"\u2022"}</i>`:""}</button></td>`,p===6&&f!==h&&(u+="</tr><tr>")}u+="</tr>";let d=l[a]||[],m=cs(8);t.innerHTML=`
        <div class="cal-nav"><button class="btn small c-prev" type="button" aria-label="\uC774\uC804 \uB2EC">\u2039</button><b>${r}\uB144 ${s}\uC6D4</b><button class="btn small c-next" type="button" aria-label="\uB2E4\uC74C \uB2EC">\u203A</button></div>
        <table class="cal fam-cal"><tr>${["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"].map((f,y)=>`<th class="${y===0?"sun":""}">${f}</th>`).join("")}</tr>${u}</table>
        <div class="card">${d.length?d.map(f=>`<div class="up-row"><span>${f.emoji||"\u{1F4CC}"} ${Ae(f.title)}</span>${f.note?`<small class="muted">${Ae(f.note)}</small>`:""}</div>`).join(""):`<span class="muted">${hn(a)} \xB7 \uD2B9\uBCC4\uD55C \uB0A0\uC774 \uC5C6\uC5B4\uC694</span>`}</div>
        <b>\u23F0 \uB2E4\uAC00\uC624\uB294 \uB0A0</b>
        <div class="ups">${m.map((f,y)=>`<div class="up-row"><span>${f.emoji||"\u{1F4CC}"} ${Ae(f.title)}<small class="muted"> \xB7 ${hn(f.key)}${f.note?` \xB7 ${Ae(f.note)}`:""}</small></span><span class="dd">${ha(f.dday)}</span><button type="button" class="linklike c-ics" data-i="${y}">\uCE98\uB9B0\uB354\uC5D0</button></div>`).join("")||'<p class="muted">config.js\uC758 events\uC5D0 \uB0A0\uC9DC\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694</p>'}</div>`,t.querySelector(".c-prev").onclick=()=>{s--,s<1&&(s=12,r--),o()},t.querySelector(".c-next").onclick=()=>{s++,s>12&&(s=1,r++),o()},t.querySelectorAll(".fam-cal button").forEach(f=>f.onclick=()=>{a=f.dataset.k,Qe(6),o()}),t.querySelectorAll(".c-ics").forEach(f=>f.onclick=()=>wg(m[+f.dataset.i]))};o()}}}function ba(){yi("\u{1F4C5} \uAC00\uC871 \uB2EC\uB825",oh())}function lh(){return{html:'<div class="poll-box"></div>',mount:e=>{let t=e.querySelector(".poll-box"),i=!1,r=()=>{var o,l;if(!t.isConnected)return;let s=mp();t.innerHTML=`
        <p class="muted">\uAC00\uC871 \uC77C\uC740 \uB2E4 \uAC19\uC774 \uC815\uD574\uC694. \uB9C8\uC74C\uC774 \uBC14\uB00C\uBA74 \uB2E4\uC2DC \uB20C\uB7EC\uB3C4 \uB3FC\uC694 \u{1F5F3}\uFE0F</p>
        ${s.map((c,h)=>{let u=zc(c.id),d=u.size,m=u.get(Me()),f=c.cfg?"":`<small class="muted"> \xB7 ${Ae(sn(c.who)||c.name)}\uAC00 \uB9CC\uB4E0 \uD22C\uD45C</small>`;return`<div class="card poll" data-p="${h}"><b>${Ae(c.q)}</b>${f}
            ${c.options.map((y,p)=>{let x=[...u.entries()].filter(([,v])=>v===p).map(([v])=>v),g=d?Math.round(x.length/d*100):0;return`<button type="button" class="poll-opt${m===p?" on":""}" data-k="${p}" ${xt()?"":"disabled"}>
                <span class="bar" style="width:${g}%"></span><span class="txt">${Ae(y)}</span><span class="cnt">${x.length?`${x.length}\uD45C`:""}</span>
                ${x.length?`<span class="voters">${x.map(v=>{var b;return`<i style="--c:${Ae(((b=It(v))==null?void 0:b.look.outfit)||"#ccc")}">${Ae(sn(v))}</i>`}).join("")}</span>`:""}
              </button>`}).join("")}
            <small class="muted">${d?`${d}\uBA85 \uCC38\uC5EC`:"\uC544\uC9C1 \uC544\uBB34\uB3C4 \uC548 \uD588\uC5B4\uC694"}</small></div>`}).join("")}
        ${xt()?i?`
          <form class="card poll-new" autocomplete="off">
            <b>\uFF0B \uC0C8 \uD22C\uD45C</b>
            <input class="field pn-q" maxlength="40" placeholder="\uBB34\uC5C7\uC744 \uC815\uD560\uAE4C\uC694? (\uC608: \uC77C\uC694\uC77C \uC810\uC2EC \uBA54\uB274)" aria-label="\uC9C8\uBB38">
            ${[0,1,2,3].map(c=>`<input class="field pn-o" maxlength="20" placeholder="\uBCF4\uAE30 ${c+1}${c>1?" (\uC120\uD0DD)":""}" aria-label="\uBCF4\uAE30 ${c+1}">`).join("")}
            <div class="btns"><button class="btn pink" type="submit">\uD22C\uD45C \uB9CC\uB4E4\uAE30</button><button class="btn pn-cancel" type="button">\uCDE8\uC18C</button></div>
          </form>`:'<button class="btn p-make" type="button" style="width:100%">\uFF0B \uC0C8 \uD22C\uD45C \uB9CC\uB4E4\uAE30</button>':'<p class="muted center">\u{1F64B} \uD22C\uD45C\uB294 \uAC00\uC871\uB9CC \uD560 \uC218 \uC788\uC5B4\uC694</p>'}`,t.querySelectorAll(".poll").forEach(c=>{let h=s[+c.dataset.p];c.querySelectorAll(".poll-opt").forEach(u=>u.onclick=async()=>{let d=+u.dataset.k;if(zc(h.id).get(Me())===d){Dt("\uC774\uBBF8 \uACE0\uB978 \uBCF4\uAE30\uC608\uC694");return}Qe(10),Ye.sfx("pop"),await nn("votes",{id:`${Me()}-${h.id}`,who:Me(),poll:h.id,choice:d}),Dt(`\u{1F5F3}\uFE0F '${h.options[d]}'\uC5D0 \uD55C \uD45C!`),r()})}),(o=t.querySelector(".p-make"))==null||o.addEventListener("click",()=>{var c;i=!0,r(),(c=t.querySelector(".pn-q"))==null||c.focus()}),(l=t.querySelector(".pn-cancel"))==null||l.addEventListener("click",()=>{i=!1,r()});let a=t.querySelector(".poll-new");a&&(a.onsubmit=async c=>{c.preventDefault();let h=a.querySelector(".pn-q").value.trim(),u=[...a.querySelectorAll(".pn-o")].map(d=>d.value.trim().replace(/\|/g,"/")).filter(Boolean);if(!h||u.length<2){Dt("\uC9C8\uBB38\uACFC \uBCF4\uAE30 \uB450 \uAC1C \uC774\uC0C1\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694");return}i=!1,await nn("polls",{who:Me(),name:_n(Me()),q:h,options:u.join("|")}),Dt("\u{1F5F3}\uFE0F \uC0C8 \uD22C\uD45C\uB97C \uB9CC\uB4E4\uC5C8\uC5B4\uC694. \uAC00\uC871\uC5D0\uAC8C \uC54C\uB824 \uC8FC\uC138\uC694!"),r()})};return r(),Fn(),Ma(r)}}}function Lo(){yi("\u{1F5F3}\uFE0F \uAC00\uC871 \uD22C\uD45C\uD568",lh())}var Tg=["\u{1F330}","\u{1F331}","\u{1F33F}","\u{1F333}","\u{1F338}","\u{1F34E}"];function Ag(){if(!xt())return Dt("\uBB3C\uC740 \uAC00\uC871\uB9CC \uC904 \uC218 \uC788\uC5B4\uC694"),!1;let n=fi();if(n.wateredToday)return Dt("\u{1F4A7} \uC624\uB298\uC740 \uC774\uBBF8 \uBB3C\uC744 \uC92C\uC5B4\uC694. \uB0B4\uC77C \uB610 \uC640 \uC8FC\uC138\uC694"),!1;let e=Ne();return nn("water",{id:`${Me()}-${e}`,who:Me(),day:e}),Qe(20),Ye.sfx("water"),setTimeout(()=>{let t=fi();ih("family:water",{grew:t.stage>n.stage,stage:t.stage}),t.stage>n.stage?(Ip(["\u{1F331}","\u{1F338}","\u2728","\u{1F34E}"]),Ye.sfx("tada"),Dt(`\u{1F389} ${t.name}\uAC00 '${t.stageName}'(\uC73C)\uB85C \uC790\uB790\uC5B4\uC694!`,3600)):Dt(t.next==null?"\u{1F4A7} \uBB3C\uC744 \uC92C\uC5B4\uC694. \uC5F4\uB9E4\uAC00 \uC8FC\uB801\uC8FC\uB801\uD574\uC694 \u{1F34E}":`\u{1F4A7} \uBB3C\uC744 \uC92C\uC5B4\uC694! ${t.toNext}\uBC88 \uB354 \uC8FC\uBA74 '${xo[t.stage+1]}'\uC774 \uB3FC\uC694`,3e3)},30),!0}function ch(){return{html:'<div class="tree-box"></div>',mount:e=>{let t=e.querySelector(".tree-box"),i=()=>{if(!t.isConnected)return;let r=fi(),s=Ne(),a=Array.from({length:7},(o,l)=>cn(s,l-6)).map(o=>({k:o,n:new Set(at("water").filter(l=>l.day===o).map(l=>l.who)).size}));t.innerHTML=`
        <div class="tree-hero">
          <div class="tree-emoji">${Tg[r.stage]}</div>
          <div class="names">${Ae(r.name)}</div>
          <div class="muted">\uC9C0\uAE08\uC740 <b>${r.stageName}</b> \xB7 \uBAA8\uC778 \uBB3C ${r.total}\uBC88${r.thirsty?" \xB7 \u{1F4A7} \uBAA9\uB9D0\uB77C\uC694":""}</div>
          <div class="prog"><i style="width:${Math.round(r.progress*100)}%"></i></div>
          <small class="muted">${r.next==null?"\uB2E4 \uC790\uB790\uC5B4\uC694! \uC5F4\uB9E4\uAC00 \uC5F4\uB838\uC5B4\uC694 \u{1F34E}":`${r.toNext}\uBC88 \uB354 \uC8FC\uBA74 '${xo[r.stage+1]}'`}</small>
        </div>
        <p class="muted center">\uAC00\uC871\uC774 \uD558\uB8E8\uC5D0 \uD55C \uBC88\uC529 \uBB3C\uC744 \uC904 \uC218 \uC788\uC5B4\uC694. \uB2E4 \uAC19\uC774 \uC624\uB798 \uB4E4\uB97C\uC218\uB85D \uB098\uBB34\uAC00 \uC790\uB77C\uC694</p>
        <button class="btn pink t-water" type="button" style="width:100%;padding:14px" ${!xt()||r.wateredToday?"disabled":""}>${xt()?r.wateredToday?"\u{1F4A7} \uC624\uB298\uC740 \uBB3C\uC744 \uC92C\uC5B4\uC694":"\u{1F4A7} \uBB3C \uC8FC\uAE30":"\u{1F64B} \uAC00\uC871\uB9CC \uBB3C\uC744 \uC904 \uC218 \uC788\uC5B4\uC694"}</button>
        <div class="card"><b>\uC624\uB298 \uBB3C \uC900 \uAC00\uC871</b><div class="chips-row">${r.todayWho.length?r.todayWho.map(o=>{var l;return`<span class="who-chip" style="--c:${Ae(((l=It(o))==null?void 0:l.look.outfit)||"#ccc")}">${Ae(sn(o))}</span>`}).join(""):'<span class="muted">\uC544\uC9C1 \uC5C6\uC5B4\uC694</span>'}</div></div>
        <div class="week">${a.map(o=>`<div><i style="height:${8+o.n*12}px"></i><small>${hn(o.k,!1).replace("\uC6D4 ","/").replace("\uC77C","")}</small></div>`).join("")}</div>`,t.querySelector(".t-water").onclick=()=>{Ag()&&setTimeout(i,60)}};return i(),Fn(),Ma(i)}}}function Po(){yi("\u{1F331} "+fi().name,ch())}var Fp="family-guest-look";function vi(){let n=xt();if(n)return{...n.look};try{let e=JSON.parse(localStorage.getItem(Fp)||"null");if(e)return e}catch{}return{outfit:os[Math.floor(Math.random()*os.length)],hair:fo[Math.floor(Math.random()*5)],longHair:Math.random()<.5}}function Rg(){let n=vi(),e=[["","\uC5C6\uC74C"],["cap","\uC57C\uAD6C \uBAA8\uC790"],["beanie","\uD138\uBAA8\uC790"],["flower","\uAF43\uD540"]];return{html:'<div class="look-box"></div>',mount:i=>{let r=i.querySelector(".look-box"),s=()=>{r.innerHTML=`
        <div class="look-preview">${Tr(n,"big")}</div>
        <b>\uC637 \uC0C9</b><div class="sw">${os.map(a=>`<button type="button" class="sw-c${n.outfit===a?" on":""}" data-k="outfit" data-v="${a}" style="--c:${a}" aria-label="\uC637 \uC0C9 ${a}"></button>`).join("")}</div>
        <b>\uBA38\uB9AC \uC0C9</b><div class="sw">${fo.map(a=>`<button type="button" class="sw-c${n.hair===a?" on":""}" data-k="hair" data-v="${a}" style="--c:${a}" aria-label="\uBA38\uB9AC \uC0C9 ${a}"></button>`).join("")}</div>
        <b>\uBA38\uB9AC \uBAA8\uC591</b><div class="seg"><button type="button" data-k="longHair" data-v="0" class="${n.longHair?"":"on"}">\uC9E7\uC740 \uBA38\uB9AC</button><button type="button" data-k="longHair" data-v="1" class="${n.longHair?"on":""}">\uAE34 \uBA38\uB9AC</button></div>
        <b>\uC548\uACBD</b><div class="seg"><button type="button" data-k="glasses" data-v="0" class="${n.glasses?"":"on"}">\uC548 \uC368\uC694</button><button type="button" data-k="glasses" data-v="1" class="${n.glasses?"on":""}">\u{1F453} \uC368\uC694</button></div>
        <b>\uBAA8\uC790</b><div class="seg">${e.map(([a,o])=>`<button type="button" data-k="hat" data-v="${a}" class="${(n.hat||"")===a?"on":""}">${o}</button>`).join("")}</div>
        <b>\uD0A4</b><div class="seg"><button type="button" data-k="kid" data-v="0" class="${n.kid?"":"on"}">\uC5B4\uB978</button><button type="button" data-k="kid" data-v="1" class="${n.kid?"on":""}">\uC544\uC774</button></div>
        <button class="btn pink lk-save" type="button" style="width:100%;margin-top:14px;padding:14px">\u2728 \uC774 \uBAA8\uC2B5\uC73C\uB85C \uD560\uB798\uC694</button>
        ${xt()?'<p class="muted center">\uBC14\uAFBC \uBAA8\uC2B5\uC740 \uAC00\uC871\uC5D0\uAC8C\uB3C4 \uBCF4\uC5EC\uC694 (\uB0B4 \uC9D1 \uC55E\uC758 \uB098)</p>':""}`,r.querySelectorAll("[data-k]").forEach(a=>a.onclick=()=>{let o=a.dataset.k,l=a.dataset.v;n[o]=["longHair","glasses","kid"].includes(o)?l==="1":l,Qe(6),Ye.sfx("pop"),s()}),r.querySelector(".lk-save").onclick=async()=>{if(xt())await nn("looks",{id:Me(),who:Me(),look:{...n}});else try{localStorage.setItem(Fp,JSON.stringify(n))}catch{}ih("family:look",n),Dt("\u2728 \uC0C8 \uBAA8\uC2B5\uC73C\uB85C \uBC14\uB00C\uC5C8\uC5B4\uC694"),nh()}};s()}}}function hh(){yi("\u{1F3A8} \uB0B4 \uCE90\uB9AD\uD130 \uAFB8\uBBF8\uAE30",Rg())}function Io(n=Me()){return`<div class="who-grid">
    ${rn().map(e=>`<button type="button" class="who-btn${n===e.id?" on":""}" data-id="${Ae(e.id)}">${Tr(e.look)}<b>${Ae(e.role||e.name)}</b><small>${Ae(e.name)}</small></button>`).join("")}
    <button type="button" class="who-btn guest${n==="guest"?" on":""}" data-id="guest"><span class="guest-ic">\u{1F440}</span><b>\uAD6C\uACBD\uB9CC</b><small>\uC190\uB2D8</small></button>
  </div>`}function Cg(n){let e=t=>{t.querySelectorAll(".who-btn").forEach(i=>i.onclick=()=>{Qe(10),Ye.sfx("pop"),go(i.dataset.id),n==null||n(i.dataset.id),nh(),Dt(i.dataset.id==="guest"?"\u{1F440} \uC190\uB2D8\uC73C\uB85C \uAD6C\uACBD\uD574\uC694":`\u{1F64B} ${sn(i.dataset.id)}(\uC73C)\uB85C \uB4E4\uC5B4\uC654\uC5B4\uC694`)})};return{html:`<p class="muted">\uC774 \uD734\uB300\uD3F0\uC744 \uC4F0\uB294 \uC0AC\uB78C\uC744 \uACE8\uB77C \uC8FC\uC138\uC694. \uD3B8\uC9C0\xB7\uB2F5\xB7\uD558\uD2B8\uAC00 \uC774 \uC774\uB984\uC73C\uB85C \uB0A8\uC544\uC694</p>${Io()}`,mount:e}}function Up(n){yi("\u{1F64B} \uB098\uB294 \uB204\uAD6C\uC608\uC694?",Cg(n))}function Lg(){let n=rn().filter(i=>i.id!==Me()),e=new Set(n.slice(0,5).map(i=>i.id)),t=i=>{let r=()=>i.querySelectorAll(".who-btn").forEach(s=>s.classList.toggle("on",e.has(s.dataset.id)));i.querySelectorAll(".who-btn").forEach(s=>s.onclick=()=>{let a=s.dataset.id;e.has(a)?e.delete(a):e.size<5?e.add(a):Dt("\uD55C \uBC88\uC5D0 \uB2E4\uC12F \uBA85\uAE4C\uC9C0 \uAC19\uC774 \uCC0D\uC744 \uC218 \uC788\uC5B4\uC694"),Qe(6),r()}),i.querySelector(".pp-go").onclick=()=>{nh(),setTimeout(()=>{var s;return(s=Qn.takePhoto)==null?void 0:s.call(Qn,[...e])},260)},r()};return{html:`<p class="muted">\uB204\uAD6C\uB791 \uAC19\uC774 \uCC0D\uC744\uAE4C\uC694? (\uCD5C\uB300 5\uBA85)</p>
      <div class="who-grid">${n.map(i=>`<button type="button" class="who-btn" data-id="${Ae(i.id)}">${Tr(i.look)}<b>${Ae(i.role||i.name)}</b></button>`).join("")}</div>
      <button class="btn pink pp-go" type="button" style="width:100%;margin-top:12px;padding:14px">\u{1F4F8} 3 \xB7 2 \xB7 1 \uCC0D\uAE30</button>`,mount:t}}function Np(){yi("\u{1F4F8} \uAC00\uC871\uC0AC\uC9C4",Lg())}var Zh="160";var Kl=1,Pg=2,Si=3,sr=0,Xt=1,yf=2;var Ql=2;var Dr=100;var Jh=204,Kh=205;var vf=0,Ig=1,Dg=2,ir=0,Fg=1,Ug=2,Ng=3,Bg=4,Og=5,zg=6;var xf=300,Ws=301,qs=302,Qh=303,eu=304,ec=306,ni=1e3,wi=1001,tu=1002,Nt=1003,Bp=1004;var dh=1005;var kn=1006,kg=1007;var gl=1008;var Nr=1009;var Ju=1012,_f=1013,er=1014,tr=1015,Oa=1016,Mf=1017,bf=1018,Br=1020;var Sn=1023;var Or=1026,$s=1027;var Ef=1029;var Sf=1031,wf=1033,ph=33776,mh=33777,fh=33778,gh=33779,Op=35840,zp=35841,kp=35842,Hp=35843,Tf=36196,Gp=37492,Vp=37496,Wp=37808,qp=37809,$p=37810,Xp=37811,jp=37812,Yp=37813,Zp=37814,Jp=37815,Kp=37816,Qp=37817,em=37818,tm=37819,nm=37820,im=37821,yh=36492,rm=36494,sm=36495;var am=36284,om=36285,lm=36286;var yl=2300,vl=2301,vh=2302,cm=2400,hm=2401,um=2402;var Af=3e3,zr=3001;var ti="",Mt="srgb",Ri="srgb-linear",Ku="display-p3",tc="display-p3-linear",xl="linear",ot="srgb",_l="rec709",Ml="p3";var _s=7680;var nu=35044;var dm="300 es",iu=1035,Xs=2e3,bl=2001,ar=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fl=Math.PI/180,ru=180/Math.PI;function Ai(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(qt[255&n]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[255&e]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[63&t|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[255&i]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function Hg(n,e){return(n%e+e)%e}function xh(n,e,t){return(1-t)*n+t*e}function pm(n){return(n&n-1)==0&&n!==0}function su(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function st(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("Invalid component type.")}}var he=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],f=i[8],y=r[0],p=r[3],x=r[6],g=r[1],v=r[4],b=r[7],T=r[2],S=r[5],R=r[8];return s[0]=a*y+o*g+l*T,s[3]=a*p+o*v+l*S,s[6]=a*x+o*b+l*R,s[1]=c*y+h*g+u*T,s[4]=c*p+h*v+u*S,s[7]=c*x+h*b+u*R,s[2]=d*y+m*g+f*T,s[5]=d*p+m*v+f*S,s[8]=d*x+m*b+f*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,m=c*s-a*l,f=t*u+i*d+r*m;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/f;return e[0]=u*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=d*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_h.makeScale(e,t)),this}rotate(e){return this.premultiply(_h.makeRotation(-e)),this}translate(e,t){return this.premultiply(_h.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_h=new ke;function Rf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function El(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gg(){let n=El("canvas");return n.style.display="block",n}var mm={};function Da(n){n in mm||(mm[n]=!0,console.warn(n))}var fm=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gm=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Do={[Ri]:{transfer:xl,primaries:_l,toReference:n=>n,fromReference:n=>n},[Mt]:{transfer:ot,primaries:_l,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[tc]:{transfer:xl,primaries:Ml,toReference:n=>n.applyMatrix3(gm),fromReference:n=>n.applyMatrix3(fm)},[Ku]:{transfer:ot,primaries:Ml,toReference:n=>n.convertSRGBToLinear().applyMatrix3(gm),fromReference:n=>n.applyMatrix3(fm).convertLinearToSRGB()}},Vg=new Set([Ri,tc]),it={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Vg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Do[e].toReference;return(0,Do[t].fromReference)(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Do[n].primaries},getTransfer:function(n){return n===ti?xl:Do[n].transfer}};function Gs(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function Mh(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var Ms,Sl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ms===void 0&&(Ms=El("canvas")),Ms.width=e.width,Ms.height=e.height;let i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=El("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Gs(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Gs(t[i]/255)):t[i]=Gs(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Wg=0,wl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bh(r[a].image)):s.push(bh(r[a]))}else s=bh(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function bh(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Sl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qg=0,pn=class n extends ar{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Ai(),this.name="",this.source=new wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===zr?Mt:ti),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ni:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ni:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?zr:Af}set encoding(e){Da("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zr?Mt:ti}};pn.DEFAULT_IMAGE=null,pn.DEFAULT_MAPPING=xf,pn.DEFAULT_ANISOTROPY=1;var St=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],f=l[9],y=l[2],p=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(f-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(f+p)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,b=(m+1)/2,T=(x+1)/2,S=(h+d)/4,R=(u+y)/4,k=(f+p)/4;return v>b&&v>T?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=S/i,s=R/i):b>T?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=S/r,s=k/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=k/s),this.set(i,r,s,t),this}let g=Math.sqrt((p-f)*(p-f)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(p-f)/g,this.y=(u-y)/g,this.z=(d-h)/g,this.w=Math.acos((c+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},au=class extends ar{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(Da("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===zr?Mt:ti),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new wl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ci=class extends au{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Tl=class extends pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ou=class extends pn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],m=s[a+1],f=s[a+2],y=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=m,e[t+2]=f,void(e[t+3]=y);if(u!==y||l!==d||c!==m||h!==f){let p=1-o,x=l*d+c*m+h*f+u*y,g=x>=0?1:-1,v=1-x*x;if(v>Number.EPSILON){let T=Math.sqrt(v),S=Math.atan2(T,x*g);p=Math.sin(p*S)/T,o=Math.sin(o*S)/T}let b=o*g;if(l=l*p+d*b,c=c*p+m*b,h=h*p+f*b,u=u*p+y*b,p===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],m=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*m-c*d,e[t+1]=l*f+h*d+c*u-o*m,e[t+2]=c*f+h*m+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),m=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*m*f,this._y=c*m*u-d*h*f,this._z=c*h*f+d*m*u,this._w=c*h*u-d*m*f;break;case"YXZ":this._x=d*h*u+c*m*f,this._y=c*m*u-d*h*f,this._z=c*h*f-d*m*u,this._w=c*h*u+d*m*f;break;case"ZXY":this._x=d*h*u-c*m*f,this._y=c*m*u+d*h*f,this._z=c*h*f+d*m*u,this._w=c*h*u-d*m*f;break;case"ZYX":this._x=d*h*u-c*m*f,this._y=c*m*u+d*h*f,this._z=c*h*f-d*m*u,this._w=c*h*u+d*m*f;break;case"YZX":this._x=d*h*u+c*m*f,this._y=c*m*u+d*h*f,this._z=c*h*f-d*m*u,this._w=c*h*u-d*m*f;break;case"XZY":this._x=d*h*u-c*m*f,this._y=c*m*u-d*h*f,this._z=c*h*f+d*m*u,this._w=c*h*u+d*m*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ym.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eh.copy(this).projectOnVector(e),this.sub(Eh)}reflect(e){return this.sub(Eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eh=new A,ym=new wn,Vn=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(s,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fo.copy(i.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),Uo.subVectors(this.max,Ea),bs.subVectors(e.a,Ea),Es.subVectors(e.b,Ea),Ss.subVectors(e.c,Ea),Yi.subVectors(Es,bs),Zi.subVectors(Ss,Es),Rr.subVectors(bs,Ss);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-Rr.z,Rr.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,Rr.z,0,-Rr.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-Rr.y,Rr.x,0];return!!Sh(t,bs,Es,Ss,Uo)&&(t=[1,0,0,0,1,0,0,0,1],!!Sh(t,bs,Es,Ss,Uo)&&(No.crossVectors(Yi,Zi),t=[No.x,No.y,No.z],Sh(t,bs,Es,Ss,Uo)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Bn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xi=[new A,new A,new A,new A,new A,new A,new A,new A],Bn=new A,Fo=new Vn,bs=new A,Es=new A,Ss=new A,Yi=new A,Zi=new A,Rr=new A,Ea=new A,Uo=new A,No=new A,Cr=new A;function Sh(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Cr.fromArray(n,s);let o=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),l=e.dot(Cr),c=t.dot(Cr),h=i.dot(Cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var $g=new Vn,Sa=new A,wh=new A,Wn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):$g.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);let t=Sa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(wh)),this.expandByPoint(Sa.copy(e.center).sub(wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_i=new A,Th=new A,Bo=new A,Ji=new A,Ah=new A,Oo=new A,Rh=new A,kr=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Th.copy(e).add(t).multiplyScalar(.5),Bo.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(Th);let s=.5*e.distanceTo(t),a=-this.direction.dot(Bo),o=Ji.dot(this.direction),l=-Ji.dot(Bo),c=Ji.lengthSq(),h=Math.abs(1-a*a),u,d,m,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let y=1/h;u*=y,d*=y,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Th).addScaledVector(Bo,d),m}intersectSphere(e,t){_i.subVectors(e.center,this.origin);let i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,r,s){Ah.subVectors(t,e),Oo.subVectors(i,e),Rh.crossVectors(Ah,Oo);let a,o=this.direction.dot(Rh);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ji.subVectors(this.origin,e);let l=a*this.direction.dot(Oo.crossVectors(Ji,Oo));if(l<0)return null;let c=a*this.direction.dot(Ah.cross(Ji));if(c<0||l+c>o)return null;let h=-a*Ji.dot(Rh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,m,f,y,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,m,f,y,p)}set(e,t,i,r,s,a,o,l,c,h,u,d,m,f,y,p){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=m,x[7]=f,x[11]=y,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/ws.setFromMatrixColumn(e,0).length(),s=1/ws.setFromMatrixColumn(e,1).length(),a=1/ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,m=a*u,f=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+f*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=f+m*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,m=l*u,f=c*h,y=c*u;t[0]=d+y*o,t[4]=f*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-f,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,m=l*u,f=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=f+m*o,t[1]=m+f*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,m=a*u,f=o*h,y=o*u;t[0]=l*h,t[4]=f*c-m,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=m*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,m=a*c,f=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=f*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+f,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,m=a*c,f=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=m*u-f,t[2]=f*u-m,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xg,e,jg)}lookAt(e,t,i){let r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Ki.crossVectors(i,un),Ki.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ki.crossVectors(i,un)),Ki.normalize(),zo.crossVectors(un,Ki),r[0]=Ki.x,r[4]=zo.x,r[8]=un.x,r[1]=Ki.y,r[5]=zo.y,r[9]=un.y,r[2]=Ki.z,r[6]=zo.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],f=i[2],y=i[6],p=i[10],x=i[14],g=i[3],v=i[7],b=i[11],T=i[15],S=r[0],R=r[4],k=r[8],U=r[12],C=r[1],W=r[5],_=r[9],P=r[13],N=r[2],H=r[6],K=r[10],Y=r[14],q=r[3],j=r[7],O=r[11],B=r[15];return s[0]=a*S+o*C+l*N+c*q,s[4]=a*R+o*W+l*H+c*j,s[8]=a*k+o*_+l*K+c*O,s[12]=a*U+o*P+l*Y+c*B,s[1]=h*S+u*C+d*N+m*q,s[5]=h*R+u*W+d*H+m*j,s[9]=h*k+u*_+d*K+m*O,s[13]=h*U+u*P+d*Y+m*B,s[2]=f*S+y*C+p*N+x*q,s[6]=f*R+y*W+p*H+x*j,s[10]=f*k+y*_+p*K+x*O,s[14]=f*U+y*P+p*Y+x*B,s[3]=g*S+v*C+b*N+T*q,s[7]=g*R+v*W+b*H+T*j,s[11]=g*k+v*_+b*K+T*O,s[15]=g*U+v*P+b*Y+T*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14];return e[3]*(+s*l*u-r*c*u-s*o*d+i*c*d+r*o*m-i*l*m)+e[7]*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*h-s*l*h)+e[11]*(+t*c*u-t*o*m-s*a*u+i*a*m+s*o*h-i*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],f=e[12],y=e[13],p=e[14],x=e[15],g=u*p*c-y*d*c+y*l*m-o*p*m-u*l*x+o*d*x,v=f*d*c-h*p*c-f*l*m+a*p*m+h*l*x-a*d*x,b=h*y*c-f*u*c+f*o*m-a*y*m-h*o*x+a*u*x,T=f*u*l-h*y*l-f*o*d+a*y*d+h*o*p-a*u*p,S=t*g+i*v+r*b+s*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/S;return e[0]=g*R,e[1]=(y*d*s-u*p*s-y*r*m+i*p*m+u*r*x-i*d*x)*R,e[2]=(o*p*s-y*l*s+y*r*c-i*p*c-o*r*x+i*l*x)*R,e[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*m-i*l*m)*R,e[4]=v*R,e[5]=(h*p*s-f*d*s+f*r*m-t*p*m-h*r*x+t*d*x)*R,e[6]=(f*l*s-a*p*s-f*r*c+t*p*c+a*r*x-t*l*x)*R,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*m+t*l*m)*R,e[8]=b*R,e[9]=(f*u*s-h*y*s-f*i*m+t*y*m+h*i*x-t*u*x)*R,e[10]=(a*y*s-f*o*s+f*i*c-t*y*c-a*i*x+t*o*x)*R,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*m-t*o*m)*R,e[12]=T*R,e[13]=(h*y*r-f*u*r+f*i*d-t*y*d-h*i*p+t*u*p)*R,e[14]=(f*o*r-a*y*r-f*i*l+t*y*l+a*i*p-t*o*p)*R,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*d+t*o*d)*R,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,m=s*h,f=s*u,y=a*h,p=a*u,x=o*u,g=l*c,v=l*h,b=l*u,T=i.x,S=i.y,R=i.z;return r[0]=(1-(y+x))*T,r[1]=(m+b)*T,r[2]=(f-v)*T,r[3]=0,r[4]=(m-b)*S,r[5]=(1-(d+x))*S,r[6]=(p+g)*S,r[7]=0,r[8]=(f+v)*R,r[9]=(p-g)*R,r[10]=(1-(d+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=ws.set(r[0],r[1],r[2]).length(),a=ws.set(r[4],r[5],r[6]).length(),o=ws.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);let l=1/s,c=1/a,h=1/o;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=c,On.elements[5]*=c,On.elements[6]*=c,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,t.setFromRotationMatrix(On),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),m,f;if(o===Xs)m=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==bl)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);m=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(a-s),d=(t+e)*c,m=(i+r)*h,f,y;if(o===Xs)f=(a+s)*u,y=-2*u;else{if(o!==bl)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,y=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ws=new A,On=new Ie,Xg=new A(0,0,0),jg=new A(1,1,1),Ki=new A,zo=new A,un=new A,vm=new Ie,xm=new wn,js=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xm.setFromEuler(this),this.setFromQuaternion(xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};js.DEFAULT_ORDER="XYZ";var za=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Yg=0,_m=new A,Ts=new wn,Mi=new Ie,ko=new A,wa=new A,Zg=new A,Jg=new wn,Mm=new A(1,0,0),bm=new A(0,1,0),Em=new A(0,0,1),Kg={type:"added"},Qg={type:"removed"},Ut=class n extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new A,t=new js,i=new wn,r=new A(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ke}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(bm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,t){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(bm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ko.copy(e):ko.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(wa,ko,this.up):Mi.lookAt(ko,wa,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),Ts.setFromRotationMatrix(Mi),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Kg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,e,Zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,Jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let s=t[i];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++){let o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Ut.DEFAULT_UP=new A(0,1,0),Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new A,bi=new A,Ch=new A,Ei=new A,As=new A,Rs=new A,Sm=new A,Lh=new A,Ph=new A,Ih=new A,Ho=!1,nr=class n{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),zn.subVectors(e,t),r.cross(zn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){zn.subVectors(r,t),bi.subVectors(i,t),Ch.subVectors(e,t);let a=zn.dot(zn),o=zn.dot(bi),l=zn.dot(Ch),c=bi.dot(bi),h=bi.dot(Ch),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-m-f,f,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ei)!==null&&Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,t,i,r,s,a,o,l){return Ho===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ho=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static isFrontFacing(e,t,i,r){return zn.subVectors(i,t),bi.subVectors(e,t),zn.cross(bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),.5*zn.cross(bi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ho===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ho=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;As.subVectors(r,i),Rs.subVectors(s,i),Lh.subVectors(e,i);let l=As.dot(Lh),c=Rs.dot(Lh);if(l<=0&&c<=0)return t.copy(i);Ph.subVectors(e,r);let h=As.dot(Ph),u=Rs.dot(Ph);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(As,a);Ih.subVectors(e,s);let m=As.dot(Ih),f=Rs.dot(Ih);if(f>=0&&m<=f)return t.copy(s);let y=m*c-l*f;if(y<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Rs,o);let p=h*f-m*u;if(p<=0&&u-h>=0&&m-f>=0)return Sm.subVectors(s,r),o=(u-h)/(u-h+(m-f)),t.copy(r).addScaledVector(Sm,o);let x=1/(p+y+d);return a=y*x,o=d*x,t.copy(i).addScaledVector(As,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Go={h:0,s:0,l:0};function Dh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Se=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Hg(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Dh(a,s,e+1/3),this.g=Dh(a,s,e),this.b=Dh(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let i=Cf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=Mh(e.r),this.g=Mh(e.g),this.b=Mh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return it.fromWorkingColorSpace($t.copy(this),e),65536*Math.round(Bt(255*$t.r,0,255))+256*Math.round(Bt(255*$t.g,0,255))+Math.round(Bt(255*$t.b,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace($t.copy(this),t);let i=$t.r,r=$t.g,s=$t.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Mt){it.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,i=$t.g,r=$t.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Go);let i=xh(Qi.h,Go.h,t),r=xh(Qi.s,Go.s,t),s=xh(Qi.l,Go.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new Se;Se.NAMES=Cf;var ey=0,ii=class extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=1,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jh,this.blendDst=Kh,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jh&&(i.blendSrc=this.blendSrc),this.blendDst!==Kh&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ge=class extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},__=ty();function ty(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var Et=new A,Vo=new he,wt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vo.fromBufferAttribute(this,t),Vo.applyMatrix3(e),this.setXY(t,Vo.x,Vo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}};var Al=class extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Rl=class extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Pe=class extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var ny=0,En=new Ie,Fh=new Ut,Cs=new A,dn=new Vn,Ta=new Vn,Ft=new A,nt=class n extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rf(e)?Rl:Al)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return Fh.lookAt(e),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new A,1/0);if(e){let i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(dn.min,Ta.min),dn.expandByPoint(Ft),Ft.addVectors(dn.max,Ta.max),dn.expandByPoint(Ft)):(dn.expandByPoint(Ta.min),dn.expandByPoint(Ta.max))}dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),Ft.add(Cs)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<o;C++)c[C]=new A,h[C]=new A;let u=new A,d=new A,m=new A,f=new he,y=new he,p=new he,x=new A,g=new A;function v(C,W,_){u.fromArray(r,3*C),d.fromArray(r,3*W),m.fromArray(r,3*_),f.fromArray(a,2*C),y.fromArray(a,2*W),p.fromArray(a,2*_),d.sub(u),m.sub(u),y.sub(f),p.sub(f);let P=1/(y.x*p.y-p.x*y.y);isFinite(P)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(P),g.copy(m).multiplyScalar(y.x).addScaledVector(d,-p.x).multiplyScalar(P),c[C].add(x),c[W].add(x),c[_].add(x),h[C].add(g),h[W].add(g),h[_].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let C=0,W=b.length;C<W;++C){let _=b[C],P=_.start;for(let N=P,H=P+_.count;N<H;N+=3)v(i[N+0],i[N+1],i[N+2])}let T=new A,S=new A,R=new A,k=new A;function U(C){R.fromArray(s,3*C),k.copy(R);let W=c[C];T.copy(W),T.sub(R.multiplyScalar(R.dot(W))).normalize(),S.crossVectors(k,W);let _=S.dot(h[C])<0?-1:1;l[4*C]=T.x,l[4*C+1]=T.y,l[4*C+2]=T.z,l[4*C+3]=_}for(let C=0,W=b.length;C<W;++C){let _=b[C],P=_.start;for(let N=P,H=P+_.count;N<H;N+=3)U(i[N+0]),U(i[N+1]),U(i[N+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new A,s=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,m=e.count;d<m;d+=3){let f=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),m=0,f=0;for(let y=0,p=l.length;y<p;y++){m=o.isInterleavedBufferAttribute?l[y]*o.data.stride+o.offset:l[y]*h;for(let x=0;x<h;x++)d[f++]=c[m++]}return new wt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wm=new Ie,Lr=new kr,Wo=new Wn,Tm=new A,Ls=new A,Ps=new A,Is=new A,Uh=new A,qo=new A,$o=new he,Xo=new he,jo=new he,Am=new A,Rm=new A,Cm=new A,Yo=new A,Zo=new A,de=class extends Ut{constructor(e=new nt,t=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Uh.fromBufferAttribute(u,e),a?qo.addScaledVector(Uh,h):qo.addScaledVector(Uh.sub(t),h))}t.add(qo)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Wo.copy(i.boundingSphere),Wo.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),Wo.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Wo,Tm)===null||Lr.origin.distanceToSquared(Tm)>(e.far-e.near)**2))return;wm.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(wm),i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Lr)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,y=d.length;f<y;f++){let p=d[f],x=a[p.materialIndex];for(let g=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));g<v;g+=3)r=Jo(this,x,e,i,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=p.materialIndex,t.push(r))}else for(let f=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);f<y;f+=3)r=Jo(this,a,e,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,y=d.length;f<y;f++){let p=d[f],x=a[p.materialIndex];for(let g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));g<v;g+=3)r=Jo(this,x,e,i,c,h,u,g,g+1,g+2),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=p.materialIndex,t.push(r))}else for(let f=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);f<y;f+=3)r=Jo(this,a,e,i,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function Jo(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ls),n.getVertexPosition(l,Ps),n.getVertexPosition(c,Is);let h=function(u,d,m,f,y,p,x,g){let v;if(v=d.side===Xt?f.intersectTriangle(x,p,y,!0,g):f.intersectTriangle(y,p,x,d.side===sr,g),v===null)return null;Zo.copy(g),Zo.applyMatrix4(u.matrixWorld);let b=m.ray.origin.distanceTo(Zo);return b<m.near||b>m.far?null:{distance:b,point:Zo.clone(),object:u}}(n,e,t,i,Ls,Ps,Is,Yo);if(h){r&&($o.fromBufferAttribute(r,o),Xo.fromBufferAttribute(r,l),jo.fromBufferAttribute(r,c),h.uv=nr.getInterpolation(Yo,Ls,Ps,Is,$o,Xo,jo,new he)),s&&($o.fromBufferAttribute(s,o),Xo.fromBufferAttribute(s,l),jo.fromBufferAttribute(s,c),h.uv1=nr.getInterpolation(Yo,Ls,Ps,Is,$o,Xo,jo,new he),h.uv2=h.uv1),a&&(Am.fromBufferAttribute(a,o),Rm.fromBufferAttribute(a,l),Cm.fromBufferAttribute(a,c),h.normal=nr.getInterpolation(Yo,Ls,Ps,Is,Am,Rm,Cm,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new A,materialIndex:0};nr.getNormal(Ls,Ps,Is,u.normal),h.face=u}return h}var me=class n extends nt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,m=0;function f(y,p,x,g,v,b,T,S,R,k,U){let C=b/R,W=T/k,_=b/2,P=T/2,N=S/2,H=R+1,K=k+1,Y=0,q=0,j=new A;for(let O=0;O<K;O++){let B=O*W-P;for(let ne=0;ne<H;ne++){let E=ne*C-_;j[y]=E*g,j[p]=B*v,j[x]=N,c.push(j.x,j.y,j.z),j[y]=0,j[p]=0,j[x]=S>0?1:-1,h.push(j.x,j.y,j.z),u.push(ne/R),u.push(1-O/k),Y+=1}}for(let O=0;O<k;O++)for(let B=0;B<R;B++){let ne=d+B+H*O,E=d+B+H*(O+1),M=d+(B+1)+H*(O+1),D=d+(B+1)+H*O;l.push(ne,E,D),l.push(E,M,D),q+=6}o.addGroup(m,q,U),m+=q,d+=Y}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ys(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Jt(n){let e={};for(let t=0;t<n.length;t++){let i=Ys(n[t]);for(let r in i)e[r]=i[r]}return e}function Lf(n){return n.getRenderTarget()===null?n.outputColorSpace:it.workingColorSpace}var iy={clone:Ys,merge:Jt},qn=class extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ka=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Xs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kt=class extends ka{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*ru*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*fl*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*ru*Math.atan(Math.tan(.5*fl*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*fl*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ds=-90,lu=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Kt(Ds,1,e,t);r.layers=this.layers,this.add(r);let s=new Kt(Ds,1,e,t);s.layers=this.layers,this.add(s);let a=new Kt(Ds,1,e,t);a.layers=this.layers,this.add(a);let o=new Kt(Ds,1,e,t);o.layers=this.layers,this.add(o);let l=new Kt(Ds,1,e,t);l.layers=this.layers,this.add(l);let c=new Kt(Ds,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Xs)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==bl)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Cl=class extends pn{constructor(e,t,i,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Ws,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cu=class extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Da("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===zr?Mt:ti),this.texture=new Cl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new me(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:0});s.uniforms.tEquirect.value=t;let a=new de(r,s),o=t.minFilter;return t.minFilter===gl&&(t.minFilter=kn),new lu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},Nh=new A,ry=new A,sy=new ke,Hn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Nh.subVectors(i,t).cross(ry.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Nh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||sy.getNormalMatrix(e),r=this.coplanarPoint(Nh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pr=new Wn,Ko=new A,Zs=class{constructor(e=new Hn,t=new Hn,i=new Hn,r=new Hn,s=new Hn,a=new Hn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],m=r[8],f=r[9],y=r[10],p=r[11],x=r[12],g=r[13],v=r[14],b=r[15];if(i[0].setComponents(l-s,d-c,p-m,b-x).normalize(),i[1].setComponents(l+s,d+c,p+m,b+x).normalize(),i[2].setComponents(l+a,d+h,p+f,b+g).normalize(),i[3].setComponents(l-a,d-h,p-f,b-g).normalize(),i[4].setComponents(l-o,d-u,p-y,b-v).normalize(),t===Xs)i[5].setComponents(l+o,d+u,p+y,b+v).normalize();else{if(t!==bl)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,y,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ko.x=r.normal.x>0?e.max.x:e.min.x,Ko.y=r.normal.y>0?e.max.y:e.min.y,Ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ay(n,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(r){return r.isInterleavedBufferAttribute&&(r=r.data),i.get(r)},remove:function(r){r.isInterleavedBufferAttribute&&(r=r.data);let s=i.get(r);s&&(n.deleteBuffer(s.buffer),i.delete(r))},update:function(r,s){if(r.isGLBufferAttribute){let o=i.get(r);return void((!o||o.version<r.version)&&i.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version}))}r.isInterleavedBufferAttribute&&(r=r.data);let a=i.get(r);if(a===void 0)i.set(r,function(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer(),m;if(n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");m=n.HALF_FLOAT}else m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);m=n.UNSIGNED_BYTE}return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}(r,s));else if(a.version<r.version){if(a.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,o),u.count===-1&&d.length===0&&n.bufferSubData(c,0,h),d.length!==0){for(let m=0,f=d.length;m<f;m++){let y=d[m];t?n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count):n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h.subarray(y.start,y.start+y.count))}l.clearUpdateRanges()}u.count!==-1&&(t?n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,r,s),a.version=r.version}}}}var rt=class n extends nt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,m=[],f=[],y=[],p=[];for(let x=0;x<h;x++){let g=x*d-a;for(let v=0;v<c;v++){let b=v*u-s;f.push(b,-g,0),y.push(0,0,1),p.push(v/o),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let g=0;g<o;g++){let v=g+c*x,b=g+c*(x+1),T=g+1+c*(x+1),S=g+1+c*x;m.push(v,b,S),m.push(b,T,S)}this.setIndex(m),this.setAttribute("position",new Pe(f,3)),this.setAttribute("normal",new Pe(y,3)),this.setAttribute("uv",new Pe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Fe={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ue={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ei={basic:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Se(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Jt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Jt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Se(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Jt([ue.points,ue.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Jt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Jt([ue.common,ue.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Jt([ue.sprite,ue.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Jt([ue.common,ue.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Jt([ue.lights,ue.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ei.physical={uniforms:Jt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};var Qo={r:0,b:0,g:0};function oy(n,e,t,i,r,s,a){let o=new Se(0),l,c,h=s===!0?0:1,u=null,d=0,m=null;function f(y,p){y.getRGB(Qo,Lf(n)),i.buffers.color.setClear(Qo.r,Qo.g,Qo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(y,p=1){o.set(y),h=p,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(y){h=y,f(o,h)},render:function(y,p){let x=!1,g=p.isScene===!0?p.background:null;g&&g.isTexture&&(g=(p.backgroundBlurriness>0?t:e).get(g)),g===null?f(o,h):g&&g.isColor&&(f(g,1),x=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===ec)?(c===void 0&&(c=new de(new me(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Ys(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=it.getTransfer(g.colorSpace)!==ot,u===g&&d===g.version&&m===n.toneMapping||(c.material.needsUpdate=!0,u=g,d=g.version,m=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new de(new rt(2,2),new qn({name:"BackgroundMaterial",uniforms:Ys(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=it.getTransfer(g.colorSpace)!==ot,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),u===g&&d===g.version&&m===n.toneMapping||(l.material.needsUpdate=!0,u=g,d=g.version,m=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}}}function ly(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null),c=l,h=!1;function u(T){return i.isWebGL2?n.bindVertexArray(T):s.bindVertexArrayOES(T)}function d(T){return i.isWebGL2?n.deleteVertexArray(T):s.deleteVertexArrayOES(T)}function m(T){let S=[],R=[],k=[];for(let U=0;U<r;U++)S[U]=0,R[U]=0,k[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:R,attributeDivisors:k,object:T,attributes:{},index:null}}function f(){let T=c.newAttributes;for(let S=0,R=T.length;S<R;S++)T[S]=0}function y(T){p(T,0)}function p(T,S){let R=c.newAttributes,k=c.enabledAttributes,U=c.attributeDivisors;R[T]=1,k[T]===0&&(n.enableVertexAttribArray(T),k[T]=1),U[T]!==S&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,S),U[T]=S)}function x(){let T=c.newAttributes,S=c.enabledAttributes;for(let R=0,k=S.length;R<k;R++)S[R]!==T[R]&&(n.disableVertexAttribArray(R),S[R]=0)}function g(T,S,R,k,U,C,W){W===!0?n.vertexAttribIPointer(T,S,R,U,C):n.vertexAttribPointer(T,S,R,k,U,C)}function v(){b(),h=!0,c!==l&&(c=l,u(c.object))}function b(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(T,S,R,k,U){let C=!1;if(a){let W=function(_,P,N){let H=N.wireframe===!0,K=o[_.id];K===void 0&&(K={},o[_.id]=K);let Y=K[P.id];Y===void 0&&(Y={},K[P.id]=Y);let q=Y[H];return q===void 0&&(q=m(i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()),Y[H]=q),q}(k,R,S);c!==W&&(c=W,u(c.object)),C=function(_,P,N,H){let K=c.attributes,Y=P.attributes,q=0,j=N.getAttributes();for(let O in j)if(j[O].location>=0){let B=K[O],ne=Y[O];if(ne===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(ne=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(ne=_.instanceColor)),B===void 0||B.attribute!==ne||ne&&B.data!==ne.data)return!0;q++}return c.attributesNum!==q||c.index!==H}(T,k,R,U),C&&function(_,P,N,H){let K={},Y=P.attributes,q=0,j=N.getAttributes();for(let O in j)if(j[O].location>=0){let B=Y[O];B===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(B=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(B=_.instanceColor));let ne={};ne.attribute=B,B&&B.data&&(ne.data=B.data),K[O]=ne,q++}c.attributes=K,c.attributesNum=q,c.index=H}(T,k,R,U)}else{let W=S.wireframe===!0;c.geometry===k.id&&c.program===R.id&&c.wireframe===W||(c.geometry=k.id,c.program=R.id,c.wireframe=W,C=!0)}U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(C||h)&&(h=!1,function(W,_,P,N){if(i.isWebGL2===!1&&(W.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let H=N.attributes,K=P.getAttributes(),Y=_.defaultAttributeValues;for(let q in K){let j=K[q];if(j.location>=0){let O=H[q];if(O===void 0&&(q==="instanceMatrix"&&W.instanceMatrix&&(O=W.instanceMatrix),q==="instanceColor"&&W.instanceColor&&(O=W.instanceColor)),O!==void 0){let B=O.normalized,ne=O.itemSize,E=t.get(O);if(E===void 0)continue;let M=E.buffer,D=E.type,X=E.bytesPerElement,I=i.isWebGL2===!0&&(D===n.INT||D===n.UNSIGNED_INT||O.gpuType===_f);if(O.isInterleavedBufferAttribute){let $=O.data,F=$.stride,z=O.offset;if($.isInstancedInterleavedBuffer){for(let G=0;G<j.locationSize;G++)p(j.location+G,$.meshPerAttribute);W.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let G=0;G<j.locationSize;G++)y(j.location+G);n.bindBuffer(n.ARRAY_BUFFER,M);for(let G=0;G<j.locationSize;G++)g(j.location+G,ne/j.locationSize,D,B,F*X,(z+ne/j.locationSize*G)*X,I)}else{if(O.isInstancedBufferAttribute){for(let $=0;$<j.locationSize;$++)p(j.location+$,O.meshPerAttribute);W.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let $=0;$<j.locationSize;$++)y(j.location+$);n.bindBuffer(n.ARRAY_BUFFER,M);for(let $=0;$<j.locationSize;$++)g(j.location+$,ne/j.locationSize,D,B,ne*X,ne/j.locationSize*$*X,I)}}else if(Y!==void 0){let B=Y[q];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(j.location,B);break;case 3:n.vertexAttrib3fv(j.location,B);break;case 4:n.vertexAttrib4fv(j.location,B);break;default:n.vertexAttrib1fv(j.location,B)}}}}x()}(T,S,R,k),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))},reset:v,resetDefaultState:b,dispose:function(){v();for(let T in o){let S=o[T];for(let R in S){let k=S[R];for(let U in k)d(k[U].object),delete k[U];delete S[R]}delete o[T]}},releaseStatesOfGeometry:function(T){if(o[T.id]===void 0)return;let S=o[T.id];for(let R in S){let k=S[R];for(let U in k)d(k[U].object),delete k[U];delete S[R]}delete o[T.id]},releaseStatesOfProgram:function(T){for(let S in o){let R=o[S];if(R[T.id]===void 0)continue;let k=R[T.id];for(let U in k)d(k[U].object),delete k[U];delete R[T.id]}},initAttributes:f,enableAttribute:y,disableUnusedAttributes:x}}function cy(n,e,t,i){let r=i.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){n.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(r)c=n,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let u=0;u<l;u++)h+=o[u];t.update(h,s,1)}}}function hy(n,e,t){let i;function r(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=u>0,v=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:g,floatFragmentTextures:v,floatVertexTextures:g&&v,maxSamples:s?n.getParameter(n.MAX_SAMPLES):0}}function uy(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Hn,o=new ke,l={value:null,needsUpdate:!1};function c(h,u,d,m){let f=h!==null?h.length:0,y=null;if(f!==0){if(y=l.value,m!==!0||y===null){let p=d+4*f,x=u.matrixWorldInverse;o.getNormalMatrix(x),(y===null||y.length<p)&&(y=new Float32Array(p));for(let g=0,v=d;g!==f;++g,v+=4)a.copy(h[g]).applyMatrix4(x,o),a.normal.toArray(y,v),y[v+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let m=h.clippingPlanes,f=h.clipIntersection,y=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||s&&!y)s?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let x=s?0:i,g=4*x,v=p.clippingState||null;l.value=v,v=c(m,u,g,d);for(let b=0;b!==g;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=x}}}function dy(n){let e=new WeakMap;function t(r,s){return s===Qh?r.mapping=Ws:s===eu&&(r.mapping=qs),r}function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===Qh||s===eu){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new cu(a.height/2);return o.fromEquirectangularTexture(n,r),e.set(r,o),r.addEventListener("dispose",i),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Ll=class extends ka{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lm=[.125,.215,.35,.446,.526,.582],Aa=20,Bh=new Ll,Pm=new Se,Oh=null,zh=0,kh=0,Ir=(1+Math.sqrt(5))/2,Fs=1/Ir,Im=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Ir,Fs),new A(0,Ir,-Fs),new A(Fs,0,Ir),new A(-Fs,0,Ir),new A(Ir,Fs,0),new A(-Ir,Fs,0)],Pl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Oh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,zh,kh),e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Oa,format:Sn,colorSpace:Ri,depthBuffer:!1},r=Dm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dm(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Lm.length;for(let d=0;d<u;d++){let m=Math.pow(2,h);l.push(m);let f=1/m;d>a-4?f=Lm[d-a+4-1]:d===0&&(f=0),c.push(f);let y=1/(m-2),p=-y,x=1+y,g=[p,p,x,p,x,x,p,p,x,x,p,x],v=6,b=6,T=3,S=2,R=1,k=new Float32Array(T*b*v),U=new Float32Array(S*b*v),C=new Float32Array(R*b*v);for(let _=0;_<v;_++){let P=_%3*2/3-1,N=_>2?0:-1,H=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];k.set(H,T*b*_),U.set(g,S*b*_);let K=[_,_,_,_,_,_];C.set(K,R*b*_)}let W=new nt;W.setAttribute("position",new wt(k,T)),W.setAttribute("uv",new wt(U,S)),W.setAttribute("faceIndex",new wt(C,R)),o.push(W),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(Aa),h=new A(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Aa,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return r}_compileMaterial(e){let t=new de(this._lodPlanes[0],e);this._renderer.compile(t,Bh)}_sceneToCubeUV(e,t,i,r){let s=new Kt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Pm),l.toneMapping=ir,l.autoClear=!1;let u=new Ge({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),d=new de(new me,u),m=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,m=!0):(u.color.copy(Pm),m=!0);for(let y=0;y<6;y++){let p=y%3;p===0?(s.up.set(0,a[y],0),s.lookAt(o[y],0,0)):p===1?(s.up.set(0,0,a[y]),s.lookAt(0,o[y],0)):(s.up.set(0,a[y],0),s.lookAt(0,0,o[y]));let x=this._cubeSize;el(r,p*x,y>2?x:0,x,x),l.setRenderTarget(r),m&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ws||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;el(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Bh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Im[(r-1)%Im.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new de(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/m,y=isFinite(s)?1+Math.floor(3*f):Aa;y>Aa&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to 20`);let p=[],x=0;for(let b=0;b<Aa;++b){let T=b/f,S=Math.exp(-T*T/2);p.push(S),b===0?x+=S:b<y&&(x+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;u.envMap.value=e.texture,u.samples.value=y,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=m,u.mipInt.value=g-i;let v=this._sizeLods[r];el(t,3*v*(r>g-4?r-g+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,Bh)}};function Dm(n,e,t){let i=new Ci(n,e,t);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function el(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Fm(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Um(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qu(){return`

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
	`}function py(n){let e=new WeakMap,t=null;function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===Qh||s===eu,o=s===Ws||s===qs;if(a||o){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let l=e.get(r);return t===null&&(t=new Pl(n)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),e.set(r,l),l.texture}if(e.has(r))return e.get(r).texture;{let l=r.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0,u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u}(l)){t===null&&(t=new Pl(n));let c=a?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,c),r.addEventListener("dispose",i),c.texture}return null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function my(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fy(n,e,t,i){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let m=0,f=d.length;m<f;m++)e.remove(d[m])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let y=h.array;d=h.version;for(let p=0,x=y.length;p<x;p+=3){let g=y[p+0],v=y[p+1],b=y[p+2];c.push(g,v,v,b,b,g)}}else{if(u===void 0)return;{let y=u.array;d=u.version;for(let p=0,x=y.length/3-1;p<x;p+=3){let g=p+0,v=p+1,b=p+2;c.push(g,v,v,b,b,g)}}}let m=new(Rf(c)?Rl:Al)(c,1);m.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,m)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],n.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let m=0,f=d.length;m<f;m++)e.update(d[m],n.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function gy(n,e,t,i){let r=i.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){n.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(r)u=n,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d]/o,c[d]);else{u.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];t.update(d,s,1)}}}function yy(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function vy(n,e){return n[0]-e[0]}function xy(n,e){return Math.abs(e[1])-Math.abs(n[1])}function _y(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,a=new St,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=d!==void 0?d.length:0,f=s.get(c);if(f===void 0||f.count!==m){let P=function(){W.dispose(),s.delete(c),c.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let x=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],S=c.morphAttributes.color||[],R=0;x===!0&&(R=1),g===!0&&(R=2),v===!0&&(R=3);let k=c.attributes.position.count*R,U=1;k>e.maxTextureSize&&(U=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);let C=new Float32Array(k*U*4*m),W=new Tl(C,k,U,m);W.type=tr,W.needsUpdate=!0;let _=4*R;for(let N=0;N<m;N++){let H=b[N],K=T[N],Y=S[N],q=k*U*4*N;for(let j=0;j<H.count;j++){let O=j*_;x===!0&&(a.fromBufferAttribute(H,j),C[q+O+0]=a.x,C[q+O+1]=a.y,C[q+O+2]=a.z,C[q+O+3]=0),g===!0&&(a.fromBufferAttribute(K,j),C[q+O+4]=a.x,C[q+O+5]=a.y,C[q+O+6]=a.z,C[q+O+7]=0),v===!0&&(a.fromBufferAttribute(Y,j),C[q+O+8]=a.x,C[q+O+9]=a.y,C[q+O+10]=a.z,C[q+O+11]=Y.itemSize===4?a.w:1)}}f={count:m,texture:W,size:new he(k,U)},s.set(c,f),c.addEventListener("dispose",P)}let y=0;for(let x=0;x<u.length;x++)y+=u[x];let p=c.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",u),h.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}else{let d=u===void 0?0:u.length,m=i[c.id];if(m===void 0||m.length!==d){m=[];for(let g=0;g<d;g++)m[g]=[g,0];i[c.id]=m}for(let g=0;g<d;g++){let v=m[g];v[0]=g,v[1]=u[g]}m.sort(xy);for(let g=0;g<8;g++)g<d&&m[g][1]?(o[g][0]=m[g][0],o[g][1]=m[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(vy);let f=c.morphAttributes.position,y=c.morphAttributes.normal,p=0;for(let g=0;g<8;g++){let v=o[g],b=v[0],T=v[1];b!==Number.MAX_SAFE_INTEGER&&T?(f&&c.getAttribute("morphTarget"+g)!==f[b]&&c.setAttribute("morphTarget"+g,f[b]),y&&c.getAttribute("morphNormal"+g)!==y[b]&&c.setAttribute("morphNormal"+g,y[b]),r[g]=T,p+=T):(f&&c.hasAttribute("morphTarget"+g)===!0&&c.deleteAttribute("morphTarget"+g),y&&c.hasAttribute("morphNormal"+g)===!0&&c.deleteAttribute("morphNormal"+g),r[g]=0)}let x=c.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}}}function My(n,e,t,i){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,n.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var Il=class extends pn{constructor(e,t,i,r,s,a,o,l,c,h){if((h=h!==void 0?h:Or)!==Or&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Or&&(i=er),i===void 0&&h===$s&&(i=Br),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},If=new pn,Df=new Il(1,1);Df.compareFunction=515;var Ff=new Tl,Uf=new ou,Nf=new Cl,Nm=[],Bm=[],Om=new Float32Array(16),zm=new Float32Array(9),km=new Float32Array(4);function Ks(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Nm[r];if(s===void 0&&(s=new Float32Array(r),Nm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function nc(n,e){let t=Bm[e];t===void 0&&(t=new Int32Array(e),Bm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function by(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ey(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function Sy(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function wy(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function Ty(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;km.set(i),n.uniformMatrix2fv(this.addr,!1,km),Lt(t,i)}}function Ay(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;zm.set(i),n.uniformMatrix3fv(this.addr,!1,zm),Lt(t,i)}}function Ry(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;Om.set(i),n.uniformMatrix4fv(this.addr,!1,Om),Lt(t,i)}}function Cy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ly(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function Py(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function Iy(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function Dy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Fy(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function Uy(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Ny(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function By(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?Df:If;t.setTexture2D(e||s,r)}function Oy(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Uf,r)}function zy(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nf,r)}function ky(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ff,r)}function Hy(n,e){n.uniform1fv(this.addr,e)}function Gy(n,e){let t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function Vy(n,e){let t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function Wy(n,e){let t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function qy(n,e){let t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $y(n,e){let t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Xy(n,e){let t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function jy(n,e){n.uniform1iv(this.addr,e)}function Yy(n,e){n.uniform2iv(this.addr,e)}function Zy(n,e){n.uniform3iv(this.addr,e)}function Jy(n,e){n.uniform4iv(this.addr,e)}function Ky(n,e){n.uniform1uiv(this.addr,e)}function Qy(n,e){n.uniform2uiv(this.addr,e)}function ev(n,e){n.uniform3uiv(this.addr,e)}function tv(n,e){n.uniform4uiv(this.addr,e)}function nv(n,e,t){let i=this.cache,r=e.length,s=nc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||If,s[a])}function iv(n,e,t){let i=this.cache,r=e.length,s=nc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Uf,s[a])}function rv(n,e,t){let i=this.cache,r=e.length,s=nc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Nf,s[a])}function sv(n,e,t){let i=this.cache,r=e.length,s=nc(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ff,s[a])}var hu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(r){switch(r){case 5126:return by;case 35664:return Ey;case 35665:return Sy;case 35666:return wy;case 35674:return Ty;case 35675:return Ay;case 35676:return Ry;case 5124:case 35670:return Cy;case 35667:case 35671:return Ly;case 35668:case 35672:return Py;case 35669:case 35673:return Iy;case 5125:return Dy;case 36294:return Fy;case 36295:return Uy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return ky}}(t.type)}},uu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(r){switch(r){case 5126:return Hy;case 35664:return Gy;case 35665:return Vy;case 35666:return Wy;case 35674:return qy;case 35675:return $y;case 35676:return Xy;case 5124:case 35670:return jy;case 35667:case 35671:return Yy;case 35668:case 35672:return Zy;case 35669:case 35673:return Jy;case 5125:return Ky;case 36294:return Qy;case 36295:return ev;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return sv}}(t.type)}},du=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},Hh=/(\w+)(\])?(\[|\.)?/g;function Hm(n,e){n.seq.push(e),n.map[e.id]=e}function av(n,e,t){let i=n.name,r=i.length;for(Hh.lastIndex=0;;){let s=Hh.exec(i),a=Hh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){Hm(t,c===void 0?new hu(o,n,e):new uu(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new du(o),Hm(t,h)),t=h}}}var Vs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r);av(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Gm(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ov=37297,lv=0;function Vm(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let m=u;m<d;m++){let f=m+1;h.push(`${f===l?">":" "} ${f}: ${c[m]}`)}return h.join(`
`)}(n.getShaderSource(e),a)}return r}function cv(n,e){let t=function(i){let r=it.getPrimaries(it.workingColorSpace),s=it.getPrimaries(i),a;switch(r===s?a="":r===Ml&&s===_l?a="LinearDisplayP3ToLinearSRGB":r===_l&&s===Ml&&(a="LinearSRGBToLinearDisplayP3"),i){case Ri:case tc:return[a,"LinearTransferOETF"];case Mt:case Ku:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}}(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hv(n,e){let t;switch(e){case Fg:t="Linear";break;case Ug:t="Reinhard";break;case Ng:t="OptimizedCineon";break;case Bg:t="ACESFilmic";break;case zg:t="AgX";break;case Og:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Us(n){return n!==""}function Wm(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(n){return n.replace(uv,pv)}var dv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pv(n,e){let t=Fe[e];if(t===void 0){let i=dv.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return pu(t)}var mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(n){return n.replace(mv,fv)}function fv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gv(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(_){let P="SHADOWMAP_TYPE_BASIC";return _.shadowMapType===Kl?P="SHADOWMAP_TYPE_PCF":_.shadowMapType===Pg?P="SHADOWMAP_TYPE_PCF_SOFT":_.shadowMapType===Si&&(P="SHADOWMAP_TYPE_VSM"),P}(t),c=function(_){let P="ENVMAP_TYPE_CUBE";if(_.envMap)switch(_.envMapMode){case Ws:case qs:P="ENVMAP_TYPE_CUBE";break;case ec:P="ENVMAP_TYPE_CUBE_UV"}return P}(t),h=function(_){let P="ENVMAP_MODE_REFLECTION";return _.envMap&&_.envMapMode===qs&&(P="ENVMAP_MODE_REFRACTION"),P}(t),u=function(_){let P="ENVMAP_BLENDING_NONE";if(_.envMap)switch(_.combine){case vf:P="ENVMAP_BLENDING_MULTIPLY";break;case Ig:P="ENVMAP_BLENDING_MIX";break;case Dg:P="ENVMAP_BLENDING_ADD"}return P}(t),d=function(_){let P=_.envMapCubeUVHeight;if(P===null)return null;let N=Math.log2(P)-2,H=1/P;return{texelWidth:1/(3*Math.max(Math.pow(2,N),112)),texelHeight:H,maxMip:N}}(t),m=t.isWebGL2?"":function(_){return[_.extensionDerivatives||_.envMapCubeUVHeight||_.bumpMap||_.normalMapTangentSpace||_.clearcoatNormalMap||_.flatShading||_.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(_.extensionFragDepth||_.logarithmicDepthBuffer)&&_.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",_.extensionDrawBuffers&&_.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(_.extensionShaderTextureLOD||_.envMap||_.transmission)&&_.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}(t),f=function(_){return[_.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Us).join(`
`)}(t),y=function(_){let P=[];for(let N in _){let H=_[N];H!==!1&&P.push("#define "+N+" "+H)}return P.join(`
`)}(s),p=r.createProgram(),x,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Us).join(`
`),x.length>0&&(x+=`
`),g=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Us).join(`
`),g.length>0&&(g+=`
`)):(x=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),g=[m,Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Fe.tonemapping_pars_fragment:"",t.toneMapping!==ir?hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,cv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Us).join(`
`)),a=pu(a),a=Wm(a,t),a=qm(a,t),o=pu(o),o=Wm(o,t),o=qm(o,t),a=$m(a),o=$m(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=v+x+a,T=v+g+o,S=Gm(r,r.VERTEX_SHADER,b),R=Gm(r,r.FRAGMENT_SHADER,T);function k(_){if(n.debug.checkShaderErrors){let P=r.getProgramInfoLog(p).trim(),N=r.getShaderInfoLog(S).trim(),H=r.getShaderInfoLog(R).trim(),K=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,S,R);else{let q=Vm(r,S,"vertex"),j=Vm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+P+`
`+q+`
`+j)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):N!==""&&H!==""||(Y=!1);Y&&(_.diagnostics={runnable:K,programLog:P,vertexShader:{log:N,prefix:x},fragmentShader:{log:H,prefix:g}})}r.deleteShader(S),r.deleteShader(R),U=new Vs(r,p),C=function(P,N){let H={},K=P.getProgramParameter(N,P.ACTIVE_ATTRIBUTES);for(let Y=0;Y<K;Y++){let q=P.getActiveAttrib(N,Y),j=q.name,O=1;q.type===P.FLOAT_MAT2&&(O=2),q.type===P.FLOAT_MAT3&&(O=3),q.type===P.FLOAT_MAT4&&(O=4),H[j]={type:q.type,location:P.getAttribLocation(N,j),locationSize:O}}return H}(r,p)}let U,C;r.attachShader(p,S),r.attachShader(p,R),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),this.getUniforms=function(){return U===void 0&&k(this),U},this.getAttributes=function(){return C===void 0&&k(this),C};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(p,ov)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=R,this}var yv=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new fu(e),t.set(e,i)),i}},fu=class{constructor(e){this.id=yv++,this.code=e,this.usedTimes=0}};function vv(n,e,t,i,r,s,a){let o=new za,l=new mu,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures,m=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(p){return p===0?"uv":`uv${p}`}return{getParameters:function(p,x,g,v,b){let T=v.fog,S=b.geometry,R=p.isMeshStandardMaterial?v.environment:null,k=(p.isMeshStandardMaterial?t:e).get(p.envMap||R),U=k&&k.mapping===ec?k.image.height:null,C=f[p.type];p.precision!==null&&(m=r.getMaxPrecision(p.precision),m!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",m,"instead."));let W=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,_=W!==void 0?W.length:0,P,N,H,K,Y=0;if(S.morphAttributes.position!==void 0&&(Y=1),S.morphAttributes.normal!==void 0&&(Y=2),S.morphAttributes.color!==void 0&&(Y=3),C){let Gt=ei[C];P=Gt.vertexShader,N=Gt.fragmentShader}else P=p.vertexShader,N=p.fragmentShader,l.update(p),H=l.getVertexShaderID(p),K=l.getFragmentShaderID(p);let q=n.getRenderTarget(),j=b.isInstancedMesh===!0,O=b.isBatchedMesh===!0,B=!!p.map,ne=!!p.matcap,E=!!k,M=!!p.aoMap,D=!!p.lightMap,X=!!p.bumpMap,I=!!p.normalMap,$=!!p.displacementMap,F=!!p.emissiveMap,z=!!p.metalnessMap,G=!!p.roughnessMap,Q=p.anisotropy>0,re=p.clearcoat>0,w=p.iridescence>0,ae=p.sheen>0,Z=p.transmission>0,J=Q&&!!p.anisotropyMap,le=re&&!!p.clearcoatMap,pe=re&&!!p.clearcoatNormalMap,ge=re&&!!p.clearcoatRoughnessMap,ye=w&&!!p.iridescenceMap,Le=w&&!!p.iridescenceThicknessMap,ve=ae&&!!p.sheenColorMap,_e=ae&&!!p.sheenRoughnessMap,Ue=!!p.specularMap,Pt=!!p.specularColorMap,Ee=!!p.specularIntensityMap,Ze=Z&&!!p.transmissionMap,We=Z&&!!p.thicknessMap,ro=!!p.gradientMap,Kr=!!p.alphaMap,so=p.alphaTest>0,yn=!!p.alphaHash,on=!!p.extensions,Qr=!!S.attributes.uv1,ie=!!S.attributes.uv2,ao=!!S.attributes.uv3,ia=ir;return p.toneMapped&&(q!==null&&q.isXRRenderTarget!==!0||(ia=n.toneMapping)),{isWebGL2:h,shaderID:C,shaderType:p.type,shaderName:p.name,vertexShader:P,fragmentShader:N,defines:p.defines,customVertexShaderID:H,customFragmentShaderID:K,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:m,batching:O,instancing:j,instancingColor:j&&b.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ri,map:B,matcap:ne,envMap:E,envMapMode:E&&k.mapping,envMapCubeUVHeight:U,aoMap:M,lightMap:D,bumpMap:X,normalMap:I,displacementMap:d&&$,emissiveMap:F,normalMapObjectSpace:I&&p.normalMapType===1,normalMapTangentSpace:I&&p.normalMapType===0,metalnessMap:z,roughnessMap:G,anisotropy:Q,anisotropyMap:J,clearcoat:re,clearcoatMap:le,clearcoatNormalMap:pe,clearcoatRoughnessMap:ge,iridescence:w,iridescenceMap:ye,iridescenceThicknessMap:Le,sheen:ae,sheenColorMap:ve,sheenRoughnessMap:_e,specularMap:Ue,specularColorMap:Pt,specularIntensityMap:Ee,transmission:Z,transmissionMap:Ze,thicknessMap:We,gradientMap:ro,opaque:p.transparent===!1&&p.blending===1,alphaMap:Kr,alphaTest:so,alphaHash:yn,combine:p.combine,mapUv:B&&y(p.map.channel),aoMapUv:M&&y(p.aoMap.channel),lightMapUv:D&&y(p.lightMap.channel),bumpMapUv:X&&y(p.bumpMap.channel),normalMapUv:I&&y(p.normalMap.channel),displacementMapUv:$&&y(p.displacementMap.channel),emissiveMapUv:F&&y(p.emissiveMap.channel),metalnessMapUv:z&&y(p.metalnessMap.channel),roughnessMapUv:G&&y(p.roughnessMap.channel),anisotropyMapUv:J&&y(p.anisotropyMap.channel),clearcoatMapUv:le&&y(p.clearcoatMap.channel),clearcoatNormalMapUv:pe&&y(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&y(p.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(p.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&y(p.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&y(p.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(p.sheenRoughnessMap.channel),specularMapUv:Ue&&y(p.specularMap.channel),specularColorMapUv:Pt&&y(p.specularColorMap.channel),specularIntensityMapUv:Ee&&y(p.specularIntensityMap.channel),transmissionMapUv:Ze&&y(p.transmissionMap.channel),thicknessMapUv:We&&y(p.thicknessMap.channel),alphaMapUv:Kr&&y(p.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(I||Q),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,vertexUv1s:Qr,vertexUv2s:ie,vertexUv3s:ao,pointsUvs:b.isPoints===!0&&!!S.attributes.uv&&(B||Kr),fog:!!T,useFog:p.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:p.flatShading===!0,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:b.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:_,morphTextureStride:Y,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:p.dithering,shadowMapEnabled:n.shadowMap.enabled&&g.length>0,shadowMapType:n.shadowMap.type,toneMapping:ia,useLegacyLights:n._useLegacyLights,decodeVideoTexture:B&&p.map.isVideoTexture===!0&&it.getTransfer(p.map.colorSpace)===ot,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===2,flipSided:p.side===Xt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionDerivatives:on&&p.extensions.derivatives===!0,extensionFragDepth:on&&p.extensions.fragDepth===!0,extensionDrawBuffers:on&&p.extensions.drawBuffers===!0,extensionShaderTextureLOD:on&&p.extensions.shaderTextureLOD===!0,extensionClipCullDistance:on&&p.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()}},getProgramCacheKey:function(p){let x=[];if(p.shaderID?x.push(p.shaderID):(x.push(p.customVertexShaderID),x.push(p.customFragmentShaderID)),p.defines!==void 0)for(let g in p.defines)x.push(g),x.push(p.defines[g]);return p.isRawShaderMaterial===!1&&(function(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}(x,p),function(g,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),g.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),g.push(o.mask)}(x,p),x.push(n.outputColorSpace)),x.push(p.customProgramCacheKey),x.join()},getUniforms:function(p){let x=f[p.type],g;if(x){let v=ei[x];g=iy.clone(v.uniforms)}else g=p.uniforms;return g},acquireProgram:function(p,x){let g;for(let v=0,b=c.length;v<b;v++){let T=c[v];if(T.cacheKey===x){g=T,++g.usedTimes;break}}return g===void 0&&(g=new gv(n,x,p,s),c.push(g)),g},releaseProgram:function(p){if(--p.usedTimes==0){let x=c.indexOf(p);c[x]=c[c.length-1],c.pop(),p.destroy()}},releaseShaderCache:function(p){l.remove(p)},programs:c,dispose:function(){l.dispose()}}}function xv(){let n=new WeakMap;return{get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function _v(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ym(){let n=[],e=0,t=[],i=[],r=[];function s(a,o,l,c,h,u){let d=n[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},n[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=n.length;a<o;a++){let l=n[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||_v),i.length>1&&i.sort(o||jm),r.length>1&&r.sort(o||jm)}}}function Mv(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new Ym,n.set(e,[r])):t>=i.length?(r=new Ym,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function bv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Se};break;case"SpotLight":t={position:new A,direction:new A,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new A,halfWidth:new A,halfHeight:new A}}return n[e.id]=t,t}}}var Ev=0;function Sv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wv(n,e){let t=new bv,i=function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new A);let s=new A,a=new Ie,o=new Ie;return{setup:function(l,c){let h=0,u=0,d=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let m=0,f=0,y=0,p=0,x=0,g=0,v=0,b=0,T=0,S=0,R=0;l.sort(Sv);let k=c===!0?Math.PI:1;for(let C=0,W=l.length;C<W;C++){let _=l[C],P=_.color,N=_.intensity,H=_.distance,K=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)h+=P.r*N*k,u+=P.g*N*k,d+=P.b*N*k;else if(_.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(_.sh.coefficients[Y],N);R++}else if(_.isDirectionalLight){let Y=t.get(_);if(Y.color.copy(_.color).multiplyScalar(_.intensity*k),_.castShadow){let q=_.shadow,j=i.get(_);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.directionalShadow[m]=j,r.directionalShadowMap[m]=K,r.directionalShadowMatrix[m]=_.shadow.matrix,g++}r.directional[m]=Y,m++}else if(_.isSpotLight){let Y=t.get(_);Y.position.setFromMatrixPosition(_.matrixWorld),Y.color.copy(P).multiplyScalar(N*k),Y.distance=H,Y.coneCos=Math.cos(_.angle),Y.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),Y.decay=_.decay,r.spot[y]=Y;let q=_.shadow;if(_.map&&(r.spotLightMap[T]=_.map,T++,q.updateMatrices(_),_.castShadow&&S++),r.spotLightMatrix[y]=q.matrix,_.castShadow){let j=i.get(_);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.spotShadow[y]=j,r.spotShadowMap[y]=K,b++}y++}else if(_.isRectAreaLight){let Y=t.get(_);Y.color.copy(P).multiplyScalar(N),Y.halfWidth.set(.5*_.width,0,0),Y.halfHeight.set(0,.5*_.height,0),r.rectArea[p]=Y,p++}else if(_.isPointLight){let Y=t.get(_);if(Y.color.copy(_.color).multiplyScalar(_.intensity*k),Y.distance=_.distance,Y.decay=_.decay,_.castShadow){let q=_.shadow,j=i.get(_);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,r.pointShadow[f]=j,r.pointShadowMap[f]=K,r.pointShadowMatrix[f]=_.shadow.matrix,v++}r.point[f]=Y,f++}else if(_.isHemisphereLight){let Y=t.get(_);Y.skyColor.copy(_.color).multiplyScalar(N*k),Y.groundColor.copy(_.groundColor).multiplyScalar(N*k),r.hemi[x]=Y,x++}}p>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=u,r.ambient[2]=d;let U=r.hash;U.directionalLength===m&&U.pointLength===f&&U.spotLength===y&&U.rectAreaLength===p&&U.hemiLength===x&&U.numDirectionalShadows===g&&U.numPointShadows===v&&U.numSpotShadows===b&&U.numSpotMaps===T&&U.numLightProbes===R||(r.directional.length=m,r.spot.length=y,r.rectArea.length=p,r.point.length=f,r.hemi.length=x,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=g,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=b+T-S,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=S,r.numLightProbes=R,U.directionalLength=m,U.pointLength=f,U.spotLength=y,U.rectAreaLength=p,U.hemiLength=x,U.numDirectionalShadows=g,U.numPointShadows=v,U.numSpotShadows=b,U.numSpotMaps=T,U.numLightProbes=R,r.version=Ev++)},setupView:function(l,c){let h=0,u=0,d=0,m=0,f=0,y=c.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let g=l[p];if(g.isDirectionalLight){let v=r.directional[h];v.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(y),h++}else if(g.isSpotLight){let v=r.spot[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(y),v.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(y),d++}else if(g.isRectAreaLight){let v=r.rectArea[m];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(y),o.identity(),a.copy(g.matrixWorld),a.premultiply(y),o.extractRotation(a),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(g.isPointLight){let v=r.point[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(y),u++}else if(g.isHemisphereLight){let v=r.hemi[f];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(y),f++}}},state:r}}function Zm(n,e){let t=new wv(n,e),i=[],r=[];return{init:function(){i.length=0,r.length=0},state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:function(s){t.setup(i,s)},setupLightsView:function(s){t.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){r.push(s)}}}function Tv(n,e){let t=new WeakMap;return{get:function(i,r=0){let s=t.get(i),a;return s===void 0?(a=new Zm(n,e),t.set(i,[a])):r>=s.length?(a=new Zm(n,e),s.push(a)):a=s[r],a},dispose:function(){t=new WeakMap}}}var gu=class extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yu=class extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Av(n,e,t){let i=new Zs,r=new he,s=new he,a=new St,o=new gu({depthPacking:3201}),l=new yu,c={},h=t.maxTextureSize,u={[sr]:Xt,[Xt]:sr,2:2},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:`void main() {
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
}`}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let f=new nt;f.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new de(f,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let x=this.type;function g(S,R){let k=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ci(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(R,null,k,d,y,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(R,null,k,m,y,null)}function v(S,R,k,U){let C=null,W=k.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(W!==void 0)C=W;else if(C=k.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let _=C.uuid,P=R.uuid,N=c[_];N===void 0&&(N={},c[_]=N);let H=N[P];H===void 0&&(H=C.clone(),N[P]=H,R.addEventListener("dispose",T)),C=H}return C.visible=R.visible,C.wireframe=R.wireframe,C.side=U===Si?R.shadowSide!==null?R.shadowSide:R.side:R.shadowSide!==null?R.shadowSide:u[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(n.properties.get(C).light=k),C}function b(S,R,k,U,C){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Si)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld);let _=e.update(S),P=S.material;if(Array.isArray(P)){let N=_.groups;for(let H=0,K=N.length;H<K;H++){let Y=N[H],q=P[Y.materialIndex];if(q&&q.visible){let j=v(S,q,U,C);S.onBeforeShadow(n,S,R,k,_,j,Y),n.renderBufferDirect(k,null,_,j,S,Y),S.onAfterShadow(n,S,R,k,_,j,Y)}}}else if(P.visible){let N=v(S,P,U,C);S.onBeforeShadow(n,S,R,k,_,N,null),n.renderBufferDirect(k,null,_,N,S,null),S.onAfterShadow(n,S,R,k,_,N,null)}}let W=S.children;for(let _=0,P=W.length;_<P;_++)b(W[_],R,k,U,C)}function T(S){S.target.removeEventListener("dispose",T);for(let R in c){let k=c[R],U=S.target.uuid;U in k&&(k[U].dispose(),delete k[U])}}this.render=function(S,R,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let U=n.getRenderTarget(),C=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),_=n.state;_.setBlending(0),_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let P=x!==Si&&this.type===Si,N=x===Si&&this.type!==Si;for(let H=0,K=S.length;H<K;H++){let Y=S[H],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let j=q.getFrameExtents();if(r.multiply(j),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/j.x),r.x=s.x*j.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/j.y),r.y=s.y*j.y,q.mapSize.y=s.y)),q.map===null||P===!0||N===!0){let B=this.type!==Si?{minFilter:Nt,magFilter:Nt}:{};q.map!==null&&q.map.dispose(),q.map=new Ci(r.x,r.y,B),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let O=q.getViewportCount();for(let B=0;B<O;B++){let ne=q.getViewport(B);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),_.viewport(a),q.updateMatrices(Y,B),i=q.getFrustum(),b(R,k,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===Si&&g(q,k),q.needsUpdate=!1}x=this.type,p.needsUpdate=!1,n.setRenderTarget(U,C,W)}}function Rv(n,e,t){let i=t.isWebGL2,r=new function(){let w=!1,ae=new St,Z=null,J=new St(0,0,0,0);return{setMask:function(le){Z===le||w||(n.colorMask(le,le,le,le),Z=le)},setLocked:function(le){w=le},setClear:function(le,pe,ge,ye,Le){Le===!0&&(le*=ye,pe*=ye,ge*=ye),ae.set(le,pe,ge,ye),J.equals(ae)===!1&&(n.clearColor(le,pe,ge,ye),J.copy(ae))},reset:function(){w=!1,Z=null,J.set(-1,0,0,0)}}},s=new function(){let w=!1,ae=null,Z=null,J=null;return{setTest:function(le){le?X(n.DEPTH_TEST):I(n.DEPTH_TEST)},setMask:function(le){ae===le||w||(n.depthMask(le),ae=le)},setFunc:function(le){if(Z!==le){switch(le){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:default:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL)}Z=le}},setLocked:function(le){w=le},setClear:function(le){J!==le&&(n.clearDepth(le),J=le)},reset:function(){w=!1,ae=null,Z=null,J=null}}},a=new function(){let w=!1,ae=null,Z=null,J=null,le=null,pe=null,ge=null,ye=null,Le=null;return{setTest:function(ve){w||(ve?X(n.STENCIL_TEST):I(n.STENCIL_TEST))},setMask:function(ve){ae===ve||w||(n.stencilMask(ve),ae=ve)},setFunc:function(ve,_e,Ue){Z===ve&&J===_e&&le===Ue||(n.stencilFunc(ve,_e,Ue),Z=ve,J=_e,le=Ue)},setOp:function(ve,_e,Ue){pe===ve&&ge===_e&&ye===Ue||(n.stencilOp(ve,_e,Ue),pe=ve,ge=_e,ye=Ue)},setLocked:function(ve){w=ve},setClear:function(ve){Le!==ve&&(n.clearStencil(ve),Le=ve)},reset:function(){w=!1,ae=null,Z=null,J=null,le=null,pe=null,ge=null,ye=null,Le=null}}},o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],m=null,f=!1,y=null,p=null,x=null,g=null,v=null,b=null,T=null,S=new Se(0,0,0),R=0,k=!1,U=null,C=null,W=null,_=null,P=null,N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=K>=2);let q=null,j={},O=n.getParameter(n.SCISSOR_BOX),B=n.getParameter(n.VIEWPORT),ne=new St().fromArray(O),E=new St().fromArray(B);function M(w,ae,Z,J){let le=new Uint8Array(4),pe=n.createTexture();n.bindTexture(w,pe),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<Z;ge++)!i||w!==n.TEXTURE_3D&&w!==n.TEXTURE_2D_ARRAY?n.texImage2D(ae+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage3D(ae,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,le);return pe}let D={};function X(w){c[w]!==!0&&(n.enable(w),c[w]=!0)}function I(w){c[w]!==!1&&(n.disable(w),c[w]=!1)}D[n.TEXTURE_2D]=M(n.TEXTURE_2D,n.TEXTURE_2D,1),D[n.TEXTURE_CUBE_MAP]=M(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(D[n.TEXTURE_2D_ARRAY]=M(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),D[n.TEXTURE_3D]=M(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),X(n.DEPTH_TEST),s.setFunc(3),G(!1),Q(1),X(n.CULL_FACE),z(0);let $={[Dr]:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};if(i)$[103]=n.MIN,$[104]=n.MAX;else{let w=e.get("EXT_blend_minmax");w!==null&&($[103]=w.MIN_EXT,$[104]=w.MAX_EXT)}let F={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,[Jh]:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,[Kh]:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function z(w,ae,Z,J,le,pe,ge,ye,Le,ve){if(w!==0){if(f===!1&&(X(n.BLEND),f=!0),w===5)le=le||ae,pe=pe||Z,ge=ge||J,ae===p&&le===v||(n.blendEquationSeparate($[ae],$[le]),p=ae,v=le),Z===x&&J===g&&pe===b&&ge===T||(n.blendFuncSeparate(F[Z],F[J],F[pe],F[ge]),x=Z,g=J,b=pe,T=ge),ye.equals(S)!==!1&&Le===R||(n.blendColor(ye.r,ye.g,ye.b,Le),S.copy(ye),R=Le),y=w,k=!1;else if(w!==y||ve!==k){if(p===Dr&&v===Dr||(n.blendEquation(n.FUNC_ADD),p=Dr,v=Dr),ve)switch(w){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}else switch(w){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}x=null,g=null,b=null,T=null,S.set(0,0,0),R=0,y=w,k=ve}}else f===!0&&(I(n.BLEND),f=!1)}function G(w){U!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),U=w)}function Q(w){w!==0?(X(n.CULL_FACE),w!==C&&(w===1?n.cullFace(n.BACK):w===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):I(n.CULL_FACE),C=w}function re(w,ae,Z){w?(X(n.POLYGON_OFFSET_FILL),_===ae&&P===Z||(n.polygonOffset(ae,Z),_=ae,P=Z)):I(n.POLYGON_OFFSET_FILL)}return{buffers:{color:r,depth:s,stencil:a},enable:X,disable:I,bindFramebuffer:function(w,ae){return h[w]!==ae&&(n.bindFramebuffer(w,ae),h[w]=ae,i&&(w===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ae),w===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ae)),!0)},drawBuffers:function(w,ae){let Z=d,J=!1;if(w)if(Z=u.get(ae),Z===void 0&&(Z=[],u.set(ae,Z)),w.isWebGLMultipleRenderTargets){let le=w.texture;if(Z.length!==le.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,ge=le.length;pe<ge;pe++)Z[pe]=n.COLOR_ATTACHMENT0+pe;Z.length=le.length,J=!0}}else Z[0]!==n.COLOR_ATTACHMENT0&&(Z[0]=n.COLOR_ATTACHMENT0,J=!0);else Z[0]!==n.BACK&&(Z[0]=n.BACK,J=!0);J&&(t.isWebGL2?n.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))},useProgram:function(w){return m!==w&&(n.useProgram(w),m=w,!0)},setBlending:z,setMaterial:function(w,ae){w.side===2?I(n.CULL_FACE):X(n.CULL_FACE);let Z=w.side===Xt;ae&&(Z=!Z),G(Z),w.blending===1&&w.transparent===!1?z(0):z(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),r.setMask(w.colorWrite);let J=w.stencilWrite;a.setTest(J),J&&(a.setMask(w.stencilWriteMask),a.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),a.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),re(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?X(n.SAMPLE_ALPHA_TO_COVERAGE):I(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:G,setCullFace:Q,setLineWidth:function(w){w!==W&&(H&&n.lineWidth(w),W=w)},setPolygonOffset:re,setScissorTest:function(w){w?X(n.SCISSOR_TEST):I(n.SCISSOR_TEST)},activeTexture:function(w){w===void 0&&(w=n.TEXTURE0+N-1),q!==w&&(n.activeTexture(w),q=w)},bindTexture:function(w,ae,Z){Z===void 0&&(Z=q===null?n.TEXTURE0+N-1:q);let J=j[Z];J===void 0&&(J={type:void 0,texture:void 0},j[Z]=J),J.type===w&&J.texture===ae||(q!==Z&&(n.activeTexture(Z),q=Z),n.bindTexture(w,ae||D[w]),J.type=w,J.texture=ae)},unbindTexture:function(){let w=j[q];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexImage3D:function(){try{n.compressedTexImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage2D:function(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage3D:function(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},updateUBOMapping:function(w,ae){let Z=l.get(ae);Z===void 0&&(Z=new WeakMap,l.set(ae,Z));let J=Z.get(w);J===void 0&&(J=n.getUniformBlockIndex(ae,w.name),Z.set(w,J))},uniformBlockBinding:function(w,ae){let Z=l.get(ae).get(w);o.get(ae)!==Z&&(n.uniformBlockBinding(ae,Z,w.__bindingPointIndex),o.set(ae,Z))},texStorage2D:function(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texStorage3D:function(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage2D:function(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage3D:function(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},scissor:function(w){ne.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),ne.copy(w))},viewport:function(w){E.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),E.copy(w))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},q=null,j={},h={},u=new WeakMap,d=[],m=null,f=!1,y=null,p=null,x=null,g=null,v=null,b=null,T=null,S=new Se(0,0,0),R=0,k=!1,U=null,C=null,W=null,_=null,P=null,ne.set(0,0,n.canvas.width,n.canvas.height),E.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}}}function Cv(n,e,t,i,r,s,a){let o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,M){return m?new OffscreenCanvas(E,M):El("canvas")}function y(E,M,D,X){let I=1;if((E.width>X||E.height>X)&&(I=X/Math.max(E.width,E.height)),I<1||M===!0){if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap){let $=M?su:Math.floor,F=$(I*E.width),z=$(I*E.height);u===void 0&&(u=f(F,z));let G=D?f(F,z):u;return G.width=F,G.height=z,G.getContext("2d").drawImage(E,0,0,F,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+F+"x"+z+")."),G}return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E}return E}function p(E){return pm(E.width)&&pm(E.height)}function x(E,M){return E.generateMipmaps&&M&&E.minFilter!==Nt&&E.minFilter!==kn}function g(E){n.generateMipmap(E)}function v(E,M,D,X,I=!1){if(o===!1)return M;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=M;if(M===n.RED&&(D===n.FLOAT&&($=n.R32F),D===n.HALF_FLOAT&&($=n.R16F),D===n.UNSIGNED_BYTE&&($=n.R8)),M===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&($=n.R8UI),D===n.UNSIGNED_SHORT&&($=n.R16UI),D===n.UNSIGNED_INT&&($=n.R32UI),D===n.BYTE&&($=n.R8I),D===n.SHORT&&($=n.R16I),D===n.INT&&($=n.R32I)),M===n.RG&&(D===n.FLOAT&&($=n.RG32F),D===n.HALF_FLOAT&&($=n.RG16F),D===n.UNSIGNED_BYTE&&($=n.RG8)),M===n.RGBA){let F=I?xl:it.getTransfer(X);D===n.FLOAT&&($=n.RGBA32F),D===n.HALF_FLOAT&&($=n.RGBA16F),D===n.UNSIGNED_BYTE&&($=F===ot?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return $!==n.R16F&&$!==n.R32F&&$!==n.RG16F&&$!==n.RG32F&&$!==n.RGBA16F&&$!==n.RGBA32F||e.get("EXT_color_buffer_float"),$}function b(E,M,D){return x(E,D)===!0||E.isFramebufferTexture&&E.minFilter!==Nt&&E.minFilter!==kn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function T(E){return E===Nt||E===Bp||E===dh?n.NEAREST:n.LINEAR}function S(E){let M=E.target;M.removeEventListener("dispose",S),function(D){let X=i.get(D);if(X.__webglInit===void 0)return;let I=D.source,$=d.get(I);if($){let F=$[X.__cacheKey];F.usedTimes--,F.usedTimes===0&&k(D),Object.keys($).length===0&&d.delete(I)}i.remove(D)}(M),M.isVideoTexture&&h.delete(M)}function R(E){let M=E.target;M.removeEventListener("dispose",R),function(D){let X=D.texture,I=i.get(D),$=i.get(X);if($.__webglTexture!==void 0&&(n.deleteTexture($.__webglTexture),a.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(I.__webglFramebuffer[F]))for(let z=0;z<I.__webglFramebuffer[F].length;z++)n.deleteFramebuffer(I.__webglFramebuffer[F][z]);else n.deleteFramebuffer(I.__webglFramebuffer[F]);I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[F])}else{if(Array.isArray(I.__webglFramebuffer))for(let F=0;F<I.__webglFramebuffer.length;F++)n.deleteFramebuffer(I.__webglFramebuffer[F]);else n.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let F=0;F<I.__webglColorRenderbuffer.length;F++)I.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[F]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let F=0,z=X.length;F<z;F++){let G=i.get(X[F]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(X[F])}i.remove(X),i.remove(D)}(M)}function k(E){let M=i.get(E);n.deleteTexture(M.__webglTexture);let D=E.source;delete d.get(D)[M.__cacheKey],a.memory.textures--}let U=0;function C(E,M){let D=i.get(E);if(E.isVideoTexture&&function(X){let I=a.render.frame;h.get(X)!==I&&(h.set(X,I),X.update())}(E),E.isRenderTargetTexture===!1&&E.version>0&&D.__version!==E.version){let X=E.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(X.complete!==!1)return void K(D,E,M);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+M)}let W={[ni]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[tu]:n.MIRRORED_REPEAT},_={[Nt]:n.NEAREST,[Bp]:n.NEAREST_MIPMAP_NEAREST,[dh]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[kg]:n.LINEAR_MIPMAP_NEAREST,[gl]:n.LINEAR_MIPMAP_LINEAR},P={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function N(E,M,D){if(D?(n.texParameteri(E,n.TEXTURE_WRAP_S,W[M.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,W[M.wrapT]),E!==n.TEXTURE_3D&&E!==n.TEXTURE_2D_ARRAY||n.texParameteri(E,n.TEXTURE_WRAP_R,W[M.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,_[M.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,_[M.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),E!==n.TEXTURE_3D&&E!==n.TEXTURE_2D_ARRAY||n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),M.wrapS===wi&&M.wrapT===wi||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,T(M.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Nt&&M.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,P[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let X=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Nt||M.minFilter!==dh&&M.minFilter!==gl||M.type===tr&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Oa&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(E,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function H(E,M){let D=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",S));let X=M.source,I=d.get(X);I===void 0&&(I={},d.set(X,I));let $=function(F){let z=[];return z.push(F.wrapS),z.push(F.wrapT),z.push(F.wrapR||0),z.push(F.magFilter),z.push(F.minFilter),z.push(F.anisotropy),z.push(F.internalFormat),z.push(F.format),z.push(F.type),z.push(F.generateMipmaps),z.push(F.premultiplyAlpha),z.push(F.flipY),z.push(F.unpackAlignment),z.push(F.colorSpace),z.join()}(M);if($!==E.__cacheKey){I[$]===void 0&&(I[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),I[$].usedTimes++;let F=I[E.__cacheKey];F!==void 0&&(I[E.__cacheKey].usedTimes--,F.usedTimes===0&&k(M)),E.__cacheKey=$,E.__webglTexture=I[$].texture}return D}function K(E,M,D){let X=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=n.TEXTURE_3D);let I=H(E,M),$=M.source;t.bindTexture(X,E.__webglTexture,n.TEXTURE0+D);let F=i.get($);if($.version!==F.__version||I===!0){t.activeTexture(n.TEXTURE0+D);let z=it.getPrimaries(it.workingColorSpace),G=M.colorSpace===ti?null:it.getPrimaries(M.colorSpace),Q=M.colorSpace===ti||z===G?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let re=function(_e){return!o&&(_e.wrapS!==wi||_e.wrapT!==wi||_e.minFilter!==Nt&&_e.minFilter!==kn)}(M)&&p(M.image)===!1,w=y(M.image,re,!1,r.maxTextureSize);w=ne(M,w);let ae=p(w)||o,Z=s.convert(M.format,M.colorSpace),J,le=s.convert(M.type),pe=v(M.internalFormat,Z,le,M.colorSpace,M.isVideoTexture);N(X,M,ae);let ge=M.mipmaps,ye=o&&M.isVideoTexture!==!0&&pe!==Tf,Le=F.__version===void 0||I===!0,ve=b(M,w,ae);if(M.isDepthTexture)pe=n.DEPTH_COMPONENT,o?pe=M.type===tr?n.DEPTH_COMPONENT32F:M.type===er?n.DEPTH_COMPONENT24:M.type===Br?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT16:M.type===tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Or&&pe===n.DEPTH_COMPONENT&&M.type!==Ju&&M.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=er,le=s.convert(M.type)),M.format===$s&&pe===n.DEPTH_COMPONENT&&(pe=n.DEPTH_STENCIL,M.type!==Br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Br,le=s.convert(M.type))),Le&&(ye?t.texStorage2D(n.TEXTURE_2D,1,pe,w.width,w.height):t.texImage2D(n.TEXTURE_2D,0,pe,w.width,w.height,0,Z,le,null));else if(M.isDataTexture)if(ge.length>0&&ae){ye&&Le&&t.texStorage2D(n.TEXTURE_2D,ve,pe,ge[0].width,ge[0].height);for(let _e=0,Ue=ge.length;_e<Ue;_e++)J=ge[_e],ye?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,J.width,J.height,Z,le,J.data):t.texImage2D(n.TEXTURE_2D,_e,pe,J.width,J.height,0,Z,le,J.data);M.generateMipmaps=!1}else ye?(Le&&t.texStorage2D(n.TEXTURE_2D,ve,pe,w.width,w.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,Z,le,w.data)):t.texImage2D(n.TEXTURE_2D,0,pe,w.width,w.height,0,Z,le,w.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ye&&Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,pe,ge[0].width,ge[0].height,w.depth);for(let _e=0,Ue=ge.length;_e<Ue;_e++)J=ge[_e],M.format!==Sn?Z!==null?ye?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,J.width,J.height,w.depth,Z,J.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,pe,J.width,J.height,w.depth,0,J.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,J.width,J.height,w.depth,Z,le,J.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,pe,J.width,J.height,w.depth,0,Z,le,J.data)}else{ye&&Le&&t.texStorage2D(n.TEXTURE_2D,ve,pe,ge[0].width,ge[0].height);for(let _e=0,Ue=ge.length;_e<Ue;_e++)J=ge[_e],M.format!==Sn?Z!==null?ye?t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,J.width,J.height,Z,J.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,pe,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,J.width,J.height,Z,le,J.data):t.texImage2D(n.TEXTURE_2D,_e,pe,J.width,J.height,0,Z,le,J.data)}else if(M.isDataArrayTexture)ye?(Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,pe,w.width,w.height,w.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,w.width,w.height,w.depth,Z,le,w.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,w.width,w.height,w.depth,0,Z,le,w.data);else if(M.isData3DTexture)ye?(Le&&t.texStorage3D(n.TEXTURE_3D,ve,pe,w.width,w.height,w.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,w.width,w.height,w.depth,Z,le,w.data)):t.texImage3D(n.TEXTURE_3D,0,pe,w.width,w.height,w.depth,0,Z,le,w.data);else if(M.isFramebufferTexture){if(Le)if(ye)t.texStorage2D(n.TEXTURE_2D,ve,pe,w.width,w.height);else{let _e=w.width,Ue=w.height;for(let Pt=0;Pt<ve;Pt++)t.texImage2D(n.TEXTURE_2D,Pt,pe,_e,Ue,0,Z,le,null),_e>>=1,Ue>>=1}}else if(ge.length>0&&ae){ye&&Le&&t.texStorage2D(n.TEXTURE_2D,ve,pe,ge[0].width,ge[0].height);for(let _e=0,Ue=ge.length;_e<Ue;_e++)J=ge[_e],ye?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Z,le,J):t.texImage2D(n.TEXTURE_2D,_e,pe,Z,le,J);M.generateMipmaps=!1}else ye?(Le&&t.texStorage2D(n.TEXTURE_2D,ve,pe,w.width,w.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z,le,w)):t.texImage2D(n.TEXTURE_2D,0,pe,Z,le,w);x(M,ae)&&g(X),F.__version=$.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Y(E,M,D,X,I,$){let F=s.convert(D.format,D.colorSpace),z=s.convert(D.type),G=v(D.internalFormat,F,z,D.colorSpace);if(!i.get(M).__hasExternalTextures){let Q=Math.max(1,M.width>>$),re=Math.max(1,M.height>>$);I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?t.texImage3D(I,$,G,Q,re,M.depth,0,F,z,null):t.texImage2D(I,$,G,Q,re,0,F,z,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),B(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,I,i.get(D).__webglTexture,0,O(M)):(I===n.TEXTURE_2D||I>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,I,i.get(D).__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function q(E,M,D){if(n.bindRenderbuffer(n.RENDERBUFFER,E),M.depthBuffer&&!M.stencilBuffer){let X=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(D||B(M)){let I=M.depthTexture;I&&I.isDepthTexture&&(I.type===tr?X=n.DEPTH_COMPONENT32F:I.type===er&&(X=n.DEPTH_COMPONENT24));let $=O(M);B(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,X,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,$,X,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,X,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(M.depthBuffer&&M.stencilBuffer){let X=O(M);D&&B(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,X,n.DEPTH24_STENCIL8,M.width,M.height):B(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{let X=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let I=0;I<X.length;I++){let $=X[I],F=s.convert($.format,$.colorSpace),z=s.convert($.type),G=v($.internalFormat,F,z,$.colorSpace),Q=O(M);D&&B(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,G,M.width,M.height):B(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,G,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,G,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function j(E){let M=i.get(E),D=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");(function(X,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,X),!I.depthTexture||!I.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(I.depthTexture).__webglTexture&&I.depthTexture.image.width===I.width&&I.depthTexture.image.height===I.height||(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),C(I.depthTexture,0);let $=i.get(I.depthTexture).__webglTexture,F=O(I);if(I.depthTexture.format===Or)B(I)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else{if(I.depthTexture.format!==$s)throw new Error("Unknown depthTexture format");B(I)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,F):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0)}})(M.__webglFramebuffer,E)}else if(D){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]=n.createRenderbuffer(),q(M.__webglDepthbuffer[X],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),q(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(E){return Math.min(r.maxSamples,E.samples)}function B(E){let M=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ne(E,M){let D=E.colorSpace,X=E.format,I=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===iu||D!==Ri&&D!==ti&&(it.getTransfer(D)===ot?o===!1?e.has("EXT_sRGB")===!0&&X===Sn?(E.format=iu,E.minFilter=kn,E.generateMipmaps=!1):M=Sl.sRGBToLinear(M):X===Sn&&I===Nr||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),M}this.allocateTextureUnit=function(){let E=U;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),U+=1,E},this.resetTextureUnits=function(){U=0},this.setTexture2D=C,this.setTexture2DArray=function(E,M){let D=i.get(E);E.version>0&&D.__version!==E.version?K(D,E,M):t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+M)},this.setTexture3D=function(E,M){let D=i.get(E);E.version>0&&D.__version!==E.version?K(D,E,M):t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+M)},this.setTextureCube=function(E,M){let D=i.get(E);E.version>0&&D.__version!==E.version?function(X,I,$){if(I.image.length!==6)return;let F=H(X,I),z=I.source;t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+$);let G=i.get(z);if(z.version!==G.__version||F===!0){t.activeTexture(n.TEXTURE0+$);let Q=it.getPrimaries(it.workingColorSpace),re=I.colorSpace===ti?null:it.getPrimaries(I.colorSpace),w=I.colorSpace===ti||Q===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,I.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,I.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,w);let ae=I.isCompressedTexture||I.image[0].isCompressedTexture,Z=I.image[0]&&I.image[0].isDataTexture,J=[];for(let Ee=0;Ee<6;Ee++)J[Ee]=ae||Z?Z?I.image[Ee].image:I.image[Ee]:y(I.image[Ee],!1,!0,r.maxCubemapSize),J[Ee]=ne(I,J[Ee]);let le=J[0],pe=p(le)||o,ge=s.convert(I.format,I.colorSpace),ye=s.convert(I.type),Le=v(I.internalFormat,ge,ye,I.colorSpace),ve=o&&I.isVideoTexture!==!0,_e=G.__version===void 0||F===!0,Ue,Pt=b(I,le,pe);if(N(n.TEXTURE_CUBE_MAP,I,pe),ae){ve&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,Le,le.width,le.height);for(let Ee=0;Ee<6;Ee++){Ue=J[Ee].mipmaps;for(let Ze=0;Ze<Ue.length;Ze++){let We=Ue[Ze];I.format!==Sn?ge!==null?ve?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze,0,0,We.width,We.height,ge,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze,Le,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze,0,0,We.width,We.height,ge,ye,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze,Le,We.width,We.height,0,ge,ye,We.data)}}}else{Ue=I.mipmaps,ve&&_e&&(Ue.length>0&&Pt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Pt,Le,J[0].width,J[0].height));for(let Ee=0;Ee<6;Ee++)if(Z){ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,J[Ee].width,J[Ee].height,ge,ye,J[Ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Le,J[Ee].width,J[Ee].height,0,ge,ye,J[Ee].data);for(let Ze=0;Ze<Ue.length;Ze++){let We=Ue[Ze].image[Ee].image;ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze+1,0,0,We.width,We.height,ge,ye,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze+1,Le,We.width,We.height,0,ge,ye,We.data)}}else{ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ge,ye,J[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Le,ge,ye,J[Ee]);for(let Ze=0;Ze<Ue.length;Ze++){let We=Ue[Ze];ve?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze+1,0,0,ge,ye,We.image[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ze+1,Le,ge,ye,We.image[Ee])}}}x(I,pe)&&g(n.TEXTURE_CUBE_MAP),G.__version=z.version,I.onUpdate&&I.onUpdate(I)}X.__version=I.version}(D,E,M):t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+M)},this.rebindTextures=function(E,M,D){let X=i.get(E);M!==void 0&&Y(X.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&j(E)},this.setupRenderTarget=function(E){let M=E.texture,D=i.get(E),X=i.get(M);E.addEventListener("dispose",R),E.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=M.version,a.memory.textures++);let I=E.isWebGLCubeRenderTarget===!0,$=E.isWebGLMultipleRenderTargets===!0,F=p(E)||o;if(I){D.__webglFramebuffer=[];for(let z=0;z<6;z++)if(o&&M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer[z]=[];for(let G=0;G<M.mipmaps.length;G++)D.__webglFramebuffer[z][G]=n.createFramebuffer()}else D.__webglFramebuffer[z]=n.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){D.__webglFramebuffer=[];for(let z=0;z<M.mipmaps.length;z++)D.__webglFramebuffer[z]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if($)if(r.drawBuffers){let z=E.texture;for(let G=0,Q=z.length;G<Q;G++){let re=i.get(z[G]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&B(E)===!1){let z=$?M:[M];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let G=0;G<z.length;G++){let Q=z[G];D.__webglColorRenderbuffer[G]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[G]);let re=s.convert(Q.format,Q.colorSpace),w=s.convert(Q.type),ae=v(Q.internalFormat,re,w,Q.colorSpace,E.isXRRenderTarget===!0),Z=O(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,ae,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,D.__webglColorRenderbuffer[G])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),q(D.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(I){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),N(n.TEXTURE_CUBE_MAP,M,F);for(let z=0;z<6;z++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let G=0;G<M.mipmaps.length;G++)Y(D.__webglFramebuffer[z][G],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,G);else Y(D.__webglFramebuffer[z],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);x(M,F)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){let z=E.texture;for(let G=0,Q=z.length;G<Q;G++){let re=z[G],w=i.get(re);t.bindTexture(n.TEXTURE_2D,w.__webglTexture),N(n.TEXTURE_2D,re,F),Y(D.__webglFramebuffer,E,re,n.COLOR_ATTACHMENT0+G,n.TEXTURE_2D,0),x(re,F)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let z=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?z=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(z,X.__webglTexture),N(z,M,F),o&&M.mipmaps&&M.mipmaps.length>0)for(let G=0;G<M.mipmaps.length;G++)Y(D.__webglFramebuffer[G],E,M,n.COLOR_ATTACHMENT0,z,G);else Y(D.__webglFramebuffer,E,M,n.COLOR_ATTACHMENT0,z,0);x(M,F)&&g(z),t.unbindTexture()}E.depthBuffer&&j(E)},this.updateRenderTargetMipmap=function(E){let M=p(E)||o,D=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let X=0,I=D.length;X<I;X++){let $=D[X];if(x($,M)){let F=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,z=i.get($).__webglTexture;t.bindTexture(F,z),g(F),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(E){if(o&&E.samples>0&&B(E)===!1){let M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],D=E.width,X=E.height,I=n.COLOR_BUFFER_BIT,$=[],F=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=i.get(E),G=E.isWebGLMultipleRenderTargets===!0;if(G)for(let Q=0;Q<M.length;Q++)t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,z.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,z.__webglFramebuffer);for(let Q=0;Q<M.length;Q++){$.push(n.COLOR_ATTACHMENT0+Q),E.depthBuffer&&$.push(F);let re=z.__ignoreDepthValues!==void 0&&z.__ignoreDepthValues;if(re===!1&&(E.depthBuffer&&(I|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(I|=n.STENCIL_BUFFER_BIT)),G&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,z.__webglColorRenderbuffer[Q]),re===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[F]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[F])),G){let w=i.get(M[Q]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,w,0)}n.blitFramebuffer(0,0,D,X,0,0,D,X,I,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),G)for(let Q=0;Q<M.length;Q++){t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);let re=i.get(M[Q]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,z.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=B}function Lv(n,e,t){let i=t.isWebGL2;return{convert:function(r,s=""){let a,o=it.getTransfer(s);if(r===Nr)return n.UNSIGNED_BYTE;if(r===Mf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===bf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return n.BYTE;if(r===1011)return n.SHORT;if(r===Ju)return n.UNSIGNED_SHORT;if(r===_f)return n.INT;if(r===er)return n.UNSIGNED_INT;if(r===tr)return n.FLOAT;if(r===Oa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return n.ALPHA;if(r===Sn)return n.RGBA;if(r===1024)return n.LUMINANCE;if(r===1025)return n.LUMINANCE_ALPHA;if(r===Or)return n.DEPTH_COMPONENT;if(r===$s)return n.DEPTH_STENCIL;if(r===iu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return n.RED;if(r===Ef)return n.RED_INTEGER;if(r===1030)return n.RG;if(r===Sf)return n.RG_INTEGER;if(r===wf)return n.RGBA_INTEGER;if(r===ph||r===mh||r===fh||r===gh)if(o===ot){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(r===ph)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(r===ph)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(r===Op||r===zp||r===kp||r===Hp){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(r===Op)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(r===Tf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Gp||r===Vp){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(r===Gp)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Vp)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(r===Wp||r===qp||r===$p||r===Xp||r===jp||r===Yp||r===Zp||r===Jp||r===Kp||r===Qp||r===em||r===tm||r===nm||r===im){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(r===Wp)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qp)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$p)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xp)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jp)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yp)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zp)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jp)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kp)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qp)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===em)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===im)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(r===yh||r===rm||r===sm){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(r===yh)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(r===36283||r===am||r===om||r===lm){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(r===yh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===am)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===om)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return r===Br?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}}}var vu=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},xe=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pv={type:"move"},Fa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),x=this._getHandJoint(c,y);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=p.radius),x.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,f=.005;c.inputState.pinching&&d>m+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new xe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},xu=class extends ar{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,f=null,y=t.getContextAttributes(),p=null,x=null,g=[],v=[],b=new he,T=null,S=new Kt;S.layers.enable(1),S.viewport=new St;let R=new Kt;R.layers.enable(2),R.viewport=new St;let k=[S,R],U=new vu;U.layers.enable(1),U.layers.enable(2);let C=null,W=null;function _(O){let B=v.indexOf(O.inputSource);if(B===-1)return;let ne=g[B];ne!==void 0&&(ne.update(O.inputSource,O.frame,c||a),ne.dispatchEvent({type:O.type,data:O.inputSource}))}function P(){r.removeEventListener("select",_),r.removeEventListener("selectstart",_),r.removeEventListener("selectend",_),r.removeEventListener("squeeze",_),r.removeEventListener("squeezestart",_),r.removeEventListener("squeezeend",_),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",N);for(let O=0;O<g.length;O++){let B=v[O];B!==null&&(v[O]=null,g[O].disconnect(B))}C=null,W=null,e.setRenderTarget(p),m=null,d=null,u=null,r=null,x=null,j.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}function N(O){for(let B=0;B<O.removed.length;B++){let ne=O.removed[B],E=v.indexOf(ne);E>=0&&(v[E]=null,g[E].disconnect(ne))}for(let B=0;B<O.added.length;B++){let ne=O.added[B],E=v.indexOf(ne);if(E===-1){for(let D=0;D<g.length;D++){if(D>=v.length){v.push(ne),E=D;break}if(v[D]===null){v[D]=ne,E=D;break}}if(E===-1)break}let M=g[E];M&&M.connect(ne)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let B=g[O];return B===void 0&&(B=new Fa,g[O]=B),B.getTargetRaySpace()},this.getControllerGrip=function(O){let B=g[O];return B===void 0&&(B=new Fa,g[O]=B),B.getGripSpace()},this.getHand=function(O){let B=g[O];return B===void 0&&(B=new Fa,g[O]=B),B.getHandSpace()},this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",_),r.addEventListener("selectstart",_),r.addEventListener("selectend",_),r.addEventListener("squeeze",_),r.addEventListener("squeezestart",_),r.addEventListener("squeezeend",_),r.addEventListener("end",P),r.addEventListener("inputsourceschange",N),y.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let B={antialias:r.renderState.layers!==void 0||y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,B),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Ci(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:Nr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let B=null,ne=null,E=null;y.depth&&(E=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=y.stencil?$s:Or,ne=y.stencil?Br:er);let M={colorFormat:t.RGBA8,depthFormat:E,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(M),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ci(d.textureWidth,d.textureHeight,{format:Sn,type:Nr,depthTexture:new Il(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0}),e.properties.get(x).__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};let H=new A,K=new A;function Y(O,B){B===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(B.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;U.near=R.near=S.near=O.near,U.far=R.far=S.far=O.far,C===U.near&&W===U.far||(r.updateRenderState({depthNear:U.near,depthFar:U.far}),C=U.near,W=U.far);let B=O.parent,ne=U.cameras;Y(U,B);for(let E=0;E<ne.length;E++)Y(ne[E],B);ne.length===2?function(E,M,D){H.setFromMatrixPosition(M.matrixWorld),K.setFromMatrixPosition(D.matrixWorld);let X=H.distanceTo(K),I=M.projectionMatrix.elements,$=D.projectionMatrix.elements,F=I[14]/(I[10]-1),z=I[14]/(I[10]+1),G=(I[9]+1)/I[5],Q=(I[9]-1)/I[5],re=(I[8]-1)/I[0],w=($[8]+1)/$[0],ae=F*re,Z=F*w,J=X/(-re+w),le=J*-re;M.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(le),E.translateZ(J),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert();let pe=F+J,ge=z+J,ye=ae-le,Le=Z+(X-le),ve=G*z/ge*pe,_e=Q*z/ge*pe;E.projectionMatrix.makePerspective(ye,Le,ve,_e,pe,ge),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}(U,S,R):U.projectionMatrix.copy(S.projectionMatrix),function(E,M,D){D===null?E.matrix.copy(M.matrixWorld):(E.matrix.copy(D.matrixWorld),E.matrix.invert(),E.matrix.multiply(M.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(M.projectionMatrix),E.projectionMatrixInverse.copy(M.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=2*ru*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}(O,U,B)},this.getCamera=function(){return U},this.getFoveation=function(){if(d!==null||m!==null)return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)};let q=null,j=new Pf;j.setAnimationLoop(function(O,B){if(h=B.getViewerPose(c||a),f=B,h!==null){let ne=h.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let E=!1;ne.length!==U.cameras.length&&(U.cameras.length=0,E=!0);for(let M=0;M<ne.length;M++){let D=ne[M],X=null;if(m!==null)X=m.getViewport(D);else{let $=u.getViewSubImage(d,D);X=$.viewport,M===0&&(e.setRenderTargetTextures(x,$.colorTexture,d.ignoreDepthValues?void 0:$.depthStencilTexture),e.setRenderTarget(x))}let I=k[M];I===void 0&&(I=new Kt,I.layers.enable(M),I.viewport=new St,k[M]=I),I.matrix.fromArray(D.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(D.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(X.x,X.y,X.width,X.height),M===0&&(U.matrix.copy(I.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),E===!0&&U.cameras.push(I)}}for(let ne=0;ne<g.length;ne++){let E=v[ne],M=g[ne];E!==null&&M!==void 0&&M.update(E,B,c||a)}q&&q(O,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),f=null}),this.setAnimationLoop=function(O){q=O},this.dispose=function(){}}};function Iv(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Xt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Xt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap){r.lightMap.value=s.lightMap;let o=n._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,r.lightMapTransform)}s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Lf(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(r,s):s.isMeshToonMaterial?(i(r,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(r,s)):s.isMeshPhongMaterial?(i(r,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(r,s)):s.isMeshStandardMaterial?(i(r,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(r,s),s.isMeshPhysicalMaterial&&function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Xt&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far}(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(r,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(r,s)):s.isPointsMaterial?function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Dv(n,e,t,i){let r={},s={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,d,m,f){let y=u.value,p=d+"_"+m;if(f[p]===void 0)return f[p]=typeof y=="number"||typeof y=="boolean"?y:y.clone(),!0;{let x=f[p];if(typeof y=="number"||typeof y=="boolean"){if(x!==y)return f[p]=y,!0}else if(x.equals(y)===!1)return x.copy(y),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=a.indexOf(d.__bindingPointIndex);a.splice(m,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let m=d.program;i.uniformBlockBinding(u,m)},update:function(u,d){let m=r[u.id];m===void 0&&(function(p){let x=p.uniforms,g=0,v=16;for(let T=0,S=x.length;T<S;T++){let R=Array.isArray(x[T])?x[T]:[x[T]];for(let k=0,U=R.length;k<U;k++){let C=R[k],W=Array.isArray(C.value)?C.value:[C.value];for(let _=0,P=W.length;_<P;_++){let N=c(W[_]),H=g%v;H!==0&&v-H<N.boundary&&(g+=v-H),C.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=g,g+=N.storage}}}let b=g%v;b>0&&(g+=v-b),p.__size=g,p.__cache={}}(u),m=function(p){let x=function(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();p.__bindingPointIndex=x;let g=n.createBuffer(),v=p.__size,b=p.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,v,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,g),g}(u),r[u.id]=m,u.addEventListener("dispose",h));let f=d.program;i.updateUBOMapping(u,f);let y=e.render.frame;s[u.id]!==y&&(function(p){let x=r[p.id],g=p.uniforms,v=p.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let b=0,T=g.length;b<T;b++){let S=Array.isArray(g[b])?g[b]:[g[b]];for(let R=0,k=S.length;R<k;R++){let U=S[R];if(l(U,b,R,v)===!0){let C=U.__offset,W=Array.isArray(U.value)?U.value:[U.value],_=0;for(let P=0;P<W.length;P++){let N=W[P],H=c(N);typeof N=="number"||typeof N=="boolean"?(U.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,C+_,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=0,U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=0,U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=0):(N.toArray(U.__data,_),_+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,C,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}(u),s[u.id]=y)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);a=[],r={},s={}}}}var Ha=class{constructor(e={}){let{canvas:t=Gg(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=i!==null?i.getContextAttributes().alpha:a;let m=new Uint32Array(4),f=new Int32Array(4),y=null,p=null,x=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=ir,this.toneMappingExposure=1;let v=this,b=!1,T=0,S=0,R=null,k=-1,U=null,C=new St,W=new St,_=null,P=new Se(0),N=0,H=t.width,K=t.height,Y=1,q=null,j=null,O=new St(0,0,H,K),B=new St(0,0,H,K),ne=!1,E=new Zs,M=!1,D=!1,X=null,I=new Ie,$=new he,F=new A,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function G(){return R===null?Y:1}let Q,re,w,ae,Z,J,le,pe,ge,ye,Le,ve,_e,Ue,Pt,Ee,Ze,We,ro,Kr,so,yn,on,Qr,ie=i;function ao(L,te){for(let se=0;se<L.length;se++){let ce=L[se],oe=t.getContext(ce,te);if(oe!==null)return oe}return null}try{let L={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zh}`),t.addEventListener("webglcontextlost",Pd,!1),t.addEventListener("webglcontextrestored",Id,!1),t.addEventListener("webglcontextcreationerror",Dd,!1),ie===null){let te=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&te.shift(),ie=ao(te,L),ie===null)throw ao(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&ie instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ie.getShaderPrecisionFormat===void 0&&(ie.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}function ia(){Q=new my(ie),re=new hy(ie,Q,e),Q.init(re),yn=new Lv(ie,Q,re),w=new Rv(ie,Q,re),ae=new yy(ie),Z=new xv,J=new Cv(ie,Q,w,Z,re,yn,ae),le=new dy(v),pe=new py(v),ge=new ay(ie,re),on=new ly(ie,Q,ge,re),ye=new fy(ie,ge,ae,on),Le=new My(ie,ye,ge,ae),ro=new _y(ie,re,J),Ee=new uy(Z),ve=new vv(v,le,pe,Q,re,on,Ee),_e=new Iv(v,Z),Ue=new Mv,Pt=new Tv(Q,re),We=new oy(v,le,pe,w,Le,d,l),Ze=new Av(v,Le,re),Qr=new Dv(ie,ae,re,w),Kr=new cy(ie,Q,ae,re),so=new gy(ie,Q,ae,re),ae.programs=ve.programs,v.capabilities=re,v.extensions=Q,v.properties=Z,v.renderLists=Ue,v.shadowMap=Ze,v.state=w,v.info=ae}ia();let Gt=new xu(v,ie);function Pd(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Id(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let L=ae.autoReset,te=Ze.enabled,se=Ze.autoUpdate,ce=Ze.needsUpdate,oe=Ze.type;ia(),ae.autoReset=L,Ze.enabled=te,Ze.autoUpdate=se,Ze.needsUpdate=ce,Ze.type=oe}function Dd(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Fd(L){let te=L.target;te.removeEventListener("dispose",Fd),function(se){(function(ce){let oe=Z.get(ce).programs;oe!==void 0&&(oe.forEach(function(fe){ve.releaseProgram(fe)}),ce.isShaderMaterial&&ve.releaseShaderCache(ce))})(se),Z.remove(se)}(te)}function Ud(L,te,se){L.transparent===!0&&L.side===2&&L.forceSinglePass===!1?(L.side=Xt,L.needsUpdate=!0,lo(L,te,se),L.side=sr,L.needsUpdate=!0,lo(L,te,se),L.side=2):lo(L,te,se)}this.xr=Gt,this.getContext=function(){return ie},this.getContextAttributes=function(){return ie.getContextAttributes()},this.forceContextLoss=function(){let L=Q.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Q.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(L){L!==void 0&&(Y=L,this.setSize(H,K,!1))},this.getSize=function(L){return L.set(H,K)},this.setSize=function(L,te,se=!0){Gt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(H=L,K=te,t.width=Math.floor(L*Y),t.height=Math.floor(te*Y),se===!0&&(t.style.width=L+"px",t.style.height=te+"px"),this.setViewport(0,0,L,te))},this.getDrawingBufferSize=function(L){return L.set(H*Y,K*Y).floor()},this.setDrawingBufferSize=function(L,te,se){H=L,K=te,Y=se,t.width=Math.floor(L*se),t.height=Math.floor(te*se),this.setViewport(0,0,L,te)},this.getCurrentViewport=function(L){return L.copy(C)},this.getViewport=function(L){return L.copy(O)},this.setViewport=function(L,te,se,ce){L.isVector4?O.set(L.x,L.y,L.z,L.w):O.set(L,te,se,ce),w.viewport(C.copy(O).multiplyScalar(Y).floor())},this.getScissor=function(L){return L.copy(B)},this.setScissor=function(L,te,se,ce){L.isVector4?B.set(L.x,L.y,L.z,L.w):B.set(L,te,se,ce),w.scissor(W.copy(B).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(L){w.setScissorTest(ne=L)},this.setOpaqueSort=function(L){q=L},this.setTransparentSort=function(L){j=L},this.getClearColor=function(L){return L.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(L=!0,te=!0,se=!0){let ce=0;if(L){let oe=!1;if(R!==null){let fe=R.texture.format;oe=fe===wf||fe===Sf||fe===Ef}if(oe){let fe=R.texture.type,we=fe===Nr||fe===er||fe===Ju||fe===Br||fe===Mf||fe===bf,Ce=We.getClearColor(),Oe=We.getClearAlpha(),He=Ce.r,qe=Ce.g,Xe=Ce.b;we?(m[0]=He,m[1]=qe,m[2]=Xe,m[3]=Oe,ie.clearBufferuiv(ie.COLOR,0,m)):(f[0]=He,f[1]=qe,f[2]=Xe,f[3]=Oe,ie.clearBufferiv(ie.COLOR,0,f))}else ce|=ie.COLOR_BUFFER_BIT}te&&(ce|=ie.DEPTH_BUFFER_BIT),se&&(ce|=ie.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pd,!1),t.removeEventListener("webglcontextrestored",Id,!1),t.removeEventListener("webglcontextcreationerror",Dd,!1),Ue.dispose(),Pt.dispose(),Z.dispose(),le.dispose(),pe.dispose(),Le.dispose(),on.dispose(),Qr.dispose(),ve.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Nd),Gt.removeEventListener("sessionend",Bd),X&&(X.dispose(),X=null),dr.stop()},this.renderBufferDirect=function(L,te,se,ce,oe,fe){te===null&&(te=z);let we=oe.isMesh&&oe.matrixWorld.determinant()<0,Ce=function(Rt,vn,en,je,Je){vn.isScene!==!0&&(vn=z),J.resetTextureUnits();let ra=vn.fog,Mc=je.isMeshStandardMaterial?vn.environment:null,B0=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ri,co=(je.isMeshStandardMaterial?pe:le).get(je.envMap||Mc),O0=je.vertexColors===!0&&!!en.attributes.color&&en.attributes.color.itemSize===4,z0=!!en.attributes.tangent&&(!!je.normalMap||je.anisotropy>0),k0=!!en.morphAttributes.position,H0=!!en.morphAttributes.normal,G0=!!en.morphAttributes.color,Vd=ir;je.toneMapped&&(R!==null&&R.isXRRenderTarget!==!0||(Vd=v.toneMapping));let Wd=en.morphAttributes.position||en.morphAttributes.normal||en.morphAttributes.color,V0=Wd!==void 0?Wd.length:0,Ke=Z.get(je),W0=p.state.lights;if(M===!0&&(D===!0||Rt!==U)){let xn=Rt===U&&je.id===k;Ee.setState(je,Rt,xn)}let In=!1;je.version===Ke.__version?Ke.needsLights&&Ke.lightsStateVersion!==W0.state.version||Ke.outputColorSpace!==B0||Je.isBatchedMesh&&Ke.batching===!1?In=!0:Je.isBatchedMesh||Ke.batching!==!0?Je.isInstancedMesh&&Ke.instancing===!1?In=!0:Je.isInstancedMesh||Ke.instancing!==!0?Je.isSkinnedMesh&&Ke.skinning===!1?In=!0:Je.isSkinnedMesh||Ke.skinning!==!0?Je.isInstancedMesh&&Ke.instancingColor===!0&&Je.instanceColor===null||Je.isInstancedMesh&&Ke.instancingColor===!1&&Je.instanceColor!==null||Ke.envMap!==co||je.fog===!0&&Ke.fog!==ra?In=!0:Ke.numClippingPlanes===void 0||Ke.numClippingPlanes===Ee.numPlanes&&Ke.numIntersection===Ee.numIntersection?(Ke.vertexAlphas!==O0||Ke.vertexTangents!==z0||Ke.morphTargets!==k0||Ke.morphNormals!==H0||Ke.morphColors!==G0||Ke.toneMapping!==Vd||re.isWebGL2===!0&&Ke.morphTargetsCount!==V0)&&(In=!0):In=!0:In=!0:In=!0:In=!0:(In=!0,Ke.__version=je.version);let mr=Ke.currentProgram;In===!0&&(mr=lo(je,vn,Je));let qd=!1,sa=!1,bc=!1,Vt=mr.getUniforms(),fr=Ke.uniforms;if(w.useProgram(mr.program)&&(qd=!0,sa=!0,bc=!0),je.id!==k&&(k=je.id,sa=!0),qd||U!==Rt){Vt.setValue(ie,"projectionMatrix",Rt.projectionMatrix),Vt.setValue(ie,"viewMatrix",Rt.matrixWorldInverse);let xn=Vt.map.cameraPosition;xn!==void 0&&xn.setValue(ie,F.setFromMatrixPosition(Rt.matrixWorld)),re.logarithmicDepthBuffer&&Vt.setValue(ie,"logDepthBufFC",2/(Math.log(Rt.far+1)/Math.LN2)),(je.isMeshPhongMaterial||je.isMeshToonMaterial||je.isMeshLambertMaterial||je.isMeshBasicMaterial||je.isMeshStandardMaterial||je.isShaderMaterial)&&Vt.setValue(ie,"isOrthographic",Rt.isOrthographicCamera===!0),U!==Rt&&(U=Rt,sa=!0,bc=!0)}if(Je.isSkinnedMesh){Vt.setOptional(ie,Je,"bindMatrix"),Vt.setOptional(ie,Je,"bindMatrixInverse");let xn=Je.skeleton;xn&&(re.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),Vt.setValue(ie,"boneTexture",xn.boneTexture,J)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Je.isBatchedMesh&&(Vt.setOptional(ie,Je,"batchingTexture"),Vt.setValue(ie,"batchingTexture",Je._matricesTexture,J));let Ec=en.morphAttributes;(Ec.position!==void 0||Ec.normal!==void 0||Ec.color!==void 0&&re.isWebGL2===!0)&&ro.update(Je,en,mr),(sa||Ke.receiveShadow!==Je.receiveShadow)&&(Ke.receiveShadow=Je.receiveShadow,Vt.setValue(ie,"receiveShadow",Je.receiveShadow)),je.isMeshGouraudMaterial&&je.envMap!==null&&(fr.envMap.value=co,fr.flipEnvMap.value=co.isCubeTexture&&co.isRenderTargetTexture===!1?-1:1),sa&&(Vt.setValue(ie,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&(Dn=bc,(Zn=fr).ambientLightColor.needsUpdate=Dn,Zn.lightProbe.needsUpdate=Dn,Zn.directionalLights.needsUpdate=Dn,Zn.directionalLightShadows.needsUpdate=Dn,Zn.pointLights.needsUpdate=Dn,Zn.pointLightShadows.needsUpdate=Dn,Zn.spotLights.needsUpdate=Dn,Zn.spotLightShadows.needsUpdate=Dn,Zn.rectAreaLights.needsUpdate=Dn,Zn.hemisphereLights.needsUpdate=Dn),ra&&je.fog===!0&&_e.refreshFogUniforms(fr,ra),_e.refreshMaterialUniforms(fr,je,Y,K,X),Vs.upload(ie,Hd(Ke),fr,J));var Zn,Dn;if(je.isShaderMaterial&&je.uniformsNeedUpdate===!0&&(Vs.upload(ie,Hd(Ke),fr,J),je.uniformsNeedUpdate=!1),je.isSpriteMaterial&&Vt.setValue(ie,"center",Je.center),Vt.setValue(ie,"modelViewMatrix",Je.modelViewMatrix),Vt.setValue(ie,"normalMatrix",Je.normalMatrix),Vt.setValue(ie,"modelMatrix",Je.matrixWorld),je.isShaderMaterial||je.isRawShaderMaterial){let xn=je.uniformsGroups;for(let Sc=0,q0=xn.length;Sc<q0;Sc++)if(re.isWebGL2){let $d=xn[Sc];Qr.update($d,mr),Qr.bind($d,mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mr}(L,te,se,ce,oe);w.setMaterial(ce,we);let Oe=se.index,He=1;if(ce.wireframe===!0){if(Oe=ye.getWireframeAttribute(se),Oe===void 0)return;He=2}let qe=se.drawRange,Xe=se.attributes.position,dt=qe.start*He,Pn=(qe.start+qe.count)*He;fe!==null&&(dt=Math.max(dt,fe.start*He),Pn=Math.min(Pn,(fe.start+fe.count)*He)),Oe!==null?(dt=Math.max(dt,0),Pn=Math.min(Pn,Oe.count)):Xe!=null&&(dt=Math.max(dt,0),Pn=Math.min(Pn,Xe.count));let hi=Pn-dt;if(hi<0||hi===1/0)return;let pr;on.setup(oe,ce,Ce,se,Oe);let pt=Kr;if(Oe!==null&&(pr=ge.get(Oe),pt=so,pt.setIndex(pr)),oe.isMesh)ce.wireframe===!0?(w.setLineWidth(ce.wireframeLinewidth*G()),pt.setMode(ie.LINES)):pt.setMode(ie.TRIANGLES);else if(oe.isLine){let Rt=ce.linewidth;Rt===void 0&&(Rt=1),w.setLineWidth(Rt*G()),oe.isLineSegments?pt.setMode(ie.LINES):oe.isLineLoop?pt.setMode(ie.LINE_LOOP):pt.setMode(ie.LINE_STRIP)}else oe.isPoints?pt.setMode(ie.POINTS):oe.isSprite&&pt.setMode(ie.TRIANGLES);if(oe.isBatchedMesh)pt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else if(oe.isInstancedMesh)pt.renderInstances(dt,hi,oe.count);else if(se.isInstancedBufferGeometry){let Rt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,vn=Math.min(se.instanceCount,Rt);pt.renderInstances(dt,hi,vn)}else pt.render(dt,hi)},this.compile=function(L,te,se=null){se===null&&(se=L),p=Pt.get(se),p.init(),g.push(p),se.traverseVisible(function(oe){oe.isLight&&oe.layers.test(te.layers)&&(p.pushLight(oe),oe.castShadow&&p.pushShadow(oe))}),L!==se&&L.traverseVisible(function(oe){oe.isLight&&oe.layers.test(te.layers)&&(p.pushLight(oe),oe.castShadow&&p.pushShadow(oe))}),p.setupLights(v._useLegacyLights);let ce=new Set;return L.traverse(function(oe){let fe=oe.material;if(fe)if(Array.isArray(fe))for(let we=0;we<fe.length;we++){let Ce=fe[we];Ud(Ce,se,oe),ce.add(Ce)}else Ud(fe,se,oe),ce.add(fe)}),g.pop(),p=null,ce},this.compileAsync=function(L,te,se=null){let ce=this.compile(L,te,se);return new Promise(oe=>{function fe(){ce.forEach(function(we){Z.get(we).currentProgram.isReady()&&ce.delete(we)}),ce.size!==0?setTimeout(fe,10):oe(L)}Q.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let _c=null;function Nd(){dr.stop()}function Bd(){dr.start()}let dr=new Pf;function Od(L,te,se,ce){if(L.visible===!1)return;if(L.layers.test(te.layers)){if(L.isGroup)se=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(te);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||E.intersectsSprite(L)){ce&&F.setFromMatrixPosition(L.matrixWorld).applyMatrix4(I);let fe=Le.update(L),we=L.material;we.visible&&y.push(L,fe,we,se,F.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||E.intersectsObject(L))){let fe=Le.update(L),we=L.material;if(ce&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),F.copy(L.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),F.copy(fe.boundingSphere.center)),F.applyMatrix4(L.matrixWorld).applyMatrix4(I)),Array.isArray(we)){let Ce=fe.groups;for(let Oe=0,He=Ce.length;Oe<He;Oe++){let qe=Ce[Oe],Xe=we[qe.materialIndex];Xe&&Xe.visible&&y.push(L,fe,Xe,se,F.z,qe)}}else we.visible&&y.push(L,fe,we,se,F.z,null)}}let oe=L.children;for(let fe=0,we=oe.length;fe<we;fe++)Od(oe[fe],te,se,ce)}function zd(L,te,se,ce){let oe=L.opaque,fe=L.transmissive,we=L.transparent;p.setupLightsView(se),M===!0&&Ee.setGlobalState(v.clippingPlanes,se),fe.length>0&&function(Ce,Oe,He,qe){if((He.isScene===!0?He.overrideMaterial:null)!==null)return;let dt=re.isWebGL2;X===null&&(X=new Ci(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?Oa:Nr,minFilter:gl,samples:dt?4:0})),v.getDrawingBufferSize($),dt?X.setSize($.x,$.y):X.setSize(su($.x),su($.y));let Pn=v.getRenderTarget();v.setRenderTarget(X),v.getClearColor(P),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();let hi=v.toneMapping;v.toneMapping=ir,oo(Ce,He,qe),J.updateMultisampleRenderTarget(X),J.updateRenderTargetMipmap(X);let pr=!1;for(let pt=0,Rt=Oe.length;pt<Rt;pt++){let vn=Oe[pt],en=vn.object,je=vn.geometry,Je=vn.material,ra=vn.group;if(Je.side===2&&en.layers.test(qe.layers)){let Mc=Je.side;Je.side=Xt,Je.needsUpdate=!0,kd(en,He,qe,je,Je,ra),Je.side=Mc,Je.needsUpdate=!0,pr=!0}}pr===!0&&(J.updateMultisampleRenderTarget(X),J.updateRenderTargetMipmap(X)),v.setRenderTarget(Pn),v.setClearColor(P,N),v.toneMapping=hi}(oe,fe,te,se),ce&&w.viewport(C.copy(ce)),oe.length>0&&oo(oe,te,se),fe.length>0&&oo(fe,te,se),we.length>0&&oo(we,te,se),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function oo(L,te,se){let ce=te.isScene===!0?te.overrideMaterial:null;for(let oe=0,fe=L.length;oe<fe;oe++){let we=L[oe],Ce=we.object,Oe=we.geometry,He=ce===null?we.material:ce,qe=we.group;Ce.layers.test(se.layers)&&kd(Ce,te,se,Oe,He,qe)}}function kd(L,te,se,ce,oe,fe){L.onBeforeRender(v,te,se,ce,oe,fe),L.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),oe.onBeforeRender(v,te,se,ce,L,fe),oe.transparent===!0&&oe.side===2&&oe.forceSinglePass===!1?(oe.side=Xt,oe.needsUpdate=!0,v.renderBufferDirect(se,te,ce,oe,L,fe),oe.side=sr,oe.needsUpdate=!0,v.renderBufferDirect(se,te,ce,oe,L,fe),oe.side=2):v.renderBufferDirect(se,te,ce,oe,L,fe),L.onAfterRender(v,te,se,ce,oe,fe)}function lo(L,te,se){te.isScene!==!0&&(te=z);let ce=Z.get(L),oe=p.state.lights,fe=p.state.shadowsArray,we=oe.state.version,Ce=ve.getParameters(L,oe.state,fe,te,se),Oe=ve.getProgramCacheKey(Ce),He=ce.programs;ce.environment=L.isMeshStandardMaterial?te.environment:null,ce.fog=te.fog,ce.envMap=(L.isMeshStandardMaterial?pe:le).get(L.envMap||ce.environment),He===void 0&&(L.addEventListener("dispose",Fd),He=new Map,ce.programs=He);let qe=He.get(Oe);if(qe!==void 0){if(ce.currentProgram===qe&&ce.lightsStateVersion===we)return Gd(L,Ce),qe}else Ce.uniforms=ve.getUniforms(L),L.onBuild(se,Ce,v),L.onBeforeCompile(Ce,v),qe=ve.acquireProgram(Ce,Oe),He.set(Oe,qe),ce.uniforms=Ce.uniforms;let Xe=ce.uniforms;return(L.isShaderMaterial||L.isRawShaderMaterial)&&L.clipping!==!0||(Xe.clippingPlanes=Ee.uniform),Gd(L,Ce),ce.needsLights=function(dt){return dt.isMeshLambertMaterial||dt.isMeshToonMaterial||dt.isMeshPhongMaterial||dt.isMeshStandardMaterial||dt.isShadowMaterial||dt.isShaderMaterial&&dt.lights===!0}(L),ce.lightsStateVersion=we,ce.needsLights&&(Xe.ambientLightColor.value=oe.state.ambient,Xe.lightProbe.value=oe.state.probe,Xe.directionalLights.value=oe.state.directional,Xe.directionalLightShadows.value=oe.state.directionalShadow,Xe.spotLights.value=oe.state.spot,Xe.spotLightShadows.value=oe.state.spotShadow,Xe.rectAreaLights.value=oe.state.rectArea,Xe.ltc_1.value=oe.state.rectAreaLTC1,Xe.ltc_2.value=oe.state.rectAreaLTC2,Xe.pointLights.value=oe.state.point,Xe.pointLightShadows.value=oe.state.pointShadow,Xe.hemisphereLights.value=oe.state.hemi,Xe.directionalShadowMap.value=oe.state.directionalShadowMap,Xe.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Xe.spotShadowMap.value=oe.state.spotShadowMap,Xe.spotLightMatrix.value=oe.state.spotLightMatrix,Xe.spotLightMap.value=oe.state.spotLightMap,Xe.pointShadowMap.value=oe.state.pointShadowMap,Xe.pointShadowMatrix.value=oe.state.pointShadowMatrix),ce.currentProgram=qe,ce.uniformsList=null,qe}function Hd(L){if(L.uniformsList===null){let te=L.currentProgram.getUniforms();L.uniformsList=Vs.seqWithValue(te.seq,L.uniforms)}return L.uniformsList}function Gd(L,te){let se=Z.get(L);se.outputColorSpace=te.outputColorSpace,se.batching=te.batching,se.instancing=te.instancing,se.instancingColor=te.instancingColor,se.skinning=te.skinning,se.morphTargets=te.morphTargets,se.morphNormals=te.morphNormals,se.morphColors=te.morphColors,se.morphTargetsCount=te.morphTargetsCount,se.numClippingPlanes=te.numClippingPlanes,se.numIntersection=te.numClipIntersection,se.vertexAlphas=te.vertexAlphas,se.vertexTangents=te.vertexTangents,se.toneMapping=te.toneMapping}dr.setAnimationLoop(function(L){_c&&_c(L)}),typeof self!="undefined"&&dr.setContext(self),this.setAnimationLoop=function(L){_c=L,Gt.setAnimationLoop(L),L===null?dr.stop():dr.start()},Gt.addEventListener("sessionstart",Nd),Gt.addEventListener("sessionend",Bd),this.render=function(L,te){if(te!==void 0&&te.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(b===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(te),te=Gt.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,te,R),p=Pt.get(L,g.length),p.init(),g.push(p),I.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),E.setFromProjectionMatrix(I),D=this.localClippingEnabled,M=Ee.init(this.clippingPlanes,D),y=Ue.get(L,x.length),y.init(),x.push(y),Od(L,te,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(q,j),this.info.render.frame++,M===!0&&Ee.beginShadows();let se=p.state.shadowsArray;if(Ze.render(se,L,te),M===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(y,L),p.setupLights(v._useLegacyLights),te.isArrayCamera){let ce=te.cameras;for(let oe=0,fe=ce.length;oe<fe;oe++){let we=ce[oe];zd(y,L,we,we.viewport)}}else zd(y,L,te);R!==null&&(J.updateMultisampleRenderTarget(R),J.updateRenderTargetMipmap(R)),L.isScene===!0&&L.onAfterRender(v,L,te),on.resetDefaultState(),k=-1,U=null,g.pop(),p=g.length>0?g[g.length-1]:null,x.pop(),y=x.length>0?x[x.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(L,te,se){Z.get(L.texture).__webglTexture=te,Z.get(L.depthTexture).__webglTexture=se;let ce=Z.get(L);ce.__hasExternalTextures=!0,ce.__hasExternalTextures&&(ce.__autoAllocateDepthBuffer=se===void 0,ce.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,te){let se=Z.get(L);se.__webglFramebuffer=te,se.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(L,te=0,se=0){R=L,T=te,S=se;let ce=!0,oe=null,fe=!1,we=!1;if(L){let Ce=Z.get(L);Ce.__useDefaultFramebuffer!==void 0?(w.bindFramebuffer(ie.FRAMEBUFFER,null),ce=!1):Ce.__webglFramebuffer===void 0?J.setupRenderTarget(L):Ce.__hasExternalTextures&&J.rebindTextures(L,Z.get(L.texture).__webglTexture,Z.get(L.depthTexture).__webglTexture);let Oe=L.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(we=!0);let He=Z.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(oe=Array.isArray(He[te])?He[te][se]:He[te],fe=!0):oe=re.isWebGL2&&L.samples>0&&J.useMultisampledRTT(L)===!1?Z.get(L).__webglMultisampledFramebuffer:Array.isArray(He)?He[se]:He,C.copy(L.viewport),W.copy(L.scissor),_=L.scissorTest}else C.copy(O).multiplyScalar(Y).floor(),W.copy(B).multiplyScalar(Y).floor(),_=ne;if(w.bindFramebuffer(ie.FRAMEBUFFER,oe)&&re.drawBuffers&&ce&&w.drawBuffers(L,oe),w.viewport(C),w.scissor(W),w.setScissorTest(_),fe){let Ce=Z.get(L.texture);ie.framebufferTexture2D(ie.FRAMEBUFFER,ie.COLOR_ATTACHMENT0,ie.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce.__webglTexture,se)}else if(we){let Ce=Z.get(L.texture),Oe=te||0;ie.framebufferTextureLayer(ie.FRAMEBUFFER,ie.COLOR_ATTACHMENT0,Ce.__webglTexture,se||0,Oe)}k=-1},this.readRenderTargetPixels=function(L,te,se,ce,oe,fe,we){if(!L||!L.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Z.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){w.bindFramebuffer(ie.FRAMEBUFFER,Ce);try{let Oe=L.texture,He=Oe.format,qe=Oe.type;if(He!==Sn&&yn.convert(He)!==ie.getParameter(ie.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Xe=qe===Oa&&(Q.has("EXT_color_buffer_half_float")||re.isWebGL2&&Q.has("EXT_color_buffer_float"));if(!(qe===Nr||yn.convert(qe)===ie.getParameter(ie.IMPLEMENTATION_COLOR_READ_TYPE)||qe===tr&&(re.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float"))||Xe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");te>=0&&te<=L.width-ce&&se>=0&&se<=L.height-oe&&ie.readPixels(te,se,ce,oe,yn.convert(He),yn.convert(qe),fe)}finally{let Oe=R!==null?Z.get(R).__webglFramebuffer:null;w.bindFramebuffer(ie.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(L,te,se=0){let ce=Math.pow(2,-se),oe=Math.floor(te.image.width*ce),fe=Math.floor(te.image.height*ce);J.setTexture2D(te,0),ie.copyTexSubImage2D(ie.TEXTURE_2D,se,0,0,L.x,L.y,oe,fe),w.unbindTexture()},this.copyTextureToTexture=function(L,te,se,ce=0){let oe=te.image.width,fe=te.image.height,we=yn.convert(se.format),Ce=yn.convert(se.type);J.setTexture2D(se,0),ie.pixelStorei(ie.UNPACK_FLIP_Y_WEBGL,se.flipY),ie.pixelStorei(ie.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),ie.pixelStorei(ie.UNPACK_ALIGNMENT,se.unpackAlignment),te.isDataTexture?ie.texSubImage2D(ie.TEXTURE_2D,ce,L.x,L.y,oe,fe,we,Ce,te.image.data):te.isCompressedTexture?ie.compressedTexSubImage2D(ie.TEXTURE_2D,ce,L.x,L.y,te.mipmaps[0].width,te.mipmaps[0].height,we,te.mipmaps[0].data):ie.texSubImage2D(ie.TEXTURE_2D,ce,L.x,L.y,we,Ce,te.image),ce===0&&se.generateMipmaps&&ie.generateMipmap(ie.TEXTURE_2D),w.unbindTexture()},this.copyTextureToTexture3D=function(L,te,se,ce,oe=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let fe=L.max.x-L.min.x+1,we=L.max.y-L.min.y+1,Ce=L.max.z-L.min.z+1,Oe=yn.convert(ce.format),He=yn.convert(ce.type),qe;if(ce.isData3DTexture)J.setTexture3D(ce,0),qe=ie.TEXTURE_3D;else{if(!ce.isDataArrayTexture&&!ce.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");J.setTexture2DArray(ce,0),qe=ie.TEXTURE_2D_ARRAY}ie.pixelStorei(ie.UNPACK_FLIP_Y_WEBGL,ce.flipY),ie.pixelStorei(ie.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),ie.pixelStorei(ie.UNPACK_ALIGNMENT,ce.unpackAlignment);let Xe=ie.getParameter(ie.UNPACK_ROW_LENGTH),dt=ie.getParameter(ie.UNPACK_IMAGE_HEIGHT),Pn=ie.getParameter(ie.UNPACK_SKIP_PIXELS),hi=ie.getParameter(ie.UNPACK_SKIP_ROWS),pr=ie.getParameter(ie.UNPACK_SKIP_IMAGES),pt=se.isCompressedTexture?se.mipmaps[oe]:se.image;ie.pixelStorei(ie.UNPACK_ROW_LENGTH,pt.width),ie.pixelStorei(ie.UNPACK_IMAGE_HEIGHT,pt.height),ie.pixelStorei(ie.UNPACK_SKIP_PIXELS,L.min.x),ie.pixelStorei(ie.UNPACK_SKIP_ROWS,L.min.y),ie.pixelStorei(ie.UNPACK_SKIP_IMAGES,L.min.z),se.isDataTexture||se.isData3DTexture?ie.texSubImage3D(qe,oe,te.x,te.y,te.z,fe,we,Ce,Oe,He,pt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ie.compressedTexSubImage3D(qe,oe,te.x,te.y,te.z,fe,we,Ce,Oe,pt.data)):ie.texSubImage3D(qe,oe,te.x,te.y,te.z,fe,we,Ce,Oe,He,pt),ie.pixelStorei(ie.UNPACK_ROW_LENGTH,Xe),ie.pixelStorei(ie.UNPACK_IMAGE_HEIGHT,dt),ie.pixelStorei(ie.UNPACK_SKIP_PIXELS,Pn),ie.pixelStorei(ie.UNPACK_SKIP_ROWS,hi),ie.pixelStorei(ie.UNPACK_SKIP_IMAGES,pr),oe===0&&ce.generateMipmaps&&ie.generateMipmap(qe),w.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?J.setTextureCube(L,0):L.isData3DTexture?J.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?J.setTexture2DArray(L,0):J.setTexture2D(L,0),w.unbindTexture()},this.resetState=function(){T=0,S=0,R=null,w.reset(),on.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ku?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?zr:Af}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zr?Mt:Ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},_u=class extends Ha{};_u.prototype.isWebGL1Renderer=!0;var Dl=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fl=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Mu=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zt=new A,Ul=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mn=class extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ns,Ra=new A,Bs=new A,Os=new A,zs=new he,Ca=new he,Bf=new Ie,tl=new A,La=new A,nl=new A,Jm=new he,Gh=new he,Km=new he,Tn=class extends Ut{constructor(e=new mn){if(super(),this.isSprite=!0,this.type="Sprite",Ns===void 0){Ns=new nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Mu(t,5);Ns.setIndex([0,1,2,0,2,3]),Ns.setAttribute("position",new Ul(i,3,0,!1)),Ns.setAttribute("uv",new Ul(i,2,3,!1))}this.geometry=Ns,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),Bf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-Os.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let a=this.center;il(tl.set(-.5,-.5,0),Os,a,Bs,r,s),il(La.set(.5,-.5,0),Os,a,Bs,r,s),il(nl.set(.5,.5,0),Os,a,Bs,r,s),Jm.set(0,0),Gh.set(1,0),Km.set(1,1);let o=e.ray.intersectTriangle(tl,La,nl,!1,Ra);if(o===null&&(il(La.set(-.5,.5,0),Os,a,Bs,r,s),Gh.set(0,1),o=e.ray.intersectTriangle(tl,nl,La,!1,Ra),o===null))return;let l=e.ray.origin.distanceTo(Ra);l<e.near||l>e.far||t.push({distance:l,point:Ra.clone(),uv:nr.getInterpolation(Ra,tl,La,nl,Jm,Gh,Km,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function il(n,e,t,i,r,s){zs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ca.x=s*zs.x-r*zs.y,Ca.y=r*zs.x+s*zs.y):Ca.copy(zs),n.copy(e),n.x+=Ca.x,n.y+=Ca.y,n.applyMatrix4(Bf)}var M_=new A,b_=new A;var E_=new A,S_=new St,w_=new St,T_=new A,A_=new Ie,R_=new A,C_=new Wn,L_=new Ie,P_=new kr;var Nl=class extends pn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},I_=new Ie,D_=new Ie;var Bl=class extends wt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ks=new Ie,Qm=new Ie,rl=[],ef=new Vn,Fv=new Ie,Pa=new de,Ia=new Wn,Li=class extends de{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bl(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Fv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ks),ef.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(ef)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ks),Ia.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(i),e.ray.intersectsSphere(Ia)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ks),Qm.multiplyMatrices(i,ks),Pa.matrixWorld=Qm,Pa.raycast(e,rl);for(let a=0,o=rl.length;a<o;a++){let l=rl[a];l.instanceId=s,l.object=this,t.push(l)}rl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bl(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var bu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let s=i[this.index];r.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var F_=new Ie,U_=new Ie,N_=new Ie,B_=new Ie,O_=new Zs,z_=new Vn,k_=new Wn,H_=new A,G_=new bu,V_=new de;var Ga=class extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},tf=new A,nf=new A,rf=new Ie,Vh=new kr,sl=new Wn,Ol=class extends Ut{constructor(e=new nt,t=new Ga){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)tf.fromBufferAttribute(t,r-1),nf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=tf.distanceTo(nf);e.setAttribute("lineDistance",new Pe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),sl.radius+=s,e.ray.intersectsSphere(sl)===!1)return;rf.copy(r).invert(),Vh.copy(e.ray).applyMatrix4(rf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new A,h=new A,u=new A,d=new A,m=this.isLineSegments?2:1,f=i.index,y=i.attributes.position;if(f!==null)for(let p=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count)-1;p<x;p+=m){let g=f.getX(p),v=f.getX(p+1);if(c.fromBufferAttribute(y,g),h.fromBufferAttribute(y,v),Vh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}else for(let p=Math.max(0,a.start),x=Math.min(y.count,a.start+a.count)-1;p<x;p+=m){if(c.fromBufferAttribute(y,p),h.fromBufferAttribute(y,p+1),Vh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let g=e.ray.origin.distanceTo(d);g<e.near||g>e.far||t.push({distance:g,point:u.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},W_=new A,q_=new A;var or=class extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sf=new Ie,Eu=new kr,al=new Wn,ol=new A,Hr=class extends Ut{constructor(e=new nt,t=new or){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),al.copy(i.boundingSphere),al.applyMatrix4(r),al.radius+=s,e.ray.intersectsSphere(al)===!1)return;sf.copy(r).invert(),Eu.copy(e.ray).applyMatrix4(sf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let m=c.getX(u);ol.fromBufferAttribute(h,m),af(ol,m,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)ol.fromBufferAttribute(h,u),af(ol,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function af(n,e,t,i,r,s,a){let o=Eu.distanceSqToPoint(n);if(o<t){let l=new A;Eu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var zl=class extends pn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new he:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new A,r=[],s=[],a=[],o=new A,l=new Ie;for(let m=0;m<=e;m++){let f=m/e;r[m]=this.getTangentAt(f,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Bt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,f))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Bt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],m*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Va=class extends An{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new he,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Su=class extends Va{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ed(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,m*=h,r(a,o,d,m)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var ll=new A,Wh=new ed,qh=new ed,$h=new ed,wu=class extends An{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new A){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(ll.subVectors(r[0],r[1]).add(r[0]),o=ll);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(ll.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=ll),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),m),y=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(l),m);y<1e-4&&(y=1),f<1e-4&&(f=y),p<1e-4&&(p=y),Wh.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,y,p),qh.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,y,p),$h.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,y,p)}else this.curveType==="catmullrom"&&(Wh.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),qh.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),$h.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Wh.calc(h),qh.calc(h),$h.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new A().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function of(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function Ua(n,e,t,i){return function(r,s){let a=1-r;return a*a*s}(n,e)+function(r,s){return 2*(1-r)*r*s}(n,t)+function(r,s){return r*r*s}(n,i)}function Na(n,e,t,i,r){return function(s,a){let o=1-s;return o*o*o*a}(n,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(n,t)+function(s,a){return 3*(1-s)*s*s*a}(n,i)+function(s,a){return s*s*s*a}(n,r)}var kl=class extends An{constructor(e=new he,t=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new he){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Na(e,r.x,s.x,a.x,o.x),Na(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tu=class extends An{constructor(e=new A,t=new A,i=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new A){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Na(e,r.x,s.x,a.x,o.x),Na(e,r.y,s.y,a.y,o.y),Na(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hl=class extends An{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Au=class extends An{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gl=class extends An{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Ua(e,r.x,s.x,a.x),Ua(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vl=class extends An{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Ua(e,r.x,s.x,a.x),Ua(e,r.y,s.y,a.y),Ua(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wl=class extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(of(o,l.x,c.x,h.x,u.x),of(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new he().fromArray(r))}return this}},ql=Object.freeze({__proto__:null,ArcCurve:Su,CatmullRomCurve3:wu,CubicBezierCurve:kl,CubicBezierCurve3:Tu,EllipseCurve:Va,LineCurve:Hl,LineCurve3:Au,QuadraticBezierCurve:Gl,QuadraticBezierCurve3:Vl,SplineCurve:Wl}),Ru=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ql[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new ql[r.type]().fromJSON(r))}return this}},Wa=class extends Ru{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Hl(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Gl(this.currentPoint.clone(),new he(e,t),new he(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new kl(this.currentPoint.clone(),new he(e,t),new he(i,r),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Wl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new Va(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$l=class n extends nt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Bt(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new A,d=new he,m=new A,f=new A,y=new A,p=0,x=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:p=e[g+1].x-e[g].x,x=e[g+1].y-e[g].y,m.x=1*x,m.y=-p,m.z=0*x,y.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:p=e[g+1].x-e[g].x,x=e[g+1].y-e[g].y,m.x=1*x,m.y=-p,m.z=0*x,f.copy(m),m.x+=y.x,m.y+=y.y,m.z+=y.z,m.normalize(),l.push(m.x,m.y,m.z),y.copy(f)}for(let g=0;g<=t;g++){let v=i+g*h*r,b=Math.sin(v),T=Math.cos(v);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*b,u.y=e[S].y,u.z=e[S].x*T,a.push(u.x,u.y,u.z),d.x=g/t,d.y=S/(e.length-1),o.push(d.x,d.y);let R=l[3*S+0]*b,k=l[3*S+1],U=l[3*S+0]*T;c.push(R,k,U)}}for(let g=0;g<t;g++)for(let v=0;v<e.length-1;v++){let b=v+g*e.length,T=b,S=b+e.length,R=b+e.length+1,k=b+1;s.push(T,S,k),s.push(R,k,S)}this.setIndex(s),this.setAttribute("position",new Pe(a,3)),this.setAttribute("uv",new Pe(o,2)),this.setAttribute("normal",new Pe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Gr=class n extends $l{constructor(e=1,t=1,i=4,r=8){let s=new Wa;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},$n=class n extends nt{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new A,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let m=i+u/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(o,3)),this.setAttribute("uv",new Pe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Te=class n extends nt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],m=[],f=0,y=[],p=i/2,x=0;function g(v){let b=f,T=new he,S=new A,R=0,k=v===!0?e:t,U=v===!0?1:-1;for(let W=1;W<=r;W++)u.push(0,p*U,0),d.push(0,U,0),m.push(.5,.5),f++;let C=f;for(let W=0;W<=r;W++){let _=W/r*l+o,P=Math.cos(_),N=Math.sin(_);S.x=k*N,S.y=p*U,S.z=k*P,u.push(S.x,S.y,S.z),d.push(0,U,0),T.x=.5*P+.5,T.y=.5*N*U+.5,m.push(T.x,T.y),f++}for(let W=0;W<r;W++){let _=b+W,P=C+W;v===!0?h.push(P,P+1,_):h.push(P+1,P,_),R+=3}c.addGroup(x,R,v===!0?1:2),x+=R}(function(){let v=new A,b=new A,T=0,S=(t-e)/i;for(let R=0;R<=s;R++){let k=[],U=R/s,C=U*(t-e)+e;for(let W=0;W<=r;W++){let _=W/r,P=_*l+o,N=Math.sin(P),H=Math.cos(P);b.x=C*N,b.y=-U*i+p,b.z=C*H,u.push(b.x,b.y,b.z),v.set(N,S,H).normalize(),d.push(v.x,v.y,v.z),m.push(_,1-U),k.push(f++)}y.push(k)}for(let R=0;R<r;R++)for(let k=0;k<s;k++){let U=y[k][R],C=y[k+1][R],W=y[k+1][R+1],_=y[k][R+1];h.push(U,C,_),h.push(C,W,_),T+=6}c.addGroup(x,T,0),x+=T})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rn=class n extends Te{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vr=class n extends nt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(d,m,f,y){let p=y+1,x=[];for(let g=0;g<=p;g++){x[g]=[];let v=d.clone().lerp(f,g/p),b=m.clone().lerp(f,g/p),T=p-g;for(let S=0;S<=T;S++)x[g][S]=S===0&&g===p?v:v.clone().lerp(b,S/T)}for(let g=0;g<p;g++)for(let v=0;v<2*(p-g)-1;v++){let b=Math.floor(v/2);v%2==0?(l(x[g][b+1]),l(x[g+1][b]),l(x[g][b])):(l(x[g][b+1]),l(x[g+1][b+1]),l(x[g+1][b]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,m){let f=3*d;m.x=e[f+0],m.y=e[f+1],m.z=e[f+2]}function h(d,m,f,y){y<0&&d.x===1&&(a[m]=d.x-1),f.x===0&&f.z===0&&(a[m]=y/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let m=new A,f=new A,y=new A;for(let p=0;p<t.length;p+=3)c(t[p+0],m),c(t[p+1],f),c(t[p+2],y),o(m,f,y,d)})(r),function(d){let m=new A;for(let f=0;f<s.length;f+=3)m.x=s[f+0],m.y=s[f+1],m.z=s[f+2],m.normalize().multiplyScalar(d),s[f+0]=m.x,s[f+1]=m.y,s[f+2]=m.z}(i),function(){let d=new A;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let y=u(d)/2/Math.PI+.5,p=(m=d,Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))/Math.PI+.5);a.push(y,1-p)}var m;(function(){let f=new A,y=new A,p=new A,x=new A,g=new he,v=new he,b=new he;for(let T=0,S=0;T<s.length;T+=9,S+=6){f.set(s[T+0],s[T+1],s[T+2]),y.set(s[T+3],s[T+4],s[T+5]),p.set(s[T+6],s[T+7],s[T+8]),g.set(a[S+0],a[S+1]),v.set(a[S+2],a[S+3]),b.set(a[S+4],a[S+5]),x.copy(f).add(y).add(p).divideScalar(3);let R=u(x);h(g,S+0,f,R),h(v,S+2,y,R),h(b,S+4,p,R)}})(),function(){for(let f=0;f<a.length;f+=6){let y=a[f+0],p=a[f+2],x=a[f+4],g=Math.max(y,p,x),v=Math.min(y,p,x);g>.9&&v<.1&&(y<.2&&(a[f+0]+=1),p<.2&&(a[f+2]+=1),x<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(s.slice(),3)),this.setAttribute("uv",new Pe(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Cu=class n extends Vr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},cl=new A,hl=new A,Xh=new A,ul=new nr,Lu=class extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(fl*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:y,b:p,c:x}=ul;if(y.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),x.fromBufferAttribute(o,c[2]),ul.getNormal(Xh),u[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,u[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let v=(g+1)%3,b=u[g],T=u[v],S=ul[h[g]],R=ul[h[v]],k=`${b}_${T}`,U=`${T}_${b}`;U in d&&d[U]?(Xh.dot(d[U].normal)<=s&&(m.push(S.x,S.y,S.z),m.push(R.x,R.y,R.z)),d[U]=null):k in d||(d[k]={index0:c[g],index1:c[v],normal:Xh.clone()})}}for(let f in d)if(d[f]){let{index0:y,index1:p}=d[f];cl.fromBufferAttribute(o,y),hl.fromBufferAttribute(o,p),m.push(cl.x,cl.y,cl.z),m.push(hl.x,hl.y,hl.z)}this.setAttribute("position",new Pe(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ri=class extends Wa{constructor(e){super(e),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Wa().fromJSON(r))}return this}},Uv=function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=lf(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,m;if(i&&(s=function(f,y,p,x){let g=[],v,b,T,S,R;for(v=0,b=y.length;v<b;v++)T=y[v]*x,S=v<b-1?y[v+1]*x:f.length,R=lf(f,T,S,x,!1),R===R.next&&(R.steiner=!0),g.push(Vv(R));for(g.sort(kv),v=0;v<g.length;v++)p=Hv(g[v],p);return p}(n,e,s,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let f=t;f<r;f+=t)u=n[f],d=n[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return qa(s,a,t,o,l,m,0),a};function lf(n,e,t,i,r){let s,a;if(r===function(o,l,c,h){let u=0;for(let d=l,m=c-h;d<c;d+=h)u+=(o[m]-o[d])*(o[d+1]+o[m+1]),m=d;return u}(n,e,t,i)>0)for(s=e;s<t;s+=i)a=cf(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=cf(s,n[s],n[s+1],a);return a&&ic(a,a.next)&&(Xa(a),a=a.next),a}function Wr(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!ic(i,i.next)&&ft(i.prev,i,i.next)!==0)i=i.next;else{if(Xa(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function qa(n,e,t,i,r,s,a){if(!n)return;!a&&s&&function(h,u,d,m){let f=h;do f.z===0&&(f.z=Pu(f.x,f.y,u,d,m)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(y){let p,x,g,v,b,T,S,R,k=1;do{for(x=y,y=null,b=null,T=0;x;){for(T++,g=x,S=0,p=0;p<k&&(S++,g=g.nextZ,g);p++);for(R=k;S>0||R>0&&g;)S!==0&&(R===0||!g||x.z<=g.z)?(v=x,x=x.nextZ,S--):(v=g,g=g.nextZ,R--),b?b.nextZ=v:y=v,v.prevZ=b,b=v;x=g}b.nextZ=null,k*=2}while(T>1)}(f)}(n,i,r,s);let o,l,c=n;for(;n.prev!==n.next;)if(o=n.prev,l=n.next,s?Bv(n,i,r,s):Nv(n))e.push(o.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Xa(n),n=l.next,c=l.next;else if((n=l)===c){a?a===1?qa(n=Ov(Wr(n),e,t),e,t,i,r,s,2):a===2&&zv(n,e,t,i,r,s):qa(Wr(n),e,t,i,r,s,1);break}}function Nv(n){let e=n.prev,t=n,i=n.next;if(ft(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c,f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=m&&Hs(r,o,s,l,a,c,f.x,f.y)&&ft(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Bv(n,e,t,i){let r=n.prev,s=n,a=n.next;if(ft(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,x=Pu(m,f,e,t,i),g=Pu(y,p,e,t,i),v=n.prevZ,b=n.nextZ;for(;v&&v.z>=x&&b&&b.z<=g;){if(v.x>=m&&v.x<=y&&v.y>=f&&v.y<=p&&v!==r&&v!==a&&Hs(o,h,l,u,c,d,v.x,v.y)&&ft(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=m&&b.x<=y&&b.y>=f&&b.y<=p&&b!==r&&b!==a&&Hs(o,h,l,u,c,d,b.x,b.y)&&ft(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=x;){if(v.x>=m&&v.x<=y&&v.y>=f&&v.y<=p&&v!==r&&v!==a&&Hs(o,h,l,u,c,d,v.x,v.y)&&ft(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=g;){if(b.x>=m&&b.x<=y&&b.y>=f&&b.y<=p&&b!==r&&b!==a&&Hs(o,h,l,u,c,d,b.x,b.y)&&ft(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ov(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!ic(r,s)&&Of(r,i,i.next,s)&&$a(r,s)&&$a(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Xa(i),Xa(i.next),i=n=s),i=i.next}while(i!==n);return Wr(i)}function zv(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wv(a,o)){let l=zf(a,o);return a=Wr(a,a.next),l=Wr(l,l.next),qa(a,e,t,i,r,s,0),void qa(l,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function kv(n,e){return n.x-e.x}function Hv(n,e){let t=function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let p=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(p<=c&&p>l&&(l=p,a=o.x<o.next.x?o:o.next,p===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,m=a.y,f,y=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&Hs(h<m?c:l,h,d,m,h<m?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),$a(o,r)&&(f<y||f===y&&(o.x>a.x||o.x===a.x&&Gv(a,o)))&&(a=o,y=f)),o=o.next;while(o!==u);return a}(n,e);if(!t)return e;let i=zf(t,n);return Wr(i,i.next),Wr(t,t.next)}function Gv(n,e){return ft(n.prev,n,e.prev)<0&&ft(e.next,n,n.next)<0}function Pu(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Vv(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Hs(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Wv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&Of(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1}(n,e)&&($a(n,e)&&$a(e,n)&&function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s}(n,e)&&(ft(n.prev,n,e.prev)||ft(n,e.prev,e))||ic(n,e)&&ft(n.prev,n,n.next)>0&&ft(e.prev,e,e.next)>0)}function ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ic(n,e){return n.x===e.x&&n.y===e.y}function Of(n,e,t,i){let r=pl(ft(n,e,t)),s=pl(ft(n,e,i)),a=pl(ft(t,i,n)),o=pl(ft(t,i,e));return r!==s&&a!==o||!(r!==0||!dl(n,t,e))||!(s!==0||!dl(n,i,e))||!(a!==0||!dl(t,n,i))||!(o!==0||!dl(t,e,i))}function dl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function pl(n){return n>0?1:n<0?-1:0}function $a(n,e){return ft(n.prev,n,n.next)<0?ft(n,e,n.next)>=0&&ft(n,n.prev,e)>=0:ft(n,e,n.prev)<0||ft(n,n.next,e)<0}function zf(n,e){let t=new Iu(n.i,n.x,n.y),i=new Iu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function cf(n,e,t,i){let r=new Iu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Xa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Iu(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var rr=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];hf(e),uf(i,e);let a=e.length;t.forEach(hf);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,uf(i,t[l]);let o=Uv(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function hf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function uf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Pi=class n extends nt{constructor(e=new ri([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,m=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:m-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:qv,v,b,T,S,R,k=!1;x&&(v=x.getSpacedPoints(h),k=!0,d=!1,b=x.computeFrenetFrames(h,!1),T=new A,S=new A,R=new A),d||(p=0,m=0,f=0,y=0);let U=o.extractPoints(c),C=U.shape,W=U.holes;if(!rr.isClockWise(C)){C=C.reverse();for(let F=0,z=W.length;F<z;F++){let G=W[F];rr.isClockWise(G)&&(W[F]=G.reverse())}}let _=rr.triangulateShape(C,W),P=C;for(let F=0,z=W.length;F<z;F++){let G=W[F];C=C.concat(G)}function N(F,z,G){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(z,G)}let H=C.length,K=_.length;function Y(F,z,G){let Q,re,w,ae=F.x-z.x,Z=F.y-z.y,J=G.x-F.x,le=G.y-F.y,pe=ae*ae+Z*Z,ge=ae*le-Z*J;if(Math.abs(ge)>Number.EPSILON){let ye=Math.sqrt(pe),Le=Math.sqrt(J*J+le*le),ve=z.x-Z/ye,_e=z.y+ae/ye,Ue=((G.x-le/Le-ve)*le-(G.y+J/Le-_e)*J)/(ae*le-Z*J);Q=ve+ae*Ue-F.x,re=_e+Z*Ue-F.y;let Pt=Q*Q+re*re;if(Pt<=2)return new he(Q,re);w=Math.sqrt(Pt/2)}else{let ye=!1;ae>Number.EPSILON?J>Number.EPSILON&&(ye=!0):ae<-Number.EPSILON?J<-Number.EPSILON&&(ye=!0):Math.sign(Z)===Math.sign(le)&&(ye=!0),ye?(Q=-Z,re=ae,w=Math.sqrt(pe)):(Q=ae,re=Z,w=Math.sqrt(pe/2))}return new he(Q/w,re/w)}let q=[];for(let F=0,z=P.length,G=z-1,Q=F+1;F<z;F++,G++,Q++)G===z&&(G=0),Q===z&&(Q=0),q[F]=Y(P[F],P[G],P[Q]);let j=[],O,B=q.concat();for(let F=0,z=W.length;F<z;F++){let G=W[F];O=[];for(let Q=0,re=G.length,w=re-1,ae=Q+1;Q<re;Q++,w++,ae++)w===re&&(w=0),ae===re&&(ae=0),O[Q]=Y(G[Q],G[w],G[ae]);j.push(O),B=B.concat(O)}for(let F=0;F<p;F++){let z=F/p,G=m*Math.cos(z*Math.PI/2),Q=f*Math.sin(z*Math.PI/2)+y;for(let re=0,w=P.length;re<w;re++){let ae=N(P[re],q[re],Q);M(ae.x,ae.y,-G)}for(let re=0,w=W.length;re<w;re++){let ae=W[re];O=j[re];for(let Z=0,J=ae.length;Z<J;Z++){let le=N(ae[Z],O[Z],Q);M(le.x,le.y,-G)}}}let ne=f+y;for(let F=0;F<H;F++){let z=d?N(C[F],B[F],ne):C[F];k?(S.copy(b.normals[0]).multiplyScalar(z.x),T.copy(b.binormals[0]).multiplyScalar(z.y),R.copy(v[0]).add(S).add(T),M(R.x,R.y,R.z)):M(z.x,z.y,0)}for(let F=1;F<=h;F++)for(let z=0;z<H;z++){let G=d?N(C[z],B[z],ne):C[z];k?(S.copy(b.normals[F]).multiplyScalar(G.x),T.copy(b.binormals[F]).multiplyScalar(G.y),R.copy(v[F]).add(S).add(T),M(R.x,R.y,R.z)):M(G.x,G.y,u/h*F)}for(let F=p-1;F>=0;F--){let z=F/p,G=m*Math.cos(z*Math.PI/2),Q=f*Math.sin(z*Math.PI/2)+y;for(let re=0,w=P.length;re<w;re++){let ae=N(P[re],q[re],Q);M(ae.x,ae.y,u+G)}for(let re=0,w=W.length;re<w;re++){let ae=W[re];O=j[re];for(let Z=0,J=ae.length;Z<J;Z++){let le=N(ae[Z],O[Z],Q);k?M(le.x,le.y+v[h-1].y,v[h-1].x+G):M(le.x,le.y,u+G)}}}function E(F,z){let G=F.length;for(;--G>=0;){let Q=G,re=G-1;re<0&&(re=F.length-1);for(let w=0,ae=h+2*p;w<ae;w++){let Z=H*w,J=H*(w+1);X(z+Q+Z,z+re+Z,z+re+J,z+Q+J)}}}function M(F,z,G){l.push(F),l.push(z),l.push(G)}function D(F,z,G){I(F),I(z),I(G);let Q=r.length/3,re=g.generateTopUV(i,r,Q-3,Q-2,Q-1);$(re[0]),$(re[1]),$(re[2])}function X(F,z,G,Q){I(F),I(z),I(Q),I(z),I(G),I(Q);let re=r.length/3,w=g.generateSideWallUV(i,r,re-6,re-3,re-2,re-1);$(w[0]),$(w[1]),$(w[3]),$(w[1]),$(w[2]),$(w[3])}function I(F){r.push(l[3*F+0]),r.push(l[3*F+1]),r.push(l[3*F+2])}function $(F){s.push(F.x),s.push(F.y)}(function(){let F=r.length/3;if(d){let z=0,G=H*z;for(let Q=0;Q<K;Q++){let re=_[Q];D(re[2]+G,re[1]+G,re[0]+G)}z=h+2*p,G=H*z;for(let Q=0;Q<K;Q++){let re=_[Q];D(re[0]+G,re[1]+G,re[2]+G)}}else{for(let z=0;z<K;z++){let G=_[z];D(G[2],G[1],G[0])}for(let z=0;z<K;z++){let G=_[z];D(G[0]+H*h,G[1]+H*h,G[2]+H*h)}}i.addGroup(F,r.length/3-F,0)})(),function(){let F=r.length/3,z=0;E(P,z),z+=P.length;for(let G=0,Q=W.length;G<Q;G++){let re=W[G];E(re,z),z+=re.length}i.addGroup(F,r.length/3-F,1)}()}this.setAttribute("position",new Pe(r,3)),this.setAttribute("uv",new Pe(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ql[r.type]().fromJSON(r)),new n(i,e.options)}},qv={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new he(s,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],m=e[3*r+1],f=e[3*r+2],y=e[3*s],p=e[3*s+1],x=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-u),new he(d,1-f),new he(y,1-x)]:[new he(o,1-l),new he(h,1-u),new he(m,1-f),new he(p,1-x)]}},gt=class n extends Vr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Du=class n extends Vr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},qr=class n extends nt{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),m=new A,f=new he;for(let y=0;y<=r;y++){for(let p=0;p<=i;p++){let x=s+p/i*a;m.x=u*Math.cos(x),m.y=u*Math.sin(x),l.push(m.x,m.y,m.z),c.push(0,0,1),f.x=(m.x/t+1)/2,f.y=(m.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let y=0;y<r;y++){let p=y*(i+1);for(let x=0;x<i;x++){let g=x+p,v=g,b=g+i+1,T=g+i+2,S=g+1;o.push(v,b,S),o.push(b,T,S)}}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Fu=class n extends nt{constructor(e=new ri([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),m=d.shape,f=d.holes;rr.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,x=f.length;p<x;p++){let g=f[p];rr.isClockWise(g)===!0&&(f[p]=g.reverse())}let y=rr.triangulateShape(m,f);for(let p=0,x=f.length;p<x;p++){let g=f[p];m=m.concat(g)}for(let p=0,x=m.length;p<x;p++){let g=m[p];r.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let p=0,x=y.length;p<x;p++){let g=y[p],v=g[0]+u,b=g[1]+u,T=g[2]+u;i.push(v,b,T),l+=3}}this.setIndex(i),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(s,3)),this.setAttribute("uv",new Pe(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},Ve=class n extends nt{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,d=new A,m=[],f=[],y=[],p=[];for(let x=0;x<=i;x++){let g=[],v=x/i,b=0;x===0&&a===0?b=.5/t:x===i&&l===Math.PI&&(b=-.5/t);for(let T=0;T<=t;T++){let S=T/t;u.x=-e*Math.cos(r+S*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(r+S*s)*Math.sin(a+v*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),p.push(S+b,1-v),g.push(c++)}h.push(g)}for(let x=0;x<i;x++)for(let g=0;g<t;g++){let v=h[x][g+1],b=h[x][g],T=h[x+1][g],S=h[x+1][g+1];(x!==0||a>0)&&m.push(v,b,S),(x!==i-1||l<Math.PI)&&m.push(b,T,S)}this.setIndex(m),this.setAttribute("position",new Pe(f,3)),this.setAttribute("normal",new Pe(y,3)),this.setAttribute("uv",new Pe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Uu=class n extends Vr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ii=class n extends nt{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new A,u=new A,d=new A;for(let m=0;m<=i;m++)for(let f=0;f<=r;f++){let y=f/r*s,p=m/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(y),u.y=(e+t*Math.cos(p))*Math.sin(y),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let f=1;f<=r;f++){let y=(r+1)*m+f-1,p=(r+1)*(m-1)+f-1,x=(r+1)*(m-1)+f,g=(r+1)*m+f;a.push(y,p,g),a.push(p,x,g)}this.setIndex(a),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Nu=class n extends nt{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new A,d=new A,m=new A,f=new A,y=new A,p=new A,x=new A;for(let v=0;v<=i;++v){let b=v/i*s*Math.PI*2;g(b,s,a,e,m),g(b+.01,s,a,e,f),p.subVectors(f,m),x.addVectors(f,m),y.crossVectors(p,x),x.crossVectors(y,p),y.normalize(),x.normalize();for(let T=0;T<=r;++T){let S=T/r*Math.PI*2,R=-t*Math.cos(S),k=t*Math.sin(S);u.x=m.x+(R*x.x+k*y.x),u.y=m.y+(R*x.y+k*y.y),u.z=m.z+(R*x.z+k*y.z),l.push(u.x,u.y,u.z),d.subVectors(u,m).normalize(),c.push(d.x,d.y,d.z),h.push(v/i),h.push(T/r)}}for(let v=1;v<=i;v++)for(let b=1;b<=r;b++){let T=(r+1)*(v-1)+(b-1),S=(r+1)*v+(b-1),R=(r+1)*v+b,k=(r+1)*(v-1)+b;o.push(T,S,k),o.push(S,R,k)}function g(v,b,T,S,R){let k=Math.cos(v),U=Math.sin(v),C=T/b*v,W=Math.cos(C);R.x=S*(2+W)*.5*k,R.y=S*(2+W)*U*.5,R.z=S*Math.sin(C)*.5}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Bu=class n extends nt{constructor(e=new Vl(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new he,h=new A,u=[],d=[],m=[],f=[];function y(p){h=e.getPointAt(p/t,h);let x=a.normals[p],g=a.binormals[p];for(let v=0;v<=r;v++){let b=v/r*Math.PI*2,T=Math.sin(b),S=-Math.cos(b);l.x=S*x.x+T*g.x,l.y=S*x.y+T*g.y,l.z=S*x.z+T*g.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let p=0;p<t;p++)y(p);y(s===!1?t:0),function(){for(let p=0;p<=t;p++)for(let x=0;x<=r;x++)c.x=p/t,c.y=x/r,m.push(c.x,c.y)}(),function(){for(let p=1;p<=t;p++)for(let x=1;x<=r;x++){let g=(r+1)*(p-1)+(x-1),v=(r+1)*p+(x-1),b=(r+1)*p+x,T=(r+1)*(p-1)+x;f.push(g,v,T),f.push(v,b,T)}}()})(),this.setIndex(f),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new ql[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ou=class extends nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new A,s=new A;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let m=d,f=d+u.count;m<f;m+=3)for(let y=0;y<3;y++){let p=o.getX(m+y),x=o.getX(m+(y+1)%3);r.fromBufferAttribute(a,p),s.fromBufferAttribute(a,x),df(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),df(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Pe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function df(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var $_=Object.freeze({__proto__:null,BoxGeometry:me,CapsuleGeometry:Gr,CircleGeometry:$n,ConeGeometry:Rn,CylinderGeometry:Te,DodecahedronGeometry:Cu,EdgesGeometry:Lu,ExtrudeGeometry:Pi,IcosahedronGeometry:gt,LatheGeometry:$l,OctahedronGeometry:Du,PlaneGeometry:rt,PolyhedronGeometry:Vr,RingGeometry:qr,ShapeGeometry:Fu,SphereGeometry:Ve,TetrahedronGeometry:Uu,TorusGeometry:Ii,TorusKnotGeometry:Nu,TubeGeometry:Bu,WireframeGeometry:Ou});var jt=class extends ii{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function ml(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function $v(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Js=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(e>=s)break e;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zu=class extends Js{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cm,endingEnd:cm}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case hm:s=e,o=2*t-i;break;case um:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hm:a=e,l=2*i-t;break;case um:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,f=(i-t)/(r-t),y=f*f,p=y*f,x=-d*p+2*d*y-d*f,g=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*f+1,v=(-1-m)*p+(1.5+m)*y+.5*f,b=m*p-m*y;for(let T=0;T!==o;++T)s[T]=x*a[h+T]+g*a[c+T]+v*a[l+T]+b*a[u+T];return s}},ku=class extends Js{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Hu=class extends Js{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ml(t,this.TimeBufferType),this.values=ml(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ml(e.times,Array),values:ml(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Hu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ku(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yl:t=this.InterpolantFactoryMethodDiscrete;break;case vl:t=this.InterpolantFactoryMethodLinear;break;case vh:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yl;case this.InterpolantFactoryMethodLinear:return vl;case this.InterpolantFactoryMethodSmooth:return vh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&$v(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===vh,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let m=0;m!==i;++m){let f=t[h+m];if(f!==t[u+m]||f!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Gn.prototype.TimeBufferType=Float32Array,Gn.prototype.ValueBufferType=Float32Array,Gn.prototype.DefaultInterpolation=vl;var Fr=class extends Gn{};Fr.prototype.ValueTypeName="bool",Fr.prototype.ValueBufferType=Array,Fr.prototype.DefaultInterpolation=yl,Fr.prototype.InterpolantFactoryMethodLinear=void 0,Fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gu=class extends Gn{};Gu.prototype.ValueTypeName="color";var Vu=class extends Gn{};Vu.prototype.ValueTypeName="number";var Wu=class extends Js{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)wn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ba=class extends Gn{InterpolantFactoryMethodLinear(e){return new Wu(this.times,this.values,this.getValueSize(),e)}};Ba.prototype.ValueTypeName="quaternion",Ba.prototype.DefaultInterpolation=vl,Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var Ur=class extends Gn{};Ur.prototype.ValueTypeName="string",Ur.prototype.ValueBufferType=Array,Ur.prototype.DefaultInterpolation=yl,Ur.prototype.InterpolantFactoryMethodLinear=void 0,Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var qu=class extends Gn{};qu.prototype.ValueTypeName="vector";var $u=class{constructor(e,t,i){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],f=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return f}return null}}},Xv=new $u,Xu=class{constructor(e){this.manager=e!==void 0?e:Xv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Xu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xl=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},jl=class extends Xl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},jh=new Ie,pf=new A,mf=new A,ju=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(pf),mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mf),t.updateMatrixWorld(),jh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var X_=new Ie,j_=new A,Y_=new A;var Yu=class extends ju{constructor(){super(new Ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yl=class extends Xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Yu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Z_=new Ie,J_=new Ie,K_=new Ie;var Zl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ff(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ff();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ff(){return(typeof performance=="undefined"?Date:performance).now()}var Q_=new A,e1=new wn,t1=new A,n1=new A;var i1=new A,r1=new wn,s1=new A,a1=new A;var td="\\[\\]\\.:\\/",jv=new RegExp("["+td+"]","g"),Yh="[^"+td+"]",Yv="[^"+td.replace("\\.","")+"]",Zv=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Yh)+/(WCOD+)?/.source.replace("WCOD",Yv)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yh)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yh)+"$"),Jv=["material","materials","bones","map"],ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jv,"")}static parseTrackName(e){let t=Zv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Jv.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=class{constructor(n,e,t){let i=t||ut.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray],ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o1=new Float32Array(1);var Jl=class{constructor(e,t,i=0,r=1/0){this.ray=new kr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Zu(e,this,i,t),i.sort(gf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Zu(e[r],this,i,t);return i.sort(gf),i}};function gf(n,e){return n.distance-e.distance}function Zu(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let r=n.children;for(let s=0,a=r.length;s<a;s++)Zu(r[s],e,t,!0)}}var l1=new he;var c1=new A,h1=new A;var u1=new A;var d1=new A,p1=new Ie,m1=new Ie;var f1=new A,g1=new Se,y1=new Se;var v1=new A,x1=new A,_1=new A;var M1=new A,b1=new ka;var E1=new Vn;var S1=new A;typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zh}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zh);var si=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),id=(()=>{try{return matchMedia("(prefers-reduced-motion: reduce)").matches||localStorage.getItem("family-lite")==="1"}catch{return!1}})(),jn=(()=>{let n=new Uint8Array([150,150,150,255,215,215,215,255,255,255,255,255]),e=new Nl(n,3,1,Sn);return e.minFilter=e.magFilter=Nt,e.needsUpdate=!0,e})(),nd=new Map;function lt(n,e={}){let t=n+JSON.stringify(e);if(!e.unique&&nd.has(t))return nd.get(t);let i=new jt({color:n,gradientMap:jn,...e});return delete i.unique,e.unique||nd.set(t,i),i}function ee(n,e,t=0,i=0,r=0,s){let a=new de(n,typeof e=="string"||typeof e=="number"?lt(e,s):e);return a.position.set(t,i,r),a.castShadow=!0,a.receiveShadow=!0,a}function Ot(n,{w:e=512,h:t=256,bg:i="#FFF6E6",color:r="#4A3528",font:s="Jua",size:a=56,radius:o=40,border:l=null,sub:c=null,subSize:h=30}={}){let u=document.createElement("canvas");u.width=e,u.height=t;let d=u.getContext("2d");i&&(d.fillStyle=i,Xn(d,0,0,e,t,o),d.fill(),l&&(d.lineWidth=10,d.strokeStyle=l,Xn(d,5,5,e-10,t-10,o-4),d.stroke())),d.fillStyle=r,d.textAlign="center",d.textBaseline="middle";let m=Array.isArray(n)?n:[n],f=m.length*a*1.25+(c?h*1.5:0),y=t/2-f/2+a*.62;d.font=`${s==="Jua"?"":"700 "}${a}px "${s}", sans-serif`;for(let p of m)d.fillText(p,e/2,y),y+=a*1.25;return c&&(d.font=`${h}px "Gowun Dodum", sans-serif`,d.globalAlpha=.7,d.fillText(c,e/2,y+h*.2)),u}function Xn(n,e,t,i,r,s){n.beginPath(),n.moveTo(e+s,t),n.arcTo(e+i,t,e+i,t+r,s),n.arcTo(e+i,t+r,e,t+r,s),n.arcTo(e,t+r,e,t,s),n.arcTo(e,t,e+i,t,s),n.closePath()}function ct(n){let e=new zl(n);return e.colorSpace=Mt,e.anisotropy=4,e}function lr(n,{scale:e=4.2,bg:t="rgba(255,248,236,.95)",color:i="#4A3528"}={}){let r=document.createElement("canvas");r.width=512,r.height=128;let s=r.getContext("2d"),a=56;for(s.font=`${a}px "Jua", sans-serif`;s.measureText(n).width>430&&a>32;)a-=2,s.font=`${a}px "Jua", sans-serif`;let o=Math.min(490,s.measureText(n).width+70);s.fillStyle=t,s.shadowColor="rgba(110,70,40,.28)",s.shadowBlur=12,s.shadowOffsetY=4,Xn(s,(512-o)/2,18,o,86,43),s.fill(),s.shadowColor="transparent",s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.fillText(n,256,63);let l=new Tn(new mn({map:ct(r),depthWrite:!1,transparent:!0}));return l.scale.set(e,e/4,1),l.renderOrder=10,l}var be=(n,e)=>n+Math.random()*(e-n),Kv=(n,e,t)=>n+(e-n)*t,Di=(n,e,t,i)=>Kv(n,e,1-Math.exp(-t*i)),kf=(n,e,t)=>Math.max(e,Math.min(t,n));var Wf=[[0,34,0,10,3.2],[0,-2,0,-18,2.6],[5,1,20,-5.5,2.6],[-6,3,-12,2,2.4],[-6,0,-18,-10,2.4],[6,7,10,9,2.2],[-2,20,-10,19,2.2]],ai={x:0,z:4,r:7.5},zt={day:{top:"#78B4DC",mid:"#F3D9AE",horizon:"#FFCB8E",fog:"#F6D2A2",sun:"#FFD9A8",sunI:2.35,hemi:"#FFEBD2",ground:"#C7B27E",hemiI:1.85,lamps:!1,stars:!1},dusk:{top:"#5E6FB0",mid:"#F29A64",horizon:"#FFC27A",fog:"#F7B97E",sun:"#FFA066",sunI:2,hemi:"#FFCFA6",ground:"#A88E6E",hemiI:1.6,lamps:!0,stars:!1},night:{top:"#121B38",mid:"#2C3762",horizon:"#5B4766",fog:"#4E4462",sun:"#B8C4F0",sunI:1.05,hemi:"#8E9BCB",ground:"#3E4552",hemiI:1.2,lamps:!0,stars:!0}};function Qv(n,e,t,i,r,s){let a=r-t,o=s-i,l=Math.max(0,Math.min(1,((n-t)*a+(e-i)*o)/(a*a+o*o)));return Math.hypot(n-(t+a*l),e-(i+o*l))}function Hf(n,e,t=.6){return Math.hypot(n-ai.x,e-ai.z)<ai.r+t?!0:Wf.some(i=>Qv(n,e,i[0],i[1],i[2],i[3])<i[4]/2+t)}function ex(){let n=new Ve(400,32,16),e=new qn({side:Xt,depthWrite:!1,fog:!1,uniforms:{top:{value:new Se(zt.day.top)},mid:{value:new Se(zt.day.mid)},horizon:{value:new Se(zt.day.horizon)},sunDir:{value:new A(.5,.45,-.75).normalize()},sunK:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 top; uniform vec3 mid; uniform vec3 horizon; uniform vec3 sunDir; uniform float sunK; varying vec3 vDir;
      void main(){
        float h = clamp(vDir.y, -0.2, 1.0);
        vec3 c = mix(horizon, mid, smoothstep(-0.02, 0.18, h));
        c = mix(c, top, smoothstep(0.18, 0.75, h));
        float s = max(dot(normalize(vDir), sunDir), 0.0);
        c += (vec3(1.0, 0.86, 0.6) * pow(s, 40.0) * 0.55 + vec3(1.0, 0.95, 0.8) * pow(s, 400.0) * 1.2) * sunK;
        gl_FragColor = vec4(c, 1.0);
      }`}),t=new de(n,e);t.renderOrder=-1;let i=320,r=new Float32Array(i*3);for(let o=0;o<i;o++){let l=be(0,Math.PI*2),c=be(.06,1),h=380,u=h*Math.sqrt(1-c*c);r.set([Math.cos(l)*u,h*c,Math.sin(l)*u],o*3)}let s=new nt;s.setAttribute("position",new wt(r,3));let a=new Hr(s,new or({color:"#FFF8D6",size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.9,depthWrite:!1}));return a.visible=!1,a.renderOrder=-1,t.add(a),t.userData.setPalette=o=>{e.uniforms.top.value.set(o.top),e.uniforms.mid.value.set(o.mid),e.uniforms.horizon.value.set(o.horizon),e.uniforms.sunK.value=o.stars?.15:1,a.visible=!!o.stars},t}function tx(){let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d");e.fillStyle="#B7C27C",e.fillRect(0,0,256,256);let t=["#ABB86F","#C3CB88","#A6B266","#CBC88E"];for(let s=0;s<1400;s++)e.fillStyle=t[s%t.length],e.globalAlpha=.5,e.beginPath(),e.arc(Math.random()*256,Math.random()*256,Math.random()*3+1,0,7),e.fill();let i=["#E0863E","#D35F3A","#E8B547","#B9773E"];for(let s=0;s<90;s++)e.fillStyle=i[s%i.length],e.globalAlpha=.55,e.beginPath(),e.ellipse(Math.random()*256,Math.random()*256,2.6,1.5,Math.random()*3,0,7),e.fill();let r=ct(n);return r.wrapS=r.wrapT=ni,r.repeat.set(60,60),r}function nx(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.fillStyle="#E8D3AE",e.fillRect(0,0,128,128);for(let i=0;i<18;i++)e.fillStyle=["#DEC59C","#F0E0C0","#D9BF95"][i%3],e.beginPath(),e.ellipse(Math.random()*128,Math.random()*128,10+Math.random()*12,8+Math.random()*8,Math.random()*3,0,7),e.fill();let t=ct(n);return t.wrapS=t.wrapT=ni,t}var Gf=new Te(.22,.32,2,8),od=new gt(1.3,1),ix=new Rn(1.35,1.9,8),rx=new Ve(.15,8,6),Vf={maple:["#D9553B","#E8763E","#C9452F"],ginkgo:["#F2C14E","#F7D46A","#E3AE36"],persimmon:["#A9B55A","#C2BD5E","#97A64C"],green:["#8CB86A","#9EC27A","#7DAA5E"]};function rd(n,e,{kind:t="maple",s:i=1}={}){let r=new xe;if(t==="pine")r.add(ee(Gf,"#7E553A",0,.8,0)),[[1.9,1],[2.85,.8],[3.65,.58]].forEach(([s,a],o)=>{let l=ee(ix,["#4F7A4A","#5C8A52","#476F43"][o],0,s,0);l.scale.setScalar(a),r.add(l)});else{r.add(ee(Gf,"#8F6243",0,1,0));let s=Vf[t]||Vf.green;[[0,2.6,0,1.2],[.8,2.2,.2,.85],[-.75,2.3,-.2,.9],[.1,3.3,-.1,.8]].forEach(([o,l,c,h],u)=>{let d=ee(od,s[u%3],o,l,c);d.scale.setScalar(h),r.add(d)}),t==="persimmon"&&[[.9,2.5,.9],[-.5,2,1],[.3,3,1.15],[-1.2,2.6,.4],[1.3,2,-.2],[.1,1.9,1.25],[-.6,3.4,.7]].forEach(([o,l,c])=>r.add(ee(rx,"#F28C28",o,l,c)))}return r.position.set(n,0,e),r.scale.setScalar(i),r.rotation.y=Math.random()*6,r}function sx(n,e,t=1,i="#B98A3E"){let r=new xe;return[[0,.45,0,.6],[.5,.35,.1,.45],[-.45,.35,-.05,.45]].forEach(([s,a,o,l])=>{let c=ee(od,i,s,a,o);c.scale.setScalar(l),r.add(c)}),r.position.set(n,0,e),r.scale.setScalar(t),r}function ax(n,e){let t=new xe;t.add(ee(new Te(.09,.13,2.8,8),"#5E4433",0,1.4,0)),t.add(ee(new Te(.24,.24,.12,8),"#5E4433",0,.06,0));let i=new de(new Te(.2,.2,.42,6),new Ge({color:"#FFD27A"}));return i.position.y=3,t.add(i),t.add(ee(new Rn(.34,.28,6),"#5E4433",0,3.34,0)),t.position.set(n,0,e),t}var sd;function ox(n,e){if(!sd){let s=document.createElement("canvas");s.width=s.height=128;let a=s.getContext("2d"),o=a.createRadialGradient(64,64,4,64,64,64);o.addColorStop(0,"rgba(255,236,170,.95)"),o.addColorStop(.35,"rgba(255,220,140,.45)"),o.addColorStop(1,"rgba(255,200,120,0)"),a.fillStyle=o,a.fillRect(0,0,128,128),sd=ct(s)}let t=new xe,i=new Tn(new mn({map:sd,blending:Ql,depthWrite:!1,transparent:!0,opacity:.9}));i.position.set(0,3,0),i.scale.set(3.6,3.6,1);let r=new de(new $n(2.6,24),new Ge({color:"#FFE4A8",transparent:!0,opacity:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return r.rotation.x=-Math.PI/2,r.position.y=.04,t.add(i,r),t.position.set(n,0,e),t}function lx(n,e,t=0){let i=new xe,r="#B07A4F";for(let s=0;s<3;s++)i.add(ee(new me(1.8,.08,.16),r,0,.5,-.2+s*.2));for(let s=0;s<2;s++){let a=ee(new me(1.8,.14,.06),r,0,.75+s*.2,-.32);i.add(a)}for(let s of[-.75,.75])i.add(ee(new me(.08,.5,.5),"#6E4B33",s,.25,0)),i.add(ee(new me(.08,.6,.06),"#6E4B33",s,.8,-.32));return i.position.set(n,0,e),i.rotation.y=t,i}function qf(n,e,t=3.2){let i=new xe,r=["#F4B8C0","#FFFFFF","#F7D58B","#F9C59E","#E88A98"],s=[];for(let a=0;a<5;a++){let o=a/5*Math.PI*2,l=Math.cos(o)*.35,c=Math.sin(o)*.35,h=t+a%2*.35,u=ee(new Ve(.34,14,12),r[a],l,h,c);u.scale.y=1.18;let d=new Ol(new nt().setFromPoints([new A(0,.4,0),new A(l,h-.4,c)]),new Ga({color:"#B8A59B"}));i.add(u,d),s.push({b:u,base:h,off:Math.random()*6})}return i.add(ee(new Ve(.12,8,6),"#C9637A",0,.4,0)),i.add(ee(new Te(.2,.25,.4,10),"#FFF3EA",0,.2,0)),i.position.set(n,0,e),i.userData.update=a=>s.forEach(o=>{o.b.position.y=o.base+Math.sin(a*1.4+o.off)*.12,o.b.rotation.z=Math.sin(a+o.off)*.08}),i}function cx(n,e,t=0){let i=new xe;i.add(ee(new Te(.06,.07,2.6,6),"#8F6243",0,1.3,0));let r=ee(new Te(.05,.05,1.9,6),"#8F6243",0,1.75,0);r.rotation.z=Math.PI/2,i.add(r);let s=ee(new me(.75,.75,.3),"#C9452F",0,1.6,0);i.add(s);for(let o of[-1,1])i.add(ee(new me(.45,.22,.24),"#C9452F",o*.55,1.78,0));i.add(ee(new Ve(.32,12,10),"#F1D9A8",0,2.3,0));let a=ee(new Rn(.5,.35,12),"#E3B55A",0,2.6,0);i.add(a,ee(new Te(.55,.55,.04,14),"#E3B55A",0,2.48,0));for(let o of[-1,1])i.add(new de(new Ve(.04,6,4),new Ge({color:"#3A2A24"})).translateX(o*.11).translateY(2.33).translateZ(.29));return i.position.set(n,0,e),i.rotation.y=t,i}function hx(n,e,t=1){let i=new xe,r=["#D9553B","#E8763E","#F2C14E","#B9773E"];return[[0,.22,0,.75],[.45,.16,.2,.5],[-.4,.15,-.15,.55],[.1,.14,-.45,.45]].forEach(([s,a,o,l],c)=>{let h=ee(od,r[c%r.length],s,a,o);h.scale.set(l,l*.4,l),i.add(h)}),i.position.set(n,0,e),i.scale.setScalar(t),i}function ux(n,e){let t=si?500:900,i=new Rn(.07,.4,3),r=new Li(i,lt("#A9B46C"),t),s=new gt(.11,0),a=si?260:480,o=new Li(s,new jt({color:"#fff"}),a),l=new Ie,c=new wn,h=new A,u=new A,d=new js,m=()=>{for(let g=0;g<20;g++){let v=Math.random()*Math.PI*2,b=Math.sqrt(Math.random())*38,T=Math.cos(v)*b,S=Math.sin(v)*b;if(!Hf(T,S)&&!e(T,S))return[T,S]}return[60,60]};for(let g=0;g<t;g++){let[v,b]=m();d.set(be(-.2,.2),be(0,6),be(-.2,.2)),c.setFromEuler(d);let T=be(.7,1.4);l.compose(u.set(v,.18*T,b),c,h.set(T,T,T)),r.setMatrixAt(g,l)}let f=["#FFFFFF","#F4A6C6","#E07BB5","#F2C14E","#F6CBE0","#E9894A"].map(g=>new Se(g));for(let g=0;g<a;g++){let[v,b]=m();l.compose(u.set(v,.14,b),c.identity(),h.setScalar(be(.8,1.3))),o.setMatrixAt(g,l),o.setColorAt(g,f[g%f.length])}r.receiveShadow=!0,n.add(r,o);let y=22,p=new Li(new Te(.06,.08,.26,6),lt("#F6EBD8"),y),x=new Li(new Ve(.17,10,6,0,Math.PI*2,0,Math.PI/2),lt("#D9553B"),y);for(let g=0;g<y;g++){let v=60,b=60;for(let S=0;S<20;S++){let R=Math.random()*Math.PI*2,k=be(24,38),U=Math.cos(R)*k,C=Math.sin(R)*k;if(!Hf(U,C)&&!e(U,C)){v=U,b=C;break}}let T=be(.8,1.5);l.compose(u.set(v,.13*T,b),c.identity(),h.setScalar(T)),p.setMatrixAt(g,l),l.compose(u.set(v,.25*T,b),c.identity(),h.setScalar(T)),x.setMatrixAt(g,l)}n.add(p,x)}function dx(n){let e=[],t=new xe;n.add(t);let i=new Ve(1,12,10),r=new jt({color:"#FFFFFF",emissive:"#FFF4EA",emissiveIntensity:.35});for(let a=0;a<14;a++){let o=new xe,l=4+Math.floor(Math.random()*3);for(let u=0;u<l;u++){let d=new de(i,r);d.position.set(u*2.2-l,Math.random()*1.2,Math.random()*1.5),d.scale.setScalar(be(1.6,2.8)),o.add(d)}let c=Math.random()*Math.PI*2,h=be(70,150);o.position.set(Math.cos(c)*h,be(28,50),Math.sin(c)*h-30),o.scale.set(1.3,.8,1),t.add(o),e.push({g:o,speed:be(.4,1)})}return{group:t,update:a=>{t.visible&&e.forEach(o=>{o.g.position.x+=o.speed*a,o.g.position.x>170&&(o.g.position.x=-170)})}}}function px(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d");e.fillStyle="#FFFFFF",e.beginPath();for(let t=0;t<10;t++){let i=-Math.PI/2+t/10*Math.PI*2,r=t%2?11:27;e.lineTo(32+Math.cos(i)*r,30+Math.sin(i)*r)}return e.closePath(),e.fill(),e.fillRect(31,36,2,22),ct(n)}function mx(n){let e=id?0:si?160:300;if(!e)return{group:new xe,update(){},setCount(){}};let t=new Float32Array(e*3),i=[],r=new Float32Array(e*3),s=["#D9553B","#E8763E","#F2C14E","#B9773E","#C9452F"].map(c=>new Se(c));for(let c=0;c<e;c++){t[c*3]=be(-30,30),t[c*3+1]=be(0,9),t[c*3+2]=be(-30,30),i.push([be(.3,.9),be(.3,.8),be(0,6)]);let h=s[c%s.length];r.set([h.r,h.g,h.b],c*3)}let a=new nt;a.setAttribute("position",new wt(t,3)),a.setAttribute("color",new wt(r,3));let o=new Hr(a,new or({size:.36,map:px(),transparent:!0,depthWrite:!1,vertexColors:!0,alphaTest:.1}));o.frustumCulled=!1,n.add(o);let l=e;return{group:o,setCount(c){l=Math.max(0,Math.min(e,c)),a.setDrawRange(0,l)},update(c,h,u){if(o.visible){for(let d=0;d<l;d++){let m=i[d];t[d*3]+=(Math.sin(h*m[0]+m[2])*.6+.35)*c,t[d*3+1]-=m[1]*c,t[d*3+2]+=Math.cos(h*m[0]*.7+m[2])*.4*c,t[d*3+1]<0&&(t[d*3]=u.x+be(-28,28),t[d*3+1]=be(6,9),t[d*3+2]=u.z+be(-28,20))}a.attributes.position.needsUpdate=!0}}}}function fx(n){let e=new xe;n.add(e);let t=[],i=new $n(.16,10),r=new Ge({color:"#FFFFFF",transparent:!0,opacity:.55,side:yf,depthWrite:!1}),s=new Te(.025,.018,.42,6);for(let o=0;o<(id?0:8);o++){let l=new xe,c=new de(s,new Ge({color:o%3?"#D9452F":"#E8763E"}));c.rotation.x=Math.PI/2,l.add(c);let h=new xe,u=new xe;for(let[d,m]of[[h,-1],[u,1]])for(let f of[-.05,.06]){let y=new de(i,r);y.scale.set(1.4,.32,1),y.position.set(m*.2,0,f),y.rotation.x=-Math.PI/2,d.add(y)}l.add(h,u),e.add(l),t.push({g:l,lw:h,rw:u,cx:be(-25,25),cz:be(-25,25),r:be(2,5),sp:be(.3,.7),off:be(0,6)})}return{group:e,update:(o,l)=>{e.visible&&t.forEach(c=>{let h=l*c.sp+c.off;c.g.position.set(c.cx+Math.cos(h)*c.r,1.2+Math.sin(l*2+c.off)*.5,c.cz+Math.sin(h*1.3)*c.r),c.g.rotation.y=-h;let u=Math.sin(l*30+c.off)*.35;c.lw.rotation.z=u,c.rw.rotation.z=-u})}}}var ad=new Map;function $f(n="\u{1F497}"){if(ad.has(n))return ad.get(n);let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");t.font="52px serif",t.textAlign="center",t.textBaseline="middle",t.fillText(n,32,36);let i=ct(e);return ad.set(n,i),i}var Qs=[];function cr(n,e,t=10,i="\u{1F497}"){let r=$f(i);for(let s=0;s<t&&!(Qs.length>90);s++){let a=new Tn(new mn({map:r,transparent:!0,depthWrite:!1}));a.position.copy(e).add(new A(be(-.4,.4),be(0,.5),be(-.4,.4))),a.scale.setScalar(be(.35,.6)),n.add(a),Qs.push({sp:a,v:new A(be(-1,1),be(2,3.5),be(-1,1)),life:1.4+Math.random()*.4,scene:n})}}function rc(n,e,t,i="\u{1FA99}",r=.7,s){let a=new Tn(new mn({map:$f(i),transparent:!0,depthWrite:!1}));a.position.copy(e),a.scale.setScalar(.5),n.add(a);let o=9,l=new A((t.x-e.x)/r,(t.y-e.y+.5*o*r*r)/r,(t.z-e.z)/r);Qs.push({sp:a,v:l,life:r,scene:n,g:o,onLand:s})}function Xf(n){var e;for(let t=Qs.length-1;t>=0;t--){let i=Qs[t];i.life-=n,i.v.y-=(i.g||1.2)*n,i.sp.position.addScaledVector(i.v,n),i.g||(i.sp.material.opacity=Math.min(1,i.life)),i.life<=0&&(i.scene.remove(i.sp),i.sp.material.dispose(),Qs.splice(t,1),(e=i.onLand)==null||e.call(i,i.sp.position))}}function jf(n,e){let t=new xe;n.add(t);let i=ex();n.add(i);let r=new de(new $n(160,64),new jt({map:tx(),gradientMap:jn}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,t.add(r);let s=nx(),a=new jt({map:s,gradientMap:jn,polygonOffset:!0,polygonOffsetFactor:-1});for(let[x,g,v,b,T]of Wf){let S=Math.hypot(v-x,b-g),R=new rt(T,S),k=R.attributes.uv;for(let C=0;C<k.count;C++)k.setXY(C,k.getX(C)*T/3,k.getY(C)*S/3);let U=new de(R,a);U.rotation.x=-Math.PI/2,U.rotation.z=Math.atan2(v-x,b-g)+Math.PI,U.position.set((x+v)/2,.02,(g+b)/2),U.receiveShadow=!0,t.add(U);for(let[C,W]of[[x,g],[v,b]]){let _=new de(new $n(T/2,20),a);_.rotation.x=-Math.PI/2,_.position.set(C,.021,W),_.receiveShadow=!0,t.add(_)}}let o=new de(new $n(ai.r,48),a);o.rotation.x=-Math.PI/2,o.position.set(ai.x,.025,ai.z),o.receiveShadow=!0,t.add(o);let l=new de(new qr(ai.r-.35,ai.r,48),lt("#E6D2B5"));l.rotation.x=-Math.PI/2,l.position.set(ai.x,.03,ai.z),t.add(l);let c=[];for(let x=0;x<46;x++){let g=x/46*Math.PI*2+be(-.04,.04),v=be(41,46),b=Math.cos(g)*v,T=Math.sin(g)*v;Math.abs(b)<4&&T>30||t.add(rd(b,T,{kind:["pine","maple","pine","ginkgo","pine","persimmon"][x%6],s:be(1.1,1.6)}))}for(let x=0;x<30;x++){let g=Math.random()*Math.PI*2,v=be(50,75);t.add(rd(Math.cos(g)*v,Math.sin(g)*v,{kind:["pine","pine","maple","ginkgo"][x%4],s:be(1.4,2.2)}))}for(let x=0;x<8;x++){let g=ee(new Ve(1,20,12),["#B7AE66","#C79A55","#A9A55E","#C4884A"][x%4],be(-120,120),-be(8,14),-be(90,130));g.scale.set(be(25,45),be(18,26),be(20,30)),t.add(g)}[[-9,27,"persimmon"],[14.5,31,"maple"],[-24,22,"pine"],[24,20,"ginkgo"],[-30,6,"pine"],[30,4,"maple"],[-28,-20,"ginkgo"],[33,-20,"pine"],[-8,-28,"pine"],[8,-29,"maple"],[-15,12,"maple"],[16,14,"persimmon"],[-22,-2,"ginkgo"],[11,-22,"persimmon"],[-12,-24,"maple"]].forEach(([x,g,v])=>{t.add(rd(x,g,{kind:v,s:be(1,1.3)})),c.push({x,z:g,r:.7})}),[[-5,28],[12.5,27.5],[-14,8],[13,3],[-3,-21],[3,-21],[-26,12],[26,10],[-20,-18],[28,-8]].forEach(([x,g],v)=>{t.add(sx(x,g,be(.9,1.3),["#B98A3E","#C76B3C","#93A35A"][v%3])),c.push({x,z:g,r:.9})});let u=new xe;u.visible=!1,t.add(u),[[-2.3,30],[2.3,24],[-2.3,18],[2.3,12],[7.5,-1],[14,-3.5],[-8.6,5.5],[-12,-5],[-8,9],[8,12]].forEach(([x,g])=>{t.add(ax(x,g)),u.add(ox(x,g)),c.push({x,z:g,r:.3})}),[[-6.3,8.8,2.4],[6.3,8.8,-2.4],[-6.8,-.5,1.2],[6.8,-1,-1.2]].forEach(([x,g,v])=>{let b=lx(x,g,v);t.add(b),c.push({x,z:g,r:.9})});let d=[];t.add(cx(-6.2,30.5,.5)),c.push({x:-6.2,z:30.5,r:.5}),[[3.9,32.4,1],[15.5,-7,.9],[24.5,-7,.9],[-7.5,15.5,.8],[8.5,-5.2,.7]].forEach(([x,g,v])=>{t.add(hx(x,g,v)),c.push({x,z:g,r:.6*v})}),ux(t,e);let m=dx(t),f=mx(t),y=fx(t),p="day";return{group:t,sky:i,colliders:c,get time(){return p},setTime(x){p=zt[x]?x:"day";let g=zt[p];return i.userData.setPalette(g),u.visible=g.lamps,g},setLite(x){f.setCount(x>=2?0:x===1?80:300),f.group.visible=x<2,m.group.visible=y.group.visible=x<2},update(x,g,v){m.update(x),f.update(x,g,v),y.update(x,g),d.forEach(b=>b(g))}}}function ja({type:n="player",outfit:e="#8FB8DE",hair:t="#5A3A2A",skin:i="#FFE0C7",longHair:r=!1,glasses:s=!1,hat:a="",kid:o=!1,shadows:l=!0}={}){let c=new xe,h=new xe;c.add(h),o&&h.scale.setScalar(.8);let u=e,d="#6B5B53",m=new Gr(.1,.28,4,8),f=new Ve(.13,12,8),y=[];for(let B of[-1,1]){let ne=new xe;ne.position.set(.14*B,.56,0);let E=ee(m,d,0,-.26,0),M=ee(f,"#4A3B38",0,-.47,.04);M.scale.set(1,.6,1.35),ne.add(E,M),h.add(ne),y.push(ne)}let p=ee(new Gr(.3,.3,6,14),u,0,.86,0);p.scale.set(1,1,.85),h.add(p);let x=new Gr(.075,.3,4,8),g=new Ve(.085,10,8),v=[];for(let B of[-1,1]){let ne=new xe;ne.position.set(.36*B,1.08,0);let E=ee(x,u,.02*B,-.2,0),M=ee(g,i,.03*B,-.42,0);ne.add(E,M),ne.rotation.z=.12*B,h.add(ne),v.push(ne)}let b=new xe;b.position.y=1.5,h.add(b);let T=ee(new Ve(.42,24,18),i,0,0,0);b.add(T);let S=lt(t),R=new de(new Ve(.45,24,16,0,Math.PI*2,0,Math.PI*.52),S);R.rotation.x=-.35,R.position.set(0,.03,-.03),R.castShadow=!0,b.add(R);let k=new de(new Ve(.2,12,8),S);if(k.scale.set(1.5,.55,.8),k.position.set(.1,.26,.27),k.rotation.z=-.3,b.add(k),r){let B=new de(new Ve(.42,16,12),S);B.scale.set(1.05,1.25,.7),B.position.set(0,-.22,-.18),b.add(B)}let U=new Ve(.05,10,8),C=new Ge({color:"#2B2220"}),W=[];for(let B of[-1,1]){let ne=new de(U,C);ne.position.set(.14*B,.02,.38),ne.scale.set(1,1.3,.6),b.add(ne),W.push(ne);let E=new de(new Ve(.016,6,4),new Ge({color:"#fff"}));E.position.set(.14*B+.018,.05,.415),b.add(E);let M=new de(new $n(.07,14),new Ge({color:"#FFB3B3",transparent:!0,opacity:.7}));M.position.set(.24*B,-.09,.345),M.rotation.y=.55*B,b.add(M)}let _=new de(new Ii(.045,.012,6,12,Math.PI),C);if(_.position.set(0,-.1,.39),_.rotation.z=Math.PI,b.add(_),s){let B=lt("#4A3B38"),ne=new Ii(.085,.014,6,18);for(let M of[-1,1]){let D=new de(ne,B);D.position.set(.14*M,.03,.4),b.add(D)}let E=new de(new me(.1,.018,.018),B);E.position.set(0,.05,.42),b.add(E)}let P=new xe;b.add(P);function N(B){if(P.clear(),B==="cap"){let ne=new de(new Ve(.46,20,12,0,Math.PI*2,0,Math.PI*.42),lt(e==="#FFFFFF"?"#8FB8DE":e));ne.position.y=.06,ne.rotation.x=-.12;let E=ee(new Te(.26,.26,.03,16,1,!1,-Math.PI/2,Math.PI),e,0,.2,.3);E.rotation.x=.12,P.add(ne,E)}else if(B==="beanie"){let ne=new de(new Ve(.47,20,12,0,Math.PI*2,0,Math.PI*.45),lt("#E88A98"));ne.position.y=.06;let E=ee(new Ii(.43,.06,8,24),"#FFFDF8",0,.18,0);E.rotation.x=Math.PI/2;let M=ee(new Ve(.1,10,8),"#FFFDF8",0,.55,0);P.add(ne,E,M)}else if(B==="flower")["#F4B8C0","#FFFFFF","#F7D58B"].forEach((ne,E)=>P.add(ee(new gt(.075,0),ne,.3+E*.05,.3-E*.08,.12-E*.06))),P.add(ee(new Ve(.03,6,4),"#E2B865",.31,.3,.16));else if(B==="party"){let ne=ee(new Rn(.2,.46,14),"#F7D58B",.08,.6,0);ne.rotation.z=-.25;let E=ee(new Ve(.07,8,6),"#E88A98",.2,.84,0);P.add(ne,E)}}N(a),c.traverse(B=>{B.isMesh&&B.material!==C&&(B.castShadow=l)});let H=0,K=2+Math.random()*3,Y=0,q=0,j=v[1].rotation.clone(),O={root:c,body:h,head:b,arms:v,legs:y,type:n};return O.animate=(B,ne=0,E=0)=>{let M=Math.min(1,ne);H+=B*(4+7*M);let D=Math.sin(H)*.75*M;if(y[0].rotation.x=D,y[1].rotation.x=-D,v[0].rotation.x=-D*.8,v[1].rotation.x=D*.8,h.position.y=Math.abs(Math.sin(H))*.07*M+Math.sin(E*2)*.012,h.rotation.z=Math.sin(H)*.04*M,b.rotation.z=Math.sin(E*1.3)*.04,n==="player"){q=M<.05?q+B:0;let I=q>4?Math.sin(E*.8)*.45:0;b.rotation.y+=(I-b.rotation.y)*Math.min(1,B*4)}K-=B;let X=K<.12?.15:1;if(W.forEach(I=>I.scale.y=1.3*X),K<0&&(K=2+Math.random()*3),Y>0){Y-=B;let I=v[1];I.rotation.z=-2.5+Math.sin(E*14)*.35,I.rotation.x=0,Y<=0&&I.rotation.copy(j)}},O.wave=(B=1.6)=>{Y=B},O.setParty=B=>N(B?"party":a),O}var Ya={side:5,front:2.35,z0:-6.5,z1:-17.5},fn={x:0,z:-20.2,r:1.4},ld=(n,e=.25)=>"#"+new Se(n).lerp(new Se("#5A4038"),e).getHexString(),Yf=(n,e)=>(n=String(n||"").replace(/\s+/g," ").trim(),n.length>e?n.slice(0,e-1)+"\u2026":n);function gx(n){let e=Math.ceil(n/2),t=Math.min(5.5,e>1?(Ya.z0-Ya.z1)/(e-1):5.5);return Array.from({length:n},(i,r)=>{let s=r%2===0?-1:1,a=Math.floor(r/2),o=Ya.z0-a*t-(s>0?t/2:0);return{side:s,z:o,x:s*Ya.side,npcX:s*Ya.front}})}var sc=null;function Zf(){if(sc)return sc;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=["#B07A4F","#A56F45","#BC8657","#A9744B"];for(let r=0;r<6;r++){let s=r*21.33,a=e.createLinearGradient(0,s,0,s+21.33);a.addColorStop(0,"#7E5536"),a.addColorStop(.18,t[r%4]),a.addColorStop(.75,t[(r+1)%4]),a.addColorStop(1,"#6E4B33"),e.fillStyle=a,e.fillRect(0,s,128,21.33),e.strokeStyle="rgba(80,50,30,.25)",e.lineWidth=1;for(let o=0;o<3;o++){e.beginPath();let l=(r*37+o*45)%128;e.moveTo(l,s+8),e.lineTo(l+18,s+9),e.stroke()}}let i=ct(n);return i.wrapS=i.wrapT=ni,i.repeat.set(1.4,1),sc=new jt({map:i,gradientMap:jn}),sc}var ac=null;function yx(){if(ac)return ac;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,.85)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),ac=ct(n),ac}function Jf({group:n,colliders:e,boxes:t,addInteract:i,updaters:r}){let s=rn(),a=gx(s.length),o=[],l=Ne(),c=new Set(ls(l).map(f=>f.id));s.forEach((f,y)=>{let p=a[y],x=f.look.outfit,g=new xe,v=new de(new me(2.8,1.9,2.4),Zf());v.position.y=.95,v.castShadow=v.receiveShadow=!0,g.add(v);let b=new ri;b.moveTo(-1.4,0),b.lineTo(1.4,0),b.lineTo(0,1.08),b.closePath();let T=new de(new Pi(b,{depth:2.4,bevelEnabled:!1}),Zf());T.position.set(0,1.9,-1.2),g.add(T);let S=ld(x,.28);for(let O of[-1,1]){let B=ee(new me(1.98,.14,2.9),S,O*.78,2.5,0);B.rotation.z=-O*.66,g.add(B)}g.add(ee(new me(.16,.16,2.95),ld(x,.4),0,3.08,0)),g.add(ee(new me(.34,.85,.34),"#A39A8F",.8,2.85,-.55)),g.add(ee(new me(.72,1.12,.06),ld(x,.1),0,.56,1.22)),g.add(ee(new Ve(.05,8,6),"#F2C14E",.22,.55,1.27)),g.add(ee(new me(1.3,.14,.55),"#8F6243",0,.07,1.45));let R=new Ge({color:"#FFE2A0"});for(let O of[-1,1]){g.add(ee(new me(.64,.64,.05),"#6E4B33",O*.92,1.18,1.21));let B=new de(new rt(.52,.52),R);B.position.set(O*.92,1.18,1.24),g.add(B);for(let ne of[-1,1])g.add(ee(new me(.2,.62,.04),x,O*.92+ne*.43,1.18,1.235));g.add(ee(new me(.66,.16,.18),"#B9773E",O*.92,.82,1.3)),g.add(ee(new gt(.1,0),O<0?"#E07BB5":"#F2C14E",O*.92-.15,.95,1.3),ee(new gt(.1,0),"#D9553B",O*.92+.15,.95,1.3))}let k=new de(new rt(1.3,.34),new Ge({map:ct(Ot(f.name,{w:384,h:100,size:54,bg:"#FFF6E6",border:"#8F6243",radius:22,color:"#4A3528",font:"Jua"})),transparent:!0}));k.position.set(0,1.64,1.25),g.add(k);let U=[0,1,2].map(O=>{let B=new Tn(new mn({map:yx(),transparent:!0,depthWrite:!1,opacity:.6}));return B.position.set(.8,3.4,-.55),g.add(B),{sp:B,off:O/3+y*.13}});r.push(O=>U.forEach(({sp:B,off:ne})=>{let E=(O*.22+ne)%1;B.position.set(.8+Math.sin(E*4+ne*9)*.2,3.35+E*1.6,-.55-E*.3),B.scale.setScalar(.35+E*.7),B.material.opacity=.55*(1-E)}));let C=new xe;C.add(ee(new Te(.04,.05,.85,6),"#6E4B33",0,.42,0)),C.add(ee(new me(.3,.24,.42),"#E4605A",0,.95,0));let W=new xe;W.position.set(.17,.92,-.1);let _=ee(new me(.03,.24,.12),"#F7D58B",0,.12,0);W.add(_),C.add(W),C.position.set(1.15,0,1.85),g.add(C);let P=null;if(c.has(f.id)){let O=qf(-1.15,1.9,2.4);g.add(O),r.push(B=>O.userData.update(B)),P=new xe,P.add(ee(new Te(.06,.06,.7,6),"#B98A66",0,.35,0)),P.add(ee(new Te(.42,.42,.06,18),"#FFFDF8",0,.72,0)),P.add(ee(new Te(.3,.3,.22,18),"#F4B8C0",0,.86,0)),P.add(ee(new Te(.31,.31,.05,18),"#FFFFFF",0,.98,0));for(let B=0;B<3;B++){let ne=B*2.1;P.add(ee(new Te(.02,.02,.14,6),"#F7D58B",Math.cos(ne)*.15,1.07,Math.sin(ne)*.15));let E=new de(new Ve(.035,6,4),new Ge({color:"#FFB347"}));E.position.set(Math.cos(ne)*.15,1.17,Math.sin(ne)*.15),P.add(E)}P.position.set(-.2,0,2.3),g.add(P)}g.position.set(p.x,0,p.z),g.rotation.y=p.side<0?Math.PI/2:-Math.PI/2,n.add(g),t.push({minX:p.x-1.25,maxX:p.x+1.25,minZ:p.z-1.45,maxZ:p.z+1.45});let N=(O,B)=>{let ne=new A(O,0,B).applyAxisAngle(new A(0,1,0),g.rotation.y);return{x:p.x+ne.x,z:p.z+ne.z}},H=N(1.15,1.85);if(e.push({x:H.x,z:H.z,r:.3}),P){let O=N(-.2,2.3);e.push({x:O.x,z:O.z,r:.45})}let K=ja({type:"family",...f.look,shadows:!1});K.root.position.set(p.npcX,0,p.z+(p.side<0?.55:-.55)),K.root.rotation.y=p.side<0?Math.PI/2:-Math.PI/2,c.has(f.id)&&K.setParty(!0),n.add(K.root);let Y={x:K.root.position.x,z:K.root.position.z,r:.45};e.push(Y);let q=f.id===Me(),j=i(`house:${f.id}`,`${f.role||f.name}\uB124 \uC9D1`,f.emoji||"\u{1F3E0}",`${f.role||f.name}\uB124 \uC9D1 \uAD6C\uACBD`,p.npcX,p.z,2.5,3.6);j.label.position.x=p.x,j.member=f.id,o.push({m:f,sp:p,g,npc:K,npcCol:Y,it:j,flagPivot:W,badge:null,badgeText:"",bubbles:new Map,bub:null,bubT:0,sayT:1+y,sayIdx:0,near:!1,isMe:q})});function h(f){let y=[];if(c.has(f.m.id)&&y.push("\u{1F382} \uC0DD\uC77C!"),f.m.id===Me()){let x=Kn().length;x&&y.push(`\u{1F48C} ${x}`)}let p=us(f.m.id).length;return p&&y.push(`\u{1F497} ${p}`),y.join("  ")}function u(f){let y=f.m.id,p=[];c.has(y)&&p.push("\uC624\uB298 \uB0B4 \uC0DD\uC77C\uC774\uC57C! \u{1F382}");let x=mi(Ne()).find(v=>v.who===y);x&&p.push(`\u{1F4AC} ${Yf(x.text,20)}`);let g=at("letters").find(v=>v.who===y&&!gi(v));return g&&p.push(`\u2709\uFE0F ${Yf(g.message.split(`
`)[0],18)}`),f.m.line&&p.push(f.m.line),p.length?p:["\uC5B4\uC11C \uC640! \u{1F64C}"]}function d(){let f=Me(),y=rn();o.forEach(p=>{let x=y.find(T=>T.id===p.m.id);if(x){let T=JSON.stringify(x.look);if(p.lookKey&&T!==p.lookKey){let S=p.npc,R=ja({type:"family",...x.look,shadows:!1});R.root.position.copy(S.root.position),R.root.rotation.y=S.root.rotation.y,c.has(p.m.id)&&R.setParty(!0),n.remove(S.root),S.root.traverse(k=>{var U;return(U=k.geometry)==null?void 0:U.dispose()}),n.add(R.root),p.npc=R}p.lookKey=T,p.m=x}p.isMe=p.m.id===f,p.npc.root.visible=!p.isMe,p.npcCol.r=p.isMe?0:.45;let g=p.isMe?"\u{1F3E0} \uB0B4 \uC9D1":`${p.m.emoji||"\u{1F3E0}"} ${p.m.role||p.m.name}\uB124 \uC9D1`;if(p.it.labelText!==g){p.it.labelText=g;let T=lr(g),S=p.it.label.material.map;p.it.label.material.map=T.material.map,p.it.label.material.needsUpdate=!0,S.dispose(),T.material.dispose()}p.it.text=p.isMe?"\uB0B4 \uC9D1":`${p.m.role||p.m.name}\uB124 \uC9D1`,p.it.action=p.isMe?"\uB0B4 \uC9D1 \uB4E4\uC5B4\uAC00\uAE30":`${p.m.role||p.m.name}\uB124 \uC9D1 \uAD6C\uACBD`;let v=p.isMe&&Kn().length>0;p.flagPivot.rotation.z=v?-1.4:0;let b=h(p);b!==p.badgeText&&(p.badgeText=b,p.badge&&(n.remove(p.badge),p.badge.material.map.dispose(),p.badge.material.dispose(),p.badge=null),b&&(p.badge=lr(b,{scale:2.4,bg:"rgba(255,244,228,.96)",color:"#B5552B"}),p.badge.position.set(p.sp.x,4.45,p.sp.z),n.add(p.badge))),p.lines=u(p)})}d();function m(f,y,p,x=!1){o.forEach(g=>{if(g.isMe)return;let v=g.npc,b=p.x-v.root.position.x,T=p.z-v.root.position.z,S=Math.hypot(b,T);if(x){v.animate(f,0,y),g.bub&&(g.bub.visible=!1,g.bub=null);return}if(v.root.visible=S<48,!v.root.visible)return;v.animate(f,0,y);let R=S<7?kf(Math.atan2(b,T)-v.root.rotation.y,-.9,.9):0;v.head.rotation.y+=(R-v.head.rotation.y)*Math.min(1,f*4);let k=S<4.2;if(k&&!g.near&&(v.wave(1.4),g.sayT=Math.min(g.sayT,.4)),g.near=k,g.sayT-=f,k&&g.sayT<=0&&!g.bub){let U=g.lines[g.sayIdx++%g.lines.length];if(!g.bubbles.has(U)){g.bubbles.size>6&&(g.bubbles.forEach(W=>{n.remove(W),W.material.map.dispose(),W.material.dispose()}),g.bubbles.clear());let C=lr(U,{scale:3.6});C.visible=!1,n.add(C),g.bubbles.set(U,C)}g.bub=g.bubbles.get(U),g.bub.position.set(v.root.position.x,2.75,v.root.position.z),g.bub.visible=!0,g.bubT=3,g.sayT=6+Math.random()*4}g.bub&&(g.bubT-=f,(g.bubT<=0||!k)&&(g.bub.visible=!1,g.bub=null))})}return{houses:o,refresh:d,update:m,npc:f=>{var y;return((y=o.find(p=>p.m.id===f))==null?void 0:y.npc)||null},spot:f=>{var y;return((y=o.find(p=>p.m.id===f))==null?void 0:y.sp)||null}}}function Kf({group:n,colliders:e,addInteract:t,updaters:i}){let r=new xe;r.position.set(fn.x,0,fn.z),n.add(r),r.add(ee(new Te(1.5,1.7,.22,24),"#9C7A5E",0,.11,0)),r.add(ee(new Te(1.35,1.35,.06,24),"#6B4A33",0,.23,0));for(let C=0;C<12;C++){let W=C/12*Math.PI*2;Math.abs(Math.sin(W))>.9&&Math.cos(W)>-.2&&Math.sin(W)>0||r.add(ee(new me(.12,.5,.12),"#A0703F",Math.cos(W)*1.9,.25,Math.sin(W)*1.9))}let s=ee(new Ii(1.9,.035,6,40),"#A0703F",0,.42,0);s.rotation.x=Math.PI/2,r.add(s);let a=ee(new Ve(.16,10,8),"#8C6B55",0,.3,0);a.scale.set(1,.7,1.2);let o=new xe;o.add(ee(new Te(.03,.04,.5,6),"#8DC175",0,.48,0));for(let C of[-1,1]){let W=ee(new Ve(.16,10,8),"#9ED08A",C*.15,.74,0);W.scale.set(1.3,.5,.8),W.rotation.z=C*.5,o.add(W)}let l=new xe;l.add(ee(new Te(.08,.12,1.3,8),"#A47A5C",0,.85,0)),[[0,1.75,0,.55],[.35,1.45,.1,.38],[-.32,1.5,-.1,.4]].forEach(([C,W,_,P])=>{let N=ee(new gt(1,1),"#9ED08A",C,W,_);N.scale.setScalar(P),l.add(N)});let c=new xe;c.add(ee(new Te(.22,.34,2.2,10),"#A47A5C",0,1.3,0));let h=[[0,3.1,0,1.25],[.9,2.65,.25,.9],[-.85,2.75,-.2,.95],[.15,3.85,-.1,.85],[-.3,2.6,.75,.75]],u=new jt({color:"#9DB65A",gradientMap:jn});h.forEach(([C,W,_,P])=>{let N=ee(new gt(1,1),u,C,W,_);N.scale.setScalar(P),c.add(N)});let d=new xe,m=new xe,f=new gt(.13,0),y=new Ve(.15,10,8);for(let C=0;C<26;C++){let[W,_,P,N]=h[C%h.length],H=new A().setFromSphericalCoords(N*1.02,Math.acos(Math.random()*1.6-.6),Math.random()*Math.PI*2);d.add(ee(f,C%3?"#FFF6D8":"#F7E7A6",W+H.x,_+H.y,P+H.z)),C%2===0&&m.add(ee(y,C%4?"#F28C28":"#E9741F",W+H.x*.95,_+H.y*.95-.1,P+H.z*.95))}c.add(d,m),r.add(a,o,l,c),e.push({x:fn.x,z:fn.z,r:fn.r});let p=Ot(fi().name,{w:420,h:110,size:50,bg:"#FFF6E6",radius:26,color:"#5E7D4A",border:"#93A35A"}),x=new de(new rt(1.5,.4),new Ge({map:ct(p),transparent:!0})),g=ee(new Te(.04,.05,.9,6),"#A47A5C",1.35,.45,2.2);x.position.set(1.35,.95,2.23),r.add(g,x),e.push({x:fn.x+1.35,z:fn.z+2.2,r:.2});let v=t("tree",fi().name,"\u{1F331}","\uBB3C \uC8FC\uAE30",fn.x,fn.z+.4,3.2,5.4),b=null,T="",S=-1,R=0;function k(C){a.visible=C===0,o.visible=C===1,l.visible=C===2,c.visible=C>=3,d.visible=C>=4,m.visible=C>=5,c.scale.setScalar(C>=5?1.2:C===4?1.1:1)}function U(){let C=fi();if(C.stage!==S){let _=S>=0&&C.stage>S;S=C.stage,k(S),_&&(R=1)}u.color.set(C.thirsty?"#BBAE73":"#9DB65A");let W=C.thirsty?"\u{1F4A7} \uBAA9\uB9D0\uB77C\uC694\u2026 \uBB3C\uC744 \uC8FC\uC138\uC694":C.todayWho.length?`\u{1F4A7} \uC624\uB298 ${C.todayWho.length}\uBA85\uC774 \uBB3C\uC744 \uC92C\uC5B4\uC694`:`\u{1F331} ${C.stageName} \xB7 \uBB3C ${C.total}\uBC88`;return W!==T&&(T=W,b&&(n.remove(b),b.material.map.dispose(),b.material.dispose()),b=lr(W,{scale:3.4,bg:"rgba(240,250,235,.95)",color:"#4F7A3E"}),b.position.set(fn.x,4.7,fn.z),n.add(b)),C}return U(),i.push((C,W)=>{if(R>0){R=Math.max(0,R-W/.9);let P=1+Math.sin((1-R)*Math.PI)*.25;r.scale.set(P,P,P)}else r.scale.x!==1&&r.scale.set(1,1,1);let _=Math.sin(C*1.1)*.03;c.rotation.z=_,l.rotation.z=_*1.5,o.rotation.z=_*2}),{it:v,refresh:U,top:new A(fn.x,2.6,fn.z)}}var Xr={x:20,z:-8.4,r:1.7},ht={x:8.2,z:25.5,r:1.8},Qf=(n,e)=>(n=String(n||""),n.length>e?n.slice(0,e-1)+"\u2026":n);function vx(n,e,t){let i=String(e).split(/(\s+)/),r=[],s="";for(let a of i){let o=s+a;for(n.measureText(o).width>t&&s.trim()?(r.push(s.trim()),s=a.trimStart()):s=o;n.measureText(s).width>t&&s.length>1;){let l=s.length;for(;l>1&&n.measureText(s.slice(0,l)).width>t;)l--;r.push(s.slice(0,l)),s=s.slice(l)}}return s.trim()&&r.push(s.trim()),r}function e0(n){var W;let e=window.FAMILY,t=new xe;n.add(t);let i=[],r=[],s=[],a=[];function o(_,P,N,H,K,Y,q,j=3.4){let O=lr(`${N} ${P}`);O.position.set(K,j,Y),t.add(O);let B={id:_,text:P,emoji:N,action:H,pos:new A(K,0,Y),r:q,label:O,baseY:j,off:Math.random()*6};return s.push(B),B}let l=(_,P,N)=>new de(new rt(P,N),new Ge({map:ct(_),transparent:!0})),c=document.createElement("canvas");c.width=512,c.height=680;let h=null;function u(){let _=c.getContext("2d");_.clearRect(0,0,512,680),_.fillStyle="#FFFDF8",Xn(_,0,0,512,680,24),_.fill(),_.lineWidth=10,_.strokeStyle="#B07A4F",Xn(_,5,5,502,670,20),_.stroke(),_.textAlign="center",_.fillStyle="#B5552B",_.font="64px serif",_.fillText("\u{1F3E1}",256,105),_.font='56px "Jua"',_.fillText(Wt(),256,185);let P=Wi();_.fillStyle="#7C6A66",_.font='28px "Gowun Dodum"',P>0&&_.fillText(`\uD568\uAED8\uD55C \uC9C0 ${P.toLocaleString()}\uC77C\uC9F8`,256,232),_.fillStyle="#4A3B38",_.font='700 32px "Gowun Dodum"',_.fillText("\uC624\uB298 \uB2E4\uB140\uAC04 \uAC00\uC871",256,315);let N=vo();_.font='30px "Gowun Dodum"',N.length||(_.fillStyle="#9A8C88",_.fillText("\uC544\uC9C1 \uC544\uBB34\uB3C4 \uC548 \uC654\uC5B4\uC694",256,375)),N.slice(0,6).forEach((H,K)=>{let Y=K%2,q=Math.floor(K/2);_.fillStyle=H.look.outfit,_.beginPath(),_.arc(Y?300:70,368+q*62,12,0,7),_.fill(),_.fillStyle="#4A3B38",_.textAlign="left",_.fillText(Qf(H.role||H.name,6),Y?322:92,379+q*62),_.textAlign="center"}),_.fillStyle="#B5552B",_.font='26px "Gowun Dodum"',_.fillText("\uB204\uB974\uBA74 \uC6B0\uB9AC \uAC00\uC871 \uC18C\uAC1C",256,640),h&&(h.needsUpdate=!0)}{let _=new xe,P="#B98A66",N=ee(new me(.1,3,.1),P,-.8,1.45,.1);N.rotation.z=.12;let H=ee(new me(.1,3,.1),P,.8,1.45,.1);H.rotation.z=-.12;let K=ee(new me(.1,3,.1),P,0,1.4,-.45);K.rotation.x=-.3;let Y=ee(new me(1.9,.08,.25),P,0,.75,.2),q=ee(new me(1.9,2.5,.06),"#FFFDF8",0,2.05,.2);q.rotation.x=-.08,u();let j=l(c,1.75,2.33);h=j.material.map,j.position.set(0,2.05,.235),j.rotation.x=-.08,_.add(N,H,K,Y,q,j),_.position.set(-4.8,0,24),_.rotation.y=.35,t.add(_),i.push({x:-4.8,z:24,r:1}),o("family","\uC6B0\uB9AC \uAC00\uC871","\u{1F3E1}","\uAC00\uC871 \uC18C\uAC1C \uBCF4\uAE30",-4.8,24,3,3.8)}let d=document.createElement("canvas");d.width=512,d.height=400;let m=null;function f(){let _=d.getContext("2d");_.fillStyle="#D9B38C",_.fillRect(0,0,512,400);for(let H=0;H<160;H++)_.fillStyle=H%2?"rgba(120,80,40,.12)":"rgba(255,255,255,.1)",_.fillRect(H*97%512,H*61%400,3,3);_.save(),_.translate(256,205),_.rotate(-.02),_.fillStyle="#FFFDF6",_.shadowColor="rgba(0,0,0,.25)",_.shadowBlur=12,_.fillRect(-215,-170,430,340),_.shadowColor="transparent",_.fillStyle="#E4605A",_.beginPath(),_.arc(0,-160,13,0,7),_.fill(),_.textAlign="center",_.fillStyle="#B5552B",_.font='36px "Jua"',_.fillText("\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38",0,-108);let P=hs();_.fillStyle="#4A3528",_.font='36px "Jua"',vx(_,P?P.q:"\uC9C8\uBB38\uC744 \uC900\uBE44 \uC911\uC774\uC5D0\uC694",380).slice(0,3).forEach((H,K)=>_.fillText(H,0,-40+K*48));let N=P?mi(P.day).length:0;_.fillStyle="#7C6A66",_.font='26px "Gowun Dodum"',_.fillText(N?`${N}\uBA85\uC774 \uB2F5\uD588\uC5B4\uC694 \xB7 \uB20C\uB7EC\uC11C \uB2F5\uD558\uAE30`:"\uCCAB \uBC88\uC9F8\uB85C \uB2F5\uD574 \uBCF4\uC138\uC694!",0,140),_.restore(),m&&(m.needsUpdate=!0)}{let _=new xe,P="#A47A5C";for(let K of[-.95,.95])_.add(ee(new me(.12,2.9,.12),P,K,1.45,0));_.add(ee(new me(2.15,1.75,.1),P,0,2.05,-.03));let N=ee(new me(2.5,.12,.55),"#B5452F",0,3.05,.05);N.rotation.x=.25,_.add(N),f();let H=l(d,1.95,1.52);m=H.material.map,H.position.set(0,2.05,.03),_.add(H),_.position.set(4.4,0,-1.8),_.rotation.y=-.55,t.add(_),i.push({x:4.4,z:-1.8,r:.9}),o("question","\uC624\uB298\uC758 \uC9C8\uBB38","\u{1F4AC}","\uC9C8\uBB38\uC5D0 \uB2F5\uD558\uAE30",4.4,-1.8,3,3.75)}{let _=new xe,P="#E4605A";_.add(ee(new Te(.2,.25,.5,10),"#8C6B55",0,.25,0));let N=ee(new me(1,1.3,.8),P,0,1.15,0),H=ee(new Te(.4,.4,1,20,1,!1,0,Math.PI),P,0,1.8,0);H.rotation.z=Math.PI/2;let K=ee(new me(.6,.06,.05),"#4A2B28",0,1.55,.41),Y=l(Ot("\uC6B0\uCCB4\uD1B5",{w:256,h:128,size:58,bg:"#FFF6E6",radius:24,color:"#B5452F"}),.7,.35);Y.position.set(0,1.1,.41);let q=[];for(let j=0;j<3;j++){let O=ee(new me(.4,.28,.02),j===1?"#FFF3EA":"#FFFFFF",0,2.4,0);_.add(O),q.push({l:O,off:j*2.1})}_.add(N,H,K,Y),_.position.set(4.8,0,23),_.rotation.y=-.4,t.add(_),a.push(j=>q.forEach(({l:O,off:B})=>{let ne=(j*.35+B/6.3)%1;O.position.set(Math.sin(ne*6+B)*.5,2+ne*1.6,Math.cos(ne*5)*.3),O.rotation.set(ne*3,ne*5+B,.3),O.visible=ne<.95})),i.push({x:4.8,z:23,r:.8}),o("mailbox","\uC548\uBD80 \uC6B0\uCCB4\uD1B5","\u2709\uFE0F","\uD3B8\uC9C0 \uC4F0\uAE30",4.8,23,2.8,4.1)}let y=new xe;t.add(y);let p=[];{y.add(ee(new Te(ht.r+.3,ht.r+.4,.18,28),"#B98A66",ht.x,.09,ht.z)),y.add(ee(new Te(ht.r+.05,ht.r+.05,.22,28),"#7A5A44",ht.x,.1,ht.z));let _=ee(new Te(.05,.06,1.1,6),"#A47A5C",ht.x,.55,ht.z+ht.r+.5),P=l(Ot("\uAC00\uC871 \uC815\uC6D0",{w:360,h:110,size:50,bg:"#FFF6E6",radius:26,color:"#B5552B"}),1.3,.4);P.position.set(ht.x,1.15,ht.z+ht.r+.55);let N=P.clone();N.rotation.y=Math.PI,N.position.z-=.02,y.add(_,P,N),i.push({x:ht.x,z:ht.z,r:ht.r+.5})}let x=new Te(.03,.03,.5,6),g=new gt(.16,0),v=new Ve(.06,8,6),b=_=>{let P=7;for(let N of String(_))P=P*31+N.charCodeAt(0)>>>0;return P};function T(_,P){if(p.length>=60)return null;let N=b(`${_.name}|${_.time||""}|${p.length}`),H=N%360/360*Math.PI*2,K=.25+(N>>9)%100/100*(ht.r-.55),Y=ht.x+Math.cos(H)*K,q=ht.z+Math.sin(H)*K,j=new xe;if(j.add(ee(x,"#8DC175",0,.45,0)),j.add(ee(g,_.color||la(_.who),0,.75,0)),j.add(ee(v,"#F7D58B",0,.75,.13)),p.length<24){let O=String(_.name||"").slice(0,8),B=lr(O,{scale:1.5,bg:"rgba(255,253,248,.85)"});B.position.y=1.12,j.add(B)}if(j.position.set(Y,0,q),j.rotation.y=H,y.add(j),p.push(j),P){let O=0;j.scale.setScalar(.01),a.push((B,ne)=>{if(O>=1)return;O=Math.min(1,O+ne/.7);let E=1-Math.pow(1-O,3);j.scale.setScalar(E)})}return new A(Y,0,q)}{let _=new xe;_.add(ee(new Te(.1,.12,3.2,8),"#A47A5C",0,1.6,0)),[["\uBAA8\uC774\uB294 \uACF3","#FFF6E6",.4],["\uBCF8\uAC00 \u2192","#F2B27A",-.5],["\uC8FC\uCC28 \uC548\uB0B4","#F2C14E",.9]].forEach(([N,H,K],Y)=>{let q=new xe,j=ee(new me(1.5,.42,.08),H,.55,0,0),O=ee(new Te(.21,.21,.08,3),H,1.35,0,0);O.rotation.x=Math.PI/2,O.rotation.y=Math.PI/2;let B=l(Ot(N,{w:384,h:110,size:56,bg:null}),1.4,.4);B.position.set(.55,0,.05);let ne=B.clone();ne.rotation.y=Math.PI,ne.position.z=-.05,q.add(j,O,B,ne),q.position.y=2.8-Y*.55,q.rotation.y=K,_.add(q)}),_.position.set(-3.6,0,13.5),t.add(_),i.push({x:-3.6,z:13.5,r:.4}),o("directions","\uBAA8\uC774\uB294 \uACF3","\u{1F5FA}\uFE0F","\uAE38 \uC548\uB0B4 \uBCF4\uAE30",-3.6,13.5,2.6,3.9)}{let _=new xe;_.add(ee(new me(1,.75,1),"#B98A66",0,.38,0)),_.add(ee(new me(1.25,1,1),"#F6E7CC",0,1.25,0)),_.add(ee(new me(1.3,.08,1.05),"#E07B39",0,1.78,0)),_.add(ee(new me(.6,.04,.12),"#4A3B38",0,1.83,0));let P=ee(new me(.42,.3,.02),"#F7D58B",0,2,0);_.add(P);let N=l(Ot("\uD22C\uD45C\uD568",{w:256,h:110,size:54,bg:"#E07B39",radius:20,color:"#FFFFFF"}),.8,.34);N.position.set(0,1.3,.51),_.add(N),_.position.set(-13.5,0,2),_.rotation.y=.5,t.add(_),a.push(H=>{P.position.y=2+Math.sin(H*2.2)*.08,P.rotation.y=Math.sin(H)*.4}),i.push({x:-13.5,z:2,r:.9}),o("poll","\uAC00\uC871 \uD22C\uD45C\uD568","\u{1F5F3}\uFE0F","\uD22C\uD45C\uD558\uAE30",-13.5,2,3,3.2)}{let _=new xe,P="#B98A66";for(let q of[-.75,.75])_.add(ee(new me(.1,2.8,.1),P,q,1.4,0));_.add(ee(new me(1.8,2.1,.1),P,0,1.9,0));let N=document.createElement("canvas");N.width=480,N.height=560;let H=N.getContext("2d");H.fillStyle="#4E5F46",H.fillRect(0,0,480,560),H.fillStyle="#FFF8E7",H.textAlign="center",H.font='52px "Jua"',H.fillText("\uAC00\uC871 \uB2EC\uB825",240,70);let K=cs(5);H.font='28px "Gowun Dodum"',K.length||H.fillText("\uB2E4\uAC00\uC624\uB294 \uB0A0\uC774 \uC5C6\uC5B4\uC694",240,260),K.forEach((q,j)=>{let O=150+j*80;H.font='28px "Gowun Dodum"',H.textAlign="left",H.fillStyle="#FFF8E7",H.fillText(`${q.emoji||"\u{1F4CC}"} ${Qf(q.title,9)}`,28,O),H.textAlign="right",H.fillStyle=q.dday===0?"#F4B8C0":"#F7D58B",H.fillText(ha(q.dday),454,O),H.textAlign="left",H.fillStyle="rgba(255,248,231,.6)",H.font='22px "Gowun Dodum"',H.fillText(hn(q.key),70,O+30)});let Y=l(N,1.62,1.9);Y.position.set(0,1.9,.06),_.add(Y),_.position.set(11,0,9.8),_.rotation.y=-.5,t.add(_),i.push({x:11,z:9.8,r:1}),o("calendar","\uAC00\uC871 \uB2EC\uB825","\u{1F4C5}","\uB2EC\uB825 \uBCF4\uAE30",11,9.8,2.8,3.6)}{let _=new xe;_.add(ee(new me(2.4,1.1,1),"#F6E7CC",0,.55,0)),_.add(ee(new me(2.5,.1,1.1),"#B07A4F",0,1.12,0));for(let H of[-1.1,1.1])_.add(ee(new Te(.06,.06,2.4,8),"#FFFFFF",H,2.2,-.4));let P=8;for(let H=0;H<P;H++){let K=ee(new Te(1.7,1.7,.5,3,1,!1,Math.PI/2+H/P*Math.PI,Math.PI/P),H%2?"#FFF6E6":"#E07B39",0,3.3,-.4);K.rotation.x=Math.PI/2,K.scale.set(1,1,.5),_.add(K)}let N=l(Ot("?",{w:256,h:256,size:190,bg:"#F2C14E",radius:128,color:"#FFFFFF"}),.9,.9);N.position.set(0,.6,.51),_.add(N),_.position.set(-19.5,0,-11.5),_.rotation.y=.6,t.add(_),i.push({x:-19.5,z:-11.5,r:1.5}),o("quiz","\uAC00\uC871 \uD034\uC988","\u2753","\uD034\uC988 \uD480\uAE30",-19.5,-11.5,3.2,4.4)}let S;{let _=new xe,P=new gt(.34,0);for(let F=0;F<12;F++){let z=F/12*Math.PI*2,G=ee(P,F%2?"#9C948A":"#B5ADA2",Math.cos(z)*1.25,.18,Math.sin(z)*1.25);G.scale.set(1.15,.7,1),G.rotation.y=z,_.add(G)}_.add(ee(new Te(1.1,1.1,.05,20),"#4A3A2E",0,.04,0));let N=new Te(.11,.13,1.6,8);for(let F=0;F<4;F++){let z=ee(N,F%2?"#7A4E32":"#8A5A3B",0,.16+(F>1?.2:0),0);z.rotation.set(0,F*Math.PI/4+.3,Math.PI/2),_.add(z)}let H=[["#FF7A1A",.42,1.05],["#FFB23A",.3,.85],["#FFE58A",.17,.6]].map(([F,z,G],Q)=>{let re=new de(new Rn(z,G,8),new Ge({color:F,transparent:!0,opacity:.92}));return re.position.y=.4+G/2,re.userData={h:G,k:Q},_.add(re),re}),K=document.createElement("canvas");K.width=K.height=128;let Y=K.getContext("2d"),q=Y.createRadialGradient(64,64,4,64,64,64);q.addColorStop(0,"rgba(255,190,90,.9)"),q.addColorStop(.4,"rgba(255,150,60,.35)"),q.addColorStop(1,"rgba(255,120,40,0)"),Y.fillStyle=q,Y.fillRect(0,0,128,128);let j=new Tn(new mn({map:ct(K),blending:Ql,depthWrite:!1,transparent:!0,opacity:.7}));j.position.y=.9,j.scale.set(4.2,4.2,1),_.add(j);let O=28,B=new Float32Array(O*3),ne=[];for(let F=0;F<O;F++)ne.push([Math.random()*Math.PI*2,Math.random(),Math.random()*.35]);let E=new nt;E.setAttribute("position",new wt(B,3));let M=new Hr(E,new or({color:"#FFC46B",size:.09,transparent:!0,opacity:.9,depthWrite:!1}));_.add(M);let D=new Te(.32,.32,1.7,10);for(let F=0;F<4;F++){let z=F*Math.PI/2+Math.PI/4,G=ee(D,"#8F6243",Math.cos(z)*2.9,.3,Math.sin(z)*2.9);G.rotation.set(0,-z,Math.PI/2),_.add(G),i.push({x:Math.cos(z)*2.9,z:4+Math.sin(z)*2.9,r:.5})}let X=ee(new Te(.45,.5,.12,12),"#A39A8F",1.75,.06,.25);_.add(X);let I=new Li(new Ve(.11,8,6),lt("#8A4B3A"),6);I.count=0,_.add(I),_.position.set(0,0,4),t.add(_);let $=0;a.push((F,z)=>{H.forEach(G=>{let{h:Q,k:re}=G.userData,w=1+Math.sin(F*(9+re*3)+re)*.12+$*.4;G.scale.set(1-(w-1)*.5,w,1-(w-1)*.5),G.position.y=.4+Q*w/2,G.rotation.y=F*(1+re)}),j.material.opacity=.6+Math.sin(F*7)*.08+$*.3;for(let G=0;G<O;G++){let[Q,re,w]=ne[G],ae=(F*.45+re)%1;B[G*3]=Math.cos(Q+ae*2)*(w+ae*.3),B[G*3+2]=Math.sin(Q+ae*2)*(w+ae*.3),B[G*3+1]=.7+ae*2.4}E.attributes.position.needsUpdate=!0,$>0&&($=Math.max(0,$-z*1.5))}),i.push({x:0,z:4,r:1.6}),o("campfire","\uBAA8\uB2E5\uBD88","\u{1F525}","\uACE0\uAD6C\uB9C8 \uAD7D\uAE30",0,4,3.4,3.4),S={toss(F,z,G){rc(F,z,new A(0,.8,4),"\u{1F360}",.75,()=>{$=1,G==null||G()})},setCount(F){F=Math.max(0,Math.min(6,F|0));let z=new Ie;for(let G=0;G<F;G++)z.makeRotationY(G*1.3),z.scale(new A(1.5,.8,.9)),z.setPosition(1.75+Math.cos(G*1.05)*.24,.18,.25+Math.sin(G*1.05)*.24),I.setMatrixAt(G,z);I.count=F,I.instanceMatrix.needsUpdate=!0}}}{let _=new xe,P=["#D9553B","#F2C14E","#E8763E","#FFFFFF","#C9452F","#F7D46A"];for(let N=0;N<9;N++){let H=-6+N*1.5,K=ee(new gt(.9,1),["#93A35A","#B98A3E","#A9A55E"][N%3],H,.8,-22.3);K.scale.set(1,1.1,.8),_.add(K),_.add(ee(new gt(.18,0),P[N%P.length],H+.3,1.4,-21.6))}t.add(_),r.push({minX:-7,maxX:7,minZ:-23.5,maxZ:-21.5})}let R=Jf({group:t,colliders:i,boxes:r,addInteract:o,updaters:a}),k=Kf({group:t,colliders:i,addInteract:o,updaters:a});{let _=new xe,P="#9C6B44",N=3.2,H=2.4,K=.18,Y=.9;_.add(ee(new me(N+K,K,K),P,0,Y+H,0)),_.add(ee(new me(N+K,K,K),P,0,Y,0));for(let B of[-1,1])_.add(ee(new me(K,H,K),P,B*N/2,Y+H/2,0)),_.add(ee(new me(K,Y,K),P,B*N/2,Y/2,0));let q=l(Ot("FAMILY PHOTO",{w:512,h:110,size:60,bg:"#FFF6E6",radius:55,color:"#B5552B"}),2,.43);q.position.set(0,Y+H+.4,.05),_.add(q);let j=["#D9553B","#F2C14E","#E8763E","#B9773E"];for(let B=0;B<18;B++){let ne=ee(new gt(.16,1),j[B%4],-N/2+be(-.15,.3),Y+be(0,1.1),be(-.1,.15));_.add(ne)}_.position.set(-11,0,19),_.rotation.y=.5,t.add(_);let O=.5;for(let B of[-1,1])i.push({x:-11+Math.cos(O)*B*N/2,z:19-Math.sin(O)*B*N/2,r:.3});o("photozone","\uAC00\uC871 \uD3EC\uD1A0\uC874","\u{1F4F8}","\uAC00\uC871\uC0AC\uC9C4 \uCC0D\uAE30",-11,19,3,4.6)}{let _=new xe,P=["#D9553B","#F2C14E","#E8763E","#93A35A"];for(let K of[-1,1]){_.add(ee(new Te(.16,.2,3.6,10),"#8F6243",K*2.7,1.8,0));for(let Y=0;Y<7;Y++)_.add(ee(new gt(.17,1),P[Y%4],K*2.7+be(-.2,.2),.4+Y*.45,be(-.2,.2)))}let N=l(Ot(Wt(),{w:768,h:150,size:74,bg:"#FFF6E6",border:"#B07A4F",radius:60,color:"#B5452F"}),5.2,1);N.position.set(0,3.7,.13);let H=N.clone();H.rotation.y=Math.PI,H.position.z=-.13,_.add(ee(new me(5.8,1.15,.2),"#8F6243",0,3.7,0),N,H),_.position.set(0,0,34.5),t.add(_),i.push({x:-2.7,z:34.5,r:.3},{x:2.7,z:34.5,r:.3})}xx(t,i,r,a),o("museum",((W=e.museum)==null?void 0:W.title)||"\uAC00\uC871 \uC0AC\uC9C4\uAD00","\u{1F5BC}\uFE0F","\uC0AC\uC9C4\uAD00 \uC785\uC7A5",Xr.x,Xr.z,2.6,8.4);function U(){u(),f(),R.refresh(),k.refresh()}function C(_,P,N,H=!1){a.forEach(K=>K(P,_)),s.forEach(K=>{K.label.visible=!H,K.label.position.y=K.baseY+Math.sin(P*2+K.off)*.12}),N&&R.update(_,P,N,H)}return{group:t,colliders:i,boxes:r,interactables:s,update:C,refresh:U,plantFlower:T,flowerCount:()=>p.length,campfire:S,bed:ht,houses:R,familyTree:k}}function xx(n,e,t,i){var k,U;let r=window.FAMILY,s=new xe,a=20,o=-10.2,l="#F1E0C2",c="#FFF8EC",h="#B5452F";s.add(ee(new me(15,.4,13),"#D8C3A0",a,.2,-15.5));for(let C=0;C<3;C++)s.add(ee(new me(6-C*.6,.13,.45),"#D8C3A0",a,.065+C*.13,-8.3-C*.45));s.add(ee(new me(13,5.8,10),l,a,3.3,-15.3));let u=new Te(.34,.38,5.4,16),d=new me(.9,.25,.9);[14,16.2,18.3,21.7,23.8,26].forEach(C=>{s.add(ee(u,c,C,3.1,-9.4)),s.add(ee(d,c,C,5.9,-9.4)),s.add(ee(d,c,C,.52,-9.4))}),s.add(ee(new me(14.2,.6,11.8),c,a,6.3,-14.9));let m=new ri;m.moveTo(-7.4,0),m.lineTo(7.4,0),m.lineTo(0,2.4),m.closePath();let f=ee(new Pi(m,{depth:11.8,bevelEnabled:!1}),h,a,6.6,-20.8);s.add(f);let y=ee(new Pi((()=>{let C=new ri;return C.moveTo(-6.6,.25),C.lineTo(6.6,.25),C.lineTo(0,2.05),C.closePath(),C})(),{depth:.05,bevelEnabled:!1}),c,a,6.6,-8.98);s.add(y);let p=new ri;p.moveTo(0,-.35),p.bezierCurveTo(-.6,.05,-.35,.5,0,.25),p.bezierCurveTo(.35,.5,.6,.05,0,-.35);let x=ee(new Pi(p,{depth:.1,bevelEnabled:!1}),"#F2C14E",a,7.5,-8.9);x.scale.setScalar(.9),s.add(x);let g=new de(new rt(6,.9),new Ge({map:ct(Ot(((k=r.museum)==null?void 0:k.title)||"\uAC00\uC871 \uC0AC\uC9C4\uAD00",{w:1024,h:150,size:84,bg:"#FFF6E6",border:"#B07A4F",radius:75,color:"#B5452F"})),transparent:!0}));g.position.set(a,5.3,o+.02),s.add(g),s.add(ee(new me(2.9,3.7,.2),"#8F6243",a,2.25,o));let v=ee(new me(2.5,3.4,.22),"#9C6B4E",a,2.1,o+.02);s.add(v);let b=new de(new rt(2.1,1.1),new Ge({color:"#FFF1C9",transparent:!0,opacity:.9}));b.position.set(a,3,o+.15),s.add(b);let T=ee(new Ve(.08,8,6),"#E2B865",a+.9,1.9,o+.15);s.add(T);let S=((U=r.museum)==null?void 0:U.themes)||[];[15.2,17.2,22.8,24.8].forEach((C,W)=>{var H;let _=S[W%Math.max(1,S.length)],P=Ot(_?[_.emoji]:["\u2665"],{w:128,h:320,size:70,bg:(_==null?void 0:_.color)||"#F4B8C0",radius:16,color:"#fff",sub:(H=_==null?void 0:_.title)==null?void 0:H.slice(0,4),subSize:22}),N=new de(new rt(.8,2),new Ge({map:ct(P),transparent:!0}));N.position.set(C,3.2,o+.03),s.add(N)});let R=(C,W)=>{s.add(ee(new Te(.35,.28,.6,12),"#B9773E",C,.3,W));let _=ee(new gt(.5,1),"#93A35A",C,.95,W);s.add(_);for(let P=0;P<4;P++)s.add(ee(new gt(.12,0),["#F4A6C6","#FFFFFF","#E07BB5"][P%3],C+be(-.35,.35),1.1+be(0,.3),W+.3));e.push({x:C,z:W,r:.5})};R(16.5,-7.8),R(23.5,-7.8);for(let C of[13.45,26.55])for(let W of[-12.5,-15.5,-18.5]){let _=new de(new rt(1.6,2.2),new Ge({color:"#CDE9F5"}));_.position.set(C+(C<a?-.02:.02),3.4,W),_.rotation.y=C<a?-Math.PI/2:Math.PI/2,s.add(_)}n.add(s),i.push(C=>{x.position.y=7.5+Math.sin(C*2)*.06,b.material.opacity=.75+Math.sin(C*3)*.2}),t.push({minX:12.3,maxX:27.7,minZ:-22.2,maxZ:-9})}var t0=new A(1e3,0,0),Yt=-3.2,cd=3,n0=3.5,i0=2.7,hd=2.7,_x=si?768:1024,Mx=16,bx=34;function Ex(){let n=document.createElement("canvas");n.width=256,n.height=256;let e=n.getContext("2d"),t=["#E7C9A3","#E1C09A","#EBD0AD","#DDBB94"];for(let r=0;r<8;r++)e.fillStyle=t[r%4],e.fillRect(0,r*32,256,32),e.fillStyle="rgba(150,110,80,.18)",e.fillRect(0,r*32,256,2),e.fillRect(r*97%256,r*32,2,32);let i=ct(n);return i.wrapS=i.wrapT=ni,i}function r0(n,e=.6){return new Se(n).lerp(new Se("#FFFFFF"),e)}function s0(n){var E;let e=window.FAMILY,t=new xe;t.position.copy(t0),t.visible=!1,n.add(t);let i=is(),r=[],s=[],a=[],o=2;i.forEach((M,D)=>{let X=o,I=X+1.6,$=M.photos.map((z,G)=>({...z,x:X+4.4+G*n0})),F=X+4.4+Math.max(0,M.photos.length-1)*n0+2.2;a.push({theme:M,ti:D,x0:X,x1:F,headerX:I}),s.push({theme:M,ti:D,x:I}),$.forEach(z=>r.push({...z,ti:D})),o=F+1.2});let l=o+3.5,c=-9,h=l-c,u=(c+l)/2,d=Ex();d.repeat.set(h/4,14/4);let m=new de(new rt(h,16),new jt({map:d,gradientMap:jn}));m.rotation.x=-Math.PI/2,m.position.set(u,0,4.6),t.add(m);let f=lt("#FFF6EA"),y=new de(new me(h,9,.4),f);y.position.set(u,4.5,Yt-.2),t.add(y);for(let M of[c,l]){let D=new de(new me(.4,9,16),f);D.position.set(M,4.5,4.6),t.add(D)}let p=new de(new rt(h,16),lt("#FFFDF8"));p.rotation.x=Math.PI/2,p.position.set(u,8.6,4.6),t.add(p);let x=new de(new me(h,.18,.12),lt("#B07A4F"));x.position.set(u,5.5,Yt+.06),t.add(x);let g=new de(new me(h,.3,.1),lt("#C9A27E"));g.position.set(u,.15,Yt+.05),t.add(g);let v=-6.2,b=new de(new me(2.9,3.9,.12),lt("#B07A4F"));b.position.set(v,1.95,Yt+.06);let T=new de(new me(2.5,3.6,.1),lt("#9C6B4E"));T.position.set(v,1.8,Yt+.14);let S=new de(new rt(1.8,.5),new Ge({map:ct(Ot("\u{1F6AA} \uB098\uAC00\uB294 \uBB38",{w:360,h:100,size:46,bg:"#FFFDF8",radius:50,color:"#4A3B38"})),transparent:!0}));S.position.set(v,4.3,Yt+.08),t.add(b,T,S);let R=document.createElement("canvas");R.width=900,R.height=700;{let M=R.getContext("2d");M.fillStyle="#FFFDF8",Xn(M,0,0,900,700,40),M.fill(),M.strokeStyle="#B07A4F",M.lineWidth=8,Xn(M,20,20,860,660,30),M.stroke(),M.textAlign="center",M.fillStyle="#E07B39",M.font='28px "Gowun Dodum"',M.fillText("P H O T O   M U S E U M",450,110),M.fillStyle="#4A3B38",M.font='74px "Jua"',M.fillText(((E=e.museum)==null?void 0:E.title)||"\uC6B0\uB9AC \uAC00\uC871 \uC0AC\uC9C4\uAD00",450,210),M.font='36px "Jua"',M.fillStyle="#7C6A66",M.fillText(`${e.name||"\uC6B0\uB9AC"} \uB9C8\uC744`,450,280),M.font='30px "Gowun Dodum"',i.forEach((D,X)=>M.fillText(`${D.emoji}  ${D.title} \xB7 ${D.photos.length}\uC7A5`,450,370+X*52)),M.fillStyle="#B5552B",M.font='28px "Gowun Dodum"',M.fillText("\u2192 \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC5B4\uAC00\uBA70 \uAD00\uB78C\uD574 \uC8FC\uC138\uC694",450,650)}let k=new de(new rt(4.2,3.27),new Ge({map:ct(R)}));k.position.set(-1.6,3,Yt+.05),t.add(k);let U=new me(.9,.12,.35),C=new Ge({color:"#FFF1C9"});a.forEach(M=>{let D=M.theme,X=M.x1-M.x0,I=r0(D.color,.55),$=new de(new rt(X,1.4),new jt({color:I,gradientMap:jn}));$.position.set((M.x0+M.x1)/2,.7,Yt+.02),t.add($);let F=new de(new rt(X,.5),$.material);F.position.set((M.x0+M.x1)/2,6,Yt+.02),t.add(F);let z=new de(new rt(X-.6,3.2),new jt({color:r0(D.color,.3),gradientMap:jn}));z.rotation.x=-Math.PI/2,z.position.set((M.x0+M.x1)/2,.01,.4),t.add(z);let G=document.createElement("canvas");G.width=560,G.height=800;let Q=G.getContext("2d");Q.fillStyle=D.color,Xn(Q,0,0,560,800,36),Q.fill(),Q.fillStyle="rgba(255,255,255,.9)",Xn(Q,24,24,512,752,26),Q.fill(),Q.textAlign="center",Q.textBaseline="middle",Q.font="150px serif",Q.fillText(D.emoji||"\u{1F4F7}",280,190),Q.fillStyle="#4A3B38",Q.font='66px "Jua"',Q.fillText(D.title,280,360),Q.fillStyle="#7C6A66",Q.font='30px "Gowun Dodum"',Sx(Q,D.subtitle||"",280,450,440,44),Q.fillStyle="#B5552B",Q.font='28px "Gowun Dodum"',Q.fillText(`\uC0AC\uC9C4 ${D.photos.length}\uC7A5`,280,700);let re=new de(new rt(2.3,3.29),new Ge({map:ct(G)}));re.position.set(M.headerX,3,Yt+.05),t.add(re);let w=Ot([`${D.emoji} ${D.title}`],{w:640,h:140,size:64,bg:D.color,radius:30,color:"#FFFFFF"}),ae=new de(new rt(3.2,.7),new Ge({map:ct(w),transparent:!0}));if(ae.position.set(M.headerX+.4,6.9,Yt+.1),t.add(ae),M.x1-M.x0>9){let Z=(M.x0+M.x1)/2,J=new de(new me(2.4,.2,.7),lt("#B98A66"));J.position.set(Z,.55,4.3);let le=new de(new me(.15,.5,.6),lt("#8C6B55"));le.position.set(Z-1,.25,4.3);let pe=le.clone();pe.position.x=Z+1,t.add(J,le,pe)}});let W=new rt(1,1),_=new me(1,1,.12),P=[lt("#B07A4F"),lt("#FFFFFF"),lt("#B98A66")],N=new Ge({color:"#F3E9DA"});r.forEach((M,D)=>{let X=new de(_,P[M.ti%P.length]),I=new de(W,N);X.position.set(M.x,cd,Yt+.07),I.position.set(M.x,cd,Yt+.135),t.add(X,I);let $=new de(U,C);$.position.set(M.x,4.9,Yt+.25),t.add($),M.frame=X,M.photo=I,M.state="idle",H(M,2.2,2.2)});function H(M,D,X){M.photo.scale.set(D,X,1),M.frame.scale.set(D+.26,X+.26,1)}function K(M){if(M.placard){M.placard.visible=!0;return}let D=`${String(M.idx+1).padStart(2,"0")}${M.caption?" \xB7 "+M.caption:""}`,X=Ot(D.length>22?D.slice(0,21)+"\u2026":D,{w:512,h:90,size:34,bg:"#FFFDF8",radius:12,color:"#4A3B38",font:"Gowun Dodum"}),I=new de(new rt(1.8,.32),new Ge({map:ct(X),transparent:!0})),$=cd-M.photo.scale.y/2-.45;I.position.set(M.x,$,Yt+.06),t.add(I),M.placard=I}function Y(M){var D;M.photo.material!==N&&((D=M.photo.material.map)==null||D.dispose(),M.photo.material.dispose()),M.photo.material=N,M.state="idle",M.placard&&(M.placard.visible=!1),H(M,2.2,2.2)}let q=0;function j(M){M.state="loading",q++;let D=new Image;D.decoding="async";let X=setTimeout(()=>{M.state==="loading"&&(D.onload=D.onerror=null,O(M,yr(M.theme,M.idx,M.src),1,!1))},8e3);D.onload=()=>{clearTimeout(X);let I=Math.min(1,_x/Math.max(D.width,D.height)),$=document.createElement("canvas");$.width=Math.round(D.width*I),$.height=Math.round(D.height*I);let F=$.getContext("2d");F.drawImage(D,0,0,$.width,$.height);try{F.getImageData(0,0,1,1),O(M,$,D.width/D.height,!0)}catch{let G=Math.round(600/(D.width/D.height));O(M,yr(M.theme,M.idx,"(\uD30C\uC77C\uB85C \uC5F4\uC5C8\uC744 \uB54C\uB9CC \uBCF4\uC774\uB294 \uC548\uB0B4)",600,G,"\u{1F50D} \uD06C\uAC8C \uBCF4\uAE30\uB97C \uB20C\uB7EC \uD655\uC778\uD558\uC138\uC694"),D.width/D.height,!0)}},D.onerror=()=>{clearTimeout(X),O(M,yr(M.theme,M.idx,M.src),1,!1)},D.src=gr(M)}function O(M,D,X,I){q--,M.state="done",M.ok=I,M.photo.material!==N&&M.photo.material.dispose(),M.photo.material=new Ge({map:ct(D)});let $=i0,F=i0/X;F>hd&&(F=hd,$=hd*X),H(M,$,F),K(M)}let B=t0,ne=new A(B.x+v,0,1.2);return{group:t,themes:i,sections:a,entries:r,spawn:ne,themeStart(M){let D=a[M];return new A(B.x+D.headerX+1.2,0,1.2)},clamp(M){M.x=Math.min(B.x+l-.8,Math.max(B.x+c+.8,M.x)),M.z=Math.min(B.z+3.2,Math.max(B.z+Yt+1,M.z))},currentTheme(M){let D=M.x-B.x,X=a.find(I=>D>=I.x0-.6&&D<=I.x1+.6);return X?X.ti:-1},nearest(M){let D=M.x-B.x;if(Math.abs(D-v)<1.8)return{type:"exit",emoji:"\u{1F6AA}",action:"\uBC16\uC73C\uB85C \uB098\uAC00\uAE30"};if(Math.abs(D- -1.6)<2)return{type:"welcome",emoji:"\u{1F4DA}",action:"\uC804\uCCB4 \uC568\uBC94 \uBCF4\uAE30"};let X=s.find(F=>Math.abs(D-F.x)<1.3);if(X)return{type:"header",ti:X.ti,emoji:X.theme.emoji||"\u{1F4DA}",action:`${X.theme.title} \uC568\uBC94`};let I=null,$=1.75;for(let F of r){let z=Math.abs(D-F.x);z<$&&($=z,I=F)}return I?{type:"photo",entry:I,ti:I.ti,idx:I.idx,emoji:"\u{1F50D}",action:"\uD06C\uAC8C \uBCF4\uAE30"}:null},update(M,D,X){let I=X.x-B.x;for(let $ of r){let F=Math.abs(I-$.x);$.state==="idle"&&F<Mx&&q<3?j($):$.state==="done"&&F>bx&&Y($)}}}}function Sx(n,e,t,i,r,s){let a=e.split(" "),o="",l=i;for(let c of a){let h=o?o+" "+c:c;n.measureText(h).width>r&&o?(n.fillText(o,t,l),o=c,l+=s):o=h}o&&n.fillText(o,t,l)}var cc=window.FAMILY,kt=n=>document.querySelector(n),wx=kt("#phone"),At={w:1,h:1,left:0,top:0},d0=()=>At.w/At.h<.8,Tx=n=>new Promise(e=>setTimeout(e,n)),vt,yt,Cn,Qt,Qa,Bi,$e,Ht,gn,jr,_d=[],p0=[],ci=!1,Tt=null,a0=-2,Yr=1,fd=!1,ta=0,Ja=0,o0=0;function Md(){let n=Math.min(devicePixelRatio||1,si?1.75:1.5);return ta>=1&&(n=Math.min(n,1.25)),ta>=2&&(n=1),document.body.classList.contains("wide")&&(n=Math.min(n,1)),n}function Ax(){try{let n=vt.getContext(),e=n.getExtension("WEBGL_debug_renderer_info"),t=e?String(n.getParameter(e.UNMASKED_RENDERER_WEBGL)):"";return/Intel|Iris|UHD|HD Graphics|SwiftShader|llvmpipe|Mali-|Adreno \(TM\) [1-5]|PowerVR/i.test(t)}catch{return!1}}var li={outfit:"#8FB8DE",hair:"#5A3A2A",longHair:!1},ur="day",Ln=null,pc=new Zl,Rx=new A(16,34,14),V={pos:new A(0,0,31),vel:new A,yaw:Math.PI,y:0,vy:0,mode:"out",busy:!1,doorCooldown:0,target:null,via:[],pending:null,targetT:0,moveT:0,stuckT:0,swoopT:0,posing:null},Yn=new Set,ea={x:0,y:0},hr={x:-11,z:19,ang:.5},Cx=["family","mailbox","directions","campfire","question","calendar","poll","quiz","house","tree","photozone","museum"],m0=n=>{try{dispatchEvent(new CustomEvent("wv:visit",{detail:n}))}catch{}};async function f0({character:n,onProgress:e=()=>{}}={}){var a;n&&(li={...li,...n}),await Promise.race([Promise.all(['40px "Jua"','40px "Gowun Dodum"','40px "Gaegu"'].map(o=>document.fonts.load(o))),new Promise(o=>setTimeout(o,3e3))]),e(35),v0();let t=si&&(navigator.deviceMemory&&navigator.deviceMemory<=2||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4);vt=new Ha({antialias:!t,powerPreference:"high-performance"}),Yr=Md(),vt.setPixelRatio(Yr),vt.shadowMap.enabled=!0,vt.shadowMap.type=Kl,vt.outputColorSpace=Mt,kt("#app").appendChild(vt.domElement),vt.domElement.addEventListener("webglcontextlost",o=>{o.preventDefault(),fd=!0,et("\uD654\uBA74\uC744 \uB2E4\uC2DC \uADF8\uB9AC\uB294 \uC911\u2026")}),vt.domElement.addEventListener("webglcontextrestored",()=>{fd=!1,vt.setPixelRatio(Yr),vt.setSize(At.w,At.h),na()}),yt=new Fl,yt.fog=new Dl(zt.day.fog,50,150),Cn=new Kt(60,1,.1,900),Qa=new jl(zt.day.hemi,zt.day.ground,zt.day.hemiI),yt.add(Qa),Qt=new Yl(zt.day.sun,zt.day.sunI),Qt.castShadow=!0;let i=si?1024:1536;Qt.shadow.mapSize.set(i,i),Object.assign(Qt.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:90}),Qt.shadow.bias=-5e-4,Qt.shadow.normalBias=.03,yt.add(Qt,Qt.target),$e=e0(yt),Bi=jf(yt,(o,l)=>$e.colliders.some(c=>Math.hypot(o-c.x,l-c.z)<c.r+.8)||$e.boxes.some(c=>o>c.minX-.8&&o<c.maxX+.8&&l>c.minZ-.8&&l<c.maxZ+.8)),e(65),Ht=s0(yt),e(85),_d=[...Bi.colliders,...$e.colliders],p0=$e.boxes,l0(!1),$e.campfire.setCount(_0());let s=null;if(addEventListener("family:data",()=>{clearTimeout(s),s=setTimeout(()=>{l0(!1),$e.refresh()},80)}),addEventListener("family:read",()=>$e.houses.refresh()),addEventListener("family:heart",o=>{var l;return Px((l=o.detail)==null?void 0:l.to)}),addEventListener("family:water",o=>Ix(o.detail)),addEventListener("family:look",o=>{ud(o.detail||{}),$e.houses.refresh()}),addEventListener("family:me",()=>{ud(vi()),$e.refresh()}),jr=new de(new qr(.32,.48,24),new Ge({color:"#E07B39",transparent:!0,opacity:0,depthWrite:!1})),jr.rotation.x=-Math.PI/2,jr.position.y=.05,yt.add(jr),y0(),Fx(),Gx(),kt("#btn-shot").onclick=()=>uc(!1),(a=kt("#btn-tour"))==null||a.addEventListener("click",()=>Ni("\uD22C\uC5B4\uB97C \uBA48\uCDC4\uC5B4\uC694. \uB9C8\uC74C\uB300\uB85C \uB458\uB7EC\uBCF4\uC138\uC694")),addEventListener("resize",eo),document.addEventListener("visibilitychange",()=>{document.hidden||pc.getDelta()}),eo(),hc(Dx()),(t||Ax())&&b0(1),na(),E0(),cc.demoPhotos){let o=Ht.themes.flatMap(h=>h.photos),l=window.requestIdleCallback||(h=>setTimeout(h,120)),c=()=>{let h=o.shift();if(h){try{gr(h)}catch{}l(c)}};l(c)}return/debug/.test(location.hash)&&(window.__wv={goTo:o=>Sd($e.interactables.find(l=>l.id===o)),takePhoto:uc,enterMuseum:yc,exitMuseum:vc,cycleTime:yd,startTour:u0,stopTour:Ni,applyTime:hc,state:V,props:$e,flowerCount:()=>$e.flowerCount(),interact:o=>fc($e.interactables.find(l=>l.id===o)),npcVisible:o=>{var l;return!!((l=$e.houses.npc(o))!=null&&l.root.visible)},treeStage:()=>$e.familyTree.refresh().stage,current:()=>(Tt==null?void 0:Tt.id)||"",pos:()=>[V.pos.x,V.pos.z]}),{themes:Ht.themes,start:Lx,setCharacter:ud,enterMuseum:()=>yc(),letterSent:g0,takePhoto:o=>uc(!0,o),resize:()=>{eo(),na()},startTour:u0,stopTour:Ni,isTouring:()=>!!Ln,setTime:hc,getTime:()=>ur,cycleTime:yd}}function Lx({hint:n=!0}={}){ci=!0,V.swoopT=1.8,Ka=dc=0,Ye.saved()&&Ye.setEnabled(!0),n&&setTimeout(()=>et("\u{1F446} \uD654\uBA74\uC744 \uB04C\uBA74 \uAC77\uACE0, \uC774\uB984\uD45C\uB97C \uB204\uB974\uBA74 \uCC3E\uC544\uAC00\uC694",4200),900);let e=ur==="night"?"\u{1F319} \uBC24\uC5D0 \uC654\uB124\uC694. \uAC00\uB85C\uB4F1\uC744 \uCF1C \uB450\uC5C8\uC5B4\uC694":ur==="dusk"?"\u{1F307} \uB178\uC744 \uC9C0\uB294 \uB9C8\uC744\uC774\uC5D0\uC694. \uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694":null;e&&setTimeout(()=>et(e,3600),5600);let t=ls();t.length&&setTimeout(()=>{ji(["\u{1F382}","\u{1F389}","\u{1F388}","\u{1F497}","\u2728"]),Ye.sfx("birthday"),et(`\u{1F382} \uC624\uB298\uC740 ${t.map(i=>i.role||i.name).join(", ")} \uC0DD\uC77C\uC774\uC5D0\uC694! \uC9D1 \uC55E\uC5D0 \uCF00\uC774\uD06C\uAC00 \uC788\uC5B4\uC694`,4600)},2400)}function ud(n){li={...li,...n},gn&&y0()}var mc=new Set,gd=n=>n.id||`${n.name}|${n.time||""}`;function l0(n){at("letters").slice().reverse().forEach(e=>{let t=gd(e);mc.has(t)||(mc.add(t),$e.plantFlower(e,n))})}function g0(n){if(n&&mc.has(gd(n)))return;n&&mc.add(gd(n));let e=$e.plantFlower(n||{name:"\uC190\uB2D8",who:"guest"},!0);cr(yt,new A(V.pos.x,2.2+V.y,V.pos.z),10,"\u{1F48C}"),e&&V.mode==="out"&&!Ln&&(V.target=new A(ht.x-ht.r-1,0,ht.z+.6),V.via=Ed(V.pos,V.target),V.pending=null,V.targetT=12,V.moveT=0,setTimeout(()=>et("\u{1F337} \uBCF4\uB0B8 \uD3B8\uC9C0\uAC00 \uAC00\uC871 \uC815\uC6D0\uC5D0 \uAF43\uC73C\uB85C \uD53C\uC5C8\uC5B4\uC694",3200),500))}function Px(n){var t;let e=$e.houses.spot(n);!e||V.mode!=="out"||(cr(yt,new A(e.npcX,2.4,e.z),12),(t=$e.houses.npc(n))==null||t.wave(1.6))}function Ix({grew:n}={}){if($e.familyTree.refresh(),V.mode!=="out")return;let e=$e.familyTree.top,t=Math.hypot(V.pos.x-e.x,V.pos.z-e.z)<8,i=()=>{cr(yt,e.clone().setY(2.2),n?18:8,n?"\u2728":"\u{1F4A7}"),$e.familyTree.refresh()};if(t){gn.wave(1);for(let r=0;r<3;r++)setTimeout(()=>rc(yt,new A(V.pos.x,1.6,V.pos.z),e,"\u{1F4A7}",.6,r===2?i:null),r*140)}else i()}function y0(){gn&&yt.remove(gn.root),gn=ja({type:"player",outfit:li.outfit,hair:li.hair,longHair:!!li.longHair,glasses:!!li.glasses,hat:li.hat||"",kid:!!li.kid}),yt.add(gn.root)}function Dx(){let n=location.hash;if(/night/.test(n))return"night";if(/sunset|dusk/.test(n))return"dusk";if(/day|morning/.test(n))return"day";try{let t=localStorage.getItem("family-time");if(zt[t])return t}catch{}if(cc.skyMode&&zt[cc.skyMode])return cc.skyMode;let e=new Date(Hi().toLocaleString("en-US",{timeZone:"Asia/Seoul"})).getHours();return e>=6&&e<16?"day":e<19?"dusk":"night"}function bd(n){yt.fog.color.set(n.fog),Qt.color.set(n.sun),Qt.intensity=n.sunI,Qa.color.set(n.hemi),Qa.groundColor.set(n.ground),Qa.intensity=n.hemiI}function hc(n){ur=zt[n]?n:"day";let e=Bi.setTime(ur);return V.mode==="out"&&bd(e),ur}function yd(){let n=["day","dusk","night"],e=n[(n.indexOf(ur)+1)%n.length];hc(e);try{localStorage.setItem("family-time",e)}catch{}return et(e==="night"?"\u{1F319} \uBC24 \uB9C8\uC744\uC774\uC5D0\uC694. \uAC00\uB85C\uB4F1\uC774 \uCF1C\uC84C\uC5B4\uC694":e==="dusk"?"\u{1F307} \uB178\uC744\uC774 \uC9C0\uACE0 \uC788\uC5B4\uC694":"\u2600\uFE0F \uB2E4\uC2DC \uD658\uD55C \uB0AE\uC774\uC5D0\uC694"),e}function v0(){let n=wx.getBoundingClientRect();At.w=Math.max(1,n.width),At.h=Math.max(1,n.height),At.left=n.left,At.top=n.top}function eo(){v0(),Cn.aspect=At.w/At.h,Cn.fov=d0()?V.mode==="museum"?55:64:50,Cn.updateProjectionMatrix(),Yr=Md(),vt.setPixelRatio(Yr),vt.setSize(At.w,At.h)}function Fx(){addEventListener("keydown",a=>{bn()||/INPUT|TEXTAREA/.test(a.target.tagName)||document.body.classList.contains("reading")||(Yn.add(a.code),/Key[WASD]|Arrow/.test(a.code)&&(document.body.classList.add("moved"),Ni()),a.code==="Space"&&(c0(),a.preventDefault()),(a.code==="KeyE"||a.code==="Enter")&&fc(),a.code==="KeyH"&&h0(),a.code==="KeyN"&&yd())}),addEventListener("keyup",a=>Yn.delete(a.code)),addEventListener("blur",()=>Yn.clear());let n=vt.domElement,e=kt("#joy"),t=e.querySelector(".knob"),i=48,r=null;n.addEventListener("pointerdown",a=>{if(!(r||!ci)){r={id:a.pointerId,sx:a.clientX,sy:a.clientY,ax:a.clientX,ay:a.clientY,drag:!1,t:performance.now()};try{n.setPointerCapture(a.pointerId)}catch{}}}),n.addEventListener("pointermove",a=>{if(!r||a.pointerId!==r.id)return;if(!r.drag){if(Math.hypot(a.clientX-r.sx,a.clientY-r.sy)<10)return;r.drag=!0,V.target=null,V.pending=null,Ni(),e.classList.add("active"),document.body.classList.add("moved")}let o=a.clientX-r.ax,l=a.clientY-r.ay,c=Math.hypot(o,l);c>i&&(r.ax=a.clientX-o/c*i,r.ay=a.clientY-l/c*i,o=a.clientX-r.ax,l=a.clientY-r.ay),ea.x=o/i,ea.y=l/i,e.style.left=`${r.ax-At.left}px`,e.style.top=`${r.ay-At.top}px`,t.style.transform=`translate(${o}px, ${l}px)`});let s=a=>{if(!r||a.pointerId!==r.id)return;let o=!r.drag&&performance.now()-r.t<450&&a.type==="pointerup";r=null,ea.x=ea.y=0,e.classList.remove("active"),e.style.left=e.style.top="",t.style.transform="",o&&Bx(a.clientX,a.clientY)};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),dd(kt("#btn-action"),()=>fc()),dd(kt("#btn-jump"),()=>c0()),dd(kt("#btn-heart"),()=>h0())}function dd(n,e){let t=0;n.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0||(t=performance.now(),i.preventDefault(),e())}),n.addEventListener("click",()=>{performance.now()-t>500&&e()})}function Ed(n,e){let t=[],i=n;for(let r=0;r<3;r++){let s=Ux(i,e);if(!s)break;t.push(s),i=s}return t}function Ux(n,e){let t=e.x-n.x,i=e.z-n.z,r=t*t+i*i;if(r<1)return null;let s=null;for(let d of _d){if(d.r<.8)continue;let m=((d.x-n.x)*t+(d.z-n.z)*i)/r;if(m<=.02||m>=.98)continue;let f=n.x+t*m,y=n.z+i*m;Math.hypot(d.x-f,d.z-y)<d.r+oi+.3&&(!s||m<s.t)&&(s={c:d,t:m,px:f,pz:y})}if(!s)return null;let{c:a}=s,o=Math.sqrt(r),l=s.px-a.x,c=s.pz-a.z,h=Math.hypot(l,c);h<.001&&(l=-i/o,c=t/o,h=1);let u=a.r+oi+1.1;return new A(a.x+l/h*u,0,a.z+c/h*u)}function Sd(n){let e=V.pos.x-n.pos.x,t=V.pos.z-n.pos.z,i=Math.hypot(e,t)||1,r=Math.max(.5,n.r-.6);V.target=new A(n.pos.x+e/i*r,0,n.pos.z+t/i*r),V.via=V.mode==="out"?Ed(V.pos,V.target):[],V.pending=n,V.targetT=20,V.moveT=0,V.stuckT=0}function vd(n){jr.position.set(n.x,.05,n.z),Ja=1}var pd=new Jl,Nx=new Hn(new A(0,1,0),0);function Bx(n,e){if(bn()||V.busy)return;Ni();let t=new he((n-At.left)/At.w*2-1,-((e-At.top)/At.h)*2+1);if(pd.setFromCamera(t,Cn),V.mode==="out"){let r=pd.intersectObjects($e.interactables.map(s=>s.label))[0];if(r){let s=$e.interactables.find(a=>a.label===r.object);Sd(s),vd(s.pos),Qe(8);return}}let i=new A;pd.ray.intersectPlane(Nx,i)&&(V.target=i,V.via=V.mode==="out"?Ed(V.pos,i):[],V.pending=null,V.targetT=10,V.moveT=0,V.stuckT=0,vd(i))}var x0="family-potatoes",_0=()=>{try{return+localStorage.getItem(x0)||0}catch{return 0}};function Ox(n){if(n===1)return"\u{1F360} \uCCAB \uACE0\uAD6C\uB9C8\uB97C \uB123\uC5C8\uC5B4\uC694. \uB178\uB987\uB178\uB987 \uC775\uB294 \uC911\u2026";if(n%5===0)return`\u{1F360} \uBC8C\uC368 ${n}\uAC1C\uC9F8! \uC624\uB298 \uC800\uB141\uC740 \uAD70\uACE0\uAD6C\uB9C8 \uD30C\uD2F0 \u{1F389}`;let e=["\uD638\uD638 \uBD88\uC5B4 \uBA39\uC73C\uBA74 \uAFC0\uB9DB\uC774\uC5D0\uC694","\uAECD\uC9C8\uAE4C\uC9C0 \uB2EC\uCF64\uD558\uAC8C \uC775\uC5C8\uC5B4\uC694","\uBAA8\uB2E5\uBD88\uC774 \uB530\uB73B\uD574\uC694. \uC7A0\uAE50 \uC26C\uC5C8\uB2E4 \uAC00\uC694","\uD558\uB098\uB294 \uD560\uBA38\uB2C8 \uBAAB\uC73C\uB85C \uB0A8\uACA8 \uB458\uAC8C\uC694","\uD0C0\uB2E5\uD0C0\uB2E5, \uBD88\uAF43\uC774 \uCDA4\uC744 \uCDB0\uC694"];return`\u{1F360} ${e[Math.floor(Math.random()*e.length)]}`}var md={family:()=>Co(),directions:ya,question:()=>Ar(),calendar:()=>ba(),poll:()=>Lo(),quiz:va,mailbox:()=>Nn(g0),tree:()=>Po(),house:n=>{let e=$e.houses.npc(n.member);e&&n.member!==Me()&&(e.wave(2),cr(yt,new A(e.root.position.x,2.4,e.root.position.z),6)),setTimeout(()=>{!bn()&&V.mode==="out"&&xs(n.member)},n.member===Me()?0:450)},campfire:()=>{gn.wave(.8),Qe(30),$e.campfire.toss(yt,new A(V.pos.x,1.4+V.y,V.pos.z),()=>{let n=_0()+1;try{localStorage.setItem(x0,String(n))}catch{}$e.campfire.setCount(n),cr(yt,new A(0,2.2,4),6,"\u2728"),Ye.sfx("crackle"),et(Ox(n))})},photozone:()=>rn().some(n=>n.id!==Me())?Np():uc(!0,[]),museum:()=>yc()};function zx(){let n=V.pos;if(V.mode==="museum")return Ht.nearest(n);let e=null,t=1/0;for(let i of $e.interactables){let r=Math.hypot(n.x-i.pos.x,n.z-i.pos.z);r<i.r&&r<t&&(t=r,e=i)}return e}function fc(n=Tt){var t;if(V.busy||bn())return;if(!n){gn.wave(1.4);return}if(Qe(15),Ye.sfx("pop"),V.mode==="museum"){n.type==="exit"?vc():n.type==="welcome"?wr(Ht.themes):n.type==="header"?wr(Ht.themes,n.ti):n.type==="photo"&&Ro(Ht.themes,n.ti,n.idx);return}V.yaw=Math.atan2(n.pos.x-V.pos.x,n.pos.z-V.pos.z);let e=n.id.startsWith("house:")?"house":n.id;m0(e),(t=md[e])==null||t.call(md,n)}function kx(){var t,i,r;let n=kt("#btn-action"),e=Tt?(Tt.id||Tt.type)+((r=(i=(t=Tt.entry)==null?void 0:t.src)!=null?i:Tt.ti)!=null?r:""):"";n.dataset.key!==e&&(e&&!n.dataset.key&&(Qe(8),Ye.sfx("chime")),n.dataset.key=e,n.classList.toggle("ready",!!Tt),n.querySelector(".em").textContent=Tt?Tt.emoji:"\u{1F44B}",n.querySelector(".lb").textContent=Tt?Tt.action:"\uC778\uC0AC\uD558\uAE30")}function c0(){V.y<=.001&&!bn()&&!V.busy&&(V.vy=6.5,Ye.sfx("jump"))}function h0(){cr(yt,new A(V.pos.x,2.2+V.y,V.pos.z),8),gn.wave(1),Ye.sfx("heart"),V.mode==="out"&&(Tt!=null&&Tt.member)&&Tt.member!==Me()&&sh(Tt.member)}function u0(){!ci||V.mode!=="out"||V.busy||(Ln={i:0,waitT:.4},document.body.classList.add("touring"),et("\u{1F6B6} \uC790\uB3D9 \uD22C\uC5B4 \uC2DC\uC791! \uD654\uBA74\uC744 \uB04C\uBA74 \uC5B8\uC81C\uB4E0 \uBA48\uCDB0\uC694",3200))}function Ni(n){Ln&&(Ln=null,document.body.classList.remove("touring"),V.pending&&(V.target=null,V.pending=null),n&&et(n))}function Hx(){let n=Cx[Ln.i++];if(!n){Ni(),et("\u{1F389} \uD22C\uC5B4 \uB05D! \uC774\uC81C \uB9C8\uC74C\uB300\uB85C \uB458\uB7EC\uBCF4\uC138\uC694",3600),ji(),Ye.sfx("tada");return}let e=n==="house"?$e.interactables.find(t=>t.member&&t.member!==Me()):$e.interactables.find(t=>t.id===n);e&&(Sd(e),vd(e.pos),Ln.waitT=n==="campfire"?2.4:n==="house"?1.2:.9)}var gc=n=>new Promise(e=>{kt("#fade").classList.toggle("on",n),setTimeout(e,460)});function Gx(){let n=kt("#museum-bar");n.innerHTML="",Ht.themes.forEach((t,i)=>{let r=document.createElement("button");r.className="chip",r.dataset.ti=i,r.textContent=`${t.emoji} ${t.title}`,r.onclick=()=>{V.pos.copy(Ht.themeStart(i)),V.target=null,Qe(8),na()},n.appendChild(r)});let e=document.createElement("button");e.className="chip",e.textContent="\u{1F4DA} \uC804\uCCB4 \uC568\uBC94",e.onclick=()=>wr(Ht.themes),n.append(e),kt("#btn-exit").onclick=()=>vc()}var xd=()=>vc(!0);async function yc(n=-1){if(V.mode==="museum"||V.busy)return;let e=!!Ln;Ni(),m0("museum"),V.busy=!0,await gc(!0),V.mode="museum",Bi.group.visible=$e.group.visible=!1,Ht.group.visible=!0,Qt.castShadow=!1,bd(zt.day),V.pos.copy(n>=0?Ht.themeStart(n):Ht.spawn),V.vel.set(0,0,0),V.target=null,V.yaw=Math.PI/2,document.body.classList.add("in-museum"),eo(),na(),Xi(xd),await gc(!1),V.busy=!1,et(e?"\u{1F3C1} \uD22C\uC5B4\uC758 \uB9C8\uC9C0\uB9C9, \uC0AC\uC9C4\uAD00\uC774\uC5D0\uC694. \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC73C\uBA70 \uAD6C\uACBD\uD558\uC138\uC694":"\u{1F449} \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC73C\uBA70 \uC0AC\uC9C4\uC744 \uAD6C\uACBD\uD558\uC138\uC694",e?4200:2400)}async function vc(n=!1){if(V.mode==="museum"){if(V.busy){n&&Xi(xd);return}n||Er(xd),V.busy=!0,await gc(!0),V.mode="out",Bi.group.visible=$e.group.visible=!0,Ht.group.visible=!1,Qt.castShadow=vt.shadowMap.enabled,bd(zt[ur]),V.pos.set(Xr.x,0,Xr.z+2.4),V.vel.set(0,0,0),V.target=null,V.yaw=0,V.doorCooldown=1.5,document.body.classList.remove("in-museum"),eo(),na(),await gc(!1),V.busy=!1}}function Vx(n){let e=n.width,t=n.height,i=Math.round(e*.05),r=Math.round(e*.22),s=document.createElement("canvas");s.width=e+i*2,s.height=t+i+r;let a=s.getContext("2d");a.fillStyle="#FFF8EC",a.fillRect(0,0,s.width,s.height),a.drawImage(n,i,i),a.fillStyle="#B5552B",a.textAlign="center",a.font=`${Math.round(r*.32)}px "Jua", sans-serif`,a.fillText(Wt(),s.width/2,t+i+r*.45),a.fillStyle="#7C6A66",a.font=`${Math.round(r*.15)}px "Gowun Dodum", sans-serif`,a.fillText(`${ns(Hi()).date} \xB7 \uC6B0\uB9AC \uAC00\uC871 \uB9C8\uC744\uC5D0\uC11C`,s.width/2,t+i+r*.74);let o=document.createElement("canvas");o.width=Math.round(s.width*1.12),o.height=Math.round(s.height*1.1);let l=o.getContext("2d");l.fillStyle="#EAD7BB",l.fillRect(0,0,o.width,o.height),l.save(),l.translate(o.width/2,o.height/2),l.rotate(-.03),l.shadowColor="rgba(80,40,30,.3)",l.shadowBlur=e*.05,l.shadowOffsetY=e*.02,l.drawImage(s,-s.width/2,-s.height/2),l.restore(),l.fillStyle="rgba(255,236,170,.8)";for(let[c,h,u]of[[o.width*.09,o.height*.055,-.5],[o.width*.91,o.height*.055,.5]])l.save(),l.translate(c,h),l.rotate(u),l.fillRect(-e*.11,-e*.03,e*.22,e*.06),l.restore();return o}async function uc(n=!1,e=[]){if(V.busy||bn())return;let t=null;V.busy=!0;try{if(n){Ni(),V.target=null,V.pending=null;let o=Math.sin(hr.ang),l=Math.cos(hr.ang),c=Math.cos(hr.ang),h=-Math.sin(hr.ang),u=hr.x+o*.9,d=hr.z+l*.9;V.pos.set(u,0,d),V.vel.set(0,0,0),V.yaw=hr.ang,V.y=0,V.vy=0;let m=e.map(p=>$e.houses.npc(p)).filter(Boolean).slice(0,5),f=m.map(p=>({c:p,p:p.root.position.clone(),r:p.root.rotation.y,v:p.root.visible}));m.forEach((p,x)=>{let g=x%2===0?1:-1,v=Math.floor(x/2)+1,b=g*[0,.95,1.8,2.55][v],T=[0,0,-.45,-.9][v];p.root.position.set(u+c*b+o*T,0,d+h*b+l*T),p.root.rotation.y=hr.ang,p.head.rotation.y=0,p.root.visible=!0}),t=()=>f.forEach(p=>{p.c.root.position.copy(p.p),p.c.root.rotation.y=p.r,p.c.root.visible=p.v}),V.posing={x:u,z:d,nx:o,nz:l,back:m.length<=1?4.4:m.length<=3?6.2:7.6},gn.wave(3),m.forEach(p=>p.wave(3));let y=kt("#count");for(let p of["3","2","1"])y.textContent=p,y.classList.remove("show"),y.offsetWidth,y.classList.add("show"),Ye.sfx("pop"),Qe(8),await Tx(680);y.classList.remove("show"),y.textContent="",cr(yt,new A(u,2.4,d),10)}vt.render(yt,Cn);let i=vt.domElement;if(n&&i.height>i.width*1.3){let o=i.width,l=Math.round(o*1.25),c=Math.max(0,Math.min(i.height-l,Math.round(i.height*.5-l/2))),h=document.createElement("canvas");h.width=o,h.height=l,h.getContext("2d").drawImage(i,0,c,o,l,0,0,o,l),i=h}let r=Vx(i),s=r.toDataURL("image/jpeg",.9);Ye.sfx("shutter"),Qe(25),kt("#fade").style.background="#fff",kt("#fade").classList.add("on"),setTimeout(()=>{kt("#fade").classList.remove("on"),setTimeout(()=>kt("#fade").style.background="",450)},120),t==null||t(),t=null,V.posing=null;let a=/KAKAOTALK|Instagram|FBAN|FBAV|Line\//i.test(navigator.userAgent);bo("\uAC00\uC871\uC0AC\uC9C4",`
      <img src="${s}" style="width:100%;border-radius:14px;box-shadow:var(--shadow);-webkit-touch-callout:default" alt="\uAC00\uC871\uC0AC\uC9C4" />
      <p class="muted center">${a?"\uC0AC\uC9C4\uC744 <b>\uAE38\uAC8C \uB20C\uB7EC</b> \uC800\uC7A5\uD574 \uC8FC\uC138\uC694":"\uC0AC\uC9C4\uC744 <b>\uAE38\uAC8C \uB20C\uB7EC</b> \uC800\uC7A5\uD558\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694"}</p>
      <div class="btns">
        <button class="btn pink ph-share">\u{1F4E4} \uACF5\uC720\uD558\uAE30</button>
        <button class="btn ph-save">\u{1F4BE} \uC800\uC7A5\uD558\uAE30</button>
      </div>`,o=>{let l=null,c=null;r.toBlob(u=>{u&&(l=new File([u],"family-village-photo.jpg",{type:"image/jpeg"}),c=URL.createObjectURL(u))},"image/jpeg",.9);let h=()=>{if(a){et("\uC0AC\uC9C4\uC744 \uAE38\uAC8C \uB20C\uB7EC \uC800\uC7A5\uD574 \uC8FC\uC138\uC694");return}let u=document.createElement("a");u.href=c||s,u.download="family-village-photo.jpg",document.body.appendChild(u),u.click(),u.remove(),et("\u{1F4BE} \uC0AC\uC9C4\uC744 \uC800\uC7A5\uD588\uC5B4\uC694")};return o.querySelector(".ph-save").onclick=h,o.querySelector(".ph-share").onclick=async()=>{var u;if(l&&((u=navigator.canShare)!=null&&u.call(navigator,{files:[l]})))try{await navigator.share({files:[l],title:Wt()});return}catch(d){if((d==null?void 0:d.name)==="AbortError")return}h()},()=>{c&&URL.revokeObjectURL(c)}})}finally{t==null||t(),V.posing=null,V.busy=!1}}var oi=.45;function Wx(n){if(V.mode==="museum"){Ht.clamp(n);return}for(let t of _d){let i=n.x-t.x,r=n.z-t.z,s=Math.hypot(i,r),a=t.r+oi;s<a&&s>1e-4&&(n.x=t.x+i/s*a,n.z=t.z+r/s*a)}for(let t of p0){let i=Math.max(t.minX,Math.min(n.x,t.maxX)),r=Math.max(t.minZ,Math.min(n.z,t.maxZ)),s=n.x-i,a=n.z-r,o=Math.hypot(s,a);if(o>=oi)continue;if(o>1e-4){n.x=i+s/o*oi,n.z=r+a/o*oi;continue}let l=[[n.x-t.minX,"x",t.minX-oi],[t.maxX-n.x,"x",t.maxX+oi],[n.z-t.minZ,"z",t.minZ-oi],[t.maxZ-n.z,"z",t.maxZ+oi]].sort((c,h)=>c[0]-h[0])[0];n[l[1]]=l[2]}let e=Math.hypot(n.x,n.z);e>39&&(n.x*=39/e,n.z*=39/e)}var Za=new A;function qx(n){let e=0,t=0;if(!bn()&&!V.busy&&((Yn.has("KeyW")||Yn.has("ArrowUp"))&&(t-=1),(Yn.has("KeyS")||Yn.has("ArrowDown"))&&(t+=1),(Yn.has("KeyA")||Yn.has("ArrowLeft"))&&(e-=1),(Yn.has("KeyD")||Yn.has("ArrowRight"))&&(e+=1),e+=ea.x,t+=ea.y,(e||t)&&(V.target=null,V.pending=null),V.target)){Za.subVectors(V.target,V.pos),Za.y=0;let a=Za.length();V.targetT-=n,V.moveT+=n;let o=Math.hypot(V.vel.x,V.vel.z),l=V.pending,c;if(l){let h=Math.hypot(V.pos.x-l.pos.x,V.pos.z-l.pos.z);c=h<l.r-.2||h<l.r&&o<.6&&V.moveT>.5}else c=a<.35;if(V.stuckT=V.moveT>.5&&o<.5?V.stuckT+n:0,c||V.targetT<0||V.stuckT>.7){let h=l&&Math.hypot(V.pos.x-l.pos.x,V.pos.z-l.pos.z)<l.r;V.target=null,V.via=[],V.pending=null,V.stuckT=0,l&&(c||h)?fc(l):!c&&!Ln&&et("\uADF8\uCABD\uC740 \uB9C9\uD600 \uC788\uC5B4\uC694")}else{let h=V.via[0];if(h){let u=h.x-V.pos.x,d=h.z-V.pos.z,m=Math.hypot(u,d);m<.9?V.via.shift():(e=u/m,t=d/m)}V.via.length||(e=Za.x/a,t=Za.z/a)}}let i=Math.hypot(e,t);i>1&&(e/=i,t/=i);let r=V.mode==="museum"?5.2:6.4;V.vel.x=Di(V.vel.x,e*r,10,n),V.vel.z=Di(V.vel.z,t*r,10,n),V.pos.x+=V.vel.x*n,V.pos.z+=V.vel.z*n,Wx(V.pos);let s=Math.hypot(V.vel.x,V.vel.z);if(s>.3){let a=Math.atan2(V.vel.x,V.vel.z)-V.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),V.yaw+=a*Math.min(1,n*12)}return V.vy-=20*n,V.y=Math.max(0,V.y+V.vy*n),V.y===0&&(V.vy=0),gn.root.position.set(V.pos.x,V.y,V.pos.z),gn.root.rotation.y=V.yaw,s/r}var Fi=new A,Ui=new A,oc=new A,lc=new A;function M0(n,e,t=0){let i=V.pos,r=d0();if(V.posing){let s=V.posing;n.set(s.x+s.nx*s.back,1.6+s.back*.06,s.z+s.nz*s.back),e.set(s.x,1.25,s.z)}else if(ci)V.mode==="museum"?(n.set(i.x,r?4.1:3.6,r?9.6:8.4),e.set(i.x,r?2.45:2.7,-3.2)):r?(n.set(i.x,14.5,i.z+14.5),e.set(i.x,.6,i.z-3.5)):(n.set(i.x,10.5,i.z+13.5),e.set(i.x,1.2,i.z-1.5));else{let s=t*.08;n.set(Math.sin(s)*26,12+Math.sin(t*.3)*1.2,4+Math.cos(s)*26),e.set(0,2,-2)}}function na(){M0(Fi,Ui,pc.elapsedTime),Cn.position.copy(Fi),Cn.lookAt(Ui)}function $x(n,e){M0(oc,lc,e);let t=V.swoopT>0?2.4:5,i=V.swoopT>0?2.8:6;V.swoopT>0&&(V.swoopT-=n),Fi.x=Di(Fi.x,oc.x,t,n),Fi.y=Di(Fi.y,oc.y,t,n),Fi.z=Di(Fi.z,oc.z,t,n),Ui.x=Di(Ui.x,lc.x,i,n),Ui.y=Di(Ui.y,lc.y,i,n),Ui.z=Di(Ui.z,lc.z,i,n),Cn.position.copy(Fi),Cn.lookAt(Ui),Bi.sky.position.copy(Cn.position)}var Ka=0,dc=0,Xx=0;function b0(n){ta=n,Yr=Md(),vt.setPixelRatio(Yr),vt.setSize(At.w,At.h),n>=1&&Bi.setLite(1),n>=2&&vt.shadowMap.enabled&&(vt.shadowMap.enabled=!1,Qt.castShadow=!1,yt.traverse(e=>{e.material&&(e.material.needsUpdate=!0)})),n>=3&&Bi.setLite(2)}function jx(n){if(!ci||(Ka+=n,dc++,Ka<2.5))return;let e=Ka/dc;Ka=dc=0,e>1/32&&ta<3?b0(ta+1):ta>=3&&e>1/18&&++Xx===2&&et('\u{1F4D6} \uD734\uB300\uD3F0\uC774 \uD798\uB4E4\uC5B4\uD558\uBA74 \u2630 \uBA54\uB274\uC758 "\uAE00\uB85C \uBCF4\uAE30"\uB85C \uD3B8\uD558\uAC8C \uBCF4\uC138\uC694',4800)}function E0(){var i;if(requestAnimationFrame(E0),o0++,!ci&&o0%2)return;let n=Math.min(pc.getDelta(),.05),e=pc.elapsedTime;if(fd||document.hidden||bn()||document.body.classList.contains("reading"))return;jx(n);let t=ci?qx(n):0;if(gn.animate(n,t,e),V.mode==="out"){Bi.update(n,e,V.pos),$e.update(n,e,V.pos,!!V.posing),Qt.position.copy(V.pos).add(Rx),Qt.target.position.copy(V.pos);for(let r of $e.interactables){let s=Math.hypot(V.pos.x-r.pos.x,V.pos.z-r.pos.z);r.label.material.opacity=Math.max(.3,Math.min(1,1.6-s/22))}V.doorCooldown-=n,ci&&V.doorCooldown<0&&!V.busy&&V.vel.z<-1&&Math.hypot(V.pos.x-Xr.x,V.pos.z-Xr.z)<1.1&&yc(),Ln&&ci&&!V.busy&&!V.target&&(Ln.waitT-=n,Ln.waitT<=0&&Hx())}else{Ht.update(n,e,V.pos);let r=Ht.currentTheme(V.pos);r!==a0&&(a0=r,document.querySelectorAll("#museum-bar .chip[data-ti]").forEach(s=>s.classList.toggle("on",+s.dataset.ti===r)),(i=document.querySelector("#museum-bar .chip.on"))==null||i.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}))}if(Xf(n),Ja>0){Ja-=n*1.3;let r=1-Math.max(0,Ja);jr.scale.setScalar(1+r*.9),jr.material.opacity=Math.max(0,Ja)}Tt=ci&&!V.posing?zx():null,kx(),$x(n,e),vt.render(yt,Cn)}var Zx=window.FAMILY,S0=n=>document.querySelector(n),to=[],Td=null,w0=()=>document.body.classList.contains("reading"),Jx=[["family","\u{1F3E1} \uAC00\uC871"],["question","\u{1F4AC} \uC9C8\uBB38"],["mailbox","\u2709\uFE0F \uD3B8\uC9C0"],["calendar","\u{1F4C5} \uB2EC\uB825"],["poll","\u{1F5F3}\uFE0F \uD22C\uD45C"],["tree","\u{1F331} \uB098\uBB34"],["album","\u{1F5BC}\uFE0F \uC0AC\uC9C4"],["quiz","\u2753 \uD034\uC988"],["directions","\u{1F5FA}\uFE0F \uBAA8\uC774\uB294 \uACF3"]];function Oi(n,e,t,i,r=""){return`
    <section class="tv-sec" data-sec="${n}" aria-labelledby="tv-h-${n}">
      <h2 class="tv-h" id="tv-h-${n}"><span aria-hidden="true">${e}</span>${t}</h2>
      ${r?`<p class="muted tv-sub">${r}</p>`:""}
      <div class="tv-body" data-mount="${n}">${i.html}</div>
    </section>`}function T0({canPlay:n=!1,onPlay:e,onClose:t,onSent:i,section:r}={}){var h;if(w0()){r&&wd(r);return}let s=S0("#textview"),a=is(),o=Wi(),l={family:rh({hero:!1}),question:ah(Ne(),{embedded:!0}),mailbox:So(i,{onBack:Mn}),calendar:oh(),poll:lh(),tree:ch(),album:Ao(a),quiz:To(),directions:wo()},c=n?'<button class="btn-primary tv-play">\u{1F3E1} 3D \uB9C8\uC744\uC5D0\uC11C \uAD6C\uACBD\uD558\uAE30</button>':"";if(s.innerHTML=`
    <div class="tv-top">
      <button class="tv-back" ${n?"":"hidden"} aria-label="3D \uB9C8\uC744\uB85C \uB3CC\uC544\uAC00\uAE30">\u{1F3E1} \uB9C8\uC744\uB85C</button>
      <div class="tv-chips" role="navigation" aria-label="\uAE00\uB85C \uBCF4\uAE30 \uCC28\uB840">
        ${Jx.map(([u,d])=>`<button class="chip" data-go="${u}">${d}</button>`).join("")}
      </div>
      <button class="fs-toggle tv-fs" aria-label="${_a()?"\uAE00\uC790 \uC791\uAC8C":"\uAE00\uC790 \uD06C\uAC8C"}">${_a()?"\uAC00-":"\uAC00+"}</button>
    </div>
    <div class="tv-inner">
      <header class="tv-hero">
        <div class="en">FAMILY VILLAGE</div>
        <div class="tv-names">${De(Wt())}</div>
        ${o>0?`<div class="intro-dday">\uD568\uAED8\uD55C \uC9C0 ${o.toLocaleString()}\uC77C\uC9F8</div>`:""}
        ${c}
        <p class="muted tv-hint">${n?"\uAC8C\uC784\uC774 \uC5B4\uB824\uC6B0\uBA74 \uADF8\uB300\uB85C \uC544\uB798\uB85C \uB0B4\uB824\uC11C \uBCF4\uC138\uC694":"\uC544\uB798\uB85C \uB0B4\uB9AC\uBA74\uC11C \uCC9C\uCC9C\uD788 \uBCF4\uC138\uC694"}</p>
      </header>
      ${Oi("family","\u{1F3E1}","\uC6B0\uB9AC \uAC00\uC871",l.family)}
      ${Oi("question","\u{1F4AC}","\uC624\uB298\uC758 \uC9C8\uBB38",l.question,"\uB0B4\uAC00 \uB2F5\uD558\uBA74 \uAC00\uC871\uC758 \uB2F5\uC774 \uC5F4\uB824\uC694")}
      ${Oi("mailbox","\u2709\uFE0F","\uC548\uBD80 \uC6B0\uCCB4\uD1B5",l.mailbox)}
      ${Oi("calendar","\u{1F4C5}","\uAC00\uC871 \uB2EC\uB825",l.calendar)}
      ${Oi("poll","\u{1F5F3}\uFE0F","\uAC00\uC871 \uD22C\uD45C\uD568",l.poll)}
      ${Oi("tree","\u{1F331}","\uD568\uAED8 \uD0A4\uC6B0\uB294 \uB098\uBB34",l.tree)}
      ${Oi("album","\u{1F5BC}\uFE0F",((h=Zx.museum)==null?void 0:h.title)||"\uAC00\uC871 \uC0AC\uC9C4\uAD00",l.album,"\uC0AC\uC9C4\uC744 \uB204\uB974\uBA74 \uD06C\uAC8C \uBCFC \uC218 \uC788\uC5B4\uC694")}
      ${Oi("quiz","\u2753","\uAC00\uC871 \uD034\uC988",l.quiz)}
      ${Oi("directions","\u{1F5FA}\uFE0F","\uBAA8\uC774\uB294 \uACF3",l.directions)}
      <footer class="tv-foot">
        <div class="btns" style="justify-content:center">
          <button class="btn tv-share">\u{1F517} \uB9C8\uC744 \uC8FC\uC18C \uBCF4\uB0B4\uAE30</button>
          ${n?'<button class="btn pink tv-play">\u{1F3E1} \uB9C8\uC744\uB85C \uB4E4\uC5B4\uAC00\uAE30</button>':""}
        </div>
        <p style="margin-top:18px">${De(Wt())} \xB7 \uC6B0\uB9AC \uAC00\uC871 \uB9C8\uC744</p>
      </footer>
    </div>`,to=[],Object.entries(l).forEach(([u,d])=>{var y;let m=s.querySelector(`[data-mount="${u}"]`),f=(y=d.mount)==null?void 0:y.call(d,m);typeof f=="function"&&to.push(f)}),s.querySelectorAll("[data-go]").forEach(u=>u.onclick=()=>wd(u.dataset.go)),s.querySelectorAll(".tv-back, .tv-play").forEach(u=>u.onclick=()=>{e==null||e(),Kx()}),s.querySelectorAll(".tv-share").forEach(u=>u.onclick=xa),"IntersectionObserver"in window){let u=[...s.querySelectorAll("[data-go]")],d=new IntersectionObserver(m=>m.forEach(f=>{var y;f.isIntersecting&&(u.forEach(p=>p.classList.toggle("on",p.dataset.go===f.target.dataset.sec)),(y=u.find(p=>p.classList.contains("on")))==null||y.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"}))}),{root:s,rootMargin:"-35% 0px -55% 0px"});s.querySelectorAll(".tv-sec").forEach(m=>d.observe(m)),to.push(()=>d.disconnect())}Td={onClose:t},document.body.classList.add("reading"),s.scrollTop=0,Xi(Ad),r&&setTimeout(()=>wd(r,!1),60)}function wd(n,e=!0){var t;(t=S0("#textview").querySelector(`[data-sec="${n}"]`))==null||t.scrollIntoView({behavior:e?"smooth":"auto",block:"start"})}function Ad(){var e;document.body.classList.remove("reading"),to.forEach(t=>t()),to=[];let n=Td;Td=null,(e=n==null?void 0:n.onClose)==null||e.call(n)}function Kx(){w0()&&(Ad(),Er(Ad))}var zi=window.FAMILY,Re=n=>document.querySelector(n),Qx=[[10,"\uB9C8\uC744\uC744 \uC9D3\uB294 \uC911\u2026 \u{1F3E1}"],[35,"\uAF43\uC744 \uC2EC\uB294 \uC911\u2026 \u{1F337}"],[65,"\uC9D1\uC5D0 \uBD88\uC744 \uCF1C\uB294 \uC911\u2026 \u{1F4A1}"],[85,"\uC0AC\uC9C4\uC744 \uAC70\uB294 \uC911\u2026 \u{1F5BC}\uFE0F"]],io=!1,Cd=n=>{Re("#loadbar").style.width=n+"%";let e=Re("#btn-enter");if(!io){let t=Qx.filter(([i])=>n>=i).pop();t&&(e.textContent=t[1])}};["gesturestart","gesturechange"].forEach(n=>document.addEventListener(n,e=>e.preventDefault()));if(window.visualViewport){let n=window.visualViewport,e=()=>document.documentElement.style.setProperty("--kb",`${Math.max(0,Math.round(innerHeight-n.height-n.offsetTop))}px`);n.addEventListener("resize",e),n.addEventListener("scroll",e)}var Ld=Wt();document.title=Ld;Re("#i-title").textContent=Ld;Re("#h-names").textContent=Ld;var xc=Wi();Re("#i-sub").innerHTML=`${ns().date}${xc>0?`<br>\uD568\uAED8\uD55C \uC9C0 <b>${xc.toLocaleString()}\uC77C\uC9F8</b>`:""}`;Re("#h-dday").textContent=xc>0?`${xc.toLocaleString()}\uC77C\uC9F8`:"";var A0=yp();if(A0.length){let n=Re("#today");n.hidden=!1,n.querySelector(".t-now").textContent=A0.map(e=>`${e.emoji||"\u{1F4CC}"} \uC624\uB298\uC740 ${e.kind==="birthday"?`${sn(e.member)} \uC0DD\uC77C`:e.title}\uC774\uC5D0\uC694!`).join("  ")}Kd()&&(Re("#demo-badge").hidden=!1);th();as()&&Fn();var Be=null,no=!1;function Jr(){let n=as(),e=Me();if(Re("#lock").hidden=n,Re("#who").hidden=!n||!!e,Re("#me-line").hidden=!n||!e,Re(".btn-row").hidden=!n,n&&!e&&(Re("#who-grid").innerHTML=Io("")),F0(),n&&e){let i=vi();Re("#me-avatar").innerHTML=Eo(i,"big"),Re("#me-name").textContent=ca()?"\uC190\uB2D8\uC73C\uB85C \uAD6C\uACBD\uD574\uC694":`${sn(e)}(\uC73C)\uB85C \uB4E4\uC5B4\uAC00\uC694`,Re("#me-sub").textContent=ca()?"\uD3B8\uC9C0\uB294 \uC4F8 \uC218 \uC788\uACE0, \uC9C8\uBB38\xB7\uD558\uD2B8\xB7\uBB3C \uC8FC\uAE30\uB294 \uAC00\uC871\uB9CC \uD574\uC694":"\uD3B8\uC9C0\xB7\uB2F5\xB7\uD558\uD2B8\uAC00 \uC774 \uC774\uB984\uC73C\uB85C \uB0A8\uC544\uC694"}let t=Re("#btn-enter");io&&(t.disabled=!n||!e,t.textContent=n?e?Be?"\uB9C8\uC744\uC5D0 \uB4E4\uC5B4\uAC00\uAE30 \u{1F3E1}":"\u{1F4D6} \uAE00\uB85C \uBCF4\uAE30":"\u{1F64B} \uB098\uB97C \uACE8\uB77C \uC8FC\uC138\uC694":"\u{1F512} \uAC00\uC871 \uC554\uD638\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694")}function F0(){document.querySelectorAll("#who-grid .who-btn").forEach(n=>n.onclick=()=>{Qe(10),Ye.sfx("pop"),go(n.dataset.id)})}addEventListener("family:me",()=>{if(ca())try{localStorage.getItem("family-guest-look")||localStorage.setItem("family-guest-look",JSON.stringify(vi()))}catch{}Be==null||Be.setCharacter(vi()),Jr()});Re("#btn-change").onclick=()=>{Re("#who-grid").innerHTML=Io(Me()),F0(),Re("#who").hidden=!1,Re("#me-line").hidden=!0};var P0,R0=(P0=zi.lock)!=null&&P0.hint?`\uD78C\uD2B8: ${zi.lock.hint}`:"",I0;Re("#lock-hint").textContent=tn()?R0:[R0,(I0=zi.lock)!=null&&I0.demoCode?`(\uBBF8\uB9AC\uBCF4\uAE30 \uC554\uD638 ${zi.lock.demoCode})`:""].filter(Boolean).join(" ");Re("#lock").onsubmit=async n=>{n.preventDefault();let e=Re("#lock-in"),t=Re("#lock-btn");t.disabled=!0,t.textContent="\uD655\uC778 \uC911\u2026";let i=await tp(e.value);if(t.disabled=!1,t.textContent="\uC5F4\uAE30",i.ok){Qe(20),Ye.sfx("chime"),Fn({force:!0}),Jr();return}e.select(),Qe(60),Re("#lock").classList.remove("shake"),Re("#lock").offsetWidth,Re("#lock").classList.add("shake"),et(i.error==="network"?"\uC5F0\uACB0\uC774 \uC548 \uB3FC\uC694. \uC7A0\uC2DC \uB4A4 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694":"\uC554\uD638\uAC00 \uB2EC\uB77C\uC694 \u{1F512}")};addEventListener("family:locked",()=>{et("\uAC00\uC871 \uC554\uD638\uAC00 \uBC14\uB00C\uC5C8\uC5B4\uC694. \uB2E4\uC2DC \uB4E4\uC5B4\uC640 \uC8FC\uC138\uC694",4e3),no||Jr()});Nc()||(Re("#lock").hidden=!0);Jr();Cd(10);var U0="family-visited",Zr=new Set;try{Zr=new Set(JSON.parse(localStorage.getItem(U0)||"[]"))}catch{}function N0(){document.querySelectorAll("#visits li").forEach(i=>i.classList.toggle("done",Zr.has(i.dataset.id)));let n=Zr.size,e=document.querySelectorAll("#visits li").length,t=Re("#visit-count");t&&(t.textContent=n?`${n}/${e}`:"")}addEventListener("wv:visit",n=>{if(!Zr.has(n.detail)){Zr.add(n.detail);try{localStorage.setItem(U0,JSON.stringify([...Zr]))}catch{}N0(),Zr.size===document.querySelectorAll("#visits li").length&&setTimeout(()=>{et("\u{1F3C5} \uB9C8\uC744\uC758 \uBAA8\uB4E0 \uACF3\uC744 \uB458\uB7EC\uBD24\uC5B4\uC694!",3600),ji()},800)}});N0();var D0;(D0=Re("#btn-wide"))==null||D0.addEventListener("click",()=>{let n=document.body.classList.toggle("wide");Re("#btn-wide").textContent=n?"\u{1F4F1} \uD734\uB300\uD3F0 \uBCF4\uAE30":"\u{1F5A5} \uB113\uAC8C \uBCF4\uAE30",Be==null||Be.resize()});function Rd(){let n=Me(),e=Ne();!xt()||hp(n,e)||nn("visits",{id:`${n}-${e}`,who:n,day:e})}var C0=!1;function L0(n=4800){if(C0||!xt())return;let e=Kn().length;if(!e)return;C0=!0;let t=0,i=()=>{if(bn()&&t++<20){setTimeout(i,1500);return}et(`\u{1F48C} \uB098\uC5D0\uAC8C \uC628 \uD3B8\uC9C0\uAC00 ${Kn().length||e}\uD1B5 \uC788\uC5B4\uC694 \xB7 \uB0B4 \uC9D1 \uC6B0\uCCB4\uD1B5\uC5D0 \uAE43\uBC1C\uC774 \uC62C\uB77C\uAC14\uC5B4\uC694`,4200)};setTimeout(i,n)}function e_(){var n;try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return t?((n=t.getExtension("WEBGL_lose_context"))==null||n.loseContext(),!0):!1}catch{return!1}}async function t_(){var h;let n=setTimeout(()=>{io||(io=!0,Re("#intro-help").textContent="\uB9C8\uC744\uC774 \uB2A6\uAC8C \uC5F4\uB9AC\uACE0 \uC788\uC5B4\uC694. \uBA3C\uC800 \uAE00\uB85C \uBCF4\uAE30\uB85C \uB458\uB7EC\uBD10 \uC8FC\uC138\uC694",Jr(),Re("#btn-enter").onclick=()=>s())},9e3);if(e_())try{Be=await f0({character:vi(),onProgress:Cd})}catch(u){console.error("3D \uB9C8\uC744\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD574 \uAE00\uB85C \uBCF4\uAE30\uB85C \uC804\uD658\uD569\uB2C8\uB2E4",u),Be=null,Re("#app").innerHTML=""}clearTimeout(n),Be||document.body.classList.add("no3d"),Cd(100),io=!0,Qn.onSent=(Be==null?void 0:Be.letterSent)||null,Qn.takePhoto=(Be==null?void 0:Be.takePhoto)||null;let e=Re("#bgm"),t=Re("#btn-sound"),i=()=>{t.textContent=(zi.bgm?!e.paused:Ye.enabled)?"\u{1F50A}":"\u{1F507}"};function r(){no||!Be||!as()||!Me()||(no=!0,document.body.classList.add("playing"),Re("#intro").classList.add("hide"),zi.bgm&&e.play().then(i).catch(()=>{}),Be.start({hint:!0}),i(),Rd(),L0(),!zi.bgm&&!Ye.saved()&&setTimeout(()=>et("\u{1F50A} \uC624\uB978\uCABD \uC704 \uBC84\uD2BC\uC73C\uB85C \uC624\uB974\uACE8 \uC18C\uB9AC\uB97C \uCF24 \uC218 \uC788\uC5B4\uC694",3400),9500))}addEventListener("family:data",()=>{no&&(Rd(),L0(1200))});function s(u){if(!as()){et("\u{1F512} \uAC00\uC871 \uC554\uD638\uB97C \uBA3C\uC800 \uB123\uC5B4 \uC8FC\uC138\uC694");return}Re("#intro").classList.add("hide"),Rd(),T0({canPlay:!!Be&&!!Me(),onPlay:r,onSent:Be==null?void 0:Be.letterSent,onClose:()=>{no||Re("#intro").classList.remove("hide")},section:u})}let a=Be?Be.themes:is(),o=()=>Be==null?void 0:Be.setCharacter(vi()),l=()=>[{emoji:"\u{1F3E1}",label:"\uC6B0\uB9AC \uAC00\uC871",go:Co},{emoji:"\u{1F4AC}",label:"\uC624\uB298\uC758 \uC9C8\uBB38",go:()=>Ar()},{emoji:"\u2709\uFE0F",label:"\uC548\uBD80 \uC6B0\uCCB4\uD1B5",go:()=>Nn(Be==null?void 0:Be.letterSent)},{emoji:"\u{1F4C5}",label:"\uAC00\uC871 \uB2EC\uB825",go:ba},{emoji:"\u{1F5F3}\uFE0F",label:"\uD22C\uD45C\uD568",go:Lo},{emoji:"\u{1F331}",label:"\uC6B0\uB9AC \uAC00\uC871 \uB098\uBB34",go:Po},Be?{emoji:"\u{1F5BC}\uFE0F",label:"\uAC00\uC871 \uC0AC\uC9C4\uAD00",go:()=>{Mn(),Be.enterMuseum()}}:{emoji:"\u{1F4DA}",label:"\uC804\uCCB4 \uC568\uBC94",go:()=>wr(a)},{emoji:"\u2753",label:"\uAC00\uC871 \uD034\uC988",go:va},{emoji:"\u{1F5FA}\uFE0F",label:"\uBAA8\uC774\uB294 \uACF3",go:ya},...xt()?[{emoji:"\u{1F3E0}",label:"\uB0B4 \uC9D1",go:()=>xs(Me())}]:[],{emoji:"\u{1F3A8}",label:"\uCE90\uB9AD\uD130 \uAFB8\uBBF8\uAE30",go:hh},{emoji:"\u{1F64B}",label:"\uB098\uB294 \uB204\uAD6C?",go:()=>Up(o)},...Be?[{emoji:"\u{1F6B6}",label:"\uC790\uB3D9 \uD22C\uC5B4",go:()=>{Mn(),Be.startTour()}},{emoji:"\u{1F319}",label:"\uB0AE \xB7 \uBC24 \uBC14\uAFB8\uAE30",go:()=>{Mn(),Be.cycleTime()}}]:[]];Re("#btn-menu").onclick=()=>eh(l()),Re("#btn-text-hud").onclick=()=>s(),(h=Re("#btn-desk-text"))==null||h.addEventListener("click",()=>s()),zi.bgm?(e.src=zi.bgm,t.hidden=!1,t.onclick=()=>{e.paused?e.play().then(i).catch(()=>{}):(e.pause(),i())}):Be&&(t.hidden=!1,i(),t.onclick=()=>{let u=Ye.setEnabled(!Ye.enabled);i(),et(u?"\u{1F50A} \uC624\uB974\uACE8 \uBC30\uACBD\uC74C\uC744 \uCF30\uC5B4\uC694":"\u{1F507} \uC18C\uB9AC\uB97C \uAED0\uC5B4\uC694")});let c=Re("#btn-enter");c.onclick=()=>Be?r():s(),Re("#btn-text").onclick=()=>s(),Re("#btn-tour-start").onclick=()=>{if(!Be){s();return}if(!as()||!Me()){Jr();return}r(),setTimeout(()=>Be.startTour(),1400)},Jr()}t_();})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
