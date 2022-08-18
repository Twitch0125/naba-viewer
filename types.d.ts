export interface BattingPlayer {
  [BattingPlayerStats.playerID]: number;
  [BattingPlayerStats.lastname]: string;
  [BattingPlayerStats.firstname]: string;
  [BattingPlayerStats.year]: number;
  [BattingPlayerStats.teamID]: number;
  [BattingPlayerStats.g]: number;
  [BattingPlayerStats.gs]: number;
  [BattingPlayerStats.pa]: number;
  [BattingPlayerStats.ab]: number;
  [BattingPlayerStats.h]: number;
  [BattingPlayerStats.secondBase]: number;
  [BattingPlayerStats.thirdBase]: number;
  [BattingPlayerStats.hr]: number;
  [BattingPlayerStats.rbi]: number;
  [BattingPlayerStats.r]: number;
  [BattingPlayerStats.sb]: number;
  [BattingPlayerStats.cs]: number;
  [BattingPlayerStats.bb]: number;
  [BattingPlayerStats.hp]: number;
  [BattingPlayerStats.k]: number;
  [BattingPlayerStats.sh]: number;
  [BattingPlayerStats.sf]: number;
  [BattingPlayerStats.gdp]: number;
  [BattingPlayerStats.ibb]: number;
  [BattingPlayerStats.ci]: number;
  [BattingPlayerStats.pitchesSeen]: number;
  [BattingPlayerStats.vorp]: number;
  [BattingPlayerStats.split_id]: number;
  [BattingPlayerStats.team_abbr]: string;
  [BattingPlayerStats.league_abbr]: string;
  [BattingPlayerStats.team_name]: string;
  [BattingPlayerStats.league_name]: string;
  [BattingPlayerStats.league_level_id]: number;
  [BattingPlayerStats.bbrefid]: number | null;
  [BattingPlayerStats.bbrefminorid]: number | null;
  [BattingPlayerStats.OOTPpID]: number;
}

export enum BattingPlayerStats {
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
