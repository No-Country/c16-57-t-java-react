import { useLocation } from "react-router-dom";
import AppLogo from "@components/AppLogo";

const DebugInfo = () => {
  const mode = location.pathname.split("/")[1];

  return (
    <span className="text-[0.6rem] font-light uppercase text-primary block -mt-3">
      ({mode})
    </span>
  )
}

const AppHeader = () => {
  const location = useLocation();
  const title = location.pathname.split("/")[2];

  return (
    <header className="flex justify-between h-12 p-4 text-lg font-bold capitalize align-top bg-transparent text-md text-accent">
      <h1>
        {title}
        <DebugInfo />
        
      </h1>
      <nav>
        <AppLogo variant="transparent" size="small"/>
      </nav>
    </header>
  );
}

export default AppHeader;