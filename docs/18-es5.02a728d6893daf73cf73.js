(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"1tRy":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var e=u("pMnS"),s=u("MKJQ"),r=u("sZkV"),a=u("iInd"),b=u("SVse"),i=u("s7LF"),c=u("I6FA");class p{constructor(l,n){this.klaskSvc=l,this.activatedRoute=n,this.currentTourneyId="",this.userStat="",this.statHeaders={klask:"Klasks",score:"Goals Scored",biscuit:"Biscuits","loss-control":"Loss of Controls"}}ngOnInit(){this.currentTourneyId=this.activatedRoute.snapshot.paramMap.get("tourneyId"),this.results=this.klaskSvc.getTournamentGameResults(this.currentTourneyId),this.userStat="klask",this.displayUserStat(this.userStat)}displayUserStat(l){const n=this.results.reduce((l,n)=>[...l,...n.points],[]).filter(l=>l.pointType===this.userStat).map(l=>"score"==this.userStat?l.scorer:l.opponent).reduce((l,n)=>(l.set(n,{points:l.get(n)?l.get(n).points+1:1}),l),new Map);this.statArray=[...n].map(l=>({name:l[0],count:l[1].points})),this.statArray.sort((l,n)=>n.count-l.count)}}var h=t.ob({encapsulation:0,styles:[["ion-segment[_ngcontent-%COMP%]{background-color:#121212}ion-label[_ngcontent-%COMP%]{color:#fff}"]],data:{}});function k(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,6,"ion-item",[],null,null,null,s.I,s.n)),t.pb(1,49152,null,0,r.H,[t.h,t.k,t.y],null,null),(l()(),t.qb(2,0,null,0,2,"ion-label",[],null,null,null,s.J,s.o)),t.pb(3,49152,null,0,r.N,[t.h,t.k,t.y],null,null),(l()(),t.Ib(4,0,[" "," "])),(l()(),t.qb(5,0,null,0,1,"small",[],null,null,null,null,null)),(l()(),t.Ib(6,null,[" "," "]))],null,(function(l,n){l(n,4,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.count)}))}function g(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,12,"ion-header",[],null,null,null,s.F,s.k)),t.pb(1,49152,null,0,r.B,[t.h,t.k,t.y],null,null),(l()(),t.qb(2,0,null,0,10,"ion-toolbar",[],null,null,null,s.P,s.u)),t.pb(3,49152,null,0,r.zb,[t.h,t.k,t.y],null,null),(l()(),t.qb(4,0,null,0,5,"ion-back-button",[["color","primary"],["routerDirection","back"],["slot","start"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Cb(l,6).onClick(u)&&o),"click"===n&&(o=!1!==t.Cb(l,7).onClick()&&o),"click"===n&&(o=!1!==t.Cb(l,9).onClick(u)&&o),o}),s.w,s.b)),t.pb(5,49152,null,0,r.g,[t.h,t.k,t.y],{color:[0,"color"]},null),t.pb(6,16384,null,0,r.h,[[2,r.fb],r.Eb],null,null),t.pb(7,16384,null,0,a.n,[a.m,a.a,[8,null],t.C,t.k],{routerLink:[0,"routerLink"]},null),t.Db(8,2),t.pb(9,737280,null,0,r.Hb,[b.h,r.Eb,t.k,a.m,[2,a.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t.qb(10,0,null,0,2,"ion-title",[],null,null,null,s.O,s.t)),t.pb(11,49152,null,0,r.xb,[t.h,t.k,t.y],null,null),(l()(),t.Ib(12,0,[" Most "," "])),(l()(),t.qb(13,0,null,null,5,"ion-content",[],null,null,null,s.D,s.i)),t.pb(14,49152,null,0,r.u,[t.h,t.k,t.y],null,null),(l()(),t.qb(15,0,null,0,3,"ion-list",[],null,null,null,s.K,s.p)),t.pb(16,49152,null,0,r.O,[t.h,t.k,t.y],null,null),(l()(),t.fb(16777216,null,0,1,null,k)),t.pb(18,278528,null,0,b.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(19,0,null,null,28,"ion-footer",[],null,null,null,s.E,s.j)),t.pb(20,49152,null,0,r.z,[t.h,t.k,t.y],null,null),(l()(),t.qb(21,0,null,0,26,"ion-segment",[["color","secondary"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.Cb(l,22)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Cb(l,22)._handleChangeEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(e.userStat=u)&&o),"ionChange"===n&&(o=!1!==e.displayUserStat()&&o),o}),s.M,s.q)),t.pb(22,16384,null,0,r.Ib,[t.k],null,null),t.Fb(1024,null,i.e,(function(l){return[l]}),[r.Ib]),t.pb(24,671744,null,0,i.h,[[8,null],[8,null],[8,null],[6,i.e]],{model:[0,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,i.f,null,[i.h]),t.pb(26,16384,null,0,i.g,[[4,i.f]],null,null),t.pb(27,49152,null,0,r.ib,[t.h,t.k,t.y],{color:[0,"color"]},null),(l()(),t.qb(28,0,null,0,4,"ion-segment-button",[["value","klask"]],null,null,null,s.L,s.r)),t.pb(29,49152,null,0,r.jb,[t.h,t.k,t.y],{value:[0,"value"]},null),(l()(),t.qb(30,0,null,0,2,"ion-label",[],null,null,null,s.J,s.o)),t.pb(31,49152,null,0,r.N,[t.h,t.k,t.y],null,null),(l()(),t.Ib(-1,0,["Klasks"])),(l()(),t.qb(33,0,null,0,4,"ion-segment-button",[["value","biscuit"]],null,null,null,s.L,s.r)),t.pb(34,49152,null,0,r.jb,[t.h,t.k,t.y],{value:[0,"value"]},null),(l()(),t.qb(35,0,null,0,2,"ion-label",[],null,null,null,s.J,s.o)),t.pb(36,49152,null,0,r.N,[t.h,t.k,t.y],null,null),(l()(),t.Ib(-1,0,["Biscuits"])),(l()(),t.qb(38,0,null,0,4,"ion-segment-button",[["value","score"]],null,null,null,s.L,s.r)),t.pb(39,49152,null,0,r.jb,[t.h,t.k,t.y],{value:[0,"value"]},null),(l()(),t.qb(40,0,null,0,2,"ion-label",[],null,null,null,s.J,s.o)),t.pb(41,49152,null,0,r.N,[t.h,t.k,t.y],null,null),(l()(),t.Ib(-1,0,["Goals"])),(l()(),t.qb(43,0,null,0,4,"ion-segment-button",[["value","loss-control"]],null,null,null,s.L,s.r)),t.pb(44,49152,null,0,r.jb,[t.h,t.k,t.y],{value:[0,"value"]},null),(l()(),t.qb(45,0,null,0,2,"ion-label",[],null,null,null,s.J,s.o)),t.pb(46,49152,null,0,r.N,[t.h,t.k,t.y],null,null),(l()(),t.Ib(-1,0,["LOC"]))],(function(l,n){var u=n.component;l(n,5,0,"primary");var t=l(n,8,0,"/win-loss-stats",u.currentTourneyId);l(n,7,0,t),l(n,9,0,"back"),l(n,18,0,u.statArray),l(n,24,0,u.userStat),l(n,27,0,"secondary"),l(n,29,0,"klask"),l(n,34,0,"biscuit"),l(n,39,0,"score"),l(n,44,0,"loss-control")}),(function(l,n){var u=n.component;l(n,12,0,u.statHeaders[u.userStat]),l(n,21,0,t.Cb(n,26).ngClassUntouched,t.Cb(n,26).ngClassTouched,t.Cb(n,26).ngClassPristine,t.Cb(n,26).ngClassDirty,t.Cb(n,26).ngClassValid,t.Cb(n,26).ngClassInvalid,t.Cb(n,26).ngClassPending)}))}var d=t.mb("app-tourney-stats",p,(function(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,1,"app-tourney-stats",[],null,null,null,g,h)),t.pb(1,114688,null,0,p,[c.a,a.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);class y{}u.d(n,"TourneyStatsPageModuleNgFactory",(function(){return C}));var C=t.nb(o,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[e.a,d]],[3,t.j],t.w]),t.Ab(4608,b.l,b.k,[t.t,[2,b.A]]),t.Ab(4608,i.k,i.k,[]),t.Ab(4608,r.c,r.c,[t.y,t.g]),t.Ab(4608,r.Db,r.Db,[r.c,t.j,t.q]),t.Ab(4608,r.Gb,r.Gb,[r.c,t.j,t.q]),t.Ab(1073742336,b.b,b.b,[]),t.Ab(1073742336,i.j,i.j,[]),t.Ab(1073742336,i.c,i.c,[]),t.Ab(1073742336,r.Bb,r.Bb,[]),t.Ab(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),t.Ab(1073742336,y,y,[]),t.Ab(1073742336,o,o,[]),t.Ab(1024,a.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);