!function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={exports:{},id:n,loaded:!1};return e[n].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){r(6),e.exports=r(2)},function(e,t){e.exports=require("express")},function(e,t,r){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var n=r(1),u=t(n),o=r(13),s=t(o),i=r(7),c=t(i),a=r(8),f=t(a),l=r(10),d=t(l),p=r(12),v=t(p),m=r(14),x=t(m),b=r(3),y=t(b),g=r(4),h=t(g);r(9).config();var _=(0,u["default"])(),q=process.env.PORT||3e3,j=d["default"].createWriteStream(s["default"].join(e,"access.log"),{flags:"a"});_.use((0,v["default"])("combined",{stream:j})),_.use((0,f["default"])()),_.use(c["default"].json()),_.use(c["default"].urlencoded({extended:!1})),_.use((0,x["default"])(s["default"].resolve(e,"../favicon.ico"))),_.use(u["default"]["static"](s["default"].join(e,"../build"))),_.use("/feedback",h["default"]),_.use(y["default"]),_.get("/*",function(t,r){r.sendFile(s["default"].resolve(e,"../build/index.html"))}),_.listen(q,process.env.SERVER_IP,function(){console.log("Listening on port "+q+"...")})}).call(t,"server")},function(e,t){"use strict";function r(e){return{success:!1,errorType:e.type,error:e}}function n(e,t,n,u){n.status(200).json(r(e)),u()}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function u(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(u,o){try{var s=t[u](o),i=s.value}catch(c){return void r(c)}return s.done?void e(i):Promise.resolve(i).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}function o(e,t){return e?{success:!0,message:"Email sent successfully, thank you for your feedback!",subject:t}:{success:!1,type:"emailError",message:"There was an issue sending your email. This is a problem with the website.",subject:t}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(1),i=n(s),c=r(5),a=(n(c),r(11)),f=n(a),l=i["default"].Router(),d=process.env.MAILGUN_API_KEY,p=(process.env.MAILGUN_DOMAIN,process.env.EMAIL),v=new f["default"].Mailgun(d);l.route("/").post(function(){var e=u(regeneratorRuntime.mark(function t(e,r,n){var u,s,i,c,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:u=e.body,s=u.subject,i=u.comments,c=u.userEmail,a=u.name,v.sendText(c,[p],a,i,"seancampbellnatac.com",function(e){return e?n(e):r.json(o(!0))});case 6:case"end":return t.stop()}},t,this)}));return function(t,r,n){return e.apply(this,arguments)}}()),t["default"]=l},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("dotenv")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("mailgun")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("serve-favicon")}]);