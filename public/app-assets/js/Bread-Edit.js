"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[669],{9470:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var l=n(821),o={class:"breadcrumb-item"},r={class:"d-flex align-items-center p-2"},a={key:0,class:"btn-group btn-group-sm"},i=(0,l.createElementVNode)("div",{class:"mx-3"},null,-1),s={class:"btn-group btn-group-sm"},c=["href","download","title"],d=[(0,l.createElementVNode)("i",{class:"bi bi-file-earmark-arrow-down"},null,-1)],m=["title"],u=(0,l.createElementVNode)("i",{class:"bi bi-file-earmark-arrow-up"},null,-1),p={key:1,class:"mx-3"},f=(0,l.createElementVNode)("i",{class:"bi bi-clock-history"},null,-1),b={class:"mb-2 rounded-3 overflow-hidden"},v=["textContent"],y=["src","alt"],k={style:{"font-size":"0.85rem"}},g=["datetime"],h=["textContent"],x=["textContent"],V=["textContent"],N=["title"],E=(0,l.createElementVNode)("div",{class:"mx-3"},null,-1),C=["disabled"],B={key:0,role:"status","aria-hidden":"true",class:"spinner-border spinner-border-sm"},w={class:"card-body"},S=["textContent"],D={class:"row"},_={class:"d-flex flex-column mt-1"},$=["onClick","title"],R=[(0,l.createElementVNode)("i",{class:"bi bi-x-circle fs-6"},null,-1)],F=["title"],O=[(0,l.createElementVNode)("i",{class:"bi bi-arrows-expand fs-6"},null,-1)],I={class:"form-group flex-fill my-2"},L=["for"],T=["textContent"],j=["id","textContent"],z={class:"mb-5"},A=["onClick","disabled","title"],J=(0,l.createElementVNode)("i",{class:"bi bi-plus-circle-fill fs-6"},null,-1),U=(0,l.createElementVNode)("span",{class:"px-1"},null,-1),H=["textContent"],q=["for","textContent"],Z=["id","textContent"],M={key:1,class:"invalid-feedback",role:"alert"},W=["textContent"];const G={name:"BreadEdit",components:{NavItemDropdown:n(6967).Z},props:{b:{type:Object,required:!0},entId:{type:[String,Number]},ent:{type:Object,required:!0},title:{type:String},locale:{type:String},fm_path:{type:String,default:""},revisions:{type:Array,default:[]},loadedRev:{type:String}},data:function(){var e=this,t={};return this.b.fields.forEach((function(n){t[n.name]=n.repeats>1?[]:JSON.parse(JSON.stringify({v:n.default})).v,e.entId&&void 0!==e.ent[n.name]&&(t[n.name]=JSON.parse(JSON.stringify({v:e.ent[n.name]})).v,n.repeats>1&&!(t[n.name]instanceof Array)&&(t[n.name]=[]),n.repeats>1&&t[n.name].length&&t[n.name].forEach((function(e,l){return null===e&&(t[n.name][l]="")})))})),{form:this.$inertia.form({v:t}),currentHref:document.location.href}},methods:{repeatField:function(e){this.form.v[e.name].push(JSON.parse(JSON.stringify({v:e.default})).v)},removeRepeatedField:function(e,t){this.form.v[e].splice(t,1)},exportBread:function(){return"data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.ent))},importBread:function(e){var t=this;if(e.target.files.length){var n=e.target.files[0],l=new FileReader;l.readAsText(n),l.onload=function(){var e=JSON.parse(l.result);Object.keys(e).forEach((function(n){return t.form.v[n]=e[n]}))}}},fileableDate:function(){return(new Date).toISOString().replace("T","_").replace(/:/g,"-").substring(0,19)}},computed:{isRtl:function(){return"rtl"===document.documentElement.dir},isLocaleRtl:function(){return["ar","dv","fa","ha","he","ks","ku","ps","sd","ur","yi"].indexOf(this.locale)>-1},revTitle:function(){var e=this;if(!this.loadedRev)return"";var t=this.revisions.find((function(t){return t.created_at===e.loadedRev}));return t?" "+this.$t("Revision")+" "+t.created_at_h+" "+this.$t("By")+" "+t.user.name:""}},provide:function(){return{fm_path:this.fm_path}}};const K=(0,n(3744).Z)(G,[["render",function(e,t,n,G,K,P){var Q=(0,l.resolveComponent)("Head"),X=(0,l.resolveComponent)("inertia-link"),Y=(0,l.resolveComponent)("InertiaLink"),ee=(0,l.resolveComponent)("nav-item-dropdown"),te=(0,l.resolveComponent)("draggable"),ne=(0,l.resolveComponent)("Layout");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(Q,{title:n.entId?e.$t("Edit")+" "+n.title+P.revTitle:e.$t("New")},null,8,["title"]),(0,l.createVNode)(ne,null,{breadcrumbs:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("li",o,[(0,l.createVNode)(X,{href:e.route("jasmine.bread.index",{breadableName:n.b.key}),textContent:(0,l.toDisplayString)(e.$t(n.b.plural))},null,8,["href","textContent"])])]})),pageActions:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("div",r,[n.locale?((0,l.openBlock)(),(0,l.createElementBlock)("div",a,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e.$globals.locales,(function(e){return(0,l.openBlock)(),(0,l.createBlock)(X,{href:"",data:{_locale:e},textContent:(0,l.toDisplayString)(e),class:(0,l.normalizeClass)(["btn btn-outline-primary text-uppercase",{active:e===n.locale}])},null,8,["data","textContent","class"])})),256))])):(0,l.createCommentVNode)("",!0),i,(0,l.createElementVNode)("div",s,[(0,l.createElementVNode)("a",{href:P.exportBread(),download:n.b.singular+"-"+n.title+"-"+P.fileableDate()+".jasmine.json",class:"btn btn-outline-primary",title:e.$t("Export")},d,8,c),(0,l.createElementVNode)("button",{type:"button",class:"btn btn-outline-primary",title:e.$t("Import"),onClick:t[1]||(t[1]=function(t){return e.$refs.importI.click()})},[u,(0,l.createElementVNode)("input",{type:"file",class:"sr-only",ref:"importI",onInput:t[0]||(t[0]=function(){return P.importBread&&P.importBread.apply(P,arguments)}),accept:".jasmine.json"},null,544)],8,m)]),n.revisions.length?((0,l.openBlock)(),(0,l.createElementBlock)("div",p)):(0,l.createCommentVNode)("",!0),n.revisions.length?((0,l.openBlock)(),(0,l.createBlock)(ee,{key:2,as:"div",id:"revisionsDd",class:"btn btn-sm btn-outline-primary dropdown","menu-class":"bg-light px-2 rounded-3 overflow-auto",style:{height:"65vh"}},{menu:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("li",b,[n.loadedRev?((0,l.openBlock)(),(0,l.createBlock)(Y,{key:0,href:K.currentHref,data:{rev:null},style:{gap:".75rem"},class:"dropdown-item px-2 text-primary fw-semibold d-flex align-items-center"},{default:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("i",{class:(0,l.normalizeClass)(["bi",P.isRtl?"bi-arrow-left":"bi-arrow-right"])},null,2),(0,l.createElementVNode)("span",{textContent:(0,l.toDisplayString)(e.$t("Back to current"))},null,8,v)]})),_:1},8,["href"])):(0,l.createCommentVNode)("",!0)]),((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.revisions,(function(t){return(0,l.openBlock)(),(0,l.createElementBlock)("li",{key:t.created_at,class:"bg-white mb-2 rounded-3 overflow-hidden"},[(0,l.createVNode)(Y,{class:"dropdown-item px-2 d-flex align-items-center",href:K.currentHref,style:{gap:".75rem"},data:{rev:t.created_at.split(".")[0].replace(/[T:]/g,"-"),_locale:t.locale}},{default:(0,l.withCtx)((function(){var n,o,r;return[(0,l.createElementVNode)("div",null,[(0,l.createElementVNode)("img",{src:null===(n=t.user)||void 0===n?void 0:n.avatar_url,alt:null===(o=t.user)||void 0===o?void 0:o.name,class:"rounded-circle",style:{height:"28px"}},null,8,y)]),(0,l.createElementVNode)("div",k,[(0,l.createElementVNode)("div",null,[(0,l.createElementVNode)("time",{datetime:t.created_at,class:"fs-6"},[(0,l.createElementVNode)("span",{textContent:(0,l.toDisplayString)(t.created_at_h.split(" ")[0]),class:"text-primary fw-semibold"},null,8,h),(0,l.createTextVNode)("   "),(0,l.createElementVNode)("span",{textContent:(0,l.toDisplayString)(t.created_at_h.split(" ")[1])},null,8,x)],8,g),(0,l.createTextVNode)("   "),(0,l.createElementVNode)("span",{textContent:(0,l.toDisplayString)(t.locale),class:"text-uppercase badge text-bg-secondary rounded-pill"},null,8,V)]),(0,l.createElementVNode)("div",{title:t.user.email,class:"text-muted"},(0,l.toDisplayString)(e.$t("By"))+" "+(0,l.toDisplayString)(null===(r=t.user)||void 0===r?void 0:r.name),9,N)])]})),_:2},1032,["href","data"])])})),128))]})),default:(0,l.withCtx)((function(){return[f,(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.$t("Revisions"))+" ",1)]})),_:1})):(0,l.createCommentVNode)("",!0),E,(0,l.createElementVNode)("button",{onClick:t[2]||(t[2]=function(t){return e.$refs.form.reportValidity()&&K.form.post("")}),type:"button",class:(0,l.normalizeClass)(["btn btn-sm px-5",{"btn-primary":K.form.isDirty,"btn-secondary":!K.form.isDirty}]),disabled:K.form.processing},[K.form.processing?((0,l.openBlock)(),(0,l.createElementBlock)("span",B)):(0,l.createCommentVNode)("",!0),(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.$t("Save")),1)],10,C)])]})),default:(0,l.withCtx)((function(){return[(0,l.createElementVNode)("form",{ref:"form",onSubmit:t[3]||(t[3]=(0,l.withModifiers)((function(e){return K.form.post("")}),["prevent"]))},[(0,l.createElementVNode)("div",{class:(0,l.normalizeClass)(["bread-edit row",{"writing-rtl":P.isLocaleRtl}])},[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.b.manifest,(function(t,o){return(0,l.openBlock)(),(0,l.createElementBlock)("div",{key:o,class:(0,l.normalizeClass)(o)},[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(t,(function(t,o){return(0,l.openBlock)(),(0,l.createElementBlock)("div",{key:o,class:"card mb-4"},[(0,l.createElementVNode)("div",w,["_"!==o[0]?((0,l.openBlock)(),(0,l.createElementBlock)("h4",{key:0,class:"mb-2 h5",textContent:(0,l.toDisplayString)(o)},null,8,S)):(0,l.createCommentVNode)("",!0),(0,l.createElementVNode)("div",D,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(t,(function(t,o){return(0,l.openBlock)(),(0,l.createElementBlock)("div",{key:o,class:(0,l.normalizeClass)(["field p-1 pt-2 form-group",t.width])},[t.repeats>1?((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:0},[(0,l.createVNode)(te,{modelValue:K.form.v[t.name],"onUpdate:modelValue":function(e){return K.form.v[t.name]=e},"ghost-class":"ghost",handle:".dnd-handler_"+t.id,class:"row","item-key":"id"},{item:(0,l.withCtx)((function(o){o.element;var r=o.index;return[(0,l.createElementVNode)("div",{class:(0,l.normalizeClass)(["d-flex",t.repeatsWidth])},[(0,l.createElementVNode)("div",_,[(0,l.createElementVNode)("button",{type:"button",class:"btn btn-sm",onClick:function(e){return P.removeRepeatedField(t.name,r)},title:e.$t("Remove")+" "+t.label+" ("+(r+1)+")"},R,8,$),(0,l.createElementVNode)("button",{class:(0,l.normalizeClass)(["btn btn-sm","dnd-handler_"+t.id]),type:"button",title:e.$t("Reorder")+" "+t.label},O,10,F)]),(0,l.createElementVNode)("div",I,[(0,l.createElementVNode)("label",{for:t.id+r,class:"form-label"},[(0,l.createElementVNode)("span",{class:"fw-semibold",textContent:(0,l.toDisplayString)(t.label)},null,8,T),(0,l.createTextVNode)(" "+(0,l.toDisplayString)(r+1),1)],8,L),((0,l.openBlock)(),(0,l.createBlock)((0,l.resolveDynamicComponent)(t.component),{id:t.id+r,name:t.name+"["+r+"]",invalid:!!K.form.errors[t.name],modelValue:K.form.v[t.name][r],"onUpdate:modelValue":function(e){return K.form.v[t.name][r]=e},label:t.label,options:t.options,validation:t.validation,locale:n.locale,"is-locale-rtl":P.isLocaleRtl},null,8,["id","name","invalid","modelValue","onUpdate:modelValue","label","options","validation","locale","is-locale-rtl"])),t.description?((0,l.openBlock)(),(0,l.createElementBlock)("small",{key:0,id:t.id+r+"Help",class:"form-text text-muted",textContent:(0,l.toDisplayString)(t.description)},null,8,j)):(0,l.createCommentVNode)("",!0)])],2)]})),_:2},1032,["modelValue","onUpdate:modelValue","handle"]),(0,l.createElementVNode)("div",z,[(0,l.createElementVNode)("button",{style:{"--bs-btn-disabled-border-color":"transparent"},class:"btn text-primary fw-semibold d-flex align-items-center",onClick:function(e){return P.repeatField(t)},disabled:K.form.v[t.name].length>=t.repeats,type:"button",title:e.$t("Add")+" "+t.label},[J,U,(0,l.createElementVNode)("span",{textContent:(0,l.toDisplayString)(e.$t("Add")+" "+t.label)},null,8,H)],8,A)])],64)):((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:1},[(0,l.createElementVNode)("label",{class:"form-label fw-semibold",for:t.id,textContent:(0,l.toDisplayString)(t.label)},null,8,q),((0,l.openBlock)(),(0,l.createBlock)((0,l.resolveDynamicComponent)(t.component),{id:t.id,name:t.name,invalid:!!K.form.errors[t.name],modelValue:K.form.v[t.name],"onUpdate:modelValue":function(e){return K.form.v[t.name]=e},label:t.label,options:t.options,validation:t.validation,locale:n.locale,"is-locale-rtl":P.isLocaleRtl},null,8,["id","name","invalid","modelValue","onUpdate:modelValue","label","options","validation","locale","is-locale-rtl"])),t.description?((0,l.openBlock)(),(0,l.createElementBlock)("small",{key:0,id:t.id+"Help",class:"form-text text-muted",textContent:(0,l.toDisplayString)(t.description)},null,8,Z)):(0,l.createCommentVNode)("",!0),K.form.errors[t.name]?((0,l.openBlock)(),(0,l.createElementBlock)("div",M,[(0,l.createElementVNode)("strong",{textContent:(0,l.toDisplayString)(Array.isArray(K.form.errors[t.name])?K.form.errors[t.name][0]:K.form.errors[t.name])},null,8,W)])):(0,l.createCommentVNode)("",!0)],64))],2)})),128))])])])})),128))],2)})),128))],2)],544)]})),_:1})],64)}]])}}]);
//# sourceMappingURL=Bread-Edit.js.map?id=8d961765cda486e5