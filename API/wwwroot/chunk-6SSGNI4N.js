import{a as O}from"./chunk-YK7KIY5R.js";import{a as V}from"./chunk-WIQ43ZSS.js";import{a as U}from"./chunk-CNATNHH2.js";import{Bb as m,Dc as D,Fc as F,Ib as d,Nb as f,Rb as S,Rc as R,Td as M,Vb as c,Wb as o,Xb as h,Yb as C,Zb as v,dc as l,fb as u,gc as b,hd as T,id as L,lb as n,oc as r,pc as s,qa as x,qc as _,rc as E,rd as k,va as I,xc as w,yc as y,zc as $}from"./chunk-2LHIXASS.js";var N=()=>({installed:""}),z=t=>({version:t});function B(t,i){if(t&1&&(c(0,"span",3),r(1),o()),t&2){let e=l().$implicit,a=l().$implicit;n(),s(a("nightly",$(1,z,e.currentVersion)))}}function P(t,i){if(t&1&&(c(0,"span",3),r(1),o()),t&2){let e=l(2).$implicit;n(),s(e("installed"))}}function j(t,i){if(t&1&&(c(0,"span",3),r(1),o()),t&2){let e=l(2).$implicit;n(),s(e("available"))}}function q(t,i){if(t&1&&(c(0,"a",13),r(1),o()),t&2){let e=l(),a=e.$implicit,p=e.index,g=l().$implicit;f("btn disabled btn-",p===0?"primary":"secondary"," float-end"),b("href",a.updateUrl,u),n(),s(g("installed"))}}function A(t,i){if(t&1&&(c(0,"a",13),r(1),o()),t&2){let e=l(),a=e.$implicit,p=e.index,g=l().$implicit;f("btn btn-",p===0?"primary":"secondary"," float-end"),b("href",a.updateUrl,u),n(),s(g("download"))}}function K(t,i){if(t&1&&(C(0),c(1,"div",6)(2,"div",7)(3,"h4",8),r(4),m(5,B,2,3,"span",3)(6,P,2,1)(7,j,2,1),o(),c(8,"h6",9),r(9),D(10,"date"),o(),c(11,"pre",10),r(12,"            "),h(13,"app-read-more",11),r(14,`
          `),o(),m(15,q,2,5,"a",12)(16,A,2,5,"a",12),o()(),v()),t&2){let e=i.$implicit,a=i.index,p=l().$implicit;n(4),_("",e.updateTitle,"\xA0 "),n(),S(5,e.isOnNightlyInRelease?5:e.isReleaseEqual?6:e.isReleaseNewer&&a===0?7:-1),n(4),E("",p("published-label"),"",F(10,8,e.publishDate,"short"),""),n(4),d("text",e.updateBody)("maxLength",500),n(2),d("ngIf",!e.isDocker&&e.updateVersion===e.currentVersion),n(),d("ngIf",!e.isDocker&&e.updateVersion!==e.currentVersion)}}function Y(t,i){if(t&1&&(C(0),c(1,"div",1)(2,"p",2),r(3),c(4,"span",3),r(5),o(),r(6),o(),m(7,K,17,11,"ng-container",4),o(),h(8,"app-loading",5),v()),t&2){let e=i.$implicit,a=l();n(3),_(" ",e("description",y(5,N))," "),n(2),s(e("installed")),n(),_(" ",e("description-continued",y(6,N))," "),n(),d("ngForOf",a.updates),n(),d("loading",a.isLoading)}}var ne=(()=>{let i=class i{constructor(){this.serverService=x(V),this.cdRef=x(R),this.updates=[],this.isLoading=!0}ngOnInit(){this.serverService.getChangelog().subscribe(a=>{this.updates=a,this.isLoading=!1,this.cdRef.markForCheck()})}};i.\u0275fac=function(p){return new(p||i)},i.\u0275cmp=I({type:i,selectors:[["app-changelog"]],standalone:!0,features:[w],decls:1,vars:1,consts:[[4,"transloco","translocoRead"],[1,"changelog"],[1,"pb-2"],[1,"badge","bg-secondary"],[4,"ngFor","ngForOf"],[3,"loading"],[1,"card","w-100","mb-2",2,"width","18rem"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-1","mt-1","text-muted"],[1,"card-text","update-body"],[3,"text","maxLength"],["target","_blank","rel","noopener noreferrer",3,"href","class",4,"ngIf"],["target","_blank","rel","noopener noreferrer",3,"href"]],template:function(p,g){p&1&&m(0,Y,9,7,"ng-container",0),p&2&&d("translocoRead","changelog")},dependencies:[T,L,O,U,k,M],styles:[`.update-body[_ngcontent-%COMP%]{width:100%;word-wrap:break-word;white-space:pre-wrap}  .changelog h1{font-size:26px}  .changelog p,   .changelog ul{margin-bottom:0}  .changelog img{max-width:100%!important}
/*# sourceMappingURL=changelog.component-57EKYLIU.css.map */`],changeDetection:0});let t=i;return t})();export{ne as a};
//# sourceMappingURL=chunk-6SSGNI4N.js.map