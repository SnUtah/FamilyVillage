(()=>{var Wg=Object.defineProperty;var $g=(n,e)=>{for(var t in e)Wg(n,t,{get:e[t],enumerable:!0})};var Is={};$g(Is,{albumView:()=>Jo,avatarHTML:()=>gm,closeModal:()=>ln,confetti:()=>nr,copy:()=>Ch,directionsView:()=>Xo,esc:()=>Fe,initUI:()=>Dh,installApp:()=>Ih,isBigFont:()=>ka,isInstalled:()=>Zo,isOverlayOpen:()=>An,letterView:()=>xm,mailboxView:()=>jo,menuView:()=>_m,onData:()=>Ph,openLightbox:()=>Ko,openModal:()=>Ua,openView:()=>Ur,paintStatus:()=>Lh,popBack:()=>Dr,pushBack:()=>tr,quizView:()=>Yo,replyView:()=>vm,setBigFont:()=>Ah,share:()=>za,showAlbum:()=>Nr,showDirections:()=>Ba,showLetter:()=>Na,showMailbox:()=>Hn,showMenu:()=>Fh,showQuiz:()=>Oa,toast:()=>tt});function qg(n){let e=1779033703^n.length;for(let i=0;i<n.length;i++)e=Math.imul(e^n.charCodeAt(i),3432918353),e=e<<13|e>>>19;let t=e>>>0;return()=>{t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var jg='"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "Android Emoji", sans-serif',Bp=[["#9CD3F2","#E6F5FF"],["#FFB88C","#FFE7C9"],["#F7C4D0","#FFF3F6"],["#2B2D5C","#6D5C9E"],["#C7E8F7","#FFECD8"]],sh=["#8FB8DE","#F4B8C0","#F7D58B","#A8D08D","#C9B3E6","#F9C59E","#E88A98","#7FC8C2"],ah=["#5A3A2A","#3A2A24","#7A5238","#1E1A22","#C98A5B"],Xg={trips:[{kind:"hills",sky:0,who:"family",n:4,props:["\u{1F3EF}","\u{1F4F8}"]},{kind:"sea",sky:0,who:"kidparent",props:["\u{1F30A}","\u{1F41A}"]},{kind:"city",sky:4,who:"family",n:4,props:["\u{1F697}","\u{1F36A}"]},{kind:"park",sky:0,who:"family",n:5,props:["\u{1F34A}","\u{1F34A}"]},{kind:"hills",sky:3,who:"family",n:4,props:["\u26FA","\u2B50"]},{kind:"snow",sky:4,who:"kid",props:["\u{1F6F7}","\u2744\uFE0F"]},{kind:"hills",sky:1,who:"family",n:3,props:["\u{1F682}","\u{1F359}"]},{kind:"hills",sky:4,who:"family",n:5,props:["\u2708\uFE0F","\u{1F5FA}\uFE0F"]}],holidays:[{kind:"room",sky:4,who:"family",n:5,props:["\u{1F9E7}","\u{1F647}"]},{kind:"room",sky:1,who:"family",n:4,props:["\u{1F315}","\u{1F361}"]},{kind:"room",sky:2,who:"family",n:7,props:["\u{1F382}","\u{1F389}"]},{kind:"room",sky:4,who:"baby",props:["\u{1F382}","\u{1F388}"]},{kind:"room",sky:3,who:"family",n:4,props:["\u{1F382}","\u{1F56F}\uFE0F"]},{kind:"room",sky:3,who:"family",n:5,props:["\u{1F384}","\u{1F381}"]},{kind:"room",sky:2,who:"family",n:4,props:["\u{1F389}","\u{1F490}"]},{kind:"room",sky:4,who:"family",n:6,props:["\u{1F3B2}","\u{1F962}"]}],growing:[{kind:"room",sky:4,who:"baby",props:["\u{1F463}","\u{1F9F8}"]},{kind:"city",sky:0,who:"kid",props:["\u{1F392}","\u{1F3EB}"]},{kind:"park",sky:0,who:"kidparent",props:["\u{1F6B2}","\u{1F333}"]},{kind:"park",sky:0,who:"kid",props:["\u{1F3C3}","\u{1F947}"]},{kind:"city",sky:4,who:"kidparent",props:["\u{1F393}","\u{1F490}"]},{kind:"city",sky:0,who:"kid",props:["\u{1F454}","\u{1F3EB}"]},{kind:"city",sky:3,who:"kid",props:["\u{1F389}","\u{1F4DD}"]},{kind:"city",sky:4,who:"kid",props:["\u{1F4BC}","\u2615"]}],everyday:[{kind:"room",sky:4,who:"family",n:4,props:["\u{1F373}","\u{1F95B}"]},{kind:"room",sky:1,who:"kid",props:["\u{1F634}","\u{1F4FA}"]},{kind:"park",sky:1,who:"family",n:3,props:["\u{1F415}","\u{1F307}"]},{kind:"room",sky:4,who:"family",n:5,props:["\u{1F96C}","\u{1F336}\uFE0F"]},{kind:"park",sky:2,who:"kidparent",props:["\u{1F4A0}","\u{1F4A0}"]},{kind:"room",sky:3,who:"family",n:4,props:["\u{1F349}","\u{1F4AC}"]}],old:[{kind:"room",sky:2,who:"wedding",props:["\u{1F490}","\u2728"]},{kind:"cafe",sky:4,who:"couple",props:["\u2615","\u{1F39E}\uFE0F"]},{kind:"city",sky:0,who:"couple",props:["\u{1F3E0}","\u{1F331}"]},{kind:"room",sky:4,who:"kidparent",props:["\u{1F476}","\u{1F37C}"]},{kind:"hills",sky:0,who:"family",n:3,props:["\u{1F3E1}","\u{1F413}"]},{kind:"park",sky:4,who:"family",n:6,props:["\u{1F4F7}"]}]},Op=["park","hills","room","sea","city"],zp=["couple","wedding","kid","family"];function Mi(n,e,t,i,r,s){s=Math.min(s,i/2,r/2),n.beginPath(),n.moveTo(e+s,t),n.arcTo(e+i,t,e+i,t+r,s),n.arcTo(e+i,t+r,e,t+r,s),n.arcTo(e,t+r,e,t,s),n.arcTo(e,t,e+i,t,s),n.closePath()}function yt(n,e,t,i,r){n.fillStyle=r,n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fill()}function Si(n,e,t,i,r,s=1){n.save(),n.globalAlpha=s,n.font=`${r}px ${jg}`,n.textAlign="center",n.textBaseline="middle",n.fillText(e,t,i),n.restore()}function Yg(n,e,t,i,r,s){let[a,o]=Bp[r]||Bp[0],l=r===3,c=i==="room"||i==="cafe",h=t*(i==="sea"?.56:.62);if(c){let m=n.createLinearGradient(0,0,0,t);m.addColorStop(0,i==="cafe"?"#E7C6A4":l?"#4B3F57":"#FFF4E8"),m.addColorStop(1,i==="cafe"?"#C99B74":l?"#3A3046":"#FBE3D2"),n.fillStyle=m,n.fillRect(0,0,e,t);let g=e*.56,p=t*.12,x=e*.32,y=t*.32;n.fillStyle="#FFFFFF",Mi(n,g-8,p-8,x+16,y+16,10),n.fill();let v=n.createLinearGradient(0,p,0,p+y);if(v.addColorStop(0,a),v.addColorStop(1,o),n.fillStyle=v,n.fillRect(g,p,x,y),n.fillStyle="#FFFFFF",n.fillRect(g+x/2-3,p,6,y),n.fillRect(g,p+y/2-3,x,6),l)for(let R=0;R<12;R++)yt(n,g+s()*x,p+s()*y*.7,1.5+s()*1.5,"#FFF8C9");else yt(n,g+x*.72,p+y*.3,x*.1,"#FFE28A");n.fillStyle=i==="cafe"?"rgba(255,255,255,.35)":"rgba(244,184,192,.8)",Mi(n,g-22,p-14,26,y+28,12),n.fill(),Mi(n,g+x-4,p-14,26,y+28,12),n.fill();let b=t*.72;n.fillStyle=i==="cafe"?"#8F6B4E":"#E6C39A",n.fillRect(0,b,e,t-b),n.fillStyle="rgba(120,80,50,.15)";for(let R=0;R<7;R++)n.fillRect(0,b+R*((t-b)/7),e,2);if(i==="cafe"){for(let R=0;R<9;R++)yt(n,e*.08+R*e*.105,t*.07+Math.sin(R*1.3)*10,5,"#FFF1B8");n.fillStyle="rgba(255,255,255,.5)",Mi(n,e*.06,t*.22,e*.36,8,4),n.fill(),Si(n,"\u{1FAB4}",e*.12,t*.2,e*.08),Si(n,"\u{1F4DA}",e*.32,t*.2,e*.07),n.fillStyle="#B98A66",n.beginPath(),n.ellipse(e*.5,t*.86,e*.3,t*.06,0,0,Math.PI*2),n.fill()}else n.fillStyle="rgba(255,255,255,.7)",Mi(n,e*.1,t*.16,e*.2,t*.17,8),n.fill(),Si(n,l?"\u{1F319}":"\u{1F5BC}\uFE0F",e*.2,t*.25,e*.08),Si(n,"\u{1FAB4}",e*.1,t*.7,e*.11);return{horizon:t*.74,indoor:!0}}let u=n.createLinearGradient(0,0,0,h);if(u.addColorStop(0,a),u.addColorStop(1,o),n.fillStyle=u,n.fillRect(0,0,e,h+2),l){for(let m=0;m<40;m++)yt(n,s()*e,s()*h*.85,.8+s()*1.6,"rgba(255,248,210,.9)");yt(n,e*.78,t*.14,e*.07,"#FFF3C4")}else{let m=e*(.15+s()*.7),g=t*(.1+s()*.12),p=n.createRadialGradient(m,g,0,m,g,e*.28);p.addColorStop(0,"rgba(255,245,200,.9)"),p.addColorStop(1,"rgba(255,245,200,0)"),n.fillStyle=p,n.fillRect(0,0,e,h),yt(n,m,g,e*.06,r===1?"#FFD27A":"#FFF0A8");for(let x=0;x<3;x++){let y=s()*e,v=t*(.08+s()*.25),b=e*(.05+s()*.04);n.fillStyle="rgba(255,255,255,.85)";for(let R=0;R<4;R++)n.beginPath(),n.arc(y+R*b*.9-b*1.3,v+R%2*b*.3,b*(.7+R%3*.2),0,7),n.fill()}}if(i==="sea"){let m=n.createLinearGradient(0,h,0,t*.8);m.addColorStop(0,l?"#2F4F7A":"#5FB8E6"),m.addColorStop(1,l?"#243F63":"#8AD3F2"),n.fillStyle=m,n.fillRect(0,h,e,t*.8-h),n.strokeStyle="rgba(255,255,255,.55)",n.lineWidth=3,n.lineCap="round";for(let g=0;g<7;g++){let p=h+14+g*22+s()*8,x=s()*e;n.beginPath(),n.moveTo(x,p),n.lineTo(x+30+s()*50,p),n.stroke()}return n.fillStyle="#F6E3B8",n.beginPath(),n.moveTo(0,t*.8),n.quadraticCurveTo(e*.5,t*.74,e,t*.82),n.lineTo(e,t),n.lineTo(0,t),n.fill(),{horizon:t*.86}}if(i==="mountain")for(let m=0;m<4;m++){let g=e*(m*.33-.1)+s()*30,p=e*.45,x=t*(.28+s()*.1);n.fillStyle=m%2?"#8FA7C7":"#A9BFDC",n.beginPath(),n.moveTo(g-p/2,h),n.lineTo(g,h-x),n.lineTo(g+p/2,h),n.fill(),n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(g-p*.14,h-x*.68),n.lineTo(g,h-x),n.lineTo(g+p*.14,h-x*.68),n.lineTo(g+p*.05,h-x*.62),n.lineTo(g-p*.06,h-x*.64),n.fill()}if(i==="city"){for(let m=-10;m<e;m+=0){let g=40+s()*70,p=t*(.12+s()*.3);n.fillStyle=l?["#3B3550","#2E2A42","#46405D"][Math.floor(s()*3)]:["#D9D0E6","#CFC6DD","#E4DCEF"][Math.floor(s()*3)],n.fillRect(m,h-p,g,p+4),n.fillStyle=l?"#FFE9A8":"rgba(255,255,255,.7)";for(let x=h-p+10;x<h-12;x+=16)for(let y=m+7;y<m+g-10;y+=14)s()>.35&&n.fillRect(y,x,7,9);m+=g+6}n.fillStyle=l?"#4A4458":"#CFC3B6",n.fillRect(0,h,e,t-h),n.fillStyle="rgba(255,255,255,.5)";for(let m=10;m<e;m+=60)n.fillRect(m,h+(t-h)*.5,30,4);return{horizon:t*.86}}let d=i==="snow",f=d?["#F4F7FB","#EAF0F7","#FFFFFF"]:l?["#3F6B4A","#355C40","#4A7A55"]:["#9ED08A","#86C174","#B2DB9C"];n.fillStyle=f[0],n.fillRect(0,h,e,t-h);for(let m=0;m<3;m++)n.fillStyle=f[(m+1)%3],n.beginPath(),n.ellipse(e*(.2+m*.35)+s()*40,h+10+m*6,e*(.45+s()*.2),t*(.08+s()*.05),0,Math.PI,Math.PI*2),n.fill();for(let m=0;m<4;m++){let g=s()<.5?e*(.04+s()*.2):e*(.76+s()*.2),p=h+4+s()*10,x=e*(.05+s()*.03);n.fillStyle="#A47A5C",n.fillRect(g-x*.12,p-x*1.4,x*.24,x*1.4);let y=d?["#FFFFFF","#EEF3F8"]:i==="park"&&r===2?["#F9C9D2","#FCDCE3"]:["#7DB86C","#9ED08A"];yt(n,g,p-x*1.6,x*.75,y[0]),yt(n,g-x*.5,p-x*1.25,x*.55,y[1]),yt(n,g+x*.5,p-x*1.25,x*.55,y[1])}if(d)for(let m=0;m<60;m++)yt(n,s()*e,s()*t,1.5+s()*2.5,"rgba(255,255,255,.9)");else if(!l)for(let m=0;m<18;m++)yt(n,s()*e,h+16+s()*(t-h-30),3+s()*3,["#FFFFFF","#F4B8C0","#F7D58B","#FFB7A5"][m%4]);return{horizon:t*.88}}function dn(n,e,t,i,r={}){let s="#FFE0C7",a=r.hair||ah[0],o=r.suit?"#2F2B33":r.dress?"#FFFFFF":r.outfit||sh[0],l=t-2.95*i;if(n.lineCap="round",n.fillStyle="rgba(0,0,0,.12)",n.beginPath(),n.ellipse(e,t+i*.1,i*1.1,i*.22,0,0,Math.PI*2),n.fill(),r.veil&&(n.fillStyle="rgba(255,255,255,.7)",n.beginPath(),n.ellipse(e,l+i*.9,i*1.25,i*1.9,0,0,Math.PI*2),n.fill()),(r.long||r.dress)&&(n.fillStyle=a,Mi(n,e-i*1.02,l-i*.4,i*2.04,i*1.9,i*.5),n.fill()),!r.dress){n.strokeStyle=r.suit?"#2F2B33":"#6B5B53",n.lineWidth=i*.36;for(let h of[-1,1])n.beginPath(),n.moveTo(e+h*i*.28,t-i*1),n.lineTo(e+h*i*.28,t-i*.15),n.stroke();n.fillStyle="#4A3B38";for(let h of[-1,1])n.beginPath(),n.ellipse(e+h*i*.3,t-i*.05,i*.26,i*.14,0,0,Math.PI*2),n.fill()}r.dress&&(n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(e-i*.5,t-i*1.5),n.lineTo(e+i*.5,t-i*1.5),n.quadraticCurveTo(e+i*1.3,t-i*.4,e+i*1.25,t),n.lineTo(e-i*1.25,t),n.quadraticCurveTo(e-i*1.3,t-i*.4,e-i*.5,t-i*1.5),n.fill(),n.fillStyle="#F4B8C0",Mi(n,e-i*.55,t-i*1.55,i*1.1,i*.14,i*.07),n.fill()),n.fillStyle=o,Mi(n,e-i*.65,t-i*2.05,i*1.3,i*1.25,i*.5),n.fill(),r.suit&&(n.fillStyle="#FFFFFF",n.beginPath(),n.moveTo(e-i*.2,t-i*2),n.lineTo(e+i*.2,t-i*2),n.lineTo(e,t-i*1.45),n.fill(),n.fillStyle="#1E1A22",n.beginPath(),n.moveTo(e,t-i*1.92),n.lineTo(e-i*.18,t-i*2.02),n.lineTo(e-i*.18,t-i*1.82),n.fill(),n.beginPath(),n.moveTo(e,t-i*1.92),n.lineTo(e+i*.18,t-i*2.02),n.lineTo(e+i*.18,t-i*1.82),n.fill(),yt(n,e-i*.42,t-i*1.85,i*.1,"#F4B8C0")),n.strokeStyle=r.dress?s:o,n.lineWidth=i*.3;let c=(h,u)=>{n.beginPath(),n.moveTo(e+h*i*.6,t-i*1.85),u?n.lineTo(e+h*i*1,t-i*2.7):n.lineTo(e+h*i*.82,t-i*1.1),n.stroke(),yt(n,u?e+h*i*1:e+h*i*.82,u?t-i*2.72:t-i*1.08,i*.17,s)};if(c(-1,r.waveL),c(1,r.wave),r.bouquet&&(n.fillStyle="#9CC08A",Mi(n,e-i*.08,t-i*1.25,i*.16,i*.4,i*.05),n.fill(),["#F4B8C0","#FFFFFF","#F7D58B","#E88A98","#FFE3EA","#F4B8C0"].forEach((h,u)=>yt(n,e+Math.cos(u*1.05)*i*.22,t-i*1.35+Math.sin(u*1.05)*i*.18,i*.16,h)),yt(n,e,t-i*1.33,i*.16,"#E88A98")),yt(n,e,l,i,s),n.fillStyle=a,n.beginPath(),n.arc(e,l-i*.05,i*1.04,Math.PI*1.02,Math.PI*1.98),n.quadraticCurveTo(e+i*.5,l-i*.05,e+i*.25,l+i*.25),n.quadraticCurveTo(e-i*.2,l-i*.2,e-i*.6,l+i*.1),n.quadraticCurveTo(e-i*1,l-i*.05,e-i*1.04,l-i*.05),n.fill(),r.crown)for(let h=0;h<5;h++)yt(n,e-i*.6+h*i*.3,l-i*.98+Math.abs(h-2)*i*.1,i*.09,h%2?"#F4B8C0":"#FFFFFF");r.hat&&Si(n,r.hat,e,l-i*1,i*1.3);for(let h of[-1,1])yt(n,e+h*i*.33,l+i*.05,i*.12,"#2B2220"),yt(n,e+h*i*.33+i*.04,l,i*.04,"#FFFFFF"),yt(n,e+h*i*.6,l+i*.32,i*.15,"rgba(255,150,150,.55)");if(r.glasses){n.strokeStyle="#4A3B38",n.lineWidth=i*.06;for(let h of[-1,1])n.beginPath(),n.arc(e+h*i*.33,l+i*.05,i*.22,0,Math.PI*2),n.stroke()}n.strokeStyle="#2B2220",n.lineWidth=i*.07,n.beginPath(),n.arc(e,l+i*.4,i*.16,.15,Math.PI-.15),n.stroke(),r.balloon&&(n.strokeStyle="#B8A59B",n.lineWidth=1.5,n.beginPath(),n.moveTo(e+i*.82,t-i*1.08),n.lineTo(e+i*1.3,t-i*3.9),n.stroke(),yt(n,e+i*1.3,t-i*4.4,i*.55,r.balloon),yt(n,e+i*1.15,t-i*4.55,i*.14,"rgba(255,255,255,.6)"))}function Zg(n,e,t,i,r,s=2){let a=e/2,o=e*.085,l=()=>sh[Math.floor(r()*sh.length)],c=()=>ah[Math.floor(r()*ah.length)];if(i==="wedding")dn(n,a-o*1.35,t,o,{suit:!0,hair:"#3A2A24",wave:r()<.4}),dn(n,a+o*1.35,t,o,{dress:!0,veil:!0,crown:!0,bouquet:!0,hair:"#5A3A2A"});else if(i==="bride")dn(n,a,t,o*1.15,{dress:!0,veil:!0,crown:!0,bouquet:!0,hair:"#5A3A2A",wave:r()<.5});else if(i==="groom")dn(n,a,t,o*1.15,{suit:!0,hair:"#3A2A24",wave:!0});else if(i==="propose")dn(n,a-o*1.3,t,o,{suit:!1,outfit:"#8FB8DE",hair:"#3A2A24",wave:!0}),dn(n,a+o*1.3,t,o,{outfit:"#F4B8C0",hair:"#5A3A2A",long:!0,waveL:!0}),Si(n,"\u{1F48D}",a-o*.3,t-o*2.9,o*1.1);else if(i==="couple")dn(n,a-o*1.3,t,o,{outfit:l(),hair:c(),wave:r()<.5}),dn(n,a+o*1.3,t,o,{outfit:l(),hair:c(),long:!0,waveL:r()<.5});else if(i==="kid"||i==="kid-balloon")dn(n,a,t,o*.75,{outfit:l(),hair:c(),long:r()<.5,wave:!0,balloon:i==="kid-balloon"?"#E88A98":null});else if(i==="baby")dn(n,a,t,o*.6,{outfit:"#FFF3EA",hair:"#5A3A2A",hat:"\u{1F380}"});else if(i==="kidparent")dn(n,a-o*.9,t,o,{outfit:l(),hair:c(),long:!0}),dn(n,a+o*1,t,o*.7,{outfit:l(),hair:c(),wave:!0});else if(i==="family"){let h=Math.min(7,Math.max(3,s)),u=Math.min(o*2.1,e*.9/h);for(let d=0;d<h;d++){let f=a+(d-(h-1)/2)*u,m=d===0||h>4&&d===h-1,g=!m&&d>h-3&&h>3&&d%2===1;dn(n,f,t,o*(g?.7:m?.95:1),{outfit:l(),hair:m?"#C8C2C0":c(),long:d%2===1,glasses:m,wave:d===h-1})}}}function kp(n,e,t=840){let i=n.id||"everyday",r=Xg[i],s=qg(`${i}:${e}`),a=r&&r[e]||{kind:Op[Math.floor(s()*Op.length)],sky:Math.floor(s()*5),who:zp[Math.floor(s()*zp.length)],props:["\u2728"]},o=[1,4/3,3/4][e%3],l=Math.round(o>=1?t:t*o),c=Math.round(o>=1?t/o:t),h=document.createElement("canvas");h.width=l,h.height=c;let u=h.getContext("2d"),f=Yg(u,l,c,a.kind,a.sky,s).horizon,m=a.props[0];m&&Si(u,m,l*(s()<.5?.15:.85),f-l*.36,l*.21,.95),Zg(u,l,f-6,a.who,s,a.n),a.props.slice(1).forEach((p,x)=>Si(u,p,l*(.12+x*.7+s()*.1),f-l*.06+s()*10,l*.12));for(let p=0;p<10;p++)yt(u,s()*l,s()*c*.6,1.2+s()*2,"rgba(255,255,255,.75)");if(i==="holidays")for(let p=0;p<5;p++)Si(u,["\u{1F389}","\u2728","\u{1F388}"][p%3],s()*l,s()*c*.5,l*.035,.8);let g=u.createRadialGradient(l/2,c/2,l*.35,l/2,c/2,l*.85);return g.addColorStop(0,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(60,30,20,.22)"),u.fillStyle=g,u.fillRect(0,0,l,c),i==="old"&&(u.fillStyle="rgba(150,105,40,.2)",u.fillRect(0,0,l,c),u.strokeStyle="#FFFDF8",u.lineWidth=l*.035,u.strokeRect(0,0,l,c)),h}var lh=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"],ba=()=>window.FAMILY||{},ji=n=>{try{return new Date(n.toLocaleString("en-US",{timeZone:"Asia/Seoul"}))}catch{return new Date(n.getTime()+(n.getTimezoneOffset()+540)*6e4)}},qi=n=>String(n).padStart(2,"0"),fs=null,ch=0;function Jg(){let n=ji(new Date),e=null;for(let t of ba().members||[]){if(!/^\d{2}-\d{2}$/.test(t.birthday||""))continue;let[i,r]=t.birthday.split("-").map(Number),s=n.getFullYear(),a=new Date(`${s}-${qi(i)}-${qi(r)}T10:00:00+09:00`);ji(a)<new Date(n.getFullYear(),n.getMonth(),n.getDate())&&(a=new Date(`${s+1}-${qi(i)}-${qi(r)}T10:00:00+09:00`)),(!e||a<e)&&(e=a)}return e}function Hp(){fs=null;let n=location.hash.slice(1),e=n.match(/(?:^|&)now=([^&]+)/);if(e){let t=decodeURIComponent(e[1]),i=new Date(/[+Z]/.test(t.slice(10))?t:t+(t.length<=10?"T10:00:00":t.length<=16?":00":"")+"+09:00");if(!isNaN(i)){fs=i.getTime(),ch=Date.now();return}}if(/(?:^|&)demo(?:&|$)/.test(n)){let t=Jg();t&&(fs=t.getTime(),ch=Date.now())}}Hp();addEventListener("hashchange",Hp);function si(){return fs?new Date(fs+(Date.now()-ch)):new Date}var Gp=()=>!!fs;function ke(n=si()){let e=ji(n);return`${e.getFullYear()}-${qi(e.getMonth()+1)}-${qi(e.getDate())}`}function pn(n,e){let[t,i,r]=n.split("-").map(Number),s=new Date(Date.UTC(t,i-1,r+e));return`${s.getUTCFullYear()}-${qi(s.getUTCMonth()+1)}-${qi(s.getUTCDate())}`}function ai(n,e){let t=i=>{let[r,s,a]=i.split("-").map(Number);return Date.UTC(r,s-1,a)};return Math.round((t(e)-t(n))/864e5)}function gs(n=si()){let e=ji(n),t=e.getHours(),i=e.getMinutes(),r=t<12?"\uC624\uC804":"\uC624\uD6C4",s=t%12===0?12:t%12;return{date:`${e.getFullYear()}\uB144 ${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C ${lh[e.getDay()]}\uC694\uC77C`,short:`${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C (${lh[e.getDay()]})`,time:`${r} ${s}\uC2DC${i?" "+i+"\uBD84":""}`,k:e}}function mn(n,e=!0){let[t,i,r]=n.split("-").map(Number),s=new Date(Date.UTC(t,i-1,r)).getUTCDay();return`${i}\uC6D4 ${r}\uC77C${e?` (${lh[s]})`:""}`}function Xi(n){let e=new Date(n);if(isNaN(e))return"";let t=ai(ke(e),ke());if(t===0)return"\uC624\uB298";if(t===1)return"\uC5B4\uC81C";let i=ji(e);return`${i.getMonth()+1}\uC6D4 ${i.getDate()}\uC77C`}function Yi(n,e){let t=String(n!=null?n:""),i=t.charCodeAt(t.length-1),[r,s]=e.split("/");if(!(i>=44032&&i<=55203))return`${t}(${r.slice(0,r.length-s.length)||r})${s}`;let a=(i-44032)%28;return r==="\uC73C\uB85C"&&a===8?t+s:t+(a?r:s)}function Ye(n=10){var e;try{(e=navigator.vibrate)==null||e.call(navigator,n)}catch{}}function ys(){var t;let n=ba();return(((t=n.museum)==null?void 0:t.themes)||[]).map(i=>{var s;let r;return Array.isArray(i.photos)&&i.photos.length?r=i.photos.map((a,o)=>{var l;return typeof a=="string"?{src:a,caption:((l=i.captions)==null?void 0:l[o])||""}:a}):n.demoPhotos||i.demo?r=Array.from({length:i.count||((s=i.captions)==null?void 0:s.length)||0},(a,o)=>{var l;return{src:`demo:${i.id}:${o}`,caption:((l=i.captions)==null?void 0:l[o])||""}}):r=Array.from({length:i.count||0},(a,o)=>{var l;return{src:`${i.folder}/${o+1}.${i.ext||"jpg"}`,caption:((l=i.captions)==null?void 0:l[o])||""}}),r.forEach((a,o)=>{a.idx=o,a.theme=i}),{...i,photos:r}})}var oh=new Map,Kg=n=>typeof(n==null?void 0:n.src)=="string"&&n.src.startsWith("demo:");function wr(n,e="full"){if(!Kg(n))return n.src;let t=`${n.src}:${e}`;if(!oh.has(t)){let i=kp(n.theme,n.idx,e==="thumb"?360:840);oh.set(t,i.toDataURL("image/jpeg",e==="thumb"?.8:.86))}return oh.get(t)}function Tr(n,e,t,i=600,r=600,s="\uC0AC\uC9C4\uC744 \uB123\uC5B4\uC8FC\uC138\uC694"){let a=document.createElement("canvas");a.width=i,a.height=r;let o=a.getContext("2d"),l=o.createLinearGradient(0,0,i,r);return l.addColorStop(0,"#FFFDF8"),l.addColorStop(1,n.color||"#F4B8C0"),o.fillStyle=l,o.fillRect(0,0,i,r),o.textAlign="center",o.textBaseline="middle",o.font=`${i*.2}px serif`,o.fillText(n.emoji||"\u{1F4F7}",i/2,r*.38),o.fillStyle="#7C6A66",o.font=`${i*.08}px "Jua"`,o.fillText(`${n.title} #${e+1}`,i/2,r*.62),o.font=`${i*.04}px "Gowun Dodum"`,o.globalAlpha=.7,o.fillText(s,i/2,r*.73),o.fillText(t,i/2,r*.8),a}function Ma(){return(ba().questions||[]).map(n=>typeof n=="string"?{q:n}:n).filter(n=>n&&n.q)}function Uo(n=ke()){let e=Ma().length;if(!e)return-1;let t=/^\d{4}-\d{2}-\d{2}$/.test(ba().questionStart||"")?ba().questionStart:n;return(ai(t,n)%e+e)%e}var Sa=()=>window.FAMILY||{},uh=["letters","answers","replies","hearts","visits","water","votes","polls","scores","looks"],Vp=new Set(["votes","looks","answers"]),on=()=>!!Sa().sheet,Qg=()=>String(Sa().site||"main"),wi="family-mine-v1",mh="family-remote-v1",dh="family-code",xs=n=>{try{let e=JSON.parse(localStorage.getItem(n)||"{}");return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}},vs=(n,e)=>{try{localStorage.setItem(n,JSON.stringify(e))}catch{}},ey=()=>crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{let e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)}),Wp=n=>{try{dispatchEvent(new CustomEvent("family:data",{detail:n}))}catch{}},ph="family-local-lock",Oo=()=>{try{return JSON.parse(localStorage.getItem(ph)||"null")||{}}catch{return{}}},Ar=()=>{try{return localStorage.getItem(dh)||""}catch{return""}},Bo=n=>{try{n?localStorage.setItem(dh,n):localStorage.removeItem(dh)}catch{}},an={locked:!1,hint:"",known:!1},_s=()=>({...an,remote:on()});async function $p(){if(!on()){let n=Oo();return an.locked=!!n.code,an.hint=n.hint||"",an.known=!0,_s()}try{let n=await Es("GET",{action:"status",quiet:1});an.locked=!!n.locked,an.hint=String(n.hint||""),an.known=!0}catch{an.locked=!!Ar(),an.known=!1}return _s()}function Zi(){if(!an.locked)return!0;let n=Ar();return n?on()?!0:n===Oo().code:!1}async function qp(n){if(n=String(n||"").trim(),!n)return{ok:!1,error:"empty"};if(!on()){let e=n===String(Oo().code||"");return e&&Bo(n),{ok:e,error:e?null:"code"}}try{return await Es("GET",{action:"check",code:n}),Bo(n),{ok:!0}}catch(e){return{ok:!1,error:(e==null?void 0:e.message)==="code"?"code":"network"}}}async function jp({current:n="",next:e="",hint:t=""}={}){if(e=String(e||"").trim().slice(0,30),t=String(t||"").trim().slice(0,40),n=String(n||Ar()).trim(),on())try{await Es("POST",{quiet:1},{kind:"setcode",code:n,newCode:e,hint:t})}catch(i){return{ok:!1,error:(i==null?void 0:i.message)==="code"?"code":"network"}}else{let i=Oo();if(i.code&&n!==i.code)return{ok:!1,error:"code"};try{e?localStorage.setItem(ph,JSON.stringify({code:e,hint:t})):localStorage.removeItem(ph)}catch{}}return Bo(e),an.locked=!!e,an.hint=e?t:"",an.known=!0,{ok:!0}}var hh=null,No=n=>{var e;return((e=(Sa().members||[]).find(t=>t.id===n))==null?void 0:e.name)||n};function ty(){var l;if(hh)return hh;let n=Sa().samples||{},e=ke(),t=si().getTime(),i=(c=0,h=0)=>new Date(t-c*864e5-(40+h*37%300)*6e4).toISOString(),r=c=>pn(e,-(c||0)),s={};s.letters=(n.letters||[]).map((c,h)=>({id:`seed-letters-${h}`,who:c.from,name:No(c.from),to:c.to||"all",message:c.message,time:i(c.daysAgo,h),openAt:c.openInDays?pn(e,c.openInDays):"",seed:!0}));let a=c=>{let h=String(c||"").match(/^letters:(\d+)$/);return h?`seed-letters-${h[1]}`:String(c||"")};s.replies=(n.replies||[]).map((c,h)=>({id:`seed-replies-${h}`,who:c.who,name:No(c.who),target:a(c.target),text:c.text||"",emoji:c.emoji||"",time:i(0,h+3),seed:!0})),s.hearts=(n.hearts||[]).map((c,h)=>({id:`${c.from}-${c.to}-${r(c.daysAgo)}`,who:c.from,to:c.to,day:r(c.daysAgo),time:i(c.daysAgo,h),seed:!0})),s.visits=(n.visits||[]).map((c,h)=>({id:`${c.who}-${r(c.daysAgo)}`,who:c.who,day:r(c.daysAgo),time:i(c.daysAgo,h),seed:!0})),s.water=(n.water||[]).map((c,h)=>({id:`${c.who}-${r(c.daysAgo)}`,who:c.who,day:r(c.daysAgo),time:i(c.daysAgo,h),seed:!0})),s.votes=(n.votes||[]).map((c,h)=>({id:`${c.who}-${c.poll}`,who:c.who,poll:c.poll,choice:+c.choice||0,time:i(1,h),seed:!0})),s.scores=(n.scores||[]).map((c,h)=>({id:`seed-scores-${h}`,who:c.who,name:No(c.who),score:+c.score||0,total:+c.total||0,time:i(2,h),seed:!0})),s.answers=[];let o=Ma();for(let c=0;c<14&&o.length;c++){let h=pn(e,-c),u=Uo(h);Object.entries(((l=o[u])==null?void 0:l.samples)||{}).forEach(([d,f],m)=>{s.answers.push({id:`${d}-${h}`,who:d,name:No(d),day:h,q:u,text:f,time:i(c,m*5+1),seed:!0})})}return s.polls=[],s.looks=[],hh=s,s}var St={data:on()?xs(mh):{},at:0,loading:null,error:null,ok:!1},Xp=()=>({remote:on(),loading:!!St.loading,error:St.error,loaded:St.ok,at:St.at});async function Es(n,e,t){let i=new URL(Sa().sheet);i.searchParams.set("site",Qg()),n==="GET"&&!(e!=null&&e.code)&&i.searchParams.set("code",Ar()),Object.entries(e||{}).forEach(([a,o])=>i.searchParams.set(a,o));let r=typeof AbortController=="function"?new AbortController:null,s=setTimeout(()=>r==null?void 0:r.abort(),15e3);try{let o=await(await fetch(i.toString(),{method:n,redirect:"follow",signal:r==null?void 0:r.signal,...t?{body:JSON.stringify({code:Ar(),...t}),headers:{"Content-Type":"text/plain;charset=utf-8"}}:{}})).json();if(o&&o.error==="code"){if(!(e!=null&&e.code)&&!(e!=null&&e.quiet)){Bo(""),an.locked=!0;try{dispatchEvent(new CustomEvent("family:locked"))}catch{}}throw new Error("code")}if(!o||o.ok!==!0)throw new Error((o==null?void 0:o.error)||"bad response");return o}finally{clearTimeout(s)}}var ny=["q","choice","score","total"];function iy(n,e){let t={};if(Object.entries(e||{}).forEach(([i,r])=>{t[i]=r==null?"":r}),t.id=String(t.id||""),t.who=String(t.who||""),t.time&&typeof t.time!="string"&&(t.time=String(t.time)),ny.forEach(i=>{i in t&&t[i]!==""&&(t[i]=Number(t[i]))}),n==="looks"&&typeof t.look=="string")try{t.look=JSON.parse(t.look)}catch{t.look={}}return n==="polls"&&typeof t.options=="string"&&(t.options=t.options.split("|").filter(Boolean)),t.openAt&&typeof t.openAt!="string"&&(t.openAt=String(t.openAt)),t.openAt&&(t.openAt=String(t.openAt).slice(0,10)),(t.locked==="true"||t.locked===!0)&&(t.locked=!0),t}async function ry(){let n=xs(wi),e=!1;e:for(let t of uh)for(let i of n[t]||[]){if(!i.pending)continue;let{pending:r,...s}=i;try{await Es("POST",{},{kind:t,...s}),delete i.pending,e=!0}catch{break e}}e&&vs(wi,n)}function wn({force:n=!1}={}){return on()?St.loading?St.loading:!n&&St.ok&&Date.now()-St.at<1e4?Promise.resolve():(St.loading=(async()=>{try{await ry();let e=await Es("GET",{action:"all",t:Date.now()}),t={};uh.forEach(s=>{var a;t[s]=(Array.isArray((a=e.data)==null?void 0:a[s])?e.data[s]:[]).map(o=>iy(s,o)).filter(o=>o.id)}),St.data=t,St.at=Date.now(),St.ok=!0,St.error=null,vs(mh,t);let i=xs(wi),r=!1;uh.forEach(s=>{let a=new Set(t[s].map(o=>o.id));(i[s]||[]).forEach(o=>{o.pending&&a.has(o.id)&&!Vp.has(s)&&(delete o.pending,r=!0)})}),r&&vs(wi,i)}catch(e){St.error=(e==null?void 0:e.message)||String(e)}finally{St.loading=null,Wp({refresh:!0})}})(),St.loading):Promise.resolve()}function ot(n){let e=(xs(wi)[n]||[]).map(o=>({...o,mine:!0})),t=on()?St.data[n]||[]:[],i=ty()[n]||[],r=new Set(e.map(o=>o.id)),s=[...e,...t.map(o=>r.has(o.id)?{...o,mine:!0}:o),...i],a=new Map;for(let o of s){let l=a.get(o.id);if(!l){a.set(o.id,o);continue}(Vp.has(n)?(o.time||"")>(l.time||""):l.pending&&!o.pending)&&a.set(o.id,{...o,mine:l.mine||o.mine})}return[...a.values()].sort((o,l)=>String(l.time||"").localeCompare(String(o.time||"")))}async function Kt(n,e){let t={id:e.id||ey(),time:new Date().toISOString(),...e},i=xs(wi);i[n]=[on()?{...t,pending:!0}:t,...(i[n]||[]).filter(s=>s.id!==t.id)].slice(0,300),vs(wi,i);let r=()=>setTimeout(()=>Wp({kind:n,item:t}),0);if(!on())return r(),{ok:!0,item:t,sent:!1};try{await Es("POST",{},{kind:n,...t});let s=xs(wi),a=(s[n]||[]).find(o=>o.id===t.id);return a&&(delete a.pending,vs(wi,s)),St.data[n]=[t,...(St.data[n]||[]).filter(o=>o.id!==t.id)],vs(mh,St.data),{ok:!0,item:t,sent:!0}}catch(s){return{ok:!1,item:t,sent:!1,error:(s==null?void 0:s.message)||String(s)}}finally{r()}}var Rr=()=>window.FAMILY||{},sy=n=>String(n).padStart(2,"0"),Ji=["#8FB8DE","#F4B8C0","#F7D58B","#A8D08D","#C9B3E6","#F9C59E","#E88A98","#7FC8C2"],wa=["#5A3A2A","#3A2A24","#7A5238","#1E1A22","#C98A5B","#A8A39E","#E8E4DE"],ko=["#FFE8D6","#FFE0C7","#F6D2B2","#E8B98F","#C98E64","#9A6544"],Ho=10,qt=()=>`${Rr().name||"\uC6B0\uB9AC"} \uB9C8\uC744`,zo=null,Yp=-1;function ay(){let n=ot("looks"),e=n.map(t=>t.id+t.time).join();return e!==Yp&&(Yp=e,zo=new Map,n.forEach(t=>{zo.has(t.who)||zo.set(t.who,t.look||{})})),zo}function Dt(){let n=ay(),e=(Rr().members||[]).filter(r=>r&&r.id).slice(0,8),t=new Set(e.map(r=>r.id)),i=[...n.entries()].filter(([r,s])=>!t.has(r)&&s&&s.nick).map(([r,s])=>({id:r,name:s.nick,role:"",joined:s.joined||""})).sort((r,s)=>(r.joined||"").localeCompare(s.joined||""));return[...e,...i].slice(0,40).map((r,s)=>{let a=n.get(r.id)||{},o={outfit:Ji[s%Ji.length],hair:wa[s%5],longHair:!1,glasses:!1,hat:"",kid:!1,...r.look||{}},{nick:l,bday:c,joined:h,...u}=a;return{...r,name:l||r.name,nick:l||"",birthday:c||r.birthday,index:s,look:{...o,...u}}})}var Ut=n=>Dt().find(e=>e.id===n)||null,Tn=(n,e="")=>{var t;return((t=Ut(n))==null?void 0:t.name)||e||n||""},Ta=n=>{var e;return((e=Ut(n))==null?void 0:e.look.outfit)||"#F4B8C0"},Qt=n=>{let e=Ut(n);return e?e.nick||e.role||e.name:n||""},Zp="family-me";function _e(){let n="";try{n=localStorage.getItem(Zp)||""}catch{}return n==="guest"||Ut(n)?n:""}function Aa(n){try{localStorage.setItem(Zp,n)}catch{}try{dispatchEvent(new CustomEvent("family:me",{detail:n}))}catch{}}var vt=()=>Ut(_e()),Cr=()=>_e()==="guest";function Ki(){let n=Rr().since;return/^\d{4}-\d{2}-\d{2}$/.test(n||"")?ai(n,ke())+1:0}function bs(n=ke()){let e=n.slice(5);return Dt().filter(t=>t.birthday===e)}function oy(n,e,t){if(/^\d{4}-\d{2}-\d{2}$/.test(n)&&!e)return n>=t?n:null;let i=n.length===10?n.slice(5):n;if(!/^\d{2}-\d{2}$/.test(i))return null;let r=+t.slice(0,4),s=`${r}-${i}`;return s>=t?s:`${r+1}-${i}`}function Jp(){let n=Dt().filter(t=>/^\d{2}-\d{2}$/.test(t.birthday||"")).map(t=>({title:`${t.name} \uC0DD\uC77C`,date:t.birthday,yearly:!0,emoji:"\u{1F382}",kind:"birthday",member:t.id,note:t.lunar?"\uC74C\uB825 \uC0DD\uC77C (\uC62C\uD574 \uC591\uB825 \uB0A0\uC9DC)":""})),e=(Rr().events||[]).filter(t=>t&&t.date).map(t=>({...t,kind:"event",yearly:!!t.yearly||/^\d{2}-\d{2}$/.test(t.date)}));return[...n,...e]}function Ms(n=6,e=ke()){return Jp().map(t=>{let i=oy(t.date,t.yearly,e);return i?{...t,key:i,dday:ai(e,i)}:null}).filter(Boolean).sort((t,i)=>t.dday-i.dday).slice(0,n)}function Kp(n,e){let t={},i=`${n}-${sy(e)}`;return Jp().forEach(r=>{let s=r.yearly?`${n}-${r.date.length===10?r.date.slice(5):r.date}`:r.date;s.startsWith(i)&&(t[s]=t[s]||[]).push(r)}),t}var Ra=n=>n===0?"\uC624\uB298":n>0?`D-${n}`:`D+${-n}`;function Ss(n=ke()){let e=Uo(n);return e<0?null:{idx:e,q:Ma()[e].q,day:n}}function Ti(n){let e=new Set;return ot("answers").filter(t=>t.day===n&&!e.has(t.who)&&e.add(t.who)).reverse()}var fh=n=>Ti(n).find(e=>e.who===_e())||null;function Qp(n=14){let e=ke();return Array.from({length:n},(t,i)=>{let r=pn(e,-i),s=Ss(r);return s&&{...s,answers:Ti(r)}}).filter(Boolean)}var ws=n=>ot("hearts").filter(e=>e.to===n),em=n=>ws(n).filter(e=>e.day===ke()),Go=n=>ot("hearts").some(e=>e.to===n&&e.who===_e()&&e.day===ke());function Vo(n=ke()){return[...new Set(ot("visits").filter(t=>t.day===n).map(t=>t.who))].map(Ut).filter(Boolean)}var tm=()=>new Set(ot("visits").filter(n=>n.who===_e()).map(n=>n.day)).size,nm=(n,e)=>ot("visits").some(t=>t.who===n&&t.day===e),Wo=["\uC528\uC557","\uC0C8\uC2F9","\uBB18\uBAA9","\uB098\uBB34","\uAF43\uB098\uBB34","\uC5F4\uB9E4 \uB098\uBB34"];function Ai(){var c,h,u,d;let n=ot("water"),e=n.length,t=(((c=Rr().tree)==null?void 0:c.stages)||[3,10,25,45,80]).slice(0,5),i=0;t.forEach((f,m)=>{e>=f&&(i=m+1)});let r=(h=t[i])!=null?h:null,s=i?t[i-1]:0,a=ke(),o=[...new Set(n.filter(f=>f.day===a).map(f=>f.who))],l=((u=n[0])==null?void 0:u.day)||"";return{total:e,stage:i,stageName:Wo[i],next:r,toNext:r==null?0:r-e,progress:r==null?1:(e-s)/Math.max(1,r-s),todayWho:o,wateredToday:o.includes(_e()),thirsty:!l||ai(l,a)>=3,name:((d=Rr().tree)==null?void 0:d.name)||"\uC6B0\uB9AC \uAC00\uC871 \uB098\uBB34"}}var Ri=n=>!!n.locked||!!n.openAt&&n.openAt>ke(),Ca=n=>n.who!==_e()&&(n.to==="all"||n.to===_e()),im="family-read",gh=()=>{try{return new Set(JSON.parse(localStorage.getItem(im)||"[]"))}catch{return new Set}};function rm(n){let e=gh();if(!e.has(n)){e.add(n);try{localStorage.setItem(im,JSON.stringify([...e].slice(-500)))}catch{}try{dispatchEvent(new CustomEvent("family:read"))}catch{}}}function oi(){if(!vt())return[];let n=gh();return ot("letters").filter(e=>Ca(e)&&!Ri(e)&&!n.has(e.id))}var sm=n=>gh().has(n);function am(){let n=i=>(Array.isArray(i)?i:String(i||"").split("|")).map(r=>String(r).trim()).filter(Boolean),e=(Rr().polls||[]).filter(i=>i&&i.id).map(i=>({...i,options:n(i.options),cfg:!0}));return[...ot("polls").map(i=>({...i,options:n(i.options)})).filter(i=>i.q&&i.options.length>=2),...e].filter(i=>i.options.length>=2)}function yh(n){let e=new Map;return ot("votes").forEach(t=>{t.poll===n&&!e.has(t.who)&&e.set(t.who,t.choice)}),e}function om(){let n=new Map;return ot("scores").forEach(e=>{let t=n.get(e.who);(!t||e.score>t.score)&&n.set(e.who,e)}),[...n.values()].sort((e,t)=>t.score-e.score||String(e.time).localeCompare(String(t.time)))}function lm(n){let e=ot("replies").filter(r=>r.target===n).reverse(),t=e.filter(r=>r.text),i={};return e.filter(r=>r.emoji&&!r.text).forEach(r=>{(i[r.emoji]=i[r.emoji]||new Set).add(r.who)}),{texts:t,reacts:i}}function cm(){return Ms(10).filter(n=>n.dday===0)}var hm="family-sound",nt=null,Rs=null,er=null,_h=null,Cs=!1,La=null,Pr=0,$o=0,vh=349.23,Ts=392,Qi=440,Lr=523.25,xh=587.33,ly=698.46;var um=[Lr,0,Qi,Ts,vh,0,Ts,Qi,Lr,0,xh,0,Lr,0,Qi,0,Ts,0,vh,Ts,Qi,0,0,0,xh,0,Lr,Qi,Lr,0,ly,0,xh,Lr,Qi,0,Ts,Qi,Lr,0,Qi,Ts,vh,0,0,0,0,0],dm=[87.31,116.54,87.31,130.81],cy=.34;function hy(){if(nt)return nt;let n=window.AudioContext||window.webkitAudioContext;if(!n)return null;nt=new n,Rs=nt.createGain(),Rs.gain.value=.9,Rs.connect(nt.destination),er=nt.createGain(),er.gain.value=.12,er.connect(Rs),_h=nt.createBuffer(1,nt.sampleRate,nt.sampleRate);let e=_h.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;return nt}function bt(n,e,t,{type:i="sine",gain:r=.2,dest:s=Rs,slide:a=0}={}){let o=nt.createOscillator(),l=nt.createGain();o.type=i,o.frequency.setValueAtTime(n,e),a&&o.frequency.exponentialRampToValueAtTime(a,e+t),l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(r,e+.012),l.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(l),l.connect(s),o.start(e),o.stop(e+t+.05)}function As(n,e,{gain:t=.2,type:i="lowpass",freq:r=2e3}={}){let s=nt.createBufferSource(),a=nt.createBiquadFilter(),o=nt.createGain();s.buffer=_h,a.type=i,a.frequency.value=r,o.gain.setValueAtTime(t,n),o.gain.exponentialRampToValueAtTime(1e-4,n+e),s.connect(a),a.connect(o),o.connect(Rs),s.start(n),s.stop(n+e+.02)}function uy(){if(!(!nt||!Cs))for(;Pr<nt.currentTime+.4;){let n=um[$o%um.length];n&&(bt(n,Pr,.7,{type:"sine",gain:.5,dest:er}),bt(n*4,Pr,.12,{type:"sine",gain:.06,dest:er})),$o%6===0&&bt(dm[Math.floor($o/12)%dm.length],Pr,1.6,{type:"triangle",gain:.16,dest:er}),Pr+=cy,$o++}}var Qe={get enabled(){return Cs},saved(){try{return localStorage.getItem(hm)==="1"}catch{return!1}},setEnabled(n){if(n&&!hy())return!1;Cs=n;try{localStorage.setItem(hm,n?"1":"0")}catch{}return n?(nt.resume().catch(()=>{}),La||(Pr=nt.currentTime+.1,La=setInterval(uy,120))):(La&&(clearInterval(La),La=null),nt==null||nt.suspend().catch(()=>{})),Cs},sfx(n){if(!Cs||!nt)return;let e=nt.currentTime;switch(n){case"chime":bt(880,e,.25,{gain:.14}),bt(1318.5,e+.09,.32,{gain:.12});break;case"crackle":for(let t=0;t<6;t++)As(e+t*.06+Math.random()*.04,.05,{gain:.12,type:"highpass",freq:1800+Math.random()*1500});bt(220,e,.3,{type:"triangle",gain:.06,slide:160});break;case"coin":bt(1760,e,.1,{type:"square",gain:.05}),bt(2217,e+.07,.28,{type:"square",gain:.05}),As(e+.3,.3,{gain:.07,freq:1400});break;case"shutter":As(e,.05,{gain:.3,type:"highpass",freq:3e3}),As(e+.07,.04,{gain:.18,type:"highpass",freq:2500});break;case"paper":As(e,.16,{gain:.12,type:"bandpass",freq:900}),bt(1047,e+.1,.3,{gain:.08});break;case"jump":bt(320,e,.18,{type:"triangle",gain:.12,slide:760});break;case"heart":bt(1047,e,.18,{gain:.07}),bt(1318.5,e+.05,.22,{gain:.06});break;case"ok":bt(659,e,.14,{gain:.12}),bt(830.6,e+.11,.3,{gain:.12});break;case"no":bt(330,e,.2,{type:"triangle",gain:.1}),bt(262,e+.16,.34,{type:"triangle",gain:.1});break;case"pop":bt(600,e,.08,{type:"triangle",gain:.1,slide:900});break;case"tada":[523.25,659.25,783.99,1046.5].forEach((t,i)=>bt(t,e+i*.09,.4,{gain:.12}));break;case"water":[1318.5,1568,1760].forEach((t,i)=>bt(t,e+i*.07,.18,{gain:.06,slide:t*.8})),As(e,.35,{gain:.05,type:"bandpass",freq:2600});break;case"birthday":{[[523.25,0,.18],[659.25,.16,.18],[783.99,.32,.18],[1046.5,.5,.45],[880,.95,.18],[987.77,1.12,.18],[1046.5,1.3,.6]].forEach(([i,r,s])=>{bt(i,e+r,s+.2,{gain:.11}),bt(i/2,e+r,s+.2,{type:"triangle",gain:.05})});break}}},duck(n){er&&nt&&er.gain.setTargetAtTime(n?.04:.12,nt.currentTime,.12)}};document.addEventListener("visibilitychange",()=>{!nt||!Cs||(document.hidden?nt.suspend().catch(()=>{}):(nt.resume().catch(()=>{}),Pr=nt.currentTime+.1))});var mm=window.FAMILY,cn=n=>document.querySelector(n),Fe=n=>String(n!=null?n:"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Fa=[],bh=0;function tr(n){Fa.push(n);try{history.pushState({wv:Fa.length},"")}catch{}}function Dr(n){let e=Fa.lastIndexOf(n);e<0||(Fa.splice(e,1),bh++,history.back())}addEventListener("popstate",()=>{var n;if(bh>0){bh--;return}(n=Fa.pop())==null||n()});var Fr=null,fm=null,Rh=()=>cn("#modal");function Mh(){let n=Rh();!n.classList.contains("open")||n.classList.contains("closing")||(n.classList.add("closing"),Qe.duck(!1),Fr&&(Fr(),Fr=null),fm=setTimeout(()=>{n.classList.remove("open","closing"),n.querySelector(".sheet").style.transform=""},220))}function Ua(n,e,t){let i=Rh();Fr&&(Fr(),Fr=null);let r=i.classList.contains("open")&&!i.classList.contains("closing");clearTimeout(fm),i.classList.remove("closing"),i.querySelector(".sheet").style.transform="",cn("#modal-title").textContent=n;let s=cn("#modal-body");s.innerHTML=e,s.scrollTop=0,i.classList.add("open"),Qe.duck(!0),r||tr(Mh),t&&(Fr=t(s)||null)}function ln(){let n=Rh();!n.classList.contains("open")||n.classList.contains("closing")||(Mh(),Dr(Mh))}var An=()=>cn("#modal").classList.contains("open")||cn("#lightbox").classList.contains("open"),Ur=(n,e)=>Ua(n,e.html,e.mount),pm;function tt(n,e=2400){let t=cn("#toast");t.textContent=n,t.classList.add("show"),clearTimeout(pm),pm=setTimeout(()=>t.classList.remove("show"),e)}var Sh=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;function nr(n=["\u{1F338}","\u{1F497}","\u2728","\u{1F389}","\u{1F490}"]){if(!Sh())for(let e=0;e<28;e++){let t=document.createElement("div");t.className="confetti",t.textContent=n[e%n.length],t.style.left=Math.random()*100+"%",t.style.animationDuration=2+Math.random()*2+"s",t.style.animationDelay=Math.random()*.6+"s",(cn("#phone")||document.body).appendChild(t),setTimeout(()=>t.remove(),5e3)}}async function Ch(n,e="\uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694"){let t=!1;try{await navigator.clipboard.writeText(n),t=!0}catch{let i=document.createElement("textarea");i.value=n,i.readOnly=!0,i.style.cssText="position:fixed;top:0;left:0;opacity:0;-webkit-user-select:text;user-select:text",document.body.appendChild(i),i.focus(),i.select();try{i.setSelectionRange(0,n.length),t=document.execCommand("copy")}catch{t=!1}i.remove()}return Ye(10),tt(t?`\u{1F4CB} ${e}`:"\uBCF5\uC0AC\uAC00 \uC548 \uB3FC\uC694. \uAE00\uC790\uB97C \uAE38\uAC8C \uB20C\uB7EC \uBCF5\uC0AC\uD574 \uC8FC\uC138\uC694"),t}function dy(n){n.querySelectorAll("[data-copy]").forEach(e=>e.addEventListener("click",t=>{e.tagName!=="BUTTON"&&t.target.closest("button")||Ch(e.dataset.copy,e.dataset.msg)}))}function gm(n={},e=""){return`<span class="${["avatar",n.longHair?"long":"",n.kid?"kid":"",e].filter(Boolean).join(" ")}" style="--outfit:${Fe(n.outfit||"#8FB8DE")};--hair:${Fe(n.hair||"#5A3A2A")}" aria-hidden="true"><i class="hd"></i><i class="bd"></i><i class="lg"></i>${n.glasses?'<i class="gls"></i>':""}${n.hat?`<i class="ht ht-${Fe(n.hat)}"></i>`:""}</span>`}var py=(n,e)=>{let t=Ut(n);return`<span class="who-chip" style="--c:${Fe(t?t.look.outfit:"#E6D5C6")}">${Fe(t?t.nick||t.role||t.name:e||"\uC190\uB2D8")}</span>`};function Lh(n){if(!n)return;if(!on()){n.hidden=!0;return}let e=Xp();n.hidden=!1,e.loading&&!e.loaded?n.textContent="\uAC00\uC871 \uC18C\uC2DD\uC744 \uBD88\uB7EC\uC624\uB294 \uC911\u2026":e.error&&!e.loaded?(n.innerHTML='\uC9C0\uAE08\uC740 \uC18C\uC2DD\uC744 \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC5B4\uC694. <button type="button" class="linklike st-retry">\uB2E4\uC2DC \uC2DC\uB3C4</button>',n.querySelector(".st-retry").onclick=()=>{wn({force:!0}),Lh(n)}):e.error?n.textContent="\uB9C8\uC9C0\uB9C9\uC73C\uB85C \uBC1B\uC544 \uC628 \uC18C\uC2DD\uC774\uC5D0\uC694 (\uC9C0\uAE08\uC740 \uC5F0\uACB0\uC774 \uC5B4\uB824\uC6CC\uC694)":n.hidden=!0}function Ph(n){let e=()=>n();return addEventListener("family:data",e),()=>removeEventListener("family:data",e)}var ym=(n,e)=>tt(n.ok?e:"\uD734\uB300\uD3F0\uC5D0 \uBCF4\uAD00\uD588\uC5B4\uC694. \uC5F0\uACB0\uB418\uBA74 \uC790\uB3D9\uC73C\uB85C \uBCF4\uB0BC\uAC8C\uC694",n.ok?2400:3600),my=["\u{1F44D}","\u{1F602}","\u{1F979}","\u{1F497}"],fy=n=>[...n].map(e=>e.codePointAt(0).toString(16)).join("");function vm(n,{compact:e=!1}={}){let t=i=>{let r=i.querySelector(`[data-rx="${CSS.escape(n)}"]`)||i,s=!1,a=()=>{if(!r.isConnected)return;let{texts:o,reacts:l}=lm(n),c=_e(),h=!!vt();r.innerHTML=`
        <div class="rx-emojis">${my.map(f=>{let m=l[f],g=(m==null?void 0:m.size)||0;return`<button type="button" class="rx-e${m!=null&&m.has(c)?" on":""}" data-e="${f}" ${h?"":"disabled"} aria-label="${f} \uBC18\uC751 ${g}\uAC1C">${f}${g?`<b>${g}</b>`:""}</button>`}).join("")}</div>
        ${o.length?`<ul class="rx-list">${o.map(f=>`<li>${py(f.who,f.name)} <span>${Fe(f.text)}</span> <small>${Xi(f.time)}</small></li>`).join("")}</ul>`:""}
        ${h?`${e?'<button type="button" class="linklike rx-open">\u{1F4AC} \uB2F5\uC7A5 \uC4F0\uAE30</button>':""}<form class="rx-form" autocomplete="off" ${e&&!s?"hidden":""}><input class="field rx-in" maxlength="80" placeholder="\uB2F5\uC7A5 \uD55C \uC904 \uB0A8\uAE30\uAE30" aria-label="\uB2F5\uC7A5"><button class="btn small pink" type="submit">\uBCF4\uB0B4\uAE30</button></form>`:""}`;let u=r.querySelector(".rx-open");u&&(u.onclick=()=>{s=!0,u.hidden=!0;let f=r.querySelector(".rx-form");f.hidden=!1,f.querySelector(".rx-in").focus()}),u&&s&&(u.hidden=!0),r.querySelectorAll(".rx-e").forEach(f=>f.onclick=async()=>{if(f.classList.contains("on")){tt("\uC774\uBBF8 \uB9C8\uC74C\uC744 \uB0A8\uACBC\uC5B4\uC694 \u{1F60A}");return}Ye(8),Qe.sfx("heart"),f.classList.add("on"),await Kt("replies",{id:`${c}-${n}-${fy(f.dataset.e)}`,who:c,name:Tn(c),target:n,emoji:f.dataset.e,text:""}),a()});let d=r.querySelector(".rx-form");d&&(d.onsubmit=async f=>{f.preventDefault();let m=d.querySelector(".rx-in"),g=m.value.trim();if(!g)return;m.value="";let p=await Kt("replies",{who:c,name:Tn(c),target:n,text:g,emoji:""});ym(p,"\u{1F4AC} \uB2F5\uC7A5\uC744 \uB0A8\uACBC\uC5B4\uC694"),Qe.sfx("paper"),a()})};return a(),Ph(a)};return{html:`<div class="rx" data-rx="${Fe(n)}"></div>`,mount:t}}var gy=(n,e)=>{let t=Ri(n),i=!t&&Ca(n)&&!sm(n.id),r=n.pending?"\u23F3":t?"\u{1F512}":n.openAt?"\u{1F381}":n.mine?"\u270D\uFE0F":"\u{1F48C}",s=n.pending?"\uBCF4\uB0B4\uB294 \uC911":t?`${mn(n.openAt,!1)}\uC5D0 \uC5F4\uB824\uC694`:`${n.to==="all"?"\uBAA8\uB450\uC5D0\uAC8C":`To. ${Qt(n.to)}`} \xB7 ${Xi(n.time)}`;return`
  <button type="button" class="env${n.mine?" mine":""}${n.pending?" pending":""}${t?" locked":""}${i?" unread":""}" style="--c:${Fe(Ta(n.who))}" data-i="${e}" aria-label="${Fe(n.name||Tn(n.who))}\uC758 \uD3B8\uC9C0 \uC5F4\uAE30">
    <span class="flap" aria-hidden="true"></span>
    <span class="seal" aria-hidden="true">${r}</span>
    <b class="env-name">${t?"\u23F3 \uD0C0\uC784\uCEA1\uC290":Fe(n.name||Tn(n.who))}</b>
    <small class="env-meta">${Fe(s)}</small>
  </button>`};function jo(n,{onBack:e,to:t="",filter:i=""}={}){let r=vt(),s=!r,a=Dt().filter(c=>c.id!==_e());return{html:`
    <p class="muted" style="line-height:1.7">${s?"\uAC00\uC871\uC5D0\uAC8C \uC548\uBD80 \uD55C\uB9C8\uB514 \uB0A8\uACA8 \uC8FC\uC138\uC694 \u{1F48C}":`<b>${Fe(r.role||r.name)}</b>${Fe(Yi(r.role||r.name,"\uC774/\uAC00").slice(String(r.role||r.name).length))} \uAC00\uC871\uC5D0\uAC8C \uBCF4\uB0B4\uB294 \uD3B8\uC9C0\uC608\uC694 \u{1F48C}`}</p>
    <form class="letter-form" autocomplete="off">
      ${s?'<input class="field l-name" maxlength="20" placeholder="\uC774\uB984" aria-label="\uC774\uB984" />':""}
      <div class="to-row" role="group" aria-label="\uBC1B\uB294 \uC0AC\uB78C">
        <button type="button" class="to-chip on" data-to="all">\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466} \uBAA8\uB450\uC5D0\uAC8C</button>
        ${a.map(c=>`<button type="button" class="to-chip" data-to="${Fe(c.id)}" style="--c:${Fe(c.look.outfit)}">${Fe(c.nick||c.role||c.name)}</button>`).join("")}
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
    <div class="env-grid l-list" style="margin-top:10px"></div>`,mount:c=>{let h="all",u=i||"all",d=C=>{h=C,c.querySelectorAll(".to-chip").forEach(I=>I.classList.toggle("on",I.dataset.to===C))};c.querySelectorAll(".to-chip").forEach(C=>C.onclick=()=>{Ye(6),d(C.dataset.to)}),t&&a.some(C=>C.id===t)&&d(t);let f=c.querySelector(".l-tc"),m=c.querySelector(".tc-date"),g=c.querySelector(".l-open"),p=pn(ke(),1);g.min=p,g.value=pn(ke(),100),f.onchange=()=>{m.hidden=!f.checked};let x=c.querySelector(".l-list"),y=c.querySelector(".l-count"),v=c.querySelector(".l-status"),b=e||(()=>Hn(n,{filter:u})),R=()=>{if(!c.isConnected)return;let C=ot("letters"),I=u==="me"?C.filter(Ca):u==="mine"?C.filter(_=>_.who===_e()):C;y.textContent=C.length?`${C.length}\uD1B5`:"";let H=c.querySelector(".l-unread");if(H){let _=oi().length;H.textContent=_||""}c.querySelectorAll(".l-filter button").forEach(_=>_.classList.toggle("on",_.dataset.f===u)),x.innerHTML=I.length?I.slice(0,60).map(gy).join(""):`<p class="muted">${u==="me"?"\uC544\uC9C1 \uB098\uC5D0\uAC8C \uC628 \uD3B8\uC9C0\uAC00 \uC5C6\uC5B4\uC694":u==="mine"?"\uC544\uC9C1 \uC4F4 \uD3B8\uC9C0\uAC00 \uC5C6\uC5B4\uC694":"\uC544\uC9C1 \uD3B8\uC9C0\uAC00 \uC5C6\uC5B4\uC694. \uCCAB \uD3B8\uC9C0\uB97C \uB0A8\uACA8 \uC8FC\uC138\uC694!"}</p>`,x.querySelectorAll(".env").forEach(_=>_.onclick=()=>{Ye(8);let P=I[+_.dataset.i];if(Ri(P)){tt(`\u23F3 \uC544\uC9C1 \uC5F4 \uC218 \uC5C6\uC5B4\uC694 \xB7 ${mn(P.openAt)} (D-${ai(ke(),P.openAt)})`,3e3);return}_.classList.add("open"),setTimeout(()=>Na(I,+_.dataset.i,b),Sh()?0:260)}),Lh(v)};c.querySelectorAll(".l-filter button").forEach(C=>C.onclick=()=>{u=C.dataset.f,Ye(6),R()}),R(),wn();let S=Ph(R),T=c.querySelector(".letter-form"),z=c.querySelector(".l-send");return T.onsubmit=async C=>{var Z;C.preventDefault();let I=s?c.querySelector(".l-name").value.trim():r.name,H=c.querySelector(".l-msg").value.trim();if(!I||!H){tt(s?"\uC774\uB984\uACFC \uD3B8\uC9C0 \uB0B4\uC6A9\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694":"\uD3B8\uC9C0 \uB0B4\uC6A9\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694");return}let _=f.checked?g.value||pn(ke(),100):"";if(_&&_<=ke()){tt("\uC5F4\uB9AC\uB294 \uB0A0\uC740 \uB0B4\uC77C \uC774\uD6C4\uB85C \uACE8\uB77C \uC8FC\uC138\uC694");return}let P=z.textContent;z.disabled=!0,on()&&(z.textContent="\uBCF4\uB0B4\uB294 \uC911\u2026");let U=await Kt("letters",{who:s?"guest":_e(),name:I,to:h,message:H,openAt:_});if(z.textContent=P,z.disabled=!1,!c.isConnected)return;c.querySelector(".l-msg").value="",f.checked=!1,m.hidden=!0;let O=h==="all"?"\uAC00\uC871 \uBAA8\uB450\uC5D0\uAC8C":`${Qt(h)}\uC5D0\uAC8C`;ym(U,_?`\u23F3 \uD0C0\uC784\uCEA1\uC290\uC744 \uBB3B\uC5C8\uC5B4\uC694. ${mn(_)}\uC5D0 \uC5F4\uB824\uC694`:`\u{1F48C} ${O} \uD3B8\uC9C0\uB97C \uBCF4\uB0C8\uC5B4\uC694`),nr(["\u{1F48C}","\u{1F497}","\u2728"]),Ye(20),Qe.sfx("paper"),n==null||n(U.item),u="all",R(),(Z=x.querySelector(".env"))==null||Z.scrollIntoView({behavior:Sh()?"auto":"smooth",block:"center"})},S}}}function Hn(n,e){Ur("\uC548\uBD80 \uC6B0\uCCB4\uD1B5",jo(n,e))}function xm(n,e,t){let i=n[e];Ca(i)&&rm(i.id);let r=vm(i.id);return{html:`
    <article class="paper" style="--c:${Fe(Ta(i.who))}" aria-label="${Fe(i.name)}\uC758 \uD3B8\uC9C0">
      <div class="paper-top"><span class="paper-stamp">${i.openAt?"\u{1F381}":i.mine?"\u270D\uFE0F":"\u{1F48C}"}</span><span>To. ${i.to==="all"?"\uC6B0\uB9AC \uAC00\uC871":Fe(Tn(i.to))}</span></div>
      ${i.openAt?`<p class="muted" style="margin:0 0 6px">\u23F3 ${Xi(i.time)}\uC5D0 \uBB3B\uC5B4 \uB454 \uD0C0\uC784\uCEA1\uC290\uC774\uC5D0\uC694</p>`:""}
      <p class="paper-msg">${Fe(i.message)}</p>
      <div class="paper-from">From. <b>${Fe(i.name||Tn(i.who))}</b><small>${Xi(i.time)}</small></div>
    </article>
    ${r.html}
    <div class="paper-nav">
      <button class="btn small p-prev" ${e<=0?"disabled":""}>\u2039 \uC774\uC804</button>
      <span class="muted">${e+1} / ${n.length}</span>
      <button class="btn small p-next" ${e>=n.length-1?"disabled":""}>\uB2E4\uC74C \u203A</button>
    </div>
    <button class="btn p-back" style="width:100%;margin-top:10px">\u2709\uFE0F \uC6B0\uCCB4\uD1B5\uC73C\uB85C</button>`,mount:o=>{let l=d=>{let f=e+d;for(;n[f]&&Ri(n[f]);)f+=d;n[f]&&(Ye(6),Na(n,f,t))};o.querySelector(".p-prev").onclick=()=>l(-1),o.querySelector(".p-next").onclick=()=>l(1),o.querySelector(".p-back").onclick=t;let c=o.querySelector(".paper"),h=0,u=0;return c.addEventListener("pointerdown",d=>{h=d.clientX,u=d.clientY}),c.addEventListener("pointerup",d=>{let f=d.clientX-h,m=d.clientY-u;Math.abs(f)>70&&Math.abs(f)>Math.abs(m)*1.5&&l(f<0?1:-1)}),r.mount(o)}}}function Na(n,e,t=ln){Ur("\u{1F48C} \uD3B8\uC9C0",xm(n,e,t))}function Xo(){let n=mm.place||{},e=(i,r)=>r&&r.length?`<div class="card"><b>${i}</b><div class="muted" style="margin-top:6px;line-height:1.7">${r.map(Fe).join("<br>")}</div></div>`:"";return{html:`
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
    ${e("\u{1F17F}\uFE0F \uC8FC\uCC28",n.parking?[n.parking]:[])}`,mount:dy}}function Ba(){Ur("\uBAA8\uC774\uB294 \uACF3",Xo())}function Eh(){let n=om();return n.length?`<ol class="board">${n.map((e,t)=>{var i,r;return`<li><span class="rank">${["\u{1F947}","\u{1F948}","\u{1F949}"][t]||t+1}</span>${gm(((i=Ut(e.who))==null?void 0:i.look)||{},"mini")}<b>${Fe(((r=Ut(e.who))==null?void 0:r.role)||e.name||Tn(e.who))}</b><span class="sc">${e.score} / ${e.total}</span></li>`}).join("")}</ol>`:'<p class="muted center">\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694. \uCCAB \uAE30\uB85D\uC758 \uC8FC\uC778\uACF5\uC774 \uB418\uC5B4 \uBCF4\uC138\uC694!</p>'}function Yo(){let n=mm.quiz||[];return{html:'<div class="quiz-box"></div>',mount:t=>{let i=t.querySelector(".quiz-box")||t,r=-1,s=0,a=null,o=!0,l=()=>{if(!o)return;if(r<0){i.innerHTML=`
          <p class="muted center" style="line-height:1.7">\uB204\uAC00 \uC6B0\uB9AC \uAC00\uC871\uC744 \uC81C\uC77C \uC798 \uC54C\uAE4C\uC694? \u{1F914}<br>${n.length}\uBB38\uC81C\uB97C \uD480\uBA74 \uC810\uC218\uD310\uC5D0 \uC774\uB984\uC774 \uC62C\uB77C\uAC00\uC694</p>
          <div class="card"><b>\u{1F3C6} \uC810\uC218\uD310</b>${Eh()}</div>
          <button class="btn pink q-start" style="width:100%">\u2753 \uD034\uC988 \uC2DC\uC791</button>`,i.querySelector(".q-start").onclick=()=>{r=0,s=0,l()};return}if(r>=n.length){let h=s===n.length;i.innerHTML=`
          <div class="center" style="padding:14px 0 6px">
            <div style="font-size:60px">${h?"\u{1F3C6}":s>=n.length/2?"\u{1F970}":"\u{1F331}"}</div>
            <div class="quiz-q">${n.length}\uBB38\uC81C \uC911 <b style="color:var(--rose-deep)">${s}\uAC1C</b> \uB9DE\uD614\uC5B4\uC694!</div>
            <p class="muted">${h?"\uC6B0\uB9AC \uAC00\uC871 \uBC15\uC0AC\uB2D8\uC774\uC2DC\uB124\uC694! \u{1F495}":"\uC774\uC81C \uC6B0\uB9AC \uAC00\uC871\uC744 \uC870\uAE08 \uB354 \uC54C\uAC8C \uB410\uC8E0? \u{1F60A}"}</p>
          </div>
          <div class="card"><b>\u{1F3C6} \uC810\uC218\uD310</b><div class="q-board">${Eh()}</div></div>
          <button class="btn pink q-again" style="width:100%">\uB2E4\uC2DC \uD480\uAE30</button>`,i.querySelector(".q-again").onclick=()=>{r=0,s=0,l()},h&&nr(),vt()&&Kt("scores",{who:_e(),name:Tn(_e()),score:s,total:n.length}).then(()=>{let u=i.querySelector(".q-board");u&&(u.innerHTML=Eh())});return}let c=n[r];i.innerHTML=`
        <div class="progress-dots">${n.map((h,u)=>`<i class="${u<=r?"on":""}"></i>`).join("")}</div>
        <div class="quiz-q">Q${r+1}. ${Fe(c.q)}</div>
        ${c.options.map((h,u)=>`<button class="quiz-opt" data-k="${u}">${Fe(h)}</button>`).join("")}
        <p class="muted center q-cmt" style="min-height:24px"></p>`,i.querySelectorAll(".quiz-opt").forEach(h=>h.onclick=()=>{let u=+h.dataset.k;i.querySelectorAll(".quiz-opt").forEach(d=>d.disabled=!0),i.querySelectorAll(".quiz-opt")[c.answer].classList.add("right"),u===c.answer?(s++,Qe.sfx("ok")):(h.classList.add("wrong"),Qe.sfx("no")),i.querySelector(".q-cmt").textContent=(u===c.answer?"\u2B55 \uC815\uB2F5! ":"\u274C \uC544\uC26C\uC6CC\uC694! ")+(c.comment||""),a=setTimeout(()=>{r++,l()},1700)})};return l(),()=>{o=!1,clearTimeout(a)}}}}function Oa(){Ur("\uAC00\uC871 \uD034\uC988",Yo())}async function za(){let n={title:qt(),text:"\uC6B0\uB9AC \uAC00\uC871 \uB9C8\uC744\uC5D0 \uB180\uB7EC \uC640\uC694 \u{1F3E1}",url:location.href.split("#")[0]};if(navigator.share)try{await navigator.share(n);return}catch(e){if((e==null?void 0:e.name)==="AbortError")return}Ch(n.url,"\uC8FC\uC18C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694")}var Ia=null;addEventListener("beforeinstallprompt",n=>{n.preventDefault(),Ia=n});addEventListener("appinstalled",()=>{Ia=null,tt("\u{1F4F1} \uD648 \uD654\uBA74\uC5D0 \uAC00\uC871 \uB9C8\uC744\uC774 \uC0DD\uACBC\uC5B4\uC694!",3200)});var Zo=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;async function Ih(){if(Ia){let s=Ia;Ia=null;try{s.prompt(),await s.userChoice}catch{}return}let n=navigator.userAgent,e=/KAKAOTALK|NAVER|Instagram|FBAN|FBAV|Line\//i.test(n),t=/iPhone|iPad|iPod/i.test(n)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,i=e?["\uC624\uB978\uCABD \uC544\uB798(\uB610\uB294 \uC704) <b>\u22EE \xB7 \uACF5\uC720</b> \uBC84\uD2BC",`<b>${t?"Safari\uB85C \uC5F4\uAE30":"\uB2E4\uB978 \uBE0C\uB77C\uC6B0\uC800\uB85C \uC5F4\uAE30"}</b>`,t?"\uC5F4\uB9B0 Safari\uC5D0\uC11C \uC544\uB798 \uC21C\uC11C\uB300\uB85C":"\uC5F4\uB9B0 \uD06C\uB86C\uC5D0\uC11C \uC544\uB798 \uC21C\uC11C\uB300\uB85C"]:[],r=t?['\uD654\uBA74 \uC544\uB798 <b>\uACF5\uC720 \uBC84\uD2BC</b> <span class="kbd">\u2B06\uFE0E</span> \uB204\uB974\uAE30',"<b>\uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00</b> \uACE0\uB974\uAE30","\uC624\uB978\uCABD \uC704 <b>\uCD94\uAC00</b>"]:["\uC624\uB978\uCABD \uC704 <b>\u22EE</b> \uBA54\uB274 \uB204\uB974\uAE30","<b>\uC571 \uC124\uCE58</b> \uB610\uB294 <b>\uD648 \uD654\uBA74\uC5D0 \uCD94\uAC00</b>","<b>\uC124\uCE58</b> \uB204\uB974\uAE30"];Ua("\u{1F4F1} \uC571\uC73C\uB85C \uC124\uCE58",`
    <div class="card center"><div style="font-size:44px">\u{1F3E1}</div><b>\uD648 \uD654\uBA74\uC5D0 \uAC00\uC871 \uB9C8\uC744 \uC544\uC774\uCF58\uC744 \uB9CC\uB4E4\uC5B4\uC694</b>
      <p class="muted" style="margin:6px 0 0">\uB2E4\uC74C\uBD80\uD130\uB294 \uC544\uC774\uCF58\uB9CC \uB204\uB974\uBA74 \uBC14\uB85C \uC5F4\uB824\uC694. \uC778\uD130\uB137\uC774 \uC7A0\uAE50 \uB04A\uACA8\uB3C4 \uC5F4\uB9AC\uACE0, \uC4F4 \uAE00\uC740 \uC5F0\uACB0\uB418\uBA74 \uBCF4\uB0B4\uC838\uC694</p></div>
    ${i.length?`<div class="card"><b>\uBA3C\uC800, \uC9C0\uAE08 \uC571 \uC548\uC758 \uBE0C\uB77C\uC6B0\uC800\uB77C\uBA74</b><ol class="howto">${i.map(s=>`<li>${s}</li>`).join("")}</ol></div>`:""}
    <div class="card"><b>${t?"\uC544\uC774\uD3F0 (Safari)":"\uC548\uB4DC\uB85C\uC774\uB4DC (\uD06C\uB86C\xB7\uC0BC\uC131 \uC778\uD130\uB137)"}</b><ol class="howto">${r.map(s=>`<li>${s}</li>`).join("")}</ol></div>`)}var yy=[["","\u{1F333} \uB9C8\uC744 \uACF3\uACF3"],["me","\u{1F64B} \uB098"],["set","\u2699\uFE0F \uBCF4\uAE30 \xB7 \uC124\uC815"]];function _m(n){let e=(r,s)=>`<button class="menu-item${s?" small":""}" data-i="${n.indexOf(r)}"><span class="e">${r.emoji}</span>${Fe(r.label)}</button>`;return{html:`
    <p class="muted">\uC6D0\uD558\uB294 \uACF3\uC744 \uB204\uB974\uBA74 \uBC14\uB85C \uBCFC \uC218 \uC788\uC5B4\uC694</p>
    ${yy.map(([r,s])=>{let a=n.filter(o=>(o.g||"")===r);return a.length?`<h4 class="menu-sec">${s}</h4><div class="menu-grid${r==="set"?" small":""}">${a.map(o=>e(o,r==="set")).join("")}</div>`:""}).join("")}`,mount:r=>{r.querySelectorAll(".menu-item").forEach(s=>s.onclick=()=>{Ye(8),n[+s.dataset.i].go()})}}}function Fh(n){Ur("\uBC14\uB85C\uAC00\uAE30",_m(n))}function Jo(n,e=-1){return{html:(e>=0?[n[e]]:n).map(s=>`
    <div class="album-theme">
      <h3>${s.emoji} ${Fe(s.title)} <span class="muted" style="font-size:13px">${s.photos.length}\uC7A5</span></h3>
      <div class="muted" style="font-size:13px">${Fe(s.subtitle||"")}</div>
      <div class="album-grid">
        ${s.photos.map((a,o)=>`<button type="button" data-t="${n.indexOf(s)}" data-i="${o}" aria-label="${Fe(a.caption||s.title+" "+(o+1))}"><img loading="lazy" src="${Fe(wr(a,"thumb"))}" alt="" /></button>`).join("")}
      </div>
    </div>`).join(""),mount:s=>{s.querySelectorAll(".album-grid img").forEach(a=>{a.onerror=()=>{let o=a.parentElement,l=n[+o.dataset.t];a.onerror=null,a.src=Tr(l,+o.dataset.i,l.photos[+o.dataset.i].src,300,300).toDataURL()}}),s.querySelectorAll(".album-grid button").forEach(a=>a.onclick=()=>Ko(n,+a.dataset.t,+a.dataset.i))}}}function Nr(n,e=-1){Ur(e>=0?`${n[e].title} \uC568\uBC94`:"\uC804\uCCB4 \uC568\uBC94",Jo(n,e))}var kn={themes:null,ti:0,i:0},Ge={s:1,x:0,y:0},Ps=()=>cn("#lightbox"),Da=()=>cn("#lightbox img");function Ir(n){let e=Da();e.style.transition=n?"transform .25s ease":"none",e.style.transform=`translate(${Ge.x}px, ${Ge.y}px) scale(${Ge.s})`}function Ls(n=!1){Ge.s=1,Ge.x=Ge.y=0,Ir(n)}function qo(){let n=Da(),e=Ps(),t=Math.max(0,(n.offsetWidth*Ge.s-e.clientWidth)/2),i=Math.max(0,(n.offsetHeight*Ge.s-e.clientHeight)/2);Ge.x=Math.max(-t,Math.min(t,Ge.x)),Ge.y=Math.max(-i,Math.min(i,Ge.y))}function Ko(n,e,t){kn={themes:n,ti:e,i:t};let i=Ps();i.classList.contains("open")||(i.classList.add("open"),tr(wh)),Em()}function wh(){Ps().classList.remove("open"),Ls()}function Th(){Ps().classList.contains("open")&&(wh(),Dr(wh))}function Em(){let n=kn.themes[kn.ti],e=n.photos[kn.i],t=Da();Ls(),t.onerror=()=>{t.onerror=null,t.src=Tr(n,kn.i,e.src,800,800).toDataURL()},t.src=wr(e),t.alt=e.caption||`${n.title} ${kn.i+1}`,cn("#lightbox .cap").innerHTML=`${Fe(e.caption||`${n.emoji} ${n.title}`)}<small>${kn.i+1} / ${n.photos.length}</small>`}function Pa(n){let e=kn.themes[kn.ti].photos.length;kn.i=(kn.i+n+e)%e,Ye(6),Em()}function vy(){let n=Ps(),e=new Map,t=null,i=0,r=()=>{let a=Da().getBoundingClientRect();return{x:a.left+a.width/2-Ge.x,y:a.top+a.height/2-Ge.y}};n.addEventListener("pointerdown",a=>{if(!a.target.closest("button")){try{n.setPointerCapture(a.pointerId)}catch{}if(e.set(a.pointerId,{x:a.clientX,y:a.clientY}),e.size===1)t={type:"one",sx:a.clientX,sy:a.clientY,ox:Ge.x,oy:Ge.y,moved:!1};else if(e.size===2){let[o,l]=[...e.values()],c=r(),h=(o.x+l.x)/2,u=(o.y+l.y)/2;t={type:"pinch",d:Math.hypot(o.x-l.x,o.y-l.y)||1,s:Ge.s,c,px:(h-c.x-Ge.x)/Ge.s,py:(u-c.y-Ge.y)/Ge.s}}}}),n.addEventListener("pointermove",a=>{if(!(!e.has(a.pointerId)||!t)){if(e.set(a.pointerId,{x:a.clientX,y:a.clientY}),t.type==="pinch"&&e.size>=2){let[o,l]=[...e.values()];Ge.s=Math.max(1,Math.min(4,t.s*Math.hypot(o.x-l.x,o.y-l.y)/t.d)),Ge.x=(o.x+l.x)/2-t.c.x-Ge.s*t.px,Ge.y=(o.y+l.y)/2-t.c.y-Ge.s*t.py,Ir(!1)}else if(t.type==="one"){let o=a.clientX-t.sx,l=a.clientY-t.sy;if(Math.hypot(o,l)>8&&(t.moved=!0),Ge.s>1){Ge.x=t.ox+o,Ge.y=t.oy+l,Ir(!1);return}let c=Da();c.style.transition="none",c.style.transform=Math.abs(o)>Math.abs(l)?`translateX(${o}px)`:`translateY(${Math.max(0,l)}px) scale(${1-Math.min(.15,Math.max(0,l)/1500)})`}}});let s=a=>{if(!e.has(a.pointerId)||(e.delete(a.pointerId),!t))return;if(t.type==="pinch"){if(e.size===1){let[h]=[...e.values()];t={type:"one",sx:h.x,sy:h.y,ox:Ge.x,oy:Ge.y,moved:!0}}else e.size===0&&(t=null,Ge.s<1.05?Ls(!0):(qo(),Ir(!0)));return}if(e.size>0)return;let o=a.clientX-t.sx,l=a.clientY-t.sy,c=t.moved;if(t=null,a.type==="pointercancel"){Ge.s>1?(qo(),Ir(!0)):Ls(!0);return}if(!c){let h=performance.now();if(h-i<320)if(i=0,Ge.s>1)Ls(!0);else{let u=r();Ge.s=2.5,Ge.x=-(a.clientX-u.x)*1.5,Ge.y=-(a.clientY-u.y)*1.5,qo(),Ir(!0)}else i=h;return}if(Ge.s>1){qo(),Ir(!0);return}Math.abs(o)>60&&Math.abs(o)>Math.abs(l)?Pa(o<0?1:-1):l>110&&l>Math.abs(o)?Th():Ls(!0)};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s)}function xy(){let n=cn("#modal .sheet"),e=cn("#modal .sheet-top"),t=null;e.addEventListener("pointerdown",r=>{if(!r.target.closest("button")){t={id:r.pointerId,y:r.clientY,t:performance.now()};try{e.setPointerCapture(r.pointerId)}catch{}n.style.transition="none"}}),e.addEventListener("pointermove",r=>{!t||r.pointerId!==t.id||(n.style.transform=`translateY(${Math.max(0,r.clientY-t.y)}px)`)});let i=r=>{if(!t||r.pointerId!==t.id)return;let s=r.clientY-t.y,a=s>40&&performance.now()-t.t<250;t=null,n.style.transition="",r.type==="pointerup"&&(s>100||a)?ln():n.style.transform=""};e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i)}var bm="family-bigfont",ka=()=>document.documentElement.classList.contains("big");function Ah(n){document.documentElement.classList.toggle("big",n);try{localStorage.setItem(bm,n?"1":"0")}catch{}document.querySelectorAll(".fs-toggle").forEach(e=>{e.textContent=n?"\uAC00-":"\uAC00+",e.setAttribute("aria-label",n?"\uAE00\uC790 \uC791\uAC8C":"\uAE00\uC790 \uD06C\uAC8C")})}function Dh(){try{localStorage.getItem(bm)==="1"&&Ah(!0)}catch{}document.addEventListener("click",e=>{e.target.closest(".fs-toggle")&&(Ye(6),Ah(!ka()))}),cn("#modal-close").onclick=ln,cn("#modal .backdrop").onclick=ln;let n=Ps();n.querySelector(".lb-close").onclick=Th,n.querySelector(".prev").onclick=()=>Pa(-1),n.querySelector(".next").onclick=()=>Pa(1),vy(),xy(),addEventListener("keydown",e=>{n.classList.contains("open")?(e.key==="ArrowRight"&&Pa(1),e.key==="ArrowLeft"&&Pa(-1),e.key==="Escape"&&Th()):e.key==="Escape"&&ln()})}var xu="160";var fc=1,_y=2,Di=3,pr=0,Zt=1,xd=2;var gc=2;var Gr=100;var _u=204,Eu=205;var i0=0,Ey=1,by=2,ur=0,My=1,Sy=2,wy=3,Ty=4,Ay=5,Ry=6;var r0=300,ia=301,ra=302,bu=303,Mu=304,yc=306,hi=1e3,Ui=1001,Su=1002,Ot=1003,Mm=1004;var Uh=1005;var $n=1006,Cy=1007;var Nl=1008;var $r=1009;var _d=1012,s0=1013,lr=1014,cr=1015,no=1016,a0=1017,o0=1018,qr=1020;var Cn=1023;var jr=1026,sa=1027;var l0=1029;var c0=1031,h0=1033,Nh=33776,Bh=33777,Oh=33778,zh=33779,Sm=35840,wm=35841,Tm=35842,Am=35843,u0=36196,Rm=37492,Cm=37496,Lm=37808,Pm=37809,Im=37810,Fm=37811,Dm=37812,Um=37813,Nm=37814,Bm=37815,Om=37816,zm=37817,km=37818,Hm=37819,Gm=37820,Vm=37821,kh=36492,Wm=36494,$m=36495;var qm=36284,jm=36285,Xm=36286;var Bl=2300,Ol=2301,Hh=2302,Ym=2400,Zm=2401,Jm=2402;var d0=3e3,Xr=3001;var ci="",Mt="srgb",Oi="srgb-linear",Ed="display-p3",vc="display-p3-linear",zl="linear",lt="srgb",kl="rec709",Hl="p3";var Fs=7680;var wu=35044;var Km="300 es",Tu=1035,aa=2e3,Gl=2001,mr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ul=Math.PI/180,Au=180/Math.PI;function Bi(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(jt[255&n]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[255&e]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[63&t|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[255&i]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function zt(n,e,t){return Math.max(e,Math.min(t,n))}function Ly(n,e){return(n%e+e)%e}function Gh(n,e,t){return(1-t)*n+t*e}function Qm(n){return(n&n-1)==0&&n!==0}function Ru(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function at(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("Invalid component type.")}}var he=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Be=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],g=r[0],p=r[3],x=r[6],y=r[1],v=r[4],b=r[7],R=r[2],S=r[5],T=r[8];return s[0]=a*g+o*y+l*R,s[3]=a*p+o*v+l*S,s[6]=a*x+o*b+l*T,s[1]=c*g+h*y+u*R,s[4]=c*p+h*v+u*S,s[7]=c*x+h*b+u*T,s[2]=d*g+f*y+m*R,s[5]=d*p+f*v+m*S,s[8]=d*x+f*b+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,m=t*u+i*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=u*g,e[1]=(r*c-h*i)*g,e[2]=(o*i-r*a)*g,e[3]=d*g,e[4]=(h*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vh.makeScale(e,t)),this}rotate(e){return this.premultiply(Vh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vh=new Be;function p0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Py(){let n=Vl("canvas");return n.style.display="block",n}var ef={};function Ja(n){n in ef||(ef[n]=!0,console.warn(n))}var tf=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nf=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qo={[Oi]:{transfer:zl,primaries:kl,toReference:n=>n,fromReference:n=>n},[Mt]:{transfer:lt,primaries:kl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[vc]:{transfer:zl,primaries:Hl,toReference:n=>n.applyMatrix3(nf),fromReference:n=>n.applyMatrix3(tf)},[Ed]:{transfer:lt,primaries:Hl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(nf),fromReference:n=>n.applyMatrix3(tf).convertLinearToSRGB()}},Iy=new Set([Oi,vc]),rt={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Iy.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Qo[e].toReference;return(0,Qo[t].fromReference)(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Qo[n].primaries},getTransfer:function(n){return n===ci?zl:Qo[n].transfer}};function ta(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function Wh(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var Ds,Wl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=Vl("canvas")),Ds.width=e.width,Ds.height=e.height;let i=Ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Vl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*ta(s[a]/255);return i.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*ta(t[i]/255)):t[i]=ta(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fy=0,$l=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($h(r[a].image)):s.push($h(r[a]))}else s=$h(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function $h(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Wl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dy=0,yn=class n extends mr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,r=1001,s=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Bi(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Xr?Mt:ci),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==r0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hi:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case Su:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case hi:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case Su:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?Xr:d0}set encoding(e){Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xr?Mt:ci}};yn.DEFAULT_IMAGE=null,yn.DEFAULT_MAPPING=r0,yn.DEFAULT_ANISOTROPY=1;var Tt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],g=l[2],p=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,b=(f+1)/2,R=(x+1)/2,S=(h+d)/4,T=(u+g)/4,z=(m+p)/4;return v>b&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=S/i,s=T/i):b>R?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=S/r,s=z/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=z/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-m)*(p-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cu=class extends mr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let r={width:e,height:t,depth:1};i.encoding!==void 0&&(Ja("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Xr?Mt:ci),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new $l(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends Cu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ql=class extends yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lu=class extends yn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],d=s[a+0],f=s[a+1],m=s[a+2],g=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=f,e[t+2]=m,void(e[t+3]=g);if(u!==g||l!==d||c!==f||h!==m){let p=1-o,x=l*d+c*f+h*m+u*g,y=x>=0?1:-1,v=1-x*x;if(v>Number.EPSILON){let R=Math.sqrt(v),S=Math.atan2(R,x*y);p=Math.sin(p*S)/R,o=Math.sin(o*S)/R}let b=o*y;if(l=l*p+d*b,c=c*p+f*b,h=h*p+m*b,u=u*p+g*b,p===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),d=l(i/2),f=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qh.copy(this).projectOnVector(e),this.sub(qh)}reflect(e){return this.sub(qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qh=new A,rf=new Ln,Yn=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),tl.subVectors(this.max,Ha),Us.subVectors(e.a,Ha),Ns.subVectors(e.b,Ha),Bs.subVectors(e.c,Ha),ir.subVectors(Ns,Us),rr.subVectors(Bs,Ns),Br.subVectors(Us,Bs);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Br.z,Br.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Br.z,0,-Br.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Br.y,Br.x,0];return!!jh(t,Us,Ns,Bs,tl)&&(t=[1,0,0,0,1,0,0,0,1],!!jh(t,Us,Ns,Bs,tl)&&(nl.crossVectors(ir,rr),t=[nl.x,nl.y,nl.z],jh(t,Us,Ns,Bs,tl)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Gn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ci=[new A,new A,new A,new A,new A,new A,new A,new A],Gn=new A,el=new Yn,Us=new A,Ns=new A,Bs=new A,ir=new A,rr=new A,Br=new A,Ha=new A,tl=new A,nl=new A,Or=new A;function jh(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Or.fromArray(n,s);let o=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=e.dot(Or),c=t.dot(Or),h=i.dot(Or);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Uy=new Yn,Ga=new A,Xh=new A,Zn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Uy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ga.subVectors(e,this.center);let t=Ga.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=.5*(i-this.radius);this.center.addScaledVector(Ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ga.copy(e.center).add(Xh)),this.expandByPoint(Ga.copy(e.center).sub(Xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Li=new A,Yh=new A,il=new A,sr=new A,Zh=new A,rl=new A,Jh=new A,Yr=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Yh.copy(e).add(t).multiplyScalar(.5),il.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(Yh);let s=.5*e.distanceTo(t),a=-this.direction.dot(il),o=sr.dot(this.direction),l=-sr.dot(il),c=sr.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Yh).addScaledVector(il,d),f}intersectSphere(e,t){Li.subVectors(e.center,this.origin);let i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r?null:((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r?null:((o>i||i!=i)&&(i=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(i>=0?i:r,t)))}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,r,s){Zh.subVectors(t,e),rl.subVectors(i,e),Jh.crossVectors(Zh,rl);let a,o=this.direction.dot(Jh);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}sr.subVectors(this.origin,e);let l=a*this.direction.dot(rl.crossVectors(sr,rl));if(l<0)return null;let c=a*this.direction.dot(Zh.cross(sr));if(c<0||l+c>o)return null;let h=-a*sr.dot(Jh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class n{constructor(e,t,i,r,s,a,o,l,c,h,u,d,f,m,g,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,d,f,m,g,p)}set(e,t,i,r,s,a,o,l,c,h,u,d,f,m,g,p){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=f,x[7]=m,x[11]=g,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Os.setFromMatrixColumn(e,0).length(),s=1/Os.setFromMatrixColumn(e,1).length(),a=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d+g*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,g=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ny,e,By)}lookAt(e,t,i){let r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ar.crossVectors(i,fn),ar.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ar.crossVectors(i,fn)),ar.normalize(),sl.crossVectors(fn,ar),r[0]=ar.x,r[4]=sl.x,r[8]=fn.x,r[1]=ar.y,r[5]=sl.y,r[9]=fn.y,r[2]=ar.z,r[6]=sl.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],g=i[6],p=i[10],x=i[14],y=i[3],v=i[7],b=i[11],R=i[15],S=r[0],T=r[4],z=r[8],C=r[12],I=r[1],H=r[5],_=r[9],P=r[13],U=r[2],O=r[6],Z=r[10],j=r[14],q=r[3],X=r[7],G=r[11],Y=r[15];return s[0]=a*S+o*I+l*U+c*q,s[4]=a*T+o*H+l*O+c*X,s[8]=a*z+o*_+l*Z+c*G,s[12]=a*C+o*P+l*j+c*Y,s[1]=h*S+u*I+d*U+f*q,s[5]=h*T+u*H+d*O+f*X,s[9]=h*z+u*_+d*Z+f*G,s[13]=h*C+u*P+d*j+f*Y,s[2]=m*S+g*I+p*U+x*q,s[6]=m*T+g*H+p*O+x*X,s[10]=m*z+g*_+p*Z+x*G,s[14]=m*C+g*P+p*j+x*Y,s[3]=y*S+v*I+b*U+R*q,s[7]=y*T+v*H+b*O+R*X,s[11]=y*z+v*_+b*Z+R*G,s[15]=y*C+v*P+b*j+R*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14];return e[3]*(+s*l*u-r*c*u-s*o*d+i*c*d+r*o*f-i*l*f)+e[7]*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*h-s*l*h)+e[11]*(+t*c*u-t*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],g=e[13],p=e[14],x=e[15],y=u*p*c-g*d*c+g*l*f-o*p*f-u*l*x+o*d*x,v=m*d*c-h*p*c-m*l*f+a*p*f+h*l*x-a*d*x,b=h*g*c-m*u*c+m*o*f-a*g*f-h*o*x+a*u*x,R=m*u*l-h*g*l-m*o*d+a*g*d+h*o*p-a*u*p,S=t*y+i*v+r*b+s*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return e[0]=y*T,e[1]=(g*d*s-u*p*s-g*r*f+i*p*f+u*r*x-i*d*x)*T,e[2]=(o*p*s-g*l*s+g*r*c-i*p*c-o*r*x+i*l*x)*T,e[3]=(u*l*s-o*d*s-u*r*c+i*d*c+o*r*f-i*l*f)*T,e[4]=v*T,e[5]=(h*p*s-m*d*s+m*r*f-t*p*f-h*r*x+t*d*x)*T,e[6]=(m*l*s-a*p*s-m*r*c+t*p*c+a*r*x-t*l*x)*T,e[7]=(a*d*s-h*l*s+h*r*c-t*d*c-a*r*f+t*l*f)*T,e[8]=b*T,e[9]=(m*u*s-h*g*s-m*i*f+t*g*f+h*i*x-t*u*x)*T,e[10]=(a*g*s-m*o*s+m*i*c-t*g*c-a*i*x+t*o*x)*T,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*f-t*o*f)*T,e[12]=R*T,e[13]=(h*g*r-m*u*r+m*i*d-t*g*d-h*i*p+t*u*p)*T,e[14]=(m*o*r-a*g*r-m*i*l+t*g*l+a*i*p-t*o*p)*T,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*d+t*o*d)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,m=s*u,g=a*h,p=a*u,x=o*u,y=l*c,v=l*h,b=l*u,R=i.x,S=i.y,T=i.z;return r[0]=(1-(g+x))*R,r[1]=(f+b)*R,r[2]=(m-v)*R,r[3]=0,r[4]=(f-b)*S,r[5]=(1-(d+x))*S,r[6]=(p+y)*S,r[7]=0,r[8]=(m+v)*T,r[9]=(p-y)*T,r[10]=(1-(d+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Os.set(r[0],r[1],r[2]).length(),a=Os.set(r[4],r[5],r[6]).length(),o=Os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);let l=1/s,c=1/a,h=1/o;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=c,Vn.elements[5]*=c,Vn.elements[6]*=c,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,t.setFromRotationMatrix(Vn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),f,m;if(o===aa)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else{if(o!==Gl)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),m=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(a-s),d=(t+e)*c,f=(i+r)*h,m,g;if(o===aa)m=(a+s)*u,g=-2*u;else{if(o!==Gl)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=s*u,g=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Os=new A,Vn=new Pe,Ny=new A(0,0,0),By=new A(1,1,1),ar=new A,sl=new A,fn=new A,sf=new Pe,af=new Ln,oa=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return af.setFromEuler(this),this.setFromQuaternion(af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oa.DEFAULT_ORDER="XYZ";var io=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Oy=0,of=new A,zs=new Ln,Pi=new Pe,al=new A,Va=new A,zy=new A,ky=new Ln,lf=new A(1,0,0),cf=new A(0,1,0),hf=new A(0,0,1),Hy={type:"added"},Gy={type:"removed"},Bt=class n extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new A,t=new oa,i=new Ln,r=new A(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Be}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(lf,e)}rotateY(e){return this.rotateOnAxis(cf,e)}rotateZ(e){return this.rotateOnAxis(hf,e)}translateOnAxis(e,t){return of.copy(e).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lf,e)}translateY(e){return this.translateOnAxis(cf,e)}translateZ(e){return this.translateOnAxis(hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?al.copy(e):al.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Va,al,this.up):Pi.lookAt(al,Va,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),zs.setFromRotationMatrix(Pi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gy)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,zy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,ky,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let s=t[i];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++){let o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Bt.DEFAULT_UP=new A(0,1,0),Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new A,Ii=new A,Kh=new A,Fi=new A,ks=new A,Hs=new A,uf=new A,Qh=new A,eu=new A,tu=new A,ol=!1,hr=class n{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),Ii.subVectors(i,t),Kh.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(Ii),l=Wn.dot(Kh),c=Ii.dot(Ii),h=Ii.dot(Kh),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fi)!==null&&Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getUV(e,t,i,r,s,a,o,l){return ol===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ol=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(a,Fi.y),l.addScaledVector(o,Fi.z),l)}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),Ii.subVectors(e,t),Wn.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),.5*Wn.cross(Ii).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ol===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ol=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;ks.subVectors(r,i),Hs.subVectors(s,i),Qh.subVectors(e,i);let l=ks.dot(Qh),c=Hs.dot(Qh);if(l<=0&&c<=0)return t.copy(i);eu.subVectors(e,r);let h=ks.dot(eu),u=Hs.dot(eu);if(h>=0&&u<=h)return t.copy(r);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ks,a);tu.subVectors(e,s);let f=ks.dot(tu),m=Hs.dot(tu);if(m>=0&&f<=m)return t.copy(s);let g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Hs,o);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return uf.subVectors(s,r),o=(u-h)/(u-h+(f-m)),t.copy(r).addScaledVector(uf,o);let x=1/(p+g+d);return a=g*x,o=d*x,t.copy(i).addScaledVector(ks,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},m0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},ll={h:0,s:0,l:0};function nu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var Me=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=Ly(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=nu(a,s,e+1/3),this.g=nu(a,s,e),this.b=nu(a,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let i=m0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}copyLinearToSRGB(e){return this.r=Wh(e.r),this.g=Wh(e.g),this.b=Wh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return rt.fromWorkingColorSpace(Xt.copy(this),e),65536*Math.round(zt(255*Xt.r,0,255))+256*Math.round(zt(255*Xt.g,0,255))+Math.round(zt(255*Xt.b,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Xt.copy(this),t);let i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Mt){rt.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,i=Xt.g,r=Xt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*r)})`}offsetHSL(e,t,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(ll);let i=Gh(or.h,ll.h,t),r=Gh(or.s,ll.s,t),s=Gh(or.l,ll.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Me;Me.NAMES=m0;var Vy=0,ui=class extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=1,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=Eu,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_u&&(i.blendSrc=this.blendSrc),this.blendDst!==Eu&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Oe=class extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},L1=Wy();function Wy(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var wt=new A,cl=new he,pt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)cl.fromBufferAttribute(this,t),cl.applyMatrix3(e),this.setXY(t,cl.x,cl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wu&&(e.usage=this.usage),e}};var jl=class extends pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Xl=class extends pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var De=class extends pt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var $y=0,Rn=new Pe,iu=new Bt,Gs=new A,gn=new Yn,Wa=new Yn,Nt=new A,it=class n extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(p0(e)?Xl:jl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new De(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new A,1/0);if(e){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Wa.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(gn.min,Wa.min),gn.expandByPoint(Nt),Nt.addVectors(gn.max,Wa.max),gn.expandByPoint(Nt)):(gn.expandByPoint(Wa.min),gn.expandByPoint(Wa.max))}gn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(Gs.fromBufferAttribute(e,c),Nt.add(Gs)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let I=0;I<o;I++)c[I]=new A,h[I]=new A;let u=new A,d=new A,f=new A,m=new he,g=new he,p=new he,x=new A,y=new A;function v(I,H,_){u.fromArray(r,3*I),d.fromArray(r,3*H),f.fromArray(r,3*_),m.fromArray(a,2*I),g.fromArray(a,2*H),p.fromArray(a,2*_),d.sub(u),f.sub(u),g.sub(m),p.sub(m);let P=1/(g.x*p.y-p.x*g.y);isFinite(P)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(f,-g.y).multiplyScalar(P),y.copy(f).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(P),c[I].add(x),c[H].add(x),c[_].add(x),h[I].add(y),h[H].add(y),h[_].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let I=0,H=b.length;I<H;++I){let _=b[I],P=_.start;for(let U=P,O=P+_.count;U<O;U+=3)v(i[U+0],i[U+1],i[U+2])}let R=new A,S=new A,T=new A,z=new A;function C(I){T.fromArray(s,3*I),z.copy(T);let H=c[I];R.copy(H),R.sub(T.multiplyScalar(T.dot(H))).normalize(),S.crossVectors(z,H);let _=S.dot(h[I])<0?-1:1;l[4*I]=R.x,l[4*I+1]=R.y,l[4*I+2]=R.z,l[4*I+3]=_}for(let I=0,H=b.length;I<H;++I){let _=b[I],P=_.start;for(let U=P,O=P+_.count;U<O;U+=3)C(i[U+0]),C(i[U+1]),C(i[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let r=new A,s=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let g=0,p=l.length;g<p;g++){f=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let x=0;x<h;x++)d[m++]=c[f++]}return new pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=e(r[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},df=new Pe,zr=new Yr,hl=new Zn,pf=new A,Vs=new A,Ws=new A,$s=new A,ru=new A,ul=new A,dl=new he,pl=new he,ml=new he,mf=new A,ff=new A,gf=new A,fl=new A,gl=new A,ue=class extends Bt{constructor(e=new it,t=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){ul.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(ru.fromBufferAttribute(u,e),a?ul.addScaledVector(ru,h):ul.addScaledVector(ru.sub(t),h))}t.add(ul)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(s),zr.copy(e.ray).recast(e.near),hl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(hl,pf)===null||zr.origin.distanceToSquared(pf)>(e.far-e.near)**2))return;df.copy(s).invert(),zr.copy(e.ray).applyMatrix4(df),i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,zr)}}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){let p=d[m],x=a[p.materialIndex];for(let y=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));y<v;y+=3)r=yl(this,x,e,i,c,h,u,o.getX(y),o.getX(y+1),o.getX(y+2)),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}else for(let m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);m<g;m+=3)r=yl(this,a,e,i,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),r&&(r.faceIndex=Math.floor(m/3),t.push(r));else if(l!==void 0)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){let p=d[m],x=a[p.materialIndex];for(let y=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));y<v;y+=3)r=yl(this,x,e,i,c,h,u,y,y+1,y+2),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}else for(let m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);m<g;m+=3)r=yl(this,a,e,i,c,h,u,m,m+1,m+2),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}};function yl(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Vs),n.getVertexPosition(l,Ws),n.getVertexPosition(c,$s);let h=function(u,d,f,m,g,p,x,y){let v;if(v=d.side===Zt?m.intersectTriangle(x,p,g,!0,y):m.intersectTriangle(g,p,x,d.side===pr,y),v===null)return null;gl.copy(y),gl.applyMatrix4(u.matrixWorld);let b=f.ray.origin.distanceTo(gl);return b<f.near||b>f.far?null:{distance:b,point:gl.clone(),object:u}}(n,e,t,i,Vs,Ws,$s,fl);if(h){r&&(dl.fromBufferAttribute(r,o),pl.fromBufferAttribute(r,l),ml.fromBufferAttribute(r,c),h.uv=hr.getInterpolation(fl,Vs,Ws,$s,dl,pl,ml,new he)),s&&(dl.fromBufferAttribute(s,o),pl.fromBufferAttribute(s,l),ml.fromBufferAttribute(s,c),h.uv1=hr.getInterpolation(fl,Vs,Ws,$s,dl,pl,ml,new he),h.uv2=h.uv1),a&&(mf.fromBufferAttribute(a,o),ff.fromBufferAttribute(a,l),gf.fromBufferAttribute(a,c),h.normal=hr.getInterpolation(fl,Vs,Ws,$s,mf,ff,gf,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new A,materialIndex:0};hr.getNormal(Vs,Ws,$s,u.normal),h.face=u}return h}var me=class n extends it{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;function m(g,p,x,y,v,b,R,S,T,z,C){let I=b/T,H=R/z,_=b/2,P=R/2,U=S/2,O=T+1,Z=z+1,j=0,q=0,X=new A;for(let G=0;G<Z;G++){let Y=G*H-P;for(let ce=0;ce<O;ce++){let M=ce*I-_;X[g]=M*y,X[p]=Y*v,X[x]=U,c.push(X.x,X.y,X.z),X[g]=0,X[p]=0,X[x]=S>0?1:-1,h.push(X.x,X.y,X.z),u.push(ce/T),u.push(1-G/z),j+=1}}for(let G=0;G<z;G++)for(let Y=0;Y<T;Y++){let ce=d+Y+O*G,M=d+Y+O*(G+1),E=d+(Y+1)+O*(G+1),N=d+(Y+1)+O*G;l.push(ce,M,N),l.push(M,E,N),q+=6}o.addGroup(f,q,C),f+=q,d+=j}m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function la(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function tn(n){let e={};for(let t=0;t<n.length;t++){let i=la(n[t]);for(let r in i)e[r]=i[r]}return e}function f0(n){return n.getRenderTarget()===null?n.outputColorSpace:rt.workingColorSpace}var qy={clone:la,merge:tn},Jn=class extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let r=0;r<t.length;r++)i.push(t[r].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ro=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=aa}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yt=class extends ro{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Au*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ul*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Au*Math.atan(Math.tan(.5*Ul*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ul*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qs=-90,Pu=class extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yt(qs,1,e,t);r.layers=this.layers,this.add(r);let s=new Yt(qs,1,e,t);s.layers=this.layers,this.add(s);let a=new Yt(qs,1,e,t);a.layers=this.layers,this.add(a);let o=new Yt(qs,1,e,t);o.layers=this.layers,this.add(o);let l=new Yt(qs,1,e,t);l.layers=this.layers,this.add(l);let c=new Yt(qs,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===aa)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Gl)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Yl=class extends yn{constructor(e,t,i,r,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:ia,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Iu=class extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Ja("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xr?Mt:ci),this.texture=new Yl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new me(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:la(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:0});s.uniforms.tEquirect.value=t;let a=new ue(r,s),o=t.minFilter;return t.minFilter===Nl&&(t.minFilter=$n),new Pu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},su=new A,jy=new A,Xy=new Be,qn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=su.subVectors(i,t).cross(jy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Xy.getNormalMatrix(e),r=this.coplanarPoint(su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},kr=new Zn,vl=new A,ca=class{constructor(e=new qn,t=new qn,i=new qn,r=new qn,s=new qn,a=new qn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],f=r[8],m=r[9],g=r[10],p=r[11],x=r[12],y=r[13],v=r[14],b=r[15];if(i[0].setComponents(l-s,d-c,p-f,b-x).normalize(),i[1].setComponents(l+s,d+c,p+f,b+x).normalize(),i[2].setComponents(l+a,d+h,p+m,b+y).normalize(),i[3].setComponents(l-a,d-h,p-m,b-y).normalize(),i[4].setComponents(l-o,d-u,p-g,b-v).normalize(),t===aa)i[5].setComponents(l+o,d+u,p+g,b+v).normalize();else{if(t!==Gl)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,u,g,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(vl.x=r.normal.x>0?e.max.x:e.min.x,vl.y=r.normal.y>0?e.max.y:e.min.y,vl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function g0(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Yy(n,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(r){return r.isInterleavedBufferAttribute&&(r=r.data),i.get(r)},remove:function(r){r.isInterleavedBufferAttribute&&(r=r.data);let s=i.get(r);s&&(n.deleteBuffer(s.buffer),i.delete(r))},update:function(r,s){if(r.isGLBufferAttribute){let o=i.get(r);return void((!o||o.version<r.version)&&i.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version}))}r.isInterleavedBufferAttribute&&(r=r.data);let a=i.get(r);if(a===void 0)i.set(r,function(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer(),f;if(n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");f=n.HALF_FLOAT}else f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);f=n.UNSIGNED_BYTE}return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}(r,s));else if(a.version<r.version){if(a.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,o),u.count===-1&&d.length===0&&n.bufferSubData(c,0,h),d.length!==0){for(let f=0,m=d.length;f<m;f++){let g=d[f];t?n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count):n.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h.subarray(g.start,g.start+g.count))}l.clearUpdateRanges()}u.count!==-1&&(t?n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()})(a.buffer,r,s),a.version=r.version}}}}var st=class n extends it{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],g=[],p=[];for(let x=0;x<h;x++){let y=x*d-a;for(let v=0;v<c;v++){let b=v*u-s;m.push(b,-y,0),g.push(0,0,1),p.push(v/o),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let y=0;y<o;y++){let v=y+c*x,b=y+c*(x+1),R=y+1+c*(x+1),S=y+1+c*x;f.push(v,b,S),f.push(b,R,S)}this.setIndex(f),this.setAttribute("position",new De(m,3)),this.setAttribute("normal",new De(g,3)),this.setAttribute("uv",new De(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ne={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},de={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},li={basic:{uniforms:tn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:tn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:tn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:tn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:tn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:tn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:tn([de.points,de.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:tn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:tn([de.common,de.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:tn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:tn([de.sprite,de.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:tn([de.common,de.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:tn([de.lights,de.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};li.physical={uniforms:tn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var xl={r:0,b:0,g:0};function Zy(n,e,t,i,r,s,a){let o=new Me(0),l,c,h=s===!0?0:1,u=null,d=0,f=null;function m(g,p){g.getRGB(xl,f0(n)),i.buffers.color.setClear(xl.r,xl.g,xl.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),h=p,m(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,m(o,h)},render:function(g,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?m(o,h):y&&y.isColor&&(m(y,1),x=!0);let v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===yc)?(c===void 0&&(c=new ue(new me(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:la(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,R,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=rt.getTransfer(y.colorSpace)!==lt,u===y&&d===y.version&&f===n.toneMapping||(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ue(new st(2,2),new Jn({name:"BackgroundMaterial",uniforms:la(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=rt.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),u===y&&d===y.version&&f===n.toneMapping||(l.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}}}function Jy(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=f(null),c=l,h=!1;function u(R){return i.isWebGL2?n.bindVertexArray(R):s.bindVertexArrayOES(R)}function d(R){return i.isWebGL2?n.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function f(R){let S=[],T=[],z=[];for(let C=0;C<r;C++)S[C]=0,T[C]=0,z[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:T,attributeDivisors:z,object:R,attributes:{},index:null}}function m(){let R=c.newAttributes;for(let S=0,T=R.length;S<T;S++)R[S]=0}function g(R){p(R,0)}function p(R,S){let T=c.newAttributes,z=c.enabledAttributes,C=c.attributeDivisors;T[R]=1,z[R]===0&&(n.enableVertexAttribArray(R),z[R]=1),C[R]!==S&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,S),C[R]=S)}function x(){let R=c.newAttributes,S=c.enabledAttributes;for(let T=0,z=S.length;T<z;T++)S[T]!==R[T]&&(n.disableVertexAttribArray(T),S[T]=0)}function y(R,S,T,z,C,I,H){H===!0?n.vertexAttribIPointer(R,S,T,C,I):n.vertexAttribPointer(R,S,T,z,C,I)}function v(){b(),h=!0,c!==l&&(c=l,u(c.object))}function b(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(R,S,T,z,C){let I=!1;if(a){let H=function(_,P,U){let O=U.wireframe===!0,Z=o[_.id];Z===void 0&&(Z={},o[_.id]=Z);let j=Z[P.id];j===void 0&&(j={},Z[P.id]=j);let q=j[O];return q===void 0&&(q=f(i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()),j[O]=q),q}(z,T,S);c!==H&&(c=H,u(c.object)),I=function(_,P,U,O){let Z=c.attributes,j=P.attributes,q=0,X=U.getAttributes();for(let G in X)if(X[G].location>=0){let Y=Z[G],ce=j[G];if(ce===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor)),Y===void 0||Y.attribute!==ce||ce&&Y.data!==ce.data)return!0;q++}return c.attributesNum!==q||c.index!==O}(R,z,T,C),I&&function(_,P,U,O){let Z={},j=P.attributes,q=0,X=U.getAttributes();for(let G in X)if(X[G].location>=0){let Y=j[G];Y===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(Y=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(Y=_.instanceColor));let ce={};ce.attribute=Y,Y&&Y.data&&(ce.data=Y.data),Z[G]=ce,q++}c.attributes=Z,c.attributesNum=q,c.index=O}(R,z,T,C)}else{let H=S.wireframe===!0;c.geometry===z.id&&c.program===T.id&&c.wireframe===H||(c.geometry=z.id,c.program=T.id,c.wireframe=H,I=!0)}C!==null&&t.update(C,n.ELEMENT_ARRAY_BUFFER),(I||h)&&(h=!1,function(H,_,P,U){if(i.isWebGL2===!1&&(H.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let O=U.attributes,Z=P.getAttributes(),j=_.defaultAttributeValues;for(let q in Z){let X=Z[q];if(X.location>=0){let G=O[q];if(G===void 0&&(q==="instanceMatrix"&&H.instanceMatrix&&(G=H.instanceMatrix),q==="instanceColor"&&H.instanceColor&&(G=H.instanceColor)),G!==void 0){let Y=G.normalized,ce=G.itemSize,M=t.get(G);if(M===void 0)continue;let E=M.buffer,N=M.type,B=M.bytesPerElement,L=i.isWebGL2===!0&&(N===n.INT||N===n.UNSIGNED_INT||G.gpuType===s0);if(G.isInterleavedBufferAttribute){let V=G.data,D=V.stride,k=G.offset;if(V.isInstancedInterleavedBuffer){for(let $=0;$<X.locationSize;$++)p(X.location+$,V.meshPerAttribute);H.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let $=0;$<X.locationSize;$++)g(X.location+$);n.bindBuffer(n.ARRAY_BUFFER,E);for(let $=0;$<X.locationSize;$++)y(X.location+$,ce/X.locationSize,N,Y,D*B,(k+ce/X.locationSize*$)*B,L)}else{if(G.isInstancedBufferAttribute){for(let V=0;V<X.locationSize;V++)p(X.location+V,G.meshPerAttribute);H.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let V=0;V<X.locationSize;V++)g(X.location+V);n.bindBuffer(n.ARRAY_BUFFER,E);for(let V=0;V<X.locationSize;V++)y(X.location+V,ce/X.locationSize,N,Y,ce*B,ce/X.locationSize*V*B,L)}}else if(j!==void 0){let Y=j[q];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(X.location,Y);break;case 3:n.vertexAttrib3fv(X.location,Y);break;case 4:n.vertexAttrib4fv(X.location,Y);break;default:n.vertexAttrib1fv(X.location,Y)}}}}x()}(R,S,T,z),C!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))},reset:v,resetDefaultState:b,dispose:function(){v();for(let R in o){let S=o[R];for(let T in S){let z=S[T];for(let C in z)d(z[C].object),delete z[C];delete S[T]}delete o[R]}},releaseStatesOfGeometry:function(R){if(o[R.id]===void 0)return;let S=o[R.id];for(let T in S){let z=S[T];for(let C in z)d(z[C].object),delete z[C];delete S[T]}delete o[R.id]},releaseStatesOfProgram:function(R){for(let S in o){let T=o[S];if(T[R.id]===void 0)continue;let z=T[R.id];for(let C in z)d(z[C].object),delete z[C];delete T[R.id]}},initAttributes:m,enableAttribute:g,disableUnusedAttributes:x}}function Ky(n,e,t,i){let r=i.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){n.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(r)c=n,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let u=0;u<l;u++)h+=o[u];t.update(h,s,1)}}}function Qy(n,e,t){let i;function r(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=u>0,v=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:y&&v,maxSamples:s?n.getParameter(n.MAX_SAMPLES):0}}function ev(n){let e=this,t=null,i=0,r=!1,s=!1,a=new qn,o=new Be,l={value:null,needsUpdate:!1};function c(h,u,d,f){let m=h!==null?h.length:0,g=null;if(m!==0){if(g=l.value,f!==!0||g===null){let p=d+4*m,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=d;y!==m;++y,v+=4)a.copy(h[y]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let f=h.clippingPlanes,m=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||f===null||f.length===0||s&&!g)s?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let x=s?0:i,y=4*x,v=p.clippingState||null;l.value=v,v=c(f,u,y,d);for(let b=0;b!==y;++b)v[b]=t[b];p.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}}}function tv(n){let e=new WeakMap;function t(r,s){return s===bu?r.mapping=ia:s===Mu&&(r.mapping=ra),r}function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===bu||s===Mu){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Iu(a.height/2);return o.fromEquirectangularTexture(n,r),e.set(r,o),r.addEventListener("dispose",i),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Zl=class extends ro{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yf=[.125,.215,.35,.446,.526,.582],$a=20,au=new Zl,vf=new Me,ou=null,lu=0,cu=0,Hr=(1+Math.sqrt(5))/2,js=1/Hr,xf=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,Hr,js),new A(0,Hr,-js),new A(js,0,Hr),new A(-js,0,Hr),new A(Hr,js,0),new A(-Hr,js,0)],Jl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,lu,cu),e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ia||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:no,format:Cn,colorSpace:Oi,depthBuffer:!1},r=_f(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,u=a-4+1+yf.length;for(let d=0;d<u;d++){let f=Math.pow(2,h);l.push(f);let m=1/f;d>a-4?m=yf[d-a+4-1]:d===0&&(m=0),c.push(m);let g=1/(f-2),p=-g,x=1+g,y=[p,p,x,p,x,x,p,p,x,x,p,x],v=6,b=6,R=3,S=2,T=1,z=new Float32Array(R*b*v),C=new Float32Array(S*b*v),I=new Float32Array(T*b*v);for(let _=0;_<v;_++){let P=_%3*2/3-1,U=_>2?0:-1,O=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];z.set(O,R*b*_),C.set(y,S*b*_);let Z=[_,_,_,_,_,_];I.set(Z,T*b*_)}let H=new it;H.setAttribute("position",new pt(z,R)),H.setAttribute("uv",new pt(C,S)),H.setAttribute("faceIndex",new pt(I,T)),o.push(H),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array($a),h=new A(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:$a,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:bd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return r}_compileMaterial(e){let t=new ue(this._lodPlanes[0],e);this._renderer.compile(t,au)}_sceneToCubeUV(e,t,i,r){let s=new Yt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(vf),l.toneMapping=ur,l.autoClear=!1;let u=new Oe({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),d=new ue(new me,u),f=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,f=!0):(u.color.copy(vf),f=!0);for(let g=0;g<6;g++){let p=g%3;p===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):p===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));let x=this._cubeSize;_l(r,p*x,g>2?x:0,x,x),l.setRenderTarget(r),f&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===ia||e.mapping===ra;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ef());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new ue(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;_l(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,au)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xf[(r-1)%xf.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new ue(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[i]-1,f=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/f,g=isFinite(s)?1+Math.floor(3*m):$a;g>$a&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let p=[],x=0;for(let b=0;b<$a;++b){let R=b/m,S=Math.exp(-R*R/2);p.push(S),b===0?x+=S:b<g&&(x+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:y}=this;u.dTheta.value=f,u.mipInt.value=y-i;let v=this._sizeLods[r];_l(t,3*v*(r>y-4?r-y+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,au)}};function _f(n,e,t){let i=new Xn(n,e,t);return i.texture.mapping=yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _l(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Ef(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bd(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function bf(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bd(){return`

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
	`}function nv(n){let e=new WeakMap,t=null;function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===bu||s===Mu,o=s===ia||s===ra;if(a||o){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let l=e.get(r);return t===null&&(t=new Jl(n)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),e.set(r,l),l.texture}if(e.has(r))return e.get(r).texture;{let l=r.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0,u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u}(l)){t===null&&(t=new Jl(n));let c=a?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,c),r.addEventListener("dispose",i),c.texture}return null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function iv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rv(n,e,t,i){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let f=0,m=d.length;f<m;f++)e.remove(d[f])}c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let g=h.array;d=h.version;for(let p=0,x=g.length;p<x;p+=3){let y=g[p+0],v=g[p+1],b=g[p+2];c.push(y,v,v,b,b,y)}}else{if(u===void 0)return;{let g=u.array;d=u.version;for(let p=0,x=g.length/3-1;p<x;p+=3){let y=p+0,v=p+1,b=p+2;c.push(y,v,v,b,b,y)}}}let f=new(p0(c)?Xl:jl)(c,1);f.version=d;let m=s.get(l);m&&e.remove(m),s.set(l,f)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],n.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let f=0,m=d.length;f<m;f++)e.update(d[f],n.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function sv(n,e,t,i){let r=i.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){n.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(r)u=n,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d]/o,c[d]);else{u.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,s,1)}}}function av(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,r){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=r*(t/3);break;case n.LINES:e.lines+=r*(t/2);break;case n.LINE_STRIP:e.lines+=r*(t-1);break;case n.LINE_LOOP:e.lines+=r*t;break;case n.POINTS:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function ov(n,e){return n[0]-e[0]}function lv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function cv(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,a=new Tt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=d!==void 0?d.length:0,m=s.get(c);if(m===void 0||m.count!==f){let P=function(){H.dispose(),s.delete(c),c.removeEventListener("dispose",P)};m!==void 0&&m.texture.dispose();let x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],S=c.morphAttributes.color||[],T=0;x===!0&&(T=1),y===!0&&(T=2),v===!0&&(T=3);let z=c.attributes.position.count*T,C=1;z>e.maxTextureSize&&(C=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);let I=new Float32Array(z*C*4*f),H=new ql(I,z,C,f);H.type=cr,H.needsUpdate=!0;let _=4*T;for(let U=0;U<f;U++){let O=b[U],Z=R[U],j=S[U],q=z*C*4*U;for(let X=0;X<O.count;X++){let G=X*_;x===!0&&(a.fromBufferAttribute(O,X),I[q+G+0]=a.x,I[q+G+1]=a.y,I[q+G+2]=a.z,I[q+G+3]=0),y===!0&&(a.fromBufferAttribute(Z,X),I[q+G+4]=a.x,I[q+G+5]=a.y,I[q+G+6]=a.z,I[q+G+7]=0),v===!0&&(a.fromBufferAttribute(j,X),I[q+G+8]=a.x,I[q+G+9]=a.y,I[q+G+10]=a.z,I[q+G+11]=j.itemSize===4?a.w:1)}}m={count:f,texture:H,size:new he(z,C)},s.set(c,m),c.addEventListener("dispose",P)}let g=0;for(let x=0;x<u.length;x++)g+=u[x];let p=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(n,"morphTargetBaseInfluence",p),h.getUniforms().setValue(n,"morphTargetInfluences",u),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{let d=u===void 0?0:u.length,f=i[c.id];if(f===void 0||f.length!==d){f=[];for(let y=0;y<d;y++)f[y]=[y,0];i[c.id]=f}for(let y=0;y<d;y++){let v=f[y];v[0]=y,v[1]=u[y]}f.sort(lv);for(let y=0;y<8;y++)y<d&&f[y][1]?(o[y][0]=f[y][0],o[y][1]=f[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(ov);let m=c.morphAttributes.position,g=c.morphAttributes.normal,p=0;for(let y=0;y<8;y++){let v=o[y],b=v[0],R=v[1];b!==Number.MAX_SAFE_INTEGER&&R?(m&&c.getAttribute("morphTarget"+y)!==m[b]&&c.setAttribute("morphTarget"+y,m[b]),g&&c.getAttribute("morphNormal"+y)!==g[b]&&c.setAttribute("morphNormal"+y,g[b]),r[y]=R,p+=R):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),g&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}let x=c.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}}}function hv(n,e,t,i){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,n.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var Kl=class extends yn{constructor(e,t,i,r,s,a,o,l,c,h){if((h=h!==void 0?h:jr)!==jr&&h!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===jr&&(i=lr),i===void 0&&h===sa&&(i=qr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},y0=new yn,v0=new Kl(1,1);v0.compareFunction=515;var x0=new ql,_0=new Lu,E0=new Yl,Mf=[],Sf=[],wf=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);function ua(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Mf[r];if(s===void 0&&(s=new Float32Array(r),Mf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xc(n,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function pv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function mv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function fv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;Af.set(i),n.uniformMatrix2fv(this.addr,!1,Af),Pt(t,i)}}function gv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;Tf.set(i),n.uniformMatrix3fv(this.addr,!1,Tf),Pt(t,i)}}function yv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;wf.set(i),n.uniformMatrix4fv(this.addr,!1,wf),Pt(t,i)}}function vv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function _v(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function Ev(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function bv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function Sv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function wv(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function Tv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?v0:y0;t.setTexture2D(e||s,r)}function Av(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_0,r)}function Rv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||E0,r)}function Cv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||x0,r)}function Lv(n,e){n.uniform1fv(this.addr,e)}function Pv(n,e){let t=ua(e,this.size,2);n.uniform2fv(this.addr,t)}function Iv(n,e){let t=ua(e,this.size,3);n.uniform3fv(this.addr,t)}function Fv(n,e){let t=ua(e,this.size,4);n.uniform4fv(this.addr,t)}function Dv(n,e){let t=ua(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Uv(n,e){let t=ua(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Nv(n,e){let t=ua(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bv(n,e){n.uniform1iv(this.addr,e)}function Ov(n,e){n.uniform2iv(this.addr,e)}function zv(n,e){n.uniform3iv(this.addr,e)}function kv(n,e){n.uniform4iv(this.addr,e)}function Hv(n,e){n.uniform1uiv(this.addr,e)}function Gv(n,e){n.uniform2uiv(this.addr,e)}function Vv(n,e){n.uniform3uiv(this.addr,e)}function Wv(n,e){n.uniform4uiv(this.addr,e)}function $v(n,e,t){let i=this.cache,r=e.length,s=xc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||y0,s[a])}function qv(n,e,t){let i=this.cache,r=e.length,s=xc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||_0,s[a])}function jv(n,e,t){let i=this.cache,r=e.length,s=xc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||E0,s[a])}function Xv(n,e,t){let i=this.cache,r=e.length,s=xc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||x0,s[a])}var Fu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(r){switch(r){case 5126:return uv;case 35664:return dv;case 35665:return pv;case 35666:return mv;case 35674:return fv;case 35675:return gv;case 35676:return yv;case 5124:case 35670:return vv;case 35667:case 35671:return xv;case 35668:case 35672:return _v;case 35669:case 35673:return Ev;case 5125:return bv;case 36294:return Mv;case 36295:return Sv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}(t.type)}},Du=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(r){switch(r){case 5126:return Lv;case 35664:return Pv;case 35665:return Iv;case 35666:return Fv;case 35674:return Dv;case 35675:return Uv;case 35676:return Nv;case 5124:case 35670:return Bv;case 35667:case 35671:return Ov;case 35668:case 35672:return zv;case 35669:case 35673:return kv;case 5125:return Hv;case 36294:return Gv;case 36295:return Vv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Xv}}(t.type)}},Uu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},hu=/(\w+)(\])?(\[|\.)?/g;function Rf(n,e){n.seq.push(e),n.map[e.id]=e}function Yv(n,e,t){let i=n.name,r=i.length;for(hu.lastIndex=0;;){let s=hu.exec(i),a=hu.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){Rf(t,c===void 0?new Fu(o,n,e):new Du(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new Uu(o),Rf(t,h)),t=h}}}var na=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r);Yv(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Cf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Zv=37297,Jv=0;function Lf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let f=u;f<d;f++){let m=f+1;h.push(`${m===l?">":" "} ${m}: ${c[f]}`)}return h.join(`
`)}(n.getShaderSource(e),a)}return r}function Kv(n,e){let t=function(i){let r=rt.getPrimaries(rt.workingColorSpace),s=rt.getPrimaries(i),a;switch(r===s?a="":r===Hl&&s===kl?a="LinearDisplayP3ToLinearSRGB":r===kl&&s===Hl&&(a="LinearSRGBToLinearDisplayP3"),i){case Oi:case vc:return[a,"LinearTransferOETF"];case Mt:case Ed:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}}(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Qv(n,e){let t;switch(e){case My:t="Linear";break;case Sy:t="Reinhard";break;case wy:t="OptimizedCineon";break;case Ty:t="ACESFilmic";break;case Ry:t="AgX";break;case Ay:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xs(n){return n!==""}function Pf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function If(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(n){return n.replace(ex,nx)}var tx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nx(n,e){let t=Ne[e];if(t===void 0){let i=tx.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Nu(t)}var ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(n){return n.replace(ix,rx)}function rx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Df(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sx(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(_){let P="SHADOWMAP_TYPE_BASIC";return _.shadowMapType===fc?P="SHADOWMAP_TYPE_PCF":_.shadowMapType===_y?P="SHADOWMAP_TYPE_PCF_SOFT":_.shadowMapType===Di&&(P="SHADOWMAP_TYPE_VSM"),P}(t),c=function(_){let P="ENVMAP_TYPE_CUBE";if(_.envMap)switch(_.envMapMode){case ia:case ra:P="ENVMAP_TYPE_CUBE";break;case yc:P="ENVMAP_TYPE_CUBE_UV"}return P}(t),h=function(_){let P="ENVMAP_MODE_REFLECTION";return _.envMap&&_.envMapMode===ra&&(P="ENVMAP_MODE_REFRACTION"),P}(t),u=function(_){let P="ENVMAP_BLENDING_NONE";if(_.envMap)switch(_.combine){case i0:P="ENVMAP_BLENDING_MULTIPLY";break;case Ey:P="ENVMAP_BLENDING_MIX";break;case by:P="ENVMAP_BLENDING_ADD"}return P}(t),d=function(_){let P=_.envMapCubeUVHeight;if(P===null)return null;let U=Math.log2(P)-2,O=1/P;return{texelWidth:1/(3*Math.max(Math.pow(2,U),112)),texelHeight:O,maxMip:U}}(t),f=t.isWebGL2?"":function(_){return[_.extensionDerivatives||_.envMapCubeUVHeight||_.bumpMap||_.normalMapTangentSpace||_.clearcoatNormalMap||_.flatShading||_.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(_.extensionFragDepth||_.logarithmicDepthBuffer)&&_.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",_.extensionDrawBuffers&&_.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(_.extensionShaderTextureLOD||_.envMap||_.transmission)&&_.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}(t),m=function(_){return[_.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Xs).join(`
`)}(t),g=function(_){let P=[];for(let U in _){let O=_[U];O!==!1&&P.push("#define "+U+" "+O)}return P.join(`
`)}(s),p=r.createProgram(),x,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),x.length>0&&(x+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),y.length>0&&(y+=`
`)):(x=[Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),y=[f,Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ur?"#define TONE_MAPPING":"",t.toneMapping!==ur?Ne.tonemapping_pars_fragment:"",t.toneMapping!==ur?Qv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Kv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),a=Nu(a),a=Pf(a,t),a=If(a,t),o=Nu(o),o=Pf(o,t),o=If(o,t),a=Ff(a),o=Ff(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Km?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let b=v+x+a,R=v+y+o,S=Cf(r,r.VERTEX_SHADER,b),T=Cf(r,r.FRAGMENT_SHADER,R);function z(_){if(n.debug.checkShaderErrors){let P=r.getProgramInfoLog(p).trim(),U=r.getShaderInfoLog(S).trim(),O=r.getShaderInfoLog(T).trim(),Z=!0,j=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,S,T);else{let q=Lf(r,S,"vertex"),X=Lf(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+P+`
`+q+`
`+X)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):U!==""&&O!==""||(j=!1);j&&(_.diagnostics={runnable:Z,programLog:P,vertexShader:{log:U,prefix:x},fragmentShader:{log:O,prefix:y}})}r.deleteShader(S),r.deleteShader(T),C=new na(r,p),I=function(P,U){let O={},Z=P.getProgramParameter(U,P.ACTIVE_ATTRIBUTES);for(let j=0;j<Z;j++){let q=P.getActiveAttrib(U,j),X=q.name,G=1;q.type===P.FLOAT_MAT2&&(G=2),q.type===P.FLOAT_MAT3&&(G=3),q.type===P.FLOAT_MAT4&&(G=4),O[X]={type:q.type,location:P.getAttribLocation(U,X),locationSize:G}}return O}(r,p)}let C,I;r.attachShader(p,S),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),this.getUniforms=function(){return C===void 0&&z(this),C},this.getAttributes=function(){return I===void 0&&z(this),I};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(p,Zv)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=T,this}var ax=0,Bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ou(e),t.set(e,i)),i}},Ou=class{constructor(e){this.id=ax++,this.code=e,this.usedTimes=0}};function ox(n,e,t,i,r,s,a){let o=new io,l=new Bu,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures,f=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(p){return p===0?"uv":`uv${p}`}return{getParameters:function(p,x,y,v,b){let R=v.fog,S=b.geometry,T=p.isMeshStandardMaterial?v.environment:null,z=(p.isMeshStandardMaterial?t:e).get(p.envMap||T),C=z&&z.mapping===yc?z.image.height:null,I=m[p.type];p.precision!==null&&(f=r.getMaxPrecision(p.precision),f!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",f,"instead."));let H=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,_=H!==void 0?H.length:0,P,U,O,Z,j=0;if(S.morphAttributes.position!==void 0&&(j=1),S.morphAttributes.normal!==void 0&&(j=2),S.morphAttributes.color!==void 0&&(j=3),I){let Wt=li[I];P=Wt.vertexShader,U=Wt.fragmentShader}else P=p.vertexShader,U=p.fragmentShader,l.update(p),O=l.getVertexShaderID(p),Z=l.getFragmentShaderID(p);let q=n.getRenderTarget(),X=b.isInstancedMesh===!0,G=b.isBatchedMesh===!0,Y=!!p.map,ce=!!p.matcap,M=!!z,E=!!p.aoMap,N=!!p.lightMap,B=!!p.bumpMap,L=!!p.normalMap,V=!!p.displacementMap,D=!!p.emissiveMap,k=!!p.metalnessMap,$=!!p.roughnessMap,J=p.anisotropy>0,ne=p.clearcoat>0,w=p.iridescence>0,se=p.sheen>0,K=p.transmission>0,ee=J&&!!p.anisotropyMap,oe=ne&&!!p.clearcoatMap,pe=ne&&!!p.clearcoatNormalMap,ye=ne&&!!p.clearcoatRoughnessMap,ve=w&&!!p.iridescenceMap,Ie=w&&!!p.iridescenceThicknessMap,xe=se&&!!p.sheenColorMap,be=se&&!!p.sheenRoughnessMap,ze=!!p.specularMap,Ft=!!p.specularColorMap,Se=!!p.specularIntensityMap,Je=K&&!!p.transmissionMap,$e=K&&!!p.thicknessMap,Co=!!p.gradientMap,ps=!!p.alphaMap,Lo=p.alphaTest>0,bn=!!p.alphaHash,un=!!p.extensions,ms=!!S.attributes.uv1,ie=!!S.attributes.uv2,Po=!!S.attributes.uv3,xa=ur;return p.toneMapped&&(q!==null&&q.isXRRenderTarget!==!0||(xa=n.toneMapping)),{isWebGL2:h,shaderID:I,shaderType:p.type,shaderName:p.name,vertexShader:P,fragmentShader:U,defines:p.defines,customVertexShaderID:O,customFragmentShaderID:Z,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:f,batching:G,instancing:X,instancingColor:X&&b.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Oi,map:Y,matcap:ce,envMap:M,envMapMode:M&&z.mapping,envMapCubeUVHeight:C,aoMap:E,lightMap:N,bumpMap:B,normalMap:L,displacementMap:d&&V,emissiveMap:D,normalMapObjectSpace:L&&p.normalMapType===1,normalMapTangentSpace:L&&p.normalMapType===0,metalnessMap:k,roughnessMap:$,anisotropy:J,anisotropyMap:ee,clearcoat:ne,clearcoatMap:oe,clearcoatNormalMap:pe,clearcoatRoughnessMap:ye,iridescence:w,iridescenceMap:ve,iridescenceThicknessMap:Ie,sheen:se,sheenColorMap:xe,sheenRoughnessMap:be,specularMap:ze,specularColorMap:Ft,specularIntensityMap:Se,transmission:K,transmissionMap:Je,thicknessMap:$e,gradientMap:Co,opaque:p.transparent===!1&&p.blending===1,alphaMap:ps,alphaTest:Lo,alphaHash:bn,combine:p.combine,mapUv:Y&&g(p.map.channel),aoMapUv:E&&g(p.aoMap.channel),lightMapUv:N&&g(p.lightMap.channel),bumpMapUv:B&&g(p.bumpMap.channel),normalMapUv:L&&g(p.normalMap.channel),displacementMapUv:V&&g(p.displacementMap.channel),emissiveMapUv:D&&g(p.emissiveMap.channel),metalnessMapUv:k&&g(p.metalnessMap.channel),roughnessMapUv:$&&g(p.roughnessMap.channel),anisotropyMapUv:ee&&g(p.anisotropyMap.channel),clearcoatMapUv:oe&&g(p.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&g(p.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(p.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&g(p.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(p.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(p.sheenRoughnessMap.channel),specularMapUv:ze&&g(p.specularMap.channel),specularColorMapUv:Ft&&g(p.specularColorMap.channel),specularIntensityMapUv:Se&&g(p.specularIntensityMap.channel),transmissionMapUv:Je&&g(p.transmissionMap.channel),thicknessMapUv:$e&&g(p.thicknessMap.channel),alphaMapUv:ps&&g(p.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(L||J),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,vertexUv1s:ms,vertexUv2s:ie,vertexUv3s:Po,pointsUvs:b.isPoints===!0&&!!S.attributes.uv&&(Y||ps),fog:!!R,useFog:p.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:p.flatShading===!0,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:b.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:_,morphTextureStride:j,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:p.dithering,shadowMapEnabled:n.shadowMap.enabled&&y.length>0,shadowMapType:n.shadowMap.type,toneMapping:xa,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Y&&p.map.isVideoTexture===!0&&rt.getTransfer(p.map.colorSpace)===lt,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===2,flipSided:p.side===Zt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionDerivatives:un&&p.extensions.derivatives===!0,extensionFragDepth:un&&p.extensions.fragDepth===!0,extensionDrawBuffers:un&&p.extensions.drawBuffers===!0,extensionShaderTextureLOD:un&&p.extensions.shaderTextureLOD===!0,extensionClipCullDistance:un&&p.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()}},getProgramCacheKey:function(p){let x=[];if(p.shaderID?x.push(p.shaderID):(x.push(p.customVertexShaderID),x.push(p.customFragmentShaderID)),p.defines!==void 0)for(let y in p.defines)x.push(y),x.push(p.defines[y]);return p.isRawShaderMaterial===!1&&(function(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}(x,p),function(y,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),y.push(o.mask)}(x,p),x.push(n.outputColorSpace)),x.push(p.customProgramCacheKey),x.join()},getUniforms:function(p){let x=m[p.type],y;if(x){let v=li[x];y=qy.clone(v.uniforms)}else y=p.uniforms;return y},acquireProgram:function(p,x){let y;for(let v=0,b=c.length;v<b;v++){let R=c[v];if(R.cacheKey===x){y=R,++y.usedTimes;break}}return y===void 0&&(y=new sx(n,x,p,s),c.push(y)),y},releaseProgram:function(p){if(--p.usedTimes==0){let x=c.indexOf(p);c[x]=c[c.length-1],c.pop(),p.destroy()}},releaseShaderCache:function(p){l.remove(p)},programs:c,dispose:function(){l.dispose()}}}function lx(){let n=new WeakMap;return{get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function cx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nf(){let n=[],e=0,t=[],i=[],r=[];function s(a,o,l,c,h,u){let d=n[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},n[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=n.length;a<o;a++){let l=n[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||cx),i.length>1&&i.sort(o||Uf),r.length>1&&r.sort(o||Uf)}}}function hx(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),r;return i===void 0?(r=new Nf,n.set(e,[r])):t>=i.length?(r=new Nf,i.push(r)):r=i[t],r},dispose:function(){n=new WeakMap}}}function ux(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Me};break;case"SpotLight":t={position:new A,direction:new A,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new A,halfWidth:new A,halfHeight:new A}}return n[e.id]=t,t}}}var dx=0;function px(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function mx(n,e){let t=new ux,i=function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new A);let s=new A,a=new Pe,o=new Pe;return{setup:function(l,c){let h=0,u=0,d=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let f=0,m=0,g=0,p=0,x=0,y=0,v=0,b=0,R=0,S=0,T=0;l.sort(px);let z=c===!0?Math.PI:1;for(let I=0,H=l.length;I<H;I++){let _=l[I],P=_.color,U=_.intensity,O=_.distance,Z=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)h+=P.r*U*z,u+=P.g*U*z,d+=P.b*U*z;else if(_.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(_.sh.coefficients[j],U);T++}else if(_.isDirectionalLight){let j=t.get(_);if(j.color.copy(_.color).multiplyScalar(_.intensity*z),_.castShadow){let q=_.shadow,X=i.get(_);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.directionalShadow[f]=X,r.directionalShadowMap[f]=Z,r.directionalShadowMatrix[f]=_.shadow.matrix,y++}r.directional[f]=j,f++}else if(_.isSpotLight){let j=t.get(_);j.position.setFromMatrixPosition(_.matrixWorld),j.color.copy(P).multiplyScalar(U*z),j.distance=O,j.coneCos=Math.cos(_.angle),j.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),j.decay=_.decay,r.spot[g]=j;let q=_.shadow;if(_.map&&(r.spotLightMap[R]=_.map,R++,q.updateMatrices(_),_.castShadow&&S++),r.spotLightMatrix[g]=q.matrix,_.castShadow){let X=i.get(_);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.spotShadow[g]=X,r.spotShadowMap[g]=Z,b++}g++}else if(_.isRectAreaLight){let j=t.get(_);j.color.copy(P).multiplyScalar(U),j.halfWidth.set(.5*_.width,0,0),j.halfHeight.set(0,.5*_.height,0),r.rectArea[p]=j,p++}else if(_.isPointLight){let j=t.get(_);if(j.color.copy(_.color).multiplyScalar(_.intensity*z),j.distance=_.distance,j.decay=_.decay,_.castShadow){let q=_.shadow,X=i.get(_);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,r.pointShadow[m]=X,r.pointShadowMap[m]=Z,r.pointShadowMatrix[m]=_.shadow.matrix,v++}r.point[m]=j,m++}else if(_.isHemisphereLight){let j=t.get(_);j.skyColor.copy(_.color).multiplyScalar(U*z),j.groundColor.copy(_.groundColor).multiplyScalar(U*z),r.hemi[x]=j,x++}}p>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=u,r.ambient[2]=d;let C=r.hash;C.directionalLength===f&&C.pointLength===m&&C.spotLength===g&&C.rectAreaLength===p&&C.hemiLength===x&&C.numDirectionalShadows===y&&C.numPointShadows===v&&C.numSpotShadows===b&&C.numSpotMaps===R&&C.numLightProbes===T||(r.directional.length=f,r.spot.length=g,r.rectArea.length=p,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=b+R-S,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=S,r.numLightProbes=T,C.directionalLength=f,C.pointLength=m,C.spotLength=g,C.rectAreaLength=p,C.hemiLength=x,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=b,C.numSpotMaps=R,C.numLightProbes=T,r.version=dx++)},setupView:function(l,c){let h=0,u=0,d=0,f=0,m=0,g=c.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let y=l[p];if(y.isDirectionalLight){let v=r.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(y.isSpotLight){let v=r.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(y.isRectAreaLight){let v=r.rectArea[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),a.copy(y.matrixWorld),a.premultiply(g),o.extractRotation(a),v.halfWidth.set(.5*y.width,0,0),v.halfHeight.set(0,.5*y.height,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),f++}else if(y.isPointLight){let v=r.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let v=r.hemi[m];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),m++}}},state:r}}function Bf(n,e){let t=new mx(n,e),i=[],r=[];return{init:function(){i.length=0,r.length=0},state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:function(s){t.setup(i,s)},setupLightsView:function(s){t.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){r.push(s)}}}function fx(n,e){let t=new WeakMap;return{get:function(i,r=0){let s=t.get(i),a;return s===void 0?(a=new Bf(n,e),t.set(i,[a])):r>=s.length?(a=new Bf(n,e),s.push(a)):a=s[r],a},dispose:function(){t=new WeakMap}}}var zu=class extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ku=class extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gx(n,e,t){let i=new ca,r=new he,s=new he,a=new Tt,o=new zu({depthPacking:3201}),l=new ku,c={},h=t.maxTextureSize,u={[pr]:Zt,[Zt]:pr,2:2},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:`void main() {
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
}`}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new it;m.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ue(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let x=this.type;function y(S,T){let z=e.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Xn(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,z,d,g,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,z,f,g,null)}function v(S,T,z,C){let I=null,H=z.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(H!==void 0)I=H;else if(I=z.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let _=I.uuid,P=T.uuid,U=c[_];U===void 0&&(U={},c[_]=U);let O=U[P];O===void 0&&(O=I.clone(),U[P]=O,T.addEventListener("dispose",R)),I=O}return I.visible=T.visible,I.wireframe=T.wireframe,I.side=C===Di?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:u[T.side],I.alphaMap=T.alphaMap,I.alphaTest=T.alphaTest,I.map=T.map,I.clipShadows=T.clipShadows,I.clippingPlanes=T.clippingPlanes,I.clipIntersection=T.clipIntersection,I.displacementMap=T.displacementMap,I.displacementScale=T.displacementScale,I.displacementBias=T.displacementBias,I.wireframeLinewidth=T.wireframeLinewidth,I.linewidth=T.linewidth,z.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(n.properties.get(I).light=z),I}function b(S,T,z,C,I){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===Di)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld);let _=e.update(S),P=S.material;if(Array.isArray(P)){let U=_.groups;for(let O=0,Z=U.length;O<Z;O++){let j=U[O],q=P[j.materialIndex];if(q&&q.visible){let X=v(S,q,C,I);S.onBeforeShadow(n,S,T,z,_,X,j),n.renderBufferDirect(z,null,_,X,S,j),S.onAfterShadow(n,S,T,z,_,X,j)}}}else if(P.visible){let U=v(S,P,C,I);S.onBeforeShadow(n,S,T,z,_,U,null),n.renderBufferDirect(z,null,_,U,S,null),S.onAfterShadow(n,S,T,z,_,U,null)}}let H=S.children;for(let _=0,P=H.length;_<P;_++)b(H[_],T,z,C,I)}function R(S){S.target.removeEventListener("dispose",R);for(let T in c){let z=c[T],C=S.target.uuid;C in z&&(z[C].dispose(),delete z[C])}}this.render=function(S,T,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let C=n.getRenderTarget(),I=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),_=n.state;_.setBlending(0),_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let P=x!==Di&&this.type===Di,U=x===Di&&this.type!==Di;for(let O=0,Z=S.length;O<Z;O++){let j=S[O],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let X=q.getFrameExtents();if(r.multiply(X),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/X.x),r.x=s.x*X.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/X.y),r.y=s.y*X.y,q.mapSize.y=s.y)),q.map===null||P===!0||U===!0){let Y=this.type!==Di?{minFilter:Ot,magFilter:Ot}:{};q.map!==null&&q.map.dispose(),q.map=new Xn(r.x,r.y,Y),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let G=q.getViewportCount();for(let Y=0;Y<G;Y++){let ce=q.getViewport(Y);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),_.viewport(a),q.updateMatrices(j,Y),i=q.getFrustum(),b(T,z,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===Di&&y(q,z),q.needsUpdate=!1}x=this.type,p.needsUpdate=!1,n.setRenderTarget(C,I,H)}}function yx(n,e,t){let i=t.isWebGL2,r=new function(){let w=!1,se=new Tt,K=null,ee=new Tt(0,0,0,0);return{setMask:function(oe){K===oe||w||(n.colorMask(oe,oe,oe,oe),K=oe)},setLocked:function(oe){w=oe},setClear:function(oe,pe,ye,ve,Ie){Ie===!0&&(oe*=ve,pe*=ve,ye*=ve),se.set(oe,pe,ye,ve),ee.equals(se)===!1&&(n.clearColor(oe,pe,ye,ve),ee.copy(se))},reset:function(){w=!1,K=null,ee.set(-1,0,0,0)}}},s=new function(){let w=!1,se=null,K=null,ee=null;return{setTest:function(oe){oe?B(n.DEPTH_TEST):L(n.DEPTH_TEST)},setMask:function(oe){se===oe||w||(n.depthMask(oe),se=oe)},setFunc:function(oe){if(K!==oe){switch(oe){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:default:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL)}K=oe}},setLocked:function(oe){w=oe},setClear:function(oe){ee!==oe&&(n.clearDepth(oe),ee=oe)},reset:function(){w=!1,se=null,K=null,ee=null}}},a=new function(){let w=!1,se=null,K=null,ee=null,oe=null,pe=null,ye=null,ve=null,Ie=null;return{setTest:function(xe){w||(xe?B(n.STENCIL_TEST):L(n.STENCIL_TEST))},setMask:function(xe){se===xe||w||(n.stencilMask(xe),se=xe)},setFunc:function(xe,be,ze){K===xe&&ee===be&&oe===ze||(n.stencilFunc(xe,be,ze),K=xe,ee=be,oe=ze)},setOp:function(xe,be,ze){pe===xe&&ye===be&&ve===ze||(n.stencilOp(xe,be,ze),pe=xe,ye=be,ve=ze)},setLocked:function(xe){w=xe},setClear:function(xe){Ie!==xe&&(n.clearStencil(xe),Ie=xe)},reset:function(){w=!1,se=null,K=null,ee=null,oe=null,pe=null,ye=null,ve=null,Ie=null}}},o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,m=!1,g=null,p=null,x=null,y=null,v=null,b=null,R=null,S=new Me(0,0,0),T=0,z=!1,C=null,I=null,H=null,_=null,P=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Z=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),O=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),O=Z>=2);let q=null,X={},G=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),ce=new Tt().fromArray(G),M=new Tt().fromArray(Y);function E(w,se,K,ee){let oe=new Uint8Array(4),pe=n.createTexture();n.bindTexture(w,pe),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<K;ye++)!i||w!==n.TEXTURE_3D&&w!==n.TEXTURE_2D_ARRAY?n.texImage2D(se+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage3D(se,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,oe);return pe}let N={};function B(w){c[w]!==!0&&(n.enable(w),c[w]=!0)}function L(w){c[w]!==!1&&(n.disable(w),c[w]=!1)}N[n.TEXTURE_2D]=E(n.TEXTURE_2D,n.TEXTURE_2D,1),N[n.TEXTURE_CUBE_MAP]=E(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(N[n.TEXTURE_2D_ARRAY]=E(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),N[n.TEXTURE_3D]=E(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),B(n.DEPTH_TEST),s.setFunc(3),$(!1),J(1),B(n.CULL_FACE),k(0);let V={[Gr]:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};if(i)V[103]=n.MIN,V[104]=n.MAX;else{let w=e.get("EXT_blend_minmax");w!==null&&(V[103]=w.MIN_EXT,V[104]=w.MAX_EXT)}let D={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,[_u]:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,[Eu]:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function k(w,se,K,ee,oe,pe,ye,ve,Ie,xe){if(w!==0){if(m===!1&&(B(n.BLEND),m=!0),w===5)oe=oe||se,pe=pe||K,ye=ye||ee,se===p&&oe===v||(n.blendEquationSeparate(V[se],V[oe]),p=se,v=oe),K===x&&ee===y&&pe===b&&ye===R||(n.blendFuncSeparate(D[K],D[ee],D[pe],D[ye]),x=K,y=ee,b=pe,R=ye),ve.equals(S)!==!1&&Ie===T||(n.blendColor(ve.r,ve.g,ve.b,Ie),S.copy(ve),T=Ie),g=w,z=!1;else if(w!==g||xe!==z){if(p===Gr&&v===Gr||(n.blendEquation(n.FUNC_ADD),p=Gr,v=Gr),xe)switch(w){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}else switch(w){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}x=null,y=null,b=null,R=null,S.set(0,0,0),T=0,g=w,z=xe}}else m===!0&&(L(n.BLEND),m=!1)}function $(w){C!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),C=w)}function J(w){w!==0?(B(n.CULL_FACE),w!==I&&(w===1?n.cullFace(n.BACK):w===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):L(n.CULL_FACE),I=w}function ne(w,se,K){w?(B(n.POLYGON_OFFSET_FILL),_===se&&P===K||(n.polygonOffset(se,K),_=se,P=K)):L(n.POLYGON_OFFSET_FILL)}return{buffers:{color:r,depth:s,stencil:a},enable:B,disable:L,bindFramebuffer:function(w,se){return h[w]!==se&&(n.bindFramebuffer(w,se),h[w]=se,i&&(w===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=se),w===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=se)),!0)},drawBuffers:function(w,se){let K=d,ee=!1;if(w)if(K=u.get(se),K===void 0&&(K=[],u.set(se,K)),w.isWebGLMultipleRenderTargets){let oe=w.texture;if(K.length!==oe.length||K[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,ye=oe.length;pe<ye;pe++)K[pe]=n.COLOR_ATTACHMENT0+pe;K.length=oe.length,ee=!0}}else K[0]!==n.COLOR_ATTACHMENT0&&(K[0]=n.COLOR_ATTACHMENT0,ee=!0);else K[0]!==n.BACK&&(K[0]=n.BACK,ee=!0);ee&&(t.isWebGL2?n.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))},useProgram:function(w){return f!==w&&(n.useProgram(w),f=w,!0)},setBlending:k,setMaterial:function(w,se){w.side===2?L(n.CULL_FACE):B(n.CULL_FACE);let K=w.side===Zt;se&&(K=!K),$(K),w.blending===1&&w.transparent===!1?k(0):k(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),r.setMask(w.colorWrite);let ee=w.stencilWrite;a.setTest(ee),ee&&(a.setMask(w.stencilWriteMask),a.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),a.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),ne(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):L(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:$,setCullFace:J,setLineWidth:function(w){w!==H&&(O&&n.lineWidth(w),H=w)},setPolygonOffset:ne,setScissorTest:function(w){w?B(n.SCISSOR_TEST):L(n.SCISSOR_TEST)},activeTexture:function(w){w===void 0&&(w=n.TEXTURE0+U-1),q!==w&&(n.activeTexture(w),q=w)},bindTexture:function(w,se,K){K===void 0&&(K=q===null?n.TEXTURE0+U-1:q);let ee=X[K];ee===void 0&&(ee={type:void 0,texture:void 0},X[K]=ee),ee.type===w&&ee.texture===se||(q!==K&&(n.activeTexture(K),q=K),n.bindTexture(w,se||N[w]),ee.type=w,ee.texture=se)},unbindTexture:function(){let w=X[q];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexImage3D:function(){try{n.compressedTexImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage2D:function(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage3D:function(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},updateUBOMapping:function(w,se){let K=l.get(se);K===void 0&&(K=new WeakMap,l.set(se,K));let ee=K.get(w);ee===void 0&&(ee=n.getUniformBlockIndex(se,w.name),K.set(w,ee))},uniformBlockBinding:function(w,se){let K=l.get(se).get(w);o.get(se)!==K&&(n.uniformBlockBinding(se,K,w.__bindingPointIndex),o.set(se,K))},texStorage2D:function(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texStorage3D:function(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage2D:function(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage3D:function(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},scissor:function(w){ce.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),ce.copy(w))},viewport:function(w){M.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),M.copy(w))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},q=null,X={},h={},u=new WeakMap,d=[],f=null,m=!1,g=null,p=null,x=null,y=null,v=null,b=null,R=null,S=new Me(0,0,0),T=0,z=!1,C=null,I=null,H=null,_=null,P=null,ce.set(0,0,n.canvas.width,n.canvas.height),M.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}}}function vx(n,e,t,i,r,s,a){let o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,E){return f?new OffscreenCanvas(M,E):Vl("canvas")}function g(M,E,N,B){let L=1;if((M.width>B||M.height>B)&&(L=B/Math.max(M.width,M.height)),L<1||E===!0){if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){let V=E?Ru:Math.floor,D=V(L*M.width),k=V(L*M.height);u===void 0&&(u=m(D,k));let $=N?m(D,k):u;return $.width=D,$.height=k,$.getContext("2d").drawImage(M,0,0,D,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+D+"x"+k+")."),$}return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M}return M}function p(M){return Qm(M.width)&&Qm(M.height)}function x(M,E){return M.generateMipmaps&&E&&M.minFilter!==Ot&&M.minFilter!==$n}function y(M){n.generateMipmap(M)}function v(M,E,N,B,L=!1){if(o===!1)return E;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let V=E;if(E===n.RED&&(N===n.FLOAT&&(V=n.R32F),N===n.HALF_FLOAT&&(V=n.R16F),N===n.UNSIGNED_BYTE&&(V=n.R8)),E===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.R8UI),N===n.UNSIGNED_SHORT&&(V=n.R16UI),N===n.UNSIGNED_INT&&(V=n.R32UI),N===n.BYTE&&(V=n.R8I),N===n.SHORT&&(V=n.R16I),N===n.INT&&(V=n.R32I)),E===n.RG&&(N===n.FLOAT&&(V=n.RG32F),N===n.HALF_FLOAT&&(V=n.RG16F),N===n.UNSIGNED_BYTE&&(V=n.RG8)),E===n.RGBA){let D=L?zl:rt.getTransfer(B);N===n.FLOAT&&(V=n.RGBA32F),N===n.HALF_FLOAT&&(V=n.RGBA16F),N===n.UNSIGNED_BYTE&&(V=D===lt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return V!==n.R16F&&V!==n.R32F&&V!==n.RG16F&&V!==n.RG32F&&V!==n.RGBA16F&&V!==n.RGBA32F||e.get("EXT_color_buffer_float"),V}function b(M,E,N){return x(M,N)===!0||M.isFramebufferTexture&&M.minFilter!==Ot&&M.minFilter!==$n?Math.log2(Math.max(E.width,E.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?E.mipmaps.length:1}function R(M){return M===Ot||M===Mm||M===Uh?n.NEAREST:n.LINEAR}function S(M){let E=M.target;E.removeEventListener("dispose",S),function(N){let B=i.get(N);if(B.__webglInit===void 0)return;let L=N.source,V=d.get(L);if(V){let D=V[B.__cacheKey];D.usedTimes--,D.usedTimes===0&&z(N),Object.keys(V).length===0&&d.delete(L)}i.remove(N)}(E),E.isVideoTexture&&h.delete(E)}function T(M){let E=M.target;E.removeEventListener("dispose",T),function(N){let B=N.texture,L=i.get(N),V=i.get(B);if(V.__webglTexture!==void 0&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(L.__webglFramebuffer[D]))for(let k=0;k<L.__webglFramebuffer[D].length;k++)n.deleteFramebuffer(L.__webglFramebuffer[D][k]);else n.deleteFramebuffer(L.__webglFramebuffer[D]);L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[D])}else{if(Array.isArray(L.__webglFramebuffer))for(let D=0;D<L.__webglFramebuffer.length;D++)n.deleteFramebuffer(L.__webglFramebuffer[D]);else n.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let D=0;D<L.__webglColorRenderbuffer.length;D++)L.__webglColorRenderbuffer[D]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[D]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let D=0,k=B.length;D<k;D++){let $=i.get(B[D]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(B[D])}i.remove(B),i.remove(N)}(E)}function z(M){let E=i.get(M);n.deleteTexture(E.__webglTexture);let N=M.source;delete d.get(N)[E.__cacheKey],a.memory.textures--}let C=0;function I(M,E){let N=i.get(M);if(M.isVideoTexture&&function(B){let L=a.render.frame;h.get(B)!==L&&(h.set(B,L),B.update())}(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){let B=M.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(B.complete!==!1)return void Z(N,M,E);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+E)}let H={[hi]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[Su]:n.MIRRORED_REPEAT},_={[Ot]:n.NEAREST,[Mm]:n.NEAREST_MIPMAP_NEAREST,[Uh]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[Cy]:n.LINEAR_MIPMAP_NEAREST,[Nl]:n.LINEAR_MIPMAP_LINEAR},P={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function U(M,E,N){if(N?(n.texParameteri(M,n.TEXTURE_WRAP_S,H[E.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,H[E.wrapT]),M!==n.TEXTURE_3D&&M!==n.TEXTURE_2D_ARRAY||n.texParameteri(M,n.TEXTURE_WRAP_R,H[E.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,_[E.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,_[E.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),M!==n.TEXTURE_3D&&M!==n.TEXTURE_2D_ARRAY||n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),E.wrapS===Ui&&E.wrapT===Ui||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,R(E.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,R(E.minFilter)),E.minFilter!==Ot&&E.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let B=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ot||E.minFilter!==Uh&&E.minFilter!==Nl||E.type===cr&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===no&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(M,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function O(M,E){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,E.addEventListener("dispose",S));let B=E.source,L=d.get(B);L===void 0&&(L={},d.set(B,L));let V=function(D){let k=[];return k.push(D.wrapS),k.push(D.wrapT),k.push(D.wrapR||0),k.push(D.magFilter),k.push(D.minFilter),k.push(D.anisotropy),k.push(D.internalFormat),k.push(D.format),k.push(D.type),k.push(D.generateMipmaps),k.push(D.premultiplyAlpha),k.push(D.flipY),k.push(D.unpackAlignment),k.push(D.colorSpace),k.join()}(E);if(V!==M.__cacheKey){L[V]===void 0&&(L[V]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),L[V].usedTimes++;let D=L[M.__cacheKey];D!==void 0&&(L[M.__cacheKey].usedTimes--,D.usedTimes===0&&z(E)),M.__cacheKey=V,M.__webglTexture=L[V].texture}return N}function Z(M,E,N){let B=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(B=n.TEXTURE_3D);let L=O(M,E),V=E.source;t.bindTexture(B,M.__webglTexture,n.TEXTURE0+N);let D=i.get(V);if(V.version!==D.__version||L===!0){t.activeTexture(n.TEXTURE0+N);let k=rt.getPrimaries(rt.workingColorSpace),$=E.colorSpace===ci?null:rt.getPrimaries(E.colorSpace),J=E.colorSpace===ci||k===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ne=function(be){return!o&&(be.wrapS!==Ui||be.wrapT!==Ui||be.minFilter!==Ot&&be.minFilter!==$n)}(E)&&p(E.image)===!1,w=g(E.image,ne,!1,r.maxTextureSize);w=ce(E,w);let se=p(w)||o,K=s.convert(E.format,E.colorSpace),ee,oe=s.convert(E.type),pe=v(E.internalFormat,K,oe,E.colorSpace,E.isVideoTexture);U(B,E,se);let ye=E.mipmaps,ve=o&&E.isVideoTexture!==!0&&pe!==u0,Ie=D.__version===void 0||L===!0,xe=b(E,w,se);if(E.isDepthTexture)pe=n.DEPTH_COMPONENT,o?pe=E.type===cr?n.DEPTH_COMPONENT32F:E.type===lr?n.DEPTH_COMPONENT24:E.type===qr?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT16:E.type===cr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===jr&&pe===n.DEPTH_COMPONENT&&E.type!==_d&&E.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=lr,oe=s.convert(E.type)),E.format===sa&&pe===n.DEPTH_COMPONENT&&(pe=n.DEPTH_STENCIL,E.type!==qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=qr,oe=s.convert(E.type))),Ie&&(ve?t.texStorage2D(n.TEXTURE_2D,1,pe,w.width,w.height):t.texImage2D(n.TEXTURE_2D,0,pe,w.width,w.height,0,K,oe,null));else if(E.isDataTexture)if(ye.length>0&&se){ve&&Ie&&t.texStorage2D(n.TEXTURE_2D,xe,pe,ye[0].width,ye[0].height);for(let be=0,ze=ye.length;be<ze;be++)ee=ye[be],ve?t.texSubImage2D(n.TEXTURE_2D,be,0,0,ee.width,ee.height,K,oe,ee.data):t.texImage2D(n.TEXTURE_2D,be,pe,ee.width,ee.height,0,K,oe,ee.data);E.generateMipmaps=!1}else ve?(Ie&&t.texStorage2D(n.TEXTURE_2D,xe,pe,w.width,w.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,K,oe,w.data)):t.texImage2D(n.TEXTURE_2D,0,pe,w.width,w.height,0,K,oe,w.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ve&&Ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,pe,ye[0].width,ye[0].height,w.depth);for(let be=0,ze=ye.length;be<ze;be++)ee=ye[be],E.format!==Cn?K!==null?ve?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,ee.width,ee.height,w.depth,K,ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,pe,ee.width,ee.height,w.depth,0,ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,ee.width,ee.height,w.depth,K,oe,ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,pe,ee.width,ee.height,w.depth,0,K,oe,ee.data)}else{ve&&Ie&&t.texStorage2D(n.TEXTURE_2D,xe,pe,ye[0].width,ye[0].height);for(let be=0,ze=ye.length;be<ze;be++)ee=ye[be],E.format!==Cn?K!==null?ve?t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,ee.width,ee.height,K,ee.data):t.compressedTexImage2D(n.TEXTURE_2D,be,pe,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?t.texSubImage2D(n.TEXTURE_2D,be,0,0,ee.width,ee.height,K,oe,ee.data):t.texImage2D(n.TEXTURE_2D,be,pe,ee.width,ee.height,0,K,oe,ee.data)}else if(E.isDataArrayTexture)ve?(Ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,pe,w.width,w.height,w.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,w.width,w.height,w.depth,K,oe,w.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,w.width,w.height,w.depth,0,K,oe,w.data);else if(E.isData3DTexture)ve?(Ie&&t.texStorage3D(n.TEXTURE_3D,xe,pe,w.width,w.height,w.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,w.width,w.height,w.depth,K,oe,w.data)):t.texImage3D(n.TEXTURE_3D,0,pe,w.width,w.height,w.depth,0,K,oe,w.data);else if(E.isFramebufferTexture){if(Ie)if(ve)t.texStorage2D(n.TEXTURE_2D,xe,pe,w.width,w.height);else{let be=w.width,ze=w.height;for(let Ft=0;Ft<xe;Ft++)t.texImage2D(n.TEXTURE_2D,Ft,pe,be,ze,0,K,oe,null),be>>=1,ze>>=1}}else if(ye.length>0&&se){ve&&Ie&&t.texStorage2D(n.TEXTURE_2D,xe,pe,ye[0].width,ye[0].height);for(let be=0,ze=ye.length;be<ze;be++)ee=ye[be],ve?t.texSubImage2D(n.TEXTURE_2D,be,0,0,K,oe,ee):t.texImage2D(n.TEXTURE_2D,be,pe,K,oe,ee);E.generateMipmaps=!1}else ve?(Ie&&t.texStorage2D(n.TEXTURE_2D,xe,pe,w.width,w.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,K,oe,w)):t.texImage2D(n.TEXTURE_2D,0,pe,K,oe,w);x(E,se)&&y(B),D.__version=V.version,E.onUpdate&&E.onUpdate(E)}M.__version=E.version}function j(M,E,N,B,L,V){let D=s.convert(N.format,N.colorSpace),k=s.convert(N.type),$=v(N.internalFormat,D,k,N.colorSpace);if(!i.get(E).__hasExternalTextures){let J=Math.max(1,E.width>>V),ne=Math.max(1,E.height>>V);L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?t.texImage3D(L,V,$,J,ne,E.depth,0,D,k,null):t.texImage2D(L,V,$,J,ne,0,D,k,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Y(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,L,i.get(N).__webglTexture,0,G(E)):(L===n.TEXTURE_2D||L>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,L,i.get(N).__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function q(M,E,N){if(n.bindRenderbuffer(n.RENDERBUFFER,M),E.depthBuffer&&!E.stencilBuffer){let B=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||Y(E)){let L=E.depthTexture;L&&L.isDepthTexture&&(L.type===cr?B=n.DEPTH_COMPONENT32F:L.type===lr&&(B=n.DEPTH_COMPONENT24));let V=G(E);Y(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,B,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,V,B,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,B,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(E.depthBuffer&&E.stencilBuffer){let B=G(E);N&&Y(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,B,n.DEPTH24_STENCIL8,E.width,E.height):Y(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,B,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{let B=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let L=0;L<B.length;L++){let V=B[L],D=s.convert(V.format,V.colorSpace),k=s.convert(V.type),$=v(V.internalFormat,D,k,V.colorSpace),J=G(E);N&&Y(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,$,E.width,E.height):Y(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,$,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,$,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function X(M){let E=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!E.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");(function(B,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,B),!L.depthTexture||!L.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(L.depthTexture).__webglTexture&&L.depthTexture.image.width===L.width&&L.depthTexture.image.height===L.height||(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),I(L.depthTexture,0);let V=i.get(L.depthTexture).__webglTexture,D=G(L);if(L.depthTexture.format===jr)Y(L)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,D):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else{if(L.depthTexture.format!==sa)throw new Error("Unknown depthTexture format");Y(L)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,D):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0)}})(E.__webglFramebuffer,M)}else if(N){E.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[B]),E.__webglDepthbuffer[B]=n.createRenderbuffer(),q(E.__webglDepthbuffer[B],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),q(E.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function G(M){return Math.min(r.maxSamples,M.samples)}function Y(M){let E=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ce(M,E){let N=M.colorSpace,B=M.format,L=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Tu||N!==Oi&&N!==ci&&(rt.getTransfer(N)===lt?o===!1?e.has("EXT_sRGB")===!0&&B===Cn?(M.format=Tu,M.minFilter=$n,M.generateMipmaps=!1):E=Wl.sRGBToLinear(E):B===Cn&&L===$r||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),E}this.allocateTextureUnit=function(){let M=C;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),C+=1,M},this.resetTextureUnits=function(){C=0},this.setTexture2D=I,this.setTexture2DArray=function(M,E){let N=i.get(M);M.version>0&&N.__version!==M.version?Z(N,M,E):t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+E)},this.setTexture3D=function(M,E){let N=i.get(M);M.version>0&&N.__version!==M.version?Z(N,M,E):t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+E)},this.setTextureCube=function(M,E){let N=i.get(M);M.version>0&&N.__version!==M.version?function(B,L,V){if(L.image.length!==6)return;let D=O(B,L),k=L.source;t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+V);let $=i.get(k);if(k.version!==$.__version||D===!0){t.activeTexture(n.TEXTURE0+V);let J=rt.getPrimaries(rt.workingColorSpace),ne=L.colorSpace===ci?null:rt.getPrimaries(L.colorSpace),w=L.colorSpace===ci||J===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,L.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,L.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,w);let se=L.isCompressedTexture||L.image[0].isCompressedTexture,K=L.image[0]&&L.image[0].isDataTexture,ee=[];for(let Se=0;Se<6;Se++)ee[Se]=se||K?K?L.image[Se].image:L.image[Se]:g(L.image[Se],!1,!0,r.maxCubemapSize),ee[Se]=ce(L,ee[Se]);let oe=ee[0],pe=p(oe)||o,ye=s.convert(L.format,L.colorSpace),ve=s.convert(L.type),Ie=v(L.internalFormat,ye,ve,L.colorSpace),xe=o&&L.isVideoTexture!==!0,be=$.__version===void 0||D===!0,ze,Ft=b(L,oe,pe);if(U(n.TEXTURE_CUBE_MAP,L,pe),se){xe&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,Ie,oe.width,oe.height);for(let Se=0;Se<6;Se++){ze=ee[Se].mipmaps;for(let Je=0;Je<ze.length;Je++){let $e=ze[Je];L.format!==Cn?ye!==null?xe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,0,0,$e.width,$e.height,ye,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,Ie,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,0,0,$e.width,$e.height,ye,ve,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,Ie,$e.width,$e.height,0,ye,ve,$e.data)}}}else{ze=L.mipmaps,xe&&be&&(ze.length>0&&Ft++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ft,Ie,ee[0].width,ee[0].height));for(let Se=0;Se<6;Se++)if(K){xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ee[Se].width,ee[Se].height,ye,ve,ee[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ie,ee[Se].width,ee[Se].height,0,ye,ve,ee[Se].data);for(let Je=0;Je<ze.length;Je++){let $e=ze[Je].image[Se].image;xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,0,0,$e.width,$e.height,ye,ve,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,Ie,$e.width,$e.height,0,ye,ve,$e.data)}}else{xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ye,ve,ee[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ie,ye,ve,ee[Se]);for(let Je=0;Je<ze.length;Je++){let $e=ze[Je];xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,0,0,ye,ve,$e.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,Ie,ye,ve,$e.image[Se])}}}x(L,pe)&&y(n.TEXTURE_CUBE_MAP),$.__version=k.version,L.onUpdate&&L.onUpdate(L)}B.__version=L.version}(N,M,E):t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+E)},this.rebindTextures=function(M,E,N){let B=i.get(M);E!==void 0&&j(B.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&X(M)},this.setupRenderTarget=function(M){let E=M.texture,N=i.get(M),B=i.get(E);M.addEventListener("dispose",T),M.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=E.version,a.memory.textures++);let L=M.isWebGLCubeRenderTarget===!0,V=M.isWebGLMultipleRenderTargets===!0,D=p(M)||o;if(L){N.__webglFramebuffer=[];for(let k=0;k<6;k++)if(o&&E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer[k]=[];for(let $=0;$<E.mipmaps.length;$++)N.__webglFramebuffer[k][$]=n.createFramebuffer()}else N.__webglFramebuffer[k]=n.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer=[];for(let k=0;k<E.mipmaps.length;k++)N.__webglFramebuffer[k]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(V)if(r.drawBuffers){let k=M.texture;for(let $=0,J=k.length;$<J;$++){let ne=i.get(k[$]);ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&Y(M)===!1){let k=V?E:[E];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let $=0;$<k.length;$++){let J=k[$];N.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[$]);let ne=s.convert(J.format,J.colorSpace),w=s.convert(J.type),se=v(J.internalFormat,ne,w,J.colorSpace,M.isXRRenderTarget===!0),K=G(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,K,se,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,N.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),q(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(L){t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),U(n.TEXTURE_CUBE_MAP,E,D);for(let k=0;k<6;k++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let $=0;$<E.mipmaps.length;$++)j(N.__webglFramebuffer[k][$],M,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,$);else j(N.__webglFramebuffer[k],M,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);x(E,D)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(V){let k=M.texture;for(let $=0,J=k.length;$<J;$++){let ne=k[$],w=i.get(ne);t.bindTexture(n.TEXTURE_2D,w.__webglTexture),U(n.TEXTURE_2D,ne,D),j(N.__webglFramebuffer,M,ne,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,0),x(ne,D)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let k=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?k=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(k,B.__webglTexture),U(k,E,D),o&&E.mipmaps&&E.mipmaps.length>0)for(let $=0;$<E.mipmaps.length;$++)j(N.__webglFramebuffer[$],M,E,n.COLOR_ATTACHMENT0,k,$);else j(N.__webglFramebuffer,M,E,n.COLOR_ATTACHMENT0,k,0);x(E,D)&&y(k),t.unbindTexture()}M.depthBuffer&&X(M)},this.updateRenderTargetMipmap=function(M){let E=p(M)||o,N=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let B=0,L=N.length;B<L;B++){let V=N[B];if(x(V,E)){let D=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,k=i.get(V).__webglTexture;t.bindTexture(D,k),y(D),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(M){if(o&&M.samples>0&&Y(M)===!1){let E=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],N=M.width,B=M.height,L=n.COLOR_BUFFER_BIT,V=[],D=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=i.get(M),$=M.isWebGLMultipleRenderTargets===!0;if($)for(let J=0;J<E.length;J++)t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let J=0;J<E.length;J++){V.push(n.COLOR_ATTACHMENT0+J),M.depthBuffer&&V.push(D);let ne=k.__ignoreDepthValues!==void 0&&k.__ignoreDepthValues;if(ne===!1&&(M.depthBuffer&&(L|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(L|=n.STENCIL_BUFFER_BIT)),$&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,k.__webglColorRenderbuffer[J]),ne===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[D]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[D])),$){let w=i.get(E[J]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,w,0)}n.blitFramebuffer(0,0,N,B,0,0,N,B,L,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let J=0;J<E.length;J++){t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,k.__webglColorRenderbuffer[J]);let ne=i.get(E[J]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Y}function xx(n,e,t){let i=t.isWebGL2;return{convert:function(r,s=""){let a,o=rt.getTransfer(s);if(r===$r)return n.UNSIGNED_BYTE;if(r===a0)return n.UNSIGNED_SHORT_4_4_4_4;if(r===o0)return n.UNSIGNED_SHORT_5_5_5_1;if(r===1010)return n.BYTE;if(r===1011)return n.SHORT;if(r===_d)return n.UNSIGNED_SHORT;if(r===s0)return n.INT;if(r===lr)return n.UNSIGNED_INT;if(r===cr)return n.FLOAT;if(r===no)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===1021)return n.ALPHA;if(r===Cn)return n.RGBA;if(r===1024)return n.LUMINANCE;if(r===1025)return n.LUMINANCE_ALPHA;if(r===jr)return n.DEPTH_COMPONENT;if(r===sa)return n.DEPTH_STENCIL;if(r===Tu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===1028)return n.RED;if(r===l0)return n.RED_INTEGER;if(r===1030)return n.RG;if(r===c0)return n.RG_INTEGER;if(r===h0)return n.RGBA_INTEGER;if(r===Nh||r===Bh||r===Oh||r===zh)if(o===lt){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(r===Nh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(r===Nh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(r===Sm||r===wm||r===Tm||r===Am){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(r===Sm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Am)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(r===u0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rm||r===Cm){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(r===Rm)return o===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Cm)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(r===Lm||r===Pm||r===Im||r===Fm||r===Dm||r===Um||r===Nm||r===Bm||r===Om||r===zm||r===km||r===Hm||r===Gm||r===Vm){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(r===Lm)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pm)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Im)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fm)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dm)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Um)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nm)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bm)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Om)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zm)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===km)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hm)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gm)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vm)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(r===kh||r===Wm||r===$m){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(r===kh)return o===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$m)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(r===36283||r===qm||r===jm||r===Xm){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(r===kh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===qm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return r===qr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}}}var Hu=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ge=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_x={type:"move"},Ka=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let p=t.getJointPose(g,i),x=this._getHandJoint(c,g);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=p.radius),x.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_x)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ge;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Gu=class extends mr{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,g=t.getContextAttributes(),p=null,x=null,y=[],v=[],b=new he,R=null,S=new Yt;S.layers.enable(1),S.viewport=new Tt;let T=new Yt;T.layers.enable(2),T.viewport=new Tt;let z=[S,T],C=new Hu;C.layers.enable(1),C.layers.enable(2);let I=null,H=null;function _(G){let Y=v.indexOf(G.inputSource);if(Y===-1)return;let ce=y[Y];ce!==void 0&&(ce.update(G.inputSource,G.frame,c||a),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function P(){r.removeEventListener("select",_),r.removeEventListener("selectstart",_),r.removeEventListener("selectend",_),r.removeEventListener("squeeze",_),r.removeEventListener("squeezestart",_),r.removeEventListener("squeezeend",_),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",U);for(let G=0;G<y.length;G++){let Y=v[G];Y!==null&&(v[G]=null,y[G].disconnect(Y))}I=null,H=null,e.setRenderTarget(p),f=null,d=null,u=null,r=null,x=null,X.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}function U(G){for(let Y=0;Y<G.removed.length;Y++){let ce=G.removed[Y],M=v.indexOf(ce);M>=0&&(v[M]=null,y[M].disconnect(ce))}for(let Y=0;Y<G.added.length;Y++){let ce=G.added[Y],M=v.indexOf(ce);if(M===-1){for(let N=0;N<y.length;N++){if(N>=v.length){v.push(ce),M=N;break}if(v[N]===null){v[N]=ce,M=N;break}}if(M===-1)break}let E=y[M];E&&E.connect(ce)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=y[G];return Y===void 0&&(Y=new Ka,y[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=y[G];return Y===void 0&&(Y=new Ka,y[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=y[G];return Y===void 0&&(Y=new Ka,y[G]=Y),Y.getHandSpace()},this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",_),r.addEventListener("selectstart",_),r.addEventListener("selectend",_),r.addEventListener("squeeze",_),r.addEventListener("squeezestart",_),r.addEventListener("squeezeend",_),r.addEventListener("end",P),r.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:r.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Xn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:$r,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Y=null,ce=null,M=null;g.depth&&(M=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=g.stencil?sa:jr,ce=g.stencil?qr:lr);let E={colorFormat:t.RGBA8,depthFormat:M,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(E),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Xn(d.textureWidth,d.textureHeight,{format:Cn,type:$r,depthTexture:new Kl(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0}),e.properties.get(x).__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),X.setContext(r),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};let O=new A,Z=new A;function j(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;C.near=T.near=S.near=G.near,C.far=T.far=S.far=G.far,I===C.near&&H===C.far||(r.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,H=C.far);let Y=G.parent,ce=C.cameras;j(C,Y);for(let M=0;M<ce.length;M++)j(ce[M],Y);ce.length===2?function(M,E,N){O.setFromMatrixPosition(E.matrixWorld),Z.setFromMatrixPosition(N.matrixWorld);let B=O.distanceTo(Z),L=E.projectionMatrix.elements,V=N.projectionMatrix.elements,D=L[14]/(L[10]-1),k=L[14]/(L[10]+1),$=(L[9]+1)/L[5],J=(L[9]-1)/L[5],ne=(L[8]-1)/L[0],w=(V[8]+1)/V[0],se=D*ne,K=D*w,ee=B/(-ne+w),oe=ee*-ne;E.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(oe),M.translateZ(ee),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert();let pe=D+ee,ye=k+ee,ve=se-oe,Ie=K+(B-oe),xe=$*k/ye*pe,be=J*k/ye*pe;M.projectionMatrix.makePerspective(ve,Ie,xe,be,pe,ye),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}(C,S,T):C.projectionMatrix.copy(S.projectionMatrix),function(M,E,N){N===null?M.matrix.copy(E.matrixWorld):(M.matrix.copy(N.matrixWorld),M.matrix.invert(),M.matrix.multiply(E.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(E.projectionMatrix),M.projectionMatrixInverse.copy(E.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=2*Au*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)}(G,C,Y)},this.getCamera=function(){return C},this.getFoveation=function(){if(d!==null||f!==null)return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let q=null,X=new g0;X.setAnimationLoop(function(G,Y){if(h=Y.getViewerPose(c||a),m=Y,h!==null){let ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let M=!1;ce.length!==C.cameras.length&&(C.cameras.length=0,M=!0);for(let E=0;E<ce.length;E++){let N=ce[E],B=null;if(f!==null)B=f.getViewport(N);else{let V=u.getViewSubImage(d,N);B=V.viewport,E===0&&(e.setRenderTargetTextures(x,V.colorTexture,d.ignoreDepthValues?void 0:V.depthStencilTexture),e.setRenderTarget(x))}let L=z[E];L===void 0&&(L=new Yt,L.layers.enable(E),L.viewport=new Tt,z[E]=L),L.matrix.fromArray(N.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(N.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(B.x,B.y,B.width,B.height),E===0&&(C.matrix.copy(L.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),M===!0&&C.cameras.push(L)}}for(let ce=0;ce<y.length;ce++){let M=v[ce],E=y[ce];M!==null&&E!==void 0&&E.update(M,Y,c||a)}q&&q(G,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),m=null}),this.setAnimationLoop=function(G){q=G},this.dispose=function(){}}};function Ex(n,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Zt&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Zt&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap){r.lightMap.value=s.lightMap;let o=n._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,r.lightMapTransform)}s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,f0(n)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(r,s):s.isMeshToonMaterial?(i(r,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(r,s)):s.isMeshPhongMaterial?(i(r,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(r,s)):s.isMeshStandardMaterial?(i(r,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(r,s),s.isMeshPhysicalMaterial&&function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Zt&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far}(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(r,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(r,s)):s.isPointsMaterial?function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function bx(n,e,t,i){let r={},s={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(u,d,f,m){let g=u.value,p=d+"_"+f;if(m[p]===void 0)return m[p]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let x=m[p];if(typeof g=="number"||typeof g=="boolean"){if(x!==g)return m[p]=g,!0}else if(x.equals(g)===!1)return x.copy(g),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let f=a.indexOf(d.__bindingPointIndex);a.splice(f,1),n.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let f=d.program;i.uniformBlockBinding(u,f)},update:function(u,d){let f=r[u.id];f===void 0&&(function(p){let x=p.uniforms,y=0,v=16;for(let R=0,S=x.length;R<S;R++){let T=Array.isArray(x[R])?x[R]:[x[R]];for(let z=0,C=T.length;z<C;z++){let I=T[z],H=Array.isArray(I.value)?I.value:[I.value];for(let _=0,P=H.length;_<P;_++){let U=c(H[_]),O=y%v;O!==0&&v-O<U.boundary&&(y+=v-O),I.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=U.storage}}}let b=y%v;b>0&&(y+=v-b),p.__size=y,p.__cache={}}(u),f=function(p){let x=function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();p.__bindingPointIndex=x;let y=n.createBuffer(),v=p.__size,b=p.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,v,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}(u),r[u.id]=f,u.addEventListener("dispose",h));let m=d.program;i.updateUBOMapping(u,m);let g=e.render.frame;s[u.id]!==g&&(function(p){let x=r[p.id],y=p.uniforms,v=p.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let b=0,R=y.length;b<R;b++){let S=Array.isArray(y[b])?y[b]:[y[b]];for(let T=0,z=S.length;T<z;T++){let C=S[T];if(l(C,b,T,v)===!0){let I=C.__offset,H=Array.isArray(C.value)?C.value:[C.value],_=0;for(let P=0;P<H.length;P++){let U=H[P],O=c(U);typeof U=="number"||typeof U=="boolean"?(C.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,I+_,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=0,C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=0,C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=0):(U.toArray(C.__data,_),_+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}(u),s[u.id]=g)},dispose:function(){for(let u in r)n.deleteBuffer(r[u]);a=[],r={},s={}}}}var so=class{constructor(e={}){let{canvas:t=Py(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e,d;this.isWebGLRenderer=!0,d=i!==null?i.getContextAttributes().alpha:a;let f=new Uint32Array(4),m=new Int32Array(4),g=null,p=null,x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=ur,this.toneMappingExposure=1;let v=this,b=!1,R=0,S=0,T=null,z=-1,C=null,I=new Tt,H=new Tt,_=null,P=new Me(0),U=0,O=t.width,Z=t.height,j=1,q=null,X=null,G=new Tt(0,0,O,Z),Y=new Tt(0,0,O,Z),ce=!1,M=new ca,E=!1,N=!1,B=null,L=new Pe,V=new he,D=new A,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $(){return T===null?j:1}let J,ne,w,se,K,ee,oe,pe,ye,ve,Ie,xe,be,ze,Ft,Se,Je,$e,Co,ps,Lo,bn,un,ms,ie=i;function Po(F,te){for(let re=0;re<F.length;re++){let le=F[re],ae=t.getContext(le,te);if(ae!==null)return ae}return null}try{let F={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xu}`),t.addEventListener("webglcontextlost",Ep,!1),t.addEventListener("webglcontextrestored",bp,!1),t.addEventListener("webglcontextcreationerror",Mp,!1),ie===null){let te=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&te.shift(),ie=Po(te,F),ie===null)throw Po(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&ie instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ie.getShaderPrecisionFormat===void 0&&(ie.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}function xa(){J=new iv(ie),ne=new Qy(ie,J,e),J.init(ne),bn=new xx(ie,J,ne),w=new yx(ie,J,ne),se=new av(ie),K=new lx,ee=new vx(ie,J,w,K,ne,bn,se),oe=new tv(v),pe=new nv(v),ye=new Yy(ie,ne),un=new Jy(ie,J,ye,ne),ve=new rv(ie,ye,se,un),Ie=new hv(ie,ve,ye,se),Co=new cv(ie,ne,ee),Se=new ev(K),xe=new ox(v,oe,pe,J,ne,un,Se),be=new Ex(v,K),ze=new hx,Ft=new fx(J,ne),$e=new Zy(v,oe,pe,w,Ie,d,l),Je=new gx(v,Ie,ne),ms=new bx(ie,se,ne,w),ps=new Ky(ie,J,se,ne),Lo=new sv(ie,J,se,ne),se.programs=xe.programs,v.capabilities=ne,v.extensions=J,v.properties=K,v.renderLists=ze,v.shadowMap=Je,v.state=w,v.info=se}xa();let Wt=new Gu(v,ie);function Ep(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function bp(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let F=se.autoReset,te=Je.enabled,re=Je.autoUpdate,le=Je.needsUpdate,ae=Je.type;xa(),se.autoReset=F,Je.enabled=te,Je.autoUpdate=re,Je.needsUpdate=le,Je.type=ae}function Mp(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Sp(F){let te=F.target;te.removeEventListener("dispose",Sp),function(re){(function(le){let ae=K.get(le).programs;ae!==void 0&&(ae.forEach(function(fe){xe.releaseProgram(fe)}),le.isShaderMaterial&&xe.releaseShaderCache(le))})(re),K.remove(re)}(te)}function wp(F,te,re){F.transparent===!0&&F.side===2&&F.forceSinglePass===!1?(F.side=Zt,F.needsUpdate=!0,Fo(F,te,re),F.side=pr,F.needsUpdate=!0,Fo(F,te,re),F.side=2):Fo(F,te,re)}this.xr=Wt,this.getContext=function(){return ie},this.getContextAttributes=function(){return ie.getContextAttributes()},this.forceContextLoss=function(){let F=J.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=J.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(F){F!==void 0&&(j=F,this.setSize(O,Z,!1))},this.getSize=function(F){return F.set(O,Z)},this.setSize=function(F,te,re=!0){Wt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(O=F,Z=te,t.width=Math.floor(F*j),t.height=Math.floor(te*j),re===!0&&(t.style.width=F+"px",t.style.height=te+"px"),this.setViewport(0,0,F,te))},this.getDrawingBufferSize=function(F){return F.set(O*j,Z*j).floor()},this.setDrawingBufferSize=function(F,te,re){O=F,Z=te,j=re,t.width=Math.floor(F*re),t.height=Math.floor(te*re),this.setViewport(0,0,F,te)},this.getCurrentViewport=function(F){return F.copy(I)},this.getViewport=function(F){return F.copy(G)},this.setViewport=function(F,te,re,le){F.isVector4?G.set(F.x,F.y,F.z,F.w):G.set(F,te,re,le),w.viewport(I.copy(G).multiplyScalar(j).floor())},this.getScissor=function(F){return F.copy(Y)},this.setScissor=function(F,te,re,le){F.isVector4?Y.set(F.x,F.y,F.z,F.w):Y.set(F,te,re,le),w.scissor(H.copy(Y).multiplyScalar(j).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(F){w.setScissorTest(ce=F)},this.setOpaqueSort=function(F){q=F},this.setTransparentSort=function(F){X=F},this.getClearColor=function(F){return F.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(F=!0,te=!0,re=!0){let le=0;if(F){let ae=!1;if(T!==null){let fe=T.texture.format;ae=fe===h0||fe===c0||fe===l0}if(ae){let fe=T.texture.type,Re=fe===$r||fe===lr||fe===_d||fe===qr||fe===a0||fe===o0,Le=$e.getClearColor(),He=$e.getClearAlpha(),Ve=Le.r,qe=Le.g,je=Le.b;Re?(f[0]=Ve,f[1]=qe,f[2]=je,f[3]=He,ie.clearBufferuiv(ie.COLOR,0,f)):(m[0]=Ve,m[1]=qe,m[2]=je,m[3]=He,ie.clearBufferiv(ie.COLOR,0,m))}else le|=ie.COLOR_BUFFER_BIT}te&&(le|=ie.DEPTH_BUFFER_BIT),re&&(le|=ie.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ep,!1),t.removeEventListener("webglcontextrestored",bp,!1),t.removeEventListener("webglcontextcreationerror",Mp,!1),ze.dispose(),Ft.dispose(),K.dispose(),oe.dispose(),pe.dispose(),Ie.dispose(),un.dispose(),ms.dispose(),xe.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Tp),Wt.removeEventListener("sessionend",Ap),B&&(B.dispose(),B=null),Er.stop()},this.renderBufferDirect=function(F,te,re,le,ae,fe){te===null&&(te=k);let Re=ae.isMesh&&ae.matrixWorld.determinant()<0,Le=function(Ct,Mn,sn,Xe,Ke){Mn.isScene!==!0&&(Mn=k),ee.resetTextureUnits();let _a=Mn.fog,th=Xe.isMeshStandardMaterial?Mn.environment:null,Ug=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Oi,Do=(Xe.isMeshStandardMaterial?pe:oe).get(Xe.envMap||th),Ng=Xe.vertexColors===!0&&!!sn.attributes.color&&sn.attributes.color.itemSize===4,Bg=!!sn.attributes.tangent&&(!!Xe.normalMap||Xe.anisotropy>0),Og=!!sn.morphAttributes.position,zg=!!sn.morphAttributes.normal,kg=!!sn.morphAttributes.color,Fp=ur;Xe.toneMapped&&(T!==null&&T.isXRRenderTarget!==!0||(Fp=v.toneMapping));let Dp=sn.morphAttributes.position||sn.morphAttributes.normal||sn.morphAttributes.color,Hg=Dp!==void 0?Dp.length:0,et=K.get(Xe),Gg=p.state.lights;if(E===!0&&(N===!0||Ct!==C)){let Sn=Ct===C&&Xe.id===z;Se.setState(Xe,Ct,Sn)}let On=!1;Xe.version===et.__version?et.needsLights&&et.lightsStateVersion!==Gg.state.version||et.outputColorSpace!==Ug||Ke.isBatchedMesh&&et.batching===!1?On=!0:Ke.isBatchedMesh||et.batching!==!0?Ke.isInstancedMesh&&et.instancing===!1?On=!0:Ke.isInstancedMesh||et.instancing!==!0?Ke.isSkinnedMesh&&et.skinning===!1?On=!0:Ke.isSkinnedMesh||et.skinning!==!0?Ke.isInstancedMesh&&et.instancingColor===!0&&Ke.instanceColor===null||Ke.isInstancedMesh&&et.instancingColor===!1&&Ke.instanceColor!==null||et.envMap!==Do||Xe.fog===!0&&et.fog!==_a?On=!0:et.numClippingPlanes===void 0||et.numClippingPlanes===Se.numPlanes&&et.numIntersection===Se.numIntersection?(et.vertexAlphas!==Ng||et.vertexTangents!==Bg||et.morphTargets!==Og||et.morphNormals!==zg||et.morphColors!==kg||et.toneMapping!==Fp||ne.isWebGL2===!0&&et.morphTargetsCount!==Hg)&&(On=!0):On=!0:On=!0:On=!0:On=!0:(On=!0,et.__version=Xe.version);let Mr=et.currentProgram;On===!0&&(Mr=Fo(Xe,Mn,Ke));let Up=!1,Ea=!1,nh=!1,$t=Mr.getUniforms(),Sr=et.uniforms;if(w.useProgram(Mr.program)&&(Up=!0,Ea=!0,nh=!0),Xe.id!==z&&(z=Xe.id,Ea=!0),Up||C!==Ct){$t.setValue(ie,"projectionMatrix",Ct.projectionMatrix),$t.setValue(ie,"viewMatrix",Ct.matrixWorldInverse);let Sn=$t.map.cameraPosition;Sn!==void 0&&Sn.setValue(ie,D.setFromMatrixPosition(Ct.matrixWorld)),ne.logarithmicDepthBuffer&&$t.setValue(ie,"logDepthBufFC",2/(Math.log(Ct.far+1)/Math.LN2)),(Xe.isMeshPhongMaterial||Xe.isMeshToonMaterial||Xe.isMeshLambertMaterial||Xe.isMeshBasicMaterial||Xe.isMeshStandardMaterial||Xe.isShaderMaterial)&&$t.setValue(ie,"isOrthographic",Ct.isOrthographicCamera===!0),C!==Ct&&(C=Ct,Ea=!0,nh=!0)}if(Ke.isSkinnedMesh){$t.setOptional(ie,Ke,"bindMatrix"),$t.setOptional(ie,Ke,"bindMatrixInverse");let Sn=Ke.skeleton;Sn&&(ne.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),$t.setValue(ie,"boneTexture",Sn.boneTexture,ee)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Ke.isBatchedMesh&&($t.setOptional(ie,Ke,"batchingTexture"),$t.setValue(ie,"batchingTexture",Ke._matricesTexture,ee));let ih=sn.morphAttributes;(ih.position!==void 0||ih.normal!==void 0||ih.color!==void 0&&ne.isWebGL2===!0)&&Co.update(Ke,sn,Mr),(Ea||et.receiveShadow!==Ke.receiveShadow)&&(et.receiveShadow=Ke.receiveShadow,$t.setValue(ie,"receiveShadow",Ke.receiveShadow)),Xe.isMeshGouraudMaterial&&Xe.envMap!==null&&(Sr.envMap.value=Do,Sr.flipEnvMap.value=Do.isCubeTexture&&Do.isRenderTargetTexture===!1?-1:1),Ea&&($t.setValue(ie,"toneMappingExposure",v.toneMappingExposure),et.needsLights&&(zn=nh,(ri=Sr).ambientLightColor.needsUpdate=zn,ri.lightProbe.needsUpdate=zn,ri.directionalLights.needsUpdate=zn,ri.directionalLightShadows.needsUpdate=zn,ri.pointLights.needsUpdate=zn,ri.pointLightShadows.needsUpdate=zn,ri.spotLights.needsUpdate=zn,ri.spotLightShadows.needsUpdate=zn,ri.rectAreaLights.needsUpdate=zn,ri.hemisphereLights.needsUpdate=zn),_a&&Xe.fog===!0&&be.refreshFogUniforms(Sr,_a),be.refreshMaterialUniforms(Sr,Xe,j,Z,B),na.upload(ie,Pp(et),Sr,ee));var ri,zn;if(Xe.isShaderMaterial&&Xe.uniformsNeedUpdate===!0&&(na.upload(ie,Pp(et),Sr,ee),Xe.uniformsNeedUpdate=!1),Xe.isSpriteMaterial&&$t.setValue(ie,"center",Ke.center),$t.setValue(ie,"modelViewMatrix",Ke.modelViewMatrix),$t.setValue(ie,"normalMatrix",Ke.normalMatrix),$t.setValue(ie,"modelMatrix",Ke.matrixWorld),Xe.isShaderMaterial||Xe.isRawShaderMaterial){let Sn=Xe.uniformsGroups;for(let rh=0,Vg=Sn.length;rh<Vg;rh++)if(ne.isWebGL2){let Np=Sn[rh];ms.update(Np,Mr),ms.bind(Np,Mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mr}(F,te,re,le,ae);w.setMaterial(le,Re);let He=re.index,Ve=1;if(le.wireframe===!0){if(He=ve.getWireframeAttribute(re),He===void 0)return;Ve=2}let qe=re.drawRange,je=re.attributes.position,ft=qe.start*Ve,Bn=(qe.start+qe.count)*Ve;fe!==null&&(ft=Math.max(ft,fe.start*Ve),Bn=Math.min(Bn,(fe.start+fe.count)*Ve)),He!==null?(ft=Math.max(ft,0),Bn=Math.min(Bn,He.count)):je!=null&&(ft=Math.max(ft,0),Bn=Math.min(Bn,je.count));let bi=Bn-ft;if(bi<0||bi===1/0)return;let br;un.setup(ae,le,Le,re,He);let gt=ps;if(He!==null&&(br=ye.get(He),gt=Lo,gt.setIndex(br)),ae.isMesh)le.wireframe===!0?(w.setLineWidth(le.wireframeLinewidth*$()),gt.setMode(ie.LINES)):gt.setMode(ie.TRIANGLES);else if(ae.isLine){let Ct=le.linewidth;Ct===void 0&&(Ct=1),w.setLineWidth(Ct*$()),ae.isLineSegments?gt.setMode(ie.LINES):ae.isLineLoop?gt.setMode(ie.LINE_LOOP):gt.setMode(ie.LINE_STRIP)}else ae.isPoints?gt.setMode(ie.POINTS):ae.isSprite&&gt.setMode(ie.TRIANGLES);if(ae.isBatchedMesh)gt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else if(ae.isInstancedMesh)gt.renderInstances(ft,bi,ae.count);else if(re.isInstancedBufferGeometry){let Ct=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Mn=Math.min(re.instanceCount,Ct);gt.renderInstances(ft,bi,Mn)}else gt.render(ft,bi)},this.compile=function(F,te,re=null){re===null&&(re=F),p=Ft.get(re),p.init(),y.push(p),re.traverseVisible(function(ae){ae.isLight&&ae.layers.test(te.layers)&&(p.pushLight(ae),ae.castShadow&&p.pushShadow(ae))}),F!==re&&F.traverseVisible(function(ae){ae.isLight&&ae.layers.test(te.layers)&&(p.pushLight(ae),ae.castShadow&&p.pushShadow(ae))}),p.setupLights(v._useLegacyLights);let le=new Set;return F.traverse(function(ae){let fe=ae.material;if(fe)if(Array.isArray(fe))for(let Re=0;Re<fe.length;Re++){let Le=fe[Re];wp(Le,re,ae),le.add(Le)}else wp(fe,re,ae),le.add(fe)}),y.pop(),p=null,le},this.compileAsync=function(F,te,re=null){let le=this.compile(F,te,re);return new Promise(ae=>{function fe(){le.forEach(function(Re){K.get(Re).currentProgram.isReady()&&le.delete(Re)}),le.size!==0?setTimeout(fe,10):ae(F)}J.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let eh=null;function Tp(){Er.stop()}function Ap(){Er.start()}let Er=new g0;function Rp(F,te,re,le){if(F.visible===!1)return;if(F.layers.test(te.layers)){if(F.isGroup)re=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(te);else if(F.isLight)p.pushLight(F),F.castShadow&&p.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||M.intersectsSprite(F)){le&&D.setFromMatrixPosition(F.matrixWorld).applyMatrix4(L);let fe=Ie.update(F),Re=F.material;Re.visible&&g.push(F,fe,Re,re,D.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||M.intersectsObject(F))){let fe=Ie.update(F),Re=F.material;if(le&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),D.copy(F.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),D.copy(fe.boundingSphere.center)),D.applyMatrix4(F.matrixWorld).applyMatrix4(L)),Array.isArray(Re)){let Le=fe.groups;for(let He=0,Ve=Le.length;He<Ve;He++){let qe=Le[He],je=Re[qe.materialIndex];je&&je.visible&&g.push(F,fe,je,re,D.z,qe)}}else Re.visible&&g.push(F,fe,Re,re,D.z,null)}}let ae=F.children;for(let fe=0,Re=ae.length;fe<Re;fe++)Rp(ae[fe],te,re,le)}function Cp(F,te,re,le){let ae=F.opaque,fe=F.transmissive,Re=F.transparent;p.setupLightsView(re),E===!0&&Se.setGlobalState(v.clippingPlanes,re),fe.length>0&&function(Le,He,Ve,qe){if((Ve.isScene===!0?Ve.overrideMaterial:null)!==null)return;let ft=ne.isWebGL2;B===null&&(B=new Xn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?no:$r,minFilter:Nl,samples:ft?4:0})),v.getDrawingBufferSize(V),ft?B.setSize(V.x,V.y):B.setSize(Ru(V.x),Ru(V.y));let Bn=v.getRenderTarget();v.setRenderTarget(B),v.getClearColor(P),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();let bi=v.toneMapping;v.toneMapping=ur,Io(Le,Ve,qe),ee.updateMultisampleRenderTarget(B),ee.updateRenderTargetMipmap(B);let br=!1;for(let gt=0,Ct=He.length;gt<Ct;gt++){let Mn=He[gt],sn=Mn.object,Xe=Mn.geometry,Ke=Mn.material,_a=Mn.group;if(Ke.side===2&&sn.layers.test(qe.layers)){let th=Ke.side;Ke.side=Zt,Ke.needsUpdate=!0,Lp(sn,Ve,qe,Xe,Ke,_a),Ke.side=th,Ke.needsUpdate=!0,br=!0}}br===!0&&(ee.updateMultisampleRenderTarget(B),ee.updateRenderTargetMipmap(B)),v.setRenderTarget(Bn),v.setClearColor(P,U),v.toneMapping=bi}(ae,fe,te,re),le&&w.viewport(I.copy(le)),ae.length>0&&Io(ae,te,re),fe.length>0&&Io(fe,te,re),Re.length>0&&Io(Re,te,re),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Io(F,te,re){let le=te.isScene===!0?te.overrideMaterial:null;for(let ae=0,fe=F.length;ae<fe;ae++){let Re=F[ae],Le=Re.object,He=Re.geometry,Ve=le===null?Re.material:le,qe=Re.group;Le.layers.test(re.layers)&&Lp(Le,te,re,He,Ve,qe)}}function Lp(F,te,re,le,ae,fe){F.onBeforeRender(v,te,re,le,ae,fe),F.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ae.onBeforeRender(v,te,re,le,F,fe),ae.transparent===!0&&ae.side===2&&ae.forceSinglePass===!1?(ae.side=Zt,ae.needsUpdate=!0,v.renderBufferDirect(re,te,le,ae,F,fe),ae.side=pr,ae.needsUpdate=!0,v.renderBufferDirect(re,te,le,ae,F,fe),ae.side=2):v.renderBufferDirect(re,te,le,ae,F,fe),F.onAfterRender(v,te,re,le,ae,fe)}function Fo(F,te,re){te.isScene!==!0&&(te=k);let le=K.get(F),ae=p.state.lights,fe=p.state.shadowsArray,Re=ae.state.version,Le=xe.getParameters(F,ae.state,fe,te,re),He=xe.getProgramCacheKey(Le),Ve=le.programs;le.environment=F.isMeshStandardMaterial?te.environment:null,le.fog=te.fog,le.envMap=(F.isMeshStandardMaterial?pe:oe).get(F.envMap||le.environment),Ve===void 0&&(F.addEventListener("dispose",Sp),Ve=new Map,le.programs=Ve);let qe=Ve.get(He);if(qe!==void 0){if(le.currentProgram===qe&&le.lightsStateVersion===Re)return Ip(F,Le),qe}else Le.uniforms=xe.getUniforms(F),F.onBuild(re,Le,v),F.onBeforeCompile(Le,v),qe=xe.acquireProgram(Le,He),Ve.set(He,qe),le.uniforms=Le.uniforms;let je=le.uniforms;return(F.isShaderMaterial||F.isRawShaderMaterial)&&F.clipping!==!0||(je.clippingPlanes=Se.uniform),Ip(F,Le),le.needsLights=function(ft){return ft.isMeshLambertMaterial||ft.isMeshToonMaterial||ft.isMeshPhongMaterial||ft.isMeshStandardMaterial||ft.isShadowMaterial||ft.isShaderMaterial&&ft.lights===!0}(F),le.lightsStateVersion=Re,le.needsLights&&(je.ambientLightColor.value=ae.state.ambient,je.lightProbe.value=ae.state.probe,je.directionalLights.value=ae.state.directional,je.directionalLightShadows.value=ae.state.directionalShadow,je.spotLights.value=ae.state.spot,je.spotLightShadows.value=ae.state.spotShadow,je.rectAreaLights.value=ae.state.rectArea,je.ltc_1.value=ae.state.rectAreaLTC1,je.ltc_2.value=ae.state.rectAreaLTC2,je.pointLights.value=ae.state.point,je.pointLightShadows.value=ae.state.pointShadow,je.hemisphereLights.value=ae.state.hemi,je.directionalShadowMap.value=ae.state.directionalShadowMap,je.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,je.spotShadowMap.value=ae.state.spotShadowMap,je.spotLightMatrix.value=ae.state.spotLightMatrix,je.spotLightMap.value=ae.state.spotLightMap,je.pointShadowMap.value=ae.state.pointShadowMap,je.pointShadowMatrix.value=ae.state.pointShadowMatrix),le.currentProgram=qe,le.uniformsList=null,qe}function Pp(F){if(F.uniformsList===null){let te=F.currentProgram.getUniforms();F.uniformsList=na.seqWithValue(te.seq,F.uniforms)}return F.uniformsList}function Ip(F,te){let re=K.get(F);re.outputColorSpace=te.outputColorSpace,re.batching=te.batching,re.instancing=te.instancing,re.instancingColor=te.instancingColor,re.skinning=te.skinning,re.morphTargets=te.morphTargets,re.morphNormals=te.morphNormals,re.morphColors=te.morphColors,re.morphTargetsCount=te.morphTargetsCount,re.numClippingPlanes=te.numClippingPlanes,re.numIntersection=te.numClipIntersection,re.vertexAlphas=te.vertexAlphas,re.vertexTangents=te.vertexTangents,re.toneMapping=te.toneMapping}Er.setAnimationLoop(function(F){eh&&eh(F)}),typeof self!="undefined"&&Er.setContext(self),this.setAnimationLoop=function(F){eh=F,Wt.setAnimationLoop(F),F===null?Er.stop():Er.start()},Wt.addEventListener("sessionstart",Tp),Wt.addEventListener("sessionend",Ap),this.render=function(F,te){if(te!==void 0&&te.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(b===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(te),te=Wt.getCamera()),F.isScene===!0&&F.onBeforeRender(v,F,te,T),p=Ft.get(F,y.length),p.init(),y.push(p),L.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),M.setFromProjectionMatrix(L),N=this.localClippingEnabled,E=Se.init(this.clippingPlanes,N),g=ze.get(F,x.length),g.init(),x.push(g),Rp(F,te,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(q,X),this.info.render.frame++,E===!0&&Se.beginShadows();let re=p.state.shadowsArray;if(Je.render(re,F,te),E===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(g,F),p.setupLights(v._useLegacyLights),te.isArrayCamera){let le=te.cameras;for(let ae=0,fe=le.length;ae<fe;ae++){let Re=le[ae];Cp(g,F,Re,Re.viewport)}}else Cp(g,F,te);T!==null&&(ee.updateMultisampleRenderTarget(T),ee.updateRenderTargetMipmap(T)),F.isScene===!0&&F.onAfterRender(v,F,te),un.resetDefaultState(),z=-1,C=null,y.pop(),p=y.length>0?y[y.length-1]:null,x.pop(),g=x.length>0?x[x.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(F,te,re){K.get(F.texture).__webglTexture=te,K.get(F.depthTexture).__webglTexture=re;let le=K.get(F);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=re===void 0,le.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,te){let re=K.get(F);re.__webglFramebuffer=te,re.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(F,te=0,re=0){T=F,R=te,S=re;let le=!0,ae=null,fe=!1,Re=!1;if(F){let Le=K.get(F);Le.__useDefaultFramebuffer!==void 0?(w.bindFramebuffer(ie.FRAMEBUFFER,null),le=!1):Le.__webglFramebuffer===void 0?ee.setupRenderTarget(F):Le.__hasExternalTextures&&ee.rebindTextures(F,K.get(F.texture).__webglTexture,K.get(F.depthTexture).__webglTexture);let He=F.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Re=!0);let Ve=K.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(ae=Array.isArray(Ve[te])?Ve[te][re]:Ve[te],fe=!0):ae=ne.isWebGL2&&F.samples>0&&ee.useMultisampledRTT(F)===!1?K.get(F).__webglMultisampledFramebuffer:Array.isArray(Ve)?Ve[re]:Ve,I.copy(F.viewport),H.copy(F.scissor),_=F.scissorTest}else I.copy(G).multiplyScalar(j).floor(),H.copy(Y).multiplyScalar(j).floor(),_=ce;if(w.bindFramebuffer(ie.FRAMEBUFFER,ae)&&ne.drawBuffers&&le&&w.drawBuffers(F,ae),w.viewport(I),w.scissor(H),w.setScissorTest(_),fe){let Le=K.get(F.texture);ie.framebufferTexture2D(ie.FRAMEBUFFER,ie.COLOR_ATTACHMENT0,ie.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le.__webglTexture,re)}else if(Re){let Le=K.get(F.texture),He=te||0;ie.framebufferTextureLayer(ie.FRAMEBUFFER,ie.COLOR_ATTACHMENT0,Le.__webglTexture,re||0,He)}z=-1},this.readRenderTargetPixels=function(F,te,re,le,ae,fe,Re){if(!F||!F.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=K.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){w.bindFramebuffer(ie.FRAMEBUFFER,Le);try{let He=F.texture,Ve=He.format,qe=He.type;if(Ve!==Cn&&bn.convert(Ve)!==ie.getParameter(ie.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let je=qe===no&&(J.has("EXT_color_buffer_half_float")||ne.isWebGL2&&J.has("EXT_color_buffer_float"));if(!(qe===$r||bn.convert(qe)===ie.getParameter(ie.IMPLEMENTATION_COLOR_READ_TYPE)||qe===cr&&(ne.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float"))||je))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");te>=0&&te<=F.width-le&&re>=0&&re<=F.height-ae&&ie.readPixels(te,re,le,ae,bn.convert(Ve),bn.convert(qe),fe)}finally{let He=T!==null?K.get(T).__webglFramebuffer:null;w.bindFramebuffer(ie.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(F,te,re=0){let le=Math.pow(2,-re),ae=Math.floor(te.image.width*le),fe=Math.floor(te.image.height*le);ee.setTexture2D(te,0),ie.copyTexSubImage2D(ie.TEXTURE_2D,re,0,0,F.x,F.y,ae,fe),w.unbindTexture()},this.copyTextureToTexture=function(F,te,re,le=0){let ae=te.image.width,fe=te.image.height,Re=bn.convert(re.format),Le=bn.convert(re.type);ee.setTexture2D(re,0),ie.pixelStorei(ie.UNPACK_FLIP_Y_WEBGL,re.flipY),ie.pixelStorei(ie.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),ie.pixelStorei(ie.UNPACK_ALIGNMENT,re.unpackAlignment),te.isDataTexture?ie.texSubImage2D(ie.TEXTURE_2D,le,F.x,F.y,ae,fe,Re,Le,te.image.data):te.isCompressedTexture?ie.compressedTexSubImage2D(ie.TEXTURE_2D,le,F.x,F.y,te.mipmaps[0].width,te.mipmaps[0].height,Re,te.mipmaps[0].data):ie.texSubImage2D(ie.TEXTURE_2D,le,F.x,F.y,Re,Le,te.image),le===0&&re.generateMipmaps&&ie.generateMipmap(ie.TEXTURE_2D),w.unbindTexture()},this.copyTextureToTexture3D=function(F,te,re,le,ae=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let fe=F.max.x-F.min.x+1,Re=F.max.y-F.min.y+1,Le=F.max.z-F.min.z+1,He=bn.convert(le.format),Ve=bn.convert(le.type),qe;if(le.isData3DTexture)ee.setTexture3D(le,0),qe=ie.TEXTURE_3D;else{if(!le.isDataArrayTexture&&!le.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");ee.setTexture2DArray(le,0),qe=ie.TEXTURE_2D_ARRAY}ie.pixelStorei(ie.UNPACK_FLIP_Y_WEBGL,le.flipY),ie.pixelStorei(ie.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),ie.pixelStorei(ie.UNPACK_ALIGNMENT,le.unpackAlignment);let je=ie.getParameter(ie.UNPACK_ROW_LENGTH),ft=ie.getParameter(ie.UNPACK_IMAGE_HEIGHT),Bn=ie.getParameter(ie.UNPACK_SKIP_PIXELS),bi=ie.getParameter(ie.UNPACK_SKIP_ROWS),br=ie.getParameter(ie.UNPACK_SKIP_IMAGES),gt=re.isCompressedTexture?re.mipmaps[ae]:re.image;ie.pixelStorei(ie.UNPACK_ROW_LENGTH,gt.width),ie.pixelStorei(ie.UNPACK_IMAGE_HEIGHT,gt.height),ie.pixelStorei(ie.UNPACK_SKIP_PIXELS,F.min.x),ie.pixelStorei(ie.UNPACK_SKIP_ROWS,F.min.y),ie.pixelStorei(ie.UNPACK_SKIP_IMAGES,F.min.z),re.isDataTexture||re.isData3DTexture?ie.texSubImage3D(qe,ae,te.x,te.y,te.z,fe,Re,Le,He,Ve,gt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ie.compressedTexSubImage3D(qe,ae,te.x,te.y,te.z,fe,Re,Le,He,gt.data)):ie.texSubImage3D(qe,ae,te.x,te.y,te.z,fe,Re,Le,He,Ve,gt),ie.pixelStorei(ie.UNPACK_ROW_LENGTH,je),ie.pixelStorei(ie.UNPACK_IMAGE_HEIGHT,ft),ie.pixelStorei(ie.UNPACK_SKIP_PIXELS,Bn),ie.pixelStorei(ie.UNPACK_SKIP_ROWS,bi),ie.pixelStorei(ie.UNPACK_SKIP_IMAGES,br),ae===0&&le.generateMipmaps&&ie.generateMipmap(qe),w.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?ee.setTextureCube(F,0):F.isData3DTexture?ee.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?ee.setTexture2DArray(F,0):ee.setTexture2D(F,0),w.unbindTexture()},this.resetState=function(){R=0,S=0,T=null,w.reset(),un.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ed?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===vc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?Xr:d0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xr?Mt:Oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Vu=class extends so{};Vu.prototype.isWebGL1Renderer=!0;var Ql=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ao=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Wu=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},en=new A,ec=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ni(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vn=class extends ui{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ys,qa=new A,Zs=new A,Js=new A,Ks=new he,ja=new he,b0=new Pe,El=new A,Xa=new A,bl=new A,Of=new he,uu=new he,zf=new he,Pn=class extends Bt{constructor(e=new vn){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new it;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Wu(t,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new ec(i,3,0,!1)),Ys.setAttribute("uv",new ec(i,2,3,!1))}this.geometry=Ys,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),b0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Js.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let a=this.center;Ml(El.set(-.5,-.5,0),Js,a,Zs,r,s),Ml(Xa.set(.5,-.5,0),Js,a,Zs,r,s),Ml(bl.set(.5,.5,0),Js,a,Zs,r,s),Of.set(0,0),uu.set(1,0),zf.set(1,1);let o=e.ray.intersectTriangle(El,Xa,bl,!1,qa);if(o===null&&(Ml(Xa.set(-.5,.5,0),Js,a,Zs,r,s),uu.set(0,1),o=e.ray.intersectTriangle(El,bl,Xa,!1,qa),o===null))return;let l=e.ray.origin.distanceTo(qa);l<e.near||l>e.far||t.push({distance:l,point:qa.clone(),uv:hr.getInterpolation(qa,El,Xa,bl,Of,uu,zf,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ml(n,e,t,i,r,s){Ks.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ja.x=s*Ks.x-r*Ks.y,ja.y=r*Ks.x+s*Ks.y):ja.copy(Ks),n.copy(e),n.x+=ja.x,n.y+=ja.y,n.applyMatrix4(b0)}var P1=new A,I1=new A;var F1=new A,D1=new Tt,U1=new Tt,N1=new A,B1=new Pe,O1=new A,z1=new Zn,k1=new Pe,H1=new Yr;var tc=class extends yn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},G1=new Pe,V1=new Pe;var nc=class extends pt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new Pe,kf=new Pe,Sl=[],Hf=new Yn,Mx=new Pe,Ya=new ue,Za=new Zn,di=class extends ue{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nc(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Mx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qs),Hf.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(Hf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qs),Za.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Za)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ya.geometry=this.geometry,Ya.material=this.material,Ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Za.copy(this.boundingSphere),Za.applyMatrix4(i),e.ray.intersectsSphere(Za)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Qs),kf.multiplyMatrices(i,Qs),Ya.matrixWorld=kf,Ya.raycast(e,Sl);for(let a=0,o=Sl.length;a<o;a++){let l=Sl[a];l.instanceId=s,l.object=this,t.push(l)}Sl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nc(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var $u=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let s=i[this.index];r.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var W1=new Pe,$1=new Pe,q1=new Pe,j1=new Pe,X1=new ca,Y1=new Yn,Z1=new Zn,J1=new A,K1=new $u,Q1=new ue;var oo=class extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Gf=new A,Vf=new A,Wf=new Pe,du=new Yr,wl=new Zn,ic=class extends Bt{constructor(e=new it,t=new oo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Gf.fromBufferAttribute(t,r-1),Vf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Gf.distanceTo(Vf);e.setAttribute("lineDistance",new De(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),wl.radius+=s,e.ray.intersectsSphere(wl)===!1)return;Wf.copy(r).invert(),du.copy(e.ray).applyMatrix4(Wf);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new A,h=new A,u=new A,d=new A,f=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null)for(let p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count)-1;p<x;p+=f){let y=m.getX(p),v=m.getX(p+1);if(c.fromBufferAttribute(g,y),h.fromBufferAttribute(g,v),du.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}else for(let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count)-1;p<x;p+=f){if(c.fromBufferAttribute(g,p),h.fromBufferAttribute(g,p+1),du.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},eE=new A,tE=new A;var fr=class extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$f=new Pe,qu=new Yr,Tl=new Zn,Al=new A,Zr=class extends Bt{constructor(e=new it,t=new fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Tl.copy(i.boundingSphere),Tl.applyMatrix4(r),Tl.radius+=s,e.ray.intersectsSphere(Tl)===!1)return;$f.copy(r).invert(),qu.copy(e.ray).applyMatrix4($f);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let f=c.getX(u);Al.fromBufferAttribute(h,f),qf(Al,f,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Al.fromBufferAttribute(h,u),qf(Al,u,l,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qf(n,e,t,i,r,s,a){let o=qu.distanceSqToPoint(n);if(o<t){let l=new A;qu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var rc=class extends yn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=i[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,i[r]===a)return r/(s-1);let h=i[r];return(r+(a-h)/(i[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new he:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new A,r=[],s=[],a=[],o=new A,l=new Pe;for(let f=0;f<=e;f++){let m=f/e;r[f]=this.getTangentAt(m,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(zt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(zt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],f*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},lo=class extends In{constructor(e=0,t=0,i=1,r=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new he,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ju=class extends lo{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Md(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,r(a,o,d,f)},calc:function(s){let a=s*s;return n+e*s+t*a+i*(a*s)}}}var Rl=new A,pu=new Md,mu=new Md,fu=new Md,Xu=class extends In{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new A){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=r[(c-1)%s]:(Rl.subVectors(r[0],r[1]).add(r[0]),o=Rl);let u=r[c%s],d=r[(c+1)%s];if(this.closed||c+2<s?l=r[(c+2)%s]:(Rl.subVectors(r[s-1],r[s-2]).add(r[s-1]),l=Rl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(l),f);g<1e-4&&(g=1),m<1e-4&&(m=g),p<1e-4&&(p=g),pu.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,g,p),mu.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,g,p),fu.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,g,p)}else this.curveType==="catmullrom"&&(pu.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),mu.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),fu.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(pu.calc(h),mu.calc(h),fu.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new A().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jf(n,e,t,i,r){let s=.5*(i-e),a=.5*(r-t),o=n*n;return(2*t-2*i+s+a)*(n*o)+(-3*t+3*i-2*s-a)*o+s*n+t}function Qa(n,e,t,i){return function(r,s){let a=1-r;return a*a*s}(n,e)+function(r,s){return 2*(1-r)*r*s}(n,t)+function(r,s){return r*r*s}(n,i)}function eo(n,e,t,i,r){return function(s,a){let o=1-s;return o*o*o*a}(n,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(n,t)+function(s,a){return 3*(1-s)*s*s*a}(n,i)+function(s,a){return s*s*s*a}(n,r)}var sc=class extends In{constructor(e=new he,t=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new he){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(eo(e,r.x,s.x,a.x,o.x),eo(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yu=class extends In{constructor(e=new A,t=new A,i=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new A){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(eo(e,r.x,s.x,a.x,o.x),eo(e,r.y,s.y,a.y,o.y),eo(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ac=class extends In{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zu=class extends In{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oc=class extends In{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Qa(e,r.x,s.x,a.x),Qa(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lc=class extends In{constructor(e=new A,t=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Qa(e,r.x,s.x,a.x),Qa(e,r.y,s.y,a.y),Qa(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cc=class extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(jf(o,l.x,c.x,h.x,u.x),jf(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new he().fromArray(r))}return this}},hc=Object.freeze({__proto__:null,ArcCurve:ju,CatmullRomCurve3:Xu,CubicBezierCurve:sc,CubicBezierCurve3:Yu,EllipseCurve:lo,LineCurve:ac,LineCurve3:Zu,QuadraticBezierCurve:oc,QuadraticBezierCurve3:lc,SplineCurve:cc}),Ju=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new hc[r.type]().fromJSON(r))}return this}},co=class extends Ju{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ac(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new oc(this.currentPoint.clone(),new he(e,t),new he(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new sc(this.currentPoint.clone(),new he(e,t),new he(i,r),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new cc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new lo(e,t,i,r,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},uc=class n extends it{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,i=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=zt(r,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new A,d=new he,f=new A,m=new A,g=new A,p=0,x=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,x=e[y+1].y-e[y].y,f.x=1*x,f.y=-p,f.z=0*x,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:p=e[y+1].x-e[y].x,x=e[y+1].y-e[y].y,f.x=1*x,f.y=-p,f.z=0*x,m.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(m)}for(let y=0;y<=t;y++){let v=i+y*h*r,b=Math.sin(v),R=Math.cos(v);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*b,u.y=e[S].y,u.z=e[S].x*R,a.push(u.x,u.y,u.z),d.x=y/t,d.y=S/(e.length-1),o.push(d.x,d.y);let T=l[3*S+0]*b,z=l[3*S+1],C=l[3*S+0]*R;c.push(T,z,C)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let b=v+y*e.length,R=b,S=b+e.length,T=b+e.length+1,z=b+1;s.push(R,S,z),s.push(T,z,S)}this.setIndex(s),this.setAttribute("position",new De(a,3)),this.setAttribute("uv",new De(o,2)),this.setAttribute("normal",new De(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},gr=class n extends uc{constructor(e=1,t=1,i=4,r=8){let s=new co;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Fn=class n extends it{constructor(e=1,t=32,i=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new A,h=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(o,3)),this.setAttribute("uv",new De(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},we=class n extends it{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],f=[],m=0,g=[],p=i/2,x=0;function y(v){let b=m,R=new he,S=new A,T=0,z=v===!0?e:t,C=v===!0?1:-1;for(let H=1;H<=r;H++)u.push(0,p*C,0),d.push(0,C,0),f.push(.5,.5),m++;let I=m;for(let H=0;H<=r;H++){let _=H/r*l+o,P=Math.cos(_),U=Math.sin(_);S.x=z*U,S.y=p*C,S.z=z*P,u.push(S.x,S.y,S.z),d.push(0,C,0),R.x=.5*P+.5,R.y=.5*U*C+.5,f.push(R.x,R.y),m++}for(let H=0;H<r;H++){let _=b+H,P=I+H;v===!0?h.push(P,P+1,_):h.push(P+1,P,_),T+=3}c.addGroup(x,T,v===!0?1:2),x+=T}(function(){let v=new A,b=new A,R=0,S=(t-e)/i;for(let T=0;T<=s;T++){let z=[],C=T/s,I=C*(t-e)+e;for(let H=0;H<=r;H++){let _=H/r,P=_*l+o,U=Math.sin(P),O=Math.cos(P);b.x=I*U,b.y=-C*i+p,b.z=I*O,u.push(b.x,b.y,b.z),v.set(U,S,O).normalize(),d.push(v.x,v.y,v.z),f.push(_,1-C),z.push(m++)}g.push(z)}for(let T=0;T<r;T++)for(let z=0;z<s;z++){let C=g[z][T],I=g[z+1][T],H=g[z+1][T+1],_=g[z][T+1];h.push(C,I,_),h.push(I,H,_),R+=6}c.addGroup(x,R,0),x+=R})(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xn=class n extends we{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jr=class n extends it{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];function o(d,f,m,g){let p=g+1,x=[];for(let y=0;y<=p;y++){x[y]=[];let v=d.clone().lerp(m,y/p),b=f.clone().lerp(m,y/p),R=p-y;for(let S=0;S<=R;S++)x[y][S]=S===0&&y===p?v:v.clone().lerp(b,S/R)}for(let y=0;y<p;y++)for(let v=0;v<2*(p-y)-1;v++){let b=Math.floor(v/2);v%2==0?(l(x[y][b+1]),l(x[y+1][b]),l(x[y][b])):(l(x[y][b+1]),l(x[y+1][b+1]),l(x[y+1][b]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,f){let m=3*d;f.x=e[m+0],f.y=e[m+1],f.z=e[m+2]}function h(d,f,m,g){g<0&&d.x===1&&(a[f]=d.x-1),m.x===0&&m.z===0&&(a[f]=g/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let f=new A,m=new A,g=new A;for(let p=0;p<t.length;p+=3)c(t[p+0],f),c(t[p+1],m),c(t[p+2],g),o(f,m,g,d)})(r),function(d){let f=new A;for(let m=0;m<s.length;m+=3)f.x=s[m+0],f.y=s[m+1],f.z=s[m+2],f.normalize().multiplyScalar(d),s[m+0]=f.x,s[m+1]=f.y,s[m+2]=f.z}(i),function(){let d=new A;for(let m=0;m<s.length;m+=3){d.x=s[m+0],d.y=s[m+1],d.z=s[m+2];let g=u(d)/2/Math.PI+.5,p=(f=d,Math.atan2(-f.y,Math.sqrt(f.x*f.x+f.z*f.z))/Math.PI+.5);a.push(g,1-p)}var f;(function(){let m=new A,g=new A,p=new A,x=new A,y=new he,v=new he,b=new he;for(let R=0,S=0;R<s.length;R+=9,S+=6){m.set(s[R+0],s[R+1],s[R+2]),g.set(s[R+3],s[R+4],s[R+5]),p.set(s[R+6],s[R+7],s[R+8]),y.set(a[S+0],a[S+1]),v.set(a[S+2],a[S+3]),b.set(a[S+4],a[S+5]),x.copy(m).add(g).add(p).divideScalar(3);let T=u(x);h(y,S+0,m,T),h(v,S+2,g,T),h(b,S+4,p,T)}})(),function(){for(let m=0;m<a.length;m+=6){let g=a[m+0],p=a[m+2],x=a[m+4],y=Math.max(g,p,x),v=Math.min(g,p,x);y>.9&&v<.1&&(g<.2&&(a[m+0]+=1),p<.2&&(a[m+2]+=1),x<.2&&(a[m+4]+=1))}}()}(),this.setAttribute("position",new De(s,3)),this.setAttribute("normal",new De(s.slice(),3)),this.setAttribute("uv",new De(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Ku=class n extends Jr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Cl=new A,Ll=new A,gu=new A,Pl=new hr,Qu=class extends it{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Ul*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:g,b:p,c:x}=Pl;if(g.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),x.fromBufferAttribute(o,c[2]),Pl.getNormal(gu),u[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,u[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let y=0;y<3;y++){let v=(y+1)%3,b=u[y],R=u[v],S=Pl[h[y]],T=Pl[h[v]],z=`${b}_${R}`,C=`${R}_${b}`;C in d&&d[C]?(gu.dot(d[C].normal)<=s&&(f.push(S.x,S.y,S.z),f.push(T.x,T.y,T.z)),d[C]=null):z in d||(d[z]={index0:c[y],index1:c[v],normal:gu.clone()})}}for(let m in d)if(d[m]){let{index0:g,index1:p}=d[m];Cl.fromBufferAttribute(o,g),Ll.fromBufferAttribute(o,p),f.push(Cl.x,Cl.y,Cl.z),f.push(Ll.x,Ll.y,Ll.z)}this.setAttribute("position",new De(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},pi=class extends co{constructor(e){super(e),this.uuid=Bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new co().fromJSON(r))}return this}},Sx=function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Xf(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(i&&(s=function(m,g,p,x){let y=[],v,b,R,S,T;for(v=0,b=g.length;v<b;v++)R=g[v]*x,S=v<b-1?g[v+1]*x:m.length,T=Xf(m,R,S,x,!1),T===T.next&&(T.steiner=!0),y.push(Ix(T));for(y.sort(Cx),v=0;v<y.length;v++)p=Lx(y[v],p);return p}(n,e,s,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let m=t;m<r;m+=t)u=n[m],d=n[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return ho(s,a,t,o,l,f,0),a};function Xf(n,e,t,i,r){let s,a;if(r===function(o,l,c,h){let u=0;for(let d=l,f=c-h;d<c;d+=h)u+=(o[f]-o[d])*(o[d+1]+o[f+1]),f=d;return u}(n,e,t,i)>0)for(s=e;s<t;s+=i)a=Yf(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=Yf(s,n[s],n[s+1],a);return a&&_c(a,a.next)&&(po(a),a=a.next),a}function Kr(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!_c(i,i.next)&&xt(i.prev,i,i.next)!==0)i=i.next;else{if(po(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function ho(n,e,t,i,r,s,a){if(!n)return;!a&&s&&function(h,u,d,f){let m=h;do m.z===0&&(m.z=ed(m.x,m.y,u,d,f)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,function(g){let p,x,y,v,b,R,S,T,z=1;do{for(x=g,g=null,b=null,R=0;x;){for(R++,y=x,S=0,p=0;p<z&&(S++,y=y.nextZ,y);p++);for(T=z;S>0||T>0&&y;)S!==0&&(T===0||!y||x.z<=y.z)?(v=x,x=x.nextZ,S--):(v=y,y=y.nextZ,T--),b?b.nextZ=v:g=v,v.prevZ=b,b=v;x=y}b.nextZ=null,z*=2}while(R>1)}(m)}(n,i,r,s);let o,l,c=n;for(;n.prev!==n.next;)if(o=n.prev,l=n.next,s?Tx(n,i,r,s):wx(n))e.push(o.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),po(n),n=l.next,c=l.next;else if((n=l)===c){a?a===1?ho(n=Ax(Kr(n),e,t),e,t,i,r,s,2):a===2&&Rx(n,e,t,i,r,s):ho(Kr(n),e,t,i,r,s,1);break}}function wx(n){let e=n.prev,t=n,i=n.next;if(xt(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c,m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ea(r,o,s,l,a,c,m.x,m.y)&&xt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Tx(n,e,t,i){let r=n.prev,s=n,a=n.next;if(xt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,g=o>l?o>c?o:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,x=ed(f,m,e,t,i),y=ed(g,p,e,t,i),v=n.prevZ,b=n.nextZ;for(;v&&v.z>=x&&b&&b.z<=y;){if(v.x>=f&&v.x<=g&&v.y>=m&&v.y<=p&&v!==r&&v!==a&&ea(o,h,l,u,c,d,v.x,v.y)&&xt(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=f&&b.x<=g&&b.y>=m&&b.y<=p&&b!==r&&b!==a&&ea(o,h,l,u,c,d,b.x,b.y)&&xt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=x;){if(v.x>=f&&v.x<=g&&v.y>=m&&v.y<=p&&v!==r&&v!==a&&ea(o,h,l,u,c,d,v.x,v.y)&&xt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=g&&b.y>=m&&b.y<=p&&b!==r&&b!==a&&ea(o,h,l,u,c,d,b.x,b.y)&&xt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ax(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!_c(r,s)&&M0(r,i,i.next,s)&&uo(r,s)&&uo(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),po(i),po(i.next),i=n=s),i=i.next}while(i!==n);return Kr(i)}function Rx(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Fx(a,o)){let l=S0(a,o);return a=Kr(a,a.next),l=Kr(l,l.next),ho(a,e,t,i,r,s,0),void ho(l,e,t,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function Cx(n,e){return n.x-e.x}function Lx(n,e){let t=function(r,s){let a,o=s,l=-1/0,c=r.x,h=r.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let p=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(p<=c&&p>l&&(l=p,a=o.x<o.next.x?o:o.next,p===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,f=a.y,m,g=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&ea(h<f?c:l,h,d,f,h<f?l:c,h,o.x,o.y)&&(m=Math.abs(h-o.y)/(c-o.x),uo(o,r)&&(m<g||m===g&&(o.x>a.x||o.x===a.x&&Px(a,o)))&&(a=o,g=m)),o=o.next;while(o!==u);return a}(n,e);if(!t)return e;let i=S0(t,n);return Kr(i,i.next),Kr(t,t.next)}function Px(n,e){return xt(n.prev,n,e.prev)<0&&xt(e.next,n,n.next)<0}function ed(n,e,t,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Ix(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ea(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Fx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!function(t,i){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==i.i&&r.next.i!==i.i&&M0(r,r.next,t,i))return!0;r=r.next}while(r!==t);return!1}(n,e)&&(uo(n,e)&&uo(e,n)&&function(t,i){let r=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s}(n,e)&&(xt(n.prev,n,e.prev)||xt(n,e.prev,e))||_c(n,e)&&xt(n.prev,n,n.next)>0&&xt(e.prev,e,e.next)>0)}function xt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function _c(n,e){return n.x===e.x&&n.y===e.y}function M0(n,e,t,i){let r=Fl(xt(n,e,t)),s=Fl(xt(n,e,i)),a=Fl(xt(t,i,n)),o=Fl(xt(t,i,e));return r!==s&&a!==o||!(r!==0||!Il(n,t,e))||!(s!==0||!Il(n,i,e))||!(a!==0||!Il(t,n,i))||!(o!==0||!Il(t,e,i))}function Il(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Fl(n){return n>0?1:n<0?-1:0}function uo(n,e){return xt(n.prev,n,n.next)<0?xt(n,e,n.next)>=0&&xt(n,n.prev,e)>=0:xt(n,e,n.prev)<0||xt(n,n.next,e)<0}function S0(n,e){let t=new td(n.i,n.x,n.y),i=new td(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Yf(n,e,t,i){let r=new td(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function po(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function td(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var dr=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Zf(e),Jf(i,e);let a=e.length;t.forEach(Zf);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Jf(i,t[l]);let o=Sx(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Zf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Jf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var zi=class n extends it{constructor(e=new pi([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Dx,v,b,R,S,T,z=!1;x&&(v=x.getSpacedPoints(h),z=!0,d=!1,b=x.computeFrenetFrames(h,!1),R=new A,S=new A,T=new A),d||(p=0,f=0,m=0,g=0);let C=o.extractPoints(c),I=C.shape,H=C.holes;if(!dr.isClockWise(I)){I=I.reverse();for(let D=0,k=H.length;D<k;D++){let $=H[D];dr.isClockWise($)&&(H[D]=$.reverse())}}let _=dr.triangulateShape(I,H),P=I;for(let D=0,k=H.length;D<k;D++){let $=H[D];I=I.concat($)}function U(D,k,$){return k||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(k,$)}let O=I.length,Z=_.length;function j(D,k,$){let J,ne,w,se=D.x-k.x,K=D.y-k.y,ee=$.x-D.x,oe=$.y-D.y,pe=se*se+K*K,ye=se*oe-K*ee;if(Math.abs(ye)>Number.EPSILON){let ve=Math.sqrt(pe),Ie=Math.sqrt(ee*ee+oe*oe),xe=k.x-K/ve,be=k.y+se/ve,ze=(($.x-oe/Ie-xe)*oe-($.y+ee/Ie-be)*ee)/(se*oe-K*ee);J=xe+se*ze-D.x,ne=be+K*ze-D.y;let Ft=J*J+ne*ne;if(Ft<=2)return new he(J,ne);w=Math.sqrt(Ft/2)}else{let ve=!1;se>Number.EPSILON?ee>Number.EPSILON&&(ve=!0):se<-Number.EPSILON?ee<-Number.EPSILON&&(ve=!0):Math.sign(K)===Math.sign(oe)&&(ve=!0),ve?(J=-K,ne=se,w=Math.sqrt(pe)):(J=se,ne=K,w=Math.sqrt(pe/2))}return new he(J/w,ne/w)}let q=[];for(let D=0,k=P.length,$=k-1,J=D+1;D<k;D++,$++,J++)$===k&&($=0),J===k&&(J=0),q[D]=j(P[D],P[$],P[J]);let X=[],G,Y=q.concat();for(let D=0,k=H.length;D<k;D++){let $=H[D];G=[];for(let J=0,ne=$.length,w=ne-1,se=J+1;J<ne;J++,w++,se++)w===ne&&(w=0),se===ne&&(se=0),G[J]=j($[J],$[w],$[se]);X.push(G),Y=Y.concat(G)}for(let D=0;D<p;D++){let k=D/p,$=f*Math.cos(k*Math.PI/2),J=m*Math.sin(k*Math.PI/2)+g;for(let ne=0,w=P.length;ne<w;ne++){let se=U(P[ne],q[ne],J);E(se.x,se.y,-$)}for(let ne=0,w=H.length;ne<w;ne++){let se=H[ne];G=X[ne];for(let K=0,ee=se.length;K<ee;K++){let oe=U(se[K],G[K],J);E(oe.x,oe.y,-$)}}}let ce=m+g;for(let D=0;D<O;D++){let k=d?U(I[D],Y[D],ce):I[D];z?(S.copy(b.normals[0]).multiplyScalar(k.x),R.copy(b.binormals[0]).multiplyScalar(k.y),T.copy(v[0]).add(S).add(R),E(T.x,T.y,T.z)):E(k.x,k.y,0)}for(let D=1;D<=h;D++)for(let k=0;k<O;k++){let $=d?U(I[k],Y[k],ce):I[k];z?(S.copy(b.normals[D]).multiplyScalar($.x),R.copy(b.binormals[D]).multiplyScalar($.y),T.copy(v[D]).add(S).add(R),E(T.x,T.y,T.z)):E($.x,$.y,u/h*D)}for(let D=p-1;D>=0;D--){let k=D/p,$=f*Math.cos(k*Math.PI/2),J=m*Math.sin(k*Math.PI/2)+g;for(let ne=0,w=P.length;ne<w;ne++){let se=U(P[ne],q[ne],J);E(se.x,se.y,u+$)}for(let ne=0,w=H.length;ne<w;ne++){let se=H[ne];G=X[ne];for(let K=0,ee=se.length;K<ee;K++){let oe=U(se[K],G[K],J);z?E(oe.x,oe.y+v[h-1].y,v[h-1].x+$):E(oe.x,oe.y,u+$)}}}function M(D,k){let $=D.length;for(;--$>=0;){let J=$,ne=$-1;ne<0&&(ne=D.length-1);for(let w=0,se=h+2*p;w<se;w++){let K=O*w,ee=O*(w+1);B(k+J+K,k+ne+K,k+ne+ee,k+J+ee)}}}function E(D,k,$){l.push(D),l.push(k),l.push($)}function N(D,k,$){L(D),L(k),L($);let J=r.length/3,ne=y.generateTopUV(i,r,J-3,J-2,J-1);V(ne[0]),V(ne[1]),V(ne[2])}function B(D,k,$,J){L(D),L(k),L(J),L(k),L($),L(J);let ne=r.length/3,w=y.generateSideWallUV(i,r,ne-6,ne-3,ne-2,ne-1);V(w[0]),V(w[1]),V(w[3]),V(w[1]),V(w[2]),V(w[3])}function L(D){r.push(l[3*D+0]),r.push(l[3*D+1]),r.push(l[3*D+2])}function V(D){s.push(D.x),s.push(D.y)}(function(){let D=r.length/3;if(d){let k=0,$=O*k;for(let J=0;J<Z;J++){let ne=_[J];N(ne[2]+$,ne[1]+$,ne[0]+$)}k=h+2*p,$=O*k;for(let J=0;J<Z;J++){let ne=_[J];N(ne[0]+$,ne[1]+$,ne[2]+$)}}else{for(let k=0;k<Z;k++){let $=_[k];N($[2],$[1],$[0])}for(let k=0;k<Z;k++){let $=_[k];N($[0]+O*h,$[1]+O*h,$[2]+O*h)}}i.addGroup(D,r.length/3-D,0)})(),function(){let D=r.length/3,k=0;M(P,k),k+=P.length;for(let $=0,J=H.length;$<J;$++){let ne=H[$];M(ne,k),k+=ne.length}i.addGroup(D,r.length/3-D,1)}()}this.setAttribute("position",new De(r,3)),this.setAttribute("uv",new De(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},i),i.extrudePath!==void 0&&(r.options.extrudePath=i.extrudePath.toJSON()),r}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new hc[r.type]().fromJSON(r)),new n(i,e.options)}},Dx={generateTopUV:function(n,e,t,i,r){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new he(s,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*r],f=e[3*r+1],m=e[3*r+2],g=e[3*s],p=e[3*s+1],x=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-u),new he(d,1-m),new he(g,1-x)]:[new he(o,1-l),new he(h,1-u),new he(f,1-m),new he(p,1-x)]}},_t=class n extends Jr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},mo=class n extends Jr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Qr=class n extends it{constructor(e=.5,t=1,i=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),f=new A,m=new he;for(let g=0;g<=r;g++){for(let p=0;p<=i;p++){let x=s+p/i*a;f.x=u*Math.cos(x),f.y=u*Math.sin(x),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let g=0;g<r;g++){let p=g*(i+1);for(let x=0;x<i;x++){let y=x+p,v=y,b=y+i+1,R=y+i+2,S=y+1;o.push(v,b,S),o.push(b,R,S)}}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},nd=class n extends it{constructor(e=new pi([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=r.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;dr.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,x=m.length;p<x;p++){let y=m[p];dr.isClockWise(y)===!0&&(m[p]=y.reverse())}let g=dr.triangulateShape(f,m);for(let p=0,x=m.length;p<x;p++){let y=m[p];f=f.concat(y)}for(let p=0,x=f.length;p<x;p++){let y=f[p];r.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let p=0,x=g.length;p<x;p++){let y=g[p],v=y[0]+u,b=y[1]+u,R=y[2]+u;i.push(v,b,R),l+=3}}this.setIndex(i),this.setAttribute("position",new De(r,3)),this.setAttribute("normal",new De(s,3)),this.setAttribute("uv",new De(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}},Ue=class n extends it{constructor(e=1,t=32,i=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,d=new A,f=[],m=[],g=[],p=[];for(let x=0;x<=i;x++){let y=[],v=x/i,b=0;x===0&&a===0?b=.5/t:x===i&&l===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){let S=R/t;u.x=-e*Math.cos(r+S*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(r+S*s)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),p.push(S+b,1-v),y.push(c++)}h.push(y)}for(let x=0;x<i;x++)for(let y=0;y<t;y++){let v=h[x][y+1],b=h[x][y],R=h[x+1][y],S=h[x+1][y+1];(x!==0||a>0)&&f.push(v,b,S),(x!==i-1||l<Math.PI)&&f.push(b,R,S)}this.setIndex(f),this.setAttribute("position",new De(m,3)),this.setAttribute("normal",new De(g,3)),this.setAttribute("uv",new De(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},id=class n extends Jr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Kn=class n extends it{constructor(e=1,t=.4,i=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new A,u=new A,d=new A;for(let f=0;f<=i;f++)for(let m=0;m<=r;m++){let g=m/r*s,p=f/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(g),u.y=(e+t*Math.cos(p))*Math.sin(g),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/r),c.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=r;m++){let g=(r+1)*f+m-1,p=(r+1)*(f-1)+m-1,x=(r+1)*(f-1)+m,y=(r+1)*f+m;a.push(g,p,y),a.push(p,x,y)}this.setIndex(a),this.setAttribute("position",new De(o,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},rd=class n extends it{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);let o=[],l=[],c=[],h=[],u=new A,d=new A,f=new A,m=new A,g=new A,p=new A,x=new A;for(let v=0;v<=i;++v){let b=v/i*s*Math.PI*2;y(b,s,a,e,f),y(b+.01,s,a,e,m),p.subVectors(m,f),x.addVectors(m,f),g.crossVectors(p,x),x.crossVectors(g,p),g.normalize(),x.normalize();for(let R=0;R<=r;++R){let S=R/r*Math.PI*2,T=-t*Math.cos(S),z=t*Math.sin(S);u.x=f.x+(T*x.x+z*g.x),u.y=f.y+(T*x.y+z*g.y),u.z=f.z+(T*x.z+z*g.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(v/i),h.push(R/r)}}for(let v=1;v<=i;v++)for(let b=1;b<=r;b++){let R=(r+1)*(v-1)+(b-1),S=(r+1)*v+(b-1),T=(r+1)*v+b,z=(r+1)*(v-1)+b;o.push(R,S,z),o.push(S,T,z)}function y(v,b,R,S,T){let z=Math.cos(v),C=Math.sin(v),I=R/b*v,H=Math.cos(I);T.x=S*(2+H)*.5*z,T.y=S*(2+H)*C*.5,T.z=S*Math.sin(I)*.5}this.setIndex(o),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},sd=class n extends it{constructor(e=new lc(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new he,h=new A,u=[],d=[],f=[],m=[];function g(p){h=e.getPointAt(p/t,h);let x=a.normals[p],y=a.binormals[p];for(let v=0;v<=r;v++){let b=v/r*Math.PI*2,R=Math.sin(b),S=-Math.cos(b);l.x=S*x.x+R*y.x,l.y=S*x.y+R*y.y,l.z=S*x.z+R*y.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let p=0;p<t;p++)g(p);g(s===!1?t:0),function(){for(let p=0;p<=t;p++)for(let x=0;x<=r;x++)c.x=p/t,c.y=x/r,f.push(c.x,c.y)}(),function(){for(let p=1;p<=t;p++)for(let x=1;x<=r;x++){let y=(r+1)*(p-1)+(x-1),v=(r+1)*p+(x-1),b=(r+1)*p+x,R=(r+1)*(p-1)+x;m.push(y,v,R),m.push(v,b,R)}}()})(),this.setIndex(m),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new hc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ad=class extends it{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new A,s=new A;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let f=d,m=d+u.count;f<m;f+=3)for(let g=0;g<3;g++){let p=o.getX(f+g),x=o.getX(f+(g+1)%3);r.fromBufferAttribute(a,p),s.fromBufferAttribute(a,x),Kf(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Kf(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new De(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Kf(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(r)!==!0&&(t.add(i),t.add(r),!0)}var nE=Object.freeze({__proto__:null,BoxGeometry:me,CapsuleGeometry:gr,CircleGeometry:Fn,ConeGeometry:xn,CylinderGeometry:we,DodecahedronGeometry:Ku,EdgesGeometry:Qu,ExtrudeGeometry:zi,IcosahedronGeometry:_t,LatheGeometry:uc,OctahedronGeometry:mo,PlaneGeometry:st,PolyhedronGeometry:Jr,RingGeometry:Qr,ShapeGeometry:nd,SphereGeometry:Ue,TetrahedronGeometry:id,TorusGeometry:Kn,TorusKnotGeometry:rd,TubeGeometry:sd,WireframeGeometry:ad});var kt=class extends ui{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function Dl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ux(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ha=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(e>=s)break e;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},od=class extends ha{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ym,endingEnd:Ym}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zm:s=e,o=2*t-i;break;case Jm:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Zm:a=e,l=2*i-t;break;case Jm:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-t)/(r-t),g=m*m,p=g*m,x=-d*p+2*d*g-d*m,y=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*m+1,v=(-1-f)*p+(1.5+f)*g+.5*m,b=f*p-f*g;for(let R=0;R!==o;++R)s[R]=x*a[h+R]+y*a[c+R]+v*a[l+R]+b*a[u+R];return s}},ld=class extends ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},cd=class extends ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},jn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dl(t,this.TimeBufferType),this.values=Dl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Dl(e.times,Array),values:Dl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ld(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new od(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bl:t=this.InterpolantFactoryMethodDiscrete;break;case Ol:t=this.InterpolantFactoryMethodLinear;break;case Hh:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bl;case this.InterpolantFactoryMethodLinear:return Ol;case this.InterpolantFactoryMethodSmooth:return Hh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Ux(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Hh,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let f=0;f!==i;++f){let m=t[h+f];if(m!==t[u+f]||m!==t[d+f]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};jn.prototype.TimeBufferType=Float32Array,jn.prototype.ValueBufferType=Float32Array,jn.prototype.DefaultInterpolation=Ol;var Vr=class extends jn{};Vr.prototype.ValueTypeName="bool",Vr.prototype.ValueBufferType=Array,Vr.prototype.DefaultInterpolation=Bl,Vr.prototype.InterpolantFactoryMethodLinear=void 0,Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var hd=class extends jn{};hd.prototype.ValueTypeName="color";var ud=class extends jn{};ud.prototype.ValueTypeName="number";var dd=class extends ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ln.slerpFlat(s,0,a,c-o,a,c,l);return s}},to=class extends jn{InterpolantFactoryMethodLinear(e){return new dd(this.times,this.values,this.getValueSize(),e)}};to.prototype.ValueTypeName="quaternion",to.prototype.DefaultInterpolation=Ol,to.prototype.InterpolantFactoryMethodSmooth=void 0;var Wr=class extends jn{};Wr.prototype.ValueTypeName="string",Wr.prototype.ValueBufferType=Array,Wr.prototype.DefaultInterpolation=Bl,Wr.prototype.InterpolantFactoryMethodLinear=void 0,Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var pd=class extends jn{};pd.prototype.ValueTypeName="vector";var md=class{constructor(e,t,i){let r=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Nx=new md,fd=class{constructor(e){this.manager=e!==void 0?e:Nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fd.DEFAULT_MATERIAL_NAME="__DEFAULT";var dc=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},fo=class extends dc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},yu=new Pe,Qf=new A,e0=new A,gd=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Qf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qf),e0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(e0),t.updateMatrixWorld(),yu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var iE=new Pe,rE=new A,sE=new A;var yd=class extends gd{constructor(){super(new Zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},go=class extends dc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new yd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var aE=new Pe,oE=new Pe,lE=new Pe;var pc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=t0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=t0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function t0(){return(typeof performance=="undefined"?Date:performance).now()}var cE=new A,hE=new Ln,uE=new A,dE=new A;var pE=new A,mE=new Ln,fE=new A,gE=new A;var Sd="\\[\\]\\.:\\/",Bx=new RegExp("["+Sd+"]","g"),vu="[^"+Sd+"]",Ox="[^"+Sd.replace("\\.","")+"]",zx=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",vu)+/(WCOD+)?/.source.replace("WCOD",Ox)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vu)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vu)+"$"),kx=["material","materials","bones","map"],dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bx,"")}static parseTrackName(e){let t=zx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);kx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=class{constructor(n,e,t){let i=t||dt.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray],dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yE=new Float32Array(1);var mc=class{constructor(e,t,i=0,r=1/0){this.ray=new Yr(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return vd(e,this,i,t),i.sort(n0),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)vd(e[r],this,i,t);return i.sort(n0),i}};function n0(n,e){return n.distance-e.distance}function vd(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let r=n.children;for(let s=0,a=r.length;s<a;s++)vd(r[s],e,t,!0)}}var vE=new he;var xE=new A,_E=new A;var EE=new A;var bE=new A,ME=new Pe,SE=new Pe;var wE=new A,TE=new Me,AE=new Me;var RE=new A,CE=new A,LE=new A;var PE=new A,IE=new ro;var FE=new Yn;var DE=new A;typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xu}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xu);var mi=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),Td=(()=>{try{return matchMedia("(prefers-reduced-motion: reduce)").matches||localStorage.getItem("family-lite")==="1"}catch{return!1}})(),Dn=(()=>{let n=new Uint8Array([150,150,150,255,215,215,215,255,255,255,255,255]),e=new tc(n,3,1,Cn);return e.minFilter=e.magFilter=Ot,e.needsUpdate=!0,e})(),wd=new Map;function mt(n,e={}){let t=n+JSON.stringify(e);if(!e.unique&&wd.has(t))return wd.get(t);let i=new kt({color:n,gradientMap:Dn,...e});return delete i.unique,e.unique||wd.set(t,i),i}function Q(n,e,t=0,i=0,r=0,s){let a=new ue(n,typeof e=="string"||typeof e=="number"?mt(e,s):e);return a.position.set(t,i,r),a.castShadow=!0,a.receiveShadow=!0,a}function Ht(n,{w:e=512,h:t=256,bg:i="#FFF6E6",color:r="#4A3528",font:s="Jua",size:a=56,radius:o=40,border:l=null,sub:c=null,subSize:h=30}={}){let u=document.createElement("canvas");u.width=e,u.height=t;let d=u.getContext("2d");i&&(d.fillStyle=i,Qn(d,0,0,e,t,o),d.fill(),l&&(d.lineWidth=10,d.strokeStyle=l,Qn(d,5,5,e-10,t-10,o-4),d.stroke())),d.fillStyle=r,d.textAlign="center",d.textBaseline="middle";let f=Array.isArray(n)?n:[n],m=f.length*a*1.25+(c?h*1.5:0),g=t/2-m/2+a*.62;d.font=`${s==="Jua"?"":"700 "}${a}px "${s}", sans-serif`;for(let p of f)d.fillText(p,e/2,g),g+=a*1.25;return c&&(d.font=`${h}px "Gowun Dodum", sans-serif`,d.globalAlpha=.7,d.fillText(c,e/2,g+h*.2)),u}function Qn(n,e,t,i,r,s){n.beginPath(),n.moveTo(e+s,t),n.arcTo(e+i,t,e+i,t+r,s),n.arcTo(e+i,t+r,e,t+r,s),n.arcTo(e,t+r,e,t,s),n.arcTo(e,t,e+i,t,s),n.closePath()}function ct(n){let e=new rc(n);return e.colorSpace=Mt,e.anisotropy=4,e}function yr(n,{scale:e=4.2,bg:t="rgba(255,248,236,.95)",color:i="#4A3528"}={}){let r=document.createElement("canvas");r.width=512,r.height=128;let s=r.getContext("2d"),a=56;for(s.font=`${a}px "Jua", sans-serif`;s.measureText(n).width>430&&a>32;)a-=2,s.font=`${a}px "Jua", sans-serif`;let o=Math.min(490,s.measureText(n).width+70);s.fillStyle=t,s.shadowColor="rgba(110,70,40,.28)",s.shadowBlur=12,s.shadowOffsetY=4,Qn(s,(512-o)/2,18,o,86,43),s.fill(),s.shadowColor="transparent",s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.fillText(n,256,63);let l=new Pn(new vn({map:ct(r),depthWrite:!1,transparent:!0}));return l.scale.set(e,e/4,1),l.renderOrder=10,l}var Ee=(n,e)=>n+Math.random()*(e-n),Hx=(n,e,t)=>n+(e-n)*t,ki=(n,e,t,i)=>Hx(n,e,1-Math.exp(-t*i)),ts=(n,e,t)=>Math.max(e,Math.min(t,n));var w0=[["short","\uC9E7\uC740 \uBA38\uB9AC"],["buzz","\uC544\uC8FC \uC9E7\uAC8C"],["bob","\uB2E8\uBC1C"],["long","\uAE34 \uBA38\uB9AC"],["ponytail","\uBB36\uC740 \uBA38\uB9AC"],["bun","\uC62C\uB9BC \uBA38\uB9AC"],["pigtails","\uC591\uAC08\uB798"],["curly","\uBF40\uAE00 \uD30C\uB9C8"]];function da({type:n="player",outfit:e="#8FB8DE",hair:t="#5A3A2A",skin:i="#FFE0C7",longHair:r=!1,hairStyle:s="",gender:a="",age:o="",glasses:l=!1,hat:c="",kid:h=!1,shadows:u=!0}={}){let d=s||(r?"long":"short");o==="kid"&&(h=!0);let f=new ge,m=new ge;f.add(m),h?m.scale.setScalar(.8):o==="teen"?m.scale.setScalar(.9):o==="senior"&&(m.rotation.x=.07);let g=e,p="#6B5B53",x=new gr(.1,.28,4,8),y=new Ue(.13,12,8),v=[];for(let B of[-1,1]){let L=new ge;L.position.set(.14*B,.56,0);let V=Q(x,p,0,-.26,0),D=Q(y,"#4A3B38",0,-.47,.04);D.scale.set(1,.6,1.35),L.add(V,D),m.add(L),v.push(L)}let b=Q(new gr(.3,.3,6,14),g,0,.86,0);b.scale.set(1,1,.85),m.add(b);let R=new gr(.075,.3,4,8),S=new Ue(.085,10,8),T=[];for(let B of[-1,1]){let L=new ge;L.position.set(.36*B,1.08,0);let V=Q(R,g,.02*B,-.2,0),D=Q(S,i,.03*B,-.42,0);L.add(V,D),L.rotation.z=.12*B,m.add(L),T.push(L)}let z=new ge;z.position.y=1.5,m.add(z);let C=Q(new Ue(.42,24,18),i,0,0,0);z.add(C);let I=mt(t),H=(B,L,V,D,k=1,$=1,J=1)=>{let ne=new ue(B,I);return ne.position.set(L,V,D),ne.scale.set(k,$,J),ne.castShadow=!0,z.add(ne),ne},_=new ue(new Ue(d==="buzz"?.43:.45,24,16,0,Math.PI*2,0,Math.PI*(d==="buzz"?.46:.52)),I);if(_.rotation.x=-.35,_.position.set(0,.03,-.03),_.castShadow=!0,z.add(_),d!=="buzz"){let B=H(new Ue(.2,12,8),.1,.26,.27,1.5,.55,.8);B.rotation.z=-.3}let P=B=>new Ue(B,12,10);if(d==="long")H(new Ue(.42,16,12),0,-.22,-.18,1.05,1.25,.7);else if(d==="bob")H(new Ue(.44,16,12),0,-.06,-.1,1.08,.82,.86);else if(d==="ponytail"){H(P(.17),0,.12,-.46,1,1,1),H(new gr(.11,.26,4,8),0,-.14,-.5,1,1,.9).rotation.x=.25;let B=Q(new Kn(.1,.03,6,12),e,0,.04,-.47);B.rotation.x=.4,z.add(B)}else if(d==="bun"){let B=c==="cap"||c==="beanie";H(P(.2),0,B?.02:.42,B?-.46:-.2);let L=Q(new Kn(.15,.03,6,14),e,0,B?.02:.32,B?-.36:-.17);L.rotation.x=B?0:Math.PI/2-.5,z.add(L)}else if(d==="pigtails")for(let B of[-1,1])H(P(.15),.42*B,-.08,-.12,.9,1.15,.9),z.add(Q(new Ue(.05,8,6),e,.38*B,.06,-.1));else if(d==="curly"){let B=P(.13);for(let L=0;L<9;L++){let V=L/9*Math.PI*2;H(B,Math.cos(V)*.38,.18+Math.sin(V*2)*.03,Math.sin(V)*.38-.06)}c!=="cap"&&c!=="beanie"&&H(P(.2),0,.4,-.04,1.4,.8,1.3)}let U=new Ue(.05,10,8),O=new Oe({color:"#2B2220"}),Z=[];for(let B of[-1,1]){let L=new ue(U,O);L.position.set(.14*B,.02,.38),L.scale.set(1,1.3,.6),z.add(L),Z.push(L);let V=new ue(new Ue(.016,6,4),new Oe({color:"#fff"}));V.position.set(.14*B+.018,.05,.415),z.add(V);let D=new ue(new Fn(.07,14),new Oe({color:"#FFB3B3",transparent:!0,opacity:.7}));D.position.set(.24*B,-.09,.345),D.rotation.y=.55*B,z.add(D)}if(a==="f")for(let B of[-1,1]){let L=new ue(new me(.05,.014,.01),O);L.position.set(.2*B,.085,.37),L.rotation.z=.5*B,z.add(L)}let j=new ue(new Kn(.045,.012,6,12,Math.PI),O);if(j.position.set(0,-.1,.39),j.rotation.z=Math.PI,z.add(j),l){let B=mt("#4A3B38"),L=new Kn(.085,.014,6,18);for(let D of[-1,1]){let k=new ue(L,B);k.position.set(.14*D,.03,.4),z.add(k)}let V=new ue(new me(.1,.018,.018),B);V.position.set(0,.05,.42),z.add(V)}let q=new ge;z.add(q);function X(B){if(q.clear(),B==="cap"){let L=new ue(new Ue(.46,20,12,0,Math.PI*2,0,Math.PI*.42),mt(e==="#FFFFFF"?"#8FB8DE":e));L.position.y=.06,L.rotation.x=-.12;let V=Q(new we(.26,.26,.03,16,1,!1,-Math.PI/2,Math.PI),e,0,.2,.3);V.rotation.x=.12,q.add(L,V)}else if(B==="beanie"){let L=new ue(new Ue(.47,20,12,0,Math.PI*2,0,Math.PI*.45),mt("#E88A98"));L.position.y=.06;let V=Q(new Kn(.43,.06,8,24),"#FFFDF8",0,.18,0);V.rotation.x=Math.PI/2;let D=Q(new Ue(.1,10,8),"#FFFDF8",0,.55,0);q.add(L,V,D)}else if(B==="flower")["#F4B8C0","#FFFFFF","#F7D58B"].forEach((L,V)=>q.add(Q(new _t(.075,0),L,.3+V*.05,.3-V*.08,.12-V*.06))),q.add(Q(new Ue(.03,6,4),"#E2B865",.31,.3,.16));else if(B==="party"){let L=Q(new xn(.2,.46,14),"#F7D58B",.08,.6,0);L.rotation.z=-.25;let V=Q(new Ue(.07,8,6),"#E88A98",.2,.84,0);q.add(L,V)}}X(c),f.traverse(B=>{B.isMesh&&B.material!==O&&(B.castShadow=u)});let G=0,Y=2+Math.random()*3,ce=0,M=0,E=T[1].rotation.clone(),N={root:f,body:m,head:z,arms:T,legs:v,type:n};return N.animate=(B,L=0,V=0)=>{let D=Math.min(1,L);G+=B*(4+7*D);let k=Math.sin(G)*.75*D;if(v[0].rotation.x=k,v[1].rotation.x=-k,T[0].rotation.x=-k*.8,T[1].rotation.x=k*.8,m.position.y=Math.abs(Math.sin(G))*.07*D+Math.sin(V*2)*.012,m.rotation.z=Math.sin(G)*.04*D,z.rotation.z=Math.sin(V*1.3)*.04,n==="player"){M=D<.05?M+B:0;let J=M>4?Math.sin(V*.8)*.45:0;z.rotation.y+=(J-z.rotation.y)*Math.min(1,B*4)}Y-=B;let $=Y<.12?.15:1;if(Z.forEach(J=>J.scale.y=1.3*$),Y<0&&(Y=2+Math.random()*3),ce>0){ce-=B;let J=T[1];J.rotation.z=-2.5+Math.sin(V*14)*.35,J.rotation.x=0,ce<=0&&J.rotation.copy(E)}},N.wave=(B=1.6)=>{ce=B},N.setParty=B=>X(B?"party":c),N}var{esc:Te,avatarHTML:ns,toast:Et,confetti:R0,onData:yo,openView:ei,closeModal:Ec,replyView:Gx,paintStatus:Vx}=Is,T0=window.FAMILY,Rd=(n,e)=>{try{dispatchEvent(new CustomEvent(n,{detail:e}))}catch{}},C0=n=>{let[e,t]=String(n).split("-").map(Number);return`${e}\uC6D4 ${t}\uC77C`},Wx=n=>{let e=ke(),t=`${e.slice(0,4)}-${n}`;return t<e&&(t=`${+e.slice(0,4)+1}-${n}`),ai(e,t)},hn={onSent:null,takePhoto:null};function Cd({hero:n=!0}={}){return{html:'<div class="fam-box"></div>',mount:t=>{let i=t.querySelector(".fam-box"),r=()=>{var c,h;if(!i.isConnected)return;let s=Vo(),a=Ki(),o=Ms(3),l=bs();i.innerHTML=`
        ${n?`<div class="inv-hero">
          <div class="en">FAMILY VILLAGE</div>
          <div class="names">${Te(qt())}</div>
          ${a>0?`<div class="muted">\uD568\uAED8\uD55C \uC9C0 <b style="color:var(--rose-deep)">${a.toLocaleString()}\uC77C\uC9F8</b></div>`:""}
        </div>`:""}
        ${l.length?`<div class="bday-banner">\u{1F382} \uC624\uB298\uC740 <b>${l.map(u=>Te(u.nick||u.role||u.name)).join(", ")}</b> \uC0DD\uC77C\uC774\uC5D0\uC694! <button class="btn small pink f-bday" type="button">\uCD95\uD558 \uD3B8\uC9C0 \uC4F0\uAE30</button></div>`:""}
        ${T0.greeting?`<p class="inv-greet">${Te(T0.greeting)}</p>`:""}
        <div class="card">
          <b>\u{1F463} \uC624\uB298 \uB2E4\uB140\uAC04 \uAC00\uC871</b>
          <div class="chips-row">${s.length?s.map(u=>`<span class="who-chip" style="--c:${Te(u.look.outfit)}">${Te(u.nick||u.role||u.name)}</span>`).join(""):'<span class="muted">\uC544\uC9C1 \uC544\uBB34\uB3C4 \uC548 \uC654\uC5B4\uC694</span>'}</div>
          ${vt()?`<p class="muted" style="margin:8px 0 0">\uB0B4 \uCD9C\uC11D \uB3C4\uC7A5 <b>${tm()}\uAC1C</b> \u{1F43E}</p>`:""}
        </div>
        <div class="mem-grid">
          ${Dt().map(u=>`
            <button type="button" class="mem-card" data-id="${Te(u.id)}">
              ${ns(u.look)}
              <b>${Te(u.nick||u.role||u.name)}${u.id===_e()?" <small>(\uB098)</small>":""}</b>
              <small>${Te(u.name)}${u.birthday?` \xB7 \u{1F382} ${C0(u.birthday)}`:""}</small>
              <span class="mem-heart">\u{1F497} ${ws(u.id).length}</span>
            </button>`).join("")}
        </div>
        ${o.length?`<div class="card"><b>\u{1F4C5} \uB2E4\uAC00\uC624\uB294 \uB0A0</b>${o.map(u=>`<div class="up-row"><span>${u.emoji||"\u{1F4CC}"} ${Te(u.title)}</span><span class="dd">${Ra(u.dday)}</span></div>`).join("")}
          <button class="btn small f-cal" type="button" style="margin-top:8px">\uB2EC\uB825 \uBCF4\uAE30</button></div>`:""}
        <div class="btns">
          <button class="btn pink f-q" type="button">\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38</button>
          <button class="btn f-mail" type="button">\u2709\uFE0F \uD3B8\uC9C0 \uC4F0\uAE30</button>
          <button class="btn f-share" type="button">\u{1F517} \uB9C8\uC744 \uC8FC\uC18C \uBCF4\uB0B4\uAE30</button>
        </div>
        <p class="muted l-status" role="status" hidden></p>`,i.querySelectorAll(".mem-card").forEach(u=>u.onclick=()=>{Ye(8),pa(u.dataset.id)}),i.querySelector(".f-q").onclick=()=>is(),i.querySelector(".f-mail").onclick=()=>Hn(hn.onSent),i.querySelector(".f-share").onclick=za,(c=i.querySelector(".f-cal"))==null||c.addEventListener("click",()=>vo()),(h=i.querySelector(".f-bday"))==null||h.addEventListener("click",()=>{var u;return Hn(hn.onSent,{to:((u=l.find(d=>d.id!==_e()))==null?void 0:u.id)||l[0].id})}),Vx(i.querySelector(".l-status"))};return r(),wn(),yo(r)}}}function bc(){ei(qt(),Cd())}function Ld(n){if(!vt())return Et("\uD558\uD2B8\uB294 \uAC00\uC871\uB9CC \uBCF4\uB0BC \uC218 \uC788\uC5B4\uC694"),!1;if(n===_e())return Et("\uB098\uC5D0\uAC8C\uB294 \uD558\uD2B8\uB97C \uBCF4\uB0BC \uC218 \uC5C6\uC5B4\uC694 \u{1F606}"),!1;if(Go(n))return Et(`\uC624\uB298\uC740 \uC774\uBBF8 ${Qt(n)}\uC5D0\uAC8C \uD558\uD2B8\uB97C \uBCF4\uB0C8\uC5B4\uC694 \u{1F497}`),!1;let e=ke();return Kt("hearts",{id:`${_e()}-${n}-${e}`,who:_e(),to:n,day:e}),Rd("family:heart",{to:n}),Ye(15),Qe.sfx("heart"),Et(`\u{1F497} ${Qt(n)}\uC5D0\uAC8C \uD558\uD2B8\uB97C \uBCF4\uB0C8\uC5B4\uC694`),!0}function $x(n){return{html:'<div class="mem-box"></div>',mount:t=>{let i=t.querySelector(".mem-box"),r=()=>{var m,g,p,x,y;let s=Ut(n);if(!s||!i.isConnected)return;let a=s.id===_e(),o=ke(),l=s.birthday?Wx(s.birthday):null,c=Ti(o).find(v=>v.who===s.id),h=Ss(),u=!!fh(o)||a,d=ot("letters").filter(v=>v.who===s.id&&!Ri(v)).slice(0,2),f=a?oi().length:0;i.innerHTML=`
        <div class="mem-hero" style="--c:${Te(s.look.outfit)}">
          ${ns(s.look,"big")}
          <div class="names">${Te(s.name)}</div>
          <div class="muted">${Te(s.role||"")}${s.birthday?` \xB7 \u{1F382} ${C0(s.birthday)}${l===0?' <b style="color:var(--rose-deep)">\uC624\uB298!</b>':` (D-${l})`}`:""}</div>
          ${s.line?`<p class="mem-line">\u201C${Te(s.line)}\u201D</p>`:""}
        </div>
        ${l===0?`<div class="bday-banner">\u{1F382} \uC624\uB298\uC740 ${Te(s.nick||s.role||s.name)} \uC0DD\uC77C\uC774\uC5D0\uC694!</div>`:""}
        <div class="stat-row">
          <div><b>\u{1F497} ${ws(s.id).length}</b><small>\uBC1B\uC740 \uD558\uD2B8 (\uC624\uB298 ${em(s.id).length})</small></div>
          <div><b>\u{1F463} ${new Set(ot("visits").filter(v=>v.who===s.id).map(v=>v.day)).size}</b><small>\uCD9C\uC11D \uB3C4\uC7A5</small></div>
          <div><b>\u{1F4A7} ${ot("water").filter(v=>v.who===s.id).length}</b><small>\uB098\uBB34\uC5D0 \uC900 \uBB3C</small></div>
        </div>
        <div class="btns">
          ${a?`
            <button class="btn pink m-look" type="button">\u{1F3A8} \uB0B4 \uCE90\uB9AD\uD130 \uAFB8\uBBF8\uAE30</button>
            <button class="btn m-inbox" type="button">\u{1F48C} \uB098\uC5D0\uAC8C \uC628 \uD3B8\uC9C0${f?` <b class="badge">${f}</b>`:""}</button>`:`
            <button class="btn pink m-heart" type="button" ${Go(s.id)?"disabled":""}>${Go(s.id)?"\u{1F497} \uC624\uB298 \uD558\uD2B8 \uBCF4\uB0C4":"\u{1F497} \uD558\uD2B8 \uBCF4\uB0B4\uAE30"}</button>
            <button class="btn m-mail" type="button">\u2709\uFE0F \uD3B8\uC9C0 \uC4F0\uAE30</button>
            ${s.phone?`<a class="btn small" href="tel:${Te(s.phone)}">\u{1F4DE}</a><a class="btn small" href="sms:${Te(s.phone)}">\u{1F4AC}</a>`:""}`}
        </div>
        ${h?`<div class="card"><b>\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38</b><p class="muted" style="margin:6px 0">${Te(h.q)}</p>
          ${c?u?`<p class="ans-text">${Te(c.text)}</p>`:'<p class="muted">\u{1F512} \uB098\uB3C4 \uB2F5\uD558\uBA74 \uBCFC \uC218 \uC788\uC5B4\uC694</p>':'<p class="muted">\uC544\uC9C1 \uB2F5\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694</p>'}
          <button class="btn small m-q" type="button">\uB2F5\uD558\uB7EC \uAC00\uAE30</button></div>`:""}
        ${d.length?`<div class="card"><b>\u2709\uFE0F ${Te(s.nick||s.role||s.name)}\uC758 \uCD5C\uADFC \uD3B8\uC9C0</b>${d.map((v,b)=>`<button type="button" class="up-row linkrow" data-i="${b}"><span>${Te(String(v.message).split(`
`)[0].slice(0,26))}</span><span class="muted">${Xi(v.time)}</span></button>`).join("")}</div>`:""}`,(m=i.querySelector(".m-heart"))==null||m.addEventListener("click",()=>{Ld(s.id)&&r()}),(g=i.querySelector(".m-mail"))==null||g.addEventListener("click",()=>Hn(hn.onSent,{to:s.id})),(p=i.querySelector(".m-look"))==null||p.addEventListener("click",()=>wc()),(x=i.querySelector(".m-inbox"))==null||x.addEventListener("click",()=>Hn(hn.onSent,{filter:"me"})),(y=i.querySelector(".m-q"))==null||y.addEventListener("click",()=>is()),i.querySelectorAll(".linkrow").forEach(v=>v.onclick=()=>Na(d,+v.dataset.i,()=>pa(n)))};return r(),yo(r)}}}function pa(n){let e=Ut(n);ei(e?e.id===_e()?"\u{1F3E0} \uB0B4 \uC9D1":`${e.emoji||"\u{1F3E0}"} ${e.nick||e.role||e.name}\uB124 \uC9D1`:"\uC6B0\uB9AC \uAC00\uC871",$x(n))}function Pd(n=ke(),{embedded:e=!1}={}){return{html:'<div class="q-box"></div>',mount:i=>{let r=i.querySelector(".q-box"),s=[],a=()=>{var m;if(!r.isConnected)return;s.splice(0).forEach(g=>g());let l=Ss(n);if(!l){r.innerHTML='<p class="muted">config.js\uC5D0 \uC9C8\uBB38\uC774 \uC5C6\uC5B4\uC694</p>';return}let c=Ti(n),h=fh(n),u=n===ke(),d=c.filter(g=>g.who!==_e());r.innerHTML=`
        <div class="q-hero">
          <div class="muted">${u?`\uC624\uB298\uC758 \uC9C8\uBB38 \xB7 ${mn(n)}`:`${mn(n)}\uC758 \uC9C8\uBB38`}</div>
          <div class="q-text">${Te(l.q)}</div>
          <div class="muted">${c.length?`${c.length}\uBA85\uC774 \uB2F5\uD588\uC5B4\uC694`:"\uC544\uC9C1 \uC544\uBB34\uB3C4 \uB2F5\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694"}</div>
        </div>
        ${vt()?`
          <form class="q-form" autocomplete="off" ${h?"hidden":""}>
            <textarea class="field q-in" maxlength="300" placeholder="\uB098\uC758 \uB2F5\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694 (300\uC790)" aria-label="\uB098\uC758 \uB2F5">${h?Te(h.text):""}</textarea>
            <button class="btn pink" type="submit" style="width:100%;margin-top:8px">${h?"\u270F\uFE0F \uACE0\uCE5C \uB2F5 \uC62C\uB9AC\uAE30":"\u{1F4AC} \uB2F5\uD558\uACE0 \uAC00\uC871 \uB2F5 \uBCF4\uAE30"}</button>
          </form>`:`<p class="muted center">\u{1F64B} \uB2F5\uC740 \uAC00\uC871\uB9CC \uB0A8\uAE38 \uC218 \uC788\uC5B4\uC694. \uBA54\uB274\uC758 '\uB098\uB294 \uB204\uAD6C?'\uC5D0\uC11C \uB098\uB97C \uACE8\uB77C \uC8FC\uC138\uC694</p>`}
        <div class="ans-list">
          ${h?A0(h,!0):""}
          ${h?d.map(g=>A0(g)).join(""):d.map(g=>{var p,x;return`<div class="ans-card locked" style="--c:${Te(((p=Ut(g.who))==null?void 0:p.look.outfit)||"#E6D5C6")}">${ns(((x=Ut(g.who))==null?void 0:x.look)||{},"mini")}<b>${Te(Qt(g.who)||g.name)}</b><span class="muted">\u{1F512} \uB2F5\uD558\uBA74 \uC5F4\uB824\uC694</span></div>`}).join("")}
        </div>
        ${e?"":`<div class="divider"></div><b>\u{1F5D3}\uFE0F \uC9C0\uB09C \uC9C8\uBB38</b><div class="past-q">${Qp(14).filter(g=>g.day!==n).map(g=>`<button type="button" class="up-row linkrow" data-day="${g.day}"><span>${Te(g.q)}</span><span class="muted">${mn(g.day,!1)} \xB7 ${g.answers.length}\uBA85</span></button>`).join("")}</div>`}`;let f=r.querySelector(".q-form");f&&(f.onsubmit=async g=>{g.preventDefault();let p=f.querySelector(".q-in").value.trim();if(!p){Et("\uB2F5\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694");return}let x=await Kt("answers",{id:`${_e()}-${n}`,who:_e(),name:Tn(_e()),day:n,q:l.idx,text:p});Et(x.ok?h?"\u270F\uFE0F \uB2F5\uC744 \uACE0\uCCE4\uC5B4\uC694":"\u{1F4AC} \uB2F5\uD588\uC5B4\uC694! \uAC00\uC871\uC758 \uB2F5\uC774 \uC5F4\uB838\uC5B4\uC694":"\uD734\uB300\uD3F0\uC5D0 \uBCF4\uAD00\uD588\uC5B4\uC694. \uC5F0\uACB0\uB418\uBA74 \uC790\uB3D9\uC73C\uB85C \uC62C\uB9B4\uAC8C\uC694",2600),h||(R0(["\u{1F4AC}","\u{1F497}","\u2728"]),Qe.sfx("tada")),a()}),(m=r.querySelector(".a-edit"))==null||m.addEventListener("click",()=>{var g;f.hidden=!1,(g=r.querySelector(".ans-card.me"))==null||g.remove(),f.querySelector(".q-in").focus()}),r.querySelectorAll(".past-q .linkrow").forEach(g=>g.onclick=()=>is(g.dataset.day)),h&&r.querySelectorAll(".ans-card[data-id]").forEach(g=>{let p=Gx(g.dataset.id,{compact:!0});g.insertAdjacentHTML("beforeend",p.html),s.push(p.mount(g))})};a(),wn();let o=yo(a);return()=>{o(),s.forEach(l=>l())}}}}function A0(n,e=!1){let t=Ut(n.who);return`<div class="ans-card${e?" me":""}" data-id="${Te(n.id)}" style="--c:${Te((t==null?void 0:t.look.outfit)||"#E6D5C6")}">
    <div class="ans-top">${ns((t==null?void 0:t.look)||{},"mini")}<b>${Te(t?t.nick||t.role||t.name:n.name)}${e?" (\uB098)":""}</b><small class="muted">${Xi(n.time)}</small>${e?'<button type="button" class="linklike a-edit">\uACE0\uCE58\uAE30</button>':""}</div>
    <p class="ans-text">${Te(n.text)}</p>
  </div>`}function is(n=ke()){ei("\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38",Pd(n))}function qx(n){let e=n.key.replace(/-/g,""),t=pn(n.key,1).replace(/-/g,""),i=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//family-village//KO","BEGIN:VEVENT",`UID:${e}-${encodeURIComponent(n.title).slice(0,30)}@family-village`,`DTSTAMP:${new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"")}`,`DTSTART;VALUE=DATE:${e}`,`DTEND;VALUE=DATE:${t}`,...n.yearly?["RRULE:FREQ=YEARLY"]:[],`SUMMARY:${n.title}`,...n.note?[`DESCRIPTION:${n.note}`]:[],"END:VEVENT","END:VCALENDAR"].join(`\r
`),r=document.createElement("a");r.href=URL.createObjectURL(new Blob([i],{type:"text/calendar"})),r.download="family-day.ics",r.click(),Et("\u{1F4C5} \uCE98\uB9B0\uB354 \uD30C\uC77C\uC744 \uC5F4\uC5B4 \uC800\uC7A5\uD574 \uC8FC\uC138\uC694")}function Id(){return{html:'<div class="cal-box"></div>',mount:e=>{let t=e.querySelector(".cal-box"),i=ke(),r=+i.slice(0,4),s=+i.slice(5,7),a=i,o=()=>{let l=Kp(r,s),c=new Date(Date.UTC(r,s-1,1)).getUTCDay(),h=new Date(Date.UTC(r,s,0)).getUTCDate(),u="<tr>"+"<td></td>".repeat(c);for(let m=1;m<=h;m++){let g=`${r}-${String(s).padStart(2,"0")}-${String(m).padStart(2,"0")}`,p=(c+m-1)%7,x=l[g];u+=`<td class="${p===0?"sun":""}${g===i?" today":""}${g===a?" pick":""}"><button type="button" data-k="${g}">${m}${x?`<i>${x[0].emoji||"\u2022"}</i>`:""}</button></td>`,p===6&&m!==h&&(u+="</tr><tr>")}u+="</tr>";let d=l[a]||[],f=Ms(8);t.innerHTML=`
        <div class="cal-nav"><button class="btn small c-prev" type="button" aria-label="\uC774\uC804 \uB2EC">\u2039</button><b>${r}\uB144 ${s}\uC6D4</b><button class="btn small c-next" type="button" aria-label="\uB2E4\uC74C \uB2EC">\u203A</button></div>
        <table class="cal fam-cal"><tr>${["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"].map((m,g)=>`<th class="${g===0?"sun":""}">${m}</th>`).join("")}</tr>${u}</table>
        <div class="card">${d.length?d.map(m=>`<div class="up-row"><span>${m.emoji||"\u{1F4CC}"} ${Te(m.title)}</span>${m.note?`<small class="muted">${Te(m.note)}</small>`:""}</div>`).join(""):`<span class="muted">${mn(a)} \xB7 \uD2B9\uBCC4\uD55C \uB0A0\uC774 \uC5C6\uC5B4\uC694</span>`}</div>
        <b>\u23F0 \uB2E4\uAC00\uC624\uB294 \uB0A0</b>
        <div class="ups">${f.map((m,g)=>`<div class="up-row"><span>${m.emoji||"\u{1F4CC}"} ${Te(m.title)}<small class="muted"> \xB7 ${mn(m.key)}${m.note?` \xB7 ${Te(m.note)}`:""}</small></span><span class="dd">${Ra(m.dday)}</span><button type="button" class="linklike c-ics" data-i="${g}">\uCE98\uB9B0\uB354\uC5D0</button></div>`).join("")||'<p class="muted">config.js\uC758 events\uC5D0 \uB0A0\uC9DC\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694</p>'}</div>`,t.querySelector(".c-prev").onclick=()=>{s--,s<1&&(s=12,r--),o()},t.querySelector(".c-next").onclick=()=>{s++,s>12&&(s=1,r++),o()},t.querySelectorAll(".fam-cal button").forEach(m=>m.onclick=()=>{a=m.dataset.k,Ye(6),o()}),t.querySelectorAll(".c-ics").forEach(m=>m.onclick=()=>qx(f[+m.dataset.i]))};o()}}}function vo(){ei("\u{1F4C5} \uAC00\uC871 \uB2EC\uB825",Id())}function Fd(){return{html:'<div class="poll-box"></div>',mount:e=>{let t=e.querySelector(".poll-box"),i=!1,r=()=>{var o,l;if(!t.isConnected)return;let s=am();t.innerHTML=`
        <p class="muted">\uAC00\uC871 \uC77C\uC740 \uB2E4 \uAC19\uC774 \uC815\uD574\uC694. \uB9C8\uC74C\uC774 \uBC14\uB00C\uBA74 \uB2E4\uC2DC \uB20C\uB7EC\uB3C4 \uB3FC\uC694 \u{1F5F3}\uFE0F</p>
        ${s.map((c,h)=>{let u=yh(c.id),d=u.size,f=u.get(_e()),m=c.cfg?"":`<small class="muted"> \xB7 ${Te(Qt(c.who)||c.name)}\uAC00 \uB9CC\uB4E0 \uD22C\uD45C</small>`;return`<div class="card poll" data-p="${h}"><b>${Te(c.q)}</b>${m}
            ${c.options.map((g,p)=>{let x=[...u.entries()].filter(([,v])=>v===p).map(([v])=>v),y=d?Math.round(x.length/d*100):0;return`<button type="button" class="poll-opt${f===p?" on":""}" data-k="${p}" ${vt()?"":"disabled"}>
                <span class="bar" style="width:${y}%"></span><span class="txt">${Te(g)}</span><span class="cnt">${x.length?`${x.length}\uD45C`:""}</span>
                ${x.length?`<span class="voters">${x.map(v=>{var b;return`<i style="--c:${Te(((b=Ut(v))==null?void 0:b.look.outfit)||"#ccc")}">${Te(Qt(v))}</i>`}).join("")}</span>`:""}
              </button>`}).join("")}
            <small class="muted">${d?`${d}\uBA85 \uCC38\uC5EC`:"\uC544\uC9C1 \uC544\uBB34\uB3C4 \uC548 \uD588\uC5B4\uC694"}</small></div>`}).join("")}
        ${vt()?i?`
          <form class="card poll-new" autocomplete="off">
            <b>\uFF0B \uC0C8 \uD22C\uD45C</b>
            <input class="field pn-q" maxlength="40" placeholder="\uBB34\uC5C7\uC744 \uC815\uD560\uAE4C\uC694? (\uC608: \uC77C\uC694\uC77C \uC810\uC2EC \uBA54\uB274)" aria-label="\uC9C8\uBB38">
            ${[0,1,2,3].map(c=>`<input class="field pn-o" maxlength="20" placeholder="\uBCF4\uAE30 ${c+1}${c>1?" (\uC120\uD0DD)":""}" aria-label="\uBCF4\uAE30 ${c+1}">`).join("")}
            <div class="btns"><button class="btn pink" type="submit">\uD22C\uD45C \uB9CC\uB4E4\uAE30</button><button class="btn pn-cancel" type="button">\uCDE8\uC18C</button></div>
          </form>`:'<button class="btn p-make" type="button" style="width:100%">\uFF0B \uC0C8 \uD22C\uD45C \uB9CC\uB4E4\uAE30</button>':'<p class="muted center">\u{1F64B} \uD22C\uD45C\uB294 \uAC00\uC871\uB9CC \uD560 \uC218 \uC788\uC5B4\uC694</p>'}`,t.querySelectorAll(".poll").forEach(c=>{let h=s[+c.dataset.p];c.querySelectorAll(".poll-opt").forEach(u=>u.onclick=async()=>{let d=+u.dataset.k;if(yh(h.id).get(_e())===d){Et("\uC774\uBBF8 \uACE0\uB978 \uBCF4\uAE30\uC608\uC694");return}Ye(10),Qe.sfx("pop"),await Kt("votes",{id:`${_e()}-${h.id}`,who:_e(),poll:h.id,choice:d}),Et(`\u{1F5F3}\uFE0F '${h.options[d]}'\uC5D0 \uD55C \uD45C!`),r()})}),(o=t.querySelector(".p-make"))==null||o.addEventListener("click",()=>{var c;i=!0,r(),(c=t.querySelector(".pn-q"))==null||c.focus()}),(l=t.querySelector(".pn-cancel"))==null||l.addEventListener("click",()=>{i=!1,r()});let a=t.querySelector(".poll-new");a&&(a.onsubmit=async c=>{c.preventDefault();let h=a.querySelector(".pn-q").value.trim(),u=[...a.querySelectorAll(".pn-o")].map(d=>d.value.trim().replace(/\|/g,"/")).filter(Boolean);if(!h||u.length<2){Et("\uC9C8\uBB38\uACFC \uBCF4\uAE30 \uB450 \uAC1C \uC774\uC0C1\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694");return}i=!1,await Kt("polls",{who:_e(),name:Tn(_e()),q:h,options:u.join("|")}),Et("\u{1F5F3}\uFE0F \uC0C8 \uD22C\uD45C\uB97C \uB9CC\uB4E4\uC5C8\uC5B4\uC694. \uAC00\uC871\uC5D0\uAC8C \uC54C\uB824 \uC8FC\uC138\uC694!"),r()})};return r(),wn(),yo(r)}}}function Mc(){ei("\u{1F5F3}\uFE0F \uAC00\uC871 \uD22C\uD45C\uD568",Fd())}var jx=["\u{1F330}","\u{1F331}","\u{1F33F}","\u{1F333}","\u{1F338}","\u{1F34E}"];function Xx(){if(!vt())return Et("\uBB3C\uC740 \uAC00\uC871\uB9CC \uC904 \uC218 \uC788\uC5B4\uC694"),!1;let n=Ai();if(n.wateredToday)return Et("\u{1F4A7} \uC624\uB298\uC740 \uC774\uBBF8 \uBB3C\uC744 \uC92C\uC5B4\uC694. \uB0B4\uC77C \uB610 \uC640 \uC8FC\uC138\uC694"),!1;let e=ke();return Kt("water",{id:`${_e()}-${e}`,who:_e(),day:e}),Ye(20),Qe.sfx("water"),setTimeout(()=>{let t=Ai();Rd("family:water",{grew:t.stage>n.stage,stage:t.stage}),t.stage>n.stage?(R0(["\u{1F331}","\u{1F338}","\u2728","\u{1F34E}"]),Qe.sfx("tada"),Et(`\u{1F389} ${Yi(t.name,"\uC774/\uAC00")} '${t.stageName}'${Yi(t.stageName,"\uC73C\uB85C/\uB85C").slice(t.stageName.length)} \uC790\uB790\uC5B4\uC694!`,3600)):Et(t.next==null?"\u{1F4A7} \uBB3C\uC744 \uC92C\uC5B4\uC694. \uC5F4\uB9E4\uAC00 \uC8FC\uB801\uC8FC\uB801\uD574\uC694 \u{1F34E}":`\u{1F4A7} \uBB3C\uC744 \uC92C\uC5B4\uC694! ${t.toNext}\uBC88 \uB354 \uC8FC\uBA74 '${Wo[t.stage+1]}'\uC774 \uB3FC\uC694`,3e3)},30),!0}function Dd(){return{html:'<div class="tree-box"></div>',mount:e=>{let t=e.querySelector(".tree-box"),i=()=>{if(!t.isConnected)return;let r=Ai(),s=ke(),a=Array.from({length:7},(o,l)=>pn(s,l-6)).map(o=>({k:o,n:new Set(ot("water").filter(l=>l.day===o).map(l=>l.who)).size}));t.innerHTML=`
        <div class="tree-hero">
          <div class="tree-emoji">${jx[r.stage]}</div>
          <div class="names">${Te(r.name)}</div>
          <div class="muted">\uC9C0\uAE08\uC740 <b>${r.stageName}</b> \xB7 \uBAA8\uC778 \uBB3C ${r.total}\uBC88${r.thirsty?" \xB7 \u{1F4A7} \uBAA9\uB9D0\uB77C\uC694":""}</div>
          <div class="prog"><i style="width:${Math.round(r.progress*100)}%"></i></div>
          <small class="muted">${r.next==null?"\uB2E4 \uC790\uB790\uC5B4\uC694! \uC5F4\uB9E4\uAC00 \uC5F4\uB838\uC5B4\uC694 \u{1F34E}":`${r.toNext}\uBC88 \uB354 \uC8FC\uBA74 '${Wo[r.stage+1]}'`}</small>
        </div>
        <p class="muted center">\uAC00\uC871\uC774 \uD558\uB8E8\uC5D0 \uD55C \uBC88\uC529 \uBB3C\uC744 \uC904 \uC218 \uC788\uC5B4\uC694. \uB2E4 \uAC19\uC774 \uC624\uB798 \uB4E4\uB97C\uC218\uB85D \uB098\uBB34\uAC00 \uC790\uB77C\uC694</p>
        <button class="btn pink t-water" type="button" style="width:100%;padding:14px" ${!vt()||r.wateredToday?"disabled":""}>${vt()?r.wateredToday?"\u{1F4A7} \uC624\uB298\uC740 \uBB3C\uC744 \uC92C\uC5B4\uC694":"\u{1F4A7} \uBB3C \uC8FC\uAE30":"\u{1F64B} \uAC00\uC871\uB9CC \uBB3C\uC744 \uC904 \uC218 \uC788\uC5B4\uC694"}</button>
        <div class="card"><b>\uC624\uB298 \uBB3C \uC900 \uAC00\uC871</b><div class="chips-row">${r.todayWho.length?r.todayWho.map(o=>{var l;return`<span class="who-chip" style="--c:${Te(((l=Ut(o))==null?void 0:l.look.outfit)||"#ccc")}">${Te(Qt(o))}</span>`}).join(""):'<span class="muted">\uC544\uC9C1 \uC5C6\uC5B4\uC694</span>'}</div></div>
        <div class="week">${a.map(o=>`<div><i style="height:${8+o.n*12}px"></i><small>${mn(o.k,!1).replace("\uC6D4 ","/").replace("\uC77C","")}</small></div>`).join("")}</div>`,t.querySelector(".t-water").onclick=()=>{Xx()&&setTimeout(i,60)}};return i(),wn(),yo(i)}}}function Sc(){ei("\u{1F331} "+Ai().name,Dd())}var Yx="family-guest-look";function fi(){let n=vt();if(n)return{...n.look};try{let e=JSON.parse(localStorage.getItem(Yx)||"null");if(e)return e}catch{}return{outfit:Ji[Math.floor(Math.random()*Ji.length)],hair:wa[Math.floor(Math.random()*5)],longHair:Math.random()<.5}}var Zx=[["kid","\uC5B4\uB9B0\uC774"],["teen","\uCCAD\uC18C\uB144"],["adult","\uC5B4\uB978"],["senior","\uC5B4\uB974\uC2E0"]],Jx=[["f","\uC5EC\uC790"],["m","\uB0A8\uC790"],["","\uB9D0 \uC548 \uD560\uB798\uC694"]],Kx=[["","\uC5C6\uC74C"],["cap","\uC57C\uAD6C \uBAA8\uC790"],["beanie","\uD138\uBAA8\uC790"],["flower","\uAF43\uD540"]],Qx=()=>"u"+Date.now().toString(36).slice(-5)+Math.random().toString(36).slice(2,6);function L0({create:n=!1,onDone:e}={}){let t=n?null:vt(),i=n?{outfit:Ji[Math.floor(Math.random()*Ji.length)],hair:wa[Math.floor(Math.random()*4)],skin:ko[1],hairStyle:"short",gender:"",age:"adult",glasses:!1,hat:""}:{hairStyle:fi().longHair?"long":"short",age:fi().kid?"kid":"adult",skin:ko[1],...fi()},r=n?"":(t==null?void 0:t.nick)||(t?t.name:"")||"",s=n?"":(t==null?void 0:t.birthday)||"",a=(h,u)=>`<div class="seg wrap">${u.map(([d,f])=>{var m;return`<button type="button" data-k="${h}" data-v="${d}" class="${((m=i[h])!=null?m:"")===d?"on":""}">${f}</button>`}).join("")}</div>`,o=(h,u)=>`<div class="sw">${u.map(d=>`<button type="button" class="sw-c${i[h]===d?" on":""}" data-k="${h}" data-v="${d}" style="--c:${d}" aria-label="${d}"></button>`).join("")}</div>`,l=h=>{let u=h.querySelector(".look-preview"),d=h.querySelector(".look-opts"),f=()=>{var v;let y=(v=hn.portrait)==null?void 0:v.call(hn,{...i,kid:i.age==="kid",longHair:["long","bob"].includes(i.hairStyle)});u.innerHTML=y?`<img class="look-img" src="${y}" alt="">`:ns({...i,kid:i.age==="kid",longHair:i.hairStyle==="long"},"big")},m=()=>{d.innerHTML=`
        <b>\uC131\uBCC4</b>${a("gender",Jx)}
        <b>\uB098\uC774</b>${a("age",Zx)}
        <b>\uD53C\uBD80\uC0C9</b>${o("skin",ko)}
        <b>\uBA38\uB9AC \uBAA8\uC591</b>${a("hairStyle",w0)}
        <b>\uBA38\uB9AC \uC0C9</b>${o("hair",wa)}
        <b>\uC637 \uC0C9</b>${o("outfit",Ji)}
        <b>\uC548\uACBD</b>${a("glasses",[["0","\uC548 \uC368\uC694"],["1","\u{1F453} \uC368\uC694"]])}
        <b>\uBAA8\uC790</b>${a("hat",Kx)}`,d.querySelectorAll('[data-k="glasses"]').forEach(y=>y.classList.toggle("on",y.dataset.v==="1"==!!i.glasses)),d.querySelectorAll("[data-k]").forEach(y=>y.onclick=()=>{let v=y.dataset.k,b=y.dataset.v;i[v]=v==="glasses"?b==="1":b,Ye(6),Qe.sfx("pop"),m(),f()})},g=h.querySelector(".lk-nick"),p=h.querySelector(".lk-bm"),x=h.querySelector(".lk-bd");g.value=r,/^\d{2}-\d{2}$/.test(s)&&(p.value=String(+s.slice(0,2)),x.value=String(+s.slice(3))),m(),f(),h.querySelector(".lk-save").onclick=async()=>{var v;if(r=g.value.trim().replace(/\s+/g," ").slice(0,10),!r){g.focus(),Et("\uB2C9\uB124\uC784\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694 \u270F\uFE0F");return}s=p.value&&x.value?`${String(p.value).padStart(2,"0")}-${String(x.value).padStart(2,"0")}`:"";let y={...i,kid:i.age==="kid",longHair:["long","bob"].includes(i.hairStyle),nick:r,bday:s};if(n||Cr()||!_e()){let b=Qx();await Kt("looks",{id:b,who:b,look:{...y,joined:new Date().toISOString()}}),Aa(b)}else await Kt("looks",{id:_e(),who:_e(),look:{...y,joined:((v=vt())==null?void 0:v.joined)||i.joined||""}});Rd("family:look",y),Et(n?`\u2728 \uBC18\uAC00\uC6CC\uC694, ${r}! \uB9C8\uC744\uC5D0 ${r}\uB124 \uC9D1\uC774 \uC0DD\uACBC\uC5B4\uC694`:"\u2728 \uC0C8 \uBAA8\uC2B5\uC73C\uB85C \uBC14\uB00C\uC5C8\uC5B4\uC694",3200),Ec(),e==null||e()}},c=h=>Array.from({length:h},(u,d)=>`<option value="${d+1}">${d+1}</option>`).join("");return{html:`<div class="look-box">
      <div class="look-preview"></div>
      <label class="lk-row"><b>\uB2C9\uB124\uC784</b><input class="field lk-nick" maxlength="10" placeholder="\uB9C8\uC744\uC5D0\uC11C \uBD80\uB97C \uC774\uB984 (10\uC790\uAE4C\uC9C0)" autocomplete="off" /></label>
      <div class="look-opts"></div>
      <b>\uC0DD\uC77C <small class="muted">(\uC120\uD0DD \xB7 \uADF8\uB0A0 \uC9D1 \uC55E\uC5D0 \uCF00\uC774\uD06C\uAC00 \uC0DD\uACA8\uC694)</small></b>
      <div class="lk-bday"><select class="field lk-bm"><option value="">\uC6D4</option>${c(12)}</select><select class="field lk-bd"><option value="">\uC77C</option>${c(31)}</select></div>
      <button class="btn pink lk-save" type="button" style="width:100%;margin-top:14px;padding:14px">${n?"\u2728 \uC774 \uCE90\uB9AD\uD130\uB85C \uC2DC\uC791\uD560\uB798\uC694":"\u2728 \uC774 \uBAA8\uC2B5\uC73C\uB85C \uD560\uB798\uC694"}</button>
      <p class="muted center">\uBC14\uAFBC \uBAA8\uC2B5\uC740 \uB9C8\uC744 \uC0AC\uB78C\uB4E4\uC5D0\uAC8C\uB3C4 \uBCF4\uC5EC\uC694 (\uB0B4 \uC9D1 \uC55E\uC758 \uB098)</p>
    </div>`,mount:l}}function wc(){ei("\u{1F3A8} \uB0B4 \uCE90\uB9AD\uD130 \uAFB8\uBBF8\uAE30",L0())}function Tc(n){ei("\u2728 \uB0B4 \uCE90\uB9AD\uD130 \uB9CC\uB4E4\uAE30",L0({create:!0,onDone:n}))}var Ad=new Map;function P0(n,e){e&&Ad.set(n,e)}var Ac=(n,e)=>Ad.has(n)?`<img class="char-img" src="${Ad.get(n)}" alt="" draggable="false">`:ns(e,"big");function e_(n=_e(),{carousel:e=!1}={}){return`<div class="who-grid${e?" carousel":""}">
    ${Dt().map(t=>`<button type="button" class="who-btn${n===t.id?" on":""}" data-id="${Te(t.id)}" style="--c:${Te(t.look.outfit||"#8FB8DE")}" aria-label="${Te(t.nick||t.nick||t.role||t.name)}"><span class="char-pic">${Ac(t.id,t.look)}</span><b>${Te(t.nick||t.nick||t.role||t.name)}</b><small>${Te(t.nick?"":t.role?t.name:"")}</small></button>`).join("")}
    <button type="button" class="who-btn guest${n==="guest"?" on":""}" data-id="guest" style="--c:#C9BBA9" aria-label="\uC190\uB2D8\uC73C\uB85C \uAD6C\uACBD\uB9CC"><span class="char-pic"><span class="guest-ic">\u{1F440}</span></span><b>\uAD6C\uACBD\uB9CC</b><small>\uC190\uB2D8</small></button>
  </div>`}function t_(n){let e=r=>{r.querySelectorAll(".who-btn").forEach(s=>s.onclick=()=>{Ye(10),Qe.sfx("pop"),Aa(s.dataset.id),n==null||n(s.dataset.id),Ec(),Et(s.dataset.id==="guest"?"\u{1F440} \uC190\uB2D8\uC73C\uB85C \uAD6C\uACBD\uD574\uC694":`\u{1F64B} ${Yi(Qt(s.dataset.id),"\uC73C\uB85C/\uB85C")} \uB4E4\uC5B4\uC654\uC5B4\uC694`)})};return{html:`<p class="muted">\uB2E4\uB978 \uD734\uB300\uD3F0\uC5D0\uC11C \uC774\uBBF8 \uB9CC\uB4E0 \uCE90\uB9AD\uD130\uAC00 \uC788\uC73C\uBA74 \uACE8\uB77C \uC8FC\uC138\uC694. \uC5C6\uC73C\uBA74 \uC0C8\uB85C \uB9CC\uB4E4\uC5B4\uC694</p>${e_()}
    <button class="btn pink lk-new" type="button" style="width:100%;margin-top:6px;padding:12px">\u2728 \uC0C8 \uCE90\uB9AD\uD130 \uB9CC\uB4E4\uAE30</button>`,mount:r=>{e(r),r.querySelector(".lk-new").onclick=()=>Tc(()=>n==null?void 0:n(_e()))}}}function Ud(n){ei("\u{1F64B} \uB0B4 \uCE90\uB9AD\uD130 \uACE0\uB974\uAE30",t_(n))}function n_(n){return{html:'<div class="lockset"></div>',mount:t=>{let i=t.querySelector(".lockset");(()=>{var c;let s=_s(),a=s.locked&&!!Ar();i.innerHTML=`
        <div class="card center">
          <div style="font-size:40px">${s.locked?"\u{1F512}":"\u{1F513}"}</div>
          <b>${s.locked?"\uAC00\uC871 \uC554\uD638\uAC00 \uAC78\uB824 \uC788\uC5B4\uC694":"\uC9C0\uAE08\uC740 \uC554\uD638 \uC5C6\uC774 \uB204\uAD6C\uB098 \uB4E4\uC5B4\uC640\uC694"}</b>
          <p class="muted" style="margin:6px 0 0">${s.remote?"\uC554\uD638\uB294 \uAD6C\uAE00 \uC2DC\uD2B8\uC5D0 \uC800\uC7A5\uB3FC\uC11C \uAC00\uC871 \uBAA8\uB450\uC5D0\uAC8C \uB611\uAC19\uC774 \uC801\uC6A9\uB3FC\uC694.":"\u26A0\uFE0F \uAD6C\uAE00 \uC2DC\uD2B8\uB97C \uC5F0\uACB0\uD558\uC9C0 \uC54A\uC544\uC11C <b>\uC774 \uD734\uB300\uD3F0\uC5D0\uC11C\uB9CC</b> \uC7A0\uACA8\uC694. \uAC00\uC871 \uBAA8\uB450\uC5D0\uAC8C \uAC78\uB824\uBA74 \uC2DC\uD2B8\uB97C \uC5F0\uACB0\uD558\uC138\uC694 (tools/\uAC00\uC871_\uC2DC\uD2B8_\uC5F0\uACB0.md)."}</p>
        </div>
        <form class="ls-form" autocomplete="off">
          ${s.locked&&!a?'<input class="field ls-cur" type="password" maxlength="30" placeholder="\uC9C0\uAE08 \uC554\uD638" aria-label="\uC9C0\uAE08 \uC554\uD638">':""}
          <input class="field ls-new" type="password" maxlength="30" placeholder="${s.locked?"\uC0C8 \uC554\uD638":"\uC815\uD560 \uC554\uD638 (\uC22B\uC790\xB7\uAE00\uC790)"}" aria-label="\uC0C8 \uC554\uD638">
          <input class="field ls-new2" type="password" maxlength="30" placeholder="\uD55C \uBC88 \uB354" aria-label="\uC0C8 \uC554\uD638 \uD655\uC778">
          <input class="field ls-hint" maxlength="40" placeholder="\uD78C\uD2B8 (\uC120\uD0DD, \uC608: \uC6B0\uB9AC \uC9D1 \uD604\uAD00 \uBE44\uBC00\uBC88\uD638 \uC55E \uB124 \uC790\uB9AC)" aria-label="\uD78C\uD2B8" value="${Te(s.hint||"")}">
          <button class="btn pink" type="submit" style="width:100%;margin-top:10px">${s.locked?"\u{1F512} \uC554\uD638 \uBC14\uAFB8\uAE30":"\u{1F512} \uC554\uD638 \uAC78\uAE30"}</button>
        </form>
        ${s.locked?'<button class="btn ls-off" type="button" style="width:100%;margin-top:8px">\u{1F513} \uC554\uD638 \uC5C6\uC560\uAE30 (\uB204\uAD6C\uB098 \uB4E4\uC5B4\uC624\uAC8C)</button>':""}
        <p class="muted center" style="font-size:12.5px">\uC554\uD638\uB294 \uB2E8\uD1A1\uBC29 \uB9C1\uD06C\uC640 \uAC19\uC740 \uBA54\uC2DC\uC9C0\uC5D0 \uC4F0\uC9C0 \uB9D0\uACE0 \uB530\uB85C \uC54C\uB824 \uC8FC\uC138\uC694</p>`;let o=()=>{var h;return((h=i.querySelector(".ls-cur"))==null?void 0:h.value.trim())||""},l=async(h,u)=>{let d=await jp({current:o(),next:h,hint:u});if(!d.ok){Et(d.error==="code"?"\uC9C0\uAE08 \uC554\uD638\uAC00 \uB2EC\uB77C\uC694 \u{1F512}":"\uC5F0\uACB0\uC774 \uC548 \uB3FC\uC694. \uC7A0\uC2DC \uB4A4 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694");return}Et(h?"\u{1F512} \uAC00\uC871 \uC554\uD638\uB97C \uAC78\uC5C8\uC5B4\uC694":"\u{1F513} \uC774\uC81C \uC554\uD638 \uC5C6\uC774 \uB204\uAD6C\uB098 \uB4E4\uC5B4\uC640\uC694",2800),Ye(15),Qe.sfx("chime"),n==null||n(),Ec()};i.querySelector(".ls-form").onsubmit=h=>{h.preventDefault();let u=i.querySelector(".ls-new").value.trim(),d=i.querySelector(".ls-new2").value.trim();if(!u){Et("\uC815\uD560 \uC554\uD638\uB97C \uC801\uC5B4 \uC8FC\uC138\uC694");return}if(u!==d){Et("\uB450 \uBC88 \uC801\uC740 \uC554\uD638\uAC00 \uB2EC\uB77C\uC694");return}l(u,i.querySelector(".ls-hint").value)},(c=i.querySelector(".ls-off"))==null||c.addEventListener("click",()=>l("",""))})()}}}function I0(n){ei("\u{1F512} \uAC00\uC871 \uC554\uD638",n_(n))}function i_(){let n=Dt().filter(i=>i.id!==_e()),e=new Set(n.slice(0,5).map(i=>i.id)),t=i=>{let r=()=>i.querySelectorAll(".who-btn").forEach(s=>s.classList.toggle("on",e.has(s.dataset.id)));i.querySelectorAll(".who-btn").forEach(s=>s.onclick=()=>{let a=s.dataset.id;e.has(a)?e.delete(a):e.size<5?e.add(a):Et("\uD55C \uBC88\uC5D0 \uB2E4\uC12F \uBA85\uAE4C\uC9C0 \uAC19\uC774 \uCC0D\uC744 \uC218 \uC788\uC5B4\uC694"),Ye(6),r()}),i.querySelector(".pp-go").onclick=()=>{Ec(),setTimeout(()=>{var s;return(s=hn.takePhoto)==null?void 0:s.call(hn,[...e])},260)},r()};return{html:`<p class="muted">\uB204\uAD6C\uB791 \uAC19\uC774 \uCC0D\uC744\uAE4C\uC694? (\uCD5C\uB300 5\uBA85)</p>
      <div class="who-grid">${n.map(i=>`<button type="button" class="who-btn" data-id="${Te(i.id)}">${ns(i.look)}<b>${Te(i.nick||i.role||i.name)}</b></button>`).join("")}</div>
      <button class="btn pink pp-go" type="button" style="width:100%;margin-top:12px;padding:14px">\u{1F4F8} 3 \xB7 2 \xB7 1 \uCC0D\uAE30</button>`,mount:t}}function F0(){ei("\u{1F4F8} \uAC00\uC871\uC0AC\uC9C4",i_())}var rs=["green","autumn","winter"],xo={green:{label:"\uBD04\xB7\uC5EC\uB984",emoji:"\u{1F33F}",theme:"#DDEFD0",toast:"\u{1F33F} \uC2F1\uADF8\uB7EC\uC6B4 \uBD04\xB7\uC5EC\uB984 \uC232\uC774\uC5D0\uC694"},autumn:{label:"\uAC00\uC744",emoji:"\u{1F342}",theme:"#F3DEC0",toast:"\u{1F342} \uB2E8\uD48D\uC774 \uB4E0 \uAC00\uC744 \uB9C8\uC744\uC774\uC5D0\uC694"},winter:{label:"\uACA8\uC6B8",emoji:"\u2744\uFE0F",theme:"#E4ECF4",toast:"\u2744\uFE0F \uB208 \uB0B4\uB9B0 \uACA8\uC6B8 \uB9C8\uC744\uC774\uC5D0\uC694"}},D0="family-season",r_=()=>{let n=ji(si()).getMonth()+1;return n>=9&&n<=11?"autumn":n===12||n<=2?"winter":"green"};function s_(){var t;let n=location.hash;if(/(?:^|[#&])(autumn|fall)(?:&|$)/.test(n))return"autumn";if(/(?:^|[#&])winter(?:&|$)/.test(n))return"winter";if(/(?:^|[#&])(green|spring|summer)(?:&|$)/.test(n))return"green";try{let i=localStorage.getItem(D0);if(rs.includes(i))return i}catch{}let e=String(((t=window.FAMILY)==null?void 0:t.season)||"green");return e==="auto"?r_():rs.includes(e)?e:"green"}var ma=s_(),gi=()=>ma;function Bd(){var e;let n=document.body;n&&rs.forEach(t=>n.classList.toggle(`season-${t}`,t===ma)),(e=document.querySelector('meta[name="theme-color"]'))==null||e.setAttribute("content",xo[ma].theme)}Bd();document.body||addEventListener("DOMContentLoaded",Bd);function Od(n,{save:e=!0}={}){if(!rs.includes(n))return ma;if(ma=n,e)try{localStorage.setItem(D0,n)}catch{}Bd();try{dispatchEvent(new CustomEvent("family:season",{detail:n}))}catch{}return n}var U0=()=>Od(rs[(rs.indexOf(ma)+1)%rs.length]);var H0=[[0,34,0,10,3.2],[0,-3,0,-12.6,2.6],[-34,-10,34,-10,2.6],[1.5,20.6,24,25.4,2.4],[-6,3,-12,2,2.4],[-6,0,-18,-1.5,2.4],[6,7,10,9,2.2],[-2,20,-10,19,2.2]],yi={x:0,z:4,r:7.5},Eo={green:{day:{top:"#6FB7E8",mid:"#BFE3F7",horizon:"#EAF6E4",fog:"#E3F1DC",sun:"#FFF4DE",sunI:2.4,hemi:"#F4FBEF",ground:"#B9D8A0",hemiI:1.9,lamps:!1,stars:!1},dusk:{top:"#6A7FC4",mid:"#F6A77A",horizon:"#FFD39B",fog:"#F9D2A0",sun:"#FFB07A",sunI:2,hemi:"#FFD8B6",ground:"#A9B890",hemiI:1.6,lamps:!0,stars:!1},night:{top:"#0F1B3D",mid:"#24386A",horizon:"#3F5A78",fog:"#3D5674",sun:"#B8C8FF",sunI:1.1,hemi:"#8FA8D8",ground:"#3E5048",hemiI:1.25,lamps:!0,stars:!0}},autumn:{day:{top:"#78B4DC",mid:"#F3D9AE",horizon:"#FFCB8E",fog:"#F6D2A2",sun:"#FFD9A8",sunI:2.35,hemi:"#FFEBD2",ground:"#C7B27E",hemiI:1.85,lamps:!1,stars:!1},dusk:{top:"#5E6FB0",mid:"#F29A64",horizon:"#FFC27A",fog:"#F7B97E",sun:"#FFA066",sunI:2,hemi:"#FFCFA6",ground:"#A88E6E",hemiI:1.6,lamps:!0,stars:!1},night:{top:"#121B38",mid:"#2C3762",horizon:"#5B4766",fog:"#4E4462",sun:"#B8C4F0",sunI:1.05,hemi:"#8E9BCB",ground:"#3E4552",hemiI:1.2,lamps:!0,stars:!0}},winter:{day:{top:"#8FB4D8",mid:"#D8E6F2",horizon:"#F4F1EC",fog:"#E6EDF3",sun:"#FFF6EA",sunI:2.15,hemi:"#F2F6FA",ground:"#D9E2EA",hemiI:2,lamps:!1,stars:!1},dusk:{top:"#5A6AA8",mid:"#D99AA0",horizon:"#F2C7A8",fog:"#E5C8C2",sun:"#FFC6A0",sunI:1.9,hemi:"#EAD8E0",ground:"#B8B8C8",hemiI:1.65,lamps:!0,stars:!1},night:{top:"#0E1A36",mid:"#26365E",horizon:"#4A5A80",fog:"#46557A",sun:"#C8D6FF",sunI:1.15,hemi:"#9AAAD8",ground:"#5A6680",hemiI:1.4,lamps:!0,stars:!0}}},It=Eo.green;function a_(n,e,t,i,r,s){let a=r-t,o=s-i,l=Math.max(0,Math.min(1,((n-t)*a+(e-i)*o)/(a*a+o*o)));return Math.hypot(n-(t+a*l),e-(i+o*l))}function N0(n,e,t=.6){return Math.hypot(n-yi.x,e-yi.z)<yi.r+t?!0:H0.some(i=>a_(n,e,i[0],i[1],i[2],i[3])<i[4]/2+t)}function o_(){let n=new Ue(400,32,16),e=new Jn({side:Zt,depthWrite:!1,fog:!1,uniforms:{top:{value:new Me(It.day.top)},mid:{value:new Me(It.day.mid)},horizon:{value:new Me(It.day.horizon)},sunDir:{value:new A(.5,.45,-.75).normalize()},sunK:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 top; uniform vec3 mid; uniform vec3 horizon; uniform vec3 sunDir; uniform float sunK; varying vec3 vDir;
      void main(){
        float h = clamp(vDir.y, -0.2, 1.0);
        vec3 c = mix(horizon, mid, smoothstep(-0.02, 0.18, h));
        c = mix(c, top, smoothstep(0.18, 0.75, h));
        float s = max(dot(normalize(vDir), sunDir), 0.0);
        c += (vec3(1.0, 0.86, 0.6) * pow(s, 40.0) * 0.55 + vec3(1.0, 0.95, 0.8) * pow(s, 400.0) * 1.2) * sunK;
        gl_FragColor = vec4(c, 1.0);
      }`}),t=new ue(n,e);t.renderOrder=-1;let i=320,r=new Float32Array(i*3);for(let o=0;o<i;o++){let l=Ee(0,Math.PI*2),c=Ee(.06,1),h=380,u=h*Math.sqrt(1-c*c);r.set([Math.cos(l)*u,h*c,Math.sin(l)*u],o*3)}let s=new it;s.setAttribute("position",new pt(r,3));let a=new Zr(s,new fr({color:"#FFF8D6",size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.9,depthWrite:!1}));return a.visible=!1,a.renderOrder=-1,t.add(a),t.userData.setPalette=o=>{e.uniforms.top.value.set(o.top),e.uniforms.mid.value.set(o.mid),e.uniforms.horizon.value.set(o.horizon),e.uniforms.sunK.value=o.stars?.15:1,a.visible=!!o.stars},t}var qd=[];function G0(n){let e=new kt({color:n[gi()]||n.green,gradientMap:Dn});return qd.push({mat:e,cols:n}),e}function ti(n,...e){return qd.push({obj:n,seasons:e}),n.userData.seasons=e,n.visible=e.includes(gi()),n}function l_(n){qd.forEach(e=>{e.mat?e.mat.color.set(e.cols[n]||e.cols.green):e.obj.visible=e.seasons.includes(n)})}var ss=n=>n.map(e=>G0(e)),zd=["#F4F7FB","#E3EAF2","#FFFFFF"],kd={maple:ss([0,1,2].map(n=>({green:["#7DBB5E","#8FC970","#6EAD52"][n],autumn:["#D9553B","#E8763E","#C9452F"][n],winter:zd[n]}))),ginkgo:ss([0,1,2].map(n=>({green:["#F7D3DC","#FBE4EA","#F2BFCD"][n],autumn:["#F2C14E","#F7D46A","#E3AE36"][n],winter:zd[(n+1)%3]}))),persimmon:ss([0,1,2].map(n=>({green:["#6FA858","#82B868","#5F9A4C"][n],autumn:["#A9B55A","#C2BD5E","#97A64C"][n],winter:zd[(n+2)%3]}))),pine:ss([0,1,2].map(n=>({green:["#3F6E45","#4C7D50","#386340"][n],autumn:["#4F7A4A","#5C8A52","#476F43"][n],winter:["#567F64","#EEF3F1","#6B8F78"][n]})))},c_=ss([0,1,2].map(n=>({green:["#8CC47A","#9ED08A","#7DB86C"][n],autumn:["#B98A3E","#C76B3C","#93A35A"][n],winter:["#E9EFF4","#DDE6EE","#F4F7FA"][n]}))),h_=ss([0,1,2,3].map(n=>({green:["#9CCB84","#AED596","#8FBF78","#A7CF8C"][n],autumn:["#B7AE66","#C79A55","#A9A55E","#C4884A"][n],winter:["#E8EEF3","#DCE4EC","#F2F5F8","#D5DEE8"][n]}))),u_=ss([0,1,2,3].map(n=>({green:["#F4B8C0","#FFFFFF","#F7D58B","#B9A4E8"][n],autumn:["#D9553B","#F2C14E","#E8763E","#B9773E"][n],winter:["#FFFFFF","#C94F4F","#E3EAF2","#9DB7D5"][n]}))),jd=n=>c_[n%3],Ic=n=>u_[n%4];function Rc(n,e,{shadows:t=!0}={}){let i=new Map;return e.forEach(r=>{r.updateMatrixWorld(!0),r.traverse(s=>{if(!s.isMesh)return;let a=null;for(let c=s;c;c=c.parent)if(c.userData.seasons){a=c.userData.seasons;break}let o=`${s.geometry.uuid}|${s.material.uuid}|${a||""}`,l=i.get(o);l||i.set(o,l={geo:s.geometry,mat:s.material,seasons:a,list:[]}),l.list.push(s.matrixWorld.clone())})}),i.forEach(r=>{let s=new di(r.geo,r.mat,r.list.length);r.list.forEach((a,o)=>s.setMatrixAt(o,a)),s.castShadow=t&&!r.mat.isMeshBasicMaterial,s.receiveShadow=!r.mat.isMeshBasicMaterial,s.computeBoundingSphere(),n.add(r.seasons?ti(s,...r.seasons):s)}),i.size}var d_=new A,p_=new A,B0=new Be;function Xd(n){n.updateMatrixWorld(!0);let e=new Pe().copy(n.matrixWorld).invert(),t=new Map;n.traverse(r=>{var h;if(!r.isMesh||r.isInstancedMesh||Array.isArray(r.material))return;for(let u=r;u&&u!==n;u=u.parent)if(u.userData.dynamic)return;let s=r.geometry,a=s.attributes;if(!a.position||!a.normal||!a.uv||(h=s.morphAttributes)!=null&&h.position)return;let o=null;for(let u=r;u&&u!==n;u=u.parent)if(u.userData.seasons){o=u.userData.seasons;break}let l=`${r.material.uuid}|${o||""}`,c=t.get(l);c||t.set(l,c={mat:r.material,seasons:o,items:[],cast:!1,verts:0,idx:0}),c.items.push({o:r,g:s,m:new Pe().multiplyMatrices(e,r.matrixWorld)}),c.cast=c.cast||r.castShadow,c.verts+=a.position.count,c.idx+=s.index?s.index.count:a.position.count});let i=0;return t.forEach(r=>{if(r.items.length<2)return;let s=new Float32Array(r.verts*3),a=new Float32Array(r.verts*3),o=new Float32Array(r.verts*2),l=new(r.verts>65535?Uint32Array:Uint16Array)(r.idx),c=0,h=0;r.items.forEach(({o:f,g:m,m:g})=>{let p=m.attributes.position,x=m.attributes.normal,y=m.attributes.uv;B0.getNormalMatrix(g);for(let v=0;v<p.count;v++)d_.fromBufferAttribute(p,v).applyMatrix4(g).toArray(s,(c+v)*3),p_.fromBufferAttribute(x,v).applyMatrix3(B0).normalize().toArray(a,(c+v)*3),o[(c+v)*2]=y.getX(v),o[(c+v)*2+1]=y.getY(v);if(m.index)for(let v=0;v<m.index.count;v++)l[h++]=m.index.getX(v)+c;else for(let v=0;v<p.count;v++)l[h++]=v+c;c+=p.count,f.parent.remove(f)});let u=new it;u.setAttribute("position",new pt(s,3)),u.setAttribute("normal",new pt(a,3)),u.setAttribute("uv",new pt(o,2)),u.setIndex(new pt(l,1)),u.computeBoundingSphere();let d=new ue(u,r.mat);d.castShadow=r.cast,d.receiveShadow=!0,n.add(r.seasons?ti(d,...r.seasons):d),i+=r.items.length-1}),i}var Hd={};function O0(n){if(Hd[n])return Hd[n];let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),i={green:{base:"#A9D18E",dots:["#9DC883","#B4D899","#A2CC87","#BEDDA3"],bits:["#FFFFFF","#F7D84E","#F4B8C0"],nb:40},autumn:{base:"#B7C27C",dots:["#ABB86F","#C3CB88","#A6B266","#CBC88E"],bits:["#E0863E","#D35F3A","#E8B547","#B9773E"],nb:90},winter:{base:"#EEF3F8",dots:["#E3EAF1","#FFFFFF","#DAE3EC","#F6F9FB"],bits:["#B9C9B3","#C8D2DA"],nb:30}}[n]||{};t.fillStyle=i.base,t.fillRect(0,0,256,256);for(let s=0;s<1400;s++)t.fillStyle=i.dots[s%i.dots.length],t.globalAlpha=.5,t.beginPath(),t.arc(Math.random()*256,Math.random()*256,Math.random()*3+1,0,7),t.fill();for(let s=0;s<i.nb;s++)t.fillStyle=i.bits[s%i.bits.length],t.globalAlpha=.6,t.beginPath(),t.ellipse(Math.random()*256,Math.random()*256,2.6,1.5,Math.random()*3,0,7),t.fill();let r=ct(e);return r.wrapS=r.wrapT=hi,r.repeat.set(60,60),Hd[n]=r,r}function m_(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.fillStyle="#E8D3AE",e.fillRect(0,0,128,128);for(let i=0;i<18;i++)e.fillStyle=["#DEC59C","#F0E0C0","#D9BF95"][i%3],e.beginPath(),e.ellipse(Math.random()*128,Math.random()*128,10+Math.random()*12,8+Math.random()*8,Math.random()*3,0,7),e.fill();let t=ct(n);return t.wrapS=t.wrapT=hi,t}var z0=new we(.22,.32,2,8),Yd=new _t(1.3,1),f_=new xn(1.35,1.9,8),g_=new Ue(.15,8,6);function Gd(n,e,{kind:t="maple",s:i=1}={}){let r=new ge;if(t==="pine")r.add(Q(z0,"#7E553A",0,.8,0)),[[1.9,1],[2.85,.8],[3.65,.58]].forEach(([s,a],o)=>{let l=Q(f_,kd.pine[o],0,s,0);l.scale.setScalar(a),r.add(l)});else{r.add(Q(z0,"#8F6243",0,1,0));let s=kd[t]||kd.maple;if([[0,2.6,0,1.2],[.8,2.2,.2,.85],[-.75,2.3,-.2,.9],[.1,3.3,-.1,.8]].forEach(([o,l,c,h],u)=>{let d=Q(Yd,s[u%3],o,l,c);d.scale.setScalar(h),r.add(d)}),t==="persimmon"){let o=new ge;[[.9,2.5,.9],[-.5,2,1],[.3,3,1.15],[-1.2,2.6,.4],[1.3,2,-.2],[.1,1.9,1.25],[-.6,3.4,.7]].forEach(([l,c,h])=>o.add(Q(g_,"#F28C28",l,c,h))),o.userData.seasons=["autumn"],r.add(o)}}return r.position.set(n,0,e),r.scale.setScalar(i),r.rotation.y=Math.random()*6,r}function y_(n,e,t=1,i=0){let r=new ge;return[[0,.45,0,.6],[.5,.35,.1,.45],[-.45,.35,-.05,.45]].forEach(([s,a,o,l])=>{let c=Q(Yd,jd(i),s,a,o);c.scale.setScalar(l),r.add(c)}),r.position.set(n,0,e),r.scale.setScalar(t),r}var _o={post:new we(.09,.13,2.8,8),base:new we(.24,.24,.12,8),glass:new we(.2,.2,.42,6),cap:new xn(.34,.28,6),glassMat:new Oe({color:"#FFD27A"})};function v_(n,e){let t=new ge;t.add(Q(_o.post,"#5E4433",0,1.4,0)),t.add(Q(_o.base,"#5E4433",0,.06,0));let i=new ue(_o.glass,_o.glassMat);return i.position.y=3,t.add(i),t.add(Q(_o.cap,"#5E4433",0,3.34,0)),t.position.set(n,0,e),t}var Vd,Cc;function x_(n,e){if(!Vd){let s=document.createElement("canvas");s.width=s.height=128;let a=s.getContext("2d"),o=a.createRadialGradient(64,64,4,64,64,64);o.addColorStop(0,"rgba(255,236,170,.95)"),o.addColorStop(.35,"rgba(255,220,140,.45)"),o.addColorStop(1,"rgba(255,200,120,0)"),a.fillStyle=o,a.fillRect(0,0,128,128),Vd=ct(s)}let t=new ge,i=new Pn(new vn({map:Vd,blending:gc,depthWrite:!1,transparent:!0,opacity:.9}));i.position.set(0,3,0),i.scale.set(3.6,3.6,1),Cc=Cc||{geo:new Fn(2.6,24),mat:new Oe({color:"#FFE4A8",transparent:!0,opacity:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})};let r=new ue(Cc.geo,Cc.mat);return r.rotation.x=-Math.PI/2,r.position.y=.04,t.add(i,r),t.position.set(n,0,e),t}var Lc={seat:new me(1.8,.08,.16),back:new me(1.8,.14,.06),leg:new me(.08,.5,.5),arm:new me(.08,.6,.06)};function __(n,e,t=0){let i=new ge,r="#B07A4F";for(let s=0;s<3;s++)i.add(Q(Lc.seat,r,0,.5,-.2+s*.2));for(let s=0;s<2;s++)i.add(Q(Lc.back,r,0,.75+s*.2,-.32));for(let s of[-.75,.75])i.add(Q(Lc.leg,"#6E4B33",s,.25,0)),i.add(Q(Lc.arm,"#6E4B33",s,.8,-.32));return i.position.set(n,0,e),i.rotation.y=t,i}function V0(n,e,t=3.2){let i=new ge,r=["#F4B8C0","#FFFFFF","#F7D58B","#F9C59E","#E88A98"],s=[];for(let a=0;a<5;a++){let o=a/5*Math.PI*2,l=Math.cos(o)*.35,c=Math.sin(o)*.35,h=t+a%2*.35,u=Q(new Ue(.34,14,12),r[a],l,h,c);u.scale.y=1.18;let d=new ic(new it().setFromPoints([new A(0,.4,0),new A(l,h-.4,c)]),new oo({color:"#B8A59B"}));i.add(u,d),s.push({b:u,base:h,off:Math.random()*6})}return i.add(Q(new Ue(.12,8,6),"#C9637A",0,.4,0)),i.add(Q(new we(.2,.25,.4,10),"#FFF3EA",0,.2,0)),i.position.set(n,0,e),i.userData.update=a=>s.forEach(o=>{o.b.position.y=o.base+Math.sin(a*1.4+o.off)*.12,o.b.rotation.z=Math.sin(a+o.off)*.08}),i}function E_(n,e,t=0){let i=new ge;i.add(Q(new we(.06,.07,2.6,6),"#8F6243",0,1.3,0));let r=Q(new we(.05,.05,1.9,6),"#8F6243",0,1.75,0);r.rotation.z=Math.PI/2,i.add(r);let s=Q(new me(.75,.75,.3),"#C9452F",0,1.6,0);i.add(s);for(let o of[-1,1])i.add(Q(new me(.45,.22,.24),"#C9452F",o*.55,1.78,0));i.add(Q(new Ue(.32,12,10),"#F1D9A8",0,2.3,0));let a=Q(new xn(.5,.35,12),"#E3B55A",0,2.6,0);i.add(a,Q(new we(.55,.55,.04,14),"#E3B55A",0,2.48,0));for(let o of[-1,1])i.add(new ue(new Ue(.04,6,4),new Oe({color:"#3A2A24"})).translateX(o*.11).translateY(2.33).translateZ(.29));return i.position.set(n,0,e),i.rotation.y=t,i}var Pc=[];function Zd(){return Pc.length||["#FF5A5A","#FFD34D","#6FD3FF","#9BE87A","#FFFFFF"].forEach((n,e)=>Pc.push({mat:new Oe({color:n}),base:new Me(n),off:e*1.3})),Pc.map(n=>n.mat)}function b_(n,e,t=1){let i=new ge;i.add(Q(new we(.22,.3,1,8),"#7E553A",0,.5,0)),i.add(Q(new we(.7,.8,.5,12),"#C94F4F",0,.25,0));let r=["#2F6B3E","#377747","#2A603A","#3E8250"];[[1.6,1.45,1.7],[2.55,1.15,1.4],[3.35,.85,1.1],[4,.55,.85]].forEach(([c,h,u],d)=>i.add(Q(new xn(h,u,12),r[d],0,c,0)));let s=Zd(),a=new Ue(.09,8,6),o=new Ue(.14,10,8);for(let c=0;c<46;c++){let h=c/46,u=1+h*3.2,d=1.35*(1-h*.82)+.05,f=h*Math.PI*9,m=new ue(a,s[c%s.length]);m.position.set(Math.cos(f)*d,u,Math.sin(f)*d),i.add(m)}["#C94F4F","#E2B865","#4A7FB5","#FFFFFF"].forEach((c,h)=>{for(let u=0;u<4;u++){let d=1.3+(u*4+h)%13*.21,f=1.4*(1-(d-1)/3.6)+.08,m=u*1.7+h*.6;i.add(Q(o,c,Math.cos(m)*f,d,Math.sin(m)*f))}});let l=new ue(new mo(.32,0),new Oe({color:"#FFD34D"}));return l.position.y=4.5,l.scale.set(1,1.25,.45),l.userData.dynamic=!0,i.add(l),i.position.set(n,0,e),i.scale.setScalar(t),i.userData.star=l,i}function k0(n,e,t=1,i=!1){let r=new ge,s=i?["#FBFCFE","#EEF3F8","#F6F9FB","#E6EDF4"]:["#D9553B","#E8763E","#F2C14E","#B9773E"];return[[0,.22,0,.75],[.45,.16,.2,.5],[-.4,.15,-.15,.55],[.1,.14,-.45,.45]].forEach(([a,o,l,c],h)=>{let u=Q(Yd,s[h%s.length],a,o,l);u.scale.set(c,c*.4,c),r.add(u)}),r.position.set(n,0,e),r.scale.setScalar(t),r}var M_={green:["#FFFFFF","#F7D84E","#B9A4E8","#F4A6C6","#FFE07A","#9FD3F0"],autumn:["#FFFFFF","#F4A6C6","#E07BB5","#F2C14E","#F6CBE0","#E9894A"]};function S_(n,e){let t=mi?500:900,i=new xn(.07,.4,3),r=new di(i,G0({green:"#8DC175",autumn:"#A9B46C",winter:"#D8E2E8"}),t),s=new _t(.11,0),a=mi?260:480,o=new di(s,new kt({color:"#fff"}),a),l=new Pe,c=new Ln,h=new A,u=new A,d=new oa,f=()=>{for(let x=0;x<20;x++){let y=Math.random()*Math.PI*2,v=Math.sqrt(Math.random())*38,b=Math.cos(y)*v,R=Math.sin(y)*v;if(!N0(b,R)&&!e(b,R))return[b,R]}return[60,60]};for(let x=0;x<t;x++){let[y,v]=f();d.set(Ee(-.2,.2),Ee(0,6),Ee(-.2,.2)),c.setFromEuler(d);let b=Ee(.7,1.4);l.compose(u.set(y,.18*b,v),c,h.set(b,b,b)),r.setMatrixAt(x,l)}for(let x=0;x<a;x++){let[y,v]=f();l.compose(u.set(y,.14,v),c.identity(),h.setScalar(Ee(.8,1.3))),o.setMatrixAt(x,l)}r.receiveShadow=!0,n.add(ti(r,"green","autumn"),o);let m=22,g=new di(new we(.06,.08,.26,6),mt("#F6EBD8"),m),p=new di(new Ue(.17,10,6,0,Math.PI*2,0,Math.PI/2),mt("#D9553B"),m);for(let x=0;x<m;x++){let y=60,v=60;for(let R=0;R<20;R++){let S=Math.random()*Math.PI*2,T=Ee(24,38),z=Math.cos(S)*T,C=Math.sin(S)*T;if(!N0(z,C)&&!e(z,C)){y=z,v=C;break}}let b=Ee(.8,1.5);l.compose(u.set(y,.13*b,v),c.identity(),h.setScalar(b)),g.setMatrixAt(x,l),l.compose(u.set(y,.25*b,v),c.identity(),h.setScalar(b)),p.setMatrixAt(x,l)}return n.add(ti(g,"green","autumn"),ti(p,"green","autumn")),{setSeason(x){let y=M_[x];if(o.visible=!!y,!y)return;let v=y.map(b=>new Me(b));for(let b=0;b<a;b++)o.setColorAt(b,v[b%v.length]);o.instanceColor.needsUpdate=!0}}}function w_(n){let e=[],t=new ge;n.add(t);let i=new Ue(1,12,10),r=new kt({color:"#FFFFFF",emissive:"#FFF4EA",emissiveIntensity:.35});for(let a=0;a<14;a++){let o=new ge,l=4+Math.floor(Math.random()*3);for(let u=0;u<l;u++){let d=new ue(i,r);d.position.set(u*2.2-l,Math.random()*1.2,Math.random()*1.5),d.scale.setScalar(Ee(1.6,2.8)),o.add(d)}let c=Math.random()*Math.PI*2,h=Ee(70,150);o.position.set(Math.cos(c)*h,Ee(28,50),Math.sin(c)*h-30),o.scale.set(1.3,.8,1),t.add(o),e.push({g:o,speed:Ee(.4,1)})}return t.userData.dynamic=!0,{group:t,update:a=>{t.visible&&e.forEach(o=>{o.g.position.x+=o.speed*a,o.g.position.x>170&&(o.g.position.x=-170)})}}}function T_(n){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");if(n==="leaf"){t.fillStyle="#FFFFFF",t.beginPath();for(let i=0;i<10;i++){let r=-Math.PI/2+i/10*Math.PI*2,s=i%2?11:27;t.lineTo(32+Math.cos(r)*s,30+Math.sin(r)*s)}t.closePath(),t.fill(),t.fillRect(31,36,2,22)}else{let i=t.createRadialGradient(32,32,2,32,32,28);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(n==="snow"?.55:.35,"rgba(255,255,255,.85)"),i.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=i,t.fillRect(0,0,64,64)}return ct(e)}var Wd={green:{tex:"fluff",size:.24,fall:.3,drift:1.4,cols:["#FFFFFF","#FFF6D8","#FCE4EC","#FFFFFF"]},autumn:{tex:"leaf",size:.36,fall:1,drift:1,cols:["#D9553B","#E8763E","#F2C14E","#B9773E","#C9452F"]},winter:{tex:"snow",size:.24,fall:.75,drift:.5,cols:["#FFFFFF","#F4F8FF","#FFFFFF"]}};function A_(n){let e=Td?0:mi?160:300;if(!e)return{group:new ge,update(){},setCount(){},setSeason(){}};let t=new Float32Array(e*3),i=[],r=new Float32Array(e*3);for(let u=0;u<e;u++)t[u*3]=Ee(-30,30),t[u*3+1]=Ee(0,9),t[u*3+2]=Ee(-30,30),i.push([Ee(.3,.9),Ee(.3,.8),Ee(0,6)]);let s=new it;s.setAttribute("position",new pt(t,3)),s.setAttribute("color",new pt(r,3));let a=new fr({size:.3,transparent:!0,depthWrite:!1,vertexColors:!0,alphaTest:.1}),o=new Zr(s,a);o.frustumCulled=!1,n.add(o);let l={},c=e,h=Wd.green;return{group:o,setCount(u){c=Math.max(0,Math.min(e,u)),s.setDrawRange(0,c)},setSeason(u){h=Wd[u]||Wd.green,a.map=l[h.tex]||(l[h.tex]=T_(h.tex)),a.size=h.size,a.needsUpdate=!0;let d=h.cols.map(f=>new Me(f));for(let f=0;f<e;f++){let m=d[f%d.length];r.set([m.r,m.g,m.b],f*3)}s.attributes.color.needsUpdate=!0},update(u,d,f){if(o.visible){for(let m=0;m<c;m++){let g=i[m];t[m*3]+=(Math.sin(d*g[0]+g[2])*.6*h.drift+.35)*u,t[m*3+1]-=g[1]*h.fall*u,t[m*3+2]+=Math.cos(d*g[0]*.7+g[2])*.4*h.drift*u,t[m*3+1]<0&&(t[m*3]=f.x+Ee(-28,28),t[m*3+1]=Ee(6,9),t[m*3+2]=f.z+Ee(-28,20))}s.attributes.position.needsUpdate=!0}}}}function R_(n){let e=new ge,t=new ge;e.userData.dynamic=t.userData.dynamic=!0,n.add(e,t);let i=[],r=Td?0:8,s=new Fn(.16,10),a=["#F7D58B","#F4B8C0","#FFFFFF","#BFE3F5"];for(let f=0;f<r;f++){let m=new ge,g=new Oe({color:a[f%4],side:xd}),p=new ue(s,g),x=new ue(s,g);p.position.x=-.14,x.position.x=.14;let y=new ge,v=new ge;y.add(p),v.add(x),m.add(y,v),e.add(m),i.push({g:m,lw:y,rw:v,axis:"y",amp:1.1,freq:18,cx:Ee(-25,25),cz:Ee(-25,25),r:Ee(2,5),sp:Ee(.3,.7),off:Ee(0,6)})}let o=new Fn(.16,10),l=new Oe({color:"#FFFFFF",transparent:!0,opacity:.55,side:xd,depthWrite:!1}),c=new we(.025,.018,.42,6);for(let f=0;f<r;f++){let m=new ge,g=new ue(c,new Oe({color:f%3?"#D9452F":"#E8763E"}));g.rotation.x=Math.PI/2,m.add(g);let p=new ge,x=new ge;for(let[y,v]of[[p,-1],[x,1]])for(let b of[-.05,.06]){let R=new ue(o,l);R.scale.set(1.4,.32,1),R.position.set(v*.2,0,b),R.rotation.x=-Math.PI/2,y.add(R)}m.add(p,x),t.add(m),i.push({g:m,lw:p,rw:x,axis:"z",amp:.35,freq:30,cx:Ee(-25,25),cz:Ee(-25,25),r:Ee(2,5),sp:Ee(.3,.7),off:Ee(0,6)})}let h=!1,u="green",d=()=>{e.visible=!h&&u==="green",t.visible=!h&&u==="autumn"};return{setLite(f){h=f,d()},setSeason(f){u=f,d()},get visible(){return e.visible||t.visible},update(f,m){!e.visible&&!t.visible||i.forEach(g=>{if(!g.g.parent.visible)return;let p=m*g.sp+g.off;g.g.position.set(g.cx+Math.cos(p)*g.r,1.2+Math.sin(m*2+g.off)*.5,g.cz+Math.sin(p*1.3)*g.r),g.g.rotation.y=-p;let x=Math.sin(m*g.freq+g.off)*g.amp;g.lw.rotation[g.axis]=x,g.rw.rotation[g.axis]=-x})}}}var $d=new Map;function W0(n="\u{1F497}"){if($d.has(n))return $d.get(n);let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d");t.font="52px serif",t.textAlign="center",t.textBaseline="middle",t.fillText(n,32,36);let i=ct(e);return $d.set(n,i),i}var fa=[];function vr(n,e,t=10,i="\u{1F497}"){let r=W0(i);for(let s=0;s<t&&!(fa.length>90);s++){let a=new Pn(new vn({map:r,transparent:!0,depthWrite:!1}));a.position.copy(e).add(new A(Ee(-.4,.4),Ee(0,.5),Ee(-.4,.4))),a.scale.setScalar(Ee(.35,.6)),n.add(a),fa.push({sp:a,v:new A(Ee(-1,1),Ee(2,3.5),Ee(-1,1)),life:1.4+Math.random()*.4,scene:n})}}function Fc(n,e,t,i="\u{1FA99}",r=.7,s){let a=new Pn(new vn({map:W0(i),transparent:!0,depthWrite:!1}));a.position.copy(e),a.scale.setScalar(.5),n.add(a);let o=9,l=new A((t.x-e.x)/r,(t.y-e.y+.5*o*r*r)/r,(t.z-e.z)/r);fa.push({sp:a,v:l,life:r,scene:n,g:o,onLand:s})}function $0(n){var e;for(let t=fa.length-1;t>=0;t--){let i=fa[t];i.life-=n,i.v.y-=(i.g||1.2)*n,i.sp.position.addScaledVector(i.v,n),i.g||(i.sp.material.opacity=Math.min(1,i.life)),i.life<=0&&(i.scene.remove(i.sp),i.sp.material.dispose(),fa.splice(t,1),(e=i.onLand)==null||e.call(i,i.sp.position))}}function q0(n,e){let t=new ge;n.add(t);let i=o_();n.add(i);let r=new ue(new Fn(160,64),new kt({map:O0(gi()),gradientMap:Dn}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,t.add(r);let s=m_(),a=new kt({map:s,gradientMap:Dn,polygonOffset:!0,polygonOffsetFactor:-1});for(let[C,I,H,_,P]of H0){let U=Math.hypot(H-C,_-I),O=new st(P,U),Z=O.attributes.uv;for(let q=0;q<Z.count;q++)Z.setXY(q,Z.getX(q)*P/3,Z.getY(q)*U/3);let j=new ue(O,a);j.rotation.x=-Math.PI/2,j.rotation.z=Math.atan2(H-C,_-I)+Math.PI,j.position.set((C+H)/2,.02,(I+_)/2),j.receiveShadow=!0,t.add(j);for(let[q,X]of[[C,I],[H,_]]){let G=new ue(new Fn(P/2,20),a);G.rotation.x=-Math.PI/2,G.position.set(q,.021,X),G.receiveShadow=!0,t.add(G)}}let o=new ue(new Fn(yi.r,48),a);o.rotation.x=-Math.PI/2,o.position.set(yi.x,.025,yi.z),o.receiveShadow=!0,t.add(o);let l=new ue(new Qr(yi.r-.35,yi.r,48),mt("#E6D2B5"));l.rotation.x=-Math.PI/2,l.position.set(yi.x,.03,yi.z),t.add(l);let c=[],h=[],u=[],d=[];for(let C=0;C<46;C++){let I=C/46*Math.PI*2+Ee(-.04,.04),H=Ee(41,46),_=Math.cos(I)*H,P=Math.sin(I)*H;Math.abs(_)<4&&P>30||h.push(Gd(_,P,{kind:["pine","maple","pine","ginkgo","pine","persimmon"][C%6],s:Ee(1.1,1.6)}))}for(let C=0;C<30;C++){let I=Math.random()*Math.PI*2,H=Ee(50,75);h.push(Gd(Math.cos(I)*H,Math.sin(I)*H,{kind:["pine","pine","maple","ginkgo"][C%4],s:Ee(1.4,2.2)}))}for(let C=0;C<8;C++){let I=Q(new Ue(1,20,12),h_[C%4],Ee(-120,120),-Ee(8,14),-Ee(90,130));I.scale.set(Ee(25,45),Ee(18,26),Ee(20,30)),t.add(I)}[[-9,27,"persimmon"],[14.5,31,"maple"],[-24,22,"pine"],[34,14,"ginkgo"],[-30,6,"pine"],[30,4,"maple"],[-28,-20,"ginkgo"],[33,-20,"pine"],[-8,-28,"pine"],[8,-29,"maple"],[-15,12,"maple"],[36,-8,"persimmon"],[-25,-8,"ginkgo"],[11,-22,"persimmon"],[-12,-24,"maple"]].forEach(([C,I,H])=>{u.push(Gd(C,I,{kind:H,s:Ee(1,1.3)})),c.push({x:C,z:I,r:.7})}),[[-5,28],[12.5,27.5],[-14,8],[13,3],[-4,-23],[4,-23],[-26,12],[31,12],[-24,-24],[30,-4]].forEach(([C,I],H)=>{u.push(y_(C,I,Ee(.9,1.3),H)),c.push({x:C,z:I,r:.9})});let m=new ge;m.visible=!1,m.userData.dynamic=!0,t.add(m),[[-2.3,30],[2.3,24],[-2.3,18],[2.3,12],[7.5,-1],[-29.25,-11.8],[-22.75,-11.8],[-16.25,-11.8],[-9.75,-11.8],[9.75,-11.8],[16.25,-11.8],[22.75,-11.8],[29.25,-11.8],[12,19.3],[-8.6,5.5],[-12,-5],[-8,9],[8,12]].forEach(([C,I])=>{d.push(v_(C,I)),m.add(x_(C,I)),c.push({x:C,z:I,r:.3})}),[[-6.3,8.8,2.4],[6.3,8.8,-2.4],[-6.8,-.5,1.2],[6.8,-1,-1.2]].forEach(([C,I,H])=>{d.push(__(C,I,H)),c.push({x:C,z:I,r:.9})}),Rc(t,h,{shadows:!1}),Rc(t,u,{shadows:!0}),Rc(t,d,{shadows:!0});let g=[];m.children.forEach(C=>{let I=C.children.find(H=>H.isMesh);if(I){C.remove(I);let H=new ge;H.position.copy(C.position),H.add(I),g.push(H)}}),Rc(m,g,{shadows:!1});let p=[];t.add(ti(E_(-6.2,30.5,.5),"green","autumn")),c.push({x:-6.2,z:30.5,r:.6});let x=ti(b_(6.4,14.6,1),"winter");t.add(x),c.push({x:6.4,z:14.6,r:1.2}),p.push(C=>{x.visible&&(Pc.forEach(I=>{let H=.55+.45*Math.max(0,Math.sin(C*2.6+I.off));I.mat.color.copy(I.base).multiplyScalar(H)}),x.userData.star.rotation.y=C*.8)}),[[3.9,32.4,1],[15.5,-7,.9],[24.5,-7,.9],[-7.5,15.5,.8],[8.5,-5.2,.7]].forEach(([C,I,H])=>{t.add(ti(k0(C,I,H),"autumn")),t.add(ti(k0(C,I,H*1.1,!0),"winter")),c.push({x:C,z:I,r:.6*H})});let y=S_(t,e),v=w_(t),b=A_(t),R=R_(t),S="day",T=gi(),z={group:t,sky:i,colliders:c,get time(){return S},get season(){return T},palette:()=>Eo[T][S],setTime(C){S=Eo[T][C]?C:"day";let I=Eo[T][S];return i.userData.setPalette(I),m.visible=I.lamps,I},setSeason(C){return T=Eo[C]?C:"green",r.material.map=O0(T),r.material.needsUpdate=!0,l_(T),y.setSeason(T),b.setSeason(T),R.setSeason(T),z.setTime(S)},setLite(C){b.setCount(C>=2?0:C===1?80:300),b.group.visible=C<2,v.group.visible=C<2,R.setLite(C>=2)},update(C,I,H){v.update(C),b.update(C,I,H),R.update(C,I),p.forEach(_=>_(I))}};return Xd(t),z.setSeason(T),z}var Jd={z:-14,gap:6.5},_n={x:0,z:-15.5,r:1.4},Kd=(n,e=.25)=>"#"+new Me(n).lerp(new Me("#5A4038"),e).getHexString(),j0=(n,e)=>(n=String(n||"").replace(/\s+/g," ").trim(),n.length>e?n.slice(0,e-1)+"\u2026":n);function C_(n){if(n>=Ho)return null;let e=(n%2===0?-1:1)*Jd.gap*(Math.floor(n/2)+1);return{x:e,z:Jd.z,npcX:e,npcZ:Jd.z+2.6}}var Dc=null;function X0(){if(Dc)return Dc;let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=["#B07A4F","#A56F45","#BC8657","#A9744B"];for(let r=0;r<6;r++){let s=r*21.33,a=e.createLinearGradient(0,s,0,s+21.33);a.addColorStop(0,"#7E5536"),a.addColorStop(.18,t[r%4]),a.addColorStop(.75,t[(r+1)%4]),a.addColorStop(1,"#6E4B33"),e.fillStyle=a,e.fillRect(0,s,128,21.33),e.strokeStyle="rgba(80,50,30,.25)",e.lineWidth=1;for(let o=0;o<3;o++){e.beginPath();let l=(r*37+o*45)%128;e.moveTo(l,s+8),e.lineTo(l+18,s+9),e.stroke()}}let i=ct(n);return i.wrapS=i.wrapT=hi,i.repeat.set(1.4,1),Dc=new kt({map:i,gradientMap:Dn}),Dc}var Uc=null;function L_(){if(Uc)return Uc;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,255,.85)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Uc=ct(n),Uc}function Y0({group:n,colliders:e,boxes:t,addInteract:i,updaters:r}){let s=Dt(),a=[],o=ke(),l=new Set(bs(o).map(m=>m.id));function c(m,g){let p=C_(g);if(!p)return;let x=m.look.outfit,y=new ge,v=new ue(new me(2.8,1.9,2.4),X0());v.position.y=.95,v.castShadow=v.receiveShadow=!0,y.add(v);let b=new pi;b.moveTo(-1.4,0),b.lineTo(1.4,0),b.lineTo(0,1.08),b.closePath();let R=new ue(new zi(b,{depth:2.4,bevelEnabled:!1}),X0());R.position.set(0,1.9,-1.2),y.add(R);let S=Kd(x,.28);for(let M of[-1,1]){let E=Q(new me(1.98,.14,2.9),S,M*.78,2.5,0);E.rotation.z=-M*.66,y.add(E)}y.add(Q(new me(.16,.16,2.95),Kd(x,.4),0,3.08,0));let T=new ge;for(let M of[-1,1]){let E=Q(new me(2,.12,2.94),"#FBFCFE",M*.78+M*.07,2.58,0);E.rotation.z=-M*.66,T.add(E)}let z=Zd(),C=new Ue(.075,8,6);for(let M=0;M<=12;M++){let E=M/12,N=-1.55+E*3.1,B=1.93+(1-Math.abs(E-.5)*2)*1.12,L=new ue(C,z[(M+g)%z.length]);L.position.set(N,B-.06,1.5),T.add(L)}y.add(ti(T,"winter")),y.add(Q(new me(.34,.85,.34),"#A39A8F",.8,2.85,-.55)),y.add(Q(new me(.72,1.12,.06),Kd(x,.1),0,.56,1.22)),y.add(Q(new Ue(.05,8,6),"#F2C14E",.22,.55,1.27)),y.add(Q(new me(1.3,.14,.55),"#8F6243",0,.07,1.45));let I=new Oe({color:"#FFE2A0"});for(let M of[-1,1]){y.add(Q(new me(.64,.64,.05),"#6E4B33",M*.92,1.18,1.21));let E=new ue(new st(.52,.52),I);E.position.set(M*.92,1.18,1.24),y.add(E);for(let N of[-1,1])y.add(Q(new me(.2,.62,.04),x,M*.92+N*.43,1.18,1.235));y.add(Q(new me(.66,.16,.18),"#B9773E",M*.92,.82,1.3)),y.add(Q(new _t(.1,0),M<0?"#E07BB5":"#F2C14E",M*.92-.15,.95,1.3),Q(new _t(.1,0),"#D9553B",M*.92+.15,.95,1.3))}let H=new ue(new st(1.3,.34),new Oe({map:ct(Ht(m.name,{w:384,h:100,size:54,bg:"#FFF6E6",border:"#8F6243",radius:22,color:"#4A3528",font:"Jua"})),transparent:!0}));H.position.set(0,1.64,1.25),y.add(H);let _=[0,1,2].map(M=>{let E=new Pn(new vn({map:L_(),transparent:!0,depthWrite:!1,opacity:.6}));return E.position.set(.8,3.4,-.55),y.add(E),{sp:E,off:M/3+g*.13}});r.push(M=>_.forEach(({sp:E,off:N})=>{let B=(M*.22+N)%1;E.position.set(.8+Math.sin(B*4+N*9)*.2,3.35+B*1.6,-.55-B*.3),E.scale.setScalar(.35+B*.7),E.material.opacity=.55*(1-B)}));let P=new ge;P.add(Q(new we(.04,.05,.85,6),"#6E4B33",0,.42,0)),P.add(Q(new me(.3,.24,.42),"#E4605A",0,.95,0));let U=new ge;U.userData.dynamic=!0,U.position.set(.17,.92,-.1);let O=Q(new me(.03,.24,.12),"#F7D58B",0,.12,0);U.add(O),P.add(U),P.position.set(1.15,0,1.85),y.add(P);let Z=null;if(l.has(m.id)){let M=V0(-1.15,1.9,2.4);M.userData.dynamic=!0,y.add(M),r.push(E=>M.userData.update(E)),Z=new ge,Z.add(Q(new we(.06,.06,.7,6),"#B98A66",0,.35,0)),Z.add(Q(new we(.42,.42,.06,18),"#FFFDF8",0,.72,0)),Z.add(Q(new we(.3,.3,.22,18),"#F4B8C0",0,.86,0)),Z.add(Q(new we(.31,.31,.05,18),"#FFFFFF",0,.98,0));for(let E=0;E<3;E++){let N=E*2.1;Z.add(Q(new we(.02,.02,.14,6),"#F7D58B",Math.cos(N)*.15,1.07,Math.sin(N)*.15));let B=new ue(new Ue(.035,6,4),new Oe({color:"#FFB347"}));B.position.set(Math.cos(N)*.15,1.17,Math.sin(N)*.15),Z.add(B)}Z.position.set(-1.35,0,2.75),y.add(Z)}y.position.set(p.x,0,p.z),n.add(y),t.push({minX:p.x-1.45,maxX:p.x+1.45,minZ:p.z-1.3,maxZ:p.z+1.3});let j=(M,E)=>{let N=new A(M,0,E).applyAxisAngle(new A(0,1,0),y.rotation.y);return{x:p.x+N.x,z:p.z+N.z}},q=j(1.15,1.85);if(e.push({x:q.x,z:q.z,r:.3}),Z){let M=j(-1.35,2.75);e.push({x:M.x,z:M.z,r:.45})}let X=da({type:"family",...m.look,shadows:!1});X.root.userData.dynamic=!0,X.root.position.set(p.npcX,0,p.npcZ),l.has(m.id)&&X.setParty(!0),n.add(X.root);let G={x:X.root.position.x,z:X.root.position.z,r:.45};e.push(G);let Y=m.id===_e(),ce=i(`house:${m.id}`,`${m.nick||m.role||m.name}\uB124 \uC9D1`,m.emoji||"\u{1F3E0}",`${m.nick||m.role||m.name}\uB124 \uC9D1 \uAD6C\uACBD`,p.npcX,p.npcZ,2.5,3.9);ce.label.position.z=p.z+1.1,ce.member=m.id,a.push({m,sp:p,g:y,npc:X,npcCol:G,it:ce,flagPivot:U,badge:null,badgeText:"",bubbles:new Map,bub:null,bubT:0,sayT:1+g,sayIdx:0,near:!1,isMe:Y})}s.slice(0,Ho).forEach((m,g)=>c(m,g));function h(m){let g=[];if(l.has(m.m.id)&&g.push("\u{1F382} \uC0DD\uC77C!"),m.m.id===_e()){let x=oi().length;x&&g.push(`\u{1F48C} ${x}`)}let p=ws(m.m.id).length;return p&&g.push(`\u{1F497} ${p}`),g.join("  ")}function u(m){let g=m.m.id,p=[];l.has(g)&&p.push("\uC624\uB298 \uB0B4 \uC0DD\uC77C\uC774\uC57C! \u{1F382}");let x=Ti(ke()).find(v=>v.who===g);x&&p.push(`\u{1F4AC} ${j0(x.text,20)}`);let y=ot("letters").find(v=>v.who===g&&!Ri(v));return y&&p.push(`\u2709\uFE0F ${j0(y.message.split(`
`)[0],18)}`),m.m.line&&p.push(m.m.line),p.length?p:["\uC5B4\uC11C \uC640! \u{1F64C}"]}function d(){let m=_e(),g=Dt();g.forEach(p=>{a.length<Ho&&!a.some(x=>x.m.id===p.id)&&c(p,a.length)}),a.forEach(p=>{let x=g.find(R=>R.id===p.m.id);if(x){let R=JSON.stringify(x.look);if(p.lookKey&&R!==p.lookKey){let S=p.npc,T=da({type:"family",...x.look,shadows:!1});T.root.position.copy(S.root.position),T.root.rotation.y=S.root.rotation.y,l.has(p.m.id)&&T.setParty(!0),n.remove(S.root),S.root.traverse(z=>{var C;return(C=z.geometry)==null?void 0:C.dispose()}),n.add(T.root),p.npc=T}p.lookKey=R,p.m=x}p.isMe=p.m.id===m,p.npc.root.visible=!p.isMe,p.npcCol.r=p.isMe?0:.45;let y=p.isMe?"\u{1F3E0} \uB0B4 \uC9D1":`${p.m.emoji||"\u{1F3E0}"} ${p.m.nick||p.m.role||p.m.name}\uB124 \uC9D1`;if(p.it.labelText!==y){p.it.labelText=y;let R=yr(y),S=p.it.label.material.map;p.it.label.material.map=R.material.map,p.it.label.material.needsUpdate=!0,S.dispose(),R.material.dispose()}p.it.text=p.isMe?"\uB0B4 \uC9D1":`${p.m.nick||p.m.role||p.m.name}\uB124 \uC9D1`,p.it.action=p.isMe?"\uB0B4 \uC9D1 \uB4E4\uC5B4\uAC00\uAE30":`${p.m.nick||p.m.role||p.m.name}\uB124 \uC9D1 \uAD6C\uACBD`;let v=p.isMe&&oi().length>0;p.flagPivot.rotation.z=v?-1.4:0;let b=h(p);b!==p.badgeText&&(p.badgeText=b,p.badge&&(n.remove(p.badge),p.badge.material.map.dispose(),p.badge.material.dispose(),p.badge=null),b&&(p.badge=yr(b,{scale:2.4,bg:"rgba(255,244,228,.96)",color:"#B5552B"}),p.badge.position.set(p.sp.x,4.45,p.sp.z),n.add(p.badge))),p.lines=u(p)})}d();function f(m,g,p,x=!1){a.forEach(y=>{if(y.badge){let C=Math.hypot(p.x-y.sp.x,p.z-y.sp.z);y.badge.visible=!x&&C<30,y.badge.material.opacity=ts((30-C)/8,0,1)}if(y.isMe)return;let v=y.npc,b=p.x-v.root.position.x,R=p.z-v.root.position.z,S=Math.hypot(b,R);if(x){v.animate(m,0,g),y.bub&&(y.bub.visible=!1,y.bub=null);return}if(v.root.visible=S<48,!v.root.visible)return;v.animate(m,0,g);let T=S<7?ts(Math.atan2(b,R)-v.root.rotation.y,-.9,.9):0;v.head.rotation.y+=(T-v.head.rotation.y)*Math.min(1,m*4);let z=S<4.2;if(z&&!y.near&&(v.wave(1.4),y.sayT=Math.min(y.sayT,.4)),y.near=z,y.sayT-=m,z&&y.sayT<=0&&!y.bub){let C=y.lines[y.sayIdx++%y.lines.length];if(!y.bubbles.has(C)){y.bubbles.size>6&&(y.bubbles.forEach(H=>{n.remove(H),H.material.map.dispose(),H.material.dispose()}),y.bubbles.clear());let I=yr(C,{scale:3.6});I.visible=!1,n.add(I),y.bubbles.set(C,I)}y.bub=y.bubbles.get(C),y.bub.position.set(v.root.position.x,2.75,v.root.position.z),y.bub.visible=!0,y.bubT=3,y.it.muted=!0,y.sayT=6+Math.random()*4}y.bub&&(y.bubT-=m,(y.bubT<=0||!z)&&(y.bub.visible=!1,y.bub=null,y.it.muted=!1))})}return{houses:a,refresh:d,update:f,npc:m=>{var g;return((g=a.find(p=>p.m.id===m))==null?void 0:g.npc)||null},spot:m=>{var g;return((g=a.find(p=>p.m.id===m))==null?void 0:g.sp)||null}}}function Z0({group:n,colliders:e,addInteract:t,updaters:i}){let r=new ge;r.userData.dynamic=!0,r.position.set(_n.x,0,_n.z),n.add(r),r.add(Q(new we(1.5,1.7,.22,24),"#9C7A5E",0,.11,0)),r.add(Q(new we(1.35,1.35,.06,24),"#6B4A33",0,.23,0));for(let I=0;I<12;I++){let H=I/12*Math.PI*2;Math.abs(Math.sin(H))>.9&&Math.cos(H)>-.2&&Math.sin(H)>0||r.add(Q(new me(.12,.5,.12),"#A0703F",Math.cos(H)*1.9,.25,Math.sin(H)*1.9))}let s=Q(new Kn(1.9,.035,6,40),"#A0703F",0,.42,0);s.rotation.x=Math.PI/2,r.add(s);let a=Q(new Ue(.16,10,8),"#8C6B55",0,.3,0);a.scale.set(1,.7,1.2);let o=new ge;o.add(Q(new we(.03,.04,.5,6),"#8DC175",0,.48,0));for(let I of[-1,1]){let H=Q(new Ue(.16,10,8),"#9ED08A",I*.15,.74,0);H.scale.set(1.3,.5,.8),H.rotation.z=I*.5,o.add(H)}let l=new kt({color:"#86C174",gradientMap:Dn}),c=new ge;c.add(Q(new we(.08,.12,1.3,8),"#A47A5C",0,.85,0)),[[0,1.75,0,.55],[.35,1.45,.1,.38],[-.32,1.5,-.1,.4]].forEach(([I,H,_,P])=>{let U=Q(new _t(1,1),l,I,H,_);U.scale.setScalar(P),c.add(U)});let h=new ge;h.add(Q(new we(.22,.34,2.2,10),"#A47A5C",0,1.3,0));let u=[[0,3.1,0,1.25],[.9,2.65,.25,.9],[-.85,2.75,-.2,.95],[.15,3.85,-.1,.85],[-.3,2.6,.75,.75]];u.forEach(([I,H,_,P])=>{let U=Q(new _t(1,1),l,I,H,_);U.scale.setScalar(P),h.add(U)});let d=new ge,f=new ge,m=new _t(.13,0),g=new Ue(.15,10,8);for(let I=0;I<26;I++){let[H,_,P,U]=u[I%u.length],O=new A().setFromSphericalCoords(U*1.02,Math.acos(Math.random()*1.6-.6),Math.random()*Math.PI*2);d.add(Q(m,I%3?"#FFF6D8":"#F7E7A6",H+O.x,_+O.y,P+O.z)),I%2===0&&f.add(Q(g,I%4?"#F28C28":"#E9741F",H+O.x*.95,_+O.y*.95-.1,P+O.z*.95))}h.add(d,f),r.add(a,o,c,h),e.push({x:_n.x,z:_n.z,r:_n.r});let p=Ht(Ai().name,{w:420,h:110,size:50,bg:"#FFF6E6",radius:26,color:"#5E7D4A",border:"#93A35A"}),x=new ue(new st(1.5,.4),new Oe({map:ct(p),transparent:!0})),y=Q(new we(.04,.05,.9,6),"#A47A5C",1.35,.45,2.2);x.position.set(1.35,.95,2.23),r.add(y,x),e.push({x:_n.x+1.35,z:_n.z+2.2,r:.2});let v=t("tree",Ai().name,"\u{1F331}","\uBB3C \uC8FC\uAE30",_n.x,_n.z+.4,3.2,5.4),b=null,R="",S=-1,T=0;function z(I){a.visible=I===0,o.visible=I===1,c.visible=I===2,h.visible=I>=3,d.visible=I>=4,f.visible=I>=5,h.scale.setScalar(I>=5?1.2:I===4?1.1:1)}function C(){let I=Ai();if(I.stage!==S){let P=S>=0&&I.stage>S;S=I.stage,z(S),P&&(T=1)}let H={green:["#86C174","#A9B97A"],autumn:["#E39B3B","#C2A46A"],winter:["#EEF3F8","#D7DDE3"]}[gi()]||["#86C174","#A9B97A"];l.color.set(I.thirsty?H[1]:H[0]);let _=I.thirsty?"\u{1F4A7} \uBAA9\uB9D0\uB77C\uC694\u2026 \uBB3C\uC744 \uC8FC\uC138\uC694":I.todayWho.length?`\u{1F4A7} \uC624\uB298 ${I.todayWho.length}\uBA85\uC774 \uBB3C\uC744 \uC92C\uC5B4\uC694`:`\u{1F331} ${I.stageName} \xB7 \uBB3C ${I.total}\uBC88`;return _!==R&&(R=_,b&&(n.remove(b),b.material.map.dispose(),b.material.dispose()),b=yr(_,{scale:3.4,bg:"rgba(240,250,235,.95)",color:"#4F7A3E"}),b.position.set(_n.x,4.7,_n.z),n.add(b)),I}return C(),i.push((I,H)=>{if(T>0){T=Math.max(0,T-H/.9);let P=1+Math.sin((1-T)*Math.PI)*.25;r.scale.set(P,P,P)}else r.scale.x!==1&&r.scale.set(1,1,1);let _=Math.sin(I*1.1)*.03;h.rotation.z=_,c.rotation.z=_*1.5,o.rotation.z=_*2}),{it:v,refresh:C,top:new A(_n.x,2.6,_n.z)}}var J0=36,xr={s:.8,x:24-.8*20,z:18-.8*-15.5},Nc=(n,e)=>({x:xr.s*n+xr.x,z:xr.s*e+xr.z}),as={...Nc(20,-8.4),r:1.7},ht={x:8.2,z:25.5,r:1.8},K0=(n,e)=>(n=String(n||""),n.length>e?n.slice(0,e-1)+"\u2026":n);function P_(n,e,t){let i=String(e).split(/(\s+)/),r=[],s="";for(let a of i){let o=s+a;for(n.measureText(o).width>t&&s.trim()?(r.push(s.trim()),s=a.trimStart()):s=o;n.measureText(s).width>t&&s.length>1;){let l=s.length;for(;l>1&&n.measureText(s.slice(0,l)).width>t;)l--;r.push(s.slice(0,l)),s=s.slice(l)}}return s.trim()&&r.push(s.trim()),r}function Q0(n){var H;let e=window.FAMILY,t=new ge;n.add(t);let i=[],r=[],s=[],a=[];function o(_,P,U,O,Z,j,q,X=3.4){let G=yr(`${U} ${P}`);G.position.set(Z,X,j),t.add(G);let Y={id:_,text:P,emoji:U,action:O,pos:new A(Z,0,j),r:q,label:G,baseY:X,off:Math.random()*6};return s.push(Y),Y}let l=(_,P,U)=>new ue(new st(P,U),new Oe({map:ct(_),transparent:!0})),c=document.createElement("canvas");c.width=512,c.height=680;let h=null;function u(){let _=c.getContext("2d");_.clearRect(0,0,512,680),_.fillStyle="#FFFDF8",Qn(_,0,0,512,680,24),_.fill(),_.lineWidth=10,_.strokeStyle="#B07A4F",Qn(_,5,5,502,670,20),_.stroke(),_.textAlign="center",_.fillStyle="#B5552B",_.font="64px serif",_.fillText("\u{1F3E1}",256,105),_.font='56px "Jua"',_.fillText(qt(),256,185);let P=Ki();_.fillStyle="#7C6A66",_.font='28px "Gowun Dodum"',P>0&&_.fillText(`\uD568\uAED8\uD55C \uC9C0 ${P.toLocaleString()}\uC77C\uC9F8`,256,232),_.fillStyle="#4A3B38",_.font='700 32px "Gowun Dodum"',_.fillText("\uC624\uB298 \uB2E4\uB140\uAC04 \uAC00\uC871",256,315);let U=Vo();_.font='30px "Gowun Dodum"',U.length||(_.fillStyle="#9A8C88",_.fillText("\uC544\uC9C1 \uC544\uBB34\uB3C4 \uC548 \uC654\uC5B4\uC694",256,375)),U.slice(0,6).forEach((O,Z)=>{let j=Z%2,q=Math.floor(Z/2);_.fillStyle=O.look.outfit,_.beginPath(),_.arc(j?300:70,368+q*62,12,0,7),_.fill(),_.fillStyle="#4A3B38",_.textAlign="left",_.fillText(K0(O.nick||O.role||O.name,6),j?322:92,379+q*62),_.textAlign="center"}),_.fillStyle="#B5552B",_.font='26px "Gowun Dodum"',_.fillText("\uB204\uB974\uBA74 \uC6B0\uB9AC \uAC00\uC871 \uC18C\uAC1C",256,640),h&&(h.needsUpdate=!0)}{let _=new ge,P="#B98A66",U=Q(new me(.1,3,.1),P,-.8,1.45,.1);U.rotation.z=.12;let O=Q(new me(.1,3,.1),P,.8,1.45,.1);O.rotation.z=-.12;let Z=Q(new me(.1,3,.1),P,0,1.4,-.45);Z.rotation.x=-.3;let j=Q(new me(1.9,.08,.25),P,0,.75,.2),q=Q(new me(1.9,2.5,.06),"#FFFDF8",0,2.05,.2);q.rotation.x=-.08,u();let X=l(c,1.75,2.33);h=X.material.map,X.position.set(0,2.05,.235),X.rotation.x=-.08,_.add(U,O,Z,j,q,X),_.position.set(-4.8,0,24),_.rotation.y=.35,t.add(_),i.push({x:-4.8,z:24,r:1}),o("family","\uC6B0\uB9AC \uAC00\uC871","\u{1F3E1}","\uAC00\uC871 \uC18C\uAC1C \uBCF4\uAE30",-4.8,24,3,3.8)}let d=document.createElement("canvas");d.width=512,d.height=400;let f=null;function m(){let _=d.getContext("2d");_.fillStyle="#D9B38C",_.fillRect(0,0,512,400);for(let O=0;O<160;O++)_.fillStyle=O%2?"rgba(120,80,40,.12)":"rgba(255,255,255,.1)",_.fillRect(O*97%512,O*61%400,3,3);_.save(),_.translate(256,205),_.rotate(-.02),_.fillStyle="#FFFDF6",_.shadowColor="rgba(0,0,0,.25)",_.shadowBlur=12,_.fillRect(-215,-170,430,340),_.shadowColor="transparent",_.fillStyle="#E4605A",_.beginPath(),_.arc(0,-160,13,0,7),_.fill(),_.textAlign="center",_.fillStyle="#B5552B",_.font='36px "Jua"',_.fillText("\u{1F4AC} \uC624\uB298\uC758 \uC9C8\uBB38",0,-108);let P=Ss();_.fillStyle="#4A3528",_.font='36px "Jua"',P_(_,P?P.q:"\uC9C8\uBB38\uC744 \uC900\uBE44 \uC911\uC774\uC5D0\uC694",380).slice(0,3).forEach((O,Z)=>_.fillText(O,0,-40+Z*48));let U=P?Ti(P.day).length:0;_.fillStyle="#7C6A66",_.font='26px "Gowun Dodum"',_.fillText(U?`${U}\uBA85\uC774 \uB2F5\uD588\uC5B4\uC694 \xB7 \uB20C\uB7EC\uC11C \uB2F5\uD558\uAE30`:"\uCCAB \uBC88\uC9F8\uB85C \uB2F5\uD574 \uBCF4\uC138\uC694!",0,140),_.restore(),f&&(f.needsUpdate=!0)}{let _=new ge,P="#A47A5C";for(let Z of[-.95,.95])_.add(Q(new me(.12,2.9,.12),P,Z,1.45,0));_.add(Q(new me(2.15,1.75,.1),P,0,2.05,-.03));let U=Q(new me(2.5,.12,.55),"#B5452F",0,3.05,.05);U.rotation.x=.25,_.add(U),m();let O=l(d,1.95,1.52);f=O.material.map,O.position.set(0,2.05,.03),_.add(O),_.position.set(4.4,0,-1.8),_.rotation.y=-.55,t.add(_),i.push({x:4.4,z:-1.8,r:.9}),o("question","\uC624\uB298\uC758 \uC9C8\uBB38","\u{1F4AC}","\uC9C8\uBB38\uC5D0 \uB2F5\uD558\uAE30",4.4,-1.8,3,3.75)}{let _=new ge,P="#E4605A";_.add(Q(new we(.2,.25,.5,10),"#8C6B55",0,.25,0));let U=Q(new me(1,1.3,.8),P,0,1.15,0),O=Q(new we(.4,.4,1,20,1,!1,0,Math.PI),P,0,1.8,0);O.rotation.z=Math.PI/2;let Z=Q(new me(.6,.06,.05),"#4A2B28",0,1.55,.41),j=l(Ht("\uC6B0\uCCB4\uD1B5",{w:256,h:128,size:58,bg:"#FFF6E6",radius:24,color:"#B5452F"}),.7,.35);j.position.set(0,1.1,.41);let q=[];for(let X=0;X<3;X++){let G=Q(new me(.4,.28,.02),X===1?"#FFF3EA":"#FFFFFF",0,2.4,0);G.userData.dynamic=!0,_.add(G),q.push({l:G,off:X*2.1})}_.add(U,O,Z,j),_.position.set(4.8,0,23),_.rotation.y=-.4,t.add(_),a.push(X=>q.forEach(({l:G,off:Y})=>{let ce=(X*.35+Y/6.3)%1;G.position.set(Math.sin(ce*6+Y)*.5,2+ce*1.6,Math.cos(ce*5)*.3),G.rotation.set(ce*3,ce*5+Y,.3),G.visible=ce<.95})),i.push({x:4.8,z:23,r:.8}),o("mailbox","\uC548\uBD80 \uC6B0\uCCB4\uD1B5","\u2709\uFE0F","\uD3B8\uC9C0 \uC4F0\uAE30",4.8,23,2.8,4.1)}let g=new ge;g.userData.dynamic=!0,t.add(g);let p=[];{g.add(Q(new we(ht.r+.3,ht.r+.4,.18,28),"#B98A66",ht.x,.09,ht.z)),g.add(Q(new we(ht.r+.05,ht.r+.05,.22,28),"#7A5A44",ht.x,.1,ht.z));let _=Q(new we(.05,.06,1.1,6),"#A47A5C",ht.x,.55,ht.z+ht.r+.5),P=l(Ht("\uAC00\uC871 \uC815\uC6D0",{w:360,h:110,size:50,bg:"#FFF6E6",radius:26,color:"#B5552B"}),1.3,.4);P.position.set(ht.x,1.15,ht.z+ht.r+.55);let U=P.clone();U.rotation.y=Math.PI,U.position.z-=.02,g.add(_,P,U),i.push({x:ht.x,z:ht.z,r:ht.r+.5})}let x=new we(.03,.03,.5,6),y=new _t(.16,0),v=new Ue(.06,8,6),b=_=>{let P=7;for(let U of String(_))P=P*31+U.charCodeAt(0)>>>0;return P};function R(_,P){if(p.length>=60)return null;let U=b(`${_.name}|${_.time||""}|${p.length}`),O=U%360/360*Math.PI*2,Z=.25+(U>>9)%100/100*(ht.r-.55),j=ht.x+Math.cos(O)*Z,q=ht.z+Math.sin(O)*Z,X=new ge;if(X.add(Q(x,"#8DC175",0,.45,0)),X.add(Q(y,_.color||Ta(_.who),0,.75,0)),X.add(Q(v,"#F7D58B",0,.75,.13)),p.length<24){let G=String(_.name||"").slice(0,8),Y=yr(G,{scale:1.5,bg:"rgba(255,253,248,.85)"});Y.position.y=1.12,X.add(Y)}if(X.position.set(j,0,q),X.rotation.y=O,g.add(X),p.push(X),P){let G=0;X.scale.setScalar(.01),a.push((Y,ce)=>{if(G>=1)return;G=Math.min(1,G+ce/.7);let M=1-Math.pow(1-G,3);X.scale.setScalar(M)})}return new A(j,0,q)}{let _=new ge;_.add(Q(new we(.1,.12,3.2,8),"#A47A5C",0,1.6,0)),[["\uBAA8\uC774\uB294 \uACF3","#FFF6E6",.4],["\uBCF8\uAC00 \u2192","#F2B27A",-.5],["\uC8FC\uCC28 \uC548\uB0B4","#F2C14E",.9]].forEach(([U,O,Z],j)=>{let q=new ge,X=Q(new me(1.5,.42,.08),O,.55,0,0),G=Q(new we(.21,.21,.08,3),O,1.35,0,0);G.rotation.x=Math.PI/2,G.rotation.y=Math.PI/2;let Y=l(Ht(U,{w:384,h:110,size:56,bg:null}),1.4,.4);Y.position.set(.55,0,.05);let ce=Y.clone();ce.rotation.y=Math.PI,ce.position.z=-.05,q.add(X,G,Y,ce),q.position.y=2.8-j*.55,q.rotation.y=Z,_.add(q)}),_.position.set(-3.6,0,13.5),t.add(_),i.push({x:-3.6,z:13.5,r:.4}),o("directions","\uBAA8\uC774\uB294 \uACF3","\u{1F5FA}\uFE0F","\uAE38 \uC548\uB0B4 \uBCF4\uAE30",-3.6,13.5,2.6,3.9)}{let _=new ge;_.add(Q(new me(1,.75,1),"#B98A66",0,.38,0)),_.add(Q(new me(1.25,1,1),"#F6E7CC",0,1.25,0)),_.add(Q(new me(1.3,.08,1.05),"#E07B39",0,1.78,0)),_.add(Q(new me(.6,.04,.12),"#4A3B38",0,1.83,0));let P=Q(new me(.42,.3,.02),"#F7D58B",0,2,0);P.userData.dynamic=!0,_.add(P);let U=l(Ht("\uD22C\uD45C\uD568",{w:256,h:110,size:54,bg:"#E07B39",radius:20,color:"#FFFFFF"}),.8,.34);U.position.set(0,1.3,.51),_.add(U),_.position.set(-13.5,0,2),_.rotation.y=.5,t.add(_),a.push(O=>{P.position.y=2+Math.sin(O*2.2)*.08,P.rotation.y=Math.sin(O)*.4}),i.push({x:-13.5,z:2,r:.9}),o("poll","\uAC00\uC871 \uD22C\uD45C\uD568","\u{1F5F3}\uFE0F","\uD22C\uD45C\uD558\uAE30",-13.5,2,3,3.2)}{let _=new ge,P="#B98A66";for(let q of[-.75,.75])_.add(Q(new me(.1,2.8,.1),P,q,1.4,0));_.add(Q(new me(1.8,2.1,.1),P,0,1.9,0));let U=document.createElement("canvas");U.width=480,U.height=560;let O=U.getContext("2d");O.fillStyle="#4E5F46",O.fillRect(0,0,480,560),O.fillStyle="#FFF8E7",O.textAlign="center",O.font='52px "Jua"',O.fillText("\uAC00\uC871 \uB2EC\uB825",240,70);let Z=Ms(5);O.font='28px "Gowun Dodum"',Z.length||O.fillText("\uB2E4\uAC00\uC624\uB294 \uB0A0\uC774 \uC5C6\uC5B4\uC694",240,260),Z.forEach((q,X)=>{let G=150+X*80;O.font='28px "Gowun Dodum"',O.textAlign="left",O.fillStyle="#FFF8E7",O.fillText(`${q.emoji||"\u{1F4CC}"} ${K0(q.title,9)}`,28,G),O.textAlign="right",O.fillStyle=q.dday===0?"#F4B8C0":"#F7D58B",O.fillText(Ra(q.dday),454,G),O.textAlign="left",O.fillStyle="rgba(255,248,231,.6)",O.font='22px "Gowun Dodum"',O.fillText(mn(q.key),70,G+30)});let j=l(U,1.62,1.9);j.position.set(0,1.9,.06),_.add(j),_.position.set(11,0,9.8),_.rotation.y=-.5,t.add(_),i.push({x:11,z:9.8,r:1}),o("calendar","\uAC00\uC871 \uB2EC\uB825","\u{1F4C5}","\uB2EC\uB825 \uBCF4\uAE30",11,9.8,2.8,3.6)}{let _=new ge;_.add(Q(new me(2.4,1.1,1),"#F6E7CC",0,.55,0)),_.add(Q(new me(2.5,.1,1.1),"#B07A4F",0,1.12,0));for(let O of[-1.1,1.1])_.add(Q(new we(.06,.06,2.4,8),"#FFFFFF",O,2.2,-.4));let P=8;for(let O=0;O<P;O++){let Z=Q(new we(1.7,1.7,.5,3,1,!1,Math.PI/2+O/P*Math.PI,Math.PI/P),O%2?"#FFF6E6":"#E07B39",0,3.3,-.4);Z.rotation.x=Math.PI/2,Z.scale.set(1,1,.5),_.add(Z)}let U=l(Ht("?",{w:256,h:256,size:190,bg:"#F2C14E",radius:128,color:"#FFFFFF"}),.9,.9);U.position.set(0,.6,.51),_.add(U),_.position.set(-20,0,-1.5),_.rotation.y=1.25,t.add(_),i.push({x:-20,z:-1.5,r:1.5}),o("quiz","\uAC00\uC871 \uD034\uC988","\u2753","\uD034\uC988 \uD480\uAE30",-20,-1.5,3.2,4.4)}let S;{let _=new ge,P=new _t(.34,0);for(let D=0;D<12;D++){let k=D/12*Math.PI*2,$=Q(P,D%2?"#9C948A":"#B5ADA2",Math.cos(k)*1.25,.18,Math.sin(k)*1.25);$.scale.set(1.15,.7,1),$.rotation.y=k,_.add($)}_.add(Q(new we(1.1,1.1,.05,20),"#4A3A2E",0,.04,0));let U=new we(.11,.13,1.6,8);for(let D=0;D<4;D++){let k=Q(U,D%2?"#7A4E32":"#8A5A3B",0,.16+(D>1?.2:0),0);k.rotation.set(0,D*Math.PI/4+.3,Math.PI/2),_.add(k)}let O=[["#FF7A1A",.42,1.05],["#FFB23A",.3,.85],["#FFE58A",.17,.6]].map(([D,k,$],J)=>{let ne=new ue(new xn(k,$,8),new Oe({color:D,transparent:!0,opacity:.92}));return ne.position.y=.4+$/2,ne.userData={h:$,k:J,dynamic:!0},_.add(ne),ne}),Z=document.createElement("canvas");Z.width=Z.height=128;let j=Z.getContext("2d"),q=j.createRadialGradient(64,64,4,64,64,64);q.addColorStop(0,"rgba(255,190,90,.9)"),q.addColorStop(.4,"rgba(255,150,60,.35)"),q.addColorStop(1,"rgba(255,120,40,0)"),j.fillStyle=q,j.fillRect(0,0,128,128);let X=new Pn(new vn({map:ct(Z),blending:gc,depthWrite:!1,transparent:!0,opacity:.7}));X.position.y=.9,X.scale.set(4.2,4.2,1),_.add(X);let G=28,Y=new Float32Array(G*3),ce=[];for(let D=0;D<G;D++)ce.push([Math.random()*Math.PI*2,Math.random(),Math.random()*.35]);let M=new it;M.setAttribute("position",new pt(Y,3));let E=new Zr(M,new fr({color:"#FFC46B",size:.09,transparent:!0,opacity:.9,depthWrite:!1}));_.add(E);let N=new we(.32,.32,1.7,10);for(let D=0;D<4;D++){let k=D*Math.PI/2+Math.PI/4,$=Q(N,"#8F6243",Math.cos(k)*2.9,.3,Math.sin(k)*2.9);$.rotation.set(0,-k,Math.PI/2),_.add($),i.push({x:Math.cos(k)*2.9,z:4+Math.sin(k)*2.9,r:.5})}let B=Q(new we(.45,.5,.12,12),"#A39A8F",1.75,.06,.25);_.add(B);let L=new di(new Ue(.11,8,6),mt("#8A4B3A"),6);L.count=0,_.add(L),_.position.set(0,0,4),t.add(_);let V=0;a.push((D,k)=>{O.forEach($=>{let{h:J,k:ne}=$.userData,w=1+Math.sin(D*(9+ne*3)+ne)*.12+V*.4;$.scale.set(1-(w-1)*.5,w,1-(w-1)*.5),$.position.y=.4+J*w/2,$.rotation.y=D*(1+ne)}),X.material.opacity=.6+Math.sin(D*7)*.08+V*.3;for(let $=0;$<G;$++){let[J,ne,w]=ce[$],se=(D*.45+ne)%1;Y[$*3]=Math.cos(J+se*2)*(w+se*.3),Y[$*3+2]=Math.sin(J+se*2)*(w+se*.3),Y[$*3+1]=.7+se*2.4}M.attributes.position.needsUpdate=!0,V>0&&(V=Math.max(0,V-k*1.5))}),i.push({x:0,z:4,r:1.6}),o("campfire","\uBAA8\uB2E5\uBD88","\u{1F525}","\uACE0\uAD6C\uB9C8 \uAD7D\uAE30",0,4,3.4,3.4),S={toss(D,k,$){Fc(D,k,new A(0,.8,4),"\u{1F360}",.75,()=>{V=1,$==null||$()})},setCount(D){D=Math.max(0,Math.min(6,D|0));let k=new Pe;for(let $=0;$<D;$++)k.makeRotationY($*1.3),k.scale(new A(1.5,.8,.9)),k.setPosition(1.75+Math.cos($*1.05)*.24,.18,.25+Math.sin($*1.05)*.24),L.setMatrixAt($,k);L.count=D,L.instanceMatrix.needsUpdate=!0}}}{let _=new ge,P=new _t(.9,1),U=new _t(.18,0);for(let O=0;O<47;O++){let Z=-34.5+O*1.5,j=Q(P,jd(O),Z,.8,-18.6);j.scale.set(1,1.1,.8),_.add(j),O%2===0&&_.add(Q(U,Ic(O),Z+.3,1.4,-17.9))}t.add(_),r.push({minX:-35.5,maxX:35.5,minZ:-19.6,maxZ:-17.6})}let T=Y0({group:t,colliders:i,boxes:r,addInteract:o,updaters:a}),z=Z0({group:t,colliders:i,addInteract:o,updaters:a});{let _=new ge,P="#9C6B44",U=3.2,O=2.4,Z=.18,j=.9;_.add(Q(new me(U+Z,Z,Z),P,0,j+O,0)),_.add(Q(new me(U+Z,Z,Z),P,0,j,0));for(let G of[-1,1])_.add(Q(new me(Z,O,Z),P,G*U/2,j+O/2,0)),_.add(Q(new me(Z,j,Z),P,G*U/2,j/2,0));let q=l(Ht("FAMILY PHOTO",{w:512,h:110,size:60,bg:"#FFF6E6",radius:55,color:"#B5552B"}),2,.43);q.position.set(0,j+O+.4,.05),_.add(q);for(let G=0;G<18;G++){let Y=Q(new _t(.16,1),Ic(G),-U/2+Ee(-.15,.3),j+Ee(0,1.1),Ee(-.1,.15));_.add(Y)}_.position.set(-11,0,19),_.rotation.y=.5,t.add(_);let X=.5;for(let G of[-1,1])i.push({x:-11+Math.cos(X)*G*U/2,z:19-Math.sin(X)*G*U/2,r:.3});o("photozone","\uAC00\uC871 \uD3EC\uD1A0\uC874","\u{1F4F8}","\uAC00\uC871\uC0AC\uC9C4 \uCC0D\uAE30",-11,19,3,4.6)}{let _=new ge;for(let O of[-1,1]){_.add(Q(new we(.16,.2,3.6,10),"#8F6243",O*2.7,1.8,0));for(let Z=0;Z<7;Z++)_.add(Q(new _t(.17,1),Ic(Z+(O>0?1:0)),O*2.7+Ee(-.2,.2),.4+Z*.45,Ee(-.2,.2)))}let P=l(Ht(qt(),{w:768,h:150,size:74,bg:"#FFF6E6",border:"#B07A4F",radius:60,color:"#B5452F"}),5.2,1);P.position.set(0,3.7,.13);let U=P.clone();U.rotation.y=Math.PI,U.position.z=-.13,_.add(Q(new me(5.8,1.15,.2),"#8F6243",0,3.7,0),P,U),_.position.set(0,0,34.5),t.add(_),i.push({x:-2.7,z:34.5,r:.3},{x:2.7,z:34.5,r:.3})}I_(t,i,r,a),o("museum",((H=e.museum)==null?void 0:H.title)||"\uAC00\uC871 \uC0AC\uC9C4\uAD00","\u{1F5BC}\uFE0F","\uC0AC\uC9C4\uAD00 \uC785\uC7A5",as.x,as.z,2.6,6.9);function C(){u(),m(),T.refresh(),z.refresh()}function I(_,P,U,O=!1){a.forEach(Z=>Z(P,_)),s.forEach(Z=>{let j=U?Math.hypot(U.x-Z.pos.x,U.z-Z.pos.z):0,q=U&&Z.pos.z>U.z+7;Z.label.visible=!O&&j<J0&&!q&&!Z.muted,Z.label.material.opacity=ts((J0-j)/9,0,1),Z.label.position.y=Z.baseY+Math.sin(P*2+Z.off)*.12}),U&&T.update(_,P,U,O)}return Xd(t),{group:t,colliders:i,boxes:r,interactables:s,update:I,refresh:C,plantFlower:R,flowerCount:()=>p.length,campfire:S,bed:ht,houses:T,familyTree:z}}function I_(n,e,t,i){var H,_;let r=window.FAMILY,s=new ge,a=e.length,o=20,l=-10.2,c="#F1E0C2",h="#FFF8EC",u="#B5452F";s.add(Q(new me(15,.4,13),"#D8C3A0",o,.2,-15.5));for(let P=0;P<3;P++)s.add(Q(new me(6-P*.6,.13,.45),"#D8C3A0",o,.065+P*.13,-8.3-P*.45));s.add(Q(new me(13,5.8,10),c,o,3.3,-15.3));let d=new we(.34,.38,5.4,16),f=new me(.9,.25,.9);[14,16.2,18.3,21.7,23.8,26].forEach(P=>{s.add(Q(d,h,P,3.1,-9.4)),s.add(Q(f,h,P,5.9,-9.4)),s.add(Q(f,h,P,.52,-9.4))}),s.add(Q(new me(14.2,.6,11.8),h,o,6.3,-14.9));let m=new pi;m.moveTo(-7.4,0),m.lineTo(7.4,0),m.lineTo(0,2.4),m.closePath();let g=Q(new zi(m,{depth:11.8,bevelEnabled:!1}),u,o,6.6,-20.8);s.add(g);let p=Q(new zi((()=>{let P=new pi;return P.moveTo(-6.6,.25),P.lineTo(6.6,.25),P.lineTo(0,2.05),P.closePath(),P})(),{depth:.05,bevelEnabled:!1}),h,o,6.6,-8.98);s.add(p);let x=new pi;x.moveTo(0,-.35),x.bezierCurveTo(-.6,.05,-.35,.5,0,.25),x.bezierCurveTo(.35,.5,.6,.05,0,-.35);let y=Q(new zi(x,{depth:.1,bevelEnabled:!1}),"#F2C14E",o,7.5,-8.9);y.scale.setScalar(.9),s.add(y);let v=new ue(new st(6,.9),new Oe({map:ct(Ht(((H=r.museum)==null?void 0:H.title)||"\uAC00\uC871 \uC0AC\uC9C4\uAD00",{w:1024,h:150,size:84,bg:"#FFF6E6",border:"#B07A4F",radius:75,color:"#B5452F"})),transparent:!0}));v.position.set(o,5.3,l+.02),s.add(v),s.add(Q(new me(2.9,3.7,.2),"#8F6243",o,2.25,l));let b=Q(new me(2.5,3.4,.22),"#9C6B4E",o,2.1,l+.02);s.add(b);let R=new ue(new st(2.1,1.1),new Oe({color:"#FFF1C9",transparent:!0,opacity:.9}));R.position.set(o,3,l+.15),s.add(R);let S=Q(new Ue(.08,8,6),"#E2B865",o+.9,1.9,l+.15);s.add(S);let T=((_=r.museum)==null?void 0:_.themes)||[];[15.2,17.2,22.8,24.8].forEach((P,U)=>{var q;let O=T[U%Math.max(1,T.length)],Z=Ht(O?[O.emoji]:["\u2665"],{w:128,h:320,size:70,bg:(O==null?void 0:O.color)||"#F4B8C0",radius:16,color:"#fff",sub:(q=O==null?void 0:O.title)==null?void 0:q.slice(0,4),subSize:22}),j=new ue(new st(.8,2),new Oe({map:ct(Z),transparent:!0}));j.position.set(P,3.2,l+.03),s.add(j)});let z=(P,U)=>{s.add(Q(new we(.35,.28,.6,12),"#B9773E",P,.3,U));let O=Q(new _t(.5,1),"#93A35A",P,.95,U);s.add(O);for(let Z=0;Z<4;Z++)s.add(Q(new _t(.12,0),["#F4A6C6","#FFFFFF","#E07BB5"][Z%3],P+Ee(-.35,.35),1.1+Ee(0,.3),U+.3));e.push({x:P,z:U,r:.5})};z(16.5,-7.8),z(23.5,-7.8);for(let P of[13.45,26.55])for(let U of[-12.5,-15.5,-18.5]){let O=new ue(new st(1.6,2.2),new Oe({color:"#CDE9F5"}));O.position.set(P+(P<o?-.02:.02),3.4,U),O.rotation.y=P<o?-Math.PI/2:Math.PI/2,s.add(O)}s.position.set(xr.x,0,xr.z),s.scale.setScalar(xr.s),n.add(s);for(let P=a;P<e.length;P++){let U=e[P],O=Nc(U.x,U.z);U.x=O.x,U.z=O.z,U.r*=xr.s}y.userData.dynamic=R.userData.dynamic=!0,i.push(P=>{y.position.y=7.5+Math.sin(P*2)*.06,R.material.opacity=.75+Math.sin(P*3)*.2});let C=Nc(12.3,-22.2),I=Nc(27.7,-9);t.push({minX:C.x,maxX:I.x,minZ:C.z,maxZ:I.z})}var eg=new A(1e3,0,0),Jt=-3.2,Qd=3,tg=3.5,ng=2.7,ep=2.7,F_=mi?768:1024,D_=16,U_=34;function N_(){let n=document.createElement("canvas");n.width=256,n.height=256;let e=n.getContext("2d"),t=["#E7C9A3","#E1C09A","#EBD0AD","#DDBB94"];for(let r=0;r<8;r++)e.fillStyle=t[r%4],e.fillRect(0,r*32,256,32),e.fillStyle="rgba(150,110,80,.18)",e.fillRect(0,r*32,256,2),e.fillRect(r*97%256,r*32,2,32);let i=ct(n);return i.wrapS=i.wrapT=hi,i}function ig(n,e=.6){return new Me(n).lerp(new Me("#FFFFFF"),e)}function rg(n){var M;let e=window.FAMILY,t=new ge;t.position.copy(eg),t.visible=!1,n.add(t);let i=ys(),r=[],s=[],a=[],o=2;i.forEach((E,N)=>{let B=o,L=B+1.6,V=E.photos.map((k,$)=>({...k,x:B+4.4+$*tg})),D=B+4.4+Math.max(0,E.photos.length-1)*tg+2.2;a.push({theme:E,ti:N,x0:B,x1:D,headerX:L}),s.push({theme:E,ti:N,x:L}),V.forEach(k=>r.push({...k,ti:N})),o=D+1.2});let l=o+3.5,c=-9,h=l-c,u=(c+l)/2,d=N_();d.repeat.set(h/4,14/4);let f=new ue(new st(h,16),new kt({map:d,gradientMap:Dn}));f.rotation.x=-Math.PI/2,f.position.set(u,0,4.6),t.add(f);let m=mt("#FFF6EA"),g=new ue(new me(h,9,.4),m);g.position.set(u,4.5,Jt-.2),t.add(g);for(let E of[c,l]){let N=new ue(new me(.4,9,16),m);N.position.set(E,4.5,4.6),t.add(N)}let p=new ue(new st(h,16),mt("#FFFDF8"));p.rotation.x=Math.PI/2,p.position.set(u,8.6,4.6),t.add(p);let x=new ue(new me(h,.18,.12),mt("#B07A4F"));x.position.set(u,5.5,Jt+.06),t.add(x);let y=new ue(new me(h,.3,.1),mt("#C9A27E"));y.position.set(u,.15,Jt+.05),t.add(y);let v=-6.2,b=new ue(new me(2.9,3.9,.12),mt("#B07A4F"));b.position.set(v,1.95,Jt+.06);let R=new ue(new me(2.5,3.6,.1),mt("#9C6B4E"));R.position.set(v,1.8,Jt+.14);let S=new ue(new st(1.8,.5),new Oe({map:ct(Ht("\u{1F6AA} \uB098\uAC00\uB294 \uBB38",{w:360,h:100,size:46,bg:"#FFFDF8",radius:50,color:"#4A3B38"})),transparent:!0}));S.position.set(v,4.3,Jt+.08),t.add(b,R,S);let T=document.createElement("canvas");T.width=900,T.height=700;{let E=T.getContext("2d");E.fillStyle="#FFFDF8",Qn(E,0,0,900,700,40),E.fill(),E.strokeStyle="#B07A4F",E.lineWidth=8,Qn(E,20,20,860,660,30),E.stroke(),E.textAlign="center",E.fillStyle="#E07B39",E.font='28px "Gowun Dodum"',E.fillText("P H O T O   M U S E U M",450,110),E.fillStyle="#4A3B38",E.font='74px "Jua"',E.fillText(((M=e.museum)==null?void 0:M.title)||"\uC6B0\uB9AC \uAC00\uC871 \uC0AC\uC9C4\uAD00",450,210),E.font='36px "Jua"',E.fillStyle="#7C6A66",E.fillText(`${e.name||"\uC6B0\uB9AC"} \uB9C8\uC744`,450,280),E.font='30px "Gowun Dodum"',i.forEach((N,B)=>E.fillText(`${N.emoji}  ${N.title} \xB7 ${N.photos.length}\uC7A5`,450,370+B*52)),E.fillStyle="#B5552B",E.font='28px "Gowun Dodum"',E.fillText("\u2192 \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC5B4\uAC00\uBA70 \uAD00\uB78C\uD574 \uC8FC\uC138\uC694",450,650)}let z=new ue(new st(4.2,3.27),new Oe({map:ct(T)}));z.position.set(-1.6,3,Jt+.05),t.add(z);let C=new me(.9,.12,.35),I=new Oe({color:"#FFF1C9"});a.forEach(E=>{let N=E.theme,B=E.x1-E.x0,L=ig(N.color,.55),V=new ue(new st(B,1.4),new kt({color:L,gradientMap:Dn}));V.position.set((E.x0+E.x1)/2,.7,Jt+.02),t.add(V);let D=new ue(new st(B,.5),V.material);D.position.set((E.x0+E.x1)/2,6,Jt+.02),t.add(D);let k=new ue(new st(B-.6,3.2),new kt({color:ig(N.color,.3),gradientMap:Dn}));k.rotation.x=-Math.PI/2,k.position.set((E.x0+E.x1)/2,.01,.4),t.add(k);let $=document.createElement("canvas");$.width=560,$.height=800;let J=$.getContext("2d");J.fillStyle=N.color,Qn(J,0,0,560,800,36),J.fill(),J.fillStyle="rgba(255,255,255,.9)",Qn(J,24,24,512,752,26),J.fill(),J.textAlign="center",J.textBaseline="middle",J.font="150px serif",J.fillText(N.emoji||"\u{1F4F7}",280,190),J.fillStyle="#4A3B38",J.font='66px "Jua"',J.fillText(N.title,280,360),J.fillStyle="#7C6A66",J.font='30px "Gowun Dodum"',B_(J,N.subtitle||"",280,450,440,44),J.fillStyle="#B5552B",J.font='28px "Gowun Dodum"',J.fillText(`\uC0AC\uC9C4 ${N.photos.length}\uC7A5`,280,700);let ne=new ue(new st(2.3,3.29),new Oe({map:ct($)}));ne.position.set(E.headerX,3,Jt+.05),t.add(ne);let w=Ht([`${N.emoji} ${N.title}`],{w:640,h:140,size:64,bg:N.color,radius:30,color:"#FFFFFF"}),se=new ue(new st(3.2,.7),new Oe({map:ct(w),transparent:!0}));if(se.position.set(E.headerX+.4,6.9,Jt+.1),t.add(se),E.x1-E.x0>9){let K=(E.x0+E.x1)/2,ee=new ue(new me(2.4,.2,.7),mt("#B98A66"));ee.position.set(K,.55,4.3);let oe=new ue(new me(.15,.5,.6),mt("#8C6B55"));oe.position.set(K-1,.25,4.3);let pe=oe.clone();pe.position.x=K+1,t.add(ee,oe,pe)}});let H=new st(1,1),_=new me(1,1,.12),P=[mt("#B07A4F"),mt("#FFFFFF"),mt("#B98A66")],U=new Oe({color:"#F3E9DA"});r.forEach((E,N)=>{let B=new ue(_,P[E.ti%P.length]),L=new ue(H,U);B.position.set(E.x,Qd,Jt+.07),L.position.set(E.x,Qd,Jt+.135),t.add(B,L);let V=new ue(C,I);V.position.set(E.x,4.9,Jt+.25),t.add(V),E.frame=B,E.photo=L,E.state="idle",O(E,2.2,2.2)});function O(E,N,B){E.photo.scale.set(N,B,1),E.frame.scale.set(N+.26,B+.26,1)}function Z(E){if(E.placard){E.placard.visible=!0;return}let N=`${String(E.idx+1).padStart(2,"0")}${E.caption?" \xB7 "+E.caption:""}`,B=Ht(N.length>22?N.slice(0,21)+"\u2026":N,{w:512,h:90,size:34,bg:"#FFFDF8",radius:12,color:"#4A3B38",font:"Gowun Dodum"}),L=new ue(new st(1.8,.32),new Oe({map:ct(B),transparent:!0})),V=Qd-E.photo.scale.y/2-.45;L.position.set(E.x,V,Jt+.06),t.add(L),E.placard=L}function j(E){var N;E.photo.material!==U&&((N=E.photo.material.map)==null||N.dispose(),E.photo.material.dispose()),E.photo.material=U,E.state="idle",E.placard&&(E.placard.visible=!1),O(E,2.2,2.2)}let q=0;function X(E){E.state="loading",q++;let N=new Image;N.decoding="async";let B=setTimeout(()=>{E.state==="loading"&&(N.onload=N.onerror=null,G(E,Tr(E.theme,E.idx,E.src),1,!1))},8e3);N.onload=()=>{clearTimeout(B);let L=Math.min(1,F_/Math.max(N.width,N.height)),V=document.createElement("canvas");V.width=Math.round(N.width*L),V.height=Math.round(N.height*L);let D=V.getContext("2d");D.drawImage(N,0,0,V.width,V.height);try{D.getImageData(0,0,1,1),G(E,V,N.width/N.height,!0)}catch{let $=Math.round(600/(N.width/N.height));G(E,Tr(E.theme,E.idx,"(\uD30C\uC77C\uB85C \uC5F4\uC5C8\uC744 \uB54C\uB9CC \uBCF4\uC774\uB294 \uC548\uB0B4)",600,$,"\u{1F50D} \uD06C\uAC8C \uBCF4\uAE30\uB97C \uB20C\uB7EC \uD655\uC778\uD558\uC138\uC694"),N.width/N.height,!0)}},N.onerror=()=>{clearTimeout(B),G(E,Tr(E.theme,E.idx,E.src),1,!1)},N.src=wr(E)}function G(E,N,B,L){q--,E.state="done",E.ok=L,E.photo.material!==U&&E.photo.material.dispose(),E.photo.material=new Oe({map:ct(N)});let V=ng,D=ng/B;D>ep&&(D=ep,V=ep*B),O(E,V,D),Z(E)}let Y=eg,ce=new A(Y.x+v,0,1.2);return{group:t,themes:i,sections:a,entries:r,spawn:ce,themeStart(E){let N=a[E];return new A(Y.x+N.headerX+1.2,0,1.2)},clamp(E){E.x=Math.min(Y.x+l-.8,Math.max(Y.x+c+.8,E.x)),E.z=Math.min(Y.z+3.2,Math.max(Y.z+Jt+1,E.z))},currentTheme(E){let N=E.x-Y.x,B=a.find(L=>N>=L.x0-.6&&N<=L.x1+.6);return B?B.ti:-1},nearest(E){let N=E.x-Y.x;if(Math.abs(N-v)<1.8)return{type:"exit",emoji:"\u{1F6AA}",action:"\uBC16\uC73C\uB85C \uB098\uAC00\uAE30"};if(Math.abs(N- -1.6)<2)return{type:"welcome",emoji:"\u{1F4DA}",action:"\uC804\uCCB4 \uC568\uBC94 \uBCF4\uAE30"};let B=s.find(D=>Math.abs(N-D.x)<1.3);if(B)return{type:"header",ti:B.ti,emoji:B.theme.emoji||"\u{1F4DA}",action:`${B.theme.title} \uC568\uBC94`};let L=null,V=1.75;for(let D of r){let k=Math.abs(N-D.x);k<V&&(V=k,L=D)}return L?{type:"photo",entry:L,ti:L.ti,idx:L.idx,emoji:"\u{1F50D}",action:"\uD06C\uAC8C \uBCF4\uAE30"}:null},update(E,N,B){let L=B.x-Y.x;for(let V of r){let D=Math.abs(L-V.x);V.state==="idle"&&D<D_&&q<3?X(V):V.state==="done"&&D>U_&&j(V)}}}}function B_(n,e,t,i,r,s){let a=e.split(" "),o="",l=i;for(let c of a){let h=o?o+" "+c:c;n.measureText(h).width>r&&o?(n.fillText(o,t,l),o=c,l+=s):o=h}o&&n.fillText(o,t,l)}var zc=window.FAMILY,Gt=n=>document.querySelector(n),O_=Gt("#phone"),Rt={w:1,h:1,left:0,top:0},ug=()=>Rt.w/Rt.h<.8,z_=n=>new Promise(e=>setTimeout(e,n)),Ze,ut,rn,nn,To,Un,We,Vt,En,os,hp=[],dg=[],Ei=!1,At=null,sg=-2,ls=1,Vc=!1,cs=0,So=0,ag=0;function up(){let n=Math.min(devicePixelRatio||1,mi?1.75:1.5);return cs>=1&&(n=Math.min(n,1.25)),cs>=2&&(n=1),document.body.classList.contains("wide")&&(n=Math.min(n,1)),n}function k_(){try{let n=Ze.getContext(),e=n.getExtension("WEBGL_debug_renderer_info"),t=e?String(n.getParameter(e.UNMASKED_RENDERER_WEBGL)):"";return/Intel|Iris|UHD|HD Graphics|SwiftShader|llvmpipe|Mali-|Adreno \(TM\) [1-5]|PowerVR/i.test(t)}catch{return!1}}var _i={outfit:"#8FB8DE",hair:"#5A3A2A",longHair:!1},hs="day",Nn=null,Wc=new pc,H_=new A(16,34,14),W={pos:new A(0,0,31),vel:new A,yaw:Math.PI,y:0,vy:0,mode:"out",busy:!1,doorCooldown:0,target:null,via:[],pending:null,targetT:0,moveT:0,stuckT:0,swoopT:0,posing:null},ni=new Set,ga={x:0,y:0},_r={x:-11,z:19,ang:.5},G_=["family","mailbox","directions","campfire","question","calendar","poll","quiz","house","tree","photozone","museum"],pg=n=>{try{dispatchEvent(new CustomEvent("wv:visit",{detail:n}))}catch{}};async function mg({character:n,onProgress:e=()=>{}}={}){var a;n&&(_i={..._i,...n}),await Promise.race([Promise.all(['40px "Jua"','40px "Gowun Dodum"','40px "Gaegu"'].map(o=>document.fonts.load(o))),new Promise(o=>setTimeout(o,3e3))]),e(35),yg();let t=mi&&(navigator.deviceMemory&&navigator.deviceMemory<=2||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4);Ze=new so({antialias:!t,powerPreference:"high-performance"}),ls=up(),Ze.setPixelRatio(ls),Ze.shadowMap.enabled=!0,Ze.shadowMap.type=fc,Ze.outputColorSpace=Mt,Gt("#app").appendChild(Ze.domElement),Ze.domElement.addEventListener("webglcontextlost",o=>{o.preventDefault(),Vc=!0,tt("\uD654\uBA74\uC744 \uB2E4\uC2DC \uADF8\uB9AC\uB294 \uC911\u2026")}),Ze.domElement.addEventListener("webglcontextrestored",()=>{Vc=!1,Ze.setPixelRatio(ls),Ze.setSize(Rt.w,Rt.h),ya()}),ut=new ao,ut.fog=new Ql(It.day.fog,50,150),rn=new Yt(60,1,.1,900),To=new fo(It.day.hemi,It.day.ground,It.day.hemiI),ut.add(To),nn=new go(It.day.sun,It.day.sunI),nn.castShadow=!0;let i=mi?1024:1536;nn.shadow.mapSize.set(i,i),Object.assign(nn.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:90}),nn.shadow.bias=-5e-4,nn.shadow.normalBias=.03,ut.add(nn,nn.target),We=Q0(ut),Un=q0(ut,(o,l)=>We.colliders.some(c=>Math.hypot(o-c.x,l-c.z)<c.r+.8)||We.boxes.some(c=>o>c.minX-.8&&o<c.maxX+.8&&l>c.minZ-.8&&l<c.maxZ+.8)),e(65),Vt=rg(ut),e(85),hp=[...Un.colliders,...We.colliders],dg=We.boxes,og(!1),We.campfire.setCount(xg());let s=null;if(addEventListener("family:data",()=>{clearTimeout(s),s=setTimeout(()=>{og(!1),We.refresh()},80)}),addEventListener("family:read",()=>We.houses.refresh()),addEventListener("family:heart",o=>{var l;return $_((l=o.detail)==null?void 0:l.to)}),addEventListener("family:water",o=>q_(o.detail)),addEventListener("family:look",o=>{np(o.detail||{}),We.houses.refresh()}),addEventListener("family:me",()=>{np(fi()),We.refresh()}),addEventListener("family:season",o=>{let l=Un.setSeason(o.detail);W.mode==="out"&&Yc(l),We.refresh()}),os=new ue(new Qr(.32,.48,24),new Oe({color:"#E07B39",transparent:!0,opacity:0,depthWrite:!1})),os.rotation.x=-Math.PI/2,os.position.y=.05,ut.add(os),gg(),X_(),n1(),Gt("#btn-shot").onclick=()=>Hc(!1),(a=Gt("#btn-tour"))==null||a.addEventListener("click",()=>Wi("\uD22C\uC5B4\uB97C \uBA48\uCDC4\uC5B4\uC694. \uB9C8\uC74C\uB300\uB85C \uB458\uB7EC\uBCF4\uC138\uC694")),addEventListener("resize",Ao),document.addEventListener("visibilitychange",()=>{document.hidden||Wc.getDelta()}),Ao(),kc(j_()),(t||k_())&&Eg(1),ya(),bg(),zc.demoPhotos){let o=Vt.themes.flatMap(h=>h.photos),l=window.requestIdleCallback||(h=>setTimeout(h,120)),c=()=>{let h=o.shift();if(h){try{wr(h)}catch{}l(c)}};l(c)}return/debug/.test(location.hash)&&(window.__wv={scene:ut,camera:rn,goTo:o=>pp(We.interactables.find(l=>l.id===o)),takePhoto:Hc,enterMuseum:Xc,exitMuseum:Zc,cycleTime:op,startTour:hg,stopTour:Wi,applyTime:kc,state:W,props:We,flowerCount:()=>We.flowerCount(),interact:o=>qc(We.interactables.find(l=>l.id===o)),npcVisible:o=>{var l;return!!((l=We.houses.npc(o))!=null&&l.root.visible)},treeStage:()=>We.familyTree.refresh().stage,current:()=>(At==null?void 0:At.id)||"",pos:()=>[W.pos.x,W.pos.z],setSeason:o=>Od(o),season:()=>Un.season,stats:()=>{var h;let o=0,l=0;ut.traverse(u=>{if(u.isMesh||u.isSprite||u.isPoints||u.isLine){o++;let d=!0,f=u;for(;f;){if(!f.visible){d=!1;break}f=f.parent}d&&l++}});let c=Ze.info;return{calls:c.render.calls,tris:c.render.triangles,geos:c.memory.geometries,tex:c.memory.textures,programs:(h=c.programs)==null?void 0:h.length,objects:o,visible:l,dpr:Ze.getPixelRatio(),level:cs}}}),{themes:Vt.themes,start:W_,setCharacter:np,enterMuseum:()=>Xc(),letterSent:fg,takePhoto:o=>Hc(!0,o),portrait:V_,resize:()=>{Ao(),ya()},startTour:hg,stopTour:Wi,isTouring:()=>!!Nn,setTime:kc,getTime:()=>hs,cycleTime:op}}var vi=480,Hi=600,bo=null,tp=new Uint8ClampedArray(256).map((n,e)=>{let t=e/255;return Math.round(255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055))});function V_(n={}){if(!Ze||Vc)return null;if(!bo){let f=new ao;f.add(new fo(It.day.hemi,It.day.ground,It.day.hemiI));let m=new go(It.day.sun,It.day.sunI);m.position.set(2.5,5,6),f.add(m);let g=new Yt(26,vi/Hi,.1,30);g.position.set(0,1,4.6),g.lookAt(0,.8,0),bo={s:f,cam:g,rt:new Xn(vi,Hi),buf:new Uint8Array(vi*Hi*4),big:document.createElement("canvas")},bo.big.width=vi,bo.big.height=Hi}let{s:e,cam:t,rt:i,buf:r,big:s}=bo,a=da({type:"family",...n,shadows:!1});a.root.rotation.y=.32,a.animate(0,0,0),e.add(a.root);let o=Ze.getRenderTarget(),l=Ze.getClearColor(new Me),c=Ze.getClearAlpha();Ze.setRenderTarget(i),Ze.setClearColor(0,0),Ze.clear(),Ze.render(e,t),Ze.readRenderTargetPixels(i,0,0,vi,Hi,r),Ze.setRenderTarget(o),Ze.setClearColor(l,c),e.remove(a.root),a.root.traverse(f=>{var m;return(m=f.geometry)==null?void 0:m.dispose()});let h=new ImageData(vi,Hi);for(let f=0;f<Hi;f++){let m=(Hi-1-f)*vi*4,g=f*vi*4;for(let p=0;p<vi*4;p+=4)h.data[g+p]=tp[r[m+p]],h.data[g+p+1]=tp[r[m+p+1]],h.data[g+p+2]=tp[r[m+p+2]],h.data[g+p+3]=r[m+p+3]}s.getContext("2d").putImageData(h,0,0);let u=document.createElement("canvas");u.width=vi/2,u.height=Hi/2;let d=u.getContext("2d");return d.imageSmoothingQuality="high",d.drawImage(s,0,0,u.width,u.height),u.toDataURL("image/png")}function W_({hint:n=!0}={}){Ei=!0,W.swoopT=1.8,wo=Gc=0,Qe.saved()&&Qe.setEnabled(!0);let e=0;try{e=+localStorage.getItem("family-hints")||0,localStorage.setItem("family-hints",String(e+1))}catch{}n&&e<2&&setTimeout(()=>tt("\u{1F446} \uD654\uBA74\uC744 \uB04C\uBA74 \uAC77\uACE0, \uC774\uB984\uD45C\uB97C \uB204\uB974\uBA74 \uCC3E\uC544\uAC00\uC694",4200),900);let t=hs==="night"?"\u{1F319} \uBC24\uC5D0 \uC654\uB124\uC694. \uAC00\uB85C\uB4F1\uC744 \uCF1C \uB450\uC5C8\uC5B4\uC694":hs==="dusk"?"\u{1F307} \uB178\uC744 \uC9C0\uB294 \uB9C8\uC744\uC774\uC5D0\uC694. \uCC9C\uCC9C\uD788 \uB458\uB7EC\uBCF4\uC138\uC694":null;t&&setTimeout(()=>tt(t,3600),5600);let i=bs();i.length&&setTimeout(()=>{nr(["\u{1F382}","\u{1F389}","\u{1F388}","\u{1F497}","\u2728"]),Qe.sfx("birthday"),tt(`\u{1F382} \uC624\uB298\uC740 ${i.map(r=>r.nick||r.role||r.name).join(", ")} \uC0DD\uC77C\uC774\uC5D0\uC694! \uC9D1 \uC55E\uC5D0 \uCF00\uC774\uD06C\uAC00 \uC788\uC5B4\uC694`,4600)},2400)}function np(n){_i={..._i,...n},En&&gg()}var $c=new Set,ap=n=>n.id||`${n.name}|${n.time||""}`;function og(n){ot("letters").slice().reverse().forEach(e=>{let t=ap(e);$c.has(t)||($c.add(t),We.plantFlower(e,n))})}function fg(n){if(n&&$c.has(ap(n)))return;n&&$c.add(ap(n));let e=We.plantFlower(n||{name:"\uC190\uB2D8",who:"guest"},!0);vr(ut,new A(W.pos.x,2.2+W.y,W.pos.z),10,"\u{1F48C}"),e&&W.mode==="out"&&!Nn&&(W.target=new A(ht.x-ht.r-1,0,ht.z+.6),W.via=dp(W.pos,W.target),W.pending=null,W.targetT=12,W.moveT=0,setTimeout(()=>tt("\u{1F337} \uBCF4\uB0B8 \uD3B8\uC9C0\uAC00 \uAC00\uC871 \uC815\uC6D0\uC5D0 \uAF43\uC73C\uB85C \uD53C\uC5C8\uC5B4\uC694",3200),500))}function $_(n){var t;let e=We.houses.spot(n);!e||W.mode!=="out"||(vr(ut,new A(e.npcX,2.4,e.npcZ),12),(t=We.houses.npc(n))==null||t.wave(1.6))}function q_({grew:n}={}){if(We.familyTree.refresh(),W.mode!=="out")return;let e=We.familyTree.top,t=Math.hypot(W.pos.x-e.x,W.pos.z-e.z)<8,i=()=>{vr(ut,e.clone().setY(2.2),n?18:8,n?"\u2728":"\u{1F4A7}"),We.familyTree.refresh()};if(t){En.wave(1);for(let r=0;r<3;r++)setTimeout(()=>Fc(ut,new A(W.pos.x,1.6,W.pos.z),e,"\u{1F4A7}",.6,r===2?i:null),r*140)}else i()}function gg(){En&&ut.remove(En.root),En=da({type:"player",outfit:_i.outfit,hair:_i.hair,longHair:!!_i.longHair,glasses:!!_i.glasses,hat:_i.hat||"",kid:!!_i.kid}),ut.add(En.root)}function j_(){let n=location.hash;if(/night/.test(n))return"night";if(/sunset|dusk/.test(n))return"dusk";if(/day|morning/.test(n))return"day";try{let t=localStorage.getItem("family-time");if(It[t])return t}catch{}if(zc.skyMode&&It[zc.skyMode])return zc.skyMode;let e=new Date(si().toLocaleString("en-US",{timeZone:"Asia/Seoul"})).getHours();return e>=6&&e<16?"day":e<19?"dusk":"night"}function Yc(n){ut.fog.color.set(n.fog),nn.color.set(n.sun),nn.intensity=n.sunI,To.color.set(n.hemi),To.groundColor.set(n.ground),To.intensity=n.hemiI}function kc(n){hs=It[n]?n:"day";let e=Un.setTime(hs);return W.mode==="out"&&Yc(e),hs}function op(){let n=["day","dusk","night"],e=n[(n.indexOf(hs)+1)%n.length];kc(e);try{localStorage.setItem("family-time",e)}catch{}return tt(e==="night"?"\u{1F319} \uBC24 \uB9C8\uC744\uC774\uC5D0\uC694. \uAC00\uB85C\uB4F1\uC774 \uCF1C\uC84C\uC5B4\uC694":e==="dusk"?"\u{1F307} \uB178\uC744\uC774 \uC9C0\uACE0 \uC788\uC5B4\uC694":"\u2600\uFE0F \uB2E4\uC2DC \uD658\uD55C \uB0AE\uC774\uC5D0\uC694"),e}function yg(){let n=O_.getBoundingClientRect();Rt.w=Math.max(1,n.width),Rt.h=Math.max(1,n.height),Rt.left=n.left,Rt.top=n.top}function Ao(){yg(),rn.aspect=Rt.w/Rt.h,rn.fov=ug()?W.mode==="museum"?55:64:50,rn.updateProjectionMatrix(),ls=up(),Ze.setPixelRatio(ls),Ze.setSize(Rt.w,Rt.h)}function X_(){addEventListener("keydown",a=>{An()||/INPUT|TEXTAREA/.test(a.target.tagName)||document.body.classList.contains("reading")||(ni.add(a.code),/Key[WASD]|Arrow/.test(a.code)&&(document.body.classList.add("moved"),Wi()),a.code==="Space"&&(lg(),a.preventDefault()),(a.code==="KeyE"||a.code==="Enter")&&qc(),a.code==="KeyH"&&cg(),a.code==="KeyN"&&op())}),addEventListener("keyup",a=>ni.delete(a.code)),addEventListener("blur",()=>ni.clear());let n=Ze.domElement,e=Gt("#joy"),t=e.querySelector(".knob"),i=48,r=null;n.addEventListener("pointerdown",a=>{if(!(r||!Ei)){r={id:a.pointerId,sx:a.clientX,sy:a.clientY,ax:a.clientX,ay:a.clientY,drag:!1,t:performance.now()};try{n.setPointerCapture(a.pointerId)}catch{}}}),n.addEventListener("pointermove",a=>{if(!r||a.pointerId!==r.id)return;if(!r.drag){if(Math.hypot(a.clientX-r.sx,a.clientY-r.sy)<10)return;r.drag=!0,W.target=null,W.pending=null,Wi(),e.classList.add("active"),document.body.classList.add("moved")}let o=a.clientX-r.ax,l=a.clientY-r.ay,c=Math.hypot(o,l);c>i&&(r.ax=a.clientX-o/c*i,r.ay=a.clientY-l/c*i,o=a.clientX-r.ax,l=a.clientY-r.ay),ga.x=o/i,ga.y=l/i,e.style.left=`${r.ax-Rt.left}px`,e.style.top=`${r.ay-Rt.top}px`,t.style.transform=`translate(${o}px, ${l}px)`});let s=a=>{if(!r||a.pointerId!==r.id)return;let o=!r.drag&&performance.now()-r.t<450&&a.type==="pointerup";r=null,ga.x=ga.y=0,e.classList.remove("active"),e.style.left=e.style.top="",t.style.transform="",o&&J_(a.clientX,a.clientY)};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),ip(Gt("#btn-action"),()=>qc()),ip(Gt("#btn-jump"),()=>lg()),ip(Gt("#btn-heart"),()=>cg())}function ip(n,e){let t=0;n.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0||(t=performance.now(),i.preventDefault(),e())}),n.addEventListener("click",()=>{performance.now()-t>500&&e()})}function dp(n,e){let t=[],i=n;for(let r=0;r<3;r++){let s=Y_(i,e);if(!s)break;t.push(s),i=s}return t}function Y_(n,e){let t=e.x-n.x,i=e.z-n.z,r=t*t+i*i;if(r<1)return null;let s=null;for(let d of hp){if(d.r<.8)continue;let f=((d.x-n.x)*t+(d.z-n.z)*i)/r;if(f<=.02||f>=.98)continue;let m=n.x+t*f,g=n.z+i*f;Math.hypot(d.x-m,d.z-g)<d.r+xi+.3&&(!s||f<s.t)&&(s={c:d,t:f,px:m,pz:g})}if(!s)return null;let{c:a}=s,o=Math.sqrt(r),l=s.px-a.x,c=s.pz-a.z,h=Math.hypot(l,c);h<.001&&(l=-i/o,c=t/o,h=1);let u=a.r+xi+1.1;return new A(a.x+l/h*u,0,a.z+c/h*u)}function pp(n){let e=W.pos.x-n.pos.x,t=W.pos.z-n.pos.z,i=Math.hypot(e,t)||1,r=Math.max(.5,n.r-.6);W.target=new A(n.pos.x+e/i*r,0,n.pos.z+t/i*r);let s=[];if(W.mode==="out"&&n.pos.z<-6!=W.pos.z<-6){let a=new A(0,0,-3),o=new A(0,0,-10);s.push(...W.pos.z<-6?[o,a]:[a,o])}W.via=W.mode==="out"?[...s,...dp(s[s.length-1]||W.pos,W.target)]:[],W.pending=n,W.targetT=20,W.moveT=0,W.stuckT=0}function lp(n){os.position.set(n.x,.05,n.z),So=1}var rp=new mc,Z_=new qn(new A(0,1,0),0);function J_(n,e){if(An()||W.busy)return;Wi();let t=new he((n-Rt.left)/Rt.w*2-1,-((e-Rt.top)/Rt.h)*2+1);if(rp.setFromCamera(t,rn),W.mode==="out"){let r=rp.intersectObjects(We.interactables.map(s=>s.label))[0];if(r){let s=We.interactables.find(a=>a.label===r.object);pp(s),lp(s.pos),Ye(8);return}}let i=new A;rp.ray.intersectPlane(Z_,i)&&(W.target=i,W.via=W.mode==="out"?dp(W.pos,i):[],W.pending=null,W.targetT=10,W.moveT=0,W.stuckT=0,lp(i))}var vg="family-potatoes",xg=()=>{try{return+localStorage.getItem(vg)||0}catch{return 0}};function K_(n){if(n===1)return"\u{1F360} \uCCAB \uACE0\uAD6C\uB9C8\uB97C \uB123\uC5C8\uC5B4\uC694. \uB178\uB987\uB178\uB987 \uC775\uB294 \uC911\u2026";if(n%5===0)return`\u{1F360} \uBC8C\uC368 ${n}\uAC1C\uC9F8! \uC624\uB298 \uC800\uB141\uC740 \uAD70\uACE0\uAD6C\uB9C8 \uD30C\uD2F0 \u{1F389}`;let e=["\uD638\uD638 \uBD88\uC5B4 \uBA39\uC73C\uBA74 \uAFC0\uB9DB\uC774\uC5D0\uC694","\uAECD\uC9C8\uAE4C\uC9C0 \uB2EC\uCF64\uD558\uAC8C \uC775\uC5C8\uC5B4\uC694","\uBAA8\uB2E5\uBD88\uC774 \uB530\uB73B\uD574\uC694. \uC7A0\uAE50 \uC26C\uC5C8\uB2E4 \uAC00\uC694","\uD558\uB098\uB294 \uD560\uBA38\uB2C8 \uBAAB\uC73C\uB85C \uB0A8\uACA8 \uB458\uAC8C\uC694","\uD0C0\uB2E5\uD0C0\uB2E5, \uBD88\uAF43\uC774 \uCDA4\uC744 \uCDB0\uC694"];return`\u{1F360} ${e[Math.floor(Math.random()*e.length)]}`}var sp={family:()=>bc(),directions:Ba,question:()=>is(),calendar:()=>vo(),poll:()=>Mc(),quiz:Oa,mailbox:()=>Hn(fg),tree:()=>Sc(),house:n=>{let e=We.houses.npc(n.member);e&&n.member!==_e()&&(e.wave(2),vr(ut,new A(e.root.position.x,2.4,e.root.position.z),6)),setTimeout(()=>{!An()&&W.mode==="out"&&pa(n.member)},n.member===_e()?0:450)},campfire:()=>{En.wave(.8),Ye(30),We.campfire.toss(ut,new A(W.pos.x,1.4+W.y,W.pos.z),()=>{let n=xg()+1;try{localStorage.setItem(vg,String(n))}catch{}We.campfire.setCount(n),vr(ut,new A(0,2.2,4),6,"\u2728"),Qe.sfx("crackle"),tt(K_(n))})},photozone:()=>Dt().some(n=>n.id!==_e())?F0():Hc(!0,[]),museum:()=>Xc()};function Q_(){let n=W.pos;if(W.mode==="museum")return Vt.nearest(n);let e=null,t=1/0;for(let i of We.interactables){let r=Math.hypot(n.x-i.pos.x,n.z-i.pos.z);r<i.r&&r<t&&(t=r,e=i)}return e}function qc(n=At){var t;if(W.busy||An())return;if(!n){En.wave(1.4);return}if(Ye(15),Qe.sfx("pop"),W.mode==="museum"){n.type==="exit"?Zc():n.type==="welcome"?Nr(Vt.themes):n.type==="header"?Nr(Vt.themes,n.ti):n.type==="photo"&&Ko(Vt.themes,n.ti,n.idx);return}W.yaw=Math.atan2(n.pos.x-W.pos.x,n.pos.z-W.pos.z);let e=n.id.startsWith("house:")?"house":n.id;pg(e),(t=sp[e])==null||t.call(sp,n)}function e1(){var t,i,r;let n=Gt("#btn-action"),e=At?(At.id||At.type)+((r=(i=(t=At.entry)==null?void 0:t.src)!=null?i:At.ti)!=null?r:""):"";n.dataset.key!==e&&(e&&!n.dataset.key&&(Ye(8),Qe.sfx("chime")),n.dataset.key=e,n.classList.toggle("ready",!!At),n.querySelector(".em").textContent=At?At.emoji:"\u{1F44B}",n.querySelector(".lb").textContent=At?At.action:"\uC778\uC0AC\uD558\uAE30")}function lg(){W.y<=.001&&!An()&&!W.busy&&(W.vy=6.5,Qe.sfx("jump"))}function cg(){vr(ut,new A(W.pos.x,2.2+W.y,W.pos.z),8),En.wave(1),Qe.sfx("heart"),W.mode==="out"&&(At!=null&&At.member)&&At.member!==_e()&&Ld(At.member)}function hg(){!Ei||W.mode!=="out"||W.busy||(Nn={i:0,waitT:.4},document.body.classList.add("touring"),tt("\u{1F6B6} \uC790\uB3D9 \uD22C\uC5B4 \uC2DC\uC791! \uD654\uBA74\uC744 \uB04C\uBA74 \uC5B8\uC81C\uB4E0 \uBA48\uCDB0\uC694",3200))}function Wi(n){Nn&&(Nn=null,document.body.classList.remove("touring"),W.pending&&(W.target=null,W.pending=null),n&&tt(n))}function t1(){let n=G_[Nn.i++];if(!n){Wi(),tt("\u{1F389} \uD22C\uC5B4 \uB05D! \uC774\uC81C \uB9C8\uC74C\uB300\uB85C \uB458\uB7EC\uBCF4\uC138\uC694",3600),nr(),Qe.sfx("tada");return}let e=n==="house"?We.interactables.find(t=>t.member&&t.member!==_e()):We.interactables.find(t=>t.id===n);e&&(pp(e),lp(e.pos),Nn.waitT=n==="campfire"?2.4:n==="house"?1.2:.9)}var jc=n=>new Promise(e=>{Gt("#fade").classList.toggle("on",n),setTimeout(e,460)});function n1(){let n=Gt("#museum-bar");n.innerHTML="",Vt.themes.forEach((t,i)=>{let r=document.createElement("button");r.className="chip",r.dataset.ti=i,r.textContent=`${t.emoji} ${t.title}`,r.onclick=()=>{W.pos.copy(Vt.themeStart(i)),W.target=null,Ye(8),ya()},n.appendChild(r)});let e=document.createElement("button");e.className="chip",e.textContent="\u{1F4DA} \uC804\uCCB4 \uC568\uBC94",e.onclick=()=>Nr(Vt.themes),n.append(e),Gt("#btn-exit").onclick=()=>Zc()}var cp=()=>Zc(!0);async function Xc(n=-1){if(W.mode==="museum"||W.busy)return;let e=!!Nn;Wi(),pg("museum"),W.busy=!0,await jc(!0),W.mode="museum",Un.group.visible=We.group.visible=!1,Vt.group.visible=!0,nn.castShadow=!1,Yc(It.day),W.pos.copy(n>=0?Vt.themeStart(n):Vt.spawn),W.vel.set(0,0,0),W.target=null,W.yaw=Math.PI/2,document.body.classList.add("in-museum"),Ao(),ya(),tr(cp),await jc(!1),W.busy=!1,tt(e?"\u{1F3C1} \uD22C\uC5B4\uC758 \uB9C8\uC9C0\uB9C9, \uC0AC\uC9C4\uAD00\uC774\uC5D0\uC694. \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC73C\uBA70 \uAD6C\uACBD\uD558\uC138\uC694":"\u{1F449} \uC624\uB978\uCABD\uC73C\uB85C \uAC78\uC73C\uBA70 \uC0AC\uC9C4\uC744 \uAD6C\uACBD\uD558\uC138\uC694",e?4200:2400)}async function Zc(n=!1){if(W.mode==="museum"){if(W.busy){n&&tr(cp);return}n||Dr(cp),W.busy=!0,await jc(!0),W.mode="out",Un.group.visible=We.group.visible=!0,Vt.group.visible=!1,nn.castShadow=Ze.shadowMap.enabled,Yc(Un.palette()),W.pos.set(as.x,0,as.z+2.4),W.vel.set(0,0,0),W.target=null,W.yaw=0,W.doorCooldown=1.5,document.body.classList.remove("in-museum"),Ao(),ya(),await jc(!1),W.busy=!1}}function i1(n){let e=n.width,t=n.height,i=Math.round(e*.05),r=Math.round(e*.22),s=document.createElement("canvas");s.width=e+i*2,s.height=t+i+r;let a=s.getContext("2d");a.fillStyle="#FFF8EC",a.fillRect(0,0,s.width,s.height),a.drawImage(n,i,i),a.fillStyle="#B5552B",a.textAlign="center",a.font=`${Math.round(r*.32)}px "Jua", sans-serif`,a.fillText(qt(),s.width/2,t+i+r*.45),a.fillStyle="#7C6A66",a.font=`${Math.round(r*.15)}px "Gowun Dodum", sans-serif`,a.fillText(`${gs(si()).date} \xB7 \uC6B0\uB9AC \uAC00\uC871 \uB9C8\uC744\uC5D0\uC11C`,s.width/2,t+i+r*.74);let o=document.createElement("canvas");o.width=Math.round(s.width*1.12),o.height=Math.round(s.height*1.1);let l=o.getContext("2d");l.fillStyle="#EAD7BB",l.fillRect(0,0,o.width,o.height),l.save(),l.translate(o.width/2,o.height/2),l.rotate(-.03),l.shadowColor="rgba(80,40,30,.3)",l.shadowBlur=e*.05,l.shadowOffsetY=e*.02,l.drawImage(s,-s.width/2,-s.height/2),l.restore(),l.fillStyle="rgba(255,236,170,.8)";for(let[c,h,u]of[[o.width*.09,o.height*.055,-.5],[o.width*.91,o.height*.055,.5]])l.save(),l.translate(c,h),l.rotate(u),l.fillRect(-e*.11,-e*.03,e*.22,e*.06),l.restore();return o}async function Hc(n=!1,e=[]){if(W.busy||An())return;let t=null;W.busy=!0;try{if(n){Wi(),W.target=null,W.pending=null;let o=Math.sin(_r.ang),l=Math.cos(_r.ang),c=Math.cos(_r.ang),h=-Math.sin(_r.ang),u=_r.x+o*.9,d=_r.z+l*.9;W.pos.set(u,0,d),W.vel.set(0,0,0),W.yaw=_r.ang,W.y=0,W.vy=0;let f=e.map(p=>We.houses.npc(p)).filter(Boolean).slice(0,5),m=f.map(p=>({c:p,p:p.root.position.clone(),r:p.root.rotation.y,v:p.root.visible}));f.forEach((p,x)=>{let y=x%2===0?1:-1,v=Math.floor(x/2)+1,b=y*[0,.95,1.8,2.55][v],R=[0,0,-.45,-.9][v];p.root.position.set(u+c*b+o*R,0,d+h*b+l*R),p.root.rotation.y=_r.ang,p.head.rotation.y=0,p.root.visible=!0}),t=()=>m.forEach(p=>{p.c.root.position.copy(p.p),p.c.root.rotation.y=p.r,p.c.root.visible=p.v}),W.posing={x:u,z:d,nx:o,nz:l,back:f.length<=1?4.4:f.length<=3?6.2:7.6},En.wave(3),f.forEach(p=>p.wave(3));let g=Gt("#count");for(let p of["3","2","1"])g.textContent=p,g.classList.remove("show"),g.offsetWidth,g.classList.add("show"),Qe.sfx("pop"),Ye(8),await z_(680);g.classList.remove("show"),g.textContent="",vr(ut,new A(u,2.4,d),10)}Ze.render(ut,rn);let i=Ze.domElement;if(n&&i.height>i.width*1.3){let o=i.width,l=Math.round(o*1.25),c=Math.max(0,Math.min(i.height-l,Math.round(i.height*.5-l/2))),h=document.createElement("canvas");h.width=o,h.height=l,h.getContext("2d").drawImage(i,0,c,o,l,0,0,o,l),i=h}let r=i1(i),s=r.toDataURL("image/jpeg",.9);Qe.sfx("shutter"),Ye(25),Gt("#fade").style.background="#fff",Gt("#fade").classList.add("on"),setTimeout(()=>{Gt("#fade").classList.remove("on"),setTimeout(()=>Gt("#fade").style.background="",450)},120),t==null||t(),t=null,W.posing=null;let a=/KAKAOTALK|Instagram|FBAN|FBAV|Line\//i.test(navigator.userAgent);Ua("\uAC00\uC871\uC0AC\uC9C4",`
      <img src="${s}" style="width:100%;border-radius:14px;box-shadow:var(--shadow);-webkit-touch-callout:default" alt="\uAC00\uC871\uC0AC\uC9C4" />
      <p class="muted center">${a?"\uC0AC\uC9C4\uC744 <b>\uAE38\uAC8C \uB20C\uB7EC</b> \uC800\uC7A5\uD574 \uC8FC\uC138\uC694":"\uC0AC\uC9C4\uC744 <b>\uAE38\uAC8C \uB20C\uB7EC</b> \uC800\uC7A5\uD558\uAC70\uB098 \uC544\uB798 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694"}</p>
      <div class="btns">
        <button class="btn pink ph-share">\u{1F4E4} \uACF5\uC720\uD558\uAE30</button>
        <button class="btn ph-save">\u{1F4BE} \uC800\uC7A5\uD558\uAE30</button>
      </div>`,o=>{let l=null,c=null;r.toBlob(u=>{u&&(l=new File([u],"family-village-photo.jpg",{type:"image/jpeg"}),c=URL.createObjectURL(u))},"image/jpeg",.9);let h=()=>{if(a){tt("\uC0AC\uC9C4\uC744 \uAE38\uAC8C \uB20C\uB7EC \uC800\uC7A5\uD574 \uC8FC\uC138\uC694");return}let u=document.createElement("a");u.href=c||s,u.download="family-village-photo.jpg",document.body.appendChild(u),u.click(),u.remove(),tt("\u{1F4BE} \uC0AC\uC9C4\uC744 \uC800\uC7A5\uD588\uC5B4\uC694")};return o.querySelector(".ph-save").onclick=h,o.querySelector(".ph-share").onclick=async()=>{var u;if(l&&((u=navigator.canShare)!=null&&u.call(navigator,{files:[l]})))try{await navigator.share({files:[l],title:qt()});return}catch(d){if((d==null?void 0:d.name)==="AbortError")return}h()},()=>{c&&URL.revokeObjectURL(c)}})}finally{t==null||t(),W.posing=null,W.busy=!1}}var xi=.45;function r1(n){if(W.mode==="museum"){Vt.clamp(n);return}for(let t of hp){let i=n.x-t.x,r=n.z-t.z,s=Math.hypot(i,r),a=t.r+xi;s<a&&s>1e-4&&(n.x=t.x+i/s*a,n.z=t.z+r/s*a)}for(let t of dg){let i=Math.max(t.minX,Math.min(n.x,t.maxX)),r=Math.max(t.minZ,Math.min(n.z,t.maxZ)),s=n.x-i,a=n.z-r,o=Math.hypot(s,a);if(o>=xi)continue;if(o>1e-4){n.x=i+s/o*xi,n.z=r+a/o*xi;continue}let l=[[n.x-t.minX,"x",t.minX-xi],[t.maxX-n.x,"x",t.maxX+xi],[n.z-t.minZ,"z",t.minZ-xi],[t.maxZ-n.z,"z",t.maxZ+xi]].sort((c,h)=>c[0]-h[0])[0];n[l[1]]=l[2]}let e=Math.hypot(n.x,n.z);e>39&&(n.x*=39/e,n.z*=39/e)}var Mo=new A;function s1(n){let e=0,t=0;if(!An()&&!W.busy&&((ni.has("KeyW")||ni.has("ArrowUp"))&&(t-=1),(ni.has("KeyS")||ni.has("ArrowDown"))&&(t+=1),(ni.has("KeyA")||ni.has("ArrowLeft"))&&(e-=1),(ni.has("KeyD")||ni.has("ArrowRight"))&&(e+=1),e+=ga.x,t+=ga.y,(e||t)&&(W.target=null,W.pending=null),W.target)){Mo.subVectors(W.target,W.pos),Mo.y=0;let a=Mo.length();W.targetT-=n,W.moveT+=n;let o=Math.hypot(W.vel.x,W.vel.z),l=W.pending,c;if(l){let h=Math.hypot(W.pos.x-l.pos.x,W.pos.z-l.pos.z);c=h<l.r-.2||h<l.r&&o<.6&&W.moveT>.5}else c=a<.35;if(W.stuckT=W.moveT>.5&&o<.5?W.stuckT+n:0,c||W.targetT<0||W.stuckT>.7){let h=l&&Math.hypot(W.pos.x-l.pos.x,W.pos.z-l.pos.z)<l.r;W.target=null,W.via=[],W.pending=null,W.stuckT=0,l&&(c||h)?qc(l):!c&&!Nn&&tt("\uADF8\uCABD\uC740 \uB9C9\uD600 \uC788\uC5B4\uC694")}else{let h=W.via[0];if(h){let u=h.x-W.pos.x,d=h.z-W.pos.z,f=Math.hypot(u,d);f<.9?W.via.shift():(e=u/f,t=d/f)}W.via.length||(e=Mo.x/a,t=Mo.z/a)}}let i=Math.hypot(e,t);i>1&&(e/=i,t/=i);let r=W.mode==="museum"?5.2:6.4;W.vel.x=ki(W.vel.x,e*r,10,n),W.vel.z=ki(W.vel.z,t*r,10,n),W.pos.x+=W.vel.x*n,W.pos.z+=W.vel.z*n,r1(W.pos);let s=Math.hypot(W.vel.x,W.vel.z);if(s>.3){let a=Math.atan2(W.vel.x,W.vel.z)-W.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),W.yaw+=a*Math.min(1,n*12)}return W.vy-=20*n,W.y=Math.max(0,W.y+W.vy*n),W.y===0&&(W.vy=0),En.root.position.set(W.pos.x,W.y,W.pos.z),En.root.rotation.y=W.yaw,s/r}var Gi=new A,Vi=new A,Bc=new A,Oc=new A;function _g(n,e,t=0){let i=W.pos,r=ug();if(W.posing){let s=W.posing;n.set(s.x+s.nx*s.back,1.6+s.back*.06,s.z+s.nz*s.back),e.set(s.x,1.25,s.z)}else if(Ei)if(W.mode==="museum")n.set(i.x,r?4.1:3.6,r?9.6:8.4),e.set(i.x,r?2.45:2.7,-3.2);else if(r){let s=ts((-i.z-4)/4,0,1);n.set(i.x,14.5-s*4,i.z+14.5-s*3.5),e.set(i.x,.6+s*.7,i.z-3.5+s*.3)}else n.set(i.x,10.5,i.z+13.5),e.set(i.x,1.2,i.z-1.5);else{let s=t*.08;n.set(Math.sin(s)*26,12+Math.sin(t*.3)*1.2,4+Math.cos(s)*26),e.set(0,2,-2)}}function ya(){_g(Gi,Vi,Wc.elapsedTime),rn.position.copy(Gi),rn.lookAt(Vi)}function a1(n,e){_g(Bc,Oc,e);let t=W.swoopT>0?2.4:5,i=W.swoopT>0?2.8:6;W.swoopT>0&&(W.swoopT-=n),Gi.x=ki(Gi.x,Bc.x,t,n),Gi.y=ki(Gi.y,Bc.y,t,n),Gi.z=ki(Gi.z,Bc.z,t,n),Vi.x=ki(Vi.x,Oc.x,i,n),Vi.y=ki(Vi.y,Oc.y,i,n),Vi.z=ki(Vi.z,Oc.z,i,n),rn.position.copy(Gi),rn.lookAt(Vi),W.camOverride&&(rn.position.copy(W.camOverride.pos),rn.lookAt(W.camOverride.look)),Un.sky.position.copy(rn.position)}var wo=0,Gc=0,o1=0;function Eg(n){cs=n,ls=up(),Ze.setPixelRatio(ls),Ze.setSize(Rt.w,Rt.h),n>=1&&Un.setLite(1),n>=2&&Ze.shadowMap.enabled&&(Ze.shadowMap.enabled=!1,nn.castShadow=!1,ut.traverse(e=>{e.material&&(e.material.needsUpdate=!0)})),n>=3&&Un.setLite(2)}function l1(n){if(!Ei||(wo+=n,Gc++,wo<2.5))return;let e=wo/Gc;wo=Gc=0,e>1/32&&cs<3?Eg(cs+1):cs>=3&&e>1/18&&++o1===2&&tt('\u{1F4D6} \uD734\uB300\uD3F0\uC774 \uD798\uB4E4\uC5B4\uD558\uBA74 \u2630 \uBA54\uB274\uC758 "\uAE00\uB85C \uBCF4\uAE30"\uB85C \uD3B8\uD558\uAC8C \uBCF4\uC138\uC694',4800)}function bg(){var i;if(requestAnimationFrame(bg),ag++,!Ei&&ag%2)return;let n=Math.min(Wc.getDelta(),.05),e=Wc.elapsedTime;if(Vc||document.hidden||An()||document.body.classList.contains("reading"))return;l1(n);let t=Ei?s1(n):0;if(En.animate(n,t,e),W.mode==="out"){Un.update(n,e,W.pos),We.update(n,e,W.pos,!!W.posing),nn.position.copy(W.pos).add(H_),nn.target.position.copy(W.pos);for(let r of We.interactables){let s=Math.hypot(W.pos.x-r.pos.x,W.pos.z-r.pos.z);r.label.material.opacity=Math.max(.3,Math.min(1,1.6-s/22))}W.doorCooldown-=n,Ei&&W.doorCooldown<0&&!W.busy&&W.vel.z<-1&&Math.hypot(W.pos.x-as.x,W.pos.z-as.z)<1.1&&Xc(),Nn&&Ei&&!W.busy&&!W.target&&(Nn.waitT-=n,Nn.waitT<=0&&t1())}else{Vt.update(n,e,W.pos);let r=Vt.currentTheme(W.pos);r!==sg&&(sg=r,document.querySelectorAll("#museum-bar .chip[data-ti]").forEach(s=>s.classList.toggle("on",+s.dataset.ti===r)),(i=document.querySelector("#museum-bar .chip.on"))==null||i.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}))}if($0(n),So>0){So-=n*1.3;let r=1-Math.max(0,So);os.scale.setScalar(1+r*.9),os.material.opacity=Math.max(0,So)}At=Ei&&!W.posing?Q_():null,e1(),a1(n,e),Ze.render(ut,rn)}var h1=window.FAMILY,Mg=n=>document.querySelector(n),Ro=[],fp=null,Sg=()=>document.body.classList.contains("reading"),u1=[["family","\u{1F3E1} \uAC00\uC871"],["question","\u{1F4AC} \uC9C8\uBB38"],["mailbox","\u2709\uFE0F \uD3B8\uC9C0"],["calendar","\u{1F4C5} \uB2EC\uB825"],["poll","\u{1F5F3}\uFE0F \uD22C\uD45C"],["tree","\u{1F331} \uB098\uBB34"],["album","\u{1F5BC}\uFE0F \uC0AC\uC9C4"],["quiz","\u2753 \uD034\uC988"],["directions","\u{1F5FA}\uFE0F \uBAA8\uC774\uB294 \uACF3"]];function $i(n,e,t,i,r=""){return`
    <section class="tv-sec" data-sec="${n}" aria-labelledby="tv-h-${n}">
      <h2 class="tv-h" id="tv-h-${n}"><span aria-hidden="true">${e}</span>${t}</h2>
      ${r?`<p class="muted tv-sub">${r}</p>`:""}
      <div class="tv-body" data-mount="${n}">${i.html}</div>
    </section>`}function wg({canPlay:n=!1,onPlay:e,onClose:t,onSent:i,section:r}={}){var h;if(Sg()){r&&mp(r);return}let s=Mg("#textview"),a=ys(),o=Ki(),l={family:Cd({hero:!1}),question:Pd(ke(),{embedded:!0}),mailbox:jo(i,{onBack:ln}),calendar:Id(),poll:Fd(),tree:Dd(),album:Jo(a),quiz:Yo(),directions:Xo()},c=n?'<button class="btn-primary tv-play">\u{1F3E1} 3D \uB9C8\uC744\uC5D0\uC11C \uAD6C\uACBD\uD558\uAE30</button>':"";if(s.innerHTML=`
    <div class="tv-top">
      <button class="tv-back" ${n?"":"hidden"} aria-label="3D \uB9C8\uC744\uB85C \uB3CC\uC544\uAC00\uAE30">\u{1F3E1} \uB9C8\uC744\uB85C</button>
      <div class="tv-chips" role="navigation" aria-label="\uAE00\uB85C \uBCF4\uAE30 \uCC28\uB840">
        ${u1.map(([u,d])=>`<button class="chip" data-go="${u}">${d}</button>`).join("")}
      </div>
      <button class="fs-toggle tv-fs" aria-label="${ka()?"\uAE00\uC790 \uC791\uAC8C":"\uAE00\uC790 \uD06C\uAC8C"}">${ka()?"\uAC00-":"\uAC00+"}</button>
    </div>
    <div class="tv-inner">
      <header class="tv-hero">
        <div class="en">FAMILY VILLAGE</div>
        <div class="tv-names">${Fe(qt())}</div>
        ${o>0?`<div class="intro-dday">\uD568\uAED8\uD55C \uC9C0 ${o.toLocaleString()}\uC77C\uC9F8</div>`:""}
        ${c}
        <p class="muted tv-hint">${n?"\uAC8C\uC784\uC774 \uC5B4\uB824\uC6B0\uBA74 \uADF8\uB300\uB85C \uC544\uB798\uB85C \uB0B4\uB824\uC11C \uBCF4\uC138\uC694":"\uC544\uB798\uB85C \uB0B4\uB9AC\uBA74\uC11C \uCC9C\uCC9C\uD788 \uBCF4\uC138\uC694"}</p>
      </header>
      ${$i("family","\u{1F3E1}","\uC6B0\uB9AC \uAC00\uC871",l.family)}
      ${$i("question","\u{1F4AC}","\uC624\uB298\uC758 \uC9C8\uBB38",l.question,"\uB0B4\uAC00 \uB2F5\uD558\uBA74 \uAC00\uC871\uC758 \uB2F5\uC774 \uC5F4\uB824\uC694")}
      ${$i("mailbox","\u2709\uFE0F","\uC548\uBD80 \uC6B0\uCCB4\uD1B5",l.mailbox)}
      ${$i("calendar","\u{1F4C5}","\uAC00\uC871 \uB2EC\uB825",l.calendar)}
      ${$i("poll","\u{1F5F3}\uFE0F","\uAC00\uC871 \uD22C\uD45C\uD568",l.poll)}
      ${$i("tree","\u{1F331}","\uD568\uAED8 \uD0A4\uC6B0\uB294 \uB098\uBB34",l.tree)}
      ${$i("album","\u{1F5BC}\uFE0F",((h=h1.museum)==null?void 0:h.title)||"\uAC00\uC871 \uC0AC\uC9C4\uAD00",l.album,"\uC0AC\uC9C4\uC744 \uB204\uB974\uBA74 \uD06C\uAC8C \uBCFC \uC218 \uC788\uC5B4\uC694")}
      ${$i("quiz","\u2753","\uAC00\uC871 \uD034\uC988",l.quiz)}
      ${$i("directions","\u{1F5FA}\uFE0F","\uBAA8\uC774\uB294 \uACF3",l.directions)}
      <footer class="tv-foot">
        <div class="btns" style="justify-content:center">
          <button class="btn tv-share">\u{1F517} \uB9C8\uC744 \uC8FC\uC18C \uBCF4\uB0B4\uAE30</button>
          ${n?'<button class="btn pink tv-play">\u{1F3E1} \uB9C8\uC744\uB85C \uB4E4\uC5B4\uAC00\uAE30</button>':""}
        </div>
        <p style="margin-top:18px">${Fe(qt())} \xB7 \uC6B0\uB9AC \uAC00\uC871 \uB9C8\uC744</p>
      </footer>
    </div>`,Ro=[],Object.entries(l).forEach(([u,d])=>{var g;let f=s.querySelector(`[data-mount="${u}"]`),m=(g=d.mount)==null?void 0:g.call(d,f);typeof m=="function"&&Ro.push(m)}),s.querySelectorAll("[data-go]").forEach(u=>u.onclick=()=>mp(u.dataset.go)),s.querySelectorAll(".tv-back, .tv-play").forEach(u=>u.onclick=()=>{e==null||e(),d1()}),s.querySelectorAll(".tv-share").forEach(u=>u.onclick=za),"IntersectionObserver"in window){let u=[...s.querySelectorAll("[data-go]")],d=new IntersectionObserver(f=>f.forEach(m=>{var g;m.isIntersecting&&(u.forEach(p=>p.classList.toggle("on",p.dataset.go===m.target.dataset.sec)),(g=u.find(p=>p.classList.contains("on")))==null||g.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"}))}),{root:s,rootMargin:"-35% 0px -55% 0px"});s.querySelectorAll(".tv-sec").forEach(f=>d.observe(f)),Ro.push(()=>d.disconnect())}fp={onClose:t},document.body.classList.add("reading"),s.scrollTop=0,tr(gp),r&&setTimeout(()=>mp(r,!1),60)}function mp(n,e=!0){var t;(t=Mg("#textview").querySelector(`[data-sec="${n}"]`))==null||t.scrollIntoView({behavior:e?"smooth":"auto",block:"start"})}function gp(){var e;document.body.classList.remove("reading"),Ro.forEach(t=>t()),Ro=[];let n=fp;fp=null,(e=n==null?void 0:n.onClose)==null||e.call(n)}function d1(){Sg()&&(gp(),Dr(gp))}var Jc=window.FAMILY,Ae=n=>document.querySelector(n),p1=[[10,"\uB9C8\uC744\uC744 \uC9D3\uB294 \uC911\u2026 \u{1F3E1}"],[35,"\uAF43\uC744 \uC2EC\uB294 \uC911\u2026 \u{1F337}"],[65,"\uC9D1\uC5D0 \uBD88\uC744 \uCF1C\uB294 \uC911\u2026 \u{1F4A1}"],[85,"\uC0AC\uC9C4\uC744 \uAC70\uB294 \uC911\u2026 \u{1F5BC}\uFE0F"]],va=!1,vp=n=>{Ae("#loadbar").style.width=n+"%";let e=Ae("#btn-enter");if(!va){let t=p1.filter(([i])=>n>=i).pop();t&&(e.textContent=t[1])}};["gesturestart","gesturechange"].forEach(n=>document.addEventListener(n,e=>e.preventDefault()));if(window.visualViewport){let n=window.visualViewport,e=()=>document.documentElement.style.setProperty("--kb",`${Math.max(0,Math.round(innerHeight-n.height-n.offsetTop))}px`);n.addEventListener("resize",e),n.addEventListener("scroll",e)}"serviceWorker"in navigator&&location.protocol==="https:"&&document.querySelector('link[rel="manifest"]')&&addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));Zo()&&document.documentElement.classList.add("installed");var xp=qt();document.title=xp;Ae("#i-title").textContent=xp;Ae("#h-names").textContent=xp;var Kc=Ki();Ae("#i-sub").innerHTML=`${gs().date}${Kc>0?`<br>\uD568\uAED8\uD55C \uC9C0 <b>${Kc.toLocaleString()}\uC77C\uC9F8</b>`:""}`;Ae("#h-dday").textContent=Kc>0?`${Kc.toLocaleString()}\uC77C\uC9F8`:"";var Tg=cm();if(Tg.length){let n=Ae("#today");n.hidden=!1,n.querySelector(".t-now").textContent=Tg.map(e=>`${e.emoji||"\u{1F4CC}"} \uC624\uB298\uC740 ${e.kind==="birthday"?`${Qt(e.member)} \uC0DD\uC77C`:e.title}\uC774\uC5D0\uC694!`).join("  ")}Gp()&&(Ae("#demo-badge").hidden=!1);Dh();var Ce=null,us=!1,_p=!1;function ii(){if(!_p){Ae("#lock").hidden=Ae("#who").hidden=!0,va&&(Ae("#btn-enter").disabled=!0,Ae("#btn-enter").textContent="\uAC00\uC871 \uB9C8\uC744 \uD655\uC778 \uC911\u2026");return}let n=Zi(),e=_e(),t=_s().hint;Ae("#lock-hint").textContent=t?`\uD78C\uD2B8: ${t}`:"",Ae("#lock").hidden=n,Ae("#who").hidden=!n,Ae(".btn-row").hidden=!n||!e,Ae("#intro-help").hidden=!!e,n&&Pg(e),Ae("#btn-look").hidden=!e||Cr()||!Ce,Ae("#btn-guest").hidden=!!e,Ae("#btn-who-other").textContent=e?"\u{1F64B} \uB2E4\uB978 \uCE90\uB9AD\uD130":"\u{1F64B} \uC774\uBBF8 \uB9CC\uB4E0 \uCE90\uB9AD\uD130\uAC00 \uC788\uC5B4\uC694";let i=Ae("#btn-enter");va&&(i.disabled=!n,i.textContent=n?e?Ce?Cr()?"\uC190\uB2D8\uC73C\uB85C \uB4E4\uC5B4\uAC00\uAE30 \u{1F3E1}":`${Yi(Qt(e),"\uC73C\uB85C/\uB85C")} \uB4E4\uC5B4\uAC00\uAE30 \u{1F3E1}`:"\u{1F4D6} \uAE00\uB85C \uBCF4\uAE30":"\u2728 \uB0B4 \uCE90\uB9AD\uD130 \uB9CC\uB4E4\uAE30":"\u{1F512} \uC554\uD638\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694")}function Pg(n){let e=vt(),t=Ae("#me-card");if(e)t.className="me-card",t.innerHTML=`<span class="me-pic">${Ac(e.id,e.look)}</span><div class="me-text"><b>${Fe(Qt(e.id))}</b><span>\uD3B8\uC9C0\xB7\uB2F5\xB7\uD558\uD2B8\uAC00 \uC774 \uC774\uB984\uC73C\uB85C \uB0A8\uC544\uC694</span></div>`;else if(n)t.className="me-card guest",t.innerHTML='<span class="me-pic"><span class="guest-ic">\u{1F440}</span></span><div class="me-text"><b>\uC190\uB2D8\uC73C\uB85C \uAD6C\uACBD\uD574\uC694</b><span>\uCE90\uB9AD\uD130\uB97C \uB9CC\uB4E4\uBA74 \uB9C8\uC744\uC5D0 \uB0B4 \uC9D1\uC774 \uC0DD\uACA8\uC694</span></div>';else{let i=Dt().slice(0,6);t.className="me-card new",t.innerHTML=`${i.length?`<div class="neighbors">${i.map(r=>`<span class="nb">${Ac(r.id,r.look)}</span>`).join("")}</div>`:""}<div class="me-text"><b>\uCC98\uC74C \uC624\uC168\uB124\uC694! \u{1F44B}</b><span>\uB2C9\uB124\uC784\uACFC \uBAA8\uC2B5\uC744 \uC815\uD558\uBA74 \uB9C8\uC744\uC5D0 \uB0B4 \uC9D1\uC774 \uC0DD\uACA8\uC694</span></div>`}}var Ag=new Map;function Qc(n){if(!(Ce!=null&&Ce.portrait))return;(n?Dt().filter(t=>n.includes(t.id)):Dt()).forEach(t=>{let i=JSON.stringify(t.look);if(Ag.get(t.id)===i)return;Ag.set(t.id,i);let r=Ce.portrait(t.look);P0(t.id,r)}),!us&&_p&&Zi()&&Pg(_e())}addEventListener("family:look",()=>{let n=_e();n&&!Cr()&&setTimeout(()=>Qc([n]),0)});addEventListener("family:data",()=>{us||Qc()});addEventListener("family:me",()=>{if(Qc(),Cr())try{localStorage.getItem("family-guest-look")||localStorage.setItem("family-guest-look",JSON.stringify(fi()))}catch{}Ce==null||Ce.setCharacter(fi()),ii()});Ae("#btn-look").onclick=()=>{Ye(8),wc()};Ae("#btn-who-other").onclick=()=>{Ye(8),Ud(()=>ii())};Ae("#btn-guest").onclick=()=>{Ye(8),Aa("guest")};Ae("#lock").onsubmit=async n=>{n.preventDefault();let e=Ae("#lock-in"),t=Ae("#lock-btn");t.disabled=!0,t.textContent="\uD655\uC778 \uC911\u2026";let i=await qp(e.value);if(t.disabled=!1,t.textContent="\uC5F4\uAE30",i.ok){Ye(20),Qe.sfx("chime"),wn({force:!0}),ii();return}e.select(),Ye(60),Ae("#lock").classList.remove("shake"),Ae("#lock").offsetWidth,Ae("#lock").classList.add("shake"),tt(i.error==="network"?"\uC5F0\uACB0\uC774 \uC548 \uB3FC\uC694. \uC7A0\uC2DC \uB4A4 \uB2E4\uC2DC \uD574 \uC8FC\uC138\uC694":"\uC554\uD638\uAC00 \uB2EC\uB77C\uC694 \u{1F512}")};addEventListener("family:locked",()=>{tt("\uAC00\uC871 \uC554\uD638\uAC00 \uBC14\uB00C\uC5C8\uC5B4\uC694. \uB2E4\uC2DC \uB4E4\uC5B4\uC640 \uC8FC\uC138\uC694",4e3),us||ii()});var Ig=()=>I0(()=>{ii(),Zi()&&wn({force:!0})});Ae("#btn-lock-set").onclick=Ig;ii();$p().then(()=>{_p=!0,ii(),Zi()&&wn()});vp(10);var Fg="family-visited",ds=new Set;try{ds=new Set(JSON.parse(localStorage.getItem(Fg)||"[]"))}catch{}function Dg(){document.querySelectorAll("#visits li").forEach(i=>i.classList.toggle("done",ds.has(i.dataset.id)));let n=ds.size,e=document.querySelectorAll("#visits li").length,t=Ae("#visit-count");t&&(t.textContent=n?`${n}/${e}`:"")}addEventListener("wv:visit",n=>{if(!ds.has(n.detail)){ds.add(n.detail);try{localStorage.setItem(Fg,JSON.stringify([...ds]))}catch{}Dg(),ds.size===document.querySelectorAll("#visits li").length&&setTimeout(()=>{tt("\u{1F3C5} \uB9C8\uC744\uC758 \uBAA8\uB4E0 \uACF3\uC744 \uB458\uB7EC\uBD24\uC5B4\uC694!",3600),nr()},800)}});Dg();var Lg;(Lg=Ae("#btn-wide"))==null||Lg.addEventListener("click",()=>{let n=document.body.classList.toggle("wide");Ae("#btn-wide").textContent=n?"\u{1F4F1} \uD734\uB300\uD3F0 \uBCF4\uAE30":"\u{1F5A5} \uB113\uAC8C \uBCF4\uAE30",Ce==null||Ce.resize()});function yp(){let n=_e(),e=ke();!vt()||nm(n,e)||Kt("visits",{id:`${n}-${e}`,who:n,day:e})}var Rg=!1;function Cg(n=4800){if(Rg||!vt())return;let e=oi().length;if(!e)return;Rg=!0;let t=0,i=()=>{if(An()&&t++<20){setTimeout(i,1500);return}tt(`\u{1F48C} \uB098\uC5D0\uAC8C \uC628 \uD3B8\uC9C0\uAC00 ${oi().length||e}\uD1B5 \uC788\uC5B4\uC694 \xB7 \uB0B4 \uC9D1 \uC6B0\uCCB4\uD1B5\uC5D0 \uAE43\uBC1C\uC774 \uC62C\uB77C\uAC14\uC5B4\uC694`,4200)};setTimeout(i,n)}function m1(){var n;try{let e=document.createElement("canvas"),t=e.getContext("webgl2")||e.getContext("webgl");return t?((n=t.getExtension("WEBGL_lose_context"))==null||n.loseContext(),!0):!1}catch{return!1}}async function f1(){var h;let n=setTimeout(()=>{va||(va=!0,Ae("#intro-help").textContent="\uB9C8\uC744\uC774 \uB2A6\uAC8C \uC5F4\uB9AC\uACE0 \uC788\uC5B4\uC694. \uBA3C\uC800 \uAE00\uB85C \uBCF4\uAE30\uB85C \uB458\uB7EC\uBD10 \uC8FC\uC138\uC694",ii(),Ae("#btn-enter").onclick=()=>s())},9e3);if(m1())try{Ce=await mg({character:fi(),onProgress:vp})}catch(u){console.error("3D \uB9C8\uC744\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD574 \uAE00\uB85C \uBCF4\uAE30\uB85C \uC804\uD658\uD569\uB2C8\uB2E4",u),Ce=null,Ae("#app").innerHTML=""}clearTimeout(n),Ce?Qc():document.body.classList.add("no3d"),vp(100),va=!0,hn.onSent=(Ce==null?void 0:Ce.letterSent)||null,hn.takePhoto=(Ce==null?void 0:Ce.takePhoto)||null,hn.portrait=(Ce==null?void 0:Ce.portrait)||null;let e=Ae("#bgm"),t=Ae("#btn-sound"),i=()=>{t.textContent=(Jc.bgm?!e.paused:Qe.enabled)?"\u{1F50A}":"\u{1F507}"};function r(){us||!Ce||!Zi()||!_e()||(us=!0,document.body.classList.add("playing"),Ae("#intro").classList.add("hide"),Jc.bgm&&e.play().then(i).catch(()=>{}),Ce.start({hint:!0}),i(),yp(),Cg())}addEventListener("family:data",()=>{us&&(yp(),Cg(1200))});function s(u){if(!Zi()){tt("\u{1F512} \uAC00\uC871 \uC554\uD638\uB97C \uBA3C\uC800 \uB123\uC5B4 \uC8FC\uC138\uC694");return}Ae("#intro").classList.add("hide"),yp(),wg({canPlay:!!Ce&&!!_e(),onPlay:r,onSent:Ce==null?void 0:Ce.letterSent,onClose:()=>{us||Ae("#intro").classList.remove("hide")},section:u})}let a=Ce?Ce.themes:ys(),o=()=>Ce==null?void 0:Ce.setCharacter(fi()),l=()=>[{emoji:"\u{1F3E1}",label:"\uC6B0\uB9AC \uAC00\uC871",go:bc},{emoji:"\u{1F4AC}",label:"\uC624\uB298\uC758 \uC9C8\uBB38",go:()=>is()},{emoji:"\u2709\uFE0F",label:"\uC548\uBD80 \uC6B0\uCCB4\uD1B5",go:()=>Hn(Ce==null?void 0:Ce.letterSent)},{emoji:"\u{1F4C5}",label:"\uAC00\uC871 \uB2EC\uB825",go:vo},{emoji:"\u{1F5F3}\uFE0F",label:"\uD22C\uD45C\uD568",go:Mc},{emoji:"\u{1F331}",label:"\uC6B0\uB9AC \uAC00\uC871 \uB098\uBB34",go:Sc},Ce?{emoji:"\u{1F5BC}\uFE0F",label:"\uAC00\uC871 \uC0AC\uC9C4\uAD00",go:()=>{ln(),Ce.enterMuseum()}}:{emoji:"\u{1F4DA}",label:"\uC804\uCCB4 \uC568\uBC94",go:()=>Nr(a)},{emoji:"\u2753",label:"\uAC00\uC871 \uD034\uC988",go:Oa},{emoji:"\u{1F5FA}\uFE0F",label:"\uBAA8\uC774\uB294 \uACF3",go:Ba},...vt()?[{g:"me",emoji:"\u{1F3E0}",label:"\uB0B4 \uC9D1",go:()=>pa(_e())}]:[],...vt()?[{g:"me",emoji:"\u{1F3A8}",label:"\uCE90\uB9AD\uD130 \uAFB8\uBBF8\uAE30",go:wc}]:[{g:"me",emoji:"\u2728",label:"\uB0B4 \uCE90\uB9AD\uD130 \uB9CC\uB4E4\uAE30",go:()=>Tc(o)}],{g:"me",emoji:"\u{1F64B}",label:"\uB2E4\uB978 \uCE90\uB9AD\uD130\uB85C",go:()=>Ud(o)},{g:"set",emoji:"\u{1F4D6}",label:"\uAE00\uB85C \uBCF4\uAE30",go:()=>{ln(),s()}},{g:"set",emoji:xo[gi()].emoji,label:`\uACC4\uC808: ${xo[gi()].label}`,go:()=>{ln();let u=U0();tt(`${xo[u].toast} \xB7 \uBA54\uB274\uC5D0\uC11C \uB610 \uBC14\uAFC0 \uC218 \uC788\uC5B4\uC694`,3e3)}},...Ce?[{g:"set",emoji:"\u{1F319}",label:"\uB0AE \xB7 \uBC24 \uBC14\uAFB8\uAE30",go:()=>{ln(),Ce.cycleTime()}},{g:"set",emoji:"\u{1F6B6}",label:"\uC790\uB3D9 \uD22C\uC5B4",go:()=>{ln(),Ce.startTour()}}]:[],{g:"set",emoji:"\u{1F512}",label:"\uAC00\uC871 \uC554\uD638",go:Ig},...Zo()?[]:[{g:"set",emoji:"\u{1F4F1}",label:"\uC571\uC73C\uB85C \uC124\uCE58",go:Ih}]];Ae("#btn-menu").onclick=()=>Fh(l()),Ae("#btn-text-hud").onclick=()=>s(),(h=Ae("#btn-desk-text"))==null||h.addEventListener("click",()=>s()),Jc.bgm?(e.src=Jc.bgm,t.hidden=!1,t.onclick=()=>{e.paused?e.play().then(i).catch(()=>{}):(e.pause(),i())}):Ce&&(t.hidden=!1,i(),t.onclick=()=>{let u=Qe.setEnabled(!Qe.enabled);i(),tt(u?"\u{1F50A} \uC624\uB974\uACE8 \uBC30\uACBD\uC74C\uC744 \uCF30\uC5B4\uC694":"\u{1F507} \uC18C\uB9AC\uB97C \uAED0\uC5B4\uC694")});let c=Ae("#btn-enter");c.onclick=()=>{if(!_e()){Tc(()=>ii());return}Ce?r():s()},Ae("#btn-text").onclick=()=>s(),Ae("#btn-tour-start").onclick=()=>{if(!Ce){s();return}if(!Zi()||!_e()){ii();return}r(),setTimeout(()=>Ce.startTour(),1400)},ii()}f1();})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
