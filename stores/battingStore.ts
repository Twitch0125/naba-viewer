import { BattingStatsDetails } from '~~/types'

export const useBattingStore = defineStore('battingStore', () => {
  const headers = Object.values(BattingStatsDetails).reduce((acc, cur) => {
    acc.push(cur)
    return acc
  }, [])
  // const headers = [
  //   "player ID",
  //   "lastname",
  //   "firstname",
  //   "year",
  //   "team ID",
  //   "g",
  //   "gs",
  //   "pa",
  //   "ab",
  //   "h",
  //   "2b",
  //   "3b",
  //   "hr",
  //   "rbi",
  //   "r",
  //   "sb",
  //   "cs",
  //   "bb",
  //   "hp",
  //   "k",
  //   "sh",
  //   "sf",
  //   "gdp",
  //   "ibb",
  //   "ci",
  //   "pitches seen",
  //   "vorp",
  //   "split_id",
  //   "team_abbr",
  //   "league_abbr",
  //   "team_name",
  //   "league_name",
  //   "league_level_id",
  //   "bbrefid",
  //   "bbrefminorid",
  //   "OOTP pID",
  // ];
  const configuredHeaders = computed(() =>
    headers.filter(header => !header.disabled),
  )

  const stats = ref([])

  const getBattingStats = async ({ page = 1, limit = 50, query = {} } = {}) => {
    return useLazyAsyncData(async () => {
      const client = useClient()
      const result = await client.records.getList(
        'player_stats',
        page,
        limit,
        query,
      )
      stats.value = result.items.map(item => item.data)
      return result
    })
  }

  return {
    stats,
    configuredHeaders,
    getBattingStats,
  }
})
