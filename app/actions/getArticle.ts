"use server";

import { cache } from "react";

//@types
import { GetArticleResponse } from "@types";

//@constants
import { articleContent, articles } from "@constants";

export const getArticle = cache(async (slug: string) => {
  const result: GetArticleResponse = {
    article: {},
    error: null,
  };

  try {
    const item = articles.find((article) => article.slug === slug);

    if (!item) {
      throw new Error(`Article not found with slug ${slug}`);
    }

    result.article = {
      ...item,
      ...articleContent,
    };
  } catch (error) {
    if (error instanceof Error) {
      result.error = error.message;
    } else {
      result.error === "Error fetching article info";
    }
  }

  return result;
});
