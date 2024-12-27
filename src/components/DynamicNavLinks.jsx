"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const DynamicNavLinks = ({ linksData, cssModule, nameClass = "active" }) => {
  const activePath = usePathname();

  return linksData.map(({ name, href, children }) => {
    const activeClass = activePath === href ? cssModule[nameClass] : "";

    return (
      <Fragment key={name}>
        <Link href={href} className={activeClass}>
          {name}
        </Link>
        {children && <DynamicNavLinks linksData={children} />}
      </Fragment>
    );
  });
};

export default DynamicNavLinks;
