(()=>{var Ag=Object.defineProperty;var Rg=(n,e)=>{for(var t in e)Ag(n,t,{get:e[t],enumerable:!0})};var Ts={};Rg(Ts,{albumView:()=>Vo,avatarHTML:()=>zo,closeModal:()=>dn,confetti:()=>Ki,copy:()=>vh,directionsView:()=>Ho,esc:()=>Fe,initUI:()=>Mh,isBigFont:()=>La,isOverlayOpen:()=>wn,letterView:()=>im,mailboxView:()=>ko,menuView:()=>rm,onData:()=>_h,openLightbox:()=>Wo,openModal:()=>Oo,openView:()=>Cr,paintStatus:()=>xh,popBack:()=>Rr,pushBack:()=>Ji,quizView:()=>Go,replyView:()=>nm,setBigFont:()=>gh,share:()=>Ca,showAlbum:()=>Lr,showDirections:()=>Aa,showLetter:()=>Ta,showMailbox:()=>kn,showMenu:()=>Eh,showQuiz:()=>Ra,toast:()=>et});function Cg(n){let e=1779033703^n.length;for(let i=0;i<n.length;i++)e=Math.imul(e^n.charCodeAt(i),3432918353),e=e<<13|e>>>19;let t=e>>>0;return()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var Lg='"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "Android Emoji", sans-serif',Mp=[["#9CD3F2","#E6F5FF"],["#FFB88C","#FFE7C9"],["#F7C4D0","#FFF3F6"],["#2B2D5C","#6D5C9E"],["#C7E8F7","#FFECD8"]],jc=["#8FB8DE","#F4B8C0","#F7D58B","#A8D08D","#C9B3E6","#F9C59E","#E88A98","#7FC8C2"],Yc=["#5A3A2A","#3A2A24","#7A5238","#1E1A22","#C98A5B"],Pg={trips:[{kind:"hills",sky:0,who:"family",n:4,props:["\u{1F3EF}","\u{1F4F8}"]},{kind:"sea",sky:0,who:"kidparent",props:["\u{1F30A}","\u{1F41A}"]},{kind:"city",sky:4,who:"family",n:4,props:["\u{1F697}","\u{1F36A}"]},{kind:"park",sky:0,who:"family",n:5,props:["\u{1F34A}","\u{1F34A}"]},{kind:"hills",sky:3,who:"family",n:4,props:["\u26FA","\u2B50"]},{kind:"snow",sky:4,who:"kid",props:["\u{1F6F7}","\u2744\uFE0F"]},{kind:"hills",sky:1,who:"family",n:3,props:["\u{1F682}","\u{1F359}"]},{kind:"hills",sky:4,who:"family",n:5,props:["\u2708\uFE0F","\u{1F5FA}\uFE0F"]}],holidays:[{kind:"room",sky:4,who:"family",n:5,props:["\u{1F9E7}","\u{1F647}"]},{kind:"room",sky:1,who:"family",n:4,props:["\u{1F315}","\u{1F361}"]},{kind:"room",sky:2,who:"family",n:7,props:["\u{1F382}","\u{1F389}"]},{kind:"room",sky:4,who:"baby",props:["\u{1F382}","\u{1F388}"]},{kind:"room",sky:3,who:"family",n:4,props:["\u{1F382}","\u{1F56F}\uFE0F"]},{kind:"room",sky:3,who:"family",n:5,props:["\u{1F384}","\u{1F381}"]},{kind:"room",sky:2,who:"family",n:4,props:["\u{1F389}","\u{1F490}"]},{kind:"room",sky:4,who:"family",n:6,props:["\u{1F3B2}","\u{1F962}"]}],growing:[{kind:"room",sky:4,who:"baby",props:["\u{1F463}","\u{1F9F8}"]},{kind:"city",sky:0,who:"kid",props:["\u{1F392}","\u{1F3EB}"]},{kind:"park",sky:0,who:"kidparent",props:["\u{1F6B2}","\u{1F333}"]},{kind:"park",sky:0,who:"kid",props:["\u{1F3C3}","\u{1F947}"]},{kind:"city",sky:4,who:"kidparent",props:["\u{1F393}","\u{1F490}"]},{kind:"city",sky:0,who:"kid",props:["\u{1F454}","\u{1F3EB}"]},{kind:"city",sky:3,who:"kid",props:["\u{1F389}","\u{1F4DD}"]},{kind:"city",sky:4,who:"kid",props:["\u{1F4BC}","\u2615"]}],everyday:[{kind:"room",sky:4,who:"family",n:4,props:["\u{1F373}","\u{1F95B}"]},{kind:"room",sky:1,who:"kid",props:["\u{1F634}","\u{1F4FA}"]},{kind:"park",sky:1,who:"family",n:3,props:["\u{1F415}","\u{1F307}"]},{kind:"room",sky:4,who:"family",n:5,props:["\u{1F96C}","\u{1F336}\uFE0F"]},{kind:"park",sky:2,who:"kidparent",props:["\u{1F4A0}","\u{1F4A0}"]},{kind:"room",sky:3,who:"family",n:4,props:["\u{1F349}","\u{1F4AC}"]}],old:[{kind:"room",sky:2,who:"wedding",props:["\u{1F490}","\u2728"]},{kind:"cafe",sky:4,who:"couple",props:["\u2615","\u{1F39E}\uFE0F"]},{kind:"city",sky:0,who:"couple",props:["\u{1F3E0}","\u{1F331}"]},{kind:"room",sky:4,who:"kidparent",props:["\u{1F476}","\u{1F37C}"]},{kind:"hills",sky:0,who:"family",n:3,props:["\u{1F3E1}","\u{1F413}"]},{kind:"park",sky:4,who:"family",n:6,props:["\u{1F4F7}"]}]},bp=["park","hills","room","sea","city"],Sp=["couple","wedding","kid","family"];function vi(n,e,t,i,r,s){s=Math.min(s,i/2,r/2),n.beginPath(),n.moveTo(e+s,t),n.arcTo(e+i,t,e+i,t+r,s),n.arcTo(e+i,t+r,e,t+r,s),n.arcTo(e,t+r,e,t,s),n.arcTo(e,t,e+i,t,s),n.closePath()}function yt(n,e,t,i,r){n.fillStyle=r,n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fill()}function xi(n,e,t,i,r,s=1){n.save(),n.globalAlpha=s,n.font=`${r}px ${Lg}`,n.textAlign="center",n.textBaseline="middle",n.fillText(e,t,i),n.restore()}function Ig(n,e,t,i,r,s){let[a,o]=Mp[r]||Mp[0],l=r===3,c=i==="room"||i==="cafe",h=t*(i==="sea"?.56:.62);if(c){let f=n.createLinearGradient(0,0,0,t);f.addColorStop(0,i==="cafe"?"#E7C6A4":l?"#4B3F57":"#FFF4E8"),f.addColorStop(1,i==="cafe"?"#C99B74":l?"#3A3046":"#FBE3D2"),n.fillStyle=f,n.fillRect(0,0,e,t);let g=e*.56,p=t*.12,x=e*.32,y=t*.32;n.fillStyle="#FFFFFF",vi(n,g-8,p-8,x+16,y+16,10),n.fill();let v=n.createLinearGradient(0,p,0,p+y);if(v.addColorStop(0,a),v.addColorStop(1,o),n.fillStyle=v,n.fillRect(g,p,x,y),n.fillStyle="#FFFFFF",n.fillRect(g+x/2-3,p,6,y),n.fillRect(g,p+y/2-3,x,6),l)for(let C=0;C<12;C++)yt(n,g+s()*x,p+s()*y*.7,1.5+s()*1.5,"#FFF8C9");else yt(n,g+x*.72,p+y*.3,x*.1,"#FFE28A");n.fillStyle=i==="cafe"?"rgba(255,255,255,.35)":"rgba(244,184,192,.8)",vi(n,g-22,p-14,26,y+28,12),n.fill(),vi(n,g+x-4,p-14,26,y+28,12),n.fill();let M=t*.72;n.fillStyle=i==="cafe"?"#8F6B4E":"#E6C39A",n.fillRect(0,M,e,t-M),n.fillStyle="rgba(120,80,50,.15)";for(let C=0;C<7;C++)n.fillRect(0,M+C*((t-M)/7),e,2);if(i==="cafe"){for(let C=0;C<9;C++)yt(n,e*.08+C*e*.105,t*.07+Math.sin(C*1.3)*10,5,"#FFF1B8");n.fillStyle="rgba(255,255,255,.5)",vi(n,e*.06,t*.22,e*.36,8,4),n.fill(),xi(n,"\u{1FAB4}",e*.12,t*.2,e*.08),xi(n,"\u{1F4DA}",e*.32,t*.2,e*.07),n.fillStyle="#B98A66",n.beginPath(),n.ellipse(e*.5,t*.86,e*.3,t*.06,0,0,Math.PI*2),n.fill()}else n.fillStyle="rgba(255,255,255,.7)",vi(n,e*.1,t*.16,e*.2,t*.17,8),n.fill(),xi(n,l?"\u{1F319}":"\u{1F5BC}\uFE0F",e*.2,t*.25,e*.08),xi(n,"\u{1FAB4}",e*.1,t*.7,e*.11);return{horizon:t*.74,indoor:!0}}let u=n.createLinearGradient(0,0,0,h);if(u.addColorStop(0,a),u.addColorStop(1,o),n.fillStyle=u,n.fillRect(0,0,e,h+2),l){for(let f=0;f<40;f++)yt(n,s()*e,s()*h*.85,.8+s()*1.6,"rgba(255,248,210,.9)");yt(n,e*.78,t*.14,e*.07,"#FFF3C4")}else{let f=e*(.15+s()*.7),g=t*(.1+s()*.12),p=n.createRadialGradient(f,g,0,f,g,e*.28);p.addColorStop(0,"rgba(255,245,200,.9)"),p.addColorStop(1,"rgba(255,245,200,0)"),n.fillStyle=p,n.fillRect(0,0,e,h),yt(n,f,g,e*.06,r===1?"#FFD27A":"#FFF0A8");for(let x=0;x<3;x++){let y=s()*e,v=t*(.08+s()*.25),M=e*(.05+s()*.04);n.fillStyle="rgba(255,255,255,.85)";for(let C=0;C<4;C++)n.beginPath(),n.arc(y+C*M*.9-M*1.3,v+C%2*M*.3,M*(.7+C%3*.2),0,7),n.fill()}}if(i==="sea"){let f=n.createLinearGradient(0,h,0,t*.8);f.addColorStop(0,l?"#2F4F7A":"#5FB8E6"),f.addColorStop(1,l?"#243F63":"#8AD3F2"),n.fillStyle=f,n.fillRect(0,h,e,t*.8-h),n.strokeStyle="rgba(255,255,255,.55)",n.lineWidth=3,n.lineCap="round";for(let g=0;g<7;g++){let p=h+14+g*22+s()*8,x=s()*e;n.beginPath(),n.moveTo(x,p),n.lineTo(x+30+s()*50,p),n.stroke()}return n.fillStyle="#F6E3B8",n.beginPath(),n.moveTo(0,t*.8),n.quadraticCurveTo(e*.5,t*.74,e,t*.82),n.lineTo(e,t),n.lineTo(0,t),n.fill(),{horizon:t*.86}}if(i==="mountain")for(let f=0;f<4;f++){let g=e*(f*.33-.1)+s()*30,p=e*.45,x=t*(.28+s()*.1);n.fillStyle=f%2?"#8FA7C7":"#A9BFDC",n.beginPath(),n.moveTo(g-p/2,h),n.lineTo(g,h-x),n.lineTo(g+p/2,h),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(g-p*.14,h-x*.68),n.lineTo(g,h-x),n.lineTo(g+p*.14,h-x*.68),n.lineTo(g+p*.05,h-x*.62),n.lineTo(g-p*.06,h-x*.64),n.fill()}if(i==="city"){for(let f=-10;f<e;f+=0){let g=40+s()*70,p=t*(.12+s()*.3);n.fillStyle=l?["#3B3550","#2E2A42","#46405D"][Math.floor(s()*3)]:["#D9D0E6","#CFC6DD","#E4DCEF"][Math.floor(s()*3)],n.fillRect(f,h-p,g,p+4),n.fillStyle=l?"#FFE9A8":"rgba(255,255,255,.7)";for(let x=h-p+10;x<h-12;x+=16)for(let y=f+7;y<f+g-10;y+=14)s()>.35&&n.fillRect(y,x,7,9);f+=g+6}n.fillStyle=l?"#4A4458":"#CFC3B6",n.fillRect(0,h,e,t-h),n.fillStyle="rgba(255,255,255,.5)";for(let f=10;f<e;f+=60)n.fillRect(f,h+(t-h)*.5,30,4);return{horizon:t*.86}}let d=i==="snow",m=d?["#F4F7FB","#EAF0F7","#FFFFFF"]:l?["#3F6B4A","#355C40","#4A7A55"]:["#9ED08A","#86C174","#B2DB9C"];n.fillStyle=m[0],n.fillRect(0,h,e,t-h);for(let f=0;f<3;f++)n.fillStyle=m[(f+1)%3],n.beginPath(),n.ellipse(e*(.2+f*.35)+s()*40,h+10+f*6,e*(.45+s()*.2),t*(.08+s()*.05),0,Math.PI,Math.PI*2),n.fill();for(let f=0;f<4;f++){let g=s()<.5?e*(.04+s()*.2):e*(.76+s()*.2),p=h+4+s()*10,x=e*(.05+s()*.03);n.fillStyle="#A47A5C",n.fillRect(g-x*.12,p-x*1.4,x*.24,x*1.4);let y=d?["#FFFFFF","#EEF3F8"]:i==="park"&&r===2?["#F9C9D2","#FCDCE3"]:["#7DB86C","#9ED08A"];yt(n,g,p-x*1.6,x*.75,y[0]),yt(n,g-x*.5,p-x*1.25,x*.55,y[1]),yt(n,g+x*.5,p-x*1.25,x*.55,y[1])}if(d)for(let f=0;f<60;f++)yt(n,s()*e,s()*t,1.5+s()*2.5,"rgba(255,255,255,.9)");else if(!l)for(let f=0;f<18;f++)yt(n,s()*e,h+16+s()*(t-h-30),3+s()*3,["#FFFFFF","#F4B8C0","#F7D58B","#FFB7A5"][f%4]);return{horizon:t*.88}}function cn(n,e,t,i,r={}){let s="#FFE0C7",a=r.hair||Yc[0],o=r.suit?"#2F2B33":r.dress?"#FFFFFF":r.outfit||jc[0],l=t-2.95*i;if(n.lineCap="round",n.fillStyle="rgba(0,0,0,.12)",n.beginPath(),n.ellipse(e,t+i*.1,i*1.1,i*.22,0,0,Math.PI*2),n.fill(),r.veil&&(n.fillStyle="rgba(255,255,255,.7)",n.beginPath(),n.ellipse(e,l+i*.9,i*1.25,i*1.9,0,0,Math.PI*2),n.fill()),(r.long||r.dress)&&(n.fillStyle=a,vi(n,e-i*1.02,l-i*.4,i*2.04,i*1.9,i*.5),n.fill()),!r.dress){n.strokeStyle=r.suit?"#2F2B33":"#6B5B53",n.lineWidth=i*.36;for(let h of[-1,1])n.beginPath(),n.moveTo(e+h*i*.28,t-i*1),n.lineTo(e+h*i*.28,t-i*.15),n.stroke();n.fillStyle="#4A3B38";for(let h of[-1,1])n.beginPath(),n.ellipse(e+h*i*.3,t-i*.05,i*.26,i*.14,0,0,Math.PI*2),n.fill()}r.dress&&(n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(e-i*.5,t-i*1.5),n.lineTo(e+i*.5,t-i*1.5),n.quadraticCurveTo(e+i*1.3,t-i*.4,e+i*1.25,t),n.lineTo(e-i*1.25,t),n.quadraticCurveTo(e-i*1.3,t-i*.4,e-i*.5,t-i*1.5),n.fill(),n.fillStyle="#F4B8C0",vi(n,e-i*.55,t-i*1.55,i*1.1,i*.14,i*.07),n.fill()),n.fillStyle=o,vi(n,e-i*.65,t-i*2.05,i*1.3,i*1.25,i*.5),n.fill(),r.suit&&(n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(e-i*.2,t-i*2),n.lineTo(e+i*.2,t-i*2),n.lineTo(e,t-i*1.45),n.fill(),n.fillStyle="#1E1A22",n.beginPath(),n.moveTo(e,t-i*1.92),n.lineTo(e-i*.18,t-i*2.02),n.lineTo(e-i*.18,t-i*1.82),n.fill(),n.beginPath(),n.moveTo(e,t-i*1.92),n.lineTo(e+i*.18,t-i*2.02),n.lineTo(e+i*.18,t-i*1.82),n.fill(),yt(n,e-i*.42,t-i*1.85,i*.1,"#F4B8C0")),n.strokeStyle=r.dress?s:o,n.lineWidth=i*.3;let c=(h,u)=>{n.beginPath(),n.moveTo(e+h*i*.6,t-i*1.85),u?n.lineTo(e+h*i*1,t-i*2.7):n.lineTo(e+h*i*.82,t-i*1.1),n.stroke(),yt(n,u?e+h*i*1:e+h*i*.82,u?t-i*2.72:t-i*1.08,i*.17,s)};if(c(-1,r.waveL),c(1,r.wave),r.bouquet&&(n.fillStyle="#9CC08A",vi(n,e-i*.08,t-i*1.25,i*.16,i*.4,i*.05),n.fill(),["#F4B8C0","#FFFFFF","#F7D58B","#E88A98","#FFE3EA","#F4B8C0"].forEach((h,u)=>yt(n,e+Math.cos(u*1.05)*i*.22,t-i*1.35+Math.sin(u*1.05)*i*.18,i*.16,h)),yt(n,e,t-i*1.33,i*.16,"#E88A98")),yt(n,e,l,i,s),n.fillStyle=a,n.beginPath(),n.arc(e,l-i*.05,i*1.04,Math.PI*1.02,Math.PI*1.98),n.quadraticCurveTo(e+i*.5,l-i*.05,e+i*.25,l+i*.25),n.quadraticCurveTo(e-i*.2,l-i*.2,e-i*.6,l+i*.1),n.quadraticCurveTo(e-i*1,l-i*.05,e-i*1.04,l-i*.05),n.fill(),r.crown)for(let h=0;h<5;h++)yt(n,e-i*.6+h*i*.3,l-i*.98+Math.abs(h-2)*i*.1,i*.09,h%2?"#F4B8C0":"#FFFFFF");r.hat&&xi(n,r.hat,e,l-i*1,i*1.3);for(let h of[-1,1])yt(n,e+h*i*.33,l+i*.05,i*.12,"#2B2220"),yt(n,e+h*i*.33+i*.04,l,i*.04,"#FFFFFF"),yt(n,e+h*i*.6,l+i*.32,i*.15,"rgba(255,150,150,.55)");if(r.glasses){n.strokeStyle="#4A3B38",n.lineWidth=i*.06;for(let h of[-1,1])n.beginPath(),n.arc(e+h*i*.33,l+i*.05,i*.22,0,Math.PI*2),n.stroke()}n.strokeStyle="#2B2220",n.lineWidth=i*.07,n.beginPath(),n.arc(e,l+i*.4,i*.16,.15,Math.PI-.15),n.stroke(),r.balloon&&(n.strokeStyle="#B8A59B",n.lineWidth=1.5,n.beginPath(),n.moveTo(e+i*.82,t-i*1.08),n.lineTo(e+i*1.3,t-i*3.9),n.stroke(),yt(n,e+i*1.3,t-i*4.4,i*.55,r.balloon),yt(n,e+i*1.15,t-i*4.55,i*.14,"rgba(255,255,255,.6)"))}function Fg(n,e,t,i,r,s=2){let a=e/2,o=e*.085,l=()=>jc[Math.floor(r()*jc.length)],c=()=>Yc[Math.floor(r()*Yc.length)];if(i==="wedding")cn(n,a-o*1.35,t,o,{suit:!0,hair:"#3A2A24",wave:r()<.4}),cn(n,a+o*1.35,t,o,{dress:!0,veil:!0,crown:!0,bouquet:!0,hair:"#5A3A2A"});else if(i==="bride")cn(n,a,t,o*1.15,{dress:!0,veil:!0,crown:!0,bouquet:!0,hair:"#5A3A2A",wave:r()<.5});else if(i==="groom")cn(n,a,t,o*1.15,{suit:!0,hair:"#3A2A24",wave:!0});else if(i==="propose")cn(n,a-o*1.3,t,o,{suit:!1,outfit:"#8FB8DE",hair:"#3A2A24",wave:!0}),cn(n,a+o*1.3,t,o,{outfit:"#F4B8C0",hair:"#5A3A2A",long:!0,waveL:!0}),xi(n,"\u{1F48D}",a-o*.3,t-o*2.9,o*1.1);else if(i==="couple")cn(n,a-o*1.3,t,o,{outfit:l(),hair:c(),wave:r()<.5}),cn(n,a+o*1.3,t,o,{outfit:l(),hair:c(),long:!0,waveL:r()<.5});else if(i==="kid"||i==="kid-balloon")cn(n,a,t,o*.75,{outfit:l(),hair:c(),long:r()<.5,wave:!0,balloon:i==="kid-balloon"?"#E88A98":null});else if(i==="baby")cn(n,a,t,o*.6,{outfit:"#FFF3EA",hair:"#5A3A2A",hat:"\u{1F380}"});else if(i==="kidparent")cn(n,a-o*.9,t,o,{outfit:l(),hair:c(),long:!0}),cn(n,a+o*1,t,o*.7,{outfit:l(),hair:c(),wave:!0});else if(i==="family"){let h=Math.min(7,Math.max(3,s)),u=Math.min(o*2.1,e*.9/h);for(let d=0;d<h;d++){let m=a+(d-(h-1)/2)*u,f=d===0||h>4&&d===h-1,g=!f&&d>h-3&&h>3&&d%2===1;cn(n,m,t,o*(g?.7:f?.95:1),{outfit:l(),hair:f?"#C8C2C0":c(),long:d%2===1,glasses:f,wave:d===h-1})}}}function wp(n,e,t=840){let i=n.id||"everyday",r=Pg[i],s=Cg(`${i}:${e}`),a=r&&r[e]||{kind:bp[Math.floor(s()*bp.length)],sky:Math.floor(s()*5),who:Sp[Math.floor(s()*Sp.length)],props:["\u2728"]},o=[1,4/3,3/4][e%3],l=Math.round(o>=1?t:t*o),c=Math.round(o>=1?t/o:t),h=document.createElement("canvas");h.width=l,h.height=c;let u=h.getContext("2d"),m=Ig(u,l,c,a.kind,a.sky,s).horizon,f=a.props[0];f&&xi(u,f,l*(s()<.5?.15:.85),m-l*.36,l*.21,.95),Fg(u,l,m-6,a.who,s,a.n),a.props.slice(1).forEach((p,x)=>xi(u,p,l*(.12+x*.7+s()*.1),m-l*.06+s()*10,l*.12));for(let p=0;p<10;p++)yt(u,s()*l,s()*c*.6,1.2+s()*2,"rgba(255,255,255,.75)");if(i==="holidays")for(let p=0;p<5;p++)xi(u,["\u{1F389}","\u2728","\u{1F388}"][p%3],s()*l,s()*c*.5,l*.035,.8);let g=u.createRadialGradient(l/2,c/2,l*.35,l/2,c/2,l*.85);return g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(60,30,20,.22)"),u.fillStyle=g,u.fillRect(0,0,l,c),i==="old"&&(u.fillStyle="rgba(150,105,40,.2)",u.fillRect(0,0,l,c),u.strokeStyle="#FFFDF8",u.lineWidth=l*.035,u.strokeRect(0,0,l,c)),h}var Jc=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"],fa=()=>window.FAMILY||{},$i=n=>{try{return new Date(n.toLocaleString("en-US",{timeZone:"Asia/Seoul"}))}catch{return new Date(n.getTime()+(n.getTimezoneOffset()+540)*6e4)}},Wi=n=>String(n).padStart(2,"0"),ls=null,Kc=0;function Dg(){let n=$i(new Date),e=null;for(let t of fa().members||[]){if(!/^\d{2}-\d{2}$/.test(t.birthday||""))continue;let[i,r]=t.birthday.split("-").map(Number),s=n.getFullYear(),a=new Date(`${s}-${Wi(i)}-${Wi(r)}T10:00:00+09:00`);$i(a)<new Date(n.getFullYear(),n.getMonth(),n.getDate())&&(a=new Date(`${s+1}-${Wi(i)}-${Wi(r)}T10:00:00+09:00`)),(!e||a<e)&&(e=a)}return e}function Tp(){ls=null;let n=location.hash.slice(1),e=n.match(/(?:^|&)now=([^&]+)/);if(e){let t=decodeURIComponent(e[1]),i=new Date(/[+Z]/.test(t.slice(10))?t:t+(t.length<=10?"T10:00:00":t.length<=16?":00":"")+"+09:00");if(!isNaN(i)){ls=i.getTime(),Kc=Date.now();return}}if(/(?:^|&)demo(?:&|$)/.test(n)){let t=Dg();t&&(ls=t.getTime(),Kc=Date.now())}}Tp();addEventListener("hashchange",Tp);function ei(){return ls?new Date(ls+(Date.now()-Kc)):new Date}var Ap=()=>!!ls;function ze(n=ei()){let e=$i(n);return`${e.getFullYear()}-${Wi(e.getMonth()+1)}-${Wi(e.getDate())}`}function hn(n,e){let[t,i,r]=n.split("-").map(Number),s=new Date(Date.UTC(t,i-1,r+e));return`${s.getUTCFullYear()}-${Wi(s.getUTCMonth()+1)}-${Wi(s.getUTCDate())}`}function ti(n,e){let t=i=>{let[r,s,a]=i.split("-").map(Number);return Date.UTC(r,s-1,a)};return Math.round((t(e)-t(n))/864e5)}function cs(n=ei()){let e=$i(n),t=e.getHours(),i=e.getMinutes(),r=t<12?"\uC624\uC804":"\uC624\uD6C4",s=t%12===0?12:t%12;return{date:`${e.getFullYear()}\uB144 ${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C ${Jc[e.getDay()]}\uC694\uC77C`,short:`${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C (${Jc[e.getDay()]})`,time:`${r} ${s}\uC2DC${i?" "+i+"\uBD84":""}`,k:e}}function un(n,e=!0){let[t,i,r]=n.split("-").map(Number),s=new Date(Date.UTC(t,i-1,r)).getUTCDay();return`${i}\uC6D4 ${r}\uC77C${e?` (${Jc[s]})`:""}`}function qi(n){let e=new Date(n);if(isNaN(e))return"";let t=ti(ze(e),ze());if(t===0)return"\uC624\uB298";if(t===1)return"\uC5B4\uC81C";let i=$i(e);return`${i.getMonth()+1}\uC6D4 ${i.getDate()}\uC77C`}function Xi(n,e){let t=String(n!=null?n:""),i=t.charCodeAt(t.length-1),[r,s]=e.split("/");if(!(i>=44032&&i<=55203))return`${t}(${r.slice(0,r.length-s.length)||r})${s}`;let a=(i-44032)%28;return r==="\uC73C\uB85C"&&a===8?t+s:t+(a?r:s)}function Ke(n=10){var e;try{(e=navigator.vibrate)==null||e.call(navigator,n)}catch{}}function hs(){var t;let n=fa();return(((t=n.museum)==null?void 0:t.themes)||[]).map(i=>{var s;let r;return Array.isArray(i.photos)&&i.photos.length?r=i.photos.map((a,o)=>{var l;return typeof a=="string"?{src:a,caption:((l=i.captions)==null?void 0:l[o])||""}:a}):n.demoPhotos||i.demo?r=Array.from({length:i.count||((s=i.captions)==null?void 0:s.length)||0},(a,o)=>{var l;return{src:`demo:${i.id}:${o}`,caption:((l=i.captions)==null?void 0:l[o])||""}}):r=Array.from({length:i.count||0},(a,o)=>{var l;return{src:`${i.folder}/${o+1}.${i.ext||"jpg"}`,caption:((l=i.captions)==null?void 0:l[o])||""}}),r.forEach((a,o)=>{a.idx=o,a.theme=i}),{...i,photos:r}})}var Zc=new Map,Ug=n=>typeof(n==null?void 0:n.src)=="string"&&n.src.startsWith("demo:");function xr(n,e="full"){if(!Ug(n))return n.src;let t=`${n.src}:${e}`;if(!Zc.has(t)){let i=wp(n.theme,n.idx,e==="thumb"?360:840);Zc.set(t,i.toDataURL("image/jpeg",e==="thumb"?.8:.86))}return Zc.get(t)}function _r(n,e,t,i=600,r=600,s="\uC0AC\uC9C4\uC744 \uB123\uC5B4\uC8FC\uC138\uC694"){let a=document.createElement("canvas");a.width=i,a.height=r;let o=a.getContext("2d"),l=o.createLinearGradient(0,0,i,r);return l.addColorStop(0,"#FFFDF8"),l.addColorStop(1,n.color||"#F4B8C0"),o.fillStyle=l,o.fillRect(0,0,i,r),o.textAlign="center",o.textBaseline="middle",o.font=`${i*.2}px serif`,o.fillText(n.emoji||"\u{1F4F7}",i/2,r*.38),o.fillStyle="#7C6A66",o.font=`${i*.08}px "Jua"`,o.fillText(`${n.title} #${e+1}`,i/2,r*.62),o.font=`${i*.04}px "Gowun Dodum"`,o.globalAlpha=.7,o.fillText(s,i/2,r*.73),o.fillText(t,i/2,r*.8),a}function ga(){return(fa().questions||[]).map(n=>typeof n=="string"?{q:n}:n).filter(n=>n&&n.q)}function To(n=ze()){let e=ga().length;if(!e)return-1;let t=/^\d{4}-\d{2}-\d{2}$/.test(fa().questionStart||"")?fa().questionStart:n;return(ti(t,n)%e+e)%e}var ya=()=>window.FAMILY||{},eh=["letters","answers","replies","hearts","visits","water","votes","polls","scores","looks"],Rp=new Set(["votes","looks","answers"]),tn=()=>!!ya().sheet,Ng=()=>String(ya().site||"main"),_i="family-mine-v1",ih="family-remote-v1",th="family-code",ds=n=>{try{let e=JSON.parse(localStorage.getItem(n)||"{}");return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}},us=(n,e)=>{try{localStorage.setItem(n,JSON.stringify(e))}catch{}},Bg=()=>crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{let e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)}),Cp=n=>{try{dispatchEvent(new CustomEvent("family:data",{detail:n}))}catch{}},nh="family-local-lock",Co=()=>{try{return JSON.parse(localStorage.getItem(nh)||"null")||{}}catch{return{}}},Er=()=>{try{return localStorage.getItem(th)||""}catch{return""}},Ro=n=>{try{n?localStorage.setItem(th,n):localStorage.removeItem(th)}catch{}},en={locked:!1,hint:"",known:!1},ps=()=>({...en,remote:tn()});async function Lp(){if(!tn()){let n=Co();return en.locked=!!n.code,en.hint=n.hint||"",en.known=!0,ps()}try{let n=await ms("GET",{action:"status",quiet:1});en.locked=!!n.locked,en.hint=String(n.hint||""),en.known=!0}catch{en.locked=!!Er(),en.known=!1}return ps()}function Mr(){if(!en.locked)return!0;let n=Er();return n?tn()?!0:n===Co().code:!1}async function Pp(n){if(n=String(n||"").trim(),!n)return{ok:!1,error:"empty"};if(!tn()){let e=n===String(Co().code||"");return e&&Ro(n),{ok:e,error:e?null:"code"}}try{return await ms("GET",{action:"check",code:n}),Ro(n),{ok:!0}}catch(e){return{ok:!1,error:(e==null?void 0:e.message)==="code"?"code":"network"}}}async function Ip({current:n="",next:e="",hint:t=""}={}){if(e=String(e||"").trim().slice(0,30),t=String(t||"").trim().slice(0,40),n=String(n||Er()).trim(),tn())try{await ms("POST",{quiet:1},{kind:"setcode",code:n,newCode:e,hint:t})}catch(i){return{ok:!1,error:(i==null?void 0:i.message)==="code"?"code":"network"}}else{let i=Co();if(i.code&&n!==i.code)return{ok:!1,error:"code"};try{e?localStorage.setItem(nh,JSON.stringify({code:e,hint:t})):localStorage.removeItem(nh)}catch{}}return Ro(e),en.locked=!!e,en.hint=e?t:"",en.known=!0,{ok:!0}}var Qc=null,Ao=n=>{var e;return((e=(ya().members||[]).find(t=>t.id===n))==null?void 0:e.name)||n};function Og(){var l;if(Qc)return Qc;let n=ya().samples||{},e=ze(),t=ei().getTime(),i=(c=0,h=0)=>new Date(t-c*864e5-(40+h*37%300)*6e4).toISOString(),r=c=>hn(e,-(c||0)),s={};s.letters=(n.letters||[]).map((c,h)=>({id:`seed-letters-${h}`,who:c.from,name:Ao(c.from),to:c.to||"all",message:c.message,time:i(c.daysAgo,h),openAt:c.openInDays?hn(e,c.openInDays):"",seed:!0}));let a=c=>{let h=String(c||"").match(/^letters:(\d+)$/);return h?`seed-letters-${h[1]}`:String(c||"")};s.replies=(n.replies||[]).map((c,h)=>({id:`seed-replies-${h}`,who:c.who,name:Ao(c.who),target:a(c.target),text:c.text||"",emoji:c.emoji||"",time:i(0,h+3),seed:!0})),s.hearts=(n.hearts||[]).map((c,h)=>({id:`${c.from}-${c.to}-${r(c.daysAgo)}`,who:c.from,to:c.to,day:r(c.daysAgo),time:i(c.daysAgo,h),seed:!0})),s.visits=(n.visits||[]).map((c,h)=>({id:`${c.who}-${r(c.daysAgo)}`,who:c.who,day:r(c.daysAgo),time:i(c.daysAgo,h),seed:!0})),s.water=(n.water||[]).map((c,h)=>({id:`${c.who}-${r(c.daysAgo)}`,who:c.who,day:r(c.daysAgo),time:i(c.daysAgo,h),seed:!0})),s.votes=(n.votes||[]).map((c,h)=>({id:`${c.who}-${c.poll}`,who:c.who,poll:c.poll,choice:+c.choice||0,time:i(1,h),seed:!0})),s.scores=(n.scores||[]).map((c,h)=>({id:`seed-scores-${h}`,who:c.who,name:Ao(c.who),score:+c.score||0,total:+c.total||0,time:i(2,h),seed:!0})),s.answers=[];let o=ga();for(let c=0;c<14&&o.length;c++){let h=hn(e,-c),u=To(h);Object.entries(((l=o[u])==null?void 0:l.samples)||{}).forEach(([d,m],f)=>{s.answers.push({id:`${d}-${h}`,who:d,name:Ao(d),day:h,q:u,text:m,time:i(c,f*5+1),seed:!0})})}return s.polls=[],s.looks=[],Qc=s,s}var St={data:tn()?ds(ih):{},at:0,loading:null,error:null,ok:!1},Fp=()=>({remote:tn(),loading:!!St.loading,error:St.error,loaded:St.ok,at:St.at});async function ms(n,e,t){let i=new URL(ya().sheet);i.searchParams.set("site",Ng()),n==="GET"&&!(e!=null&&e.code)&&i.searchParams.set("code",Er()),Object.entries(e||{}).forEach(([a,o])=>i.searchParams.set(a,o));let r=typeof AbortController=="function"?new AbortController:null,s=setTimeout(()=>r==null?void 0:r.abort(),15e3);try{let o=await(await fetch(i.toString(),{method:n,redirect:"follow",signal:r==null?void 0:r.signal,...t?{body:JSON.stringify({code:Er(),...t}),headers:{"Content-Type":"text/plain;charset=utf-8"}}:{}})).json();if(o&&o.error==="code"){if(!(e!=null&&e.code)&&!(e!=null&&e.quiet)){Ro(""),en.locked=!0;try{dispatchEvent(new CustomEvent("family:locked"))}catch{}}throw new Error("code")}if(!o||o.ok!==!0)throw new Error((o==null?void 0:o.error)||"bad response");return o}finally{clearTimeout(s)}}var zg=["q","choice","score","total"];function kg(n,e){let t={};if(Object.entries(e||{}).forEach(([i,r])=>{t[i]=r==null?"":r}),t.id=String(t.id||""),t.who=String(t.who||""),t.time&&typeof t.time!="string"&&(t.time=String(t.time)),zg.forEach(i=>{i in t&&t[i]!==""&&(t[i]=Number(t[i]))}),n==="looks"&&typeof t.look=="string")try{t.look=JSON.parse(t.look)}catch{t.look={}}return n==="polls"&&typeof t.options=="string"&&(t.options=t.options.split("|").filter(Boolean)),t.openAt&&typeof t.openAt!="string"&&(t.openAt=String(t.openAt)),t.openAt&&(t.openAt=String(t.openAt).slice(0,10)),(t.locked==="true"||t.locked===!0)&&(t.locked=!0),t}async function Hg(){let n=ds(_i),e=!1;e:for(let t of eh)for(let i of n[t]||[]){if(!i.pending)continue;let{pending:r,...s}=i;try{await ms("POST",{},{kind:t,...s}),delete i.pending,e=!0}catch{break e}}e&&us(_i,n)}function bn({force:n=!1}={}){return tn()?St.loading?St.loading:!n&&St.ok&&Date.now()-St.at<1e4?Promise.resolve():(St.loading=(async()=>{try{await Hg();let e=await ms("GET",{action:"all",t:Date.now()}),t={};eh.forEach(s=>{var a;t[s]=(Array.isArray((a=e.data)==null?void 0:a[s])?e.data[s]:[]).map(o=>kg(s,o)).filter(o=>o.id)}),St.data=t,St.at=Date.now(),St.ok=!0,St.error=null,us(ih,t);let i=ds(_i),r=!1;eh.forEach(s=>{let a=new Set(t[s].map(o=>o.id));(i[s]||[]).forEach(o=>{o.pending&&a.has(o.id)&&!Rp.has(s)&&(delete o.pending,r=!0)})}),r&&us(_i,i)}catch(e){St.error=(e==null?void 0:e.message)||String(e)}finally{St.loading=null,Cp({refresh:!0})}})(),St.loading):Promise.resolve()}function at(n){let e=(ds(_i)[n]||[]).map(o=>({...o,mine:!0})),t=tn()?St.data[n]||[]:[],i=Og()[n]||[],r=new Set(e.map(o=>o.id)),s=[...e,...t.map(o=>r.has(o.id)?{...o,mine:!0}:o),...i],a=new Map;for(let o of s){let l=a.get(o.id);if(!l){a.set(o.id,o);continue}(Rp.has(n)?(o.time||"")>(l.time||""):l.pending&&!o.pending)&&a.set(o.id,{...o,mine:l.mine||o.mine})}return[...a.values()].sort((o,l)=>String(l.time||"").localeCompare(String(o.time||"")))}async function nn(n,e){let t={id:e.id||Bg(),time:new Date().toISOString(),...e},i=ds(_i);i[n]=[tn()?{...t,pending:!0}:t,...(i[n]||[]).filter(s=>s.id!==t.id)].slice(0,300),us(_i,i);let r=()=>setTimeout(()=>Cp({kind:n,item:t}),0);if(!tn())return r(),{ok:!0,item:t,sent:!1};try{await ms("POST",{},{kind:n,...t});let s=ds(_i),a=(s[n]||[]).find(o=>o.id===t.id);return a&&(delete a.pending,us(_i,s)),St.data[n]=[t,...(St.data[n]||[]).filter(o=>o.id!==t.id)],us(ih,St.data),{ok:!0,item:t,sent:!0}}catch(s){return{ok:!1,item:t,sent:!1,error:(s==null?void 0:s.message)||String(s)}}finally{r()}}var br=()=>window.FAMILY||{},Gg=n=>String(n).padStart(2,"0"),fs=["#8FB8DE","#F4B8C0","#F7D58B","#A8D08D","#C9B3E6","#F9C59E","#E88A98","#7FC8C2"],Po=["#5A3A2A","#3A2A24","#7A5238","#1E1A22","#C98A5B","#E8E4DE"],Wt=()=>`${br().name||"\uC6B0\uB9AC"} \uB9C8\uC744`,Lo=null,Dp=-1;function Vg(){let n=at("looks"),e=n.map(t=>t.id+t.time).join();return e!==Dp&&(Dp=e,Lo=new Map,n.forEach(t=>{Lo.has(t.who)||Lo.set(t.who,t.look||{})})),Lo}function rn(){let n=Vg();return(br().members||[]).filter(e=>e&&e.id).slice(0,8).map((e,t)=>{let i={outfit:fs[t%fs.length],hair:Po[t%5],longHair:!1,glasses:!1,hat:"",kid:!1,...e.look||{}};return{...e,index:t,look:{...i,...n.get(e.id)||{}}}})}var Ft=n=>rn().find(e=>e.id===n)||null,Sn=(n,e="")=>{var t;return((t=Ft(n))==null?void 0:t.name)||e||n||""},va=n=>{var e;return((e=Ft(n))==null?void 0:e.look.outfit)||"#F4B8C0"},sn=n=>{let e=Ft(n);return e?e.role||e.name:n||""},Up="family-me";function Me(){let n="";try{n=localStorage.getItem(Up)||""}catch{}return n==="guest"||Ft(n)?n:""}function Io(n){try{localStorage.setItem(Up,n)}catch{}try{dispatchEvent(new CustomEvent("family:me",{detail:n}))}catch{}}var Et=()=>Ft(Me()),xa=()=>Me()==="guest";function ji(){let n=br().since;return/^\d{4}-\d{2}-\d{2}$/.test(n||"")?ti(n,ze())+1:0}function gs(n=ze()){let e=n.slice(5);return rn().filter(t=>t.birthday===e)}function Wg(n,e,t){if(/^\d{4}-\d{2}-\d{2}$/.test(n)&&!e)return n>=t?n:null;let i=n.length===10?n.slice(5):n;if(!/^\d{2}-\d{2}$/.test(i))return null;let r=+t.slice(0,4),s=`${r}-${i}`;return s>=t?s:`${r+1}-${i}`}function Np(){let n=rn().filter(t=>/^\d{2}-\d{2}$/.test(t.birthday||"")).map(t=>({title:`${t.name} \uC0DD\uC77C`,date:t.birthday,yearly:!0,emoji:"\u{1F382}",kind:"birthday",member:t.id,note:t.lunar?"\uC74C\uB825 \uC0DD\uC77C (\uC62C\uD574 \uC591\uB825 \uB0A0\uC9DC)":""})),e=(br().events||[]).filter(t=>t&&t.date).map(t=>({...t,kind:"event",yearly:!!t.yearly||/^\d{2}-\d{2}$/.test(t.date)}));return[...n,...e]}function ys(n=6,e=ze()){return Np().map(t=>{let i=Wg(t.date,t.yearly,e);return i?{...t,key:i,dday:ti(e,i)}:null}).filter(Boolean).sort((t,i)=>t.dday-i.dday).slice(0,n)}function Bp(n,e){let t={},i=`${n}-${Gg(e)}`;return Np().forEach(r=>{let s=r.yearly?`${n}-${r.date.length===10?r.date.slice(5):r.date}`:r.date;s.startsWith(i)&&(t[s]=t[s]||[]).push(r)}),t}var _a=n=>n===0?"\uC624\uB298":n>0?`D-${n}`:`D+${-n}`;function vs(n=ze()){let e=To(n);return e<0?null:{idx:e,q:ga()[e].q,day:n}}function Ei(n){let e=new Set;return at("answers").filter(t=>t.day===n&&!e.has(t.who)&&e.add(t.who)).reverse()}var rh=n=>Ei(n).find(e=>e.who===Me())||null;function Op(n=14){let e=ze();return Array.from({length:n},(t,i)=>{let r=hn(e,-i),s=vs(r);return s&&{...s,answers:Ei(r)}}).filter(Boolean)}var xs=n=>at("hearts").filter(e=>e.to===n),zp=n=>xs(n).filter(e=>e.day===ze()),Fo=n=>at("hearts").some(e=>e.to===n&&e.who===Me()&&e.day===ze());function Do(n=ze()){return[...new Set(at("visits").filter(t=>t.day===n).map(t=>t.who))].map(Ft).filter(Boolean)}var kp=()=>new Set(at("visits").filter(n=>n.who===Me()).map(n=>n.day)).size,Hp=(n,e)=>at("visits").some(t=>t.who===n&&t.day===e),Uo=["\uC528\uC557","\uC0C8\uC2F9","\uBB18\uBAA9","\uB098\uBB34","\uAF43\uB098\uBB34","\uC5F4\uB9E4 \uB098\uBB34"];function Mi(){var c,h,u,d;let n=at("water"),e=n.length,t=(((c=br().tree)==null?void 0:c.stages)||[3,10,25,45,80]).slice(0,5),i=0;t.forEach((m,f)=>{e>=m&&(i=f+1)});let r=(h=t[i])!=null?h:null,s=i?t[i-1]:0,a=ze(),o=[...new Set(n.filter(m=>m.day===a).map(m=>m.who))],l=((u=n[0])==null?void 0:u.day)||"";return{total:e,stage:i,stageName:Uo[i],next:r,toNext:r==null?0:r-e,progress:r==null?1:(e-s)/Math.max(1,r-s),todayWho:o,wateredToday:o.includes(Me()),thirsty:!l||ti(l,a)>=3,name:((d=br().tree)==null?void 0:d.name)||"\uC6B0\uB9AC \uAC00\uC871 \uB098\uBB34"}}var bi=n=>!!n.locked||!!n.openAt&&n.openAt>ze(),Ea=n=>n.who!==Me()&&(n.to==="all"||n.to===Me()),Gp="family-read",sh=()=>{try{return new Set(JSON.parse(localStorage.getItem(Gp)||"[]"))}catch{return new Set}};function Vp(n){let e=sh();if(!e.has(n)){e.add(n);try{localStorage.setItem(Gp,JSON.stringify([...e].slice(-500)))}catch{}try{dispatchEvent(new CustomEvent("family:read"))}catch{}}}function ni(){if(!Et())return[];let n=sh();return at("letters").filter(e=>Ea(e)&&!bi(e)&&!n.has(e.id))}var Wp=n=>sh().has(n);function $p(){let n=i=>(Array.isArray(i)?i:String(i||"").split("|")).map(r=>String(r).trim()).filter(Boolean),e=(br().polls||[]).filter(i=>i&&i.id).map(i=>({...i,options:n(i.options),cfg:!0}));return[...at("polls").map(i=>({...i,options:n(i.options)})).filter(i=>i.q&&i.options.length>=2),...e].filter(i=>i.options.length>=2)}function ah(n){let e=new Map;return at("votes").forEach(t=>{t.poll===n&&!e.has(t.who)&&e.set(t.who,t.choice)}),e}function qp(){let n=new Map;return at("scores").forEach(e=>{let t=n.get(e.who);(!t||e.score>t.score)&&n.set(e.who,e)}),[...n.values()].sort((e,t)=>t.score-e.score||String(e.time).localeCompare(String(t.time)))}function Xp(n){let e=at("replies").filter(r=>r.target===n).reverse(),t=e.filter(r=>r.text),i={};return e.filter(r=>r.emoji&&!r.text).forEach(r=>{(i[r.emoji]=i[r.emoji]||new Set).add(r.who)}),{texts:t,reacts:i}}function jp(){return ys(10).filter(n=>n.dday===0)}var Yp="family-sound",tt=null,Ms=null,Zi=null,ch=null,bs=!1,Ma=null,wr=0,No=0,oh=349.23,_s=392,Yi=440,Sr=523.25,lh=587.33,$g=698.46;var Zp=[Sr,0,Yi,_s,oh,0,_s,Yi,Sr,0,lh,0,Sr,0,Yi,0,_s,0,oh,_s,Yi,0,0,0,lh,0,Sr,Yi,Sr,0,$g,0,lh,Sr,Yi,0,_s,Yi,Sr,0,Yi,_s,oh,0,0,0,0,0],Jp=[87.31,116.54,87.31,130.81],qg=.34;function Xg(){if(tt)return tt;let n=window.AudioContext||window.webkitAudioContext;if(!n)return null;tt=new n,Ms=tt.createGain(),Ms.gain.value=.9,Ms.connect(tt.destination),Zi=tt.createGain(),Zi.gain.value=.12,Zi.connect(Ms),ch=tt.createBuffer(1,tt.sampleRate,tt.sampleRate);let e=ch.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;return tt}function Mt(n,e,t,{type:i="sine",gain:r=.2,dest:s=Ms,slide:a=0}={}){let o=tt.createOscillator(),l=tt.createGain();o.type=i,o.frequency.setValueAtTime(n,e),a&&o.frequency.exponentialRampToValueAtTime(a,e+t),l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(r,e+.012),l.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(l),l.connect(s),o.start(e),o.stop(e+t+.05)}function Es(n,e,{gain:t=.2,type:i="lowpass",freq:r=2e3}={}){let s=tt.createBufferSource(),a=tt.createBiquadFilter(),o=tt.createGain();s.buffer=ch,a.type=i,a.frequency.value=r,o.gain.setValueAtTime(t,n),o.gain.exponentialRampToValueAtTime(1e-4,n+e),s.connect(a),a.connect(o),o.connect(Ms),s.start(n),s.stop(n+e+.02)}function jg(){if(!(!tt||!bs))for(;wr<tt.currentTime+.4;){let n=Zp[No%Zp.length];n&&(Mt(n,wr,.7,{type:"sine",gain:.5,dest:Zi}),Mt(n*4,wr,.12,{type:"sine",gain:.06,dest:Zi})),No%6===0&&Mt(Jp[Math.floor(No/12)%Jp.length],wr,1.6,{type:"triangle",gain:.16,dest:Zi}),wr+=qg,No++}}var Xe={get enabled(){return bs},saved(){try{return localStorage.getItem(Yp)==="1"}catch{return!1}},setEnabled(n){if(n&&!Xg())return!1;bs=n;try{localStorage.setItem(Yp,n?"1":"0")}catch{}return n?(tt.resume().catch(()=>{}),Ma||(wr=tt.currentTime+.1,Ma=setInterval(jg,120))):(Ma&&(clearInterval(Ma),Ma=null),tt==null||tt.suspend().catch(()=>{})),bs},sfx(n){if(!bs||!tt)return;let e=tt.currentTime;switch(n){case"chime":Mt(880,e,.25,{gain:.14}),Mt(1318.5,e+.09,.32,{gain:.12});break;case"crackle":for(let t=0;t<6;t++)Es(e+t*.06+Math.random()*.04,.05,{gain:.12,type:"highpass",freq:1800+Math.random()*1500});Mt(220,e,.3,{type:"triangle",gain:.06,slide:160});break;case"coin":Mt(1760,e,.1,{type:"square",gain:.05}),Mt(2217,e+.07,.28,{type:"square",gain:.05}),Es(e+.3,.3,{gain:.07,freq:1400});break;case"shutter":Es(e,.05,{gain:.3,type:"highpass",freq:3e3}),Es(e+.07,.04,{gain:.18,type:"highpass",freq:2500});break;case"paper":Es(e,.16,{gain:.12,type:"bandpass",freq:900}),Mt(1047,e+.1,.3,{gain:.08});break;case"jump":Mt(320,e,.18,{type:"triangle",gain:.12,slide:760});break;case"heart":Mt(1047,e,.18,{gain:.07}),Mt(1318.5,e+.05,.22,{gain:.06});break;case"ok":Mt(659,e,.14,{gain:.12}),Mt(830.6,e+.11,.3,{gain:.12});break;case"no":Mt(330,e,.2,{type:"triangle",gain:.1}),Mt(262,e+.16,.34,{type:"triangle",gain:.1});break;case"pop":Mt(600,e,.08,{type:"triangle",gain:.1,slide:900});break;case"tada":[523.25,659.25,783.99,1046.5].forEach((t,i)=>Mt(t,e+i*.09,.4,{gain:.12}));break;case"water":[1318.5,1568,1760].forEach((t,i)=>Mt(t,e+i*.07,.18,{gain:.06,slide:t*.8})),Es(e,.35,{gain:.05,type:"bandpass",freq:2600});break;case"birthday":{[[523.25,0,.18],[659.25,.16,.18],[783.99,.32,.18],[1046.5,.5,.45],[880,.95,.18],[987.77,1.12,.18],[1046.5,1.3,.6]].forEach(([i,r,s])=>{Mt(i,e+r,s+.2,{gain:.11}),Mt(i/2,e+r,s+.2,{type:"triangle",gain:.05})});break}}},duck(n){Zi&&tt&&Zi.gain.setTargetAtTime(n?.04:.12,tt.currentTime,.12)}};document.addEventListener("visibilitychange",()=>{!tt||!bs||(document.hidden?tt.suspend().catch(()=>{}):(tt.resume().catch(()=>{}),wr=tt.currentTime+.1))});var Qp=window.FAMILY,an=n=>document.querySelector(n),Fe=n=>String(n!=null?n:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Sa=[],uh=0;function Ji(n){Sa.push(n);try{history.pushState({wv:Sa.length},"")}catch{}}function Rr(n){let e=Sa.lastIndexOf(n);e<0||(Sa.splice(e,1),uh++,history.back())}addEventListener("popstate",()=>{var n;if(uh>0){uh--;return}(n=Sa.pop())==null||n()});var Ar=null,em=null,yh=()=>an("#modal");function dh(){let n=yh();!n.classList.contains("open")||n.classList.contains("closing")||(n.classList.add("closing"),Xe.duck(!1),Ar&&(Ar(),Ar=null),em=setTimeout(()=>{n.classList.remove("open","closing"),n.querySelector(".sheet").style.transform=""},220))}function Oo(n,e,t){let i=yh();Ar&&(Ar(),Ar=null);let r=i.classList.contains("open")&&!i.classList.contains("closing");clearTimeout(em),i.classList.remove("closing"),i.querySelector(".sheet").style.transform="",an("#modal-title").textContent=n;let s=an("#modal-body");s.innerHTML=e,s.scrollTop=0,i.classList.add("open"),Xe.duck(!0),r||Ji(dh),t&&(Ar=t(s)||null)}function dn(){let n=yh();!n.classList.contains("open")||n.classList.contains("closing")||(dh(),Rr(dh))}var wn=()=>an("#modal").classList.contains("open")||an("#lightbox").classList.contains("open"),Cr=(n,e)=>Oo(n,e.html,e.mount),Kp;function et(n,e=2400){let t=an("#toast");t.textContent=n,t.classList.add("show"),clearTimeout(Kp),Kp=setTimeout(()=>t.classList.remove("show"),e)}var ph=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function Ki(n=["\u{1F338}","\u{1F497}","\u2728","\u{1F389}","\u{1F490}"]){if(!ph())for(let e=0;e<28;e++){let t=document.createElement("div");t.className="confetti",t.textContent=n[e%n.length],t.style.left=Math.random()*100+"%",t.style.animationDuration=2+Math.random()*2+"s",t.style.animationDelay=Math.random()*.6+"s",(an("#phone")||document.body).appendChild(t),setTimeout(()=>t.remove(),5e3)}}async function vh(n,e="\uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694"){let t=!1;try{await navigator.clipboard.writeText(n),t=!0}catch{let i=document.createElement("textarea");i.value=n,i.readOnly=!0,i.style.cssText="position:fixed;top:0;left:0;opacity:0;-webkit-user-select:text;user-select:text",document.body.appendChild(i),i.focus(),i.select();try{i.setSelectionRange(0,n.length),t=document.execCommand("copy")}catch{t=!1}i.remove()}return Ke(10),et(t?`\u{1F4CB} ${e}`:"\uBCF5\uC0AC\uAC00 \uC548 \uB3FC\uC694. \uAE00\uC790\uB97C \uAE38\uAC8C \uB20C\uB7EC \uBCF5\uC0AC\uD574 \uC8FC\uC138\uC694"),t}function Yg(n){n.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",t=>{e.tagName!=="BUTTON"&&t.target.closest("button")||vh(e.dataset.copy,e.dataset.msg)}))}function zo(n={},e=""){return`<span class="${["avatar",n.longHair?"long":"",n.kid?"kid":"",e].filter(Boolean).join(" ")}" style="--outfit:${Fe(n.outfit||"#8FB8DE")};--hair:${Fe(n.hair||"#5A3A2A")}" aria-hidden="true"><i class="hd"></i><i class="bd"></i><i class="lg"></i>${n.glasses?'<i class="gls"></i>':""}${n.hat?`<i class="ht ht-${Fe(n.hat)}"></i>`:""}</span>`}var Zg=(n,e)=>{let t=Ft(n);return`<span class="who-chip" style="--c:${Fe(t?t.look.outfit:"#E6D5C6")}">${Fe(t?t.role||t.name:e||"\uC190\uB2D8")}</span>`};function xh(n){if(!n)return;if(!tn()){n.hidden=!0;return}let e=Fp();n.hidden=!1,e.loading&&!e.loaded?n.textContent="\uAC00\uC871 \uC18C\uC2DD\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\u2026":e.error&&!e.loaded?(n.innerHTML='\uC9C0\uAE08\uC740 \uC18C\uC2DD\uC744 \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC5B4\uC694. <button type="button" class="linklike st-retry">\uB2E4\uC2DC \uC2DC\uB3C4</button>',n.querySelector(".st-retry").onclick=()=>{bn({force:!0}),xh(n)}):e.error?n.textContent="\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBC1B\uC544 \uC628 \uC18C\uC2DD\uC774\uC5D0\uC694 (\uC9C0\uAE08\uC740 \uC5F0\uACB0\uC774 \uC5B4\uB824\uC6CC\uC694)":n.hidden=!0}function _h(n){let e=()=>n();return addEventListener("family:data",e),()=>removeEventListener("family:data",e)}var tm=(n,e)=>et(n.ok?e:"\uD734\uB300\uD3F0\uC5D0 \uBCF4\uAD00\uD588\uC5B4\uC694. \uC5F0\uACB0\uB418\uBA74 \uC790\uB3D9\uC73C\uB85C \uBCF4\uB0BC\uAC8C\uC694",n.ok?2400:3600),Jg=["\u{1F44D}","\u{1F602}","\u{1F979}","\u{1F497}"],Kg=n=>[...n].map(e=>e.codePointAt(0).toString(16)).join("");function nm(n,{compact:e=!1}={}){let t=i=>{let r=i.querySelector(`[data-rx="${CSS.escape(n)}"]`)||i,s=!1,a=()=>{if(!r.isConnected)return;let{texts:o,reacts:l}=Xp(n),c=Me(),h=!!Et();r.innerHTML=`
        <div class="rx-emojis">${Jg.map(m=>{let f=l[m],g=(f==null?void 0:f.size)||0;return`<button type="button" class="rx-e${f!=null&&f.has(c)?" on":""}" data-e="${m}" ${h?"":"disabled"} aria-label="${m} \uBC18\uC751 ${g}\uAC1C">${m}${g?`<b>${g}</b>`:""}</button>`}).join("")}</div>
        ${o.length?`<ul class="rx-list">${o.map(m=>`<li>${Zg(m.who,m.name)} <span>${Fe(m.text)}</span> <small>${qi(m.time)}</small></li>`).join("")}</ul>`:""}
        ${h?`${e?'<button type="button" class="linklike rx-open">\u{1F4AC} \uB2F5\uC7A5 \uC4F0\uAE30</button>':""}<form class="rx-form" autocomplete="off" ${e&&!s?"hidden":""}><input class="field rx-in" maxlength="80" placeholder="\uB2F5\uC7A5 \uD55C \uC904 \uB0A8\uAE30\uAE30" aria-label="\uB2F5\uC7A5"><button class="btn small pink" type="submit">\uBCF4\uB0B4\uAE30</button></form>`:""}`;let u=r.querySelector(".rx-open");u&&(u.onclick=()=>{s=!0,u.hidden=!0;let m=r.querySelector(".rx-form");m.hidden=!1,m.querySelector(".rx-in").focus()}),u&&s&&(u.hidden=!0),r.querySelectorAll(".rx-e").forEach(m=>m.onclick=async()=>{if(m.classList.contains("on")){et("\uC774\uBBF8 \uB9C8\uC74C\uC744 \uB0A8\uACBC\uC5B4\uC694 \u{1F60A}");return}Ke(8),Xe.sfx("heart"),m.classList.add("on"),await nn("replies",{id:`${c}-${n}-${Kg(m.dataset.e)}`,who:c,name:Sn(c),target:n,emoji:m.dataset.e,text:""}),a()});let d=r.querySelector(".rx-form");d&&(d.onsubmit=async m=>{m.preventDefault();let f=d.querySelector(".rx-in"),g=f.value.trim();if(!g)return;f.value="";let p=await nn("replies",{who:c,name:Sn(c),target:n,text:g,emoji:""});tm(p,"\u{1F4AC} \uB2F5\uC7A5\uC744 \uB0A8\uACBC\uC5B4\uC694"),Xe.sfx("paper"),a()})};return a(),_h(a)};return{html:`<div class="rx" data-rx="${Fe(n)}"></div>`,mount:t}}var Qg=(n,e)=>{let t=bi(n),i=!t&&Ea(n)&&!Wp(n.id),r=n.pending?"\u23F3":t?"\u{1F512}":n.openAt?"\u{1F381}":n.mine?"\u270D\uFE0F":"\u{1F48C}",s=n.pending?"\uBCF4\uB0B4\uB294 \uC911":t?`${un(n.openAt,!1)}\uC5D0 \uC5F4\uB824\uC694`:`${n.to==="all"?"\uBAA8\uB450\uC5D0\uAC8C":`To. ${sn(n.to)}`} \xB7 ${qi(n.time)}`;return`
  <button type="button" class="env${n.mine?" mine":""}${n.pending?" pending":""}${t?" locked":""}${i?" unread":""}" style="--c:${Fe(va(n.who))}" data-i="${e}" aria-label="${Fe(n.name||Sn(n.who))}\uC758 \uD3B8\uC9C0 \uC5F4\uAE30">
    <span class="flap" aria-hidden="true"></span>
    <span class="seal" aria-hidden="true">${r}</span>
    <b class="env-name">${t?"\u23F3 \uD0C0\uC784\uCEA1\uC290":Fe(n.name||Sn(n.who))}</b>
    <small class="env-meta">${Fe(s)}</small>
  </button>`};function ko(n,{onBack:e,to:t="",filter:i=""}={}){let r=Et(),s=!r,a=rn().filter(c=>c.id!==Me());return{html:`
    <p class="muted" style="line-height:1.7">${s?"\uAC00\uC871\uC5D0\uAC8C \uC548\uBD80 \uD55C\uB9C8\uB514 \uB0A8\uACA8 \uC8FC\uC138\uC694 \u{1F48C}":`<b>${Fe(r.role||r.name)}</b>${Fe(Xi(r.role||r.name,"\uC774/\uAC00").slice(String(r.role||r.name).length))} \uAC00\uC871\uC5D0\uAC8C \uBCF4\uB0B4\uB294 \uD3B8\uC9C0\uC608\uC694 \u{1F48C}`}</p>
    <form class="letter-form" autocomplete="off">
      ${s?'<input class="field l-name" maxlength="20" placeholder="\uC774\uB984" aria-label="\uC774\uB984" />':""}
      <div class="to-row" role="group" aria-label="\uBC1B\uB294 \uC0AC\uB78C">
        <button type="button" class="to-chip on" data-to="all">\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466} \uBAA8\uB450\uC5D0\uAC8C</button>
        ${a.map(c=>`<button type="button" class="to-chip" data-to="${Fe(c.id)}" style="--c:${Fe(c.look.outfit)}">${Fe(c.role||c.name)}</button>`).join("")}
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
    <div class="env-grid l-list" style="margin-top:10px"></div>`,mount:c=>{let h="all",u=i||"all",d=L=>{h=L,c.querySelectorAll(".to-chip").forEach(A=>A.classList.toggle("on",A.dataset.to===L))};c.querySelectorAll(".to-chip").forEach(L=>L.onclick=()=>{Ke(6),d(L.dataset.to)}),t&&a.some(L=>L.id===t)&&d(t);let m=c.querySelector(".l-tc"),f=c.querySelector(".tc-date"),g=c.querySelector(".l-open"),p=hn(ze(),1);g.min=p,g.value=hn(ze(),100),m.onchange=()=>{f.hidden=!m.checked};let x=c.querySelector(".l-list"),y=c.querySelector(".l-count"),v=c.querySelector(".l-status"),M=e||(()=>kn(n,{filter:u})),C=()=>{if(!c.isConnected)return;let L=at("letters"),A=u==="me"?L.filter(Ea):u==="mine"?L.filter(_=>_.who===Me()):L;y.textContent=L.length?`${L.length}\uD1B5`:"";let O=c.querySelector(".l-unread");if(O){let _=ni().length;O.textContent=_||""}c.querySelectorAll(".l-filter button").forEach(_=>_.classList.toggle("on",_.dataset.f===u)),x.innerHTML=A.length?A.slice(0,60).map(Qg).join(""):`<p class="muted">${u==="me"?"\uC544\uC9C1 \uB098\uC5D0\uAC8C \uC628 \uD3B8\uC9C0\uAC00 \uC5C6\uC5B4\uC694":u==="mine"?"\uC544\uC9C1 \uC4F4 \uD3B8\uC9C0\uAC00 \uC5C6\uC5B4\uC694":"\uC544\uC9C1 \uD3B8\uC9C0\uAC00 \uC5C6\uC5B4\uC694. \uCCAB \uD3B8\uC9C0\uB97C \uB0A8\uACA8 \uC8FC\uC138\uC694!"}</p>`,x.querySelectorAll(".env").forEach(_=>_.onclick=()=>{Ke(8);let P=A[+_.dataset.i];if(bi(P)){et(`\u23F3 \uC544\uC9C1 \uC5F4 \uC218 \uC5C6\uC5B4\uC694 \xB7 ${un(P.openAt)} (D-${ti(ze(),P.openAt)})`,3e3);return}_.classList.add("open"),setTimeout(()=>Ta(A,+_.dataset.i,M),ph()?0:260)}),xh(v)};c.querySelectorAll(".l-filter button").forEach(L=>L.onclick=()=>{u=L.dataset.f,Ke(6),C()}),C(),bn();let S=_h(C),T=c.querySelector(".letter-form"),k=c.querySelector(".l-send");return T.onsubmit=async L=>{var Z;L.preventDefault();let A=s?c.querySelector(".l-name").value.trim():r.name,O=c.querySelector(".l-msg").value.trim();if(!A||!O){et(s?"\uC774\uB984\uACFC \uD3B8\uC9C0 \uB0B4\uC6A9\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694":"\uD3B8\uC9C0 \uB0B4\uC6A9\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694");return}let _=m.checked?g.value||hn(ze(),100):"";if(_&&_<=ze()){et("\uC5F4\uB9AC\uB294 \uB0A0\uC740 \uB0B4\uC77C \uC774\uD6C4\uB85C \uACE8\uB77C \uC8FC\uC138\uC694");return}let P=k.textContent;k.disabled=!0,tn()&&(k.textContent="\uBCF4\uB0B4\uB294 \uC911\u2026");let U=await nn("letters",{who:s?"guest":Me(),name:A,to:h,message:O,openAt:_});if(k.textContent=P,k.disabled=!1,!c.isConnected)return;c.querySelector(".l-msg").value="",m.checked=!1,f.hidden=!0;let H=h==="all"?"\uAC00\uC871 \uBAA8\uB450\uC5D0\uAC8C":`${sn(h)}\uC5D0\uAC8C`;tm(U,_?`\u23F3 \uD0C0\uC784\uCEA1\uC290\uC744 \uBB3B\uC5C8\uC5B4\uC694. ${un(_)}\uC5D0 \uC5F4\uB824\uC694`:`\u{1F48C} ${H} \uD3B8\uC9C0\uB97C \uBCF4\uB0C8\uC5B4\uC694`),Ki(["\u{1F48C}","\u{1F497}","\u2728"]),Ke(20),Xe.sfx("paper"),n==null||n(U.item),u="all",C(),(Z=x.querySelector(".env"))==null||Z.scrollIntoView({behavior:ph()?"auto":"smooth",block:"center"})},S}}}function kn(n,e){Cr("\uC548\uBD80 \uC6B0\uCCB4\uD1B5",ko(n,e))}function im(n,e,t){let i=n[e];Ea(i)&&Vp(i.id);let r=nm(i.id);return{html:`
    <article class="paper" style="--c:${Fe(va(i.who))}" aria-label="${Fe(i.name)}\uC758 \uD3B8\uC9C0">
      <div class="paper-top"><span class="paper-stamp">${i.openAt?"\u{1F381}":i.mine?"\u270D\uFE0F":"\u{1F48C}"}</span><span>To. ${i.to==="all"?"\uC6B0\uB9AC \uAC00\uC871":Fe(Sn(i.to))}</span></div>
      ${i.openAt?`<p class="muted" style="margin:0 0 6px">\u23F3 ${qi(i.time)}\uC5D0 \uBB3B\uC5B4 \uB454 \uD0C0\uC784\uCEA1\uC290\uC774\uC5D0\uC694</p>`:""}
      <p class="paper-msg">${Fe(i.message)}</p>
      <div class="paper-from">From. <b>${Fe(i.name||Sn(i.who))}</b><small>${qi(i.time)}</small></div>
    </article>
    ${r.html}
    <div class="paper-nav">
      <button class="btn small p-prev" ${e<=0?"disabled":""}>\u2039 \uC774\uC804</button>
      <span class="muted">${e+1} / ${n.length}</span>
      <button class="btn small p-next" ${e>=n.length-1?"disabled":""}>\uB2E4\uC74C \u203A</button>
    </div>
    <button class="btn p-back" style="width:100%;margin-top:10px">\u2709\uFE0F \uC6B0\uCCB4\uD1B5\uC73C\uB85C</button>`,mount:o=>{let l=d=>{let m=e+d;for(;n[m]&&bi(n[m]);)m+=d;n[m]&&(Ke(6),Ta(n,m,t))};o.querySelector(".p-prev").onclick=()=>l(-1),o.querySelector(".p-next").onclick=()=>l(1),o.querySelector(".p-back").onclick=t;let c=o.querySelector(".paper"),h=0,u=0;return c.addEventListener("pointerdown",d=>{h=d.clientX,u=d.clientY}),c.addEventListener("pointerup",d=>{let m=d.clientX-h,f=d.clientY-u;Math.abs(m)>70&&Math.abs(m)>Math.abs(f)*1.5&&l(m<0?1:-1)}),r.mount(o)}}}function Ta(n,e,t=dn){Cr("\u{1F48C} \uD3B8\uC9C0",im(n,e,t))}function Ho(){let n=Qp.place||{},e=(i,r)=>r&&r.length?`<div class="card"><b>${i}</b><div class="muted" style="margin-top:6px;line-height:1.7">${r.map(Fe).join("<br>")}</div></div>`:"";return{html:`
    <div class="card center">
      <div class="serif" style="font-size:20px;font-weight:700">${Fe(n.name||"\uBAA8\uC774\uB294 \uACF3")}</div>
      <div style="margin-top:8px">${Fe(n.address||"")}</div>
      <div class="btns" style="justify-content:center">
        ${n.address?`<button class="btn small" data-copy="${Fe(n.address)}" data-msg="\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694">\u{1F4CB} \uC8FC\uC18C \uBCF5\uC0AC</button>`:""}
        ${n.tel?`<a class="btn small" href="tel:${Fe(n.tel)}">\u{1F4DE} \uC804\uD654</a>`:""}
      </div>
    </div>
    <div class="btns">
      ${n.naverMap?`<a class="btn" target="_blank" rel="noopener" href="${Fe(n.naverMap)}">\u{1F7E2} \uB124\uC774\uBC84 \uC9C0\uB3C4</a>`:""}
      ${n.kakaoMap?`<a class="btn" target="_blank" rel="noopener" href="${Fe(n.kakaoMap)}">\u{1F7E1} \uCE74\uCE74\uC624\uB9F5</a>`:""}
      ${n.tmap?`<a class="btn" target="_blank" rel="noopener" href="${Fe(n.tmap)}">\u{1F535} \uD2F0\uB9F5</a>`:""}
    </div>
    ${e("\u{1F687} \uC9C0\uD558\uCCA0",n.subway)}
    ${e("\u{1F68C} \uBC84\uC2A4",n.bus)}
    ${e("\u{1F697} \uC790\uAC00\uC6A9",n.car?[n.car]:[])}
    ${e("\u{1F17F}\uFE0F \uC8FC\uCC28",n.parking?[n.parking]:[])}`,mount:Yg}}function Aa(){Cr("\uBAA8\uC774\uB294 \uACF3",Ho())}function hh(){let n=qp();return n.length?`<ol class="board">${n.map((e,t)=>{var i,r;return`<li><span class="rank">${["\u{1F947}","\u{1F948}","\u{1F949}"][t]||t+1}</span>${zo(((i=Ft(e.who))==null?void 0:i.look)||{},"mini")}<b>${Fe(((r=Ft(e.who))==null?void 0:r.role)||e.name||Sn(e.who))}</b><span class="sc">${e.score} / ${e.total}</span></li>`}).join("")}</ol>`:'<p class="muted center">\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694. \uCCAB \uAE30\uB85D\uC758 \uC8FC\uC778\uACF5\uC774 \uB418\uC5B4 \uBCF4\uC138\uC694!</p>'}function Go(){let n=Qp.quiz||[];return{html:'<div class="quiz-box"></div>',mount:t=>{let i=t.querySelector(".quiz-box")||t,r=-1,s=0,a=null,o=!0,l=()=>{if(!o)return;if(r<0){i.innerHTML=`
          <p class="muted center" style="line-height:1.7">\uB204\uAC00 \uC6B0\uB9AC \uAC00\uC871\uC744 \uC81C\uC77C \uC798 \uC54C\uAE4C\uC694? \u{1F914}<br>${n.length}\uBB38\uC81C\uB97C \uD480\uBA74 \uC810\uC218\uD310\uC5D0 \uC774\uB984\uC774 \uC62C\uB77C\uAC00\uC694</p>
          <div class="card"><b>\u{1F3C6} \uC810\uC218\uD310</b>${hh()}</div>
          <button class="btn pink q-start" style="width:100%">\u2753 \uD034\uC988 \uC2DC\uC791</button>`,i.querySelector(".q-start").onclick=()=>{r=0,s=0,l()};return}if(r>=n.length){let h=s===n.length;i.innerHTML=`
          <div class="center" style="padding:14px 0 6px">
            <div style="font-size:60px">${h?"\u{1F3C6}":s>=n.length/2?"\u{1F970}":"\u{1F331}"}</div>
            <div class="quiz-q">${n.length}\uBB38\uC81C \uC911 <b style="color:var(--rose-deep)">${s}\uAC1C</b> \uB9DE\uD614\uC5B4\uC694!</div>
            <p class="muted">${h?"\uC6B0\uB9AC \uAC00\uC871 \uBC15\uC0AC\uB2D8\uC774\uC2DC\uB124\uC694! \u{1F495}":"\uC774\uC81C \uC6B0\uB9AC \uAC00\uC871\uC744 \uC870\uAE08 \uB354 \uC54C\uAC8C \uB410\uC8E0? \u{1F60A}"}</p>
          </div>
          <div class="card"><b>\u{1F3C6} \uC810\uC218\uD310</b><div class="q-board">${hh()}</div></div>
          <button class="btn pink q-again" style="width:100%">\uB2E4\uC2DC \uD480\uAE30</button>`,i.querySelector(".q-again").onclick=()=>{r=0,s=0,l()},h&&Ki(),Et()&&nn("scores",{who:Me(),name:Sn(Me()),score:s,total:n.length}).then(()=>{let u=i.querySelector(".q-board");u&&(u.innerHTML=hh())});return}let c=n[r];i.innerHTML=`
        <div class="progress-dots">${n.map((h,u)=>`<i class="${u<=r?"on":""}"></i>`).join("")}</div>
        <div class="quiz-q">Q${r+1}. ${Fe(c.q)}</div>
        ${c.options.map((h,u)=>`<button class="quiz-opt" data-k="${u}">${Fe(h)}</button>`).join("")}
        <p class="muted center q-cmt" style="min-height:24px"></p>`,i.querySelectorAll(".quiz-opt").forEach(h=>h.onclick=()=>{let u=+h.dataset.k;i.querySelectorAll(".quiz-opt").forEach(d=>d.disabled=!0),i.querySelectorAll(".quiz-opt")[c.answer].classList.add("right"),u===c.answer?(s++,Xe.sfx("ok")):(h.classList.add("wrong"),Xe.sfx("no")),i.querySelector(".q-cmt").textContent=(u===c.answer?"\u2B55 \uC815\uB2F5! ":"\u274C \uC544\uC26C\uC6CC\uC694! ")+(c.comment||""),a=setTimeout(()=>{r++,l()},1700)})};return l(),()=>{o=!1,clearTimeout(a)}}}}function Ra(){Cr("\uAC00\uC871 \uD034\uC988",Go())}async function Ca(){let n={title:Wt(),text:"\uC6B0\uB9AC \uAC00\uC871 \uB9C8\uC744\uC5D0 \uB180\uB7EC \uC640\uC694 \u{1F3E1}",url:location.href.split("#")[0]};if(navigator.share)try{await navigator.share(n);return}catch(e){if((e==null?void 0:e.name)==="AbortError")return}vh(n.url,"\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694")}var ey=[["","\u{1F333} \uB9C8\uC744 \uACF3\uACF3"],["me","\u{1F64B} \uB098"],["set","\u2699\uFE0F \uBCF4\uAE30 \xB7 \uC124\uC815"]];function rm(n){let e=(r,s)=>`<button class="menu-item${s?" small":""}" data-i="${n.indexOf(r)}"><span class="e">${r.emoji}</span>${Fe(r.label)}</button>`;return{html:`
    <p class="muted">\uC6D0\uD558\uB294 \uACF3\uC744 \uB204\uB974\uBA74 \uBC14\uB85C \uBCFC \uC218 \uC788\uC5B4\uC694</p>
    ${ey.map(([r,s])=>{let a=n.filter(o=>(o.g||"")===r);return a.length?`<h4 class="menu-sec">${s}</h4><div class="menu-grid${r==="set"?" small":""}">${a.map(o=>e(o,r==="set")).join("")}</div>`:""}).join("")}`,mount:r=>{r.querySelectorAll(".menu-item").forEach(s=>s.onclick=()=>{Ke(8),n[+s.dataset.i].go()})}}}function Eh(n){Cr("\uBC14\uB85C\uAC00\uAE30",rm(n))}function Vo(n,e=-1){return{html:(e>=0?[n[e]]:n).map(s=>`
    <div class="album-theme">
      <h3>${s.emoji} ${Fe(s.title)} <span class="muted" style="font-size:13px">${s.photos.length}\uC7A5</span></h3>
      <div class="muted" style="font-size:13px">${Fe(s.subtitle||"")}</div>
      <div class="album-grid">
        ${s.photos.map((a,o)=>`<button type="button" data-t="${n.indexOf(s)}" data-i="${o}" aria-label="${Fe(a.caption||s.title+" "+(o+1))}"><img loading="lazy" src="${Fe(xr(a,"thumb"))}" alt="" /></button>`).join("")}
      </div>
    </div>`).join(""),mount:s=>{s.querySelectorAll(".album-grid img").forEach(a=>{a.onerror=()=>{let o=a.parentElement,l=n[+o.dataset.t];a.onerror=null,a.src=_r(l,+o.dataset.i,l.photos[+o.dataset.i].src,300,300).toDataURL()}}),s.querySelectorAll(".album-grid button").forEach(a=>a.onclick=()=>Wo(n,+a.dataset.t,+a.dataset.i))}}}function Lr(n,e=-1){Cr(e>=0?`${n[e].title} \uC568\uBC94`:"\uC804\uCCB4 \uC568\uBC94",Vo(n,e))}var zn={themes:null,ti:0,i:0},Ge={s:1,x:0,y:0},ws=()=>an("#lightbox"),wa=()=>an("#lightbox img");function Tr(n){let e=wa();e.style.transition=n?"transform .25s ease":"none",e.style.transform=`translate(${Ge.x}px, ${Ge.y}px) scale(${Ge.s})`}function Ss(n=!1){Ge.s=1,Ge.x=Ge.y=0,Tr(n)}function Bo(){let n=wa(),e=ws(),t=Math.max(0,(n.offsetWidth*Ge.s-e.clientWidth)/2),i=Math.max(0,(n.offsetHeight*Ge.s-e.clientHeight)/2);Ge.x=Math.max(-t,Math.min(t,Ge.x)),Ge.y=Math.max(-i,Math.min(i,Ge.y))}function Wo(n,e,t){zn={themes:n,ti:e,i:t};let i=ws();i.classList.contains("open")||(i.classList.add("open"),Ji(mh)),sm()}function mh(){ws().classList.remove("open"),Ss()}function fh(){ws().classList.contains("open")&&(mh(),Rr(mh))}function sm(){let n=zn.themes[zn.ti],e=n.photos[zn.i],t=wa();Ss(),t.onerror=()=>{t.onerror=null,t.src=_r(n,zn.i,e.src,800,800).toDataURL()},t.src=xr(e),t.alt=e.caption||`${n.title} ${zn.i+1}`,an("#lightbox .cap").innerHTML=`${Fe(e.caption||`${n.emoji} ${n.title}`)}<small>${zn.i+1} / ${n.photos.length}</small>`}function ba(n){let e=zn.themes[zn.ti].photos.length;zn.i=(zn.i+n+e)%e,Ke(6),sm()}function ty(){let n=ws(),e=new Map,t=null,i=0,r=()=>{let a=wa().getBoundingClientRect();return{x:a.left+a.width/2-Ge.x,y:a.top+a.height/2-Ge.y}};n.addEventListener("pointerdown",a=>{if(!a.target.closest("button")){try{n.setPointerCapture(a.pointerId)}catch{}if(e.set(a.pointerId,{x:a.clientX,y:a.clientY}),e.size===1)t={type:"one",sx:a.clientX,sy:a.clientY,ox:Ge.x,oy:Ge.y,moved:!1};else if(e.size===2){let[o,l]=[...e.values()],c=r(),h=(o.x+l.x)/2,u=(o.y+l.y)/2;t={type:"pinch",d:Math.hypot(o.x-l.x,o.y-l.y)||1,s:Ge.s,c,px:(h-c.x-Ge.x)/Ge.s,py:(u-c.y-Ge.y)/Ge.s}}}}),n.addEventListener("pointermove",a=>{if(!(!e.has(a.pointerId)||!t)){if(e.set(a.pointerId,{x:a.clientX,y:a.clientY}),t.type==="pinch"&&e.size>=2){let[o,l]=[...e.values()];Ge.s=Math.max(1,Math.min(4,t.s*Math.hypot(o.x-l.x,o.y-l.y)/t.d)),Ge.x=(o.x+l.x)/2-t.c.x-Ge.s*t.px,Ge.y=(o.y+l.y)/2-t.c.y-Ge.s*t.py,Tr(!1)}else if(t.type==="one"){let o=a.clientX-t.sx,l=a.clientY-t.sy;if(Math.hypot(o,l)>8&&(t.moved=!0),Ge.s>1){Ge.x=t.ox+o,Ge.y=t.oy+l,Tr(!1);return}let c=wa();c.style.transition="none",c.style.transform=Math.abs(o)>Math.abs(l)?`translateX(${o}px)`:`translateY(${Math.max(0,l)}px) scale(${1-Math.min(.15,Math.max(0,l)/1500)})`}}});let s=a=>{if(!e.has(a.pointerId)||(e.delete(a.pointerId),!t))return;if(t.type==="pinch"){if(e.size===1){let[h]=[...e.values()];t={type:"one",sx:h.x,sy:h.y,ox:Ge.x,oy:Ge.y,moved:!0}}else e.size===0&&(t=null,Ge.s<1.05?Ss(!0):(Bo(),Tr(!0)));return}if(e.size>0)return;let o=a.clientX-t.sx,l=a.clientY-t.sy,c=t.moved;if(t=null,a.type==="pointercancel"){Ge.s>1?(Bo(),Tr(!0)):Ss(!0);return}if(!c){let h=performance.now();if(h-i<320)if(i=0,Ge.s>1)Ss(!0);else{let u=r();Ge.s=2.5,Ge.x=-(a.clientX-u.x)*1.5,Ge.y=-(a.clientY-u.y)*1.5,Bo(),Tr(!0)}else i=h;return}if(Ge.s>1){Bo(),Tr(!0);return}Math.abs(o)>60&&Math.abs(o)>Math.abs(l)?ba(o<0?1:-1):l>110&&l>Math.abs(o)?fh():Ss(!0)};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s)}function ny(){let n=an("#modal .sheet"),e=an("#modal .sheet-top"),t=null;e.addEventListener("pointerdown",r=>{if(!r.target.closest("button")){t={id:r.pointerId,y:r.clientY,t:performance.now()};try{e.setPointerCapture(r.pointerId)}catch{}n.style.transition="none"}}),e.addEventListener("pointermove",r=>{!t||r.pointerId!==t.id||(n.style.transform=`translateY(${Math.max(0,r.clientY-t.y)}px)`)});let i=r=>{if(!t||r.pointerId!==t.id)return;let s=r.clientY-t.y,a=s>40&&performance.now()-t.t<250;t=null,n.style.transition="",r.type==="pointerup"&&(s>100||a)?dn():n.style.transform=""};e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i)}var am="family-bigfont",La=()=>document.documentElement.classList.contains("big");function gh(n){document.documentElement.classList.toggle("big",n);try{localStorage.setItem(am,n?"1":"0")}catch{}document.querySelectorAll(".fs-toggle").forEach(e=>{e.textContent=n?"\uAC00-":"\uAC00+",e.setAttribute("aria-label",n?"\uAE00\uC790 \uC791\uAC8C":"\uAE00\uC790 \uD06C\uAC8C")})}function Mh(){try{localStorage.getItem(am)==="1"&&gh(!0)}catch{}document.addEventListener("click",e=>{e.target.closest(".fs-toggle")&&(Ke(6),gh(!La()))}),an("#modal-close").onclick=dn,an("#modal .backdrop").onclick=dn;let n=ws();n.querySelector(".lb-close").onclick=fh,n.querySelector(".prev").onclick=()=>ba(-1),n.querySelector(".next").onclick=()=>ba(1),ty(),ny(),addEventListener("keydown",e=>{n.classList.contains("open")?(e.key==="ArrowRight"&&ba(1),e.key==="ArrowLeft"&&ba(-1),e.key==="Escape"&&fh()):e.key==="Escape"&&dn()})}var{esc:Re,avatarHTML:Pr,toast:_t,confetti:cm,onData:Pa,openView:ri,closeModal:$o,replyView:iy,paintStatus:ry}=Ts,om=window.FAMILY,bh=(n,e)=>{try{dispatchEvent(new CustomEvent(n,{detail:e}))}catch{}},hm=n=>{let[e,t]=String(n).split("-").map(Number);return`${e}\uC6D4 ${t}\uC77C`},sy=n=>{let e=ze(),t=`${e.slice(0,4)}-${n}`;return t<e&&(t=`${+e.slice(0,4)+1}-${n}`),ti(e,t)},ii={onSent:null,takePhoto:null};function Sh({hero:n=!0}={}){return{html:'<div class="fam-box"></div>',mount:t=>{let i=t.querySelector(".fam-box"),r=()=>{var c,h;if(!i.isConnected)return;let s=Do(),a=ji(),o=ys(3),l=gs();i.innerHTML=`
        ${n?`<div class="inv-hero">
          <div class="en">FAMILY VILLAGE</div>
          <div class="names">${Re(Wt())}</div>
          ${a>0?`<div class="muted">\uD568\uAED8\uD55C \uC9C0 <b style="color:var(--rose-deep)">${a.toLocaleString()}\uC77C\uC9F8</b></div>`:""}
        </div>`:""}
        ${l.length?`<div class="bday-banner">\u{1F382} \uC624\uB298\uC740 <b>${l.map(u=>Re(u.role||u.name)).join(", ")}</b> \uC0DD\uC77C\uC774\uC5D0\uC694! <button class="btn small pink f-bday" type="button">\uCD95\uD558 \uD3B8\uC9C0 \uC4F0\uAE30</button></div>`:""}
        ${om.greeting?`<p class="inv-greet">${Re(om.greeting)}</p>`:""}
        <div class="card">
          <b>\u{1F463} \uC624\uB298 \uB2E4\uB140\uAC04 \uAC00\uC871</b>
          <div class="chips-row">${s.length?s.map(u=>`<span class="who-chip" style="--c:${Re(u.look.outfit)}">${Re(u.role||u.name)}</span>`).join(""):'<span class="muted">\uC544\uC9C1 \uC544\uBB34\uB3C4 \uC548 \uC654\uC5B4\uC694</span>'}</div>
          ${Et()?`<p class="muted" style="margin:8px 0 0">\uB0B4 \uCD9C\uC11D \uB3C4\uC7A5 <b>${kp()}\uAC1C</b> \u{1F43E}</p>`:""}
        </div>
        <div class="mem-grid">
          ${rn().map(u=>`
            <button type="button" class="mem-card" data-id="${Re(u.id)}">
              ${Pr(u.look)}
              <b>${Re(u.role||u.name)}${u.id===Me()?" <small>(\uB098)</small>":""}</b>
              <small>${Re(u.name)}${u.birthday?` \xB7 \u{1F382} ${hm(u.birthday)}`:""}</small>
              <span class="mem-heart">\u{1F497} ${xs(u.id).length}</span>
            </button>`).join("")}
        </div>
        ${o.length?`<div class="card"><b>\u{1F4C5} \uB2E4\uAC00\uC624\uB294 \uB0A0</b>${o.map(u=>`<div class="up-row"><span>${u.emoji||"\u{1F4CC}"} ${Re(u.title)}</span><span class="dd">${_a(u.dday)}</span></div>`).join("")}
          <button class="btn small f-cal" type="button" style="margin-top:8px">\uB2EC\uB825 \uBCF4\uAE30</button></div>`:""}
        <div class="btns">
          <button class="btn pink f-q" type="button">\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38</button>
          <button class="btn f-mail" type="button">\u2709\uFE0F \uD3B8\uC9C0 \uC4F0\uAE30</button>
          <button class="btn f-share" type="button">\u{1F517} \uB9C8\uC744 \uC8FC\uC18C \uBCF4\uB0B4\uAE30</button>
        </div>
        <p class="muted l-status" role="status" hidden></p>`,i.querySelectorAll(".mem-card").forEach(u=>u.onclick=()=>{Ke(8),As(u.dataset.id)}),i.querySelector(".f-q").onclick=()=>Ir(),i.querySelector(".f-mail").onclick=()=>kn(ii.onSent),i.querySelector(".f-share").onclick=Ca,(c=i.querySelector(".f-cal"))==null||c.addEventListener("click",()=>Ia()),(h=i.querySelector(".f-bday"))==null||h.addEventListener("click",()=>{var u;return kn(ii.onSent,{to:((u=l.find(d=>d.id!==Me()))==null?void 0:u.id)||l[0].id})}),ry(i.querySelector(".l-status"))};return r(),bn(),Pa(r)}}}function qo(){ri(Wt(),Sh())}function wh(n){if(!Et())return _t("\uD558\uD2B8\uB294 \uAC00\uC871\uB9CC \uBCF4\uB0BC \uC218 \uC788\uC5B4\uC694"),!1;if(n===Me())return _t("\uB098\uC5D0\uAC8C\uB294 \uD558\uD2B8\uB97C \uBCF4\uB0BC \uC218 \uC5C6\uC5B4\uC694 \u{1F606}"),!1;if(Fo(n))return _t(`\uC624\uB298\uC740 \uC774\uBBF8 ${sn(n)}\uC5D0\uAC8C \uD558\uD2B8\uB97C \uBCF4\uB0C8\uC5B4\uC694 \u{1F497}`),!1;let e=ze();return nn("hearts",{id:`${Me()}-${n}-${e}`,who:Me(),to:n,day:e}),bh("family:heart",{to:n}),Ke(15),Xe.sfx("heart"),_t(`\u{1F497} ${sn(n)}\uC5D0\uAC8C \uD558\uD2B8\uB97C \uBCF4\uB0C8\uC5B4\uC694`),!0}function ay(n){return{html:'<div class="mem-box"></div>',mount:t=>{let i=t.querySelector(".mem-box"),r=()=>{var f,g,p,x,y;let s=Ft(n);if(!s||!i.isConnected)return;let a=s.id===Me(),o=ze(),l=s.birthday?sy(s.birthday):null,c=Ei(o).find(v=>v.who===s.id),h=vs(),u=!!rh(o)||a,d=at("letters").filter(v=>v.who===s.id&&!bi(v)).slice(0,2),m=a?ni().length:0;i.innerHTML=`
        <div class="mem-hero" style="--c:${Re(s.look.outfit)}">
          ${Pr(s.look,"big")}
          <div class="names">${Re(s.name)}</div>
          <div class="muted">${Re(s.role||"")}${s.birthday?` \xB7 \u{1F382} ${hm(s.birthday)}${l===0?' <b style="color:var(--rose-deep)">\uC624\uB298!</b>':` (D-${l})`}`:""}</div>
          ${s.line?`<p class="mem-line">\u201C${Re(s.line)}\u201D</p>`:""}
        </div>
        ${l===0?`<div class="bday-banner">\u{1F382} \uC624\uB298\uC740 ${Re(s.role||s.name)} \uC0DD\uC77C\uC774\uC5D0\uC694!</div>`:""}
        <div class="stat-row">
          <div><b>\u{1F497} ${xs(s.id).length}</b><small>\uBC1B\uC740 \uD558\uD2B8 (\uC624\uB298 ${zp(s.id).length})</small></div>
          <div><b>\u{1F463} ${new Set(at("visits").filter(v=>v.who===s.id).map(v=>v.day)).size}</b><small>\uCD9C\uC11D \uB3C4\uC7A5</small></div>
          <div><b>\u{1F4A7} ${at("water").filter(v=>v.who===s.id).length}</b><small>\uB098\uBB34\uC5D0 \uC900 \uBB3C</small></div>
        </div>
        <div class="btns">
          ${a?`
            <button class="btn pink m-look" type="button">\u{1F3A8} \uB0B4 \uCE90\uB9AD\uD130 \uAFB8\uBBF8\uAE30</button>
            <button class="btn m-inbox" type="button">\u{1F48C} \uB098\uC5D0\uAC8C \uC628 \uD3B8\uC9C0${m?` <b class="badge">${m}</b>`:""}</button>`:`
            <button class="btn pink m-heart" type="button" ${Fo(s.id)?"disabled":""}>${Fo(s.id)?"\u{1F497} \uC624\uB298 \uD558\uD2B8 \uBCF4\uB0C4":"\u{1F497} \uD558\uD2B8 \uBCF4\uB0B4\uAE30"}</button>
            <button class="btn m-mail" type="button">\u2709\uFE0F \uD3B8\uC9C0 \uC4F0\uAE30</button>
            ${s.phone?`<a class="btn small" href="tel:${Re(s.phone)}">\u{1F4DE}</a><a class="btn small" href="sms:${Re(s.phone)}">\u{1F4AC}</a>`:""}`}
        </div>
        ${h?`<div class="card"><b>\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38</b><p class="muted" style="margin:6px 0">${Re(h.q)}</p>
          ${c?u?`<p class="ans-text">${Re(c.text)}</p>`:'<p class="muted">\u{1F512} \uB098\uB3C4 \uB2F5\uD558\uBA74 \uBCFC \uC218 \uC788\uC5B4\uC694</p>':'<p class="muted">\uC544\uC9C1 \uB2F5\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694</p>'}
          <button class="btn small m-q" type="button">\uB2F5\uD558\uB7EC \uAC00\uAE30</button></div>`:""}
        ${d.length?`<div class="card"><b>\u2709\uFE0F ${Re(s.role||s.name)}\uC758 \uCD5C\uADFC \uD3B8\uC9C0</b>${d.map((v,M)=>`<button type="button" class="up-row linkrow" data-i="${M}"><span>${Re(String(v.message).split(`
`)[0].slice(0,26))}</span><span class="muted">${qi(v.time)}</span></button>`).join("")}</div>`:""}`,(f=i.querySelector(".m-heart"))==null||f.addEventListener("click",()=>{wh(s.id)&&r()}),(g=i.querySelector(".m-mail"))==null||g.addEventListener("click",()=>kn(ii.onSent,{to:s.id})),(p=i.querySelector(".m-look"))==null||p.addEventListener("click",()=>Lh()),(x=i.querySelector(".m-inbox"))==null||x.addEventListener("click",()=>kn(ii.onSent,{filter:"me"})),(y=i.querySelector(".m-q"))==null||y.addEventListener("click",()=>Ir()),i.querySelectorAll(".linkrow").forEach(v=>v.onclick=()=>Ta(d,+v.dataset.i,()=>As(n)))};return r(),Pa(r)}}}function As(n){let e=Ft(n);ri(e?e.id===Me()?"\u{1F3E0} \uB0B4 \uC9D1":`${e.emoji||"\u{1F3E0}"} ${e.role||e.name}\uB124 \uC9D1`:"\uC6B0\uB9AC \uAC00\uC871",ay(n))}function Th(n=ze(),{embedded:e=!1}={}){return{html:'<div class="q-box"></div>',mount:i=>{let r=i.querySelector(".q-box"),s=[],a=()=>{var f;if(!r.isConnected)return;s.splice(0).forEach(g=>g());let l=vs(n);if(!l){r.innerHTML='<p class="muted">config.js\uC5D0 \uC9C8\uBB38\uC774 \uC5C6\uC5B4\uC694</p>';return}let c=Ei(n),h=rh(n),u=n===ze(),d=c.filter(g=>g.who!==Me());r.innerHTML=`
        <div class="q-hero">
          <div class="muted">${u?`\uC624\uB298\uC758 \uC9C8\uBB38 \xB7 ${un(n)}`:`${un(n)}\uC758 \uC9C8\uBB38`}</div>
          <div class="q-text">${Re(l.q)}</div>
          <div class="muted">${c.length?`${c.length}\uBA85\uC774 \uB2F5\uD588\uC5B4\uC694`:"\uC544\uC9C1 \uC544\uBB34\uB3C4 \uB2F5\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694"}</div>
        </div>
        ${Et()?`
          <form class="q-form" autocomplete="off" ${h?"hidden":""}>
            <textarea class="field q-in" maxlength="300" placeholder="\uB098\uC758 \uB2F5\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694 (300\uC790)" aria-label="\uB098\uC758 \uB2F5">${h?Re(h.text):""}</textarea>
            <button class="btn pink" type="submit" style="width:100%;margin-top:8px">${h?"\u270F\uFE0F \uACE0\uCE5C \uB2F5 \uC62C\uB9AC\uAE30":"\u{1F4AC} \uB2F5\uD558\uACE0 \uAC00\uC871 \uB2F5 \uBCF4\uAE30"}</button>
          </form>`:`<p class="muted center">\u{1F64B} \uB2F5\uC740 \uAC00\uC871\uB9CC \uB0A8\uAE38 \uC218 \uC788\uC5B4\uC694. \uBA54\uB274\uC758 '\uB098\uB294 \uB204\uAD6C?'\uC5D0\uC11C \uB098\uB97C \uACE8\uB77C \uC8FC\uC138\uC694</p>`}
        <div class="ans-list">
          ${h?lm(h,!0):""}
          ${h?d.map(g=>lm(g)).join(""):d.map(g=>{var p,x;return`<div class="ans-card locked" style="--c:${Re(((p=Ft(g.who))==null?void 0:p.look.outfit)||"#E6D5C6")}">${Pr(((x=Ft(g.who))==null?void 0:x.look)||{},"mini")}<b>${Re(sn(g.who)||g.name)}</b><span class="muted">\u{1F512} \uB2F5\uD558\uBA74 \uC5F4\uB824\uC694</span></div>`}).join("")}
        </div>
        ${e?"":`<div class="divider"></div><b>\u{1F5D3}\uFE0F \uC9C0\uB09C \uC9C8\uBB38</b><div class="past-q">${Op(14).filter(g=>g.day!==n).map(g=>`<button type="button" class="up-row linkrow" data-day="${g.day}"><span>${Re(g.q)}</span><span class="muted">${un(g.day,!1)} \xB7 ${g.answers.length}\uBA85</span></button>`).join("")}</div>`}`;let m=r.querySelector(".q-form");m&&(m.onsubmit=async g=>{g.preventDefault();let p=m.querySelector(".q-in").value.trim();if(!p){_t("\uB2F5\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694");return}let x=await nn("answers",{id:`${Me()}-${n}`,who:Me(),name:Sn(Me()),day:n,q:l.idx,text:p});_t(x.ok?h?"\u270F\uFE0F \uB2F5\uC744 \uACE0\uCCE4\uC5B4\uC694":"\u{1F4AC} \uB2F5\uD588\uC5B4\uC694! \uAC00\uC871\uC758 \uB2F5\uC774 \uC5F4\uB838\uC5B4\uC694":"\uD734\uB300\uD3F0\uC5D0 \uBCF4\uAD00\uD588\uC5B4\uC694. \uC5F0\uACB0\uB418\uBA74 \uC790\uB3D9\uC73C\uB85C \uC62C\uB9B4\uAC8C\uC694",2600),h||(cm(["\u{1F4AC}","\u{1F497}","\u2728"]),Xe.sfx("tada")),a()}),(f=r.querySelector(".a-edit"))==null||f.addEventListener("click",()=>{var g;m.hidden=!1,(g=r.querySelector(".ans-card.me"))==null||g.remove(),m.querySelector(".q-in").focus()}),r.querySelectorAll(".past-q .linkrow").forEach(g=>g.onclick=()=>Ir(g.dataset.day)),h&&r.querySelectorAll(".ans-card[data-id]").forEach(g=>{let p=iy(g.dataset.id,{compact:!0});g.insertAdjacentHTML("beforeend",p.html),s.push(p.mount(g))})};a(),bn();let o=Pa(a);return()=>{o(),s.forEach(l=>l())}}}}function lm(n,e=!1){let t=Ft(n.who);return`<div class="ans-card${e?" me":""}" data-id="${Re(n.id)}" style="--c:${Re((t==null?void 0:t.look.outfit)||"#E6D5C6")}">
    <div class="ans-top">${Pr((t==null?void 0:t.look)||{},"mini")}<b>${Re(t?t.role||t.name:n.name)}${e?" (\uB098)":""}</b><small class="muted">${qi(n.time)}</small>${e?'<button type="button" class="linklike a-edit">\uACE0\uCE58\uAE30</button>':""}</div>
    <p class="ans-text">${Re(n.text)}</p>
  </div>`}function Ir(n=ze()){ri("\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38",Th(n))}function oy(n){let e=n.key.replace(/-/g,""),t=hn(n.key,1).replace(/-/g,""),i=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//family-village//KO","BEGIN:VEVENT",`UID:${e}-${encodeURIComponent(n.title).slice(0,30)}@family-village`,`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"")}`,`DTSTART;VALUE=DATE:${e}`,`DTEND;VALUE=DATE:${t}`,...n.yearly?["RRULE:FREQ=YEARLY"]:[],`SUMMARY:${n.title}`,...n.note?[`DESCRIPTION:${n.note}`]:[],"END:VEVENT","END:VCALENDAR"].join(`\r
`),r=document.createElement("a");r.href=URL.createObjectURL(new Blob([i],{type:"text/calendar"})),r.download="family-day.ics",r.click(),_t("\u{1F4C5} \uCE98\uB9B0\uB354 \uD30C\uC77C\uC744 \uC5F4\uC5B4 \uC800\uC7A5\uD574 \uC8FC\uC138\uC694")}function Ah(){return{html:'<div class="cal-box"></div>',mount:e=>{let t=e.querySelector(".cal-box"),i=ze(),r=+i.slice(0,4),s=+i.slice(5,7),a=i,o=()=>{let l=Bp(r,s),c=new Date(Date.UTC(r,s-1,1)).getUTCDay(),h=new Date(Date.UTC(r,s,0)).getUTCDate(),u="<tr>"+"<td></td>".repeat(c);for(let f=1;f<=h;f++){let g=`${r}-${String(s).padStart(2,"0")}-${String(f).padStart(2,"0")}`,p=(c+f-1)%7,x=l[g];u+=`<td class="${p===0?"sun":""}${g===i?" today":""}${g===a?" pick":""}"><button type="button" data-k="${g}">${f}${x?`<i>${x[0].emoji||"\u2022"}</i>`:""}</button></td>`,p===6&&f!==h&&(u+="</tr><tr>")}u+="</tr>";let d=l[a]||[],m=ys(8);t.innerHTML=`
        <div class="cal-nav"><button class="btn small c-prev" type="button" aria-label="\uC774\uC804 \uB2EC">\u2039</button><b>${r}\uB144 ${s}\uC6D4</b><button class="btn small c-next" type="button" aria-label="\uB2E4\uC74C \uB2EC">\u203A</button></div>
        <table class="cal fam-cal"><tr>${["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"].map((f,g)=>`<th class="${g===0?"sun":""}">${f}</th>`).join("")}</tr>${u}</table>
        <div class="card">${d.length?d.map(f=>`<div class="up-row"><span>${f.emoji||"\u{1F4CC}"} ${Re(f.title)}</span>${f.note?`<small class="muted">${Re(f.note)}</small>`:""}</div>`).join(""):`<span class="muted">${un(a)} \xB7 \uD2B9\uBCC4\uD55C \uB0A0\uC774 \uC5C6\uC5B4\uC694</span>`}</div>
        <b>\u23F0 \uB2E4\uAC00\uC624\uB294 \uB0A0</b>
        <div class="ups">${m.map((f,g)=>`<div class="up-row"><span>${f.emoji||"\u{1F4CC}"} ${Re(f.title)}<small class="muted"> \xB7 ${un(f.key)}${f.note?` \xB7 ${Re(f.note)}`:""}</small></span><span class="dd">${_a(f.dday)}</span><button type="button" class="linklike c-ics" data-i="${g}">\uCE98\uB9B0\uB354\uC5D0</button></div>`).join("")||'<p class="muted">config.js\uC758 events\uC5D0 \uB0A0\uC9DC\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694</p>'}</div>`,t.querySelector(".c-prev").onclick=()=>{s--,s<1&&(s=12,r--),o()},t.querySelector(".c-next").onclick=()=>{s++,s>12&&(s=1,r++),o()},t.querySelectorAll(".fam-cal button").forEach(f=>f.onclick=()=>{a=f.dataset.k,Ke(6),o()}),t.querySelectorAll(".c-ics").forEach(f=>f.onclick=()=>oy(m[+f.dataset.i]))};o()}}}function Ia(){ri("\u{1F4C5} \uAC00\uC871 \uB2EC\uB825",Ah())}function Rh(){return{html:'<div class="poll-box"></div>',mount:e=>{let t=e.querySelector(".poll-box"),i=!1,r=()=>{var o,l;if(!t.isConnected)return;let s=$p();t.innerHTML=`
        <p class="muted">\uAC00\uC871 \uC77C\uC740 \uB2E4 \uAC19\uC774 \uC815\uD574\uC694. \uB9C8\uC74C\uC774 \uBC14\uB00C\uBA74 \uB2E4\uC2DC \uB20C\uB7EC\uB3C4 \uB3FC\uC694 \u{1F5F3}\uFE0F</p>
        ${s.map((c,h)=>{let u=ah(c.id),d=u.size,m=u.get(Me()),f=c.cfg?"":`<small class="muted"> \xB7 ${Re(sn(c.who)||c.name)}\uAC00 \uB9CC\uB4E0 \uD22C\uD45C</small>`;return`<div class="card poll" data-p="${h}"><b>${Re(c.q)}</b>${f}
            ${c.options.map((g,p)=>{let x=[...u.entries()].filter(([,v])=>v===p).map(([v])=>v),y=d?Math.round(x.length/d*100):0;return`<button type="button" class="poll-opt${m===p?" on":""}" data-k="${p}" ${Et()?"":"disabled"}>
                <span class="bar" style="width:${y}%"></span><span class="txt">${Re(g)}</span><span class="cnt">${x.length?`${x.length}\uD45C`:""}</span>
                ${x.length?`<span class="voters">${x.map(v=>{var M;return`<i style="--c:${Re(((M=Ft(v))==null?void 0:M.look.outfit)||"#ccc")}">${Re(sn(v))}</i>`}).join("")}</span>`:""}
              </button>`}).join("")}
            <small class="muted">${d?`${d}\uBA85 \uCC38\uC5EC`:"\uC544\uC9C1 \uC544\uBB34\uB3C4 \uC548 \uD588\uC5B4\uC694"}</small></div>`}).join("")}
        ${Et()?i?`
          <form class="card poll-new" autocomplete="off">
            <b>\uFF0B \uC0C8 \uD22C\uD45C</b>
            <input class="field pn-q" maxlength="40" placeholder="\uBB34\uC5C7\uC744 \uC815\uD560\uAE4C\uC694? (\uC608: \uC77C\uC694\uC77C \uC810\uC2EC \uBA54\uB274)" aria-label="\uC9C8\uBB38">
            ${[0,1,2,3].map(c=>`<input class="field pn-o" maxlength="20" placeholder="\uBCF4\uAE30 ${c+1}${c>1?" (\uC120\uD0DD)":""}" aria-label="\uBCF4\uAE30 ${c+1}">`).join("")}
            <div class="btns"><button class="btn pink" type="submit">\uD22C\uD45C \uB9CC\uB4E4\uAE30</button><button class="btn pn-cancel" type="button">\uCDE8\uC18C</button></div>
          </form>`:'<button class="btn p-make" type="button" style="width:100%">\uFF0B \uC0C8 \uD22C\uD45C \uB9CC\uB4E4\uAE30</button>':'<p class="muted center">\u{1F64B} \uD22C\uD45C\uB294 \uAC00\uC871\uB9CC \uD560 \uC218 \uC788\uC5B4\uC694</p>'}`,t.querySelectorAll(".poll").forEach(c=>{let h=s[+c.dataset.p];c.querySelectorAll(".poll-opt").forEach(u=>u.onclick=async()=>{let d=+u.dataset.k;if(ah(h.id).get(Me())===d){_t("\uC774\uBBF8 \uACE0\uB978 \uBCF4\uAE30\uC608\uC694");return}Ke(10),Xe.sfx("pop"),await nn("votes",{id:`${Me()}-${h.id}`,who:Me(),poll:h.id,choice:d}),_t(`\u{1F5F3}\uFE0F '${h.options[d]}'\uC5D0 \uD55C \uD45C!`),r()})}),(o=t.querySelector(".p-make"))==null||o.addEventListener("click",()=>{var c;i=!0,r(),(c=t.querySelector(".pn-q"))==null||c.focus()}),(l=t.querySelector(".pn-cancel"))==null||l.addEventListener("click",()=>{i=!1,r()});let a=t.querySelector(".poll-new");a&&(a.onsubmit=async c=>{c.preventDefault();let h=a.querySelector(".pn-q").value.trim(),u=[...a.querySelectorAll(".pn-o")].map(d=>d.value.trim().replace(/\|/g,"/")).filter(Boolean);if(!h||u.length<2){_t("\uC9C8\uBB38\uACFC \uBCF4\uAE30 \uB450 \uAC1C \uC774\uC0C1\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694");return}i=!1,await nn("polls",{who:Me(),name:Sn(Me()),q:h,options:u.join("|")}),_t("\u{1F5F3}\uFE0F \uC0C8 \uD22C\uD45C\uB97C \uB9CC\uB4E4\uC5C8\uC5B4\uC694. \uAC00\uC871\uC5D0\uAC8C \uC54C\uB824 \uC8FC\uC138\uC694!"),r()})};return r(),bn(),Pa(r)}}}function Xo(){ri("\u{1F5F3}\uFE0F \uAC00\uC871 \uD22C\uD45C\uD568",Rh())}var ly=["\u{1F330}","\u{1F331}","\u{1F33F}","\u{1F333}","\u{1F338}","\u{1F34E}"];function cy(){if(!Et())return _t("\uBB3C\uC740 \uAC00\uC871\uB9CC \uC904 \uC218 \uC788\uC5B4\uC694"),!1;let n=Mi();if(n.wateredToday)return _t("\u{1F4A7} \uC624\uB298\uC740 \uC774\uBBF8 \uBB3C\uC744 \uC92C\uC5B4\uC694. \uB0B4\uC77C \uB610 \uC640 \uC8FC\uC138\uC694"),!1;let e=ze();return nn("water",{id:`${Me()}-${e}`,who:Me(),day:e}),Ke(20),Xe.sfx("water"),setTimeout(()=>{let t=Mi();bh("family:water",{grew:t.stage>n.stage,stage:t.stage}),t.stage>n.stage?(cm(["\u{1F331}","\u{1F338}","\u2728","\u{1F34E}"]),Xe.sfx("tada"),_t(`\u{1F389} ${Xi(t.name,"\uC774/\uAC00")} '${t.stageName}'${Xi(t.stageName,"\uC73C\uB85C/\uB85C").slice(t.stageName.length)} \uC790\uB790\uC5B4\uC694!`,3600)):_t(t.next==null?"\u{1F4A7} \uBB3C\uC744 \uC92C\uC5B4\uC694. \uC5F4\uB9E4\uAC00 \uC8FC\uB801\uC8FC\uB801\uD574\uC694 \u{1F34E}":`\u{1F4A7} \uBB3C\uC744 \uC92C\uC5B4\uC694! ${t.toNext}\uBC88 \uB354 \uC8FC\uBA74 '${Uo[t.stage+1]}'\uC774 \uB3FC\uC694`,3e3)},30),!0}function Ch(){return{html:'<div class="tree-box"></div>',mount:e=>{let t=e.querySelector(".tree-box"),i=()=>{if(!t.isConnected)return;let r=Mi(),s=ze(),a=Array.from({length:7},(o,l)=>hn(s,l-6)).map(o=>({k:o,n:new Set(at("water").filter(l=>l.day===o).map(l=>l.who)).size}));t.innerHTML=`
        <div class="tree-hero">
          <div class="tree-emoji">${ly[r.stage]}</div>
          <div class="names">${Re(r.name)}</div>
          <div class="muted">\uC9C0\uAE08\uC740 <b>${r.stageName}</b> \xB7 \uBAA8\uC778 \uBB3C ${r.total}\uBC88${r.thirsty?" \xB7 \u{1F4A7} \uBAA9\uB9D0\uB77C\uC694":""}</div>
          <div class="prog"><i style="width:${Math.round(r.progress*100)}%"></i></div>
          <small class="muted">${r.next==null?"\uB2E4 \uC790\uB790\uC5B4\uC694! \uC5F4\uB9E4\uAC00 \uC5F4\uB838\uC5B4\uC694 \u{1F34E}":`${r.toNext}\uBC88 \uB354 \uC8FC\uBA74 '${Uo[r.stage+1]}'`}</small>
        </div>
        <p class="muted center">\uAC00\uC871\uC774 \uD558\uB8E8\uC5D0 \uD55C \uBC88\uC529 \uBB3C\uC744 \uC904 \uC218 \uC788\uC5B4\uC694. \uB2E4 \uAC19\uC774 \uC624\uB798 \uB4E4\uB97C\uC218\uB85D \uB098\uBB34\uAC00 \uC790\uB77C\uC694</p>
        <button class="btn pink t-water" type="button" style="width:100%;padding:14px" ${!Et()||r.wateredToday?"disabled":""}>${Et()?r.wateredToday?"\u{1F4A7} \uC624\uB298\uC740 \uBB3C\uC744 \uC92C\uC5B4\uC694":"\u{1F4A7} \uBB3C \uC8FC\uAE30":"\u{1F64B} \uAC00\uC871\uB9CC \uBB3C\uC744 \uC904 \uC218 \uC788\uC5B4\uC694"}</button>
        <div class="card"><b>\uC624\uB298 \uBB3C \uC900 \uAC00\uC871</b><div class="chips-row">${r.todayWho.length?r.todayWho.map(o=>{var l;return`<span class="who-chip" style="--c:${Re(((l=Ft(o))==null?void 0:l.look.outfit)||"#ccc")}">${Re(sn(o))}</span>`}).join(""):'<span class="muted">\uC544\uC9C1 \uC5C6\uC5B4\uC694</span>'}</div></div>
        <div class="week">${a.map(o=>`<div><i style="height:${8+o.n*12}px"></i><small>${un(o.k,!1).replace("\uC6D4 ","/").replace("\uC77C","")}</small></div>`).join("")}</div>`,t.querySelector(".t-water").onclick=()=>{cy()&&setTimeout(i,60)}};return i(),bn(),Pa(i)}}}function jo(){ri("\u{1F331} "+Mi().name,Ch())}var um="family-guest-look";function Si(){let n=Et();if(n)return{...n.look};try{let e=JSON.parse(localStorage.getItem(um)||"null");if(e)return e}catch{}return{outfit:fs[Math.floor(Math.random()*fs.length)],hair:Po[Math.floor(Math.random()*5)],longHair:Math.random()<.5}}function hy(){let n=Si(),e=[["","\uC5C6\uC74C"],["cap","\uC57C\uAD6C \uBAA8\uC790"],["beanie","\uD138\uBAA8\uC790"],["flower","\uAF43\uD540"]];return{html:'<div class="look-box"></div>',mount:i=>{let r=i.querySelector(".look-box"),s=()=>{r.innerHTML=`
        <div class="look-preview">${Pr(n,"big")}</div>
        <b>\uC637 \uC0C9</b><div class="sw">${fs.map(a=>`<button type="button" class="sw-c${n.outfit===a?" on":""}" data-k="outfit" data-v="${a}" style="--c:${a}" aria-label="\uC637 \uC0C9 ${a}"></button>`).join("")}</div>
        <b>\uBA38\uB9AC \uC0C9</b><div class="sw">${Po.map(a=>`<button type="button" class="sw-c${n.hair===a?" on":""}" data-k="hair" data-v="${a}" style="--c:${a}" aria-label="\uBA38\uB9AC \uC0C9 ${a}"></button>`).join("")}</div>
        <b>\uBA38\uB9AC \uBAA8\uC591</b><div class="seg"><button type="button" data-k="longHair" data-v="0" class="${n.longHair?"":"on"}">\uC9E7\uC740 \uBA38\uB9AC</button><button type="button" data-k="longHair" data-v="1" class="${n.longHair?"on":""}">\uAE34 \uBA38\uB9AC</button></div>
        <b>\uC548\uACBD</b><div class="seg"><button type="button" data-k="glasses" data-v="0" class="${n.glasses?"":"on"}">\uC548 \uC368\uC694</button><button type="button" data-k="glasses" data-v="1" class="${n.glasses?"on":""}">\u{1F453} \uC368\uC694</button></div>
        <b>\uBAA8\uC790</b><div class="seg">${e.map(([a,o])=>`<button type="button" data-k="hat" data-v="${a}" class="${(n.hat||"")===a?"on":""}">${o}</button>`).join("")}</div>
        <b>\uD0A4</b><div class="seg"><button type="button" data-k="kid" data-v="0" class="${n.kid?"":"on"}">\uC5B4\uB978</button><button type="button" data-k="kid" data-v="1" class="${n.kid?"on":""}">\uC544\uC774</button></div>
        <button class="btn pink lk-save" type="button" style="width:100%;margin-top:14px;padding:14px">\u2728 \uC774 \uBAA8\uC2B5\uC73C\uB85C \uD560\uB798\uC694</button>
        ${Et()?'<p class="muted center">\uBC14\uAFBC \uBAA8\uC2B5\uC740 \uAC00\uC871\uC5D0\uAC8C\uB3C4 \uBCF4\uC5EC\uC694 (\uB0B4 \uC9D1 \uC55E\uC758 \uB098)</p>':""}`,r.querySelectorAll("[data-k]").forEach(a=>a.onclick=()=>{let o=a.dataset.k,l=a.dataset.v;n[o]=["longHair","glasses","kid"].includes(o)?l==="1":l,Ke(6),Xe.sfx("pop"),s()}),r.querySelector(".lk-save").onclick=async()=>{if(Et())await nn("looks",{id:Me(),who:Me(),look:{...n}});else try{localStorage.setItem(um,JSON.stringify(n))}catch{}bh("family:look",n),_t("\u2728 \uC0C8 \uBAA8\uC2B5\uC73C\uB85C \uBC14\uB00C\uC5C8\uC5B4\uC694"),$o()}};s()}}}function Lh(){ri("\u{1F3A8} \uB0B4 \uCE90\uB9AD\uD130 \uAFB8\uBBF8\uAE30",hy())}function Yo(n=Me()){return`<div class="who-grid">
    ${rn().map(e=>`<button type="button" class="who-btn${n===e.id?" on":""}" data-id="${Re(e.id)}">${Pr(e.look)}<b>${Re(e.role||e.name)}</b><small>${Re(e.name)}</small></button>`).join("")}
    <button type="button" class="who-btn guest${n==="guest"?" on":""}" data-id="guest"><span class="guest-ic">\u{1F440}</span><b>\uAD6C\uACBD\uB9CC</b><small>\uC190\uB2D8</small></button>
  </div>`}function uy(n){let e=t=>{t.querySelectorAll(".who-btn").forEach(i=>i.onclick=()=>{Ke(10),Xe.sfx("pop"),Io(i.dataset.id),n==null||n(i.dataset.id),$o(),_t(i.dataset.id==="guest"?"\u{1F440} \uC190\uB2D8\uC73C\uB85C \uAD6C\uACBD\uD574\uC694":`\u{1F64B} ${Xi(sn(i.dataset.id),"\uC73C\uB85C/\uB85C")} \uB4E4\uC5B4\uC654\uC5B4\uC694`)})};return{html:`<p class="muted">\uC774 \uD734\uB300\uD3F0\uC744 \uC4F0\uB294 \uC0AC\uB78C\uC744 \uACE8\uB77C \uC8FC\uC138\uC694. \uD3B8\uC9C0\xB7\uB2F5\xB7\uD558\uD2B8\uAC00 \uC774 \uC774\uB984\uC73C\uB85C \uB0A8\uC544\uC694</p>${Yo()}`,mount:e}}function dm(n){ri("\u{1F64B} \uB098\uB294 \uB204\uAD6C\uC608\uC694?",uy(n))}function dy(n){return{html:'<div class="lockset"></div>',mount:t=>{let i=t.querySelector(".lockset");(()=>{var c;let s=ps(),a=s.locked&&!!Er();i.innerHTML=`
        <div class="card center">
          <div style="font-size:40px">${s.locked?"\u{1F512}":"\u{1F513}"}</div>
          <b>${s.locked?"\uAC00\uC871 \uC554\uD638\uAC00 \uAC78\uB824 \uC788\uC5B4\uC694":"\uC9C0\uAE08\uC740 \uC554\uD638 \uC5C6\uC774 \uB204\uAD6C\uB098 \uB4E4\uC5B4\uC640\uC694"}</b>
          <p class="muted" style="margin:6px 0 0">${s.remote?"\uC554\uD638\uB294 \uAD6C\uAE00 \uC2DC\uD2B8\uC5D0 \uC800\uC7A5\uB3FC\uC11C \uAC00\uC871 \uBAA8\uB450\uC5D0\uAC8C \uB611\uAC19\uC774 \uC801\uC6A9\uB3FC\uC694.":"\u26A0\uFE0F \uAD6C\uAE00 \uC2DC\uD2B8\uB97C \uC5F0\uACB0\uD558\uC9C0 \uC54A\uC544\uC11C <b>\uC774 \uD734\uB300\uD3F0\uC5D0\uC11C\uB9CC</b> \uC7A0\uACA8\uC694. \uAC00\uC871 \uBAA8\uB450\uC5D0\uAC8C \uAC78\uB824\uBA74 \uC2DC\uD2B8\uB97C \uC5F0\uACB0\uD558\uC138\uC694 (tools/\uAC00\uC871_\uC2DC\uD2B8_\uC5F0\uACB0.md)."}</p>
        </div>
        <form class="ls-form" autocomplete="off">
          ${s.locked&&!a?'<input class="field ls-cur" type="password" maxlength="30" placeholder="\uC9C0\uAE08 \uC554\uD638" aria-label="\uC9C0\uAE08 \uC554\uD638">':""}
          <input class="field ls-new" type="password" maxlength="30" placeholder="${s.locked?"\uC0C8 \uC554\uD638":"\uC815\uD560 \uC554\uD638 (\uC22B\uC790\xB7\uAE00\uC790)"}" aria-label="\uC0C8 \uC554\uD638">
          <input class="field ls-new2" type="password" maxlength="30" placeholder="\uD55C \uBC88 \uB354" aria-label="\uC0C8 \uC554\uD638 \uD655\uC778">
          <input class="field ls-hint" maxlength="40" placeholder="\uD78C\uD2B8 (\uC120\uD0DD, \uC608: \uC6B0\uB9AC \uC9D1 \uD604\uAD00 \uBE44\uBC00\uBC88\uD638 \uC55E \uB124 \uC790\uB9AC)" aria-label="\uD78C\uD2B8" value="${Re(s.hint||"")}">
          <button class="btn pink" type="submit" style="width:100%;margin-top:10px">${s.locked?"\u{1F512} \uC554\uD638 \uBC14\uAFB8\uAE30":"\u{1F512} \uC554\uD638 \uAC78\uAE30"}</button>
        </form>
        ${s.locked?'<button class="btn ls-off" type="button" style="width:100%;margin-top:8px">\u{1F513} \uC554\uD638 \uC5C6\uC560\uAE30 (\uB204\uAD6C\uB098 \uB4E4\uC5B4\uC624\uAC8C)</button>':""}
        <p class="muted center" style="font-size:12.5px">\uC554\uD638\uB294 \uB2E8\uD1A1\uBC29 \uB9C1\uD06C\uC640 \uAC19\uC740 \uBA54\uC2DC\uC9C0\uC5D0 \uC4F0\uC9C0 \uB9D0\uACE0 \uB530\uB85C \uC54C\uB824 \uC8FC\uC138\uC694</p>`;let o=()=>{var h;return((h=i.querySelector(".ls-cur"))==null?void 0:h.value.trim())||""},l=async(h,u)=>{let d=await Ip({current:o(),next:h,hint:u});if(!d.ok){_t(d.error==="code"?"\uC9C0\uAE08 \uC554\uD638\uAC00 \uB2EC\uB77C\uC694 \u{1F512}":"\uC5F0\uACB0\uC774 \uC548 \uB3FC\uC694. \uC7A0\uC2DC \uB4A4 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694");return}_t(h?"\u{1F512} \uAC00\uC871 \uC554\uD638\uB97C \uAC78\uC5C8\uC5B4\uC694":"\u{1F513} \uC774\uC81C \uC554\uD638 \uC5C6\uC774 \uB204\uAD6C\uB098 \uB4E4\uC5B4\uC640\uC694",2800),Ke(15),Xe.sfx("chime"),n==null||n(),$o()};i.querySelector(".ls-form").onsubmit=h=>{h.preventDefault();let u=i.querySelector(".ls-new").value.trim(),d=i.querySelector(".ls-new2").value.trim();if(!u){_t("\uC815\uD560 \uC554\uD638\uB97C \uC801\uC5B4 \uC8FC\uC138\uC694");return}if(u!==d){_t("\uB450 \uBC88 \uC801\uC740 \uC554\uD638\uAC00 \uB2EC\uB77C\uC694");return}l(u,i.querySelector(".ls-hint").value)},(c=i.querySelector(".ls-off"))==null||c.addEventListener("click",()=>l("",""))})()}}}function pm(n){ri("\u{1F512} \uAC00\uC871 \uC554\uD638",dy(n))}function py(){let n=rn().filter(i=>i.id!==Me()),e=new Set(n.slice(0,5).map(i=>i.id)),t=i=>{let r=()=>i.querySelectorAll(".who-btn").forEach(s=>s.classList.toggle("on",e.has(s.dataset.id)));i.querySelectorAll(".who-btn").forEach(s=>s.onclick=()=>{let a=s.dataset.id;e.has(a)?e.delete(a):e.size<5?e.add(a):_t("\uD55C \uBC88\uC5D0 \uB2E4\uC12F \uBA85\uAE4C\uC9C0 \uAC19\uC774 \uCC0D\uC744 \uC218 \uC788\uC5B4\uC694"),Ke(6),r()}),i.querySelector(".pp-go").onclick=()=>{$o(),setTimeout(()=>{var s;return(s=ii.takePhoto)==null?void 0:s.call(ii,[...e])},260)},r()};return{html:`<p class="muted">\uB204\uAD6C\uB791 \uAC19\uC774 \uCC0D\uC744\uAE4C\uC694? (\uCD5C\uB300 5\uBA85)</p>
      <div class="who-grid">${n.map(i=>`<button type="button" class="who-btn" data-id="${Re(i.id)}">${Pr(i.look)}<b>${Re(i.role||i.name)}</b></button>`).join("")}</div>
      <button class="btn pink pp-go" type="button" style="width:100%;margin-top:12px;padding:14px">\u{1F4F8} 3 \xB7 2 \xB7 1 \uCC0D\uAE30</button>`,mount:t}}function mm(){ri("\u{1F4F8} \uAC00\uC871\uC0AC\uC9C4",py())}var gu="160";var fc=1,my=2,Li=3,cr=0,Xt=1,gd=2;var gc=2;var Or=100;var yu=204,vu=205;var Yf=0,fy=1,gy=2,or=0,yy=1,vy=2,xy=3,_y=4,Ey=5,My=6;var Zf=300,Ks=301,Qs=302,xu=303,_u=304,yc=306,oi=1e3,Pi=1001,Eu=1002,Nt=1003,fm=1004;var Ih=1005;var Wn=1006,by=1007;var Fl=1008;var Hr=1009;var yd=1012,Jf=1013,rr=1014,sr=1015,ja=1016,Kf=1017,Qf=1018,Gr=1020;var An=1023;var Vr=1026,ea=1027;var e0=1029;var t0=1031,n0=1033,Fh=33776,Dh=33777,Uh=33778,Nh=33779,gm=35840,ym=35841,vm=35842,xm=35843,i0=36196,_m=37492,Em=37496,Mm=37808,bm=37809,Sm=37810,wm=37811,Tm=37812,Am=37813,Rm=37814,Cm=37815,Lm=37816,Pm=37817,Im=37818,Fm=37819,Dm=37820,Um=37821,Bh=36492,Nm=36494,Bm=36495;var Om=36284,zm=36285,km=36286;var Dl=2300,Ul=2301,Oh=2302,Hm=2400,Gm=2401,Vm=2402;var r0=3e3,Wr=3001;var ai="",bt="srgb",Di="srgb-linear",vd="display-p3",vc="display-p3-linear",Nl="linear",ot="srgb",Bl="rec709",Ol="p3";var Rs=7680;var Mu=35044;var Wm="300 es",bu=1035,ta=2e3,zl=2001,hr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Il=Math.PI/180,Su=180/Math.PI;function Fi(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return($t[255&n]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[255&e]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[63&t|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[255&i]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function Sy(n,e){return(n%e+e)%e}function zh(n,e,t){return(1-t)*n+t*e}function $m(n){return(n&n-1)==0&&n!==0}function wu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function st(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("Invalid component type.")}}var he=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ue=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],m=i[5],f=i[8],g=r[0],p=r[3],x=r[6],y=r[1],v=r[4],M=r[7],C=r[2],S=r[5],T=r[8];return s[0]=a*g+o*y+l*C,s[3]=a*p+o*v+l*S,s[6]=a*x+o*M+l*T,s[1]=c*g+h*y+u*C,s[4]=c*p+h*v+u*S,s[7]=c*x+h*M+u*T,s[2]=d*g+m*y+f*C,s[5]=d*p+m*v+f*S,s[8]=d*x+m*M+f*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,m=c*s-a*l,f=t*u+i*d+r*m;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=u*g,e[1]=(r*c-h*i)*g,e[2]=(o*i-r*a)*g,e[3]=d*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kh.makeScale(e,t)),this}rotate(e){return this.premultiply(kh.makeRotation(-e)),this}translate(e,t){return this.premultiply(kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kh=new Ue;function s0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function kl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wy(){let n=kl("canvas");return n.style.display="block",n}var qm={};function Va(n){n in qm||(qm[n]=!0,console.warn(n))}var Xm=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jm=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zo={[Di]:{transfer:Nl,primaries:Bl,toReference:n=>n,fromReference:n=>n},[bt]:{transfer:ot,primaries:Bl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[vc]:{transfer:Nl,primaries:Ol,toReference:n=>n.applyMatrix3(jm),fromReference:n=>n.applyMatrix3(Xm)},[vd]:{transfer:ot,primaries:Ol,toReference:n=>n.convertSRGBToLinear().applyMatrix3(jm),fromReference:n=>n.applyMatrix3(Xm).convertLinearToSRGB()}},Ty=new Set([Di,vc]),it={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ty.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Zo[e].toReference;return(0,Zo[t].fromReference)(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Zo[n].primaries},getTransfer:function(n){return n===ai?Nl:Zo[n].transfer}};function Zs(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function Hh(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var Cs,Hl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=kl("canvas")),Cs.width=e.width,Cs.height=e.height;let i=Cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=kl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Zs(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Zs(t[i]/255)):t[i]=Zs(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ay=0,Gl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Gh(r[a].image)):s.push(Gh(r[a]))}else s=Gh(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Gh(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Hl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ry=0,fn=class n extends hr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Fi(),this.name="",this.source=new Gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wr?bt:ai),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Eu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Eu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?Wr:r0}set encoding(e){Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wr?bt:ai}};fn.DEFAULT_IMAGE=null,fn.DEFAULT_MAPPING=Zf,fn.DEFAULT_ANISOTROPY=1;var Tt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],f=l[9],g=l[2],p=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(f-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(f+p)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(m+1)/2,C=(x+1)/2,S=(h+d)/4,T=(u+g)/4,k=(f+p)/4;return v>M&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=S/i,s=T/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=S/r,s=k/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=k/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-f)*(p-f)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-f)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tu=class extends hr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(Va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Wr?bt:ai),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Gl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ui=class extends Tu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Vl=class extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Au=class extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],m=s[a+1],f=s[a+2],g=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=m,e[t+2]=f,void(e[t+3]=g);if(u!==g||l!==d||c!==m||h!==f){let p=1-o,x=l*d+c*m+h*f+u*g,y=x>=0?1:-1,v=1-x*x;if(v>Number.EPSILON){let C=Math.sqrt(v),S=Math.atan2(C,x*y);p=Math.sin(p*S)/C,o=Math.sin(o*S)/C}let M=o*y;if(l=l*p+d*M,c=c*p+m*M,h=h*p+f*M,u=u*p+g*M,p===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],m=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*m-c*d,e[t+1]=l*f+h*d+c*u-o*m,e[t+2]=c*f+h*m+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),m=l(r/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*m*f,this._y=c*m*u-d*h*f,this._z=c*h*f+d*m*u,this._w=c*h*u-d*m*f;break;case"YXZ":this._x=d*h*u+c*m*f,this._y=c*m*u-d*h*f,this._z=c*h*f-d*m*u,this._w=c*h*u+d*m*f;break;case"ZXY":this._x=d*h*u-c*m*f,this._y=c*m*u+d*h*f,this._z=c*h*f+d*m*u,this._w=c*h*u-d*m*f;break;case"ZYX":this._x=d*h*u-c*m*f,this._y=c*m*u+d*h*f,this._z=c*h*f-d*m*u,this._w=c*h*u+d*m*f;break;case"YZX":this._x=d*h*u+c*m*f,this._y=c*m*u+d*h*f,this._z=c*h*f-d*m*u,this._w=c*h*u-d*m*f;break;case"XZY":this._x=d*h*u-c*m*f,this._y=c*m*u-d*h*f,this._z=c*h*f+d*m*u,this._w=c*h*u+d*m*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ym.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vh.copy(this).projectOnVector(e),this.sub(Vh)}reflect(e){return this.sub(Vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vh=new R,Ym=new Rn,Xn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jo.copy(i.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fa),Ko.subVectors(this.max,Fa),Ls.subVectors(e.a,Fa),Ps.subVectors(e.b,Fa),Is.subVectors(e.c,Fa),Qi.subVectors(Ps,Ls),er.subVectors(Is,Ps),Fr.subVectors(Ls,Is);let t=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-Fr.z,Fr.y,Qi.z,0,-Qi.x,er.z,0,-er.x,Fr.z,0,-Fr.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-Fr.y,Fr.x,0];return!!Wh(t,Ls,Ps,Is,Ko)&&(t=[1,0,0,0,1,0,0,0,1],!!Wh(t,Ls,Ps,Is,Ko)&&(Qo.crossVectors(Qi,er),t=[Qo.x,Qo.y,Qo.z],Wh(t,Ls,Ps,Is,Ko)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Hn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wi=[new R,new R,new R,new R,new R,new R,new R,new R],Hn=new R,Jo=new Xn,Ls=new R,Ps=new R,Is=new R,Qi=new R,er=new R,Fr=new R,Fa=new R,Ko=new R,Qo=new R,Dr=new R;function Wh(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Dr.fromArray(n,s);let o=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=e.dot(Dr),c=t.dot(Dr),h=i.dot(Dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Cy=new Xn,Da=new R,$h=new R,jn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Cy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);let t=Da.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(Da,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add($h)),this.expandByPoint(Da.copy(e.center).sub($h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ti=new R,qh=new R,el=new R,tr=new R,Xh=new R,tl=new R,jh=new R,$r=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qh.copy(e).add(t).multiplyScalar(.5),el.copy(t).sub(e).normalize(),tr.copy(this.origin).sub(qh);let s=.5*e.distanceTo(t),a=-this.direction.dot(el),o=tr.dot(this.direction),l=-tr.dot(el),c=tr.lengthSq(),h=Math.abs(1-a*a),u,d,m,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let g=1/h;u*=g,d*=g,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(qh).addScaledVector(el,d),m}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);let i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,r,s){Xh.subVectors(t,e),tl.subVectors(i,e),jh.crossVectors(Xh,tl);let a,o=this.direction.dot(jh);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}tr.subVectors(this.origin,e);let l=a*this.direction.dot(tl.crossVectors(tr,tl));if(l<0)return null;let c=a*this.direction.dot(Xh.cross(tr));if(c<0||l+c>o)return null;let h=-a*tr.dot(jh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,m,f,g,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,m,f,g,p)}set(e,t,i,r,s,a,o,l,c,h,u,d,m,f,g,p){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=m,x[7]=f,x[11]=g,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Fs.setFromMatrixColumn(e,0).length(),s=1/Fs.setFromMatrixColumn(e,1).length(),a=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,m=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+f*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=f+m*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,m=l*u,f=c*h,g=c*u;t[0]=d+g*o,t[4]=f*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-f,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,m=l*u,f=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=f+m*o,t[1]=m+f*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,m=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=f*c-m,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=m*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,m=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=f*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+f,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*l,m=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=m*u-f,t[2]=f*u-m,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ly,e,Py)}lookAt(e,t,i){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),nr.crossVectors(i,pn),nr.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),nr.crossVectors(i,pn)),nr.normalize(),nl.crossVectors(pn,nr),r[0]=nr.x,r[4]=nl.x,r[8]=pn.x,r[1]=nr.y,r[5]=nl.y,r[9]=pn.y,r[2]=nr.z,r[6]=nl.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],m=i[13],f=i[2],g=i[6],p=i[10],x=i[14],y=i[3],v=i[7],M=i[11],C=i[15],S=r[0],T=r[4],k=r[8],L=r[12],A=r[1],O=r[5],_=r[9],P=r[13],U=r[2],H=r[6],Z=r[10],Y=r[14],$=r[3],j=r[7],z=r[11],G=r[15];return s[0]=a*S+o*A+l*U+c*$,s[4]=a*T+o*O+l*H+c*j,s[8]=a*k+o*_+l*Z+c*z,s[12]=a*L+o*P+l*Y+c*G,s[1]=h*S+u*A+d*U+m*$,s[5]=h*T+u*O+d*H+m*j,s[9]=h*k+u*_+d*Z+m*z,s[13]=h*L+u*P+d*Y+m*G,s[2]=f*S+g*A+p*U+x*$,s[6]=f*T+g*O+p*H+x*j,s[10]=f*k+g*_+p*Z+x*z,s[14]=f*L+g*P+p*Y+x*G,s[3]=y*S+v*A+M*U+C*$,s[7]=y*T+v*O+M*H+C*j,s[11]=y*k+v*_+M*Z+C*z,s[15]=y*L+v*P+M*Y+C*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14];return e[3]*(+s*l*u-r*c*u-s*o*d+i*c*d+r*o*m-i*l*m)+e[7]*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*h-s*l*h)+e[11]*(+t*c*u-t*o*m-s*a*u+i*a*m+s*o*h-i*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],f=e[12],g=e[13],p=e[14],x=e[15],y=u*p*c-g*d*c+g*l*m-o*p*m-u*l*x+o*d*x,v=f*d*c-h*p*c-f*l*m+a*p*m+h*l*x-a*d*x,M=h*g*c-f*u*c+f*o*m-a*g*m-h*o*x+a*u*x,C=f*u*l-h*g*l-f*o*d+a*g*d+h*o*p-a*u*p,S=t*y+i*v+r*M+s*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return e[0]=y*T,e[1]=(g*d*s-u*p*s-g*r*m+i*p*m+u*r*x-i*d*x)*T,e[2]=(o*p*s-g*l*s+g*r*c-i*p*c-o*r*x+i*l*x)*T,e[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*m-i*l*m)*T,e[4]=v*T,e[5]=(h*p*s-f*d*s+f*r*m-t*p*m-h*r*x+t*d*x)*T,e[6]=(f*l*s-a*p*s-f*r*c+t*p*c+a*r*x-t*l*x)*T,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*m+t*l*m)*T,e[8]=M*T,e[9]=(f*u*s-h*g*s-f*i*m+t*g*m+h*i*x-t*u*x)*T,e[10]=(a*g*s-f*o*s+f*i*c-t*g*c-a*i*x+t*o*x)*T,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*m-t*o*m)*T,e[12]=C*T,e[13]=(h*g*r-f*u*r+f*i*d-t*g*d-h*i*p+t*u*p)*T,e[14]=(f*o*r-a*g*r-f*i*l+t*g*l+a*i*p-t*o*p)*T,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*d+t*o*d)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,m=s*h,f=s*u,g=a*h,p=a*u,x=o*u,y=l*c,v=l*h,M=l*u,C=i.x,S=i.y,T=i.z;return r[0]=(1-(g+x))*C,r[1]=(m+M)*C,r[2]=(f-v)*C,r[3]=0,r[4]=(m-M)*S,r[5]=(1-(d+x))*S,r[6]=(p+y)*S,r[7]=0,r[8]=(f+v)*T,r[9]=(p-y)*T,r[10]=(1-(d+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Fs.set(r[0],r[1],r[2]).length(),a=Fs.set(r[4],r[5],r[6]).length(),o=Fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);let l=1/s,c=1/a,h=1/o;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=c,Gn.elements[5]*=c,Gn.elements[6]*=c,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,t.setFromRotationMatrix(Gn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),m,f;if(o===ta)m=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==zl)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);m=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(a-s),d=(t+e)*c,m=(i+r)*h,f,g;if(o===ta)f=(a+s)*u,g=-2*u;else{if(o!==zl)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,g=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Fs=new R,Gn=new Le,Ly=new R(0,0,0),Py=new R(1,1,1),nr=new R,nl=new R,pn=new R,Zm=new Le,Jm=new Rn,na=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jm.setFromEuler(this),this.setFromQuaternion(Jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};na.DEFAULT_ORDER="XYZ";var Ya=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Iy=0,Km=new R,Ds=new Rn,Ai=new Le,il=new R,Ua=new R,Fy=new R,Dy=new Rn,Qm=new R(1,0,0),ef=new R(0,1,0),tf=new R(0,0,1),Uy={type:"added"},Ny={type:"removed"},Ut=class n extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new R,t=new na,i=new Rn,r=new R(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ue}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Qm,e)}rotateY(e){return this.rotateOnAxis(ef,e)}rotateZ(e){return this.rotateOnAxis(tf,e)}translateOnAxis(e,t){return Km.copy(e).applyQuaternion(this.quaternion),this.position.add(Km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qm,e)}translateY(e){return this.translateOnAxis(ef,e)}translateZ(e){return this.translateOnAxis(tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?il.copy(e):il.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Ua,il,this.up):Ai.lookAt(il,Ua,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),Ds.setFromRotationMatrix(Ai),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Uy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ny)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,e,Fy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,Dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let s=t[i];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++){let o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),f.length>0&&(i.nodes=f)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Ut.DEFAULT_UP=new R(0,1,0),Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new R,Ri=new R,Yh=new R,Ci=new R,Us=new R,Ns=new R,nf=new R,Zh=new R,Jh=new R,Kh=new R,rl=!1,ar=class n{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vn.subVectors(e,t),r.cross(Vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Vn.subVectors(r,t),Ri.subVectors(i,t),Yh.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(Ri),l=Vn.dot(Yh),c=Ri.dot(Ri),h=Ri.dot(Yh),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-m-f,f,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ci)!==null&&Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(e,t,i,r,s,a,o,l){return rl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rl=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static isFrontFacing(e,t,i,r){return Vn.subVectors(i,t),Ri.subVectors(e,t),Vn.cross(Ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),.5*Vn.cross(Ri).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return rl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rl=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Us.subVectors(r,i),Ns.subVectors(s,i),Zh.subVectors(e,i);let l=Us.dot(Zh),c=Ns.dot(Zh);if(l<=0&&c<=0)return t.copy(i);Jh.subVectors(e,r);let h=Us.dot(Jh),u=Ns.dot(Jh);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Us,a);Kh.subVectors(e,s);let m=Us.dot(Kh),f=Ns.dot(Kh);if(f>=0&&m<=f)return t.copy(s);let g=m*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Ns,o);let p=h*f-m*u;if(p<=0&&u-h>=0&&m-f>=0)return nf.subVectors(s,r),o=(u-h)/(u-h+(m-f)),t.copy(r).addScaledVector(nf,o);let x=1/(p+g+d);return a=g*x,o=d*x,t.copy(i).addScaledVector(Us,a).addScaledVector(Ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},a0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},sl={h:0,s:0,l:0};function Qh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Sy(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Qh(a,s,e+1/3),this.g=Qh(a,s,e),this.b=Qh(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let i=a0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}copyLinearToSRGB(e){return this.r=Hh(e.r),this.g=Hh(e.g),this.b=Hh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return it.fromWorkingColorSpace(qt.copy(this),e),65536*Math.round(Bt(255*qt.r,0,255))+256*Math.round(Bt(255*qt.g,0,255))+Math.round(Bt(255*qt.b,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(qt.copy(this),t);let i=qt.r,r=qt.g,s=qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=bt){it.fromWorkingColorSpace(qt.copy(this),e);let t=qt.r,i=qt.g,r=qt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+t,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ir),e.getHSL(sl);let i=zh(ir.h,sl.h,t),r=zh(ir.s,sl.s,t),s=zh(ir.l,sl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new be;be.NAMES=a0;var By=0,li=class extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=1,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yu,this.blendDst=vu,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yu&&(i.blendSrc=this.blendSrc),this.blendDst!==vu&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ne=class extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},u1=Oy();function Oy(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var wt=new R,al=new he,ut=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)al.fromBufferAttribute(this,t),al.applyMatrix3(e),this.setXY(t,al.x,al.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mu&&(e.usage=this.usage),e}};var Wl=class extends ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var $l=class extends ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ie=class extends ut{constructor(e,t,i){super(new Float32Array(e),t,i)}};var zy=0,Tn=new Le,eu=new Ut,Bs=new R,mn=new Xn,Na=new Xn,Dt=new R,nt=class n extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s0(e)?$l:Wl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return eu.lookAt(e),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ie(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new R,1/0);if(e){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Na.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(mn.min,Na.min),mn.expandByPoint(Dt),Dt.addVectors(mn.max,Na.max),mn.expandByPoint(Dt)):(mn.expandByPoint(Na.min),mn.expandByPoint(Na.max))}mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(Bs.fromBufferAttribute(e,c),Dt.add(Bs)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new R,h[A]=new R;let u=new R,d=new R,m=new R,f=new he,g=new he,p=new he,x=new R,y=new R;function v(A,O,_){u.fromArray(r,3*A),d.fromArray(r,3*O),m.fromArray(r,3*_),f.fromArray(a,2*A),g.fromArray(a,2*O),p.fromArray(a,2*_),d.sub(u),m.sub(u),g.sub(f),p.sub(f);let P=1/(g.x*p.y-p.x*g.y);isFinite(P)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(P),y.copy(m).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(P),c[A].add(x),c[O].add(x),c[_].add(x),h[A].add(y),h[O].add(y),h[_].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let A=0,O=M.length;A<O;++A){let _=M[A],P=_.start;for(let U=P,H=P+_.count;U<H;U+=3)v(i[U+0],i[U+1],i[U+2])}let C=new R,S=new R,T=new R,k=new R;function L(A){T.fromArray(s,3*A),k.copy(T);let O=c[A];C.copy(O),C.sub(T.multiplyScalar(T.dot(O))).normalize(),S.crossVectors(k,O);let _=S.dot(h[A])<0?-1:1;l[4*A]=C.x,l[4*A+1]=C.y,l[4*A+2]=C.z,l[4*A+3]=_}for(let A=0,O=M.length;A<O;++A){let _=M[A],P=_.start;for(let U=P,H=P+_.count;U<H;U+=3)L(i[U+0]),L(i[U+1]),L(i[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ut(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new R,s=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,m=e.count;d<m;d+=3){let f=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),m=0,f=0;for(let g=0,p=l.length;g<p;g++){m=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let x=0;x<h;x++)d[f++]=c[m++]}return new ut(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rf=new Le,Ur=new $r,ol=new jn,sf=new R,Os=new R,zs=new R,ks=new R,tu=new R,ll=new R,cl=new he,hl=new he,ul=new he,af=new R,of=new R,lf=new R,dl=new R,pl=new R,ue=class extends Ut{constructor(e=new nt,t=new Ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ll.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(tu.fromBufferAttribute(u,e),a?ll.addScaledVector(tu,h):ll.addScaledVector(tu.sub(t),h))}t.add(ll)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),ol.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(ol,sf)===null||Ur.origin.distanceToSquared(sf)>(e.far-e.near)**2))return;rf.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(rf),i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Ur)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let p=d[f],x=a[p.materialIndex];for(let y=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));y<v;y+=3)r=ml(this,x,e,i,c,h,u,o.getX(y),o.getX(y+1),o.getX(y+2)),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}else for(let f=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);f<g;f+=3)r=ml(this,a,e,i,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let p=d[f],x=a[p.materialIndex];for(let y=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));y<v;y+=3)r=ml(this,x,e,i,c,h,u,y,y+1,y+2),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}else for(let f=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);f<g;f+=3)r=ml(this,a,e,i,c,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function ml(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Os),n.getVertexPosition(l,zs),n.getVertexPosition(c,ks);let h=function(u,d,m,f,g,p,x,y){let v;if(v=d.side===Xt?f.intersectTriangle(x,p,g,!0,y):f.intersectTriangle(g,p,x,d.side===cr,y),v===null)return null;pl.copy(y),pl.applyMatrix4(u.matrixWorld);let M=m.ray.origin.distanceTo(pl);return M<m.near||M>m.far?null:{distance:M,point:pl.clone(),object:u}}(n,e,t,i,Os,zs,ks,dl);if(h){r&&(cl.fromBufferAttribute(r,o),hl.fromBufferAttribute(r,l),ul.fromBufferAttribute(r,c),h.uv=ar.getInterpolation(dl,Os,zs,ks,cl,hl,ul,new he)),s&&(cl.fromBufferAttribute(s,o),hl.fromBufferAttribute(s,l),ul.fromBufferAttribute(s,c),h.uv1=ar.getInterpolation(dl,Os,zs,ks,cl,hl,ul,new he),h.uv2=h.uv1),a&&(af.fromBufferAttribute(a,o),of.fromBufferAttribute(a,l),lf.fromBufferAttribute(a,c),h.normal=ar.getInterpolation(dl,Os,zs,ks,af,of,lf,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};ar.getNormal(Os,zs,ks,u.normal),h.face=u}return h}var me=class n extends nt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,m=0;function f(g,p,x,y,v,M,C,S,T,k,L){let A=M/T,O=C/k,_=M/2,P=C/2,U=S/2,H=T+1,Z=k+1,Y=0,$=0,j=new R;for(let z=0;z<Z;z++){let G=z*O-P;for(let re=0;re<H;re++){let b=re*A-_;j[g]=b*y,j[p]=G*v,j[x]=U,c.push(j.x,j.y,j.z),j[g]=0,j[p]=0,j[x]=S>0?1:-1,h.push(j.x,j.y,j.z),u.push(re/T),u.push(1-z/k),Y+=1}}for(let z=0;z<k;z++)for(let G=0;G<T;G++){let re=d+G+H*z,b=d+G+H*(z+1),E=d+(G+1)+H*(z+1),F=d+(G+1)+H*z;l.push(re,b,F),l.push(b,E,F),$+=6}o.addGroup(m,$,L),m+=$,d+=Y}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,r,a,2),f("x","z","y",1,-1,e,i,-t,r,a,3),f("x","y","z",1,-1,e,t,i,r,s,4),f("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ia(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Zt(n){let e={};for(let t=0;t<n.length;t++){let i=ia(n[t]);for(let r in i)e[r]=i[r]}return e}function o0(n){return n.getRenderTarget()===null?n.outputColorSpace:it.workingColorSpace}var ky={clone:ia,merge:Zt},Yn=class extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ia(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Za=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=ta}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jt=class extends Za{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Su*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Il*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Su*Math.atan(Math.tan(.5*Il*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Il*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hs=-90,Ru=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jt(Hs,1,e,t);r.layers=this.layers,this.add(r);let s=new Jt(Hs,1,e,t);s.layers=this.layers,this.add(s);let a=new Jt(Hs,1,e,t);a.layers=this.layers,this.add(a);let o=new Jt(Hs,1,e,t);o.layers=this.layers,this.add(o);let l=new Jt(Hs,1,e,t);l.layers=this.layers,this.add(l);let c=new Jt(Hs,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===ta)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==zl)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},ql=class extends fn{constructor(e,t,i,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Ks,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cu=class extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wr?bt:ai),this.texture=new ql(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new me(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:0});s.uniforms.tEquirect.value=t;let a=new ue(r,s),o=t.minFilter;return t.minFilter===Fl&&(t.minFilter=Wn),new Ru(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},nu=new R,Hy=new R,Gy=new Ue,$n=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=nu.subVectors(i,t).cross(Hy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(nu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Gy.getNormalMatrix(e),r=this.coplanarPoint(nu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Nr=new jn,fl=new R,ra=class{constructor(e=new $n,t=new $n,i=new $n,r=new $n,s=new $n,a=new $n){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],m=r[8],f=r[9],g=r[10],p=r[11],x=r[12],y=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,p-m,M-x).normalize(),i[1].setComponents(l+s,d+c,p+m,M+x).normalize(),i[2].setComponents(l+a,d+h,p+f,M+y).normalize(),i[3].setComponents(l-a,d-h,p-f,M-y).normalize(),i[4].setComponents(l-o,d-u,p-g,M-v).normalize(),t===ta)i[5].setComponents(l+o,d+u,p+g,M+v).normalize();else{if(t!==zl)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,g,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function l0(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Vy(n,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(r){return r.isInterleavedBufferAttribute&&(r=r.data),i.get(r)},remove:function(r){r.isInterleavedBufferAttribute&&(r=r.data);let s=i.get(r);s&&(n.deleteBuffer(s.buffer),i.delete(r))},update:function(r,s){if(r.isGLBufferAttribute){let o=i.get(r);return void((!o||o.version<r.version)&&i.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version}))}r.isInterleavedBufferAttribute&&(r=r.data);let a=i.get(r);if(a===void 0)i.set(r,function(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer(),m;if(n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");m=n.HALF_FLOAT}else m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);m=n.UNSIGNED_BYTE}return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}(r,s));else if(a.version<r.version){if(a.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,o),u.count===-1&&d.length===0&&n.bufferSubData(c,0,h),d.length!==0){for(let m=0,f=d.length;m<f;m++){let g=d[m];t?n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count):n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h.subarray(g.start,g.start+g.count))}l.clearUpdateRanges()}u.count!==-1&&(t?n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,r,s),a.version=r.version}}}}var rt=class n extends nt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,m=[],f=[],g=[],p=[];for(let x=0;x<h;x++){let y=x*d-a;for(let v=0;v<c;v++){let M=v*u-s;f.push(M,-y,0),g.push(0,0,1),p.push(v/o),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let y=0;y<o;y++){let v=y+c*x,M=y+c*(x+1),C=y+1+c*(x+1),S=y+1+c*x;m.push(v,M,S),m.push(M,C,S)}this.setIndex(m),this.setAttribute("position",new Ie(f,3)),this.setAttribute("normal",new Ie(g,3)),this.setAttribute("uv",new Ie(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},De={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},de={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},si={basic:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new be(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Zt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Zt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new be(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Zt([de.points,de.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Zt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Zt([de.common,de.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Zt([de.sprite,de.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Zt([de.common,de.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Zt([de.lights,de.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};si.physical={uniforms:Zt([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};var gl={r:0,b:0,g:0};function Wy(n,e,t,i,r,s,a){let o=new be(0),l,c,h=s===!0?0:1,u=null,d=0,m=null;function f(g,p){g.getRGB(gl,o0(n)),i.buffers.color.setClear(gl.r,gl.g,gl.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),h=p,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,f(o,h)},render:function(g,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?f(o,h):y&&y.isColor&&(f(y,1),x=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===yc)?(c===void 0&&(c=new ue(new me(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:ia(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,C,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=it.getTransfer(y.colorSpace)!==ot,u===y&&d===y.version&&m===n.toneMapping||(c.material.needsUpdate=!0,u=y,d=y.version,m=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ue(new rt(2,2),new Yn({name:"BackgroundMaterial",uniforms:ia(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=it.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),u===y&&d===y.version&&m===n.toneMapping||(l.material.needsUpdate=!0,u=y,d=y.version,m=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}}}function $y(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null),c=l,h=!1;function u(C){return i.isWebGL2?n.bindVertexArray(C):s.bindVertexArrayOES(C)}function d(C){return i.isWebGL2?n.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function m(C){let S=[],T=[],k=[];for(let L=0;L<r;L++)S[L]=0,T[L]=0,k[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:T,attributeDivisors:k,object:C,attributes:{},index:null}}function f(){let C=c.newAttributes;for(let S=0,T=C.length;S<T;S++)C[S]=0}function g(C){p(C,0)}function p(C,S){let T=c.newAttributes,k=c.enabledAttributes,L=c.attributeDivisors;T[C]=1,k[C]===0&&(n.enableVertexAttribArray(C),k[C]=1),L[C]!==S&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,S),L[C]=S)}function x(){let C=c.newAttributes,S=c.enabledAttributes;for(let T=0,k=S.length;T<k;T++)S[T]!==C[T]&&(n.disableVertexAttribArray(T),S[T]=0)}function y(C,S,T,k,L,A,O){O===!0?n.vertexAttribIPointer(C,S,T,L,A):n.vertexAttribPointer(C,S,T,k,L,A)}function v(){M(),h=!0,c!==l&&(c=l,u(c.object))}function M(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(C,S,T,k,L){let A=!1;if(a){let O=function(_,P,U){let H=U.wireframe===!0,Z=o[_.id];Z===void 0&&(Z={},o[_.id]=Z);let Y=Z[P.id];Y===void 0&&(Y={},Z[P.id]=Y);let $=Y[H];return $===void 0&&($=m(i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()),Y[H]=$),$}(k,T,S);c!==O&&(c=O,u(c.object)),A=function(_,P,U,H){let Z=c.attributes,Y=P.attributes,$=0,j=U.getAttributes();for(let z in j)if(j[z].location>=0){let G=Z[z],re=Y[z];if(re===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(re=_.instanceColor)),G===void 0||G.attribute!==re||re&&G.data!==re.data)return!0;$++}return c.attributesNum!==$||c.index!==H}(C,k,T,L),A&&function(_,P,U,H){let Z={},Y=P.attributes,$=0,j=U.getAttributes();for(let z in j)if(j[z].location>=0){let G=Y[z];G===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(G=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(G=_.instanceColor));let re={};re.attribute=G,G&&G.data&&(re.data=G.data),Z[z]=re,$++}c.attributes=Z,c.attributesNum=$,c.index=H}(C,k,T,L)}else{let O=S.wireframe===!0;c.geometry===k.id&&c.program===T.id&&c.wireframe===O||(c.geometry=k.id,c.program=T.id,c.wireframe=O,A=!0)}L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(A||h)&&(h=!1,function(O,_,P,U){if(i.isWebGL2===!1&&(O.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let H=U.attributes,Z=P.getAttributes(),Y=_.defaultAttributeValues;for(let $ in Z){let j=Z[$];if(j.location>=0){let z=H[$];if(z===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(z=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(z=O.instanceColor)),z!==void 0){let G=z.normalized,re=z.itemSize,b=t.get(z);if(b===void 0)continue;let E=b.buffer,F=b.type,q=b.bytesPerElement,D=i.isWebGL2===!0&&(F===n.INT||F===n.UNSIGNED_INT||z.gpuType===Jf);if(z.isInterleavedBufferAttribute){let X=z.data,N=X.stride,B=z.offset;if(X.isInstancedInterleavedBuffer){for(let V=0;V<j.locationSize;V++)p(j.location+V,X.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let V=0;V<j.locationSize;V++)g(j.location+V);n.bindBuffer(n.ARRAY_BUFFER,E);for(let V=0;V<j.locationSize;V++)y(j.location+V,re/j.locationSize,F,G,N*q,(B+re/j.locationSize*V)*q,D)}else{if(z.isInstancedBufferAttribute){for(let X=0;X<j.locationSize;X++)p(j.location+X,z.meshPerAttribute);O.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let X=0;X<j.locationSize;X++)g(j.location+X);n.bindBuffer(n.ARRAY_BUFFER,E);for(let X=0;X<j.locationSize;X++)y(j.location+X,re/j.locationSize,F,G,re*q,re/j.locationSize*X*q,D)}}else if(Y!==void 0){let G=Y[$];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(j.location,G);break;case 3:n.vertexAttrib3fv(j.location,G);break;case 4:n.vertexAttrib4fv(j.location,G);break;default:n.vertexAttrib1fv(j.location,G)}}}}x()}(C,S,T,k),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))},reset:v,resetDefaultState:M,dispose:function(){v();for(let C in o){let S=o[C];for(let T in S){let k=S[T];for(let L in k)d(k[L].object),delete k[L];delete S[T]}delete o[C]}},releaseStatesOfGeometry:function(C){if(o[C.id]===void 0)return;let S=o[C.id];for(let T in S){let k=S[T];for(let L in k)d(k[L].object),delete k[L];delete S[T]}delete o[C.id]},releaseStatesOfProgram:function(C){for(let S in o){let T=o[S];if(T[C.id]===void 0)continue;let k=T[C.id];for(let L in k)d(k[L].object),delete k[L];delete T[C.id]}},initAttributes:f,enableAttribute:g,disableUnusedAttributes:x}}function qy(n,e,t,i){let r=i.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){n.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(r)c=n,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let u=0;u<l;u++)h+=o[u];t.update(h,s,1)}}}function Xy(n,e,t){let i;function r(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,v=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:y&&v,maxSamples:s?n.getParameter(n.MAX_SAMPLES):0}}function jy(n){let e=this,t=null,i=0,r=!1,s=!1,a=new $n,o=new Ue,l={value:null,needsUpdate:!1};function c(h,u,d,m){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=l.value,m!==!0||g===null){let p=d+4*f,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=d;y!==f;++y,v+=4)a.copy(h[y]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let m=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||s&&!g)s?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let x=s?0:i,y=4*x,v=p.clippingState||null;l.value=v,v=c(m,u,y,d);for(let M=0;M!==y;++M)v[M]=t[M];p.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=x}}}function Yy(n){let e=new WeakMap;function t(r,s){return s===xu?r.mapping=Ks:s===_u&&(r.mapping=Qs),r}function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===xu||s===_u){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Cu(a.height/2);return o.fromEquirectangularTexture(n,r),e.set(r,o),r.addEventListener("dispose",i),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Xl=class extends Za{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cf=[.125,.215,.35,.446,.526,.582],Ba=20,iu=new Xl,hf=new be,ru=null,su=0,au=0,Br=(1+Math.sqrt(5))/2,Gs=1/Br,uf=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Br,Gs),new R(0,Br,-Gs),new R(Gs,0,Br),new R(-Gs,0,Br),new R(Br,Gs,0),new R(-Br,Gs,0)],jl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ru,su,au),e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ru=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:ja,format:An,colorSpace:Di,depthBuffer:!1},r=df(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,u=a-4+1+cf.length;for(let d=0;d<u;d++){let m=Math.pow(2,h);l.push(m);let f=1/m;d>a-4?f=cf[d-a+4-1]:d===0&&(f=0),c.push(f);let g=1/(m-2),p=-g,x=1+g,y=[p,p,x,p,x,x,p,p,x,x,p,x],v=6,M=6,C=3,S=2,T=1,k=new Float32Array(C*M*v),L=new Float32Array(S*M*v),A=new Float32Array(T*M*v);for(let _=0;_<v;_++){let P=_%3*2/3-1,U=_>2?0:-1,H=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];k.set(H,C*M*_),L.set(y,S*M*_);let Z=[_,_,_,_,_,_];A.set(Z,T*M*_)}let O=new nt;O.setAttribute("position",new ut(k,C)),O.setAttribute("uv",new ut(L,S)),O.setAttribute("faceIndex",new ut(A,T)),o.push(O),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(Ba),h=new R(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Ba,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:xd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return r}_compileMaterial(e){let t=new ue(this._lodPlanes[0],e);this._renderer.compile(t,iu)}_sceneToCubeUV(e,t,i,r){let s=new Jt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(hf),l.toneMapping=or,l.autoClear=!1;let u=new Ne({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),d=new ue(new me,u),m=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,m=!0):(u.color.copy(hf),m=!0);for(let g=0;g<6;g++){let p=g%3;p===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):p===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));let x=this._cubeSize;yl(r,p*x,g>2?x:0,x,x),l.setRenderTarget(r),m&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Ks||e.mapping===Qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new ue(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;yl(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,iu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uf[(r-1)%uf.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new ue(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/m,g=isFinite(s)?1+Math.floor(3*f):Ba;g>Ba&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let p=[],x=0;for(let M=0;M<Ba;++M){let C=M/f,S=Math.exp(-C*C/2);p.push(S),M===0?x+=S:M<g&&(x+=2*S)}for(let M=0;M<p.length;M++)p[M]=p[M]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-i;let v=this._sizeLods[r];yl(t,3*v*(r>y-4?r-y+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,iu)}};function df(n,e,t){let i=new Ui(n,e,t);return i.texture.mapping=yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function pf(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function mf(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xd(){return`

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
	`}function Zy(n){let e=new WeakMap,t=null;function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===xu||s===_u,o=s===Ks||s===Qs;if(a||o){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let l=e.get(r);return t===null&&(t=new jl(n)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),e.set(r,l),l.texture}if(e.has(r))return e.get(r).texture;{let l=r.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0,u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u}(l)){t===null&&(t=new jl(n));let c=a?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,c),r.addEventListener("dispose",i),c.texture}return null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Jy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ky(n,e,t,i){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let m=0,f=d.length;m<f;m++)e.remove(d[m])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let g=h.array;d=h.version;for(let p=0,x=g.length;p<x;p+=3){let y=g[p+0],v=g[p+1],M=g[p+2];c.push(y,v,v,M,M,y)}}else{if(u===void 0)return;{let g=u.array;d=u.version;for(let p=0,x=g.length/3-1;p<x;p+=3){let y=p+0,v=p+1,M=p+2;c.push(y,v,v,M,M,y)}}}let m=new(s0(c)?$l:Wl)(c,1);m.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,m)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],n.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let m=0,f=d.length;m<f;m++)e.update(d[m],n.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Qy(n,e,t,i){let r=i.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){n.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(r)u=n,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d]/o,c[d]);else{u.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let d=0;for(let m=0;m<h;m++)d+=c[m];t.update(d,s,1)}}}function ev(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function tv(n,e){return n[0]-e[0]}function nv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function iv(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,a=new Tt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=d!==void 0?d.length:0,f=s.get(c);if(f===void 0||f.count!==m){let P=function(){O.dispose(),s.delete(c),c.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],S=c.morphAttributes.color||[],T=0;x===!0&&(T=1),y===!0&&(T=2),v===!0&&(T=3);let k=c.attributes.position.count*T,L=1;k>e.maxTextureSize&&(L=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);let A=new Float32Array(k*L*4*m),O=new Vl(A,k,L,m);O.type=sr,O.needsUpdate=!0;let _=4*T;for(let U=0;U<m;U++){let H=M[U],Z=C[U],Y=S[U],$=k*L*4*U;for(let j=0;j<H.count;j++){let z=j*_;x===!0&&(a.fromBufferAttribute(H,j),A[$+z+0]=a.x,A[$+z+1]=a.y,A[$+z+2]=a.z,A[$+z+3]=0),y===!0&&(a.fromBufferAttribute(Z,j),A[$+z+4]=a.x,A[$+z+5]=a.y,A[$+z+6]=a.z,A[$+z+7]=0),v===!0&&(a.fromBufferAttribute(Y,j),A[$+z+8]=a.x,A[$+z+9]=a.y,A[$+z+10]=a.z,A[$+z+11]=Y.itemSize===4?a.w:1)}}f={count:m,texture:O,size:new he(k,L)},s.set(c,f),c.addEventListener("dispose",P)}let g=0;for(let x=0;x<u.length;x++)g+=u[x];let p=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",u),h.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}else{let d=u===void 0?0:u.length,m=i[c.id];if(m===void 0||m.length!==d){m=[];for(let y=0;y<d;y++)m[y]=[y,0];i[c.id]=m}for(let y=0;y<d;y++){let v=m[y];v[0]=y,v[1]=u[y]}m.sort(nv);for(let y=0;y<8;y++)y<d&&m[y][1]?(o[y][0]=m[y][0],o[y][1]=m[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(tv);let f=c.morphAttributes.position,g=c.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let v=o[y],M=v[0],C=v[1];M!==Number.MAX_SAFE_INTEGER&&C?(f&&c.getAttribute("morphTarget"+y)!==f[M]&&c.setAttribute("morphTarget"+y,f[M]),g&&c.getAttribute("morphNormal"+y)!==g[M]&&c.setAttribute("morphNormal"+y,g[M]),r[y]=C,p+=C):(f&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),g&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}let x=c.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}}}function rv(n,e,t,i){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,n.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var Yl=class extends fn{constructor(e,t,i,r,s,a,o,l,c,h){if((h=h!==void 0?h:Vr)!==Vr&&h!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Vr&&(i=rr),i===void 0&&h===ea&&(i=Gr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},c0=new fn,h0=new Yl(1,1);h0.compareFunction=515;var u0=new Vl,d0=new Au,p0=new ql,ff=[],gf=[],yf=new Float32Array(16),vf=new Float32Array(9),xf=new Float32Array(4);function aa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=ff[r];if(s===void 0&&(s=new Float32Array(r),ff[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xc(n,e){let t=gf[e];t===void 0&&(t=new Int32Array(e),gf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function av(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function ov(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function lv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function cv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;xf.set(i),n.uniformMatrix2fv(this.addr,!1,xf),Pt(t,i)}}function hv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;vf.set(i),n.uniformMatrix3fv(this.addr,!1,vf),Pt(t,i)}}function uv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;yf.set(i),n.uniformMatrix4fv(this.addr,!1,yf),Pt(t,i)}}function dv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function mv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function fv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function gv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function vv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function xv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function _v(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?h0:c0;t.setTexture2D(e||s,r)}function Ev(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||d0,r)}function Mv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||p0,r)}function bv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||u0,r)}function Sv(n,e){n.uniform1fv(this.addr,e)}function wv(n,e){let t=aa(e,this.size,2);n.uniform2fv(this.addr,t)}function Tv(n,e){let t=aa(e,this.size,3);n.uniform3fv(this.addr,t)}function Av(n,e){let t=aa(e,this.size,4);n.uniform4fv(this.addr,t)}function Rv(n,e){let t=aa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Cv(n,e){let t=aa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Lv(n,e){let t=aa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Pv(n,e){n.uniform1iv(this.addr,e)}function Iv(n,e){n.uniform2iv(this.addr,e)}function Fv(n,e){n.uniform3iv(this.addr,e)}function Dv(n,e){n.uniform4iv(this.addr,e)}function Uv(n,e){n.uniform1uiv(this.addr,e)}function Nv(n,e){n.uniform2uiv(this.addr,e)}function Bv(n,e){n.uniform3uiv(this.addr,e)}function Ov(n,e){n.uniform4uiv(this.addr,e)}function zv(n,e,t){let i=this.cache,r=e.length,s=xc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||c0,s[a])}function kv(n,e,t){let i=this.cache,r=e.length,s=xc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||d0,s[a])}function Hv(n,e,t){let i=this.cache,r=e.length,s=xc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||p0,s[a])}function Gv(n,e,t){let i=this.cache,r=e.length,s=xc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||u0,s[a])}var Lu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(r){switch(r){case 5126:return sv;case 35664:return av;case 35665:return ov;case 35666:return lv;case 35674:return cv;case 35675:return hv;case 35676:return uv;case 5124:case 35670:return dv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return fv;case 5125:return gv;case 36294:return yv;case 36295:return vv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return bv}}(t.type)}},Pu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(r){switch(r){case 5126:return Sv;case 35664:return wv;case 35665:return Tv;case 35666:return Av;case 35674:return Rv;case 35675:return Cv;case 35676:return Lv;case 5124:case 35670:return Pv;case 35667:case 35671:return Iv;case 35668:case 35672:return Fv;case 35669:case 35673:return Dv;case 5125:return Uv;case 36294:return Nv;case 36295:return Bv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Hv;case 36289:case 36303:case 36311:case 36292:return Gv}}(t.type)}},Iu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},ou=/(\w+)(\])?(\[|\.)?/g;function _f(n,e){n.seq.push(e),n.map[e.id]=e}function Vv(n,e,t){let i=n.name,r=i.length;for(ou.lastIndex=0;;){let s=ou.exec(i),a=ou.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){_f(t,c===void 0?new Lu(o,n,e):new Pu(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new Iu(o),_f(t,h)),t=h}}}var Js=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r);Vv(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Ef(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Wv=37297,$v=0;function Mf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let m=u;m<d;m++){let f=m+1;h.push(`${f===l?">":" "} ${f}: ${c[m]}`)}return h.join(`
`)}(n.getShaderSource(e),a)}return r}function qv(n,e){let t=function(i){let r=it.getPrimaries(it.workingColorSpace),s=it.getPrimaries(i),a;switch(r===s?a="":r===Ol&&s===Bl?a="LinearDisplayP3ToLinearSRGB":r===Bl&&s===Ol&&(a="LinearSRGBToLinearDisplayP3"),i){case Di:case vc:return[a,"LinearTransferOETF"];case bt:case vd:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}}(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xv(n,e){let t;switch(e){case yy:t="Linear";break;case vy:t="Reinhard";break;case xy:t="OptimizedCineon";break;case _y:t="ACESFilmic";break;case My:t="AgX";break;case Ey:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vs(n){return n!==""}function bf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(n){return n.replace(jv,Zv)}var Yv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zv(n,e){let t=De[e];if(t===void 0){let i=Yv.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Fu(t)}var Jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wf(n){return n.replace(Jv,Kv)}function Kv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qv(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(_){let P="SHADOWMAP_TYPE_BASIC";return _.shadowMapType===fc?P="SHADOWMAP_TYPE_PCF":_.shadowMapType===my?P="SHADOWMAP_TYPE_PCF_SOFT":_.shadowMapType===Li&&(P="SHADOWMAP_TYPE_VSM"),P}(t),c=function(_){let P="ENVMAP_TYPE_CUBE";if(_.envMap)switch(_.envMapMode){case Ks:case Qs:P="ENVMAP_TYPE_CUBE";break;case yc:P="ENVMAP_TYPE_CUBE_UV"}return P}(t),h=function(_){let P="ENVMAP_MODE_REFLECTION";return _.envMap&&_.envMapMode===Qs&&(P="ENVMAP_MODE_REFRACTION"),P}(t),u=function(_){let P="ENVMAP_BLENDING_NONE";if(_.envMap)switch(_.combine){case Yf:P="ENVMAP_BLENDING_MULTIPLY";break;case fy:P="ENVMAP_BLENDING_MIX";break;case gy:P="ENVMAP_BLENDING_ADD"}return P}(t),d=function(_){let P=_.envMapCubeUVHeight;if(P===null)return null;let U=Math.log2(P)-2,H=1/P;return{texelWidth:1/(3*Math.max(Math.pow(2,U),112)),texelHeight:H,maxMip:U}}(t),m=t.isWebGL2?"":function(_){return[_.extensionDerivatives||_.envMapCubeUVHeight||_.bumpMap||_.normalMapTangentSpace||_.clearcoatNormalMap||_.flatShading||_.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(_.extensionFragDepth||_.logarithmicDepthBuffer)&&_.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",_.extensionDrawBuffers&&_.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(_.extensionShaderTextureLOD||_.envMap||_.transmission)&&_.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vs).join(`
`)}(t),f=function(_){return[_.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vs).join(`
`)}(t),g=function(_){let P=[];for(let U in _){let H=_[U];H!==!1&&P.push("#define "+U+" "+H)}return P.join(`
`)}(s),p=r.createProgram(),x,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vs).join(`
`),x.length>0&&(x+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vs).join(`
`),y.length>0&&(y+=`
`)):(x=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),y=[m,Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?De.tonemapping_pars_fragment:"",t.toneMapping!==or?Xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,qv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),a=Fu(a),a=bf(a,t),a=Sf(a,t),o=Fu(o),o=bf(o,t),o=Sf(o,t),a=wf(a),o=wf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Wm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=v+x+a,C=v+y+o,S=Ef(r,r.VERTEX_SHADER,M),T=Ef(r,r.FRAGMENT_SHADER,C);function k(_){if(n.debug.checkShaderErrors){let P=r.getProgramInfoLog(p).trim(),U=r.getShaderInfoLog(S).trim(),H=r.getShaderInfoLog(T).trim(),Z=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,S,T);else{let $=Mf(r,S,"vertex"),j=Mf(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+P+`
`+$+`
`+j)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):U!==""&&H!==""||(Y=!1);Y&&(_.diagnostics={runnable:Z,programLog:P,vertexShader:{log:U,prefix:x},fragmentShader:{log:H,prefix:y}})}r.deleteShader(S),r.deleteShader(T),L=new Js(r,p),A=function(P,U){let H={},Z=P.getProgramParameter(U,P.ACTIVE_ATTRIBUTES);for(let Y=0;Y<Z;Y++){let $=P.getActiveAttrib(U,Y),j=$.name,z=1;$.type===P.FLOAT_MAT2&&(z=2),$.type===P.FLOAT_MAT3&&(z=3),$.type===P.FLOAT_MAT4&&(z=4),H[j]={type:$.type,location:P.getAttribLocation(U,j),locationSize:z}}return H}(r,p)}let L,A;r.attachShader(p,S),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),this.getUniforms=function(){return L===void 0&&k(this),L},this.getAttributes=function(){return A===void 0&&k(this),A};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(p,Wv)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$v++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=T,this}var ex=0,Du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Uu(e),t.set(e,i)),i}},Uu=class{constructor(e){this.id=ex++,this.code=e,this.usedTimes=0}};function tx(n,e,t,i,r,s,a){let o=new Ya,l=new Du,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures,m=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(p){return p===0?"uv":`uv${p}`}return{getParameters:function(p,x,y,v,M){let C=v.fog,S=M.geometry,T=p.isMeshStandardMaterial?v.environment:null,k=(p.isMeshStandardMaterial?t:e).get(p.envMap||T),L=k&&k.mapping===yc?k.image.height:null,A=f[p.type];p.precision!==null&&(m=r.getMaxPrecision(p.precision),m!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",m,"instead."));let O=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,_=O!==void 0?O.length:0,P,U,H,Z,Y=0;if(S.morphAttributes.position!==void 0&&(Y=1),S.morphAttributes.normal!==void 0&&(Y=2),S.morphAttributes.color!==void 0&&(Y=3),A){let Gt=si[A];P=Gt.vertexShader,U=Gt.fragmentShader}else P=p.vertexShader,U=p.fragmentShader,l.update(p),H=l.getVertexShaderID(p),Z=l.getFragmentShaderID(p);let $=n.getRenderTarget(),j=M.isInstancedMesh===!0,z=M.isBatchedMesh===!0,G=!!p.map,re=!!p.matcap,b=!!k,E=!!p.aoMap,F=!!p.lightMap,q=!!p.bumpMap,D=!!p.normalMap,X=!!p.displacementMap,N=!!p.emissiveMap,B=!!p.metalnessMap,V=!!p.roughnessMap,ee=p.anisotropy>0,ie=p.clearcoat>0,w=p.iridescence>0,ae=p.sheen>0,J=p.transmission>0,Q=ee&&!!p.anisotropyMap,le=ie&&!!p.clearcoatMap,pe=ie&&!!p.clearcoatNormalMap,ye=ie&&!!p.clearcoatRoughnessMap,ve=w&&!!p.iridescenceMap,Pe=w&&!!p.iridescenceThicknessMap,xe=ae&&!!p.sheenColorMap,Ee=ae&&!!p.sheenRoughnessMap,Oe=!!p.specularMap,It=!!p.specularColorMap,Se=!!p.specularIntensityMap,Ze=J&&!!p.transmissionMap,$e=J&&!!p.thicknessMap,_o=!!p.gradientMap,as=!!p.alphaMap,Eo=p.alphaTest>0,_n=!!p.alphaHash,ln=!!p.extensions,os=!!S.attributes.uv1,ne=!!S.attributes.uv2,Mo=!!S.attributes.uv3,da=or;return p.toneMapped&&($!==null&&$.isXRRenderTarget!==!0||(da=n.toneMapping)),{isWebGL2:h,shaderID:A,shaderType:p.type,shaderName:p.name,vertexShader:P,fragmentShader:U,defines:p.defines,customVertexShaderID:H,customFragmentShaderID:Z,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:m,batching:z,instancing:j,instancingColor:j&&M.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Di,map:G,matcap:re,envMap:b,envMapMode:b&&k.mapping,envMapCubeUVHeight:L,aoMap:E,lightMap:F,bumpMap:q,normalMap:D,displacementMap:d&&X,emissiveMap:N,normalMapObjectSpace:D&&p.normalMapType===1,normalMapTangentSpace:D&&p.normalMapType===0,metalnessMap:B,roughnessMap:V,anisotropy:ee,anisotropyMap:Q,clearcoat:ie,clearcoatMap:le,clearcoatNormalMap:pe,clearcoatRoughnessMap:ye,iridescence:w,iridescenceMap:ve,iridescenceThicknessMap:Pe,sheen:ae,sheenColorMap:xe,sheenRoughnessMap:Ee,specularMap:Oe,specularColorMap:It,specularIntensityMap:Se,transmission:J,transmissionMap:Ze,thicknessMap:$e,gradientMap:_o,opaque:p.transparent===!1&&p.blending===1,alphaMap:as,alphaTest:Eo,alphaHash:_n,combine:p.combine,mapUv:G&&g(p.map.channel),aoMapUv:E&&g(p.aoMap.channel),lightMapUv:F&&g(p.lightMap.channel),bumpMapUv:q&&g(p.bumpMap.channel),normalMapUv:D&&g(p.normalMap.channel),displacementMapUv:X&&g(p.displacementMap.channel),emissiveMapUv:N&&g(p.emissiveMap.channel),metalnessMapUv:B&&g(p.metalnessMap.channel),roughnessMapUv:V&&g(p.roughnessMap.channel),anisotropyMapUv:Q&&g(p.anisotropyMap.channel),clearcoatMapUv:le&&g(p.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&g(p.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(p.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&g(p.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(p.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(p.sheenRoughnessMap.channel),specularMapUv:Oe&&g(p.specularMap.channel),specularColorMapUv:It&&g(p.specularColorMap.channel),specularIntensityMapUv:Se&&g(p.specularIntensityMap.channel),transmissionMapUv:Ze&&g(p.transmissionMap.channel),thicknessMapUv:$e&&g(p.thicknessMap.channel),alphaMapUv:as&&g(p.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(D||ee),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,vertexUv1s:os,vertexUv2s:ne,vertexUv3s:Mo,pointsUvs:M.isPoints===!0&&!!S.attributes.uv&&(G||as),fog:!!C,useFog:p.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:p.flatShading===!0,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:M.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:_,morphTextureStride:Y,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:p.dithering,shadowMapEnabled:n.shadowMap.enabled&&y.length>0,shadowMapType:n.shadowMap.type,toneMapping:da,useLegacyLights:n._useLegacyLights,decodeVideoTexture:G&&p.map.isVideoTexture===!0&&it.getTransfer(p.map.colorSpace)===ot,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===2,flipSided:p.side===Xt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionDerivatives:ln&&p.extensions.derivatives===!0,extensionFragDepth:ln&&p.extensions.fragDepth===!0,extensionDrawBuffers:ln&&p.extensions.drawBuffers===!0,extensionShaderTextureLOD:ln&&p.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ln&&p.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()}},getProgramCacheKey:function(p){let x=[];if(p.shaderID?x.push(p.shaderID):(x.push(p.customVertexShaderID),x.push(p.customFragmentShaderID)),p.defines!==void 0)for(let y in p.defines)x.push(y),x.push(p.defines[y]);return p.isRawShaderMaterial===!1&&(function(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}(x,p),function(y,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),y.push(o.mask)}(x,p),x.push(n.outputColorSpace)),x.push(p.customProgramCacheKey),x.join()},getUniforms:function(p){let x=f[p.type],y;if(x){let v=si[x];y=ky.clone(v.uniforms)}else y=p.uniforms;return y},acquireProgram:function(p,x){let y;for(let v=0,M=c.length;v<M;v++){let C=c[v];if(C.cacheKey===x){y=C,++y.usedTimes;break}}return y===void 0&&(y=new Qv(n,x,p,s),c.push(y)),y},releaseProgram:function(p){if(--p.usedTimes==0){let x=c.indexOf(p);c[x]=c[c.length-1],c.pop(),p.destroy()}},releaseShaderCache:function(p){l.remove(p)},programs:c,dispose:function(){l.dispose()}}}function nx(){let n=new WeakMap;return{get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function ix(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Af(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rf(){let n=[],e=0,t=[],i=[],r=[];function s(a,o,l,c,h,u){let d=n[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},n[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=n.length;a<o;a++){let l=n[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||ix),i.length>1&&i.sort(o||Af),r.length>1&&r.sort(o||Af)}}}function rx(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new Rf,n.set(e,[r])):t>=i.length?(r=new Rf,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function sx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new be};break;case"SpotLight":t={position:new R,direction:new R,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new R,halfWidth:new R,halfHeight:new R}}return n[e.id]=t,t}}}var ax=0;function ox(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lx(n,e){let t=new sx,i=function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new R);let s=new R,a=new Le,o=new Le;return{setup:function(l,c){let h=0,u=0,d=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let m=0,f=0,g=0,p=0,x=0,y=0,v=0,M=0,C=0,S=0,T=0;l.sort(ox);let k=c===!0?Math.PI:1;for(let A=0,O=l.length;A<O;A++){let _=l[A],P=_.color,U=_.intensity,H=_.distance,Z=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)h+=P.r*U*k,u+=P.g*U*k,d+=P.b*U*k;else if(_.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(_.sh.coefficients[Y],U);T++}else if(_.isDirectionalLight){let Y=t.get(_);if(Y.color.copy(_.color).multiplyScalar(_.intensity*k),_.castShadow){let $=_.shadow,j=i.get(_);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,r.directionalShadow[m]=j,r.directionalShadowMap[m]=Z,r.directionalShadowMatrix[m]=_.shadow.matrix,y++}r.directional[m]=Y,m++}else if(_.isSpotLight){let Y=t.get(_);Y.position.setFromMatrixPosition(_.matrixWorld),Y.color.copy(P).multiplyScalar(U*k),Y.distance=H,Y.coneCos=Math.cos(_.angle),Y.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),Y.decay=_.decay,r.spot[g]=Y;let $=_.shadow;if(_.map&&(r.spotLightMap[C]=_.map,C++,$.updateMatrices(_),_.castShadow&&S++),r.spotLightMatrix[g]=$.matrix,_.castShadow){let j=i.get(_);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,r.spotShadow[g]=j,r.spotShadowMap[g]=Z,M++}g++}else if(_.isRectAreaLight){let Y=t.get(_);Y.color.copy(P).multiplyScalar(U),Y.halfWidth.set(.5*_.width,0,0),Y.halfHeight.set(0,.5*_.height,0),r.rectArea[p]=Y,p++}else if(_.isPointLight){let Y=t.get(_);if(Y.color.copy(_.color).multiplyScalar(_.intensity*k),Y.distance=_.distance,Y.decay=_.decay,_.castShadow){let $=_.shadow,j=i.get(_);j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,r.pointShadow[f]=j,r.pointShadowMap[f]=Z,r.pointShadowMatrix[f]=_.shadow.matrix,v++}r.point[f]=Y,f++}else if(_.isHemisphereLight){let Y=t.get(_);Y.skyColor.copy(_.color).multiplyScalar(U*k),Y.groundColor.copy(_.groundColor).multiplyScalar(U*k),r.hemi[x]=Y,x++}}p>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=u,r.ambient[2]=d;let L=r.hash;L.directionalLength===m&&L.pointLength===f&&L.spotLength===g&&L.rectAreaLength===p&&L.hemiLength===x&&L.numDirectionalShadows===y&&L.numPointShadows===v&&L.numSpotShadows===M&&L.numSpotMaps===C&&L.numLightProbes===T||(r.directional.length=m,r.spot.length=g,r.rectArea.length=p,r.point.length=f,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=M+C-S,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=S,r.numLightProbes=T,L.directionalLength=m,L.pointLength=f,L.spotLength=g,L.rectAreaLength=p,L.hemiLength=x,L.numDirectionalShadows=y,L.numPointShadows=v,L.numSpotShadows=M,L.numSpotMaps=C,L.numLightProbes=T,r.version=ax++)},setupView:function(l,c){let h=0,u=0,d=0,m=0,f=0,g=c.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let y=l[p];if(y.isDirectionalLight){let v=r.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(y.isSpotLight){let v=r.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(y.isRectAreaLight){let v=r.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),a.copy(y.matrixWorld),a.premultiply(g),o.extractRotation(a),v.halfWidth.set(.5*y.width,0,0),v.halfHeight.set(0,.5*y.height,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let v=r.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let v=r.hemi[f];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),f++}}},state:r}}function Cf(n,e){let t=new lx(n,e),i=[],r=[];return{init:function(){i.length=0,r.length=0},state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:function(s){t.setup(i,s)},setupLightsView:function(s){t.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){r.push(s)}}}function cx(n,e){let t=new WeakMap;return{get:function(i,r=0){let s=t.get(i),a;return s===void 0?(a=new Cf(n,e),t.set(i,[a])):r>=s.length?(a=new Cf(n,e),s.push(a)):a=s[r],a},dispose:function(){t=new WeakMap}}}var Nu=class extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bu=class extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function hx(n,e,t){let i=new ra,r=new he,s=new he,a=new Tt,o=new Nu({depthPacking:3201}),l=new Bu,c={},h=t.maxTextureSize,u={[cr]:Xt,[Xt]:cr,2:2},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:`void main() {
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
}`}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let f=new nt;f.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ue(f,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let x=this.type;function y(S,T){let k=e.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ui(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,k,d,g,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,k,m,g,null)}function v(S,T,k,L){let A=null,O=k.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(O!==void 0)A=O;else if(A=k.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let _=A.uuid,P=T.uuid,U=c[_];U===void 0&&(U={},c[_]=U);let H=U[P];H===void 0&&(H=A.clone(),U[P]=H,T.addEventListener("dispose",C)),A=H}return A.visible=T.visible,A.wireframe=T.wireframe,A.side=L===Li?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:u[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(n.properties.get(A).light=k),A}function M(S,T,k,L,A){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&A===Li)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld);let _=e.update(S),P=S.material;if(Array.isArray(P)){let U=_.groups;for(let H=0,Z=U.length;H<Z;H++){let Y=U[H],$=P[Y.materialIndex];if($&&$.visible){let j=v(S,$,L,A);S.onBeforeShadow(n,S,T,k,_,j,Y),n.renderBufferDirect(k,null,_,j,S,Y),S.onAfterShadow(n,S,T,k,_,j,Y)}}}else if(P.visible){let U=v(S,P,L,A);S.onBeforeShadow(n,S,T,k,_,U,null),n.renderBufferDirect(k,null,_,U,S,null),S.onAfterShadow(n,S,T,k,_,U,null)}}let O=S.children;for(let _=0,P=O.length;_<P;_++)M(O[_],T,k,L,A)}function C(S){S.target.removeEventListener("dispose",C);for(let T in c){let k=c[T],L=S.target.uuid;L in k&&(k[L].dispose(),delete k[L])}}this.render=function(S,T,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let L=n.getRenderTarget(),A=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),_=n.state;_.setBlending(0),_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let P=x!==Li&&this.type===Li,U=x===Li&&this.type!==Li;for(let H=0,Z=S.length;H<Z;H++){let Y=S[H],$=Y.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);let j=$.getFrameExtents();if(r.multiply(j),s.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/j.x),r.x=s.x*j.x,$.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/j.y),r.y=s.y*j.y,$.mapSize.y=s.y)),$.map===null||P===!0||U===!0){let G=this.type!==Li?{minFilter:Nt,magFilter:Nt}:{};$.map!==null&&$.map.dispose(),$.map=new Ui(r.x,r.y,G),$.map.texture.name=Y.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let z=$.getViewportCount();for(let G=0;G<z;G++){let re=$.getViewport(G);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),_.viewport(a),$.updateMatrices(Y,G),i=$.getFrustum(),M(T,k,$.camera,Y,this.type)}$.isPointLightShadow!==!0&&this.type===Li&&y($,k),$.needsUpdate=!1}x=this.type,p.needsUpdate=!1,n.setRenderTarget(L,A,O)}}function ux(n,e,t){let i=t.isWebGL2,r=new function(){let w=!1,ae=new Tt,J=null,Q=new Tt(0,0,0,0);return{setMask:function(le){J===le||w||(n.colorMask(le,le,le,le),J=le)},setLocked:function(le){w=le},setClear:function(le,pe,ye,ve,Pe){Pe===!0&&(le*=ve,pe*=ve,ye*=ve),ae.set(le,pe,ye,ve),Q.equals(ae)===!1&&(n.clearColor(le,pe,ye,ve),Q.copy(ae))},reset:function(){w=!1,J=null,Q.set(-1,0,0,0)}}},s=new function(){let w=!1,ae=null,J=null,Q=null;return{setTest:function(le){le?q(n.DEPTH_TEST):D(n.DEPTH_TEST)},setMask:function(le){ae===le||w||(n.depthMask(le),ae=le)},setFunc:function(le){if(J!==le){switch(le){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:default:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL)}J=le}},setLocked:function(le){w=le},setClear:function(le){Q!==le&&(n.clearDepth(le),Q=le)},reset:function(){w=!1,ae=null,J=null,Q=null}}},a=new function(){let w=!1,ae=null,J=null,Q=null,le=null,pe=null,ye=null,ve=null,Pe=null;return{setTest:function(xe){w||(xe?q(n.STENCIL_TEST):D(n.STENCIL_TEST))},setMask:function(xe){ae===xe||w||(n.stencilMask(xe),ae=xe)},setFunc:function(xe,Ee,Oe){J===xe&&Q===Ee&&le===Oe||(n.stencilFunc(xe,Ee,Oe),J=xe,Q=Ee,le=Oe)},setOp:function(xe,Ee,Oe){pe===xe&&ye===Ee&&ve===Oe||(n.stencilOp(xe,Ee,Oe),pe=xe,ye=Ee,ve=Oe)},setLocked:function(xe){w=xe},setClear:function(xe){Pe!==xe&&(n.clearStencil(xe),Pe=xe)},reset:function(){w=!1,ae=null,J=null,Q=null,le=null,pe=null,ye=null,ve=null,Pe=null}}},o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],m=null,f=!1,g=null,p=null,x=null,y=null,v=null,M=null,C=null,S=new be(0,0,0),T=0,k=!1,L=null,A=null,O=null,_=null,P=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=Z>=2);let $=null,j={},z=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),re=new Tt().fromArray(z),b=new Tt().fromArray(G);function E(w,ae,J,Q){let le=new Uint8Array(4),pe=n.createTexture();n.bindTexture(w,pe),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<J;ye++)!i||w!==n.TEXTURE_3D&&w!==n.TEXTURE_2D_ARRAY?n.texImage2D(ae+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage3D(ae,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,le);return pe}let F={};function q(w){c[w]!==!0&&(n.enable(w),c[w]=!0)}function D(w){c[w]!==!1&&(n.disable(w),c[w]=!1)}F[n.TEXTURE_2D]=E(n.TEXTURE_2D,n.TEXTURE_2D,1),F[n.TEXTURE_CUBE_MAP]=E(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(F[n.TEXTURE_2D_ARRAY]=E(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),F[n.TEXTURE_3D]=E(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),q(n.DEPTH_TEST),s.setFunc(3),V(!1),ee(1),q(n.CULL_FACE),B(0);let X={[Or]:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};if(i)X[103]=n.MIN,X[104]=n.MAX;else{let w=e.get("EXT_blend_minmax");w!==null&&(X[103]=w.MIN_EXT,X[104]=w.MAX_EXT)}let N={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,[yu]:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,[vu]:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function B(w,ae,J,Q,le,pe,ye,ve,Pe,xe){if(w!==0){if(f===!1&&(q(n.BLEND),f=!0),w===5)le=le||ae,pe=pe||J,ye=ye||Q,ae===p&&le===v||(n.blendEquationSeparate(X[ae],X[le]),p=ae,v=le),J===x&&Q===y&&pe===M&&ye===C||(n.blendFuncSeparate(N[J],N[Q],N[pe],N[ye]),x=J,y=Q,M=pe,C=ye),ve.equals(S)!==!1&&Pe===T||(n.blendColor(ve.r,ve.g,ve.b,Pe),S.copy(ve),T=Pe),g=w,k=!1;else if(w!==g||xe!==k){if(p===Or&&v===Or||(n.blendEquation(n.FUNC_ADD),p=Or,v=Or),xe)switch(w){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}else switch(w){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}x=null,y=null,M=null,C=null,S.set(0,0,0),T=0,g=w,k=xe}}else f===!0&&(D(n.BLEND),f=!1)}function V(w){L!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),L=w)}function ee(w){w!==0?(q(n.CULL_FACE),w!==A&&(w===1?n.cullFace(n.BACK):w===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):D(n.CULL_FACE),A=w}function ie(w,ae,J){w?(q(n.POLYGON_OFFSET_FILL),_===ae&&P===J||(n.polygonOffset(ae,J),_=ae,P=J)):D(n.POLYGON_OFFSET_FILL)}return{buffers:{color:r,depth:s,stencil:a},enable:q,disable:D,bindFramebuffer:function(w,ae){return h[w]!==ae&&(n.bindFramebuffer(w,ae),h[w]=ae,i&&(w===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ae),w===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ae)),!0)},drawBuffers:function(w,ae){let J=d,Q=!1;if(w)if(J=u.get(ae),J===void 0&&(J=[],u.set(ae,J)),w.isWebGLMultipleRenderTargets){let le=w.texture;if(J.length!==le.length||J[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,ye=le.length;pe<ye;pe++)J[pe]=n.COLOR_ATTACHMENT0+pe;J.length=le.length,Q=!0}}else J[0]!==n.COLOR_ATTACHMENT0&&(J[0]=n.COLOR_ATTACHMENT0,Q=!0);else J[0]!==n.BACK&&(J[0]=n.BACK,Q=!0);Q&&(t.isWebGL2?n.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))},useProgram:function(w){return m!==w&&(n.useProgram(w),m=w,!0)},setBlending:B,setMaterial:function(w,ae){w.side===2?D(n.CULL_FACE):q(n.CULL_FACE);let J=w.side===Xt;ae&&(J=!J),V(J),w.blending===1&&w.transparent===!1?B(0):B(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),r.setMask(w.colorWrite);let Q=w.stencilWrite;a.setTest(Q),Q&&(a.setMask(w.stencilWriteMask),a.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),a.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),ie(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?q(n.SAMPLE_ALPHA_TO_COVERAGE):D(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:V,setCullFace:ee,setLineWidth:function(w){w!==O&&(H&&n.lineWidth(w),O=w)},setPolygonOffset:ie,setScissorTest:function(w){w?q(n.SCISSOR_TEST):D(n.SCISSOR_TEST)},activeTexture:function(w){w===void 0&&(w=n.TEXTURE0+U-1),$!==w&&(n.activeTexture(w),$=w)},bindTexture:function(w,ae,J){J===void 0&&(J=$===null?n.TEXTURE0+U-1:$);let Q=j[J];Q===void 0&&(Q={type:void 0,texture:void 0},j[J]=Q),Q.type===w&&Q.texture===ae||($!==J&&(n.activeTexture(J),$=J),n.bindTexture(w,ae||F[w]),Q.type=w,Q.texture=ae)},unbindTexture:function(){let w=j[$];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexImage3D:function(){try{n.compressedTexImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage2D:function(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage3D:function(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},updateUBOMapping:function(w,ae){let J=l.get(ae);J===void 0&&(J=new WeakMap,l.set(ae,J));let Q=J.get(w);Q===void 0&&(Q=n.getUniformBlockIndex(ae,w.name),J.set(w,Q))},uniformBlockBinding:function(w,ae){let J=l.get(ae).get(w);o.get(ae)!==J&&(n.uniformBlockBinding(ae,J,w.__bindingPointIndex),o.set(ae,J))},texStorage2D:function(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texStorage3D:function(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage2D:function(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage3D:function(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},scissor:function(w){re.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),re.copy(w))},viewport:function(w){b.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),b.copy(w))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},$=null,j={},h={},u=new WeakMap,d=[],m=null,f=!1,g=null,p=null,x=null,y=null,v=null,M=null,C=null,S=new be(0,0,0),T=0,k=!1,L=null,A=null,O=null,_=null,P=null,re.set(0,0,n.canvas.width,n.canvas.height),b.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}}}function dx(n,e,t,i,r,s,a){let o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(b,E){return m?new OffscreenCanvas(b,E):kl("canvas")}function g(b,E,F,q){let D=1;if((b.width>q||b.height>q)&&(D=q/Math.max(b.width,b.height)),D<1||E===!0){if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap){let X=E?wu:Math.floor,N=X(D*b.width),B=X(D*b.height);u===void 0&&(u=f(N,B));let V=F?f(N,B):u;return V.width=N,V.height=B,V.getContext("2d").drawImage(b,0,0,N,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+N+"x"+B+")."),V}return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b}return b}function p(b){return $m(b.width)&&$m(b.height)}function x(b,E){return b.generateMipmaps&&E&&b.minFilter!==Nt&&b.minFilter!==Wn}function y(b){n.generateMipmap(b)}function v(b,E,F,q,D=!1){if(o===!1)return E;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=E;if(E===n.RED&&(F===n.FLOAT&&(X=n.R32F),F===n.HALF_FLOAT&&(X=n.R16F),F===n.UNSIGNED_BYTE&&(X=n.R8)),E===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(X=n.R8UI),F===n.UNSIGNED_SHORT&&(X=n.R16UI),F===n.UNSIGNED_INT&&(X=n.R32UI),F===n.BYTE&&(X=n.R8I),F===n.SHORT&&(X=n.R16I),F===n.INT&&(X=n.R32I)),E===n.RG&&(F===n.FLOAT&&(X=n.RG32F),F===n.HALF_FLOAT&&(X=n.RG16F),F===n.UNSIGNED_BYTE&&(X=n.RG8)),E===n.RGBA){let N=D?Nl:it.getTransfer(q);F===n.FLOAT&&(X=n.RGBA32F),F===n.HALF_FLOAT&&(X=n.RGBA16F),F===n.UNSIGNED_BYTE&&(X=N===ot?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return X!==n.R16F&&X!==n.R32F&&X!==n.RG16F&&X!==n.RG32F&&X!==n.RGBA16F&&X!==n.RGBA32F||e.get("EXT_color_buffer_float"),X}function M(b,E,F){return x(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==Nt&&b.minFilter!==Wn?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function C(b){return b===Nt||b===fm||b===Ih?n.NEAREST:n.LINEAR}function S(b){let E=b.target;E.removeEventListener("dispose",S),function(F){let q=i.get(F);if(q.__webglInit===void 0)return;let D=F.source,X=d.get(D);if(X){let N=X[q.__cacheKey];N.usedTimes--,N.usedTimes===0&&k(F),Object.keys(X).length===0&&d.delete(D)}i.remove(F)}(E),E.isVideoTexture&&h.delete(E)}function T(b){let E=b.target;E.removeEventListener("dispose",T),function(F){let q=F.texture,D=i.get(F),X=i.get(q);if(X.__webglTexture!==void 0&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(D.__webglFramebuffer[N]))for(let B=0;B<D.__webglFramebuffer[N].length;B++)n.deleteFramebuffer(D.__webglFramebuffer[N][B]);else n.deleteFramebuffer(D.__webglFramebuffer[N]);D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[N])}else{if(Array.isArray(D.__webglFramebuffer))for(let N=0;N<D.__webglFramebuffer.length;N++)n.deleteFramebuffer(D.__webglFramebuffer[N]);else n.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let N=0;N<D.__webglColorRenderbuffer.length;N++)D.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[N]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let N=0,B=q.length;N<B;N++){let V=i.get(q[N]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(q[N])}i.remove(q),i.remove(F)}(E)}function k(b){let E=i.get(b);n.deleteTexture(E.__webglTexture);let F=b.source;delete d.get(F)[E.__cacheKey],a.memory.textures--}let L=0;function A(b,E){let F=i.get(b);if(b.isVideoTexture&&function(q){let D=a.render.frame;h.get(q)!==D&&(h.set(q,D),q.update())}(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){let q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(q.complete!==!1)return void Z(F,b,E);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+E)}let O={[oi]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[Eu]:n.MIRRORED_REPEAT},_={[Nt]:n.NEAREST,[fm]:n.NEAREST_MIPMAP_NEAREST,[Ih]:n.NEAREST_MIPMAP_LINEAR,[Wn]:n.LINEAR,[by]:n.LINEAR_MIPMAP_NEAREST,[Fl]:n.LINEAR_MIPMAP_LINEAR},P={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function U(b,E,F){if(F?(n.texParameteri(b,n.TEXTURE_WRAP_S,O[E.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,O[E.wrapT]),b!==n.TEXTURE_3D&&b!==n.TEXTURE_2D_ARRAY||n.texParameteri(b,n.TEXTURE_WRAP_R,O[E.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,_[E.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,_[E.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),b!==n.TEXTURE_3D&&b!==n.TEXTURE_2D_ARRAY||n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),E.wrapS===Pi&&E.wrapT===Pi||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,C(E.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,C(E.minFilter)),E.minFilter!==Nt&&E.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let q=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Nt||E.minFilter!==Ih&&E.minFilter!==Fl||E.type===sr&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===ja&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(b,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function H(b,E){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",S));let q=E.source,D=d.get(q);D===void 0&&(D={},d.set(q,D));let X=function(N){let B=[];return B.push(N.wrapS),B.push(N.wrapT),B.push(N.wrapR||0),B.push(N.magFilter),B.push(N.minFilter),B.push(N.anisotropy),B.push(N.internalFormat),B.push(N.format),B.push(N.type),B.push(N.generateMipmaps),B.push(N.premultiplyAlpha),B.push(N.flipY),B.push(N.unpackAlignment),B.push(N.colorSpace),B.join()}(E);if(X!==b.__cacheKey){D[X]===void 0&&(D[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),D[X].usedTimes++;let N=D[b.__cacheKey];N!==void 0&&(D[b.__cacheKey].usedTimes--,N.usedTimes===0&&k(E)),b.__cacheKey=X,b.__webglTexture=D[X].texture}return F}function Z(b,E,F){let q=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(q=n.TEXTURE_3D);let D=H(b,E),X=E.source;t.bindTexture(q,b.__webglTexture,n.TEXTURE0+F);let N=i.get(X);if(X.version!==N.__version||D===!0){t.activeTexture(n.TEXTURE0+F);let B=it.getPrimaries(it.workingColorSpace),V=E.colorSpace===ai?null:it.getPrimaries(E.colorSpace),ee=E.colorSpace===ai||B===V?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ie=function(Ee){return!o&&(Ee.wrapS!==Pi||Ee.wrapT!==Pi||Ee.minFilter!==Nt&&Ee.minFilter!==Wn)}(E)&&p(E.image)===!1,w=g(E.image,ie,!1,r.maxTextureSize);w=re(E,w);let ae=p(w)||o,J=s.convert(E.format,E.colorSpace),Q,le=s.convert(E.type),pe=v(E.internalFormat,J,le,E.colorSpace,E.isVideoTexture);U(q,E,ae);let ye=E.mipmaps,ve=o&&E.isVideoTexture!==!0&&pe!==i0,Pe=N.__version===void 0||D===!0,xe=M(E,w,ae);if(E.isDepthTexture)pe=n.DEPTH_COMPONENT,o?pe=E.type===sr?n.DEPTH_COMPONENT32F:E.type===rr?n.DEPTH_COMPONENT24:E.type===Gr?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT16:E.type===sr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Vr&&pe===n.DEPTH_COMPONENT&&E.type!==yd&&E.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=rr,le=s.convert(E.type)),E.format===ea&&pe===n.DEPTH_COMPONENT&&(pe=n.DEPTH_STENCIL,E.type!==Gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Gr,le=s.convert(E.type))),Pe&&(ve?t.texStorage2D(n.TEXTURE_2D,1,pe,w.width,w.height):t.texImage2D(n.TEXTURE_2D,0,pe,w.width,w.height,0,J,le,null));else if(E.isDataTexture)if(ye.length>0&&ae){ve&&Pe&&t.texStorage2D(n.TEXTURE_2D,xe,pe,ye[0].width,ye[0].height);for(let Ee=0,Oe=ye.length;Ee<Oe;Ee++)Q=ye[Ee],ve?t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Q.width,Q.height,J,le,Q.data):t.texImage2D(n.TEXTURE_2D,Ee,pe,Q.width,Q.height,0,J,le,Q.data);E.generateMipmaps=!1}else ve?(Pe&&t.texStorage2D(n.TEXTURE_2D,xe,pe,w.width,w.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,J,le,w.data)):t.texImage2D(n.TEXTURE_2D,0,pe,w.width,w.height,0,J,le,w.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ve&&Pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,pe,ye[0].width,ye[0].height,w.depth);for(let Ee=0,Oe=ye.length;Ee<Oe;Ee++)Q=ye[Ee],E.format!==An?J!==null?ve?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,Q.width,Q.height,w.depth,J,Q.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ee,pe,Q.width,Q.height,w.depth,0,Q.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,Q.width,Q.height,w.depth,J,le,Q.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ee,pe,Q.width,Q.height,w.depth,0,J,le,Q.data)}else{ve&&Pe&&t.texStorage2D(n.TEXTURE_2D,xe,pe,ye[0].width,ye[0].height);for(let Ee=0,Oe=ye.length;Ee<Oe;Ee++)Q=ye[Ee],E.format!==An?J!==null?ve?t.compressedTexSubImage2D(n.TEXTURE_2D,Ee,0,0,Q.width,Q.height,J,Q.data):t.compressedTexImage2D(n.TEXTURE_2D,Ee,pe,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Q.width,Q.height,J,le,Q.data):t.texImage2D(n.TEXTURE_2D,Ee,pe,Q.width,Q.height,0,J,le,Q.data)}else if(E.isDataArrayTexture)ve?(Pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,pe,w.width,w.height,w.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,w.width,w.height,w.depth,J,le,w.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,w.width,w.height,w.depth,0,J,le,w.data);else if(E.isData3DTexture)ve?(Pe&&t.texStorage3D(n.TEXTURE_3D,xe,pe,w.width,w.height,w.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,w.width,w.height,w.depth,J,le,w.data)):t.texImage3D(n.TEXTURE_3D,0,pe,w.width,w.height,w.depth,0,J,le,w.data);else if(E.isFramebufferTexture){if(Pe)if(ve)t.texStorage2D(n.TEXTURE_2D,xe,pe,w.width,w.height);else{let Ee=w.width,Oe=w.height;for(let It=0;It<xe;It++)t.texImage2D(n.TEXTURE_2D,It,pe,Ee,Oe,0,J,le,null),Ee>>=1,Oe>>=1}}else if(ye.length>0&&ae){ve&&Pe&&t.texStorage2D(n.TEXTURE_2D,xe,pe,ye[0].width,ye[0].height);for(let Ee=0,Oe=ye.length;Ee<Oe;Ee++)Q=ye[Ee],ve?t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,J,le,Q):t.texImage2D(n.TEXTURE_2D,Ee,pe,J,le,Q);E.generateMipmaps=!1}else ve?(Pe&&t.texStorage2D(n.TEXTURE_2D,xe,pe,w.width,w.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J,le,w)):t.texImage2D(n.TEXTURE_2D,0,pe,J,le,w);x(E,ae)&&y(q),N.__version=X.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Y(b,E,F,q,D,X){let N=s.convert(F.format,F.colorSpace),B=s.convert(F.type),V=v(F.internalFormat,N,B,F.colorSpace);if(!i.get(E).__hasExternalTextures){let ee=Math.max(1,E.width>>X),ie=Math.max(1,E.height>>X);D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?t.texImage3D(D,X,V,ee,ie,E.depth,0,N,B,null):t.texImage2D(D,X,V,ee,ie,0,N,B,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),G(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,D,i.get(F).__webglTexture,0,z(E)):(D===n.TEXTURE_2D||D>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,D,i.get(F).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function $(b,E,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),E.depthBuffer&&!E.stencilBuffer){let q=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||G(E)){let D=E.depthTexture;D&&D.isDepthTexture&&(D.type===sr?q=n.DEPTH_COMPONENT32F:D.type===rr&&(q=n.DEPTH_COMPONENT24));let X=z(E);G(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,q,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,X,q,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,q,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(E.depthBuffer&&E.stencilBuffer){let q=z(E);F&&G(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,E.width,E.height):G(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{let q=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let D=0;D<q.length;D++){let X=q[D],N=s.convert(X.format,X.colorSpace),B=s.convert(X.type),V=v(X.internalFormat,N,B,X.colorSpace),ee=z(E);F&&G(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,V,E.width,E.height):G(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,V,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,V,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function j(b){let E=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");(function(q,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,q),!D.depthTexture||!D.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(D.depthTexture).__webglTexture&&D.depthTexture.image.width===D.width&&D.depthTexture.image.height===D.height||(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),A(D.depthTexture,0);let X=i.get(D.depthTexture).__webglTexture,N=z(D);if(D.depthTexture.format===Vr)G(D)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else{if(D.depthTexture.format!==ea)throw new Error("Unknown depthTexture format");G(D)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0)}})(E.__webglFramebuffer,b)}else if(F){E.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[q]),E.__webglDepthbuffer[q]=n.createRenderbuffer(),$(E.__webglDepthbuffer[q],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),$(E.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function z(b){return Math.min(r.maxSamples,b.samples)}function G(b){let E=i.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(b,E){let F=b.colorSpace,q=b.format,D=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===bu||F!==Di&&F!==ai&&(it.getTransfer(F)===ot?o===!1?e.has("EXT_sRGB")===!0&&q===An?(b.format=bu,b.minFilter=Wn,b.generateMipmaps=!1):E=Hl.sRGBToLinear(E):q===An&&D===Hr||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}this.allocateTextureUnit=function(){let b=L;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),L+=1,b},this.resetTextureUnits=function(){L=0},this.setTexture2D=A,this.setTexture2DArray=function(b,E){let F=i.get(b);b.version>0&&F.__version!==b.version?Z(F,b,E):t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+E)},this.setTexture3D=function(b,E){let F=i.get(b);b.version>0&&F.__version!==b.version?Z(F,b,E):t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+E)},this.setTextureCube=function(b,E){let F=i.get(b);b.version>0&&F.__version!==b.version?function(q,D,X){if(D.image.length!==6)return;let N=H(q,D),B=D.source;t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+X);let V=i.get(B);if(B.version!==V.__version||N===!0){t.activeTexture(n.TEXTURE0+X);let ee=it.getPrimaries(it.workingColorSpace),ie=D.colorSpace===ai?null:it.getPrimaries(D.colorSpace),w=D.colorSpace===ai||ee===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,D.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,D.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,w);let ae=D.isCompressedTexture||D.image[0].isCompressedTexture,J=D.image[0]&&D.image[0].isDataTexture,Q=[];for(let Se=0;Se<6;Se++)Q[Se]=ae||J?J?D.image[Se].image:D.image[Se]:g(D.image[Se],!1,!0,r.maxCubemapSize),Q[Se]=re(D,Q[Se]);let le=Q[0],pe=p(le)||o,ye=s.convert(D.format,D.colorSpace),ve=s.convert(D.type),Pe=v(D.internalFormat,ye,ve,D.colorSpace),xe=o&&D.isVideoTexture!==!0,Ee=V.__version===void 0||N===!0,Oe,It=M(D,le,pe);if(U(n.TEXTURE_CUBE_MAP,D,pe),ae){xe&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,It,Pe,le.width,le.height);for(let Se=0;Se<6;Se++){Oe=Q[Se].mipmaps;for(let Ze=0;Ze<Oe.length;Ze++){let $e=Oe[Ze];D.format!==An?ye!==null?xe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze,0,0,$e.width,$e.height,ye,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze,Pe,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze,0,0,$e.width,$e.height,ye,ve,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze,Pe,$e.width,$e.height,0,ye,ve,$e.data)}}}else{Oe=D.mipmaps,xe&&Ee&&(Oe.length>0&&It++,t.texStorage2D(n.TEXTURE_CUBE_MAP,It,Pe,Q[0].width,Q[0].height));for(let Se=0;Se<6;Se++)if(J){xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Q[Se].width,Q[Se].height,ye,ve,Q[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Pe,Q[Se].width,Q[Se].height,0,ye,ve,Q[Se].data);for(let Ze=0;Ze<Oe.length;Ze++){let $e=Oe[Ze].image[Se].image;xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze+1,0,0,$e.width,$e.height,ye,ve,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze+1,Pe,$e.width,$e.height,0,ye,ve,$e.data)}}else{xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ye,ve,Q[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Pe,ye,ve,Q[Se]);for(let Ze=0;Ze<Oe.length;Ze++){let $e=Oe[Ze];xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze+1,0,0,ye,ve,$e.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze+1,Pe,ye,ve,$e.image[Se])}}}x(D,pe)&&y(n.TEXTURE_CUBE_MAP),V.__version=B.version,D.onUpdate&&D.onUpdate(D)}q.__version=D.version}(F,b,E):t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+E)},this.rebindTextures=function(b,E,F){let q=i.get(b);E!==void 0&&Y(q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&j(b)},this.setupRenderTarget=function(b){let E=b.texture,F=i.get(b),q=i.get(E);b.addEventListener("dispose",T),b.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=E.version,a.memory.textures++);let D=b.isWebGLCubeRenderTarget===!0,X=b.isWebGLMultipleRenderTargets===!0,N=p(b)||o;if(D){F.__webglFramebuffer=[];for(let B=0;B<6;B++)if(o&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[B]=[];for(let V=0;V<E.mipmaps.length;V++)F.__webglFramebuffer[B][V]=n.createFramebuffer()}else F.__webglFramebuffer[B]=n.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let B=0;B<E.mipmaps.length;B++)F.__webglFramebuffer[B]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(X)if(r.drawBuffers){let B=b.texture;for(let V=0,ee=B.length;V<ee;V++){let ie=i.get(B[V]);ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&G(b)===!1){let B=X?E:[E];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let V=0;V<B.length;V++){let ee=B[V];F.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[V]);let ie=s.convert(ee.format,ee.colorSpace),w=s.convert(ee.type),ae=v(ee.internalFormat,ie,w,ee.colorSpace,b.isXRRenderTarget===!0),J=z(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,ae,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,F.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),$(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(D){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),U(n.TEXTURE_CUBE_MAP,E,N);for(let B=0;B<6;B++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let V=0;V<E.mipmaps.length;V++)Y(F.__webglFramebuffer[B][V],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+B,V);else Y(F.__webglFramebuffer[B],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);x(E,N)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){let B=b.texture;for(let V=0,ee=B.length;V<ee;V++){let ie=B[V],w=i.get(ie);t.bindTexture(n.TEXTURE_2D,w.__webglTexture),U(n.TEXTURE_2D,ie,N),Y(F.__webglFramebuffer,b,ie,n.COLOR_ATTACHMENT0+V,n.TEXTURE_2D,0),x(ie,N)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let B=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?B=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(B,q.__webglTexture),U(B,E,N),o&&E.mipmaps&&E.mipmaps.length>0)for(let V=0;V<E.mipmaps.length;V++)Y(F.__webglFramebuffer[V],b,E,n.COLOR_ATTACHMENT0,B,V);else Y(F.__webglFramebuffer,b,E,n.COLOR_ATTACHMENT0,B,0);x(E,N)&&y(B),t.unbindTexture()}b.depthBuffer&&j(b)},this.updateRenderTargetMipmap=function(b){let E=p(b)||o,F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let q=0,D=F.length;q<D;q++){let X=F[q];if(x(X,E)){let N=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,B=i.get(X).__webglTexture;t.bindTexture(N,B),y(N),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(b){if(o&&b.samples>0&&G(b)===!1){let E=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],F=b.width,q=b.height,D=n.COLOR_BUFFER_BIT,X=[],N=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=i.get(b),V=b.isWebGLMultipleRenderTargets===!0;if(V)for(let ee=0;ee<E.length;ee++)t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,B.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,B.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,B.__webglFramebuffer);for(let ee=0;ee<E.length;ee++){X.push(n.COLOR_ATTACHMENT0+ee),b.depthBuffer&&X.push(N);let ie=B.__ignoreDepthValues!==void 0&&B.__ignoreDepthValues;if(ie===!1&&(b.depthBuffer&&(D|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(D|=n.STENCIL_BUFFER_BIT)),V&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,B.__webglColorRenderbuffer[ee]),ie===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[N]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[N])),V){let w=i.get(E[ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,w,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,D,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let ee=0;ee<E.length;ee++){t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,B.__webglColorRenderbuffer[ee]);let ie=i.get(E[ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,B.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,B.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=G}function px(n,e,t){let i=t.isWebGL2;return{convert:function(r,s=""){let a,o=it.getTransfer(s);if(r===Hr)return n.UNSIGNED_BYTE;if(r===Kf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Qf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return n.BYTE;if(r===1011)return n.SHORT;if(r===yd)return n.UNSIGNED_SHORT;if(r===Jf)return n.INT;if(r===rr)return n.UNSIGNED_INT;if(r===sr)return n.FLOAT;if(r===ja)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return n.ALPHA;if(r===An)return n.RGBA;if(r===1024)return n.LUMINANCE;if(r===1025)return n.LUMINANCE_ALPHA;if(r===Vr)return n.DEPTH_COMPONENT;if(r===ea)return n.DEPTH_STENCIL;if(r===bu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return n.RED;if(r===e0)return n.RED_INTEGER;if(r===1030)return n.RG;if(r===t0)return n.RG_INTEGER;if(r===n0)return n.RGBA_INTEGER;if(r===Fh||r===Dh||r===Uh||r===Nh)if(o===ot){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(r===Fh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(r===Fh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(r===gm||r===ym||r===vm||r===xm){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(r===gm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ym)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(r===i0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===_m||r===Em){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(r===_m)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Em)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(r===Mm||r===bm||r===Sm||r===wm||r===Tm||r===Am||r===Rm||r===Cm||r===Lm||r===Pm||r===Im||r===Fm||r===Dm||r===Um){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(r===Mm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Tm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Am)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Im)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dm)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Um)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(r===Bh||r===Nm||r===Bm){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(r===Bh)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(r===36283||r===Om||r===zm||r===km){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(r===Bh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Om)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===km)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return r===Gr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}}}var Ou=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ge=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},mx={type:"move"},Wa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let p=t.getJointPose(g,i),x=this._getHandJoint(c,g);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=p.radius),x.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,f=.005;c.inputState.pinching&&d>m+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ge;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},zu=class extends hr{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,f=null,g=t.getContextAttributes(),p=null,x=null,y=[],v=[],M=new he,C=null,S=new Jt;S.layers.enable(1),S.viewport=new Tt;let T=new Jt;T.layers.enable(2),T.viewport=new Tt;let k=[S,T],L=new Ou;L.layers.enable(1),L.layers.enable(2);let A=null,O=null;function _(z){let G=v.indexOf(z.inputSource);if(G===-1)return;let re=y[G];re!==void 0&&(re.update(z.inputSource,z.frame,c||a),re.dispatchEvent({type:z.type,data:z.inputSource}))}function P(){r.removeEventListener("select",_),r.removeEventListener("selectstart",_),r.removeEventListener("selectend",_),r.removeEventListener("squeeze",_),r.removeEventListener("squeezestart",_),r.removeEventListener("squeezeend",_),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",U);for(let z=0;z<y.length;z++){let G=v[z];G!==null&&(v[z]=null,y[z].disconnect(G))}A=null,O=null,e.setRenderTarget(p),m=null,d=null,u=null,r=null,x=null,j.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}function U(z){for(let G=0;G<z.removed.length;G++){let re=z.removed[G],b=v.indexOf(re);b>=0&&(v[b]=null,y[b].disconnect(re))}for(let G=0;G<z.added.length;G++){let re=z.added[G],b=v.indexOf(re);if(b===-1){for(let F=0;F<y.length;F++){if(F>=v.length){v.push(re),b=F;break}if(v[F]===null){v[F]=re,b=F;break}}if(b===-1)break}let E=y[b];E&&E.connect(re)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let G=y[z];return G===void 0&&(G=new Wa,y[z]=G),G.getTargetRaySpace()},this.getControllerGrip=function(z){let G=y[z];return G===void 0&&(G=new Wa,y[z]=G),G.getGripSpace()},this.getHand=function(z){let G=y[z];return G===void 0&&(G=new Wa,y[z]=G),G.getHandSpace()},this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",_),r.addEventListener("selectstart",_),r.addEventListener("selectend",_),r.addEventListener("squeeze",_),r.addEventListener("squeezestart",_),r.addEventListener("squeezeend",_),r.addEventListener("end",P),r.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let G={antialias:r.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Ui(m.framebufferWidth,m.framebufferHeight,{format:An,type:Hr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let G=null,re=null,b=null;g.depth&&(b=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=g.stencil?ea:Vr,re=g.stencil?Gr:rr);let E={colorFormat:t.RGBA8,depthFormat:b,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(E),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ui(d.textureWidth,d.textureHeight,{format:An,type:Hr,depthTexture:new Yl(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0}),e.properties.get(x).__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};let H=new R,Z=new R;function Y(z,G){G===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(G.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;L.near=T.near=S.near=z.near,L.far=T.far=S.far=z.far,A===L.near&&O===L.far||(r.updateRenderState({depthNear:L.near,depthFar:L.far}),A=L.near,O=L.far);let G=z.parent,re=L.cameras;Y(L,G);for(let b=0;b<re.length;b++)Y(re[b],G);re.length===2?function(b,E,F){H.setFromMatrixPosition(E.matrixWorld),Z.setFromMatrixPosition(F.matrixWorld);let q=H.distanceTo(Z),D=E.projectionMatrix.elements,X=F.projectionMatrix.elements,N=D[14]/(D[10]-1),B=D[14]/(D[10]+1),V=(D[9]+1)/D[5],ee=(D[9]-1)/D[5],ie=(D[8]-1)/D[0],w=(X[8]+1)/X[0],ae=N*ie,J=N*w,Q=q/(-ie+w),le=Q*-ie;E.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(le),b.translateZ(Q),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();let pe=N+Q,ye=B+Q,ve=ae-le,Pe=J+(q-le),xe=V*B/ye*pe,Ee=ee*B/ye*pe;b.projectionMatrix.makePerspective(ve,Pe,xe,Ee,pe,ye),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}(L,S,T):L.projectionMatrix.copy(S.projectionMatrix),function(b,E,F){F===null?b.matrix.copy(E.matrixWorld):(b.matrix.copy(F.matrixWorld),b.matrix.invert(),b.matrix.multiply(E.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(E.projectionMatrix),b.projectionMatrixInverse.copy(E.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=2*Su*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}(z,L,G)},this.getCamera=function(){return L},this.getFoveation=function(){if(d!==null||m!==null)return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let $=null,j=new l0;j.setAnimationLoop(function(z,G){if(h=G.getViewerPose(c||a),f=G,h!==null){let re=h.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let b=!1;re.length!==L.cameras.length&&(L.cameras.length=0,b=!0);for(let E=0;E<re.length;E++){let F=re[E],q=null;if(m!==null)q=m.getViewport(F);else{let X=u.getViewSubImage(d,F);q=X.viewport,E===0&&(e.setRenderTargetTextures(x,X.colorTexture,d.ignoreDepthValues?void 0:X.depthStencilTexture),e.setRenderTarget(x))}let D=k[E];D===void 0&&(D=new Jt,D.layers.enable(E),D.viewport=new Tt,k[E]=D),D.matrix.fromArray(F.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(F.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(q.x,q.y,q.width,q.height),E===0&&(L.matrix.copy(D.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),b===!0&&L.cameras.push(D)}}for(let re=0;re<y.length;re++){let b=v[re],E=y[re];b!==null&&E!==void 0&&E.update(b,G,c||a)}$&&$(z,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),f=null}),this.setAnimationLoop=function(z){$=z},this.dispose=function(){}}};function fx(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Xt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Xt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap){r.lightMap.value=s.lightMap;let o=n._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,r.lightMapTransform)}s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,o0(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(r,s):s.isMeshToonMaterial?(i(r,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(r,s)):s.isMeshPhongMaterial?(i(r,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(r,s)):s.isMeshStandardMaterial?(i(r,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(r,s),s.isMeshPhysicalMaterial&&function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Xt&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far}(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(r,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(r,s)):s.isPointsMaterial?function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function gx(n,e,t,i){let r={},s={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,d,m,f){let g=u.value,p=d+"_"+m;if(f[p]===void 0)return f[p]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let x=f[p];if(typeof g=="number"||typeof g=="boolean"){if(x!==g)return f[p]=g,!0}else if(x.equals(g)===!1)return x.copy(g),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=a.indexOf(d.__bindingPointIndex);a.splice(m,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let m=d.program;i.uniformBlockBinding(u,m)},update:function(u,d){let m=r[u.id];m===void 0&&(function(p){let x=p.uniforms,y=0,v=16;for(let C=0,S=x.length;C<S;C++){let T=Array.isArray(x[C])?x[C]:[x[C]];for(let k=0,L=T.length;k<L;k++){let A=T[k],O=Array.isArray(A.value)?A.value:[A.value];for(let _=0,P=O.length;_<P;_++){let U=c(O[_]),H=y%v;H!==0&&v-H<U.boundary&&(y+=v-H),A.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=y,y+=U.storage}}}let M=y%v;M>0&&(y+=v-M),p.__size=y,p.__cache={}}(u),m=function(p){let x=function(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();p.__bindingPointIndex=x;let y=n.createBuffer(),v=p.__size,M=p.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,v,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}(u),r[u.id]=m,u.addEventListener("dispose",h));let f=d.program;i.updateUBOMapping(u,f);let g=e.render.frame;s[u.id]!==g&&(function(p){let x=r[p.id],y=p.uniforms,v=p.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let M=0,C=y.length;M<C;M++){let S=Array.isArray(y[M])?y[M]:[y[M]];for(let T=0,k=S.length;T<k;T++){let L=S[T];if(l(L,M,T,v)===!0){let A=L.__offset,O=Array.isArray(L.value)?L.value:[L.value],_=0;for(let P=0;P<O.length;P++){let U=O[P],H=c(U);typeof U=="number"||typeof U=="boolean"?(L.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,A+_,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=0,L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=0,L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=0):(U.toArray(L.__data,_),_+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,A,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}(u),s[u.id]=g)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);a=[],r={},s={}}}}var Ja=class{constructor(e={}){let{canvas:t=wy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=i!==null?i.getContextAttributes().alpha:a;let m=new Uint32Array(4),f=new Int32Array(4),g=null,p=null,x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=or,this.toneMappingExposure=1;let v=this,M=!1,C=0,S=0,T=null,k=-1,L=null,A=new Tt,O=new Tt,_=null,P=new be(0),U=0,H=t.width,Z=t.height,Y=1,$=null,j=null,z=new Tt(0,0,H,Z),G=new Tt(0,0,H,Z),re=!1,b=new ra,E=!1,F=!1,q=null,D=new Le,X=new he,N=new R,B={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function V(){return T===null?Y:1}let ee,ie,w,ae,J,Q,le,pe,ye,ve,Pe,xe,Ee,Oe,It,Se,Ze,$e,_o,as,Eo,_n,ln,os,ne=i;function Mo(I,te){for(let se=0;se<I.length;se++){let ce=I[se],oe=t.getContext(ce,te);if(oe!==null)return oe}return null}try{let I={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gu}`),t.addEventListener("webglcontextlost",ap,!1),t.addEventListener("webglcontextrestored",op,!1),t.addEventListener("webglcontextcreationerror",lp,!1),ne===null){let te=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&te.shift(),ne=Mo(te,I),ne===null)throw Mo(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&ne instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ne.getShaderPrecisionFormat===void 0&&(ne.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}function da(){ee=new Jy(ne),ie=new Xy(ne,ee,e),ee.init(ie),_n=new px(ne,ee,ie),w=new ux(ne,ee,ie),ae=new ev(ne),J=new nx,Q=new dx(ne,ee,w,J,ie,_n,ae),le=new Yy(v),pe=new Zy(v),ye=new Vy(ne,ie),ln=new $y(ne,ee,ye,ie),ve=new Ky(ne,ye,ae,ln),Pe=new rv(ne,ve,ye,ae),_o=new iv(ne,ie,Q),Se=new jy(J),xe=new tx(v,le,pe,ee,ie,ln,Se),Ee=new fx(v,J),Oe=new rx,It=new cx(ee,ie),$e=new Wy(v,le,pe,w,Pe,d,l),Ze=new hx(v,Pe,ie),os=new gx(ne,ae,ie,w),as=new qy(ne,ee,ae,ie),Eo=new Qy(ne,ee,ae,ie),ae.programs=xe.programs,v.capabilities=ie,v.extensions=ee,v.properties=J,v.renderLists=Oe,v.shadowMap=Ze,v.state=w,v.info=ae}da();let Gt=new zu(v,ne);function ap(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function op(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let I=ae.autoReset,te=Ze.enabled,se=Ze.autoUpdate,ce=Ze.needsUpdate,oe=Ze.type;da(),ae.autoReset=I,Ze.enabled=te,Ze.autoUpdate=se,Ze.needsUpdate=ce,Ze.type=oe}function lp(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function cp(I){let te=I.target;te.removeEventListener("dispose",cp),function(se){(function(ce){let oe=J.get(ce).programs;oe!==void 0&&(oe.forEach(function(fe){xe.releaseProgram(fe)}),ce.isShaderMaterial&&xe.releaseShaderCache(ce))})(se),J.remove(se)}(te)}function hp(I,te,se){I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=Xt,I.needsUpdate=!0,So(I,te,se),I.side=cr,I.needsUpdate=!0,So(I,te,se),I.side=2):So(I,te,se)}this.xr=Gt,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){let I=ee.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ee.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(I){I!==void 0&&(Y=I,this.setSize(H,Z,!1))},this.getSize=function(I){return I.set(H,Z)},this.setSize=function(I,te,se=!0){Gt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(H=I,Z=te,t.width=Math.floor(I*Y),t.height=Math.floor(te*Y),se===!0&&(t.style.width=I+"px",t.style.height=te+"px"),this.setViewport(0,0,I,te))},this.getDrawingBufferSize=function(I){return I.set(H*Y,Z*Y).floor()},this.setDrawingBufferSize=function(I,te,se){H=I,Z=te,Y=se,t.width=Math.floor(I*se),t.height=Math.floor(te*se),this.setViewport(0,0,I,te)},this.getCurrentViewport=function(I){return I.copy(A)},this.getViewport=function(I){return I.copy(z)},this.setViewport=function(I,te,se,ce){I.isVector4?z.set(I.x,I.y,I.z,I.w):z.set(I,te,se,ce),w.viewport(A.copy(z).multiplyScalar(Y).floor())},this.getScissor=function(I){return I.copy(G)},this.setScissor=function(I,te,se,ce){I.isVector4?G.set(I.x,I.y,I.z,I.w):G.set(I,te,se,ce),w.scissor(O.copy(G).multiplyScalar(Y).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(I){w.setScissorTest(re=I)},this.setOpaqueSort=function(I){$=I},this.setTransparentSort=function(I){j=I},this.getClearColor=function(I){return I.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(I=!0,te=!0,se=!0){let ce=0;if(I){let oe=!1;if(T!==null){let fe=T.texture.format;oe=fe===n0||fe===t0||fe===e0}if(oe){let fe=T.texture.type,Ae=fe===Hr||fe===rr||fe===yd||fe===Gr||fe===Kf||fe===Qf,Ce=$e.getClearColor(),He=$e.getClearAlpha(),Ve=Ce.r,qe=Ce.g,je=Ce.b;Ae?(m[0]=Ve,m[1]=qe,m[2]=je,m[3]=He,ne.clearBufferuiv(ne.COLOR,0,m)):(f[0]=Ve,f[1]=qe,f[2]=je,f[3]=He,ne.clearBufferiv(ne.COLOR,0,f))}else ce|=ne.COLOR_BUFFER_BIT}te&&(ce|=ne.DEPTH_BUFFER_BIT),se&&(ce|=ne.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ap,!1),t.removeEventListener("webglcontextrestored",op,!1),t.removeEventListener("webglcontextcreationerror",lp,!1),Oe.dispose(),It.dispose(),J.dispose(),le.dispose(),pe.dispose(),Pe.dispose(),ln.dispose(),os.dispose(),xe.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",up),Gt.removeEventListener("sessionend",dp),q&&(q.dispose(),q=null),fr.stop()},this.renderBufferDirect=function(I,te,se,ce,oe,fe){te===null&&(te=B);let Ae=oe.isMesh&&oe.matrixWorld.determinant()<0,Ce=function(Ct,En,Qt,Ye,Je){En.isScene!==!0&&(En=B),Q.resetTextureUnits();let pa=En.fog,Wc=Ye.isMeshStandardMaterial?En.environment:null,vg=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Di,wo=(Ye.isMeshStandardMaterial?pe:le).get(Ye.envMap||Wc),xg=Ye.vertexColors===!0&&!!Qt.attributes.color&&Qt.attributes.color.itemSize===4,_g=!!Qt.attributes.tangent&&(!!Ye.normalMap||Ye.anisotropy>0),Eg=!!Qt.morphAttributes.position,Mg=!!Qt.morphAttributes.normal,bg=!!Qt.morphAttributes.color,vp=or;Ye.toneMapped&&(T!==null&&T.isXRRenderTarget!==!0||(vp=v.toneMapping));let xp=Qt.morphAttributes.position||Qt.morphAttributes.normal||Qt.morphAttributes.color,Sg=xp!==void 0?xp.length:0,Qe=J.get(Ye),wg=p.state.lights;if(E===!0&&(F===!0||Ct!==L)){let Mn=Ct===L&&Ye.id===k;Se.setState(Ye,Ct,Mn)}let Bn=!1;Ye.version===Qe.__version?Qe.needsLights&&Qe.lightsStateVersion!==wg.state.version||Qe.outputColorSpace!==vg||Je.isBatchedMesh&&Qe.batching===!1?Bn=!0:Je.isBatchedMesh||Qe.batching!==!0?Je.isInstancedMesh&&Qe.instancing===!1?Bn=!0:Je.isInstancedMesh||Qe.instancing!==!0?Je.isSkinnedMesh&&Qe.skinning===!1?Bn=!0:Je.isSkinnedMesh||Qe.skinning!==!0?Je.isInstancedMesh&&Qe.instancingColor===!0&&Je.instanceColor===null||Je.isInstancedMesh&&Qe.instancingColor===!1&&Je.instanceColor!==null||Qe.envMap!==wo||Ye.fog===!0&&Qe.fog!==pa?Bn=!0:Qe.numClippingPlanes===void 0||Qe.numClippingPlanes===Se.numPlanes&&Qe.numIntersection===Se.numIntersection?(Qe.vertexAlphas!==xg||Qe.vertexTangents!==_g||Qe.morphTargets!==Eg||Qe.morphNormals!==Mg||Qe.morphColors!==bg||Qe.toneMapping!==vp||ie.isWebGL2===!0&&Qe.morphTargetsCount!==Sg)&&(Bn=!0):Bn=!0:Bn=!0:Bn=!0:Bn=!0:(Bn=!0,Qe.__version=Ye.version);let yr=Qe.currentProgram;Bn===!0&&(yr=So(Ye,En,Je));let _p=!1,ma=!1,$c=!1,Vt=yr.getUniforms(),vr=Qe.uniforms;if(w.useProgram(yr.program)&&(_p=!0,ma=!0,$c=!0),Ye.id!==k&&(k=Ye.id,ma=!0),_p||L!==Ct){Vt.setValue(ne,"projectionMatrix",Ct.projectionMatrix),Vt.setValue(ne,"viewMatrix",Ct.matrixWorldInverse);let Mn=Vt.map.cameraPosition;Mn!==void 0&&Mn.setValue(ne,N.setFromMatrixPosition(Ct.matrixWorld)),ie.logarithmicDepthBuffer&&Vt.setValue(ne,"logDepthBufFC",2/(Math.log(Ct.far+1)/Math.LN2)),(Ye.isMeshPhongMaterial||Ye.isMeshToonMaterial||Ye.isMeshLambertMaterial||Ye.isMeshBasicMaterial||Ye.isMeshStandardMaterial||Ye.isShaderMaterial)&&Vt.setValue(ne,"isOrthographic",Ct.isOrthographicCamera===!0),L!==Ct&&(L=Ct,ma=!0,$c=!0)}if(Je.isSkinnedMesh){Vt.setOptional(ne,Je,"bindMatrix"),Vt.setOptional(ne,Je,"bindMatrixInverse");let Mn=Je.skeleton;Mn&&(ie.floatVertexTextures?(Mn.boneTexture===null&&Mn.computeBoneTexture(),Vt.setValue(ne,"boneTexture",Mn.boneTexture,Q)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Je.isBatchedMesh&&(Vt.setOptional(ne,Je,"batchingTexture"),Vt.setValue(ne,"batchingTexture",Je._matricesTexture,Q));let qc=Qt.morphAttributes;(qc.position!==void 0||qc.normal!==void 0||qc.color!==void 0&&ie.isWebGL2===!0)&&_o.update(Je,Qt,yr),(ma||Qe.receiveShadow!==Je.receiveShadow)&&(Qe.receiveShadow=Je.receiveShadow,Vt.setValue(ne,"receiveShadow",Je.receiveShadow)),Ye.isMeshGouraudMaterial&&Ye.envMap!==null&&(vr.envMap.value=wo,vr.flipEnvMap.value=wo.isCubeTexture&&wo.isRenderTargetTexture===!1?-1:1),ma&&(Vt.setValue(ne,"toneMappingExposure",v.toneMappingExposure),Qe.needsLights&&(On=$c,(Qn=vr).ambientLightColor.needsUpdate=On,Qn.lightProbe.needsUpdate=On,Qn.directionalLights.needsUpdate=On,Qn.directionalLightShadows.needsUpdate=On,Qn.pointLights.needsUpdate=On,Qn.pointLightShadows.needsUpdate=On,Qn.spotLights.needsUpdate=On,Qn.spotLightShadows.needsUpdate=On,Qn.rectAreaLights.needsUpdate=On,Qn.hemisphereLights.needsUpdate=On),pa&&Ye.fog===!0&&Ee.refreshFogUniforms(vr,pa),Ee.refreshMaterialUniforms(vr,Ye,Y,Z,q),Js.upload(ne,gp(Qe),vr,Q));var Qn,On;if(Ye.isShaderMaterial&&Ye.uniformsNeedUpdate===!0&&(Js.upload(ne,gp(Qe),vr,Q),Ye.uniformsNeedUpdate=!1),Ye.isSpriteMaterial&&Vt.setValue(ne,"center",Je.center),Vt.setValue(ne,"modelViewMatrix",Je.modelViewMatrix),Vt.setValue(ne,"normalMatrix",Je.normalMatrix),Vt.setValue(ne,"modelMatrix",Je.matrixWorld),Ye.isShaderMaterial||Ye.isRawShaderMaterial){let Mn=Ye.uniformsGroups;for(let Xc=0,Tg=Mn.length;Xc<Tg;Xc++)if(ie.isWebGL2){let Ep=Mn[Xc];os.update(Ep,yr),os.bind(Ep,yr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yr}(I,te,se,ce,oe);w.setMaterial(ce,Ae);let He=se.index,Ve=1;if(ce.wireframe===!0){if(He=ve.getWireframeAttribute(se),He===void 0)return;Ve=2}let qe=se.drawRange,je=se.attributes.position,ft=qe.start*Ve,Nn=(qe.start+qe.count)*Ve;fe!==null&&(ft=Math.max(ft,fe.start*Ve),Nn=Math.min(Nn,(fe.start+fe.count)*Ve)),He!==null?(ft=Math.max(ft,0),Nn=Math.min(Nn,He.count)):je!=null&&(ft=Math.max(ft,0),Nn=Math.min(Nn,je.count));let yi=Nn-ft;if(yi<0||yi===1/0)return;let gr;ln.setup(oe,ce,Ce,se,He);let gt=as;if(He!==null&&(gr=ye.get(He),gt=Eo,gt.setIndex(gr)),oe.isMesh)ce.wireframe===!0?(w.setLineWidth(ce.wireframeLinewidth*V()),gt.setMode(ne.LINES)):gt.setMode(ne.TRIANGLES);else if(oe.isLine){let Ct=ce.linewidth;Ct===void 0&&(Ct=1),w.setLineWidth(Ct*V()),oe.isLineSegments?gt.setMode(ne.LINES):oe.isLineLoop?gt.setMode(ne.LINE_LOOP):gt.setMode(ne.LINE_STRIP)}else oe.isPoints?gt.setMode(ne.POINTS):oe.isSprite&&gt.setMode(ne.TRIANGLES);if(oe.isBatchedMesh)gt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else if(oe.isInstancedMesh)gt.renderInstances(ft,yi,oe.count);else if(se.isInstancedBufferGeometry){let Ct=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,En=Math.min(se.instanceCount,Ct);gt.renderInstances(ft,yi,En)}else gt.render(ft,yi)},this.compile=function(I,te,se=null){se===null&&(se=I),p=It.get(se),p.init(),y.push(p),se.traverseVisible(function(oe){oe.isLight&&oe.layers.test(te.layers)&&(p.pushLight(oe),oe.castShadow&&p.pushShadow(oe))}),I!==se&&I.traverseVisible(function(oe){oe.isLight&&oe.layers.test(te.layers)&&(p.pushLight(oe),oe.castShadow&&p.pushShadow(oe))}),p.setupLights(v._useLegacyLights);let ce=new Set;return I.traverse(function(oe){let fe=oe.material;if(fe)if(Array.isArray(fe))for(let Ae=0;Ae<fe.length;Ae++){let Ce=fe[Ae];hp(Ce,se,oe),ce.add(Ce)}else hp(fe,se,oe),ce.add(fe)}),y.pop(),p=null,ce},this.compileAsync=function(I,te,se=null){let ce=this.compile(I,te,se);return new Promise(oe=>{function fe(){ce.forEach(function(Ae){J.get(Ae).currentProgram.isReady()&&ce.delete(Ae)}),ce.size!==0?setTimeout(fe,10):oe(I)}ee.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Vc=null;function up(){fr.stop()}function dp(){fr.start()}let fr=new l0;function pp(I,te,se,ce){if(I.visible===!1)return;if(I.layers.test(te.layers)){if(I.isGroup)se=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(te);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||b.intersectsSprite(I)){ce&&N.setFromMatrixPosition(I.matrixWorld).applyMatrix4(D);let fe=Pe.update(I),Ae=I.material;Ae.visible&&g.push(I,fe,Ae,se,N.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||b.intersectsObject(I))){let fe=Pe.update(I),Ae=I.material;if(ce&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),N.copy(I.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),N.copy(fe.boundingSphere.center)),N.applyMatrix4(I.matrixWorld).applyMatrix4(D)),Array.isArray(Ae)){let Ce=fe.groups;for(let He=0,Ve=Ce.length;He<Ve;He++){let qe=Ce[He],je=Ae[qe.materialIndex];je&&je.visible&&g.push(I,fe,je,se,N.z,qe)}}else Ae.visible&&g.push(I,fe,Ae,se,N.z,null)}}let oe=I.children;for(let fe=0,Ae=oe.length;fe<Ae;fe++)pp(oe[fe],te,se,ce)}function mp(I,te,se,ce){let oe=I.opaque,fe=I.transmissive,Ae=I.transparent;p.setupLightsView(se),E===!0&&Se.setGlobalState(v.clippingPlanes,se),fe.length>0&&function(Ce,He,Ve,qe){if((Ve.isScene===!0?Ve.overrideMaterial:null)!==null)return;let ft=ie.isWebGL2;q===null&&(q=new Ui(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?ja:Hr,minFilter:Fl,samples:ft?4:0})),v.getDrawingBufferSize(X),ft?q.setSize(X.x,X.y):q.setSize(wu(X.x),wu(X.y));let Nn=v.getRenderTarget();v.setRenderTarget(q),v.getClearColor(P),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();let yi=v.toneMapping;v.toneMapping=or,bo(Ce,Ve,qe),Q.updateMultisampleRenderTarget(q),Q.updateRenderTargetMipmap(q);let gr=!1;for(let gt=0,Ct=He.length;gt<Ct;gt++){let En=He[gt],Qt=En.object,Ye=En.geometry,Je=En.material,pa=En.group;if(Je.side===2&&Qt.layers.test(qe.layers)){let Wc=Je.side;Je.side=Xt,Je.needsUpdate=!0,fp(Qt,Ve,qe,Ye,Je,pa),Je.side=Wc,Je.needsUpdate=!0,gr=!0}}gr===!0&&(Q.updateMultisampleRenderTarget(q),Q.updateRenderTargetMipmap(q)),v.setRenderTarget(Nn),v.setClearColor(P,U),v.toneMapping=yi}(oe,fe,te,se),ce&&w.viewport(A.copy(ce)),oe.length>0&&bo(oe,te,se),fe.length>0&&bo(fe,te,se),Ae.length>0&&bo(Ae,te,se),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function bo(I,te,se){let ce=te.isScene===!0?te.overrideMaterial:null;for(let oe=0,fe=I.length;oe<fe;oe++){let Ae=I[oe],Ce=Ae.object,He=Ae.geometry,Ve=ce===null?Ae.material:ce,qe=Ae.group;Ce.layers.test(se.layers)&&fp(Ce,te,se,He,Ve,qe)}}function fp(I,te,se,ce,oe,fe){I.onBeforeRender(v,te,se,ce,oe,fe),I.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),oe.onBeforeRender(v,te,se,ce,I,fe),oe.transparent===!0&&oe.side===2&&oe.forceSinglePass===!1?(oe.side=Xt,oe.needsUpdate=!0,v.renderBufferDirect(se,te,ce,oe,I,fe),oe.side=cr,oe.needsUpdate=!0,v.renderBufferDirect(se,te,ce,oe,I,fe),oe.side=2):v.renderBufferDirect(se,te,ce,oe,I,fe),I.onAfterRender(v,te,se,ce,oe,fe)}function So(I,te,se){te.isScene!==!0&&(te=B);let ce=J.get(I),oe=p.state.lights,fe=p.state.shadowsArray,Ae=oe.state.version,Ce=xe.getParameters(I,oe.state,fe,te,se),He=xe.getProgramCacheKey(Ce),Ve=ce.programs;ce.environment=I.isMeshStandardMaterial?te.environment:null,ce.fog=te.fog,ce.envMap=(I.isMeshStandardMaterial?pe:le).get(I.envMap||ce.environment),Ve===void 0&&(I.addEventListener("dispose",cp),Ve=new Map,ce.programs=Ve);let qe=Ve.get(He);if(qe!==void 0){if(ce.currentProgram===qe&&ce.lightsStateVersion===Ae)return yp(I,Ce),qe}else Ce.uniforms=xe.getUniforms(I),I.onBuild(se,Ce,v),I.onBeforeCompile(Ce,v),qe=xe.acquireProgram(Ce,He),Ve.set(He,qe),ce.uniforms=Ce.uniforms;let je=ce.uniforms;return(I.isShaderMaterial||I.isRawShaderMaterial)&&I.clipping!==!0||(je.clippingPlanes=Se.uniform),yp(I,Ce),ce.needsLights=function(ft){return ft.isMeshLambertMaterial||ft.isMeshToonMaterial||ft.isMeshPhongMaterial||ft.isMeshStandardMaterial||ft.isShadowMaterial||ft.isShaderMaterial&&ft.lights===!0}(I),ce.lightsStateVersion=Ae,ce.needsLights&&(je.ambientLightColor.value=oe.state.ambient,je.lightProbe.value=oe.state.probe,je.directionalLights.value=oe.state.directional,je.directionalLightShadows.value=oe.state.directionalShadow,je.spotLights.value=oe.state.spot,je.spotLightShadows.value=oe.state.spotShadow,je.rectAreaLights.value=oe.state.rectArea,je.ltc_1.value=oe.state.rectAreaLTC1,je.ltc_2.value=oe.state.rectAreaLTC2,je.pointLights.value=oe.state.point,je.pointLightShadows.value=oe.state.pointShadow,je.hemisphereLights.value=oe.state.hemi,je.directionalShadowMap.value=oe.state.directionalShadowMap,je.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,je.spotShadowMap.value=oe.state.spotShadowMap,je.spotLightMatrix.value=oe.state.spotLightMatrix,je.spotLightMap.value=oe.state.spotLightMap,je.pointShadowMap.value=oe.state.pointShadowMap,je.pointShadowMatrix.value=oe.state.pointShadowMatrix),ce.currentProgram=qe,ce.uniformsList=null,qe}function gp(I){if(I.uniformsList===null){let te=I.currentProgram.getUniforms();I.uniformsList=Js.seqWithValue(te.seq,I.uniforms)}return I.uniformsList}function yp(I,te){let se=J.get(I);se.outputColorSpace=te.outputColorSpace,se.batching=te.batching,se.instancing=te.instancing,se.instancingColor=te.instancingColor,se.skinning=te.skinning,se.morphTargets=te.morphTargets,se.morphNormals=te.morphNormals,se.morphColors=te.morphColors,se.morphTargetsCount=te.morphTargetsCount,se.numClippingPlanes=te.numClippingPlanes,se.numIntersection=te.numClipIntersection,se.vertexAlphas=te.vertexAlphas,se.vertexTangents=te.vertexTangents,se.toneMapping=te.toneMapping}fr.setAnimationLoop(function(I){Vc&&Vc(I)}),typeof self!="undefined"&&fr.setContext(self),this.setAnimationLoop=function(I){Vc=I,Gt.setAnimationLoop(I),I===null?fr.stop():fr.start()},Gt.addEventListener("sessionstart",up),Gt.addEventListener("sessionend",dp),this.render=function(I,te){if(te!==void 0&&te.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(te),te=Gt.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,te,T),p=It.get(I,y.length),p.init(),y.push(p),D.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),b.setFromProjectionMatrix(D),F=this.localClippingEnabled,E=Se.init(this.clippingPlanes,F),g=Oe.get(I,x.length),g.init(),x.push(g),pp(I,te,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort($,j),this.info.render.frame++,E===!0&&Se.beginShadows();let se=p.state.shadowsArray;if(Ze.render(se,I,te),E===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(g,I),p.setupLights(v._useLegacyLights),te.isArrayCamera){let ce=te.cameras;for(let oe=0,fe=ce.length;oe<fe;oe++){let Ae=ce[oe];mp(g,I,Ae,Ae.viewport)}}else mp(g,I,te);T!==null&&(Q.updateMultisampleRenderTarget(T),Q.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(v,I,te),ln.resetDefaultState(),k=-1,L=null,y.pop(),p=y.length>0?y[y.length-1]:null,x.pop(),g=x.length>0?x[x.length-1]:null},this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,te,se){J.get(I.texture).__webglTexture=te,J.get(I.depthTexture).__webglTexture=se;let ce=J.get(I);ce.__hasExternalTextures=!0,ce.__hasExternalTextures&&(ce.__autoAllocateDepthBuffer=se===void 0,ce.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,te){let se=J.get(I);se.__webglFramebuffer=te,se.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(I,te=0,se=0){T=I,C=te,S=se;let ce=!0,oe=null,fe=!1,Ae=!1;if(I){let Ce=J.get(I);Ce.__useDefaultFramebuffer!==void 0?(w.bindFramebuffer(ne.FRAMEBUFFER,null),ce=!1):Ce.__webglFramebuffer===void 0?Q.setupRenderTarget(I):Ce.__hasExternalTextures&&Q.rebindTextures(I,J.get(I.texture).__webglTexture,J.get(I.depthTexture).__webglTexture);let He=I.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);let Ve=J.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(oe=Array.isArray(Ve[te])?Ve[te][se]:Ve[te],fe=!0):oe=ie.isWebGL2&&I.samples>0&&Q.useMultisampledRTT(I)===!1?J.get(I).__webglMultisampledFramebuffer:Array.isArray(Ve)?Ve[se]:Ve,A.copy(I.viewport),O.copy(I.scissor),_=I.scissorTest}else A.copy(z).multiplyScalar(Y).floor(),O.copy(G).multiplyScalar(Y).floor(),_=re;if(w.bindFramebuffer(ne.FRAMEBUFFER,oe)&&ie.drawBuffers&&ce&&w.drawBuffers(I,oe),w.viewport(A),w.scissor(O),w.setScissorTest(_),fe){let Ce=J.get(I.texture);ne.framebufferTexture2D(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce.__webglTexture,se)}else if(Ae){let Ce=J.get(I.texture),He=te||0;ne.framebufferTextureLayer(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,Ce.__webglTexture,se||0,He)}k=-1},this.readRenderTargetPixels=function(I,te,se,ce,oe,fe,Ae){if(!I||!I.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=J.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce){w.bindFramebuffer(ne.FRAMEBUFFER,Ce);try{let He=I.texture,Ve=He.format,qe=He.type;if(Ve!==An&&_n.convert(Ve)!==ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let je=qe===ja&&(ee.has("EXT_color_buffer_half_float")||ie.isWebGL2&&ee.has("EXT_color_buffer_float"));if(!(qe===Hr||_n.convert(qe)===ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_TYPE)||qe===sr&&(ie.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float"))||je))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");te>=0&&te<=I.width-ce&&se>=0&&se<=I.height-oe&&ne.readPixels(te,se,ce,oe,_n.convert(Ve),_n.convert(qe),fe)}finally{let He=T!==null?J.get(T).__webglFramebuffer:null;w.bindFramebuffer(ne.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(I,te,se=0){let ce=Math.pow(2,-se),oe=Math.floor(te.image.width*ce),fe=Math.floor(te.image.height*ce);Q.setTexture2D(te,0),ne.copyTexSubImage2D(ne.TEXTURE_2D,se,0,0,I.x,I.y,oe,fe),w.unbindTexture()},this.copyTextureToTexture=function(I,te,se,ce=0){let oe=te.image.width,fe=te.image.height,Ae=_n.convert(se.format),Ce=_n.convert(se.type);Q.setTexture2D(se,0),ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,se.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,se.unpackAlignment),te.isDataTexture?ne.texSubImage2D(ne.TEXTURE_2D,ce,I.x,I.y,oe,fe,Ae,Ce,te.image.data):te.isCompressedTexture?ne.compressedTexSubImage2D(ne.TEXTURE_2D,ce,I.x,I.y,te.mipmaps[0].width,te.mipmaps[0].height,Ae,te.mipmaps[0].data):ne.texSubImage2D(ne.TEXTURE_2D,ce,I.x,I.y,Ae,Ce,te.image),ce===0&&se.generateMipmaps&&ne.generateMipmap(ne.TEXTURE_2D),w.unbindTexture()},this.copyTextureToTexture3D=function(I,te,se,ce,oe=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let fe=I.max.x-I.min.x+1,Ae=I.max.y-I.min.y+1,Ce=I.max.z-I.min.z+1,He=_n.convert(ce.format),Ve=_n.convert(ce.type),qe;if(ce.isData3DTexture)Q.setTexture3D(ce,0),qe=ne.TEXTURE_3D;else{if(!ce.isDataArrayTexture&&!ce.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");Q.setTexture2DArray(ce,0),qe=ne.TEXTURE_2D_ARRAY}ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,ce.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,ce.unpackAlignment);let je=ne.getParameter(ne.UNPACK_ROW_LENGTH),ft=ne.getParameter(ne.UNPACK_IMAGE_HEIGHT),Nn=ne.getParameter(ne.UNPACK_SKIP_PIXELS),yi=ne.getParameter(ne.UNPACK_SKIP_ROWS),gr=ne.getParameter(ne.UNPACK_SKIP_IMAGES),gt=se.isCompressedTexture?se.mipmaps[oe]:se.image;ne.pixelStorei(ne.UNPACK_ROW_LENGTH,gt.width),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,gt.height),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,I.min.x),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,I.min.y),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,I.min.z),se.isDataTexture||se.isData3DTexture?ne.texSubImage3D(qe,oe,te.x,te.y,te.z,fe,Ae,Ce,He,Ve,gt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ne.compressedTexSubImage3D(qe,oe,te.x,te.y,te.z,fe,Ae,Ce,He,gt.data)):ne.texSubImage3D(qe,oe,te.x,te.y,te.z,fe,Ae,Ce,He,Ve,gt),ne.pixelStorei(ne.UNPACK_ROW_LENGTH,je),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,ft),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,Nn),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,yi),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,gr),oe===0&&ce.generateMipmaps&&ne.generateMipmap(qe),w.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?Q.setTextureCube(I,0):I.isData3DTexture?Q.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Q.setTexture2DArray(I,0):Q.setTexture2D(I,0),w.unbindTexture()},this.resetState=function(){C=0,S=0,T=null,w.reset(),ln.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===vd?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===vc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?Wr:r0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wr?bt:Di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ku=class extends Ja{};ku.prototype.isWebGL1Renderer=!0;var Zl=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Jl=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Hu=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Yt=new R,Kl=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gn=class extends li{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ws,Oa=new R,$s=new R,qs=new R,Xs=new he,za=new he,m0=new Le,vl=new R,ka=new R,xl=new R,Lf=new he,lu=new he,Pf=new he,Cn=class extends Ut{constructor(e=new gn){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Hu(t,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new Kl(i,3,0,!1)),Ws.setAttribute("uv",new Kl(i,2,3,!1))}this.geometry=Ws,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),m0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-qs.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let a=this.center;_l(vl.set(-.5,-.5,0),qs,a,$s,r,s),_l(ka.set(.5,-.5,0),qs,a,$s,r,s),_l(xl.set(.5,.5,0),qs,a,$s,r,s),Lf.set(0,0),lu.set(1,0),Pf.set(1,1);let o=e.ray.intersectTriangle(vl,ka,xl,!1,Oa);if(o===null&&(_l(ka.set(-.5,.5,0),qs,a,$s,r,s),lu.set(0,1),o=e.ray.intersectTriangle(vl,xl,ka,!1,Oa),o===null))return;let l=e.ray.origin.distanceTo(Oa);l<e.near||l>e.far||t.push({distance:l,point:Oa.clone(),uv:ar.getInterpolation(Oa,vl,ka,xl,Lf,lu,Pf,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function _l(n,e,t,i,r,s){Xs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(za.x=s*Xs.x-r*Xs.y,za.y=r*Xs.x+s*Xs.y):za.copy(Xs),n.copy(e),n.x+=za.x,n.y+=za.y,n.applyMatrix4(m0)}var d1=new R,p1=new R;var m1=new R,f1=new Tt,g1=new Tt,y1=new R,v1=new Le,x1=new R,_1=new jn,E1=new Le,M1=new $r;var Ql=class extends fn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},b1=new Le,S1=new Le;var ec=class extends ut{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new Le,If=new Le,El=[],Ff=new Xn,yx=new Le,Ha=new ue,Ga=new jn,ci=class extends ue{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ec(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,yx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,js),Ff.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(Ff)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,js),Ga.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ha.geometry=this.geometry,Ha.material=this.material,Ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(i),e.ray.intersectsSphere(Ga)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,js),If.multiplyMatrices(i,js),Ha.matrixWorld=If,Ha.raycast(e,El);for(let a=0,o=El.length;a<o;a++){let l=El[a];l.instanceId=s,l.object=this,t.push(l)}El.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ec(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Gu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let s=i[this.index];r.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var w1=new Le,T1=new Le,A1=new Le,R1=new Le,C1=new ra,L1=new Xn,P1=new jn,I1=new R,F1=new Gu,D1=new ue;var Ka=class extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Df=new R,Uf=new R,Nf=new Le,cu=new $r,Ml=new jn,tc=class extends Ut{constructor(e=new nt,t=new Ka){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Df.fromBufferAttribute(t,r-1),Uf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Df.distanceTo(Uf);e.setAttribute("lineDistance",new Ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(r),Ml.radius+=s,e.ray.intersectsSphere(Ml)===!1)return;Nf.copy(r).invert(),cu.copy(e.ray).applyMatrix4(Nf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,h=new R,u=new R,d=new R,m=this.isLineSegments?2:1,f=i.index,g=i.attributes.position;if(f!==null)for(let p=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count)-1;p<x;p+=m){let y=f.getX(p),v=f.getX(p+1);if(c.fromBufferAttribute(g,y),h.fromBufferAttribute(g,v),cu.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}else for(let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count)-1;p<x;p+=m){if(c.fromBufferAttribute(g,p),h.fromBufferAttribute(g,p+1),cu.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},U1=new R,N1=new R;var ur=class extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bf=new Le,Vu=new $r,bl=new jn,Sl=new R,qr=class extends Ut{constructor(e=new nt,t=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(r),bl.radius+=s,e.ray.intersectsSphere(bl)===!1)return;Bf.copy(r).invert(),Vu.copy(e.ray).applyMatrix4(Bf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let m=c.getX(u);Sl.fromBufferAttribute(h,m),Of(Sl,m,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Sl.fromBufferAttribute(h,u),Of(Sl,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Of(n,e,t,i,r,s,a){let o=Vu.distanceSqToPoint(n);if(o<t){let l=new R;Vu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var nc=class extends fn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new he:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new R,r=[],s=[],a=[],o=new R,l=new Le;for(let m=0;m<=e;m++){let f=m/e;r[m]=this.getTangentAt(f,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Bt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,f))}a[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Bt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(r[f],m*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Qa=class extends Ln{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new he,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wu=class extends Qa{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function _d(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,m*=h,r(a,o,d,m)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var wl=new R,hu=new _d,uu=new _d,du=new _d,$u=class extends Ln{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(wl.subVectors(r[0],r[1]).add(r[0]),o=wl);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(wl.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=wl),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),m),g=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(l),m);g<1e-4&&(g=1),f<1e-4&&(f=g),p<1e-4&&(p=g),hu.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,g,p),uu.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,g,p),du.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,g,p)}else this.curveType==="catmullrom"&&(hu.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),uu.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),du.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(hu.calc(h),uu.calc(h),du.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zf(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function $a(n,e,t,i){return function(r,s){let a=1-r;return a*a*s}(n,e)+function(r,s){return 2*(1-r)*r*s}(n,t)+function(r,s){return r*r*s}(n,i)}function qa(n,e,t,i,r){return function(s,a){let o=1-s;return o*o*o*a}(n,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(n,t)+function(s,a){return 3*(1-s)*s*s*a}(n,i)+function(s,a){return s*s*s*a}(n,r)}var ic=class extends Ln{constructor(e=new he,t=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new he){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(qa(e,r.x,s.x,a.x,o.x),qa(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qu=class extends Ln{constructor(e=new R,t=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(qa(e,r.x,s.x,a.x,o.x),qa(e,r.y,s.y,a.y,o.y),qa(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rc=class extends Ln{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xu=class extends Ln{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sc=class extends Ln{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set($a(e,r.x,s.x,a.x),$a(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ac=class extends Ln{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set($a(e,r.x,s.x,a.x),$a(e,r.y,s.y,a.y),$a(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oc=class extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(zf(o,l.x,c.x,h.x,u.x),zf(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new he().fromArray(r))}return this}},lc=Object.freeze({__proto__:null,ArcCurve:Wu,CatmullRomCurve3:$u,CubicBezierCurve:ic,CubicBezierCurve3:qu,EllipseCurve:Qa,LineCurve:rc,LineCurve3:Xu,QuadraticBezierCurve:sc,QuadraticBezierCurve3:ac,SplineCurve:oc}),ju=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new lc[r.type]().fromJSON(r))}return this}},eo=class extends ju{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new rc(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new sc(this.currentPoint.clone(),new he(e,t),new he(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new ic(this.currentPoint.clone(),new he(e,t),new he(i,r),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new oc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new Qa(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},cc=class n extends nt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Bt(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new R,d=new he,m=new R,f=new R,g=new R,p=0,x=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,x=e[y+1].y-e[y].y,m.x=1*x,m.y=-p,m.z=0*x,g.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:p=e[y+1].x-e[y].x,x=e[y+1].y-e[y].y,m.x=1*x,m.y=-p,m.z=0*x,f.copy(m),m.x+=g.x,m.y+=g.y,m.z+=g.z,m.normalize(),l.push(m.x,m.y,m.z),g.copy(f)}for(let y=0;y<=t;y++){let v=i+y*h*r,M=Math.sin(v),C=Math.cos(v);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*M,u.y=e[S].y,u.z=e[S].x*C,a.push(u.x,u.y,u.z),d.x=y/t,d.y=S/(e.length-1),o.push(d.x,d.y);let T=l[3*S+0]*M,k=l[3*S+1],L=l[3*S+0]*C;c.push(T,k,L)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let M=v+y*e.length,C=M,S=M+e.length,T=M+e.length+1,k=M+1;s.push(C,S,k),s.push(T,k,S)}this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Xr=class n extends cc{constructor(e=1,t=1,i=4,r=8){let s=new eo;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Pn=class n extends nt{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new R,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let m=i+u/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(o,3)),this.setAttribute("uv",new Ie(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Te=class n extends nt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],m=[],f=0,g=[],p=i/2,x=0;function y(v){let M=f,C=new he,S=new R,T=0,k=v===!0?e:t,L=v===!0?1:-1;for(let O=1;O<=r;O++)u.push(0,p*L,0),d.push(0,L,0),m.push(.5,.5),f++;let A=f;for(let O=0;O<=r;O++){let _=O/r*l+o,P=Math.cos(_),U=Math.sin(_);S.x=k*U,S.y=p*L,S.z=k*P,u.push(S.x,S.y,S.z),d.push(0,L,0),C.x=.5*P+.5,C.y=.5*U*L+.5,m.push(C.x,C.y),f++}for(let O=0;O<r;O++){let _=M+O,P=A+O;v===!0?h.push(P,P+1,_):h.push(P+1,P,_),T+=3}c.addGroup(x,T,v===!0?1:2),x+=T}(function(){let v=new R,M=new R,C=0,S=(t-e)/i;for(let T=0;T<=s;T++){let k=[],L=T/s,A=L*(t-e)+e;for(let O=0;O<=r;O++){let _=O/r,P=_*l+o,U=Math.sin(P),H=Math.cos(P);M.x=A*U,M.y=-L*i+p,M.z=A*H,u.push(M.x,M.y,M.z),v.set(U,S,H).normalize(),d.push(v.x,v.y,v.z),m.push(_,1-L),k.push(f++)}g.push(k)}for(let T=0;T<r;T++)for(let k=0;k<s;k++){let L=g[k][T],A=g[k+1][T],O=g[k+1][T+1],_=g[k][T+1];h.push(L,A,_),h.push(A,O,_),C+=6}c.addGroup(x,C,0),x+=C})(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yn=class n extends Te{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jr=class n extends nt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(d,m,f,g){let p=g+1,x=[];for(let y=0;y<=p;y++){x[y]=[];let v=d.clone().lerp(f,y/p),M=m.clone().lerp(f,y/p),C=p-y;for(let S=0;S<=C;S++)x[y][S]=S===0&&y===p?v:v.clone().lerp(M,S/C)}for(let y=0;y<p;y++)for(let v=0;v<2*(p-y)-1;v++){let M=Math.floor(v/2);v%2==0?(l(x[y][M+1]),l(x[y+1][M]),l(x[y][M])):(l(x[y][M+1]),l(x[y+1][M+1]),l(x[y+1][M]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,m){let f=3*d;m.x=e[f+0],m.y=e[f+1],m.z=e[f+2]}function h(d,m,f,g){g<0&&d.x===1&&(a[m]=d.x-1),f.x===0&&f.z===0&&(a[m]=g/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let m=new R,f=new R,g=new R;for(let p=0;p<t.length;p+=3)c(t[p+0],m),c(t[p+1],f),c(t[p+2],g),o(m,f,g,d)})(r),function(d){let m=new R;for(let f=0;f<s.length;f+=3)m.x=s[f+0],m.y=s[f+1],m.z=s[f+2],m.normalize().multiplyScalar(d),s[f+0]=m.x,s[f+1]=m.y,s[f+2]=m.z}(i),function(){let d=new R;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let g=u(d)/2/Math.PI+.5,p=(m=d,Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))/Math.PI+.5);a.push(g,1-p)}var m;(function(){let f=new R,g=new R,p=new R,x=new R,y=new he,v=new he,M=new he;for(let C=0,S=0;C<s.length;C+=9,S+=6){f.set(s[C+0],s[C+1],s[C+2]),g.set(s[C+3],s[C+4],s[C+5]),p.set(s[C+6],s[C+7],s[C+8]),y.set(a[S+0],a[S+1]),v.set(a[S+2],a[S+3]),M.set(a[S+4],a[S+5]),x.copy(f).add(g).add(p).divideScalar(3);let T=u(x);h(y,S+0,f,T),h(v,S+2,g,T),h(M,S+4,p,T)}})(),function(){for(let f=0;f<a.length;f+=6){let g=a[f+0],p=a[f+2],x=a[f+4],y=Math.max(g,p,x),v=Math.min(g,p,x);y>.9&&v<.1&&(g<.2&&(a[f+0]+=1),p<.2&&(a[f+2]+=1),x<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new Ie(s,3)),this.setAttribute("normal",new Ie(s.slice(),3)),this.setAttribute("uv",new Ie(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Yu=class n extends jr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Tl=new R,Al=new R,pu=new R,Rl=new ar,Zu=class extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Il*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:g,b:p,c:x}=Rl;if(g.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),x.fromBufferAttribute(o,c[2]),Rl.getNormal(pu),u[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,u[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let y=0;y<3;y++){let v=(y+1)%3,M=u[y],C=u[v],S=Rl[h[y]],T=Rl[h[v]],k=`${M}_${C}`,L=`${C}_${M}`;L in d&&d[L]?(pu.dot(d[L].normal)<=s&&(m.push(S.x,S.y,S.z),m.push(T.x,T.y,T.z)),d[L]=null):k in d||(d[k]={index0:c[y],index1:c[v],normal:pu.clone()})}}for(let f in d)if(d[f]){let{index0:g,index1:p}=d[f];Tl.fromBufferAttribute(o,g),Al.fromBufferAttribute(o,p),m.push(Tl.x,Tl.y,Tl.z),m.push(Al.x,Al.y,Al.z)}this.setAttribute("position",new Ie(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},hi=class extends eo{constructor(e){super(e),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new eo().fromJSON(r))}return this}},vx=function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=kf(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,m;if(i&&(s=function(f,g,p,x){let y=[],v,M,C,S,T;for(v=0,M=g.length;v<M;v++)C=g[v]*x,S=v<M-1?g[v+1]*x:f.length,T=kf(f,C,S,x,!1),T===T.next&&(T.steiner=!0),y.push(Tx(T));for(y.sort(bx),v=0;v<y.length;v++)p=Sx(y[v],p);return p}(n,e,s,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let f=t;f<r;f+=t)u=n[f],d=n[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return to(s,a,t,o,l,m,0),a};function kf(n,e,t,i,r){let s,a;if(r===function(o,l,c,h){let u=0;for(let d=l,m=c-h;d<c;d+=h)u+=(o[m]-o[d])*(o[d+1]+o[m+1]),m=d;return u}(n,e,t,i)>0)for(s=e;s<t;s+=i)a=Hf(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=Hf(s,n[s],n[s+1],a);return a&&_c(a,a.next)&&(io(a),a=a.next),a}function Yr(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!_c(i,i.next)&&vt(i.prev,i,i.next)!==0)i=i.next;else{if(io(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function to(n,e,t,i,r,s,a){if(!n)return;!a&&s&&function(h,u,d,m){let f=h;do f.z===0&&(f.z=Ju(f.x,f.y,u,d,m)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(g){let p,x,y,v,M,C,S,T,k=1;do{for(x=g,g=null,M=null,C=0;x;){for(C++,y=x,S=0,p=0;p<k&&(S++,y=y.nextZ,y);p++);for(T=k;S>0||T>0&&y;)S!==0&&(T===0||!y||x.z<=y.z)?(v=x,x=x.nextZ,S--):(v=y,y=y.nextZ,T--),M?M.nextZ=v:g=v,v.prevZ=M,M=v;x=y}M.nextZ=null,k*=2}while(C>1)}(f)}(n,i,r,s);let o,l,c=n;for(;n.prev!==n.next;)if(o=n.prev,l=n.next,s?_x(n,i,r,s):xx(n))e.push(o.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),io(n),n=l.next,c=l.next;else if((n=l)===c){a?a===1?to(n=Ex(Yr(n),e,t),e,t,i,r,s,2):a===2&&Mx(n,e,t,i,r,s):to(Yr(n),e,t,i,r,s,1);break}}function xx(n){let e=n.prev,t=n,i=n.next;if(vt(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c,f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=m&&Ys(r,o,s,l,a,c,f.x,f.y)&&vt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function _x(n,e,t,i){let r=n.prev,s=n,a=n.next;if(vt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,m=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,g=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,x=Ju(m,f,e,t,i),y=Ju(g,p,e,t,i),v=n.prevZ,M=n.nextZ;for(;v&&v.z>=x&&M&&M.z<=y;){if(v.x>=m&&v.x<=g&&v.y>=f&&v.y<=p&&v!==r&&v!==a&&Ys(o,h,l,u,c,d,v.x,v.y)&&vt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=m&&M.x<=g&&M.y>=f&&M.y<=p&&M!==r&&M!==a&&Ys(o,h,l,u,c,d,M.x,M.y)&&vt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=x;){if(v.x>=m&&v.x<=g&&v.y>=f&&v.y<=p&&v!==r&&v!==a&&Ys(o,h,l,u,c,d,v.x,v.y)&&vt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=y;){if(M.x>=m&&M.x<=g&&M.y>=f&&M.y<=p&&M!==r&&M!==a&&Ys(o,h,l,u,c,d,M.x,M.y)&&vt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Ex(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!_c(r,s)&&f0(r,i,i.next,s)&&no(r,s)&&no(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),io(i),io(i.next),i=n=s),i=i.next}while(i!==n);return Yr(i)}function Mx(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ax(a,o)){let l=g0(a,o);return a=Yr(a,a.next),l=Yr(l,l.next),to(a,e,t,i,r,s,0),void to(l,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function bx(n,e){return n.x-e.x}function Sx(n,e){let t=function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let p=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(p<=c&&p>l&&(l=p,a=o.x<o.next.x?o:o.next,p===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,m=a.y,f,g=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&Ys(h<m?c:l,h,d,m,h<m?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),no(o,r)&&(f<g||f===g&&(o.x>a.x||o.x===a.x&&wx(a,o)))&&(a=o,g=f)),o=o.next;while(o!==u);return a}(n,e);if(!t)return e;let i=g0(t,n);return Yr(i,i.next),Yr(t,t.next)}function wx(n,e){return vt(n.prev,n,e.prev)<0&&vt(e.next,n,n.next)<0}function Ju(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Tx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ys(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Ax(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&f0(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1}(n,e)&&(no(n,e)&&no(e,n)&&function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s}(n,e)&&(vt(n.prev,n,e.prev)||vt(n,e.prev,e))||_c(n,e)&&vt(n.prev,n,n.next)>0&&vt(e.prev,e,e.next)>0)}function vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function _c(n,e){return n.x===e.x&&n.y===e.y}function f0(n,e,t,i){let r=Ll(vt(n,e,t)),s=Ll(vt(n,e,i)),a=Ll(vt(t,i,n)),o=Ll(vt(t,i,e));return r!==s&&a!==o||!(r!==0||!Cl(n,t,e))||!(s!==0||!Cl(n,i,e))||!(a!==0||!Cl(t,n,i))||!(o!==0||!Cl(t,e,i))}function Cl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ll(n){return n>0?1:n<0?-1:0}function no(n,e){return vt(n.prev,n,n.next)<0?vt(n,e,n.next)>=0&&vt(n,n.prev,e)>=0:vt(n,e,n.prev)<0||vt(n,n.next,e)<0}function g0(n,e){let t=new Ku(n.i,n.x,n.y),i=new Ku(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Hf(n,e,t,i){let r=new Ku(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function io(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ku(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var lr=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Gf(e),Vf(i,e);let a=e.length;t.forEach(Gf);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Vf(i,t[l]);let o=vx(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Gf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Vf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ni=class n extends nt{constructor(e=new hi([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,m=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:m-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Rx,v,M,C,S,T,k=!1;x&&(v=x.getSpacedPoints(h),k=!0,d=!1,M=x.computeFrenetFrames(h,!1),C=new R,S=new R,T=new R),d||(p=0,m=0,f=0,g=0);let L=o.extractPoints(c),A=L.shape,O=L.holes;if(!lr.isClockWise(A)){A=A.reverse();for(let N=0,B=O.length;N<B;N++){let V=O[N];lr.isClockWise(V)&&(O[N]=V.reverse())}}let _=lr.triangulateShape(A,O),P=A;for(let N=0,B=O.length;N<B;N++){let V=O[N];A=A.concat(V)}function U(N,B,V){return B||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(B,V)}let H=A.length,Z=_.length;function Y(N,B,V){let ee,ie,w,ae=N.x-B.x,J=N.y-B.y,Q=V.x-N.x,le=V.y-N.y,pe=ae*ae+J*J,ye=ae*le-J*Q;if(Math.abs(ye)>Number.EPSILON){let ve=Math.sqrt(pe),Pe=Math.sqrt(Q*Q+le*le),xe=B.x-J/ve,Ee=B.y+ae/ve,Oe=((V.x-le/Pe-xe)*le-(V.y+Q/Pe-Ee)*Q)/(ae*le-J*Q);ee=xe+ae*Oe-N.x,ie=Ee+J*Oe-N.y;let It=ee*ee+ie*ie;if(It<=2)return new he(ee,ie);w=Math.sqrt(It/2)}else{let ve=!1;ae>Number.EPSILON?Q>Number.EPSILON&&(ve=!0):ae<-Number.EPSILON?Q<-Number.EPSILON&&(ve=!0):Math.sign(J)===Math.sign(le)&&(ve=!0),ve?(ee=-J,ie=ae,w=Math.sqrt(pe)):(ee=ae,ie=J,w=Math.sqrt(pe/2))}return new he(ee/w,ie/w)}let $=[];for(let N=0,B=P.length,V=B-1,ee=N+1;N<B;N++,V++,ee++)V===B&&(V=0),ee===B&&(ee=0),$[N]=Y(P[N],P[V],P[ee]);let j=[],z,G=$.concat();for(let N=0,B=O.length;N<B;N++){let V=O[N];z=[];for(let ee=0,ie=V.length,w=ie-1,ae=ee+1;ee<ie;ee++,w++,ae++)w===ie&&(w=0),ae===ie&&(ae=0),z[ee]=Y(V[ee],V[w],V[ae]);j.push(z),G=G.concat(z)}for(let N=0;N<p;N++){let B=N/p,V=m*Math.cos(B*Math.PI/2),ee=f*Math.sin(B*Math.PI/2)+g;for(let ie=0,w=P.length;ie<w;ie++){let ae=U(P[ie],$[ie],ee);E(ae.x,ae.y,-V)}for(let ie=0,w=O.length;ie<w;ie++){let ae=O[ie];z=j[ie];for(let J=0,Q=ae.length;J<Q;J++){let le=U(ae[J],z[J],ee);E(le.x,le.y,-V)}}}let re=f+g;for(let N=0;N<H;N++){let B=d?U(A[N],G[N],re):A[N];k?(S.copy(M.normals[0]).multiplyScalar(B.x),C.copy(M.binormals[0]).multiplyScalar(B.y),T.copy(v[0]).add(S).add(C),E(T.x,T.y,T.z)):E(B.x,B.y,0)}for(let N=1;N<=h;N++)for(let B=0;B<H;B++){let V=d?U(A[B],G[B],re):A[B];k?(S.copy(M.normals[N]).multiplyScalar(V.x),C.copy(M.binormals[N]).multiplyScalar(V.y),T.copy(v[N]).add(S).add(C),E(T.x,T.y,T.z)):E(V.x,V.y,u/h*N)}for(let N=p-1;N>=0;N--){let B=N/p,V=m*Math.cos(B*Math.PI/2),ee=f*Math.sin(B*Math.PI/2)+g;for(let ie=0,w=P.length;ie<w;ie++){let ae=U(P[ie],$[ie],ee);E(ae.x,ae.y,u+V)}for(let ie=0,w=O.length;ie<w;ie++){let ae=O[ie];z=j[ie];for(let J=0,Q=ae.length;J<Q;J++){let le=U(ae[J],z[J],ee);k?E(le.x,le.y+v[h-1].y,v[h-1].x+V):E(le.x,le.y,u+V)}}}function b(N,B){let V=N.length;for(;--V>=0;){let ee=V,ie=V-1;ie<0&&(ie=N.length-1);for(let w=0,ae=h+2*p;w<ae;w++){let J=H*w,Q=H*(w+1);q(B+ee+J,B+ie+J,B+ie+Q,B+ee+Q)}}}function E(N,B,V){l.push(N),l.push(B),l.push(V)}function F(N,B,V){D(N),D(B),D(V);let ee=r.length/3,ie=y.generateTopUV(i,r,ee-3,ee-2,ee-1);X(ie[0]),X(ie[1]),X(ie[2])}function q(N,B,V,ee){D(N),D(B),D(ee),D(B),D(V),D(ee);let ie=r.length/3,w=y.generateSideWallUV(i,r,ie-6,ie-3,ie-2,ie-1);X(w[0]),X(w[1]),X(w[3]),X(w[1]),X(w[2]),X(w[3])}function D(N){r.push(l[3*N+0]),r.push(l[3*N+1]),r.push(l[3*N+2])}function X(N){s.push(N.x),s.push(N.y)}(function(){let N=r.length/3;if(d){let B=0,V=H*B;for(let ee=0;ee<Z;ee++){let ie=_[ee];F(ie[2]+V,ie[1]+V,ie[0]+V)}B=h+2*p,V=H*B;for(let ee=0;ee<Z;ee++){let ie=_[ee];F(ie[0]+V,ie[1]+V,ie[2]+V)}}else{for(let B=0;B<Z;B++){let V=_[B];F(V[2],V[1],V[0])}for(let B=0;B<Z;B++){let V=_[B];F(V[0]+H*h,V[1]+H*h,V[2]+H*h)}}i.addGroup(N,r.length/3-N,0)})(),function(){let N=r.length/3,B=0;b(P,B),B+=P.length;for(let V=0,ee=O.length;V<ee;V++){let ie=O[V];b(ie,B),B+=ie.length}i.addGroup(N,r.length/3-N,1)}()}this.setAttribute("position",new Ie(r,3)),this.setAttribute("uv",new Ie(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new lc[r.type]().fromJSON(r)),new n(i,e.options)}},Rx={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new he(s,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],m=e[3*r+1],f=e[3*r+2],g=e[3*s],p=e[3*s+1],x=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-u),new he(d,1-f),new he(g,1-x)]:[new he(o,1-l),new he(h,1-u),new he(m,1-f),new he(p,1-x)]}},xt=class n extends jr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ro=class n extends jr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Zr=class n extends nt{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),m=new R,f=new he;for(let g=0;g<=r;g++){for(let p=0;p<=i;p++){let x=s+p/i*a;m.x=u*Math.cos(x),m.y=u*Math.sin(x),l.push(m.x,m.y,m.z),c.push(0,0,1),f.x=(m.x/t+1)/2,f.y=(m.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let g=0;g<r;g++){let p=g*(i+1);for(let x=0;x<i;x++){let y=x+p,v=y,M=y+i+1,C=y+i+2,S=y+1;o.push(v,M,S),o.push(M,C,S)}}this.setIndex(o),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Qu=class n extends nt{constructor(e=new hi([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),m=d.shape,f=d.holes;lr.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,x=f.length;p<x;p++){let y=f[p];lr.isClockWise(y)===!0&&(f[p]=y.reverse())}let g=lr.triangulateShape(m,f);for(let p=0,x=f.length;p<x;p++){let y=f[p];m=m.concat(y)}for(let p=0,x=m.length;p<x;p++){let y=m[p];r.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let p=0,x=g.length;p<x;p++){let y=g[p],v=y[0]+u,M=y[1]+u,C=y[2]+u;i.push(v,M,C),l+=3}}this.setIndex(i),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(s,3)),this.setAttribute("uv",new Ie(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},Be=class n extends nt{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,m=[],f=[],g=[],p=[];for(let x=0;x<=i;x++){let y=[],v=x/i,M=0;x===0&&a===0?M=.5/t:x===i&&l===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){let S=C/t;u.x=-e*Math.cos(r+S*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(r+S*s)*Math.sin(a+v*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),p.push(S+M,1-v),y.push(c++)}h.push(y)}for(let x=0;x<i;x++)for(let y=0;y<t;y++){let v=h[x][y+1],M=h[x][y],C=h[x+1][y],S=h[x+1][y+1];(x!==0||a>0)&&m.push(v,M,S),(x!==i-1||l<Math.PI)&&m.push(M,C,S)}this.setIndex(m),this.setAttribute("position",new Ie(f,3)),this.setAttribute("normal",new Ie(g,3)),this.setAttribute("uv",new Ie(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ed=class n extends jr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Bi=class n extends nt{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new R,u=new R,d=new R;for(let m=0;m<=i;m++)for(let f=0;f<=r;f++){let g=f/r*s,p=m/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(g),u.y=(e+t*Math.cos(p))*Math.sin(g),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let f=1;f<=r;f++){let g=(r+1)*m+f-1,p=(r+1)*(m-1)+f-1,x=(r+1)*(m-1)+f,y=(r+1)*m+f;a.push(g,p,y),a.push(p,x,y)}this.setIndex(a),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},td=class n extends nt{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new R,d=new R,m=new R,f=new R,g=new R,p=new R,x=new R;for(let v=0;v<=i;++v){let M=v/i*s*Math.PI*2;y(M,s,a,e,m),y(M+.01,s,a,e,f),p.subVectors(f,m),x.addVectors(f,m),g.crossVectors(p,x),x.crossVectors(g,p),g.normalize(),x.normalize();for(let C=0;C<=r;++C){let S=C/r*Math.PI*2,T=-t*Math.cos(S),k=t*Math.sin(S);u.x=m.x+(T*x.x+k*g.x),u.y=m.y+(T*x.y+k*g.y),u.z=m.z+(T*x.z+k*g.z),l.push(u.x,u.y,u.z),d.subVectors(u,m).normalize(),c.push(d.x,d.y,d.z),h.push(v/i),h.push(C/r)}}for(let v=1;v<=i;v++)for(let M=1;M<=r;M++){let C=(r+1)*(v-1)+(M-1),S=(r+1)*v+(M-1),T=(r+1)*v+M,k=(r+1)*(v-1)+M;o.push(C,S,k),o.push(S,T,k)}function y(v,M,C,S,T){let k=Math.cos(v),L=Math.sin(v),A=C/M*v,O=Math.cos(A);T.x=S*(2+O)*.5*k,T.y=S*(2+O)*L*.5,T.z=S*Math.sin(A)*.5}this.setIndex(o),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},nd=class n extends nt{constructor(e=new ac(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new he,h=new R,u=[],d=[],m=[],f=[];function g(p){h=e.getPointAt(p/t,h);let x=a.normals[p],y=a.binormals[p];for(let v=0;v<=r;v++){let M=v/r*Math.PI*2,C=Math.sin(M),S=-Math.cos(M);l.x=S*x.x+C*y.x,l.y=S*x.y+C*y.y,l.z=S*x.z+C*y.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let p=0;p<t;p++)g(p);g(s===!1?t:0),function(){for(let p=0;p<=t;p++)for(let x=0;x<=r;x++)c.x=p/t,c.y=x/r,m.push(c.x,c.y)}(),function(){for(let p=1;p<=t;p++)for(let x=1;x<=r;x++){let y=(r+1)*(p-1)+(x-1),v=(r+1)*p+(x-1),M=(r+1)*p+x,C=(r+1)*(p-1)+x;f.push(y,v,C),f.push(v,M,C)}}()})(),this.setIndex(f),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new lc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},id=class extends nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new R,s=new R;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let m=d,f=d+u.count;m<f;m+=3)for(let g=0;g<3;g++){let p=o.getX(m+g),x=o.getX(m+(g+1)%3);r.fromBufferAttribute(a,p),s.fromBufferAttribute(a,x),Wf(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Wf(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ie(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Wf(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var B1=Object.freeze({__proto__:null,BoxGeometry:me,CapsuleGeometry:Xr,CircleGeometry:Pn,ConeGeometry:yn,CylinderGeometry:Te,DodecahedronGeometry:Yu,EdgesGeometry:Zu,ExtrudeGeometry:Ni,IcosahedronGeometry:xt,LatheGeometry:cc,OctahedronGeometry:ro,PlaneGeometry:rt,PolyhedronGeometry:jr,RingGeometry:Zr,ShapeGeometry:Qu,SphereGeometry:Be,TetrahedronGeometry:ed,TorusGeometry:Bi,TorusKnotGeometry:td,TubeGeometry:nd,WireframeGeometry:id});var Ot=class extends li{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function Pl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Cx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var sa=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(e>=s)break e;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rd=class extends sa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hm,endingEnd:Hm}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gm:s=e,o=2*t-i;break;case Vm:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Gm:a=e,l=2*i-t;break;case Vm:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,f=(i-t)/(r-t),g=f*f,p=g*f,x=-d*p+2*d*g-d*f,y=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*f+1,v=(-1-m)*p+(1.5+m)*g+.5*f,M=m*p-m*g;for(let C=0;C!==o;++C)s[C]=x*a[h+C]+y*a[c+C]+v*a[l+C]+M*a[u+C];return s}},sd=class extends sa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},ad=class extends sa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pl(t,this.TimeBufferType),this.values=Pl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Pl(e.times,Array),values:Pl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ad(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Dl:t=this.InterpolantFactoryMethodDiscrete;break;case Ul:t=this.InterpolantFactoryMethodLinear;break;case Oh:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dl;case this.InterpolantFactoryMethodLinear:return Ul;case this.InterpolantFactoryMethodSmooth:return Oh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Cx(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Oh,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let m=0;m!==i;++m){let f=t[h+m];if(f!==t[u+m]||f!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};qn.prototype.TimeBufferType=Float32Array,qn.prototype.ValueBufferType=Float32Array,qn.prototype.DefaultInterpolation=Ul;var zr=class extends qn{};zr.prototype.ValueTypeName="bool",zr.prototype.ValueBufferType=Array,zr.prototype.DefaultInterpolation=Dl,zr.prototype.InterpolantFactoryMethodLinear=void 0,zr.prototype.InterpolantFactoryMethodSmooth=void 0;var od=class extends qn{};od.prototype.ValueTypeName="color";var ld=class extends qn{};ld.prototype.ValueTypeName="number";var cd=class extends sa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Rn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Xa=class extends qn{InterpolantFactoryMethodLinear(e){return new cd(this.times,this.values,this.getValueSize(),e)}};Xa.prototype.ValueTypeName="quaternion",Xa.prototype.DefaultInterpolation=Ul,Xa.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends qn{};kr.prototype.ValueTypeName="string",kr.prototype.ValueBufferType=Array,kr.prototype.DefaultInterpolation=Dl,kr.prototype.InterpolantFactoryMethodLinear=void 0,kr.prototype.InterpolantFactoryMethodSmooth=void 0;var hd=class extends qn{};hd.prototype.ValueTypeName="vector";var ud=class{constructor(e,t,i){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],f=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return f}return null}}},Lx=new ud,dd=class{constructor(e){this.manager=e!==void 0?e:Lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};dd.DEFAULT_MATERIAL_NAME="__DEFAULT";var hc=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},uc=class extends hc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},mu=new Le,$f=new R,qf=new R,pd=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;$f.setFromMatrixPosition(e.matrixWorld),t.position.copy($f),qf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qf),t.updateMatrixWorld(),mu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var O1=new Le,z1=new R,k1=new R;var md=class extends pd{constructor(){super(new Xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dc=class extends hc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new md}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var H1=new Le,G1=new Le,V1=new Le;var pc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Xf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Xf(){return(typeof performance=="undefined"?Date:performance).now()}var W1=new R,$1=new Rn,q1=new R,X1=new R;var j1=new R,Y1=new Rn,Z1=new R,J1=new R;var Ed="\\[\\]\\.:\\/",Px=new RegExp("["+Ed+"]","g"),fu="[^"+Ed+"]",Ix="[^"+Ed.replace("\\.","")+"]",Fx=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",fu)+/(WCOD+)?/.source.replace("WCOD",Ix)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu)+"$"),Dx=["material","materials","bones","map"],ht=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Px,"")}static parseTrackName(e){let t=Fx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Dx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=class{constructor(n,e,t){let i=t||ht.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray],ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K1=new Float32Array(1);var mc=class{constructor(e,t,i=0,r=1/0){this.ray=new $r(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return fd(e,this,i,t),i.sort(jf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)fd(e[r],this,i,t);return i.sort(jf),i}};function jf(n,e){return n.distance-e.distance}function fd(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let r=n.children;for(let s=0,a=r.length;s<a;s++)fd(r[s],e,t,!0)}}var Q1=new he;var eE=new R,tE=new R;var nE=new R;var iE=new R,rE=new Le,sE=new Le;var aE=new R,oE=new be,lE=new be;var cE=new R,hE=new R,uE=new R;var dE=new R,pE=new Za;var mE=new Xn;var fE=new R;typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gu}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gu);var ui=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),bd=(()=>{try{return matchMedia("(prefers-reduced-motion: reduce)").matches||localStorage.getItem("family-lite")==="1"}catch{return!1}})(),In=(()=>{let n=new Uint8Array([150,150,150,255,215,215,215,255,255,255,255,255]),e=new Ql(n,3,1,An);return e.minFilter=e.magFilter=Nt,e.needsUpdate=!0,e})(),Md=new Map;function dt(n,e={}){let t=n+JSON.stringify(e);if(!e.unique&&Md.has(t))return Md.get(t);let i=new Ot({color:n,gradientMap:In,...e});return delete i.unique,e.unique||Md.set(t,i),i}function K(n,e,t=0,i=0,r=0,s){let a=new ue(n,typeof e=="string"||typeof e=="number"?dt(e,s):e);return a.position.set(t,i,r),a.castShadow=!0,a.receiveShadow=!0,a}function zt(n,{w:e=512,h:t=256,bg:i="#FFF6E6",color:r="#4A3528",font:s="Jua",size:a=56,radius:o=40,border:l=null,sub:c=null,subSize:h=30}={}){let u=document.createElement("canvas");u.width=e,u.height=t;let d=u.getContext("2d");i&&(d.fillStyle=i,Zn(d,0,0,e,t,o),d.fill(),l&&(d.lineWidth=10,d.strokeStyle=l,Zn(d,5,5,e-10,t-10,o-4),d.stroke())),d.fillStyle=r,d.textAlign="center",d.textBaseline="middle";let m=Array.isArray(n)?n:[n],f=m.length*a*1.25+(c?h*1.5:0),g=t/2-f/2+a*.62;d.font=`${s==="Jua"?"":"700 "}${a}px "${s}", sans-serif`;for(let p of m)d.fillText(p,e/2,g),g+=a*1.25;return c&&(d.font=`${h}px "Gowun Dodum", sans-serif`,d.globalAlpha=.7,d.fillText(c,e/2,g+h*.2)),u}function Zn(n,e,t,i,r,s){n.beginPath(),n.moveTo(e+s,t),n.arcTo(e+i,t,e+i,t+r,s),n.arcTo(e+i,t+r,e,t+r,s),n.arcTo(e,t+r,e,t,s),n.arcTo(e,t,e+i,t,s),n.closePath()}function lt(n){let e=new nc(n);return e.colorSpace=bt,e.anisotropy=4,e}function dr(n,{scale:e=4.2,bg:t="rgba(255,248,236,.95)",color:i="#4A3528"}={}){let r=document.createElement("canvas");r.width=512,r.height=128;let s=r.getContext("2d"),a=56;for(s.font=`${a}px "Jua", sans-serif`;s.measureText(n).width>430&&a>32;)a-=2,s.font=`${a}px "Jua", sans-serif`;let o=Math.min(490,s.measureText(n).width+70);s.fillStyle=t,s.shadowColor="rgba(110,70,40,.28)",s.shadowBlur=12,s.shadowOffsetY=4,Zn(s,(512-o)/2,18,o,86,43),s.fill(),s.shadowColor="transparent",s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.fillText(n,256,63);let l=new Cn(new gn({map:lt(r),depthWrite:!1,transparent:!0}));return l.scale.set(e,e/4,1),l.renderOrder=10,l}var _e=(n,e)=>n+Math.random()*(e-n),Ux=(n,e,t)=>n+(e-n)*t,Oi=(n,e,t,i)=>Ux(n,e,1-Math.exp(-t*i)),so=(n,e,t)=>Math.max(e,Math.min(t,n));var Kr=["green","autumn","winter"],ao={green:{label:"\uBD04\xB7\uC5EC\uB984",emoji:"\u{1F33F}",theme:"#DDEFD0",toast:"\u{1F33F} \uC2F1\uADF8\uB7EC\uC6B4 \uBD04\xB7\uC5EC\uB984 \uC232\uC774\uC5D0\uC694"},autumn:{label:"\uAC00\uC744",emoji:"\u{1F342}",theme:"#F3DEC0",toast:"\u{1F342} \uB2E8\uD48D\uC774 \uB4E0 \uAC00\uC744 \uB9C8\uC744\uC774\uC5D0\uC694"},winter:{label:"\uACA8\uC6B8",emoji:"\u2744\uFE0F",theme:"#E4ECF4",toast:"\u2744\uFE0F \uB208 \uB0B4\uB9B0 \uACA8\uC6B8 \uB9C8\uC744\uC774\uC5D0\uC694"}},y0="family-season",Nx=()=>{let n=$i(ei()).getMonth()+1;return n>=9&&n<=11?"autumn":n===12||n<=2?"winter":"green"};function Bx(){var t;let n=location.hash;if(/(?:^|[#&])(autumn|fall)(?:&|$)/.test(n))return"autumn";if(/(?:^|[#&])winter(?:&|$)/.test(n))return"winter";if(/(?:^|[#&])(green|spring|summer)(?:&|$)/.test(n))return"green";try{let i=localStorage.getItem(y0);if(Kr.includes(i))return i}catch{}let e=String(((t=window.FAMILY)==null?void 0:t.season)||"green");return e==="auto"?Nx():Kr.includes(e)?e:"green"}var oa=Bx(),di=()=>oa;function Sd(){var e;let n=document.body;n&&Kr.forEach(t=>n.classList.toggle(`season-${t}`,t===oa)),(e=document.querySelector('meta[name="theme-color"]'))==null||e.setAttribute("content",ao[oa].theme)}Sd();document.body||addEventListener("DOMContentLoaded",Sd);function wd(n,{save:e=!0}={}){if(!Kr.includes(n))return oa;if(oa=n,e)try{localStorage.setItem(y0,n)}catch{}Sd();try{dispatchEvent(new CustomEvent("family:season",{detail:n}))}catch{}return n}var v0=()=>wd(Kr[(Kr.indexOf(oa)+1)%Kr.length]);var S0=[[0,34,0,10,3.2],[0,-2,0,-18,2.6],[5,1,20,-5.5,2.6],[-6,3,-12,2,2.4],[-6,0,-18,-10,2.4],[6,7,10,9,2.2],[-2,20,-10,19,2.2]],pi={x:0,z:4,r:7.5},lo={green:{day:{top:"#6FB7E8",mid:"#BFE3F7",horizon:"#EAF6E4",fog:"#E3F1DC",sun:"#FFF4DE",sunI:2.4,hemi:"#F4FBEF",ground:"#B9D8A0",hemiI:1.9,lamps:!1,stars:!1},dusk:{top:"#6A7FC4",mid:"#F6A77A",horizon:"#FFD39B",fog:"#F9D2A0",sun:"#FFB07A",sunI:2,hemi:"#FFD8B6",ground:"#A9B890",hemiI:1.6,lamps:!0,stars:!1},night:{top:"#0F1B3D",mid:"#24386A",horizon:"#3F5A78",fog:"#3D5674",sun:"#B8C8FF",sunI:1.1,hemi:"#8FA8D8",ground:"#3E5048",hemiI:1.25,lamps:!0,stars:!0}},autumn:{day:{top:"#78B4DC",mid:"#F3D9AE",horizon:"#FFCB8E",fog:"#F6D2A2",sun:"#FFD9A8",sunI:2.35,hemi:"#FFEBD2",ground:"#C7B27E",hemiI:1.85,lamps:!1,stars:!1},dusk:{top:"#5E6FB0",mid:"#F29A64",horizon:"#FFC27A",fog:"#F7B97E",sun:"#FFA066",sunI:2,hemi:"#FFCFA6",ground:"#A88E6E",hemiI:1.6,lamps:!0,stars:!1},night:{top:"#121B38",mid:"#2C3762",horizon:"#5B4766",fog:"#4E4462",sun:"#B8C4F0",sunI:1.05,hemi:"#8E9BCB",ground:"#3E4552",hemiI:1.2,lamps:!0,stars:!0}},winter:{day:{top:"#8FB4D8",mid:"#D8E6F2",horizon:"#F4F1EC",fog:"#E6EDF3",sun:"#FFF6EA",sunI:2.15,hemi:"#F2F6FA",ground:"#D9E2EA",hemiI:2,lamps:!1,stars:!1},dusk:{top:"#5A6AA8",mid:"#D99AA0",horizon:"#F2C7A8",fog:"#E5C8C2",sun:"#FFC6A0",sunI:1.9,hemi:"#EAD8E0",ground:"#B8B8C8",hemiI:1.65,lamps:!0,stars:!1},night:{top:"#0E1A36",mid:"#26365E",horizon:"#4A5A80",fog:"#46557A",sun:"#C8D6FF",sunI:1.15,hemi:"#9AAAD8",ground:"#5A6680",hemiI:1.4,lamps:!0,stars:!0}}},on=lo.green;function Ox(n,e,t,i,r,s){let a=r-t,o=s-i,l=Math.max(0,Math.min(1,((n-t)*a+(e-i)*o)/(a*a+o*o)));return Math.hypot(n-(t+a*l),e-(i+o*l))}function x0(n,e,t=.6){return Math.hypot(n-pi.x,e-pi.z)<pi.r+t?!0:S0.some(i=>Ox(n,e,i[0],i[1],i[2],i[3])<i[4]/2+t)}function zx(){let n=new Be(400,32,16),e=new Yn({side:Xt,depthWrite:!1,fog:!1,uniforms:{top:{value:new be(on.day.top)},mid:{value:new be(on.day.mid)},horizon:{value:new be(on.day.horizon)},sunDir:{value:new R(.5,.45,-.75).normalize()},sunK:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 top; uniform vec3 mid; uniform vec3 horizon; uniform vec3 sunDir; uniform float sunK; varying vec3 vDir;
      void main(){
        float h = clamp(vDir.y, -0.2, 1.0);
        vec3 c = mix(horizon, mid, smoothstep(-0.02, 0.18, h));
        c = mix(c, top, smoothstep(0.18, 0.75, h));
        float s = max(dot(normalize(vDir), sunDir), 0.0);
        c += (vec3(1.0, 0.86, 0.6) * pow(s, 40.0) * 0.55 + vec3(1.0, 0.95, 0.8) * pow(s, 400.0) * 1.2) * sunK;
        gl_FragColor = vec4(c, 1.0);
      }`}),t=new ue(n,e);t.renderOrder=-1;let i=320,r=new Float32Array(i*3);for(let o=0;o<i;o++){let l=_e(0,Math.PI*2),c=_e(.06,1),h=380,u=h*Math.sqrt(1-c*c);r.set([Math.cos(l)*u,h*c,Math.sin(l)*u],o*3)}let s=new nt;s.setAttribute("position",new ut(r,3));let a=new qr(s,new ur({color:"#FFF8D6",size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.9,depthWrite:!1}));return a.visible=!1,a.renderOrder=-1,t.add(a),t.userData.setPalette=o=>{e.uniforms.top.value.set(o.top),e.uniforms.mid.value.set(o.mid),e.uniforms.horizon.value.set(o.horizon),e.uniforms.sunK.value=o.stars?.15:1,a.visible=!!o.stars},t}var Fd=[];function w0(n){let e=new Ot({color:n[di()]||n.green,gradientMap:In});return Fd.push({mat:e,cols:n}),e}function Jn(n,...e){return Fd.push({obj:n,seasons:e}),n.userData.seasons=e,n.visible=e.includes(di()),n}function kx(n){Fd.forEach(e=>{e.mat?e.mat.color.set(e.cols[n]||e.cols.green):e.obj.visible=e.seasons.includes(n)})}var Qr=n=>n.map(e=>w0(e)),Td=["#F4F7FB","#E3EAF2","#FFFFFF"],Ad={maple:Qr([0,1,2].map(n=>({green:["#7DBB5E","#8FC970","#6EAD52"][n],autumn:["#D9553B","#E8763E","#C9452F"][n],winter:Td[n]}))),ginkgo:Qr([0,1,2].map(n=>({green:["#F7D3DC","#FBE4EA","#F2BFCD"][n],autumn:["#F2C14E","#F7D46A","#E3AE36"][n],winter:Td[(n+1)%3]}))),persimmon:Qr([0,1,2].map(n=>({green:["#6FA858","#82B868","#5F9A4C"][n],autumn:["#A9B55A","#C2BD5E","#97A64C"][n],winter:Td[(n+2)%3]}))),pine:Qr([0,1,2].map(n=>({green:["#3F6E45","#4C7D50","#386340"][n],autumn:["#4F7A4A","#5C8A52","#476F43"][n],winter:["#567F64","#EEF3F1","#6B8F78"][n]})))},Hx=Qr([0,1,2].map(n=>({green:["#8CC47A","#9ED08A","#7DB86C"][n],autumn:["#B98A3E","#C76B3C","#93A35A"][n],winter:["#E9EFF4","#DDE6EE","#F4F7FA"][n]}))),Gx=Qr([0,1,2,3].map(n=>({green:["#9CCB84","#AED596","#8FBF78","#A7CF8C"][n],autumn:["#B7AE66","#C79A55","#A9A55E","#C4884A"][n],winter:["#E8EEF3","#DCE4EC","#F2F5F8","#D5DEE8"][n]}))),Vx=Qr([0,1,2,3].map(n=>({green:["#F4B8C0","#FFFFFF","#F7D58B","#B9A4E8"][n],autumn:["#D9553B","#F2C14E","#E8763E","#B9773E"][n],winter:["#FFFFFF","#C94F4F","#E3EAF2","#9DB7D5"][n]}))),Dd=n=>Hx[n%3],wc=n=>Vx[n%4];function Ec(n,e,{shadows:t=!0}={}){let i=new Map;return e.forEach(r=>{r.updateMatrixWorld(!0),r.traverse(s=>{if(!s.isMesh)return;let a=null;for(let c=s;c;c=c.parent)if(c.userData.seasons){a=c.userData.seasons;break}let o=`${s.geometry.uuid}|${s.material.uuid}|${a||""}`,l=i.get(o);l||i.set(o,l={geo:s.geometry,mat:s.material,seasons:a,list:[]}),l.list.push(s.matrixWorld.clone())})}),i.forEach(r=>{let s=new ci(r.geo,r.mat,r.list.length);r.list.forEach((a,o)=>s.setMatrixAt(o,a)),s.castShadow=t&&!r.mat.isMeshBasicMaterial,s.receiveShadow=!r.mat.isMeshBasicMaterial,s.computeBoundingSphere(),n.add(r.seasons?Jn(s,...r.seasons):s)}),i.size}var Wx=new R,$x=new R,_0=new Ue;function Ud(n){n.updateMatrixWorld(!0);let e=new Le().copy(n.matrixWorld).invert(),t=new Map;n.traverse(r=>{var h;if(!r.isMesh||r.isInstancedMesh||Array.isArray(r.material))return;for(let u=r;u&&u!==n;u=u.parent)if(u.userData.dynamic)return;let s=r.geometry,a=s.attributes;if(!a.position||!a.normal||!a.uv||(h=s.morphAttributes)!=null&&h.position)return;let o=null;for(let u=r;u&&u!==n;u=u.parent)if(u.userData.seasons){o=u.userData.seasons;break}let l=`${r.material.uuid}|${o||""}`,c=t.get(l);c||t.set(l,c={mat:r.material,seasons:o,items:[],cast:!1,verts:0,idx:0}),c.items.push({o:r,g:s,m:new Le().multiplyMatrices(e,r.matrixWorld)}),c.cast=c.cast||r.castShadow,c.verts+=a.position.count,c.idx+=s.index?s.index.count:a.position.count});let i=0;return t.forEach(r=>{if(r.items.length<2)return;let s=new Float32Array(r.verts*3),a=new Float32Array(r.verts*3),o=new Float32Array(r.verts*2),l=new(r.verts>65535?Uint32Array:Uint16Array)(r.idx),c=0,h=0;r.items.forEach(({o:m,g:f,m:g})=>{let p=f.attributes.position,x=f.attributes.normal,y=f.attributes.uv;_0.getNormalMatrix(g);for(let v=0;v<p.count;v++)Wx.fromBufferAttribute(p,v).applyMatrix4(g).toArray(s,(c+v)*3),$x.fromBufferAttribute(x,v).applyMatrix3(_0).normalize().toArray(a,(c+v)*3),o[(c+v)*2]=y.getX(v),o[(c+v)*2+1]=y.getY(v);if(f.index)for(let v=0;v<f.index.count;v++)l[h++]=f.index.getX(v)+c;else for(let v=0;v<p.count;v++)l[h++]=v+c;c+=p.count,m.parent.remove(m)});let u=new nt;u.setAttribute("position",new ut(s,3)),u.setAttribute("normal",new ut(a,3)),u.setAttribute("uv",new ut(o,2)),u.setIndex(new ut(l,1)),u.computeBoundingSphere();let d=new ue(u,r.mat);d.castShadow=r.cast,d.receiveShadow=!0,n.add(r.seasons?Jn(d,...r.seasons):d),i+=r.items.length-1}),i}var Rd={};function E0(n){if(Rd[n])return Rd[n];let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),i={green:{base:"#A9D18E",dots:["#9DC883","#B4D899","#A2CC87","#BEDDA3"],bits:["#FFFFFF","#F7D84E","#F4B8C0"],nb:40},autumn:{base:"#B7C27C",dots:["#ABB86F","#C3CB88","#A6B266","#CBC88E"],bits:["#E0863E","#D35F3A","#E8B547","#B9773E"],nb:90},winter:{base:"#EEF3F8",dots:["#E3EAF1","#FFFFFF","#DAE3EC","#F6F9FB"],bits:["#B9C9B3","#C8D2DA"],nb:30}}[n]||{};t.fillStyle=i.base,t.fillRect(0,0,256,256);for(let s=0;s<1400;s++)t.fillStyle=i.dots[s%i.dots.length],t.globalAlpha=.5,t.beginPath(),t.arc(Math.random()*256,Math.random()*256,Math.random()*3+1,0,7),t.fill();for(let s=0;s<i.nb;s++)t.fillStyle=i.bits[s%i.bits.length],t.globalAlpha=.6,t.beginPath(),t.ellipse(Math.random()*256,Math.random()*256,2.6,1.5,Math.random()*3,0,7),t.fill();let r=lt(e);return r.wrapS=r.wrapT=oi,r.repeat.set(60,60),Rd[n]=r,r}function qx(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.fillStyle="#E8D3AE",e.fillRect(0,0,128,128);for(let i=0;i<18;i++)e.fillStyle=["#DEC59C","#F0E0C0","#D9BF95"][i%3],e.beginPath(),e.ellipse(Math.random()*128,Math.random()*128,10+Math.random()*12,8+Math.random()*8,Math.random()*3,0,7),e.fill();let t=lt(n);return t.wrapS=t.wrapT=oi,t}var M0=new Te(.22,.32,2,8),Nd=new xt(1.3,1),Xx=new yn(1.35,1.9,8),jx=new Be(.15,8,6);function Cd(n,e,{kind:t="maple",s:i=1}={}){let r=new ge;if(t==="pine")r.add(K(M0,"#7E553A",0,.8,0)),[[1.9,1],[2.85,.8],[3.65,.58]].forEach(([s,a],o)=>{let l=K(Xx,Ad.pine[o],0,s,0);l.scale.setScalar(a),r.add(l)});else{r.add(K(M0,"#8F6243",0,1,0));let s=Ad[t]||Ad.maple;if([[0,2.6,0,1.2],[.8,2.2,.2,.85],[-.75,2.3,-.2,.9],[.1,3.3,-.1,.8]].forEach(([o,l,c,h],u)=>{let d=K(Nd,s[u%3],o,l,c);d.scale.setScalar(h),r.add(d)}),t==="persimmon"){let o=new ge;[[.9,2.5,.9],[-.5,2,1],[.3,3,1.15],[-1.2,2.6,.4],[1.3,2,-.2],[.1,1.9,1.25],[-.6,3.4,.7]].forEach(([l,c,h])=>o.add(K(jx,"#F28C28",l,c,h))),o.userData.seasons=["autumn"],r.add(o)}}return r.position.set(n,0,e),r.scale.setScalar(i),r.rotation.y=Math.random()*6,r}function Yx(n,e,t=1,i=0){let r=new ge;return[[0,.45,0,.6],[.5,.35,.1,.45],[-.45,.35,-.05,.45]].forEach(([s,a,o,l])=>{let c=K(Nd,Dd(i),s,a,o);c.scale.setScalar(l),r.add(c)}),r.position.set(n,0,e),r.scale.setScalar(t),r}var oo={post:new Te(.09,.13,2.8,8),base:new Te(.24,.24,.12,8),glass:new Te(.2,.2,.42,6),cap:new yn(.34,.28,6),glassMat:new Ne({color:"#FFD27A"})};function Zx(n,e){let t=new ge;t.add(K(oo.post,"#5E4433",0,1.4,0)),t.add(K(oo.base,"#5E4433",0,.06,0));let i=new ue(oo.glass,oo.glassMat);return i.position.y=3,t.add(i),t.add(K(oo.cap,"#5E4433",0,3.34,0)),t.position.set(n,0,e),t}var Ld,Mc;function Jx(n,e){if(!Ld){let s=document.createElement("canvas");s.width=s.height=128;let a=s.getContext("2d"),o=a.createRadialGradient(64,64,4,64,64,64);o.addColorStop(0,"rgba(255,236,170,.95)"),o.addColorStop(.35,"rgba(255,220,140,.45)"),o.addColorStop(1,"rgba(255,200,120,0)"),a.fillStyle=o,a.fillRect(0,0,128,128),Ld=lt(s)}let t=new ge,i=new Cn(new gn({map:Ld,blending:gc,depthWrite:!1,transparent:!0,opacity:.9}));i.position.set(0,3,0),i.scale.set(3.6,3.6,1),Mc=Mc||{geo:new Pn(2.6,24),mat:new Ne({color:"#FFE4A8",transparent:!0,opacity:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})};let r=new ue(Mc.geo,Mc.mat);return r.rotation.x=-Math.PI/2,r.position.y=.04,t.add(i,r),t.position.set(n,0,e),t}var bc={seat:new me(1.8,.08,.16),back:new me(1.8,.14,.06),leg:new me(.08,.5,.5),arm:new me(.08,.6,.06)};function Kx(n,e,t=0){let i=new ge,r="#B07A4F";for(let s=0;s<3;s++)i.add(K(bc.seat,r,0,.5,-.2+s*.2));for(let s=0;s<2;s++)i.add(K(bc.back,r,0,.75+s*.2,-.32));for(let s of[-.75,.75])i.add(K(bc.leg,"#6E4B33",s,.25,0)),i.add(K(bc.arm,"#6E4B33",s,.8,-.32));return i.position.set(n,0,e),i.rotation.y=t,i}function T0(n,e,t=3.2){let i=new ge,r=["#F4B8C0","#FFFFFF","#F7D58B","#F9C59E","#E88A98"],s=[];for(let a=0;a<5;a++){let o=a/5*Math.PI*2,l=Math.cos(o)*.35,c=Math.sin(o)*.35,h=t+a%2*.35,u=K(new Be(.34,14,12),r[a],l,h,c);u.scale.y=1.18;let d=new tc(new nt().setFromPoints([new R(0,.4,0),new R(l,h-.4,c)]),new Ka({color:"#B8A59B"}));i.add(u,d),s.push({b:u,base:h,off:Math.random()*6})}return i.add(K(new Be(.12,8,6),"#C9637A",0,.4,0)),i.add(K(new Te(.2,.25,.4,10),"#FFF3EA",0,.2,0)),i.position.set(n,0,e),i.userData.update=a=>s.forEach(o=>{o.b.position.y=o.base+Math.sin(a*1.4+o.off)*.12,o.b.rotation.z=Math.sin(a+o.off)*.08}),i}function Qx(n,e,t=0){let i=new ge;i.add(K(new Te(.06,.07,2.6,6),"#8F6243",0,1.3,0));let r=K(new Te(.05,.05,1.9,6),"#8F6243",0,1.75,0);r.rotation.z=Math.PI/2,i.add(r);let s=K(new me(.75,.75,.3),"#C9452F",0,1.6,0);i.add(s);for(let o of[-1,1])i.add(K(new me(.45,.22,.24),"#C9452F",o*.55,1.78,0));i.add(K(new Be(.32,12,10),"#F1D9A8",0,2.3,0));let a=K(new yn(.5,.35,12),"#E3B55A",0,2.6,0);i.add(a,K(new Te(.55,.55,.04,14),"#E3B55A",0,2.48,0));for(let o of[-1,1])i.add(new ue(new Be(.04,6,4),new Ne({color:"#3A2A24"})).translateX(o*.11).translateY(2.33).translateZ(.29));return i.position.set(n,0,e),i.rotation.y=t,i}var Sc=[];function Bd(){return Sc.length||["#FF5A5A","#FFD34D","#6FD3FF","#9BE87A","#FFFFFF"].forEach((n,e)=>Sc.push({mat:new Ne({color:n}),base:new be(n),off:e*1.3})),Sc.map(n=>n.mat)}function e_(n,e,t=1){let i=new ge;i.add(K(new Te(.22,.3,1,8),"#7E553A",0,.5,0)),i.add(K(new Te(.7,.8,.5,12),"#C94F4F",0,.25,0));let r=["#2F6B3E","#377747","#2A603A","#3E8250"];[[1.6,1.45,1.7],[2.55,1.15,1.4],[3.35,.85,1.1],[4,.55,.85]].forEach(([c,h,u],d)=>i.add(K(new yn(h,u,12),r[d],0,c,0)));let s=Bd(),a=new Be(.09,8,6),o=new Be(.14,10,8);for(let c=0;c<46;c++){let h=c/46,u=1+h*3.2,d=1.35*(1-h*.82)+.05,m=h*Math.PI*9,f=new ue(a,s[c%s.length]);f.position.set(Math.cos(m)*d,u,Math.sin(m)*d),i.add(f)}["#C94F4F","#E2B865","#4A7FB5","#FFFFFF"].forEach((c,h)=>{for(let u=0;u<4;u++){let d=1.3+(u*4+h)%13*.21,m=1.4*(1-(d-1)/3.6)+.08,f=u*1.7+h*.6;i.add(K(o,c,Math.cos(f)*m,d,Math.sin(f)*m))}});let l=new ue(new ro(.32,0),new Ne({color:"#FFD34D"}));return l.position.y=4.5,l.scale.set(1,1.25,.45),l.userData.dynamic=!0,i.add(l),i.position.set(n,0,e),i.scale.setScalar(t),i.userData.star=l,i}function b0(n,e,t=1,i=!1){let r=new ge,s=i?["#FBFCFE","#EEF3F8","#F6F9FB","#E6EDF4"]:["#D9553B","#E8763E","#F2C14E","#B9773E"];return[[0,.22,0,.75],[.45,.16,.2,.5],[-.4,.15,-.15,.55],[.1,.14,-.45,.45]].forEach(([a,o,l,c],h)=>{let u=K(Nd,s[h%s.length],a,o,l);u.scale.set(c,c*.4,c),r.add(u)}),r.position.set(n,0,e),r.scale.setScalar(t),r}var t_={green:["#FFFFFF","#F7D84E","#B9A4E8","#F4A6C6","#FFE07A","#9FD3F0"],autumn:["#FFFFFF","#F4A6C6","#E07BB5","#F2C14E","#F6CBE0","#E9894A"]};function n_(n,e){let t=ui?500:900,i=new yn(.07,.4,3),r=new ci(i,w0({green:"#8DC175",autumn:"#A9B46C",winter:"#D8E2E8"}),t),s=new xt(.11,0),a=ui?260:480,o=new ci(s,new Ot({color:"#fff"}),a),l=new Le,c=new Rn,h=new R,u=new R,d=new na,m=()=>{for(let x=0;x<20;x++){let y=Math.random()*Math.PI*2,v=Math.sqrt(Math.random())*38,M=Math.cos(y)*v,C=Math.sin(y)*v;if(!x0(M,C)&&!e(M,C))return[M,C]}return[60,60]};for(let x=0;x<t;x++){let[y,v]=m();d.set(_e(-.2,.2),_e(0,6),_e(-.2,.2)),c.setFromEuler(d);let M=_e(.7,1.4);l.compose(u.set(y,.18*M,v),c,h.set(M,M,M)),r.setMatrixAt(x,l)}for(let x=0;x<a;x++){let[y,v]=m();l.compose(u.set(y,.14,v),c.identity(),h.setScalar(_e(.8,1.3))),o.setMatrixAt(x,l)}r.receiveShadow=!0,n.add(Jn(r,"green","autumn"),o);let f=22,g=new ci(new Te(.06,.08,.26,6),dt("#F6EBD8"),f),p=new ci(new Be(.17,10,6,0,Math.PI*2,0,Math.PI/2),dt("#D9553B"),f);for(let x=0;x<f;x++){let y=60,v=60;for(let C=0;C<20;C++){let S=Math.random()*Math.PI*2,T=_e(24,38),k=Math.cos(S)*T,L=Math.sin(S)*T;if(!x0(k,L)&&!e(k,L)){y=k,v=L;break}}let M=_e(.8,1.5);l.compose(u.set(y,.13*M,v),c.identity(),h.setScalar(M)),g.setMatrixAt(x,l),l.compose(u.set(y,.25*M,v),c.identity(),h.setScalar(M)),p.setMatrixAt(x,l)}return n.add(Jn(g,"green","autumn"),Jn(p,"green","autumn")),{setSeason(x){let y=t_[x];if(o.visible=!!y,!y)return;let v=y.map(M=>new be(M));for(let M=0;M<a;M++)o.setColorAt(M,v[M%v.length]);o.instanceColor.needsUpdate=!0}}}function i_(n){let e=[],t=new ge;n.add(t);let i=new Be(1,12,10),r=new Ot({color:"#FFFFFF",emissive:"#FFF4EA",emissiveIntensity:.35});for(let a=0;a<14;a++){let o=new ge,l=4+Math.floor(Math.random()*3);for(let u=0;u<l;u++){let d=new ue(i,r);d.position.set(u*2.2-l,Math.random()*1.2,Math.random()*1.5),d.scale.setScalar(_e(1.6,2.8)),o.add(d)}let c=Math.random()*Math.PI*2,h=_e(70,150);o.position.set(Math.cos(c)*h,_e(28,50),Math.sin(c)*h-30),o.scale.set(1.3,.8,1),t.add(o),e.push({g:o,speed:_e(.4,1)})}return t.userData.dynamic=!0,{group:t,update:a=>{t.visible&&e.forEach(o=>{o.g.position.x+=o.speed*a,o.g.position.x>170&&(o.g.position.x=-170)})}}}function r_(n){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");if(n==="leaf"){t.fillStyle="#FFFFFF",t.beginPath();for(let i=0;i<10;i++){let r=-Math.PI/2+i/10*Math.PI*2,s=i%2?11:27;t.lineTo(32+Math.cos(r)*s,30+Math.sin(r)*s)}t.closePath(),t.fill(),t.fillRect(31,36,2,22)}else{let i=t.createRadialGradient(32,32,2,32,32,28);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(n==="snow"?.55:.35,"rgba(255,255,255,.85)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,64,64)}return lt(e)}var Pd={green:{tex:"fluff",size:.24,fall:.3,drift:1.4,cols:["#FFFFFF","#FFF6D8","#FCE4EC","#FFFFFF"]},autumn:{tex:"leaf",size:.36,fall:1,drift:1,cols:["#D9553B","#E8763E","#F2C14E","#B9773E","#C9452F"]},winter:{tex:"snow",size:.24,fall:.75,drift:.5,cols:["#FFFFFF","#F4F8FF","#FFFFFF"]}};function s_(n){let e=bd?0:ui?160:300;if(!e)return{group:new ge,update(){},setCount(){},setSeason(){}};let t=new Float32Array(e*3),i=[],r=new Float32Array(e*3);for(let u=0;u<e;u++)t[u*3]=_e(-30,30),t[u*3+1]=_e(0,9),t[u*3+2]=_e(-30,30),i.push([_e(.3,.9),_e(.3,.8),_e(0,6)]);let s=new nt;s.setAttribute("position",new ut(t,3)),s.setAttribute("color",new ut(r,3));let a=new ur({size:.3,transparent:!0,depthWrite:!1,vertexColors:!0,alphaTest:.1}),o=new qr(s,a);o.frustumCulled=!1,n.add(o);let l={},c=e,h=Pd.green;return{group:o,setCount(u){c=Math.max(0,Math.min(e,u)),s.setDrawRange(0,c)},setSeason(u){h=Pd[u]||Pd.green,a.map=l[h.tex]||(l[h.tex]=r_(h.tex)),a.size=h.size,a.needsUpdate=!0;let d=h.cols.map(m=>new be(m));for(let m=0;m<e;m++){let f=d[m%d.length];r.set([f.r,f.g,f.b],m*3)}s.attributes.color.needsUpdate=!0},update(u,d,m){if(o.visible){for(let f=0;f<c;f++){let g=i[f];t[f*3]+=(Math.sin(d*g[0]+g[2])*.6*h.drift+.35)*u,t[f*3+1]-=g[1]*h.fall*u,t[f*3+2]+=Math.cos(d*g[0]*.7+g[2])*.4*h.drift*u,t[f*3+1]<0&&(t[f*3]=m.x+_e(-28,28),t[f*3+1]=_e(6,9),t[f*3+2]=m.z+_e(-28,20))}s.attributes.position.needsUpdate=!0}}}}function a_(n){let e=new ge,t=new ge;e.userData.dynamic=t.userData.dynamic=!0,n.add(e,t);let i=[],r=bd?0:8,s=new Pn(.16,10),a=["#F7D58B","#F4B8C0","#FFFFFF","#BFE3F5"];for(let m=0;m<r;m++){let f=new ge,g=new Ne({color:a[m%4],side:gd}),p=new ue(s,g),x=new ue(s,g);p.position.x=-.14,x.position.x=.14;let y=new ge,v=new ge;y.add(p),v.add(x),f.add(y,v),e.add(f),i.push({g:f,lw:y,rw:v,axis:"y",amp:1.1,freq:18,cx:_e(-25,25),cz:_e(-25,25),r:_e(2,5),sp:_e(.3,.7),off:_e(0,6)})}let o=new Pn(.16,10),l=new Ne({color:"#FFFFFF",transparent:!0,opacity:.55,side:gd,depthWrite:!1}),c=new Te(.025,.018,.42,6);for(let m=0;m<r;m++){let f=new ge,g=new ue(c,new Ne({color:m%3?"#D9452F":"#E8763E"}));g.rotation.x=Math.PI/2,f.add(g);let p=new ge,x=new ge;for(let[y,v]of[[p,-1],[x,1]])for(let M of[-.05,.06]){let C=new ue(o,l);C.scale.set(1.4,.32,1),C.position.set(v*.2,0,M),C.rotation.x=-Math.PI/2,y.add(C)}f.add(p,x),t.add(f),i.push({g:f,lw:p,rw:x,axis:"z",amp:.35,freq:30,cx:_e(-25,25),cz:_e(-25,25),r:_e(2,5),sp:_e(.3,.7),off:_e(0,6)})}let h=!1,u="green",d=()=>{e.visible=!h&&u==="green",t.visible=!h&&u==="autumn"};return{setLite(m){h=m,d()},setSeason(m){u=m,d()},get visible(){return e.visible||t.visible},update(m,f){!e.visible&&!t.visible||i.forEach(g=>{if(!g.g.parent.visible)return;let p=f*g.sp+g.off;g.g.position.set(g.cx+Math.cos(p)*g.r,1.2+Math.sin(f*2+g.off)*.5,g.cz+Math.sin(p*1.3)*g.r),g.g.rotation.y=-p;let x=Math.sin(f*g.freq+g.off)*g.amp;g.lw.rotation[g.axis]=x,g.rw.rotation[g.axis]=-x})}}}var Id=new Map;function A0(n="\u{1F497}"){if(Id.has(n))return Id.get(n);let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");t.font="52px serif",t.textAlign="center",t.textBaseline="middle",t.fillText(n,32,36);let i=lt(e);return Id.set(n,i),i}var la=[];function pr(n,e,t=10,i="\u{1F497}"){let r=A0(i);for(let s=0;s<t&&!(la.length>90);s++){let a=new Cn(new gn({map:r,transparent:!0,depthWrite:!1}));a.position.copy(e).add(new R(_e(-.4,.4),_e(0,.5),_e(-.4,.4))),a.scale.setScalar(_e(.35,.6)),n.add(a),la.push({sp:a,v:new R(_e(-1,1),_e(2,3.5),_e(-1,1)),life:1.4+Math.random()*.4,scene:n})}}function Tc(n,e,t,i="\u{1FA99}",r=.7,s){let a=new Cn(new gn({map:A0(i),transparent:!0,depthWrite:!1}));a.position.copy(e),a.scale.setScalar(.5),n.add(a);let o=9,l=new R((t.x-e.x)/r,(t.y-e.y+.5*o*r*r)/r,(t.z-e.z)/r);la.push({sp:a,v:l,life:r,scene:n,g:o,onLand:s})}function R0(n){var e;for(let t=la.length-1;t>=0;t--){let i=la[t];i.life-=n,i.v.y-=(i.g||1.2)*n,i.sp.position.addScaledVector(i.v,n),i.g||(i.sp.material.opacity=Math.min(1,i.life)),i.life<=0&&(i.scene.remove(i.sp),i.sp.material.dispose(),la.splice(t,1),(e=i.onLand)==null||e.call(i,i.sp.position))}}function C0(n,e){let t=new ge;n.add(t);let i=zx();n.add(i);let r=new ue(new Pn(160,64),new Ot({map:E0(di()),gradientMap:In}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,t.add(r);let s=qx(),a=new Ot({map:s,gradientMap:In,polygonOffset:!0,polygonOffsetFactor:-1});for(let[L,A,O,_,P]of S0){let U=Math.hypot(O-L,_-A),H=new rt(P,U),Z=H.attributes.uv;for(let $=0;$<Z.count;$++)Z.setXY($,Z.getX($)*P/3,Z.getY($)*U/3);let Y=new ue(H,a);Y.rotation.x=-Math.PI/2,Y.rotation.z=Math.atan2(O-L,_-A)+Math.PI,Y.position.set((L+O)/2,.02,(A+_)/2),Y.receiveShadow=!0,t.add(Y);for(let[$,j]of[[L,A],[O,_]]){let z=new ue(new Pn(P/2,20),a);z.rotation.x=-Math.PI/2,z.position.set($,.021,j),z.receiveShadow=!0,t.add(z)}}let o=new ue(new Pn(pi.r,48),a);o.rotation.x=-Math.PI/2,o.position.set(pi.x,.025,pi.z),o.receiveShadow=!0,t.add(o);let l=new ue(new Zr(pi.r-.35,pi.r,48),dt("#E6D2B5"));l.rotation.x=-Math.PI/2,l.position.set(pi.x,.03,pi.z),t.add(l);let c=[],h=[],u=[],d=[];for(let L=0;L<46;L++){let A=L/46*Math.PI*2+_e(-.04,.04),O=_e(41,46),_=Math.cos(A)*O,P=Math.sin(A)*O;Math.abs(_)<4&&P>30||h.push(Cd(_,P,{kind:["pine","maple","pine","ginkgo","pine","persimmon"][L%6],s:_e(1.1,1.6)}))}for(let L=0;L<30;L++){let A=Math.random()*Math.PI*2,O=_e(50,75);h.push(Cd(Math.cos(A)*O,Math.sin(A)*O,{kind:["pine","pine","maple","ginkgo"][L%4],s:_e(1.4,2.2)}))}for(let L=0;L<8;L++){let A=K(new Be(1,20,12),Gx[L%4],_e(-120,120),-_e(8,14),-_e(90,130));A.scale.set(_e(25,45),_e(18,26),_e(20,30)),t.add(A)}[[-9,27,"persimmon"],[14.5,31,"maple"],[-24,22,"pine"],[24,20,"ginkgo"],[-30,6,"pine"],[30,4,"maple"],[-28,-20,"ginkgo"],[33,-20,"pine"],[-8,-28,"pine"],[8,-29,"maple"],[-15,12,"maple"],[16,14,"persimmon"],[-22,-2,"ginkgo"],[11,-22,"persimmon"],[-12,-24,"maple"]].forEach(([L,A,O])=>{u.push(Cd(L,A,{kind:O,s:_e(1,1.3)})),c.push({x:L,z:A,r:.7})}),[[-5,28],[12.5,27.5],[-14,8],[13,3],[-3,-21],[3,-21],[-26,12],[26,10],[-20,-18],[28,-8]].forEach(([L,A],O)=>{u.push(Yx(L,A,_e(.9,1.3),O)),c.push({x:L,z:A,r:.9})});let f=new ge;f.visible=!1,f.userData.dynamic=!0,t.add(f),[[-2.3,30],[2.3,24],[-2.3,18],[2.3,12],[7.5,-1],[14,-3.5],[-8.6,5.5],[-12,-5],[-8,9],[8,12]].forEach(([L,A])=>{d.push(Zx(L,A)),f.add(Jx(L,A)),c.push({x:L,z:A,r:.3})}),[[-6.3,8.8,2.4],[6.3,8.8,-2.4],[-6.8,-.5,1.2],[6.8,-1,-1.2]].forEach(([L,A,O])=>{d.push(Kx(L,A,O)),c.push({x:L,z:A,r:.9})}),Ec(t,h,{shadows:!1}),Ec(t,u,{shadows:!0}),Ec(t,d,{shadows:!0});let g=[];f.children.forEach(L=>{let A=L.children.find(O=>O.isMesh);if(A){L.remove(A);let O=new ge;O.position.copy(L.position),O.add(A),g.push(O)}}),Ec(f,g,{shadows:!1});let p=[];t.add(Jn(Qx(-6.2,30.5,.5),"green","autumn")),c.push({x:-6.2,z:30.5,r:.6});let x=Jn(e_(6.4,14.6,1),"winter");t.add(x),c.push({x:6.4,z:14.6,r:1.2}),p.push(L=>{x.visible&&(Sc.forEach(A=>{let O=.55+.45*Math.max(0,Math.sin(L*2.6+A.off));A.mat.color.copy(A.base).multiplyScalar(O)}),x.userData.star.rotation.y=L*.8)}),[[3.9,32.4,1],[15.5,-7,.9],[24.5,-7,.9],[-7.5,15.5,.8],[8.5,-5.2,.7]].forEach(([L,A,O])=>{t.add(Jn(b0(L,A,O),"autumn")),t.add(Jn(b0(L,A,O*1.1,!0),"winter")),c.push({x:L,z:A,r:.6*O})});let y=n_(t,e),v=i_(t),M=s_(t),C=a_(t),S="day",T=di(),k={group:t,sky:i,colliders:c,get time(){return S},get season(){return T},palette:()=>lo[T][S],setTime(L){S=lo[T][L]?L:"day";let A=lo[T][S];return i.userData.setPalette(A),f.visible=A.lamps,A},setSeason(L){return T=lo[L]?L:"green",r.material.map=E0(T),r.material.needsUpdate=!0,kx(T),y.setSeason(T),M.setSeason(T),C.setSeason(T),k.setTime(S)},setLite(L){M.setCount(L>=2?0:L===1?80:300),M.group.visible=L<2,v.group.visible=L<2,C.setLite(L>=2)},update(L,A,O){v.update(L),M.update(L,A,O),C.update(L,A),p.forEach(_=>_(A))}};return Ud(t),k.setSeason(T),k}function co({type:n="player",outfit:e="#8FB8DE",hair:t="#5A3A2A",skin:i="#FFE0C7",longHair:r=!1,glasses:s=!1,hat:a="",kid:o=!1,shadows:l=!0}={}){let c=new ge,h=new ge;c.add(h),o&&h.scale.setScalar(.8);let u=e,d="#6B5B53",m=new Xr(.1,.28,4,8),f=new Be(.13,12,8),g=[];for(let G of[-1,1]){let re=new ge;re.position.set(.14*G,.56,0);let b=K(m,d,0,-.26,0),E=K(f,"#4A3B38",0,-.47,.04);E.scale.set(1,.6,1.35),re.add(b,E),h.add(re),g.push(re)}let p=K(new Xr(.3,.3,6,14),u,0,.86,0);p.scale.set(1,1,.85),h.add(p);let x=new Xr(.075,.3,4,8),y=new Be(.085,10,8),v=[];for(let G of[-1,1]){let re=new ge;re.position.set(.36*G,1.08,0);let b=K(x,u,.02*G,-.2,0),E=K(y,i,.03*G,-.42,0);re.add(b,E),re.rotation.z=.12*G,h.add(re),v.push(re)}let M=new ge;M.position.y=1.5,h.add(M);let C=K(new Be(.42,24,18),i,0,0,0);M.add(C);let S=dt(t),T=new ue(new Be(.45,24,16,0,Math.PI*2,0,Math.PI*.52),S);T.rotation.x=-.35,T.position.set(0,.03,-.03),T.castShadow=!0,M.add(T);let k=new ue(new Be(.2,12,8),S);if(k.scale.set(1.5,.55,.8),k.position.set(.1,.26,.27),k.rotation.z=-.3,M.add(k),r){let G=new ue(new Be(.42,16,12),S);G.scale.set(1.05,1.25,.7),G.position.set(0,-.22,-.18),M.add(G)}let L=new Be(.05,10,8),A=new Ne({color:"#2B2220"}),O=[];for(let G of[-1,1]){let re=new ue(L,A);re.position.set(.14*G,.02,.38),re.scale.set(1,1.3,.6),M.add(re),O.push(re);let b=new ue(new Be(.016,6,4),new Ne({color:"#fff"}));b.position.set(.14*G+.018,.05,.415),M.add(b);let E=new ue(new Pn(.07,14),new Ne({color:"#FFB3B3",transparent:!0,opacity:.7}));E.position.set(.24*G,-.09,.345),E.rotation.y=.55*G,M.add(E)}let _=new ue(new Bi(.045,.012,6,12,Math.PI),A);if(_.position.set(0,-.1,.39),_.rotation.z=Math.PI,M.add(_),s){let G=dt("#4A3B38"),re=new Bi(.085,.014,6,18);for(let E of[-1,1]){let F=new ue(re,G);F.position.set(.14*E,.03,.4),M.add(F)}let b=new ue(new me(.1,.018,.018),G);b.position.set(0,.05,.42),M.add(b)}let P=new ge;M.add(P);function U(G){if(P.clear(),G==="cap"){let re=new ue(new Be(.46,20,12,0,Math.PI*2,0,Math.PI*.42),dt(e==="#FFFFFF"?"#8FB8DE":e));re.position.y=.06,re.rotation.x=-.12;let b=K(new Te(.26,.26,.03,16,1,!1,-Math.PI/2,Math.PI),e,0,.2,.3);b.rotation.x=.12,P.add(re,b)}else if(G==="beanie"){let re=new ue(new Be(.47,20,12,0,Math.PI*2,0,Math.PI*.45),dt("#E88A98"));re.position.y=.06;let b=K(new Bi(.43,.06,8,24),"#FFFDF8",0,.18,0);b.rotation.x=Math.PI/2;let E=K(new Be(.1,10,8),"#FFFDF8",0,.55,0);P.add(re,b,E)}else if(G==="flower")["#F4B8C0","#FFFFFF","#F7D58B"].forEach((re,b)=>P.add(K(new xt(.075,0),re,.3+b*.05,.3-b*.08,.12-b*.06))),P.add(K(new Be(.03,6,4),"#E2B865",.31,.3,.16));else if(G==="party"){let re=K(new yn(.2,.46,14),"#F7D58B",.08,.6,0);re.rotation.z=-.25;let b=K(new Be(.07,8,6),"#E88A98",.2,.84,0);P.add(re,b)}}U(a),c.traverse(G=>{G.isMesh&&G.material!==A&&(G.castShadow=l)});let H=0,Z=2+Math.random()*3,Y=0,$=0,j=v[1].rotation.clone(),z={root:c,body:h,head:M,arms:v,legs:g,type:n};return z.animate=(G,re=0,b=0)=>{let E=Math.min(1,re);H+=G*(4+7*E);let F=Math.sin(H)*.75*E;if(g[0].rotation.x=F,g[1].rotation.x=-F,v[0].rotation.x=-F*.8,v[1].rotation.x=F*.8,h.position.y=Math.abs(Math.sin(H))*.07*E+Math.sin(b*2)*.012,h.rotation.z=Math.sin(H)*.04*E,M.rotation.z=Math.sin(b*1.3)*.04,n==="player"){$=E<.05?$+G:0;let D=$>4?Math.sin(b*.8)*.45:0;M.rotation.y+=(D-M.rotation.y)*Math.min(1,G*4)}Z-=G;let q=Z<.12?.15:1;if(O.forEach(D=>D.scale.y=1.3*q),Z<0&&(Z=2+Math.random()*3),Y>0){Y-=G;let D=v[1];D.rotation.z=-2.5+Math.sin(b*14)*.35,D.rotation.x=0,Y<=0&&D.rotation.copy(j)}},z.wave=(G=1.6)=>{Y=G},z.setParty=G=>U(G?"party":a),z}var ho={side:5,front:2.35,z0:-6.5,z1:-17.5},vn={x:0,z:-20.2,r:1.4},Od=(n,e=.25)=>"#"+new be(n).lerp(new be("#5A4038"),e).getHexString(),L0=(n,e)=>(n=String(n||"").replace(/\s+/g," ").trim(),n.length>e?n.slice(0,e-1)+"\u2026":n);function o_(n){let e=Math.ceil(n/2),t=Math.min(5.5,e>1?(ho.z0-ho.z1)/(e-1):5.5);return Array.from({length:n},(i,r)=>{let s=r%2===0?-1:1,a=Math.floor(r/2),o=ho.z0-a*t-(s>0?t/2:0);return{side:s,z:o,x:s*ho.side,npcX:s*ho.front}})}var Ac=null;function P0(){if(Ac)return Ac;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=["#B07A4F","#A56F45","#BC8657","#A9744B"];for(let r=0;r<6;r++){let s=r*21.33,a=e.createLinearGradient(0,s,0,s+21.33);a.addColorStop(0,"#7E5536"),a.addColorStop(.18,t[r%4]),a.addColorStop(.75,t[(r+1)%4]),a.addColorStop(1,"#6E4B33"),e.fillStyle=a,e.fillRect(0,s,128,21.33),e.strokeStyle="rgba(80,50,30,.25)",e.lineWidth=1;for(let o=0;o<3;o++){e.beginPath();let l=(r*37+o*45)%128;e.moveTo(l,s+8),e.lineTo(l+18,s+9),e.stroke()}}let i=lt(n);return i.wrapS=i.wrapT=oi,i.repeat.set(1.4,1),Ac=new Ot({map:i,gradientMap:In}),Ac}var Rc=null;function l_(){if(Rc)return Rc;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,.85)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Rc=lt(n),Rc}function I0({group:n,colliders:e,boxes:t,addInteract:i,updaters:r}){let s=rn(),a=o_(s.length),o=[],l=ze(),c=new Set(gs(l).map(f=>f.id));s.forEach((f,g)=>{let p=a[g],x=f.look.outfit,y=new ge,v=new ue(new me(2.8,1.9,2.4),P0());v.position.y=.95,v.castShadow=v.receiveShadow=!0,y.add(v);let M=new hi;M.moveTo(-1.4,0),M.lineTo(1.4,0),M.lineTo(0,1.08),M.closePath();let C=new ue(new Ni(M,{depth:2.4,bevelEnabled:!1}),P0());C.position.set(0,1.9,-1.2),y.add(C);let S=Od(x,.28);for(let b of[-1,1]){let E=K(new me(1.98,.14,2.9),S,b*.78,2.5,0);E.rotation.z=-b*.66,y.add(E)}y.add(K(new me(.16,.16,2.95),Od(x,.4),0,3.08,0));let T=new ge;for(let b of[-1,1]){let E=K(new me(2,.12,2.94),"#FBFCFE",b*.78+b*.07,2.58,0);E.rotation.z=-b*.66,T.add(E)}let k=Bd(),L=new Be(.075,8,6);for(let b=0;b<=12;b++){let E=b/12,F=-1.55+E*3.1,q=1.93+(1-Math.abs(E-.5)*2)*1.12,D=new ue(L,k[(b+g)%k.length]);D.position.set(F,q-.06,1.5),T.add(D)}y.add(Jn(T,"winter")),y.add(K(new me(.34,.85,.34),"#A39A8F",.8,2.85,-.55)),y.add(K(new me(.72,1.12,.06),Od(x,.1),0,.56,1.22)),y.add(K(new Be(.05,8,6),"#F2C14E",.22,.55,1.27)),y.add(K(new me(1.3,.14,.55),"#8F6243",0,.07,1.45));let A=new Ne({color:"#FFE2A0"});for(let b of[-1,1]){y.add(K(new me(.64,.64,.05),"#6E4B33",b*.92,1.18,1.21));let E=new ue(new rt(.52,.52),A);E.position.set(b*.92,1.18,1.24),y.add(E);for(let F of[-1,1])y.add(K(new me(.2,.62,.04),x,b*.92+F*.43,1.18,1.235));y.add(K(new me(.66,.16,.18),"#B9773E",b*.92,.82,1.3)),y.add(K(new xt(.1,0),b<0?"#E07BB5":"#F2C14E",b*.92-.15,.95,1.3),K(new xt(.1,0),"#D9553B",b*.92+.15,.95,1.3))}let O=new ue(new rt(1.3,.34),new Ne({map:lt(zt(f.name,{w:384,h:100,size:54,bg:"#FFF6E6",border:"#8F6243",radius:22,color:"#4A3528",font:"Jua"})),transparent:!0}));O.position.set(0,1.64,1.25),y.add(O);let _=[0,1,2].map(b=>{let E=new Cn(new gn({map:l_(),transparent:!0,depthWrite:!1,opacity:.6}));return E.position.set(.8,3.4,-.55),y.add(E),{sp:E,off:b/3+g*.13}});r.push(b=>_.forEach(({sp:E,off:F})=>{let q=(b*.22+F)%1;E.position.set(.8+Math.sin(q*4+F*9)*.2,3.35+q*1.6,-.55-q*.3),E.scale.setScalar(.35+q*.7),E.material.opacity=.55*(1-q)}));let P=new ge;P.add(K(new Te(.04,.05,.85,6),"#6E4B33",0,.42,0)),P.add(K(new me(.3,.24,.42),"#E4605A",0,.95,0));let U=new ge;U.userData.dynamic=!0,U.position.set(.17,.92,-.1);let H=K(new me(.03,.24,.12),"#F7D58B",0,.12,0);U.add(H),P.add(U),P.position.set(1.15,0,1.85),y.add(P);let Z=null;if(c.has(f.id)){let b=T0(-1.15,1.9,2.4);b.userData.dynamic=!0,y.add(b),r.push(E=>b.userData.update(E)),Z=new ge,Z.add(K(new Te(.06,.06,.7,6),"#B98A66",0,.35,0)),Z.add(K(new Te(.42,.42,.06,18),"#FFFDF8",0,.72,0)),Z.add(K(new Te(.3,.3,.22,18),"#F4B8C0",0,.86,0)),Z.add(K(new Te(.31,.31,.05,18),"#FFFFFF",0,.98,0));for(let E=0;E<3;E++){let F=E*2.1;Z.add(K(new Te(.02,.02,.14,6),"#F7D58B",Math.cos(F)*.15,1.07,Math.sin(F)*.15));let q=new ue(new Be(.035,6,4),new Ne({color:"#FFB347"}));q.position.set(Math.cos(F)*.15,1.17,Math.sin(F)*.15),Z.add(q)}Z.position.set(-.2,0,2.3),y.add(Z)}y.position.set(p.x,0,p.z),y.rotation.y=p.side<0?Math.PI/2:-Math.PI/2,n.add(y),t.push({minX:p.x-1.25,maxX:p.x+1.25,minZ:p.z-1.45,maxZ:p.z+1.45});let Y=(b,E)=>{let F=new R(b,0,E).applyAxisAngle(new R(0,1,0),y.rotation.y);return{x:p.x+F.x,z:p.z+F.z}},$=Y(1.15,1.85);if(e.push({x:$.x,z:$.z,r:.3}),Z){let b=Y(-.2,2.3);e.push({x:b.x,z:b.z,r:.45})}let j=co({type:"family",...f.look,shadows:!1});j.root.userData.dynamic=!0,j.root.position.set(p.npcX,0,p.z+(p.side<0?.55:-.55)),j.root.rotation.y=p.side<0?Math.PI/2:-Math.PI/2,c.has(f.id)&&j.setParty(!0),n.add(j.root);let z={x:j.root.position.x,z:j.root.position.z,r:.45};e.push(z);let G=f.id===Me(),re=i(`house:${f.id}`,`${f.role||f.name}\uB124 \uC9D1`,f.emoji||"\u{1F3E0}",`${f.role||f.name}\uB124 \uC9D1 \uAD6C\uACBD`,p.npcX,p.z,2.5,3.6);re.label.position.x=p.x,re.member=f.id,o.push({m:f,sp:p,g:y,npc:j,npcCol:z,it:re,flagPivot:U,badge:null,badgeText:"",bubbles:new Map,bub:null,bubT:0,sayT:1+g,sayIdx:0,near:!1,isMe:G})});function h(f){let g=[];if(c.has(f.m.id)&&g.push("\u{1F382} \uC0DD\uC77C!"),f.m.id===Me()){let x=ni().length;x&&g.push(`\u{1F48C} ${x}`)}let p=xs(f.m.id).length;return p&&g.push(`\u{1F497} ${p}`),g.join("  ")}function u(f){let g=f.m.id,p=[];c.has(g)&&p.push("\uC624\uB298 \uB0B4 \uC0DD\uC77C\uC774\uC57C! \u{1F382}");let x=Ei(ze()).find(v=>v.who===g);x&&p.push(`\u{1F4AC} ${L0(x.text,20)}`);let y=at("letters").find(v=>v.who===g&&!bi(v));return y&&p.push(`\u2709\uFE0F ${L0(y.message.split(`
`)[0],18)}`),f.m.line&&p.push(f.m.line),p.length?p:["\uC5B4\uC11C \uC640! \u{1F64C}"]}function d(){let f=Me(),g=rn();o.forEach(p=>{let x=g.find(C=>C.id===p.m.id);if(x){let C=JSON.stringify(x.look);if(p.lookKey&&C!==p.lookKey){let S=p.npc,T=co({type:"family",...x.look,shadows:!1});T.root.position.copy(S.root.position),T.root.rotation.y=S.root.rotation.y,c.has(p.m.id)&&T.setParty(!0),n.remove(S.root),S.root.traverse(k=>{var L;return(L=k.geometry)==null?void 0:L.dispose()}),n.add(T.root),p.npc=T}p.lookKey=C,p.m=x}p.isMe=p.m.id===f,p.npc.root.visible=!p.isMe,p.npcCol.r=p.isMe?0:.45;let y=p.isMe?"\u{1F3E0} \uB0B4 \uC9D1":`${p.m.emoji||"\u{1F3E0}"} ${p.m.role||p.m.name}\uB124 \uC9D1`;if(p.it.labelText!==y){p.it.labelText=y;let C=dr(y),S=p.it.label.material.map;p.it.label.material.map=C.material.map,p.it.label.material.needsUpdate=!0,S.dispose(),C.material.dispose()}p.it.text=p.isMe?"\uB0B4 \uC9D1":`${p.m.role||p.m.name}\uB124 \uC9D1`,p.it.action=p.isMe?"\uB0B4 \uC9D1 \uB4E4\uC5B4\uAC00\uAE30":`${p.m.role||p.m.name}\uB124 \uC9D1 \uAD6C\uACBD`;let v=p.isMe&&ni().length>0;p.flagPivot.rotation.z=v?-1.4:0;let M=h(p);M!==p.badgeText&&(p.badgeText=M,p.badge&&(n.remove(p.badge),p.badge.material.map.dispose(),p.badge.material.dispose(),p.badge=null),M&&(p.badge=dr(M,{scale:2.4,bg:"rgba(255,244,228,.96)",color:"#B5552B"}),p.badge.position.set(p.sp.x,4.45,p.sp.z),n.add(p.badge))),p.lines=u(p)})}d();function m(f,g,p,x=!1){o.forEach(y=>{if(y.badge){let L=Math.hypot(p.x-y.sp.x,p.z-y.sp.z);y.badge.visible=!x&&L<30,y.badge.material.opacity=so((30-L)/8,0,1)}if(y.isMe)return;let v=y.npc,M=p.x-v.root.position.x,C=p.z-v.root.position.z,S=Math.hypot(M,C);if(x){v.animate(f,0,g),y.bub&&(y.bub.visible=!1,y.bub=null);return}if(v.root.visible=S<48,!v.root.visible)return;v.animate(f,0,g);let T=S<7?so(Math.atan2(M,C)-v.root.rotation.y,-.9,.9):0;v.head.rotation.y+=(T-v.head.rotation.y)*Math.min(1,f*4);let k=S<4.2;if(k&&!y.near&&(v.wave(1.4),y.sayT=Math.min(y.sayT,.4)),y.near=k,y.sayT-=f,k&&y.sayT<=0&&!y.bub){let L=y.lines[y.sayIdx++%y.lines.length];if(!y.bubbles.has(L)){y.bubbles.size>6&&(y.bubbles.forEach(O=>{n.remove(O),O.material.map.dispose(),O.material.dispose()}),y.bubbles.clear());let A=dr(L,{scale:3.6});A.visible=!1,n.add(A),y.bubbles.set(L,A)}y.bub=y.bubbles.get(L),y.bub.position.set(v.root.position.x,2.75,v.root.position.z),y.bub.visible=!0,y.bubT=3,y.sayT=6+Math.random()*4}y.bub&&(y.bubT-=f,(y.bubT<=0||!k)&&(y.bub.visible=!1,y.bub=null))})}return{houses:o,refresh:d,update:m,npc:f=>{var g;return((g=o.find(p=>p.m.id===f))==null?void 0:g.npc)||null},spot:f=>{var g;return((g=o.find(p=>p.m.id===f))==null?void 0:g.sp)||null}}}function F0({group:n,colliders:e,addInteract:t,updaters:i}){let r=new ge;r.userData.dynamic=!0,r.position.set(vn.x,0,vn.z),n.add(r),r.add(K(new Te(1.5,1.7,.22,24),"#9C7A5E",0,.11,0)),r.add(K(new Te(1.35,1.35,.06,24),"#6B4A33",0,.23,0));for(let A=0;A<12;A++){let O=A/12*Math.PI*2;Math.abs(Math.sin(O))>.9&&Math.cos(O)>-.2&&Math.sin(O)>0||r.add(K(new me(.12,.5,.12),"#A0703F",Math.cos(O)*1.9,.25,Math.sin(O)*1.9))}let s=K(new Bi(1.9,.035,6,40),"#A0703F",0,.42,0);s.rotation.x=Math.PI/2,r.add(s);let a=K(new Be(.16,10,8),"#8C6B55",0,.3,0);a.scale.set(1,.7,1.2);let o=new ge;o.add(K(new Te(.03,.04,.5,6),"#8DC175",0,.48,0));for(let A of[-1,1]){let O=K(new Be(.16,10,8),"#9ED08A",A*.15,.74,0);O.scale.set(1.3,.5,.8),O.rotation.z=A*.5,o.add(O)}let l=new Ot({color:"#86C174",gradientMap:In}),c=new ge;c.add(K(new Te(.08,.12,1.3,8),"#A47A5C",0,.85,0)),[[0,1.75,0,.55],[.35,1.45,.1,.38],[-.32,1.5,-.1,.4]].forEach(([A,O,_,P])=>{let U=K(new xt(1,1),l,A,O,_);U.scale.setScalar(P),c.add(U)});let h=new ge;h.add(K(new Te(.22,.34,2.2,10),"#A47A5C",0,1.3,0));let u=[[0,3.1,0,1.25],[.9,2.65,.25,.9],[-.85,2.75,-.2,.95],[.15,3.85,-.1,.85],[-.3,2.6,.75,.75]];u.forEach(([A,O,_,P])=>{let U=K(new xt(1,1),l,A,O,_);U.scale.setScalar(P),h.add(U)});let d=new ge,m=new ge,f=new xt(.13,0),g=new Be(.15,10,8);for(let A=0;A<26;A++){let[O,_,P,U]=u[A%u.length],H=new R().setFromSphericalCoords(U*1.02,Math.acos(Math.random()*1.6-.6),Math.random()*Math.PI*2);d.add(K(f,A%3?"#FFF6D8":"#F7E7A6",O+H.x,_+H.y,P+H.z)),A%2===0&&m.add(K(g,A%4?"#F28C28":"#E9741F",O+H.x*.95,_+H.y*.95-.1,P+H.z*.95))}h.add(d,m),r.add(a,o,c,h),e.push({x:vn.x,z:vn.z,r:vn.r});let p=zt(Mi().name,{w:420,h:110,size:50,bg:"#FFF6E6",radius:26,color:"#5E7D4A",border:"#93A35A"}),x=new ue(new rt(1.5,.4),new Ne({map:lt(p),transparent:!0})),y=K(new Te(.04,.05,.9,6),"#A47A5C",1.35,.45,2.2);x.position.set(1.35,.95,2.23),r.add(y,x),e.push({x:vn.x+1.35,z:vn.z+2.2,r:.2});let v=t("tree",Mi().name,"\u{1F331}","\uBB3C \uC8FC\uAE30",vn.x,vn.z+.4,3.2,5.4),M=null,C="",S=-1,T=0;function k(A){a.visible=A===0,o.visible=A===1,c.visible=A===2,h.visible=A>=3,d.visible=A>=4,m.visible=A>=5,h.scale.setScalar(A>=5?1.2:A===4?1.1:1)}function L(){let A=Mi();if(A.stage!==S){let P=S>=0&&A.stage>S;S=A.stage,k(S),P&&(T=1)}let O={green:["#86C174","#A9B97A"],autumn:["#E39B3B","#C2A46A"],winter:["#EEF3F8","#D7DDE3"]}[di()]||["#86C174","#A9B97A"];l.color.set(A.thirsty?O[1]:O[0]);let _=A.thirsty?"\u{1F4A7} \uBAA9\uB9D0\uB77C\uC694\u2026 \uBB3C\uC744 \uC8FC\uC138\uC694":A.todayWho.length?`\u{1F4A7} \uC624\uB298 ${A.todayWho.length}\uBA85\uC774 \uBB3C\uC744 \uC92C\uC5B4\uC694`:`\u{1F331} ${A.stageName} \xB7 \uBB3C ${A.total}\uBC88`;return _!==C&&(C=_,M&&(n.remove(M),M.material.map.dispose(),M.material.dispose()),M=dr(_,{scale:3.4,bg:"rgba(240,250,235,.95)",color:"#4F7A3E"}),M.position.set(vn.x,4.7,vn.z),n.add(M)),A}return L(),i.push((A,O)=>{if(T>0){T=Math.max(0,T-O/.9);let P=1+Math.sin((1-T)*Math.PI)*.25;r.scale.set(P,P,P)}else r.scale.x!==1&&r.scale.set(1,1,1);let _=Math.sin(A*1.1)*.03;h.rotation.z=_,c.rotation.z=_*1.5,o.rotation.z=_*2}),{it:v,refresh:L,top:new R(vn.x,2.6,vn.z)}}var D0=36,es={x:20,z:-8.4,r:1.7},ct={x:8.2,z:25.5,r:1.8},U0=(n,e)=>(n=String(n||""),n.length>e?n.slice(0,e-1)+"\u2026":n);function c_(n,e,t){let i=String(e).split(/(\s+)/),r=[],s="";for(let a of i){let o=s+a;for(n.measureText(o).width>t&&s.trim()?(r.push(s.trim()),s=a.trimStart()):s=o;n.measureText(s).width>t&&s.length>1;){let l=s.length;for(;l>1&&n.measureText(s.slice(0,l)).width>t;)l--;r.push(s.slice(0,l)),s=s.slice(l)}}return s.trim()&&r.push(s.trim()),r}function N0(n){var O;let e=window.FAMILY,t=new ge;n.add(t);let i=[],r=[],s=[],a=[];function o(_,P,U,H,Z,Y,$,j=3.4){let z=dr(`${U} ${P}`);z.position.set(Z,j,Y),t.add(z);let G={id:_,text:P,emoji:U,action:H,pos:new R(Z,0,Y),r:$,label:z,baseY:j,off:Math.random()*6};return s.push(G),G}let l=(_,P,U)=>new ue(new rt(P,U),new Ne({map:lt(_),transparent:!0})),c=document.createElement("canvas");c.width=512,c.height=680;let h=null;function u(){let _=c.getContext("2d");_.clearRect(0,0,512,680),_.fillStyle="#FFFDF8",Zn(_,0,0,512,680,24),_.fill(),_.lineWidth=10,_.strokeStyle="#B07A4F",Zn(_,5,5,502,670,20),_.stroke(),_.textAlign="center",_.fillStyle="#B5552B",_.font="64px serif",_.fillText("\u{1F3E1}",256,105),_.font='56px "Jua"',_.fillText(Wt(),256,185);let P=ji();_.fillStyle="#7C6A66",_.font='28px "Gowun Dodum"',P>0&&_.fillText(`\uD568\uAED8\uD55C \uC9C0 ${P.toLocaleString()}\uC77C\uC9F8`,256,232),_.fillStyle="#4A3B38",_.font='700 32px "Gowun Dodum"',_.fillText("\uC624\uB298 \uB2E4\uB140\uAC04 \uAC00\uC871",256,315);let U=Do();_.font='30px "Gowun Dodum"',U.length||(_.fillStyle="#9A8C88",_.fillText("\uC544\uC9C1 \uC544\uBB34\uB3C4 \uC548 \uC654\uC5B4\uC694",256,375)),U.slice(0,6).forEach((H,Z)=>{let Y=Z%2,$=Math.floor(Z/2);_.fillStyle=H.look.outfit,_.beginPath(),_.arc(Y?300:70,368+$*62,12,0,7),_.fill(),_.fillStyle="#4A3B38",_.textAlign="left",_.fillText(U0(H.role||H.name,6),Y?322:92,379+$*62),_.textAlign="center"}),_.fillStyle="#B5552B",_.font='26px "Gowun Dodum"',_.fillText("\uB204\uB974\uBA74 \uC6B0\uB9AC \uAC00\uC871 \uC18C\uAC1C",256,640),h&&(h.needsUpdate=!0)}{let _=new ge,P="#B98A66",U=K(new me(.1,3,.1),P,-.8,1.45,.1);U.rotation.z=.12;let H=K(new me(.1,3,.1),P,.8,1.45,.1);H.rotation.z=-.12;let Z=K(new me(.1,3,.1),P,0,1.4,-.45);Z.rotation.x=-.3;let Y=K(new me(1.9,.08,.25),P,0,.75,.2),$=K(new me(1.9,2.5,.06),"#FFFDF8",0,2.05,.2);$.rotation.x=-.08,u();let j=l(c,1.75,2.33);h=j.material.map,j.position.set(0,2.05,.235),j.rotation.x=-.08,_.add(U,H,Z,Y,$,j),_.position.set(-4.8,0,24),_.rotation.y=.35,t.add(_),i.push({x:-4.8,z:24,r:1}),o("family","\uC6B0\uB9AC \uAC00\uC871","\u{1F3E1}","\uAC00\uC871 \uC18C\uAC1C \uBCF4\uAE30",-4.8,24,3,3.8)}let d=document.createElement("canvas");d.width=512,d.height=400;let m=null;function f(){let _=d.getContext("2d");_.fillStyle="#D9B38C",_.fillRect(0,0,512,400);for(let H=0;H<160;H++)_.fillStyle=H%2?"rgba(120,80,40,.12)":"rgba(255,255,255,.1)",_.fillRect(H*97%512,H*61%400,3,3);_.save(),_.translate(256,205),_.rotate(-.02),_.fillStyle="#FFFDF6",_.shadowColor="rgba(0,0,0,.25)",_.shadowBlur=12,_.fillRect(-215,-170,430,340),_.shadowColor="transparent",_.fillStyle="#E4605A",_.beginPath(),_.arc(0,-160,13,0,7),_.fill(),_.textAlign="center",_.fillStyle="#B5552B",_.font='36px "Jua"',_.fillText("\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38",0,-108);let P=vs();_.fillStyle="#4A3528",_.font='36px "Jua"',c_(_,P?P.q:"\uC9C8\uBB38\uC744 \uC900\uBE44 \uC911\uC774\uC5D0\uC694",380).slice(0,3).forEach((H,Z)=>_.fillText(H,0,-40+Z*48));let U=P?Ei(P.day).length:0;_.fillStyle="#7C6A66",_.font='26px "Gowun Dodum"',_.fillText(U?`${U}\uBA85\uC774 \uB2F5\uD588\uC5B4\uC694 \xB7 \uB20C\uB7EC\uC11C \uB2F5\uD558\uAE30`:"\uCCAB \uBC88\uC9F8\uB85C \uB2F5\uD574 \uBCF4\uC138\uC694!",0,140),_.restore(),m&&(m.needsUpdate=!0)}{let _=new ge,P="#A47A5C";for(let Z of[-.95,.95])_.add(K(new me(.12,2.9,.12),P,Z,1.45,0));_.add(K(new me(2.15,1.75,.1),P,0,2.05,-.03));let U=K(new me(2.5,.12,.55),"#B5452F",0,3.05,.05);U.rotation.x=.25,_.add(U),f();let H=l(d,1.95,1.52);m=H.material.map,H.position.set(0,2.05,.03),_.add(H),_.position.set(4.4,0,-1.8),_.rotation.y=-.55,t.add(_),i.push({x:4.4,z:-1.8,r:.9}),o("question","\uC624\uB298\uC758 \uC9C8\uBB38","\u{1F4AC}","\uC9C8\uBB38\uC5D0 \uB2F5\uD558\uAE30",4.4,-1.8,3,3.75)}{let _=new ge,P="#E4605A";_.add(K(new Te(.2,.25,.5,10),"#8C6B55",0,.25,0));let U=K(new me(1,1.3,.8),P,0,1.15,0),H=K(new Te(.4,.4,1,20,1,!1,0,Math.PI),P,0,1.8,0);H.rotation.z=Math.PI/2;let Z=K(new me(.6,.06,.05),"#4A2B28",0,1.55,.41),Y=l(zt("\uC6B0\uCCB4\uD1B5",{w:256,h:128,size:58,bg:"#FFF6E6",radius:24,color:"#B5452F"}),.7,.35);Y.position.set(0,1.1,.41);let $=[];for(let j=0;j<3;j++){let z=K(new me(.4,.28,.02),j===1?"#FFF3EA":"#FFFFFF",0,2.4,0);z.userData.dynamic=!0,_.add(z),$.push({l:z,off:j*2.1})}_.add(U,H,Z,Y),_.position.set(4.8,0,23),_.rotation.y=-.4,t.add(_),a.push(j=>$.forEach(({l:z,off:G})=>{let re=(j*.35+G/6.3)%1;z.position.set(Math.sin(re*6+G)*.5,2+re*1.6,Math.cos(re*5)*.3),z.rotation.set(re*3,re*5+G,.3),z.visible=re<.95})),i.push({x:4.8,z:23,r:.8}),o("mailbox","\uC548\uBD80 \uC6B0\uCCB4\uD1B5","\u2709\uFE0F","\uD3B8\uC9C0 \uC4F0\uAE30",4.8,23,2.8,4.1)}let g=new ge;g.userData.dynamic=!0,t.add(g);let p=[];{g.add(K(new Te(ct.r+.3,ct.r+.4,.18,28),"#B98A66",ct.x,.09,ct.z)),g.add(K(new Te(ct.r+.05,ct.r+.05,.22,28),"#7A5A44",ct.x,.1,ct.z));let _=K(new Te(.05,.06,1.1,6),"#A47A5C",ct.x,.55,ct.z+ct.r+.5),P=l(zt("\uAC00\uC871 \uC815\uC6D0",{w:360,h:110,size:50,bg:"#FFF6E6",radius:26,color:"#B5552B"}),1.3,.4);P.position.set(ct.x,1.15,ct.z+ct.r+.55);let U=P.clone();U.rotation.y=Math.PI,U.position.z-=.02,g.add(_,P,U),i.push({x:ct.x,z:ct.z,r:ct.r+.5})}let x=new Te(.03,.03,.5,6),y=new xt(.16,0),v=new Be(.06,8,6),M=_=>{let P=7;for(let U of String(_))P=P*31+U.charCodeAt(0)>>>0;return P};function C(_,P){if(p.length>=60)return null;let U=M(`${_.name}|${_.time||""}|${p.length}`),H=U%360/360*Math.PI*2,Z=.25+(U>>9)%100/100*(ct.r-.55),Y=ct.x+Math.cos(H)*Z,$=ct.z+Math.sin(H)*Z,j=new ge;if(j.add(K(x,"#8DC175",0,.45,0)),j.add(K(y,_.color||va(_.who),0,.75,0)),j.add(K(v,"#F7D58B",0,.75,.13)),p.length<24){let z=String(_.name||"").slice(0,8),G=dr(z,{scale:1.5,bg:"rgba(255,253,248,.85)"});G.position.y=1.12,j.add(G)}if(j.position.set(Y,0,$),j.rotation.y=H,g.add(j),p.push(j),P){let z=0;j.scale.setScalar(.01),a.push((G,re)=>{if(z>=1)return;z=Math.min(1,z+re/.7);let b=1-Math.pow(1-z,3);j.scale.setScalar(b)})}return new R(Y,0,$)}{let _=new ge;_.add(K(new Te(.1,.12,3.2,8),"#A47A5C",0,1.6,0)),[["\uBAA8\uC774\uB294 \uACF3","#FFF6E6",.4],["\uBCF8\uAC00 \u2192","#F2B27A",-.5],["\uC8FC\uCC28 \uC548\uB0B4","#F2C14E",.9]].forEach(([U,H,Z],Y)=>{let $=new ge,j=K(new me(1.5,.42,.08),H,.55,0,0),z=K(new Te(.21,.21,.08,3),H,1.35,0,0);z.rotation.x=Math.PI/2,z.rotation.y=Math.PI/2;let G=l(zt(U,{w:384,h:110,size:56,bg:null}),1.4,.4);G.position.set(.55,0,.05);let re=G.clone();re.rotation.y=Math.PI,re.position.z=-.05,$.add(j,z,G,re),$.position.y=2.8-Y*.55,$.rotation.y=Z,_.add($)}),_.position.set(-3.6,0,13.5),t.add(_),i.push({x:-3.6,z:13.5,r:.4}),o("directions","\uBAA8\uC774\uB294 \uACF3","\u{1F5FA}\uFE0F","\uAE38 \uC548\uB0B4 \uBCF4\uAE30",-3.6,13.5,2.6,3.9)}{let _=new ge;_.add(K(new me(1,.75,1),"#B98A66",0,.38,0)),_.add(K(new me(1.25,1,1),"#F6E7CC",0,1.25,0)),_.add(K(new me(1.3,.08,1.05),"#E07B39",0,1.78,0)),_.add(K(new me(.6,.04,.12),"#4A3B38",0,1.83,0));let P=K(new me(.42,.3,.02),"#F7D58B",0,2,0);P.userData.dynamic=!0,_.add(P);let U=l(zt("\uD22C\uD45C\uD568",{w:256,h:110,size:54,bg:"#E07B39",radius:20,color:"#FFFFFF"}),.8,.34);U.position.set(0,1.3,.51),_.add(U),_.position.set(-13.5,0,2),_.rotation.y=.5,t.add(_),a.push(H=>{P.position.y=2+Math.sin(H*2.2)*.08,P.rotation.y=Math.sin(H)*.4}),i.push({x:-13.5,z:2,r:.9}),o("poll","\uAC00\uC871 \uD22C\uD45C\uD568","\u{1F5F3}\uFE0F","\uD22C\uD45C\uD558\uAE30",-13.5,2,3,3.2)}{let _=new ge,P="#B98A66";for(let $ of[-.75,.75])_.add(K(new me(.1,2.8,.1),P,$,1.4,0));_.add(K(new me(1.8,2.1,.1),P,0,1.9,0));let U=document.createElement("canvas");U.width=480,U.height=560;let H=U.getContext("2d");H.fillStyle="#4E5F46",H.fillRect(0,0,480,560),H.fillStyle="#FFF8E7",H.textAlign="center",H.font='52px "Jua"',H.fillText("\uAC00\uC871 \uB2EC\uB825",240,70);let Z=ys(5);H.font='28px "Gowun Dodum"',Z.length||H.fillText("\uB2E4\uAC00\uC624\uB294 \uB0A0\uC774 \uC5C6\uC5B4\uC694",240,260),Z.forEach(($,j)=>{let z=150+j*80;H.font='28px "Gowun Dodum"',H.textAlign="left",H.fillStyle="#FFF8E7",H.fillText(`${$.emoji||"\u{1F4CC}"} ${U0($.title,9)}`,28,z),H.textAlign="right",H.fillStyle=$.dday===0?"#F4B8C0":"#F7D58B",H.fillText(_a($.dday),454,z),H.textAlign="left",H.fillStyle="rgba(255,248,231,.6)",H.font='22px "Gowun Dodum"',H.fillText(un($.key),70,z+30)});let Y=l(U,1.62,1.9);Y.position.set(0,1.9,.06),_.add(Y),_.position.set(11,0,9.8),_.rotation.y=-.5,t.add(_),i.push({x:11,z:9.8,r:1}),o("calendar","\uAC00\uC871 \uB2EC\uB825","\u{1F4C5}","\uB2EC\uB825 \uBCF4\uAE30",11,9.8,2.8,3.6)}{let _=new ge;_.add(K(new me(2.4,1.1,1),"#F6E7CC",0,.55,0)),_.add(K(new me(2.5,.1,1.1),"#B07A4F",0,1.12,0));for(let H of[-1.1,1.1])_.add(K(new Te(.06,.06,2.4,8),"#FFFFFF",H,2.2,-.4));let P=8;for(let H=0;H<P;H++){let Z=K(new Te(1.7,1.7,.5,3,1,!1,Math.PI/2+H/P*Math.PI,Math.PI/P),H%2?"#FFF6E6":"#E07B39",0,3.3,-.4);Z.rotation.x=Math.PI/2,Z.scale.set(1,1,.5),_.add(Z)}let U=l(zt("?",{w:256,h:256,size:190,bg:"#F2C14E",radius:128,color:"#FFFFFF"}),.9,.9);U.position.set(0,.6,.51),_.add(U),_.position.set(-19.5,0,-11.5),_.rotation.y=.6,t.add(_),i.push({x:-19.5,z:-11.5,r:1.5}),o("quiz","\uAC00\uC871 \uD034\uC988","\u2753","\uD034\uC988 \uD480\uAE30",-19.5,-11.5,3.2,4.4)}let S;{let _=new ge,P=new xt(.34,0);for(let N=0;N<12;N++){let B=N/12*Math.PI*2,V=K(P,N%2?"#9C948A":"#B5ADA2",Math.cos(B)*1.25,.18,Math.sin(B)*1.25);V.scale.set(1.15,.7,1),V.rotation.y=B,_.add(V)}_.add(K(new Te(1.1,1.1,.05,20),"#4A3A2E",0,.04,0));let U=new Te(.11,.13,1.6,8);for(let N=0;N<4;N++){let B=K(U,N%2?"#7A4E32":"#8A5A3B",0,.16+(N>1?.2:0),0);B.rotation.set(0,N*Math.PI/4+.3,Math.PI/2),_.add(B)}let H=[["#FF7A1A",.42,1.05],["#FFB23A",.3,.85],["#FFE58A",.17,.6]].map(([N,B,V],ee)=>{let ie=new ue(new yn(B,V,8),new Ne({color:N,transparent:!0,opacity:.92}));return ie.position.y=.4+V/2,ie.userData={h:V,k:ee,dynamic:!0},_.add(ie),ie}),Z=document.createElement("canvas");Z.width=Z.height=128;let Y=Z.getContext("2d"),$=Y.createRadialGradient(64,64,4,64,64,64);$.addColorStop(0,"rgba(255,190,90,.9)"),$.addColorStop(.4,"rgba(255,150,60,.35)"),$.addColorStop(1,"rgba(255,120,40,0)"),Y.fillStyle=$,Y.fillRect(0,0,128,128);let j=new Cn(new gn({map:lt(Z),blending:gc,depthWrite:!1,transparent:!0,opacity:.7}));j.position.y=.9,j.scale.set(4.2,4.2,1),_.add(j);let z=28,G=new Float32Array(z*3),re=[];for(let N=0;N<z;N++)re.push([Math.random()*Math.PI*2,Math.random(),Math.random()*.35]);let b=new nt;b.setAttribute("position",new ut(G,3));let E=new qr(b,new ur({color:"#FFC46B",size:.09,transparent:!0,opacity:.9,depthWrite:!1}));_.add(E);let F=new Te(.32,.32,1.7,10);for(let N=0;N<4;N++){let B=N*Math.PI/2+Math.PI/4,V=K(F,"#8F6243",Math.cos(B)*2.9,.3,Math.sin(B)*2.9);V.rotation.set(0,-B,Math.PI/2),_.add(V),i.push({x:Math.cos(B)*2.9,z:4+Math.sin(B)*2.9,r:.5})}let q=K(new Te(.45,.5,.12,12),"#A39A8F",1.75,.06,.25);_.add(q);let D=new ci(new Be(.11,8,6),dt("#8A4B3A"),6);D.count=0,_.add(D),_.position.set(0,0,4),t.add(_);let X=0;a.push((N,B)=>{H.forEach(V=>{let{h:ee,k:ie}=V.userData,w=1+Math.sin(N*(9+ie*3)+ie)*.12+X*.4;V.scale.set(1-(w-1)*.5,w,1-(w-1)*.5),V.position.y=.4+ee*w/2,V.rotation.y=N*(1+ie)}),j.material.opacity=.6+Math.sin(N*7)*.08+X*.3;for(let V=0;V<z;V++){let[ee,ie,w]=re[V],ae=(N*.45+ie)%1;G[V*3]=Math.cos(ee+ae*2)*(w+ae*.3),G[V*3+2]=Math.sin(ee+ae*2)*(w+ae*.3),G[V*3+1]=.7+ae*2.4}b.attributes.position.needsUpdate=!0,X>0&&(X=Math.max(0,X-B*1.5))}),i.push({x:0,z:4,r:1.6}),o("campfire","\uBAA8\uB2E5\uBD88","\u{1F525}","\uACE0\uAD6C\uB9C8 \uAD7D\uAE30",0,4,3.4,3.4),S={toss(N,B,V){Tc(N,B,new R(0,.8,4),"\u{1F360}",.75,()=>{X=1,V==null||V()})},setCount(N){N=Math.max(0,Math.min(6,N|0));let B=new Le;for(let V=0;V<N;V++)B.makeRotationY(V*1.3),B.scale(new R(1.5,.8,.9)),B.setPosition(1.75+Math.cos(V*1.05)*.24,.18,.25+Math.sin(V*1.05)*.24),D.setMatrixAt(V,B);D.count=N,D.instanceMatrix.needsUpdate=!0}}}{let _=new ge;for(let P=0;P<9;P++){let U=-6+P*1.5,H=K(new xt(.9,1),Dd(P),U,.8,-22.3);H.scale.set(1,1.1,.8),_.add(H),_.add(K(new xt(.18,0),wc(P),U+.3,1.4,-21.6))}t.add(_),r.push({minX:-7,maxX:7,minZ:-23.5,maxZ:-21.5})}let T=I0({group:t,colliders:i,boxes:r,addInteract:o,updaters:a}),k=F0({group:t,colliders:i,addInteract:o,updaters:a});{let _=new ge,P="#9C6B44",U=3.2,H=2.4,Z=.18,Y=.9;_.add(K(new me(U+Z,Z,Z),P,0,Y+H,0)),_.add(K(new me(U+Z,Z,Z),P,0,Y,0));for(let z of[-1,1])_.add(K(new me(Z,H,Z),P,z*U/2,Y+H/2,0)),_.add(K(new me(Z,Y,Z),P,z*U/2,Y/2,0));let $=l(zt("FAMILY PHOTO",{w:512,h:110,size:60,bg:"#FFF6E6",radius:55,color:"#B5552B"}),2,.43);$.position.set(0,Y+H+.4,.05),_.add($);for(let z=0;z<18;z++){let G=K(new xt(.16,1),wc(z),-U/2+_e(-.15,.3),Y+_e(0,1.1),_e(-.1,.15));_.add(G)}_.position.set(-11,0,19),_.rotation.y=.5,t.add(_);let j=.5;for(let z of[-1,1])i.push({x:-11+Math.cos(j)*z*U/2,z:19-Math.sin(j)*z*U/2,r:.3});o("photozone","\uAC00\uC871 \uD3EC\uD1A0\uC874","\u{1F4F8}","\uAC00\uC871\uC0AC\uC9C4 \uCC0D\uAE30",-11,19,3,4.6)}{let _=new ge;for(let H of[-1,1]){_.add(K(new Te(.16,.2,3.6,10),"#8F6243",H*2.7,1.8,0));for(let Z=0;Z<7;Z++)_.add(K(new xt(.17,1),wc(Z+(H>0?1:0)),H*2.7+_e(-.2,.2),.4+Z*.45,_e(-.2,.2)))}let P=l(zt(Wt(),{w:768,h:150,size:74,bg:"#FFF6E6",border:"#B07A4F",radius:60,color:"#B5452F"}),5.2,1);P.position.set(0,3.7,.13);let U=P.clone();U.rotation.y=Math.PI,U.position.z=-.13,_.add(K(new me(5.8,1.15,.2),"#8F6243",0,3.7,0),P,U),_.position.set(0,0,34.5),t.add(_),i.push({x:-2.7,z:34.5,r:.3},{x:2.7,z:34.5,r:.3})}h_(t,i,r,a),o("museum",((O=e.museum)==null?void 0:O.title)||"\uAC00\uC871 \uC0AC\uC9C4\uAD00","\u{1F5BC}\uFE0F","\uC0AC\uC9C4\uAD00 \uC785\uC7A5",es.x,es.z,2.6,8.4);function L(){u(),f(),T.refresh(),k.refresh()}function A(_,P,U,H=!1){a.forEach(Z=>Z(P,_)),s.forEach(Z=>{let Y=U?Math.hypot(U.x-Z.pos.x,U.z-Z.pos.z):0;Z.label.visible=!H&&Y<D0,Z.label.material.opacity=so((D0-Y)/9,0,1),Z.label.position.y=Z.baseY+Math.sin(P*2+Z.off)*.12}),U&&T.update(_,P,U,H)}return Ud(t),{group:t,colliders:i,boxes:r,interactables:s,update:A,refresh:L,plantFlower:C,flowerCount:()=>p.length,campfire:S,bed:ct,houses:T,familyTree:k}}function h_(n,e,t,i){var k,L;let r=window.FAMILY,s=new ge,a=20,o=-10.2,l="#F1E0C2",c="#FFF8EC",h="#B5452F";s.add(K(new me(15,.4,13),"#D8C3A0",a,.2,-15.5));for(let A=0;A<3;A++)s.add(K(new me(6-A*.6,.13,.45),"#D8C3A0",a,.065+A*.13,-8.3-A*.45));s.add(K(new me(13,5.8,10),l,a,3.3,-15.3));let u=new Te(.34,.38,5.4,16),d=new me(.9,.25,.9);[14,16.2,18.3,21.7,23.8,26].forEach(A=>{s.add(K(u,c,A,3.1,-9.4)),s.add(K(d,c,A,5.9,-9.4)),s.add(K(d,c,A,.52,-9.4))}),s.add(K(new me(14.2,.6,11.8),c,a,6.3,-14.9));let m=new hi;m.moveTo(-7.4,0),m.lineTo(7.4,0),m.lineTo(0,2.4),m.closePath();let f=K(new Ni(m,{depth:11.8,bevelEnabled:!1}),h,a,6.6,-20.8);s.add(f);let g=K(new Ni((()=>{let A=new hi;return A.moveTo(-6.6,.25),A.lineTo(6.6,.25),A.lineTo(0,2.05),A.closePath(),A})(),{depth:.05,bevelEnabled:!1}),c,a,6.6,-8.98);s.add(g);let p=new hi;p.moveTo(0,-.35),p.bezierCurveTo(-.6,.05,-.35,.5,0,.25),p.bezierCurveTo(.35,.5,.6,.05,0,-.35);let x=K(new Ni(p,{depth:.1,bevelEnabled:!1}),"#F2C14E",a,7.5,-8.9);x.scale.setScalar(.9),s.add(x);let y=new ue(new rt(6,.9),new Ne({map:lt(zt(((k=r.museum)==null?void 0:k.title)||"\uAC00\uC871 \uC0AC\uC9C4\uAD00",{w:1024,h:150,size:84,bg:"#FFF6E6",border:"#B07A4F",radius:75,color:"#B5452F"})),transparent:!0}));y.position.set(a,5.3,o+.02),s.add(y),s.add(K(new me(2.9,3.7,.2),"#8F6243",a,2.25,o));let v=K(new me(2.5,3.4,.22),"#9C6B4E",a,2.1,o+.02);s.add(v);let M=new ue(new rt(2.1,1.1),new Ne({color:"#FFF1C9",transparent:!0,opacity:.9}));M.position.set(a,3,o+.15),s.add(M);let C=K(new Be(.08,8,6),"#E2B865",a+.9,1.9,o+.15);s.add(C);let S=((L=r.museum)==null?void 0:L.themes)||[];[15.2,17.2,22.8,24.8].forEach((A,O)=>{var H;let _=S[O%Math.max(1,S.length)],P=zt(_?[_.emoji]:["\u2665"],{w:128,h:320,size:70,bg:(_==null?void 0:_.color)||"#F4B8C0",radius:16,color:"#fff",sub:(H=_==null?void 0:_.title)==null?void 0:H.slice(0,4),subSize:22}),U=new ue(new rt(.8,2),new Ne({map:lt(P),transparent:!0}));U.position.set(A,3.2,o+.03),s.add(U)});let T=(A,O)=>{s.add(K(new Te(.35,.28,.6,12),"#B9773E",A,.3,O));let _=K(new xt(.5,1),"#93A35A",A,.95,O);s.add(_);for(let P=0;P<4;P++)s.add(K(new xt(.12,0),["#F4A6C6","#FFFFFF","#E07BB5"][P%3],A+_e(-.35,.35),1.1+_e(0,.3),O+.3));e.push({x:A,z:O,r:.5})};T(16.5,-7.8),T(23.5,-7.8);for(let A of[13.45,26.55])for(let O of[-12.5,-15.5,-18.5]){let _=new ue(new rt(1.6,2.2),new Ne({color:"#CDE9F5"}));_.position.set(A+(A<a?-.02:.02),3.4,O),_.rotation.y=A<a?-Math.PI/2:Math.PI/2,s.add(_)}n.add(s),x.userData.dynamic=M.userData.dynamic=!0,i.push(A=>{x.position.y=7.5+Math.sin(A*2)*.06,M.material.opacity=.75+Math.sin(A*3)*.2}),t.push({minX:12.3,maxX:27.7,minZ:-22.2,maxZ:-9})}var B0=new R(1e3,0,0),jt=-3.2,zd=3,O0=3.5,z0=2.7,kd=2.7,u_=ui?768:1024,d_=16,p_=34;function m_(){let n=document.createElement("canvas");n.width=256,n.height=256;let e=n.getContext("2d"),t=["#E7C9A3","#E1C09A","#EBD0AD","#DDBB94"];for(let r=0;r<8;r++)e.fillStyle=t[r%4],e.fillRect(0,r*32,256,32),e.fillStyle="rgba(150,110,80,.18)",e.fillRect(0,r*32,256,2),e.fillRect(r*97%256,r*32,2,32);let i=lt(n);return i.wrapS=i.wrapT=oi,i}function k0(n,e=.6){return new be(n).lerp(new be("#FFFFFF"),e)}function H0(n){var b;let e=window.FAMILY,t=new ge;t.position.copy(B0),t.visible=!1,n.add(t);let i=hs(),r=[],s=[],a=[],o=2;i.forEach((E,F)=>{let q=o,D=q+1.6,X=E.photos.map((B,V)=>({...B,x:q+4.4+V*O0})),N=q+4.4+Math.max(0,E.photos.length-1)*O0+2.2;a.push({theme:E,ti:F,x0:q,x1:N,headerX:D}),s.push({theme:E,ti:F,x:D}),X.forEach(B=>r.push({...B,ti:F})),o=N+1.2});let l=o+3.5,c=-9,h=l-c,u=(c+l)/2,d=m_();d.repeat.set(h/4,14/4);let m=new ue(new rt(h,16),new Ot({map:d,gradientMap:In}));m.rotation.x=-Math.PI/2,m.position.set(u,0,4.6),t.add(m);let f=dt("#FFF6EA"),g=new ue(new me(h,9,.4),f);g.position.set(u,4.5,jt-.2),t.add(g);for(let E of[c,l]){let F=new ue(new me(.4,9,16),f);F.position.set(E,4.5,4.6),t.add(F)}let p=new ue(new rt(h,16),dt("#FFFDF8"));p.rotation.x=Math.PI/2,p.position.set(u,8.6,4.6),t.add(p);let x=new ue(new me(h,.18,.12),dt("#B07A4F"));x.position.set(u,5.5,jt+.06),t.add(x);let y=new ue(new me(h,.3,.1),dt("#C9A27E"));y.position.set(u,.15,jt+.05),t.add(y);let v=-6.2,M=new ue(new me(2.9,3.9,.12),dt("#B07A4F"));M.position.set(v,1.95,jt+.06);let C=new ue(new me(2.5,3.6,.1),dt("#9C6B4E"));C.position.set(v,1.8,jt+.14);let S=new ue(new rt(1.8,.5),new Ne({map:lt(zt("\u{1F6AA} \uB098\uAC00\uB294 \uBB38",{w:360,h:100,size:46,bg:"#FFFDF8",radius:50,color:"#4A3B38"})),transparent:!0}));S.position.set(v,4.3,jt+.08),t.add(M,C,S);let T=document.createElement("canvas");T.width=900,T.height=700;{let E=T.getContext("2d");E.fillStyle="#FFFDF8",Zn(E,0,0,900,700,40),E.fill(),E.strokeStyle="#B07A4F",E.lineWidth=8,Zn(E,20,20,860,660,30),E.stroke(),E.textAlign="center",E.fillStyle="#E07B39",E.font='28px "Gowun Dodum"',E.fillText("P H O T O   M U S E U M",450,110),E.fillStyle="#4A3B38",E.font='74px "Jua"',E.fillText(((b=e.museum)==null?void 0:b.title)||"\uC6B0\uB9AC \uAC00\uC871 \uC0AC\uC9C4\uAD00",450,210),E.font='36px "Jua"',E.fillStyle="#7C6A66",E.fillText(`${e.name||"\uC6B0\uB9AC"} \uB9C8\uC744`,450,280),E.font='30px "Gowun Dodum"',i.forEach((F,q)=>E.fillText(`${F.emoji}  ${F.title} \xB7 ${F.photos.length}\uC7A5`,450,370+q*52)),E.fillStyle="#B5552B",E.font='28px "Gowun Dodum"',E.fillText("\u2192 \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC5B4\uAC00\uBA70 \uAD00\uB78C\uD574 \uC8FC\uC138\uC694",450,650)}let k=new ue(new rt(4.2,3.27),new Ne({map:lt(T)}));k.position.set(-1.6,3,jt+.05),t.add(k);let L=new me(.9,.12,.35),A=new Ne({color:"#FFF1C9"});a.forEach(E=>{let F=E.theme,q=E.x1-E.x0,D=k0(F.color,.55),X=new ue(new rt(q,1.4),new Ot({color:D,gradientMap:In}));X.position.set((E.x0+E.x1)/2,.7,jt+.02),t.add(X);let N=new ue(new rt(q,.5),X.material);N.position.set((E.x0+E.x1)/2,6,jt+.02),t.add(N);let B=new ue(new rt(q-.6,3.2),new Ot({color:k0(F.color,.3),gradientMap:In}));B.rotation.x=-Math.PI/2,B.position.set((E.x0+E.x1)/2,.01,.4),t.add(B);let V=document.createElement("canvas");V.width=560,V.height=800;let ee=V.getContext("2d");ee.fillStyle=F.color,Zn(ee,0,0,560,800,36),ee.fill(),ee.fillStyle="rgba(255,255,255,.9)",Zn(ee,24,24,512,752,26),ee.fill(),ee.textAlign="center",ee.textBaseline="middle",ee.font="150px serif",ee.fillText(F.emoji||"\u{1F4F7}",280,190),ee.fillStyle="#4A3B38",ee.font='66px "Jua"',ee.fillText(F.title,280,360),ee.fillStyle="#7C6A66",ee.font='30px "Gowun Dodum"',f_(ee,F.subtitle||"",280,450,440,44),ee.fillStyle="#B5552B",ee.font='28px "Gowun Dodum"',ee.fillText(`\uC0AC\uC9C4 ${F.photos.length}\uC7A5`,280,700);let ie=new ue(new rt(2.3,3.29),new Ne({map:lt(V)}));ie.position.set(E.headerX,3,jt+.05),t.add(ie);let w=zt([`${F.emoji} ${F.title}`],{w:640,h:140,size:64,bg:F.color,radius:30,color:"#FFFFFF"}),ae=new ue(new rt(3.2,.7),new Ne({map:lt(w),transparent:!0}));if(ae.position.set(E.headerX+.4,6.9,jt+.1),t.add(ae),E.x1-E.x0>9){let J=(E.x0+E.x1)/2,Q=new ue(new me(2.4,.2,.7),dt("#B98A66"));Q.position.set(J,.55,4.3);let le=new ue(new me(.15,.5,.6),dt("#8C6B55"));le.position.set(J-1,.25,4.3);let pe=le.clone();pe.position.x=J+1,t.add(Q,le,pe)}});let O=new rt(1,1),_=new me(1,1,.12),P=[dt("#B07A4F"),dt("#FFFFFF"),dt("#B98A66")],U=new Ne({color:"#F3E9DA"});r.forEach((E,F)=>{let q=new ue(_,P[E.ti%P.length]),D=new ue(O,U);q.position.set(E.x,zd,jt+.07),D.position.set(E.x,zd,jt+.135),t.add(q,D);let X=new ue(L,A);X.position.set(E.x,4.9,jt+.25),t.add(X),E.frame=q,E.photo=D,E.state="idle",H(E,2.2,2.2)});function H(E,F,q){E.photo.scale.set(F,q,1),E.frame.scale.set(F+.26,q+.26,1)}function Z(E){if(E.placard){E.placard.visible=!0;return}let F=`${String(E.idx+1).padStart(2,"0")}${E.caption?" \xB7 "+E.caption:""}`,q=zt(F.length>22?F.slice(0,21)+"\u2026":F,{w:512,h:90,size:34,bg:"#FFFDF8",radius:12,color:"#4A3B38",font:"Gowun Dodum"}),D=new ue(new rt(1.8,.32),new Ne({map:lt(q),transparent:!0})),X=zd-E.photo.scale.y/2-.45;D.position.set(E.x,X,jt+.06),t.add(D),E.placard=D}function Y(E){var F;E.photo.material!==U&&((F=E.photo.material.map)==null||F.dispose(),E.photo.material.dispose()),E.photo.material=U,E.state="idle",E.placard&&(E.placard.visible=!1),H(E,2.2,2.2)}let $=0;function j(E){E.state="loading",$++;let F=new Image;F.decoding="async";let q=setTimeout(()=>{E.state==="loading"&&(F.onload=F.onerror=null,z(E,_r(E.theme,E.idx,E.src),1,!1))},8e3);F.onload=()=>{clearTimeout(q);let D=Math.min(1,u_/Math.max(F.width,F.height)),X=document.createElement("canvas");X.width=Math.round(F.width*D),X.height=Math.round(F.height*D);let N=X.getContext("2d");N.drawImage(F,0,0,X.width,X.height);try{N.getImageData(0,0,1,1),z(E,X,F.width/F.height,!0)}catch{let V=Math.round(600/(F.width/F.height));z(E,_r(E.theme,E.idx,"(\uD30C\uC77C\uB85C \uC5F4\uC5C8\uC744 \uB54C\uB9CC \uBCF4\uC774\uB294 \uC548\uB0B4)",600,V,"\u{1F50D} \uD06C\uAC8C \uBCF4\uAE30\uB97C \uB20C\uB7EC \uD655\uC778\uD558\uC138\uC694"),F.width/F.height,!0)}},F.onerror=()=>{clearTimeout(q),z(E,_r(E.theme,E.idx,E.src),1,!1)},F.src=xr(E)}function z(E,F,q,D){$--,E.state="done",E.ok=D,E.photo.material!==U&&E.photo.material.dispose(),E.photo.material=new Ne({map:lt(F)});let X=z0,N=z0/q;N>kd&&(N=kd,X=kd*q),H(E,X,N),Z(E)}let G=B0,re=new R(G.x+v,0,1.2);return{group:t,themes:i,sections:a,entries:r,spawn:re,themeStart(E){let F=a[E];return new R(G.x+F.headerX+1.2,0,1.2)},clamp(E){E.x=Math.min(G.x+l-.8,Math.max(G.x+c+.8,E.x)),E.z=Math.min(G.z+3.2,Math.max(G.z+jt+1,E.z))},currentTheme(E){let F=E.x-G.x,q=a.find(D=>F>=D.x0-.6&&F<=D.x1+.6);return q?q.ti:-1},nearest(E){let F=E.x-G.x;if(Math.abs(F-v)<1.8)return{type:"exit",emoji:"\u{1F6AA}",action:"\uBC16\uC73C\uB85C \uB098\uAC00\uAE30"};if(Math.abs(F- -1.6)<2)return{type:"welcome",emoji:"\u{1F4DA}",action:"\uC804\uCCB4 \uC568\uBC94 \uBCF4\uAE30"};let q=s.find(N=>Math.abs(F-N.x)<1.3);if(q)return{type:"header",ti:q.ti,emoji:q.theme.emoji||"\u{1F4DA}",action:`${q.theme.title} \uC568\uBC94`};let D=null,X=1.75;for(let N of r){let B=Math.abs(F-N.x);B<X&&(X=B,D=N)}return D?{type:"photo",entry:D,ti:D.ti,idx:D.idx,emoji:"\u{1F50D}",action:"\uD06C\uAC8C \uBCF4\uAE30"}:null},update(E,F,q){let D=q.x-G.x;for(let X of r){let N=Math.abs(D-X.x);X.state==="idle"&&N<d_&&$<3?j(X):X.state==="done"&&N>p_&&Y(X)}}}}function f_(n,e,t,i,r,s){let a=e.split(" "),o="",l=i;for(let c of a){let h=o?o+" "+c:c;n.measureText(h).width>r&&o?(n.fillText(o,t,l),o=c,l+=s):o=h}o&&n.fillText(o,t,l)}var Pc=window.FAMILY,kt=n=>document.querySelector(n),g_=kt("#phone"),Rt={w:1,h:1,left:0,top:0},j0=()=>Rt.w/Rt.h<.8,y_=n=>new Promise(e=>setTimeout(e,n)),pt,mt,Dn,Kt,fo,Fn,We,Ht,xn,ts,Zd=[],Y0=[],gi=!1,At=null,G0=-2,ns=1,$d=!1,is=0,po=0,V0=0;function Jd(){let n=Math.min(devicePixelRatio||1,ui?1.75:1.5);return is>=1&&(n=Math.min(n,1.25)),is>=2&&(n=1),document.body.classList.contains("wide")&&(n=Math.min(n,1)),n}function v_(){try{let n=pt.getContext(),e=n.getExtension("WEBGL_debug_renderer_info"),t=e?String(n.getParameter(e.UNMASKED_RENDERER_WEBGL)):"";return/Intel|Iris|UHD|HD Graphics|SwiftShader|llvmpipe|Mali-|Adreno \(TM\) [1-5]|PowerVR/i.test(t)}catch{return!1}}var fi={outfit:"#8FB8DE",hair:"#5A3A2A",longHair:!1},rs="day",Un=null,Uc=new pc,x_=new R(16,34,14),W={pos:new R(0,0,31),vel:new R,yaw:Math.PI,y:0,vy:0,mode:"out",busy:!1,doorCooldown:0,target:null,via:[],pending:null,targetT:0,moveT:0,stuckT:0,swoopT:0,posing:null},Kn=new Set,ca={x:0,y:0},mr={x:-11,z:19,ang:.5},__=["family","mailbox","directions","campfire","question","calendar","poll","quiz","house","tree","photozone","museum"],Z0=n=>{try{dispatchEvent(new CustomEvent("wv:visit",{detail:n}))}catch{}};async function J0({character:n,onProgress:e=()=>{}}={}){var a;n&&(fi={...fi,...n}),await Promise.race([Promise.all(['40px "Jua"','40px "Gowun Dodum"','40px "Gaegu"'].map(o=>document.fonts.load(o))),new Promise(o=>setTimeout(o,3e3))]),e(35),eg();let t=ui&&(navigator.deviceMemory&&navigator.deviceMemory<=2||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4);pt=new Ja({antialias:!t,powerPreference:"high-performance"}),ns=Jd(),pt.setPixelRatio(ns),pt.shadowMap.enabled=!0,pt.shadowMap.type=fc,pt.outputColorSpace=bt,kt("#app").appendChild(pt.domElement),pt.domElement.addEventListener("webglcontextlost",o=>{o.preventDefault(),$d=!0,et("\uD654\uBA74\uC744 \uB2E4\uC2DC \uADF8\uB9AC\uB294 \uC911\u2026")}),pt.domElement.addEventListener("webglcontextrestored",()=>{$d=!1,pt.setPixelRatio(ns),pt.setSize(Rt.w,Rt.h),ha()}),mt=new Jl,mt.fog=new Zl(on.day.fog,50,150),Dn=new Jt(60,1,.1,900),fo=new uc(on.day.hemi,on.day.ground,on.day.hemiI),mt.add(fo),Kt=new dc(on.day.sun,on.day.sunI),Kt.castShadow=!0;let i=ui?1024:1536;Kt.shadow.mapSize.set(i,i),Object.assign(Kt.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:90}),Kt.shadow.bias=-5e-4,Kt.shadow.normalBias=.03,mt.add(Kt,Kt.target),We=N0(mt),Fn=C0(mt,(o,l)=>We.colliders.some(c=>Math.hypot(o-c.x,l-c.z)<c.r+.8)||We.boxes.some(c=>o>c.minX-.8&&o<c.maxX+.8&&l>c.minZ-.8&&l<c.maxZ+.8)),e(65),Ht=H0(mt),e(85),Zd=[...Fn.colliders,...We.colliders],Y0=We.boxes,W0(!1),We.campfire.setCount(ng());let s=null;if(addEventListener("family:data",()=>{clearTimeout(s),s=setTimeout(()=>{W0(!1),We.refresh()},80)}),addEventListener("family:read",()=>We.houses.refresh()),addEventListener("family:heart",o=>{var l;return M_((l=o.detail)==null?void 0:l.to)}),addEventListener("family:water",o=>b_(o.detail)),addEventListener("family:look",o=>{Hd(o.detail||{}),We.houses.refresh()}),addEventListener("family:me",()=>{Hd(Si()),We.refresh()}),addEventListener("family:season",o=>{let l=Fn.setSeason(o.detail);W.mode==="out"&&kc(l),We.refresh()}),ts=new ue(new Zr(.32,.48,24),new Ne({color:"#E07B39",transparent:!0,opacity:0,depthWrite:!1})),ts.rotation.x=-Math.PI/2,ts.position.y=.05,mt.add(ts),Q0(),w_(),F_(),kt("#btn-shot").onclick=()=>Fc(!1),(a=kt("#btn-tour"))==null||a.addEventListener("click",()=>Hi("\uD22C\uC5B4\uB97C \uBA48\uCDC4\uC5B4\uC694. \uB9C8\uC74C\uB300\uB85C \uB458\uB7EC\uBCF4\uC138\uC694")),addEventListener("resize",go),document.addEventListener("visibilitychange",()=>{document.hidden||Uc.getDelta()}),go(),Ic(S_()),(t||v_())&&rg(1),ha(),sg(),Pc.demoPhotos){let o=Ht.themes.flatMap(h=>h.photos),l=window.requestIdleCallback||(h=>setTimeout(h,120)),c=()=>{let h=o.shift();if(h){try{xr(h)}catch{}l(c)}};l(c)}return/debug/.test(location.hash)&&(window.__wv={goTo:o=>Qd(We.interactables.find(l=>l.id===o)),takePhoto:Fc,enterMuseum:zc,exitMuseum:Hc,cycleTime:Xd,startTour:X0,stopTour:Hi,applyTime:Ic,state:W,props:We,flowerCount:()=>We.flowerCount(),interact:o=>Bc(We.interactables.find(l=>l.id===o)),npcVisible:o=>{var l;return!!((l=We.houses.npc(o))!=null&&l.root.visible)},treeStage:()=>We.familyTree.refresh().stage,current:()=>(At==null?void 0:At.id)||"",pos:()=>[W.pos.x,W.pos.z],setSeason:o=>wd(o),season:()=>Fn.season,stats:()=>{var h;let o=0,l=0;mt.traverse(u=>{if(u.isMesh||u.isSprite||u.isPoints||u.isLine){o++;let d=!0,m=u;for(;m;){if(!m.visible){d=!1;break}m=m.parent}d&&l++}});let c=pt.info;return{calls:c.render.calls,tris:c.render.triangles,geos:c.memory.geometries,tex:c.memory.textures,programs:(h=c.programs)==null?void 0:h.length,objects:o,visible:l,dpr:pt.getPixelRatio(),level:is}}}),{themes:Ht.themes,start:E_,setCharacter:Hd,enterMuseum:()=>zc(),letterSent:K0,takePhoto:o=>Fc(!0,o),resize:()=>{go(),ha()},startTour:X0,stopTour:Hi,isTouring:()=>!!Un,setTime:Ic,getTime:()=>rs,cycleTime:Xd}}function E_({hint:n=!0}={}){gi=!0,W.swoopT=1.8,mo=Dc=0,Xe.saved()&&Xe.setEnabled(!0),n&&setTimeout(()=>et("\u{1F446} \uD654\uBA74\uC744 \uB04C\uBA74 \uAC77\uACE0, \uC774\uB984\uD45C\uB97C \uB204\uB974\uBA74 \uCC3E\uC544\uAC00\uC694",4200),900);let e=rs==="night"?"\u{1F319} \uBC24\uC5D0 \uC654\uB124\uC694. \uAC00\uB85C\uB4F1\uC744 \uCF1C \uB450\uC5C8\uC5B4\uC694":rs==="dusk"?"\u{1F307} \uB178\uC744 \uC9C0\uB294 \uB9C8\uC744\uC774\uC5D0\uC694. \uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694":null;e&&setTimeout(()=>et(e,3600),5600);let t=gs();t.length&&setTimeout(()=>{Ki(["\u{1F382}","\u{1F389}","\u{1F388}","\u{1F497}","\u2728"]),Xe.sfx("birthday"),et(`\u{1F382} \uC624\uB298\uC740 ${t.map(i=>i.role||i.name).join(", ")} \uC0DD\uC77C\uC774\uC5D0\uC694! \uC9D1 \uC55E\uC5D0 \uCF00\uC774\uD06C\uAC00 \uC788\uC5B4\uC694`,4600)},2400)}function Hd(n){fi={...fi,...n},xn&&Q0()}var Nc=new Set,qd=n=>n.id||`${n.name}|${n.time||""}`;function W0(n){at("letters").slice().reverse().forEach(e=>{let t=qd(e);Nc.has(t)||(Nc.add(t),We.plantFlower(e,n))})}function K0(n){if(n&&Nc.has(qd(n)))return;n&&Nc.add(qd(n));let e=We.plantFlower(n||{name:"\uC190\uB2D8",who:"guest"},!0);pr(mt,new R(W.pos.x,2.2+W.y,W.pos.z),10,"\u{1F48C}"),e&&W.mode==="out"&&!Un&&(W.target=new R(ct.x-ct.r-1,0,ct.z+.6),W.via=Kd(W.pos,W.target),W.pending=null,W.targetT=12,W.moveT=0,setTimeout(()=>et("\u{1F337} \uBCF4\uB0B8 \uD3B8\uC9C0\uAC00 \uAC00\uC871 \uC815\uC6D0\uC5D0 \uAF43\uC73C\uB85C \uD53C\uC5C8\uC5B4\uC694",3200),500))}function M_(n){var t;let e=We.houses.spot(n);!e||W.mode!=="out"||(pr(mt,new R(e.npcX,2.4,e.z),12),(t=We.houses.npc(n))==null||t.wave(1.6))}function b_({grew:n}={}){if(We.familyTree.refresh(),W.mode!=="out")return;let e=We.familyTree.top,t=Math.hypot(W.pos.x-e.x,W.pos.z-e.z)<8,i=()=>{pr(mt,e.clone().setY(2.2),n?18:8,n?"\u2728":"\u{1F4A7}"),We.familyTree.refresh()};if(t){xn.wave(1);for(let r=0;r<3;r++)setTimeout(()=>Tc(mt,new R(W.pos.x,1.6,W.pos.z),e,"\u{1F4A7}",.6,r===2?i:null),r*140)}else i()}function Q0(){xn&&mt.remove(xn.root),xn=co({type:"player",outfit:fi.outfit,hair:fi.hair,longHair:!!fi.longHair,glasses:!!fi.glasses,hat:fi.hat||"",kid:!!fi.kid}),mt.add(xn.root)}function S_(){let n=location.hash;if(/night/.test(n))return"night";if(/sunset|dusk/.test(n))return"dusk";if(/day|morning/.test(n))return"day";try{let t=localStorage.getItem("family-time");if(on[t])return t}catch{}if(Pc.skyMode&&on[Pc.skyMode])return Pc.skyMode;let e=new Date(ei().toLocaleString("en-US",{timeZone:"Asia/Seoul"})).getHours();return e>=6&&e<16?"day":e<19?"dusk":"night"}function kc(n){mt.fog.color.set(n.fog),Kt.color.set(n.sun),Kt.intensity=n.sunI,fo.color.set(n.hemi),fo.groundColor.set(n.ground),fo.intensity=n.hemiI}function Ic(n){rs=on[n]?n:"day";let e=Fn.setTime(rs);return W.mode==="out"&&kc(e),rs}function Xd(){let n=["day","dusk","night"],e=n[(n.indexOf(rs)+1)%n.length];Ic(e);try{localStorage.setItem("family-time",e)}catch{}return et(e==="night"?"\u{1F319} \uBC24 \uB9C8\uC744\uC774\uC5D0\uC694. \uAC00\uB85C\uB4F1\uC774 \uCF1C\uC84C\uC5B4\uC694":e==="dusk"?"\u{1F307} \uB178\uC744\uC774 \uC9C0\uACE0 \uC788\uC5B4\uC694":"\u2600\uFE0F \uB2E4\uC2DC \uD658\uD55C \uB0AE\uC774\uC5D0\uC694"),e}function eg(){let n=g_.getBoundingClientRect();Rt.w=Math.max(1,n.width),Rt.h=Math.max(1,n.height),Rt.left=n.left,Rt.top=n.top}function go(){eg(),Dn.aspect=Rt.w/Rt.h,Dn.fov=j0()?W.mode==="museum"?55:64:50,Dn.updateProjectionMatrix(),ns=Jd(),pt.setPixelRatio(ns),pt.setSize(Rt.w,Rt.h)}function w_(){addEventListener("keydown",a=>{wn()||/INPUT|TEXTAREA/.test(a.target.tagName)||document.body.classList.contains("reading")||(Kn.add(a.code),/Key[WASD]|Arrow/.test(a.code)&&(document.body.classList.add("moved"),Hi()),a.code==="Space"&&($0(),a.preventDefault()),(a.code==="KeyE"||a.code==="Enter")&&Bc(),a.code==="KeyH"&&q0(),a.code==="KeyN"&&Xd())}),addEventListener("keyup",a=>Kn.delete(a.code)),addEventListener("blur",()=>Kn.clear());let n=pt.domElement,e=kt("#joy"),t=e.querySelector(".knob"),i=48,r=null;n.addEventListener("pointerdown",a=>{if(!(r||!gi)){r={id:a.pointerId,sx:a.clientX,sy:a.clientY,ax:a.clientX,ay:a.clientY,drag:!1,t:performance.now()};try{n.setPointerCapture(a.pointerId)}catch{}}}),n.addEventListener("pointermove",a=>{if(!r||a.pointerId!==r.id)return;if(!r.drag){if(Math.hypot(a.clientX-r.sx,a.clientY-r.sy)<10)return;r.drag=!0,W.target=null,W.pending=null,Hi(),e.classList.add("active"),document.body.classList.add("moved")}let o=a.clientX-r.ax,l=a.clientY-r.ay,c=Math.hypot(o,l);c>i&&(r.ax=a.clientX-o/c*i,r.ay=a.clientY-l/c*i,o=a.clientX-r.ax,l=a.clientY-r.ay),ca.x=o/i,ca.y=l/i,e.style.left=`${r.ax-Rt.left}px`,e.style.top=`${r.ay-Rt.top}px`,t.style.transform=`translate(${o}px, ${l}px)`});let s=a=>{if(!r||a.pointerId!==r.id)return;let o=!r.drag&&performance.now()-r.t<450&&a.type==="pointerup";r=null,ca.x=ca.y=0,e.classList.remove("active"),e.style.left=e.style.top="",t.style.transform="",o&&R_(a.clientX,a.clientY)};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),Gd(kt("#btn-action"),()=>Bc()),Gd(kt("#btn-jump"),()=>$0()),Gd(kt("#btn-heart"),()=>q0())}function Gd(n,e){let t=0;n.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0||(t=performance.now(),i.preventDefault(),e())}),n.addEventListener("click",()=>{performance.now()-t>500&&e()})}function Kd(n,e){let t=[],i=n;for(let r=0;r<3;r++){let s=T_(i,e);if(!s)break;t.push(s),i=s}return t}function T_(n,e){let t=e.x-n.x,i=e.z-n.z,r=t*t+i*i;if(r<1)return null;let s=null;for(let d of Zd){if(d.r<.8)continue;let m=((d.x-n.x)*t+(d.z-n.z)*i)/r;if(m<=.02||m>=.98)continue;let f=n.x+t*m,g=n.z+i*m;Math.hypot(d.x-f,d.z-g)<d.r+mi+.3&&(!s||m<s.t)&&(s={c:d,t:m,px:f,pz:g})}if(!s)return null;let{c:a}=s,o=Math.sqrt(r),l=s.px-a.x,c=s.pz-a.z,h=Math.hypot(l,c);h<.001&&(l=-i/o,c=t/o,h=1);let u=a.r+mi+1.1;return new R(a.x+l/h*u,0,a.z+c/h*u)}function Qd(n){let e=W.pos.x-n.pos.x,t=W.pos.z-n.pos.z,i=Math.hypot(e,t)||1,r=Math.max(.5,n.r-.6);W.target=new R(n.pos.x+e/i*r,0,n.pos.z+t/i*r),W.via=W.mode==="out"?Kd(W.pos,W.target):[],W.pending=n,W.targetT=20,W.moveT=0,W.stuckT=0}function jd(n){ts.position.set(n.x,.05,n.z),po=1}var Vd=new mc,A_=new $n(new R(0,1,0),0);function R_(n,e){if(wn()||W.busy)return;Hi();let t=new he((n-Rt.left)/Rt.w*2-1,-((e-Rt.top)/Rt.h)*2+1);if(Vd.setFromCamera(t,Dn),W.mode==="out"){let r=Vd.intersectObjects(We.interactables.map(s=>s.label))[0];if(r){let s=We.interactables.find(a=>a.label===r.object);Qd(s),jd(s.pos),Ke(8);return}}let i=new R;Vd.ray.intersectPlane(A_,i)&&(W.target=i,W.via=W.mode==="out"?Kd(W.pos,i):[],W.pending=null,W.targetT=10,W.moveT=0,W.stuckT=0,jd(i))}var tg="family-potatoes",ng=()=>{try{return+localStorage.getItem(tg)||0}catch{return 0}};function C_(n){if(n===1)return"\u{1F360} \uCCAB \uACE0\uAD6C\uB9C8\uB97C \uB123\uC5C8\uC5B4\uC694. \uB178\uB987\uB178\uB987 \uC775\uB294 \uC911\u2026";if(n%5===0)return`\u{1F360} \uBC8C\uC368 ${n}\uAC1C\uC9F8! \uC624\uB298 \uC800\uB141\uC740 \uAD70\uACE0\uAD6C\uB9C8 \uD30C\uD2F0 \u{1F389}`;let e=["\uD638\uD638 \uBD88\uC5B4 \uBA39\uC73C\uBA74 \uAFC0\uB9DB\uC774\uC5D0\uC694","\uAECD\uC9C8\uAE4C\uC9C0 \uB2EC\uCF64\uD558\uAC8C \uC775\uC5C8\uC5B4\uC694","\uBAA8\uB2E5\uBD88\uC774 \uB530\uB73B\uD574\uC694. \uC7A0\uAE50 \uC26C\uC5C8\uB2E4 \uAC00\uC694","\uD558\uB098\uB294 \uD560\uBA38\uB2C8 \uBAAB\uC73C\uB85C \uB0A8\uACA8 \uB458\uAC8C\uC694","\uD0C0\uB2E5\uD0C0\uB2E5, \uBD88\uAF43\uC774 \uCDA4\uC744 \uCDB0\uC694"];return`\u{1F360} ${e[Math.floor(Math.random()*e.length)]}`}var Wd={family:()=>qo(),directions:Aa,question:()=>Ir(),calendar:()=>Ia(),poll:()=>Xo(),quiz:Ra,mailbox:()=>kn(K0),tree:()=>jo(),house:n=>{let e=We.houses.npc(n.member);e&&n.member!==Me()&&(e.wave(2),pr(mt,new R(e.root.position.x,2.4,e.root.position.z),6)),setTimeout(()=>{!wn()&&W.mode==="out"&&As(n.member)},n.member===Me()?0:450)},campfire:()=>{xn.wave(.8),Ke(30),We.campfire.toss(mt,new R(W.pos.x,1.4+W.y,W.pos.z),()=>{let n=ng()+1;try{localStorage.setItem(tg,String(n))}catch{}We.campfire.setCount(n),pr(mt,new R(0,2.2,4),6,"\u2728"),Xe.sfx("crackle"),et(C_(n))})},photozone:()=>rn().some(n=>n.id!==Me())?mm():Fc(!0,[]),museum:()=>zc()};function L_(){let n=W.pos;if(W.mode==="museum")return Ht.nearest(n);let e=null,t=1/0;for(let i of We.interactables){let r=Math.hypot(n.x-i.pos.x,n.z-i.pos.z);r<i.r&&r<t&&(t=r,e=i)}return e}function Bc(n=At){var t;if(W.busy||wn())return;if(!n){xn.wave(1.4);return}if(Ke(15),Xe.sfx("pop"),W.mode==="museum"){n.type==="exit"?Hc():n.type==="welcome"?Lr(Ht.themes):n.type==="header"?Lr(Ht.themes,n.ti):n.type==="photo"&&Wo(Ht.themes,n.ti,n.idx);return}W.yaw=Math.atan2(n.pos.x-W.pos.x,n.pos.z-W.pos.z);let e=n.id.startsWith("house:")?"house":n.id;Z0(e),(t=Wd[e])==null||t.call(Wd,n)}function P_(){var t,i,r;let n=kt("#btn-action"),e=At?(At.id||At.type)+((r=(i=(t=At.entry)==null?void 0:t.src)!=null?i:At.ti)!=null?r:""):"";n.dataset.key!==e&&(e&&!n.dataset.key&&(Ke(8),Xe.sfx("chime")),n.dataset.key=e,n.classList.toggle("ready",!!At),n.querySelector(".em").textContent=At?At.emoji:"\u{1F44B}",n.querySelector(".lb").textContent=At?At.action:"\uC778\uC0AC\uD558\uAE30")}function $0(){W.y<=.001&&!wn()&&!W.busy&&(W.vy=6.5,Xe.sfx("jump"))}function q0(){pr(mt,new R(W.pos.x,2.2+W.y,W.pos.z),8),xn.wave(1),Xe.sfx("heart"),W.mode==="out"&&(At!=null&&At.member)&&At.member!==Me()&&wh(At.member)}function X0(){!gi||W.mode!=="out"||W.busy||(Un={i:0,waitT:.4},document.body.classList.add("touring"),et("\u{1F6B6} \uC790\uB3D9 \uD22C\uC5B4 \uC2DC\uC791! \uD654\uBA74\uC744 \uB04C\uBA74 \uC5B8\uC81C\uB4E0 \uBA48\uCDB0\uC694",3200))}function Hi(n){Un&&(Un=null,document.body.classList.remove("touring"),W.pending&&(W.target=null,W.pending=null),n&&et(n))}function I_(){let n=__[Un.i++];if(!n){Hi(),et("\u{1F389} \uD22C\uC5B4 \uB05D! \uC774\uC81C \uB9C8\uC74C\uB300\uB85C \uB458\uB7EC\uBCF4\uC138\uC694",3600),Ki(),Xe.sfx("tada");return}let e=n==="house"?We.interactables.find(t=>t.member&&t.member!==Me()):We.interactables.find(t=>t.id===n);e&&(Qd(e),jd(e.pos),Un.waitT=n==="campfire"?2.4:n==="house"?1.2:.9)}var Oc=n=>new Promise(e=>{kt("#fade").classList.toggle("on",n),setTimeout(e,460)});function F_(){let n=kt("#museum-bar");n.innerHTML="",Ht.themes.forEach((t,i)=>{let r=document.createElement("button");r.className="chip",r.dataset.ti=i,r.textContent=`${t.emoji} ${t.title}`,r.onclick=()=>{W.pos.copy(Ht.themeStart(i)),W.target=null,Ke(8),ha()},n.appendChild(r)});let e=document.createElement("button");e.className="chip",e.textContent="\u{1F4DA} \uC804\uCCB4 \uC568\uBC94",e.onclick=()=>Lr(Ht.themes),n.append(e),kt("#btn-exit").onclick=()=>Hc()}var Yd=()=>Hc(!0);async function zc(n=-1){if(W.mode==="museum"||W.busy)return;let e=!!Un;Hi(),Z0("museum"),W.busy=!0,await Oc(!0),W.mode="museum",Fn.group.visible=We.group.visible=!1,Ht.group.visible=!0,Kt.castShadow=!1,kc(on.day),W.pos.copy(n>=0?Ht.themeStart(n):Ht.spawn),W.vel.set(0,0,0),W.target=null,W.yaw=Math.PI/2,document.body.classList.add("in-museum"),go(),ha(),Ji(Yd),await Oc(!1),W.busy=!1,et(e?"\u{1F3C1} \uD22C\uC5B4\uC758 \uB9C8\uC9C0\uB9C9, \uC0AC\uC9C4\uAD00\uC774\uC5D0\uC694. \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC73C\uBA70 \uAD6C\uACBD\uD558\uC138\uC694":"\u{1F449} \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC73C\uBA70 \uC0AC\uC9C4\uC744 \uAD6C\uACBD\uD558\uC138\uC694",e?4200:2400)}async function Hc(n=!1){if(W.mode==="museum"){if(W.busy){n&&Ji(Yd);return}n||Rr(Yd),W.busy=!0,await Oc(!0),W.mode="out",Fn.group.visible=We.group.visible=!0,Ht.group.visible=!1,Kt.castShadow=pt.shadowMap.enabled,kc(Fn.palette()),W.pos.set(es.x,0,es.z+2.4),W.vel.set(0,0,0),W.target=null,W.yaw=0,W.doorCooldown=1.5,document.body.classList.remove("in-museum"),go(),ha(),await Oc(!1),W.busy=!1}}function D_(n){let e=n.width,t=n.height,i=Math.round(e*.05),r=Math.round(e*.22),s=document.createElement("canvas");s.width=e+i*2,s.height=t+i+r;let a=s.getContext("2d");a.fillStyle="#FFF8EC",a.fillRect(0,0,s.width,s.height),a.drawImage(n,i,i),a.fillStyle="#B5552B",a.textAlign="center",a.font=`${Math.round(r*.32)}px "Jua", sans-serif`,a.fillText(Wt(),s.width/2,t+i+r*.45),a.fillStyle="#7C6A66",a.font=`${Math.round(r*.15)}px "Gowun Dodum", sans-serif`,a.fillText(`${cs(ei()).date} \xB7 \uC6B0\uB9AC \uAC00\uC871 \uB9C8\uC744\uC5D0\uC11C`,s.width/2,t+i+r*.74);let o=document.createElement("canvas");o.width=Math.round(s.width*1.12),o.height=Math.round(s.height*1.1);let l=o.getContext("2d");l.fillStyle="#EAD7BB",l.fillRect(0,0,o.width,o.height),l.save(),l.translate(o.width/2,o.height/2),l.rotate(-.03),l.shadowColor="rgba(80,40,30,.3)",l.shadowBlur=e*.05,l.shadowOffsetY=e*.02,l.drawImage(s,-s.width/2,-s.height/2),l.restore(),l.fillStyle="rgba(255,236,170,.8)";for(let[c,h,u]of[[o.width*.09,o.height*.055,-.5],[o.width*.91,o.height*.055,.5]])l.save(),l.translate(c,h),l.rotate(u),l.fillRect(-e*.11,-e*.03,e*.22,e*.06),l.restore();return o}async function Fc(n=!1,e=[]){if(W.busy||wn())return;let t=null;W.busy=!0;try{if(n){Hi(),W.target=null,W.pending=null;let o=Math.sin(mr.ang),l=Math.cos(mr.ang),c=Math.cos(mr.ang),h=-Math.sin(mr.ang),u=mr.x+o*.9,d=mr.z+l*.9;W.pos.set(u,0,d),W.vel.set(0,0,0),W.yaw=mr.ang,W.y=0,W.vy=0;let m=e.map(p=>We.houses.npc(p)).filter(Boolean).slice(0,5),f=m.map(p=>({c:p,p:p.root.position.clone(),r:p.root.rotation.y,v:p.root.visible}));m.forEach((p,x)=>{let y=x%2===0?1:-1,v=Math.floor(x/2)+1,M=y*[0,.95,1.8,2.55][v],C=[0,0,-.45,-.9][v];p.root.position.set(u+c*M+o*C,0,d+h*M+l*C),p.root.rotation.y=mr.ang,p.head.rotation.y=0,p.root.visible=!0}),t=()=>f.forEach(p=>{p.c.root.position.copy(p.p),p.c.root.rotation.y=p.r,p.c.root.visible=p.v}),W.posing={x:u,z:d,nx:o,nz:l,back:m.length<=1?4.4:m.length<=3?6.2:7.6},xn.wave(3),m.forEach(p=>p.wave(3));let g=kt("#count");for(let p of["3","2","1"])g.textContent=p,g.classList.remove("show"),g.offsetWidth,g.classList.add("show"),Xe.sfx("pop"),Ke(8),await y_(680);g.classList.remove("show"),g.textContent="",pr(mt,new R(u,2.4,d),10)}pt.render(mt,Dn);let i=pt.domElement;if(n&&i.height>i.width*1.3){let o=i.width,l=Math.round(o*1.25),c=Math.max(0,Math.min(i.height-l,Math.round(i.height*.5-l/2))),h=document.createElement("canvas");h.width=o,h.height=l,h.getContext("2d").drawImage(i,0,c,o,l,0,0,o,l),i=h}let r=D_(i),s=r.toDataURL("image/jpeg",.9);Xe.sfx("shutter"),Ke(25),kt("#fade").style.background="#fff",kt("#fade").classList.add("on"),setTimeout(()=>{kt("#fade").classList.remove("on"),setTimeout(()=>kt("#fade").style.background="",450)},120),t==null||t(),t=null,W.posing=null;let a=/KAKAOTALK|Instagram|FBAN|FBAV|Line\//i.test(navigator.userAgent);Oo("\uAC00\uC871\uC0AC\uC9C4",`
      <img src="${s}" style="width:100%;border-radius:14px;box-shadow:var(--shadow);-webkit-touch-callout:default" alt="\uAC00\uC871\uC0AC\uC9C4" />
      <p class="muted center">${a?"\uC0AC\uC9C4\uC744 <b>\uAE38\uAC8C \uB20C\uB7EC</b> \uC800\uC7A5\uD574 \uC8FC\uC138\uC694":"\uC0AC\uC9C4\uC744 <b>\uAE38\uAC8C \uB20C\uB7EC</b> \uC800\uC7A5\uD558\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694"}</p>
      <div class="btns">
        <button class="btn pink ph-share">\u{1F4E4} \uACF5\uC720\uD558\uAE30</button>
        <button class="btn ph-save">\u{1F4BE} \uC800\uC7A5\uD558\uAE30</button>
      </div>`,o=>{let l=null,c=null;r.toBlob(u=>{u&&(l=new File([u],"family-village-photo.jpg",{type:"image/jpeg"}),c=URL.createObjectURL(u))},"image/jpeg",.9);let h=()=>{if(a){et("\uC0AC\uC9C4\uC744 \uAE38\uAC8C \uB20C\uB7EC \uC800\uC7A5\uD574 \uC8FC\uC138\uC694");return}let u=document.createElement("a");u.href=c||s,u.download="family-village-photo.jpg",document.body.appendChild(u),u.click(),u.remove(),et("\u{1F4BE} \uC0AC\uC9C4\uC744 \uC800\uC7A5\uD588\uC5B4\uC694")};return o.querySelector(".ph-save").onclick=h,o.querySelector(".ph-share").onclick=async()=>{var u;if(l&&((u=navigator.canShare)!=null&&u.call(navigator,{files:[l]})))try{await navigator.share({files:[l],title:Wt()});return}catch(d){if((d==null?void 0:d.name)==="AbortError")return}h()},()=>{c&&URL.revokeObjectURL(c)}})}finally{t==null||t(),W.posing=null,W.busy=!1}}var mi=.45;function U_(n){if(W.mode==="museum"){Ht.clamp(n);return}for(let t of Zd){let i=n.x-t.x,r=n.z-t.z,s=Math.hypot(i,r),a=t.r+mi;s<a&&s>1e-4&&(n.x=t.x+i/s*a,n.z=t.z+r/s*a)}for(let t of Y0){let i=Math.max(t.minX,Math.min(n.x,t.maxX)),r=Math.max(t.minZ,Math.min(n.z,t.maxZ)),s=n.x-i,a=n.z-r,o=Math.hypot(s,a);if(o>=mi)continue;if(o>1e-4){n.x=i+s/o*mi,n.z=r+a/o*mi;continue}let l=[[n.x-t.minX,"x",t.minX-mi],[t.maxX-n.x,"x",t.maxX+mi],[n.z-t.minZ,"z",t.minZ-mi],[t.maxZ-n.z,"z",t.maxZ+mi]].sort((c,h)=>c[0]-h[0])[0];n[l[1]]=l[2]}let e=Math.hypot(n.x,n.z);e>39&&(n.x*=39/e,n.z*=39/e)}var uo=new R;function N_(n){let e=0,t=0;if(!wn()&&!W.busy&&((Kn.has("KeyW")||Kn.has("ArrowUp"))&&(t-=1),(Kn.has("KeyS")||Kn.has("ArrowDown"))&&(t+=1),(Kn.has("KeyA")||Kn.has("ArrowLeft"))&&(e-=1),(Kn.has("KeyD")||Kn.has("ArrowRight"))&&(e+=1),e+=ca.x,t+=ca.y,(e||t)&&(W.target=null,W.pending=null),W.target)){uo.subVectors(W.target,W.pos),uo.y=0;let a=uo.length();W.targetT-=n,W.moveT+=n;let o=Math.hypot(W.vel.x,W.vel.z),l=W.pending,c;if(l){let h=Math.hypot(W.pos.x-l.pos.x,W.pos.z-l.pos.z);c=h<l.r-.2||h<l.r&&o<.6&&W.moveT>.5}else c=a<.35;if(W.stuckT=W.moveT>.5&&o<.5?W.stuckT+n:0,c||W.targetT<0||W.stuckT>.7){let h=l&&Math.hypot(W.pos.x-l.pos.x,W.pos.z-l.pos.z)<l.r;W.target=null,W.via=[],W.pending=null,W.stuckT=0,l&&(c||h)?Bc(l):!c&&!Un&&et("\uADF8\uCABD\uC740 \uB9C9\uD600 \uC788\uC5B4\uC694")}else{let h=W.via[0];if(h){let u=h.x-W.pos.x,d=h.z-W.pos.z,m=Math.hypot(u,d);m<.9?W.via.shift():(e=u/m,t=d/m)}W.via.length||(e=uo.x/a,t=uo.z/a)}}let i=Math.hypot(e,t);i>1&&(e/=i,t/=i);let r=W.mode==="museum"?5.2:6.4;W.vel.x=Oi(W.vel.x,e*r,10,n),W.vel.z=Oi(W.vel.z,t*r,10,n),W.pos.x+=W.vel.x*n,W.pos.z+=W.vel.z*n,U_(W.pos);let s=Math.hypot(W.vel.x,W.vel.z);if(s>.3){let a=Math.atan2(W.vel.x,W.vel.z)-W.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),W.yaw+=a*Math.min(1,n*12)}return W.vy-=20*n,W.y=Math.max(0,W.y+W.vy*n),W.y===0&&(W.vy=0),xn.root.position.set(W.pos.x,W.y,W.pos.z),xn.root.rotation.y=W.yaw,s/r}var zi=new R,ki=new R,Cc=new R,Lc=new R;function ig(n,e,t=0){let i=W.pos,r=j0();if(W.posing){let s=W.posing;n.set(s.x+s.nx*s.back,1.6+s.back*.06,s.z+s.nz*s.back),e.set(s.x,1.25,s.z)}else if(gi)W.mode==="museum"?(n.set(i.x,r?4.1:3.6,r?9.6:8.4),e.set(i.x,r?2.45:2.7,-3.2)):r?(n.set(i.x,14.5,i.z+14.5),e.set(i.x,.6,i.z-3.5)):(n.set(i.x,10.5,i.z+13.5),e.set(i.x,1.2,i.z-1.5));else{let s=t*.08;n.set(Math.sin(s)*26,12+Math.sin(t*.3)*1.2,4+Math.cos(s)*26),e.set(0,2,-2)}}function ha(){ig(zi,ki,Uc.elapsedTime),Dn.position.copy(zi),Dn.lookAt(ki)}function B_(n,e){ig(Cc,Lc,e);let t=W.swoopT>0?2.4:5,i=W.swoopT>0?2.8:6;W.swoopT>0&&(W.swoopT-=n),zi.x=Oi(zi.x,Cc.x,t,n),zi.y=Oi(zi.y,Cc.y,t,n),zi.z=Oi(zi.z,Cc.z,t,n),ki.x=Oi(ki.x,Lc.x,i,n),ki.y=Oi(ki.y,Lc.y,i,n),ki.z=Oi(ki.z,Lc.z,i,n),Dn.position.copy(zi),Dn.lookAt(ki),Fn.sky.position.copy(Dn.position)}var mo=0,Dc=0,O_=0;function rg(n){is=n,ns=Jd(),pt.setPixelRatio(ns),pt.setSize(Rt.w,Rt.h),n>=1&&Fn.setLite(1),n>=2&&pt.shadowMap.enabled&&(pt.shadowMap.enabled=!1,Kt.castShadow=!1,mt.traverse(e=>{e.material&&(e.material.needsUpdate=!0)})),n>=3&&Fn.setLite(2)}function z_(n){if(!gi||(mo+=n,Dc++,mo<2.5))return;let e=mo/Dc;mo=Dc=0,e>1/32&&is<3?rg(is+1):is>=3&&e>1/18&&++O_===2&&et('\u{1F4D6} \uD734\uB300\uD3F0\uC774 \uD798\uB4E4\uC5B4\uD558\uBA74 \u2630 \uBA54\uB274\uC758 "\uAE00\uB85C \uBCF4\uAE30"\uB85C \uD3B8\uD558\uAC8C \uBCF4\uC138\uC694',4800)}function sg(){var i;if(requestAnimationFrame(sg),V0++,!gi&&V0%2)return;let n=Math.min(Uc.getDelta(),.05),e=Uc.elapsedTime;if($d||document.hidden||wn()||document.body.classList.contains("reading"))return;z_(n);let t=gi?N_(n):0;if(xn.animate(n,t,e),W.mode==="out"){Fn.update(n,e,W.pos),We.update(n,e,W.pos,!!W.posing),Kt.position.copy(W.pos).add(x_),Kt.target.position.copy(W.pos);for(let r of We.interactables){let s=Math.hypot(W.pos.x-r.pos.x,W.pos.z-r.pos.z);r.label.material.opacity=Math.max(.3,Math.min(1,1.6-s/22))}W.doorCooldown-=n,gi&&W.doorCooldown<0&&!W.busy&&W.vel.z<-1&&Math.hypot(W.pos.x-es.x,W.pos.z-es.z)<1.1&&zc(),Un&&gi&&!W.busy&&!W.target&&(Un.waitT-=n,Un.waitT<=0&&I_())}else{Ht.update(n,e,W.pos);let r=Ht.currentTheme(W.pos);r!==G0&&(G0=r,document.querySelectorAll("#museum-bar .chip[data-ti]").forEach(s=>s.classList.toggle("on",+s.dataset.ti===r)),(i=document.querySelector("#museum-bar .chip.on"))==null||i.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}))}if(R0(n),po>0){po-=n*1.3;let r=1-Math.max(0,po);ts.scale.setScalar(1+r*.9),ts.material.opacity=Math.max(0,po)}At=gi&&!W.posing?L_():null,P_(),B_(n,e),pt.render(mt,Dn)}var H_=window.FAMILY,ag=n=>document.querySelector(n),yo=[],tp=null,og=()=>document.body.classList.contains("reading"),G_=[["family","\u{1F3E1} \uAC00\uC871"],["question","\u{1F4AC} \uC9C8\uBB38"],["mailbox","\u2709\uFE0F \uD3B8\uC9C0"],["calendar","\u{1F4C5} \uB2EC\uB825"],["poll","\u{1F5F3}\uFE0F \uD22C\uD45C"],["tree","\u{1F331} \uB098\uBB34"],["album","\u{1F5BC}\uFE0F \uC0AC\uC9C4"],["quiz","\u2753 \uD034\uC988"],["directions","\u{1F5FA}\uFE0F \uBAA8\uC774\uB294 \uACF3"]];function Gi(n,e,t,i,r=""){return`
    <section class="tv-sec" data-sec="${n}" aria-labelledby="tv-h-${n}">
      <h2 class="tv-h" id="tv-h-${n}"><span aria-hidden="true">${e}</span>${t}</h2>
      ${r?`<p class="muted tv-sub">${r}</p>`:""}
      <div class="tv-body" data-mount="${n}">${i.html}</div>
    </section>`}function lg({canPlay:n=!1,onPlay:e,onClose:t,onSent:i,section:r}={}){var h;if(og()){r&&ep(r);return}let s=ag("#textview"),a=hs(),o=ji(),l={family:Sh({hero:!1}),question:Th(ze(),{embedded:!0}),mailbox:ko(i,{onBack:dn}),calendar:Ah(),poll:Rh(),tree:Ch(),album:Vo(a),quiz:Go(),directions:Ho()},c=n?'<button class="btn-primary tv-play">\u{1F3E1} 3D \uB9C8\uC744\uC5D0\uC11C \uAD6C\uACBD\uD558\uAE30</button>':"";if(s.innerHTML=`
    <div class="tv-top">
      <button class="tv-back" ${n?"":"hidden"} aria-label="3D \uB9C8\uC744\uB85C \uB3CC\uC544\uAC00\uAE30">\u{1F3E1} \uB9C8\uC744\uB85C</button>
      <div class="tv-chips" role="navigation" aria-label="\uAE00\uB85C \uBCF4\uAE30 \uCC28\uB840">
        ${G_.map(([u,d])=>`<button class="chip" data-go="${u}">${d}</button>`).join("")}
      </div>
      <button class="fs-toggle tv-fs" aria-label="${La()?"\uAE00\uC790 \uC791\uAC8C":"\uAE00\uC790 \uD06C\uAC8C"}">${La()?"\uAC00-":"\uAC00+"}</button>
    </div>
    <div class="tv-inner">
      <header class="tv-hero">
        <div class="en">FAMILY VILLAGE</div>
        <div class="tv-names">${Fe(Wt())}</div>
        ${o>0?`<div class="intro-dday">\uD568\uAED8\uD55C \uC9C0 ${o.toLocaleString()}\uC77C\uC9F8</div>`:""}
        ${c}
        <p class="muted tv-hint">${n?"\uAC8C\uC784\uC774 \uC5B4\uB824\uC6B0\uBA74 \uADF8\uB300\uB85C \uC544\uB798\uB85C \uB0B4\uB824\uC11C \uBCF4\uC138\uC694":"\uC544\uB798\uB85C \uB0B4\uB9AC\uBA74\uC11C \uCC9C\uCC9C\uD788 \uBCF4\uC138\uC694"}</p>
      </header>
      ${Gi("family","\u{1F3E1}","\uC6B0\uB9AC \uAC00\uC871",l.family)}
      ${Gi("question","\u{1F4AC}","\uC624\uB298\uC758 \uC9C8\uBB38",l.question,"\uB0B4\uAC00 \uB2F5\uD558\uBA74 \uAC00\uC871\uC758 \uB2F5\uC774 \uC5F4\uB824\uC694")}
      ${Gi("mailbox","\u2709\uFE0F","\uC548\uBD80 \uC6B0\uCCB4\uD1B5",l.mailbox)}
      ${Gi("calendar","\u{1F4C5}","\uAC00\uC871 \uB2EC\uB825",l.calendar)}
      ${Gi("poll","\u{1F5F3}\uFE0F","\uAC00\uC871 \uD22C\uD45C\uD568",l.poll)}
      ${Gi("tree","\u{1F331}","\uD568\uAED8 \uD0A4\uC6B0\uB294 \uB098\uBB34",l.tree)}
      ${Gi("album","\u{1F5BC}\uFE0F",((h=H_.museum)==null?void 0:h.title)||"\uAC00\uC871 \uC0AC\uC9C4\uAD00",l.album,"\uC0AC\uC9C4\uC744 \uB204\uB974\uBA74 \uD06C\uAC8C \uBCFC \uC218 \uC788\uC5B4\uC694")}
      ${Gi("quiz","\u2753","\uAC00\uC871 \uD034\uC988",l.quiz)}
      ${Gi("directions","\u{1F5FA}\uFE0F","\uBAA8\uC774\uB294 \uACF3",l.directions)}
      <footer class="tv-foot">
        <div class="btns" style="justify-content:center">
          <button class="btn tv-share">\u{1F517} \uB9C8\uC744 \uC8FC\uC18C \uBCF4\uB0B4\uAE30</button>
          ${n?'<button class="btn pink tv-play">\u{1F3E1} \uB9C8\uC744\uB85C \uB4E4\uC5B4\uAC00\uAE30</button>':""}
        </div>
        <p style="margin-top:18px">${Fe(Wt())} \xB7 \uC6B0\uB9AC \uAC00\uC871 \uB9C8\uC744</p>
      </footer>
    </div>`,yo=[],Object.entries(l).forEach(([u,d])=>{var g;let m=s.querySelector(`[data-mount="${u}"]`),f=(g=d.mount)==null?void 0:g.call(d,m);typeof f=="function"&&yo.push(f)}),s.querySelectorAll("[data-go]").forEach(u=>u.onclick=()=>ep(u.dataset.go)),s.querySelectorAll(".tv-back, .tv-play").forEach(u=>u.onclick=()=>{e==null||e(),V_()}),s.querySelectorAll(".tv-share").forEach(u=>u.onclick=Ca),"IntersectionObserver"in window){let u=[...s.querySelectorAll("[data-go]")],d=new IntersectionObserver(m=>m.forEach(f=>{var g;f.isIntersecting&&(u.forEach(p=>p.classList.toggle("on",p.dataset.go===f.target.dataset.sec)),(g=u.find(p=>p.classList.contains("on")))==null||g.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"}))}),{root:s,rootMargin:"-35% 0px -55% 0px"});s.querySelectorAll(".tv-sec").forEach(m=>d.observe(m)),yo.push(()=>d.disconnect())}tp={onClose:t},document.body.classList.add("reading"),s.scrollTop=0,Ji(np),r&&setTimeout(()=>ep(r,!1),60)}function ep(n,e=!0){var t;(t=ag("#textview").querySelector(`[data-sec="${n}"]`))==null||t.scrollIntoView({behavior:e?"smooth":"auto",block:"start"})}function np(){var e;document.body.classList.remove("reading"),yo.forEach(t=>t()),yo=[];let n=tp;tp=null,(e=n==null?void 0:n.onClose)==null||e.call(n)}function V_(){og()&&(np(),Rr(np))}var vo=window.FAMILY,we=n=>document.querySelector(n),W_=[[10,"\uB9C8\uC744\uC744 \uC9D3\uB294 \uC911\u2026 \u{1F3E1}"],[35,"\uAF43\uC744 \uC2EC\uB294 \uC911\u2026 \u{1F337}"],[65,"\uC9D1\uC5D0 \uBD88\uC744 \uCF1C\uB294 \uC911\u2026 \u{1F4A1}"],[85,"\uC0AC\uC9C4\uC744 \uAC70\uB294 \uC911\u2026 \u{1F5BC}\uFE0F"]],ua=!1,rp=n=>{we("#loadbar").style.width=n+"%";let e=we("#btn-enter");if(!ua){let t=W_.filter(([i])=>n>=i).pop();t&&(e.textContent=t[1])}};["gesturestart","gesturechange"].forEach(n=>document.addEventListener(n,e=>e.preventDefault()));if(window.visualViewport){let n=window.visualViewport,e=()=>document.documentElement.style.setProperty("--kb",`${Math.max(0,Math.round(innerHeight-n.height-n.offsetTop))}px`);n.addEventListener("resize",e),n.addEventListener("scroll",e)}var sp=Wt();document.title=sp;we("#i-title").textContent=sp;we("#h-names").textContent=sp;var Gc=ji();we("#i-sub").innerHTML=`${cs().date}${Gc>0?`<br>\uD568\uAED8\uD55C \uC9C0 <b>${Gc.toLocaleString()}\uC77C\uC9F8</b>`:""}`;we("#h-dday").textContent=Gc>0?`${Gc.toLocaleString()}\uC77C\uC9F8`:"";var cg=jp();if(cg.length){let n=we("#today");n.hidden=!1,n.querySelector(".t-now").textContent=cg.map(e=>`${e.emoji||"\u{1F4CC}"} \uC624\uB298\uC740 ${e.kind==="birthday"?`${sn(e.member)} \uC0DD\uC77C`:e.title}\uC774\uC5D0\uC694!`).join("  ")}Ap()&&(we("#demo-badge").hidden=!1);Mh();var ke=null,xo=!1,pg=!1;function Vi(){if(!pg){we("#lock").hidden=we("#who").hidden=we("#me-line").hidden=!0,ua&&(we("#btn-enter").disabled=!0,we("#btn-enter").textContent="\uAC00\uC871 \uB9C8\uC744 \uD655\uC778 \uC911\u2026");return}let n=Mr(),e=Me(),t=ps().hint;if(we("#lock-hint").textContent=t?`\uD78C\uD2B8: ${t}`:"",we("#lock").hidden=n,we("#who").hidden=!n||!!e,we("#me-line").hidden=!n||!e,we(".btn-row").hidden=!n,n&&!e&&(we("#who-grid").innerHTML=Yo("")),mg(),n&&e){let r=Si();we("#me-avatar").innerHTML=zo(r,"big"),we("#me-name").textContent=xa()?"\uC190\uB2D8\uC73C\uB85C \uAD6C\uACBD\uD574\uC694":`${Xi(sn(e),"\uC73C\uB85C/\uB85C")} \uB4E4\uC5B4\uAC00\uC694`,we("#me-sub").textContent=xa()?"\uD3B8\uC9C0\uB294 \uC4F8 \uC218 \uC788\uACE0, \uC9C8\uBB38\xB7\uD558\uD2B8\xB7\uBB3C \uC8FC\uAE30\uB294 \uAC00\uC871\uB9CC \uD574\uC694":"\uD3B8\uC9C0\xB7\uB2F5\xB7\uD558\uD2B8\uAC00 \uC774 \uC774\uB984\uC73C\uB85C \uB0A8\uC544\uC694"}let i=we("#btn-enter");ua&&(i.disabled=!n||!e,i.textContent=n?e?ke?"\uB9C8\uC744\uC5D0 \uB4E4\uC5B4\uAC00\uAE30 \u{1F3E1}":"\u{1F4D6} \uAE00\uB85C \uBCF4\uAE30":"\u{1F64B} \uB098\uB97C \uACE8\uB77C \uC8FC\uC138\uC694":"\u{1F512} \uAC00\uC871 \uC554\uD638\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694")}function mg(){document.querySelectorAll("#who-grid .who-btn").forEach(n=>n.onclick=()=>{Ke(10),Xe.sfx("pop"),Io(n.dataset.id)})}addEventListener("family:me",()=>{if(xa())try{localStorage.getItem("family-guest-look")||localStorage.setItem("family-guest-look",JSON.stringify(Si()))}catch{}ke==null||ke.setCharacter(Si()),Vi()});we("#btn-change").onclick=()=>{we("#who-grid").innerHTML=Yo(Me()),mg(),we("#who").hidden=!1,we("#me-line").hidden=!0};we("#lock").onsubmit=async n=>{n.preventDefault();let e=we("#lock-in"),t=we("#lock-btn");t.disabled=!0,t.textContent="\uD655\uC778 \uC911\u2026";let i=await Pp(e.value);if(t.disabled=!1,t.textContent="\uC5F4\uAE30",i.ok){Ke(20),Xe.sfx("chime"),bn({force:!0}),Vi();return}e.select(),Ke(60),we("#lock").classList.remove("shake"),we("#lock").offsetWidth,we("#lock").classList.add("shake"),et(i.error==="network"?"\uC5F0\uACB0\uC774 \uC548 \uB3FC\uC694. \uC7A0\uC2DC \uB4A4 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694":"\uC554\uD638\uAC00 \uB2EC\uB77C\uC694 \u{1F512}")};addEventListener("family:locked",()=>{et("\uAC00\uC871 \uC554\uD638\uAC00 \uBC14\uB00C\uC5C8\uC5B4\uC694. \uB2E4\uC2DC \uB4E4\uC5B4\uC640 \uC8FC\uC138\uC694",4e3),xo||Vi()});var fg=()=>pm(()=>{Vi(),Mr()&&bn({force:!0})});we("#btn-lock-set").onclick=fg;Vi();Lp().then(()=>{pg=!0,Vi(),Mr()&&bn()});rp(10);var gg="family-visited",ss=new Set;try{ss=new Set(JSON.parse(localStorage.getItem(gg)||"[]"))}catch{}function yg(){document.querySelectorAll("#visits li").forEach(i=>i.classList.toggle("done",ss.has(i.dataset.id)));let n=ss.size,e=document.querySelectorAll("#visits li").length,t=we("#visit-count");t&&(t.textContent=n?`${n}/${e}`:"")}addEventListener("wv:visit",n=>{if(!ss.has(n.detail)){ss.add(n.detail);try{localStorage.setItem(gg,JSON.stringify([...ss]))}catch{}yg(),ss.size===document.querySelectorAll("#visits li").length&&setTimeout(()=>{et("\u{1F3C5} \uB9C8\uC744\uC758 \uBAA8\uB4E0 \uACF3\uC744 \uB458\uB7EC\uBD24\uC5B4\uC694!",3600),Ki()},800)}});yg();var dg;(dg=we("#btn-wide"))==null||dg.addEventListener("click",()=>{let n=document.body.classList.toggle("wide");we("#btn-wide").textContent=n?"\u{1F4F1} \uD734\uB300\uD3F0 \uBCF4\uAE30":"\u{1F5A5} \uB113\uAC8C \uBCF4\uAE30",ke==null||ke.resize()});function ip(){let n=Me(),e=ze();!Et()||Hp(n,e)||nn("visits",{id:`${n}-${e}`,who:n,day:e})}var hg=!1;function ug(n=4800){if(hg||!Et())return;let e=ni().length;if(!e)return;hg=!0;let t=0,i=()=>{if(wn()&&t++<20){setTimeout(i,1500);return}et(`\u{1F48C} \uB098\uC5D0\uAC8C \uC628 \uD3B8\uC9C0\uAC00 ${ni().length||e}\uD1B5 \uC788\uC5B4\uC694 \xB7 \uB0B4 \uC9D1 \uC6B0\uCCB4\uD1B5\uC5D0 \uAE43\uBC1C\uC774 \uC62C\uB77C\uAC14\uC5B4\uC694`,4200)};setTimeout(i,n)}function $_(){var n;try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return t?((n=t.getExtension("WEBGL_lose_context"))==null||n.loseContext(),!0):!1}catch{return!1}}async function q_(){var h;let n=setTimeout(()=>{ua||(ua=!0,we("#intro-help").textContent="\uB9C8\uC744\uC774 \uB2A6\uAC8C \uC5F4\uB9AC\uACE0 \uC788\uC5B4\uC694. \uBA3C\uC800 \uAE00\uB85C \uBCF4\uAE30\uB85C \uB458\uB7EC\uBD10 \uC8FC\uC138\uC694",Vi(),we("#btn-enter").onclick=()=>s())},9e3);if($_())try{ke=await J0({character:Si(),onProgress:rp})}catch(u){console.error("3D \uB9C8\uC744\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD574 \uAE00\uB85C \uBCF4\uAE30\uB85C \uC804\uD658\uD569\uB2C8\uB2E4",u),ke=null,we("#app").innerHTML=""}clearTimeout(n),ke||document.body.classList.add("no3d"),rp(100),ua=!0,ii.onSent=(ke==null?void 0:ke.letterSent)||null,ii.takePhoto=(ke==null?void 0:ke.takePhoto)||null;let e=we("#bgm"),t=we("#btn-sound"),i=()=>{t.textContent=(vo.bgm?!e.paused:Xe.enabled)?"\u{1F50A}":"\u{1F507}"};function r(){xo||!ke||!Mr()||!Me()||(xo=!0,document.body.classList.add("playing"),we("#intro").classList.add("hide"),vo.bgm&&e.play().then(i).catch(()=>{}),ke.start({hint:!0}),i(),ip(),ug(),!vo.bgm&&!Xe.saved()&&setTimeout(()=>et("\u{1F50A} \uC624\uB978\uCABD \uC704 \uBC84\uD2BC\uC73C\uB85C \uC624\uB974\uACE8 \uC18C\uB9AC\uB97C \uCF24 \uC218 \uC788\uC5B4\uC694",3400),9500))}addEventListener("family:data",()=>{xo&&(ip(),ug(1200))});function s(u){if(!Mr()){et("\u{1F512} \uAC00\uC871 \uC554\uD638\uB97C \uBA3C\uC800 \uB123\uC5B4 \uC8FC\uC138\uC694");return}we("#intro").classList.add("hide"),ip(),lg({canPlay:!!ke&&!!Me(),onPlay:r,onSent:ke==null?void 0:ke.letterSent,onClose:()=>{xo||we("#intro").classList.remove("hide")},section:u})}let a=ke?ke.themes:hs(),o=()=>ke==null?void 0:ke.setCharacter(Si()),l=()=>[{emoji:"\u{1F3E1}",label:"\uC6B0\uB9AC \uAC00\uC871",go:qo},{emoji:"\u{1F4AC}",label:"\uC624\uB298\uC758 \uC9C8\uBB38",go:()=>Ir()},{emoji:"\u2709\uFE0F",label:"\uC548\uBD80 \uC6B0\uCCB4\uD1B5",go:()=>kn(ke==null?void 0:ke.letterSent)},{emoji:"\u{1F4C5}",label:"\uAC00\uC871 \uB2EC\uB825",go:Ia},{emoji:"\u{1F5F3}\uFE0F",label:"\uD22C\uD45C\uD568",go:Xo},{emoji:"\u{1F331}",label:"\uC6B0\uB9AC \uAC00\uC871 \uB098\uBB34",go:jo},ke?{emoji:"\u{1F5BC}\uFE0F",label:"\uAC00\uC871 \uC0AC\uC9C4\uAD00",go:()=>{dn(),ke.enterMuseum()}}:{emoji:"\u{1F4DA}",label:"\uC804\uCCB4 \uC568\uBC94",go:()=>Lr(a)},{emoji:"\u2753",label:"\uAC00\uC871 \uD034\uC988",go:Ra},{emoji:"\u{1F5FA}\uFE0F",label:"\uBAA8\uC774\uB294 \uACF3",go:Aa},...Et()?[{g:"me",emoji:"\u{1F3E0}",label:"\uB0B4 \uC9D1",go:()=>As(Me())}]:[],{g:"me",emoji:"\u{1F3A8}",label:"\uCE90\uB9AD\uD130 \uAFB8\uBBF8\uAE30",go:Lh},{g:"me",emoji:"\u{1F64B}",label:"\uB098\uB294 \uB204\uAD6C?",go:()=>dm(o)},{g:"set",emoji:ao[di()].emoji,label:`\uACC4\uC808: ${ao[di()].label}`,go:()=>{dn();let u=v0();et(`${ao[u].toast} \xB7 \uBA54\uB274\uC5D0\uC11C \uB610 \uBC14\uAFC0 \uC218 \uC788\uC5B4\uC694`,3e3)}},...ke?[{g:"set",emoji:"\u{1F319}",label:"\uB0AE \xB7 \uBC24 \uBC14\uAFB8\uAE30",go:()=>{dn(),ke.cycleTime()}},{g:"set",emoji:"\u{1F6B6}",label:"\uC790\uB3D9 \uD22C\uC5B4",go:()=>{dn(),ke.startTour()}}]:[],{g:"set",emoji:"\u{1F512}",label:"\uAC00\uC871 \uC554\uD638",go:fg}];we("#btn-menu").onclick=()=>Eh(l()),we("#btn-text-hud").onclick=()=>s(),(h=we("#btn-desk-text"))==null||h.addEventListener("click",()=>s()),vo.bgm?(e.src=vo.bgm,t.hidden=!1,t.onclick=()=>{e.paused?e.play().then(i).catch(()=>{}):(e.pause(),i())}):ke&&(t.hidden=!1,i(),t.onclick=()=>{let u=Xe.setEnabled(!Xe.enabled);i(),et(u?"\u{1F50A} \uC624\uB974\uACE8 \uBC30\uACBD\uC74C\uC744 \uCF30\uC5B4\uC694":"\u{1F507} \uC18C\uB9AC\uB97C \uAED0\uC5B4\uC694")});let c=we("#btn-enter");c.onclick=()=>ke?r():s(),we("#btn-text").onclick=()=>s(),we("#btn-tour-start").onclick=()=>{if(!ke){s();return}if(!Mr()||!Me()){Vi();return}r(),setTimeout(()=>ke.startTour(),1400)},Vi()}q_();})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
