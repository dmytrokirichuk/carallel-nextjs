//@lib

//@types
import { ARTICLE_TAG } from "@types";
import { NextRequest } from "next/server";

//@constants
import { articles } from "@constants";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const articleTag =
    (searchParams.get("articleTag") as ARTICLE_TAG) ?? ARTICLE_TAG.ALL;

  const response =
    articleTag === ARTICLE_TAG.ALL
      ? articles
      : articles.filter((article) => article.type === articleTag);

  return new Response(
    JSON.stringify({
      articles: response,
    }),
  );
}
