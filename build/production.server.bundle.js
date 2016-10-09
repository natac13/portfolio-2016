!function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={exports:{},id:n,loaded:!1};return e[n].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){r(5),e.exports=r(2)},function(e,t){e.exports=require("express")},function(e,t,r){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var n=r(1),u=t(n),o=r(12),s=t(o),i=r(6),c=t(i),a=r(7),f=t(a),l=r(9),d=t(l),p=r(11),m=t(p),v=r(3),x=t(v),b=r(4),y=t(b);r(8).config();var g=(0,u["default"])(),h=process.env.PORT||8080,j=d["default"].createWriteStream(s["default"].join(e,"access.log"),{flags:"a"});g.use((0,m["default"])("combined",{stream:j})),g.use((0,f["default"])()),g.use(c["default"].json()),g.use(c["default"].urlencoded({extended:!1})),g.use(u["default"]["static"](s["default"].join(e,"../build"))),g.use("/feedback",y["default"]),g.use(x["default"]),g.listen(h,function(){console.log("Listening on port "+h+"...")})}).call(t,"server")},function(e,t){"use strict";function r(e){return{success:!1,errorType:e.type,error:e}}function n(e,t,n,u){n.status(200).json(r(e)),u()}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function u(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(u,o){try{var s=t[u](o),i=s.value}catch(c){return void r(c)}return s.done?void e(i):Promise.resolve(i).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}function o(e,t){return e?{success:!0,message:"Email sent successfully, thank you for your feedback!",subject:t}:{success:!1,type:"emailError",message:"There was an issue sending your email. This is a problem with the website.",subject:t}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(1),i=n(s),c=r(10),a=n(c),f=i["default"].Router(),l=process.env.MAILGUN_API_KEY,d=process.env.MAILGUN_DOMAIN,p=process.env.EMAIL;f.route("/").post(function(){var e=u(regeneratorRuntime.mark(function t(e,r,n){var u,s,i,c,f,m;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:u=e.body,s=u.subject,i=u.comments,c=u.userEmail,f=new a["default"]({apiKey:l,domain:d}),m={from:c,to:p,subject:s,text:i},f.messages().send(m,function(e,t){return e?(console.log(e),r.json(o(!1,e))):r.json(o(!0,s))});case 7:case"end":return t.stop()}},t,this)}));return function(t,r,n){return e.apply(this,arguments)}}()),t["default"]=f},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("dotenv")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("mailgun-js")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("path")}]);