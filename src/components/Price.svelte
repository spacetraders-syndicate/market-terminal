<script>
  import { afterUpdate } from 'svelte';
  let element;
  export let price;
  export let location;
  afterUpdate(() => {
    flash(element);
  });
  function flash(element) {
    requestAnimationFrame(() => {
      // instant red bg flash in
      element.style.transition = 'none';
      element.style.color = 'rgba(62,163,130,1)';
      element.style.backgroundColor = 'rgba(93,93,93,0.8)';

      setTimeout(() => {
        // slow 1s fade out
        element.style.transition = 'color 5s, background 5s';
        element.style.color = '';
        element.style.backgroundColor = '';
      });
    });
  }
</script>

<li style="text-align:right" bind:this={element}>
  {price}
  <span class="item-location">{location}</span>
</li>

<style>
  .item-location {
    float: left;
  }
</style>
