(()=>{"use strict";var e={5605:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var r=n(5004),i=n(9550),a=n(7842),s=n(1957),o=n(6415),l=n(2227),u=n(9203),c=n(3197),d=n(6152),h=n(5880),m=n(2629);const f={code:"function anonymous(){const{direction,index,textMeasurement,spacing,anim}=this.__closure;if(direction==='vertical'){return{position:'absolute',top:(index-1)*(textMeasurement.value.height+spacing),transform:[{translateY:-(anim.value%(textMeasurement.value.height+spacing))}]};}return{position:'absolute',left:(index-1)*(textMeasurement.value.width+spacing),transform:[{translateX:-(anim.value%(textMeasurement.value.width+spacing))}]};}"},v=({index:e,children:t,anim:n,textMeasurement:r,spacing:i,direction:a})=>{const l=(0,s.useAnimatedStyle)(function(){const t=function(){return"vertical"===a?{position:"absolute",top:(e-1)*(r.value.height+i),transform:[{translateY:-n.value%(r.value.height+i)}]}:{position:"absolute",left:(e-1)*(r.value.width+i),transform:[{translateX:-n.value%(r.value.width+i)}]}};return t.__closure={direction:a,index:e,textMeasurement:r,spacing:i,anim:n},t.__workletHash=2180383734328,t.__initData=f,t}(),[e,i,r]);return(0,m.jsx)(o.AnimatedView,{style:l,children:t})},p={code:"function anonymous(frameInfo){const{frameRateMs,reverse,anim,speed}=this.__closure;if(frameInfo.timeSincePreviousFrame===null)return;const frameDelta=frameRateMs?frameInfo.timeSincePreviousFrame/frameRateMs:1;if(reverse){anim.value-=speed*frameDelta;}else{anim.value+=speed*frameDelta;}}"},x={code:"function anonymous(){const{textMeasurement,parentMeasurement,direction}=this.__closure;if(textMeasurement.value.width===0||parentMeasurement.value.width===0||textMeasurement.value.height===0||parentMeasurement.value.height===0){return 0;}return Math.round(direction==='horizontal'?parentMeasurement.value.width/textMeasurement.value.width:parentMeasurement.value.height/textMeasurement.value.height)+1;}"},y={code:"function anonymous(v){const{runOnJS,setCloneTimes}=this.__closure;if(v===0){return;}runOnJS(setCloneTimes)(v+2);}"},g=r.memo((({speed:e=1,children:t,spacing:n=0,style:i,reverse:s,frameRate:f,direction:g="horizontal"})=>{const b=(0,l.useSharedValue)({width:0,height:0,x:0,y:0}),j=(0,l.useSharedValue)({width:0,height:0,x:0,y:0}),[_,M]=r.useState(0),S=(0,l.useSharedValue)(0),O=f?1e3/f:null;return(0,u.useFrameCallback)(function(){const t=function(t){if(null===t.timeSincePreviousFrame)return;const n=O?t.timeSincePreviousFrame/O:1;s?S.value-=e*n:S.value+=e*n};return t.__closure={frameRateMs:O,reverse:s,anim:S,speed:e},t.__workletHash=5803582166988,t.__initData=p,t}(),!0),(0,c.useAnimatedReaction)(function(){const e=function(){return 0===j.value.width||0===b.value.width||0===j.value.height||0===b.value.height?0:Math.round("horizontal"===g?b.value.width/j.value.width:b.value.height/j.value.height)+1};return e.__closure={textMeasurement:j,parentMeasurement:b,direction:g},e.__workletHash=0xeaf38bb8e75,e.__initData=x,e}(),function(){const e=function(e){0!==e&&(0,d.runOnJS)(M)(e+2)};return e.__closure={runOnJS:d.runOnJS,setCloneTimes:M},e.__workletHash=0xe7fe1f0a861,e.__initData=y,e}(),[g]),(0,m.jsx)(o.AnimatedView,{style:i,onLayout:e=>{b.value=e.nativeEvent.layout},pointerEvents:"box-none",children:(0,m.jsxs)(o.AnimatedView,{style:w.row,pointerEvents:"box-none",children:[(0,m.jsx)(h.AnimatedScrollView,{horizontal:"horizontal"===g,style:w.hidden,pointerEvents:"box-none",children:(0,m.jsx)(a.default,{onLayout:e=>{j.value=e.nativeEvent.layout},children:t})}),_>0&&[...Array(_).keys()].map((e=>(0,m.jsx)(v,{index:e,anim:S,textMeasurement:j,spacing:n,direction:g,children:t},`clone-${e}`)))]})},g)})),w=i.default.create({hidden:{opacity:0,zIndex:-9999},row:{flexDirection:"row",overflow:"hidden"}});function b({children:e,size:t=100,spacing:n=0,primary:r=!0}){return(0,m.jsx)(a.default,{style:{width:t,height:t,borderRadius:16,marginRight:n,marginBottom:n,justifyContent:"center",alignItems:"center",backgroundColor:r?"#F0F464":"#1f1f1f"},children:e})}var j=n(3387);function _({children:e,primary:t=!0}){return(0,m.jsx)(j.default,{numberOfLines:1,style:{fontWeight:"900",fontSize:24,textTransform:"uppercase",color:t?"#F0F464":"#1f1f1f"},children:e})}var M=n(7292);const S=!0;function O(){return(0,m.jsxs)(a.default,{style:k.container,children:[(0,m.jsx)(M.StatusBar,{hidden:!0}),(0,m.jsx)(g,{speed:1,children:(0,m.jsx)(_,{primary:S,children:"@animatereactnative/marquee"})}),(0,m.jsx)(g,{spacing:20,speed:1,children:(0,m.jsx)(_,{primary:S,children:"Powered by AnimateReactNative.com"})}),(0,m.jsx)(g,{spacing:20,speed:2,children:(0,m.jsx)(_,{primary:S,children:"Built with Reanimated"})}),(0,m.jsx)(g,{spacing:10,speed:.75,style:{marginTop:12},children:(0,m.jsx)(b,{size:50,primary:S})}),(0,m.jsx)(g,{spacing:10,speed:4,style:{marginTop:12},reverse:!0,frameRate:30,children:(0,m.jsx)(a.default,{style:{flexDirection:"row"},children:[...Array(5).keys()].map((e=>(0,m.jsx)(b,{spacing:4===e?0:10,size:120,primary:S,children:(0,m.jsx)(_,{primary:!S,children:e})},`box-${e}`)))})}),(0,m.jsx)(a.default,{style:{flexDirection:"row",height:300,padding:10},children:[...Array(3).keys()].map((e=>(0,m.jsx)(g,{spacing:10,speed:1,style:{marginTop:12},reverse:1===e,frameRate:60,direction:"vertical",children:(0,m.jsx)(a.default,{children:[...Array(5).keys()].map((e=>(0,m.jsx)(b,{spacing:4===e?0:10,size:120,primary:S,children:(0,m.jsx)(_,{primary:!S,children:e})},`box-${e}`)))})},`marquee-${e}`)))})]})}const k=i.default.create({container:{flex:1,justifyContent:"center",backgroundColor:S?"#1F1F1F":"#F0F464"},box:{width:60,height:60,marginVertical:20}})}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,i,a)=>{if(!r){var s=1/0;for(c=0;c<e.length;c++){for(var[r,i,a]=e[c],o=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(o=!1,a<s&&(s=a));if(o){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,i,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var i,a,[s,o,l]=r,u=0;if(s.some((t=>0!==e[t]))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(l)var c=l(n)}for(t&&t(r);u<s.length;u++)a=s[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[891],(()=>n(6953)));r=n.O(r)})();
//# sourceMappingURL=main.a8ff76bf.js.map