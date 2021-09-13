<script>
  import Dice from "./Dice.svelte";
  import { dicePool, Die, rolled } from "../stores/dicePool";

  let results = { highest: [], effectDie: null };
  dicePool.rollResults.subscribe((rr) => (results = rr));
</script>

<div
  id="dicePool"
  class="grid grid-cols-{Math.max(
    1,
    Math.min($dicePool.length, 8)
  )} gap-4 p-2 mx-auto mt-4 rounded-md"
>
  {#each $dicePool as die}
    {#if $rolled}
      {#if die.value === 1}
        <Dice
          sides={die.sides}
          scale={48}
          text={die.value}
          strokeWidth={3}
          fill="#1f2834"
        />
      {:else if results.effectDie.id === die.id}
        <Dice
          sides={die.sides}
          scale={48}
          text={die.value}
          fill="#2D5931"
          stroke="#2D5931"
        />
      {:else if !results.highest.some((d) => d.id === die.id)}
        <Dice
          sides={die.sides}
          scale={48}
          text={die.value}
          strokeWidth={3}
          fill="#424C59"
          stroke="#424C59"
          textColor="#82939F"
        />
      {:else}
        <Dice
          sides={die.sides}
          scale={48}
          text={die.value}
          strokeWidth={3}
          fill="white"
          textColor="black"
        />
      {/if}
    {:else}
      <Dice sides={die.sides} scale={48} text={die.value} />
    {/if}
  {/each}
</div>

<style>
  div {
    background-color: #1f2834;
  }
</style>
