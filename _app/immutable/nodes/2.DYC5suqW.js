import{a as c,w as $,f as m}from"../chunks/BAUrMlIe.js";import{W as v,X as O,Y as a,Z as e,_ as k,v as r,$ as A,a0 as E,a1 as I,a2 as U}from"../chunks/SnJFKQdN.js";import{s as _}from"../chunks/D9A6KP0f.js";import{e as C,i as V,s as x}from"../chunks/BVnccm3D.js";var W=m("<li><a> </a></li>"),X=$(m(`<div class="navBox svelte-1m3jda"><div class="navBoxHead">Filter</div> <div class="navBoxBody filterBody svelte-1m3jda"><input type="text" id="filter" placeholder="Filter Variables ..." class="svelte-1m3jda"/> <script>
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
    <\/script></div></div> <div class="navBox svelte-1m3jda"><div class="navBoxHead">Navigation</div> <div class="navBoxBody"><ul></ul></div></div>`,1));function Y(y,o){var n=X(),d=v(O(n),2),l=v(a(d),2),u=a(l);C(u,21,()=>o.nav,V,(f,t)=>{var i=W(),s=a(i),h=a(s,!0);e(s),e(i),k(b=>{x(s,"href",b),_(h,r(t).label)},[()=>`#${encodeURIComponent(r(t).link)}`]),c(f,i)}),e(u),e(l),e(d),c(y,n)}var Z=m('<li class="variable-item svelte-1uha8ag"><article><h3 class="svelte-1uha8ag"><a> </a></h3> <p class="svelte-1uha8ag"> </p> <a class="download svelte-1uha8ag" title="Download RDF"><img src="rdf.svg" alt="Download RDF" class="svelte-1uha8ag"/></a></article></li>'),z=m('<section><h2> </h2> <ul class="variable-list svelte-1uha8ag"></ul></section>'),G=m("<nav><!></nav> <main></main>",1);function Q(y,o){A(o,!0);const n=[];for(const[t,i]of Object.entries(o.data.variables))n.push({label:t,link:t});var d=G(),l=O(d),u=a(l);Y(u,{get nav(){return n}}),e(l);var f=v(l,2);C(f,21,()=>Object.entries(o.data.variables),([t,i])=>t,(t,i)=>{var s=I(()=>U(r(i),2));let h=()=>r(s)[0],b=()=>r(s)[1];var w=z(),p=a(w),R=a(p,!0);e(p);var D=v(p,2);C(D,21,b,B=>B.path,(B,g)=>{var j=Z(),q=a(j),F=a(q),L=a(F),S=a(L,!0);e(L),e(F);var T=v(F,2),H=a(T,!0);e(T);var N=v(T,2);e(q),e(j),k(()=>{x(L,"href",r(g).path+".html"),_(S,r(g).title),_(H,r(g).comment),x(N,"href",r(g).path)}),c(B,j)}),e(D),e(w),k(()=>{x(p,"id",h()),_(R,h())}),c(t,w)}),e(f),c(y,d),E()}export{Q as component};
