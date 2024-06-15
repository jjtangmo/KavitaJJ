import{a as Me}from"./chunk-7UPYM5OM.js";import{a as W,b as w,c as S}from"./chunk-3BBJCVEK.js";import{l as P,p as Te,q as Fe}from"./chunk-SPNNO5LP.js";import{$b as z,Bb as f,Be as ke,Ce as xe,Dc as Y,De as _e,Ec as q,Ee as we,Fa as R,Fb as I,Fe as Se,Ga as C,Gc as D,Ge as Re,Ib as c,Jd as k,Na as j,Nb as N,Ob as K,Pa as y,Rc as Q,S as U,Td as ie,Vb as o,Wb as i,Xb as g,Yb as B,Zb as L,Zd as ae,_b as F,_c as X,_d as le,be as ce,bf as Ce,cc as M,ce as de,dc as m,de as se,eb as G,fe as x,gc as V,gd as Z,hd as ee,he as be,id as te,je as pe,ke as me,lb as e,mb as T,md as oe,me as ge,nc as _,nd as re,ne as he,oc as l,oe as ue,pc as h,pd as ne,pe as fe,qa as H,qc as v,qe as ve,va as $,xc as J,zc as A,ze as ye}from"./chunk-2LHIXASS.js";var De=`
:root .brtheme-black {
  /* General */
  --color-scheme: dark;
  --bs-body-color: black;
  --hr-color: rgba(239, 239, 239, 0.125);
  --accent-bg-color: rgba(1, 4, 9, 0.5);
  --accent-text-color: lightgrey;
  --body-text-color: #efefef;
  --btn-icon-filter: invert(1) grayscale(100%) brightness(200%);

  /* Drawer */
  --drawer-bg-color: #292929;
  --drawer-text-color: white;
  --drawer-pagination-horizontal-rule: inset 0 -1px 0 rgb(255 255 255 / 20%);
  --drawer-pagination-border: 1px solid rgb(0 0 0 / 13%);
  

  /* Accordion */
  --accordion-header-text-color: rgba(74, 198, 148, 0.9);
  --accordion-header-bg-color: rgba(52, 60, 70, 0.5);
  --accordion-body-bg-color: #292929;
  --accordion-body-border-color: rgba(239, 239, 239, 0.125);
  --accordion-body-text-color: var(--body-text-color);
  --accordion-header-collapsed-text-color: rgba(74, 198, 148, 0.9);
  --accordion-header-collapsed-bg-color: #292929;
  --accordion-button-focus-border-color: unset;
  --accordion-button-focus-box-shadow: unset;
  --accordion-active-body-bg-color: #292929;

  /* Buttons */
    --btn-focus-boxshadow-color: rgb(255 255 255 / 50%);
    --btn-primary-text-color: white;
    --btn-primary-bg-color: var(--primary-color);
    --btn-primary-border-color: var(--primary-color);
    --btn-primary-hover-text-color: white;
    --btn-primary-hover-bg-color: var(--primary-color-darker-shade);
    --btn-primary-hover-border-color: var(--primary-color-darker-shade);
    --btn-alt-bg-color: #424c72;
    --btn-alt-border-color: #444f75;
    --btn-alt-hover-bg-color: #3b4466;
    --btn-alt-focus-bg-color: #343c59;
    --btn-alt-focus-boxshadow-color: rgb(255 255 255 / 50%);
    --btn-fa-icon-color: white;
    --btn-disabled-bg-color: #343a40;
    --btn-disabled-text-color: white;
    --btn-disabled-border-color: #6c757d;

    /* Inputs */
    --input-bg-color: #343a40;
    --input-bg-readonly-color: #434648;
    --input-focused-border-color: #ccc;
    --input-text-color: #fff;
    --input-placeholder-color: #aeaeae;
    --input-border-color: #ccc;
    --input-focus-boxshadow-color: rgb(255 255 255 / 50%);

    /* Nav (Tabs) */
    --nav-tab-border-color: rgba(44, 118, 88, 0.7);
    --nav-tab-text-color: var(--body-text-color);
    --nav-tab-bg-color: var(--primary-color);
    --nav-tab-hover-border-color: var(--primary-color);
    --nav-tab-active-text-color: white;
    --nav-tab-border-hover-color: transparent;
    --nav-tab-hover-text-color: var(--body-text-color);
    --nav-tab-hover-bg-color: transparent;
    --nav-tab-border-top: rgba(44, 118, 88, 0.7);
    --nav-tab-border-left: rgba(44, 118, 88, 0.7);
    --nav-tab-border-bottom: rgba(44, 118, 88, 0.7);
    --nav-tab-border-right: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-top: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-left: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-bottom: var(--bs-body-bg);
    --nav-tab-hover-border-right: rgba(44, 118, 88, 0.7);
    --nav-tab-active-hover-bg-color: var(--primary-color);
    --nav-link-bg-color: var(--primary-color);
    --nav-link-active-text-color: white;
    --nav-link-text-color: white;



  /* Reading Bar */
  --br-actionbar-button-text-color: white;
  --br-actionbar-button-hover-border-color: #6c757d;
  --br-actionbar-bg-color: black;
}



.book-content *:not(input), .book-content *:not(select), .book-content *:not(code), .book-content *:not(:link), .book-content *:not(.ngx-toastr) {
  color: #dcdcdc !important;
}

.book-content code {
  color: #e83e8c !important;
}

.book-content :link, .book-content a {
  color: #8db2e5 !important;
}

.book-content img, .book-content img[src] {
z-index: 1;
filter: brightness(0.85) !important;
background-color: initial !important;
}

.reader-container {
  color: #dcdcdc !important;
  background-image: none !important;
  background-color: black !important;
}

.book-content *:not(code), .book-content *:not(a) {
    background-color: black;
    box-shadow: none;
    text-shadow: none;
    border-radius: unset;
    color: #dcdcdc !important;
}
  
.book-content :visited, .book-content :visited *, .book-content :visited *[class] {color: rgb(211, 138, 138) !important}
.book-content :link:not(cite), :link .book-content *:not(cite) {color: #8db2e5 !important}
`;var Ee=`
:root .brtheme-dark {
  /* General */
  --color-scheme: dark;
  --bs-body-color: #292929;
  --hr-color: rgba(239, 239, 239, 0.125);
  --accent-bg-color: rgba(1, 4, 9, 0.5);
  --accent-text-color: lightgrey;
  --body-text-color: #efefef;
  --btn-icon-filter: invert(1) grayscale(100%) brightness(200%);

  /* Drawer */
  --drawer-bg-color: #292929;
  --drawer-text-color: white;
  --drawer-pagination-horizontal-rule: inset 0 -1px 0 rgb(255 255 255 / 20%);
  --drawer-pagination-border: 1px solid rgb(0 0 0 / 13%);

  /* Accordion */
  --accordion-header-text-color: rgba(74, 198, 148, 0.9);
  --accordion-header-bg-color: rgba(52, 60, 70, 0.5);
  --accordion-body-bg-color: #292929;
  --accordion-body-border-color: rgba(239, 239, 239, 0.125);
  --accordion-body-text-color: var(--body-text-color);
  --accordion-header-collapsed-text-color: rgba(74, 198, 148, 0.9);
  --accordion-header-collapsed-bg-color: #292929;
  --accordion-button-focus-border-color: unset;
  --accordion-button-focus-box-shadow: unset;
  --accordion-active-body-bg-color: #292929;

  /* Buttons */
    --btn-focus-boxshadow-color: rgb(255 255 255 / 50%);
    --btn-primary-text-color: white;
    --btn-primary-bg-color: var(--primary-color);
    --btn-primary-border-color: var(--primary-color);
    --btn-primary-hover-text-color: white;
    --btn-primary-hover-bg-color: var(--primary-color-darker-shade);
    --btn-primary-hover-border-color: var(--primary-color-darker-shade);
    --btn-alt-bg-color: #424c72;
    --btn-alt-border-color: #444f75;
    --btn-alt-hover-bg-color: #3b4466;
    --btn-alt-focus-bg-color: #343c59;
    --btn-alt-focus-boxshadow-color: rgb(255 255 255 / 50%);
    --btn-fa-icon-color: white;
    --btn-disabled-bg-color: #343a40;
    --btn-disabled-text-color: white;
    --btn-disabled-border-color: #6c757d;

    /* Inputs */
    --input-bg-color: #343a40;
    --input-bg-readonly-color: #434648;
    --input-focused-border-color: #ccc;
    --input-text-color: #fff;
    --input-placeholder-color: #aeaeae;
    --input-border-color: #ccc;
    --input-focus-boxshadow-color: rgb(255 255 255 / 50%);

    /* Nav (Tabs) */
    --nav-tab-border-color: rgba(44, 118, 88, 0.7);
    --nav-tab-text-color: var(--body-text-color);
    --nav-tab-bg-color: var(--primary-color);
    --nav-tab-hover-border-color: var(--primary-color);
    --nav-tab-active-text-color: white;
    --nav-tab-border-hover-color: transparent;
    --nav-tab-hover-text-color: var(--body-text-color);
    --nav-tab-hover-bg-color: transparent;
    --nav-tab-border-top: rgba(44, 118, 88, 0.7);
    --nav-tab-border-left: rgba(44, 118, 88, 0.7);
    --nav-tab-border-bottom: rgba(44, 118, 88, 0.7);
    --nav-tab-border-right: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-top: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-left: rgba(44, 118, 88, 0.7);
    --nav-tab-hover-border-bottom: var(--bs-body-bg);
    --nav-tab-hover-border-right: rgba(44, 118, 88, 0.7);
    --nav-tab-active-hover-bg-color: var(--primary-color);
    --nav-link-bg-color: var(--primary-color);
    --nav-link-active-text-color: white;
    --nav-link-text-color: white;

    /* Checkboxes/Switch */
    --checkbox-checked-bg-color: var(--primary-color);
    --checkbox-border-color: var(--input-focused-border-color);
    --checkbox-focus-border-color: var(--primary-color);
    --checkbox-focus-boxshadow-color: rgb(255 255 255 / 50%);



    /* Reading Bar */
    --br-actionbar-button-text-color: white;
    --br-actionbar-button-hover-border-color: #6c757d;
    --br-actionbar-bg-color: black;
    
}



.book-content *:not(input), .book-content *:not(select), .book-content *:not(code), .book-content *:not(:link), .book-content *:not(.ngx-toastr) {
  color: #dcdcdc !important;
}

.book-content code {
  color: #e83e8c !important;
}

.book-content :link, .book-content a {
  color: #8db2e5 !important;
}

.book-content img, .book-content img[src] {
z-index: 1;
filter: brightness(0.85) !important;
background-color: initial !important;
}

.reader-container {
  color: #dcdcdc !important;
  background-image: none !important;
  background-color: #292929 !important;
}

.book-content *:not(code), .book-content *:not(a) {
    background-color: #292929;
    box-shadow: none;
    text-shadow: none;
    border-radius: unset;
    color: #dcdcdc !important;
}
  
.book-content :visited, .book-content :visited *, .book-content :visited *[class] {color: rgb(211, 138, 138) !important}
.book-content :link:not(cite), :link .book-content *:not(cite) {color: #8db2e5 !important}

`;var Ie=`
  :root .brtheme-white {
    --drawer-text-color: white;
    --br-actionbar-bg-color: white;
    --bs-btn-active-color: black;
    --progress-bg-color: rgb(222, 226, 230);

    /* General */
    --color-scheme: light;
    --bs-body-color: black;
    --hr-color: rgba(239, 239, 239, 0.125);
    --accent-bg-color: rgba(1, 4, 9, 0.5);
    --accent-text-color: lightgrey;
    --body-text-color: black;
    --btn-icon-filter: invert(1) grayscale(100%) brightness(200%);

    /* Drawer */
    --drawer-bg-color: white;
    --drawer-text-color: black;
    --drawer-pagination-horizontal-rule: inset 0 -1px 0 rgb(255 255 255 / 20%);
    --drawer-pagination-border: 1px solid rgb(0 0 0 / 13%);


    /* Accordion */
    --accordion-header-text-color: rgba(74, 198, 148, 0.9);
    --accordion-header-bg-color: rgba(52, 60, 70, 0.5);
    --accordion-body-bg-color: white;
    --accordion-body-border-color: rgba(239, 239, 239, 0.125);
    --accordion-body-text-color: var(--body-text-color);
    --accordion-header-collapsed-text-color: rgba(74, 198, 148, 0.9);
    --accordion-header-collapsed-bg-color: white;
    --accordion-button-focus-border-color: unset;
    --accordion-button-focus-box-shadow: unset;
    --accordion-active-body-bg-color: white;

    /* Buttons */
      --btn-focus-boxshadow-color: rgb(255 255 255 / 50%);
      --btn-primary-text-color: white;
      --btn-primary-bg-color: var(--primary-color);
      --btn-primary-border-color: var(--primary-color);
      --btn-primary-hover-text-color: white;
      --btn-primary-hover-bg-color: var(--primary-color-darker-shade);
      --btn-primary-hover-border-color: var(--primary-color-darker-shade);
      --btn-alt-bg-color: #424c72;
      --btn-alt-border-color: #444f75;
      --btn-alt-hover-bg-color: #3b4466;
      --btn-alt-focus-bg-color: #343c59;
      --btn-alt-focus-boxshadow-color: rgb(255 255 255 / 50%);
      --btn-fa-icon-color: black;
      --btn-disabled-bg-color: #343a40;
      --btn-disabled-text-color: #efefef;
      --btn-disabled-border-color: #6c757d;

      /* Inputs */
      --input-bg-color: white;
      --input-bg-readonly-color: white;
      --input-focused-border-color: #ccc;
      --input-text-color: black;
      --input-placeholder-color: black;
      --input-border-color: #ccc;
      --input-focus-boxshadow-color: rgb(255 255 255 / 50%);

      /* Nav (Tabs) */
      --nav-tab-border-color: rgba(44, 118, 88, 0.7);
      --nav-tab-text-color: var(--body-text-color);
      --nav-tab-bg-color: var(--primary-color);
      --nav-tab-hover-border-color: var(--primary-color);
      --nav-tab-active-text-color: white;
      --nav-tab-border-hover-color: transparent;
      --nav-tab-hover-text-color: var(--body-text-color);
      --nav-tab-hover-bg-color: transparent;
      --nav-tab-border-top: rgba(44, 118, 88, 0.7);
      --nav-tab-border-left: rgba(44, 118, 88, 0.7);
      --nav-tab-border-bottom: rgba(44, 118, 88, 0.7);
      --nav-tab-border-right: rgba(44, 118, 88, 0.7);
      --nav-tab-hover-border-top: rgba(44, 118, 88, 0.7);
      --nav-tab-hover-border-left: rgba(44, 118, 88, 0.7);
      --nav-tab-hover-border-bottom: var(--bs-body-bg);
      --nav-tab-hover-border-right: rgba(44, 118, 88, 0.7);
      --nav-tab-active-hover-bg-color: var(--primary-color);
      --nav-link-bg-color: var(--primary-color);
      --nav-link-active-text-color: white;
      --nav-link-text-color: white;



    /* Reading Bar */
    --br-actionbar-button-text-color: black;
    --br-actionbar-button-hover-border-color: #6c757d;
    --br-actionbar-bg-color: white;

    /* Drawer */
    --drawer-pagination-horizontal-rule: inset 0 -1px 0 rgb(0 0 0 / 13%);
    --drawer-pagination-border: 1px solid rgb(0 0 0 / 13%);
}

.reader-container {
  color: black !important;
  background-image: none !important;
  background-color: white !important;
}


.book-content *:not(input), .book-content *:not(select), .book-content *:not(code), .book-content *:not(:link), .book-content *:not(.ngx-toastr) {
  color: black !important;
}

.book-content code {
  color: #e83e8c !important;
}

.book-content :link, .book-content a {
  color: #8db2e5 !important;
}

.book-content img, .book-content img[src] {
z-index: 1;
filter: brightness(0.85) !important;
background-color: initial !important;
}


.book-content *:not(code), .book-content *:not(a) {
    background-color: white;
    box-shadow: none;
    text-shadow: none;
    border-radius: unset;
    color: #dcdcdc !important;
}

.book-content :visited, .book-content :visited *, .book-content :visited *[class] {color: rgb(240, 50, 50) !important}
.book-content :link:not(cite), :link .book-content *:not(cite) {color: #00f !important}

.btn-check:checked + .btn {
  color: white;
  background-color: var(--primary-color);
}

`;var Pe=`
  :root .brtheme-paper {
    --drawer-text-color: white;
    --br-actionbar-bg-color: white;
    --bs-btn-active-color: black;
    --progress-bg-color: rgb(222, 226, 230);

    /* General */
    --color-scheme: light;
    --bs-body-color: black;
    --hr-color: rgba(239, 239, 239, 0.125);
    --accent-bg-color: rgba(1, 4, 9, 0.5);
    --accent-text-color: lightgrey;
    --body-text-color: black;
    --btn-icon-filter: invert(1) grayscale(100%) brightness(200%);

    /* Drawer */
    --drawer-bg-color: #F1E4D5;
    --drawer-text-color: black;
    --drawer-pagination-horizontal-rule: inset 0 -1px 0 rgb(255 255 255 / 20%);


    /* Accordion */
    --accordion-header-bg-color: rgba(52, 60, 70, 0.5);
    --accordion-body-bg-color: #F1E4D5;
    --accordion-body-border-color: rgba(239, 239, 239, 0.125);
    --accordion-body-text-color: var(--body-text-color);
    --accordion-header-collapsed-bg-color: #F1E4D5;
    --accordion-button-focus-border-color: unset;
    --accordion-button-focus-box-shadow: unset;
    --accordion-active-body-bg-color: #F1E4D5;

    /* Buttons */
      --btn-focus-boxshadow-color: rgb(255 255 255 / 50%);
      --btn-primary-text-color: white;
      --btn-primary-bg-color: var(--primary-color);
      --btn-primary-border-color: var(--primary-color);
      --btn-primary-hover-text-color: white;
      --btn-primary-hover-bg-color: var(--primary-color-darker-shade);
      --btn-primary-hover-border-color: var(--primary-color-darker-shade);
      --btn-alt-bg-color: #424c72;
      --btn-alt-border-color: #444f75;
      --btn-alt-hover-bg-color: #3b4466;
      --btn-alt-focus-bg-color: #343c59;
      --btn-alt-focus-boxshadow-color: rgb(255 255 255 / 50%);
      --btn-fa-icon-color: black;
      --btn-disabled-bg-color: #343a40;
      --btn-disabled-text-color: #efefef;
      --btn-disabled-border-color: #6c757d;

      /* Inputs */
      --input-bg-color: white;
      --input-bg-readonly-color: #F1E4D5;
      --input-focused-border-color: #ccc;
      --input-placeholder-color: black;
      --input-border-color: #ccc;
      --input-text-color: black;
      --input-focus-boxshadow-color: rgb(255 255 255 / 50%);

      /* Nav (Tabs) */
      --nav-tab-border-color: rgba(44, 118, 88, 0.7);
      --nav-tab-text-color: var(--body-text-color);
      --nav-tab-bg-color: var(--primary-color);
      --nav-tab-hover-border-color: var(--primary-color);
      --nav-tab-active-text-color: white;
      --nav-tab-border-hover-color: transparent;
      --nav-tab-hover-text-color: var(--body-text-color);
      --nav-tab-hover-bg-color: transparent;
      --nav-tab-border-top: rgba(44, 118, 88, 0.7);
      --nav-tab-border-left: rgba(44, 118, 88, 0.7);
      --nav-tab-border-bottom: rgba(44, 118, 88, 0.7);
      --nav-tab-border-right: rgba(44, 118, 88, 0.7);
      --nav-tab-hover-border-top: rgba(44, 118, 88, 0.7);
      --nav-tab-hover-border-left: rgba(44, 118, 88, 0.7);
      --nav-tab-hover-border-bottom: var(--bs-body-bg);
      --nav-tab-hover-border-right: rgba(44, 118, 88, 0.7);
      --nav-tab-active-hover-bg-color: var(--primary-color);
      --nav-link-bg-color: var(--primary-color);
      --nav-link-active-text-color: white;
      --nav-link-text-color: white;

    /* Reading Bar */
    --br-actionbar-button-hover-border-color: #6c757d;
    --br-actionbar-bg-color: #F1E4D5;

    /* Drawer */
    --drawer-pagination-horizontal-rule: inset 0 -1px 0 rgb(0 0 0 / 13%);

    /* Custom variables */
    --theme-bg-color: #fff3c9;
}

.reader-container {
  color: black !important;
  background-color: var(--theme-bg-color) !important;
  background: url("assets/images/paper-bg.png");
}

.book-content *:not(input), .book-content *:not(select), .book-content *:not(code), .book-content *:not(:link), .book-content *:not(.ngx-toastr) {
  color: var(--bs-body-color) !important;
}

.book-content code {
  color: #e83e8c !important;
}

// KDB has a reboot style so for lighter themes, this is needed
.book-content kbd {
  background-color: transparent;
}

.book-content :link, .book-content a {
  color: #8db2e5 !important;
}

.book-content img, .book-content img[src] {
z-index: 1;
filter: brightness(0.85) !important;
background-color: initial !important;
}


.book-content *:not(code), .book-content *:not(a), .book-content *:not(kbd) {
    //background-color: #F1E4D5;
    box-shadow: none;
    text-shadow: none;
    border-radius: unset;
    color: #dcdcdc !important;
}

.book-content :visited, .book-content :visited *, .book-content :visited *[class] {color: rgb(240, 50, 50) !important}
.book-content :link:not(cite), :link .book-content *:not(cite) {color: #00f !important}

.btn-check:checked + .btn {
  color: white;
  background-color: var(--primary-color);
}

.reader-container.column-layout-2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  box-shadow: 0px 0px 34.38px 5px rgba(0, 0, 0, 0.43), 0px 0px 6.28px 2px rgba(0, 0, 0, 0.43), 0px 0px 15.7px 4px rgba(0, 0, 0, 0.43), 0px 0px 1.57px 0.3px rgba(0, 0, 0, 0.43);
}

`;var Oe=r=>({active:r}),ze=r=>({"background-color":r});function Ne(r,s){if(r&1&&(o(0,"option",36),l(1),Y(2,"titlecase"),i()),r&2){let n=s.$implicit;c("value",n),e(),h(q(2,2,n))}}function Be(r,s){if(r&1){let n=z();o(0,"div",16)(1,"div",17)(2,"div",18)(3,"label",19),l(4),i(),o(5,"select",20),f(6,Ne,3,4,"option",21),i()()(),o(7,"div",22)(8,"label",23),l(9),i(),o(10,"span",24),g(11,"i",25)(12,"input",26)(13,"i",27),i()(),o(14,"div",22)(15,"label",28),l(16),i(),o(17,"span",24),l(18," 1x "),g(19,"input",29),l(20," 2.5x "),i()(),o(21,"div",22)(22,"label",30),l(23),i(),o(24,"span",24),g(25,"i",31)(26,"input",32)(27,"i",33),i()(),o(28,"div",34)(29,"button",35),M("click",function(){R(n);let t=m(2);return C(t.resetSettings())}),l(30),i()()()}if(r&2){let n,a,t,b=m().$implicit,u=m();e(4),h(b("font-family-label")),e(2),c("ngForOf",u.fontOptions),e(3),h(b("font-size-label")),e(3),c("ngbTooltip",((n=u.settingsForm.get("bookReaderFontSize"))==null?null:n.value)+"%"),e(4),h(b("line-spacing-label")),e(3),c("ngbTooltip",((a=u.settingsForm.get("bookReaderLineSpacing"))==null?null:a.value)+"%"),e(4),h(b("margin-label")),e(3),c("ngbTooltip",((t=u.settingsForm.get("bookReaderMargin"))==null?null:t.value)+"%"),e(4),h(b("reset-to-defaults"))}}function Le(r,s){if(r&1&&l(0),r&2){let n=m(2).$implicit;h(n("writing-style-tooltip"))}}function Ve(r,s){if(r&1&&l(0),r&2){let n=m(2).$implicit;h(n("tap-to-paginate-tooltip"))}}function Ae(r,s){if(r&1&&l(0),r&2){let n=m(2).$implicit;h(n("immersive-mode-tooltip"))}}function We(r,s){if(r&1&&l(0),r&2){let n=m(2).$implicit;h(n("fullscreen-tooltip"))}}function Ue(r,s){if(r&1&&(o(0,"span"),l(1),i()),r&2){let n=m(2).$implicit,a=m();e(),v("\xA0",a.isFullscreen?n("exit"):n("enter"),"")}}function He(r,s){if(r&1&&g(0,"span",71),r&2){let n=m(2).$implicit;c("innerHTML",n("layout-mode-tooltip"),G)}}function $e(r,s){if(r&1){let n=z();o(0,"div",37)(1,"label",38),l(2),i(),o(3,"button",39),M("click",function(){R(n);let t=m(2);return C(t.toggleReadingDirection())}),g(4,"i",40),o(5,"span",41),l(6),i()()(),o(7,"div",37)(8,"label",42),l(9),g(10,"i",43),i(),f(11,Le,1,1,"ng-template",null,1,D),o(13,"span",44),F(14,45),i(),o(15,"button",46),M("click",function(){R(n);let t=m(2);return C(t.toggleWritingStyle())}),g(16,"i",40),o(17,"span",41),l(18),i()()(),o(19,"div",37)(20,"label",47),l(21),g(22,"i",48),i(),f(23,Ve,1,1,"ng-template",null,2,D),o(25,"span",49),F(26,45),i(),o(27,"div",50),g(28,"input",51),o(29,"label"),l(30),i()()(),o(31,"div",37)(32,"label",52),l(33),g(34,"i",53),i(),f(35,Ae,1,1,"ng-template",null,3,D),o(37,"span",54),F(38,45),i(),o(39,"div",50),g(40,"input",55),o(41,"label"),l(42),i()()(),o(43,"div",37)(44,"label",56),l(45),g(46,"i",57),i(),f(47,We,1,1,"ng-template",null,4,D),o(49,"span",58),F(50,45),i(),o(51,"button",59),M("click",function(){R(n);let t=m(2);return C(t.toggleFullscreen())}),g(52,"i",40),f(53,Ue,2,1,"span",60),i()(),o(54,"div",17)(55,"label",61),l(56),g(57,"i",62),i(),f(58,He,1,1,"ng-template",null,5,D),o(60,"span",63),F(61,45),i(),g(62,"br"),o(63,"div",64),g(64,"input",65),o(65,"label",66),l(66),i(),g(67,"input",67),o(68,"label",68),l(69),i(),g(70,"input",69),o(71,"label",70),l(72),i()()()}if(r&2){let n,a,t=_(12),b=_(24),u=_(36),E=_(48),O=_(59),d=m().$implicit,p=m();e(2),h(d("reading-direction-label")),e(),V("title",p.readingDirectionModel===p.ReadingDirection.LeftToRight?d("left-to-right"):d("right-to-left")),e(),N("fa ",p.readingDirectionModel===p.ReadingDirection.LeftToRight?"fa-arrow-right":"fa-arrow-left"," "),e(2),v("\xA0",p.readingDirectionModel===p.ReadingDirection.LeftToRight?d("left-to-right"):d("right-to-left"),""),e(3),h(d("writing-style-label")),e(),c("ngbTooltip",t),e(4),c("ngTemplateOutlet",t),e(),V("title",p.writingStyleModel===p.WritingStyle.Horizontal?d("horizontal"):d("vertical")),e(),N("fa ",p.writingStyleModel===p.WritingStyle.Horizontal?"fa-arrows-left-right":"fa-arrows-up-down",""),e(2),v(" ",p.writingStyleModel===p.WritingStyle.Horizontal?d("horizontal"):d("vertical"),""),e(3),h(d("tap-to-paginate-label")),e(),c("ngbTooltip",b),e(4),c("ngTemplateOutlet",b),e(4),v("",(n=p.settingsForm.get("bookReaderTapToPaginate"))!=null&&n.value?d("on"):d("off")," "),e(3),h(d("immersive-mode-label")),e(),c("ngbTooltip",u),e(4),c("ngTemplateOutlet",u),e(4),v("",(a=p.settingsForm.get("bookReaderImmersiveMode"))!=null&&a.value?d("on"):d("off")," "),e(3),h(d("fullscreen-label")),e(),c("ngbTooltip",E),e(4),c("ngTemplateOutlet",E),e(2),K("fa ",p.isFullscreen?"fa-compress-alt":"fa-expand-alt"," ",p.isFullscreen?"icon-primary-color":"",""),e(),c("ngIf",p.activeTheme==null?null:p.activeTheme.isDarkTheme),e(3),h(d("layout-mode-label")),e(),c("ngbTooltip",O),e(4),c("ngTemplateOutlet",O),e(2),I("aria-label",d("layout-mode-label")),e(),c("value",p.BookPageLayoutMode.Default),e(2),h(d("layout-mode-option-scroll")),e(),c("value",p.BookPageLayoutMode.Column1),e(2),h(d("layout-mode-option-1col")),e(),c("value",p.BookPageLayoutMode.Column2),e(2),h(d("layout-mode-option-2col"))}}function je(r,s){if(r&1){let n=z();B(0),o(1,"button",73),M("click",function(){let t=R(n).$implicit,b=m(3);return C(b.setTheme(t.name))}),g(2,"div",74),l(3),i(),L()}if(r&2){let n=s.$implicit,a=m(2).$implicit,t=m();e(),c("ngClass",A(3,Oe,(t.activeTheme==null?null:t.activeTheme.name)===n.name)),e(),c("ngStyle",A(5,ze,n.colorHash)),e(),v(" ",a(n.translationKey)," ")}}function Ge(r,s){if(r&1&&(o(0,"div",17),f(1,je,4,7,"ng-container",72),i()),r&2){let n=m(2);e(),c("ngForOf",n.themes)}}function Ke(r,s){if(r&1&&(B(0),o(1,"form",7)(2,"div",8,0)(4,"div",9)(5,"h2",10)(6,"button",11),l(7),i()(),o(8,"div",12)(9,"div",13),f(10,Be,31,9,"ng-template"),i()()(),o(11,"div",14)(12,"h2",10)(13,"button",11),l(14),i()(),o(15,"div",12)(16,"div",13),f(17,$e,73,40,"ng-template"),i()()(),o(18,"div",15)(19,"h2",10)(20,"button",11),l(21),i()(),o(22,"div",12)(23,"div",13),f(24,Ge,2,1,"ng-template"),i()()()()(),L()),r&2){let n=s.$implicit,a=_(3),t=m();e(),c("formGroup",t.settingsForm),e(),c("closeOthers",!1),e(2),c("collapsed",!1),e(2),I("aria-expanded",a.isExpanded("general-panel")),e(),v(" ",n("general-settings-title")," "),e(4),c("collapsed",!1),e(2),I("aria-expanded",a.isExpanded("reader-panel")),e(),v(" ",n("reader-settings-title")," "),e(4),c("title",n("color-theme-title"))("collapsed",!1),e(2),I("aria-expanded",a.isExpanded("color-panel")),e(),v(" ",n("color-theme-title")," ")}}var Je=[{name:"Dark",colorHash:"#292929",isDarkTheme:!0,isDefault:!0,provider:P.System,selector:"brtheme-dark",content:Ee,translationKey:"theme-dark"},{name:"Black",colorHash:"#000000",isDarkTheme:!0,isDefault:!1,provider:P.System,selector:"brtheme-black",content:De,translationKey:"theme-black"},{name:"White",colorHash:"#FFFFFF",isDarkTheme:!1,isDefault:!1,provider:P.System,selector:"brtheme-white",content:Ie,translationKey:"theme-white"},{name:"Paper",colorHash:"#F1E4D5",isDarkTheme:!1,isDefault:!1,provider:P.System,selector:"brtheme-paper",content:Pe,translationKey:"theme-paper"}],Ye=700,Ct=(()=>{let s=class s{get BookPageLayoutMode(){return W}get ReadingDirection(){return w}get WritingStyle(){return S}constructor(a,t,b,u,E){this.bookService=a,this.accountService=t,this.document=b,this.themeService=u,this.cdRef=E,this.clickToPaginateChanged=new y,this.styleUpdate=new y,this.colorThemeUpdate=new y,this.layoutModeUpdate=new y,this.fullscreen=new y,this.readingDirection=new y,this.bookReaderWritingStyle=new y,this.immersiveMode=new y,this.fontOptions=[],this.fontFamilies=[],this.readingDirectionModel=w.LeftToRight,this.writingStyleModel=S.Horizontal,this.isFullscreen=!1,this.settingsForm=new se({}),this.themes=Je,this.destroyRef=H(j)}ngOnInit(){this.fontFamilies=this.bookService.getFontFamilies(),this.fontOptions=this.fontFamilies.map(a=>a.title),this.cdRef.markForCheck(),this.accountService.currentUser$.pipe(U(1)).subscribe(a=>{a?(this.user=a,this.user.preferences.bookReaderFontFamily===void 0&&(this.user.preferences.bookReaderFontFamily="default"),(this.user.preferences.bookReaderFontSize===void 0||this.user.preferences.bookReaderFontSize<50)&&(this.user.preferences.bookReaderFontSize=100),(this.user.preferences.bookReaderLineSpacing===void 0||this.user.preferences.bookReaderLineSpacing<100)&&(this.user.preferences.bookReaderLineSpacing=100),this.user.preferences.bookReaderMargin===void 0&&(this.user.preferences.bookReaderMargin=0),this.user.preferences.bookReaderReadingDirection===void 0&&(this.user.preferences.bookReaderReadingDirection=w.LeftToRight),this.user.preferences.bookReaderWritingStyle===void 0&&(this.user.preferences.bookReaderWritingStyle=S.Horizontal),this.readingDirectionModel=this.user.preferences.bookReaderReadingDirection,this.writingStyleModel=this.user.preferences.bookReaderWritingStyle,this.settingsForm.addControl("bookReaderFontFamily",new x(this.user.preferences.bookReaderFontFamily,[])),this.settingsForm.get("bookReaderFontFamily").valueChanges.pipe(k(this.destroyRef)).subscribe(t=>{let b=this.fontFamilies.filter(u=>u.title===t)[0].family;b==="default"?this.pageStyles["font-family"]="inherit":this.pageStyles["font-family"]="'"+b+"'",this.styleUpdate.emit(this.pageStyles)}),this.settingsForm.addControl("bookReaderFontSize",new x(this.user.preferences.bookReaderFontSize,[])),this.settingsForm.get("bookReaderFontSize")?.valueChanges.pipe(k(this.destroyRef)).subscribe(t=>{this.pageStyles["font-size"]=t+"%",this.styleUpdate.emit(this.pageStyles)}),this.settingsForm.addControl("bookReaderTapToPaginate",new x(this.user.preferences.bookReaderTapToPaginate,[])),this.settingsForm.get("bookReaderTapToPaginate")?.valueChanges.pipe(k(this.destroyRef)).subscribe(t=>{this.clickToPaginateChanged.emit(t)}),this.settingsForm.addControl("bookReaderLineSpacing",new x(this.user.preferences.bookReaderLineSpacing,[])),this.settingsForm.get("bookReaderLineSpacing")?.valueChanges.pipe(k(this.destroyRef)).subscribe(t=>{this.pageStyles["line-height"]=t+"%",this.styleUpdate.emit(this.pageStyles)}),this.settingsForm.addControl("bookReaderMargin",new x(this.user.preferences.bookReaderMargin,[])),this.settingsForm.get("bookReaderMargin")?.valueChanges.pipe(k(this.destroyRef)).subscribe(t=>{this.pageStyles["margin-left"]=t+"vw",this.pageStyles["margin-right"]=t+"vw",this.styleUpdate.emit(this.pageStyles)}),this.settingsForm.addControl("layoutMode",new x(this.user.preferences.bookReaderLayoutMode||W.Default,[])),this.settingsForm.get("layoutMode")?.valueChanges.pipe(k(this.destroyRef)).subscribe(t=>{this.layoutModeUpdate.emit(t)}),this.settingsForm.addControl("bookReaderImmersiveMode",new x(this.user.preferences.bookReaderImmersiveMode,[])),this.settingsForm.get("bookReaderImmersiveMode")?.valueChanges.pipe(k(this.destroyRef)).subscribe(t=>{t&&this.settingsForm.get("bookReaderTapToPaginate")?.setValue(!0),this.immersiveMode.emit(t)}),this.setTheme(this.user.preferences.bookReaderThemeName||this.themeService.defaultBookTheme),this.cdRef.markForCheck(),this.readingDirection.emit(this.readingDirectionModel),this.bookReaderWritingStyle.emit(this.writingStyleModel),this.clickToPaginateChanged.emit(this.user.preferences.bookReaderTapToPaginate),this.layoutModeUpdate.emit(this.user.preferences.bookReaderLayoutMode),this.immersiveMode.emit(this.user.preferences.bookReaderImmersiveMode),this.resetSettings()):this.resetSettings()})}resetSettings(){this.user?this.setPageStyles(this.user.preferences.bookReaderFontFamily,this.user.preferences.bookReaderFontSize+"%",this.user.preferences.bookReaderMargin+"vw",this.user.preferences.bookReaderLineSpacing+"%"):this.setPageStyles(),this.settingsForm.get("bookReaderFontFamily")?.setValue(this.user.preferences.bookReaderFontFamily),this.settingsForm.get("bookReaderFontSize")?.setValue(this.user.preferences.bookReaderFontSize),this.settingsForm.get("bookReaderLineSpacing")?.setValue(this.user.preferences.bookReaderLineSpacing),this.settingsForm.get("bookReaderMargin")?.setValue(this.user.preferences.bookReaderMargin),this.settingsForm.get("bookReaderReadingDirection")?.setValue(this.user.preferences.bookReaderReadingDirection),this.settingsForm.get("bookReaderTapToPaginate")?.setValue(this.user.preferences.bookReaderTapToPaginate),this.settingsForm.get("bookReaderLayoutMode")?.setValue(this.user.preferences.bookReaderLayoutMode),this.settingsForm.get("bookReaderImmersiveMode")?.setValue(this.user.preferences.bookReaderImmersiveMode),this.settingsForm.get("bookReaderWritingStyle")?.setValue(this.user.preferences.bookReaderWritingStyle),this.cdRef.detectChanges(),this.styleUpdate.emit(this.pageStyles)}setPageStyles(a,t,b,u,E){let O=window.innerWidth||this.document.documentElement.clientWidth||this.document.body.clientWidth,d="15vw";O<=Ye&&(d="5vw"),this.pageStyles={"font-family":a||this.pageStyles["font-family"]||"default","font-size":t||this.pageStyles["font-size"]||"100%","margin-left":b||this.pageStyles["margin-left"]||d,"margin-right":b||this.pageStyles["margin-right"]||d,"line-height":u||this.pageStyles["line-height"]||"100%"}}setTheme(a){let t=this.themes.find(b=>b.name===a);this.activeTheme=t,this.cdRef.markForCheck(),this.colorThemeUpdate.emit(t)}toggleReadingDirection(){this.readingDirectionModel===w.LeftToRight?this.readingDirectionModel=w.RightToLeft:this.readingDirectionModel=w.LeftToRight,this.cdRef.markForCheck(),this.readingDirection.emit(this.readingDirectionModel)}toggleWritingStyle(){this.writingStyleModel===S.Horizontal?this.writingStyleModel=S.Vertical:this.writingStyleModel=S.Horizontal,this.cdRef.markForCheck(),this.bookReaderWritingStyle.emit(this.writingStyleModel)}toggleFullscreen(){this.isFullscreen=!this.isFullscreen,this.cdRef.markForCheck(),this.fullscreen.emit()}};s.\u0275fac=function(t){return new(t||s)(T(Me),T(Fe),T(X),T(Te),T(Q))},s.\u0275cmp=$({type:s,selectors:[["app-reader-settings"]],outputs:{clickToPaginateChanged:"clickToPaginateChanged",styleUpdate:"styleUpdate",colorThemeUpdate:"colorThemeUpdate",layoutModeUpdate:"layoutModeUpdate",fullscreen:"fullscreen",readingDirection:"readingDirection",bookReaderWritingStyle:"bookReaderWritingStyle",immersiveMode:"immersiveMode"},standalone:!0,features:[J],decls:1,vars:1,consts:[["acc","ngbAccordion"],["writingStyleTooltip",""],["tapPaginationTooltip",""],["immersiveModeTooltip",""],["fullscreenTooltip",""],["layoutTooltip",""],[4,"transloco","translocoRead"],[3,"formGroup"],["ngbAccordion","",3,"closeOthers"],["ngbAccordionItem","","id","general-panel","title","General Settings",3,"collapsed"],["ngbAccordionHeader","",1,"accordion-header"],["ngbAccordionButton","","type","button","aria-controls","collapseOne",1,"accordion-button"],["ngbAccordionCollapse",""],["ngbAccordionBody",""],["ngbAccordionItem","","id","reader-panel","title","Reader Settings",3,"collapsed"],["ngbAccordionItem","","id","color-panel",3,"title","collapsed"],[1,"control-container"],[1,"controls"],[1,"mb-3"],["for","library-type",1,"form-label"],["id","library-type","formControlName","bookReaderFontFamily",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],[1,"row","g-0","controls"],["for","fontsize",1,"form-label","col-6"],[1,"col-6","float-end",2,"display","inline-flex"],[1,"fa-solid","fa-font",2,"font-size","12px"],["type","range","id","fontsize","min","50","max","300","step","10","formControlName","bookReaderFontSize",1,"form-range","ms-2","me-2",3,"ngbTooltip"],[1,"fa-solid","fa-font",2,"font-size","24px"],["for","linespacing",1,"form-label","col-6"],["type","range","id","linespacing","min","100","max","200","step","10","formControlName","bookReaderLineSpacing",1,"form-range","ms-2","me-2",3,"ngbTooltip"],["for","margin",1,"form-label","col-6"],[1,"fa-solid","fa-outdent"],["type","range","id","margin","min","0","max","30","step","5","formControlName","bookReaderMargin",1,"form-range","ms-2","me-2",3,"ngbTooltip"],[1,"fa-solid","fa-indent"],[1,"row","g-0","justify-content-between","mt-2"],[1,"btn","btn-primary","col",3,"click"],[3,"value"],[1,"controls",2,"display","flex","justify-content","space-between","align-items","center"],["id","readingdirection",1,"form-label"],["aria-labelledby","readingdirection",1,"btn","btn-icon",3,"click","title"],["aria-hidden","true"],[1,"phone-hidden"],["for","writing-style",1,"form-label"],["aria-hidden","true","placement","top","role","button","tabindex","0","aria-describedby","writingStyle-help",1,"fa","fa-info-circle","ms-1",3,"ngbTooltip"],["id","writingStyle-help",1,"visually-hidden"],[3,"ngTemplateOutlet"],["id","writing-style","aria-labelledby","writingStyle-help",1,"btn","btn-icon",3,"click","title"],["for","tap-pagination",1,"form-label"],["aria-hidden","true","placement","top","role","button","tabindex","0","aria-describedby","tapPagination-help",1,"fa","fa-info-circle","ms-1",3,"ngbTooltip"],["id","tapPagination-help",1,"visually-hidden"],[1,"form-check","form-switch"],["type","checkbox","id","tap-pagination","formControlName","bookReaderTapToPaginate","aria-labelledby","tapPagination-help",1,"form-check-input"],["for","immersive-mode",1,"form-label"],["aria-hidden","true","placement","top","role","button","tabindex","0","aria-describedby","immersiveMode-help",1,"fa","fa-info-circle","ms-1",3,"ngbTooltip"],["id","immersiveMode-help",1,"visually-hidden"],["type","checkbox","id","immersive-mode","formControlName","bookReaderImmersiveMode","aria-labelledby","immersiveMode-help",1,"form-check-input"],["id","fullscreen",1,"form-label"],["aria-hidden","true","placement","top","role","button","tabindex","1","aria-describedby","fullscreen-help",1,"fa","fa-info-circle","ms-1",3,"ngbTooltip"],["id","fullscreen-help",1,"visually-hidden"],["aria-labelledby","fullscreen",1,"btn","btn-icon",3,"click"],[4,"ngIf"],["id","layout-mode",1,"form-label",2,"margin-bottom","0.5rem"],["aria-hidden","true","placement","top","role","button","tabindex","1","aria-describedby","layout-help",1,"fa","fa-info-circle","ms-1",3,"ngbTooltip"],["id","layout-help",1,"visually-hidden"],["role","group",1,"btn-group","d-flex","justify-content-center"],["type","radio","formControlName","layoutMode","id","layout-mode-default","autocomplete","off",1,"btn-check",3,"value"],["for","layout-mode-default",1,"btn","btn-outline-primary"],["type","radio","formControlName","layoutMode","id","layout-mode-col1","autocomplete","off",1,"btn-check",3,"value"],["for","layout-mode-col1",1,"btn","btn-outline-primary"],["type","radio","formControlName","layoutMode","id","layout-mode-col2","autocomplete","off",1,"btn-check",3,"value"],["for","layout-mode-col2",1,"btn","btn-outline-primary"],[3,"innerHTML"],[4,"ngFor","ngForOf"],[1,"btn","btn-icon","color",3,"click","ngClass"],[1,"dot",3,"ngStyle"]],template:function(t,b){t&1&&f(0,Ke,25,12,"ng-container",6),t&2&&c("translocoRead","reader-settings")},dependencies:[ye,be,fe,ve,le,me,ae,ue,pe,ce,de,ge,he,Re,Se,we,_e,xe,ke,ee,Ce,re,te,Z,oe,ne,ie],styles:[`.controls[_ngcontent-%COMP%]{margin:.25rem 0}.controls[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{background-color:var(--input-bg-color)}.controls[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]{margin:0}.controls[_ngcontent-%COMP%]   .btn.btn-icon[_ngcontent-%COMP%]{display:flex;width:50%;justify-content:center;align-items:center}.controls[_ngcontent-%COMP%]   .btn.btn-icon.color[_ngcontent-%COMP%]{display:unset;width:auto}.controls[_ngcontent-%COMP%]   .btn.btn-icon.color[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{height:25px;width:25px;border-radius:50%;margin:0 auto}.controls[_ngcontent-%COMP%]   .form-check.form-switch[_ngcontent-%COMP%]{width:50%;display:flex;justify-content:center}.controls[_ngcontent-%COMP%]   .form-check.form-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:.25rem}.active[_ngcontent-%COMP%]{border:1px solid var(--primary-color)}  .accordion-body{padding:.25rem 1rem 1rem!important}
/*# sourceMappingURL=reader-settings.component-JV2LYK36.css.map */`],changeDetection:0});let r=s;return r})();export{Je as a,Ct as b};
//# sourceMappingURL=chunk-UZJDSDY3.js.map
