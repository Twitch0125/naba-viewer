// batting

export enum BattingStats {
  playerID = 0,
  lastName = 1,
  firstName = 2,
  year = 3,
  teamID = 4,
  g = 5,
  gs = 6,
  pa = 7,
  ab = 8,
  h = 9,
  secondBase = 10,
  thirdBase = 11,
  hr = 12,
  rbi = 13,
  r = 14,
  sb = 15,
  cs = 16,
  bb = 17,
  hp = 18,
  k = 19,
  sh = 20,
  sf = 21,
  gdp = 22,
  ibb = 23,
  ci = 24,
  pitchesSeen = 25,
  vorp = 26,
  split_id = 27,
  team_abbr = 28,
  league_abbr = 29,
  team_name = 30,
  league_name = 31,
  league_level_id = 32,
  bbrefid = 33,
  bbrefminorid = 34,
  OOTPpID = 35,
}

export interface BattingStatsHeaders {
  [BattingStats.playerID]: "player ID";
  [BattingStats.lastName]: "lastname";
  [BattingStats.firstName]: "firstname";
  [BattingStats.year]: "year";
  [BattingStats.teamID]: "team ID";
  [BattingStats.g]: "g";
  [BattingStats.gs]: "gs";
  [BattingStats.pa]: "pa";
  [BattingStats.ab]: "ab";
  [BattingStats.h]: "h";
  [BattingStats.secondBase]: "2b";
  [BattingStats.thirdBase]: "3b";
  [BattingStats.hr]: "hr";
  [BattingStats.rbi]: "rbi";
  [BattingStats.r]: "r";
  [BattingStats.sb]: "sb";
  [BattingStats.cs]: "cs";
  [BattingStats.bb]: "bb";
  [BattingStats.hp]: "hp";
  [BattingStats.k]: "k";
  [BattingStats.sh]: "sh";
  [BattingStats.sf]: "sf";
  [BattingStats.gdp]: "gdp";
  [BattingStats.ibb]: "ibb";
  [BattingStats.ci]: "ci";
  [BattingStats.pitchesSeen]: "pitches seen";
  [BattingStats.vorp]: "vorp";
  [BattingStats.split_id]: "split_id";
  [BattingStats.team_abbr]: "team_abbr";
  [BattingStats.league_abbr]: "league_abbr";
  [BattingStats.team_name]: "team_name";
  [BattingStats.league_name]: "league_name";
  [BattingStats.league_level_id]: "league_level_id";
  [BattingStats.bbrefid]: "bbrefid";
  [BattingStats.bbrefminorid]: "bbrefminorid";
  [BattingStats.OOTPpID]: "OOTP pID";
}

export const BattingStatsMap: BattingStatsHeaders = {
  [BattingStats.playerID]: "player ID",
  [BattingStats.lastName]: "lastname",
  [BattingStats.firstName]: "firstname",
  [BattingStats.year]: "year",
  [BattingStats.teamID]: "team ID",
  [BattingStats.g]: "g",
  [BattingStats.gs]: "gs",
  [BattingStats.pa]: "pa",
  [BattingStats.ab]: "ab",
  [BattingStats.h]: "h",
  [BattingStats.secondBase]: "2b",
  [BattingStats.thirdBase]: "3b",
  [BattingStats.hr]: "hr",
  [BattingStats.rbi]: "rbi",
  [BattingStats.r]: "r",
  [BattingStats.sb]: "sb",
  [BattingStats.cs]: "cs",
  [BattingStats.bb]: "bb",
  [BattingStats.hp]: "hp",
  [BattingStats.k]: "k",
  [BattingStats.sh]: "sh",
  [BattingStats.sf]: "sf",
  [BattingStats.gdp]: "gdp",
  [BattingStats.ibb]: "ibb",
  [BattingStats.ci]: "ci",
  [BattingStats.pitchesSeen]: "pitches seen",
  [BattingStats.vorp]: "vorp",
  [BattingStats.split_id]: "split_id",
  [BattingStats.team_abbr]: "team_abbr",
  [BattingStats.league_abbr]: "league_abbr",
  [BattingStats.team_name]: "team_name",
  [BattingStats.league_name]: "league_name",
  [BattingStats.league_level_id]: "league_level_id",
  [BattingStats.bbrefid]: "bbrefid",
  [BattingStats.bbrefminorid]: "bbrefminorid",
  [BattingStats.OOTPpID]: "OOTP pID",
};

export type BattingPlayer = Record<BattingStatsHeaders[BattingStats], any>;
