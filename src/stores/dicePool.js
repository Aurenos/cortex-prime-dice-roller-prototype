import { derived, writable } from "svelte/store";

let diceId = 0;

export class Die {
  constructor(sides, id = ++diceId) {
    this.sides = sides;
    this.value = sides;
    this.id = id;
  }

  roll() {
    this.value = Math.floor(Math.random() * this.sides) + 1;
  }
}

function createDicePool() {
  const pool = writable([]);
  const { subscribe, update, set } = pool;

  const rollResults = derived(pool, ($pool) => {
    let dp = [...$pool]
      .sort((a, b) => b.value - a.value || a.sides - b.sides)
      .filter((d) => d.value !== 1);
    let highest = dp.slice(0, 2);
    for (let _ in highest) {
      dp.shift();
    }

    dp = dp.sort((a, b) => b.sides - a.sides).filter((d) => d.value !== 1);
    let effectDie = dp.length > 0 ? dp[0] : new Die(4, -1);
    return { highest, effectDie };
  });

  return {
    subscribe,
    rollResults,
    add: (sides) =>
      update((dp) => {
        for (let die of dp) {
          die.value = die.sides;
        }
        return [...dp, new Die(sides)].sort((a, b) => a.sides - b.sides);
      }),
    clear: () => set([]),
    roll: () =>
      update((dp) => {
        for (let die of dp) {
          die.roll();
        }
        return dp;
      }),
  };
}

export const dicePool = createDicePool();
export const rolled = writable(false);
