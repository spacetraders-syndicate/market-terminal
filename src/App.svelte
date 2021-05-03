<script>
  import { onMount } from 'svelte';
  import store from './store/index.ts';
  import Price from './components/Price.svelte';
  let data = [];

  onMount(() => {
    store.state.subscribe((value) => {
      data = value;
      console.log(data);
    });
  });
</script>

<main>
  <h1>SpaceTraders Market Terminal</h1>
  <h2>A SpaceTraders Syndicate Tool</h2>

  <ul class="container">
    {#each data as item}
      <li class="col">
        <span class="item_header">{item.symbol}</span>
        <ul>
          {#each item.prices.sort((a, b) => {
            if (a.pricePerUnit === b.pricePerUnit) {
              // Price is only important when cities are the same
              return b.location > a.location ? -1 : 1;
            }
            return a.pricePerUnit > b.pricePerUnit ? 1 : -1;
          }) as price (price.location)}
            <Price location={price.location} price={price.pricePerUnit} />
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  .item_header {
    font-size: 12px;
    font-weight: bolder;
    display: block;
    border-bottom: 1px solid #4ecca3;
    margin-bottom: 5px;
  }

  @media (min-width: 640px) {
  }
  ul.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 3fr));
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li.col {
    margin: 0.5em;
  }
</style>
