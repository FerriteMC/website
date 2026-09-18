import type { APIRoute } from "astro";
import { fetchFerriteMCBstatsPlayerCount, FERRITEMC_PLAYERCOUNT_KEY } from "@/utils/bstats";
import { env } from "cloudflare:workers";

export const GET: APIRoute = async () => {
  const kv = env.WEBSITE_CACHE;
  if (kv) {
    const cached = await kv.get(FERRITEMC_PLAYERCOUNT_KEY);
    if (cached !== null) {
      const { players } = JSON.parse(cached);
      return new Response(JSON.stringify({ players }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=300",
        },
      });
    }
  }

  const { players, error } = await fetchFerriteMCBstatsPlayerCount();

  if (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify({ players }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300",
    },
  });
};
