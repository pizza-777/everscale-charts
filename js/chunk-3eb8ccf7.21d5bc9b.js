(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3eb8ccf7"],{"0764":function(e,a,n){"use strict";n.r(a);var t,c,r=n("1da1"),o=(n("96cf"),n("1fca")),f=n("c98e"),d={extends:o["d"],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"All assets",fontSize:25,fontStyle:"normal"}}}},mounted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(f["stakesGiversUsers"])();case 2:n=a.sent,e.renderChart({labels:n.labels,datasets:[{label:"All assets in EverScale: Stakes, Givers, Burned Free circulation",backgroundColor:["#e25822","green","blue","pink","black"],data:n.assets}]},e.options);case 4:case"end":return a.stop()}}),a)})))()}},s=d,u=n("2877"),i=Object(u["a"])(s,t,c,!1,null,null,null);a["default"]=i.exports},"07ac":function(e,a,n){var t=n("23e7"),c=n("6f53").values;t({target:"Object",stat:!0},{values:function(e){return c(e)}})},"159b":function(e,a,n){var t=n("da84"),c=n("fdbc"),r=n("785a"),o=n("17c2"),f=n("9112"),d=function(e){if(e&&e.forEach!==o)try{f(e,"forEach",o)}catch(a){e.forEach=o}};for(var s in c)c[s]&&d(t[s]&&t[s].prototype);d(r)},"17c2":function(e,a,n){"use strict";var t=n("b727").forEach,c=n("a640"),r=c("forEach");e.exports=r?[].forEach:function(e){return t(this,e,arguments.length>1?arguments[1]:void 0)}},"6f53":function(e,a,n){var t=n("83ab"),c=n("e330"),r=n("df75"),o=n("fc6a"),f=n("d1e7").f,d=c(f),s=c([].push),u=function(e){return function(a){var n,c=o(a),f=r(c),u=f.length,i=0,b=[];while(u>i)n=f[i++],t&&!d(c,n)||s(b,e?[n,c[n]]:c[n]);return b}};e.exports={entries:u(!0),values:u(!1)}},a640:function(e,a,n){"use strict";var t=n("d039");e.exports=function(e,a){var n=[][e];return!!n&&t((function(){n.call(null,a||function(){return 1},1)}))}},b64b:function(e,a,n){var t=n("23e7"),c=n("7b0b"),r=n("df75"),o=n("d039"),f=o((function(){r(1)}));t({target:"Object",stat:!0,forced:f},{keys:function(e){return r(c(e))}})},bbac:function(e,a,n){"use strict";function t(e,a,n){const t=n||".";let r;{let a;switch(typeof e){case"string":if(e.length<("-"===e[0]?5:4))return e;r=e,a=Number("."!==t?r.replace(t,"."):r);break;case"number":r=String(e),a=e,"."===t||Number.isInteger(e)||(r=r.replace(".",t));break;default:return e}if(-1e3<a&&a<1e3||isNaN(a)||!isFinite(a))return r}{const e=r.lastIndexOf(t);let n;e>-1&&(n=r.slice(e),r=r.slice(0,e));const o=c(r,a||",");return n&&o.push(n),o.join("")}}function c(e,a){let n=(e.length-1)%3+1;1===n&&"-"===e[0]&&(n=4);const t=[e.slice(0,n)];for(;n<e.length;n+=3)t.push(a,e.substr(n,3));return t}function r(e,a){return function(n){return t(n,e,a)}}e.exports=t,e.exports.bindWith=r},c98e:function(e,a,n){var t=n("c973").default;n("96cf"),n("99af");var c=n("0dff"),r=c.AggregationFn,o=c.client,f=n("bbac"),d=n("f62d"),s=function(){var e=t(regeneratorRuntime.mark((function e(){var a,n,t,c,s,u,i,b,l,h,p,g,v,E,x,m,y,M;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={type:"QueryCollection",collection:"accounts",filter:{code_hash:{eq:"d80dd077e56dd76af65b163b6da94cca9d2c8e62740d09d98f9a4459ac069958"}},result:"balance(format:DEC)"},n={type:"AggregateCollection",collection:"accounts",fields:[{field:"balance",fn:r.SUM}],filter:{code_hash:{in:[d.depoolCodeHash,d.electorCodeHash]}}},t={type:"AggregateCollection",collection:"accounts",fields:[{field:"balance",fn:r.SUM}],filter:{id:{in:["-1:7777777777777777777777777777777777777777777777777777777777777777","-1:8888888888888888888888888888888888888888888888888888888888888888","-1:9999999999999999999999999999999999999999999999999999999999999999","0:fee1a3bd261619f036d83aafd8b34f47d794bbb58185379877291003f3a3526d"]}}},c={type:"AggregateCollection",collection:"accounts",fields:[{field:"balance",fn:r.SUM}]},e.next=6,o.net.query({query:'        \n            {aggregateAccounts(\n            filter:{      \n              acc_type: {\n                ne: 1\n              }              \n            }\n            fields:[\n              {field: "balance", fn: SUM}\n            ]\n          )}\n        '});case 6:return s=e.sent.result.data.aggregateAccounts[0],u=[a,n,t,c],e.prev=8,e.next=11,o.net.batch_query({operations:u});case 11:return i=e.sent,b=Math.round(i.results[0][0].balance/d.oneTon),l=Math.round(i.results[1][0]/d.oneTon),h=Math.round(i.results[2][0]/d.oneTon),p=Math.round(i.results[3][0]/d.oneTon),g=Math.round(s/d.oneTon),v=p-h-l-b-g,E=Math.round(b/p*100),x=Math.round(l/p*100),m=Math.round(h/p*100),y=Math.round(v/p*100),M=Math.round(g/p*100),e.abrupt("return",{assets:[b,l,h,v,g],labels:["BURNING: ".concat(f(b)," EVERs(").concat(E,")%"),"STAKES: ".concat(f(l)," EVERs(").concat(x,")%"),"GIVERS: ".concat(f(h)," EVERs(").concat(m,")%"),"FREE CIRCULATION: ".concat(f(v)," EVERs(").concat(y,")%"),"COLD EVERS: ".concat(f(g)," EVERs(").concat(M,")%")]});case 26:e.prev=26,e.t0=e["catch"](8),console.log(e.t0);case 29:case"end":return e.stop()}}),e,null,[[8,26]])})));return function(){return e.apply(this,arguments)}}();e.exports={stakesGiversUsers:s}},f62d:function(e,a,n){n("d3b7"),n("07ac"),n("b64b"),n("159b");var t=1e9,c=86400,r=7*c,o=Math.round(30.5*c),f="207dc560c5956de1a2c1479356f8f3ee70a59767db2bf4788b1d61ad42cdad82",d="80d6c47c4a25543c9b397b71716f3fae1e2c5d247174c52e2c19bd896442b105",s="14e20e304f53e6da152eb95fffc993dbd28245a775d847eed043f7c78a503885",u="e48892fa8be43954a2923d668ff9e8d68931c82d8dc80be1c8848b8ae8fe366a",i=[{"Bitcoin-hitbtc":["0:363ab410d2972bdfac97506a021bb616c9f93b4fc2d2dfa23706e26bd7334336","0:0d46b0b1f76581b893d7002a58cd72f7844aa05eca318d0f353a623da6c3615d"]},{"bitrue.com":"0:dea68d5ba2998b48ffd98e8bc3c8b1716aaa2a41fe3ca6c40a1dd9a3d9334e88"},{"cex.io":"0:ff72a20b00b647eb536bf2f9e7f5f07bc20ff5d6a93342e81e39d6db7e20fe59"},{"Coin-Galaxy.com":"0:0dc78eee043a0c1d301552ac0b3c131a22c7212189a646b10a0059aef3515e9b"},{"coineal.com":["0:0dd48e220aef64f79fd563e150be51d12515623b6344da03c97e70ef6801a139","0:a0c77f59b513c41f9d93a2e2144625cab74983c6da4afa0ddcbdee0e36c3efff"]},{"coins.black":"0:e9c6d46c7f8fa0f13221dd221db51d6aac7e51a2b75d65dad81dc1ce2fbd285e"},{"digifinex.asia":"0:a7cba00b37563e504d879338f09594a4be88f240b016843c1ad03a11538d0a9b"},{"gate.io":"0:3addd84bf73267312a477049fd9b8db761bf39c585c150f8e6f9451347af2b6c"},{"kuna.io":"0:af22c44fc447f8497219969d6faed49894584f0de66a208956aec20c1ed47530"},{"mexc.com":["0:3e32e9fe51f9309e6859114a4d43792f21eaae25b277f43ba029f601e3443734","0:d99c8ba078cc1a84adefb3e27e175415d6190889c4b67aebaf30f01f8df2658d"]},{broxus_bot:"0:4677beb06991e23f7f7a54b54232a572ce87461548463ef4cb7e443946526e1c"},{chatex_bot:"0:066c96b9e6a23b8caa8cb24ef91991bfa11b2d4c3033f14f521b2be972a7e189"}];function b(e){return e>0?"↘":"↖"}function l(e){return e>1e13?"🐳":""}function h(){for(var e="0123456789ABCDEF",a="#",n=0;n<6;n++)a+=e[Math.floor(16*Math.random())];return a}function p(e){var a;return i.forEach((function(n){var t=Object.values(n)[0],c=Object.keys(n)[0];Array.isArray(t)?t.forEach((function(n){n==e&&(a=c)})):t==e&&(a=c)})),a}function g(){var e=[];return i.forEach((function(a){var n=Object.values(a)[0];Array.isArray(n)?n.forEach((function(a){e.push(a)})):e.push(n)})),e}var v=Math.round(Date.now()/1e3);function E(e){return new Date(1e3*e).toLocaleString()}function x(e,a){var n=new Date;n.setUTCHours(0,0,0,0);var t=Math.round(n/1e3)-(e-1)*a,c=t-a;return{gt:c,lt:t}}e.exports={oneTon:t,oneDay:c,oneWeek:r,oneMonth:o,surfCodeHash:f,safeMultisigCodeHash:d,depoolCodeHash:s,electorCodeHash:u,now:v,exchanges:i,direction:b,getRandomColor:h,whale:l,findExchangeName:p,formatTime:E,interval:x,exchangesAddresses:g}}}]);
//# sourceMappingURL=chunk-3eb8ccf7.21d5bc9b.js.map