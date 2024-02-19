import { Boton } from '@components/Boton';
import { Stepper } from '@components/Stepper'
import imagenIntro from '@/assets/imagenIntro.jpg'
import logoV from  '@/assets/V.jpg';

const Intro = () => {
  return (
    <div className='flex flex-wrap justify-center h-full'>
      <img
        src={imagenIntro}
        alt="Frutas y verduras organicas, verduMarket"
        className='object-cover object-center w-full h-1/2 md:h-1/2 lg:h-1/2 max-w-1/3 md:max-w-2/3 lg:max-w-full rounded-xl '
      />
      <section className='flex flex-col justify-start '>
        <img src={logoV} alt="logo V, verduMarket" className='items-start w-10 h-10'/>
      </section>
      <Stepper/>
      <div className='flex gap-x-4'>
        <Boton texto="Comprar" to="/comprador/home" />
        <Boton texto="Vender " to="/vendedor/home" />
      </div>
  </div>
)
}

export default Intro