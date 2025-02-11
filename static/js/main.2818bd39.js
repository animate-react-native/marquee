(()=>{"use strict";var e={5605:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var r=n(5004),i=n(9550),a=n(7842),o=n(7005),s=n(6709),u=n(2629);const l={code:"function indexTsx1(){const{direction,index,textMeasurement,spacing,anim}=this.__closure;if(direction==='vertical'){return{position:'absolute',top:(index-1)*(textMeasurement.value.height+spacing),transform:[{translateY:-(anim.value%(textMeasurement.value.height+spacing))}]};}return{position:'absolute',left:(index-1)*(textMeasurement.value.width+spacing),transform:[{translateX:-(anim.value%(textMeasurement.value.width+spacing))}]};}"},c=({index:e,children:t,anim:n,textMeasurement:r,spacing:i,direction:a})=>{const o=(0,s.useAnimatedStyle)(function(){const t=function(){return"vertical"===a?{position:"absolute",top:(e-1)*(r.value.height+i),transform:[{translateY:-n.value%(r.value.height+i)}]}:{position:"absolute",left:(e-1)*(r.value.width+i),transform:[{translateX:-n.value%(r.value.width+i)}]}};return t.__closure={direction:a,index:e,textMeasurement:r,spacing:i,anim:n},t.__workletHash=0xb191fdb311b,t.__initData=l,t}(),[e,i,r]);return(0,u.jsx)(s.default.View,{style:o,children:t})},d={code:"function indexTsx2(frameInfo){const{frameRateMs,reverse,anim,speed}=this.__closure;if(frameInfo.timeSincePreviousFrame===null)return;const frameDelta=frameRateMs?frameInfo.timeSincePreviousFrame/frameRateMs:1;if(reverse){anim.value-=speed*frameDelta;}else{anim.value+=speed*frameDelta;}}"},h={code:"function indexTsx3(){const{position,anim}=this.__closure;if(position){position.value=anim.value;}}"},f={code:"function indexTsx4(){const{textMeasurement,parentMeasurement,direction}=this.__closure;if(textMeasurement.value.width===0||parentMeasurement.value.width===0||textMeasurement.value.height===0||parentMeasurement.value.height===0){return 0;}return Math.round(direction==='horizontal'?parentMeasurement.value.width/textMeasurement.value.width:parentMeasurement.value.height/textMeasurement.value.height)+1;}"},m={code:"function indexTsx5(v){const{runOnJS,setCloneTimes}=this.__closure;if(v===0){return;}runOnJS(setCloneTimes)(v+2);}"},v={code:"function indexTsx6(){const{runOnJS,stop}=this.__closure;runOnJS(stop)();}"},p={code:"function indexTsx7(e){const{anim,direction}=this.__closure;anim.value+=-(direction==='horizontal'?e.changeX:e.changeY);}"},x={code:"function indexTsx8(e){const{anim,withDecay,direction,runOnJS,start}=this.__closure;anim.value=withDecay({velocity:-(direction==='horizontal'?e.velocityX:e.velocityY)},function(finished){if(finished){runOnJS(start)();}});}"},_={code:"function indexTsx9(finished){const{runOnJS,start}=this.__closure;if(finished){runOnJS(start)();}}"},y=r.memo(r.forwardRef((({speed:e=1,children:t,spacing:n=0,style:i,reverse:l,frameRate:y,direction:w="horizontal",position:j,withGesture:b=!0},S)=>{const O=(0,s.useSharedValue)({width:0,height:0,x:0,y:0}),M=(0,s.useSharedValue)({width:0,height:0,x:0,y:0}),[D,k]=r.useState(0),T=(0,s.useSharedValue)(0),J=y?1e3/y:null,z=(0,s.useFrameCallback)(function(){const t=function(t){if(null===t.timeSincePreviousFrame)return;const n=J?t.timeSincePreviousFrame/J:1;l?T.value-=e*n:T.value+=e*n};return t.__closure={frameRateMs:J,reverse:l,anim:T,speed:e},t.__workletHash=1153423947276,t.__initData=d,t}(),!0);function F(){z.setActive(!0)}function R(){z.setActive(!1)}(0,s.useDerivedValue)(function(){const e=function(){j&&(j.value=T.value)};return e.__closure={position:j,anim:T},e.__workletHash=4955626004599,e.__initData=h,e}()),(0,s.useAnimatedReaction)(function(){const e=function(){return 0===M.value.width||0===O.value.width||0===M.value.height||0===O.value.height?0:Math.round("horizontal"===w?O.value.width/M.value.width:O.value.height/M.value.height)+1};return e.__closure={textMeasurement:M,parentMeasurement:O,direction:w},e.__workletHash=0xf3b807d30f3,e.__initData=f,e}(),function(){const e=function(e){0!==e&&(0,s.runOnJS)(k)(e+2)};return e.__closure={runOnJS:s.runOnJS,setCloneTimes:k},e.__workletHash=0xe5b3cced146,e.__initData=m,e}(),[w]),r.useImperativeHandle(S,(()=>({start:F,stop:R,isActive:z.isActive})));const C=o.Gesture.Pan().enabled(b).onBegin(function(){const e=function(){(0,s.runOnJS)(R)()};return e.__closure={runOnJS:s.runOnJS,stop:R},e.__workletHash=7177779932126,e.__initData=v,e}()).onChange(function(){const e=function(e){T.value+=-("horizontal"===w?e.changeX:e.changeY)};return e.__closure={anim:T,direction:w},e.__workletHash=0xd44feee3222,e.__initData=p,e}()).onFinalize(function(){const e=function(e){T.value=(0,s.withDecay)({velocity:-("horizontal"===w?e.velocityX:e.velocityY)},function(){const e=function(e){e&&(0,s.runOnJS)(F)()};return e.__closure={runOnJS:s.runOnJS,start:F},e.__workletHash=8605512032953,e.__initData=_,e}())};return e.__closure={anim:T,withDecay:s.withDecay,direction:w,runOnJS:s.runOnJS,start:F},e.__workletHash=15243110650,e.__initData=x,e}());return(0,u.jsx)(s.default.View,{style:i,onLayout:e=>{O.value=e.nativeEvent.layout},pointerEvents:"box-none",children:(0,u.jsx)(o.GestureDetector,{gesture:C,children:(0,u.jsxs)(s.default.View,{style:g.row,pointerEvents:"box-none",children:[(0,u.jsx)(s.default.ScrollView,{horizontal:"horizontal"===w,style:g.hidden,pointerEvents:"box-none",children:(0,u.jsx)(a.default,{onLayout:e=>{M.value=e.nativeEvent.layout},children:t})}),D>0&&[...Array(D).keys()].map((e=>(0,u.jsx)(c,{index:e,anim:T,textMeasurement:M,spacing:n,direction:w,children:t},`clone-${e}`)))]})})},w)}))),g=i.default.create({hidden:{opacity:0,zIndex:-9999},row:{flexDirection:"row"}});var w=n(4270),j=n(3789);function b({children:e,size:t=100,spacing:n=0,primary:r=!0}){return(0,u.jsx)(a.default,{style:{width:t,height:t,borderRadius:16,marginRight:n,marginBottom:n,justifyContent:"center",alignItems:"center",backgroundColor:r?"#F0F464":"#1f1f1f"},children:e})}var S=n(3387);function O({children:e,primary:t=!0}){return(0,u.jsx)(S.default,{numberOfLines:1,style:{fontWeight:"900",fontSize:24,textTransform:"uppercase",color:t?"#F0F464":"#1f1f1f"},children:e})}const M=!0;function D(){const e=r.useRef(null);return(0,u.jsxs)(a.default,{style:k.container,children:[(0,u.jsx)(w.StatusBar,{hidden:!0}),(0,u.jsx)(y,{speed:1,children:(0,u.jsx)(O,{primary:M,children:"@animatereactnative/marquee"})}),(0,u.jsx)(y,{spacing:20,speed:1,children:(0,u.jsx)(O,{primary:M,children:"Powered by AnimateReactNative.com"})}),(0,u.jsx)(y,{spacing:20,speed:2,children:(0,u.jsx)(O,{primary:M,children:"Built with Reanimated"})}),(0,u.jsx)(y,{spacing:10,speed:.75,style:{marginTop:12},children:(0,u.jsx)(b,{size:50,primary:M})}),(0,u.jsx)(y,{ref:e,spacing:10,speed:4,style:{marginTop:12},reverse:!0,frameRate:30,children:(0,u.jsx)(a.default,{style:{flexDirection:"row"},children:[...Array(5).keys()].map((e=>(0,u.jsx)(b,{spacing:4===e?0:10,size:120,primary:M,children:(0,u.jsx)(O,{primary:!M,children:e})},`box-${e}`)))})}),(0,u.jsx)(a.default,{style:{flexDirection:"row",height:300,padding:10,overflow:"hidden"},children:[...Array(3).keys()].map((e=>(0,u.jsx)(y,{spacing:10,speed:1,style:{marginTop:12},reverse:1===e,frameRate:60,direction:"vertical",children:(0,u.jsx)(a.default,{children:[...Array(5).keys()].map((e=>(0,u.jsx)(b,{spacing:4===e?0:10,size:120,primary:M,children:(0,u.jsx)(O,{primary:!M,children:e})},`box-${e}`)))})},`marquee-${e}`)))}),(0,u.jsxs)(a.default,{style:{flexDirection:"row",gap:4,justifyContent:"center"},children:[(0,u.jsx)(j.default,{title:"Start",onPress:()=>{e.current?.start()}}),(0,u.jsx)(j.default,{title:"Stop",onPress:()=>{e.current?.stop()}})]})]})}const k=i.default.create({container:{flex:1,justifyContent:"center",backgroundColor:M?"#1F1F1F":"#F0F464"},box:{width:60,height:60,marginVertical:20}}),T=(0,o.gestureHandlerRootHOC)((function(){return(0,u.jsx)(D,{})}))}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,i,a)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,i,a]=e[c],s=!0,u=0;u<r.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(s=!1,a<o&&(o=a));if(s){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,i,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var i,a,[o,s,u]=r,l=0;if(o.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(u)var c=u(n)}for(t&&t(r);l<o.length;l++)a=o[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[82],(()=>n(2311)));r=n.O(r)})();
//# sourceMappingURL=main.2818bd39.js.map