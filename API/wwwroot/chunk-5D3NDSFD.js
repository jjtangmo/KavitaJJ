import{a as ae,b as le,c as ce}from"./chunk-7RIKHQP6.js";import"./chunk-G6W3CHAT.js";import{a as ne}from"./chunk-5JNCF2FD.js";import"./chunk-DATLIK2Y.js";import"./chunk-C2T36BOI.js";import{b as te,i as re}from"./chunk-GGQU56QW.js";import"./chunk-V7YNUPX5.js";import{b as se}from"./chunk-U42B4V5B.js";import{a as k,b as Q,l as ie,m as oe}from"./chunk-ZTKUYOP3.js";import{c as ee}from"./chunk-5TIUG6K2.js";import"./chunk-IYLIANWB.js";import"./chunk-COKVODYN.js";import"./chunk-K6JLHPZK.js";import{a as G}from"./chunk-SEAKSSGD.js";import"./chunk-SBPQBTA5.js";import"./chunk-WBO5KV4A.js";import"./chunk-LAUBKCQL.js";import{a as Y}from"./chunk-46CIW37K.js";import"./chunk-76TOP2FJ.js";import"./chunk-4XR5JJUF.js";import"./chunk-5XQ66AVT.js";import"./chunk-CNATNHH2.js";import{a as Z,d as A}from"./chunk-5CMEBAZF.js";import"./chunk-ZRHV3LXB.js";import"./chunk-SBTJKJNK.js";import{c as W,e as $,o as q}from"./chunk-SPNNO5LP.js";import{d as H,s as X}from"./chunk-E6ZKMAWP.js";import{$b as b,Bb as y,Dc as O,Ec as L,Fa as _,Ga as u,Gc as F,Ib as c,Pa as C,Rc as j,Rd as N,S as D,Sd as z,Td as J,Vb as m,Wb as h,Xb as B,Yb as T,Zb as E,cc as S,dc as a,fb as V,g as v,ib as x,id as M,lb as l,oc as g,pc as w,qa as n,qc as I,sd as P,va as R,xc as U,zc as K}from"./chunk-2LHIXASS.js";var de=o=>({num:o});function he(o,s){if(o&1){let i=b();m(0,"app-card-item",9),S("clicked",function(){let t=_(i).$implicit,r=a(3);return u(r.viewBookmarks(t))})("selection",function(t){let r=_(i).idx,f=a(3);return u(f.bulkSelectionService.handleCardSelection("bookmark",r,f.series.length,t))}),h()}if(o&2){let i=s.$implicit,e=s.idx,t=a(3);c("entity",i)("title",i.name)("imageUrl",t.imageService.getSeriesCoverImage(i.id))("suppressArchiveWarning",!0)("count",t.seriesIds[i.id])("allowSelection",!0)("actions",t.actions)("selected",t.bulkSelectionService.isCardSelected("bookmark",e))}}function ke(o,s){if(o&1&&(g(0),m(1,"a",10),g(2),B(3,"i",11),h()),o&2){let i=a(2).$implicit,e=a();I(" ",i("no-data")," "),l(),c("href",e.WikiLink.Bookmarks,V),l(),w(i("no-data-2"))}}function fe(o,s){if(o&1){let i=b();m(0,"app-card-detail-layout",8),S("applyFilter",function(t){_(i);let r=a(2);return u(r.updateFilter(t))}),y(1,he,1,8,"ng-template",null,0,F)(3,ke,4,3,"ng-template",null,1,F),h()}if(o&2){let i=a(2);c("isLoading",i.loadingBookmarks)("items",i.series)("filterSettings",i.filterSettings)("trackByIdentity",i.trackByIdentity)("refresh",i.refresh)("jumpBarKeys",i.jumpbarKeys)}}function _e(o,s){if(o&1){let i=b();T(0),m(1,"app-side-nav-companion-bar",3),S("filterOpen",function(t){_(i);let r=a();return u(r.filterOpen.emit(t))}),m(2,"h2",4),g(3),h(),m(4,"h6",5),g(5),O(6,"number"),h()(),B(7,"app-bulk-operations",6),y(8,fe,5,6,"app-card-detail-layout",7),E()}if(o&2){let i=s.$implicit,e=a();l(),c("hasFilter",!0)("filterActive",e.filterActive),l(2),I(" ",i("title")," "),l(2),w(i("series-count",K(8,de,L(6,6,e.series.length)))),l(2),c("actionCallback",e.bulkActionCallback),l(),c("ngIf",e.filter)}}var me=(()=>{let s=class s{constructor(){this.translocoService=n(z),this.readerService=n(ee),this.downloadService=n(ie),this.toastr=n(X),this.confirmService=n(q),this.actionFactoryService=n(Q),this.router=n($),this.cdRef=n(j),this.filterUtilityService=n(oe),this.route=n(W),this.jumpbarService=n(ae),this.titleService=n(H),this.bulkSelectionService=n(te),this.imageService=n(G),this.WikiLink=Y,this.bookmarks=[],this.series=[],this.loadingBookmarks=!1,this.seriesIds={},this.clearingSeries={},this.actions=[],this.jumpbarKeys=[],this.pagination=new Z,this.filter=void 0,this.filterSettings=new le,this.filterOpen=new C,this.filterActive=!1,this.trackByIdentity=(e,t)=>`${t.name}_${t.localizedName}_${t.pagesRead}`,this.refresh=new C,this.bulkActionCallback=(e,t)=>v(this,null,function*(){let r=this.bulkSelectionService.getSelectedCardsForSource("bookmark"),p=this.series.filter((d,pe)=>r.includes(pe+"")).map(d=>d.id);switch(e.action){case k.DownloadBookmark:this.downloadService.download("bookmark",this.bookmarks.filter(d=>p.includes(d.seriesId)),d=>{d||this.bulkSelectionService.deselectAll()});break;case k.Delete:if(!(yield this.confirmService.confirm(this.translocoService.translate("bookmarks.confirm-delete"))))break;this.readerService.clearMultipleBookmarks(p).subscribe(()=>{this.toastr.success(this.translocoService.translate("bookmarks.delete-success")),this.bulkSelectionService.deselectAll(),this.loadPage()});break;default:break}}),this.filterUtilityService.filterPresetsFromUrl(this.route.snapshot).subscribe(e=>{this.filter=e,this.filterActiveCheck=this.filterUtilityService.createSeriesV2Filter(),this.filterActiveCheck.statements.push(this.filterUtilityService.createSeriesV2DefaultStatement()),this.filterSettings.presetsV2=this.filter,this.filterSettings.statementLimit=1,this.cdRef.markForCheck()}),this.titleService.setTitle("Kavita - "+N("bookmarks.title"))}ngOnInit(){this.actions=this.actionFactoryService.getBookmarkActions(this.handleAction.bind(this))}handleKeypress(e){e.key===A.SHIFT&&(this.bulkSelectionService.isShiftDown=!0)}handleKeyUp(e){e.key===A.SHIFT&&(this.bulkSelectionService.isShiftDown=!1)}handleAction(e,t){return v(this,null,function*(){switch(e.action){case k.Delete:this.clearBookmarks(t);break;case k.DownloadBookmark:this.downloadBookmarks(t);break;case k.ViewSeries:this.router.navigate(["library",t.libraryId,"series",t.id]);break;default:break}})}loadPage(){this.loadingBookmarks=!0,this.cdRef.markForCheck(),this.readerService.getAllBookmarks(this.filter).pipe(D(1)).subscribe(e=>{this.bookmarks=e,this.bookmarks.forEach(r=>{this.clearingSeries[r.seriesId]=!1,this.seriesIds.hasOwnProperty(r.seriesId)||(this.seriesIds[r.seriesId]=0),this.seriesIds[r.seriesId]+=1});let t=new Map;this.bookmarks.forEach(r=>{t.set(r.series.id,r.series)}),this.series=Array.from(t.values()),this.jumpbarKeys=this.jumpbarService.getJumpKeys(this.series,r=>r.name),this.loadingBookmarks=!1,this.cdRef.markForCheck()})}viewBookmarks(e){this.router.navigate(["library",e.libraryId,"series",e.id,"manga",0],{queryParams:{incognitoMode:!1,bookmarkMode:!0}})}clearBookmarks(e){return v(this,null,function*(){(yield this.confirmService.confirm(this.translocoService.translate("bookmarks.confirm-single-delete",{seriesName:e.name})))&&(this.clearingSeries[e.id]=!0,this.cdRef.markForCheck(),this.readerService.clearBookmarks(e.id).subscribe(()=>{let t=this.series.indexOf(e);t>-1&&this.series.splice(t,1),this.clearingSeries[e.id]=!1,this.toastr.success(this.translocoService.translate("delete-single-success",{seriesName:e.name})),this.refresh.emit(),this.cdRef.markForCheck()}))})}downloadBookmarks(e){this.downloadService.download("bookmark",this.bookmarks.filter(t=>t.seriesId===e.id))}updateFilter(e){if(e.filterV2!==void 0){if(this.filter=e.filterV2,e.isFirst){this.loadPage();return}this.filterUtilityService.updateUrlFromFilter(this.filter).subscribe(t=>{this.loadPage()})}}};s.\u0275fac=function(t){return new(t||s)},s.\u0275cmp=R({type:s,selectors:[["app-bookmarks"]],hostBindings:function(t,r){t&1&&S("keydown.shift",function(p){return r.handleKeypress(p)},!1,x)("keyup.shift",function(p){return r.handleKeyUp(p)},!1,x)},standalone:!0,features:[U],decls:1,vars:1,consts:[["cardItem",""],["noData",""],[4,"transloco","translocoRead"],[3,"filterOpen","hasFilter","filterActive"],["title",""],["subtitle",""],[3,"actionCallback"],[3,"isLoading","items","filterSettings","trackByIdentity","refresh","jumpBarKeys","applyFilter",4,"ngIf"],[3,"applyFilter","isLoading","items","filterSettings","trackByIdentity","refresh","jumpBarKeys"],[3,"clicked","selection","entity","title","imageUrl","suppressArchiveWarning","count","allowSelection","actions","selected"],["rel","noopener noreferrer","target","_blank",3,"href"],["aria-hidden","true",1,"fa","fa-external-link-alt","ms-1"]],template:function(t,r){t&1&&y(0,_e,9,10,"ng-container",2),t&2&&c("translocoRead","bookmarks")},dependencies:[se,ne,ce,re,P,J,M],styles:["/*# sourceMappingURL=bookmarks.component-RISWOXWZ.css.map */"],changeDetection:0});let o=s;return o})();var Je=[{path:"",component:me,pathMatch:"full"}];export{Je as routes};
//# sourceMappingURL=chunk-5D3NDSFD.js.map
