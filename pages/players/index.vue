<script lang="ts" setup>
import { TableHeader } from "~~/components/Table";

const { client } = await usePB();
const { data: players } = await useAsyncData(async (nuxtApp) => {
  return await client.records.getFullList("players");
});
const headers: TableHeader[] = [
  { sortable: true, display: "First Name", name: "firstname" },
  { sortable: true, display: "Last Name", name: "lastname" },
  { sortable: true, display: "Player ID", name: "player_id" },
];
</script>

<template>
  <div>
    <div class="container max-w-2xl mx-auto">
      <h1>Players</h1>
    </div>
    <div>
      <Table :items="players" item-key="id" :headers="headers" />

      <pre>
            {{ players }}
        </pre
      >
    </div>
  </div>
</template>
