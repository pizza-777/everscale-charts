(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4789187e"],{"07ac":function(e,t,a){var n=a("23e7"),r=a("6f53").values;n({target:"Object",stat:!0},{values:function(e){return r(e)}})},1148:function(e,t,a){"use strict";var n=a("da84"),r=a("5926"),c=a("577e"),o=a("1d80"),f=n.RangeError;e.exports=function(e){var t=c(o(this)),a="",n=r(e);if(n<0||n==1/0)throw f("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(a+=t);return a}},"159b":function(e,t,a){var n=a("da84"),r=a("fdbc"),c=a("785a"),o=a("17c2"),f=a("9112"),s=function(e){if(e&&e.forEach!==o)try{f(e,"forEach",o)}catch(t){e.forEach=o}};for(var i in r)r[i]&&s(n[i]&&n[i].prototype);s(c)},"17c2":function(e,t,a){"use strict";var n=a("b727").forEach,r=a("a640"),c=r("forEach");e.exports=c?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"408a":function(e,t,a){var n=a("e330");e.exports=n(1..valueOf)},"6f53":function(e,t,a){var n=a("83ab"),r=a("e330"),c=a("df75"),o=a("fc6a"),f=a("d1e7").f,s=r(f),i=r([].push),u=function(e){return function(t){var a,r=o(t),f=c(r),u=f.length,d=0,b=[];while(u>d)a=f[d++],n&&!s(r,a)||i(b,e?[a,r[a]]:r[a]);return b}};e.exports={entries:u(!0),values:u(!1)}},"80e2":function(e,t,a){"use strict";a.r(t);var n,r,c=a("1da1"),o=(a("96cf"),a("b680"),a("1fca")),f=a("938da"),s={extends:o["b"],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"Stakes vs. Free Circulation",fontSize:25,fontStyle:"normal"}}}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["stakesFreeCirculationProportion"])();case 2:a=t.sent,e.addPlugin({id:"Doughnut",beforeDraw:function(e){var t=e.chart.width,n=e.chart.height,r=e.chart.ctx;r.restore();var c=(n/314).toFixed(2);r.font=c+"em sans-serif",r.textBaseline="middle";var o=a.TotalAssets,f=Math.round((t-r.measureText(o).width)/2),s=n/1.65;r.fillText(o,f,s),r.save()}}),e.renderChart({labels:a.labels,datasets:[{label:"Stakes vs. Free Circulation",backgroundColor:["blue","pink"],data:a.assets}]},e.options);case 5:case"end":return t.stop()}}),t)})))()}},i=s,u=a("2877"),d=Object(u["a"])(i,n,r,!1,null,null,null);t["default"]=d.exports},"938da":function(e,t,a){var n=a("c973").default;a("96cf"),a("99af");var r=a("c98e"),c=r.stakesGiversUsers,o=a("bbac"),f=function(){var e=n(regeneratorRuntime.mark((function e(){var t,a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:return t=e.sent,a=t.assets[1]+t.assets[3],n=Math.round(t.assets[1]/a*100),r=Math.round(t.assets[3]/a*100),e.abrupt("return",{assets:[t.assets[1],t.assets[3]],labels:["STAKES: ".concat(o(t.assets[1])," EVERs(").concat(n,")%"),"FREE CIRCULATION: ".concat(o(t.assets[3])," EVERs(").concat(r,")%")],TotalAssets:o(a)});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e.exports={stakesFreeCirculationProportion:f}},a640:function(e,t,a){"use strict";var n=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&n((function(){a.call(null,t||function(){return 1},1)}))}},b64b:function(e,t,a){var n=a("23e7"),r=a("7b0b"),c=a("df75"),o=a("d039"),f=o((function(){c(1)}));n({target:"Object",stat:!0,forced:f},{keys:function(e){return c(r(e))}})},b680:function(e,t,a){"use strict";var n=a("23e7"),r=a("da84"),c=a("e330"),o=a("5926"),f=a("408a"),s=a("1148"),i=a("d039"),u=r.RangeError,d=r.String,b=Math.floor,l=c(s),h=c("".slice),p=c(1..toFixed),v=function(e,t,a){return 0===t?a:t%2===1?v(e,t-1,a*e):v(e*e,t/2,a)},g=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},x=function(e,t,a){var n=-1,r=a;while(++n<6)r+=t*e[n],e[n]=r%1e7,r=b(r/1e7)},E=function(e,t){var a=6,n=0;while(--a>=0)n+=e[a],e[a]=b(n/t),n=n%t*1e7},w=function(e){var t=6,a="";while(--t>=0)if(""!==a||0===t||0!==e[t]){var n=d(e[t]);a=""===a?n:a+l("0",7-n.length)+n}return a},m=i((function(){return"0.000"!==p(8e-5,3)||"1"!==p(.9,0)||"1.25"!==p(1.255,2)||"1000000000000000128"!==p(0xde0b6b3a7640080,0)}))||!i((function(){p({})}));n({target:"Number",proto:!0,forced:m},{toFixed:function(e){var t,a,n,r,c=f(this),s=o(e),i=[0,0,0,0,0,0],b="",p="0";if(s<0||s>20)throw u("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return d(c);if(c<0&&(b="-",c=-c),c>1e-21)if(t=g(c*v(2,69,1))-69,a=t<0?c*v(2,-t,1):c/v(2,t,1),a*=4503599627370496,t=52-t,t>0){x(i,0,a),n=s;while(n>=7)x(i,1e7,0),n-=7;x(i,v(10,n,1),0),n=t-1;while(n>=23)E(i,1<<23),n-=23;E(i,1<<n),x(i,1,1),E(i,2),p=w(i)}else x(i,0,a),x(i,1<<-t,0),p=w(i)+l("0",s);return s>0?(r=p.length,p=b+(r<=s?"0."+l("0",s-r)+p:h(p,0,r-s)+"."+h(p,r-s))):p=b+p,p}})},bbac:function(e,t,a){"use strict";function n(e,t,a){const n=a||".";let c;{let t;switch(typeof e){case"string":if(e.length<("-"===e[0]?5:4))return e;c=e,t=Number("."!==n?c.replace(n,"."):c);break;case"number":c=String(e),t=e,"."===n||Number.isInteger(e)||(c=c.replace(".",n));break;default:return e}if(-1e3<t&&t<1e3||isNaN(t)||!isFinite(t))return c}{const e=c.lastIndexOf(n);let a;e>-1&&(a=c.slice(e),c=c.slice(0,e));const o=r(c,t||",");return a&&o.push(a),o.join("")}}function r(e,t){let a=(e.length-1)%3+1;1===a&&"-"===e[0]&&(a=4);const n=[e.slice(0,a)];for(;a<e.length;a+=3)n.push(t,e.substr(a,3));return n}function c(e,t){return function(a){return n(a,e,t)}}e.exports=n,e.exports.bindWith=c},c98e:function(e,t,a){var n=a("c973").default;a("96cf"),a("99af");var r=a("0dff"),c=r.AggregationFn,o=r.client,f=a("bbac"),s=a("f62d"),i=function(){var e=n(regeneratorRuntime.mark((function e(){var t,a,n,r,i,u,d,b,l,h,p,v,g,x,E,w,m,C;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={type:"QueryCollection",collection:"accounts",filter:{code_hash:{eq:"d80dd077e56dd76af65b163b6da94cca9d2c8e62740d09d98f9a4459ac069958"}},result:"balance(format:DEC)"},a={type:"AggregateCollection",collection:"accounts",fields:[{field:"balance",fn:c.SUM}],filter:{code_hash:{in:[s.depoolCodeHash,s.electorCodeHash]}}},n={type:"AggregateCollection",collection:"accounts",fields:[{field:"balance",fn:c.SUM}],filter:{id:{in:["-1:7777777777777777777777777777777777777777777777777777777777777777","-1:8888888888888888888888888888888888888888888888888888888888888888","-1:9999999999999999999999999999999999999999999999999999999999999999","0:fee1a3bd261619f036d83aafd8b34f47d794bbb58185379877291003f3a3526d"]}}},r={type:"AggregateCollection",collection:"accounts",fields:[{field:"balance",fn:c.SUM}]},e.next=6,o.net.query({query:'        \n            {aggregateAccounts(\n            filter:{      \n              acc_type: {\n                ne: 1\n              }              \n            }\n            fields:[\n              {field: "balance", fn: SUM}\n            ]\n          )}\n        '});case 6:return i=e.sent.result.data.aggregateAccounts[0],u=[t,a,n,r],e.prev=8,e.next=11,o.net.batch_query({operations:u});case 11:return d=e.sent,b=Math.round(d.results[0][0].balance/s.oneTon),l=Math.round(d.results[1][0]/s.oneTon),h=Math.round(d.results[2][0]/s.oneTon),p=Math.round(d.results[3][0]/s.oneTon),v=Math.round(i/s.oneTon),g=p-h-l-b-v,x=Math.round(b/p*100),E=Math.round(l/p*100),w=Math.round(h/p*100),m=Math.round(g/p*100),C=Math.round(v/p*100),e.abrupt("return",{assets:[b,l,h,g,v],labels:["BURNING: ".concat(f(b)," EVERs(").concat(x,")%"),"STAKES: ".concat(f(l)," EVERs(").concat(E,")%"),"GIVERS: ".concat(f(h)," EVERs(").concat(w,")%"),"FREE CIRCULATION: ".concat(f(g)," EVERs(").concat(m,")%"),"COLD EVERS: ".concat(f(v)," EVERs(").concat(C,")%")]});case 26:e.prev=26,e.t0=e["catch"](8),console.log(e.t0);case 29:case"end":return e.stop()}}),e,null,[[8,26]])})));return function(){return e.apply(this,arguments)}}();e.exports={stakesGiversUsers:i}},f62d:function(e,t,a){a("d3b7"),a("07ac"),a("b64b"),a("159b");var n=1e9,r=86400,c=7*r,o=Math.round(30.5*r),f="207dc560c5956de1a2c1479356f8f3ee70a59767db2bf4788b1d61ad42cdad82",s="80d6c47c4a25543c9b397b71716f3fae1e2c5d247174c52e2c19bd896442b105",i="14e20e304f53e6da152eb95fffc993dbd28245a775d847eed043f7c78a503885",u="e48892fa8be43954a2923d668ff9e8d68931c82d8dc80be1c8848b8ae8fe366a",d=[{"Bitcoin-hitbtc":["0:363ab410d2972bdfac97506a021bb616c9f93b4fc2d2dfa23706e26bd7334336","0:0d46b0b1f76581b893d7002a58cd72f7844aa05eca318d0f353a623da6c3615d"]},{"bitrue.com":"0:dea68d5ba2998b48ffd98e8bc3c8b1716aaa2a41fe3ca6c40a1dd9a3d9334e88"},{"cex.io":"0:ff72a20b00b647eb536bf2f9e7f5f07bc20ff5d6a93342e81e39d6db7e20fe59"},{"Coin-Galaxy.com":"0:0dc78eee043a0c1d301552ac0b3c131a22c7212189a646b10a0059aef3515e9b"},{"coineal.com":["0:0dd48e220aef64f79fd563e150be51d12515623b6344da03c97e70ef6801a139","0:a0c77f59b513c41f9d93a2e2144625cab74983c6da4afa0ddcbdee0e36c3efff"]},{"coins.black":"0:e9c6d46c7f8fa0f13221dd221db51d6aac7e51a2b75d65dad81dc1ce2fbd285e"},{"digifinex.asia":"0:a7cba00b37563e504d879338f09594a4be88f240b016843c1ad03a11538d0a9b"},{"gate.io":"0:3addd84bf73267312a477049fd9b8db761bf39c585c150f8e6f9451347af2b6c"},{"kuna.io":"0:af22c44fc447f8497219969d6faed49894584f0de66a208956aec20c1ed47530"},{"mexc.com":["0:3e32e9fe51f9309e6859114a4d43792f21eaae25b277f43ba029f601e3443734","0:d99c8ba078cc1a84adefb3e27e175415d6190889c4b67aebaf30f01f8df2658d"]},{broxus_bot:"0:4677beb06991e23f7f7a54b54232a572ce87461548463ef4cb7e443946526e1c"},{chatex_bot:"0:066c96b9e6a23b8caa8cb24ef91991bfa11b2d4c3033f14f521b2be972a7e189"}];function b(e){return e>0?"↘":"↖"}function l(e){return e>1e13?"🐳":""}function h(){for(var e="0123456789ABCDEF",t="#",a=0;a<6;a++)t+=e[Math.floor(16*Math.random())];return t}function p(e){var t;return d.forEach((function(a){var n=Object.values(a)[0],r=Object.keys(a)[0];Array.isArray(n)?n.forEach((function(a){a==e&&(t=r)})):n==e&&(t=r)})),t}function v(){var e=[];return d.forEach((function(t){var a=Object.values(t)[0];Array.isArray(a)?a.forEach((function(t){e.push(t)})):e.push(a)})),e}var g=Math.round(Date.now()/1e3);function x(e){return new Date(1e3*e).toLocaleString()}function E(e,t){var a=new Date;a.setUTCHours(0,0,0,0);var n=Math.round(a/1e3)-(e-1)*t,r=n-t;return{gt:r,lt:n}}e.exports={oneTon:n,oneDay:r,oneWeek:c,oneMonth:o,surfCodeHash:f,safeMultisigCodeHash:s,depoolCodeHash:i,electorCodeHash:u,now:g,exchanges:d,direction:b,getRandomColor:h,whale:l,findExchangeName:p,formatTime:x,interval:E,exchangesAddresses:v}}}]);
//# sourceMappingURL=chunk-4789187e.ea847ea8.js.map