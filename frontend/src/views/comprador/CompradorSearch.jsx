import { Vegetales } from "../../components/Vegetal"
import { useSearch } from "../../hooks/useSearch"
import { useVegetal } from "../../hooks/useVegetal"
import { useCallback,useState } from "react"
import debounce from "just-debounce-it"




const CompradorSearch = () => {


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
    <div className="flex flex-col gap-4 items-center  w-full h-full">
     <h3>Verduras</h3>
     <header>
      <form onSubmit={handleSubmit}>
        <section className="flex relative items-center">
          <input onChange={handleChange} 
           value={search} name='search'
            autoFocus 
            placeholder="Buscar"
            className="p-1"/>
           <svg className="absolute right-0 fill-[#007274]" 
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20}>
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
           </svg> 
        </section>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}

     </header>

     <main className="w-[100%] ">
      {loading ? <p>Esta Cargando</p> : <Vegetales vegetales={vegetales}/>}
     </main>
    </div>
  )
}

export default CompradorSearch