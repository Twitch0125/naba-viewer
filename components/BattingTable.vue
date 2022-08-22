<script setup lang="ts">
import type { TableHeader } from "./Table";
import { useBattingStore } from "~~/stores/battingStore";
import { BattingPlayer, BattingStats, BattingStatsMap } from "~~/types";
//use players from the store as table items
const battingStore = useBattingStore();
const items = $computed<BattingPlayer[]>(() => battingStore.players);
const selectedHeaders = $computed<TableHeader[]>(
  () => battingStore.configuredHeaders
);
</script>

<template>
  <Table v-if="items.length" :items="items" :headers="selectedHeaders" />
</template>
