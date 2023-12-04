//@actions
import { getArticle, getRelatedArticles } from "@actions";

//@components
import { ArticleContent } from "@components/article";
import { ArticleList } from "@components/library";
import { ErrorMessage, Typography } from "@components/ui";

interface ArticleProps {
  params: {
    slug: string;
  };
}

/**
 * Returns the article page component
 * @returns JSX.Element
 */
const Article = async ({ params }: ArticleProps) => {
  const articleInfo = await getArticle(params.slug);
  const relatedArticles = await getRelatedArticles(params.slug);

  return (
    <main className="flex flex-col space-y-2 px-4">
      {articleInfo.error ? (
        <ErrorMessage error={articleInfo.error} />
      ) : (
        <ArticleContent articleInfo={articleInfo.article} />
      )}

      {relatedArticles.error ? (
        <ErrorMessage error={relatedArticles.error} />
      ) : (
        <div>
          <Typography variant="h3"> Related Articles</Typography>
          <ArticleList
            articles={relatedArticles.articles}
            cardType="rectangle"
            isLoading={false}
          />
        </div>
      )}
    </main>
  );
};

export default Article;
