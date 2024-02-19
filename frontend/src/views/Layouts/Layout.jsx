import { twMerge } from "tailwind-merge";

const Layout = ({ className, children }) => {
  return (
    <div className={twMerge("flex flex-col h-screen", className)}> 
      <header className="p-4 text-2xl text-center bg-accent text-primary-content">
        <h1>Header</h1>
      </header>
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