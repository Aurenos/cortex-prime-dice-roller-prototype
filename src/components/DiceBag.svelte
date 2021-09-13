<script>
  import Dice from "./Dice.svelte";
  import { dicePool } from "../stores/dicePool";
</script>

<div
  class="grid grid-cols-5 grid-rows-1 gap-2 p-2 mx-auto text-3xl border-2 border-gray-800 rounded-md"
>
  <button on:click={() => dicePool.add(4)}>
    <Dice sides={4} text="4" scale={48} />
  </button>
  <button on:click={() => dicePool.add(6)}>
    <Dice sides={6} text="6" scale={48} />
  </button>
  <button on:click={() => dicePool.add(8)}>
    <Dice sides={8} text="8" scale={48} />
  </button>
  <button on:click={() => dicePool.add(10)}>
    <Dice sides={10} text="10" scale={48} />
  </button>
  <button on:click={() => dicePool.add(12)}>
    <Dice sides={12} text="12" scale={48} />
  </button>
</div>

<style lang="postcss">
  div {
    background-color: #1f2834;
  }

  button {
    @apply p-2 mx-auto;
    @apply border-2 border-gray-300 bg-gray-300;
    @apply rounded;
    @apply font-semibold;
  }

  button:hover {
    background-color: #1f2834;
  }
</style>
