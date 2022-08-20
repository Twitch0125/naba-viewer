import type {
  BattingPlayer,
  BattingStats,
  BattingStatsHeaders,
} from "~~/types";

export const useBattingStore = defineStore("battingStore", () => {
  const players = ref<BattingPlayer[]>([]);
  const headers = [
    "player ID",
    "lastname",
    "firstname",
    "year",
    "team ID",
    "g",
    "gs",
    "pa",
    "ab",
    "h",
    "2b",
    "3b",
    "hr",
    "rbi",
    "r",
    "sb",
    "cs",
    "bb",
    "hp",
    "k",
    "sh",
    "sf",
    "gdp",
    "ibb",
    "ci",
    "pitches seen",
    "vorp",
    "split_id",
    "team_abbr",
    "league_abbr",
    "team_name",
    "league_name",
    "league_level_id",
    "bbrefid",
    "bbrefminorid",
    "OOTP pID",
  ];
  const configuredHeaders = ref(headers);
  configuredHeaders.value = [...headers].slice(0, -4); // remove last 4 columns
  return {
    players,
    configuredHeaders,
  };
});
