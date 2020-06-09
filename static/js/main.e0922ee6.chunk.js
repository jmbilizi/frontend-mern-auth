(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{150:function(e,t,a){e.exports=a(293)},182:function(e,t){},184:function(e,t){},197:function(e,t){},199:function(e,t){},227:function(e,t){},228:function(e,t){},233:function(e,t){},235:function(e,t){},259:function(e,t){},293:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(24),r=a(13),l=a(9),s=a(53),m=a.n(s),u=function(e){if("undefined"!==window)return m.a.get(e)},i=function(e,t){var a,n;console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE",e),a="token",n=e.data.token,"undefined"!==window&&m.a.set(a,n,{expires:1}),function(e,t){"undefined"!==window&&localStorage.setItem(e,JSON.stringify(t))}("user",e.data.user),t()},d=function(){if("undefined"!==window&&u("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},b=function(e){var t;t="token","undefined"!==window&&m.a.remove(t,{expires:1}),function(e){"undefined"!==window&&localStorage.removeItem(e)}("user"),e()},E=function(e,t){if(console.log("UPDATE USER IN LOCALSTORAGE HELPERS",e),"undefined"!==typeof window){var a=JSON.parse(localStorage.getItem("user"));a=e.data,localStorage.setItem("user",JSON.stringify(a))}t()},p=Object(l.g)((function(e){var t=e.children,a=e.match,o=e.history,l=function(e){return a.path===e?{color:"#000"}:{color:"#fff"}};return c.a.createElement(n.Fragment,null,c.a.createElement("ul",{className:"nav nav-tabs bg-primary"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{to:"/",className:"nav-link",style:l("/")},"Home")),!d()&&c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{to:"/signin",className:"nav-link",style:l("/signin")},"Signin")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{to:"/signup",className:"nav-link",style:l("/signup")},"Signup"))),d()&&"admin"===d().role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{className:"nav-link",style:l("/admin"),to:"/admin"},d().name)),d()&&"subscriber"===d().role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{className:"nav-link",style:l("/private"),to:"/private"},d().name)),d()&&c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{className:"nav-link",style:{cursor:"pointer",color:"#fff"},onClick:function(){b((function(){o.push("/")}))}},"Signout"))),c.a.createElement("div",{className:"container"},t))})),f=a(147),h=function(){return c.a.createElement(p,null,c.a.createElement(f.Helmet,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"MERN Stack"),c.a.createElement("link",{rel:"canonical",href:"https://mern-stack.com"})),c.a.createElement("div",{className:"col-md-6 offset-md-3 text-center"},c.a.createElement("h1",{className:"p-5"},"React Node MongoDB Authentication Boilerplate"),c.a.createElement("h2",null,"MERN STACK"),c.a.createElement("hr",null),c.a.createElement("p",{className:"lead"},"MERN stack login register system with account activation, forgot password, reset password, login with facebook and google as well as private and protected routes for authenticated user and users with the role of admin."),c.a.createElement("h4",{className:"p2"},"Bonus"),c.a.createElement("p",{className:"lead"},"Profile update & deployment to digital ocean cloud servers")))},g=a(21),N=a(2),O=a(15),v=a(10),S=a.n(v),j=a(148),w=a.n(j),x=function(e){var t=e.informParent,a=void 0===t?function(e){return e}:t,n=function(e){console.log(e.tokenId),S()({method:"POST",url:"".concat("http://localhost:8080","/google-login"),data:{idToken:e.tokenId}}).then((function(e){console.log("GOOGLE SIGNIN SUCCESS",e),a(e)})).catch((function(e){console.log("GOOGLE SIGNIN ERROR",e.response)}))};return c.a.createElement("div",{className:"pb-3"},c.a.createElement(w.a,{clientId:"".concat("320933425577-h2jco114v5i4nujrj8robjs71h8hfjl4.apps.googleusercontent.com"),onSuccess:n,onFailure:n,render:function(e){return c.a.createElement("button",{onClick:e.onClick,disabled:e.disabled,className:"btn btn-danger btn-lg btn-block"},c.a.createElement("i",{className:"fab fa-google pr-2"})," Login with Google")},cookiePolicy:"single_host_origin"}))},T=a(149),R=a.n(T),y=function(e){var t=e.informParent,a=void 0===t?function(e){return e}:t;return c.a.createElement("div",{className:"pb-3"},c.a.createElement(R.a,{appId:"".concat("289144608924346"),autoLoad:!1,callback:function(e){console.log(e),S()({method:"POST",url:"".concat("http://localhost:8080","/facebook-login"),data:{userID:e.userID,accessToken:e.accessToken}}).then((function(e){console.log("FACEBOOK SIGNIN SUCCESS",e),a(e)})).catch((function(e){console.log("FACEBOOK SIGNIN ERROR",e.response)}))},render:function(e){return c.a.createElement("button",{onClick:e.onClick,className:"btn btn-primary btn-lg btn-block"},c.a.createElement("i",{className:"fab fa-facebook pr-2"})," Login with Facebook")}}))},P=a(6),k=(a(26),function(e){var t=e.history,a=Object(n.useState)({name:"",email:"",password:"",buttonText:"Submit",error:"",success:""}),o=Object(O.a)(a,2),s=o[0],m=o[1],u=s.name,b=s.email,E=s.password,f=s.buttonText,h=s.error,v=s.success,j=function(e){return function(t){m(Object(N.a)(Object(N.a)({},s),{},Object(g.a)({error:"",success:""},e,t.target.value)))}},w=function(e){i(e,(function(){d()&&"admin"===d().role?t.push("/admin"):t.push("/private")}))},T=function(e){e.preventDefault(),m(Object(N.a)(Object(N.a)({},s),{},{buttonText:"Submitting"})),S()({method:"POST",url:"".concat("http://localhost:8080","/signup"),data:{name:u,email:b,password:E}}).then((function(e){console.log("SIGNUP SUCCESS",e),m(Object(N.a)(Object(N.a)({},s),{},{name:"",email:"",password:"",buttonText:"Submitted",success:e.data.message})),P.b.success(e.data.message)})).catch((function(e){console.log("SIGNUP ERROR",e.response.data),m(Object(N.a)(Object(N.a)({},s),{},{buttonText:"Submit",error:e.response.data.error})),P.b.error(e.response.data.error)}))};return c.a.createElement(p,null,c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement(P.a,null),d()?c.a.createElement(l.a,{to:"/"}):null,c.a.createElement("h1",{className:"pb-3 pt-5 text-center"},"SIGN UP"),c.a.createElement("div",{className:"alert alert-danger text-center",style:{display:h?"":"none"}},h),c.a.createElement("div",{className:"alert alert-success text-center",style:{display:v?"":"none"}},v),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Name"),c.a.createElement("input",{onChange:j("name"),value:u,type:"text",className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Email"),c.a.createElement("input",{onChange:j("email"),value:b,type:"email",className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Password"),c.a.createElement("input",{onChange:j("password"),value:E,type:"password",className:"form-control"})),c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-primary btn-lg btn-block",onClick:T},f))),c.a.createElement(r.b,{to:"/auth/password/forgot",className:"btn btn-lg btn-block btn-outline-danger mb-3 mt-3"},"Forgot Password"),c.a.createElement(x,{informParent:w}),c.a.createElement(y,{informParent:w})))}),I=function(e){var t=e.history,a=Object(n.useState)({email:"",password:"",error:"",buttonText:"Submit"}),o=Object(O.a)(a,2),s=o[0],m=o[1],u=s.email,b=s.password,E=s.error,f=s.buttonText,h=function(e){return function(t){m(Object(N.a)(Object(N.a)({},s),{},Object(g.a)({error:""},e,t.target.value)))}},v=function(e){i(e,(function(){d()&&"admin"===d().role?t.push("/admin"):t.push("/private")}))},j=function(e){e.preventDefault(),m(Object(N.a)(Object(N.a)({},s),{},{buttonText:"Submitting"})),S()({method:"POST",url:"".concat("http://localhost:8080","/signin"),data:{email:u,password:b}}).then((function(e){console.log("SIGNIN SUCCESS",e),i(e,(function(){m(Object(N.a)(Object(N.a)({},s),{},{name:"",email:"",password:"",buttonText:"Submitted"})),d()&&"admin"===d().role?t.push("/admin"):t.push("/private")}))})).catch((function(e){console.log("SIGNIN ERROR",e.response.data),m(Object(N.a)(Object(N.a)({},s),{},{buttonText:"Submit",error:e.response.data.error})),P.b.error(e.response.data.error)}))};return c.a.createElement(p,null,c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement(P.a,null),d()?c.a.createElement(l.a,{to:"/"}):null,c.a.createElement("h1",{className:"pt-5 pb-3 text-center"},"SIGN IN"),c.a.createElement("div",{className:"alert alert-danger text-center",style:{display:E?"":"none"}},E),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Email"),c.a.createElement("input",{onChange:h("email"),value:u,type:"email",className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Password"),c.a.createElement("input",{onChange:h("password"),value:b,type:"password",className:"form-control"})),c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-primary btn-lg btn-block",onClick:j},f))),c.a.createElement(r.b,{to:"/auth/password/forgot",className:"btn btn-lg btn-block btn-outline-danger mb-3 mt-3"},"Forgot Password"),c.a.createElement(x,{informParent:v}),c.a.createElement(y,{informParent:v})))},C=a(51),A=a.n(C),U=function(e){var t=e.match,a=Object(n.useState)({name:"",token:"",show:!0}),o=Object(O.a)(a,2),r=o[0],l=o[1];Object(n.useEffect)((function(){var e=t.params.token,a=A.a.decode(e).name;e&&l(Object(N.a)(Object(N.a)({},r),{},{name:a,token:e}))}),[]);var s=r.name,m=r.token,u=(r.show,function(e){e.preventDefault(),S()({method:"POST",url:"".concat("http://localhost:8080","/account-activation"),data:{token:m}}).then((function(e){console.log("ACCOUNT ACTIVATION",e),l(Object(N.a)(Object(N.a)({},r),{},{show:!1})),P.b.success(e.data.message)})).catch((function(e){console.log("ACCOUNT ACTIVATION ERROR",e.response.data.error),P.b.error(e.response.data.error)}))});return c.a.createElement(p,null,c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement(P.a,null),c.a.createElement("div",{className:"text-center"},c.a.createElement("h1",{className:"p-5"},"Hey ",s,", Ready to activate your account? click the button below."),c.a.createElement("button",{className:"btn btn-outline-primary",onClick:u},"Activate Account"))))},D=function(e){var t=e.history,a=Object(n.useState)({role:"",name:"",email:"",password:"",buttonText:"Submit"}),o=Object(O.a)(a,2),r=o[0],l=o[1],s=u("token");Object(n.useEffect)((function(){m()}),[]);var m=function(){S()({method:"GET",url:"".concat("http://localhost:8080","/user/").concat(d()._id),headers:{Authorization:"Bearer ".concat(s)}}).then((function(e){console.log("PRIVATE PROFILE UPDATE",e);var t=e.data,a=t.role,n=t.name,c=t.email;l(Object(N.a)(Object(N.a)({},r),{},{role:a,name:n,email:c}))})).catch((function(e){console.log("PRIVATE PROFILE UPDATE ERROR",e.response.data.error),401===e.response.status&&b((function(){t.push("/")}))}))},i=r.role,f=r.name,h=r.email,v=r.password,j=r.buttonText,w=function(e){return function(t){l(Object(N.a)(Object(N.a)({},r),{},Object(g.a)({},e,t.target.value)))}},x=function(e){e.preventDefault(),l(Object(N.a)(Object(N.a)({},r),{},{buttonText:"Submitting"})),S()({method:"PUT",url:"".concat("http://localhost:8080","/user/update"),headers:{Authorization:"Bearer ".concat(s)},data:{name:f,password:v}}).then((function(e){console.log("PRIVATE PROFILE UPDATE SUCCESS",e),E(e,(function(){l(Object(N.a)(Object(N.a)({},r),{},{buttonText:"Submitted"})),P.b.success("Profile updated successfully")}))})).catch((function(e){console.log("PRIVATE PROFILE UPDATE ERROR",e.response.data.error),l(Object(N.a)(Object(N.a)({},r),{},{buttonText:"Submit"})),P.b.error(e.response.data.error)}))};return c.a.createElement(p,null,c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement(P.a,null),c.a.createElement("h1",{className:"pt-5 text-center"},"Private"),c.a.createElement("p",{className:"lead text-center"},"Profile update"),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Role"),c.a.createElement("input",{defaultValue:i,type:"text",className:"form-control",disabled:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Name"),c.a.createElement("input",{onChange:w("name"),value:f,type:"text",className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Email"),c.a.createElement("input",{defaultValue:h,type:"email",className:"form-control",disabled:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Password"),c.a.createElement("input",{onChange:w("password"),value:v,type:"password",className:"form-control"})),c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-primary",onClick:x},j)))))},G=function(e){var t=e.history,a=Object(n.useState)({role:"",name:"",email:"",password:"",buttonText:"Submit"}),o=Object(O.a)(a,2),r=o[0],l=o[1],s=u("token");Object(n.useEffect)((function(){m()}),[]);var m=function(){S()({method:"GET",url:"".concat("http://localhost:8080","/user/").concat(d()._id),headers:{Authorization:"Bearer ".concat(s)}}).then((function(e){console.log("PRIVATE PROFILE UPDATE",e);var t=e.data,a=t.role,n=t.name,c=t.email;l(Object(N.a)(Object(N.a)({},r),{},{role:a,name:n,email:c}))})).catch((function(e){console.log("PRIVATE PROFILE UPDATE ERROR",e.response.data.error),401===e.response.status&&b((function(){t.push("/")}))}))},i=r.role,f=r.name,h=r.email,v=r.password,j=r.buttonText,w=function(e){return function(t){l(Object(N.a)(Object(N.a)({},r),{},Object(g.a)({},e,t.target.value)))}},x=function(e){e.preventDefault(),l(Object(N.a)(Object(N.a)({},r),{},{buttonText:"Submitting"})),S()({method:"PUT",url:"".concat("http://localhost:8080","/admin/update"),headers:{Authorization:"Bearer ".concat(s)},data:{name:f,password:v}}).then((function(e){console.log("PRIVATE PROFILE UPDATE SUCCESS",e),E(e,(function(){l(Object(N.a)(Object(N.a)({},r),{},{buttonText:"Submitted"})),P.b.success("Profile updated successfully")}))})).catch((function(e){console.log("PRIVATE PROFILE UPDATE ERROR",e.response.data.error),l(Object(N.a)(Object(N.a)({},r),{},{buttonText:"Submit"})),P.b.error(e.response.data.error)}))};return c.a.createElement(p,null,c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement(P.a,null),c.a.createElement("h1",{className:"pt-5 text-center"},"Admin"),c.a.createElement("p",{className:"lead text-center"},"Profile update"),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Role"),c.a.createElement("input",{defaultValue:i,type:"text",className:"form-control",disabled:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Name"),c.a.createElement("input",{onChange:w("name"),value:f,type:"text",className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Email"),c.a.createElement("input",{defaultValue:h,type:"email",className:"form-control",disabled:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Password"),c.a.createElement("input",{onChange:w("password"),value:v,type:"password",className:"form-control"})),c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-primary",onClick:x},j)))))},F=a(52),L=function(e){var t=e.component,a=Object(F.a)(e,["component"]);return c.a.createElement(l.b,Object.assign({},a,{render:function(e){return d()?c.a.createElement(t,e):c.a.createElement(l.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},V=function(e){var t=e.component,a=Object(F.a)(e,["component"]);return c.a.createElement(l.b,Object.assign({},a,{render:function(e){return d()&&"admin"===d().role?c.a.createElement(t,e):c.a.createElement(l.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},B=function(e){e.history;var t=Object(n.useState)({email:"",error:"",success:"",buttonText:"Request password reset link"}),a=Object(O.a)(t,2),o=a[0],r=a[1],l=o.email,s=o.buttonText,m=o.error,u=o.success,i=function(e){e.preventDefault(),r(Object(N.a)(Object(N.a)({},o),{},{buttonText:"Submitting"})),S()({method:"PUT",url:"".concat("http://localhost:8080","/forgot-password"),data:{email:l}}).then((function(e){console.log("FORGOT PASSWORD SUCCESS",e),P.b.success(e.data.message),r(Object(N.a)(Object(N.a)({},o),{},{success:e.data.message,buttonText:"Requested"}))})).catch((function(e){console.log("FORGOT PASSWORD ERROR",e.response.data),P.b.error(e.response.data.error),r(Object(N.a)(Object(N.a)({},o),{},{error:e.response.data.error,buttonText:"Request password reset link"}))}))};return c.a.createElement(p,null,c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement(P.a,null),c.a.createElement("h1",{className:"p-5 text-center"},"Forgot password"),c.a.createElement("div",{className:"alert alert-danger text-center",style:{display:m?"":"none"}},m),c.a.createElement("div",{className:"alert alert-success text-center",style:{display:u?"":"none"}},u),function(){return c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"Email"),c.a.createElement("input",{onChange:(e="email",function(t){r(Object(N.a)(Object(N.a)({},o),{},Object(g.a)({error:"",success:""},e,t.target.value)))}),value:l,type:"email",className:"form-control"})),c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-primary",onClick:i},s)));var e}()))},H=function(e){var t=e.match,a=Object(n.useState)({name:"",token:"",newPassword:"",error:"",success:"",buttonText:"Reset password"}),o=Object(O.a)(a,2),r=o[0],l=o[1];Object(n.useEffect)((function(){var e=t.params.token,a=A.a.decode(e).name;e&&l(Object(N.a)(Object(N.a)({},r),{},{name:a,token:e}))}),[]);var s=r.name,m=r.token,u=r.newPassword,i=r.error,d=r.success,b=r.buttonText,E=function(e){l(Object(N.a)(Object(N.a)({},r),{},{error:"",success:"",newPassword:e.target.value}))},f=function(e){e.preventDefault(),l(Object(N.a)(Object(N.a)({},r),{},{buttonText:"Submitting"})),S()({method:"PUT",url:"".concat("http://localhost:8080","/reset-password"),data:{newPassword:u,resetPasswordLink:m}}).then((function(e){console.log("RESET PASSWORD SUCCESS",e),P.b.success(e.data.message),l(Object(N.a)(Object(N.a)({},r),{},{success:e.data.message,buttonText:"Done"}))})).catch((function(e){console.log("RESET PASSWORD ERROR",e.response.data),P.b.error(e.response.data.error),l(Object(N.a)(Object(N.a)({},r),{},{error:e.response.data.error,buttonText:"Reset password"}))}))};return c.a.createElement(p,null,c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement(P.a,null),c.a.createElement("h1",{className:"p-5 text-center"},"Hey ",s,", Type your new password"),c.a.createElement("div",{className:"alert alert-danger text-center",style:{display:i?"":"none"}},i),c.a.createElement("div",{className:"alert alert-success text-center",style:{display:d?"":"none"}},d),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-muted"},"New password"),c.a.createElement("input",{onChange:E,value:u,type:"password",className:"form-control",placeholder:"Type your new password here",required:!0})),c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-primary",onClick:f},b)))))},J=function(){return c.a.createElement(r.a,null,c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"/",exact:!0,component:h}),c.a.createElement(l.b,{path:"/signup",exact:!0,component:k}),c.a.createElement(l.b,{path:"/signin",exact:!0,component:I}),c.a.createElement(l.b,{path:"/auth/activate/:token",exact:!0,component:U}),c.a.createElement(L,{path:"/private",exact:!0,component:D}),c.a.createElement(V,{path:"/admin",exact:!0,component:G}),c.a.createElement(l.b,{path:"/auth/password/forgot",exact:!0,component:B}),c.a.createElement(l.b,{path:"/auth/password/reset/:token",exact:!0,component:H})))},q=document.getElementById("root");q.hasChildNodes()?Object(o.hydrate)(c.a.createElement(J,null),q):Object(o.render)(c.a.createElement(J,null),q)}},[[150,1,2]]]);
//# sourceMappingURL=main.e0922ee6.chunk.js.map