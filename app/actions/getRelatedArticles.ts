"use server";

import { cache } from "react";

//@lib

//@types
import { GetRelatedArticlesResponse } from "@types";

//@constants
import { articles } from "@constants";

export const getRelatedArticles = cache(async (slug: string) => {
  const result: GetRelatedArticlesResponse = {
    articles: [],
    error: null,
  };

  try {
    const item = articles.find((article) => article.slug === slug);

    if (!item) {
      throw new Error(`Article not found with slug ${slug}`);
    }

    const relatedArticles = articles.filter(
      (article) => article.type === item.type,
    );

    result.articles = relatedArticles;
  } catch (error) {
    if (error instanceof Error) {
      result.error = error.message;
    } else {
      result.error === "Error fetching article info";
    }
  }

  return result;
});
