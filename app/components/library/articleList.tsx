// @types
import { Article } from "@types";

// @components
import { ArticleCard, ArticleCardLoader } from "@components/library";
import Link from "next/link";

interface ArticleListProps {
  cardType: "rounded" | "rectangle";
  articles: Article[];
  isLoading: boolean;
}

/**
 * Returns the article card component
 * @param ArticleListProps
 * @returns JSX.Element
 */

const ArticleList: React.FC<ArticleListProps> = ({
  articles,
  isLoading,
  cardType,
}) => {
  let content: React.ReactNode = null;

  if (isLoading) {
    content = (
      <>
        <ArticleCardLoader type={cardType} />
        <ArticleCardLoader type={cardType} />
        <ArticleCardLoader type={cardType} />
      </>
    );
  }

  if (articles.length > 0) {
    content = articles.map((article) => (
      <Link
        href={`/article/${article.slug}`}
        key={article.slug}
        className="transition-all duration-500 hover:scale-[102%]"
      >
        <ArticleCard
          imageUrl={article.image ?? ""}
          title={article.title ?? ""}
          type={cardType}
        />
      </Link>
    ));
  }

  return (
    <div className="overflow-x-auto py-2">
      <div className="flex w-fit flex-row space-x-11">{content}</div>
    </div>
  );
};

export default ArticleList;
