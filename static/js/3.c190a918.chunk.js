(window["webpackJsonpdemo-react"]=window["webpackJsonpdemo-react"]||[]).push([[3],{289:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return n})},291:function(e,t,a){e.exports={container:"textarea_container__2u4J2"}},292:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(50),r=a(51),o=a(53),i=a(52),c=a(54),l=a(0),s=a.n(l),u=a(30),f=a(16),m=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(c.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"/login"})}}]),a}(s.a.Component);return Object(f.b)(m)(t)}},293:function(e,t,a){e.exports={container:"ProfileInfo_container__18PW1",ava:"ProfileInfo_ava__1_zUq",description:"ProfileInfo_description__3rKG5",status:"ProfileInfo_status__1mluq",description__info:"ProfileInfo_description__info__Jy_oZ",description__infoContainer:"ProfileInfo_description__infoContainer__37puk",description__fullName:"ProfileInfo_description__fullName___1cbf",description__lookingForAJob:"ProfileInfo_description__lookingForAJob__34N2Y",description__contacts:"ProfileInfo_description__contacts__dZQps",description__contactsContainer:"ProfileInfo_description__contactsContainer__2Rq6J",description__contactTitle:"ProfileInfo_description__contactTitle__35BMI"}},294:function(e,t,a){e.exports={container:"Profile_container__1fRRf",profile:"Profile_profile__3rnp-",inner:"Profile_inner__GpHif",ava:"Profile_ava__1-Ywv",description:"Profile_description__1UuTu"}},295:function(e,t,a){e.exports={container:"MyPosts_container__1Hrm-"}},297:function(e,t,a){"use strict";a.r(t);var n=a(50),r=a(51),o=a(53),i=a(52),c=a(54),l=a(0),s=a.n(l),u=a(16),f=a(94),m=a(68),p=a(294),d=a.n(p),_=function(e){return s.a.createElement("div",null,s.a.createElement("div",null,e.message),s.a.createElement("div",null,e.likesCount),s.a.createElement("hr",null))},b=a(295),v=a.n(b),E=a(291),A=a.n(E),h=a(87),g=a(126),O=a(44),P=a(24),j=Object(O.a)(15),w=Object(g.a)({form:"postMessage"})(function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(h.a,{component:P.c,placeholder:"NEW POST...",name:"newPostBody",validate:[O.b,j]}),s.a.createElement("button",null,"Add post"))}),k=s.a.memo(function(e){var t=e.posts.map(function(e){return s.a.createElement(_,{message:e.message,likesCount:e.likesCount})});return s.a.createElement("div",{className:v.a.container},s.a.createElement("div",{className:A.a.container},s.a.createElement(w,{onSubmit:function(t){e.addPost(t.newPostBody)}})),s.a.createElement("div",null,t))}),y=Object(u.b)(function(e){return{posts:e.profilePage.postsData,newPostText:e.profilePage.newPostText}},{addPost:f.a})(k),N=a(289),S=a(293),I=a.n(S),C=a(85),T=function(e){var t=Object(l.useState)(!1),a=Object(N.a)(t,2),n=a[0],r=a[1],o=Object(l.useState)(e.status),i=Object(N.a)(o,2),c=i[0],u=i[1];Object(l.useEffect)(function(){u(e.status)},[e.status]);return s.a.createElement("div",null,n?s.a.createElement("div",null,s.a.createElement("input",{onChange:function(e){u(e.currentTarget.value),console.log(c)},autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(c)},value:c})):s.a.createElement("div",{className:I.a.status},s.a.createElement("span",{onClick:function(){r(!0)}},""===e.status?"-----":e.status)))},B=a(36),J=a.n(B),R=Object(g.a)({form:"edit-profile"})(function(e){var t=e.profile,a=e.handleSubmit,n=e.error;return s.a.createElement("form",{className:I.a.description,onSubmit:a},s.a.createElement("button",null,"save"),n&&s.a.createElement("div",{className:J.a.formError},n),s.a.createElement("div",null,s.a.createElement("b",null,"Full name"),": ",Object(P.a)("fullName","Full Name",P.b)),s.a.createElement("div",null,s.a.createElement("b",null,"Looking for a job"),": ",Object(P.a)("lookingForAJob","",P.b,[],{type:"checkbox"})),s.a.createElement("div",null,s.a.createElement("b",null,"Mt professional skills"),": ",Object(P.a)("lookingForAJobDescription","Some my skills",P.c)),s.a.createElement("div",null,s.a.createElement("b",null,"About me"),": ",Object(P.a)("aboutMe","About me",P.c)),s.a.createElement("div",null,s.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map(function(e){return s.a.createElement("div",{key:e},s.a.createElement("b",null,e,":",Object(P.a)("contacts.".concat(e),"".concat(e),P.b)))})))}),F=function(e){var t=e.profile,a=e.status,n=e.updateStatus,r=e.isOwner,o=e.saveProfile,i=Object(m.a)(e,["profile","status","updateStatus","isOwner","saveProfile"]),c=Object(l.useState)(!1),u=Object(N.a)(c,2),f=u[0],p=u[1];if(!t)return s.a.createElement(C.a,null);var d=function(e){var t=e.contactTitle,a=e.contactValue;return a?s.a.createElement("div",null,s.a.createElement("span",{className:I.a.description__contactTitle},s.a.createElement("small",null,t,":\u2002")),a):null};return s.a.createElement("div",{className:I.a.container},s.a.createElement("div",{className:I.a.ava},s.a.createElement("img",{src:t.photos.large?t.photos.large:"https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png"}),r&&s.a.createElement("label",{for:"ava"},s.a.createElement("input",{id:"ava",type:"file",onChange:function(e){e.target.files.length&&i.savePhoto(e.target.files[0])}}))),f?s.a.createElement(R,{initialValues:t,onSubmit:function(e){o(e).then(function(){p(!1)})},profile:t}):s.a.createElement(function(e){var t=e.profile,r=e.isOwner,o=e.onEditMode;return s.a.createElement("div",{className:I.a.description},s.a.createElement(T,{status:a,updateStatus:n}),s.a.createElement("div",{className:I.a.description__info},s.a.createElement("div",{className:I.a.description__infoButton},r&&s.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFCSURBVHgB5ZXhbcIwEIUviAEyQroB3SBM0HqCphN0hIQJSjdoJ4gzQRmBDcgG7QRJ31POkkEusiP4A0867Bjne7bvrIhcWZlcSF3XvYzjWCFejTH9RQ0AfwN4i+4vA/21MzkyaNs2R5PHQB0A8BrAJsuy7TAMG7TfZDiThQcv8OchJjC98uHoWh4P2gKtYYt5NecsvUWV6vwgEat3cMQGzw0WWOnqewbHTw2Otn5OHpwJ/dThnUw5yP0cLCRRIbgeL1cvPjzZIBVOLRPg71rnYBgbgofei9oBQI3C1wE46/6RY84s2QAvPgHyBfg+AKcpk1siimQDvXwrmaqEz2UA/q9idrDSXdTW2h9X6zFwKibJex6PTDX+gdjF3JVoA11lJTOVfNHuz8DPQc8fVMpB5il3DF+nH5xn0bKcKesu4+3oDwzz9f/YCsOcAAAAAElFTkSuQmCC",onClick:o})),s.a.createElement("div",{className:I.a.description__infoContainer},s.a.createElement("div",{className:I.a.description__fullName},t.fullName),s.a.createElement("div",{className:I.a.description__lookingForAJob},t.lookingForAJob?"Looking for a job":""," "),s.a.createElement("div",null,s.a.createElement("small",null,s.a.createElement("i",null,"Professional skills")),":\u2002",t.lookingForAJobDescription),s.a.createElement("div",null,s.a.createElement("small",null,s.a.createElement("i",null,"About me")),":\u2002",t.aboutMe),s.a.createElement("div",{className:I.a.description__contacts},s.a.createElement("div",null,s.a.createElement("small",null,s.a.createElement("i",null,"Contacts:"))),s.a.createElement("div",{className:I.a.description__contactsContainer},Object.keys(t.contacts).map(function(e){return s.a.createElement(d,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))))},{isOwner:r,profile:t,onEditMode:function(){return p(!0)}}))},Q=function(e){var t=e.isOwner,a=e.profile,n=e.status,r=e.updateStatus,o=e.saveProfile,i=Object(m.a)(e,["isOwner","profile","status","updateStatus","saveProfile"]);return s.a.createElement("main",{className:d.a.container},s.a.createElement(F,Object.assign({isOwner:t,profile:a,status:n,updateStatus:r,saveProfile:o},i)),s.a.createElement(y,null))},M=a(30),U=a(292),x=a(7),D=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"profileRefresh",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorisedUserId)||this.props.history.push("/login"),this.props.getProfileThunk(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.profileRefresh()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.profileRefresh()}},{key:"render",value:function(){return s.a.createElement(Q,Object.assign({},this.props,{saveProfile:this.props.saveProfile,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId}))}}]),t}(s.a.Component);t.default=Object(x.d)(Object(u.b)(function(e){return{profile:e.profilePage.profile,isAuth:e.auth.isAuth,status:e.profilePage.status,authorisedUserId:e.auth.userId}},{getProfileThunk:f.c,getStatus:f.d,updateStatus:f.g,savePhoto:f.e,saveProfile:f.f}),M.g,U.a)(D)}}]);
//# sourceMappingURL=3.c190a918.chunk.js.map