import ButtonGeneric from '@components/ButtonGeneric'
import { SearchBar } from '@components/SearchBar'
import naranjas from '../../assets/frutas/naranjas.png'
import zucchini from '../../assets/verduras/zucchini.png'
import nueces from '../../assets/frutos_secos/nueces.png'
import cilantro from '../../assets/aromaticas/cilantro.png'
import productores from '../../assets/productores.png'
const CompradorHome = ({user= "usuario"}) => {

  return ( 

<div className="flex flex-col gap-4 items-center justify-center w-full h-full">
    <section className='text-accent'>
      <h1 className="text-3xl font-bold">¡Bienvenido {user}!</h1>
      <p className="text-xl">¿Qué te gustaría comprar hoy?</p>
    </section>
   <SearchBar className="items-start"/>
   <section className='grid grid-cols-2 gap-4'>
    <ButtonGeneric text="Frutas"   img={naranjas} to="/frutas"  />     
    <ButtonGeneric text="Verduras"   img={zucchini}/>   
    <ButtonGeneric text="Aromaticas"   img={cilantro}/>   
    <ButtonGeneric text="Frutos Secos"  img={nueces}/>   
   </section>
    <ButtonGeneric text="Productores" size="landscape" className="gap-x-14" img={productores} imgClassName="size-13"/>   
 </div>
  )
}

export default CompradorHome