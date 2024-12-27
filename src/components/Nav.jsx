import { navLinks } from "../data/staticData";
import DynamicNavLinks from "./DynamicNavLinks";

const Nav = () => {
  return (
    <nav className="nav">
      <DynamicNavLinks linksData={navLinks} />
    </nav>
  );
};

export default Nav;
