"use strict";var e=require("react"),t=require("@mui/material/Button"),n=require("@mui/material/Box"),a=require("@mui/material/Grid"),r=function(t){var n=t.msTime,a=function(e){return e<=10?"0".concat(e):"".concat(e)},r=Math.floor(n/1e3),i=Math.floor(r/60),o=Math.floor(i/60);return r%=60,i%=60,e.createElement("h1",null,"".concat(a(o),":").concat(a(i),":").concat(a(r)))},i=function(i){var o=i.name,l=i.elapsedTime,u=i.toggleBtnVerbiage,c=i.togglePause,s=i.resetSession;return e.createElement(e.Fragment,null,e.createElement(n,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"},e.createElement(a,{container:!0,spacing:2},e.createElement(a,{item:!0,xs:12,sx:{pt:0}},e.createElement("h2",null,o)),e.createElement(a,{item:!0,xs:12},e.createElement(r,{msTime:l})),e.createElement(a,{item:!0,xs:12},e.createElement(t,{variant:"contained",onClick:c},u),e.createElement(t,{variant:"text",onClick:s},"Reset")))))},o=function(t){var n=t.duration,a=t.name,r=t.onFinish,o=t.onPause,l=t.onReset,u=e.useState(n),c=u[0],s=u[1],m=e.useState(!1),g=m[0],f=m[1],E=new Audio("https://raw.githubusercontent.com/vcamp314/time-management-tools/gh-pages/mixkit-scanning-sci-fi-alarm-905.wav"),h=0;e.useEffect((function(){return g&&(h=window.setInterval((function(){s((function(e){return e-1e3}))}),1e3)),function(){clearInterval(h)}}),[g]),e.useEffect((function(){var e;c<=0&&(console.log("finish timer"),null==r||r(),f(!1),s(0),null===(e=E.play())||void 0===e||e.then((function(){}),(function(){})))}),[c]);return e.createElement(e.Fragment,null,e.createElement(i,{name:a,elapsedTime:c,toggleBtnVerbiage:g?"Pause":"Start",togglePause:function(){null==o||o(c),f(!g)},resetSession:function(){null==l||l(c),f(!1),clearInterval(h),s(n)}}))},l=function(t){var n=t.stageName,a=t.duration,r=t.onFinish,i=t.onPause,l=t.onReset;return e.createElement(e.Fragment,null,e.createElement(o,{duration:a,name:n,onFinish:r,onPause:i,onReset:l}))};exports.TimeDisplay=r,exports.Timer=o,exports.TimerWidget=function(t){var n=t.stages,a=t.onStartNextStage,r=t.onFinish;t.onPause,t.onReset;var i=e.useState(0),o=i[0],u=i[1];return e.createElement(e.Fragment,null,e.createElement(l,{stageName:n[o].name,duration:n[o].duration,onFinish:function(){if(o>=n.length-1)null==r||r();else{var e=o+1;null==a||a(n[e].id),u(e)}},key:o}))};
//# sourceMappingURL=index.js.map
