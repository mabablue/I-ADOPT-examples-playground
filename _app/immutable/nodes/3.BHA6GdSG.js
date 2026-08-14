import{a as b,w as st,f as y,d as Q,t as tt}from"../chunks/DIGkfRCG.js";import{h as et,W as rt,X as h,Y as J,Z as nt,_ as l,$ as o,a0 as at,a1 as k,v as n,aL as T,au as ft,aM as dt}from"../chunks/CFhAOXkp.js";import{s as B}from"../chunks/DOhbLf2c.js";import{i as V}from"../chunks/DmS7NwYc.js";import{e as H,r as ut,s as z,a as _t}from"../chunks/Dg0Gv2gG.js";const it=[...` 	
\r\f \v\uFEFF`];function bt(s,t,e){var i=""+s;if(e){for(var r in e)if(e[r])i=i?i+" "+r:r;else if(i.length)for(var c=r.length,a=0;(a=i.indexOf(r,a))>=0;){var f=a+c;(a===0||it.includes(i[a-1]))&&(f===i.length||it.includes(i[f]))?i=(a===0?"":i.substring(0,a))+i.substring(f+1):a=f}}return i===""?null:i}function gt(s,t,e,i,r,c){var a=s.__className;if(et||a!==e||a===void 0){var f=bt(e,i,c);(!et||f!==s.getAttribute("class"))&&(f==null?s.removeAttribute("class"):s.className=f),s.__className=e}else if(c&&r!==c)for(var I in c){var j=!!c[I];(r==null||j!==!!r[I])&&s.classList.toggle(I,j)}return c}const ot=["hasPart"],pt=[["hasNumerator","hasDenominator"],["hasSource","hasTarget"]],lt=pt.flat(),Z=[...ot,...lt];class K{static#e=["en",""];#t;_iri;_shortIri;_label={};_comment={};_isBlank;_constrained=[];#i="";constructor({iri:t,shortIri:e,label:i,comment:r,isBlank:c}={}){this._iri=t,this._shortIri=e,this._isBlank=c??!t,typeof i=="string"?this._label[""]=i:this._label=Object.fromEntries(Object.entries(i??{}).filter(([a,f])=>f)),typeof r=="string"?this._comment[""]=r:this._comment=Object.fromEntries(Object.entries(r??{}).filter(([a,f])=>f)),this instanceof ct&&(this.#i="Variable")}clone(){return new K({iri:this._iri,shortiri:this._shortIri,label:JSON.parse(JSON.stringify(this._label)),comment:JSON.parse(JSON.stringify(this._comment)),isblank:this._isBlank})}setVariable(t){this.#t=t}getVariable(){return this.#t}setIri(t){t?(this._iri=t,this._isBlank=!1):(this._iri=null,this._isBlank=!0)}getIri(){return this._isBlank?null:this._iri}getId(){return this._iri}getShortIri(){return this._isBlank?null:this._shortIri}isBlank(){return this._isBlank}setLabel(t,e){this._label[t]=e}getLabel(t=!0){for(const r of K.#e)if(r in this._label)return this._label[r];let e=Object.values(this._label)[0];if(e)return e;if(t)return;const i=this._iri.split("/");return i.pop()||i.pop()||"[missing label]"}setComment(t,e){this._comment[t]=e}getComment(){for(const t of K.#e)if(t in this._comment)return this._comment[t];return Object.values(this._comment)[0]}setRole(t){this.#i=t}getRole(){return this.#i}}class ct extends K{#e;#t;#i;#n;#s=[];#r=[];setProperty(t){if(!(t instanceof vt))throw new Error("Can only assign instances of Property!");t.setVariable(this),t.setRole("Property"),this.#e=t}setObjectOfInterest(t){if(!(t instanceof R))throw new Error("Can only assign instances of Entity!");t.setVariable(this),t.setRole("OoI"),this.#t=t}setMatrix(t){if(!(t instanceof R))throw new Error("Can only assign instances of Entity!");t.setVariable(this),t.setRole("Matrix"),this.#i=t}setStatisticalModifier(t){if(!(t instanceof R))throw new Error("Can only assign instances of Entity!");t.setVariable(this),t.setRole("StatisticalModifier"),this.#n=t}addContextObject(t){if(!(t instanceof R))throw new Error("Can only assign instances of Entity!");t.setVariable(this),t.setRole("ContextObject"),this.#s.push(t)}addConstraint(t,...e){if(!(t instanceof ht))throw new Error("Can only assign instances of Constraint!");if(e.some(i=>i.getVariable()!=this))throw Error("Can only constrain entities of the same variable!");if(this.#r.includes(t)){const i=t.getEntities();for(const r of e)i.includes(r)||(t.addEntity(r),r._addConstraint(t));return}for(const i of e)t.addEntity(i),i._addConstraint(t);t.setRole("Constraint"),this.#r.push(t),t.setVariable(this)}getProperty(){return this.#e}getObjectOfInterest(){return this.#t}getMatrix(){return this.#i}getStatisticalModifier(){return this.#n}getContextObjects(){return this.#s.slice(0)}getConstraints(){return this.#r.slice(0)}getClassLabel(){return"Variable"}_removeConstraint(t){this.#r=this.#r.filter(e=>e!=t)}_removeContextObject(t){this.#s=this.#s.filter(e=>e!=t)}_removeStatisticalModifier(t){this.#n=void 0}_removeMatrix(){this.#i=void 0}toString(){return`[Variable ${this._iri?`(${this._iri})`:"(_blank)"}`+(Object.values(this._label).length?`
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
]`}}class ht extends K{#e=[];addEntity(t){this.#e.push(t)}getEntities(){return this.#e.slice(0)}getClassLabel(){return"Constraint"}remove(){this.getVariable()._removeConstraint(this),this.#e.forEach(t=>t._removeConstraint(this))}toString(){return`[Constraint ${this._iri?`(${this._iri})`:"(_blank)"}`+(Object.values(this._label).length?`
  label:
`+Object.entries(this._label).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+(Object.values(this._comment).length?`
  comment:
`+Object.entries(this._comment).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+`
]`}}class R extends K{#e=[];#t={};setVariable(t){super.setVariable(t),Object.values(this.#t).forEach(e=>e.forEach(i=>i.setVariable(t)))}_addConstraint(t){this.#e.push(t)}_removeConstraint(t){this.#e=this.#e.filter(e=>e!=t)}addConstraint(t){this.#e.push(t)}getConstraints(){return Array.from(this.#e)}addComponent(t,e){if(!Z.includes(t))throw new Error("Invalid property to connect a System to its components: "+t);t in this.#t||(this.#t[t]=[]),e.setVariable(this.getVariable()),e.setRole("SystemComponent"),this.#t[t].push(e)}getComponents(){return Object.entries(this.#t).reduce((t,e)=>(t[e[0]]=Array.from(e[1]),t),{})}getComponentCount(){return Object.entries(this.#t).reduce((t,e)=>t+e[1].length,0)}getComponentKeys(){return Object.keys(this.#t)}changeComponentKeys(t){for(const i of t)if(!Z.includes(i))throw new Error(`Invalid system property: "${i}"`);const e=Object.values(this.#t).flat();if(t.length!=e.length)throw new Error(`Need exactly ${e.length} new properties!`);this.#t={};for(let i=0;i<e.length;i++)this.addComponent(t[i],e[i])}isSystem(){return Object.keys(this.#t).length>0}isSymmetricSystem(){return Object.keys(this.#t).length==1}getClassLabel(){switch(!0){case this.getRole()=="StatisticalModifier":return"Stat. Mod.";case ot.some(t=>t in this.#t):return"SymmetricSystem";case lt.some(t=>t in this.#t):return"AsymmetricSystem";default:return"Entity"}}remove(){if(["OoI","SystemComponent","Property"].includes(this.getRole())){console.warn(`Can not remove Entities of type ${this.getRole()}`);return}for(const t of[...this.#e])t.remove();switch(this.removeComponents(),this.getRole()){case"Matrix":this.getVariable()._removeMatrix();break;case"ContextObject":this.getVariable()._removeContextObject(this);break;case"StatisticalModifier":this.getVariable()._removeStatisticalModifier(this);break;default:throw Error(`Missing Code for removal of Entity type ${this.getRole()}`)}}removeComponents(){if(this.isSystem()){const t=Object.values(this.#t).flat().flatMap(e=>e.getConstraints());for(const e of t)e.remove();this.#t={}}}toString(){return`[Entity ${this._iri?`(${this._iri})`:"(_blank)"}`+(Object.values(this._label).length?`
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
]`}clone(){const t=new R({iri:this._iri,shortIri:this._shortIri,label:this._label,comment:this._comment,isBlank:this._isBlank});for(const e of this.#e)t._addConstraint(e);for(const e in this.#t)for(const i of this.#t[e])t.addComponent(e,i.clone());return t}}class vt extends R{getClassLabel(){return"Property"}toString(){return`[Entity ${this._iri?`(${this._iri})`:"(_blank)"}`+(Object.values(this._label).length?`
  label:
`+Object.entries(this._label).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+(Object.values(this._comment).length?`
  comment:
`+Object.entries(this._comment).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+`
]`}}function jt(s){const t=new ct({iri:s["@id"],label:s.label,comment:s.comment}),e={};let i=F(s.property,vt,e);if(i&&t.setProperty(i),i=F(s.statisticalModifier,R,e),i&&t.setStatisticalModifier(i),i=F(s.ooi,R,e),i&&t.setObjectOfInterest(i),i=F(s.matrix,R,e),i&&t.setMatrix(i),s.context)for(const r of s.context)i=F(r,R,e),t.addContextObject(i);if(s.constraint)for(const r of s.constraint){let{constraint:c,entities:a}=Ct(r);a=a.map(f=>e[f]),t.addConstraint(c,...a)}return t}function F(s,t,e){if(!s)return;const i=new t({iri:s["@id"],label:s.label,comment:s.comment,isBlank:!("@id"in s)||s["@id"].startsWith("_:")});e[s["@id"]]=i;for(const r of Z)if(r in s){const c=Array.isArray(s[r])?s[r].map(a=>F(a,t,e)):[F(s[r],t,e)];for(const a of c)i.addComponent(r,a),e[a.getIri()]=a}return i}function Ct(s){if(s)return{constraint:new ht({iri:s["@id"],label:s.label,comment:s.comment}),entities:s.constrains}}var yt=y('<a class="navBoxItem"><li> </li></a>'),xt=y('<ul class="svelte-10b7788"></ul>'),Ot=y('<li class="navBoxSection svelte-10b7788"><label class="svelte-10b7788"><i> </i></label> <input type="checkbox" class="svelte-10b7788"/> <ul class="varlist svelte-10b7788"></ul> <!></li>'),St=st(y(`<div class="navBox svelte-10b7788"><div class="navBoxHead">Filter</div> <div class="navBoxBody filterBody svelte-10b7788"><input type="text" id="filter" placeholder="Filter Variables ..."/> <script>
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
    <\/script></div></div> <div class="navBox svelte-10b7788"><div class="navBoxHead">Navigation</div> <div class="navBoxBody svelte-10b7788"><ul class="svelte-10b7788"></ul></div></div>`,1));function wt(s,t){rt(t,!0);const e=(j,g=at)=>{var M=Ot(),x=l(M),D=l(x),G=l(D,!0);o(D),o(x);var L=h(x,2);ut(L);var v=h(L,2);H(v,21,()=>g().variables,m=>m.path,(m,u)=>{var p=yt(),w=l(p);let P;var A=l(w,!0);o(w),o(p),k(()=>{z(p,"href",(n(i)?`${n(i)}/${n(u).path}`:n(u).path)+".html"),P=gt(w,1,"svelte-10b7788",null,P,{selected:t.selected==n(u).path}),B(A,n(u).title)}),b(m,p)}),o(v);var d=h(v,2);{var O=m=>{var u=xt();H(u,21,()=>Object.values(g().children),p=>p.id,(p,w)=>{e(p,()=>n(w))}),o(u),b(m,u)};V(d,m=>{Object.values(g().children).length&&m(O)})}o(M),k(m=>{z(x,"for",`checkBox${g().id??""}`),B(G,g().label),z(L,"id",`checkBox${g().id??""}`),_t(L,m)},[()=>n(r).has(g().id)]),b(j,M)},i=T(()=>t.selected.split("/").slice(0,-1).map(()=>"..").join("/")),r=T(()=>{const j=new Set,g=t.selected.split("/");let M=t.variables;for(const x of g)x in M.children&&(M=M.children[x],j.add(M.id));return j});var c=St(),a=h(J(c),2),f=h(l(a),2),I=l(f);H(I,21,()=>Object.values(t.variables.children),j=>j.id,(j,g)=>{e(j,()=>n(g))}),o(I),o(f),o(a),b(s,c),nt()}const W=(s,t=at)=>{var e=Q(),i=J(e);{var r=c=>{var a=Lt(),f=l(a);{var I=v=>{var d=Et(),O=l(d,!0);o(d),k((m,u)=>{z(d,"href",m),B(O,u)},[()=>t().getIri(),()=>t().getLabel(!1)]),b(v,d)},j=v=>{var d=tt();k(O=>B(d,O),[()=>t().getLabel()??t().getShortIri()]),b(v,d)};V(f,v=>{t().getIri()?v(I):v(j,!1)})}var g=h(f,2);{var M=v=>{var d=It(),O=l(d,!0);o(d),k(m=>B(O,m),[()=>t().getComment()]),b(v,d)};V(g,v=>{t().getComment()&&v(M)})}var x=h(g,2);{var D=v=>{var d=Bt(),O=h(l(d),2);H(O,21,()=>t().getConstraints(),m=>m.getIri(),(m,u)=>{var p=kt(),w=l(p);{var P=S=>{var C=tt();k($=>B(C,$),[()=>n(u).getLabel()]),b(S,C)},A=S=>{var C=Mt(),$=l(C,!0);o(C),k((X,_)=>{z(C,"href",X),B($,_)},[()=>n(u).getIri(),()=>n(u).getLabel()]),b(S,C)};V(w,S=>{n(u).isBlank()?S(P):S(A,!1)})}var N=h(w,2);{var U=S=>{var C=Vt(),$=l(C,!0);o(C),k(X=>B($,X),[()=>n(u).getComment()]),b(S,C)};V(N,S=>{n(u).getComment()&&S(U)})}o(p),b(m,p)}),o(O),o(d),b(v,d)};V(x,v=>{t().getConstraints().length>0&&v(D)})}var G=h(x,2);{var L=v=>{var d=Q(),O=J(d);H(O,17,()=>Object.entries(t().getComponents()),([m,u])=>m,(m,u)=>{var p=T(()=>dt(n(u),2));let w=()=>n(p)[0],P=()=>n(p)[1];var A=Rt(),N=l(A),U=l(N,!0);o(N);var S=h(N,2);H(S,17,P,C=>C.getIri(),(C,$)=>{W(C,()=>n($))}),o(A),k(()=>B(U,w())),b(m,A)}),b(v,d)};V(G,v=>{t().getComponentCount()>0&&v(L)})}o(a),b(c,a)};V(i,c=>{t()&&c(r)})}b(s,e)};var Et=y("<a> </a>"),It=y('<p class="desc svelte-iaj60x"> </p>'),Mt=y("<a> </a>"),Vt=y('<p class="description"> </p>'),kt=y('<li class="constraint-item"><!> <!></li>'),Bt=y('<div><span class="subheading">Constraint(s)</span> <ul class="constraint-list"></ul></div>'),Rt=y('<dl class="svelte-iaj60x"><dt class="subheading svelte-iaj60x"> </dt> <!></dl>'),Lt=y("<dd><!> <!> <!> <!></dd>"),$t=y('<a target="_blank" aria-label="Discuss on Github" class="svelte-iaj60x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 367.4 90" style="height: 1em;"><g fill="currentColor"><path d="m46.1 0c-25.5 0-46.1 20.6-46.1 46.1 0 20.4 13.2 37.7 31.5 43.8 2.3.4 3.2-1 3.2-2.2 0-1.1-.1-4.7-.1-8.6-11.6 2.1-14.6-2.8-15.5-5.4-.5-1.3-2.8-5.4-4.7-6.5-1.6-.9-3.9-3-.1-3.1 3.6-.1 6.2 3.3 7.1 4.7 4.2 7 10.8 5 13.4 3.8.4-3 1.6-5 2.9-6.2-10.3-1.2-21-5.1-21-22.8 0-5 1.8-9.2 4.7-12.4-.5-1.2-2.1-5.9.5-12.2 0 0 3.9-1.2 12.7 4.7 3.7-1 7.6-1.6 11.5-1.6s7.8.5 11.5 1.6c8.8-6 12.7-4.7 12.7-4.7 2.5 6.3.9 11.1.5 12.2 2.9 3.2 4.7 7.3 4.7 12.4 0 17.7-10.8 21.6-21.1 22.8 1.7 1.4 3.1 4.2 3.1 8.5 0 6.2-.1 11.1-.1 12.7 0 1.2.9 2.7 3.2 2.2 18.2-6.1 31.4-23.4 31.4-43.8.3-25.4-20.4-46-45.9-46z"></path><path d="m221.6 67.1h-.1zm0 0c-.5 0-1.8.3-3.2.3-4.4 0-5.9-2-5.9-4.6v-17.5h8.9c.5 0 .9-.4.9-1.1v-9.5c0-.5-.4-.9-.9-.9h-8.9v-11.7c0-.4-.3-.7-.8-.7h-12c-.5 0-.8.3-.8.7v12.1s-6.1 1.5-6.5 1.6-.7.5-.7.9v7.6c0 .6.4 1.1.9 1.1h6.2v18.3c0 13.6 9.5 15 16 15 3 0 6.5-.9 7.1-1.2.3-.1.5-.5.5-.9v-8.4c.1-.6-.3-1-.8-1.1zm132.2-12.2c0-10.1-4.1-11.4-8.4-11-3.3.2-6 1.9-6 1.9v19.6s2.7 1.9 6.8 2c5.8.2 7.6-1.9 7.6-12.5zm13.6-.9c0 19.1-6.2 24.6-17 24.6-9.1 0-14.1-4.6-14.1-4.6s-.2 2.6-.5 2.9c-.2.3-.4.4-.8.4h-8.3c-.6 0-1.1-.4-1.1-.9l.1-62c0-.5.4-.9.9-.9h11.9c.5 0 .9.4.9.9l-.1 20.9s4.6-3 11.3-3h.1c6.8-0 16.7 2.5 16.7 21.7zm-48.7-20.2h-11.7c-.6 0-.9.4-.9 1.1v30.3s-3.1 2.2-7.3 2.2-5.4-1.9-5.4-6.1v-26.5c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v28.5c0 12.3 6.9 15.3 16.3 15.3 7.8 0 14.1-4.3 14.1-4.3s.3 2.2.4 2.5.5.5.9.5h7.5c.6 0 .9-.4.9-.9l.1-41.7c-.1-.4-.6-.9-1.2-.9zm-132.2 0h-11.9c-.5 0-.9.5-.9 1.1v40.9c0 1.1.7 1.5 1.7 1.5h10.7c1.1 0 1.4-.5 1.4-1.5v-41.1c0-.5-.5-.9-1-.9zm-5.8-18.9c-4.3 0-7.7 3.4-7.7 7.7s3.4 7.7 7.7 7.7c4.2 0 7.6-3.4 7.6-7.7s-3.4-7.7-7.6-7.7zm92-1.4h-11.8c-.5 0-.9.4-.9.9v22.8h-18.5v-22.7c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v62c0 .5.5.9.9.9h11.9c.5 0 .9-.4.9-.9v-26.6h18.5l-.1 26.5c0 .5.4.9.9.9h11.9c.5 0 .9-.4.9-.9v-62c0-.4-.4-.9-.9-.9zm-105.3 27.5v32c0 .2-.1.6-.3.7 0 0-7 5-18.5 5-13.9 0-30.3-4.4-30.3-33 0-28.7 14.4-34.6 28.4-34.5 12.2 0 17.1 2.7 17.8 3.2.2.3.3.5.3.8l-2.3 9.9c0 .5-.5 1.1-1.1.9-2-.6-5-1.8-12.1-1.8-8.2 0-17 2.3-17 20.8s8.4 20.6 14.4 20.6c5.1 0 7-.6 7-.6v-12.8h-8.2c-.6 0-1.1-.4-1.1-.9v-10.3c0-.5.4-.9 1.1-.9h20.9c.6-.1 1 .4 1 .9z"></path></g></svg></a>'),Pt=y('<dt class="svelte-iaj60x">Statistical Modifier</dt> <!>',1),At=y('<dt class="svelte-iaj60x">Matrix</dt> <!>',1),Tt=y('<dt class="svelte-iaj60x">Context Objects</dt> <!>',1),zt=st(y(`<nav><!></nav> <main class="svelte-iaj60x"><div class="svelte-iaj60x"><section class="svelte-iaj60x"><h2 class="svelte-iaj60x"> </h2> <p class="links svelte-iaj60x"><!> <a target="_blank" aria-label="Download RDF" class="svelte-iaj60x"><img style="height: 1em;" alt="Download RDF"/></a></p> <p class="description"> </p></section> <section class="textual svelte-iaj60x"><dl class="svelte-iaj60x"><dt class="svelte-iaj60x">Property</dt> <!> <dt class="svelte-iaj60x">Object of Interest</dt> <!> <!> <!> <!></dl></section></div> <br/> <div class="vis svelte-iaj60x"><iframe title="Visualization of the Variable" class="svelte-iaj60x"></iframe> <script>
      function updateVisSize( ev ) {
        // set the proper iframe ratio
        const iframe = document.querySelector( 'iframe' );
        const ratio = ev.data.width / ev.data.height;
        iframe.style.aspectRatio = ratio;
        // remove the listener
        window.removeEventListener( 'message', updateVisSize );
      }
      window.addEventListener( 'message', updateVisSize );;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    <\/script></div></main>`,1));function Jt(s,t){rt(t,!0);const e=T(()=>jt(t.data.variable)),i=T(()=>t.data.path.split("/").slice(0,-1).map(()=>"..").join("/"));var r=zt(),c=J(r),a=l(c);wt(a,{get selected(){return t.data.path},get variables(){return t.data.variableList}}),o(c);var f=h(c,2),I=l(f),j=l(I),g=l(j),M=l(g,!0);o(g);var x=h(g,2),D=l(x);{var G=_=>{var E=$t();k(()=>z(E,"href",t.data.issue)),b(_,E)};V(D,_=>{t.data.issue&&_(G)})}var L=h(D,2),v=l(L);o(L),o(x);var d=h(x,2),O=l(d,!0);o(d),o(j);var m=h(j,2),u=l(m),p=h(l(u),2);{let _=T(()=>n(e).getProperty());W(p,()=>n(_))}var w=h(p,4);{let _=T(()=>n(e).getObjectOfInterest());W(w,()=>n(_))}var P=h(w,2);{var A=_=>{var E=Pt(),Y=h(J(E),2);{let q=T(()=>n(e).getStatisticalModifier());W(Y,()=>n(q))}b(_,E)};V(P,_=>{n(e).getStatisticalModifier()&&_(A)})}var N=h(P,2);{var U=_=>{var E=At(),Y=h(J(E),2);{let q=T(()=>n(e).getMatrix());W(Y,()=>n(q))}b(_,E)};V(N,_=>{n(e).getMatrix()&&_(U)})}var S=h(N,2);{var C=_=>{var E=Tt(),Y=h(J(E),2);H(Y,17,()=>n(e).getContextObjects(),q=>q.getIri(),(q,mt)=>{W(q,()=>n(mt))}),b(_,E)};V(S,_=>{n(e).getContextObjects().length>0&&_(C)})}o(u),o(m),o(I);var $=h(I,4),X=l($);ft(2),o($),o(f),k((_,E,Y)=>{B(M,_),z(L,"href",`${n(i)}/${t.data.path}`),z(v,"src",`${n(i)}/rdf.svg`),B(O,E),z(X,"src",`https://sirkos.github.io/iadopt-vis/remote.html?jsonld=${Y??""}`)},[()=>n(e).getLabel(!1),()=>n(e).getComment(),()=>encodeURIComponent(JSON.stringify(t.data.variable))]),b(s,r),nt()}export{Jt as component};
