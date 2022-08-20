<script setup lang="ts">
import { useBattingStore } from "~~/stores/battingStore";
import { BattingPlayer, BattingStats, BattingStatsMap } from "~~/types";
//use players from the store as table items
const battingStore = useBattingStore();
const items = $computed<BattingPlayer[]>(() => battingStore.players);
//use keys from the first player object to find the headers
const headers = $computed(() => Object.keys(items[0]));
const itemKey: keyof BattingPlayer = BattingStatsMap[BattingStats.OOTPpID];
</script>

<template>
  <Table
    v-if="items.length"
    :items="items"
    :item-key="itemKey"
    :headers="headers"
  />
</template>
