<script lang="ts" setup>
import type { BattingPlayer, BattingStats } from '~/types'
import { BattingStatsMap } from '~/types'

const client = useClient()

const uploadFile = async (file) => {
  if (file) {
    // transform players from arrays to object
    const { data: players } = await parseCSVFile<BattingStats[], BattingPlayer>(
      file,
      {
        transform: (row: any[]): BattingPlayer => {
          return row.reduce((rowObj, stat, index) => {
            const key = BattingStatsMap[index]
            rowObj[key] = stat
            return rowObj
          }, {})
        },
      },
    )
    const promises = []

    // create new players
    const newPlayers = new Set()
    players.forEach(p =>
      newPlayers.add(
        JSON.stringify({
          firstname: p.firstname,
          lastname: p.lastname,
          player_id: p['player ID'],
        }),
      ),
    )
    newPlayers.forEach((p) => {
      const data = JSON.parse(p)
      promises.push(client.records.create('players', data))
    })

    // upload stats
    const statRequests = players.map((p) => {
      const data = { player_id: p['player ID'], data: JSON.stringify(p) }
      return client.records.create('player_stats', data)
    })
    promises.push(...statRequests)

    await Promise.all(promises)
  }
}
</script>

<template>
  <FileUpload @update:modelValue="uploadFile" />
</template>
