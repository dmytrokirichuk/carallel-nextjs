// @hooks
import { useFetcher } from "@hooks";
import useSWR from "swr";

//@types
import { ARTICLE_TAG, GetArticlesResponse } from "@types";

/**
 * Get articles list by tag
 * @returns
 */
export function useGetArticles(articleTag: ARTICLE_TAG) {
  const fetcher = useFetcher();

  return useSWR<GetArticlesResponse>(
    `/api/article?articleTag=${articleTag}`,
    fetcher,
    {
      refreshInterval: 30000,
    },
  );
}

export default useGetArticles;
