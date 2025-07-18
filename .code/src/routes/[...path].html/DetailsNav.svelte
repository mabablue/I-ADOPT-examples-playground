<script lang="ts">
  import type { VariableList } from "$lib/store/variable";


  let {
    selected,
    variables,
   } : {
    selected: string,
    variables: { [index: string]: Array<VariableList> },
  } = $props();

  // determine base path
  const toBase = selected
    .split( '/' )
    .slice( 0, -1 )
    .map( () => '..' )
    .join( '/')

  // determine selected section
  const selectedSection = Object.keys( variables )
    .find( (key) => variables[key].some( (v) => v.path == selected ) )
</script>

<div class="navBox">
  <div class="navBoxHead">Navigation</div>
  <div class="navBoxBody">
    <ul>
      {#each Object.keys(variables) as section}
        <li>
          <label for="checkBox{section}">
            <i>{section}</i>
          </label>
          <input id="checkBox{section}" type="checkbox" checked={selectedSection == section} />
          <ul>
          {#each variables[section] as variable}
          <a href={(toBase ? `${toBase}/${variable.path}` : variable.path) + '.html'}>
            <li class:selected={selected == variable.path}>
                {variable.title}
            </li>
          </a>
          {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
ul ul {
  font-size: 90%;
}
.selected {
  font-weight: bold;
}


.navBox {
  max-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.navBoxBody {
  overflow-y: auto;
  overflow-x: hidden;
}

ul li:has( input[type="checkbox"]:checked ) {
  list-style-type: disclosure-open;
}
label {
  cursor: pointer;
}
input[type=checkbox] {
  display: none;
}
:global( .navBox input[type="checkbox"] + ul ) {
  display: none;
}
:global( .navBox input[type="checkbox"]:checked + ul ) {
  display: block;
}
</style>