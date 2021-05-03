<script>
  import { onMount } from 'svelte';
  import store from './store/index.ts';
  let data;

  onMount(() => {
    store.state.subscribe((value) => {
      data = Object.keys(value);
      console.log(data);
    });
  });
</script>

<main>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <!-- {#each data as message, i}
    <p>{message}</p>
  {/each} -->
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
