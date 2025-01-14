"use strict";var e=require("react"),t=require("@mui/material/Button"),n=require("@mui/material/Box"),r=require("@mui/material/Grid"),a=require("@mui/material"),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var o=function(t){var n=t.msTime,r=function(e){return e<=10?"0".concat(e):"".concat(e)},a=Math.floor(n/1e3),i=Math.floor(a/60),o=Math.floor(i/60);return a%=60,i%=60,e.createElement("h1",null,"".concat(r(o),":").concat(r(i),":").concat(r(a)))},l=function(a){var i=a.name,l=a.elapsedTime,u=a.toggleBtnVerbiage,c=a.togglePause,s=a.resetSession;return e.createElement(n,{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},e.createElement(r,{container:!0,spacing:2,sx:{textAlign:"center"}},e.createElement(r,{item:!0,xs:12},e.createElement("h2",null,i)),e.createElement(r,{item:!0,xs:12},e.createElement(o,{msTime:l})),e.createElement(r,{item:!0,xs:12},e.createElement(n,{sx:{display:"flex",gap:2,justifyContent:"center"}},e.createElement(t,{variant:"contained",onClick:c},u),e.createElement(t,{variant:"text",onClick:s},"Reset")))))},u=function(t){var n=t.duration,r=t.name,o=t.onFinish,u=t.onPause,c=t.onReset,s=t.containerStyle,m=void 0===s?{}:s,f=e.useState(n),g=f[0],p=f[1],d=e.useState(!1),h=d[0],v=d[1],E=new Audio("https://raw.githubusercontent.com/vcamp314/time-management-tools/gh-pages/mixkit-scanning-sci-fi-alarm-905.wav"),x=0;e.useEffect((function(){return h&&(x=window.setInterval((function(){p((function(e){return e-1e3}))}),1e3)),function(){clearInterval(x)}}),[h]),e.useEffect((function(){var e;g<=0&&(console.log("finish timer"),null==o||o(),v(!1),p(0),null===(e=E.play())||void 0===e||e.then((function(){}),(function(){})))}),[g]);return e.createElement(a.Box,{sx:i({width:"100%"},m)},e.createElement(l,{name:r,elapsedTime:g,toggleBtnVerbiage:h?"Pause":"Start",togglePause:function(){null==u||u(g),v(!h)},resetSession:function(){null==c||c(g),v(!1),clearInterval(x),p(n)}}))},c=function(t){var n=t.stageName,r=t.duration,a=t.onFinish,i=t.onPause,o=t.onReset;return e.createElement(e.Fragment,null,e.createElement(u,{duration:r,name:n,onFinish:a,onPause:i,onReset:o}))};exports.TimeDisplay=o,exports.Timer=u,exports.TimerWidget=function(t){var n=t.stages,r=t.onStartNextStage,a=t.onFinish;t.onPause,t.onReset;var i=e.useState(0),o=i[0],l=i[1];return e.createElement(e.Fragment,null,e.createElement(c,{stageName:n[o].name,duration:n[o].duration,onFinish:function(){if(o>=n.length-1)null==a||a();else{var e=o+1;null==r||r(n[e].id),l(e)}},key:o}))};
//# sourceMappingURL=index.js.map