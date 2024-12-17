import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="sideNavBar">
      <div className="navLogoContainer">
        <img src="/vite.svg" alt="logo" className="navLogo" />
        <span className="navAppTitle">Search Upp</span>
      </div>
      <ul className="navList">
        <li className={location.pathname === "/search" || location.pathname === "/" ? "activeNavItem" : "normalNavItem"}>
          <NavLink to="/search" className={({ isActive }) => isActive ? "activeNavLink" : "normalNavLink"}>
            Search
          </NavLink>
        </li>
        <li className={location.pathname === "/history" ? "activeNavItem" : "normalNavItem"}>
          <NavLink to="/history" className={({ isActive }) => isActive ? "activeNavLink" : "normalNavLink"}>
            History
          </NavLink>
        </li>
        <li className={location.pathname === "/settings" ? "activeNavItem" : "normalNavItem"}>
          <NavLink to="/settings" className={({ isActive }) => isActive ? "activeNavLink" : "normalNavLink"}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;