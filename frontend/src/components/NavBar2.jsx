import { NavLink, useLocation } from "react-router-dom";

import IconHome from "@icons/IconHome";
import IconSearch from "@icons/IconSearch";
import IconHistory from "@icons/IconHistory";
import IconProfile from "@icons/IconProfile";

const NavBar2 = () => {
  /* tomar los params de la ruta actual (location) */
  const location = useLocation();
  /* tomar el modo ("vendedor" | "comprador") del primer param de location después de "/" */
  const modo = location.pathname.split("/")[1];

  return (
    <nav className="p-0 text-xs text-center h-14 rounded-t-xl btm-nav bg-accent text-primary-content">
      <NavLink to={`${modo}/home`}>
        <IconHome />
        <span className="sr-only btm-nav-label">Home</span>
      </NavLink>
      <NavLink to={`${modo}/search`}>
        <IconSearch />
        <span className="sr-only btm-nav-label">Buscar</span>
      </NavLink>
      <NavLink to={`${modo}/history`}>
        <IconHistory/>
        <span className="sr-only btm-nav-label">Historial</span>
      </NavLink>
      <NavLink to={`${modo}/profile`}>
        <IconProfile />
        <span className="sr-only btm-nav-label">Perfil</span>
      </NavLink>
    </nav>
  );
}

export default NavBar2;