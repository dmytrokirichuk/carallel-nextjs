//@components
import { Typography } from "@components/ui";
import Image from "next/image";

interface ArticleCardProps {
  type: "rounded" | "rectangle";
  imageUrl: string;
  title: string;
}

/**
 * Returns the article card component
 * @param ArticleCardProps
 * @returns JSX.Element
 */

const ArticleCard: React.FC<ArticleCardProps> = ({ imageUrl, title, type }) => {
  if (type === "rectangle") {
    return (
      <div className="relative h-[150px] w-[250px] rounded-2xl shadow-md">
        <Image
          alt={title}
          src={imageUrl}
          priority={true}
          fill={true}
          style={{
            objectFit: "cover",
          }}
          sizes="200px"
          quality={50}
          className="rounded-2xl"
        />
        <div className="absolute bottom-0 w-full rounded-b-2xl bg-white">
          <Typography variant="p" className="line-clamp-2 px-4 pb-1 pt-4">
            {title}
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className="flex max-w-[150px] flex-col items-center space-y-4">
      <div className="relative flex h-32 w-32">
        <Image
          alt={title}
          src={imageUrl}
          priority={true}
          quality={50}
          fill={true}
          style={{
            objectFit: "cover",
          }}
          className="rounded-full"
          sizes="200px"
        />
      </div>

      <Typography variant="p" className="line-clamp-2 text-center">
        {title}
      </Typography>
    </div>
  );
};

export default ArticleCard;
