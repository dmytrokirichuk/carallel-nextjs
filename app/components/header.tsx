//@components
import { IconButton, Typography } from "@components/ui";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
  title: string;
}

/**
 * Returns the header component
 * @param HeaderProps
 * @returns JSX.Element
 */
const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className="container flex items-center justify-between bg-primary-light py-2 shadow-md">
    <IconButton>
      <Cog6ToothIcon className="h-5 w-5 text-primary-grey" />
    </IconButton>
    <Typography variant="h1" className="my-0 text-base font-normal">
      {title}
    </Typography>
    <IconButton>
      <BellIcon className="h-5 w-5 text-primary-grey" />
    </IconButton>
  </header>
);

export default Header;
