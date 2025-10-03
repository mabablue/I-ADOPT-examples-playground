import"../chunks/DsnmJJEf.js";import{ar as U,O as v,as as O,N as c,M as m,P as t,R as e,at as C,S as a,ap as A,aq as E,au as M,av as P}from"../chunks/i9l11uot.js";import{s as y}from"../chunks/CrMtVf6c.js";import{e as R,i as k,s as _}from"../chunks/BZel-GpZ.js";var V=m("<li><a> </a></li>"),$=U(m(`<div class="navBox svelte-1p0x8pv"><div class="navBoxHead">Filter</div> <div class="navBoxBody filterBody svelte-1p0x8pv"><input type="text" id="filter" placeholder="Filter Variables ..." class="svelte-1p0x8pv"/> <script>
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
    <\/script></div></div> <div class="navBox svelte-1p0x8pv"><div class="navBoxHead">Navigation</div> <div class="navBoxBody"><ul></ul></div></div>`,1));function z(g,o){var n=$(),d=v(O(n),2),i=v(t(d),2),f=t(i);R(f,21,()=>o.nav,k,(u,r)=>{var s=V(),l=t(s),p=t(l,!0);e(l),e(s),C(()=>{_(l,"href",a(r).link),y(p,a(r).label)}),c(u,s)}),e(f),e(i),e(d),c(g,n)}var G=m('<li class="variable-item svelte-14s58y4"><article><h3 class="svelte-14s58y4"><a> </a></h3> <p class="svelte-14s58y4"> </p> <a class="download svelte-14s58y4" title="Download RDF"><img src="rdf.svg" alt="Download RDF" class="svelte-14s58y4"/></a></article></li>'),J=m('<section><h2> </h2> <ul class="variable-list svelte-14s58y4"></ul></section>'),K=m("<nav><!></nav> <main></main>",1);function Z(g,o){A(o,!0);const n=[];for(const[r,s]of Object.entries(o.data.variables))n.push({label:r,link:`#${encodeURIComponent(r)}`});var d=K(),i=O(d),f=t(i);z(f,{get nav(){return n}}),e(i);var u=v(i,2);R(u,21,()=>Object.entries(o.data.variables),k,(r,s)=>{var l=M(()=>P(a(s),2));let p=()=>a(l)[0],S=()=>a(l)[1];var b=J(),h=t(b),N=t(h,!0);e(h);var q=v(h,2);R(q,21,S,k,(w,x)=>{var B=G(),D=t(B),F=t(D),L=t(F),j=t(L,!0);e(L),e(F);var T=v(F,2),H=t(T,!0);e(T);var I=v(T,2);e(D),e(B),C(()=>{_(L,"href",a(x).path+".html"),y(j,a(x).title),y(H,a(x).comment),_(I,"href",a(x).path)}),c(w,B)}),e(q),e(b),C(w=>{_(h,"id",w),y(N,p())},[()=>encodeURIComponent(p())]),c(r,b)}),e(u),c(g,d),E()}export{Z as component};
