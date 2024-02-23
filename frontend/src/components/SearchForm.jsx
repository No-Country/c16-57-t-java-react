import { useState } from "react";

import IconSearch from "@components/Icons/IconSearch"

const SearchForm = ({
  search = "",
  setSearch
}) => {
  const [searchTerm, setSearchTerm] = useState(search);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearch(searchTerm);
  }

  return (
    <form className="flex flex-col">
      <label 
        htmlFor="search" 
        className="block mb-2 text-sm font-semibold text-primary sr-only">
        Buscar
      </label>
      {/* Input container */}
      <div className="flex-1 relative flex items-center">
        <input 
          id="search" 
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className={`
            w-full p-2 border-2 border-primary/50 rounded-md
            focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent
            `}
        />
        <button 
          type="submit" 
          className={`
            flex items-center justify-center aspect-square h-full bg-transparent text-primary rounded-md absolute right-0
            focus:outline-none focus:border-accent focus:border-2 focus:ring-1 focus:ring-accent focus:bg-neutral/50 focus:text-accent
            `}>
          <IconSearch className="w-6 h-6 text-white" />
        </button>
      </div>
    </form>
  )
}

export default SearchForm;