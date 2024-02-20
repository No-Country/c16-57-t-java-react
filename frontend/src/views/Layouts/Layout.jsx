import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import NavBar from "@components/NavBar";

import AppHeader from "@components/AppHeader";

const Layout = ({ 
  className, 
  children 
}) => {
  const location = useLocation();
  const hiddenNavPaths = ["/", "/intro"];
  const hiddenHeaderPaths = ["/", "/intro"];

  const isNavHidden = hiddenNavPaths.includes(location.pathname);
  const isHeaderHidden = hiddenHeaderPaths.includes(location.pathname);

  return (
    <div className={twMerge("flex flex-col h-screen", className)}> 
      {/* Hide the header on the intro and landing pages */}
      {isHeaderHidden ? null : (
        <AppHeader />
      )}

      <main className="flex-grow">
        {children}
      </main>

      {/* Hide the footer on the intro and landing pages */}
      {isNavHidden ? null : (
        <footer>
          <NavBar />
        </footer>
      )}
    </div>
  );
}

export default Layout;