import{w as N,b as d,f}from"../chunks/D7Ng1HQ7.js";import{a5 as o,a9 as O,a6 as t,a8 as e,aa as C,o as a,a2 as U,a3 as A}from"../chunks/BUtGJK69.js";import{s as x}from"../chunks/CuVJyuQP.js";import{e as k,i as D,s as y}from"../chunks/DNDaUJNy.js";var E=f("<li><a> </a></li>"),V=N(f(`<div class="navBox svelte-1p0x8pv"><div class="navBoxHead">Filter</div> <div class="navBoxBody filterBody svelte-1p0x8pv"><input type="text" id="filter" placeholder="Filter Variables ..." class="svelte-1p0x8pv"/> <script>
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
    <\/script></div></div> <div class="navBox svelte-1p0x8pv"><div class="navBoxHead">Navigation</div> <div class="navBoxBody"><ul></ul></div></div>`,1));function z(_,v){var n=V(),c=o(O(n),2),s=o(t(c),2),m=t(s);k(m,21,()=>v.nav,D,(u,r)=>{var i=E(),l=t(i),b=t(l,!0);e(l),e(i),C(()=>{y(l,"href",a(r).link),x(b,a(r).label)}),d(u,i)}),e(m),e(s),e(c),d(_,n)}var G=f('<li class="variable-item svelte-14s58y4"><article><h3 class="svelte-14s58y4"><a> </a></h3> <p class="svelte-14s58y4"> </p> <a class="download svelte-14s58y4" title="Download RDF"><img src="rdf.svg" alt="Download RDF" class="svelte-14s58y4"/></a></article></li>'),J=f('<section><h2> </h2> <ul class="variable-list svelte-14s58y4"></ul></section>'),K=f("<nav><!></nav> <main></main>",1);function X(_,v){U(v,!0);const n=[];for(const[r,i]of Object.entries(v.data.variables))n.push({label:r,link:`#${encodeURIComponent(r)}`});var c=K(),s=O(c),m=t(s);z(m,{nav:n}),e(s);var u=o(s,2);k(u,21,()=>Object.entries(v.data.variables),D,(r,i)=>{let l=()=>a(i)[0],b=()=>a(i)[1];var g=J(),p=t(g),S=t(p,!0);e(p);var R=o(p,2);k(R,21,b,D,(w,h)=>{var B=G(),q=t(B),F=t(q),L=t(F),j=t(L,!0);e(L),e(F);var T=o(F,2),H=t(T,!0);e(T);var I=o(T,2);e(q),e(B),C(()=>{y(L,"href",a(h).path+".html"),x(j,a(h).title),x(H,a(h).comment),y(I,"href",a(h).path)}),d(w,B)}),e(R),e(g),C(w=>{y(p,"id",w),x(S,l())},[()=>encodeURIComponent(l())]),d(r,g)}),e(u),d(_,c),A()}export{X as component};
