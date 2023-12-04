//@styles
import "@styles";
import "react-toastify/dist/ReactToastify.css";

//@components
import { BackLink } from "@components/ui";

//@actions
import { getArticle } from "@actions";

//@types
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { article } = await getArticle(params.slug);

  return {
    title: article.title,
  };
}

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="content-container">
    <div className="sticky top-2 z-10 w-[112px] rounded-xl bg-white p-2 shadow-md">
      <BackLink url="library" />
    </div>
    {children}
  </div>
);

export default Layout;
