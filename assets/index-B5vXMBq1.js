function _(i,x){const t=v();return _=function(e,a){return e=e-422,t[e]},_(i,x)}(function(i,x){const t=_,e=i();for(;;)try{if(parseInt(t(442))/1*(-parseInt(t(434))/2)+parseInt(t(427))/3+-parseInt(t(425))/4*(-parseInt(t(447))/5)+-parseInt(t(440))/6+-parseInt(t(445))/7+-parseInt(t(424))/8*(-parseInt(t(437))/9)+parseInt(t(429))/10*(-parseInt(t(422))/11)===x)break;e.push(e.shift())}catch{e.push(e.shift())}})(v,464810),function(){const x=_,t=document[x(446)](x(449))[x(426)];if(t&&t.supports&&t[x(439)](x(431)))return;for(const o of document.querySelectorAll(x(430)))a(o);new MutationObserver(o=>{const n=x;for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName===n(436)&&c[n(428)]==="modulepreload"&&a(c)})[x(423)](document,{childList:!0,subtree:!0});function e(o){const n=x,r={};return o[n(435)]&&(r[n(435)]=o.integrity),o.referrerPolicy&&(r[n(441)]=o[n(441)]),o[n(448)]==="use-credentials"?r.credentials=n(450):o.crossOrigin===n(443)?r[n(432)]=n(438):r[n(432)]=n(444),r}function a(o){const n=x;if(o.ep)return;o.ep=!0;const r=e(o);fetch(o[n(433)],r)}}();function v(){const i=["330iPNLfs",'link[rel="modulepreload"]',"modulepreload","credentials","href","2204roXzYH","integrity","LINK","36euLWGb","omit","supports","429378dQYPHz","referrerPolicy","419AGPaKI","anonymous","same-origin","937615RSdKRq","createElement","63755wvwpwz","crossOrigin","link","include","88781KIpcRM","observe","404760FZhAGa","124eghGOY","relList","2402214itVSXz","rel"];return v=function(){return i},v()}const s=O;(function(i,x){const t=O,e=i();for(;;)try{if(-parseInt(t(438))/1+parseInt(t(397))/2+-parseInt(t(462))/3*(parseInt(t(339))/4)+parseInt(t(494))/5+-parseInt(t(317))/6+-parseInt(t(486))/7*(-parseInt(t(398))/8)+-parseInt(t(457))/9*(-parseInt(t(366))/10)===x)break;e.push(e.shift())}catch{e.push(e.shift())}})(k,864539);const F={width:800,height:600};let g=[],T=[];const W=18,D=46;let I=0;const N=8;let h,u=100;const y=5;let L=!1,w=[],P;function k(){const i=["roleTexts","setScale","#gameEndDiv","1105930UDbYrY","counted","#workerScore","smuggler","game","#000","sound","sprite","spawnAnimation","terrorist","max","#orientationOverlay","Arial","roleSprites","isPlaying","pause","animateNextRole","config","activeTouches","45ZmDXOJ","toLowerCase","spritesheet","canvas","weight","3072021fEDXhc","removeEventListener","delayedCall","msRequestFullscreen","Worker","mute","find","name","addPointer","/assets/thankyou.mp3","orientationchange","scoreText","stop","#fff","length","/assets/victim.png","play","Terrorist","test","countUpScore","WEBGL","bold","spawnDot","ArrowLeft","5894BKPPBi","width","role","graphics","create","textContent","push","movingToBottom","1880480IkKXzg","style","healthBarBg","splice","forEach","text","#gameEndScoreSpan","setText","scene-game","setVolume","reduce","Cubic.easeOut","touchstart","passedWall","targetX","blocksTimer","scene","min","input","scoreTimes","heart","Scene","none","audio","clientWidth","grindSound","Bounce.easeOut","muteButton","some","Clamp","updateHealthBar","Distance","10146696QqKWlf","roleObj","Between","mozRequestFullScreen","click","anims","time","setDisplaySize","#gameWinLoseSpan","explosionSound","sys","ArrowRight","sparks","movingLeft","keydown","spawnDrugs","scale","damage","setOrigin","weightedRandomRole","addEvent","removeBlock","4ayUtpD","0 x ","targetBottomX","#gameStartBtn","querySelector","destroy","left","caught","#terroristScore","spawnHeart","action","add","clear","explosion","getElementById","pointerdown","resume","spawnExplosion","targetHole","/assets/explosion.wav","movingRight","requestFullscreen","/assets/terrorist.png","Smuggler","28px","rectangle","dotsTimer","5678410fwfCuF","drugs","isDown","flex","generateFrameNumbers","rescued","Victim","fillRect","orientationOverlay","fillStyle","updateHealth","strokeRect","right","gameover_bg","Math","preload","lineStyle","thankyouSound","refresh","targetY","/assets/glass-breaking.mp3","bus","/assets/fence.png","cameras","24px","#ffdd44","tweens","main","Game","explode","index","544250WJNdZt","11384KMpsFB","keyboard","restartGameBtn","drugsSound","values","update","/assets/drugs.png","32px","abs","finalScoreText","/assets/sparks.png","sqrt","FloatBetween","/assets/grind.mp3","addEventListener","getScene","Final Score: ","key","reload","speed","heal","image","healthBar","tapOverlay","fadeOut","/assets/explosion.png","keys","block","display","load","matches","#SmugglerScore","celebrateRescue","matchMedia","finalScore","#ffd700","setDepth"];return k=function(){return i},k()}const z=document[s(343)]("#mobileIntroDiv"),G=document[s(343)]("#goFullScreenBtn"),V=document[s(343)](s(449)),H=document[s(343)]("#gameCanvas"),R=document[s(343)]("#gameStartDiv");document[s(343)](s(437));const X=document.querySelector(s(342));document.querySelector(s(325));document[s(343)](s(291));const Y=document[s(343)](s(440)),U=document[s(343)](s(347)),Z=document[s(343)](s(429)),J=document[s(343)]("#victimScore"),S={Worker:Y,Terrorist:U,Smuggler:Z,Victim:J},p=[{name:s(372),color:65280,scoreTimes:5,weight:20,damage:1,heal:5,action:s(371)},{name:"Worker",color:255,scoreTimes:1,weight:60,damage:1,heal:0,action:"caught"},{name:s(362),color:16776960,scoreTimes:3,weight:15,damage:10,heal:0,action:s(346)},{name:s(479),color:16711680,scoreTimes:5,weight:5,damage:20,heal:0,action:s(346)}];let b={Worker:0,Terrorist:0,Smuggler:0,Victim:0},Q={Worker:0,Terrorist:0,Smuggler:0,Victim:0};class $ extends Phaser[s(306)]{constructor(){const x=s;super(x(293)),this.gameTimer,this[x(300)],this[x(365)],this[x(310)],this.explosionSound,this[x(401)],this[x(383)]}[s(381)](){const x=s;this[x(427)].image("bg","/assets/map.jpg"),this[x(427)][x(419)]("block",x(388)),this.load[x(419)](x(447),x(361)),this.load[x(419)]("worker","/assets/worker.png"),this[x(427)][x(419)](x(441),"/assets/smuggler.png"),this.load[x(419)]("victim",x(477)),this[x(427)][x(419)](x(387),"/assets/bus.png"),this.load[x(419)]("heart","/assets/heart.png"),this[x(427)][x(459)](x(329),x(408),{frameWidth:492/2,frameHeight:492/2,spacing:0}),this[x(427)][x(308)](x(310),x(411)),this[x(427)][x(459)](x(352),x(423),{frameWidth:837/3,frameHeight:558/2,spacing:0}),this.load[x(308)]("explosionSound",x(358)),this.load[x(459)](x(367),x(404),{frameWidth:837/3,frameHeight:558/2,spacing:0}),this[x(427)][x(308)](x(401),"/assets/glass-breaking.mp3"),this[x(427)][x(308)](x(383),x(471))}create(){const x=s;this[x(301)].pause("scene-game"),this[x(350)][x(419)](0,0,"bg")[x(335)](0,0),this.grindSound=this.sound.add(x(310)),this[x(326)]=this[x(444)].add("explosionSound"),this.drugsSound=this[x(444)][x(350)](x(401)),this[x(383)]=this.sound[x(350)](x(383));for(let t=0;t<D;t++){let e=t*W+(800-D*W)/2,a=200,o=this[x(350)][x(419)](e,a,x(425))[x(335)](.5,.5)[x(436)](.7);o[x(434)](10),g[x(492)](o)}this.blocksTimer=this[x(323)][x(337)]({delay:5e3,callback:this[x(338)],callbackScope:this,loop:!0}),this[x(365)]=this.time[x(337)]({delay:3e3,callback:this.spawnDot,callbackScope:this,loop:!0}),h=this[x(350)][x(419)](400,400,x(387))[x(335)](.5,.5).setScale(.3),P=this[x(303)][x(399)].createCursorKeys(),this.healthBarBg=this[x(350)][x(489)]()[x(434)](100),this[x(496)][x(375)](4473924,1),this[x(496)][x(373)](20,20,104,14),this[x(420)]=this[x(350)][x(489)]().setDepth(101),this[x(315)](),this.anims[x(490)]({key:x(329),frames:this[x(322)][x(370)]("sparks",{start:0,end:3}),frameRate:10,repeat:2,hideOnComplete:!0}),this[x(322)][x(490)]({key:x(395),frames:this[x(322)][x(370)]("explosion",{start:0,end:5}),frameRate:10,repeat:0,hideOnComplete:!0}),this.anims[x(490)]({key:x(367),frames:this[x(322)].generateFrameNumbers(x(367),{start:0,end:5}),frameRate:10,repeat:0,hideOnComplete:!0}),this[x(473)]=this.add[x(290)](600,20,"Encounters: 0",{fontSize:x(390),fill:"#fff",fontFamily:x(450),stroke:x(443),strokeThickness:3})[x(434)](100),this.input[x(470)](2),this[x(456)]={},this[x(303)].on(x(354),t=>{const e=x;if(!isFinite(t.x)){d[e(333)][e(384)]();return}let a=this.sys.canvas[e(309)],o=this[e(327)][e(442)][e(455)][e(487)],n=t.x*(o/a);this[e(456)][t.id]=n,n<o/2?this[e(330)]=!0:this[e(359)]=!0}),this.input.on("pointerup",t=>{const e=x;t.x*(this[e(327)][e(442)][e(455)][e(487)]/this[e(327)][e(460)][e(309)]),delete this[e(456)][t.id],this.movingLeft=Object.values(this[e(456)]).some(a=>a<this[e(327)][e(442)][e(455)][e(487)]/2),this[e(359)]=Object[e(402)](this[e(456)])[e(313)](a=>a>this[e(327)][e(442)][e(455)][e(487)]/2)}),this[x(303)].on("pointerout",t=>{const e=x;delete this[e(456)][t.id],this[e(330)]=Object.values(this[e(456)]).some(a=>a<this.sys.game.config[e(487)]/2),this[e(359)]=Object.values(this[e(456)])[e(313)](a=>a>this[e(327)][e(442)][e(455)][e(487)]/2)})}[s(356)](x,t){const e=s;let a=this[e(350)].sprite(x,t-40,e(352))[e(335)](.5,.5);a[e(436)](.3),a.play("explode"),!this[e(326)][e(452)]&&this[e(326)].stop(),this.explosionSound[e(478)]({volume:.6}),this[e(323)].delayedCall(2e3,()=>{const o=e;let n=500,r=10,c=n/r,l=.6,m=this[o(323)].addEvent({delay:c,repeat:r-1,callback:()=>{const f=o;l-=1/r,this[f(326)][f(294)](Math[f(448)](0,l)),l<=0&&(this.explosionSound.stop(),m.remove())}})})}[s(332)](x,t){const e=s;let a=this[e(350)][e(445)](x,t-40,e(367))[e(335)](.5,.5);a.setScale(.3),a[e(478)](e(367)),!this.explosionSound[e(452)]&&this.drugsSound[e(474)](),this.drugsSound[e(478)]({volume:1,seek:.5})}removeBlock(){const x=s;if(g.length>0&&I<N){let t=Phaser.Math[x(319)](3,g.length-3),e=g[x(288)](t,1)[0],a=this[x(350)].sprite(e.x,e.y,x(329))[x(335)](.5);a[x(436)](.1),a[x(478)]("sparks"),this[x(310)][x(478)]({volume:1,seek:1}),this[x(323)][x(464)](1e3,()=>{const o=x;T[o(492)](e.x),I++,a.destroy(),e[o(344)](),this[o(310)][o(474)]()})}}[s(336)](){const x=s;let t=p[x(295)]((o,n)=>o+n[x(461)],0),e=Phaser[x(380)][x(319)](1,t),a=0;for(let o of p)if(a+=o[x(461)],e<=a)return o;return p[0]}[s(484)](){const x=s;for(let t=0;t<20;t++){let e=this[x(336)](),a=this[x(350)][x(419)](Phaser[x(380)][x(319)](10,790),0,e.name[x(458)]())[x(335)](.5,.5)[x(436)](.1);a[x(417)]=Phaser[x(380)][x(410)](1,5),a[x(341)]=Phaser[x(380)][x(319)](10,790),a[x(434)](5),w[x(492)]({sprite:a,targetHole:null,passedWall:!1,movingToBottom:!1,role:e.name,roleObj:e,counted:!1})}}[s(403)](){const x=s;P[x(345)][x(368)]?h.x=Math[x(448)](50,h.x-y):P[x(378)][x(368)]&&(h.x=Math[x(302)](750,h.x+y)),this[x(330)]&&(h.x=Math[x(448)](50,h.x-y)),this[x(359)]&&(h.x=Math[x(302)](750,h.x+y)),w[x(289)](t=>{const e=x;let a=t[e(445)];if(!t[e(439)]){if(a.y>=600){t[e(439)]=!0,Q[t[e(488)]]++,this[e(376)](-t[e(318)][e(334)]),t[e(488)]===e(479)&&this[e(356)](a.x,a.y),t[e(488)]===e(362)&&this[e(332)](a.x,a.y),a[e(344)]();return}if(I==0)a.y<g[0].y-50&&(a.y+=a.speed*.1);else if(t.passedWall){!t[e(493)]&&(t[e(299)]=a[e(341)],t[e(385)]=600,t.movingToBottom=!0);let o=t[e(299)]-a.x,n=t[e(385)]-a.y,r=Math[e(409)](o*o+n*n);r>2?(a.x+=o/r*a[e(417)]*.5,a.y+=n/r*a[e(417)]*.5):(a.x=t[e(299)],a.y=t[e(385)])}else if(T.length>0&&a.y<200){!t[e(357)]&&(t[e(357)]=T[e(295)]((c,l)=>Math[e(406)](l-a.x)<Math[e(406)](c-a.x)?l:c));let o=t[e(357)]-a.x,n=200-a.y,r=Math[e(409)](o*o+n*n);r>2?(a.x+=o/r*a[e(417)]*.5,a.y+=n/r*a[e(417)]*.5):a.y+=a[e(417)]}else a.y+=a[e(417)],a.y>=200&&(t[e(298)]=!0);Phaser[e(380)][e(316)][e(319)](a.x,a.y,h.x,h.y)<40&&(t.counted=!0,b[t.role]++,this[e(473)][e(292)]("Encounters: "+(b[e(466)]+b[e(479)]+b[e(362)]+b[e(372)])),this[e(376)](t[e(318)][e(418)]),t[e(488)]==="Victim"&&this[e(430)](a.x,a.y),a[e(344)]())}})}celebrateRescue(x,t){const e=s;this[e(383)][e(478)]({volume:1});let a=this[e(350)].sprite(x,t,e(305)).setScale(.5)[e(434)](200);this[e(392)][e(350)]({targets:a,x:100,y:50,scale:{from:.5,to:.1},alpha:{from:1,to:.6},ease:e(296),duration:1e3,onComplete:()=>a[e(344)]()})}[s(376)](x){const t=s;let e=u;u=Phaser[t(380)][t(314)](u+x,0,100),u!==e&&this[t(315)](),u<=0&&x0()}[s(315)](){const x=s;this[x(420)][x(351)](),this.healthBar[x(375)](u>60?65280:u>30?16776960:16711680,1),this[x(420)][x(373)](22,22,u,10),this[x(496)][x(382)](2,16777215,1),this[x(496)][x(377)](20,20,104,14)}}function x0(){const i=s;let x=d.scene[i(413)](i(293));x&&(x[i(444)].stopAll(),w.forEach(t=>t.sprite[i(344)]()),w=[],x[i(389)][i(393)][i(422)](1e3,0,0,0),x[i(323)][i(464)](1e3,()=>{const t=i;d[t(301)][t(474)](t(293)),d[t(301)].start("scene-gameover")}))}function O(i,x){const t=k();return O=function(e,a){return e=e-288,t[e]},O(i,x)}class e0 extends Phaser[s(306)]{constructor(){const x=s;super("scene-gameover"),this[x(326)],this[x(401)],this[x(383)]}[s(381)](){const x=s;this[x(427)][x(419)](x(379),"/assets/introbg.jpg"),this[x(427)][x(308)](x(326),x(358)),this[x(427)].audio(x(401),x(386)),this[x(427)][x(308)]("thankyouSound","/assets/thankyou.mp3")}[s(490)](){const x=s;this[x(350)][x(419)](400,300,x(379))[x(324)](800,600),this[x(350)][x(364)](400,300,800,600,0,.5),this.explosionSound=this[x(444)][x(350)](x(326)),this.drugsSound=this[x(444)][x(350)](x(401)),this[x(383)]=this[x(444)][x(350)](x(383)),this[x(350)][x(290)](400,50,"Final Score Breakdown",{fontSize:x(405),fill:"#fff"})[x(335)](.5);let t=Object.keys(b);this.index=0,this[x(451)]={},this[x(435)]={};let e=120,a=60,o=550;this[x(432)]=0,this[x(407)]=this[x(350)][x(290)](o+30,e+(t.length+1)*a,"Final Score: 0",{fontSize:x(363),fill:x(391),fontWeight:x(483)})[x(335)](1,.5),t[x(289)]((n,r)=>{const c=x;let l=e+r*a;this.roleSprites[n]=this[c(350)].sprite(150,-100,n.toLowerCase())[c(436)](.5).setOrigin(.5,.5),this.roleTexts[n]=this[c(350)].text(220,-100,n+"s "+p[c(468)](m=>m.name===n)[c(349)]+": ",{fontSize:"24px",fill:c(475)})[c(335)](0,.5),S[n]=this[c(350)].text(o+30,-100,c(340)+p[c(468)](m=>m.name===n).scoreTimes,{fontSize:"24px",fill:c(433)})[c(335)](1,.5),this[c(451)][n][c(385)]=l,this.roleTexts[n][c(385)]=l,S[n].targetY=l}),this.animateNextRole()}[s(454)](){const x=s;let t=Object[x(424)](b);if(this.index>=t[x(476)])return;let e=t[this[x(396)]],a=this.roleSprites[e][x(385)];this[x(392)][x(350)]({targets:[this[x(451)][e],this[x(435)][e],S[e]],y:a,duration:1200,ease:x(311),delay:this[x(396)]*200,onComplete:()=>{this[x(481)](e)}})}[s(481)](x){const t=s;let e=b[x],a=p.find(r=>r[t(469)]===x)[t(304)],o=Math[t(302)](4e3,e*100)/Math[t(448)](1,e),n=0;if(e===0){this.spawnAnimation(this[t(451)][x].x,this[t(451)][x].y,x),this.time.delayedCall(500,()=>{const r=t;this.roleSprites[x][r(344)](),this.index++,this[r(454)]()});return}this[t(323)].addEvent({delay:o,repeat:e-1,callback:()=>{const r=t;n++,S[x][r(292)](n+" x"+a),this[r(432)]+=a,this[r(407)][r(292)](r(414)+this[r(432)]),n===e&&this[r(323)].delayedCall(500,()=>{const c=r;this[c(446)](this[c(451)][x].x,this[c(451)][x].y,x),this[c(451)][x][c(344)](),this.index++,this.animateNextRole()})}})}spawnAnimation(x,t,e){const a=s;e==="Terrorist"&&this.spawnExplosion(x,t),e===a(362)&&this[a(332)](x,t),e===a(372)&&this.spawnHeart(x,t)}[s(356)](x,t){const e=s;this[e(350)].sprite(x,t,e(352))[e(335)](.5,.5)[e(436)](.5)[e(478)]("explode"),this[e(326)][e(478)]({volume:.6}),this.time[e(464)](2e3,()=>{const o=e;let n=500,r=10,c=n/r,l=.6,m=this[o(323)][o(337)]({delay:c,repeat:r-1,callback:()=>{const f=o;l-=1/r,this[f(326)].setVolume(Math[f(448)](0,l)),l<=0&&(this[f(326)][f(474)](),m.remove())}})})}[s(332)](x,t){const e=s;let a=this[e(350)].sprite(x,t-20,e(367)).setOrigin(.5,.5);a[e(436)](.3),a[e(478)]("drugs"),this[e(401)][e(478)]({volume:1,seek:.5})}[s(348)](x,t){const e=s;let a=this[e(350)][e(445)](x,t,e(305))[e(436)](.5)[e(434)](200);this[e(392)][e(350)]({targets:a,x,y:t,scale:{from:.1,to:.5},alpha:{from:1,to:.6},ease:e(296),duration:1e3,onComplete:()=>a[e(344)]()}),this[e(383)][e(478)]({volume:1})}}const t0={type:Phaser[s(482)],height:F.height,width:F[s(487)],canvas:H,scene:[$,e0]},d=new Phaser[s(394)](t0);B()?(R.style[s(426)]="none",z[s(495)][s(426)]="flex",M(),window[s(412)]("resize",M),window[s(412)](s(472),M)):V[s(495)][s(426)]=s(307);X.addEventListener(s(321),()=>{const i=s;R[i(495)][i(426)]=i(307),H.style.display=i(369),L=!0,d[i(301)][i(355)](i(293)),d.scale[i(384)](),i0(),window[i(412)](i(297),A),o0(),window[i(412)](i(331),j)}),G[s(412)](s(321),()=>{const i=s;z[i(495)][i(426)]=i(307),R[i(495)][i(426)]=i(369),a0(document.documentElement)});let C=!1;const E=document[s(353)](s(312));function s0(){const i=s;C=!C,C?(d[i(444)].mute=!0,E[i(491)]="🔇"):(d[i(444)][i(467)]=!1,E.textContent="🔊")}E[s(412)](s(321),s0);function B(){return/Mobi|Android|iPhone|iPad|iPod/i[s(480)](navigator.userAgent)}function a0(i){const x=s;i[x(360)]?i[x(360)]():i[x(320)]?i[x(320)]():i.webkitRequestFullscreen?i.webkitRequestFullscreen():i[x(465)]&&i[x(465)]()}function M(){const i=s;let x=document[i(353)](i(374));if(!B()){x[i(495)][i(426)]="none";return}window[i(431)]("(orientation: portrait)")[i(428)]?(x[i(495)].display=i(369),d[i(301)][i(453)](i(293))):(x[i(495)][i(426)]=i(307),L&&d[i(301)][i(355)](i(293)))}const q=document[s(353)](s(421));function i0(){const i=s;B()&&(q.style[i(426)]="flex")}function A(){const i=s;q.style[i(426)]=i(307),window[i(463)](i(297),A)}const K=document[s(353)]("keyboardOverlay");function o0(){const i=s;!B()&&(K[i(495)][i(426)]=i(369))}function j(i){const x=s;(i[x(415)]===x(485)||i[x(415)]===x(328))&&(K.style[x(426)]=x(307),window[x(463)]("keydown",j))}document[s(353)](s(400))[s(412)](s(321),()=>{location[s(416)]()});
