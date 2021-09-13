<script>
  import Dice from "./Dice.svelte";
  import { dicePool } from "../stores/dicePool";

  let results = { highest: [], effectDie: null };

  dicePool.rollResults.subscribe((rr) => (results = rr));

  $: sum = results.highest.reduce((total, die) => total + die.value, 0);
</script>

<div class="grid grid-cols-2 mx-auto mt-4">
  <div class="grid grid-cols-2 gap-4 p-2 bg-gray-400 border border-gray-800">
    {#each results.highest as die}
      <Dice
        sides={die.sides}
        text={die.value}
        scale={42}
        fill="white"
        textColor="black"
        strokeWidth={3}
        class={results.highest.length === 1 ? "col-span-2 mx-auto" : ""}
      />
    {/each}
    <div
      class="flex flex-col w-full col-span-2 pb-1 text-2xl text-center bg-gray-600"
    >
      {#if sum !== 0}
        <span class="text-lg">Total</span>
        {sum}
      {:else}
        <span class="my-auto text-2xl font-bold">BOTCH</span>
      {/if}
    </div>
  </div>
  <div class="flex flex-col p-2 m-auto ml-4 bg-gray-400 border border-gray-800">
    <span class="mb-1 text-xl">Effect Die</span>
    <Dice
      sides={results.effectDie.sides}
      scale={48}
      text={results.effectDie.sides}
      class="mx-auto"
      fill="#2D5931"
      stroke="#2D5931"
    />
  </div>
</div>
