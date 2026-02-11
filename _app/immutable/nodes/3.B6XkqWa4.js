import{a as u,w as rt,f as y,d as Q,t as tt}from"../chunks/BAUrMlIe.js";import{h as et,$ as nt,W as h,X as q,a0 as at,Y as o,Z as a,v,_ as w,aL as ft,av as dt,a1 as X,a2 as ut}from"../chunks/SnJFKQdN.js";import{s as E}from"../chunks/D9A6KP0f.js";import{i as I}from"../chunks/BGzlZSAR.js";import{e as W,i as it,r as _t,s as R,a as bt}from"../chunks/BVnccm3D.js";const st=[...` 	
\r\f \v\uFEFF`];function gt(s,t,e){var i=""+s;if(e){for(var r in e)if(e[r])i=i?i+" "+r:r;else if(i.length)for(var c=r.length,n=0;(n=i.indexOf(r,n))>=0;){var m=n+c;(n===0||st.includes(i[n-1]))&&(m===i.length||st.includes(i[m]))?i=(n===0?"":i.substring(0,n))+i.substring(m+1):n=m}}return i===""?null:i}function pt(s,t,e,i,r,c){var n=s.__className;if(et||n!==e||n===void 0){var m=gt(e,i,c);(!et||m!==s.getAttribute("class"))&&(m==null?s.removeAttribute("class"):s.className=m),s.__className=e}else if(c&&r!==c)for(var x in c){var j=!!c[x];(r==null||j!==!!r[x])&&s.classList.toggle(x,j)}return c}const ot=["hasPart"],jt=[["hasNumerator","hasDenominator"],["hasSource","hasTarget"]],lt=jt.flat(),Z=[...ot,...lt];class F{static#e=["en",""];#t;_iri;_shortIri;_label={};_comment={};_isBlank;_constrained=[];#i="";constructor({iri:t,shortIri:e,label:i,comment:r,isBlank:c}={}){this._iri=t,this._shortIri=e,this._isBlank=c??!t,typeof i=="string"?this._label[""]=i:this._label=Object.fromEntries(Object.entries(i??{}).filter(([n,m])=>m)),typeof r=="string"?this._comment[""]=r:this._comment=Object.fromEntries(Object.entries(r??{}).filter(([n,m])=>m)),this instanceof ct&&(this.#i="Variable")}clone(){return new F({iri:this._iri,shortiri:this._shortIri,label:JSON.parse(JSON.stringify(this._label)),comment:JSON.parse(JSON.stringify(this._comment)),isblank:this._isBlank})}setVariable(t){this.#t=t}getVariable(){return this.#t}setIri(t){t?(this._iri=t,this._isBlank=!1):(this._iri=null,this._isBlank=!0)}getIri(){return this._isBlank?null:this._iri}getId(){return this._iri}getShortIri(){return this._isBlank?null:this._shortIri}isBlank(){return this._isBlank}setLabel(t,e){this._label[t]=e}getLabel(t=!0){for(const r of F.#e)if(r in this._label)return this._label[r];let e=Object.values(this._label)[0];if(e)return e;if(t)return;const i=this._iri.split("/");return i.pop()||i.pop()||"[missing label]"}setComment(t,e){this._comment[t]=e}getComment(){for(const t of F.#e)if(t in this._comment)return this._comment[t];return Object.values(this._comment)[0]}setRole(t){this.#i=t}getRole(){return this.#i}}class ct extends F{#e;#t;#i;#n;#s=[];#r=[];setProperty(t){if(!(t instanceof vt))throw new Error("Can only assign instances of Property!");t.setVariable(this),t.setRole("Property"),this.#e=t}setObjectOfInterest(t){if(!(t instanceof M))throw new Error("Can only assign instances of Entity!");t.setVariable(this),t.setRole("OoI"),this.#t=t}setMatrix(t){if(!(t instanceof M))throw new Error("Can only assign instances of Entity!");t.setVariable(this),t.setRole("Matrix"),this.#i=t}setStatisticalModifier(t){if(!(t instanceof M))throw new Error("Can only assign instances of Entity!");t.setVariable(this),t.setRole("StatisticalModifier"),this.#n=t}addContextObject(t){if(!(t instanceof M))throw new Error("Can only assign instances of Entity!");t.setVariable(this),t.setRole("ContextObject"),this.#s.push(t)}addConstraint(t,...e){if(!(t instanceof ht))throw new Error("Can only assign instances of Constraint!");if(e.some(i=>i.getVariable()!=this))throw Error("Can only constrain entities of the same variable!");if(this.#r.includes(t)){const i=t.getEntities();for(const r of e)i.includes(r)||(t.addEntity(r),r._addConstraint(t));return}for(const i of e)t.addEntity(i),i._addConstraint(t);t.setRole("Constraint"),this.#r.push(t),t.setVariable(this)}getProperty(){return this.#e}getObjectOfInterest(){return this.#t}getMatrix(){return this.#i}getStatisticalModifier(){return this.#n}getContextObjects(){return this.#s.slice(0)}getConstraints(){return this.#r.slice(0)}getClassLabel(){return"Variable"}_removeConstraint(t){this.#r=this.#r.filter(e=>e!=t)}_removeContextObject(t){this.#s=this.#s.filter(e=>e!=t)}_removeStatisticalModifier(t){this.#n=void 0}_removeMatrix(){this.#i=void 0}toString(){return`[Variable ${this._iri?`(${this._iri})`:"(_blank)"}`+(Object.values(this._label).length?`
  label:
`+Object.entries(this._label).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+(Object.values(this._comment).length?`
  comment:
`+Object.entries(this._comment).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+`
  Property:
${this.#e?this.#e.toString().split(`
`).map(t=>`    ${t}`).join(`
`):"-"}
  ObjectOfInterest:
${this.#t?this.#t.toString().split(`
`).map(t=>`    ${t}`).join(`
`):"-"}
  Matrix:
${this.#i?this.#i.toString().split(`
`).map(t=>`    ${t}`).join(`
`):"-"}
  ContextObject:
${this.#s.length?this.#s.map(t=>t.toString().split(`
`).map(e=>`    ${e}`).join(`
`)).join(`
`):"-"}
]`}}class ht extends F{#e=[];addEntity(t){this.#e.push(t)}getEntities(){return this.#e.slice(0)}getClassLabel(){return"Constraint"}remove(){this.getVariable()._removeConstraint(this),this.#e.forEach(t=>t._removeConstraint(this))}toString(){return`[Constraint ${this._iri?`(${this._iri})`:"(_blank)"}`+(Object.values(this._label).length?`
  label:
`+Object.entries(this._label).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+(Object.values(this._comment).length?`
  comment:
`+Object.entries(this._comment).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+`
]`}}class M extends F{#e=[];#t={};setVariable(t){super.setVariable(t),Object.values(this.#t).forEach(e=>e.forEach(i=>i.setVariable(t)))}_addConstraint(t){this.#e.push(t)}_removeConstraint(t){this.#e=this.#e.filter(e=>e!=t)}addConstraint(t){this.#e.push(t)}getConstraints(){return Array.from(this.#e)}addComponent(t,e){if(!Z.includes(t))throw new Error("Invalid property to connect a System to its components: "+t);t in this.#t||(this.#t[t]=[]),e.setVariable(this.getVariable()),e.setRole("SystemComponent"),this.#t[t].push(e)}getComponents(){return Object.entries(this.#t).reduce((t,e)=>(t[e[0]]=Array.from(e[1]),t),{})}getComponentCount(){return Object.entries(this.#t).reduce((t,e)=>t+e[1].length,0)}getComponentKeys(){return Object.keys(this.#t)}changeComponentKeys(t){for(const i of t)if(!Z.includes(i))throw new Error(`Invalid system property: "${i}"`);const e=Object.values(this.#t).flat();if(t.length!=e.length)throw new Error(`Need exactly ${e.length} new properties!`);this.#t={};for(let i=0;i<e.length;i++)this.addComponent(t[i],e[i])}isSystem(){return Object.keys(this.#t).length>0}isSymmetricSystem(){return Object.keys(this.#t).length==1}getClassLabel(){switch(!0){case this.getRole()=="StatisticalModifier":return"Stat. Mod.";case ot.some(t=>t in this.#t):return"SymmetricSystem";case lt.some(t=>t in this.#t):return"AsymmetricSystem";default:return"Entity"}}remove(){if(["OoI","SystemComponent","Property"].includes(this.getRole())){console.warn(`Can not remove Entities of type ${this.getRole()}`);return}for(const t of[...this.#e])t.remove();switch(this.removeComponents(),this.getRole()){case"Matrix":this.getVariable()._removeMatrix();break;case"ContextObject":this.getVariable()._removeContextObject(this);break;case"StatisticalModifier":this.getVariable()._removeStatisticalModifier(this);break;default:throw Error(`Missing Code for removal of Entity type ${this.getRole()}`)}}removeComponents(){if(this.isSystem()){const t=Object.values(this.#t).flat().flatMap(e=>e.getConstraints());for(const e of t)e.remove();this.#t={}}}toString(){return`[Entity ${this._iri?`(${this._iri})`:"(_blank)"}`+(Object.values(this._label).length?`
  label:
`+Object.entries(this._label).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+(Object.values(this._comment).length?`
  comment:
`+Object.entries(this._comment).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+(Object.values(this.#e).length?`
  constrained:
`+this.#e.map(t=>t.toString().split(`
`).map(e=>`    ${e}`).join(`
`)).join(`
`):"-")+`
]`}clone(){const t=new M({iri:this._iri,shortIri:this._shortIri,label:this._label,comment:this._comment,isBlank:this._isBlank});for(const e of this.#e)t._addConstraint(e);for(const e in this.#t)for(const i of this.#t[e])t.addComponent(e,i.clone());return t}}class vt extends M{getClassLabel(){return"Property"}toString(){return`[Entity ${this._iri?`(${this._iri})`:"(_blank)"}`+(Object.values(this._label).length?`
  label:
`+Object.entries(this._label).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+(Object.values(this._comment).length?`
  comment:
`+Object.entries(this._comment).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+`
]`}}function yt(s){const t=new ct({iri:s["@id"],label:s.label,comment:s.comment}),e={};let i=Y(s.property,vt,e);if(i&&t.setProperty(i),i=Y(s.statisticalModifier,M,e),i&&t.setStatisticalModifier(i),i=Y(s.ooi,M,e),i&&t.setObjectOfInterest(i),i=Y(s.matrix,M,e),i&&t.setMatrix(i),s.context)for(const r of s.context)i=Y(r,M,e),t.addContextObject(i);if(s.constraint)for(const r of s.constraint){let{constraint:c,entities:n}=Ct(r);n=n.map(m=>e[m]),t.addConstraint(c,...n)}return t}function Y(s,t,e){if(!s)return;const i=new t({iri:s["@id"],label:s.label,comment:s.comment,isBlank:!("@id"in s)||s["@id"].startsWith("_:")});e[s["@id"]]=i;for(const r of Z)if(r in s){const c=Array.isArray(s[r])?s[r].map(n=>Y(n,t,e)):[Y(s[r],t,e)];for(const n of c)i.addComponent(r,n),e[n.getIri()]=n}return i}function Ct(s){if(s)return{constraint:new ht({iri:s["@id"],label:s.label,comment:s.comment}),entities:s.constrains}}var xt=y('<a class="navBoxItem"><li> </li></a>'),Ot=y('<li class="navBoxSection svelte-10b7788"><label class="svelte-10b7788"><i> </i></label> <input type="checkbox" class="svelte-10b7788"/> <ul class="svelte-10b7788"></ul></li>'),St=rt(y(`<div class="navBox svelte-10b7788"><div class="navBoxHead">Filter</div> <div class="navBoxBody filterBody svelte-10b7788"><input type="text" id="filter" placeholder="Filter Variables ..."/> <script>
      (function(){

        // schedule update of filter
        let filterTimer = null;
        document.querySelector( '#filter' )
          ?.addEventListener( 'input', () => {
            if ( filterTimer ) {
              clearTimeout( filterTimer );
            }
            filterTimer = setTimeout( triggerFilter, 200 );
          } );


        function triggerFilter() {

          // get filter term
          const term = document.querySelector( '#filter' )?.value?.toLowerCase() || null;

          // visibility entries
          for( const entry of document.querySelectorAll( '.navBoxItem') ) {

            if( term ) {

              // only show, if filter term is included
              if( ! entry.textContent?.toLowerCase().includes( term ) ) {
                entry.classList.add( 'hidden' );
              } else {
                entry.classList.remove( 'hidden' );
              }

            } else {

              // if no filter term is set, show all entries
              entry.classList.remove( 'hidden' );

            }
          }

          // visibility categories
          for( const entry of document.querySelectorAll( '.navBoxSection') ) {

            if( term ) {

              entry.querySelector( 'input[type="checkbox"]' ).checked = true;

            } else {

              entry.querySelector( 'input[type="checkbox"]' ).checked = !!entry.querySelector( 'li.selected' );

            }
          }

        }

      })();
    <\/script></div></div> <div class="navBox svelte-10b7788"><div class="navBoxHead">Navigation</div> <div class="navBoxBody svelte-10b7788"><ul class="svelte-10b7788"></ul></div></div>`,1));function wt(s,t){nt(t,!0);const e=t.selected.split("/").slice(0,-1).map(()=>"..").join("/"),i=Object.keys(t.variables).find(x=>t.variables[x].some(j=>j.path==t.selected));var r=St(),c=h(q(r),2),n=h(o(c),2),m=o(n);W(m,21,()=>Object.keys(t.variables),it,(x,j)=>{var k=Ot(),L=o(k),B=o(L),J=o(B,!0);a(B),a(L);var P=h(L,2);_t(P);var $=h(P,2);W($,21,()=>t.variables[v(j)],it,(d,l)=>{var b=xt(),_=o(b);let g;var S=o(_,!0);a(_),a(b),w(()=>{R(b,"href",(e?`${e}/${v(l).path}`:v(l).path)+".html"),g=pt(_,1,"svelte-10b7788",null,g,{selected:t.selected==v(l).path}),E(S,v(l).title)}),u(d,b)}),a($),a(k),w(()=>{R(L,"for",`checkBox${v(j)??""}`),E(J,v(j)),R(P,"id",`checkBox${v(j)??""}`),bt(P,i==v(j))}),u(x,k)}),a(m),a(n),a(c),u(s,r),at()}const K=(s,t=ft)=>{var e=Q(),i=q(e);{var r=c=>{var n=Lt(),m=o(n);{var x=d=>{var l=Et(),b=o(l,!0);a(l),w((_,g)=>{R(l,"href",_),E(b,g)},[()=>t().getIri(),()=>t().getLabel(!1)]),u(d,l)},j=d=>{var l=tt();w(b=>E(l,b),[()=>t().getLabel()??t().getShortIri()]),u(d,l)};I(m,d=>{t().getIri()?d(x):d(j,!1)})}var k=h(m,2);{var L=d=>{var l=It(),b=o(l,!0);a(l),w(_=>E(b,_),[()=>t().getComment()]),u(d,l)};I(k,d=>{t().getComment()&&d(L)})}var B=h(k,2);{var J=d=>{var l=Bt(),b=h(o(l),2);W(b,21,()=>t().getConstraints(),_=>_.getIri(),(_,g)=>{var S=Vt(),T=o(S);{var H=C=>{var p=tt();w(V=>E(p,V),[()=>v(g).getLabel()]),u(C,p)},z=C=>{var p=Mt(),V=o(p,!0);a(p),w((U,f)=>{R(p,"href",U),E(V,f)},[()=>v(g).getIri(),()=>v(g).getLabel()]),u(C,p)};I(T,C=>{v(g).isBlank()?C(H):C(z,!1)})}var A=h(T,2);{var G=C=>{var p=kt(),V=o(p,!0);a(p),w(U=>E(V,U),[()=>v(g).getComment()]),u(C,p)};I(A,C=>{v(g).getComment()&&C(G)})}a(S),u(_,S)}),a(b),a(l),u(d,l)};I(B,d=>{t().getConstraints().length>0&&d(J)})}var P=h(B,2);{var $=d=>{var l=Q(),b=q(l);W(b,17,()=>Object.entries(t().getComponents()),([_,g])=>_,(_,g)=>{var S=X(()=>ut(v(g),2));let T=()=>v(S)[0],H=()=>v(S)[1];var z=Rt(),A=o(z),G=o(A,!0);a(A);var C=h(A,2);W(C,17,H,p=>p.getIri(),(p,V)=>{K(p,()=>v(V))}),a(z),w(()=>E(G,T())),u(_,z)}),u(d,l)};I(P,d=>{t().getComponentCount()>0&&d($)})}a(n),u(c,n)};I(i,c=>{t()&&c(r)})}u(s,e)};var Et=y("<a> </a>"),It=y('<p class="desc svelte-iaj60x"> </p>'),Mt=y("<a> </a>"),kt=y('<p class="description"> </p>'),Vt=y('<li class="constraint-item"><!> <!></li>'),Bt=y('<div><span class="subheading">Constraint(s)</span> <ul class="constraint-list"></ul></div>'),Rt=y('<dl class="svelte-iaj60x"><dt class="subheading svelte-iaj60x"> </dt> <!></dl>'),Lt=y("<dd><!> <!> <!> <!></dd>"),Pt=y('<a target="_blank" aria-label="Discuss on Github" class="svelte-iaj60x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 367.4 90" style="height: 1em;"><g fill="currentColor"><path d="m46.1 0c-25.5 0-46.1 20.6-46.1 46.1 0 20.4 13.2 37.7 31.5 43.8 2.3.4 3.2-1 3.2-2.2 0-1.1-.1-4.7-.1-8.6-11.6 2.1-14.6-2.8-15.5-5.4-.5-1.3-2.8-5.4-4.7-6.5-1.6-.9-3.9-3-.1-3.1 3.6-.1 6.2 3.3 7.1 4.7 4.2 7 10.8 5 13.4 3.8.4-3 1.6-5 2.9-6.2-10.3-1.2-21-5.1-21-22.8 0-5 1.8-9.2 4.7-12.4-.5-1.2-2.1-5.9.5-12.2 0 0 3.9-1.2 12.7 4.7 3.7-1 7.6-1.6 11.5-1.6s7.8.5 11.5 1.6c8.8-6 12.7-4.7 12.7-4.7 2.5 6.3.9 11.1.5 12.2 2.9 3.2 4.7 7.3 4.7 12.4 0 17.7-10.8 21.6-21.1 22.8 1.7 1.4 3.1 4.2 3.1 8.5 0 6.2-.1 11.1-.1 12.7 0 1.2.9 2.7 3.2 2.2 18.2-6.1 31.4-23.4 31.4-43.8.3-25.4-20.4-46-45.9-46z"></path><path d="m221.6 67.1h-.1zm0 0c-.5 0-1.8.3-3.2.3-4.4 0-5.9-2-5.9-4.6v-17.5h8.9c.5 0 .9-.4.9-1.1v-9.5c0-.5-.4-.9-.9-.9h-8.9v-11.7c0-.4-.3-.7-.8-.7h-12c-.5 0-.8.3-.8.7v12.1s-6.1 1.5-6.5 1.6-.7.5-.7.9v7.6c0 .6.4 1.1.9 1.1h6.2v18.3c0 13.6 9.5 15 16 15 3 0 6.5-.9 7.1-1.2.3-.1.5-.5.5-.9v-8.4c.1-.6-.3-1-.8-1.1zm132.2-12.2c0-10.1-4.1-11.4-8.4-11-3.3.2-6 1.9-6 1.9v19.6s2.7 1.9 6.8 2c5.8.2 7.6-1.9 7.6-12.5zm13.6-.9c0 19.1-6.2 24.6-17 24.6-9.1 0-14.1-4.6-14.1-4.6s-.2 2.6-.5 2.9c-.2.3-.4.4-.8.4h-8.3c-.6 0-1.1-.4-1.1-.9l.1-62c0-.5.4-.9.9-.9h11.9c.5 0 .9.4.9.9l-.1 20.9s4.6-3 11.3-3h.1c6.8-0 16.7 2.5 16.7 21.7zm-48.7-20.2h-11.7c-.6 0-.9.4-.9 1.1v30.3s-3.1 2.2-7.3 2.2-5.4-1.9-5.4-6.1v-26.5c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v28.5c0 12.3 6.9 15.3 16.3 15.3 7.8 0 14.1-4.3 14.1-4.3s.3 2.2.4 2.5.5.5.9.5h7.5c.6 0 .9-.4.9-.9l.1-41.7c-.1-.4-.6-.9-1.2-.9zm-132.2 0h-11.9c-.5 0-.9.5-.9 1.1v40.9c0 1.1.7 1.5 1.7 1.5h10.7c1.1 0 1.4-.5 1.4-1.5v-41.1c0-.5-.5-.9-1-.9zm-5.8-18.9c-4.3 0-7.7 3.4-7.7 7.7s3.4 7.7 7.7 7.7c4.2 0 7.6-3.4 7.6-7.7s-3.4-7.7-7.6-7.7zm92-1.4h-11.8c-.5 0-.9.4-.9.9v22.8h-18.5v-22.7c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v62c0 .5.5.9.9.9h11.9c.5 0 .9-.4.9-.9v-26.6h18.5l-.1 26.5c0 .5.4.9.9.9h11.9c.5 0 .9-.4.9-.9v-62c0-.4-.4-.9-.9-.9zm-105.3 27.5v32c0 .2-.1.6-.3.7 0 0-7 5-18.5 5-13.9 0-30.3-4.4-30.3-33 0-28.7 14.4-34.6 28.4-34.5 12.2 0 17.1 2.7 17.8 3.2.2.3.3.5.3.8l-2.3 9.9c0 .5-.5 1.1-1.1.9-2-.6-5-1.8-12.1-1.8-8.2 0-17 2.3-17 20.8s8.4 20.6 14.4 20.6c5.1 0 7-.6 7-.6v-12.8h-8.2c-.6 0-1.1-.4-1.1-.9v-10.3c0-.5.4-.9 1.1-.9h20.9c.6-.1 1 .4 1 .9z"></path></g></svg></a>'),$t=y('<dt class="svelte-iaj60x">Statistical Modifier</dt> <!>',1),At=y('<dt class="svelte-iaj60x">Matrix</dt> <!>',1),Tt=y('<dt class="svelte-iaj60x">Context Objects</dt> <!>',1),zt=rt(y(`<nav><!></nav> <main class="svelte-iaj60x"><div class="svelte-iaj60x"><section class="svelte-iaj60x"><h2 class="svelte-iaj60x"> </h2> <p class="links svelte-iaj60x"><!> <a target="_blank" aria-label="Download RDF" class="svelte-iaj60x"><img style="height: 1em;" alt="Download RDF"/></a></p> <p class="description"> </p></section> <section class="textual svelte-iaj60x"><dl class="svelte-iaj60x"><dt class="svelte-iaj60x">Property</dt> <!> <dt class="svelte-iaj60x">Object of Interest</dt> <!> <!> <!> <!></dl></section></div> <br/> <div class="vis svelte-iaj60x"><iframe title="Visualization of the Variable" class="svelte-iaj60x"></iframe> <script>
      function updateVisSize( ev ) {
        // set the proper iframe ratio
        const iframe = document.querySelector( 'iframe' );
        const ratio = ev.data.width / ev.data.height;
        iframe.style.aspectRatio = ratio;
        // remove the listener
        window.removeEventListener( 'message', updateVisSize );
      }
      window.addEventListener( 'message', updateVisSize );;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    <\/script></div></main>`,1));function Jt(s,t){nt(t,!0);const e=yt(t.data.variable),i=t.data.path.split("/").slice(0,-1).map(()=>"..").join("/");var r=zt(),c=q(r),n=o(c);wt(n,{get selected(){return t.data.path},get variables(){return t.data.variableList}}),a(c);var m=h(c,2),x=o(m),j=o(x),k=o(j),L=o(k,!0);a(k);var B=h(k,2),J=o(B);{var P=f=>{var O=Pt();w(()=>R(O,"href",t.data.issue)),u(f,O)};I(J,f=>{t.data.issue&&f(P)})}var $=h(J,2),d=o($);a($),a(B);var l=h(B,2),b=o(l,!0);a(l),a(j);var _=h(j,2),g=o(_),S=h(o(g),2);{let f=X(()=>e.getProperty());K(S,()=>v(f))}var T=h(S,4);{let f=X(()=>e.getObjectOfInterest());K(T,()=>v(f))}var H=h(T,2);{var z=f=>{var O=$t(),N=h(q(O),2);{let D=X(()=>e.getStatisticalModifier());K(N,()=>v(D))}u(f,O)};I(H,f=>{e.getStatisticalModifier()&&f(z)})}var A=h(H,2);{var G=f=>{var O=At(),N=h(q(O),2);{let D=X(()=>e.getMatrix());K(N,()=>v(D))}u(f,O)};I(A,f=>{e.getMatrix()&&f(G)})}var C=h(A,2);{var p=f=>{var O=Tt(),N=h(q(O),2);W(N,17,()=>e.getContextObjects(),D=>D.getIri(),(D,mt)=>{K(D,()=>v(mt))}),u(f,O)};I(C,f=>{e.getContextObjects().length>0&&f(p)})}a(g),a(_),a(x);var V=h(x,4),U=o(V);dt(2),a(V),a(m),w((f,O,N)=>{E(L,f),R($,"href",`${i}/${t.data.path}`),R(d,"src",`${i}/rdf.svg`),E(b,O),R(U,"src",`https://sirkos.github.io/iadopt-vis/remote.html?jsonld=${N??""}`)},[()=>e.getLabel(!1),()=>e.getComment(),()=>encodeURIComponent(JSON.stringify(t.data.variable))]),u(s,r),at()}export{Jt as component};
