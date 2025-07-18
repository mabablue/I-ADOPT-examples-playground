<script module>
  export type NavList = {
    label:      string,
    link:       string,
    children?:  Array<NavList>
  }
</script>
<script lang="ts">
  import type { VariableList } from '$lib/store/variable';
    import OverviewNav from './OverviewNav.svelte';

  let {
    data
  }: {
    data: {
      variables: { [index: string]: Array<VariableList> }
    }
  } = $props()

  // build navigation hierarchy
  const nav : Array<NavList> = [];
  for( const [key, entries] of Object.entries( data.variables ) ) {
    nav.push({
      label: key,
      link: `#${encodeURIComponent( key )}`,
    })
  }
</script>

<nav>
  <OverviewNav nav={nav} />
</nav>

<main>
  {#each Object.entries( data.variables ) as [key, entries]}
  <section>
    <h2 id="{encodeURIComponent( key )}">{key}</h2>
    <ul class="variable-list">
      {#each entries as entry}
      <li class="variable-item">
        <article>
          <h3><a href="{entry.path + '.html'}">{entry.title}</a></h3>
          <p>{entry.comment}</p>
          <a href="{entry.path}" class="download" title="Download RDF">
            <img src="rdf.svg" alt="Download RDF">
          </a>
        </article>
      </li>
      {/each}
    </ul>
  </section>
  {/each}
</main>

<style>
.variable-list {
  list-style-type: none;
  padding: 0;
}

.variable-item {
  background: #fff;
  margin: 10px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.variable-item h3 {
  margin: 0;
  font-size: 1.2em;
}

.variable-item p {
  margin: 0.5em 0;
}

.download {
  display: inline-block;
  margin-left: 10px;
}

.download img {
  vertical-align: middle;
  height: 1em;
}

:global(.hidden) {
  display: none;
}
</style>