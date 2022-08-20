import type { BattingPlayer } from "~~/types";

export const useBattingStore = defineStore("battingStore", {
  state: () => ({
    players: [] as BattingPlayer[],
  }),
});
