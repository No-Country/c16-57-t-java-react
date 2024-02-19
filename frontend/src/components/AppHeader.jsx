import IconMenu from "@icons/IconMenu";

const AppHeader = () => {
  return (
    <header className="flex justify-between h-12 p-4 align-top text-md bg-accent text-primary-content">
      <h1>Nombre del Usuario</h1>
      <nav>
        <IconMenu />
      </nav>
      </header>
  );
}

export default AppHeader;