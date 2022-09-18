<script setup lang="ts">
import { useBattingStore } from "~/stores/battingStore";
//use players from the store as table items
const battingStore = useBattingStore();
</script>

<template>
  <Table
    v-if="battingStore.players.length"
    :items="battingStore.players"
    :headers="battingStore.configuredHeaders"
  />
</template>
