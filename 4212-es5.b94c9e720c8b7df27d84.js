!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function e(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}(self.webpackChunkionic_timer=self.webpackChunkionic_timer||[]).push([[4212],{4212:function(t,i,o){"use strict";o.r(i),o.d(i,{TimerPageModule:function(){return O}});var s,r,u=o(8583),l=o(665),c=o(2593),a=o(4762),d=o(8739),m=o(8720),p=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return(0,a.ZT)(t,n),t.prototype.keepAwake=function(){return(0,d.cordova)(this,"keepAwake",{},arguments)},t.prototype.allowSleepAgain=function(){return(0,d.cordova)(this,"allowSleepAgain",{},arguments)},t.pluginName="Insomnia",t.plugin="cordova-plugin-insomnia",t.pluginRef="plugins.insomnia",t.repo="https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin",t.platforms=["Android","Browser","Firefox OS","iOS","Windows","Windows Phone 8"],t.\u0275fac=function(n){return(e||(e=m.n5z(t)))(n||t)},t.\u0275prov=m.Yz7({token:t,factory:function(n){return t.\u0275fac(n)}}),t;var e}(d.KY),h=o(1323),f=o(945),g=o(8307),Z=["createTimerForm"],k=function(){var t=function(){function t(e){n(this,t),this.modalCtrl=e,this.roundsNumber=1,this.defaultTime="00:00:00"}return e(t,[{key:"onDismiss",value:function(){this.modalCtrl.dismiss()}},{key:"onCreateTimer",value:function(n){var t=this.createTimerFormRef.value.fullTime.split(":");this.modalCtrl.dismiss({totalSeconds:60*+t[1]+ +t[2],rounds:this.createTimerFormRef.value.rounds},"confirm","createTimer")}},{key:"onRemoveRound",value:function(){this.roundsNumber--}},{key:"onAddRound",value:function(){this.roundsNumber++}}]),t}();return t.\u0275fac=function(n){return new(n||t)(m.Y36(c.IN))},t.\u0275cmp=m.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(n,t){var e;(1&n&&m.Gf(Z,5),2&n)&&(m.iGM(e=m.CRH())&&(t.createTimerFormRef=e.first))},decls:33,vars:6,consts:[["slot","primary"],[3,"click"],["name","close","slot","icon-only"],[3,"fullscreen"],[3,"submit"],["createTimerForm","ngForm"],["size-sm","6","offset-sm","3",1,"display-flex"],[1,"container","display-flex"],["displayFormat","mm:ss","placeholder","Choose a time","name","fullTime",3,"ngModel","ngModelChange"],["fullTime","ngModel"],[1,"display-block"],[1,"display-block","rounds-number"],["type","number","name","rounds","min","0","placeholder","0",1,"ion-hide",3,"ngModel","ngModelChange"],["rounds","ngModel"],[1,"cta"],["type","button","color","medium   ",3,"disabled","click"],["name","remove-outline","slot","icon-only"],["type","button","color","light",3,"click"],["name","add","slot","icon-only"],["type","submit","expand","block","color","primary",3,"disabled"]],template:function(n,t){if(1&n){var e=m.EpF();m.TgZ(0,"ion-header"),m.TgZ(1,"ion-toolbar"),m.TgZ(2,"ion-title"),m._uU(3,"New timer"),m.qZA(),m.TgZ(4,"ion-buttons",0),m.TgZ(5,"ion-button",1),m.NdJ("click",function(){return t.onDismiss()}),m._UZ(6,"ion-icon",2),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(7,"ion-content",3),m.TgZ(8,"form",4,5),m.NdJ("submit",function(){m.CHM(e);var n=m.MAs(9);return t.onCreateTimer(n)}),m.TgZ(10,"ion-grid"),m.TgZ(11,"ion-row"),m.TgZ(12,"ion-col",6),m.TgZ(13,"div",7),m.TgZ(14,"ion-item"),m.TgZ(15,"ion-label"),m._uU(16,"Round duration"),m.qZA(),m.TgZ(17,"ion-datetime",8,9),m.NdJ("ngModelChange",function(n){return t.defaultTime=n}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(19,"div",7),m.TgZ(20,"ion-text",10),m._uU(21,"ROUNDS"),m.qZA(),m.TgZ(22,"ion-text",11),m._uU(23),m.qZA(),m.TgZ(24,"ion-input",12,13),m.NdJ("ngModelChange",function(n){return t.roundsNumber=n}),m.qZA(),m.TgZ(26,"div",14),m.TgZ(27,"ion-button",15),m.NdJ("click",function(){return t.onRemoveRound()}),m._UZ(28,"ion-icon",16),m.qZA(),m.TgZ(29,"ion-button",17),m.NdJ("click",function(){return t.onAddRound()}),m._UZ(30,"ion-icon",18),m.qZA(),m.qZA(),m.qZA(),m.TgZ(31,"ion-button",19),m._uU(32,"Create"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA()}if(2&n){var i=m.MAs(9);m.xp6(7),m.Q6J("fullscreen",!0),m.xp6(10),m.Q6J("ngModel",t.defaultTime),m.xp6(6),m.Oqu(t.roundsNumber),m.xp6(1),m.Q6J("ngModel",t.roundsNumber),m.xp6(3),m.Q6J("disabled",t.roundsNumber<=1),m.xp6(4),m.Q6J("disabled",i.invalid)}},directives:[c.Gu,c.sr,c.wd,c.Sm,c.YG,c.gu,c.W2,l._Y,l.JL,l.F,c.jY,c.Nd,c.wI,c.Ie,c.Q$,c.x4,c.QI,l.JJ,l.On,c.yW,c.pK,c.as],styles:["form[_ngcontent-%COMP%], ion-grid[_ngcontent-%COMP%], ion-row[_ngcontent-%COMP%]{height:100%}.display-block[_ngcontent-%COMP%]{display:block;text-align:center}.display-flex[_ngcontent-%COMP%]{display:flex;flex-flow:column}.container[_ngcontent-%COMP%]{flex:1 1 auto}.rounds-number[_ngcontent-%COMP%]{font-size:3rem}.cta[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;flex:1 1 auto;align-items:center}"]}),t}(),T=o(6876),b=o(996),A=o(5161),v=[{path:"",component:(s=function(){function t(e,i){n(this,t),this.insomnia=e,this.modalCtrl=i,this.rounds=1,this.clock=70,this.pause=!0,this.isBlocked=!1,this.initialRounds=this.rounds,this.isDone=!1,this.radius=100,this.percent=0,this.progress=1,this.start=!0,this.PRIMARY_COLOR="#428cff",this.SECONDARY_COLOR="#50c8ff",this.DANGER_COLOR="#ff4961",this._initialClock=this.clock,this.TAP_SOUND="../../assets/sounds/button-50.mp3",this.START="Start",this.PAUSED="Paused",this.ON="On"}return e(t,[{key:"ngOnInit",value:function(){this._audio=new Audio(this.TAP_SOUND)}},{key:"ionViewDidLeave",value:function(){this.onReset()}},{key:"ngOnDestroy",value:function(){this.onReset()}},{key:"onCreateTimer",value:function(){var n=this;this.onReset(),this.modalCtrl.create({keyboardClose:!0,component:k,id:"createTimer"}).then(function(t){return(0,a.mG)(n,void 0,void 0,regeneratorRuntime.mark(function n(){var e,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.present(),this.pause=!0,n.next=3,t.onWillDismiss();case 3:e=n.sent,(i=e.data)&&(0!==i.totalSeconds&&(this._initialClock=i.totalSeconds,this.clock=i.totalSeconds),this.initialRounds=i.rounds);case 6:case"end":return n.stop()}},n,this)}))})}},{key:"onToggle",value:function(n){var t=this;this.pause=!this.pause,this.start=!1,this.pause&&this.intervalObs$?this.intervalObs$.unsubscribe():this.intervalObs$=(0,f.F)(1e3).pipe((0,g.b)(function(){t.percent=Math.floor(t.progress/t._initialClock*100),t.progress++,t.clock--,t.clock>=1&&t.clock<=3&&t._playSound(),t.clock<0&&t.initialRounds>1?t._roundsCount():t.clock<0&&(t.pause=!0,t.isBlocked=!0,t.intervalObs$.unsubscribe()),t.insomnia.keepAwake()})).subscribe(function(){})}},{key:"onReset",value:function(){this.intervalObs$&&this.intervalObs$.unsubscribe(),this.start=!0,this.pause=!0,this.isBlocked=!1,this.clock=this._initialClock,this.rounds=1,this.percent=0,this.progress=1,this.insomnia.allowSleepAgain()}},{key:"getSubtitle",value:function(){return this.start?this.START:this.pause?this.PAUSED:this.ON}},{key:"_playSound",value:function(){this._audio.play()}},{key:"_roundsCount",value:function(){this.progress=1,this.percent=0,this.rounds<this.initialRounds?(this.clock=this._initialClock,this.rounds++):(this.intervalObs$.unsubscribe(),this.pause=!0,this.isBlocked=!0)}}]),t}(),s.\u0275fac=function(n){return new(n||s)(m.Y36(p),m.Y36(c.IN))},s.\u0275cmp=m.Xpm({type:s,selectors:[["app-timer"]],decls:24,vars:25,consts:[["slot","primary"],[3,"click"],["color","primary","name","add","slot","icon-only"],[3,"fullscreen"],[1,"grid","ion-text-center","grid"],[1,"row","ion-align-items-center"],["size","12","size-sm","6","offset-sm","3"],[3,"ngClass","startFromZero","percent","radius","outerStrokeWidth","innerStrokeWidth","outerStrokeColor","innerStrokeColor","animation","animationDuration","title","showTitle","showUnits","showSubtitle","subtitle","titleFontSize","subtitleFontSize","titleColor","click"],[1,"clock"],["size","12","size-sm","6","offset-sm","3",1,"ion-padding-vertical"],[3,"isBlocked","pause","toggle","reset"]],template:function(n,t){1&n&&(m.TgZ(0,"ion-header"),m.TgZ(1,"ion-toolbar"),m.TgZ(2,"ion-title"),m._uU(3,"Timer"),m.qZA(),m.TgZ(4,"ion-buttons",0),m.TgZ(5,"ion-button",1),m.NdJ("click",function(){return t.onCreateTimer()}),m._UZ(6,"ion-icon",2),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(7,"ion-content",3),m.TgZ(8,"ion-grid",4),m.TgZ(9,"ion-row",5),m.TgZ(10,"ion-col",6),m.TgZ(11,"circle-progress",7),m.NdJ("click",function(){return t.onToggle()}),m.ALo(12,"timeFormat"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(13,"ion-row",5),m.TgZ(14,"ion-col",6),m.TgZ(15,"p",8),m._uU(16,"Round"),m.qZA(),m.TgZ(17,"p",8),m._uU(18),m.TgZ(19,"span"),m._uU(20),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(21,"ion-row",5),m.TgZ(22,"ion-col",9),m.TgZ(23,"player-controls",10),m.NdJ("toggle",function(){return t.onToggle()})("reset",function(){return t.onReset()}),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&n&&(m.xp6(7),m.Q6J("fullscreen",!0),m.xp6(4),m.Q6J("ngClass",t.pause&&!t.start?"paused":"")("startFromZero",!1)("percent",t.percent)("radius",t.radius)("outerStrokeWidth",16)("innerStrokeWidth",8)("outerStrokeColor",t.PRIMARY_COLOR)("innerStrokeColor",t.pause&&!t.start?t.DANGER_COLOR:t.SECONDARY_COLOR)("animation",!0)("animationDuration",100)("title",m.lcZ(12,23,t.clock))("showTitle",!0)("showUnits",!1)("showSubtitle",!0)("subtitle",t.getSubtitle())("titleFontSize",35)("subtitleFontSize",25)("titleColor",t.PRIMARY_COLOR),m.xp6(7),m.Oqu(t.rounds),m.xp6(2),m.hij("/",t.initialRounds,""),m.xp6(3),m.Q6J("isBlocked",t.isBlocked)("pause",t.pause))},directives:[c.Gu,c.sr,c.wd,c.Sm,c.YG,c.gu,c.W2,c.jY,c.Nd,c.wI,T.nu,u.mk,b.M],pipes:[A.x],styles:[".grid[_ngcontent-%COMP%]{display:flex;flex-flow:column;height:100%}.row[_ngcontent-%COMP%]{flex:1 1 auto}.clock[_ngcontent-%COMP%]{font-size:3rem}@media (min-width: 540px){.clock[_ngcontent-%COMP%]{font-size:5rem}}.clock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:2rem;color:var(--ion-color-medium)}p[_ngcontent-%COMP%]{margin:0}"]}),s)}],y=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[h.Bz.forChild(v)],h.Bz]}),t}(),C=o(4466),O=((r=function t(){n(this,t)}).\u0275fac=function(n){return new(n||r)},r.\u0275mod=m.oAB({type:r}),r.\u0275inj=m.cJS({providers:[p],imports:[[u.ez,l.u5,c.Pc,y,C.m]]}),r)}}])}();