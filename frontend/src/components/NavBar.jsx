import { NavLink, useLocation } from "react-router-dom";

import IconHome from "@icons/IconHome";
import IconSearch from "@icons/IconSearch";
import IconHistory from "@icons/IconHistory";
import IconProfile from "@icons/IconProfile";

const NavBar = () => {
  /* tomar los params de la ruta actual (location) */
  const location = useLocation();
  /* tomar el modo ("vendedor" | "comprador") del primer param de location después de "/" */
  const modo = location.pathname.split("/")[1];

  /* Definir clase .active que agrega NavLink a .nav-active por compatilibidad con DaisyUI */
  const navLinkClasses = ({ isActive }) => [
    isActive ? "nav-active" : "",
  ].join(" ");

  // TODO: Agregar sombra a NavBar según Figma

  return (
    <nav className="p-0 text-xs text-center h-14 rounded-t-xl btm-nav bg-primary/25 text-accent">
      <NavLink to={`${modo}/home`} className={navLinkClasses}>
        <IconHome />
        <span className="sr-only btm-nav-label">Home</span>
      </NavLink>
      <NavLink to={`${modo}/search`} className={navLinkClasses}>
        <IconSearch />
        <span className="sr-only btm-nav-label">Buscar</span>
      </NavLink>
      <NavLink to={`${modo}/history`} className={navLinkClasses}>
        <IconHistory/>
        <span className="sr-only btm-nav-label">Historial</span>
      </NavLink>
      <NavLink to={`${modo}/profile`} className={navLinkClasses}>
        <IconProfile />
        <span className="sr-only btm-nav-label">Perfil</span>
      </NavLink>
    </nav>
  );
}

export default NavBar;