<script lang="ts">
  import type { NavList } from "./+page.svelte";

  let { nav } : {
    nav: Array<NavList>,
  } = $props();
</script>

<div class="navBox">
  <div class="navBoxHead">Filter</div>
  <div class="navBoxBody filterBody">
    <input type="text" id="filter" placeholder="Filter Variables ..."/>
    <script>
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
    </script>
  </div>
</div>


<div class="navBox">
  <div class="navBoxHead">Navigation</div>
  <div class="navBoxBody">
    <ul>
      {#each nav as entry}
        <li>
          <a href={entry.link}>
            {entry.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
.navBox {
  margin-bottom: 2em;
}

.filterBody {
  text-align: center;
}
.filterBody input {
  width:   80%;
  padding: 5px 10px;
}
</style>