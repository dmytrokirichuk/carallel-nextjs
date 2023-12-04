"use client";

//@hooks
import { useGetArticles } from "@hooks";
import { useState } from "react";

//@components
import { ArticleList } from "@components/library";
import { ContentNotFound, ErrorMessage, TabSelector } from "@components/ui";
import { ARTICLE_TAG } from "@types";

/**
 * Returns the Library page component
 * @returns JSX.Element
 */
const Library = () => {
  const [activeTab, setActiveTab] = useState<ARTICLE_TAG>(ARTICLE_TAG.ALL);

  const { data, error, isLoading } = useGetArticles(activeTab);

  const articles = data?.articles ?? [];

  return (
    <div className="mobile-content-wrapper container space-y-4 pt-6">
      <TabSelector
        tabs={Object.values(ARTICLE_TAG)}
        selectedTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab as ARTICLE_TAG)}
      />

      <h2 className="text-lg">Recommended</h2>

      {error?.message ? (
        <ErrorMessage error={error.message} />
      ) : articles.length === 0 && !isLoading ? (
        <ContentNotFound message="Articles not found!" />
      ) : (
        <>
          <ArticleList
            articles={articles}
            isLoading={isLoading}
            cardType="rectangle"
          />

          <ArticleList
            articles={articles}
            isLoading={isLoading}
            cardType="rounded"
          />
        </>
      )}
    </div>
  );
};

export default Library;
