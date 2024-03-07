import SearchForm from "@components/SearchForm"
import ButtonGeneric from "@components/ButtonGeneric" 
import naranjas from '../../assets/frutas/naranjas.png'
import zucchini from '../../assets/verduras/zucchini.png'
import nueces from '../../assets/frutos_secos/nueces.png'
import cilantro from '../../assets/aromaticas/cilantro.png'
import productores from '../../assets/productores.png'

const VendedorHome = ({user = "Productor"}) => {
  return (
    
    <div className="flex flex-col items-center w-full h-full">
    <section className='text-accent w-full mb-10'>
      <h1 className="text-[24px] font-medium font-custom text-center mb-8">¡Bienvenido {user}!</h1>
   <SearchForm />
   <div className=" justify-center text-center px-12 font-['Montserrat'] text-[16px] font-medium leading-[24px] text-accent mt-4">
  Elegí la categoría del producto que vas a publicar 
   </div>
   
    </section>
   <section className='grid grid-cols-2 gap-4'>
    <ButtonGeneric text="Frutas"       arrow={false} img={naranjas} to="/comprador/frutas"  />     
    <ButtonGeneric text="Verduras"     arrow={false} img={zucchini} to="/comprador/verduras" />   
    <ButtonGeneric text="Aromaticas"   arrow={false} img={cilantro} to="/comprador/aromaticas"   />   
    <ButtonGeneric text="Frutos Secos" arrow={false} img={nueces}   to="/comprador/frutos-secos"/>   
   </section>
    <ButtonGeneric text="Ver mis publicaciones" size="landscape" className="gap-x-6 mt-4" img={productores} imgClassName="size-13" arrow={false}/>   
 </div>
  )
}

export default VendedorHome

// <div className="main-container w-[261px] h-[50px] font-['Montserrat'] text-[16px] font-medium leading-[24px] text-[#095012] relative mx-auto my-0" />
