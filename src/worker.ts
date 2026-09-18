import { handle } from "@astrojs/cloudflare/handler";
import { downloadsPageDataKvKey, fetchDownloadsPageData } from "./utils/download";
import { FERRITEMC_PLAYERCOUNT_KEY, fetchFerriteMCBstatsPlayerCount } from "./utils/bstats";

export default {
  async fetch(request, env, ctx) {
    return handle(request, env, ctx);
  },
  async scheduled(_controller, env, _ctx) {
    await updateDownloadsPageCache(env);
    await updateStatsCache(env);
  },
} satisfies ExportedHandler<Env>;

async function updateDownloadsPageCache(env: Env) {
  const projects = ["papercut", "relay", "velonation", "blocklest"];

  for (const project of projects) {
    const data = await fetchDownloadsPageData(project);
    if (
      data.stableBuildsResult.error === undefined &&
      data.experimentalBuildsResult?.error === undefined &&
      data.projectResult.error === undefined
    ) {
      await env.WEBSITE_CACHE.put(downloadsPageDataKvKey(project), JSON.stringify(data));
    }
  }
}

async function updateStatsCache(env: Env) {
  const { players, error } = await fetchFerriteMCBstatsPlayerCount();
  if (!error) {
    await env.WEBSITE_CACHE.put(FERRITEMC_PLAYERCOUNT_KEY, JSON.stringify({ players }));
  }
}
