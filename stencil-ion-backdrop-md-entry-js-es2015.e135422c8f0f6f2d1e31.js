(self.webpackChunkionic_timer=self.webpackChunkionic_timer||[]).push([[5014],{9146:function(t,o,a){"use strict";a.r(o),a.d(o,{ion_backdrop:function(){return c}});var i=a(52),s=a(7708),r=a(1201),n=a(7759);const c=class{constructor(t){(0,i.r)(this,t),this.lastClick=-1e4,this.blocker=n.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=(0,i.d)(this,"ionBackdropTap",7)}connectedCallback(){this.stopPropagation&&this.blocker.block()}disconnectedCallback(){this.blocker.unblock()}onTouchStart(t){this.lastClick=(0,r.n)(t),this.emitTap(t)}onMouseDown(t){this.lastClick<(0,r.n)(t)-2500&&this.emitTap(t)}emitTap(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){const t=(0,s.b)(this);return(0,i.h)(i.H,{tabindex:"-1",class:{[t]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};c.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}]);