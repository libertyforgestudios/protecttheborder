(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=e(a);fetch(a.href,i)}})();const T={width:800,height:600};let g=[],S=[];const B=18,b=46;let x=0;const P=8;let l,h=100;const p=5;let R=!1,y=[],v;const E=document.querySelector("#mobileIntroDiv"),C=document.querySelector("#goFullScreenBtn"),D=document.querySelector("#orientationOverlay"),M=document.querySelector("#gameCanvas"),k=document.querySelector("#gameStartDiv");document.querySelector("#gameEndDiv");const F=document.querySelector("#gameStartBtn");document.querySelector("#gameWinLoseSpan");document.querySelector("#gameEndScoreSpan");const O=document.querySelector("#workerScore"),W=document.querySelector("#terroristScore"),H=document.querySelector("#SmugglerScore"),L=document.querySelector("#victimScore"),f={Worker:O,Terrorist:W,Smuggler:H,Victim:L},m=[{name:"Victim",color:65280,scoreTimes:5,weight:20,damage:1,heal:5,action:"rescued"},{name:"Worker",color:255,scoreTimes:1,weight:60,damage:1,heal:0,action:"caught"},{name:"Smuggler",color:16776960,scoreTimes:3,weight:15,damage:10,heal:0,action:"caught"},{name:"Terrorist",color:16711680,scoreTimes:5,weight:5,damage:20,heal:0,action:"caught"}];let d={Worker:0,Terrorist:0,Smuggler:0,Victim:0},V={Worker:0,Terrorist:0,Smuggler:0,Victim:0};class z extends Phaser.Scene{constructor(){super("scene-game"),this.gameTimer,this.blocksTimer,this.dotsTimer,this.grindSound,this.explosionSound,this.drugsSound,this.thankyouSound}preload(){this.load.image("bg","map.jpg"),this.load.image("block","fence.png"),this.load.image("terrorist","terrorist.png"),this.load.image("worker","worker.png"),this.load.image("smuggler","smuggler.png"),this.load.image("victim","victim.png"),this.load.image("bus","bus.png"),this.load.image("heart","heart.png"),this.load.spritesheet("sparks","sparks.png",{frameWidth:492/2,frameHeight:492/2,spacing:0}),this.load.audio("grindSound","grind.mp3"),this.load.spritesheet("explosion","explosion.png",{frameWidth:837/3,frameHeight:558/2,spacing:0}),this.load.audio("explosionSound","explosion.wav"),this.load.spritesheet("drugs","drugs.png",{frameWidth:837/3,frameHeight:558/2,spacing:0}),this.load.audio("drugsSound","glass-breaking.mp3"),this.load.audio("thankyouSound","thankyou.mp3")}create(){this.scene.pause("scene-game"),this.add.image(0,0,"bg").setOrigin(0,0),this.grindSound=this.sound.add("grindSound"),this.explosionSound=this.sound.add("explosionSound"),this.drugsSound=this.sound.add("drugsSound"),this.thankyouSound=this.sound.add("thankyouSound");for(let t=0;t<b;t++){let e=t*B+(800-b*B)/2,a=this.add.image(e,200,"block").setOrigin(.5,.5).setScale(.7);g.push(a)}this.blocksTimer=this.time.addEvent({delay:5e3,callback:this.removeBlock,callbackScope:this,loop:!0}),this.dotsTimer=this.time.addEvent({delay:3e3,callback:this.spawnDot,callbackScope:this,loop:!0}),l=this.add.image(400,400,"bus").setOrigin(.5,.5).setScale(.4),v=this.input.keyboard.createCursorKeys(),this.healthBarBg=this.add.graphics().setDepth(100),this.healthBarBg.fillStyle(4473924,1),this.healthBarBg.fillRect(20,20,104,14),this.healthBar=this.add.graphics().setDepth(101),this.updateHealthBar(),this.anims.create({key:"sparks",frames:this.anims.generateFrameNumbers("sparks",{start:0,end:3}),frameRate:10,repeat:2,hideOnComplete:!0}),this.anims.create({key:"explode",frames:this.anims.generateFrameNumbers("explosion",{start:0,end:5}),frameRate:10,repeat:0,hideOnComplete:!0}),this.anims.create({key:"drugs",frames:this.anims.generateFrameNumbers("drugs",{start:0,end:5}),frameRate:10,repeat:0,hideOnComplete:!0}),this.scoreText=this.add.text(600,20,"Encounters: 0",{fontSize:"24px",fill:"#fff",fontFamily:"Arial",stroke:"#000",strokeThickness:3}).setDepth(100),this.input.addPointer(2),this.activeTouches={},this.input.on("pointerdown",t=>{if(!isFinite(t.x)){c.scale.refresh();return}let e=this.sys.canvas.clientWidth,s=this.sys.game.config.width,a=t.x*(s/e);this.activeTouches[t.id]=a,a<s/2?this.movingLeft=!0:this.movingRight=!0}),this.input.on("pointerup",t=>{t.x*(this.sys.game.config.width/this.sys.canvas.clientWidth),delete this.activeTouches[t.id],this.movingLeft=Object.values(this.activeTouches).some(e=>e<this.sys.game.config.width/2),this.movingRight=Object.values(this.activeTouches).some(e=>e>this.sys.game.config.width/2)}),this.input.on("pointerout",t=>{delete this.activeTouches[t.id],this.movingLeft=Object.values(this.activeTouches).some(e=>e<this.sys.game.config.width/2),this.movingRight=Object.values(this.activeTouches).some(e=>e>this.sys.game.config.width/2)})}spawnExplosion(t,e){let s=this.add.sprite(t,e-40,"explosion").setOrigin(.5,.5);s.setScale(.3),s.play("explode"),this.explosionSound.isPlaying||this.explosionSound.stop(),this.explosionSound.play({volume:.6}),this.time.delayedCall(2e3,()=>{let a=500,i=10,r=a/i,n=.6,u=this.time.addEvent({delay:r,repeat:i-1,callback:()=>{n-=1/i,this.explosionSound.setVolume(Math.max(0,n)),n<=0&&(this.explosionSound.stop(),u.remove())}})})}spawnDrugs(t,e){let s=this.add.sprite(t,e-40,"drugs").setOrigin(.5,.5);s.setScale(.3),s.play("drugs"),this.explosionSound.isPlaying||this.drugsSound.stop(),this.drugsSound.play({volume:1,seek:.5})}removeBlock(){if(g.length>0&&x<P){let t=Phaser.Math.Between(3,g.length-3),e=g.splice(t,1)[0],s=this.add.sprite(e.x,e.y,"sparks").setOrigin(.5);s.setScale(.1),s.play("sparks"),this.grindSound.play({volume:1,seek:1}),this.time.delayedCall(1e3,()=>{S.push(e.x),x++,s.destroy(),e.destroy(),this.grindSound.stop()})}}weightedRandomRole(){let t=m.reduce((a,i)=>a+i.weight,0),e=Phaser.Math.Between(1,t),s=0;for(let a of m)if(s+=a.weight,e<=s)return a;return m[0]}spawnDot(){for(let t=0;t<20;t++){let e=this.weightedRandomRole(),s=this.add.image(Phaser.Math.Between(10,790),0,e.name.toLowerCase()).setOrigin(.5,.5).setScale(.2);s.speed=Phaser.Math.FloatBetween(1,5),s.targetBottomX=Phaser.Math.Between(10,790),y.push({sprite:s,targetHole:null,passedWall:!1,movingToBottom:!1,role:e.name,roleObj:e,counted:!1})}}update(){v.left.isDown?l.x=Math.max(50,l.x-p):v.right.isDown&&(l.x=Math.min(750,l.x+p)),this.movingLeft&&(l.x=Math.max(50,l.x-p)),this.movingRight&&(l.x=Math.min(750,l.x+p)),y.forEach(t=>{let e=t.sprite;if(!t.counted){if(e.y>=600){t.counted=!0,V[t.role]++,this.updateHealth(-t.roleObj.damage),t.role==="Terrorist"&&this.spawnExplosion(e.x,e.y),t.role==="Smuggler"&&this.spawnDrugs(e.x,e.y),e.destroy();return}if(x==0)e.y<g[0].y-50&&(e.y+=e.speed*.1);else if(t.passedWall){t.movingToBottom||(t.targetX=e.targetBottomX,t.targetY=600,t.movingToBottom=!0);let s=t.targetX-e.x,a=t.targetY-e.y,i=Math.sqrt(s*s+a*a);i>2?(e.x+=s/i*e.speed*.5,e.y+=a/i*e.speed*.5):(e.x=t.targetX,e.y=t.targetY)}else if(S.length>0&&e.y<200){t.targetHole||(t.targetHole=S.reduce((r,n)=>Math.abs(n-e.x)<Math.abs(r-e.x)?n:r));let s=t.targetHole-e.x,a=200-e.y,i=Math.sqrt(s*s+a*a);i>2?(e.x+=s/i*e.speed*.5,e.y+=a/i*e.speed*.5):e.y+=e.speed}else e.y+=e.speed,e.y>=200&&(t.passedWall=!0);Phaser.Math.Distance.Between(e.x,e.y,l.x,l.y)<40&&(t.counted=!0,d[t.role]++,this.scoreText.setText(`Encounters: ${d.Worker+d.Terrorist+d.Smuggler+d.Victim}`),this.updateHealth(t.roleObj.heal),t.role==="Victim"&&this.celebrateRescue(e.x,e.y),e.destroy())}})}celebrateRescue(t,e){this.thankyouSound.play({volume:1});let s=this.add.sprite(t,e,"heart").setScale(.5).setDepth(200);this.tweens.add({targets:s,x:100,y:50,scale:{from:.5,to:.1},alpha:{from:1,to:.6},ease:"Cubic.easeOut",duration:1e3,onComplete:()=>s.destroy()})}updateHealth(t){let e=h;h=Phaser.Math.Clamp(h+t,0,100),h!==e&&this.updateHealthBar(),h<=0&&Y()}updateHealthBar(){this.healthBar.clear(),this.healthBar.fillStyle(h>60?65280:h>30?16776960:16711680,1),this.healthBar.fillRect(22,22,h,10),this.healthBarBg.lineStyle(2,16777215,1),this.healthBarBg.strokeRect(20,20,104,14)}getRandomX(){return Math.floor(Math.random()*480)}targetHit(){this.coinMusic.play(),this.emitter.start(),this.target.setY(0),this.target.setX(this.getRandomX()),this.points++}}function Y(){let o=c.scene.getScene("scene-game");o&&(y.forEach(t=>t.sprite.destroy()),y=[],o.cameras.main.fadeOut(1e3,0,0,0),o.time.delayedCall(1e3,()=>{c.scene.stop("scene-game"),c.scene.start("scene-gameover")}))}class N extends Phaser.Scene{constructor(){super("scene-gameover"),this.explosionSound,this.drugsSound,this.thankyouSound}preload(){this.load.image("gameover_bg","introbg.jpg"),this.load.audio("explosionSound","explosion.wav"),this.load.audio("drugsSound","glass-breaking.mp3"),this.load.audio("thankyouSound","thankyou.mp3")}create(){this.add.image(400,300,"gameover_bg").setDisplaySize(800,600),this.add.rectangle(400,300,800,600,0,.5),this.explosionSound=this.sound.add("explosionSound"),this.drugsSound=this.sound.add("drugsSound"),this.thankyouSound=this.sound.add("thankyouSound"),this.add.text(400,50,"Final Score Breakdown",{fontSize:"32px",fill:"#fff"}).setOrigin(.5);let t=Object.keys(d);this.index=0,this.roleSprites={},this.roleTexts={};let e=120,s=60,a=550;this.finalScore=0,this.finalScoreText=this.add.text(a+30,e+(t.length+1)*s,"Final Score: 0",{fontSize:"28px",fill:"#ffdd44",fontWeight:"bold"}).setOrigin(1,.5),t.forEach((i,r)=>{let n=e+r*s;this.roleSprites[i]=this.add.sprite(150,-100,i.toLowerCase()).setScale(.5).setOrigin(.5,.5),this.roleTexts[i]=this.add.text(220,-100,`${i}s ${m.find(u=>u.name===i).action}: `,{fontSize:"24px",fill:"#fff"}).setOrigin(0,.5),f[i]=this.add.text(a+30,-100,`0 x ${m.find(u=>u.name===i).scoreTimes}`,{fontSize:"24px",fill:"#ffd700"}).setOrigin(1,.5),this.roleSprites[i].targetY=n,this.roleTexts[i].targetY=n,f[i].targetY=n}),this.animateNextRole()}animateNextRole(){let t=Object.keys(d);if(this.index>=t.length)return;let e=t[this.index],s=this.roleSprites[e].targetY;this.tweens.add({targets:[this.roleSprites[e],this.roleTexts[e],f[e]],y:s,duration:1200,ease:"Bounce.easeOut",delay:this.index*200,onComplete:()=>{this.countUpScore(e)}})}countUpScore(t){let e=d[t],s=m.find(r=>r.name===t).scoreTimes,a=Math.min(4e3,e*100)/Math.max(1,e),i=0;if(e===0){this.spawnAnimation(this.roleSprites[t].x,this.roleSprites[t].y,t),this.time.delayedCall(500,()=>{this.roleSprites[t].destroy(),this.index++,this.animateNextRole()});return}this.time.addEvent({delay:a,repeat:e-1,callback:()=>{i++,f[t].setText(`${i} x${s}`),this.finalScore+=s,this.finalScoreText.setText(`Final Score: ${this.finalScore}`),i===e&&this.time.delayedCall(500,()=>{this.spawnAnimation(this.roleSprites[t].x,this.roleSprites[t].y,t),this.roleSprites[t].destroy(),this.index++,this.animateNextRole()})}})}spawnAnimation(t,e,s){s==="Terrorist"&&this.spawnExplosion(t,e),s==="Smuggler"&&this.spawnDrugs(t,e),s==="Victim"&&this.spawnHeart(t,e)}spawnExplosion(t,e){this.add.sprite(t,e,"explosion").setOrigin(.5,.5).setScale(.5).play("explode"),this.explosionSound.play({volume:.6}),this.time.delayedCall(2e3,()=>{let a=500,i=10,r=a/i,n=.6,u=this.time.addEvent({delay:r,repeat:i-1,callback:()=>{n-=1/i,this.explosionSound.setVolume(Math.max(0,n)),n<=0&&(this.explosionSound.stop(),u.remove())}})})}spawnDrugs(t,e){let s=this.add.sprite(t,e-20,"drugs").setOrigin(.5,.5);s.setScale(.3),s.play("drugs"),this.drugsSound.play({volume:1,seek:.5})}spawnHeart(t,e){let s=this.add.sprite(t,e,"heart").setScale(.5).setDepth(200);this.tweens.add({targets:s,x:t,y:e,scale:{from:.1,to:.5},alpha:{from:1,to:.6},ease:"Cubic.easeOut",duration:1e3,onComplete:()=>s.destroy()}),this.thankyouSound.play({volume:1})}}const X={type:Phaser.WEBGL,height:T.height,width:T.width,canvas:M,scene:[z,N]},c=new Phaser.Game(X);q()?(k.style.display="none",E.style.display="flex",w(),window.addEventListener("resize",w),window.addEventListener("orientationchange",w)):D.style.display="none";F.addEventListener("click",()=>{k.style.display="none",M.style.display="flex",R=!0,c.scene.resume("scene-game"),c.scale.refresh()});C.addEventListener("click",()=>{E.style.display="none",k.style.display="flex",A(document.documentElement)});function q(){return/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)}function A(o){o.requestFullscreen?o.requestFullscreen():o.mozRequestFullScreen?o.mozRequestFullScreen():o.webkitRequestFullscreen?o.webkitRequestFullscreen():o.msRequestFullscreen&&o.msRequestFullscreen()}function w(){let o=document.getElementById("orientationOverlay");if(!q()){o.style.display="none";return}window.matchMedia("(orientation: portrait)").matches?(o.style.display="flex",c.scene.pause("scene-game")):(o.style.display="none",R&&c.scene.resume("scene-game"))}
