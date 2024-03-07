import { NavLink, useLocation } from "react-router-dom";

import IconHome from "@icons/IconHome";
import IconSearch from "@icons/IconSearch";
import IconHistory from "@icons/IconHistory";
import IconProfile from "@icons/IconProfile";
import IconCarrito from "./Icons/IconCarrito";


const NavBar = () => {
  /* tomar los params de la ruta actual (location) */
  const location = useLocation();
  /* tomar el modo ("vendedor" | "comprador") del primer param de location después de "/" */
  const modo = location.pathname.split("/")[1];

  /* Definir clase .active que agrega NavLink a .nav-active por compatilibidad con DaisyUI */
  const navLinkClasses = ({ isActive }) => [
    isActive ? "nav-active" : "",
  ].join(" ");

  //: Agregar sombra a NavBar según Figma
//*HECHO
  
return (
    <nav className="p-0 text-xs text-center h-14 rounded-t-xl btm-nav bg-[#D5DFD7] text-accent ">
      <NavLink to={`${modo}/home`} className={navLinkClasses}>
        <IconHome />
        <span className="sr-only btm-nav-label">Home</span>
      </NavLink>
      <NavLink to={`${modo}/search`} className={navLinkClasses}>
        <IconSearch />
        <span className="sr-only btm-nav-label">Buscar</span>
      </NavLink>

      <NavLink  className='absolute -top-9 w-[61px] h-[61px] rounded-full
                 bg-[#D5DFD7] fill-[#677B58] z-10 border-white border-[2px] shadow-2xl'>
       <IconCarrito/>
        <span className="sr-only btm-nav-label">Carito</span>
        <span className="absolute -top-1 -right-1 bg-red-400 w-[22px] h-[22px]
          text-amber-50 flex items-center justify-center text-[16px] rounded-full " >0</span>
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