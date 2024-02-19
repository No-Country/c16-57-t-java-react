import { Boton } from '../components/Boton';
import { NavBar } from '../components/NavBar'
import { Stepper } from '../components/Stepper'
import imagen from '../utils/img/imagenIntro.jpg'
import logoV from  '../utils/img/V.jpg';
const Intro = () => {
  return (
    <main className='
    flex flex-wrap justify-center  h-screen'>
 
<img 
src={imagen} 
alt="Frutas y verduras organicas, verduMarket" 
className='w-full h-1/2 md:h-1/2 lg:h-1/2 object-center object-cover max-w-1/3 md:max-w-2/3 lg:max-w-full rounded-xl '
/>  
<section className='flex justify-start flex-col '>
<img src={logoV} alt="logo V, verduMarket" className='w-10 h-10 items-start'/>
</section>
<Stepper/>
<div className='flex gap-x-4'>

              <Boton texto="Comprar" to="/homecomprador" />
              <Boton texto="Vender " to="/homevendedor" />
</div>

    </main>
)
}

export default Intro