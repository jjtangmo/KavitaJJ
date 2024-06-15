import{Ea as N,Kb as X,Oa as I,Pa as M,Rc as ie,Ta as K,Vb as Z,Wb as Y,Xb as J,ec as ee,fc as te,jc as B,kc as L,la as F,lc as R,mb as y,mc as G,sb as Q,tb as $,ud as re,va as j,wa as q,xd as ne}from"./chunk-2LHIXASS.js";var T=Object.freeze({Linear:Object.freeze({None:function(e){return e},In:function(e){return this.None(e)},Out:function(e){return this.None(e)},InOut:function(e){return this.None(e)}}),Quadratic:Object.freeze({In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}}),Cubic:Object.freeze({In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}}),Quartic:Object.freeze({In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}}),Quintic:Object.freeze({In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}}),Sinusoidal:Object.freeze({In:function(e){return 1-Math.sin((1-e)*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return .5*(1-Math.sin(Math.PI*(.5-e)))}}),Exponential:Object.freeze({In:function(e){return e===0?0:Math.pow(1024,e-1)},Out:function(e){return e===1?1:1-Math.pow(2,-10*e)},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(-Math.pow(2,-10*(e-1))+2)}}),Circular:Object.freeze({In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}}),Elastic:Object.freeze({In:function(e){return e===0?0:e===1?1:-Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI)},Out:function(e){return e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e-.1)*5*Math.PI)+1},InOut:function(e){return e===0?0:e===1?1:(e*=2,e<1?-.5*Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin((e-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(e){var r=1.70158;return e===1?1:e*e*((r+1)*e-r)},Out:function(e){var r=1.70158;return e===0?0:--e*e*((r+1)*e+r)+1},InOut:function(e){var r=2.5949095;return(e*=2)<1?.5*(e*e*((r+1)*e-r)):.5*((e-=2)*e*((r+1)*e+r)+2)}}),Bounce:Object.freeze({In:function(e){return 1-T.Bounce.Out(1-e)},Out:function(e){return e<.36363636363636365?7.5625*e*e:e<.7272727272727273?7.5625*(e-=.5454545454545454)*e+.75:e<.9090909090909091?7.5625*(e-=.8181818181818182)*e+.9375:7.5625*(e-=.9545454545454546)*e+.984375},InOut:function(e){return e<.5?T.Bounce.In(e*2)*.5:T.Bounce.Out(e*2-1)*.5+.5}}),generatePow:function(e){return e===void 0&&(e=4),e=e<Number.EPSILON?Number.EPSILON:e,e=e>1e4?1e4:e,{In:function(r){return Math.pow(r,e)},Out:function(r){return 1-Math.pow(1-r,e)},InOut:function(r){return r<.5?Math.pow(r*2,e)/2:(1-Math.pow(2-r*2,e))/2+.5}}}}),D=function(){return performance.now()},de=function(){function e(){this._tweens={},this._tweensAddedDuringUpdate={}}return e.prototype.getAll=function(){var r=this;return Object.keys(this._tweens).map(function(t){return r._tweens[t]})},e.prototype.removeAll=function(){this._tweens={}},e.prototype.add=function(r){this._tweens[r.getId()]=r,this._tweensAddedDuringUpdate[r.getId()]=r},e.prototype.remove=function(r){delete this._tweens[r.getId()],delete this._tweensAddedDuringUpdate[r.getId()]},e.prototype.update=function(r,t){r===void 0&&(r=D()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var n=0;n<i.length;n++){var s=this._tweens[i[n]],l=!t;s&&s.update(r,l)===!1&&!t&&delete this._tweens[i[n]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},e}(),x={Linear:function(e,r){var t=e.length-1,i=t*r,n=Math.floor(i),s=x.Utils.Linear;return r<0?s(e[0],e[1],i):r>1?s(e[t],e[t-1],t-i):s(e[n],e[n+1>t?t:n+1],i-n)},Bezier:function(e,r){for(var t=0,i=e.length-1,n=Math.pow,s=x.Utils.Bernstein,l=0;l<=i;l++)t+=n(1-r,i-l)*n(r,l)*e[l]*s(i,l);return t},CatmullRom:function(e,r){var t=e.length-1,i=t*r,n=Math.floor(i),s=x.Utils.CatmullRom;return e[0]===e[t]?(r<0&&(n=Math.floor(i=t*(1+r))),s(e[(n-1+t)%t],e[n],e[(n+1)%t],e[(n+2)%t],i-n)):r<0?e[0]-(s(e[0],e[0],e[1],e[1],-i)-e[0]):r>1?e[t]-(s(e[t],e[t],e[t-1],e[t-1],i-t)-e[t]):s(e[n?n-1:0],e[n],e[t<n+1?t:n+1],e[t<n+2?t:n+2],i-n)},Utils:{Linear:function(e,r,t){return(r-e)*t+e},Bernstein:function(e,r){var t=x.Utils.Factorial;return t(e)/t(r)/t(e-r)},Factorial:function(){var e=[1];return function(r){var t=1;if(e[r])return e[r];for(var i=r;i>1;i--)t*=i;return e[r]=t,t}}(),CatmullRom:function(e,r,t,i,n){var s=(t-e)*.5,l=(i-r)*.5,o=n*n,h=n*o;return(2*r-2*t+s+l)*h+(-3*r+3*t-2*s-l)*o+s*n+r}}},se=function(){function e(){}return e.nextId=function(){return e._nextId++},e._nextId=0,e}(),U=new de,le=function(){function e(r,t){t===void 0&&(t=U),this._object=r,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=T.Linear.None,this._interpolationFunction=x.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=se.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return e.prototype.getId=function(){return this._id},e.prototype.isPlaying=function(){return this._isPlaying},e.prototype.isPaused=function(){return this._isPaused},e.prototype.to=function(r,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=r,this._propertiesAreSetUp=!1,this._duration=t,this},e.prototype.duration=function(r){return r===void 0&&(r=1e3),this._duration=r,this},e.prototype.dynamic=function(r){return r===void 0&&(r=!1),this._isDynamic=r,this},e.prototype.start=function(r,t){if(r===void 0&&(r=D()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=r,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var n={};for(var s in this._valuesEnd)n[s]=this._valuesEnd[s];this._valuesEnd=n}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},e.prototype.startFromCurrentValues=function(r){return this.start(r,!0)},e.prototype._setupProperties=function(r,t,i,n,s){for(var l in i){var o=r[l],h=Array.isArray(o),a=h?"array":typeof o,f=!h&&Array.isArray(i[l]);if(!(a==="undefined"||a==="function")){if(f){var c=i[l];if(c.length===0)continue;for(var d=[o],p=0,S=c.length;p<S;p+=1){var u=this._handleRelativeValue(o,c[p]);if(isNaN(u)){f=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(u)}f&&(i[l]=d)}if((a==="object"||h)&&o&&!f){t[l]=h?[]:{};var _=o;for(var m in _)t[l][m]=_[m];n[l]=h?[]:{};var c=i[l];if(!this._isDynamic){var H={};for(var m in c)H[m]=c[m];i[l]=c=H}this._setupProperties(_,t[l],c,n[l],s)}else(typeof t[l]>"u"||s)&&(t[l]=o),h||(t[l]*=1),f?n[l]=i[l].slice().reverse():n[l]=t[l]||0}}},e.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},e.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},e.prototype.pause=function(r){return r===void 0&&(r=D()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=r,this._group&&this._group.remove(this),this)},e.prototype.resume=function(r){return r===void 0&&(r=D()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=r-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},e.prototype.stopChainedTweens=function(){for(var r=0,t=this._chainedTweens.length;r<t;r++)this._chainedTweens[r].stop();return this},e.prototype.group=function(r){return r===void 0&&(r=U),this._group=r,this},e.prototype.delay=function(r){return r===void 0&&(r=0),this._delayTime=r,this},e.prototype.repeat=function(r){return r===void 0&&(r=0),this._initialRepeat=r,this._repeat=r,this},e.prototype.repeatDelay=function(r){return this._repeatDelayTime=r,this},e.prototype.yoyo=function(r){return r===void 0&&(r=!1),this._yoyo=r,this},e.prototype.easing=function(r){return r===void 0&&(r=T.Linear.None),this._easingFunction=r,this},e.prototype.interpolation=function(r){return r===void 0&&(r=x.Linear),this._interpolationFunction=r,this},e.prototype.chain=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return this._chainedTweens=r,this},e.prototype.onStart=function(r){return this._onStartCallback=r,this},e.prototype.onEveryStart=function(r){return this._onEveryStartCallback=r,this},e.prototype.onUpdate=function(r){return this._onUpdateCallback=r,this},e.prototype.onRepeat=function(r){return this._onRepeatCallback=r,this},e.prototype.onComplete=function(r){return this._onCompleteCallback=r,this},e.prototype.onStop=function(r){return this._onStopCallback=r,this},e.prototype.update=function(r,t){if(r===void 0&&(r=D()),t===void 0&&(t=!0),this._isPaused)return!0;var i,n,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(r>s)return!1;t&&this.start(r,!0)}if(this._goToEnd=!1,r<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),n=(r-this._startTime)/this._duration,n=this._duration===0||n>1?1:n;var l=this._easingFunction(n);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,l),this._onUpdateCallback&&this._onUpdateCallback(this._object,n),n===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=r+this._repeatDelayTime:this._startTime=r+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,h=this._chainedTweens.length;o<h;o++)this._chainedTweens[o].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},e.prototype._updateProperties=function(r,t,i,n){for(var s in i)if(t[s]!==void 0){var l=t[s]||0,o=i[s],h=Array.isArray(r[s]),a=Array.isArray(o),f=!h&&a;f?r[s]=this._interpolationFunction(o,n):typeof o=="object"&&o?this._updateProperties(r[s],l,o,n):(o=this._handleRelativeValue(l,o),typeof o=="number"&&(r[s]=l+(o-l)*n))}},e.prototype._handleRelativeValue=function(r,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?r+parseFloat(t):parseFloat(t)},e.prototype._swapEndStartRepeatValues=function(r){var t=this._valuesStartRepeat[r],i=this._valuesEnd[r];typeof i=="string"?this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(i):this._valuesStartRepeat[r]=this._valuesEnd[r],this._valuesEnd[r]=t},e}();var Se=se.nextId,w=U,we=w.getAll.bind(w),Pe=w.removeAll.bind(w),Ce=w.add.bind(w),be=w.remove.bind(w),Ie=w.update.bind(w);var ue=["header"],pe=["container"],me=["content"],ge=["invisiblePadding"],_e=["*"];function ve(){return{checkResizeInterval:1e3,modifyOverflowStyleOfParentScroll:!0,resizeBypassRefreshThreshold:5,scrollAnimationTime:750,scrollDebounceTime:0,scrollThrottlingTime:0,stripedTable:!1}}var He=(()=>{class e{element;renderer;zone;changeDetectorRef;viewPortItems;window=window;get viewPortInfo(){let t=this.previousViewPort||{};return{startIndex:t.startIndex||0,endIndex:t.endIndex||0,scrollStartPosition:t.scrollStartPosition||0,scrollEndPosition:t.scrollEndPosition||0,maxScrollPosition:t.maxScrollPosition||0,startIndexWithBuffer:t.startIndexWithBuffer||0,endIndexWithBuffer:t.endIndexWithBuffer||0}}executeRefreshOutsideAngularZone=!1;_enableUnequalChildrenSizes=!1;get enableUnequalChildrenSizes(){return this._enableUnequalChildrenSizes}set enableUnequalChildrenSizes(t){this._enableUnequalChildrenSizes!==t&&(this._enableUnequalChildrenSizes=t,this.minMeasuredChildWidth=void 0,this.minMeasuredChildHeight=void 0)}RTL=!1;useMarginInsteadOfTranslate=!1;modifyOverflowStyleOfParentScroll;stripedTable;scrollbarWidth;scrollbarHeight;childWidth;childHeight;ssrChildWidth;ssrChildHeight;ssrViewportWidth=1920;ssrViewportHeight=1080;_bufferAmount;get bufferAmount(){return typeof this._bufferAmount=="number"&&this._bufferAmount>=0?this._bufferAmount:this.enableUnequalChildrenSizes?5:0}set bufferAmount(t){this._bufferAmount=t}scrollAnimationTime;resizeBypassRefreshThreshold;_scrollThrottlingTime;get scrollThrottlingTime(){return this._scrollThrottlingTime}set scrollThrottlingTime(t){this._scrollThrottlingTime=t,this.updateOnScrollFunction()}_scrollDebounceTime;get scrollDebounceTime(){return this._scrollDebounceTime}set scrollDebounceTime(t){this._scrollDebounceTime=t,this.updateOnScrollFunction()}onScroll;updateOnScrollFunction(){this.scrollDebounceTime?this.onScroll=this.debounce(()=>{this.refresh_internal(!1)},this.scrollDebounceTime):this.scrollThrottlingTime?this.onScroll=this.throttleTrailing(()=>{this.refresh_internal(!1)},this.scrollThrottlingTime):this.onScroll=()=>{this.refresh_internal(!1)}}checkScrollElementResizedTimer;_checkResizeInterval;get checkResizeInterval(){return this._checkResizeInterval}set checkResizeInterval(t){this._checkResizeInterval!==t&&(this._checkResizeInterval=t,this.addScrollEventHandlers())}_items=[];get items(){return this._items}set items(t){t!==this._items&&(this._items=t||[],this.refresh_internal(!0))}compareItems=(t,i)=>t===i;_horizontal;get horizontal(){return this._horizontal}set horizontal(t){this._horizontal=t,this.updateDirection()}revertParentOverscroll(){let t=this.getScrollElement();t&&this.oldParentScrollOverflow&&(t.style["overflow-y"]=this.oldParentScrollOverflow.y,t.style["overflow-x"]=this.oldParentScrollOverflow.x),this.oldParentScrollOverflow=void 0}oldParentScrollOverflow;_parentScroll;get parentScroll(){return this._parentScroll}set parentScroll(t){if(this._parentScroll===t)return;this.revertParentOverscroll(),this._parentScroll=t,this.addScrollEventHandlers();let i=this.getScrollElement();this.modifyOverflowStyleOfParentScroll&&i!==this.element.nativeElement&&(this.oldParentScrollOverflow={x:i.style["overflow-x"],y:i.style["overflow-y"]},i.style["overflow-y"]=this.horizontal?"visible":"auto",i.style["overflow-x"]=this.horizontal?"auto":"visible")}vsUpdate=new M;vsChange=new M;vsStart=new M;vsEnd=new M;contentElementRef;invisiblePaddingElementRef;headerElementRef;containerElementRef;ngOnInit(){this.addScrollEventHandlers()}ngOnDestroy(){this.removeScrollEventHandlers(),this.revertParentOverscroll()}ngOnChanges(t){let i=this.cachedItemsLength!==this.items.length;this.cachedItemsLength=this.items.length;let n=!t.items||!t.items.previousValue||t.items.previousValue.length===0;this.refresh_internal(i||n)}ngDoCheck(){if(this.cachedItemsLength!==this.items.length){this.cachedItemsLength=this.items.length,this.refresh_internal(!0);return}if(this.previousViewPort&&this.viewPortItems&&this.viewPortItems.length>0){let t=!1;for(let i=0;i<this.viewPortItems.length;++i)if(!this.compareItems(this.items[this.previousViewPort.startIndexWithBuffer+i],this.viewPortItems[i])){t=!0;break}t&&this.refresh_internal(!0)}}refresh(){this.refresh_internal(!0)}invalidateAllCachedMeasurements(){this.wrapGroupDimensions={maxChildSizePerWrapGroup:[],numberOfKnownWrapGroupChildSizes:0,sumOfKnownWrapGroupChildWidths:0,sumOfKnownWrapGroupChildHeights:0},this.minMeasuredChildWidth=void 0,this.minMeasuredChildHeight=void 0,this.refresh_internal(!1)}invalidateCachedMeasurementForItem(t){if(this.enableUnequalChildrenSizes){let i=this.items&&this.items.indexOf(t);i>=0&&this.invalidateCachedMeasurementAtIndex(i)}else this.minMeasuredChildWidth=void 0,this.minMeasuredChildHeight=void 0;this.refresh_internal(!1)}invalidateCachedMeasurementAtIndex(t){if(this.enableUnequalChildrenSizes){let i=this.wrapGroupDimensions.maxChildSizePerWrapGroup[t];i&&(this.wrapGroupDimensions.maxChildSizePerWrapGroup[t]=void 0,--this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes,this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths-=i.childWidth||0,this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights-=i.childHeight||0)}else this.minMeasuredChildWidth=void 0,this.minMeasuredChildHeight=void 0;this.refresh_internal(!1)}scrollInto(t,i=!0,n=0,s=void 0,l=void 0){let o=this.items.indexOf(t);o!==-1&&this.scrollToIndex(o,i,n,s,l)}scrollToIndex(t,i=!0,n=0,s=void 0,l=void 0){let o=5,h=()=>{if(--o,o<=0){l&&l();return}let a=this.calculateDimensions(),f=Math.min(Math.max(t,0),a.itemCount-1);if(this.previousViewPort.startIndex===f){l&&l();return}this.scrollToIndex_internal(t,i,n,0,h)};this.scrollToIndex_internal(t,i,n,s,h)}scrollToIndex_internal(t,i=!0,n=0,s=void 0,l=void 0){s=s===void 0?this.scrollAnimationTime:s;let o=this.calculateDimensions(),h=this.calculatePadding(t,o)+n;i||(h-=o.wrapGroupsPerPage*o[this._childScrollDim]),this.scrollToPosition(h,s,l)}scrollToPosition(t,i=void 0,n=void 0){t+=this.getElementsOffset(),i=i===void 0?this.scrollAnimationTime:i;let s=this.getScrollElement(),l;if(this.currentTween&&(this.currentTween.stop(),this.currentTween=void 0),!i){this.renderer.setProperty(s,this._scrollType,t),this.refresh_internal(!1,n);return}let o={scrollPosition:s[this._scrollType]},h=new le(o).to({scrollPosition:t},i).easing(T.Quadratic.Out).onUpdate(f=>{isNaN(f.scrollPosition)||(this.renderer.setProperty(s,this._scrollType,f.scrollPosition),this.refresh_internal(!1))}).onStop(()=>{cancelAnimationFrame(l)}).start(),a=f=>{if(h.isPlaying()){if(h.update(f),o.scrollPosition===t){this.refresh_internal(!1,n);return}this.zone.runOutsideAngular(()=>{l=requestAnimationFrame(a)})}};a(),this.currentTween=h}isAngularUniversalSSR;constructor(t,i,n,s,l,o){this.element=t,this.renderer=i,this.zone=n,this.changeDetectorRef=s,this.isAngularUniversalSSR=ne(l),this.checkResizeInterval=o.checkResizeInterval,this.modifyOverflowStyleOfParentScroll=o.modifyOverflowStyleOfParentScroll,this.resizeBypassRefreshThreshold=o.resizeBypassRefreshThreshold,this.scrollAnimationTime=o.scrollAnimationTime,this.scrollDebounceTime=o.scrollDebounceTime,this.scrollThrottlingTime=o.scrollThrottlingTime,this.scrollbarHeight=o.scrollbarHeight,this.scrollbarWidth=o.scrollbarWidth,this.stripedTable=o.stripedTable,this.horizontal=!1,this.resetWrapGroupDimensions()}getElementSize(t){let i=t.getBoundingClientRect(),n=getComputedStyle(t),s=parseInt(n["margin-top"],10)||0,l=parseInt(n["margin-bottom"],10)||0,o=parseInt(n["margin-left"],10)||0,h=parseInt(n["margin-right"],10)||0;return{top:i.top+s,bottom:i.bottom+l,left:i.left+o,right:i.right+h,width:i.width+o+h,height:i.height+s+l}}previousScrollBoundingRect;checkScrollElementResized(){let t=this.getElementSize(this.getScrollElement()),i;if(!this.previousScrollBoundingRect)i=!0;else{let n=Math.abs(t.width-this.previousScrollBoundingRect.width),s=Math.abs(t.height-this.previousScrollBoundingRect.height);i=n>this.resizeBypassRefreshThreshold||s>this.resizeBypassRefreshThreshold}i&&(this.previousScrollBoundingRect=t,t.width>0&&t.height>0&&this.refresh_internal(!1))}_invisiblePaddingProperty;_offsetType;_scrollType;_pageOffsetType;_childScrollDim;_translateDir;_marginDir;updateDirection(){this.horizontal?(this._childScrollDim="childWidth",this._invisiblePaddingProperty="scaleX",this._marginDir="margin-left",this._offsetType="offsetLeft",this._pageOffsetType="pageXOffset",this._scrollType="scrollLeft",this._translateDir="translateX"):(this._childScrollDim="childHeight",this._invisiblePaddingProperty="scaleY",this._marginDir="margin-top",this._offsetType="offsetTop",this._pageOffsetType="pageYOffset",this._scrollType="scrollTop",this._translateDir="translateY")}debounce(t,i){let n=this.throttleTrailing(t,i),s=function(){n.cancel(),n.apply(this,arguments)};return s.cancel=function(){n.cancel()},s}throttleTrailing(t,i){let n,s=arguments,l=function(){let o=this;s=arguments,!n&&(i<=0?t.apply(o,s):n=setTimeout(function(){n=void 0,t.apply(o,s)},i))};return l.cancel=function(){n&&(clearTimeout(n),n=void 0)},l}calculatedScrollbarWidth=0;calculatedScrollbarHeight=0;padding=0;previousViewPort={};currentTween;cachedItemsLength;disposeScrollHandler;disposeResizeHandler;refresh_internal(t,i=void 0,n=2){if(t&&this.previousViewPort&&this.previousViewPort.scrollStartPosition>0){let s=this.previousViewPort,l=this.viewPortItems,o=i;i=()=>{let h=this.previousViewPort.scrollLength-s.scrollLength;if(h>0&&this.viewPortItems){let a=l[0],f=this.items.findIndex(c=>this.compareItems(a,c));if(f>this.previousViewPort.startIndexWithBuffer){let c=!1;for(let d=1;d<this.viewPortItems.length;++d)if(!this.compareItems(this.items[f+d],l[d])){c=!0;break}if(!c){this.scrollToPosition(this.previousViewPort.scrollStartPosition+h,0,o);return}}}o&&o()}}this.zone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t&&this.resetWrapGroupDimensions();let s=this.calculateViewport(),l=t||s.startIndex!==this.previousViewPort.startIndex,o=t||s.endIndex!==this.previousViewPort.endIndex,h=s.scrollbarLength!==this.previousViewPort.scrollbarLength,a=s.padding!==this.previousViewPort.padding,f=s.scrollStartPosition!==this.previousViewPort.scrollStartPosition||s.scrollEndPosition!==this.previousViewPort.scrollEndPosition||s.maxScrollPosition!==this.previousViewPort.maxScrollPosition;if(this.previousViewPort=s,h&&(this.renderer.setStyle(this.invisiblePaddingElementRef.nativeElement,"transform",`${this._invisiblePaddingProperty}(${s.scrollbarLength})`),this.renderer.setStyle(this.invisiblePaddingElementRef.nativeElement,"webkitTransform",`${this._invisiblePaddingProperty}(${s.scrollbarLength})`)),a&&(this.useMarginInsteadOfTranslate?this.renderer.setStyle(this.contentElementRef.nativeElement,this._marginDir,`${s.padding}px`):(this.renderer.setStyle(this.contentElementRef.nativeElement,"transform",`${this._translateDir}(${s.padding}px)`),this.renderer.setStyle(this.contentElementRef.nativeElement,"webkitTransform",`${this._translateDir}(${s.padding}px)`))),this.headerElementRef){let d=this.getScrollElement()[this._scrollType],p=this.getElementsOffset(),S=Math.max(d-s.padding-p+this.headerElementRef.nativeElement.clientHeight,0);this.renderer.setStyle(this.headerElementRef.nativeElement,"transform",`${this._translateDir}(${S}px)`),this.renderer.setStyle(this.headerElementRef.nativeElement,"webkitTransform",`${this._translateDir}(${S}px)`)}let c=l||o?{startIndex:s.startIndex,endIndex:s.endIndex,scrollStartPosition:s.scrollStartPosition,scrollEndPosition:s.scrollEndPosition,startIndexWithBuffer:s.startIndexWithBuffer,endIndexWithBuffer:s.endIndexWithBuffer,maxScrollPosition:s.maxScrollPosition}:void 0;if(l||o||f){let d=()=>{if(this.viewPortItems=s.startIndexWithBuffer>=0&&s.endIndexWithBuffer>=0?this.items.slice(s.startIndexWithBuffer,s.endIndexWithBuffer+1):[],this.vsUpdate.emit(this.viewPortItems),l&&this.vsStart.emit(c),o&&this.vsEnd.emit(c),(l||o)&&(this.changeDetectorRef.markForCheck(),this.vsChange.emit(c)),n>0){this.refresh_internal(!1,i,n-1);return}i&&i()};this.executeRefreshOutsideAngularZone?d():this.zone.run(d)}else{if(n>0&&(h||a)){this.refresh_internal(!1,i,n-1);return}i&&i()}})})}getScrollElement(){return this.parentScroll instanceof Window?document.scrollingElement||document.documentElement||document.body:this.parentScroll||this.element.nativeElement}addScrollEventHandlers(){if(this.isAngularUniversalSSR)return;let t=this.getScrollElement();this.removeScrollEventHandlers(),this.zone.runOutsideAngular(()=>{this.parentScroll instanceof Window?(this.disposeScrollHandler=this.renderer.listen("window","scroll",this.onScroll),this.disposeResizeHandler=this.renderer.listen("window","resize",this.onScroll)):(this.disposeScrollHandler=this.renderer.listen(t,"scroll",this.onScroll),this._checkResizeInterval>0&&(this.checkScrollElementResizedTimer=setInterval(()=>{this.checkScrollElementResized()},this._checkResizeInterval)))})}removeScrollEventHandlers(){this.checkScrollElementResizedTimer&&clearInterval(this.checkScrollElementResizedTimer),this.disposeScrollHandler&&(this.disposeScrollHandler(),this.disposeScrollHandler=void 0),this.disposeResizeHandler&&(this.disposeResizeHandler(),this.disposeResizeHandler=void 0)}getElementsOffset(){if(this.isAngularUniversalSSR)return 0;let t=0;if(this.containerElementRef&&this.containerElementRef.nativeElement&&(t+=this.containerElementRef.nativeElement[this._offsetType]),this.parentScroll){let i=this.getScrollElement(),n=this.getElementSize(this.element.nativeElement),s=this.getElementSize(i);this.horizontal?t+=n.left-s.left:t+=n.top-s.top,this.parentScroll instanceof Window||(t+=i[this._scrollType])}return t}countItemsPerWrapGroup(){if(this.isAngularUniversalSSR)return Math.round(this.horizontal?this.ssrViewportHeight/this.ssrChildHeight:this.ssrViewportWidth/this.ssrChildWidth);let t=this.horizontal?"offsetLeft":"offsetTop",i=(this.containerElementRef&&this.containerElementRef.nativeElement||this.contentElementRef.nativeElement).children,n=i?i.length:0;if(n===0)return 1;let s=i[0][t],l=1;for(;l<n&&s===i[l][t];)++l;return l}getScrollStartPosition(){let t;return this.parentScroll instanceof Window&&(t=window[this._pageOffsetType]),t||this.getScrollElement()[this._scrollType]||0}minMeasuredChildWidth;minMeasuredChildHeight;wrapGroupDimensions;resetWrapGroupDimensions(){let t=this.wrapGroupDimensions;if(this.invalidateAllCachedMeasurements(),!this.enableUnequalChildrenSizes||!t||t.numberOfKnownWrapGroupChildSizes===0)return;let i=this.countItemsPerWrapGroup();for(let n=0;n<t.maxChildSizePerWrapGroup.length;++n){let s=t.maxChildSizePerWrapGroup[n];if(!s||!s.items||!s.items.length)continue;if(s.items.length!==i)return;let l=!1,o=i*n;for(let h=0;h<i;++h)if(!this.compareItems(s.items[h],this.items[o+h])){l=!0;break}l||(++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes,this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths+=s.childWidth||0,this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights+=s.childHeight||0,this.wrapGroupDimensions.maxChildSizePerWrapGroup[n]=s)}}calculateDimensions(){let t=this.getScrollElement(),i=25;this.calculatedScrollbarHeight=Math.max(Math.min(t.offsetHeight-t.clientHeight,i),this.calculatedScrollbarHeight),this.calculatedScrollbarWidth=Math.max(Math.min(t.offsetWidth-t.clientWidth,i),this.calculatedScrollbarWidth);let n=t.offsetWidth-(this.scrollbarWidth||this.calculatedScrollbarWidth||(this.horizontal?0:i)),s=t.offsetHeight-(this.scrollbarHeight||this.calculatedScrollbarHeight||(this.horizontal?i:0)),l=this.containerElementRef&&this.containerElementRef.nativeElement||this.contentElementRef.nativeElement,o=this.countItemsPerWrapGroup(),h,a,f;if(this.isAngularUniversalSSR){n=this.ssrViewportWidth,s=this.ssrViewportHeight,a=this.ssrChildWidth,f=this.ssrChildHeight;let v=Math.max(Math.ceil(n/a),1),g=Math.max(Math.ceil(s/f),1);h=this.horizontal?v:g}else if(this.enableUnequalChildrenSizes){let v=t[this._scrollType]-(this.previousViewPort?this.previousViewPort.padding:0),g=this.previousViewPort.startIndexWithBuffer||0,b=Math.ceil(g/o),P=0,W=0,O=0,E=0;h=0;for(let A=0;A<l.children.length;++A){++g;let ae=l.children[A],V=this.getElementSize(ae);if(P=Math.max(P,V.width),W=Math.max(W,V.height),g%o===0){let k=this.wrapGroupDimensions.maxChildSizePerWrapGroup[b];k&&(--this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes,this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths-=k.childWidth||0,this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights-=k.childHeight||0),++this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;let fe=this.items.slice(g-o,g);if(this.wrapGroupDimensions.maxChildSizePerWrapGroup[b]={childWidth:P,childHeight:W,items:fe},this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths+=P,this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights+=W,this.horizontal){let C=Math.min(P,Math.max(n-O,0));if(v>0){let z=Math.min(v,C);C-=z,v-=z}O+=C,C>0&&n>=O&&++h}else{let C=Math.min(W,Math.max(s-E,0));if(v>0){let z=Math.min(v,C);C-=z,v-=z}E+=C,C>0&&s>=E&&++h}++b,P=0,W=0}}let oe=this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths/this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes,he=this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights/this.wrapGroupDimensions.numberOfKnownWrapGroupChildSizes;a=this.childWidth||oe||n,f=this.childHeight||he||s,this.horizontal?n>O&&(h+=Math.ceil((n-O)/a)):s>E&&(h+=Math.ceil((s-E)/f))}else{if(l.children.length>0){(!this.childWidth||!this.childHeight)&&(!this.minMeasuredChildWidth&&n>0&&(this.minMeasuredChildWidth=n),!this.minMeasuredChildHeight&&s>0&&(this.minMeasuredChildHeight=s));let b=l.children[0],P=this.getElementSize(b);this.minMeasuredChildWidth=Math.min(this.minMeasuredChildWidth,P.width),this.minMeasuredChildHeight=Math.min(this.minMeasuredChildHeight,P.height)}a=this.childWidth||this.minMeasuredChildWidth||n,f=this.childHeight||this.minMeasuredChildHeight||s;let v=Math.max(Math.ceil(n/a),1),g=Math.max(Math.ceil(s/f),1);h=this.horizontal?v:g}let c=this.items.length,d=o*h,p=c/d,S=Math.ceil(c/o),u=0,_=this.horizontal?a:f;if(this.enableUnequalChildrenSizes){let v=0;for(let g=0;g<S;++g){let b=this.wrapGroupDimensions.maxChildSizePerWrapGroup[g]&&this.wrapGroupDimensions.maxChildSizePerWrapGroup[g][this._childScrollDim];b?u+=b:++v}u+=Math.round(v*_)}else u=S*_;this.headerElementRef&&(u+=this.headerElementRef.nativeElement.clientHeight);let m=this.horizontal?n:s,H=Math.max(u-m,0);return{childHeight:f,childWidth:a,itemCount:c,itemsPerPage:d,itemsPerWrapGroup:o,maxScrollPosition:H,pageCount_fractional:p,scrollLength:u,viewportLength:m,wrapGroupsPerPage:h}}cachedPageSize=0;previousScrollNumberElements=0;calculatePadding(t,i){if(i.itemCount===0)return 0;let n=i[this._childScrollDim],s=Math.floor(t/i.itemsPerWrapGroup)||0;if(!this.enableUnequalChildrenSizes)return n*s;let l=0,o=0;for(let h=0;h<s;++h){let a=this.wrapGroupDimensions.maxChildSizePerWrapGroup[h]&&this.wrapGroupDimensions.maxChildSizePerWrapGroup[h][this._childScrollDim];a?o+=a:++l}return o+=Math.round(l*n),o}calculatePageInfo(t,i){let n=0,s=1,l=0,o=0;if(this.enableUnequalChildrenSizes){let d=Math.ceil(i.itemCount/i.itemsPerWrapGroup),p=0,S=i[this._childScrollDim],u=0;for(;u<d;++u){let m=this.wrapGroupDimensions.maxChildSizePerWrapGroup[u]&&this.wrapGroupDimensions.maxChildSizePerWrapGroup[u][this._childScrollDim];if(m?p+=m:p+=S,t<p){n=u/d;break}}let _=u+1;for(;_<d;++_){let m=this.wrapGroupDimensions.maxChildSizePerWrapGroup[_]&&this.wrapGroupDimensions.maxChildSizePerWrapGroup[_][this._childScrollDim];if(m?p+=m:p+=S,t+i.viewportLength<p){s=_/d;break}}l=u,o=_}else{n=t/i.scrollLength;let d=Math.min(Math.max(n*i.pageCount_fractional,0),i.pageCount_fractional)*i.itemsPerPage,p=i.itemCount-i.itemsPerPage-1;l=Math.min(Math.floor(d),p),o=Math.ceil(d)+i.itemsPerPage-1}if(l-=l%i.itemsPerWrapGroup,this.stripedTable){let d=2*i.itemsPerWrapGroup;l%d!==0&&(l=Math.max(l-l%d,0))}let h=(o+1)%i.itemsPerWrapGroup;h>0&&(o+=i.itemsPerWrapGroup-h),isNaN(l)&&(l=0),isNaN(o)&&(o=0),l=Math.min(Math.max(l,0),i.itemCount-1),o=Math.min(Math.max(o,0),i.itemCount-1);let a=this.bufferAmount*i.itemsPerWrapGroup,f=Math.min(Math.max(l-a,0),i.itemCount-1),c=Math.min(Math.max(o+a,0),i.itemCount-1);return{startIndex:l,endIndex:o,startIndexWithBuffer:f,endIndexWithBuffer:c,scrollStartPosition:t,scrollEndPosition:t+i.viewportLength,maxScrollPosition:i.maxScrollPosition}}calculateViewport(){let t=this.calculateDimensions(),i=this.getElementsOffset(),n=this.getScrollStartPosition();n>t.scrollLength+i&&!(this.parentScroll instanceof Window)?n=t.scrollLength:n-=i,n=Math.max(0,n);let s=this.calculatePageInfo(n,t),l=this.calculatePadding(s.startIndexWithBuffer,t),o=Math.round(t.scrollLength);return{startIndex:s.startIndex,endIndex:s.endIndex,startIndexWithBuffer:s.startIndexWithBuffer,endIndexWithBuffer:s.endIndexWithBuffer,padding:Math.round(l),scrollLength:o,scrollbarLength:o+i,scrollStartPosition:s.scrollStartPosition,scrollEndPosition:s.scrollEndPosition,maxScrollPosition:s.maxScrollPosition}}static \u0275fac=function(i){return new(i||e)(y(I),y(Q),y($),y(ie),y(K),y("virtual-scroller-default-options",8))};static \u0275cmp=j({type:e,selectors:[["virtual-scroller"],["","virtualScroller",""]],contentQueries:function(i,n,s){if(i&1&&(B(s,ue,5,I),B(s,pe,5,I)),i&2){let l;R(l=G())&&(n.headerElementRef=l.first),R(l=G())&&(n.containerElementRef=l.first)}},viewQuery:function(i,n){if(i&1&&(L(me,7,I),L(ge,7,I)),i&2){let s;R(s=G())&&(n.contentElementRef=s.first),R(s=G())&&(n.invisiblePaddingElementRef=s.first)}},hostVars:8,hostBindings:function(i,n){i&2&&X("horizontal",n.horizontal)("vertical",!n.horizontal)("selfScroll",!n.parentScroll)("rtl",n.RTL)},inputs:{executeRefreshOutsideAngularZone:"executeRefreshOutsideAngularZone",enableUnequalChildrenSizes:"enableUnequalChildrenSizes",RTL:"RTL",useMarginInsteadOfTranslate:"useMarginInsteadOfTranslate",modifyOverflowStyleOfParentScroll:"modifyOverflowStyleOfParentScroll",stripedTable:"stripedTable",scrollbarWidth:"scrollbarWidth",scrollbarHeight:"scrollbarHeight",childWidth:"childWidth",childHeight:"childHeight",ssrChildWidth:"ssrChildWidth",ssrChildHeight:"ssrChildHeight",ssrViewportWidth:"ssrViewportWidth",ssrViewportHeight:"ssrViewportHeight",bufferAmount:"bufferAmount",scrollAnimationTime:"scrollAnimationTime",resizeBypassRefreshThreshold:"resizeBypassRefreshThreshold",scrollThrottlingTime:"scrollThrottlingTime",scrollDebounceTime:"scrollDebounceTime",checkResizeInterval:"checkResizeInterval",items:"items",compareItems:"compareItems",horizontal:"horizontal",parentScroll:"parentScroll"},outputs:{vsUpdate:"vsUpdate",vsChange:"vsChange",vsStart:"vsStart",vsEnd:"vsEnd"},exportAs:["virtualScroller"],features:[N],ngContentSelectors:_e,decls:5,vars:0,consts:[["invisiblePadding",""],["content",""],[1,"total-padding"],[1,"scrollable-content"]],template:function(i,n){i&1&&(ee(),J(0,"div",2,0),Z(2,"div",3,1),te(4),Y())},styles:["[_nghost-%COMP%]{position:relative;display:block;-webkit-overflow-scrolling:touch}.horizontal.selfScroll[_nghost-%COMP%]{overflow-y:visible;overflow-x:auto}.horizontal.selfScroll.rtl[_nghost-%COMP%]{transform:scaleX(-1)}.vertical.selfScroll[_nghost-%COMP%]{overflow-y:auto;overflow-x:visible}.scrollable-content[_ngcontent-%COMP%]{top:0;left:0;width:100%;height:100%;max-width:100vw;max-height:100vh;position:absolute}.scrollable-content[_ngcontent-%COMP%]    >*{box-sizing:border-box}.horizontal[_nghost-%COMP%]{white-space:nowrap}.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]{display:flex}.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]    >*{flex-shrink:0;flex-grow:0;white-space:initial}.horizontal.rtl[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]    >*{transform:scaleX(-1)}.total-padding[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;opacity:0}.horizontal[_nghost-%COMP%]   .total-padding[_ngcontent-%COMP%]{height:100%}"]})}return e})(),Ae=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=q({type:e});static \u0275inj=F({providers:[{provide:"virtual-scroller-default-options",useFactory:ve}],imports:[re]})}return e})();export{He as a,Ae as b};
//# sourceMappingURL=chunk-C2T36BOI.js.map
