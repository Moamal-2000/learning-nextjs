"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DynamicNavLinks = ({ linksData }) => {
  const activePath = usePathname();

  return linksData.map(({ name, href, children }) => {
    const activeClass = activePath === href ? "active" : "";

    return (
      <>
        <Link key={name} href={href} className={activeClass}>
          {name}
        </Link>
        {children && <DynamicNavLinks linksData={children} />}
      </>
    );
  });
};

export default DynamicNavLinks;
