import Link from "next/link";
import { navLinks } from "../data/staticData";

const nav = () => {
  return (
    <nav className="nav">
      <div className="routes">
        {navLinks.map(({ name, href }) => (
          <Link key={name} href={href}>
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default nav;
