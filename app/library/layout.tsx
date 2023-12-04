//@styles
import "@styles";
import "react-toastify/dist/ReactToastify.css";

//@components
import { Footer, Header } from "@components";

//@types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library",
  description: "Carralel library page",
};

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="bg-primary-light">
    <Header title="Library" />
    <div className="mobile-content-wrapper">{children}</div>
    <Footer />
  </div>
);

export default Layout;
