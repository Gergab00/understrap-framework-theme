!function(){"use strict";var e,r={219:function(){var e=window.wp.element,r=window.wp.blocks,n=window.wp.blockEditor,t=window.wp.i18n,o=window.wp.components,l=JSON.parse('{"u2":"understrap-framework-theme/example-block"}');(0,r.registerBlockType)(l.u2,{edit:function(r){let{attributes:l,setAttributes:i}=r;return(0,e.createElement)("div",(0,n.useBlockProps)(),(0,e.createElement)(o.Panel,{header:"Example Block"},(0,e.createElement)(o.PanelBody,{title:"My Block Settings",opened:!0},(0,e.createElement)(o.PanelRow,null,(0,t.__)("Example Block – hello from the editor!","understrap-framework-theme")))))},save:r=>(0,e.createElement)(n.InnerBlocks.Content,null)})}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return r[e](l,l.exports,t),l.exports}t.m=r,e=[],t.O=function(r,n,o,l){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],l=e[s][2];for(var a=!0,u=0;u<n.length;u++)(!1&l||i>=l)&&Object.keys(t.O).every((function(e){return t.O[e](n[u])}))?n.splice(u--,1):(a=!1,l<i&&(i=l));if(a){e.splice(s--,1);var c=o();void 0!==c&&(r=c)}}return r}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[n,o,l]},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},function(){var e={289:0,590:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var o,l,i=n[0],a=n[1],u=n[2],c=0;if(i.some((function(r){return 0!==e[r]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(u)var s=u(t)}for(r&&r(n);c<i.length;c++)l=i[c],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(s)},n=self.webpackChunkunderstrap_framework_theme=self.webpackChunkunderstrap_framework_theme||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var o=t.O(void 0,[590],(function(){return t(219)}));o=t.O(o)}();