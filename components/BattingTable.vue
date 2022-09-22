<script setup>
import { useBattingStore } from "~/stores/battingStore";
//use players from the store as table items
const battingStore = useBattingStore();
battingStore.getBattingStats();
</script>

<template>
  <Table
    v-if="battingStore.stats.length"
    :items="battingStore.stats"
    :headers="battingStore.configuredHeaders"
  />
</template>
