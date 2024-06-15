import{q as ne}from"./chunk-SPNNO5LP.js";import{s as ie}from"./chunk-E6ZKMAWP.js";import{$ as S,$b as M,$d as y,Ae as te,Bb as w,Dc as $,Ec as G,Fa as h,Ga as g,Gc as j,Ib as l,Jd as E,Kb as v,Na as T,Rc as O,Rd as B,Td as L,Vb as d,Wb as o,Xb as C,Yb as x,Zb as b,_d as Z,be as z,cc as P,ce as J,dc as c,de as K,fe as F,hd as H,he as Q,id as U,lb as i,mb as f,me as X,ne as Y,oc as p,od as W,pc as u,qa as k,qc as _,tc as D,u as I,uc as N,va as R,vc as q,xc as A,z as V,ze as ee}from"./chunk-2LHIXASS.js";function re(e,s){e&1&&(x(0),d(1,"div",27)(2,"span",28),p(3,"***************"),o()(),b())}function oe(e,s){if(e&1&&(d(0,"div"),p(1),o()),e&2){let t=s.$implicit;i(),u(t)}}function ae(e,s){if(e&1&&(d(0,"div",29),w(1,oe,2,1,"div",30),o()),e&2){let t=c(2);i(),l("ngForOf",t.resetPasswordErrors)}}function se(e,s){if(e&1&&(d(0,"div"),p(1),o()),e&2){let t=c(2).$implicit;i(),_(" ",t("required-field")," ")}}function de(e,s){if(e&1&&(d(0,"div",31),w(1,se,2,1,"div",10),o()),e&2){let t,n=c(2);i(),l("ngIf",(t=n.passwordChangeForm.get("oldPassword"))==null||t.errors==null?null:t.errors.required)}}function le(e,s){if(e&1&&(d(0,"div"),p(1),o()),e&2){let t=c(2).$implicit;i(),_(" ",t("required-field")," ")}}function ce(e,s){if(e&1&&(d(0,"div",32),w(1,le,2,1,"div",10),o()),e&2){let t=c(2);i(),l("ngIf",t.password==null||t.password.errors==null?null:t.password.errors.required)}}function pe(e,s){if(e&1&&(d(0,"div"),p(1),o()),e&2){let t=c(2).$implicit;i(),_(" ",t("passwords-must-match")," ")}}function me(e,s){if(e&1&&(d(0,"div"),p(1),o()),e&2){let t=c(2).$implicit;i(),_(" ",t("required-field")," ")}}function we(e,s){if(e&1&&(d(0,"div",33),w(1,pe,2,1,"div",10)(2,me,2,1,"div",10),o()),e&2){let t=c(2);i(),l("ngIf",!t.passwordsMatch),i(),l("ngIf",t.confirmPassword==null||t.confirmPassword.errors==null?null:t.confirmPassword.errors.required)}}function ue(e,s){if(e&1&&(d(0,"p"),p(1),o()),e&2){let t=c().$implicit;i(),u(t("permission-error"))}}function he(e,s){if(e&1){let t=M();x(0),d(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"div",7)(6,"h4"),p(7),o()(),d(8,"div",8)(9,"button",9),$(10,"async"),P("click",function(){h(t);let r=c();return g(r.toggleViewMode())}),p(11),o()()()(),w(12,re,4,0,"ng-container",10),d(13,"div",11,0),q("ngbCollapseChange",function(r){h(t);let m=c();return N(m.isViewMode,r)||(m.isViewMode=r),g(r)}),x(15),w(16,ae,2,1,"div",12),d(17,"form",13)(18,"div",14)(19,"label",15),p(20),o(),C(21,"input",16),w(22,de,2,1,"div",17),o(),d(23,"div",14)(24,"label",18),p(25),o(),C(26,"input",19),w(27,ce,2,1,"div",20),o(),d(28,"div",14)(29,"label",21),p(30),o(),C(31,"input",22),w(32,we,3,2,"div",23),o(),d(33,"div",24)(34,"button",25),P("click",function(){h(t);let r=c();return g(r.resetPasswordForm())}),p(35),o(),d(36,"button",26),P("click",function(){h(t);let r=c();return g(r.savePasswordForm())}),p(37),o()()(),b(),w(38,ue,2,1,"ng-template",null,1,j),o()()(),b()}if(e&2){let t,n,r,m=s.$implicit,a=c();i(7),u(m("password-label")),i(2),l("disabled",!G(10,22,a.hasChangePasswordAbility)),i(2),u(a.isViewMode?m("edit"):m("cancel")),i(),l("ngIf",a.isViewMode),i(),D("ngbCollapse",a.isViewMode),i(3),l("ngIf",a.resetPasswordErrors.length>0),i(),l("formGroup",a.passwordChangeForm),i(3),u(m("current-password-label")),i(),v("is-invalid",((t=a.passwordChangeForm.get("oldPassword"))==null?null:t.invalid)&&((t=a.passwordChangeForm.get("oldPassword"))==null?null:t.touched)),i(),l("ngIf",a.passwordChangeForm.dirty||a.passwordChangeForm.touched),i(3),u(m("new-password-label")),i(),v("is-invalid",((n=a.passwordChangeForm.get("password"))==null?null:n.invalid)&&((n=a.passwordChangeForm.get("password"))==null?null:n.touched)),i(),l("ngIf",a.passwordChangeForm.dirty||a.passwordChangeForm.touched),i(3),u(m("confirm-password-label")),i(),v("is-invalid",((r=a.passwordChangeForm.get("confirmPassword"))==null?null:r.invalid)&&((r=a.passwordChangeForm.get("confirmPassword"))==null?null:r.touched)),i(),l("ngIf",a.passwordChangeForm.dirty||a.passwordChangeForm.touched),i(3),u(m("reset")),i(),l("disabled",!a.passwordChangeForm.valid||!(a.passwordChangeForm.dirty||a.passwordChangeForm.touched)),i(),u(m("save"))}}var Ve=(()=>{let s=class s{get password(){return this.passwordChangeForm.get("password")}get confirmPassword(){return this.passwordChangeForm.get("confirmPassword")}constructor(n,r,m){this.accountService=n,this.toastr=r,this.cdRef=m,this.passwordChangeForm=new K({}),this.user=void 0,this.hasChangePasswordAbility=I(!1),this.observableHandles=[],this.passwordsMatch=!1,this.resetPasswordErrors=[],this.isViewMode=!0,this.destroyRef=k(T)}ngOnInit(){this.accountService.currentUser$.pipe(E(this.destroyRef),S()).subscribe(n=>{this.user=n,this.cdRef.markForCheck()}),this.hasChangePasswordAbility=this.accountService.currentUser$.pipe(E(this.destroyRef),S(),V(n=>n!==void 0&&!this.accountService.hasReadOnlyRole(n)&&(this.accountService.hasAdminRole(n)||this.accountService.hasChangePasswordRole(n)))),this.cdRef.markForCheck(),this.passwordChangeForm.addControl("password",new F("",[y.required])),this.passwordChangeForm.addControl("confirmPassword",new F("",[y.required])),this.passwordChangeForm.addControl("oldPassword",new F("",[y.required])),this.observableHandles.push(this.passwordChangeForm.valueChanges.subscribe(()=>{let n=this.passwordChangeForm.value;this.passwordsMatch=n.password===n.confirmPassword,this.cdRef.markForCheck()}))}ngOnDestroy(){this.observableHandles.forEach(n=>n.unsubscribe())}resetPasswordForm(){this.passwordChangeForm.get("password")?.setValue(""),this.passwordChangeForm.get("confirmPassword")?.setValue(""),this.passwordChangeForm.get("oldPassword")?.setValue(""),this.resetPasswordErrors=[],this.cdRef.markForCheck()}savePasswordForm(){if(this.user===void 0)return;let n=this.passwordChangeForm.value;this.resetPasswordErrors=[],this.observableHandles.push(this.accountService.resetPassword(this.user?.username,n.confirmPassword,n.oldPassword).subscribe(()=>{this.toastr.success(B("toasts.password-updated")),this.resetPasswordForm(),this.isViewMode=!0},r=>{this.resetPasswordErrors=r}))}toggleViewMode(){this.isViewMode=!this.isViewMode,this.resetPasswordForm()}};s.\u0275fac=function(r){return new(r||s)(f(ne),f(ie),f(O))},s.\u0275cmp=R({type:s,selectors:[["app-change-password"]],standalone:!0,features:[A],decls:1,vars:1,consts:[["collapse","ngbCollapse"],["noPermission",""],[4,"transloco","translocoRead"],[1,"card","mt-2"],[1,"card-body"],[1,"card-title"],[1,"container-fluid","row","mb-2"],[1,"col-10","col-sm-11"],[1,"col-1","text-end"],[1,"btn","btn-primary","btn-sm",3,"click","disabled"],[4,"ngIf"],[3,"ngbCollapseChange","ngbCollapse"],["class","alert alert-danger","role","alert",4,"ngIf"],[3,"formGroup"],[1,"mb-3"],["for","oldpass",1,"form-label"],["type","password","id","oldpass","formControlName","oldPassword","autocomplete","current-password",1,"form-control","custom-input"],["id","inviteForm-validations","class","invalid-feedback",4,"ngIf"],["for","new-password"],["type","password","id","new-password","formControlName","password","aria-describedby","new-password-validations","autocomplete","new-password",1,"form-control"],["id","new-password-validations","class","invalid-feedback",4,"ngIf"],["for","confirm-password"],["type","password","id","confirm-password","formControlName","confirmPassword","aria-describedby","confirm-password-validations","autocomplete","new-password",1,"form-control"],["id","confirm-password-validations","class","invalid-feedback",4,"ngIf"],[1,"col-auto","d-flex","d-md-block","justify-content-sm-center","text-md-end","mb-3"],["type","button","aria-describedby","password-panel",1,"flex-fill","btn","btn-secondary","me-2",3,"click"],["type","submit","aria-describedby","password-panel",1,"flex-fill","btn","btn-primary",3,"click","disabled"],[1,"container-fluid","row"],[1,"col-12"],["role","alert",1,"alert","alert-danger"],[4,"ngFor","ngForOf"],["id","inviteForm-validations",1,"invalid-feedback"],["id","new-password-validations",1,"invalid-feedback"],["id","confirm-password-validations",1,"invalid-feedback"]],template:function(r,m){r&1&&w(0,he,40,24,"ng-container",2),r&2&&l("translocoRead","change-password")},dependencies:[U,te,H,ee,Q,Z,z,J,X,Y,W,L],styles:["/*# sourceMappingURL=change-password.component-2ZNSGTCD.css.map */"],changeDetection:0});let e=s;return e})();export{Ve as ChangePasswordComponent};
//# sourceMappingURL=chunk-MYEAJL5E.js.map
