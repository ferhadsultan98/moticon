import "server-only";

const REPO_API = "https://api.github.com/repos/ferhadsultan98/moticon";
const REVALIDATE_SECONDS = 60 * 60;

type RepoResponse = {
  stargazers_count: number;
};

export const fetchStars = async (): Promise<number | null> => {
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {};

    const res = await fetch(REPO_API, {
      headers,
      next: { revalidate: REVALIDATE_SECONDS, tags: ["github-stars"] },
    });

    if (!res.ok) {
      // 403/429 = unauthenticated rate limit (common in local dev without a
      // GITHUB_TOKEN). Not an app error — the UI just hides the star count.
      if (res.status !== 403 && res.status !== 429) {
        console.warn(`[github] stars fetch failed: ${res.status}`);
      }
      return null;
    }

    const data = (await res.json()) as RepoResponse;
    return typeof data.stargazers_count === "number" ? data.stargazers_count : null;
  } catch (err) {
    console.warn("[github] stars fetch threw:", err);
    return null;
  }
};
