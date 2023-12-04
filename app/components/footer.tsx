"use client";

import React from "react";

//@components
import {
  BookOpenIcon,
  CheckCircleIcon,
  HomeIcon,
  UserGroupIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

//@hooks
import { usePathname } from "next/navigation";

//@utils
import { cn } from "@utils";

const links = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
    disabled: true,
  },
  {
    title: "Library",
    url: "/library",
    icon: BookOpenIcon,
  },
  {
    title: "Plan",
    url: "/plan",
    icon: CheckCircleIcon,
    disabled: true,
  },
  {
    title: "Tools",
    url: "/tools",
    icon: WrenchIcon,
    disabled: true,
  },
  {
    title: "Support",
    url: "/support",
    icon: UserGroupIcon,
    disabled: true,
  },
];

/**
 * Returns the Footer component
 * @returns JSX.Element
 */
const Footer: React.FC = () => {
  const pathname = usePathname();

  return (
    <footer className="container py-3 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)]">
      <nav className="flex items-center justify-between bg-primary-light">
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className={cn(
              "flex flex-col items-center font-medium text-primary-grey",
              pathname === link.url && "text-primary-green",
              link.disabled &&
                "pointer-events-none cursor-not-allowed opacity-70",
            )}
          >
            {<link.icon className="h-5 w-5" />}
            {link.title}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
