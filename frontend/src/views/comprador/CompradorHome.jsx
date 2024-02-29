import ButtonGeneric from '@components/ButtonGeneric'
import naranjas from '../../assets/frutas/naranjas.png'
import zucchini from '../../assets/verduras/zucchini.png'
import nueces from '../../assets/frutos_secos/nueces.png'
import cilantro from '../../assets/aromaticas/cilantro.png'
import productores from '../../assets/productores.png'
import SearchForm from '../../components/SearchForm'
import { Vegetales } from "../../components/Vegetal"
import { useSearch } from "../../hooks/useSearch"
import { useVegetal } from "../../hooks/useVegetal"
import { useCallback,useState } from "react"
import debounce from "just-debounce-it"



const CompradorHome = ({user= "usuario"}) => {

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

<div className="flex flex-col items-center  w-full h-full">
    <section className='text-accent font-custom-200 w-full mb-20'>
    
    <header className="w-full mb-5">
      <form onSubmit={handleSubmit}>
        <section className="flex relative items-center">
          <input onChange={handleChange} 
           value={search} name='search'
            autoFocus 
            placeholder="Buscar"
            className=" rounded-2xl w-full py-2 pl-5 pr-11"/>
           <svg className="absolute right-5 fill-[#99eff0]" 
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20}>
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
           </svg> 
        </section>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}

     </header>

     <main className="w-[100%] ">
     { search ?  <section>
       {loading ? <p>Esta Cargando</p> : <Vegetales vegetales={vegetales}/>}
     </section> :

     <section>

     <h1 className="text-2xl text-center mt-3">¡Bienvenido {user}!</h1>
      <p className="text-lg text-center">¿Qué te gustaría comprar hoy?</p>
     <section className='grid grid-cols-2 gap-4'>
    <ButtonGeneric text="Frutas"       arrow={false} img={naranjas} to="/comprador/frutas"  />     
    <ButtonGeneric text="Verduras"     arrow={false} img={zucchini} to="/comprador/verduras" />   
    <ButtonGeneric text="Aromaticas"   arrow={false} img={cilantro} to="/comprador/aromaticas"   />   
    <ButtonGeneric text="Frutos Secos" arrow={false} img={nueces}   to="/comprador/frutos-secos"/>   
   </section>
    <ButtonGeneric text="Productores" size="landscape" className="gap-x-14 mt-4" img={productores} imgClassName="size-13"/>
     </section>


     }
    
     </main>

    </section>
     
 </div>
  )
}

export default CompradorHome