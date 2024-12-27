import { navLinks } from "../data/staticData";
import DynamicNavLinks from "./DynamicNavLinks";
import s from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <DynamicNavLinks linksData={navLinks} cssModule={s} />
    </nav>
  );
};

export default Nav;
