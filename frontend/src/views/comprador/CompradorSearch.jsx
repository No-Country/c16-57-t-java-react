import { Vegetales } from "../../components/Vegetal"
import { useSearch } from "../../hooks/useSearch"
import { useVegetal } from "../../hooks/useVegetal"
import { useCallback,useState } from "react"
import debounce from "just-debounce-it"
import IconSearch from "@components/Icons/IconSearch"
import IconLeftArrow from "@components/Icons/IconLeftArrow"
import { useNavigate } from "react-router-dom";
IconLeftArrow



const CompradorSearch = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    // Navegar a la vista anterior
    navigate(-1);
  };

const {search,updateSearch,error} = useSearch();
const {vegetales,getVegetales,loading}= useVegetal({search})

const debouncedGetVegetales = useCallback( debounce(search => { // debounce 
  console.log('Search' + search);
  getVegetales({search})
},500,true),
[getVegetales])

const handleSubmit = (event) => {
  event.preventDefault()

  getVegetales({search})
}

const handleChange = (event) => {
  const newQuery = event.target.value;

  updateSearch(newQuery)
  debouncedGetVegetales(newQuery);
}
  return (
    <div className="flex flex-col">
      <section className="flex flex-row mb-5">
        <button className="" onClick={handleGoBack}>
            <IconLeftArrow/>    
        </button>
      <h1 className="text-2xl font-custom-200 text-accent">Buscá tus productos</h1>
      </section>
     <header>
      <form onSubmit={handleSubmit}>
        <div className="flex-1 relative flex items-center">
          <input onChange={handleChange} 
           value={search} name='search'
            autoFocus 
            placeholder="Buscar"
            className="w-full h-[32px] px-6 border-2 border-primary/50 rounded-[16px] 
            font-custom placeholder:text-accent
            focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent relative overflow-hidden mx-auto my-0 bg-[#e3e9e4] "/>
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
      {error && <p className="text-red-600 p-2 text-xl text-center">{error}</p>}

     </header>

     <main className="w-[100%] mt-4 p-2">
      {loading ? <p>Esta Cargando</p> : <Vegetales vegetales={vegetales}/>}
     </main>
    </div>
  )
}

export default CompradorSearch


// 

/* <div className='main-container w-[327px] h-[32px] bg-[#e3e9e4] rounded-[16px] border-solid border border-[rgba(9,80,18,0.3)] relative overflow-hidden mx-auto my-0'>
<div className='w-[24px] h-[24px] bg-[url(../assets/images/dc14343d-4237-433e-8043-c02194d259a1.png)] bg-cover bg-no-repeat absolute top-[3px] left-[287.113px] overflow-hidden' />
<span className="flex w-[65px] h-[11.75px] justify-center items-start font-['Montserrat'] text-[12px] font-normal leading-[11.75px] text-[#095012] tracking-[0.4px] absolute top-[6px] left-[5.113px] text-center whitespace-nowrap z-[1]">
  Buscar
</span>
</div> */