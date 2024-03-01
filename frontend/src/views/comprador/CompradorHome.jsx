import ButtonGeneric from '@components/ButtonGeneric'
import naranjas from '../../assets/frutas/naranjas.png'
import zucchini from '../../assets/verduras/zucchini.png'
import nueces from '../../assets/frutos_secos/nueces.png'
import cilantro from '../../assets/aromaticas/cilantro.png'
import productores from '../../assets/productores.png'
import SearchForm from '../../components/SearchForm'
import ButtonOutstanding from '../../components/ButtonOutstanding'
const CompradorHome = ({user= "usuario"}) => {
  
  return ( 
    
    <div className="flex flex-col items-center justify-center w-full h-full">
    <section className='text-accent font-custom-200 w-full mb-10'>
      <h1 className="text-2xl text-center">¡Bienvenido {user}!</h1>
      <p className="text-lg text-center">¿Qué te gustaría comprar hoy?</p>
   <SearchForm />
   <div className='flex flex-row mt-4'>
  <ButtonOutstanding text1="Más" text2="vendidos"/>
  <ButtonOutstanding text1="Ubicación"/>
  <ButtonOutstanding text1="Bolsones"/>
  <ButtonOutstanding text1="Ofertas"/>
   </div>
   
    </section>
   <section className='grid grid-cols-2 gap-4'>
    <ButtonGeneric text="Frutas"       arrow={false} img={naranjas} to="/comprador/frutas"  />     
    <ButtonGeneric text="Verduras"     arrow={false} img={zucchini} to="/comprador/verduras" />   
    <ButtonGeneric text="Aromaticas"   arrow={false} img={cilantro} to="/comprador/aromaticas"   />   
    <ButtonGeneric text="Frutos Secos" arrow={false} img={nueces}   to="/comprador/frutos-secos"/>   
   </section>
    <ButtonGeneric text="Productores" size="landscape" className="gap-x-14 mt-4" img={productores} imgClassName="size-13"/>   
 </div>
  )
}

export default CompradorHome