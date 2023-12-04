import ContentLoader from "react-content-loader";

interface ArticleCardLoaderProps {
  type: "rounded" | "rectangle";
}

/**
 * Returns the article card loader component
 * @returns JSX.Element
 */
const ArticleCardLoader: React.FC<ArticleCardLoaderProps> = ({ type }) => {
  if (type === "rectangle") {
    return (
      <ContentLoader
        height={140}
        speed={1}
        viewBox="0 0 250 150"
        className="flex space-x-4"
      >
        <rect x="0" y="0" rx="16" ry="16" width="250" height="150" />
      </ContentLoader>
    );
  }

  return (
    <ContentLoader
      height={140}
      speed={1}
      viewBox="0 0 140 160"
      className="flex "
    >
      <rect x="0" y="0" rx="60" ry="60" width="100" height="100" />
      <rect x="0" y="120" rx="16" ry="16" width="120" height="40" />
    </ContentLoader>
  );
};

export default ArticleCardLoader;
