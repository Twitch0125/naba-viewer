import { MaybeRef } from "@vueuse/core";
import { BattingPlayer, BattingStats, BattingStatsHeaders } from "~~/types";

export default function useBattingStat(
  player: MaybeRef<BattingPlayer>,
  stat: MaybeRef<BattingStats>
): Ref<BattingStatsHeaders[BattingStats]> {
  //return the stat for a player
  return computed(() => unref(player)[unref(stat)]);
}
