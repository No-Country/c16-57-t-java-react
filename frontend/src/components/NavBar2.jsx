import { NavLink } from "react-router-dom";

import IconHome from "@icons/IconHome";
import IconSearch from "@icons/IconSearch";
import IconHistory from "@icons/IconHistory";
import IconProfile from "@icons/IconProfile";

const NavBar2 = () => {
  return (
    <nav className="p-0 text-xs text-center h-14 rounded-t-xl btm-nav bg-accent text-primary-content">
      <NavLink to="comprador/home">
        <IconHome />
        <span className="sr-only btm-nav-label">Home</span>
      </NavLink>
      <NavLink to="comprador/search">
        <IconSearch />
        <span className="sr-only btm-nav-label">Buscar</span>
      </NavLink>
      <NavLink to="comprador/history">
        <IconHistory/>
        <span className="sr-only btm-nav-label">Historial</span>
      </NavLink>
      <NavLink to="comprador/profile">
        <IconProfile />
        <span className="sr-only btm-nav-label">Perfil</span>
      </NavLink>
    </nav>
  );
}

export default NavBar2;