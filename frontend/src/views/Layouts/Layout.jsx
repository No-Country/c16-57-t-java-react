import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import NavBar2 from "@components/NavBar2";

import AppHeader from "@components/AppHeader";

const Layout = ({ className, children }) => {
  const location = useLocation();
  const hiddenNavPaths = ["/", "/intro"];

  const isNavHidden = hiddenNavPaths.includes(location.pathname);

  return (
    <div className={twMerge("flex flex-col h-screen", className)}> 
      <AppHeader />

      <main className="flex-grow border-red-500">
        {children}
      </main>

      {/* Hide the footer on the intro and landing pages */}
      {isNavHidden ? null : (
        <footer>
          <NavBar2 />
        </footer>
      )}
    </div>
  );
}

export default Layout;