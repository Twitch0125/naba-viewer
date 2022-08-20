<script setup lang="ts">
import { useBattingStore } from "~~/stores/battingStore";
import { BattingPlayer, BattingStats, BattingStatsMap } from "~~/types";
//use players from the store as table items
const battingStore = useBattingStore();
const items = $computed<BattingPlayer[]>(() => battingStore.players);
const selectedHeaders = $computed<string[]>(
  () => battingStore.configuredHeaders
);

const itemKey: keyof BattingPlayer = BattingStatsMap[BattingStats.playerID];
</script>

<template>
  <Table
    v-if="items.length"
    :items="items"
    :item-key="itemKey"
    :headers="selectedHeaders"
  />
</template>
