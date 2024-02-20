import { useLocation } from "react-router-dom";
import AppLogo from "@components/AppLogo";

const AppHeader = () => {
  const location = useLocation();
  const title = location.pathname.split("/")[2]

  return (
    <header className="flex justify-between h-12 p-4 text-lg font-bold capitalize align-top bg-transparent text-md text-accent">
      <h1>{title}</h1>
      <nav>
        <AppLogo variant="transparent" size="small"/>
      </nav>
    </header>
  );
}

export default AppHeader;