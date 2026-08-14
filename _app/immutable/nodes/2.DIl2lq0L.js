import{a as f,w as S,f as h}from"../chunks/DIGkfRCG.js";import{W as F,X as u,Y as B,Z as O,_ as i,$ as a,a0 as T,a1 as j,v as d}from"../chunks/CFhAOXkp.js";import{s as _}from"../chunks/DOhbLf2c.js";import{e as g,s as b}from"../chunks/Dg0Gv2gG.js";import{i as H}from"../chunks/DmS7NwYc.js";const C=(m,e=T)=>{var r=k(),t=i(r),s=i(t,!0);a(t);var c=u(t,2);{var l=v=>{var o=N();g(o,21,()=>Object.values(e().children),n=>n.label,(n,p)=>{C(n,()=>d(p))}),a(o),f(v,o)};H(c,v=>{Object.values(e().children).length&&v(l)})}a(r),j(v=>{b(t,"href",v),_(s,e().label)},[()=>`#${encodeURIComponent(e().extLabel)}`]),f(m,r)};var N=h("<ul></ul>"),k=h("<li><a> </a> <!></li>"),A=S(h(`<div class="navBox svelte-1m3jda"><div class="navBoxHead">Filter</div> <div class="navBoxBody filterBody svelte-1m3jda"><input type="text" id="filter" placeholder="Filter Variables ..." class="svelte-1m3jda"/> <script>
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

          for( const entry of document.querySelectorAll( '.variable-item') ) {

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
        }

      })();
    <\/script></div></div> <div class="navBox svelte-1m3jda"><div class="navBoxHead">Navigation</div> <div class="navBoxBody"><ul></ul></div></div>`,1));function E(m,e){F(e,!0);var r=A(),t=u(B(r),2),s=u(i(t),2),c=i(s);g(c,21,()=>Object.values(e.nav.children),l=>l.label,(l,v)=>{C(l,()=>d(v))}),a(c),a(s),a(t),f(m,r),O()}const D=(m,e=T)=>{var r=V(),t=B(r),s=i(t),c=i(s,!0);a(s);var l=u(s,2);g(l,21,()=>e().variables,o=>o.path,(o,n)=>{var p=U(),L=i(p),x=i(L),y=i(x),q=i(y,!0);a(y),a(x);var w=u(x,2),I=i(w,!0);a(w);var R=u(w,2);a(L),a(p),j(()=>{b(y,"href",d(n).path+".html"),_(q,d(n).title),_(I,d(n).comment),b(R,"href",d(n).path)}),f(o,p)}),a(l),a(t);var v=u(t,2);g(v,17,()=>Object.values(e().children),o=>o.label,(o,n)=>{D(o,()=>d(n))}),j(()=>{b(s,"id",e().extLabel),_(c,e().extLabel)}),f(m,r)};var U=h('<li class="variable-item svelte-1uha8ag"><article><h3 class="svelte-1uha8ag"><a> </a></h3> <p class="svelte-1uha8ag"> </p> <a class="download svelte-1uha8ag" title="Download RDF"><img src="rdf.svg" alt="Download RDF" class="svelte-1uha8ag"/></a></article></li>'),V=h('<section><h2> </h2> <ul class="variable-list svelte-1uha8ag"></ul></section> <!>',1),W=h("<nav><!></nav> <main></main>",1);function J(m,e){F(e,!0);var r=W(),t=B(r),s=i(t);E(s,{get nav(){return e.data.variables}}),a(t);var c=u(t,2);g(c,21,()=>Object.values(e.data.variables.children),l=>l.label,(l,v)=>{D(l,()=>d(v))}),a(c),f(m,r),O()}export{J as component};
