import Link from "next/link";
import { navLinks } from "../data/staticData";

const nav = () => {
  return (
    <nav className="nav">
      {navLinks.map(({ name, href }) => (
        <Link key={name} href={href}>
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default nav;
