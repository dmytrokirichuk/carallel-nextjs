//@types
import { Article } from "@types";

//@components
import { Label, Typography } from "@components/ui";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { CustomVideo } from "../ui/customVideo";

interface ArticleContentProps {
  articleInfo: Article;
}

/**
 * Returns the article content component
 * @param ArticleContentProps
 * @returns JSX.Element
 */
const ArticleContent: React.FC<ArticleContentProps> = ({ articleInfo }) => {
  const { content, image, tags, title, type } = articleInfo;

  const renderArticleContent = (contentRaw: any) => {
    return contentRaw.map((contentInfo: any) => {
      if (contentInfo.type === "paragraph") {
        const content = contentInfo as {
          type: string;
          heading: string;
          text: string;
        };

        return (
          <div key={content.heading}>
            <Typography variant="h2">{content.heading}</Typography>
            <Typography variant="p">{content.text}</Typography>
          </div>
        );
      }

      if (contentInfo.type === "video") {
        const content = contentInfo as {
          type: string;
          videoUrl: string;
        };

        return (
          <div key={content.videoUrl}>
            <CustomVideo src={content.videoUrl} />
          </div>
        );
      }
    });
  };

  return (
    <div className="flex flex-col">
      <Typography variant="h1">{title}</Typography>

      {image && (
        <Image
          alt={title ?? "Article image"}
          width={400}
          height={250}
          src={image}
          className="self-center rounded-2xl"
          quality={50}
          priority={true}
        />
      )}

      <Label
        text={type ?? "All"}
        wrapperClassName="my-4 bg-white text-primary-green"
        icon={<BookmarkIcon className="h-5 w-5 stroke-2" />}
      />

      {...renderArticleContent(content)}

      {tags?.length ? (
        <div className="my-4 space-y-2">
          {tags?.map((tag) => (
            <Label
              text={tag}
              key={tag}
              wrapperClassName="bg-primary-brown"
              textClassName="text-white"
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ArticleContent;
