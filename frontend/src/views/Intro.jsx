import ButtonNav from '@components/ButtonNav';
import CarouselIntro from '@components/CarouselIntro'
import imagenIntro from '@/assets/imagenIntro.jpg'
import AppLogo from '@components/AppLogo';

const introParagraphs = [
  'El mejor lugar donde se encuentran consumidores y productores de productos orgánicos',
  'Sin vueltas. Sin intermediarios',
  '<span>¿Sos consumidor?</span> Conectate con el proveedor más cercano a vos, o el que vos quieras',
  '<span>¿Sos productor?</span> Encontrá nuevos clientes para tus productos',
  "<span>¿Sos consumidor?</span> Buscá, seleccioná, pedí, recibí tu pedido",
  '<span>¿Sos productor?</span> Ofrecé, vendé, entregá',
];

const Intro = () => {
  return (
    <div className='flex flex-col items-center gap-0 mx-6 h-dvh bg-background'>
      <section>
        {/* TODO: Usar imagen sin color de fondo */}
        <img
          src={imagenIntro}
          alt="Frutas y verduras organicas, verduMarket"
          className="object-cover object-center max-w-2/3"
        />
      </section>
      
      <section className="flex flex-col items-center gap-4 mx-auto">
        <AppLogo />
        <h2 className="text-2xl font-light text-left text-accent">
          Frutas y Verduras Orgánicas
        </h2>
        <CarouselIntro paragraphs={introParagraphs} intervalMs={2500}/>
      </section>

      {/* TODO: Botones deberían ser para Iniciar sesión y registrarse */}
      <footer className="flex flex-col w-full gap-2 mb-14">
          <ButtonNav text="Comprar" to="/comprador/home" />
          <ButtonNav text="Vender " to="/vendedor/home" variant="outlined"/>
      </footer>

  </div>
)
}

export default Intro