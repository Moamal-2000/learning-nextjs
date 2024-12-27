import Link from "next/link";

const DynamicNavLinks = ({ linksData }) => {
  return linksData.map(({ name, href, children }) => {
    return (
      <>
        <Link key={name} href={href}>
          {name}
        </Link>
        {children && <DynamicNavLinks linksData={children} />}
      </>
    );
  });
};

export default DynamicNavLinks;
