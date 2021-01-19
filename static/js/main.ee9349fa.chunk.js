(this["webpackJsonpvirtual-background"]=this["webpackJsonpvirtual-background"]||[]).push([[0],{287:function(e,t,n){},288:function(e,t,n){},294:function(e,t){},295:function(e,t){},303:function(e,t){},306:function(e,t){},307:function(e,t){},309:function(e,t,n){"use strict";n.r(t);var r=n(41),o=n(334),c=n(21),a=n.n(c),i=n(189),u=n.n(i),s=(n(333),n(332)),l=n(335);n(336),n(330),n(331);var d=n(4),f=n.n(d),b=n(11),g=n(6),p=n(252),j=n.n(p),O=n(253),h=n.n(O),v=n(254),m=n.n(v);var x=function(){var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){function t(){return(t=Object(b.a)(f.a.mark((function t(){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={video:!0},t.next=4,navigator.mediaDevices.getUserMedia(n);case 4:r=t.sent,e.current.srcObject=r,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error opening video camera.",t.t0),alert("Error opening video camera. ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),e};var y=function(){var e=Object(c.useState)(0),t=Object(g.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([]),a=Object(g.a)(o,2),i=a[0],u=a[1],s=Object(c.useRef)(0),l=Object(c.useRef)(0),d=Object(c.useRef)([]),f=Object(c.useRef)(0),b=Object(c.useRef)(0);return{fps:n,durations:i,beginFrame:Object(c.useCallback)((function(){l.current=Date.now()}),[]),addFrameEvent:Object(c.useCallback)((function(){var e=Date.now();d.current[f.current]=e-l.current,l.current=e,f.current++}),[]),endFrame:Object(c.useCallback)((function(){var e=Date.now();d.current[f.current]=e-l.current,b.current++,e>=s.current+1e3&&(r(1e3*b.current/(e-s.current)),u(d.current),s.current=e,b.current=0),f.current=0}),[])}};var w=function(e){var t=Object(c.useState)(0),n=Object(g.a)(t,2),r=n[0],o=n[1],a=Object(c.useState)(0),i=Object(g.a)(a,2),u=i[0],s=i[1];return Object(c.useEffect)((function(){if(e.current){var t=e.current;return console.log("Listening for video resize"),t.addEventListener("resize",n),function(){t.removeEventListener("resize",n)}}function n(){console.log("Video was resized"),o(t.videoWidth),s(t.videoHeight)}}),[e]),{videoWidth:r,videoHeight:u}};n(287);var k=function(e){return Object(r.jsx)("button",{className:"VideoControl ".concat(e.isActivated?"VideoControl-activated":""),onClick:e.onClick,children:e.children})};n(288);var C=function(e){var t=Object(c.useRef)(null),n=Object(c.useRef)(null),o=Object(c.useRef)(null),a=x(),i=w(a),u=i.videoWidth,s=i.videoHeight,l=Object(c.useState)(!1),d=Object(g.a)(l,2),p=d[0],O=d[1],v=Object(c.useState)("none"),C=Object(g.a)(v,2),I=C[0],_=C[1],F=y(),P=F.fps,E=Object(g.a)(F.durations,2),L=E[0],M=E[1],N=F.beginFrame,A=F.addFrameEvent,D=F.endFrame;return Object(c.useEffect)((function(){if(p){var r=t.current.getContext("2d"),c=n.current.getContext("2d"),i=new ImageData(u,s),l=u*s,d=o.current.naturalWidth,g=o.current.naturalHeight,j=Math.max(1,u/d,s/g);d*=j,g*=j;var O,h=!0;return v(),console.log("Animation started:",I),function(){h=!1,cancelAnimationFrame(O),console.log("Animation stopped:",I)}}function v(){return m.apply(this,arguments)}function m(){return(m=Object(b.a)(f.a.mark((function t(){var u,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h){t.next=2;break}return t.abrupt("return");case 2:if(N(),"none"===I){t.next=9;break}return t.next=6,e.bodyPixNeuralNetwork.segmentPerson(a.current);case 6:for(u=t.sent,s=0;s<l;s++)i.data[4*s+3]=u.data[s]?255:0;c.putImageData(i,0,0);case 9:A(),"blur"===I?(r.globalCompositeOperation="copy",r.filter="blur(8px)",r.drawImage(n.current,0,0),r.globalCompositeOperation="source-out",r.drawImage(a.current,0,0),r.globalCompositeOperation="destination-over",r.filter="none"):"image"===I?(r.globalCompositeOperation="copy",r.filter="blur(2px)",r.drawImage(n.current,0,0),r.globalCompositeOperation="source-out",r.filter="none",r.drawImage(o.current,0,0,d,g),r.globalCompositeOperation="destination-over"):r.globalCompositeOperation="source-over",r.drawImage(a.current,0,0),D(),O=requestAnimationFrame(v);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}),[e.bodyPixNeuralNetwork,a,I,u,s,p,N,A,D]),Object(r.jsx)("div",{className:"VideoPlayer",children:Object(r.jsxs)("div",{className:"VideoPlayer-root",children:[Object(r.jsxs)("div",{className:"VideoPlayer-stats",children:[Object(r.jsxs)("span",{children:[Math.round(P)," fps"]})," (",Object(r.jsxs)("span",{children:["inference ",L,"ms"]}),","," ",Object(r.jsxs)("span",{children:["post-processing ",M,"ms"]}),")"]}),Object(r.jsx)("video",{ref:a,width:u,height:s,autoPlay:!0,playsInline:!0,controls:!1,hidden:!0,onLoadedData:function(){return O(!0)},onAbort:function(){return O(!1)}}),Object(r.jsx)("img",{ref:o,src:"".concat("/virtual-background","/backgrounds/trees-4830285_640.jpg"),alt:"",hidden:!0}),Object(r.jsx)("canvas",{ref:n,width:u,height:s,hidden:!0}),Object(r.jsx)("canvas",{ref:t,className:"VideoPlayer-video",width:u,height:s}),Object(r.jsxs)("div",{className:"VideoPlayer-controls",children:[Object(r.jsx)(k,{isActivated:"none"===I,onClick:function(){return _("none")},children:Object(r.jsx)(j.a,{})}),Object(r.jsx)(k,{isActivated:"blur"===I,onClick:function(){return _("blur")},children:Object(r.jsx)(h.a,{})}),Object(r.jsx)(k,{isActivated:"image"===I,onClick:function(){return _("image")},children:Object(r.jsx)(m.a,{})})]})]})})},I=n(255),_=n(275);var F=function(){var e=Object(c.useState)(null),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading TensorFlow.js and BodyPix segmentation model"),e.next=3,_.a();case 3:return e.t0=r,e.next=6,I.a();case 6:e.t1=e.sent,(0,e.t0)(e.t1),console.log("TensorFlow.js and BodyPix loaded");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n};var P=function(){Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(f.a.mark((function e(){var t,n,r,o,c,a,i,u,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,createTFLiteModule();case 2:return t=e.sent,e.next=5,fetch("".concat("/virtual-background","/models/segm_lite_v681.tflite"));case 5:return n=e.sent,e.next=8,n.arrayBuffer();case 8:return r=e.sent,console.log("Lite model buffer size:",r.byteLength),e.next=12,fetch("".concat("/virtual-background","/models/segm_full_v679.tflite"));case 12:return o=e.sent,e.next=15,o.arrayBuffer();case 15:c=e.sent,console.log("Full model buffer size:",c.byteLength),a=t._getModelBufferMemoryOffset(),console.log("Model buffer memory offset:",a),console.log("Loading light model buffer..."),t.HEAPU8.set(new Uint8Array(r),a),console.log("_loadModel result:",t._loadModel(r.byteLength)),console.log("Input memory offset:",t._getInputMemoryOffset()),console.log("Input height:",t._getInputHeight()),console.log("Input width:",t._getInputWidth()),console.log("Input channels:",t._getInputChannelCount()),console.log("Output memory offset:",t._getOutputMemoryOffset()),console.log("Output height:",t._getOutputHeight()),console.log("Output width:",t._getOutputWidth()),console.log("Output channels:",t._getOutputChannelCount()),i=Date.now(),u=t._runInference(),s=Date.now()-i,console.log("_runInference result: ".concat(u," (").concat(s,"ms)"));case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[])},E=Object(s.a)((function(e){return Object(l.a)({root:{padding:e.spacing(3)}})}));var L=function(){var e=F();return P(),E(),e&&Object(r.jsx)(C,{bodyPixNeuralNetwork:e})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,338)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),c(e),a(e)}))};u.a.render(Object(r.jsxs)(a.a.StrictMode,{children:[Object(r.jsx)(o.a,{}),Object(r.jsx)(L,{})]}),document.getElementById("root")),M()}},[[309,1,2]]]);
//# sourceMappingURL=main.ee9349fa.chunk.js.map