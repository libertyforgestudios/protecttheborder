function _(i,x){const t=v();return _=function(e,s){return e=e-346,t[e]},_(i,x)}(function(i,x){const t=_,e=i();for(;;)try{if(-parseInt(t(358))/1*(-parseInt(t(354))/2)+parseInt(t(363))/3+-parseInt(t(369))/4+-parseInt(t(350))/5+parseInt(t(346))/6+-parseInt(t(371))/7*(-parseInt(t(347))/8)+parseInt(t(348))/9*(parseInt(t(367))/10)===x)break;e.push(e.shift())}catch{e.push(e.shift())}})(v,625970),function(){const x=_,t=document.createElement(x(361))[x(359)];if(t&&t.supports&&t[x(375)](x(360)))return;for(const o of document[x(370)](x(372)))s(o);new MutationObserver(o=>{const n=x;for(const r of o)if(r[n(355)]===n(362))for(const c of r[n(351)])c[n(373)]===n(352)&&c[n(366)]==="modulepreload"&&s(c)})[x(365)](document,{childList:!0,subtree:!0});function e(o){const n=x,r={};return o[n(349)]&&(r.integrity=o[n(349)]),o[n(368)]&&(r.referrerPolicy=o.referrerPolicy),o[n(353)]===n(376)?r.credentials=n(357):o[n(353)]===n(356)?r[n(374)]="omit":r[n(374)]="same-origin",r}function s(o){const n=x;if(o.ep)return;o.ep=!0;const r=e(o);fetch(o[n(364)],r)}}();function v(){const i=["modulepreload","link","childList","974853GhvtUt","href","observe","rel","10zBQitH","referrerPolicy","4795136zBecNC","querySelectorAll","21DloXyE",'link[rel="modulepreload"]',"tagName","credentials","supports","use-credentials","3473868ATNezO","1994744dqzEZb","3751983AGGZHy","integrity","6138760RvyqDo","addedNodes","LINK","crossOrigin","281046tBVDSl","type","anonymous","include","7ZKjEBF","relList"];return v=function(){return i},v()}const a=O;(function(i,x){const t=O,e=i();for(;;)try{if(-parseInt(t(643))/1*(parseInt(t(654))/2)+parseInt(t(485))/3+parseInt(t(539))/4+-parseInt(t(690))/5+-parseInt(t(652))/6*(parseInt(t(560))/7)+parseInt(t(494))/8+parseInt(t(483))/9===x)break;e.push(e.shift())}catch{e.push(e.shift())}})(w,418639);const D={width:800,height:600};let b=[],T=[];const E=18,q=46;let I=0;const G=8;let d,u=100;const y=5;let F=!1,k=[],C;const z=document[a(580)](a(583)),V=document[a(580)](a(653)),X=document.querySelector("#orientationOverlay"),H=document[a(580)](a(684)),M=document[a(580)]("#gameStartDiv");document[a(580)](a(641));const K=document.querySelector(a(680));document[a(580)]("#gameWinLoseSpan");document.querySelector(a(681));const U=document[a(580)](a(518)),Y=document[a(580)]("#terroristScore"),Z=document[a(580)]("#SmugglerScore"),Q=document.querySelector(a(667)),S={Worker:U,Terrorist:Y,Smuggler:Z,Victim:Q},g=[{name:a(632),color:65280,scoreTimes:5,weight:20,damage:1,heal:5,action:a(579)},{name:a(561),color:255,scoreTimes:1,weight:60,damage:1,heal:0,action:a(669)},{name:"Smuggler",color:16776960,scoreTimes:3,weight:15,damage:10,heal:0,action:a(669)},{name:a(624),color:16711680,scoreTimes:5,weight:5,damage:20,heal:0,action:a(669)}];let m={Worker:0,Terrorist:0,Smuggler:0,Victim:0},J={Worker:0,Terrorist:0,Smuggler:0,Victim:0};class $ extends Phaser[a(559)]{constructor(){const x=a;super(x(660)),this[x(623)],this.blocksTimer,this[x(574)],this[x(487)],this[x(678)],this[x(563)],this.thankyouSound}[a(603)](){const x=a;this[x(696)][x(628)]("bg",x(646)+"map.jpg"),this[x(696)][x(628)](x(510),x(646)+x(664)),this.load[x(628)](x(679),"/protecttheborder/assets/terrorist.png"),this.load[x(628)](x(622),"/protecttheborder/assets/"+x(587)),this[x(696)].image(x(557),x(646)+"smuggler.png"),this[x(696)][x(628)](x(649),x(646)+x(607)),this.load[x(628)](x(551),x(646)+x(595)),this.load[x(628)](x(529),"/protecttheborder/assets/"+x(582)),console.log(x(638),"/protecttheborder/assets/"),this[x(696)][x(521)]("sparks","/protecttheborder/assets/"+x(525),{frameWidth:492/2,frameHeight:492/2,spacing:0}),this[x(696)][x(502)](x(487),x(646)+x(610)),this[x(696)][x(521)](x(674),x(646)+x(687),{frameWidth:837/3,frameHeight:558/2,spacing:0}),this.load[x(502)](x(678),x(646)+x(519)),this[x(696)].spritesheet(x(550),x(646)+x(484),{frameWidth:837/3,frameHeight:558/2,spacing:0}),this[x(696)][x(502)](x(563),x(646)+x(535)),this[x(696)][x(502)](x(554),x(646)+x(527))}[a(564)](){const x=a;this[x(516)][x(594)]("scene-game"),this.add[x(628)](0,0,"bg")[x(570)](0,0),this.grindSound=this.sound[x(671)](x(487)),this[x(678)]=this.sound.add(x(678)),this[x(563)]=this.sound[x(671)](x(563)),this[x(554)]=this.sound.add("thankyouSound");for(let t=0;t<q;t++){let e=t*E+(800-q*E)/2,s=200,o=this[x(671)].image(e,s,x(510))[x(570)](.5,.5)[x(676)](.7);o[x(530)](10),b[x(555)](o)}this.blocksTimer=this[x(517)][x(496)]({delay:5e3,callback:this[x(648)],callbackScope:this,loop:!0}),this.dotsTimer=this[x(517)][x(496)]({delay:3e3,callback:this[x(581)],callbackScope:this,loop:!0}),d=this[x(671)][x(628)](400,400,x(551)).setOrigin(.5,.5).setScale(.3),C=this[x(604)][x(608)].createCursorKeys(),this[x(634)]=this[x(671)][x(542)]()[x(530)](100),this.healthBarBg[x(578)](4473924,1),this[x(634)][x(505)](20,20,104,14),this.healthBar=this[x(671)][x(542)]()[x(530)](101),this[x(630)](),this[x(642)].create({key:x(543),frames:this.anims[x(606)]("sparks",{start:0,end:3}),frameRate:10,repeat:2,hideOnComplete:!0}),this[x(642)][x(564)]({key:"explode",frames:this[x(642)][x(606)](x(674),{start:0,end:5}),frameRate:10,repeat:0,hideOnComplete:!0}),this[x(642)][x(564)]({key:x(550),frames:this[x(642)][x(606)](x(550),{start:0,end:5}),frameRate:10,repeat:0,hideOnComplete:!0}),this[x(520)]=this[x(671)].text(600,20,"Encounters: 0",{fontSize:x(528),fill:"#fff",fontFamily:"Arial",stroke:x(509),strokeThickness:3})[x(530)](100),this[x(604)][x(552)](2),this[x(486)]={},this[x(604)].on("pointerdown",t=>{const e=x;if(!isFinite(t.x)){f[e(658)][e(534)]();return}let s=this[e(661)].canvas[e(602)],o=this[e(661)][e(586)][e(562)].width,n=t.x*(o/s);this[e(486)][t.id]=n,n<o/2?this.movingLeft=!0:this[e(585)]=!0}),this[x(604)].on(x(540),t=>{const e=x;t.x*(this[e(661)][e(586)][e(562)].width/this[e(661)][e(677)][e(602)]),delete this[e(486)][t.id],this.movingLeft=Object[e(635)](this.activeTouches)[e(503)](s=>s<this[e(661)].game.config[e(548)]/2),this.movingRight=Object[e(635)](this.activeTouches).some(s=>s>this[e(661)][e(586)][e(562)].width/2)}),this[x(604)].on(x(488),t=>{const e=x;delete this[e(486)][t.id],this.movingLeft=Object.values(this.activeTouches)[e(503)](s=>s<this[e(661)][e(586)].config.width/2),this[e(585)]=Object.values(this[e(486)]).some(s=>s>this[e(661)][e(586)][e(562)][e(548)]/2)})}spawnExplosion(x,t){const e=a;let s=this[e(671)].sprite(x,t-40,e(674)).setOrigin(.5,.5);s[e(676)](.3),s[e(629)]("explode"),!this[e(678)][e(686)]&&this[e(678)][e(600)](),this[e(678)][e(629)]({volume:.6}),this[e(517)][e(631)](2e3,()=>{const o=e;let n=500,r=10,c=n/r,l=.6,p=this[o(517)][o(496)]({delay:c,repeat:r-1,callback:()=>{const h=o;l-=1/r,this[h(678)][h(573)](Math[h(507)](0,l)),l<=0&&(this[h(678)][h(600)](),p[h(689)]())}})})}[a(697)](x,t){const e=a;let s=this.add[e(618)](x,t-40,e(550))[e(570)](.5,.5);s[e(676)](.3),s.play("drugs"),!this[e(678)][e(686)]&&this[e(563)][e(600)](),this[e(563)][e(629)]({volume:1,seek:.5})}[a(648)](){const x=a;if(b[x(655)]>0&&I<G){let t=Phaser.Math[x(533)](3,b[x(655)]-3),e=b[x(668)](t,1)[0],s=this[x(671)][x(618)](e.x,e.y,x(543)).setOrigin(.5);s[x(676)](.1),s[x(629)]("sparks"),this[x(487)][x(629)]({volume:1,seek:1}),this[x(517)].delayedCall(1e3,()=>{const o=x;T[o(555)](e.x),I++,s[o(614)](),e[o(614)](),this[o(487)][o(600)]()})}}[a(691)](){const x=a;let t=g.reduce((o,n)=>o+n[x(636)],0),e=Phaser[x(657)][x(533)](1,t),s=0;for(let o of g)if(s+=o[x(636)],e<=s)return o;return g[0]}spawnDot(){const x=a;for(let t=0;t<20;t++){let e=this.weightedRandomRole(),s=this[x(671)][x(628)](Phaser[x(657)][x(533)](10,790),0,e[x(531)][x(633)]())[x(570)](.5,.5).setScale(.1);s[x(511)]=Phaser[x(657)][x(615)](1,5),s.targetBottomX=Phaser[x(657)][x(533)](10,790),s[x(530)](5),k.push({sprite:s,targetHole:null,passedWall:!1,movingToBottom:!1,role:e[x(531)],roleObj:e,counted:!1})}}[a(567)](){const x=a;C.left[x(571)]?d.x=Math[x(507)](50,d.x-y):C[x(526)].isDown&&(d.x=Math[x(491)](750,d.x+y)),this[x(627)]&&(d.x=Math[x(507)](50,d.x-y)),this[x(585)]&&(d.x=Math[x(491)](750,d.x+y)),k[x(692)](t=>{const e=x;let s=t[e(618)];if(!t.counted){if(s.y>=600){t[e(577)]=!0,J[t.role]++,this[e(536)](-t.roleObj[e(670)]),t[e(499)]===e(624)&&this[e(556)](s.x,s.y),t[e(499)]===e(682)&&this[e(697)](s.x,s.y),s[e(614)]();return}if(I==0)s.y<b[0].y-50&&(s.y+=s[e(511)]*.1);else if(t[e(565)]){!t[e(589)]&&(t[e(584)]=s[e(501)],t.targetY=600,t.movingToBottom=!0);let o=t[e(584)]-s.x,n=t.targetY-s.y,r=Math.sqrt(o*o+n*n);r>2?(s.x+=o/r*s[e(511)]*.5,s.y+=n/r*s[e(511)]*.5):(s.x=t.targetX,s.y=t[e(688)])}else if(T[e(655)]>0&&s.y<200){!t[e(598)]&&(t[e(598)]=T[e(672)]((c,l)=>Math.abs(l-s.x)<Math.abs(c-s.x)?l:c));let o=t.targetHole-s.x,n=200-s.y,r=Math[e(504)](o*o+n*n);r>2?(s.x+=o/r*s.speed*.5,s.y+=n/r*s.speed*.5):s.y+=s[e(511)]}else s.y+=s[e(511)],s.y>=200&&(t[e(565)]=!0);Phaser[e(657)].Distance[e(533)](s.x,s.y,d.x,d.y)<40&&(t[e(577)]=!0,m[t[e(499)]]++,this[e(520)][e(489)](e(514)+(m[e(561)]+m.Terrorist+m[e(682)]+m.Victim)),this[e(536)](t[e(593)][e(575)]),t[e(499)]===e(632)&&this[e(625)](s.x,s.y),s.destroy())}})}[a(625)](x,t){const e=a;this.thankyouSound[e(629)]({volume:1});let s=this[e(671)][e(618)](x,t,"heart")[e(676)](.5)[e(530)](200);this[e(549)].add({targets:s,x:100,y:50,scale:{from:.5,to:.1},alpha:{from:1,to:.6},ease:e(639),duration:1e3,onComplete:()=>s.destroy()})}[a(536)](x){const t=a;let e=u;u=Phaser[t(657)][t(522)](u+x,0,100),u!==e&&this.updateHealthBar(),u<=0&&x0()}[a(630)](){const x=a;this[x(613)][x(656)](),this[x(613)][x(578)](u>60?65280:u>30?16776960:16711680,1),this[x(613)][x(505)](22,22,u,10),this[x(634)][x(666)](2,16777215,1),this[x(634)][x(506)](20,20,104,14)}}function x0(){const i=a;let x=f[i(516)][i(569)](i(660));x&&(x[i(492)][i(683)](),k[i(692)](t=>t[i(618)][i(614)]()),k=[],x[i(620)][i(645)].fadeOut(1e3,0,0,0),x[i(517)].delayedCall(1e3,()=>{const t=i;f[t(516)][t(600)](t(660)),f.scene[t(619)](t(493))}))}class e0 extends Phaser.Scene{constructor(){const x=a;super(x(493)),this[x(678)],this[x(563)],this[x(554)]}[a(603)](){const x=a;this.load[x(628)](x(663),x(646)+x(544)),this[x(696)].audio(x(678),x(646)+x(519)),this[x(696)][x(502)]("drugsSound",x(646)+x(535)),this[x(696)][x(502)]("thankyouSound","/protecttheborder/assets/thankyou.mp3")}[a(564)](){const x=a;this.add[x(628)](400,300,x(663))[x(508)](800,600),this[x(671)][x(644)](400,300,800,600,0,.5),this.explosionSound=this[x(492)].add(x(678)),this[x(563)]=this[x(492)][x(671)](x(563)),this[x(554)]=this[x(492)][x(671)](x(554)),this[x(671)].text(400,50,x(588),{fontSize:x(596),fill:"#fff"})[x(570)](.5);let t=Object.keys(m);this.index=0,this[x(545)]={},this[x(599)]={};let e=120,s=60,o=550;this[x(591)]=0,this[x(566)]=this[x(671)][x(513)](o+30,e+(t.length+1)*s,x(662),{fontSize:x(617),fill:"#ffdd44",fontWeight:x(612)})[x(570)](1,.5),t[x(692)]((n,r)=>{const c=x;let l=e+r*s;this[c(545)][n]=this[c(671)].sprite(150,-100,n[c(633)]())[c(676)](.5)[c(570)](.5,.5),this[c(599)][n]=this.add[c(513)](220,-100,n+"s "+g[c(651)](p=>p[c(531)]===n)[c(640)]+": ",{fontSize:c(528),fill:c(541)})[c(570)](0,.5),S[n]=this[c(671)][c(513)](o+30,-100,c(621)+g.find(p=>p.name===n)[c(523)],{fontSize:c(528),fill:c(605)})[c(570)](1,.5),this[c(545)][n].targetY=l,this[c(599)][n].targetY=l,S[n][c(688)]=l}),this.animateNextRole()}[a(659)](){const x=a;let t=Object[x(695)](m);if(this[x(592)]>=t[x(655)])return;let e=t[this[x(592)]],s=this[x(545)][e][x(688)];this[x(549)][x(671)]({targets:[this.roleSprites[e],this[x(599)][e],S[e]],y:s,duration:1200,ease:"Bounce.easeOut",delay:this[x(592)]*200,onComplete:()=>{this.countUpScore(e)}})}[a(611)](x){const t=a;let e=m[x],s=g[t(651)](r=>r[t(531)]===x)[t(523)],o=Math[t(491)](4e3,e*100)/Math.max(1,e),n=0;if(e===0){this.spawnAnimation(this[t(545)][x].x,this[t(545)][x].y,x),this[t(517)][t(631)](500,()=>{const r=t;this.roleSprites[x][r(614)](),this[r(592)]++,this[r(659)]()});return}this[t(517)][t(496)]({delay:o,repeat:e-1,callback:()=>{const r=t;n++,S[x][r(489)](n+" x"+s),this[r(591)]+=s,this[r(566)][r(489)](r(547)+this[r(591)]),n===e&&this[r(517)][r(631)](500,()=>{const c=r;this[c(665)](this[c(545)][x].x,this.roleSprites[x].y,x),this[c(545)][x][c(614)](),this[c(592)]++,this[c(659)]()})}})}[a(665)](x,t,e){const s=a;e===s(624)&&this[s(556)](x,t),e===s(682)&&this[s(697)](x,t),e===s(632)&&this[s(597)](x,t)}[a(556)](x,t){const e=a;this[e(671)][e(618)](x,t,e(674)).setOrigin(.5,.5)[e(676)](.5)[e(629)](e(497)),this[e(678)][e(629)]({volume:.6}),this[e(517)][e(631)](2e3,()=>{const o=e;let n=500,r=10,c=n/r,l=.6,p=this[o(517)][o(496)]({delay:c,repeat:r-1,callback:()=>{const h=o;l-=1/r,this[h(678)].setVolume(Math[h(507)](0,l)),l<=0&&(this[h(678)][h(600)](),p.remove())}})})}[a(697)](x,t){const e=a;let s=this[e(671)][e(618)](x,t-20,e(550))[e(570)](.5,.5);s[e(676)](.3),s[e(629)]("drugs"),this.drugsSound.play({volume:1,seek:.5})}[a(597)](x,t){const e=a;let s=this[e(671)][e(618)](x,t,e(529)).setScale(.5)[e(530)](200);this.tweens[e(671)]({targets:s,x,y:t,scale:{from:.1,to:.5},alpha:{from:1,to:.6},ease:e(639),duration:1e3,onComplete:()=>s[e(614)]()}),this[e(554)].play({volume:1})}}const t0={type:Phaser[a(546)],height:D[a(601)],width:D[a(548)],canvas:H,scene:[$,e0]},f=new Phaser[a(500)](t0);B()?(M[a(515)].display=a(694),z.style.display=a(693),R(),window[a(590)]("resize",R),window[a(590)](a(626),R)):X[a(515)].display=a(694);K[a(590)]("click",()=>{const i=a;M.style.display=i(694),H[i(515)][i(650)]=i(693),F=!0,f[i(516)][i(673)](i(660)),f[i(658)][i(534)](),i0(),window.addEventListener("touchstart",j),o0(),window[i(590)](i(537),N)}),V[a(590)](a(512),()=>{const i=a;z[i(515)][i(650)]=i(694),M[i(515)][i(650)]=i(693),a0(document[i(609)])});let P=!1;const L=document[a(698)](a(495));function s0(){const i=a;P=!P,P?(f[i(492)].mute=!0,L[i(647)]="🔇"):(f[i(492)][i(490)]=!1,L[i(647)]="🔊")}L[a(590)](a(512),s0);function B(){return/Mobi|Android|iPhone|iPad|iPod/i[a(553)](navigator.userAgent)}function a0(i){const x=a;i[x(568)]?i[x(568)]():i[x(558)]?i[x(558)]():i.webkitRequestFullscreen?i.webkitRequestFullscreen():i.msRequestFullscreen&&i.msRequestFullscreen()}function w(){const i=["Final Score: 0","gameover_bg","fence.png","spawnAnimation","lineStyle","#victimScore","splice","caught","damage","add","reduce","resume","explosion","ArrowLeft","setScale","canvas","explosionSound","terrorist","#gameStartBtn","#gameEndScoreSpan","Smuggler","stopAll","#gameCanvas","touchstart","isPlaying","explosion.png","targetY","remove","934870kxDMCa","weightedRandomRole","forEach","flex","none","keys","load","spawnDrugs","getElementById","6658668JlCpLQ","drugs.png","175260dyzLmZ","activeTouches","grindSound","pointerout","setText","mute","min","sound","scene-gameover","312080PwDeXQ","muteButton","addEvent","explode","ArrowRight","role","Game","targetBottomX","audio","some","sqrt","fillRect","strokeRect","max","setDisplaySize","#000","block","speed","click","text","Encounters: ","style","scene","time","#workerScore","explosion.wav","scoreText","spritesheet","Clamp","scoreTimes","matchMedia","sparks.png","right","thankyou.mp3","24px","heart","setDepth","name","key","Between","refresh","glass-breaking.mp3","updateHealth","keydown","tapOverlay","2431752xPfelI","pointerup","#fff","graphics","sparks","introbg.jpg","roleSprites","WEBGL","Final Score: ","width","tweens","drugs","bus","addPointer","test","thankyouSound","push","spawnExplosion","smuggler","mozRequestFullScreen","Scene","1238790fUevqU","Worker","config","drugsSound","create","passedWall","finalScoreText","update","requestFullscreen","getScene","setOrigin","isDown","(orientation: portrait)","setVolume","dotsTimer","heal","removeEventListener","counted","fillStyle","rescued","querySelector","spawnDot","heart.png","#mobileIntroDiv","targetX","movingRight","game","worker.png","Final Score Breakdown","movingToBottom","addEventListener","finalScore","index","roleObj","pause","bus.png","32px","spawnHeart","targetHole","roleTexts","stop","height","clientWidth","preload","input","#ffd700","generateFrameNumbers","victim.png","keyboard","documentElement","grind.mp3","countUpScore","bold","healthBar","destroy","FloatBetween","orientationOverlay","28px","sprite","start","cameras","0 x ","worker","gameTimer","Terrorist","celebrateRescue","orientationchange","movingLeft","image","play","updateHealthBar","delayedCall","Victim","toLowerCase","healthBarBg","values","weight","keyboardOverlay","Assets Location:","Cubic.easeOut","action","#gameEndDiv","anims","1yNkypa","rectangle","main","/protecttheborder/assets/","textContent","removeBlock","victim","display","find","6KmpCGX","#goFullScreenBtn","1325274WHtTLs","length","clear","Math","scale","animateNextRole","scene-game","sys"];return w=function(){return i},w()}function R(){const i=a;let x=document[i(698)](i(616));if(!B()){x.style.display=i(694);return}window[i(524)](i(572)).matches?(x[i(515)].display=i(693),f[i(516)][i(594)](i(660))):(x[i(515)].display=i(694),F&&f[i(516)][i(673)](i(660)))}const W=document[a(698)](a(538));function i0(){const i=a;B()&&(W[i(515)][i(650)]="flex")}function O(i,x){const t=w();return O=function(e,s){return e=e-483,t[e]},O(i,x)}function j(){const i=a;W[i(515)][i(650)]="none",window[i(576)](i(685),j)}const A=document[a(698)](a(637));function o0(){const i=a;!B()&&(A[i(515)][i(650)]="flex")}function N(i){const x=a;(i[x(532)]===x(675)||i[x(532)]===x(498))&&(A[x(515)].display=x(694),window[x(576)]("keydown",N))}
