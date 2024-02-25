import ButtonGeneric from '@components/ButtonGeneric'
import naranjas from '../../assets/frutas/naranjas.png'
import zucchini from '../../assets/verduras/zucchini.png'
import nueces from '../../assets/frutos_secos/nueces.png'
import cilantro from '../../assets/aromaticas/cilantro.png'
import productores from '../../assets/productores.png'
import SearchForm from '../../components/SearchForm'
const CompradorHome = ({user= "usuario"}) => {

  return ( 

<div className="flex flex-col gap-4 items-center justify-center w-full h-full">
   <SearchForm className=""/>
    <section className='text-accent'>
      <h1 className="text-3xl font-bold">¡Bienvenido {user}!</h1>
      <p className="text-xl">¿Qué te gustaría comprar hoy?</p>
    </section>
   <section className='grid grid-cols-2 gap-4'>
    <ButtonGeneric text="Frutas"       arrow={false} img={naranjas} to="/comprador/frutas"  />     
    <ButtonGeneric text="Verduras"     arrow={false} img={zucchini} to="/comprador/verduras" />   
    <ButtonGeneric text="Aromaticas"   arrow={false} img={cilantro} to="/comprador/aromaticas"   />   
    <ButtonGeneric text="Frutos Secos" arrow={false} img={nueces}   to="/comprador/frutos-secos"/>   
   </section>
    <ButtonGeneric text="Productores" size="landscape" className="gap-x-14" img={productores} imgClassName="size-13"/>   
 </div>
  )
}

export default CompradorHome