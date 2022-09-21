<script lang="ts" setup>
import { useBattingStore } from "~/stores/battingStore";
import { BattingPlayer, BattingStats, BattingStatsMap } from "~/types";

const file = ref<File>({});
const battingStore = useBattingStore();
const { client } = usePB();

watch(file, async (file) => {
  if (file) {
    //transform players from arrays to object
    const { data: players } = await parseCSVFile<BattingStats[], BattingPlayer>(
      file,
      {
        transform: (row: any[]): BattingPlayer => {
          return row.reduce((rowObj, stat, index) => {
            let key = BattingStatsMap[index];
            rowObj[key] = stat;
            return rowObj;
          }, {}) as BattingPlayer; //idk how to tell typescript that the starting object will eventually be a BattingPlayer after the reduce;
        },
      }
    );
    //create new players
    const newPlayers = new Set();
    players.forEach((p) =>
      newPlayers.add(
        JSON.stringify({
          firstname: p.firstname,
          lastname: p.lastname,
          player_id: p["player ID"],
        })
      )
    );

    const promises = [];
    newPlayers.forEach((p) => {
      const data = JSON.parse(p);
      promises.push(client.records.create("players", data));
    });
    await Promise.all(promises);
  }
});
</script>

<template>
  <FileUpload v-model="file" />
</template>
