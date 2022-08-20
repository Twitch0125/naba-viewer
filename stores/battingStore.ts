import type { BattingPlayer } from "~~/types";

export const useBattingStore = defineStore("battingStore", () => {
  const players = ref<BattingPlayer[]>([]);
  return {
    players,
  };
});
