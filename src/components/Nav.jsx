import { navLinks } from "../data/staticData";
import DynamicNavLinks from "./DynamicNavLinks";

const nav = () => {
  return (
    <nav className="nav">
      <DynamicNavLinks linksData={navLinks} />
    </nav>
  );
};

export default nav;
