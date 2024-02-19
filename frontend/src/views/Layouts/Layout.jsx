import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import AppHeader from "@components/AppHeader";

const Layout = ({ className, children }) => {
  const location = useLocation();
  const hiddenNavPaths = ["/", "/intro"];

  const isNavHidden = hiddenNavPaths.includes(location.pathname);

  return (
    <div className={twMerge("flex flex-col h-screen", className)}> 
      <AppHeader />
      <main className="flex-grow">
        {children}
      </main>
      {/* Hide the footer on the intro and landing pages */}
      {isNavHidden ? null : (
        <footer className="p-4 text-center bg-accent text-primary-content">
          NavBar
        </footer>
      )}
    </div>
  );
}

export default Layout;