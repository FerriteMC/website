const BSTATS_URL = "https://bstats.org/api/v1/plugins/580/charts/players/data/?maxElements=1";

export const FERRITEMC_PLAYERCOUNT_KEY = "ferritemc-playercount";

export async function fetchFerriteMCBstatsPlayerCount(): Promise<{ players: number; error?: string }> {
  const res = await fetch(BSTATS_URL);

  if (!res.ok) {
    return { players: 0, error: "Failed to fetch stats" };
  }

  const data = (await res.json()) as Array<[number, number]> | null | undefined;
  const players = data?.[0]?.[1] ?? 0;
  return { players };
}
