<script lang="ts">
  import type { Snippet } from 'svelte'

  // fetch remaining content
  let {
    children
  }: {
    children?: Snippet
  } = $props()
</script>

<div class="container">
  <header>
    <h1>I-ADOPT Variable Modelling Challenge</h1>
    <p>Current state of canonical solutions.</p>
  </header>

  {@render children?.()}


  <footer>
    <p>&copy; 2025 I-ADOPT. All rights reserved.</p>
  </footer>
</div>

<style>
.container {
  height: 100%;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  line-height: 1.6;
  display: grid;
  grid-template-columns: 300px calc( 100% - 300px );
  grid-template-rows: 150px calc( 100% - 210px ) 60px;
  grid-template-areas: "top top" "nav center" "bottom bottom";
}

header {
  background-color: #333;
  color: #fff;
  text-align: center;
  grid-area: top;
}

:global(nav) {
  padding: 1em;
  grid-area: "nav";
}

:global(main) {
  grid-area: center;
  padding: 1em;
  overflow: auto;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  grid-area: bottom;
}

:global(.navBox) {
  background: #fff;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}
:global(.navBoxHead) {
  padding: 5px;
  background: #ccc;
  text-align: center;
  font-weight: bold;
}
:global(.navBoxBody) {
  padding: 5px;
}
:global(.navBoxBody ul) {
  list-style-type:     disclosure-closed;
  list-style-position: outside;
  padding-left:        2em;
}
:global(.navBox a) {
  text-decoration: none;
  color: inherit;
}
</style>