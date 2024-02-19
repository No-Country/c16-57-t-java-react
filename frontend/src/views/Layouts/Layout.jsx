import { twMerge } from "tailwind-merge";

import AppHeader from "@components/AppHeader";

const Layout = ({ className, children }) => {
  return (
    <div className={twMerge("flex flex-col h-screen", className)}> 
      <AppHeader />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="p-4 text-center bg-accent text-primary-content">
        NavBar
      </footer>
    </div>
  );
}

export default Layout;