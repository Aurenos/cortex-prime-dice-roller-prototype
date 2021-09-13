<script>
  import Tailwind from "./Tailwind.svelte";
  import DiceBag from "./components/DiceBag.svelte";
  import DicePool from "./components/DicePool.svelte";
  import RollResults from "./components/RollResults.svelte";
  import { dicePool, rolled } from "./stores/dicePool";

  let poolSize = 0;

  dicePool.subscribe((dp) => {
    poolSize = dp.length;
  });

  $: poolSize, ($rolled = false);
</script>

<svelte:head>
  <title>Cortex Dice</title>
</svelte:head>

<Tailwind />

<main class="container mx-auto">
  <div class="flex flex-col">
    <DiceBag />

    {#if poolSize > 0}
      <DicePool />
    {/if}

    {#if $rolled}
      <RollResults />
    {/if}

    <div class="grid grid-cols-2 mx-auto mt-4">
      <button
        on:click={() => {
          dicePool.roll();
          $rolled = true;
        }}
        class:disabled={poolSize < 1}
        disabled={poolSize < 1}>Roll Dice</button
      >
      <button on:click={() => dicePool.clear()}>Clear Pool</button>
    </div>
  </div>
</main>

<style lang="postcss">
  main {
    @apply bg-gray-500;
    @apply text-gray-200;
    @apply py-2;
  }

  button {
    @apply px-4 py-1 mx-auto;
    @apply border border-gray-400;
    @apply rounded;
    @apply font-semibold;
  }

  button:hover:enabled {
    @apply bg-indigo-900;
    @apply text-white;
  }

  button:focus:enabled {
    @apply bg-indigo-900;
    @apply text-white;
  }
</style>
