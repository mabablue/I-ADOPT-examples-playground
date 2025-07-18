<script>
  import { Entity } from "$lib/util/model/models";
  import parse from "$lib/util/model/parseJSONLD";
  import DetailsNav from "./DetailsNav.svelte";

  let { data } = $props();
  const variable = parse( data.variable );

  // determine base path
  const toBase = data.path
    .split( '/' )
    .slice( 0, -1 )
    .map( () => '..' )
    .join( '/')
</script>

<nav>
  <DetailsNav selected={data.path} variables={data.variableList}/>
</nav>

{#snippet subsection(/** @type {Entity} */ entity)}
  {#if entity}
    <dd>
      {#if entity.getIri()}
        <a href="{entity.getIri()}">{entity.getLabel()}</a>
      {:else}
        {entity.getLabel()}
      {/if}

      {#if entity.getComment()}
      <p class="desc">
        {entity.getComment()}
      </p>
      {/if}

      {#if entity.getConstraints().length > 0}
        <div>
          <span class="subheading">Constraint(s)</span>
          <ul class="constraint-list">
            {#each entity.getConstraints() as constraint}
              <li class="constraint-item">
                {#if constraint.isBlank()}
                  {constraint.getLabel()}
                {:else}
                  <a href="{constraint.getIri()}">{constraint.getLabel()}</a>
                {/if}
                {#if constraint.getComment()}
                  <p class="description">{constraint.getComment()}</p>
                {/if}
              </li>
            {/each}
          </ul>
        </div>
      {/if}

      {#if entity.getComponentCount() > 0}
        {#each Object.entries( entity.getComponents() ) as [key, components]}
          <dl>
            <dt class="subheading">{key}</dt>
            {#each components as component}
              {@render subsection( component )}
            {/each}
          </dl>
        {/each}
      {/if}

    </dd>
  {/if}
{/snippet}


<main>
  <div>
    <section>
      <h2>{variable.getLabel()}</h2>
      <p class="links">
        {#if data.issue}
          <a href="{data.issue}" target="_blank" aria-label="Discuss on Github">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 367.4 90" style="height: 1em;"><g fill="currentColor"><path d="m46.1 0c-25.5 0-46.1 20.6-46.1 46.1 0 20.4 13.2 37.7 31.5 43.8 2.3.4 3.2-1 3.2-2.2 0-1.1-.1-4.7-.1-8.6-11.6 2.1-14.6-2.8-15.5-5.4-.5-1.3-2.8-5.4-4.7-6.5-1.6-.9-3.9-3-.1-3.1 3.6-.1 6.2 3.3 7.1 4.7 4.2 7 10.8 5 13.4 3.8.4-3 1.6-5 2.9-6.2-10.3-1.2-21-5.1-21-22.8 0-5 1.8-9.2 4.7-12.4-.5-1.2-2.1-5.9.5-12.2 0 0 3.9-1.2 12.7 4.7 3.7-1 7.6-1.6 11.5-1.6s7.8.5 11.5 1.6c8.8-6 12.7-4.7 12.7-4.7 2.5 6.3.9 11.1.5 12.2 2.9 3.2 4.7 7.3 4.7 12.4 0 17.7-10.8 21.6-21.1 22.8 1.7 1.4 3.1 4.2 3.1 8.5 0 6.2-.1 11.1-.1 12.7 0 1.2.9 2.7 3.2 2.2 18.2-6.1 31.4-23.4 31.4-43.8.3-25.4-20.4-46-45.9-46z"></path><path d="m221.6 67.1h-.1zm0 0c-.5 0-1.8.3-3.2.3-4.4 0-5.9-2-5.9-4.6v-17.5h8.9c.5 0 .9-.4.9-1.1v-9.5c0-.5-.4-.9-.9-.9h-8.9v-11.7c0-.4-.3-.7-.8-.7h-12c-.5 0-.8.3-.8.7v12.1s-6.1 1.5-6.5 1.6-.7.5-.7.9v7.6c0 .6.4 1.1.9 1.1h6.2v18.3c0 13.6 9.5 15 16 15 3 0 6.5-.9 7.1-1.2.3-.1.5-.5.5-.9v-8.4c.1-.6-.3-1-.8-1.1zm132.2-12.2c0-10.1-4.1-11.4-8.4-11-3.3.2-6 1.9-6 1.9v19.6s2.7 1.9 6.8 2c5.8.2 7.6-1.9 7.6-12.5zm13.6-.9c0 19.1-6.2 24.6-17 24.6-9.1 0-14.1-4.6-14.1-4.6s-.2 2.6-.5 2.9c-.2.3-.4.4-.8.4h-8.3c-.6 0-1.1-.4-1.1-.9l.1-62c0-.5.4-.9.9-.9h11.9c.5 0 .9.4.9.9l-.1 20.9s4.6-3 11.3-3h.1c6.8-0 16.7 2.5 16.7 21.7zm-48.7-20.2h-11.7c-.6 0-.9.4-.9 1.1v30.3s-3.1 2.2-7.3 2.2-5.4-1.9-5.4-6.1v-26.5c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v28.5c0 12.3 6.9 15.3 16.3 15.3 7.8 0 14.1-4.3 14.1-4.3s.3 2.2.4 2.5.5.5.9.5h7.5c.6 0 .9-.4.9-.9l.1-41.7c-.1-.4-.6-.9-1.2-.9zm-132.2 0h-11.9c-.5 0-.9.5-.9 1.1v40.9c0 1.1.7 1.5 1.7 1.5h10.7c1.1 0 1.4-.5 1.4-1.5v-41.1c0-.5-.5-.9-1-.9zm-5.8-18.9c-4.3 0-7.7 3.4-7.7 7.7s3.4 7.7 7.7 7.7c4.2 0 7.6-3.4 7.6-7.7s-3.4-7.7-7.6-7.7zm92-1.4h-11.8c-.5 0-.9.4-.9.9v22.8h-18.5v-22.7c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v62c0 .5.5.9.9.9h11.9c.5 0 .9-.4.9-.9v-26.6h18.5l-.1 26.5c0 .5.4.9.9.9h11.9c.5 0 .9-.4.9-.9v-62c0-.4-.4-.9-.9-.9zm-105.3 27.5v32c0 .2-.1.6-.3.7 0 0-7 5-18.5 5-13.9 0-30.3-4.4-30.3-33 0-28.7 14.4-34.6 28.4-34.5 12.2 0 17.1 2.7 17.8 3.2.2.3.3.5.3.8l-2.3 9.9c0 .5-.5 1.1-1.1.9-2-.6-5-1.8-12.1-1.8-8.2 0-17 2.3-17 20.8s8.4 20.6 14.4 20.6c5.1 0 7-.6 7-.6v-12.8h-8.2c-.6 0-1.1-.4-1.1-.9v-10.3c0-.5.4-.9 1.1-.9h20.9c.6-.1 1 .4 1 .9z"></path></g></svg>
          </a>
        {/if}
        <a href={`${toBase}/${data.path}`} target="_blank" aria-label="Download RDF">
          <img src={`${toBase}/rdf.svg`} style="height: 1em;" alt="Download RDF">
        </a>
      </p>
      <p class="description">{variable.getComment()}</p>
    </section>

    <section class="textual">
      <dl>

        <dt>Property</dt>
        {@render subsection( variable.getProperty() ) }

        <dt>Object of Interest</dt>
        {@render subsection( variable.getObjectOfInterest() ) }

        {#if variable.getStatisticalModifier()}
          <dt>Statistical Modifier</dt>
          {@render subsection( variable.getStatisticalModifier() ) }
        {/if}

        {#if variable.getMatrix()}
          <dt>Matrix</dt>
          {@render subsection( variable.getMatrix() ) }
        {/if}

        {#if variable.getContextObjects().length > 0}
          <dt>Context Objects</dt>
          {#each variable.getContextObjects() as context }
            {@render subsection( context ) }
          {/each}
        {/if}
      </dl>
    </section>
  </div>
  <br>
  <div class="vis">
    <iframe
      title="Visualization of the Variable"
      src="https://sirkos.github.io/iadopt-vis/remote.html?jsonld={encodeURIComponent( JSON.stringify( data.variable ) )}"
    ></iframe>
    <script>
      function updateVisSize( ev ) {
        // set the proper iframe ratio
        const iframe = document.querySelector( 'iframe' );
        const ratio = ev.data.width / ev.data.height;
        iframe.style.aspectRatio = ratio;
        // remove the listener
        window.removeEventListener( 'message', updateVisSize );
      }
      window.addEventListener( 'message', updateVisSize );
    </script>

  </div>

</main>


<style>
main {
  grid-area: center;
  padding: 1em;
  overflow: auto;
  text-align: center;
}

main > div {
  display: inline-block;
  text-align: center;

  max-width: 1024px;
}

main > div section {
  text-align: left;
}

.textual {
  display: inline-block;
}

h2 {
  margin-bottom: 0;
  text-align: center;
}

.links {
  margin-top: 0;
  text-align: center;
}

.links a {
  margin: 0 0.3em;
}

.desc {
  font-size: 80%;
  font-style: italic;
}

dt {
  font-weight: bold;
}
dl dl {
  font-size: 80%;
}

/* Visualization */
.vis {
  margin-top: 1em;
  text-align: center;
}

.vis iframe {
  border: 0;

  max-width: 1024px;
  width: 80vw;
}
</style>