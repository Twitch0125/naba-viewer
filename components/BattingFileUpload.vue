<script lang="ts" setup>
import { useBattingStore } from "~~/stores/battingStore";
import { BattingPlayer, BattingStats, BattingStatsMap } from "~~/types";

const file = ref<File>({});
const battingStore = useBattingStore();

watch(file, async (file) => {
  if (file) {
    //transform players from arrays to object
    const { data: players } = await parseCSVFile<BattingStats[], BattingPlayer>(
      file,
      {
        transform: (row): BattingPlayer => {
          return row.reduce((rowObj, stat, index) => {
            let key = BattingStatsMap[index];
            rowObj[key] = stat;
            return rowObj;
          }, {}) as BattingPlayer; //idk how to tell typescript that the starting object will eventually be a BattingPlayer after the reduce;
        },
      }
    );
    // end transform
    console.log("parsed players", players);
    battingStore.players = players;
  }
});
</script>

<template>
  <FileUpload v-model="file" />
</template>
